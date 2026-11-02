import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React, { forwardRef } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
// ── Inline icons ───────────────────────────────────────────────────────────────
const CheckIcon = (props) => (_jsx(SvgIcon, { ...props, viewBox: "0 0 24 24", children: _jsx("path", { d: "M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" }) }));
const WarningIcon = (props) => (_jsx(SvgIcon, { ...props, viewBox: "0 0 24 24", children: _jsx("path", { d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" }) }));
const ErrorCircleIcon = (props) => (_jsx(SvgIcon, { ...props, viewBox: "0 0 24 24", children: _jsx("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" }) }));
function IpsStepIcon({ icon, className, status = 'pending', customIcon, renderFnResult }) {
    if (renderFnResult !== undefined) {
        return _jsx("span", { className: className, children: renderFnResult });
    }
    if (customIcon !== undefined) {
        return (_jsx("span", { className: className, style: { display: 'flex', alignItems: 'center' }, children: customIcon }));
    }
    if (status === 'error') {
        return _jsx(ErrorCircleIcon, { className: className, sx: { color: 'error.main', fontSize: 24 } });
    }
    if (status === 'warning') {
        return _jsx(WarningIcon, { className: className, sx: { color: 'warning.main', fontSize: 24 } });
    }
    const isCompleted = status === 'completed';
    const isActive = status === 'active';
    const isDisabled = status === 'disabled';
    const bgColor = isCompleted || isActive
        ? 'primary.main'
        : isDisabled
            ? 'action.disabled'
            : 'text.disabled';
    return (_jsx(Box, { className: className, sx: {
            width: 24,
            height: 24,
            borderRadius: '50%',
            bgcolor: bgColor,
            color: 'common.white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.75rem',
            fontWeight: 600,
            flexShrink: 0,
        }, children: isCompleted ? _jsx(CheckIcon, { sx: { fontSize: 16, color: 'inherit' } }) : icon }));
}
// ── Status resolver ────────────────────────────────────────────────────────────
function resolveStatus(step, index, activeStep) {
    if (step.disabled)
        return 'disabled';
    if (step.status)
        return step.status;
    if (index < activeStep)
        return 'completed';
    if (index === activeStep)
        return 'active';
    return 'pending';
}
// ── IpsStepper ────────────────────────────────────────────────────────────────
const IpsStepperBase = forwardRef(function IpsStepper(props, ref) {
    const { steps, activeStep, orientation = 'horizontal', alternativeLabel = false, nonLinear = false, onStepClick, renderStepIcon, renderStepLabel, renderConnector, className, sx, ...rest } = props;
    const rootClassName = ['ips-stepper', className].filter(Boolean).join(' ');
    // Build connector element for renderConnector prop
    const connectorElement = React.useMemo(() => {
        if (!renderConnector)
            return undefined;
        const ConnectorWrapper = ({ index = 0 }) => _jsx(_Fragment, { children: renderConnector({ index }) });
        ConnectorWrapper.displayName = 'IpsStepConnector';
        return _jsx(ConnectorWrapper, {});
    }, [renderConnector]);
    return (_jsx(Stepper, { ref: ref, className: rootClassName, activeStep: activeStep, orientation: orientation, alternativeLabel: alternativeLabel, nonLinear: nonLinear, connector: connectorElement, sx: sx, ...rest, children: steps.map((step, index) => {
            const status = resolveStatus(step, index, activeStep);
            const isActive = status === 'active';
            const isCompleted = status === 'completed';
            const isDisabled = status === 'disabled';
            const isError = status === 'error';
            const ctx = { index, step, status, active: isActive, completed: isCompleted };
            // Props injected into IpsStepIcon via StepIconProps (cast to any for custom fields)
            const iconExtraProps = {
                status,
                customIcon: step.icon,
                renderFnResult: renderStepIcon ? renderStepIcon(ctx) : undefined,
            };
            const labelContent = renderStepLabel ? renderStepLabel(ctx) : step.label;
            const optionalNode = (step.optional || step.description) ? (_jsxs(_Fragment, { children: [step.optional && (_jsx(Typography, { variant: "caption", color: "text.secondary", children: "Optional" })), step.description && (_jsx(Typography, { variant: "caption", display: "block", color: "text.secondary", children: step.description }))] })) : undefined;
            const isClickable = nonLinear && !isDisabled && typeof onStepClick === 'function';
            const stepLabel = (_jsx(StepLabel, { error: isError, StepIconComponent: IpsStepIcon, StepIconProps: iconExtraProps, optional: optionalNode, children: labelContent }));
            return (_jsxs(Step, { active: isActive, completed: isCompleted, disabled: isDisabled, children: [isClickable ? (_jsx(ButtonBase, { onClick: () => onStepClick(index, step), sx: { width: '100%', justifyContent: alternativeLabel ? 'center' : 'flex-start' }, children: stepLabel })) : (stepLabel), step.content && orientation === 'vertical' && (_jsx(StepContent, { children: step.content }))] }, step.key ?? index));
        }) }));
});
IpsStepperBase.displayName = 'IpsStepper';
export const IpsStepper = IpsStepperBase;
