export type IpsRteToolbarItem = 'bold' | 'italic' | 'underline' | 'strike' | 'h1' | 'h2' | 'h3' | 'bulletList' | 'orderedList' | 'blockquote' | 'link' | 'image' | 'file' | 'alignLeft' | 'alignCenter' | 'alignRight' | 'alignJustify' | 'textColor' | 'bgColor' | 'rtl' | 'ltr' | 'undo' | 'redo' | 'clearFormat' | 'insertTable';
export type IpsRteToolbarGroup = {
    items: IpsRteToolbarItem[];
};
export interface IpsRteToolbarConfig {
    groups: IpsRteToolbarGroup[];
}
export declare const DEFAULT_TOOLBAR: IpsRteToolbarConfig;
