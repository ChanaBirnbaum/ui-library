import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useTheme, alpha } from '@mui/material/styles';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import ScannerIcon from '@mui/icons-material/Scanner';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor';
import { CameraDialog } from './CameraDialog';
import { ScanDialog } from './ScanDialog';
import { ScreenCropOverlay } from './ScreenCropOverlay';
export function IpsDropZone({ onFilesAdded, camera = false, screenshot = true, scan = false, accept, multiple = true, disabled = false, containerId, separatorLabel, }) {
    const theme = useTheme();
    const fileInputRef = useRef(null);
    const cameraRef = useRef(null);
    const scanFallbackRef = useRef(null);
    const [isDragOver, setIsDragOver] = useState(false);
    const [snackbar, setSnackbar] = useState(null);
    const [screenshotError, setScreenshotError] = useState(null);
    const [cameraOpen, setCameraOpen] = useState(false);
    const [scanOpen, setScanOpen] = useState(false);
    const [screenshotOpen, setScreenshotOpen] = useState(false);
    const acceptStr = accept?.join(',');
    // ─── Drag events ────────────────────────────────────────────────────────────
    const handleDragOver = (e) => {
        e.preventDefault();
        if (!disabled)
            setIsDragOver(true);
    };
    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragOver(false);
    };
    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);
        if (disabled)
            return;
        const files = Array.from(e.dataTransfer.files);
        if (files.length > 0)
            onFilesAdded(files);
    };
    // ─── File input ──────────────────────────────────────────────────────────────
    const handleFileInput = (e) => {
        const files = Array.from(e.target.files ?? []);
        if (files.length > 0)
            onFilesAdded(files);
        e.target.value = '';
    };
    // ─── Screenshot → crop overlay ──────────────────────────────────────────────
    const handleScreenshot = () => setScreenshotOpen(true);
    // ─── Scan ────────────────────────────────────────────────────────────────────
    const handleScan = () => {
        const DWT = window.Dynamsoft;
        if (typeof DWT !== 'undefined') {
            try {
                const dwt = DWT.DWObject ?? DWT.WebTwainEnv?.GetWebTwain(containerId);
                if (dwt) {
                    dwt.AcquireImage({}, () => {
                        // Convert scanned image to File
                        dwt.ConvertToBlob([0], (blob) => {
                            const file = new File([blob], `scan-${Date.now()}.png`, { type: 'image/png' });
                            onFilesAdded([file]);
                            dwt.RemoveAllImages();
                        }, () => setSnackbar('שגיאה בהמרת הסריקה'));
                    }, () => { });
                }
            }
            catch {
                setSnackbar('שגיאה בטעינת הסורק');
            }
        }
        else {
            // Fallback: camera capture
            setSnackbar('סורק לא זוהה — מצלמה תשמש כחלופה');
            setTimeout(() => scanFallbackRef.current?.click(), 300);
        }
    };
    // ─── Render ──────────────────────────────────────────────────────────────────
    return (_jsxs(_Fragment, { children: [_jsx("input", { ref: fileInputRef, type: "file", multiple: multiple, accept: acceptStr, style: { display: 'none' }, onChange: handleFileInput }), camera && (_jsx("input", { ref: cameraRef, type: "file", accept: "image/*", capture: "environment", style: { display: 'none' }, onChange: handleFileInput })), _jsx("input", { ref: scanFallbackRef, type: "file", accept: "image/*", capture: "environment", style: { display: 'none' }, onChange: handleFileInput }), _jsxs(Box, { className: "ips-drop-zone", onDragOver: handleDragOver, onDragLeave: handleDragLeave, onDrop: handleDrop, sx: {
                    border: `2px ${isDragOver ? 'solid' : 'dashed'}`,
                    borderColor: isDragOver
                        ? theme.palette.primary.main
                        : theme.palette.divider ?? theme.palette.grey[300],
                    borderRadius: 2,
                    bgcolor: isDragOver
                        ? alpha(theme.palette.primary.main, 0.05)
                        : 'background.paper',
                    p: 3,
                    textAlign: 'center',
                    transition: 'all 0.2s',
                    opacity: disabled ? 0.5 : 1,
                    pointerEvents: disabled ? 'none' : 'auto',
                    cursor: 'default',
                }, children: [_jsx(Typography, { className: "ips-drop-zone-hint", variant: "body1", color: "text.secondary", sx: { mb: separatorLabel ? 1 : 2 }, children: "\uD83D\uDDC2\u00A0 \u05D2\u05E8\u05D5\u05E8 \u05E7\u05D1\u05E6\u05D9\u05DD \u05DC\u05DB\u05D0\u05DF" }), separatorLabel && (_jsx(Typography, { className: "ips-drop-zone-separator", variant: "body2", color: "text.secondary", sx: { mb: 1 }, children: separatorLabel })), screenshotError && (_jsx(Alert, { severity: "error", sx: { mb: 1, textAlign: 'right' }, onClose: () => setScreenshotError(null), children: screenshotError })), _jsxs(Box, { className: "ips-drop-zone-buttons", sx: { display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }, children: [_jsx(Button, { variant: "outlined", size: "small", startIcon: _jsx(FolderOpenIcon, {}), onClick: () => fileInputRef.current?.click(), children: "\u05E2\u05D9\u05D9\u05DF \u05D1\u05E7\u05D1\u05E6\u05D9\u05DD" }), camera && (_jsx(Button, { variant: "outlined", size: "small", startIcon: _jsx(CameraAltIcon, {}), onClick: () => setCameraOpen(true), children: "\u05DE\u05E6\u05DC\u05DE\u05D4" })), screenshot && (_jsx(Button, { variant: "outlined", size: "small", startIcon: _jsx(ScreenshotMonitorIcon, {}), onClick: handleScreenshot, children: "\u05E6\u05D9\u05DC\u05D5\u05DD \u05DE\u05E1\u05DA" })), scan && (_jsx(Button, { variant: "outlined", size: "small", startIcon: _jsx(ScannerIcon, {}), onClick: () => setScanOpen(true), children: "\u05E1\u05E8\u05D9\u05E7\u05D4" }))] })] }), _jsx(Snackbar, { open: Boolean(snackbar), autoHideDuration: 4000, onClose: () => setSnackbar(null), anchorOrigin: { vertical: 'bottom', horizontal: 'center' }, message: snackbar }), _jsx(CameraDialog, { open: cameraOpen, onClose: () => setCameraOpen(false), onCapture: file => { onFilesAdded([file]); setCameraOpen(false); } }), scan && (_jsx(ScanDialog, { open: scanOpen, onClose: () => setScanOpen(false), onScan: file => { onFilesAdded([file]); setScanOpen(false); }, containerId: containerId })), screenshotOpen && (_jsx(ScreenCropOverlay, { onCrop: file => { onFilesAdded([file]); setScreenshotOpen(false); }, onCancel: () => setScreenshotOpen(false) }))] }));
}
IpsDropZone.displayName = 'IpsDropZone';
