import React from 'react'
import { render, screen, within } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import type { GridColDef } from '@mui/x-data-grid'
import { IpsTable } from './IpsTable'

const theme = createTheme({
  palette: {
    primary: { main: '#1565C0', light: '#42A5F5', dark: '#0D47A1' },
  },
})

const COLUMNS: GridColDef[] = [
  { field: 'id',   headerName: 'ID',    width: 70 },
  { field: 'name', headerName: 'שם',   flex: 1   },
  { field: 'role', headerName: 'תפקיד', flex: 1  },
]

const ROWS = [
  { id: 1, name: 'Alice', role: 'Developer' },
  { id: 2, name: 'Bob',   role: 'Designer'  },
  { id: 3, name: 'Carol', role: 'PM'        },
]

// DataGrid requires a height on its container
const wrap = (ui: React.ReactElement) =>
  render(
    <ThemeProvider theme={theme}>
      <div style={{ height: 400, width: 600 }}>{ui}</div>
    </ThemeProvider>
  )

describe('IpsTable', () => {
  // ── Rendering ──────────────────────────────────────────────────────────────

  it('renders without crashing', () => {
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} />)
    expect(document.querySelector('.ips-table')).toBeInTheDocument()
  })

  it('renders a DataGrid element', () => {
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} />)
    // DataGrid renders a grid role
    expect(screen.getByRole('grid')).toBeInTheDocument()
  })

  // ── className ──────────────────────────────────────────────────────────────

  it('applies ips-table class to the wrapper', () => {
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} />)
    expect(document.querySelector('.ips-table')).toBeInTheDocument()
  })

  it('appends extra className to the wrapper', () => {
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} className="custom-cls" />)
    expect(document.querySelector('.ips-table.custom-cls')).toBeInTheDocument()
  })

  // ── displayName + forwardRef ───────────────────────────────────────────────

  it('has displayName IpsTable', () => {
    expect(IpsTable.displayName).toBe('IpsTable')
  })

  it('forwards ref to the wrapper div', () => {
    const ref = React.createRef<HTMLDivElement>()
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLElement)
    expect(ref.current).toHaveClass('ips-table')
  })

  // ── Columns ────────────────────────────────────────────────────────────────

  it('renders all column headers', () => {
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} />)
    expect(screen.getByText('ID')).toBeInTheDocument()
    expect(screen.getByText('שם')).toBeInTheDocument()
    expect(screen.getByText('תפקיד')).toBeInTheDocument()
  })

  // ── Rows ───────────────────────────────────────────────────────────────────

  it('renders row data', () => {
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} />)
    expect(screen.getByText('Alice')).toBeInTheDocument()
    expect(screen.getByText('Bob')).toBeInTheDocument()
    expect(screen.getByText('Carol')).toBeInTheDocument()
  })

  // ── Empty state ────────────────────────────────────────────────────────────

  it('renders the no-rows overlay when rows is empty', () => {
    wrap(<IpsTable columns={COLUMNS} rows={[]} />)
    // DataGrid renders an "No rows" overlay by default
    expect(screen.getByText(/no rows/i)).toBeInTheDocument()
  })

  // ── Props ──────────────────────────────────────────────────────────────────

  it('renders with loading=true without crashing', () => {
    wrap(<IpsTable columns={COLUMNS} rows={[]} loading />)
    expect(document.querySelector('.ips-table')).toBeInTheDocument()
  })

  it('renders with checkboxSelection=true without crashing', () => {
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} checkboxSelection />)
    expect(screen.getByRole('grid')).toBeInTheDocument()
  })

  it('renders with disableColumnFilter=true without crashing', () => {
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} disableColumnFilter />)
    expect(screen.getByRole('grid')).toBeInTheDocument()
  })

  it('calls onRowClick when a row is clicked', async () => {
    const onRowClick = jest.fn()
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} onRowClick={onRowClick} />)
    const cell = screen.getByText('Alice')
    cell.click()
    expect(onRowClick).toHaveBeenCalled()
  })

  it('accepts custom pageSize without crashing', () => {
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} pageSize={10} />)
    expect(screen.getByRole('grid')).toBeInTheDocument()
  })

  // ── sx ─────────────────────────────────────────────────────────────────────

  it('accepts sx prop without crashing', () => {
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} sx={{ mt: 2 }} />)
    expect(document.querySelector('.ips-table')).toBeInTheDocument()
  })
})
