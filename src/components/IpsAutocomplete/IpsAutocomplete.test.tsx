import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider, createTheme } from '@mui/material'
import { IpsAutocomplete } from './IpsAutocomplete'

const muiTheme = createTheme()

const OPTIONS = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']

// MUI Autocomplete Popper needs container physically attached to document.body
let containers: HTMLElement[] = []

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function renderComponent(props: Record<string, any> = {}) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  containers.push(container)
  return render(
    <ThemeProvider theme={muiTheme}>
      <IpsAutocomplete options={OPTIONS} {...props} />
    </ThemeProvider>,
    { container }
  )
}

describe('IpsAutocomplete', () => {

  beforeEach(() => { containers = [] })

  afterEach(() => {
    containers.forEach((c) => {
      if (document.body.contains(c)) document.body.removeChild(c)
    })
  })

  test('renders without crashing', () => {
    renderComponent()
    expect(document.querySelector('.ips-autocomplete')).toBeInTheDocument()
  })

  test('shows options when clicked', async () => {
    renderComponent()
    const input = screen.getByRole('combobox')
    await userEvent.click(input)
    expect(screen.getByText('Apple')).toBeInTheDocument()
    expect(screen.getByText('Banana')).toBeInTheDocument()
  })

  test('filters options when typing', async () => {
    renderComponent()
    const input = screen.getByRole('combobox')
    await userEvent.type(input, 'app')
    expect(screen.getByText('Apple')).toBeInTheDocument()
    expect(screen.queryByText('Banana')).not.toBeInTheDocument()
  })

  test('calls onChange when option selected', async () => {
    const onChange = jest.fn()
    renderComponent({ onChange })
    const input = screen.getByRole('combobox')
    await userEvent.click(input)
    await userEvent.click(screen.getByText('Apple'))
    expect(onChange).toHaveBeenCalled()
  })

  test('renders label', () => {
    renderComponent({ label: 'בחר פרי' })
    expect(screen.getByLabelText('בחר פרי')).toBeInTheDocument()
  })

  test('disabled state', () => {
    renderComponent({ disabled: true })
    expect(screen.getByRole('combobox')).toBeDisabled()
  })

  test('multiple mode renders checkboxes in options', async () => {
    renderComponent({ multiple: true, showCheckboxes: true })
    const input = screen.getByRole('combobox')
    await userEvent.click(input)
    const checkboxes = document.querySelectorAll('input[type="checkbox"]')
    expect(checkboxes.length).toBeGreaterThan(0)
  })

  test('renders the option list at body2 (14px), matching IpsChipSelect', async () => {
    renderComponent()
    await userEvent.click(screen.getByRole('combobox'))
    const paper = document.querySelector('.MuiAutocomplete-paper')
    expect(paper).toHaveStyle({ fontSize: '0.875rem' })
  })

  test('keeps a consumer sx on the paper alongside the font size', async () => {
    renderComponent({ slotProps: { paper: { sx: { borderRadius: '2px' } } } })
    await userEvent.click(screen.getByRole('combobox'))
    const paper = document.querySelector('.MuiAutocomplete-paper')
    expect(paper).toHaveStyle({ fontSize: '0.875rem', borderRadius: '2px' })
  })

  test('renders option rows at the shared dense height', async () => {
    renderComponent()
    await userEvent.click(screen.getByRole('combobox'))
    const listbox = document.querySelector('.MuiAutocomplete-listbox')
    const option = document.querySelector('.MuiAutocomplete-option')
    // Matches listDensity: 32px rows, 2px vertical / 8px horizontal padding.
    expect(option).toHaveStyle({
      minHeight: '32px',
      paddingTop: '2px',
      paddingBottom: '2px',
      paddingLeft: '8px',
      paddingRight: '8px',
    })
    expect(listbox).toHaveStyle({ paddingTop: '4px', paddingBottom: '4px' })
  })

  test('renders option checkboxes at the shared dense padding', async () => {
    renderComponent({ multiple: true })
    await userEvent.click(screen.getByRole('combobox'))
    const checkbox = document
      .querySelector('input[type="checkbox"]')
      ?.closest('.MuiCheckbox-root')
    expect(checkbox).toHaveStyle({ padding: '2px' })
  })

  test('renders tags as small chips', () => {
    renderComponent({ multiple: true, value: ['Apple'] })
    expect(document.querySelector('.MuiChip-sizeSmall')).toBeInTheDocument()
  })

  describe('multiple mode', () => {
    const expandToggle = () =>
      screen.getByRole('button', { name: /^\+\d+$/ })
    const collapseToggle = () =>
      screen.getByRole('button', { name: 'הצג פחות' })

    test('keeps the popup open after each selection', async () => {
      renderComponent({ multiple: true })
      await userEvent.click(screen.getByRole('combobox'))
      await userEvent.click(screen.getByText('Apple'))
      expect(screen.getByRole('listbox')).toBeInTheDocument()

      await userEvent.click(screen.getByText('Banana'))
      expect(screen.getByRole('listbox')).toBeInTheDocument()
    })

    test('still closes on select in single mode', async () => {
      renderComponent()
      await userEvent.click(screen.getByRole('combobox'))
      await userEvent.click(screen.getByText('Apple'))
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    })

    test('honours an explicit disableCloseOnSelect', async () => {
      renderComponent({ multiple: true, disableCloseOnSelect: false })
      await userEvent.click(screen.getByRole('combobox'))
      await userEvent.click(screen.getByText('Apple'))
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument()
    })

    test('shows every tag while at most 3 are selected', () => {
      renderComponent({ multiple: true, value: ['Apple', 'Banana', 'Cherry'] })
      expect(screen.getByText('Cherry')).toBeInTheDocument()
      expect(
        screen.queryByRole('button', { name: /^\+\d+$/ })
      ).not.toBeInTheDocument()
    })

    test('collapses tags past the third behind a plus toggle', () => {
      renderComponent({ multiple: true, value: OPTIONS })
      expect(screen.getByText('Apple')).toBeInTheDocument()
      expect(screen.queryByText('Date')).not.toBeInTheDocument()
      // Five selected, three shown.
      expect(expandToggle()).toHaveAccessibleName('+2')
    })

    test('lists the hidden tags in the toggle tooltip', async () => {
      renderComponent({ multiple: true, value: OPTIONS })
      await userEvent.hover(expandToggle())

      const tooltip = await screen.findByRole('tooltip')
      expect(tooltip).toHaveTextContent('Date')
      expect(tooltip).toHaveTextContent('Elderberry')
    })

    test('expands and collapses the tags on the toggle', async () => {
      renderComponent({ multiple: true, value: OPTIONS })
      await userEvent.click(expandToggle())
      expect(screen.getByText('Date')).toBeInTheDocument()
      // Expanding must not open the option list.
      expect(screen.queryByRole('listbox')).not.toBeInTheDocument()

      await userEvent.click(collapseToggle())
      expect(screen.queryByText('Date')).not.toBeInTheDocument()
    })

    test('respects maxVisibleChips', () => {
      renderComponent({ multiple: true, value: OPTIONS, maxVisibleChips: 0 })
      expect(screen.getByText('Elderberry')).toBeInTheDocument()
      expect(
        screen.queryByRole('button', { name: /^\+\d+$/ })
      ).not.toBeInTheDocument()
    })

    test('leaves a custom renderTags in charge', () => {
      renderComponent({
        multiple: true,
        value: OPTIONS,
        renderTags: (value: string[]) => <span>{value.length} selected</span>,
      })
      expect(screen.getByText('5 selected')).toBeInTheDocument()
      expect(
        screen.queryByRole('button', { name: /^\+\d+$/ })
      ).not.toBeInTheDocument()
    })
  })

  test('has displayName IpsAutocomplete', () => {
    expect(IpsAutocomplete.displayName).toBe('IpsAutocomplete')
  })
})
