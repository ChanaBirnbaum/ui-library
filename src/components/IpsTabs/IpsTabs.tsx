import React, { forwardRef } from 'react'
import MuiTabs from '@mui/material/Tabs'
import MuiTab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import type { IpsTabsProps, IpsTabItem, IpsTabRenderContext } from './IpsTabs.types'

// ── Badge label helper ─────────────────────────────────────────────────────────

function ComposedLabel({ tab }: { tab: IpsTabItem }) {
  if (tab.badge === undefined) {
    return <>{tab.label}</>
  }
  return (
    <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75 }}>
      <span>{tab.label}</span>
      <Box
        component="span"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          minWidth: 18,
          height: 18,
          px: 0.5,
          borderRadius: '9px',
          bgcolor: tab.error ? 'error.main' : 'primary.main',
          color: 'common.white',
          fontSize: '0.65rem',
          fontWeight: 700,
          lineHeight: 1,
        }}
      >
        {tab.badge}
      </Box>
    </Box>
  )
}

// ── IpsTabs ───────────────────────────────────────────────────────────────────

export const IpsTabs = forwardRef<HTMLDivElement, IpsTabsProps>(function IpsTabs(props, ref) {
  const {
    tabs,
    value,
    onTabChange,
    orientation = 'horizontal',
    variant = 'standard',
    scrollButtons = 'auto',
    centered = false,
    renderPanels = false,
    keepMounted = false,
    idPrefix = 'ips-tabs',
    renderTabLabel,
    className,
    sx,
    ...rest
  } = props

  const rootClass = ['ips-tabs', className].filter(Boolean).join(' ')

  const handleChange = (_event: React.SyntheticEvent, newValue: string | number) => {
    if (onTabChange) {
      const tab = tabs.find((t) => t.value === newValue)
      if (tab) onTabChange(newValue, tab)
    }
  }

  return (
    <>
      <MuiTabs
        ref={ref}
        value={value}
        onChange={handleChange}
        orientation={orientation}
        variant={variant}
        scrollButtons={scrollButtons as any}
        centered={centered}
        className={rootClass}
        sx={{
          '& .MuiTabs-indicator': { backgroundColor: 'primary.main' },
          ...((sx as object | undefined) ?? {}),
        }}
        {...rest}
      >
        {tabs.map((tab, index) => {
          const isSelected = tab.value === value
          const ctx: IpsTabRenderContext = { index, tab, selected: isSelected }

          const labelNode = renderTabLabel
            ? renderTabLabel(ctx)
            : <ComposedLabel tab={tab} />

          const iconNode = renderTabLabel ? undefined : tab.icon

          return (
            <MuiTab
              key={tab.key ?? tab.value}
              value={tab.value}
              label={labelNode}
              icon={iconNode as any}
              iconPosition={tab.iconPosition ?? 'top'}
              disabled={tab.disabled}
              id={`${idPrefix}-tab-${tab.value}`}
              aria-controls={`${idPrefix}-panel-${tab.value}`}
              aria-invalid={tab.error ? true : undefined}
              className="ips-tab"
              sx={
                tab.error
                  ? {
                      color: 'error.main',
                      '&.Mui-selected': { color: 'error.main' },
                    }
                  : undefined
              }
            />
          )
        })}
      </MuiTabs>

      {renderPanels &&
        tabs.map((tab) => {
          const isActive = tab.value === value

          if (!keepMounted && !isActive) return null

          return (
            <div
              key={tab.key ?? tab.value}
              role="tabpanel"
              id={`${idPrefix}-panel-${tab.value}`}
              aria-labelledby={`${idPrefix}-tab-${tab.value}`}
              className="ips-tab-panel"
              hidden={keepMounted && !isActive ? true : undefined}
              style={keepMounted && !isActive ? { display: 'none' } : undefined}
            >
              {tab.content}
            </div>
          )
        })}
    </>
  )
})

IpsTabs.displayName = 'IpsTabs'
