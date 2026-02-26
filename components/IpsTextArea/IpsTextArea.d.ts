import { default as React } from 'react';

export declare const IpsTextArea: React.ForwardRefExoticComponent<(Omit<import('@mui/material/TextField').FilledTextFieldProps & {
    rows?: number;
    maxLength?: number;
    className?: string;
}, "ref"> | Omit<import('@mui/material/TextField').OutlinedTextFieldProps & {
    rows?: number;
    maxLength?: number;
    className?: string;
}, "ref"> | Omit<import('@mui/material/TextField').StandardTextFieldProps & {
    rows?: number;
    maxLength?: number;
    className?: string;
}, "ref">) & React.RefAttributes<HTMLTextAreaElement>>;
export default IpsTextArea;
