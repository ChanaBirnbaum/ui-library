import React, { forwardRef } from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import type { IpsSwitchProps } from './IpsSwitch.types';

export const IpsSwitch = forwardRef<HTMLInputElement, IpsSwitchProps>(
  (props, ref) => {
    const { label, labelPlacement = 'end', className, ...switchProps } = props;
    const rootClass = ['ips-switch', className].filter(Boolean).join(' ');

    if (label !== undefined) {
      return (
        <FormControlLabel
          className={rootClass}
          control={<Switch {...switchProps} slotProps={{ input: { ref } as any }} />}
          label={label}
          labelPlacement={labelPlacement}
        />
      );
    }

    return <Switch className={rootClass} slotProps={{ input: { ref } as any }} {...switchProps} />;
  }
);

IpsSwitch.displayName = 'IpsSwitch';

export default IpsSwitch;
