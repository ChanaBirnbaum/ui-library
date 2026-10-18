import React from 'react'
import { styled, type Theme } from '@mui/material/styles'

// Shared building blocks for the native mobile fields (IpsSelectMobile, IpsMultiSelectMobile, IpsTextFieldMobile,
// IpsTextAreaMobile, IpsDatePickerMobile, IpsTimePickerMobile), so every Ips*Mobile field has the same label,
// box, chevron and helper text.

export const MOBILE_FIELD = {
  heightPx: 42,
  paddingStartPx: 14,
  chevronSizePx: 20,
  chevronInsetPx: 12,
  // 16px keeps iOS Safari from zooming the page when the field gets focus
  fontSizePx: 16,
  fallbackRadiusPx: 6,
} as const

export const CHEVRON_CLEARANCE_PX = MOBILE_FIELD.chevronInsetPx + MOBILE_FIELD.chevronSizePx + 8

export const MobileFieldLabel = styled('label')(({ theme }) => ({
  display: 'block',
  marginBottom: '3px',
  fontSize: '12px',
  lineHeight: 1,
  color: theme.palette.text.secondary,
}))

export const RequiredMark = styled('span')(({ theme }) => ({
  color: theme.palette.error.main,
}))

export const MobileHelperText = styled('p', {
  shouldForwardProp: (prop) => prop !== 'hasError',
})<{ hasError: boolean }>(({ theme, hasError }) => ({
  margin: '4px 0 0',
  fontSize: '12px',
  lineHeight: 1.25,
  color: hasError ? theme.palette.error.main : theme.palette.text.secondary,
}))

/** Field radius from the IPS theme; plain MUI themes (tests, stories) fall back */
export function mobileFieldRadius(theme: Theme): number {
  return theme.custom?.radius?.input ?? MOBILE_FIELD.fallbackRadiusPx
}

interface OutlinedBoxState {
  hasValue: boolean
  hasError: boolean
}

/** The outlined field box (border, background, height, text color). Focus styles are added by each field */
export function outlinedFieldBoxStyles(theme: Theme, { hasValue, hasError }: OutlinedBoxState) {
  return {
    width: '100%',
    height: MOBILE_FIELD.heightPx,
    margin: 0,
    paddingInlineStart: MOBILE_FIELD.paddingStartPx,
    paddingInlineEnd: CHEVRON_CLEARANCE_PX,
    fontFamily: 'inherit',
    fontSize: MOBILE_FIELD.fontSizePx,
    color: hasValue ? theme.palette.text.primary : theme.palette.text.secondary,
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${hasError ? theme.palette.error.main : theme.palette.grey[300]}`,
    borderRadius: mobileFieldRadius(theme),
  }
}

/** 2px focus border like the library's fields, without shifting the content */
export function outlinedFieldFocusStyles(theme: Theme, hasError: boolean) {
  const focusColor = hasError ? theme.palette.error.main : theme.palette.primary.main
  return {
    borderColor: focusColor,
    boxShadow: `inset 0 0 0 1px ${focusColor}`,
  }
}

export function outlinedFieldDisabledStyles(theme: Theme) {
  return {
    cursor: 'default',
    color: theme.palette.text.disabled,
    backgroundColor: theme.palette.grey[50],
    borderColor: theme.palette.grey[200],
  }
}

/** Positions the chevron inside an outlined field. Taps pass through to the native control */
export const OutlinedChevronSlot = styled('span')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  insetInlineEnd: MOBILE_FIELD.chevronInsetPx,
  display: 'flex',
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
  color: theme.palette.text.secondary,
}))

export function ChevronDownIcon() {
  return (
    <svg
      aria-hidden="true"
      width={MOBILE_FIELD.chevronSizePx}
      height={MOBILE_FIELD.chevronSizePx}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

/** A native control stretched invisibly over a custom trigger, so a tap anywhere opens the OS picker */
export const invisibleOverlayStyles = {
  position: 'absolute',
  inset: 0,
  width: '100%',
  height: '100%',
  margin: 0,
  opacity: 0,
  fontSize: MOBILE_FIELD.fontSizePx,
  cursor: 'pointer',
  '&:disabled': { cursor: 'default' },
} as const
