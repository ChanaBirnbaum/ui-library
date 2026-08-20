const n = (r) => (Array.isArray(r) ? r : [r]).filter(Boolean), t = (r, o) => typeof r == "function" ? (e) => o(r(e)) : o(r);
export {
  t as mergeSlotProps,
  n as toSxArray
};
