import { default as React } from 'react';
import { CheckboxProps } from '@mui/material/Checkbox';

export type IpsCheckBoxProps = CheckboxProps & {
    label?: React.ReactNode;
    /**
     * Placement of the label relative to the checkbox
     */
    labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
    className?: string;
};
export default IpsCheckBoxProps;
