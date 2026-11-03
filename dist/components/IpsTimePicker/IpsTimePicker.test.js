import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import moment from 'moment';
import 'moment/locale/he';
import { IpsTimePicker } from './IpsTimePicker';
const theme = createTheme();
const wrap = (ui) => render(_jsx(ThemeProvider, { theme: theme, children: ui }));
describe('IpsTimePicker', () => {
    // ── Rendering ──────────────────────────────────────────────────────────────
    it('renders without crashing', () => {
        wrap(_jsx(IpsTimePicker, { label: "\u05E9\u05E2\u05D4", value: null, onChange: jest.fn() }));
        expect(document.querySelector('.ips-time-picker')).toBeInTheDocument();
    });
    it('renders label text', () => {
        wrap(_jsx(IpsTimePicker, { label: "\u05E9\u05E2\u05EA \u05D4\u05D2\u05E2\u05D4", value: null, onChange: jest.fn() }));
        // MUI TextField renders label in both <label> and <legend> — use getAllByText
        const matches = screen.getAllByText('שעת הגעה');
        expect(matches.length).toBeGreaterThan(0);
    });
    it('renders an input element', () => {
        wrap(_jsx(IpsTimePicker, { label: "\u05E9\u05E2\u05D4", value: null, onChange: jest.fn() }));
        expect(document.querySelector('input')).toBeInTheDocument();
    });
    // ── className ──────────────────────────────────────────────────────────────
    it('applies ips-time-picker class to the container', () => {
        wrap(_jsx(IpsTimePicker, { label: "\u05E9\u05E2\u05D4", value: null, onChange: jest.fn() }));
        expect(document.querySelector('.ips-time-picker')).toBeInTheDocument();
    });
    it('appends extra className to the container', () => {
        wrap(_jsx(IpsTimePicker, { label: "\u05E9\u05E2\u05D4", value: null, onChange: jest.fn(), className: "custom-cls" }));
        const container = document.querySelector('.ips-time-picker');
        expect(container).toHaveClass('custom-cls');
    });
    // ── displayName + forwardRef ───────────────────────────────────────────────
    it('has displayName IpsTimePicker', () => {
        expect(IpsTimePicker.displayName).toBe('IpsTimePicker');
    });
    it('forwards ref to the container div', () => {
        const ref = React.createRef();
        wrap(_jsx(IpsTimePicker, { label: "\u05E9\u05E2\u05D4", value: null, onChange: jest.fn(), ref: ref }));
        expect(ref.current).toBeInstanceOf(HTMLElement);
        expect(ref.current).toHaveClass('ips-time-picker');
    });
    // ── Props ──────────────────────────────────────────────────────────────────
    it('renders with a Moment value without crashing', () => {
        const value = moment('14:30', 'HH:mm');
        wrap(_jsx(IpsTimePicker, { label: "\u05E9\u05E2\u05D4", value: value, onChange: jest.fn() }));
        expect(document.querySelector('.ips-time-picker')).toBeInTheDocument();
    });
    it('renders in disabled state — input is disabled', () => {
        wrap(_jsx(IpsTimePicker, { label: "\u05E9\u05E2\u05D4", value: null, onChange: jest.fn(), disabled: true }));
        const input = document.querySelector('input');
        expect(input).toBeDisabled();
    });
    it('renders with ampm=false (24-hour mode) without crashing', () => {
        wrap(_jsx(IpsTimePicker, { label: "\u05E9\u05E2\u05D4", value: null, onChange: jest.fn(), ampm: false }));
        expect(document.querySelector('.ips-time-picker')).toBeInTheDocument();
    });
    it('renders with ampm=true (12-hour mode) without crashing', () => {
        wrap(_jsx(IpsTimePicker, { label: "\u05E9\u05E2\u05D4", value: null, onChange: jest.fn(), ampm: true }));
        expect(document.querySelector('.ips-time-picker')).toBeInTheDocument();
    });
    it('renders with minTime and maxTime without crashing', () => {
        wrap(_jsx(IpsTimePicker, { label: "\u05E9\u05E2\u05D4", value: null, onChange: jest.fn(), minTime: moment('09:00', 'HH:mm'), maxTime: moment('17:00', 'HH:mm') }));
        expect(document.querySelector('.ips-time-picker')).toBeInTheDocument();
    });
    // ── Legacy API ─────────────────────────────────────────────────────────────
    it('accepts the legacy mask prop without crashing (no-op)', () => {
        expect(() => wrap(_jsx(IpsTimePicker, { label: "\u05E9\u05E2\u05D4", value: null, onChange: jest.fn(), mask: "__:__" }))).not.toThrow();
    });
    // ── sx / styling ───────────────────────────────────────────────────────────
    it('applies sx prop to the container without crashing', () => {
        wrap(_jsx(IpsTimePicker, { label: "\u05E9\u05E2\u05D4", value: null, onChange: jest.fn(), sx: { mt: 2 } }));
        expect(document.querySelector('.ips-time-picker')).toBeInTheDocument();
    });
    // ── error / helperText ───────────────────────────────────────────────────────────
    it('displays helperText below the field', () => {
        wrap(_jsx(IpsTimePicker, { label: "\u05E9\u05E2\u05D4", value: null, onChange: jest.fn(), helperText: "\u05E9\u05D3\u05D4 \u05D7\u05D5\u05D1\u05D4" }));
        expect(screen.getByText('שדה חובה')).toBeInTheDocument();
    });
    it('renders with error=true without crashing', () => {
        wrap(_jsx(IpsTimePicker, { label: "\u05E9\u05E2\u05D4", value: null, onChange: jest.fn(), error: true, helperText: "\u05E9\u05D2\u05D9\u05D0\u05D4 \u05D1\u05E9\u05E2\u05D4" }));
        expect(screen.getByText('שגיאה בשעה')).toBeInTheDocument();
    });
});
