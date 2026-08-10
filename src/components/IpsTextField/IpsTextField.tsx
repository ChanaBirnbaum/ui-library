import React, { forwardRef, useId, useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
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

const ClearIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 6L6 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
      value: valueProp,
      defaultValue,
      onChange: onChangeProp,
      ...rest
    } = props as any;

    const generatedId = useId();
    const inputId = idProp ?? generatedId;
    const isSearch = type === 'search';

    const isControlled = valueProp !== undefined;
    const [internalValue, setInternalValue] = useState<string>(defaultValue ?? '');
    const currentValue = isControlled ? valueProp : internalValue;
    const hasValue = currentValue != null && String(currentValue).length > 0;

    const inputRef = useRef<HTMLInputElement | null>(null);
    const setInputRef = (node: HTMLInputElement | null) => {
      inputRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref && typeof ref === 'object') {
        (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
      }
      if (typeof nativeInputProps?.ref === 'function') {
        nativeInputProps.ref(node);
      } else if (nativeInputProps?.ref && typeof nativeInputProps.ref === 'object') {
        (nativeInputProps.ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
      }
    };

    const mergedNativeInputProps = {
      ...nativeInputProps,
      ref: setInputRef,
      readOnly: readOnly ? true : nativeInputProps?.readOnly,
    } as typeof nativeInputProps | undefined;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) setInternalValue(event.target.value);
      onChangeProp?.(event);
    };

    const handleClear = () => {
      if (isControlled) {
        onChangeProp?.({
          target: { value: '' },
          currentTarget: { value: '' },
        } as React.ChangeEvent<HTMLInputElement>);
      } else {
        setInternalValue('');
        const nativeSetter = Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          'value'
        )?.set;
        if (inputRef.current && nativeSetter) {
          nativeSetter.call(inputRef.current, '');
          inputRef.current.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }
      inputRef.current?.focus();
    };

    const searchAdornment = isSearch
      ? hasValue
        ? (
          <IconButton
            size="small"
            aria-label="Clear search"
            onClick={handleClear}
            edge="end"
            tabIndex={-1}
          >
            <ClearIcon />
          </IconButton>
        )
        : <SearchIcon />
      : undefined;

    const resolvedEndAdornment = endAdornment ?? searchAdornment;

    const slotPropsInput = {
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
          value={valueProp}
          defaultValue={defaultValue}
          onChange={handleChange}
          slotProps={{ input: slotPropsInput, htmlInput: mergedNativeInputProps }}
          className="ips-text-field"
        />
      </Box>
    );
  }
);

IpsTextField.displayName = 'IpsTextField';

export default IpsTextField;
