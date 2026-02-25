import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import type { GridColDef } from '@mui/x-data-grid'
import { IpsTable } from './IpsTable'

const theme = createTheme({
  palette: {
    primary: { main: '#1565C0', light: '#42A5F5', dark: '#0D47A1' },
  },
})

const meta: Meta<typeof IpsTable> = {
  title: 'Components/IpsTable',
  component: IpsTable,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <div style={{ padding: 24, height: 420 }}>
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

const COLUMNS: GridColDef[] = [
  { field: 'id',         headerName: 'ID',      width: 70  },
  { field: 'name',       headerName: 'שם',      flex: 1    },
  { field: 'role',       headerName: 'תפקיד',   flex: 1    },
  { field: 'department', headerName: 'מחלקה',   flex: 1    },
  { field: 'status',     headerName: 'סטטוס',   width: 120 },
]

const ROWS = [
  { id: 1, name: 'Alice Cohen',  role: 'Developer', department: 'R&D',     status: 'פעיל'  },
  { id: 2, name: 'Bob Levi',     role: 'Designer',  department: 'Product', status: 'פעיל'  },
  { id: 3, name: 'Carol Shapir', role: 'PM',        department: 'Product', status: 'חופשה' },
  { id: 4, name: 'Dan Mizrahi',  role: 'QA',        department: 'R&D',     status: 'פעיל'  },
  { id: 5, name: 'Eve Katz',     role: 'DevOps',    department: 'Infra',   status: 'פעיל'  },
  { id: 6, name: 'Frank Ben',    role: 'Developer', department: 'R&D',     status: 'פעיל'  },
  { id: 7, name: 'Gal Natan',    role: 'Designer',  department: 'Product', status: 'חופשה' },
]

// ─── Stories ──────────────────────────────────────────────────────────────────

export const Basic: Story = {
  render: () => (
    <div style={{ height: 400 }}>
      <IpsTable columns={COLUMNS} rows={ROWS} />
    </div>
  ),
}

export const WithSorting: Story = {
  render: () => (
    <div style={{ height: 400 }}>
      <IpsTable
        columns={COLUMNS.map(c => ({ ...c, sortable: true }))}
        rows={ROWS}
      />
    </div>
  ),
}

export const WithPagination: Story = {
  render: () => (
    <div style={{ height: 400 }}>
      <IpsTable columns={COLUMNS} rows={ROWS} pageSize={3} />
    </div>
  ),
}

export const LoadingState: Story = {
  render: () => (
    <div style={{ height: 400 }}>
      <IpsTable columns={COLUMNS} rows={[]} loading />
    </div>
  ),
}

export const CheckboxSelection: Story = {
  render: () => {
    function Wrapper() {
      const [selected, setSelected] = useState<(string | number)[]>([])
      return (
        <div style={{ height: 400 }}>
          <IpsTable
            columns={COLUMNS}
            rows={ROWS}
            checkboxSelection
            onRowSelectionModelChange={(model) => setSelected(Array.from(model.ids) as (string | number)[])}
          />
          {selected.length > 0 && (
            <p style={{ marginTop: 8, fontSize: 13 }}>
              נבחרו: {selected.join(', ')}
            </p>
          )}
        </div>
      )
    }
    return <Wrapper />
  },
}

export const EmptyState: Story = {
  render: () => (
    <div style={{ height: 300 }}>
      <IpsTable columns={COLUMNS} rows={[]} />
    </div>
  ),
}
