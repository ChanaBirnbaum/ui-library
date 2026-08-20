import { jsx as s } from "react/jsx-runtime";
import { forwardRef as m } from "react";
import p from "@mui/material/Switch";
import d from "@mui/material/FormControlLabel";
const h = {
  width: 44,
  paddingLeft: "5px",
  paddingRight: "5px",
  "& .MuiSwitch-switchBase": {
    paddingLeft: "5px",
    paddingRight: "5px",
    "&.Mui-checked": { transform: "translateX(14px)" }
  }
}, x = m(
  (n, o) => {
    const { label: r, labelPlacement: l = "end", className: c, sx: t, ...i } = n, a = ["ips-switch", c].filter(Boolean).join(" "), e = [h, ...Array.isArray(t) ? t : t != null ? [t] : []];
    return r !== void 0 ? /* @__PURE__ */ s(
      d,
      {
        className: a,
        control: /* @__PURE__ */ s(p, { ...i, sx: e, slotProps: { input: { ref: o } } }),
        label: r,
        labelPlacement: l
      }
    ) : /* @__PURE__ */ s(p, { className: a, sx: e, slotProps: { input: { ref: o } }, ...i });
  }
);
x.displayName = "IpsSwitch";
export {
  x as IpsSwitch
};
