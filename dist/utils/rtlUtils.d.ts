export declare const isRtl: (locale?: string) => boolean;
export declare const directionFor: (locale?: string) => "ltr" | "rtl";
/**
 * Creates an Emotion cache with stylis-plugin-rtl that automatically flips
 * all CSS physical properties (left ↔ right, margin-left ↔ margin-right, etc.)
 * for RTL languages like Hebrew, Arabic, Farsi.
 *
 * Pass the returned cache to MUI's `<CacheProvider value={cache}>`.
 */
export declare const createRtlCache: () => import('@emotion/cache').EmotionCache;
/** Creates a standard LTR Emotion cache (no CSS flipping). */
export declare const createLtrCache: () => import('@emotion/cache').EmotionCache;
