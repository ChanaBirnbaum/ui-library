import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { IpsDrawer } from './IpsDrawer';
const theme = createTheme();
const wrap = (ui) => render(_jsx(ThemeProvider, { theme: theme, children: ui }));
describe('IpsDrawer', () => {
    // ── displayName ──────────────────────────────────────────────────────────────
    it('has displayName IpsDrawer', () => {
        expect(IpsDrawer.displayName).toBe('IpsDrawer');
    });
    // ── Controlled open ──────────────────────────────────────────────────────────
    it('renders the paper surface when open=true', () => {
        wrap(_jsx(IpsDrawer, { open: true, title: "Test", children: null }));
        expect(document.querySelector('.ips-drawer')).toBeInTheDocument();
    });
    it('does not render the paper surface when open=false', () => {
        wrap(_jsx(IpsDrawer, { open: false, title: "Test", children: null }));
        expect(document.querySelector('.ips-drawer')).not.toBeInTheDocument();
    });
    it('renders the paper after open changes from false to true', () => {
        const { rerender } = wrap(_jsx(IpsDrawer, { open: false, title: "Test", children: null }));
        expect(document.querySelector('.ips-drawer')).not.toBeInTheDocument();
        rerender(_jsx(ThemeProvider, { theme: theme, children: _jsx(IpsDrawer, { open: true, title: "Test", children: null }) }));
        expect(document.querySelector('.ips-drawer')).toBeInTheDocument();
    });
    // ── className ────────────────────────────────────────────────────────────────
    it('applies ips-drawer class to the paper surface', () => {
        wrap(_jsx(IpsDrawer, { open: true, title: "Test", children: null }));
        expect(document.querySelector('.ips-drawer')).toBeInTheDocument();
    });
    it('applies ips-drawer-title class to the header', () => {
        wrap(_jsx(IpsDrawer, { open: true, title: "Test", children: null }));
        expect(document.querySelector('.ips-drawer-title')).toBeInTheDocument();
    });
    it('applies ips-drawer-content class to the content area', () => {
        wrap(_jsx(IpsDrawer, { open: true, title: "Test", children: null }));
        expect(document.querySelector('.ips-drawer-content')).toBeInTheDocument();
    });
    it('applies ips-drawer-actions class to the footer', () => {
        wrap(_jsx(IpsDrawer, { open: true, title: "Test", actions: _jsx("button", { children: "OK" }), children: null }));
        expect(document.querySelector('.ips-drawer-actions')).toBeInTheDocument();
    });
    // ── forwardRef ───────────────────────────────────────────────────────────────
    it('forwards ref to the paper element', () => {
        const ref = React.createRef();
        wrap(_jsx(IpsDrawer, { open: true, title: "Test", ref: ref, children: null }));
        expect(ref.current).toBeInstanceOf(HTMLElement);
        expect(ref.current).toHaveClass('ips-drawer');
    });
    // ── Children render verbatim ──────────────────────────────────────────────────
    it('renders children inside the content area', () => {
        wrap(_jsx(IpsDrawer, { open: true, title: "Test", children: _jsx("div", { "data-testid": "child", children: "Hello from child" }) }));
        expect(screen.getByTestId('child')).toBeInTheDocument();
        expect(screen.getByText('Hello from child')).toBeInTheDocument();
    });
    it('renders arbitrary child structure verbatim', () => {
        wrap(_jsx(IpsDrawer, { open: true, title: "Test", children: _jsxs("ul", { children: [_jsx("li", { "data-testid": "item-a", children: "A" }), _jsx("li", { "data-testid": "item-b", children: "B" })] }) }));
        expect(screen.getByTestId('item-a')).toBeInTheDocument();
        expect(screen.getByTestId('item-b')).toBeInTheDocument();
    });
    // ── Title ────────────────────────────────────────────────────────────────────
    it('renders title text in the header', () => {
        wrap(_jsx(IpsDrawer, { open: true, title: "My Drawer Title", children: null }));
        expect(screen.getByText('My Drawer Title')).toBeInTheDocument();
    });
    // ── Actions / footer ─────────────────────────────────────────────────────────
    it('renders actions inside the footer', () => {
        wrap(_jsx(IpsDrawer, { open: true, title: "Test", actions: _jsx("button", { "data-testid": "confirm-btn", children: "Confirm" }), children: null }));
        expect(screen.getByTestId('confirm-btn')).toBeInTheDocument();
    });
    it('does not render footer when no actions and no renderFooter', () => {
        wrap(_jsx(IpsDrawer, { open: true, title: "Test", children: null }));
        expect(document.querySelector('.ips-drawer-actions')).not.toBeInTheDocument();
    });
    // ── onClose — close button ───────────────────────────────────────────────────
    it('calls onClose with "closeButton" when the X button is clicked', () => {
        const handler = jest.fn();
        wrap(_jsx(IpsDrawer, { open: true, title: "Test", onClose: handler, children: null }));
        fireEvent.click(screen.getByRole('button', { name: /close/i }));
        expect(handler).toHaveBeenCalledTimes(1);
        expect(handler).toHaveBeenCalledWith('closeButton');
    });
    it('does not throw when onClose is not provided and X is clicked', () => {
        wrap(_jsx(IpsDrawer, { open: true, title: "Test", children: null }));
        expect(() => fireEvent.click(screen.getByRole('button', { name: /close/i }))).not.toThrow();
    });
    // ── showCloseButton ──────────────────────────────────────────────────────────
    it('does not render the X button when showCloseButton=false', () => {
        wrap(_jsx(IpsDrawer, { open: true, title: "Test", onClose: jest.fn(), showCloseButton: false, children: null }));
        expect(screen.queryByRole('button', { name: /close/i })).not.toBeInTheDocument();
    });
    // ── Backdrop click (temporary variant) ───────────────────────────────────────
    it('calls onClose with "backdropClick" when backdrop is clicked', () => {
        const handler = jest.fn();
        wrap(_jsx(IpsDrawer, { open: true, variant: "temporary", title: "Test", onClose: handler, children: null }));
        const backdrop = document.querySelector('.MuiBackdrop-root');
        if (backdrop)
            fireEvent.click(backdrop);
        expect(handler).toHaveBeenCalledWith('backdropClick');
    });
    it('does NOT call onClose when backdrop clicked and disableBackdropClose=true', () => {
        const handler = jest.fn();
        wrap(_jsx(IpsDrawer, { open: true, variant: "temporary", title: "Test", onClose: handler, disableBackdropClose: true, children: null }));
        const backdrop = document.querySelector('.MuiBackdrop-root');
        if (backdrop)
            fireEvent.click(backdrop);
        expect(handler).not.toHaveBeenCalled();
    });
    // ── persistent / permanent — no backdrop reason ──────────────────────────────
    it('persistent variant renders no backdrop element', () => {
        wrap(_jsx(IpsDrawer, { open: true, variant: "persistent", title: "Test", onClose: jest.fn(), children: null }));
        expect(document.querySelector('.MuiBackdrop-root')).not.toBeInTheDocument();
    });
    it('permanent variant renders no backdrop element', () => {
        wrap(_jsx(IpsDrawer, { open: true, variant: "permanent", title: "Test", onClose: jest.fn(), children: null }));
        expect(document.querySelector('.MuiBackdrop-root')).not.toBeInTheDocument();
    });
    // ── Escape key (temporary variant) ───────────────────────────────────────────
    it('calls onClose with "escapeKeyDown" when Esc is pressed', () => {
        const handler = jest.fn();
        wrap(_jsx(IpsDrawer, { open: true, variant: "temporary", title: "Test", onClose: handler, children: null }));
        // MUI Drawer (temporary) wraps Modal which has role="dialog" and handles keydown
        const dialogEl = screen.queryByRole('dialog') ?? document.querySelector('.MuiDrawer-root');
        if (dialogEl)
            fireEvent.keyDown(dialogEl, { key: 'Escape', code: 'Escape' });
        expect(handler).toHaveBeenCalledWith('escapeKeyDown');
    });
    // ── disableEscapeKeyDown ─────────────────────────────────────────────────────
    it('passes disableEscapeKeyDown to MUI so Esc does not fire onClose', () => {
        const handler = jest.fn();
        wrap(_jsx(IpsDrawer, { open: true, variant: "temporary", title: "Test", onClose: handler, disableEscapeKeyDown: true, children: null }));
        const dialogEl = screen.queryByRole('dialog') ?? document.querySelector('.MuiDrawer-root');
        if (dialogEl)
            fireEvent.keyDown(dialogEl, { key: 'Escape', code: 'Escape' });
        expect(handler).not.toHaveBeenCalled();
    });
    // ── Size maps to width vs height per anchor ───────────────────────────────────
    it('applies size as width for anchor="right" (default)', () => {
        wrap(_jsx(IpsDrawer, { open: true, anchor: "right", size: 480, title: "T", children: null }));
        const paper = document.querySelector('.ips-drawer');
        expect(paper?.style.width).toBe('480px');
    });
    it('applies size as width for anchor="left"', () => {
        wrap(_jsx(IpsDrawer, { open: true, anchor: "left", size: 300, title: "T", children: null }));
        const paper = document.querySelector('.ips-drawer');
        expect(paper?.style.width).toBe('300px');
    });
    it('applies size as height for anchor="top"', () => {
        wrap(_jsx(IpsDrawer, { open: true, anchor: "top", size: 250, title: "T", children: null }));
        const paper = document.querySelector('.ips-drawer');
        expect(paper?.style.height).toBe('250px');
    });
    it('applies size as height for anchor="bottom"', () => {
        wrap(_jsx(IpsDrawer, { open: true, anchor: "bottom", size: 250, title: "T", children: null }));
        const paper = document.querySelector('.ips-drawer');
        expect(paper?.style.height).toBe('250px');
    });
    it('accepts string size values (e.g. "40%")', () => {
        wrap(_jsx(IpsDrawer, { open: true, anchor: "right", size: "40%", title: "T", children: null }));
        const paper = document.querySelector('.ips-drawer');
        expect(paper?.style.width).toBe('40%');
    });
    // ── Bottom sheet ─────────────────────────────────────────────────────────────
    it('limits a bottom sheet to 90% height by default', () => {
        wrap(_jsx(IpsDrawer, { open: true, anchor: "bottom", size: "auto", title: "T", children: null }));
        const paper = document.querySelector('.ips-drawer');
        expect(paper?.style.height).toBe('auto');
        expect(paper?.style.maxHeight).toBe('90%');
    });
    it('applies a custom maxSize', () => {
        wrap(_jsx(IpsDrawer, { open: true, anchor: "right", maxSize: 320, title: "T", children: null }));
        const paper = document.querySelector('.ips-drawer');
        expect(paper?.style.maxWidth).toBe('320px');
    });
    it('shows the grab handle only on a temporary bottom sheet', () => {
        const { unmount } = wrap(_jsx(IpsDrawer, { open: true, anchor: "bottom", title: "T", children: null }));
        expect(document.querySelector('.ips-drawer-puller')).toBeInTheDocument();
        unmount();
        wrap(_jsx(IpsDrawer, { open: true, anchor: "right", title: "T", children: null }));
        expect(document.querySelector('.ips-drawer-puller')).not.toBeInTheDocument();
    });
    it('lets the bottom sheet close with the X button', () => {
        const handler = jest.fn();
        wrap(_jsx(IpsDrawer, { open: true, anchor: "bottom", title: "T", onClose: handler, children: null }));
        fireEvent.click(screen.getByRole('button', { name: 'Close' }));
        expect(handler).toHaveBeenCalledWith('closeButton');
    });
    it('forwards ref to the paper element of a bottom sheet', () => {
        const ref = React.createRef();
        wrap(_jsx(IpsDrawer, { open: true, anchor: "bottom", title: "T", ref: ref, children: null }));
        expect(ref.current).toHaveClass('ips-drawer');
    });
    it('uses the given close button label', () => {
        wrap(_jsx(IpsDrawer, { open: true, title: "T", closeButtonLabel: "\u05E1\u05D2\u05D9\u05E8\u05D4", children: null }));
        expect(screen.getByRole('button', { name: 'סגירה' })).toBeInTheDocument();
    });
    // ── loading overlay + aria-busy ──────────────────────────────────────────────
    it('shows the CircularProgress overlay when loading=true', () => {
        wrap(_jsx(IpsDrawer, { open: true, title: "Test", loading: true, children: null }));
        expect(document.querySelector('.MuiCircularProgress-root')).toBeInTheDocument();
    });
    it('does not show CircularProgress when loading=false', () => {
        wrap(_jsx(IpsDrawer, { open: true, title: "Test", children: null }));
        expect(document.querySelector('.MuiCircularProgress-root')).not.toBeInTheDocument();
    });
    it('sets aria-busy="true" on the paper when loading=true', () => {
        wrap(_jsx(IpsDrawer, { open: true, title: "Test", loading: true, children: null }));
        expect(document.querySelector('.ips-drawer')).toHaveAttribute('aria-busy', 'true');
    });
    it('does not set aria-busy when loading=false', () => {
        wrap(_jsx(IpsDrawer, { open: true, title: "Test", children: null }));
        expect(document.querySelector('.ips-drawer')).not.toHaveAttribute('aria-busy');
    });
    // ── aria labelledby / describedby wiring from idPrefix ──────────────────────
    it('paper has aria-labelledby matching idPrefix-title', () => {
        wrap(_jsx(IpsDrawer, { open: true, title: "Test", idPrefix: "my-drw", children: null }));
        expect(document.querySelector('.ips-drawer')).toHaveAttribute('aria-labelledby', 'my-drw-title');
    });
    it('paper has aria-describedby matching idPrefix-content', () => {
        wrap(_jsx(IpsDrawer, { open: true, title: "Test", idPrefix: "my-drw", children: null }));
        expect(document.querySelector('.ips-drawer')).toHaveAttribute('aria-describedby', 'my-drw-content');
    });
    it('title element has the correct id from idPrefix', () => {
        wrap(_jsx(IpsDrawer, { open: true, title: "Test", idPrefix: "my-drw", children: null }));
        expect(document.getElementById('my-drw-title')).toBeInTheDocument();
    });
    it('content element has the correct id from idPrefix', () => {
        wrap(_jsx(IpsDrawer, { open: true, title: "Test", idPrefix: "my-drw", children: null }));
        expect(document.getElementById('my-drw-content')).toBeInTheDocument();
    });
    it('uses default idPrefix "ips-drawer" when not provided', () => {
        wrap(_jsx(IpsDrawer, { open: true, title: "Test", children: null }));
        expect(document.querySelector('.ips-drawer')).toHaveAttribute('aria-labelledby', 'ips-drawer-title');
        expect(document.querySelector('.ips-drawer')).toHaveAttribute('aria-describedby', 'ips-drawer-content');
    });
    it('does not set aria-labelledby to custom id when there is no header', () => {
        // MUI Drawer may auto-generate its own aria attributes; ours should NOT be set when hasHeader=false
        wrap(_jsx(IpsDrawer, { open: true, onClose: jest.fn(), showCloseButton: false, idPrefix: "nodrw", children: null }));
        const paper = document.querySelector('.ips-drawer');
        const labelledBy = paper?.getAttribute('aria-labelledby');
        expect(labelledBy).not.toBe('nodrw-title');
    });
    // ── renderHeader override ────────────────────────────────────────────────────
    it('renders custom header via renderHeader', () => {
        wrap(_jsx(IpsDrawer, { open: true, onClose: jest.fn(), renderHeader: ({ titleId }) => (_jsx("div", { "data-testid": "custom-header", id: titleId, children: "Custom Header" })), children: null }));
        expect(screen.getByTestId('custom-header')).toBeInTheDocument();
        expect(screen.getByText('Custom Header')).toBeInTheDocument();
    });
    it('renderHeader context requestClose emits "closeButton"', () => {
        const handler = jest.fn();
        wrap(_jsx(IpsDrawer, { open: true, onClose: handler, renderHeader: ({ requestClose }) => (_jsx("button", { "data-testid": "custom-close", onClick: requestClose, children: "X" })), children: null }));
        fireEvent.click(screen.getByTestId('custom-close'));
        expect(handler).toHaveBeenCalledWith('closeButton');
    });
    it('does not render default header when renderHeader is provided', () => {
        wrap(_jsx(IpsDrawer, { open: true, title: "Should not appear", onClose: jest.fn(), renderHeader: () => _jsx("div", { "data-testid": "custom-header", children: "Custom" }), children: null }));
        expect(document.querySelector('.ips-drawer-title')).not.toBeInTheDocument();
    });
    // ── renderFooter override ────────────────────────────────────────────────────
    it('renders custom footer via renderFooter', () => {
        wrap(_jsx(IpsDrawer, { open: true, title: "Test", onClose: jest.fn(), renderFooter: () => (_jsx("div", { "data-testid": "custom-footer", children: "Custom Footer" })), children: null }));
        expect(screen.getByTestId('custom-footer')).toBeInTheDocument();
    });
    it('renderFooter context requestClose emits "closeButton"', () => {
        const handler = jest.fn();
        wrap(_jsx(IpsDrawer, { open: true, title: "Test", onClose: handler, renderFooter: ({ requestClose }) => (_jsx("button", { "data-testid": "custom-footer-btn", onClick: requestClose, children: "Done" })), children: null }));
        fireEvent.click(screen.getByTestId('custom-footer-btn'));
        expect(handler).toHaveBeenCalledWith('closeButton');
    });
    it('does not render default footer when renderFooter is provided', () => {
        wrap(_jsx(IpsDrawer, { open: true, title: "Test", onClose: jest.fn(), actions: _jsx("button", { children: "Should not appear" }), renderFooter: () => _jsx("div", { "data-testid": "custom-footer", children: "Custom" }), children: null }));
        expect(document.querySelector('.ips-drawer-actions')).not.toBeInTheDocument();
    });
});
