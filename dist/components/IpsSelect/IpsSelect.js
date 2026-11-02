import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import { groupOptions } from '../internal/optionGroups';
export const IpsSelect = forwardRef((props, ref) => {
    const { options = [], value, onChange, label, readOnly = false, placeholder, error = false, helperText, multiple = false, disabled = false, className, ...rest } = props;
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
    const handleChange = (event) => {
        if (onChange && !readOnly) {
            onChange(event.target.value);
        }
    };
    const renderOption = (option) => (_jsx(MenuItem, { value: option.value, children: multiple ? (_jsxs(_Fragment, { children: [_jsx(Checkbox, { checked: Array.isArray(value)
                        ? value.includes(option.value)
                        : value === option.value }), _jsx(ListItemText, { primary: option.label })] })) : (option.label) }, option.value));
    // Select does not accept fragments, so groups become a flat list: a subheader, then its items
    const menuItems = groupOptions(options).flatMap((section) => {
        const items = section.options.map(renderOption);
        if (section.group === null) {
            return items;
        }
        return [
            _jsx(ListSubheader, { className: "ips-select-group", children: section.group }, `group-${section.group}`),
            ...items,
        ];
    });
    return (_jsxs(FormControl, { className: rootClass, error: error, disabled: disabled || readOnly, fullWidth: true, children: [label && _jsx(InputLabel, { children: label }), _jsx(Select, { ref: ref, value: value ?? (multiple ? [] : ''), onChange: handleChange, label: label, multiple: multiple, displayEmpty: !!placeholder, renderValue: (selected) => {
                    if (multiple && Array.isArray(selected)) {
                        if (selected.length === 0) {
                            return placeholder || '';
                        }
                        return selected
                            .map((val) => options.find((opt) => opt.value === val)?.label || val)
                            .join(', ');
                    }
                    else if (selected === '' || selected === undefined) {
                        return placeholder || '';
                    }
                    return options.find((opt) => opt.value === selected)?.label || selected;
                }, sx: selectSx, ...rest, children: menuItems }), helperText && _jsx(FormHelperText, { children: helperText })] }));
});
IpsSelect.displayName = 'IpsSelect';
export default IpsSelect;
