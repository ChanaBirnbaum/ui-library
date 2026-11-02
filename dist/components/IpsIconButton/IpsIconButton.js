import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
// Minimum touch target on mobile
const SURFACE_SIZE_PX = 44;
// Looks like the outlined mobile fields it sits next to: the same border, with the base radius of buttons
const surfaceSx = (theme) => ({
    width: SURFACE_SIZE_PX,
    height: SURFACE_SIZE_PX,
    boxSizing: 'border-box',
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: `${theme.shape.borderRadius}px`,
    '&:hover': { backgroundColor: theme.palette.grey[100] },
    '&.Mui-disabled': {
        backgroundColor: theme.palette.grey[50],
        borderColor: theme.palette.grey[200],
    },
});
export const IpsIconButton = forwardRef(({ icon, tooltip, variant = 'plain', className, sx, ...rest }, ref) => {
    const isSurface = variant === 'surface';
    const rootClass = ['ips-icon-button', isSurface && 'ips-icon-button-surface', className]
        .filter(Boolean)
        .join(' ');
    // The consumer's sx comes last, so it can still adjust the variant
    const consumerSx = Array.isArray(sx) ? sx : sx != null ? [sx] : [];
    const mergedSx = (isSurface ? [surfaceSx, ...consumerSx] : consumerSx);
    const button = (_jsx(IconButton, { ref: ref, className: rootClass, sx: mergedSx, ...rest, children: icon }));
    // If tooltip is provided, wrap the button in a Tooltip
    if (tooltip) {
        return _jsx(Tooltip, { title: tooltip, children: button });
    }
    return button;
});
IpsIconButton.displayName = 'IpsIconButton';
export default IpsIconButton;
