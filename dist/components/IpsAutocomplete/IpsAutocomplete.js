import { jsx as r, jsxs as C } from "react/jsx-runtime";
import { forwardRef as j } from "react";
import w from "@mui/material/Autocomplete";
import A from "@mui/material/Checkbox";
import { useTheme as N } from "@mui/material/styles";
import { IpsTextField as O } from "../IpsTextField/IpsTextField.js";
const L = j((m, i) => {
  const {
    showCheckboxes: u = !0,
    className: a,
    multiple: s = !1,
    renderOption: o,
    renderInput: n,
    disabled: f = !1,
    loading: p = !1,
    label: d,
    ...h
  } = m, b = N().direction === "rtl", x = (t, e, { selected: l }) => {
    const { key: I, ...c } = t;
    if (typeof o == "function")
      return o(c, e, { selected: l });
    const k = s && u, y = typeof e == "string" ? e : (e == null ? void 0 : e.label) || String(e);
    return /* @__PURE__ */ C("li", { ...c, children: [
      k && /* @__PURE__ */ r(
        A,
        {
          checked: l,
          style: b ? { marginLeft: 8 } : { marginRight: 8 }
        }
      ),
      y
    ] }, I);
  }, R = (t) => n ? n(t) : /* @__PURE__ */ r(O, { ...t, label: d }), g = ["ips-autocomplete", a].filter(Boolean).join(" ");
  return /* @__PURE__ */ r(
    w,
    {
      ref: i,
      multiple: s,
      disabled: f,
      loading: p,
      renderOption: x,
      renderInput: R,
      className: g,
      ...h
    }
  );
});
L.displayName = "IpsAutocomplete";
export {
  L as IpsAutocomplete
};
