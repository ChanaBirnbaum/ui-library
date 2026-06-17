import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { IpsDataTable } from './IpsDataTable'
import { ExpandedRow } from './components/ExpandedRow'
import type { ColumnDef, ActionDef, SubColumnDef } from './IpsDataTable.types'
import EditNoteIcon from '@mui/icons-material/EditNote'

// ---------------------------------------------------------------------------
// Sample data
// ---------------------------------------------------------------------------
interface Fruit {
  id: number
  name: string
  color: string
  price: number
  stock: number
  details?: Detail[]
}

interface Detail {
  store: string
  quantity: number
  updated: string
}

const FRUITS: Fruit[] = [
  { id: 1, name: 'תפוח', color: 'אדום', price: 4.5, stock: 120, details: [{ store: 'ירושלים', quantity: 60, updated: '2024-01-01' }, { store: 'תל אביב', quantity: 60, updated: '2024-01-02' }] },
  { id: 2, name: 'בננה', color: 'צהוב', price: 3.0, stock: 85, details: [{ store: 'חיפה', quantity: 85, updated: '2024-01-03' }] },
  { id: 3, name: 'ענבים', color: 'סגול', price: 12.0, stock: 40, details: [] },
  { id: 4, name: 'מנגו', color: 'כתום', price: 18.0, stock: 25 },
  { id: 5, name: 'קלמנטינה', color: 'כתום', price: 6.5, stock: 200 },
  { id: 6, name: 'אבוקדו', color: 'ירוק', price: 9.0, stock: 55 },
  { id: 7, name: 'אשכולית', color: 'צהוב-כתום', price: 5.0, stock: 70 },
  { id: 8, name: 'רימון', color: 'אדום', price: 14.0, stock: 30 },
]

const DETAIL_COLUMNS: SubColumnDef[] = [
  { id: 'store', header: 'חנות', accessorKey: 'store' },
  { id: 'quantity', header: 'כמות', accessorKey: 'quantity', align: 'right' },
  { id: 'updated', header: 'עדכון אחרון', accessorKey: 'updated' },
]

const COLUMNS: ColumnDef<Fruit>[] = [
  { accessorKey: 'id', header: 'מזהה', size: 60 },
  {
    accessorKey: 'name',
    header: 'שם פרי',
    meta: { editable: { type: 'text', mode: 'click' }, width: 160 },
  },
  {
    accessorKey: 'color',
    header: 'צבע',
    meta: { editable: { type: 'text' } },
  },
  {
    accessorKey: 'price',
    header: 'מחיר (₪)',
    meta: { align: 'end', editable: { type: 'number' } },
    cell: ({ getValue }) => `₪${(getValue() as number).toFixed(2)}`,
  },
  {
    accessorKey: 'stock',
    header: 'מלאי',
    meta: { align: 'end' },
  },
]

// ---------------------------------------------------------------------------
// Meta
// ---------------------------------------------------------------------------
const meta: Meta<typeof IpsDataTable> = {
  title: 'Components/IpsDataTable',
  component: IpsDataTable,
  parameters: { layout: 'padded', docs: { description: { component: 'טבלת נתונים עשירה המבוססת על TanStack Table v8' } } },
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------
export const Default: Story = {
  render: () => (
    <IpsDataTable<Fruit>
      data={FRUITS}
      columns={COLUMNS}
    />
  ),
}

export const WithSortingAndFiltering: Story = {
  name: 'מיון וסינון',
  render: () => (
    <IpsDataTable<Fruit>
      data={FRUITS}
      columns={COLUMNS}
      sorting
      filtering
    />
  ),
}

export const WithPagination: Story = {
  name: 'עם עימוד',
  render: () => (
    <IpsDataTable<Fruit>
      data={FRUITS}
      columns={COLUMNS}
      pagination={{ pageSize: 3, pageSizeOptions: [3, 5, 10], showTotal: true }}
      sorting
      filtering
    />
  ),
}

export const WithExpand: Story = {
  name: 'שורות מורחבות',
  render: () => (
    <IpsDataTable<Fruit>
      data={FRUITS}
      columns={COLUMNS}
      expandedContent={(row) => (
        <ExpandedRow
          title={`פרטי אחסון — ${row.name}`}
          subData={row.details}
          subColumns={DETAIL_COLUMNS}
        />
      )}
    />
  ),
}

export const WithActions: Story = {
  name: 'עם פעולות',
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [rows, setRows] = useState(FRUITS)
    const customActions: ActionDef<Fruit>[] = [
      {
        key: 'note',
        label: 'הוסף הערה',
        icon: <EditNoteIcon fontSize="small" />,
        onClick: (row) => alert(`הערה לפרי: ${row.name}`),
      },
    ]
    return (
      <IpsDataTable<Fruit>
        data={rows}
        columns={COLUMNS}
        onEdit={(row) => alert(`עורך: ${row.name}`)}
        onDelete={(row) => setRows((prev) => prev.filter((r) => r.id !== row.id))}
        customActions={customActions}
      />
    )
  },
}

export const WithInlineEdit: Story = {
  name: 'עריכה מוטבעת',
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [rows, setRows] = useState(FRUITS)
    return (
      <IpsDataTable<Fruit>
        data={rows}
        columns={COLUMNS}
        sorting
        onSave={(_, updated) => {
          setRows((prev) => prev.map((r) => (r.id === updated.id ? updated : r)))
        }}
        onDelete={(row) => setRows((prev) => prev.filter((r) => r.id !== row.id))}
      />
    )
  },
}

export const Bordered: Story = {
  name: 'גרסת Bordered',
  render: () => <IpsDataTable<Fruit> data={FRUITS} columns={COLUMNS} variant="bordered" />,
}

export const Striped: Story = {
  name: 'גרסת Striped',
  render: () => <IpsDataTable<Fruit> data={FRUITS} columns={COLUMNS} variant="striped" />,
}

export const Loading: Story = {
  name: 'מצב טעינה',
  render: () => (
    <IpsDataTable<Fruit>
      data={[]}
      columns={COLUMNS}
      isLoading
    />
  ),
}

export const SizeSmall: Story = {
  name: 'גודל קטן',
  render: () => <IpsDataTable<Fruit> data={FRUITS} columns={COLUMNS} size="sm" />,
}

export const SizeLarge: Story = {
  name: 'גודל גדול',
  render: () => <IpsDataTable<Fruit> data={FRUITS} columns={COLUMNS} size="lg" />,
}

export const EmptyState: Story = {
  name: 'ריק',
  render: () => <IpsDataTable<Fruit> data={[]} columns={COLUMNS} />,
}

export const WithRowClick: Story = {
  name: 'לחיצה על שורה',
  render: () => (
    <IpsDataTable<Fruit>
      data={FRUITS}
      columns={COLUMNS}
      onRowClick={(row) => alert(`נבחר: ${row.name}`)}
    />
  ),
}

export const WithCheckboxSelection: Story = {
  name: 'בחירת שורות',
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [selected, setSelected] = useState<Fruit[]>([])
    return (
      <div>
        <IpsDataTable<Fruit>
          data={FRUITS}
          columns={COLUMNS}
          checkboxSelection
          getRowId={(row) => String(row.id)}
          onSelectionChange={setSelected}
          sorting
        />
        <p style={{ marginTop: 8, fontSize: 13, color: '#4A5568' }}>
          נבחרו: {selected.map((r) => r.name).join(', ') || '—'}
        </p>
      </div>
    )
  },
}

// Generate many rows to demonstrate virtual scroll
const MANY_FRUITS: Fruit[] = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  name: `פרי ${i + 1}`,
  color: ['אדום', 'צהוב', 'ירוק', 'כתום', 'סגול'][i % 5],
  price: Math.round((Math.random() * 20 + 1) * 10) / 10,
  stock: Math.floor(Math.random() * 300),
}))

export const WithVirtualScroll: Story = {
  name: 'Virtual Scroll (1000 שורות)',
  render: () => (
    <IpsDataTable<Fruit>
      data={MANY_FRUITS}
      columns={COLUMNS}
      virtualScroll
      maxHeight={500}
      sorting
    />
  ),
}

export const FullFeatured: Story = {
  name: 'כל הפיצ\'רים',
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [rows, setRows] = useState(FRUITS)
    return (
      <IpsDataTable<Fruit>
        data={rows}
        columns={COLUMNS}
        sorting
        filtering
        pagination={{ pageSize: 5, pageSizeOptions: [5, 10], showTotal: true }}
        onSave={(_, updated) =>
          setRows((prev) => prev.map((r) => (r.id === updated.id ? updated : r)))
        }
        onDelete={(row) => setRows((prev) => prev.filter((r) => r.id !== row.id))}
        expandedContent={(row) => (
          <ExpandedRow
            title={`פרטי אחסון — ${row.name}`}
            subData={row.details}
            subColumns={DETAIL_COLUMNS}
          />
        )}
        variant="striped"
      />
    )
  },
}
