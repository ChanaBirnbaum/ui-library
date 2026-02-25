# ui-library

Minimal UI library scaffold for components, theme, and tools.

Files include theme tokens, a small `useToast` hook, RTL utilities, and basic Storybook/Jest configuration.

Commands

```bash
npm install
npm run dev
npm run storybook
npm test
```

## Collaborative editing

`IpsRichTextEditor` supports real-time collaborative editing powered by [Y.js](https://yjs.dev) and Tiptap's [`@tiptap/extension-collaboration`](https://tiptap.dev/docs/editor/extensions/functionality/collaboration) extension.

### Same-page demo (no network required)

Pass the same `Y.Doc` instance to multiple `IpsRichTextEditor` components on the same page — changes in one editor are immediately reflected in all others:

```tsx
import * as Y from 'yjs'
import { IpsRichTextEditor } from 'ui-library'

const ydoc = new Y.Doc()

export function CollaborativeDemo() {
  return (
    <>
      <IpsRichTextEditor label="Editor A" collaboration={{ document: ydoc }} />
      <IpsRichTextEditor label="Editor B" collaboration={{ document: ydoc }} />
    </>
  )
}
```

### Real-time collaboration over the network

To share the document with another user connect a WebSocket provider to the same `Y.Doc`:

```tsx
import * as Y from 'yjs'
import { WebsocketProvider } from 'y-websocket'
import { IpsRichTextEditor } from 'ui-library'

const ydoc = new Y.Doc()

// Connect to a y-websocket server (e.g. https://github.com/yjs/y-websocket)
const provider = new WebsocketProvider(
  'wss://your-websocket-server',
  'my-document-room',
  ydoc,
)

export function NetworkEditor() {
  return (
    <IpsRichTextEditor
      label="Shared document"
      collaboration={{ document: ydoc }}
    />
  )
}
```

Any user who connects to the same room on the same server will share the document state.  Disconnected edits are automatically reconciled when connectivity is restored thanks to Y.js's CRDT algorithm.

> **Note:** When `collaboration` is active, the editor's built-in undo/redo history is replaced by Y.js undo/redo, which tracks changes per-user.
