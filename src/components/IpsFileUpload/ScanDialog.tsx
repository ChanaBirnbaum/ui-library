/**
 * ScanDialog — Dynamsoft Web TWAIN integration
 *
 * ## הוראות התקנה למפתחים
 *
 * ### 1. התקנת הספרייה
 * ```bash
 * npm install dwt
 * ```
 * או הוספת script tag ל-index.html:
 * ```html
 * <script src="https://unpkg.com/dwt/dist/dynamsoft.webtwain.min.js"></script>
 * ```
 *
 * ### 2. הגדרת Product Key
 * ```ts
 * // ב-index.tsx / main.tsx לפני ReactDOM.render:
 * window.Dynamsoft.DWT.ProductKey = 'YOUR_PRODUCT_KEY'
 * window.Dynamsoft.DWT.ResourcesPath = '/node_modules/dwt/dist'
 * ```
 *
 * ### 3. שימוש בקומפוננטה
 * ```tsx
 * <IpsFileUpload
 *   sviva="prod"
 *   system="my-site"
 *   scan                          // מציג כפתור סריקה
 *   containerId="dwt-container"   // ID ייחודי לכל instance של DWT
 * />
 * ```
 *
 * ### 4. דרישות סביבה
 * - Windows בלבד (DWT תומך בסורקי TWAIN/WIA)
 * - Chrome / Edge מומלצים
 * - HTTPS בסביבת production
 *
 * @see https://www.dynamsoft.com/web-twain/docs/
 */
import React, { useRef, useState, useEffect } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import ScannerIcon from '@mui/icons-material/Scanner'

interface ScanDialogProps {
  open: boolean
  onClose: () => void
  onScan: (file: File) => void
  containerId?: string
}

// Dynamsoft Web TWAIN type shim
interface DynamsoftWebTWAIN {
  AcquireImage: () => void
  CloseSource: () => void
  SelectSourceAsync: () => Promise<void>
  OpenSource: () => void
  RegisterEvent: (name: string, fn: (...args: unknown[]) => void) => void
  GetImageURL: (idx: number) => string
  HowManyImagesInBuffer: number
  ConvertToBlob: (
    indices: number[],
    type: number,
    successCb: (result: Blob) => void,
    failCb: (idx: number, type: number, msg: string) => void
  ) => void
  EnumDWT_ImageType: { IT_PNG: number }
}

declare global {
  interface Window {
    Dynamsoft?: {
      DWT: {
        Load: () => void
        GetWebTwain: (id: string) => DynamsoftWebTWAIN | null
        RegisterEvent: (name: string, fn: () => void) => void
        ProductKey?: string
      }
    }
  }
}

export function ScanDialog({ open, onClose, onScan, containerId = 'dwtcontrolContainer' }: ScanDialogProps) {
  const [status, setStatus]   = useState<string>('מאתחל...')
  const [error, setError]     = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const dwtRef = useRef<DynamsoftWebTWAIN | null>(null)

  useEffect(() => {
    if (!open) return
    setError(null)
    initDWT()
  }, [open])

  function getDWT(): DynamsoftWebTWAIN | null {
    return window.Dynamsoft?.DWT.GetWebTwain(containerId) ?? null
  }

  async function initDWT() {
    setLoading(true)
    setStatus('מאתחל Web TWAIN...')
    try {
      if (!window.Dynamsoft) {
        throw new Error('NO_DWT')
      }
      window.Dynamsoft.DWT.RegisterEvent('OnWebTwainReady', () => {
        dwtRef.current = getDWT()
        setStatus('מוכן לסריקה')
        setLoading(false)
      })
      window.Dynamsoft.DWT.Load()
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : ''
      if (msg === 'NO_DWT') {
        setError('NO_DWT')
      } else {
        setError(e instanceof Error ? e.message : 'שגיאה באתחול סורק')
      }
      setLoading(false)
    }
  }

  async function startScan() {
    const dwt = dwtRef.current ?? getDWT()
    if (!dwt) {
      setError('Web TWAIN לא מוכן')
      return
    }
    setLoading(true)
    setError(null)
    try {
      await dwt.SelectSourceAsync()
      dwt.OpenSource()
      dwt.RegisterEvent('OnPostTransfer', () => {
        setStatus(`נסרקו ${dwt.HowManyImagesInBuffer} עמודים`)
      })
      dwt.RegisterEvent('OnPostAllTransfers', () => {
        dwt.CloseSource()
        convertAndReturn(dwt)
      })
      dwt.AcquireImage()
    } catch (e: unknown) {
      setError('שגיאה בבחירת סורק')
      setLoading(false)
    }
  }

  function convertAndReturn(dwt: DynamsoftWebTWAIN) {
    const indices = Array.from({ length: dwt.HowManyImagesInBuffer }, (_, i) => i)
    dwt.ConvertToBlob(
      indices,
      dwt.EnumDWT_ImageType.IT_PNG,
      (blob) => {
        const file = new File([blob], `scan-${Date.now()}.png`, { type: 'image/png' })
        onScan(file)
        handleClose()
      },
      (_idx, _type, msg) => {
        setError(`שגיאת המרה: ${msg}`)
        setLoading(false)
      }
    )
  }

  function handleClose() {
    setError(null)
    setStatus('מאתחל...')
    setLoading(false)
    onClose()
  }

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <ScannerIcon /> סריקת מסמך
      </DialogTitle>

      <DialogContent>
        {/* Hidden DWT container */}
        <Box id={containerId} sx={{ display: 'none' }} />

        {error === 'NO_DWT' ? (
          <Box sx={{ py: 1, textAlign: 'center' }}>
            <Typography fontSize={40} sx={{ mb: 1 }}>🖨️</Typography>
            <Typography fontWeight={600} gutterBottom>
              לא נמצא סורק זמין
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ודא שהסורק מחובר למחשב ומופעל, ונסה שוב.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              לתמיכה פנה למנהל המערכת.
            </Typography>
          </Box>
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : loading ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, py: 2 }}>
            <CircularProgress size={24} />
            <Typography>{status}</Typography>
          </Box>
        ) : (
          <Typography color="text.secondary">{status}</Typography>
        )}
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={handleClose} color="inherit">ביטול</Button>
        <Button
          variant="contained"
          startIcon={<ScannerIcon />}
          onClick={startScan}
          disabled={loading || !!error}
        >
          סרוק
        </Button>
      </DialogActions>
    </Dialog>
  )
}
