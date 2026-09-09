import React from 'react'
import MuiTableCell from '@mui/material/TableCell'
import { flexRender } from '@tanstack/react-table'
import type { Cell, RowData } from '@tanstack/react-table'
import { EditableCell } from './EditableCell'
import { TruncatedText } from './TruncatedText'
import { shouldClip, clipSx, flowSx, clipWidthFor } from './cellOverflow'
import type { EditableConfig, CellOverflow } from '../IpsDataTable.types'

export interface DataCellProps<T extends RowData> {
  cell: Cell<T, unknown>
  isEditing: boolean
  editValue: unknown
  onEditValueChange: (columnId: string, value: unknown) => void
  onActivateEdit?: () => void
  onCommit?: () => void
  onCancel?: () => void
  cellSx?: object
  /** Table-level overflow mode; `meta.overflow` on the column wins over it */
  cellOverflow?: CellOverflow
  /** Width measured by the auto-fit pass, when this column had to be capped */
  autoWidth?: number
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
  cellOverflow = 'wrap',
  autoWidth,
}: DataCellProps<T>) {
  const meta = cell.column.columnDef.meta
  const align = meta?.align ?? 'start'
  const width = meta?.width
  const overflow = meta?.overflow ?? cellOverflow
  const editableMeta = meta?.editable
  const isEditable = !!editableMeta
  const editConfig: EditableConfig | undefined =
    typeof editableMeta === 'object' ? editableMeta : undefined
  const editMode = editConfig?.mode ?? 'click'

  const interactionProps =
    isEditable && !isEditing && onActivateEdit
      ? editMode === 'dblclick'
        ? {
            onDoubleClick: (e: React.MouseEvent) => {
              e.stopPropagation()
              onActivateEdit()
            },
          }
        : {
            onClick: (e: React.MouseEvent) => {
              e.stopPropagation()
              onActivateEdit()
            },
          }
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

  // Only a column that was given a width budget is clipped — measured by the
  // auto-fit pass or declared on the column — so a single long column shrinks
  // while the short ones keep their natural size.
  const isTruncating =
    shouldClip(meta, cellOverflow, autoWidth) && !(isEditing && isEditable)

  // The tooltip prefers the raw value, so a custom renderer's markup does not
  // end up in it.
  const rawValue = cell.getValue()
  const body = isTruncating ? (
    <TruncatedText
      title={
        rawValue == null || typeof rawValue === 'object' ? undefined : String(rawValue)
      }
    >
      {content}
    </TruncatedText>
  ) : (
    content
  )

  const overflowSx = isTruncating
    ? clipSx(clipWidthFor(width, autoWidth))
    : flowSx(overflow, width)

  return (
    <MuiTableCell
      align={align === 'end' ? 'right' : align === 'center' ? 'center' : 'left'}
      data-col-id={cell.column.id}
      sx={{
        verticalAlign: 'middle',
        ...overflowSx,
        cursor: isEditable && !isEditing ? 'pointer' : 'default',
        '&:hover':
          isEditable && !isEditing ? { backgroundColor: 'action.hover' } : {},
        ...cellSx,
      }}
      onClick={isEditing ? (e) => e.stopPropagation() : undefined}
      {...interactionProps}
    >
      {body}
    </MuiTableCell>
  )
}
