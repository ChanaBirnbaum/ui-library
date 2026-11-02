import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import Box from '@mui/material/Box';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
export const IpsDateTimePicker = forwardRef(({ format = 'dd/MM/yyyy HH:mm', rtl = false, error, helperText, slotProps, sx, className, readOnly, onChange, ...props }, ref) => {
    const rootClassName = ['ips-date-time-picker', className].filter(Boolean).join(' ');
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
    return (_jsx(Box, { ref: ref, className: rootClassName, dir: rtl ? 'rtl' : undefined, sx: sx, children: _jsx(LocalizationProvider, { dateAdapter: AdapterDateFns, children: _jsx(DateTimePicker, { format: format, ...props, readOnly: readOnly, onChange: handleChange, slotProps: mergedSlotProps }) }) }));
});
IpsDateTimePicker.displayName = 'IpsDateTimePicker';
