import React, { useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'

export interface TruncatedTextProps {
  /**
   * Full text for the tooltip. When omitted, the rendered text content of the
   * element is used — which covers custom cell renderers.
   */
  title?: string
  children: React.ReactNode
}

/**
 * Renders its children on a single line, clipped with an ellipsis, and shows a
 * tooltip with the full text — but only when the content is actually clipped.
 *
 * Truncation is checked on hover (not with a ResizeObserver per cell) so a
 * large table does not pay for hundreds of observers, and the tooltip is
 * controlled so it opens on the same hover that measures it.
 */
export function TruncatedText({ title, children }: TruncatedTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')

  const handleEnter = () => {
    const el = ref.current
    if (!el) return
    // +1 absorbs sub-pixel rounding, which otherwise reports false positives.
    if (el.scrollWidth <= el.clientWidth + 1) return
    const full = title ?? el.textContent ?? ''
    if (!full) return
    setText(full)
    setOpen(true)
  }

  const handleLeave = () => setOpen(false)

  return (
    <Tooltip
      title={text}
      open={open}
      onClose={handleLeave}
      placement="top"
      disableFocusListener
      disableHoverListener
      disableTouchListener
    >
      <Box
        ref={ref}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        sx={{
          display: 'block',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          minWidth: 0,
        }}
      >
        {children}
      </Box>
    </Tooltip>
  )
}
