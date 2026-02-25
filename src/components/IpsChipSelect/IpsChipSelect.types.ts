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
}
