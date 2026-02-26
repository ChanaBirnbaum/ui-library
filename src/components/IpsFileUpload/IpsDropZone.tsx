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
import CropFreeIcon from '@mui/icons-material/CropFree'
import FolderOpenIcon from '@mui/icons-material/FolderOpen'
import ScreenshotMonitorIcon from '@mui/icons-material/ScreenshotMonitor'
import CircularProgress from '@mui/material/CircularProgress'
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
  const [screenshotStep, setScreenshotStep] = useState<'idle' | 'waiting' | 'crop'>('idle')
  const [cropBitmap, setCropBitmap]         = useState<ImageBitmap | null>(null)

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

  const handleScreenshot = async () => {
    setScreenshotError(null)
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: { frameRate: 1 } as MediaTrackConstraints,
        // @ts-expect-error non-standard Chrome hints
        selfBrowserSurface: 'exclude',
        systemAudio:        'exclude',
      })

      const video     = document.createElement('video')
      video.srcObject = stream
      video.muted     = true

      await new Promise<void>((resolve, reject) => {
        video.onloadedmetadata = () => video.play().then(resolve).catch(reject)
        video.onerror = reject
      })

      await new Promise<void>(r => requestAnimationFrame(() => { requestAnimationFrame(() => r()) }))

      const canvas  = document.createElement('canvas')
      canvas.width  = video.videoWidth  || window.screen.width
      canvas.height = video.videoHeight || window.screen.height
      canvas.getContext('2d')!.drawImage(video, 0, 0)

      stream.getTracks().forEach(t => t.stop())
      video.srcObject = null

      const bitmap = await createImageBitmap(canvas)

      // If user went to another tab/window — wait for them to return, then show overlay
      if (document.visibilityState === 'hidden') {
        setScreenshotStep('waiting')
        await new Promise<void>(resolve => {
          const handler = () => {
            if (document.visibilityState === 'visible') {
              document.removeEventListener('visibilitychange', handler)
              resolve()
            }
          }
          document.addEventListener('visibilitychange', handler)
        })
      }

      setScreenshotStep('crop')
      setCropBitmap(bitmap)
    } catch (err: unknown) {
      setScreenshotStep('idle')
      if (err instanceof Error && err.name === 'NotAllowedError') {
        setScreenshotError('הגישה למסך נדחתה על ידי המשתמש')
      } else {
        setScreenshotError('אירעה שגיאה בצילום המסך')
      }
    }
  }

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
              startIcon={screenshotStep === 'waiting'
                ? <CircularProgress size={14} />
                : <ScreenshotMonitorIcon />
              }
              onClick={handleScreenshot}
              disabled={screenshotStep !== 'idle'}
            >
              {screenshotStep === 'waiting' ? 'ממתין לחזרה...' : 'צילום מסך'}
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

      {/* Screen crop overlay — shown after getDisplayMedia capture */}
      {cropBitmap && (
        <ScreenCropOverlay
          imageBitmap={cropBitmap}
          onCrop={file => { onFilesAdded([file]); setCropBitmap(null); setScreenshotStep('idle') }}
          onCancel={() => { setCropBitmap(null); setScreenshotStep('idle') }}
        />
      )}
    </>
  )
}

IpsDropZone.displayName = 'IpsDropZone'
