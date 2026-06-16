import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { IpsDialog } from './IpsDialog'
import type { IpsDialogCloseReason } from './IpsDialog.types'

const theme = createTheme()

const wrap = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('IpsDialog', () => {
  // ── displayName ──────────────────────────────────────────────────────────────

  it('has displayName IpsDialog', () => {
    expect(IpsDialog.displayName).toBe('IpsDialog')
  })

  // ── Controlled open ──────────────────────────────────────────────────────────

  it('renders dialog role when open=true', () => {
    wrap(<IpsDialog open title="Test">{null}</IpsDialog>)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('does not render dialog role when open=false', () => {
    wrap(<IpsDialog open={false} title="Test">{null}</IpsDialog>)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders dialog after open changes from false to true', () => {
    const { rerender } = wrap(<IpsDialog open={false} title="Test">{null}</IpsDialog>)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    rerender(
      <ThemeProvider theme={theme}>
        <IpsDialog open title="Test">{null}</IpsDialog>
      </ThemeProvider>
    )
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  // ── className ────────────────────────────────────────────────────────────────

  it('applies ips-dialog class to the paper surface', () => {
    wrap(<IpsDialog open title="Test">{null}</IpsDialog>)
    expect(document.querySelector('.ips-dialog')).toBeInTheDocument()
  })

  it('applies ips-dialog-title class to the header', () => {
    wrap(<IpsDialog open title="Test">{null}</IpsDialog>)
    expect(document.querySelector('.ips-dialog-title')).toBeInTheDocument()
  })

  it('applies ips-dialog-content class to the content area', () => {
    wrap(<IpsDialog open title="Test">{null}</IpsDialog>)
    expect(document.querySelector('.ips-dialog-content')).toBeInTheDocument()
  })

  it('applies ips-dialog-actions class to the footer', () => {
    wrap(
      <IpsDialog open title="Test" actions={<button>OK</button>}>
        {null}
      </IpsDialog>
    )
    expect(document.querySelector('.ips-dialog-actions')).toBeInTheDocument()
  })

  // ── forwardRef ───────────────────────────────────────────────────────────────

  it('forwards ref to the paper element', () => {
    const ref = React.createRef<HTMLDivElement>()
    wrap(<IpsDialog open title="Test" ref={ref}>{null}</IpsDialog>)
    expect(ref.current).toBeInstanceOf(HTMLElement)
    expect(ref.current).toHaveClass('ips-dialog')
  })

  // ── Children render verbatim ──────────────────────────────────────────────────

  it('renders children inside the dialog content area', () => {
    wrap(
      <IpsDialog open title="Test">
        <div data-testid="child">Hello from child</div>
      </IpsDialog>
    )
    expect(screen.getByTestId('child')).toBeInTheDocument()
    expect(screen.getByText('Hello from child')).toBeInTheDocument()
  })

  it('renders arbitrary child structure verbatim', () => {
    wrap(
      <IpsDialog open title="Test">
        <ul>
          <li data-testid="item-a">A</li>
          <li data-testid="item-b">B</li>
        </ul>
      </IpsDialog>
    )
    expect(screen.getByTestId('item-a')).toBeInTheDocument()
    expect(screen.getByTestId('item-b')).toBeInTheDocument()
  })

  // ── Title ────────────────────────────────────────────────────────────────────

  it('renders title text in the header', () => {
    wrap(<IpsDialog open title="My Dialog Title">{null}</IpsDialog>)
    expect(screen.getByText('My Dialog Title')).toBeInTheDocument()
  })

  // ── Actions / footer ─────────────────────────────────────────────────────────

  it('renders actions inside the footer', () => {
    wrap(
      <IpsDialog
        open
        title="Test"
        actions={<button data-testid="confirm-btn">Confirm</button>}
      >
        {null}
      </IpsDialog>
    )
    expect(screen.getByTestId('confirm-btn')).toBeInTheDocument()
  })

  it('does not render footer when no actions and no renderFooter', () => {
    wrap(<IpsDialog open title="Test">{null}</IpsDialog>)
    expect(document.querySelector('.ips-dialog-actions')).not.toBeInTheDocument()
  })

  // ── onClose — close button ───────────────────────────────────────────────────

  it('calls onClose with "closeButton" when the X button is clicked', () => {
    const handler = jest.fn<void, [IpsDialogCloseReason]>()
    wrap(<IpsDialog open title="Test" onClose={handler}>{null}</IpsDialog>)
    fireEvent.click(screen.getByRole('button', { name: /close/i }))
    expect(handler).toHaveBeenCalledTimes(1)
    expect(handler).toHaveBeenCalledWith('closeButton')
  })

  it('does not throw when onClose is not provided and X is clicked', () => {
    wrap(<IpsDialog open title="Test">{null}</IpsDialog>)
    expect(() => fireEvent.click(screen.getByRole('button', { name: /close/i }))).not.toThrow()
  })

  // ── showCloseButton ──────────────────────────────────────────────────────────

  it('does not render the X button when showCloseButton=false', () => {
    wrap(
      <IpsDialog open title="Test" onClose={jest.fn()} showCloseButton={false}>
        {null}
      </IpsDialog>
    )
    expect(screen.queryByRole('button', { name: /close/i })).not.toBeInTheDocument()
  })

  // ── Backdrop click ───────────────────────────────────────────────────────────

  it('calls onClose with "backdropClick" when backdrop is clicked', () => {
    const handler = jest.fn<void, [IpsDialogCloseReason]>()
    wrap(<IpsDialog open title="Test" onClose={handler}>{null}</IpsDialog>)
    const backdrop = document.querySelector('.MuiBackdrop-root')
    if (backdrop) fireEvent.click(backdrop)
    expect(handler).toHaveBeenCalledWith('backdropClick')
  })

  it('does NOT call onClose when backdrop clicked and disableBackdropClose=true', () => {
    const handler = jest.fn()
    wrap(
      <IpsDialog open title="Test" onClose={handler} disableBackdropClose>
        {null}
      </IpsDialog>
    )
    const backdrop = document.querySelector('.MuiBackdrop-root')
    if (backdrop) fireEvent.click(backdrop)
    expect(handler).not.toHaveBeenCalled()
  })

  // ── Escape key ───────────────────────────────────────────────────────────────

  it('calls onClose with "escapeKeyDown" when Esc is pressed', () => {
    const handler = jest.fn<void, [IpsDialogCloseReason]>()
    wrap(<IpsDialog open title="Test" onClose={handler}>{null}</IpsDialog>)
    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape', code: 'Escape' })
    expect(handler).toHaveBeenCalledWith('escapeKeyDown')
  })

  // ── disableEscapeKeyDown ─────────────────────────────────────────────────────

  it('passes disableEscapeKeyDown to MUI Dialog so Esc does not fire onClose', () => {
    const handler = jest.fn()
    wrap(
      <IpsDialog open title="Test" onClose={handler} disableEscapeKeyDown>
        {null}
      </IpsDialog>
    )
    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Escape', code: 'Escape' })
    expect(handler).not.toHaveBeenCalled()
  })

  // ── loading overlay + aria-busy ──────────────────────────────────────────────

  it('shows the CircularProgress overlay when loading=true', () => {
    wrap(<IpsDialog open title="Test" loading>{null}</IpsDialog>)
    expect(document.querySelector('.MuiCircularProgress-root')).toBeInTheDocument()
  })

  it('does not show CircularProgress when loading=false', () => {
    wrap(<IpsDialog open title="Test">{null}</IpsDialog>)
    expect(document.querySelector('.MuiCircularProgress-root')).not.toBeInTheDocument()
  })

  it('sets aria-busy="true" on the paper when loading=true', () => {
    wrap(<IpsDialog open title="Test" loading>{null}</IpsDialog>)
    expect(document.querySelector('.ips-dialog')).toHaveAttribute('aria-busy', 'true')
  })

  it('does not set aria-busy when loading=false', () => {
    wrap(<IpsDialog open title="Test">{null}</IpsDialog>)
    expect(document.querySelector('.ips-dialog')).not.toHaveAttribute('aria-busy')
  })

  // ── aria labelledby / describedby wiring from idPrefix ──────────────────────

  it('dialog element has aria-labelledby matching idPrefix-title', () => {
    wrap(<IpsDialog open title="Test" idPrefix="my-dlg">{null}</IpsDialog>)
    expect(screen.getByRole('dialog')).toHaveAttribute('aria-labelledby', 'my-dlg-title')
  })

  it('dialog element has aria-describedby matching idPrefix-content', () => {
    wrap(<IpsDialog open title="Test" idPrefix="my-dlg">{null}</IpsDialog>)
    expect(screen.getByRole('dialog')).toHaveAttribute('aria-describedby', 'my-dlg-content')
  })

  it('title element has the correct id from idPrefix', () => {
    wrap(<IpsDialog open title="Test" idPrefix="my-dlg">{null}</IpsDialog>)
    expect(document.getElementById('my-dlg-title')).toBeInTheDocument()
  })

  it('content element has the correct id from idPrefix', () => {
    wrap(<IpsDialog open title="Test" idPrefix="my-dlg">{null}</IpsDialog>)
    expect(document.getElementById('my-dlg-content')).toBeInTheDocument()
  })

  it('uses default idPrefix "ips-dialog" when not provided', () => {
    wrap(<IpsDialog open title="Test">{null}</IpsDialog>)
    expect(screen.getByRole('dialog')).toHaveAttribute('aria-labelledby', 'ips-dialog-title')
    expect(screen.getByRole('dialog')).toHaveAttribute('aria-describedby', 'ips-dialog-content')
  })

  it('does not use custom idPrefix title id as aria-labelledby when there is no header', () => {
    // MUI v7 always auto-generates aria-labelledby via useId(); we can't suppress that.
    // What we CAN guarantee: when hasHeader=false, we do NOT wire aria-labelledby to our
    // custom ips-dialog-title element — MUI's auto-generated fallback id is used instead.
    wrap(
      <IpsDialog open onClose={jest.fn()} showCloseButton={false} idPrefix="nodlg">
        {null}
      </IpsDialog>
    )
    // No title, no icon, showCloseButton=false → hasHeader=false
    // Our custom id "nodlg-title" must NOT be the aria-labelledby value
    const labelledBy = screen.getByRole('dialog').getAttribute('aria-labelledby')
    expect(labelledBy).not.toBe('nodlg-title')
  })

  // ── renderHeader override ────────────────────────────────────────────────────

  it('renders custom header via renderHeader', () => {
    wrap(
      <IpsDialog
        open
        onClose={jest.fn()}
        renderHeader={({ titleId }) => (
          <div data-testid="custom-header" id={titleId}>Custom Header</div>
        )}
      >
        {null}
      </IpsDialog>
    )
    expect(screen.getByTestId('custom-header')).toBeInTheDocument()
    expect(screen.getByText('Custom Header')).toBeInTheDocument()
  })

  it('renderHeader context requestClose emits "closeButton"', () => {
    const handler = jest.fn<void, [IpsDialogCloseReason]>()
    wrap(
      <IpsDialog
        open
        onClose={handler}
        renderHeader={({ requestClose }) => (
          <button data-testid="custom-close" onClick={requestClose}>X</button>
        )}
      >
        {null}
      </IpsDialog>
    )
    fireEvent.click(screen.getByTestId('custom-close'))
    expect(handler).toHaveBeenCalledWith('closeButton')
  })

  it('does not render default DialogTitle when renderHeader is provided', () => {
    wrap(
      <IpsDialog
        open
        title="Should not appear"
        onClose={jest.fn()}
        renderHeader={() => <div data-testid="custom-header">Custom</div>}
      >
        {null}
      </IpsDialog>
    )
    expect(document.querySelector('.ips-dialog-title')).not.toBeInTheDocument()
  })

  // ── renderFooter override ────────────────────────────────────────────────────

  it('renders custom footer via renderFooter', () => {
    wrap(
      <IpsDialog
        open
        title="Test"
        onClose={jest.fn()}
        renderFooter={() => (
          <div data-testid="custom-footer">Custom Footer</div>
        )}
      >
        {null}
      </IpsDialog>
    )
    expect(screen.getByTestId('custom-footer')).toBeInTheDocument()
  })

  it('renderFooter context requestClose emits "closeButton"', () => {
    const handler = jest.fn<void, [IpsDialogCloseReason]>()
    wrap(
      <IpsDialog
        open
        title="Test"
        onClose={handler}
        renderFooter={({ requestClose }) => (
          <button data-testid="custom-footer-btn" onClick={requestClose}>Done</button>
        )}
      >
        {null}
      </IpsDialog>
    )
    fireEvent.click(screen.getByTestId('custom-footer-btn'))
    expect(handler).toHaveBeenCalledWith('closeButton')
  })

  it('does not render default DialogActions when renderFooter is provided', () => {
    wrap(
      <IpsDialog
        open
        title="Test"
        onClose={jest.fn()}
        actions={<button>Should not appear</button>}
        renderFooter={() => <div data-testid="custom-footer">Custom</div>}
      >
        {null}
      </IpsDialog>
    )
    expect(document.querySelector('.ips-dialog-actions')).not.toBeInTheDocument()
  })
})
