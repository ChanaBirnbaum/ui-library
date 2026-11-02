import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import MuiTableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
export function ActionCell({ row, onEdit, onStartInlineEdit, onDeleteRequest, onSaveInline, onCancelEdit, isEditing, hasInlineEdit, customActions = [], cellSx, width, }) {
    const visibleActions = customActions.filter((a) => !a.isVisible || a.isVisible(row));
    return (_jsx(MuiTableCell, { align: "right", sx: { whiteSpace: 'nowrap', width, maxWidth: width, ...cellSx }, onClick: (e) => e.stopPropagation(), children: _jsx(Box, { sx: { display: 'flex', gap: 0.5, justifyContent: 'flex-end' }, children: isEditing ? (_jsxs(_Fragment, { children: [_jsx(Tooltip, { title: "\u05E9\u05DE\u05D5\u05E8", children: _jsx(IconButton, { size: "small", color: "primary", onClick: onSaveInline, children: _jsx(SaveIcon, { fontSize: "small" }) }) }), _jsx(Tooltip, { title: "\u05D1\u05D9\u05D8\u05D5\u05DC", children: _jsx(IconButton, { size: "small", onClick: onCancelEdit, children: _jsx(CloseIcon, { fontSize: "small" }) }) })] })) : (_jsxs(_Fragment, { children: [(hasInlineEdit || onEdit) && (_jsx(Tooltip, { title: "\u05E2\u05E8\u05D9\u05DB\u05D4", children: _jsx(IconButton, { size: "small", onClick: () => hasInlineEdit ? onStartInlineEdit?.() : onEdit?.(row), children: _jsx(EditIcon, { fontSize: "small" }) }) })), onDeleteRequest && (_jsx(Tooltip, { title: "\u05DE\u05D7\u05D9\u05E7\u05D4", children: _jsx(IconButton, { size: "small", color: "error", onClick: () => onDeleteRequest(row), children: _jsx(DeleteIcon, { fontSize: "small" }) }) })), visibleActions.map((action) => (_jsx(Tooltip, { title: action.label, children: _jsx(IconButton, { size: "small", color: action.variant === 'danger' ? 'error' : 'default', onClick: () => action.onClick(row), children: action.icon }) }, action.key)))] })) }) }));
}
