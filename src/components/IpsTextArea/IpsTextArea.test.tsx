import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import IpsTextArea from './IpsTextArea';

test('renders textarea', () => {
  render(<IpsTextArea label="Notes" />);
  const textarea = screen.getByRole('textbox');
  expect(textarea).toBeInTheDocument();
});

test('calls onChange when typing', () => {
  const handleChange = jest.fn();
  render(<IpsTextArea label="Notes" onChange={handleChange} />);
  const textarea = screen.getByRole('textbox');
  fireEvent.change(textarea, { target: { value: 'abc' } });
  expect(handleChange).toHaveBeenCalled();
});

test('shows maxLength counter and updates', () => {
  render(<IpsTextArea label="Comment" maxLength={5} defaultValue="hi" />);
  expect(screen.getByText('2 / 5')).toBeInTheDocument();
  const textarea = screen.getByRole('textbox');
  fireEvent.change(textarea, { target: { value: 'hello' } });
  expect(screen.getByText('5 / 5')).toBeInTheDocument();
});
