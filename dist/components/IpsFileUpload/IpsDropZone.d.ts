import { IpsDropZoneProps } from './IpsFileUpload.types';

export declare function IpsDropZone({ onFilesAdded, camera, screenshot, scan, accept, multiple, disabled, containerId, }: IpsDropZoneProps & {
    containerId?: string;
    screenshot?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export declare namespace IpsDropZone {
    var displayName: string;
}
