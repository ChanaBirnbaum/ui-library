import React from 'react';
import type { IconButtonProps } from '@mui/material/IconButton';
import type { SxProps, Theme } from '@mui/material/styles';

export type IpsMenuValue = string | number;

export interface IpsMenuItem {
  /** Returned by onSelect when the item is chosen */
  value: IpsMenuValue;
  label: string;
  /** Optional icon at the start of the item */
  icon?: React.ReactNode;
  disabled?: boolean;
  /** Draws a divider above the item, to separate a group of items */
  dividerBefore?: boolean;
}

export interface IpsMenuProps {
  /** Icon of the trigger button, e.g. a vertical ellipsis (⋮) */
  icon: React.ReactNode;
  /** Accessible name of the trigger button. Required: the trigger shows only an icon */
  label: string;
  items: IpsMenuItem[];
  /**
   * Called with the chosen item's value after the menu has closed and focus is back on the trigger,
   * so anything it opens (a dialog, a drawer) returns focus to the trigger when it closes
   */
  onSelect: (value: IpsMenuValue) => void;
  /** Size of the trigger button. Default: 'medium' */
  size?: IconButtonProps['size'];
  /** Disables the trigger */
  disabled?: boolean;
  /** Id of the menu element. Generated when omitted */
  id?: string;
  /** CSS class on the trigger button */
  className?: string;
  /** MUI sx on the trigger button */
  sx?: SxProps<Theme>;
}
