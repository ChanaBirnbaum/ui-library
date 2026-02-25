import { DatePickerProps } from '@mui/x-date-pickers/DatePicker';
import { SxProps, Theme } from '@mui/material/styles';

export interface IpsDatePickerProps extends Omit<DatePickerProps, 'onChange' | 'value' | 'minDate' | 'maxDate'> {
    /** Controlled date value */
    value?: Date | null;
    /** Callback receiving the new Date or null */
    onChange?: (value: Date | null) => void;
    /** Field label */
    label?: string;
    /** Disabled state */
    disabled?: boolean;
    /** Read-only: shows value, no editing */
    readOnly?: boolean;
    /** Minimum selectable date */
    minDate?: Date;
    /** Maximum selectable date */
    maxDate?: Date;
    /** Display format — default dd/MM/yyyy */
    format?: string;
    /** Force RTL layout (dir="rtl" on wrapper) */
    rtl?: boolean;
    /** Show error state on the input field */
    error?: boolean;
    /** Helper / error text displayed below the field */
    helperText?: string;
    /** MUI sx override on the outer wrapper Box */
    sx?: SxProps<Theme>;
    /** Extra className on the root element */
    className?: string;
}
