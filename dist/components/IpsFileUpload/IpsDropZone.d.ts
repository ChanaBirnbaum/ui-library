import { default as React } from 'react';
import { IpsDropZoneProps } from './IpsFileUpload.types';

export declare function IpsDropZone({ onFilesAdded, camera, screenshot, scan, accept, multiple, disabled, containerId, }: IpsDropZoneProps & {
    containerId?: string;
    screenshot?: boolean;
}): React.JSX.Element;
export declare namespace IpsDropZone {
    var displayName: string;
}
