import React from 'react'
import { render, screen, within, fireEvent } from '@testing-library/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { IpsTable } from './IpsTable'
import type { IpsTableColumn } from './IpsTable.types'

const theme = createTheme()

const COLUMNS: IpsTableColumn[] = [
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

describe('IpsTable', () => {
  // ── Rendering ──────────────────────────────────────────────────────────────

  it('renders without crashing', () => {
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} />)
    expect(document.querySelector('.ips-table')).toBeInTheDocument()
  })

  it('renders a <table> element', () => {
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} />)
    expect(document.querySelector('table')).toBeInTheDocument()
  })

  // ── className ──────────────────────────────────────────────────────────────

  it('applies ips-table class to the container', () => {
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} />)
    expect(document.querySelector('.ips-table')).toBeInTheDocument()
  })

  it('appends extra className to the container', () => {
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} className="custom-cls" />)
    expect(document.querySelector('.ips-table.custom-cls')).toBeInTheDocument()
  })

  // ── displayName + forwardRef ───────────────────────────────────────────────

  it('has displayName IpsTable', () => {
    expect(IpsTable.displayName).toBe('IpsTable')
  })

  it('forwards ref to the container element', () => {
    const ref = React.createRef<HTMLDivElement>()
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLElement)
    expect(ref.current).toHaveClass('ips-table')
  })

  // ── Columns ────────────────────────────────────────────────────────────────

  it('renders all column headers', () => {
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} />)
    expect(screen.getByText('שם')).toBeInTheDocument()
    expect(screen.getByText('תפקיד')).toBeInTheDocument()
  })

  it('renders correct number of header cells', () => {
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} />)
    const header = document.querySelector('thead')!
    expect(within(header).getAllByRole('columnheader')).toHaveLength(COLUMNS.length)
  })

  // ── Rows ───────────────────────────────────────────────────────────────────

  it('renders all row data', () => {
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} />)
    expect(screen.getByText('Alice')).toBeInTheDocument()
    expect(screen.getByText('Bob')).toBeInTheDocument()
    expect(screen.getByText('Carol')).toBeInTheDocument()
    expect(screen.getByText('Developer')).toBeInTheDocument()
    expect(screen.getByText('Designer')).toBeInTheDocument()
    expect(screen.getByText('PM')).toBeInTheDocument()
  })

  it('renders correct number of body rows', () => {
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} />)
    const body = document.querySelector('tbody')!
    expect(within(body).getAllByRole('row')).toHaveLength(ROWS.length)
  })

  // ── Empty state ────────────────────────────────────────────────────────────

  it('renders default emptyText when rows is empty', () => {
    wrap(<IpsTable columns={COLUMNS} rows={[]} />)
    expect(screen.getByText('No data')).toBeInTheDocument()
  })

  it('renders custom emptyText when rows is empty', () => {
    wrap(<IpsTable columns={COLUMNS} rows={[]} emptyText="אין נתונים" />)
    expect(screen.getByText('אין נתונים')).toBeInTheDocument()
  })

  it('does not render emptyText when rows are present', () => {
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} />)
    expect(screen.queryByText('No data')).not.toBeInTheDocument()
  })

  // ── dense ──────────────────────────────────────────────────────────────────

  it('does not crash when dense=true', () => {
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} dense />)
    expect(document.querySelector('table')).toBeInTheDocument()
  })

  // ── stickyHeader ───────────────────────────────────────────────────────────

  it('does not crash when stickyHeader=true', () => {
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} stickyHeader />)
    expect(document.querySelector('table')).toBeInTheDocument()
  })

  // ── striped ────────────────────────────────────────────────────────────────

  it('does not crash with striped=false', () => {
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} striped={false} />)
    expect(document.querySelector('table')).toBeInTheDocument()
  })

  // ── custom cell content ────────────────────────────────────────────────────

  it('renders ReactNode cell content', () => {
    const customRows = [{ name: <strong data-testid="custom-node">Custom</strong>, role: 'Dev' }]
    wrap(<IpsTable columns={COLUMNS} rows={customRows} />)
    expect(screen.getByTestId('custom-node')).toBeInTheDocument()
  })

  // ── sx ─────────────────────────────────────────────────────────────────────

  it('accepts sx prop without crashing', () => {
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} sx={{ mt: 2 }} />)
    expect(document.querySelector('.ips-table')).toBeInTheDocument()
  })

  // ── Row events ─────────────────────────────────────────────────────────────

  it('calls onRowClick with (event, row, rowIndex)', () => {
    const handler = jest.fn()
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} onRowClick={handler} />)
    const bodyRows = within(document.querySelector('tbody')!).getAllByRole('row')
    fireEvent.click(bodyRows[1])
    expect(handler).toHaveBeenCalledTimes(1)
    expect(handler).toHaveBeenCalledWith(expect.anything(), ROWS[1], 1)
  })

  it('calls onRowDoubleClick with (event, row, rowIndex)', () => {
    const handler = jest.fn()
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} onRowDoubleClick={handler} />)
    const bodyRows = within(document.querySelector('tbody')!).getAllByRole('row')
    fireEvent.doubleClick(bodyRows[0])
    expect(handler).toHaveBeenCalledTimes(1)
    expect(handler).toHaveBeenCalledWith(expect.anything(), ROWS[0], 0)
  })

  // ── type='link' ────────────────────────────────────────────────────────────

  it('renders an <a> element for type="link"', () => {
    const cols: IpsTableColumn[] = [
      { key: 'url', label: 'URL', type: 'link' },
    ]
    wrap(<IpsTable columns={cols} rows={[{ url: '/page' }]} />)
    const link = document.querySelector('a')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/page')
  })

  it('uses col.href() to build the link href', () => {
    type Row = { id: string }
    const cols: IpsTableColumn<Row>[] = [
      { key: 'id', label: 'ID', type: 'link', href: (row) => `/users/${row.id}` },
    ]
    wrap(<IpsTable columns={cols} rows={[{ id: '42' }]} />)
    expect(document.querySelector('a')).toHaveAttribute('href', '/users/42')
  })

  it('link click does NOT trigger onRowClick (stopPropagation)', () => {
    const handler = jest.fn()
    const cols: IpsTableColumn[] = [
      { key: 'name', label: 'Name', type: 'link' },
    ]
    wrap(
      <IpsTable
        columns={cols}
        rows={[{ name: 'Alice' }]}
        onRowClick={handler}
      />
    )
    fireEvent.click(document.querySelector('a')!)
    expect(handler).not.toHaveBeenCalled()
  })

  it('adds rel="noopener noreferrer" for linkTarget="_blank"', () => {
    const cols: IpsTableColumn[] = [
      { key: 'url', label: 'URL', type: 'link', linkTarget: '_blank' },
    ]
    wrap(<IpsTable columns={cols} rows={[{ url: 'https://example.com' }]} />)
    const link = document.querySelector('a')!
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  // ── type='image' ───────────────────────────────────────────────────────────

  it('renders an <img> element for type="image"', () => {
    const cols: IpsTableColumn[] = [
      { key: 'photo', label: 'Photo', type: 'image', imageProps: { alt: 'Avatar' } },
    ]
    wrap(<IpsTable columns={cols} rows={[{ photo: 'img.png' }]} />)
    const img = document.querySelector('img')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', 'img.png')
    expect(img).toHaveAttribute('alt', 'Avatar')
  })

  it('uses col.imageSrc() to build the image src', () => {
    type Row = { id: string }
    const cols: IpsTableColumn<Row>[] = [
      { key: 'id', label: 'Img', type: 'image', imageSrc: (row) => `/avatars/${row.id}.png` },
    ]
    wrap(<IpsTable columns={cols} rows={[{ id: '7' }]} />)
    expect(document.querySelector('img')).toHaveAttribute('src', '/avatars/7.png')
  })

  it('image click does NOT trigger onRowClick (stopPropagation)', () => {
    const handler = jest.fn()
    const cols: IpsTableColumn[] = [
      { key: 'photo', label: 'Photo', type: 'image' },
    ]
    wrap(
      <IpsTable
        columns={cols}
        rows={[{ photo: 'img.png' }]}
        onRowClick={handler}
      />
    )
    fireEvent.click(document.querySelector('img')!)
    expect(handler).not.toHaveBeenCalled()
  })

  // ── custom render ──────────────────────────────────────────────────────────

  it('uses col.render to produce cell content', () => {
    const cols: IpsTableColumn[] = [
      {
        key: 'status',
        label: 'Status',
        render: (value) => <span data-testid="custom-render">{String(value)}</span>,
      },
    ]
    wrap(<IpsTable columns={cols} rows={[{ status: 'active' }]} />)
    expect(screen.getByTestId('custom-render')).toHaveTextContent('active')
  })

  // ── wrap ───────────────────────────────────────────────────────────────────

  it('does not crash with wrap="ellipsis"', () => {
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} wrap="ellipsis" />)
    expect(document.querySelector('.ips-table')).toBeInTheDocument()
  })

  it('does not crash with wrap="wrap"', () => {
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} wrap="wrap" />)
    expect(document.querySelector('.ips-table')).toBeInTheDocument()
  })

  it('does not crash with wrap="nowrap"', () => {
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} wrap="nowrap" />)
    expect(document.querySelector('.ips-table')).toBeInTheDocument()
  })

  // ── maxHeight ──────────────────────────────────────────────────────────────

  it('renders without crashing when maxHeight is set', () => {
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} maxHeight={300} />)
    expect(document.querySelector('.ips-table')).toBeInTheDocument()
  })

  it('renders without crashing when maxHeight and stickyHeader are combined', () => {
    wrap(<IpsTable columns={COLUMNS} rows={ROWS} maxHeight={300} stickyHeader />)
    expect(document.querySelector('table')).toBeInTheDocument()
  })

  // ── getRowId ───────────────────────────────────────────────────────────────

  it('does not crash when getRowId is provided', () => {
    wrap(
      <IpsTable
        columns={COLUMNS}
        rows={ROWS}
        getRowId={(_row, i) => `row-${i}`}
      />
    )
    expect(document.querySelector('tbody')).toBeInTheDocument()
  })
})
