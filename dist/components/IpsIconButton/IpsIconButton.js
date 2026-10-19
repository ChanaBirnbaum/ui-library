import { jsx as i } from "react/jsx-runtime";
import { forwardRef as f } from "react";
import g from "@mui/material/IconButton";
import m from "@mui/material/Tooltip";
const s = 44, x = (o) => ({
  width: s,
  height: s,
  boxSizing: "border-box",
  backgroundColor: o.palette.background.paper,
  border: `1px solid ${o.palette.grey[300]}`,
  borderRadius: `${o.shape.borderRadius}px`,
  "&:hover": { backgroundColor: o.palette.grey[100] },
  "&.Mui-disabled": {
    backgroundColor: o.palette.grey[50],
    borderColor: o.palette.grey[200]
  }
}), y = f(
  ({ icon: o, tooltip: t, variant: c = "plain", className: l, sx: r, ...p }, u) => {
    const n = c === "surface", d = ["ips-icon-button", n && "ips-icon-button-surface", l].filter(Boolean).join(" "), e = Array.isArray(r) ? r : r != null ? [r] : [], b = n ? [x, ...e] : e, a = /* @__PURE__ */ i(
      g,
      {
        ref: u,
        className: d,
        sx: b,
        ...p,
        children: o
      }
    );
    return t ? /* @__PURE__ */ i(m, { title: t, children: a }) : a;
  }
);
y.displayName = "IpsIconButton";
export {
  y as IpsIconButton
};
