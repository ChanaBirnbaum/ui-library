/**
 * Regression tests for the Emotion cache plumbing.
 *
 * The failure these guard against: when a consumer lists `@emotion/cache` in
 * a webpack Module Federation `shared` block, its default export — a
 * function — can arrive wrapped as `{ default: fn }`, and `createCache(...)`
 * throws "X is not a function" from inside a provider.
 */
declare const REGISTRY_KEY = "__IPS_EMOTION_CACHES__";
type RtlUtils = typeof import('./rtlUtils');
declare const loadRtlUtils: (cacheModuleFactory?: () => unknown) => RtlUtils;
declare const realCreateCache: () => RtlUtils["createRtlCache"];
