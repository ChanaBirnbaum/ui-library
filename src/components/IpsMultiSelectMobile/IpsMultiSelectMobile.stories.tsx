import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { IpsMultiSelectMobile } from './IpsMultiSelectMobile'
import type { IpsMultiSelectMobilePicker, IpsMultiSelectMobileValue } from './IpsMultiSelectMobile.types'

const theme = createTheme({ direction: 'rtl' })

const meta: Meta<typeof IpsMultiSelectMobile> = {
  title: 'Components/IpsMultiSelectMobile',
  component: IpsMultiSelectMobile,
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

const wingOptions = [
  { label: 'אגף א', value: 1 },
  { label: 'אגף ב', value: 2 },
  { label: 'אגף ג', value: 3 },
]

const formatWings = (labels: string[]) => (labels.length === 1 ? labels[0] : `${labels.length} נבחרו`)

function ControlledStory({ picker }: { picker: IpsMultiSelectMobilePicker }) {
  const [value, setValue] = useState<IpsMultiSelectMobileValue[]>([])
  return (
    <IpsMultiSelectMobile
      label="אגף"
      placeholder="הכל"
      options={wingOptions}
      value={value}
      onChange={setValue}
      formatSelection={formatWings}
      picker={picker}
    />
  )
}

export const Auto: Story = {
  render: () => <ControlledStory picker="auto" />,
}

export const NativePicker: Story = {
  render: () => <ControlledStory picker="native" />,
}

export const MenuPicker: Story = {
  render: () => <ControlledStory picker="menu" />,
}
