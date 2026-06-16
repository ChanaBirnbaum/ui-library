import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import SvgIcon from '@mui/material/SvgIcon'
import { IpsDrawer } from './IpsDrawer'
import type { IpsDrawerCloseReason } from './IpsDrawer.types'

const theme = createTheme()

const meta: Meta<typeof IpsDrawer> = {
  title: 'Components/IpsDrawer',
  component: IpsDrawer,
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

function Trigger({
  label,
  children,
}: {
  label: string
  children: (props: { open: boolean; onClose: (r: IpsDrawerCloseReason) => void }) => React.ReactNode
}) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>{label}</Button>
      {children({ open, onClose: () => setOpen(false) })}
    </>
  )
}

// ─── Sample inner content ──────────────────────────────────────────────────────

const SampleForm = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
    <TextField label="First name" size="small" fullWidth />
    <TextField label="Last name" size="small" fullWidth />
    <TextField label="Email" size="small" fullWidth type="email" />
  </Box>
)

const LongContent = () => (
  <Box>
    {Array.from({ length: 20 }, (_, i) => (
      <Typography key={i} paragraph>
        Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
    ))}
  </Box>
)

// ─── Stories ──────────────────────────────────────────────────────────────────

// Default (title + content + actions)
export const Default: Story = {
  render: () => (
    <Trigger label="Open drawer">
      {({ open, onClose }) => (
        <IpsDrawer
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
        </IpsDrawer>
      )}
    </Trigger>
  ),
}

// Content only (no header, no footer)
export const ContentOnly: Story = {
  render: () => (
    <Trigger label="Open (no header/footer)">
      {({ open, onClose }) => (
        <IpsDrawer open={open} onClose={onClose} showCloseButton={false}>
          <Typography>This drawer has no header or footer — pure content area.</Typography>
        </IpsDrawer>
      )}
    </Trigger>
  ),
}

// Anchors
export const AnchorLeft: Story = {
  render: () => (
    <Trigger label="Open left">
      {({ open, onClose }) => (
        <IpsDrawer open={open} anchor="left" title="Left drawer" onClose={onClose}>
          <Typography>anchor="left"</Typography>
        </IpsDrawer>
      )}
    </Trigger>
  ),
}

export const AnchorRight: Story = {
  render: () => (
    <Trigger label="Open right">
      {({ open, onClose }) => (
        <IpsDrawer open={open} anchor="right" title="Right drawer" onClose={onClose}>
          <Typography>anchor="right" (default)</Typography>
        </IpsDrawer>
      )}
    </Trigger>
  ),
}

export const AnchorTop: Story = {
  render: () => (
    <Trigger label="Open top">
      {({ open, onClose }) => (
        <IpsDrawer open={open} anchor="top" title="Top drawer" onClose={onClose} size={280}>
          <Typography>anchor="top"</Typography>
        </IpsDrawer>
      )}
    </Trigger>
  ),
}

export const AnchorBottom: Story = {
  render: () => (
    <Trigger label="Open bottom">
      {({ open, onClose }) => (
        <IpsDrawer open={open} anchor="bottom" title="Bottom drawer" onClose={onClose} size={280}>
          <Typography>anchor="bottom"</Typography>
        </IpsDrawer>
      )}
    </Trigger>
  ),
}

// Variants
export const VariantTemporary: Story = {
  render: () => (
    <Trigger label="Temporary (modal)">
      {({ open, onClose }) => (
        <IpsDrawer open={open} variant="temporary" title="Temporary" onClose={onClose}>
          <Typography>variant="temporary" — modal with backdrop</Typography>
        </IpsDrawer>
      )}
    </Trigger>
  ),
}

export const VariantPersistent: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button variant="contained" onClick={() => setOpen((v) => !v)}>
          Toggle persistent drawer
        </Button>
        <Box sx={{ flex: 1, position: 'relative' }}>
          <IpsDrawer
            open={open}
            variant="persistent"
            anchor="left"
            title="Persistent panel"
            onClose={() => setOpen(false)}
            size={240}
          >
            <Typography>variant="persistent" — pushes content</Typography>
          </IpsDrawer>
        </Box>
      </Box>
    )
  },
}

export const VariantPermanent: Story = {
  render: () => (
    <Box sx={{ display: 'flex', height: 300 }}>
      <IpsDrawer
        open
        variant="permanent"
        anchor="left"
        title="Permanent panel"
        size={200}
      >
        <Typography>variant="permanent" — always visible</Typography>
      </IpsDrawer>
      <Box sx={{ flex: 1, p: 2 }}>
        <Typography>Main content area</Typography>
      </Box>
    </Box>
  ),
}

// Sizes
export const SizeSmall: Story = {
  render: () => (
    <Trigger label="Open small (280px)">
      {({ open, onClose }) => (
        <IpsDrawer open={open} title="Small drawer" onClose={onClose} size={280}>
          <Typography>size=280 (px)</Typography>
        </IpsDrawer>
      )}
    </Trigger>
  ),
}

export const SizeLarge: Story = {
  render: () => (
    <Trigger label="Open large (600px)">
      {({ open, onClose }) => (
        <IpsDrawer open={open} title="Large drawer" onClose={onClose} size={600}>
          <Typography>size=600 (px)</Typography>
        </IpsDrawer>
      )}
    </Trigger>
  ),
}

export const SizePercent: Story = {
  render: () => (
    <Trigger label="Open 40%">
      {({ open, onClose }) => (
        <IpsDrawer open={open} title="40% width" onClose={onClose} size="40%">
          <Typography>size="40%" (string)</Typography>
        </IpsDrawer>
      )}
    </Trigger>
  ),
}

// With dividers
export const WithDividers: Story = {
  render: () => (
    <Trigger label="Open with dividers">
      {({ open, onClose }) => (
        <IpsDrawer
          open={open}
          title="With dividers"
          onClose={onClose}
          dividers
          actions={<Button onClick={() => onClose('closeButton')}>Close</Button>}
        >
          <Typography>Dividers appear between header / content / footer.</Typography>
        </IpsDrawer>
      )}
    </Trigger>
  ),
}

// Without close button
export const WithoutCloseButton: Story = {
  render: () => (
    <Trigger label="Open (no X button)">
      {({ open, onClose }) => (
        <IpsDrawer
          open={open}
          title="No close button"
          onClose={onClose}
          showCloseButton={false}
          actions={<Button variant="contained" onClick={() => onClose('closeButton')}>Done</Button>}
        >
          <Typography>The header X button is hidden.</Typography>
        </IpsDrawer>
      )}
    </Trigger>
  ),
}

// disableBackdropClose + disableEscapeKeyDown
export const DisableBackdropAndEscape: Story = {
  render: () => (
    <Trigger label="Open (backdrop + Esc disabled)">
      {({ open, onClose }) => (
        <IpsDrawer
          open={open}
          title="Backdrop + Esc disabled"
          onClose={onClose}
          disableBackdropClose
          disableEscapeKeyDown
          actions={<Button variant="contained" onClick={() => onClose('closeButton')}>Only this closes</Button>}
        >
          <Typography>Click backdrop or press Esc — nothing happens.</Typography>
        </IpsDrawer>
      )}
    </Trigger>
  ),
}

// Hidden backdrop
export const HiddenBackdrop: Story = {
  render: () => (
    <Trigger label="Open (no backdrop)">
      {({ open, onClose }) => (
        <IpsDrawer open={open} title="No backdrop" onClose={onClose} hideBackdrop>
          <Typography>hideBackdrop=true — no semi-transparent overlay behind the drawer.</Typography>
        </IpsDrawer>
      )}
    </Trigger>
  ),
}

// Loading overlay
export const LoadingOverlay: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    return (
      <>
        <Button variant="contained" onClick={() => setOpen(true)}>Open</Button>
        <IpsDrawer
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
        </IpsDrawer>
      </>
    )
  },
}

// Long scrolling content (pinned header/footer)
export const LongScrollingContent: Story = {
  render: () => (
    <Trigger label="Open (long content)">
      {({ open, onClose }) => (
        <IpsDrawer
          open={open}
          title="Pinned header + footer"
          onClose={onClose}
          dividers
          size={400}
          actions={
            <>
              <Button onClick={() => onClose('closeButton')}>Cancel</Button>
              <Button variant="contained" onClick={() => onClose('closeButton')}>Apply</Button>
            </>
          }
        >
          <LongContent />
        </IpsDrawer>
      )}
    </Trigger>
  ),
}

// Custom header via renderHeader
export const CustomRenderHeader: Story = {
  render: () => (
    <Trigger label="Open (custom header)">
      {({ open, onClose }) => (
        <IpsDrawer
          open={open}
          onClose={onClose}
          renderHeader={({ requestClose, titleId }) => (
            <Box
              id={titleId}
              sx={{
                bgcolor: 'primary.main',
                color: 'common.white',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                px: 2,
                py: 1.5,
                flexShrink: 0,
              }}
            >
              <Typography fontWeight={700}>Custom Header</Typography>
              <Button size="small" sx={{ color: 'inherit' }} onClick={requestClose}>✕ Close</Button>
            </Box>
          )}
        >
          <Typography>The header above is fully custom via renderHeader.</Typography>
        </IpsDrawer>
      )}
    </Trigger>
  ),
}

// Custom footer via renderFooter
export const CustomRenderFooter: Story = {
  render: () => (
    <Trigger label="Open (custom footer)">
      {({ open, onClose }) => (
        <IpsDrawer
          open={open}
          title="Custom footer"
          onClose={onClose}
          renderFooter={({ requestClose }) => (
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, py: 1.5, flexShrink: 0 }}>
              <Typography variant="caption" color="text.secondary">Step 1 of 3</Typography>
              <Button variant="contained" onClick={requestClose}>Next →</Button>
            </Box>
          )}
        >
          <Typography>The footer below is fully custom via renderFooter.</Typography>
        </IpsDrawer>
      )}
    </Trigger>
  ),
}

// RTL layout
export const RtlLayout: Story = {
  render: () => (
    <Trigger label="Open RTL">
      {({ open, onClose }) => (
        <IpsDrawer
          open={open}
          anchor="right"
          title="כותרת המגירה"
          onClose={onClose}
          rtl
          actions={
            <>
              <Button onClick={() => onClose('closeButton')}>ביטול</Button>
              <Button variant="contained" onClick={() => onClose('closeButton')}>שמירה</Button>
            </>
          }
        >
          <Typography dir="rtl">תוכן המגירה מימין לשמאל.</Typography>
        </IpsDrawer>
      )}
    </Trigger>
  ),
}

// With header icon
export const WithHeaderIcon: Story = {
  render: () => {
    const FilterIcon = () => (
      <SvgIcon sx={{ color: 'primary.main' }} viewBox="0 0 24 24">
        <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
      </SvgIcon>
    )
    return (
      <Trigger label="Open with icon">
        {({ open, onClose }) => (
          <IpsDrawer open={open} title="Filters" icon={<FilterIcon />} onClose={onClose}>
            <Typography>This drawer has an icon in the header.</Typography>
          </IpsDrawer>
        )}
      </Trigger>
    )
  },
}
