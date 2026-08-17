import { default as React } from 'react';
import { SxProps, Theme } from '@mui/material/styles';

export type IpsTableWrap = 'ellipsis' | 'wrap' | 'nowrap';
/** Base constraint for row data objects */
export type IpsTableRow = Record<string, unknown>;
export interface IpsTableColumn<Row extends IpsTableRow = IpsTableRow> {
    /** Row data key to read the cell value from */
    key: string;
    /** Header label displayed in the column */
    label: React.ReactNode;
    /** Optional fixed column width */
    width?: number | string;
    /** Cell alignment — applied to both header and body cells (default 'left') */
    align?: 'left' | 'right' | 'center';
    /** Per-column text overflow; overrides the table-level wrap prop */
    wrap?: IpsTableWrap;
    /** Built-in cell renderer shortcut; ignored when render is provided */
    type?: 'text' | 'link' | 'image';
    /** type='link' only — derive href from row data (defaults to the cell value) */
    href?: (row: Row) => string;
    /** type='link' only — link target; '_blank' auto-adds rel="noopener noreferrer" */
    linkTarget?: '_self' | '_blank';
    /** type='image' only — derive src from row data (defaults to the cell value) */
    imageSrc?: (row: Row) => string;
    /** type='image' only — image presentation options */
    imageProps?: {
        width?: number | string;
        height?: number | string;
        alt?: string;
        /** Render as a circular avatar */
        rounded?: boolean;
    };
    /** Full custom cell renderer; takes precedence over type */
    render?: (value: unknown, row: Row, rowIndex: number) => React.ReactNode;
}
export interface IpsTableProps<Row extends IpsTableRow = IpsTableRow> {
    /** Array of column definitions (required) */
    columns: IpsTableColumn<Row>[];
    /** Array of row data objects (required) */
    rows: Row[];
    /** Fix the header on scroll — only pins when maxHeight is also set */
    stickyHeader?: boolean;
    /** Constrain container height and enable vertical scroll */
    maxHeight?: number | string;
    /** Alternate row background colors — odd rows (1-based) get grey[50] */
    striped?: boolean;
    /** Reduce cell padding via MUI size="small" */
    dense?: boolean;
    /** Text shown centered when rows array is empty */
    emptyText?: string;
    /** Default text-overflow mode for all columns (per-column col.wrap overrides) */
    wrap?: IpsTableWrap;
    /** Hover highlight; auto-enabled when onRowClick or onRowDoubleClick is set */
    hover?: boolean;
    /** Single-click on a row */
    onRowClick?: (event: React.MouseEvent<HTMLTableRowElement>, row: Row, rowIndex: number) => void;
    /** Double-click on a row */
    onRowDoubleClick?: (event: React.MouseEvent<HTMLTableRowElement>, row: Row, rowIndex: number) => void;
    /** Stable React key per row; defaults to row.id then the array index */
    getRowId?: (row: Row, index: number) => string | number;
    /** MUI sx override on the TableContainer */
    sx?: SxProps<Theme>;
    /** Extra className on the root TableContainer */
    className?: string;
}
