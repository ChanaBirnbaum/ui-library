import { jsx as i } from "react/jsx-runtime";
import { forwardRef as l } from "react";
import s from "@mui/material/Box";
import { TimePicker as h } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider as k } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment as v } from "@mui/x-date-pickers/AdapterMoment";
import "../../node_modules/moment/locale/he.js";
const x = l(
  ({
    mask: g,
    // legacy — no-op in v7+
    sx: a,
    className: t,
    error: o,
    helperText: r,
    slotProps: e,
    onChange: m,
    ...d
  }, n) => {
    const c = ["ips-time-picker", t].filter(Boolean).join(" "), p = {
      ...e,
      textField: {
        ...e == null ? void 0 : e.textField,
        ...o !== void 0 ? { error: o } : {},
        ...r !== void 0 ? { helperText: r } : {}
      }
    };
    return /* @__PURE__ */ i(s, { ref: n, className: c, sx: a, children: /* @__PURE__ */ i(k, { dateAdapter: v, adapterLocale: "he", children: /* @__PURE__ */ i(
      h,
      {
        ...d,
        onChange: m ? (f) => m(f) : void 0,
        slotProps: p
      }
    ) }) });
  }
);
x.displayName = "IpsTimePicker";
export {
  x as IpsTimePicker
};
