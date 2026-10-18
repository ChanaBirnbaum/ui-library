import type { InputHTMLAttributes } from 'react'

export type IpsSearchFieldMobileProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'defaultValue' | 'onChange' | 'type' | 'size'
> & {
  /** Controlled search text */
  value: string
  /** Fired with the new text on every keystroke, and with '' when cleared */
  onChange?: (value: string) => void
  /** Accessible name of the clear (X) button. Default: 'Clear' */
  clearButtonLabel?: string
  /** CSS class on the root element */
  className?: string
}
