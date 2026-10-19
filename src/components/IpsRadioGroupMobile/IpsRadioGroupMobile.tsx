import React, { forwardRef, useId } from 'react'
import { alpha, styled } from '@mui/material/styles'
import type { IpsRadioGroupMobileProps } from './IpsRadioGroupMobile.types'

// Single choice between a few options (e.g. a limit type in a form).
// Without descriptions the options sit side by side in one wrapping row. When any option has a
// description, every option gets its own row: a title and, under it, what choosing it means.
// Built on native radio inputs: they keep the semantics, keyboard arrows and screen-reader support,
// and are only hidden visually behind a drawn circle. No MUI components.

const CIRCLE_SIZE_PX = 20
const DOT_SIZE_PX = 10
const CIRCLE_SLOT_SIZE_PX = 24
const OPTION_FONT_SIZE_PX = 16
const OPTION_LINE_HEIGHT_PX = 24
const DESCRIPTION_FONT_SIZE_PX = 14
const DESCRIPTION_LINE_HEIGHT_PX = 18
const ROW_GAP_PX = 8
const STACKED_ROW_GAP_PX = 16
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

const Options = styled('div', {
  shouldForwardProp: (prop) => prop !== 'isStacked',
})<{ isStacked: boolean }>(({ isStacked }) =>
  isStacked
    ? { display: 'flex', flexDirection: 'column', rowGap: STACKED_ROW_GAP_PX }
    : { display: 'flex', flexWrap: 'wrap', rowGap: ROW_GAP_PX, columnGap: COLUMN_GAP_PX }
)

interface OptionStyleProps {
  isDisabled: boolean
  isStacked: boolean
}

const Option = styled('label', {
  shouldForwardProp: (prop) => prop !== 'isDisabled' && prop !== 'isStacked',
})<OptionStyleProps>(({ theme, isDisabled, isStacked }) => ({
  position: 'relative',
  display: isStacked ? 'flex' : 'inline-flex',
  // A stacked option wraps its text, so the circle stays next to the first line
  alignItems: isStacked ? 'flex-start' : 'center',
  gap: 8,
  fontSize: OPTION_FONT_SIZE_PX,
  lineHeight: `${OPTION_LINE_HEIGHT_PX}px`,
  whiteSpace: isStacked ? 'normal' : 'nowrap',
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

const OptionText = styled('span')({
  display: 'flex',
  flexDirection: 'column',
  minWidth: 0,
})

const OptionTitle = styled('span', {
  shouldForwardProp: (prop) => prop !== 'isStacked',
})<{ isStacked: boolean }>(({ theme, isStacked }) => ({
  fontWeight: isStacked ? theme.typography.fontWeightMedium : undefined,
}))

const OptionDescription = styled('span', {
  shouldForwardProp: (prop) => prop !== 'isDisabled',
})<{ isDisabled: boolean }>(({ theme, isDisabled }) => ({
  fontSize: DESCRIPTION_FONT_SIZE_PX,
  lineHeight: `${DESCRIPTION_LINE_HEIGHT_PX}px`,
  color: isDisabled ? theme.palette.text.disabled : theme.palette.text.secondary,
}))

export const IpsRadioGroupMobile = forwardRef<HTMLDivElement, IpsRadioGroupMobileProps>((props, ref) => {
  const { options, value, onChange, label, 'aria-label': ariaLabel, name, disabled = false, className } = props

  const generatedId = useId()
  const groupName = name ?? generatedId
  const labelId = `${generatedId}-label`
  const isStacked = options.some((option) => Boolean(option.description))
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
      <Options isStacked={isStacked}>
        {options.map((option, index) => {
          const isChecked = value !== null && String(option.value) === String(value)
          const optionId = `${generatedId}-option-${index}`
          // With a description, the name is the title only and the description is read after it
          const titleId = option.description ? `${optionId}-title` : undefined
          const descriptionId = option.description ? `${optionId}-description` : undefined
          return (
            <Option
              key={option.value}
              className="ips-radio-group-option"
              isDisabled={disabled}
              isStacked={isStacked}
            >
              <VisuallyHiddenRadio
                type="radio"
                name={groupName}
                value={String(option.value)}
                checked={isChecked}
                disabled={disabled}
                aria-labelledby={titleId}
                aria-describedby={descriptionId}
                onChange={() => onChange?.(option.value)}
              />
              <CircleSlot aria-hidden="true">
                <Circle isChecked={isChecked} isDisabled={disabled}>
                  {isChecked && <Dot isDisabled={disabled} />}
                </Circle>
              </CircleSlot>
              <OptionText>
                <OptionTitle id={titleId} isStacked={isStacked}>
                  {option.label}
                </OptionTitle>
                {option.description && (
                  <OptionDescription id={descriptionId} isDisabled={disabled}>
                    {option.description}
                  </OptionDescription>
                )}
              </OptionText>
            </Option>
          )
        })}
      </Options>
    </Root>
  )
})

IpsRadioGroupMobile.displayName = 'IpsRadioGroupMobile'

export default IpsRadioGroupMobile
