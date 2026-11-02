import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
export const IpsCheckBox = forwardRef((props, ref) => {
    const { label, labelPlacement = 'end', className, ...checkboxProps } = props;
    const rootClass = ['ips-checkbox', className].filter(Boolean).join(' ');
    // When a label is provided, the FormControlLabel is the root element.
    if (label !== undefined) {
        return (_jsx(FormControlLabel, { className: rootClass, control: _jsx(Checkbox, { ...checkboxProps, slotProps: { input: { ref } } }), label: label, labelPlacement: labelPlacement }));
    }
    // Otherwise the Checkbox itself is the root element.
    return _jsx(Checkbox, { className: rootClass, slotProps: { input: { ref } }, ...checkboxProps });
});
IpsCheckBox.displayName = 'IpsCheckBox';
export default IpsCheckBox;
