import React, { forwardRef, useId } from 'react'
import { styled } from '@mui/material/styles'
import {
  MOBILE_FIELD,
  MobileFieldLabel,
  MobileHelperText,
  RequiredMark,
  mobileFieldRadius,
  outlinedFieldDisabledStyles,
  outlinedFieldFocusStyles,
} from '../internal/mobileFieldParts'
import type { IpsTextAreaMobileProps } from './IpsTextAreaMobile.types'

// Mobile multi-line text built on the native <textarea>: full width, 16px text (no iOS zoom on focus),
// a fixed number of rows and no resize handle. No MUI components.

const DEFAULT_ROWS = 3
const LINE_HEIGHT = 1.25
const VERTICAL_PADDING_PX = 11

const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minWidth: 0,
})

const NativeTextArea = styled('textarea', {
  shouldForwardProp: (prop) => prop !== 'hasError',
})<{ hasError: boolean }>(({ theme, hasError }) => ({
  display: 'block',
  boxSizing: 'border-box',
  width: '100%',
  margin: 0,
  padding: `${VERTICAL_PADDING_PX}px ${MOBILE_FIELD.paddingStartPx}px`,
  fontFamily: 'inherit',
  fontSize: MOBILE_FIELD.fontSizePx,
  lineHeight: LINE_HEIGHT,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${hasError ? theme.palette.error.main : theme.palette.grey[300]}`,
  borderRadius: mobileFieldRadius(theme),
  outline: 'none',
  resize: 'none',
  '&::placeholder': {
    color: theme.palette.text.secondary,
    opacity: 1,
  },
  '&:focus': outlinedFieldFocusStyles(theme, hasError),
  '&:disabled': outlinedFieldDisabledStyles(theme),
}))

export const IpsTextAreaMobile = forwardRef<HTMLTextAreaElement, IpsTextAreaMobileProps>((props, ref) => {
  const {
    value,
    onChange,
    rows = DEFAULT_ROWS,
    label,
    required = false,
    disabled = false,
    error = false,
    helperText,
    className,
    id: idProp,
    ...nativeTextAreaProps
  } = props

  const generatedId = useId()
  const textAreaId = idProp ?? generatedId
  const helperTextId = `${textAreaId}-helper-text`
  const rootClassName = ['ips-text-area-mobile', className].filter(Boolean).join(' ')

  return (
    <Root className={rootClassName}>
      {label && (
        <MobileFieldLabel htmlFor={textAreaId}>
          {label}
          {required && <RequiredMark aria-hidden="true"> *</RequiredMark>}
        </MobileFieldLabel>
      )}

      <NativeTextArea
        {...nativeTextAreaProps}
        ref={ref}
        id={textAreaId}
        rows={rows}
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        disabled={disabled}
        required={required}
        hasError={error}
        aria-invalid={error || undefined}
        aria-describedby={helperText ? helperTextId : undefined}
      />

      {helperText && (
        <MobileHelperText id={helperTextId} hasError={error} role={error ? 'alert' : undefined}>
          {helperText}
        </MobileHelperText>
      )}
    </Root>
  )
})

IpsTextAreaMobile.displayName = 'IpsTextAreaMobile'

export default IpsTextAreaMobile
