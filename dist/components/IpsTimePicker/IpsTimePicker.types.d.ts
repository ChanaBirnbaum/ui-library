import { Moment } from 'moment';
import { TimePickerProps } from '@mui/x-date-pickers/TimePicker';
import { SxProps, Theme } from '@mui/material/styles';

/**
 * @deprecated `mask` was removed in @mui/x-date-pickers v7+.
 * Kept for API compatibility — has no effect.
 */
type LegacyMaskProp = {
    mask?: string;
};
export interface IpsTimePickerProps extends Omit<TimePickerProps, 'onChange' | 'value'>, LegacyMaskProp {
    /** Controlled time value (Moment) */
    value?: Moment | null;
    /** Callback receiving the new Moment or null */
    onChange?: (value: Moment | null) => void;
    /** MUI sx override on the outer wrapper Box */
    sx?: SxProps<Theme>;
    /** Extra className on the root element */
    className?: string;
    /** Show error state on the input field */
    error?: boolean;
    /** Helper / error text displayed below the field */
    helperText?: string;
}
export {};
