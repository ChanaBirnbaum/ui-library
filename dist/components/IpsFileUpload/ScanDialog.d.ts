/**
 * ScanDialog — Dynamsoft Web TWAIN integration
 *
 * ## הוראות התקנה למפתחים
 *
 * ### 1. התקנת הספרייה
 * ```bash
 * npm install dwt
 * ```
 * או הוספת script tag ל-index.html:
 * ```html
 * <script src="https://unpkg.com/dwt/dist/dynamsoft.webtwain.min.js"></script>
 * ```
 *
 * ### 2. הגדרת Product Key
 * ```ts
 * // ב-index.tsx / main.tsx לפני ReactDOM.render:
 * window.Dynamsoft.DWT.ProductKey = 'YOUR_PRODUCT_KEY'
 * window.Dynamsoft.DWT.ResourcesPath = '/node_modules/dwt/dist'
 * ```
 *
 * ### 3. שימוש בקומפוננטה
 * ```tsx
 * <IpsFileUpload
 *   sviva="prod"
 *   system="my-site"
 *   scan                          // מציג כפתור סריקה
 *   containerId="dwt-container"   // ID ייחודי לכל instance של DWT
 * />
 * ```
 *
 * ### 4. דרישות סביבה
 * - Windows בלבד (DWT תומך בסורקי TWAIN/WIA)
 * - Chrome / Edge מומלצים
 * - HTTPS בסביבת production
 *
 * @see https://www.dynamsoft.com/web-twain/docs/
 */
import React from 'react';
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
export declare function ScanDialog({ open, onClose, onScan, containerId }: ScanDialogProps): React.JSX.Element;
export {};
