import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import IpsCheckBox from './IpsCheckBox';

test('renders label and checkbox', () => {
  render(<IpsCheckBox label="Accept terms" />);
  const checkbox = screen.getByLabelText('Accept terms') as HTMLInputElement;
  expect(checkbox).toBeInTheDocument();
  expect(checkbox.type).toBe('checkbox');
});

test('calls onChange when clicked', () => {
  const handleChange = jest.fn();
  render(<IpsCheckBox label="Click me" onChange={handleChange} />);
  const checkbox = screen.getByLabelText('Click me');
  fireEvent.click(checkbox);
  expect(handleChange).toHaveBeenCalled();
});

test('supports indeterminate state', async () => {
  render(<IpsCheckBox label="Mixed" indeterminate />);
  const checkbox = screen.getByLabelText('Mixed') as HTMLInputElement;
  await waitFor(() => expect(checkbox).toHaveAttribute('data-indeterminate', 'true'));
});
