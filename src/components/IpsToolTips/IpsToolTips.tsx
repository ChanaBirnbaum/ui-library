import React, { forwardRef } from 'react';
import Tooltip from '@mui/material/Tooltip';
import type { IpsToolTipsProps } from './IpsToolTips.types';

export const IpsToolTips = forwardRef<HTMLDivElement, IpsToolTipsProps>(
  (props, ref) => {
    const {
      arrow = true,
      placement = 'top',
      className,
      componentsProps,
      ...rest
    } = props;

    const mergedComponentsProps = {
      ...componentsProps,
      tooltip: {
        ...(componentsProps?.tooltip || {}),
        className: ['ips-tooltip', (componentsProps?.tooltip as any)?.className, className]
          .filter(Boolean)
          .join(' '),
      },
    };

    return (
      <Tooltip
        ref={ref}
        arrow={arrow}
        placement={placement}
        componentsProps={mergedComponentsProps}
        {...rest}
      />
    );
  }
);

IpsToolTips.displayName = 'IpsToolTips';

export default IpsToolTips;
