import { SelectProps } from '@mui/material/Select';

export interface IpsSelectOption {
    label: string;
    value: string | number;
}
export type IpsSelectProps = Omit<SelectProps, 'children'> & {
    /** Array of available options */
    options: IpsSelectOption[];
    /** Controlled value */
    value?: string | number | string[] | number[];
    /** Change callback */
    onChange?: (value: string | number | string[] | number[]) => void;
    /** Field label */
    label?: string;
    /** Read-only: shows value, no edit */
    readOnly?: boolean;
    /** Placeholder text (empty state) */
    placeholder?: string;
    /** Error visual state */
    error?: boolean;
    /** Helper/error text below */
    helperText?: string;
    /** Multi-select mode */
    multiple?: boolean;
    /** CSS class on root FormControl */
    className?: string;
};
