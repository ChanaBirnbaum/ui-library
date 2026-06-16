import r from "@emotion/cache";
import s from "../node_modules/stylis-plugin-rtl/dist/stylis-rtl.js";
const i = (t) => t ? ["ar", "he", "fa", "ur"].some((e) => t.startsWith(e)) : !1, c = (t) => i(t) ? "rtl" : "ltr", l = () => r({ key: "muirtl", stylisPlugins: [s] }), m = () => r({ key: "muiltr" });
export {
  m as createLtrCache,
  l as createRtlCache,
  c as directionFor,
  i as isRtl
};
