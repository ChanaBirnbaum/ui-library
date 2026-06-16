import { jsx as m } from "react/jsx-runtime";
import { forwardRef as f } from "react";
import c from "@mui/material/Tooltip";
const n = f(
  (r, p) => {
    var t;
    const {
      arrow: s = !0,
      placement: e = "top",
      className: i,
      componentsProps: o,
      ...l
    } = r, a = {
      ...o,
      tooltip: {
        ...(o == null ? void 0 : o.tooltip) || {},
        className: ["ips-tooltip", (t = o == null ? void 0 : o.tooltip) == null ? void 0 : t.className, i].filter(Boolean).join(" ")
      }
    };
    return /* @__PURE__ */ m(
      c,
      {
        ref: p,
        arrow: s,
        placement: e,
        componentsProps: a,
        ...l
      }
    );
  }
);
n.displayName = "IpsToolTips";
export {
  n as IpsToolTips
};
