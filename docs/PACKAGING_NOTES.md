# Packaging Notes

Known packaging defects, and a log of consumer-facing breakages that were hard to
diagnose. Read this first when an MFE reports that the library "broke after a
version bump" — several of these produce errors that point nowhere near the cause.

**Verification gate:** `npm run verify` ([scripts/verify-package.mjs](../scripts/verify-package.mjs))
checks most of this automatically and runs on `prepublishOnly`.
**Consumer-side triage:** copy [scripts/diag-mfe.cjs](../scripts/diag-mfe.cjs) to
the MFE root and run `node diag-mfe.cjs`.

---

## Open — `moment` is bundled as a private second copy

**Severity:** functional bug + 92KB of dead weight
**Reported by:** `npm run verify` check 7 — *"moment (declared external but a subpath leaked through)"*

### What happens

[`IpsTimePicker.tsx:12`](../src/components/IpsTimePicker/IpsTimePicker.tsx#L12) does:

```ts
import 'moment/locale/he'
```

`vite.config.ts` lists `'moment'` in `external`, but that is an **exact string
match** — it does not cover the `moment/locale/he` subpath. So Rollup bundles the
locale, and the locale file pulls the whole library in with it:

```
dist/node_modules/moment/locale/he.js   →  import { __require } from "../moment.js"
dist/node_modules/moment/moment.js      →  92 KB, private to this package
```

Confirmed: there is **no reference to the external `"moment"` anywhere in `dist/`**.
The library only ever touches its own private copy.

### Why it matters

`AdapterMoment` comes from `@mui/x-date-pickers`, which *is* external — so the
picker uses the **consumer's** `moment`. The Hebrew locale gets registered on our
private copy, which nothing else can see. The locale never reaches the picker.

*(The mechanism is confirmed from the built output; the visual effect on the
picker was not runtime-tested.)*

### Fix

Add the subpath pattern to `external` in `vite.config.ts`, alongside the existing
`'moment'` entry:

```ts
'moment',
/^moment\//,     // locale imports must resolve to the consumer's copy
```

`moment` is already a `dependency`, so consumers still get it installed. After the
change, `import 'moment/locale/he'` stays in the output as a bare specifier and
registers Hebrew on the same instance `AdapterMoment` uses.

**Verify:** `npm run verify` check 7 should stop naming `moment`, and
`dist/node_modules/moment/` should disappear entirely.

---

## Open — `@tanstack/*` shipped twice

**Severity:** bloat only
**Reported by:** `npm run verify` check 7

`@tanstack/react-table` and `@tanstack/react-virtual` are declared in
`dependencies` **and** bundled into `dist/node_modules/`. Consumers download both
copies and load whichever the bundler picks.

Pick one: either add them to `external` (they are already dependencies, so they
resolve at the consumer), or drop them from `dependencies` and keep them bundled.

---

## Open — pre-existing test failures

`npm test` → 4 suites failing, unrelated to packaging:

| Suite | Failure |
|-------|---------|
| `IpsPillSelect`, `IpsAccordion` | `TS2686: 'React' refers to a UMD global` — suite fails to run |
| `IpsRichTextEditor` | *calls setContent when controlled value differs from editor HTML* |
| `IpsCarousel` | *prefers-reduced-motion disables auto-play* |

---

## Resolved 2026-09-02 — `"type": "module"` broke every consumer outside the host

**Symptom reported:**

```
Element type is invalid: expected a string (for built-in components) or a
class/function (for composite components) but got: object.
Check the render method of `IpsTextField`.
```

Only in an MFE consuming the library **outside the host**. Worked fine inside it.

### Root cause

The internal repo that publishes this library as `@ips/digital-storybook` had
`"type": "module"` in its `package.json`. This repo never did — the two copies
had diverged.

That one field does two things:

1. **Kills the CJS entry.** `dist/ui-library.cjs.js` is real CommonJS. Under
   `type: module` every `.js` in the package is an ES module, so Node refuses it
   outright: `ReferenceError: exports is not defined`.
2. **Flips webpack to strict-ESM interop** for `dist/index.js`. In
   `javascript/esm` mode a default import of a CommonJS dependency yields the
   whole `module.exports`, not `module.exports.default` — so
   `import Box from '@mui/material/Box'` returns `{ boxClasses, default }`, an
   object with no `$$typeof`. React then reports exactly the error above.

Removing the field fixed it.

### Why it took so long to find

- The MFE's own `console.log` of `@mui/material/Box` looked **healthy** — the
  MFE's source is `javascript/auto` and gets babel-style interop. The library's
  files are `javascript/esm` and get strict interop. Same import, two rule sets.
- Diagnosis kept targeting this repo, where the field does not exist.

**Lesson:** when a consumer reports a break, read the `package.json` that is
actually installed under their `node_modules` — not this repo's. The internal
copy diverges.

### Found and fixed en route

**The CJS bundle had no interop at all — broken since the first commit (Feb 2026).**
Rollup 3+ defaults to `interop: 'default'`, which assumes `require('@mui/material/Box')`
*is* the component. MUI v7 is CommonJS with `exports.default`, so the bundle used
`{ boxClasses, default }` directly as an element type. Every `require()` consumer
would have hit this; none ever did, so it shipped for seven months.

Fixed with `interop: 'auto'` on the CJS output in
[`vite.config.ts`](../vite.config.ts) — it emits an `__esModule`-aware wrapper.

Also corrected: `types` must be the **first** condition in `exports`, or
TypeScript may skip it under `moduleResolution: "bundler"` / `"node16"`.

### Related breaking change worth remembering

The **2026-08-20** version renamed, with no backward alias:

| Removed | Replacement |
|---|---|
| `IpsTableLight` | `IpsTable` |
| `IpsTableLightProps` | `IpsTableProps` |
| `IpsTableLightColumn` / `Row` / `Wrap` | `IpsTableColumn` / `Row` / `Wrap` |

A consumer that skipped over that version gets `undefined` for those imports —
which surfaces as the *same* "Element type is invalid" family of error, but with
`got: undefined`. Check the `got:` value before assuming an interop problem.

---

## Checklist before publishing

```bash
npm run build
npm run verify          # must be green
# bump "version"
git add -A && git commit
npm publish             # prepublishOnly re-runs build + verify
```

`dist/` is committed to git, so `git add -A` matters.

**Port to the internal repo** whenever `package.json`, `vite.config.ts`, or the
build output changes here — fixes made in this repo do not reach consumers on
their own.
