import React from 'react'
import { render, screen, act, fireEvent } from '@testing-library/react'
import { IpsToastProvider } from './IpsToastProvider'
import { useToast } from './useToast'
import { TOAST_TYPES } from './IpsToast.types'

// ─── Helper: renders a child that can trigger toasts ─────────────────────────

function ToastTrigger({
  type = TOAST_TYPES.SUCCESS,
  message = 'Test message',
}: {
  type?: string
  message?: string
}) {
  const addToast = useToast()
  return (
    <button onClick={() => addToast(type, message)}>
      trigger
    </button>
  )
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function renderWithProvider(
  ui: React.ReactElement,
  props?: Partial<React.ComponentProps<typeof IpsToastProvider>>
) {
  return render(
    <IpsToastProvider {...props}>{ui}</IpsToastProvider>
  )
}

// ─── Tests ───────────────────────────────────────────────────────────────────

describe('IpsToastProvider', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers()
    })
    jest.useRealTimers()
  })

  it('renders children', () => {
    renderWithProvider(<span>child content</span>)
    expect(screen.getByText('child content')).toBeInTheDocument()
  })

  it('renders the toast container in document.body', () => {
    renderWithProvider(<span />)
    expect(document.body.querySelector('[data-testid="ips-toast-container"]')).toBeInTheDocument()
  })

  it('shows a success toast when addToast is called', () => {
    renderWithProvider(<ToastTrigger type={TOAST_TYPES.SUCCESS} message="הצלחה!" />)
    fireEvent.click(screen.getByText('trigger'))
    expect(screen.getByText('הצלחה!')).toBeInTheDocument()
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('shows an info toast', () => {
    renderWithProvider(<ToastTrigger type={TOAST_TYPES.INFO} message="מידע" />)
    fireEvent.click(screen.getByText('trigger'))
    expect(screen.getByText('מידע')).toBeInTheDocument()
  })

  it('shows a warning toast', () => {
    renderWithProvider(<ToastTrigger type={TOAST_TYPES.WARNING} message="אזהרה" />)
    fireEvent.click(screen.getByText('trigger'))
    expect(screen.getByText('אזהרה')).toBeInTheDocument()
  })

  it('shows a danger toast', () => {
    renderWithProvider(<ToastTrigger type={TOAST_TYPES.DANGER} message="שגיאה" />)
    fireEvent.click(screen.getByText('trigger'))
    expect(screen.getByText('שגיאה')).toBeInTheDocument()
  })

  it('auto-dismisses the toast after deleteTime ms', () => {
    renderWithProvider(
      <ToastTrigger type={TOAST_TYPES.SUCCESS} message="אוטומטי" />,
      { deleteTime: 3000 }
    )
    fireEvent.click(screen.getByText('trigger'))
    expect(screen.getByText('אוטומטי')).toBeInTheDocument()

    act(() => {
      jest.advanceTimersByTime(3000)
    })

    expect(screen.queryByText('אוטומטי')).not.toBeInTheDocument()
  })

  it('removes the toast when the close button is clicked', () => {
    renderWithProvider(<ToastTrigger type={TOAST_TYPES.INFO} message="סגור אותי" />)
    fireEvent.click(screen.getByText('trigger'))
    expect(screen.getByText('סגור אותי')).toBeInTheDocument()

    fireEvent.click(screen.getByLabelText('close'))
    expect(screen.queryByText('סגור אותי')).not.toBeInTheDocument()
  })

  it('enforces maxToasts — drops oldest when limit is exceeded', () => {
    renderWithProvider(
      <>
        <ToastTrigger type={TOAST_TYPES.SUCCESS} message="msg-1" />
        <ToastTrigger type={TOAST_TYPES.INFO} message="msg-2" />
        <ToastTrigger type={TOAST_TYPES.WARNING} message="msg-3" />
      </>,
      { maxToasts: 2 }
    )

    const buttons = screen.getAllByText('trigger')
    // Add 3 toasts — first should be dropped
    fireEvent.click(buttons[0])
    fireEvent.click(buttons[1])
    fireEvent.click(buttons[2])

    // Only the 2 most recent should be visible
    expect(screen.queryByText('msg-1')).not.toBeInTheDocument()
    expect(screen.getByText('msg-2')).toBeInTheDocument()
    expect(screen.getByText('msg-3')).toBeInTheDocument()
  })

  it('renders multiple toasts at once', () => {
    renderWithProvider(
      <>
        <ToastTrigger type={TOAST_TYPES.SUCCESS} message="first" />
        <ToastTrigger type={TOAST_TYPES.DANGER} message="second" />
      </>
    )
    const buttons = screen.getAllByText('trigger')
    fireEvent.click(buttons[0])
    fireEvent.click(buttons[1])

    expect(screen.getByText('first')).toBeInTheDocument()
    expect(screen.getByText('second')).toBeInTheDocument()
  })

  it('falls back to info style for an unknown toast type', () => {
    renderWithProvider(<ToastTrigger type="unknown-type" message="fallback msg" />)
    fireEvent.click(screen.getByText('trigger'))
    expect(screen.getByText('fallback msg')).toBeInTheDocument()
  })
})

// ─── TOAST_TYPES constants ────────────────────────────────────────────────────

describe('TOAST_TYPES', () => {
  it('has all four type constants', () => {
    expect(TOAST_TYPES.SUCCESS).toBe('success')
    expect(TOAST_TYPES.INFO).toBe('info')
    expect(TOAST_TYPES.WARNING).toBe('warning')
    expect(TOAST_TYPES.DANGER).toBe('danger')
  })
})

// ─── useToast hook ────────────────────────────────────────────────────────────

describe('useToast', () => {
  it('returns a function', () => {
    const Probe = () => {
      const addToast = useToast()
      return <span data-testid="fn-type">{typeof addToast}</span>
    }
    render(
      <IpsToastProvider>
        <Probe />
      </IpsToastProvider>
    )
    expect(screen.getByTestId('fn-type')).toHaveTextContent('function')
  })
})
