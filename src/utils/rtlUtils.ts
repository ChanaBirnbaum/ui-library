import * as emotionCacheNs from '@emotion/cache'
import createCacheDefault from '@emotion/cache'
import type { EmotionCache, Options } from '@emotion/cache'
import rtlPlugin from '../vendor/stylis-plugin-rtl'

/** Emotion cache key used for the RTL (CSS-flipping) cache. */
export const RTL_CACHE_KEY = 'muirtl'
/** Emotion cache key used for the plain LTR cache. */
export const LTR_CACHE_KEY = 'muiltr'

type CreateCache = (options: Options) => EmotionCache

/**
 * Walks a possibly-wrapped module binding down to the callable underneath.
 * Each interop layer adds one `{ default: … }` level, so unwrap iteratively
 * rather than guessing at a fixed depth.
 */
const unwrapCallable = (value: unknown, maxDepth = 4): CreateCache | null => {
  let current = value
  for (let depth = 0; depth <= maxDepth; depth += 1) {
    if (typeof current === 'function') return current as CreateCache
    if (!current || typeof current !== 'object') return null
    current = (current as Record<string, unknown>).default
  }
  return null
}

/**
 * Resolves `createCache` no matter how the consuming bundler exposed it.
 *
 * `@emotion/cache`'s default export is a *function*. When a host lists it in
 * a webpack Module Federation `shared` block, federation's interop layer
 * stacks on top of the bundler's own and the binding can arrive as
 * `{ default: fn }` rather than `fn`. `createCache(...)` then throws
 * "X is not a function" from inside a provider, with nothing in the message
 * pointing at the real cause.
 *
 * We cannot control every consumer's `shared` config — and one mis-configured
 * MFE is enough to trigger it, intermittently, depending on which app wins
 * the share scope — so unwrap defensively here.
 */
const resolveCreateCache = (): CreateCache => {
  const ns = emotionCacheNs as unknown as Record<string, unknown> | undefined

  const resolved =
    unwrapCallable(createCacheDefault) ??
    unwrapCallable(ns) ??
    unwrapCallable(ns?.createCache)

  if (resolved) return resolved

  throw new Error(
    '[ui-library] Could not resolve `createCache` from @emotion/cache ' +
      `(got ${Object.prototype.toString.call(createCacheDefault)}). ` +
      'Most likely @emotion/cache appears in a Module Federation `shared` ' +
      'block in the host or one of the MFEs. Remove it there: it is a ' +
      'stateless factory, and only @emotion/react needs to be a singleton.'
  )
}

/**
 * Caches are registered on `globalThis` so that a host and its MFEs reuse one
 * instance per key even when each bundles its own copy of this library.
 *
 * Two independent caches sharing a key both manage the same
 * `<style data-emotion="muirtl">` tags in `document.head`, which surfaces as
 * duplicated or disappearing styles depending on mount order.
 */
const CACHE_REGISTRY_KEY = '__IPS_EMOTION_CACHES__'

const getRegistry = (): Record<string, EmotionCache> | null => {
  if (typeof document === 'undefined') return null
  const g = globalThis as unknown as Record<string, unknown>
  if (!g[CACHE_REGISTRY_KEY]) g[CACHE_REGISTRY_KEY] = {}
  return g[CACHE_REGISTRY_KEY] as Record<string, EmotionCache>
}

const getOrCreateCache = (
  key: string,
  options: Omit<Options, 'key'>
): EmotionCache => {
  const registry = getRegistry()
  const existing = registry?.[key]
  if (existing) return existing

  const cache = resolveCreateCache()({ ...options, key })
  if (registry) registry[key] = cache
  return cache
}

export const isRtl = (locale?: string) => {
  if (!locale) return false
  const rtlLangs = ['ar', 'he', 'fa', 'ur']
  return rtlLangs.some(l => locale.startsWith(l))
}

export const directionFor = (locale?: string) => (isRtl(locale) ? 'rtl' : 'ltr')

/**
 * Returns the Emotion cache with `stylis-plugin-rtl`, which automatically
 * flips all CSS physical properties (left ↔ right, margin-left ↔
 * margin-right, etc.) for RTL languages like Hebrew, Arabic, Farsi.
 *
 * The instance is shared process-wide, so calling this from the host and from
 * an MFE yields the same cache.
 *
 * Pass the result to MUI's `<CacheProvider value={cache}>`.
 */
export const createRtlCache = (): EmotionCache =>
  getOrCreateCache(RTL_CACHE_KEY, { stylisPlugins: [rtlPlugin] })

/** Returns the shared LTR Emotion cache (no CSS flipping). */
export const createLtrCache = (): EmotionCache =>
  getOrCreateCache(LTR_CACHE_KEY, {})
