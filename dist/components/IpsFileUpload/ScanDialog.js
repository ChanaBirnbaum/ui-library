import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 * ScanDialog — Dynamsoft Web TWAIN integration
 *
 * ## הוראות התקנה למפתחים
 *
 * ### 1. התקנת הספרייה
 * ```bash
 * npm install dwt
 * ```
 * או הוספת script tag ל-index.html:
 * ```html
 * <script src="https://unpkg.com/dwt/dist/dynamsoft.webtwain.min.js"></script>
 * ```
 *
 * ### 2. הגדרת Product Key
 * ```ts
 * // ב-index.tsx / main.tsx לפני ReactDOM.render:
 * window.Dynamsoft.DWT.ProductKey = 'YOUR_PRODUCT_KEY'
 * window.Dynamsoft.DWT.ResourcesPath = '/node_modules/dwt/dist'
 * ```
 *
 * ### 3. שימוש בקומפוננטה
 * ```tsx
 * <IpsFileUpload
 *   sviva="prod"
 *   system="my-site"
 *   scan                          // מציג כפתור סריקה
 *   containerId="dwt-container"   // ID ייחודי לכל instance של DWT
 * />
 * ```
 *
 * ### 4. דרישות סביבה
 * - Windows בלבד (DWT תומך בסורקי TWAIN/WIA)
 * - Chrome / Edge מומלצים
 * - HTTPS בסביבת production
 *
 * @see https://www.dynamsoft.com/web-twain/docs/
 */
import { useRef, useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import ScannerIcon from '@mui/icons-material/Scanner';
export function ScanDialog({ open, onClose, onScan, containerId = 'dwtcontrolContainer' }) {
    const [status, setStatus] = useState('מאתחל...');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const dwtRef = useRef(null);
    useEffect(() => {
        if (!open)
            return;
        setError(null);
        initDWT();
    }, [open]);
    function getDWT() {
        return window.Dynamsoft?.DWT.GetWebTwain(containerId) ?? null;
    }
    async function initDWT() {
        setLoading(true);
        setStatus('מאתחל Web TWAIN...');
        try {
            if (!window.Dynamsoft) {
                throw new Error('NO_DWT');
            }
            window.Dynamsoft.DWT.RegisterEvent('OnWebTwainReady', () => {
                dwtRef.current = getDWT();
                setStatus('מוכן לסריקה');
                setLoading(false);
            });
            window.Dynamsoft.DWT.Load();
        }
        catch (e) {
            const msg = e instanceof Error ? e.message : '';
            if (msg === 'NO_DWT') {
                setError('NO_DWT');
            }
            else {
                setError(e instanceof Error ? e.message : 'שגיאה באתחול סורק');
            }
            setLoading(false);
        }
    }
    async function startScan() {
        const dwt = dwtRef.current ?? getDWT();
        if (!dwt) {
            setError('Web TWAIN לא מוכן');
            return;
        }
        setLoading(true);
        setError(null);
        try {
            await dwt.SelectSourceAsync();
            dwt.OpenSource();
            dwt.RegisterEvent('OnPostTransfer', () => {
                setStatus(`נסרקו ${dwt.HowManyImagesInBuffer} עמודים`);
            });
            dwt.RegisterEvent('OnPostAllTransfers', () => {
                dwt.CloseSource();
                convertAndReturn(dwt);
            });
            dwt.AcquireImage();
        }
        catch (e) {
            setError('שגיאה בבחירת סורק');
            setLoading(false);
        }
    }
    function convertAndReturn(dwt) {
        const indices = Array.from({ length: dwt.HowManyImagesInBuffer }, (_, i) => i);
        dwt.ConvertToBlob(indices, dwt.EnumDWT_ImageType.IT_PNG, (blob) => {
            const file = new File([blob], `scan-${Date.now()}.png`, { type: 'image/png' });
            onScan(file);
            handleClose();
        }, (_idx, _type, msg) => {
            setError(`שגיאת המרה: ${msg}`);
            setLoading(false);
        });
    }
    function handleClose() {
        setError(null);
        setStatus('מאתחל...');
        setLoading(false);
        onClose();
    }
    return (_jsxs(Dialog, { open: open, onClose: handleClose, maxWidth: "xs", fullWidth: true, children: [_jsxs(DialogTitle, { sx: { display: 'flex', alignItems: 'center', gap: 1 }, children: [_jsx(ScannerIcon, {}), " \u05E1\u05E8\u05D9\u05E7\u05EA \u05DE\u05E1\u05DE\u05DA"] }), _jsxs(DialogContent, { children: [_jsx(Box, { id: containerId, sx: { display: 'none' } }), error === 'NO_DWT' ? (_jsxs(Box, { sx: { py: 1, textAlign: 'center' }, children: [_jsx(Typography, { fontSize: 40, sx: { mb: 1 }, children: "\uD83D\uDDA8\uFE0F" }), _jsx(Typography, { fontWeight: 600, gutterBottom: true, children: "\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0 \u05E1\u05D5\u05E8\u05E7 \u05D6\u05DE\u05D9\u05DF" }), _jsx(Typography, { variant: "body2", color: "text.secondary", children: "\u05D5\u05D3\u05D0 \u05E9\u05D4\u05E1\u05D5\u05E8\u05E7 \u05DE\u05D7\u05D5\u05D1\u05E8 \u05DC\u05DE\u05D7\u05E9\u05D1 \u05D5\u05DE\u05D5\u05E4\u05E2\u05DC, \u05D5\u05E0\u05E1\u05D4 \u05E9\u05D5\u05D1." }), _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { mt: 0.5 }, children: "\u05DC\u05EA\u05DE\u05D9\u05DB\u05D4 \u05E4\u05E0\u05D4 \u05DC\u05DE\u05E0\u05D4\u05DC \u05D4\u05DE\u05E2\u05E8\u05DB\u05EA." })] })) : error ? (_jsx(Typography, { color: "error", children: error })) : loading ? (_jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 2, py: 2 }, children: [_jsx(CircularProgress, { size: 24 }), _jsx(Typography, { children: status })] })) : (_jsx(Typography, { color: "text.secondary", children: status }))] }), _jsxs(DialogActions, { sx: { px: 3, pb: 2 }, children: [_jsx(Button, { onClick: handleClose, color: "inherit", children: "\u05D1\u05D9\u05D8\u05D5\u05DC" }), _jsx(Button, { variant: "contained", startIcon: _jsx(ScannerIcon, {}), onClick: startScan, disabled: loading || !!error, children: "\u05E1\u05E8\u05D5\u05E7" })] })] }));
}
