function l(r, o, n) {
  return ((r == null ? void 0 : r.overflow) ?? o) !== "ellipsis" ? !1 : n != null || (r == null ? void 0 : r.width) != null;
}
function e(r, o) {
  return o ?? r;
}
function p(r) {
  return {
    whiteSpace: "nowrap",
    overflow: "hidden",
    width: r,
    maxWidth: r,
    // The auto-fit pass measures border-box widths, so the width it hands back
    // has to include the cell padding — otherwise every clipped column is one
    // padding too wide and the table overflows its container.
    boxSizing: "border-box"
  };
}
function u(r, o) {
  return r === "ellipsis" ? (
    // Not clipped, but still single-line: the column sizes to its content.
    { whiteSpace: "nowrap", width: o, maxWidth: o }
  ) : {
    // Long values wrap and grow the row instead of overflowing it.
    whiteSpace: "normal",
    overflowWrap: "anywhere",
    wordBreak: "break-word",
    width: o,
    maxWidth: o
  };
}
export {
  p as clipSx,
  e as clipWidthFor,
  u as flowSx,
  l as shouldClip
};
