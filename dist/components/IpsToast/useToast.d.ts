import { IpsToastContextType } from './IpsToast.types';

/**
 * Returns the `addToast(type, message)` function from the nearest
 * `IpsToastProvider` ancestor.
 *
 * @example
 * const addToast = useToast()
 * addToast(TOAST_TYPES.SUCCESS, 'Saved successfully!')
 */
export declare const useToast: () => IpsToastContextType;
