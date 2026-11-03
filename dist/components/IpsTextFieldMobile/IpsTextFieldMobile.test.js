import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, createTheme } from '@mui/material';
import { IpsTextFieldMobile } from './IpsTextFieldMobile';
const muiTheme = createTheme();
function ControlledField(props) {
    const [value, setValue] = useState(props.value ?? '');
    return (_jsx(IpsTextFieldMobile, { label: "Duration", ...props, value: value, onChange: (next) => {
            setValue(next);
            props.onChange?.(next);
        } }));
}
function renderField(props = {}) {
    return render(_jsx(ThemeProvider, { theme: muiTheme, children: _jsx(ControlledField, { ...props }) }));
}
describe('IpsTextFieldMobile', () => {
    test('is named by its label', () => {
        renderField();
        expect(screen.getByRole('textbox', { name: 'Duration' })).toBeInTheDocument();
    });
    test('reports every change', async () => {
        const onChange = jest.fn();
        renderField({ onChange });
        await userEvent.type(screen.getByRole('textbox'), '15');
        expect(onChange).toHaveBeenLastCalledWith('15');
    });
    test('passes native attributes such as inputMode and maxLength', () => {
        renderField({ inputMode: 'numeric', maxLength: 3 });
        const input = screen.getByRole('textbox');
        expect(input).toHaveAttribute('inputmode', 'numeric');
        expect(input).toHaveAttribute('maxlength', '3');
    });
    test('shows the suffix only when there is a value', async () => {
        renderField({ suffix: 'min' });
        expect(screen.queryByText('min')).not.toBeInTheDocument();
        await userEvent.type(screen.getByRole('textbox'), '5');
        expect(screen.getByText('min')).toBeInTheDocument();
    });
    test('replaces the end icon with a clear button once there is a value', async () => {
        renderField({ endIcon: _jsx("span", { "data-testid": "end-icon" }), clearButtonLabel: 'Clear duration' });
        expect(screen.getByTestId('end-icon')).toBeInTheDocument();
        await userEvent.type(screen.getByRole('textbox'), '5');
        expect(screen.queryByTestId('end-icon')).not.toBeInTheDocument();
        await userEvent.click(screen.getByRole('button', { name: 'Clear duration' }));
        expect(screen.getByRole('textbox')).toHaveValue('');
        expect(screen.getByRole('textbox')).toHaveFocus();
    });
    test('marks the label required and the input invalid', () => {
        renderField({ required: true, error: true, helperText: 'Enter minutes' });
        const input = screen.getByRole('textbox');
        expect(input).toBeRequired();
        expect(input).toHaveAttribute('aria-invalid', 'true');
        expect(input).toHaveAccessibleDescription('Enter minutes');
    });
    test('keeps the consumer description and adds the helper text to it', () => {
        render(_jsxs(ThemeProvider, { theme: muiTheme, children: [_jsx("p", { id: "field-hint", children: "Enter the full number" }), _jsx(ControlledField, { "aria-describedby": "field-hint", helperText: "Invalid number" })] }));
        expect(screen.getByRole('textbox')).toHaveAccessibleDescription('Enter the full number Invalid number');
    });
    test('keeps the consumer description when there is no helper text', () => {
        render(_jsxs(ThemeProvider, { theme: muiTheme, children: [_jsx("p", { id: "field-hint", children: "Enter the full number" }), _jsx(ControlledField, { "aria-describedby": "field-hint" })] }));
        expect(screen.getByRole('textbox')).toHaveAccessibleDescription('Enter the full number');
    });
});
