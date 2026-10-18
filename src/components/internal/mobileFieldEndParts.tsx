import React from 'react'
import { styled } from '@mui/material/styles'
import { CHEVRON_CLEARANCE_PX, MOBILE_FIELD } from './mobileFieldParts'

// The end of an outlined mobile field: a decorative icon, or a clear (X) button once there is a value.
// Shared by IpsDatePickerMobile, IpsTimePickerMobile and IpsTextFieldMobile.

const ICON_SIZE_PX = 20

/** A decorative icon at the end of the field. Taps pass through to the control under it */
export const FieldEndIconSlot = styled('span')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  insetInlineEnd: MOBILE_FIELD.chevronInsetPx,
  display: 'flex',
  transform: 'translateY(-50%)',
  pointerEvents: 'none',
  color: theme.palette.text.primary,
}))

/** The clear button covers the whole end area of the field, so it is a comfortable touch target */
export const FieldClearButton = styled('button')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  insetInlineEnd: 0,
  // Above an invisible native control that covers the field (date / time pickers)
  zIndex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: CHEVRON_CLEARANCE_PX,
  height: MOBILE_FIELD.heightPx,
  margin: 0,
  padding: 0,
  border: 'none',
  background: 'transparent',
  color: theme.palette.text.primary,
  cursor: 'pointer',
  '&:focus-visible': {
    outline: `2px solid ${theme.palette.primary.main}`,
    outlineOffset: -6,
    borderRadius: 4,
  },
}))

function OutlineIcon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      aria-hidden="true"
      width={ICON_SIZE_PX}
      height={ICON_SIZE_PX}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  )
}

export function ClearIcon() {
  return (
    <OutlineIcon>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </OutlineIcon>
  )
}

export function CalendarIcon() {
  return (
    <OutlineIcon>
      <path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z" />
      <path d="M16 3v4" />
      <path d="M8 3v4" />
      <path d="M4 11h16" />
    </OutlineIcon>
  )
}

export function ClockIcon() {
  return (
    <OutlineIcon>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </OutlineIcon>
  )
}
