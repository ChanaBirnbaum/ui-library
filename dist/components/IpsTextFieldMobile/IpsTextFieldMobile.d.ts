import { default as React } from 'react';

export declare const IpsTextFieldMobile: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "value" | "defaultValue" | "prefix" | "onChange"> & {
    value: string;
    onChange?: (value: string) => void;
    suffix?: string;
    endIcon?: React.ReactNode;
    clearButtonLabel?: string;
    label?: string;
    required?: boolean;
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    className?: string;
} & React.RefAttributes<HTMLInputElement>>;
export default IpsTextFieldMobile;
