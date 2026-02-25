import React from 'react';
import { SwitchProps } from '@mui/material/Switch';

export type IpsSwitchProps = SwitchProps & {
  label?: React.ReactNode;
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
  className?: string;
};

export default IpsSwitchProps;
