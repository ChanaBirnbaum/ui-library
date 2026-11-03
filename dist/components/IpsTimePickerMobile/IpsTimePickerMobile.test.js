import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, createTheme } from '@mui/material';
import { IpsTimePickerMobile } from './IpsTimePickerMobile';
const muiTheme = createTheme();
function ControlledField(props) {
    const [value, setValue] = useState(props.value ?? '');
    return (_jsx(IpsTimePickerMobile, { "aria-label": "Start time", placeholder: "--:--", clearButtonLabel: "Clear start time", ...props, value: value, onChange: (next) => {
            setValue(next);
            props.onChange?.(next);
        } }));
}
function renderField(props = {}) {
    return render(_jsx(ThemeProvider, { theme: muiTheme, children: _jsx(ControlledField, { ...props }) }));
}
function getTimeInput() {
    return screen.getByLabelText('Start time');
}
describe('IpsTimePickerMobile', () => {
    test('renders a native time input', () => {
        renderField();
        expect(getTimeInput()).toHaveAttribute('type', 'time');
    });
    test('shows the value as is', () => {
        renderField({ value: '16:00' });
        expect(screen.getByText('16:00')).toBeInTheDocument();
    });
    test('reports the native value on change', () => {
        const onChange = jest.fn();
        renderField({ onChange });
        fireEvent.change(getTimeInput(), { target: { value: '18:30' } });
        expect(onChange).toHaveBeenCalledWith('18:30');
    });
    test('shows the clear button only when there is a value', () => {
        renderField();
        expect(screen.queryByRole('button', { name: 'Clear start time' })).not.toBeInTheDocument();
        fireEvent.change(getTimeInput(), { target: { value: '18:30' } });
        expect(screen.getByRole('button', { name: 'Clear start time' })).toBeInTheDocument();
    });
    test('clears the value and returns focus to the input', async () => {
        const onChange = jest.fn();
        renderField({ value: '16:00', onChange });
        await userEvent.click(screen.getByRole('button', { name: 'Clear start time' }));
        expect(onChange).toHaveBeenLastCalledWith('');
        expect(screen.getByText('--:--')).toBeInTheDocument();
        expect(getTimeInput()).toHaveFocus();
    });
    test('has no clear button without a clear label', () => {
        renderField({ value: '16:00', clearButtonLabel: undefined });
        expect(screen.queryByRole('button')).not.toBeInTheDocument();
    });
});
