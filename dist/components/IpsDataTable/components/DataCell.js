import { jsx as a } from "react/jsx-runtime";
import k from "@mui/material/TableCell";
import { flexRender as x } from "../../../node_modules/@tanstack/react-table/build/lib/index.js";
import { EditableCell as D } from "./EditableCell.js";
function j({
  cell: r,
  isEditing: e,
  editValue: d,
  onEditValueChange: p,
  onActivateEdit: c,
  onCommit: u,
  onCancel: f,
  cellSx: C
}) {
  const o = r.column.columnDef.meta, s = (o == null ? void 0 : o.align) ?? "start", b = o == null ? void 0 : o.width, i = o == null ? void 0 : o.editable, l = !!i, t = typeof i == "object" ? i : void 0, g = (t == null ? void 0 : t.mode) ?? "click", m = l && !e && c ? g === "dblclick" ? {
    onDoubleClick: (n) => {
      n.stopPropagation(), c();
    }
  } : {
    onClick: (n) => {
      n.stopPropagation(), c();
    }
  } : {}, h = e && l ? o != null && o.renderEditCell ? o.renderEditCell(
    d,
    (n) => p(r.column.id, n)
  ) : /* @__PURE__ */ a(
    D,
    {
      config: t,
      value: d,
      onChange: (n) => p(r.column.id, n),
      onCommit: u,
      onCancel: f
    }
  ) : o != null && o.renderCell ? o.renderCell(r.getValue(), r.row.original) : x(r.column.columnDef.cell, r.getContext());
  return /* @__PURE__ */ a(
    k,
    {
      align: s === "end" ? "right" : s === "center" ? "center" : "left",
      sx: {
        width: b,
        cursor: l && !e ? "pointer" : "default",
        "&:hover": l && !e ? { backgroundColor: "action.hover" } : {},
        ...C
      },
      onClick: e ? (n) => n.stopPropagation() : void 0,
      ...m,
      children: h
    }
  );
}
export {
  j as DataCell
};
