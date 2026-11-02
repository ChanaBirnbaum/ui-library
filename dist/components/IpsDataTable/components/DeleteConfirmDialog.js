import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
export function DeleteConfirmDialog({ open, onConfirm, onCancel, message = 'האם אתה בטוח שברצונך למחוק רשומה זו?', }) {
    return (_jsxs(Dialog, { open: open, onClose: onCancel, maxWidth: "xs", fullWidth: true, children: [_jsx(DialogTitle, { children: "\u05D0\u05D9\u05E9\u05D5\u05E8 \u05DE\u05D7\u05D9\u05E7\u05D4" }), _jsx(DialogContent, { children: _jsx(DialogContentText, { children: message }) }), _jsxs(DialogActions, { children: [_jsx(Button, { onClick: onCancel, color: "inherit", children: "\u05D1\u05D9\u05D8\u05D5\u05DC" }), _jsx(Button, { onClick: onConfirm, color: "error", variant: "contained", autoFocus: true, children: "\u05DE\u05D7\u05E7" })] })] }));
}
