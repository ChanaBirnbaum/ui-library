import { default as React } from 'react';

export declare const IpsDatePickerMobile: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "value" | "defaultValue" | "onChange" | "max" | "min"> & {
    value: string;
    onChange?: (value: string) => void;
    formatValue?: (value: string) => string;
    placeholder?: string;
    min?: string;
    max?: string;
    muted?: boolean;
    label?: string;
    required?: boolean;
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    className?: string;
} & React.RefAttributes<HTMLInputElement>>;
export default IpsDatePickerMobile;
