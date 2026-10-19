import React from 'react';
import type { IconButtonProps } from '@mui/material/IconButton';

/**
 * plain — the default MUI icon button (transparent).
 * surface — a 44×44 touch-sized square on a paper (white) background, outlined like the mobile fields
 * and rounded with the theme base radius, for mobile toolbars where it sits next to fields of the same height.
 */
export type IpsIconButtonVariant = 'plain' | 'surface';

export type IpsIconButtonProps = IconButtonProps & {
  /** Icon element to render (required) */
  icon: React.ReactNode;
  /** Tooltip text shown on hover */
  tooltip?: string;
  /** Visual variant. Default: 'plain' */
  variant?: IpsIconButtonVariant;
  /** CSS class on root element */
  className?: string;
};
