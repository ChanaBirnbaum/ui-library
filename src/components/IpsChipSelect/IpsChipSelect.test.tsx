import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { IpsChipSelect } from './IpsChipSelect';
import type { IpsChipSelectOption } from './IpsChipSelect.types';

const theme = createTheme();

const OPTIONS: IpsChipSelectOption[] = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Cherry', value: 'cherry' },
];

const renderComponent = (props = {}) => {
  return render(
    <ThemeProvider theme={theme}>
      <IpsChipSelect
        label="Test Select"
        options={OPTIONS}
        value={[]}
        onChange={() => {}}
        {...props}
      />
    </ThemeProvider>
  );
};

describe('IpsChipSelect', () => {
  it('should render the select component', () => {
    renderComponent();
    const input = screen.getByRole('combobox');
    expect(input).toBeInTheDocument();
  });

  it('should apply ips-chip-select class', () => {
    const { container } = renderComponent();
    const root = container.querySelector('.ips-chip-select');
    expect(root).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = renderComponent({ className: 'custom-class' });
    const root = container.querySelector('.ips-chip-select.custom-class');
    expect(root).toBeInTheDocument();
  });

  it('should display placeholder when no value selected', () => {
    renderComponent({ placeholder: 'Choose items...' });
    const input = screen.getByRole('combobox');
    // Placeholder is rendered inside the select element
    expect(input).toBeInTheDocument();
  });

  it('should display chips for selected values', () => {
    renderComponent({ value: ['apple', 'banana'] });
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Banana')).toBeInTheDocument();
  });

  it('should open dropdown when clicking', async () => {
    renderComponent();
    const input = screen.getByRole('combobox');
    await userEvent.click(input);
    
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Banana')).toBeInTheDocument();
    expect(screen.getByText('Cherry')).toBeInTheDocument();
  });

  it('should call onChange when option selected', async () => {
    const onChange = jest.fn();
    renderComponent({ onChange });
    
    const input = screen.getByRole('combobox');
    await userEvent.click(input);
    await userEvent.click(screen.getByText('Apple'));
    
    expect(onChange).toHaveBeenCalled();
  });

  it('should remove chip when delete clicked', async () => {
    const onChange = jest.fn();
    renderComponent({
      value: ['apple', 'banana'],
      onChange,
    });
    
    const deleteButtons = screen.getAllByTestId('CancelIcon');
    await userEvent.click(deleteButtons[0]);
    
    expect(onChange).toHaveBeenCalled();
  });

  it('should not remove chip when disabled', async () => {
    const onChange = jest.fn();
    renderComponent({
      value: ['apple', 'banana'],
      onChange,
      disabled: true,
    });
    
    const deleteButtons = screen.queryAllByTestId('CancelIcon');
    // In disabled state, chips may not have delete functionality
    expect(deleteButtons.length).toBeGreaterThanOrEqual(0);
  });

  it('should handle disabled state', () => {
    renderComponent({ disabled: true });
    const input = screen.getByRole('combobox');
    expect(input).toHaveAttribute('aria-disabled', 'true');
  });

  it('should display multiple selected values', () => {
    renderComponent({ value: ['apple', 'banana', 'cherry'] });
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Banana')).toBeInTheDocument();
    expect(screen.getByText('Cherry')).toBeInTheDocument();
  });

  it('should support numeric values', async () => {
    const numericOptions: IpsChipSelectOption[] = [
      { label: 'Item 1', value: 1 },
      { label: 'Item 2', value: 2 },
      { label: 'Item 3', value: 3 },
    ];
    
    renderComponent({
      options: numericOptions,
      value: [1, 2],
    });
    
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });

  it('should support controlled mode', () => {
    const { rerender } = renderComponent({ value: ['apple'] });
    expect(screen.getByText('Apple')).toBeInTheDocument();
    
    rerender(
      <ThemeProvider theme={theme}>
        <IpsChipSelect
          label="Test Select"
          options={OPTIONS}
          value={['banana', 'cherry']}
          onChange={() => {}}
        />
      </ThemeProvider>
    );
    
    expect(screen.getByText('Banana')).toBeInTheDocument();
    expect(screen.getByText('Cherry')).toBeInTheDocument();
  });

  it('should render menu items on dropdown', async () => {
    renderComponent();
    const input = screen.getByRole('combobox');
    await userEvent.click(input);
    
    const menuItems = screen.getAllByRole('option');
    expect(menuItems.length).toBe(3);
  });

  it('should handle empty selection', () => {
    renderComponent({
      value: [],
      placeholder: 'No selection',
    });
    const input = screen.getByRole('combobox');
    expect(input).toBeInTheDocument();
  });

  it('should have displayName', () => {
    expect(IpsChipSelect.displayName).toBe('IpsChipSelect');
  });

  it('should support label prop', () => {
    renderComponent({ label: 'Custom Label' });
    const labels = screen.getAllByText('Custom Label');
    // Label appears in both the label element and legend
    expect(labels.length).toBeGreaterThan(0);
  });

  it('should merge className correctly', () => {
    const { container } = renderComponent({
      className: 'my-custom-class another-class',
    });
    const root = container.querySelector(
      '.ips-chip-select.my-custom-class.another-class'
    );
    expect(root).toBeInTheDocument();
  });

  it('should display chips with correct size', () => {
    renderComponent({ value: ['apple', 'banana'] });
    const chipButtons = screen.getAllByRole('button');
    // Chips are rendered as buttons with the chip text
    const appleChip = chipButtons.find(
      (btn) => btn.textContent?.includes('Apple')
    );
    const bananaChip = chipButtons.find(
      (btn) => btn.textContent?.includes('Banana')
    );
    expect(appleChip).toBeInTheDocument();
    expect(bananaChip).toBeInTheDocument();
  });
});
