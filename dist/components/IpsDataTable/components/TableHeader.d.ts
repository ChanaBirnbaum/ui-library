import { default as React } from 'react';
import { Table, RowData } from '@tanstack/react-table';
import { CellOverflow } from '../IpsDataTable.types';

export interface TableHeaderProps<T extends RowData> {
    table: Table<T>;
    showPerColumnFilter: boolean;
    cellSx?: object;
    /** In `ellipsis` mode long header labels are clipped with a tooltip too */
    cellOverflow?: CellOverflow;
    /** Widths measured by the auto-fit pass, keyed by column id */
    autoWidths?: Record<string, number>;
}
export declare function TableHeader<T extends RowData>({ table, showPerColumnFilter, cellSx, cellOverflow, autoWidths, }: TableHeaderProps<T>): React.JSX.Element;
