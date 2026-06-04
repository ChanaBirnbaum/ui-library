import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'

export interface DeleteConfirmDialogProps {
  open: boolean
  onConfirm: () => void
  onCancel: () => void
  message?: string
}

export function DeleteConfirmDialog({
  open,
  onConfirm,
  onCancel,
  message = 'האם אתה בטוח שברצונך למחוק רשומה זו?',
}: DeleteConfirmDialogProps) {
  return (
    <Dialog open={open} onClose={onCancel} maxWidth="xs" fullWidth>
      <DialogTitle>אישור מחיקה</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="inherit">
          ביטול
        </Button>
        <Button onClick={onConfirm} color="error" variant="contained" autoFocus>
          מחק
        </Button>
      </DialogActions>
    </Dialog>
  )
}
