import React from 'react'
import { render } from '@testing-library/react'
import { __unsafe_useEmotionCache } from '@emotion/react'
import type { EmotionCache } from '@emotion/cache'
import { IpsThemeProvider } from './IpsThemeProvider'
import { IpsRtlProvider } from '../IpsRtlProvider'

/**
 * In a host + MFE setup every app wraps its own subtree, so these providers
 * end up nested. A nested provider must not push a *second* cache under the
 * same key — that overrides the inherited context and breaks style insertion
 * for everything below it.
 */
const Probe: React.FC<{ onCache: (cache: EmotionCache | null) => void }> = ({
  onCache,
}) => {
  onCache(__unsafe_useEmotionCache())
  return <span data-testid="probe" />
}

describe('IpsThemeProvider cache nesting', () => {
  it('provides the RTL cache at the root', () => {
    let cache: EmotionCache | null = null
    render(
      <IpsThemeProvider>
        <Probe onCache={c => (cache = c)} />
      </IpsThemeProvider>
    )

    expect(cache!.key).toBe('muirtl')
  })

  it('does not replace the inherited cache when nested with the same direction', () => {
    const seen: (EmotionCache | null)[] = []
    render(
      <IpsThemeProvider>
        <Probe onCache={c => seen.push(c)} />
        <IpsThemeProvider>
          <Probe onCache={c => seen.push(c)} />
        </IpsThemeProvider>
      </IpsThemeProvider>
    )

    expect(seen).toHaveLength(2)
    expect(seen[1]).toBe(seen[0])
  })

  it('still creates its own cache when the direction differs from the ancestor', () => {
    const seen: (EmotionCache | null)[] = []
    render(
      <IpsThemeProvider direction="rtl">
        <Probe onCache={c => seen.push(c)} />
        <IpsThemeProvider direction="ltr">
          <Probe onCache={c => seen.push(c)} />
        </IpsThemeProvider>
      </IpsThemeProvider>
    )

    expect(seen[0]!.key).toBe('muirtl')
    expect(seen[1]!.key).toBe('muiltr')
  })

  it('leaves the inherited cache alone when IpsRtlProvider is nested inside', () => {
    const seen: (EmotionCache | null)[] = []
    render(
      <IpsThemeProvider>
        <Probe onCache={c => seen.push(c)} />
        <IpsRtlProvider>
          <Probe onCache={c => seen.push(c)} />
        </IpsRtlProvider>
      </IpsThemeProvider>
    )

    expect(seen[1]).toBe(seen[0])
  })

  it('IpsRtlProvider still supplies the RTL cache on its own', () => {
    let cache: EmotionCache | null = null
    render(
      <IpsRtlProvider>
        <Probe onCache={c => (cache = c)} />
      </IpsRtlProvider>
    )

    expect(cache!.key).toBe('muirtl')
  })
})
