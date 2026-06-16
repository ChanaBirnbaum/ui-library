import { jsx as l } from "react/jsx-runtime";
import n from "@mui/material/TextField";
import p from "@mui/material/Select";
import v from "@mui/material/MenuItem";
function S({ config: t, value: u, onChange: i, onCommit: a, onCancel: s }) {
  const r = (t == null ? void 0 : t.type) ?? "text", d = (e) => {
    e.key === "Enter" && r !== "select" && (a == null || a()), e.key === "Escape" && (s == null || s());
  };
  return r === "select" && (t != null && t.options) ? /* @__PURE__ */ l(
    p,
    {
      value: String(u ?? ""),
      onChange: (e) => i(e.target.value),
      size: "small",
      variant: "standard",
      onKeyDown: d,
      sx: { minWidth: 80 },
      autoFocus: !0,
      children: t.options.map((e) => /* @__PURE__ */ l(v, { value: String(e.value), children: e.label }, String(e.value)))
    }
  ) : /* @__PURE__ */ l(
    n,
    {
      value: String(u ?? ""),
      onChange: (e) => i(e.target.value),
      size: "small",
      variant: "standard",
      type: r === "date" ? "date" : r === "number" ? "number" : "text",
      autoFocus: !0,
      onKeyDown: d,
      sx: { width: "100%", minWidth: 60 },
      inputProps: r === "date" ? { style: { fontSize: "inherit" } } : void 0
    }
  );
}
export {
  S as EditableCell
};
