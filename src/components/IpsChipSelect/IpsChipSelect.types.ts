import type { SelectProps } from '@mui/material/Select';

export interface IpsChipSelectOption {
  label: string;
  value: string | number;
}

export interface IpsChipSelectProps
  extends Omit<SelectProps<(string | number)[]>, 'multiple' | 'renderValue' | 'onChange'> {
  /** Array of available options */
  options?: IpsChipSelectOption[];
  /** Controlled selected values */
  value?: (string | number)[];
  /** Change callback */
  onChange?: (values: (string | number)[]) => void;
  /** Field label */
  label?: string;
  /** Placeholder text when no value selected */
  placeholder?: string;
  /** CSS class on root element */
  className?: string;
  /** Adds a "Select All" option at the top of the dropdown */
  enableSelectAll?: boolean;
  /** Label for the "Select All" dropdown option */
  selectAllLabel?: string;
  /** Label for the merged chip shown when every option is selected */
  allSelectedChipLabel?: string;
  /**
   * Max height of the dropdown popup; longer option lists scroll inside it.
   * Any CSS length (number = px). Defaults to 320.
   */
  maxMenuHeight?: number | string;
  /**
   * How many chips stay visible before the rest collapse into an overflow chip
   * ("…") that lists them in a tooltip and expands them on click.
   * Defaults to 3; set to 0 to always show every chip.
   */
  maxVisibleChips?: number;
  /** Tooltip on the overflow chip while the chips are expanded */
  collapseChipsTooltip?: string;
  /** Tooltip suffix when more hidden chips exist than the tooltip lists */
  moreItemsTooltipLabel?: (count: number) => string;
}
