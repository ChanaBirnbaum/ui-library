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
}
