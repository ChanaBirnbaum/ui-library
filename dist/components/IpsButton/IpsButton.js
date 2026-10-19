import { jsx as e } from "react/jsx-runtime";
import { forwardRef as k } from "react";
import y from "@mui/material/Button";
import v from "@mui/material/CircularProgress";
import i from "@mui/material/SvgIcon";
import { useTheme as C } from "@mui/material/styles";
const H = (r) => /* @__PURE__ */ e(i, { ...r, children: /* @__PURE__ */ e("path", { d: "M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" }) }), V = (r) => /* @__PURE__ */ e(i, { ...r, children: /* @__PURE__ */ e("path", { d: "M17 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V7L17 3Z" }) }), S = (r) => /* @__PURE__ */ e(i, { ...r, children: /* @__PURE__ */ e("path", { d: "M6 18L18 6M6 6l12 12", stroke: "currentColor", strokeWidth: "2", fill: "none" }) }), g = k((r, d) => {
  const { buttonType: c, loading: m, className: p, children: h, sx: s, ...u } = r, l = C().direction === "rtl", t = { ...u };
  let n = t.variant, a = t.color, o = t.startIcon;
  if (c)
    switch (c) {
      case "add":
        n = "contained", a = "primary", o = o ?? /* @__PURE__ */ e(H, {});
        break;
      case "save":
        n = "contained", a = "primary", o = o ?? /* @__PURE__ */ e(V, {});
        break;
      case "clean":
        n = "outlined", a = "inherit", o = o ?? /* @__PURE__ */ e(S, {});
        break;
      case "primary":
        n = "contained", a = "primary";
        break;
      case "secondary":
        n = "outlined", a = "secondary";
        break;
      case "link":
        n = "text", a = "primary";
        break;
    }
  m && (t.disabled = !0, o = /* @__PURE__ */ e(v, { size: 16, color: "inherit" }));
  const f = ["ips-button", p].filter(Boolean).join(" "), I = l ? void 0 : o, x = l ? o ?? t.endIcon : t.endIcon, b = [{
    fontWeight: 400,
    ...c === "link" ? {
      textDecoration: "none",
      "&:hover, &:active": {
        textDecoration: "underline",
        textUnderlineOffset: "3px",
        backgroundColor: "transparent"
      }
    } : {}
  }, ...Array.isArray(s) ? s : s != null ? [s] : []];
  return /* @__PURE__ */ e(
    y,
    {
      ...t,
      variant: n,
      color: a,
      startIcon: I,
      endIcon: x,
      ref: d,
      className: f,
      sx: b,
      children: h
    }
  );
});
g.displayName = "IpsButton";
export {
  g as IpsButton
};
