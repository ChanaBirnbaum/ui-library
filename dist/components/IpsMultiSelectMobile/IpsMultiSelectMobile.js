import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useId, useMemo } from 'react';
import { styled } from '@mui/material/styles';
import { IpsSelect } from '../IpsSelect';
import { ChevronDownIcon, MOBILE_FIELD, MobileFieldLabel, MobileHelperText, OutlinedChevronSlot, RequiredMark, invisibleOverlayStyles, outlinedFieldBoxStyles, outlinedFieldDisabledStyles, outlinedFieldFocusStyles, } from '../internal/mobileFieldParts';
import { NativeOptions } from '../internal/NativeOptions';
import { isIosWebKit } from '../../utils/platform';
// Multi-select for mobile. On a real iPhone/iPad the native <select multiple> opens the OS picker,
// which behaves very well there. Elsewhere (Android, desktop, devtools emulation) a native multiple
// select renders as an open list box, so the menu-based IpsSelect is used instead.
const DEFAULT_SELECTION_SEPARATOR = ', ';
// Internal value of the "all" option. It never reaches the consumer: "all" is reported as []
const ALL_OPTION_VALUE = '__ips_all__';
// The menu picker opens over the page and stays open while picking. It is capped at half the screen,
// so a long (grouped) list always leaves room around it to tap and close it; the list scrolls inside.
// The native picker has its own "Done" and is not affected
const MENU_MAX_HEIGHT = '50vh';
const MENU_PROPS = { slotProps: { paper: { sx: { maxHeight: MENU_MAX_HEIGHT } } } };
const CHEVRON_HALF_SIZE_PX = MOBILE_FIELD.chevronSizePx / 2;
/**
 * The closed menu field looks like the native mobile fields next to it: the same height and the same line chevron
 * (instead of MUI's filled triangle), at the same inset. `right` is flipped by the RTL cache like MUI's own value
 */
const menuFieldSx = (theme) => ({
    height: MOBILE_FIELD.heightPx,
    '& .MuiSelect-icon': {
        top: `calc(50% - ${CHEVRON_HALF_SIZE_PX}px)`,
        right: MOBILE_FIELD.chevronInsetPx,
        color: theme.palette.text.secondary,
    },
});
/** MUI passes a className that positions the icon and rotates it while the menu is open */
function MenuChevronIcon({ className }) {
    return (_jsx("span", { className: className, style: { display: 'flex' }, children: _jsx(ChevronDownIcon, {}) }));
}
function joinLabels(selectedLabels) {
    return selectedLabels.join(DEFAULT_SELECTION_SEPARATOR);
}
/** The selected options, in the options' own order */
function selectedOptionsOf(options, values) {
    return options.filter((option) => values.includes(option.value));
}
/**
 * "All" and specific options exclude each other:
 * choosing "all" clears the items, and choosing an item while "all" is on keeps only the items.
 */
function resolveSelection(pickedValues, wasAllSelected) {
    const items = pickedValues.filter((value) => value !== ALL_OPTION_VALUE);
    const includesAll = pickedValues.includes(ALL_OPTION_VALUE);
    if (includesAll && !wasAllSelected) {
        return [];
    }
    return items;
}
const Root = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minWidth: 0,
});
// The visible field on iOS; the invisible <select multiple> stretched over it receives the tap
const NativeTrigger = styled('div', {
    shouldForwardProp: (prop) => prop !== 'hasValue' && prop !== 'hasError' && prop !== 'isDisabled',
})(({ theme, hasValue, hasError, isDisabled }) => ({
    ...outlinedFieldBoxStyles(theme, { hasValue, hasError }),
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    ...(isDisabled ? outlinedFieldDisabledStyles(theme) : {}),
    // Like any field, the box shows focus while its native select is focused
    '&:focus-within': outlinedFieldFocusStyles(theme, hasError),
}));
const TriggerText = styled('span')({
    minWidth: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
});
const NativeMultipleSelect = styled('select')(invisibleOverlayStyles);
export const IpsMultiSelectMobile = forwardRef((props, ref) => {
    const { options, value, onChange, label, placeholder, allOptionLabel, formatSelection = joinLabels, picker = 'auto', required = false, disabled = false, error = false, helperText, 'aria-label': ariaLabel, id: idProp, name, className, } = props;
    const generatedId = useId();
    const fieldId = idProp ?? generatedId;
    const labelId = `${fieldId}-label`;
    const helperTextId = `${fieldId}-helper-text`;
    // The platform does not change while the page is open, so it is checked once
    const shouldUseNativePicker = useMemo(() => picker === 'native' || (picker === 'auto' && isIosWebKit()), [picker]);
    const hasAllOption = Boolean(allOptionLabel);
    const isAllSelected = hasAllOption && value.length === 0;
    // "All" sits first, outside any group
    const pickerOptions = hasAllOption
        ? [{ value: ALL_OPTION_VALUE, label: allOptionLabel }, ...options]
        : options;
    const pickerValue = isAllSelected ? [ALL_OPTION_VALUE] : value;
    const selectedOptions = selectedOptionsOf(options, value);
    const hasValue = selectedOptions.length > 0 || isAllSelected;
    const summary = selectedOptions.length > 0
        ? formatSelection(selectedOptions.map((option) => option.label))
        : (isAllSelected ? allOptionLabel : placeholder) ?? '';
    // A native <select> value is always a string, so map back to the options' original values
    const handleNativeChange = (event) => {
        const pickedStrings = Array.from(event.target.selectedOptions, (optionElement) => optionElement.value);
        const pickedValues = pickerOptions
            .filter((option) => pickedStrings.includes(String(option.value)))
            .map((option) => option.value);
        onChange?.(resolveSelection(pickedValues, isAllSelected));
    };
    const handleMenuChange = (picked) => {
        const pickedValues = Array.isArray(picked) ? picked : [];
        onChange?.(resolveSelection(pickedValues, isAllSelected));
    };
    const rootClassName = ['ips-multi-select-mobile', className].filter(Boolean).join(' ');
    return (_jsxs(Root, { className: rootClassName, children: [label && (_jsxs(MobileFieldLabel, { id: labelId, htmlFor: shouldUseNativePicker ? fieldId : undefined, children: [label, required && _jsx(RequiredMark, { "aria-hidden": "true", children: " *" })] })), shouldUseNativePicker ? (_jsxs(NativeTrigger, { hasValue: hasValue, hasError: error, isDisabled: disabled, children: [_jsx(TriggerText, { "aria-hidden": "true", children: summary }), _jsx(OutlinedChevronSlot, { children: _jsx(ChevronDownIcon, {}) }), _jsx(NativeMultipleSelect, { ref: ref, id: fieldId, name: name, multiple: true, value: pickerValue.map(String), onChange: handleNativeChange, disabled: disabled, required: required, "aria-label": ariaLabel, "aria-invalid": error || undefined, "aria-describedby": helperText ? helperTextId : undefined, children: _jsx(NativeOptions, { options: pickerOptions }) })] })) : (_jsx(IpsSelect, { ref: ref, id: fieldId, name: name, multiple: true, options: pickerOptions, value: pickerValue, onChange: handleMenuChange, placeholder: placeholder, renderValue: () => summary, disabled: disabled, error: error, labelId: label ? labelId : undefined, inputProps: { 'aria-label': ariaLabel }, 
                // The combobox (not the hidden input) is what a screen reader reads, so the helper text is linked to it
                SelectDisplayProps: { 'aria-describedby': helperText ? helperTextId : undefined }, MenuProps: MENU_PROPS, IconComponent: MenuChevronIcon, sx: menuFieldSx })), helperText && (_jsx(MobileHelperText, { id: helperTextId, hasError: error, role: error ? 'alert' : undefined, children: helperText }))] }));
});
IpsMultiSelectMobile.displayName = 'IpsMultiSelectMobile';
export default IpsMultiSelectMobile;
