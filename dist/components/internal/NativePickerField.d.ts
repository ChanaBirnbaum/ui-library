import { default as React, InputHTMLAttributes, ReactNode } from 'react';

export type NativePickerInputType = 'date' | 'time';
export type NativePickerFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'defaultValue' | 'onChange' | 'type' | 'size'> & {
    inputType: NativePickerInputType;
    icon: ReactNode;
    /** The native value ('' = empty) */
    value: string;
    onChange?: (value: string) => void;
    /** Turns the native value into the text shown in the box */
    formatValue: (value: string) => string;
    placeholder?: string;
    /** Shows the value in the secondary color (e.g. a default the user has not touched yet) */
    muted?: boolean;
    /** Accessible name of the clear (X) button. Without it the field has no clear button */
    clearButtonLabel?: string;
    label?: string;
    required?: boolean;
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    className?: string;
    rootClassName: string;
};
export declare const NativePickerField: React.ForwardRefExoticComponent<Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type" | "value" | "defaultValue" | "onChange"> & {
    inputType: NativePickerInputType;
    icon: ReactNode;
    /** The native value ('' = empty) */
    value: string;
    onChange?: (value: string) => void;
    /** Turns the native value into the text shown in the box */
    formatValue: (value: string) => string;
    placeholder?: string;
    /** Shows the value in the secondary color (e.g. a default the user has not touched yet) */
    muted?: boolean;
    /** Accessible name of the clear (X) button. Without it the field has no clear button */
    clearButtonLabel?: string;
    label?: string;
    required?: boolean;
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    className?: string;
    rootClassName: string;
} & React.RefAttributes<HTMLInputElement>>;
