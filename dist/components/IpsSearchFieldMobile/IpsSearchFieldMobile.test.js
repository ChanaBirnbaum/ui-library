import { jsx as _jsx } from "react/jsx-runtime";
import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, createTheme } from '@mui/material';
import { IpsSearchFieldMobile } from './IpsSearchFieldMobile';
const muiTheme = createTheme();
function ControlledField(props) {
    const [value, setValue] = useState(props.value ?? '');
    return (_jsx(IpsSearchFieldMobile, { "aria-label": "Search", clearButtonLabel: "Clear search", ...props, value: value, onChange: (next) => {
            setValue(next);
            props.onChange?.(next);
        } }));
}
function renderField(props = {}) {
    return render(_jsx(ThemeProvider, { theme: muiTheme, children: _jsx(ControlledField, { ...props }) }));
}
describe('IpsSearchFieldMobile', () => {
    test('renders a native search input with the search key hint', () => {
        renderField();
        const input = screen.getByRole('searchbox', { name: 'Search' });
        expect(input).toHaveAttribute('type', 'search');
        expect(input).toHaveAttribute('enterkeyhint', 'search');
    });
    test('reports every change', async () => {
        const onChange = jest.fn();
        renderField({ onChange });
        await userEvent.type(screen.getByRole('searchbox'), 'ab');
        expect(onChange).toHaveBeenLastCalledWith('ab');
    });
    test('shows the clear button only when there is text', async () => {
        renderField();
        expect(screen.queryByRole('button', { name: 'Clear search' })).not.toBeInTheDocument();
        await userEvent.type(screen.getByRole('searchbox'), 'x');
        expect(screen.getByRole('button', { name: 'Clear search' })).toBeInTheDocument();
    });
    test('clears the text and returns focus to the field', async () => {
        const onChange = jest.fn();
        renderField({ value: 'abc', onChange });
        await userEvent.click(screen.getByRole('button', { name: 'Clear search' }));
        expect(onChange).toHaveBeenLastCalledWith('');
        expect(screen.getByRole('searchbox')).toHaveFocus();
        expect(screen.getByRole('searchbox')).toHaveValue('');
    });
    test('hides the clear button and blocks typing when disabled', () => {
        renderField({ value: 'abc', disabled: true });
        expect(screen.getByRole('searchbox')).toBeDisabled();
        expect(screen.queryByRole('button', { name: 'Clear search' })).not.toBeInTheDocument();
    });
    test('is outlined like the other mobile fields, with the field radius', () => {
        renderField();
        // Plain MUI theme: grey[300] = #e0e0e0; without the IPS radius token the fields fall back to 6px
        expect(screen.getByRole('searchbox')).toHaveStyle({ border: '1px solid #e0e0e0', borderRadius: '6px' });
    });
    test('forwards the ref to the input', () => {
        const ref = React.createRef();
        render(_jsx(ThemeProvider, { theme: muiTheme, children: _jsx(IpsSearchFieldMobile, { ref: ref, value: "", "aria-label": "Search" }) }));
        expect(ref.current?.tagName).toBe('INPUT');
    });
});
