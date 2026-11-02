import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import Tooltip from '@mui/material/Tooltip';
export const IpsToolTips = forwardRef((props, ref) => {
    const { arrow = true, placement = 'top', className, componentsProps, ...rest } = props;
    const mergedComponentsProps = {
        ...componentsProps,
        tooltip: {
            ...(componentsProps?.tooltip || {}),
            className: ['ips-tooltip', componentsProps?.tooltip?.className, className]
                .filter(Boolean)
                .join(' '),
        },
    };
    return (_jsx(Tooltip, { ref: ref, arrow: arrow, placement: placement, componentsProps: mergedComponentsProps, ...rest }));
});
IpsToolTips.displayName = 'IpsToolTips';
export default IpsToolTips;
