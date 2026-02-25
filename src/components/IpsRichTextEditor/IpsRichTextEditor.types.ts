import type React from 'react'
import type { SxProps, Theme } from '@mui/material/styles'
import type { IpsRteToolbarConfig } from './IpsRteToolbar.types'

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

  // ─── Style ───────────────────────────────────────────────────────────────
  /** MUI sx override on the outer wrapper Box. */
  sx?: SxProps<Theme>
  /** Extra className on the root wrapper element. */
  className?: string
}
