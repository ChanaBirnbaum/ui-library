import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { NativePickerField } from '../internal/NativePickerField';
import { ClockIcon } from '../internal/mobileFieldEndParts';
// Mobile time field built on the native <input type="time">: a tap anywhere opens the OS time picker.
// Unlike IpsTimePicker it needs no Moment. No MUI components.
// The native value is already 'HH:mm', which is also the display format
const showAsIs = (value) => value;
export const IpsTimePickerMobile = forwardRef((props, ref) => (_jsx(NativePickerField, { ...props, ref: ref, inputType: "time", icon: _jsx(ClockIcon, {}), formatValue: showAsIs, rootClassName: "ips-time-picker-mobile" })));
IpsTimePickerMobile.displayName = 'IpsTimePickerMobile';
export default IpsTimePickerMobile;
