import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { IpsDateTimePicker } from './IpsDateTimePicker';
const theme = createTheme();
const wrap = (ui) => render(_jsx(ThemeProvider, { theme: theme, children: ui }));
describe('IpsDateTimePicker', () => {
    // ── Rendering ──────────────────────────────────────────────────────────────
    it('renders without crashing', () => {
        wrap(_jsx(IpsDateTimePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05E9\u05E2\u05D4", value: null, onChange: jest.fn() }));
        expect(document.querySelector('.ips-date-time-picker')).toBeInTheDocument();
    });
    it('renders an input element', () => {
        wrap(_jsx(IpsDateTimePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05E9\u05E2\u05D4", value: null, onChange: jest.fn() }));
        expect(document.querySelector('input')).toBeInTheDocument();
    });
    it('renders label text', () => {
        wrap(_jsx(IpsDateTimePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05E4\u05D2\u05D9\u05E9\u05D4", value: null, onChange: jest.fn() }));
        const matches = screen.getAllByText('תאריך פגישה');
        expect(matches.length).toBeGreaterThan(0);
    });
    // ── className ──────────────────────────────────────────────────────────────
    it('applies ips-date-time-picker class to the container', () => {
        wrap(_jsx(IpsDateTimePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05E9\u05E2\u05D4", value: null, onChange: jest.fn() }));
        expect(document.querySelector('.ips-date-time-picker')).toBeInTheDocument();
    });
    it('appends extra className to the container', () => {
        wrap(_jsx(IpsDateTimePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05E9\u05E2\u05D4", value: null, onChange: jest.fn(), className: "custom-cls" }));
        expect(document.querySelector('.ips-date-time-picker.custom-cls')).toBeInTheDocument();
    });
    // ── displayName + forwardRef ───────────────────────────────────────────────
    it('has displayName IpsDateTimePicker', () => {
        expect(IpsDateTimePicker.displayName).toBe('IpsDateTimePicker');
    });
    it('forwards ref to the container div', () => {
        const ref = React.createRef();
        wrap(_jsx(IpsDateTimePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05E9\u05E2\u05D4", value: null, onChange: jest.fn(), ref: ref }));
        expect(ref.current).toBeInstanceOf(HTMLElement);
        expect(ref.current).toHaveClass('ips-date-time-picker');
    });
    // ── Props ──────────────────────────────────────────────────────────────────
    it('renders with a Date value without crashing', () => {
        wrap(_jsx(IpsDateTimePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05E9\u05E2\u05D4", value: new Date(2025, 0, 15, 14, 30), onChange: jest.fn() }));
        expect(document.querySelector('.ips-date-time-picker')).toBeInTheDocument();
    });
    it('renders in disabled state — input is disabled', () => {
        wrap(_jsx(IpsDateTimePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05E9\u05E2\u05D4", value: null, onChange: jest.fn(), disabled: true }));
        expect(document.querySelector('input')).toBeDisabled();
    });
    it('renders in readOnly state without crashing', () => {
        wrap(_jsx(IpsDateTimePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05E9\u05E2\u05D4", value: new Date(2025, 0, 15, 9, 0), onChange: jest.fn(), readOnly: true }));
        expect(document.querySelector('.ips-date-time-picker')).toBeInTheDocument();
    });
    it('applies custom format without crashing', () => {
        wrap(_jsx(IpsDateTimePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05E9\u05E2\u05D4", value: null, onChange: jest.fn(), format: "MM/dd/yyyy HH:mm" }));
        expect(document.querySelector('.ips-date-time-picker')).toBeInTheDocument();
    });
    // ── RTL ────────────────────────────────────────────────────────────────────
    it('sets dir="rtl" on the wrapper when rtl=true', () => {
        wrap(_jsx(IpsDateTimePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05E9\u05E2\u05D4", value: null, onChange: jest.fn(), rtl: true }));
        const wrapper = document.querySelector('.ips-date-time-picker');
        expect(wrapper).toHaveAttribute('dir', 'rtl');
    });
    it('does not set dir attribute when rtl is false', () => {
        wrap(_jsx(IpsDateTimePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05E9\u05E2\u05D4", value: null, onChange: jest.fn() }));
        const wrapper = document.querySelector('.ips-date-time-picker');
        expect(wrapper).not.toHaveAttribute('dir');
    });
    // ── helperText + error ─────────────────────────────────────────────────────
    it('renders helperText below the field', () => {
        wrap(_jsx(IpsDateTimePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05E9\u05E2\u05D4", value: null, onChange: jest.fn(), helperText: "DD/MM/YYYY HH:MM" }));
        expect(screen.getByText('DD/MM/YYYY HH:MM')).toBeInTheDocument();
    });
    it('renders error state with helperText', () => {
        wrap(_jsx(IpsDateTimePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05E9\u05E2\u05D4", value: null, onChange: jest.fn(), error: true, helperText: "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4" }));
        expect(screen.getByText('שדה חובה')).toBeInTheDocument();
    });
    // ── sx ─────────────────────────────────────────────────────────────────────
    it('accepts sx prop without crashing', () => {
        wrap(_jsx(IpsDateTimePicker, { label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05E9\u05E2\u05D4", value: null, onChange: jest.fn(), sx: { mt: 2 } }));
        expect(document.querySelector('.ips-date-time-picker')).toBeInTheDocument();
    });
});
