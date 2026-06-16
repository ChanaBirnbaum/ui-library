import React, { forwardRef, useId } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import type { IpsTextFieldProps } from './IpsTextField.types';

const AlertCircleIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ flexShrink: 0 }}
  >
    <path
      d="M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    />
    <path d="M12 8V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 16H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SearchIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IpsTextField = forwardRef<HTMLInputElement, IpsTextFieldProps>(
  (props, ref) => {
    const {
      startAdornment,
      endAdornment,
      InputProps: inputProps,
      inputProps: nativeInputProps,
      className,
      readOnly,
      error,
      helperText,
      label,
      required,
      id: idProp,
      type,
      ...rest
    } = props as any;

    const generatedId = useId();
    const inputId = idProp ?? generatedId;
    const isSearch = type === 'search';

    const mergedNativeInputProps = {
      ...nativeInputProps,
      readOnly: readOnly ? true : nativeInputProps?.readOnly,
    } as typeof nativeInputProps | undefined;

    const resolvedEndAdornment = endAdornment ?? (isSearch ? <SearchIcon /> : undefined);

    const slotPropsInput = {
      ref: ref as any,
      startAdornment: startAdornment
        ? <InputAdornment position="start">{startAdornment}</InputAdornment>
        : inputProps?.startAdornment,
      endAdornment: resolvedEndAdornment
        ? <InputAdornment position="end">{resolvedEndAdornment}</InputAdornment>
        : inputProps?.endAdornment,
      ...inputProps,
    };

    const resolvedHelperText = error && helperText ? (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
        <AlertCircleIcon />
        {helperText}
      </span>
    ) : helperText;

    return (
      <Box className={className}>
        {label != null && (
          <FormLabel
            htmlFor={inputId}
            required={required}
            sx={{ display: 'block', mb: '3px', fontSize: '12px', lineHeight: 1 }}
          >
            {label}
          </FormLabel>
        )}
        <TextField
          {...rest}
          id={inputId}
          type={isSearch ? 'text' : type}
          label={undefined}
          required={required}
          error={error}
          helperText={resolvedHelperText}
          slotProps={{ input: slotPropsInput, htmlInput: mergedNativeInputProps }}
          className="ips-text-field"
        />
      </Box>
    );
  }
);

IpsTextField.displayName = 'IpsTextField';

export default IpsTextField;
