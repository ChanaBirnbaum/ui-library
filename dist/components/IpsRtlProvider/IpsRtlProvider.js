import { jsx as e } from "react/jsx-runtime";
import { useMemo as t } from "react";
import { CacheProvider as m } from "@emotion/react";
import { createRtlCache as i } from "../../utils/rtlUtils.js";
const p = ({ children: r }) => {
  const o = t(() => i(), []);
  return /* @__PURE__ */ e(m, { value: o, children: r });
};
p.displayName = "IpsRtlProvider";
export {
  p as IpsRtlProvider
};
