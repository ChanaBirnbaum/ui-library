import type { SxProps, Theme } from '@mui/material/styles'

export interface IpsTableLightColumn {
  /** Row data key to read the cell value from */
  key: string
  /** Header label displayed in the column */
  label: string
  /** Optional fixed column width in pixels */
  width?: number
}

export interface IpsTableLightProps {
  /** Array of column definitions (required) */
  columns: IpsTableLightColumn[]
  /** Array of row data objects (required) */
  rows: Record<string, React.ReactNode>[]
  /** Fix the header on scroll */
  stickyHeader?: boolean
  /** Alternate row background colors — even rows get grey[50] */
  striped?: boolean
  /** Reduce cell padding via MUI size="small" */
  dense?: boolean
  /** Text shown centered when rows array is empty */
  emptyText?: string
  /** MUI sx override on the TableContainer */
  sx?: SxProps<Theme>
  /** Extra className on the root TableContainer */
  className?: string
}
