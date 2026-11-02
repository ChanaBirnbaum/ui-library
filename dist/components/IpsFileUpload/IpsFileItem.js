import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useTheme } from '@mui/material/styles';
import ImageIcon from '@mui/icons-material/Image';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
// ─── Helpers ─────────────────────────────────────────────────────────────────
function formatSize(bytes) {
    if (bytes < 1024 * 1024)
        return `${(bytes / 1024).toFixed(0)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}
function getFileIcon(file) {
    if (file.type.startsWith('image/'))
        return _jsx(ImageIcon, { fontSize: "small", color: "primary" });
    if (file.type === 'application/pdf')
        return _jsx(PictureAsPdfIcon, { fontSize: "small", color: "error" });
    return _jsx(InsertDriveFileIcon, { fontSize: "small", color: "action" });
}
function getPreviewType(file) {
    if (file.type.startsWith('image/'))
        return 'image';
    if (file.type === 'application/pdf')
        return 'pdf';
    return 'none';
}
// ─── Component ───────────────────────────────────────────────────────────────
export function IpsFileItem({ file, hasError = false, errorMessage, onDelete }) {
    const theme = useTheme();
    const [previewUrl, setPreviewUrl] = useState(null);
    const [previewType, setPreviewType] = useState('none');
    // ─── Preview ──────────────────────────────────────────────────────────────
    const handlePreview = () => {
        const type = getPreviewType(file);
        const url = URL.createObjectURL(file);
        if (type === 'none') {
            // Open in new tab for unsupported types
            window.open(url, '_blank');
            // Revoke after short delay (browser needs time to open)
            setTimeout(() => URL.revokeObjectURL(url), 1000);
            return;
        }
        setPreviewUrl(url);
        setPreviewType(type);
    };
    const handleClosePreview = () => {
        if (previewUrl)
            URL.revokeObjectURL(previewUrl);
        setPreviewUrl(null);
        setPreviewType('none');
    };
    // ─── Render ───────────────────────────────────────────────────────────────
    return (_jsxs(_Fragment, { children: [_jsxs(Box, { className: "ips-file-item", sx: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    px: 1.5,
                    py: 0.75,
                    borderRadius: 1,
                    bgcolor: hasError
                        ? theme.palette.error.light
                        : theme.palette.grey[50],
                    border: `1px solid ${hasError ? theme.palette.error.main : theme.palette.divider}`,
                    '&:hover': {
                        bgcolor: hasError
                            ? theme.palette.error.light
                            : theme.palette.grey[100],
                    },
                }, children: [_jsx(Box, { sx: { flexShrink: 0, display: 'flex', alignItems: 'center' }, children: getFileIcon(file) }), _jsxs(Box, { sx: { flex: 1, minWidth: 0 }, children: [_jsx(Typography, { variant: "body2", noWrap: true, title: file.name, sx: { color: hasError ? 'error.dark' : 'text.primary' }, children: file.name }), hasError && errorMessage && (_jsx(Typography, { variant: "caption", color: "error.dark", children: errorMessage }))] }), _jsx(Typography, { variant: "caption", color: "text.secondary", sx: { flexShrink: 0, whiteSpace: 'nowrap' }, children: formatSize(file.size) }), _jsx(Tooltip, { title: "\u05EA\u05E6\u05D5\u05D2\u05D4 \u05DE\u05E7\u05D3\u05D9\u05DE\u05D4", placement: "top", children: _jsx("span", { children: _jsx(IconButton, { size: "small", onClick: handlePreview, "aria-label": "\u05EA\u05E6\u05D5\u05D2\u05D4 \u05DE\u05E7\u05D3\u05D9\u05DE\u05D4", children: _jsx(VisibilityIcon, { fontSize: "small" }) }) }) }), _jsx(Tooltip, { title: "\u05DE\u05D7\u05E7", placement: "top", children: _jsx("span", { children: _jsx(IconButton, { size: "small", onClick: () => onDelete(file), "aria-label": "\u05DE\u05D7\u05E7 \u05E7\u05D5\u05D1\u05E5", sx: { color: 'error.main' }, children: _jsx(DeleteIcon, { fontSize: "small" }) }) }) })] }), _jsxs(Dialog, { open: Boolean(previewUrl), onClose: handleClosePreview, maxWidth: "md", fullWidth: true, children: [_jsxs(DialogTitle, { sx: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' }, children: [_jsx(Typography, { variant: "subtitle1", noWrap: true, sx: { maxWidth: '80%' }, children: file.name }), _jsx(IconButton, { size: "small", onClick: handleClosePreview, "aria-label": "\u05E1\u05D2\u05D5\u05E8", children: _jsx(CloseIcon, { fontSize: "small" }) })] }), _jsxs(DialogContent, { dividers: true, sx: { p: 0 }, children: [previewType === 'image' && previewUrl && (_jsx(Box, { sx: { textAlign: 'center', p: 2 }, children: _jsx("img", { src: previewUrl, alt: file.name, style: { maxWidth: '100%', maxHeight: '70vh', objectFit: 'contain' } }) })), previewType === 'pdf' && previewUrl && (_jsx("iframe", { src: previewUrl, title: file.name, width: "100%", height: "500px", style: { border: 'none', display: 'block' } }))] })] })] }));
}
IpsFileItem.displayName = 'IpsFileItem';
