import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import MuiDialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import Fade from '@mui/material/Fade';
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';
import Zoom from '@mui/material/Zoom';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
// ── Inline close icon ─────────────────────────────────────────────────────────
const CloseIcon = (props) => (_jsx(SvgIcon, { ...props, viewBox: "0 0 24 24", children: _jsx("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }) }));
// ── Slide-up wrapper (Slide needs direction prop) ─────────────────────────────
const SlideUp = forwardRef(function SlideUp({ children, ...props }, ref) {
    return _jsx(Slide, { direction: "up", ref: ref, ...props, children: children });
});
const TRANSITION_MAP = {
    fade: Fade,
    grow: Grow,
    slide: SlideUp,
    zoom: Zoom,
};
// ── IpsDialog ─────────────────────────────────────────────────────────────────
export const IpsDialog = forwardRef(function IpsDialog(props, ref) {
    const { open, onClose, title, icon, children, actions, maxWidth = 'sm', fullWidth = true, fullScreen = false, fullScreenBreakpoint, scroll = 'paper', dividers = false, showCloseButton = true, disableBackdropClose = false, disableEscapeKeyDown = false, transition = 'fade', loading = false, keepMounted = false, rtl = false, idPrefix = 'ips-dialog', renderHeader, renderFooter, sx, ...rest } = props;
    const theme = useTheme();
    // Responsive full-screen — always call useMediaQuery (no conditional hooks)
    const breakpointQuery = fullScreenBreakpoint
        ? theme.breakpoints.down(fullScreenBreakpoint)
        : '(min-width: 99999px)'; // never matches
    const isBreakpointMatch = useMediaQuery(breakpointQuery);
    const resolvedFullScreen = fullScreen || Boolean(fullScreenBreakpoint && isBreakpointMatch);
    // Aria ids
    const titleId = `${idPrefix}-title`;
    const contentId = `${idPrefix}-content`;
    // Close helpers
    const requestClose = () => onClose?.('closeButton');
    const ctx = { requestClose, titleId, contentId };
    // Map MUI's onClose → our typed onClose
    const handleMuiClose = (_event, reason) => {
        if (reason === 'backdropClick' && disableBackdropClose)
            return;
        onClose?.(reason);
    };
    // Resolve numeric maxWidth → PaperProps sx
    const isNumericMax = typeof maxWidth === 'number';
    const muiMaxWidth = isNumericMax
        ? false
        : maxWidth;
    // Transition component
    const TransitionComp = TRANSITION_MAP[transition];
    // Header / footer presence
    const hasComposedHeader = !renderHeader && (title != null || icon != null || showCloseButton);
    const hasHeader = renderHeader != null || hasComposedHeader;
    const hasComposedFooter = !renderFooter && actions != null;
    const hasFooter = renderFooter != null || hasComposedFooter;
    // aria-labelledby: emit when there is any header (title/renderHeader)
    const ariaLabelledBy = hasHeader ? titleId : undefined;
    return (_jsxs(MuiDialog, { open: open, onClose: handleMuiClose, maxWidth: muiMaxWidth, fullWidth: fullWidth, fullScreen: resolvedFullScreen, scroll: scroll, disableEscapeKeyDown: disableEscapeKeyDown, keepMounted: keepMounted, "aria-labelledby": ariaLabelledBy, "aria-describedby": contentId, slots: { transition: TransitionComp }, slotProps: {
            paper: {
                // Forward external ref to the paper surface (which carries ips-dialog class)
                ref,
                className: 'ips-dialog',
                'aria-busy': loading ? 'true' : undefined,
                dir: rtl ? 'rtl' : undefined,
                sx: {
                    position: 'relative',
                    ...(isNumericMax ? { maxWidth } : {}),
                    ...(sx ?? {}),
                },
            },
        }, ...rest, children: [hasHeader && (renderHeader ? (renderHeader(ctx)) : (_jsxs(DialogTitle, { id: titleId, className: "ips-dialog-title", sx: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    pr: showCloseButton ? 6 : 2,
                    position: 'relative',
                }, children: [icon && (_jsx(Box, { component: "span", sx: { display: 'flex', flexShrink: 0 }, children: icon })), _jsx(Box, { component: "span", sx: { flex: 1 }, children: title }), showCloseButton && (_jsx(IconButton, { "aria-label": "Close", onClick: requestClose, size: "small", sx: {
                            position: 'absolute',
                            right: rtl ? 'auto' : 8,
                            left: rtl ? 8 : 'auto',
                            top: '50%',
                            transform: 'translateY(-50%)',
                        }, children: _jsx(CloseIcon, { fontSize: "small" }) }))] }))), _jsx(DialogContent, { id: contentId, className: "ips-dialog-content", dividers: dividers, children: children }), hasFooter && (renderFooter ? (renderFooter(ctx)) : (_jsx(DialogActions, { className: "ips-dialog-actions", children: actions }))), loading && (_jsx(Box, { sx: {
                    position: 'absolute',
                    inset: 0,
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'rgba(255,255,255,0.7)',
                    borderRadius: 'inherit',
                }, children: _jsx(CircularProgress, {}) }))] }));
});
IpsDialog.displayName = 'IpsDialog';
