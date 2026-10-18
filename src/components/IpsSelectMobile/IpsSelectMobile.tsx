import React, { forwardRef, useId } from 'react'
import { styled } from '@mui/material/styles'
import {
  ChevronDownIcon,
  MobileFieldLabel,
  MobileHelperText,
  OutlinedChevronSlot,
  RequiredMark,
  invisibleOverlayStyles,
  outlinedFieldBoxStyles,
  outlinedFieldDisabledStyles,
  outlinedFieldFocusStyles,
} from '../internal/mobileFieldParts'
import { NativeOptions } from '../internal/NativeOptions'
import type { IpsSelectMobileProps } from './IpsSelectMobile.types'

// Mobile select built on the native <select>: the OS picker opens on tap.
// Only the theme's styling engine is used here — no MUI components.

const EMPTY_OPTION_VALUE = ''
const PLAIN_FOCUS_RADIUS_PX = 4

const Root = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isPlain',
})<{ isPlain: boolean }>(({ isPlain }) => ({
  display: isPlain ? 'inline-flex' : 'flex',
  flexDirection: 'column',
  width: isPlain ? 'auto' : '100%',
  maxWidth: '100%',
  minWidth: 0,
}))

const FieldWrapper = styled('div')({
  position: 'relative',
  width: '100%',
})

interface OutlinedSelectStyleProps {
  hasValue: boolean
  hasError: boolean
}

const OutlinedSelect = styled('select', {
  shouldForwardProp: (prop) => prop !== 'hasValue' && prop !== 'hasError',
})<OutlinedSelectStyleProps>(({ theme, hasValue, hasError }) => ({
  ...outlinedFieldBoxStyles(theme, { hasValue, hasError }),
  appearance: 'none',
  WebkitAppearance: 'none',
  outline: 'none',
  cursor: 'pointer',
  textOverflow: 'ellipsis',
  '&:hover:not(:disabled):not(:focus)': {
    borderColor: hasError ? theme.palette.error.main : theme.palette.text.primary,
  },
  '&:focus': outlinedFieldFocusStyles(theme, hasError),
  '&:disabled': outlinedFieldDisabledStyles(theme),
  '& option': {
    color: theme.palette.text.primary,
  },
}))

// plain: the visible trigger is text + chevron; a transparent native <select> covers it,
// so a tap anywhere on the trigger opens the OS picker
const PlainTrigger = styled('div', {
  shouldForwardProp: (prop) => prop !== 'hasValue' && prop !== 'isDisabled',
})<{ hasValue: boolean; isDisabled: boolean }>(({ theme, hasValue, isDisabled }) => ({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 4,
  maxWidth: '100%',
  minWidth: 0,
  font: 'inherit',
  color: isDisabled ? theme.palette.text.disabled : hasValue ? 'inherit' : theme.palette.text.secondary,
  '& svg': { flexShrink: 0 },
  // The native select comes first in the DOM, so keyboard focus can ring the value text after it
  '& select:focus-visible + span': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: 2,
    borderRadius: PLAIN_FOCUS_RADIUS_PX,
  },
}))

const PlainValue = styled('span')({
  minWidth: 0,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
})

const PlainNativeSelect = styled('select')(invisibleOverlayStyles)

function isEmptyValue(value: IpsSelectMobileProps['value']): boolean {
  return value === null || value === undefined || value === EMPTY_OPTION_VALUE
}

export const IpsSelectMobile = forwardRef<HTMLSelectElement, IpsSelectMobileProps>(
  (props, ref) => {
    const {
      options,
      value,
      onChange,
      variant = 'outlined',
      label,
      placeholder,
      required = false,
      disabled = false,
      error = false,
      helperText,
      className,
      id: idProp,
      ...nativeSelectProps
    } = props

    const generatedId = useId()
    const selectId = idProp ?? generatedId
    const helperTextId = `${selectId}-helper-text`
    const hasValue = !isEmptyValue(value)
    const nativeValue = hasValue ? String(value) : EMPTY_OPTION_VALUE
    const isPlain = variant === 'plain'

    // A native <select> value is always a string, so hand back the option's original value
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedOption = options.find(
        (option) => String(option.value) === event.target.value
      )
      if (selectedOption) {
        onChange?.(selectedOption.value)
      }
    }

    const sharedSelectProps = {
      ...nativeSelectProps,
      ref,
      id: selectId,
      value: nativeValue,
      onChange: handleChange,
      disabled,
      required,
      'aria-invalid': error || undefined,
      'aria-describedby': helperText ? helperTextId : undefined,
    }

    const optionElements = (
      <>
        <option value={EMPTY_OPTION_VALUE} disabled>
          {placeholder ?? ''}
        </option>
        <NativeOptions options={options} />
      </>
    )

    const selectedLabel = options.find((option) => String(option.value) === nativeValue)?.label
    const rootClassName = ['ips-select-mobile', isPlain && 'ips-select-mobile-plain', className]
      .filter(Boolean)
      .join(' ')

    return (
      <Root className={rootClassName} isPlain={isPlain}>
        {label && (
          <MobileFieldLabel htmlFor={selectId}>
            {label}
            {required && <RequiredMark aria-hidden="true"> *</RequiredMark>}
          </MobileFieldLabel>
        )}

        {isPlain ? (
          <PlainTrigger hasValue={hasValue} isDisabled={disabled}>
            <PlainNativeSelect {...sharedSelectProps}>{optionElements}</PlainNativeSelect>
            <PlainValue>{selectedLabel ?? placeholder ?? ''}</PlainValue>
            <ChevronDownIcon />
          </PlainTrigger>
        ) : (
          <FieldWrapper>
            <OutlinedSelect {...sharedSelectProps} hasValue={hasValue} hasError={error}>
              {optionElements}
            </OutlinedSelect>
            <OutlinedChevronSlot>
              <ChevronDownIcon />
            </OutlinedChevronSlot>
          </FieldWrapper>
        )}

        {helperText && (
          <MobileHelperText id={helperTextId} hasError={error} role={error ? 'alert' : undefined}>
            {helperText}
          </MobileHelperText>
        )}
      </Root>
    )
  }
)

IpsSelectMobile.displayName = 'IpsSelectMobile'

export default IpsSelectMobile
