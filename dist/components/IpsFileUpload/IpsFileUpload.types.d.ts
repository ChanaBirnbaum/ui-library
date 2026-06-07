import { SxProps, Theme } from '@mui/material';

export interface UploadResult {
    name: string;
    path: string;
}
export interface IpsFileUploadProps {
    /** Current environment (dev/staging/prod) — used to build SharePoint URL */
    sviva: string;
    /** SharePoint site name — used as upload target */
    system: string;
    /** Extra metadata uploaded alongside each file */
    uploadParams?: Record<string, string>;
    /** Unique container ID for Dynamsoft DWT (scan feature) */
    containerId?: string;
    /** Show "Use Camera" button */
    camera?: boolean;
    /** Show "Screenshot" button — captures screen region (like Win+Shift+S) */
    screenshot?: boolean;
    /** Show "Scan Document" button (Dynamsoft DWT or camera fallback) */
    scan?: boolean;
    /** Async validation before save — return true to proceed, false to block */
    onBeforeSave?: () => Promise<boolean>;
    /** Called with uploaded file names + SharePoint paths on success */
    onSaveSuccess?: (result: UploadResult[]) => void;
    /** Called when upload fails */
    onSaveError?: (error: unknown) => void;
    /** CSS class on outer container */
    className?: string;
    /** Override upload method/endpoint */
    uploadMethod?: string;
    /** Max file size in MB — default: 10 */
    maxFileSizeMB?: number;
    /** Accepted MIME types or extensions e.g. ["image/*", ".pdf"] */
    accept?: string[];
    /** Allow multiple file selection — default: true */
    multiple?: boolean;
    /** Disable all upload interactions */
    disabled?: boolean;
    /** MUI sx override on outer Box */
    sx?: SxProps<Theme>;
}
export interface IpsFileItemProps {
    file: File;
    hasError?: boolean;
    errorMessage?: string;
    onDelete: (file: File) => void;
}
export interface IpsDropZoneProps {
    onFilesAdded: (files: File[]) => void;
    camera?: boolean;
    screenshot?: boolean;
    scan?: boolean;
    accept?: string[];
    multiple?: boolean;
    disabled?: boolean;
    isDragOver?: boolean;
}
export interface FileWithMeta {
    file: File;
    hasError: boolean;
    errorMessage?: string;
}
