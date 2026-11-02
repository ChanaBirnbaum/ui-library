import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
export const IpsDatePicker = forwardRef(({ format = 'dd/MM/yyyy', locale, rtl = false, error, helperText, slotProps, sx, className, readOnly, onChange, ...props }, ref) => {
    const rootClassName = ['ips-date-picker', className].filter(Boolean).join(' ');
    // Merge error/helperText/readOnly into slotProps.textField
    const mergedSlotProps = {
        ...slotProps,
        textField: {
            ...slotProps?.textField,
            ...(error !== undefined ? { error } : {}),
            ...(helperText !== undefined ? { helperText } : {}),
            ...(readOnly ? { readOnly: true } : {}),
        },
    };
    // @date-io/moment augments global PickerValue to Moment; wrap onChange to keep
    // our public API as (Date | null) => void regardless of the active adapter type.
    const handleChange = onChange
        ? (value) => onChange(value)
        : undefined;
    return (_jsx(Box, { ref: ref, className: rootClassName, dir: rtl ? 'rtl' : undefined, sx: sx, children: _jsx(LocalizationProvider, { dateAdapter: AdapterDateFns, adapterLocale: locale, children: _jsx(DatePicker, { format: format, ...props, readOnly: readOnly, onChange: handleChange, slotProps: mergedSlotProps }) }) }));
});
IpsDatePicker.displayName = 'IpsDatePicker';
