import { EmotionCache } from '@emotion/cache';

/** Emotion cache key used for the RTL (CSS-flipping) cache. */
export declare const RTL_CACHE_KEY = "muirtl";
/** Emotion cache key used for the plain LTR cache. */
export declare const LTR_CACHE_KEY = "muiltr";
export declare const isRtl: (locale?: string) => boolean;
export declare const directionFor: (locale?: string) => "ltr" | "rtl";
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
export declare const createRtlCache: () => EmotionCache;
/** Returns the shared LTR Emotion cache (no CSS flipping). */
export declare const createLtrCache: () => EmotionCache;
