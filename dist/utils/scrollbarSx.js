const o = (r) => ({
  scrollbarWidth: "thin",
  scrollbarColor: `${r.palette.grey[300]} transparent`,
  "&::-webkit-scrollbar": {
    width: 6,
    height: 6
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "transparent"
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: r.palette.grey[300],
    // px, not a spacing unit: sx multiplies a bare `borderRadius` number by
    // theme.shape.borderRadius, which would round the 6px bar off entirely.
    borderRadius: "3px"
  },
  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: r.palette.grey[400]
  }
});
export {
  o as thinScrollbarSx
};
