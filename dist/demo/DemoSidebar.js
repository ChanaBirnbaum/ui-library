import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useRef, useState } from 'react';
import { Box, Typography, InputBase, Collapse, Chip } from '@mui/material';
const SearchIcon = () => (_jsxs("svg", { width: "15", height: "15", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", children: [_jsx("circle", { cx: "11", cy: "11", r: "7" }), _jsx("path", { d: "M20 20l-3.5-3.5" })] }));
const ClearIcon = () => (_jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", children: _jsx("path", { d: "M6 6l12 12M18 6L6 18" }) }));
/** Chevron pointing down when the group is open, sideways when closed. */
const Chevron = ({ open }) => (_jsx("svg", { width: "10", height: "10", viewBox: "0 0 24 24", fill: "currentColor", style: {
        transition: 'transform .15s ease',
        transform: open ? 'rotate(0deg)' : 'rotate(90deg)',
        flexShrink: 0,
    }, children: _jsx("path", { d: "M12 16.5L4 8h16z" }) }));
/** The little square "component" glyph Storybook puts next to every story. */
const ComponentGlyph = ({ active }) => (_jsx("svg", { width: "13", height: "13", viewBox: "0 0 24 24", fill: "none", style: { flexShrink: 0 }, children: _jsx("rect", { x: "3.5", y: "3.5", width: "17", height: "17", rx: "4", stroke: active ? 'currentColor' : '#1D4ED8', strokeWidth: "2", fill: active ? 'currentColor' : 'rgba(29,78,216,.12)', opacity: active ? 0.9 : 1 }) }));
export function DemoSidebar({ items, activeId, onSelect }) {
    const [query, setQuery] = useState('');
    const [collapsed, setCollapsed] = useState({});
    const searchRef = useRef(null);
    const activeRef = useRef(null);
    // "/" focuses the filter, the way it does in Storybook.
    useEffect(() => {
        const onKeyDown = (e) => {
            const el = e.target;
            const typing = !!el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.isContentEditable);
            if (e.key === '/' && !typing) {
                e.preventDefault();
                searchRef.current?.focus();
            }
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
    }, []);
    // Keep the selected item in view when the route changes from outside (deep link, refresh).
    useEffect(() => {
        activeRef.current?.scrollIntoView?.({ block: 'nearest' });
    }, [activeId]);
    const q = query.trim().toLowerCase();
    const groups = useMemo(() => {
        const visible = q ? items.filter(i => i.label.toLowerCase().includes(q) || i.id.includes(q)) : items;
        const byGroup = new Map();
        for (const item of visible) {
            const bucket = byGroup.get(item.group);
            if (bucket)
                bucket.push(item);
            else
                byGroup.set(item.group, [item]);
        }
        return [...byGroup.entries()];
    }, [items, q]);
    return (_jsxs(Box, { sx: {
            width: 272,
            flexShrink: 0,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            bgcolor: '#fff',
            borderInlineEnd: '1px solid #e3e8ef',
        }, children: [_jsx(Box, { sx: { px: 2.5, pt: 2.5, pb: 2 }, children: _jsxs(Box, { sx: { display: 'flex', alignItems: 'center', gap: 1.25 }, children: [_jsx(Box, { sx: {
                                width: 34,
                                height: 34,
                                borderRadius: 1.5,
                                display: 'grid',
                                placeItems: 'center',
                                fontSize: 18,
                                background: 'linear-gradient(135deg, #1D4ED8 0%, #00033D 100%)',
                            }, children: "\uD83C\uDFA8" }), _jsxs(Box, { sx: { minWidth: 0 }, children: [_jsx(Typography, { sx: { fontSize: 14, fontWeight: 700, color: '#0f172a', lineHeight: 1.2 }, children: "IPS UI Library" }), _jsx(Typography, { sx: { fontSize: 11, color: '#64748b', lineHeight: 1.4 }, children: "React 18 \u00B7 TypeScript \u00B7 MUI" })] })] }) }), _jsx(Box, { sx: { px: 2, pb: 1.5 }, children: _jsxs(Box, { sx: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        px: 1.25,
                        height: 34,
                        borderRadius: 1.5,
                        border: '1px solid #e3e8ef',
                        bgcolor: '#f8fafc',
                        color: '#94a3b8',
                        transition: 'border-color .15s, background-color .15s',
                        '&:focus-within': { borderColor: '#1D4ED8', bgcolor: '#fff' },
                    }, children: [_jsx(SearchIcon, {}), _jsx(InputBase, { inputRef: searchRef, value: query, onChange: e => setQuery(e.target.value), onKeyDown: e => {
                                if (e.key === 'Escape')
                                    setQuery('');
                            }, placeholder: "\u05D7\u05D9\u05E4\u05D5\u05E9 \u05E4\u05E7\u05D3", sx: { flex: 1, fontSize: 13, color: '#0f172a', '& input::placeholder': { opacity: 0.7 } } }), query ? (_jsx(Box, { component: "button", type: "button", "aria-label": "\u05E0\u05E7\u05D4 \u05D7\u05D9\u05E4\u05D5\u05E9", onClick: () => setQuery(''), sx: {
                                display: 'grid',
                                placeItems: 'center',
                                border: 0,
                                p: 0.25,
                                borderRadius: 1,
                                cursor: 'pointer',
                                bgcolor: 'transparent',
                                color: '#94a3b8',
                                '&:hover': { color: '#0f172a' },
                            }, children: _jsx(ClearIcon, {}) })) : (_jsx(Box, { sx: {
                                fontSize: 11,
                                px: 0.75,
                                borderRadius: 0.75,
                                border: '1px solid #e3e8ef',
                                color: '#94a3b8',
                                lineHeight: '16px',
                            }, children: "/" }))] }) }), _jsxs(Box, { sx: { flex: 1, overflowY: 'auto', px: 1, pb: 2 }, children: [groups.length === 0 && (_jsx(Typography, { sx: { px: 1.5, py: 2, fontSize: 13, color: '#94a3b8' }, children: "\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E4\u05E7\u05D3\u05D9\u05DD \u05EA\u05D5\u05D0\u05DE\u05D9\u05DD" })), groups.map(([group, groupItems]) => {
                        // A live filter always shows what it matched, regardless of collapse state.
                        const open = q ? true : !collapsed[group];
                        return (_jsxs(Box, { sx: { mb: 0.5 }, children: [_jsxs(Box, { component: "button", type: "button", onClick: () => setCollapsed(c => ({ ...c, [group]: !c[group] })), sx: {
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        px: 1.25,
                                        py: 0.75,
                                        border: 0,
                                        borderRadius: 1.5,
                                        cursor: 'pointer',
                                        bgcolor: 'transparent',
                                        color: '#334155',
                                        font: 'inherit',
                                        fontSize: 12.5,
                                        fontWeight: 700,
                                        textAlign: 'start',
                                        '&:hover': { bgcolor: '#f1f5f9' },
                                    }, children: [_jsx(Chevron, { open: open }), _jsx(Box, { component: "span", sx: { flex: 1 }, children: group }), _jsx(Chip, { label: groupItems.length, size: "small", sx: { height: 18, fontSize: 10.5, bgcolor: '#f1f5f9', color: '#64748b', '& .MuiChip-label': { px: 0.75 } } })] }), _jsx(Collapse, { in: open, timeout: 140, unmountOnExit: true, children: _jsx(Box, { sx: { pt: 0.25 }, children: groupItems.map(item => {
                                            const active = item.id === activeId;
                                            return (_jsxs(Box, { component: "button", type: "button", ref: active ? activeRef : undefined, onClick: () => onSelect(item.id), "aria-current": active ? 'page' : undefined, sx: {
                                                    width: '100%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 1,
                                                    ps: 3,
                                                    pe: 1.25,
                                                    py: 0.7,
                                                    mb: '2px',
                                                    border: 0,
                                                    borderRadius: 1.5,
                                                    cursor: 'pointer',
                                                    font: 'inherit',
                                                    fontSize: 13,
                                                    fontWeight: active ? 600 : 400,
                                                    textAlign: 'start',
                                                    bgcolor: active ? '#1D4ED8' : 'transparent',
                                                    color: active ? '#fff' : '#475569',
                                                    transition: 'background-color .12s, color .12s',
                                                    '&:hover': { bgcolor: active ? '#1D4ED8' : '#f1f5f9', color: active ? '#fff' : '#0f172a' },
                                                }, children: [_jsx(ComponentGlyph, { active: active }), _jsxs(Box, { component: "span", sx: { flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }, children: ["Ips", item.label] })] }, item.id));
                                        }) }) })] }, group));
                    })] }), _jsx(Box, { sx: { px: 2.5, py: 1.5, borderTop: '1px solid #eef2f7' }, children: _jsxs(Typography, { sx: { fontSize: 11, color: '#94a3b8' }, children: [items.length, " \u05E4\u05E7\u05D3\u05D9\u05DD \u00B7 \u05DC\u05D7\u05E6\u05D5 ", _jsx("b", { children: "/" }), " \u05DC\u05D7\u05D9\u05E4\u05D5\u05E9"] }) })] }));
}
