import { default as React } from 'react';
import { Row, RowData } from '@tanstack/react-table';

export interface ExpandCellProps<T extends RowData> {
    row: Row<T>;
}
export declare function ExpandCell<T extends RowData>({ row }: ExpandCellProps<T>): React.JSX.Element;
