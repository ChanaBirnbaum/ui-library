import type { InputHTMLAttributes } from 'react'

export type IpsTimePickerMobileProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'defaultValue' | 'onChange' | 'type' | 'size' | 'min' | 'max'
> & {
  /** Controlled value, 'HH:mm' (24h). '' = no time (the placeholder is shown) */
  value: string
  /** Fired with the new 'HH:mm' value, and with '' when cleared */
  onChange?: (value: string) => void
  /** Text shown while there is no time */
  placeholder?: string
  /** Earliest time, 'HH:mm' */
  min?: string
  /** Latest time, 'HH:mm' */
  max?: string
  /** Accessible name of the clear (X) button, shown in place of the clock icon once there is a value. Without it the field has no clear button */
  clearButtonLabel?: string
  /** Label above the field */
  label?: string
  /** Required field — adds a red asterisk to the label */
  required?: boolean
  /** Disables the field */
  disabled?: boolean
  /** Error visual state */
  error?: boolean
  /** Helper / error text below the field */
  helperText?: string
  /** CSS class on the root element */
  className?: string
}
