import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import * as Y from 'yjs'

import { IpsRichTextEditor } from './IpsRichTextEditor'
import type { IpsRteToolbarConfig } from './IpsRteToolbar.types'

const theme = createTheme()

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof IpsRichTextEditor> = {
  title: 'Components/IpsRichTextEditor',
  component: IpsRichTextEditor,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Box sx={{ p: 3, maxWidth: 800 }}>
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
    docs: { description: { component: 'Gmail-style rich text editor built on Tiptap with full RTL/Hebrew support.' } },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof IpsRichTextEditor>

// ── 1. Default (empty, LTR) ───────────────────────────────────────────────────

export const Default: Story = {
  name: 'Default (empty)',
  args: {
    label: 'Message',
    placeholder: 'Start typing…',
    minHeight: 200,
  },
}

// ── 2. Hebrew content (RTL) ───────────────────────────────────────────────────

export const HebrewRTL: Story = {
  name: 'Hebrew content (RTL)',
  args: {
    label: 'תוכן בעברית',
    defaultValue:
      '<p dir="rtl">שלום! זהו עורך טקסט עשיר עם תמיכה מלאה בעברית ו-RTL.</p>' +
      '<p dir="rtl">ניתן לכתוב, לעצב ולנהל כיוון טקסט בכל פסקה בנפרד.</p>',
    dir: 'auto',
    minHeight: 150,
  },
}

// ── 3. Mixed RTL + LTR paragraphs ────────────────────────────────────────────

export const MixedDirections: Story = {
  name: 'Mixed RTL + LTR paragraphs',
  args: {
    label: 'Mixed content',
    defaultValue:
      '<p dir="rtl">פסקה בעברית — כיוון ימין לשמאל</p>' +
      '<p dir="ltr">English paragraph — left to right direction</p>' +
      '<p dir="rtl">עוד פסקה בעברית עם <strong>הדגשה</strong> ו<em>נטייה</em></p>',
    dir: 'auto',
    minHeight: 180,
  },
}

// ── 4. Controlled mode ────────────────────────────────────────────────────────

export const Controlled: Story = {
  name: 'Controlled mode',
  render: () => {
     
    const [html, setHtml] = useState('<p>Controlled initial content</p>')
    return (
      <Stack spacing={2}>
        <IpsRichTextEditor
          label="Controlled editor"
          value={html}
          onChange={setHtml}
          minHeight={150}
        />
        <Stack direction="row" spacing={1}>
          <Button
            size="small"
            variant="outlined"
            onClick={() => setHtml('<p>Content reset from outside!</p>')}
          >
            Set content externally
          </Button>
          <Button size="small" variant="outlined" onClick={() => setHtml('')}>
            Clear
          </Button>
        </Stack>
        <Typography variant="caption" color="text.secondary" sx={{ fontFamily: 'monospace', wordBreak: 'break-all' }}>
          {html}
        </Typography>
      </Stack>
    )
  },
}

// ── 5. Read-only mode ─────────────────────────────────────────────────────────

export const ReadOnly: Story = {
  name: 'Read-only mode',
  args: {
    label: 'Document preview',
    defaultValue:
      '<p>This content is <strong>read-only</strong>. The toolbar is hidden and editing is disabled.</p>' +
      '<p>It renders as a clean display block without any focus ring.</p>',
    readOnly: true,
    minHeight: 120,
  },
}

// ── 6. Disabled state ─────────────────────────────────────────────────────────

export const Disabled: Story = {
  name: 'Disabled state',
  args: {
    label: 'Disabled editor',
    defaultValue: '<p>This editor is disabled. All interactions are blocked.</p>',
    disabled: true,
    minHeight: 120,
  },
}

// ── 7. Error state with helperText ────────────────────────────────────────────

export const ErrorState: Story = {
  name: 'Error state with helperText',
  args: {
    label: 'Required field',
    placeholder: 'This field is required…',
    error: true,
    helperText: 'Content is required before submitting the form',
    minHeight: 150,
  },
}

// ── 8. Custom toolbar (minimal) ───────────────────────────────────────────────

const MINIMAL_TOOLBAR: IpsRteToolbarConfig = {
  groups: [
    { items: ['bold', 'italic', 'underline'] },
    { items: ['bulletList', 'orderedList'] },
    { items: ['undo', 'redo'] },
  ],
}

export const CustomToolbar: Story = {
  name: 'Custom toolbar (minimal)',
  args: {
    label: 'Minimal toolbar',
    toolbar: MINIMAL_TOOLBAR,
    placeholder: 'Only basic formatting available…',
    minHeight: 150,
  },
}

// ── 9. With image upload (URL-based) ─────────────────────────────────────────

export const WithImage: Story = {
  name: 'With image insertion (URL)',
  render: () => (
    <Stack spacing={1}>
      <Typography variant="caption" color="text.secondary">
        Click the 🖼 image icon in the toolbar and enter an image URL to embed it.
      </Typography>
      <IpsRichTextEditor
        label="Editor with image support"
        defaultValue="<p>Click the image button in the toolbar to insert an image.</p>"
        minHeight={200}
      />
    </Stack>
  ),
}

// ── 10. With link insertion ───────────────────────────────────────────────────

export const WithLink: Story = {
  name: 'With link insertion',
  render: () => (
    <Stack spacing={1}>
      <Typography variant="caption" color="text.secondary">
        Select some text, then click the 🔗 link icon in the toolbar to attach a URL.
      </Typography>
      <IpsRichTextEditor
        label="Editor with link support"
        defaultValue="<p>Select this text and click the link button to add a hyperlink.</p>"
        minHeight={150}
      />
    </Stack>
  ),
}

// ── 11. Collaborative editing ─────────────────────────────────────────────────

// A single Y.Doc is created outside the render function so it persists across
// Storybook re-renders and is shared by both editor instances below.
const sharedDoc = new Y.Doc()

export const Collaborative: Story = {
  name: 'Collaborative editing (shared Y.Doc)',
  render: () => (
    <Stack spacing={2}>
      <Typography variant="body2" color="text.secondary">
        Both editors share the same <code>Y.Doc</code>. Type in one and the changes
        appear instantly in the other — exactly as they would for two remote users
        connected via a WebSocket provider (e.g. <code>y-websocket</code>).
      </Typography>
      <IpsRichTextEditor
        label="Editor A"
        collaboration={{ document: sharedDoc }}
        placeholder="Type here…"
        minHeight={150}
      />
      <IpsRichTextEditor
        label="Editor B"
        collaboration={{ document: sharedDoc }}
        placeholder="Type here…"
        minHeight={150}
      />
    </Stack>
  ),
}
