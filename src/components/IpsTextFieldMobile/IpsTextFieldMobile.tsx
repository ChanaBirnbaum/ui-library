import React, { forwardRef, useId, useRef } from 'react'
import { styled } from '@mui/material/styles'
import {
  CHEVRON_CLEARANCE_PX,
  MOBILE_FIELD,
  MobileFieldLabel,
  MobileHelperText,
  RequiredMark,
  mobileFieldRadius,
  outlinedFieldDisabledStyles,
  outlinedFieldFocusStyles,
} from '../internal/mobileFieldParts'
import { ClearIcon, FieldClearButton, FieldEndIconSlot } from '../internal/mobileFieldEndParts'
import type { IpsTextFieldMobileProps } from './IpsTextFieldMobile.types'

// Mobile text field built on the native <input>: 16px text (no iOS zoom on focus), touch-sized,
// with an optional unit after the value, an end icon and a clear button. No MUI components.

// Room for the caret after the last character, so the unit never touches the digits
const CARET_ROOM_CH = 0.5

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

interface FieldBoxStyleProps {
  hasError: boolean
  isDisabled: boolean
}

const FieldBox = styled('div', {
  shouldForwardProp: (prop) => prop !== 'hasError' && prop !== 'isDisabled',
})<FieldBoxStyleProps>(({ theme, hasError, isDisabled }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  boxSizing: 'border-box',
  width: '100%',
  height: MOBILE_FIELD.heightPx,
  paddingInlineStart: MOBILE_FIELD.paddingStartPx,
  paddingInlineEnd: CHEVRON_CLEARANCE_PX,
  fontSize: MOBILE_FIELD.fontSizePx,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${hasError ? theme.palette.error.main : theme.palette.grey[300]}`,
  borderRadius: mobileFieldRadius(theme),
  cursor: 'text',
  '&:focus-within': outlinedFieldFocusStyles(theme, hasError),
  ...(isDisabled ? outlinedFieldDisabledStyles(theme) : {}),
}))

const NativeInput = styled('input', {
  shouldForwardProp: (prop) => prop !== 'contentWidthCh',
})<{ contentWidthCh: number | null }>(({ theme, contentWidthCh }) => ({
  flex: contentWidthCh === null ? 1 : '0 0 auto',
  width: contentWidthCh === null ? 'auto' : `${contentWidthCh}ch`,
  minWidth: 0,
  maxWidth: '100%',
  height: '100%',
  margin: 0,
  padding: 0,
  fontFamily: 'inherit',
  fontSize: MOBILE_FIELD.fontSizePx,
  color: 'inherit',
  background: 'transparent',
  border: 'none',
  outline: 'none',
  textOverflow: 'ellipsis',
  '&::placeholder': {
    color: theme.palette.text.secondary,
    opacity: 1,
  },
}))

const Suffix = styled('span')({
  flexShrink: 0,
  whiteSpace: 'nowrap',
})

export const IpsTextFieldMobile = forwardRef<HTMLInputElement, IpsTextFieldMobileProps>((props, ref) => {
  const {
    value,
    onChange,
    suffix,
    endIcon,
    clearButtonLabel,
    label,
    required = false,
    disabled = false,
    error = false,
    helperText,
    className,
    id: idProp,
    ...nativeInputProps
  } = props

  const generatedId = useId()
  const inputId = idProp ?? generatedId
  const helperTextId = `${inputId}-helper-text`
  const inputRef = useRef<HTMLInputElement | null>(null)
  const hasValue = value.length > 0
  const showSuffix = Boolean(suffix) && hasValue
  const canClear = hasValue && Boolean(clearButtonLabel) && !disabled

  // With a unit, the input shrinks to its text so the unit sits right after the value
  const contentWidthCh = showSuffix ? value.length + CARET_ROOM_CH : null

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

  const rootClassName = ['ips-text-field-mobile', className].filter(Boolean).join(' ')

  return (
    <Root className={rootClassName}>
      {label && (
        <MobileFieldLabel htmlFor={inputId}>
          {label}
          {required && <RequiredMark aria-hidden="true"> *</RequiredMark>}
        </MobileFieldLabel>
      )}

      <FieldWrapper>
        {/* A tap anywhere in the box (also on the unit) focuses the input */}
        <FieldBox hasError={error} isDisabled={disabled} onClick={() => inputRef.current?.focus()}>
          <NativeInput
            {...nativeInputProps}
            ref={setInputRef}
            id={inputId}
            value={value}
            onChange={(event) => onChange?.(event.target.value)}
            disabled={disabled}
            required={required}
            contentWidthCh={contentWidthCh}
            aria-invalid={error || undefined}
            aria-describedby={helperText ? helperTextId : undefined}
          />
          {showSuffix && <Suffix aria-hidden="true">{suffix}</Suffix>}
        </FieldBox>

        {canClear ? (
          <FieldClearButton type="button" aria-label={clearButtonLabel} onClick={handleClear}>
            <ClearIcon />
          </FieldClearButton>
        ) : (
          endIcon && <FieldEndIconSlot>{endIcon}</FieldEndIconSlot>
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

IpsTextFieldMobile.displayName = 'IpsTextFieldMobile'

export default IpsTextFieldMobile
