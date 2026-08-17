import { jsxs as a, jsx as o } from "react/jsx-runtime";
import f from "@mui/material/Box";
import g from "@mui/material/Tooltip";
import h from "@mui/material/IconButton";
import S from "@mui/icons-material/Add";
import w from "@mui/icons-material/Remove";
const x = 15, I = {
  width: 24,
  height: 24,
  p: 0,
  fontSize: 16,
  alignSelf: "center"
}, P = ({
  hiddenLabels: n,
  expanded: t,
  disabled: s = !1,
  collapseTooltip: r,
  moreItemsLabel: c,
  onToggle: p
}) => {
  const e = n.slice(0, x), l = n.length - e.length, m = t ? r : /* @__PURE__ */ a(f, { component: "span", sx: { display: "block", whiteSpace: "pre-line" }, children: [
    e.join(`
`),
    l > 0 ? `
${c(l)}` : ""
  ] });
  return /* @__PURE__ */ o(g, { title: m, arrow: !0, children: /* @__PURE__ */ o("span", { children: /* @__PURE__ */ o(
    h,
    {
      size: "small",
      "aria-label": t ? r : `+${n.length}`,
      "aria-expanded": t,
      disabled: s,
      onMouseDown: (i) => i.stopPropagation(),
      onClick: p,
      onKeyDown: (i) => i.stopPropagation(),
      sx: I,
      children: t ? /* @__PURE__ */ o(w, { fontSize: "inherit" }) : /* @__PURE__ */ o(S, { fontSize: "inherit" })
    }
  ) }) });
};
export {
  P as ChipOverflowToggle
};
