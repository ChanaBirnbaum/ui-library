import React from 'react'
import MuiTableFooter from '@mui/material/TableFooter'
import MuiTableRow from '@mui/material/TableRow'
import MuiTableCell from '@mui/material/TableCell'
import TablePagination from '@mui/material/TablePagination'
import type { Table, RowData } from '@tanstack/react-table'

export interface TableFooterProps<T extends RowData> {
  table: Table<T>
  totalRows: number
  pageSizeOptions?: number[]
  showTotal?: boolean
  colSpan: number
}

export function TableFooter<T extends RowData>({
  table,
  totalRows,
  pageSizeOptions = [10, 25, 50, 100],
  showTotal,
  colSpan,
}: TableFooterProps<T>) {
  const { pageIndex, pageSize } = table.getState().pagination

  return (
    <MuiTableFooter>
      <MuiTableRow>
        <MuiTableCell colSpan={colSpan} sx={{ p: 0, borderBottom: 'none' }}>
          <TablePagination
            component="div"
            count={totalRows}
            page={pageIndex}
            rowsPerPage={pageSize}
            rowsPerPageOptions={pageSizeOptions}
            onPageChange={(_, newPage) => table.setPageIndex(newPage)}
            onRowsPerPageChange={(e) => {
              table.setPageSize(Number(e.target.value))
              table.setPageIndex(0)
            }}
            labelRowsPerPage="שורות בעמוד:"
            labelDisplayedRows={({ from, to, count }) =>
              showTotal
                ? `${from}–${to} מתוך ${count}`
                : `${from}–${to}`
            }
            sx={{
              '& .MuiTablePagination-toolbar': { direction: 'ltr' },
            }}
          />
        </MuiTableCell>
      </MuiTableRow>
    </MuiTableFooter>
  )
}
