import { ColumnDef, RowData, SortingState, Row, Table } from '@tanstack/react-table';
import { ReactNode, MouseEvent } from 'react';
import { SxProps, Theme } from '@mui/material/styles';

declare module '@tanstack/react-table' {
    interface ColumnMeta<TData extends RowData, TValue> {
        /** Enable inline editing for this column */
        editable?: boolean | EditableConfig;
        /** Fixed column width (px or %) */
        width?: number | string;
        /** Allow drag-to-resize */
        resizable?: boolean;
        /** Custom cell renderer (read mode) */
        renderCell?: (value: TValue, row: TData) => ReactNode;
        /** Custom cell renderer (edit mode) */
        renderEditCell?: (value: TValue, onChange: (v: TValue) => void) => ReactNode;
        /** Text alignment inside the cell */
        align?: 'start' | 'center' | 'end';
        /** Sticky column side */
        frozen?: 'left' | 'right';
    }
}
export type { ColumnDef, SortingState, Row, Table, RowData };
export interface SelectOption {
    value: string | number;
    label: string;
}
export interface EditableConfig {
    type: 'text' | 'number' | 'select' | 'date';
    options?: SelectOption[];
    validate?: (val: unknown) => string | true;
    mode?: 'click' | 'dblclick';
}
export interface ActionDef<T> {
    key: string;
    label: string;
    icon: ReactNode;
    onClick: (row: T) => void;
    isVisible?: (row: T) => boolean;
    variant?: 'default' | 'danger';
}
export interface PaginationConfig {
    pageSize?: number;
    pageSizeOptions?: number[];
    showTotal?: boolean;
}
export interface FilterConfig {
    global?: boolean;
    perColumn?: boolean;
}
export interface IpsDataTableProps<T extends RowData> {
    data: T[];
    columns: ColumnDef<T>[];
    /** Custom content rendered inside an expanded row */
    expandedContent?: (row: T) => ReactNode;
    /** External edit action (opens form, navigates, etc.) */
    onEdit?: (row: T) => void;
    /** Delete callback — triggers confirmation dialog automatically */
    onDelete?: (row: T) => void;
    /** Inline save callback — activates inline editing mode */
    onSave?: (original: T, updated: T) => Promise<void> | void;
    customActions?: ActionDef<T>[];
    pagination?: PaginationConfig | false;
    sorting?: boolean | SortingState;
    filtering?: boolean | FilterConfig;
    isLoading?: boolean;
    emptyState?: ReactNode;
    stickyHeader?: boolean;
    variant?: 'default' | 'bordered' | 'striped';
    size?: 'sm' | 'md' | 'lg';
    sx?: SxProps<Theme>;
    /** Callback fired when a row is clicked */
    onRowClick?: (row: T, event: MouseEvent<HTMLTableRowElement>) => void;
    /** Show a checkbox column for multi-row selection */
    checkboxSelection?: boolean;
    /** Called with the current array of selected row objects whenever selection changes */
    onSelectionChange?: (selectedRows: T[]) => void;
    /** Derive a stable string ID from a row — required when checkboxSelection is true and rows lack an `id` field */
    getRowId?: (row: T) => string;
    /** Constrain the table container height and enable vertical scroll (also required for virtualScroll) */
    maxHeight?: number | string;
    /** Render only visible rows using @tanstack/react-virtual — set maxHeight too */
    virtualScroll?: boolean;
}
export interface ExpandedRowProps {
    row?: unknown;
    subData?: unknown[];
    subColumns?: SubColumnDef[];
    customContent?: ReactNode;
    title?: string;
    indent?: number;
}
/** Simplified column definition used in ExpandedRow sub-tables */
export interface SubColumnDef {
    id: string;
    header: string;
    accessorKey?: string;
    renderCell?: (value: unknown, row: unknown) => ReactNode;
    align?: 'left' | 'center' | 'right';
    width?: number | string;
}
export interface EditingState {
    rowId: string | null;
    values: Record<string, unknown>;
}
