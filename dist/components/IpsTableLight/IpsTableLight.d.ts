import { default as React } from 'react';
import { IpsTableLightProps, IpsTableLightRow } from './IpsTableLight.types';

/** Generic interface that preserves Row type parameter and exposes displayName */
interface IpsTableLightComponent {
    <Row extends IpsTableLightRow>(props: IpsTableLightProps<Row> & {
        ref?: React.Ref<HTMLDivElement>;
    }): React.ReactElement | null;
    displayName?: string;
}
export declare const IpsTableLight: IpsTableLightComponent;
export {};
