import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import TableHead from '@mui/material/TableHead';
import MuiTableRow from '@mui/material/TableRow';
import MuiTableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
import TextField from '@mui/material/TextField';
import { flexRender } from '@tanstack/react-table';
import { TruncatedText } from './TruncatedText';
import { shouldClip, clipSx, clipWidthFor } from './cellOverflow';
export function TableHeader({ table, showPerColumnFilter, cellSx, cellOverflow = 'wrap', autoWidths, }) {
    return (_jsxs(TableHead, { children: [table.getHeaderGroups().map((headerGroup) => (_jsx(MuiTableRow, { children: headerGroup.headers.map((header) => {
                    const canSort = header.column.getCanSort();
                    const sortDirection = header.column.getIsSorted();
                    const meta = header.column.columnDef.meta;
                    const align = meta?.align ?? 'start';
                    const width = meta?.width;
                    // Control columns (_select/_expand/_actions) size themselves.
                    const isControl = header.column.id.startsWith('_');
                    const autoWidth = autoWidths?.[header.column.id];
                    // The header participates in the column's width, so it has to be
                    // clipped on exactly the same columns as the body cells.
                    const clips = !isControl && shouldClip(meta, cellOverflow, autoWidth);
                    const label = header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext());
                    const headerContent = clips && label ? _jsx(TruncatedText, { children: label }) : label;
                    return (_jsx(MuiTableCell, { align: align === 'end' ? 'right' : align === 'center' ? 'center' : 'left', "data-col-id": header.column.id, sx: {
                            ...(clips
                                ? clipSx(clipWidthFor(width, autoWidth))
                                : { width, maxWidth: width }),
                            fontWeight: 700,
                            fontSize: '0.8rem',
                            color: 'text.primary',
                            backgroundColor: '#F0F6FD',
                            userSelect: 'none',
                            ...cellSx,
                            // After cellSx: header labels must never wrap.
                            whiteSpace: 'nowrap',
                            ...(clips
                                ? {
                                    overflow: 'hidden',
                                    // Keep the sort arrow visible next to a clipped label.
                                    '& .MuiTableSortLabel-root': { maxWidth: '100%' },
                                }
                                : {}),
                        }, children: headerContent === null ? null : canSort ? (_jsx(TableSortLabel, { active: !!sortDirection, direction: sortDirection === 'desc' ? 'desc' : 'asc', onClick: header.column.getToggleSortingHandler(), children: headerContent })) : (headerContent) }, header.id));
                }) }, headerGroup.id))), showPerColumnFilter && (_jsx(MuiTableRow, { children: table.getHeaderGroups()[0]?.headers.map((header) => (_jsx(MuiTableCell, { sx: { py: 0.5, ...cellSx }, children: header.column.getCanFilter() ? (_jsx(TextField, { value: (header.column.getFilterValue() ?? ''), onChange: (e) => header.column.setFilterValue(e.target.value), size: "small", variant: "standard", placeholder: "\u05E1\u05E0\u05DF...", sx: { width: '100%' } })) : null }, header.id))) }))] }));
}
