import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
// Registers the 'he' locale in moment's registry — required by the
// `adapterLocale="he"` below. This is a side-effect-only import with no
// bindings, so do NOT add `"sideEffects": false` to package.json: webpack
// would be free to drop this line and the picker would fall back to English.
// If that flag is ever wanted, register the locale explicitly first.
import 'moment/locale/he';
export const IpsTimePicker = forwardRef(({ mask: _mask, // legacy — no-op in v7+
sx, className, error, helperText, slotProps, onChange, ...props }, ref) => {
    const rootClassName = ['ips-time-picker', className].filter(Boolean).join(' ');
    // Merge error/helperText into slotProps.textField so IpsTextField receives them
    const mergedSlotProps = {
        ...slotProps,
        textField: {
            ...slotProps?.textField,
            ...(error !== undefined ? { error } : {}),
            ...(helperText !== undefined ? { helperText } : {}),
        },
    };
    // Wrap onChange: PickerValue (Moment | Date | ...) → Moment | null
    const handleChange = onChange
        ? (value) => onChange(value)
        : undefined;
    return (_jsx(Box, { ref: ref, className: rootClassName, sx: sx, children: _jsx(LocalizationProvider, { dateAdapter: AdapterMoment, adapterLocale: "he", children: _jsx(TimePicker, { ...props, onChange: handleChange, slotProps: mergedSlotProps }) }) }));
});
IpsTimePicker.displayName = 'IpsTimePicker';
