import { jsx as _jsx } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import MuiTableFooter from '@mui/material/TableFooter';
import MuiTableRow from '@mui/material/TableRow';
import MuiTableCell from '@mui/material/TableCell';
import TablePagination from '@mui/material/TablePagination';
export function TableFooter({ table, totalRows, pageSizeOptions = [10, 25, 50, 100], showTotal, colSpan, standalone = false, }) {
    const { pageIndex, pageSize } = table.getState().pagination;
    const pagination = (_jsx(TablePagination, { component: "div", count: totalRows, page: pageIndex, rowsPerPage: pageSize, rowsPerPageOptions: pageSizeOptions, onPageChange: (_, newPage) => table.setPageIndex(newPage), onRowsPerPageChange: (e) => {
            table.setPageSize(Number(e.target.value));
            table.setPageIndex(0);
        }, labelRowsPerPage: "\u05E9\u05D5\u05E8\u05D5\u05EA \u05D1\u05E2\u05DE\u05D5\u05D3:", labelDisplayedRows: ({ from, to, count }) => showTotal ? `${from}–${to} מתוך ${count}` : `${from}–${to}`, sx: {
            '& .MuiTablePagination-toolbar': { direction: 'ltr' },
            overflow: 'hidden',
        } }));
    if (standalone) {
        return (_jsx(Box, { sx: {
                flexShrink: 0,
                borderTop: '1px solid',
                borderColor: 'divider',
                backgroundColor: 'background.paper',
            }, children: pagination }));
    }
    return (_jsx(MuiTableFooter, { children: _jsx(MuiTableRow, { children: _jsx(MuiTableCell, { colSpan: colSpan, sx: { p: 0, borderBottom: 'none' }, children: pagination }) }) }));
}
