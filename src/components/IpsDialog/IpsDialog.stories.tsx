import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import DialogTitle from '@mui/material/DialogTitle'
import DialogActions from '@mui/material/DialogActions'
import SvgIcon from '@mui/material/SvgIcon'
import { IpsDialog } from './IpsDialog'
import type { IpsDialogCloseReason } from './IpsDialog.types'

const theme = createTheme()

const meta: Meta<typeof IpsDialog> = {
  title: 'Components/IpsDialog',
  component: IpsDialog,
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

// ─── Helper trigger ────────────────────────────────────────────────────────────

function Trigger({ label, children }: { label: string; children: (props: { open: boolean; onClose: (r: IpsDialogCloseReason) => void }) => React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>{label}</Button>
      {children({ open, onClose: () => setOpen(false) })}
    </>
  )
}

const SampleForm = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 1 }}>
    <TextField label="First name" size="small" fullWidth />
    <TextField label="Last name" size="small" fullWidth />
    <TextField label="Email" size="small" fullWidth type="email" />
  </Box>
)

// ─── Stories ──────────────────────────────────────────────────────────────────

export const Default: Story = {
  render: () => (
    <Trigger label="Open dialog">
      {({ open, onClose }) => (
        <IpsDialog
          open={open}
          title="Edit user"
          onClose={onClose}
          actions={
            <>
              <Button onClick={() => onClose('closeButton')}>Cancel</Button>
              <Button variant="contained" onClick={() => onClose('closeButton')}>Save</Button>
            </>
          }
        >
          <SampleForm />
        </IpsDialog>
      )}
    </Trigger>
  ),
}

export const ContentOnly: Story = {
  render: () => (
    <Trigger label="Open (no header/footer)">
      {({ open, onClose }) => (
        <IpsDialog open={open} onClose={onClose} showCloseButton={false}>
          <Typography>This dialog has no header or footer — pure content area.</Typography>
        </IpsDialog>
      )}
    </Trigger>
  ),
}

export const SizeXs: Story = {
  render: () => (
    <Trigger label="Open xs">
      {({ open, onClose }) => (
        <IpsDialog open={open} title="Extra small" onClose={onClose} maxWidth="xs">
          <Typography>maxWidth="xs"</Typography>
        </IpsDialog>
      )}
    </Trigger>
  ),
}

export const SizeMd: Story = {
  render: () => (
    <Trigger label="Open md">
      {({ open, onClose }) => (
        <IpsDialog open={open} title="Medium" onClose={onClose} maxWidth="md">
          <Typography>maxWidth="md"</Typography>
        </IpsDialog>
      )}
    </Trigger>
  ),
}

export const SizeLg: Story = {
  render: () => (
    <Trigger label="Open lg">
      {({ open, onClose }) => (
        <IpsDialog open={open} title="Large" onClose={onClose} maxWidth="lg">
          <Typography>maxWidth="lg"</Typography>
        </IpsDialog>
      )}
    </Trigger>
  ),
}

export const NumericMaxWidth: Story = {
  render: () => (
    <Trigger label="Open 720px">
      {({ open, onClose }) => (
        <IpsDialog open={open} title="Custom width: 720px" onClose={onClose} maxWidth={720}>
          <Typography>maxWidth={720} (pixels)</Typography>
        </IpsDialog>
      )}
    </Trigger>
  ),
}

export const FullWidth: Story = {
  render: () => (
    <Trigger label="Open fullWidth">
      {({ open, onClose }) => (
        <IpsDialog open={open} title="Full width" onClose={onClose} fullWidth maxWidth="sm">
          <Typography>fullWidth stretches the dialog to its maxWidth.</Typography>
        </IpsDialog>
      )}
    </Trigger>
  ),
}

export const FullScreen: Story = {
  render: () => (
    <Trigger label="Open full screen">
      {({ open, onClose }) => (
        <IpsDialog open={open} title="Full screen dialog" onClose={onClose} fullScreen>
          <Typography>This dialog is full screen.</Typography>
        </IpsDialog>
      )}
    </Trigger>
  ),
}

export const ResponsiveFullScreen: Story = {
  render: () => (
    <Trigger label="Open (full screen on mobile)">
      {({ open, onClose }) => (
        <IpsDialog
          open={open}
          title="Responsive full screen"
          onClose={onClose}
          fullScreenBreakpoint="sm"
        >
          <Typography>Goes full screen on sm and below. Resize the window.</Typography>
        </IpsDialog>
      )}
    </Trigger>
  ),
}

const LongContent = () => (
  <Box>
    {Array.from({ length: 20 }, (_, i) => (
      <Typography key={i} paragraph>
        Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
    ))}
  </Box>
)

export const ScrollPaper: Story = {
  render: () => (
    <Trigger label="Scroll: paper">
      {({ open, onClose }) => (
        <IpsDialog open={open} title="Paper scroll" onClose={onClose} scroll="paper" maxWidth="sm">
          <LongContent />
        </IpsDialog>
      )}
    </Trigger>
  ),
}

export const ScrollBody: Story = {
  render: () => (
    <Trigger label="Scroll: body">
      {({ open, onClose }) => (
        <IpsDialog open={open} title="Body scroll" onClose={onClose} scroll="body" maxWidth="sm">
          <LongContent />
        </IpsDialog>
      )}
    </Trigger>
  ),
}

export const WithDividers: Story = {
  render: () => (
    <Trigger label="Open with dividers">
      {({ open, onClose }) => (
        <IpsDialog
          open={open}
          title="With dividers"
          onClose={onClose}
          dividers
          actions={<Button onClick={() => onClose('closeButton')}>Close</Button>}
        >
          <Typography>Dividers appear between header / content / footer.</Typography>
        </IpsDialog>
      )}
    </Trigger>
  ),
}

export const WithoutCloseButton: Story = {
  render: () => (
    <Trigger label="Open (no X button)">
      {({ open, onClose }) => (
        <IpsDialog
          open={open}
          title="No close button"
          onClose={onClose}
          showCloseButton={false}
          actions={<Button variant="contained" onClick={() => onClose('closeButton')}>Done</Button>}
        >
          <Typography>The header X button is hidden. Only the action button closes this.</Typography>
        </IpsDialog>
      )}
    </Trigger>
  ),
}

export const DisableBackdropAndEscape: Story = {
  render: () => (
    <Trigger label="Open (backdrop + Esc disabled)">
      {({ open, onClose }) => (
        <IpsDialog
          open={open}
          title="Click backdrop or press Esc — nothing happens"
          onClose={onClose}
          disableBackdropClose
          disableEscapeKeyDown
          actions={<Button variant="contained" onClick={() => onClose('closeButton')}>Only this closes</Button>}
        >
          <Typography>Backdrop click and Esc are both disabled. Use the button.</Typography>
        </IpsDialog>
      )}
    </Trigger>
  ),
}

export const TransitionGrow: Story = {
  render: () => (
    <Trigger label="Transition: grow">
      {({ open, onClose }) => (
        <IpsDialog open={open} title="Grow" onClose={onClose} transition="grow">
          <Typography>Transition: grow</Typography>
        </IpsDialog>
      )}
    </Trigger>
  ),
}

export const TransitionSlide: Story = {
  render: () => (
    <Trigger label="Transition: slide">
      {({ open, onClose }) => (
        <IpsDialog open={open} title="Slide up" onClose={onClose} transition="slide">
          <Typography>Transition: slide (up)</Typography>
        </IpsDialog>
      )}
    </Trigger>
  ),
}

export const TransitionZoom: Story = {
  render: () => (
    <Trigger label="Transition: zoom">
      {({ open, onClose }) => (
        <IpsDialog open={open} title="Zoom" onClose={onClose} transition="zoom">
          <Typography>Transition: zoom</Typography>
        </IpsDialog>
      )}
    </Trigger>
  ),
}

export const WithHeaderIcon: Story = {
  render: () => {
    const InfoIcon = () => (
      <SvgIcon sx={{ color: 'primary.main' }} viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
      </SvgIcon>
    )
    return (
      <Trigger label="Open with icon">
        {({ open, onClose }) => (
          <IpsDialog open={open} title="Information" icon={<InfoIcon />} onClose={onClose}>
            <Typography>This dialog has an icon in the header.</Typography>
          </IpsDialog>
        )}
      </Trigger>
    )
  },
}

export const LoadingOverlay: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>Open</Button>
        <IpsDialog
          open={open}
          title="Saving…"
          onClose={(r) => { if (!loading) setOpen(false); console.log(r) }}
          loading={loading}
          actions={
            <>
              <Button onClick={() => setOpen(false)} disabled={loading}>Cancel</Button>
              <Button
                variant="contained"
                disabled={loading}
                onClick={() => {
                  setLoading(true)
                  setTimeout(() => { setLoading(false); setOpen(false) }, 2000)
                }}
              >
                Save
              </Button>
            </>
          }
        >
          <Typography>Click Save to see the loading overlay for 2 seconds.</Typography>
        </IpsDialog>
      </>
    )
  },
}

export const CustomRenderHeader: Story = {
  render: () => (
    <Trigger label="Open (custom header)">
      {({ open, onClose }) => (
        <IpsDialog
          open={open}
          onClose={onClose}
          renderHeader={({ requestClose, titleId }) => (
            <DialogTitle id={titleId} sx={{ bgcolor: 'primary.main', color: 'common.white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Custom Header</span>
              <Button size="small" sx={{ color: 'inherit' }} onClick={requestClose}>✕ Close</Button>
            </DialogTitle>
          )}
        >
          <Typography>The header above is fully custom via renderHeader.</Typography>
        </IpsDialog>
      )}
    </Trigger>
  ),
}

export const CustomRenderFooter: Story = {
  render: () => (
    <Trigger label="Open (custom footer)">
      {({ open, onClose }) => (
        <IpsDialog
          open={open}
          title="Custom footer"
          onClose={onClose}
          renderFooter={({ requestClose }) => (
            <DialogActions sx={{ justifyContent: 'space-between', px: 3 }}>
              <Typography variant="caption" color="text.secondary">Step 1 of 3</Typography>
              <Button variant="contained" onClick={requestClose}>Next →</Button>
            </DialogActions>
          )}
        >
          <Typography>The footer below is fully custom via renderFooter.</Typography>
        </IpsDialog>
      )}
    </Trigger>
  ),
}

export const RtlLayout: Story = {
  render: () => (
    <Trigger label="Open RTL">
      {({ open, onClose }) => (
        <IpsDialog
          open={open}
          title="כותרת הדיאלוג"
          onClose={onClose}
          rtl
          actions={
            <>
              <Button onClick={() => onClose('closeButton')}>ביטול</Button>
              <Button variant="contained" onClick={() => onClose('closeButton')}>שמירה</Button>
            </>
          }
        >
          <Typography dir="rtl">תוכן הדיאלוג מימין לשמאל.</Typography>
        </IpsDialog>
      )}
    </Trigger>
  ),
}
