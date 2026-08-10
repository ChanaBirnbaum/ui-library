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

  test('search field shows search icon and no clear button when empty', () => {
    render(<IpsTextField label="Search" type="search" />);
    expect(screen.queryByLabelText('Clear search')).not.toBeInTheDocument();
  });

  test('search field shows clear button once a value is entered, and clears on click (uncontrolled)', async () => {
    render(<IpsTextField label="Search" type="search" />);
    const input = screen.getByLabelText('Search') as HTMLInputElement;

    await userEvent.type(input, 'hello');
    expect(input.value).toBe('hello');

    const clearButton = screen.getByLabelText('Clear search');
    expect(clearButton).toBeInTheDocument();

    await userEvent.click(clearButton);
    expect(input.value).toBe('');
    expect(screen.queryByLabelText('Clear search')).not.toBeInTheDocument();
  });

  test('search field clears via onChange when controlled', async () => {
    const ControlledSearch = () => {
      const [value, setValue] = React.useState('preset');
      return (
        <IpsTextField
          label="Search"
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      );
    };
    render(<ControlledSearch />);
    const input = screen.getByLabelText('Search') as HTMLInputElement;
    expect(input.value).toBe('preset');

    const clearButton = screen.getByLabelText('Clear search');
    await userEvent.click(clearButton);
    expect(input.value).toBe('');
  });
});
