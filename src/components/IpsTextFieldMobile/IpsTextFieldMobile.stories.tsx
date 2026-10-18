import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { IpsTextFieldMobile } from './IpsTextFieldMobile'
import { IpsTextAreaMobile } from '../IpsTextAreaMobile'
import { IpsRadioGroupMobile } from '../IpsRadioGroupMobile'

const theme = createTheme({ direction: 'rtl' })

const meta: Meta<typeof IpsTextFieldMobile> = {
  title: 'Components/IpsTextFieldMobile',
  component: IpsTextFieldMobile,
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

const DIGITS_ONLY = /\D/g

function TimerIcon() {
  return (
    <svg aria-hidden="true" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2 2" />
      <path d="M10 2h4" />
    </svg>
  )
}

function DurationStory({ error = false }: { error?: boolean }) {
  const [minutes, setMinutes] = useState('')
  return (
    <div style={{ width: '50%' }}>
      <IpsTextFieldMobile
        label="משך מרבי לכל שיחה"
        required
        inputMode="numeric"
        maxLength={3}
        placeholder="הזן דקות"
        suffix="דק'"
        endIcon={<TimerIcon />}
        clearButtonLabel="ניקוי משך השיחה"
        value={minutes}
        onChange={(value) => setMinutes(value.replace(DIGITS_ONLY, ''))}
        error={error}
        helperText={error ? 'יש להזין מספר דקות שלם בין 1 ל-120' : undefined}
      />
    </div>
  )
}

function DetailsStory() {
  const [details, setDetails] = useState('')
  return <IpsTextAreaMobile label="פירוט" placeholder="הוסף פירוט" value={details} onChange={setDetails} />
}

function LimitTypeStory() {
  const [limitType, setLimitType] = useState<string | number>('full')
  return (
    <IpsRadioGroupMobile
      aria-label="סוג ההגבלה"
      options={[
        { label: 'הגבלה מלאה', value: 'full' },
        { label: 'הגבלת משך שיחה', value: 'limited' },
      ]}
      value={limitType}
      onChange={setLimitType}
    />
  )
}

export const Duration: Story = {
  render: () => <DurationStory />,
}

export const DurationWithError: Story = {
  render: () => <DurationStory error />,
}

export const TextArea: Story = {
  render: () => <DetailsStory />,
}

export const RadioGroup: Story = {
  render: () => <LimitTypeStory />,
}
