import { ColumnMeta, RowData } from '@tanstack/react-table';
import { CellOverflow } from '../IpsDataTable.types';

type Meta<T extends RowData> = ColumnMeta<T, unknown> | undefined;
/** Plain style object, spreadable into an MUI `sx` prop. */
type CellSx = Record<string, string | number | undefined>;
/**
 * Whether a column should clip its content to one line with an ellipsis.
 *
 * In `ellipsis` mode a column is clipped only when it was told how much room
 * it may take — either `meta.width` (clip at that width) or an explicit
 * `meta.overflow: 'ellipsis'` (take whatever width is left over and clip).
 * A column with no constraint keeps its natural, content-sized width and never
 * shows an ellipsis, so short columns stay fully readable when a single long
 * column is what forces the table to shrink.
 */
export declare function shouldClip<T extends RowData>(meta: Meta<T>, tableDefault: CellOverflow, autoWidth?: number): boolean;
/**
 * The width a clipped cell should be given: an auto-fit measurement wins over
 * a declared `meta.width`, since it already accounts for that declaration.
 */
export declare function clipWidthFor(metaWidth?: number | string, autoWidth?: number): number | string | undefined;
/**
 * Styles for a clipped cell.
 *
 * `max-width` is what clamps the column under the automatic table layout — it
 * caps the cell's max-content contribution, so the column stops at this width
 * and the text is cut instead of pushing the table wider than its container.
 * `width` asks for the same size, so the column does not end up narrower than
 * the share it was given either.
 */
export declare function clipSx(width?: number | string): CellSx;
/** Styles for a cell that is not clipped, per overflow mode. */
export declare function flowSx(mode: CellOverflow, width?: number | string): CellSx;
export {};
