import * as i from "@emotion/cache";
import s from "@emotion/cache";
import u from "../vendor/stylis-plugin-rtl.js";
const f = "muirtl", h = "muiltr", n = (t, r = 4) => {
  let e = t;
  for (let o = 0; o <= r; o += 1) {
    if (typeof e == "function") return e;
    if (!e || typeof e != "object") return null;
    e = e.default;
  }
  return null;
}, C = () => {
  const t = i, r = n(s) ?? n(t) ?? n(t == null ? void 0 : t.createCache);
  if (r) return r;
  throw new Error(
    `[ui-library] Could not resolve \`createCache\` from @emotion/cache (got ${Object.prototype.toString.call(s)}). Most likely @emotion/cache appears in a Module Federation \`shared\` block in the host or one of the MFEs. Remove it there: it is a stateless factory, and only @emotion/react needs to be a singleton.`
  );
}, a = "__IPS_EMOTION_CACHES__", _ = () => {
  if (typeof document > "u") return null;
  const t = globalThis;
  return t[a] || (t[a] = {}), t[a];
}, l = (t, r) => {
  const e = _(), o = e == null ? void 0 : e[t];
  if (o) return o;
  const c = C()({ ...r, key: t });
  return e && (e[t] = c), c;
}, d = (t) => t ? ["ar", "he", "fa", "ur"].some((e) => t.startsWith(e)) : !1, g = (t) => d(t) ? "rtl" : "ltr", E = () => l(f, { stylisPlugins: [u] }), y = () => l(h, {});
export {
  h as LTR_CACHE_KEY,
  f as RTL_CACHE_KEY,
  y as createLtrCache,
  E as createRtlCache,
  g as directionFor,
  d as isRtl
};
