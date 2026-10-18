import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { IpsDatePickerMobile } from './IpsDatePickerMobile'
import { IpsTimePickerMobile } from '../IpsTimePickerMobile'

const theme = createTheme({ direction: 'rtl' })

const meta: Meta<typeof IpsDatePickerMobile> = {
  title: 'Components/IpsDatePickerMobile',
  component: IpsDatePickerMobile,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div dir="rtl" style={{ padding: 24, maxWidth: 375, background: '#f5f7fa' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

function DateRangeStory({ error = false }: { error?: boolean }) {
  const [startDate, setStartDate] = useState('2026-10-18')
  const [endDate, setEndDate] = useState('2026-10-19')
  const [isTouched, setIsTouched] = useState(false)
  const errorText = error ? 'יש לבחור תאריך התחלה ותאריך סיום' : undefined

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
      <IpsDatePickerMobile
        label="בחר תאריך"
        aria-label="תאריך התחלה"
        placeholder="--/--/--"
        value={startDate}
        muted={!isTouched}
        error={error}
        onChange={(value) => {
          setStartDate(value)
          setIsTouched(true)
        }}
      />
      <IpsDatePickerMobile
        aria-label="תאריך סיום"
        placeholder="--/--/--"
        value={endDate}
        min={startDate}
        muted={!isTouched}
        error={error}
        helperText={errorText}
        onChange={(value) => {
          setEndDate(value)
          setIsTouched(true)
        }}
      />
    </div>
  )
}

function TimeRangeStory() {
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('18:00')
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
      <IpsTimePickerMobile
        label="בחר שעה"
        aria-label="שעת התחלה"
        placeholder="--:--"
        clearButtonLabel="ניקוי שעת התחלה"
        value={startTime}
        onChange={setStartTime}
      />
      <IpsTimePickerMobile
        aria-label="שעת סיום"
        placeholder="--:--"
        clearButtonLabel="ניקוי שעת סיום"
        value={endTime}
        onChange={setEndTime}
      />
    </div>
  )
}

export const DateRange: Story = {
  render: () => <DateRangeStory />,
}

export const DateRangeWithError: Story = {
  render: () => <DateRangeStory error />,
}

export const TimeRange: Story = {
  render: () => <TimeRangeStory />,
}

export const Disabled: Story = {
  render: () => <IpsDatePickerMobile label="בחר תאריך" value="2026-10-18" disabled />,
}
