import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material';
import { IpsDatePickerMobile } from './IpsDatePickerMobile';
const muiTheme = createTheme();
function ControlledField(props) {
    const [value, setValue] = useState(props.value ?? '');
    return (_jsx(IpsDatePickerMobile, { "aria-label": "Start date", placeholder: "--/--/--", ...props, value: value, onChange: (next) => {
            setValue(next);
            props.onChange?.(next);
        } }));
}
function renderField(props = {}) {
    return render(_jsx(ThemeProvider, { theme: muiTheme, children: _jsx(ControlledField, { ...props }) }));
}
function getDateInput() {
    return screen.getByLabelText('Start date');
}
describe('IpsDatePickerMobile', () => {
    test('renders a native date input', () => {
        renderField();
        expect(getDateInput()).toHaveAttribute('type', 'date');
    });
    test('shows the placeholder while empty', () => {
        renderField();
        expect(screen.getByText('--/--/--')).toBeInTheDocument();
    });
    test('shows the value as DD/MM/YYYY by default', () => {
        renderField({ value: '2026-10-18' });
        expect(screen.getByText('18/10/2026')).toBeInTheDocument();
    });
    test('uses a custom display format', () => {
        renderField({ value: '2026-10-18', formatValue: () => '18/10/26' });
        expect(screen.getByText('18/10/26')).toBeInTheDocument();
    });
    test('reports the native value on change', () => {
        const onChange = jest.fn();
        renderField({ onChange });
        fireEvent.change(getDateInput(), { target: { value: '2026-10-20' } });
        expect(onChange).toHaveBeenCalledWith('2026-10-20');
    });
    test('passes min and max to the native input', () => {
        renderField({ min: '2026-10-01', max: '2026-10-31' });
        expect(getDateInput()).toHaveAttribute('min', '2026-10-01');
        expect(getDateInput()).toHaveAttribute('max', '2026-10-31');
    });
    test('marks the input invalid and links the helper text', () => {
        renderField({ error: true, helperText: 'Pick a date' });
        expect(getDateInput()).toHaveAttribute('aria-invalid', 'true');
        expect(getDateInput()).toHaveAccessibleDescription('Pick a date');
    });
    test('has no clear button', () => {
        renderField({ value: '2026-10-18' });
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });
});
