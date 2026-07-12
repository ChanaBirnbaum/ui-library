
import React, { forwardRef, useId } from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import type { IpsChipSelectProps } from './IpsChipSelect.types';

// Sentinel value for the injected "Select All" menu item. Kept out of the
// public value array at all times - it never reaches onChange/consumers.
const SELECT_ALL_VALUE = '__ips-chip-select-all__';

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
      id: idProp,
      required,
      enableSelectAll = false,
      selectAllLabel = 'בחר הכל',
      allSelectedChipLabel = 'הכל נבחר',
      ...rest
    } = props;

    const generatedId = useId();
    const inputId = idProp ?? generatedId;
    const labelId = `${inputId}-label`;

    const rootClass = ['ips-chip-select', className]
      .filter(Boolean)
      .join(' ');

    const selectedValues = value as (string | number)[];
    const allOptionValues = options.map((option) => option.value);
    const isAllSelected =
      enableSelectAll &&
      allOptionValues.length > 0 &&
      allOptionValues.every((v) => selectedValues.includes(v));

    const handleDelete = (deletedValue: string | number) => {
      if (disabled) return;
      const newValue = selectedValues.filter((v) => v !== deletedValue);
      onChange?.(newValue);
    };

    const handleClearAll = () => {
      if (disabled) return;
      onChange?.([]);
    };

    const handleChange = (event: any) => {
      const rawValue = event.target.value as (string | number)[];

      // The "Select All" row is toggled - translate it into a select-all /
      // clear-all action instead of forwarding the sentinel value.
      if (enableSelectAll && rawValue.includes(SELECT_ALL_VALUE)) {
        onChange?.(isAllSelected ? [] : allOptionValues);
        return;
      }

      onChange?.(rawValue.filter((v) => v !== SELECT_ALL_VALUE));
    };

    // Custom renderValue to display chips
    const renderValue = (selected: any) => {
      const selectedArr = selected as (string | number)[];
      if (!selectedArr || selectedArr.length === 0) {
        return (
          <span style={{ color: '#999' }}>
            {placeholder || 'Select items...'}
          </span>
        );
      }

      if (isAllSelected) {
        return (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            <Chip
              label={allSelectedChipLabel}
              size="small"
              onDelete={handleClearAll}
              onMouseDown={(event) => event.stopPropagation()}
              disabled={disabled}
              sx={{
                height: 24,
                '& .MuiChip-deleteIcon': {
                  opacity: disabled ? 0.5 : 1,
                  cursor: disabled ? 'not-allowed' : 'pointer',
                },
              }}
            />
          </Box>
        );
      }

      return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {selectedArr.map((val) => {
            const optionData = options.find((opt) => opt.value === val);
            const optionLabel = optionData?.label || String(val);

            return (
              <Chip
                key={val}
                label={optionLabel}
                size="small"
                onDelete={() => handleDelete(val)}
                onMouseDown={(event) => event.stopPropagation()}
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
        {label != null && (
          <FormLabel
            id={labelId}
            htmlFor={inputId}
            required={required}
            sx={{ display: 'block', mb: '3px', fontSize: '12px', lineHeight: 1 }}
          >
            {label}
          </FormLabel>
        )}
        <Select
          ref={ref}
          id={inputId}
          labelId={label != null ? labelId : undefined}
          multiple
          value={value}
          onChange={handleChange}
          renderValue={renderValue}
          displayEmpty
          required={required}
          {...rest}
        >
          {enableSelectAll && (
            <MenuItem value={SELECT_ALL_VALUE}>
              <Checkbox checked={isAllSelected} disableRipple tabIndex={-1} />
              <ListItemText primary={selectAllLabel} />
            </MenuItem>
          )}
          {enableSelectAll && <Divider />}
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <Checkbox
                checked={selectedValues.includes(option.value)}
                disableRipple
                tabIndex={-1}
              />
              <ListItemText primary={option.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  }
);

IpsChipSelect.displayName = 'IpsChipSelect';

export default IpsChipSelect;
