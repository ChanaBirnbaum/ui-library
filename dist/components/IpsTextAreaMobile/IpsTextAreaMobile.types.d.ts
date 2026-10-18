import { TextareaHTMLAttributes } from 'react';

export type IpsTextAreaMobileProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'defaultValue' | 'onChange'> & {
    /** Controlled text */
    value: string;
    /** Fired with the new text on every keystroke */
    onChange?: (value: string) => void;
    /** Visible rows. Default: 3 */
    rows?: number;
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
