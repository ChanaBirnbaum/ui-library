import { InputHTMLAttributes } from 'react';

export type IpsDatePickerMobileProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'defaultValue' | 'onChange' | 'type' | 'size' | 'min' | 'max'> & {
    /** Controlled value, 'YYYY-MM-DD'. '' = no date (the placeholder is shown) */
    value: string;
    /** Fired with the new 'YYYY-MM-DD' value ('' when the OS picker clears it) */
    onChange?: (value: string) => void;
    /** The text shown for a value. Default: DD/MM/YYYY */
    formatValue?: (value: string) => string;
    /** Text shown while there is no date */
    placeholder?: string;
    /** Earliest date, 'YYYY-MM-DD' */
    min?: string;
    /** Latest date, 'YYYY-MM-DD' */
    max?: string;
    /** Shows the value in the secondary color (e.g. a default the user has not touched yet) */
    muted?: boolean;
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
