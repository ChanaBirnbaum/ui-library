import React, { forwardRef, useId } from 'react'
import { alpha, styled } from '@mui/material/styles'
import type { IpsRadioGroupMobileProps } from './IpsRadioGroupMobile.types'

// Single choice between a few options shown side by side (e.g. a limit type in a form).
// Built on native radio inputs: they keep the semantics, keyboard arrows and screen-reader support,
// and are only hidden visually behind a drawn circle. No MUI components.

const CIRCLE_SIZE_PX = 20
const DOT_SIZE_PX = 10
const CIRCLE_SLOT_SIZE_PX = 24
const OPTION_FONT_SIZE_PX = 16
const OPTION_LINE_HEIGHT_PX = 24
const ROW_GAP_PX = 8
const COLUMN_GAP_PX = 16
const FOCUS_RING_OPACITY = 0.4

const Root = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
})

const GroupLabel = styled('span')(({ theme }) => ({
  marginBottom: 4,
  fontSize: '0.875rem',
  color: theme.palette.text.secondary,
}))

const Options = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  rowGap: ROW_GAP_PX,
  columnGap: COLUMN_GAP_PX,
})

const Option = styled('label', {
  shouldForwardProp: (prop) => prop !== 'isDisabled',
})<{ isDisabled: boolean }>(({ theme, isDisabled }) => ({
  position: 'relative',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 8,
  fontSize: OPTION_FONT_SIZE_PX,
  lineHeight: `${OPTION_LINE_HEIGHT_PX}px`,
  whiteSpace: 'nowrap',
  color: isDisabled ? theme.palette.text.disabled : theme.palette.text.primary,
  cursor: isDisabled ? 'default' : 'pointer',
  // The radio comes first, so keyboard focus can ring the drawn circle after it
  '& input:focus-visible + span': {
    boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, FOCUS_RING_OPACITY)}`,
  },
}))

const VisuallyHiddenRadio = styled('input')({
  position: 'absolute',
  width: 1,
  height: 1,
  margin: 0,
  opacity: 0,
  pointerEvents: 'none',
})

const CircleSlot = styled('span')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  width: CIRCLE_SLOT_SIZE_PX,
  height: CIRCLE_SLOT_SIZE_PX,
  borderRadius: '50%',
})

interface CircleStyleProps {
  isChecked: boolean
  isDisabled: boolean
}

const Circle = styled('span', {
  shouldForwardProp: (prop) => prop !== 'isChecked' && prop !== 'isDisabled',
})<CircleStyleProps>(({ theme, isChecked, isDisabled }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxSizing: 'border-box',
  width: CIRCLE_SIZE_PX,
  height: CIRCLE_SIZE_PX,
  border: `${isChecked ? 2 : 1}px solid ${isDisabled ? theme.palette.text.disabled : theme.palette.primary.main}`,
  borderRadius: '50%',
}))

const Dot = styled('span', {
  shouldForwardProp: (prop) => prop !== 'isDisabled',
})<{ isDisabled: boolean }>(({ theme, isDisabled }) => ({
  width: DOT_SIZE_PX,
  height: DOT_SIZE_PX,
  borderRadius: '50%',
  backgroundColor: isDisabled ? theme.palette.text.disabled : theme.palette.primary.main,
}))

export const IpsRadioGroupMobile = forwardRef<HTMLDivElement, IpsRadioGroupMobileProps>((props, ref) => {
  const { options, value, onChange, label, 'aria-label': ariaLabel, name, disabled = false, className } = props

  const generatedId = useId()
  const groupName = name ?? generatedId
  const labelId = `${generatedId}-label`
  const rootClassName = ['ips-radio-group-mobile', className].filter(Boolean).join(' ')

  return (
    <Root
      ref={ref}
      role="radiogroup"
      aria-labelledby={label ? labelId : undefined}
      aria-label={label ? undefined : ariaLabel}
      className={rootClassName}
    >
      {label && <GroupLabel id={labelId}>{label}</GroupLabel>}
      <Options>
        {options.map((option) => {
          const isChecked = value !== null && String(option.value) === String(value)
          return (
            <Option key={option.value} className="ips-radio-group-option" isDisabled={disabled}>
              <VisuallyHiddenRadio
                type="radio"
                name={groupName}
                value={String(option.value)}
                checked={isChecked}
                disabled={disabled}
                onChange={() => onChange?.(option.value)}
              />
              <CircleSlot aria-hidden="true">
                <Circle isChecked={isChecked} isDisabled={disabled}>
                  {isChecked && <Dot isDisabled={disabled} />}
                </Circle>
              </CircleSlot>
              <span>{option.label}</span>
            </Option>
          )
        })}
      </Options>
    </Root>
  )
})

IpsRadioGroupMobile.displayName = 'IpsRadioGroupMobile'

export default IpsRadioGroupMobile
