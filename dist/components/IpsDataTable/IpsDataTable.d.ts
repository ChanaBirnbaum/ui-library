import { default as React } from 'react';
import { flexRender, RowData } from '@tanstack/react-table';
import { IpsDataTableProps } from './IpsDataTable.types';

export declare function IpsDataTable<T extends RowData>(props: IpsDataTableProps<T>): React.JSX.Element;
export { flexRender };
