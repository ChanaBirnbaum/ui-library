import { default as React } from 'react';
import { AutocompleteProps } from '@mui/material/Autocomplete';

export interface IpsAutocompleteProps<T, Multiple extends boolean | undefined = undefined, DisableClearable extends boolean | undefined = undefined, FreeSolo extends boolean | undefined = undefined> extends Omit<AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>, 'renderInput'> {
    /** Show checkboxes in options when multiple=true */
    showCheckboxes?: boolean;
    /** CSS class on root element */
    className?: string;
    /** Custom renderInput implementation (defaults to IpsTextField) */
    renderInput?: (params: any) => React.ReactNode;
    /** Input label text */
    label?: React.ReactNode;
    /** Placeholder text for the input field */
    placeholder?: string;
}
