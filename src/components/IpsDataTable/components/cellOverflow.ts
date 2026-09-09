import type { ColumnMeta, RowData } from '@tanstack/react-table'
import type { CellOverflow } from '../IpsDataTable.types'

type Meta<T extends RowData> = ColumnMeta<T, unknown> | undefined

/** Plain style object, spreadable into an MUI `sx` prop. */
type CellSx = Record<string, string | number | undefined>

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
export function shouldClip<T extends RowData>(
  meta: Meta<T>,
  tableDefault: CellOverflow,
  autoWidth?: number
): boolean {
  const mode = meta?.overflow ?? tableDefault
  if (mode !== 'ellipsis') return false
  // Clipping needs a width to clip at: either one the auto-fit pass measured,
  // or one the column declared. Without either, the column is simply not the
  // one that has to give room back, so it keeps its natural width.
  return autoWidth != null || meta?.width != null
}

/**
 * The width a clipped cell should be given: an auto-fit measurement wins over
 * a declared `meta.width`, since it already accounts for that declaration.
 */
export function clipWidthFor(
  metaWidth?: number | string,
  autoWidth?: number
): number | string | undefined {
  return autoWidth ?? metaWidth
}

/**
 * Styles for a clipped cell.
 *
 * `max-width` is what clamps the column under the automatic table layout — it
 * caps the cell's max-content contribution, so the column stops at this width
 * and the text is cut instead of pushing the table wider than its container.
 * `width` asks for the same size, so the column does not end up narrower than
 * the share it was given either.
 */
export function clipSx(width?: number | string): CellSx {
  return {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    width,
    maxWidth: width,
    // The auto-fit pass measures border-box widths, so the width it hands back
    // has to include the cell padding — otherwise every clipped column is one
    // padding too wide and the table overflows its container.
    boxSizing: 'border-box',
  }
}

/** Styles for a cell that is not clipped, per overflow mode. */
export function flowSx(mode: CellOverflow, width?: number | string): CellSx {
  return mode === 'ellipsis'
    ? // Not clipped, but still single-line: the column sizes to its content.
      { whiteSpace: 'nowrap', width, maxWidth: width }
    : {
        // Long values wrap and grow the row instead of overflowing it.
        whiteSpace: 'normal',
        overflowWrap: 'anywhere',
        wordBreak: 'break-word',
        width,
        maxWidth: width,
      }
}
