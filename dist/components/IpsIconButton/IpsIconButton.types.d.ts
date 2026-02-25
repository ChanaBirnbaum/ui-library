import { default as React } from 'react';
import { IconButtonProps } from '@mui/material/IconButton';

export type IpsIconButtonProps = IconButtonProps & {
    /** Icon element to render (required) */
    icon: React.ReactNode;
    /** Tooltip text shown on hover */
    tooltip?: string;
    /** CSS class on root element */
    className?: string;
};
