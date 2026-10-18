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
        /** Overrides the table-level `cellOverflow` for this column only */
        overflow?: CellOverflow;
        /** Sticky column side */
        frozen?: 'left' | 'right';
    }
}
export type { ColumnDef, SortingState, Row, Table, RowData };
export interface SelectOption {
    value: string | number;
    label: string;
}
/**
 * How a cell handles content that is wider than its column.
 * - `wrap`     — text wraps onto more lines and the row grows (default).
 * - `ellipsis` — one line, clipped with `…`, full text in a tooltip on hover.
 *
 * `ellipsis` needs no column configuration: the table measures each column's
 * natural content width and fills the available space from the narrowest
 * column up, so short columns are served in full and only the columns that
 * are still too wide split what is left and get clipped. Declaring
 * `meta.width` pins a column and takes it out of that sharing; declaring
 * `meta.overflow: 'ellipsis'` forces a column to clip regardless.
 */
export type CellOverflow = 'wrap' | 'ellipsis';
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
    /**
     * How cells handle content wider than their column — see {@link CellOverflow}.
     * `'ellipsis'` auto-fits the columns to their content and the container, and
     * clips only the ones that cannot fit, with a tooltip carrying the full text.
     * No per-column width is required. Default: `'wrap'`.
     */
    cellOverflow?: CellOverflow;
    /**
     * Cap the total height of the table (header + scrolling body + pagination
     * bar) and scroll the body inside it; the sticky header turns on
     * automatically. Not required for a fixed-height layout — the component
     * already fills the height it is given (via `sx={{ height }}` or a
     * fixed-height parent) and scrolls the body instead of overflowing.
     */
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
