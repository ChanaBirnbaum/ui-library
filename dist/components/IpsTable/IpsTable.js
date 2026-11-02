import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
function getWrapSx(effectiveWrap, colWidth) {
    if (effectiveWrap === 'ellipsis') {
        return {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            maxWidth: colWidth ?? 200,
        };
    }
    if (effectiveWrap === 'wrap') {
        return { whiteSpace: 'normal', wordBreak: 'break-word' };
    }
    return { whiteSpace: 'nowrap' };
}
/** Generic render implementation — kept outside forwardRef so the generic Row is preserved */
function IpsTableBase(props, ref) {
    const { columns, rows, stickyHeader = false, maxHeight, striped = true, dense = false, emptyText = 'No data', wrap: tableWrap = 'ellipsis', hover, onRowClick, onRowDoubleClick, getRowId, sx, className, } = props;
    const hasRowHandler = Boolean(onRowClick || onRowDoubleClick);
    const enableHover = hover !== undefined ? hover : hasRowHandler;
    const rootClassName = ['ips-table', className].filter(Boolean).join(' ');
    function renderCell(col, row, rowIndex) {
        const value = row[col.key];
        if (col.render) {
            return col.render(value, row, rowIndex);
        }
        if (col.type === 'link') {
            const href = col.href ? col.href(row) : String(value ?? '');
            const isBlank = col.linkTarget === '_blank';
            return (_jsx(Link, { href: href, target: col.linkTarget ?? '_self', rel: isBlank ? 'noopener noreferrer' : undefined, onClick: (e) => e.stopPropagation(), children: String(value ?? '') }));
        }
        if (col.type === 'image') {
            const src = col.imageSrc ? col.imageSrc(row) : String(value ?? '');
            const ip = col.imageProps ?? {};
            return (_jsx(Box, { component: "img", src: src, width: ip.width, height: ip.height, alt: ip.alt ?? '', onClick: (e) => e.stopPropagation(), sx: ip.rounded ? { borderRadius: '50%', display: 'block' } : { display: 'block' } }));
        }
        return value;
    }
    return (_jsx(TableContainer, { ref: ref, component: Paper, className: rootClassName, sx: {
            ...(maxHeight != null ? { maxHeight, overflow: 'auto' } : {}),
            ...sx,
        }, children: _jsxs(Table, { stickyHeader: stickyHeader, size: dense ? 'small' : 'medium', children: [_jsx(TableHead, { children: _jsx(TableRow, { children: columns.map((col) => (_jsx(TableCell, { width: col.width, align: col.align ?? 'left', sx: {
                                backgroundColor: '#F6F9FC',
                                color: 'text.primary',
                                fontWeight: 600,
                                whiteSpace: 'nowrap',
                                borderBottom: '1px solid',
                                borderColor: 'divider',
                                '&.MuiTableCell-stickyHeader': {
                                    backgroundColor: '#F6F9FC',
                                },
                            }, children: col.label }, col.key))) }) }), _jsx(TableBody, { children: rows.length === 0 ? (_jsx(TableRow, { children: _jsx(TableCell, { colSpan: columns.length, align: "center", children: _jsx(Typography, { variant: "body2", color: "text.secondary", sx: { py: 2 }, children: emptyText }) }) })) : (rows.map((row, rowIndex) => {
                        const key = getRowId
                            ? getRowId(row, rowIndex)
                            : row['id'] != null
                                ? row['id']
                                : rowIndex;
                        return (_jsx(TableRow, { hover: enableHover, onClick: onRowClick ? (e) => onRowClick(e, row, rowIndex) : undefined, onDoubleClick: onRowDoubleClick ? (e) => onRowDoubleClick(e, row, rowIndex) : undefined, sx: {
                                ...(hasRowHandler ? { cursor: 'pointer' } : {}),
                                ...(striped && rowIndex % 2 === 1 ? { backgroundColor: 'grey.50' } : {}),
                                ...(enableHover ? { '&:hover': { backgroundColor: 'grey.100' } } : {}),
                            }, children: columns.map((col) => {
                                const effectiveWrap = col.wrap ?? tableWrap;
                                return (_jsx(TableCell, { align: col.align ?? 'left', sx: { ...getWrapSx(effectiveWrap, col.width), borderBottom: '1px solid', borderColor: 'divider' }, children: renderCell(col, row, rowIndex) }, col.key));
                            }) }, key));
                    })) })] }) }));
}
export const IpsTable = forwardRef(IpsTableBase);
IpsTable.displayName = 'IpsTable';
