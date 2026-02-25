import { SxProps, Theme } from '@mui/material/styles';

export interface IpsPillSelectOption {
    /** Display label */
    label: string;
    /** Underlying value */
    value: string | number;
}
export interface IpsPillSelectProps {
    /** List of pills to render (required) */
    options: IpsPillSelectOption[];
    /** Selected value(s) — string/number for single, array for multiple */
    value?: string | number | (string | number)[];
    /** Callback fired when selection changes */
    onChange?: (value: string | number | (string | number)[]) => void;
    /** Allow selecting multiple pills at once */
    multiple?: boolean;
    /** Disables all pills */
    disabled?: boolean;
    /** Pill size */
    size?: 'small' | 'medium';
    /** MUI sx override on the outer container Box */
    sx?: SxProps<Theme>;
    /** CSS class name merged onto container */
    className?: string;
}
