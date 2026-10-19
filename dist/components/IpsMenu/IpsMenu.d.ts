import { default as React } from 'react';
import { IpsMenuProps } from './IpsMenu.types';

/**
 * A menu button: an icon button (e.g. ⋮) that opens a list of actions.
 * The menu opens below the trigger, aligned to its end side (left in RTL), so it grows into the content.
 * Arrow keys move between the items, Escape and a click outside close it, and focus returns to the trigger.
 */
export declare const IpsMenu: React.ForwardRefExoticComponent<IpsMenuProps & React.RefAttributes<HTMLButtonElement>>;
export default IpsMenu;
