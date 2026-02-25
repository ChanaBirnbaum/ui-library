import type React from 'react'

// ─── Toast type constants ─────────────────────────────────────────────────────

export const TOAST_TYPES = {
  SUCCESS: 'success',
  INFO:    'info',
  WARNING: 'warning',
  DANGER:  'danger',
} as const

export type ToastType = typeof TOAST_TYPES[keyof typeof TOAST_TYPES]

// ─── Internal toast item (used inside the provider) ───────────────────────────

export interface ToastItem {
  id: number
  message: string
  type: string
  icon: React.ReactNode
  bgColor: string
}

// ─── Context function signature ───────────────────────────────────────────────

export type IpsToastContextType = (type: string, message: string) => void

// ─── Provider props ───────────────────────────────────────────────────────────

export type ToastPosition =
  | 'bottom-right'
  | 'bottom-left'
  | 'top-right'
  | 'top-left'

export interface IpsToastProviderProps {
  /** App content to wrap */
  children: React.ReactNode
  /** Auto-dismiss delay in milliseconds (default: 3000) */
  deleteTime?: number
  /** Maximum simultaneous toasts shown (default: 5) */
  maxToasts?: number
  /** Screen position of the toast stack (default: 'bottom-right') */
  position?: ToastPosition
}
