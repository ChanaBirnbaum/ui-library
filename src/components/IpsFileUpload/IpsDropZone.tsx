import React, { useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import { useTheme, alpha } from '@mui/material/styles'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import ScannerIcon from '@mui/icons-material/Scanner'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor'
import { CameraDialog } from './CameraDialog'
import { ScanDialog } from './ScanDialog'
import { ScreenCropOverlay } from './ScreenCropOverlay'

import type { IpsDropZoneProps } from './IpsFileUpload.types'

export function IpsDropZone({
  onFilesAdded,
  camera     = false,
  screenshot = true,
  scan       = false,
  accept,
  multiple   = true,
  disabled   = false,
  containerId,
}: IpsDropZoneProps & { containerId?: string; screenshot?: boolean }) {
  const theme        = useTheme()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const cameraRef    = useRef<HTMLInputElement>(null)
  const scanFallbackRef = useRef<HTMLInputElement>(null)

  const [isDragOver, setIsDragOver]         = useState(false)
  const [snackbar,   setSnackbar]           = useState<string | null>(null)
  const [screenshotError, setScreenshotError] = useState<string | null>(null)
  const [cameraOpen, setCameraOpen]         = useState(false)
  const [scanOpen,   setScanOpen]           = useState(false)
  const [screenshotOpen, setScreenshotOpen]     = useState(false)

  const acceptStr = accept?.join(',')

  // ─── Drag events ────────────────────────────────────────────────────────────

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    if (!disabled) setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    if (disabled) return
    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) onFilesAdded(files)
  }

  // ─── File input ──────────────────────────────────────────────────────────────

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? [])
    if (files.length > 0) onFilesAdded(files)
    e.target.value = ''
  }

  // ─── Screenshot → crop overlay ──────────────────────────────────────────────

  const handleScreenshot = () => setScreenshotOpen(true)

  // ─── Scan ────────────────────────────────────────────────────────────────────

  const handleScan = () => {
    const DWT = (window as any).Dynamsoft
    if (typeof DWT !== 'undefined') {
      try {
        const dwt = DWT.DWObject ?? DWT.WebTwainEnv?.GetWebTwain(containerId)
        if (dwt) {
          dwt.AcquireImage(
            {},
            () => {
              // Convert scanned image to File
              dwt.ConvertToBlob(
                [0],
                (blob: Blob) => {
                  const file = new File([blob], `scan-${Date.now()}.png`, { type: 'image/png' })
                  onFilesAdded([file])
                  dwt.RemoveAllImages()
                },
                () => setSnackbar('שגיאה בהמרת הסריקה')
              )
            },
            () => { /* scan cancelled — no action */ }
          )
        }
      } catch {
        setSnackbar('שגיאה בטעינת הסורק')
      }
    } else {
      // Fallback: camera capture
      setSnackbar('סורק לא זוהה — מצלמה תשמש כחלופה')
      setTimeout(() => scanFallbackRef.current?.click(), 300)
    }
  }

  // ─── Render ──────────────────────────────────────────────────────────────────

  return (
    <>
      {/* Hidden file inputs */}
      <input
        ref={fileInputRef}
        type="file"
        multiple={multiple}
        accept={acceptStr}
        style={{ display: 'none' }}
        onChange={handleFileInput}
      />
      {camera && (
        <input
          ref={cameraRef}
          type="file"
          accept="image/*"
          capture="environment"
          style={{ display: 'none' }}
          onChange={handleFileInput}
        />
      )}
      <input
        ref={scanFallbackRef}
        type="file"
        accept="image/*"
        capture="environment"
        style={{ display: 'none' }}
        onChange={handleFileInput}
      />

      {/* Drop zone */}
      <Box
        className="ips-drop-zone"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        sx={{
          border: `2px ${isDragOver ? 'solid' : 'dashed'}`,
          borderColor: isDragOver
            ? theme.palette.primary.main
            : theme.palette.divider ?? theme.palette.grey[300],
          borderRadius: 2,
          bgcolor: isDragOver
            ? alpha(theme.palette.primary.main, 0.05)
            : 'background.paper',
          p: 3,
          textAlign: 'center',
          transition: 'all 0.2s',
          opacity: disabled ? 0.5 : 1,
          pointerEvents: disabled ? 'none' : 'auto',
          cursor: 'default',
        }}
      >
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          🗂&nbsp; גרור קבצים לכאן
        </Typography>

        {screenshotError && (
          <Alert severity="error" sx={{ mb: 1, textAlign: 'right' }} onClose={() => setScreenshotError(null)}>
            {screenshotError}
          </Alert>
        )}

        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
          {/* Browse */}
          <Button
            variant="outlined"
            size="small"
            startIcon={<FolderOpenIcon />}
            onClick={() => fileInputRef.current?.click()}
          >
            עיין בקבצים
          </Button>

          {/* Camera — opens CameraDialog with live preview */}
          {camera && (
            <Button
              variant="outlined"
              size="small"
              startIcon={<CameraAltIcon />}
              onClick={() => setCameraOpen(true)}
            >
              מצלמה
            </Button>
          )}

          {/* Screenshot */}
          {screenshot && (
            <Button
              variant="outlined"
              size="small"
              startIcon={<ScreenshotMonitorIcon />}
              onClick={handleScreenshot}
            >
              צילום מסך
            </Button>
          )}

          {/* Scan — opens ScanDialog (Dynamsoft Web TWAIN) */}
          {scan && (
            <Button
              variant="outlined"
              size="small"
              startIcon={<ScannerIcon />}
              onClick={() => setScanOpen(true)}
            >
              סריקה
            </Button>
          )}
        </Box>
      </Box>

      {/* Snackbar for scan fallback message */}
      <Snackbar
        open={Boolean(snackbar)}
        autoHideDuration={4000}
        onClose={() => setSnackbar(null)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        message={snackbar}
      />

      {/* Camera dialog — getUserMedia live preview */}
      <CameraDialog
        open={cameraOpen}
        onClose={() => setCameraOpen(false)}
        onCapture={file => { onFilesAdded([file]); setCameraOpen(false) }}
      />

      {/* Scan dialog — Dynamsoft Web TWAIN */}
      {scan && (
        <ScanDialog
          open={scanOpen}
          onClose={() => setScanOpen(false)}
          onScan={file => { onFilesAdded([file]); setScanOpen(false) }}
          containerId={containerId}
        />
      )}

      {/* Screen crop overlay — html2canvas based, current page only */}
      {screenshotOpen && (
        <ScreenCropOverlay
          onCrop={file => { onFilesAdded([file]); setScreenshotOpen(false) }}
          onCancel={() => setScreenshotOpen(false)}
        />
      )}
    </>
  )
}

IpsDropZone.displayName = 'IpsDropZone'
