import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'
import { IpsAccordion } from './IpsAccordion'

const theme = createTheme()

const meta: Meta<typeof IpsAccordion> = {
  title: 'Components/IpsAccordion',
  component: IpsAccordion,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ width: '100%', maxWidth: '600px' }}>
          <Story />
        </div>
      </ThemeProvider>
    )
  ],
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    summary: 'Accordion Item 1',
    children: 'This is the content of the accordion item.'
  }
}

export const DefaultExpanded: Story = {
  args: {
    summary: 'Accordion Item (Expanded by Default)',
    children: 'This accordion opens automatically on page load.',
    defaultExpanded: true
  }
}

export const Disabled: Story = {
  args: {
    summary: 'Disabled Accordion',
    children: 'This accordion cannot be opened or closed.',
    disabled: true
  }
}

export const Multiple: Story = {
  render: () => (
    <ThemeProvider theme={theme}>
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <IpsAccordion summary="First Item" defaultExpanded={true}>
          Content of the first accordion item.
        </IpsAccordion>
        <IpsAccordion summary="Second Item">
          Content of the second accordion item.
        </IpsAccordion>
        <IpsAccordion summary="Third Item">
          Content of the third accordion item.
        </IpsAccordion>
      </div>
    </ThemeProvider>
  )
}

export const CustomSummaryContent: Story = {
  args: {
    summary: (
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <span>Advanced Settings</span>
        <span style={{ fontSize: '0.85em', color: '#666' }}>(3 items)</span>
      </div>
    ),
    children: (
      <div>
        <p>Setting 1: Value</p>
        <p>Setting 2: Value</p>
        <p>Setting 3: Value</p>
      </div>
    )
  }
}
