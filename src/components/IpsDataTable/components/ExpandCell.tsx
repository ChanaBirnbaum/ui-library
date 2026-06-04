import React from 'react'
import IconButton from '@mui/material/IconButton'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import type { Row, RowData } from '@tanstack/react-table'

export interface ExpandCellProps<T extends RowData> {
  row: Row<T>
}

export function ExpandCell<T extends RowData>({ row }: ExpandCellProps<T>) {
  return (
    <IconButton
      size="small"
      onClick={(e) => { e.stopPropagation(); row.toggleExpanded() }}
      aria-label={row.getIsExpanded() ? 'Collapse row' : 'Expand row'}
      sx={{
        transform: row.getIsExpanded() ? 'rotate(90deg)' : 'rotate(0deg)',
        transition: 'transform 0.2s ease',
        color: 'text.secondary',
      }}
    >
      <KeyboardArrowRightIcon fontSize="small" />
    </IconButton>
  )
}
