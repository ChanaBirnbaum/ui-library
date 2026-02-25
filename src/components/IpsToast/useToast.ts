import { useContext } from 'react'
import { IpsToastContext } from './IpsToastContext'
import type { IpsToastContextType } from './IpsToast.types'

/**
 * Returns the `addToast(type, message)` function from the nearest
 * `IpsToastProvider` ancestor.
 *
 * @example
 * const addToast = useToast()
 * addToast(TOAST_TYPES.SUCCESS, 'Saved successfully!')
 */
export const useToast = (): IpsToastContextType => useContext(IpsToastContext)
