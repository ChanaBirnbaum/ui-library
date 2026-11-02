import { jsx as _jsx } from "react/jsx-runtime";
import IconButton from '@mui/material/IconButton';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
export function ExpandCell({ row }) {
    return (_jsx(IconButton, { size: "small", onClick: (e) => { e.stopPropagation(); row.toggleExpanded(); }, "aria-label": row.getIsExpanded() ? 'Collapse row' : 'Expand row', sx: {
            transform: row.getIsExpanded() ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
            color: 'text.secondary',
        }, children: _jsx(KeyboardArrowRightIcon, { fontSize: "small" }) }));
}
