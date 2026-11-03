import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import IpsCheckBox from './IpsCheckBox';
test('renders label and checkbox', () => {
    render(_jsx(IpsCheckBox, { label: "Accept terms" }));
    const checkbox = screen.getByLabelText('Accept terms');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.type).toBe('checkbox');
});
test('calls onChange when clicked', () => {
    const handleChange = jest.fn();
    render(_jsx(IpsCheckBox, { label: "Click me", onChange: handleChange }));
    const checkbox = screen.getByLabelText('Click me');
    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalled();
});
test('supports indeterminate state', async () => {
    render(_jsx(IpsCheckBox, { label: "Mixed", indeterminate: true }));
    const checkbox = screen.getByLabelText('Mixed');
    await waitFor(() => expect(checkbox).toHaveAttribute('data-indeterminate', 'true'));
});
