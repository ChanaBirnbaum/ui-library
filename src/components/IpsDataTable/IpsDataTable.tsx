import React, {
  useMemo,
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  useCallback,
} from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import MuiTable from '@mui/material/Table'
import MuiTableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputAdornment from '@mui/material/InputAdornment'
import Checkbox from '@mui/material/Checkbox'
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
  RowSelectionState,
} from '@tanstack/react-table'
import { useVirtualizer } from '@tanstack/react-virtual'

import type { IpsDataTableProps, EditingState, ActionDef } from './IpsDataTable.types'
import { TableHeader } from './components/TableHeader'
import { TableBody } from './components/TableBody'
import { TableFooter } from './components/TableFooter'
import { SkeletonRows } from './components/SkeletonRows'
import { ExpandCell } from './components/ExpandCell'
import { DeleteConfirmDialog } from './components/DeleteConfirmDialog'
import { useAutoFitColumns } from './components/useAutoFitColumns'

// `minHeight` (not `height`) so a row with wrapped text grows instead of
// overflowing its own cell box.
const SIZE_CELL_SX: Record<string, object> = {
  sm: { py: 0.5, px: 1, fontSize: '0.75rem', minHeight: 32 },
  md: { py: 1, px: 2, fontSize: '0.875rem', minHeight: 48 },
  lg: { py: 1.5, px: 2, fontSize: '1rem', minHeight: 64 },
}

// Row height estimates for the virtualizer / skeleton fitting (cell height + 1px border)
const SIZE_ROW_HEIGHT: Record<string, number> = { sm: 33, md: 49, lg: 65 }

// Thin horizontal rule between body rows, independent of the `bordered` variant
// (which additionally draws vertical/outer grid lines).
const ROW_DIVIDER_SX: object = {
  '& .MuiTableBody-root .MuiTableCell-root': {
    borderBottom: '1px solid',
    borderColor: 'grey.100',
  },
}

const VARIANT_SX: Record<string, object> = {
  default: ROW_DIVIDER_SX,
  bordered: {
    '& .MuiTableCell-root': {
      border: '1px solid',
      borderColor: 'divider',
    },
  },
  striped: ROW_DIVIDER_SX,
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
    onRowClick,
    checkboxSelection = false,
    onSelectionChange,
    getRowId,
    maxHeight,
    virtualScroll = false,
    cellOverflow = 'wrap',
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

  // The action column is sized from its buttons rather than its (empty)
  // content. Inline editing swaps in a save + cancel pair, hence the floor of 2.
  const actionButtonCount = Math.max(
    (hasInlineEdit || onEdit ? 1 : 0) + (onDelete ? 1 : 0) + customActions.length,
    hasInlineEdit ? 2 : 0
  )
  const actionColumnWidth = 16 + 34 * actionButtonCount

  // -------------------------------------------------------------------------
  // State
  // -------------------------------------------------------------------------
  const [internalSorting, setInternalSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [globalFilter, setGlobalFilter] = useState('')
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: paginationConfig?.pageSize ?? 10,
  })
  const [expanded, setExpanded] = useState<ExpandedState>({})
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({})
  const [editingState, setEditingState] = useState<EditingState>({ rowId: null, values: {} })
  const [deleteTarget, setDeleteTarget] = useState<T | null>(null)

  const tableContainerRef = useRef<HTMLDivElement>(null)

  // Live size of the scrollable viewport, used to fit the loading skeleton to
  // the height the table actually got instead of overflowing it.
  const [viewport, setViewport] = useState({ width: 0, height: 0, headerHeight: 0 })

  const measureViewport = useCallback(() => {
    const el = tableContainerRef.current
    if (!el) return
    const headerEl = el.querySelector('thead')
    const next = {
      width: el.clientWidth,
      height: el.clientHeight,
      headerHeight: headerEl ? headerEl.getBoundingClientRect().height : 0,
    }
    setViewport((prev) =>
      prev.width === next.width &&
      prev.height === next.height &&
      prev.headerHeight === next.headerHeight
        ? prev
        : next
    )
  }, [])

  useLayoutEffect(() => {
    const el = tableContainerRef.current
    if (!el) return
    measureViewport()
    if (typeof ResizeObserver === 'undefined') return
    const observer = new ResizeObserver(measureViewport)
    observer.observe(el)
    const headerEl = el.querySelector('thead')
    if (headerEl) observer.observe(headerEl)
    return () => observer.disconnect()
  }, [measureViewport])

  // The header row is re-rendered when these change, so re-measure it.
  useLayoutEffect(() => {
    measureViewport()
  }, [measureViewport, isLoading, size, hasPerColumnFilter, hasGlobalFilter])

  // -------------------------------------------------------------------------
  // Enhanced columns (_select → _expand → data → _actions)
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
        meta: { width: 48 },
      })
    }

    if (checkboxSelection) {
      cols.unshift({
        id: '_select',
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllRowsSelected()}
            indeterminate={table.getIsSomeRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
            size="small"
            sx={{ p: 0.5 }}
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            disabled={!row.getCanSelect()}
            onChange={row.getToggleSelectedHandler()}
            size="small"
            sx={{ p: 0.5 }}
            onClick={(e) => e.stopPropagation()}
          />
        ),
        enableSorting: false,
        enableColumnFilter: false,
        size: 40,
        meta: { width: 40 },
      })
    }

    if (hasActionColumn) {
      cols.push({
        id: '_actions',
        header: () => null,
        cell: () => null,
        enableSorting: false,
        enableColumnFilter: false,
        meta: { width: actionColumnWidth },
      })
    }

    return cols
  }, [columns, hasExpand, hasActionColumn, checkboxSelection, actionColumnWidth])

  // -------------------------------------------------------------------------
  // TanStack table instance
  // -------------------------------------------------------------------------
  const sortingState = isControlledSorting ? (sorting as SortingState) : internalSorting

  const table = useReactTable<T>({
    data,
    columns: enhancedColumns,
    state: {
      sorting: sortingState,
      columnFilters,
      globalFilter,
      pagination: { pageIndex, pageSize },
      expanded,
      rowSelection,
    },
    onSortingChange: isControlledSorting ? undefined : setInternalSorting,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onPaginationChange: setPagination,
    onExpandedChange: setExpanded,
    onRowSelectionChange: setRowSelection,
    enableRowSelection: checkboxSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: hasSorting ? getSortedRowModel() : undefined,
    getFilteredRowModel:
      hasGlobalFilter || hasPerColumnFilter ? getFilteredRowModel() : undefined,
    getPaginationRowModel: hasPagination ? getPaginationRowModel() : undefined,
    getExpandedRowModel: hasExpand ? getExpandedRowModel() : undefined,
    getRowCanExpand: hasExpand ? () => true : undefined,
    manualPagination: false,
    manualSorting: isControlledSorting,
    getRowId: getRowId ? (row) => getRowId(row) : undefined,
  })

  // -------------------------------------------------------------------------
  // Notify parent of selection changes
  // -------------------------------------------------------------------------
  useEffect(() => {
    if (onSelectionChange) {
      onSelectionChange(table.getSelectedRowModel().rows.map((r) => r.original))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowSelection])

  // -------------------------------------------------------------------------
  // Virtual scroll
  // -------------------------------------------------------------------------
  const allRows = table.getRowModel().rows

  const rowVirtualizer = useVirtualizer({
    count: virtualScroll ? allRows.length : 0,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => SIZE_ROW_HEIGHT[size] ?? 49,
    overscan: 10,
    // Measure real row heights so rows with wrapped text are not clipped.
    measureElement: (el) => el.getBoundingClientRect().height,
  })

  const virtualItems = virtualScroll ? rowVirtualizer.getVirtualItems() : undefined
  const totalVirtualSize = rowVirtualizer.getTotalSize()
  const paddingTop = virtualItems?.length ? virtualItems[0].start : 0
  const paddingBottom = virtualItems?.length
    ? totalVirtualSize - (virtualItems[virtualItems.length - 1]?.end ?? 0)
    : 0

  // -------------------------------------------------------------------------
  // Inline editing handlers
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
    setEditingState((prev) => ({ ...prev, values: { ...prev.values, [columnId]: value } }))
  }

  const handleSaveInline = async (rowId: string) => {
    const row = table.getRowModel().rows.find((r) => r.id === rowId)
    if (!row || !onSave) return
    const updated = Object.assign({}, row.original, editingState.values) as T
    await onSave(row.original, updated)
    setEditingState({ rowId: null, values: {} })
  }

  const handleCancelEdit = () => setEditingState({ rowId: null, values: {} })

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
  // Helpers
  // -------------------------------------------------------------------------
  const renderEmptyState = () =>
    emptyState ?? (
      <Typography variant="body2" color="text.secondary">
        אין נתונים להצגה
      </Typography>
    )

  const cellSx = SIZE_CELL_SX[size]
  const colSpan = table.getVisibleLeafColumns().length

  // -------------------------------------------------------------------------
  // Auto-fit: share the available width between the columns by their content,
  // so nobody has to declare widths up front.
  // -------------------------------------------------------------------------
  const pinnedColumnWidths = useMemo(() => {
    const pinned: Record<string, number> = {}
    for (const column of enhancedColumns) {
      const id = column.id
      const declared = column.meta?.width
      if (id && typeof declared === 'number') pinned[id] = declared
    }
    // Control columns are sized by their icons, not by text.
    if (checkboxSelection) pinned._select = 40
    if (hasExpand) pinned._expand = 48
    if (hasActionColumn) pinned._actions = actionColumnWidth
    return pinned
  }, [
    enhancedColumns,
    checkboxSelection,
    hasExpand,
    hasActionColumn,
    actionColumnWidth,
  ])

  // Re-measure natural widths whenever the rendered content changes; a plain
  // resize only redistributes what was already measured.
  const autoFitSignature = useMemo(
    () =>
      [
        enhancedColumns.map((c) => c.id ?? '').join('|'),
        allRows.length,
        pageIndex,
        pageSize,
        size,
        isLoading ? 'loading' : 'ready',
      ].join('#'),
    [enhancedColumns, allRows.length, pageIndex, pageSize, size, isLoading]
  )

  const { widths: autoWidths, isMeasuring } = useAutoFitColumns({
    enabled: cellOverflow === 'ellipsis' && !isLoading,
    containerRef: tableContainerRef,
    availableWidth: viewport.width,
    signature: autoFitSignature,
    pinnedWidths: pinnedColumnWidths,
  })

  // Number of skeleton rows that fit in the space the table was given. Falls
  // back to the page size before the first measurement (SSR / tests / auto
  // height), and never renders more rows than the loaded page would.
  const skeletonRowCount = useMemo(() => {
    const rowHeight = SIZE_ROW_HEIGHT[size] ?? 49
    const usable = viewport.height - viewport.headerHeight
    if (viewport.height <= 0 || usable <= 0) return pageSize
    const fits = Math.floor(usable / rowHeight)
    return Math.max(1, hasPagination ? Math.min(fits, pageSize) : fits)
  }, [viewport.height, viewport.headerHeight, size, pageSize, hasPagination])

  // -------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------
  return (
    <Box
      sx={[
        {
          // Fill whatever height the consumer allocated (resolves to `auto`
          // when the parent is auto-height), and never spill out of it.
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          maxHeight: '100%',
          minHeight: 0,
          overflow: 'hidden',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {hasGlobalFilter && (
        <Box sx={{ mb: 1.5, flexShrink: 0 }}>
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
        sx={{
          borderRadius: 1,
          overflow: 'hidden',
          // The Paper owns the available height; the scroll area and the
          // pagination bar share it as flex children.
          display: 'flex',
          flexDirection: 'column',
          flex: '1 1 auto',
          minHeight: 0,
          ...(maxHeight != null ? { maxHeight } : {}),
          ...VARIANT_SX[variant],
        }}
      >
        <TableContainer
          ref={tableContainerRef}
          sx={{ flex: '1 1 auto', minHeight: 0, overflow: 'auto' }}
        >
          <MuiTable
            stickyHeader={stickyHeader || virtualScroll || maxHeight != null}
            size={size === 'sm' ? 'small' : 'medium'}
            // Automatic layout: columns keep their content width, and only the
            // columns marked as clipping give room back (see cellOverflow.ts).
            // While auto-fit measures, the table must shrink-wrap to its
            // content instead of stretching, or the measured widths would be
            // the stretched ones rather than the natural ones.
            sx={
              cellOverflow === 'ellipsis'
                ? { width: isMeasuring ? 'auto' : '100%' }
                : undefined
            }
          >
            <TableHeader
              table={table}
              showPerColumnFilter={hasPerColumnFilter}
              cellSx={cellSx}
              cellOverflow={cellOverflow}
              autoWidths={autoWidths}
            />

            {isLoading ? (
              <MuiTableBody>
                <SkeletonRows
                  rowCount={skeletonRowCount}
                  columnCount={colSpan}
                  cellSx={cellSx}
                />
              </MuiTableBody>
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
                onRowClick={onRowClick}
                virtualItems={virtualItems}
                paddingTop={paddingTop}
                paddingBottom={paddingBottom}
                measureElement={virtualScroll ? rowVirtualizer.measureElement : undefined}
                cellOverflow={cellOverflow}
                autoWidths={autoWidths}
              />
            )}
          </MuiTable>
        </TableContainer>

        {/* Rendered outside the scroll area so it is always visible and the
            last row is never hidden behind it. Kept mounted while loading so
            the table does not jump when data arrives. */}
        {hasPagination && (
          <TableFooter
            standalone
            table={table}
            totalRows={table.getFilteredRowModel().rows.length}
            pageSizeOptions={paginationConfig?.pageSizeOptions}
            showTotal={paginationConfig?.showTotal}
            colSpan={colSpan}
          />
        )}
      </Paper>

      <DeleteConfirmDialog
        open={deleteTarget !== null}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      />
    </Box>
  )
}

export { flexRender }
