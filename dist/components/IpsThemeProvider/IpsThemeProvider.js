import { jsx as r, jsxs as i } from "react/jsx-runtime";
import { useMemo as t } from "react";
import { CacheProvider as c } from "@emotion/react";
import { createTheme as l, ThemeProvider as f, CssBaseline as T } from "@mui/material";
import { createRtlCache as d, createLtrCache as v } from "../../utils/rtlUtils.js";
import { createIpsTheme as n } from "../../theme/createIpsTheme.js";
import { ipsTheme as u } from "../../theme/ipsTheme.js";
const C = ({
  children: s,
  direction: e = "rtl",
  mode: m = "light",
  theme: o
}) => {
  const a = t(
    () => e === "rtl" ? d() : v(),
    [e]
  ), h = t(() => {
    const p = o ?? (m === "dark" ? n("dark") : u);
    return l(p, { direction: e });
  }, [o, m, e]);
  return /* @__PURE__ */ r(c, { value: a, children: /* @__PURE__ */ i(f, { theme: h, children: [
    /* @__PURE__ */ r(T, {}),
    /* @__PURE__ */ r("div", { dir: e, children: s })
  ] }) });
};
C.displayName = "IpsThemeProvider";
export {
  C as IpsThemeProvider
};
