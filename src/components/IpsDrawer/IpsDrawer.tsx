import React, { forwardRef } from 'react'
import MuiDrawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import CircularProgress from '@mui/material/CircularProgress'
import Divider from '@mui/material/Divider'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import type { IpsDrawerProps, IpsDrawerCloseReason, IpsDrawerRenderContext } from './IpsDrawer.types'

// ── Inline close icon ─────────────────────────────────────────────────────────

const CloseIcon = (props: any) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
  </SvgIcon>
)

// ── IpsDrawer ─────────────────────────────────────────────────────────────────

export const IpsDrawer = forwardRef<HTMLDivElement, IpsDrawerProps>(function IpsDrawer(props, ref) {
  const {
    open,
    onClose,
    anchor = 'right',
    variant = 'temporary',
    size = 400,
    title,
    icon,
    children,
    actions,
    dividers = false,
    showCloseButton = true,
    disableBackdropClose = false,
    disableEscapeKeyDown = false,
    hideBackdrop = false,
    elevation,
    loading = false,
    keepMounted = false,
    rtl = false,
    idPrefix = 'ips-drawer',
    renderHeader,
    renderFooter,
    sx,
    ...rest
  } = props

  const theme = useTheme()

  // Aria ids
  const titleId = `${idPrefix}-title`
  const contentId = `${idPrefix}-content`

  // Close helpers
  const requestClose = () => onClose?.('closeButton')
  const ctx: IpsDrawerRenderContext = { requestClose, titleId, contentId }

  // Map MUI's onClose → our typed onClose
  const handleMuiClose = (_event: {}, reason: string) => {
    if (reason === 'backdropClick' && disableBackdropClose) return
    onClose?.(reason as IpsDrawerCloseReason)
  }

  // Counter-rotate left/right anchor when RTL theme is active so the prop
  // always refers to the physical screen edge, not the logical inline edge.
  const physicalAnchor = (() => {
    if (theme.direction !== 'rtl') return anchor
    if (anchor === 'left') return 'right'
    if (anchor === 'right') return 'left'
    return anchor
  })()

  // Resolve size → inline style dimension (testable in JSDOM)
  const isHorizontal = anchor === 'left' || anchor === 'right'
  const sizeValue = typeof size === 'number' ? `${size}px` : size
  const sizeDim = isHorizontal ? { width: sizeValue } : { height: sizeValue }

  // Header / footer presence
  const hasComposedHeader = !renderHeader && (title != null || icon != null || showCloseButton)
  const hasHeader = renderHeader != null || hasComposedHeader
  const hasComposedFooter = !renderFooter && actions != null
  const hasFooter = renderFooter != null || hasComposedFooter

  // aria-labelledby: use our custom title id when a header exists
  const ariaLabelledBy = hasHeader ? titleId : undefined

  // keepMounted, disableEscapeKeyDown, and Modal-level focus/scroll props only apply
  // to the temporary (Modal) variant. Leaking them to persistent/permanent causes
  // React warnings about unknown DOM props.
  const modalOnlyProps = variant === 'temporary'
    ? { keepMounted, disableEscapeKeyDown }
    : {}

  return (
    <MuiDrawer
      open={open}
      onClose={handleMuiClose}
      anchor={physicalAnchor}
      variant={variant}
      hideBackdrop={hideBackdrop}
      elevation={elevation}
      {...modalOnlyProps}
      slotProps={{
        paper: {
          // Forward external ref to paper surface (carries ips-drawer class)
          ref,
          className: 'ips-drawer',
          'aria-busy': loading ? 'true' : undefined,
          'aria-labelledby': ariaLabelledBy,
          'aria-describedby': contentId,
          dir: rtl ? 'rtl' : undefined,
          style: sizeDim,
          sx: {
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
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
          <Box
            id={titleId}
            className="ips-drawer-title"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              px: 2,
              py: 1.5,
              flexShrink: 0,
              position: 'relative',
              pr: showCloseButton ? 6 : 2,
            }}
          >
            {icon && (
              <Box component="span" sx={{ display: 'flex', flexShrink: 0 }}>
                {icon}
              </Box>
            )}
            <Typography
              component="span"
              variant="h6"
              sx={{ flex: 1, fontWeight: 600, fontSize: '1rem', lineHeight: 1.4 }}
            >
              {title}
            </Typography>
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
          </Box>
        )
      )}

      {/* ── Header / content divider ── */}
      {hasHeader && dividers && <Divider sx={{ flexShrink: 0 }} />}

      {/* ── Content (independently scrollable) ── */}
      <Box
        id={contentId}
        className="ips-drawer-content"
        sx={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          p: 2,
        }}
      >
        {children}
      </Box>

      {/* ── Content / footer divider ── */}
      {hasFooter && dividers && <Divider sx={{ flexShrink: 0 }} />}

      {/* ── Footer ── */}
      {hasFooter && (
        renderFooter ? (
          renderFooter(ctx)
        ) : (
          <Box
            className="ips-drawer-actions"
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 1,
              px: 2,
              py: 1.5,
              flexShrink: 0,
            }}
          >
            {actions}
          </Box>
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
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </MuiDrawer>
  )
})

IpsDrawer.displayName = 'IpsDrawer'
