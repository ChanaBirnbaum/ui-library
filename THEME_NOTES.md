# Theme Notes

Decisions, conversions, and unmapped tokens from the Figma → MUI v7 theme migration.

---

## 1. Action-overlay opacity decision

**Token file:** `theme/{Light,Dark}.tokens.json` → `action.{hover,selected,focus,disabled}`

The Figma export carries the brand colour at the designer's intended alpha values:

| State   | Light base | Figma alpha | Emitted alpha |
|---------|-----------|-------------|---------------|
| hover   | `#00033D` | 0.08        | **0.08** ✓    |
| selected| `#00033D` | 0.12        | **0.12** ✓    |
| focus   | `#00033D` | 0.24        | **0.12** ⚠ clamped |
| disabled| `#00033D` | 0.38        | text.disabled colour (not an overlay) |

**Resolution:** We normalise to canonical MUI overlay opacities
(`hover=0.08`, `selected=focus=0.12`) so interactive states are consistent across
colour schemes regardless of the base colour's luminance. The Figma `focus` value (0.24)
was clamped to 0.12 to match `selected` — MUI treats them equivalently in most
component states.

`action.disabled` is set to `text.disabled` from the same mode's palette (a solid
colour for text), and `action.disabledBackground` is `rgba(actionBase, 0.12)`.

Implementation: `createIpsTheme.ts → hexToRgba(p.actionBase, 0.08 | 0.12)`.

---

## 2. px → rem conversion

All `font-size` tokens are raw px integers in the Figma export. Converted by dividing by 16:

| Token         | px | rem        | MUI variant  |
|---------------|----|------------|--------------|
| `font-size.xs`   | 11 | —          | (unused in styles) |
| `font-size.sm`   | 12 | 0.75rem    | caption, overline |
| `font-size.base` | 14 | 0.875rem   | subtitle2, body2 |
| `font-size.md`   | 16 | 1rem       | subtitle1, body1, button |
| `font-size.lg`   | 18 | 1.125rem   | h4 |
| `font-size.xl`   | 20 | 1.25rem    | h3 |
| `font-size.2xl`  | 24 | 1.5rem     | h2 |
| `font-size.3xl`  | 28 | —          | (unused in styles) |
| `font-size.4xl`  | 32 | 2rem       | h1 |
| `font-size.5xl`  | 40 | —          | (unused in styles) |
| `font-size.6xl`  | 48 | 3rem       | display (custom) |
| `font-size.7xl`  | 60 | —          | (unused in styles) |

---

## 3. Letter-spacing conversion

Letter-spacing tokens are unitless numbers in px. Emitted as `"Npx"` strings:

| Token                     | value  | emitted       |
|---------------------------|--------|---------------|
| `letter-spacing.tighter`  | -0.5   | `"-0.5px"`    |
| `letter-spacing.tight`    | -0.2   | `"-0.2px"`    |
| `letter-spacing.normal`   | 0      | `"0px"`       |
| `letter-spacing.wide`     | 0.4    | `"0.4px"`     |
| `letter-spacing.wider`    | 1.5    | `"1.5px"`     |

Variants using `letter-spacing.normal` emit `"0px"` (equivalent to `normal` / `0`).

---

## 4. Explicit fontFamily

`fontFamily` is **not** present in any Figma token file. Set explicitly:

```
"Inter", "Heebo", sans-serif
```

- **Inter** — primary Latin/UI font (matches existing ipsTheme).
- **Heebo** — Hebrew fallback; covers the Hebrew script used throughout the product.
  Replaces the previous multi-stack (`system-ui, -apple-system, "Segoe UI", Roboto, …`).

---

## 5. Tokens that did not map to a MUI slot

| Token                 | Value | Resolution |
|-----------------------|-------|------------|
| `styles.label`        | 14px / 1.5 lh / medium(500) / 0px ls | No direct MUI typography variant. Closest is `body2` (same size) but different weight. Omitted from `typography`; use `theme.typography.body2` + `fontWeight: 500` at the call site, or add a `label` custom variant if needed. |
| `font-size.xs` (11px) | 11    | Used in no composite style; available as `fontSizeTokens.xs` if needed. |
| `font-size.3xl` (28px)| 28    | Used in no composite style; available if needed. |
| `font-size.5xl` (40px)| 40    | Used in no composite style; available if needed. |
| `font-size.7xl` (60px)| 60    | Used in no composite style; available if needed. |
| `h5`, `h6`            | —     | Not defined in the Figma tokens. Falls back to MUI defaults. |

---

## 6. Radius token placement

Radius tokens are applied in two places:

| Token         | Value | `shape` / `theme.components` override                  | Also in `theme.custom.radius` |
|---------------|-------|--------------------------------------------------------|-------------------------------|
| `radius-base` | 8     | `shape.borderRadius` (MUI global default)              | ✓                             |
| `radius-button`| 8    | `MuiButton.styleOverrides.root.borderRadius`           | ✓                             |
| `radius-input` | 6    | `MuiOutlinedInput.styleOverrides.root.borderRadius`    | ✓                             |
| `radius-card`  | 12   | `MuiCard.styleOverrides.root.borderRadius`             | ✓                             |
| `radius-chip`  | 16   | `MuiChip.styleOverrides.root.borderRadius`             | ✓                             |
| `radius-sm`    | 4    | Only in `theme.custom.radius.sm` (no MUI component matches) | ✓                         |
| `radius-lg`    | 12   | Only in `theme.custom.radius.lg`                        | ✓                             |

> Component files (`src/components/**`) were **not modified** in this pass.
> The `MuiCard` / `MuiChip` overrides live exclusively in `createIpsTheme.ts`.

---

## 7. Spacing scale

`spacing-base = 8` sets the MUI spacing factor → `theme.spacing(1) === 8px`.

The full Figma scale is available under `theme.custom.spacing.scale`:

```ts
{ 0: 0, 1: 4, 2: 8, 3: 12, 4: 16, 6: 24, 8: 32 }
```

(No `spacing-5` or `spacing-7` exist in the Figma export.)

---

## 8. Dark-mode palette notes

- `primary.dark === primary.main === #00033D` in both modes — the Figma export aliased both
  to `blue/blue-900`. This is intentional (brand colour doesn't shift in dark mode); the
  darker hover state on contained buttons falls back to this same colour.
- `grey` is identical across both modes (absolute scale). Only text, background, and
  divider colours differ.
- The error/warning/success/info colours are the same in both light and dark.

---

## 9. Regenerating tokens

When the designer exports new Figma variables:

1. Copy the JSON files into `src/theme/tokens/figma/` (see sub-folders: `theme/`, `spacing/`, `radius/`, `typography/`, `charts/`).
2. Run:
   ```bash
   npx tsx scripts/generate-tokens.ts
   ```
3. Commit the updated `src/theme/tokens/generated/index.ts`.

The `dist/theme/tokens/figma/` location is **build output** — those files should be moved to `src/` and committed there.
