import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import MuiTableBody from '@mui/material/TableBody';
import MuiTableRow from '@mui/material/TableRow';
import MuiTableCell from '@mui/material/TableCell';
import { flexRender } from '@tanstack/react-table';
import { DataCell } from './DataCell';
import { ActionCell } from './ActionCell';
export function TableBody({ table, editingState, onEditValueChange, onStartInlineEdit, onSaveInline, onCancelEdit, onEdit, onDeleteRequest, expandedContent, customActions = [], hasInlineEdit, hasActionColumn, variant, cellSx, renderEmptyState, isLoading, onRowClick, virtualItems, paddingTop = 0, paddingBottom = 0, measureElement, cellOverflow = 'wrap', autoWidths, }) {
    const allRows = table.getRowModel().rows;
    const totalColumns = table.getVisibleLeafColumns().length;
    if (!isLoading && allRows.length === 0) {
        return (_jsx(MuiTableBody, { children: _jsx(MuiTableRow, { children: _jsx(MuiTableCell, { colSpan: totalColumns, align: "center", sx: { py: 6, color: 'text.secondary', border: 'none' }, children: renderEmptyState() }) }) }));
    }
    const displayRows = virtualItems
        ? virtualItems
            .map((vi) => allRows[vi.index])
            .filter((r) => !!r)
        : allRows;
    return (_jsxs(MuiTableBody, { children: [paddingTop > 0 && (_jsx(MuiTableRow, { children: _jsx(MuiTableCell, { colSpan: totalColumns, sx: { p: 0, border: 'none', height: paddingTop } }) })), displayRows.map((row, displayIdx) => {
                const rowIndex = virtualItems ? virtualItems[displayIdx].index : displayIdx;
                const isEditing = editingState.rowId === row.id;
                const isExpanded = row.getIsExpanded();
                const isEven = rowIndex % 2 === 0;
                const rowSx = {
                    backgroundColor: variant === 'striped' && !isEven ? 'grey.50' : undefined,
                    '&:hover': { backgroundColor: 'grey.100' },
                    cursor: onRowClick ? 'pointer' : undefined,
                    ...(isExpanded ? { backgroundColor: '#EFF6FF' } : {}),
                    ...(isEditing
                        ? { outline: '2px solid', outlineColor: 'primary.main', outlineOffset: '-2px' }
                        : {}),
                };
                return (_jsxs(React.Fragment, { children: [_jsx(MuiTableRow, { sx: rowSx, "data-index": virtualItems ? rowIndex : undefined, ref: virtualItems ? measureElement : undefined, onClick: onRowClick ? (e) => onRowClick(row.original, e) : undefined, children: row.getVisibleCells().map((cell) => {
                                const colId = cell.column.id;
                                if (colId === '_select' || colId === '_expand') {
                                    const controlWidth = colId === '_select' ? 40 : 48;
                                    return (_jsx(MuiTableCell, { 
                                        // maxWidth pins the column under a fixed table layout.
                                        sx: { width: controlWidth, maxWidth: controlWidth, p: 0.5 }, children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id));
                                }
                                if (colId === '_actions') {
                                    return (_jsx(ActionCell, { row: row.original, onEdit: onEdit, onStartInlineEdit: () => onStartInlineEdit(row.id), onDeleteRequest: onDeleteRequest, onSaveInline: () => onSaveInline(row.id), onCancelEdit: onCancelEdit, isEditing: isEditing, hasInlineEdit: hasInlineEdit, customActions: customActions, cellSx: cellSx, width: cell.column.columnDef.meta?.width }, cell.id));
                                }
                                return (_jsx(DataCell, { cell: cell, isEditing: isEditing, editValue: editingState.values[colId], onEditValueChange: onEditValueChange, onActivateEdit: hasInlineEdit ? () => onStartInlineEdit(row.id) : undefined, onCommit: () => onSaveInline(row.id), onCancel: onCancelEdit, cellSx: cellSx, cellOverflow: cellOverflow, autoWidth: autoWidths?.[colId] }, cell.id));
                            }) }), isExpanded && expandedContent && (_jsx(MuiTableRow, { children: _jsx(MuiTableCell, { colSpan: totalColumns, sx: { p: 0 }, children: expandedContent(row.original) }) }))] }, row.id));
            }), paddingBottom > 0 && (_jsx(MuiTableRow, { children: _jsx(MuiTableCell, { colSpan: totalColumns, sx: { p: 0, border: 'none', height: paddingBottom } }) }))] }));
}
