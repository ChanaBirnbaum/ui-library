const d = (o) => ({
  // The notched outline inherits its radius from the input root, so squaring
  // the root squares the border that is actually on screen.
  "& .MuiOutlinedInput-root": o ? { borderTopLeftRadius: "0px", borderTopRightRadius: "0px" } : { borderBottomLeftRadius: "0px", borderBottomRightRadius: "0px" }
}), p = ({ joinsAtTop: o, fontFamily: r, width: e }) => (t) => ({
  // Explicit, because the surface carries a border and the popups are sized
  // to the field: without it a page that skips CssBaseline hangs the border
  // 2px past the field it is supposed to line up with.
  boxSizing: "border-box",
  border: `1px solid ${t.palette.grey[300]}`,
  boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
  ...e ? { width: e } : null,
  ...o ? {
    borderBottom: "none",
    borderBottomLeftRadius: "0px",
    borderBottomRightRadius: "0px"
  } : {
    borderTop: "none",
    borderTopLeftRadius: "0px",
    borderTopRightRadius: "0px"
  },
  // Rows built from Typography - IpsChipSelect's ListItemText - carry the
  // theme family of their own and would ignore a family set only here.
  ...r ? {
    fontFamily: r,
    "& .MuiTypography-root": { fontFamily: "inherit" }
  } : null
});
export {
  d as joinedFieldSx,
  p as popupSurfaceSx
};
