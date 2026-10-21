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
    /**
     * Distance in px of a bottom-positioned stack from the bottom of the screen (default: 24, like the other edges).
     * Raise it to keep the toasts above a bottom action bar instead of covering it
     */
    bottomOffset?: number;
    /** Accessible name of each toast's close button (default: 'close'), e.g. in the app's language */
    closeButtonLabel?: string;
}
