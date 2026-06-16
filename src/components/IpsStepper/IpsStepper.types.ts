import type React from 'react'
import type { StepperProps } from '@mui/material/Stepper'

export type IpsStepStatus = 'pending' | 'active' | 'completed' | 'warning' | 'error' | 'disabled'

export interface IpsStepItem {
  label: React.ReactNode
  description?: React.ReactNode
  optional?: boolean
  icon?: React.ReactNode
  status?: IpsStepStatus
  disabled?: boolean
  content?: React.ReactNode
  key?: string | number
}

export interface IpsStepRenderContext {
  index: number
  step: IpsStepItem
  status: IpsStepStatus
  active: boolean
  completed: boolean
}

export interface IpsStepperProps extends Omit<StepperProps, 'children'> {
  steps: IpsStepItem[]
  activeStep: number
  orientation?: 'horizontal' | 'vertical'
  alternativeLabel?: boolean
  nonLinear?: boolean
  onStepClick?: (index: number, step: IpsStepItem) => void
  renderStepIcon?: (ctx: IpsStepRenderContext) => React.ReactNode
  renderStepLabel?: (ctx: IpsStepRenderContext) => React.ReactNode
  renderConnector?: (ctx: { index: number }) => React.ReactNode
  className?: string
}
