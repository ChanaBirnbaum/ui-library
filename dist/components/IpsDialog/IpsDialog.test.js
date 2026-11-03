import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { IpsDialog } from './IpsDialog';
const theme = createTheme();
const wrap = (ui) => render(_jsx(ThemeProvider, { theme: theme, children: ui }));
describe('IpsDialog', () => {
    // ── displayName ──────────────────────────────────────────────────────────────
    it('has displayName IpsDialog', () => {
        expect(IpsDialog.displayName).toBe('IpsDialog');
    });
    // ── Controlled open ──────────────────────────────────────────────────────────
    it('renders dialog role when open=true', () => {
        wrap(_jsx(IpsDialog, { open: true, title: "Test", children: null }));
        expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
    it('does not render dialog role when open=false', () => {
        wrap(_jsx(IpsDialog, { open: false, title: "Test", children: null }));
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
    it('renders dialog after open changes from false to true', () => {
        const { rerender } = wrap(_jsx(IpsDialog, { open: false, title: "Test", children: null }));
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
        rerender(_jsx(ThemeProvider, { theme: theme, children: _jsx(IpsDialog, { open: true, title: "Test", children: null }) }));
        expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
    // ── className ────────────────────────────────────────────────────────────────
    it('applies ips-dialog class to the paper surface', () => {
        wrap(_jsx(IpsDialog, { open: true, title: "Test", children: null }));
        expect(document.querySelector('.ips-dialog')).toBeInTheDocument();
    });
    it('applies ips-dialog-title class to the header', () => {
        wrap(_jsx(IpsDialog, { open: true, title: "Test", children: null }));
        expect(document.querySelector('.ips-dialog-title')).toBeInTheDocument();
    });
    it('applies ips-dialog-content class to the content area', () => {
        wrap(_jsx(IpsDialog, { open: true, title: "Test", children: null }));
        expect(document.querySelector('.ips-dialog-content')).toBeInTheDocument();
    });
    it('applies ips-dialog-actions class to the footer', () => {
        wrap(_jsx(IpsDialog, { open: true, title: "Test", actions: _jsx("button", { children: "OK" }), children: null }));
        expect(document.querySelector('.ips-dialog-actions')).toBeInTheDocument();
    });
    // ── forwardRef ───────────────────────────────────────────────────────────────
    it('forwards ref to the paper element', () => {
        const ref = React.createRef();
        wrap(_jsx(IpsDialog, { open: true, title: "Test", ref: ref, children: null }));
        expect(ref.current).toBeInstanceOf(HTMLElement);
        expect(ref.current).toHaveClass('ips-dialog');
    });
    // ── Children render verbatim ──────────────────────────────────────────────────
    it('renders children inside the dialog content area', () => {
        wrap(_jsx(IpsDialog, { open: true, title: "Test", children: _jsx("div", { "data-testid": "child", children: "Hello from child" }) }));
        expect(screen.getByTestId('child')).toBeInTheDocument();
        expect(screen.getByText('Hello from child')).toBeInTheDocument();
    });
    it('renders arbitrary child structure verbatim', () => {
        wrap(_jsx(IpsDialog, { open: true, title: "Test", children: _jsxs("ul", { children: [_jsx("li", { "data-testid": "item-a", children: "A" }), _jsx("li", { "data-testid": "item-b", children: "B" })] }) }));
        expect(screen.getByTestId('item-a')).toBeInTheDocument();
        expect(screen.getByTestId('item-b')).toBeInTheDocument();
    });
    // ── Title ────────────────────────────────────────────────────────────────────
    it('renders title text in the header', () => {
        wrap(_jsx(IpsDialog, { open: true, title: "My Dialog Title", children: null }));
        expect(screen.getByText('My Dialog Title')).toBeInTheDocument();
    });
    // ── Actions / footer ─────────────────────────────────────────────────────────
    it('renders actions inside the footer', () => {
        wrap(_jsx(IpsDialog, { open: true, title: "Test", actions: _jsx("button", { "data-testid": "confirm-btn", children: "Confirm" }), children: null }));
        expect(screen.getByTestId('confirm-btn')).toBeInTheDocument();
    });
    it('does not render footer when no actions and no renderFooter', () => {
        wrap(_jsx(IpsDialog, { open: true, title: "Test", children: null }));
        expect(document.querySelector('.ips-dialog-actions')).not.toBeInTheDocument();
    });
    // ── onClose — close button ───────────────────────────────────────────────────
    it('calls onClose with "closeButton" when the X button is clicked', () => {
        const handler = jest.fn();
        wrap(_jsx(IpsDialog, { open: true, title: "Test", onClose: handler, children: null }));
        fireEvent.click(screen.getByRole('button', { name: /close/i }));
        expect(handler).toHaveBeenCalledTimes(1);
        expect(handler).toHaveBeenCalledWith('closeButton');
    });
    it('does not throw when onClose is not provided and X is clicked', () => {
        wrap(_jsx(IpsDialog, { open: true, title: "Test", children: null }));
        expect(() => fireEvent.click(screen.getByRole('button', { name: /close/i }))).not.toThrow();
    });
    // ── showCloseButton ──────────────────────────────────────────────────────────
    it('does not render the X button when showCloseButton=false', () => {
        wrap(_jsx(IpsDialog, { open: true, title: "Test", onClose: jest.fn(), showCloseButton: false, children: null }));
        expect(screen.queryByRole('button', { name: /close/i })).not.toBeInTheDocument();
    });
    // ── Backdrop click ───────────────────────────────────────────────────────────
    it('calls onClose with "backdropClick" when backdrop is clicked', () => {
        const handler = jest.fn();
        wrap(_jsx(IpsDialog, { open: true, title: "Test", onClose: handler, children: null }));
        const backdrop = document.querySelector('.MuiBackdrop-root');
        if (backdrop)
            fireEvent.click(backdrop);
        expect(handler).toHaveBeenCalledWith('backdropClick');
    });
    it('does NOT call onClose when backdrop clicked and disableBackdropClose=true', () => {
        const handler = jest.fn();
        wrap(_jsx(IpsDialog, { open: true, title: "Test", onClose: handler, disableBackdropClose: true, children: null }));
        const backdrop = document.querySelector('.MuiBackdrop-root');
        if (backdrop)
            fireEvent.click(backdrop);
        expect(handler).not.toHaveBeenCalled();
    });
    // ── Escape key ───────────────────────────────────────────────────────────────
    it('calls onClose with "escapeKeyDown" when Esc is pressed', () => {
        const handler = jest.fn();
        wrap(_jsx(IpsDialog, { open: true, title: "Test", onClose: handler, children: null }));
        fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape', code: 'Escape' });
        expect(handler).toHaveBeenCalledWith('escapeKeyDown');
    });
    // ── disableEscapeKeyDown ─────────────────────────────────────────────────────
    it('passes disableEscapeKeyDown to MUI Dialog so Esc does not fire onClose', () => {
        const handler = jest.fn();
        wrap(_jsx(IpsDialog, { open: true, title: "Test", onClose: handler, disableEscapeKeyDown: true, children: null }));
        fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape', code: 'Escape' });
        expect(handler).not.toHaveBeenCalled();
    });
    // ── loading overlay + aria-busy ──────────────────────────────────────────────
    it('shows the CircularProgress overlay when loading=true', () => {
        wrap(_jsx(IpsDialog, { open: true, title: "Test", loading: true, children: null }));
        expect(document.querySelector('.MuiCircularProgress-root')).toBeInTheDocument();
    });
    it('does not show CircularProgress when loading=false', () => {
        wrap(_jsx(IpsDialog, { open: true, title: "Test", children: null }));
        expect(document.querySelector('.MuiCircularProgress-root')).not.toBeInTheDocument();
    });
    it('sets aria-busy="true" on the paper when loading=true', () => {
        wrap(_jsx(IpsDialog, { open: true, title: "Test", loading: true, children: null }));
        expect(document.querySelector('.ips-dialog')).toHaveAttribute('aria-busy', 'true');
    });
    it('does not set aria-busy when loading=false', () => {
        wrap(_jsx(IpsDialog, { open: true, title: "Test", children: null }));
        expect(document.querySelector('.ips-dialog')).not.toHaveAttribute('aria-busy');
    });
    // ── aria labelledby / describedby wiring from idPrefix ──────────────────────
    it('dialog element has aria-labelledby matching idPrefix-title', () => {
        wrap(_jsx(IpsDialog, { open: true, title: "Test", idPrefix: "my-dlg", children: null }));
        expect(screen.getByRole('dialog')).toHaveAttribute('aria-labelledby', 'my-dlg-title');
    });
    it('dialog element has aria-describedby matching idPrefix-content', () => {
        wrap(_jsx(IpsDialog, { open: true, title: "Test", idPrefix: "my-dlg", children: null }));
        expect(screen.getByRole('dialog')).toHaveAttribute('aria-describedby', 'my-dlg-content');
    });
    it('title element has the correct id from idPrefix', () => {
        wrap(_jsx(IpsDialog, { open: true, title: "Test", idPrefix: "my-dlg", children: null }));
        expect(document.getElementById('my-dlg-title')).toBeInTheDocument();
    });
    it('content element has the correct id from idPrefix', () => {
        wrap(_jsx(IpsDialog, { open: true, title: "Test", idPrefix: "my-dlg", children: null }));
        expect(document.getElementById('my-dlg-content')).toBeInTheDocument();
    });
    it('uses default idPrefix "ips-dialog" when not provided', () => {
        wrap(_jsx(IpsDialog, { open: true, title: "Test", children: null }));
        expect(screen.getByRole('dialog')).toHaveAttribute('aria-labelledby', 'ips-dialog-title');
        expect(screen.getByRole('dialog')).toHaveAttribute('aria-describedby', 'ips-dialog-content');
    });
    it('does not use custom idPrefix title id as aria-labelledby when there is no header', () => {
        // MUI v7 always auto-generates aria-labelledby via useId(); we can't suppress that.
        // What we CAN guarantee: when hasHeader=false, we do NOT wire aria-labelledby to our
        // custom ips-dialog-title element — MUI's auto-generated fallback id is used instead.
        wrap(_jsx(IpsDialog, { open: true, onClose: jest.fn(), showCloseButton: false, idPrefix: "nodlg", children: null }));
        // No title, no icon, showCloseButton=false → hasHeader=false
        // Our custom id "nodlg-title" must NOT be the aria-labelledby value
        const labelledBy = screen.getByRole('dialog').getAttribute('aria-labelledby');
        expect(labelledBy).not.toBe('nodlg-title');
    });
    // ── renderHeader override ────────────────────────────────────────────────────
    it('renders custom header via renderHeader', () => {
        wrap(_jsx(IpsDialog, { open: true, onClose: jest.fn(), renderHeader: ({ titleId }) => (_jsx("div", { "data-testid": "custom-header", id: titleId, children: "Custom Header" })), children: null }));
        expect(screen.getByTestId('custom-header')).toBeInTheDocument();
        expect(screen.getByText('Custom Header')).toBeInTheDocument();
    });
    it('renderHeader context requestClose emits "closeButton"', () => {
        const handler = jest.fn();
        wrap(_jsx(IpsDialog, { open: true, onClose: handler, renderHeader: ({ requestClose }) => (_jsx("button", { "data-testid": "custom-close", onClick: requestClose, children: "X" })), children: null }));
        fireEvent.click(screen.getByTestId('custom-close'));
        expect(handler).toHaveBeenCalledWith('closeButton');
    });
    it('does not render default DialogTitle when renderHeader is provided', () => {
        wrap(_jsx(IpsDialog, { open: true, title: "Should not appear", onClose: jest.fn(), renderHeader: () => _jsx("div", { "data-testid": "custom-header", children: "Custom" }), children: null }));
        expect(document.querySelector('.ips-dialog-title')).not.toBeInTheDocument();
    });
    // ── renderFooter override ────────────────────────────────────────────────────
    it('renders custom footer via renderFooter', () => {
        wrap(_jsx(IpsDialog, { open: true, title: "Test", onClose: jest.fn(), renderFooter: () => (_jsx("div", { "data-testid": "custom-footer", children: "Custom Footer" })), children: null }));
        expect(screen.getByTestId('custom-footer')).toBeInTheDocument();
    });
    it('renderFooter context requestClose emits "closeButton"', () => {
        const handler = jest.fn();
        wrap(_jsx(IpsDialog, { open: true, title: "Test", onClose: handler, renderFooter: ({ requestClose }) => (_jsx("button", { "data-testid": "custom-footer-btn", onClick: requestClose, children: "Done" })), children: null }));
        fireEvent.click(screen.getByTestId('custom-footer-btn'));
        expect(handler).toHaveBeenCalledWith('closeButton');
    });
    it('does not render default DialogActions when renderFooter is provided', () => {
        wrap(_jsx(IpsDialog, { open: true, title: "Test", onClose: jest.fn(), actions: _jsx("button", { children: "Should not appear" }), renderFooter: () => _jsx("div", { "data-testid": "custom-footer", children: "Custom" }), children: null }));
        expect(document.querySelector('.ips-dialog-actions')).not.toBeInTheDocument();
    });
});
