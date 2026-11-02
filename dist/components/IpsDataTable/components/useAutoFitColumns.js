import { useLayoutEffect, useRef, useState } from 'react';
/** A clipped column never shrinks below this, even if the table then overflows. */
export const MIN_AUTO_COLUMN_WIDTH = 64;
const NO_WIDTHS = {};
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
export function useAutoFitColumns({ enabled, containerRef, availableWidth, signature, pinnedWidths, }) {
    const [state, setState] = useState({ widths: NO_WIDTHS, measured: null });
    // Natural widths survive a resize — only the container changed, not content.
    const naturalRef = useRef(null);
    // Read inside the effect without making it depend on its own output.
    const pinnedRef = useRef(pinnedWidths);
    pinnedRef.current = pinnedWidths;
    const measured = enabled && state.measured === signature;
    // Applying stale widths from a previous signature would corrupt the next
    // measurement, so they only count once this signature has been measured.
    const widths = measured ? state.widths : NO_WIDTHS;
    useLayoutEffect(() => {
        if (!enabled) {
            naturalRef.current = null;
            setState((prev) => (prev.measured === null ? prev : { widths: NO_WIDTHS, measured: null }));
            return;
        }
        const root = containerRef.current;
        if (!root || availableWidth <= 0)
            return;
        if (state.measured !== signature) {
            // This render applied no widths, so the DOM is showing natural widths.
            naturalRef.current = measureColumns(root);
        }
        const naturals = naturalRef.current;
        if (!naturals)
            return;
        const next = distributeColumnWidths(naturals, pinnedRef.current, availableWidth);
        setState((prev) => prev.measured === signature && isSameWidths(prev.widths, next)
            ? prev
            : { widths: next, measured: signature });
    }, [enabled, containerRef, availableWidth, signature, state.measured]);
    return { widths, isMeasuring: enabled && !measured };
}
/**
 * Natural width per column, read from the header row: every cell in a column
 * has the column's width, and the header is the one row that always exists.
 */
function measureColumns(root) {
    const naturals = {};
    root.querySelectorAll('thead [data-col-id]').forEach((cell) => {
        const id = cell.dataset.colId;
        if (!id)
            return;
        const width = Math.ceil(cell.getBoundingClientRect().width);
        naturals[id] = Math.max(naturals[id] ?? 0, width);
    });
    return naturals;
}
/**
 * Exported for unit tests — jsdom has no layout, so the measuring half of the
 * hook cannot be exercised there, but this is where the actual policy lives.
 */
export function distributeColumnWidths(naturals, pinned, available) {
    const columns = Object.entries(naturals).map(([id, natural]) => [id, pinned[id] ?? natural]);
    const total = columns.reduce((sum, [, width]) => sum + width, 0);
    // +1 absorbs sub-pixel rounding on the measured widths.
    if (total <= available + 1)
        return NO_WIDTHS;
    let remaining = available;
    const flexible = [];
    for (const entry of columns) {
        if (entry[0] in pinned)
            remaining -= entry[1];
        else
            flexible.push(entry);
    }
    if (flexible.length === 0)
        return NO_WIDTHS;
    // Narrowest first: a column that fits its fair share is served in full and
    // releases the rest of its share to the columns still competing.
    const queue = [...flexible].sort((a, b) => a[1] - b[1]);
    const capped = {};
    let count = queue.length;
    for (let i = 0; i < queue.length; i++) {
        const fair = remaining / count;
        const [, natural] = queue[i];
        if (natural <= fair) {
            remaining -= natural;
            count--;
            continue;
        }
        // Everything left is wider than the fair share, so it all shares equally.
        const width = Math.max(Math.floor(fair), MIN_AUTO_COLUMN_WIDTH);
        for (let j = i; j < queue.length; j++)
            capped[queue[j][0]] = width;
        break;
    }
    return capped;
}
function isSameWidths(a, b) {
    const keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length)
        return false;
    return keys.every((key) => a[key] === b[key]);
}
