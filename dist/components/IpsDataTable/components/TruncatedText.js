import { jsx as s } from "react/jsx-runtime";
import { useRef as d, useState as i } from "react";
import m from "@mui/material/Box";
import h from "@mui/material/Tooltip";
function b({ title: l, children: u }) {
  const t = d(null), [c, o] = i(!1), [a, f] = i(""), p = () => {
    const e = t.current;
    if (!e || e.scrollWidth <= e.clientWidth + 1) return;
    const r = l ?? e.textContent ?? "";
    r && (f(r), o(!0));
  }, n = () => o(!1);
  return /* @__PURE__ */ s(
    h,
    {
      title: a,
      open: c,
      onClose: n,
      placement: "top",
      disableFocusListener: !0,
      disableHoverListener: !0,
      disableTouchListener: !0,
      children: /* @__PURE__ */ s(
        m,
        {
          ref: t,
          onMouseEnter: p,
          onMouseLeave: n,
          sx: {
            display: "block",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            minWidth: 0
          },
          children: u
        }
      )
    }
  );
}
export {
  b as TruncatedText
};
