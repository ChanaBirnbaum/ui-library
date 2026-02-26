interface ScanDialogProps {
    open: boolean;
    onClose: () => void;
    onScan: (file: File) => void;
    containerId?: string;
}
interface DynamsoftWebTWAIN {
    AcquireImage: () => void;
    CloseSource: () => void;
    SelectSourceAsync: () => Promise<void>;
    OpenSource: () => void;
    RegisterEvent: (name: string, fn: (...args: unknown[]) => void) => void;
    GetImageURL: (idx: number) => string;
    HowManyImagesInBuffer: number;
    ConvertToBlob: (indices: number[], type: number, successCb: (result: Blob) => void, failCb: (idx: number, type: number, msg: string) => void) => void;
    EnumDWT_ImageType: {
        IT_PNG: number;
    };
}
declare global {
    interface Window {
        Dynamsoft?: {
            DWT: {
                Load: () => void;
                GetWebTwain: (id: string) => DynamsoftWebTWAIN | null;
                RegisterEvent: (name: string, fn: () => void) => void;
                ProductKey?: string;
            };
        };
    }
}
export declare function ScanDialog({ open, onClose, onScan, containerId }: ScanDialogProps): import("react/jsx-runtime").JSX.Element;
export {};
