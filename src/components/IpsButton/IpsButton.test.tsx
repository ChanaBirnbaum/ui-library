import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import IpsButton from './IpsButton';

test('renders default button and clicks', () => {
  const onClick = jest.fn();
  render(<IpsButton onClick={onClick}>Click</IpsButton>);
  const btn = screen.getByRole('button', { name: 'Click' });
  expect(btn).toBeInTheDocument();
  fireEvent.click(btn);
  expect(onClick).toHaveBeenCalled();
});

test('buttonType add maps to contained variant and shows icon', () => {
  render(<IpsButton buttonType="add">Add</IpsButton>);
  const btn = screen.getByRole('button', { name: 'Add' });
  // contained buttons include the MuiButton-contained class
  expect(btn.className).toMatch(/MuiButton-contained/);
  // startIcon should render an svg icon
  expect(btn.querySelector('svg')).toBeInTheDocument();
});

test('loading disables and shows CircularProgress', () => {
  render(<IpsButton loading>Saving</IpsButton>);
  const btn = screen.getByRole('button', { name: 'Saving' });
  expect(btn).toBeDisabled();
  // CircularProgress renders an element with role "progressbar"
  expect(screen.getByRole('progressbar')).toBeInTheDocument();
});
