import React from 'react';
import type { SelectProps } from '@mui/material/Select';

export interface IpsSelectOption {
  label: string;
  value: string | number;
  /**
   * Optional group heading. Options with the same group are shown together under it
   * (native: <optgroup>, menu: a list subheader), in order of first appearance;
   * options without a group come first.
   */
  group?: string;
}

export type IpsSelectProps = Omit<SelectProps, 'children'> & {
  /** Array of available options */
  options: IpsSelectOption[];
  /** Controlled value */
  value?: string | number | string[] | number[];
  /** Change callback */
  onChange?: (value: string | number | string[] | number[]) => void;
  /** Field label */
  label?: string;
  /** Read-only: shows value, no edit */
  readOnly?: boolean;
  /** Placeholder text (empty state) */
  placeholder?: string;
  /** Error visual state */
  error?: boolean;
  /** Helper/error text below */
  helperText?: string;
  /** Multi-select mode */
  multiple?: boolean;
  /** CSS class on root FormControl */
  className?: string;
};
