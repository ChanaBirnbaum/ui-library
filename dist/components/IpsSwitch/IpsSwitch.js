import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
const SIZE_SX = {
    width: 44,
    paddingLeft: '5px',
    paddingRight: '5px',
    '& .MuiSwitch-switchBase': {
        paddingLeft: '5px',
        paddingRight: '5px',
        '&.Mui-checked': { transform: 'translateX(14px)' },
    },
};
export const IpsSwitch = forwardRef((props, ref) => {
    const { label, labelPlacement = 'end', className, sx, ...switchProps } = props;
    const rootClass = ['ips-switch', className].filter(Boolean).join(' ');
    const mergedSx = [SIZE_SX, ...(Array.isArray(sx) ? sx : sx != null ? [sx] : [])];
    if (label !== undefined) {
        return (_jsx(FormControlLabel, { className: rootClass, control: _jsx(Switch, { ...switchProps, sx: mergedSx, slotProps: { input: { ref } } }), label: label, labelPlacement: labelPlacement }));
    }
    return _jsx(Switch, { className: rootClass, sx: mergedSx, slotProps: { input: { ref } }, ...switchProps });
});
IpsSwitch.displayName = 'IpsSwitch';
export default IpsSwitch;
