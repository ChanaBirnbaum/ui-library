import { jsx as r } from "react/jsx-runtime";
import { forwardRef as a } from "react";
import { NativePickerField as m } from "../internal/NativePickerField.js";
import { CalendarIcon as n } from "../internal/mobileFieldEndParts.js";
const p = "-", s = "/";
function c(o) {
  const [e, t, i] = o.split(p);
  return [i, t, e].join(s);
}
const f = a(
  ({ formatValue: o = c, ...e }, t) => /* @__PURE__ */ r(
    m,
    {
      ...e,
      ref: t,
      inputType: "date",
      icon: /* @__PURE__ */ r(n, {}),
      formatValue: o,
      rootClassName: "ips-date-picker-mobile"
    }
  )
);
f.displayName = "IpsDatePickerMobile";
export {
  f as IpsDatePickerMobile
};
