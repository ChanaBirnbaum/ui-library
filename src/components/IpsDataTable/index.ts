// Main component
export { IpsDataTable, flexRender } from './IpsDataTable'

// Sub-components (consumers can override any part)
export { TableHeader } from './components/TableHeader'
export { TableBody } from './components/TableBody'
export { TableFooter } from './components/TableFooter'
export { DataCell } from './components/DataCell'
export { EditableCell } from './components/EditableCell'
export { ActionCell } from './components/ActionCell'
export { ExpandCell } from './components/ExpandCell'
export { ExpandedRow } from './components/ExpandedRow'
export { SkeletonRows } from './components/SkeletonRows'
export { DeleteConfirmDialog } from './components/DeleteConfirmDialog'

// Types
export type {
  IpsDataTableProps,
  ExpandedRowProps,
  SubColumnDef,
  ActionDef,
  EditableConfig,
  SelectOption,
  PaginationConfig,
  FilterConfig,
  EditingState,
  // Re-exported from @tanstack/react-table for consumer convenience
  ColumnDef,
  SortingState,
  Row,
  Table,
  RowData,
} from './IpsDataTable.types'

// Sub-component prop types
export type { TableHeaderProps } from './components/TableHeader'
export type { TableBodyProps } from './components/TableBody'
export type { TableFooterProps } from './components/TableFooter'
export type { DataCellProps } from './components/DataCell'
export type { EditableCellProps } from './components/EditableCell'
export type { ActionCellProps } from './components/ActionCell'
export type { ExpandCellProps } from './components/ExpandCell'
export type { SkeletonRowsProps } from './components/SkeletonRows'
export type { DeleteConfirmDialogProps } from './components/DeleteConfirmDialog'
