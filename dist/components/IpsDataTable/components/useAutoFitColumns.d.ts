import { RefObject } from 'react';

/** A clipped column never shrinks below this, even if the table then overflows. */
export declare const MIN_AUTO_COLUMN_WIDTH = 64;
export interface AutoFitOptions {
    /** Only measure in ellipsis mode */
    enabled: boolean;
    /** The scrolling viewport that holds the table */
    containerRef: RefObject<HTMLElement | null>;
    /** Width available to the columns; drives redistribution on resize */
    availableWidth: number;
    /** Changes whenever the content behind the natural widths changes */
    signature: string;
    /** Columns the consumer or the component already sized; excluded from sharing */
    pinnedWidths: Record<string, number>;
}
export interface AutoFitResult {
    /** Width for each column that had to be capped — the ones that get clipped */
    widths: Record<string, number>;
    /**
     * True on the render that measures. The table must shrink-wrap to its
     * content during it, so the measured widths are the natural ones.
     */
    isMeasuring: boolean;
}
/**
 * Shares the available width between columns according to their actual content,
 * so nothing has to be sized by hand.
 *
 * Widths are filled from the narrowest column up: short columns are served in
 * full, and only the columns that are still hungry split what is left over and
 * get clipped. That is what keeps one long column from dragging the short ones
 * down with it.
 *
 * Measuring needs one render with no widths applied — it happens inside
 * `useLayoutEffect`, before paint, so the unconstrained layout is never seen.
 */
export declare function useAutoFitColumns({ enabled, containerRef, availableWidth, signature, pinnedWidths, }: AutoFitOptions): AutoFitResult;
/**
 * Exported for unit tests — jsdom has no layout, so the measuring half of the
 * hook cannot be exercised there, but this is where the actual policy lives.
 */
export declare function distributeColumnWidths(naturals: Record<string, number>, pinned: Record<string, number>, available: number): Record<string, number>;
