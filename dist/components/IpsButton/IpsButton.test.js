import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material';
import IpsButton from './IpsButton';
test('renders default button and clicks', () => {
    const onClick = jest.fn();
    render(_jsx(IpsButton, { onClick: onClick, children: "Click" }));
    const btn = screen.getByRole('button', { name: 'Click' });
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
    expect(onClick).toHaveBeenCalled();
});
test('buttonType add maps to contained variant and shows icon', () => {
    render(_jsx(IpsButton, { buttonType: "add", children: "Add" }));
    const btn = screen.getByRole('button', { name: 'Add' });
    // contained buttons include the MuiButton-contained class
    expect(btn.className).toMatch(/MuiButton-contained/);
    // startIcon should render an svg icon
    expect(btn.querySelector('svg')).toBeInTheDocument();
});
test('keeps an endIcon in RTL', () => {
    const rtlTheme = createTheme({ direction: 'rtl' });
    render(_jsx(ThemeProvider, { theme: rtlTheme, children: _jsx(IpsButton, { endIcon: _jsx("span", { "data-testid": "end-icon" }), children: "Choose" }) }));
    expect(screen.getByTestId('end-icon')).toBeInTheDocument();
});
test('loading disables and shows CircularProgress', () => {
    render(_jsx(IpsButton, { loading: true, children: "Saving" }));
    const btn = screen.getByRole('button', { name: 'Saving' });
    expect(btn).toBeDisabled();
    // CircularProgress renders an element with role "progressbar"
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
});
