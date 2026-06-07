import React, { useRef, useState, useCallback, useEffect } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid'

interface CameraDialogProps {
  open: boolean
  onClose: () => void
  onCapture: (file: File) => void
}

export function CameraDialog({ open, onClose, onCapture }: CameraDialogProps) {
  const videoRef   = useRef<HTMLVideoElement>(null)
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const streamRef  = useRef<MediaStream | null>(null)
  const [error, setError]           = useState<string | null>(null)
  const [loading, setLoading]       = useState(false)
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('environment')
  const [preview, setPreview]       = useState<string | null>(null)
  const [ready, setReady]           = useState(false)

  const stopCamera = useCallback(() => {
    streamRef.current?.getTracks().forEach(t => t.stop())
    streamRef.current = null
    setReady(false)
  }, [])

  const startCamera = useCallback(async () => {
    stopCamera()
    setLoading(true)
    setError(null)
    setReady(false)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode, width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: false,
      })
      streamRef.current = stream
      // videoRef may not be in DOM yet — wait for it
      const attachStream = () => {
        const video = videoRef.current
        if (!video) { requestAnimationFrame(attachStream); return }
        video.srcObject = stream
        video.onloadedmetadata = () => {
          video.play()
            .then(() => { setLoading(false); setReady(true) })
            .catch(() => { setLoading(false); setReady(true) })
        }
      }
      attachStream()
    } catch {
      setError('לא ניתן לגשת למצלמה. ודא שניתנה הרשאה בדפדפן.')
      setLoading(false)
    }
  }, [facingMode, stopCamera])

  useEffect(() => {
    if (!open) { stopCamera(); setPreview(null); setError(null); return }
    setPreview(null)
    startCamera()
    return () => stopCamera()
  }, [open, facingMode]) // eslint-disable-line react-hooks/exhaustive-deps

  const capture = useCallback(() => {
    const video  = videoRef.current
    const canvas = canvasRef.current
    if (!video || !canvas || video.videoWidth === 0) return
    canvas.width  = video.videoWidth
    canvas.height = video.videoHeight
    canvas.getContext('2d')!.drawImage(video, 0, 0)
    setPreview(canvas.toDataURL('image/png'))
    stopCamera()
  }, [stopCamera])

  function retake() {
    setPreview(null)
    startCamera()
  }

  function confirmCapture() {
    const canvas = canvasRef.current
    if (!canvas) return
    canvas.toBlob(blob => {
      if (!blob) return
      onCapture(new File([blob], `camera-${Date.now()}.png`, { type: 'image/png' }))
      handleClose()
    }, 'image/png')
  }

  function handleClose() {
    stopCamera()
    setPreview(null)
    setError(null)
    onClose()
  }

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <CameraAltIcon /> צילום תמונה
      </DialogTitle>

      <DialogContent>
        {error && <Typography color="error" sx={{ mb: 1 }}>{error}</Typography>}

        {/* Live preview */}
        {!preview && (
          <Box sx={{ position: 'relative', width: '100%', bgcolor: '#000', borderRadius: 1, overflow: 'hidden', minHeight: 200 }}>
            {loading && (
              <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CircularProgress sx={{ color: '#fff' }} />
              </Box>
            )}
            <video
              ref={videoRef}
              style={{ width: '100%', display: 'block' }}
              autoPlay
              playsInline
              muted
            />
          </Box>
        )}

        {/* Captured preview */}
        {preview && (
          <Box sx={{ width: '100%', borderRadius: 1, overflow: 'hidden' }}>
            <img src={preview} alt="captured" style={{ width: '100%', display: 'block' }} />
          </Box>
        )}

        <canvas ref={canvasRef} style={{ display: 'none' }} />
      </DialogContent>

      <DialogActions sx={{ justifyContent: 'space-between', px: 3, pb: 2 }}>
        <Button onClick={handleClose} color="inherit">ביטול</Button>

        {!preview ? (
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              variant="outlined"
              startIcon={<FlipCameraAndroidIcon />}
              onClick={() => setFacingMode(m => m === 'user' ? 'environment' : 'user')}
            >
              הפוך מצלמה
            </Button>
            <Button
              variant="contained"
              startIcon={<CameraAltIcon />}
              onClick={capture}
              disabled={!ready || !!error}
            >
              צלם
            </Button>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button variant="outlined" onClick={retake}>צלם שוב</Button>
            <Button variant="contained" onClick={confirmCapture}>השתמש בתמונה</Button>
          </Box>
        )}
      </DialogActions>
    </Dialog>
  )
}
