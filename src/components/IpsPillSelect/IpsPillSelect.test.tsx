import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { IpsPillSelect } from './IpsPillSelect'

const theme = createTheme()

const wrap = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

const options = [
  { label: 'React', value: 'react' },
  { label: 'Vue', value: 'vue' },
  { label: 'Angular', value: 'angular' },
]

describe('IpsPillSelect', () => {
  // ── Rendering ──────────────────────────────────────────────────────────────

  it('renders without crashing', () => {
    wrap(<IpsPillSelect options={options} />)
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Vue')).toBeInTheDocument()
    expect(screen.getByText('Angular')).toBeInTheDocument()
  })

  it('renders a pill for each option', () => {
    wrap(<IpsPillSelect options={options} />)
    const pills = document.querySelectorAll('.ips-pill')
    expect(pills).toHaveLength(3)
  })

  it('applies ips-pill-select class to container', () => {
    wrap(<IpsPillSelect options={options} />)
    expect(document.querySelector('.ips-pill-select')).toBeInTheDocument()
  })

  it('applies extra className to container', () => {
    wrap(<IpsPillSelect options={options} className="custom-class" />)
    const container = document.querySelector('.ips-pill-select')
    expect(container).toHaveClass('custom-class')
  })

  it('has displayName IpsPillSelect', () => {
    expect(IpsPillSelect.displayName).toBe('IpsPillSelect')
  })

  it('renders empty when no options provided', () => {
    wrap(<IpsPillSelect options={[]} />)
    const pills = document.querySelectorAll('.ips-pill')
    expect(pills).toHaveLength(0)
  })

  // ── forwardRef ─────────────────────────────────────────────────────────────

  it('forwards ref to the container div', () => {
    const ref = React.createRef<HTMLDivElement>()
    wrap(<IpsPillSelect options={options} ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLElement)
    expect(ref.current).toHaveClass('ips-pill-select')
  })

  // ── Single select ──────────────────────────────────────────────────────────

  it('calls onChange with value when a pill is clicked (single mode)', () => {
    const handleChange = jest.fn()
    wrap(<IpsPillSelect options={options} value="" onChange={handleChange} />)
    fireEvent.click(screen.getByText('React'))
    expect(handleChange).toHaveBeenCalledWith('react')
  })

  it('deselects a selected pill when clicked again (single mode toggle)', () => {
    const handleChange = jest.fn()
    wrap(
      <IpsPillSelect
        options={options}
        value="react"
        onChange={handleChange}
      />
    )
    fireEvent.click(screen.getByText('React'))
    expect(handleChange).toHaveBeenCalledWith('')
  })

  it('does not call onChange when no handler is provided', () => {
    // should not throw
    wrap(<IpsPillSelect options={options} value="" />)
    expect(() => fireEvent.click(screen.getByText('React'))).not.toThrow()
  })

  // ── Multiple select ────────────────────────────────────────────────────────

  it('calls onChange with array when a pill is clicked (multiple mode)', () => {
    const handleChange = jest.fn()
    wrap(
      <IpsPillSelect
        options={options}
        value={[]}
        onChange={handleChange}
        multiple
      />
    )
    fireEvent.click(screen.getByText('Vue'))
    expect(handleChange).toHaveBeenCalledWith(['vue'])
  })

  it('adds to existing selection in multiple mode', () => {
    const handleChange = jest.fn()
    wrap(
      <IpsPillSelect
        options={options}
        value={['react']}
        onChange={handleChange}
        multiple
      />
    )
    fireEvent.click(screen.getByText('Vue'))
    expect(handleChange).toHaveBeenCalledWith(['react', 'vue'])
  })

  it('removes from selection when clicking a selected pill (multiple mode)', () => {
    const handleChange = jest.fn()
    wrap(
      <IpsPillSelect
        options={options}
        value={['react', 'vue']}
        onChange={handleChange}
        multiple
      />
    )
    fireEvent.click(screen.getByText('React'))
    expect(handleChange).toHaveBeenCalledWith(['vue'])
  })

  // ── Disabled ───────────────────────────────────────────────────────────────

  it('does not call onChange when disabled', () => {
    const handleChange = jest.fn()
    wrap(
      <IpsPillSelect
        options={options}
        value=""
        onChange={handleChange}
        disabled
      />
    )
    fireEvent.click(screen.getByText('React'))
    expect(handleChange).not.toHaveBeenCalled()
  })

  it('renders container when disabled', () => {
    // MUI sx applies styles via emotion (CSS classes), not inline styles,
    // so visual props like opacity/pointerEvents are verified via behaviour tests.
    wrap(<IpsPillSelect options={options} disabled />)
    const container = document.querySelector('.ips-pill-select') as HTMLElement
    expect(container).toBeInTheDocument()
    // Clicking any pill should NOT fire onChange (confirmed by "does not call onChange when disabled")
    expect(container.querySelectorAll('.ips-pill')).toHaveLength(3)
  })

  // ── Size ───────────────────────────────────────────────────────────────────

  it('renders with size="small" without errors', () => {
    wrap(<IpsPillSelect options={options} size="small" />)
    expect(screen.getByText('React')).toBeInTheDocument()
  })

  it('renders with size="medium" (default) without errors', () => {
    wrap(<IpsPillSelect options={options} size="medium" />)
    expect(screen.getByText('React')).toBeInTheDocument()
  })
})
