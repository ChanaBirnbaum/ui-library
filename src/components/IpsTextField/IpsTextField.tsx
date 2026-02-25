import React, { forwardRef } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import type { IpsTextFieldProps } from './IpsTextField.types';

export const IpsTextField = forwardRef<HTMLInputElement, IpsTextFieldProps>(
  (props, ref) => {
    const {
      startAdornment,
      endAdornment,
      InputProps: inputProps,
      inputProps: nativeInputProps,
      className,
      readOnly,
      ...rest
    } = props as any;

    const mergedNativeInputProps = {
      ...nativeInputProps,
      readOnly: readOnly ? true : nativeInputProps?.readOnly,
    } as typeof nativeInputProps | undefined;

    const slotPropsInput = {
      ref: ref as any,
      startAdornment: startAdornment
        ? <InputAdornment position="start">{startAdornment}</InputAdornment>
        : inputProps?.startAdornment,
      endAdornment: endAdornment
        ? <InputAdornment position="end">{endAdornment}</InputAdornment>
        : inputProps?.endAdornment,
      ...inputProps,
    };

    return (
      <TextField
        {...rest}
        slotProps={{ input: slotPropsInput, htmlInput: mergedNativeInputProps }}
        className={["ips-text-field", className].filter(Boolean).join(' ')}
      />
    );
  }
);

IpsTextField.displayName = 'IpsTextField';

export default IpsTextField;
