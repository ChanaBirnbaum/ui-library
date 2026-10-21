import { default as React } from 'react';
import { ToastItem } from './IpsToast.types';

interface IpsToastItemProps {
    toast: ToastItem;
    onClose: (id: number) => void;
    /** Accessible name of the close button */
    closeButtonLabel: string;
}
/** Distance of the toasts from the screen edges (the provider's container offset) */
export declare const TOAST_EDGE_OFFSET_PX = 24;
export declare function IpsToastItem({ toast, onClose, closeButtonLabel }: IpsToastItemProps): React.JSX.Element;
export {};
