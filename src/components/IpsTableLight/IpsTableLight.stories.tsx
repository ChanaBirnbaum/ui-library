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
    <IpsTableLight
      columns={COLUMNS}
      rows={[...ROWS, ...ROWS, ...ROWS]}
      stickyHeader
      maxHeight={200}
    />
  ),
}

export const RowEvents: Story = {
  render: () => (
    <IpsTableLight
      columns={COLUMNS}
      rows={ROWS}
      onRowClick={(_e, row, index) => console.log('click', index, row)}
      onRowDoubleClick={(_e, row, index) => console.log('dblclick', index, row)}
    />
  ),
}

export const LinkColumn: Story = {
  render: () => {
    type LinkRow = { name: string; url: string; site: string }
    const cols: IpsTableLightColumn<LinkRow>[] = [
      { key: 'name', label: 'שם', width: 160 },
      {
        key: 'url',
        label: 'קישור פנימי',
        width: 220,
        type: 'link',
        linkTarget: '_self',
      },
      {
        key: 'site',
        label: 'קישור חיצוני',
        width: 220,
        type: 'link',
        href: (row) => `https://example.com/${row.site}`,
        linkTarget: '_blank',
      },
    ]
    const rows: LinkRow[] = [
      { name: 'Alice', url: '/profile/alice', site: 'alice' },
      { name: 'Bob',   url: '/profile/bob',   site: 'bob'   },
    ]
    return <IpsTableLight columns={cols} rows={rows} />
  },
}

export const ImageColumn: Story = {
  render: () => {
    type ImgRow = { name: string; avatar: string }
    const cols: IpsTableLightColumn<ImgRow>[] = [
      {
        key: 'avatar',
        label: 'תמונה',
        width: 80,
        type: 'image',
        imageSrc: (row) => row.avatar,
        imageProps: { width: 40, height: 40, alt: 'avatar', rounded: true },
      },
      { key: 'name', label: 'שם', width: 160 },
    ]
    const rows: ImgRow[] = [
      { name: 'Alice', avatar: 'https://i.pravatar.cc/40?u=alice' },
      { name: 'Bob',   avatar: 'https://i.pravatar.cc/40?u=bob'   },
    ]
    return <IpsTableLight columns={cols} rows={rows} />
  },
}

export const CustomRenderColumn: Story = {
  render: () => {
    type StatusRow = { name: string; role: string; status: string }
    const cols: IpsTableLightColumn<StatusRow>[] = [
      { key: 'name',   label: 'שם',     width: 160 },
      { key: 'role',   label: 'תפקיד', width: 160 },
      {
        key: 'status',
        label: 'סטטוס',
        width: 140,
        render: (value) => {
          const label = value as string
          const color =
            label === 'פעיל'   ? 'success' :
            label === 'חופשה'  ? 'warning' :
            'error'
          return <Chip label={label} color={color} size="small" />
        },
      },
    ]
    const rows: StatusRow[] = [
      { name: 'Alice Cohen',  role: 'Developer', status: 'פעיל'  },
      { name: 'Bob Levi',     role: 'Designer',  status: 'חופשה' },
      { name: 'Carol Shapir', role: 'PM',        status: 'לא פעיל' },
    ]
    return <IpsTableLight columns={cols} rows={rows} />
  },
}

export const WrapModes: Story = {
  render: () => {
    const longText =
      'This is a very long text string that will behave differently depending on the wrap mode selected for the column'
    type WrapRow = { label: string; text: string }
    const makeColumns = (wrap: 'ellipsis' | 'wrap' | 'nowrap'): IpsTableLightColumn<WrapRow>[] => [
      { key: 'label', label: 'Mode', width: 90 },
      { key: 'text',  label: `wrap="${wrap}"`, width: 220, wrap },
    ]
    const rows: WrapRow[] = [{ label: wrap, text: longText }]

    const containerSx = { mb: 3 }
    return (
      <>
        <IpsTableLight columns={makeColumns('ellipsis')} rows={[{ label: 'ellipsis', text: longText }]} sx={containerSx} />
        <IpsTableLight columns={makeColumns('wrap')}     rows={[{ label: 'wrap',     text: longText }]} sx={containerSx} />
        <IpsTableLight columns={makeColumns('nowrap')}   rows={[{ label: 'nowrap',   text: longText }]} />
      </>
    )
  },
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
