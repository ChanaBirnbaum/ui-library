import { jsxs as v, jsx as e } from "react/jsx-runtime";
import ee, { useRef as h, useState as w, useCallback as te, useLayoutEffect as oe } from "react";
import ie from "@mui/material/Paper";
import q from "@mui/material/IconButton";
import ne from "@mui/material/Divider";
import N from "@mui/material/Tooltip";
import X from "@mui/material/Typography";
import P from "@mui/material/Popover";
import p from "@mui/material/Box";
import { useTheme as re, alpha as k } from "@mui/material/styles";
import le from "@mui/icons-material/ExpandMore";
import ae from "@mui/icons-material/FormatBold";
import ce from "@mui/icons-material/FormatItalic";
import se from "@mui/icons-material/FormatUnderlined";
import me from "@mui/icons-material/StrikethroughS";
import ue from "@mui/icons-material/FormatListBulleted";
import pe from "@mui/icons-material/FormatListNumbered";
import fe from "@mui/icons-material/FormatQuote";
import ge from "@mui/icons-material/Link";
import de from "@mui/icons-material/Image";
import he from "@mui/icons-material/FormatAlignLeft";
import ve from "@mui/icons-material/FormatAlignCenter";
import be from "@mui/icons-material/FormatAlignRight";
import Ae from "@mui/icons-material/FormatAlignJustify";
import xe from "@mui/icons-material/FormatColorText";
import Ie from "@mui/icons-material/FormatColorFill";
import we from "@mui/icons-material/FormatTextdirectionRToL";
import ye from "@mui/icons-material/FormatTextdirectionLToR";
import Re from "@mui/icons-material/Undo";
import Se from "@mui/icons-material/Redo";
import Ce from "@mui/icons-material/FormatClear";
import ze from "@mui/icons-material/AttachFile";
import Te from "@mui/icons-material/TableChart";
function L({ level: i }) {
  return /* @__PURE__ */ v(
    X,
    {
      component: "span",
      sx: { fontSize: "0.7rem", fontWeight: 800, lineHeight: 1, letterSpacing: 0 },
      children: [
        "H",
        i
      ]
    }
  );
}
function ct({ editor: i, config: F }) {
  const f = re(), B = h(null), O = h(null), b = h(null), A = h(null), G = k(f.palette.primary.main, 0.15), J = k(f.palette.primary.main, 0.25), [H, y] = w(null), [m, R] = w({ rows: 0, cols: 0 }), Z = 8, M = 8, n = () => i.chain().focus(), U = i.can(), E = ["link", "image", "file", "insertTable", "textColor", "bgColor", "rtl", "ltr"], Q = F.groups.map((t) => ({ items: t.items.filter((o) => !E.includes(o)) })).filter((t) => t.items.length > 0), _ = F.groups.map((t) => ({ items: t.items.filter((o) => E.includes(o)) })).filter((t) => t.items.length > 0), x = h(null), [g, V] = w([]), [W, $] = w(null), d = Q.flatMap((t) => t.items), S = te(() => {
    const t = x.current;
    if (!t) return;
    const o = 30, r = 4, l = t.offsetWidth - 34, c = Math.max(1, Math.floor(l / (o + r)));
    V(d.slice(c));
  }, [d.join(",")]);
  oe(() => {
    S();
    const t = new ResizeObserver(S);
    return x.current && t.observe(x.current), () => t.disconnect();
  }, [S]);
  const K = g.length > 0 ? d.slice(0, d.length - g.length) : d;
  function C(t) {
    const { icon: o, label: r, action: a, isActive: l, disabled: c } = Y(t);
    return /* @__PURE__ */ e(N, { title: r, placement: "top", children: /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(
      q,
      {
        size: "small",
        onClick: (u) => a(u),
        disabled: c ?? !1,
        "aria-pressed": l,
        "aria-label": r,
        sx: {
          borderRadius: 1,
          p: 0.5,
          bgcolor: l ? G : "transparent",
          "&:hover": { bgcolor: l ? J : void 0 }
        },
        children: o
      }
    ) }) }, t);
  }
  function Y(t) {
    switch (t) {
      case "bold":
        return {
          icon: /* @__PURE__ */ e(ae, { fontSize: "small" }),
          label: "Bold (Ctrl+B)",
          action: () => n().toggleBold().run(),
          isActive: i.isActive("bold")
        };
      case "italic":
        return {
          icon: /* @__PURE__ */ e(ce, { fontSize: "small" }),
          label: "Italic (Ctrl+I)",
          action: () => n().toggleItalic().run(),
          isActive: i.isActive("italic")
        };
      case "underline":
        return {
          icon: /* @__PURE__ */ e(se, { fontSize: "small" }),
          label: "Underline (Ctrl+U)",
          action: () => n().toggleUnderline().run(),
          isActive: i.isActive("underline")
        };
      case "strike":
        return {
          icon: /* @__PURE__ */ e(me, { fontSize: "small" }),
          label: "Strikethrough",
          action: () => n().toggleStrike().run(),
          isActive: i.isActive("strike")
        };
      case "h1":
        return {
          icon: /* @__PURE__ */ e(L, { level: 1 }),
          label: "Heading 1",
          action: () => n().toggleHeading({ level: 1 }).run(),
          isActive: i.isActive("heading", { level: 1 })
        };
      case "h2":
        return {
          icon: /* @__PURE__ */ e(L, { level: 2 }),
          label: "Heading 2",
          action: () => n().toggleHeading({ level: 2 }).run(),
          isActive: i.isActive("heading", { level: 2 })
        };
      case "h3":
        return {
          icon: /* @__PURE__ */ e(L, { level: 3 }),
          label: "Heading 3",
          action: () => n().toggleHeading({ level: 3 }).run(),
          isActive: i.isActive("heading", { level: 3 })
        };
      case "bulletList":
        return {
          icon: /* @__PURE__ */ e(ue, { fontSize: "small" }),
          label: "Bullet list",
          action: () => n().toggleBulletList().run(),
          isActive: i.isActive("bulletList")
        };
      case "orderedList":
        return {
          icon: /* @__PURE__ */ e(pe, { fontSize: "small" }),
          label: "Ordered list",
          action: () => n().toggleOrderedList().run(),
          isActive: i.isActive("orderedList")
        };
      case "blockquote":
        return {
          icon: /* @__PURE__ */ e(fe, { fontSize: "small" }),
          label: "Blockquote",
          action: () => n().toggleBlockquote().run(),
          isActive: i.isActive("blockquote")
        };
      case "link":
        return {
          icon: /* @__PURE__ */ e(ge, { fontSize: "small" }),
          label: "Insert link",
          action: () => {
            const o = i.getAttributes("link").href, r = window.prompt("URL:", o ?? "https://");
            r !== null && (r === "" ? n().unsetLink().run() : n().setLink({ href: r }).run());
          },
          isActive: i.isActive("link")
        };
      case "image":
        return {
          icon: /* @__PURE__ */ e(de, { fontSize: "small" }),
          label: "Insert image",
          action: () => {
            b.current && (b.current.value = "", b.current.click());
          },
          isActive: !1
        };
      case "file":
        return {
          icon: /* @__PURE__ */ e(ze, { fontSize: "small" }),
          label: "Attach file",
          action: () => {
            A.current && (A.current.value = "", A.current.click());
          },
          isActive: !1
        };
      case "alignLeft":
        return {
          icon: /* @__PURE__ */ e(he, { fontSize: "small" }),
          label: "Align left",
          action: () => n().setTextAlign("left").run(),
          isActive: i.isActive({ textAlign: "left" })
        };
      case "alignCenter":
        return {
          icon: /* @__PURE__ */ e(ve, { fontSize: "small" }),
          label: "Align center",
          action: () => n().setTextAlign("center").run(),
          isActive: i.isActive({ textAlign: "center" })
        };
      case "alignRight":
        return {
          icon: /* @__PURE__ */ e(be, { fontSize: "small" }),
          label: "Align right",
          action: () => n().setTextAlign("right").run(),
          isActive: i.isActive({ textAlign: "right" })
        };
      case "alignJustify":
        return {
          icon: /* @__PURE__ */ e(Ae, { fontSize: "small" }),
          label: "Justify",
          action: () => n().setTextAlign("justify").run(),
          isActive: i.isActive({ textAlign: "justify" })
        };
      case "textColor":
        return {
          icon: /* @__PURE__ */ e(xe, { fontSize: "small" }),
          label: "Text color",
          action: () => {
            var o;
            return (o = B.current) == null ? void 0 : o.click();
          },
          isActive: !1
        };
      case "bgColor":
        return {
          icon: /* @__PURE__ */ e(Ie, { fontSize: "small" }),
          label: "Background color",
          action: () => {
            var o;
            return (o = O.current) == null ? void 0 : o.click();
          },
          isActive: !1
        };
      case "rtl":
        return {
          icon: /* @__PURE__ */ e(we, { fontSize: "small" }),
          label: "RTL direction",
          action: () => n().updateAttributes("paragraph", { dir: "rtl" }).run(),
          isActive: i.isActive("paragraph", { dir: "rtl" })
        };
      case "ltr":
        return {
          icon: /* @__PURE__ */ e(ye, { fontSize: "small" }),
          label: "LTR direction",
          action: () => n().updateAttributes("paragraph", { dir: "ltr" }).run(),
          isActive: i.isActive("paragraph", { dir: "ltr" })
        };
      case "undo":
        return {
          icon: /* @__PURE__ */ e(Re, { fontSize: "small" }),
          label: "Undo (Ctrl+Z)",
          action: () => n().undo().run(),
          isActive: !1,
          disabled: !U.undo()
        };
      case "redo":
        return {
          icon: /* @__PURE__ */ e(Se, { fontSize: "small" }),
          label: "Redo (Ctrl+Shift+Z)",
          action: () => n().redo().run(),
          isActive: !1,
          disabled: !U.redo()
        };
      case "clearFormat":
        return {
          icon: /* @__PURE__ */ e(Ce, { fontSize: "small" }),
          label: "Clear formatting",
          action: () => n().unsetAllMarks().clearNodes().run(),
          isActive: !1
        };
      case "insertTable":
        return {
          icon: /* @__PURE__ */ e(Te, { fontSize: "small" }),
          label: "הוסף טבלה",
          action: (o) => {
            o && y(o.currentTarget);
          },
          isActive: i.isActive("table")
        };
      default:
        return { icon: null, label: String(t), action: () => {
        }, isActive: !1 };
    }
  }
  return /* @__PURE__ */ v(
    ie,
    {
      elevation: 0,
      className: "ips-rte-toolbar",
      sx: {
        display: "flex",
        flexDirection: "column",
        position: "sticky",
        bottom: 0,
        zIndex: 1,
        borderRadius: "0 0 4px 4px",
        borderTop: `1px solid ${f.palette.divider}`,
        bgcolor: "transparent"
      },
      children: [
        /* @__PURE__ */ e(
          "input",
          {
            type: "color",
            ref: B,
            style: { position: "absolute", opacity: 0, pointerEvents: "none", width: 0, height: 0 },
            onChange: (t) => n().setColor(t.target.value).run()
          }
        ),
        /* @__PURE__ */ e(
          "input",
          {
            type: "color",
            ref: O,
            style: { position: "absolute", opacity: 0, pointerEvents: "none", width: 0, height: 0 },
            onChange: (t) => n().setHighlight({ color: t.target.value }).run()
          }
        ),
        /* @__PURE__ */ e(
          "input",
          {
            type: "file",
            ref: b,
            accept: "image/*",
            style: { position: "absolute", opacity: 0, pointerEvents: "none", width: 0, height: 0 },
            onChange: (t) => {
              var l;
              const o = (l = t.target.files) == null ? void 0 : l[0];
              if (!o) return;
              const r = 400, a = new FileReader();
              a.onload = (c) => {
                var j;
                const u = (j = c.target) == null ? void 0 : j.result, s = new window.Image();
                s.onload = () => {
                  const D = s.width > r ? r / s.width : 1, z = Math.round(s.width * D), T = Math.round(s.height * D), I = document.createElement("canvas");
                  I.width = z, I.height = T, I.getContext("2d").drawImage(s, 0, 0, z, T), i.chain().focus().setImage({ src: I.toDataURL(o.type || "image/png"), width: z, height: T }).run();
                }, s.src = u;
              }, a.readAsDataURL(o);
            }
          }
        ),
        /* @__PURE__ */ e(
          "input",
          {
            type: "file",
            ref: A,
            style: { position: "absolute", opacity: 0, pointerEvents: "none", width: 0, height: 0 },
            onChange: (t) => {
              var a;
              const o = (a = t.target.files) == null ? void 0 : a[0];
              if (!o) return;
              const r = URL.createObjectURL(o);
              i.chain().focus().insertContent(`<a href="${r}" download="${o.name}">📎 ${o.name}</a>`).run();
            }
          }
        ),
        /* @__PURE__ */ v(
          p,
          {
            ref: x,
            sx: {
              display: "flex",
              alignItems: "center",
              flexWrap: "nowrap",
              overflow: "hidden",
              px: 1,
              py: 0.5,
              gap: 0.5,
              bgcolor: f.palette.grey[100],
              borderRadius: "0 0 0 0"
            },
            children: [
              K.map(C),
              /* @__PURE__ */ e(N, { title: "עוד אפשרויות", placement: "top", children: /* @__PURE__ */ e("span", { children: /* @__PURE__ */ e(
                q,
                {
                  size: "small",
                  onClick: (t) => $(t.currentTarget),
                  sx: { borderRadius: 1, p: 0.5, ml: "auto", opacity: g.length > 0 ? 1 : 0, pointerEvents: g.length > 0 ? "auto" : "none" },
                  children: /* @__PURE__ */ e(le, { fontSize: "small" })
                }
              ) }) })
            ]
          }
        ),
        /* @__PURE__ */ e(
          P,
          {
            open: !!W,
            anchorEl: W,
            onClose: () => $(null),
            anchorOrigin: { vertical: "bottom", horizontal: "left" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            children: /* @__PURE__ */ e(p, { sx: { display: "flex", flexWrap: "wrap", p: 0.5, gap: 0.5, maxWidth: 240 }, children: g.map(C) })
          }
        ),
        _.length > 0 && /* @__PURE__ */ e(p, { sx: { display: "flex", alignItems: "center", flexWrap: "wrap", px: 1, py: 0.5, gap: 0.5, bgcolor: "transparent" }, children: _.map((t, o) => /* @__PURE__ */ v(ee.Fragment, { children: [
          o > 0 && /* @__PURE__ */ e(ne, { orientation: "vertical", flexItem: !0, sx: { mx: 0.5, my: 0.25 } }),
          t.items.map(C)
        ] }, o)) }),
        /* @__PURE__ */ e(
          P,
          {
            open: !!H,
            anchorEl: H,
            onClose: () => {
              y(null), R({ rows: 0, cols: 0 });
            },
            anchorOrigin: { vertical: "bottom", horizontal: "left" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            children: /* @__PURE__ */ v(p, { sx: { p: 1.5 }, children: [
              /* @__PURE__ */ e(X, { variant: "caption", sx: { display: "block", mb: 1, color: "text.secondary", textAlign: "center" }, children: m.rows > 0 && m.cols > 0 ? `${m.rows} × ${m.cols}` : "בחר גודל טבלה" }),
              /* @__PURE__ */ e(p, { sx: { display: "grid", gridTemplateColumns: `repeat(${M}, 20px)`, gap: "3px" }, children: Array.from(
                { length: Z },
                (t, o) => Array.from({ length: M }, (r, a) => {
                  const l = o + 1, c = a + 1, u = l <= m.rows && c <= m.cols;
                  return /* @__PURE__ */ e(
                    p,
                    {
                      onMouseEnter: () => R({ rows: l, cols: c }),
                      onClick: () => {
                        n().insertTable({ rows: l, cols: c, withHeaderRow: !0 }).run(), y(null), R({ rows: 0, cols: 0 });
                      },
                      sx: {
                        width: 20,
                        height: 20,
                        border: "1px solid",
                        borderRadius: "2px",
                        cursor: "pointer",
                        transition: "all 0.1s",
                        borderColor: u ? "primary.main" : "divider",
                        bgcolor: u ? k(f.palette.primary.main, 0.15) : "background.paper"
                      }
                    },
                    `${l}-${c}`
                  );
                })
              ) })
            ] })
          }
        )
      ]
    }
  );
}
export {
  ct as IpsRteToolbar
};
