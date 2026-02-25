import React, { forwardRef } from 'react'
import Box from '@mui/material/Box'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { IpsTextField } from '../IpsTextField/IpsTextField'
import type { IpsDatePickerProps } from './IpsDatePicker.types'

export const IpsDatePicker = forwardRef<HTMLDivElement, IpsDatePickerProps>(
  (
    {
      format = 'dd/MM/yyyy',
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
    const rootClassName = ['ips-date-picker', className].filter(Boolean).join(' ')

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
          <DatePicker
            format={format}
            {...(props as any)}
            readOnly={readOnly}
            onChange={handleChange as any}
            // DatePicker v8: custom textField slot uses plain <input>, not PickersSectionList
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

IpsDatePicker.displayName = 'IpsDatePicker'
