import React, { forwardRef, useId } from 'react'
import Box from '@mui/material/Box'
import FormLabel from '@mui/material/FormLabel'
import type { SxProps, Theme } from '@mui/material/styles'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
// Hebrew month and weekday names in the calendar
import { he } from 'date-fns/locale'
import { heLocaleText } from '../../utils/pickerLocale'
import type { IpsDatePickerProps } from './IpsDatePicker.types'

/**
 * MUI X v8 renders its own PickersTextField (MuiPickersOutlinedInput-*), so the
 * theme's MuiOutlinedInput / MuiTextField overrides that style IpsTextField never
 * reach it. These styles mirror those overrides - same height (8px vertical
 * padding), radius-input, background, border colours and 288px width - scoped to
 * IpsDatePicker only so other pickers keep their current look.
 */
const textFieldSx: SxProps<Theme> = (theme) => {
  const p = theme.palette
  const radius = (theme as any).custom?.radius?.input ?? theme.shape.borderRadius
  return {
    width: '288px',
    maxWidth: '100%',
    '&.MuiFormControl-fullWidth': { width: '100%' },
    '& .MuiPickersOutlinedInput-root': {
      backgroundColor: p.background.paper,
      // Explicit px: a bare number in sx is multiplied by theme.shape.borderRadius
      // (6 → 48px), unlike the theme styleOverrides IpsTextField gets it from.
      borderRadius: `${radius}px`,
      '& .MuiPickersOutlinedInput-notchedOutline': {
        borderColor: p.grey[300],
      },
      '&:hover:not(.Mui-disabled):not(.Mui-error):not(.Mui-focused) .MuiPickersOutlinedInput-notchedOutline': {
        borderColor: p.text.primary,
      },
      '&.Mui-focused:not(.Mui-error) .MuiPickersOutlinedInput-notchedOutline': {
        borderColor: p.primary.main,
        borderWidth: '2px',
      },
      '&.Mui-error .MuiPickersOutlinedInput-notchedOutline': {
        borderColor: p.error.main,
      },
      '&.Mui-disabled': {
        backgroundColor: p.mode === 'light' ? p.grey[50] : p.background.default,
      },
      '&.Mui-disabled .MuiPickersOutlinedInput-notchedOutline': {
        borderColor: p.grey[200],
      },
    },
    // Same 8px vertical padding as IpsTextField's input (horizontal 14px comes
    // from the picker root itself).
    '& .MuiPickersSectionList-root': {
      padding: '8px 0',
    },
  }
}

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
      label,
      ...props
    },
    ref
  ) => {
    const rootClassName = ['ips-date-picker', className].filter(Boolean).join(' ')
    const generatedId = useId()
    const userTextField = (slotProps as any)?.textField ?? {}
    const inputId: string = userTextField.id ?? generatedId
    const required = Boolean(userTextField.required ?? (props as any).required)

    // Merge error/helperText/readOnly + IpsTextField-matching styles into slotProps.textField
    const mergedSlotProps = {
      ...slotProps,
      textField: {
        ...userTextField,
        id: inputId,
        sx: [textFieldSx, ...(Array.isArray(userTextField.sx) ? userTextField.sx : [userTextField.sx])],
        ...(error !== undefined ? { error } : {}),
        ...(helperText !== undefined ? { helperText } : {}),
        ...(readOnly ? { readOnly: true } : {}),
      },
      // Medium icon button (40px) would make the field taller than IpsTextField
      openPickerButton: {
        size: 'small',
        ...(slotProps as any)?.openPickerButton,
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
        {/* Label above the field, same as IpsTextField */}
        {label != null && (
          <FormLabel
            htmlFor={inputId}
            required={required}
            sx={{ display: 'block', mb: '3px', fontSize: '12px', lineHeight: 1 }}
          >
            {label}
          </FormLabel>
        )}
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={he} localeText={heLocaleText}>
          <DatePicker
            format={format}
            {...(props as any)}
            readOnly={readOnly}
            onChange={handleChange as any}
            slotProps={mergedSlotProps as any}
          />
        </LocalizationProvider>
      </Box>
    )
  }
)

IpsDatePicker.displayName = 'IpsDatePicker'
