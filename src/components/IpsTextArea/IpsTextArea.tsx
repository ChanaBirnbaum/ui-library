import React, { forwardRef, useId, useState } from 'react';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
import type { IpsTextAreaProps } from './IpsTextArea.types';

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

export const IpsTextArea = forwardRef<HTMLTextAreaElement, IpsTextAreaProps>(
  (props, ref) => {
    const {
      rows = 4,
      maxLength,
      className,
      helperText,
      defaultValue,
      value,
      onChange,
      label,
      required,
      error,
      wide,
      id: idProp,
      ...rest
    } = props;

    const generatedId = useId();
    const inputId = idProp ?? generatedId;

    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState<string>(() => (defaultValue as string) ?? '');
    const currentValue = (isControlled ? (value as string) : internalValue) ?? '';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      let next = e.currentTarget.value;
      if (maxLength !== undefined && next.length > maxLength) {
        next = next.slice(0, maxLength);
        (e.target as HTMLInputElement).value = next;
      }
      if (!isControlled) setInternalValue(next);
      if (onChange) onChange(e as any);
    };

    const counter = maxLength ? `${currentValue.length} / ${maxLength}` : null;

    const helperNode = helperText || counter ? (
      <Box
        component="span"
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}
      >
        <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
          {error && helperText && <AlertCircleIcon />}
          {helperText}
        </Box>
        {counter ? (
          <Box component="span" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
            {counter}
          </Box>
        ) : null}
      </Box>
    ) : undefined;

    return (
      <Box className={className} sx={wide ? { width: '576px' } : undefined}>
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
          label={undefined}
          required={required}
          error={error}
          multiline
          minRows={rows}
          defaultValue={defaultValue}
          slotProps={{ input: { ref: ref as any } }}
          className="ips-textarea"
          sx={wide ? { width: '576px' } : undefined}
          helperText={helperNode}
          onChange={handleChange}
        />
      </Box>
    );
  }
);

IpsTextArea.displayName = 'IpsTextArea';

export default IpsTextArea;
