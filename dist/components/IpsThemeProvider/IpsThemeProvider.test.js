import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import { __unsafe_useEmotionCache } from '@emotion/react';
import { IpsThemeProvider } from './IpsThemeProvider';
import { IpsRtlProvider } from '../IpsRtlProvider';
/**
 * In a host + MFE setup every app wraps its own subtree, so these providers
 * end up nested. A nested provider must not push a *second* cache under the
 * same key — that overrides the inherited context and breaks style insertion
 * for everything below it.
 */
const Probe = ({ onCache, }) => {
    onCache(__unsafe_useEmotionCache());
    return _jsx("span", { "data-testid": "probe" });
};
describe('IpsThemeProvider cache nesting', () => {
    it('provides the RTL cache at the root', () => {
        let cache = null;
        render(_jsx(IpsThemeProvider, { children: _jsx(Probe, { onCache: c => (cache = c) }) }));
        expect(cache.key).toBe('muirtl');
    });
    it('does not replace the inherited cache when nested with the same direction', () => {
        const seen = [];
        render(_jsxs(IpsThemeProvider, { children: [_jsx(Probe, { onCache: c => seen.push(c) }), _jsx(IpsThemeProvider, { children: _jsx(Probe, { onCache: c => seen.push(c) }) })] }));
        expect(seen).toHaveLength(2);
        expect(seen[1]).toBe(seen[0]);
    });
    it('still creates its own cache when the direction differs from the ancestor', () => {
        const seen = [];
        render(_jsxs(IpsThemeProvider, { direction: "rtl", children: [_jsx(Probe, { onCache: c => seen.push(c) }), _jsx(IpsThemeProvider, { direction: "ltr", children: _jsx(Probe, { onCache: c => seen.push(c) }) })] }));
        expect(seen[0].key).toBe('muirtl');
        expect(seen[1].key).toBe('muiltr');
    });
    it('leaves the inherited cache alone when IpsRtlProvider is nested inside', () => {
        const seen = [];
        render(_jsxs(IpsThemeProvider, { children: [_jsx(Probe, { onCache: c => seen.push(c) }), _jsx(IpsRtlProvider, { children: _jsx(Probe, { onCache: c => seen.push(c) }) })] }));
        expect(seen[1]).toBe(seen[0]);
    });
    it('IpsRtlProvider still supplies the RTL cache on its own', () => {
        let cache = null;
        render(_jsx(IpsRtlProvider, { children: _jsx(Probe, { onCache: c => (cache = c) }) }));
        expect(cache.key).toBe('muirtl');
    });
});
