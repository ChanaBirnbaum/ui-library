import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, createTheme } from '@mui/material';
import { IpsTextAreaMobile } from './IpsTextAreaMobile';
const muiTheme = createTheme();
function ControlledField(props) {
    const [value, setValue] = useState(props.value ?? '');
    return (_jsx(IpsTextAreaMobile, { label: "Details", ...props, value: value, onChange: (next) => {
            setValue(next);
            props.onChange?.(next);
        } }));
}
function renderField(props = {}) {
    return render(_jsx(ThemeProvider, { theme: muiTheme, children: _jsx(ControlledField, { ...props }) }));
}
describe('IpsTextAreaMobile', () => {
    test('renders a native textarea named by its label, 3 rows by default', () => {
        renderField();
        const textArea = screen.getByRole('textbox', { name: 'Details' });
        expect(textArea.tagName).toBe('TEXTAREA');
        expect(textArea).toHaveAttribute('rows', '3');
    });
    test('reports every change', async () => {
        const onChange = jest.fn();
        renderField({ onChange });
        await userEvent.type(screen.getByRole('textbox'), 'ok');
        expect(onChange).toHaveBeenLastCalledWith('ok');
    });
    test('marks the textarea invalid and links the helper text', () => {
        renderField({ error: true, helperText: 'Too long' });
        const textArea = screen.getByRole('textbox');
        expect(textArea).toHaveAttribute('aria-invalid', 'true');
        expect(textArea).toHaveAccessibleDescription('Too long');
    });
});
