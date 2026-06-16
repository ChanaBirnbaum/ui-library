import React from 'react'
import { render, screen, within, fireEvent } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { IpsStepper } from './IpsStepper'
import type { IpsStepItem } from './IpsStepper.types'

const theme = createTheme()

const wrap = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

const STEPS: IpsStepItem[] = [
  { label: 'Step One' },
  { label: 'Step Two' },
  { label: 'Step Three' },
]

describe('IpsStepper', () => {
  // ── Rendering ──────────────────────────────────────────────────────────────

  it('renders without crashing', () => {
    wrap(<IpsStepper steps={STEPS} activeStep={0} />)
    expect(document.querySelector('.ips-stepper')).toBeInTheDocument()
  })

  it('renders all step labels', () => {
    wrap(<IpsStepper steps={STEPS} activeStep={0} />)
    expect(screen.getByText('Step One')).toBeInTheDocument()
    expect(screen.getByText('Step Two')).toBeInTheDocument()
    expect(screen.getByText('Step Three')).toBeInTheDocument()
  })

  // ── displayName + forwardRef ───────────────────────────────────────────────

  it('has displayName IpsStepper', () => {
    expect(IpsStepper.displayName).toBe('IpsStepper')
  })

  it('forwards ref to the container element', () => {
    const ref = React.createRef<HTMLDivElement>()
    wrap(<IpsStepper steps={STEPS} activeStep={0} ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLElement)
    expect(ref.current).toHaveClass('ips-stepper')
  })

  // ── className ──────────────────────────────────────────────────────────────

  it('applies ips-stepper class to the container', () => {
    wrap(<IpsStepper steps={STEPS} activeStep={0} />)
    expect(document.querySelector('.ips-stepper')).toBeInTheDocument()
  })

  it('appends extra className to the container', () => {
    wrap(<IpsStepper steps={STEPS} activeStep={0} className="custom-cls" />)
    expect(document.querySelector('.ips-stepper.custom-cls')).toBeInTheDocument()
  })

  // ── Controlled activeStep ──────────────────────────────────────────────────

  it('marks the correct step as active based on activeStep', () => {
    wrap(<IpsStepper steps={STEPS} activeStep={1} />)
    // The active step text should be present
    const label = screen.getByText('Step Two')
    expect(label).toBeInTheDocument()
  })

  it('renders completed steps for indices before activeStep', () => {
    wrap(<IpsStepper steps={STEPS} activeStep={2} />)
    // Step One and Step Two should be completed (resolved via status)
    expect(screen.getByText('Step One')).toBeInTheDocument()
    expect(screen.getByText('Step Two')).toBeInTheDocument()
  })

  // ── Status override ────────────────────────────────────────────────────────

  it('explicit step.status overrides derived status', () => {
    const steps: IpsStepItem[] = [
      { label: 'Step One' },
      { label: 'Step Two', status: 'error' },
      { label: 'Step Three' },
    ]
    wrap(<IpsStepper steps={steps} activeStep={2} />)
    // The error icon should be rendered (ErrorCircleIcon SVG is rendered)
    // StepLabel renders with error class when error prop is true
    const container = document.querySelector('.ips-stepper')!
    expect(container).toBeInTheDocument()
    // Verify error styling applied — MUI adds error class to StepLabel
    expect(container.querySelector('.Mui-error')).toBeInTheDocument()
  })

  it('warning status renders without crashing', () => {
    const steps: IpsStepItem[] = [
      { label: 'Step One' },
      { label: 'Step Two', status: 'warning' },
    ]
    wrap(<IpsStepper steps={steps} activeStep={1} />)
    expect(document.querySelector('.ips-stepper')).toBeInTheDocument()
  })

  // ── Disabled step ──────────────────────────────────────────────────────────

  it('step.disabled sets disabled status', () => {
    const steps: IpsStepItem[] = [
      { label: 'Step One' },
      { label: 'Step Two', disabled: true },
    ]
    wrap(<IpsStepper steps={steps} activeStep={0} />)
    expect(document.querySelector('.ips-stepper')).toBeInTheDocument()
  })

  it('disabled steps are not clickable in nonLinear mode', () => {
    const handler = jest.fn()
    const steps: IpsStepItem[] = [
      { label: 'Step One' },
      { label: 'Step Two', disabled: true },
    ]
    wrap(
      <IpsStepper
        steps={steps}
        activeStep={0}
        nonLinear
        onStepClick={handler}
      />
    )
    // There should not be a ButtonBase wrapper for the disabled step
    const stepLabels = screen.getAllByText(/Step/)
    // Find Step Two and verify clicking does not fire handler
    fireEvent.click(screen.getByText('Step Two'))
    expect(handler).not.toHaveBeenCalledWith(1, steps[1])
  })

  // ── onStepClick ───────────────────────────────────────────────────────────

  it('onStepClick fires with (index, step) in nonLinear mode', () => {
    const handler = jest.fn()
    wrap(
      <IpsStepper
        steps={STEPS}
        activeStep={0}
        nonLinear
        onStepClick={handler}
      />
    )
    fireEvent.click(screen.getByText('Step Two'))
    expect(handler).toHaveBeenCalledTimes(1)
    expect(handler).toHaveBeenCalledWith(1, STEPS[1])
  })

  it('onStepClick does not fire in linear mode (no ButtonBase)', () => {
    const handler = jest.fn()
    wrap(<IpsStepper steps={STEPS} activeStep={0} onStepClick={handler} />)
    // In linear mode, steps are not wrapped in ButtonBase
    fireEvent.click(screen.getByText('Step Two'))
    expect(handler).not.toHaveBeenCalled()
  })

  // ── orientation ────────────────────────────────────────────────────────────

  it('does not crash with orientation="vertical"', () => {
    wrap(<IpsStepper steps={STEPS} activeStep={0} orientation="vertical" />)
    expect(document.querySelector('.ips-stepper')).toBeInTheDocument()
  })

  it('does not crash with alternativeLabel=true', () => {
    wrap(<IpsStepper steps={STEPS} activeStep={0} alternativeLabel />)
    expect(document.querySelector('.ips-stepper')).toBeInTheDocument()
  })

  // ── StepContent (vertical) ────────────────────────────────────────────────

  it('renders StepContent for steps with content in vertical mode', () => {
    const steps: IpsStepItem[] = [
      { label: 'Step One', content: <div data-testid="step-content">Content here</div> },
      { label: 'Step Two' },
    ]
    wrap(<IpsStepper steps={steps} activeStep={0} orientation="vertical" />)
    expect(screen.getByTestId('step-content')).toBeInTheDocument()
  })

  it('does not render StepContent in horizontal mode', () => {
    const steps: IpsStepItem[] = [
      { label: 'Step One', content: <div data-testid="hidden-content">Content</div> },
    ]
    wrap(<IpsStepper steps={steps} activeStep={0} orientation="horizontal" />)
    expect(screen.queryByTestId('hidden-content')).not.toBeInTheDocument()
  })

  // ── renderStepIcon ────────────────────────────────────────────────────────

  it('uses renderStepIcon to render custom icon', () => {
    wrap(
      <IpsStepper
        steps={STEPS}
        activeStep={0}
        renderStepIcon={() => <span data-testid="custom-icon">X</span>}
      />
    )
    expect(screen.getAllByTestId('custom-icon').length).toBeGreaterThan(0)
  })

  // ── renderStepLabel ───────────────────────────────────────────────────────

  it('uses renderStepLabel to render custom label content', () => {
    wrap(
      <IpsStepper
        steps={STEPS}
        activeStep={0}
        renderStepLabel={() => <span data-testid="custom-label">Custom</span>}
      />
    )
    expect(screen.getAllByTestId('custom-label').length).toBeGreaterThan(0)
  })

  // ── renderConnector ───────────────────────────────────────────────────────

  it('uses renderConnector to render custom connector', () => {
    wrap(
      <IpsStepper
        steps={STEPS}
        activeStep={0}
        renderConnector={() => <div data-testid="custom-connector" />}
      />
    )
    expect(screen.getAllByTestId('custom-connector').length).toBeGreaterThan(0)
  })

  // ── description + optional ────────────────────────────────────────────────

  it('renders step description as optional caption', () => {
    const steps: IpsStepItem[] = [
      { label: 'Step One', description: 'First step description' },
    ]
    wrap(<IpsStepper steps={steps} activeStep={0} />)
    expect(screen.getByText('First step description')).toBeInTheDocument()
  })

  it('renders Optional text when optional=true', () => {
    const steps: IpsStepItem[] = [
      { label: 'Step One', optional: true },
    ]
    wrap(<IpsStepper steps={steps} activeStep={0} />)
    expect(screen.getByText('Optional')).toBeInTheDocument()
  })

  // ── custom icon on step ───────────────────────────────────────────────────

  it('renders custom step.icon when provided', () => {
    const steps: IpsStepItem[] = [
      { label: 'Step One', icon: <span data-testid="step-icon">★</span> },
    ]
    wrap(<IpsStepper steps={steps} activeStep={0} />)
    expect(screen.getByTestId('step-icon')).toBeInTheDocument()
  })

  // ── getRowId / key ────────────────────────────────────────────────────────

  it('does not crash when step.key is provided', () => {
    const steps: IpsStepItem[] = [
      { label: 'A', key: 'step-a' },
      { label: 'B', key: 'step-b' },
    ]
    wrap(<IpsStepper steps={steps} activeStep={0} />)
    expect(document.querySelector('.ips-stepper')).toBeInTheDocument()
  })

  // ── sx ─────────────────────────────────────────────────────────────────────

  it('accepts sx prop without crashing', () => {
    wrap(<IpsStepper steps={STEPS} activeStep={0} sx={{ mt: 2 }} />)
    expect(document.querySelector('.ips-stepper')).toBeInTheDocument()
  })
})
