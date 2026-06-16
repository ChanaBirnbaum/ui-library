import { jsxs as l, jsx as o } from "react/jsx-runtime";
import { forwardRef as m } from "react";
import { Accordion as p, AccordionSummary as f, AccordionDetails as h, SvgIcon as x } from "@mui/material";
const A = (c) => /* @__PURE__ */ o(x, { ...c, children: /* @__PURE__ */ o("path", { d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" }) }), I = m(
  ({
    summary: c,
    children: r,
    className: n,
    defaultExpanded: i = !1,
    disabled: a = !1,
    onChange: d,
    ...e
  }, s) => {
    const t = [
      "ips-accordion",
      n
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ l(
      p,
      {
        ref: s,
        className: t,
        defaultExpanded: i,
        disabled: a,
        onChange: d,
        ...e,
        children: [
          /* @__PURE__ */ o(
            f,
            {
              expandIcon: /* @__PURE__ */ o(A, {}),
              "aria-controls": "accordion-content",
              id: "accordion-header",
              children: c
            }
          ),
          /* @__PURE__ */ o(h, { id: "accordion-content", children: r })
        ]
      }
    );
  }
);
I.displayName = "IpsAccordion";
export {
  I as IpsAccordion
};
