import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider, createTheme } from '@mui/material'
import { IpsMultiSelectMobile } from './IpsMultiSelectMobile'
import type { IpsMultiSelectMobileProps } from './IpsMultiSelectMobile.types'

const muiTheme = createTheme()

const wingOptions = [
  { label: 'Wing A', value: 1 },
  { label: 'Wing B', value: 2 },
  { label: 'Wing C', value: 3 },
]

function renderComponent(props: Partial<IpsMultiSelectMobileProps> = {}) {
  const container = document.createElement('div')
  document.body.appendChild(container)
  const result = render(
    <ThemeProvider theme={muiTheme}>
      <IpsMultiSelectMobile options={wingOptions} value={[]} label="Wing" placeholder="All" {...props} />
    </ThemeProvider>,
    { container }
  )
  return result
}

describe('IpsMultiSelectMobile — native picker', () => {
  test('renders an invisible native multiple select with the summary text', () => {
    const { container } = renderComponent({ picker: 'native', value: [1, 3] })
    const select = container.querySelector('select') as HTMLSelectElement
    expect(select).toBeInTheDocument()
    expect(select.multiple).toBe(true)
    expect(screen.getByText('Wing A, Wing C')).toBeInTheDocument()
  })

  test('shows the placeholder when nothing is selected', () => {
    renderComponent({ picker: 'native' })
    expect(screen.getByText('All')).toBeInTheDocument()
  })

  test('returns the original numeric values', async () => {
    const onChange = jest.fn()
    renderComponent({ picker: 'native', onChange })
    await userEvent.selectOptions(screen.getByLabelText('Wing'), ['2', '3'])
    expect(onChange).toHaveBeenLastCalledWith(expect.arrayContaining([3]))
    expect(onChange.mock.calls.every(([values]) => values.every((v: unknown) => typeof v === 'number'))).toBe(true)
  })

  test('uses the custom selection format', () => {
    renderComponent({
      picker: 'native',
      value: [1, 2],
      formatSelection: (labels) => `${labels.length} selected`,
    })
    expect(screen.getByText('2 selected')).toBeInTheDocument()
  })

  test('links the error text to the select', () => {
    const { container } = renderComponent({ picker: 'native', error: true, helperText: 'Required' })
    const select = container.querySelector('select') as HTMLSelectElement
    expect(select).toHaveAttribute('aria-invalid', 'true')
    expect(select).toHaveAccessibleDescription('Required')
  })
})

describe('IpsMultiSelectMobile — menu picker', () => {
  test('renders the menu-based select with the summary', () => {
    const { container } = renderComponent({ picker: 'menu', value: [2] })
    expect(container.querySelector('.ips-select')).toBeInTheDocument()
    expect(screen.getByText('Wing B')).toBeInTheDocument()
  })

  test('returns the selected values from the menu', async () => {
    const onChange = jest.fn()
    renderComponent({ picker: 'menu', value: [1], onChange })
    await userEvent.click(screen.getByRole('combobox'))
    await userEvent.click(screen.getByRole('option', { name: 'Wing C' }))
    expect(onChange).toHaveBeenCalledWith([1, 3])
  })

  test('auto picks the menu outside iOS', () => {
    const { container } = renderComponent({ picker: 'auto' })
    expect(container.querySelector('.ips-select')).toBeInTheDocument()
  })
})

const roomOptions = [
  { label: 'Room 1', value: 11, group: 'Wing A' },
  { label: 'Room 2', value: 12, group: 'Wing A' },
  { label: 'Room 3', value: 21, group: 'Wing B' },
]

describe('IpsMultiSelectMobile — "all" option', () => {
  test('native: shows "all" as selected when nothing is selected', () => {
    const { container } = renderComponent({ picker: 'native', allOptionLabel: 'All wings' })
    const allOption = screen.getByRole('option', { name: 'All wings' }) as HTMLOptionElement
    expect(allOption.selected).toBe(true)
    expect(container.querySelector('span[aria-hidden="true"]')).toHaveTextContent('All wings')
  })

  test('native: choosing an option while "all" is selected keeps only that option', async () => {
    const onChange = jest.fn()
    const { container } = renderComponent({ picker: 'native', allOptionLabel: 'All wings', onChange })
    await userEvent.selectOptions(container.querySelector('select') as HTMLSelectElement, ['2'])
    expect(onChange).toHaveBeenLastCalledWith([2])
  })

  test('native: choosing "all" clears the selected options', async () => {
    const onChange = jest.fn()
    const { container } = renderComponent({ picker: 'native', allOptionLabel: 'All wings', value: [1], onChange })
    await userEvent.selectOptions(container.querySelector('select') as HTMLSelectElement, ['__ips_all__'])
    expect(onChange).toHaveBeenLastCalledWith([])
  })

  test('menu: choosing an option while "all" is selected keeps only that option', async () => {
    const onChange = jest.fn()
    renderComponent({ picker: 'menu', allOptionLabel: 'All wings', onChange })
    await userEvent.click(screen.getByRole('combobox'))
    await userEvent.click(screen.getByRole('option', { name: 'Wing C' }))
    expect(onChange).toHaveBeenCalledWith([3])
  })

  test('menu: choosing "all" clears the selected options', async () => {
    const onChange = jest.fn()
    renderComponent({ picker: 'menu', allOptionLabel: 'All wings', value: [1, 2], onChange })
    await userEvent.click(screen.getByRole('combobox'))
    await userEvent.click(screen.getByRole('option', { name: 'All wings' }))
    expect(onChange).toHaveBeenCalledWith([])
  })
})

describe('IpsMultiSelectMobile — groups', () => {
  test('native: renders an optgroup per group', () => {
    const { container } = renderComponent({ picker: 'native', options: roomOptions, allOptionLabel: 'All' })
    const groups = Array.from(container.querySelectorAll('optgroup')).map((group) => group.label)
    expect(groups).toEqual(['Wing A', 'Wing B'])
    // "all" stays outside the groups, first in the list
    expect(container.querySelector('select > option')).toHaveTextContent('All')
  })

  test('menu: renders a subheader per group', async () => {
    renderComponent({ picker: 'menu', options: roomOptions })
    await userEvent.click(screen.getByRole('combobox'))
    expect(screen.getByText('Wing A')).toHaveClass('ips-select-group')
    expect(screen.getByText('Wing B')).toHaveClass('ips-select-group')
  })
})
