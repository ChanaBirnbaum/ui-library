import { IpsFileUploadProps } from '../IpsFileUpload/IpsFileUpload.types';

/**
 * The upload props are those of IpsFileUpload, and they behave exactly the same
 * (the same upload hook sends the file to SharePoint). One file only.
 */
export type IpsFileUploadMobileProps = Pick<IpsFileUploadProps, 'sviva' | 'system' | 'uploadParams' | 'uploadMethod' | 'maxFileSizeMB' | 'accept' | 'camera' | 'disabled' | 'onBeforeSave' | 'onSaveSuccess' | 'onSaveError' | 'className'> & {
    /** Text of the field before a file is chosen. Default: "בחירת קובץ" */
    placeholder?: string;
    /** Shown next to the file name while it uploads. Default: "מעלה…" */
    uploadingText?: string;
    /** Accessible name of the camera button (shown when `camera` is set). Default: "מצלמה" */
    cameraButtonLabel?: string;
    /** Error border on the field (e.g. a required file is missing) */
    error?: boolean;
    /** id of the field button, so a form can move focus to it */
    id?: string;
};
