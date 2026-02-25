import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { IpsDateTimePicker } from './IpsDateTimePicker'

const theme = createTheme()

const wrap = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('IpsDateTimePicker', () => {
  // ── Rendering ──────────────────────────────────────────────────────────────

  it('renders without crashing', () => {
    wrap(<IpsDateTimePicker label="תאריך ושעה" value={null} onChange={jest.fn()} />)
    expect(document.querySelector('.ips-date-time-picker')).toBeInTheDocument()
  })

  it('renders an input element', () => {
    wrap(<IpsDateTimePicker label="תאריך ושעה" value={null} onChange={jest.fn()} />)
    expect(document.querySelector('input')).toBeInTheDocument()
  })

  it('renders label text', () => {
    wrap(
      <IpsDateTimePicker label="תאריך פגישה" value={null} onChange={jest.fn()} />
    )
    const matches = screen.getAllByText('תאריך פגישה')
    expect(matches.length).toBeGreaterThan(0)
  })

  // ── className ──────────────────────────────────────────────────────────────

  it('applies ips-date-time-picker class to the container', () => {
    wrap(<IpsDateTimePicker label="תאריך ושעה" value={null} onChange={jest.fn()} />)
    expect(document.querySelector('.ips-date-time-picker')).toBeInTheDocument()
  })

  it('appends extra className to the container', () => {
    wrap(
      <IpsDateTimePicker
        label="תאריך ושעה"
        value={null}
        onChange={jest.fn()}
        className="custom-cls"
      />
    )
    expect(
      document.querySelector('.ips-date-time-picker.custom-cls')
    ).toBeInTheDocument()
  })

  // ── displayName + forwardRef ───────────────────────────────────────────────

  it('has displayName IpsDateTimePicker', () => {
    expect(IpsDateTimePicker.displayName).toBe('IpsDateTimePicker')
  })

  it('forwards ref to the container div', () => {
    const ref = React.createRef<HTMLDivElement>()
    wrap(
      <IpsDateTimePicker
        label="תאריך ושעה"
        value={null}
        onChange={jest.fn()}
        ref={ref}
      />
    )
    expect(ref.current).toBeInstanceOf(HTMLElement)
    expect(ref.current).toHaveClass('ips-date-time-picker')
  })

  // ── Props ──────────────────────────────────────────────────────────────────

  it('renders with a Date value without crashing', () => {
    wrap(
      <IpsDateTimePicker
        label="תאריך ושעה"
        value={new Date(2025, 0, 15, 14, 30)}
        onChange={jest.fn()}
      />
    )
    expect(document.querySelector('.ips-date-time-picker')).toBeInTheDocument()
  })

  it('renders in disabled state — input is disabled', () => {
    wrap(
      <IpsDateTimePicker label="תאריך ושעה" value={null} onChange={jest.fn()} disabled />
    )
    expect(document.querySelector('input')).toBeDisabled()
  })

  it('renders in readOnly state without crashing', () => {
    wrap(
      <IpsDateTimePicker
        label="תאריך ושעה"
        value={new Date(2025, 0, 15, 9, 0)}
        onChange={jest.fn()}
        readOnly
      />
    )
    expect(document.querySelector('.ips-date-time-picker')).toBeInTheDocument()
  })

  it('applies custom format without crashing', () => {
    wrap(
      <IpsDateTimePicker
        label="תאריך ושעה"
        value={null}
        onChange={jest.fn()}
        format="MM/dd/yyyy HH:mm"
      />
    )
    expect(document.querySelector('.ips-date-time-picker')).toBeInTheDocument()
  })

  // ── RTL ────────────────────────────────────────────────────────────────────

  it('sets dir="rtl" on the wrapper when rtl=true', () => {
    wrap(
      <IpsDateTimePicker
        label="תאריך ושעה"
        value={null}
        onChange={jest.fn()}
        rtl
      />
    )
    const wrapper = document.querySelector('.ips-date-time-picker')
    expect(wrapper).toHaveAttribute('dir', 'rtl')
  })

  it('does not set dir attribute when rtl is false', () => {
    wrap(
      <IpsDateTimePicker label="תאריך ושעה" value={null} onChange={jest.fn()} />
    )
    const wrapper = document.querySelector('.ips-date-time-picker')
    expect(wrapper).not.toHaveAttribute('dir')
  })

  // ── helperText + error ─────────────────────────────────────────────────────

  it('renders helperText below the field', () => {
    wrap(
      <IpsDateTimePicker
        label="תאריך ושעה"
        value={null}
        onChange={jest.fn()}
        helperText="DD/MM/YYYY HH:MM"
      />
    )
    expect(screen.getByText('DD/MM/YYYY HH:MM')).toBeInTheDocument()
  })

  it('renders error state with helperText', () => {
    wrap(
      <IpsDateTimePicker
        label="תאריך ושעה"
        value={null}
        onChange={jest.fn()}
        error
        helperText="שדה חובה"
      />
    )
    expect(screen.getByText('שדה חובה')).toBeInTheDocument()
  })

  // ── sx ─────────────────────────────────────────────────────────────────────

  it('accepts sx prop without crashing', () => {
    wrap(
      <IpsDateTimePicker
        label="תאריך ושעה"
        value={null}
        onChange={jest.fn()}
        sx={{ mt: 2 }}
      />
    )
    expect(document.querySelector('.ips-date-time-picker')).toBeInTheDocument()
  })
})
