import React from 'react'
import TableHead from '@mui/material/TableHead'
import MuiTableRow from '@mui/material/TableRow'
import MuiTableCell from '@mui/material/TableCell'
import TableSortLabel from '@mui/material/TableSortLabel'
import TextField from '@mui/material/TextField'
import { flexRender } from '@tanstack/react-table'
import type { Table, RowData } from '@tanstack/react-table'

export interface TableHeaderProps<T extends RowData> {
  table: Table<T>
  showPerColumnFilter: boolean
  cellSx?: object
}

export function TableHeader<T extends RowData>({
  table,
  showPerColumnFilter,
  cellSx,
}: TableHeaderProps<T>) {
  return (
    <TableHead>
      {table.getHeaderGroups().map((headerGroup) => (
        <MuiTableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            const canSort = header.column.getCanSort()
            const sortDirection = header.column.getIsSorted()
            const meta = header.column.columnDef.meta
            const align = meta?.align ?? 'start'
            const width = meta?.width

            return (
              <MuiTableCell
                key={header.id}
                align={align === 'end' ? 'right' : align === 'center' ? 'center' : 'left'}
                sx={{
                  width,
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  color: 'text.secondary',
                  backgroundColor: '#F7FAFC', // gray-100
                  userSelect: 'none',
                  whiteSpace: 'nowrap',
                  ...cellSx,
                }}
              >
                {header.isPlaceholder ? null : canSort ? (
                  <TableSortLabel
                    active={!!sortDirection}
                    direction={sortDirection === 'desc' ? 'desc' : 'asc'}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </TableSortLabel>
                ) : (
                  flexRender(header.column.columnDef.header, header.getContext())
                )}
              </MuiTableCell>
            )
          })}
        </MuiTableRow>
      ))}

      {/* Per-column filter row */}
      {showPerColumnFilter && (
        <MuiTableRow>
          {table.getHeaderGroups()[0]?.headers.map((header) => (
            <MuiTableCell key={header.id} sx={{ py: 0.5, ...cellSx }}>
              {header.column.getCanFilter() ? (
                <TextField
                  value={(header.column.getFilterValue() ?? '') as string}
                  onChange={(e) => header.column.setFilterValue(e.target.value)}
                  size="small"
                  variant="standard"
                  placeholder="סנן..."
                  sx={{ width: '100%' }}
                />
              ) : null}
            </MuiTableCell>
          ))}
        </MuiTableRow>
      )}
    </TableHead>
  )
}
