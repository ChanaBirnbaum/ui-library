import { default as React } from 'react';
import { ToastItem } from './IpsToast.types';

interface IpsToastItemProps {
    toast: ToastItem;
    onClose: (id: number) => void;
}
export declare function IpsToastItem({ toast, onClose }: IpsToastItemProps): React.JSX.Element;
export {};
