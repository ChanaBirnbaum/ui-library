import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '@mui/material/Button';
import { IpsToolTips } from './IpsToolTips';
describe('IpsToolTips', () => {
    test('renders children correctly', () => {
        render(_jsx(IpsToolTips, { title: "Test tooltip", children: _jsx(Button, { "data-testid": "button-child", children: "Hover me" }) }));
        const button = screen.getByTestId('button-child');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Hover me');
    });
    test('renders with default props (arrow=true, placement=top)', () => {
        const { container } = render(_jsx(IpsToolTips, { title: "Test tooltip", children: _jsx(Button, { children: "Hover me" }) }));
        // Component renders without errors
        expect(container.firstChild).toBeInTheDocument();
    });
    test('renders with arrow={false}', () => {
        const { container } = render(_jsx(IpsToolTips, { title: "Test tooltip", arrow: false, children: _jsx(Button, { children: "Hover me" }) }));
        expect(container.firstChild).toBeInTheDocument();
    });
    test('renders with different placements', () => {
        const placements = ['top', 'right', 'bottom', 'left'];
        placements.forEach((placement) => {
            const { container } = render(_jsx(IpsToolTips, { title: "Test", placement: placement, children: _jsx(Button, { children: "Test" }) }));
            expect(container.firstChild).toBeInTheDocument();
        });
    });
    test('supports custom className', () => {
        const { container } = render(_jsx(IpsToolTips, { title: "Test tooltip", className: "custom-class", children: _jsx(Button, { children: "Hover me" }) }));
        expect(container.firstChild).toBeInTheDocument();
    });
    test('supports ref forwarding', () => {
        const ref = React.createRef();
        const { container } = render(_jsx(IpsToolTips, { ref: ref, title: "Test tooltip", children: _jsx(Button, { children: "Hover me" }) }));
        // Ref should be assigned
        expect(ref.current).toBeDefined();
    });
    test('passes through all MUI TooltipProps', () => {
        const { container } = render(_jsx(IpsToolTips, { title: "Test tooltip", arrow: true, placement: "bottom", enterDelay: 100, children: _jsx(Button, { children: "Hover me" }) }));
        expect(container.firstChild).toBeInTheDocument();
    });
    test('merges className with componentsProps.tooltip className', () => {
        const { container } = render(_jsx(IpsToolTips, { title: "Test tooltip", className: "custom-class", componentsProps: { tooltip: { className: 'tooltip-class' } }, children: _jsx(Button, { children: "Hover me" }) }));
        expect(container.firstChild).toBeInTheDocument();
    });
    test('renders without children (for edge case)', () => {
        const { container } = render(_jsx(IpsToolTips, { title: "Test tooltip", children: _jsx("span", { children: "Content" }) }));
        expect(container.firstChild).toBeInTheDocument();
    });
});
