import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { IpsDrawer } from './IpsDrawer'
import type { IpsDrawerCloseReason } from './IpsDrawer.types'

const theme = createTheme()

const wrap = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('IpsDrawer', () => {
  // ── displayName ──────────────────────────────────────────────────────────────

  it('has displayName IpsDrawer', () => {
    expect(IpsDrawer.displayName).toBe('IpsDrawer')
  })

  // ── Controlled open ──────────────────────────────────────────────────────────

  it('renders the paper surface when open=true', () => {
    wrap(<IpsDrawer open title="Test">{null}</IpsDrawer>)
    expect(document.querySelector('.ips-drawer')).toBeInTheDocument()
  })

  it('does not render the paper surface when open=false', () => {
    wrap(<IpsDrawer open={false} title="Test">{null}</IpsDrawer>)
    expect(document.querySelector('.ips-drawer')).not.toBeInTheDocument()
  })

  it('renders the paper after open changes from false to true', () => {
    const { rerender } = wrap(<IpsDrawer open={false} title="Test">{null}</IpsDrawer>)
    expect(document.querySelector('.ips-drawer')).not.toBeInTheDocument()
    rerender(
      <ThemeProvider theme={theme}>
        <IpsDrawer open title="Test">{null}</IpsDrawer>
      </ThemeProvider>
    )
    expect(document.querySelector('.ips-drawer')).toBeInTheDocument()
  })

  // ── className ────────────────────────────────────────────────────────────────

  it('applies ips-drawer class to the paper surface', () => {
    wrap(<IpsDrawer open title="Test">{null}</IpsDrawer>)
    expect(document.querySelector('.ips-drawer')).toBeInTheDocument()
  })

  it('applies ips-drawer-title class to the header', () => {
    wrap(<IpsDrawer open title="Test">{null}</IpsDrawer>)
    expect(document.querySelector('.ips-drawer-title')).toBeInTheDocument()
  })

  it('applies ips-drawer-content class to the content area', () => {
    wrap(<IpsDrawer open title="Test">{null}</IpsDrawer>)
    expect(document.querySelector('.ips-drawer-content')).toBeInTheDocument()
  })

  it('applies ips-drawer-actions class to the footer', () => {
    wrap(
      <IpsDrawer open title="Test" actions={<button>OK</button>}>
        {null}
      </IpsDrawer>
    )
    expect(document.querySelector('.ips-drawer-actions')).toBeInTheDocument()
  })

  // ── forwardRef ───────────────────────────────────────────────────────────────

  it('forwards ref to the paper element', () => {
    const ref = React.createRef<HTMLDivElement>()
    wrap(<IpsDrawer open title="Test" ref={ref}>{null}</IpsDrawer>)
    expect(ref.current).toBeInstanceOf(HTMLElement)
    expect(ref.current).toHaveClass('ips-drawer')
  })

  // ── Children render verbatim ──────────────────────────────────────────────────

  it('renders children inside the content area', () => {
    wrap(
      <IpsDrawer open title="Test">
        <div data-testid="child">Hello from child</div>
      </IpsDrawer>
    )
    expect(screen.getByTestId('child')).toBeInTheDocument()
    expect(screen.getByText('Hello from child')).toBeInTheDocument()
  })

  it('renders arbitrary child structure verbatim', () => {
    wrap(
      <IpsDrawer open title="Test">
        <ul>
          <li data-testid="item-a">A</li>
          <li data-testid="item-b">B</li>
        </ul>
      </IpsDrawer>
    )
    expect(screen.getByTestId('item-a')).toBeInTheDocument()
    expect(screen.getByTestId('item-b')).toBeInTheDocument()
  })

  // ── Title ────────────────────────────────────────────────────────────────────

  it('renders title text in the header', () => {
    wrap(<IpsDrawer open title="My Drawer Title">{null}</IpsDrawer>)
    expect(screen.getByText('My Drawer Title')).toBeInTheDocument()
  })

  // ── Actions / footer ─────────────────────────────────────────────────────────

  it('renders actions inside the footer', () => {
    wrap(
      <IpsDrawer open title="Test" actions={<button data-testid="confirm-btn">Confirm</button>}>
        {null}
      </IpsDrawer>
    )
    expect(screen.getByTestId('confirm-btn')).toBeInTheDocument()
  })

  it('does not render footer when no actions and no renderFooter', () => {
    wrap(<IpsDrawer open title="Test">{null}</IpsDrawer>)
    expect(document.querySelector('.ips-drawer-actions')).not.toBeInTheDocument()
  })

  // ── onClose — close button ───────────────────────────────────────────────────

  it('calls onClose with "closeButton" when the X button is clicked', () => {
    const handler = jest.fn<void, [IpsDrawerCloseReason]>()
    wrap(<IpsDrawer open title="Test" onClose={handler}>{null}</IpsDrawer>)
    fireEvent.click(screen.getByRole('button', { name: /close/i }))
    expect(handler).toHaveBeenCalledTimes(1)
    expect(handler).toHaveBeenCalledWith('closeButton')
  })

  it('does not throw when onClose is not provided and X is clicked', () => {
    wrap(<IpsDrawer open title="Test">{null}</IpsDrawer>)
    expect(() => fireEvent.click(screen.getByRole('button', { name: /close/i }))).not.toThrow()
  })

  // ── showCloseButton ──────────────────────────────────────────────────────────

  it('does not render the X button when showCloseButton=false', () => {
    wrap(
      <IpsDrawer open title="Test" onClose={jest.fn()} showCloseButton={false}>
        {null}
      </IpsDrawer>
    )
    expect(screen.queryByRole('button', { name: /close/i })).not.toBeInTheDocument()
  })

  // ── Backdrop click (temporary variant) ───────────────────────────────────────

  it('calls onClose with "backdropClick" when backdrop is clicked', () => {
    const handler = jest.fn<void, [IpsDrawerCloseReason]>()
    wrap(<IpsDrawer open variant="temporary" title="Test" onClose={handler}>{null}</IpsDrawer>)
    const backdrop = document.querySelector('.MuiBackdrop-root')
    if (backdrop) fireEvent.click(backdrop)
    expect(handler).toHaveBeenCalledWith('backdropClick')
  })

  it('does NOT call onClose when backdrop clicked and disableBackdropClose=true', () => {
    const handler = jest.fn()
    wrap(
      <IpsDrawer open variant="temporary" title="Test" onClose={handler} disableBackdropClose>
        {null}
      </IpsDrawer>
    )
    const backdrop = document.querySelector('.MuiBackdrop-root')
    if (backdrop) fireEvent.click(backdrop)
    expect(handler).not.toHaveBeenCalled()
  })

  // ── persistent / permanent — no backdrop reason ──────────────────────────────

  it('persistent variant renders no backdrop element', () => {
    wrap(
      <IpsDrawer open variant="persistent" title="Test" onClose={jest.fn()}>
        {null}
      </IpsDrawer>
    )
    expect(document.querySelector('.MuiBackdrop-root')).not.toBeInTheDocument()
  })

  it('permanent variant renders no backdrop element', () => {
    wrap(
      <IpsDrawer open variant="permanent" title="Test" onClose={jest.fn()}>
        {null}
      </IpsDrawer>
    )
    expect(document.querySelector('.MuiBackdrop-root')).not.toBeInTheDocument()
  })

  // ── Escape key (temporary variant) ───────────────────────────────────────────

  it('calls onClose with "escapeKeyDown" when Esc is pressed', () => {
    const handler = jest.fn<void, [IpsDrawerCloseReason]>()
    wrap(<IpsDrawer open variant="temporary" title="Test" onClose={handler}>{null}</IpsDrawer>)
    // MUI Drawer (temporary) wraps Modal which has role="dialog" and handles keydown
    const dialogEl = screen.queryByRole('dialog') ?? document.querySelector('.MuiDrawer-root') as HTMLElement
    if (dialogEl) fireEvent.keyDown(dialogEl, { key: 'Escape', code: 'Escape' })
    expect(handler).toHaveBeenCalledWith('escapeKeyDown')
  })

  // ── disableEscapeKeyDown ─────────────────────────────────────────────────────

  it('passes disableEscapeKeyDown to MUI so Esc does not fire onClose', () => {
    const handler = jest.fn()
    wrap(
      <IpsDrawer open variant="temporary" title="Test" onClose={handler} disableEscapeKeyDown>
        {null}
      </IpsDrawer>
    )
    const dialogEl = screen.queryByRole('dialog') ?? document.querySelector('.MuiDrawer-root') as HTMLElement
    if (dialogEl) fireEvent.keyDown(dialogEl, { key: 'Escape', code: 'Escape' })
    expect(handler).not.toHaveBeenCalled()
  })

  // ── Size maps to width vs height per anchor ───────────────────────────────────

  it('applies size as width for anchor="right" (default)', () => {
    wrap(<IpsDrawer open anchor="right" size={480} title="T">{null}</IpsDrawer>)
    const paper = document.querySelector('.ips-drawer') as HTMLElement
    expect(paper?.style.width).toBe('480px')
  })

  it('applies size as width for anchor="left"', () => {
    wrap(<IpsDrawer open anchor="left" size={300} title="T">{null}</IpsDrawer>)
    const paper = document.querySelector('.ips-drawer') as HTMLElement
    expect(paper?.style.width).toBe('300px')
  })

  it('applies size as height for anchor="top"', () => {
    wrap(<IpsDrawer open anchor="top" size={250} title="T">{null}</IpsDrawer>)
    const paper = document.querySelector('.ips-drawer') as HTMLElement
    expect(paper?.style.height).toBe('250px')
  })

  it('applies size as height for anchor="bottom"', () => {
    wrap(<IpsDrawer open anchor="bottom" size={250} title="T">{null}</IpsDrawer>)
    const paper = document.querySelector('.ips-drawer') as HTMLElement
    expect(paper?.style.height).toBe('250px')
  })

  it('accepts string size values (e.g. "40%")', () => {
    wrap(<IpsDrawer open anchor="right" size="40%" title="T">{null}</IpsDrawer>)
    const paper = document.querySelector('.ips-drawer') as HTMLElement
    expect(paper?.style.width).toBe('40%')
  })

  // ── loading overlay + aria-busy ──────────────────────────────────────────────

  it('shows the CircularProgress overlay when loading=true', () => {
    wrap(<IpsDrawer open title="Test" loading>{null}</IpsDrawer>)
    expect(document.querySelector('.MuiCircularProgress-root')).toBeInTheDocument()
  })

  it('does not show CircularProgress when loading=false', () => {
    wrap(<IpsDrawer open title="Test">{null}</IpsDrawer>)
    expect(document.querySelector('.MuiCircularProgress-root')).not.toBeInTheDocument()
  })

  it('sets aria-busy="true" on the paper when loading=true', () => {
    wrap(<IpsDrawer open title="Test" loading>{null}</IpsDrawer>)
    expect(document.querySelector('.ips-drawer')).toHaveAttribute('aria-busy', 'true')
  })

  it('does not set aria-busy when loading=false', () => {
    wrap(<IpsDrawer open title="Test">{null}</IpsDrawer>)
    expect(document.querySelector('.ips-drawer')).not.toHaveAttribute('aria-busy')
  })

  // ── aria labelledby / describedby wiring from idPrefix ──────────────────────

  it('paper has aria-labelledby matching idPrefix-title', () => {
    wrap(<IpsDrawer open title="Test" idPrefix="my-drw">{null}</IpsDrawer>)
    expect(document.querySelector('.ips-drawer')).toHaveAttribute('aria-labelledby', 'my-drw-title')
  })

  it('paper has aria-describedby matching idPrefix-content', () => {
    wrap(<IpsDrawer open title="Test" idPrefix="my-drw">{null}</IpsDrawer>)
    expect(document.querySelector('.ips-drawer')).toHaveAttribute('aria-describedby', 'my-drw-content')
  })

  it('title element has the correct id from idPrefix', () => {
    wrap(<IpsDrawer open title="Test" idPrefix="my-drw">{null}</IpsDrawer>)
    expect(document.getElementById('my-drw-title')).toBeInTheDocument()
  })

  it('content element has the correct id from idPrefix', () => {
    wrap(<IpsDrawer open title="Test" idPrefix="my-drw">{null}</IpsDrawer>)
    expect(document.getElementById('my-drw-content')).toBeInTheDocument()
  })

  it('uses default idPrefix "ips-drawer" when not provided', () => {
    wrap(<IpsDrawer open title="Test">{null}</IpsDrawer>)
    expect(document.querySelector('.ips-drawer')).toHaveAttribute('aria-labelledby', 'ips-drawer-title')
    expect(document.querySelector('.ips-drawer')).toHaveAttribute('aria-describedby', 'ips-drawer-content')
  })

  it('does not set aria-labelledby to custom id when there is no header', () => {
    // MUI Drawer may auto-generate its own aria attributes; ours should NOT be set when hasHeader=false
    wrap(
      <IpsDrawer open onClose={jest.fn()} showCloseButton={false} idPrefix="nodrw">
        {null}
      </IpsDrawer>
    )
    const paper = document.querySelector('.ips-drawer')
    const labelledBy = paper?.getAttribute('aria-labelledby')
    expect(labelledBy).not.toBe('nodrw-title')
  })

  // ── renderHeader override ────────────────────────────────────────────────────

  it('renders custom header via renderHeader', () => {
    wrap(
      <IpsDrawer
        open
        onClose={jest.fn()}
        renderHeader={({ titleId }) => (
          <div data-testid="custom-header" id={titleId}>Custom Header</div>
        )}
      >
        {null}
      </IpsDrawer>
    )
    expect(screen.getByTestId('custom-header')).toBeInTheDocument()
    expect(screen.getByText('Custom Header')).toBeInTheDocument()
  })

  it('renderHeader context requestClose emits "closeButton"', () => {
    const handler = jest.fn<void, [IpsDrawerCloseReason]>()
    wrap(
      <IpsDrawer
        open
        onClose={handler}
        renderHeader={({ requestClose }) => (
          <button data-testid="custom-close" onClick={requestClose}>X</button>
        )}
      >
        {null}
      </IpsDrawer>
    )
    fireEvent.click(screen.getByTestId('custom-close'))
    expect(handler).toHaveBeenCalledWith('closeButton')
  })

  it('does not render default header when renderHeader is provided', () => {
    wrap(
      <IpsDrawer
        open
        title="Should not appear"
        onClose={jest.fn()}
        renderHeader={() => <div data-testid="custom-header">Custom</div>}
      >
        {null}
      </IpsDrawer>
    )
    expect(document.querySelector('.ips-drawer-title')).not.toBeInTheDocument()
  })

  // ── renderFooter override ────────────────────────────────────────────────────

  it('renders custom footer via renderFooter', () => {
    wrap(
      <IpsDrawer
        open
        title="Test"
        onClose={jest.fn()}
        renderFooter={() => (
          <div data-testid="custom-footer">Custom Footer</div>
        )}
      >
        {null}
      </IpsDrawer>
    )
    expect(screen.getByTestId('custom-footer')).toBeInTheDocument()
  })

  it('renderFooter context requestClose emits "closeButton"', () => {
    const handler = jest.fn<void, [IpsDrawerCloseReason]>()
    wrap(
      <IpsDrawer
        open
        title="Test"
        onClose={handler}
        renderFooter={({ requestClose }) => (
          <button data-testid="custom-footer-btn" onClick={requestClose}>Done</button>
        )}
      >
        {null}
      </IpsDrawer>
    )
    fireEvent.click(screen.getByTestId('custom-footer-btn'))
    expect(handler).toHaveBeenCalledWith('closeButton')
  })

  it('does not render default footer when renderFooter is provided', () => {
    wrap(
      <IpsDrawer
        open
        title="Test"
        onClose={jest.fn()}
        actions={<button>Should not appear</button>}
        renderFooter={() => <div data-testid="custom-footer">Custom</div>}
      >
        {null}
      </IpsDrawer>
    )
    expect(document.querySelector('.ips-drawer-actions')).not.toBeInTheDocument()
  })
})
