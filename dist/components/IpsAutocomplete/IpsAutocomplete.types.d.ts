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
    /**
     * How many tag chips stay visible in multiple mode before the rest collapse
     * behind a "+" toggle that lists them in a tooltip and expands them on click.
     * Defaults to 3; set to 0 to always show every chip.
     */
    maxVisibleChips?: number;
    /**
     * Cap for the option list height. Defaults to 320px (~9 dense rows), and is
     * further clamped to the room left around the field so the list never
     * overflows the viewport or the popup it opens from.
     */
    maxListHeight?: number | string;
    /** Tooltip on the overflow toggle while the chips are expanded */
    collapseChipsTooltip?: string;
    /** Tooltip suffix when more hidden chips exist than the tooltip lists */
    moreItemsTooltipLabel?: (count: number) => string;
}
