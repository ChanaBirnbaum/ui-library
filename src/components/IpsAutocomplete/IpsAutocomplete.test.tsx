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

  test('has displayName IpsAutocomplete', () => {
    expect(IpsAutocomplete.displayName).toBe('IpsAutocomplete')
  })
})
