import { default as React } from 'react';

interface CameraDialogProps {
    open: boolean;
    onClose: () => void;
    onCapture: (file: File) => void;
}
export declare function CameraDialog({ open, onClose, onCapture }: CameraDialogProps): React.JSX.Element;
export {};
