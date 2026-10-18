import { SelectHTMLAttributes } from 'react';
import { IpsSelectOption } from '../IpsSelect/IpsSelect.types';

/** The value type of a single option (kept as is: a number stays a number) */
export type IpsSelectMobileValue = string | number;
/**
 * outlined — a full field (border, background, 42px).
 * plain — only the value text and a chevron, inheriting font and color from the parent
 * (for context selectors in a header row). Tapping still opens the native picker.
 */
export type IpsSelectMobileVariant = 'outlined' | 'plain';
export type IpsSelectMobileProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'defaultValue' | 'onChange' | 'multiple' | 'children'> & {
    /** Array of available options (same shape as IpsSelect) */
    options: IpsSelectOption[];
    /** Visual variant. Default: 'outlined' */
    variant?: IpsSelectMobileVariant;
    /** Controlled value. null / undefined / '' = nothing selected (placeholder shown) */
    value?: IpsSelectMobileValue | null;
    /** Fired with the original option value (number options return numbers) */
    onChange?: (value: IpsSelectMobileValue) => void;
    /** Label above the field */
    label?: string;
    /** Text shown while nothing is selected */
    placeholder?: string;
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
