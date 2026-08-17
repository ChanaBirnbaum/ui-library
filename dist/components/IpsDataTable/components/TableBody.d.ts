import { default as React } from 'react';
import { Table, RowData } from '@tanstack/react-table';
import { VirtualItem } from '@tanstack/react-virtual';
import { ActionDef, EditingState } from '../IpsDataTable.types';

export interface TableBodyProps<T extends RowData> {
    table: Table<T>;
    editingState: EditingState;
    onEditValueChange: (columnId: string, value: unknown) => void;
    onStartInlineEdit: (rowId: string) => void;
    onSaveInline: (rowId: string) => Promise<void>;
    onCancelEdit: () => void;
    onEdit?: (row: T) => void;
    onDeleteRequest?: (row: T) => void;
    expandedContent?: (row: T) => React.ReactNode;
    customActions?: ActionDef<T>[];
    hasInlineEdit: boolean;
    hasActionColumn: boolean;
    variant: 'default' | 'bordered' | 'striped';
    cellSx?: object;
    renderEmptyState: () => React.ReactNode;
    isLoading: boolean;
    onRowClick?: (row: T, event: React.MouseEvent<HTMLTableRowElement>) => void;
    virtualItems?: VirtualItem[];
    paddingTop?: number;
    paddingBottom?: number;
}
export declare function TableBody<T extends RowData>({ table, editingState, onEditValueChange, onStartInlineEdit, onSaveInline, onCancelEdit, onEdit, onDeleteRequest, expandedContent, customActions, hasInlineEdit, hasActionColumn, variant, cellSx, renderEmptyState, isLoading, onRowClick, virtualItems, paddingTop, paddingBottom, }: TableBodyProps<T>): React.JSX.Element;
