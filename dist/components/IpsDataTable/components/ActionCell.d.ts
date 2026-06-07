import { default as React } from 'react';
import { ActionDef } from '../IpsDataTable.types';

export interface ActionCellProps<T> {
    row: T;
    /** External edit handler (no inline edit) */
    onEdit?: (row: T) => void;
    /** Starts inline editing (when onSave is configured) */
    onStartInlineEdit?: () => void;
    onDeleteRequest?: (row: T) => void;
    onSaveInline?: () => Promise<void>;
    onCancelEdit?: () => void;
    isEditing: boolean;
    /** true when the DataTable has an onSave prop — enables inline edit mode */
    hasInlineEdit: boolean;
    customActions?: ActionDef<T>[];
    cellSx?: object;
}
export declare function ActionCell<T>({ row, onEdit, onStartInlineEdit, onDeleteRequest, onSaveInline, onCancelEdit, isEditing, hasInlineEdit, customActions, cellSx, }: ActionCellProps<T>): React.JSX.Element;
