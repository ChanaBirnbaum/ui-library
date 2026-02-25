import { Editor } from '@tiptap/core';
import { IpsRteToolbarConfig } from './IpsRteToolbar.types';

export interface IpsRteToolbarProps {
    /** Tiptap Editor instance from useEditor(). Render only when non-null. */
    editor: Editor;
    /** Toolbar configuration (groups + items) */
    config: IpsRteToolbarConfig;
}
export declare function IpsRteToolbar({ editor, config }: IpsRteToolbarProps): import("react/jsx-runtime").JSX.Element;
