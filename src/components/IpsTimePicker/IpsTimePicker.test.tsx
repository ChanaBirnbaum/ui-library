import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import moment from 'moment'
import 'moment/locale/he'
import { IpsTimePicker } from './IpsTimePicker'

const theme = createTheme()

const wrap = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('IpsTimePicker', () => {
  // ── Rendering ──────────────────────────────────────────────────────────────

  it('renders without crashing', () => {
    wrap(<IpsTimePicker label="שעה" value={null} onChange={jest.fn()} />)
    expect(document.querySelector('.ips-time-picker')).toBeInTheDocument()
  })

  it('renders label text', () => {
    wrap(<IpsTimePicker label="שעת הגעה" value={null} onChange={jest.fn()} />)
    // MUI TextField renders label in both <label> and <legend> — use getAllByText
    const matches = screen.getAllByText('שעת הגעה')
    expect(matches.length).toBeGreaterThan(0)
  })

  it('renders an input element', () => {
    wrap(<IpsTimePicker label="שעה" value={null} onChange={jest.fn()} />)
    expect(document.querySelector('input')).toBeInTheDocument()
  })

  // ── className ──────────────────────────────────────────────────────────────

  it('applies ips-time-picker class to the container', () => {
    wrap(<IpsTimePicker label="שעה" value={null} onChange={jest.fn()} />)
    expect(document.querySelector('.ips-time-picker')).toBeInTheDocument()
  })

  it('appends extra className to the container', () => {
    wrap(
      <IpsTimePicker
        label="שעה"
        value={null}
        onChange={jest.fn()}
        className="custom-cls"
      />
    )
    const container = document.querySelector('.ips-time-picker')
    expect(container).toHaveClass('custom-cls')
  })

  // ── displayName + forwardRef ───────────────────────────────────────────────

  it('has displayName IpsTimePicker', () => {
    expect(IpsTimePicker.displayName).toBe('IpsTimePicker')
  })

  it('forwards ref to the container div', () => {
    const ref = React.createRef<HTMLDivElement>()
    wrap(<IpsTimePicker label="שעה" value={null} onChange={jest.fn()} ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLElement)
    expect(ref.current).toHaveClass('ips-time-picker')
  })

  // ── Props ──────────────────────────────────────────────────────────────────

  it('renders with a Moment value without crashing', () => {
    const value = moment('14:30', 'HH:mm')
    wrap(<IpsTimePicker label="שעה" value={value} onChange={jest.fn()} />)
    expect(document.querySelector('.ips-time-picker')).toBeInTheDocument()
  })

  it('renders in disabled state — input is disabled', () => {
    wrap(<IpsTimePicker label="שעה" value={null} onChange={jest.fn()} disabled />)
    const input = document.querySelector('input')
    expect(input).toBeDisabled()
  })

  it('renders with ampm=false (24-hour mode) without crashing', () => {
    wrap(
      <IpsTimePicker label="שעה" value={null} onChange={jest.fn()} ampm={false} />
    )
    expect(document.querySelector('.ips-time-picker')).toBeInTheDocument()
  })

  it('renders with ampm=true (12-hour mode) without crashing', () => {
    wrap(
      <IpsTimePicker label="שעה" value={null} onChange={jest.fn()} ampm />
    )
    expect(document.querySelector('.ips-time-picker')).toBeInTheDocument()
  })

  it('renders with minTime and maxTime without crashing', () => {
    wrap(
      <IpsTimePicker
        label="שעה"
        value={null}
        onChange={jest.fn()}
        minTime={moment('09:00', 'HH:mm')}
        maxTime={moment('17:00', 'HH:mm')}
      />
    )
    expect(document.querySelector('.ips-time-picker')).toBeInTheDocument()
  })

  // ── Legacy API ─────────────────────────────────────────────────────────────

  it('accepts the legacy mask prop without crashing (no-op)', () => {
    expect(() =>
      wrap(
        <IpsTimePicker
          label="שעה"
          value={null}
          onChange={jest.fn()}
          mask="__:__"
        />
      )
    ).not.toThrow()
  })

  // ── sx / styling ───────────────────────────────────────────────────────────

  it('applies sx prop to the container without crashing', () => {
    wrap(
      <IpsTimePicker
        label="שעה"
        value={null}
        onChange={jest.fn()}
        sx={{ mt: 2 }}
      />
    )
    expect(document.querySelector('.ips-time-picker')).toBeInTheDocument()
  })

  // ── error / helperText ───────────────────────────────────────────────────────────

  it('displays helperText below the field', () => {
    wrap(
      <IpsTimePicker
        label="שעה"
        value={null}
        onChange={jest.fn()}
        helperText="שדה חובה"
      />
    )
    expect(screen.getByText('שדה חובה')).toBeInTheDocument()
  })

  it('renders with error=true without crashing', () => {
    wrap(
      <IpsTimePicker
        label="שעה"
        value={null}
        onChange={jest.fn()}
        error
        helperText="שגיאה בשעה"
      />
    )
    expect(screen.getByText('שגיאה בשעה')).toBeInTheDocument()
  })
})
