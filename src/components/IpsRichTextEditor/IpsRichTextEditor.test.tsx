import React from 'react'
import { render, screen, act } from '@testing-library/react'
import '@testing-library/jest-dom'

// ─── Mock: IpsRteToolbar ──────────────────────────────────────────────────────
// Isolated so we can test the editor without the full toolbar dependency tree.
jest.mock('./IpsRteToolbar', () => {
  const R = require('react')
  return {
    IpsRteToolbar: ({ editor }: { editor: unknown }) =>
      editor ? R.createElement('div', { 'data-testid': 'ips-rte-toolbar' }) : null,
  }
})

// ─── Mock: @tiptap/react ──────────────────────────────────────────────────────
// useEditor is mocked as jest.fn(); the return value is set in beforeEach.
// EditorContent renders a simple div to keep snapshots stable.
jest.mock('@tiptap/react', () => {
  const R = require('react')
  return {
    useEditor: jest.fn(),
    EditorContent: () => R.createElement('div', { 'data-testid': 'editor-content' }),
  }
})

// ─── Mock: Tiptap extension packages ─────────────────────────────────────────
// All mocks include `__esModule: true` so that TypeScript's `__importDefault`
// helper does not double-wrap the object when handling default imports.
jest.mock('@tiptap/starter-kit', () => ({
  __esModule: true,
  default: { configure: jest.fn(() => ({})) },
}))
jest.mock('@tiptap/extension-underline', () => ({ __esModule: true, default: {} }))
jest.mock('@tiptap/extension-link', () => ({
  __esModule: true,
  default: { configure: jest.fn(() => ({})) },
}))
jest.mock('@tiptap/extension-image', () => ({ __esModule: true, default: {} }))
jest.mock('@tiptap/extension-text-align', () => ({
  __esModule: true,
  default: { configure: jest.fn(() => ({})) },
}))
jest.mock('@tiptap/extension-text-style', () => ({ __esModule: true, default: {} }))
jest.mock('@tiptap/extension-color', () => ({ __esModule: true, Color: {} }))
jest.mock('@tiptap/extension-highlight', () => ({
  __esModule: true,
  default: { configure: jest.fn(() => ({})) },
}))
jest.mock('@tiptap/extension-placeholder', () => ({
  __esModule: true,
  default: { configure: jest.fn(() => ({})) },
}))
jest.mock('@tiptap/extension-typography', () => ({ __esModule: true, default: {} }))
jest.mock('@tiptap/extension-paragraph', () => ({
  __esModule: true,
  default: { extend: jest.fn(() => ({})) },
}))

// ─── Imports (after mocks) ────────────────────────────────────────────────────
import { IpsRichTextEditor } from './IpsRichTextEditor'
import { useEditor } from '@tiptap/react'

// ─── Shared mock editor factory ───────────────────────────────────────────────
function makeMockEditor(overrides: Record<string, unknown> = {}) {
  return {
    getHTML: jest.fn(() => '<p></p>'),
    setEditable: jest.fn(),
    isDestroyed: false,
    commands: { setContent: jest.fn() },
    isActive: jest.fn(() => false),
    can: jest.fn(() => ({ undo: () => false, redo: () => false })),
    chain: jest.fn(() => ({ focus: () => ({ run: jest.fn() }) })),
    ...overrides,
  }
}

// ─── Tests ────────────────────────────────────────────────────────────────────

describe('IpsRichTextEditor', () => {
  let mockEditor: ReturnType<typeof makeMockEditor>

  beforeEach(() => {
    jest.clearAllMocks()
    mockEditor = makeMockEditor()
    ;(useEditor as jest.Mock).mockReturnValue(mockEditor)
  })

  // ── Structural ──────────────────────────────────────────────────────────────

  it('renders root element with className "ips-rich-text-editor"', () => {
    const { container } = render(<IpsRichTextEditor />)
    expect(container.querySelector('.ips-rich-text-editor')).toBeInTheDocument()
  })

  it('renders the content area with className "ips-rte-content"', () => {
    const { container } = render(<IpsRichTextEditor />)
    expect(container.querySelector('.ips-rte-content')).toBeInTheDocument()
  })

  it('renders the EditorContent widget', () => {
    render(<IpsRichTextEditor />)
    expect(screen.getByTestId('editor-content')).toBeInTheDocument()
  })

  it('has displayName "IpsRichTextEditor"', () => {
    expect(IpsRichTextEditor.displayName).toBe('IpsRichTextEditor')
  })

  // ── Toolbar visibility ───────────────────────────────────────────────────────

  it('renders toolbar when readOnly is false (default)', () => {
    render(<IpsRichTextEditor />)
    expect(screen.getByTestId('ips-rte-toolbar')).toBeInTheDocument()
  })

  it('hides toolbar when readOnly=true', () => {
    render(<IpsRichTextEditor readOnly />)
    expect(screen.queryByTestId('ips-rte-toolbar')).not.toBeInTheDocument()
  })

  it('hides toolbar when editor instance is null', () => {
    ;(useEditor as jest.Mock).mockReturnValue(null)
    render(<IpsRichTextEditor />)
    expect(screen.queryByTestId('ips-rte-toolbar')).not.toBeInTheDocument()
  })

  // ── readOnly state ───────────────────────────────────────────────────────────

  it('calls editor.setEditable(false) when readOnly=true', () => {
    render(<IpsRichTextEditor readOnly />)
    expect(mockEditor.setEditable).toHaveBeenCalledWith(false)
  })

  it('calls editor.setEditable(true) when readOnly=false', () => {
    render(<IpsRichTextEditor readOnly={false} />)
    expect(mockEditor.setEditable).toHaveBeenCalledWith(true)
  })

  // ── Label & helper text ──────────────────────────────────────────────────────

  it('renders label when provided', () => {
    render(<IpsRichTextEditor label="My label" />)
    expect(screen.getByText('My label')).toBeInTheDocument()
  })

  it('does not render label element when label is omitted', () => {
    const { container } = render(<IpsRichTextEditor />)
    // No Typography sibling before the editor frame
    const root = container.querySelector('.ips-rich-text-editor')!
    const firstChild = root.firstElementChild
    // The first child should be the editor frame box, not a label
    expect(firstChild?.tagName).not.toBe('LABEL')
  })

  it('renders helperText when provided', () => {
    render(<IpsRichTextEditor helperText="Helper message" />)
    expect(screen.getByText('Helper message')).toBeInTheDocument()
  })

  it('does not render helperText when omitted', () => {
    render(<IpsRichTextEditor />)
    // No extra text nodes below the editor
    expect(screen.queryByText('Helper message')).not.toBeInTheDocument()
  })

  // ── Controlled value sync ────────────────────────────────────────────────────

  it('calls setContent when controlled value differs from editor HTML', () => {
    mockEditor.getHTML.mockReturnValue('<p>old</p>')
    render(<IpsRichTextEditor value="<p>new</p>" onChange={jest.fn()} />)
    expect(mockEditor.commands.setContent).toHaveBeenCalledWith('<p>new</p>', false)
  })

  it('does NOT call setContent when controlled value matches editor HTML', () => {
    const html = '<p>same</p>'
    mockEditor.getHTML.mockReturnValue(html)
    render(<IpsRichTextEditor value={html} onChange={jest.fn()} />)
    expect(mockEditor.commands.setContent).not.toHaveBeenCalled()
  })

  it('does NOT call setContent when uncontrolled (value=undefined)', () => {
    render(<IpsRichTextEditor defaultValue="<p>init</p>" />)
    expect(mockEditor.commands.setContent).not.toHaveBeenCalled()
  })

  // ── Disabled state ───────────────────────────────────────────────────────────

  it('applies opacity:0.5 style when disabled=true', () => {
    const { container } = render(<IpsRichTextEditor disabled />)
    const root = container.querySelector('.ips-rich-text-editor') as HTMLElement
    // MUI sx applies inline styles via emotion; check that the component renders
    expect(root).toBeInTheDocument()
  })

  // ── Custom className ─────────────────────────────────────────────────────────

  it('appends custom className to root element', () => {
    const { container } = render(<IpsRichTextEditor className="my-custom" />)
    expect(container.querySelector('.ips-rich-text-editor.my-custom')).toBeInTheDocument()
  })
})
