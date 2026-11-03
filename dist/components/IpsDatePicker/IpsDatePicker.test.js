import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { he } from 'date-fns/locale';
import { IpsDatePicker } from './IpsDatePicker';
const theme = createTheme();
const wrap = (ui) => render(_jsx(ThemeProvider, { theme: theme, children: ui }));
describe('IpsDatePicker', () => {
    // ── Rendering ──────────────────────────────────────────────────────────────
    it('renders without crashing', () => {
        wrap(_jsx(IpsDatePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA", value: null, onChange: jest.fn() }));
        expect(document.querySelector('.ips-date-picker')).toBeInTheDocument();
    });
    it('renders an input element', () => {
        wrap(_jsx(IpsDatePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA", value: null, onChange: jest.fn() }));
        expect(document.querySelector('input')).toBeInTheDocument();
    });
    it('renders label text', () => {
        wrap(_jsx(IpsDatePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05E4\u05D2\u05D9\u05E9\u05D4", value: null, onChange: jest.fn() }));
        // MUI renders label in both <label> and <legend>
        const matches = screen.getAllByText('תאריך פגישה');
        expect(matches.length).toBeGreaterThan(0);
    });
    // ── className ──────────────────────────────────────────────────────────────
    it('applies ips-date-picker class to the container', () => {
        wrap(_jsx(IpsDatePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA", value: null, onChange: jest.fn() }));
        expect(document.querySelector('.ips-date-picker')).toBeInTheDocument();
    });
    it('appends extra className to the container', () => {
        wrap(_jsx(IpsDatePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA", value: null, onChange: jest.fn(), className: "custom-cls" }));
        expect(document.querySelector('.ips-date-picker.custom-cls')).toBeInTheDocument();
    });
    // ── displayName + forwardRef ───────────────────────────────────────────────
    it('has displayName IpsDatePicker', () => {
        expect(IpsDatePicker.displayName).toBe('IpsDatePicker');
    });
    it('forwards ref to the container div', () => {
        const ref = React.createRef();
        wrap(_jsx(IpsDatePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA", value: null, onChange: jest.fn(), ref: ref }));
        expect(ref.current).toBeInstanceOf(HTMLElement);
        expect(ref.current).toHaveClass('ips-date-picker');
    });
    // ── Props ──────────────────────────────────────────────────────────────────
    it('renders with a Date value without crashing', () => {
        wrap(_jsx(IpsDatePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA", value: new Date(2025, 0, 15), onChange: jest.fn() }));
        expect(document.querySelector('.ips-date-picker')).toBeInTheDocument();
    });
    it('renders in disabled state — input is disabled', () => {
        wrap(_jsx(IpsDatePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA", value: null, onChange: jest.fn(), disabled: true }));
        expect(document.querySelector('input')).toBeDisabled();
    });
    it('renders in readOnly state without crashing', () => {
        wrap(_jsx(IpsDatePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA", value: new Date(2025, 0, 15), onChange: jest.fn(), readOnly: true }));
        expect(document.querySelector('.ips-date-picker')).toBeInTheDocument();
    });
    it('renders with minDate and maxDate without crashing', () => {
        wrap(_jsx(IpsDatePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA", value: null, onChange: jest.fn(), minDate: new Date(2025, 0, 1), maxDate: new Date(2025, 11, 31) }));
        expect(document.querySelector('.ips-date-picker')).toBeInTheDocument();
    });
    it('renders with custom format without crashing', () => {
        wrap(_jsx(IpsDatePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA", value: null, onChange: jest.fn(), format: "MM/dd/yyyy" }));
        expect(document.querySelector('.ips-date-picker')).toBeInTheDocument();
    });
    // ── RTL ────────────────────────────────────────────────────────────────────
    it('sets dir="rtl" on the container when rtl=true', () => {
        wrap(_jsx(IpsDatePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA", value: null, onChange: jest.fn(), rtl: true }));
        const container = document.querySelector('.ips-date-picker');
        expect(container.getAttribute('dir')).toBe('rtl');
    });
    it('does not set dir when rtl is not provided', () => {
        wrap(_jsx(IpsDatePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA", value: null, onChange: jest.fn() }));
        const container = document.querySelector('.ips-date-picker');
        expect(container.getAttribute('dir')).toBeNull();
    });
    // ── error / helperText ────────────────────────────────────────────────────
    it('displays helperText below the field', () => {
        wrap(_jsx(IpsDatePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA", value: null, onChange: jest.fn(), helperText: "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4" }));
        expect(screen.getByText('שדה חובה')).toBeInTheDocument();
    });
    it('renders with error=true and helperText without crashing', () => {
        wrap(_jsx(IpsDatePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA", value: null, onChange: jest.fn(), error: true, helperText: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF" }));
        expect(screen.getByText('תאריך לא תקין')).toBeInTheDocument();
    });
    // ── sx ────────────────────────────────────────────────────────────────────
    it('applies sx prop without crashing', () => {
        wrap(_jsx(IpsDatePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA", value: null, onChange: jest.fn(), sx: { mt: 2 } }));
        expect(document.querySelector('.ips-date-picker')).toBeInTheDocument();
    });
    // ── locale ─────────────────────────────────────────────────────────────────
    it('shows the calendar in the given date-fns locale', () => {
        wrap(_jsx(IpsDatePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA", value: new Date(2026, 9, 19), onChange: jest.fn(), locale: he, open: true }));
        expect(screen.getByText('אוקטובר 2026')).toBeInTheDocument();
    });
});
