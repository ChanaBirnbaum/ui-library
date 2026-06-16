import { jsx as f } from "react/jsx-runtime";
import k from "@mui/material/TableCell";
import { flexRender as x } from "../../../node_modules/@tanstack/react-table/build/lib/index.js";
import { EditableCell as D } from "./EditableCell.js";
function y({
  cell: n,
  isEditing: r,
  editValue: d,
  onEditValueChange: u,
  onActivateEdit: t,
  onCommit: C,
  onCancel: b,
  cellSx: p
}) {
  const o = n.column.columnDef.meta, s = (o == null ? void 0 : o.align) ?? "start", a = o == null ? void 0 : o.width, c = o == null ? void 0 : o.editable, e = !!c, l = typeof c == "object" ? c : void 0, m = (l == null ? void 0 : l.mode) ?? "click", h = e && !r && t ? m === "dblclick" ? { onDoubleClick: t } : { onClick: t } : {}, g = r && e ? o != null && o.renderEditCell ? o.renderEditCell(
    d,
    (i) => u(n.column.id, i)
  ) : /* @__PURE__ */ f(
    D,
    {
      config: l,
      value: d,
      onChange: (i) => u(n.column.id, i),
      onCommit: C,
      onCancel: b
    }
  ) : o != null && o.renderCell ? o.renderCell(n.getValue(), n.row.original) : x(n.column.columnDef.cell, n.getContext());
  return /* @__PURE__ */ f(
    k,
    {
      align: s === "end" ? "right" : s === "center" ? "center" : "left",
      sx: {
        width: a,
        cursor: e && !r ? "pointer" : "default",
        "&:hover": e && !r ? { backgroundColor: "action.hover" } : {},
        ...p
      },
      ...h,
      children: g
    }
  );
}
export {
  y as DataCell
};
