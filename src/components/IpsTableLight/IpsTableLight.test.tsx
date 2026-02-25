import React from 'react'
import { render, screen, within } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { IpsTableLight } from './IpsTableLight'
import type { IpsTableLightColumn } from './IpsTableLight.types'

const theme = createTheme()

const COLUMNS: IpsTableLightColumn[] = [
  { key: 'name',  label: 'שם',     width: 120 },
  { key: 'role',  label: 'תפקיד', width: 120 },
]

const ROWS = [
  { name: 'Alice', role: 'Developer' },
  { name: 'Bob',   role: 'Designer'  },
  { name: 'Carol', role: 'PM'        },
]

const wrap = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('IpsTableLight', () => {
  // ── Rendering ──────────────────────────────────────────────────────────────

  it('renders without crashing', () => {
    wrap(<IpsTableLight columns={COLUMNS} rows={ROWS} />)
    expect(document.querySelector('.ips-table-light')).toBeInTheDocument()
  })

  it('renders a <table> element', () => {
    wrap(<IpsTableLight columns={COLUMNS} rows={ROWS} />)
    expect(document.querySelector('table')).toBeInTheDocument()
  })

  // ── className ──────────────────────────────────────────────────────────────

  it('applies ips-table-light class to the container', () => {
    wrap(<IpsTableLight columns={COLUMNS} rows={ROWS} />)
    expect(document.querySelector('.ips-table-light')).toBeInTheDocument()
  })

  it('appends extra className to the container', () => {
    wrap(<IpsTableLight columns={COLUMNS} rows={ROWS} className="custom-cls" />)
    expect(document.querySelector('.ips-table-light.custom-cls')).toBeInTheDocument()
  })

  // ── displayName + forwardRef ───────────────────────────────────────────────

  it('has displayName IpsTableLight', () => {
    expect(IpsTableLight.displayName).toBe('IpsTableLight')
  })

  it('forwards ref to the container element', () => {
    const ref = React.createRef<HTMLDivElement>()
    wrap(<IpsTableLight columns={COLUMNS} rows={ROWS} ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLElement)
    expect(ref.current).toHaveClass('ips-table-light')
  })

  // ── Columns ────────────────────────────────────────────────────────────────

  it('renders all column headers', () => {
    wrap(<IpsTableLight columns={COLUMNS} rows={ROWS} />)
    expect(screen.getByText('שם')).toBeInTheDocument()
    expect(screen.getByText('תפקיד')).toBeInTheDocument()
  })

  it('renders correct number of header cells', () => {
    wrap(<IpsTableLight columns={COLUMNS} rows={ROWS} />)
    const header = document.querySelector('thead')!
    expect(within(header).getAllByRole('columnheader')).toHaveLength(COLUMNS.length)
  })

  // ── Rows ───────────────────────────────────────────────────────────────────

  it('renders all row data', () => {
    wrap(<IpsTableLight columns={COLUMNS} rows={ROWS} />)
    expect(screen.getByText('Alice')).toBeInTheDocument()
    expect(screen.getByText('Bob')).toBeInTheDocument()
    expect(screen.getByText('Carol')).toBeInTheDocument()
    expect(screen.getByText('Developer')).toBeInTheDocument()
    expect(screen.getByText('Designer')).toBeInTheDocument()
    expect(screen.getByText('PM')).toBeInTheDocument()
  })

  it('renders correct number of body rows', () => {
    wrap(<IpsTableLight columns={COLUMNS} rows={ROWS} />)
    const body = document.querySelector('tbody')!
    expect(within(body).getAllByRole('row')).toHaveLength(ROWS.length)
  })

  // ── Empty state ────────────────────────────────────────────────────────────

  it('renders default emptyText when rows is empty', () => {
    wrap(<IpsTableLight columns={COLUMNS} rows={[]} />)
    expect(screen.getByText('No data')).toBeInTheDocument()
  })

  it('renders custom emptyText when rows is empty', () => {
    wrap(<IpsTableLight columns={COLUMNS} rows={[]} emptyText="אין נתונים" />)
    expect(screen.getByText('אין נתונים')).toBeInTheDocument()
  })

  it('does not render emptyText when rows are present', () => {
    wrap(<IpsTableLight columns={COLUMNS} rows={ROWS} />)
    expect(screen.queryByText('No data')).not.toBeInTheDocument()
  })

  // ── dense ──────────────────────────────────────────────────────────────────

  it('does not crash when dense=true', () => {
    wrap(<IpsTableLight columns={COLUMNS} rows={ROWS} dense />)
    expect(document.querySelector('table')).toBeInTheDocument()
  })

  // ── stickyHeader ───────────────────────────────────────────────────────────

  it('does not crash when stickyHeader=true', () => {
    wrap(<IpsTableLight columns={COLUMNS} rows={ROWS} stickyHeader />)
    expect(document.querySelector('table')).toBeInTheDocument()
  })

  // ── striped ────────────────────────────────────────────────────────────────

  it('does not crash with striped=false', () => {
    wrap(<IpsTableLight columns={COLUMNS} rows={ROWS} striped={false} />)
    expect(document.querySelector('table')).toBeInTheDocument()
  })

  // ── custom cell content ────────────────────────────────────────────────────

  it('renders ReactNode cell content', () => {
    const customRows = [{ name: <strong data-testid="custom-node">Custom</strong>, role: 'Dev' }]
    wrap(<IpsTableLight columns={COLUMNS} rows={customRows} />)
    expect(screen.getByTestId('custom-node')).toBeInTheDocument()
  })

  // ── sx ─────────────────────────────────────────────────────────────────────

  it('accepts sx prop without crashing', () => {
    wrap(<IpsTableLight columns={COLUMNS} rows={ROWS} sx={{ mt: 2 }} />)
    expect(document.querySelector('.ips-table-light')).toBeInTheDocument()
  })
})
