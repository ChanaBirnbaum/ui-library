import { jsx as n } from "react/jsx-runtime";
import { forwardRef as f } from "react";
import A from "@mui/material/TextField";
import d from "@mui/material/InputAdornment";
const x = f(
  (s, m) => {
    const {
      startAdornment: r,
      endAdornment: o,
      InputProps: t,
      inputProps: e,
      className: i,
      readOnly: l,
      ...a
    } = s, p = {
      ...e,
      readOnly: l ? !0 : e == null ? void 0 : e.readOnly
    }, c = {
      ref: m,
      startAdornment: r ? /* @__PURE__ */ n(d, { position: "start", children: r }) : t == null ? void 0 : t.startAdornment,
      endAdornment: o ? /* @__PURE__ */ n(d, { position: "end", children: o }) : t == null ? void 0 : t.endAdornment,
      ...t
    };
    return /* @__PURE__ */ n(
      A,
      {
        ...a,
        slotProps: { input: c, htmlInput: p },
        className: ["ips-text-field", i].filter(Boolean).join(" ")
      }
    );
  }
);
x.displayName = "IpsTextField";
export {
  x as IpsTextField
};
