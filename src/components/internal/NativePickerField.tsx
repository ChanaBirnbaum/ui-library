import React, { forwardRef, useId, useRef, type InputHTMLAttributes, type ReactNode } from 'react'
import { styled } from '@mui/material/styles'
import {
  CHEVRON_CLEARANCE_PX,
  MOBILE_FIELD,
  MobileFieldLabel,
  MobileHelperText,
  RequiredMark,
  invisibleOverlayStyles,
  mobileFieldRadius,
  outlinedFieldDisabledStyles,
  outlinedFieldFocusStyles,
} from './mobileFieldParts'
import { ClearIcon, FieldClearButton, FieldEndIconSlot } from './mobileFieldEndParts'

// A date / time field on top of the native picker: a box shows the formatted value (or a placeholder),
// and the native <input type="date|time"> is stretched invisibly over it, so a tap anywhere opens the OS picker.
// Shared by IpsDatePickerMobile and IpsTimePickerMobile. No MUI components.

export type NativePickerInputType = 'date' | 'time'

export type NativePickerFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'defaultValue' | 'onChange' | 'type' | 'size'
> & {
  inputType: NativePickerInputType
  icon: ReactNode
  /** The native value ('' = empty) */
  value: string
  onChange?: (value: string) => void
  /** Turns the native value into the text shown in the box */
  formatValue: (value: string) => string
  placeholder?: string
  /** Shows the value in the secondary color (e.g. a default the user has not touched yet) */
  muted?: boolean
  /** Accessible name of the clear (X) button. Without it the field has no clear button */
  clearButtonLabel?: string
  label?: string
  required?: boolean
  disabled?: boolean
  error?: boolean
  helperText?: string
  className?: string
  rootClassName: string
}

const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minWidth: 0,
})

const FieldWrapper = styled('div')({
  position: 'relative',
  width: '100%',
})

interface ValueBoxStyleProps {
  hasError: boolean
  isMuted: boolean
  isDisabled: boolean
}

// The visible box. It comes right after the native input in the DOM, so the input's focus can style it
const ValueBox = styled('div', {
  shouldForwardProp: (prop) => prop !== 'hasError' && prop !== 'isMuted' && prop !== 'isDisabled',
})<ValueBoxStyleProps>(({ theme, hasError, isMuted, isDisabled }) => ({
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
  width: '100%',
  height: MOBILE_FIELD.heightPx,
  paddingInlineStart: MOBILE_FIELD.paddingStartPx,
  paddingInlineEnd: CHEVRON_CLEARANCE_PX,
  fontSize: MOBILE_FIELD.fontSizePx,
  color: isMuted ? theme.palette.text.secondary : theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${hasError ? theme.palette.error.main : theme.palette.grey[300]}`,
  borderRadius: mobileFieldRadius(theme),
  ...(isDisabled ? outlinedFieldDisabledStyles(theme) : {}),
}))

const ValueText = styled('span')({
  minWidth: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})

const NativeInput = styled('input', {
  shouldForwardProp: (prop) => prop !== 'hasError',
})<{ hasError: boolean }>(({ theme, hasError }) => ({
  ...invisibleOverlayStyles,
  // Desktop browsers open the picker only from their own indicator, so it is stretched over the whole field
  '&::-webkit-calendar-picker-indicator': {
    position: 'absolute',
    inset: 0,
    width: 'auto',
    height: 'auto',
    margin: 0,
    padding: 0,
    opacity: 0,
    cursor: 'pointer',
  },
  '&:focus + div': outlinedFieldFocusStyles(theme, hasError),
}))

export const NativePickerField = forwardRef<HTMLInputElement, NativePickerFieldProps>((props, ref) => {
  const {
    inputType,
    icon,
    value,
    onChange,
    formatValue,
    placeholder = '',
    muted = false,
    clearButtonLabel,
    label,
    required = false,
    disabled = false,
    error = false,
    helperText,
    className,
    rootClassName,
    id: idProp,
    ...nativeInputProps
  } = props

  const generatedId = useId()
  const inputId = idProp ?? generatedId
  const helperTextId = `${inputId}-helper-text`
  const inputRef = useRef<HTMLInputElement | null>(null)
  const hasValue = value !== ''
  const canClear = hasValue && Boolean(clearButtonLabel) && !disabled

  // The consumer's ref and the internal one (used to return focus after clearing) both get the input
  const setInputRef = (node: HTMLInputElement | null) => {
    inputRef.current = node
    if (typeof ref === 'function') {
      ref(node)
    } else if (ref) {
      ref.current = node
    }
  }

  const handleClear = () => {
    onChange?.('')
    inputRef.current?.focus()
  }

  return (
    <Root className={[rootClassName, className].filter(Boolean).join(' ')}>
      {label && (
        <MobileFieldLabel htmlFor={inputId}>
          {label}
          {required && <RequiredMark aria-hidden="true"> *</RequiredMark>}
        </MobileFieldLabel>
      )}

      <FieldWrapper>
        <NativeInput
          {...nativeInputProps}
          ref={setInputRef}
          id={inputId}
          type={inputType}
          value={value}
          onChange={(event) => onChange?.(event.target.value)}
          disabled={disabled}
          required={required}
          hasError={error}
          aria-invalid={error || undefined}
          aria-describedby={helperText ? helperTextId : undefined}
        />
        <ValueBox aria-hidden="true" hasError={error} isMuted={!hasValue || muted} isDisabled={disabled}>
          {/* Dates and times read left to right, but stay aligned to the start of the RTL field */}
          <ValueText>{hasValue ? <bdi dir="ltr">{formatValue(value)}</bdi> : placeholder}</ValueText>
        </ValueBox>

        {canClear ? (
          <FieldClearButton type="button" aria-label={clearButtonLabel} onClick={handleClear}>
            <ClearIcon />
          </FieldClearButton>
        ) : (
          <FieldEndIconSlot>{icon}</FieldEndIconSlot>
        )}
      </FieldWrapper>

      {helperText && (
        <MobileHelperText id={helperTextId} hasError={error} role={error ? 'alert' : undefined}>
          {helperText}
        </MobileHelperText>
      )}
    </Root>
  )
})

NativePickerField.displayName = 'NativePickerField'
