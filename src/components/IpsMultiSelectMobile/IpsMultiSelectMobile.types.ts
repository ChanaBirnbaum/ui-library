import type { IpsSelectOption } from '../IpsSelect/IpsSelect.types'

/** The value type of a single option (kept as is: a number stays a number) */
export type IpsMultiSelectMobileValue = string | number

/**
 * auto — the native OS picker on a real iPhone/iPad (<select multiple> behaves very well there),
 * and IpsSelect multiple (menu with checkboxes) everywhere else, including desktop devtools.
 * native / menu — force one picker (stories, tests, or a consumer with a reason).
 */
export type IpsMultiSelectMobilePicker = 'auto' | 'native' | 'menu'

export interface IpsMultiSelectMobileProps {
  /** Array of available options (same shape as IpsSelect; `group` shows them under headings) */
  options: IpsSelectOption[]
  /** Selected values. [] = nothing selected (or "all", when allOptionLabel is set) */
  value: IpsMultiSelectMobileValue[]
  /** Fired with the original option values (number options return numbers) */
  onChange?: (value: IpsMultiSelectMobileValue[]) => void
  /** Label above the field */
  label?: string
  /** Text shown while nothing is selected */
  placeholder?: string
  /**
   * Adds an explicit "all" option at the top of the list, with this label.
   * "All" is the empty selection ([]): choosing it clears the other options,
   * and choosing an option while "all" is selected keeps only that option.
   */
  allOptionLabel?: string
  /**
   * Text of the field for one or more selected options.
   * Default: the labels joined with ", ".
   */
  formatSelection?: (selectedLabels: string[]) => string
  /** Which picker to use. Default: 'auto' */
  picker?: IpsMultiSelectMobilePicker
  /** Required field — adds a red asterisk to the label */
  required?: boolean
  /** Disables the field */
  disabled?: boolean
  /** Error visual state */
  error?: boolean
  /** Helper / error text below the field */
  helperText?: string
  /** Accessible name when there is no visible label */
  'aria-label'?: string
  id?: string
  name?: string
  /** CSS class on the root element */
  className?: string
}
