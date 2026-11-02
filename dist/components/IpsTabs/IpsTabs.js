import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
import MuiTabs from '@mui/material/Tabs';
import MuiTab from '@mui/material/Tab';
import Box from '@mui/material/Box';
// ── Badge label helper ─────────────────────────────────────────────────────────
function ComposedLabel({ tab }) {
    if (tab.badge === undefined) {
        return _jsx(_Fragment, { children: tab.label });
    }
    return (_jsxs(Box, { component: "span", sx: { display: 'inline-flex', alignItems: 'center', gap: 0.75 }, children: [_jsx("span", { children: tab.label }), _jsx(Box, { component: "span", sx: {
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
                }, children: tab.badge })] }));
}
// ── IpsTabs ───────────────────────────────────────────────────────────────────
export const IpsTabs = forwardRef(function IpsTabs(props, ref) {
    const { tabs, value, onTabChange, orientation = 'horizontal', variant = 'standard', scrollButtons = 'auto', centered = false, renderPanels = false, keepMounted = false, idPrefix = 'ips-tabs', renderTabLabel, className, sx, ...rest } = props;
    const rootClass = ['ips-tabs', className].filter(Boolean).join(' ');
    const handleChange = (_event, newValue) => {
        if (onTabChange) {
            const tab = tabs.find((t) => t.value === newValue);
            if (tab)
                onTabChange(newValue, tab);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(MuiTabs, { ref: ref, value: value, onChange: handleChange, orientation: orientation, variant: variant, scrollButtons: scrollButtons, centered: centered, className: rootClass, sx: {
                    '& .MuiTabs-indicator': { backgroundColor: 'primary.main' },
                    ...(sx ?? {}),
                }, ...rest, children: tabs.map((tab, index) => {
                    const isSelected = tab.value === value;
                    const ctx = { index, tab, selected: isSelected };
                    const labelNode = renderTabLabel
                        ? renderTabLabel(ctx)
                        : _jsx(ComposedLabel, { tab: tab });
                    const iconNode = renderTabLabel ? undefined : tab.icon;
                    return (_jsx(MuiTab, { value: tab.value, label: labelNode, icon: iconNode, iconPosition: tab.iconPosition ?? 'top', disabled: tab.disabled, id: `${idPrefix}-tab-${tab.value}`, "aria-controls": `${idPrefix}-panel-${tab.value}`, "aria-invalid": tab.error ? true : undefined, className: "ips-tab", sx: tab.error
                            ? {
                                color: 'error.main',
                                '&.Mui-selected': { color: 'error.main' },
                            }
                            : undefined }, tab.key ?? tab.value));
                }) }), renderPanels &&
                tabs.map((tab) => {
                    const isActive = tab.value === value;
                    if (!keepMounted && !isActive)
                        return null;
                    return (_jsx("div", { role: "tabpanel", id: `${idPrefix}-panel-${tab.value}`, "aria-labelledby": `${idPrefix}-tab-${tab.value}`, className: "ips-tab-panel", hidden: keepMounted && !isActive ? true : undefined, style: keepMounted && !isActive ? { display: 'none' } : undefined, children: tab.content }, tab.key ?? tab.value));
                })] }));
});
IpsTabs.displayName = 'IpsTabs';
