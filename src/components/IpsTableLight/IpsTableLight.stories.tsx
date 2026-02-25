import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Chip from '@mui/material/Chip'
import { IpsTableLight } from './IpsTableLight'
import type { IpsTableLightColumn } from './IpsTableLight.types'

const theme = createTheme()

const meta: Meta<typeof IpsTableLight> = {
  title: 'Components/IpsTableLight',
  component: IpsTableLight,
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

// ─── Shared fixtures ──────────────────────────────────────────────────────────

const COLUMNS: IpsTableLightColumn[] = [
  { key: 'name',       label: 'שם',         width: 160 },
  { key: 'role',       label: 'תפקיד',      width: 160 },
  { key: 'department', label: 'מחלקה',      width: 160 },
  { key: 'status',     label: 'סטטוס',      width: 120 },
]

const ROWS = [
  { name: 'Alice Cohen',  role: 'Developer',   department: 'R&D',     status: 'פעיל' },
  { name: 'Bob Levi',     role: 'Designer',    department: 'Product', status: 'פעיל' },
  { name: 'Carol Shapir', role: 'PM',          department: 'Product', status: 'חופשה' },
  { name: 'Dan Mizrahi',  role: 'QA',          department: 'R&D',     status: 'פעיל' },
  { name: 'Eve Katz',     role: 'DevOps',      department: 'Infra',   status: 'פעיל' },
]

// ─── Stories ──────────────────────────────────────────────────────────────────

export const Basic: Story = {
  render: () => (
    <IpsTableLight columns={COLUMNS} rows={ROWS} />
  ),
}

export const Striped: Story = {
  render: () => (
    <IpsTableLight columns={COLUMNS} rows={ROWS} striped />
  ),
}

export const Dense: Story = {
  render: () => (
    <IpsTableLight columns={COLUMNS} rows={ROWS} dense />
  ),
}

export const EmptyState: Story = {
  render: () => (
    <IpsTableLight columns={COLUMNS} rows={[]} emptyText="אין נתונים להצגה" />
  ),
}

export const StickyHeaderWithScroll: Story = {
  render: () => (
    <div style={{ maxHeight: 180, overflow: 'auto' }}>
      <IpsTableLight
        columns={COLUMNS}
        rows={[...ROWS, ...ROWS, ...ROWS]}
        stickyHeader
      />
    </div>
  ),
}

export const CustomCellContent: Story = {
  render: () => {
    const CUSTOM_COLUMNS: IpsTableLightColumn[] = [
      { key: 'name',   label: 'שם',     width: 160 },
      { key: 'role',   label: 'תפקיד', width: 160 },
      { key: 'status', label: 'סטטוס', width: 140 },
    ]
    const CUSTOM_ROWS = [
      {
        name: 'Alice Cohen',
        role: 'Developer',
        status: <Chip label="פעיל" color="success" size="small" />,
      },
      {
        name: 'Bob Levi',
        role: 'Designer',
        status: <Chip label="חופשה" color="warning" size="small" />,
      },
      {
        name: 'Carol Shapir',
        role: 'PM',
        status: <Chip label="לא פעיל" color="error" size="small" />,
      },
    ]
    return <IpsTableLight columns={CUSTOM_COLUMNS} rows={CUSTOM_ROWS} />
  },
}
