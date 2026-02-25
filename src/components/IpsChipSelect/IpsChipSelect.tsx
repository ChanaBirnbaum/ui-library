import React, { forwardRef } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import type { IpsChipSelectProps } from './IpsChipSelect.types';

export const IpsChipSelect = forwardRef<HTMLSelectElement, IpsChipSelectProps>(
  (props, ref) => {
    const {
      options = [],
      value = [],
      onChange,
      label,
      placeholder,
      disabled = false,
      className,
      ...rest
    } = props;

    const rootClass = ['ips-chip-select', className]
      .filter(Boolean)
      .join(' ');

    const handleDelete = (deletedValue: string | number) => {
      if (disabled) return;
      const newValue = (value as (string | number)[]).filter(
        (v) => v !== deletedValue
      );
      onChange?.(newValue);
    };

    const handleChange = (event: any) => {
      const newValue = event.target.value;
      onChange?.(newValue);
    };

    // Custom renderValue to display chips
    const renderValue = (selected: any) => {
      if (!selected || selected.length === 0) {
        return (
          <span style={{ color: '#999' }}>
            {placeholder || 'Select items...'}
          </span>
        );
      }

      return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {(selected as (string | number)[]).map((val) => {
            const optionData = options.find((opt) => opt.value === val);
            const label = optionData?.label || String(val);

            return (
              <Chip
                key={val}
                label={label}
                size="small"
                onDelete={() => handleDelete(val)}
                disabled={disabled}
                sx={{
                  height: 24,
                  '& .MuiChip-deleteIcon': {
                    opacity: disabled ? 0.5 : 1,
                    cursor: disabled ? 'not-allowed' : 'pointer',
                  },
                }}
              />
            );
          })}
        </Box>
      );
    };

    return (
      <FormControl fullWidth disabled={disabled} className={rootClass}>
        {label && <InputLabel>{label}</InputLabel>}
        <Select
          ref={ref}
          multiple
          value={value}
          onChange={handleChange}
          label={label}
          renderValue={renderValue}
          displayEmpty={!label}
          {...rest}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
);

IpsChipSelect.displayName = 'IpsChipSelect';

export default IpsChipSelect;
