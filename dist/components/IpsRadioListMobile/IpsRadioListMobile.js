import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useId } from 'react';
import { styled } from '@mui/material/styles';
// Single choice from a list, one full-width row per option (e.g. sort options in a bottom sheet).
// Built on native radio inputs: they keep the semantics, keyboard arrows and screen-reader support,
// and are only hidden visually. No MUI components.
const ROW_MIN_HEIGHT_PX = 56;
const ROW_FONT_SIZE_PX = 16;
const CHECK_ICON_SIZE_PX = 20;
const SELECTED_FONT_WEIGHT = 600;
const Root = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
});
const GroupLabel = styled('span')(({ theme }) => ({
    marginBottom: 4,
    fontSize: '0.875rem',
    fontWeight: 500,
    color: theme.palette.text.secondary,
}));
const Row = styled('label', {
    shouldForwardProp: (prop) => prop !== 'isSelected' && prop !== 'isDisabled',
})(({ theme, isSelected, isDisabled }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    minHeight: ROW_MIN_HEIGHT_PX,
    fontSize: ROW_FONT_SIZE_PX,
    fontWeight: isSelected ? SELECTED_FONT_WEIGHT : 400,
    color: isDisabled ? theme.palette.text.disabled : isSelected ? theme.palette.primary.main : theme.palette.text.primary,
    borderBottom: `1px solid ${theme.palette.divider}`,
    cursor: isDisabled ? 'default' : 'pointer',
    // The radio comes first in the row, so keyboard focus can ring the option text after it
    '& input:focus-visible + span': {
        outline: `2px solid ${theme.palette.primary.main}`,
        outlineOffset: 4,
        borderRadius: 2,
    },
}));
const VisuallyHiddenRadio = styled('input')({
    position: 'absolute',
    width: 1,
    height: 1,
    margin: 0,
    opacity: 0,
    pointerEvents: 'none',
});
function CheckIcon() {
    return (_jsx("svg", { "aria-hidden": "true", width: CHECK_ICON_SIZE_PX, height: CHECK_ICON_SIZE_PX, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: _jsx("path", { d: "M20 6 9 17l-5-5" }) }));
}
export const IpsRadioListMobile = forwardRef((props, ref) => {
    const { options, value, onChange, label, 'aria-label': ariaLabel, name, disabled = false, className, } = props;
    const generatedId = useId();
    const groupName = name ?? generatedId;
    const labelId = `${generatedId}-label`;
    const rootClassName = ['ips-radio-list-mobile', className].filter(Boolean).join(' ');
    return (_jsxs(Root, { ref: ref, role: "radiogroup", "aria-labelledby": label ? labelId : undefined, "aria-label": label ? undefined : ariaLabel, className: rootClassName, children: [label && _jsx(GroupLabel, { id: labelId, children: label }), options.map((option) => {
                const isSelected = value !== null && String(option.value) === String(value);
                return (_jsxs(Row, { className: "ips-radio-list-row", isSelected: isSelected, isDisabled: disabled, children: [_jsx(VisuallyHiddenRadio, { type: "radio", name: groupName, value: String(option.value), checked: isSelected, disabled: disabled, onChange: () => onChange?.(option.value) }), _jsx("span", { children: option.label }), isSelected && _jsx(CheckIcon, {})] }, option.value));
            })] }));
});
IpsRadioListMobile.displayName = 'IpsRadioListMobile';
export default IpsRadioListMobile;
