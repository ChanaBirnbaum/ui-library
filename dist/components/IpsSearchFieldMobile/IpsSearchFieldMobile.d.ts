import { default as React } from 'react';

export declare const IpsSearchFieldMobile: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "value" | "defaultValue" | "onChange"> & {
    value: string;
    onChange?: (value: string) => void;
    clearButtonLabel?: string;
    className?: string;
} & React.RefAttributes<HTMLInputElement>>;
export default IpsSearchFieldMobile;
