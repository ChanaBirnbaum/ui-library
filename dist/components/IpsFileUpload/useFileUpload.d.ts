import { IpsFileUploadProps, FileWithMeta } from './IpsFileUpload.types';

export declare function useFileUpload(props: IpsFileUploadProps): {
    files: FileWithMeta[];
    addFiles: (newFiles: File[]) => void;
    removeFile: (target: File) => void;
    clearAll: () => void;
    saveFiles: () => Promise<void>;
    loading: boolean;
    canSave: boolean;
};
