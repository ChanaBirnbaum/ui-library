import { default as React } from 'react';

export interface DeleteConfirmDialogProps {
    open: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    message?: string;
}
export declare function DeleteConfirmDialog({ open, onConfirm, onCancel, message, }: DeleteConfirmDialogProps): React.JSX.Element;
