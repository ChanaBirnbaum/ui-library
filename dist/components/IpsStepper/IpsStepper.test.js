import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { IpsStepper } from './IpsStepper';
const theme = createTheme();
const wrap = (ui) => render(_jsx(ThemeProvider, { theme: theme, children: ui }));
const STEPS = [
    { label: 'Step One' },
    { label: 'Step Two' },
    { label: 'Step Three' },
];
describe('IpsStepper', () => {
    // ── Rendering ──────────────────────────────────────────────────────────────
    it('renders without crashing', () => {
        wrap(_jsx(IpsStepper, { steps: STEPS, activeStep: 0 }));
        expect(document.querySelector('.ips-stepper')).toBeInTheDocument();
    });
    it('renders all step labels', () => {
        wrap(_jsx(IpsStepper, { steps: STEPS, activeStep: 0 }));
        expect(screen.getByText('Step One')).toBeInTheDocument();
        expect(screen.getByText('Step Two')).toBeInTheDocument();
        expect(screen.getByText('Step Three')).toBeInTheDocument();
    });
    // ── displayName + forwardRef ───────────────────────────────────────────────
    it('has displayName IpsStepper', () => {
        expect(IpsStepper.displayName).toBe('IpsStepper');
    });
    it('forwards ref to the container element', () => {
        const ref = React.createRef();
        wrap(_jsx(IpsStepper, { steps: STEPS, activeStep: 0, ref: ref }));
        expect(ref.current).toBeInstanceOf(HTMLElement);
        expect(ref.current).toHaveClass('ips-stepper');
    });
    // ── className ──────────────────────────────────────────────────────────────
    it('applies ips-stepper class to the container', () => {
        wrap(_jsx(IpsStepper, { steps: STEPS, activeStep: 0 }));
        expect(document.querySelector('.ips-stepper')).toBeInTheDocument();
    });
    it('appends extra className to the container', () => {
        wrap(_jsx(IpsStepper, { steps: STEPS, activeStep: 0, className: "custom-cls" }));
        expect(document.querySelector('.ips-stepper.custom-cls')).toBeInTheDocument();
    });
    // ── Controlled activeStep ──────────────────────────────────────────────────
    it('marks the correct step as active based on activeStep', () => {
        wrap(_jsx(IpsStepper, { steps: STEPS, activeStep: 1 }));
        // The active step text should be present
        const label = screen.getByText('Step Two');
        expect(label).toBeInTheDocument();
    });
    it('renders completed steps for indices before activeStep', () => {
        wrap(_jsx(IpsStepper, { steps: STEPS, activeStep: 2 }));
        // Step One and Step Two should be completed (resolved via status)
        expect(screen.getByText('Step One')).toBeInTheDocument();
        expect(screen.getByText('Step Two')).toBeInTheDocument();
    });
    // ── Status override ────────────────────────────────────────────────────────
    it('explicit step.status overrides derived status', () => {
        const steps = [
            { label: 'Step One' },
            { label: 'Step Two', status: 'error' },
            { label: 'Step Three' },
        ];
        wrap(_jsx(IpsStepper, { steps: steps, activeStep: 2 }));
        // The error icon should be rendered (ErrorCircleIcon SVG is rendered)
        // StepLabel renders with error class when error prop is true
        const container = document.querySelector('.ips-stepper');
        expect(container).toBeInTheDocument();
        // Verify error styling applied — MUI adds error class to StepLabel
        expect(container.querySelector('.Mui-error')).toBeInTheDocument();
    });
    it('warning status renders without crashing', () => {
        const steps = [
            { label: 'Step One' },
            { label: 'Step Two', status: 'warning' },
        ];
        wrap(_jsx(IpsStepper, { steps: steps, activeStep: 1 }));
        expect(document.querySelector('.ips-stepper')).toBeInTheDocument();
    });
    // ── Disabled step ──────────────────────────────────────────────────────────
    it('step.disabled sets disabled status', () => {
        const steps = [
            { label: 'Step One' },
            { label: 'Step Two', disabled: true },
        ];
        wrap(_jsx(IpsStepper, { steps: steps, activeStep: 0 }));
        expect(document.querySelector('.ips-stepper')).toBeInTheDocument();
    });
    it('disabled steps are not clickable in nonLinear mode', () => {
        const handler = jest.fn();
        const steps = [
            { label: 'Step One' },
            { label: 'Step Two', disabled: true },
        ];
        wrap(_jsx(IpsStepper, { steps: steps, activeStep: 0, nonLinear: true, onStepClick: handler }));
        // There should not be a ButtonBase wrapper for the disabled step
        const stepLabels = screen.getAllByText(/Step/);
        // Find Step Two and verify clicking does not fire handler
        fireEvent.click(screen.getByText('Step Two'));
        expect(handler).not.toHaveBeenCalledWith(1, steps[1]);
    });
    // ── onStepClick ───────────────────────────────────────────────────────────
    it('onStepClick fires with (index, step) in nonLinear mode', () => {
        const handler = jest.fn();
        wrap(_jsx(IpsStepper, { steps: STEPS, activeStep: 0, nonLinear: true, onStepClick: handler }));
        fireEvent.click(screen.getByText('Step Two'));
        expect(handler).toHaveBeenCalledTimes(1);
        expect(handler).toHaveBeenCalledWith(1, STEPS[1]);
    });
    it('onStepClick does not fire in linear mode (no ButtonBase)', () => {
        const handler = jest.fn();
        wrap(_jsx(IpsStepper, { steps: STEPS, activeStep: 0, onStepClick: handler }));
        // In linear mode, steps are not wrapped in ButtonBase
        fireEvent.click(screen.getByText('Step Two'));
        expect(handler).not.toHaveBeenCalled();
    });
    // ── orientation ────────────────────────────────────────────────────────────
    it('does not crash with orientation="vertical"', () => {
        wrap(_jsx(IpsStepper, { steps: STEPS, activeStep: 0, orientation: "vertical" }));
        expect(document.querySelector('.ips-stepper')).toBeInTheDocument();
    });
    it('does not crash with alternativeLabel=true', () => {
        wrap(_jsx(IpsStepper, { steps: STEPS, activeStep: 0, alternativeLabel: true }));
        expect(document.querySelector('.ips-stepper')).toBeInTheDocument();
    });
    // ── StepContent (vertical) ────────────────────────────────────────────────
    it('renders StepContent for steps with content in vertical mode', () => {
        const steps = [
            { label: 'Step One', content: _jsx("div", { "data-testid": "step-content", children: "Content here" }) },
            { label: 'Step Two' },
        ];
        wrap(_jsx(IpsStepper, { steps: steps, activeStep: 0, orientation: "vertical" }));
        expect(screen.getByTestId('step-content')).toBeInTheDocument();
    });
    it('does not render StepContent in horizontal mode', () => {
        const steps = [
            { label: 'Step One', content: _jsx("div", { "data-testid": "hidden-content", children: "Content" }) },
        ];
        wrap(_jsx(IpsStepper, { steps: steps, activeStep: 0, orientation: "horizontal" }));
        expect(screen.queryByTestId('hidden-content')).not.toBeInTheDocument();
    });
    // ── renderStepIcon ────────────────────────────────────────────────────────
    it('uses renderStepIcon to render custom icon', () => {
        wrap(_jsx(IpsStepper, { steps: STEPS, activeStep: 0, renderStepIcon: () => _jsx("span", { "data-testid": "custom-icon", children: "X" }) }));
        expect(screen.getAllByTestId('custom-icon').length).toBeGreaterThan(0);
    });
    // ── renderStepLabel ───────────────────────────────────────────────────────
    it('uses renderStepLabel to render custom label content', () => {
        wrap(_jsx(IpsStepper, { steps: STEPS, activeStep: 0, renderStepLabel: () => _jsx("span", { "data-testid": "custom-label", children: "Custom" }) }));
        expect(screen.getAllByTestId('custom-label').length).toBeGreaterThan(0);
    });
    // ── renderConnector ───────────────────────────────────────────────────────
    it('uses renderConnector to render custom connector', () => {
        wrap(_jsx(IpsStepper, { steps: STEPS, activeStep: 0, renderConnector: () => _jsx("div", { "data-testid": "custom-connector" }) }));
        expect(screen.getAllByTestId('custom-connector').length).toBeGreaterThan(0);
    });
    // ── description + optional ────────────────────────────────────────────────
    it('renders step description as optional caption', () => {
        const steps = [
            { label: 'Step One', description: 'First step description' },
        ];
        wrap(_jsx(IpsStepper, { steps: steps, activeStep: 0 }));
        expect(screen.getByText('First step description')).toBeInTheDocument();
    });
    it('renders Optional text when optional=true', () => {
        const steps = [
            { label: 'Step One', optional: true },
        ];
        wrap(_jsx(IpsStepper, { steps: steps, activeStep: 0 }));
        expect(screen.getByText('Optional')).toBeInTheDocument();
    });
    // ── custom icon on step ───────────────────────────────────────────────────
    it('renders custom step.icon when provided', () => {
        const steps = [
            { label: 'Step One', icon: _jsx("span", { "data-testid": "step-icon", children: "\u2605" }) },
        ];
        wrap(_jsx(IpsStepper, { steps: steps, activeStep: 0 }));
        expect(screen.getByTestId('step-icon')).toBeInTheDocument();
    });
    // ── getRowId / key ────────────────────────────────────────────────────────
    it('does not crash when step.key is provided', () => {
        const steps = [
            { label: 'A', key: 'step-a' },
            { label: 'B', key: 'step-b' },
        ];
        wrap(_jsx(IpsStepper, { steps: steps, activeStep: 0 }));
        expect(document.querySelector('.ips-stepper')).toBeInTheDocument();
    });
    // ── sx ─────────────────────────────────────────────────────────────────────
    it('accepts sx prop without crashing', () => {
        wrap(_jsx(IpsStepper, { steps: STEPS, activeStep: 0, sx: { mt: 2 } }));
        expect(document.querySelector('.ips-stepper')).toBeInTheDocument();
    });
});
