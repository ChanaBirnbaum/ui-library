import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { IpsDateTimePicker } from './IpsDateTimePicker'

const theme = createTheme()

const meta: Meta<typeof IpsDateTimePicker> = {
  title: 'Components/IpsDateTimePicker',
  component: IpsDateTimePicker,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ padding: 24, maxWidth: 360 }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// ─── Controlled wrappers ─────────────────────────────────────────────────────

function DefaultStory() {
  const [value, setValue] = useState<Date | null>(null)
  return (
    <IpsDateTimePicker
      label="בחר תאריך ושעה"
      value={value}
      onChange={setValue}
    />
  )
}

function WithValueStory() {
  const [value, setValue] = useState<Date | null>(new Date(2025, 0, 15, 14, 30))
  return (
    <IpsDateTimePicker
      label="תאריך פגישה"
      value={value}
      onChange={setValue}
    />
  )
}

function RTLStory() {
  const [value, setValue] = useState<Date | null>(null)
  return (
    <IpsDateTimePicker
      label="תאריך ושעה"
      value={value}
      onChange={setValue}
      rtl
    />
  )
}

// ─── Stories ─────────────────────────────────────────────────────────────────

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
  render: () => (
    <ThemeProvider theme={theme}>
      <div style={{ padding: 24 }}>
        <RTLStory />
      </div>
    </ThemeProvider>
  ),
}

export const Disabled: Story = {
  render: () => (
    <ThemeProvider theme={theme}>
      <div style={{ padding: 24 }}>
        <IpsDateTimePicker
          label="שדה מנוטרל"
          value={new Date(2025, 0, 15, 9, 0)}
          onChange={() => {}}
          disabled
        />
      </div>
    </ThemeProvider>
  ),
}
