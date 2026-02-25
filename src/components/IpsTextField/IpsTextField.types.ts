import React from 'react';
import type { TextFieldProps } from '@mui/material/TextField';

export type IpsTextFieldProps = TextFieldProps & {
  /** Content to render inside a start adornment */
  startAdornment?: React.ReactNode;
  /** Content to render inside an end adornment */
  endAdornment?: React.ReactNode;
  /** MUI InputProps passthrough (loose typing for scaffold) */
  InputProps?: any;
  /** CSS class on root element */
  className?: string;
  /** Optional label (included for explicit typing compatibility) */
  label?: React.ReactNode;
  /** Optional placeholder */
  placeholder?: string;
  /** Optional default value for uncontrolled mode */
  defaultValue?: string;
  /** Read-only mode (input cannot be edited) */
  readOnly?: boolean;
};
