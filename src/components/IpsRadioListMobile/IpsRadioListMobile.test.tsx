import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider, createTheme } from '@mui/material'
import { IpsRadioListMobile } from './IpsRadioListMobile'
import type { IpsRadioListMobileProps } from './IpsRadioListMobile.types'

const muiTheme = createTheme()

const sortOptions = [
  { label: 'Name A-Z', value: 'name-asc' },
  { label: 'Name Z-A', value: 'name-desc' },
  { label: 'Newest first', value: 'date-desc' },
]

function renderComponent(props: Partial<IpsRadioListMobileProps> = {}) {
  return render(
    <ThemeProvider theme={muiTheme}>
      <IpsRadioListMobile options={sortOptions} value="name-asc" aria-label="Sort" {...props} />
    </ThemeProvider>
  )
}

describe('IpsRadioListMobile', () => {
  test('renders a named radio group with one native radio per option', () => {
    renderComponent()
    expect(screen.getByRole('radiogroup', { name: 'Sort' })).toBeInTheDocument()
    expect(screen.getAllByRole('radio')).toHaveLength(3)
  })

  test('checks the selected option', () => {
    renderComponent({ value: 'date-desc' })
    expect(screen.getByRole('radio', { name: 'Newest first' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'Name A-Z' })).not.toBeChecked()
  })

  test('calls onChange with the option value when a row is clicked', async () => {
    const onChange = jest.fn()
    renderComponent({ onChange })
    await userEvent.click(screen.getByText('Name Z-A'))
    expect(onChange).toHaveBeenCalledWith('name-desc')
  })

  test('returns numeric values as numbers', async () => {
    const onChange = jest.fn()
    renderComponent({
      options: [
        { label: 'One', value: 1 },
        { label: 'Two', value: 2 },
      ],
      value: 1,
      onChange,
    })
    await userEvent.click(screen.getByText('Two'))
    expect(onChange).toHaveBeenCalledWith(2)
  })

  test('uses the visible label as the group name', () => {
    renderComponent({ label: 'Sort by', 'aria-label': undefined })
    expect(screen.getByRole('radiogroup', { name: 'Sort by' })).toBeInTheDocument()
  })

  test('disables every row', () => {
    renderComponent({ disabled: true })
    screen.getAllByRole('radio').forEach((radio) => expect(radio).toBeDisabled())
  })
})
