import React, { forwardRef, useId, useRef, useState } from 'react';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import { IpsIconButton } from '../IpsIconButton';
import type { IpsMenuItem, IpsMenuProps, IpsMenuValue } from './IpsMenu.types';

/**
 * A menu button: an icon button (e.g. ⋮) that opens a list of actions.
 * The menu opens below the trigger, aligned to its end side (left in RTL), so it grows into the content.
 * Arrow keys move between the items, Escape and a click outside close it, and focus returns to the trigger.
 */
export const IpsMenu = forwardRef<HTMLButtonElement, IpsMenuProps>(function IpsMenu(props, ref) {
  const { icon, label, items, onSelect, size = 'medium', disabled = false, id, className, sx } = props;

  const theme = useTheme();
  const generatedId = useId();
  const menuId = id ?? `ips-menu-${generatedId}`;
  const triggerId = `${menuId}-trigger`;

  const [anchorElement, setAnchorElement] = useState<HTMLElement | null>(null);
  const isOpen = anchorElement !== null;
  // The chosen value waits for the end of the closing transition: by then focus is back on the trigger
  const chosenValueRef = useRef<{ value: IpsMenuValue } | null>(null);

  // anchorOrigin is physical; the end side of the trigger is its left edge in RTL
  const endSide = theme.direction === 'rtl' ? 'left' : 'right';

  const close = () => setAnchorElement(null);

  const choose = (value: IpsMenuValue) => {
    chosenValueRef.current = { value };
    close();
  };

  const reportChosenValue = () => {
    const chosen = chosenValueRef.current;
    chosenValueRef.current = null;
    if (chosen) {
      onSelect(chosen.value);
    }
  };

  const triggerClassName = ['ips-menu-trigger', className].filter(Boolean).join(' ');

  return (
    <>
      <IpsIconButton
        ref={ref}
        id={triggerId}
        icon={icon}
        size={size}
        disabled={disabled}
        className={triggerClassName}
        sx={sx}
        aria-label={label}
        aria-haspopup="menu"
        aria-expanded={isOpen ? 'true' : undefined}
        aria-controls={isOpen ? menuId : undefined}
        onClick={(event) => setAnchorElement(event.currentTarget)}
      />
      <Menu
        className="ips-menu"
        anchorEl={anchorElement}
        open={isOpen}
        onClose={close}
        anchorOrigin={{ vertical: 'bottom', horizontal: endSide }}
        transformOrigin={{ vertical: 'top', horizontal: endSide }}
        slotProps={{
          // The id is on the list (role="menu"), the element the trigger's aria-controls refers to
          list: { id: menuId, 'aria-labelledby': triggerId },
          transition: { onExited: reportChosenValue },
        }}
      >
        {items.flatMap((item) => renderItem(item, choose))}
      </Menu>
    </>
  );
});

// MUI Menu does not accept a Fragment as a child, so a divider and its item are returned as an array
function renderItem(item: IpsMenuItem, choose: (value: IpsMenuValue) => void): React.ReactElement[] {
  const menuItem = (
    <MenuItem key={item.value} disabled={item.disabled} onClick={() => choose(item.value)}>
      {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}
      <ListItemText>{item.label}</ListItemText>
    </MenuItem>
  );

  if (!item.dividerBefore) {
    return [menuItem];
  }
  return [<Divider key={`${item.value}-divider`} />, menuItem];
}

export default IpsMenu;
