interface CameraDialogProps {
    open: boolean;
    onClose: () => void;
    onCapture: (file: File) => void;
}
export declare function CameraDialog({ open, onClose, onCapture }: CameraDialogProps): import("react/jsx-runtime").JSX.Element;
export {};
