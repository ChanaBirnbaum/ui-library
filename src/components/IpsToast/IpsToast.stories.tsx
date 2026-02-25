import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { IpsToastProvider } from './IpsToastProvider'
import { useToast } from './useToast'
import { TOAST_TYPES } from './IpsToast.types'

const theme = createTheme()

const meta: Meta<typeof IpsToastProvider> = {
  title: 'Components/IpsToast',
  component: IpsToastProvider,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ padding: 24 }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// ─── Trigger helper inside provider ──────────────────────────────────────────

function ToastButtons() {
  const addToast = useToast()
  return (
    <Stack spacing={2} direction="row" flexWrap="wrap">
      <Button
        variant="contained"
        color="success"
        onClick={() => addToast(TOAST_TYPES.SUCCESS, 'הפעולה בוצעה בהצלחה!')}
      >
        Success
      </Button>
      <Button
        variant="contained"
        color="info"
        onClick={() => addToast(TOAST_TYPES.INFO, 'מידע חשוב לידיעתך')}
      >
        Info
      </Button>
      <Button
        variant="contained"
        color="warning"
        onClick={() => addToast(TOAST_TYPES.WARNING, 'שים לב לבעיה אפשרית')}
      >
        Warning
      </Button>
      <Button
        variant="contained"
        color="error"
        onClick={() => addToast(TOAST_TYPES.DANGER, 'שגיאה קריטית — נסה שוב')}
      >
        Danger
      </Button>
    </Stack>
  )
}

// ─── Stories ──────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => (
    <IpsToastProvider>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        לחץ על כפתור להצגת toast:
      </Typography>
      <ToastButtons />
    </IpsToastProvider>
  ),
}

export const TopRight: Story = {
  render: () => (
    <IpsToastProvider position="top-right">
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        מיקום: top-right
      </Typography>
      <ToastButtons />
    </IpsToastProvider>
  ),
}

export const TopLeft: Story = {
  render: () => (
    <IpsToastProvider position="top-left">
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        מיקום: top-left
      </Typography>
      <ToastButtons />
    </IpsToastProvider>
  ),
}

export const ShortDeleteTime: Story = {
  render: () => (
    <IpsToastProvider deleteTime={1500}>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        נסגר אחרי 1.5 שניות
      </Typography>
      <ToastButtons />
    </IpsToastProvider>
  ),
}

export const MaxToastsTwo: Story = {
  render: () => (
    <IpsToastProvider maxToasts={2}>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        maxToasts=2 — מציג עד 2 הודעות בלבד
      </Typography>
      <ToastButtons />
    </IpsToastProvider>
  ),
}
