import { jsx as o } from "react/jsx-runtime";
import { forwardRef as p } from "react";
import l from "@mui/material/Checkbox";
import n from "@mui/material/FormControlLabel";
const i = p(
  (a, r) => {
    const { label: s, labelPlacement: c = "end", className: m, ...e } = a, t = ["ips-checkbox", m].filter(Boolean).join(" ");
    return s !== void 0 ? /* @__PURE__ */ o(
      n,
      {
        className: t,
        control: /* @__PURE__ */ o(l, { ...e, slotProps: { input: { ref: r } } }),
        label: s,
        labelPlacement: c
      }
    ) : /* @__PURE__ */ o(l, { className: t, slotProps: { input: { ref: r } }, ...e });
  }
);
i.displayName = "IpsCheckBox";
export {
  i as IpsCheckBox
};
