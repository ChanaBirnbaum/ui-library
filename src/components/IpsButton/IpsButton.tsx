import React, { forwardRef } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import SvgIcon from '@mui/material/SvgIcon';
import { useTheme } from '@mui/material/styles';

const AddIcon = (props: any) => (
  <SvgIcon {...props}>
    <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
  </SvgIcon>
);

const SaveIcon = (props: any) => (
  <SvgIcon {...props}>
    <path d="M17 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V7L17 3Z" />
  </SvgIcon>
);

const ClearIcon = (props: any) => (
  <SvgIcon {...props}>
    <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" fill="none" />
  </SvgIcon>
);
import type { IpsButtonProps } from './IpsButton.types';

export const IpsButton = forwardRef<HTMLButtonElement, IpsButtonProps>((props, ref) => {
  const { buttonType, loading, className, children, ...rest } = props as IpsButtonProps;
  const theme = useTheme();
  const isRtl = theme.direction === 'rtl';

  // filter custom props before spreading to MUI Button
  const muiProps = { ...rest } as Omit<IpsButtonProps, 'buttonType' | 'loading'>;

  let variant = muiProps.variant;
  let color = muiProps.color as any;
  let startIcon = muiProps.startIcon as any;

  if (buttonType) {
    switch (buttonType) {
      case 'add':
        variant = 'contained';
        color = 'primary';
        startIcon = startIcon ?? <AddIcon />;
        break;
      case 'save':
        variant = 'contained';
        color = 'primary';
        startIcon = startIcon ?? <SaveIcon />;
        break;
      case 'clean':
        variant = 'outlined';
        color = 'inherit';
        startIcon = startIcon ?? <ClearIcon />;
        break;
      case 'primary':
        variant = 'contained';
        color = 'primary';
        break;
      case 'secondary':
        variant = 'outlined';
        color = 'secondary';
        break;
    }
  }

  // loading overrides
  if (loading) {
    muiProps.disabled = true;
    startIcon = <CircularProgress size={16} color="inherit" />;
  }

  const rootClass = ['ips-button', className].filter(Boolean).join(' ');

  // In RTL: startIcon is semantically the "leading" icon — MUI positions it on
  // the right automatically when theme.direction='rtl' + stylis-plugin-rtl.
  // We pass it as endIcon so that explicit endIcon props also flip correctly.
  const resolvedStartIcon = isRtl ? undefined : startIcon;
  const resolvedEndIcon   = isRtl ? startIcon : (muiProps.endIcon as any);

  return (
    <Button
      {...muiProps}
      variant={variant}
      color={color}
      startIcon={resolvedStartIcon}
      endIcon={resolvedEndIcon}
      ref={ref}
      className={rootClass}
    >
      {children}
    </Button>
  );
});

IpsButton.displayName = 'IpsButton';

export default IpsButton;
