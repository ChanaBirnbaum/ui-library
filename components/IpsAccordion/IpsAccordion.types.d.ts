import { AccordionProps } from '@mui/material/Accordion';
import { ReactNode } from 'react';

export interface IpsAccordionProps extends Omit<AccordionProps, 'children'> {
    /**
     * Content shown in the accordion header (required)
     */
    summary: ReactNode;
    /**
     * Expanded content displayed when accordion is open (required)
     */
    children: ReactNode;
    /**
     * CSS class name to merge with root element
     */
    className?: string;
}
