import { jsx as i } from "react/jsx-runtime";
import { forwardRef as v } from "react";
import y from "@mui/material/Box";
import { DateTimePicker as k } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider as x } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns as D } from "@mui/x-date-pickers/AdapterDateFns";
const g = v(
  ({
    format: m = "dd/MM/yyyy HH:mm",
    rtl: d = !1,
    error: r,
    helperText: t,
    slotProps: e,
    sx: n,
    className: c,
    readOnly: o,
    onChange: a,
    ...f
  }, l) => {
    const p = ["ips-date-time-picker", c].filter(Boolean).join(" "), s = {
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
        dir: d ? "rtl" : void 0,
        sx: n,
        children: /* @__PURE__ */ i(x, { dateAdapter: D, children: /* @__PURE__ */ i(
          k,
          {
            format: m,
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
g.displayName = "IpsDateTimePicker";
export {
  g as IpsDateTimePicker
};
