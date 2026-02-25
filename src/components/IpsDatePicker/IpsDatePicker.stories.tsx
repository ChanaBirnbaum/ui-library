import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { IpsDatePicker } from './IpsDatePicker'

const theme = createTheme()

const meta: Meta<typeof IpsDatePicker> = {
  title: 'Components/IpsDatePicker',
  component: IpsDatePicker,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ padding: 24, maxWidth: 320 }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// ─── Controlled wrappers ────────────────────────────────────────────────────

function DefaultStory() {
  const [value, setValue] = useState<Date | null>(null)
  return (
    <IpsDatePicker label="בחר תאריך" value={value} onChange={setValue} />
  )
}

function WithValueStory() {
  const [value, setValue] = useState<Date | null>(new Date(2025, 0, 15))
  return (
    <IpsDatePicker label="תאריך לידה" value={value} onChange={setValue} />
  )
}

function RTLStory() {
  const [value, setValue] = useState<Date | null>(null)
  return (
    <IpsDatePicker label="תאריך" value={value} onChange={setValue} rtl />
  )
}

function MinMaxStory() {
  const [value, setValue] = useState<Date | null>(null)
  const today = new Date()
  const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate())
  return (
    <IpsDatePicker
      label="תאריך אפשרי"
      value={value}
      onChange={setValue}
      minDate={today}
      maxDate={nextMonth}
    />
  )
}

// ─── Stories ────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => (
    <ThemeProvider theme={theme}>
      <div style={{ padding: 24 }}>
        <DefaultStory />
      </div>
    </ThemeProvider>
  ),
}

export const WithValue: Story = {
  render: () => (
    <ThemeProvider theme={theme}>
      <div style={{ padding: 24 }}>
        <WithValueStory />
      </div>
    </ThemeProvider>
  ),
}

export const RTLMode: Story = {
  name: 'RTL Mode',
  render: () => (
    <ThemeProvider theme={theme}>
      <div style={{ padding: 24 }}>
        <RTLStory />
      </div>
    </ThemeProvider>
  ),
}

export const Disabled: Story = {
  args: {
    label: 'מנוטרל',
    value: new Date(2025, 5, 1),
    disabled: true,
  },
}

export const ReadOnly: Story = {
  args: {
    label: 'קריאה בלבד',
    value: new Date(2025, 5, 1),
    readOnly: true,
  },
}

export const MinMaxDate: Story = {
  name: 'Min / Max Date',
  render: () => (
    <ThemeProvider theme={theme}>
      <div style={{ padding: 24 }}>
        <MinMaxStory />
      </div>
    </ThemeProvider>
  ),
}
