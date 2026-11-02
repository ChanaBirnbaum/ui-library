import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, SvgIcon } from '@mui/material';
const ExpandMoreIcon = (props) => (_jsx(SvgIcon, { ...props, children: _jsx("path", { d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" }) }));
export const IpsAccordion = forwardRef(({ summary, children, className, defaultExpanded = false, disabled = false, onChange, ...props }, ref) => {
    const rootClassName = [
        'ips-accordion',
        className
    ]
        .filter(Boolean)
        .join(' ');
    return (_jsxs(Accordion, { ref: ref, className: rootClassName, defaultExpanded: defaultExpanded, disabled: disabled, onChange: onChange, ...props, children: [_jsx(AccordionSummary, { expandIcon: _jsx(ExpandMoreIcon, {}), "aria-controls": "accordion-content", id: "accordion-header", children: summary }), _jsx(AccordionDetails, { id: "accordion-content", children: children })] }));
});
IpsAccordion.displayName = 'IpsAccordion';
