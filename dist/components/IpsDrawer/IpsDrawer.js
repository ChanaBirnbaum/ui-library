import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { forwardRef } from 'react';
import MuiDrawer from '@mui/material/Drawer';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import CircularProgress from '@mui/material/CircularProgress';
import Divider from '@mui/material/Divider';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
// ── Inline close icon ─────────────────────────────────────────────────────────
const CloseIcon = (props) => (_jsx(SvgIcon, { ...props, viewBox: "0 0 24 24", children: _jsx("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" }) }));
// ── Bottom sheet constants ────────────────────────────────────────────────────
const DEFAULT_CLOSE_BUTTON_LABEL = 'Close';
const DEFAULT_BOTTOM_MAX_SIZE = '90%';
const BOTTOM_SHEET_RADIUS_PX = 24;
const PULLER = { widthPx: 40, heightPx: 4 };
// The sheet is opened by the app (a button), never by swiping up from the screen edge
const ignoreOpenRequest = () => { };
function toCssSize(size) {
    return typeof size === 'number' ? `${size}px` : size;
}
// ── IpsDrawer ─────────────────────────────────────────────────────────────────
export const IpsDrawer = forwardRef(function IpsDrawer(props, ref) {
    const { open, onClose, anchor = 'right', variant = 'temporary', size = 400, maxSize, showPuller, closeButtonLabel = DEFAULT_CLOSE_BUTTON_LABEL, title, icon, children, actions, dividers = false, showCloseButton = true, disableBackdropClose = false, disableEscapeKeyDown = false, hideBackdrop = false, elevation, loading = false, keepMounted = false, rtl = false, idPrefix = 'ips-drawer', renderHeader, renderFooter, sx, ...rest } = props;
    const theme = useTheme();
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
    // SwipeableDrawer reports a drag-to-close without a reason; backdrop and Esc still carry one
    const handleSwipeableClose = (event, reason) => {
        if (reason) {
            handleMuiClose(event, reason);
            return;
        }
        onClose?.('swipe');
    };
    // Counter-rotate left/right anchor when RTL theme is active so the prop
    // always refers to the physical screen edge, not the logical inline edge.
    const physicalAnchor = (() => {
        if (theme.direction !== 'rtl')
            return anchor;
        if (anchor === 'left')
            return 'right';
        if (anchor === 'right')
            return 'left';
        return anchor;
    })();
    // A temporary bottom drawer behaves as a mobile bottom sheet: grab handle, drag down to close
    const isBottomSheet = anchor === 'bottom' && variant === 'temporary';
    const shouldShowPuller = showPuller ?? isBottomSheet;
    // Resolve size → inline style dimension (testable in JSDOM)
    const isHorizontal = anchor === 'left' || anchor === 'right';
    const sizeValue = toCssSize(size);
    const maxSizeValue = toCssSize(maxSize ?? (anchor === 'bottom' ? DEFAULT_BOTTOM_MAX_SIZE : undefined));
    const sizeDim = isHorizontal
        ? { width: sizeValue, ...(maxSizeValue ? { maxWidth: maxSizeValue } : {}) }
        : { height: sizeValue, ...(maxSizeValue ? { maxHeight: maxSizeValue } : {}) };
    const bottomSheetShape = anchor === 'bottom'
        ? { borderTopLeftRadius: BOTTOM_SHEET_RADIUS_PX, borderTopRightRadius: BOTTOM_SHEET_RADIUS_PX }
        : {};
    // Header / footer presence
    const hasComposedHeader = !renderHeader && (title != null || icon != null || showCloseButton);
    const hasHeader = renderHeader != null || hasComposedHeader;
    const hasComposedFooter = !renderFooter && actions != null;
    const hasFooter = renderFooter != null || hasComposedFooter;
    // aria-labelledby: use our custom title id when a header exists
    const ariaLabelledBy = hasHeader ? titleId : undefined;
    // keepMounted, disableEscapeKeyDown, and Modal-level focus/scroll props only apply
    // to the temporary (Modal) variant. Leaking them to persistent/permanent causes
    // React warnings about unknown DOM props.
    const modalOnlyProps = variant === 'temporary'
        ? { keepMounted, disableEscapeKeyDown }
        : {};
    // The external ref is not part of these props: each drawer type attaches it differently (see below)
    const paperSlotProps = {
        className: 'ips-drawer',
        'aria-busy': loading ? 'true' : undefined,
        'aria-labelledby': ariaLabelledBy,
        'aria-describedby': contentId,
        dir: rtl ? 'rtl' : undefined,
        style: sizeDim,
        sx: {
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            ...bottomSheetShape,
            ...(sx ?? {}),
        },
    };
    const sharedDrawerProps = {
        open,
        anchor: physicalAnchor,
        variant,
        hideBackdrop,
        elevation,
        ...modalOnlyProps,
    };
    const drawerContent = (_jsxs(_Fragment, { children: [shouldShowPuller && (_jsx(Box, { className: "ips-drawer-puller", "aria-hidden": "true", sx: {
                    width: PULLER.widthPx,
                    height: PULLER.heightPx,
                    borderRadius: PULLER.heightPx / 2,
                    bgcolor: theme.palette.grey[300],
                    mx: 'auto',
                    mt: 1.5,
                    flexShrink: 0,
                } })), hasHeader && (renderHeader ? (renderHeader(ctx)) : (_jsxs(Box, { id: titleId, className: "ips-drawer-title", sx: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 2,
                    py: 1.5,
                    flexShrink: 0,
                    position: 'relative',
                    pr: showCloseButton ? 6 : 2,
                }, children: [icon && (_jsx(Box, { component: "span", sx: { display: 'flex', flexShrink: 0 }, children: icon })), _jsx(Typography, { component: "span", variant: "h6", sx: { flex: 1, fontWeight: 600, fontSize: '1rem', lineHeight: 1.4 }, children: title }), showCloseButton && (_jsx(IconButton, { "aria-label": closeButtonLabel, onClick: requestClose, size: "small", sx: {
                            position: 'absolute',
                            right: rtl ? 'auto' : 8,
                            left: rtl ? 8 : 'auto',
                            top: '50%',
                            transform: 'translateY(-50%)',
                        }, children: _jsx(CloseIcon, { fontSize: "small" }) }))] }))), hasHeader && dividers && _jsx(Divider, { sx: { flexShrink: 0 } }), _jsx(Box, { id: contentId, className: "ips-drawer-content", sx: {
                    flex: 1,
                    overflowY: 'auto',
                    overflowX: 'hidden',
                    p: 2,
                }, children: children }), hasFooter && dividers && _jsx(Divider, { sx: { flexShrink: 0 } }), hasFooter && (renderFooter ? (renderFooter(ctx)) : (_jsx(Box, { className: "ips-drawer-actions", sx: {
                    display: 'flex',
                    justifyContent: 'flex-end',
                    gap: 1,
                    px: 2,
                    py: 1.5,
                    flexShrink: 0,
                }, children: actions }))), loading && (_jsx(Box, { sx: {
                    position: 'absolute',
                    inset: 0,
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'rgba(255,255,255,0.7)',
                }, children: _jsx(CircularProgress, {}) }))] }));
    if (isBottomSheet) {
        return (_jsx(SwipeableDrawer, { ...sharedDrawerProps, slotProps: { paper: paperSlotProps }, 
            // SwipeableDrawer keeps its own ref on the paper to track touches. A ref inside slotProps.paper
            // would replace it (and crash on the first touch), so the external ref goes through PaperProps,
            // which SwipeableDrawer merges with its own
            PaperProps: { ref }, ...rest, onClose: handleSwipeableClose, onOpen: ignoreOpenRequest, disableSwipeToOpen: true, children: drawerContent }));
    }
    return (_jsx(MuiDrawer, { ...sharedDrawerProps, 
        // Forward external ref to paper surface (carries ips-drawer class)
        slotProps: { paper: { ...paperSlotProps, ref } }, ...rest, onClose: handleMuiClose, children: drawerContent }));
});
IpsDrawer.displayName = 'IpsDrawer';
