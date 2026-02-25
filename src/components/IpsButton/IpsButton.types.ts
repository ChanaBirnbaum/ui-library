import React from 'react';
import { ButtonProps } from '@mui/material/Button';

export type IpsButtonType = 'add' | 'save' | 'clean' | 'primary' | 'secondary';

export type IpsButtonProps = ButtonProps & {
  buttonType?: IpsButtonType;
  loading?: boolean;
  className?: string;
};

export default IpsButtonProps;
