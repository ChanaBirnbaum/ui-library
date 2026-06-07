import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { useTheme } from '@mui/material/styles'
import ImageIcon from '@mui/icons-material/Image'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile'
import VisibilityIcon from '@mui/icons-material/Visibility'
import DeleteIcon from '@mui/icons-material/Delete'
import CloseIcon from '@mui/icons-material/Close'

import type { IpsFileItemProps } from './IpsFileUpload.types'

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatSize(bytes: number): string {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

function getFileIcon(file: File) {
  if (file.type.startsWith('image/'))      return <ImageIcon fontSize="small" color="primary" />
  if (file.type === 'application/pdf')     return <PictureAsPdfIcon fontSize="small" color="error" />
  return <InsertDriveFileIcon fontSize="small" color="action" />
}

type PreviewType = 'image' | 'pdf' | 'none'

function getPreviewType(file: File): PreviewType {
  if (file.type.startsWith('image/'))  return 'image'
  if (file.type === 'application/pdf') return 'pdf'
  return 'none'
}

// ─── Component ───────────────────────────────────────────────────────────────

export function IpsFileItem({ file, hasError = false, errorMessage, onDelete }: IpsFileItemProps) {
  const theme = useTheme()
  const [previewUrl,  setPreviewUrl]  = useState<string | null>(null)
  const [previewType, setPreviewType] = useState<PreviewType>('none')

  // ─── Preview ──────────────────────────────────────────────────────────────

  const handlePreview = () => {
    const type = getPreviewType(file)
    const url  = URL.createObjectURL(file)

    if (type === 'none') {
      // Open in new tab for unsupported types
      window.open(url, '_blank')
      // Revoke after short delay (browser needs time to open)
      setTimeout(() => URL.revokeObjectURL(url), 1000)
      return
    }

    setPreviewUrl(url)
    setPreviewType(type)
  }

  const handleClosePreview = () => {
    if (previewUrl) URL.revokeObjectURL(previewUrl)
    setPreviewUrl(null)
    setPreviewType('none')
  }

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <>
      <Box
        className="ips-file-item"
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          px: 1.5,
          py: 0.75,
          borderRadius: 1,
          bgcolor: hasError
            ? theme.palette.error.light
            : theme.palette.grey[50],
          border: `1px solid ${hasError ? theme.palette.error.main : theme.palette.divider}`,
          '&:hover': {
            bgcolor: hasError
              ? theme.palette.error.light
              : theme.palette.grey[100],
          },
        }}
      >
        {/* File type icon */}
        <Box sx={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
          {getFileIcon(file)}
        </Box>

        {/* Name + error */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            variant="body2"
            noWrap
            title={file.name}
            sx={{ color: hasError ? 'error.dark' : 'text.primary' }}
          >
            {file.name}
          </Typography>
          {hasError && errorMessage && (
            <Typography variant="caption" color="error.dark">
              {errorMessage}
            </Typography>
          )}
        </Box>

        {/* File size */}
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ flexShrink: 0, whiteSpace: 'nowrap' }}
        >
          {formatSize(file.size)}
        </Typography>

        {/* Preview button */}
        <Tooltip title="תצוגה מקדימה" placement="top">
          <span>
            <IconButton size="small" onClick={handlePreview} aria-label="תצוגה מקדימה">
              <VisibilityIcon fontSize="small" />
            </IconButton>
          </span>
        </Tooltip>

        {/* Delete button */}
        <Tooltip title="מחק" placement="top">
          <span>
            <IconButton
              size="small"
              onClick={() => onDelete(file)}
              aria-label="מחק קובץ"
              sx={{ color: 'error.main' }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </span>
        </Tooltip>
      </Box>

      {/* Preview Dialog */}
      <Dialog
        open={Boolean(previewUrl)}
        onClose={handleClosePreview}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="subtitle1" noWrap sx={{ maxWidth: '80%' }}>
            {file.name}
          </Typography>
          <IconButton size="small" onClick={handleClosePreview} aria-label="סגור">
            <CloseIcon fontSize="small" />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers sx={{ p: 0 }}>
          {previewType === 'image' && previewUrl && (
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <img
                src={previewUrl}
                alt={file.name}
                style={{ maxWidth: '100%', maxHeight: '70vh', objectFit: 'contain' }}
              />
            </Box>
          )}
          {previewType === 'pdf' && previewUrl && (
            <iframe
              src={previewUrl}
              title={file.name}
              width="100%"
              height="500px"
              style={{ border: 'none', display: 'block' }}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}

IpsFileItem.displayName = 'IpsFileItem'
