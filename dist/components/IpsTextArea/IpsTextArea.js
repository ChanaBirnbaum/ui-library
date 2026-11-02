import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useId, useState } from 'react';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel';
import Box from '@mui/material/Box';
const AlertCircleIcon = () => (_jsxs("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", style: { flexShrink: 0 }, children: [_jsx("path", { d: "M3 12C3 13.1819 3.23279 14.3522 3.68508 15.4442C4.13738 16.5361 4.80031 17.5282 5.63604 18.364C6.47177 19.1997 7.46392 19.8626 8.55585 20.3149C9.64778 20.7672 10.8181 21 12 21C13.1819 21 14.3522 20.7672 15.4442 20.3149C16.5361 19.8626 17.5282 19.1997 18.364 18.364C19.1997 17.5282 19.8626 16.5361 20.3149 15.4442C20.7672 14.3522 21 13.1819 21 12C21 9.61305 20.0518 7.32387 18.364 5.63604C16.6761 3.94821 14.3869 3 12 3C9.61305 3 7.32387 3.94821 5.63604 5.63604C3.94821 7.32387 3 9.61305 3 12Z", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M12 8V12", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }), _jsx("path", { d: "M12 16H12.01", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })] }));
export const IpsTextArea = forwardRef((props, ref) => {
    const { rows = 4, maxLength, className, helperText, defaultValue, value, onChange, label, required, error, wide, id: idProp, ...rest } = props;
    const generatedId = useId();
    const inputId = idProp ?? generatedId;
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState(() => defaultValue ?? '');
    const currentValue = (isControlled ? value : internalValue) ?? '';
    const handleChange = (e) => {
        let next = e.currentTarget.value;
        if (maxLength !== undefined && next.length > maxLength) {
            next = next.slice(0, maxLength);
            e.target.value = next;
        }
        if (!isControlled)
            setInternalValue(next);
        if (onChange)
            onChange(e);
    };
    const counter = maxLength ? `${currentValue.length} / ${maxLength}` : null;
    const helperNode = helperText || counter ? (_jsxs(Box, { component: "span", sx: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }, children: [_jsxs(Box, { component: "span", sx: { display: 'inline-flex', alignItems: 'center', gap: '4px' }, children: [error && helperText && _jsx(AlertCircleIcon, {}), helperText] }), counter ? (_jsx(Box, { component: "span", sx: { color: 'text.secondary', fontSize: '0.875rem' }, children: counter })) : null] })) : undefined;
    return (_jsxs(Box, { className: className, sx: wide ? { width: '576px' } : undefined, children: [label != null && (_jsx(FormLabel, { htmlFor: inputId, required: required, sx: { display: 'block', mb: '3px', fontSize: '12px', lineHeight: 1 }, children: label })), _jsx(TextField, { ...rest, id: inputId, label: undefined, required: required, error: error, multiline: true, minRows: rows, defaultValue: defaultValue, slotProps: { input: { ref: ref } }, className: "ips-textarea", sx: wide ? { width: '576px' } : undefined, helperText: helperNode, onChange: handleChange })] }));
});
IpsTextArea.displayName = 'IpsTextArea';
export default IpsTextArea;
