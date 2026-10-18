import React, { forwardRef, useRef } from 'react'
import { styled } from '@mui/material/styles'
import { MOBILE_FIELD } from '../internal/mobileFieldParts'
import type { IpsSearchFieldMobileProps } from './IpsSearchFieldMobile.types'

// Mobile search field built on the native <input type="search">: the keyboard shows a search key,
// and the field is a borderless pill sized for touch. No MUI components.

const FIELD_HEIGHT_PX = 44
const ICON_SIZE_PX = 20
const CLEAR_ICON_SIZE_PX = 18
const ICON_INSET_PX = 14
const TEXT_START_PADDING_PX = ICON_INSET_PX + ICON_SIZE_PX + 8
// The clear button is a full touch target at the end of the field
const CLEAR_BUTTON_SIZE_PX = FIELD_HEIGHT_PX
const DEFAULT_CLEAR_BUTTON_LABEL = 'Clear'
const SEARCH_KEY_HINT = 'search'

const Root = styled('div')({
  position: 'relative',
  width: '100%',
  minWidth: 0,
})

const NativeSearchInput = styled('input')(({ theme }) => ({
  appearance: 'none',
  WebkitAppearance: 'none',
  boxSizing: 'border-box',
  width: '100%',
  height: FIELD_HEIGHT_PX,
  margin: 0,
  paddingInlineStart: TEXT_START_PADDING_PX,
  paddingInlineEnd: CLEAR_BUTTON_SIZE_PX,
  fontFamily: 'inherit',
  fontSize: MOBILE_FIELD.fontSizePx,
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  border: 'none',
  borderRadius: FIELD_HEIGHT_PX / 2,
  outline: 'none',
  textOverflow: 'ellipsis',
  '&::placeholder': {
    color: theme.palette.text.secondary,
    opacity: 1,
  },
  // The browser's own clear button differs per platform, so the field draws its own
  '&::-webkit-search-cancel-button, &::-webkit-search-decoration': {
    WebkitAppearance: 'none',
    display: 'none',
  },
  '&:focus': {
    boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
  },
  '&:disabled': {
    color: theme.palette.text.disabled,
  },
}))

const SearchIconSlot = styled('span')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  insetInlineStart: ICON_INSET_PX,
  display: 'flex',
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
  color: theme.palette.text.secondary,
}))

const ClearButton = styled('button')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  insetInlineEnd: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: CLEAR_BUTTON_SIZE_PX,
  height: CLEAR_BUTTON_SIZE_PX,
  margin: 0,
  padding: 0,
  border: 'none',
  borderRadius: '50%',
  background: 'transparent',
  color: theme.palette.text.secondary,
  cursor: 'pointer',
  '&:focus-visible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: -4,
  },
}))

function SearchIcon() {
  return (
    <svg aria-hidden="true" width={ICON_SIZE_PX} height={ICON_SIZE_PX} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  )
}

function ClearIcon() {
  return (
    <svg aria-hidden="true" width={CLEAR_ICON_SIZE_PX} height={CLEAR_ICON_SIZE_PX} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}

export const IpsSearchFieldMobile = forwardRef<HTMLInputElement, IpsSearchFieldMobileProps>(
  (props, ref) => {
    const {
      value,
      onChange,
      clearButtonLabel = DEFAULT_CLEAR_BUTTON_LABEL,
      disabled = false,
      className,
      ...nativeInputProps
    } = props

    const inputRef = useRef<HTMLInputElement | null>(null)
    const hasValue = value.length > 0

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

    const rootClassName = ['ips-search-field-mobile', className].filter(Boolean).join(' ')

    return (
      <Root className={rootClassName}>
        <SearchIconSlot>
          <SearchIcon />
        </SearchIconSlot>
        <NativeSearchInput
          {...nativeInputProps}
          ref={setInputRef}
          type="search"
          enterKeyHint={nativeInputProps.enterKeyHint ?? SEARCH_KEY_HINT}
          value={value}
          onChange={(event) => onChange?.(event.target.value)}
          disabled={disabled}
        />
        {hasValue && !disabled && (
          <ClearButton type="button" aria-label={clearButtonLabel} onClick={handleClear}>
            <ClearIcon />
          </ClearButton>
        )}
      </Root>
    )
  }
)

IpsSearchFieldMobile.displayName = 'IpsSearchFieldMobile'

export default IpsSearchFieldMobile
