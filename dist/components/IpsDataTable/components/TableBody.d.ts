import { default as React } from 'react';
import { Table, RowData } from '@tanstack/react-table';
import { VirtualItem } from '@tanstack/react-virtual';
import { ActionDef, EditingState, CellOverflow } from '../IpsDataTable.types';

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
    /** Virtualizer ref callback — lets rows report their real (wrapped) height */
    measureElement?: (node: Element | null) => void;
    /** Table-level cell overflow mode, forwarded to every data cell */
    cellOverflow?: CellOverflow;
    /** Widths measured by the auto-fit pass, keyed by column id */
    autoWidths?: Record<string, number>;
}
export declare function TableBody<T extends RowData>({ table, editingState, onEditValueChange, onStartInlineEdit, onSaveInline, onCancelEdit, onEdit, onDeleteRequest, expandedContent, customActions, hasInlineEdit, hasActionColumn, variant, cellSx, renderEmptyState, isLoading, onRowClick, virtualItems, paddingTop, paddingBottom, measureElement, cellOverflow, autoWidths, }: TableBodyProps<T>): React.JSX.Element;
