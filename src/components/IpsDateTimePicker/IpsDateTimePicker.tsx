import React, { forwardRef } from 'react'
import Box from '@mui/material/Box'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { IpsTextField } from '../IpsTextField/IpsTextField'
import type { IpsDateTimePickerProps } from './IpsDateTimePicker.types'

export const IpsDateTimePicker = forwardRef<HTMLDivElement, IpsDateTimePickerProps>(
  (
    {
      format = 'dd/MM/yyyy HH:mm',
      rtl = false,
      error,
      helperText,
      slotProps,
      sx,
      className,
      readOnly,
      onChange,
      ...props
    },
    ref
  ) => {
    const rootClassName = ['ips-date-time-picker', className].filter(Boolean).join(' ')

    // Merge error/helperText/readOnly into slotProps.textField
    const mergedSlotProps = {
      ...slotProps,
      textField: {
        ...(slotProps as any)?.textField,
        ...(error !== undefined ? { error } : {}),
        ...(helperText !== undefined ? { helperText } : {}),
        ...(readOnly ? { readOnly: true } : {}),
      },
    }

    // @date-io/moment augments global PickerValue to Moment; wrap onChange to keep
    // our public API as (Date | null) => void regardless of the active adapter type.
    const handleChange = onChange
      ? (value: unknown) => onChange(value as Date | null)
      : undefined

    return (
      <Box
        ref={ref}
        className={rootClassName}
        dir={rtl ? 'rtl' : undefined}
        sx={sx}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            format={format}
            {...(props as any)}
            readOnly={readOnly}
            onChange={handleChange as any}
            // DateTimePicker v8: custom textField slot requires this flag
            enableAccessibleFieldDOMStructure={false}
            slotProps={mergedSlotProps}
            slots={{
              textField: IpsTextField as React.ComponentType<any>,
            }}
          />
        </LocalizationProvider>
      </Box>
    )
  }
)

IpsDateTimePicker.displayName = 'IpsDateTimePicker'
