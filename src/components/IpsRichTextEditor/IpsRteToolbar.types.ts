// ─── Toolbar item identifiers ─────────────────────────────────────────────────

export type IpsRteToolbarItem =
  | 'bold' | 'italic' | 'underline' | 'strike'
  | 'h1'   | 'h2'     | 'h3'
  | 'bulletList' | 'orderedList' | 'blockquote'
  | 'link' | 'image' | 'file'
  | 'alignLeft' | 'alignCenter' | 'alignRight' | 'alignJustify'
  | 'textColor' | 'bgColor'
  | 'rtl'  | 'ltr'
  | 'undo' | 'redo' | 'clearFormat'
  | 'insertTable'

// ─── Group = one cluster of buttons separated by a Divider ───────────────────

export type IpsRteToolbarGroup = {
  items: IpsRteToolbarItem[]
}

// ─── Full toolbar config ──────────────────────────────────────────────────────

export interface IpsRteToolbarConfig {
  groups: IpsRteToolbarGroup[]
}

// ─── Default toolbar — Gmail-style, 8 groups ─────────────────────────────────

export const DEFAULT_TOOLBAR: IpsRteToolbarConfig = {
  groups: [
    { items: ['bold', 'italic', 'underline', 'strike'] },
    { items: ['h1', 'h2', 'h3'] },
    { items: ['bulletList', 'orderedList', 'blockquote'] },
    { items: ['link', 'image', 'file'] },
    { items: ['alignLeft', 'alignCenter', 'alignRight', 'alignJustify'] },
    { items: ['textColor', 'bgColor'] },
    { items: ['rtl', 'ltr'] },
    { items: ['undo', 'redo', 'clearFormat'] },
    { items: ['insertTable'] },
  ],
}
