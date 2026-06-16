import { jsx as i } from "react/jsx-runtime";
import { forwardRef as v } from "react";
import y from "@mui/material/Box";
import { DatePicker as k } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider as x } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns as D } from "@mui/x-date-pickers/AdapterDateFns";
const g = v(
  ({
    format: d = "dd/MM/yyyy",
    rtl: m = !1,
    error: r,
    helperText: t,
    slotProps: e,
    sx: n,
    className: c,
    readOnly: o,
    onChange: a,
    ...f
  }, l) => {
    const p = ["ips-date-picker", c].filter(Boolean).join(" "), s = {
      ...e,
      textField: {
        ...e == null ? void 0 : e.textField,
        ...r !== void 0 ? { error: r } : {},
        ...t !== void 0 ? { helperText: t } : {},
        ...o ? { readOnly: !0 } : {}
      }
    };
    return /* @__PURE__ */ i(
      y,
      {
        ref: l,
        className: p,
        dir: m ? "rtl" : void 0,
        sx: n,
        children: /* @__PURE__ */ i(x, { dateAdapter: D, children: /* @__PURE__ */ i(
          k,
          {
            format: d,
            ...f,
            readOnly: o,
            onChange: a ? (h) => a(h) : void 0,
            slotProps: s
          }
        ) })
      }
    );
  }
);
g.displayName = "IpsDatePicker";
export {
  g as IpsDatePicker
};
