import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider, createTheme } from '@mui/material'
import { IpsSelectMobile } from './IpsSelectMobile'
import type { IpsSelectMobileProps } from './IpsSelectMobile.types'

const muiTheme = createTheme()

const textOptions = [
  { label: 'Option 1', value: 'opt1' },
  { label: 'Option 2', value: 'opt2' },
]

const numericOptions = [
  { label: 'Institute 10', value: 10 },
  { label: 'Institute 20', value: 20 },
]

function renderComponent(props: Partial<IpsSelectMobileProps> = {}) {
  return render(
    <ThemeProvider theme={muiTheme}>
      <IpsSelectMobile options={textOptions} label="Pick" {...props} />
    </ThemeProvider>
  )
}

describe('IpsSelectMobile', () => {
  test('renders a native select with the root class', () => {
    const { container } = renderComponent()
    expect(container.querySelector('.ips-select-mobile')).toBeInTheDocument()
    expect(container.querySelector('select')).toBeInTheDocument()
  })

  test('associates the label with the select', () => {
    renderComponent({ label: 'בחר פנימייה' })
    expect(screen.getByLabelText('בחר פנימייה').tagName).toBe('SELECT')
  })

  test('shows the placeholder while nothing is selected', () => {
    renderComponent({ placeholder: 'בחר' })
    const select = screen.getByRole('combobox') as HTMLSelectElement
    expect(select.value).toBe('')
    expect(screen.getByRole('option', { name: 'בחר' })).toBeDisabled()
  })

  test('renders the selected value', () => {
    renderComponent({ value: 'opt2' })
    expect((screen.getByRole('combobox') as HTMLSelectElement).value).toBe('opt2')
  })

  test('returns string values unchanged', async () => {
    const onChange = jest.fn()
    renderComponent({ onChange })
    await userEvent.selectOptions(screen.getByRole('combobox'), 'opt1')
    expect(onChange).toHaveBeenCalledWith('opt1')
  })

  test('returns numeric values as numbers', async () => {
    const onChange = jest.fn()
    renderComponent({ options: numericOptions, onChange })
    await userEvent.selectOptions(screen.getByRole('combobox'), '20')
    expect(onChange).toHaveBeenCalledWith(20)
  })

  test('renders grouped options inside optgroups', () => {
    const { container } = renderComponent({
      options: [
        { label: 'Room 1', value: 11, group: 'Wing A' },
        { label: 'Room 3', value: 21, group: 'Wing B' },
      ],
    })
    const groups = Array.from(container.querySelectorAll('optgroup')).map((group) => group.label)
    expect(groups).toEqual(['Wing A', 'Wing B'])
  })

  test('marks required fields', () => {
    renderComponent({ required: true })
    expect(screen.getByRole('combobox')).toBeRequired()
    expect(screen.getByText('*')).toBeInTheDocument()
  })

  test('disables the select', () => {
    renderComponent({ disabled: true })
    expect(screen.getByRole('combobox')).toBeDisabled()
  })

  test('plain variant shows the selected label as text over a native select', async () => {
    const onChange = jest.fn()
    const { container } = renderComponent({
      variant: 'plain',
      options: numericOptions,
      value: 10,
      onChange,
      'aria-label': 'Institute',
    })
    expect(container.querySelector('.ips-select-mobile-plain')).toBeInTheDocument()
    expect(screen.getByText('Institute 10', { selector: 'span' })).toBeInTheDocument()
    await userEvent.selectOptions(screen.getByRole('combobox', { name: 'Institute' }), '20')
    expect(onChange).toHaveBeenCalledWith(20)
  })

  test('plain variant shows the placeholder when nothing is selected', () => {
    renderComponent({ variant: 'plain', placeholder: 'בחר פנימייה', label: undefined })
    expect(screen.getByText('בחר פנימייה', { selector: 'span' })).toBeInTheDocument()
  })

  test('links the error text to the select', () => {
    renderComponent({ error: true, helperText: 'שדה חובה' })
    const select = screen.getByRole('combobox')
    expect(select).toHaveAttribute('aria-invalid', 'true')
    expect(select).toHaveAccessibleDescription('שדה חובה')
    expect(screen.getByRole('alert')).toHaveTextContent('שדה חובה')
  })
})
