import r from "@emotion/cache";
import s from "../vendor/stylis-plugin-rtl.js";
const a = (t) => t ? ["ar", "he", "fa", "ur"].some((e) => t.startsWith(e)) : !1, c = (t) => a(t) ? "rtl" : "ltr", n = () => r({ key: "muirtl", stylisPlugins: [s] }), m = () => r({ key: "muiltr" });
export {
  m as createLtrCache,
  n as createRtlCache,
  c as directionFor,
  a as isRtl
};
