import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import SvgIcon from '@mui/material/SvgIcon';
import { useTheme } from '@mui/material/styles';
const AddIcon = (props) => (_jsx(SvgIcon, { ...props, children: _jsx("path", { d: "M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" }) }));
const SaveIcon = (props) => (_jsx(SvgIcon, { ...props, children: _jsx("path", { d: "M17 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V7L17 3Z" }) }));
const ClearIcon = (props) => (_jsx(SvgIcon, { ...props, children: _jsx("path", { d: "M6 18L18 6M6 6l12 12", stroke: "currentColor", strokeWidth: "2", fill: "none" }) }));
export const IpsButton = forwardRef((props, ref) => {
    const { buttonType, loading, className, children, sx: propSx, ...rest } = props;
    const theme = useTheme();
    const isRtl = theme.direction === 'rtl';
    const muiProps = { ...rest };
    let variant = muiProps.variant;
    let color = muiProps.color;
    let startIcon = muiProps.startIcon;
    if (buttonType) {
        switch (buttonType) {
            case 'add':
                variant = 'contained';
                color = 'primary';
                startIcon = startIcon ?? _jsx(AddIcon, {});
                break;
            case 'save':
                variant = 'contained';
                color = 'primary';
                startIcon = startIcon ?? _jsx(SaveIcon, {});
                break;
            case 'clean':
                variant = 'outlined';
                color = 'inherit';
                startIcon = startIcon ?? _jsx(ClearIcon, {});
                break;
            case 'primary':
                variant = 'contained';
                color = 'primary';
                break;
            case 'secondary':
                variant = 'outlined';
                color = 'secondary';
                break;
            case 'link':
                variant = 'text';
                color = 'primary';
                break;
        }
    }
    // loading overrides
    if (loading) {
        muiProps.disabled = true;
        startIcon = _jsx(CircularProgress, { size: 16, color: "inherit" });
    }
    const rootClass = ['ips-button', className].filter(Boolean).join(' ');
    // RTL: a startIcon is shown at the end (as before); an explicit endIcon is kept instead of being dropped
    const resolvedStartIcon = isRtl ? undefined : startIcon;
    const resolvedEndIcon = isRtl ? (startIcon ?? muiProps.endIcon) : muiProps.endIcon;
    const baseSx = {
        fontWeight: 400,
        ...(buttonType === 'link' ? {
            textDecoration: 'none',
            '&:hover, &:active': {
                textDecoration: 'underline',
                textUnderlineOffset: '3px',
                backgroundColor: 'transparent',
            },
        } : {}),
    };
    const mergedSx = [baseSx, ...(Array.isArray(propSx) ? propSx : propSx != null ? [propSx] : [])];
    return (_jsx(Button, { ...muiProps, variant: variant, color: color, startIcon: resolvedStartIcon, endIcon: resolvedEndIcon, ref: ref, className: rootClass, sx: mergedSx, children: children }));
});
IpsButton.displayName = 'IpsButton';
export default IpsButton;
