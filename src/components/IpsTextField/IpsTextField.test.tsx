import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { IpsTextField } from './IpsTextField';

describe('IpsTextField', () => {
  test('renders label and placeholder', () => {
    render(<IpsTextField label="Email" placeholder="you@example.com" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  test('applies start and end adornments', () => {
    render(<IpsTextField label="Amount" startAdornment="$" endAdornment=".00" />);
    expect(screen.getByText('$')).toBeInTheDocument();
    expect(screen.getByText('.00')).toBeInTheDocument();
  });

  test('readOnly sets input readOnly', async () => {
    render(<IpsTextField label="Read" defaultValue="fixed" readOnly />);
    const input = screen.getByLabelText('Read') as HTMLInputElement;
    expect(input.readOnly).toBe(true);
    await userEvent.type(input, 'abc');
    expect(input.value).toBe('fixed');
  });
});
