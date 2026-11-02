import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
// A tooltip listing hundreds of hidden labels is as unusable as an uncapped
// popup: cap the list and count the rest.
const TOOLTIP_MAX_ITEMS = 15;
// Sized to sit level with the 24px chips rather than the 30px an IconButton
// would take at size="small".
const toggleSx = {
    width: 24,
    height: 24,
    p: 0,
    fontSize: 16,
    alignSelf: 'center',
};
/**
 * Expand/collapse control for chip lists that outgrow their field, shared by
 * IpsChipSelect and IpsAutocomplete so the two behave and look identical.
 */
export const ChipOverflowToggle = ({ hiddenLabels, expanded, disabled = false, collapseTooltip, moreItemsLabel, onToggle, }) => {
    const listed = hiddenLabels.slice(0, TOOLTIP_MAX_ITEMS);
    const remaining = hiddenLabels.length - listed.length;
    const tooltip = expanded ? (collapseTooltip) : (_jsxs(Box, { component: "span", sx: { display: 'block', whiteSpace: 'pre-line' }, children: [listed.join('\n'), remaining > 0 ? `\n${moreItemsLabel(remaining)}` : ''] }));
    return (_jsx(Tooltip, { title: tooltip, arrow: true, children: _jsx("span", { children: _jsx(IconButton, { size: "small", "aria-label": expanded ? collapseTooltip : `+${hiddenLabels.length}`, "aria-expanded": expanded, disabled: disabled, onMouseDown: (event) => event.stopPropagation(), onClick: onToggle, onKeyDown: (event) => event.stopPropagation(), sx: toggleSx, children: expanded ? (_jsx(RemoveIcon, { fontSize: "inherit" })) : (_jsx(AddIcon, { fontSize: "inherit" })) }) }) }));
};
export default ChipOverflowToggle;
