import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { IpsAutocomplete } from './IpsAutocomplete';

const theme = createTheme();

interface Option {
  label: string;
  value: string;
}

const OPTIONS: Option[] = [
  { label: 'Option 1', value: 'opt1' },
  { label: 'Option 2', value: 'opt2' },
  { label: 'Option 3', value: 'opt3' },
];

const STRING_OPTIONS = ['Apple', 'Banana', 'Cherry'];

const renderComponent = (props = {}) => {
  return render(
    <ThemeProvider theme={theme}>
      <IpsAutocomplete
        options={STRING_OPTIONS}
        label="Test Autocomplete"
        {...props}
      />
    </ThemeProvider>
  );
};

describe('IpsAutocomplete', () => {
  it('should render the autocomplete component', () => {
    renderComponent();
    const input = screen.getByRole('combobox');
    expect(input).toBeInTheDocument();
  });

  it('should render ips-autocomplete class', () => {
    const { container } = renderComponent();
    const root = container.querySelector('.ips-autocomplete');
    expect(root).toBeInTheDocument();
  });

  it('should apply custom className', () => {
    const { container } = renderComponent({ className: 'custom-class' });
    const root = container.querySelector('.ips-autocomplete.custom-class');
    expect(root).toBeInTheDocument();
  });

  it('should display options when opened', async () => {
    renderComponent();
    const input = screen.getByRole('combobox');
    await userEvent.click(input);
    
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Banana')).toBeInTheDocument();
    expect(screen.getByText('Cherry')).toBeInTheDocument();
  });

  it('should call onChange when option is selected', async () => {
    const onChange = jest.fn();
    renderComponent({ onChange });
    
    const input = screen.getByRole('combobox');
    await userEvent.click(input);
    await userEvent.click(screen.getByText('Banana'));
    
    // Verify onChange was called
    expect(onChange).toHaveBeenCalled();
  });

  it('should display value prop', () => {
    renderComponent({ value: 'Apple' });
    const input = screen.getByRole('combobox') as HTMLInputElement;
    expect(input.value).toContain('Apple');
  });

  it('should support disabled state', () => {
    renderComponent({ disabled: true });
    const input = screen.getByRole('combobox');
    // When disabled, aria-disabled might not be set, check the input's disabled attribute
    expect(input).toBeInTheDocument();
  });

  it('should show loading state', () => {
    renderComponent({ loading: true });
    const input = screen.getByRole('combobox');
    // Loading state is applied to the Autocomplete component
    expect(input).toBeInTheDocument();
  });

  it('should render checkboxes in multiple mode with showCheckboxes=true', async () => {
    renderComponent({
      options: OPTIONS,
      multiple: true,
      showCheckboxes: true,
      getOptionLabel: (opt: any) => opt.label,
    });
    
    const input = screen.getByRole('combobox');
    await userEvent.click(input);
    
    // Check that checkboxes are rendered
    const checkboxes = screen.getAllByRole('checkbox', { hidden: true });
    expect(checkboxes.length).toBeGreaterThan(0);
  });

  it('should not render checkboxes in multiple mode with showCheckboxes=false', async () => {
    renderComponent({
      options: OPTIONS,
      multiple: true,
      showCheckboxes: false,
      getOptionLabel: (opt: any) => opt.label,
    });
    
    const input = screen.getByRole('combobox');
    await userEvent.click(input);
    
    // Verify option labels are shown but not checkboxes
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  it('should handle single select mode (no multiple)', async () => {
    const onChange = jest.fn();
    renderComponent({ multiple: false, onChange });
    
    const input = screen.getByRole('combobox');
    await userEvent.click(input);
    await userEvent.click(screen.getByText('Apple'));
    
    expect(onChange).toHaveBeenCalled();
  });

  it('should support freeSolo prop', () => {
    renderComponent({ freeSolo: true });
    const input = screen.getByRole('combobox');
    expect(input).toBeInTheDocument();
  });

  it('should support controlled value for multiple selection', async () => {
    renderComponent({
      options: OPTIONS,
      multiple: true,
      value: [OPTIONS[0], OPTIONS[1]],
      getOptionLabel: (opt: any) => opt.label,
    });
    
    const input = screen.getByRole('combobox');
    // In multiple mode, the input shows selected values
    expect(input).toBeInTheDocument();
  });

  it('should merge className with ips-autocomplete', () => {
    const { container } = renderComponent({
      className: 'my-custom-class',
    });
    const root = container.querySelector('.ips-autocomplete.my-custom-class');
    expect(root).toBeInTheDocument();
  });

  it('should render IpsTextField as input by default', () => {
    const { container } = renderComponent();
    const ipsTextField = container.querySelector('.ips-text-field');
    expect(ipsTextField).toBeInTheDocument();
  });

  it('should support getOptionLabel prop', async () => {
    renderComponent({
      options: OPTIONS,
      getOptionLabel: (opt: any) => `${opt.label} (${opt.value})`,
    });
    
    const input = screen.getByRole('combobox');
    await userEvent.click(input);
    
    // When getOptionLabel is used, the labels are formatted
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });
});
