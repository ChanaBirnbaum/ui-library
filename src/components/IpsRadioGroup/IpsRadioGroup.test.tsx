import React, { useState } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider, createTheme } from '@mui/material'
import { IpsRadioGroup } from './IpsRadioGroup'
import type { IpsRadioGroupProps, IpsRadioGroupValue } from './IpsRadioGroup.types'

const muiTheme = createTheme()

const OPTIONS = [
  { label: 'Full', value: 'full' },
  { label: 'Limited', value: 'limited' },
]

function ControlledGroup(props: Partial<IpsRadioGroupProps>) {
  const [value, setValue] = useState<IpsRadioGroupValue | null>(props.value === undefined ? 'full' : props.value)
  return (
    <IpsRadioGroup
      aria-label="Limit type"
      options={OPTIONS}
      {...props}
      value={value}
      onChange={(next) => {
        setValue(next)
        props.onChange?.(next)
      }}
    />
  )
}

function renderGroup(props: Partial<IpsRadioGroupProps> = {}) {
  return render(
    <ThemeProvider theme={muiTheme}>
      <ControlledGroup {...props} />
    </ThemeProvider>
  )
}

describe('IpsRadioGroup', () => {
  test('renders a named radio group with one radio per option', () => {
    renderGroup()
    expect(screen.getByRole('radiogroup', { name: 'Limit type' })).toBeInTheDocument()
    expect(screen.getAllByRole('radio')).toHaveLength(2)
  })

  test('checks the selected option', () => {
    renderGroup()
    expect(screen.getByRole('radio', { name: 'Full' })).toBeChecked()
    expect(screen.getByRole('radio', { name: 'Limited' })).not.toBeChecked()
  })

  test('nothing is checked when the value is null', () => {
    renderGroup({ value: null })
    expect(screen.getByRole('radio', { name: 'Full' })).not.toBeChecked()
    expect(screen.getByRole('radio', { name: 'Limited' })).not.toBeChecked()
  })

  test('reports the original value when an option is chosen', async () => {
    const onChange = jest.fn()
    renderGroup({ onChange })
    await userEvent.click(screen.getByText('Limited'))
    expect(onChange).toHaveBeenCalledWith('limited')
    expect(screen.getByRole('radio', { name: 'Limited' })).toBeChecked()
  })

  test('keeps number values as numbers', async () => {
    const onChange = jest.fn()
    renderGroup({
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

  test('uses a visible label as the group name', () => {
    renderGroup({ label: 'Restriction type', 'aria-label': undefined })
    expect(screen.getByRole('radiogroup', { name: 'Restriction type' })).toBeInTheDocument()
  })

  test('can be named and described by elements elsewhere', () => {
    render(
      <ThemeProvider theme={muiTheme}>
        <h3 id="picker-title">Choose a restriction</h3>
        <p id="picker-hint">Found 2 restrictions</p>
        <IpsRadioGroup
          aria-labelledby="picker-title"
          aria-describedby="picker-hint"
          options={OPTIONS}
          value={null}
        />
      </ThemeProvider>
    )
    const group = screen.getByRole('radiogroup', { name: 'Choose a restriction' })
    expect(group).toHaveAccessibleDescription('Found 2 restrictions')
  })

  test('names each radio by its title and describes it by its description', () => {
    renderGroup({
      options: [
        { label: 'Full', value: 'full', description: 'Calls are blocked' },
        { label: 'Limited', value: 'limited', description: 'Calls are limited' },
      ],
    })
    const radio = screen.getByRole('radio', { name: 'Full' })
    expect(radio).toHaveAccessibleDescription('Calls are blocked')
  })

  test('cards: the whole card chooses the option and the checked card is marked', async () => {
    const onChange = jest.fn()
    renderGroup({
      variant: 'cards',
      value: null,
      options: [
        { label: 'National', value: 'national', description: <span>01/09/26-31/12/26</span> },
        { label: 'Trainee', value: 'trainee', description: <span>15/10/26-25/10/26</span> },
      ],
      onChange,
    })
    await userEvent.click(screen.getByText('15/10/26-25/10/26'))
    expect(onChange).toHaveBeenCalledWith('trainee')
    expect(screen.getByRole('radio', { name: 'Trainee' })).toBeChecked()
    expect(document.querySelectorAll('.ips-radio-group-option-checked')).toHaveLength(1)
  })

  test('disables every option', () => {
    renderGroup({ disabled: true })
    screen.getAllByRole('radio').forEach((radio) => expect(radio).toBeDisabled())
  })
})
