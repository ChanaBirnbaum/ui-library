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
