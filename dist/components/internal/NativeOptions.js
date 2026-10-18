import { jsx as p, Fragment as n } from "react/jsx-runtime";
import { groupOptions as t } from "./optionGroups.js";
function i({ options: l }) {
  return /* @__PURE__ */ p(n, { children: t(l).map((r) => {
    const e = r.options.map((o) => /* @__PURE__ */ p("option", { value: String(o.value), children: o.label }, o.value));
    return r.group === null ? e : /* @__PURE__ */ p("optgroup", { label: r.group, children: e }, r.group);
  }) });
}
export {
  i as NativeOptions
};
