import type { ReactNode } from 'react'
import type { DialogProps } from '@mui/material/Dialog'

export type IpsDialogCloseReason =
  | 'backdropClick'
  | 'escapeKeyDown'
  | 'closeButton'

/** Context passed to header/footer render-prop slots */
export interface IpsDialogRenderContext {
  /** Programmatic close request — emits onClose('closeButton') */
  requestClose: () => void
  titleId: string
  contentId: string
}

export type IpsDialogProps = Omit<DialogProps, 'open' | 'onClose' | 'maxWidth'> & {
  /** Controlled visibility (required). Owned by consumer */
  open: boolean
  /** Fired on close intent. Consumer decides whether to close. */
  onClose?: (reason: IpsDialogCloseReason) => void
  /** Header title. Ignored if renderHeader is provided */
  title?: ReactNode
  /** Optional icon shown beside the title */
  icon?: ReactNode
  /** Body content — the rendered inner component (required) */
  children?: ReactNode
  /** Footer content. Ignored if renderFooter is provided */
  actions?: ReactNode
  /** Max surface width (MUI maxWidth; number = px) */
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number | false
  /** Stretch to maxWidth */
  fullWidth?: boolean
  /** Render full-screen */
  fullScreen?: boolean
  /** Auto full-screen at/below this breakpoint */
  fullScreenBreakpoint?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  /** Scroll behavior for tall content */
  scroll?: 'paper' | 'body'
  /** Show dividers between header / content / footer */
  dividers?: boolean
  /** Show the header close (X) button */
  showCloseButton?: boolean
  /** Do not emit onClose on backdrop click */
  disableBackdropClose?: boolean
  /** Do not emit onClose on Esc */
  disableEscapeKeyDown?: boolean
  /** Enter/exit animation */
  transition?: 'fade' | 'grow' | 'slide' | 'zoom'
  /** Visual busy overlay on the surface (consumer-controlled) */
  loading?: boolean
  /** Keep content mounted while closed */
  keepMounted?: boolean
  /** Force RTL layout on the surface */
  rtl?: boolean
  /** Prefix for generated aria ids */
  idPrefix?: string
  /** Full override of the header area */
  renderHeader?: (ctx: IpsDialogRenderContext) => ReactNode
  /** Full override of the footer area */
  renderFooter?: (ctx: IpsDialogRenderContext) => ReactNode
}
