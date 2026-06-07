import React from 'react'
import MuiTableCell from '@mui/material/TableCell'
import { flexRender } from '@tanstack/react-table'
import type { Cell, RowData } from '@tanstack/react-table'
import { EditableCell } from './EditableCell'
import type { EditableConfig } from '../IpsDataTable.types'

export interface DataCellProps<T extends RowData> {
  cell: Cell<T, unknown>
  isEditing: boolean
  editValue: unknown
  onEditValueChange: (columnId: string, value: unknown) => void
  onActivateEdit?: () => void
  onCommit?: () => void
  onCancel?: () => void
  cellSx?: object
}

export function DataCell<T extends RowData>({
  cell,
  isEditing,
  editValue,
  onEditValueChange,
  onActivateEdit,
  onCommit,
  onCancel,
  cellSx,
}: DataCellProps<T>) {
  const meta = cell.column.columnDef.meta
  const align = meta?.align ?? 'start'
  const width = meta?.width
  const editableMeta = meta?.editable
  const isEditable = !!editableMeta
  const editConfig: EditableConfig | undefined =
    typeof editableMeta === 'object' ? editableMeta : undefined
  const editMode = editConfig?.mode ?? 'click'

  const interactionProps =
    isEditable && !isEditing && onActivateEdit
      ? editMode === 'dblclick'
        ? { onDoubleClick: onActivateEdit }
        : { onClick: onActivateEdit }
      : {}

  const content =
    isEditing && isEditable
      ? meta?.renderEditCell
        ? meta.renderEditCell(editValue as never, (v) =>
            onEditValueChange(cell.column.id, v)
          )
        : (
          <EditableCell
            config={editConfig}
            value={editValue}
            onChange={(v) => onEditValueChange(cell.column.id, v)}
            onCommit={onCommit}
            onCancel={onCancel}
          />
        )
      : meta?.renderCell
      ? meta.renderCell(cell.getValue() as never, cell.row.original)
      : flexRender(cell.column.columnDef.cell, cell.getContext())

  return (
    <MuiTableCell
      align={align === 'end' ? 'right' : align === 'center' ? 'center' : 'left'}
      sx={{
        width,
        cursor: isEditable && !isEditing ? 'pointer' : 'default',
        '&:hover':
          isEditable && !isEditing ? { backgroundColor: 'action.hover' } : {},
        ...cellSx,
      }}
      {...interactionProps}
    >
      {content}
    </MuiTableCell>
  )
}
