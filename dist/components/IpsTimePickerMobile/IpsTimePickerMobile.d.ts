import { default as React } from 'react';

export declare const IpsTimePickerMobile: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "value" | "defaultValue" | "onChange" | "max" | "min"> & {
    value: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    min?: string;
    max?: string;
    clearButtonLabel?: string;
    label?: string;
    required?: boolean;
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    className?: string;
} & React.RefAttributes<HTMLInputElement>>;
export default IpsTimePickerMobile;
