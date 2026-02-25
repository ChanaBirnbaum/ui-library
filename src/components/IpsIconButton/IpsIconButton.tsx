import React, { forwardRef } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import type { IpsIconButtonProps } from './IpsIconButton.types';

export const IpsIconButton = forwardRef<HTMLButtonElement, IpsIconButtonProps>(
  ({ icon, tooltip, className, ...rest }, ref) => {
    const rootClass = ['ips-icon-button', className].filter(Boolean).join(' ');

    const button = (
      <IconButton
        ref={ref}
        className={rootClass}
        {...rest}
      >
        {icon}
      </IconButton>
    );

    // If tooltip is provided, wrap the button in a Tooltip
    if (tooltip) {
      return <Tooltip title={tooltip}>{button}</Tooltip>;
    }

    return button;
  }
);

IpsIconButton.displayName = 'IpsIconButton';

export default IpsIconButton;
