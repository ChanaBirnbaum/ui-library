import { useCallback, useEffect, useState } from 'react'

/**
 * Turns a component label into a URL slug: `DateTimePicker` → `ips-date-time-picker`.
 */
export function slugify(label: string): string {
  return 'ips-' + label.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

function readHash(validIds: readonly string[], fallback: string): string {
  const raw = window.location.hash.replace(/^#\/?/, '')
  const id = decodeURIComponent(raw.split('?')[0]).trim()
  return validIds.includes(id) ? id : fallback
}

/**
 * Minimal hash-based router — no dependency, and works as-is on GitHub Pages
 * (a sub-path deploy has no server able to rewrite real paths back to index.html).
 * The current component lives in the URL, so a refresh lands back on it.
 */
export function useHashRoute(
  validIds: readonly string[],
  fallback: string
): [string, (id: string) => void] {
  const [route, setRoute] = useState(() => readHash(validIds, fallback))

  useEffect(() => {
    const onHashChange = () => setRoute(readHash(validIds, fallback))
    window.addEventListener('hashchange', onHashChange)
    // Normalise the very first load (bare URL, or an unknown slug) so the address
    // bar always names the component that is actually on screen.
    const current = window.location.hash.replace(/^#\/?/, '')
    if (current !== route) window.history.replaceState(null, '', `#/${route}`)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const navigate = useCallback((id: string) => {
    if (id === readHash(validIds, fallback)) return
    window.location.hash = `#/${id}`
  }, [])

  return [route, navigate]
}
