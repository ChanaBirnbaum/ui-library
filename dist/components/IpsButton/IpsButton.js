import { jsx as o } from "react/jsx-runtime";
import { forwardRef as b } from "react";
import v from "@mui/material/Button";
import y from "@mui/material/CircularProgress";
import c from "@mui/material/SvgIcon";
import { useTheme as H } from "@mui/material/styles";
const V = (t) => /* @__PURE__ */ o(c, { ...t, children: /* @__PURE__ */ o("path", { d: "M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" }) }), k = (t) => /* @__PURE__ */ o(c, { ...t, children: /* @__PURE__ */ o("path", { d: "M17 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V7L17 3Z" }) }), C = (t) => /* @__PURE__ */ o(c, { ...t, children: /* @__PURE__ */ o("path", { d: "M6 18L18 6M6 6l12 12", stroke: "currentColor", strokeWidth: "2", fill: "none" }) }), B = b((t, d) => {
  const { buttonType: s, loading: l, className: m, children: p, ...h } = t, i = H().direction === "rtl", e = { ...h };
  let n = e.variant, a = e.color, r = e.startIcon;
  if (s)
    switch (s) {
      case "add":
        n = "contained", a = "primary", r = r ?? /* @__PURE__ */ o(V, {});
        break;
      case "save":
        n = "contained", a = "primary", r = r ?? /* @__PURE__ */ o(k, {});
        break;
      case "clean":
        n = "outlined", a = "inherit", r = r ?? /* @__PURE__ */ o(C, {});
        break;
      case "primary":
        n = "contained", a = "primary";
        break;
      case "secondary":
        n = "outlined", a = "secondary";
        break;
    }
  l && (e.disabled = !0, r = /* @__PURE__ */ o(y, { size: 16, color: "inherit" }));
  const u = ["ips-button", m].filter(Boolean).join(" "), I = i ? void 0 : r, f = i ? r : e.endIcon;
  return /* @__PURE__ */ o(
    v,
    {
      ...e,
      variant: n,
      color: a,
      startIcon: I,
      endIcon: f,
      ref: d,
      className: u,
      children: p
    }
  );
});
B.displayName = "IpsButton";
export {
  B as IpsButton
};
