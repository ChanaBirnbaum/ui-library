/**
 * Turns a component label into a URL slug: `DateTimePicker` → `ips-date-time-picker`.
 */
export declare function slugify(label: string): string;
/**
 * Minimal hash-based router — no dependency, and works as-is on GitHub Pages
 * (a sub-path deploy has no server able to rewrite real paths back to index.html).
 * The current component lives in the URL, so a refresh lands back on it.
 */
export declare function useHashRoute(validIds: readonly string[], fallback: string): [string, (id: string) => void];
