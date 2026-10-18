import { jsx as i } from "react/jsx-runtime";
import { forwardRef as r } from "react";
import { NativePickerField as m } from "../internal/NativePickerField.js";
import { ClockIcon as t } from "../internal/mobileFieldEndParts.js";
const p = (o) => o, s = r((o, e) => /* @__PURE__ */ i(
  m,
  {
    ...o,
    ref: e,
    inputType: "time",
    icon: /* @__PURE__ */ i(t, {}),
    formatValue: p,
    rootClassName: "ips-time-picker-mobile"
  }
));
s.displayName = "IpsTimePickerMobile";
export {
  s as IpsTimePickerMobile
};
