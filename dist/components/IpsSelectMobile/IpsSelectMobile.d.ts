import { default as React } from 'react';

export declare const IpsSelectMobile: React.ForwardRefExoticComponent<Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "children" | "value" | "defaultValue" | "onChange" | "multiple"> & {
    options: import('../IpsSelect').IpsSelectOption[];
    variant?: import('./IpsSelectMobile.types').IpsSelectMobileVariant;
    value?: import('./IpsSelectMobile.types').IpsSelectMobileValue | null;
    onChange?: (value: import('./IpsSelectMobile.types').IpsSelectMobileValue) => void;
    label?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    className?: string;
} & React.RefAttributes<HTMLSelectElement>>;
export default IpsSelectMobile;
