import { jsx as p } from "react/jsx-runtime";
import T from "@mui/material/TableCell";
import { flexRender as j } from "../../../node_modules/@tanstack/react-table/build/lib/index.js";
import { EditableCell as y } from "./EditableCell.js";
import { TruncatedText as M } from "./TruncatedText.js";
import { shouldClip as F, clipSx as R, flowSx as V, clipWidthFor as q } from "./cellOverflow.js";
function K({
  cell: r,
  isEditing: t,
  editValue: s,
  onEditValueChange: a,
  onActivateEdit: c,
  onCommit: x,
  onCancel: h,
  cellSx: w,
  cellOverflow: u = "wrap",
  autoWidth: f
}) {
  const o = r.column.columnDef.meta, C = (o == null ? void 0 : o.align) ?? "start", b = o == null ? void 0 : o.width, v = (o == null ? void 0 : o.overflow) ?? u, i = o == null ? void 0 : o.editable, e = !!i, l = typeof i == "object" ? i : void 0, k = (l == null ? void 0 : l.mode) ?? "click", D = e && !t && c ? k === "dblclick" ? {
    onDoubleClick: (n) => {
      n.stopPropagation(), c();
    }
  } : {
    onClick: (n) => {
      n.stopPropagation(), c();
    }
  } : {}, m = t && e ? o != null && o.renderEditCell ? o.renderEditCell(
    s,
    (n) => a(r.column.id, n)
  ) : /* @__PURE__ */ p(
    y,
    {
      config: l,
      value: s,
      onChange: (n) => a(r.column.id, n),
      onCommit: x,
      onCancel: h
    }
  ) : o != null && o.renderCell ? o.renderCell(r.getValue(), r.row.original) : j(r.column.columnDef.cell, r.getContext()), g = F(o, u, f) && !(t && e), d = r.getValue(), P = g ? /* @__PURE__ */ p(
    M,
    {
      title: d == null || typeof d == "object" ? void 0 : String(d),
      children: m
    }
  ) : m, S = g ? R(q(b, f)) : V(v, b);
  return /* @__PURE__ */ p(
    T,
    {
      align: C === "end" ? "right" : C === "center" ? "center" : "left",
      "data-col-id": r.column.id,
      sx: {
        verticalAlign: "middle",
        ...S,
        cursor: e && !t ? "pointer" : "default",
        "&:hover": e && !t ? { backgroundColor: "action.hover" } : {},
        ...w
      },
      onClick: t ? (n) => n.stopPropagation() : void 0,
      ...D,
      children: P
    }
  );
}
export {
  K as DataCell
};
