import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider, createTheme } from '@mui/material'
import {
  IpsAutocomplete,
  IPS_AUTOCOMPLETE_POPUP_CLASS,
} from './IpsAutocomplete'

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

  describe('popup', () => {
    const openPopup = async () => {
      await userEvent.click(screen.getByRole('combobox'))
    }

    test('caps the list height so it cannot overflow its container', async () => {
      renderComponent()
      await openPopup()
      expect(document.querySelector('.MuiAutocomplete-listbox')).toHaveStyle({
        maxHeight: '320px',
      })
    })

    test('honours a custom maxListHeight', async () => {
      renderComponent({ maxListHeight: 200 })
      await openPopup()
      expect(document.querySelector('.MuiAutocomplete-listbox')).toHaveStyle({
        maxHeight: '200px',
      })
    })

    // jsdom's computed style drops scrollbar properties, so the emitted rules
    // are read straight off the stylesheet instead.
    const rulesFor = (element: Element) => {
      const own = Array.from(element.classList).filter((c) =>
        c.startsWith('css-')
      )
      return Array.from(document.styleSheets)
        .flatMap((sheet) => Array.from(sheet.cssRules))
        .map((rule) => rule.cssText)
        .filter((text) => own.some((c) => text.startsWith(`.${c}`)))
        .join('\n')
    }

    test('gives the list a thin, light-grey scrollbar', async () => {
      renderComponent()
      await openPopup()
      const css = rulesFor(document.querySelector('.MuiAutocomplete-listbox')!)
      // Firefox understands the standard pair, Chrome/Safari the pseudos.
      expect(css).toMatch(/scrollbar-width:\s*thin/)
      expect(css).toMatch(/::-webkit-scrollbar\s*\{[^}]*width:\s*6px/)
      expect(css).toMatch(
        new RegExp(
          `::-webkit-scrollbar-thumb\\s*\\{[^}]*${muiTheme.palette.grey[300]}`,
          'i'
        )
      )
    })

    // The popup is portalled to the body, so nothing around the field reaches
    // it - the font has to be carried over deliberately.
    test('renders the list in the same font as the field', async () => {
      renderComponent({
        sx: { '& .MuiInputBase-root': { fontFamily: '"Rubik", sans-serif' } },
      })
      await openPopup()
      expect(document.querySelector('.MuiAutocomplete-paper')).toHaveStyle({
        fontFamily: '"Rubik", sans-serif',
      })
    })

    // MUI stamps theme.typography.fontFamily onto every Chip, so a selected
    // value does not follow the field on its own.
    test('renders the selected values in the same font as the field', () => {
      renderComponent({
        multiple: true,
        value: ['Apple'],
        sx: { '& .MuiInputBase-root': { fontFamily: '"Rubik", sans-serif' } },
      })
      expect(document.querySelector('.MuiChip-root')).toHaveStyle({
        fontFamily: 'inherit',
      })
    })

    test('lifts the popup above modal-level containers', async () => {
      renderComponent()
      await openPopup()
      expect(document.querySelector('.MuiAutocomplete-popper')).toHaveStyle({
        zIndex: String(muiTheme.zIndex.tooltip),
      })
      expect(muiTheme.zIndex.tooltip).toBeGreaterThan(muiTheme.zIndex.modal)
    })

    test('marks the popup so an outside-click handler can spot it', async () => {
      renderComponent()
      await openPopup()
      const option = screen.getByText('Apple')
      expect(option.closest(`.${IPS_AUTOCOMPLETE_POPUP_CLASS}`)).not.toBeNull()
      // MUI's own class has to survive alongside it.
      expect(
        document.querySelector(
          `.MuiAutocomplete-popper.${IPS_AUTOCOMPLETE_POPUP_CLASS}`
        )
      ).toBeInTheDocument()
    })

    test('clears a popup that stacks above the modal level', async () => {
      const overlay = document.createElement('div')
      overlay.style.zIndex = '9999'
      overlay.style.position = 'fixed'
      document.body.appendChild(overlay)
      containers.push(overlay)

      render(
        <ThemeProvider theme={muiTheme}>
          <IpsAutocomplete options={OPTIONS} />
        </ThemeProvider>,
        { container: overlay }
      )
      await openPopup()
      expect(document.querySelector('.MuiAutocomplete-popper')).toHaveStyle({
        zIndex: '10000',
      })
    })

    test('squares the edge the field and the list share while open', async () => {
      renderComponent()
      const inputRoot = document.querySelector('.MuiOutlinedInput-root')
      expect(inputRoot).not.toHaveStyle({ borderBottomLeftRadius: '0px' })

      await openPopup()
      expect(inputRoot).toHaveStyle({
        borderBottomLeftRadius: '0px',
        borderBottomRightRadius: '0px',
      })
      expect(document.querySelector('.MuiAutocomplete-paper')).toHaveStyle({
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px',
      })
    })

    test('restores the field radius once the list closes', async () => {
      renderComponent()
      await openPopup()
      await userEvent.keyboard('{Escape}')
      expect(document.querySelector('.MuiOutlinedInput-root')).not.toHaveStyle({
        borderBottomLeftRadius: '0px',
      })
    })

    test('still reports open/close to a consumer', async () => {
      const onOpen = jest.fn()
      const onClose = jest.fn()
      renderComponent({ onOpen, onClose })
      await openPopup()
      expect(onOpen).toHaveBeenCalled()
      await userEvent.keyboard('{Escape}')
      expect(onClose).toHaveBeenCalled()
    })

    test('squares the field for a consumer-controlled open state', () => {
      renderComponent({ open: true })
      expect(document.querySelector('.MuiOutlinedInput-root')).toHaveStyle({
        borderBottomLeftRadius: '0px',
      })
    })
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
