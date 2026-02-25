import type React from 'react'
import type { SxProps, Theme } from '@mui/material/styles'
import type * as Y from 'yjs'
import type { IpsRteToolbarConfig } from './IpsRteToolbar.types'

// ─── Collaboration config ─────────────────────────────────────────────────────

export interface IpsRichTextEditorCollaborationConfig {
  /**
   * A Y.js document shared across all clients that should edit together.
   * Create it once (`new Y.Doc()`) and pass the same instance to every
   * `IpsRichTextEditor` that should share state — on the same page or across
   * the network via a provider such as `y-websocket` or `@hocuspocus/provider`.
   */
  document: Y.Doc
}

export interface IpsRichTextEditorProps {
  // ─── Controlled mode ──────────────────────────────────────────────────────
  /** Full HTML string (controlled mode). Sync with state externally. */
  value?: string
  /** Called with the full HTML string on every editor change. */
  onChange?: (html: string) => void

  // ─── Uncontrolled mode ────────────────────────────────────────────────────
  /** Initial HTML — used only on first mount (uncontrolled mode). */
  defaultValue?: string

  // ─── Editor behavior ──────────────────────────────────────────────────────
  /** Placeholder text shown when the editor content is empty. */
  placeholder?: string
  /**
   * Hides the toolbar, sets editor to non-editable and renders as a
   * read-only display block (no border focus ring).
   */
  readOnly?: boolean
  /** Blocks all interaction; applies 50% opacity and cursor:not-allowed. */
  disabled?: boolean

  // ─── Labeling & validation ────────────────────────────────────────────────
  /** Optional label displayed above the editor container. */
  label?: string
  /** Applies error border (theme.palette.error.main). */
  error?: boolean
  /** Helper or error message displayed below the editor. */
  helperText?: string

  // ─── Layout & direction ───────────────────────────────────────────────────
  /**
   * Text direction for the content area.
   * - `auto`  — browser detects per-paragraph based on first strong character (default)
   * - `rtl`   — force right-to-left
   * - `ltr`   — force left-to-right
   */
  dir?: 'rtl' | 'ltr' | 'auto'
  /** Minimum height of the editable content area. Default: 200px. */
  minHeight?: string | number
  /** Maximum height before the content area scrolls. */
  maxHeight?: string | number

  // ─── Toolbar ─────────────────────────────────────────────────────────────
  /**
   * Override which toolbar groups / buttons are shown.
   * Defaults to DEFAULT_TOOLBAR (Gmail-style, 8 groups).
   */
  toolbar?: IpsRteToolbarConfig

  // ─── Events ──────────────────────────────────────────────────────────────
  /** Called when the editor loses focus. */
  onBlur?: (event: React.FocusEvent) => void
  /** Called when the editor gains focus. */
  onFocus?: (event: React.FocusEvent) => void

  // ─── Collaboration ────────────────────────────────────────────────────────
  /**
   * When provided, enables real-time collaborative editing via Y.js.
   * Pass the same `Y.Doc` to every editor instance (local or remote) that
   * should share the same document.  Pair with a network provider
   * (e.g. `y-websocket`) to sync changes across clients.
   *
   * When `collaboration` is active the editor's built-in undo/redo history
   * is replaced by Y.js undo/redo, which is user-aware.
   */
  collaboration?: IpsRichTextEditorCollaborationConfig

  // ─── Style ───────────────────────────────────────────────────────────────
  /** MUI sx override on the outer wrapper Box. */
  sx?: SxProps<Theme>
  /** Extra className on the root wrapper element. */
  className?: string
}
