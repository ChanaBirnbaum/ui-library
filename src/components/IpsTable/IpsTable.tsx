import React, { forwardRef } from 'react'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import type { IpsTableProps } from './IpsTable.types'

export const IpsTable = forwardRef<HTMLDivElement, IpsTableProps>(
  (
    {
      rows,
      columns,
      loading = false,
      pageSize = 25,
      checkboxSelection = false,
      disableColumnFilter = false,
      onRowClick,
      sx,
      className,
      ...rest
    },
    ref
  ) => {
    const rootClassName = ['ips-table', className].filter(Boolean).join(' ')

    return (
      <Box ref={ref} className={rootClassName} sx={sx}>
        <DataGrid
          rows={rows}
          columns={columns}
          loading={loading}
          checkboxSelection={checkboxSelection}
          disableColumnFilter={disableColumnFilter}
          onRowClick={onRowClick}
          initialState={{
            pagination: { paginationModel: { pageSize } },
            ...rest.initialState,
          }}
          pageSizeOptions={[10, 25, 50, 100]}
          {...rest}
          sx={{
            // ── Header styling ──────────────────────────────────────────────
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: 'primary.main',
            },
            '& .MuiDataGrid-columnHeaderTitle': {
              color: 'white',
              fontWeight: 600,
            },
            '& .MuiDataGrid-columnHeader': {
              backgroundColor: 'primary.main',
              color: 'white',
            },
            // Keep sort/filter icons white on the coloured header
            '& .MuiDataGrid-columnHeader .MuiSvgIcon-root': {
              color: 'white',
            },
            '& .MuiDataGrid-columnSeparator': {
              color: 'rgba(255,255,255,0.3)',
            },
            // ── Alternating row colours ─────────────────────────────────────
            '& .MuiDataGrid-row:nth-of-type(even)': {
              backgroundColor: 'grey.50',
            },
            '& .MuiDataGrid-row:hover': {
              backgroundColor: 'primary.light',
              opacity: 0.85,
            },
            // ── Border / radius ─────────────────────────────────────────────
            borderRadius: 1,
            // Allow consumer sx to override everything above
            ...(sx as object),
          }}
        />
      </Box>
    )
  }
)

IpsTable.displayName = 'IpsTable'
