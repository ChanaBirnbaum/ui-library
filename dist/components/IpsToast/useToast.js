import { useContext } from 'react';
import { IpsToastContext } from './IpsToastContext';
/**
 * Returns the `addToast(type, message)` function from the nearest
 * `IpsToastProvider` ancestor.
 *
 * @example
 * const addToast = useToast()
 * addToast(TOAST_TYPES.SUCCESS, 'Saved successfully!')
 */
export const useToast = () => useContext(IpsToastContext);
