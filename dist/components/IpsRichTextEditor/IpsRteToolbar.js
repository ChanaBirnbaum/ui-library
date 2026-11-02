import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import React, { useRef, useState, useLayoutEffect, useCallback } from 'react';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import { useTheme, alpha } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// ─── MUI Icons ────────────────────────────────────────────────────────────────
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import LinkIcon from '@mui/icons-material/Link';
import ImageIcon from '@mui/icons-material/Image';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import FormatTextdirectionRToLIcon from '@mui/icons-material/FormatTextdirectionRToL';
import FormatTextdirectionLToRIcon from '@mui/icons-material/FormatTextdirectionLToR';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import FormatClearIcon from '@mui/icons-material/FormatClear';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import TableChartIcon from '@mui/icons-material/TableChart';
// ─── H1 / H2 / H3 text label (no MUI heading icon exists) ────────────────────
function HeadingIcon({ level }) {
    return (_jsxs(Typography, { component: "span", sx: { fontSize: '0.7rem', fontWeight: 800, lineHeight: 1, letterSpacing: 0 }, children: ["H", level] }));
}
// ─── Component ────────────────────────────────────────────────────────────────
export function IpsRteToolbar({ editor, config }) {
    const theme = useTheme();
    const textColorRef = useRef(null);
    const bgColorRef = useRef(null);
    const imageFileRef = useRef(null);
    const fileRef = useRef(null);
    const activeBg = alpha(theme.palette.primary.main, 0.15);
    const activeHoverBg = alpha(theme.palette.primary.main, 0.25);
    // ── Table picker state ──────────────────────────────────────────────────────
    const [tableAnchor, setTableAnchor] = useState(null);
    const [hovered, setHovered] = useState({ rows: 0, cols: 0 });
    const MAX_ROWS = 8;
    const MAX_COLS = 8;
    // Extension commands (setColor, setHighlight, setTextAlign, setLink, etc.)
    // are augmented into @tiptap/core by each extension package at import time.
    // Cast to `any` once here so individual cases stay readable without per-line casts.
    const c = () => editor.chain().focus();
    const can = editor.can();
    // ─── Split groups into top (text formatting) and bottom (insert/actions) ───
    const BOTTOM_ITEMS = ['link', 'image', 'file', 'insertTable', 'textColor', 'bgColor', 'rtl', 'ltr'];
    const topGroups = config.groups
        .map(g => ({ items: g.items.filter(i => !BOTTOM_ITEMS.includes(i)) }))
        .filter(g => g.items.length > 0);
    const bottomGroups = config.groups
        .map(g => ({ items: g.items.filter(i => BOTTOM_ITEMS.includes(i)) }))
        .filter(g => g.items.length > 0);
    // ─── Overflow logic for top row ──────────────────────────────────────────────
    const topRowRef = useRef(null);
    const [overflowItems, setOverflowItems] = useState([]);
    const [overflowAnchor, setOverflowAnchor] = useState(null);
    const allTopItems = topGroups.flatMap(g => g.items);
    const measureOverflow = useCallback(() => {
        const row = topRowRef.current;
        if (!row)
            return;
        const BTN_W = 30; // approx button width px
        const GAP = 4;
        const ARROW = 34; // reserve space for the "▾" button
        const available = row.offsetWidth - ARROW;
        const maxVisible = Math.max(1, Math.floor(available / (BTN_W + GAP)));
        setOverflowItems(allTopItems.slice(maxVisible));
    }, [allTopItems.join(',')]);
    useLayoutEffect(() => {
        measureOverflow();
        const ro = new ResizeObserver(measureOverflow);
        if (topRowRef.current)
            ro.observe(topRowRef.current);
        return () => ro.disconnect();
    }, [measureOverflow]);
    const visibleTopItems = overflowItems.length > 0
        ? allTopItems.slice(0, allTopItems.length - overflowItems.length)
        : allTopItems;
    // helper — render a single toolbar button
    function renderBtn(item) {
        const { icon, label, action, isActive, disabled } = getItemDef(item);
        return (_jsx(Tooltip, { title: label, placement: "top", children: _jsx("span", { children: _jsx(IconButton, { size: "small", onClick: (e) => action(e), disabled: disabled ?? false, "aria-pressed": isActive, "aria-label": label, sx: {
                        borderRadius: 1,
                        p: 0.5,
                        bgcolor: isActive ? activeBg : 'transparent',
                        '&:hover': { bgcolor: isActive ? activeHoverBg : undefined },
                    }, children: icon }) }) }, item));
    }
    function getItemDef(item) {
        switch (item) {
            // ── Inline marks ────────────────────────────────────────────────────────
            case 'bold':
                return {
                    icon: _jsx(FormatBoldIcon, { fontSize: "small" }),
                    label: 'Bold (Ctrl+B)',
                    action: () => c().toggleBold().run(),
                    isActive: editor.isActive('bold'),
                };
            case 'italic':
                return {
                    icon: _jsx(FormatItalicIcon, { fontSize: "small" }),
                    label: 'Italic (Ctrl+I)',
                    action: () => c().toggleItalic().run(),
                    isActive: editor.isActive('italic'),
                };
            case 'underline':
                return {
                    icon: _jsx(FormatUnderlinedIcon, { fontSize: "small" }),
                    label: 'Underline (Ctrl+U)',
                    action: () => c().toggleUnderline().run(),
                    isActive: editor.isActive('underline'),
                };
            case 'strike':
                return {
                    icon: _jsx(StrikethroughSIcon, { fontSize: "small" }),
                    label: 'Strikethrough',
                    action: () => c().toggleStrike().run(),
                    isActive: editor.isActive('strike'),
                };
            // ── Headings ────────────────────────────────────────────────────────────
            case 'h1':
                return {
                    icon: _jsx(HeadingIcon, { level: 1 }),
                    label: 'Heading 1',
                    action: () => c().toggleHeading({ level: 1 }).run(),
                    isActive: editor.isActive('heading', { level: 1 }),
                };
            case 'h2':
                return {
                    icon: _jsx(HeadingIcon, { level: 2 }),
                    label: 'Heading 2',
                    action: () => c().toggleHeading({ level: 2 }).run(),
                    isActive: editor.isActive('heading', { level: 2 }),
                };
            case 'h3':
                return {
                    icon: _jsx(HeadingIcon, { level: 3 }),
                    label: 'Heading 3',
                    action: () => c().toggleHeading({ level: 3 }).run(),
                    isActive: editor.isActive('heading', { level: 3 }),
                };
            // ── Lists & blockquote ──────────────────────────────────────────────────
            case 'bulletList':
                return {
                    icon: _jsx(FormatListBulletedIcon, { fontSize: "small" }),
                    label: 'Bullet list',
                    action: () => c().toggleBulletList().run(),
                    isActive: editor.isActive('bulletList'),
                };
            case 'orderedList':
                return {
                    icon: _jsx(FormatListNumberedIcon, { fontSize: "small" }),
                    label: 'Ordered list',
                    action: () => c().toggleOrderedList().run(),
                    isActive: editor.isActive('orderedList'),
                };
            case 'blockquote':
                return {
                    icon: _jsx(FormatQuoteIcon, { fontSize: "small" }),
                    label: 'Blockquote',
                    action: () => c().toggleBlockquote().run(),
                    isActive: editor.isActive('blockquote'),
                };
            // ── Link / image ────────────────────────────────────────────────────────
            case 'link':
                return {
                    icon: _jsx(LinkIcon, { fontSize: "small" }),
                    label: 'Insert link',
                    action: () => {
                        const prev = editor.getAttributes('link').href;
                        const url = window.prompt('URL:', prev ?? 'https://');
                        if (url === null)
                            return;
                        if (url === '') {
                            c().unsetLink().run();
                        }
                        else {
                            c().setLink({ href: url }).run();
                        }
                    },
                    isActive: editor.isActive('link'),
                };
            case 'image':
                return {
                    icon: _jsx(ImageIcon, { fontSize: "small" }),
                    label: 'Insert image',
                    action: () => {
                        if (imageFileRef.current) {
                            imageFileRef.current.value = '';
                            imageFileRef.current.click();
                        }
                    },
                    isActive: false,
                };
            case 'file':
                return {
                    icon: _jsx(AttachFileIcon, { fontSize: "small" }),
                    label: 'Attach file',
                    action: () => {
                        if (fileRef.current) {
                            fileRef.current.value = '';
                            fileRef.current.click();
                        }
                    },
                    isActive: false,
                };
            // ── Text alignment ──────────────────────────────────────────────────────
            case 'alignLeft':
                return {
                    icon: _jsx(FormatAlignLeftIcon, { fontSize: "small" }),
                    label: 'Align left',
                    action: () => c().setTextAlign('left').run(),
                    isActive: editor.isActive({ textAlign: 'left' }),
                };
            case 'alignCenter':
                return {
                    icon: _jsx(FormatAlignCenterIcon, { fontSize: "small" }),
                    label: 'Align center',
                    action: () => c().setTextAlign('center').run(),
                    isActive: editor.isActive({ textAlign: 'center' }),
                };
            case 'alignRight':
                return {
                    icon: _jsx(FormatAlignRightIcon, { fontSize: "small" }),
                    label: 'Align right',
                    action: () => c().setTextAlign('right').run(),
                    isActive: editor.isActive({ textAlign: 'right' }),
                };
            case 'alignJustify':
                return {
                    icon: _jsx(FormatAlignJustifyIcon, { fontSize: "small" }),
                    label: 'Justify',
                    action: () => c().setTextAlign('justify').run(),
                    isActive: editor.isActive({ textAlign: 'justify' }),
                };
            // ── Colors ──────────────────────────────────────────────────────────────
            // Native <input type="color"> is hidden and triggered via ref click.
            // The onChange handler applies the chosen color to the current selection.
            case 'textColor':
                return {
                    icon: _jsx(FormatColorTextIcon, { fontSize: "small" }),
                    label: 'Text color',
                    action: () => textColorRef.current?.click(),
                    isActive: false,
                };
            case 'bgColor':
                return {
                    icon: _jsx(FormatColorFillIcon, { fontSize: "small" }),
                    label: 'Background color',
                    action: () => bgColorRef.current?.click(),
                    isActive: false,
                };
            // ── Paragraph direction ──────────────────────────────────────────────────
            // Sets the `dir` attribute on the current paragraph node.
            // Requires the paragraph node to have `dir` in its attribute schema
            // (configure via a custom Paragraph extension in IpsRichTextEditor.tsx).
            case 'rtl':
                return {
                    icon: _jsx(FormatTextdirectionRToLIcon, { fontSize: "small" }),
                    label: 'RTL direction',
                    action: () => c().updateAttributes('paragraph', { dir: 'rtl' }).run(),
                    isActive: editor.isActive('paragraph', { dir: 'rtl' }),
                };
            case 'ltr':
                return {
                    icon: _jsx(FormatTextdirectionLToRIcon, { fontSize: "small" }),
                    label: 'LTR direction',
                    action: () => c().updateAttributes('paragraph', { dir: 'ltr' }).run(),
                    isActive: editor.isActive('paragraph', { dir: 'ltr' }),
                };
            // ── History ─────────────────────────────────────────────────────────────
            case 'undo':
                return {
                    icon: _jsx(UndoIcon, { fontSize: "small" }),
                    label: 'Undo (Ctrl+Z)',
                    action: () => c().undo().run(),
                    isActive: false,
                    disabled: !can.undo(),
                };
            case 'redo':
                return {
                    icon: _jsx(RedoIcon, { fontSize: "small" }),
                    label: 'Redo (Ctrl+Shift+Z)',
                    action: () => c().redo().run(),
                    isActive: false,
                    disabled: !can.redo(),
                };
            // ── Clear formatting ─────────────────────────────────────────────────────
            case 'clearFormat':
                return {
                    icon: _jsx(FormatClearIcon, { fontSize: "small" }),
                    label: 'Clear formatting',
                    action: () => c().unsetAllMarks().clearNodes().run(),
                    isActive: false,
                };
            // ── Table ────────────────────────────────────────────────────────────────
            case 'insertTable':
                return {
                    icon: _jsx(TableChartIcon, { fontSize: "small" }),
                    label: 'הוסף טבלה',
                    action: (e) => {
                        if (e)
                            setTableAnchor(e.currentTarget);
                    },
                    isActive: editor.isActive('table'),
                };
            // ── Exhaustive guard ─────────────────────────────────────────────────────
            default: {
                const _exhaustive = item;
                return { icon: null, label: String(_exhaustive), action: () => { }, isActive: false };
            }
        }
    }
    // ─── Render ──────────────────────────────────────────────────────────────────
    return (_jsxs(Paper, { elevation: 0, className: "ips-rte-toolbar", sx: {
            display: 'flex',
            flexDirection: 'column',
            position: 'sticky',
            bottom: 0,
            zIndex: 1,
            borderRadius: '0 0 4px 4px',
            borderTop: `1px solid ${theme.palette.divider}`,
            bgcolor: 'transparent',
        }, children: [_jsx("input", { type: "color", ref: textColorRef, style: { position: 'absolute', opacity: 0, pointerEvents: 'none', width: 0, height: 0 }, onChange: (e) => c().setColor(e.target.value).run() }), _jsx("input", { type: "color", ref: bgColorRef, style: { position: 'absolute', opacity: 0, pointerEvents: 'none', width: 0, height: 0 }, onChange: (e) => c().setHighlight({ color: e.target.value }).run() }), _jsx("input", { type: "file", ref: imageFileRef, accept: "image/*", style: { position: 'absolute', opacity: 0, pointerEvents: 'none', width: 0, height: 0 }, onChange: (e) => {
                    const file = e.target.files?.[0];
                    if (!file)
                        return;
                    const MAX_PX = 400;
                    const reader = new FileReader();
                    reader.onload = (ev) => {
                        const dataUrl = ev.target?.result;
                        const img = new window.Image();
                        img.onload = () => {
                            const scale = img.width > MAX_PX ? MAX_PX / img.width : 1;
                            const w = Math.round(img.width * scale);
                            const h = Math.round(img.height * scale);
                            const canvas = document.createElement('canvas');
                            canvas.width = w;
                            canvas.height = h;
                            canvas.getContext('2d').drawImage(img, 0, 0, w, h);
                            editor.chain().focus().setImage({ src: canvas.toDataURL(file.type || 'image/png'), width: w, height: h }).run();
                        };
                        img.src = dataUrl;
                    };
                    reader.readAsDataURL(file);
                } }), _jsx("input", { type: "file", ref: fileRef, style: { position: 'absolute', opacity: 0, pointerEvents: 'none', width: 0, height: 0 }, onChange: (e) => {
                    const file = e.target.files?.[0];
                    if (!file)
                        return;
                    const objectUrl = URL.createObjectURL(file);
                    editor.chain().focus().insertContent(`<a href="${objectUrl}" download="${file.name}">📎 ${file.name}</a>`).run();
                } }), _jsxs(Box, { ref: topRowRef, sx: {
                    display: 'flex', alignItems: 'center', flexWrap: 'nowrap', overflow: 'hidden',
                    px: 1, py: 0.5, gap: 0.5,
                    bgcolor: theme.palette.grey[100],
                    borderRadius: '0 0 0 0',
                }, children: [visibleTopItems.map(renderBtn), _jsx(Tooltip, { title: "\u05E2\u05D5\u05D3 \u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA", placement: "top", children: _jsx("span", { children: _jsx(IconButton, { size: "small", onClick: (e) => setOverflowAnchor(e.currentTarget), sx: { borderRadius: 1, p: 0.5, ml: 'auto', opacity: overflowItems.length > 0 ? 1 : 0, pointerEvents: overflowItems.length > 0 ? 'auto' : 'none' }, children: _jsx(ExpandMoreIcon, { fontSize: "small" }) }) }) })] }), _jsx(Popover, { open: Boolean(overflowAnchor), anchorEl: overflowAnchor, onClose: () => setOverflowAnchor(null), anchorOrigin: { vertical: 'bottom', horizontal: 'left' }, transformOrigin: { vertical: 'top', horizontal: 'left' }, children: _jsx(Box, { sx: { display: 'flex', flexWrap: 'wrap', p: 0.5, gap: 0.5, maxWidth: 240 }, children: overflowItems.map(renderBtn) }) }), bottomGroups.length > 0 && (_jsx(Box, { sx: { display: 'flex', alignItems: 'center', flexWrap: 'wrap', px: 1, py: 0.5, gap: 0.5, bgcolor: 'transparent' }, children: bottomGroups.map((group, gi) => (_jsxs(React.Fragment, { children: [gi > 0 && _jsx(Divider, { orientation: "vertical", flexItem: true, sx: { mx: 0.5, my: 0.25 } }), group.items.map(renderBtn)] }, gi))) })), _jsx(Popover, { open: Boolean(tableAnchor), anchorEl: tableAnchor, onClose: () => { setTableAnchor(null); setHovered({ rows: 0, cols: 0 }); }, anchorOrigin: { vertical: 'bottom', horizontal: 'left' }, transformOrigin: { vertical: 'top', horizontal: 'left' }, children: _jsxs(Box, { sx: { p: 1.5 }, children: [_jsx(Typography, { variant: "caption", sx: { display: 'block', mb: 1, color: 'text.secondary', textAlign: 'center' }, children: hovered.rows > 0 && hovered.cols > 0 ? `${hovered.rows} × ${hovered.cols}` : 'בחר גודל טבלה' }), _jsx(Box, { sx: { display: 'grid', gridTemplateColumns: `repeat(${MAX_COLS}, 20px)`, gap: '3px' }, children: Array.from({ length: MAX_ROWS }, (_, r) => Array.from({ length: MAX_COLS }, (_, col) => {
                                const row = r + 1;
                                const c2 = col + 1;
                                const isHighlighted = row <= hovered.rows && c2 <= hovered.cols;
                                return (_jsx(Box, { onMouseEnter: () => setHovered({ rows: row, cols: c2 }), onClick: () => { c().insertTable({ rows: row, cols: c2, withHeaderRow: true }).run(); setTableAnchor(null); setHovered({ rows: 0, cols: 0 }); }, sx: {
                                        width: 20, height: 20, border: '1px solid', borderRadius: '2px', cursor: 'pointer', transition: 'all 0.1s',
                                        borderColor: isHighlighted ? 'primary.main' : 'divider',
                                        bgcolor: isHighlighted ? alpha(theme.palette.primary.main, 0.15) : 'background.paper',
                                    } }, `${row}-${c2}`));
                            })) })] }) })] }));
}
