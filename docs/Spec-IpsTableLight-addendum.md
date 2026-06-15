IpsTableLight  ←  MUI Table (basic + enhanced)
A lightweight table for display use cases. Uses MUI Table, TableHead, TableBody, TableRow,
TableCell (NOT DataGrid). Enhanced with row events, rich cell content (links / images /
custom render), text-overflow control, and a scrollable body with a pinned header.

── Props ──────────────────────────────────────────────────────────────────────
Prop              Type                                Default      Description
rows              Row[]                               []           Array of row data objects (required)
columns           IpsTableLightColumn<Row>[]          []           Column definitions (required)
stickyHeader      boolean                             false        Pin header on scroll (pair with maxHeight)
maxHeight         number | string                     —            Constrain container height + enable vertical scroll
striped           boolean                             true         Alternating row colors
dense             boolean                             false        Reduce cell padding
emptyText         string                              "No data"    Text shown centered when rows is empty
wrap              'ellipsis' | 'wrap' | 'nowrap'      'ellipsis'   Default text-overflow for all columns (per-column override)
hover             boolean                             auto         Hover highlight (auto-enabled when a row handler is set)
onRowClick        (event, row, rowIndex) => void      —            Single-click on a row
onRowDoubleClick  (event, row, rowIndex) => void      —            Double-click on a row
getRowId          (row, index) => string | number     row.id|idx   Stable React key per row
sx                SxProps                             —            Style override on TableContainer

── Type: IpsTableLightColumn<Row> ─────────────────────────────────────────────
Field        Type                                          Description
key          string                                        Property name in the row object (required)
label        React.ReactNode                               Header content (required)
width        number | string                               Fixed column width
align        'left' | 'right' | 'center'                   Header + cell alignment (default 'left')
wrap         'ellipsis' | 'wrap' | 'nowrap'                Per-column overflow; overrides table-level wrap
type         'text' | 'link' | 'image'                     Built-in cell renderer shortcut (ignored if render set)
href         (row) => string                               type='link' only — build href (defaults to cell value)
linkTarget   '_self' | '_blank'                            type='link' only — '_blank' auto-adds rel="noopener noreferrer"
imageSrc     (row) => string                               type='image' only — build src (defaults to cell value)
imageProps   { width?; height?; alt?; rounded? }           type='image' only — presentation options
render       (value, row, rowIndex) => React.ReactNode     Full custom cell renderer; takes precedence over type

── wrap modes ─────────────────────────────────────────────────────────────────
'ellipsis' (default) — single line, overflow truncated with "…". Requires a maxWidth on the
                       cell; component falls back to 200px when no column width is given.
'wrap'               — text wraps to multiple lines (whiteSpace:normal; wordBreak:break-word);
                       row grows in height.
'nowrap'             — single line, no truncation; cell may overflow / scroll horizontally.

✅ Required Behaviors:
Use MUI Table primitive components (NOT DataGrid).
Styled header with primary.main background and common.white text from ipsTheme.
Header cells MUST keep an opaque background so content does not show through when pinned.
When striped=true: even rows use theme grey[50], odd rows transparent (uses &:nth-of-type(even)).
Scroll + sticky header: when stickyHeader=true AND maxHeight is set, the TableContainer
  constrains height (overflow:auto) and the header pins to the top via MUI stickyHeader.
  stickyHeader without maxHeight has no scroll container and will NOT pin — document this.
Row events: onRowClick / onRowDoubleClick receive (event, row, rowIndex). When either is
  provided, the row shows cursor:pointer and hover highlight is auto-enabled.
Cell content resolution order per column: render → type ('link' | 'image') → raw value.
  - type='link'  → MUI <Link>; href from col.href(row) or the cell value; calls
                   e.stopPropagation() so the link click does not also trigger onRowClick.
  - type='image' → <img> via Box component="img"; src from col.imageSrc(row) or cell value;
                   imageProps controls width/height/alt and rounded (circle/avatar); also
                   stopPropagation on click.
Per-column wrap overrides the table-level wrap prop; table-level default is 'ellipsis'.
Show emptyText centered (colSpan = columns.length) when rows.length === 0.
forwardRef → TableContainer (HTMLDivElement). Generic over Row for typed render/href/imageSrc.
className="ips-table-light" on TableContainer.
Export types: IpsTableLightProps, IpsTableLightColumn, IpsTableLightRow, IpsTableLightWrap.

⚠️ AI Implementation Notes:
maxWidth is mandatory for textOverflow:ellipsis to work inside a TableCell — default 200px
  when the column has no width.
Sticky header transparency: header TableCell must set backgroundColor (primary.main),
  otherwise scrolled body rows bleed through the pinned header.
forwardRef + generics: wrap the inner render function and cast the forwardRef result to a
  generic call signature so consumers keep typed columns/rows; set displayName='IpsTableLight'.
Do NOT bubble link/image clicks to the row handler — stopPropagation on those elements.

📖 Storybook Stories Required:
Basic
Striped
Dense
Empty state
Sticky header with scroll (stickyHeader + maxHeight)
Row events (onRowClick / onRowDoubleClick logged via action)
Link column (type='link', internal + _blank)
Image column (type='image', rounded avatar)
Custom render column (e.g. status Chip)
Text wrap modes (ellipsis vs wrap vs nowrap side by side)
