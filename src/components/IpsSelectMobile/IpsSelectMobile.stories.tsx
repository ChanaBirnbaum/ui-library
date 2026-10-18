import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { IpsSelectMobile } from './IpsSelectMobile'
import type { IpsSelectMobileValue } from './IpsSelectMobile.types'

const theme = createTheme({ direction: 'rtl' })

const meta: Meta<typeof IpsSelectMobile> = {
  title: 'Components/IpsSelectMobile',
  component: IpsSelectMobile,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div dir="rtl" style={{ padding: 24, maxWidth: 375 }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const instituteOptions = [
  { label: 'פנימיית הדר', value: 1 },
  { label: 'פנימיית אורות', value: 2 },
  { label: 'פנימיית נווה ים', value: 3 },
]

function ControlledStory({ error = false, disabled = false }: { error?: boolean; disabled?: boolean }) {
  const [value, setValue] = useState<IpsSelectMobileValue | null>(null)
  return (
    <IpsSelectMobile
      label="פנימייה"
      placeholder="בחר פנימייה"
      options={instituteOptions}
      value={value}
      onChange={setValue}
      required
      error={error}
      helperText={error ? 'שדה חובה' : undefined}
      disabled={disabled}
    />
  )
}

export const Default: Story = {
  render: () => <ControlledStory />,
}

export const WithError: Story = {
  render: () => <ControlledStory error />,
}

export const Disabled: Story = {
  render: () => <ControlledStory disabled />,
}
