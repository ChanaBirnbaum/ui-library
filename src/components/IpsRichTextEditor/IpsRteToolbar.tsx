import React, { useRef } from 'react'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import Divider from '@mui/material/Divider'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { useTheme, alpha } from '@mui/material/styles'
import type { Editor } from '@tiptap/core'

// ─── MUI Icons ────────────────────────────────────────────────────────────────
import FormatBoldIcon               from '@mui/icons-material/FormatBold'
import FormatItalicIcon             from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon         from '@mui/icons-material/FormatUnderlined'
import StrikethroughSIcon           from '@mui/icons-material/StrikethroughS'
import FormatListBulletedIcon       from '@mui/icons-material/FormatListBulleted'
import FormatListNumberedIcon       from '@mui/icons-material/FormatListNumbered'
import FormatQuoteIcon              from '@mui/icons-material/FormatQuote'
import LinkIcon                     from '@mui/icons-material/Link'
import ImageIcon                    from '@mui/icons-material/Image'
import FormatAlignLeftIcon          from '@mui/icons-material/FormatAlignLeft'
import FormatAlignCenterIcon        from '@mui/icons-material/FormatAlignCenter'
import FormatAlignRightIcon         from '@mui/icons-material/FormatAlignRight'
import FormatAlignJustifyIcon       from '@mui/icons-material/FormatAlignJustify'
import FormatColorTextIcon          from '@mui/icons-material/FormatColorText'
import FormatColorFillIcon          from '@mui/icons-material/FormatColorFill'
import FormatTextdirectionRToLIcon  from '@mui/icons-material/FormatTextdirectionRToL'
import FormatTextdirectionLToRIcon  from '@mui/icons-material/FormatTextdirectionLToR'
import UndoIcon                     from '@mui/icons-material/Undo'
import RedoIcon                     from '@mui/icons-material/Redo'
import FormatClearIcon              from '@mui/icons-material/FormatClear'
import AttachFileIcon               from '@mui/icons-material/AttachFile'

import type { IpsRteToolbarConfig, IpsRteToolbarItem } from './IpsRteToolbar.types'

// ─── H1 / H2 / H3 text label (no MUI heading icon exists) ────────────────────

function HeadingIcon({ level }: { level: 1 | 2 | 3 }) {
  return (
    <Typography
      component="span"
      sx={{ fontSize: '0.7rem', fontWeight: 800, lineHeight: 1, letterSpacing: 0 }}
    >
      H{level}
    </Typography>
  )
}

// ─── Props ────────────────────────────────────────────────────────────────────

export interface IpsRteToolbarProps {
  /** Tiptap Editor instance from useEditor(). Render only when non-null. */
  editor: Editor
  /** Toolbar configuration (groups + items) */
  config: IpsRteToolbarConfig
}

// ─── Internal item descriptor ─────────────────────────────────────────────────

interface ToolbarItemDef {
  icon: React.ReactNode
  label: string
  action: () => void
  isActive: boolean
  disabled?: boolean
}

// ─── Component ────────────────────────────────────────────────────────────────

export function IpsRteToolbar({ editor, config }: IpsRteToolbarProps) {
  const theme = useTheme()
  const textColorRef = useRef<HTMLInputElement>(null)
  const bgColorRef   = useRef<HTMLInputElement>(null)
  const imageFileRef = useRef<HTMLInputElement>(null)
  const fileRef      = useRef<HTMLInputElement>(null)

  const activeBg      = alpha(theme.palette.primary.main, 0.15)
  const activeHoverBg = alpha(theme.palette.primary.main, 0.25)

  // Extension commands (setColor, setHighlight, setTextAlign, setLink, etc.)
  // are augmented into @tiptap/core by each extension package at import time.
  // Cast to `any` once here so individual cases stay readable without per-line casts.
   
  const c   = () => editor.chain().focus() as any
   
  const can = editor.can() as any

  // ─── Item factory ──────────────────────────────────────────────────────────

  function getItemDef(item: IpsRteToolbarItem): ToolbarItemDef {
    switch (item) {

      // ── Inline marks ────────────────────────────────────────────────────────
      case 'bold':
        return {
          icon:     <FormatBoldIcon fontSize="small" />,
          label:    'Bold (Ctrl+B)',
          action:   () => c().toggleBold().run(),
          isActive: editor.isActive('bold'),
        }
      case 'italic':
        return {
          icon:     <FormatItalicIcon fontSize="small" />,
          label:    'Italic (Ctrl+I)',
          action:   () => c().toggleItalic().run(),
          isActive: editor.isActive('italic'),
        }
      case 'underline':
        return {
          icon:     <FormatUnderlinedIcon fontSize="small" />,
          label:    'Underline (Ctrl+U)',
          action:   () => c().toggleUnderline().run(),
          isActive: editor.isActive('underline'),
        }
      case 'strike':
        return {
          icon:     <StrikethroughSIcon fontSize="small" />,
          label:    'Strikethrough',
          action:   () => c().toggleStrike().run(),
          isActive: editor.isActive('strike'),
        }

      // ── Headings ────────────────────────────────────────────────────────────
      case 'h1':
        return {
          icon:     <HeadingIcon level={1} />,
          label:    'Heading 1',
          action:   () => c().toggleHeading({ level: 1 }).run(),
          isActive: editor.isActive('heading', { level: 1 }),
        }
      case 'h2':
        return {
          icon:     <HeadingIcon level={2} />,
          label:    'Heading 2',
          action:   () => c().toggleHeading({ level: 2 }).run(),
          isActive: editor.isActive('heading', { level: 2 }),
        }
      case 'h3':
        return {
          icon:     <HeadingIcon level={3} />,
          label:    'Heading 3',
          action:   () => c().toggleHeading({ level: 3 }).run(),
          isActive: editor.isActive('heading', { level: 3 }),
        }

      // ── Lists & blockquote ──────────────────────────────────────────────────
      case 'bulletList':
        return {
          icon:     <FormatListBulletedIcon fontSize="small" />,
          label:    'Bullet list',
          action:   () => c().toggleBulletList().run(),
          isActive: editor.isActive('bulletList'),
        }
      case 'orderedList':
        return {
          icon:     <FormatListNumberedIcon fontSize="small" />,
          label:    'Ordered list',
          action:   () => c().toggleOrderedList().run(),
          isActive: editor.isActive('orderedList'),
        }
      case 'blockquote':
        return {
          icon:     <FormatQuoteIcon fontSize="small" />,
          label:    'Blockquote',
          action:   () => c().toggleBlockquote().run(),
          isActive: editor.isActive('blockquote'),
        }

      // ── Link / image ────────────────────────────────────────────────────────
      case 'link':
        return {
          icon:  <LinkIcon fontSize="small" />,
          label: 'Insert link',
          action: () => {
            const prev = editor.getAttributes('link').href as string | undefined
             
            const url = window.prompt('URL:', prev ?? 'https://')
            if (url === null) return
            if (url === '') {
              c().unsetLink().run()
            } else {
              c().setLink({ href: url }).run()
            }
          },
          isActive: editor.isActive('link'),
        }
      case 'image':
        return {
          icon:   <ImageIcon fontSize="small" />,
          label:  'Insert image',
          action: () => {
            if (imageFileRef.current) {
              imageFileRef.current.value = ''
              imageFileRef.current.click()
            }
          },
          isActive: false,
        }

      case 'file':
        return {
          icon:   <AttachFileIcon fontSize="small" />,
          label:  'Attach file',
          action: () => {
            if (fileRef.current) {
              fileRef.current.value = ''
              fileRef.current.click()
            }
          },
          isActive: false,
        }

      // ── Text alignment ──────────────────────────────────────────────────────
      case 'alignLeft':
        return {
          icon:     <FormatAlignLeftIcon fontSize="small" />,
          label:    'Align left',
          action:   () => c().setTextAlign('left').run(),
          isActive: editor.isActive({ textAlign: 'left' }),
        }
      case 'alignCenter':
        return {
          icon:     <FormatAlignCenterIcon fontSize="small" />,
          label:    'Align center',
          action:   () => c().setTextAlign('center').run(),
          isActive: editor.isActive({ textAlign: 'center' }),
        }
      case 'alignRight':
        return {
          icon:     <FormatAlignRightIcon fontSize="small" />,
          label:    'Align right',
          action:   () => c().setTextAlign('right').run(),
          isActive: editor.isActive({ textAlign: 'right' }),
        }
      case 'alignJustify':
        return {
          icon:     <FormatAlignJustifyIcon fontSize="small" />,
          label:    'Justify',
          action:   () => c().setTextAlign('justify').run(),
          isActive: editor.isActive({ textAlign: 'justify' }),
        }

      // ── Colors ──────────────────────────────────────────────────────────────
      // Native <input type="color"> is hidden and triggered via ref click.
      // The onChange handler applies the chosen color to the current selection.
      case 'textColor':
        return {
          icon:     <FormatColorTextIcon fontSize="small" />,
          label:    'Text color',
          action:   () => textColorRef.current?.click(),
          isActive: false,
        }
      case 'bgColor':
        return {
          icon:     <FormatColorFillIcon fontSize="small" />,
          label:    'Background color',
          action:   () => bgColorRef.current?.click(),
          isActive: false,
        }

      // ── Paragraph direction ──────────────────────────────────────────────────
      // Sets the `dir` attribute on the current paragraph node.
      // Requires the paragraph node to have `dir` in its attribute schema
      // (configure via a custom Paragraph extension in IpsRichTextEditor.tsx).
      case 'rtl':
        return {
          icon:     <FormatTextdirectionRToLIcon fontSize="small" />,
          label:    'RTL direction',
          action:   () => c().updateAttributes('paragraph', { dir: 'rtl' }).run(),
          isActive: editor.isActive('paragraph', { dir: 'rtl' }),
        }
      case 'ltr':
        return {
          icon:     <FormatTextdirectionLToRIcon fontSize="small" />,
          label:    'LTR direction',
          action:   () => c().updateAttributes('paragraph', { dir: 'ltr' }).run(),
          isActive: editor.isActive('paragraph', { dir: 'ltr' }),
        }

      // ── History ─────────────────────────────────────────────────────────────
      case 'undo':
        return {
          icon:     <UndoIcon fontSize="small" />,
          label:    'Undo (Ctrl+Z)',
          action:   () => c().undo().run(),
          isActive: false,
          disabled: !can.undo(),
        }
      case 'redo':
        return {
          icon:     <RedoIcon fontSize="small" />,
          label:    'Redo (Ctrl+Shift+Z)',
          action:   () => c().redo().run(),
          isActive: false,
          disabled: !can.redo(),
        }

      // ── Clear formatting ─────────────────────────────────────────────────────
      case 'clearFormat':
        return {
          icon:     <FormatClearIcon fontSize="small" />,
          label:    'Clear formatting',
          action:   () => c().unsetAllMarks().clearNodes().run(),
          isActive: false,
        }

      // ── Exhaustive guard ─────────────────────────────────────────────────────
      default: {
        const _exhaustive: never = item
        return { icon: null, label: String(_exhaustive), action: () => {}, isActive: false }
      }
    }
  }

  // ─── Render ──────────────────────────────────────────────────────────────────

  return (
    <Paper
      elevation={1}
      className="ips-rte-toolbar"
      sx={{
        display:     'flex',
        flexWrap:    'wrap',
        alignItems:  'center',
        gap:         0.5,
        px:          1,
        py:          0.5,
        position:    'sticky',
        bottom:      0,
        zIndex:      1,
        borderRadius: '0 0 4px 4px',
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      {/* ── Hidden native color pickers — triggered by ref.click() ── */}
      <input
        type="color"
        ref={textColorRef}
        style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', width: 0, height: 0 }}
        onChange={(e) => c().setColor(e.target.value).run()}
      />
      <input
        type="color"
        ref={bgColorRef}
        style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', width: 0, height: 0 }}
        onChange={(e) => c().setHighlight({ color: e.target.value }).run()}
      />
      {/* Image picker — resizes to max 400 px wide via canvas before inserting */}
      <input
        type="file"
        ref={imageFileRef}
        accept="image/*"
        style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', width: 0, height: 0 }}
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (!file) return
          const MAX_PX = 400
          const reader = new FileReader()
          reader.onload = (ev) => {
            const dataUrl = ev.target?.result as string
            const img = new window.Image()
            img.onload = () => {
              // Scale down proportionally if wider than MAX_PX
              const scale = img.width > MAX_PX ? MAX_PX / img.width : 1
              const w = Math.round(img.width  * scale)
              const h = Math.round(img.height * scale)
              const canvas = document.createElement('canvas')
              canvas.width  = w
              canvas.height = h
              canvas.getContext('2d')!.drawImage(img, 0, 0, w, h)
              const resized = canvas.toDataURL(file.type || 'image/png')
              ;(editor.chain().focus() as any)
                .setImage({ src: resized, width: w, height: h })
                .run()
            }
            img.src = dataUrl
          }
          reader.readAsDataURL(file)
        }}
      />
      {/* File picker — inserts a downloadable link with the file name */}
      <input
        type="file"
        ref={fileRef}
        style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', width: 0, height: 0 }}
        onChange={(e) => {
          const file = e.target.files?.[0]
          if (!file) return
          const objectUrl = URL.createObjectURL(file)
          // Insert as a link so the user can click-to-download
          editor
            .chain()
            .focus()
            .insertContent(
              `<a href="${objectUrl}" download="${file.name}">📎 ${file.name}</a>`
            )
            .run()
        }}
      />

      {/* ── Button groups ── */}
      {config.groups.map((group, gi) => (
        <React.Fragment key={gi}>
          {gi > 0 && (
            <Divider orientation="vertical" flexItem sx={{ mx: 0.5, my: 0.25 }} />
          )}

          {group.items.map((item) => {
            const { icon, label, action, isActive, disabled } = getItemDef(item)
            return (
              <Tooltip key={item} title={label} placement="top">
                {/* span wrapper required so Tooltip works on disabled buttons */}
                <span>
                  <IconButton
                    size="small"
                    onClick={action}
                    disabled={disabled ?? false}
                    aria-pressed={isActive}
                    aria-label={label}
                    sx={{
                      borderRadius: 1,
                      p:            0.5,
                      bgcolor:      isActive ? activeBg : 'transparent',
                      '&:hover': {
                        bgcolor: isActive ? activeHoverBg : undefined,
                      },
                    }}
                  >
                    {icon}
                  </IconButton>
                </span>
              </Tooltip>
            )
          })}
        </React.Fragment>
      ))}
    </Paper>
  )
}
