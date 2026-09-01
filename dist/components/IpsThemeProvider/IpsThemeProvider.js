import { jsx as t, jsxs as l } from "react/jsx-runtime";
import { useMemo as a } from "react";
import { __unsafe_useEmotionCache as f, CacheProvider as C } from "@emotion/react";
import { createTheme as T, ThemeProvider as u, CssBaseline as _ } from "@mui/material";
import { createRtlCache as v, createLtrCache as d, RTL_CACHE_KEY as E, LTR_CACHE_KEY as x } from "../../utils/rtlUtils.js";
import { createIpsTheme as P } from "../../theme/createIpsTheme.js";
import { ipsTheme as k } from "../../theme/ipsTheme.js";
const y = ({
  children: c,
  direction: e = "rtl",
  mode: o = "light",
  theme: m
}) => {
  const r = f(), p = e === "rtl" ? E : x, h = a(
    () => e === "rtl" ? v() : d(),
    [e]
  ), n = a(() => {
    const i = m ?? (o === "dark" ? P("dark") : k);
    return T(i, { direction: e });
  }, [m, o, e]), s = /* @__PURE__ */ l(u, { theme: n, children: [
    /* @__PURE__ */ t(_, {}),
    /* @__PURE__ */ t("div", { dir: e, children: c })
  ] });
  return (r == null ? void 0 : r.key) === p ? s : /* @__PURE__ */ t(C, { value: h, children: s });
};
y.displayName = "IpsThemeProvider";
export {
  y as IpsThemeProvider
};
