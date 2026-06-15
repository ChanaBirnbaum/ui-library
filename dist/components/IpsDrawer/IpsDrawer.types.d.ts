import { DrawerProps } from '@mui/material/Drawer';
import { ReactNode } from 'react';

export type IpsDrawerCloseReason = 'backdropClick' | 'escapeKeyDown' | 'closeButton';
/** Context passed to header/footer render-prop slots. */
export interface IpsDrawerRenderContext {
    /** Programmatic close request — emits onClose('closeButton'). */
    requestClose: () => void;
    titleId: string;
    contentId: string;
}
export type IpsDrawerProps = Omit<DrawerProps, 'open' | 'onClose' | 'anchor' | 'variant'> & {
    /** Controlled visibility (required). Owned by consumer */
    open: boolean;
    /** Fired on close intent. Consumer decides whether to close. */
    onClose?: (reason: IpsDrawerCloseReason) => void;
    /** Edge the drawer slides from */
    anchor?: 'left' | 'right' | 'top' | 'bottom';
    /** MUI drawer variant */
    variant?: 'temporary' | 'persistent' | 'permanent';
    /** Width (left/right) or height (top/bottom). Number = px */
    size?: number | string;
    /** Header title. Ignored if renderHeader is provided */
    title?: ReactNode;
    /** Optional icon shown beside the title */
    icon?: ReactNode;
    /** Body content — the rendered inner component */
    children?: ReactNode;
    /** Footer content. Ignored if renderFooter is provided */
    actions?: ReactNode;
    /** Show dividers between header / content / footer */
    dividers?: boolean;
    /** Show the header close (X) button */
    showCloseButton?: boolean;
    /** Do not emit onClose on backdrop click (temporary only) */
    disableBackdropClose?: boolean;
    /** Do not emit onClose on Esc */
    disableEscapeKeyDown?: boolean;
    /** Hide the backdrop (temporary only) */
    hideBackdrop?: boolean;
    /** Surface elevation */
    elevation?: number;
    /** Visual busy overlay on the surface (consumer-controlled) */
    loading?: boolean;
    /** Keep content mounted while closed */
    keepMounted?: boolean;
    /** Force RTL layout on the surface */
    rtl?: boolean;
    /** Prefix for generated aria ids */
    idPrefix?: string;
    /** Full override of the header area */
    renderHeader?: (ctx: IpsDrawerRenderContext) => ReactNode;
    /** Full override of the footer area */
    renderFooter?: (ctx: IpsDrawerRenderContext) => ReactNode;
};
