import { jsx as o } from "react/jsx-runtime";
import { forwardRef as p } from "react";
import l from "@mui/material/Switch";
import c from "@mui/material/FormControlLabel";
const n = p(
  (a, t) => {
    const { label: s, labelPlacement: e = "end", className: m, ...r } = a, i = ["ips-switch", m].filter(Boolean).join(" ");
    return s !== void 0 ? /* @__PURE__ */ o(
      c,
      {
        className: i,
        control: /* @__PURE__ */ o(l, { ...r, slotProps: { input: { ref: t } } }),
        label: s,
        labelPlacement: e
      }
    ) : /* @__PURE__ */ o(l, { className: i, slotProps: { input: { ref: t } }, ...r });
  }
);
n.displayName = "IpsSwitch";
export {
  n as IpsSwitch
};
