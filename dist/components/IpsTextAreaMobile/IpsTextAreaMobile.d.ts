import { default as React } from 'react';

export declare const IpsTextAreaMobile: React.ForwardRefExoticComponent<Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "value" | "defaultValue" | "onChange"> & {
    value: string;
    onChange?: (value: string) => void;
    rows?: number;
    label?: string;
    required?: boolean;
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    className?: string;
} & React.RefAttributes<HTMLTextAreaElement>>;
export default IpsTextAreaMobile;
