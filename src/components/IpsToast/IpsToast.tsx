import React from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CloseIcon from '@mui/icons-material/Close'
import type { ToastItem } from './IpsToast.types'

interface IpsToastItemProps {
  toast: ToastItem
  onClose: (id: number) => void
}

export function IpsToastItem({ toast, onClose }: IpsToastItemProps) {
  return (
    <Box
      className="ips-toast"
      role="alert"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        px: 2,
        py: 1.5,
        mb: 1,
        borderRadius: 2,
        backgroundColor: toast.bgColor,
        color: 'white',
        boxShadow: 4,
        minWidth: '22em',
        maxWidth: '32em',
        animation: 'ips-toast-enter 0.3s ease forwards',
        '@keyframes ips-toast-enter': {
          from: { transform: 'translateX(100%)', opacity: 0 },
          to:   { transform: 'translateX(0)',    opacity: 1 },
        },
      }}
    >
      <Box sx={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
        {toast.icon}
      </Box>
      <Typography variant="body2" sx={{ flex: 1, fontWeight: 500, lineHeight: 1.4 }}>
        {toast.message}
      </Typography>
      <IconButton
        size="small"
        onClick={() => onClose(toast.id)}
        sx={{ color: 'white', ml: 0.5, flexShrink: 0 }}
        aria-label="close"
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Box>
  )
}
