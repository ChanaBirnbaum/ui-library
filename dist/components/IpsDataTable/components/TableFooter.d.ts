import { default as React } from 'react';
import { Table, RowData } from '@tanstack/react-table';

export interface TableFooterProps<T extends RowData> {
    table: Table<T>;
    totalRows: number;
    pageSizeOptions?: number[];
    showTotal?: boolean;
    colSpan: number;
    /**
     * Render the pagination bar on its own instead of wrapping it in a
     * `<tfoot>`. Used by IpsDataTable to keep it outside the scroll area so it
     * stays visible and never overlaps the last row.
     */
    standalone?: boolean;
}
export declare function TableFooter<T extends RowData>({ table, totalRows, pageSizeOptions, showTotal, colSpan, standalone, }: TableFooterProps<T>): React.JSX.Element;
