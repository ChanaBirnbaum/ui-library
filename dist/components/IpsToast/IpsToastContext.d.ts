import { IpsToastContextType } from './IpsToast.types';

/**
 * Context that exposes the `addToast(type, message)` function.
 * Consuming components should use the `useToast` hook instead of reading
 * this context directly.
 *
 * Default no-op so the app doesn't crash if someone calls addToast outside
 * an IpsToastProvider.
 */
export declare const IpsToastContext: import('react').Context<IpsToastContextType>;
