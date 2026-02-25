import type { DataGridProps, GridColDef, GridRowsProp, GridRowParams } from '@mui/x-data-grid'
import type { SxProps, Theme } from '@mui/material/styles'

export interface IpsTableProps extends Omit<DataGridProps, 'rows' | 'columns'> {
  /** Array of row objects — each must have a unique `id` field (required) */
  rows: GridRowsProp
  /** Column definitions (required) */
  columns: GridColDef[]
  /** Show loading skeleton overlay */
  loading?: boolean
  /** Rows displayed per page */
  pageSize?: number
  /** Enable row selection via checkboxes */
  checkboxSelection?: boolean
  /** Disable column filter icons */
  disableColumnFilter?: boolean
  /** Callback fired when a row is clicked */
  onRowClick?: (params: GridRowParams) => void
  /** MUI sx override on the wrapper Box */
  sx?: SxProps<Theme>
  /** Extra className on the wrapper Box */
  className?: string
}
