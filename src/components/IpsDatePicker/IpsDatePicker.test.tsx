import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { IpsDatePicker } from './IpsDatePicker'

const theme = createTheme()

const wrap = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('IpsDatePicker', () => {
  // ── Rendering ──────────────────────────────────────────────────────────────

  it('renders without crashing', () => {
    wrap(<IpsDatePicker label="תאריך" value={null} onChange={jest.fn()} />)
    expect(document.querySelector('.ips-date-picker')).toBeInTheDocument()
  })

  it('renders an input element', () => {
    wrap(<IpsDatePicker label="תאריך" value={null} onChange={jest.fn()} />)
    expect(document.querySelector('input')).toBeInTheDocument()
  })

  it('renders label text', () => {
    wrap(<IpsDatePicker label="תאריך פגישה" value={null} onChange={jest.fn()} />)
    // MUI renders label in both <label> and <legend>
    const matches = screen.getAllByText('תאריך פגישה')
    expect(matches.length).toBeGreaterThan(0)
  })

  // ── className ──────────────────────────────────────────────────────────────

  it('applies ips-date-picker class to the container', () => {
    wrap(<IpsDatePicker label="תאריך" value={null} onChange={jest.fn()} />)
    expect(document.querySelector('.ips-date-picker')).toBeInTheDocument()
  })

  it('appends extra className to the container', () => {
    wrap(
      <IpsDatePicker
        label="תאריך"
        value={null}
        onChange={jest.fn()}
        className="custom-cls"
      />
    )
    expect(document.querySelector('.ips-date-picker.custom-cls')).toBeInTheDocument()
  })

  // ── displayName + forwardRef ───────────────────────────────────────────────

  it('has displayName IpsDatePicker', () => {
    expect(IpsDatePicker.displayName).toBe('IpsDatePicker')
  })

  it('forwards ref to the container div', () => {
    const ref = React.createRef<HTMLDivElement>()
    wrap(<IpsDatePicker label="תאריך" value={null} onChange={jest.fn()} ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLElement)
    expect(ref.current).toHaveClass('ips-date-picker')
  })

  // ── Props ──────────────────────────────────────────────────────────────────

  it('renders with a Date value without crashing', () => {
    wrap(
      <IpsDatePicker
        label="תאריך"
        value={new Date(2025, 0, 15)}
        onChange={jest.fn()}
      />
    )
    expect(document.querySelector('.ips-date-picker')).toBeInTheDocument()
  })

  it('renders in disabled state — input is disabled', () => {
    wrap(<IpsDatePicker label="תאריך" value={null} onChange={jest.fn()} disabled />)
    expect(document.querySelector('input')).toBeDisabled()
  })

  it('renders in readOnly state without crashing', () => {
    wrap(
      <IpsDatePicker
        label="תאריך"
        value={new Date(2025, 0, 15)}
        onChange={jest.fn()}
        readOnly
      />
    )
    expect(document.querySelector('.ips-date-picker')).toBeInTheDocument()
  })

  it('renders with minDate and maxDate without crashing', () => {
    wrap(
      <IpsDatePicker
        label="תאריך"
        value={null}
        onChange={jest.fn()}
        minDate={new Date(2025, 0, 1)}
        maxDate={new Date(2025, 11, 31)}
      />
    )
    expect(document.querySelector('.ips-date-picker')).toBeInTheDocument()
  })

  it('renders with custom format without crashing', () => {
    wrap(
      <IpsDatePicker
        label="תאריך"
        value={null}
        onChange={jest.fn()}
        format="MM/dd/yyyy"
      />
    )
    expect(document.querySelector('.ips-date-picker')).toBeInTheDocument()
  })

  // ── RTL ────────────────────────────────────────────────────────────────────

  it('sets dir="rtl" on the container when rtl=true', () => {
    wrap(<IpsDatePicker label="תאריך" value={null} onChange={jest.fn()} rtl />)
    const container = document.querySelector('.ips-date-picker') as HTMLElement
    expect(container.getAttribute('dir')).toBe('rtl')
  })

  it('does not set dir when rtl is not provided', () => {
    wrap(<IpsDatePicker label="תאריך" value={null} onChange={jest.fn()} />)
    const container = document.querySelector('.ips-date-picker') as HTMLElement
    expect(container.getAttribute('dir')).toBeNull()
  })

  // ── error / helperText ────────────────────────────────────────────────────

  it('displays helperText below the field', () => {
    wrap(
      <IpsDatePicker
        label="תאריך"
        value={null}
        onChange={jest.fn()}
        helperText="שדה חובה"
      />
    )
    expect(screen.getByText('שדה חובה')).toBeInTheDocument()
  })

  it('renders with error=true and helperText without crashing', () => {
    wrap(
      <IpsDatePicker
        label="תאריך"
        value={null}
        onChange={jest.fn()}
        error
        helperText="תאריך לא תקין"
      />
    )
    expect(screen.getByText('תאריך לא תקין')).toBeInTheDocument()
  })

  // ── sx ────────────────────────────────────────────────────────────────────

  it('applies sx prop without crashing', () => {
    wrap(
      <IpsDatePicker
        label="תאריך"
        value={null}
        onChange={jest.fn()}
        sx={{ mt: 2 }}
      />
    )
    expect(document.querySelector('.ips-date-picker')).toBeInTheDocument()
  })
})
