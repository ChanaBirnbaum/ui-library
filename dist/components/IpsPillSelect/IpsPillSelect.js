import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useId } from 'react';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import { useTheme } from '@mui/material/styles';
// large: a 44px touch target, for mobile screens
const SIZE_STYLES = {
    small: { px: 1.5, py: 0.5, fontSize: '0.75rem', minHeight: undefined },
    medium: { px: 2.5, py: 1, fontSize: '0.875rem', minHeight: undefined },
    large: { px: 2.5, py: 1, fontSize: '0.875rem', minHeight: 44 },
};
const CLEARED_VALUE = '';
export const IpsPillSelect = forwardRef(({ options = [], value, onChange, multiple = false, allowDeselect = true, label, disabled = false, size = 'medium', sx, className, }, ref) => {
    const theme = useTheme();
    const primary = theme.palette.primary.main;
    const labelId = useId();
    const isSelected = (optValue) => {
        if (multiple) {
            return Array.isArray(value) && value.includes(optValue);
        }
        return value === optValue;
    };
    const handleClick = (optValue) => {
        if (disabled || !onChange)
            return;
        if (multiple) {
            const current = Array.isArray(value) ? value : [];
            const next = current.includes(optValue)
                ? current.filter(v => v !== optValue)
                : [...current, optValue];
            onChange(next);
            return;
        }
        const isAlreadySelected = value === optValue;
        if (isAlreadySelected && !allowDeselect)
            return;
        // toggle: click on selected → deselect
        onChange(isAlreadySelected ? CLEARED_VALUE : optValue);
    };
    const rootClassName = ['ips-pill-select', className].filter(Boolean).join(' ');
    const { px, py, fontSize, minHeight } = SIZE_STYLES[size];
    const pills = options.map((opt) => {
        const selected = isSelected(opt.value);
        return (_jsx(ButtonBase, { className: "ips-pill", "aria-pressed": selected, onClick: () => handleClick(opt.value), disableRipple: false, sx: {
                borderRadius: '999px',
                px,
                py,
                fontSize,
                minHeight,
                fontWeight: 500,
                fontFamily: 'inherit',
                lineHeight: 1.5,
                transition: 'all 0.2s ease',
                ...(selected
                    ? {
                        backgroundColor: primary,
                        color: 'white',
                        border: `1px solid ${primary}`,
                        '&:hover': {
                            backgroundColor: theme.palette.primary.dark,
                            borderColor: theme.palette.primary.dark,
                        },
                    }
                    : {
                        backgroundColor: 'transparent',
                        color: primary,
                        border: `1px solid ${primary}`,
                        '&:hover': {
                            backgroundColor: `${primary}14`,
                        },
                    }),
            }, children: opt.label }, opt.value));
    });
    const disabledSx = {
        opacity: disabled ? 0.5 : 1,
        pointerEvents: disabled ? 'none' : 'auto',
    };
    if (!label) {
        return (_jsx(Box, { ref: ref, className: rootClassName, sx: { display: 'flex', flexWrap: 'wrap', gap: 1, ...disabledSx, ...sx }, children: pills }));
    }
    // With a label the root becomes a named group: the title above, the pills below
    return (_jsxs(Box, { ref: ref, role: "group", "aria-labelledby": labelId, className: rootClassName, sx: { display: 'flex', flexDirection: 'column', gap: 1.5, ...disabledSx, ...sx }, children: [_jsx(Box, { component: "span", id: labelId, className: "ips-pill-select-label", sx: { fontSize: '0.875rem', fontWeight: 500, color: theme.palette.text.secondary }, children: label }), _jsx(Box, { sx: { display: 'flex', flexWrap: 'wrap', gap: 1 }, children: pills })] }));
});
IpsPillSelect.displayName = 'IpsPillSelect';
