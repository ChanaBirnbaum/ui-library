import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useId, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { CHEVRON_CLEARANCE_PX, MOBILE_FIELD, MobileFieldLabel, MobileHelperText, RequiredMark, invisibleOverlayStyles, mobileFieldRadius, outlinedFieldDisabledStyles, outlinedFieldFocusStyles, } from './mobileFieldParts';
import { ClearIcon, FieldClearButton, FieldEndIconSlot } from './mobileFieldEndParts';
const Root = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minWidth: 0,
});
const FieldWrapper = styled('div')({
    position: 'relative',
    width: '100%',
});
// The visible box. It comes right after the native input in the DOM, so the input's focus can style it
const ValueBox = styled('div', {
    shouldForwardProp: (prop) => prop !== 'hasError' && prop !== 'isMuted' && prop !== 'isDisabled',
})(({ theme, hasError, isMuted, isDisabled }) => ({
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
    width: '100%',
    height: MOBILE_FIELD.heightPx,
    paddingInlineStart: MOBILE_FIELD.paddingStartPx,
    paddingInlineEnd: CHEVRON_CLEARANCE_PX,
    fontSize: MOBILE_FIELD.fontSizePx,
    color: isMuted ? theme.palette.text.secondary : theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${hasError ? theme.palette.error.main : theme.palette.grey[300]}`,
    borderRadius: mobileFieldRadius(theme),
    ...(isDisabled ? outlinedFieldDisabledStyles(theme) : {}),
}));
const ValueText = styled('span')({
    minWidth: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
});
const NativeInput = styled('input', {
    shouldForwardProp: (prop) => prop !== 'hasError',
})(({ theme, hasError }) => ({
    ...invisibleOverlayStyles,
    // Desktop browsers open the picker only from their own indicator, so it is stretched over the whole field
    '&::-webkit-calendar-picker-indicator': {
        position: 'absolute',
        inset: 0,
        width: 'auto',
        height: 'auto',
        margin: 0,
        padding: 0,
        opacity: 0,
        cursor: 'pointer',
    },
    '&:focus + div': outlinedFieldFocusStyles(theme, hasError),
}));
export const NativePickerField = forwardRef((props, ref) => {
    const { inputType, icon, value, onChange, formatValue, placeholder = '', muted = false, clearButtonLabel, label, required = false, disabled = false, error = false, helperText, className, rootClassName, id: idProp, ...nativeInputProps } = props;
    const generatedId = useId();
    const inputId = idProp ?? generatedId;
    const helperTextId = `${inputId}-helper-text`;
    const inputRef = useRef(null);
    const hasValue = value !== '';
    const canClear = hasValue && Boolean(clearButtonLabel) && !disabled;
    // The consumer's ref and the internal one (used to return focus after clearing) both get the input
    const setInputRef = (node) => {
        inputRef.current = node;
        if (typeof ref === 'function') {
            ref(node);
        }
        else if (ref) {
            ref.current = node;
        }
    };
    const handleClear = () => {
        onChange?.('');
        inputRef.current?.focus();
    };
    return (_jsxs(Root, { className: [rootClassName, className].filter(Boolean).join(' '), children: [label && (_jsxs(MobileFieldLabel, { htmlFor: inputId, children: [label, required && _jsx(RequiredMark, { "aria-hidden": "true", children: " *" })] })), _jsxs(FieldWrapper, { children: [_jsx(NativeInput, { ...nativeInputProps, ref: setInputRef, id: inputId, type: inputType, value: value, onChange: (event) => onChange?.(event.target.value), disabled: disabled, required: required, hasError: error, "aria-invalid": error || undefined, "aria-describedby": helperText ? helperTextId : undefined }), _jsx(ValueBox, { "aria-hidden": "true", hasError: error, isMuted: !hasValue || muted, isDisabled: disabled, children: _jsx(ValueText, { children: hasValue ? _jsx("bdi", { dir: "ltr", children: formatValue(value) }) : placeholder }) }), canClear ? (_jsx(FieldClearButton, { type: "button", "aria-label": clearButtonLabel, onClick: handleClear, children: _jsx(ClearIcon, {}) })) : (_jsx(FieldEndIconSlot, { children: icon }))] }), helperText && (_jsx(MobileHelperText, { id: helperTextId, hasError: error, role: error ? 'alert' : undefined, children: helperText }))] }));
});
NativePickerField.displayName = 'NativePickerField';
