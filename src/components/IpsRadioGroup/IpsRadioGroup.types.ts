import type { ReactNode } from 'react'

/** The value type of a single option (kept as is: a number stays a number) */
export type IpsRadioGroupValue = string | number

export interface IpsRadioGroupOption {
  value: IpsRadioGroupValue
  label: string
  /**
   * What choosing this option means, shown under the label and read after the radio's name.
   * When any option has one, the options are stacked one per row. In the cards variant it can be any content.
   */
  description?: ReactNode
}

/**
 * list  — plain radios: one wrapping row, or stacked when any option has a description.
 * cards — every option is a bordered card (stacked), clickable as a whole; the checked card is outlined in the primary color.
 */
export type IpsRadioGroupVariant = 'list' | 'cards'

export interface IpsRadioGroupProps {
  options: IpsRadioGroupOption[]
  /** Selected value. null = nothing selected */
  value: IpsRadioGroupValue | null
  /** Fired with the original option value when an option is chosen (also by keyboard arrows) */
  onChange?: (value: IpsRadioGroupValue) => void
  /** Visual variant. Default: 'list' */
  variant?: IpsRadioGroupVariant
  /** Visible title above the options; also names the radio group */
  label?: string
  /** Accessible name when there is no visible label */
  'aria-label'?: string
  /** Id of an element elsewhere that names the group (e.g. a heading) */
  'aria-labelledby'?: string
  /** Id of an element that describes the group (e.g. a hint) */
  'aria-describedby'?: string
  /** Name of the radio group. Default: a generated id */
  name?: string
  /** Disables every option */
  disabled?: boolean
  /** CSS class on the root element */
  className?: string
}
