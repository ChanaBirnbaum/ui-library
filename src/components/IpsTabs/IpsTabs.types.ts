import type { ReactNode } from 'react'
import type { TabsProps } from '@mui/material/Tabs'

export interface IpsTabItem {
  /** Stable identifier — drives selection and aria wiring (required) */
  value: string | number
  /** Primary label (required) */
  label: ReactNode
  /** Optional icon node */
  icon?: ReactNode
  /** Icon placement relative to the label */
  iconPosition?: 'top' | 'bottom' | 'start' | 'end'
  /** Disabled — not selectable */
  disabled?: boolean
  /**
   * Error indication (consumer-controlled, visual only).
   * IpsTabs runs no validation.
   */
  error?: boolean
  /** Small count/badge rendered next to the label */
  badge?: ReactNode | number
  /** Panel content — used only when renderPanels is true */
  content?: ReactNode
  /** Arbitrary key passthrough for the consumer */
  key?: string | number
}

/** Context passed to the renderTabLabel render-prop slot */
export interface IpsTabRenderContext {
  index: number
  tab: IpsTabItem
  selected: boolean
}

export type IpsTabsProps = Omit<TabsProps, 'value' | 'onChange' | 'children'> & {
  /** Ordered list of tab descriptors (required) */
  tabs: IpsTabItem[]
  /**
   * Controlled value of the active tab (required).
   * Owned entirely by the consumer — IpsTabs holds no internal selection state.
   */
  value: string | number
  /** Fired on tab activation with (value, tab). Navigation logic lives in the consumer. */
  onTabChange?: (value: string | number, tab: IpsTabItem) => void
  orientation?: 'horizontal' | 'vertical'
  variant?: 'standard' | 'scrollable' | 'fullWidth'
  scrollButtons?: 'auto' | boolean
  centered?: boolean
  /** When true, IpsTabs also renders accessible tab panels from tab.content */
  renderPanels?: boolean
  /**
   * With renderPanels, mount all panels (hide inactive) instead of mounting
   * active only. Preserves consumer state inside inactive panels.
   */
  keepMounted?: boolean
  /** Prefix for generated tab/panel ids — wire externally-rendered panels */
  idPrefix?: string
  /** Full override of a tab's label content */
  renderTabLabel?: (ctx: IpsTabRenderContext) => ReactNode
  className?: string
}
