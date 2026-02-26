import { default as React } from 'react';
import { ipsTheme } from './ipsTheme';

export declare const ThemeContext: React.Context<{
    readonly colors: {
        readonly white: "#FFFFFF";
        readonly black: "#000000";
        readonly gray100: "#F7FAFC";
        readonly gray500: "#6B7280";
        readonly gray900: "#111827";
        readonly primary: "#2563EB";
        readonly primaryDark: "#1D4ED8";
        readonly success: "#16A34A";
        readonly danger: "#DC2626";
    };
    readonly typography: {
        readonly fonts: {
            readonly body: "Inter, system-ui, -apple-system, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial";
            readonly heading: "Inter, system-ui, -apple-system, \"Segoe UI\"";
        };
        readonly sizes: {
            readonly xs: "12px";
            readonly sm: "14px";
            readonly md: "16px";
            readonly lg: "20px";
            readonly xl: "24px";
        };
        readonly weights: {
            readonly regular: 400;
            readonly medium: 500;
            readonly bold: 700;
        };
    };
    readonly spacing: {
        readonly xs: "4px";
        readonly sm: "8px";
        readonly md: "16px";
        readonly lg: "24px";
        readonly xl: "32px";
    };
    readonly borderRadius: "6px";
}>;
export declare const ThemeProvider: React.FC<{
    children?: React.ReactNode;
}>;
export { ipsTheme };
export { IpsTextField } from '../components/IpsTextField/IpsTextField';
export type { IpsTextFieldProps } from '../components/IpsTextField/IpsTextField.types';
export { IpsCheckBox } from '../components/IpsCheckBox/IpsCheckBox';
export type { IpsCheckBoxProps } from '../components/IpsCheckBox/IpsCheckBox.types';
export { IpsTextArea } from '../components/IpsTextArea/IpsTextArea';
export type { IpsTextAreaProps } from '../components/IpsTextArea/IpsTextArea.types';
export { IpsSwitch } from '../components/IpsSwitch/IpsSwitch';
export type { IpsSwitchProps } from '../components/IpsSwitch/IpsSwitch.types';
export { IpsButton } from '../components/IpsButton/IpsButton';
export type { IpsButtonProps } from '../components/IpsButton/IpsButton.types';
export { IpsIconButton } from '../components/IpsIconButton/IpsIconButton';
export type { IpsIconButtonProps } from '../components/IpsIconButton/IpsIconButton.types';
export { IpsToolTips } from '../components/IpsToolTips/IpsToolTips';
export type { IpsToolTipsProps } from '../components/IpsToolTips/IpsToolTips.types';
export { IpsSelect } from '../components/IpsSelect/IpsSelect';
export type { IpsSelectProps, IpsSelectOption } from '../components/IpsSelect/IpsSelect.types';
export { IpsAutocomplete } from '../components/IpsAutocomplete/IpsAutocomplete';
export type { IpsAutocompleteProps } from '../components/IpsAutocomplete/IpsAutocomplete.types';
export { IpsChipSelect } from '../components/IpsChipSelect/IpsChipSelect';
export type { IpsChipSelectProps, IpsChipSelectOption } from '../components/IpsChipSelect/IpsChipSelect.types';
export { IpsAccordion } from '../components/IpsAccordion/IpsAccordion';
export type { IpsAccordionProps } from '../components/IpsAccordion/IpsAccordion.types';
export { IpsTimePicker } from '../components/IpsTimePicker/IpsTimePicker';
export type { IpsTimePickerProps } from '../components/IpsTimePicker/IpsTimePicker.types';
export { IpsDatePicker } from '../components/IpsDatePicker/IpsDatePicker';
export type { IpsDatePickerProps } from '../components/IpsDatePicker/IpsDatePicker.types';
export { IpsDateTimePicker } from '../components/IpsDateTimePicker';
export type { IpsDateTimePickerProps } from '../components/IpsDateTimePicker/IpsDateTimePicker.types';
export { IpsTable } from '../components/IpsTable/IpsTable';
export type { IpsTableProps } from '../components/IpsTable/IpsTable.types';
export type { IpsTheme } from './ipsTheme';
