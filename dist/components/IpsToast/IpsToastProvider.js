import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useCallback, useMemo } from 'react';
import ReactDOM from 'react-dom';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { useTheme } from '@mui/material/styles';
import { IpsToastContext } from './IpsToastContext';
import { IpsToastItem, TOAST_EDGE_OFFSET_PX } from './IpsToast';
import { TOAST_TYPES } from './IpsToast.types';
// The close button's accessible name when the app does not pass one in its own language
const DEFAULT_CLOSE_BUTTON_LABEL = 'close';
// ─── Color + icon per type ────────────────────────────────────────────────────
const TOAST_CONFIG = {
    [TOAST_TYPES.SUCCESS]: {
        bgColor: '#5cb85c',
        icon: _jsx(CheckCircleOutlineIcon, { fontSize: "small" }),
    },
    [TOAST_TYPES.INFO]: {
        bgColor: '#5bc0de',
        icon: _jsx(InfoOutlinedIcon, { fontSize: "small" }),
    },
    [TOAST_TYPES.WARNING]: {
        bgColor: '#e4872b',
        icon: _jsx(WarningAmberIcon, { fontSize: "small" }),
    },
    [TOAST_TYPES.DANGER]: {
        bgColor: '#d9534f',
        icon: _jsx(ErrorOutlineIcon, { fontSize: "small" }),
    },
};
// ─── Position mapping → inline style ─────────────────────────────────────────
// zIndex: MUI's snackbar layer, above dialogs and drawers (modal 1300), so a toast is seen even while one is open.
// bottomOffset: only for the bottom positions, e.g. to stay above a bottom action bar
function getContainerStyle(position, zIndex, bottomOffset) {
    const offset = TOAST_EDGE_OFFSET_PX;
    const base = {
        position: 'fixed',
        zIndex,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
    };
    switch (position) {
        case 'bottom-right': return { ...base, bottom: bottomOffset, right: offset };
        case 'bottom-left': return { ...base, bottom: bottomOffset, left: offset };
        case 'top-right': return { ...base, top: offset, right: offset };
        case 'top-left': return { ...base, top: offset, left: offset };
    }
}
// ─── Provider ─────────────────────────────────────────────────────────────────
export function IpsToastProvider({ children, deleteTime = 3000, maxToasts = 5, position = 'bottom-right', bottomOffset = TOAST_EDGE_OFFSET_PX, closeButtonLabel = DEFAULT_CLOSE_BUTTON_LABEL, }) {
    const [toasts, setToasts] = useState([]);
    const theme = useTheme();
    const generateId = useMemo(() => {
        let counter = 0;
        return () => ++counter;
    }, []);
    const removeToast = useCallback((id) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    }, []);
    const addToast = useCallback((type, message) => {
        const config = TOAST_CONFIG[type] ?? TOAST_CONFIG[TOAST_TYPES.INFO];
        const id = generateId();
        const item = {
            id,
            message,
            type,
            icon: config.icon,
            bgColor: config.bgColor,
        };
        setToasts(prev => {
            const next = [...prev, item];
            // Enforce maxToasts — drop the oldest
            return next.length > maxToasts ? next.slice(next.length - maxToasts) : next;
        });
        setTimeout(() => removeToast(id), deleteTime);
    }, [deleteTime, maxToasts, generateId, removeToast]);
    return (_jsxs(IpsToastContext.Provider, { value: addToast, children: [children, ReactDOM.createPortal(_jsx("div", { className: "ips-toast-container", style: getContainerStyle(position, theme.zIndex.snackbar, bottomOffset), dir: "rtl", "data-testid": "ips-toast-container", children: toasts.map(toast => (_jsx(IpsToastItem, { toast: toast, onClose: removeToast, closeButtonLabel: closeButtonLabel }, toast.id))) }), document.body)] }));
}
