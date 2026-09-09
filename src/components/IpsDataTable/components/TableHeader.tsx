import React from 'react'
import TableHead from '@mui/material/TableHead'
import MuiTableRow from '@mui/material/TableRow'
import MuiTableCell from '@mui/material/TableCell'
import TableSortLabel from '@mui/material/TableSortLabel'
import TextField from '@mui/material/TextField'
import { flexRender } from '@tanstack/react-table'
import type { Table, RowData } from '@tanstack/react-table'
import { TruncatedText } from './TruncatedText'
import { shouldClip, clipSx, clipWidthFor } from './cellOverflow'
import type { CellOverflow } from '../IpsDataTable.types'

export interface TableHeaderProps<T extends RowData> {
  table: Table<T>
  showPerColumnFilter: boolean
  cellSx?: object
  /** In `ellipsis` mode long header labels are clipped with a tooltip too */
  cellOverflow?: CellOverflow
  /** Widths measured by the auto-fit pass, keyed by column id */
  autoWidths?: Record<string, number>
}

export function TableHeader<T extends RowData>({
  table,
  showPerColumnFilter,
  cellSx,
  cellOverflow = 'wrap',
  autoWidths,
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
            // Control columns (_select/_expand/_actions) size themselves.
            const isControl = header.column.id.startsWith('_')
            const autoWidth = autoWidths?.[header.column.id]
            // The header participates in the column's width, so it has to be
            // clipped on exactly the same columns as the body cells.
            const clips = !isControl && shouldClip(meta, cellOverflow, autoWidth)
            const label = header.isPlaceholder
              ? null
              : flexRender(header.column.columnDef.header, header.getContext())
            const headerContent =
              clips && label ? <TruncatedText>{label}</TruncatedText> : label

            return (
              <MuiTableCell
                key={header.id}
                align={align === 'end' ? 'right' : align === 'center' ? 'center' : 'left'}
                // The auto-fit pass reads the natural column widths from here.
                data-col-id={header.column.id}
                sx={{
                  ...(clips
                    ? clipSx(clipWidthFor(width, autoWidth))
                    : { width, maxWidth: width }),
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  color: 'text.primary',
                  backgroundColor: '#F0F6FD',
                  userSelect: 'none',
                  ...cellSx,
                  // After cellSx: header labels must never wrap.
                  whiteSpace: 'nowrap',
                  ...(clips
                    ? {
                        overflow: 'hidden',
                        // Keep the sort arrow visible next to a clipped label.
                        '& .MuiTableSortLabel-root': { maxWidth: '100%' },
                      }
                    : {}),
                }}
              >
                {headerContent === null ? null : canSort ? (
                  <TableSortLabel
                    active={!!sortDirection}
                    direction={sortDirection === 'desc' ? 'desc' : 'asc'}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {headerContent}
                  </TableSortLabel>
                ) : (
                  headerContent
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
