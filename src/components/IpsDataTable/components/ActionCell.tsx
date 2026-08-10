import React from 'react'
import MuiTableCell from '@mui/material/TableCell'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Box from '@mui/material/Box'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import SaveIcon from '@mui/icons-material/Save'
import CloseIcon from '@mui/icons-material/Close'
import type { ActionDef } from '../IpsDataTable.types'

export interface ActionCellProps<T> {
  row: T
  /** External edit handler (no inline edit) */
  onEdit?: (row: T) => void
  /** Starts inline editing (when onSave is configured) */
  onStartInlineEdit?: () => void
  onDeleteRequest?: (row: T) => void
  onSaveInline?: () => Promise<void>
  onCancelEdit?: () => void
  isEditing: boolean
  /** true when the DataTable has an onSave prop — enables inline edit mode */
  hasInlineEdit: boolean
  customActions?: ActionDef<T>[]
  cellSx?: object
}

export function ActionCell<T>({
  row,
  onEdit,
  onStartInlineEdit,
  onDeleteRequest,
  onSaveInline,
  onCancelEdit,
  isEditing,
  hasInlineEdit,
  customActions = [],
  cellSx,
}: ActionCellProps<T>) {
  const visibleActions = customActions.filter((a) => !a.isVisible || a.isVisible(row))

  return (
    <MuiTableCell
      align="right"
      sx={{ whiteSpace: 'nowrap', ...cellSx }}
      onClick={(e) => e.stopPropagation()}
    >
      <Box sx={{ display: 'flex', gap: 0.5, justifyContent: 'flex-end' }}>
        {isEditing ? (
          <>
            <Tooltip title="שמור">
              <IconButton size="small" color="primary" onClick={onSaveInline}>
                <SaveIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip title="ביטול">
              <IconButton size="small" onClick={onCancelEdit}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </>
        ) : (
          <>
            {(hasInlineEdit || onEdit) && (
              <Tooltip title="עריכה">
                <IconButton
                  size="small"
                  onClick={() =>
                    hasInlineEdit ? onStartInlineEdit?.() : onEdit?.(row)
                  }
                >
                  <EditIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            )}
            {onDeleteRequest && (
              <Tooltip title="מחיקה">
                <IconButton
                  size="small"
                  color="error"
                  onClick={() => onDeleteRequest(row)}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            )}
            {visibleActions.map((action) => (
              <Tooltip key={action.key} title={action.label}>
                <IconButton
                  size="small"
                  color={action.variant === 'danger' ? 'error' : 'default'}
                  onClick={() => action.onClick(row)}
                >
                  {action.icon as React.ReactElement}
                </IconButton>
              </Tooltip>
            ))}
          </>
        )}
      </Box>
    </MuiTableCell>
  )
}
