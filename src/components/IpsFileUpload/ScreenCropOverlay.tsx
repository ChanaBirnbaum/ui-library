import React, { useRef, useState } from 'react'

interface Point { x: number; y: number }
interface Rect  { x: number; y: number; w: number; h: number }

interface ScreenCropOverlayProps {
  imageBitmap: ImageBitmap
  onCrop: (file: File) => void
  onCancel: () => void
}

/**
 * Full-screen overlay drawn on a canvas.
 * User drags a rectangle to select the crop area.
 */
export function ScreenCropOverlay({ imageBitmap, onCrop, onCancel }: ScreenCropOverlayProps) {
  const canvasRef   = useRef<HTMLCanvasElement>(null)
  const startRef    = useRef<Point | null>(null)
  const [rect, setRect] = useState<Rect | null>(null)

  // Draw background screenshot + selection rect on every render
  function draw(currentRect: Rect | null) {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Screenshot as background (dimmed)
    ctx.globalAlpha = 0.45
    ctx.drawImage(imageBitmap, 0, 0, canvas.width, canvas.height)
    ctx.globalAlpha = 1

    if (currentRect) {
      // Clear selected area (full brightness)
      ctx.clearRect(currentRect.x, currentRect.y, currentRect.w, currentRect.h)
      ctx.drawImage(
        imageBitmap,
        currentRect.x, currentRect.y, currentRect.w, currentRect.h,
        currentRect.x, currentRect.y, currentRect.w, currentRect.h
      )
      // Border
      ctx.strokeStyle = '#1565C0'
      ctx.lineWidth   = 2
      ctx.strokeRect(currentRect.x, currentRect.y, currentRect.w, currentRect.h)

      // Size label
      ctx.fillStyle = '#1565C0'
      ctx.font      = '13px sans-serif'
      ctx.fillText(
        `${Math.abs(currentRect.w)} × ${Math.abs(currentRect.h)}`,
        currentRect.x + 4,
        currentRect.y - 6
      )
    }
  }

  function getPos(e: React.MouseEvent): Point {
    const r = canvasRef.current!.getBoundingClientRect()
    return { x: e.clientX - r.left, y: e.clientY - r.top }
  }

  function onMouseDown(e: React.MouseEvent) {
    startRef.current = getPos(e)
    setRect(null)
    draw(null)
  }

  function onMouseMove(e: React.MouseEvent) {
    if (!startRef.current) return
    const cur  = getPos(e)
    const r: Rect = {
      x: Math.min(startRef.current.x, cur.x),
      y: Math.min(startRef.current.y, cur.y),
      w: Math.abs(cur.x - startRef.current.x),
      h: Math.abs(cur.y - startRef.current.y),
    }
    setRect(r)
    draw(r)
  }

  function onMouseUp() {
    startRef.current = null
  }

  function confirmCrop() {
    if (!rect || rect.w < 4 || rect.h < 4) return
    const canvas  = canvasRef.current!
    const scaleX  = imageBitmap.width  / canvas.width
    const scaleY  = imageBitmap.height / canvas.height

    const tmp     = document.createElement('canvas')
    tmp.width     = rect.w * scaleX
    tmp.height    = rect.h * scaleY
    const ctx     = tmp.getContext('2d')!
    ctx.drawImage(
      imageBitmap,
      rect.x * scaleX, rect.y * scaleY, tmp.width, tmp.height,
      0, 0, tmp.width, tmp.height
    )
    tmp.toBlob(blob => {
      if (!blob) return
      onCrop(new File([blob], `screenshot-${Date.now()}.png`, { type: 'image/png' }))
    }, 'image/png')
  }

  // Initial draw after mount — hide app content so only screenshot shows
  const didInit = useRef(false)
  const canvasReady = (el: HTMLCanvasElement | null) => {
    if (!el || didInit.current) return
    didInit.current = true
    ;(canvasRef as React.MutableRefObject<HTMLCanvasElement | null>).current = el
    el.width  = window.innerWidth
    el.height = window.innerHeight
    // Hide all other page content so only the screenshot bitmap is visible
    document.body.style.overflow = 'hidden'
    draw(null)
  }

  // Cleanup: restore page when overlay unmounts
  React.useEffect(() => {
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 99999,
        cursor: 'crosshair', userSelect: 'none',
      }}
    >
      <canvas
        ref={canvasReady}
        style={{ display: 'block', width: '100%', height: '100%' }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
      />

      {/* Controls bar at bottom */}
      <div style={{
        position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: 12,
        background: 'rgba(0,0,0,0.7)', borderRadius: 8, padding: '10px 20px',
      }}>
        <span style={{ color: '#fff', fontSize: 14, alignSelf: 'center' }}>
          {rect ? 'גרור לשינוי • לחץ "אישור" לקבלת הצילום' : 'גרור לבחירת אזור'}
        </span>
        <button
          onClick={confirmCrop}
          disabled={!rect || rect.w < 4}
          style={{
            background: '#1565C0', color: '#fff', border: 'none',
            borderRadius: 6, padding: '6px 18px', cursor: 'pointer', fontSize: 14,
          }}
        >
          אישור
        </button>
        <button
          onClick={onCancel}
          style={{
            background: 'transparent', color: '#fff', border: '1px solid #fff',
            borderRadius: 6, padding: '6px 18px', cursor: 'pointer', fontSize: 14,
          }}
        >
          ביטול
        </button>
      </div>
    </div>
  )
}
