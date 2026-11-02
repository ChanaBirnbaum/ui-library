import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState, useCallback, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
export function CameraDialog({ open, onClose, onCapture }) {
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const streamRef = useRef(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [facingMode, setFacingMode] = useState('environment');
    const [preview, setPreview] = useState(null);
    const [ready, setReady] = useState(false);
    const stopCamera = useCallback(() => {
        streamRef.current?.getTracks().forEach(t => t.stop());
        streamRef.current = null;
        setReady(false);
    }, []);
    const startCamera = useCallback(async () => {
        stopCamera();
        setLoading(true);
        setError(null);
        setReady(false);
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode, width: { ideal: 1280 }, height: { ideal: 720 } },
                audio: false,
            });
            streamRef.current = stream;
            // videoRef may not be in DOM yet — wait for it
            const attachStream = () => {
                const video = videoRef.current;
                if (!video) {
                    requestAnimationFrame(attachStream);
                    return;
                }
                video.srcObject = stream;
                video.onloadedmetadata = () => {
                    video.play()
                        .then(() => { setLoading(false); setReady(true); })
                        .catch(() => { setLoading(false); setReady(true); });
                };
            };
            attachStream();
        }
        catch {
            setError('לא ניתן לגשת למצלמה. ודא שניתנה הרשאה בדפדפן.');
            setLoading(false);
        }
    }, [facingMode, stopCamera]);
    useEffect(() => {
        if (!open) {
            stopCamera();
            setPreview(null);
            setError(null);
            return;
        }
        setPreview(null);
        startCamera();
        return () => stopCamera();
    }, [open, facingMode]); // eslint-disable-line react-hooks/exhaustive-deps
    const capture = useCallback(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (!video || !canvas || video.videoWidth === 0)
            return;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext('2d').drawImage(video, 0, 0);
        setPreview(canvas.toDataURL('image/png'));
        stopCamera();
    }, [stopCamera]);
    function retake() {
        setPreview(null);
        startCamera();
    }
    function confirmCapture() {
        const canvas = canvasRef.current;
        if (!canvas)
            return;
        canvas.toBlob(blob => {
            if (!blob)
                return;
            onCapture(new File([blob], `camera-${Date.now()}.png`, { type: 'image/png' }));
            handleClose();
        }, 'image/png');
    }
    function handleClose() {
        stopCamera();
        setPreview(null);
        setError(null);
        onClose();
    }
    return (_jsxs(Dialog, { open: open, onClose: handleClose, maxWidth: "sm", fullWidth: true, children: [_jsxs(DialogTitle, { sx: { display: 'flex', alignItems: 'center', gap: 1 }, children: [_jsx(CameraAltIcon, {}), " \u05E6\u05D9\u05DC\u05D5\u05DD \u05EA\u05DE\u05D5\u05E0\u05D4"] }), _jsxs(DialogContent, { children: [error && _jsx(Typography, { color: "error", sx: { mb: 1 }, children: error }), !preview && (_jsxs(Box, { sx: { position: 'relative', width: '100%', bgcolor: '#000', borderRadius: 1, overflow: 'hidden', minHeight: 200 }, children: [loading && (_jsx(Box, { sx: { position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }, children: _jsx(CircularProgress, { sx: { color: '#fff' } }) })), _jsx("video", { ref: videoRef, style: { width: '100%', display: 'block' }, autoPlay: true, playsInline: true, muted: true })] })), preview && (_jsx(Box, { sx: { width: '100%', borderRadius: 1, overflow: 'hidden' }, children: _jsx("img", { src: preview, alt: "captured", style: { width: '100%', display: 'block' } }) })), _jsx("canvas", { ref: canvasRef, style: { display: 'none' } })] }), _jsxs(DialogActions, { sx: { justifyContent: 'space-between', px: 3, pb: 2 }, children: [_jsx(Button, { onClick: handleClose, color: "inherit", children: "\u05D1\u05D9\u05D8\u05D5\u05DC" }), !preview ? (_jsxs(Box, { sx: { display: 'flex', gap: 1 }, children: [_jsx(Button, { variant: "outlined", startIcon: _jsx(FlipCameraAndroidIcon, {}), onClick: () => setFacingMode(m => m === 'user' ? 'environment' : 'user'), children: "\u05D4\u05E4\u05D5\u05DA \u05DE\u05E6\u05DC\u05DE\u05D4" }), _jsx(Button, { variant: "contained", startIcon: _jsx(CameraAltIcon, {}), onClick: capture, disabled: !ready || !!error, children: "\u05E6\u05DC\u05DD" })] })) : (_jsxs(Box, { sx: { display: 'flex', gap: 1 }, children: [_jsx(Button, { variant: "outlined", onClick: retake, children: "\u05E6\u05DC\u05DD \u05E9\u05D5\u05D1" }), _jsx(Button, { variant: "contained", onClick: confirmCapture, children: "\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05EA\u05DE\u05D5\u05E0\u05D4" })] }))] })] }));
}
