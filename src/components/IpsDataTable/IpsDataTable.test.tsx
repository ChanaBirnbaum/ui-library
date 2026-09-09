import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { IpsDataTable } from './IpsDataTable'
import type { ColumnDef } from './IpsDataTable.types'

interface Row {
  id: number
  name: string
  value: number
}

const COLUMNS: ColumnDef<Row>[] = [
  { accessorKey: 'id', header: 'ID' },
  { accessorKey: 'name', header: 'Name' },
  { accessorKey: 'value', header: 'Value' },
]

const DATA: Row[] = [
  { id: 1, name: 'Alpha', value: 10 },
  { id: 2, name: 'Beta', value: 20 },
  { id: 3, name: 'Gamma', value: 30 },
]

describe('IpsDataTable', () => {
  it('renders column headers', () => {
    render(<IpsDataTable data={DATA} columns={COLUMNS} />)
    expect(screen.getByText('ID')).toBeInTheDocument()
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Value')).toBeInTheDocument()
  })

  it('renders all rows', () => {
    render(<IpsDataTable data={DATA} columns={COLUMNS} />)
    expect(screen.getByText('Alpha')).toBeInTheDocument()
    expect(screen.getByText('Beta')).toBeInTheDocument()
    expect(screen.getByText('Gamma')).toBeInTheDocument()
  })

  it('shows empty state when data is empty', () => {
    render(<IpsDataTable data={[]} columns={COLUMNS} />)
    expect(screen.getByText('אין נתונים להצגה')).toBeInTheDocument()
  })

  it('renders custom empty state', () => {
    render(<IpsDataTable data={[]} columns={COLUMNS} emptyState={<span>No data here</span>} />)
    expect(screen.getByText('No data here')).toBeInTheDocument()
  })

  it('shows expand buttons when expandedContent is provided', () => {
    render(
      <IpsDataTable
        data={DATA}
        columns={COLUMNS}
        expandedContent={(row) => <div>Expanded: {row.name}</div>}
      />
    )
    const expandButtons = screen.getAllByRole('button', { name: /expand row/i })
    expect(expandButtons).toHaveLength(DATA.length)
  })

  it('expands row on chevron click', () => {
    render(
      <IpsDataTable
        data={DATA}
        columns={COLUMNS}
        expandedContent={(row) => <div>Details for {row.name}</div>}
      />
    )
    const [firstExpand] = screen.getAllByRole('button', { name: /expand row/i })
    fireEvent.click(firstExpand)
    expect(screen.getByText('Details for Alpha')).toBeInTheDocument()
  })

  it('shows delete button when onDelete is provided', () => {
    render(<IpsDataTable data={DATA} columns={COLUMNS} onDelete={jest.fn()} />)
    const deleteButtons = screen.getAllByRole('button', { name: /מחיקה/i })
    expect(deleteButtons).toHaveLength(DATA.length)
  })

  it('opens delete confirmation dialog on delete click', () => {
    render(<IpsDataTable data={DATA} columns={COLUMNS} onDelete={jest.fn()} />)
    const [firstDelete] = screen.getAllByRole('button', { name: /מחיקה/i })
    fireEvent.click(firstDelete)
    expect(screen.getByText('אישור מחיקה')).toBeInTheDocument()
  })

  it('calls onDelete after confirming delete dialog', async () => {
    const handleDelete = jest.fn()
    render(<IpsDataTable data={DATA} columns={COLUMNS} onDelete={handleDelete} />)
    const [firstDelete] = screen.getAllByRole('button', { name: /מחיקה/i })
    fireEvent.click(firstDelete)
    const confirmBtn = screen.getByRole('button', { name: /מחק/i })
    fireEvent.click(confirmBtn)
    await waitFor(() => expect(handleDelete).toHaveBeenCalledWith(DATA[0]))
  })

  it('cancels delete dialog without calling onDelete', () => {
    const handleDelete = jest.fn()
    render(<IpsDataTable data={DATA} columns={COLUMNS} onDelete={handleDelete} />)
    const [firstDelete] = screen.getAllByRole('button', { name: /מחיקה/i })
    fireEvent.click(firstDelete)
    fireEvent.click(screen.getByRole('button', { name: /ביטול/i }))
    expect(handleDelete).not.toHaveBeenCalled()
  })

  it('shows global filter input when filtering=true', () => {
    render(<IpsDataTable data={DATA} columns={COLUMNS} filtering />)
    expect(screen.getByPlaceholderText('חיפוש...')).toBeInTheDocument()
  })

  it('shows pagination when pagination is configured', () => {
    render(
      <IpsDataTable
        data={DATA}
        columns={COLUMNS}
        pagination={{ pageSize: 2, showTotal: true }}
      />
    )
    expect(screen.getByText(/מתוך/)).toBeInTheDocument()
  })

  it('shows loading skeleton when isLoading=true', () => {
    const { container } = render(
      <IpsDataTable data={[]} columns={COLUMNS} isLoading />
    )
    // MUI Skeleton renders a span with specific class
    const skeletons = container.querySelectorAll('.MuiSkeleton-root')
    expect(skeletons.length).toBeGreaterThan(0)
  })

  it('keeps the pagination bar mounted while loading so the layout does not jump', () => {
    const { rerender, container } = render(
      <IpsDataTable data={[]} columns={COLUMNS} pagination={{ pageSize: 2 }} isLoading />
    )
    expect(container.querySelector('.MuiTablePagination-root')).toBeInTheDocument()
    rerender(<IpsDataTable data={DATA} columns={COLUMNS} pagination={{ pageSize: 2 }} />)
    expect(container.querySelector('.MuiTablePagination-root')).toBeInTheDocument()
  })

  it('renders the pagination bar outside the scrollable area', () => {
    const { container } = render(
      <IpsDataTable data={DATA} columns={COLUMNS} pagination={{ pageSize: 2 }} maxHeight={200} />
    )
    const scrollArea = container.querySelector('.MuiTableContainer-root')
    expect(scrollArea).toBeInTheDocument()
    expect(scrollArea?.querySelector('.MuiTablePagination-root')).toBeNull()
    expect(container.querySelector('.MuiTablePagination-root')).toBeInTheDocument()
  })

  it('never renders more skeleton rows than the page size', () => {
    const { container } = render(
      <IpsDataTable data={[]} columns={COLUMNS} pagination={{ pageSize: 3 }} isLoading />
    )
    const skeletonRows = container.querySelectorAll('tbody tr')
    expect(skeletonRows.length).toBeLessThanOrEqual(3)
    expect(skeletonRows.length).toBeGreaterThan(0)
  })

  it('never uses a fixed table layout — columns keep their content width', () => {
    const { container } = render(
      <IpsDataTable data={DATA} columns={COLUMNS} cellOverflow="ellipsis" />
    )
    expect(container.querySelector('table')).not.toHaveStyle({ tableLayout: 'fixed' })
  })

  it('leaves unmeasured, unconstrained columns at their natural width', () => {
    // jsdom reports no layout, so auto-fit stays inert: nothing is capped and
    // no column may collapse.
    render(<IpsDataTable data={DATA} columns={COLUMNS} cellOverflow="ellipsis" />)
    const cell = screen.getByText('Alpha').closest('td')
    expect(cell).not.toHaveStyle({ maxWidth: '0px' })
    expect(cell).toHaveStyle({ whiteSpace: 'nowrap' })
  })

  it('clips a column at the width it declared, and only that column', () => {
    const columns: ColumnDef<Row>[] = [
      { accessorKey: 'id', header: 'ID' },
      { accessorKey: 'name', header: 'Name', meta: { width: 120 } },
    ]
    render(<IpsDataTable data={DATA} columns={columns} cellOverflow="ellipsis" />)
    expect(screen.getByText('Alpha').closest('td')).toHaveStyle({
      maxWidth: '120px',
      overflow: 'hidden',
    })
    expect(screen.getByText('1').closest('td')).not.toHaveStyle({ maxWidth: '120px' })
  })

  it('never collapses a clipped column to zero width', () => {
    const columns: ColumnDef<Row>[] = [
      { accessorKey: 'id', header: 'ID' },
      { accessorKey: 'name', header: 'Name', meta: { width: 120 } },
    ]
    const { container } = render(
      <IpsDataTable data={DATA} columns={columns} cellOverflow="ellipsis" />
    )
    container.querySelectorAll('td, th').forEach((cell) => {
      expect(cell).not.toHaveStyle({ maxWidth: '0px' })
    })
  })

  it('shows a tooltip with the full value when a cell is clipped', async () => {
    const longName = 'שם ארוך מאוד שאין לו סיכוי להיכנס לרוחב העמודה שהוקצתה לו'
    const columns: ColumnDef<Row>[] = [
      { accessorKey: 'id', header: 'ID' },
      { accessorKey: 'name', header: 'Name', meta: { width: 120 } },
    ]
    const { container } = render(
      <IpsDataTable
        data={[{ id: 1, name: longName, value: 1 }]}
        columns={columns}
        cellOverflow="ellipsis"
      />
    )
    const clip = screen.getByText(longName)
    // jsdom reports 0 for both, so force a truncated measurement.
    Object.defineProperty(clip, 'scrollWidth', { value: 500, configurable: true })
    Object.defineProperty(clip, 'clientWidth', { value: 100, configurable: true })

    fireEvent.mouseEnter(clip)
    await waitFor(() =>
      expect(container.ownerDocument.querySelector('.MuiTooltip-tooltip')).toBeInTheDocument()
    )
    expect(container.ownerDocument.querySelector('.MuiTooltip-tooltip')).toHaveTextContent(
      longName
    )
  })

  it('does not show a tooltip when the cell is not clipped', () => {
    const { container } = render(
      <IpsDataTable data={DATA} columns={COLUMNS} cellOverflow="ellipsis" />
    )
    fireEvent.mouseEnter(screen.getByText('Alpha'))
    expect(container.ownerDocument.querySelector('.MuiTooltip-tooltip')).toBeNull()
  })

  it('lets a column opt out of the table-level overflow mode', () => {
    const columns: ColumnDef<Row>[] = [
      { accessorKey: 'id', header: 'ID' },
      { accessorKey: 'name', header: 'Name', meta: { overflow: 'wrap' } },
    ]
    render(<IpsDataTable data={DATA} columns={columns} cellOverflow="ellipsis" />)
    // The wrap column renders its value directly, without the clipping wrapper.
    const cell = screen.getByText('Alpha').closest('td')
    expect(cell).toHaveStyle({ whiteSpace: 'normal' })
  })

  it('shows edit button when onEdit is provided', () => {
    render(<IpsDataTable data={DATA} columns={COLUMNS} onEdit={jest.fn()} />)
    const editButtons = screen.getAllByRole('button', { name: /עריכה/i })
    expect(editButtons).toHaveLength(DATA.length)
  })

  it('calls onEdit when edit button is clicked (external edit mode)', () => {
    const handleEdit = jest.fn()
    render(<IpsDataTable data={DATA} columns={COLUMNS} onEdit={handleEdit} />)
    const [firstEdit] = screen.getAllByRole('button', { name: /עריכה/i })
    fireEvent.click(firstEdit)
    expect(handleEdit).toHaveBeenCalledWith(DATA[0])
  })
})
