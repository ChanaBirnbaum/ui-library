import { default as React } from 'react';
import { Cell, RowData } from '@tanstack/react-table';

export interface DataCellProps<T extends RowData> {
    cell: Cell<T, unknown>;
    isEditing: boolean;
    editValue: unknown;
    onEditValueChange: (columnId: string, value: unknown) => void;
    onActivateEdit?: () => void;
    onCommit?: () => void;
    onCancel?: () => void;
    cellSx?: object;
}
export declare function DataCell<T extends RowData>({ cell, isEditing, editValue, onEditValueChange, onActivateEdit, onCommit, onCancel, cellSx, }: DataCellProps<T>): React.JSX.Element;
