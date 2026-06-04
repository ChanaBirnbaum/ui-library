import { default as React } from 'react';
import { Table, RowData } from '@tanstack/react-table';

export interface TableHeaderProps<T extends RowData> {
    table: Table<T>;
    showPerColumnFilter: boolean;
    cellSx?: object;
}
export declare function TableHeader<T extends RowData>({ table, showPerColumnFilter, cellSx, }: TableHeaderProps<T>): React.JSX.Element;
