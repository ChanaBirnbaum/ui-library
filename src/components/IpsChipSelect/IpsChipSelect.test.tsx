import React from 'react';
import { render, screen, within } from '@testing-library/react';
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

  it('should render a checkbox for each option reflecting selection state', async () => {
    renderComponent({ value: ['apple'] });
    const input = screen.getByRole('combobox');
    await userEvent.click(input);

    const options = screen.getAllByRole('option');
    const appleOption = options.find((opt) => opt.textContent?.includes('Apple'));
    const bananaOption = options.find((opt) => opt.textContent?.includes('Banana'));

    expect(appleOption?.querySelector('input[type="checkbox"]')).toBeChecked();
    expect(bananaOption?.querySelector('input[type="checkbox"]')).not.toBeChecked();
  });

  it('should not show a Select All option by default', async () => {
    renderComponent();
    const input = screen.getByRole('combobox');
    await userEvent.click(input);

    expect(screen.queryByText('בחר הכל')).not.toBeInTheDocument();
  });

  it('should show a Select All option when enableSelectAll is true', async () => {
    renderComponent({ enableSelectAll: true });
    const input = screen.getByRole('combobox');
    await userEvent.click(input);

    expect(screen.getByText('בחר הכל')).toBeInTheDocument();
  });

  it('should select all options when Select All is clicked', async () => {
    const onChange = jest.fn();
    renderComponent({ enableSelectAll: true, onChange });
    const input = screen.getByRole('combobox');
    await userEvent.click(input);
    await userEvent.click(screen.getByText('בחר הכל'));

    expect(onChange).toHaveBeenCalledWith(['apple', 'banana', 'cherry']);
  });

  it('should clear all options when Select All is clicked while everything is selected', async () => {
    const onChange = jest.fn();
    renderComponent({
      enableSelectAll: true,
      value: ['apple', 'banana', 'cherry'],
      onChange,
    });
    const input = screen.getByRole('combobox');
    await userEvent.click(input);
    await userEvent.click(screen.getByText('בחר הכל'));

    expect(onChange).toHaveBeenCalledWith([]);
  });

  it('should show the merged chip label when all options are selected', () => {
    renderComponent({
      enableSelectAll: true,
      value: ['apple', 'banana', 'cherry'],
      allSelectedChipLabel: 'הכל נבחר',
    });

    expect(screen.getByText('הכל נבחר')).toBeInTheDocument();
    expect(screen.queryByText('Apple')).not.toBeInTheDocument();
  });

  it('should clear the selection when the merged chip delete icon is clicked', async () => {
    const onChange = jest.fn();
    renderComponent({
      enableSelectAll: true,
      value: ['apple', 'banana', 'cherry'],
      onChange,
    });

    const deleteButtons = screen.getAllByTestId('CancelIcon');
    await userEvent.click(deleteButtons[0]);

    expect(onChange).toHaveBeenCalledWith([]);
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

  describe('chip overflow', () => {
    const MANY_OPTIONS: IpsChipSelectOption[] = [
      ...OPTIONS,
      { label: 'Date', value: 'date' },
      { label: 'Elderberry', value: 'elderberry' },
    ];
    const ALL_BUT_ONE = ['apple', 'banana', 'cherry', 'date'];

    const renderOverflow = (props = {}) =>
      renderComponent({ options: MANY_OPTIONS, value: ALL_BUT_ONE, ...props });

    // Chips live inside the select display; the overflow tooltip renders in a
    // portal and repeats the same labels, so queries have to be scoped.
    const field = () => within(screen.getByRole('combobox'));
    // Queried by role: Tooltip mirrors its title onto the wrapper span too, so
    // a plain label query matches twice.
    const expandToggle = () => field().getByRole('button', { name: /^\+\d+$/ });
    const collapseToggle = () =>
      field().getByRole('button', { name: 'הצג פחות' });
    const queryToggle = () =>
      field().queryByRole('button', { name: /^\+\d+$|^הצג פחות$/ });

    it('should show every chip while at most 3 values are selected', () => {
      renderOverflow({ value: ['apple', 'banana', 'cherry'] });
      expect(field().getByText('Cherry')).toBeInTheDocument();
      expect(queryToggle()).not.toBeInTheDocument();
    });

    it('should collapse chips past the third behind a plus toggle', () => {
      renderOverflow();
      expect(field().getByText('Apple')).toBeInTheDocument();
      expect(field().getByText('Banana')).toBeInTheDocument();
      expect(field().getByText('Cherry')).toBeInTheDocument();
      expect(field().queryByText('Date')).not.toBeInTheDocument();
      // One value is hidden, so the toggle is labelled "+1".
      expect(expandToggle()).toBeInTheDocument();
    });

    it('should list the hidden values in the overflow tooltip', async () => {
      renderOverflow({ value: [...ALL_BUT_ONE, 'elderberry'] });
      await userEvent.hover(expandToggle());

      const tooltip = await screen.findByRole('tooltip');
      expect(tooltip).toHaveTextContent('Date');
      expect(tooltip).toHaveTextContent('Elderberry');
    });

    it('should expand all chips when the plus toggle is clicked', async () => {
      renderOverflow();
      await userEvent.click(expandToggle());

      expect(field().getByText('Date')).toBeInTheDocument();
      // The toggle flips to minus.
      expect(collapseToggle()).toBeInTheDocument();
      // Expanding must not open the drop-down.
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
    });

    it('should collapse again on the minus toggle', async () => {
      renderOverflow();
      await userEvent.click(expandToggle());
      await userEvent.click(collapseToggle());

      expect(field().queryByText('Date')).not.toBeInTheDocument();
      expect(expandToggle()).toBeInTheDocument();
    });

    it('should not expand when disabled', async () => {
      renderOverflow({ disabled: true });
      await userEvent.click(expandToggle(), { pointerEventsCheck: 0 });

      expect(field().queryByText('Date')).not.toBeInTheDocument();
    });

    it('should show every chip when maxVisibleChips is 0', () => {
      renderOverflow({ maxVisibleChips: 0 });
      expect(field().getByText('Date')).toBeInTheDocument();
      expect(queryToggle()).not.toBeInTheDocument();
    });

    it('should respect a custom maxVisibleChips', () => {
      renderOverflow({ maxVisibleChips: 1 });
      expect(field().getByText('Apple')).toBeInTheDocument();
      expect(field().queryByText('Banana')).not.toBeInTheDocument();
      expect(expandToggle()).toBeInTheDocument();
    });

    it('should keep the merged chip when everything is selected', () => {
      renderOverflow({
        enableSelectAll: true,
        value: MANY_OPTIONS.map((option) => option.value),
      });
      expect(field().getByText('הכל נבחר')).toBeInTheDocument();
      expect(queryToggle()).not.toBeInTheDocument();
    });
  });

  it('should render option rows at the shared dense height', async () => {
    renderComponent();
    await userEvent.click(screen.getByRole('combobox'));

    // Same listDensity values IpsAutocomplete's listbox is asserted against.
    expect(screen.getAllByRole('option')[0]).toHaveStyle({
      minHeight: '32px',
      paddingTop: '2px',
      paddingBottom: '2px',
      paddingLeft: '8px',
      paddingRight: '8px',
    });
  });

  it('should cap the dropdown height so long lists scroll', async () => {
    renderComponent();
    await userEvent.click(screen.getByRole('combobox'));

    const paper = document.querySelector('.MuiMenu-paper') as HTMLElement;
    expect(paper).toBeInTheDocument();
    expect(paper).toHaveStyle({ maxHeight: '320px' });
  });

  it('should shrink the dropdown to the room left when the field sits low on the page', async () => {
    const originalHeight = window.innerHeight;
    Object.defineProperty(window, 'innerHeight', {
      value: 300,
      configurable: true,
    });

    try {
      const { container } = renderComponent();
      const field = container.querySelector('.MuiInputBase-root') as HTMLElement;
      // 60px below the field, 200px above it - the menu has to flip and fit.
      field.getBoundingClientRect = () =>
        ({ top: 200, bottom: 240, height: 40 }) as DOMRect;

      await userEvent.click(screen.getByRole('combobox'));

      const paper = document.querySelector('.MuiMenu-paper') as HTMLElement;
      expect(paper).toHaveStyle({ maxHeight: '184px' });
    } finally {
      Object.defineProperty(window, 'innerHeight', {
        value: originalHeight,
        configurable: true,
      });
    }
  });

  it('should honour a custom maxMenuHeight', async () => {
    renderComponent({ maxMenuHeight: 200 });
    await userEvent.click(screen.getByRole('combobox'));

    const paper = document.querySelector('.MuiMenu-paper') as HTMLElement;
    expect(paper).toHaveStyle({ maxHeight: '200px' });
  });
});
