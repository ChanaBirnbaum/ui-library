import React, { forwardRef, useId, type ChangeEvent } from 'react'
import FormControlLabel from '@mui/material/FormControlLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import { styled } from '@mui/material/styles'
import type { IpsRadioGroupOption, IpsRadioGroupProps } from './IpsRadioGroup.types'

// Single choice between a few options, for desktop: the MUI-based counterpart of IpsRadioGroupMobile, with the same API.
// Without descriptions the options sit in one wrapping row. When any option has a description, every option gets its
// own row: a title and, under it, what choosing it means. variant="cards" shows every option as a bordered card that is
// clickable as a whole (e.g. choosing one of several records). Keyboard arrows move between the options and check them,
// as in any radio group.

const DESCRIPTION_FONT_SIZE_PX = 14
const DESCRIPTION_LINE_HEIGHT_PX = 18
const STACKED_ROW_GAP_PX = 16
const CARDS_GAP_PX = 8
const CARD_PADDING_PX = 16
const CARD_FALLBACK_RADIUS_PX = 12
const RADIO_TEXT_GAP_PX = 12

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

export const IpsRadioGroup = forwardRef<HTMLDivElement, IpsRadioGroupProps>((props, ref) => {
  const {
    options,
    value,
    onChange,
    variant = 'list',
    label,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-describedby': ariaDescribedBy,
    name,
    disabled = false,
    className,
  } = props

  const generatedId = useId()
  const labelId = `${generatedId}-label`
  const isCards = variant === 'cards'
  const isStacked = isCards || options.some((option) => Boolean(option.description))
  const rootClassName = ['ips-radio-group', className].filter(Boolean).join(' ')

  // RadioGroup works with strings; the consumer gets back the option's original value
  const handleChange = (_event: ChangeEvent<HTMLInputElement>, selectedValue: string) => {
    const selectedOption = options.find((option) => String(option.value) === selectedValue)
    if (selectedOption) {
      onChange?.(selectedOption.value)
    }
  }

  const renderOption = (option: IpsRadioGroupOption, index: number) => {
    const isChecked = value !== null && String(option.value) === String(value)
    const optionId = `${generatedId}-option-${index}`
    // With a description, the name is the title only and the description is read after it
    const titleId = option.description ? `${optionId}-title` : undefined
    const descriptionId = option.description ? `${optionId}-description` : undefined

    return (
      <FormControlLabel
        key={option.value}
        className={isChecked ? 'ips-radio-group-option ips-radio-group-option-checked' : 'ips-radio-group-option'}
        value={String(option.value)}
        disabled={disabled}
        control={
          <Radio
            inputProps={{ 'aria-labelledby': titleId, 'aria-describedby': descriptionId }}
            // Stacked: no padding, so the 24px radio sits next to the title's first line
            sx={isStacked ? { p: 0 } : undefined}
          />
        }
        label={
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
        }
        sx={(theme) => ({
          m: 0,
          ...(isStacked && { alignItems: 'flex-start', gap: `${RADIO_TEXT_GAP_PX}px` }),
          ...(isCards && {
            width: '100%',
            boxSizing: 'border-box',
            p: `${CARD_PADDING_PX}px`,
            border: '1px solid',
            borderColor: isChecked ? theme.palette.primary.main : theme.palette.divider,
            borderRadius: `${theme.custom?.radius?.card ?? CARD_FALLBACK_RADIUS_PX}px`,
            backgroundColor: theme.palette.background.paper,
            transition: theme.transitions.create('border-color'),
            '&:hover': {
              borderColor: isChecked || disabled ? undefined : theme.palette.text.secondary,
            },
          }),
          '& .MuiFormControlLabel-label': { flex: isStacked ? 1 : undefined, minWidth: 0 },
        })}
      />
    )
  }

  return (
    <Root ref={ref} className={rootClassName}>
      {label && <GroupLabel id={labelId}>{label}</GroupLabel>}
      <RadioGroup
        name={name}
        row={!isStacked}
        value={value === null ? '' : String(value)}
        onChange={handleChange}
        aria-labelledby={label ? labelId : ariaLabelledBy}
        aria-label={label || ariaLabelledBy ? undefined : ariaLabel}
        aria-describedby={ariaDescribedBy}
        sx={{ gap: isStacked ? `${isCards ? CARDS_GAP_PX : STACKED_ROW_GAP_PX}px` : undefined }}
      >
        {options.map(renderOption)}
      </RadioGroup>
    </Root>
  )
})

IpsRadioGroup.displayName = 'IpsRadioGroup'

export default IpsRadioGroup
