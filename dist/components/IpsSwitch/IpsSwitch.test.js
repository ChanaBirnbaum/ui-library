import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent } from '@testing-library/react';
import IpsSwitch from './IpsSwitch';
test('renders labeled switch and allows toggle', () => {
    const handleChange = jest.fn();
    render(_jsx(IpsSwitch, { label: "Toggle", onChange: handleChange }));
    const switchInput = screen.getByLabelText('Toggle');
    expect(switchInput).toBeInTheDocument();
    fireEvent.click(switchInput);
    expect(handleChange).toHaveBeenCalled();
});
test('unlabeled switch has ips-switch class on root', () => {
    render(_jsx(IpsSwitch, {}));
    const input = screen.queryByRole('switch') || screen.queryByRole('checkbox');
    expect(input).toBeInTheDocument();
    expect(document.querySelector('.ips-switch')).toBeInTheDocument();
});
test('labeled switch FormControlLabel root contains ips-switch class', () => {
    render(_jsx(IpsSwitch, { label: "Labeled" }));
    const labelNode = screen.getByText('Labeled');
    const root = labelNode.closest('label');
    expect(root).toHaveClass('ips-switch');
});
