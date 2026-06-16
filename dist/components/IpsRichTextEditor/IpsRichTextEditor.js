import { jsxs as $, jsx as n } from "react/jsx-runtime";
import { forwardRef as k, useRef as A, useEffect as v } from "react";
import x from "@mui/material/Box";
import E from "@mui/material/Typography";
import { useTheme as H } from "@mui/material/styles";
import { useEditor as I, EditorContent as U } from "../../node_modules/@tiptap/react/dist/index.js";
import W from "../../node_modules/@tiptap/starter-kit/dist/index.js";
import j from "../../node_modules/@tiptap/extension-underline/dist/index.js";
import N from "../../node_modules/@tiptap/extension-link/dist/index.js";
import q from "../../node_modules/@tiptap/extension-image/dist/index.js";
import B from "../../node_modules/@tiptap/extension-text-align/dist/index.js";
import { TextStyle as F, Color as G } from "../../node_modules/@tiptap/extension-text-style/dist/index.js";
import J from "../../node_modules/@tiptap/extension-highlight/dist/index.js";
import K from "../../node_modules/@tiptap/extension-placeholder/dist/index.js";
import Q from "../../node_modules/@tiptap/extension-typography/dist/index.js";
import V from "../../node_modules/@tiptap/extension-paragraph/dist/index.js";
import { TableRow as X, TableHeader as Y, TableCell as Z, Table as O } from "../../node_modules/@tiptap/extension-table/dist/index.js";
import { IpsRteToolbar as rr } from "./IpsRteToolbar.js";
import { DEFAULT_TOOLBAR as er } from "./IpsRteToolbar.types.js";
const or = V.extend({
  addAttributes() {
    var s;
    return {
      ...(s = this.parent) == null ? void 0 : s.call(this),
      dir: {
        default: null,
        renderHTML: (o) => o.dir ? { dir: o.dir } : {},
        parseHTML: (o) => o.getAttribute("dir")
      }
    };
  }
}), tr = k(
  function({
    value: o,
    onChange: u,
    defaultValue: C,
    placeholder: L,
    readOnly: t = !1,
    disabled: l = !1,
    label: g,
    error: d = !1,
    helperText: b,
    dir: h = "auto",
    minHeight: f = 200,
    maxHeight: a,
    toolbar: _ = er,
    onBlur: m,
    onFocus: c,
    sx: R,
    className: y
  }, w) {
    const r = H(), p = A(u);
    p.current = u;
    const e = I({
      extensions: [
        // Disable StarterKit's built-in Paragraph so our DirectionParagraph
        // (which adds the `dir` attribute) is used instead.
        W.configure({ paragraph: !1 }),
        or,
        j,
        N.configure({ openOnClick: !1, autolink: !0 }),
        q,
        B.configure({ types: ["heading", "paragraph"] }),
        F,
        G,
        J.configure({ multicolor: !0 }),
        K.configure({ placeholder: L ?? "" }),
        Q,
        O.configure({ resizable: !1 }),
        X,
        Y,
        Z
      ],
      // Controlled: seed with `value`; Uncontrolled: seed with `defaultValue`.
      content: o !== void 0 ? o ?? "" : C ?? "",
      editable: !t,
      onUpdate: ({ editor: i }) => {
        var T;
        (T = p.current) == null || T.call(p, i.getHTML());
      },
      onBlur: ({ event: i }) => {
        m == null || m(i);
      },
      onFocus: ({ event: i }) => {
        c == null || c(i);
      }
    });
    v(() => {
      !e || e.isDestroyed || o !== void 0 && e.getHTML() !== o && e.commands.setContent(o, { emitUpdate: !1 });
    }, [e, o]), v(() => {
      !e || e.isDestroyed || e.setEditable(!t);
    }, [e, t]);
    const S = d ? r.palette.error.main : r.palette.divider, z = d ? r.palette.error.main : r.palette.primary.main, M = typeof f == "number" ? `${f}px` : f, P = a ? typeof a == "number" ? `${a}px` : a : void 0, D = h === "auto" ? r.direction : h;
    return /* @__PURE__ */ $(
      x,
      {
        ref: w,
        className: `ips-rich-text-editor${y ? ` ${y}` : ""}`,
        sx: {
          display: "flex",
          flexDirection: "column",
          opacity: l ? 0.5 : 1,
          pointerEvents: l ? "none" : void 0,
          cursor: l ? "not-allowed" : void 0,
          ...R
        },
        children: [
          g && /* @__PURE__ */ n(
            E,
            {
              variant: "body2",
              color: d ? "error" : "text.secondary",
              sx: { mb: 0.5, fontWeight: 500 },
              children: g
            }
          ),
          /* @__PURE__ */ $(
            x,
            {
              sx: {
                border: `2px solid ${S}`,
                borderRadius: 1,
                overflow: "hidden",
                transition: "border-color 0.15s",
                "&:focus-within": t ? {} : { borderColor: z }
              },
              children: [
                /* @__PURE__ */ n(
                  x,
                  {
                    className: "ips-rte-content",
                    dir: D,
                    sx: {
                      minHeight: M,
                      maxHeight: P,
                      overflow: P ? "auto" : void 0,
                      // ProseMirror root element
                      "& .ProseMirror": {
                        padding: "12px 16px",
                        outline: "none",
                        cursor: t ? "default" : "text",
                        fontFamily: "inherit",
                        minHeight: M,
                        boxSizing: "border-box"
                        // NOTE: do NOT set `direction` here — stylis-plugin-rtl would flip
                        // `direction: rtl` → `direction: ltr`, breaking the cursor position.
                        // Instead, `dir={effectiveDir}` on the wrapper Box (HTML attribute)
                        // cascades `direction: rtl` to all children via the browser's
                        // default UA stylesheet, which stylis does NOT touch.
                      },
                      // Placeholder — write as LTR source (float:left).
                      // stylis-plugin-rtl flips it to float:right in an RTL theme context.
                      // If we wrote float:right here, stylis would flip it AGAIN to left — bug!
                      "& .ProseMirror p.is-editor-empty:first-of-type::before": {
                        content: "attr(data-placeholder)",
                        float: "left",
                        color: r.palette.text.disabled,
                        pointerEvents: "none",
                        height: 0
                      },
                      // Hyperlinks
                      "& .ProseMirror a": {
                        color: r.palette.primary.main,
                        textDecoration: "underline"
                      },
                      // Blockquote — write LTR source; stylis flips border/padding in RTL
                      "& .ProseMirror blockquote": {
                        borderLeft: `3px solid ${r.palette.grey[400]}`,
                        paddingLeft: "12px",
                        color: r.palette.grey[600],
                        margin: "0 0 8px",
                        fontStyle: "italic"
                      },
                      // Inline code
                      "& .ProseMirror code": {
                        background: r.palette.grey[100],
                        fontFamily: "monospace",
                        padding: "2px 4px",
                        borderRadius: "3px",
                        fontSize: "0.875em"
                      },
                      // Headings
                      "& .ProseMirror h1": { fontSize: "1.8em", margin: "8px 0" },
                      "& .ProseMirror h2": { fontSize: "1.5em", margin: "6px 0" },
                      "& .ProseMirror h3": { fontSize: "1.25em", margin: "4px 0" },
                      // Lists — write LTR source; stylis flips paddingLeft→paddingRight in RTL
                      "& .ProseMirror ul, & .ProseMirror ol": {
                        paddingLeft: "1.5em",
                        margin: "4px 0"
                      },
                      // Table
                      "& .ProseMirror table": {
                        borderCollapse: "collapse",
                        width: "100%",
                        margin: "8px 0",
                        tableLayout: "fixed",
                        overflow: "hidden"
                      },
                      "& .ProseMirror td, & .ProseMirror th": {
                        border: `1px solid ${r.palette.divider}`,
                        padding: "6px 10px",
                        verticalAlign: "top",
                        position: "relative",
                        minWidth: 60,
                        boxSizing: "border-box"
                      },
                      "& .ProseMirror th": {
                        background: r.palette.grey[100],
                        fontWeight: 600
                      },
                      "& .ProseMirror .selectedCell:after": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        background: r.palette.primary.main,
                        opacity: 0.15,
                        pointerEvents: "none"
                      }
                    },
                    children: /* @__PURE__ */ n(U, { editor: e })
                  }
                ),
                !t && e && /* @__PURE__ */ n(rr, { editor: e, config: _ })
              ]
            }
          ),
          b && /* @__PURE__ */ n(
            E,
            {
              variant: "caption",
              color: d ? "error" : "text.secondary",
              sx: { mt: 0.5, px: 0.5 },
              children: b
            }
          )
        ]
      }
    );
  }
);
tr.displayName = "IpsRichTextEditor";
export {
  tr as IpsRichTextEditor
};
