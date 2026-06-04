import React, { useMemo, useState } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import MuiTable from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getExpandedRowModel,
  flexRender,
} from '@tanstack/react-table'
import type {
  SortingState,
  ColumnFiltersState,
  PaginationState,
  ExpandedState,
  ColumnDef,
  RowData,
} from '@tanstack/react-table'

import type { IpsDataTableProps, EditingState, ActionDef } from './IpsDataTable.types'
import { TableHeader } from './components/TableHeader'
import { TableBody } from './components/TableBody'
import { TableFooter } from './components/TableFooter'
import { SkeletonRows } from './components/SkeletonRows'
import { ExpandCell } from './components/ExpandCell'
import { DeleteConfirmDialog } from './components/DeleteConfirmDialog'

// Size → padding mapping
const SIZE_CELL_SX: Record<string, object> = {
  sm: { py: 0.5, px: 1, fontSize: '0.75rem', height: 32 },
  md: { py: 1, px: 2, fontSize: '0.875rem', height: 48 },
  lg: { py: 1.5, px: 2, fontSize: '1rem', height: 64 },
}

// Variant → table sx
const VARIANT_SX: Record<string, object> = {
  default: {},
  bordered: {
    '& .MuiTableCell-root': {
      border: '1px solid',
      borderColor: 'divider',
    },
  },
  striped: {},
}

export function IpsDataTable<T extends RowData>(props: IpsDataTableProps<T>) {
  const {
    data,
    columns,
    expandedContent,
    onEdit,
    onDelete,
    onSave,
    customActions = [],
    pagination = false,
    sorting = false,
    filtering = false,
    isLoading = false,
    emptyState,
    stickyHeader = false,
    variant = 'default',
    size = 'md',
    sx,
  } = props

  // -------------------------------------------------------------------------
  // Derived flags
  // -------------------------------------------------------------------------
  const hasSorting = sorting !== false
  const isControlledSorting = Array.isArray(sorting)

  const hasGlobalFilter =
    filtering === true ||
    (typeof filtering === 'object' && filtering !== null && filtering.global !== false)

  const hasPerColumnFilter =
    typeof filtering === 'object' &&
    filtering !== null &&
    (filtering as { perColumn?: boolean }).perColumn === true

  const hasPagination = pagination !== false
  const paginationConfig = pagination === false ? null : pagination ?? {}

  const hasExpand = !!expandedContent
  const hasInlineEdit = !!onSave
  const hasActionColumn =
    !!onEdit || !!onDelete || hasInlineEdit || customActions.length > 0

  // -------------------------------------------------------------------------
  // Table state
  // -------------------------------------------------------------------------
  const [internalSorting, setInternalSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [globalFilter, setGlobalFilter] = useState('')
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: paginationConfig?.pageSize ?? 10,
  })
  const [expanded, setExpanded] = useState<ExpandedState>({})

  // Inline editing
  const [editingState, setEditingState] = useState<EditingState>({
    rowId: null,
    values: {},
  })

  // Delete confirmation
  const [deleteTarget, setDeleteTarget] = useState<T | null>(null)

  // -------------------------------------------------------------------------
  // Build enhanced columns (prepend expand, append actions)
  // -------------------------------------------------------------------------
  const enhancedColumns = useMemo<ColumnDef<T>[]>(() => {
    const cols: ColumnDef<T>[] = [...columns]

    if (hasExpand) {
      cols.unshift({
        id: '_expand',
        header: () => null,
        cell: ({ row }) => <ExpandCell row={row} />,
        enableSorting: false,
        enableColumnFilter: false,
        size: 48,
      })
    }

    if (hasActionColumn) {
      cols.push({
        id: '_actions',
        header: () => null,
        cell: () => null, // actual rendering done in TableBody
        enableSorting: false,
        enableColumnFilter: false,
      })
    }

    return cols
  }, [columns, hasExpand, hasActionColumn])

  // -------------------------------------------------------------------------
  // TanStack table instance
  // -------------------------------------------------------------------------
  const sortingState = isControlledSorting
    ? (sorting as SortingState)
    : internalSorting

  const table = useReactTable<T>({
    data,
    columns: enhancedColumns,
    state: {
      sorting: sortingState,
      columnFilters,
      globalFilter,
      pagination: { pageIndex, pageSize },
      expanded,
    },
    onSortingChange: isControlledSorting ? undefined : setInternalSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    onExpandedChange: setExpanded,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: hasSorting ? getSortedRowModel() : undefined,
    getFilteredRowModel:
      hasGlobalFilter || hasPerColumnFilter ? getFilteredRowModel() : undefined,
    getPaginationRowModel: hasPagination ? getPaginationRowModel() : undefined,
    getExpandedRowModel: hasExpand ? getExpandedRowModel() : undefined,
    getRowCanExpand: hasExpand ? () => true : undefined,
    manualPagination: false,
    manualSorting: isControlledSorting,
  })

  // -------------------------------------------------------------------------
  // Editing handlers
  // -------------------------------------------------------------------------
  const handleStartInlineEdit = (rowId: string) => {
    const row = table.getRowModel().rows.find((r) => r.id === rowId)
    if (!row) return
    const values: Record<string, unknown> = {}
    for (const col of table.getAllColumns()) {
      if (col.columnDef.meta?.editable) {
        values[col.id] = row.getValue(col.id)
      }
    }
    setEditingState({ rowId, values })
  }

  const handleEditValueChange = (columnId: string, value: unknown) => {
    setEditingState((prev) => ({
      ...prev,
      values: { ...prev.values, [columnId]: value },
    }))
  }

  const handleSaveInline = async (rowId: string) => {
    const row = table.getRowModel().rows.find((r) => r.id === rowId)
    if (!row || !onSave) return
    const updated = Object.assign({}, row.original, editingState.values) as T
    await onSave(row.original, updated)
    setEditingState({ rowId: null, values: {} })
  }

  const handleCancelEdit = () => {
    setEditingState({ rowId: null, values: {} })
  }

  // -------------------------------------------------------------------------
  // Delete handlers
  // -------------------------------------------------------------------------
  const handleDeleteRequest = (row: T) => setDeleteTarget(row)

  const handleDeleteConfirm = () => {
    if (deleteTarget && onDelete) onDelete(deleteTarget)
    setDeleteTarget(null)
  }

  const handleDeleteCancel = () => setDeleteTarget(null)

  // -------------------------------------------------------------------------
  // Empty state
  // -------------------------------------------------------------------------
  const renderEmptyState = () =>
    emptyState ?? (
      <Typography variant="body2" color="text.secondary">
        אין נתונים להצגה
      </Typography>
    )

  // -------------------------------------------------------------------------
  // Cell sx from size
  // -------------------------------------------------------------------------
  const cellSx = SIZE_CELL_SX[size]
  const colSpan = table.getVisibleLeafColumns().length

  // -------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------
  return (
    <Box sx={sx}>
      {/* Global filter */}
      {hasGlobalFilter && (
        <Box sx={{ mb: 1.5 }}>
          <TextField
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            placeholder="חיפוש..."
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" color="action" />
                </InputAdornment>
              ),
            }}
            sx={{ minWidth: 240 }}
          />
        </Box>
      )}

      <Paper
        variant="outlined"
        sx={{ borderRadius: 1, overflow: 'hidden', ...VARIANT_SX[variant] }}
      >
        <TableContainer>
          <MuiTable stickyHeader={stickyHeader} size={size === 'sm' ? 'small' : 'medium'}>
            <TableHeader
              table={table}
              showPerColumnFilter={hasPerColumnFilter}
              cellSx={cellSx}
            />

            {isLoading ? (
              <tbody>
                <SkeletonRows
                  rowCount={pageSize}
                  columnCount={colSpan}
                  cellSx={cellSx}
                />
              </tbody>
            ) : (
              <TableBody
                table={table}
                editingState={editingState}
                onEditValueChange={handleEditValueChange}
                onStartInlineEdit={handleStartInlineEdit}
                onSaveInline={handleSaveInline}
                onCancelEdit={handleCancelEdit}
                onEdit={onEdit}
                onDeleteRequest={onDelete ? handleDeleteRequest : undefined}
                expandedContent={expandedContent}
                customActions={customActions as ActionDef<T>[]}
                hasInlineEdit={hasInlineEdit}
                hasActionColumn={hasActionColumn}
                variant={variant}
                cellSx={cellSx}
                renderEmptyState={renderEmptyState}
                isLoading={isLoading}
              />
            )}

            {hasPagination && !isLoading && (
              <TableFooter
                table={table}
                totalRows={table.getFilteredRowModel().rows.length}
                pageSizeOptions={paginationConfig?.pageSizeOptions}
                showTotal={paginationConfig?.showTotal}
                colSpan={colSpan}
              />
            )}
          </MuiTable>
        </TableContainer>
      </Paper>

      <DeleteConfirmDialog
        open={deleteTarget !== null}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      />
    </Box>
  )
}

// Convenience re-export so consumers get useful flexRender if needed
export { flexRender }
