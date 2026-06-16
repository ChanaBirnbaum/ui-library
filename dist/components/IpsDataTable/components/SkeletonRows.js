import { jsx as r, Fragment as a } from "react/jsx-runtime";
import m from "@mui/material/TableRow";
import l from "@mui/material/TableCell";
import h from "@mui/material/Skeleton";
function c({ rowCount: o = 5, columnCount: i, cellSx: n }) {
  return /* @__PURE__ */ r(a, { children: Array.from({ length: o }).map((f, t) => /* @__PURE__ */ r(m, { children: Array.from({ length: i }).map((p, e) => /* @__PURE__ */ r(l, { sx: n, children: /* @__PURE__ */ r(
    h,
    {
      variant: "text",
      width: `${60 + Math.floor(Math.sin(t * 7 + e) * 30)}%`,
      height: 20,
      animation: "wave"
    }
  ) }, e)) }, t)) });
}
export {
  c as SkeletonRows
};
