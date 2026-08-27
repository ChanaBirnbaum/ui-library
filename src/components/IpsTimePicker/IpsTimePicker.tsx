import React, { forwardRef } from 'react'
import Box from '@mui/material/Box'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import type { Moment } from 'moment'
// Registers the 'he' locale in moment's registry — required by the
// `adapterLocale="he"` below. This is a side-effect-only import with no
// bindings, so do NOT add `"sideEffects": false` to package.json: webpack
// would be free to drop this line and the picker would fall back to English.
// If that flag is ever wanted, register the locale explicitly first.
import 'moment/locale/he'
import type { IpsTimePickerProps } from './IpsTimePicker.types'

export const IpsTimePicker = forwardRef<HTMLDivElement, IpsTimePickerProps>(
  (
    {
       
      mask: _mask, // legacy — no-op in v7+
      sx,
      className,
      error,
      helperText,
      slotProps,
      onChange,
      ...props
    },
    ref
  ) => {
    const rootClassName = ['ips-time-picker', className].filter(Boolean).join(' ')

    // Merge error/helperText into slotProps.textField so IpsTextField receives them
    const mergedSlotProps = {
      ...slotProps,
      textField: {
        ...(slotProps as any)?.textField,
        ...(error !== undefined ? { error } : {}),
        ...(helperText !== undefined ? { helperText } : {}),
      },
    }

    // Wrap onChange: PickerValue (Moment | Date | ...) → Moment | null
    const handleChange = onChange
      ? (value: unknown) => onChange(value as Moment | null)
      : undefined

    return (
      <Box ref={ref} className={rootClassName} sx={sx}>
        <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="he">
          <TimePicker
            {...props}
            onChange={handleChange as any}
            slotProps={mergedSlotProps}
          />
        </LocalizationProvider>
      </Box>
    )
  }
)

IpsTimePicker.displayName = 'IpsTimePicker'
