import { default as React } from 'react';
import { Table, RowData } from '@tanstack/react-table';

export interface TableFooterProps<T extends RowData> {
    table: Table<T>;
    totalRows: number;
    pageSizeOptions?: number[];
    showTotal?: boolean;
    colSpan: number;
}
export declare function TableFooter<T extends RowData>({ table, totalRows, pageSizeOptions, showTotal, colSpan, }: TableFooterProps<T>): React.JSX.Element;
