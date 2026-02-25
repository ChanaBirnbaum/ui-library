import React, { forwardRef, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import MuiTypography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import { Color } from '@tiptap/extension-color'
import Highlight from '@tiptap/extension-highlight'
import Placeholder from '@tiptap/extension-placeholder'
import TiptapTypography from '@tiptap/extension-typography'
import Paragraph from '@tiptap/extension-paragraph'
import Collaboration from '@tiptap/extension-collaboration'

import { IpsRteToolbar } from './IpsRteToolbar'
import { DEFAULT_TOOLBAR } from './IpsRteToolbar.types'
import type { IpsRichTextEditorProps } from './IpsRichTextEditor.types'

// ─── Custom Paragraph with `dir` attribute ────────────────────────────────────
// Required so the toolbar's RTL/LTR buttons can call
//   editor.commands.updateAttributes('paragraph', { dir: 'rtl' | 'ltr' })
// and isActive('paragraph', { dir }) works correctly.
const DirectionParagraph = Paragraph.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      dir: {
        default: null,
        renderHTML: (attributes) => {
          if (!attributes.dir) return {}
          return { dir: attributes.dir as string }
        },
        parseHTML: (element) => element.getAttribute('dir'),
      },
    }
  },
})

// ─── Component ────────────────────────────────────────────────────────────────

export const IpsRichTextEditor = forwardRef<HTMLDivElement, IpsRichTextEditorProps>(
  function IpsRichTextEditor(
    {
      value,
      onChange,
      defaultValue,
      placeholder,
      readOnly = false,
      disabled = false,
      label,
      error = false,
      helperText,
      dir = 'auto',
      minHeight = 200,
      maxHeight,
      toolbar = DEFAULT_TOOLBAR,
      onBlur,
      onFocus,
      collaboration,
      sx,
      className,
    },
    ref,
  ) {
    const theme = useTheme()

    // Keep a stable ref to onChange so we don't re-initialize the editor
    // every time the consumer re-renders (avoids cursor-position resets).
    const onChangeRef = useRef(onChange)
    onChangeRef.current = onChange

    // ─── Tiptap editor initialisation ──────────────────────────────────────

    const editor = useEditor({
      extensions: [
        // Disable StarterKit's built-in Paragraph so our DirectionParagraph
        // (which adds the `dir` attribute) is used instead.
        // Disable built-in history when collaboration is active — Y.js undo/redo
        // is provided by the Collaboration extension instead.
        StarterKit.configure({ paragraph: false, ...(collaboration ? { history: false } : {}) }),
        DirectionParagraph,
        Underline,
        Link.configure({ openOnClick: false, autolink: true }),
        Image,
        TextAlign.configure({ types: ['heading', 'paragraph'] }),
        TextStyle,
        Color,
        Highlight.configure({ multicolor: true }),
        Placeholder.configure({ placeholder: placeholder ?? '' }),
        TiptapTypography,
        // Collaboration extension — only when a Y.Doc is supplied
        ...(collaboration ? [Collaboration.configure({ document: collaboration.document })] : []),
      ],
      // Controlled: seed with `value`; Uncontrolled: seed with `defaultValue`.
      content: value !== undefined ? (value ?? '') : (defaultValue ?? ''),
      editable: !readOnly,
      onUpdate: ({ editor: ed }) => {
        onChangeRef.current?.(ed.getHTML())
      },
      onBlur: ({ event }) => {
        onBlur?.(event as unknown as React.FocusEvent)
      },
      onFocus: ({ event }) => {
        onFocus?.(event as unknown as React.FocusEvent)
      },
    })

    // ─── Controlled value sync ──────────────────────────────────────────────
    // Only updates content when the external value differs from what Tiptap
    // already has — preserves undo history and avoids cursor jumps.
    useEffect(() => {
      if (!editor || editor.isDestroyed) return
      if (value === undefined) return // uncontrolled — nothing to sync
      if (editor.getHTML() !== value) {
        editor.commands.setContent(value, false)
      }
    }, [editor, value])

    // ─── Sync readOnly prop ─────────────────────────────────────────────────
    useEffect(() => {
      if (!editor || editor.isDestroyed) return
      editor.setEditable(!readOnly)
    }, [editor, readOnly])

    // ─── Derived style values ───────────────────────────────────────────────
    const borderColor = error
      ? theme.palette.error.main
      : theme.palette.divider

    const focusBorderColor = error
      ? theme.palette.error.main
      : theme.palette.primary.main

    const minHeightCss =
      typeof minHeight === 'number' ? `${minHeight}px` : minHeight
    const maxHeightCss = maxHeight
      ? typeof maxHeight === 'number'
        ? `${maxHeight}px`
        : maxHeight
      : undefined

    // When `dir='auto'`, derive from the MUI theme direction so the editor
    // cursor and placeholder start on the correct side out of the box.
    const effectiveDir: 'rtl' | 'ltr' =
      dir === 'auto' ? (theme.direction as 'rtl' | 'ltr') : dir

    // ─── Render ─────────────────────────────────────────────────────────────

    return (
      <Box
        ref={ref}
        className={`ips-rich-text-editor${className ? ` ${className}` : ''}`}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          opacity: disabled ? 0.5 : 1,
          pointerEvents: disabled ? 'none' : undefined,
          cursor: disabled ? 'not-allowed' : undefined,
          ...sx,
        }}
      >
        {/* ── Optional label ─────────────────────────────────────────── */}
        {label && (
          <MuiTypography
            variant="body2"
            color={error ? 'error' : 'text.secondary'}
            sx={{ mb: 0.5, fontWeight: 500 }}
          >
            {label}
          </MuiTypography>
        )}

        {/* ── Editor frame (content + toolbar below) ─────────────────── */}
        <Box
          sx={{
            border: `2px solid ${borderColor}`,
            borderRadius: 1,
            overflow: 'hidden',
            transition: 'border-color 0.15s',
            '&:focus-within': readOnly ? {} : { borderColor: focusBorderColor },
          }}
        >
          {/* Content area — effectiveDir drives cursor start side */}
          <Box
            className="ips-rte-content"
            dir={effectiveDir}
            sx={{
              minHeight: minHeightCss,
              maxHeight: maxHeightCss,
              overflow: maxHeightCss ? 'auto' : undefined,

              // ProseMirror root element
              '& .ProseMirror': {
                padding: '12px 16px',
                outline: 'none',
                cursor: readOnly ? 'default' : 'text',
                fontFamily: 'inherit',
                minHeight: minHeightCss,
                boxSizing: 'border-box',
                // NOTE: do NOT set `direction` here — stylis-plugin-rtl would flip
                // `direction: rtl` → `direction: ltr`, breaking the cursor position.
                // Instead, `dir={effectiveDir}` on the wrapper Box (HTML attribute)
                // cascades `direction: rtl` to all children via the browser's
                // default UA stylesheet, which stylis does NOT touch.
              },

              // Placeholder — write as LTR source (float:left).
              // stylis-plugin-rtl flips it to float:right in an RTL theme context.
              // If we wrote float:right here, stylis would flip it AGAIN to left — bug!
              '& .ProseMirror p.is-editor-empty:first-of-type::before': {
                content: 'attr(data-placeholder)',
                float: 'left',
                color: theme.palette.text.disabled,
                pointerEvents: 'none',
                height: 0,
              },

              // Hyperlinks
              '& .ProseMirror a': {
                color: theme.palette.primary.main,
                textDecoration: 'underline',
              },

              // Blockquote — write LTR source; stylis flips border/padding in RTL
              '& .ProseMirror blockquote': {
                borderLeft: `3px solid ${theme.palette.grey[400]}`,
                paddingLeft: '12px',
                color: theme.palette.grey[600],
                margin: '0 0 8px',
                fontStyle: 'italic',
              },

              // Inline code
              '& .ProseMirror code': {
                background: theme.palette.grey[100],
                fontFamily: 'monospace',
                padding: '2px 4px',
                borderRadius: '3px',
                fontSize: '0.875em',
              },

              // Headings
              '& .ProseMirror h1': { fontSize: '1.8em', margin: '8px 0' },
              '& .ProseMirror h2': { fontSize: '1.5em', margin: '6px 0' },
              '& .ProseMirror h3': { fontSize: '1.25em', margin: '4px 0' },

              // Lists — write LTR source; stylis flips paddingLeft→paddingRight in RTL
              '& .ProseMirror ul, & .ProseMirror ol': {
                paddingLeft: '1.5em',
                margin: '4px 0',
              },
            }}
          >
            <EditorContent editor={editor} />
          </Box>

          {/* Toolbar — below the content, hidden when readOnly */}
          {!readOnly && editor && (
            <IpsRteToolbar editor={editor} config={toolbar} />
          )}
        </Box>

        {/* ── Helper / error text ─────────────────────────────────────── */}
        {helperText && (
          <MuiTypography
            variant="caption"
            color={error ? 'error' : 'text.secondary'}
            sx={{ mt: 0.5, px: 0.5 }}
          >
            {helperText}
          </MuiTypography>
        )}
      </Box>
    )
  },
)

IpsRichTextEditor.displayName = 'IpsRichTextEditor'
