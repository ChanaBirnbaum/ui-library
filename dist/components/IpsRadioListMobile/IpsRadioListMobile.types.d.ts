import { IpsSelectOption } from '../IpsSelect/IpsSelect.types';

/** The value type of a single option (kept as is: a number stays a number) */
export type IpsRadioListMobileValue = string | number;
export interface IpsRadioListMobileProps {
    /** One row per option */
    options: IpsSelectOption[];
    /** Selected value. null = nothing selected */
    value: IpsRadioListMobileValue | null;
    /** Fired with the original option value when a row is chosen */
    onChange?: (value: IpsRadioListMobileValue) => void;
    /** Visible title above the list; also names the radio group */
    label?: string;
    /** Accessible name when there is no visible label */
    'aria-label'?: string;
    /** Name of the native radio group. Default: a generated id */
    name?: string;
    /** Disables every row */
    disabled?: boolean;
    /** CSS class on the root element */
    className?: string;
}
