/**
 * Normalises an `sx` value into an array so component defaults can be merged
 * with a consumer's `sx` instead of one silently overwriting the other.
 */
export const toSxArray = (sx) => (Array.isArray(sx) ? sx : [sx]).filter(Boolean);
/**
 * Applies component defaults to one `slotProps` entry. MUI lets a slot be
 * either an object or an `ownerState => props` callback; spreading the callback
 * form would quietly drop everything the consumer passed, so it is preserved
 * and the defaults are merged into its result instead.
 */
export const mergeSlotProps = (slot, withDefaults) => typeof slot === 'function'
    ? (ownerState) => withDefaults(slot(ownerState))
    : withDefaults(slot);
