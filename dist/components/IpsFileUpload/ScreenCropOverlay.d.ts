import { default as React } from 'react';

interface ScreenCropOverlayProps {
    onCrop: (file: File) => void;
    onCancel: () => void;
}
/**
 * Full-screen snipping overlay — like Win+Shift+S.
 * Uses html2canvas to capture the current page only (no getDisplayMedia / no multi-screen picker).
 * User drags to select an area → cropped PNG is returned as a File.
 */
export declare function ScreenCropOverlay({ onCrop, onCancel }: ScreenCropOverlayProps): React.JSX.Element;
export {};
