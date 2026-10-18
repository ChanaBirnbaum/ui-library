import { default as React } from 'react';
import { Cell, RowData } from '@tanstack/react-table';
import { CellOverflow } from '../IpsDataTable.types';

export interface DataCellProps<T extends RowData> {
    cell: Cell<T, unknown>;
    isEditing: boolean;
    editValue: unknown;
    onEditValueChange: (columnId: string, value: unknown) => void;
    onActivateEdit?: () => void;
    onCommit?: () => void;
    onCancel?: () => void;
    cellSx?: object;
    /** Table-level overflow mode; `meta.overflow` on the column wins over it */
    cellOverflow?: CellOverflow;
    /** Width measured by the auto-fit pass, when this column had to be capped */
    autoWidth?: number;
}
export declare function DataCell<T extends RowData>({ cell, isEditing, editValue, onEditValueChange, onActivateEdit, onCommit, onCancel, cellSx, cellOverflow, autoWidth, }: DataCellProps<T>): React.JSX.Element;
