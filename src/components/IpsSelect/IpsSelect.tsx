import React, { forwardRef } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import type { IpsSelectProps } from './IpsSelect.types';

export const IpsSelect = forwardRef<HTMLSelectElement, IpsSelectProps>(
  (props, ref) => {
    const {
      options = [],
      value,
      onChange,
      label,
      readOnly = false,
      placeholder,
      error = false,
      helperText,
      multiple = false,
      disabled = false,
      className,
      ...rest
    } = props;

    const rootClass = ['ips-select', className].filter(Boolean).join(' ');

    // Select-specific sx overrides for readOnly mode
    const selectSx = readOnly
      ? {
          pointerEvents: 'none',
          '& .MuiSelect-icon': {
            display: 'none',
          },
        }
      : {};

    const handleChange = (event: any) => {
      if (onChange && !readOnly) {
        onChange(event.target.value);
      }
    };

    return (
      <FormControl
        className={rootClass}
        error={error}
        disabled={disabled || readOnly}
        fullWidth
      >
        {label && <InputLabel>{label}</InputLabel>}
        <Select
          ref={ref}
          value={value ?? (multiple ? [] : '')}
          onChange={handleChange}
          label={label}
          multiple={multiple}
          displayEmpty={!!placeholder}
          renderValue={(selected: any) => {
            if (multiple && Array.isArray(selected)) {
              if (selected.length === 0) {
                return placeholder || '';
              }
              return selected
                .map((val) => options.find((opt) => opt.value === val)?.label || val)
                .join(', ');
            } else if (selected === '' || selected === undefined) {
              return placeholder || '';
            }
            return options.find((opt) => opt.value === selected)?.label || selected;
          }}
          sx={selectSx}
          {...rest}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {multiple ? (
                <>
                  <Checkbox
                    checked={
                      Array.isArray(value)
                        ? (value as (string | number)[]).includes(option.value)
                        : value === option.value
                    }
                  />
                  <ListItemText primary={option.label} />
                </>
              ) : (
                option.label
              )}
            </MenuItem>
          ))}
        </Select>
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    );
  }
);

IpsSelect.displayName = 'IpsSelect';

export default IpsSelect;
