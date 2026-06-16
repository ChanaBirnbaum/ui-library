import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import StepConnector from '@mui/material/StepConnector'
import SvgIcon from '@mui/material/SvgIcon'
import { IpsStepper } from './IpsStepper'
import type { IpsStepItem } from './IpsStepper.types'

const theme = createTheme()

const meta: Meta<typeof IpsStepper> = {
  title: 'Components/IpsStepper',
  component: IpsStepper,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Box sx={{ p: 3 }}>
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// ─── Shared fixtures ──────────────────────────────────────────────────────────

const BASIC_STEPS: IpsStepItem[] = [
  { label: 'Select campaign settings' },
  { label: 'Create an ad group' },
  { label: 'Create an ad' },
]

// ─── Stories ──────────────────────────────────────────────────────────────────

export const Horizontal: Story = {
  render: () => <IpsStepper steps={BASIC_STEPS} activeStep={1} />,
}

export const Vertical: Story = {
  render: () => <IpsStepper steps={BASIC_STEPS} activeStep={1} orientation="vertical" />,
}

export const AlternativeLabel: Story = {
  render: () => <IpsStepper steps={BASIC_STEPS} activeStep={1} alternativeLabel />,
}

export const WithDescriptions: Story = {
  render: () => {
    const steps: IpsStepItem[] = [
      { label: 'Select campaign settings', description: 'Choose your target audience' },
      { label: 'Create an ad group', optional: true, description: 'Add keywords and bids' },
      { label: 'Create an ad', description: 'Write your ad copy' },
    ]
    return <IpsStepper steps={steps} activeStep={1} />
  },
}

export const NonLinearClickable: Story = {
  render: () => {
    const [active, setActive] = React.useState(0)
    return (
      <IpsStepper
        steps={BASIC_STEPS}
        activeStep={active}
        nonLinear
        onStepClick={(index) => setActive(index)}
      />
    )
  },
}

export const ErrorStatus: Story = {
  render: () => {
    const steps: IpsStepItem[] = [
      { label: 'Select campaign settings' },
      { label: 'Create an ad group', status: 'error' },
      { label: 'Create an ad' },
    ]
    return <IpsStepper steps={steps} activeStep={1} />
  },
}

export const WarningStatus: Story = {
  render: () => {
    const steps: IpsStepItem[] = [
      { label: 'Select campaign settings' },
      { label: 'Create an ad group', status: 'warning' },
      { label: 'Create an ad' },
    ]
    return <IpsStepper steps={steps} activeStep={2} />
  },
}

export const DisabledStep: Story = {
  render: () => {
    const steps: IpsStepItem[] = [
      { label: 'Select campaign settings' },
      { label: 'Create an ad group', disabled: true },
      { label: 'Create an ad' },
    ]
    return (
      <IpsStepper
        steps={steps}
        activeStep={0}
        nonLinear
        onStepClick={(i) => console.log('clicked', i)}
      />
    )
  },
}

export const CustomStepIcons: Story = {
  render: () => {
    const HomeIcon = () => (
      <SvgIcon sx={{ fontSize: 20 }} viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    )
    const StarIcon = () => (
      <SvgIcon sx={{ fontSize: 20 }} viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </SvgIcon>
    )
    const LockIcon = () => (
      <SvgIcon sx={{ fontSize: 20 }} viewBox="0 0 24 24">
        <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
      </SvgIcon>
    )
    const steps: IpsStepItem[] = [
      { label: 'Home', icon: <HomeIcon /> },
      { label: 'Favourite', icon: <StarIcon /> },
      { label: 'Secure', icon: <LockIcon /> },
    ]
    return <IpsStepper steps={steps} activeStep={1} />
  },
}

export const VerticalWithStepContent: Story = {
  render: () => {
    const [active, setActive] = React.useState(0)
    const steps: IpsStepItem[] = [
      {
        label: 'Select campaign settings',
        content: (
          <Box>
            <Typography variant="body2">Configure settings here.</Typography>
            <Button size="small" onClick={() => setActive(1)} sx={{ mt: 1 }}>Next</Button>
          </Box>
        ),
      },
      {
        label: 'Create an ad group',
        content: (
          <Box>
            <Typography variant="body2">Define your ad group.</Typography>
            <Button size="small" onClick={() => setActive(2)} sx={{ mt: 1, mr: 1 }}>Next</Button>
            <Button size="small" onClick={() => setActive(0)} sx={{ mt: 1 }}>Back</Button>
          </Box>
        ),
      },
      {
        label: 'Create an ad',
        content: (
          <Box>
            <Typography variant="body2">Write your ad copy.</Typography>
            <Button size="small" onClick={() => setActive(0)} sx={{ mt: 1 }}>Reset</Button>
          </Box>
        ),
      },
    ]
    return <IpsStepper steps={steps} activeStep={active} orientation="vertical" />
  },
}

export const ManySteps: Story = {
  render: () => {
    const steps: IpsStepItem[] = Array.from({ length: 8 }, (_, i) => ({
      label: `Step ${i + 1}`,
    }))
    return <IpsStepper steps={steps} activeStep={3} />
  },
}

export const CustomRenderStepLabel: Story = {
  render: () => {
    const steps: IpsStepItem[] = [
      { label: 'Start', description: 'Beginning of the process' },
      { label: 'Middle', description: 'Core processing' },
      { label: 'End', description: 'Wrap up' },
    ]
    return (
      <IpsStepper
        steps={steps}
        activeStep={1}
        renderStepLabel={({ step, status }) => (
          <Box>
            <Typography variant="body2" fontWeight={status === 'active' ? 700 : 400}>
              {step.label as string}
            </Typography>
            {step.description && (
              <Typography variant="caption" color="text.secondary">
                {step.description as string}
              </Typography>
            )}
          </Box>
        )}
      />
    )
  },
}

export const CustomConnector: Story = {
  render: () => (
    <IpsStepper
      steps={BASIC_STEPS}
      activeStep={1}
      renderConnector={() => (
        <StepConnector
          sx={{
            '& .MuiStepConnector-line': {
              borderColor: 'primary.main',
              borderTopWidth: 3,
              borderRadius: 1,
            },
          }}
        />
      )}
    />
  ),
}

export const CustomRenderStepIcon: Story = {
  render: () => {
    const steps: IpsStepItem[] = BASIC_STEPS
    return (
      <IpsStepper
        steps={steps}
        activeStep={1}
        renderStepIcon={({ index, status }) => (
          <Box
            sx={{
              width: 32,
              height: 32,
              borderRadius: '50%',
              bgcolor: status === 'active' ? 'secondary.main' :
                       status === 'completed' ? 'success.main' : 'grey.400',
              color: 'common.white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.875rem',
              fontWeight: 700,
            }}
          >
            {index + 1}
          </Box>
        )}
      />
    )
  },
}
