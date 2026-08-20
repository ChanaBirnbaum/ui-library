import { default as React } from 'react';
import { IpsTableProps, IpsTableRow } from './IpsTable.types';

/** Generic interface that preserves Row type parameter and exposes displayName */
interface IpsTableComponent {
    <Row extends IpsTableRow>(props: IpsTableProps<Row> & {
        ref?: React.Ref<HTMLDivElement>;
    }): React.ReactElement | null;
    displayName?: string;
}
export declare const IpsTable: IpsTableComponent;
export {};
