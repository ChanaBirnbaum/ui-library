import React, { forwardRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import type { IpsTextAreaProps } from './IpsTextArea.types';

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
      ...rest
    } = props;

    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState<string>(() => (defaultValue as string) ?? '');
    const currentValue = (isControlled ? (value as string) : internalValue) ?? '';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      let next = e.currentTarget.value;
      if (maxLength !== undefined && next.length > maxLength) {
        next = next.slice(0, maxLength);
        // modify the event target value for consumers
        // (not strictly necessary, but keeps UI consistent)
        (e.target as HTMLInputElement).value = next;
      }

      if (!isControlled) setInternalValue(next);
      if (onChange) onChange(e as any);
    };

    const counter = maxLength ? `${currentValue.length} / ${maxLength}` : null;

    const helperNode = (
      <Box
        component="span"
        sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}
      >
        <Box component="span">{helperText}</Box>
        {counter ? (
          <Box component="span" sx={{ color: 'text.secondary', fontSize: '0.875rem' }}>
            {counter}
          </Box>
        ) : null}
      </Box>
    );

    return (
        <TextField
          {...rest}
          multiline
          minRows={rows}
          defaultValue={defaultValue}
          slotProps={{ input: { ref: ref as any } }}
          className={['ips-textarea', className].filter(Boolean).join(' ')}
          helperText={helperNode}
          onChange={handleChange}
        />
    );
  }
);

IpsTextArea.displayName = 'IpsTextArea';

export default IpsTextArea;
