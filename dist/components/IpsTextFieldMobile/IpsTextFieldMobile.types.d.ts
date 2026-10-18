import { InputHTMLAttributes, ReactNode } from 'react';

export type IpsTextFieldMobileProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'defaultValue' | 'onChange' | 'size' | 'prefix'> & {
    /** Controlled text */
    value: string;
    /** Fired with the new text on every keystroke, and with '' when cleared */
    onChange?: (value: string) => void;
    /** A unit shown right after the typed value, e.g. "דק'" (only while there is a value) */
    suffix?: string;
    /** Decorative icon at the end of the field (replaced by the clear button once there is a value) */
    endIcon?: ReactNode;
    /** Accessible name of the clear (X) button. Without it the field has no clear button */
    clearButtonLabel?: string;
    /** Label above the field */
    label?: string;
    /** Required field — adds a red asterisk to the label */
    required?: boolean;
    /** Disables the field */
    disabled?: boolean;
    /** Error visual state */
    error?: boolean;
    /** Helper / error text below the field */
    helperText?: string;
    /** CSS class on the root element */
    className?: string;
};
