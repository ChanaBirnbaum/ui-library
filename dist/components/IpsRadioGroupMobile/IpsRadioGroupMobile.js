import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useId } from 'react';
import { alpha, styled } from '@mui/material/styles';
// Single choice between a few options (e.g. a limit type in a form).
// Without descriptions the options sit side by side in one wrapping row. When any option has a
// description, every option gets its own row: a title and, under it, what choosing it means.
// Built on native radio inputs: they keep the semantics, keyboard arrows and screen-reader support,
// and are only hidden visually behind a drawn circle. No MUI components.
const CIRCLE_SIZE_PX = 20;
const DOT_SIZE_PX = 10;
const CIRCLE_SLOT_SIZE_PX = 24;
const OPTION_FONT_SIZE_PX = 16;
const OPTION_LINE_HEIGHT_PX = 24;
const DESCRIPTION_FONT_SIZE_PX = 14;
const DESCRIPTION_LINE_HEIGHT_PX = 18;
const ROW_GAP_PX = 8;
const STACKED_ROW_GAP_PX = 16;
const COLUMN_GAP_PX = 16;
const FOCUS_RING_OPACITY = 0.4;
const Root = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
});
const GroupLabel = styled('span')(({ theme }) => ({
    marginBottom: 4,
    fontSize: '0.875rem',
    color: theme.palette.text.secondary,
}));
const Options = styled('div', {
    shouldForwardProp: (prop) => prop !== 'isStacked',
})(({ isStacked }) => isStacked
    ? { display: 'flex', flexDirection: 'column', rowGap: STACKED_ROW_GAP_PX }
    : { display: 'flex', flexWrap: 'wrap', rowGap: ROW_GAP_PX, columnGap: COLUMN_GAP_PX });
const Option = styled('label', {
    shouldForwardProp: (prop) => prop !== 'isDisabled' && prop !== 'isStacked',
})(({ theme, isDisabled, isStacked }) => ({
    position: 'relative',
    display: isStacked ? 'flex' : 'inline-flex',
    // A stacked option wraps its text, so the circle stays next to the first line
    alignItems: isStacked ? 'flex-start' : 'center',
    gap: 8,
    fontSize: OPTION_FONT_SIZE_PX,
    lineHeight: `${OPTION_LINE_HEIGHT_PX}px`,
    whiteSpace: isStacked ? 'normal' : 'nowrap',
    color: isDisabled ? theme.palette.text.disabled : theme.palette.text.primary,
    cursor: isDisabled ? 'default' : 'pointer',
    // The radio comes first, so keyboard focus can ring the drawn circle after it
    '& input:focus-visible + span': {
        boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, FOCUS_RING_OPACITY)}`,
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
const CircleSlot = styled('span')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    width: CIRCLE_SLOT_SIZE_PX,
    height: CIRCLE_SLOT_SIZE_PX,
    borderRadius: '50%',
});
const Circle = styled('span', {
    shouldForwardProp: (prop) => prop !== 'isChecked' && prop !== 'isDisabled',
})(({ theme, isChecked, isDisabled }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    width: CIRCLE_SIZE_PX,
    height: CIRCLE_SIZE_PX,
    border: `${isChecked ? 2 : 1}px solid ${isDisabled ? theme.palette.text.disabled : theme.palette.primary.main}`,
    borderRadius: '50%',
}));
const Dot = styled('span', {
    shouldForwardProp: (prop) => prop !== 'isDisabled',
})(({ theme, isDisabled }) => ({
    width: DOT_SIZE_PX,
    height: DOT_SIZE_PX,
    borderRadius: '50%',
    backgroundColor: isDisabled ? theme.palette.text.disabled : theme.palette.primary.main,
}));
const OptionText = styled('span')({
    display: 'flex',
    flexDirection: 'column',
    minWidth: 0,
});
const OptionTitle = styled('span', {
    shouldForwardProp: (prop) => prop !== 'isStacked',
})(({ theme, isStacked }) => ({
    fontWeight: isStacked ? theme.typography.fontWeightMedium : undefined,
}));
const OptionDescription = styled('span', {
    shouldForwardProp: (prop) => prop !== 'isDisabled',
})(({ theme, isDisabled }) => ({
    fontSize: DESCRIPTION_FONT_SIZE_PX,
    lineHeight: `${DESCRIPTION_LINE_HEIGHT_PX}px`,
    color: isDisabled ? theme.palette.text.disabled : theme.palette.text.secondary,
}));
export const IpsRadioGroupMobile = forwardRef((props, ref) => {
    const { options, value, onChange, label, 'aria-label': ariaLabel, name, disabled = false, className } = props;
    const generatedId = useId();
    const groupName = name ?? generatedId;
    const labelId = `${generatedId}-label`;
    const isStacked = options.some((option) => Boolean(option.description));
    const rootClassName = ['ips-radio-group-mobile', className].filter(Boolean).join(' ');
    return (_jsxs(Root, { ref: ref, role: "radiogroup", "aria-labelledby": label ? labelId : undefined, "aria-label": label ? undefined : ariaLabel, className: rootClassName, children: [label && _jsx(GroupLabel, { id: labelId, children: label }), _jsx(Options, { isStacked: isStacked, children: options.map((option, index) => {
                    const isChecked = value !== null && String(option.value) === String(value);
                    const optionId = `${generatedId}-option-${index}`;
                    // With a description, the name is the title only and the description is read after it
                    const titleId = option.description ? `${optionId}-title` : undefined;
                    const descriptionId = option.description ? `${optionId}-description` : undefined;
                    return (_jsxs(Option, { className: "ips-radio-group-option", isDisabled: disabled, isStacked: isStacked, children: [_jsx(VisuallyHiddenRadio, { type: "radio", name: groupName, value: String(option.value), checked: isChecked, disabled: disabled, "aria-labelledby": titleId, "aria-describedby": descriptionId, onChange: () => onChange?.(option.value) }), _jsx(CircleSlot, { "aria-hidden": "true", children: _jsx(Circle, { isChecked: isChecked, isDisabled: disabled, children: isChecked && _jsx(Dot, { isDisabled: disabled }) }) }), _jsxs(OptionText, { children: [_jsx(OptionTitle, { id: titleId, isStacked: isStacked, children: option.label }), option.description && (_jsx(OptionDescription, { id: descriptionId, isDisabled: disabled, children: option.description }))] })] }, option.value));
                }) })] }));
});
IpsRadioGroupMobile.displayName = 'IpsRadioGroupMobile';
export default IpsRadioGroupMobile;
