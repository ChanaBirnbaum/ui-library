import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MuiTable from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import MuiTableRow from '@mui/material/TableRow';
import MuiTableCell from '@mui/material/TableCell';
export function ExpandedRow({ subData, subColumns, customContent, title, indent = 0, }) {
    return (_jsxs(Box, { sx: {
            px: 2,
            py: 1.5,
            pl: 2 + indent * 3,
            bgcolor: '#F5F9FF',
        }, children: [title && (_jsx(Typography, { variant: "subtitle2", fontWeight: "bold", sx: { pb: 1.5, color: 'text.primary', fontSize: '0.875rem' }, children: title })), customContent, subData && subColumns && subColumns.length > 0 && (_jsxs(MuiTable, { sx: { backgroundColor: 'white' }, children: [_jsx(TableHead, { children: _jsx(MuiTableRow, { children: subColumns.map((col) => (_jsx(MuiTableCell, { align: col.align ?? 'left', sx: {
                                    fontWeight: 700,
                                    color: 'text.secondary',
                                    width: col.width,
                                    backgroundColor: '#DBEAFE',
                                    borderBottom: '1px solid',
                                    borderColor: '#BFDBFE',
                                }, children: col.header }, col.id))) }) }), _jsxs(TableBody, { children: [subData.map((item, rowIdx) => (_jsx(MuiTableRow, { sx: {
                                    '&:hover': { backgroundColor: 'rgba(0,0,0,0.04)' },
                                    '& td': { borderBottom: '1px solid', borderColor: '#BFDBFE' },
                                    '&:last-child td': { borderBottom: 0 },
                                }, children: subColumns.map((col) => {
                                    const key = col.accessorKey ?? col.id;
                                    const raw = item[key];
                                    const cellContent = col.renderCell
                                        ? col.renderCell(raw, item)
                                        : raw != null
                                            ? String(raw)
                                            : '—';
                                    return (_jsx(MuiTableCell, { align: col.align ?? 'left', children: cellContent }, col.id));
                                }) }, rowIdx))), subData.length === 0 && (_jsx(MuiTableRow, { children: _jsx(MuiTableCell, { colSpan: subColumns.length, align: "center", sx: { color: 'text.disabled' }, children: "\u05D0\u05D9\u05DF \u05E0\u05EA\u05D5\u05E0\u05D9\u05DD" }) }))] })] }))] }));
}
