import { jsx as r } from "react/jsx-runtime";
import { forwardRef as y } from "react";
import k from "@mui/material/Box";
import { DatePicker as x } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider as D } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns as g } from "@mui/x-date-pickers/AdapterDateFns";
const C = y(
  ({
    format: d = "dd/MM/yyyy",
    locale: m,
    rtl: n = !1,
    error: a,
    helperText: i,
    slotProps: e,
    sx: c,
    className: l,
    readOnly: t,
    onChange: o,
    ...p
  }, f) => {
    const s = ["ips-date-picker", l].filter(Boolean).join(" "), h = {
      ...e,
      textField: {
        ...e == null ? void 0 : e.textField,
        ...a !== void 0 ? { error: a } : {},
        ...i !== void 0 ? { helperText: i } : {},
        ...t ? { readOnly: !0 } : {}
      }
    };
    return /* @__PURE__ */ r(
      k,
      {
        ref: f,
        className: s,
        dir: n ? "rtl" : void 0,
        sx: c,
        children: /* @__PURE__ */ r(D, { dateAdapter: g, adapterLocale: m, children: /* @__PURE__ */ r(
          x,
          {
            format: d,
            ...p,
            readOnly: t,
            onChange: o ? (v) => o(v) : void 0,
            slotProps: h
          }
        ) })
      }
    );
  }
);
C.displayName = "IpsDatePicker";
export {
  C as IpsDatePicker
};
