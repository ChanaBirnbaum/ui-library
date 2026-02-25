import React, { forwardRef } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import type { IpsCheckBoxProps } from './IpsCheckBox.types';

export const IpsCheckBox = forwardRef<HTMLInputElement, IpsCheckBoxProps>(
  (props, ref) => {
    const { label, labelPlacement = 'end', className, ...checkboxProps } = props;
    const rootClass = ['ips-checkbox', className].filter(Boolean).join(' ');

    // When a label is provided, the FormControlLabel is the root element.
    if (label !== undefined) {
      return (
        <FormControlLabel
          className={rootClass}
          control={<Checkbox {...checkboxProps} slotProps={{ input: { ref } as any }} />}
          label={label}
          labelPlacement={labelPlacement}
        />
      );
    }

    // Otherwise the Checkbox itself is the root element.
    return <Checkbox className={rootClass} slotProps={{ input: { ref } as any }} {...checkboxProps} />;
  }
);

IpsCheckBox.displayName = 'IpsCheckBox';

export default IpsCheckBox;
