import { jsxs as i, jsx as o } from "react/jsx-runtime";
import m from "@mui/material/Dialog";
import c from "@mui/material/DialogTitle";
import a from "@mui/material/DialogContent";
import d from "@mui/material/DialogContentText";
import f from "@mui/material/DialogActions";
import t from "@mui/material/Button";
function C({
  open: n,
  onConfirm: e,
  onCancel: r,
  message: l = "האם אתה בטוח שברצונך למחוק רשומה זו?"
}) {
  return /* @__PURE__ */ i(m, { open: n, onClose: r, maxWidth: "xs", fullWidth: !0, children: [
    /* @__PURE__ */ o(c, { children: "אישור מחיקה" }),
    /* @__PURE__ */ o(a, { children: /* @__PURE__ */ o(d, { children: l }) }),
    /* @__PURE__ */ i(f, { children: [
      /* @__PURE__ */ o(t, { onClick: r, color: "inherit", children: "ביטול" }),
      /* @__PURE__ */ o(t, { onClick: e, color: "error", variant: "contained", autoFocus: !0, children: "מחק" })
    ] })
  ] });
}
export {
  C as DeleteConfirmDialog
};
