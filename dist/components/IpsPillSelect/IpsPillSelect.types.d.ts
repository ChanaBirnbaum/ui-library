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
    /**
     * Single mode only: clicking the selected pill again clears the selection ('').
     * Set to false when the group must always keep a value (e.g. an "All" option).
     */
    allowDeselect?: boolean;
    /** Group title shown above the pills; also names the group for screen readers */
    label?: string;
    /** Disables all pills */
    disabled?: boolean;
    /** Pill size. large = 44px touch target for mobile */
    size?: 'small' | 'medium' | 'large';
    /** MUI sx override on the outer container Box */
    sx?: SxProps<Theme>;
    /** CSS class name merged onto container */
    className?: string;
}
