import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import SvgIcon from '@mui/material/SvgIcon'
import { IpsTabs } from './IpsTabs'
import type { IpsTabItem } from './IpsTabs.types'

const theme = createTheme()

const meta: Meta<typeof IpsTabs> = {
  title: 'Components/IpsTabs',
  component: IpsTabs,
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

const BASIC_TABS: IpsTabItem[] = [
  { value: 'details', label: 'Details' },
  { value: 'settings', label: 'Settings' },
  { value: 'history', label: 'History' },
]

const MANY_TABS: IpsTabItem[] = Array.from({ length: 10 }, (_, i) => ({
  value: `tab-${i}`,
  label: `Tab ${i + 1}`,
}))

// ─── Stories ──────────────────────────────────────────────────────────────────

export const Horizontal: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>('details')
    return (
      <>
        <IpsTabs tabs={BASIC_TABS} value={value} onTabChange={(v) => setValue(v)} />
        <Typography variant="caption" sx={{ mt: 1, display: 'block' }}>
          Active: {value}
        </Typography>
      </>
    )
  },
}

export const Vertical: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>('details')
    return (
      <Box sx={{ display: 'flex', gap: 2 }}>
        <IpsTabs
          tabs={BASIC_TABS}
          value={value}
          onTabChange={(v) => setValue(v)}
          orientation="vertical"
          sx={{ borderRight: 1, borderColor: 'divider', minWidth: 160 }}
        />
        <Typography variant="body2" sx={{ pt: 1 }}>
          Active: {value}
        </Typography>
      </Box>
    )
  },
}

export const Scrollable: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>('tab-0')
    return (
      <IpsTabs
        tabs={MANY_TABS}
        value={value}
        onTabChange={(v) => setValue(v)}
        variant="scrollable"
        scrollButtons="auto"
      />
    )
  },
}

export const FullWidth: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>('details')
    return (
      <IpsTabs
        tabs={BASIC_TABS}
        value={value}
        onTabChange={(v) => setValue(v)}
        variant="fullWidth"
      />
    )
  },
}

export const Centered: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>('details')
    return (
      <IpsTabs
        tabs={BASIC_TABS}
        value={value}
        onTabChange={(v) => setValue(v)}
        centered
      />
    )
  },
}

export const WithIcons: Story = {
  render: () => {
    const HomeIcon = () => (
      <SvgIcon viewBox="0 0 24 24">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    )
    const StarIcon = () => (
      <SvgIcon viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </SvgIcon>
    )
    const SettingsIcon = () => (
      <SvgIcon viewBox="0 0 24 24">
        <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
      </SvgIcon>
    )
    const [value, setValue] = useState<string | number>('home')
    const tabs: IpsTabItem[] = [
      { value: 'home', label: 'Home', icon: <HomeIcon />, iconPosition: 'start' },
      { value: 'star', label: 'Favourites', icon: <StarIcon />, iconPosition: 'start' },
      { value: 'settings', label: 'Settings', icon: <SettingsIcon />, iconPosition: 'end' },
    ]
    return <IpsTabs tabs={tabs} value={value} onTabChange={(v) => setValue(v)} />
  },
}

export const WithBadges: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>('inbox')
    const tabs: IpsTabItem[] = [
      { value: 'inbox', label: 'Inbox', badge: 4 },
      { value: 'sent', label: 'Sent', badge: 12 },
      { value: 'drafts', label: 'Drafts', badge: 0 },
    ]
    return <IpsTabs tabs={tabs} value={value} onTabChange={(v) => setValue(v)} />
  },
}

export const DisabledTab: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>('details')
    const tabs: IpsTabItem[] = [
      { value: 'details', label: 'Details' },
      { value: 'settings', label: 'Settings', disabled: true },
      { value: 'history', label: 'History' },
    ]
    return <IpsTabs tabs={tabs} value={value} onTabChange={(v) => setValue(v)} />
  },
}

export const ErrorTab: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>('details')
    const tabs: IpsTabItem[] = [
      { value: 'details', label: 'Details' },
      { value: 'payment', label: 'Payment', error: true, badge: '!' },
      { value: 'review', label: 'Review' },
    ]
    return <IpsTabs tabs={tabs} value={value} onTabChange={(v) => setValue(v)} />
  },
}

export const WithPanels: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>('details')
    const tabs: IpsTabItem[] = [
      {
        value: 'details',
        label: 'Details',
        content: <Typography variant="body2" sx={{ p: 2 }}>Details panel content here.</Typography>,
      },
      {
        value: 'settings',
        label: 'Settings',
        content: <Typography variant="body2" sx={{ p: 2 }}>Settings panel content here.</Typography>,
      },
      {
        value: 'history',
        label: 'History',
        content: <Typography variant="body2" sx={{ p: 2 }}>History panel content here.</Typography>,
      },
    ]
    return (
      <IpsTabs
        tabs={tabs}
        value={value}
        onTabChange={(v) => setValue(v)}
        renderPanels
      />
    )
  },
}

export const WithPanelsKeepMounted: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>('details')
    const tabs: IpsTabItem[] = [
      {
        value: 'details',
        label: 'Details',
        content: <Typography variant="body2" sx={{ p: 2 }}>Details content (always mounted).</Typography>,
      },
      {
        value: 'settings',
        label: 'Settings',
        content: <Typography variant="body2" sx={{ p: 2 }}>Settings content (always mounted, hidden when inactive).</Typography>,
      },
    ]
    return (
      <IpsTabs
        tabs={tabs}
        value={value}
        onTabChange={(v) => setValue(v)}
        renderPanels
        keepMounted
      />
    )
  },
}

export const CustomRenderTabLabel: Story = {
  render: () => {
    const [value, setValue] = useState<string | number>('details')
    return (
      <IpsTabs
        tabs={BASIC_TABS}
        value={value}
        onTabChange={(v) => setValue(v)}
        renderTabLabel={({ tab, selected }) => (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="caption" fontWeight={selected ? 700 : 400}>
              {tab.label as string}
            </Typography>
            {selected && (
              <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'primary.main', mt: 0.25 }} />
            )}
          </Box>
        )}
      />
    )
  },
}
