import React from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import type { SxProps, Theme } from '@mui/material/styles';

// A tooltip listing hundreds of hidden labels is as unusable as an uncapped
// popup: cap the list and count the rest.
const TOOLTIP_MAX_ITEMS = 15;

// Sized to sit level with the 24px chips rather than the 30px an IconButton
// would take at size="small".
const toggleSx: SxProps<Theme> = {
  width: 24,
  height: 24,
  p: 0,
  fontSize: 16,
  alignSelf: 'center',
};

export interface ChipOverflowToggleProps {
  /** Labels of the chips currently hidden behind the toggle */
  hiddenLabels: string[];
  expanded: boolean;
  disabled?: boolean;
  /** Tooltip shown while expanded */
  collapseTooltip: string;
  /** Tooltip suffix when more chips are hidden than the tooltip lists */
  moreItemsLabel: (count: number) => string;
  onToggle: (event: React.MouseEvent) => void;
}

/**
 * Expand/collapse control for chip lists that outgrow their field, shared by
 * IpsChipSelect and IpsAutocomplete so the two behave and look identical.
 */
export const ChipOverflowToggle: React.FC<ChipOverflowToggleProps> = ({
  hiddenLabels,
  expanded,
  disabled = false,
  collapseTooltip,
  moreItemsLabel,
  onToggle,
}) => {
  const listed = hiddenLabels.slice(0, TOOLTIP_MAX_ITEMS);
  const remaining = hiddenLabels.length - listed.length;

  const tooltip = expanded ? (
    collapseTooltip
  ) : (
    <Box component="span" sx={{ display: 'block', whiteSpace: 'pre-line' }}>
      {listed.join('\n')}
      {remaining > 0 ? `\n${moreItemsLabel(remaining)}` : ''}
    </Box>
  );

  return (
    <Tooltip title={tooltip} arrow>
      {/* A disabled button swallows pointer events, so the tooltip needs a
          wrapper that still receives them. */}
      <span>
        <IconButton
          size="small"
          aria-label={expanded ? collapseTooltip : `+${hiddenLabels.length}`}
          aria-expanded={expanded}
          disabled={disabled}
          onMouseDown={(event) => event.stopPropagation()}
          onClick={onToggle}
          onKeyDown={(event) => event.stopPropagation()}
          sx={toggleSx}
        >
          {expanded ? (
            <RemoveIcon fontSize="inherit" />
          ) : (
            <AddIcon fontSize="inherit" />
          )}
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default ChipOverflowToggle;
