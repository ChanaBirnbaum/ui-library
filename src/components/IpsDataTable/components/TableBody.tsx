import React from 'react'
import MuiTableBody from '@mui/material/TableBody'
import MuiTableRow from '@mui/material/TableRow'
import MuiTableCell from '@mui/material/TableCell'
import { flexRender } from '@tanstack/react-table'
import type { Table, RowData } from '@tanstack/react-table'
import type { VirtualItem } from '@tanstack/react-virtual'
import { DataCell } from './DataCell'
import { ActionCell } from './ActionCell'
import type { ActionDef, EditingState } from '../IpsDataTable.types'

export interface TableBodyProps<T extends RowData> {
  table: Table<T>
  editingState: EditingState
  onEditValueChange: (columnId: string, value: unknown) => void
  onStartInlineEdit: (rowId: string) => void
  onSaveInline: (rowId: string) => Promise<void>
  onCancelEdit: () => void
  onEdit?: (row: T) => void
  onDeleteRequest?: (row: T) => void
  expandedContent?: (row: T) => React.ReactNode
  customActions?: ActionDef<T>[]
  hasInlineEdit: boolean
  hasActionColumn: boolean
  variant: 'default' | 'bordered' | 'striped'
  cellSx?: object
  renderEmptyState: () => React.ReactNode
  isLoading: boolean
  onRowClick?: (row: T, event: React.MouseEvent<HTMLTableRowElement>) => void
  virtualItems?: VirtualItem[]
  paddingTop?: number
  paddingBottom?: number
}

export function TableBody<T extends RowData>({
  table,
  editingState,
  onEditValueChange,
  onStartInlineEdit,
  onSaveInline,
  onCancelEdit,
  onEdit,
  onDeleteRequest,
  expandedContent,
  customActions = [],
  hasInlineEdit,
  hasActionColumn,
  variant,
  cellSx,
  renderEmptyState,
  isLoading,
  onRowClick,
  virtualItems,
  paddingTop = 0,
  paddingBottom = 0,
}: TableBodyProps<T>) {
  const allRows = table.getRowModel().rows
  const totalColumns = table.getVisibleLeafColumns().length

  if (!isLoading && allRows.length === 0) {
    return (
      <MuiTableBody>
        <MuiTableRow>
          <MuiTableCell
            colSpan={totalColumns}
            align="center"
            sx={{ py: 6, color: 'text.secondary', border: 'none' }}
          >
            {renderEmptyState()}
          </MuiTableCell>
        </MuiTableRow>
      </MuiTableBody>
    )
  }

  const displayRows = virtualItems
    ? virtualItems
        .map((vi) => allRows[vi.index])
        .filter((r): r is (typeof allRows)[number] => !!r)
    : allRows

  return (
    <MuiTableBody>
      {paddingTop > 0 && (
        <MuiTableRow>
          <MuiTableCell
            colSpan={totalColumns}
            sx={{ p: 0, border: 'none', height: paddingTop }}
          />
        </MuiTableRow>
      )}

      {displayRows.map((row, displayIdx) => {
        const rowIndex = virtualItems ? virtualItems[displayIdx].index : displayIdx
        const isEditing = editingState.rowId === row.id
        const isExpanded = row.getIsExpanded()
        const isEven = rowIndex % 2 === 0

        const rowSx = {
          backgroundColor: variant === 'striped' && !isEven ? 'grey.50' : undefined,
          '&:hover': { backgroundColor: 'grey.100' },
          cursor: onRowClick ? 'pointer' : undefined,
          ...(isExpanded ? { backgroundColor: '#EFF6FF' } : {}),
          ...(isEditing
            ? { outline: '2px solid', outlineColor: 'primary.main', outlineOffset: '-2px' }
            : {}),
        }

        return (
          <React.Fragment key={row.id}>
            <MuiTableRow
              sx={rowSx}
              onClick={onRowClick ? (e) => onRowClick(row.original, e) : undefined}
            >
              {row.getVisibleCells().map((cell) => {
                const colId = cell.column.id

                if (colId === '_select' || colId === '_expand') {
                  return (
                    <MuiTableCell
                      key={cell.id}
                      sx={{ width: colId === '_select' ? 40 : 48, p: 0.5 }}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </MuiTableCell>
                  )
                }

                if (colId === '_actions') {
                  return (
                    <ActionCell
                      key={cell.id}
                      row={row.original}
                      onEdit={onEdit}
                      onStartInlineEdit={() => onStartInlineEdit(row.id)}
                      onDeleteRequest={onDeleteRequest}
                      onSaveInline={() => onSaveInline(row.id)}
                      onCancelEdit={onCancelEdit}
                      isEditing={isEditing}
                      hasInlineEdit={hasInlineEdit}
                      customActions={customActions}
                      cellSx={cellSx}
                    />
                  )
                }

                return (
                  <DataCell
                    key={cell.id}
                    cell={cell}
                    isEditing={isEditing}
                    editValue={editingState.values[colId]}
                    onEditValueChange={onEditValueChange}
                    onActivateEdit={
                      hasInlineEdit ? () => onStartInlineEdit(row.id) : undefined
                    }
                    onCommit={() => onSaveInline(row.id)}
                    onCancel={onCancelEdit}
                    cellSx={cellSx}
                  />
                )
              })}
            </MuiTableRow>

            {isExpanded && expandedContent && (
              <MuiTableRow>
                <MuiTableCell colSpan={totalColumns} sx={{ p: 0 }}>
                  {expandedContent(row.original)}
                </MuiTableCell>
              </MuiTableRow>
            )}
          </React.Fragment>
        )
      })}

      {paddingBottom > 0 && (
        <MuiTableRow>
          <MuiTableCell
            colSpan={totalColumns}
            sx={{ p: 0, border: 'none', height: paddingBottom }}
          />
        </MuiTableRow>
      )}
    </MuiTableBody>
  )
}
