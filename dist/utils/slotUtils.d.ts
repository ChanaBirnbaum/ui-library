import { SxProps, Theme } from '@mui/material/styles';

/**
 * Normalises an `sx` value into an array so component defaults can be merged
 * with a consumer's `sx` instead of one silently overwriting the other.
 */
export declare const toSxArray: (sx: SxProps<Theme> | undefined) => SxProps<Theme>[];
/**
 * Applies component defaults to one `slotProps` entry. MUI lets a slot be
 * either an object or an `ownerState => props` callback; spreading the callback
 * form would quietly drop everything the consumer passed, so it is preserved
 * and the defaults are merged into its result instead.
 */
export declare const mergeSlotProps: <R extends Record<string, unknown>>(slot: unknown, withDefaults: (resolved: any) => R) => R | ((ownerState: unknown) => R);
