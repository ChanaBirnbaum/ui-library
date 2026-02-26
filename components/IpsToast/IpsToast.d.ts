import { ToastItem } from './IpsToast.types';

interface IpsToastItemProps {
    toast: ToastItem;
    onClose: (id: number) => void;
}
export declare function IpsToastItem({ toast, onClose }: IpsToastItemProps): import("react/jsx-runtime").JSX.Element;
export {};
