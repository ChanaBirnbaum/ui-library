import React, { forwardRef } from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import type { IpsSwitchProps } from './IpsSwitch.types';

const SIZE_SX = {
  width: 44,
  paddingLeft: '5px',
  paddingRight: '5px',
  '& .MuiSwitch-switchBase': {
    paddingLeft: '5px',
    paddingRight: '5px',
    '&.Mui-checked': { transform: 'translateX(14px)' },
  },
} as const

export const IpsSwitch = forwardRef<HTMLInputElement, IpsSwitchProps>(
  (props, ref) => {
    const { label, labelPlacement = 'end', className, sx, ...switchProps } = props;
    const rootClass = ['ips-switch', className].filter(Boolean).join(' ');
    const mergedSx = [SIZE_SX, ...(Array.isArray(sx) ? sx : sx != null ? [sx] : [])] as any

    if (label !== undefined) {
      return (
        <FormControlLabel
          className={rootClass}
          control={<Switch {...switchProps} sx={mergedSx} slotProps={{ input: { ref } as any }} />}
          label={label}
          labelPlacement={labelPlacement}
        />
      );
    }

    return <Switch className={rootClass} sx={mergedSx} slotProps={{ input: { ref } as any }} {...switchProps} />;
  }
);

IpsSwitch.displayName = 'IpsSwitch';

export default IpsSwitch;
