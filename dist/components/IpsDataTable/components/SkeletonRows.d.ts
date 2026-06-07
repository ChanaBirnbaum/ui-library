import { default as React } from 'react';

export interface SkeletonRowsProps {
    rowCount?: number;
    columnCount: number;
    cellSx?: object;
}
export declare function SkeletonRows({ rowCount, columnCount, cellSx }: SkeletonRowsProps): React.JSX.Element;
