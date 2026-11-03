import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IpsTextField } from './IpsTextField';
describe('IpsTextField', () => {
    test('renders label and placeholder', () => {
        render(_jsx(IpsTextField, { label: "Email", placeholder: "you@example.com" }));
        expect(screen.getByLabelText('Email')).toBeInTheDocument();
    });
    test('applies start and end adornments', () => {
        render(_jsx(IpsTextField, { label: "Amount", startAdornment: "$", endAdornment: ".00" }));
        expect(screen.getByText('$')).toBeInTheDocument();
        expect(screen.getByText('.00')).toBeInTheDocument();
    });
    test('readOnly sets input readOnly', async () => {
        render(_jsx(IpsTextField, { label: "Read", defaultValue: "fixed", readOnly: true }));
        const input = screen.getByLabelText('Read');
        expect(input.readOnly).toBe(true);
        await userEvent.type(input, 'abc');
        expect(input.value).toBe('fixed');
    });
    test('search field shows search icon and no clear button when empty', () => {
        render(_jsx(IpsTextField, { label: "Search", type: "search" }));
        expect(screen.queryByLabelText('Clear search')).not.toBeInTheDocument();
    });
    test('search field shows clear button once a value is entered, and clears on click (uncontrolled)', async () => {
        render(_jsx(IpsTextField, { label: "Search", type: "search" }));
        const input = screen.getByLabelText('Search');
        await userEvent.type(input, 'hello');
        expect(input.value).toBe('hello');
        const clearButton = screen.getByLabelText('Clear search');
        expect(clearButton).toBeInTheDocument();
        await userEvent.click(clearButton);
        expect(input.value).toBe('');
        expect(screen.queryByLabelText('Clear search')).not.toBeInTheDocument();
    });
    test('search field uses a custom clear button label', async () => {
        render(_jsx(IpsTextField, { label: "\u05D7\u05D9\u05E4\u05D5\u05E9", type: "search", clearButtonLabel: "\u05E0\u05D9\u05E7\u05D5\u05D9 \u05D7\u05D9\u05E4\u05D5\u05E9" }));
        await userEvent.type(screen.getByLabelText('חיפוש'), 'abc');
        expect(screen.getByLabelText('ניקוי חיפוש')).toBeInTheDocument();
        expect(screen.queryByLabelText('Clear search')).not.toBeInTheDocument();
    });
    test('search clear button is reachable with the keyboard', async () => {
        render(_jsx(IpsTextField, { label: "Search", type: "search", defaultValue: "query" }));
        const input = screen.getByLabelText('Search');
        await userEvent.click(input);
        await userEvent.tab();
        const clearButton = screen.getByLabelText('Clear search');
        expect(clearButton).toHaveFocus();
        await userEvent.keyboard('{Enter}');
        expect(input.value).toBe('');
        expect(input).toHaveFocus();
    });
    test('search field clears via onChange when controlled', async () => {
        const ControlledSearch = () => {
            const [value, setValue] = React.useState('preset');
            return (_jsx(IpsTextField, { label: "Search", type: "search", value: value, onChange: (e) => setValue(e.target.value) }));
        };
        render(_jsx(ControlledSearch, {}));
        const input = screen.getByLabelText('Search');
        expect(input.value).toBe('preset');
        const clearButton = screen.getByLabelText('Clear search');
        await userEvent.click(clearButton);
        expect(input.value).toBe('');
    });
});
