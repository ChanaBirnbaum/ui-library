import { default as React } from 'react';

export declare const TOAST_TYPES: {
    readonly SUCCESS: "success";
    readonly INFO: "info";
    readonly WARNING: "warning";
    readonly DANGER: "danger";
};
export type ToastType = typeof TOAST_TYPES[keyof typeof TOAST_TYPES];
export interface ToastItem {
    id: number;
    message: string;
    type: string;
    icon: React.ReactNode;
    bgColor: string;
}
export type IpsToastContextType = (type: string, message: string) => void;
export type ToastPosition = 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
export interface IpsToastProviderProps {
    /** App content to wrap */
    children: React.ReactNode;
    /** Auto-dismiss delay in milliseconds (default: 3000) */
    deleteTime?: number;
    /** Maximum simultaneous toasts shown (default: 5) */
    maxToasts?: number;
    /** Screen position of the toast stack (default: 'bottom-right') */
    position?: ToastPosition;
}
