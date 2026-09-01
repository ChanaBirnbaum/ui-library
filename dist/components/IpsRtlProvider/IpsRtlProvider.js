import { jsx as e, Fragment as m } from "react/jsx-runtime";
import { useMemo as s } from "react";
import { __unsafe_useEmotionCache as a, CacheProvider as p } from "@emotion/react";
import { createRtlCache as i, RTL_CACHE_KEY as n } from "../../utils/rtlUtils.js";
const c = ({ children: r }) => {
  const o = a(), t = s(() => i(), []);
  return (o == null ? void 0 : o.key) === n ? /* @__PURE__ */ e(m, { children: r }) : /* @__PURE__ */ e(p, { value: t, children: r });
};
c.displayName = "IpsRtlProvider";
export {
  c as IpsRtlProvider
};
