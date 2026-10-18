import { IpsSelectOption } from '../IpsSelect/IpsSelect.types';

/** The value type of a single option (kept as is: a number stays a number) */
export type IpsRadioGroupMobileValue = string | number;
export interface IpsRadioGroupMobileProps {
    /** One radio per option, in a single wrapping row */
    options: IpsSelectOption[];
    /** Selected value. null = nothing selected */
    value: IpsRadioGroupMobileValue | null;
    /** Fired with the original option value when an option is chosen */
    onChange?: (value: IpsRadioGroupMobileValue) => void;
    /** Visible title above the options; also names the radio group */
    label?: string;
    /** Accessible name when there is no visible label */
    'aria-label'?: string;
    /** Name of the native radio group. Default: a generated id */
    name?: string;
    /** Disables every option */
    disabled?: boolean;
    /** CSS class on the root element */
    className?: string;
}
