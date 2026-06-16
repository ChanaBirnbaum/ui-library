import { jsx as t } from "react/jsx-runtime";
import e from "@mui/material/IconButton";
import a from "@mui/icons-material/KeyboardArrowRight";
function d({ row: o }) {
  return /* @__PURE__ */ t(
    e,
    {
      size: "small",
      onClick: (r) => {
        r.stopPropagation(), o.toggleExpanded();
      },
      "aria-label": o.getIsExpanded() ? "Collapse row" : "Expand row",
      sx: {
        transform: o.getIsExpanded() ? "rotate(90deg)" : "rotate(0deg)",
        transition: "transform 0.2s ease",
        color: "text.secondary"
      },
      children: /* @__PURE__ */ t(a, { fontSize: "small" })
    }
  );
}
export {
  d as ExpandCell
};
