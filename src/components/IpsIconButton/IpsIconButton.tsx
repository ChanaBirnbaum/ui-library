import React, { forwardRef } from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import type { SxProps, Theme } from '@mui/material/styles';
import type { IpsIconButtonProps } from './IpsIconButton.types';

// Minimum touch target on mobile
const SURFACE_SIZE_PX = 44;

const surfaceSx: SxProps<Theme> = (theme) => ({
  width: SURFACE_SIZE_PX,
  height: SURFACE_SIZE_PX,
  backgroundColor: theme.palette.background.paper,
  '&:hover': { backgroundColor: theme.palette.grey[100] },
  '&.Mui-disabled': { backgroundColor: theme.palette.background.paper },
});

export const IpsIconButton = forwardRef<HTMLButtonElement, IpsIconButtonProps>(
  ({ icon, tooltip, variant = 'plain', className, sx, ...rest }, ref) => {
    const isSurface = variant === 'surface';
    const rootClass = ['ips-icon-button', isSurface && 'ips-icon-button-surface', className]
      .filter(Boolean)
      .join(' ');

    // The consumer's sx comes last, so it can still adjust the variant
    const consumerSx = Array.isArray(sx) ? sx : sx != null ? [sx] : [];
    const mergedSx = (isSurface ? [surfaceSx, ...consumerSx] : consumerSx) as SxProps<Theme>;

    const button = (
      <IconButton
        ref={ref}
        className={rootClass}
        sx={mergedSx}
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
