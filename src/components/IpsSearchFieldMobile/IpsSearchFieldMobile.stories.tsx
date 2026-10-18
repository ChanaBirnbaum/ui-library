import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { IpsSearchFieldMobile } from './IpsSearchFieldMobile'

const theme = createTheme({ direction: 'rtl' })

const meta: Meta<typeof IpsSearchFieldMobile> = {
  title: 'Components/IpsSearchFieldMobile',
  component: IpsSearchFieldMobile,
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

function ControlledStory({ disabled = false }: { disabled?: boolean }) {
  const [value, setValue] = useState('')
  return (
    <IpsSearchFieldMobile
      aria-label="חיפוש חניכים"
      placeholder="חיפוש לפי שם או מספר"
      clearButtonLabel="ניקוי חיפוש"
      value={value}
      onChange={setValue}
      disabled={disabled}
    />
  )
}

export const Default: Story = {
  render: () => <ControlledStory />,
}

export const Disabled: Story = {
  render: () => <ControlledStory disabled />,
}
