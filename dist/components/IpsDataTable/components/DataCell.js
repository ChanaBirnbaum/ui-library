import { jsx as _jsx } from "react/jsx-runtime";
import MuiTableCell from '@mui/material/TableCell';
import { flexRender } from '@tanstack/react-table';
import { EditableCell } from './EditableCell';
import { TruncatedText } from './TruncatedText';
import { shouldClip, clipSx, flowSx, clipWidthFor } from './cellOverflow';
export function DataCell({ cell, isEditing, editValue, onEditValueChange, onActivateEdit, onCommit, onCancel, cellSx, cellOverflow = 'wrap', autoWidth, }) {
    const meta = cell.column.columnDef.meta;
    const align = meta?.align ?? 'start';
    const width = meta?.width;
    const overflow = meta?.overflow ?? cellOverflow;
    const editableMeta = meta?.editable;
    const isEditable = !!editableMeta;
    const editConfig = typeof editableMeta === 'object' ? editableMeta : undefined;
    const editMode = editConfig?.mode ?? 'click';
    const interactionProps = isEditable && !isEditing && onActivateEdit
        ? editMode === 'dblclick'
            ? {
                onDoubleClick: (e) => {
                    e.stopPropagation();
                    onActivateEdit();
                },
            }
            : {
                onClick: (e) => {
                    e.stopPropagation();
                    onActivateEdit();
                },
            }
        : {};
    const content = isEditing && isEditable
        ? meta?.renderEditCell
            ? meta.renderEditCell(editValue, (v) => onEditValueChange(cell.column.id, v))
            : (_jsx(EditableCell, { config: editConfig, value: editValue, onChange: (v) => onEditValueChange(cell.column.id, v), onCommit: onCommit, onCancel: onCancel }))
        : meta?.renderCell
            ? meta.renderCell(cell.getValue(), cell.row.original)
            : flexRender(cell.column.columnDef.cell, cell.getContext());
    // Only a column that was given a width budget is clipped — measured by the
    // auto-fit pass or declared on the column — so a single long column shrinks
    // while the short ones keep their natural size.
    const isTruncating = shouldClip(meta, cellOverflow, autoWidth) && !(isEditing && isEditable);
    // The tooltip prefers the raw value, so a custom renderer's markup does not
    // end up in it.
    const rawValue = cell.getValue();
    const body = isTruncating ? (_jsx(TruncatedText, { title: rawValue == null || typeof rawValue === 'object' ? undefined : String(rawValue), children: content })) : (content);
    const overflowSx = isTruncating
        ? clipSx(clipWidthFor(width, autoWidth))
        : flowSx(overflow, width);
    return (_jsx(MuiTableCell, { align: align === 'end' ? 'right' : align === 'center' ? 'center' : 'left', "data-col-id": cell.column.id, sx: {
            verticalAlign: 'middle',
            ...overflowSx,
            cursor: isEditable && !isEditing ? 'pointer' : 'default',
            '&:hover': isEditable && !isEditing ? { backgroundColor: 'action.hover' } : {},
            ...cellSx,
        }, onClick: isEditing ? (e) => e.stopPropagation() : undefined, ...interactionProps, children: body }));
}
