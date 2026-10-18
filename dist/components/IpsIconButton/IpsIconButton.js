import { jsx as a } from "react/jsx-runtime";
import { forwardRef as m } from "react";
import b from "@mui/material/IconButton";
import g from "@mui/material/Tooltip";
const s = 44, I = (o) => ({
  width: s,
  height: s,
  backgroundColor: o.palette.background.paper,
  "&:hover": { backgroundColor: o.palette.grey[100] },
  "&.Mui-disabled": { backgroundColor: o.palette.background.paper }
}), S = m(
  ({ icon: o, tooltip: t, variant: i = "plain", className: u, sx: r, ...l }, p) => {
    const n = i === "surface", d = ["ips-icon-button", n && "ips-icon-button-surface", u].filter(Boolean).join(" "), c = Array.isArray(r) ? r : r != null ? [r] : [], f = n ? [I, ...c] : c, e = /* @__PURE__ */ a(
      b,
      {
        ref: p,
        className: d,
        sx: f,
        ...l,
        children: o
      }
    );
    return t ? /* @__PURE__ */ a(g, { title: t, children: e }) : e;
  }
);
S.displayName = "IpsIconButton";
export {
  S as IpsIconButton
};
