/** Squares the field's own corners on the edge the open list joins it at. */
export const joinedFieldSx = (joinsAtTop) => ({
    // The notched outline inherits its radius from the input root, so squaring
    // the root squares the border that is actually on screen.
    '& .MuiOutlinedInput-root': joinsAtTop
        ? { borderTopLeftRadius: '0px', borderTopRightRadius: '0px' }
        : { borderBottomLeftRadius: '0px', borderBottomRightRadius: '0px' },
});
export const popupSurfaceSx = ({ joinsAtTop, fontFamily, width }) => (theme) => ({
    // Explicit, because the surface carries a border and the popups are sized
    // to the field: without it a page that skips CssBaseline hangs the border
    // 2px past the field it is supposed to line up with.
    boxSizing: 'border-box',
    border: `1px solid ${theme.palette.grey[300]}`,
    boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
    ...(width ? { width } : null),
    ...(joinsAtTop
        ? {
            borderBottom: 'none',
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '0px',
        }
        : {
            borderTop: 'none',
            borderTopLeftRadius: '0px',
            borderTopRightRadius: '0px',
        }),
    // Rows built from Typography - IpsChipSelect's ListItemText - carry the
    // theme family of their own and would ignore a family set only here.
    ...(fontFamily
        ? {
            fontFamily,
            '& .MuiTypography-root': { fontFamily: 'inherit' },
        }
        : null),
});
