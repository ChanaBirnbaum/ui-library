import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { IpsRadioListMobile } from './IpsRadioListMobile'
import type { IpsRadioListMobileValue } from './IpsRadioListMobile.types'

const theme = createTheme({ direction: 'rtl' })

const meta: Meta<typeof IpsRadioListMobile> = {
  title: 'Components/IpsRadioListMobile',
  component: IpsRadioListMobile,
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

const sortOptions = [
  { label: 'שם – א׳ עד ת׳', value: 'name-asc' },
  { label: 'שם – ת׳ עד א׳', value: 'name-desc' },
  { label: 'תאריך אחרון – מהחדש לישן', value: 'date-desc' },
  { label: 'תאריך אחרון – מהישן לחדש', value: 'date-asc' },
]

function ControlledStory() {
  const [value, setValue] = useState<IpsRadioListMobileValue | null>('date-desc')
  return <IpsRadioListMobile aria-label="מיון" options={sortOptions} value={value} onChange={setValue} />
}

export const Default: Story = {
  render: () => <ControlledStory />,
}
