import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import moment, { type Moment } from 'moment'
import 'moment/locale/he'
import { IpsTimePicker } from './IpsTimePicker'

const theme = createTheme()

const meta: Meta<typeof IpsTimePicker> = {
  title: 'Components/IpsTimePicker',
  component: IpsTimePicker,
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
  const [value, setValue] = useState<Moment | null>(null)
  return (
    <IpsTimePicker
      label="בחר שעה"
      value={value}
      onChange={(v) => setValue(v)}
    />
  )
}

function WithValueStory() {
  const [value, setValue] = useState<Moment | null>(moment('14:30', 'HH:mm'))
  return (
    <IpsTimePicker
      label="שעת פגישה"
      value={value}
      onChange={(v) => setValue(v)}
    />
  )
}

function TwentyFourHourStory() {
  const [value, setValue] = useState<Moment | null>(moment('09:00', 'HH:mm'))
  return (
    <IpsTimePicker
      label="פורמט 24 שעות"
      value={value}
      onChange={(v) => setValue(v)}
      ampm={false}
    />
  )
}

function MinMaxTimeStory() {
  const [value, setValue] = useState<Moment | null>(null)
  return (
    <IpsTimePicker
      label="שעות עבודה (09:00–17:00)"
      value={value}
      onChange={(v) => setValue(v)}
      ampm={false}
      minTime={moment('09:00', 'HH:mm')}
      maxTime={moment('17:00', 'HH:mm')}
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

export const Disabled: Story = {
  args: {
    label: 'מנוטרל',
    value: moment('10:00', 'HH:mm') as any,
    disabled: true,
  },
}

export const TwentyFourHour: Story = {
  name: '24-Hour Format',
  render: () => (
    <ThemeProvider theme={theme}>
      <div style={{ padding: 24 }}>
        <TwentyFourHourStory />
      </div>
    </ThemeProvider>
  ),
}

export const WithMinMaxTime: Story = {
  name: 'Min / Max Time',
  render: () => (
    <ThemeProvider theme={theme}>
      <div style={{ padding: 24 }}>
        <MinMaxTimeStory />
      </div>
    </ThemeProvider>
  ),
}
