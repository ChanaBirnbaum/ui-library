import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useId, useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
const AlertCircleIcon = () => (_jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: { flexShrink: 0 }, children: [_jsx("path", { d: "M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M12 8V12", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M12 16H12.01", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })] }));
const SearchIcon = () => (_jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("circle", { cx: "11", cy: "11", r: "7", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M21 21L16.65 16.65", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })] }));
const ClearIcon = () => (_jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [_jsx("path", { d: "M6 6L18 18", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M18 6L6 18", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })] }));
const DEFAULT_CLEAR_BUTTON_LABEL = 'Clear search';
export const IpsTextField = forwardRef((props, ref) => {
    const { startAdornment, endAdornment, InputProps: inputProps, inputProps: nativeInputProps, className, readOnly, error, helperText, label, required, id: idProp, type, value: valueProp, defaultValue, onChange: onChangeProp, clearButtonLabel = DEFAULT_CLEAR_BUTTON_LABEL, ...rest } = props;
    const generatedId = useId();
    const inputId = idProp ?? generatedId;
    const isSearch = type === 'search';
    const isControlled = valueProp !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue ?? '');
    const currentValue = isControlled ? valueProp : internalValue;
    const hasValue = currentValue != null && String(currentValue).length > 0;
    const inputRef = useRef(null);
    const setInputRef = (node) => {
        inputRef.current = node;
        if (typeof ref === 'function') {
            ref(node);
        }
        else if (ref && typeof ref === 'object') {
            ref.current = node;
        }
        if (typeof nativeInputProps?.ref === 'function') {
            nativeInputProps.ref(node);
        }
        else if (nativeInputProps?.ref && typeof nativeInputProps.ref === 'object') {
            nativeInputProps.ref.current = node;
        }
    };
    const mergedNativeInputProps = {
        ...nativeInputProps,
        ref: setInputRef,
        readOnly: readOnly ? true : nativeInputProps?.readOnly,
    };
    const handleChange = (event) => {
        if (!isControlled)
            setInternalValue(event.target.value);
        onChangeProp?.(event);
    };
    const handleClear = () => {
        if (isControlled) {
            onChangeProp?.({
                target: { value: '' },
                currentTarget: { value: '' },
            });
        }
        else {
            setInternalValue('');
            const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value')?.set;
            if (inputRef.current && nativeSetter) {
                nativeSetter.call(inputRef.current, '');
                inputRef.current.dispatchEvent(new Event('input', { bubbles: true }));
            }
        }
        inputRef.current?.focus();
    };
    const searchAdornment = isSearch
        ? hasValue
            ? (_jsx(IconButton, { size: "small", "aria-label": clearButtonLabel, onClick: handleClear, edge: "end", children: _jsx(ClearIcon, {}) }))
            : _jsx(SearchIcon, {})
        : undefined;
    const resolvedEndAdornment = endAdornment ?? searchAdornment;
    const slotPropsInput = {
        startAdornment: startAdornment
            ? _jsx(InputAdornment, { position: "start", children: startAdornment })
            : inputProps?.startAdornment,
        endAdornment: resolvedEndAdornment
            ? _jsx(InputAdornment, { position: "end", children: resolvedEndAdornment })
            : inputProps?.endAdornment,
        ...inputProps,
    };
    const resolvedHelperText = error && helperText ? (_jsxs("span", { style: { display: 'inline-flex', alignItems: 'center', gap: '4px' }, children: [_jsx(AlertCircleIcon, {}), helperText] })) : helperText;
    return (_jsxs(Box, { className: className, children: [label != null && (_jsx(FormLabel, { htmlFor: inputId, required: required, sx: { display: 'block', mb: '3px', fontSize: '12px', lineHeight: 1 }, children: label })), _jsx(TextField, { ...rest, id: inputId, type: isSearch ? 'text' : type, label: undefined, required: required, error: error, helperText: resolvedHelperText, value: valueProp, defaultValue: defaultValue, onChange: handleChange, slotProps: { input: slotPropsInput, htmlInput: mergedNativeInputProps }, className: "ips-text-field" })] }));
});
IpsTextField.displayName = 'IpsTextField';
export default IpsTextField;
