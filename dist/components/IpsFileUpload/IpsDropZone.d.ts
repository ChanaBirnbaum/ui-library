import React from 'react';
import type { IpsDropZoneProps } from './IpsFileUpload.types';
export declare function IpsDropZone({ onFilesAdded, camera, screenshot, scan, accept, multiple, disabled, containerId, separatorLabel, }: IpsDropZoneProps & {
    containerId?: string;
    screenshot?: boolean;
}): React.JSX.Element;
export declare namespace IpsDropZone {
    var displayName: string;
}
