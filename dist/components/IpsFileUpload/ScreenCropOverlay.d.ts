interface ScreenCropOverlayProps {
    imageBitmap: ImageBitmap;
    onCrop: (file: File) => void;
    onCancel: () => void;
}
/**
 * Full-screen overlay drawn on a canvas.
 * User drags a rectangle to select the crop area.
 */
export declare function ScreenCropOverlay({ imageBitmap, onCrop, onCancel }: ScreenCropOverlayProps): import("react/jsx-runtime").JSX.Element;
export {};
