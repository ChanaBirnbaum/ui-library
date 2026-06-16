import React, { forwardRef } from 'react'
import MuiDialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import IconButton from '@mui/material/IconButton'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import SvgIcon from '@mui/material/SvgIcon'
import Fade from '@mui/material/Fade'
import Grow from '@mui/material/Grow'
import Slide from '@mui/material/Slide'
import Zoom from '@mui/material/Zoom'
import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import type { TransitionProps } from '@mui/material/transitions'
import type { IpsDialogProps, IpsDialogCloseReason, IpsDialogRenderContext } from './IpsDialog.types'

// ── Inline close icon ─────────────────────────────────────────────────────────

const CloseIcon = (props: any) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </SvgIcon>
)

// ── Slide-up wrapper (Slide needs direction prop) ─────────────────────────────

const SlideUp = forwardRef<HTMLElement, TransitionProps & { children: React.ReactElement }>(
  function SlideUp({ children, ...props }, ref) {
    return <Slide direction="up" ref={ref} {...props}>{children}</Slide>
  }
)

const TRANSITION_MAP = {
  fade: Fade,
  grow: Grow,
  slide: SlideUp,
  zoom: Zoom,
} as const

// ── IpsDialog ─────────────────────────────────────────────────────────────────

export const IpsDialog = forwardRef<HTMLDivElement, IpsDialogProps>(function IpsDialog(props, ref) {
  const {
    open,
    onClose,
    title,
    icon,
    children,
    actions,
    maxWidth = 'sm',
    fullWidth = true,
    fullScreen = false,
    fullScreenBreakpoint,
    scroll = 'paper',
    dividers = false,
    showCloseButton = true,
    disableBackdropClose = false,
    disableEscapeKeyDown = false,
    transition = 'fade',
    loading = false,
    keepMounted = false,
    rtl = false,
    idPrefix = 'ips-dialog',
    renderHeader,
    renderFooter,
    sx,
    ...rest
  } = props

  const theme = useTheme()

  // Responsive full-screen — always call useMediaQuery (no conditional hooks)
  const breakpointQuery = fullScreenBreakpoint
    ? theme.breakpoints.down(fullScreenBreakpoint)
    : '(min-width: 99999px)' // never matches
  const isBreakpointMatch = useMediaQuery(breakpointQuery)
  const resolvedFullScreen = fullScreen || Boolean(fullScreenBreakpoint && isBreakpointMatch)

  // Aria ids
  const titleId = `${idPrefix}-title`
  const contentId = `${idPrefix}-content`

  // Close helpers
  const requestClose = () => onClose?.('closeButton')
  const ctx: IpsDialogRenderContext = { requestClose, titleId, contentId }

  // Map MUI's onClose → our typed onClose
  const handleMuiClose = (_event: {}, reason: string) => {
    if (reason === 'backdropClick' && disableBackdropClose) return
    onClose?.(reason as IpsDialogCloseReason)
  }

  // Resolve numeric maxWidth → PaperProps sx
  const isNumericMax = typeof maxWidth === 'number'
  const muiMaxWidth = isNumericMax
    ? false
    : (maxWidth as 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false)

  // Transition component
  const TransitionComp = TRANSITION_MAP[transition]

  // Header / footer presence
  const hasComposedHeader = !renderHeader && (title != null || icon != null || showCloseButton)
  const hasHeader = renderHeader != null || hasComposedHeader
  const hasComposedFooter = !renderFooter && actions != null
  const hasFooter = renderFooter != null || hasComposedFooter

  // aria-labelledby: emit when there is any header (title/renderHeader)
  const ariaLabelledBy = hasHeader ? titleId : undefined

  return (
    <MuiDialog
      open={open}
      onClose={handleMuiClose}
      maxWidth={muiMaxWidth}
      fullWidth={fullWidth}
      fullScreen={resolvedFullScreen}
      scroll={scroll}
      disableEscapeKeyDown={disableEscapeKeyDown}
      keepMounted={keepMounted}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={contentId}
      slots={{ transition: TransitionComp as any }}
      slotProps={{
        paper: {
          // Forward external ref to the paper surface (which carries ips-dialog class)
          ref,
          className: 'ips-dialog',
          'aria-busy': loading ? 'true' : undefined,
          dir: rtl ? 'rtl' : undefined,
          sx: {
            position: 'relative',
            ...(isNumericMax ? { maxWidth } : {}),
            ...((sx as object | undefined) ?? {}),
          },
        } as any,
      }}
      {...rest}
    >
      {/* ── Header ── */}
      {hasHeader && (
        renderHeader ? (
          renderHeader(ctx)
        ) : (
          <DialogTitle
            id={titleId}
            className="ips-dialog-title"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              pr: showCloseButton ? 6 : 2,
              position: 'relative',
            }}
          >
            {icon && (
              <Box component="span" sx={{ display: 'flex', flexShrink: 0 }}>
                {icon}
              </Box>
            )}
            <Box component="span" sx={{ flex: 1 }}>
              {title}
            </Box>
            {showCloseButton && (
              <IconButton
                aria-label="Close"
                onClick={requestClose}
                size="small"
                sx={{
                  position: 'absolute',
                  right: rtl ? 'auto' : 8,
                  left: rtl ? 8 : 'auto',
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            )}
          </DialogTitle>
        )
      )}

      {/* ── Content ── */}
      <DialogContent
        id={contentId}
        className="ips-dialog-content"
        dividers={dividers}
      >
        {children}
      </DialogContent>

      {/* ── Footer ── */}
      {hasFooter && (
        renderFooter ? (
          renderFooter(ctx)
        ) : (
          <DialogActions className="ips-dialog-actions">
            {actions}
          </DialogActions>
        )
      )}

      {/* ── Loading overlay ── */}
      {loading && (
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'rgba(255,255,255,0.7)',
            borderRadius: 'inherit',
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </MuiDialog>
  )
})

IpsDialog.displayName = 'IpsDialog'
