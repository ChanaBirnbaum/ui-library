import { createContext } from 'react';
/**
 * Context that exposes the `addToast(type, message)` function.
 * Consuming components should use the `useToast` hook instead of reading
 * this context directly.
 *
 * Default no-op so the app doesn't crash if someone calls addToast outside
 * an IpsToastProvider.
 */
export const IpsToastContext = createContext((_type, _message) => { });
