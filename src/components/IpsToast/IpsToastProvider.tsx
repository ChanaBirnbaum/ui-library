import React, { useState, useCallback, useMemo } from 'react'
import ReactDOM from 'react-dom'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline'
import { IpsToastContext } from './IpsToastContext'
import { IpsToastItem } from './IpsToast'
import { TOAST_TYPES } from './IpsToast.types'
import type { ToastItem, IpsToastProviderProps, ToastPosition } from './IpsToast.types'

// ─── Color + icon per type ────────────────────────────────────────────────────

const TOAST_CONFIG: Record<string, { bgColor: string; icon: React.ReactNode }> = {
  [TOAST_TYPES.SUCCESS]: {
    bgColor: '#5cb85c',
    icon: <CheckCircleOutlineIcon fontSize="small" />,
  },
  [TOAST_TYPES.INFO]: {
    bgColor: '#5bc0de',
    icon: <InfoOutlinedIcon fontSize="small" />,
  },
  [TOAST_TYPES.WARNING]: {
    bgColor: '#e4872b',
    icon: <WarningAmberIcon fontSize="small" />,
  },
  [TOAST_TYPES.DANGER]: {
    bgColor: '#d9534f',
    icon: <ErrorOutlineIcon fontSize="small" />,
  },
}

// ─── Position mapping → inline style ─────────────────────────────────────────

function getContainerStyle(position: ToastPosition): React.CSSProperties {
  const base: React.CSSProperties = {
    position: 'fixed',
    zIndex: 10,
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  }
  switch (position) {
    case 'bottom-right': return { ...base, bottom: 24, right: 24 }
    case 'bottom-left':  return { ...base, bottom: 24, left: 24 }
    case 'top-right':    return { ...base, top: 24,    right: 24 }
    case 'top-left':     return { ...base, top: 24,    left: 24 }
  }
}

// ─── Provider ─────────────────────────────────────────────────────────────────

export function IpsToastProvider({
  children,
  deleteTime = 3000,
  maxToasts = 5,
  position = 'bottom-right',
}: IpsToastProviderProps) {
  const [toasts, setToasts] = useState<ToastItem[]>([])

  const generateId = useMemo(() => {
    let counter = 0
    return () => ++counter
  }, [])

  const removeToast = useCallback((id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }, [])

  const addToast = useCallback(
    (type: string, message: string) => {
      const config = TOAST_CONFIG[type] ?? TOAST_CONFIG[TOAST_TYPES.INFO]
      const id = generateId()
      const item: ToastItem = {
        id,
        message,
        type,
        icon: config.icon,
        bgColor: config.bgColor,
      }
      setToasts(prev => {
        const next = [...prev, item]
        // Enforce maxToasts — drop the oldest
        return next.length > maxToasts ? next.slice(next.length - maxToasts) : next
      })
      setTimeout(() => removeToast(id), deleteTime)
    },
    [deleteTime, maxToasts, generateId, removeToast]
  )

  return (
    <IpsToastContext.Provider value={addToast}>
      {children}
      {ReactDOM.createPortal(
        <div
          className="ips-toast-container"
          style={getContainerStyle(position)}
          dir="rtl"
          data-testid="ips-toast-container"
        >
          {toasts.map(toast => (
            <IpsToastItem key={toast.id} toast={toast} onClose={removeToast} />
          ))}
        </div>,
        document.body
      )}
    </IpsToastContext.Provider>
  )
}
