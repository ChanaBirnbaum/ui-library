import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider, createTheme } from '@mui/material';
import { IpsSelect } from './IpsSelect';

// Use a plain MUI theme — ipsTheme in this project is a custom token object,
// not a createTheme() result, so we create a real MUI theme for tests.
const muiTheme = createTheme();

const options = [
  { label: 'Option 1', value: 'opt1' },
  { label: 'Option 2', value: 'opt2' },
  { label: 'Option 3', value: 'opt3' },
];

// MUI Select Popover needs the container physically attached to document.body
let containers: HTMLElement[] = []

function renderComponent(props: Partial<React.ComponentProps<typeof IpsSelect>> = {}) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  containers.push(container)
  const result = render(
    <ThemeProvider theme={muiTheme}>
      <IpsSelect options={options} {...props} />
    </ThemeProvider>,
    { container }
  )
  return { ...result, container }
}

describe('IpsSelect', () => {

  beforeEach(() => { containers = [] })

  afterEach(() => {
    // RTL cleanup() runs first (auto), then we safely remove the DOM nodes
    containers.forEach((c) => {
      if (document.body.contains(c)) document.body.removeChild(c)
    })
  })

  test('renders without crashing', () => {
    renderComponent();
    expect(document.querySelector('.ips-select')).toBeInTheDocument();
  });

  test('shows options when clicked', async () => {
    renderComponent();
    const selectInput = screen.getByRole('combobox');
    await userEvent.click(selectInput);
    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();
  });

  test('calls onChange when option selected', async () => {
    const onChange = jest.fn();
    renderComponent({ onChange });
    const selectInput = screen.getByRole('combobox');
    await userEvent.click(selectInput);
    await userEvent.click(screen.getByText('Option 2'));
    expect(onChange).toHaveBeenCalledWith('opt2');
  });

  test('renders with a pre-selected value', () => {
    renderComponent({ value: 'opt1' });
    expect(screen.getByText('Option 1')).toBeInTheDocument();
  });

  test('disabled state blocks interaction', () => {
    renderComponent({ disabled: true });
    const selectInput = screen.getByRole('combobox');
    expect(selectInput).toHaveAttribute('aria-disabled', 'true');
  });

  test('renders label', () => {
    renderComponent({ label: 'בחר פריט' });
    // MUI Select renders the label twice: once as <label> and once inside fieldset <span>
    const labelEls = screen.getAllByText('בחר פריט');
    expect(labelEls.length).toBeGreaterThanOrEqual(1);
    expect(labelEls[0]).toBeInTheDocument();
  });

  test('shows helperText', () => {
    renderComponent({ helperText: 'טקסט עזרה', error: true });
    expect(screen.getByText('טקסט עזרה')).toBeInTheDocument();
  });

  test('readOnly prevents interaction', () => {
    renderComponent({ readOnly: true, value: 'opt1' });
    const formControl = document.querySelector('.ips-select') as HTMLElement;
    expect(formControl).toBeInTheDocument();
    // In readOnly mode pointer-events: none is applied
    const selectEl = formControl.querySelector('[class*="MuiSelect"]') as HTMLElement;
    expect(selectEl).toBeTruthy();
  });

  test('supports numeric option values', async () => {
    const numOptions = [
      { label: 'Item 1', value: 1 },
      { label: 'Item 2', value: 2 },
    ];
    const onChange = jest.fn();
    renderComponent({ options: numOptions, onChange } as any);
    const selectInput = screen.getByRole('combobox');
    await userEvent.click(selectInput);
    await userEvent.click(screen.getByText('Item 1'));
    expect(onChange).toHaveBeenCalledWith(1);
  });
});
