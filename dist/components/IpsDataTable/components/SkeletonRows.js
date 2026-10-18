import { jsx as r, Fragment as a } from "react/jsx-runtime";
import m from "@mui/material/TableRow";
import h from "@mui/material/TableCell";
import l from "@mui/material/Skeleton";
function s({ rowCount: o = 5, columnCount: i, cellSx: n }) {
  return /* @__PURE__ */ r(a, { children: Array.from({ length: o }).map((f, e) => /* @__PURE__ */ r(m, { children: Array.from({ length: i }).map((p, t) => /* @__PURE__ */ r(
    h,
    {
      sx: { ...n, whiteSpace: "nowrap", overflow: "hidden" },
      children: /* @__PURE__ */ r(
        l,
        {
          variant: "text",
          width: `${60 + Math.floor(Math.sin(e * 7 + t) * 30)}%`,
          height: 20,
          animation: "wave"
        }
      )
    },
    t
  )) }, e)) });
}
export {
  s as SkeletonRows
};
