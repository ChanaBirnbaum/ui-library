import { TextFieldProps } from '@mui/material/TextField';

export type IpsTextAreaProps = TextFieldProps & {
    /** number of visible rows (minRows) */
    rows?: number;
    /** maximum allowed characters; shows a counter when provided */
    maxLength?: number;
    className?: string;
    /** doubles the width (576px instead of 288px) */
    wide?: boolean;
};
export default IpsTextAreaProps;
