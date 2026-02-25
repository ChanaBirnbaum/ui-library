import React, { forwardRef } from 'react'
import Box from '@mui/material/Box'
import { TimePicker } from '@mui/x-date-pickers/TimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import type { Moment } from 'moment'
import 'moment/locale/he'
import { IpsTextField } from '../IpsTextField/IpsTextField'
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
            // IpsTextField renders a plain <input>; v8 default (PickersSectionList)
            // requires a custom field. Keep legacy input structure.
            enableAccessibleFieldDOMStructure={false}
            slotProps={mergedSlotProps}
            slots={{
              // IpsTextField is fully compatible with MUI TextFieldProps
              textField: IpsTextField as React.ComponentType<any>,
            }}
          />
        </LocalizationProvider>
      </Box>
    )
  }
)

IpsTimePicker.displayName = 'IpsTimePicker'
