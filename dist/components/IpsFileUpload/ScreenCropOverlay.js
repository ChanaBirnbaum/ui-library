import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState, useEffect } from 'react';
/**
 * Full-screen snipping overlay — like Win+Shift+S.
 * Uses html2canvas to capture the current page only (no getDisplayMedia / no multi-screen picker).
 * User drags to select an area → cropped PNG is returned as a File.
 */
export function ScreenCropOverlay({ onCrop, onCancel }) {
    const startRef = useRef(null);
    const [rect, setRect] = useState(null);
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = ''; };
    }, []);
    const handleMouseDown = (e) => {
        startRef.current = { x: e.clientX, y: e.clientY };
        setRect({ x: e.clientX, y: e.clientY, w: 0, h: 0 });
    };
    const handleMouseMove = (e) => {
        if (!startRef.current)
            return;
        setRect({
            x: Math.min(e.clientX, startRef.current.x),
            y: Math.min(e.clientY, startRef.current.y),
            w: Math.abs(e.clientX - startRef.current.x),
            h: Math.abs(e.clientY - startRef.current.y),
        });
    };
    const overlayRef = useRef(null);
    const handleMouseUp = async () => {
        if (!startRef.current || !rect || rect.w < 4 || rect.h < 4) {
            startRef.current = null;
            return;
        }
        // Capture the rect values before clearing state
        const capturedRect = { ...rect };
        startRef.current = null;
        // Hide overlay so it doesn't appear in the screenshot
        if (overlayRef.current)
            overlayRef.current.style.display = 'none';
        const scale = window.devicePixelRatio || 1;
        // Account for page scroll — clientX/Y are viewport coords, html2canvas captures full page
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;
        const h2c = await import('html2canvas');
        const canvas = await h2c.default(document.body, {
            useCORS: true,
            allowTaint: true,
            scale,
            logging: false,
            // Capture only the viewport area the user can see
            x: scrollX,
            y: scrollY,
            width: window.innerWidth,
            height: window.innerHeight,
        });
        // Restore overlay visibility
        if (overlayRef.current)
            overlayRef.current.style.display = '';
        const cropCanvas = document.createElement('canvas');
        cropCanvas.width = capturedRect.w * scale;
        cropCanvas.height = capturedRect.h * scale;
        cropCanvas.getContext('2d').drawImage(canvas, capturedRect.x * scale, capturedRect.y * scale, capturedRect.w * scale, capturedRect.h * scale, 0, 0, capturedRect.w * scale, capturedRect.h * scale);
        cropCanvas.toBlob(blob => {
            if (!blob)
                return;
            onCrop(new File([blob], `screenshot-${Date.now()}.png`, { type: 'image/png' }));
        }, 'image/png');
    };
    return (_jsxs("div", { ref: overlayRef, onMouseDown: handleMouseDown, onMouseMove: handleMouseMove, onMouseUp: handleMouseUp, style: {
            position: 'fixed', inset: 0, zIndex: 99999,
            cursor: 'crosshair', userSelect: 'none',
            backgroundColor: 'rgba(0,0,0,0.25)',
        }, children: [rect && rect.w > 2 && rect.h > 2 && (_jsx("div", { style: {
                    position: 'absolute',
                    left: rect.x,
                    top: rect.y,
                    width: rect.w,
                    height: rect.h,
                    border: '2px solid #1565C0',
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    boxSizing: 'border-box',
                } })), _jsxs("div", { style: {
                    position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)',
                    display: 'flex', gap: 12, alignItems: 'center',
                    background: 'rgba(0,0,0,0.7)', borderRadius: 8, padding: '10px 20px',
                    pointerEvents: 'none',
                }, children: [_jsx("span", { style: { color: '#fff', fontSize: 14 }, children: rect && rect.w > 2 ? 'שחרר כדי לצלם' : 'גרור לבחירת אזור במסך' }), _jsx("button", { onMouseDown: e => e.stopPropagation(), onClick: onCancel, style: {
                            background: 'transparent', color: '#fff', border: '1px solid #fff',
                            borderRadius: 6, padding: '4px 14px', cursor: 'pointer', fontSize: 14,
                            pointerEvents: 'auto',
                        }, children: "\u05D1\u05D9\u05D8\u05D5\u05DC" })] })] }));
}
