import { jsx as r } from "react/jsx-runtime";
import { forwardRef as m } from "react";
import p from "@mui/material/IconButton";
import f from "@mui/material/Tooltip";
const l = m(
  ({ icon: n, tooltip: o, className: i, ...s }, e) => {
    const c = ["ips-icon-button", i].filter(Boolean).join(" "), t = /* @__PURE__ */ r(
      p,
      {
        ref: e,
        className: c,
        ...s,
        children: n
      }
    );
    return o ? /* @__PURE__ */ r(f, { title: o, children: t }) : t;
  }
);
l.displayName = "IpsIconButton";
export {
  l as IpsIconButton
};
