import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import IpsSwitch from './IpsSwitch';

test('renders labeled switch and allows toggle', () => {
  const handleChange = jest.fn();
  render(<IpsSwitch label="Toggle" onChange={handleChange} />);
  const switchInput = screen.getByLabelText('Toggle');
  expect(switchInput).toBeInTheDocument();
  fireEvent.click(switchInput);
  expect(handleChange).toHaveBeenCalled();
});

test('unlabeled switch has ips-switch class on root', () => {
  render(<IpsSwitch />);
  const input = screen.queryByRole('switch') || screen.queryByRole('checkbox');
  expect(input).toBeInTheDocument();
  expect(document.querySelector('.ips-switch')).toBeInTheDocument();
});

test('labeled switch FormControlLabel root contains ips-switch class', () => {
  render(<IpsSwitch label="Labeled" />);
  const labelNode = screen.getByText('Labeled');
  const root = labelNode.closest('label');
  expect(root).toHaveClass('ips-switch');
});
