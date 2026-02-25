import he, { forwardRef as ke, useState as $s, useMemo as ld, createContext as na, useCallback as Ec, useContext as ad, useRef as Ki, useDebugValue as cd, useEffect as Ji, useLayoutEffect as cy } from "react";
import { jsx as O, jsxs as Je, Fragment as uy } from "react/jsx-runtime";
import ud from "@mui/material/TextField";
import Ac from "@mui/material/InputAdornment";
import Qi from "@mui/material/Checkbox";
import dd from "@mui/material/FormControlLabel";
import Ge from "@mui/material/Box";
import Dc from "@mui/material/Switch";
import dy from "@mui/material/Button";
import fy from "@mui/material/CircularProgress";
import ra from "@mui/material/SvgIcon";
import { useTheme as ii, alpha as Nc } from "@mui/material/styles";
import ia from "@mui/material/IconButton";
import sa from "@mui/material/Tooltip";
import fd from "@mui/material/FormControl";
import hd from "@mui/material/InputLabel";
import pd from "@mui/material/Select";
import md from "@mui/material/MenuItem";
import hy from "@mui/material/FormHelperText";
import py from "@mui/material/ListItemText";
import my from "@mui/material/Autocomplete";
import gy from "@mui/material/Chip";
import { Accordion as yy, AccordionSummary as by, AccordionDetails as ky, SvgIcon as Sy } from "@mui/material";
import { TimePicker as xy } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider as oa } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment as wy } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker as My } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns as gd } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker as Cy } from "@mui/x-date-pickers/DateTimePicker";
import { DataGrid as Ty } from "@mui/x-data-grid";
import yd from "@emotion/cache";
import { CacheProvider as Oy } from "@emotion/react";
import vy from "@mui/material/ButtonBase";
import Ey from "@mui/material/TableContainer";
import Ay from "@mui/material/Table";
import Dy from "@mui/material/TableHead";
import Ny from "@mui/material/TableBody";
import Ho from "@mui/material/TableRow";
import $o from "@mui/material/TableCell";
import Vr from "@mui/material/Typography";
import bd from "@mui/material/Paper";
import kd from "react-dom";
import Ry from "@mui/icons-material/CheckCircleOutline";
import Iy from "@mui/icons-material/InfoOutlined";
import _y from "@mui/icons-material/WarningAmber";
import Py from "@mui/icons-material/ErrorOutline";
import Ly from "@mui/icons-material/Close";
import Fy from "@mui/material/Divider";
import By from "@mui/icons-material/FormatBold";
import zy from "@mui/icons-material/FormatItalic";
import Hy from "@mui/icons-material/FormatUnderlined";
import $y from "@mui/icons-material/StrikethroughS";
import Wy from "@mui/icons-material/FormatListBulleted";
import Vy from "@mui/icons-material/FormatListNumbered";
import Yy from "@mui/icons-material/FormatQuote";
import jy from "@mui/icons-material/Link";
import Uy from "@mui/icons-material/Image";
import qy from "@mui/icons-material/FormatAlignLeft";
import Gy from "@mui/icons-material/FormatAlignCenter";
import Ky from "@mui/icons-material/FormatAlignRight";
import Jy from "@mui/icons-material/FormatAlignJustify";
import Qy from "@mui/icons-material/FormatColorText";
import Zy from "@mui/icons-material/FormatColorFill";
import Xy from "@mui/icons-material/FormatTextdirectionRToL";
import e0 from "@mui/icons-material/FormatTextdirectionLToR";
import t0 from "@mui/icons-material/Undo";
import n0 from "@mui/icons-material/Redo";
import r0 from "@mui/icons-material/FormatClear";
const i0 = {
  white: "#FFFFFF",
  black: "#000000",
  gray100: "#F7FAFC",
  gray500: "#6B7280",
  gray900: "#111827",
  primary: "#2563EB",
  primaryDark: "#1D4ED8",
  success: "#16A34A",
  danger: "#DC2626"
}, s0 = {
  fonts: {
    body: 'Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
    heading: 'Inter, system-ui, -apple-system, "Segoe UI"'
  },
  sizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "20px",
    xl: "24px"
  },
  weights: {
    regular: 400,
    medium: 500,
    bold: 700
  }
}, o0 = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px"
}, Sd = {
  colors: i0,
  typography: s0,
  spacing: o0,
  borderRadius: "6px"
}, si = ke(
  (n, e) => {
    const {
      startAdornment: t,
      endAdornment: r,
      InputProps: i,
      inputProps: s,
      className: o,
      readOnly: l,
      ...c
    } = n, d = {
      ...s,
      readOnly: l ? !0 : s == null ? void 0 : s.readOnly
    }, f = {
      ref: e,
      startAdornment: t ? /* @__PURE__ */ O(Ac, { position: "start", children: t }) : i == null ? void 0 : i.startAdornment,
      endAdornment: r ? /* @__PURE__ */ O(Ac, { position: "end", children: r }) : i == null ? void 0 : i.endAdornment,
      ...i
    };
    return /* @__PURE__ */ O(
      ud,
      {
        ...c,
        slotProps: { input: f, htmlInput: d },
        className: ["ips-text-field", o].filter(Boolean).join(" ")
      }
    );
  }
);
si.displayName = "IpsTextField";
const l0 = ke(
  (n, e) => {
    const { label: t, labelPlacement: r = "end", className: i, ...s } = n, o = ["ips-checkbox", i].filter(Boolean).join(" ");
    return t !== void 0 ? /* @__PURE__ */ O(
      dd,
      {
        className: o,
        control: /* @__PURE__ */ O(Qi, { ...s, slotProps: { input: { ref: e } } }),
        label: t,
        labelPlacement: r
      }
    ) : /* @__PURE__ */ O(Qi, { className: o, slotProps: { input: { ref: e } }, ...s });
  }
);
l0.displayName = "IpsCheckBox";
const a0 = ke(
  (n, e) => {
    const {
      rows: t = 4,
      maxLength: r,
      className: i,
      helperText: s,
      defaultValue: o,
      value: l,
      onChange: c,
      ...d
    } = n, f = l !== void 0, [h, g] = $s(() => o ?? ""), y = (f ? l : h) ?? "", b = (w) => {
      let T = w.currentTarget.value;
      r !== void 0 && T.length > r && (T = T.slice(0, r), w.target.value = T), f || g(T), c && c(w);
    }, S = r ? `${y.length} / ${r}` : null, x = /* @__PURE__ */ Je(
      Ge,
      {
        component: "span",
        sx: { display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" },
        children: [
          /* @__PURE__ */ O(Ge, { component: "span", children: s }),
          S ? /* @__PURE__ */ O(Ge, { component: "span", sx: { color: "text.secondary", fontSize: "0.875rem" }, children: S }) : null
        ]
      }
    );
    return /* @__PURE__ */ O(
      ud,
      {
        ...d,
        multiline: !0,
        minRows: t,
        defaultValue: o,
        slotProps: { input: { ref: e } },
        className: ["ips-textarea", i].filter(Boolean).join(" "),
        helperText: x,
        onChange: b
      }
    );
  }
);
a0.displayName = "IpsTextArea";
const c0 = ke(
  (n, e) => {
    const { label: t, labelPlacement: r = "end", className: i, ...s } = n, o = ["ips-switch", i].filter(Boolean).join(" ");
    return t !== void 0 ? /* @__PURE__ */ O(
      dd,
      {
        className: o,
        control: /* @__PURE__ */ O(Dc, { ...s, slotProps: { input: { ref: e } } }),
        label: t,
        labelPlacement: r
      }
    ) : /* @__PURE__ */ O(Dc, { className: o, slotProps: { input: { ref: e } }, ...s });
  }
);
c0.displayName = "IpsSwitch";
const u0 = (n) => /* @__PURE__ */ O(ra, { ...n, children: /* @__PURE__ */ O("path", { d: "M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" }) }), d0 = (n) => /* @__PURE__ */ O(ra, { ...n, children: /* @__PURE__ */ O("path", { d: "M17 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V7L17 3Z" }) }), f0 = (n) => /* @__PURE__ */ O(ra, { ...n, children: /* @__PURE__ */ O("path", { d: "M6 18L18 6M6 6l12 12", stroke: "currentColor", strokeWidth: "2", fill: "none" }) }), h0 = ke((n, e) => {
  const { buttonType: t, loading: r, className: i, children: s, ...o } = n, c = ii().direction === "rtl", d = { ...o };
  let f = d.variant, h = d.color, g = d.startIcon;
  if (t)
    switch (t) {
      case "add":
        f = "contained", h = "primary", g = g ?? /* @__PURE__ */ O(u0, {});
        break;
      case "save":
        f = "contained", h = "primary", g = g ?? /* @__PURE__ */ O(d0, {});
        break;
      case "clean":
        f = "outlined", h = "inherit", g = g ?? /* @__PURE__ */ O(f0, {});
        break;
      case "primary":
        f = "contained", h = "primary";
        break;
      case "secondary":
        f = "outlined", h = "secondary";
        break;
    }
  r && (d.disabled = !0, g = /* @__PURE__ */ O(fy, { size: 16, color: "inherit" }));
  const y = ["ips-button", i].filter(Boolean).join(" "), b = c ? void 0 : g, S = c ? g : d.endIcon;
  return /* @__PURE__ */ O(
    dy,
    {
      ...d,
      variant: f,
      color: h,
      startIcon: b,
      endIcon: S,
      ref: e,
      className: y,
      children: s
    }
  );
});
h0.displayName = "IpsButton";
const p0 = ke(
  ({ icon: n, tooltip: e, className: t, ...r }, i) => {
    const s = ["ips-icon-button", t].filter(Boolean).join(" "), o = /* @__PURE__ */ O(
      ia,
      {
        ref: i,
        className: s,
        ...r,
        children: n
      }
    );
    return e ? /* @__PURE__ */ O(sa, { title: e, children: o }) : o;
  }
);
p0.displayName = "IpsIconButton";
const m0 = ke(
  (n, e) => {
    var c;
    const {
      arrow: t = !0,
      placement: r = "top",
      className: i,
      componentsProps: s,
      ...o
    } = n, l = {
      ...s,
      tooltip: {
        ...(s == null ? void 0 : s.tooltip) || {},
        className: ["ips-tooltip", (c = s == null ? void 0 : s.tooltip) == null ? void 0 : c.className, i].filter(Boolean).join(" ")
      }
    };
    return /* @__PURE__ */ O(
      sa,
      {
        ref: e,
        arrow: t,
        placement: r,
        componentsProps: l,
        ...o
      }
    );
  }
);
m0.displayName = "IpsToolTips";
const g0 = ke(
  (n, e) => {
    const {
      options: t = [],
      value: r,
      onChange: i,
      label: s,
      readOnly: o = !1,
      placeholder: l,
      error: c = !1,
      helperText: d,
      multiple: f = !1,
      disabled: h = !1,
      className: g,
      ...y
    } = n, b = ["ips-select", g].filter(Boolean).join(" ");
    return /* @__PURE__ */ Je(
      fd,
      {
        className: b,
        error: c,
        disabled: h || o,
        fullWidth: !0,
        children: [
          s && /* @__PURE__ */ O(hd, { children: s }),
          /* @__PURE__ */ O(
            pd,
            {
              ref: e,
              value: r ?? (f ? [] : ""),
              onChange: (w) => {
                i && !o && i(w.target.value);
              },
              label: s,
              multiple: f,
              displayEmpty: !!l,
              renderValue: (w) => {
                var T;
                return f && Array.isArray(w) ? w.length === 0 ? l || "" : w.map((v) => {
                  var _;
                  return ((_ = t.find((I) => I.value === v)) == null ? void 0 : _.label) || v;
                }).join(", ") : w === "" || w === void 0 ? l || "" : ((T = t.find((v) => v.value === w)) == null ? void 0 : T.label) || w;
              },
              sx: o ? {
                pointerEvents: "none",
                "& .MuiSelect-icon": {
                  display: "none"
                }
              } : {},
              ...y,
              children: t.map((w) => /* @__PURE__ */ O(md, { value: w.value, children: f ? /* @__PURE__ */ Je(uy, { children: [
                /* @__PURE__ */ O(
                  Qi,
                  {
                    checked: Array.isArray(r) ? r.includes(w.value) : r === w.value
                  }
                ),
                /* @__PURE__ */ O(py, { primary: w.label })
              ] }) : w.label }, w.value))
            }
          ),
          d && /* @__PURE__ */ O(hy, { children: d })
        ]
      }
    );
  }
);
g0.displayName = "IpsSelect";
const y0 = ke((n, e) => {
  const {
    showCheckboxes: t = !0,
    className: r,
    multiple: i = !1,
    renderOption: s,
    renderInput: o,
    disabled: l = !1,
    loading: c = !1,
    label: d,
    ...f
  } = n, g = ii().direction === "rtl", y = (x, w, T) => {
    if (typeof s == "function")
      return s(x, w, T);
    const v = i && t, _ = typeof w == "string" ? w : (w == null ? void 0 : w.label) || String(w);
    return /* @__PURE__ */ Je("li", { ...x, children: [
      v && /* @__PURE__ */ O(
        Qi,
        {
          checked: T.selected,
          style: g ? { marginLeft: 8 } : { marginRight: 8 }
        }
      ),
      _
    ] });
  }, b = (x) => o ? o(x) : /* @__PURE__ */ O(si, { ...x, label: d }), S = ["ips-autocomplete", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ O(
    my,
    {
      ref: e,
      multiple: i,
      disabled: l,
      loading: c,
      renderOption: y,
      renderInput: b,
      className: S,
      ...f
    }
  );
});
y0.displayName = "IpsAutocomplete";
const b0 = ke(
  (n, e) => {
    const {
      options: t = [],
      value: r = [],
      onChange: i,
      label: s,
      placeholder: o,
      disabled: l = !1,
      className: c,
      ...d
    } = n, f = ["ips-chip-select", c].filter(Boolean).join(" "), h = (b) => {
      if (l) return;
      const S = r.filter(
        (x) => x !== b
      );
      i == null || i(S);
    };
    return /* @__PURE__ */ Je(fd, { fullWidth: !0, disabled: l, className: f, children: [
      s && /* @__PURE__ */ O(hd, { children: s }),
      /* @__PURE__ */ O(
        pd,
        {
          ref: e,
          multiple: !0,
          value: r,
          onChange: (b) => {
            const S = b.target.value;
            i == null || i(S);
          },
          label: s,
          renderValue: (b) => !b || b.length === 0 ? /* @__PURE__ */ O("span", { style: { color: "#999" }, children: o || "Select items..." }) : /* @__PURE__ */ O(Ge, { sx: { display: "flex", flexWrap: "wrap", gap: 0.5 }, children: b.map((S) => {
            const x = t.find((T) => T.value === S), w = (x == null ? void 0 : x.label) || String(S);
            return /* @__PURE__ */ O(
              gy,
              {
                label: w,
                size: "small",
                onDelete: () => h(S),
                disabled: l,
                sx: {
                  height: 24,
                  "& .MuiChip-deleteIcon": {
                    opacity: l ? 0.5 : 1,
                    cursor: l ? "not-allowed" : "pointer"
                  }
                }
              },
              S
            );
          }) }),
          displayEmpty: !s,
          ...d,
          children: t.map((b) => /* @__PURE__ */ O(md, { value: b.value, children: b.label }, b.value))
        }
      )
    ] });
  }
);
b0.displayName = "IpsChipSelect";
const k0 = (n) => /* @__PURE__ */ O(Sy, { ...n, children: /* @__PURE__ */ O("path", { d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" }) }), S0 = ke(
  ({
    summary: n,
    children: e,
    className: t,
    defaultExpanded: r = !1,
    disabled: i = !1,
    onChange: s,
    ...o
  }, l) => {
    const c = [
      "ips-accordion",
      t
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ Je(
      yy,
      {
        ref: l,
        className: c,
        defaultExpanded: r,
        disabled: i,
        onChange: s,
        ...o,
        children: [
          /* @__PURE__ */ O(
            by,
            {
              expandIcon: /* @__PURE__ */ O(k0, {}),
              "aria-controls": "accordion-content",
              id: "accordion-header",
              children: n
            }
          ),
          /* @__PURE__ */ O(ky, { id: "accordion-content", children: e })
        ]
      }
    );
  }
);
S0.displayName = "IpsAccordion";
var xd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function x0(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function wd(n) {
  throw new Error('Could not dynamically require "' + n + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var Wo = { exports: {} }, Rc;
function w0() {
  return Rc || (Rc = 1, function(n, e) {
    (function(t, r) {
      n.exports = r();
    })(xd, function() {
      var t;
      function r() {
        return t.apply(null, arguments);
      }
      function i(a) {
        t = a;
      }
      function s(a) {
        return a instanceof Array || Object.prototype.toString.call(a) === "[object Array]";
      }
      function o(a) {
        return a != null && Object.prototype.toString.call(a) === "[object Object]";
      }
      function l(a, u) {
        return Object.prototype.hasOwnProperty.call(a, u);
      }
      function c(a) {
        if (Object.getOwnPropertyNames)
          return Object.getOwnPropertyNames(a).length === 0;
        var u;
        for (u in a)
          if (l(a, u))
            return !1;
        return !0;
      }
      function d(a) {
        return a === void 0;
      }
      function f(a) {
        return typeof a == "number" || Object.prototype.toString.call(a) === "[object Number]";
      }
      function h(a) {
        return a instanceof Date || Object.prototype.toString.call(a) === "[object Date]";
      }
      function g(a, u) {
        var p = [], m, k = a.length;
        for (m = 0; m < k; ++m)
          p.push(u(a[m], m));
        return p;
      }
      function y(a, u) {
        for (var p in u)
          l(u, p) && (a[p] = u[p]);
        return l(u, "toString") && (a.toString = u.toString), l(u, "valueOf") && (a.valueOf = u.valueOf), a;
      }
      function b(a, u, p, m) {
        return sc(a, u, p, m, !0).utc();
      }
      function S() {
        return {
          empty: !1,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: !1,
          invalidEra: null,
          invalidMonth: null,
          invalidFormat: !1,
          userInvalidated: !1,
          iso: !1,
          parsedDateParts: [],
          era: null,
          meridiem: null,
          rfc2822: !1,
          weekdayMismatch: !1
        };
      }
      function x(a) {
        return a._pf == null && (a._pf = S()), a._pf;
      }
      var w;
      Array.prototype.some ? w = Array.prototype.some : w = function(a) {
        var u = Object(this), p = u.length >>> 0, m;
        for (m = 0; m < p; m++)
          if (m in u && a.call(this, u[m], m, u))
            return !0;
        return !1;
      };
      function T(a) {
        var u = null, p = !1, m = a._d && !isNaN(a._d.getTime());
        if (m && (u = x(a), p = w.call(u.parsedDateParts, function(k) {
          return k != null;
        }), m = u.overflow < 0 && !u.empty && !u.invalidEra && !u.invalidMonth && !u.invalidWeekday && !u.weekdayMismatch && !u.nullInput && !u.invalidFormat && !u.userInvalidated && (!u.meridiem || u.meridiem && p), a._strict && (m = m && u.charsLeftOver === 0 && u.unusedTokens.length === 0 && u.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(a))
          a._isValid = m;
        else
          return m;
        return a._isValid;
      }
      function v(a) {
        var u = b(NaN);
        return a != null ? y(x(u), a) : x(u).userInvalidated = !0, u;
      }
      var _ = r.momentProperties = [], I = !1;
      function P(a, u) {
        var p, m, k, M = _.length;
        if (d(u._isAMomentObject) || (a._isAMomentObject = u._isAMomentObject), d(u._i) || (a._i = u._i), d(u._f) || (a._f = u._f), d(u._l) || (a._l = u._l), d(u._strict) || (a._strict = u._strict), d(u._tzm) || (a._tzm = u._tzm), d(u._isUTC) || (a._isUTC = u._isUTC), d(u._offset) || (a._offset = u._offset), d(u._pf) || (a._pf = x(u)), d(u._locale) || (a._locale = u._locale), M > 0)
          for (p = 0; p < M; p++)
            m = _[p], k = u[m], d(k) || (a[m] = k);
        return a;
      }
      function E(a) {
        P(this, a), this._d = new Date(a._d != null ? a._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), I === !1 && (I = !0, r.updateOffset(this), I = !1);
      }
      function z(a) {
        return a instanceof E || a != null && a._isAMomentObject != null;
      }
      function j(a) {
        r.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + a);
      }
      function Q(a, u) {
        var p = !0;
        return y(function() {
          if (r.deprecationHandler != null && r.deprecationHandler(null, a), p) {
            var m = [], k, M, C, F = arguments.length;
            for (M = 0; M < F; M++) {
              if (k = "", typeof arguments[M] == "object") {
                k += `
[` + M + "] ";
                for (C in arguments[0])
                  l(arguments[0], C) && (k += C + ": " + arguments[0][C] + ", ");
                k = k.slice(0, -2);
              } else
                k = arguments[M];
              m.push(k);
            }
            j(
              a + `
Arguments: ` + Array.prototype.slice.call(m).join("") + `
` + new Error().stack
            ), p = !1;
          }
          return u.apply(this, arguments);
        }, u);
      }
      var ee = {};
      function Ve(a, u) {
        r.deprecationHandler != null && r.deprecationHandler(a, u), ee[a] || (j(u), ee[a] = !0);
      }
      r.suppressDeprecationWarnings = !1, r.deprecationHandler = null;
      function ge(a) {
        return typeof Function < "u" && a instanceof Function || Object.prototype.toString.call(a) === "[object Function]";
      }
      function dt(a) {
        var u, p;
        for (p in a)
          l(a, p) && (u = a[p], ge(u) ? this[p] = u : this["_" + p] = u);
        this._config = a, this._dayOfMonthOrdinalParseLenient = new RegExp(
          (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
        );
      }
      function tt(a, u) {
        var p = y({}, a), m;
        for (m in u)
          l(u, m) && (o(a[m]) && o(u[m]) ? (p[m] = {}, y(p[m], a[m]), y(p[m], u[m])) : u[m] != null ? p[m] = u[m] : delete p[m]);
        for (m in a)
          l(a, m) && !l(u, m) && o(a[m]) && (p[m] = y({}, p[m]));
        return p;
      }
      function Re(a) {
        a != null && this.set(a);
      }
      var Se;
      Object.keys ? Se = Object.keys : Se = function(a) {
        var u, p = [];
        for (u in a)
          l(a, u) && p.push(u);
        return p;
      };
      var so = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
      };
      function oo(a, u, p) {
        var m = this._calendar[a] || this._calendar.sameElse;
        return ge(m) ? m.call(u, p) : m;
      }
      function Oe(a, u, p) {
        var m = "" + Math.abs(a), k = u - m.length, M = a >= 0;
        return (M ? p ? "+" : "" : "-") + Math.pow(10, Math.max(0, k)).toString().substr(1) + m;
      }
      var $n = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, gn = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, yn = {}, Mt = {};
      function H(a, u, p, m) {
        var k = m;
        typeof m == "string" && (k = function() {
          return this[m]();
        }), a && (Mt[a] = k), u && (Mt[u[0]] = function() {
          return Oe(k.apply(this, arguments), u[1], u[2]);
        }), p && (Mt[p] = function() {
          return this.localeData().ordinal(
            k.apply(this, arguments),
            a
          );
        });
      }
      function pr(a) {
        return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "");
      }
      function bn(a) {
        var u = a.match($n), p, m;
        for (p = 0, m = u.length; p < m; p++)
          Mt[u[p]] ? u[p] = Mt[u[p]] : u[p] = pr(u[p]);
        return function(k) {
          var M = "", C;
          for (C = 0; C < m; C++)
            M += ge(u[C]) ? u[C].call(k, a) : u[C];
          return M;
        };
      }
      function Wn(a, u) {
        return a.isValid() ? (u = ui(u, a.localeData()), yn[u] = yn[u] || bn(u), yn[u](a)) : a.localeData().invalidDate();
      }
      function ui(a, u) {
        var p = 5;
        function m(k) {
          return u.longDateFormat(k) || k;
        }
        for (gn.lastIndex = 0; p >= 0 && gn.test(a); )
          a = a.replace(
            gn,
            m
          ), gn.lastIndex = 0, p -= 1;
        return a;
      }
      var lo = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
      };
      function ao(a) {
        var u = this._longDateFormat[a], p = this._longDateFormat[a.toUpperCase()];
        return u || !p ? u : (this._longDateFormat[a] = p.match($n).map(function(m) {
          return m === "MMMM" || m === "MM" || m === "DD" || m === "dddd" ? m.slice(1) : m;
        }).join(""), this._longDateFormat[a]);
      }
      var co = "Invalid date";
      function uo() {
        return this._invalidDate;
      }
      var fo = "%d", ho = /\d{1,2}/;
      function po(a) {
        return this._ordinal.replace("%d", a);
      }
      var mo = {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        w: "a week",
        ww: "%d weeks",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      };
      function go(a, u, p, m) {
        var k = this._relativeTime[p];
        return ge(k) ? k(a, u, p, m) : k.replace(/%d/i, a);
      }
      function yo(a, u) {
        var p = this._relativeTime[a > 0 ? "future" : "past"];
        return ge(p) ? p(u) : p.replace(/%s/i, u);
      }
      var di = {
        D: "date",
        dates: "date",
        date: "date",
        d: "day",
        days: "day",
        day: "day",
        e: "weekday",
        weekdays: "weekday",
        weekday: "weekday",
        E: "isoWeekday",
        isoweekdays: "isoWeekday",
        isoweekday: "isoWeekday",
        DDD: "dayOfYear",
        dayofyears: "dayOfYear",
        dayofyear: "dayOfYear",
        h: "hour",
        hours: "hour",
        hour: "hour",
        ms: "millisecond",
        milliseconds: "millisecond",
        millisecond: "millisecond",
        m: "minute",
        minutes: "minute",
        minute: "minute",
        M: "month",
        months: "month",
        month: "month",
        Q: "quarter",
        quarters: "quarter",
        quarter: "quarter",
        s: "second",
        seconds: "second",
        second: "second",
        gg: "weekYear",
        weekyears: "weekYear",
        weekyear: "weekYear",
        GG: "isoWeekYear",
        isoweekyears: "isoWeekYear",
        isoweekyear: "isoWeekYear",
        w: "week",
        weeks: "week",
        week: "week",
        W: "isoWeek",
        isoweeks: "isoWeek",
        isoweek: "isoWeek",
        y: "year",
        years: "year",
        year: "year"
      };
      function Ye(a) {
        return typeof a == "string" ? di[a] || di[a.toLowerCase()] : void 0;
      }
      function mr(a) {
        var u = {}, p, m;
        for (m in a)
          l(a, m) && (p = Ye(m), p && (u[p] = a[m]));
        return u;
      }
      var bo = {
        date: 9,
        day: 11,
        weekday: 11,
        isoWeekday: 11,
        dayOfYear: 4,
        hour: 13,
        millisecond: 16,
        minute: 14,
        month: 8,
        quarter: 7,
        second: 15,
        weekYear: 1,
        isoWeekYear: 1,
        week: 5,
        isoWeek: 5,
        year: 1
      };
      function ko(a) {
        var u = [], p;
        for (p in a)
          l(a, p) && u.push({ unit: p, priority: bo[p] });
        return u.sort(function(m, k) {
          return m.priority - k.priority;
        }), u;
      }
      var fi = /\d/, Be = /\d\d/, hi = /\d{3}/, gr = /\d{4}/, Vn = /[+-]?\d{6}/, ne = /\d\d?/, pi = /\d\d\d\d?/, mi = /\d\d\d\d\d\d?/, Yn = /\d{1,3}/, yr = /\d{1,4}/, jn = /[+-]?\d{1,6}/, Ct = /\d+/, Wt = /[+-]?\d+/, So = /Z|[+-]\d\d:?\d\d/gi, Vt = /Z|[+-]\d\d(?::?\d\d)?/gi, gi = /[+-]?\d+(\.\d{1,3})?/, Yt = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, Tt = /^[1-9]\d?/, Y = /^([1-9]\d|\d)/, ve;
      ve = {};
      function R(a, u, p) {
        ve[a] = ge(u) ? u : function(m, k) {
          return m && p ? p : u;
        };
      }
      function Ie(a, u) {
        return l(ve, a) ? ve[a](u._strict, u._locale) : new RegExp(je(a));
      }
      function je(a) {
        return nt(
          a.replace("\\", "").replace(
            /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
            function(u, p, m, k, M) {
              return p || m || k || M;
            }
          )
        );
      }
      function nt(a) {
        return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      }
      function Ue(a) {
        return a < 0 ? Math.ceil(a) || 0 : Math.floor(a);
      }
      function U(a) {
        var u = +a, p = 0;
        return u !== 0 && isFinite(u) && (p = Ue(u)), p;
      }
      var xo = {};
      function te(a, u) {
        var p, m = u, k;
        for (typeof a == "string" && (a = [a]), f(u) && (m = function(M, C) {
          C[u] = U(M);
        }), k = a.length, p = 0; p < k; p++)
          xo[a[p]] = m;
      }
      function br(a, u) {
        te(a, function(p, m, k, M) {
          k._w = k._w || {}, u(p, k._w, k, M);
        });
      }
      function Rh(a, u, p) {
        u != null && l(xo, a) && xo[a](u, p._a, p, a);
      }
      function yi(a) {
        return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0;
      }
      var _e = 0, Ot = 1, gt = 2, ye = 3, ft = 4, vt = 5, kn = 6, Ih = 7, _h = 8;
      H("Y", 0, 0, function() {
        var a = this.year();
        return a <= 9999 ? Oe(a, 4) : "+" + a;
      }), H(0, ["YY", 2], 0, function() {
        return this.year() % 100;
      }), H(0, ["YYYY", 4], 0, "year"), H(0, ["YYYYY", 5], 0, "year"), H(0, ["YYYYYY", 6, !0], 0, "year"), R("Y", Wt), R("YY", ne, Be), R("YYYY", yr, gr), R("YYYYY", jn, Vn), R("YYYYYY", jn, Vn), te(["YYYYY", "YYYYYY"], _e), te("YYYY", function(a, u) {
        u[_e] = a.length === 2 ? r.parseTwoDigitYear(a) : U(a);
      }), te("YY", function(a, u) {
        u[_e] = r.parseTwoDigitYear(a);
      }), te("Y", function(a, u) {
        u[_e] = parseInt(a, 10);
      });
      function kr(a) {
        return yi(a) ? 366 : 365;
      }
      r.parseTwoDigitYear = function(a) {
        return U(a) + (U(a) > 68 ? 1900 : 2e3);
      };
      var Va = Un("FullYear", !0);
      function Ph() {
        return yi(this.year());
      }
      function Un(a, u) {
        return function(p) {
          return p != null ? (Ya(this, a, p), r.updateOffset(this, u), this) : Sr(this, a);
        };
      }
      function Sr(a, u) {
        if (!a.isValid())
          return NaN;
        var p = a._d, m = a._isUTC;
        switch (u) {
          case "Milliseconds":
            return m ? p.getUTCMilliseconds() : p.getMilliseconds();
          case "Seconds":
            return m ? p.getUTCSeconds() : p.getSeconds();
          case "Minutes":
            return m ? p.getUTCMinutes() : p.getMinutes();
          case "Hours":
            return m ? p.getUTCHours() : p.getHours();
          case "Date":
            return m ? p.getUTCDate() : p.getDate();
          case "Day":
            return m ? p.getUTCDay() : p.getDay();
          case "Month":
            return m ? p.getUTCMonth() : p.getMonth();
          case "FullYear":
            return m ? p.getUTCFullYear() : p.getFullYear();
          default:
            return NaN;
        }
      }
      function Ya(a, u, p) {
        var m, k, M, C, F;
        if (!(!a.isValid() || isNaN(p))) {
          switch (m = a._d, k = a._isUTC, u) {
            case "Milliseconds":
              return void (k ? m.setUTCMilliseconds(p) : m.setMilliseconds(p));
            case "Seconds":
              return void (k ? m.setUTCSeconds(p) : m.setSeconds(p));
            case "Minutes":
              return void (k ? m.setUTCMinutes(p) : m.setMinutes(p));
            case "Hours":
              return void (k ? m.setUTCHours(p) : m.setHours(p));
            case "Date":
              return void (k ? m.setUTCDate(p) : m.setDate(p));
            case "FullYear":
              break;
            default:
              return;
          }
          M = p, C = a.month(), F = a.date(), F = F === 29 && C === 1 && !yi(M) ? 28 : F, k ? m.setUTCFullYear(M, C, F) : m.setFullYear(M, C, F);
        }
      }
      function Lh(a) {
        return a = Ye(a), ge(this[a]) ? this[a]() : this;
      }
      function Fh(a, u) {
        if (typeof a == "object") {
          a = mr(a);
          var p = ko(a), m, k = p.length;
          for (m = 0; m < k; m++)
            this[p[m].unit](a[p[m].unit]);
        } else if (a = Ye(a), ge(this[a]))
          return this[a](u);
        return this;
      }
      function Bh(a, u) {
        return (a % u + u) % u;
      }
      var ue;
      Array.prototype.indexOf ? ue = Array.prototype.indexOf : ue = function(a) {
        var u;
        for (u = 0; u < this.length; ++u)
          if (this[u] === a)
            return u;
        return -1;
      };
      function wo(a, u) {
        if (isNaN(a) || isNaN(u))
          return NaN;
        var p = Bh(u, 12);
        return a += (u - p) / 12, p === 1 ? yi(a) ? 29 : 28 : 31 - p % 7 % 2;
      }
      H("M", ["MM", 2], "Mo", function() {
        return this.month() + 1;
      }), H("MMM", 0, 0, function(a) {
        return this.localeData().monthsShort(this, a);
      }), H("MMMM", 0, 0, function(a) {
        return this.localeData().months(this, a);
      }), R("M", ne, Tt), R("MM", ne, Be), R("MMM", function(a, u) {
        return u.monthsShortRegex(a);
      }), R("MMMM", function(a, u) {
        return u.monthsRegex(a);
      }), te(["M", "MM"], function(a, u) {
        u[Ot] = U(a) - 1;
      }), te(["MMM", "MMMM"], function(a, u, p, m) {
        var k = p._locale.monthsParse(a, m, p._strict);
        k != null ? u[Ot] = k : x(p).invalidMonth = a;
      });
      var zh = "January_February_March_April_May_June_July_August_September_October_November_December".split(
        "_"
      ), ja = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Ua = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, Hh = Yt, $h = Yt;
      function Wh(a, u) {
        return a ? s(this._months) ? this._months[a.month()] : this._months[(this._months.isFormat || Ua).test(u) ? "format" : "standalone"][a.month()] : s(this._months) ? this._months : this._months.standalone;
      }
      function Vh(a, u) {
        return a ? s(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[Ua.test(u) ? "format" : "standalone"][a.month()] : s(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
      }
      function Yh(a, u, p) {
        var m, k, M, C = a.toLocaleLowerCase();
        if (!this._monthsParse)
          for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], m = 0; m < 12; ++m)
            M = b([2e3, m]), this._shortMonthsParse[m] = this.monthsShort(
              M,
              ""
            ).toLocaleLowerCase(), this._longMonthsParse[m] = this.months(M, "").toLocaleLowerCase();
        return p ? u === "MMM" ? (k = ue.call(this._shortMonthsParse, C), k !== -1 ? k : null) : (k = ue.call(this._longMonthsParse, C), k !== -1 ? k : null) : u === "MMM" ? (k = ue.call(this._shortMonthsParse, C), k !== -1 ? k : (k = ue.call(this._longMonthsParse, C), k !== -1 ? k : null)) : (k = ue.call(this._longMonthsParse, C), k !== -1 ? k : (k = ue.call(this._shortMonthsParse, C), k !== -1 ? k : null));
      }
      function jh(a, u, p) {
        var m, k, M;
        if (this._monthsParseExact)
          return Yh.call(this, a, u, p);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), m = 0; m < 12; m++) {
          if (k = b([2e3, m]), p && !this._longMonthsParse[m] && (this._longMonthsParse[m] = new RegExp(
            "^" + this.months(k, "").replace(".", "") + "$",
            "i"
          ), this._shortMonthsParse[m] = new RegExp(
            "^" + this.monthsShort(k, "").replace(".", "") + "$",
            "i"
          )), !p && !this._monthsParse[m] && (M = "^" + this.months(k, "") + "|^" + this.monthsShort(k, ""), this._monthsParse[m] = new RegExp(M.replace(".", ""), "i")), p && u === "MMMM" && this._longMonthsParse[m].test(a))
            return m;
          if (p && u === "MMM" && this._shortMonthsParse[m].test(a))
            return m;
          if (!p && this._monthsParse[m].test(a))
            return m;
        }
      }
      function qa(a, u) {
        if (!a.isValid())
          return a;
        if (typeof u == "string") {
          if (/^\d+$/.test(u))
            u = U(u);
          else if (u = a.localeData().monthsParse(u), !f(u))
            return a;
        }
        var p = u, m = a.date();
        return m = m < 29 ? m : Math.min(m, wo(a.year(), p)), a._isUTC ? a._d.setUTCMonth(p, m) : a._d.setMonth(p, m), a;
      }
      function Ga(a) {
        return a != null ? (qa(this, a), r.updateOffset(this, !0), this) : Sr(this, "Month");
      }
      function Uh() {
        return wo(this.year(), this.month());
      }
      function qh(a) {
        return this._monthsParseExact ? (l(this, "_monthsRegex") || Ka.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = Hh), this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex);
      }
      function Gh(a) {
        return this._monthsParseExact ? (l(this, "_monthsRegex") || Ka.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = $h), this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex);
      }
      function Ka() {
        function a(W, J) {
          return J.length - W.length;
        }
        var u = [], p = [], m = [], k, M, C, F;
        for (k = 0; k < 12; k++)
          M = b([2e3, k]), C = nt(this.monthsShort(M, "")), F = nt(this.months(M, "")), u.push(C), p.push(F), m.push(F), m.push(C);
        u.sort(a), p.sort(a), m.sort(a), this._monthsRegex = new RegExp("^(" + m.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
          "^(" + p.join("|") + ")",
          "i"
        ), this._monthsShortStrictRegex = new RegExp(
          "^(" + u.join("|") + ")",
          "i"
        );
      }
      function Kh(a, u, p, m, k, M, C) {
        var F;
        return a < 100 && a >= 0 ? (F = new Date(a + 400, u, p, m, k, M, C), isFinite(F.getFullYear()) && F.setFullYear(a)) : F = new Date(a, u, p, m, k, M, C), F;
      }
      function xr(a) {
        var u, p;
        return a < 100 && a >= 0 ? (p = Array.prototype.slice.call(arguments), p[0] = a + 400, u = new Date(Date.UTC.apply(null, p)), isFinite(u.getUTCFullYear()) && u.setUTCFullYear(a)) : u = new Date(Date.UTC.apply(null, arguments)), u;
      }
      function bi(a, u, p) {
        var m = 7 + u - p, k = (7 + xr(a, 0, m).getUTCDay() - u) % 7;
        return -k + m - 1;
      }
      function Ja(a, u, p, m, k) {
        var M = (7 + p - m) % 7, C = bi(a, m, k), F = 1 + 7 * (u - 1) + M + C, W, J;
        return F <= 0 ? (W = a - 1, J = kr(W) + F) : F > kr(a) ? (W = a + 1, J = F - kr(a)) : (W = a, J = F), {
          year: W,
          dayOfYear: J
        };
      }
      function wr(a, u, p) {
        var m = bi(a.year(), u, p), k = Math.floor((a.dayOfYear() - m - 1) / 7) + 1, M, C;
        return k < 1 ? (C = a.year() - 1, M = k + Et(C, u, p)) : k > Et(a.year(), u, p) ? (M = k - Et(a.year(), u, p), C = a.year() + 1) : (C = a.year(), M = k), {
          week: M,
          year: C
        };
      }
      function Et(a, u, p) {
        var m = bi(a, u, p), k = bi(a + 1, u, p);
        return (kr(a) - m + k) / 7;
      }
      H("w", ["ww", 2], "wo", "week"), H("W", ["WW", 2], "Wo", "isoWeek"), R("w", ne, Tt), R("ww", ne, Be), R("W", ne, Tt), R("WW", ne, Be), br(
        ["w", "ww", "W", "WW"],
        function(a, u, p, m) {
          u[m.substr(0, 1)] = U(a);
        }
      );
      function Jh(a) {
        return wr(a, this._week.dow, this._week.doy).week;
      }
      var Qh = {
        dow: 0,
        // Sunday is the first day of the week.
        doy: 6
        // The week that contains Jan 6th is the first week of the year.
      };
      function Zh() {
        return this._week.dow;
      }
      function Xh() {
        return this._week.doy;
      }
      function ep(a) {
        var u = this.localeData().week(this);
        return a == null ? u : this.add((a - u) * 7, "d");
      }
      function tp(a) {
        var u = wr(this, 1, 4).week;
        return a == null ? u : this.add((a - u) * 7, "d");
      }
      H("d", 0, "do", "day"), H("dd", 0, 0, function(a) {
        return this.localeData().weekdaysMin(this, a);
      }), H("ddd", 0, 0, function(a) {
        return this.localeData().weekdaysShort(this, a);
      }), H("dddd", 0, 0, function(a) {
        return this.localeData().weekdays(this, a);
      }), H("e", 0, 0, "weekday"), H("E", 0, 0, "isoWeekday"), R("d", ne), R("e", ne), R("E", ne), R("dd", function(a, u) {
        return u.weekdaysMinRegex(a);
      }), R("ddd", function(a, u) {
        return u.weekdaysShortRegex(a);
      }), R("dddd", function(a, u) {
        return u.weekdaysRegex(a);
      }), br(["dd", "ddd", "dddd"], function(a, u, p, m) {
        var k = p._locale.weekdaysParse(a, m, p._strict);
        k != null ? u.d = k : x(p).invalidWeekday = a;
      }), br(["d", "e", "E"], function(a, u, p, m) {
        u[m] = U(a);
      });
      function np(a, u) {
        return typeof a != "string" ? a : isNaN(a) ? (a = u.weekdaysParse(a), typeof a == "number" ? a : null) : parseInt(a, 10);
      }
      function rp(a, u) {
        return typeof a == "string" ? u.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a;
      }
      function Mo(a, u) {
        return a.slice(u, 7).concat(a.slice(0, u));
      }
      var ip = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Qa = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), sp = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), op = Yt, lp = Yt, ap = Yt;
      function cp(a, u) {
        var p = s(this._weekdays) ? this._weekdays : this._weekdays[a && a !== !0 && this._weekdays.isFormat.test(u) ? "format" : "standalone"];
        return a === !0 ? Mo(p, this._week.dow) : a ? p[a.day()] : p;
      }
      function up(a) {
        return a === !0 ? Mo(this._weekdaysShort, this._week.dow) : a ? this._weekdaysShort[a.day()] : this._weekdaysShort;
      }
      function dp(a) {
        return a === !0 ? Mo(this._weekdaysMin, this._week.dow) : a ? this._weekdaysMin[a.day()] : this._weekdaysMin;
      }
      function fp(a, u, p) {
        var m, k, M, C = a.toLocaleLowerCase();
        if (!this._weekdaysParse)
          for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], m = 0; m < 7; ++m)
            M = b([2e3, 1]).day(m), this._minWeekdaysParse[m] = this.weekdaysMin(
              M,
              ""
            ).toLocaleLowerCase(), this._shortWeekdaysParse[m] = this.weekdaysShort(
              M,
              ""
            ).toLocaleLowerCase(), this._weekdaysParse[m] = this.weekdays(M, "").toLocaleLowerCase();
        return p ? u === "dddd" ? (k = ue.call(this._weekdaysParse, C), k !== -1 ? k : null) : u === "ddd" ? (k = ue.call(this._shortWeekdaysParse, C), k !== -1 ? k : null) : (k = ue.call(this._minWeekdaysParse, C), k !== -1 ? k : null) : u === "dddd" ? (k = ue.call(this._weekdaysParse, C), k !== -1 || (k = ue.call(this._shortWeekdaysParse, C), k !== -1) ? k : (k = ue.call(this._minWeekdaysParse, C), k !== -1 ? k : null)) : u === "ddd" ? (k = ue.call(this._shortWeekdaysParse, C), k !== -1 || (k = ue.call(this._weekdaysParse, C), k !== -1) ? k : (k = ue.call(this._minWeekdaysParse, C), k !== -1 ? k : null)) : (k = ue.call(this._minWeekdaysParse, C), k !== -1 || (k = ue.call(this._weekdaysParse, C), k !== -1) ? k : (k = ue.call(this._shortWeekdaysParse, C), k !== -1 ? k : null));
      }
      function hp(a, u, p) {
        var m, k, M;
        if (this._weekdaysParseExact)
          return fp.call(this, a, u, p);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), m = 0; m < 7; m++) {
          if (k = b([2e3, 1]).day(m), p && !this._fullWeekdaysParse[m] && (this._fullWeekdaysParse[m] = new RegExp(
            "^" + this.weekdays(k, "").replace(".", "\\.?") + "$",
            "i"
          ), this._shortWeekdaysParse[m] = new RegExp(
            "^" + this.weekdaysShort(k, "").replace(".", "\\.?") + "$",
            "i"
          ), this._minWeekdaysParse[m] = new RegExp(
            "^" + this.weekdaysMin(k, "").replace(".", "\\.?") + "$",
            "i"
          )), this._weekdaysParse[m] || (M = "^" + this.weekdays(k, "") + "|^" + this.weekdaysShort(k, "") + "|^" + this.weekdaysMin(k, ""), this._weekdaysParse[m] = new RegExp(M.replace(".", ""), "i")), p && u === "dddd" && this._fullWeekdaysParse[m].test(a))
            return m;
          if (p && u === "ddd" && this._shortWeekdaysParse[m].test(a))
            return m;
          if (p && u === "dd" && this._minWeekdaysParse[m].test(a))
            return m;
          if (!p && this._weekdaysParse[m].test(a))
            return m;
        }
      }
      function pp(a) {
        if (!this.isValid())
          return a != null ? this : NaN;
        var u = Sr(this, "Day");
        return a != null ? (a = np(a, this.localeData()), this.add(a - u, "d")) : u;
      }
      function mp(a) {
        if (!this.isValid())
          return a != null ? this : NaN;
        var u = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return a == null ? u : this.add(a - u, "d");
      }
      function gp(a) {
        if (!this.isValid())
          return a != null ? this : NaN;
        if (a != null) {
          var u = rp(a, this.localeData());
          return this.day(this.day() % 7 ? u : u - 7);
        } else
          return this.day() || 7;
      }
      function yp(a) {
        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Co.call(this), a ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = op), this._weekdaysStrictRegex && a ? this._weekdaysStrictRegex : this._weekdaysRegex);
      }
      function bp(a) {
        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Co.call(this), a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = lp), this._weekdaysShortStrictRegex && a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
      }
      function kp(a) {
        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Co.call(this), a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = ap), this._weekdaysMinStrictRegex && a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
      }
      function Co() {
        function a(ze, It) {
          return It.length - ze.length;
        }
        var u = [], p = [], m = [], k = [], M, C, F, W, J;
        for (M = 0; M < 7; M++)
          C = b([2e3, 1]).day(M), F = nt(this.weekdaysMin(C, "")), W = nt(this.weekdaysShort(C, "")), J = nt(this.weekdays(C, "")), u.push(F), p.push(W), m.push(J), k.push(F), k.push(W), k.push(J);
        u.sort(a), p.sort(a), m.sort(a), k.sort(a), this._weekdaysRegex = new RegExp("^(" + k.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
          "^(" + m.join("|") + ")",
          "i"
        ), this._weekdaysShortStrictRegex = new RegExp(
          "^(" + p.join("|") + ")",
          "i"
        ), this._weekdaysMinStrictRegex = new RegExp(
          "^(" + u.join("|") + ")",
          "i"
        );
      }
      function To() {
        return this.hours() % 12 || 12;
      }
      function Sp() {
        return this.hours() || 24;
      }
      H("H", ["HH", 2], 0, "hour"), H("h", ["hh", 2], 0, To), H("k", ["kk", 2], 0, Sp), H("hmm", 0, 0, function() {
        return "" + To.apply(this) + Oe(this.minutes(), 2);
      }), H("hmmss", 0, 0, function() {
        return "" + To.apply(this) + Oe(this.minutes(), 2) + Oe(this.seconds(), 2);
      }), H("Hmm", 0, 0, function() {
        return "" + this.hours() + Oe(this.minutes(), 2);
      }), H("Hmmss", 0, 0, function() {
        return "" + this.hours() + Oe(this.minutes(), 2) + Oe(this.seconds(), 2);
      });
      function Za(a, u) {
        H(a, 0, 0, function() {
          return this.localeData().meridiem(
            this.hours(),
            this.minutes(),
            u
          );
        });
      }
      Za("a", !0), Za("A", !1);
      function Xa(a, u) {
        return u._meridiemParse;
      }
      R("a", Xa), R("A", Xa), R("H", ne, Y), R("h", ne, Tt), R("k", ne, Tt), R("HH", ne, Be), R("hh", ne, Be), R("kk", ne, Be), R("hmm", pi), R("hmmss", mi), R("Hmm", pi), R("Hmmss", mi), te(["H", "HH"], ye), te(["k", "kk"], function(a, u, p) {
        var m = U(a);
        u[ye] = m === 24 ? 0 : m;
      }), te(["a", "A"], function(a, u, p) {
        p._isPm = p._locale.isPM(a), p._meridiem = a;
      }), te(["h", "hh"], function(a, u, p) {
        u[ye] = U(a), x(p).bigHour = !0;
      }), te("hmm", function(a, u, p) {
        var m = a.length - 2;
        u[ye] = U(a.substr(0, m)), u[ft] = U(a.substr(m)), x(p).bigHour = !0;
      }), te("hmmss", function(a, u, p) {
        var m = a.length - 4, k = a.length - 2;
        u[ye] = U(a.substr(0, m)), u[ft] = U(a.substr(m, 2)), u[vt] = U(a.substr(k)), x(p).bigHour = !0;
      }), te("Hmm", function(a, u, p) {
        var m = a.length - 2;
        u[ye] = U(a.substr(0, m)), u[ft] = U(a.substr(m));
      }), te("Hmmss", function(a, u, p) {
        var m = a.length - 4, k = a.length - 2;
        u[ye] = U(a.substr(0, m)), u[ft] = U(a.substr(m, 2)), u[vt] = U(a.substr(k));
      });
      function xp(a) {
        return (a + "").toLowerCase().charAt(0) === "p";
      }
      var wp = /[ap]\.?m?\.?/i, Mp = Un("Hours", !0);
      function Cp(a, u, p) {
        return a > 11 ? p ? "pm" : "PM" : p ? "am" : "AM";
      }
      var ec = {
        calendar: so,
        longDateFormat: lo,
        invalidDate: co,
        ordinal: fo,
        dayOfMonthOrdinalParse: ho,
        relativeTime: mo,
        months: zh,
        monthsShort: ja,
        week: Qh,
        weekdays: ip,
        weekdaysMin: sp,
        weekdaysShort: Qa,
        meridiemParse: wp
      }, oe = {}, Mr = {}, Cr;
      function Tp(a, u) {
        var p, m = Math.min(a.length, u.length);
        for (p = 0; p < m; p += 1)
          if (a[p] !== u[p])
            return p;
        return m;
      }
      function tc(a) {
        return a && a.toLowerCase().replace("_", "-");
      }
      function Op(a) {
        for (var u = 0, p, m, k, M; u < a.length; ) {
          for (M = tc(a[u]).split("-"), p = M.length, m = tc(a[u + 1]), m = m ? m.split("-") : null; p > 0; ) {
            if (k = ki(M.slice(0, p).join("-")), k)
              return k;
            if (m && m.length >= p && Tp(M, m) >= p - 1)
              break;
            p--;
          }
          u++;
        }
        return Cr;
      }
      function vp(a) {
        return !!(a && a.match("^[^/\\\\]*$"));
      }
      function ki(a) {
        var u = null, p;
        if (oe[a] === void 0 && n && n.exports && vp(a))
          try {
            u = Cr._abbr, p = wd, p("./locale/" + a), jt(u);
          } catch {
            oe[a] = null;
          }
        return oe[a];
      }
      function jt(a, u) {
        var p;
        return a && (d(u) ? p = At(a) : p = Oo(a, u), p ? Cr = p : typeof console < "u" && console.warn && console.warn(
          "Locale " + a + " not found. Did you forget to load it?"
        )), Cr._abbr;
      }
      function Oo(a, u) {
        if (u !== null) {
          var p, m = ec;
          if (u.abbr = a, oe[a] != null)
            Ve(
              "defineLocaleOverride",
              "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
            ), m = oe[a]._config;
          else if (u.parentLocale != null)
            if (oe[u.parentLocale] != null)
              m = oe[u.parentLocale]._config;
            else if (p = ki(u.parentLocale), p != null)
              m = p._config;
            else
              return Mr[u.parentLocale] || (Mr[u.parentLocale] = []), Mr[u.parentLocale].push({
                name: a,
                config: u
              }), null;
          return oe[a] = new Re(tt(m, u)), Mr[a] && Mr[a].forEach(function(k) {
            Oo(k.name, k.config);
          }), jt(a), oe[a];
        } else
          return delete oe[a], null;
      }
      function Ep(a, u) {
        if (u != null) {
          var p, m, k = ec;
          oe[a] != null && oe[a].parentLocale != null ? oe[a].set(tt(oe[a]._config, u)) : (m = ki(a), m != null && (k = m._config), u = tt(k, u), m == null && (u.abbr = a), p = new Re(u), p.parentLocale = oe[a], oe[a] = p), jt(a);
        } else
          oe[a] != null && (oe[a].parentLocale != null ? (oe[a] = oe[a].parentLocale, a === jt() && jt(a)) : oe[a] != null && delete oe[a]);
        return oe[a];
      }
      function At(a) {
        var u;
        if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a)
          return Cr;
        if (!s(a)) {
          if (u = ki(a), u)
            return u;
          a = [a];
        }
        return Op(a);
      }
      function Ap() {
        return Se(oe);
      }
      function vo(a) {
        var u, p = a._a;
        return p && x(a).overflow === -2 && (u = p[Ot] < 0 || p[Ot] > 11 ? Ot : p[gt] < 1 || p[gt] > wo(p[_e], p[Ot]) ? gt : p[ye] < 0 || p[ye] > 24 || p[ye] === 24 && (p[ft] !== 0 || p[vt] !== 0 || p[kn] !== 0) ? ye : p[ft] < 0 || p[ft] > 59 ? ft : p[vt] < 0 || p[vt] > 59 ? vt : p[kn] < 0 || p[kn] > 999 ? kn : -1, x(a)._overflowDayOfYear && (u < _e || u > gt) && (u = gt), x(a)._overflowWeeks && u === -1 && (u = Ih), x(a)._overflowWeekday && u === -1 && (u = _h), x(a).overflow = u), a;
      }
      var Dp = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Np = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Rp = /Z|[+-]\d\d(?::?\d\d)?/, Si = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
        ["YYYY-DDD", /\d{4}-\d{3}/],
        ["YYYY-MM", /\d{4}-\d\d/, !1],
        ["YYYYYYMMDD", /[+-]\d{10}/],
        ["YYYYMMDD", /\d{8}/],
        ["GGGG[W]WWE", /\d{4}W\d{3}/],
        ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
        ["YYYYDDD", /\d{7}/],
        ["YYYYMM", /\d{6}/, !1],
        ["YYYY", /\d{4}/, !1]
      ], Eo = [
        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
        ["HH:mm", /\d\d:\d\d/],
        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
        ["HHmmss", /\d\d\d\d\d\d/],
        ["HHmm", /\d\d\d\d/],
        ["HH", /\d\d/]
      ], Ip = /^\/?Date\((-?\d+)/i, _p = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Pp = {
        UT: 0,
        GMT: 0,
        EDT: -4 * 60,
        EST: -5 * 60,
        CDT: -5 * 60,
        CST: -6 * 60,
        MDT: -6 * 60,
        MST: -7 * 60,
        PDT: -7 * 60,
        PST: -8 * 60
      };
      function nc(a) {
        var u, p, m = a._i, k = Dp.exec(m) || Np.exec(m), M, C, F, W, J = Si.length, ze = Eo.length;
        if (k) {
          for (x(a).iso = !0, u = 0, p = J; u < p; u++)
            if (Si[u][1].exec(k[1])) {
              C = Si[u][0], M = Si[u][2] !== !1;
              break;
            }
          if (C == null) {
            a._isValid = !1;
            return;
          }
          if (k[3]) {
            for (u = 0, p = ze; u < p; u++)
              if (Eo[u][1].exec(k[3])) {
                F = (k[2] || " ") + Eo[u][0];
                break;
              }
            if (F == null) {
              a._isValid = !1;
              return;
            }
          }
          if (!M && F != null) {
            a._isValid = !1;
            return;
          }
          if (k[4])
            if (Rp.exec(k[4]))
              W = "Z";
            else {
              a._isValid = !1;
              return;
            }
          a._f = C + (F || "") + (W || ""), Do(a);
        } else
          a._isValid = !1;
      }
      function Lp(a, u, p, m, k, M) {
        var C = [
          Fp(a),
          ja.indexOf(u),
          parseInt(p, 10),
          parseInt(m, 10),
          parseInt(k, 10)
        ];
        return M && C.push(parseInt(M, 10)), C;
      }
      function Fp(a) {
        var u = parseInt(a, 10);
        return u <= 49 ? 2e3 + u : u <= 999 ? 1900 + u : u;
      }
      function Bp(a) {
        return a.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
      }
      function zp(a, u, p) {
        if (a) {
          var m = Qa.indexOf(a), k = new Date(
            u[0],
            u[1],
            u[2]
          ).getDay();
          if (m !== k)
            return x(p).weekdayMismatch = !0, p._isValid = !1, !1;
        }
        return !0;
      }
      function Hp(a, u, p) {
        if (a)
          return Pp[a];
        if (u)
          return 0;
        var m = parseInt(p, 10), k = m % 100, M = (m - k) / 100;
        return M * 60 + k;
      }
      function rc(a) {
        var u = _p.exec(Bp(a._i)), p;
        if (u) {
          if (p = Lp(
            u[4],
            u[3],
            u[2],
            u[5],
            u[6],
            u[7]
          ), !zp(u[1], p, a))
            return;
          a._a = p, a._tzm = Hp(u[8], u[9], u[10]), a._d = xr.apply(null, a._a), a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), x(a).rfc2822 = !0;
        } else
          a._isValid = !1;
      }
      function $p(a) {
        var u = Ip.exec(a._i);
        if (u !== null) {
          a._d = /* @__PURE__ */ new Date(+u[1]);
          return;
        }
        if (nc(a), a._isValid === !1)
          delete a._isValid;
        else
          return;
        if (rc(a), a._isValid === !1)
          delete a._isValid;
        else
          return;
        a._strict ? a._isValid = !1 : r.createFromInputFallback(a);
      }
      r.createFromInputFallback = Q(
        "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
        function(a) {
          a._d = /* @__PURE__ */ new Date(a._i + (a._useUTC ? " UTC" : ""));
        }
      );
      function qn(a, u, p) {
        return a ?? u ?? p;
      }
      function Wp(a) {
        var u = new Date(r.now());
        return a._useUTC ? [
          u.getUTCFullYear(),
          u.getUTCMonth(),
          u.getUTCDate()
        ] : [u.getFullYear(), u.getMonth(), u.getDate()];
      }
      function Ao(a) {
        var u, p, m = [], k, M, C;
        if (!a._d) {
          for (k = Wp(a), a._w && a._a[gt] == null && a._a[Ot] == null && Vp(a), a._dayOfYear != null && (C = qn(a._a[_e], k[_e]), (a._dayOfYear > kr(C) || a._dayOfYear === 0) && (x(a)._overflowDayOfYear = !0), p = xr(C, 0, a._dayOfYear), a._a[Ot] = p.getUTCMonth(), a._a[gt] = p.getUTCDate()), u = 0; u < 3 && a._a[u] == null; ++u)
            a._a[u] = m[u] = k[u];
          for (; u < 7; u++)
            a._a[u] = m[u] = a._a[u] == null ? u === 2 ? 1 : 0 : a._a[u];
          a._a[ye] === 24 && a._a[ft] === 0 && a._a[vt] === 0 && a._a[kn] === 0 && (a._nextDay = !0, a._a[ye] = 0), a._d = (a._useUTC ? xr : Kh).apply(
            null,
            m
          ), M = a._useUTC ? a._d.getUTCDay() : a._d.getDay(), a._tzm != null && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[ye] = 24), a._w && typeof a._w.d < "u" && a._w.d !== M && (x(a).weekdayMismatch = !0);
        }
      }
      function Vp(a) {
        var u, p, m, k, M, C, F, W, J;
        u = a._w, u.GG != null || u.W != null || u.E != null ? (M = 1, C = 4, p = qn(
          u.GG,
          a._a[_e],
          wr(ie(), 1, 4).year
        ), m = qn(u.W, 1), k = qn(u.E, 1), (k < 1 || k > 7) && (W = !0)) : (M = a._locale._week.dow, C = a._locale._week.doy, J = wr(ie(), M, C), p = qn(u.gg, a._a[_e], J.year), m = qn(u.w, J.week), u.d != null ? (k = u.d, (k < 0 || k > 6) && (W = !0)) : u.e != null ? (k = u.e + M, (u.e < 0 || u.e > 6) && (W = !0)) : k = M), m < 1 || m > Et(p, M, C) ? x(a)._overflowWeeks = !0 : W != null ? x(a)._overflowWeekday = !0 : (F = Ja(p, m, k, M, C), a._a[_e] = F.year, a._dayOfYear = F.dayOfYear);
      }
      r.ISO_8601 = function() {
      }, r.RFC_2822 = function() {
      };
      function Do(a) {
        if (a._f === r.ISO_8601) {
          nc(a);
          return;
        }
        if (a._f === r.RFC_2822) {
          rc(a);
          return;
        }
        a._a = [], x(a).empty = !0;
        var u = "" + a._i, p, m, k, M, C, F = u.length, W = 0, J, ze;
        for (k = ui(a._f, a._locale).match($n) || [], ze = k.length, p = 0; p < ze; p++)
          M = k[p], m = (u.match(Ie(M, a)) || [])[0], m && (C = u.substr(0, u.indexOf(m)), C.length > 0 && x(a).unusedInput.push(C), u = u.slice(
            u.indexOf(m) + m.length
          ), W += m.length), Mt[M] ? (m ? x(a).empty = !1 : x(a).unusedTokens.push(M), Rh(M, m, a)) : a._strict && !m && x(a).unusedTokens.push(M);
        x(a).charsLeftOver = F - W, u.length > 0 && x(a).unusedInput.push(u), a._a[ye] <= 12 && x(a).bigHour === !0 && a._a[ye] > 0 && (x(a).bigHour = void 0), x(a).parsedDateParts = a._a.slice(0), x(a).meridiem = a._meridiem, a._a[ye] = Yp(
          a._locale,
          a._a[ye],
          a._meridiem
        ), J = x(a).era, J !== null && (a._a[_e] = a._locale.erasConvertYear(J, a._a[_e])), Ao(a), vo(a);
      }
      function Yp(a, u, p) {
        var m;
        return p == null ? u : a.meridiemHour != null ? a.meridiemHour(u, p) : (a.isPM != null && (m = a.isPM(p), m && u < 12 && (u += 12), !m && u === 12 && (u = 0)), u);
      }
      function jp(a) {
        var u, p, m, k, M, C, F = !1, W = a._f.length;
        if (W === 0) {
          x(a).invalidFormat = !0, a._d = /* @__PURE__ */ new Date(NaN);
          return;
        }
        for (k = 0; k < W; k++)
          M = 0, C = !1, u = P({}, a), a._useUTC != null && (u._useUTC = a._useUTC), u._f = a._f[k], Do(u), T(u) && (C = !0), M += x(u).charsLeftOver, M += x(u).unusedTokens.length * 10, x(u).score = M, F ? M < m && (m = M, p = u) : (m == null || M < m || C) && (m = M, p = u, C && (F = !0));
        y(a, p || u);
      }
      function Up(a) {
        if (!a._d) {
          var u = mr(a._i), p = u.day === void 0 ? u.date : u.day;
          a._a = g(
            [u.year, u.month, p, u.hour, u.minute, u.second, u.millisecond],
            function(m) {
              return m && parseInt(m, 10);
            }
          ), Ao(a);
        }
      }
      function qp(a) {
        var u = new E(vo(ic(a)));
        return u._nextDay && (u.add(1, "d"), u._nextDay = void 0), u;
      }
      function ic(a) {
        var u = a._i, p = a._f;
        return a._locale = a._locale || At(a._l), u === null || p === void 0 && u === "" ? v({ nullInput: !0 }) : (typeof u == "string" && (a._i = u = a._locale.preparse(u)), z(u) ? new E(vo(u)) : (h(u) ? a._d = u : s(p) ? jp(a) : p ? Do(a) : Gp(a), T(a) || (a._d = null), a));
      }
      function Gp(a) {
        var u = a._i;
        d(u) ? a._d = new Date(r.now()) : h(u) ? a._d = new Date(u.valueOf()) : typeof u == "string" ? $p(a) : s(u) ? (a._a = g(u.slice(0), function(p) {
          return parseInt(p, 10);
        }), Ao(a)) : o(u) ? Up(a) : f(u) ? a._d = new Date(u) : r.createFromInputFallback(a);
      }
      function sc(a, u, p, m, k) {
        var M = {};
        return (u === !0 || u === !1) && (m = u, u = void 0), (p === !0 || p === !1) && (m = p, p = void 0), (o(a) && c(a) || s(a) && a.length === 0) && (a = void 0), M._isAMomentObject = !0, M._useUTC = M._isUTC = k, M._l = p, M._i = a, M._f = u, M._strict = m, qp(M);
      }
      function ie(a, u, p, m) {
        return sc(a, u, p, m, !1);
      }
      var Kp = Q(
        "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
        function() {
          var a = ie.apply(null, arguments);
          return this.isValid() && a.isValid() ? a < this ? this : a : v();
        }
      ), Jp = Q(
        "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
        function() {
          var a = ie.apply(null, arguments);
          return this.isValid() && a.isValid() ? a > this ? this : a : v();
        }
      );
      function oc(a, u) {
        var p, m;
        if (u.length === 1 && s(u[0]) && (u = u[0]), !u.length)
          return ie();
        for (p = u[0], m = 1; m < u.length; ++m)
          (!u[m].isValid() || u[m][a](p)) && (p = u[m]);
        return p;
      }
      function Qp() {
        var a = [].slice.call(arguments, 0);
        return oc("isBefore", a);
      }
      function Zp() {
        var a = [].slice.call(arguments, 0);
        return oc("isAfter", a);
      }
      var Xp = function() {
        return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
      }, Tr = [
        "year",
        "quarter",
        "month",
        "week",
        "day",
        "hour",
        "minute",
        "second",
        "millisecond"
      ];
      function em(a) {
        var u, p = !1, m, k = Tr.length;
        for (u in a)
          if (l(a, u) && !(ue.call(Tr, u) !== -1 && (a[u] == null || !isNaN(a[u]))))
            return !1;
        for (m = 0; m < k; ++m)
          if (a[Tr[m]]) {
            if (p)
              return !1;
            parseFloat(a[Tr[m]]) !== U(a[Tr[m]]) && (p = !0);
          }
        return !0;
      }
      function tm() {
        return this._isValid;
      }
      function nm() {
        return ht(NaN);
      }
      function xi(a) {
        var u = mr(a), p = u.year || 0, m = u.quarter || 0, k = u.month || 0, M = u.week || u.isoWeek || 0, C = u.day || 0, F = u.hour || 0, W = u.minute || 0, J = u.second || 0, ze = u.millisecond || 0;
        this._isValid = em(u), this._milliseconds = +ze + J * 1e3 + // 1000
        W * 6e4 + // 1000 * 60
        F * 1e3 * 60 * 60, this._days = +C + M * 7, this._months = +k + m * 3 + p * 12, this._data = {}, this._locale = At(), this._bubble();
      }
      function wi(a) {
        return a instanceof xi;
      }
      function No(a) {
        return a < 0 ? Math.round(-1 * a) * -1 : Math.round(a);
      }
      function rm(a, u, p) {
        var m = Math.min(a.length, u.length), k = Math.abs(a.length - u.length), M = 0, C;
        for (C = 0; C < m; C++)
          U(a[C]) !== U(u[C]) && M++;
        return M + k;
      }
      function lc(a, u) {
        H(a, 0, 0, function() {
          var p = this.utcOffset(), m = "+";
          return p < 0 && (p = -p, m = "-"), m + Oe(~~(p / 60), 2) + u + Oe(~~p % 60, 2);
        });
      }
      lc("Z", ":"), lc("ZZ", ""), R("Z", Vt), R("ZZ", Vt), te(["Z", "ZZ"], function(a, u, p) {
        p._useUTC = !0, p._tzm = Ro(Vt, a);
      });
      var im = /([\+\-]|\d\d)/gi;
      function Ro(a, u) {
        var p = (u || "").match(a), m, k, M;
        return p === null ? null : (m = p[p.length - 1] || [], k = (m + "").match(im) || ["-", 0, 0], M = +(k[1] * 60) + U(k[2]), M === 0 ? 0 : k[0] === "+" ? M : -M);
      }
      function Io(a, u) {
        var p, m;
        return u._isUTC ? (p = u.clone(), m = (z(a) || h(a) ? a.valueOf() : ie(a).valueOf()) - p.valueOf(), p._d.setTime(p._d.valueOf() + m), r.updateOffset(p, !1), p) : ie(a).local();
      }
      function _o(a) {
        return -Math.round(a._d.getTimezoneOffset());
      }
      r.updateOffset = function() {
      };
      function sm(a, u, p) {
        var m = this._offset || 0, k;
        if (!this.isValid())
          return a != null ? this : NaN;
        if (a != null) {
          if (typeof a == "string") {
            if (a = Ro(Vt, a), a === null)
              return this;
          } else Math.abs(a) < 16 && !p && (a = a * 60);
          return !this._isUTC && u && (k = _o(this)), this._offset = a, this._isUTC = !0, k != null && this.add(k, "m"), m !== a && (!u || this._changeInProgress ? dc(
            this,
            ht(a - m, "m"),
            1,
            !1
          ) : this._changeInProgress || (this._changeInProgress = !0, r.updateOffset(this, !0), this._changeInProgress = null)), this;
        } else
          return this._isUTC ? m : _o(this);
      }
      function om(a, u) {
        return a != null ? (typeof a != "string" && (a = -a), this.utcOffset(a, u), this) : -this.utcOffset();
      }
      function lm(a) {
        return this.utcOffset(0, a);
      }
      function am(a) {
        return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(_o(this), "m")), this;
      }
      function cm() {
        if (this._tzm != null)
          this.utcOffset(this._tzm, !1, !0);
        else if (typeof this._i == "string") {
          var a = Ro(So, this._i);
          a != null ? this.utcOffset(a) : this.utcOffset(0, !0);
        }
        return this;
      }
      function um(a) {
        return this.isValid() ? (a = a ? ie(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0) : !1;
      }
      function dm() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
      }
      function fm() {
        if (!d(this._isDSTShifted))
          return this._isDSTShifted;
        var a = {}, u;
        return P(a, this), a = ic(a), a._a ? (u = a._isUTC ? b(a._a) : ie(a._a), this._isDSTShifted = this.isValid() && rm(a._a, u.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
      }
      function hm() {
        return this.isValid() ? !this._isUTC : !1;
      }
      function pm() {
        return this.isValid() ? this._isUTC : !1;
      }
      function ac() {
        return this.isValid() ? this._isUTC && this._offset === 0 : !1;
      }
      var mm = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, gm = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
      function ht(a, u) {
        var p = a, m = null, k, M, C;
        return wi(a) ? p = {
          ms: a._milliseconds,
          d: a._days,
          M: a._months
        } : f(a) || !isNaN(+a) ? (p = {}, u ? p[u] = +a : p.milliseconds = +a) : (m = mm.exec(a)) ? (k = m[1] === "-" ? -1 : 1, p = {
          y: 0,
          d: U(m[gt]) * k,
          h: U(m[ye]) * k,
          m: U(m[ft]) * k,
          s: U(m[vt]) * k,
          ms: U(No(m[kn] * 1e3)) * k
          // the millisecond decimal point is included in the match
        }) : (m = gm.exec(a)) ? (k = m[1] === "-" ? -1 : 1, p = {
          y: Sn(m[2], k),
          M: Sn(m[3], k),
          w: Sn(m[4], k),
          d: Sn(m[5], k),
          h: Sn(m[6], k),
          m: Sn(m[7], k),
          s: Sn(m[8], k)
        }) : p == null ? p = {} : typeof p == "object" && ("from" in p || "to" in p) && (C = ym(
          ie(p.from),
          ie(p.to)
        ), p = {}, p.ms = C.milliseconds, p.M = C.months), M = new xi(p), wi(a) && l(a, "_locale") && (M._locale = a._locale), wi(a) && l(a, "_isValid") && (M._isValid = a._isValid), M;
      }
      ht.fn = xi.prototype, ht.invalid = nm;
      function Sn(a, u) {
        var p = a && parseFloat(a.replace(",", "."));
        return (isNaN(p) ? 0 : p) * u;
      }
      function cc(a, u) {
        var p = {};
        return p.months = u.month() - a.month() + (u.year() - a.year()) * 12, a.clone().add(p.months, "M").isAfter(u) && --p.months, p.milliseconds = +u - +a.clone().add(p.months, "M"), p;
      }
      function ym(a, u) {
        var p;
        return a.isValid() && u.isValid() ? (u = Io(u, a), a.isBefore(u) ? p = cc(a, u) : (p = cc(u, a), p.milliseconds = -p.milliseconds, p.months = -p.months), p) : { milliseconds: 0, months: 0 };
      }
      function uc(a, u) {
        return function(p, m) {
          var k, M;
          return m !== null && !isNaN(+m) && (Ve(
            u,
            "moment()." + u + "(period, number) is deprecated. Please use moment()." + u + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
          ), M = p, p = m, m = M), k = ht(p, m), dc(this, k, a), this;
        };
      }
      function dc(a, u, p, m) {
        var k = u._milliseconds, M = No(u._days), C = No(u._months);
        a.isValid() && (m = m ?? !0, C && qa(a, Sr(a, "Month") + C * p), M && Ya(a, "Date", Sr(a, "Date") + M * p), k && a._d.setTime(a._d.valueOf() + k * p), m && r.updateOffset(a, M || C));
      }
      var bm = uc(1, "add"), km = uc(-1, "subtract");
      function fc(a) {
        return typeof a == "string" || a instanceof String;
      }
      function Sm(a) {
        return z(a) || h(a) || fc(a) || f(a) || wm(a) || xm(a) || a === null || a === void 0;
      }
      function xm(a) {
        var u = o(a) && !c(a), p = !1, m = [
          "years",
          "year",
          "y",
          "months",
          "month",
          "M",
          "days",
          "day",
          "d",
          "dates",
          "date",
          "D",
          "hours",
          "hour",
          "h",
          "minutes",
          "minute",
          "m",
          "seconds",
          "second",
          "s",
          "milliseconds",
          "millisecond",
          "ms"
        ], k, M, C = m.length;
        for (k = 0; k < C; k += 1)
          M = m[k], p = p || l(a, M);
        return u && p;
      }
      function wm(a) {
        var u = s(a), p = !1;
        return u && (p = a.filter(function(m) {
          return !f(m) && fc(a);
        }).length === 0), u && p;
      }
      function Mm(a) {
        var u = o(a) && !c(a), p = !1, m = [
          "sameDay",
          "nextDay",
          "lastDay",
          "nextWeek",
          "lastWeek",
          "sameElse"
        ], k, M;
        for (k = 0; k < m.length; k += 1)
          M = m[k], p = p || l(a, M);
        return u && p;
      }
      function Cm(a, u) {
        var p = a.diff(u, "days", !0);
        return p < -6 ? "sameElse" : p < -1 ? "lastWeek" : p < 0 ? "lastDay" : p < 1 ? "sameDay" : p < 2 ? "nextDay" : p < 7 ? "nextWeek" : "sameElse";
      }
      function Tm(a, u) {
        arguments.length === 1 && (arguments[0] ? Sm(arguments[0]) ? (a = arguments[0], u = void 0) : Mm(arguments[0]) && (u = arguments[0], a = void 0) : (a = void 0, u = void 0));
        var p = a || ie(), m = Io(p, this).startOf("day"), k = r.calendarFormat(this, m) || "sameElse", M = u && (ge(u[k]) ? u[k].call(this, p) : u[k]);
        return this.format(
          M || this.localeData().calendar(k, this, ie(p))
        );
      }
      function Om() {
        return new E(this);
      }
      function vm(a, u) {
        var p = z(a) ? a : ie(a);
        return this.isValid() && p.isValid() ? (u = Ye(u) || "millisecond", u === "millisecond" ? this.valueOf() > p.valueOf() : p.valueOf() < this.clone().startOf(u).valueOf()) : !1;
      }
      function Em(a, u) {
        var p = z(a) ? a : ie(a);
        return this.isValid() && p.isValid() ? (u = Ye(u) || "millisecond", u === "millisecond" ? this.valueOf() < p.valueOf() : this.clone().endOf(u).valueOf() < p.valueOf()) : !1;
      }
      function Am(a, u, p, m) {
        var k = z(a) ? a : ie(a), M = z(u) ? u : ie(u);
        return this.isValid() && k.isValid() && M.isValid() ? (m = m || "()", (m[0] === "(" ? this.isAfter(k, p) : !this.isBefore(k, p)) && (m[1] === ")" ? this.isBefore(M, p) : !this.isAfter(M, p))) : !1;
      }
      function Dm(a, u) {
        var p = z(a) ? a : ie(a), m;
        return this.isValid() && p.isValid() ? (u = Ye(u) || "millisecond", u === "millisecond" ? this.valueOf() === p.valueOf() : (m = p.valueOf(), this.clone().startOf(u).valueOf() <= m && m <= this.clone().endOf(u).valueOf())) : !1;
      }
      function Nm(a, u) {
        return this.isSame(a, u) || this.isAfter(a, u);
      }
      function Rm(a, u) {
        return this.isSame(a, u) || this.isBefore(a, u);
      }
      function Im(a, u, p) {
        var m, k, M;
        if (!this.isValid())
          return NaN;
        if (m = Io(a, this), !m.isValid())
          return NaN;
        switch (k = (m.utcOffset() - this.utcOffset()) * 6e4, u = Ye(u), u) {
          case "year":
            M = Mi(this, m) / 12;
            break;
          case "month":
            M = Mi(this, m);
            break;
          case "quarter":
            M = Mi(this, m) / 3;
            break;
          case "second":
            M = (this - m) / 1e3;
            break;
          case "minute":
            M = (this - m) / 6e4;
            break;
          case "hour":
            M = (this - m) / 36e5;
            break;
          case "day":
            M = (this - m - k) / 864e5;
            break;
          case "week":
            M = (this - m - k) / 6048e5;
            break;
          default:
            M = this - m;
        }
        return p ? M : Ue(M);
      }
      function Mi(a, u) {
        if (a.date() < u.date())
          return -Mi(u, a);
        var p = (u.year() - a.year()) * 12 + (u.month() - a.month()), m = a.clone().add(p, "months"), k, M;
        return u - m < 0 ? (k = a.clone().add(p - 1, "months"), M = (u - m) / (m - k)) : (k = a.clone().add(p + 1, "months"), M = (u - m) / (k - m)), -(p + M) || 0;
      }
      r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
      function _m() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
      }
      function Pm(a) {
        if (!this.isValid())
          return null;
        var u = a !== !0, p = u ? this.clone().utc() : this;
        return p.year() < 0 || p.year() > 9999 ? Wn(
          p,
          u ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
        ) : ge(Date.prototype.toISOString) ? u ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", Wn(p, "Z")) : Wn(
          p,
          u ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
        );
      }
      function Lm() {
        if (!this.isValid())
          return "moment.invalid(/* " + this._i + " */)";
        var a = "moment", u = "", p, m, k, M;
        return this.isLocal() || (a = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", u = "Z"), p = "[" + a + '("]', m = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", k = "-MM-DD[T]HH:mm:ss.SSS", M = u + '[")]', this.format(p + m + k + M);
      }
      function Fm(a) {
        a || (a = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat);
        var u = Wn(this, a);
        return this.localeData().postformat(u);
      }
      function Bm(a, u) {
        return this.isValid() && (z(a) && a.isValid() || ie(a).isValid()) ? ht({ to: this, from: a }).locale(this.locale()).humanize(!u) : this.localeData().invalidDate();
      }
      function zm(a) {
        return this.from(ie(), a);
      }
      function Hm(a, u) {
        return this.isValid() && (z(a) && a.isValid() || ie(a).isValid()) ? ht({ from: this, to: a }).locale(this.locale()).humanize(!u) : this.localeData().invalidDate();
      }
      function $m(a) {
        return this.to(ie(), a);
      }
      function hc(a) {
        var u;
        return a === void 0 ? this._locale._abbr : (u = At(a), u != null && (this._locale = u), this);
      }
      var pc = Q(
        "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
        function(a) {
          return a === void 0 ? this.localeData() : this.locale(a);
        }
      );
      function mc() {
        return this._locale;
      }
      var Ci = 1e3, Gn = 60 * Ci, Ti = 60 * Gn, gc = (365 * 400 + 97) * 24 * Ti;
      function Kn(a, u) {
        return (a % u + u) % u;
      }
      function yc(a, u, p) {
        return a < 100 && a >= 0 ? new Date(a + 400, u, p) - gc : new Date(a, u, p).valueOf();
      }
      function bc(a, u, p) {
        return a < 100 && a >= 0 ? Date.UTC(a + 400, u, p) - gc : Date.UTC(a, u, p);
      }
      function Wm(a) {
        var u, p;
        if (a = Ye(a), a === void 0 || a === "millisecond" || !this.isValid())
          return this;
        switch (p = this._isUTC ? bc : yc, a) {
          case "year":
            u = p(this.year(), 0, 1);
            break;
          case "quarter":
            u = p(
              this.year(),
              this.month() - this.month() % 3,
              1
            );
            break;
          case "month":
            u = p(this.year(), this.month(), 1);
            break;
          case "week":
            u = p(
              this.year(),
              this.month(),
              this.date() - this.weekday()
            );
            break;
          case "isoWeek":
            u = p(
              this.year(),
              this.month(),
              this.date() - (this.isoWeekday() - 1)
            );
            break;
          case "day":
          case "date":
            u = p(this.year(), this.month(), this.date());
            break;
          case "hour":
            u = this._d.valueOf(), u -= Kn(
              u + (this._isUTC ? 0 : this.utcOffset() * Gn),
              Ti
            );
            break;
          case "minute":
            u = this._d.valueOf(), u -= Kn(u, Gn);
            break;
          case "second":
            u = this._d.valueOf(), u -= Kn(u, Ci);
            break;
        }
        return this._d.setTime(u), r.updateOffset(this, !0), this;
      }
      function Vm(a) {
        var u, p;
        if (a = Ye(a), a === void 0 || a === "millisecond" || !this.isValid())
          return this;
        switch (p = this._isUTC ? bc : yc, a) {
          case "year":
            u = p(this.year() + 1, 0, 1) - 1;
            break;
          case "quarter":
            u = p(
              this.year(),
              this.month() - this.month() % 3 + 3,
              1
            ) - 1;
            break;
          case "month":
            u = p(this.year(), this.month() + 1, 1) - 1;
            break;
          case "week":
            u = p(
              this.year(),
              this.month(),
              this.date() - this.weekday() + 7
            ) - 1;
            break;
          case "isoWeek":
            u = p(
              this.year(),
              this.month(),
              this.date() - (this.isoWeekday() - 1) + 7
            ) - 1;
            break;
          case "day":
          case "date":
            u = p(this.year(), this.month(), this.date() + 1) - 1;
            break;
          case "hour":
            u = this._d.valueOf(), u += Ti - Kn(
              u + (this._isUTC ? 0 : this.utcOffset() * Gn),
              Ti
            ) - 1;
            break;
          case "minute":
            u = this._d.valueOf(), u += Gn - Kn(u, Gn) - 1;
            break;
          case "second":
            u = this._d.valueOf(), u += Ci - Kn(u, Ci) - 1;
            break;
        }
        return this._d.setTime(u), r.updateOffset(this, !0), this;
      }
      function Ym() {
        return this._d.valueOf() - (this._offset || 0) * 6e4;
      }
      function jm() {
        return Math.floor(this.valueOf() / 1e3);
      }
      function Um() {
        return new Date(this.valueOf());
      }
      function qm() {
        var a = this;
        return [
          a.year(),
          a.month(),
          a.date(),
          a.hour(),
          a.minute(),
          a.second(),
          a.millisecond()
        ];
      }
      function Gm() {
        var a = this;
        return {
          years: a.year(),
          months: a.month(),
          date: a.date(),
          hours: a.hours(),
          minutes: a.minutes(),
          seconds: a.seconds(),
          milliseconds: a.milliseconds()
        };
      }
      function Km() {
        return this.isValid() ? this.toISOString() : null;
      }
      function Jm() {
        return T(this);
      }
      function Qm() {
        return y({}, x(this));
      }
      function Zm() {
        return x(this).overflow;
      }
      function Xm() {
        return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict
        };
      }
      H("N", 0, 0, "eraAbbr"), H("NN", 0, 0, "eraAbbr"), H("NNN", 0, 0, "eraAbbr"), H("NNNN", 0, 0, "eraName"), H("NNNNN", 0, 0, "eraNarrow"), H("y", ["y", 1], "yo", "eraYear"), H("y", ["yy", 2], 0, "eraYear"), H("y", ["yyy", 3], 0, "eraYear"), H("y", ["yyyy", 4], 0, "eraYear"), R("N", Po), R("NN", Po), R("NNN", Po), R("NNNN", ug), R("NNNNN", dg), te(
        ["N", "NN", "NNN", "NNNN", "NNNNN"],
        function(a, u, p, m) {
          var k = p._locale.erasParse(a, m, p._strict);
          k ? x(p).era = k : x(p).invalidEra = a;
        }
      ), R("y", Ct), R("yy", Ct), R("yyy", Ct), R("yyyy", Ct), R("yo", fg), te(["y", "yy", "yyy", "yyyy"], _e), te(["yo"], function(a, u, p, m) {
        var k;
        p._locale._eraYearOrdinalRegex && (k = a.match(p._locale._eraYearOrdinalRegex)), p._locale.eraYearOrdinalParse ? u[_e] = p._locale.eraYearOrdinalParse(a, k) : u[_e] = parseInt(a, 10);
      });
      function eg(a, u) {
        var p, m, k, M = this._eras || At("en")._eras;
        for (p = 0, m = M.length; p < m; ++p) {
          switch (typeof M[p].since) {
            case "string":
              k = r(M[p].since).startOf("day"), M[p].since = k.valueOf();
              break;
          }
          switch (typeof M[p].until) {
            case "undefined":
              M[p].until = 1 / 0;
              break;
            case "string":
              k = r(M[p].until).startOf("day").valueOf(), M[p].until = k.valueOf();
              break;
          }
        }
        return M;
      }
      function tg(a, u, p) {
        var m, k, M = this.eras(), C, F, W;
        for (a = a.toUpperCase(), m = 0, k = M.length; m < k; ++m)
          if (C = M[m].name.toUpperCase(), F = M[m].abbr.toUpperCase(), W = M[m].narrow.toUpperCase(), p)
            switch (u) {
              case "N":
              case "NN":
              case "NNN":
                if (F === a)
                  return M[m];
                break;
              case "NNNN":
                if (C === a)
                  return M[m];
                break;
              case "NNNNN":
                if (W === a)
                  return M[m];
                break;
            }
          else if ([C, F, W].indexOf(a) >= 0)
            return M[m];
      }
      function ng(a, u) {
        var p = a.since <= a.until ? 1 : -1;
        return u === void 0 ? r(a.since).year() : r(a.since).year() + (u - a.offset) * p;
      }
      function rg() {
        var a, u, p, m = this.localeData().eras();
        for (a = 0, u = m.length; a < u; ++a)
          if (p = this.clone().startOf("day").valueOf(), m[a].since <= p && p <= m[a].until || m[a].until <= p && p <= m[a].since)
            return m[a].name;
        return "";
      }
      function ig() {
        var a, u, p, m = this.localeData().eras();
        for (a = 0, u = m.length; a < u; ++a)
          if (p = this.clone().startOf("day").valueOf(), m[a].since <= p && p <= m[a].until || m[a].until <= p && p <= m[a].since)
            return m[a].narrow;
        return "";
      }
      function sg() {
        var a, u, p, m = this.localeData().eras();
        for (a = 0, u = m.length; a < u; ++a)
          if (p = this.clone().startOf("day").valueOf(), m[a].since <= p && p <= m[a].until || m[a].until <= p && p <= m[a].since)
            return m[a].abbr;
        return "";
      }
      function og() {
        var a, u, p, m, k = this.localeData().eras();
        for (a = 0, u = k.length; a < u; ++a)
          if (p = k[a].since <= k[a].until ? 1 : -1, m = this.clone().startOf("day").valueOf(), k[a].since <= m && m <= k[a].until || k[a].until <= m && m <= k[a].since)
            return (this.year() - r(k[a].since).year()) * p + k[a].offset;
        return this.year();
      }
      function lg(a) {
        return l(this, "_erasNameRegex") || Lo.call(this), a ? this._erasNameRegex : this._erasRegex;
      }
      function ag(a) {
        return l(this, "_erasAbbrRegex") || Lo.call(this), a ? this._erasAbbrRegex : this._erasRegex;
      }
      function cg(a) {
        return l(this, "_erasNarrowRegex") || Lo.call(this), a ? this._erasNarrowRegex : this._erasRegex;
      }
      function Po(a, u) {
        return u.erasAbbrRegex(a);
      }
      function ug(a, u) {
        return u.erasNameRegex(a);
      }
      function dg(a, u) {
        return u.erasNarrowRegex(a);
      }
      function fg(a, u) {
        return u._eraYearOrdinalRegex || Ct;
      }
      function Lo() {
        var a = [], u = [], p = [], m = [], k, M, C, F, W, J = this.eras();
        for (k = 0, M = J.length; k < M; ++k)
          C = nt(J[k].name), F = nt(J[k].abbr), W = nt(J[k].narrow), u.push(C), a.push(F), p.push(W), m.push(C), m.push(F), m.push(W);
        this._erasRegex = new RegExp("^(" + m.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
          "^(" + p.join("|") + ")",
          "i"
        );
      }
      H(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100;
      }), H(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100;
      });
      function Oi(a, u) {
        H(0, [a, a.length], 0, u);
      }
      Oi("gggg", "weekYear"), Oi("ggggg", "weekYear"), Oi("GGGG", "isoWeekYear"), Oi("GGGGG", "isoWeekYear"), R("G", Wt), R("g", Wt), R("GG", ne, Be), R("gg", ne, Be), R("GGGG", yr, gr), R("gggg", yr, gr), R("GGGGG", jn, Vn), R("ggggg", jn, Vn), br(
        ["gggg", "ggggg", "GGGG", "GGGGG"],
        function(a, u, p, m) {
          u[m.substr(0, 2)] = U(a);
        }
      ), br(["gg", "GG"], function(a, u, p, m) {
        u[m] = r.parseTwoDigitYear(a);
      });
      function hg(a) {
        return kc.call(
          this,
          a,
          this.week(),
          this.weekday() + this.localeData()._week.dow,
          this.localeData()._week.dow,
          this.localeData()._week.doy
        );
      }
      function pg(a) {
        return kc.call(
          this,
          a,
          this.isoWeek(),
          this.isoWeekday(),
          1,
          4
        );
      }
      function mg() {
        return Et(this.year(), 1, 4);
      }
      function gg() {
        return Et(this.isoWeekYear(), 1, 4);
      }
      function yg() {
        var a = this.localeData()._week;
        return Et(this.year(), a.dow, a.doy);
      }
      function bg() {
        var a = this.localeData()._week;
        return Et(this.weekYear(), a.dow, a.doy);
      }
      function kc(a, u, p, m, k) {
        var M;
        return a == null ? wr(this, m, k).year : (M = Et(a, m, k), u > M && (u = M), kg.call(this, a, u, p, m, k));
      }
      function kg(a, u, p, m, k) {
        var M = Ja(a, u, p, m, k), C = xr(M.year, 0, M.dayOfYear);
        return this.year(C.getUTCFullYear()), this.month(C.getUTCMonth()), this.date(C.getUTCDate()), this;
      }
      H("Q", 0, "Qo", "quarter"), R("Q", fi), te("Q", function(a, u) {
        u[Ot] = (U(a) - 1) * 3;
      });
      function Sg(a) {
        return a == null ? Math.ceil((this.month() + 1) / 3) : this.month((a - 1) * 3 + this.month() % 3);
      }
      H("D", ["DD", 2], "Do", "date"), R("D", ne, Tt), R("DD", ne, Be), R("Do", function(a, u) {
        return a ? u._dayOfMonthOrdinalParse || u._ordinalParse : u._dayOfMonthOrdinalParseLenient;
      }), te(["D", "DD"], gt), te("Do", function(a, u) {
        u[gt] = U(a.match(ne)[0]);
      });
      var Sc = Un("Date", !0);
      H("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), R("DDD", Yn), R("DDDD", hi), te(["DDD", "DDDD"], function(a, u, p) {
        p._dayOfYear = U(a);
      });
      function xg(a) {
        var u = Math.round(
          (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
        ) + 1;
        return a == null ? u : this.add(a - u, "d");
      }
      H("m", ["mm", 2], 0, "minute"), R("m", ne, Y), R("mm", ne, Be), te(["m", "mm"], ft);
      var wg = Un("Minutes", !1);
      H("s", ["ss", 2], 0, "second"), R("s", ne, Y), R("ss", ne, Be), te(["s", "ss"], vt);
      var Mg = Un("Seconds", !1);
      H("S", 0, 0, function() {
        return ~~(this.millisecond() / 100);
      }), H(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10);
      }), H(0, ["SSS", 3], 0, "millisecond"), H(0, ["SSSS", 4], 0, function() {
        return this.millisecond() * 10;
      }), H(0, ["SSSSS", 5], 0, function() {
        return this.millisecond() * 100;
      }), H(0, ["SSSSSS", 6], 0, function() {
        return this.millisecond() * 1e3;
      }), H(0, ["SSSSSSS", 7], 0, function() {
        return this.millisecond() * 1e4;
      }), H(0, ["SSSSSSSS", 8], 0, function() {
        return this.millisecond() * 1e5;
      }), H(0, ["SSSSSSSSS", 9], 0, function() {
        return this.millisecond() * 1e6;
      }), R("S", Yn, fi), R("SS", Yn, Be), R("SSS", Yn, hi);
      var Ut, xc;
      for (Ut = "SSSS"; Ut.length <= 9; Ut += "S")
        R(Ut, Ct);
      function Cg(a, u) {
        u[kn] = U(("0." + a) * 1e3);
      }
      for (Ut = "S"; Ut.length <= 9; Ut += "S")
        te(Ut, Cg);
      xc = Un("Milliseconds", !1), H("z", 0, 0, "zoneAbbr"), H("zz", 0, 0, "zoneName");
      function Tg() {
        return this._isUTC ? "UTC" : "";
      }
      function Og() {
        return this._isUTC ? "Coordinated Universal Time" : "";
      }
      var N = E.prototype;
      N.add = bm, N.calendar = Tm, N.clone = Om, N.diff = Im, N.endOf = Vm, N.format = Fm, N.from = Bm, N.fromNow = zm, N.to = Hm, N.toNow = $m, N.get = Lh, N.invalidAt = Zm, N.isAfter = vm, N.isBefore = Em, N.isBetween = Am, N.isSame = Dm, N.isSameOrAfter = Nm, N.isSameOrBefore = Rm, N.isValid = Jm, N.lang = pc, N.locale = hc, N.localeData = mc, N.max = Jp, N.min = Kp, N.parsingFlags = Qm, N.set = Fh, N.startOf = Wm, N.subtract = km, N.toArray = qm, N.toObject = Gm, N.toDate = Um, N.toISOString = Pm, N.inspect = Lm, typeof Symbol < "u" && Symbol.for != null && (N[Symbol.for("nodejs.util.inspect.custom")] = function() {
        return "Moment<" + this.format() + ">";
      }), N.toJSON = Km, N.toString = _m, N.unix = jm, N.valueOf = Ym, N.creationData = Xm, N.eraName = rg, N.eraNarrow = ig, N.eraAbbr = sg, N.eraYear = og, N.year = Va, N.isLeapYear = Ph, N.weekYear = hg, N.isoWeekYear = pg, N.quarter = N.quarters = Sg, N.month = Ga, N.daysInMonth = Uh, N.week = N.weeks = ep, N.isoWeek = N.isoWeeks = tp, N.weeksInYear = yg, N.weeksInWeekYear = bg, N.isoWeeksInYear = mg, N.isoWeeksInISOWeekYear = gg, N.date = Sc, N.day = N.days = pp, N.weekday = mp, N.isoWeekday = gp, N.dayOfYear = xg, N.hour = N.hours = Mp, N.minute = N.minutes = wg, N.second = N.seconds = Mg, N.millisecond = N.milliseconds = xc, N.utcOffset = sm, N.utc = lm, N.local = am, N.parseZone = cm, N.hasAlignedHourOffset = um, N.isDST = dm, N.isLocal = hm, N.isUtcOffset = pm, N.isUtc = ac, N.isUTC = ac, N.zoneAbbr = Tg, N.zoneName = Og, N.dates = Q(
        "dates accessor is deprecated. Use date instead.",
        Sc
      ), N.months = Q(
        "months accessor is deprecated. Use month instead",
        Ga
      ), N.years = Q(
        "years accessor is deprecated. Use year instead",
        Va
      ), N.zone = Q(
        "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
        om
      ), N.isDSTShifted = Q(
        "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
        fm
      );
      function vg(a) {
        return ie(a * 1e3);
      }
      function Eg() {
        return ie.apply(null, arguments).parseZone();
      }
      function wc(a) {
        return a;
      }
      var X = Re.prototype;
      X.calendar = oo, X.longDateFormat = ao, X.invalidDate = uo, X.ordinal = po, X.preparse = wc, X.postformat = wc, X.relativeTime = go, X.pastFuture = yo, X.set = dt, X.eras = eg, X.erasParse = tg, X.erasConvertYear = ng, X.erasAbbrRegex = ag, X.erasNameRegex = lg, X.erasNarrowRegex = cg, X.months = Wh, X.monthsShort = Vh, X.monthsParse = jh, X.monthsRegex = Gh, X.monthsShortRegex = qh, X.week = Jh, X.firstDayOfYear = Xh, X.firstDayOfWeek = Zh, X.weekdays = cp, X.weekdaysMin = dp, X.weekdaysShort = up, X.weekdaysParse = hp, X.weekdaysRegex = yp, X.weekdaysShortRegex = bp, X.weekdaysMinRegex = kp, X.isPM = xp, X.meridiem = Cp;
      function vi(a, u, p, m) {
        var k = At(), M = b().set(m, u);
        return k[p](M, a);
      }
      function Mc(a, u, p) {
        if (f(a) && (u = a, a = void 0), a = a || "", u != null)
          return vi(a, u, p, "month");
        var m, k = [];
        for (m = 0; m < 12; m++)
          k[m] = vi(a, m, p, "month");
        return k;
      }
      function Fo(a, u, p, m) {
        typeof a == "boolean" ? (f(u) && (p = u, u = void 0), u = u || "") : (u = a, p = u, a = !1, f(u) && (p = u, u = void 0), u = u || "");
        var k = At(), M = a ? k._week.dow : 0, C, F = [];
        if (p != null)
          return vi(u, (p + M) % 7, m, "day");
        for (C = 0; C < 7; C++)
          F[C] = vi(u, (C + M) % 7, m, "day");
        return F;
      }
      function Ag(a, u) {
        return Mc(a, u, "months");
      }
      function Dg(a, u) {
        return Mc(a, u, "monthsShort");
      }
      function Ng(a, u, p) {
        return Fo(a, u, p, "weekdays");
      }
      function Rg(a, u, p) {
        return Fo(a, u, p, "weekdaysShort");
      }
      function Ig(a, u, p) {
        return Fo(a, u, p, "weekdaysMin");
      }
      jt("en", {
        eras: [
          {
            since: "0001-01-01",
            until: 1 / 0,
            offset: 1,
            name: "Anno Domini",
            narrow: "AD",
            abbr: "AD"
          },
          {
            since: "0000-12-31",
            until: -1 / 0,
            offset: 1,
            name: "Before Christ",
            narrow: "BC",
            abbr: "BC"
          }
        ],
        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(a) {
          var u = a % 10, p = U(a % 100 / 10) === 1 ? "th" : u === 1 ? "st" : u === 2 ? "nd" : u === 3 ? "rd" : "th";
          return a + p;
        }
      }), r.lang = Q(
        "moment.lang is deprecated. Use moment.locale instead.",
        jt
      ), r.langData = Q(
        "moment.langData is deprecated. Use moment.localeData instead.",
        At
      );
      var Dt = Math.abs;
      function _g() {
        var a = this._data;
        return this._milliseconds = Dt(this._milliseconds), this._days = Dt(this._days), this._months = Dt(this._months), a.milliseconds = Dt(a.milliseconds), a.seconds = Dt(a.seconds), a.minutes = Dt(a.minutes), a.hours = Dt(a.hours), a.months = Dt(a.months), a.years = Dt(a.years), this;
      }
      function Cc(a, u, p, m) {
        var k = ht(u, p);
        return a._milliseconds += m * k._milliseconds, a._days += m * k._days, a._months += m * k._months, a._bubble();
      }
      function Pg(a, u) {
        return Cc(this, a, u, 1);
      }
      function Lg(a, u) {
        return Cc(this, a, u, -1);
      }
      function Tc(a) {
        return a < 0 ? Math.floor(a) : Math.ceil(a);
      }
      function Fg() {
        var a = this._milliseconds, u = this._days, p = this._months, m = this._data, k, M, C, F, W;
        return a >= 0 && u >= 0 && p >= 0 || a <= 0 && u <= 0 && p <= 0 || (a += Tc(Bo(p) + u) * 864e5, u = 0, p = 0), m.milliseconds = a % 1e3, k = Ue(a / 1e3), m.seconds = k % 60, M = Ue(k / 60), m.minutes = M % 60, C = Ue(M / 60), m.hours = C % 24, u += Ue(C / 24), W = Ue(Oc(u)), p += W, u -= Tc(Bo(W)), F = Ue(p / 12), p %= 12, m.days = u, m.months = p, m.years = F, this;
      }
      function Oc(a) {
        return a * 4800 / 146097;
      }
      function Bo(a) {
        return a * 146097 / 4800;
      }
      function Bg(a) {
        if (!this.isValid())
          return NaN;
        var u, p, m = this._milliseconds;
        if (a = Ye(a), a === "month" || a === "quarter" || a === "year")
          switch (u = this._days + m / 864e5, p = this._months + Oc(u), a) {
            case "month":
              return p;
            case "quarter":
              return p / 3;
            case "year":
              return p / 12;
          }
        else
          switch (u = this._days + Math.round(Bo(this._months)), a) {
            case "week":
              return u / 7 + m / 6048e5;
            case "day":
              return u + m / 864e5;
            case "hour":
              return u * 24 + m / 36e5;
            case "minute":
              return u * 1440 + m / 6e4;
            case "second":
              return u * 86400 + m / 1e3;
            case "millisecond":
              return Math.floor(u * 864e5) + m;
            default:
              throw new Error("Unknown unit " + a);
          }
      }
      function Nt(a) {
        return function() {
          return this.as(a);
        };
      }
      var vc = Nt("ms"), zg = Nt("s"), Hg = Nt("m"), $g = Nt("h"), Wg = Nt("d"), Vg = Nt("w"), Yg = Nt("M"), jg = Nt("Q"), Ug = Nt("y"), qg = vc;
      function Gg() {
        return ht(this);
      }
      function Kg(a) {
        return a = Ye(a), this.isValid() ? this[a + "s"]() : NaN;
      }
      function xn(a) {
        return function() {
          return this.isValid() ? this._data[a] : NaN;
        };
      }
      var Jg = xn("milliseconds"), Qg = xn("seconds"), Zg = xn("minutes"), Xg = xn("hours"), ey = xn("days"), ty = xn("months"), ny = xn("years");
      function ry() {
        return Ue(this.days() / 7);
      }
      var Rt = Math.round, Jn = {
        ss: 44,
        // a few seconds to seconds
        s: 45,
        // seconds to minute
        m: 45,
        // minutes to hour
        h: 22,
        // hours to day
        d: 26,
        // days to month/week
        w: null,
        // weeks to month
        M: 11
        // months to year
      };
      function iy(a, u, p, m, k) {
        return k.relativeTime(u || 1, !!p, a, m);
      }
      function sy(a, u, p, m) {
        var k = ht(a).abs(), M = Rt(k.as("s")), C = Rt(k.as("m")), F = Rt(k.as("h")), W = Rt(k.as("d")), J = Rt(k.as("M")), ze = Rt(k.as("w")), It = Rt(k.as("y")), qt = M <= p.ss && ["s", M] || M < p.s && ["ss", M] || C <= 1 && ["m"] || C < p.m && ["mm", C] || F <= 1 && ["h"] || F < p.h && ["hh", F] || W <= 1 && ["d"] || W < p.d && ["dd", W];
        return p.w != null && (qt = qt || ze <= 1 && ["w"] || ze < p.w && ["ww", ze]), qt = qt || J <= 1 && ["M"] || J < p.M && ["MM", J] || It <= 1 && ["y"] || ["yy", It], qt[2] = u, qt[3] = +a > 0, qt[4] = m, iy.apply(null, qt);
      }
      function oy(a) {
        return a === void 0 ? Rt : typeof a == "function" ? (Rt = a, !0) : !1;
      }
      function ly(a, u) {
        return Jn[a] === void 0 ? !1 : u === void 0 ? Jn[a] : (Jn[a] = u, a === "s" && (Jn.ss = u - 1), !0);
      }
      function ay(a, u) {
        if (!this.isValid())
          return this.localeData().invalidDate();
        var p = !1, m = Jn, k, M;
        return typeof a == "object" && (u = a, a = !1), typeof a == "boolean" && (p = a), typeof u == "object" && (m = Object.assign({}, Jn, u), u.s != null && u.ss == null && (m.ss = u.s - 1)), k = this.localeData(), M = sy(this, !p, m, k), p && (M = k.pastFuture(+this, M)), k.postformat(M);
      }
      var zo = Math.abs;
      function Qn(a) {
        return (a > 0) - (a < 0) || +a;
      }
      function Ei() {
        if (!this.isValid())
          return this.localeData().invalidDate();
        var a = zo(this._milliseconds) / 1e3, u = zo(this._days), p = zo(this._months), m, k, M, C, F = this.asSeconds(), W, J, ze, It;
        return F ? (m = Ue(a / 60), k = Ue(m / 60), a %= 60, m %= 60, M = Ue(p / 12), p %= 12, C = a ? a.toFixed(3).replace(/\.?0+$/, "") : "", W = F < 0 ? "-" : "", J = Qn(this._months) !== Qn(F) ? "-" : "", ze = Qn(this._days) !== Qn(F) ? "-" : "", It = Qn(this._milliseconds) !== Qn(F) ? "-" : "", W + "P" + (M ? J + M + "Y" : "") + (p ? J + p + "M" : "") + (u ? ze + u + "D" : "") + (k || m || a ? "T" : "") + (k ? It + k + "H" : "") + (m ? It + m + "M" : "") + (a ? It + C + "S" : "")) : "P0D";
      }
      var Z = xi.prototype;
      Z.isValid = tm, Z.abs = _g, Z.add = Pg, Z.subtract = Lg, Z.as = Bg, Z.asMilliseconds = vc, Z.asSeconds = zg, Z.asMinutes = Hg, Z.asHours = $g, Z.asDays = Wg, Z.asWeeks = Vg, Z.asMonths = Yg, Z.asQuarters = jg, Z.asYears = Ug, Z.valueOf = qg, Z._bubble = Fg, Z.clone = Gg, Z.get = Kg, Z.milliseconds = Jg, Z.seconds = Qg, Z.minutes = Zg, Z.hours = Xg, Z.days = ey, Z.weeks = ry, Z.months = ty, Z.years = ny, Z.humanize = ay, Z.toISOString = Ei, Z.toString = Ei, Z.toJSON = Ei, Z.locale = hc, Z.localeData = mc, Z.toIsoString = Q(
        "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
        Ei
      ), Z.lang = pc, H("X", 0, 0, "unix"), H("x", 0, 0, "valueOf"), R("x", Wt), R("X", gi), te("X", function(a, u, p) {
        p._d = new Date(parseFloat(a) * 1e3);
      }), te("x", function(a, u, p) {
        p._d = new Date(U(a));
      });
      //! moment.js
      return r.version = "2.30.1", i(ie), r.fn = N, r.min = Qp, r.max = Zp, r.now = Xp, r.utc = b, r.unix = vg, r.months = Ag, r.isDate = h, r.locale = jt, r.invalid = v, r.duration = ht, r.isMoment = z, r.weekdays = Ng, r.parseZone = Eg, r.localeData = At, r.isDuration = wi, r.monthsShort = Dg, r.weekdaysMin = Ig, r.defineLocale = Oo, r.updateLocale = Ep, r.locales = Ap, r.weekdaysShort = Rg, r.normalizeUnits = Ye, r.relativeTimeRounding = oy, r.relativeTimeThreshold = ly, r.calendarFormat = Cm, r.prototype = N, r.HTML5_FMT = {
        DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
        // <input type="datetime-local" />
        DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
        // <input type="datetime-local" step="1" />
        DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
        // <input type="datetime-local" step="0.001" />
        DATE: "YYYY-MM-DD",
        // <input type="date" />
        TIME: "HH:mm",
        // <input type="time" />
        TIME_SECONDS: "HH:mm:ss",
        // <input type="time" step="1" />
        TIME_MS: "HH:mm:ss.SSS",
        // <input type="time" step="0.001" />
        WEEK: "GGGG-[W]WW",
        // <input type="week" />
        MONTH: "YYYY-MM"
        // <input type="month" />
      }, r;
    });
  }(Wo)), Wo.exports;
}
(function(n, e) {
  (function(t, r) {
    r(typeof wd == "function" ? w0() : t.moment);
  })(xd, function(t) {
    //! moment.js locale configuration
    var r = t.defineLocale("he", {
      months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split(
        "_"
      ),
      monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
      weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
      weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
      weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
      longDateFormat: {
        LT: "HH:mm",
        LTS: "HH:mm:ss",
        L: "DD/MM/YYYY",
        LL: "D [ב]MMMM YYYY",
        LLL: "D [ב]MMMM YYYY HH:mm",
        LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
        l: "D/M/YYYY",
        ll: "D MMM YYYY",
        lll: "D MMM YYYY HH:mm",
        llll: "ddd, D MMM YYYY HH:mm"
      },
      calendar: {
        sameDay: "[היום ב־]LT",
        nextDay: "[מחר ב־]LT",
        nextWeek: "dddd [בשעה] LT",
        lastDay: "[אתמול ב־]LT",
        lastWeek: "[ביום] dddd [האחרון בשעה] LT",
        sameElse: "L"
      },
      relativeTime: {
        future: "בעוד %s",
        past: "לפני %s",
        s: "מספר שניות",
        ss: "%d שניות",
        m: "דקה",
        mm: "%d דקות",
        h: "שעה",
        hh: function(i) {
          return i === 2 ? "שעתיים" : i + " שעות";
        },
        d: "יום",
        dd: function(i) {
          return i === 2 ? "יומיים" : i + " ימים";
        },
        M: "חודש",
        MM: function(i) {
          return i === 2 ? "חודשיים" : i + " חודשים";
        },
        y: "שנה",
        yy: function(i) {
          return i === 2 ? "שנתיים" : i % 10 === 0 && i !== 10 ? i + " שנה" : i + " שנים";
        }
      },
      meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
      isPM: function(i) {
        return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(i);
      },
      meridiem: function(i, s, o) {
        return i < 5 ? "לפנות בוקר" : i < 10 ? "בבוקר" : i < 12 ? o ? 'לפנה"צ' : "לפני הצהריים" : i < 18 ? o ? 'אחה"צ' : "אחרי הצהריים" : "בערב";
      }
    });
    return r;
  });
})();
const M0 = ke(
  ({
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    mask: n,
    // legacy — no-op in v7+
    sx: e,
    className: t,
    error: r,
    helperText: i,
    slotProps: s,
    onChange: o,
    ...l
  }, c) => {
    const d = ["ips-time-picker", t].filter(Boolean).join(" "), f = {
      ...s,
      textField: {
        ...s == null ? void 0 : s.textField,
        ...r !== void 0 ? { error: r } : {},
        ...i !== void 0 ? { helperText: i } : {}
      }
    };
    return /* @__PURE__ */ O(Ge, { ref: c, className: d, sx: e, children: /* @__PURE__ */ O(oa, { dateAdapter: wy, adapterLocale: "he", children: /* @__PURE__ */ O(
      xy,
      {
        ...l,
        onChange: o ? (g) => o(g) : void 0,
        enableAccessibleFieldDOMStructure: !1,
        slotProps: f,
        slots: {
          // IpsTextField is fully compatible with MUI TextFieldProps
          textField: si
        }
      }
    ) }) });
  }
);
M0.displayName = "IpsTimePicker";
const C0 = ke(
  ({
    format: n = "dd/MM/yyyy",
    rtl: e = !1,
    error: t,
    helperText: r,
    slotProps: i,
    sx: s,
    className: o,
    readOnly: l,
    onChange: c,
    ...d
  }, f) => {
    const h = ["ips-date-picker", o].filter(Boolean).join(" "), g = {
      ...i,
      textField: {
        ...i == null ? void 0 : i.textField,
        ...t !== void 0 ? { error: t } : {},
        ...r !== void 0 ? { helperText: r } : {},
        ...l ? { readOnly: !0 } : {}
      }
    };
    return /* @__PURE__ */ O(
      Ge,
      {
        ref: f,
        className: h,
        dir: e ? "rtl" : void 0,
        sx: s,
        children: /* @__PURE__ */ O(oa, { dateAdapter: gd, children: /* @__PURE__ */ O(
          My,
          {
            format: n,
            ...d,
            readOnly: l,
            onChange: c ? (b) => c(b) : void 0,
            enableAccessibleFieldDOMStructure: !1,
            slotProps: g,
            slots: {
              textField: si
            }
          }
        ) })
      }
    );
  }
);
C0.displayName = "IpsDatePicker";
const T0 = ke(
  ({
    format: n = "dd/MM/yyyy HH:mm",
    rtl: e = !1,
    error: t,
    helperText: r,
    slotProps: i,
    sx: s,
    className: o,
    readOnly: l,
    onChange: c,
    ...d
  }, f) => {
    const h = ["ips-date-time-picker", o].filter(Boolean).join(" "), g = {
      ...i,
      textField: {
        ...i == null ? void 0 : i.textField,
        ...t !== void 0 ? { error: t } : {},
        ...r !== void 0 ? { helperText: r } : {},
        ...l ? { readOnly: !0 } : {}
      }
    };
    return /* @__PURE__ */ O(
      Ge,
      {
        ref: f,
        className: h,
        dir: e ? "rtl" : void 0,
        sx: s,
        children: /* @__PURE__ */ O(oa, { dateAdapter: gd, children: /* @__PURE__ */ O(
          Cy,
          {
            format: n,
            ...d,
            readOnly: l,
            onChange: c ? (b) => c(b) : void 0,
            enableAccessibleFieldDOMStructure: !1,
            slotProps: g,
            slots: {
              textField: si
            }
          }
        ) })
      }
    );
  }
);
T0.displayName = "IpsDateTimePicker";
const O0 = ke(
  ({
    rows: n,
    columns: e,
    loading: t = !1,
    pageSize: r = 25,
    checkboxSelection: i = !1,
    disableColumnFilter: s = !1,
    onRowClick: o,
    sx: l,
    className: c,
    ...d
  }, f) => {
    const h = ["ips-table", c].filter(Boolean).join(" ");
    return /* @__PURE__ */ O(Ge, { ref: f, className: h, sx: l, children: /* @__PURE__ */ O(
      Ty,
      {
        rows: n,
        columns: e,
        loading: t,
        checkboxSelection: i,
        disableColumnFilter: s,
        onRowClick: o,
        initialState: {
          pagination: { paginationModel: { pageSize: r } },
          ...d.initialState
        },
        pageSizeOptions: [10, 25, 50, 100],
        ...d,
        sx: {
          // ── Header styling ──────────────────────────────────────────────
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "primary.main"
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            color: "white",
            fontWeight: 600
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "primary.main",
            color: "white"
          },
          // Keep sort/filter icons white on the coloured header
          "& .MuiDataGrid-columnHeader .MuiSvgIcon-root": {
            color: "white"
          },
          "& .MuiDataGrid-columnSeparator": {
            color: "rgba(255,255,255,0.3)"
          },
          // ── Alternating row colours ─────────────────────────────────────
          "& .MuiDataGrid-row:nth-of-type(even)": {
            backgroundColor: "grey.50"
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "primary.light",
            opacity: 0.85
          },
          // ── Border / radius ─────────────────────────────────────────────
          borderRadius: 1,
          // Allow consumer sx to override everything above
          ...l
        }
      }
    ) });
  }
);
O0.displayName = "IpsTable";
const v0 = he.createContext(Sd), jT = ({ children: n }) => he.createElement(v0.Provider, { value: Sd }, n);
var xl = { exports: {} };
/*!
 * CSSJanus. https://www.mediawiki.org/wiki/CSSJanus
 *
 * Copyright 2014 Trevor Parscal
 * Copyright 2010 Roan Kattouw
 * Copyright 2008 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(function(n, e) {
  var t;
  function r(s, o) {
    var l = [], c = 0;
    function d(h) {
      return l.push(h), o;
    }
    function f() {
      return l[c++];
    }
    return {
      /**
       * Replace matching strings with tokens.
       *
       * @param {string} str String to tokenize
       * @return {string} Tokenized string
       */
      tokenize: function(h) {
        return h.replace(s, d);
      },
      /**
       * Restores tokens to their original values.
       *
       * @param {string} str String previously run through tokenize()
       * @return {string} Original string
       */
      detokenize: function(h) {
        return h.replace(new RegExp("(" + o + ")", "g"), f);
      }
    };
  }
  function i() {
    var s = "`TMP`", o = "`TMPLTR`", l = "`TMPRTL`", c = "`NOFLIP_SINGLE`", d = "`NOFLIP_CLASS`", f = "`COMMENT`", h = "[^\\u0020-\\u007e]", g = "(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)", y = "(?:[0-9]*\\.[0-9]+|[0-9]+)", b = "(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)", S = "direction\\s*:\\s*", x = "[!#$%&*-~]", w = `['"]?\\s*`, T = "(^|[^a-zA-Z])", v = "[^\\}]*?", _ = "\\/\\*\\!?\\s*@noflip\\s*\\*\\/", I = "\\/\\*[^*]*\\*+([^\\/*][^*]*\\*+)*\\/", P = "(?:" + g + "|\\\\[^\\r\\n\\f0-9a-f])", E = "(?:[_a-z]|" + h + "|" + P + ")", z = "(?:[_a-z0-9-]|" + h + "|" + P + ")", j = "-?" + E + z + "*", Q = y + "(?:\\s*" + b + "|" + j + ")?", ee = "((?:-?" + Q + ")|(?:inherit|auto))", Ve = "(?:-?" + y + "(?:\\s*" + b + ")?)", ge = "(?:\\+|\\-|\\*|\\/)", dt = "(?:\\(|\\)|\\t| )", tt = "(?:" + dt + "|" + Ve + "|" + ge + "){3,}", Re = "(?:calc\\((?:" + tt + ")\\))", Se = "((?:-?" + Q + ")|(?:inherit|auto)|" + Re + ")", so = "((?:margin|padding|border-width)\\s*:\\s*)", oo = "((?:-color|border-style)\\s*:\\s*)", Oe = "(#?" + z + "+|(?:rgba?|hsla?)\\([ \\d.,%-]+\\))", $n = "(?:" + x + "|" + h + "|" + P + ")*?", gn = "(?![a-zA-Z])", yn = "(?!(" + z + `|\\r?\\n|\\s|#|\\:|\\.|\\,|\\+|>|~|\\(|\\)|\\[|\\]|=|\\*=|~=|\\^=|'[^']*'|"[^"]*"|` + f + ")*?{)", Mt = "(?!" + $n + w + "\\))", H = "(?=" + $n + w + "\\))", pr = "(\\s*(?:!important\\s*)?[;}])", bn = /`TMP`/g, Wn = /`TMPLTR`/g, ui = /`TMPRTL`/g, lo = new RegExp(I, "gi"), ao = new RegExp("(" + _ + yn + "[^;}]+;?)", "gi"), co = new RegExp("(" + _ + v + "})", "gi"), uo = new RegExp("(" + S + ")ltr", "gi"), fo = new RegExp("(" + S + ")rtl", "gi"), ho = new RegExp(T + "(left)" + gn + Mt + yn, "gi"), po = new RegExp(T + "(right)" + gn + Mt + yn, "gi"), mo = new RegExp(T + "(left)" + H, "gi"), go = new RegExp(T + "(right)" + H, "gi"), yo = /(:dir\( *)ltr( *\))/g, di = /(:dir\( *)rtl( *\))/g, Ye = new RegExp(T + "(ltr)" + H, "gi"), mr = new RegExp(T + "(rtl)" + H, "gi"), bo = new RegExp(T + "([ns]?)e-resize", "gi"), ko = new RegExp(T + "([ns]?)w-resize", "gi"), fi = new RegExp(so + Se + "(\\s+)" + Se + "(\\s+)" + Se + "(\\s+)" + Se + pr, "gi"), Be = new RegExp(oo + Oe + "(\\s+)" + Oe + "(\\s+)" + Oe + "(\\s+)" + Oe + pr, "gi"), hi = new RegExp("(background(?:-position)?\\s*:\\s*(?:[^:;}\\s]+\\s+)*?)(" + Q + ")", "gi"), gr = new RegExp("(background-position-x\\s*:\\s*)(-?" + y + "%)", "gi"), Vn = new RegExp("(border-radius\\s*:\\s*)" + ee + "(?:(?:\\s+" + ee + ")(?:\\s+" + ee + ")?(?:\\s+" + ee + ")?)?(?:(?:(?:\\s*\\/\\s*)" + ee + ")(?:\\s+" + ee + ")?(?:\\s+" + ee + ")?(?:\\s+" + ee + ")?)?" + pr, "gi"), ne = new RegExp("(box-shadow\\s*:\\s*(?:inset\\s*)?)" + ee, "gi"), pi = new RegExp("(text-shadow\\s*:\\s*)" + ee + "(\\s*)" + Oe, "gi"), mi = new RegExp("(text-shadow\\s*:\\s*)" + Oe + "(\\s*)" + ee, "gi"), Yn = new RegExp("(text-shadow\\s*:\\s*)" + ee, "gi"), yr = new RegExp("(transform\\s*:[^;}]*)(translateX\\s*\\(\\s*)" + ee + "(\\s*\\))", "gi"), jn = new RegExp("(transform\\s*:[^;}]*)(translate\\s*\\(\\s*)" + ee + "((?:\\s*,\\s*" + ee + "){0,2}\\s*\\))", "gi");
    function Ct(Y, ve, R) {
      var Ie, je;
      return R.slice(-1) === "%" && (Ie = R.indexOf("."), Ie !== -1 ? (je = R.length - Ie - 2, R = 100 - parseFloat(R), R = R.toFixed(je) + "%") : R = 100 - parseFloat(R) + "%"), ve + R;
    }
    function Wt(Y) {
      switch (Y.length) {
        case 4:
          Y = [Y[1], Y[0], Y[3], Y[2]];
          break;
        case 3:
          Y = [Y[1], Y[0], Y[1], Y[2]];
          break;
        case 2:
          Y = [Y[1], Y[0]];
          break;
        case 1:
          Y = [Y[0]];
          break;
      }
      return Y.join(" ");
    }
    function So(Y, ve) {
      var R, Ie = [].slice.call(arguments), je = Ie.slice(2, 6).filter(function(U) {
        return U;
      }), nt = Ie.slice(6, 10).filter(function(U) {
        return U;
      }), Ue = Ie[10] || "";
      return nt.length ? R = Wt(je) + " / " + Wt(nt) : R = Wt(je), ve + R + Ue;
    }
    function Vt(Y) {
      return parseFloat(Y) === 0 ? Y : Y[0] === "-" ? Y.slice(1) : "-" + Y;
    }
    function gi(Y, ve, R) {
      return ve + Vt(R);
    }
    function Yt(Y, ve, R, Ie, je) {
      return ve + R + Vt(Ie) + je;
    }
    function Tt(Y, ve, R, Ie, je) {
      return ve + R + Ie + Vt(je);
    }
    return {
      /**
       * Transform a left-to-right stylesheet to right-to-left.
       *
       * @param {string} css Stylesheet to transform
       * @param {Object} options Options
       * @param {boolean} [options.transformDirInUrl=false] Transform directions in URLs
       * (e.g. 'ltr', 'rtl')
       * @param {boolean} [options.transformEdgeInUrl=false] Transform edges in URLs
       * (e.g. 'left', 'right')
       * @return {string} Transformed stylesheet
       */
      transform: function(Y, ve) {
        var R = new r(ao, c), Ie = new r(co, d), je = new r(lo, f);
        return Y = je.tokenize(
          Ie.tokenize(
            R.tokenize(
              // We wrap tokens in ` , not ~ like the original implementation does.
              // This was done because ` is not a legal character in CSS and can only
              // occur in URLs, where we escape it to %60 before inserting our tokens.
              Y.replace("`", "%60")
            )
          )
        ), ve.transformDirInUrl && (Y = Y.replace(yo, "$1" + o + "$2").replace(di, "$1" + l + "$2").replace(Ye, "$1" + s).replace(mr, "$1ltr").replace(bn, "rtl").replace(Wn, "ltr").replace(ui, "rtl")), ve.transformEdgeInUrl && (Y = Y.replace(mo, "$1" + s).replace(go, "$1left").replace(bn, "right")), Y = Y.replace(uo, "$1" + s).replace(fo, "$1ltr").replace(bn, "rtl").replace(ho, "$1" + s).replace(po, "$1left").replace(bn, "right").replace(bo, "$1$2" + s).replace(ko, "$1$2e-resize").replace(bn, "w-resize").replace(Vn, So).replace(ne, gi).replace(pi, Tt).replace(mi, Tt).replace(Yn, gi).replace(yr, Yt).replace(jn, Yt).replace(fi, "$1$2$3$8$5$6$7$4$9").replace(Be, "$1$2$3$8$5$6$7$4$9").replace(hi, Ct).replace(gr, Ct), Y = R.detokenize(
          Ie.detokenize(
            je.detokenize(Y)
          )
        ), Y;
      }
    };
  }
  t = new i(), n.exports ? e.transform = function(s, o, l) {
    var c;
    return typeof o == "object" ? c = o : (c = {}, typeof o == "boolean" && (c.transformDirInUrl = o), typeof l == "boolean" && (c.transformEdgeInUrl = l)), t.transform(s, c);
  } : typeof window < "u" && (window.cssjanus = t);
})(xl, xl.exports);
var E0 = xl.exports;
const A0 = /* @__PURE__ */ x0(E0);
var wl = "comm", Zi = "rule", Md = "decl", D0 = "@media", N0 = "@import", R0 = "@supports", I0 = "@keyframes", _0 = Math.abs, la = String.fromCharCode;
function Cd(n) {
  return n.trim();
}
function $i(n, e, t) {
  return n.replace(e, t);
}
function P0(n, e) {
  return n.indexOf(e);
}
function Yr(n, e) {
  return n.charCodeAt(e) | 0;
}
function jr(n, e, t) {
  return n.slice(e, t);
}
function Jt(n) {
  return n.length;
}
function Td(n) {
  return n.length;
}
function Ai(n, e) {
  return e.push(n), n;
}
var Ws = 1, lr = 1, Od = 0, ct = 0, pe = 0, fr = "";
function aa(n, e, t, r, i, s, o) {
  return { value: n, root: e, parent: t, type: r, props: i, children: s, line: Ws, column: lr, length: o, return: "" };
}
function L0() {
  return pe;
}
function F0() {
  return pe = ct > 0 ? Yr(fr, --ct) : 0, lr--, pe === 10 && (lr = 1, Ws--), pe;
}
function mt() {
  return pe = ct < Od ? Yr(fr, ct++) : 0, lr++, pe === 10 && (lr = 1, Ws++), pe;
}
function An() {
  return Yr(fr, ct);
}
function Wi() {
  return ct;
}
function Vs(n, e) {
  return jr(fr, n, e);
}
function Ml(n) {
  switch (n) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function B0(n) {
  return Ws = lr = 1, Od = Jt(fr = n), ct = 0, [];
}
function z0(n) {
  return fr = "", n;
}
function Vo(n) {
  return Cd(Vs(ct - 1, Cl(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
}
function H0(n) {
  for (; (pe = An()) && pe < 33; )
    mt();
  return Ml(n) > 2 || Ml(pe) > 3 ? "" : " ";
}
function $0(n, e) {
  for (; --e && mt() && !(pe < 48 || pe > 102 || pe > 57 && pe < 65 || pe > 70 && pe < 97); )
    ;
  return Vs(n, Wi() + (e < 6 && An() == 32 && mt() == 32));
}
function Cl(n) {
  for (; mt(); )
    switch (pe) {
      case n:
        return ct;
      case 34:
      case 39:
        n !== 34 && n !== 39 && Cl(pe);
        break;
      case 40:
        n === 41 && Cl(n);
        break;
      case 92:
        mt();
        break;
    }
  return ct;
}
function W0(n, e) {
  for (; mt() && n + pe !== 57; )
    if (n + pe === 84 && An() === 47)
      break;
  return "/*" + Vs(e, ct - 1) + "*" + la(n === 47 ? n : mt());
}
function V0(n) {
  for (; !Ml(An()); )
    mt();
  return Vs(n, ct);
}
function Y0(n) {
  return z0(Vi("", null, null, null, [""], n = B0(n), 0, [0], n));
}
function Vi(n, e, t, r, i, s, o, l, c) {
  for (var d = 0, f = 0, h = o, g = 0, y = 0, b = 0, S = 1, x = 1, w = 1, T = 0, v = "", _ = i, I = s, P = r, E = v; x; )
    switch (b = T, T = mt()) {
      case 40:
        if (b != 108 && Yr(E, h - 1) == 58) {
          P0(E += $i(Vo(T), "&", "&\f"), "&\f") != -1 && (w = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        E += Vo(T);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        E += H0(b);
        break;
      case 92:
        E += $0(Wi() - 1, 7);
        continue;
      case 47:
        switch (An()) {
          case 42:
          case 47:
            Ai(j0(W0(mt(), Wi()), e, t), c);
            break;
          default:
            E += "/";
        }
        break;
      case 123 * S:
        l[d++] = Jt(E) * w;
      case 125 * S:
      case 59:
      case 0:
        switch (T) {
          case 0:
          case 125:
            x = 0;
          case 59 + f:
            w == -1 && (E = $i(E, /\f/g, "")), y > 0 && Jt(E) - h && Ai(y > 32 ? _c(E + ";", r, t, h - 1) : _c($i(E, " ", "") + ";", r, t, h - 2), c);
            break;
          case 59:
            E += ";";
          default:
            if (Ai(P = Ic(E, e, t, d, f, i, l, v, _ = [], I = [], h), s), T === 123)
              if (f === 0)
                Vi(E, e, P, P, _, s, h, l, I);
              else
                switch (g === 99 && Yr(E, 3) === 110 ? 100 : g) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Vi(n, P, P, r && Ai(Ic(n, P, P, 0, 0, i, l, v, i, _ = [], h), I), i, I, h, l, r ? _ : I);
                    break;
                  default:
                    Vi(E, P, P, P, [""], I, 0, l, I);
                }
        }
        d = f = y = 0, S = w = 1, v = E = "", h = o;
        break;
      case 58:
        h = 1 + Jt(E), y = b;
      default:
        if (S < 1) {
          if (T == 123)
            --S;
          else if (T == 125 && S++ == 0 && F0() == 125)
            continue;
        }
        switch (E += la(T), T * S) {
          case 38:
            w = f > 0 ? 1 : (E += "\f", -1);
            break;
          case 44:
            l[d++] = (Jt(E) - 1) * w, w = 1;
            break;
          case 64:
            An() === 45 && (E += Vo(mt())), g = An(), f = h = Jt(v = E += V0(Wi())), T++;
            break;
          case 45:
            b === 45 && Jt(E) == 2 && (S = 0);
        }
    }
  return s;
}
function Ic(n, e, t, r, i, s, o, l, c, d, f) {
  for (var h = i - 1, g = i === 0 ? s : [""], y = Td(g), b = 0, S = 0, x = 0; b < r; ++b)
    for (var w = 0, T = jr(n, h + 1, h = _0(S = o[b])), v = n; w < y; ++w)
      (v = Cd(S > 0 ? g[w] + " " + T : $i(T, /&\f/g, g[w]))) && (c[x++] = v);
  return aa(n, e, t, i === 0 ? Zi : l, c, d, f);
}
function j0(n, e, t) {
  return aa(n, e, t, wl, la(L0()), jr(n, 2, -2), 0);
}
function _c(n, e, t, r) {
  return aa(n, e, t, Md, jr(n, 0, r), jr(n, r + 1, -1), r);
}
function U0(n, e) {
  for (var t = "", r = Td(n), i = 0; i < r; i++)
    t += e(n[i], i, n, e) || "";
  return t;
}
function vd(n, e, t) {
  switch (n.type) {
    case N0:
    case Md:
    case wl:
      return n.return = n.return || n.value;
    case Zi:
      n.value = Array.isArray(n.props) ? n.props.join(",") : n.props, Array.isArray(n.children) && n.children.forEach(function(i) {
        i.type === wl && (i.children = i.value);
      });
  }
  var r = U0(Array.prototype.concat(n.children), vd);
  return Jt(r) ? n.return = n.value + "{" + r + "}" : "";
}
function Ed(n, e, t, r) {
  if (n.type === I0 || n.type === R0 || n.type === Zi && (!n.parent || n.parent.type === D0 || n.parent.type === Zi)) {
    var i = A0.transform(vd(n));
    n.children = i ? Y0(i)[0].children : [], n.return = "";
  }
}
Object.defineProperty(Ed, "name", { value: "stylisRTLPlugin" });
const q0 = (n) => n ? ["ar", "he", "fa", "ur"].some((t) => n.startsWith(t)) : !1, UT = (n) => q0(n) ? "rtl" : "ltr", G0 = () => yd({ key: "muirtl", stylisPlugins: [Ed] }), qT = () => yd({ key: "muiltr" }), K0 = ({ children: n }) => {
  const e = ld(() => G0(), []);
  return /* @__PURE__ */ O(Oy, { value: e, children: n });
};
K0.displayName = "IpsRtlProvider";
const J0 = {
  small: { px: 1.5, py: 0.5, fontSize: "0.75rem" },
  medium: { px: 2.5, py: 1, fontSize: "0.875rem" }
}, Q0 = ke(
  ({
    options: n = [],
    value: e,
    onChange: t,
    multiple: r = !1,
    disabled: i = !1,
    size: s = "medium",
    sx: o,
    className: l
  }, c) => {
    const d = ii(), f = d.palette.primary.main, h = (w) => r ? Array.isArray(e) && e.includes(w) : e === w, g = (w) => {
      if (!(i || !t))
        if (r) {
          const T = Array.isArray(e) ? e : [], v = T.includes(w) ? T.filter((_) => _ !== w) : [...T, w];
          t(v);
        } else
          t(e === w ? "" : w);
    }, y = ["ips-pill-select", l].filter(Boolean).join(" "), { px: b, py: S, fontSize: x } = J0[s];
    return /* @__PURE__ */ O(
      Ge,
      {
        ref: c,
        className: y,
        sx: {
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          opacity: i ? 0.5 : 1,
          pointerEvents: i ? "none" : "auto",
          ...o
        },
        children: n.map((w) => {
          const T = h(w.value);
          return /* @__PURE__ */ O(
            vy,
            {
              className: "ips-pill",
              onClick: () => g(w.value),
              disableRipple: !1,
              sx: {
                borderRadius: "999px",
                px: b,
                py: S,
                fontSize: x,
                fontWeight: 500,
                fontFamily: "inherit",
                lineHeight: 1.5,
                transition: "all 0.2s ease",
                ...T ? {
                  backgroundColor: f,
                  color: "white",
                  border: `1px solid ${f}`,
                  "&:hover": {
                    backgroundColor: d.palette.primary.dark,
                    borderColor: d.palette.primary.dark
                  }
                } : {
                  backgroundColor: "transparent",
                  color: f,
                  border: `1px solid ${f}`,
                  "&:hover": {
                    backgroundColor: `${f}14`
                  }
                }
              },
              children: w.label
            },
            w.value
          );
        })
      }
    );
  }
);
Q0.displayName = "IpsPillSelect";
const Z0 = ke(
  ({
    columns: n,
    rows: e,
    stickyHeader: t = !1,
    striped: r = !0,
    dense: i = !1,
    emptyText: s = "No data",
    sx: o,
    className: l
  }, c) => {
    const d = ["ips-table-light", l].filter(Boolean).join(" ");
    return /* @__PURE__ */ O(
      Ey,
      {
        ref: c,
        component: bd,
        className: d,
        sx: o,
        children: /* @__PURE__ */ Je(
          Ay,
          {
            stickyHeader: t,
            size: i ? "small" : "medium",
            children: [
              /* @__PURE__ */ O(Dy, { children: /* @__PURE__ */ O(Ho, { children: n.map((f) => /* @__PURE__ */ O(
                $o,
                {
                  width: f.width,
                  sx: {
                    backgroundColor: "primary.main",
                    color: "primary.contrastText",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                    // When stickyHeader is true MUI copies background via a separate
                    // internal rule — override both the cell and its ::after pseudo
                    "&.MuiTableCell-stickyHeader": {
                      backgroundColor: "primary.main"
                    }
                  },
                  children: f.label
                },
                f.key
              )) }) }),
              /* @__PURE__ */ O(Ny, { children: e.length === 0 ? /* @__PURE__ */ O(Ho, { children: /* @__PURE__ */ O($o, { colSpan: n.length, align: "center", children: /* @__PURE__ */ O(Vr, { variant: "body2", color: "text.secondary", sx: { py: 2 }, children: s }) }) }) : e.map((f, h) => /* @__PURE__ */ O(
                Ho,
                {
                  sx: r && h % 2 === 1 ? { backgroundColor: "grey.50" } : void 0,
                  children: n.map((g) => /* @__PURE__ */ O($o, { children: f[g.key] }, g.key))
                },
                h
              )) })
            ]
          }
        )
      }
    );
  }
);
Z0.displayName = "IpsTableLight";
const Ad = na(
  (n, e) => {
  }
);
function X0({ toast: n, onClose: e }) {
  return /* @__PURE__ */ Je(
    Ge,
    {
      className: "ips-toast",
      role: "alert",
      sx: {
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        px: 2,
        py: 1.5,
        mb: 1,
        borderRadius: 2,
        backgroundColor: n.bgColor,
        color: "white",
        boxShadow: 4,
        minWidth: "22em",
        maxWidth: "32em",
        animation: "ips-toast-enter 0.3s ease forwards",
        "@keyframes ips-toast-enter": {
          from: { transform: "translateX(100%)", opacity: 0 },
          to: { transform: "translateX(0)", opacity: 1 }
        }
      },
      children: [
        /* @__PURE__ */ O(Ge, { sx: { flexShrink: 0, display: "flex", alignItems: "center" }, children: n.icon }),
        /* @__PURE__ */ O(Vr, { variant: "body2", sx: { flex: 1, fontWeight: 500, lineHeight: 1.4 }, children: n.message }),
        /* @__PURE__ */ O(
          ia,
          {
            size: "small",
            onClick: () => e(n.id),
            sx: { color: "white", ml: 0.5, flexShrink: 0 },
            "aria-label": "close",
            children: /* @__PURE__ */ O(Ly, { fontSize: "small" })
          }
        )
      ]
    }
  );
}
const Er = {
  SUCCESS: "success",
  INFO: "info",
  WARNING: "warning",
  DANGER: "danger"
}, Pc = {
  [Er.SUCCESS]: {
    bgColor: "#5cb85c",
    icon: /* @__PURE__ */ O(Ry, { fontSize: "small" })
  },
  [Er.INFO]: {
    bgColor: "#5bc0de",
    icon: /* @__PURE__ */ O(Iy, { fontSize: "small" })
  },
  [Er.WARNING]: {
    bgColor: "#e4872b",
    icon: /* @__PURE__ */ O(_y, { fontSize: "small" })
  },
  [Er.DANGER]: {
    bgColor: "#d9534f",
    icon: /* @__PURE__ */ O(Py, { fontSize: "small" })
  }
};
function e1(n) {
  const e = {
    position: "fixed",
    zIndex: 10,
    display: "flex",
    flexDirection: "column",
    gap: 8
  };
  switch (n) {
    case "bottom-right":
      return { ...e, bottom: 24, right: 24 };
    case "bottom-left":
      return { ...e, bottom: 24, left: 24 };
    case "top-right":
      return { ...e, top: 24, right: 24 };
    case "top-left":
      return { ...e, top: 24, left: 24 };
  }
}
function GT({
  children: n,
  deleteTime: e = 3e3,
  maxToasts: t = 5,
  position: r = "bottom-right"
}) {
  const [i, s] = $s([]), o = ld(() => {
    let d = 0;
    return () => ++d;
  }, []), l = Ec((d) => {
    s((f) => f.filter((h) => h.id !== d));
  }, []), c = Ec(
    (d, f) => {
      const h = Pc[d] ?? Pc[Er.INFO], g = o(), y = {
        id: g,
        message: f,
        type: d,
        icon: h.icon,
        bgColor: h.bgColor
      };
      s((b) => {
        const S = [...b, y];
        return S.length > t ? S.slice(S.length - t) : S;
      }), setTimeout(() => l(g), e);
    },
    [e, t, o, l]
  );
  return /* @__PURE__ */ Je(Ad.Provider, { value: c, children: [
    n,
    kd.createPortal(
      /* @__PURE__ */ O(
        "div",
        {
          className: "ips-toast-container",
          style: e1(r),
          dir: "rtl",
          "data-testid": "ips-toast-container",
          children: i.map((d) => /* @__PURE__ */ O(X0, { toast: d, onClose: l }, d.id))
        }
      ),
      document.body
    )
  ] });
}
const KT = () => ad(Ad);
function Ee(n) {
  this.content = n;
}
Ee.prototype = {
  constructor: Ee,
  find: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === n) return e;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(n) {
    var e = this.find(n);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(n, e, t) {
    var r = t && t != n ? this.remove(t) : this, i = r.find(n), s = r.content.slice();
    return i == -1 ? s.push(t || n, e) : (s[i + 1] = e, t && (s[i] = t)), new Ee(s);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(n) {
    var e = this.find(n);
    if (e == -1) return this;
    var t = this.content.slice();
    return t.splice(e, 2), new Ee(t);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(n, e) {
    return new Ee([n, e].concat(this.remove(n).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(n, e) {
    var t = this.remove(n).content.slice();
    return t.push(n, e), new Ee(t);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(n, e, t) {
    var r = this.remove(e), i = r.content.slice(), s = r.find(n);
    return i.splice(s == -1 ? i.length : s, 0, e, t), new Ee(i);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      n(this.content[e], this.content[e + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(n) {
    return n = Ee.from(n), n.size ? new Ee(n.content.concat(this.subtract(n).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(n) {
    return n = Ee.from(n), n.size ? new Ee(this.subtract(n).content.concat(n.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(n) {
    var e = this;
    n = Ee.from(n);
    for (var t = 0; t < n.content.length; t += 2)
      e = e.remove(n.content[t]);
    return e;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var n = {};
    return this.forEach(function(e, t) {
      n[e] = t;
    }), n;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
Ee.from = function(n) {
  if (n instanceof Ee) return n;
  var e = [];
  if (n) for (var t in n) e.push(t, n[t]);
  return new Ee(e);
};
function Dd(n, e, t) {
  for (let r = 0; ; r++) {
    if (r == n.childCount || r == e.childCount)
      return n.childCount == e.childCount ? null : t;
    let i = n.child(r), s = e.child(r);
    if (i == s) {
      t += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(s))
      return t;
    if (i.isText && i.text != s.text) {
      for (let o = 0; i.text[o] == s.text[o]; o++)
        t++;
      return t;
    }
    if (i.content.size || s.content.size) {
      let o = Dd(i.content, s.content, t + 1);
      if (o != null)
        return o;
    }
    t += i.nodeSize;
  }
}
function Nd(n, e, t, r) {
  for (let i = n.childCount, s = e.childCount; ; ) {
    if (i == 0 || s == 0)
      return i == s ? null : { a: t, b: r };
    let o = n.child(--i), l = e.child(--s), c = o.nodeSize;
    if (o == l) {
      t -= c, r -= c;
      continue;
    }
    if (!o.sameMarkup(l))
      return { a: t, b: r };
    if (o.isText && o.text != l.text) {
      let d = 0, f = Math.min(o.text.length, l.text.length);
      for (; d < f && o.text[o.text.length - d - 1] == l.text[l.text.length - d - 1]; )
        d++, t--, r--;
      return { a: t, b: r };
    }
    if (o.content.size || l.content.size) {
      let d = Nd(o.content, l.content, t - 1, r - 1);
      if (d)
        return d;
    }
    t -= c, r -= c;
  }
}
class A {
  /**
  @internal
  */
  constructor(e, t) {
    if (this.content = e, this.size = t || 0, t == null)
      for (let r = 0; r < e.length; r++)
        this.size += e[r].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, t, r, i = 0, s) {
    for (let o = 0, l = 0; l < t; o++) {
      let c = this.content[o], d = l + c.nodeSize;
      if (d > e && r(c, i + l, s || null, o) !== !1 && c.content.size) {
        let f = l + 1;
        c.nodesBetween(Math.max(0, e - f), Math.min(c.content.size, t - f), r, i + f);
      }
      l = d;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, t, r, i) {
    let s = "", o = !0;
    return this.nodesBetween(e, t, (l, c) => {
      let d = l.isText ? l.text.slice(Math.max(e, c) - c, t - c) : l.isLeaf ? i ? typeof i == "function" ? i(l) : i : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
      l.isBlock && (l.isLeaf && d || l.isTextblock) && r && (o ? o = !1 : s += r), s += d;
    }, 0), s;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let t = this.lastChild, r = e.firstChild, i = this.content.slice(), s = 0;
    for (t.isText && t.sameMarkup(r) && (i[i.length - 1] = t.withText(t.text + r.text), s = 1); s < e.content.length; s++)
      i.push(e.content[s]);
    return new A(i, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, t = this.size) {
    if (e == 0 && t == this.size)
      return this;
    let r = [], i = 0;
    if (t > e)
      for (let s = 0, o = 0; o < t; s++) {
        let l = this.content[s], c = o + l.nodeSize;
        c > e && ((o < e || c > t) && (l.isText ? l = l.cut(Math.max(0, e - o), Math.min(l.text.length, t - o)) : l = l.cut(Math.max(0, e - o - 1), Math.min(l.content.size, t - o - 1))), r.push(l), i += l.nodeSize), o = c;
      }
    return new A(r, i);
  }
  /**
  @internal
  */
  cutByIndex(e, t) {
    return e == t ? A.empty : e == 0 && t == this.content.length ? this : new A(this.content.slice(e, t));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, t) {
    let r = this.content[e];
    if (r == t)
      return this;
    let i = this.content.slice(), s = this.size + t.nodeSize - r.nodeSize;
    return i[e] = t, new A(i, s);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new A([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new A(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let t = 0; t < this.content.length; t++)
      if (!this.content[t].eq(e.content[t]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let t = this.content[e];
    if (!t)
      throw new RangeError("Index " + e + " out of range for " + this);
    return t;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let t = 0, r = 0; t < this.content.length; t++) {
      let i = this.content[t];
      e(i, r, t), r += i.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, t = 0) {
    return Dd(this, e, t);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, t = this.size, r = e.size) {
    return Nd(this, e, t, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e) {
    if (e == 0)
      return Di(0, e);
    if (e == this.size)
      return Di(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let t = 0, r = 0; ; t++) {
      let i = this.child(t), s = r + i.nodeSize;
      if (s >= e)
        return s == e ? Di(t + 1, s) : Di(t, r);
      r = s;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return A.empty;
    if (!Array.isArray(t))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new A(t.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return A.empty;
    let t, r = 0;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      r += s.nodeSize, i && s.isText && e[i - 1].sameMarkup(s) ? (t || (t = e.slice(0, i)), t[t.length - 1] = s.withText(t[t.length - 1].text + s.text)) : t && t.push(s);
    }
    return new A(t || e, r);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return A.empty;
    if (e instanceof A)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new A([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
A.empty = new A([], 0);
const Yo = { index: 0, offset: 0 };
function Di(n, e) {
  return Yo.index = n, Yo.offset = e, Yo;
}
function Xi(n, e) {
  if (n === e)
    return !0;
  if (!(n && typeof n == "object") || !(e && typeof e == "object"))
    return !1;
  let t = Array.isArray(n);
  if (Array.isArray(e) != t)
    return !1;
  if (t) {
    if (n.length != e.length)
      return !1;
    for (let r = 0; r < n.length; r++)
      if (!Xi(n[r], e[r]))
        return !1;
  } else {
    for (let r in n)
      if (!(r in e) || !Xi(n[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in n))
        return !1;
  }
  return !0;
}
let re = class Tl {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.attrs = t;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(e) {
    let t, r = !1;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      if (this.eq(s))
        return e;
      if (this.type.excludes(s.type))
        t || (t = e.slice(0, i));
      else {
        if (s.type.excludes(this.type))
          return e;
        !r && s.type.rank > this.type.rank && (t || (t = e.slice(0, i)), t.push(this), r = !0), t && t.push(s);
      }
    }
    return t || (t = e.slice()), r || t.push(this), t;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return e.slice(0, t).concat(e.slice(t + 1));
    return e;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(e) {
    return this == e || this.type == e.type && Xi(this.attrs, e.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let r = e.marks[t.type];
    if (!r)
      throw new RangeError(`There is no mark type ${t.type} in this schema`);
    let i = r.create(t.attrs);
    return r.checkAttrs(i.attrs), i;
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, t) {
    if (e == t)
      return !0;
    if (e.length != t.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (!e[r].eq(t[r]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return Tl.none;
    if (e instanceof Tl)
      return [e];
    let t = e.slice();
    return t.sort((r, i) => r.type.rank - i.type.rank), t;
  }
};
re.none = [];
class es extends Error {
}
class L {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, t, r) {
    this.content = e, this.openStart = t, this.openEnd = r;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, t) {
    let r = Id(this.content, e + this.openStart, t);
    return r && new L(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, t) {
    return new L(Rd(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return L.empty;
    let r = t.openStart || 0, i = t.openEnd || 0;
    if (typeof r != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new L(A.fromJSON(e, t.content), r, i);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, t = !0) {
    let r = 0, i = 0;
    for (let s = e.firstChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.firstChild)
      r++;
    for (let s = e.lastChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.lastChild)
      i++;
    return new L(e, r, i);
  }
}
L.empty = new L(A.empty, 0, 0);
function Rd(n, e, t) {
  let { index: r, offset: i } = n.findIndex(e), s = n.maybeChild(r), { index: o, offset: l } = n.findIndex(t);
  if (i == e || s.isText) {
    if (l != t && !n.child(o).isText)
      throw new RangeError("Removing non-flat range");
    return n.cut(0, e).append(n.cut(t));
  }
  if (r != o)
    throw new RangeError("Removing non-flat range");
  return n.replaceChild(r, s.copy(Rd(s.content, e - i - 1, t - i - 1)));
}
function Id(n, e, t, r) {
  let { index: i, offset: s } = n.findIndex(e), o = n.maybeChild(i);
  if (s == e || o.isText)
    return r && !r.canReplace(i, i, t) ? null : n.cut(0, e).append(t).append(n.cut(e));
  let l = Id(o.content, e - s - 1, t, o);
  return l && n.replaceChild(i, o.copy(l));
}
function t1(n, e, t) {
  if (t.openStart > n.depth)
    throw new es("Inserted content deeper than insertion position");
  if (n.depth - t.openStart != e.depth - t.openEnd)
    throw new es("Inconsistent open depths");
  return _d(n, e, t, 0);
}
function _d(n, e, t, r) {
  let i = n.index(r), s = n.node(r);
  if (i == e.index(r) && r < n.depth - t.openStart) {
    let o = _d(n, e, t, r + 1);
    return s.copy(s.content.replaceChild(i, o));
  } else if (t.content.size)
    if (!t.openStart && !t.openEnd && n.depth == r && e.depth == r) {
      let o = n.parent, l = o.content;
      return Nn(o, l.cut(0, n.parentOffset).append(t.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: o, end: l } = n1(t, n);
      return Nn(s, Ld(n, o, l, e, r));
    }
  else return Nn(s, ts(n, e, r));
}
function Pd(n, e) {
  if (!e.type.compatibleContent(n.type))
    throw new es("Cannot join " + e.type.name + " onto " + n.type.name);
}
function Ol(n, e, t) {
  let r = n.node(t);
  return Pd(r, e.node(t)), r;
}
function Dn(n, e) {
  let t = e.length - 1;
  t >= 0 && n.isText && n.sameMarkup(e[t]) ? e[t] = n.withText(e[t].text + n.text) : e.push(n);
}
function Ir(n, e, t, r) {
  let i = (e || n).node(t), s = 0, o = e ? e.index(t) : i.childCount;
  n && (s = n.index(t), n.depth > t ? s++ : n.textOffset && (Dn(n.nodeAfter, r), s++));
  for (let l = s; l < o; l++)
    Dn(i.child(l), r);
  e && e.depth == t && e.textOffset && Dn(e.nodeBefore, r);
}
function Nn(n, e) {
  return n.type.checkContent(e), n.copy(e);
}
function Ld(n, e, t, r, i) {
  let s = n.depth > i && Ol(n, e, i + 1), o = r.depth > i && Ol(t, r, i + 1), l = [];
  return Ir(null, n, i, l), s && o && e.index(i) == t.index(i) ? (Pd(s, o), Dn(Nn(s, Ld(n, e, t, r, i + 1)), l)) : (s && Dn(Nn(s, ts(n, e, i + 1)), l), Ir(e, t, i, l), o && Dn(Nn(o, ts(t, r, i + 1)), l)), Ir(r, null, i, l), new A(l);
}
function ts(n, e, t) {
  let r = [];
  if (Ir(null, n, t, r), n.depth > t) {
    let i = Ol(n, e, t + 1);
    Dn(Nn(i, ts(n, e, t + 1)), r);
  }
  return Ir(e, null, t, r), new A(r);
}
function n1(n, e) {
  let t = e.depth - n.openStart, i = e.node(t).copy(n.content);
  for (let s = t - 1; s >= 0; s--)
    i = e.node(s).copy(A.from(i));
  return {
    start: i.resolveNoCache(n.openStart + t),
    end: i.resolveNoCache(i.content.size - n.openEnd - t)
  };
}
class Ur {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.path = t, this.parentOffset = r, this.depth = t.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(e) {
    return e == null ? this.depth : e < 0 ? this.depth + e : e;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(e) {
    return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(e) {
    return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(e) {
    return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position before the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position after the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let e = this.parent, t = this.index(this.depth);
    if (t == e.childCount)
      return null;
    let r = this.pos - this.path[this.path.length - 1], i = e.child(t);
    return r ? e.child(t).cut(r) : i;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let e = this.index(this.depth), t = this.pos - this.path[this.path.length - 1];
    return t ? this.parent.child(e).cut(0, t) : e == 0 ? null : this.parent.child(e - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(e, t) {
    t = this.resolveDepth(t);
    let r = this.path[t * 3], i = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
    for (let s = 0; s < e; s++)
      i += r.child(s).nodeSize;
    return i;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let e = this.parent, t = this.index();
    if (e.content.size == 0)
      return re.none;
    if (this.textOffset)
      return e.child(t).marks;
    let r = e.maybeChild(t - 1), i = e.maybeChild(t);
    if (!r) {
      let l = r;
      r = i, i = l;
    }
    let s = r.marks;
    for (var o = 0; o < s.length; o++)
      s[o].type.spec.inclusive === !1 && (!i || !s[o].isInSet(i.marks)) && (s = s[o--].removeFromSet(s));
    return s;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross(e) {
    let t = this.parent.maybeChild(this.index());
    if (!t || !t.isInline)
      return null;
    let r = t.marks, i = e.parent.maybeChild(e.index());
    for (var s = 0; s < r.length; s++)
      r[s].type.spec.inclusive === !1 && (!i || !r[s].isInSet(i.marks)) && (r = r[s--].removeFromSet(r));
    return r;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(e) {
    for (let t = this.depth; t > 0; t--)
      if (this.start(t) <= e && this.end(t) >= e)
        return t;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(e = this, t) {
    if (e.pos < this.pos)
      return e.blockRange(this);
    for (let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--)
      if (e.pos <= this.end(r) && (!t || t(this.node(r))))
        return new ns(this, e, r);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(e) {
    return e.pos > this.pos ? e : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(e) {
    return e.pos < this.pos ? e : this;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 1; t <= this.depth; t++)
      e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
    return e + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(e, t) {
    if (!(t >= 0 && t <= e.content.size))
      throw new RangeError("Position " + t + " out of range");
    let r = [], i = 0, s = t;
    for (let o = e; ; ) {
      let { index: l, offset: c } = o.content.findIndex(s), d = s - c;
      if (r.push(o, l, i + c), !d || (o = o.child(l), o.isText))
        break;
      s = d - 1, i += c + 1;
    }
    return new Ur(t, r, s);
  }
  /**
  @internal
  */
  static resolveCached(e, t) {
    let r = Lc.get(e);
    if (r)
      for (let s = 0; s < r.elts.length; s++) {
        let o = r.elts[s];
        if (o.pos == t)
          return o;
      }
    else
      Lc.set(e, r = new r1());
    let i = r.elts[r.i] = Ur.resolve(e, t);
    return r.i = (r.i + 1) % i1, i;
  }
}
class r1 {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const i1 = 12, Lc = /* @__PURE__ */ new WeakMap();
class ns {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.depth = r;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const s1 = /* @__PURE__ */ Object.create(null);
let on = class vl {
  /**
  @internal
  */
  constructor(e, t, r, i = re.none) {
    this.type = e, this.attrs = t, this.marks = i, this.content = r || A.empty;
  }
  /**
  The array of this node's child nodes.
  */
  get children() {
    return this.content.content;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](https://prosemirror.net/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(e) {
    return this.content.child(e);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    this.content.forEach(e);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(e, t, r, i = 0) {
    this.content.nodesBetween(e, t, r, i, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec.leafText) will be used.
  */
  textBetween(e, t, r, i) {
    return this.content.textBetween(e, t, r, i);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(e) {
    return this == e || this.sameMarkup(e) && this.content.eq(e.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(e, t, r) {
    return this.type == e && Xi(this.attrs, t || e.defaultAttrs || s1) && re.sameSet(this.marks, r || re.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new vl(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new vl(this.type, this.attrs, this.content, e);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(e, t = this.content.size) {
    return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(e, t = this.content.size, r = !1) {
    if (e == t)
      return L.empty;
    let i = this.resolve(e), s = this.resolve(t), o = r ? 0 : i.sharedDepth(t), l = i.start(o), d = i.node(o).content.cut(i.pos - l, s.pos - l);
    return new L(d, i.depth - o, s.depth - o);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, t, r) {
    return t1(this.resolve(e), this.resolve(t), r);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let t = this; ; ) {
      let { index: r, offset: i } = t.content.findIndex(e);
      if (t = t.maybeChild(r), !t)
        return null;
      if (i == e || t.isText)
        return t;
      e -= i + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(e) {
    let { index: t, offset: r } = this.content.findIndex(e);
    return { node: this.content.maybeChild(t), index: t, offset: r };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: t, offset: r } = this.content.findIndex(e);
    if (r < e)
      return { node: this.content.child(t), index: t, offset: r };
    let i = this.content.child(t - 1);
    return { node: i, index: t - 1, offset: r - i.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return Ur.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return Ur.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, t, r) {
    let i = !1;
    return t > e && this.nodesBetween(e, t, (s) => (r.isInSet(s.marks) && (i = !0), !i)), i;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let e = this.type.name;
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), Fd(this.marks, e);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(e) {
    let t = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!t)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return t;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(e, t, r = A.empty, i = 0, s = r.childCount) {
    let o = this.contentMatchAt(e).matchFragment(r, i, s), l = o && o.matchFragment(this.content, t);
    if (!l || !l.validEnd)
      return !1;
    for (let c = i; c < s; c++)
      if (!this.type.allowsMarks(r.child(c).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, t, r, i) {
    if (i && !this.type.allowsMarks(i))
      return !1;
    let s = this.contentMatchAt(e).matchType(r), o = s && s.matchFragment(this.content, t);
    return o ? o.validEnd : !1;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(e) {
    return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise an exception when they do not.
  */
  check() {
    this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
    let e = re.none;
    for (let t = 0; t < this.marks.length; t++) {
      let r = this.marks[t];
      r.type.checkAttrs(r.attrs), e = r.addToSet(e);
    }
    if (!re.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((t) => t.type.name)}`);
    this.content.forEach((t) => t.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((t) => t.toJSON())), e;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Node.fromJSON");
    let r;
    if (t.marks) {
      if (!Array.isArray(t.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      r = t.marks.map(e.markFromJSON);
    }
    if (t.type == "text") {
      if (typeof t.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(t.text, r);
    }
    let i = A.fromJSON(e, t.content), s = e.nodeType(t.type).create(t.attrs, i, r);
    return s.type.checkAttrs(s.attrs), s;
  }
};
on.prototype.text = void 0;
class rs extends on {
  /**
  @internal
  */
  constructor(e, t, r, i) {
    if (super(e, t, null, i), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : Fd(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, t) {
    return this.text.slice(e, t);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    return e == this.marks ? this : new rs(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new rs(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, t = this.text.length) {
    return e == 0 && t == this.text.length ? this : this.withText(this.text.slice(e, t));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return e.text = this.text, e;
  }
}
function Fd(n, e) {
  for (let t = n.length - 1; t >= 0; t--)
    e = n[t].type.name + "(" + e + ")";
  return e;
}
class Pn {
  /**
  @internal
  */
  constructor(e) {
    this.validEnd = e, this.next = [], this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(e, t) {
    let r = new o1(e, t);
    if (r.next == null)
      return Pn.empty;
    let i = Bd(r);
    r.next && r.err("Unexpected trailing text");
    let s = h1(f1(i));
    return p1(s, r), s;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(e) {
    for (let t = 0; t < this.next.length; t++)
      if (this.next[t].type == e)
        return this.next[t].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(e, t = 0, r = e.childCount) {
    let i = this;
    for (let s = t; i && s < r; s++)
      i = i.matchType(e.child(s).type);
    return i;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: t } = this.next[e];
      if (!(t.isText || t.hasRequiredAttrs()))
        return t;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(e) {
    for (let t = 0; t < this.next.length; t++)
      for (let r = 0; r < e.next.length; r++)
        if (this.next[t].type == e.next[r].type)
          return !0;
    return !1;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(e, t = !1, r = 0) {
    let i = [this];
    function s(o, l) {
      let c = o.matchFragment(e, r);
      if (c && (!t || c.validEnd))
        return A.from(l.map((d) => d.createAndFill()));
      for (let d = 0; d < o.next.length; d++) {
        let { type: f, next: h } = o.next[d];
        if (!(f.isText || f.hasRequiredAttrs()) && i.indexOf(h) == -1) {
          i.push(h);
          let g = s(h, l.concat(f));
          if (g)
            return g;
        }
      }
      return null;
    }
    return s(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(e) {
    for (let r = 0; r < this.wrapCache.length; r += 2)
      if (this.wrapCache[r] == e)
        return this.wrapCache[r + 1];
    let t = this.computeWrapping(e);
    return this.wrapCache.push(e, t), t;
  }
  /**
  @internal
  */
  computeWrapping(e) {
    let t = /* @__PURE__ */ Object.create(null), r = [{ match: this, type: null, via: null }];
    for (; r.length; ) {
      let i = r.shift(), s = i.match;
      if (s.matchType(e)) {
        let o = [];
        for (let l = i; l.type; l = l.via)
          o.push(l.type);
        return o.reverse();
      }
      for (let o = 0; o < s.next.length; o++) {
        let { type: l, next: c } = s.next[o];
        !l.isLeaf && !l.hasRequiredAttrs() && !(l.name in t) && (!i.type || c.validEnd) && (r.push({ match: l.contentMatch, type: l, via: i }), t[l.name] = !0);
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(e) {
    if (e >= this.next.length)
      throw new RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    function t(r) {
      e.push(r);
      for (let i = 0; i < r.next.length; i++)
        e.indexOf(r.next[i].next) == -1 && t(r.next[i].next);
    }
    return t(this), e.map((r, i) => {
      let s = i + (r.validEnd ? "*" : " ") + " ";
      for (let o = 0; o < r.next.length; o++)
        s += (o ? ", " : "") + r.next[o].type.name + "->" + e.indexOf(r.next[o].next);
      return s;
    }).join(`
`);
  }
}
Pn.empty = new Pn(!0);
class o1 {
  constructor(e, t) {
    this.string = e, this.nodeTypes = t, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || !0);
  }
  err(e) {
    throw new SyntaxError(e + " (in content expression '" + this.string + "')");
  }
}
function Bd(n) {
  let e = [];
  do
    e.push(l1(n));
  while (n.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function l1(n) {
  let e = [];
  do
    e.push(a1(n));
  while (n.next && n.next != ")" && n.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function a1(n) {
  let e = d1(n);
  for (; ; )
    if (n.eat("+"))
      e = { type: "plus", expr: e };
    else if (n.eat("*"))
      e = { type: "star", expr: e };
    else if (n.eat("?"))
      e = { type: "opt", expr: e };
    else if (n.eat("{"))
      e = c1(n, e);
    else
      break;
  return e;
}
function Fc(n) {
  /\D/.test(n.next) && n.err("Expected number, got '" + n.next + "'");
  let e = Number(n.next);
  return n.pos++, e;
}
function c1(n, e) {
  let t = Fc(n), r = t;
  return n.eat(",") && (n.next != "}" ? r = Fc(n) : r = -1), n.eat("}") || n.err("Unclosed braced range"), { type: "range", min: t, max: r, expr: e };
}
function u1(n, e) {
  let t = n.nodeTypes, r = t[e];
  if (r)
    return [r];
  let i = [];
  for (let s in t) {
    let o = t[s];
    o.isInGroup(e) && i.push(o);
  }
  return i.length == 0 && n.err("No node type or group '" + e + "' found"), i;
}
function d1(n) {
  if (n.eat("(")) {
    let e = Bd(n);
    return n.eat(")") || n.err("Missing closing paren"), e;
  } else if (/\W/.test(n.next))
    n.err("Unexpected token '" + n.next + "'");
  else {
    let e = u1(n, n.next).map((t) => (n.inline == null ? n.inline = t.isInline : n.inline != t.isInline && n.err("Mixing inline and block content"), { type: "name", value: t }));
    return n.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function f1(n) {
  let e = [[]];
  return i(s(n, 0), t()), e;
  function t() {
    return e.push([]) - 1;
  }
  function r(o, l, c) {
    let d = { term: c, to: l };
    return e[o].push(d), d;
  }
  function i(o, l) {
    o.forEach((c) => c.to = l);
  }
  function s(o, l) {
    if (o.type == "choice")
      return o.exprs.reduce((c, d) => c.concat(s(d, l)), []);
    if (o.type == "seq")
      for (let c = 0; ; c++) {
        let d = s(o.exprs[c], l);
        if (c == o.exprs.length - 1)
          return d;
        i(d, l = t());
      }
    else if (o.type == "star") {
      let c = t();
      return r(l, c), i(s(o.expr, c), c), [r(c)];
    } else if (o.type == "plus") {
      let c = t();
      return i(s(o.expr, l), c), i(s(o.expr, c), c), [r(c)];
    } else {
      if (o.type == "opt")
        return [r(l)].concat(s(o.expr, l));
      if (o.type == "range") {
        let c = l;
        for (let d = 0; d < o.min; d++) {
          let f = t();
          i(s(o.expr, c), f), c = f;
        }
        if (o.max == -1)
          i(s(o.expr, c), c);
        else
          for (let d = o.min; d < o.max; d++) {
            let f = t();
            r(c, f), i(s(o.expr, c), f), c = f;
          }
        return [r(c)];
      } else {
        if (o.type == "name")
          return [r(l, void 0, o.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function zd(n, e) {
  return e - n;
}
function Bc(n, e) {
  let t = [];
  return r(e), t.sort(zd);
  function r(i) {
    let s = n[i];
    if (s.length == 1 && !s[0].term)
      return r(s[0].to);
    t.push(i);
    for (let o = 0; o < s.length; o++) {
      let { term: l, to: c } = s[o];
      !l && t.indexOf(c) == -1 && r(c);
    }
  }
}
function h1(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return t(Bc(n, 0));
  function t(r) {
    let i = [];
    r.forEach((o) => {
      n[o].forEach(({ term: l, to: c }) => {
        if (!l)
          return;
        let d;
        for (let f = 0; f < i.length; f++)
          i[f][0] == l && (d = i[f][1]);
        Bc(n, c).forEach((f) => {
          d || i.push([l, d = []]), d.indexOf(f) == -1 && d.push(f);
        });
      });
    });
    let s = e[r.join(",")] = new Pn(r.indexOf(n.length - 1) > -1);
    for (let o = 0; o < i.length; o++) {
      let l = i[o][1].sort(zd);
      s.next.push({ type: i[o][0], next: e[l.join(",")] || t(l) });
    }
    return s;
  }
}
function p1(n, e) {
  for (let t = 0, r = [n]; t < r.length; t++) {
    let i = r[t], s = !i.validEnd, o = [];
    for (let l = 0; l < i.next.length; l++) {
      let { type: c, next: d } = i.next[l];
      o.push(c.name), s && !(c.isText || c.hasRequiredAttrs()) && (s = !1), r.indexOf(d) == -1 && r.push(d);
    }
    s && e.err("Only non-generatable nodes (" + o.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function Hd(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n) {
    let r = n[t];
    if (!r.hasDefault)
      return null;
    e[t] = r.default;
  }
  return e;
}
function $d(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let r in n) {
    let i = e && e[r];
    if (i === void 0) {
      let s = n[r];
      if (s.hasDefault)
        i = s.default;
      else
        throw new RangeError("No value supplied for attribute " + r);
    }
    t[r] = i;
  }
  return t;
}
function Wd(n, e, t, r) {
  for (let i in e)
    if (!(i in n))
      throw new RangeError(`Unsupported attribute ${i} for ${t} of type ${i}`);
  for (let i in n) {
    let s = n[i];
    s.validate && s.validate(e[i]);
  }
}
function Vd(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let r in e)
      t[r] = new g1(n, r, e[r]);
  return t;
}
let zc = class Yd {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.name = e, this.schema = t, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = Vd(e, r.attrs), this.defaultAttrs = Hd(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == Pn.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  Return true when this node type is part of the given
  [group](https://prosemirror.net/docs/ref/#model.NodeSpec.group).
  */
  isInGroup(e) {
    return this.groups.indexOf(e) > -1;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let e in this.attrs)
      if (this.attrs[e].isRequired)
        return !0;
    return !1;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : $d(this.attrs, e);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(e = null, t, r) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new on(this, this.computeAttrs(e), A.from(t), re.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, t, r) {
    return t = A.from(t), this.checkContent(t), new on(this, this.computeAttrs(e), t, re.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(e = null, t, r) {
    if (e = this.computeAttrs(e), t = A.from(t), t.size) {
      let o = this.contentMatch.fillBefore(t);
      if (!o)
        return null;
      t = o.append(t);
    }
    let i = this.contentMatch.matchFragment(t), s = i && i.fillBefore(A.empty, !0);
    return s ? new on(this, e, t.append(s), re.setFrom(r)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type.
  */
  validContent(e) {
    let t = this.contentMatch.matchFragment(e);
    if (!t || !t.validEnd)
      return !1;
    for (let r = 0; r < e.childCount; r++)
      if (!this.allowsMarks(e.child(r).marks))
        return !1;
    return !0;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(e) {
    if (!this.validContent(e))
      throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
  }
  /**
  @internal
  */
  checkAttrs(e) {
    Wd(this.attrs, e, "node", this.name);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(e) {
    if (this.markSet == null)
      return !0;
    for (let t = 0; t < e.length; t++)
      if (!this.allowsMarkType(e[t].type))
        return !1;
    return !0;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(e) {
    if (this.markSet == null)
      return e;
    let t;
    for (let r = 0; r < e.length; r++)
      this.allowsMarkType(e[r].type) ? t && t.push(e[r]) : t || (t = e.slice(0, r));
    return t ? t.length ? t : re.none : e;
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((s, o) => r[s] = new Yd(s, t, o));
    let i = t.spec.topNode || "doc";
    if (!r[i])
      throw new RangeError("Schema is missing its top node type ('" + i + "')");
    if (!r.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let s in r.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return r;
  }
};
function m1(n, e, t) {
  let r = t.split("|");
  return (i) => {
    let s = i === null ? "null" : typeof i;
    if (r.indexOf(s) < 0)
      throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${n}, got ${s}`);
  };
}
class g1 {
  constructor(e, t, r) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default"), this.default = r.default, this.validate = typeof r.validate == "string" ? m1(e, t, r.validate) : r.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class Ys {
  /**
  @internal
  */
  constructor(e, t, r, i) {
    this.name = e, this.rank = t, this.schema = r, this.spec = i, this.attrs = Vd(e, i.attrs), this.excluded = null;
    let s = Hd(this.attrs);
    this.instance = s ? new re(this, s) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new re(this, $d(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null), i = 0;
    return e.forEach((s, o) => r[s] = new Ys(s, i++, t, o)), r;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(e) {
    for (var t = 0; t < e.length; t++)
      e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)), t--);
    return e;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (e[t].type == this)
        return e[t];
  }
  /**
  @internal
  */
  checkAttrs(e) {
    Wd(this.attrs, e, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class jd {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let t = this.spec = {};
    for (let i in e)
      t[i] = e[i];
    t.nodes = Ee.from(e.nodes), t.marks = Ee.from(e.marks || {}), this.nodes = zc.compile(this.spec.nodes, this), this.marks = Ys.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let i in this.nodes) {
      if (i in this.marks)
        throw new RangeError(i + " can not be both a node and a mark");
      let s = this.nodes[i], o = s.spec.content || "", l = s.spec.marks;
      if (s.contentMatch = r[o] || (r[o] = Pn.parse(o, this.nodes)), s.inlineContent = s.contentMatch.inlineContent, s.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!s.isInline || !s.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = s;
      }
      s.markSet = l == "_" ? null : l ? Hc(this, l.split(" ")) : l == "" || !s.inlineContent ? [] : null;
    }
    for (let i in this.marks) {
      let s = this.marks[i], o = s.spec.excludes;
      s.excluded = o == null ? [s] : o == "" ? [] : Hc(this, o.split(" "));
    }
    this.nodeFromJSON = (i) => on.fromJSON(this, i), this.markFromJSON = (i) => re.fromJSON(this, i), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, t = null, r, i) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof zc) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else throw new RangeError("Invalid node type: " + e);
    return e.createChecked(t, r, i);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, t) {
    let r = this.nodes.text;
    return new rs(r, r.defaultAttrs, e, re.setFrom(t));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(e, t) {
    return typeof e == "string" && (e = this.marks[e]), e.create(t);
  }
  /**
  @internal
  */
  nodeType(e) {
    let t = this.nodes[e];
    if (!t)
      throw new RangeError("Unknown node type: " + e);
    return t;
  }
}
function Hc(n, e) {
  let t = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r], s = n.marks[i], o = s;
    if (s)
      t.push(s);
    else
      for (let l in n.marks) {
        let c = n.marks[l];
        (i == "_" || c.spec.group && c.spec.group.split(" ").indexOf(i) > -1) && t.push(o = c);
      }
    if (!o)
      throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
  }
  return t;
}
function y1(n) {
  return n.tag != null;
}
function b1(n) {
  return n.style != null;
}
class ln {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, t) {
    this.schema = e, this.rules = t, this.tags = [], this.styles = [];
    let r = this.matchedStyles = [];
    t.forEach((i) => {
      if (y1(i))
        this.tags.push(i);
      else if (b1(i)) {
        let s = /[^=]*/.exec(i.style)[0];
        r.indexOf(s) < 0 && r.push(s), this.styles.push(i);
      }
    }), this.normalizeLists = !this.tags.some((i) => {
      if (!/^(ul|ol)\b/.test(i.tag) || !i.node)
        return !1;
      let s = e.nodes[i.node];
      return s.contentMatch.matchType(s);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, t = {}) {
    let r = new Wc(this, t, !1);
    return r.addAll(e, re.none, t.from, t.to), r.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(e, t = {}) {
    let r = new Wc(this, t, !0);
    return r.addAll(e, re.none, t.from, t.to), L.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, t, r) {
    for (let i = r ? this.tags.indexOf(r) + 1 : 0; i < this.tags.length; i++) {
      let s = this.tags[i];
      if (x1(e, s.tag) && (s.namespace === void 0 || e.namespaceURI == s.namespace) && (!s.context || t.matchesContext(s.context))) {
        if (s.getAttrs) {
          let o = s.getAttrs(e);
          if (o === !1)
            continue;
          s.attrs = o || void 0;
        }
        return s;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, t, r, i) {
    for (let s = i ? this.styles.indexOf(i) + 1 : 0; s < this.styles.length; s++) {
      let o = this.styles[s], l = o.style;
      if (!(l.indexOf(e) != 0 || o.context && !r.matchesContext(o.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != t))) {
        if (o.getAttrs) {
          let c = o.getAttrs(t);
          if (c === !1)
            continue;
          o.attrs = c || void 0;
        }
        return o;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(e) {
    let t = [];
    function r(i) {
      let s = i.priority == null ? 50 : i.priority, o = 0;
      for (; o < t.length; o++) {
        let l = t[o];
        if ((l.priority == null ? 50 : l.priority) < s)
          break;
      }
      t.splice(o, 0, i);
    }
    for (let i in e.marks) {
      let s = e.marks[i].spec.parseDOM;
      s && s.forEach((o) => {
        r(o = Vc(o)), o.mark || o.ignore || o.clearMark || (o.mark = i);
      });
    }
    for (let i in e.nodes) {
      let s = e.nodes[i].spec.parseDOM;
      s && s.forEach((o) => {
        r(o = Vc(o)), o.node || o.ignore || o.mark || (o.node = i);
      });
    }
    return t;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.GenericParseRule.priority).
  */
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new ln(e, ln.schemaRules(e)));
  }
}
const Ud = {
  address: !0,
  article: !0,
  aside: !0,
  blockquote: !0,
  canvas: !0,
  dd: !0,
  div: !0,
  dl: !0,
  fieldset: !0,
  figcaption: !0,
  figure: !0,
  footer: !0,
  form: !0,
  h1: !0,
  h2: !0,
  h3: !0,
  h4: !0,
  h5: !0,
  h6: !0,
  header: !0,
  hgroup: !0,
  hr: !0,
  li: !0,
  noscript: !0,
  ol: !0,
  output: !0,
  p: !0,
  pre: !0,
  section: !0,
  table: !0,
  tfoot: !0,
  ul: !0
}, k1 = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, qd = { ol: !0, ul: !0 }, qr = 1, El = 2, _r = 4;
function $c(n, e, t) {
  return e != null ? (e ? qr : 0) | (e === "full" ? El : 0) : n && n.whitespace == "pre" ? qr | El : t & ~_r;
}
class Ni {
  constructor(e, t, r, i, s, o) {
    this.type = e, this.attrs = t, this.marks = r, this.solid = i, this.options = o, this.content = [], this.activeMarks = re.none, this.match = s || (o & _r ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let t = this.type.contentMatch.fillBefore(A.from(e));
      if (t)
        this.match = this.type.contentMatch.matchFragment(t);
      else {
        let r = this.type.contentMatch, i;
        return (i = r.findWrapping(e.type)) ? (this.match = r, i) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & qr)) {
      let r = this.content[this.content.length - 1], i;
      if (r && r.isText && (i = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let s = r;
        r.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = s.withText(s.text.slice(0, s.text.length - i[0].length));
      }
    }
    let t = A.from(this.content);
    return !e && this.match && (t = t.append(this.match.fillBefore(A.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t;
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !Ud.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class Wc {
  constructor(e, t, r) {
    this.parser = e, this.options = t, this.isOpen = r, this.open = 0, this.localPreserveWS = !1;
    let i = t.topNode, s, o = $c(null, t.preserveWhitespace, 0) | (r ? _r : 0);
    i ? s = new Ni(i.type, i.attrs, re.none, !0, t.topMatch || i.type.contentMatch, o) : r ? s = new Ni(null, null, re.none, !0, null, o) : s = new Ni(e.schema.topNodeType, null, re.none, !0, null, o), this.nodes = [s], this.find = t.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(e, t) {
    e.nodeType == 3 ? this.addTextNode(e, t) : e.nodeType == 1 && this.addElement(e, t);
  }
  addTextNode(e, t) {
    let r = e.nodeValue, i = this.top, s = i.options & El ? "full" : this.localPreserveWS || (i.options & qr) > 0, { schema: o } = this.parser;
    if (s === "full" || i.inlineContext(e) || /[^ \t\r\n\u000c]/.test(r)) {
      if (s)
        if (s === "full")
          r = r.replace(/\r\n?/g, `
`);
        else if (o.linebreakReplacement && /[\r\n]/.test(r) && this.top.findWrapping(o.linebreakReplacement.create())) {
          let l = r.split(/\r?\n|\r/);
          for (let c = 0; c < l.length; c++)
            c && this.insertNode(o.linebreakReplacement.create(), t, !0), l[c] && this.insertNode(o.text(l[c]), t, !/\S/.test(l[c]));
          r = "";
        } else
          r = r.replace(/\r?\n|\r/g, " ");
      else if (r = r.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(r) && this.open == this.nodes.length - 1) {
        let l = i.content[i.content.length - 1], c = e.previousSibling;
        (!l || c && c.nodeName == "BR" || l.isText && /[ \t\r\n\u000c]$/.test(l.text)) && (r = r.slice(1));
      }
      r && this.insertNode(o.text(r), t, !/\S/.test(r)), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, t, r) {
    let i = this.localPreserveWS, s = this.top;
    (e.tagName == "PRE" || /pre/.test(e.style && e.style.whiteSpace)) && (this.localPreserveWS = !0);
    let o = e.nodeName.toLowerCase(), l;
    qd.hasOwnProperty(o) && this.parser.normalizeLists && S1(e);
    let c = this.options.ruleFromNode && this.options.ruleFromNode(e) || (l = this.parser.matchTag(e, this, r));
    e: if (c ? c.ignore : k1.hasOwnProperty(o))
      this.findInside(e), this.ignoreFallback(e, t);
    else if (!c || c.skip || c.closeParent) {
      c && c.closeParent ? this.open = Math.max(0, this.open - 1) : c && c.skip.nodeType && (e = c.skip);
      let d, f = this.needsBlock;
      if (Ud.hasOwnProperty(o))
        s.content.length && s.content[0].isInline && this.open && (this.open--, s = this.top), d = !0, s.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e, t);
        break e;
      }
      let h = c && c.skip ? t : this.readStyles(e, t);
      h && this.addAll(e, h), d && this.sync(s), this.needsBlock = f;
    } else {
      let d = this.readStyles(e, t);
      d && this.addElementByRule(e, c, d, c.consuming === !1 ? l : void 0);
    }
    this.localPreserveWS = i;
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(e, t) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`), t);
  }
  // Called for ignored nodes
  ignoreFallback(e, t) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), t, !0);
  }
  // Run any style parser associated with the node's styles. Either
  // return an updated array of marks, or null to indicate some of the
  // styles had a rule with `ignore` set.
  readStyles(e, t) {
    let r = e.style;
    if (r && r.length)
      for (let i = 0; i < this.parser.matchedStyles.length; i++) {
        let s = this.parser.matchedStyles[i], o = r.getPropertyValue(s);
        if (o)
          for (let l = void 0; ; ) {
            let c = this.parser.matchStyle(s, o, this, l);
            if (!c)
              break;
            if (c.ignore)
              return null;
            if (c.clearMark ? t = t.filter((d) => !c.clearMark(d)) : t = t.concat(this.parser.schema.marks[c.mark].create(c.attrs)), c.consuming === !1)
              l = c;
            else
              break;
          }
      }
    return t;
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(e, t, r, i) {
    let s, o;
    if (t.node)
      if (o = this.parser.schema.nodes[t.node], o.isLeaf)
        this.insertNode(o.create(t.attrs), r, e.nodeName == "BR") || this.leafFallback(e, r);
      else {
        let c = this.enter(o, t.attrs || null, r, t.preserveWhitespace);
        c && (s = !0, r = c);
      }
    else {
      let c = this.parser.schema.marks[t.mark];
      r = r.concat(c.create(t.attrs));
    }
    let l = this.top;
    if (o && o.isLeaf)
      this.findInside(e);
    else if (i)
      this.addElement(e, r, i);
    else if (t.getContent)
      this.findInside(e), t.getContent(e, this.parser.schema).forEach((c) => this.insertNode(c, r, !1));
    else {
      let c = e;
      typeof t.contentElement == "string" ? c = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? c = t.contentElement(e) : t.contentElement && (c = t.contentElement), this.findAround(e, c, !0), this.addAll(c, r), this.findAround(e, c, !1);
    }
    s && this.sync(l) && this.open--;
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, t, r, i) {
    let s = r || 0;
    for (let o = r ? e.childNodes[r] : e.firstChild, l = i == null ? null : e.childNodes[i]; o != l; o = o.nextSibling, ++s)
      this.findAtPoint(e, s), this.addDOM(o, t);
    this.findAtPoint(e, s);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e, t, r) {
    let i, s;
    for (let o = this.open, l = 0; o >= 0; o--) {
      let c = this.nodes[o], d = c.findWrapping(e);
      if (d && (!i || i.length > d.length + l) && (i = d, s = c, !d.length))
        break;
      if (c.solid) {
        if (r)
          break;
        l += 2;
      }
    }
    if (!i)
      return null;
    this.sync(s);
    for (let o = 0; o < i.length; o++)
      t = this.enterInner(i[o], null, t, !1);
    return t;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e, t, r) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let s = this.textblockFromContext();
      s && (t = this.enterInner(s, null, t));
    }
    let i = this.findPlace(e, t, r);
    if (i) {
      this.closeExtra();
      let s = this.top;
      s.match && (s.match = s.match.matchType(e.type));
      let o = re.none;
      for (let l of i.concat(e.marks))
        (s.type ? s.type.allowsMarkType(l.type) : Yc(l.type, e.type)) && (o = l.addToSet(o));
      return s.content.push(e.mark(o)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, t, r, i) {
    let s = this.findPlace(e.create(t), r, !1);
    return s && (s = this.enterInner(e, t, r, !0, i)), s;
  }
  // Open a node of the given type
  enterInner(e, t, r, i = !1, s) {
    this.closeExtra();
    let o = this.top;
    o.match = o.match && o.match.matchType(e);
    let l = $c(e, s, o.options);
    o.options & _r && o.content.length == 0 && (l |= _r);
    let c = re.none;
    return r = r.filter((d) => (o.type ? o.type.allowsMarkType(d.type) : Yc(d.type, e)) ? (c = d.addToSet(c), !1) : !0), this.nodes.push(new Ni(e, t, c, i, null, l)), this.open++, r;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(e = !1) {
    let t = this.nodes.length - 1;
    if (t > this.open) {
      for (; t > this.open; t--)
        this.nodes[t - 1].content.push(this.nodes[t].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
  }
  sync(e) {
    for (let t = this.open; t >= 0; t--) {
      if (this.nodes[t] == e)
        return this.open = t, !0;
      this.localPreserveWS && (this.nodes[t].options |= qr);
    }
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let t = this.open; t >= 0; t--) {
      let r = this.nodes[t].content;
      for (let i = r.length - 1; i >= 0; i--)
        e += r[i].nodeSize;
      t && e++;
    }
    return e;
  }
  findAtPoint(e, t) {
    if (this.find)
      for (let r = 0; r < this.find.length; r++)
        this.find[r].node == e && this.find[r].offset == t && (this.find[r].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos);
  }
  findAround(e, t, r) {
    if (e != t && this.find)
      for (let i = 0; i < this.find.length; i++)
        this.find[i].pos == null && e.nodeType == 1 && e.contains(this.find[i].node) && t.compareDocumentPosition(this.find[i].node) & (r ? 2 : 4) && (this.find[i].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset));
  }
  // Determines whether the given context string matches this context.
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let t = e.split("/"), r = this.options.context, i = !this.isOpen && (!r || r.parent.type == this.nodes[0].type), s = -(r ? r.depth + 1 : 0) + (i ? 0 : 1), o = (l, c) => {
      for (; l >= 0; l--) {
        let d = t[l];
        if (d == "") {
          if (l == t.length - 1 || l == 0)
            continue;
          for (; c >= s; c--)
            if (o(l - 1, c))
              return !0;
          return !1;
        } else {
          let f = c > 0 || c == 0 && i ? this.nodes[c].type : r && c >= s ? r.node(c - s).type : null;
          if (!f || f.name != d && !f.isInGroup(d))
            return !1;
          c--;
        }
      }
      return !0;
    };
    return o(t.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let t = e.depth; t >= 0; t--) {
        let r = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
        if (r && r.isTextblock && r.defaultAttrs)
          return r;
      }
    for (let t in this.parser.schema.nodes) {
      let r = this.parser.schema.nodes[t];
      if (r.isTextblock && r.defaultAttrs)
        return r;
    }
  }
}
function S1(n) {
  for (let e = n.firstChild, t = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && qd.hasOwnProperty(r) && t ? (t.appendChild(e), e = t) : r == "li" ? t = e : r && (t = null);
  }
}
function x1(n, e) {
  return (n.matches || n.msMatchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector).call(n, e);
}
function Vc(n) {
  let e = {};
  for (let t in n)
    e[t] = n[t];
  return e;
}
function Yc(n, e) {
  let t = e.schema.nodes;
  for (let r in t) {
    let i = t[r];
    if (!i.allowsMarkType(n))
      continue;
    let s = [], o = (l) => {
      s.push(l);
      for (let c = 0; c < l.edgeCount; c++) {
        let { type: d, next: f } = l.edge(c);
        if (d == e || s.indexOf(f) < 0 && o(f))
          return !0;
      }
    };
    if (o(i.contentMatch))
      return !0;
  }
}
class Hn {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(e, t) {
    this.nodes = e, this.marks = t;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(e, t = {}, r) {
    r || (r = jo(t).createDocumentFragment());
    let i = r, s = [];
    return e.forEach((o) => {
      if (s.length || o.marks.length) {
        let l = 0, c = 0;
        for (; l < s.length && c < o.marks.length; ) {
          let d = o.marks[c];
          if (!this.marks[d.type.name]) {
            c++;
            continue;
          }
          if (!d.eq(s[l][0]) || d.type.spec.spanning === !1)
            break;
          l++, c++;
        }
        for (; l < s.length; )
          i = s.pop()[1];
        for (; c < o.marks.length; ) {
          let d = o.marks[c++], f = this.serializeMark(d, o.isInline, t);
          f && (s.push([d, i]), i.appendChild(f.dom), i = f.contentDOM || f.dom);
        }
      }
      i.appendChild(this.serializeNodeInner(o, t));
    }), r;
  }
  /**
  @internal
  */
  serializeNodeInner(e, t) {
    let { dom: r, contentDOM: i } = Yi(jo(t), this.nodes[e.type.name](e), null, e.attrs);
    if (i) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, t, i);
    }
    return r;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(e, t = {}) {
    let r = this.serializeNodeInner(e, t);
    for (let i = e.marks.length - 1; i >= 0; i--) {
      let s = this.serializeMark(e.marks[i], e.isInline, t);
      s && ((s.contentDOM || s.dom).appendChild(r), r = s.dom);
    }
    return r;
  }
  /**
  @internal
  */
  serializeMark(e, t, r = {}) {
    let i = this.marks[e.type.name];
    return i && Yi(jo(r), i(e, t), null, e.attrs);
  }
  static renderSpec(e, t, r = null, i) {
    return Yi(e, t, r, i);
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new Hn(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let t = jc(e.nodes);
    return t.text || (t.text = (r) => r.text), t;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return jc(e.marks);
  }
}
function jc(n) {
  let e = {};
  for (let t in n) {
    let r = n[t].spec.toDOM;
    r && (e[t] = r);
  }
  return e;
}
function jo(n) {
  return n.document || window.document;
}
const Uc = /* @__PURE__ */ new WeakMap();
function w1(n) {
  let e = Uc.get(n);
  return e === void 0 && Uc.set(n, e = M1(n)), e;
}
function M1(n) {
  let e = null;
  function t(r) {
    if (r && typeof r == "object")
      if (Array.isArray(r))
        if (typeof r[0] == "string")
          e || (e = []), e.push(r);
        else
          for (let i = 0; i < r.length; i++)
            t(r[i]);
      else
        for (let i in r)
          t(r[i]);
  }
  return t(n), e;
}
function Yi(n, e, t, r) {
  if (typeof e == "string")
    return { dom: n.createTextNode(e) };
  if (e.nodeType != null)
    return { dom: e };
  if (e.dom && e.dom.nodeType != null)
    return e;
  let i = e[0], s;
  if (typeof i != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (r && (s = w1(r)) && s.indexOf(e) > -1)
    throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  let o = i.indexOf(" ");
  o > 0 && (t = i.slice(0, o), i = i.slice(o + 1));
  let l, c = t ? n.createElementNS(t, i) : n.createElement(i), d = e[1], f = 1;
  if (d && typeof d == "object" && d.nodeType == null && !Array.isArray(d)) {
    f = 2;
    for (let h in d)
      if (d[h] != null) {
        let g = h.indexOf(" ");
        g > 0 ? c.setAttributeNS(h.slice(0, g), h.slice(g + 1), d[h]) : h == "style" && c.style ? c.style.cssText = d[h] : c.setAttribute(h, d[h]);
      }
  }
  for (let h = f; h < e.length; h++) {
    let g = e[h];
    if (g === 0) {
      if (h < e.length - 1 || h > f)
        throw new RangeError("Content hole must be the only child of its parent node");
      return { dom: c, contentDOM: c };
    } else {
      let { dom: y, contentDOM: b } = Yi(n, g, t, r);
      if (c.appendChild(y), b) {
        if (l)
          throw new RangeError("Multiple content holes");
        l = b;
      }
    }
  }
  return { dom: c, contentDOM: l };
}
const Gd = 65535, Kd = Math.pow(2, 16);
function C1(n, e) {
  return n + e * Kd;
}
function qc(n) {
  return n & Gd;
}
function T1(n) {
  return (n - (n & Gd)) / Kd;
}
const Jd = 1, Qd = 2, ji = 4, Zd = 8;
class Al {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.delInfo = t, this.recover = r;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & Zd) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (Jd | ji)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (Qd | ji)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & ji) > 0;
  }
}
class Ze {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, t = !1) {
    if (this.ranges = e, this.inverted = t, !e.length && Ze.empty)
      return Ze.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let t = 0, r = qc(e);
    if (!this.inverted)
      for (let i = 0; i < r; i++)
        t += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[r * 3] + t + T1(e);
  }
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  map(e, t = 1) {
    return this._map(e, t, !0);
  }
  /**
  @internal
  */
  _map(e, t, r) {
    let i = 0, s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let c = this.ranges[l] - (this.inverted ? i : 0);
      if (c > e)
        break;
      let d = this.ranges[l + s], f = this.ranges[l + o], h = c + d;
      if (e <= h) {
        let g = d ? e == c ? -1 : e == h ? 1 : t : t, y = c + i + (g < 0 ? 0 : f);
        if (r)
          return y;
        let b = e == (t < 0 ? c : h) ? null : C1(l / 3, e - c), S = e == c ? Qd : e == h ? Jd : ji;
        return (t < 0 ? e != c : e != h) && (S |= Zd), new Al(y, S, b);
      }
      i += f - d;
    }
    return r ? e + i : new Al(e + i, 0, null);
  }
  /**
  @internal
  */
  touches(e, t) {
    let r = 0, i = qc(t), s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let c = this.ranges[l] - (this.inverted ? r : 0);
      if (c > e)
        break;
      let d = this.ranges[l + s], f = c + d;
      if (e <= f && l == i * 3)
        return !0;
      r += this.ranges[l + o] - d;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let t = this.inverted ? 2 : 1, r = this.inverted ? 1 : 2;
    for (let i = 0, s = 0; i < this.ranges.length; i += 3) {
      let o = this.ranges[i], l = o - (this.inverted ? s : 0), c = o + (this.inverted ? 0 : s), d = this.ranges[i + t], f = this.ranges[i + r];
      e(l, l + d, c, c + f), s += f - d;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new Ze(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(e) {
    return e == 0 ? Ze.empty : new Ze(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
Ze.empty = new Ze([]);
class Gr {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(e, t, r = 0, i = e ? e.length : 0) {
    this.mirror = t, this.from = r, this.to = i, this._maps = e || [], this.ownData = !(e || t);
  }
  /**
  The step maps in this mapping.
  */
  get maps() {
    return this._maps;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(e = 0, t = this.maps.length) {
    return new Gr(this._maps, this.mirror, e, t);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(e, t) {
    this.ownData || (this._maps = this._maps.slice(), this.mirror = this.mirror && this.mirror.slice(), this.ownData = !0), this.to = this._maps.push(e), t != null && this.setMirror(this._maps.length - 1, t);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(e) {
    for (let t = 0, r = this._maps.length; t < e._maps.length; t++) {
      let i = e.getMirror(t);
      this.appendMap(e._maps[t], i != null && i < t ? r + i : void 0);
    }
  }
  /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */
  getMirror(e) {
    if (this.mirror) {
      for (let t = 0; t < this.mirror.length; t++)
        if (this.mirror[t] == e)
          return this.mirror[t + (t % 2 ? -1 : 1)];
    }
  }
  /**
  @internal
  */
  setMirror(e, t) {
    this.mirror || (this.mirror = []), this.mirror.push(e, t);
  }
  /**
  Append the inverse of the given mapping to this one.
  */
  appendMappingInverted(e) {
    for (let t = e.maps.length - 1, r = this._maps.length + e._maps.length; t >= 0; t--) {
      let i = e.getMirror(t);
      this.appendMap(e._maps[t].invert(), i != null && i > t ? r - i - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let e = new Gr();
    return e.appendMappingInverted(this), e;
  }
  /**
  Map a position through this mapping.
  */
  map(e, t = 1) {
    if (this.mirror)
      return this._map(e, t, !0);
    for (let r = this.from; r < this.to; r++)
      e = this._maps[r].map(e, t);
    return e;
  }
  /**
  Map a position through this mapping, returning a mapping
  result.
  */
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  /**
  @internal
  */
  _map(e, t, r) {
    let i = 0;
    for (let s = this.from; s < this.to; s++) {
      let o = this._maps[s], l = o.mapResult(e, t);
      if (l.recover != null) {
        let c = this.getMirror(s);
        if (c != null && c > s && c < this.to) {
          s = c, e = this._maps[c].recover(l.recover);
          continue;
        }
      }
      i |= l.delInfo, e = l.pos;
    }
    return r ? e : new Al(e, i, null);
  }
}
const Uo = /* @__PURE__ */ Object.create(null);
class Fe {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return Ze.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(e) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(e, t) {
    if (!t || !t.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let r = Uo[t.stepType];
    if (!r)
      throw new RangeError(`No step type ${t.stepType} defined`);
    return r.fromJSON(e, t);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, t) {
    if (e in Uo)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return Uo[e] = t, t.prototype.jsonID = e, t;
  }
}
class me {
  /**
  @internal
  */
  constructor(e, t) {
    this.doc = e, this.failed = t;
  }
  /**
  Create a successful step result.
  */
  static ok(e) {
    return new me(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new me(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, t, r, i) {
    try {
      return me.ok(e.replace(t, r, i));
    } catch (s) {
      if (s instanceof es)
        return me.fail(s.message);
      throw s;
    }
  }
}
function ca(n, e, t) {
  let r = [];
  for (let i = 0; i < n.childCount; i++) {
    let s = n.child(i);
    s.content.size && (s = s.copy(ca(s.content, e, s))), s.isInline && (s = e(s, t, i)), r.push(s);
  }
  return A.fromArray(r);
}
class nn extends Fe {
  /**
  Create a mark step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = e.resolve(this.from), i = r.node(r.sharedDepth(this.to)), s = new L(ca(t.content, (o, l) => !o.isAtom || !l.type.allowsMarkType(this.mark.type) ? o : o.mark(this.mark.addToSet(o.marks)), i), t.openStart, t.openEnd);
    return me.fromReplace(e, this.from, this.to, s);
  }
  invert() {
    return new St(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new nn(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof nn && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new nn(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new nn(t.from, t.to, e.markFromJSON(t.mark));
  }
}
Fe.jsonID("addMark", nn);
class St extends Fe {
  /**
  Create a mark-removing step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = new L(ca(t.content, (i) => i.mark(this.mark.removeFromSet(i.marks)), e), t.openStart, t.openEnd);
    return me.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new nn(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new St(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof St && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new St(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new St(t.from, t.to, e.markFromJSON(t.mark));
  }
}
Fe.jsonID("removeMark", St);
class rn extends Fe {
  /**
  Create a node mark step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return me.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
    return me.fromReplace(e, this.pos, this.pos + 1, new L(A.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    if (t) {
      let r = this.mark.addToSet(t.marks);
      if (r.length == t.marks.length) {
        for (let i = 0; i < t.marks.length; i++)
          if (!t.marks[i].isInSet(r))
            return new rn(this.pos, t.marks[i]);
        return new rn(this.pos, this.mark);
      }
    }
    return new Ln(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new rn(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new rn(t.pos, e.markFromJSON(t.mark));
  }
}
Fe.jsonID("addNodeMark", rn);
class Ln extends Fe {
  /**
  Create a mark-removing step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return me.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
    return me.fromReplace(e, this.pos, this.pos + 1, new L(A.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    return !t || !this.mark.isInSet(t.marks) ? this : new rn(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new Ln(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new Ln(t.pos, e.markFromJSON(t.mark));
  }
}
Fe.jsonID("removeNodeMark", Ln);
class xe extends Fe {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, t, r, i = !1) {
    super(), this.from = e, this.to = t, this.slice = r, this.structure = i;
  }
  apply(e) {
    return this.structure && Dl(e, this.from, this.to) ? me.fail("Structure replace would overwrite content") : me.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new Ze([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new xe(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deletedAcross && r.deletedAcross ? null : new xe(t.pos, Math.max(t.pos, r.pos), this.slice, this.structure);
  }
  merge(e) {
    if (!(e instanceof xe) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let t = this.slice.size + e.slice.size == 0 ? L.empty : new L(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new xe(this.from, this.to + (e.to - e.from), t, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let t = this.slice.size + e.slice.size == 0 ? L.empty : new L(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new xe(e.from, this.to, t, this.structure);
    } else
      return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new xe(t.from, t.to, L.fromJSON(e, t.slice), !!t.structure);
  }
}
Fe.jsonID("replace", xe);
class we extends Fe {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, t, r, i, s, o, l = !1) {
    super(), this.from = e, this.to = t, this.gapFrom = r, this.gapTo = i, this.slice = s, this.insert = o, this.structure = l;
  }
  apply(e) {
    if (this.structure && (Dl(e, this.from, this.gapFrom) || Dl(e, this.gapTo, this.to)))
      return me.fail("Structure gap-replace would overwrite content");
    let t = e.slice(this.gapFrom, this.gapTo);
    if (t.openStart || t.openEnd)
      return me.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, t.content);
    return r ? me.fromReplace(e, this.from, this.to, r) : me.fail("Content does not fit in gap");
  }
  getMap() {
    return new Ze([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let t = this.gapTo - this.gapFrom;
    return new we(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), i = this.from == this.gapFrom ? t.pos : e.map(this.gapFrom, -1), s = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
    return t.deletedAcross && r.deletedAcross || i < t.pos || s > r.pos ? null : new we(t.pos, r.pos, i, s, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number" || typeof t.gapFrom != "number" || typeof t.gapTo != "number" || typeof t.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new we(t.from, t.to, t.gapFrom, t.gapTo, L.fromJSON(e, t.slice), t.insert, !!t.structure);
  }
}
Fe.jsonID("replaceAround", we);
function Dl(n, e, t) {
  let r = n.resolve(e), i = t - e, s = r.depth;
  for (; i > 0 && s > 0 && r.indexAfter(s) == r.node(s).childCount; )
    s--, i--;
  if (i > 0) {
    let o = r.node(s).maybeChild(r.indexAfter(s));
    for (; i > 0; ) {
      if (!o || o.isLeaf)
        return !0;
      o = o.firstChild, i--;
    }
  }
  return !1;
}
function O1(n, e, t, r) {
  let i = [], s = [], o, l;
  n.doc.nodesBetween(e, t, (c, d, f) => {
    if (!c.isInline)
      return;
    let h = c.marks;
    if (!r.isInSet(h) && f.type.allowsMarkType(r.type)) {
      let g = Math.max(d, e), y = Math.min(d + c.nodeSize, t), b = r.addToSet(h);
      for (let S = 0; S < h.length; S++)
        h[S].isInSet(b) || (o && o.to == g && o.mark.eq(h[S]) ? o.to = y : i.push(o = new St(g, y, h[S])));
      l && l.to == g ? l.to = y : s.push(l = new nn(g, y, r));
    }
  }), i.forEach((c) => n.step(c)), s.forEach((c) => n.step(c));
}
function v1(n, e, t, r) {
  let i = [], s = 0;
  n.doc.nodesBetween(e, t, (o, l) => {
    if (!o.isInline)
      return;
    s++;
    let c = null;
    if (r instanceof Ys) {
      let d = o.marks, f;
      for (; f = r.isInSet(d); )
        (c || (c = [])).push(f), d = f.removeFromSet(d);
    } else r ? r.isInSet(o.marks) && (c = [r]) : c = o.marks;
    if (c && c.length) {
      let d = Math.min(l + o.nodeSize, t);
      for (let f = 0; f < c.length; f++) {
        let h = c[f], g;
        for (let y = 0; y < i.length; y++) {
          let b = i[y];
          b.step == s - 1 && h.eq(i[y].style) && (g = b);
        }
        g ? (g.to = d, g.step = s) : i.push({ style: h, from: Math.max(l, e), to: d, step: s });
      }
    }
  }), i.forEach((o) => n.step(new St(o.from, o.to, o.style)));
}
function ua(n, e, t, r = t.contentMatch, i = !0) {
  let s = n.doc.nodeAt(e), o = [], l = e + 1;
  for (let c = 0; c < s.childCount; c++) {
    let d = s.child(c), f = l + d.nodeSize, h = r.matchType(d.type);
    if (!h)
      o.push(new xe(l, f, L.empty));
    else {
      r = h;
      for (let g = 0; g < d.marks.length; g++)
        t.allowsMarkType(d.marks[g].type) || n.step(new St(l, f, d.marks[g]));
      if (i && d.isText && t.whitespace != "pre") {
        let g, y = /\r?\n|\r/g, b;
        for (; g = y.exec(d.text); )
          b || (b = new L(A.from(t.schema.text(" ", t.allowedMarks(d.marks))), 0, 0)), o.push(new xe(l + g.index, l + g.index + g[0].length, b));
      }
    }
    l = f;
  }
  if (!r.validEnd) {
    let c = r.fillBefore(A.empty, !0);
    n.replace(l, l, new L(c, 0, 0));
  }
  for (let c = o.length - 1; c >= 0; c--)
    n.step(o[c]);
}
function E1(n, e, t) {
  return (e == 0 || n.canReplace(e, n.childCount)) && (t == n.childCount || n.canReplace(0, t));
}
function hr(n) {
  let t = n.parent.content.cutByIndex(n.startIndex, n.endIndex);
  for (let r = n.depth, i = 0, s = 0; ; --r) {
    let o = n.$from.node(r), l = n.$from.index(r) + i, c = n.$to.indexAfter(r) - s;
    if (r < n.depth && o.canReplace(l, c, t))
      return r;
    if (r == 0 || o.type.spec.isolating || !E1(o, l, c))
      break;
    l && (i = 1), c < o.childCount && (s = 1);
  }
  return null;
}
function A1(n, e, t) {
  let { $from: r, $to: i, depth: s } = e, o = r.before(s + 1), l = i.after(s + 1), c = o, d = l, f = A.empty, h = 0;
  for (let b = s, S = !1; b > t; b--)
    S || r.index(b) > 0 ? (S = !0, f = A.from(r.node(b).copy(f)), h++) : c--;
  let g = A.empty, y = 0;
  for (let b = s, S = !1; b > t; b--)
    S || i.after(b + 1) < i.end(b) ? (S = !0, g = A.from(i.node(b).copy(g)), y++) : d++;
  n.step(new we(c, d, o, l, new L(f.append(g), h, y), f.size - h, !0));
}
function da(n, e, t = null, r = n) {
  let i = D1(n, e), s = i && N1(r, e);
  return s ? i.map(Gc).concat({ type: e, attrs: t }).concat(s.map(Gc)) : null;
}
function Gc(n) {
  return { type: n, attrs: null };
}
function D1(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, s = t.contentMatchAt(r).findWrapping(e);
  if (!s)
    return null;
  let o = s.length ? s[0] : e;
  return t.canReplaceWith(r, i, o) ? s : null;
}
function N1(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, s = t.child(r), o = e.contentMatch.findWrapping(s.type);
  if (!o)
    return null;
  let c = (o.length ? o[o.length - 1] : e).contentMatch;
  for (let d = r; c && d < i; d++)
    c = c.matchType(t.child(d).type);
  return !c || !c.validEnd ? null : o;
}
function R1(n, e, t) {
  let r = A.empty;
  for (let o = t.length - 1; o >= 0; o--) {
    if (r.size) {
      let l = t[o].type.contentMatch.matchFragment(r);
      if (!l || !l.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = A.from(t[o].type.create(t[o].attrs, r));
  }
  let i = e.start, s = e.end;
  n.step(new we(i, s, i, s, new L(r, 0, 0), t.length, !0));
}
function I1(n, e, t, r, i) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let s = n.steps.length;
  n.doc.nodesBetween(e, t, (o, l) => {
    let c = typeof i == "function" ? i(o) : i;
    if (o.isTextblock && !o.hasMarkup(r, c) && _1(n.doc, n.mapping.slice(s).map(l), r)) {
      let d = null;
      if (r.schema.linebreakReplacement) {
        let y = r.whitespace == "pre", b = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
        y && !b ? d = !1 : !y && b && (d = !0);
      }
      d === !1 && ef(n, o, l, s), ua(n, n.mapping.slice(s).map(l, 1), r, void 0, d === null);
      let f = n.mapping.slice(s), h = f.map(l, 1), g = f.map(l + o.nodeSize, 1);
      return n.step(new we(h, g, h + 1, g - 1, new L(A.from(r.create(c, null, o.marks)), 0, 0), 1, !0)), d === !0 && Xd(n, o, l, s), !1;
    }
  });
}
function Xd(n, e, t, r) {
  e.forEach((i, s) => {
    if (i.isText) {
      let o, l = /\r?\n|\r/g;
      for (; o = l.exec(i.text); ) {
        let c = n.mapping.slice(r).map(t + 1 + s + o.index);
        n.replaceWith(c, c + 1, e.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function ef(n, e, t, r) {
  e.forEach((i, s) => {
    if (i.type == i.type.schema.linebreakReplacement) {
      let o = n.mapping.slice(r).map(t + 1 + s);
      n.replaceWith(o, o + 1, e.type.schema.text(`
`));
    }
  });
}
function _1(n, e, t) {
  let r = n.resolve(e), i = r.index();
  return r.parent.canReplaceWith(i, i + 1, t);
}
function P1(n, e, t, r, i) {
  let s = n.doc.nodeAt(e);
  if (!s)
    throw new RangeError("No node at given position");
  t || (t = s.type);
  let o = t.create(r, null, i || s.marks);
  if (s.isLeaf)
    return n.replaceWith(e, e + s.nodeSize, o);
  if (!t.validContent(s.content))
    throw new RangeError("Invalid content for node type " + t.name);
  n.step(new we(e, e + s.nodeSize, e + 1, e + s.nodeSize - 1, new L(A.from(o), 0, 0), 1, !0));
}
function Ht(n, e, t = 1, r) {
  let i = n.resolve(e), s = i.depth - t, o = r && r[r.length - 1] || i.parent;
  if (s < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !o.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
    return !1;
  for (let d = i.depth - 1, f = t - 2; d > s; d--, f--) {
    let h = i.node(d), g = i.index(d);
    if (h.type.spec.isolating)
      return !1;
    let y = h.content.cutByIndex(g, h.childCount), b = r && r[f + 1];
    b && (y = y.replaceChild(0, b.type.create(b.attrs)));
    let S = r && r[f] || h;
    if (!h.canReplace(g + 1, h.childCount) || !S.type.validContent(y))
      return !1;
  }
  let l = i.indexAfter(s), c = r && r[0];
  return i.node(s).canReplaceWith(l, l, c ? c.type : i.node(s + 1).type);
}
function L1(n, e, t = 1, r) {
  let i = n.doc.resolve(e), s = A.empty, o = A.empty;
  for (let l = i.depth, c = i.depth - t, d = t - 1; l > c; l--, d--) {
    s = A.from(i.node(l).copy(s));
    let f = r && r[d];
    o = A.from(f ? f.type.create(f.attrs, o) : i.node(l).copy(o));
  }
  n.step(new xe(e, e, new L(s.append(o), t, t), !0));
}
function hn(n, e) {
  let t = n.resolve(e), r = t.index();
  return tf(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(r, r + 1);
}
function F1(n, e) {
  e.content.size || n.type.compatibleContent(e.type);
  let t = n.contentMatchAt(n.childCount), { linebreakReplacement: r } = n.type.schema;
  for (let i = 0; i < e.childCount; i++) {
    let s = e.child(i), o = s.type == r ? n.type.schema.nodes.text : s.type;
    if (t = t.matchType(o), !t || !n.type.allowsMarks(s.marks))
      return !1;
  }
  return t.validEnd;
}
function tf(n, e) {
  return !!(n && e && !n.isLeaf && F1(n, e));
}
function js(n, e, t = -1) {
  let r = n.resolve(e);
  for (let i = r.depth; ; i--) {
    let s, o, l = r.index(i);
    if (i == r.depth ? (s = r.nodeBefore, o = r.nodeAfter) : t > 0 ? (s = r.node(i + 1), l++, o = r.node(i).maybeChild(l)) : (s = r.node(i).maybeChild(l - 1), o = r.node(i + 1)), s && !s.isTextblock && tf(s, o) && r.node(i).canReplace(l, l + 1))
      return e;
    if (i == 0)
      break;
    e = t < 0 ? r.before(i) : r.after(i);
  }
}
function B1(n, e, t) {
  let r = null, { linebreakReplacement: i } = n.doc.type.schema, s = n.doc.resolve(e - t), o = s.node().type;
  if (i && o.inlineContent) {
    let f = o.whitespace == "pre", h = !!o.contentMatch.matchType(i);
    f && !h ? r = !1 : !f && h && (r = !0);
  }
  let l = n.steps.length;
  if (r === !1) {
    let f = n.doc.resolve(e + t);
    ef(n, f.node(), f.before(), l);
  }
  o.inlineContent && ua(n, e + t - 1, o, s.node().contentMatchAt(s.index()), r == null);
  let c = n.mapping.slice(l), d = c.map(e - t);
  if (n.step(new xe(d, c.map(e + t, -1), L.empty, !0)), r === !0) {
    let f = n.doc.resolve(d);
    Xd(n, f.node(), f.before(), n.steps.length);
  }
  return n;
}
function z1(n, e, t) {
  let r = n.resolve(e);
  if (r.parent.canReplaceWith(r.index(), r.index(), t))
    return e;
  if (r.parentOffset == 0)
    for (let i = r.depth - 1; i >= 0; i--) {
      let s = r.index(i);
      if (r.node(i).canReplaceWith(s, s, t))
        return r.before(i + 1);
      if (s > 0)
        return null;
    }
  if (r.parentOffset == r.parent.content.size)
    for (let i = r.depth - 1; i >= 0; i--) {
      let s = r.indexAfter(i);
      if (r.node(i).canReplaceWith(s, s, t))
        return r.after(i + 1);
      if (s < r.node(i).childCount)
        return null;
    }
  return null;
}
function nf(n, e, t) {
  let r = n.resolve(e);
  if (!t.content.size)
    return e;
  let i = t.content;
  for (let s = 0; s < t.openStart; s++)
    i = i.firstChild.content;
  for (let s = 1; s <= (t.openStart == 0 && t.size ? 2 : 1); s++)
    for (let o = r.depth; o >= 0; o--) {
      let l = o == r.depth ? 0 : r.pos <= (r.start(o + 1) + r.end(o + 1)) / 2 ? -1 : 1, c = r.index(o) + (l > 0 ? 1 : 0), d = r.node(o), f = !1;
      if (s == 1)
        f = d.canReplace(c, c, i);
      else {
        let h = d.contentMatchAt(c).findWrapping(i.firstChild.type);
        f = h && d.canReplaceWith(c, c, h[0]);
      }
      if (f)
        return l == 0 ? r.pos : l < 0 ? r.before(o + 1) : r.after(o + 1);
    }
  return null;
}
function Us(n, e, t = e, r = L.empty) {
  if (e == t && !r.size)
    return null;
  let i = n.resolve(e), s = n.resolve(t);
  return rf(i, s, r) ? new xe(e, t, r) : new H1(i, s, r).fit();
}
function rf(n, e, t) {
  return !t.openStart && !t.openEnd && n.start() == e.start() && n.parent.canReplace(n.index(), e.index(), t.content);
}
class H1 {
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.unplaced = r, this.frontier = [], this.placed = A.empty;
    for (let i = 0; i <= e.depth; i++) {
      let s = e.node(i);
      this.frontier.push({
        type: s.type,
        match: s.contentMatchAt(e.indexAfter(i))
      });
    }
    for (let i = e.depth; i > 0; i--)
      this.placed = A.from(e.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let d = this.findFittable();
      d ? this.placeNodes(d) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), t = this.placed.size - this.depth - this.$from.depth, r = this.$from, i = this.close(e < 0 ? this.$to : r.doc.resolve(e));
    if (!i)
      return null;
    let s = this.placed, o = r.depth, l = i.depth;
    for (; o && l && s.childCount == 1; )
      s = s.firstChild.content, o--, l--;
    let c = new L(s, o, l);
    return e > -1 ? new we(r.pos, e, this.$to.pos, this.$to.end(), c, t) : c.size || r.pos != this.$to.pos ? new xe(r.pos, i.pos, c) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let t = this.unplaced.content, r = 0, i = this.unplaced.openEnd; r < e; r++) {
      let s = t.firstChild;
      if (t.childCount > 1 && (i = 0), s.type.spec.isolating && i <= r) {
        e = r;
        break;
      }
      t = s.content;
    }
    for (let t = 1; t <= 2; t++)
      for (let r = t == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
        let i, s = null;
        r ? (s = qo(this.unplaced.content, r - 1).firstChild, i = s.content) : i = this.unplaced.content;
        let o = i.firstChild;
        for (let l = this.depth; l >= 0; l--) {
          let { type: c, match: d } = this.frontier[l], f, h = null;
          if (t == 1 && (o ? d.matchType(o.type) || (h = d.fillBefore(A.from(o), !1)) : s && c.compatibleContent(s.type)))
            return { sliceDepth: r, frontierDepth: l, parent: s, inject: h };
          if (t == 2 && o && (f = d.findWrapping(o.type)))
            return { sliceDepth: r, frontierDepth: l, parent: s, wrap: f };
          if (s && d.matchType(s.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = qo(e, t);
    return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new L(e, t + 1, Math.max(r, i.size + t >= e.size - r ? t + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = qo(e, t);
    if (i.childCount <= 1 && t > 0) {
      let s = e.size - t <= t + i.size;
      this.unplaced = new L(Ar(e, t - 1, 1), t - 1, s ? t - 1 : r);
    } else
      this.unplaced = new L(Ar(e, t, 1), t, r);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: t, parent: r, inject: i, wrap: s }) {
    for (; this.depth > t; )
      this.closeFrontierNode();
    if (s)
      for (let S = 0; S < s.length; S++)
        this.openFrontierNode(s[S]);
    let o = this.unplaced, l = r ? r.content : o.content, c = o.openStart - e, d = 0, f = [], { match: h, type: g } = this.frontier[t];
    if (i) {
      for (let S = 0; S < i.childCount; S++)
        f.push(i.child(S));
      h = h.matchFragment(i);
    }
    let y = l.size + e - (o.content.size - o.openEnd);
    for (; d < l.childCount; ) {
      let S = l.child(d), x = h.matchType(S.type);
      if (!x)
        break;
      d++, (d > 1 || c == 0 || S.content.size) && (h = x, f.push(sf(S.mark(g.allowedMarks(S.marks)), d == 1 ? c : 0, d == l.childCount ? y : -1)));
    }
    let b = d == l.childCount;
    b || (y = -1), this.placed = Dr(this.placed, t, A.from(f)), this.frontier[t].match = h, b && y < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let S = 0, x = l; S < y; S++) {
      let w = x.lastChild;
      this.frontier.push({ type: w.type, match: w.contentMatchAt(w.childCount) }), x = w.content;
    }
    this.unplaced = b ? e == 0 ? L.empty : new L(Ar(o.content, e - 1, 1), e - 1, y < 0 ? o.openEnd : e - 1) : new L(Ar(o.content, e, d), o.openStart, o.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], t;
    if (!e.type.isTextblock || !Go(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, i = this.$to.after(r);
    for (; r > 1 && i == this.$to.end(--r); )
      ++i;
    return i;
  }
  findCloseLevel(e) {
    e: for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
      let { match: r, type: i } = this.frontier[t], s = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), o = Go(e, t, i, r, s);
      if (o) {
        for (let l = t - 1; l >= 0; l--) {
          let { match: c, type: d } = this.frontier[l], f = Go(e, l, d, c, !0);
          if (!f || f.childCount)
            continue e;
        }
        return { depth: t, fit: o, move: s ? e.doc.resolve(e.after(t + 1)) : e };
      }
    }
  }
  close(e) {
    let t = this.findCloseLevel(e);
    if (!t)
      return null;
    for (; this.depth > t.depth; )
      this.closeFrontierNode();
    t.fit.childCount && (this.placed = Dr(this.placed, t.depth, t.fit)), e = t.move;
    for (let r = t.depth + 1; r <= e.depth; r++) {
      let i = e.node(r), s = i.type.contentMatch.fillBefore(i.content, !0, e.index(r));
      this.openFrontierNode(i.type, i.attrs, s);
    }
    return e;
  }
  openFrontierNode(e, t = null, r) {
    let i = this.frontier[this.depth];
    i.match = i.match.matchType(e), this.placed = Dr(this.placed, this.depth, A.from(e.create(t, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let t = this.frontier.pop().match.fillBefore(A.empty, !0);
    t.childCount && (this.placed = Dr(this.placed, this.frontier.length, t));
  }
}
function Ar(n, e, t) {
  return e == 0 ? n.cutByIndex(t, n.childCount) : n.replaceChild(0, n.firstChild.copy(Ar(n.firstChild.content, e - 1, t)));
}
function Dr(n, e, t) {
  return e == 0 ? n.append(t) : n.replaceChild(n.childCount - 1, n.lastChild.copy(Dr(n.lastChild.content, e - 1, t)));
}
function qo(n, e) {
  for (let t = 0; t < e; t++)
    n = n.firstChild.content;
  return n;
}
function sf(n, e, t) {
  if (e <= 0)
    return n;
  let r = n.content;
  return e > 1 && (r = r.replaceChild(0, sf(r.firstChild, e - 1, r.childCount == 1 ? t - 1 : 0))), e > 0 && (r = n.type.contentMatch.fillBefore(r).append(r), t <= 0 && (r = r.append(n.type.contentMatch.matchFragment(r).fillBefore(A.empty, !0)))), n.copy(r);
}
function Go(n, e, t, r, i) {
  let s = n.node(e), o = i ? n.indexAfter(e) : n.index(e);
  if (o == s.childCount && !t.compatibleContent(s.type))
    return null;
  let l = r.fillBefore(s.content, !0, o);
  return l && !$1(t, s.content, o) ? l : null;
}
function $1(n, e, t) {
  for (let r = t; r < e.childCount; r++)
    if (!n.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function W1(n) {
  return n.spec.defining || n.spec.definingForContent;
}
function V1(n, e, t, r) {
  if (!r.size)
    return n.deleteRange(e, t);
  let i = n.doc.resolve(e), s = n.doc.resolve(t);
  if (rf(i, s, r))
    return n.step(new xe(e, t, r));
  let o = lf(i, s);
  o[o.length - 1] == 0 && o.pop();
  let l = -(i.depth + 1);
  o.unshift(l);
  for (let g = i.depth, y = i.pos - 1; g > 0; g--, y--) {
    let b = i.node(g).type.spec;
    if (b.defining || b.definingAsContext || b.isolating)
      break;
    o.indexOf(g) > -1 ? l = g : i.before(g) == y && o.splice(1, 0, -g);
  }
  let c = o.indexOf(l), d = [], f = r.openStart;
  for (let g = r.content, y = 0; ; y++) {
    let b = g.firstChild;
    if (d.push(b), y == r.openStart)
      break;
    g = b.content;
  }
  for (let g = f - 1; g >= 0; g--) {
    let y = d[g], b = W1(y.type);
    if (b && !y.sameMarkup(i.node(Math.abs(l) - 1)))
      f = g;
    else if (b || !y.type.isTextblock)
      break;
  }
  for (let g = r.openStart; g >= 0; g--) {
    let y = (g + f + 1) % (r.openStart + 1), b = d[y];
    if (b)
      for (let S = 0; S < o.length; S++) {
        let x = o[(S + c) % o.length], w = !0;
        x < 0 && (w = !1, x = -x);
        let T = i.node(x - 1), v = i.index(x - 1);
        if (T.canReplaceWith(v, v, b.type, b.marks))
          return n.replace(i.before(x), w ? s.after(x) : t, new L(of(r.content, 0, r.openStart, y), y, r.openEnd));
      }
  }
  let h = n.steps.length;
  for (let g = o.length - 1; g >= 0 && (n.replace(e, t, r), !(n.steps.length > h)); g--) {
    let y = o[g];
    y < 0 || (e = i.before(y), t = s.after(y));
  }
}
function of(n, e, t, r, i) {
  if (e < t) {
    let s = n.firstChild;
    n = n.replaceChild(0, s.copy(of(s.content, e + 1, t, r, s)));
  }
  if (e > r) {
    let s = i.contentMatchAt(0), o = s.fillBefore(n).append(n);
    n = o.append(s.matchFragment(o).fillBefore(A.empty, !0));
  }
  return n;
}
function Y1(n, e, t, r) {
  if (!r.isInline && e == t && n.doc.resolve(e).parent.content.size) {
    let i = z1(n.doc, e, r.type);
    i != null && (e = t = i);
  }
  n.replaceRange(e, t, new L(A.from(r), 0, 0));
}
function j1(n, e, t) {
  let r = n.doc.resolve(e), i = n.doc.resolve(t), s = lf(r, i);
  for (let o = 0; o < s.length; o++) {
    let l = s[o], c = o == s.length - 1;
    if (c && l == 0 || r.node(l).type.contentMatch.validEnd)
      return n.delete(r.start(l), i.end(l));
    if (l > 0 && (c || r.node(l - 1).canReplace(r.index(l - 1), i.indexAfter(l - 1))))
      return n.delete(r.before(l), i.after(l));
  }
  for (let o = 1; o <= r.depth && o <= i.depth; o++)
    if (e - r.start(o) == r.depth - o && t > r.end(o) && i.end(o) - t != i.depth - o && r.start(o - 1) == i.start(o - 1) && r.node(o - 1).canReplace(r.index(o - 1), i.index(o - 1)))
      return n.delete(r.before(o), t);
  n.delete(e, t);
}
function lf(n, e) {
  let t = [], r = Math.min(n.depth, e.depth);
  for (let i = r; i >= 0; i--) {
    let s = n.start(i);
    if (s < n.pos - (n.depth - i) || e.end(i) > e.pos + (e.depth - i) || n.node(i).type.spec.isolating || e.node(i).type.spec.isolating)
      break;
    (s == e.start(i) || i == n.depth && i == e.depth && n.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == s - 1) && t.push(i);
  }
  return t;
}
class sr extends Fe {
  /**
  Construct an attribute step.
  */
  constructor(e, t, r) {
    super(), this.pos = e, this.attr = t, this.value = r;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return me.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let s in t.attrs)
      r[s] = t.attrs[s];
    r[this.attr] = this.value;
    let i = t.type.create(r, null, t.marks);
    return me.fromReplace(e, this.pos, this.pos + 1, new L(A.from(i), 0, t.isLeaf ? 0 : 1));
  }
  getMap() {
    return Ze.empty;
  }
  invert(e) {
    return new sr(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new sr(t.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number" || typeof t.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new sr(t.pos, t.attr, t.value);
  }
}
Fe.jsonID("attr", sr);
class Kr extends Fe {
  /**
  Construct an attribute step.
  */
  constructor(e, t) {
    super(), this.attr = e, this.value = t;
  }
  apply(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let i in e.attrs)
      t[i] = e.attrs[i];
    t[this.attr] = this.value;
    let r = e.type.create(t, e.content, e.marks);
    return me.ok(r);
  }
  getMap() {
    return Ze.empty;
  }
  invert(e) {
    return new Kr(this.attr, e.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return { stepType: "docAttr", attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new Kr(t.attr, t.value);
  }
}
Fe.jsonID("docAttr", Kr);
let ar = class extends Error {
};
ar = function n(e) {
  let t = Error.call(this, e);
  return t.__proto__ = n.prototype, t;
};
ar.prototype = Object.create(Error.prototype);
ar.prototype.constructor = ar;
ar.prototype.name = "TransformError";
class af {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new Gr();
  }
  /**
  The starting document.
  */
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  /**
  Apply a new step in this transform, saving the result. Throws an
  error when the step fails.
  */
  step(e) {
    let t = this.maybeStep(e);
    if (t.failed)
      throw new ar(t.failed);
    return this;
  }
  /**
  Try to apply a step in this transformation, ignoring it if it
  fails. Returns the step result.
  */
  maybeStep(e) {
    let t = e.apply(this.doc);
    return t.failed || this.addStep(e, t.doc), t;
  }
  /**
  True when the document has been changed (when there are any
  steps).
  */
  get docChanged() {
    return this.steps.length > 0;
  }
  /**
  Return a single range, in post-transform document positions,
  that covers all content changed by this transform. Returns null
  if no replacements are made. Note that this will ignore changes
  that add/remove marks without replacing the underlying content.
  */
  changedRange() {
    let e = 1e9, t = -1e9;
    for (let r = 0; r < this.mapping.maps.length; r++) {
      let i = this.mapping.maps[r];
      r && (e = i.map(e, 1), t = i.map(t, -1)), i.forEach((s, o, l, c) => {
        e = Math.min(e, l), t = Math.max(t, c);
      });
    }
    return e == 1e9 ? null : { from: e, to: t };
  }
  /**
  @internal
  */
  addStep(e, t) {
    this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = t;
  }
  /**
  Replace the part of the document between `from` and `to` with the
  given `slice`.
  */
  replace(e, t = e, r = L.empty) {
    let i = Us(this.doc, e, t, r);
    return i && this.step(i), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, t, r) {
    return this.replace(e, t, new L(A.from(r), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, t) {
    return this.replace(e, t, L.empty);
  }
  /**
  Insert the given content at the given position.
  */
  insert(e, t) {
    return this.replaceWith(e, e, t);
  }
  /**
  Replace a range of the document with a given slice, using
  `from`, `to`, and the slice's
  [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
  than fixed start and end points. This method may grow the
  replaced area or close open nodes in the slice in order to get a
  fit that is more in line with WYSIWYG expectations, by dropping
  fully covered parent nodes of the replaced region when they are
  marked [non-defining as
  context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
  open parent node from the slice that _is_ marked as [defining
  its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
  
  This is the method, for example, to handle paste. The similar
  [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
  primitive tool which will _not_ move the start and end of its given
  range, and is useful in situations where you need more precise
  control over what happens.
  */
  replaceRange(e, t, r) {
    return V1(this, e, t, r), this;
  }
  /**
  Replace the given range with a node, but use `from` and `to` as
  hints, rather than precise positions. When from and to are the same
  and are at the start or end of a parent node in which the given
  node doesn't fit, this method may _move_ them out towards a parent
  that does allow the given node to be placed. When the given range
  completely covers a parent node, this method may completely replace
  that parent node.
  */
  replaceRangeWith(e, t, r) {
    return Y1(this, e, t, r), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, t) {
    return j1(this, e, t), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, t) {
    return A1(this, e, t), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, t = 1) {
    return B1(this, e, t), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, t) {
    return R1(this, e, t), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, t = e, r, i = null) {
    return I1(this, e, t, r, i), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, t, r = null, i) {
    return P1(this, e, t, r, i), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(e, t, r) {
    return this.step(new sr(e, t, r)), this;
  }
  /**
  Set a single attribute on the document to a new value.
  */
  setDocAttribute(e, t) {
    return this.step(new Kr(e, t)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, t) {
    return this.step(new rn(e, t)), this;
  }
  /**
  Remove a mark (or all marks of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, t) {
    let r = this.doc.nodeAt(e);
    if (!r)
      throw new RangeError("No node at position " + e);
    if (t instanceof re)
      t.isInSet(r.marks) && this.step(new Ln(e, t));
    else {
      let i = r.marks, s, o = [];
      for (; s = t.isInSet(i); )
        o.push(new Ln(e, s)), i = s.removeFromSet(i);
      for (let l = o.length - 1; l >= 0; l--)
        this.step(o[l]);
    }
    return this;
  }
  /**
  Split the node at the given position, and optionally, if `depth` is
  greater than one, any number of nodes above that. By default, the
  parts split off will inherit the node type of the original node.
  This can be changed by passing an array of types and attributes to
  use after the split (with the outermost nodes coming first).
  */
  split(e, t = 1, r) {
    return L1(this, e, t, r), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, t, r) {
    return O1(this, e, t, r), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, t, r) {
    return v1(this, e, t, r), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, t, r) {
    return ua(this, e, t, r), this;
  }
}
const Ko = /* @__PURE__ */ Object.create(null);
class G {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, t, r) {
    this.$anchor = e, this.$head = t, this.ranges = r || [new U1(e.min(t), e.max(t))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let e = this.ranges;
    for (let t = 0; t < e.length; t++)
      if (e[t].$from.pos != e[t].$to.pos)
        return !1;
    return !0;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, !0);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(e, t = L.empty) {
    let r = t.content.lastChild, i = null;
    for (let l = 0; l < t.openEnd; l++)
      i = r, r = r.lastChild;
    let s = e.steps.length, o = this.ranges;
    for (let l = 0; l < o.length; l++) {
      let { $from: c, $to: d } = o[l], f = e.mapping.slice(s);
      e.replaceRange(f.map(c.pos), f.map(d.pos), l ? L.empty : t), l == 0 && Qc(e, s, (r ? r.isInline : i && i.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, t) {
    let r = e.steps.length, i = this.ranges;
    for (let s = 0; s < i.length; s++) {
      let { $from: o, $to: l } = i[s], c = e.mapping.slice(r), d = c.map(o.pos), f = c.map(l.pos);
      s ? e.deleteRange(d, f) : (e.replaceRangeWith(d, f, t), Qc(e, r, t.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(e, t, r = !1) {
    let i = e.parent.inlineContent ? new V(e) : er(e.node(0), e.parent, e.pos, e.index(), t, r);
    if (i)
      return i;
    for (let s = e.depth - 1; s >= 0; s--) {
      let o = t < 0 ? er(e.node(0), e.node(s), e.before(s + 1), e.index(s), t, r) : er(e.node(0), e.node(s), e.after(s + 1), e.index(s) + 1, t, r);
      if (o)
        return o;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near(e, t = 1) {
    return this.findFrom(e, t) || this.findFrom(e, -t) || new et(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return er(e, e, 0, 0, 1) || new et(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return er(e, e, e.content.size, e.childCount, -1) || new et(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, t) {
    if (!t || !t.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = Ko[t.type];
    if (!r)
      throw new RangeError(`No selection type ${t.type} defined`);
    return r.fromJSON(e, t);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(e, t) {
    if (e in Ko)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return Ko[e] = t, t.prototype.jsonID = e, t;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return V.between(this.$anchor, this.$head).getBookmark();
  }
}
G.prototype.visible = !0;
class U1 {
  /**
  Create a range.
  */
  constructor(e, t) {
    this.$from = e, this.$to = t;
  }
}
let Kc = !1;
function Jc(n) {
  !Kc && !n.parent.inlineContent && (Kc = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + n.parent.type.name + ")"));
}
class V extends G {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, t = e) {
    Jc(e), Jc(t), super(e, t);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    if (!r.parent.inlineContent)
      return G.near(r);
    let i = e.resolve(t.map(this.anchor));
    return new V(i.parent.inlineContent ? i : r, r);
  }
  replace(e, t = L.empty) {
    if (super.replace(e, t), t == L.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof V && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new qs(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number" || typeof t.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new V(e.resolve(t.anchor), e.resolve(t.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(e, t, r = t) {
    let i = e.resolve(t);
    return new this(i, r == t ? i : e.resolve(r));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(e, t, r) {
    let i = e.pos - t.pos;
    if ((!r || i) && (r = i >= 0 ? 1 : -1), !t.parent.inlineContent) {
      let s = G.findFrom(t, r, !0) || G.findFrom(t, -r, !0);
      if (s)
        t = s.$head;
      else
        return G.near(t, r);
    }
    return e.parent.inlineContent || (i == 0 ? e = t : (e = (G.findFrom(e, -r, !0) || G.findFrom(e, r, !0)).$anchor, e.pos < t.pos != i < 0 && (e = t))), new V(e, t);
  }
}
G.jsonID("text", V);
class qs {
  constructor(e, t) {
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new qs(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return V.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class $ extends G {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let t = e.nodeAfter, r = e.node(0).resolve(e.pos + t.nodeSize);
    super(e, r), this.node = t;
  }
  map(e, t) {
    let { deleted: r, pos: i } = t.mapResult(this.anchor), s = e.resolve(i);
    return r ? G.near(s) : new $(s);
  }
  content() {
    return new L(A.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof $ && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new fa(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new $(e.resolve(t.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, t) {
    return new $(e.resolve(t));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
$.prototype.visible = !1;
G.jsonID("node", $);
class fa {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: t, pos: r } = e.mapResult(this.anchor);
    return t ? new qs(r, r) : new fa(r);
  }
  resolve(e) {
    let t = e.resolve(this.anchor), r = t.nodeAfter;
    return r && $.isSelectable(r) ? new $(t) : G.near(t);
  }
}
class et extends G {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, t = L.empty) {
    if (t == L.empty) {
      e.delete(0, e.doc.content.size);
      let r = G.atStart(e.doc);
      r.eq(e.selection) || e.setSelection(r);
    } else
      super.replace(e, t);
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(e) {
    return new et(e);
  }
  map(e) {
    return new et(e);
  }
  eq(e) {
    return e instanceof et;
  }
  getBookmark() {
    return q1;
  }
}
G.jsonID("all", et);
const q1 = {
  map() {
    return this;
  },
  resolve(n) {
    return new et(n);
  }
};
function er(n, e, t, r, i, s = !1) {
  if (e.inlineContent)
    return V.create(n, t);
  for (let o = r - (i > 0 ? 0 : 1); i > 0 ? o < e.childCount : o >= 0; o += i) {
    let l = e.child(o);
    if (l.isAtom) {
      if (!s && $.isSelectable(l))
        return $.create(n, t - (i < 0 ? l.nodeSize : 0));
    } else {
      let c = er(n, l, t + i, i < 0 ? l.childCount : 0, i, s);
      if (c)
        return c;
    }
    t += l.nodeSize * i;
  }
  return null;
}
function Qc(n, e, t) {
  let r = n.steps.length - 1;
  if (r < e)
    return;
  let i = n.steps[r];
  if (!(i instanceof xe || i instanceof we))
    return;
  let s = n.mapping.maps[r], o;
  s.forEach((l, c, d, f) => {
    o == null && (o = f);
  }), n.setSelection(G.near(n.doc.resolve(o), t));
}
const Zc = 1, Ri = 2, Xc = 4;
class G1 extends af {
  /**
  @internal
  */
  constructor(e) {
    super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = /* @__PURE__ */ Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
  }
  /**
  The transaction's current selection. This defaults to the editor
  selection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the
  transaction, but can be overwritten with
  [`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).
  */
  get selection() {
    return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
  }
  /**
  Update the transaction's current selection. Will determine the
  selection that the editor gets when the transaction is applied.
  */
  setSelection(e) {
    if (e.$from.doc != this.doc)
      throw new RangeError("Selection passed to setSelection must point at the current document");
    return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | Zc) & ~Ri, this.storedMarks = null, this;
  }
  /**
  Whether the selection was explicitly updated by this transaction.
  */
  get selectionSet() {
    return (this.updated & Zc) > 0;
  }
  /**
  Set the current stored marks.
  */
  setStoredMarks(e) {
    return this.storedMarks = e, this.updated |= Ri, this;
  }
  /**
  Make sure the current stored marks or, if that is null, the marks
  at the selection, match the given set of marks. Does nothing if
  this is already the case.
  */
  ensureMarks(e) {
    return re.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
  }
  /**
  Add a mark to the set of stored marks.
  */
  addStoredMark(e) {
    return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Remove a mark or mark type from the set of stored marks.
  */
  removeStoredMark(e) {
    return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Whether the stored marks were explicitly set for this transaction.
  */
  get storedMarksSet() {
    return (this.updated & Ri) > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    super.addStep(e, t), this.updated = this.updated & ~Ri, this.storedMarks = null;
  }
  /**
  Update the timestamp for the transaction.
  */
  setTime(e) {
    return this.time = e, this;
  }
  /**
  Replace the current selection with the given slice.
  */
  replaceSelection(e) {
    return this.selection.replace(this, e), this;
  }
  /**
  Replace the selection with the given node. When `inheritMarks` is
  true and the content is inline, it inherits the marks from the
  place where it is inserted.
  */
  replaceSelectionWith(e, t = !0) {
    let r = this.selection;
    return t && (e = e.mark(this.storedMarks || (r.empty ? r.$from.marks() : r.$from.marksAcross(r.$to) || re.none))), r.replaceWith(this, e), this;
  }
  /**
  Delete the selection.
  */
  deleteSelection() {
    return this.selection.replace(this), this;
  }
  /**
  Replace the given range, or the selection if no range is given,
  with a text node containing the given string.
  */
  insertText(e, t, r) {
    let i = this.doc.type.schema;
    if (t == null)
      return e ? this.replaceSelectionWith(i.text(e), !0) : this.deleteSelection();
    {
      if (r == null && (r = t), !e)
        return this.deleteRange(t, r);
      let s = this.storedMarks;
      if (!s) {
        let o = this.doc.resolve(t);
        s = r == t ? o.marks() : o.marksAcross(this.doc.resolve(r));
      }
      return this.replaceRangeWith(t, r, i.text(e, s)), !this.selection.empty && this.selection.to == t + e.length && this.setSelection(G.near(this.selection.$to)), this;
    }
  }
  /**
  Store a metadata property in this transaction, keyed either by
  name or by plugin.
  */
  setMeta(e, t) {
    return this.meta[typeof e == "string" ? e : e.key] = t, this;
  }
  /**
  Retrieve a metadata property for a given name or plugin.
  */
  getMeta(e) {
    return this.meta[typeof e == "string" ? e : e.key];
  }
  /**
  Returns true if this transaction doesn't contain any metadata,
  and can thus safely be extended.
  */
  get isGeneric() {
    for (let e in this.meta)
      return !1;
    return !0;
  }
  /**
  Indicate that the editor should scroll the selection into view
  when updated to the state produced by this transaction.
  */
  scrollIntoView() {
    return this.updated |= Xc, this;
  }
  /**
  True when this transaction has had `scrollIntoView` called on it.
  */
  get scrolledIntoView() {
    return (this.updated & Xc) > 0;
  }
}
function eu(n, e) {
  return !e || !n ? n : n.bind(e);
}
class Nr {
  constructor(e, t, r) {
    this.name = e, this.init = eu(t.init, r), this.apply = eu(t.apply, r);
  }
}
const K1 = [
  new Nr("doc", {
    init(n) {
      return n.doc || n.schema.topNodeType.createAndFill();
    },
    apply(n) {
      return n.doc;
    }
  }),
  new Nr("selection", {
    init(n, e) {
      return n.selection || G.atStart(e.doc);
    },
    apply(n) {
      return n.selection;
    }
  }),
  new Nr("storedMarks", {
    init(n) {
      return n.storedMarks || null;
    },
    apply(n, e, t, r) {
      return r.selection.$cursor ? n.storedMarks : null;
    }
  }),
  new Nr("scrollToSelection", {
    init() {
      return 0;
    },
    apply(n, e) {
      return n.scrolledIntoView ? e + 1 : e;
    }
  })
];
class Jo {
  constructor(e, t) {
    this.schema = e, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = K1.slice(), t && t.forEach((r) => {
      if (this.pluginsByKey[r.key])
        throw new RangeError("Adding different instances of a keyed plugin (" + r.key + ")");
      this.plugins.push(r), this.pluginsByKey[r.key] = r, r.spec.state && this.fields.push(new Nr(r.key, r.spec.state, r));
    });
  }
}
class rr {
  /**
  @internal
  */
  constructor(e) {
    this.config = e;
  }
  /**
  The schema of the state's document.
  */
  get schema() {
    return this.config.schema;
  }
  /**
  The plugins that are active in this state.
  */
  get plugins() {
    return this.config.plugins;
  }
  /**
  Apply the given transaction to produce a new state.
  */
  apply(e) {
    return this.applyTransaction(e).state;
  }
  /**
  @internal
  */
  filterTransaction(e, t = -1) {
    for (let r = 0; r < this.config.plugins.length; r++)
      if (r != t) {
        let i = this.config.plugins[r];
        if (i.spec.filterTransaction && !i.spec.filterTransaction.call(i, e, this))
          return !1;
      }
    return !0;
  }
  /**
  Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
  returns the precise transactions that were applied (which might
  be influenced by the [transaction
  hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
  plugins) along with the new state.
  */
  applyTransaction(e) {
    if (!this.filterTransaction(e))
      return { state: this, transactions: [] };
    let t = [e], r = this.applyInner(e), i = null;
    for (; ; ) {
      let s = !1;
      for (let o = 0; o < this.config.plugins.length; o++) {
        let l = this.config.plugins[o];
        if (l.spec.appendTransaction) {
          let c = i ? i[o].n : 0, d = i ? i[o].state : this, f = c < t.length && l.spec.appendTransaction.call(l, c ? t.slice(c) : t, d, r);
          if (f && r.filterTransaction(f, o)) {
            if (f.setMeta("appendedTransaction", e), !i) {
              i = [];
              for (let h = 0; h < this.config.plugins.length; h++)
                i.push(h < o ? { state: r, n: t.length } : { state: this, n: 0 });
            }
            t.push(f), r = r.applyInner(f), s = !0;
          }
          i && (i[o] = { state: r, n: t.length });
        }
      }
      if (!s)
        return { state: r, transactions: t };
    }
  }
  /**
  @internal
  */
  applyInner(e) {
    if (!e.before.eq(this.doc))
      throw new RangeError("Applying a mismatched transaction");
    let t = new rr(this.config), r = this.config.fields;
    for (let i = 0; i < r.length; i++) {
      let s = r[i];
      t[s.name] = s.apply(e, this[s.name], this, t);
    }
    return t;
  }
  /**
  Accessor that constructs and returns a new [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
  */
  get tr() {
    return new G1(this);
  }
  /**
  Create a new state.
  */
  static create(e) {
    let t = new Jo(e.doc ? e.doc.type.schema : e.schema, e.plugins), r = new rr(t);
    for (let i = 0; i < t.fields.length; i++)
      r[t.fields[i].name] = t.fields[i].init(e, r);
    return r;
  }
  /**
  Create a new state based on this one, but with an adjusted set
  of active plugins. State fields that exist in both sets of
  plugins are kept unchanged. Those that no longer exist are
  dropped, and those that are new are initialized using their
  [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
  configuration object..
  */
  reconfigure(e) {
    let t = new Jo(this.schema, e.plugins), r = t.fields, i = new rr(t);
    for (let s = 0; s < r.length; s++) {
      let o = r[s].name;
      i[o] = this.hasOwnProperty(o) ? this[o] : r[s].init(e, i);
    }
    return i;
  }
  /**
  Serialize this state to JSON. If you want to serialize the state
  of plugins, pass an object mapping property names to use in the
  resulting JSON object to plugin objects. The argument may also be
  a string or number, in which case it is ignored, to support the
  way `JSON.stringify` calls `toString` methods.
  */
  toJSON(e) {
    let t = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
    if (this.storedMarks && (t.storedMarks = this.storedMarks.map((r) => r.toJSON())), e && typeof e == "object")
      for (let r in e) {
        if (r == "doc" || r == "selection")
          throw new RangeError("The JSON fields `doc` and `selection` are reserved");
        let i = e[r], s = i.spec.state;
        s && s.toJSON && (t[r] = s.toJSON.call(i, this[i.key]));
      }
    return t;
  }
  /**
  Deserialize a JSON representation of a state. `config` should
  have at least a `schema` field, and should contain array of
  plugins to initialize the state with. `pluginFields` can be used
  to deserialize the state of plugins, by associating plugin
  instances with the property names they use in the JSON object.
  */
  static fromJSON(e, t, r) {
    if (!t)
      throw new RangeError("Invalid input for EditorState.fromJSON");
    if (!e.schema)
      throw new RangeError("Required config field 'schema' missing");
    let i = new Jo(e.schema, e.plugins), s = new rr(i);
    return i.fields.forEach((o) => {
      if (o.name == "doc")
        s.doc = on.fromJSON(e.schema, t.doc);
      else if (o.name == "selection")
        s.selection = G.fromJSON(s.doc, t.selection);
      else if (o.name == "storedMarks")
        t.storedMarks && (s.storedMarks = t.storedMarks.map(e.schema.markFromJSON));
      else {
        if (r)
          for (let l in r) {
            let c = r[l], d = c.spec.state;
            if (c.key == o.name && d && d.fromJSON && Object.prototype.hasOwnProperty.call(t, l)) {
              s[o.name] = d.fromJSON.call(c, e, t[l], s);
              return;
            }
          }
        s[o.name] = o.init(e, s);
      }
    }), s;
  }
}
function cf(n, e, t) {
  for (let r in n) {
    let i = n[r];
    i instanceof Function ? i = i.bind(e) : r == "handleDOMEvents" && (i = cf(i, e, {})), t[r] = i;
  }
  return t;
}
class Te {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && cf(e.props, this, this.props), this.key = e.key ? e.key.key : uf("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const Qo = /* @__PURE__ */ Object.create(null);
function uf(n) {
  return n in Qo ? n + "$" + ++Qo[n] : (Qo[n] = 0, n + "$");
}
class Qe {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = uf(e);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const Ae = function(n) {
  for (var e = 0; ; e++)
    if (n = n.previousSibling, !n)
      return e;
}, cr = function(n) {
  let e = n.assignedSlot || n.parentNode;
  return e && e.nodeType == 11 ? e.host : e;
};
let Nl = null;
const Bt = function(n, e, t) {
  let r = Nl || (Nl = document.createRange());
  return r.setEnd(n, t ?? n.nodeValue.length), r.setStart(n, e || 0), r;
}, J1 = function() {
  Nl = null;
}, Fn = function(n, e, t, r) {
  return t && (tu(n, e, t, r, -1) || tu(n, e, t, r, 1));
}, Q1 = /^(img|br|input|textarea|hr)$/i;
function tu(n, e, t, r, i) {
  for (var s; ; ) {
    if (n == t && e == r)
      return !0;
    if (e == (i < 0 ? 0 : ot(n))) {
      let o = n.parentNode;
      if (!o || o.nodeType != 1 || oi(n) || Q1.test(n.nodeName) || n.contentEditable == "false")
        return !1;
      e = Ae(n) + (i < 0 ? 0 : 1), n = o;
    } else if (n.nodeType == 1) {
      let o = n.childNodes[e + (i < 0 ? -1 : 0)];
      if (o.nodeType == 1 && o.contentEditable == "false")
        if (!((s = o.pmViewDesc) === null || s === void 0) && s.ignoreForSelection)
          e += i;
        else
          return !1;
      else
        n = o, e = i < 0 ? ot(n) : 0;
    } else
      return !1;
  }
}
function ot(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function Z1(n, e) {
  for (; ; ) {
    if (n.nodeType == 3 && e)
      return n;
    if (n.nodeType == 1 && e > 0) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[e - 1], e = ot(n);
    } else if (n.parentNode && !oi(n))
      e = Ae(n), n = n.parentNode;
    else
      return null;
  }
}
function X1(n, e) {
  for (; ; ) {
    if (n.nodeType == 3 && e < n.nodeValue.length)
      return n;
    if (n.nodeType == 1 && e < n.childNodes.length) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[e], e = 0;
    } else if (n.parentNode && !oi(n))
      e = Ae(n) + 1, n = n.parentNode;
    else
      return null;
  }
}
function eb(n, e, t) {
  for (let r = e == 0, i = e == ot(n); r || i; ) {
    if (n == t)
      return !0;
    let s = Ae(n);
    if (n = n.parentNode, !n)
      return !1;
    r = r && s == 0, i = i && s == ot(n);
  }
}
function oi(n) {
  let e;
  for (let t = n; t && !(e = t.pmViewDesc); t = t.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == n || e.contentDOM == n);
}
const Gs = function(n) {
  return n.focusNode && Fn(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset);
};
function Mn(n, e) {
  let t = document.createEvent("Event");
  return t.initEvent("keydown", !0, !0), t.keyCode = n, t.key = t.code = e, t;
}
function tb(n) {
  let e = n.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function nb(n, e, t) {
  if (n.caretPositionFromPoint)
    try {
      let r = n.caretPositionFromPoint(e, t);
      if (r)
        return { node: r.offsetNode, offset: Math.min(ot(r.offsetNode), r.offset) };
    } catch {
    }
  if (n.caretRangeFromPoint) {
    let r = n.caretRangeFromPoint(e, t);
    if (r)
      return { node: r.startContainer, offset: Math.min(ot(r.startContainer), r.startOffset) };
  }
}
const xt = typeof navigator < "u" ? navigator : null, nu = typeof document < "u" ? document : null, pn = xt && xt.userAgent || "", Rl = /Edge\/(\d+)/.exec(pn), df = /MSIE \d/.exec(pn), Il = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(pn), Ke = !!(df || Il || Rl), an = df ? document.documentMode : Il ? +Il[1] : Rl ? +Rl[1] : 0, lt = !Ke && /gecko\/(\d+)/i.test(pn);
lt && +(/Firefox\/(\d+)/.exec(pn) || [0, 0])[1];
const _l = !Ke && /Chrome\/(\d+)/.exec(pn), Ne = !!_l, ff = _l ? +_l[1] : 0, Le = !Ke && !!xt && /Apple Computer/.test(xt.vendor), ur = Le && (/Mobile\/\w+/.test(pn) || !!xt && xt.maxTouchPoints > 2), st = ur || (xt ? /Mac/.test(xt.platform) : !1), hf = xt ? /Win/.test(xt.platform) : !1, zt = /Android \d/.test(pn), li = !!nu && "webkitFontSmoothing" in nu.documentElement.style, rb = li ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function ib(n) {
  let e = n.defaultView && n.defaultView.visualViewport;
  return e ? {
    left: 0,
    right: e.width,
    top: 0,
    bottom: e.height
  } : {
    left: 0,
    right: n.documentElement.clientWidth,
    top: 0,
    bottom: n.documentElement.clientHeight
  };
}
function _t(n, e) {
  return typeof n == "number" ? n : n[e];
}
function sb(n) {
  let e = n.getBoundingClientRect(), t = e.width / n.offsetWidth || 1, r = e.height / n.offsetHeight || 1;
  return {
    left: e.left,
    right: e.left + n.clientWidth * t,
    top: e.top,
    bottom: e.top + n.clientHeight * r
  };
}
function ru(n, e, t) {
  let r = n.someProp("scrollThreshold") || 0, i = n.someProp("scrollMargin") || 5, s = n.dom.ownerDocument;
  for (let o = t || n.dom; o; ) {
    if (o.nodeType != 1) {
      o = cr(o);
      continue;
    }
    let l = o, c = l == s.body, d = c ? ib(s) : sb(l), f = 0, h = 0;
    if (e.top < d.top + _t(r, "top") ? h = -(d.top - e.top + _t(i, "top")) : e.bottom > d.bottom - _t(r, "bottom") && (h = e.bottom - e.top > d.bottom - d.top ? e.top + _t(i, "top") - d.top : e.bottom - d.bottom + _t(i, "bottom")), e.left < d.left + _t(r, "left") ? f = -(d.left - e.left + _t(i, "left")) : e.right > d.right - _t(r, "right") && (f = e.right - d.right + _t(i, "right")), f || h)
      if (c)
        s.defaultView.scrollBy(f, h);
      else {
        let y = l.scrollLeft, b = l.scrollTop;
        h && (l.scrollTop += h), f && (l.scrollLeft += f);
        let S = l.scrollLeft - y, x = l.scrollTop - b;
        e = { left: e.left - S, top: e.top - x, right: e.right - S, bottom: e.bottom - x };
      }
    let g = c ? "fixed" : getComputedStyle(o).position;
    if (/^(fixed|sticky)$/.test(g))
      break;
    o = g == "absolute" ? o.offsetParent : cr(o);
  }
}
function ob(n) {
  let e = n.dom.getBoundingClientRect(), t = Math.max(0, e.top), r, i;
  for (let s = (e.left + e.right) / 2, o = t + 1; o < Math.min(innerHeight, e.bottom); o += 5) {
    let l = n.root.elementFromPoint(s, o);
    if (!l || l == n.dom || !n.dom.contains(l))
      continue;
    let c = l.getBoundingClientRect();
    if (c.top >= t - 20) {
      r = l, i = c.top;
      break;
    }
  }
  return { refDOM: r, refTop: i, stack: pf(n.dom) };
}
function pf(n) {
  let e = [], t = n.ownerDocument;
  for (let r = n; r && (e.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), n != t); r = cr(r))
    ;
  return e;
}
function lb({ refDOM: n, refTop: e, stack: t }) {
  let r = n ? n.getBoundingClientRect().top : 0;
  mf(t, r == 0 ? 0 : r - e);
}
function mf(n, e) {
  for (let t = 0; t < n.length; t++) {
    let { dom: r, top: i, left: s } = n[t];
    r.scrollTop != i + e && (r.scrollTop = i + e), r.scrollLeft != s && (r.scrollLeft = s);
  }
}
let Zn = null;
function ab(n) {
  if (n.setActive)
    return n.setActive();
  if (Zn)
    return n.focus(Zn);
  let e = pf(n);
  n.focus(Zn == null ? {
    get preventScroll() {
      return Zn = { preventScroll: !0 }, !0;
    }
  } : void 0), Zn || (Zn = !1, mf(e, 0));
}
function gf(n, e) {
  let t, r = 2e8, i, s = 0, o = e.top, l = e.top, c, d;
  for (let f = n.firstChild, h = 0; f; f = f.nextSibling, h++) {
    let g;
    if (f.nodeType == 1)
      g = f.getClientRects();
    else if (f.nodeType == 3)
      g = Bt(f).getClientRects();
    else
      continue;
    for (let y = 0; y < g.length; y++) {
      let b = g[y];
      if (b.top <= o && b.bottom >= l) {
        o = Math.max(b.bottom, o), l = Math.min(b.top, l);
        let S = b.left > e.left ? b.left - e.left : b.right < e.left ? e.left - b.right : 0;
        if (S < r) {
          t = f, r = S, i = S && t.nodeType == 3 ? {
            left: b.right < e.left ? b.right : b.left,
            top: e.top
          } : e, f.nodeType == 1 && S && (s = h + (e.left >= (b.left + b.right) / 2 ? 1 : 0));
          continue;
        }
      } else b.top > e.top && !c && b.left <= e.left && b.right >= e.left && (c = f, d = { left: Math.max(b.left, Math.min(b.right, e.left)), top: b.top });
      !t && (e.left >= b.right && e.top >= b.top || e.left >= b.left && e.top >= b.bottom) && (s = h + 1);
    }
  }
  return !t && c && (t = c, i = d, r = 0), t && t.nodeType == 3 ? cb(t, i) : !t || r && t.nodeType == 1 ? { node: n, offset: s } : gf(t, i);
}
function cb(n, e) {
  let t = n.nodeValue.length, r = document.createRange(), i;
  for (let s = 0; s < t; s++) {
    r.setEnd(n, s + 1), r.setStart(n, s);
    let o = Kt(r, 1);
    if (o.top != o.bottom && ha(e, o)) {
      i = { node: n, offset: s + (e.left >= (o.left + o.right) / 2 ? 1 : 0) };
      break;
    }
  }
  return r.detach(), i || { node: n, offset: 0 };
}
function ha(n, e) {
  return n.left >= e.left - 1 && n.left <= e.right + 1 && n.top >= e.top - 1 && n.top <= e.bottom + 1;
}
function ub(n, e) {
  let t = n.parentNode;
  return t && /^li$/i.test(t.nodeName) && e.left < n.getBoundingClientRect().left ? t : n;
}
function db(n, e, t) {
  let { node: r, offset: i } = gf(e, t), s = -1;
  if (r.nodeType == 1 && !r.firstChild) {
    let o = r.getBoundingClientRect();
    s = o.left != o.right && t.left > (o.left + o.right) / 2 ? 1 : -1;
  }
  return n.docView.posFromDOM(r, i, s);
}
function fb(n, e, t, r) {
  let i = -1;
  for (let s = e, o = !1; s != n.dom; ) {
    let l = n.docView.nearestDesc(s, !0), c;
    if (!l)
      return null;
    if (l.dom.nodeType == 1 && (l.node.isBlock && l.parent || !l.contentDOM) && // Ignore elements with zero-size bounding rectangles
    ((c = l.dom.getBoundingClientRect()).width || c.height) && (l.node.isBlock && l.parent && !/^T(R|BODY|HEAD|FOOT)$/.test(l.dom.nodeName) && (!o && c.left > r.left || c.top > r.top ? i = l.posBefore : (!o && c.right < r.left || c.bottom < r.top) && (i = l.posAfter), o = !0), !l.contentDOM && i < 0 && !l.node.isText))
      return (l.node.isBlock ? r.top < (c.top + c.bottom) / 2 : r.left < (c.left + c.right) / 2) ? l.posBefore : l.posAfter;
    s = l.dom.parentNode;
  }
  return i > -1 ? i : n.docView.posFromDOM(e, t, -1);
}
function yf(n, e, t) {
  let r = n.childNodes.length;
  if (r && t.top < t.bottom)
    for (let i = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - t.top) / (t.bottom - t.top)) - 2)), s = i; ; ) {
      let o = n.childNodes[s];
      if (o.nodeType == 1) {
        let l = o.getClientRects();
        for (let c = 0; c < l.length; c++) {
          let d = l[c];
          if (ha(e, d))
            return yf(o, e, d);
        }
      }
      if ((s = (s + 1) % r) == i)
        break;
    }
  return n;
}
function hb(n, e) {
  let t = n.dom.ownerDocument, r, i = 0, s = nb(t, e.left, e.top);
  s && ({ node: r, offset: i } = s);
  let o = (n.root.elementFromPoint ? n.root : t).elementFromPoint(e.left, e.top), l;
  if (!o || !n.dom.contains(o.nodeType != 1 ? o.parentNode : o)) {
    let d = n.dom.getBoundingClientRect();
    if (!ha(e, d) || (o = yf(n.dom, e, d), !o))
      return null;
  }
  if (Le)
    for (let d = o; r && d; d = cr(d))
      d.draggable && (r = void 0);
  if (o = ub(o, e), r) {
    if (lt && r.nodeType == 1 && (i = Math.min(i, r.childNodes.length), i < r.childNodes.length)) {
      let f = r.childNodes[i], h;
      f.nodeName == "IMG" && (h = f.getBoundingClientRect()).right <= e.left && h.bottom > e.top && i++;
    }
    let d;
    li && i && r.nodeType == 1 && (d = r.childNodes[i - 1]).nodeType == 1 && d.contentEditable == "false" && d.getBoundingClientRect().top >= e.top && i--, r == n.dom && i == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && e.top > r.lastChild.getBoundingClientRect().bottom ? l = n.state.doc.content.size : (i == 0 || r.nodeType != 1 || r.childNodes[i - 1].nodeName != "BR") && (l = fb(n, r, i, e));
  }
  l == null && (l = db(n, o, e));
  let c = n.docView.nearestDesc(o, !0);
  return { pos: l, inside: c ? c.posAtStart - c.border : -1 };
}
function iu(n) {
  return n.top < n.bottom || n.left < n.right;
}
function Kt(n, e) {
  let t = n.getClientRects();
  if (t.length) {
    let r = t[e < 0 ? 0 : t.length - 1];
    if (iu(r))
      return r;
  }
  return Array.prototype.find.call(t, iu) || n.getBoundingClientRect();
}
const pb = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function bf(n, e, t) {
  let { node: r, offset: i, atom: s } = n.docView.domFromPos(e, t < 0 ? -1 : 1), o = li || lt;
  if (r.nodeType == 3)
    if (o && (pb.test(r.nodeValue) || (t < 0 ? !i : i == r.nodeValue.length))) {
      let c = Kt(Bt(r, i, i), t);
      if (lt && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
        let d = Kt(Bt(r, i - 1, i - 1), -1);
        if (d.top == c.top) {
          let f = Kt(Bt(r, i, i + 1), -1);
          if (f.top != c.top)
            return Or(f, f.left < d.left);
        }
      }
      return c;
    } else {
      let c = i, d = i, f = t < 0 ? 1 : -1;
      return t < 0 && !i ? (d++, f = -1) : t >= 0 && i == r.nodeValue.length ? (c--, f = 1) : t < 0 ? c-- : d++, Or(Kt(Bt(r, c, d), f), f < 0);
    }
  if (!n.state.doc.resolve(e - (s || 0)).parent.inlineContent) {
    if (s == null && i && (t < 0 || i == ot(r))) {
      let c = r.childNodes[i - 1];
      if (c.nodeType == 1)
        return Zo(c.getBoundingClientRect(), !1);
    }
    if (s == null && i < ot(r)) {
      let c = r.childNodes[i];
      if (c.nodeType == 1)
        return Zo(c.getBoundingClientRect(), !0);
    }
    return Zo(r.getBoundingClientRect(), t >= 0);
  }
  if (s == null && i && (t < 0 || i == ot(r))) {
    let c = r.childNodes[i - 1], d = c.nodeType == 3 ? Bt(c, ot(c) - (o ? 0 : 1)) : c.nodeType == 1 && (c.nodeName != "BR" || !c.nextSibling) ? c : null;
    if (d)
      return Or(Kt(d, 1), !1);
  }
  if (s == null && i < ot(r)) {
    let c = r.childNodes[i];
    for (; c.pmViewDesc && c.pmViewDesc.ignoreForCoords; )
      c = c.nextSibling;
    let d = c ? c.nodeType == 3 ? Bt(c, 0, o ? 0 : 1) : c.nodeType == 1 ? c : null : null;
    if (d)
      return Or(Kt(d, -1), !0);
  }
  return Or(Kt(r.nodeType == 3 ? Bt(r) : r, -t), t >= 0);
}
function Or(n, e) {
  if (n.width == 0)
    return n;
  let t = e ? n.left : n.right;
  return { top: n.top, bottom: n.bottom, left: t, right: t };
}
function Zo(n, e) {
  if (n.height == 0)
    return n;
  let t = e ? n.top : n.bottom;
  return { top: t, bottom: t, left: n.left, right: n.right };
}
function kf(n, e, t) {
  let r = n.state, i = n.root.activeElement;
  r != e && n.updateState(e), i != n.dom && n.focus();
  try {
    return t();
  } finally {
    r != e && n.updateState(r), i != n.dom && i && i.focus();
  }
}
function mb(n, e, t) {
  let r = e.selection, i = t == "up" ? r.$from : r.$to;
  return kf(n, e, () => {
    let { node: s } = n.docView.domFromPos(i.pos, t == "up" ? -1 : 1);
    for (; ; ) {
      let l = n.docView.nearestDesc(s, !0);
      if (!l)
        break;
      if (l.node.isBlock) {
        s = l.contentDOM || l.dom;
        break;
      }
      s = l.dom.parentNode;
    }
    let o = bf(n, i.pos, 1);
    for (let l = s.firstChild; l; l = l.nextSibling) {
      let c;
      if (l.nodeType == 1)
        c = l.getClientRects();
      else if (l.nodeType == 3)
        c = Bt(l, 0, l.nodeValue.length).getClientRects();
      else
        continue;
      for (let d = 0; d < c.length; d++) {
        let f = c[d];
        if (f.bottom > f.top + 1 && (t == "up" ? o.top - f.top > (f.bottom - o.top) * 2 : f.bottom - o.bottom > (o.bottom - f.top) * 2))
          return !1;
      }
    }
    return !0;
  });
}
const gb = /[\u0590-\u08ac]/;
function yb(n, e, t) {
  let { $head: r } = e.selection;
  if (!r.parent.isTextblock)
    return !1;
  let i = r.parentOffset, s = !i, o = i == r.parent.content.size, l = n.domSelection();
  return l ? !gb.test(r.parent.textContent) || !l.modify ? t == "left" || t == "backward" ? s : o : kf(n, e, () => {
    let { focusNode: c, focusOffset: d, anchorNode: f, anchorOffset: h } = n.domSelectionRange(), g = l.caretBidiLevel;
    l.modify("move", t, "character");
    let y = r.depth ? n.docView.domAfterPos(r.before()) : n.dom, { focusNode: b, focusOffset: S } = n.domSelectionRange(), x = b && !y.contains(b.nodeType == 1 ? b : b.parentNode) || c == b && d == S;
    try {
      l.collapse(f, h), c && (c != f || d != h) && l.extend && l.extend(c, d);
    } catch {
    }
    return g != null && (l.caretBidiLevel = g), x;
  }) : r.pos == r.start() || r.pos == r.end();
}
let su = null, ou = null, lu = !1;
function bb(n, e, t) {
  return su == e && ou == t ? lu : (su = e, ou = t, lu = t == "up" || t == "down" ? mb(n, e, t) : yb(n, e, t));
}
const at = 0, au = 1, Tn = 2, wt = 3;
class ai {
  constructor(e, t, r, i) {
    this.parent = e, this.children = t, this.dom = r, this.contentDOM = i, this.dirty = at, r.pmViewDesc = this;
  }
  // Used to check whether a given description corresponds to a
  // widget/mark/node.
  matchesWidget(e) {
    return !1;
  }
  matchesMark(e) {
    return !1;
  }
  matchesNode(e, t, r) {
    return !1;
  }
  matchesHack(e) {
    return !1;
  }
  // When parsing in-editor content (in domchange.js), we allow
  // descriptions to determine the parse rules that should be used to
  // parse them.
  parseRule() {
    return null;
  }
  // Used by the editor's event handler to ignore events that come
  // from certain descs.
  stopEvent(e) {
    return !1;
  }
  // The size of the content represented by this desc.
  get size() {
    let e = 0;
    for (let t = 0; t < this.children.length; t++)
      e += this.children[t].size;
    return e;
  }
  // For block nodes, this represents the space taken up by their
  // start/end tokens.
  get border() {
    return 0;
  }
  destroy() {
    this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
    for (let e = 0; e < this.children.length; e++)
      this.children[e].destroy();
  }
  posBeforeChild(e) {
    for (let t = 0, r = this.posAtStart; ; t++) {
      let i = this.children[t];
      if (i == e)
        return r;
      r += i.size;
    }
  }
  get posBefore() {
    return this.parent.posBeforeChild(this);
  }
  get posAtStart() {
    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
  }
  get posAfter() {
    return this.posBefore + this.size;
  }
  get posAtEnd() {
    return this.posAtStart + this.size - 2 * this.border;
  }
  localPosFromDOM(e, t, r) {
    if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode))
      if (r < 0) {
        let s, o;
        if (e == this.contentDOM)
          s = e.childNodes[t - 1];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          s = e.previousSibling;
        }
        for (; s && !((o = s.pmViewDesc) && o.parent == this); )
          s = s.previousSibling;
        return s ? this.posBeforeChild(o) + o.size : this.posAtStart;
      } else {
        let s, o;
        if (e == this.contentDOM)
          s = e.childNodes[t];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          s = e.nextSibling;
        }
        for (; s && !((o = s.pmViewDesc) && o.parent == this); )
          s = s.nextSibling;
        return s ? this.posBeforeChild(o) : this.posAtEnd;
      }
    let i;
    if (e == this.dom && this.contentDOM)
      i = t > Ae(this.contentDOM);
    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
      i = e.compareDocumentPosition(this.contentDOM) & 2;
    else if (this.dom.firstChild) {
      if (t == 0)
        for (let s = e; ; s = s.parentNode) {
          if (s == this.dom) {
            i = !1;
            break;
          }
          if (s.previousSibling)
            break;
        }
      if (i == null && t == e.childNodes.length)
        for (let s = e; ; s = s.parentNode) {
          if (s == this.dom) {
            i = !0;
            break;
          }
          if (s.nextSibling)
            break;
        }
    }
    return i ?? r > 0 ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(e, t = !1) {
    for (let r = !0, i = e; i; i = i.parentNode) {
      let s = this.getDesc(i), o;
      if (s && (!t || s.node))
        if (r && (o = s.nodeDOM) && !(o.nodeType == 1 ? o.contains(e.nodeType == 1 ? e : e.parentNode) : o == e))
          r = !1;
        else
          return s;
    }
  }
  getDesc(e) {
    let t = e.pmViewDesc;
    for (let r = t; r; r = r.parent)
      if (r == this)
        return t;
  }
  posFromDOM(e, t, r) {
    for (let i = e; i; i = i.parentNode) {
      let s = this.getDesc(i);
      if (s)
        return s.localPosFromDOM(e, t, r);
    }
    return -1;
  }
  // Find the desc for the node after the given pos, if any. (When a
  // parent node overrode rendering, there might not be one.)
  descAt(e) {
    for (let t = 0, r = 0; t < this.children.length; t++) {
      let i = this.children[t], s = r + i.size;
      if (r == e && s != r) {
        for (; !i.border && i.children.length; )
          for (let o = 0; o < i.children.length; o++) {
            let l = i.children[o];
            if (l.size) {
              i = l;
              break;
            }
          }
        return i;
      }
      if (e < s)
        return i.descAt(e - r - i.border);
      r = s;
    }
  }
  domFromPos(e, t) {
    if (!this.contentDOM)
      return { node: this.dom, offset: 0, atom: e + 1 };
    let r = 0, i = 0;
    for (let s = 0; r < this.children.length; r++) {
      let o = this.children[r], l = s + o.size;
      if (l > e || o instanceof xf) {
        i = e - s;
        break;
      }
      s = l;
    }
    if (i)
      return this.children[r].domFromPos(i - this.children[r].border, t);
    for (let s; r && !(s = this.children[r - 1]).size && s instanceof Sf && s.side >= 0; r--)
      ;
    if (t <= 0) {
      let s, o = !0;
      for (; s = r ? this.children[r - 1] : null, !(!s || s.dom.parentNode == this.contentDOM); r--, o = !1)
        ;
      return s && t && o && !s.border && !s.domAtom ? s.domFromPos(s.size, t) : { node: this.contentDOM, offset: s ? Ae(s.dom) + 1 : 0 };
    } else {
      let s, o = !0;
      for (; s = r < this.children.length ? this.children[r] : null, !(!s || s.dom.parentNode == this.contentDOM); r++, o = !1)
        ;
      return s && o && !s.border && !s.domAtom ? s.domFromPos(0, t) : { node: this.contentDOM, offset: s ? Ae(s.dom) : this.contentDOM.childNodes.length };
    }
  }
  // Used to find a DOM range in a single parent for a given changed
  // range.
  parseRange(e, t, r = 0) {
    if (this.children.length == 0)
      return { node: this.contentDOM, from: e, to: t, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
    let i = -1, s = -1;
    for (let o = r, l = 0; ; l++) {
      let c = this.children[l], d = o + c.size;
      if (i == -1 && e <= d) {
        let f = o + c.border;
        if (e >= f && t <= d - c.border && c.node && c.contentDOM && this.contentDOM.contains(c.contentDOM))
          return c.parseRange(e, t, f);
        e = o;
        for (let h = l; h > 0; h--) {
          let g = this.children[h - 1];
          if (g.size && g.dom.parentNode == this.contentDOM && !g.emptyChildAt(1)) {
            i = Ae(g.dom) + 1;
            break;
          }
          e -= g.size;
        }
        i == -1 && (i = 0);
      }
      if (i > -1 && (d > t || l == this.children.length - 1)) {
        t = d;
        for (let f = l + 1; f < this.children.length; f++) {
          let h = this.children[f];
          if (h.size && h.dom.parentNode == this.contentDOM && !h.emptyChildAt(-1)) {
            s = Ae(h.dom);
            break;
          }
          t += h.size;
        }
        s == -1 && (s = this.contentDOM.childNodes.length);
        break;
      }
      o = d;
    }
    return { node: this.contentDOM, from: e, to: t, fromOffset: i, toOffset: s };
  }
  emptyChildAt(e) {
    if (this.border || !this.contentDOM || !this.children.length)
      return !1;
    let t = this.children[e < 0 ? 0 : this.children.length - 1];
    return t.size == 0 || t.emptyChildAt(e);
  }
  domAfterPos(e) {
    let { node: t, offset: r } = this.domFromPos(e, 0);
    if (t.nodeType != 1 || r == t.childNodes.length)
      throw new RangeError("No node after pos " + e);
    return t.childNodes[r];
  }
  // View descs are responsible for setting any selection that falls
  // entirely inside of them, so that custom implementations can do
  // custom things with the selection. Note that this falls apart when
  // a selection starts in such a node and ends in another, in which
  // case we just use whatever domFromPos produces as a best effort.
  setSelection(e, t, r, i = !1) {
    let s = Math.min(e, t), o = Math.max(e, t);
    for (let y = 0, b = 0; y < this.children.length; y++) {
      let S = this.children[y], x = b + S.size;
      if (s > b && o < x)
        return S.setSelection(e - b - S.border, t - b - S.border, r, i);
      b = x;
    }
    let l = this.domFromPos(e, e ? -1 : 1), c = t == e ? l : this.domFromPos(t, t ? -1 : 1), d = r.root.getSelection(), f = r.domSelectionRange(), h = !1;
    if ((lt || Le) && e == t) {
      let { node: y, offset: b } = l;
      if (y.nodeType == 3) {
        if (h = !!(b && y.nodeValue[b - 1] == `
`), h && b == y.nodeValue.length)
          for (let S = y, x; S; S = S.parentNode) {
            if (x = S.nextSibling) {
              x.nodeName == "BR" && (l = c = { node: x.parentNode, offset: Ae(x) + 1 });
              break;
            }
            let w = S.pmViewDesc;
            if (w && w.node && w.node.isBlock)
              break;
          }
      } else {
        let S = y.childNodes[b - 1];
        h = S && (S.nodeName == "BR" || S.contentEditable == "false");
      }
    }
    if (lt && f.focusNode && f.focusNode != c.node && f.focusNode.nodeType == 1) {
      let y = f.focusNode.childNodes[f.focusOffset];
      y && y.contentEditable == "false" && (i = !0);
    }
    if (!(i || h && Le) && Fn(l.node, l.offset, f.anchorNode, f.anchorOffset) && Fn(c.node, c.offset, f.focusNode, f.focusOffset))
      return;
    let g = !1;
    if ((d.extend || e == t) && !(h && lt)) {
      d.collapse(l.node, l.offset);
      try {
        e != t && d.extend(c.node, c.offset), g = !0;
      } catch {
      }
    }
    if (!g) {
      if (e > t) {
        let b = l;
        l = c, c = b;
      }
      let y = document.createRange();
      y.setEnd(c.node, c.offset), y.setStart(l.node, l.offset), d.removeAllRanges(), d.addRange(y);
    }
  }
  ignoreMutation(e) {
    return !this.contentDOM && e.type != "selection";
  }
  get contentLost() {
    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
  }
  // Remove a subtree of the element tree that has been touched
  // by a DOM change, so that the next update will redraw it.
  markDirty(e, t) {
    for (let r = 0, i = 0; i < this.children.length; i++) {
      let s = this.children[i], o = r + s.size;
      if (r == o ? e <= o && t >= r : e < o && t > r) {
        let l = r + s.border, c = o - s.border;
        if (e >= l && t <= c) {
          this.dirty = e == r || t == o ? Tn : au, e == l && t == c && (s.contentLost || s.dom.parentNode != this.contentDOM) ? s.dirty = wt : s.markDirty(e - l, t - l);
          return;
        } else
          s.dirty = s.dom == s.contentDOM && s.dom.parentNode == this.contentDOM && !s.children.length ? Tn : wt;
      }
      r = o;
    }
    this.dirty = Tn;
  }
  markParentsDirty() {
    let e = 1;
    for (let t = this.parent; t; t = t.parent, e++) {
      let r = e == 1 ? Tn : au;
      t.dirty < r && (t.dirty = r);
    }
  }
  get domAtom() {
    return !1;
  }
  get ignoreForCoords() {
    return !1;
  }
  get ignoreForSelection() {
    return !1;
  }
  isText(e) {
    return !1;
  }
}
class Sf extends ai {
  constructor(e, t, r, i) {
    let s, o = t.type.toDOM;
    if (typeof o == "function" && (o = o(r, () => {
      if (!s)
        return i;
      if (s.parent)
        return s.parent.posBeforeChild(s);
    })), !t.type.spec.raw) {
      if (o.nodeType != 1) {
        let l = document.createElement("span");
        l.appendChild(o), o = l;
      }
      o.contentEditable = "false", o.classList.add("ProseMirror-widget");
    }
    super(e, [], o, null), this.widget = t, this.widget = t, s = this;
  }
  matchesWidget(e) {
    return this.dirty == at && e.type.eq(this.widget.type);
  }
  parseRule() {
    return { ignore: !0 };
  }
  stopEvent(e) {
    let t = this.widget.spec.stopEvent;
    return t ? t(e) : !1;
  }
  ignoreMutation(e) {
    return e.type != "selection" || this.widget.spec.ignoreSelection;
  }
  destroy() {
    this.widget.type.destroy(this.dom), super.destroy();
  }
  get domAtom() {
    return !0;
  }
  get ignoreForSelection() {
    return !!this.widget.type.spec.relaxedSide;
  }
  get side() {
    return this.widget.type.side;
  }
}
class kb extends ai {
  constructor(e, t, r, i) {
    super(e, [], t, null), this.textDOM = r, this.text = i;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(e, t) {
    return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t;
  }
  domFromPos(e) {
    return { node: this.textDOM, offset: e };
  }
  ignoreMutation(e) {
    return e.type === "characterData" && e.target.nodeValue == e.oldValue;
  }
}
class Bn extends ai {
  constructor(e, t, r, i, s) {
    super(e, [], r, i), this.mark = t, this.spec = s;
  }
  static create(e, t, r, i) {
    let s = i.nodeViews[t.type.name], o = s && s(t, i, r);
    return (!o || !o.dom) && (o = Hn.renderSpec(document, t.type.spec.toDOM(t, r), null, t.attrs)), new Bn(e, t, o.dom, o.contentDOM || o.dom, o);
  }
  parseRule() {
    return this.dirty & wt || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
  }
  matchesMark(e) {
    return this.dirty != wt && this.mark.eq(e);
  }
  markDirty(e, t) {
    if (super.markDirty(e, t), this.dirty != at) {
      let r = this.parent;
      for (; !r.node; )
        r = r.parent;
      r.dirty < this.dirty && (r.dirty = this.dirty), this.dirty = at;
    }
  }
  slice(e, t, r) {
    let i = Bn.create(this.parent, this.mark, !0, r), s = this.children, o = this.size;
    t < o && (s = Ll(s, t, o, r)), e > 0 && (s = Ll(s, 0, e, r));
    for (let l = 0; l < s.length; l++)
      s[l].parent = i;
    return i.children = s, i;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
}
class cn extends ai {
  constructor(e, t, r, i, s, o, l, c, d) {
    super(e, [], s, o), this.node = t, this.outerDeco = r, this.innerDeco = i, this.nodeDOM = l;
  }
  // By default, a node is rendered using the `toDOM` method from the
  // node type spec. But client code can use the `nodeViews` spec to
  // supply a custom node view, which can influence various aspects of
  // the way the node works.
  //
  // (Using subclassing for this was intentionally decided against,
  // since it'd require exposing a whole slew of finicky
  // implementation details to the user code that they probably will
  // never need.)
  static create(e, t, r, i, s, o) {
    let l = s.nodeViews[t.type.name], c, d = l && l(t, s, () => {
      if (!c)
        return o;
      if (c.parent)
        return c.parent.posBeforeChild(c);
    }, r, i), f = d && d.dom, h = d && d.contentDOM;
    if (t.isText) {
      if (!f)
        f = document.createTextNode(t.text);
      else if (f.nodeType != 3)
        throw new RangeError("Text must be rendered as a DOM text node");
    } else f || ({ dom: f, contentDOM: h } = Hn.renderSpec(document, t.type.spec.toDOM(t), null, t.attrs));
    !h && !t.isText && f.nodeName != "BR" && (f.hasAttribute("contenteditable") || (f.contentEditable = "false"), t.type.spec.draggable && (f.draggable = !0));
    let g = f;
    return f = Cf(f, r, t), d ? c = new Sb(e, t, r, i, f, h || null, g, d, s, o + 1) : t.isText ? new Ks(e, t, r, i, f, g, s) : new cn(e, t, r, i, f, h || null, g, s, o + 1);
  }
  parseRule() {
    if (this.node.type.spec.reparseInView)
      return null;
    let e = { node: this.node.type.name, attrs: this.node.attrs };
    if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"), !this.contentDOM)
      e.getContent = () => this.node.content;
    else if (!this.contentLost)
      e.contentElement = this.contentDOM;
    else {
      for (let t = this.children.length - 1; t >= 0; t--) {
        let r = this.children[t];
        if (this.dom.contains(r.dom.parentNode)) {
          e.contentElement = r.dom.parentNode;
          break;
        }
      }
      e.contentElement || (e.getContent = () => A.empty);
    }
    return e;
  }
  matchesNode(e, t, r) {
    return this.dirty == at && e.eq(this.node) && is(t, this.outerDeco) && r.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return this.node.isLeaf ? 0 : 1;
  }
  // Syncs `this.children` to match `this.node.content` and the local
  // decorations, possibly introducing nesting for marks. Then, in a
  // separate step, syncs the DOM inside `this.contentDOM` to
  // `this.children`.
  updateChildren(e, t) {
    let r = this.node.inlineContent, i = t, s = e.composing ? this.localCompositionInfo(e, t) : null, o = s && s.pos > -1 ? s : null, l = s && s.pos < 0, c = new wb(this, o && o.node, e);
    Tb(this.node, this.innerDeco, (d, f, h) => {
      d.spec.marks ? c.syncToMarks(d.spec.marks, r, e, f) : d.type.side >= 0 && !h && c.syncToMarks(f == this.node.childCount ? re.none : this.node.child(f).marks, r, e, f), c.placeWidget(d, e, i);
    }, (d, f, h, g) => {
      c.syncToMarks(d.marks, r, e, g);
      let y;
      c.findNodeMatch(d, f, h, g) || l && e.state.selection.from > i && e.state.selection.to < i + d.nodeSize && (y = c.findIndexWithChild(s.node)) > -1 && c.updateNodeAt(d, f, h, y, e) || c.updateNextNode(d, f, h, e, g, i) || c.addNode(d, f, h, e, i), i += d.nodeSize;
    }), c.syncToMarks([], r, e, 0), this.node.isTextblock && c.addTextblockHacks(), c.destroyRest(), (c.changed || this.dirty == Tn) && (o && this.protectLocalComposition(e, o), wf(this.contentDOM, this.children, e), ur && Ob(this.dom));
  }
  localCompositionInfo(e, t) {
    let { from: r, to: i } = e.state.selection;
    if (!(e.state.selection instanceof V) || r < t || i > t + this.node.content.size)
      return null;
    let s = e.input.compositionNode;
    if (!s || !this.dom.contains(s.parentNode))
      return null;
    if (this.node.inlineContent) {
      let o = s.nodeValue, l = vb(this.node.content, o, r - t, i - t);
      return l < 0 ? null : { node: s, pos: l, text: o };
    } else
      return { node: s, pos: -1, text: "" };
  }
  protectLocalComposition(e, { node: t, pos: r, text: i }) {
    if (this.getDesc(t))
      return;
    let s = t;
    for (; s.parentNode != this.contentDOM; s = s.parentNode) {
      for (; s.previousSibling; )
        s.parentNode.removeChild(s.previousSibling);
      for (; s.nextSibling; )
        s.parentNode.removeChild(s.nextSibling);
      s.pmViewDesc && (s.pmViewDesc = void 0);
    }
    let o = new kb(this, s, t, i);
    e.input.compositionNodes.push(o), this.children = Ll(this.children, r, r + i.length, e, o);
  }
  // If this desc must be updated to match the given node decoration,
  // do so and return true.
  update(e, t, r, i) {
    return this.dirty == wt || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, r, i), !0);
  }
  updateInner(e, t, r, i) {
    this.updateOuterDeco(t), this.node = e, this.innerDeco = r, this.contentDOM && this.updateChildren(i, this.posAtStart), this.dirty = at;
  }
  updateOuterDeco(e) {
    if (is(e, this.outerDeco))
      return;
    let t = this.nodeDOM.nodeType != 1, r = this.dom;
    this.dom = Mf(this.dom, this.nodeDOM, Pl(this.outerDeco, this.node, t), Pl(e, this.node, t)), this.dom != r && (r.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
  }
  // Mark this node as being the selected node.
  selectNode() {
    this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.nodeDOM.draggable = !0));
  }
  // Remove selected node marking from this node.
  deselectNode() {
    this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.nodeDOM.removeAttribute("draggable"));
  }
  get domAtom() {
    return this.node.isAtom;
  }
}
function cu(n, e, t, r, i) {
  Cf(r, e, n);
  let s = new cn(void 0, n, e, t, r, r, r, i, 0);
  return s.contentDOM && s.updateChildren(i, 0), s;
}
class Ks extends cn {
  constructor(e, t, r, i, s, o, l) {
    super(e, t, r, i, s, null, o, l, 0);
  }
  parseRule() {
    let e = this.nodeDOM.parentNode;
    for (; e && e != this.dom && !e.pmIsDeco; )
      e = e.parentNode;
    return { skip: e || !0 };
  }
  update(e, t, r, i) {
    return this.dirty == wt || this.dirty != at && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t), (this.dirty != at || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, i.trackWrites == this.nodeDOM && (i.trackWrites = null)), this.node = e, this.dirty = at, !0);
  }
  inParent() {
    let e = this.parent.contentDOM;
    for (let t = this.nodeDOM; t; t = t.parentNode)
      if (t == e)
        return !0;
    return !1;
  }
  domFromPos(e) {
    return { node: this.nodeDOM, offset: e };
  }
  localPosFromDOM(e, t, r) {
    return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : super.localPosFromDOM(e, t, r);
  }
  ignoreMutation(e) {
    return e.type != "characterData" && e.type != "selection";
  }
  slice(e, t, r) {
    let i = this.node.cut(e, t), s = document.createTextNode(i.text);
    return new Ks(this.parent, i, this.outerDeco, this.innerDeco, s, s, r);
  }
  markDirty(e, t) {
    super.markDirty(e, t), this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = wt);
  }
  get domAtom() {
    return !1;
  }
  isText(e) {
    return this.node.text == e;
  }
}
class xf extends ai {
  parseRule() {
    return { ignore: !0 };
  }
  matchesHack(e) {
    return this.dirty == at && this.dom.nodeName == e;
  }
  get domAtom() {
    return !0;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class Sb extends cn {
  constructor(e, t, r, i, s, o, l, c, d, f) {
    super(e, t, r, i, s, o, l, d, f), this.spec = c;
  }
  // A custom `update` method gets to decide whether the update goes
  // through. If it does, and there's a `contentDOM` node, our logic
  // updates the children.
  update(e, t, r, i) {
    if (this.dirty == wt)
      return !1;
    if (this.spec.update && (this.node.type == e.type || this.spec.multiType)) {
      let s = this.spec.update(e, t, r);
      return s && this.updateInner(e, t, r, i), s;
    } else return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, t, r, i);
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(e, t, r, i) {
    this.spec.setSelection ? this.spec.setSelection(e, t, r.root) : super.setSelection(e, t, r, i);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
  stopEvent(e) {
    return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
}
function wf(n, e, t) {
  let r = n.firstChild, i = !1;
  for (let s = 0; s < e.length; s++) {
    let o = e[s], l = o.dom;
    if (l.parentNode == n) {
      for (; l != r; )
        r = uu(r), i = !0;
      r = r.nextSibling;
    } else
      i = !0, n.insertBefore(l, r);
    if (o instanceof Bn) {
      let c = r ? r.previousSibling : n.lastChild;
      wf(o.contentDOM, o.children, t), r = c ? c.nextSibling : n.firstChild;
    }
  }
  for (; r; )
    r = uu(r), i = !0;
  i && t.trackWrites == n && (t.trackWrites = null);
}
const Pr = function(n) {
  n && (this.nodeName = n);
};
Pr.prototype = /* @__PURE__ */ Object.create(null);
const On = [new Pr()];
function Pl(n, e, t) {
  if (n.length == 0)
    return On;
  let r = t ? On[0] : new Pr(), i = [r];
  for (let s = 0; s < n.length; s++) {
    let o = n[s].type.attrs;
    if (o) {
      o.nodeName && i.push(r = new Pr(o.nodeName));
      for (let l in o) {
        let c = o[l];
        c != null && (t && i.length == 1 && i.push(r = new Pr(e.isInline ? "span" : "div")), l == "class" ? r.class = (r.class ? r.class + " " : "") + c : l == "style" ? r.style = (r.style ? r.style + ";" : "") + c : l != "nodeName" && (r[l] = c));
      }
    }
  }
  return i;
}
function Mf(n, e, t, r) {
  if (t == On && r == On)
    return e;
  let i = e;
  for (let s = 0; s < r.length; s++) {
    let o = r[s], l = t[s];
    if (s) {
      let c;
      l && l.nodeName == o.nodeName && i != n && (c = i.parentNode) && c.nodeName.toLowerCase() == o.nodeName || (c = document.createElement(o.nodeName), c.pmIsDeco = !0, c.appendChild(i), l = On[0]), i = c;
    }
    xb(i, l || On[0], o);
  }
  return i;
}
function xb(n, e, t) {
  for (let r in e)
    r != "class" && r != "style" && r != "nodeName" && !(r in t) && n.removeAttribute(r);
  for (let r in t)
    r != "class" && r != "style" && r != "nodeName" && t[r] != e[r] && n.setAttribute(r, t[r]);
  if (e.class != t.class) {
    let r = e.class ? e.class.split(" ").filter(Boolean) : [], i = t.class ? t.class.split(" ").filter(Boolean) : [];
    for (let s = 0; s < r.length; s++)
      i.indexOf(r[s]) == -1 && n.classList.remove(r[s]);
    for (let s = 0; s < i.length; s++)
      r.indexOf(i[s]) == -1 && n.classList.add(i[s]);
    n.classList.length == 0 && n.removeAttribute("class");
  }
  if (e.style != t.style) {
    if (e.style) {
      let r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, i;
      for (; i = r.exec(e.style); )
        n.style.removeProperty(i[1]);
    }
    t.style && (n.style.cssText += t.style);
  }
}
function Cf(n, e, t) {
  return Mf(n, n, On, Pl(e, t, n.nodeType != 1));
}
function is(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (!n[t].type.eq(e[t].type))
      return !1;
  return !0;
}
function uu(n) {
  let e = n.nextSibling;
  return n.parentNode.removeChild(n), e;
}
class wb {
  constructor(e, t, r) {
    this.lock = t, this.view = r, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = Mb(e.node.content, e);
  }
  // Destroy and remove the children between the given indices in
  // `this.top`.
  destroyBetween(e, t) {
    if (e != t) {
      for (let r = e; r < t; r++)
        this.top.children[r].destroy();
      this.top.children.splice(e, t - e), this.changed = !0;
    }
  }
  // Destroy all remaining children in `this.top`.
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  // Sync the current stack of mark descs with the given array of
  // marks, reusing existing mark descs when possible.
  syncToMarks(e, t, r, i) {
    let s = 0, o = this.stack.length >> 1, l = Math.min(o, e.length);
    for (; s < l && (s == o - 1 ? this.top : this.stack[s + 1 << 1]).matchesMark(e[s]) && e[s].type.spec.spanning !== !1; )
      s++;
    for (; s < o; )
      this.destroyRest(), this.top.dirty = at, this.index = this.stack.pop(), this.top = this.stack.pop(), o--;
    for (; o < e.length; ) {
      this.stack.push(this.top, this.index + 1);
      let c = -1, d = this.top.children.length;
      i < this.preMatch.index && (d = Math.min(this.index + 3, d));
      for (let f = this.index; f < d; f++) {
        let h = this.top.children[f];
        if (h.matchesMark(e[o]) && !this.isLocked(h.dom)) {
          c = f;
          break;
        }
      }
      if (c > -1)
        c > this.index && (this.changed = !0, this.destroyBetween(this.index, c)), this.top = this.top.children[this.index];
      else {
        let f = Bn.create(this.top, e[o], t, r);
        this.top.children.splice(this.index, 0, f), this.top = f, this.changed = !0;
      }
      this.index = 0, o++;
    }
  }
  // Try to find a node desc matching the given data. Skip over it and
  // return true when successful.
  findNodeMatch(e, t, r, i) {
    let s = -1, o;
    if (i >= this.preMatch.index && (o = this.preMatch.matches[i - this.preMatch.index]).parent == this.top && o.matchesNode(e, t, r))
      s = this.top.children.indexOf(o, this.index);
    else
      for (let l = this.index, c = Math.min(this.top.children.length, l + 5); l < c; l++) {
        let d = this.top.children[l];
        if (d.matchesNode(e, t, r) && !this.preMatch.matched.has(d)) {
          s = l;
          break;
        }
      }
    return s < 0 ? !1 : (this.destroyBetween(this.index, s), this.index++, !0);
  }
  updateNodeAt(e, t, r, i, s) {
    let o = this.top.children[i];
    return o.dirty == wt && o.dom == o.contentDOM && (o.dirty = Tn), o.update(e, t, r, s) ? (this.destroyBetween(this.index, i), this.index++, !0) : !1;
  }
  findIndexWithChild(e) {
    for (; ; ) {
      let t = e.parentNode;
      if (!t)
        return -1;
      if (t == this.top.contentDOM) {
        let r = e.pmViewDesc;
        if (r) {
          for (let i = this.index; i < this.top.children.length; i++)
            if (this.top.children[i] == r)
              return i;
        }
        return -1;
      }
      e = t;
    }
  }
  // Try to update the next node, if any, to the given data. Checks
  // pre-matches to avoid overwriting nodes that could still be used.
  updateNextNode(e, t, r, i, s, o) {
    for (let l = this.index; l < this.top.children.length; l++) {
      let c = this.top.children[l];
      if (c instanceof cn) {
        let d = this.preMatch.matched.get(c);
        if (d != null && d != s)
          return !1;
        let f = c.dom, h, g = this.isLocked(f) && !(e.isText && c.node && c.node.isText && c.nodeDOM.nodeValue == e.text && c.dirty != wt && is(t, c.outerDeco));
        if (!g && c.update(e, t, r, i))
          return this.destroyBetween(this.index, l), c.dom != f && (this.changed = !0), this.index++, !0;
        if (!g && (h = this.recreateWrapper(c, e, t, r, i, o)))
          return this.destroyBetween(this.index, l), this.top.children[this.index] = h, h.contentDOM && (h.dirty = Tn, h.updateChildren(i, o + 1), h.dirty = at), this.changed = !0, this.index++, !0;
        break;
      }
    }
    return !1;
  }
  // When a node with content is replaced by a different node with
  // identical content, move over its children.
  recreateWrapper(e, t, r, i, s, o) {
    if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content) || !is(r, e.outerDeco) || !i.eq(e.innerDeco))
      return null;
    let l = cn.create(this.top, t, r, i, s, o);
    if (l.contentDOM) {
      l.children = e.children, e.children = [];
      for (let c of l.children)
        c.parent = l;
    }
    return e.destroy(), l;
  }
  // Insert the node as a newly created node desc.
  addNode(e, t, r, i, s) {
    let o = cn.create(this.top, e, t, r, i, s);
    o.contentDOM && o.updateChildren(i, s + 1), this.top.children.splice(this.index++, 0, o), this.changed = !0;
  }
  placeWidget(e, t, r) {
    let i = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (i && i.matchesWidget(e) && (e == i.widget || !i.widget.type.toDOM.parentNode))
      this.index++;
    else {
      let s = new Sf(this.top, e, t, r);
      this.top.children.splice(this.index++, 0, s), this.changed = !0;
    }
  }
  // Make sure a textblock looks and behaves correctly in
  // contentEditable.
  addTextblockHacks() {
    let e = this.top.children[this.index - 1], t = this.top;
    for (; e instanceof Bn; )
      t = e, e = t.children[t.children.length - 1];
    (!e || // Empty textblock
    !(e instanceof Ks) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((Le || Ne) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t), this.addHackNode("BR", this.top));
  }
  addHackNode(e, t) {
    if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e))
      this.index++;
    else {
      let r = document.createElement(e);
      e == "IMG" && (r.className = "ProseMirror-separator", r.alt = ""), e == "BR" && (r.className = "ProseMirror-trailingBreak");
      let i = new xf(this.top, [], r, null);
      t != this.top ? t.children.push(i) : t.children.splice(this.index++, 0, i), this.changed = !0;
    }
  }
  isLocked(e) {
    return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode));
  }
}
function Mb(n, e) {
  let t = e, r = t.children.length, i = n.childCount, s = /* @__PURE__ */ new Map(), o = [];
  e: for (; i > 0; ) {
    let l;
    for (; ; )
      if (r) {
        let d = t.children[r - 1];
        if (d instanceof Bn)
          t = d, r = d.children.length;
        else {
          l = d, r--;
          break;
        }
      } else {
        if (t == e)
          break e;
        r = t.parent.children.indexOf(t), t = t.parent;
      }
    let c = l.node;
    if (c) {
      if (c != n.child(i - 1))
        break;
      --i, s.set(l, i), o.push(l);
    }
  }
  return { index: i, matched: s, matches: o.reverse() };
}
function Cb(n, e) {
  return n.type.side - e.type.side;
}
function Tb(n, e, t, r) {
  let i = e.locals(n), s = 0;
  if (i.length == 0) {
    for (let d = 0; d < n.childCount; d++) {
      let f = n.child(d);
      r(f, i, e.forChild(s, f), d), s += f.nodeSize;
    }
    return;
  }
  let o = 0, l = [], c = null;
  for (let d = 0; ; ) {
    let f, h;
    for (; o < i.length && i[o].to == s; ) {
      let x = i[o++];
      x.widget && (f ? (h || (h = [f])).push(x) : f = x);
    }
    if (f)
      if (h) {
        h.sort(Cb);
        for (let x = 0; x < h.length; x++)
          t(h[x], d, !!c);
      } else
        t(f, d, !!c);
    let g, y;
    if (c)
      y = -1, g = c, c = null;
    else if (d < n.childCount)
      y = d, g = n.child(d++);
    else
      break;
    for (let x = 0; x < l.length; x++)
      l[x].to <= s && l.splice(x--, 1);
    for (; o < i.length && i[o].from <= s && i[o].to > s; )
      l.push(i[o++]);
    let b = s + g.nodeSize;
    if (g.isText) {
      let x = b;
      o < i.length && i[o].from < x && (x = i[o].from);
      for (let w = 0; w < l.length; w++)
        l[w].to < x && (x = l[w].to);
      x < b && (c = g.cut(x - s), g = g.cut(0, x - s), b = x, y = -1);
    } else
      for (; o < i.length && i[o].to < b; )
        o++;
    let S = g.isInline && !g.isLeaf ? l.filter((x) => !x.inline) : l.slice();
    r(g, S, e.forChild(s, g), y), s = b;
  }
}
function Ob(n) {
  if (n.nodeName == "UL" || n.nodeName == "OL") {
    let e = n.style.cssText;
    n.style.cssText = e + "; list-style: square !important", window.getComputedStyle(n).listStyle, n.style.cssText = e;
  }
}
function vb(n, e, t, r) {
  for (let i = 0, s = 0; i < n.childCount && s <= r; ) {
    let o = n.child(i++), l = s;
    if (s += o.nodeSize, !o.isText)
      continue;
    let c = o.text;
    for (; i < n.childCount; ) {
      let d = n.child(i++);
      if (s += d.nodeSize, !d.isText)
        break;
      c += d.text;
    }
    if (s >= t) {
      if (s >= r && c.slice(r - e.length - l, r - l) == e)
        return r - e.length;
      let d = l < r ? c.lastIndexOf(e, r - l - 1) : -1;
      if (d >= 0 && d + e.length + l >= t)
        return l + d;
      if (t == r && c.length >= r + e.length - l && c.slice(r - l, r - l + e.length) == e)
        return r;
    }
  }
  return -1;
}
function Ll(n, e, t, r, i) {
  let s = [];
  for (let o = 0, l = 0; o < n.length; o++) {
    let c = n[o], d = l, f = l += c.size;
    d >= t || f <= e ? s.push(c) : (d < e && s.push(c.slice(0, e - d, r)), i && (s.push(i), i = void 0), f > t && s.push(c.slice(t - d, c.size, r)));
  }
  return s;
}
function pa(n, e = null) {
  let t = n.domSelectionRange(), r = n.state.doc;
  if (!t.focusNode)
    return null;
  let i = n.docView.nearestDesc(t.focusNode), s = i && i.size == 0, o = n.docView.posFromDOM(t.focusNode, t.focusOffset, 1);
  if (o < 0)
    return null;
  let l = r.resolve(o), c, d;
  if (Gs(t)) {
    for (c = o; i && !i.node; )
      i = i.parent;
    let h = i.node;
    if (i && h.isAtom && $.isSelectable(h) && i.parent && !(h.isInline && eb(t.focusNode, t.focusOffset, i.dom))) {
      let g = i.posBefore;
      d = new $(o == g ? l : r.resolve(g));
    }
  } else {
    if (t instanceof n.dom.ownerDocument.defaultView.Selection && t.rangeCount > 1) {
      let h = o, g = o;
      for (let y = 0; y < t.rangeCount; y++) {
        let b = t.getRangeAt(y);
        h = Math.min(h, n.docView.posFromDOM(b.startContainer, b.startOffset, 1)), g = Math.max(g, n.docView.posFromDOM(b.endContainer, b.endOffset, -1));
      }
      if (h < 0)
        return null;
      [c, o] = g == n.state.selection.anchor ? [g, h] : [h, g], l = r.resolve(o);
    } else
      c = n.docView.posFromDOM(t.anchorNode, t.anchorOffset, 1);
    if (c < 0)
      return null;
  }
  let f = r.resolve(c);
  if (!d) {
    let h = e == "pointer" || n.state.selection.head < l.pos && !s ? 1 : -1;
    d = ma(n, f, l, h);
  }
  return d;
}
function Tf(n) {
  return n.editable ? n.hasFocus() : vf(n) && document.activeElement && document.activeElement.contains(n.dom);
}
function $t(n, e = !1) {
  let t = n.state.selection;
  if (Of(n, t), !!Tf(n)) {
    if (!e && n.input.mouseDown && n.input.mouseDown.allowDefault && Ne) {
      let r = n.domSelectionRange(), i = n.domObserver.currentSelection;
      if (r.anchorNode && i.anchorNode && Fn(r.anchorNode, r.anchorOffset, i.anchorNode, i.anchorOffset)) {
        n.input.mouseDown.delayedSelectionSync = !0, n.domObserver.setCurSelection();
        return;
      }
    }
    if (n.domObserver.disconnectSelection(), n.cursorWrapper)
      Ab(n);
    else {
      let { anchor: r, head: i } = t, s, o;
      du && !(t instanceof V) && (t.$from.parent.inlineContent || (s = fu(n, t.from)), !t.empty && !t.$from.parent.inlineContent && (o = fu(n, t.to))), n.docView.setSelection(r, i, n, e), du && (s && hu(s), o && hu(o)), t.visible ? n.dom.classList.remove("ProseMirror-hideselection") : (n.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && Eb(n));
    }
    n.domObserver.setCurSelection(), n.domObserver.connectSelection();
  }
}
const du = Le || Ne && ff < 63;
function fu(n, e) {
  let { node: t, offset: r } = n.docView.domFromPos(e, 0), i = r < t.childNodes.length ? t.childNodes[r] : null, s = r ? t.childNodes[r - 1] : null;
  if (Le && i && i.contentEditable == "false")
    return Xo(i);
  if ((!i || i.contentEditable == "false") && (!s || s.contentEditable == "false")) {
    if (i)
      return Xo(i);
    if (s)
      return Xo(s);
  }
}
function Xo(n) {
  return n.contentEditable = "true", Le && n.draggable && (n.draggable = !1, n.wasDraggable = !0), n;
}
function hu(n) {
  n.contentEditable = "false", n.wasDraggable && (n.draggable = !0, n.wasDraggable = null);
}
function Eb(n) {
  let e = n.dom.ownerDocument;
  e.removeEventListener("selectionchange", n.input.hideSelectionGuard);
  let t = n.domSelectionRange(), r = t.anchorNode, i = t.anchorOffset;
  e.addEventListener("selectionchange", n.input.hideSelectionGuard = () => {
    (t.anchorNode != r || t.anchorOffset != i) && (e.removeEventListener("selectionchange", n.input.hideSelectionGuard), setTimeout(() => {
      (!Tf(n) || n.state.selection.visible) && n.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function Ab(n) {
  let e = n.domSelection();
  if (!e)
    return;
  let t = n.cursorWrapper.dom, r = t.nodeName == "IMG";
  r ? e.collapse(t.parentNode, Ae(t) + 1) : e.collapse(t, 0), !r && !n.state.selection.visible && Ke && an <= 11 && (t.disabled = !0, t.disabled = !1);
}
function Of(n, e) {
  if (e instanceof $) {
    let t = n.docView.descAt(e.from);
    t != n.lastSelectedViewDesc && (pu(n), t && t.selectNode(), n.lastSelectedViewDesc = t);
  } else
    pu(n);
}
function pu(n) {
  n.lastSelectedViewDesc && (n.lastSelectedViewDesc.parent && n.lastSelectedViewDesc.deselectNode(), n.lastSelectedViewDesc = void 0);
}
function ma(n, e, t, r) {
  return n.someProp("createSelectionBetween", (i) => i(n, e, t)) || V.between(e, t, r);
}
function mu(n) {
  return n.editable && !n.hasFocus() ? !1 : vf(n);
}
function vf(n) {
  let e = n.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return n.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (n.editable || n.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function Db(n) {
  let e = n.docView.domFromPos(n.state.selection.anchor, 0), t = n.domSelectionRange();
  return Fn(e.node, e.offset, t.anchorNode, t.anchorOffset);
}
function Fl(n, e) {
  let { $anchor: t, $head: r } = n.selection, i = e > 0 ? t.max(r) : t.min(r), s = i.parent.inlineContent ? i.depth ? n.doc.resolve(e > 0 ? i.after() : i.before()) : null : i;
  return s && G.findFrom(s, e);
}
function Qt(n, e) {
  return n.dispatch(n.state.tr.setSelection(e).scrollIntoView()), !0;
}
function gu(n, e, t) {
  let r = n.state.selection;
  if (r instanceof V)
    if (t.indexOf("s") > -1) {
      let { $head: i } = r, s = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter;
      if (!s || s.isText || !s.isLeaf)
        return !1;
      let o = n.state.doc.resolve(i.pos + s.nodeSize * (e < 0 ? -1 : 1));
      return Qt(n, new V(r.$anchor, o));
    } else if (r.empty) {
      if (n.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let i = Fl(n.state, e);
        return i && i instanceof $ ? Qt(n, i) : !1;
      } else if (!(st && t.indexOf("m") > -1)) {
        let i = r.$head, s = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter, o;
        if (!s || s.isText)
          return !1;
        let l = e < 0 ? i.pos - s.nodeSize : i.pos;
        return s.isAtom || (o = n.docView.descAt(l)) && !o.contentDOM ? $.isSelectable(s) ? Qt(n, new $(e < 0 ? n.state.doc.resolve(i.pos - s.nodeSize) : i)) : li ? Qt(n, new V(n.state.doc.resolve(e < 0 ? l : l + s.nodeSize))) : !1 : !1;
      }
    } else return !1;
  else {
    if (r instanceof $ && r.node.isInline)
      return Qt(n, new V(e > 0 ? r.$to : r.$from));
    {
      let i = Fl(n.state, e);
      return i ? Qt(n, i) : !1;
    }
  }
}
function ss(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function Lr(n, e) {
  let t = n.pmViewDesc;
  return t && t.size == 0 && (e < 0 || n.nextSibling || n.nodeName != "BR");
}
function Xn(n, e) {
  return e < 0 ? Nb(n) : Rb(n);
}
function Nb(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i, s, o = !1;
  for (lt && t.nodeType == 1 && r < ss(t) && Lr(t.childNodes[r], -1) && (o = !0); ; )
    if (r > 0) {
      if (t.nodeType != 1)
        break;
      {
        let l = t.childNodes[r - 1];
        if (Lr(l, -1))
          i = t, s = --r;
        else if (l.nodeType == 3)
          t = l, r = t.nodeValue.length;
        else
          break;
      }
    } else {
      if (Ef(t))
        break;
      {
        let l = t.previousSibling;
        for (; l && Lr(l, -1); )
          i = t.parentNode, s = Ae(l), l = l.previousSibling;
        if (l)
          t = l, r = ss(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = 0;
        }
      }
    }
  o ? Bl(n, t, r) : i && Bl(n, i, s);
}
function Rb(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i = ss(t), s, o;
  for (; ; )
    if (r < i) {
      if (t.nodeType != 1)
        break;
      let l = t.childNodes[r];
      if (Lr(l, 1))
        s = t, o = ++r;
      else
        break;
    } else {
      if (Ef(t))
        break;
      {
        let l = t.nextSibling;
        for (; l && Lr(l, 1); )
          s = l.parentNode, o = Ae(l) + 1, l = l.nextSibling;
        if (l)
          t = l, r = 0, i = ss(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = i = 0;
        }
      }
    }
  s && Bl(n, s, o);
}
function Ef(n) {
  let e = n.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function Ib(n, e) {
  for (; n && e == n.childNodes.length && !oi(n); )
    e = Ae(n) + 1, n = n.parentNode;
  for (; n && e < n.childNodes.length; ) {
    let t = n.childNodes[e];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = 0;
  }
}
function _b(n, e) {
  for (; n && !e && !oi(n); )
    e = Ae(n), n = n.parentNode;
  for (; n && e; ) {
    let t = n.childNodes[e - 1];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = n.childNodes.length;
  }
}
function Bl(n, e, t) {
  if (e.nodeType != 3) {
    let s, o;
    (o = Ib(e, t)) ? (e = o, t = 0) : (s = _b(e, t)) && (e = s, t = s.nodeValue.length);
  }
  let r = n.domSelection();
  if (!r)
    return;
  if (Gs(r)) {
    let s = document.createRange();
    s.setEnd(e, t), s.setStart(e, t), r.removeAllRanges(), r.addRange(s);
  } else r.extend && r.extend(e, t);
  n.domObserver.setCurSelection();
  let { state: i } = n;
  setTimeout(() => {
    n.state == i && $t(n);
  }, 50);
}
function yu(n, e) {
  let t = n.state.doc.resolve(e);
  if (!(Ne || hf) && t.parent.inlineContent) {
    let i = n.coordsAtPos(e);
    if (e > t.start()) {
      let s = n.coordsAtPos(e - 1), o = (s.top + s.bottom) / 2;
      if (o > i.top && o < i.bottom && Math.abs(s.left - i.left) > 1)
        return s.left < i.left ? "ltr" : "rtl";
    }
    if (e < t.end()) {
      let s = n.coordsAtPos(e + 1), o = (s.top + s.bottom) / 2;
      if (o > i.top && o < i.bottom && Math.abs(s.left - i.left) > 1)
        return s.left > i.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(n.dom).direction == "rtl" ? "rtl" : "ltr";
}
function bu(n, e, t) {
  let r = n.state.selection;
  if (r instanceof V && !r.empty || t.indexOf("s") > -1 || st && t.indexOf("m") > -1)
    return !1;
  let { $from: i, $to: s } = r;
  if (!i.parent.inlineContent || n.endOfTextblock(e < 0 ? "up" : "down")) {
    let o = Fl(n.state, e);
    if (o && o instanceof $)
      return Qt(n, o);
  }
  if (!i.parent.inlineContent) {
    let o = e < 0 ? i : s, l = r instanceof et ? G.near(o, e) : G.findFrom(o, e);
    return l ? Qt(n, l) : !1;
  }
  return !1;
}
function ku(n, e) {
  if (!(n.state.selection instanceof V))
    return !0;
  let { $head: t, $anchor: r, empty: i } = n.state.selection;
  if (!t.sameParent(r))
    return !0;
  if (!i)
    return !1;
  if (n.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0;
  let s = !t.textOffset && (e < 0 ? t.nodeBefore : t.nodeAfter);
  if (s && !s.isText) {
    let o = n.state.tr;
    return e < 0 ? o.delete(t.pos - s.nodeSize, t.pos) : o.delete(t.pos, t.pos + s.nodeSize), n.dispatch(o), !0;
  }
  return !1;
}
function Su(n, e, t) {
  n.domObserver.stop(), e.contentEditable = t, n.domObserver.start();
}
function Pb(n) {
  if (!Le || n.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: t } = n.domSelectionRange();
  if (e && e.nodeType == 1 && t == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    Su(n, r, "true"), setTimeout(() => Su(n, r, "false"), 20);
  }
  return !1;
}
function Lb(n) {
  let e = "";
  return n.ctrlKey && (e += "c"), n.metaKey && (e += "m"), n.altKey && (e += "a"), n.shiftKey && (e += "s"), e;
}
function Fb(n, e) {
  let t = e.keyCode, r = Lb(e);
  if (t == 8 || st && t == 72 && r == "c")
    return ku(n, -1) || Xn(n, -1);
  if (t == 46 && !e.shiftKey || st && t == 68 && r == "c")
    return ku(n, 1) || Xn(n, 1);
  if (t == 13 || t == 27)
    return !0;
  if (t == 37 || st && t == 66 && r == "c") {
    let i = t == 37 ? yu(n, n.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return gu(n, i, r) || Xn(n, i);
  } else if (t == 39 || st && t == 70 && r == "c") {
    let i = t == 39 ? yu(n, n.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return gu(n, i, r) || Xn(n, i);
  } else {
    if (t == 38 || st && t == 80 && r == "c")
      return bu(n, -1, r) || Xn(n, -1);
    if (t == 40 || st && t == 78 && r == "c")
      return Pb(n) || bu(n, 1, r) || Xn(n, 1);
    if (r == (st ? "m" : "c") && (t == 66 || t == 73 || t == 89 || t == 90))
      return !0;
  }
  return !1;
}
function ga(n, e) {
  n.someProp("transformCopied", (y) => {
    e = y(e, n);
  });
  let t = [], { content: r, openStart: i, openEnd: s } = e;
  for (; i > 1 && s > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    i--, s--;
    let y = r.firstChild;
    t.push(y.type.name, y.attrs != y.type.defaultAttrs ? y.attrs : null), r = y.content;
  }
  let o = n.someProp("clipboardSerializer") || Hn.fromSchema(n.state.schema), l = _f(), c = l.createElement("div");
  c.appendChild(o.serializeFragment(r, { document: l }));
  let d = c.firstChild, f, h = 0;
  for (; d && d.nodeType == 1 && (f = If[d.nodeName.toLowerCase()]); ) {
    for (let y = f.length - 1; y >= 0; y--) {
      let b = l.createElement(f[y]);
      for (; c.firstChild; )
        b.appendChild(c.firstChild);
      c.appendChild(b), h++;
    }
    d = c.firstChild;
  }
  d && d.nodeType == 1 && d.setAttribute("data-pm-slice", `${i} ${s}${h ? ` -${h}` : ""} ${JSON.stringify(t)}`);
  let g = n.someProp("clipboardTextSerializer", (y) => y(e, n)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: c, text: g, slice: e };
}
function Af(n, e, t, r, i) {
  let s = i.parent.type.spec.code, o, l;
  if (!t && !e)
    return null;
  let c = !!e && (r || s || !t);
  if (c) {
    if (n.someProp("transformPastedText", (g) => {
      e = g(e, s || r, n);
    }), s)
      return l = new L(A.from(n.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0), n.someProp("transformPasted", (g) => {
        l = g(l, n, !0);
      }), l;
    let h = n.someProp("clipboardTextParser", (g) => g(e, i, r, n));
    if (h)
      l = h;
    else {
      let g = i.marks(), { schema: y } = n.state, b = Hn.fromSchema(y);
      o = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((S) => {
        let x = o.appendChild(document.createElement("p"));
        S && x.appendChild(b.serializeNode(y.text(S, g)));
      });
    }
  } else
    n.someProp("transformPastedHTML", (h) => {
      t = h(t, n);
    }), o = $b(t), li && Wb(o);
  let d = o && o.querySelector("[data-pm-slice]"), f = d && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(d.getAttribute("data-pm-slice") || "");
  if (f && f[3])
    for (let h = +f[3]; h > 0; h--) {
      let g = o.firstChild;
      for (; g && g.nodeType != 1; )
        g = g.nextSibling;
      if (!g)
        break;
      o = g;
    }
  if (l || (l = (n.someProp("clipboardParser") || n.someProp("domParser") || ln.fromSchema(n.state.schema)).parseSlice(o, {
    preserveWhitespace: !!(c || f),
    context: i,
    ruleFromNode(g) {
      return g.nodeName == "BR" && !g.nextSibling && g.parentNode && !Bb.test(g.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), f)
    l = Vb(xu(l, +f[1], +f[2]), f[4]);
  else if (l = L.maxOpen(zb(l.content, i), !0), l.openStart || l.openEnd) {
    let h = 0, g = 0;
    for (let y = l.content.firstChild; h < l.openStart && !y.type.spec.isolating; h++, y = y.firstChild)
      ;
    for (let y = l.content.lastChild; g < l.openEnd && !y.type.spec.isolating; g++, y = y.lastChild)
      ;
    l = xu(l, h, g);
  }
  return n.someProp("transformPasted", (h) => {
    l = h(l, n, c);
  }), l;
}
const Bb = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function zb(n, e) {
  if (n.childCount < 2)
    return n;
  for (let t = e.depth; t >= 0; t--) {
    let i = e.node(t).contentMatchAt(e.index(t)), s, o = [];
    if (n.forEach((l) => {
      if (!o)
        return;
      let c = i.findWrapping(l.type), d;
      if (!c)
        return o = null;
      if (d = o.length && s.length && Nf(c, s, l, o[o.length - 1], 0))
        o[o.length - 1] = d;
      else {
        o.length && (o[o.length - 1] = Rf(o[o.length - 1], s.length));
        let f = Df(l, c);
        o.push(f), i = i.matchType(f.type), s = c;
      }
    }), o)
      return A.from(o);
  }
  return n;
}
function Df(n, e, t = 0) {
  for (let r = e.length - 1; r >= t; r--)
    n = e[r].create(null, A.from(n));
  return n;
}
function Nf(n, e, t, r, i) {
  if (i < n.length && i < e.length && n[i] == e[i]) {
    let s = Nf(n, e, t, r.lastChild, i + 1);
    if (s)
      return r.copy(r.content.replaceChild(r.childCount - 1, s));
    if (r.contentMatchAt(r.childCount).matchType(i == n.length - 1 ? t.type : n[i + 1]))
      return r.copy(r.content.append(A.from(Df(t, n, i + 1))));
  }
}
function Rf(n, e) {
  if (e == 0)
    return n;
  let t = n.content.replaceChild(n.childCount - 1, Rf(n.lastChild, e - 1)), r = n.contentMatchAt(n.childCount).fillBefore(A.empty, !0);
  return n.copy(t.append(r));
}
function zl(n, e, t, r, i, s) {
  let o = e < 0 ? n.firstChild : n.lastChild, l = o.content;
  return n.childCount > 1 && (s = 0), i < r - 1 && (l = zl(l, e, t, r, i + 1, s)), i >= t && (l = e < 0 ? o.contentMatchAt(0).fillBefore(l, s <= i).append(l) : l.append(o.contentMatchAt(o.childCount).fillBefore(A.empty, !0))), n.replaceChild(e < 0 ? 0 : n.childCount - 1, o.copy(l));
}
function xu(n, e, t) {
  return e < n.openStart && (n = new L(zl(n.content, -1, e, n.openStart, 0, n.openEnd), e, n.openEnd)), t < n.openEnd && (n = new L(zl(n.content, 1, t, n.openEnd, 0, 0), n.openStart, t)), n;
}
const If = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
let wu = null;
function _f() {
  return wu || (wu = document.implementation.createHTMLDocument("title"));
}
let el = null;
function Hb(n) {
  let e = window.trustedTypes;
  return e ? (el || (el = e.defaultPolicy || e.createPolicy("ProseMirrorClipboard", { createHTML: (t) => t })), el.createHTML(n)) : n;
}
function $b(n) {
  let e = /^(\s*<meta [^>]*>)*/.exec(n);
  e && (n = n.slice(e[0].length));
  let t = _f().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(n), i;
  if ((i = r && If[r[1].toLowerCase()]) && (n = i.map((s) => "<" + s + ">").join("") + n + i.map((s) => "</" + s + ">").reverse().join("")), t.innerHTML = Hb(n), i)
    for (let s = 0; s < i.length; s++)
      t = t.querySelector(i[s]) || t;
  return t;
}
function Wb(n) {
  let e = n.querySelectorAll(Ne ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(n.ownerDocument.createTextNode(" "), r);
  }
}
function Vb(n, e) {
  if (!n.size)
    return n;
  let t = n.content.firstChild.type.schema, r;
  try {
    r = JSON.parse(e);
  } catch {
    return n;
  }
  let { content: i, openStart: s, openEnd: o } = n;
  for (let l = r.length - 2; l >= 0; l -= 2) {
    let c = t.nodes[r[l]];
    if (!c || c.hasRequiredAttrs())
      break;
    i = A.from(c.create(r[l + 1], i)), s++, o++;
  }
  return new L(i, s, o);
}
const He = {}, $e = {}, Yb = { touchstart: !0, touchmove: !0 };
class jb {
  constructor() {
    this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = { time: 0, x: 0, y: 0, type: "", button: 0 }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastChromeDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.badSafariComposition = !1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
  }
}
function Ub(n) {
  for (let e in He) {
    let t = He[e];
    n.dom.addEventListener(e, n.input.eventHandlers[e] = (r) => {
      Gb(n, r) && !ya(n, r) && (n.editable || !(r.type in $e)) && t(n, r);
    }, Yb[e] ? { passive: !0 } : void 0);
  }
  Le && n.dom.addEventListener("input", () => null), Hl(n);
}
function sn(n, e) {
  n.input.lastSelectionOrigin = e, n.input.lastSelectionTime = Date.now();
}
function qb(n) {
  n.domObserver.stop();
  for (let e in n.input.eventHandlers)
    n.dom.removeEventListener(e, n.input.eventHandlers[e]);
  clearTimeout(n.input.composingTimeout), clearTimeout(n.input.lastIOSEnterFallbackTimeout);
}
function Hl(n) {
  n.someProp("handleDOMEvents", (e) => {
    for (let t in e)
      n.input.eventHandlers[t] || n.dom.addEventListener(t, n.input.eventHandlers[t] = (r) => ya(n, r));
  });
}
function ya(n, e) {
  return n.someProp("handleDOMEvents", (t) => {
    let r = t[e.type];
    return r ? r(n, e) || e.defaultPrevented : !1;
  });
}
function Gb(n, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target; t != n.dom; t = t.parentNode)
    if (!t || t.nodeType == 11 || t.pmViewDesc && t.pmViewDesc.stopEvent(e))
      return !1;
  return !0;
}
function Kb(n, e) {
  !ya(n, e) && He[e.type] && (n.editable || !(e.type in $e)) && He[e.type](n, e);
}
$e.keydown = (n, e) => {
  let t = e;
  if (n.input.shiftKey = t.keyCode == 16 || t.shiftKey, !Lf(n, t) && (n.input.lastKeyCode = t.keyCode, n.input.lastKeyCodeTime = Date.now(), !(zt && Ne && t.keyCode == 13)))
    if (t.keyCode != 229 && n.domObserver.forceFlush(), ur && t.keyCode == 13 && !t.ctrlKey && !t.altKey && !t.metaKey) {
      let r = Date.now();
      n.input.lastIOSEnter = r, n.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        n.input.lastIOSEnter == r && (n.someProp("handleKeyDown", (i) => i(n, Mn(13, "Enter"))), n.input.lastIOSEnter = 0);
      }, 200);
    } else n.someProp("handleKeyDown", (r) => r(n, t)) || Fb(n, t) ? t.preventDefault() : sn(n, "key");
};
$e.keyup = (n, e) => {
  e.keyCode == 16 && (n.input.shiftKey = !1);
};
$e.keypress = (n, e) => {
  let t = e;
  if (Lf(n, t) || !t.charCode || t.ctrlKey && !t.altKey || st && t.metaKey)
    return;
  if (n.someProp("handleKeyPress", (i) => i(n, t))) {
    t.preventDefault();
    return;
  }
  let r = n.state.selection;
  if (!(r instanceof V) || !r.$from.sameParent(r.$to)) {
    let i = String.fromCharCode(t.charCode), s = () => n.state.tr.insertText(i).scrollIntoView();
    !/[\r\n]/.test(i) && !n.someProp("handleTextInput", (o) => o(n, r.$from.pos, r.$to.pos, i, s)) && n.dispatch(s()), t.preventDefault();
  }
};
function Js(n) {
  return { left: n.clientX, top: n.clientY };
}
function Jb(n, e) {
  let t = e.x - n.clientX, r = e.y - n.clientY;
  return t * t + r * r < 100;
}
function ba(n, e, t, r, i) {
  if (r == -1)
    return !1;
  let s = n.state.doc.resolve(r);
  for (let o = s.depth + 1; o > 0; o--)
    if (n.someProp(e, (l) => o > s.depth ? l(n, t, s.nodeAfter, s.before(o), i, !0) : l(n, t, s.node(o), s.before(o), i, !1)))
      return !0;
  return !1;
}
function or(n, e, t) {
  if (n.focused || n.focus(), n.state.selection.eq(e))
    return;
  let r = n.state.tr.setSelection(e);
  r.setMeta("pointer", !0), n.dispatch(r);
}
function Qb(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.doc.resolve(e), r = t.nodeAfter;
  return r && r.isAtom && $.isSelectable(r) ? (or(n, new $(t)), !0) : !1;
}
function Zb(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.selection, r, i;
  t instanceof $ && (r = t.node);
  let s = n.state.doc.resolve(e);
  for (let o = s.depth + 1; o > 0; o--) {
    let l = o > s.depth ? s.nodeAfter : s.node(o);
    if ($.isSelectable(l)) {
      r && t.$from.depth > 0 && o >= t.$from.depth && s.before(t.$from.depth + 1) == t.$from.pos ? i = s.before(t.$from.depth) : i = s.before(o);
      break;
    }
  }
  return i != null ? (or(n, $.create(n.state.doc, i)), !0) : !1;
}
function Xb(n, e, t, r, i) {
  return ba(n, "handleClickOn", e, t, r) || n.someProp("handleClick", (s) => s(n, e, r)) || (i ? Zb(n, t) : Qb(n, t));
}
function ek(n, e, t, r) {
  return ba(n, "handleDoubleClickOn", e, t, r) || n.someProp("handleDoubleClick", (i) => i(n, e, r));
}
function tk(n, e, t, r) {
  return ba(n, "handleTripleClickOn", e, t, r) || n.someProp("handleTripleClick", (i) => i(n, e, r)) || nk(n, t, r);
}
function nk(n, e, t) {
  if (t.button != 0)
    return !1;
  let r = n.state.doc;
  if (e == -1)
    return r.inlineContent ? (or(n, V.create(r, 0, r.content.size)), !0) : !1;
  let i = r.resolve(e);
  for (let s = i.depth + 1; s > 0; s--) {
    let o = s > i.depth ? i.nodeAfter : i.node(s), l = i.before(s);
    if (o.inlineContent)
      or(n, V.create(r, l + 1, l + 1 + o.content.size));
    else if ($.isSelectable(o))
      or(n, $.create(r, l));
    else
      continue;
    return !0;
  }
}
function ka(n) {
  return ls(n);
}
const Pf = st ? "metaKey" : "ctrlKey";
He.mousedown = (n, e) => {
  let t = e;
  n.input.shiftKey = t.shiftKey;
  let r = ka(n), i = Date.now(), s = "singleClick";
  i - n.input.lastClick.time < 500 && Jb(t, n.input.lastClick) && !t[Pf] && n.input.lastClick.button == t.button && (n.input.lastClick.type == "singleClick" ? s = "doubleClick" : n.input.lastClick.type == "doubleClick" && (s = "tripleClick")), n.input.lastClick = { time: i, x: t.clientX, y: t.clientY, type: s, button: t.button };
  let o = n.posAtCoords(Js(t));
  o && (s == "singleClick" ? (n.input.mouseDown && n.input.mouseDown.done(), n.input.mouseDown = new rk(n, o, t, !!r)) : (s == "doubleClick" ? ek : tk)(n, o.pos, o.inside, t) ? t.preventDefault() : sn(n, "pointer"));
};
class rk {
  constructor(e, t, r, i) {
    this.view = e, this.pos = t, this.event = r, this.flushed = i, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[Pf], this.allowDefault = r.shiftKey;
    let s, o;
    if (t.inside > -1)
      s = e.state.doc.nodeAt(t.inside), o = t.inside;
    else {
      let f = e.state.doc.resolve(t.pos);
      s = f.parent, o = f.depth ? f.before() : 0;
    }
    const l = i ? null : r.target, c = l ? e.docView.nearestDesc(l, !0) : null;
    this.target = c && c.nodeDOM.nodeType == 1 ? c.nodeDOM : null;
    let { selection: d } = e.state;
    (r.button == 0 && s.type.spec.draggable && s.type.spec.selectable !== !1 || d instanceof $ && d.from <= o && d.to > o) && (this.mightDrag = {
      node: s,
      pos: o,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && lt && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), sn(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => $t(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let t = this.pos;
    this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(Js(e))), this.updateAllowDefault(e), this.allowDefault || !t ? sn(this.view, "pointer") : Xb(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    Le && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    Ne && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (or(this.view, G.near(this.view.state.doc.resolve(t.pos))), e.preventDefault()) : sn(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), sn(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
He.touchstart = (n) => {
  n.input.lastTouch = Date.now(), ka(n), sn(n, "pointer");
};
He.touchmove = (n) => {
  n.input.lastTouch = Date.now(), sn(n, "pointer");
};
He.contextmenu = (n) => ka(n);
function Lf(n, e) {
  return n.composing ? !0 : Le && Math.abs(e.timeStamp - n.input.compositionEndedAt) < 500 ? (n.input.compositionEndedAt = -2e8, !0) : !1;
}
const ik = zt ? 5e3 : -1;
$e.compositionstart = $e.compositionupdate = (n) => {
  if (!n.composing) {
    n.domObserver.flush();
    let { state: e } = n, t = e.selection.$to;
    if (e.selection instanceof V && (e.storedMarks || !t.textOffset && t.parentOffset && t.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1) || Ne && hf && sk(n)))
      n.markCursor = n.state.storedMarks || t.marks(), ls(n, !0), n.markCursor = null;
    else if (ls(n, !e.selection.empty), lt && e.selection.empty && t.parentOffset && !t.textOffset && t.nodeBefore.marks.length) {
      let r = n.domSelectionRange();
      for (let i = r.focusNode, s = r.focusOffset; i && i.nodeType == 1 && s != 0; ) {
        let o = s < 0 ? i.lastChild : i.childNodes[s - 1];
        if (!o)
          break;
        if (o.nodeType == 3) {
          let l = n.domSelection();
          l && l.collapse(o, o.nodeValue.length);
          break;
        } else
          i = o, s = -1;
      }
    }
    n.input.composing = !0;
  }
  Ff(n, ik);
};
function sk(n) {
  let { focusNode: e, focusOffset: t } = n.domSelectionRange();
  if (!e || e.nodeType != 1 || t >= e.childNodes.length)
    return !1;
  let r = e.childNodes[t];
  return r.nodeType == 1 && r.contentEditable == "false";
}
$e.compositionend = (n, e) => {
  n.composing && (n.input.composing = !1, n.input.compositionEndedAt = e.timeStamp, n.input.compositionPendingChanges = n.domObserver.pendingRecords().length ? n.input.compositionID : 0, n.input.compositionNode = null, n.input.badSafariComposition ? n.domObserver.forceFlush() : n.input.compositionPendingChanges && Promise.resolve().then(() => n.domObserver.flush()), n.input.compositionID++, Ff(n, 20));
};
function Ff(n, e) {
  clearTimeout(n.input.composingTimeout), e > -1 && (n.input.composingTimeout = setTimeout(() => ls(n), e));
}
function Bf(n) {
  for (n.composing && (n.input.composing = !1, n.input.compositionEndedAt = lk()); n.input.compositionNodes.length > 0; )
    n.input.compositionNodes.pop().markParentsDirty();
}
function ok(n) {
  let e = n.domSelectionRange();
  if (!e.focusNode)
    return null;
  let t = Z1(e.focusNode, e.focusOffset), r = X1(e.focusNode, e.focusOffset);
  if (t && r && t != r) {
    let i = r.pmViewDesc, s = n.domObserver.lastChangedTextNode;
    if (t == s || r == s)
      return s;
    if (!i || !i.isText(r.nodeValue))
      return r;
    if (n.input.compositionNode == r) {
      let o = t.pmViewDesc;
      if (!(!o || !o.isText(t.nodeValue)))
        return r;
    }
  }
  return t || r;
}
function lk() {
  let n = document.createEvent("Event");
  return n.initEvent("event", !0, !0), n.timeStamp;
}
function ls(n, e = !1) {
  if (!(zt && n.domObserver.flushingSoon >= 0)) {
    if (n.domObserver.forceFlush(), Bf(n), e || n.docView && n.docView.dirty) {
      let t = pa(n), r = n.state.selection;
      return t && !t.eq(r) ? n.dispatch(n.state.tr.setSelection(t)) : (n.markCursor || e) && !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent ? n.dispatch(n.state.tr.deleteSelection()) : n.updateState(n.state), !0;
    }
    return !1;
  }
}
function ak(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.dom.parentNode.appendChild(document.createElement("div"));
  t.appendChild(e), t.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), i = document.createRange();
  i.selectNodeContents(e), n.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(() => {
    t.parentNode && t.parentNode.removeChild(t), n.focus();
  }, 50);
}
const Jr = Ke && an < 15 || ur && rb < 604;
He.copy = $e.cut = (n, e) => {
  let t = e, r = n.state.selection, i = t.type == "cut";
  if (r.empty)
    return;
  let s = Jr ? null : t.clipboardData, o = r.content(), { dom: l, text: c } = ga(n, o);
  s ? (t.preventDefault(), s.clearData(), s.setData("text/html", l.innerHTML), s.setData("text/plain", c)) : ak(n, l), i && n.dispatch(n.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function ck(n) {
  return n.openStart == 0 && n.openEnd == 0 && n.content.childCount == 1 ? n.content.firstChild : null;
}
function uk(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.input.shiftKey || n.state.selection.$from.parent.type.spec.code, r = n.dom.parentNode.appendChild(document.createElement(t ? "textarea" : "div"));
  t || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let i = n.input.shiftKey && n.input.lastKeyCode != 45;
  setTimeout(() => {
    n.focus(), r.parentNode && r.parentNode.removeChild(r), t ? Qr(n, r.value, null, i, e) : Qr(n, r.textContent, r.innerHTML, i, e);
  }, 50);
}
function Qr(n, e, t, r, i) {
  let s = Af(n, e, t, r, n.state.selection.$from);
  if (n.someProp("handlePaste", (c) => c(n, i, s || L.empty)))
    return !0;
  if (!s)
    return !1;
  let o = ck(s), l = o ? n.state.tr.replaceSelectionWith(o, r) : n.state.tr.replaceSelection(s);
  return n.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function zf(n) {
  let e = n.getData("text/plain") || n.getData("Text");
  if (e)
    return e;
  let t = n.getData("text/uri-list");
  return t ? t.replace(/\r?\n/g, " ") : "";
}
$e.paste = (n, e) => {
  let t = e;
  if (n.composing && !zt)
    return;
  let r = Jr ? null : t.clipboardData, i = n.input.shiftKey && n.input.lastKeyCode != 45;
  r && Qr(n, zf(r), r.getData("text/html"), i, t) ? t.preventDefault() : uk(n, t);
};
class Hf {
  constructor(e, t, r) {
    this.slice = e, this.move = t, this.node = r;
  }
}
const dk = st ? "altKey" : "ctrlKey";
function $f(n, e) {
  let t = n.someProp("dragCopies", (r) => !r(e));
  return t ?? !e[dk];
}
He.dragstart = (n, e) => {
  let t = e, r = n.input.mouseDown;
  if (r && r.done(), !t.dataTransfer)
    return;
  let i = n.state.selection, s = i.empty ? null : n.posAtCoords(Js(t)), o;
  if (!(s && s.pos >= i.from && s.pos <= (i instanceof $ ? i.to - 1 : i.to))) {
    if (r && r.mightDrag)
      o = $.create(n.state.doc, r.mightDrag.pos);
    else if (t.target && t.target.nodeType == 1) {
      let h = n.docView.nearestDesc(t.target, !0);
      h && h.node.type.spec.draggable && h != n.docView && (o = $.create(n.state.doc, h.posBefore));
    }
  }
  let l = (o || n.state.selection).content(), { dom: c, text: d, slice: f } = ga(n, l);
  (!t.dataTransfer.files.length || !Ne || ff > 120) && t.dataTransfer.clearData(), t.dataTransfer.setData(Jr ? "Text" : "text/html", c.innerHTML), t.dataTransfer.effectAllowed = "copyMove", Jr || t.dataTransfer.setData("text/plain", d), n.dragging = new Hf(f, $f(n, t), o);
};
He.dragend = (n) => {
  let e = n.dragging;
  window.setTimeout(() => {
    n.dragging == e && (n.dragging = null);
  }, 50);
};
$e.dragover = $e.dragenter = (n, e) => e.preventDefault();
$e.drop = (n, e) => {
  try {
    fk(n, e, n.dragging);
  } finally {
    n.dragging = null;
  }
};
function fk(n, e, t) {
  if (!e.dataTransfer)
    return;
  let r = n.posAtCoords(Js(e));
  if (!r)
    return;
  let i = n.state.doc.resolve(r.pos), s = t && t.slice;
  s ? n.someProp("transformPasted", (y) => {
    s = y(s, n, !1);
  }) : s = Af(n, zf(e.dataTransfer), Jr ? null : e.dataTransfer.getData("text/html"), !1, i);
  let o = !!(t && $f(n, e));
  if (n.someProp("handleDrop", (y) => y(n, e, s || L.empty, o))) {
    e.preventDefault();
    return;
  }
  if (!s)
    return;
  e.preventDefault();
  let l = s ? nf(n.state.doc, i.pos, s) : i.pos;
  l == null && (l = i.pos);
  let c = n.state.tr;
  if (o) {
    let { node: y } = t;
    y ? y.replace(c) : c.deleteSelection();
  }
  let d = c.mapping.map(l), f = s.openStart == 0 && s.openEnd == 0 && s.content.childCount == 1, h = c.doc;
  if (f ? c.replaceRangeWith(d, d, s.content.firstChild) : c.replaceRange(d, d, s), c.doc.eq(h))
    return;
  let g = c.doc.resolve(d);
  if (f && $.isSelectable(s.content.firstChild) && g.nodeAfter && g.nodeAfter.sameMarkup(s.content.firstChild))
    c.setSelection(new $(g));
  else {
    let y = c.mapping.map(l);
    c.mapping.maps[c.mapping.maps.length - 1].forEach((b, S, x, w) => y = w), c.setSelection(ma(n, g, c.doc.resolve(y)));
  }
  n.focus(), n.dispatch(c.setMeta("uiEvent", "drop"));
}
He.focus = (n) => {
  n.input.lastFocus = Date.now(), n.focused || (n.domObserver.stop(), n.dom.classList.add("ProseMirror-focused"), n.domObserver.start(), n.focused = !0, setTimeout(() => {
    n.docView && n.hasFocus() && !n.domObserver.currentSelection.eq(n.domSelectionRange()) && $t(n);
  }, 20));
};
He.blur = (n, e) => {
  let t = e;
  n.focused && (n.domObserver.stop(), n.dom.classList.remove("ProseMirror-focused"), n.domObserver.start(), t.relatedTarget && n.dom.contains(t.relatedTarget) && n.domObserver.currentSelection.clear(), n.focused = !1);
};
He.beforeinput = (n, e) => {
  if (Ne && zt && e.inputType == "deleteContentBackward") {
    n.domObserver.flushSoon();
    let { domChangeCount: r } = n.input;
    setTimeout(() => {
      if (n.input.domChangeCount != r || (n.dom.blur(), n.focus(), n.someProp("handleKeyDown", (s) => s(n, Mn(8, "Backspace")))))
        return;
      let { $cursor: i } = n.state.selection;
      i && i.pos > 0 && n.dispatch(n.state.tr.delete(i.pos - 1, i.pos).scrollIntoView());
    }, 50);
  }
};
for (let n in $e)
  He[n] = $e[n];
function Zr(n, e) {
  if (n == e)
    return !0;
  for (let t in n)
    if (n[t] !== e[t])
      return !1;
  for (let t in e)
    if (!(t in n))
      return !1;
  return !0;
}
class as {
  constructor(e, t) {
    this.toDOM = e, this.spec = t || Rn, this.side = this.spec.side || 0;
  }
  map(e, t, r, i) {
    let { pos: s, deleted: o } = e.mapResult(t.from + i, this.side < 0 ? -1 : 1);
    return o ? null : new Xe(s - r, s - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof as && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && Zr(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class un {
  constructor(e, t) {
    this.attrs = e, this.spec = t || Rn;
  }
  map(e, t, r, i) {
    let s = e.map(t.from + i, this.spec.inclusiveStart ? -1 : 1) - r, o = e.map(t.to + i, this.spec.inclusiveEnd ? 1 : -1) - r;
    return s >= o ? null : new Xe(s, o, this);
  }
  valid(e, t) {
    return t.from < t.to;
  }
  eq(e) {
    return this == e || e instanceof un && Zr(this.attrs, e.attrs) && Zr(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof un;
  }
  destroy() {
  }
}
class Sa {
  constructor(e, t) {
    this.attrs = e, this.spec = t || Rn;
  }
  map(e, t, r, i) {
    let s = e.mapResult(t.from + i, 1);
    if (s.deleted)
      return null;
    let o = e.mapResult(t.to + i, -1);
    return o.deleted || o.pos <= s.pos ? null : new Xe(s.pos - r, o.pos - r, this);
  }
  valid(e, t) {
    let { index: r, offset: i } = e.content.findIndex(t.from), s;
    return i == t.from && !(s = e.child(r)).isText && i + s.nodeSize == t.to;
  }
  eq(e) {
    return this == e || e instanceof Sa && Zr(this.attrs, e.attrs) && Zr(this.spec, e.spec);
  }
  destroy() {
  }
}
class Xe {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.from = e, this.to = t, this.type = r;
  }
  /**
  @internal
  */
  copy(e, t) {
    return new Xe(e, t, this.type);
  }
  /**
  @internal
  */
  eq(e, t = 0) {
    return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to;
  }
  /**
  @internal
  */
  map(e, t, r) {
    return this.type.map(e, this, t, r);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(e, t, r) {
    return new Xe(e, e, new as(t, r));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, t, r, i) {
    return new Xe(e, t, new un(r, i));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, t, r, i) {
    return new Xe(e, t, new Sa(r, i));
  }
  /**
  The spec provided when creating this decoration. Can be useful
  if you've stored extra information in that object.
  */
  get spec() {
    return this.type.spec;
  }
  /**
  @internal
  */
  get inline() {
    return this.type instanceof un;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof as;
  }
}
const tr = [], Rn = {};
class fe {
  /**
  @internal
  */
  constructor(e, t) {
    this.local = e.length ? e : tr, this.children = t.length ? t : tr;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(e, t) {
    return t.length ? cs(t, e, 0, Rn) : Pe;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(e, t, r) {
    let i = [];
    return this.findInner(e ?? 0, t ?? 1e9, i, 0, r), i;
  }
  findInner(e, t, r, i, s) {
    for (let o = 0; o < this.local.length; o++) {
      let l = this.local[o];
      l.from <= t && l.to >= e && (!s || s(l.spec)) && r.push(l.copy(l.from + i, l.to + i));
    }
    for (let o = 0; o < this.children.length; o += 3)
      if (this.children[o] < t && this.children[o + 1] > e) {
        let l = this.children[o] + 1;
        this.children[o + 2].findInner(e - l, t - l, r, i + l, s);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(e, t, r) {
    return this == Pe || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, r || Rn);
  }
  /**
  @internal
  */
  mapInner(e, t, r, i, s) {
    let o;
    for (let l = 0; l < this.local.length; l++) {
      let c = this.local[l].map(e, r, i);
      c && c.type.valid(t, c) ? (o || (o = [])).push(c) : s.onRemove && s.onRemove(this.local[l].spec);
    }
    return this.children.length ? hk(this.children, o || [], e, t, r, i, s) : o ? new fe(o.sort(In), tr) : Pe;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(e, t) {
    return t.length ? this == Pe ? fe.create(e, t) : this.addInner(e, t, 0) : this;
  }
  addInner(e, t, r) {
    let i, s = 0;
    e.forEach((l, c) => {
      let d = c + r, f;
      if (f = Vf(t, l, d)) {
        for (i || (i = this.children.slice()); s < i.length && i[s] < c; )
          s += 3;
        i[s] == c ? i[s + 2] = i[s + 2].addInner(l, f, d + 1) : i.splice(s, 0, c, c + l.nodeSize, cs(f, l, d + 1, Rn)), s += 3;
      }
    });
    let o = Wf(s ? Yf(t) : t, -r);
    for (let l = 0; l < o.length; l++)
      o[l].type.valid(e, o[l]) || o.splice(l--, 1);
    return new fe(o.length ? this.local.concat(o).sort(In) : this.local, i || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == Pe ? this : this.removeInner(e, 0);
  }
  removeInner(e, t) {
    let r = this.children, i = this.local;
    for (let s = 0; s < r.length; s += 3) {
      let o, l = r[s] + t, c = r[s + 1] + t;
      for (let f = 0, h; f < e.length; f++)
        (h = e[f]) && h.from > l && h.to < c && (e[f] = null, (o || (o = [])).push(h));
      if (!o)
        continue;
      r == this.children && (r = this.children.slice());
      let d = r[s + 2].removeInner(o, l + 1);
      d != Pe ? r[s + 2] = d : (r.splice(s, 3), s -= 3);
    }
    if (i.length) {
      for (let s = 0, o; s < e.length; s++)
        if (o = e[s])
          for (let l = 0; l < i.length; l++)
            i[l].eq(o, t) && (i == this.local && (i = this.local.slice()), i.splice(l--, 1));
    }
    return r == this.children && i == this.local ? this : i.length || r.length ? new fe(i, r) : Pe;
  }
  forChild(e, t) {
    if (this == Pe)
      return this;
    if (t.isLeaf)
      return fe.empty;
    let r, i;
    for (let l = 0; l < this.children.length; l += 3)
      if (this.children[l] >= e) {
        this.children[l] == e && (r = this.children[l + 2]);
        break;
      }
    let s = e + 1, o = s + t.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let c = this.local[l];
      if (c.from < o && c.to > s && c.type instanceof un) {
        let d = Math.max(s, c.from) - s, f = Math.min(o, c.to) - s;
        d < f && (i || (i = [])).push(c.copy(d, f));
      }
    }
    if (i) {
      let l = new fe(i.sort(In), tr);
      return r ? new en([l, r]) : l;
    }
    return r || Pe;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof fe) || this.local.length != e.local.length || this.children.length != e.children.length)
      return !1;
    for (let t = 0; t < this.local.length; t++)
      if (!this.local[t].eq(e.local[t]))
        return !1;
    for (let t = 0; t < this.children.length; t += 3)
      if (this.children[t] != e.children[t] || this.children[t + 1] != e.children[t + 1] || !this.children[t + 2].eq(e.children[t + 2]))
        return !1;
    return !0;
  }
  /**
  @internal
  */
  locals(e) {
    return xa(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == Pe)
      return tr;
    if (e.inlineContent || !this.local.some(un.is))
      return this.local;
    let t = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof un || t.push(this.local[r]);
    return t;
  }
  forEachSet(e) {
    e(this);
  }
}
fe.empty = new fe([], []);
fe.removeOverlap = xa;
const Pe = fe.empty;
class en {
  constructor(e) {
    this.members = e;
  }
  map(e, t) {
    const r = this.members.map((i) => i.map(e, t, Rn));
    return en.from(r);
  }
  forChild(e, t) {
    if (t.isLeaf)
      return fe.empty;
    let r = [];
    for (let i = 0; i < this.members.length; i++) {
      let s = this.members[i].forChild(e, t);
      s != Pe && (s instanceof en ? r = r.concat(s.members) : r.push(s));
    }
    return en.from(r);
  }
  eq(e) {
    if (!(e instanceof en) || e.members.length != this.members.length)
      return !1;
    for (let t = 0; t < this.members.length; t++)
      if (!this.members[t].eq(e.members[t]))
        return !1;
    return !0;
  }
  locals(e) {
    let t, r = !0;
    for (let i = 0; i < this.members.length; i++) {
      let s = this.members[i].localsInner(e);
      if (s.length)
        if (!t)
          t = s;
        else {
          r && (t = t.slice(), r = !1);
          for (let o = 0; o < s.length; o++)
            t.push(s[o]);
        }
    }
    return t ? xa(r ? t : t.sort(In)) : tr;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return Pe;
      case 1:
        return e[0];
      default:
        return new en(e.every((t) => t instanceof fe) ? e : e.reduce((t, r) => t.concat(r instanceof fe ? r : r.members), []));
    }
  }
  forEachSet(e) {
    for (let t = 0; t < this.members.length; t++)
      this.members[t].forEachSet(e);
  }
}
function hk(n, e, t, r, i, s, o) {
  let l = n.slice();
  for (let d = 0, f = s; d < t.maps.length; d++) {
    let h = 0;
    t.maps[d].forEach((g, y, b, S) => {
      let x = S - b - (y - g);
      for (let w = 0; w < l.length; w += 3) {
        let T = l[w + 1];
        if (T < 0 || g > T + f - h)
          continue;
        let v = l[w] + f - h;
        y >= v ? l[w + 1] = g <= v ? -2 : -1 : g >= f && x && (l[w] += x, l[w + 1] += x);
      }
      h += x;
    }), f = t.maps[d].map(f, -1);
  }
  let c = !1;
  for (let d = 0; d < l.length; d += 3)
    if (l[d + 1] < 0) {
      if (l[d + 1] == -2) {
        c = !0, l[d + 1] = -1;
        continue;
      }
      let f = t.map(n[d] + s), h = f - i;
      if (h < 0 || h >= r.content.size) {
        c = !0;
        continue;
      }
      let g = t.map(n[d + 1] + s, -1), y = g - i, { index: b, offset: S } = r.content.findIndex(h), x = r.maybeChild(b);
      if (x && S == h && S + x.nodeSize == y) {
        let w = l[d + 2].mapInner(t, x, f + 1, n[d] + s + 1, o);
        w != Pe ? (l[d] = h, l[d + 1] = y, l[d + 2] = w) : (l[d + 1] = -2, c = !0);
      } else
        c = !0;
    }
  if (c) {
    let d = pk(l, n, e, t, i, s, o), f = cs(d, r, 0, o);
    e = f.local;
    for (let h = 0; h < l.length; h += 3)
      l[h + 1] < 0 && (l.splice(h, 3), h -= 3);
    for (let h = 0, g = 0; h < f.children.length; h += 3) {
      let y = f.children[h];
      for (; g < l.length && l[g] < y; )
        g += 3;
      l.splice(g, 0, f.children[h], f.children[h + 1], f.children[h + 2]);
    }
  }
  return new fe(e.sort(In), l);
}
function Wf(n, e) {
  if (!e || !n.length)
    return n;
  let t = [];
  for (let r = 0; r < n.length; r++) {
    let i = n[r];
    t.push(new Xe(i.from + e, i.to + e, i.type));
  }
  return t;
}
function pk(n, e, t, r, i, s, o) {
  function l(c, d) {
    for (let f = 0; f < c.local.length; f++) {
      let h = c.local[f].map(r, i, d);
      h ? t.push(h) : o.onRemove && o.onRemove(c.local[f].spec);
    }
    for (let f = 0; f < c.children.length; f += 3)
      l(c.children[f + 2], c.children[f] + d + 1);
  }
  for (let c = 0; c < n.length; c += 3)
    n[c + 1] == -1 && l(n[c + 2], e[c] + s + 1);
  return t;
}
function Vf(n, e, t) {
  if (e.isLeaf)
    return null;
  let r = t + e.nodeSize, i = null;
  for (let s = 0, o; s < n.length; s++)
    (o = n[s]) && o.from > t && o.to < r && ((i || (i = [])).push(o), n[s] = null);
  return i;
}
function Yf(n) {
  let e = [];
  for (let t = 0; t < n.length; t++)
    n[t] != null && e.push(n[t]);
  return e;
}
function cs(n, e, t, r) {
  let i = [], s = !1;
  e.forEach((l, c) => {
    let d = Vf(n, l, c + t);
    if (d) {
      s = !0;
      let f = cs(d, l, t + c + 1, r);
      f != Pe && i.push(c, c + l.nodeSize, f);
    }
  });
  let o = Wf(s ? Yf(n) : n, -t).sort(In);
  for (let l = 0; l < o.length; l++)
    o[l].type.valid(e, o[l]) || (r.onRemove && r.onRemove(o[l].spec), o.splice(l--, 1));
  return o.length || i.length ? new fe(o, i) : Pe;
}
function In(n, e) {
  return n.from - e.from || n.to - e.to;
}
function xa(n) {
  let e = n;
  for (let t = 0; t < e.length - 1; t++) {
    let r = e[t];
    if (r.from != r.to)
      for (let i = t + 1; i < e.length; i++) {
        let s = e[i];
        if (s.from == r.from) {
          s.to != r.to && (e == n && (e = n.slice()), e[i] = s.copy(s.from, r.to), Mu(e, i + 1, s.copy(r.to, s.to)));
          continue;
        } else {
          s.from < r.to && (e == n && (e = n.slice()), e[t] = r.copy(r.from, s.from), Mu(e, i, r.copy(s.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function Mu(n, e, t) {
  for (; e < n.length && In(t, n[e]) > 0; )
    e++;
  n.splice(e, 0, t);
}
function tl(n) {
  let e = [];
  return n.someProp("decorations", (t) => {
    let r = t(n.state);
    r && r != Pe && e.push(r);
  }), n.cursorWrapper && e.push(fe.create(n.state.doc, [n.cursorWrapper.deco])), en.from(e);
}
const mk = {
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0,
  attributes: !0,
  attributeOldValue: !0,
  subtree: !0
}, gk = Ke && an <= 11;
class yk {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  set(e) {
    this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(e) {
    return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
  }
}
class bk {
  constructor(e, t) {
    this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new yk(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver((r) => {
      for (let i = 0; i < r.length; i++)
        this.queue.push(r[i]);
      Ke && an <= 11 && r.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : Le && e.composing && r.some((i) => i.type == "childList" && i.target.nodeName == "TR") ? (e.input.badSafariComposition = !0, this.flushSoon()) : this.flush();
    }), gk && (this.onCharData = (r) => {
      this.queue.push({ target: r.target, type: "characterData", oldValue: r.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  flushSoon() {
    this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
      this.flushingSoon = -1, this.flush();
    }, 20));
  }
  forceFlush() {
    this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
  }
  start() {
    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, mk)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let e = this.observer.takeRecords();
      if (e.length) {
        for (let t = 0; t < e.length; t++)
          this.queue.push(e[t]);
        window.setTimeout(() => this.flush(), 20);
      }
      this.observer.disconnect();
    }
    this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
  }
  connectSelection() {
    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
  }
  disconnectSelection() {
    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
  }
  suppressSelectionUpdates() {
    this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50);
  }
  onSelectionChange() {
    if (mu(this.view)) {
      if (this.suppressingSelectionUpdates)
        return $t(this.view);
      if (Ke && an <= 11 && !this.view.state.selection.empty) {
        let e = this.view.domSelectionRange();
        if (e.focusNode && Fn(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
          return this.flushSoon();
      }
      this.flush();
    }
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(e) {
    if (!e.focusNode)
      return !0;
    let t = /* @__PURE__ */ new Set(), r;
    for (let s = e.focusNode; s; s = cr(s))
      t.add(s);
    for (let s = e.anchorNode; s; s = cr(s))
      if (t.has(s)) {
        r = s;
        break;
      }
    let i = r && this.view.docView.nearestDesc(r);
    if (i && i.ignoreMutation({
      type: "selection",
      target: r.nodeType == 3 ? r.parentNode : r
    }))
      return this.setCurSelection(), !0;
  }
  pendingRecords() {
    if (this.observer)
      for (let e of this.observer.takeRecords())
        this.queue.push(e);
    return this.queue;
  }
  flush() {
    let { view: e } = this;
    if (!e.docView || this.flushingSoon > -1)
      return;
    let t = this.pendingRecords();
    t.length && (this.queue = []);
    let r = e.domSelectionRange(), i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(r) && mu(e) && !this.ignoreSelectionChange(r), s = -1, o = -1, l = !1, c = [];
    if (e.editable)
      for (let f = 0; f < t.length; f++) {
        let h = this.registerMutation(t[f], c);
        h && (s = s < 0 ? h.from : Math.min(h.from, s), o = o < 0 ? h.to : Math.max(h.to, o), h.typeOver && (l = !0));
      }
    if (c.some((f) => f.nodeName == "BR") && (e.input.lastKeyCode == 8 || e.input.lastKeyCode == 46)) {
      for (let f of c)
        if (f.nodeName == "BR" && f.parentNode) {
          let h = f.nextSibling;
          h && h.nodeType == 1 && h.contentEditable == "false" && f.parentNode.removeChild(f);
        }
    } else if (lt && c.length) {
      let f = c.filter((h) => h.nodeName == "BR");
      if (f.length == 2) {
        let [h, g] = f;
        h.parentNode && h.parentNode.parentNode == g.parentNode ? g.remove() : h.remove();
      } else {
        let { focusNode: h } = this.currentSelection;
        for (let g of f) {
          let y = g.parentNode;
          y && y.nodeName == "LI" && (!h || xk(e, h) != y) && g.remove();
        }
      }
    }
    let d = null;
    s < 0 && i && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && Gs(r) && (d = pa(e)) && d.eq(G.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, $t(e), this.currentSelection.set(r), e.scrollToSelection()) : (s > -1 || i) && (s > -1 && (e.docView.markDirty(s, o), kk(e)), e.input.badSafariComposition && (e.input.badSafariComposition = !1, wk(e, c)), this.handleDOMChange(s, o, l, c), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(r) || $t(e), this.currentSelection.set(r));
  }
  registerMutation(e, t) {
    if (t.indexOf(e.target) > -1)
      return null;
    let r = this.view.docView.nearestDesc(e.target);
    if (e.type == "attributes" && (r == this.view.docView || e.attributeName == "contenteditable" || // Firefox sometimes fires spurious events for null/empty styles
    e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !r || r.ignoreMutation(e))
      return null;
    if (e.type == "childList") {
      for (let f = 0; f < e.addedNodes.length; f++) {
        let h = e.addedNodes[f];
        t.push(h), h.nodeType == 3 && (this.lastChangedTextNode = h);
      }
      if (r.contentDOM && r.contentDOM != r.dom && !r.contentDOM.contains(e.target))
        return { from: r.posBefore, to: r.posAfter };
      let i = e.previousSibling, s = e.nextSibling;
      if (Ke && an <= 11 && e.addedNodes.length)
        for (let f = 0; f < e.addedNodes.length; f++) {
          let { previousSibling: h, nextSibling: g } = e.addedNodes[f];
          (!h || Array.prototype.indexOf.call(e.addedNodes, h) < 0) && (i = h), (!g || Array.prototype.indexOf.call(e.addedNodes, g) < 0) && (s = g);
        }
      let o = i && i.parentNode == e.target ? Ae(i) + 1 : 0, l = r.localPosFromDOM(e.target, o, -1), c = s && s.parentNode == e.target ? Ae(s) : e.target.childNodes.length, d = r.localPosFromDOM(e.target, c, 1);
      return { from: l, to: d };
    } else return e.type == "attributes" ? { from: r.posAtStart - r.border, to: r.posAtEnd + r.border } : (this.lastChangedTextNode = e.target, {
      from: r.posAtStart,
      to: r.posAtEnd,
      // An event was generated for a text change that didn't change
      // any text. Mark the dom change to fall back to assuming the
      // selection was typed over with an identical value if it can't
      // find another change.
      typeOver: e.target.nodeValue == e.oldValue
    });
  }
}
let Cu = /* @__PURE__ */ new WeakMap(), Tu = !1;
function kk(n) {
  if (!Cu.has(n) && (Cu.set(n, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(n.dom).whiteSpace) !== -1)) {
    if (n.requiresGeckoHackNode = lt, Tu)
      return;
    console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), Tu = !0;
  }
}
function Ou(n, e) {
  let t = e.startContainer, r = e.startOffset, i = e.endContainer, s = e.endOffset, o = n.domAtPos(n.state.selection.anchor);
  return Fn(o.node, o.offset, i, s) && ([t, r, i, s] = [i, s, t, r]), { anchorNode: t, anchorOffset: r, focusNode: i, focusOffset: s };
}
function Sk(n, e) {
  if (e.getComposedRanges) {
    let i = e.getComposedRanges(n.root)[0];
    if (i)
      return Ou(n, i);
  }
  let t;
  function r(i) {
    i.preventDefault(), i.stopImmediatePropagation(), t = i.getTargetRanges()[0];
  }
  return n.dom.addEventListener("beforeinput", r, !0), document.execCommand("indent"), n.dom.removeEventListener("beforeinput", r, !0), t ? Ou(n, t) : null;
}
function xk(n, e) {
  for (let t = e.parentNode; t && t != n.dom; t = t.parentNode) {
    let r = n.docView.nearestDesc(t, !0);
    if (r && r.node.isBlock)
      return t;
  }
  return null;
}
function wk(n, e) {
  var t;
  let { focusNode: r, focusOffset: i } = n.domSelectionRange();
  for (let s of e)
    if (((t = s.parentNode) === null || t === void 0 ? void 0 : t.nodeName) == "TR") {
      let o = s.nextSibling;
      for (; o && o.nodeName != "TD" && o.nodeName != "TH"; )
        o = o.nextSibling;
      if (o) {
        let l = o;
        for (; ; ) {
          let c = l.firstChild;
          if (!c || c.nodeType != 1 || c.contentEditable == "false" || /^(BR|IMG)$/.test(c.nodeName))
            break;
          l = c;
        }
        l.insertBefore(s, l.firstChild), r == s && n.domSelection().collapse(s, i);
      } else
        s.parentNode.removeChild(s);
    }
}
function Mk(n, e, t) {
  let { node: r, fromOffset: i, toOffset: s, from: o, to: l } = n.docView.parseRange(e, t), c = n.domSelectionRange(), d, f = c.anchorNode;
  if (f && n.dom.contains(f.nodeType == 1 ? f : f.parentNode) && (d = [{ node: f, offset: c.anchorOffset }], Gs(c) || d.push({ node: c.focusNode, offset: c.focusOffset })), Ne && n.input.lastKeyCode === 8)
    for (let x = s; x > i; x--) {
      let w = r.childNodes[x - 1], T = w.pmViewDesc;
      if (w.nodeName == "BR" && !T) {
        s = x;
        break;
      }
      if (!T || T.size)
        break;
    }
  let h = n.state.doc, g = n.someProp("domParser") || ln.fromSchema(n.state.schema), y = h.resolve(o), b = null, S = g.parse(r, {
    topNode: y.parent,
    topMatch: y.parent.contentMatchAt(y.index()),
    topOpen: !0,
    from: i,
    to: s,
    preserveWhitespace: y.parent.type.whitespace == "pre" ? "full" : !0,
    findPositions: d,
    ruleFromNode: Ck,
    context: y
  });
  if (d && d[0].pos != null) {
    let x = d[0].pos, w = d[1] && d[1].pos;
    w == null && (w = x), b = { anchor: x + o, head: w + o };
  }
  return { doc: S, sel: b, from: o, to: l };
}
function Ck(n) {
  let e = n.pmViewDesc;
  if (e)
    return e.parseRule();
  if (n.nodeName == "BR" && n.parentNode) {
    if (Le && /^(ul|ol)$/i.test(n.parentNode.nodeName)) {
      let t = document.createElement("div");
      return t.appendChild(document.createElement("li")), { skip: t };
    } else if (n.parentNode.lastChild == n || Le && /^(tr|table)$/i.test(n.parentNode.nodeName))
      return { ignore: !0 };
  } else if (n.nodeName == "IMG" && n.getAttribute("mark-placeholder"))
    return { ignore: !0 };
  return null;
}
const Tk = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function Ok(n, e, t, r, i) {
  let s = n.input.compositionPendingChanges || (n.composing ? n.input.compositionID : 0);
  if (n.input.compositionPendingChanges = 0, e < 0) {
    let E = n.input.lastSelectionTime > Date.now() - 50 ? n.input.lastSelectionOrigin : null, z = pa(n, E);
    if (z && !n.state.selection.eq(z)) {
      if (Ne && zt && n.input.lastKeyCode === 13 && Date.now() - 100 < n.input.lastKeyCodeTime && n.someProp("handleKeyDown", (Q) => Q(n, Mn(13, "Enter"))))
        return;
      let j = n.state.tr.setSelection(z);
      E == "pointer" ? j.setMeta("pointer", !0) : E == "key" && j.scrollIntoView(), s && j.setMeta("composition", s), n.dispatch(j);
    }
    return;
  }
  let o = n.state.doc.resolve(e), l = o.sharedDepth(t);
  e = o.before(l + 1), t = n.state.doc.resolve(t).after(l + 1);
  let c = n.state.selection, d = Mk(n, e, t), f = n.state.doc, h = f.slice(d.from, d.to), g, y;
  n.input.lastKeyCode === 8 && Date.now() - 100 < n.input.lastKeyCodeTime ? (g = n.state.selection.to, y = "end") : (g = n.state.selection.from, y = "start"), n.input.lastKeyCode = null;
  let b = Ak(h.content, d.doc.content, d.from, g, y);
  if (b && n.input.domChangeCount++, (ur && n.input.lastIOSEnter > Date.now() - 225 || zt) && i.some((E) => E.nodeType == 1 && !Tk.test(E.nodeName)) && (!b || b.endA >= b.endB) && n.someProp("handleKeyDown", (E) => E(n, Mn(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (!b)
    if (r && c instanceof V && !c.empty && c.$head.sameParent(c.$anchor) && !n.composing && !(d.sel && d.sel.anchor != d.sel.head))
      b = { start: c.from, endA: c.to, endB: c.to };
    else {
      if (d.sel) {
        let E = vu(n, n.state.doc, d.sel);
        if (E && !E.eq(n.state.selection)) {
          let z = n.state.tr.setSelection(E);
          s && z.setMeta("composition", s), n.dispatch(z);
        }
      }
      return;
    }
  n.state.selection.from < n.state.selection.to && b.start == b.endB && n.state.selection instanceof V && (b.start > n.state.selection.from && b.start <= n.state.selection.from + 2 && n.state.selection.from >= d.from ? b.start = n.state.selection.from : b.endA < n.state.selection.to && b.endA >= n.state.selection.to - 2 && n.state.selection.to <= d.to && (b.endB += n.state.selection.to - b.endA, b.endA = n.state.selection.to)), Ke && an <= 11 && b.endB == b.start + 1 && b.endA == b.start && b.start > d.from && d.doc.textBetween(b.start - d.from - 1, b.start - d.from + 1) == "  " && (b.start--, b.endA--, b.endB--);
  let S = d.doc.resolveNoCache(b.start - d.from), x = d.doc.resolveNoCache(b.endB - d.from), w = f.resolve(b.start), T = S.sameParent(x) && S.parent.inlineContent && w.end() >= b.endA;
  if ((ur && n.input.lastIOSEnter > Date.now() - 225 && (!T || i.some((E) => E.nodeName == "DIV" || E.nodeName == "P")) || !T && S.pos < d.doc.content.size && (!S.sameParent(x) || !S.parent.inlineContent) && S.pos < x.pos && !/\S/.test(d.doc.textBetween(S.pos, x.pos, "", ""))) && n.someProp("handleKeyDown", (E) => E(n, Mn(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (n.state.selection.anchor > b.start && Ek(f, b.start, b.endA, S, x) && n.someProp("handleKeyDown", (E) => E(n, Mn(8, "Backspace")))) {
    zt && Ne && n.domObserver.suppressSelectionUpdates();
    return;
  }
  Ne && b.endB == b.start && (n.input.lastChromeDelete = Date.now()), zt && !T && S.start() != x.start() && x.parentOffset == 0 && S.depth == x.depth && d.sel && d.sel.anchor == d.sel.head && d.sel.head == b.endA && (b.endB -= 2, x = d.doc.resolveNoCache(b.endB - d.from), setTimeout(() => {
    n.someProp("handleKeyDown", function(E) {
      return E(n, Mn(13, "Enter"));
    });
  }, 20));
  let v = b.start, _ = b.endA, I = (E) => {
    let z = E || n.state.tr.replace(v, _, d.doc.slice(b.start - d.from, b.endB - d.from));
    if (d.sel) {
      let j = vu(n, z.doc, d.sel);
      j && !(Ne && n.composing && j.empty && (b.start != b.endB || n.input.lastChromeDelete < Date.now() - 100) && (j.head == v || j.head == z.mapping.map(_) - 1) || Ke && j.empty && j.head == v) && z.setSelection(j);
    }
    return s && z.setMeta("composition", s), z.scrollIntoView();
  }, P;
  if (T)
    if (S.pos == x.pos) {
      Ke && an <= 11 && S.parentOffset == 0 && (n.domObserver.suppressSelectionUpdates(), setTimeout(() => $t(n), 20));
      let E = I(n.state.tr.delete(v, _)), z = f.resolve(b.start).marksAcross(f.resolve(b.endA));
      z && E.ensureMarks(z), n.dispatch(E);
    } else if (
      // Adding or removing a mark
      b.endA == b.endB && (P = vk(S.parent.content.cut(S.parentOffset, x.parentOffset), w.parent.content.cut(w.parentOffset, b.endA - w.start())))
    ) {
      let E = I(n.state.tr);
      P.type == "add" ? E.addMark(v, _, P.mark) : E.removeMark(v, _, P.mark), n.dispatch(E);
    } else if (S.parent.child(S.index()).isText && S.index() == x.index() - (x.textOffset ? 0 : 1)) {
      let E = S.parent.textBetween(S.parentOffset, x.parentOffset), z = () => I(n.state.tr.insertText(E, v, _));
      n.someProp("handleTextInput", (j) => j(n, v, _, E, z)) || n.dispatch(z());
    } else
      n.dispatch(I());
  else
    n.dispatch(I());
}
function vu(n, e, t) {
  return Math.max(t.anchor, t.head) > e.content.size ? null : ma(n, e.resolve(t.anchor), e.resolve(t.head));
}
function vk(n, e) {
  let t = n.firstChild.marks, r = e.firstChild.marks, i = t, s = r, o, l, c;
  for (let f = 0; f < r.length; f++)
    i = r[f].removeFromSet(i);
  for (let f = 0; f < t.length; f++)
    s = t[f].removeFromSet(s);
  if (i.length == 1 && s.length == 0)
    l = i[0], o = "add", c = (f) => f.mark(l.addToSet(f.marks));
  else if (i.length == 0 && s.length == 1)
    l = s[0], o = "remove", c = (f) => f.mark(l.removeFromSet(f.marks));
  else
    return null;
  let d = [];
  for (let f = 0; f < e.childCount; f++)
    d.push(c(e.child(f)));
  if (A.from(d).eq(n))
    return { mark: l, type: o };
}
function Ek(n, e, t, r, i) {
  if (
    // The content must have shrunk
    t - e <= i.pos - r.pos || // newEnd must point directly at or after the end of the block that newStart points into
    nl(r, !0, !1) < i.pos
  )
    return !1;
  let s = n.resolve(e);
  if (!r.parent.isTextblock) {
    let l = s.nodeAfter;
    return l != null && t == e + l.nodeSize;
  }
  if (s.parentOffset < s.parent.content.size || !s.parent.isTextblock)
    return !1;
  let o = n.resolve(nl(s, !0, !0));
  return !o.parent.isTextblock || o.pos > t || nl(o, !0, !1) < t ? !1 : r.parent.content.cut(r.parentOffset).eq(o.parent.content);
}
function nl(n, e, t) {
  let r = n.depth, i = e ? n.end() : n.pos;
  for (; r > 0 && (e || n.indexAfter(r) == n.node(r).childCount); )
    r--, i++, e = !1;
  if (t) {
    let s = n.node(r).maybeChild(n.indexAfter(r));
    for (; s && !s.isLeaf; )
      s = s.firstChild, i++;
  }
  return i;
}
function Ak(n, e, t, r, i) {
  let s = n.findDiffStart(e, t);
  if (s == null)
    return null;
  let { a: o, b: l } = n.findDiffEnd(e, t + n.size, t + e.size);
  if (i == "end") {
    let c = Math.max(0, s - Math.min(o, l));
    r -= o + c - s;
  }
  if (o < s && n.size < e.size) {
    let c = r <= s && r >= o ? s - r : 0;
    s -= c, s && s < e.size && Eu(e.textBetween(s - 1, s + 1)) && (s += c ? 1 : -1), l = s + (l - o), o = s;
  } else if (l < s) {
    let c = r <= s && r >= l ? s - r : 0;
    s -= c, s && s < n.size && Eu(n.textBetween(s - 1, s + 1)) && (s += c ? 1 : -1), o = s + (o - l), l = s;
  }
  return { start: s, endA: o, endB: l };
}
function Eu(n) {
  if (n.length != 2)
    return !1;
  let e = n.charCodeAt(0), t = n.charCodeAt(1);
  return e >= 56320 && e <= 57343 && t >= 55296 && t <= 56319;
}
class jf {
  /**
  Create a view. `place` may be a DOM node that the editor should
  be appended to, a function that will place it into the document,
  or an object whose `mount` property holds the node to use as the
  document container. If it is `null`, the editor will not be
  added to the document.
  */
  constructor(e, t) {
    this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new jb(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(Iu), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = Nu(this), Du(this), this.nodeViews = Ru(this), this.docView = cu(this.state.doc, Au(this), tl(this), this.dom, this), this.domObserver = new bk(this, (r, i, s, o) => Ok(this, r, i, s, o)), this.domObserver.start(), Ub(this), this.updatePluginViews();
  }
  /**
  Holds `true` when a
  [composition](https://w3c.github.io/uievents/#events-compositionevents)
  is active.
  */
  get composing() {
    return this.input.composing;
  }
  /**
  The view's current [props](https://prosemirror.net/docs/ref/#view.EditorProps).
  */
  get props() {
    if (this._props.state != this.state) {
      let e = this._props;
      this._props = {};
      for (let t in e)
        this._props[t] = e[t];
      this._props.state = this.state;
    }
    return this._props;
  }
  /**
  Update the view's props. Will immediately cause an update to
  the DOM.
  */
  update(e) {
    e.handleDOMEvents != this._props.handleDOMEvents && Hl(this);
    let t = this._props;
    this._props = e, e.plugins && (e.plugins.forEach(Iu), this.directPlugins = e.plugins), this.updateStateInner(e.state, t);
  }
  /**
  Update the view by updating existing props object with the object
  given as argument. Equivalent to `view.update(Object.assign({},
  view.props, props))`.
  */
  setProps(e) {
    let t = {};
    for (let r in this._props)
      t[r] = this._props[r];
    t.state = this.state;
    for (let r in e)
      t[r] = e[r];
    this.update(t);
  }
  /**
  Update the editor's `state` prop, without touching any of the
  other props.
  */
  updateState(e) {
    this.updateStateInner(e, this._props);
  }
  updateStateInner(e, t) {
    var r;
    let i = this.state, s = !1, o = !1;
    e.storedMarks && this.composing && (Bf(this), o = !0), this.state = e;
    let l = i.plugins != e.plugins || this._props.plugins != t.plugins;
    if (l || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
      let y = Ru(this);
      Nk(y, this.nodeViews) && (this.nodeViews = y, s = !0);
    }
    (l || t.handleDOMEvents != this._props.handleDOMEvents) && Hl(this), this.editable = Nu(this), Du(this);
    let c = tl(this), d = Au(this), f = i.plugins != e.plugins && !i.doc.eq(e.doc) ? "reset" : e.scrollToSelection > i.scrollToSelection ? "to selection" : "preserve", h = s || !this.docView.matchesNode(e.doc, d, c);
    (h || !e.selection.eq(i.selection)) && (o = !0);
    let g = f == "preserve" && o && this.dom.style.overflowAnchor == null && ob(this);
    if (o) {
      this.domObserver.stop();
      let y = h && (Ke || Ne) && !this.composing && !i.selection.empty && !e.selection.empty && Dk(i.selection, e.selection);
      if (h) {
        let b = Ne ? this.trackWrites = this.domSelectionRange().focusNode : null;
        this.composing && (this.input.compositionNode = ok(this)), (s || !this.docView.update(e.doc, d, c, this)) && (this.docView.updateOuterDeco(d), this.docView.destroy(), this.docView = cu(e.doc, d, c, this.dom, this)), b && (!this.trackWrites || !this.dom.contains(this.trackWrites)) && (y = !0);
      }
      y || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && Db(this)) ? $t(this, y) : (Of(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
    }
    this.updatePluginViews(i), !((r = this.dragging) === null || r === void 0) && r.node && !i.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, i), f == "reset" ? this.dom.scrollTop = 0 : f == "to selection" ? this.scrollToSelection() : g && lb(g);
  }
  /**
  @internal
  */
  scrollToSelection() {
    let e = this.domSelectionRange().focusNode;
    if (!(!e || !this.dom.contains(e.nodeType == 1 ? e : e.parentNode))) {
      if (!this.someProp("handleScrollToSelection", (t) => t(this))) if (this.state.selection instanceof $) {
        let t = this.docView.domAfterPos(this.state.selection.from);
        t.nodeType == 1 && ru(this, t.getBoundingClientRect(), e);
      } else
        ru(this, this.coordsAtPos(this.state.selection.head, 1), e);
    }
  }
  destroyPluginViews() {
    let e;
    for (; e = this.pluginViews.pop(); )
      e.destroy && e.destroy();
  }
  updatePluginViews(e) {
    if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
      for (let t = 0; t < this.directPlugins.length; t++) {
        let r = this.directPlugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
      for (let t = 0; t < this.state.plugins.length; t++) {
        let r = this.state.plugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
    } else
      for (let t = 0; t < this.pluginViews.length; t++) {
        let r = this.pluginViews[t];
        r.update && r.update(this, e);
      }
  }
  updateDraggedNode(e, t) {
    let r = e.node, i = -1;
    if (this.state.doc.nodeAt(r.from) == r.node)
      i = r.from;
    else {
      let s = r.from + (this.state.doc.content.size - t.doc.content.size);
      (s > 0 && this.state.doc.nodeAt(s)) == r.node && (i = s);
    }
    this.dragging = new Hf(e.slice, e.move, i < 0 ? void 0 : $.create(this.state.doc, i));
  }
  someProp(e, t) {
    let r = this._props && this._props[e], i;
    if (r != null && (i = t ? t(r) : r))
      return i;
    for (let o = 0; o < this.directPlugins.length; o++) {
      let l = this.directPlugins[o].props[e];
      if (l != null && (i = t ? t(l) : l))
        return i;
    }
    let s = this.state.plugins;
    if (s)
      for (let o = 0; o < s.length; o++) {
        let l = s[o].props[e];
        if (l != null && (i = t ? t(l) : l))
          return i;
      }
  }
  /**
  Query whether the view has focus.
  */
  hasFocus() {
    if (Ke) {
      let e = this.root.activeElement;
      if (e == this.dom)
        return !0;
      if (!e || !this.dom.contains(e))
        return !1;
      for (; e && this.dom != e && this.dom.contains(e); ) {
        if (e.contentEditable == "false")
          return !1;
        e = e.parentElement;
      }
      return !0;
    }
    return this.root.activeElement == this.dom;
  }
  /**
  Focus the editor.
  */
  focus() {
    this.domObserver.stop(), this.editable && ab(this.dom), $t(this), this.domObserver.start();
  }
  /**
  Get the document root in which the editor exists. This will
  usually be the top-level `document`, but might be a [shadow
  DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
  root if the editor is inside one.
  */
  get root() {
    let e = this._root;
    if (e == null) {
      for (let t = this.dom.parentNode; t; t = t.parentNode)
        if (t.nodeType == 9 || t.nodeType == 11 && t.host)
          return t.getSelection || (Object.getPrototypeOf(t).getSelection = () => t.ownerDocument.getSelection()), this._root = t;
    }
    return e || document;
  }
  /**
  When an existing editor view is moved to a new document or
  shadow tree, call this to make it recompute its root.
  */
  updateRoot() {
    this._root = null;
  }
  /**
  Given a pair of viewport coordinates, return the document
  position that corresponds to them. May return null if the given
  coordinates aren't inside of the editor. When an object is
  returned, its `pos` property is the position nearest to the
  coordinates, and its `inside` property holds the position of the
  inner node that the position falls inside of, or -1 if it is at
  the top level, not in any node.
  */
  posAtCoords(e) {
    return hb(this, e);
  }
  /**
  Returns the viewport rectangle at a given document position.
  `left` and `right` will be the same number, as this returns a
  flat cursor-ish rectangle. If the position is between two things
  that aren't directly adjacent, `side` determines which element
  is used. When < 0, the element before the position is used,
  otherwise the element after.
  */
  coordsAtPos(e, t = 1) {
    return bf(this, e, t);
  }
  /**
  Find the DOM position that corresponds to the given document
  position. When `side` is negative, find the position as close as
  possible to the content before the position. When positive,
  prefer positions close to the content after the position. When
  zero, prefer as shallow a position as possible.
  
  Note that you should **not** mutate the editor's internal DOM,
  only inspect it (and even that is usually not necessary).
  */
  domAtPos(e, t = 0) {
    return this.docView.domFromPos(e, t);
  }
  /**
  Find the DOM node that represents the document node after the
  given position. May return `null` when the position doesn't point
  in front of a node or if the node is inside an opaque node view.
  
  This is intended to be able to call things like
  `getBoundingClientRect` on that DOM node. Do **not** mutate the
  editor DOM directly, or add styling this way, since that will be
  immediately overriden by the editor as it redraws the node.
  */
  nodeDOM(e) {
    let t = this.docView.descAt(e);
    return t ? t.nodeDOM : null;
  }
  /**
  Find the document position that corresponds to a given DOM
  position. (Whenever possible, it is preferable to inspect the
  document structure directly, rather than poking around in the
  DOM, but sometimes—for example when interpreting an event
  target—you don't have a choice.)
  
  The `bias` parameter can be used to influence which side of a DOM
  node to use when the position is inside a leaf node.
  */
  posAtDOM(e, t, r = -1) {
    let i = this.docView.posFromDOM(e, t, r);
    if (i == null)
      throw new RangeError("DOM position not inside the editor");
    return i;
  }
  /**
  Find out whether the selection is at the end of a textblock when
  moving in a given direction. When, for example, given `"left"`,
  it will return true if moving left from the current cursor
  position would leave that position's parent textblock. Will apply
  to the view's current state by default, but it is possible to
  pass a different state.
  */
  endOfTextblock(e, t) {
    return bb(this, t || this.state, e);
  }
  /**
  Run the editor's paste logic with the given HTML string. The
  `event`, if given, will be passed to the
  [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
  */
  pasteHTML(e, t) {
    return Qr(this, "", e, !1, t || new ClipboardEvent("paste"));
  }
  /**
  Run the editor's paste logic with the given plain-text input.
  */
  pasteText(e, t) {
    return Qr(this, e, null, !0, t || new ClipboardEvent("paste"));
  }
  /**
  Serialize the given slice as it would be if it was copied from
  this editor. Returns a DOM element that contains a
  representation of the slice as its children, a textual
  representation, and the transformed slice (which can be
  different from the given input due to hooks like
  [`transformCopied`](https://prosemirror.net/docs/ref/#view.EditorProps.transformCopied)).
  */
  serializeForClipboard(e) {
    return ga(this, e);
  }
  /**
  Removes the editor from the DOM and destroys all [node
  views](https://prosemirror.net/docs/ref/#view.NodeView).
  */
  destroy() {
    this.docView && (qb(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], tl(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, J1());
  }
  /**
  This is true when the view has been
  [destroyed](https://prosemirror.net/docs/ref/#view.EditorView.destroy) (and thus should not be
  used anymore).
  */
  get isDestroyed() {
    return this.docView == null;
  }
  /**
  Used for testing.
  */
  dispatchEvent(e) {
    return Kb(this, e);
  }
  /**
  @internal
  */
  domSelectionRange() {
    let e = this.domSelection();
    return e ? Le && this.root.nodeType === 11 && tb(this.dom.ownerDocument) == this.dom && Sk(this, e) || e : { focusNode: null, focusOffset: 0, anchorNode: null, anchorOffset: 0 };
  }
  /**
  @internal
  */
  domSelection() {
    return this.root.getSelection();
  }
}
jf.prototype.dispatch = function(n) {
  let e = this._props.dispatchTransaction;
  e ? e.call(this, n) : this.updateState(this.state.apply(n));
};
function Au(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return e.class = "ProseMirror", e.contenteditable = String(n.editable), n.someProp("attributes", (t) => {
    if (typeof t == "function" && (t = t(n.state)), t)
      for (let r in t)
        r == "class" ? e.class += " " + t[r] : r == "style" ? e.style = (e.style ? e.style + ";" : "") + t[r] : !e[r] && r != "contenteditable" && r != "nodeName" && (e[r] = String(t[r]));
  }), e.translate || (e.translate = "no"), [Xe.node(0, n.state.doc.content.size, e)];
}
function Du(n) {
  if (n.markCursor) {
    let e = document.createElement("img");
    e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), n.cursorWrapper = { dom: e, deco: Xe.widget(n.state.selection.from, e, { raw: !0, marks: n.markCursor }) };
  } else
    n.cursorWrapper = null;
}
function Nu(n) {
  return !n.someProp("editable", (e) => e(n.state) === !1);
}
function Dk(n, e) {
  let t = Math.min(n.$anchor.sharedDepth(n.head), e.$anchor.sharedDepth(e.head));
  return n.$anchor.start(t) != e.$anchor.start(t);
}
function Ru(n) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(r) {
    for (let i in r)
      Object.prototype.hasOwnProperty.call(e, i) || (e[i] = r[i]);
  }
  return n.someProp("nodeViews", t), n.someProp("markViews", t), e;
}
function Nk(n, e) {
  let t = 0, r = 0;
  for (let i in n) {
    if (n[i] != e[i])
      return !0;
    t++;
  }
  for (let i in e)
    r++;
  return t != r;
}
function Iu(n) {
  if (n.spec.state || n.spec.filterTransaction || n.spec.appendTransaction)
    throw new RangeError("Plugins passed directly to the view must not have a state component");
}
var dn = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, us = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, Rk = typeof navigator < "u" && /Mac/.test(navigator.platform), Ik = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var De = 0; De < 10; De++) dn[48 + De] = dn[96 + De] = String(De);
for (var De = 1; De <= 24; De++) dn[De + 111] = "F" + De;
for (var De = 65; De <= 90; De++)
  dn[De] = String.fromCharCode(De + 32), us[De] = String.fromCharCode(De);
for (var rl in dn) us.hasOwnProperty(rl) || (us[rl] = dn[rl]);
function _k(n) {
  var e = Rk && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || Ik && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? us : dn)[n.keyCode] || n.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
const Pk = typeof navigator < "u" && /Mac|iP(hone|[oa]d)/.test(navigator.platform), Lk = typeof navigator < "u" && /Win/.test(navigator.platform);
function Fk(n) {
  let e = n.split(/-(?!$)/), t = e[e.length - 1];
  t == "Space" && (t = " ");
  let r, i, s, o;
  for (let l = 0; l < e.length - 1; l++) {
    let c = e[l];
    if (/^(cmd|meta|m)$/i.test(c))
      o = !0;
    else if (/^a(lt)?$/i.test(c))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(c))
      i = !0;
    else if (/^s(hift)?$/i.test(c))
      s = !0;
    else if (/^mod$/i.test(c))
      Pk ? o = !0 : i = !0;
    else
      throw new Error("Unrecognized modifier name: " + c);
  }
  return r && (t = "Alt-" + t), i && (t = "Ctrl-" + t), o && (t = "Meta-" + t), s && (t = "Shift-" + t), t;
}
function Bk(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n)
    e[Fk(t)] = n[t];
  return e;
}
function il(n, e, t = !0) {
  return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t && e.shiftKey && (n = "Shift-" + n), n;
}
function zk(n) {
  return new Te({ props: { handleKeyDown: Uf(n) } });
}
function Uf(n) {
  let e = Bk(n);
  return function(t, r) {
    let i = _k(r), s, o = e[il(i, r)];
    if (o && o(t.state, t.dispatch, t))
      return !0;
    if (i.length == 1 && i != " ") {
      if (r.shiftKey) {
        let l = e[il(i, r, !1)];
        if (l && l(t.state, t.dispatch, t))
          return !0;
      }
      if ((r.altKey || r.metaKey || r.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
      !(Lk && r.ctrlKey && r.altKey) && (s = dn[r.keyCode]) && s != i) {
        let l = e[il(s, r)];
        if (l && l(t.state, t.dispatch, t))
          return !0;
      }
    }
    return !1;
  };
}
const wa = (n, e) => n.selection.empty ? !1 : (e && e(n.tr.deleteSelection().scrollIntoView()), !0);
function qf(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("backward", n) : t.parentOffset > 0) ? null : t;
}
const Gf = (n, e, t) => {
  let r = qf(n, t);
  if (!r)
    return !1;
  let i = Ma(r);
  if (!i) {
    let o = r.blockRange(), l = o && hr(o);
    return l == null ? !1 : (e && e(n.tr.lift(o, l).scrollIntoView()), !0);
  }
  let s = i.nodeBefore;
  if (rh(n, i, e, -1))
    return !0;
  if (r.parent.content.size == 0 && (dr(s, "end") || $.isSelectable(s)))
    for (let o = r.depth; ; o--) {
      let l = Us(n.doc, r.before(o), r.after(o), L.empty);
      if (l && l.slice.size < l.to - l.from) {
        if (e) {
          let c = n.tr.step(l);
          c.setSelection(dr(s, "end") ? G.findFrom(c.doc.resolve(c.mapping.map(i.pos, -1)), -1) : $.create(c.doc, i.pos - s.nodeSize)), e(c.scrollIntoView());
        }
        return !0;
      }
      if (o == 1 || r.node(o - 1).childCount > 1)
        break;
    }
  return s.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos - s.nodeSize, i.pos).scrollIntoView()), !0) : !1;
}, Hk = (n, e, t) => {
  let r = qf(n, t);
  if (!r)
    return !1;
  let i = Ma(r);
  return i ? Kf(n, i, e) : !1;
}, $k = (n, e, t) => {
  let r = Qf(n, t);
  if (!r)
    return !1;
  let i = Ca(r);
  return i ? Kf(n, i, e) : !1;
};
function Kf(n, e, t) {
  let r = e.nodeBefore, i = r, s = e.pos - 1;
  for (; !i.isTextblock; s--) {
    if (i.type.spec.isolating)
      return !1;
    let f = i.lastChild;
    if (!f)
      return !1;
    i = f;
  }
  let o = e.nodeAfter, l = o, c = e.pos + 1;
  for (; !l.isTextblock; c++) {
    if (l.type.spec.isolating)
      return !1;
    let f = l.firstChild;
    if (!f)
      return !1;
    l = f;
  }
  let d = Us(n.doc, s, c, L.empty);
  if (!d || d.from != s || d instanceof xe && d.slice.size >= c - s)
    return !1;
  if (t) {
    let f = n.tr.step(d);
    f.setSelection(V.create(f.doc, s)), t(f.scrollIntoView());
  }
  return !0;
}
function dr(n, e, t = !1) {
  for (let r = n; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0;
    if (t && r.childCount != 1)
      return !1;
  }
  return !1;
}
const Jf = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, s = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("backward", n) : r.parentOffset > 0)
      return !1;
    s = Ma(r);
  }
  let o = s && s.nodeBefore;
  return !o || !$.isSelectable(o) ? !1 : (e && e(n.tr.setSelection($.create(n.doc, s.pos - o.nodeSize)).scrollIntoView()), !0);
};
function Ma(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      if (n.index(e) > 0)
        return n.doc.resolve(n.before(e + 1));
      if (n.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function Qf(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("forward", n) : t.parentOffset < t.parent.content.size) ? null : t;
}
const Zf = (n, e, t) => {
  let r = Qf(n, t);
  if (!r)
    return !1;
  let i = Ca(r);
  if (!i)
    return !1;
  let s = i.nodeAfter;
  if (rh(n, i, e, 1))
    return !0;
  if (r.parent.content.size == 0 && (dr(s, "start") || $.isSelectable(s))) {
    let o = Us(n.doc, r.before(), r.after(), L.empty);
    if (o && o.slice.size < o.to - o.from) {
      if (e) {
        let l = n.tr.step(o);
        l.setSelection(dr(s, "start") ? G.findFrom(l.doc.resolve(l.mapping.map(i.pos)), 1) : $.create(l.doc, l.mapping.map(i.pos))), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return s.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos, i.pos + s.nodeSize).scrollIntoView()), !0) : !1;
}, Xf = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, s = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("forward", n) : r.parentOffset < r.parent.content.size)
      return !1;
    s = Ca(r);
  }
  let o = s && s.nodeAfter;
  return !o || !$.isSelectable(o) ? !1 : (e && e(n.tr.setSelection($.create(n.doc, s.pos)).scrollIntoView()), !0);
};
function Ca(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      let t = n.node(e);
      if (n.index(e) + 1 < t.childCount)
        return n.doc.resolve(n.after(e + 1));
      if (t.type.spec.isolating)
        break;
    }
  return null;
}
const Wk = (n, e) => {
  let t = n.selection, r = t instanceof $, i;
  if (r) {
    if (t.node.isTextblock || !hn(n.doc, t.from))
      return !1;
    i = t.from;
  } else if (i = js(n.doc, t.from, -1), i == null)
    return !1;
  if (e) {
    let s = n.tr.join(i);
    r && s.setSelection($.create(s.doc, i - n.doc.resolve(i).nodeBefore.nodeSize)), e(s.scrollIntoView());
  }
  return !0;
}, Vk = (n, e) => {
  let t = n.selection, r;
  if (t instanceof $) {
    if (t.node.isTextblock || !hn(n.doc, t.to))
      return !1;
    r = t.to;
  } else if (r = js(n.doc, t.to, 1), r == null)
    return !1;
  return e && e(n.tr.join(r).scrollIntoView()), !0;
}, Yk = (n, e) => {
  let { $from: t, $to: r } = n.selection, i = t.blockRange(r), s = i && hr(i);
  return s == null ? !1 : (e && e(n.tr.lift(i, s).scrollIntoView()), !0);
}, eh = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  return !t.parent.type.spec.code || !t.sameParent(r) ? !1 : (e && e(n.tr.insertText(`
`).scrollIntoView()), !0);
};
function Ta(n) {
  for (let e = 0; e < n.edgeCount; e++) {
    let { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
const jk = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  if (!t.parent.type.spec.code || !t.sameParent(r))
    return !1;
  let i = t.node(-1), s = t.indexAfter(-1), o = Ta(i.contentMatchAt(s));
  if (!o || !i.canReplaceWith(s, s, o))
    return !1;
  if (e) {
    let l = t.after(), c = n.tr.replaceWith(l, l, o.createAndFill());
    c.setSelection(G.near(c.doc.resolve(l), 1)), e(c.scrollIntoView());
  }
  return !0;
}, th = (n, e) => {
  let t = n.selection, { $from: r, $to: i } = t;
  if (t instanceof et || r.parent.inlineContent || i.parent.inlineContent)
    return !1;
  let s = Ta(i.parent.contentMatchAt(i.indexAfter()));
  if (!s || !s.isTextblock)
    return !1;
  if (e) {
    let o = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos, l = n.tr.insert(o, s.createAndFill());
    l.setSelection(V.create(l.doc, o + 1)), e(l.scrollIntoView());
  }
  return !0;
}, nh = (n, e) => {
  let { $cursor: t } = n.selection;
  if (!t || t.parent.content.size)
    return !1;
  if (t.depth > 1 && t.after() != t.end(-1)) {
    let s = t.before();
    if (Ht(n.doc, s))
      return e && e(n.tr.split(s).scrollIntoView()), !0;
  }
  let r = t.blockRange(), i = r && hr(r);
  return i == null ? !1 : (e && e(n.tr.lift(r, i).scrollIntoView()), !0);
};
function Uk(n) {
  return (e, t) => {
    let { $from: r, $to: i } = e.selection;
    if (e.selection instanceof $ && e.selection.node.isBlock)
      return !r.parentOffset || !Ht(e.doc, r.pos) ? !1 : (t && t(e.tr.split(r.pos).scrollIntoView()), !0);
    if (!r.depth)
      return !1;
    let s = [], o, l, c = !1, d = !1;
    for (let y = r.depth; ; y--)
      if (r.node(y).isBlock) {
        c = r.end(y) == r.pos + (r.depth - y), d = r.start(y) == r.pos - (r.depth - y), l = Ta(r.node(y - 1).contentMatchAt(r.indexAfter(y - 1))), s.unshift(c && l ? { type: l } : null), o = y;
        break;
      } else {
        if (y == 1)
          return !1;
        s.unshift(null);
      }
    let f = e.tr;
    (e.selection instanceof V || e.selection instanceof et) && f.deleteSelection();
    let h = f.mapping.map(r.pos), g = Ht(f.doc, h, s.length, s);
    if (g || (s[0] = l ? { type: l } : null, g = Ht(f.doc, h, s.length, s)), !g)
      return !1;
    if (f.split(h, s.length, s), !c && d && r.node(o).type != l) {
      let y = f.mapping.map(r.before(o)), b = f.doc.resolve(y);
      l && r.node(o - 1).canReplaceWith(b.index(), b.index() + 1, l) && f.setNodeMarkup(f.mapping.map(r.before(o)), l);
    }
    return t && t(f.scrollIntoView()), !0;
  };
}
const qk = Uk(), Gk = (n, e) => {
  let { $from: t, to: r } = n.selection, i, s = t.sharedDepth(r);
  return s == 0 ? !1 : (i = t.before(s), e && e(n.tr.setSelection($.create(n.doc, i))), !0);
};
function Kk(n, e, t) {
  let r = e.nodeBefore, i = e.nodeAfter, s = e.index();
  return !r || !i || !r.type.compatibleContent(i.type) ? !1 : !r.content.size && e.parent.canReplace(s - 1, s) ? (t && t(n.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(s, s + 1) || !(i.isTextblock || hn(n.doc, e.pos)) ? !1 : (t && t(n.tr.join(e.pos).scrollIntoView()), !0);
}
function rh(n, e, t, r) {
  let i = e.nodeBefore, s = e.nodeAfter, o, l, c = i.type.spec.isolating || s.type.spec.isolating;
  if (!c && Kk(n, e, t))
    return !0;
  let d = !c && e.parent.canReplace(e.index(), e.index() + 1);
  if (d && (o = (l = i.contentMatchAt(i.childCount)).findWrapping(s.type)) && l.matchType(o[0] || s.type).validEnd) {
    if (t) {
      let y = e.pos + s.nodeSize, b = A.empty;
      for (let w = o.length - 1; w >= 0; w--)
        b = A.from(o[w].create(null, b));
      b = A.from(i.copy(b));
      let S = n.tr.step(new we(e.pos - 1, y, e.pos, y, new L(b, 1, 0), o.length, !0)), x = S.doc.resolve(y + 2 * o.length);
      x.nodeAfter && x.nodeAfter.type == i.type && hn(S.doc, x.pos) && S.join(x.pos), t(S.scrollIntoView());
    }
    return !0;
  }
  let f = s.type.spec.isolating || r > 0 && c ? null : G.findFrom(e, 1), h = f && f.$from.blockRange(f.$to), g = h && hr(h);
  if (g != null && g >= e.depth)
    return t && t(n.tr.lift(h, g).scrollIntoView()), !0;
  if (d && dr(s, "start", !0) && dr(i, "end")) {
    let y = i, b = [];
    for (; b.push(y), !y.isTextblock; )
      y = y.lastChild;
    let S = s, x = 1;
    for (; !S.isTextblock; S = S.firstChild)
      x++;
    if (y.canReplace(y.childCount, y.childCount, S.content)) {
      if (t) {
        let w = A.empty;
        for (let v = b.length - 1; v >= 0; v--)
          w = A.from(b[v].copy(w));
        let T = n.tr.step(new we(e.pos - b.length, e.pos + s.nodeSize, e.pos + x, e.pos + s.nodeSize - x, new L(w, b.length, 0), 0, !0));
        t(T.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function ih(n) {
  return function(e, t) {
    let r = e.selection, i = n < 0 ? r.$from : r.$to, s = i.depth;
    for (; i.node(s).isInline; ) {
      if (!s)
        return !1;
      s--;
    }
    return i.node(s).isTextblock ? (t && t(e.tr.setSelection(V.create(e.doc, n < 0 ? i.start(s) : i.end(s)))), !0) : !1;
  };
}
const Jk = ih(-1), Qk = ih(1);
function Zk(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: s } = t.selection, o = i.blockRange(s), l = o && da(o, n, e);
    return l ? (r && r(t.tr.wrap(o, l).scrollIntoView()), !0) : !1;
  };
}
function _u(n, e = null) {
  return function(t, r) {
    let i = !1;
    for (let s = 0; s < t.selection.ranges.length && !i; s++) {
      let { $from: { pos: o }, $to: { pos: l } } = t.selection.ranges[s];
      t.doc.nodesBetween(o, l, (c, d) => {
        if (i)
          return !1;
        if (!(!c.isTextblock || c.hasMarkup(n, e)))
          if (c.type == n)
            i = !0;
          else {
            let f = t.doc.resolve(d), h = f.index();
            i = f.parent.canReplaceWith(h, h + 1, n);
          }
      });
    }
    if (!i)
      return !1;
    if (r) {
      let s = t.tr;
      for (let o = 0; o < t.selection.ranges.length; o++) {
        let { $from: { pos: l }, $to: { pos: c } } = t.selection.ranges[o];
        s.setBlockType(l, c, n, e);
      }
      r(s.scrollIntoView());
    }
    return !0;
  };
}
function Oa(...n) {
  return function(e, t, r) {
    for (let i = 0; i < n.length; i++)
      if (n[i](e, t, r))
        return !0;
    return !1;
  };
}
Oa(wa, Gf, Jf);
Oa(wa, Zf, Xf);
Oa(eh, th, nh, qk);
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function Xk(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: s } = t.selection, o = i.blockRange(s);
    if (!o)
      return !1;
    let l = r ? t.tr : null;
    return eS(l, o, n, e) ? (r && r(l.scrollIntoView()), !0) : !1;
  };
}
function eS(n, e, t, r = null) {
  let i = !1, s = e, o = e.$from.doc;
  if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(t) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0)
      return !1;
    let c = o.resolve(e.start - 2);
    s = new ns(c, c, e.depth), e.endIndex < e.parent.childCount && (e = new ns(e.$from, o.resolve(e.$to.end(e.depth)), e.depth)), i = !0;
  }
  let l = da(s, t, r, e);
  return l ? (n && tS(n, e, l, i, t), !0) : !1;
}
function tS(n, e, t, r, i) {
  let s = A.empty;
  for (let f = t.length - 1; f >= 0; f--)
    s = A.from(t[f].type.create(t[f].attrs, s));
  n.step(new we(e.start - (r ? 2 : 0), e.end, e.start, e.end, new L(s, 0, 0), t.length, !0));
  let o = 0;
  for (let f = 0; f < t.length; f++)
    t[f].type == i && (o = f + 1);
  let l = t.length - o, c = e.start + t.length - (r ? 2 : 0), d = e.parent;
  for (let f = e.startIndex, h = e.endIndex, g = !0; f < h; f++, g = !1)
    !g && Ht(n.doc, c, l) && (n.split(c, l), c += 2 * l), c += d.child(f).nodeSize;
  return n;
}
function nS(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, s = r.blockRange(i, (o) => o.childCount > 0 && o.firstChild.type == n);
    return s ? t ? r.node(s.depth - 1).type == n ? rS(e, t, n, s) : iS(e, t, s) : !0 : !1;
  };
}
function rS(n, e, t, r) {
  let i = n.tr, s = r.end, o = r.$to.end(r.depth);
  s < o && (i.step(new we(s - 1, o, s, o, new L(A.from(t.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new ns(i.doc.resolve(r.$from.pos), i.doc.resolve(o), r.depth));
  const l = hr(r);
  if (l == null)
    return !1;
  i.lift(r, l);
  let c = i.doc.resolve(i.mapping.map(s, -1) - 1);
  return hn(i.doc, c.pos) && c.nodeBefore.type == c.nodeAfter.type && i.join(c.pos), e(i.scrollIntoView()), !0;
}
function iS(n, e, t) {
  let r = n.tr, i = t.parent;
  for (let y = t.end, b = t.endIndex - 1, S = t.startIndex; b > S; b--)
    y -= i.child(b).nodeSize, r.delete(y - 1, y + 1);
  let s = r.doc.resolve(t.start), o = s.nodeAfter;
  if (r.mapping.map(t.end) != t.start + s.nodeAfter.nodeSize)
    return !1;
  let l = t.startIndex == 0, c = t.endIndex == i.childCount, d = s.node(-1), f = s.index(-1);
  if (!d.canReplace(f + (l ? 0 : 1), f + 1, o.content.append(c ? A.empty : A.from(i))))
    return !1;
  let h = s.pos, g = h + o.nodeSize;
  return r.step(new we(h - (l ? 1 : 0), g + (c ? 1 : 0), h + 1, g - 1, new L((l ? A.empty : A.from(i.copy(A.empty))).append(c ? A.empty : A.from(i.copy(A.empty))), l ? 0 : 1, c ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function sS(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, s = r.blockRange(i, (d) => d.childCount > 0 && d.firstChild.type == n);
    if (!s)
      return !1;
    let o = s.startIndex;
    if (o == 0)
      return !1;
    let l = s.parent, c = l.child(o - 1);
    if (c.type != n)
      return !1;
    if (t) {
      let d = c.lastChild && c.lastChild.type == l.type, f = A.from(d ? n.create() : null), h = new L(A.from(n.create(null, A.from(l.type.create(null, f)))), d ? 3 : 1, 0), g = s.start, y = s.end;
      t(e.tr.step(new we(g - (d ? 3 : 1), y, g, y, h, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
function Qs(n) {
  const { state: e, transaction: t } = n;
  let { selection: r } = t, { doc: i } = t, { storedMarks: s } = t;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return s;
    },
    get selection() {
      return r;
    },
    get doc() {
      return i;
    },
    get tr() {
      return r = t.selection, i = t.doc, s = t.storedMarks, t;
    }
  };
}
class Zs {
  constructor(e) {
    this.editor = e.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = e.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: e, editor: t, state: r } = this, { view: i } = t, { tr: s } = r, o = this.buildProps(s);
    return Object.fromEntries(Object.entries(e).map(([l, c]) => [l, (...f) => {
      const h = c(...f)(o);
      return !s.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(s), h;
    }]));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(e, t = !0) {
    const { rawCommands: r, editor: i, state: s } = this, { view: o } = i, l = [], c = !!e, d = e || s.tr, f = () => (!c && t && !d.getMeta("preventDispatch") && !this.hasCustomState && o.dispatch(d), l.every((g) => g === !0)), h = {
      ...Object.fromEntries(Object.entries(r).map(([g, y]) => [g, (...S) => {
        const x = this.buildProps(d, t), w = y(...S)(x);
        return l.push(w), h;
      }])),
      run: f
    };
    return h;
  }
  createCan(e) {
    const { rawCommands: t, state: r } = this, i = !1, s = e || r.tr, o = this.buildProps(s, i);
    return {
      ...Object.fromEntries(Object.entries(t).map(([c, d]) => [c, (...f) => d(...f)({ ...o, dispatch: void 0 })])),
      chain: () => this.createChain(s, i)
    };
  }
  buildProps(e, t = !0) {
    const { rawCommands: r, editor: i, state: s } = this, { view: o } = i, l = {
      tr: e,
      editor: i,
      view: o,
      state: Qs({
        state: s,
        transaction: e
      }),
      dispatch: t ? () => {
      } : void 0,
      chain: () => this.createChain(e, t),
      can: () => this.createCan(e),
      get commands() {
        return Object.fromEntries(Object.entries(r).map(([c, d]) => [c, (...f) => d(...f)(l)]));
      }
    };
    return l;
  }
}
class oS {
  constructor() {
    this.callbacks = {};
  }
  on(e, t) {
    return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), this;
  }
  emit(e, ...t) {
    const r = this.callbacks[e];
    return r && r.forEach((i) => i.apply(this, t)), this;
  }
  off(e, t) {
    const r = this.callbacks[e];
    return r && (t ? this.callbacks[e] = r.filter((i) => i !== t) : delete this.callbacks[e]), this;
  }
  once(e, t) {
    const r = (...i) => {
      this.off(e, r), t.apply(this, i);
    };
    return this.on(e, r);
  }
  removeAllListeners() {
    this.callbacks = {};
  }
}
function B(n, e, t) {
  return n.config[e] === void 0 && n.parent ? B(n.parent, e, t) : typeof n.config[e] == "function" ? n.config[e].bind({
    ...t,
    parent: n.parent ? B(n.parent, e, t) : null
  }) : n.config[e];
}
function Xs(n) {
  const e = n.filter((i) => i.type === "extension"), t = n.filter((i) => i.type === "node"), r = n.filter((i) => i.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: t,
    markExtensions: r
  };
}
function sh(n) {
  const e = [], { nodeExtensions: t, markExtensions: r } = Xs(n), i = [...t, ...r], s = {
    default: null,
    rendered: !0,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: !0,
    isRequired: !1
  };
  return n.forEach((o) => {
    const l = {
      name: o.name,
      options: o.options,
      storage: o.storage,
      extensions: i
    }, c = B(o, "addGlobalAttributes", l);
    if (!c)
      return;
    c().forEach((f) => {
      f.types.forEach((h) => {
        Object.entries(f.attributes).forEach(([g, y]) => {
          e.push({
            type: h,
            name: g,
            attribute: {
              ...s,
              ...y
            }
          });
        });
      });
    });
  }), i.forEach((o) => {
    const l = {
      name: o.name,
      options: o.options,
      storage: o.storage
    }, c = B(o, "addAttributes", l);
    if (!c)
      return;
    const d = c();
    Object.entries(d).forEach(([f, h]) => {
      const g = {
        ...s,
        ...h
      };
      typeof (g == null ? void 0 : g.default) == "function" && (g.default = g.default()), g != null && g.isRequired && (g == null ? void 0 : g.default) === void 0 && delete g.default, e.push({
        type: o.name,
        name: f,
        attribute: g
      });
    });
  }), e;
}
function Ce(n, e) {
  if (typeof n == "string") {
    if (!e.nodes[n])
      throw Error(`There is no node type named '${n}'. Maybe you forgot to add the extension?`);
    return e.nodes[n];
  }
  return n;
}
function de(...n) {
  return n.filter((e) => !!e).reduce((e, t) => {
    const r = { ...e };
    return Object.entries(t).forEach(([i, s]) => {
      if (!r[i]) {
        r[i] = s;
        return;
      }
      if (i === "class") {
        const l = s ? String(s).split(" ") : [], c = r[i] ? r[i].split(" ") : [], d = l.filter((f) => !c.includes(f));
        r[i] = [...c, ...d].join(" ");
      } else if (i === "style") {
        const l = s ? s.split(";").map((f) => f.trim()).filter(Boolean) : [], c = r[i] ? r[i].split(";").map((f) => f.trim()).filter(Boolean) : [], d = /* @__PURE__ */ new Map();
        c.forEach((f) => {
          const [h, g] = f.split(":").map((y) => y.trim());
          d.set(h, g);
        }), l.forEach((f) => {
          const [h, g] = f.split(":").map((y) => y.trim());
          d.set(h, g);
        }), r[i] = Array.from(d.entries()).map(([f, h]) => `${f}: ${h}`).join("; ");
      } else
        r[i] = s;
    }), r;
  }, {});
}
function $l(n, e) {
  return e.filter((t) => t.type === n.type.name).filter((t) => t.attribute.rendered).map((t) => t.attribute.renderHTML ? t.attribute.renderHTML(n.attrs) || {} : {
    [t.name]: n.attrs[t.name]
  }).reduce((t, r) => de(t, r), {});
}
function oh(n) {
  return typeof n == "function";
}
function K(n, e = void 0, ...t) {
  return oh(n) ? e ? n.bind(e)(...t) : n(...t) : n;
}
function lS(n = {}) {
  return Object.keys(n).length === 0 && n.constructor === Object;
}
function aS(n) {
  return typeof n != "string" ? n : n.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(n) : n === "true" ? !0 : n === "false" ? !1 : n;
}
function Pu(n, e) {
  return "style" in n ? n : {
    ...n,
    getAttrs: (t) => {
      const r = n.getAttrs ? n.getAttrs(t) : n.attrs;
      if (r === !1)
        return !1;
      const i = e.reduce((s, o) => {
        const l = o.attribute.parseHTML ? o.attribute.parseHTML(t) : aS(t.getAttribute(o.name));
        return l == null ? s : {
          ...s,
          [o.name]: l
        };
      }, {});
      return { ...r, ...i };
    }
  };
}
function Lu(n) {
  return Object.fromEntries(
    // @ts-ignore
    Object.entries(n).filter(([e, t]) => e === "attrs" && lS(t) ? !1 : t != null)
  );
}
function cS(n, e) {
  var t;
  const r = sh(n), { nodeExtensions: i, markExtensions: s } = Xs(n), o = (t = i.find((d) => B(d, "topNode"))) === null || t === void 0 ? void 0 : t.name, l = Object.fromEntries(i.map((d) => {
    const f = r.filter((w) => w.type === d.name), h = {
      name: d.name,
      options: d.options,
      storage: d.storage,
      editor: e
    }, g = n.reduce((w, T) => {
      const v = B(T, "extendNodeSchema", h);
      return {
        ...w,
        ...v ? v(d) : {}
      };
    }, {}), y = Lu({
      ...g,
      content: K(B(d, "content", h)),
      marks: K(B(d, "marks", h)),
      group: K(B(d, "group", h)),
      inline: K(B(d, "inline", h)),
      atom: K(B(d, "atom", h)),
      selectable: K(B(d, "selectable", h)),
      draggable: K(B(d, "draggable", h)),
      code: K(B(d, "code", h)),
      whitespace: K(B(d, "whitespace", h)),
      linebreakReplacement: K(B(d, "linebreakReplacement", h)),
      defining: K(B(d, "defining", h)),
      isolating: K(B(d, "isolating", h)),
      attrs: Object.fromEntries(f.map((w) => {
        var T;
        return [w.name, { default: (T = w == null ? void 0 : w.attribute) === null || T === void 0 ? void 0 : T.default }];
      }))
    }), b = K(B(d, "parseHTML", h));
    b && (y.parseDOM = b.map((w) => Pu(w, f)));
    const S = B(d, "renderHTML", h);
    S && (y.toDOM = (w) => S({
      node: w,
      HTMLAttributes: $l(w, f)
    }));
    const x = B(d, "renderText", h);
    return x && (y.toText = x), [d.name, y];
  })), c = Object.fromEntries(s.map((d) => {
    const f = r.filter((x) => x.type === d.name), h = {
      name: d.name,
      options: d.options,
      storage: d.storage,
      editor: e
    }, g = n.reduce((x, w) => {
      const T = B(w, "extendMarkSchema", h);
      return {
        ...x,
        ...T ? T(d) : {}
      };
    }, {}), y = Lu({
      ...g,
      inclusive: K(B(d, "inclusive", h)),
      excludes: K(B(d, "excludes", h)),
      group: K(B(d, "group", h)),
      spanning: K(B(d, "spanning", h)),
      code: K(B(d, "code", h)),
      attrs: Object.fromEntries(f.map((x) => {
        var w;
        return [x.name, { default: (w = x == null ? void 0 : x.attribute) === null || w === void 0 ? void 0 : w.default }];
      }))
    }), b = K(B(d, "parseHTML", h));
    b && (y.parseDOM = b.map((x) => Pu(x, f)));
    const S = B(d, "renderHTML", h);
    return S && (y.toDOM = (x) => S({
      mark: x,
      HTMLAttributes: $l(x, f)
    })), [d.name, y];
  }));
  return new jd({
    topNode: o,
    nodes: l,
    marks: c
  });
}
function sl(n, e) {
  return e.nodes[n] || e.marks[n] || null;
}
function Fu(n, e) {
  return Array.isArray(e) ? e.some((t) => (typeof t == "string" ? t : t.name) === n.name) : e;
}
function va(n, e) {
  const t = Hn.fromSchema(e).serializeFragment(n), i = document.implementation.createHTMLDocument().createElement("div");
  return i.appendChild(t), i.innerHTML;
}
const uS = (n, e = 500) => {
  let t = "";
  const r = n.parentOffset;
  return n.parent.nodesBetween(Math.max(0, r - e), r, (i, s, o, l) => {
    var c, d;
    const f = ((d = (c = i.type.spec).toText) === null || d === void 0 ? void 0 : d.call(c, {
      node: i,
      pos: s,
      parent: o,
      index: l
    })) || i.textContent || "%leaf%";
    t += i.isAtom && !i.isText ? f : f.slice(0, Math.max(0, r - s));
  }), t;
};
function Ea(n) {
  return Object.prototype.toString.call(n) === "[object RegExp]";
}
class ci {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const dS = (n, e) => {
  if (Ea(e))
    return e.exec(n);
  const t = e(n);
  if (!t)
    return null;
  const r = [t.text];
  return r.index = t.index, r.input = n, r.data = t.data, t.replaceWith && (t.text.includes(t.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(t.replaceWith)), r;
};
function Ii(n) {
  var e;
  const { editor: t, from: r, to: i, text: s, rules: o, plugin: l } = n, { view: c } = t;
  if (c.composing)
    return !1;
  const d = c.state.doc.resolve(r);
  if (
    // check for code node
    d.parent.type.spec.code || !((e = d.nodeBefore || d.nodeAfter) === null || e === void 0) && e.marks.find((g) => g.type.spec.code)
  )
    return !1;
  let f = !1;
  const h = uS(d) + s;
  return o.forEach((g) => {
    if (f)
      return;
    const y = dS(h, g.find);
    if (!y)
      return;
    const b = c.state.tr, S = Qs({
      state: c.state,
      transaction: b
    }), x = {
      from: r - (y[0].length - s.length),
      to: i
    }, { commands: w, chain: T, can: v } = new Zs({
      editor: t,
      state: S
    });
    g.handler({
      state: S,
      range: x,
      match: y,
      commands: w,
      chain: T,
      can: v
    }) === null || !b.steps.length || (b.setMeta(l, {
      transform: b,
      from: r,
      to: i,
      text: s
    }), c.dispatch(b), f = !0);
  }), f;
}
function fS(n) {
  const { editor: e, rules: t } = n, r = new Te({
    state: {
      init() {
        return null;
      },
      apply(i, s, o) {
        const l = i.getMeta(r);
        if (l)
          return l;
        const c = i.getMeta("applyInputRules");
        return !!c && setTimeout(() => {
          let { text: f } = c;
          typeof f == "string" ? f = f : f = va(A.from(f), o.schema);
          const { from: h } = c, g = h + f.length;
          Ii({
            editor: e,
            from: h,
            to: g,
            text: f,
            rules: t,
            plugin: r
          });
        }), i.selectionSet || i.docChanged ? null : s;
      }
    },
    props: {
      handleTextInput(i, s, o, l) {
        return Ii({
          editor: e,
          from: s,
          to: o,
          text: l,
          rules: t,
          plugin: r
        });
      },
      handleDOMEvents: {
        compositionend: (i) => (setTimeout(() => {
          const { $cursor: s } = i.state.selection;
          s && Ii({
            editor: e,
            from: s.pos,
            to: s.pos,
            text: "",
            rules: t,
            plugin: r
          });
        }), !1)
      },
      // add support for input rules to trigger on enter
      // this is useful for example for code blocks
      handleKeyDown(i, s) {
        if (s.key !== "Enter")
          return !1;
        const { $cursor: o } = i.state.selection;
        return o ? Ii({
          editor: e,
          from: o.pos,
          to: o.pos,
          text: `
`,
          rules: t,
          plugin: r
        }) : !1;
      }
    },
    // @ts-ignore
    isInputRules: !0
  });
  return r;
}
function hS(n) {
  return Object.prototype.toString.call(n).slice(8, -1);
}
function _i(n) {
  return hS(n) !== "Object" ? !1 : n.constructor === Object && Object.getPrototypeOf(n) === Object.prototype;
}
function eo(n, e) {
  const t = { ...n };
  return _i(n) && _i(e) && Object.keys(e).forEach((r) => {
    _i(e[r]) && _i(n[r]) ? t[r] = eo(n[r], e[r]) : t[r] = e[r];
  }), t;
}
class ut {
  constructor(e = {}) {
    this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = K(B(this, "addOptions", {
      name: this.name
    }))), this.storage = K(B(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new ut(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => eo(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new ut(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = K(B(t, "addOptions", {
      name: t.name
    })), t.storage = K(B(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  static handleExit({ editor: e, mark: t }) {
    const { tr: r } = e.state, i = e.state.selection.$from;
    if (i.pos === i.end()) {
      const o = i.marks();
      if (!!!o.find((d) => (d == null ? void 0 : d.type.name) === t.name))
        return !1;
      const c = o.find((d) => (d == null ? void 0 : d.type.name) === t.name);
      return c && r.removeStoredMark(c), r.insertText(" ", i.pos), e.view.dispatch(r), !0;
    }
    return !1;
  }
}
function pS(n) {
  return typeof n == "number";
}
class mS {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const gS = (n, e, t) => {
  if (Ea(e))
    return [...n.matchAll(e)];
  const r = e(n, t);
  return r ? r.map((i) => {
    const s = [i.text];
    return s.index = i.index, s.input = n, s.data = i.data, i.replaceWith && (i.text.includes(i.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), s.push(i.replaceWith)), s;
  }) : [];
};
function yS(n) {
  const { editor: e, state: t, from: r, to: i, rule: s, pasteEvent: o, dropEvent: l } = n, { commands: c, chain: d, can: f } = new Zs({
    editor: e,
    state: t
  }), h = [];
  return t.doc.nodesBetween(r, i, (y, b) => {
    if (!y.isTextblock || y.type.spec.code)
      return;
    const S = Math.max(r, b), x = Math.min(i, b + y.content.size), w = y.textBetween(S - b, x - b, void 0, "￼");
    gS(w, s.find, o).forEach((v) => {
      if (v.index === void 0)
        return;
      const _ = S + v.index + 1, I = _ + v[0].length, P = {
        from: t.tr.mapping.map(_),
        to: t.tr.mapping.map(I)
      }, E = s.handler({
        state: t,
        range: P,
        match: v,
        commands: c,
        chain: d,
        can: f,
        pasteEvent: o,
        dropEvent: l
      });
      h.push(E);
    });
  }), h.every((y) => y !== null);
}
let Pi = null;
const bS = (n) => {
  var e;
  const t = new ClipboardEvent("paste", {
    clipboardData: new DataTransfer()
  });
  return (e = t.clipboardData) === null || e === void 0 || e.setData("text/html", n), t;
};
function kS(n) {
  const { editor: e, rules: t } = n;
  let r = null, i = !1, s = !1, o = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, l;
  try {
    l = typeof DragEvent < "u" ? new DragEvent("drop") : null;
  } catch {
    l = null;
  }
  const c = ({ state: f, from: h, to: g, rule: y, pasteEvt: b }) => {
    const S = f.tr, x = Qs({
      state: f,
      transaction: S
    });
    if (!(!yS({
      editor: e,
      state: x,
      from: Math.max(h - 1, 0),
      to: g.b - 1,
      rule: y,
      pasteEvent: b,
      dropEvent: l
    }) || !S.steps.length)) {
      try {
        l = typeof DragEvent < "u" ? new DragEvent("drop") : null;
      } catch {
        l = null;
      }
      return o = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, S;
    }
  };
  return t.map((f) => new Te({
    // we register a global drag handler to track the current drag source element
    view(h) {
      const g = (b) => {
        var S;
        r = !((S = h.dom.parentElement) === null || S === void 0) && S.contains(b.target) ? h.dom.parentElement : null, r && (Pi = e);
      }, y = () => {
        Pi && (Pi = null);
      };
      return window.addEventListener("dragstart", g), window.addEventListener("dragend", y), {
        destroy() {
          window.removeEventListener("dragstart", g), window.removeEventListener("dragend", y);
        }
      };
    },
    props: {
      handleDOMEvents: {
        drop: (h, g) => {
          if (s = r === h.dom.parentElement, l = g, !s) {
            const y = Pi;
            y != null && y.isEditable && setTimeout(() => {
              const b = y.state.selection;
              b && y.commands.deleteRange({ from: b.from, to: b.to });
            }, 10);
          }
          return !1;
        },
        paste: (h, g) => {
          var y;
          const b = (y = g.clipboardData) === null || y === void 0 ? void 0 : y.getData("text/html");
          return o = g, i = !!(b != null && b.includes("data-pm-slice")), !1;
        }
      }
    },
    appendTransaction: (h, g, y) => {
      const b = h[0], S = b.getMeta("uiEvent") === "paste" && !i, x = b.getMeta("uiEvent") === "drop" && !s, w = b.getMeta("applyPasteRules"), T = !!w;
      if (!S && !x && !T)
        return;
      if (T) {
        let { text: I } = w;
        typeof I == "string" ? I = I : I = va(A.from(I), y.schema);
        const { from: P } = w, E = P + I.length, z = bS(I);
        return c({
          rule: f,
          state: y,
          from: P,
          to: { b: E },
          pasteEvt: z
        });
      }
      const v = g.doc.content.findDiffStart(y.doc.content), _ = g.doc.content.findDiffEnd(y.doc.content);
      if (!(!pS(v) || !_ || v === _.b))
        return c({
          rule: f,
          state: y,
          from: v,
          to: _,
          pasteEvt: o
        });
    }
  }));
}
function SS(n) {
  const e = n.filter((t, r) => n.indexOf(t) !== r);
  return Array.from(new Set(e));
}
class ir {
  constructor(e, t) {
    this.splittableMarks = [], this.editor = t, this.extensions = ir.resolve(e), this.schema = cS(this.extensions, t), this.setupExtensions();
  }
  /**
   * Returns a flattened and sorted extension list while
   * also checking for duplicated extensions and warns the user.
   * @param extensions An array of Tiptap extensions
   * @returns An flattened and sorted array of Tiptap extensions
   */
  static resolve(e) {
    const t = ir.sort(ir.flatten(e)), r = SS(t.map((i) => i.name));
    return r.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${r.map((i) => `'${i}'`).join(", ")}]. This can lead to issues.`), t;
  }
  /**
   * Create a flattened array of extensions by traversing the `addExtensions` field.
   * @param extensions An array of Tiptap extensions
   * @returns A flattened array of Tiptap extensions
   */
  static flatten(e) {
    return e.map((t) => {
      const r = {
        name: t.name,
        options: t.options,
        storage: t.storage
      }, i = B(t, "addExtensions", r);
      return i ? [t, ...this.flatten(i())] : t;
    }).flat(10);
  }
  /**
   * Sort extensions by priority.
   * @param extensions An array of Tiptap extensions
   * @returns A sorted array of Tiptap extensions by priority
   */
  static sort(e) {
    return e.sort((r, i) => {
      const s = B(r, "priority") || 100, o = B(i, "priority") || 100;
      return s > o ? -1 : s < o ? 1 : 0;
    });
  }
  /**
   * Get all commands from the extensions.
   * @returns An object with all commands where the key is the command name and the value is the command function
   */
  get commands() {
    return this.extensions.reduce((e, t) => {
      const r = {
        name: t.name,
        options: t.options,
        storage: t.storage,
        editor: this.editor,
        type: sl(t.name, this.schema)
      }, i = B(t, "addCommands", r);
      return i ? {
        ...e,
        ...i()
      } : e;
    }, {});
  }
  /**
   * Get all registered Prosemirror plugins from the extensions.
   * @returns An array of Prosemirror plugins
   */
  get plugins() {
    const { editor: e } = this, t = ir.sort([...this.extensions].reverse()), r = [], i = [], s = t.map((o) => {
      const l = {
        name: o.name,
        options: o.options,
        storage: o.storage,
        editor: e,
        type: sl(o.name, this.schema)
      }, c = [], d = B(o, "addKeyboardShortcuts", l);
      let f = {};
      if (o.type === "mark" && B(o, "exitable", l) && (f.ArrowRight = () => ut.handleExit({ editor: e, mark: o })), d) {
        const S = Object.fromEntries(Object.entries(d()).map(([x, w]) => [x, () => w({ editor: e })]));
        f = { ...f, ...S };
      }
      const h = zk(f);
      c.push(h);
      const g = B(o, "addInputRules", l);
      Fu(o, e.options.enableInputRules) && g && r.push(...g());
      const y = B(o, "addPasteRules", l);
      Fu(o, e.options.enablePasteRules) && y && i.push(...y());
      const b = B(o, "addProseMirrorPlugins", l);
      if (b) {
        const S = b();
        c.push(...S);
      }
      return c;
    }).flat();
    return [
      fS({
        editor: e,
        rules: r
      }),
      ...kS({
        editor: e,
        rules: i
      }),
      ...s
    ];
  }
  /**
   * Get all attributes from the extensions.
   * @returns An array of attributes
   */
  get attributes() {
    return sh(this.extensions);
  }
  /**
   * Get all node views from the extensions.
   * @returns An object with all node views where the key is the node name and the value is the node view function
   */
  get nodeViews() {
    const { editor: e } = this, { nodeExtensions: t } = Xs(this.extensions);
    return Object.fromEntries(t.filter((r) => !!B(r, "addNodeView")).map((r) => {
      const i = this.attributes.filter((c) => c.type === r.name), s = {
        name: r.name,
        options: r.options,
        storage: r.storage,
        editor: e,
        type: Ce(r.name, this.schema)
      }, o = B(r, "addNodeView", s);
      if (!o)
        return [];
      const l = (c, d, f, h, g) => {
        const y = $l(c, i);
        return o()({
          // pass-through
          node: c,
          view: d,
          getPos: f,
          decorations: h,
          innerDecorations: g,
          // tiptap-specific
          editor: e,
          extension: r,
          HTMLAttributes: y
        });
      };
      return [r.name, l];
    }));
  }
  /**
   * Go through all extensions, create extension storages & setup marks
   * & bind editor event listener.
   */
  setupExtensions() {
    this.extensions.forEach((e) => {
      var t;
      this.editor.extensionStorage[e.name] = e.storage;
      const r = {
        name: e.name,
        options: e.options,
        storage: e.storage,
        editor: this.editor,
        type: sl(e.name, this.schema)
      };
      e.type === "mark" && (!((t = K(B(e, "keepOnSplit", r))) !== null && t !== void 0) || t) && this.splittableMarks.push(e.name);
      const i = B(e, "onBeforeCreate", r), s = B(e, "onCreate", r), o = B(e, "onUpdate", r), l = B(e, "onSelectionUpdate", r), c = B(e, "onTransaction", r), d = B(e, "onFocus", r), f = B(e, "onBlur", r), h = B(e, "onDestroy", r);
      i && this.editor.on("beforeCreate", i), s && this.editor.on("create", s), o && this.editor.on("update", o), l && this.editor.on("selectionUpdate", l), c && this.editor.on("transaction", c), d && this.editor.on("focus", d), f && this.editor.on("blur", f), h && this.editor.on("destroy", h);
    });
  }
}
class be {
  constructor(e = {}) {
    this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = K(B(this, "addOptions", {
      name: this.name
    }))), this.storage = K(B(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new be(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => eo(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new be({ ...this.config, ...e });
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = K(B(t, "addOptions", {
      name: t.name
    })), t.storage = K(B(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function lh(n, e, t) {
  const { from: r, to: i } = e, { blockSeparator: s = `

`, textSerializers: o = {} } = t || {};
  let l = "";
  return n.nodesBetween(r, i, (c, d, f, h) => {
    var g;
    c.isBlock && d > r && (l += s);
    const y = o == null ? void 0 : o[c.type.name];
    if (y)
      return f && (l += y({
        node: c,
        pos: d,
        parent: f,
        index: h,
        range: e
      })), !1;
    c.isText && (l += (g = c == null ? void 0 : c.text) === null || g === void 0 ? void 0 : g.slice(Math.max(r, d) - d, i - d));
  }), l;
}
function ah(n) {
  return Object.fromEntries(Object.entries(n.nodes).filter(([, e]) => e.spec.toText).map(([e, t]) => [e, t.spec.toText]));
}
const xS = be.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new Te({
        key: new Qe("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: n } = this, { state: e, schema: t } = n, { doc: r, selection: i } = e, { ranges: s } = i, o = Math.min(...s.map((f) => f.$from.pos)), l = Math.max(...s.map((f) => f.$to.pos)), c = ah(t);
            return lh(r, { from: o, to: l }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: c
            });
          }
        }
      })
    ];
  }
}), wS = () => ({ editor: n, view: e }) => (requestAnimationFrame(() => {
  var t;
  n.isDestroyed || (e.dom.blur(), (t = window == null ? void 0 : window.getSelection()) === null || t === void 0 || t.removeAllRanges());
}), !0), MS = (n = !1) => ({ commands: e }) => e.setContent("", n), CS = () => ({ state: n, tr: e, dispatch: t }) => {
  const { selection: r } = e, { ranges: i } = r;
  return t && i.forEach(({ $from: s, $to: o }) => {
    n.doc.nodesBetween(s.pos, o.pos, (l, c) => {
      if (l.type.isText)
        return;
      const { doc: d, mapping: f } = e, h = d.resolve(f.map(c)), g = d.resolve(f.map(c + l.nodeSize)), y = h.blockRange(g);
      if (!y)
        return;
      const b = hr(y);
      if (l.type.isTextblock) {
        const { defaultType: S } = h.parent.contentMatchAt(h.index());
        e.setNodeMarkup(y.start, S);
      }
      (b || b === 0) && e.lift(y, b);
    });
  }), !0;
}, TS = (n) => (e) => n(e), OS = () => ({ state: n, dispatch: e }) => th(n, e), vS = (n, e) => ({ editor: t, tr: r }) => {
  const { state: i } = t, s = i.doc.slice(n.from, n.to);
  r.deleteRange(n.from, n.to);
  const o = r.mapping.map(e);
  return r.insert(o, s.content), r.setSelection(new V(r.doc.resolve(Math.max(o - 1, 0)))), !0;
}, ES = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, r = t.$anchor.node();
  if (r.content.size > 0)
    return !1;
  const i = n.selection.$anchor;
  for (let s = i.depth; s > 0; s -= 1)
    if (i.node(s).type === r.type) {
      if (e) {
        const l = i.before(s), c = i.after(s);
        n.delete(l, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, AS = (n) => ({ tr: e, state: t, dispatch: r }) => {
  const i = Ce(n, t.schema), s = e.selection.$anchor;
  for (let o = s.depth; o > 0; o -= 1)
    if (s.node(o).type === i) {
      if (r) {
        const c = s.before(o), d = s.after(o);
        e.delete(c, d).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, DS = (n) => ({ tr: e, dispatch: t }) => {
  const { from: r, to: i } = n;
  return t && e.delete(r, i), !0;
}, NS = () => ({ state: n, dispatch: e }) => wa(n, e), RS = () => ({ commands: n }) => n.keyboardShortcut("Enter"), IS = () => ({ state: n, dispatch: e }) => jk(n, e);
function ds(n, e, t = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((i) => t.strict ? e[i] === n[i] : Ea(e[i]) ? e[i].test(n[i]) : e[i] === n[i]) : !0;
}
function ch(n, e, t = {}) {
  return n.find((r) => r.type === e && ds(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(t).map((i) => [i, r.attrs[i]])),
    t
  ));
}
function Bu(n, e, t = {}) {
  return !!ch(n, e, t);
}
function Aa(n, e, t) {
  var r;
  if (!n || !e)
    return;
  let i = n.parent.childAfter(n.parentOffset);
  if ((!i.node || !i.node.marks.some((f) => f.type === e)) && (i = n.parent.childBefore(n.parentOffset)), !i.node || !i.node.marks.some((f) => f.type === e) || (t = t || ((r = i.node.marks[0]) === null || r === void 0 ? void 0 : r.attrs), !ch([...i.node.marks], e, t)))
    return;
  let o = i.index, l = n.start() + i.offset, c = o + 1, d = l + i.node.nodeSize;
  for (; o > 0 && Bu([...n.parent.child(o - 1).marks], e, t); )
    o -= 1, l -= n.parent.child(o).nodeSize;
  for (; c < n.parent.childCount && Bu([...n.parent.child(c).marks], e, t); )
    d += n.parent.child(c).nodeSize, c += 1;
  return {
    from: l,
    to: d
  };
}
function mn(n, e) {
  if (typeof n == "string") {
    if (!e.marks[n])
      throw Error(`There is no mark type named '${n}'. Maybe you forgot to add the extension?`);
    return e.marks[n];
  }
  return n;
}
const _S = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const s = mn(n, r.schema), { doc: o, selection: l } = t, { $from: c, from: d, to: f } = l;
  if (i) {
    const h = Aa(c, s, e);
    if (h && h.from <= d && h.to >= f) {
      const g = V.create(o, h.from, h.to);
      t.setSelection(g);
    }
  }
  return !0;
}, PS = (n) => (e) => {
  const t = typeof n == "function" ? n(e) : n;
  for (let r = 0; r < t.length; r += 1)
    if (t[r](e))
      return !0;
  return !1;
};
function uh(n) {
  return n instanceof V;
}
function vn(n = 0, e = 0, t = 0) {
  return Math.min(Math.max(n, e), t);
}
function dh(n, e = null) {
  if (!e)
    return null;
  const t = G.atStart(n), r = G.atEnd(n);
  if (e === "start" || e === !0)
    return t;
  if (e === "end")
    return r;
  const i = t.from, s = r.to;
  return e === "all" ? V.create(n, vn(0, i, s), vn(n.content.size, i, s)) : V.create(n, vn(e, i, s), vn(e, i, s));
}
function zu() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function fs() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function LS() {
  return typeof navigator < "u" ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent) : !1;
}
const FS = (n = null, e = {}) => ({ editor: t, view: r, tr: i, dispatch: s }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const o = () => {
    (fs() || zu()) && r.dom.focus(), requestAnimationFrame(() => {
      t.isDestroyed || (r.focus(), LS() && !fs() && !zu() && r.dom.focus({ preventScroll: !0 }));
    });
  };
  if (r.hasFocus() && n === null || n === !1)
    return !0;
  if (s && n === null && !uh(t.state.selection))
    return o(), !0;
  const l = dh(i.doc, n) || t.state.selection, c = t.state.selection.eq(l);
  return s && (c || i.setSelection(l), c && i.storedMarks && i.setStoredMarks(i.storedMarks), o()), !0;
}, BS = (n, e) => (t) => n.every((r, i) => e(r, { ...t, index: i })), zS = (n, e) => ({ tr: t, commands: r }) => r.insertContentAt({ from: t.selection.from, to: t.selection.to }, n, e), fh = (n) => {
  const e = n.childNodes;
  for (let t = e.length - 1; t >= 0; t -= 1) {
    const r = e[t];
    r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? n.removeChild(r) : r.nodeType === 1 && fh(r);
  }
  return n;
};
function Li(n) {
  const e = `<body>${n}</body>`, t = new window.DOMParser().parseFromString(e, "text/html").body;
  return fh(t);
}
function Xr(n, e, t) {
  if (n instanceof on || n instanceof A)
    return n;
  t = {
    slice: !0,
    parseOptions: {},
    ...t
  };
  const r = typeof n == "object" && n !== null, i = typeof n == "string";
  if (r)
    try {
      if (Array.isArray(n) && n.length > 0)
        return A.fromArray(n.map((l) => e.nodeFromJSON(l)));
      const o = e.nodeFromJSON(n);
      return t.errorOnInvalidContent && o.check(), o;
    } catch (s) {
      if (t.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: s });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", n, "Error:", s), Xr("", e, t);
    }
  if (i) {
    if (t.errorOnInvalidContent) {
      let o = !1, l = "";
      const c = new jd({
        topNode: e.spec.topNode,
        marks: e.spec.marks,
        // Prosemirror's schemas are executed such that: the last to execute, matches last
        // This means that we can add a catch-all node at the end of the schema to catch any content that we don't know how to handle
        nodes: e.spec.nodes.append({
          __tiptap__private__unknown__catch__all__node: {
            content: "inline*",
            group: "block",
            parseDOM: [
              {
                tag: "*",
                getAttrs: (d) => (o = !0, l = typeof d == "string" ? d : d.outerHTML, null)
              }
            ]
          }
        })
      });
      if (t.slice ? ln.fromSchema(c).parseSlice(Li(n), t.parseOptions) : ln.fromSchema(c).parse(Li(n), t.parseOptions), t.errorOnInvalidContent && o)
        throw new Error("[tiptap error]: Invalid HTML content", { cause: new Error(`Invalid element found: ${l}`) });
    }
    const s = ln.fromSchema(e);
    return t.slice ? s.parseSlice(Li(n), t.parseOptions).content : s.parse(Li(n), t.parseOptions);
  }
  return Xr("", e, t);
}
function HS(n, e, t) {
  const r = n.steps.length - 1;
  if (r < e)
    return;
  const i = n.steps[r];
  if (!(i instanceof xe || i instanceof we))
    return;
  const s = n.mapping.maps[r];
  let o = 0;
  s.forEach((l, c, d, f) => {
    o === 0 && (o = f);
  }), n.setSelection(G.near(n.doc.resolve(o), t));
}
const $S = (n) => !("type" in n), WS = (n, e, t) => ({ tr: r, dispatch: i, editor: s }) => {
  var o;
  if (i) {
    t = {
      parseOptions: s.options.parseOptions,
      updateSelection: !0,
      applyInputRules: !1,
      applyPasteRules: !1,
      ...t
    };
    let l;
    const c = (x) => {
      s.emit("contentError", {
        editor: s,
        error: x,
        disableCollaboration: () => {
          s.storage.collaboration && (s.storage.collaboration.isDisabled = !0);
        }
      });
    }, d = {
      preserveWhitespace: "full",
      ...t.parseOptions
    };
    if (!t.errorOnInvalidContent && !s.options.enableContentCheck && s.options.emitContentError)
      try {
        Xr(e, s.schema, {
          parseOptions: d,
          errorOnInvalidContent: !0
        });
      } catch (x) {
        c(x);
      }
    try {
      l = Xr(e, s.schema, {
        parseOptions: d,
        errorOnInvalidContent: (o = t.errorOnInvalidContent) !== null && o !== void 0 ? o : s.options.enableContentCheck
      });
    } catch (x) {
      return c(x), !1;
    }
    let { from: f, to: h } = typeof n == "number" ? { from: n, to: n } : { from: n.from, to: n.to }, g = !0, y = !0;
    if (($S(l) ? l : [l]).forEach((x) => {
      x.check(), g = g ? x.isText && x.marks.length === 0 : !1, y = y ? x.isBlock : !1;
    }), f === h && y) {
      const { parent: x } = r.doc.resolve(f);
      x.isTextblock && !x.type.spec.code && !x.childCount && (f -= 1, h += 1);
    }
    let S;
    if (g) {
      if (Array.isArray(e))
        S = e.map((x) => x.text || "").join("");
      else if (e instanceof A) {
        let x = "";
        e.forEach((w) => {
          w.text && (x += w.text);
        }), S = x;
      } else typeof e == "object" && e && e.text ? S = e.text : S = e;
      r.insertText(S, f, h);
    } else
      S = l, r.replaceWith(f, h, S);
    t.updateSelection && HS(r, r.steps.length - 1, -1), t.applyInputRules && r.setMeta("applyInputRules", { from: f, text: S }), t.applyPasteRules && r.setMeta("applyPasteRules", { from: f, text: S });
  }
  return !0;
}, VS = () => ({ state: n, dispatch: e }) => Wk(n, e), YS = () => ({ state: n, dispatch: e }) => Vk(n, e), jS = () => ({ state: n, dispatch: e }) => Gf(n, e), US = () => ({ state: n, dispatch: e }) => Zf(n, e), qS = () => ({ state: n, dispatch: e, tr: t }) => {
  try {
    const r = js(n.doc, n.selection.$from.pos, -1);
    return r == null ? !1 : (t.join(r, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, GS = () => ({ state: n, dispatch: e, tr: t }) => {
  try {
    const r = js(n.doc, n.selection.$from.pos, 1);
    return r == null ? !1 : (t.join(r, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, KS = () => ({ state: n, dispatch: e }) => Hk(n, e), JS = () => ({ state: n, dispatch: e }) => $k(n, e);
function hh() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function QS(n) {
  const e = n.split(/-(?!$)/);
  let t = e[e.length - 1];
  t === "Space" && (t = " ");
  let r, i, s, o;
  for (let l = 0; l < e.length - 1; l += 1) {
    const c = e[l];
    if (/^(cmd|meta|m)$/i.test(c))
      o = !0;
    else if (/^a(lt)?$/i.test(c))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(c))
      i = !0;
    else if (/^s(hift)?$/i.test(c))
      s = !0;
    else if (/^mod$/i.test(c))
      fs() || hh() ? o = !0 : i = !0;
    else
      throw new Error(`Unrecognized modifier name: ${c}`);
  }
  return r && (t = `Alt-${t}`), i && (t = `Ctrl-${t}`), o && (t = `Meta-${t}`), s && (t = `Shift-${t}`), t;
}
const ZS = (n) => ({ editor: e, view: t, tr: r, dispatch: i }) => {
  const s = QS(n).split(/-(?!$)/), o = s.find((d) => !["Alt", "Ctrl", "Meta", "Shift"].includes(d)), l = new KeyboardEvent("keydown", {
    key: o === "Space" ? " " : o,
    altKey: s.includes("Alt"),
    ctrlKey: s.includes("Ctrl"),
    metaKey: s.includes("Meta"),
    shiftKey: s.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), c = e.captureTransaction(() => {
    t.someProp("handleKeyDown", (d) => d(t, l));
  });
  return c == null || c.steps.forEach((d) => {
    const f = d.map(r.mapping);
    f && i && r.maybeStep(f);
  }), !0;
};
function ei(n, e, t = {}) {
  const { from: r, to: i, empty: s } = n.selection, o = e ? Ce(e, n.schema) : null, l = [];
  n.doc.nodesBetween(r, i, (h, g) => {
    if (h.isText)
      return;
    const y = Math.max(r, g), b = Math.min(i, g + h.nodeSize);
    l.push({
      node: h,
      from: y,
      to: b
    });
  });
  const c = i - r, d = l.filter((h) => o ? o.name === h.node.type.name : !0).filter((h) => ds(h.node.attrs, t, { strict: !1 }));
  return s ? !!d.length : d.reduce((h, g) => h + g.to - g.from, 0) >= c;
}
const XS = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = Ce(n, t.schema);
  return ei(t, i, e) ? Yk(t, r) : !1;
}, ex = () => ({ state: n, dispatch: e }) => nh(n, e), tx = (n) => ({ state: e, dispatch: t }) => {
  const r = Ce(n, e.schema);
  return nS(r)(e, t);
}, nx = () => ({ state: n, dispatch: e }) => eh(n, e);
function to(n, e) {
  return e.nodes[n] ? "node" : e.marks[n] ? "mark" : null;
}
function Hu(n, e) {
  const t = typeof e == "string" ? [e] : e;
  return Object.keys(n).reduce((r, i) => (t.includes(i) || (r[i] = n[i]), r), {});
}
const rx = (n, e) => ({ tr: t, state: r, dispatch: i }) => {
  let s = null, o = null;
  const l = to(typeof n == "string" ? n : n.name, r.schema);
  return l ? (l === "node" && (s = Ce(n, r.schema)), l === "mark" && (o = mn(n, r.schema)), i && t.selection.ranges.forEach((c) => {
    r.doc.nodesBetween(c.$from.pos, c.$to.pos, (d, f) => {
      s && s === d.type && t.setNodeMarkup(f, void 0, Hu(d.attrs, e)), o && d.marks.length && d.marks.forEach((h) => {
        o === h.type && t.addMark(f, f + d.nodeSize, o.create(Hu(h.attrs, e)));
      });
    });
  }), !0) : !1;
}, ix = () => ({ tr: n, dispatch: e }) => (e && n.scrollIntoView(), !0), sx = () => ({ tr: n, dispatch: e }) => {
  if (e) {
    const t = new et(n.doc);
    n.setSelection(t);
  }
  return !0;
}, ox = () => ({ state: n, dispatch: e }) => Jf(n, e), lx = () => ({ state: n, dispatch: e }) => Xf(n, e), ax = () => ({ state: n, dispatch: e }) => Gk(n, e), cx = () => ({ state: n, dispatch: e }) => Qk(n, e), ux = () => ({ state: n, dispatch: e }) => Jk(n, e);
function Wl(n, e, t = {}, r = {}) {
  return Xr(n, e, {
    slice: !1,
    parseOptions: t,
    errorOnInvalidContent: r.errorOnInvalidContent
  });
}
const dx = (n, e = !1, t = {}, r = {}) => ({ editor: i, tr: s, dispatch: o, commands: l }) => {
  var c, d;
  const { doc: f } = s;
  if (t.preserveWhitespace !== "full") {
    const h = Wl(n, i.schema, t, {
      errorOnInvalidContent: (c = r.errorOnInvalidContent) !== null && c !== void 0 ? c : i.options.enableContentCheck
    });
    return o && s.replaceWith(0, f.content.size, h).setMeta("preventUpdate", !e), !0;
  }
  return o && s.setMeta("preventUpdate", !e), l.insertContentAt({ from: 0, to: f.content.size }, n, {
    parseOptions: t,
    errorOnInvalidContent: (d = r.errorOnInvalidContent) !== null && d !== void 0 ? d : i.options.enableContentCheck
  });
};
function ph(n, e) {
  const t = mn(e, n.schema), { from: r, to: i, empty: s } = n.selection, o = [];
  s ? (n.storedMarks && o.push(...n.storedMarks), o.push(...n.selection.$head.marks())) : n.doc.nodesBetween(r, i, (c) => {
    o.push(...c.marks);
  });
  const l = o.find((c) => c.type.name === t.name);
  return l ? { ...l.attrs } : {};
}
function fx(n, e) {
  const t = new af(n);
  return e.forEach((r) => {
    r.steps.forEach((i) => {
      t.step(i);
    });
  }), t;
}
function hx(n) {
  for (let e = 0; e < n.edgeCount; e += 1) {
    const { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
function px(n, e, t) {
  const r = [];
  return n.nodesBetween(e.from, e.to, (i, s) => {
    t(i) && r.push({
      node: i,
      pos: s
    });
  }), r;
}
function mx(n, e) {
  for (let t = n.depth; t > 0; t -= 1) {
    const r = n.node(t);
    if (e(r))
      return {
        pos: t > 0 ? n.before(t) : 0,
        start: n.start(t),
        depth: t,
        node: r
      };
  }
}
function Da(n) {
  return (e) => mx(e.$from, n);
}
function gx(n, e) {
  const t = {
    from: 0,
    to: n.content.size
  };
  return lh(n, t, e);
}
function yx(n, e) {
  const t = Ce(e, n.schema), { from: r, to: i } = n.selection, s = [];
  n.doc.nodesBetween(r, i, (l) => {
    s.push(l);
  });
  const o = s.reverse().find((l) => l.type.name === t.name);
  return o ? { ...o.attrs } : {};
}
function mh(n, e) {
  const t = to(typeof e == "string" ? e : e.name, n.schema);
  return t === "node" ? yx(n, e) : t === "mark" ? ph(n, e) : {};
}
function bx(n, e = JSON.stringify) {
  const t = {};
  return n.filter((r) => {
    const i = e(r);
    return Object.prototype.hasOwnProperty.call(t, i) ? !1 : t[i] = !0;
  });
}
function kx(n) {
  const e = bx(n);
  return e.length === 1 ? e : e.filter((t, r) => !e.filter((s, o) => o !== r).some((s) => t.oldRange.from >= s.oldRange.from && t.oldRange.to <= s.oldRange.to && t.newRange.from >= s.newRange.from && t.newRange.to <= s.newRange.to));
}
function Sx(n) {
  const { mapping: e, steps: t } = n, r = [];
  return e.maps.forEach((i, s) => {
    const o = [];
    if (i.ranges.length)
      i.forEach((l, c) => {
        o.push({ from: l, to: c });
      });
    else {
      const { from: l, to: c } = t[s];
      if (l === void 0 || c === void 0)
        return;
      o.push({ from: l, to: c });
    }
    o.forEach(({ from: l, to: c }) => {
      const d = e.slice(s).map(l, -1), f = e.slice(s).map(c), h = e.invert().map(d, -1), g = e.invert().map(f);
      r.push({
        oldRange: {
          from: h,
          to: g
        },
        newRange: {
          from: d,
          to: f
        }
      });
    });
  }), kx(r);
}
function Na(n, e, t) {
  const r = [];
  return n === e ? t.resolve(n).marks().forEach((i) => {
    const s = t.resolve(n), o = Aa(s, i.type);
    o && r.push({
      mark: i,
      ...o
    });
  }) : t.nodesBetween(n, e, (i, s) => {
    !i || (i == null ? void 0 : i.nodeSize) === void 0 || r.push(...i.marks.map((o) => ({
      from: s,
      to: s + i.nodeSize,
      mark: o
    })));
  }), r;
}
function Ui(n, e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => {
    const i = n.find((s) => s.type === e && s.name === r);
    return i ? i.attribute.keepOnSplit : !1;
  }));
}
function Vl(n, e, t = {}) {
  const { empty: r, ranges: i } = n.selection, s = e ? mn(e, n.schema) : null;
  if (r)
    return !!(n.storedMarks || n.selection.$from.marks()).filter((h) => s ? s.name === h.type.name : !0).find((h) => ds(h.attrs, t, { strict: !1 }));
  let o = 0;
  const l = [];
  if (i.forEach(({ $from: h, $to: g }) => {
    const y = h.pos, b = g.pos;
    n.doc.nodesBetween(y, b, (S, x) => {
      if (!S.isText && !S.marks.length)
        return;
      const w = Math.max(y, x), T = Math.min(b, x + S.nodeSize), v = T - w;
      o += v, l.push(...S.marks.map((_) => ({
        mark: _,
        from: w,
        to: T
      })));
    });
  }), o === 0)
    return !1;
  const c = l.filter((h) => s ? s.name === h.mark.type.name : !0).filter((h) => ds(h.mark.attrs, t, { strict: !1 })).reduce((h, g) => h + g.to - g.from, 0), d = l.filter((h) => s ? h.mark.type !== s && h.mark.type.excludes(s) : !0).reduce((h, g) => h + g.to - g.from, 0);
  return (c > 0 ? c + d : c) >= o;
}
function xx(n, e, t = {}) {
  if (!e)
    return ei(n, null, t) || Vl(n, null, t);
  const r = to(e, n.schema);
  return r === "node" ? ei(n, e, t) : r === "mark" ? Vl(n, e, t) : !1;
}
function $u(n, e) {
  const { nodeExtensions: t } = Xs(e), r = t.find((o) => o.name === n);
  if (!r)
    return !1;
  const i = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, s = K(B(r, "group", i));
  return typeof s != "string" ? !1 : s.split(" ").includes("list");
}
function no(n, { checkChildren: e = !0, ignoreWhitespace: t = !1 } = {}) {
  var r;
  if (t) {
    if (n.type.name === "hardBreak")
      return !0;
    if (n.isText)
      return /^\s*$/m.test((r = n.text) !== null && r !== void 0 ? r : "");
  }
  if (n.isText)
    return !n.text;
  if (n.isAtom || n.isLeaf)
    return !1;
  if (n.content.childCount === 0)
    return !0;
  if (e) {
    let i = !0;
    return n.content.forEach((s) => {
      i !== !1 && (no(s, { ignoreWhitespace: t, checkChildren: e }) || (i = !1));
    }), i;
  }
  return !1;
}
function wx(n) {
  return n instanceof $;
}
function Mx(n, e, t) {
  var r;
  const { selection: i } = e;
  let s = null;
  if (uh(i) && (s = i.$cursor), s) {
    const l = (r = n.storedMarks) !== null && r !== void 0 ? r : s.marks();
    return !!t.isInSet(l) || !l.some((c) => c.type.excludes(t));
  }
  const { ranges: o } = i;
  return o.some(({ $from: l, $to: c }) => {
    let d = l.depth === 0 ? n.doc.inlineContent && n.doc.type.allowsMarkType(t) : !1;
    return n.doc.nodesBetween(l.pos, c.pos, (f, h, g) => {
      if (d)
        return !1;
      if (f.isInline) {
        const y = !g || g.type.allowsMarkType(t), b = !!t.isInSet(f.marks) || !f.marks.some((S) => S.type.excludes(t));
        d = y && b;
      }
      return !d;
    }), d;
  });
}
const Cx = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const { selection: s } = t, { empty: o, ranges: l } = s, c = mn(n, r.schema);
  if (i)
    if (o) {
      const d = ph(r, c);
      t.addStoredMark(c.create({
        ...d,
        ...e
      }));
    } else
      l.forEach((d) => {
        const f = d.$from.pos, h = d.$to.pos;
        r.doc.nodesBetween(f, h, (g, y) => {
          const b = Math.max(y, f), S = Math.min(y + g.nodeSize, h);
          g.marks.find((w) => w.type === c) ? g.marks.forEach((w) => {
            c === w.type && t.addMark(b, S, c.create({
              ...w.attrs,
              ...e
            }));
          }) : t.addMark(b, S, c.create(e));
        });
      });
  return Mx(r, t, c);
}, Tx = (n, e) => ({ tr: t }) => (t.setMeta(n, e), !0), Ox = (n, e = {}) => ({ state: t, dispatch: r, chain: i }) => {
  const s = Ce(n, t.schema);
  let o;
  return t.selection.$anchor.sameParent(t.selection.$head) && (o = t.selection.$anchor.parent.attrs), s.isTextblock ? i().command(({ commands: l }) => _u(s, { ...o, ...e })(t) ? !0 : l.clearNodes()).command(({ state: l }) => _u(s, { ...o, ...e })(l, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, vx = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, i = vn(n, 0, r.content.size), s = $.create(r, i);
    e.setSelection(s);
  }
  return !0;
}, Ex = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, { from: i, to: s } = typeof n == "number" ? { from: n, to: n } : n, o = V.atStart(r).from, l = V.atEnd(r).to, c = vn(i, o, l), d = vn(s, o, l), f = V.create(r, c, d);
    e.setSelection(f);
  }
  return !0;
}, Ax = (n) => ({ state: e, dispatch: t }) => {
  const r = Ce(n, e.schema);
  return sS(r)(e, t);
};
function Wu(n, e) {
  const t = n.storedMarks || n.selection.$to.parentOffset && n.selection.$from.marks();
  if (t) {
    const r = t.filter((i) => e == null ? void 0 : e.includes(i.type.name));
    n.tr.ensureMarks(r);
  }
}
const Dx = ({ keepMarks: n = !0 } = {}) => ({ tr: e, state: t, dispatch: r, editor: i }) => {
  const { selection: s, doc: o } = e, { $from: l, $to: c } = s, d = i.extensionManager.attributes, f = Ui(d, l.node().type.name, l.node().attrs);
  if (s instanceof $ && s.node.isBlock)
    return !l.parentOffset || !Ht(o, l.pos) ? !1 : (r && (n && Wu(t, i.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
  if (!l.parent.isBlock)
    return !1;
  const h = c.parentOffset === c.parent.content.size, g = l.depth === 0 ? void 0 : hx(l.node(-1).contentMatchAt(l.indexAfter(-1)));
  let y = h && g ? [
    {
      type: g,
      attrs: f
    }
  ] : void 0, b = Ht(e.doc, e.mapping.map(l.pos), 1, y);
  if (!y && !b && Ht(e.doc, e.mapping.map(l.pos), 1, g ? [{ type: g }] : void 0) && (b = !0, y = g ? [
    {
      type: g,
      attrs: f
    }
  ] : void 0), r) {
    if (b && (s instanceof V && e.deleteSelection(), e.split(e.mapping.map(l.pos), 1, y), g && !h && !l.parentOffset && l.parent.type !== g)) {
      const S = e.mapping.map(l.before()), x = e.doc.resolve(S);
      l.node(-1).canReplaceWith(x.index(), x.index() + 1, g) && e.setNodeMarkup(e.mapping.map(l.before()), g);
    }
    n && Wu(t, i.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return b;
}, Nx = (n, e = {}) => ({ tr: t, state: r, dispatch: i, editor: s }) => {
  var o;
  const l = Ce(n, r.schema), { $from: c, $to: d } = r.selection, f = r.selection.node;
  if (f && f.isBlock || c.depth < 2 || !c.sameParent(d))
    return !1;
  const h = c.node(-1);
  if (h.type !== l)
    return !1;
  const g = s.extensionManager.attributes;
  if (c.parent.content.size === 0 && c.node(-1).childCount === c.indexAfter(-1)) {
    if (c.depth === 2 || c.node(-3).type !== l || c.index(-2) !== c.node(-2).childCount - 1)
      return !1;
    if (i) {
      let w = A.empty;
      const T = c.index(-1) ? 1 : c.index(-2) ? 2 : 3;
      for (let z = c.depth - T; z >= c.depth - 3; z -= 1)
        w = A.from(c.node(z).copy(w));
      const v = c.indexAfter(-1) < c.node(-2).childCount ? 1 : c.indexAfter(-2) < c.node(-3).childCount ? 2 : 3, _ = {
        ...Ui(g, c.node().type.name, c.node().attrs),
        ...e
      }, I = ((o = l.contentMatch.defaultType) === null || o === void 0 ? void 0 : o.createAndFill(_)) || void 0;
      w = w.append(A.from(l.createAndFill(null, I) || void 0));
      const P = c.before(c.depth - (T - 1));
      t.replace(P, c.after(-v), new L(w, 4 - T, 0));
      let E = -1;
      t.doc.nodesBetween(P, t.doc.content.size, (z, j) => {
        if (E > -1)
          return !1;
        z.isTextblock && z.content.size === 0 && (E = j + 1);
      }), E > -1 && t.setSelection(V.near(t.doc.resolve(E))), t.scrollIntoView();
    }
    return !0;
  }
  const y = d.pos === c.end() ? h.contentMatchAt(0).defaultType : null, b = {
    ...Ui(g, h.type.name, h.attrs),
    ...e
  }, S = {
    ...Ui(g, c.node().type.name, c.node().attrs),
    ...e
  };
  t.delete(c.pos, d.pos);
  const x = y ? [
    { type: l, attrs: b },
    { type: y, attrs: S }
  ] : [{ type: l, attrs: b }];
  if (!Ht(t.doc, c.pos, 2))
    return !1;
  if (i) {
    const { selection: w, storedMarks: T } = r, { splittableMarks: v } = s.extensionManager, _ = T || w.$to.parentOffset && w.$from.marks();
    if (t.split(c.pos, 2, x).scrollIntoView(), !_ || !i)
      return !0;
    const I = _.filter((P) => v.includes(P.type.name));
    t.ensureMarks(I);
  }
  return !0;
}, ol = (n, e) => {
  const t = Da((o) => o.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(Math.max(0, t.pos - 1)).before(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === (i == null ? void 0 : i.type) && hn(n.doc, t.pos) && n.join(t.pos), !0;
}, ll = (n, e) => {
  const t = Da((o) => o.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(t.start).after(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === (i == null ? void 0 : i.type) && hn(n.doc, r) && n.join(r), !0;
}, Rx = (n, e, t, r = {}) => ({ editor: i, tr: s, state: o, dispatch: l, chain: c, commands: d, can: f }) => {
  const { extensions: h, splittableMarks: g } = i.extensionManager, y = Ce(n, o.schema), b = Ce(e, o.schema), { selection: S, storedMarks: x } = o, { $from: w, $to: T } = S, v = w.blockRange(T), _ = x || S.$to.parentOffset && S.$from.marks();
  if (!v)
    return !1;
  const I = Da((P) => $u(P.type.name, h))(S);
  if (v.depth >= 1 && I && v.depth - I.depth <= 1) {
    if (I.node.type === y)
      return d.liftListItem(b);
    if ($u(I.node.type.name, h) && y.validContent(I.node.content) && l)
      return c().command(() => (s.setNodeMarkup(I.pos, y), !0)).command(() => ol(s, y)).command(() => ll(s, y)).run();
  }
  return !t || !_ || !l ? c().command(() => f().wrapInList(y, r) ? !0 : d.clearNodes()).wrapInList(y, r).command(() => ol(s, y)).command(() => ll(s, y)).run() : c().command(() => {
    const P = f().wrapInList(y, r), E = _.filter((z) => g.includes(z.type.name));
    return s.ensureMarks(E), P ? !0 : d.clearNodes();
  }).wrapInList(y, r).command(() => ol(s, y)).command(() => ll(s, y)).run();
}, Ix = (n, e = {}, t = {}) => ({ state: r, commands: i }) => {
  const { extendEmptyMarkRange: s = !1 } = t, o = mn(n, r.schema);
  return Vl(r, o, e) ? i.unsetMark(o, { extendEmptyMarkRange: s }) : i.setMark(o, e);
}, _x = (n, e, t = {}) => ({ state: r, commands: i }) => {
  const s = Ce(n, r.schema), o = Ce(e, r.schema), l = ei(r, s, t);
  let c;
  return r.selection.$anchor.sameParent(r.selection.$head) && (c = r.selection.$anchor.parent.attrs), l ? i.setNode(o, c) : i.setNode(s, { ...c, ...t });
}, Px = (n, e = {}) => ({ state: t, commands: r }) => {
  const i = Ce(n, t.schema);
  return ei(t, i, e) ? r.lift(i) : r.wrapIn(i, e);
}, Lx = () => ({ state: n, dispatch: e }) => {
  const t = n.plugins;
  for (let r = 0; r < t.length; r += 1) {
    const i = t[r];
    let s;
    if (i.spec.isInputRules && (s = i.getState(n))) {
      if (e) {
        const o = n.tr, l = s.transform;
        for (let c = l.steps.length - 1; c >= 0; c -= 1)
          o.step(l.steps[c].invert(l.docs[c]));
        if (s.text) {
          const c = o.doc.resolve(s.from).marks();
          o.replaceWith(s.from, s.to, n.schema.text(s.text, c));
        } else
          o.delete(s.from, s.to);
      }
      return !0;
    }
  }
  return !1;
}, Fx = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, { empty: r, ranges: i } = t;
  return r || e && i.forEach((s) => {
    n.removeMark(s.$from.pos, s.$to.pos);
  }), !0;
}, Bx = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  var s;
  const { extendEmptyMarkRange: o = !1 } = e, { selection: l } = t, c = mn(n, r.schema), { $from: d, empty: f, ranges: h } = l;
  if (!i)
    return !0;
  if (f && o) {
    let { from: g, to: y } = l;
    const b = (s = d.marks().find((x) => x.type === c)) === null || s === void 0 ? void 0 : s.attrs, S = Aa(d, c, b);
    S && (g = S.from, y = S.to), t.removeMark(g, y, c);
  } else
    h.forEach((g) => {
      t.removeMark(g.$from.pos, g.$to.pos, c);
    });
  return t.removeStoredMark(c), !0;
}, zx = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  let s = null, o = null;
  const l = to(typeof n == "string" ? n : n.name, r.schema);
  return l ? (l === "node" && (s = Ce(n, r.schema)), l === "mark" && (o = mn(n, r.schema)), i && t.selection.ranges.forEach((c) => {
    const d = c.$from.pos, f = c.$to.pos;
    let h, g, y, b;
    t.selection.empty ? r.doc.nodesBetween(d, f, (S, x) => {
      s && s === S.type && (y = Math.max(x, d), b = Math.min(x + S.nodeSize, f), h = x, g = S);
    }) : r.doc.nodesBetween(d, f, (S, x) => {
      x < d && s && s === S.type && (y = Math.max(x, d), b = Math.min(x + S.nodeSize, f), h = x, g = S), x >= d && x <= f && (s && s === S.type && t.setNodeMarkup(x, void 0, {
        ...S.attrs,
        ...e
      }), o && S.marks.length && S.marks.forEach((w) => {
        if (o === w.type) {
          const T = Math.max(x, d), v = Math.min(x + S.nodeSize, f);
          t.addMark(T, v, o.create({
            ...w.attrs,
            ...e
          }));
        }
      }));
    }), g && (h !== void 0 && t.setNodeMarkup(h, void 0, {
      ...g.attrs,
      ...e
    }), o && g.marks.length && g.marks.forEach((S) => {
      o === S.type && t.addMark(y, b, o.create({
        ...S.attrs,
        ...e
      }));
    }));
  }), !0) : !1;
}, Hx = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = Ce(n, t.schema);
  return Zk(i, e)(t, r);
}, $x = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = Ce(n, t.schema);
  return Xk(i, e)(t, r);
};
var Wx = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur: wS,
  clearContent: MS,
  clearNodes: CS,
  command: TS,
  createParagraphNear: OS,
  cut: vS,
  deleteCurrentNode: ES,
  deleteNode: AS,
  deleteRange: DS,
  deleteSelection: NS,
  enter: RS,
  exitCode: IS,
  extendMarkRange: _S,
  first: PS,
  focus: FS,
  forEach: BS,
  insertContent: zS,
  insertContentAt: WS,
  joinBackward: jS,
  joinDown: YS,
  joinForward: US,
  joinItemBackward: qS,
  joinItemForward: GS,
  joinTextblockBackward: KS,
  joinTextblockForward: JS,
  joinUp: VS,
  keyboardShortcut: ZS,
  lift: XS,
  liftEmptyBlock: ex,
  liftListItem: tx,
  newlineInCode: nx,
  resetAttributes: rx,
  scrollIntoView: ix,
  selectAll: sx,
  selectNodeBackward: ox,
  selectNodeForward: lx,
  selectParentNode: ax,
  selectTextblockEnd: cx,
  selectTextblockStart: ux,
  setContent: dx,
  setMark: Cx,
  setMeta: Tx,
  setNode: Ox,
  setNodeSelection: vx,
  setTextSelection: Ex,
  sinkListItem: Ax,
  splitBlock: Dx,
  splitListItem: Nx,
  toggleList: Rx,
  toggleMark: Ix,
  toggleNode: _x,
  toggleWrap: Px,
  undoInputRule: Lx,
  unsetAllMarks: Fx,
  unsetMark: Bx,
  updateAttributes: zx,
  wrapIn: Hx,
  wrapInList: $x
});
const Vx = be.create({
  name: "commands",
  addCommands() {
    return {
      ...Wx
    };
  }
}), Yx = be.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new Te({
        key: new Qe("tiptapDrop"),
        props: {
          handleDrop: (n, e, t, r) => {
            this.editor.emit("drop", {
              editor: this.editor,
              event: e,
              slice: t,
              moved: r
            });
          }
        }
      })
    ];
  }
}), jx = be.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new Te({
        key: new Qe("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), Ux = new Qe("focusEvents"), qx = be.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: n } = this;
    return [
      new Te({
        key: Ux,
        props: {
          handleDOMEvents: {
            focus: (e, t) => {
              n.isFocused = !0;
              const r = n.state.tr.setMeta("focus", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            },
            blur: (e, t) => {
              n.isFocused = !1;
              const r = n.state.tr.setMeta("blur", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            }
          }
        }
      })
    ];
  }
}), Gx = be.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const n = () => this.editor.commands.first(({ commands: o }) => [
      () => o.undoInputRule(),
      // maybe convert first text block node to default node
      () => o.command(({ tr: l }) => {
        const { selection: c, doc: d } = l, { empty: f, $anchor: h } = c, { pos: g, parent: y } = h, b = h.parent.isTextblock && g > 0 ? l.doc.resolve(g - 1) : h, S = b.parent.type.spec.isolating, x = h.pos - h.parentOffset, w = S && b.parent.childCount === 1 ? x === h.pos : G.atStart(d).from === g;
        return !f || !y.type.isTextblock || y.textContent.length || !w || w && h.parent.type.name === "paragraph" ? !1 : o.clearNodes();
      }),
      () => o.deleteSelection(),
      () => o.joinBackward(),
      () => o.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: o }) => [
      () => o.deleteSelection(),
      () => o.deleteCurrentNode(),
      () => o.joinForward(),
      () => o.selectNodeForward()
    ]), r = {
      Enter: () => this.editor.commands.first(({ commands: o }) => [
        () => o.newlineInCode(),
        () => o.createParagraphNear(),
        () => o.liftEmptyBlock(),
        () => o.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: n,
      "Mod-Backspace": n,
      "Shift-Backspace": n,
      Delete: e,
      "Mod-Delete": e,
      "Mod-a": () => this.editor.commands.selectAll()
    }, i = {
      ...r
    }, s = {
      ...r,
      "Ctrl-h": n,
      "Alt-Backspace": n,
      "Ctrl-d": e,
      "Ctrl-Alt-Backspace": e,
      "Alt-Delete": e,
      "Alt-d": e,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return fs() || hh() ? s : i;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new Te({
        key: new Qe("clearDocument"),
        appendTransaction: (n, e, t) => {
          if (n.some((S) => S.getMeta("composition")))
            return;
          const r = n.some((S) => S.docChanged) && !e.doc.eq(t.doc), i = n.some((S) => S.getMeta("preventClearDocument"));
          if (!r || i)
            return;
          const { empty: s, from: o, to: l } = e.selection, c = G.atStart(e.doc).from, d = G.atEnd(e.doc).to;
          if (s || !(o === c && l === d) || !no(t.doc))
            return;
          const g = t.tr, y = Qs({
            state: t,
            transaction: g
          }), { commands: b } = new Zs({
            editor: this.editor,
            state: y
          });
          if (b.clearNodes(), !!g.steps.length)
            return g;
        }
      })
    ];
  }
}), Kx = be.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new Te({
        key: new Qe("tiptapPaste"),
        props: {
          handlePaste: (n, e, t) => {
            this.editor.emit("paste", {
              editor: this.editor,
              event: e,
              slice: t
            });
          }
        }
      })
    ];
  }
}), Jx = be.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new Te({
        key: new Qe("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
});
class Cn {
  get name() {
    return this.node.type.name;
  }
  constructor(e, t, r = !1, i = null) {
    this.currentNode = null, this.actualDepth = null, this.isBlock = r, this.resolvedPos = e, this.editor = t, this.currentNode = i;
  }
  get node() {
    return this.currentNode || this.resolvedPos.node();
  }
  get element() {
    return this.editor.view.domAtPos(this.pos).node;
  }
  get depth() {
    var e;
    return (e = this.actualDepth) !== null && e !== void 0 ? e : this.resolvedPos.depth;
  }
  get pos() {
    return this.resolvedPos.pos;
  }
  get content() {
    return this.node.content;
  }
  set content(e) {
    let t = this.from, r = this.to;
    if (this.isBlock) {
      if (this.content.size === 0) {
        console.error(`You can’t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
        return;
      }
      t = this.from + 1, r = this.to - 1;
    }
    this.editor.commands.insertContentAt({ from: t, to: r }, e);
  }
  get attributes() {
    return this.node.attrs;
  }
  get textContent() {
    return this.node.textContent;
  }
  get size() {
    return this.node.nodeSize;
  }
  get from() {
    return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth);
  }
  get range() {
    return {
      from: this.from,
      to: this.to
    };
  }
  get to() {
    return this.isBlock ? this.pos + this.size : this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1);
  }
  get parent() {
    if (this.depth === 0)
      return null;
    const e = this.resolvedPos.start(this.resolvedPos.depth - 1), t = this.resolvedPos.doc.resolve(e);
    return new Cn(t, this.editor);
  }
  get before() {
    let e = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.from - 3)), new Cn(e, this.editor);
  }
  get after() {
    let e = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.to + 3)), new Cn(e, this.editor);
  }
  get children() {
    const e = [];
    return this.node.content.forEach((t, r) => {
      const i = t.isBlock && !t.isTextblock, s = t.isAtom && !t.isText, o = this.pos + r + (s ? 0 : 1);
      if (o < 0 || o > this.resolvedPos.doc.nodeSize - 2)
        return;
      const l = this.resolvedPos.doc.resolve(o);
      if (!i && l.depth <= this.depth)
        return;
      const c = new Cn(l, this.editor, i, i ? t : null);
      i && (c.actualDepth = this.depth + 1), e.push(new Cn(l, this.editor, i, i ? t : null));
    }), e;
  }
  get firstChild() {
    return this.children[0] || null;
  }
  get lastChild() {
    const e = this.children;
    return e[e.length - 1] || null;
  }
  closest(e, t = {}) {
    let r = null, i = this.parent;
    for (; i && !r; ) {
      if (i.node.type.name === e)
        if (Object.keys(t).length > 0) {
          const s = i.node.attrs, o = Object.keys(t);
          for (let l = 0; l < o.length; l += 1) {
            const c = o[l];
            if (s[c] !== t[c])
              break;
          }
        } else
          r = i;
      i = i.parent;
    }
    return r;
  }
  querySelector(e, t = {}) {
    return this.querySelectorAll(e, t, !0)[0] || null;
  }
  querySelectorAll(e, t = {}, r = !1) {
    let i = [];
    if (!this.children || this.children.length === 0)
      return i;
    const s = Object.keys(t);
    return this.children.forEach((o) => {
      r && i.length > 0 || (o.node.type.name === e && s.every((c) => t[c] === o.node.attrs[c]) && i.push(o), !(r && i.length > 0) && (i = i.concat(o.querySelectorAll(e, t, r))));
    }), i;
  }
  setAttribute(e) {
    const { tr: t } = this.editor.state;
    t.setNodeMarkup(this.from, void 0, {
      ...this.node.attrs,
      ...e
    }), this.editor.view.dispatch(t);
  }
}
const Qx = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}

.tippy-box[data-animation=fade][data-state=hidden] {
  opacity: 0
}`;
function Zx(n, e, t) {
  const r = document.querySelector("style[data-tiptap-style]");
  if (r !== null)
    return r;
  const i = document.createElement("style");
  return e && i.setAttribute("nonce", e), i.setAttribute("data-tiptap-style", ""), i.innerHTML = n, document.getElementsByTagName("head")[0].appendChild(i), i;
}
class Xx extends oS {
  constructor(e = {}) {
    super(), this.isFocused = !1, this.isInitialized = !1, this.extensionStorage = {}, this.options = {
      element: document.createElement("div"),
      content: "",
      injectCSS: !0,
      injectNonce: void 0,
      extensions: [],
      autofocus: !1,
      editable: !0,
      editorProps: {},
      parseOptions: {},
      coreExtensionOptions: {},
      enableInputRules: !0,
      enablePasteRules: !0,
      enableCoreExtensions: !0,
      enableContentCheck: !1,
      emitContentError: !1,
      onBeforeCreate: () => null,
      onCreate: () => null,
      onUpdate: () => null,
      onSelectionUpdate: () => null,
      onTransaction: () => null,
      onFocus: () => null,
      onBlur: () => null,
      onDestroy: () => null,
      onContentError: ({ error: t }) => {
        throw t;
      },
      onPaste: () => null,
      onDrop: () => null
    }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.on("contentError", this.options.onContentError), this.createView(), this.injectCSS(), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), this.on("drop", ({ event: t, slice: r, moved: i }) => this.options.onDrop(t, r, i)), this.on("paste", ({ event: t, slice: r }) => this.options.onPaste(t, r)), window.setTimeout(() => {
      this.isDestroyed || (this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }), this.isInitialized = !0);
    }, 0);
  }
  /**
   * Returns the editor storage.
   */
  get storage() {
    return this.extensionStorage;
  }
  /**
   * An object of all registered commands.
   */
  get commands() {
    return this.commandManager.commands;
  }
  /**
   * Create a command chain to call multiple commands at once.
   */
  chain() {
    return this.commandManager.chain();
  }
  /**
   * Check if a command or a command chain can be executed. Without executing it.
   */
  can() {
    return this.commandManager.can();
  }
  /**
   * Inject CSS styles.
   */
  injectCSS() {
    this.options.injectCSS && document && (this.css = Zx(Qx, this.options.injectNonce));
  }
  /**
   * Update editor options.
   *
   * @param options A list of options
   */
  setOptions(e = {}) {
    this.options = {
      ...this.options,
      ...e
    }, !(!this.view || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
  }
  /**
   * Update editable state of the editor.
   */
  setEditable(e, t = !0) {
    this.setOptions({ editable: e }), t && this.emit("update", { editor: this, transaction: this.state.tr });
  }
  /**
   * Returns whether the editor is editable.
   */
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  /**
   * Returns the editor state.
   */
  get state() {
    return this.view.state;
  }
  /**
   * Register a ProseMirror plugin.
   *
   * @param plugin A ProseMirror plugin
   * @param handlePlugins Control how to merge the plugin into the existing plugins.
   * @returns The new editor state
   */
  registerPlugin(e, t) {
    const r = oh(t) ? t(e, [...this.state.plugins]) : [...this.state.plugins, e], i = this.state.reconfigure({ plugins: r });
    return this.view.updateState(i), i;
  }
  /**
   * Unregister a ProseMirror plugin.
   *
   * @param nameOrPluginKeyToRemove The plugins name
   * @returns The new editor state or undefined if the editor is destroyed
   */
  unregisterPlugin(e) {
    if (this.isDestroyed)
      return;
    const t = this.state.plugins;
    let r = t;
    if ([].concat(e).forEach((s) => {
      const o = typeof s == "string" ? `${s}$` : s.key;
      r = r.filter((l) => !l.key.startsWith(o));
    }), t.length === r.length)
      return;
    const i = this.state.reconfigure({
      plugins: r
    });
    return this.view.updateState(i), i;
  }
  /**
   * Creates an extension manager.
   */
  createExtensionManager() {
    var e, t;
    const i = [...this.options.enableCoreExtensions ? [
      jx,
      xS.configure({
        blockSeparator: (t = (e = this.options.coreExtensionOptions) === null || e === void 0 ? void 0 : e.clipboardTextSerializer) === null || t === void 0 ? void 0 : t.blockSeparator
      }),
      Vx,
      qx,
      Gx,
      Jx,
      Yx,
      Kx
    ].filter((s) => typeof this.options.enableCoreExtensions == "object" ? this.options.enableCoreExtensions[s.name] !== !1 : !0) : [], ...this.options.extensions].filter((s) => ["extension", "node", "mark"].includes(s == null ? void 0 : s.type));
    this.extensionManager = new ir(i, this);
  }
  /**
   * Creates an command manager.
   */
  createCommandManager() {
    this.commandManager = new Zs({
      editor: this
    });
  }
  /**
   * Creates a ProseMirror schema.
   */
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  /**
   * Creates a ProseMirror view.
   */
  createView() {
    var e;
    let t;
    try {
      t = Wl(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: this.options.enableContentCheck });
    } catch (o) {
      if (!(o instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(o.message))
        throw o;
      this.emit("contentError", {
        editor: this,
        error: o,
        disableCollaboration: () => {
          this.storage.collaboration && (this.storage.collaboration.isDisabled = !0), this.options.extensions = this.options.extensions.filter((l) => l.name !== "collaboration"), this.createExtensionManager();
        }
      }), t = Wl(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: !1 });
    }
    const r = dh(t, this.options.autofocus);
    this.view = new jf(this.options.element, {
      ...this.options.editorProps,
      attributes: {
        // add `role="textbox"` to the editor element
        role: "textbox",
        ...(e = this.options.editorProps) === null || e === void 0 ? void 0 : e.attributes
      },
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: rr.create({
        doc: t,
        selection: r || void 0
      })
    });
    const i = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(i), this.createNodeViews(), this.prependClass();
    const s = this.view.dom;
    s.editor = this;
  }
  /**
   * Creates all node views.
   */
  createNodeViews() {
    this.view.isDestroyed || this.view.setProps({
      nodeViews: this.extensionManager.nodeViews
    });
  }
  /**
   * Prepend class name to element.
   */
  prependClass() {
    this.view.dom.className = `tiptap ${this.view.dom.className}`;
  }
  captureTransaction(e) {
    this.isCapturingTransaction = !0, e(), this.isCapturingTransaction = !1;
    const t = this.capturedTransaction;
    return this.capturedTransaction = null, t;
  }
  /**
   * The callback over which to send transactions (state updates) produced by the view.
   *
   * @param transaction An editor state transaction
   */
  dispatchTransaction(e) {
    if (this.view.isDestroyed)
      return;
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = e;
        return;
      }
      e.steps.forEach((o) => {
        var l;
        return (l = this.capturedTransaction) === null || l === void 0 ? void 0 : l.step(o);
      });
      return;
    }
    const t = this.state.apply(e), r = !this.state.selection.eq(t.selection);
    this.emit("beforeTransaction", {
      editor: this,
      transaction: e,
      nextState: t
    }), this.view.updateState(t), this.emit("transaction", {
      editor: this,
      transaction: e
    }), r && this.emit("selectionUpdate", {
      editor: this,
      transaction: e
    });
    const i = e.getMeta("focus"), s = e.getMeta("blur");
    i && this.emit("focus", {
      editor: this,
      event: i.event,
      transaction: e
    }), s && this.emit("blur", {
      editor: this,
      event: s.event,
      transaction: e
    }), !(!e.docChanged || e.getMeta("preventUpdate")) && this.emit("update", {
      editor: this,
      transaction: e
    });
  }
  /**
   * Get attributes of the currently selected node or mark.
   */
  getAttributes(e) {
    return mh(this.state, e);
  }
  isActive(e, t) {
    const r = typeof e == "string" ? e : null, i = typeof e == "string" ? t : e;
    return xx(this.state, r, i);
  }
  /**
   * Get the document as JSON.
   */
  getJSON() {
    return this.state.doc.toJSON();
  }
  /**
   * Get the document as HTML.
   */
  getHTML() {
    return va(this.state.doc.content, this.schema);
  }
  /**
   * Get the document as text.
   */
  getText(e) {
    const { blockSeparator: t = `

`, textSerializers: r = {} } = e || {};
    return gx(this.state.doc, {
      blockSeparator: t,
      textSerializers: {
        ...ah(this.schema),
        ...r
      }
    });
  }
  /**
   * Check if there is no content.
   */
  get isEmpty() {
    return no(this.state.doc);
  }
  /**
   * Get the number of characters for the current document.
   *
   * @deprecated
   */
  getCharacterCount() {
    return console.warn('[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.'), this.state.doc.content.size - 2;
  }
  /**
   * Destroy the editor.
   */
  destroy() {
    if (this.emit("destroy"), this.view) {
      const e = this.view.dom;
      e && e.editor && delete e.editor, this.view.destroy();
    }
    this.removeAllListeners();
  }
  /**
   * Check if the editor is already destroyed.
   */
  get isDestroyed() {
    var e;
    return !(!((e = this.view) === null || e === void 0) && e.docView);
  }
  $node(e, t) {
    var r;
    return ((r = this.$doc) === null || r === void 0 ? void 0 : r.querySelector(e, t)) || null;
  }
  $nodes(e, t) {
    var r;
    return ((r = this.$doc) === null || r === void 0 ? void 0 : r.querySelectorAll(e, t)) || null;
  }
  $pos(e) {
    const t = this.state.doc.resolve(e);
    return new Cn(t, this);
  }
  get $doc() {
    return this.$pos(0);
  }
}
function zn(n) {
  return new ci({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = K(n.getAttributes, void 0, r);
      if (i === !1 || i === null)
        return null;
      const { tr: s } = e, o = r[r.length - 1], l = r[0];
      if (o) {
        const c = l.search(/\S/), d = t.from + l.indexOf(o), f = d + o.length;
        if (Na(t.from, t.to, e.doc).filter((y) => y.mark.type.excluded.find((S) => S === n.type && S !== y.mark.type)).filter((y) => y.to > d).length)
          return null;
        f < t.to && s.delete(f, t.to), d > t.from && s.delete(t.from + c, d);
        const g = t.from + c + o.length;
        s.addMark(t.from + c, g, n.type.create(i || {})), s.removeStoredMark(n.type);
      }
    }
  });
}
function gh(n) {
  return new ci({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = K(n.getAttributes, void 0, r) || {}, { tr: s } = e, o = t.from;
      let l = t.to;
      const c = n.type.create(i);
      if (r[1]) {
        const d = r[0].lastIndexOf(r[1]);
        let f = o + d;
        f > l ? f = l : l = f + r[1].length;
        const h = r[0][r[0].length - 1];
        s.insertText(h, o + r[0].length - 1), s.replaceWith(f, l, c);
      } else if (r[0]) {
        const d = n.type.isInline ? o : o - 1;
        s.insert(d, n.type.create(i)).delete(s.mapping.map(o), s.mapping.map(l));
      }
      s.scrollIntoView();
    }
  });
}
function Yl(n) {
  return new ci({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = e.doc.resolve(t.from), s = K(n.getAttributes, void 0, r) || {};
      if (!i.node(-1).canReplaceWith(i.index(-1), i.indexAfter(-1), n.type))
        return null;
      e.tr.delete(t.from, t.to).setBlockType(t.from, t.from, n.type, s);
    }
  });
}
function ce(n) {
  return new ci({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      let i = n.replace, s = t.from;
      const o = t.to;
      if (r[1]) {
        const l = r[0].lastIndexOf(r[1]);
        i += r[0].slice(l + r[1].length), s += l;
        const c = s - o;
        c > 0 && (i = r[0].slice(l - c, l) + i, s = o);
      }
      e.tr.insertText(i, s, o);
    }
  });
}
function ti(n) {
  return new ci({
    find: n.find,
    handler: ({ state: e, range: t, match: r, chain: i }) => {
      const s = K(n.getAttributes, void 0, r) || {}, o = e.tr.delete(t.from, t.to), c = o.doc.resolve(t.from).blockRange(), d = c && da(c, n.type, s);
      if (!d)
        return null;
      if (o.wrap(c, d), n.keepMarks && n.editor) {
        const { selection: h, storedMarks: g } = e, { splittableMarks: y } = n.editor.extensionManager, b = g || h.$to.parentOffset && h.$from.marks();
        if (b) {
          const S = b.filter((x) => y.includes(x.type.name));
          o.ensureMarks(S);
        }
      }
      if (n.keepAttributes) {
        const h = n.type.name === "bulletList" || n.type.name === "orderedList" ? "listItem" : "taskList";
        i().updateAttributes(h, s).run();
      }
      const f = o.doc.resolve(t.from - 1).nodeBefore;
      f && f.type === n.type && hn(o.doc, t.from - 1) && (!n.joinPredicate || n.joinPredicate(r, f)) && o.join(t.from - 1);
    }
  });
}
class We {
  constructor(e = {}) {
    this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = K(B(this, "addOptions", {
      name: this.name
    }))), this.storage = K(B(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new We(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => eo(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new We(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = K(B(t, "addOptions", {
      name: t.name
    })), t.storage = K(B(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function fn(n) {
  return new mS({
    find: n.find,
    handler: ({ state: e, range: t, match: r, pasteEvent: i }) => {
      const s = K(n.getAttributes, void 0, r, i);
      if (s === !1 || s === null)
        return null;
      const { tr: o } = e, l = r[r.length - 1], c = r[0];
      let d = t.to;
      if (l) {
        const f = c.search(/\S/), h = t.from + c.indexOf(l), g = h + l.length;
        if (Na(t.from, t.to, e.doc).filter((b) => b.mark.type.excluded.find((x) => x === n.type && x !== b.mark.type)).filter((b) => b.to > h).length)
          return null;
        g < t.to && o.delete(g, t.to), h > t.from && o.delete(t.from + f, h), d = t.from + f + l.length, o.addMark(t.from + f, d, n.type.create(s || {})), o.removeStoredMark(n.type);
      }
    }
  });
}
function ew(n, e) {
  const { selection: t } = n, { $from: r } = t;
  if (t instanceof $) {
    const s = r.index();
    return r.parent.canReplaceWith(s, s + 1, e);
  }
  let i = r.depth;
  for (; i >= 0; ) {
    const s = r.index(i);
    if (r.node(i).contentMatchAt(s).matchType(e))
      return !0;
    i -= 1;
  }
  return !1;
}
function tw(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var jl = { exports: {} }, al = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vu;
function nw() {
  if (Vu) return al;
  Vu = 1;
  var n = he;
  function e(h, g) {
    return h === g && (h !== 0 || 1 / h === 1 / g) || h !== h && g !== g;
  }
  var t = typeof Object.is == "function" ? Object.is : e, r = n.useState, i = n.useEffect, s = n.useLayoutEffect, o = n.useDebugValue;
  function l(h, g) {
    var y = g(), b = r({ inst: { value: y, getSnapshot: g } }), S = b[0].inst, x = b[1];
    return s(function() {
      S.value = y, S.getSnapshot = g, c(S) && x({ inst: S });
    }, [h, y, g]), i(function() {
      return c(S) && x({ inst: S }), h(function() {
        c(S) && x({ inst: S });
      });
    }, [h]), o(y), y;
  }
  function c(h) {
    var g = h.getSnapshot;
    h = h.value;
    try {
      var y = g();
      return !t(h, y);
    } catch {
      return !0;
    }
  }
  function d(h, g) {
    return g();
  }
  var f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? d : l;
  return al.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : f, al;
}
var cl = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yu;
function rw() {
  return Yu || (Yu = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var n = he, e = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function t(v) {
      {
        for (var _ = arguments.length, I = new Array(_ > 1 ? _ - 1 : 0), P = 1; P < _; P++)
          I[P - 1] = arguments[P];
        r("error", v, I);
      }
    }
    function r(v, _, I) {
      {
        var P = e.ReactDebugCurrentFrame, E = P.getStackAddendum();
        E !== "" && (_ += "%s", I = I.concat([E]));
        var z = I.map(function(j) {
          return String(j);
        });
        z.unshift("Warning: " + _), Function.prototype.apply.call(console[v], console, z);
      }
    }
    function i(v, _) {
      return v === _ && (v !== 0 || 1 / v === 1 / _) || v !== v && _ !== _;
    }
    var s = typeof Object.is == "function" ? Object.is : i, o = n.useState, l = n.useEffect, c = n.useLayoutEffect, d = n.useDebugValue, f = !1, h = !1;
    function g(v, _, I) {
      f || n.startTransition !== void 0 && (f = !0, t("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var P = _();
      if (!h) {
        var E = _();
        s(P, E) || (t("The result of getSnapshot should be cached to avoid an infinite loop"), h = !0);
      }
      var z = o({
        inst: {
          value: P,
          getSnapshot: _
        }
      }), j = z[0].inst, Q = z[1];
      return c(function() {
        j.value = P, j.getSnapshot = _, y(j) && Q({
          inst: j
        });
      }, [v, P, _]), l(function() {
        y(j) && Q({
          inst: j
        });
        var ee = function() {
          y(j) && Q({
            inst: j
          });
        };
        return v(ee);
      }, [v]), d(P), P;
    }
    function y(v) {
      var _ = v.getSnapshot, I = v.value;
      try {
        var P = _();
        return !s(I, P);
      } catch {
        return !0;
      }
    }
    function b(v, _, I) {
      return _();
    }
    var S = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", x = !S, w = x ? b : g, T = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : w;
    cl.useSyncExternalStore = T, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), cl;
}
process.env.NODE_ENV === "production" ? jl.exports = nw() : jl.exports = rw();
var ro = jl.exports;
const iw = (...n) => (e) => {
  n.forEach((t) => {
    typeof t == "function" ? t(e) : t && (t.current = e);
  });
}, sw = ({ contentComponent: n }) => {
  const e = ro.useSyncExternalStore(n.subscribe, n.getSnapshot, n.getServerSnapshot);
  return he.createElement(he.Fragment, null, Object.values(e));
};
function ow() {
  const n = /* @__PURE__ */ new Set();
  let e = {};
  return {
    /**
     * Subscribe to the editor instance's changes.
     */
    subscribe(t) {
      return n.add(t), () => {
        n.delete(t);
      };
    },
    getSnapshot() {
      return e;
    },
    getServerSnapshot() {
      return e;
    },
    /**
     * Adds a new NodeView Renderer to the editor.
     */
    setRenderer(t, r) {
      e = {
        ...e,
        [t]: kd.createPortal(r.reactElement, r.element, t)
      }, n.forEach((i) => i());
    },
    /**
     * Removes a NodeView Renderer from the editor.
     */
    removeRenderer(t) {
      const r = { ...e };
      delete r[t], e = r, n.forEach((i) => i());
    }
  };
}
class lw extends he.Component {
  constructor(e) {
    var t;
    super(e), this.editorContentRef = he.createRef(), this.initialized = !1, this.state = {
      hasContentComponentInitialized: !!(!((t = e.editor) === null || t === void 0) && t.contentComponent)
    };
  }
  componentDidMount() {
    this.init();
  }
  componentDidUpdate() {
    this.init();
  }
  init() {
    const e = this.props.editor;
    if (e && !e.isDestroyed && e.options.element) {
      if (e.contentComponent)
        return;
      const t = this.editorContentRef.current;
      t.append(...e.options.element.childNodes), e.setOptions({
        element: t
      }), e.contentComponent = ow(), this.state.hasContentComponentInitialized || (this.unsubscribeToContentComponent = e.contentComponent.subscribe(() => {
        this.setState((r) => r.hasContentComponentInitialized ? r : {
          hasContentComponentInitialized: !0
        }), this.unsubscribeToContentComponent && this.unsubscribeToContentComponent();
      })), e.createNodeViews(), this.initialized = !0;
    }
  }
  componentWillUnmount() {
    const e = this.props.editor;
    if (!e || (this.initialized = !1, e.isDestroyed || e.view.setProps({
      nodeViews: {}
    }), this.unsubscribeToContentComponent && this.unsubscribeToContentComponent(), e.contentComponent = null, !e.options.element.firstChild))
      return;
    const t = document.createElement("div");
    t.append(...e.options.element.childNodes), e.setOptions({
      element: t
    });
  }
  render() {
    const { editor: e, innerRef: t, ...r } = this.props;
    return he.createElement(
      he.Fragment,
      null,
      he.createElement("div", { ref: iw(t, this.editorContentRef), ...r }),
      (e == null ? void 0 : e.contentComponent) && he.createElement(sw, { contentComponent: e.contentComponent })
    );
  }
}
const aw = ke((n, e) => {
  const t = he.useMemo(() => Math.floor(Math.random() * 4294967295).toString(), [n.editor]);
  return he.createElement(lw, {
    key: t,
    innerRef: e,
    ...n
  });
}), cw = he.memo(aw);
var uw = function n(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var r, i, s;
    if (Array.isArray(e)) {
      if (r = e.length, r != t.length) return !1;
      for (i = r; i-- !== 0; )
        if (!n(e[i], t[i])) return !1;
      return !0;
    }
    if (e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (i of e.entries())
        if (!t.has(i[0])) return !1;
      for (i of e.entries())
        if (!n(i[1], t.get(i[0]))) return !1;
      return !0;
    }
    if (e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (i of e.entries())
        if (!t.has(i[0])) return !1;
      return !0;
    }
    if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (r = e.length, r != t.length) return !1;
      for (i = r; i-- !== 0; )
        if (e[i] !== t[i]) return !1;
      return !0;
    }
    if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
    if (s = Object.keys(e), r = s.length, r !== Object.keys(t).length) return !1;
    for (i = r; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, s[i])) return !1;
    for (i = r; i-- !== 0; ) {
      var o = s[i];
      if (!(o === "_owner" && e.$$typeof) && !n(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}, dw = /* @__PURE__ */ tw(uw), Ul = { exports: {} }, ul = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ju;
function fw() {
  if (ju) return ul;
  ju = 1;
  var n = he, e = ro;
  function t(d, f) {
    return d === f && (d !== 0 || 1 / d === 1 / f) || d !== d && f !== f;
  }
  var r = typeof Object.is == "function" ? Object.is : t, i = e.useSyncExternalStore, s = n.useRef, o = n.useEffect, l = n.useMemo, c = n.useDebugValue;
  return ul.useSyncExternalStoreWithSelector = function(d, f, h, g, y) {
    var b = s(null);
    if (b.current === null) {
      var S = { hasValue: !1, value: null };
      b.current = S;
    } else S = b.current;
    b = l(function() {
      function w(P) {
        if (!T) {
          if (T = !0, v = P, P = g(P), y !== void 0 && S.hasValue) {
            var E = S.value;
            if (y(E, P)) return _ = E;
          }
          return _ = P;
        }
        if (E = _, r(v, P)) return E;
        var z = g(P);
        return y !== void 0 && y(E, z) ? E : (v = P, _ = z);
      }
      var T = !1, v, _, I = h === void 0 ? null : h;
      return [function() {
        return w(f());
      }, I === null ? void 0 : function() {
        return w(I());
      }];
    }, [f, h, g, y]);
    var x = i(d, b[0], b[1]);
    return o(function() {
      S.hasValue = !0, S.value = x;
    }, [x]), c(x), x;
  }, ul;
}
var dl = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uu;
function hw() {
  return Uu || (Uu = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var n = he, e = ro;
    function t(f, h) {
      return f === h && (f !== 0 || 1 / f === 1 / h) || f !== f && h !== h;
    }
    var r = typeof Object.is == "function" ? Object.is : t, i = e.useSyncExternalStore, s = n.useRef, o = n.useEffect, l = n.useMemo, c = n.useDebugValue;
    function d(f, h, g, y, b) {
      var S = s(null), x;
      S.current === null ? (x = {
        hasValue: !1,
        value: null
      }, S.current = x) : x = S.current;
      var w = l(function() {
        var I = !1, P, E, z = function(Ve) {
          if (!I) {
            I = !0, P = Ve;
            var ge = y(Ve);
            if (b !== void 0 && x.hasValue) {
              var dt = x.value;
              if (b(dt, ge))
                return E = dt, dt;
            }
            return E = ge, ge;
          }
          var tt = P, Re = E;
          if (r(tt, Ve))
            return Re;
          var Se = y(Ve);
          return b !== void 0 && b(Re, Se) ? Re : (P = Ve, E = Se, Se);
        }, j = g === void 0 ? null : g, Q = function() {
          return z(h());
        }, ee = j === null ? void 0 : function() {
          return z(j());
        };
        return [Q, ee];
      }, [h, g, y, b]), T = w[0], v = w[1], _ = i(f, T, v);
      return o(function() {
        x.hasValue = !0, x.value = _;
      }, [_]), c(_), _;
    }
    dl.useSyncExternalStoreWithSelector = d, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), dl;
}
process.env.NODE_ENV === "production" ? Ul.exports = fw() : Ul.exports = hw();
var pw = Ul.exports;
const mw = typeof window < "u" ? cy : Ji;
class gw {
  constructor(e) {
    this.transactionNumber = 0, this.lastTransactionNumber = 0, this.subscribers = /* @__PURE__ */ new Set(), this.editor = e, this.lastSnapshot = { editor: e, transactionNumber: 0 }, this.getSnapshot = this.getSnapshot.bind(this), this.getServerSnapshot = this.getServerSnapshot.bind(this), this.watch = this.watch.bind(this), this.subscribe = this.subscribe.bind(this);
  }
  /**
   * Get the current editor instance.
   */
  getSnapshot() {
    return this.transactionNumber === this.lastTransactionNumber ? this.lastSnapshot : (this.lastTransactionNumber = this.transactionNumber, this.lastSnapshot = { editor: this.editor, transactionNumber: this.transactionNumber }, this.lastSnapshot);
  }
  /**
   * Always disable the editor on the server-side.
   */
  getServerSnapshot() {
    return { editor: null, transactionNumber: 0 };
  }
  /**
   * Subscribe to the editor instance's changes.
   */
  subscribe(e) {
    return this.subscribers.add(e), () => {
      this.subscribers.delete(e);
    };
  }
  /**
   * Watch the editor instance for changes.
   */
  watch(e) {
    if (this.editor = e, this.editor) {
      const t = () => {
        this.transactionNumber += 1, this.subscribers.forEach((i) => i());
      }, r = this.editor;
      return r.on("transaction", t), () => {
        r.off("transaction", t);
      };
    }
  }
}
function yw(n) {
  var e;
  const [t] = $s(() => new gw(n.editor)), r = pw.useSyncExternalStoreWithSelector(t.subscribe, t.getSnapshot, t.getServerSnapshot, n.selector, (e = n.equalityFn) !== null && e !== void 0 ? e : dw);
  return mw(() => t.watch(n.editor), [n.editor, t]), cd(r), r;
}
const qu = process.env.NODE_ENV !== "production", ql = typeof window > "u", bw = ql || !!(typeof window < "u" && window.next);
class Ra {
  constructor(e) {
    this.editor = null, this.subscriptions = /* @__PURE__ */ new Set(), this.isComponentMounted = !1, this.previousDeps = null, this.instanceId = "", this.options = e, this.subscriptions = /* @__PURE__ */ new Set(), this.setEditor(this.getInitialEditor()), this.scheduleDestroy(), this.getEditor = this.getEditor.bind(this), this.getServerSnapshot = this.getServerSnapshot.bind(this), this.subscribe = this.subscribe.bind(this), this.refreshEditorInstance = this.refreshEditorInstance.bind(this), this.scheduleDestroy = this.scheduleDestroy.bind(this), this.onRender = this.onRender.bind(this), this.createEditor = this.createEditor.bind(this);
  }
  setEditor(e) {
    this.editor = e, this.instanceId = Math.random().toString(36).slice(2, 9), this.subscriptions.forEach((t) => t());
  }
  getInitialEditor() {
    if (this.options.current.immediatelyRender === void 0)
      return ql || bw ? (qu && console.warn("Tiptap Error: SSR has been detected, please set `immediatelyRender` explicitly to `false` to avoid hydration mismatches."), null) : this.createEditor();
    if (this.options.current.immediatelyRender && ql && qu)
      throw new Error("Tiptap Error: SSR has been detected, and `immediatelyRender` has been set to `true` this is an unsupported configuration that may result in errors, explicitly set `immediatelyRender` to `false` to avoid hydration mismatches.");
    return this.options.current.immediatelyRender ? this.createEditor() : null;
  }
  /**
   * Create a new editor instance. And attach event listeners.
   */
  createEditor() {
    const e = {
      ...this.options.current,
      // Always call the most recent version of the callback function by default
      onBeforeCreate: (...r) => {
        var i, s;
        return (s = (i = this.options.current).onBeforeCreate) === null || s === void 0 ? void 0 : s.call(i, ...r);
      },
      onBlur: (...r) => {
        var i, s;
        return (s = (i = this.options.current).onBlur) === null || s === void 0 ? void 0 : s.call(i, ...r);
      },
      onCreate: (...r) => {
        var i, s;
        return (s = (i = this.options.current).onCreate) === null || s === void 0 ? void 0 : s.call(i, ...r);
      },
      onDestroy: (...r) => {
        var i, s;
        return (s = (i = this.options.current).onDestroy) === null || s === void 0 ? void 0 : s.call(i, ...r);
      },
      onFocus: (...r) => {
        var i, s;
        return (s = (i = this.options.current).onFocus) === null || s === void 0 ? void 0 : s.call(i, ...r);
      },
      onSelectionUpdate: (...r) => {
        var i, s;
        return (s = (i = this.options.current).onSelectionUpdate) === null || s === void 0 ? void 0 : s.call(i, ...r);
      },
      onTransaction: (...r) => {
        var i, s;
        return (s = (i = this.options.current).onTransaction) === null || s === void 0 ? void 0 : s.call(i, ...r);
      },
      onUpdate: (...r) => {
        var i, s;
        return (s = (i = this.options.current).onUpdate) === null || s === void 0 ? void 0 : s.call(i, ...r);
      },
      onContentError: (...r) => {
        var i, s;
        return (s = (i = this.options.current).onContentError) === null || s === void 0 ? void 0 : s.call(i, ...r);
      },
      onDrop: (...r) => {
        var i, s;
        return (s = (i = this.options.current).onDrop) === null || s === void 0 ? void 0 : s.call(i, ...r);
      },
      onPaste: (...r) => {
        var i, s;
        return (s = (i = this.options.current).onPaste) === null || s === void 0 ? void 0 : s.call(i, ...r);
      }
    };
    return new Xx(e);
  }
  /**
   * Get the current editor instance.
   */
  getEditor() {
    return this.editor;
  }
  /**
   * Always disable the editor on the server-side.
   */
  getServerSnapshot() {
    return null;
  }
  /**
   * Subscribe to the editor instance's changes.
   */
  subscribe(e) {
    return this.subscriptions.add(e), () => {
      this.subscriptions.delete(e);
    };
  }
  static compareOptions(e, t) {
    return Object.keys(e).every((r) => ["onCreate", "onBeforeCreate", "onDestroy", "onUpdate", "onTransaction", "onFocus", "onBlur", "onSelectionUpdate", "onContentError", "onDrop", "onPaste"].includes(r) ? !0 : r === "extensions" && e.extensions && t.extensions ? e.extensions.length !== t.extensions.length ? !1 : e.extensions.every((i, s) => {
      var o;
      return i === ((o = t.extensions) === null || o === void 0 ? void 0 : o[s]);
    }) : e[r] === t[r]);
  }
  /**
   * On each render, we will create, update, or destroy the editor instance.
   * @param deps The dependencies to watch for changes
   * @returns A cleanup function
   */
  onRender(e) {
    return () => (this.isComponentMounted = !0, clearTimeout(this.scheduledDestructionTimeout), this.editor && !this.editor.isDestroyed && e.length === 0 ? Ra.compareOptions(this.options.current, this.editor.options) || this.editor.setOptions({
      ...this.options.current,
      editable: this.editor.isEditable
    }) : this.refreshEditorInstance(e), () => {
      this.isComponentMounted = !1, this.scheduleDestroy();
    });
  }
  /**
   * Recreate the editor instance if the dependencies have changed.
   */
  refreshEditorInstance(e) {
    if (this.editor && !this.editor.isDestroyed) {
      if (this.previousDeps === null) {
        this.previousDeps = e;
        return;
      }
      if (this.previousDeps.length === e.length && this.previousDeps.every((r, i) => r === e[i]))
        return;
    }
    this.editor && !this.editor.isDestroyed && this.editor.destroy(), this.setEditor(this.createEditor()), this.previousDeps = e;
  }
  /**
   * Schedule the destruction of the editor instance.
   * This will only destroy the editor if it was not mounted on the next tick.
   * This is to avoid destroying the editor instance when it's actually still mounted.
   */
  scheduleDestroy() {
    const e = this.instanceId, t = this.editor;
    this.scheduledDestructionTimeout = setTimeout(() => {
      if (this.isComponentMounted && this.instanceId === e) {
        t && t.setOptions(this.options.current);
        return;
      }
      t && !t.isDestroyed && (t.destroy(), this.instanceId === e && this.setEditor(null));
    }, 1);
  }
}
function kw(n = {}, e = []) {
  const t = Ki(n);
  t.current = n;
  const [r] = $s(() => new Ra(t)), i = ro.useSyncExternalStore(r.subscribe, r.getEditor, r.getServerSnapshot);
  return cd(i), Ji(r.onRender(e)), yw({
    editor: i,
    selector: ({ transactionNumber: s }) => n.shouldRerenderOnTransaction === !1 ? null : n.immediatelyRender && s === 0 ? 0 : s + 1
  }), i;
}
const Sw = na({
  editor: null
});
Sw.Consumer;
const xw = na({
  onDragStart: void 0
}), ww = () => ad(xw);
he.forwardRef((n, e) => {
  const { onDragStart: t } = ww(), r = n.as || "div";
  return (
    // @ts-ignore
    he.createElement(r, { ...n, ref: e, "data-node-view-wrapper": "", onDragStart: t, style: {
      whiteSpace: "normal",
      ...n.style
    } })
  );
});
const Mw = /^\s*>\s$/, Cw = We.create({
  name: "blockquote",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  group: "block",
  defining: !0,
  parseHTML() {
    return [
      { tag: "blockquote" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["blockquote", de(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setBlockquote: () => ({ commands: n }) => n.wrapIn(this.name),
      toggleBlockquote: () => ({ commands: n }) => n.toggleWrap(this.name),
      unsetBlockquote: () => ({ commands: n }) => n.lift(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
    };
  },
  addInputRules() {
    return [
      ti({
        find: Mw,
        type: this.type
      })
    ];
  }
}), Tw = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, Ow = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, vw = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, Ew = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, Aw = ut.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "strong"
      },
      {
        tag: "b",
        getAttrs: (n) => n.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight=400",
        clearMark: (n) => n.type.name === this.name
      },
      {
        style: "font-weight",
        getAttrs: (n) => /^(bold(er)?|[5-9]\d{2,})$/.test(n) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["strong", de(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setBold: () => ({ commands: n }) => n.setMark(this.name),
      toggleBold: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetBold: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [
      zn({
        find: Tw,
        type: this.type
      }),
      zn({
        find: vw,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      fn({
        find: Ow,
        type: this.type
      }),
      fn({
        find: Ew,
        type: this.type
      })
    ];
  }
}), Dw = "listItem", Gu = "textStyle", Ku = /^\s*([-+*])\s$/, Nw = We.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      { tag: "ul" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["ul", de(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(Dw, this.editor.getAttributes(Gu)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let n = ti({
      find: Ku,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = ti({
      find: Ku,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(Gu),
      editor: this.editor
    })), [
      n
    ];
  }
}), Rw = /(^|[^`])`([^`]+)`(?!`)/, Iw = /(^|[^`])`([^`]+)`(?!`)/g, _w = ut.create({
  name: "code",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  excludes: "_",
  code: !0,
  exitable: !0,
  parseHTML() {
    return [
      { tag: "code" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["code", de(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setCode: () => ({ commands: n }) => n.setMark(this.name),
      toggleCode: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetCode: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-e": () => this.editor.commands.toggleCode()
    };
  },
  addInputRules() {
    return [
      zn({
        find: Rw,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      fn({
        find: Iw,
        type: this.type
      })
    ];
  }
}), Pw = /^```([a-z]+)?[\s\n]$/, Lw = /^~~~([a-z]+)?[\s\n]$/, Fw = We.create({
  name: "codeBlock",
  addOptions() {
    return {
      languageClassPrefix: "language-",
      exitOnTripleEnter: !0,
      exitOnArrowDown: !0,
      defaultLanguage: null,
      HTMLAttributes: {}
    };
  },
  content: "text*",
  marks: "",
  group: "block",
  code: !0,
  defining: !0,
  addAttributes() {
    return {
      language: {
        default: this.options.defaultLanguage,
        parseHTML: (n) => {
          var e;
          const { languageClassPrefix: t } = this.options, s = [...((e = n.firstElementChild) === null || e === void 0 ? void 0 : e.classList) || []].filter((o) => o.startsWith(t)).map((o) => o.replace(t, ""))[0];
          return s || null;
        },
        rendered: !1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "pre",
        preserveWhitespace: "full"
      }
    ];
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    return [
      "pre",
      de(this.options.HTMLAttributes, e),
      [
        "code",
        {
          class: n.attrs.language ? this.options.languageClassPrefix + n.attrs.language : null
        },
        0
      ]
    ];
  },
  addCommands() {
    return {
      setCodeBlock: (n) => ({ commands: e }) => e.setNode(this.name, n),
      toggleCodeBlock: (n) => ({ commands: e }) => e.toggleNode(this.name, "paragraph", n)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
      // remove code block when at start of document or code block is empty
      Backspace: () => {
        const { empty: n, $anchor: e } = this.editor.state.selection, t = e.pos === 1;
        return !n || e.parent.type.name !== this.name ? !1 : t || !e.parent.textContent.length ? this.editor.commands.clearNodes() : !1;
      },
      // exit node on triple enter
      Enter: ({ editor: n }) => {
        if (!this.options.exitOnTripleEnter)
          return !1;
        const { state: e } = n, { selection: t } = e, { $from: r, empty: i } = t;
        if (!i || r.parent.type !== this.type)
          return !1;
        const s = r.parentOffset === r.parent.nodeSize - 2, o = r.parent.textContent.endsWith(`

`);
        return !s || !o ? !1 : n.chain().command(({ tr: l }) => (l.delete(r.pos - 2, r.pos), !0)).exitCode().run();
      },
      // exit node on arrow down
      ArrowDown: ({ editor: n }) => {
        if (!this.options.exitOnArrowDown)
          return !1;
        const { state: e } = n, { selection: t, doc: r } = e, { $from: i, empty: s } = t;
        if (!s || i.parent.type !== this.type || !(i.parentOffset === i.parent.nodeSize - 2))
          return !1;
        const l = i.after();
        return l === void 0 ? !1 : r.nodeAt(l) ? n.commands.command(({ tr: d }) => (d.setSelection(G.near(r.resolve(l))), !0)) : n.commands.exitCode();
      }
    };
  },
  addInputRules() {
    return [
      Yl({
        find: Pw,
        type: this.type,
        getAttributes: (n) => ({
          language: n[1]
        })
      }),
      Yl({
        find: Lw,
        type: this.type,
        getAttributes: (n) => ({
          language: n[1]
        })
      })
    ];
  },
  addProseMirrorPlugins() {
    return [
      // this plugin creates a code block for pasted content from VS Code
      // we can also detect the copied code language
      new Te({
        key: new Qe("codeBlockVSCodeHandler"),
        props: {
          handlePaste: (n, e) => {
            if (!e.clipboardData || this.editor.isActive(this.type.name))
              return !1;
            const t = e.clipboardData.getData("text/plain"), r = e.clipboardData.getData("vscode-editor-data"), i = r ? JSON.parse(r) : void 0, s = i == null ? void 0 : i.mode;
            if (!t || !s)
              return !1;
            const { tr: o, schema: l } = n.state, c = l.text(t.replace(/\r\n?/g, `
`));
            return o.replaceSelectionWith(this.type.create({ language: s }, c)), o.selection.$from.parent.type !== this.type && o.setSelection(V.near(o.doc.resolve(Math.max(0, o.selection.from - 2)))), o.setMeta("paste", !0), n.dispatch(o), !0;
          }
        }
      })
    ];
  }
}), Bw = We.create({
  name: "doc",
  topNode: !0,
  content: "block+"
});
function zw(n = {}) {
  return new Te({
    view(e) {
      return new Hw(e, n);
    }
  });
}
class Hw {
  constructor(e, t) {
    var r;
    this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (r = t.width) !== null && r !== void 0 ? r : 1, this.color = t.color === !1 ? void 0 : t.color || "black", this.class = t.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((i) => {
      let s = (o) => {
        this[i](o);
      };
      return e.dom.addEventListener(i, s), { name: i, handler: s };
    });
  }
  destroy() {
    this.handlers.forEach(({ name: e, handler: t }) => this.editorView.dom.removeEventListener(e, t));
  }
  update(e, t) {
    this.cursorPos != null && t.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
  }
  setCursor(e) {
    e != this.cursorPos && (this.cursorPos = e, e == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
  }
  updateOverlay() {
    let e = this.editorView.state.doc.resolve(this.cursorPos), t = !e.parent.inlineContent, r, i = this.editorView.dom, s = i.getBoundingClientRect(), o = s.width / i.offsetWidth, l = s.height / i.offsetHeight;
    if (t) {
      let h = e.nodeBefore, g = e.nodeAfter;
      if (h || g) {
        let y = this.editorView.nodeDOM(this.cursorPos - (h ? h.nodeSize : 0));
        if (y) {
          let b = y.getBoundingClientRect(), S = h ? b.bottom : b.top;
          h && g && (S = (S + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2);
          let x = this.width / 2 * l;
          r = { left: b.left, right: b.right, top: S - x, bottom: S + x };
        }
      }
    }
    if (!r) {
      let h = this.editorView.coordsAtPos(this.cursorPos), g = this.width / 2 * o;
      r = { left: h.left - g, right: h.left + g, top: h.top, bottom: h.bottom };
    }
    let c = this.editorView.dom.offsetParent;
    this.element || (this.element = c.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", t), this.element.classList.toggle("prosemirror-dropcursor-inline", !t);
    let d, f;
    if (!c || c == document.body && getComputedStyle(c).position == "static")
      d = -pageXOffset, f = -pageYOffset;
    else {
      let h = c.getBoundingClientRect(), g = h.width / c.offsetWidth, y = h.height / c.offsetHeight;
      d = h.left - c.scrollLeft * g, f = h.top - c.scrollTop * y;
    }
    this.element.style.left = (r.left - d) / o + "px", this.element.style.top = (r.top - f) / l + "px", this.element.style.width = (r.right - r.left) / o + "px", this.element.style.height = (r.bottom - r.top) / l + "px";
  }
  scheduleRemoval(e) {
    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e);
  }
  dragover(e) {
    if (!this.editorView.editable)
      return;
    let t = this.editorView.posAtCoords({ left: e.clientX, top: e.clientY }), r = t && t.inside >= 0 && this.editorView.state.doc.nodeAt(t.inside), i = r && r.type.spec.disableDropCursor, s = typeof i == "function" ? i(this.editorView, t, e) : i;
    if (t && !s) {
      let o = t.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let l = nf(this.editorView.state.doc, o, this.editorView.dragging.slice);
        l != null && (o = l);
      }
      this.setCursor(o), this.scheduleRemoval(5e3);
    }
  }
  dragend() {
    this.scheduleRemoval(20);
  }
  drop() {
    this.scheduleRemoval(20);
  }
  dragleave(e) {
    this.editorView.dom.contains(e.relatedTarget) || this.setCursor(null);
  }
}
const $w = be.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      zw(this.options)
    ];
  }
});
class ae extends G {
  /**
  Create a gap cursor.
  */
  constructor(e) {
    super(e, e);
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    return ae.valid(r) ? new ae(r) : G.near(r);
  }
  content() {
    return L.empty;
  }
  eq(e) {
    return e instanceof ae && e.head == this.head;
  }
  toJSON() {
    return { type: "gapcursor", pos: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for GapCursor.fromJSON");
    return new ae(e.resolve(t.pos));
  }
  /**
  @internal
  */
  getBookmark() {
    return new Ia(this.anchor);
  }
  /**
  @internal
  */
  static valid(e) {
    let t = e.parent;
    if (t.isTextblock || !Ww(e) || !Vw(e))
      return !1;
    let r = t.type.spec.allowGapCursor;
    if (r != null)
      return r;
    let i = t.contentMatchAt(e.index()).defaultType;
    return i && i.isTextblock;
  }
  /**
  @internal
  */
  static findGapCursorFrom(e, t, r = !1) {
    e: for (; ; ) {
      if (!r && ae.valid(e))
        return e;
      let i = e.pos, s = null;
      for (let o = e.depth; ; o--) {
        let l = e.node(o);
        if (t > 0 ? e.indexAfter(o) < l.childCount : e.index(o) > 0) {
          s = l.child(t > 0 ? e.indexAfter(o) : e.index(o) - 1);
          break;
        } else if (o == 0)
          return null;
        i += t;
        let c = e.doc.resolve(i);
        if (ae.valid(c))
          return c;
      }
      for (; ; ) {
        let o = t > 0 ? s.firstChild : s.lastChild;
        if (!o) {
          if (s.isAtom && !s.isText && !$.isSelectable(s)) {
            e = e.doc.resolve(i + s.nodeSize * t), r = !1;
            continue e;
          }
          break;
        }
        s = o, i += t;
        let l = e.doc.resolve(i);
        if (ae.valid(l))
          return l;
      }
      return null;
    }
  }
}
ae.prototype.visible = !1;
ae.findFrom = ae.findGapCursorFrom;
G.jsonID("gapcursor", ae);
class Ia {
  constructor(e) {
    this.pos = e;
  }
  map(e) {
    return new Ia(e.map(this.pos));
  }
  resolve(e) {
    let t = e.resolve(this.pos);
    return ae.valid(t) ? new ae(t) : G.near(t);
  }
}
function yh(n) {
  return n.isAtom || n.spec.isolating || n.spec.createGapCursor;
}
function Ww(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.index(e), r = n.node(e);
    if (t == 0) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(t - 1); ; i = i.lastChild) {
      if (i.childCount == 0 && !i.inlineContent || yh(i.type))
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function Vw(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.indexAfter(e), r = n.node(e);
    if (t == r.childCount) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(t); ; i = i.firstChild) {
      if (i.childCount == 0 && !i.inlineContent || yh(i.type))
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function Yw() {
  return new Te({
    props: {
      decorations: Gw,
      createSelectionBetween(n, e, t) {
        return e.pos == t.pos && ae.valid(t) ? new ae(t) : null;
      },
      handleClick: Uw,
      handleKeyDown: jw,
      handleDOMEvents: { beforeinput: qw }
    }
  });
}
const jw = Uf({
  ArrowLeft: Fi("horiz", -1),
  ArrowRight: Fi("horiz", 1),
  ArrowUp: Fi("vert", -1),
  ArrowDown: Fi("vert", 1)
});
function Fi(n, e) {
  const t = n == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
  return function(r, i, s) {
    let o = r.selection, l = e > 0 ? o.$to : o.$from, c = o.empty;
    if (o instanceof V) {
      if (!s.endOfTextblock(t) || l.depth == 0)
        return !1;
      c = !1, l = r.doc.resolve(e > 0 ? l.after() : l.before());
    }
    let d = ae.findGapCursorFrom(l, e, c);
    return d ? (i && i(r.tr.setSelection(new ae(d))), !0) : !1;
  };
}
function Uw(n, e, t) {
  if (!n || !n.editable)
    return !1;
  let r = n.state.doc.resolve(e);
  if (!ae.valid(r))
    return !1;
  let i = n.posAtCoords({ left: t.clientX, top: t.clientY });
  return i && i.inside > -1 && $.isSelectable(n.state.doc.nodeAt(i.inside)) ? !1 : (n.dispatch(n.state.tr.setSelection(new ae(r))), !0);
}
function qw(n, e) {
  if (e.inputType != "insertCompositionText" || !(n.state.selection instanceof ae))
    return !1;
  let { $from: t } = n.state.selection, r = t.parent.contentMatchAt(t.index()).findWrapping(n.state.schema.nodes.text);
  if (!r)
    return !1;
  let i = A.empty;
  for (let o = r.length - 1; o >= 0; o--)
    i = A.from(r[o].createAndFill(null, i));
  let s = n.state.tr.replace(t.pos, t.pos, new L(i, 0, 0));
  return s.setSelection(V.near(s.doc.resolve(t.pos + 1))), n.dispatch(s), !1;
}
function Gw(n) {
  if (!(n.selection instanceof ae))
    return null;
  let e = document.createElement("div");
  return e.className = "ProseMirror-gapcursor", fe.create(n.doc, [Xe.widget(n.selection.head, e, { key: "gapcursor" })]);
}
const Kw = be.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [
      Yw()
    ];
  },
  extendNodeSchema(n) {
    var e;
    const t = {
      name: n.name,
      options: n.options,
      storage: n.storage
    };
    return {
      allowGapCursor: (e = K(B(n, "allowGapCursor", t))) !== null && e !== void 0 ? e : null
    };
  }
}), Jw = We.create({
  name: "hardBreak",
  addOptions() {
    return {
      keepMarks: !0,
      HTMLAttributes: {}
    };
  },
  inline: !0,
  group: "inline",
  selectable: !1,
  linebreakReplacement: !0,
  parseHTML() {
    return [
      { tag: "br" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["br", de(this.options.HTMLAttributes, n)];
  },
  renderText() {
    return `
`;
  },
  addCommands() {
    return {
      setHardBreak: () => ({ commands: n, chain: e, state: t, editor: r }) => n.first([
        () => n.exitCode(),
        () => n.command(() => {
          const { selection: i, storedMarks: s } = t;
          if (i.$from.parent.type.spec.isolating)
            return !1;
          const { keepMarks: o } = this.options, { splittableMarks: l } = r.extensionManager, c = s || i.$to.parentOffset && i.$from.marks();
          return e().insertContent({ type: this.name }).command(({ tr: d, dispatch: f }) => {
            if (f && c && o) {
              const h = c.filter((g) => l.includes(g.type.name));
              d.ensureMarks(h);
            }
            return !0;
          }).run();
        })
      ])
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Enter": () => this.editor.commands.setHardBreak(),
      "Shift-Enter": () => this.editor.commands.setHardBreak()
    };
  }
}), Qw = We.create({
  name: "heading",
  addOptions() {
    return {
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {}
    };
  },
  content: "inline*",
  group: "block",
  defining: !0,
  addAttributes() {
    return {
      level: {
        default: 1,
        rendered: !1
      }
    };
  },
  parseHTML() {
    return this.options.levels.map((n) => ({
      tag: `h${n}`,
      attrs: { level: n }
    }));
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    return [`h${this.options.levels.includes(n.attrs.level) ? n.attrs.level : this.options.levels[0]}`, de(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setHeading: (n) => ({ commands: e }) => this.options.levels.includes(n.level) ? e.setNode(this.name, n) : !1,
      toggleHeading: (n) => ({ commands: e }) => this.options.levels.includes(n.level) ? e.toggleNode(this.name, "paragraph", n) : !1
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce((n, e) => ({
      ...n,
      [`Mod-Alt-${e}`]: () => this.editor.commands.toggleHeading({ level: e })
    }), {});
  },
  addInputRules() {
    return this.options.levels.map((n) => Yl({
      find: new RegExp(`^(#{${Math.min(...this.options.levels)},${n}})\\s$`),
      type: this.type,
      getAttributes: {
        level: n
      }
    }));
  }
});
var hs = 200, Me = function() {
};
Me.prototype.append = function(e) {
  return e.length ? (e = Me.from(e), !this.length && e || e.length < hs && this.leafAppend(e) || this.length < hs && e.leafPrepend(this) || this.appendInner(e)) : this;
};
Me.prototype.prepend = function(e) {
  return e.length ? Me.from(e).append(this) : this;
};
Me.prototype.appendInner = function(e) {
  return new Zw(this, e);
};
Me.prototype.slice = function(e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = this.length), e >= t ? Me.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t));
};
Me.prototype.get = function(e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
};
Me.prototype.forEach = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length), t <= r ? this.forEachInner(e, t, r, 0) : this.forEachInvertedInner(e, t, r, 0);
};
Me.prototype.map = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length);
  var i = [];
  return this.forEach(function(s, o) {
    return i.push(e(s, o));
  }, t, r), i;
};
Me.from = function(e) {
  return e instanceof Me ? e : e && e.length ? new bh(e) : Me.empty;
};
var bh = /* @__PURE__ */ function(n) {
  function e(r) {
    n.call(this), this.values = r;
  }
  n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e;
  var t = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(i, s) {
    return i == 0 && s == this.length ? this : new e(this.values.slice(i, s));
  }, e.prototype.getInner = function(i) {
    return this.values[i];
  }, e.prototype.forEachInner = function(i, s, o, l) {
    for (var c = s; c < o; c++)
      if (i(this.values[c], l + c) === !1)
        return !1;
  }, e.prototype.forEachInvertedInner = function(i, s, o, l) {
    for (var c = s - 1; c >= o; c--)
      if (i(this.values[c], l + c) === !1)
        return !1;
  }, e.prototype.leafAppend = function(i) {
    if (this.length + i.length <= hs)
      return new e(this.values.concat(i.flatten()));
  }, e.prototype.leafPrepend = function(i) {
    if (this.length + i.length <= hs)
      return new e(i.flatten().concat(this.values));
  }, t.length.get = function() {
    return this.values.length;
  }, t.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, t), e;
}(Me);
Me.empty = new bh([]);
var Zw = /* @__PURE__ */ function(n) {
  function e(t, r) {
    n.call(this), this.left = t, this.right = r, this.length = t.length + r.length, this.depth = Math.max(t.depth, r.depth) + 1;
  }
  return n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(r) {
    return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length);
  }, e.prototype.forEachInner = function(r, i, s, o) {
    var l = this.left.length;
    if (i < l && this.left.forEachInner(r, i, Math.min(s, l), o) === !1 || s > l && this.right.forEachInner(r, Math.max(i - l, 0), Math.min(this.length, s) - l, o + l) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function(r, i, s, o) {
    var l = this.left.length;
    if (i > l && this.right.forEachInvertedInner(r, i - l, Math.max(s, l) - l, o + l) === !1 || s < l && this.left.forEachInvertedInner(r, Math.min(i, l), s, o) === !1)
      return !1;
  }, e.prototype.sliceInner = function(r, i) {
    if (r == 0 && i == this.length)
      return this;
    var s = this.left.length;
    return i <= s ? this.left.slice(r, i) : r >= s ? this.right.slice(r - s, i - s) : this.left.slice(r, s).append(this.right.slice(0, i - s));
  }, e.prototype.leafAppend = function(r) {
    var i = this.right.leafAppend(r);
    if (i)
      return new e(this.left, i);
  }, e.prototype.leafPrepend = function(r) {
    var i = this.left.leafPrepend(r);
    if (i)
      return new e(i, this.right);
  }, e.prototype.appendInner = function(r) {
    return this.left.depth >= Math.max(this.right.depth, r.depth) + 1 ? new e(this.left, new e(this.right, r)) : new e(this, r);
  }, e;
}(Me);
const Xw = 500;
class pt {
  constructor(e, t) {
    this.items = e, this.eventCount = t;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(e, t) {
    if (this.eventCount == 0)
      return null;
    let r = this.items.length;
    for (; ; r--)
      if (this.items.get(r - 1).selection) {
        --r;
        break;
      }
    let i, s;
    t && (i = this.remapping(r, this.items.length), s = i.maps.length);
    let o = e.tr, l, c, d = [], f = [];
    return this.items.forEach((h, g) => {
      if (!h.step) {
        i || (i = this.remapping(r, g + 1), s = i.maps.length), s--, f.push(h);
        return;
      }
      if (i) {
        f.push(new yt(h.map));
        let y = h.step.map(i.slice(s)), b;
        y && o.maybeStep(y).doc && (b = o.mapping.maps[o.mapping.maps.length - 1], d.push(new yt(b, void 0, void 0, d.length + f.length))), s--, b && i.appendMap(b, s);
      } else
        o.maybeStep(h.step);
      if (h.selection)
        return l = i ? h.selection.map(i.slice(s)) : h.selection, c = new pt(this.items.slice(0, r).append(f.reverse().concat(d)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: c, transform: o, selection: l };
  }
  // Create a new branch with the given transform added.
  addTransform(e, t, r, i) {
    let s = [], o = this.eventCount, l = this.items, c = !i && l.length ? l.get(l.length - 1) : null;
    for (let f = 0; f < e.steps.length; f++) {
      let h = e.steps[f].invert(e.docs[f]), g = new yt(e.mapping.maps[f], h, t), y;
      (y = c && c.merge(g)) && (g = y, f ? s.pop() : l = l.slice(0, l.length - 1)), s.push(g), t && (o++, t = void 0), i || (c = g);
    }
    let d = o - r.depth;
    return d > tM && (l = eM(l, d), o -= d), new pt(l.append(s), o);
  }
  remapping(e, t) {
    let r = new Gr();
    return this.items.forEach((i, s) => {
      let o = i.mirrorOffset != null && s - i.mirrorOffset >= e ? r.maps.length - i.mirrorOffset : void 0;
      r.appendMap(i.map, o);
    }, e, t), r;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new pt(this.items.append(e.map((t) => new yt(t))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(e, t) {
    if (!this.eventCount)
      return this;
    let r = [], i = Math.max(0, this.items.length - t), s = e.mapping, o = e.steps.length, l = this.eventCount;
    this.items.forEach((g) => {
      g.selection && l--;
    }, i);
    let c = t;
    this.items.forEach((g) => {
      let y = s.getMirror(--c);
      if (y == null)
        return;
      o = Math.min(o, y);
      let b = s.maps[y];
      if (g.step) {
        let S = e.steps[y].invert(e.docs[y]), x = g.selection && g.selection.map(s.slice(c + 1, y));
        x && l++, r.push(new yt(b, S, x));
      } else
        r.push(new yt(b));
    }, i);
    let d = [];
    for (let g = t; g < o; g++)
      d.push(new yt(s.maps[g]));
    let f = this.items.slice(0, i).append(d).append(r), h = new pt(f, l);
    return h.emptyItemCount() > Xw && (h = h.compress(this.items.length - r.length)), h;
  }
  emptyItemCount() {
    let e = 0;
    return this.items.forEach((t) => {
      t.step || e++;
    }), e;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(e = this.items.length) {
    let t = this.remapping(0, e), r = t.maps.length, i = [], s = 0;
    return this.items.forEach((o, l) => {
      if (l >= e)
        i.push(o), o.selection && s++;
      else if (o.step) {
        let c = o.step.map(t.slice(r)), d = c && c.getMap();
        if (r--, d && t.appendMap(d, r), c) {
          let f = o.selection && o.selection.map(t.slice(r));
          f && s++;
          let h = new yt(d.invert(), c, f), g, y = i.length - 1;
          (g = i.length && i[y].merge(h)) ? i[y] = g : i.push(h);
        }
      } else o.map && r--;
    }, this.items.length, 0), new pt(Me.from(i.reverse()), s);
  }
}
pt.empty = new pt(Me.empty, 0);
function eM(n, e) {
  let t;
  return n.forEach((r, i) => {
    if (r.selection && e-- == 0)
      return t = i, !1;
  }), n.slice(t);
}
class yt {
  constructor(e, t, r, i) {
    this.map = e, this.step = t, this.selection = r, this.mirrorOffset = i;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let t = e.step.merge(this.step);
      if (t)
        return new yt(t.getMap().invert(), t, this.selection);
    }
  }
}
class Zt {
  constructor(e, t, r, i, s) {
    this.done = e, this.undone = t, this.prevRanges = r, this.prevTime = i, this.prevComposition = s;
  }
}
const tM = 20;
function nM(n, e, t, r) {
  let i = t.getMeta(_n), s;
  if (i)
    return i.historyState;
  t.getMeta(sM) && (n = new Zt(n.done, n.undone, null, 0, -1));
  let o = t.getMeta("appendedTransaction");
  if (t.steps.length == 0)
    return n;
  if (o && o.getMeta(_n))
    return o.getMeta(_n).redo ? new Zt(n.done.addTransform(t, void 0, r, qi(e)), n.undone, Ju(t.mapping.maps), n.prevTime, n.prevComposition) : new Zt(n.done, n.undone.addTransform(t, void 0, r, qi(e)), null, n.prevTime, n.prevComposition);
  if (t.getMeta("addToHistory") !== !1 && !(o && o.getMeta("addToHistory") === !1)) {
    let l = t.getMeta("composition"), c = n.prevTime == 0 || !o && n.prevComposition != l && (n.prevTime < (t.time || 0) - r.newGroupDelay || !rM(t, n.prevRanges)), d = o ? fl(n.prevRanges, t.mapping) : Ju(t.mapping.maps);
    return new Zt(n.done.addTransform(t, c ? e.selection.getBookmark() : void 0, r, qi(e)), pt.empty, d, t.time, l ?? n.prevComposition);
  } else return (s = t.getMeta("rebased")) ? new Zt(n.done.rebased(t, s), n.undone.rebased(t, s), fl(n.prevRanges, t.mapping), n.prevTime, n.prevComposition) : new Zt(n.done.addMaps(t.mapping.maps), n.undone.addMaps(t.mapping.maps), fl(n.prevRanges, t.mapping), n.prevTime, n.prevComposition);
}
function rM(n, e) {
  if (!e)
    return !1;
  if (!n.docChanged)
    return !0;
  let t = !1;
  return n.mapping.maps[0].forEach((r, i) => {
    for (let s = 0; s < e.length; s += 2)
      r <= e[s + 1] && i >= e[s] && (t = !0);
  }), t;
}
function Ju(n) {
  let e = [];
  for (let t = n.length - 1; t >= 0 && e.length == 0; t--)
    n[t].forEach((r, i, s, o) => e.push(s, o));
  return e;
}
function fl(n, e) {
  if (!n)
    return null;
  let t = [];
  for (let r = 0; r < n.length; r += 2) {
    let i = e.map(n[r], 1), s = e.map(n[r + 1], -1);
    i <= s && t.push(i, s);
  }
  return t;
}
function iM(n, e, t) {
  let r = qi(e), i = _n.get(e).spec.config, s = (t ? n.undone : n.done).popEvent(e, r);
  if (!s)
    return null;
  let o = s.selection.resolve(s.transform.doc), l = (t ? n.done : n.undone).addTransform(s.transform, e.selection.getBookmark(), i, r), c = new Zt(t ? l : s.remaining, t ? s.remaining : l, null, 0, -1);
  return s.transform.setSelection(o).setMeta(_n, { redo: t, historyState: c });
}
let hl = !1, Qu = null;
function qi(n) {
  let e = n.plugins;
  if (Qu != e) {
    hl = !1, Qu = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].spec.historyPreserveItems) {
        hl = !0;
        break;
      }
  }
  return hl;
}
const _n = new Qe("history"), sM = new Qe("closeHistory");
function oM(n = {}) {
  return n = {
    depth: n.depth || 100,
    newGroupDelay: n.newGroupDelay || 500
  }, new Te({
    key: _n,
    state: {
      init() {
        return new Zt(pt.empty, pt.empty, null, 0, -1);
      },
      apply(e, t, r) {
        return nM(t, r, e, n);
      }
    },
    config: n,
    props: {
      handleDOMEvents: {
        beforeinput(e, t) {
          let r = t.inputType, i = r == "historyUndo" ? Sh : r == "historyRedo" ? xh : null;
          return !i || !e.editable ? !1 : (t.preventDefault(), i(e.state, e.dispatch));
        }
      }
    }
  });
}
function kh(n, e) {
  return (t, r) => {
    let i = _n.getState(t);
    if (!i || (n ? i.undone : i.done).eventCount == 0)
      return !1;
    if (r) {
      let s = iM(i, t, n);
      s && r(e ? s.scrollIntoView() : s);
    }
    return !0;
  };
}
const Sh = kh(!1, !0), xh = kh(!0, !0), lM = be.create({
  name: "history",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: n, dispatch: e }) => Sh(n, e),
      redo: () => ({ state: n, dispatch: e }) => xh(n, e)
    };
  },
  addProseMirrorPlugins() {
    return [
      oM(this.options)
    ];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Mod-y": () => this.editor.commands.redo(),
      // Russian keyboard layouts
      "Mod-я": () => this.editor.commands.undo(),
      "Shift-Mod-я": () => this.editor.commands.redo()
    };
  }
}), aM = We.create({
  name: "horizontalRule",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  parseHTML() {
    return [{ tag: "hr" }];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["hr", de(this.options.HTMLAttributes, n)];
  },
  addCommands() {
    return {
      setHorizontalRule: () => ({ chain: n, state: e }) => {
        if (!ew(e, e.schema.nodes[this.name]))
          return !1;
        const { selection: t } = e, { $from: r, $to: i } = t, s = n();
        return r.parentOffset === 0 ? s.insertContentAt({
          from: Math.max(r.pos - 1, 0),
          to: i.pos
        }, {
          type: this.name
        }) : wx(t) ? s.insertContentAt(i.pos, {
          type: this.name
        }) : s.insertContent({ type: this.name }), s.command(({ tr: o, dispatch: l }) => {
          var c;
          if (l) {
            const { $to: d } = o.selection, f = d.end();
            if (d.nodeAfter)
              d.nodeAfter.isTextblock ? o.setSelection(V.create(o.doc, d.pos + 1)) : d.nodeAfter.isBlock ? o.setSelection($.create(o.doc, d.pos)) : o.setSelection(V.create(o.doc, d.pos));
            else {
              const h = (c = d.parent.type.contentMatch.defaultType) === null || c === void 0 ? void 0 : c.create();
              h && (o.insert(f, h), o.setSelection(V.create(o.doc, f + 1)));
            }
            o.scrollIntoView();
          }
          return !0;
        }).run();
      }
    };
  },
  addInputRules() {
    return [
      gh({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })
    ];
  }
}), cM = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, uM = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, dM = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, fM = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, hM = ut.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: (n) => n.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=normal",
        clearMark: (n) => n.type.name === this.name
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["em", de(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: n }) => n.setMark(this.name),
      toggleItalic: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetItalic: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [
      zn({
        find: cM,
        type: this.type
      }),
      zn({
        find: dM,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      fn({
        find: uM,
        type: this.type
      }),
      fn({
        find: fM,
        type: this.type
      })
    ];
  }
}), pM = We.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["li", de(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), mM = "listItem", Zu = "textStyle", Xu = /^(\d+)\.\s$/, gM = We.create({
  name: "orderedList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  addAttributes() {
    return {
      start: {
        default: 1,
        parseHTML: (n) => n.hasAttribute("start") ? parseInt(n.getAttribute("start") || "", 10) : 1
      },
      type: {
        default: null,
        parseHTML: (n) => n.getAttribute("type")
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "ol"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    const { start: e, ...t } = n;
    return e === 1 ? ["ol", de(this.options.HTMLAttributes, t), 0] : ["ol", de(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(mM, this.editor.getAttributes(Zu)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let n = ti({
      find: Xu,
      type: this.type,
      getAttributes: (e) => ({ start: +e[1] }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1]
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = ti({
      find: Xu,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: (e) => ({ start: +e[1], ...this.editor.getAttributes(Zu) }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1],
      editor: this.editor
    })), [
      n
    ];
  }
}), wh = We.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [
      { tag: "p" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["p", de(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands: n }) => n.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
}), yM = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, bM = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, kM = ut.create({
  name: "strike",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "s"
      },
      {
        tag: "del"
      },
      {
        tag: "strike"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (n) => n.includes("line-through") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["s", de(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setStrike: () => ({ commands: n }) => n.setMark(this.name),
      toggleStrike: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetStrike: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-s": () => this.editor.commands.toggleStrike()
    };
  },
  addInputRules() {
    return [
      zn({
        find: yM,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      fn({
        find: bM,
        type: this.type
      })
    ];
  }
}), SM = We.create({
  name: "text",
  group: "inline"
}), xM = be.create({
  name: "starterKit",
  addExtensions() {
    const n = [];
    return this.options.bold !== !1 && n.push(Aw.configure(this.options.bold)), this.options.blockquote !== !1 && n.push(Cw.configure(this.options.blockquote)), this.options.bulletList !== !1 && n.push(Nw.configure(this.options.bulletList)), this.options.code !== !1 && n.push(_w.configure(this.options.code)), this.options.codeBlock !== !1 && n.push(Fw.configure(this.options.codeBlock)), this.options.document !== !1 && n.push(Bw.configure(this.options.document)), this.options.dropcursor !== !1 && n.push($w.configure(this.options.dropcursor)), this.options.gapcursor !== !1 && n.push(Kw.configure(this.options.gapcursor)), this.options.hardBreak !== !1 && n.push(Jw.configure(this.options.hardBreak)), this.options.heading !== !1 && n.push(Qw.configure(this.options.heading)), this.options.history !== !1 && n.push(lM.configure(this.options.history)), this.options.horizontalRule !== !1 && n.push(aM.configure(this.options.horizontalRule)), this.options.italic !== !1 && n.push(hM.configure(this.options.italic)), this.options.listItem !== !1 && n.push(pM.configure(this.options.listItem)), this.options.orderedList !== !1 && n.push(gM.configure(this.options.orderedList)), this.options.paragraph !== !1 && n.push(wh.configure(this.options.paragraph)), this.options.strike !== !1 && n.push(kM.configure(this.options.strike)), this.options.text !== !1 && n.push(SM.configure(this.options.text)), n;
  }
}), wM = ut.create({
  name: "underline",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "u"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (n) => n.includes("underline") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["u", de(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setUnderline: () => ({ commands: n }) => n.setMark(this.name),
      toggleUnderline: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetUnderline: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-u": () => this.editor.commands.toggleUnderline(),
      "Mod-U": () => this.editor.commands.toggleUnderline()
    };
  }
}), MM = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", CM = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", Gl = "numeric", Kl = "ascii", Jl = "alpha", Fr = "asciinumeric", Rr = "alphanumeric", Ql = "domain", Mh = "emoji", TM = "scheme", OM = "slashscheme", pl = "whitespace";
function vM(n, e) {
  return n in e || (e[n] = []), e[n];
}
function En(n, e, t) {
  e[Gl] && (e[Fr] = !0, e[Rr] = !0), e[Kl] && (e[Fr] = !0, e[Jl] = !0), e[Fr] && (e[Rr] = !0), e[Jl] && (e[Rr] = !0), e[Rr] && (e[Ql] = !0), e[Mh] && (e[Ql] = !0);
  for (const r in e) {
    const i = vM(r, t);
    i.indexOf(n) < 0 && i.push(n);
  }
}
function EM(n, e) {
  const t = {};
  for (const r in e)
    e[r].indexOf(n) >= 0 && (t[r] = !0);
  return t;
}
function qe(n = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = n;
}
qe.groups = {};
qe.prototype = {
  accepts() {
    return !!this.t;
  },
  /**
   * Follow an existing transition from the given input to the next state.
   * Does not mutate.
   * @param {string} input character or token type to transition on
   * @returns {?State<T>} the next state, if any
   */
  go(n) {
    const e = this, t = e.j[n];
    if (t)
      return t;
    for (let r = 0; r < e.jr.length; r++) {
      const i = e.jr[r][0], s = e.jr[r][1];
      if (s && i.test(n))
        return s;
    }
    return e.jd;
  },
  /**
   * Whether the state has a transition for the given input. Set the second
   * argument to true to only look for an exact match (and not a default or
   * regular-expression-based transition)
   * @param {string} input
   * @param {boolean} exactOnly
   */
  has(n, e = !1) {
    return e ? n in this.j : !!this.go(n);
  },
  /**
   * Short for "transition all"; create a transition from the array of items
   * in the given list to the same final resulting state.
   * @param {string | string[]} inputs Group of inputs to transition on
   * @param {Transition<T> | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   */
  ta(n, e, t, r) {
    for (let i = 0; i < n.length; i++)
      this.tt(n[i], e, t, r);
  },
  /**
   * Short for "take regexp transition"; defines a transition for this state
   * when it encounters a token which matches the given regular expression
   * @param {RegExp} regexp Regular expression transition (populate first)
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  tr(n, e, t, r) {
    r = r || qe.groups;
    let i;
    return e && e.j ? i = e : (i = new qe(e), t && r && En(e, t, r)), this.jr.push([n, i]), i;
  },
  /**
   * Short for "take transitions", will take as many sequential transitions as
   * the length of the given input and returns the
   * resulting final state.
   * @param {string | string[]} input
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */
  ts(n, e, t, r) {
    let i = this;
    const s = n.length;
    if (!s)
      return i;
    for (let o = 0; o < s - 1; o++)
      i = i.tt(n[o]);
    return i.tt(n[s - 1], e, t, r);
  },
  /**
   * Short for "take transition", this is a method for building/working with
   * state machines.
   *
   * If a state already exists for the given input, returns it.
   *
   * If a token is specified, that state will emit that token when reached by
   * the linkify engine.
   *
   * If no state exists, it will be initialized with some default transitions
   * that resemble existing default transitions.
   *
   * If a state is given for the second argument, that state will be
   * transitioned to on the given input regardless of what that input
   * previously did.
   *
   * Specify a token group flags to define groups that this token belongs to.
   * The token will be added to corresponding entires in the given groups
   * object.
   *
   * @param {string} input character, token type to transition on
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of groups
   * @returns {State<T>} taken after the given input
   */
  tt(n, e, t, r) {
    r = r || qe.groups;
    const i = this;
    if (e && e.j)
      return i.j[n] = e, e;
    const s = e;
    let o, l = i.go(n);
    if (l ? (o = new qe(), Object.assign(o.j, l.j), o.jr.push.apply(o.jr, l.jr), o.jd = l.jd, o.t = l.t) : o = new qe(), s) {
      if (r)
        if (o.t && typeof o.t == "string") {
          const c = Object.assign(EM(o.t, r), t);
          En(s, c, r);
        } else t && En(s, t, r);
      o.t = s;
    }
    return i.j[n] = o, o;
  }
};
const q = (n, e, t, r, i) => n.ta(e, t, r, i), le = (n, e, t, r, i) => n.tr(e, t, r, i), ed = (n, e, t, r, i) => n.ts(e, t, r, i), D = (n, e, t, r, i) => n.tt(e, t, r, i), Ft = "WORD", Zl = "UWORD", Ch = "ASCIINUMERICAL", Th = "ALPHANUMERICAL", ni = "LOCALHOST", Xl = "TLD", ea = "UTLD", Gi = "SCHEME", nr = "SLASH_SCHEME", _a = "NUM", ta = "WS", Pa = "NL", Br = "OPENBRACE", zr = "CLOSEBRACE", ps = "OPENBRACKET", ms = "CLOSEBRACKET", gs = "OPENPAREN", ys = "CLOSEPAREN", bs = "OPENANGLEBRACKET", ks = "CLOSEANGLEBRACKET", Ss = "FULLWIDTHLEFTPAREN", xs = "FULLWIDTHRIGHTPAREN", ws = "LEFTCORNERBRACKET", Ms = "RIGHTCORNERBRACKET", Cs = "LEFTWHITECORNERBRACKET", Ts = "RIGHTWHITECORNERBRACKET", Os = "FULLWIDTHLESSTHAN", vs = "FULLWIDTHGREATERTHAN", Es = "AMPERSAND", As = "APOSTROPHE", Ds = "ASTERISK", Xt = "AT", Ns = "BACKSLASH", Rs = "BACKTICK", Is = "CARET", tn = "COLON", La = "COMMA", _s = "DOLLAR", bt = "DOT", Ps = "EQUALS", Fa = "EXCLAMATION", it = "HYPHEN", Hr = "PERCENT", Ls = "PIPE", Fs = "PLUS", Bs = "POUND", $r = "QUERY", Ba = "QUOTE", Oh = "FULLWIDTHMIDDLEDOT", za = "SEMI", kt = "SLASH", Wr = "TILDE", zs = "UNDERSCORE", vh = "EMOJI", Hs = "SYM";
var Eh = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: Th,
  AMPERSAND: Es,
  APOSTROPHE: As,
  ASCIINUMERICAL: Ch,
  ASTERISK: Ds,
  AT: Xt,
  BACKSLASH: Ns,
  BACKTICK: Rs,
  CARET: Is,
  CLOSEANGLEBRACKET: ks,
  CLOSEBRACE: zr,
  CLOSEBRACKET: ms,
  CLOSEPAREN: ys,
  COLON: tn,
  COMMA: La,
  DOLLAR: _s,
  DOT: bt,
  EMOJI: vh,
  EQUALS: Ps,
  EXCLAMATION: Fa,
  FULLWIDTHGREATERTHAN: vs,
  FULLWIDTHLEFTPAREN: Ss,
  FULLWIDTHLESSTHAN: Os,
  FULLWIDTHMIDDLEDOT: Oh,
  FULLWIDTHRIGHTPAREN: xs,
  HYPHEN: it,
  LEFTCORNERBRACKET: ws,
  LEFTWHITECORNERBRACKET: Cs,
  LOCALHOST: ni,
  NL: Pa,
  NUM: _a,
  OPENANGLEBRACKET: bs,
  OPENBRACE: Br,
  OPENBRACKET: ps,
  OPENPAREN: gs,
  PERCENT: Hr,
  PIPE: Ls,
  PLUS: Fs,
  POUND: Bs,
  QUERY: $r,
  QUOTE: Ba,
  RIGHTCORNERBRACKET: Ms,
  RIGHTWHITECORNERBRACKET: Ts,
  SCHEME: Gi,
  SEMI: za,
  SLASH: kt,
  SLASH_SCHEME: nr,
  SYM: Hs,
  TILDE: Wr,
  TLD: Xl,
  UNDERSCORE: zs,
  UTLD: ea,
  UWORD: Zl,
  WORD: Ft,
  WS: ta
});
const Pt = /[a-z]/, vr = new RegExp("\\p{L}", "u"), ml = new RegExp("\\p{Emoji}", "u"), Lt = /\d/, gl = /\s/, td = "\r", yl = `
`, AM = "️", DM = "‍", bl = "￼";
let Bi = null, zi = null;
function NM(n = []) {
  const e = {};
  qe.groups = e;
  const t = new qe();
  Bi == null && (Bi = nd(MM)), zi == null && (zi = nd(CM)), D(t, "'", As), D(t, "{", Br), D(t, "}", zr), D(t, "[", ps), D(t, "]", ms), D(t, "(", gs), D(t, ")", ys), D(t, "<", bs), D(t, ">", ks), D(t, "（", Ss), D(t, "）", xs), D(t, "「", ws), D(t, "」", Ms), D(t, "『", Cs), D(t, "』", Ts), D(t, "＜", Os), D(t, "＞", vs), D(t, "&", Es), D(t, "*", Ds), D(t, "@", Xt), D(t, "`", Rs), D(t, "^", Is), D(t, ":", tn), D(t, ",", La), D(t, "$", _s), D(t, ".", bt), D(t, "=", Ps), D(t, "!", Fa), D(t, "-", it), D(t, "%", Hr), D(t, "|", Ls), D(t, "+", Fs), D(t, "#", Bs), D(t, "?", $r), D(t, '"', Ba), D(t, "/", kt), D(t, ";", za), D(t, "~", Wr), D(t, "_", zs), D(t, "\\", Ns), D(t, "・", Oh);
  const r = le(t, Lt, _a, {
    [Gl]: !0
  });
  le(r, Lt, r);
  const i = le(r, Pt, Ch, {
    [Fr]: !0
  }), s = le(r, vr, Th, {
    [Rr]: !0
  }), o = le(t, Pt, Ft, {
    [Kl]: !0
  });
  le(o, Lt, i), le(o, Pt, o), le(i, Lt, i), le(i, Pt, i);
  const l = le(t, vr, Zl, {
    [Jl]: !0
  });
  le(l, Pt), le(l, Lt, s), le(l, vr, l), le(s, Lt, s), le(s, Pt), le(s, vr, s);
  const c = D(t, yl, Pa, {
    [pl]: !0
  }), d = D(t, td, ta, {
    [pl]: !0
  }), f = le(t, gl, ta, {
    [pl]: !0
  });
  D(t, bl, f), D(d, yl, c), D(d, bl, f), le(d, gl, f), D(f, td), D(f, yl), le(f, gl, f), D(f, bl, f);
  const h = le(t, ml, vh, {
    [Mh]: !0
  });
  D(h, "#"), le(h, ml, h), D(h, AM, h);
  const g = D(h, DM);
  D(g, "#"), le(g, ml, h);
  const y = [[Pt, o], [Lt, i]], b = [[Pt, null], [vr, l], [Lt, s]];
  for (let S = 0; S < Bi.length; S++)
    Gt(t, Bi[S], Xl, Ft, y);
  for (let S = 0; S < zi.length; S++)
    Gt(t, zi[S], ea, Zl, b);
  En(Xl, {
    tld: !0,
    ascii: !0
  }, e), En(ea, {
    utld: !0,
    alpha: !0
  }, e), Gt(t, "file", Gi, Ft, y), Gt(t, "mailto", Gi, Ft, y), Gt(t, "http", nr, Ft, y), Gt(t, "https", nr, Ft, y), Gt(t, "ftp", nr, Ft, y), Gt(t, "ftps", nr, Ft, y), En(Gi, {
    scheme: !0,
    ascii: !0
  }, e), En(nr, {
    slashscheme: !0,
    ascii: !0
  }, e), n = n.sort((S, x) => S[0] > x[0] ? 1 : -1);
  for (let S = 0; S < n.length; S++) {
    const x = n[S][0], T = n[S][1] ? {
      [TM]: !0
    } : {
      [OM]: !0
    };
    x.indexOf("-") >= 0 ? T[Ql] = !0 : Pt.test(x) ? Lt.test(x) ? T[Fr] = !0 : T[Kl] = !0 : T[Gl] = !0, ed(t, x, x, T);
  }
  return ed(t, "localhost", ni, {
    ascii: !0
  }), t.jd = new qe(Hs), {
    start: t,
    tokens: Object.assign({
      groups: e
    }, Eh)
  };
}
function Ah(n, e) {
  const t = RM(e.replace(/[A-Z]/g, (l) => l.toLowerCase())), r = t.length, i = [];
  let s = 0, o = 0;
  for (; o < r; ) {
    let l = n, c = null, d = 0, f = null, h = -1, g = -1;
    for (; o < r && (c = l.go(t[o])); )
      l = c, l.accepts() ? (h = 0, g = 0, f = l) : h >= 0 && (h += t[o].length, g++), d += t[o].length, s += t[o].length, o++;
    s -= h, o -= g, d -= h, i.push({
      t: f.t,
      // token type/name
      v: e.slice(s - d, s),
      // string value
      s: s - d,
      // start index
      e: s
      // end index (excluding)
    });
  }
  return i;
}
function RM(n) {
  const e = [], t = n.length;
  let r = 0;
  for (; r < t; ) {
    let i = n.charCodeAt(r), s, o = i < 55296 || i > 56319 || r + 1 === t || (s = n.charCodeAt(r + 1)) < 56320 || s > 57343 ? n[r] : n.slice(r, r + 2);
    e.push(o), r += o.length;
  }
  return e;
}
function Gt(n, e, t, r, i) {
  let s;
  const o = e.length;
  for (let l = 0; l < o - 1; l++) {
    const c = e[l];
    n.j[c] ? s = n.j[c] : (s = new qe(r), s.jr = i.slice(), n.j[c] = s), n = s;
  }
  return s = new qe(t), s.jr = i.slice(), n.j[e[o - 1]] = s, s;
}
function nd(n) {
  const e = [], t = [];
  let r = 0, i = "0123456789";
  for (; r < n.length; ) {
    let s = 0;
    for (; i.indexOf(n[r + s]) >= 0; )
      s++;
    if (s > 0) {
      e.push(t.join(""));
      for (let o = parseInt(n.substring(r, r + s), 10); o > 0; o--)
        t.pop();
      r += s;
    } else
      t.push(n[r]), r++;
  }
  return e;
}
const ri = {
  defaultProtocol: "http",
  events: null,
  format: rd,
  formatHref: rd,
  nl2br: !1,
  tagName: "a",
  target: null,
  rel: null,
  validate: !0,
  truncate: 1 / 0,
  className: null,
  attributes: null,
  ignoreTags: [],
  render: null
};
function Ha(n, e = null) {
  let t = Object.assign({}, ri);
  n && (t = Object.assign(t, n instanceof Ha ? n.o : n));
  const r = t.ignoreTags, i = [];
  for (let s = 0; s < r.length; s++)
    i.push(r[s].toUpperCase());
  this.o = t, e && (this.defaultRender = e), this.ignoreTags = i;
}
Ha.prototype = {
  o: ri,
  /**
   * @type string[]
   */
  ignoreTags: [],
  /**
   * @param {IntermediateRepresentation} ir
   * @returns {any}
   */
  defaultRender(n) {
    return n;
  },
  /**
   * Returns true or false based on whether a token should be displayed as a
   * link based on the user options.
   * @param {MultiToken} token
   * @returns {boolean}
   */
  check(n) {
    return this.get("validate", n.toString(), n);
  },
  // Private methods
  /**
   * Resolve an option's value based on the value of the option and the given
   * params. If operator and token are specified and the target option is
   * callable, automatically calls the function with the given argument.
   * @template {keyof Opts} K
   * @param {K} key Name of option to use
   * @param {string} [operator] will be passed to the target option if it's a
   * function. If not specified, RAW function value gets returned
   * @param {MultiToken} [token] The token from linkify.tokenize
   * @returns {Opts[K] | any}
   */
  get(n, e, t) {
    const r = e != null;
    let i = this.o[n];
    return i && (typeof i == "object" ? (i = t.t in i ? i[t.t] : ri[n], typeof i == "function" && r && (i = i(e, t))) : typeof i == "function" && r && (i = i(e, t.t, t)), i);
  },
  /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */
  getObj(n, e, t) {
    let r = this.o[n];
    return typeof r == "function" && e != null && (r = r(e, t.t, t)), r;
  },
  /**
   * Convert the given token to a rendered element that may be added to the
   * calling-interface's DOM
   * @param {MultiToken} token Token to render to an HTML element
   * @returns {any} Render result; e.g., HTML string, DOM element, React
   *   Component, etc.
   */
  render(n) {
    const e = n.render(this);
    return (this.get("render", null, n) || this.defaultRender)(e, n.t, n);
  }
};
function rd(n) {
  return n;
}
function Dh(n, e) {
  this.t = "token", this.v = n, this.tk = e;
}
Dh.prototype = {
  isLink: !1,
  /**
   * Return the string this token represents.
   * @return {string}
   */
  toString() {
    return this.v;
  },
  /**
   * What should the value for this token be in the `href` HTML attribute?
   * Returns the `.toString` value by default.
   * @param {string} [scheme]
   * @return {string}
   */
  toHref(n) {
    return this.toString();
  },
  /**
   * @param {Options} options Formatting options
   * @returns {string}
   */
  toFormattedString(n) {
    const e = this.toString(), t = n.get("truncate", e, this), r = n.get("format", e, this);
    return t && r.length > t ? r.substring(0, t) + "…" : r;
  },
  /**
   *
   * @param {Options} options
   * @returns {string}
   */
  toFormattedHref(n) {
    return n.get("formatHref", this.toHref(n.get("defaultProtocol")), this);
  },
  /**
   * The start index of this token in the original input string
   * @returns {number}
   */
  startIndex() {
    return this.tk[0].s;
  },
  /**
   * The end index of this token in the original input string (up to this
   * index but not including it)
   * @returns {number}
   */
  endIndex() {
    return this.tk[this.tk.length - 1].e;
  },
  /**
  	Returns an object  of relevant values for this token, which includes keys
  	* type - Kind of token ('url', 'email', etc.)
  	* value - Original text
  	* href - The value that should be added to the anchor tag's href
  		attribute
  		@method toObject
  	@param {string} [protocol] `'http'` by default
  */
  toObject(n = ri.defaultProtocol) {
    return {
      type: this.t,
      value: this.toString(),
      isLink: this.isLink,
      href: this.toHref(n),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   *
   * @param {Options} options Formatting option
   */
  toFormattedObject(n) {
    return {
      type: this.t,
      value: this.toFormattedString(n),
      isLink: this.isLink,
      href: this.toFormattedHref(n),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  /**
   * Whether this token should be rendered as a link according to the given options
   * @param {Options} options
   * @returns {boolean}
   */
  validate(n) {
    return n.get("validate", this.toString(), this);
  },
  /**
   * Return an object that represents how this link should be rendered.
   * @param {Options} options Formattinng options
   */
  render(n) {
    const e = this, t = this.toHref(n.get("defaultProtocol")), r = n.get("formatHref", t, this), i = n.get("tagName", t, e), s = this.toFormattedString(n), o = {}, l = n.get("className", t, e), c = n.get("target", t, e), d = n.get("rel", t, e), f = n.getObj("attributes", t, e), h = n.getObj("events", t, e);
    return o.href = r, l && (o.class = l), c && (o.target = c), d && (o.rel = d), f && Object.assign(o, f), {
      tagName: i,
      attributes: o,
      content: s,
      eventListeners: h
    };
  }
};
function io(n, e) {
  class t extends Dh {
    constructor(i, s) {
      super(i, s), this.t = n;
    }
  }
  for (const r in e)
    t.prototype[r] = e[r];
  return t.t = n, t;
}
const id = io("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), sd = io("text"), IM = io("nl"), Hi = io("url", {
  isLink: !0,
  /**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@param {string} [scheme] default scheme (e.g., 'https')
  	@return {string} the full href
  */
  toHref(n = ri.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${n}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const n = this.tk;
    return n.length >= 2 && n[0].t !== ni && n[1].t === tn;
  }
}), rt = (n) => new qe(n);
function _M({
  groups: n
}) {
  const e = n.domain.concat([Es, Ds, Xt, Ns, Rs, Is, _s, Ps, it, _a, Hr, Ls, Fs, Bs, kt, Hs, Wr, zs]), t = [As, tn, La, bt, Fa, Hr, $r, Ba, za, bs, ks, Br, zr, ms, ps, gs, ys, Ss, xs, ws, Ms, Cs, Ts, Os, vs], r = [Es, As, Ds, Ns, Rs, Is, _s, Ps, it, Br, zr, Hr, Ls, Fs, Bs, $r, kt, Hs, Wr, zs], i = rt(), s = D(i, Wr);
  q(s, r, s), q(s, n.domain, s);
  const o = rt(), l = rt(), c = rt();
  q(i, n.domain, o), q(i, n.scheme, l), q(i, n.slashscheme, c), q(o, r, s), q(o, n.domain, o);
  const d = D(o, Xt);
  D(s, Xt, d), D(l, Xt, d), D(c, Xt, d);
  const f = D(s, bt);
  q(f, r, s), q(f, n.domain, s);
  const h = rt();
  q(d, n.domain, h), q(h, n.domain, h);
  const g = D(h, bt);
  q(g, n.domain, h);
  const y = rt(id);
  q(g, n.tld, y), q(g, n.utld, y), D(d, ni, y);
  const b = D(h, it);
  D(b, it, b), q(b, n.domain, h), q(y, n.domain, h), D(y, bt, g), D(y, it, b);
  const S = D(y, tn);
  q(S, n.numeric, id);
  const x = D(o, it), w = D(o, bt);
  D(x, it, x), q(x, n.domain, o), q(w, r, s), q(w, n.domain, o);
  const T = rt(Hi);
  q(w, n.tld, T), q(w, n.utld, T), q(T, n.domain, o), q(T, r, s), D(T, bt, w), D(T, it, x), D(T, Xt, d);
  const v = D(T, tn), _ = rt(Hi);
  q(v, n.numeric, _);
  const I = rt(Hi), P = rt();
  q(I, e, I), q(I, t, P), q(P, e, I), q(P, t, P), D(T, kt, I), D(_, kt, I);
  const E = D(l, tn), z = D(c, tn), j = D(z, kt), Q = D(j, kt);
  q(l, n.domain, o), D(l, bt, w), D(l, it, x), q(c, n.domain, o), D(c, bt, w), D(c, it, x), q(E, n.domain, I), D(E, kt, I), D(E, $r, I), q(Q, n.domain, I), q(Q, e, I), D(Q, kt, I);
  const ee = [
    [Br, zr],
    // {}
    [ps, ms],
    // []
    [gs, ys],
    // ()
    [bs, ks],
    // <>
    [Ss, xs],
    // （）
    [ws, Ms],
    // 「」
    [Cs, Ts],
    // 『』
    [Os, vs]
    // ＜＞
  ];
  for (let Ve = 0; Ve < ee.length; Ve++) {
    const [ge, dt] = ee[Ve], tt = D(I, ge);
    D(P, ge, tt), D(tt, dt, I);
    const Re = rt(Hi);
    q(tt, e, Re);
    const Se = rt();
    q(tt, t), q(Re, e, Re), q(Re, t, Se), q(Se, e, Re), q(Se, t, Se), D(Re, dt, I), D(Se, dt, I);
  }
  return D(i, ni, T), D(i, Pa, IM), {
    start: i,
    tokens: Eh
  };
}
function PM(n, e, t) {
  let r = t.length, i = 0, s = [], o = [];
  for (; i < r; ) {
    let l = n, c = null, d = null, f = 0, h = null, g = -1;
    for (; i < r && !(c = l.go(t[i].t)); )
      o.push(t[i++]);
    for (; i < r && (d = c || l.go(t[i].t)); )
      c = null, l = d, l.accepts() ? (g = 0, h = l) : g >= 0 && g++, i++, f++;
    if (g < 0)
      i -= f, i < r && (o.push(t[i]), i++);
    else {
      o.length > 0 && (s.push(kl(sd, e, o)), o = []), i -= g, f -= g;
      const y = h.t, b = t.slice(i - f, i);
      s.push(kl(y, e, b));
    }
  }
  return o.length > 0 && s.push(kl(sd, e, o)), s;
}
function kl(n, e, t) {
  const r = t[0].s, i = t[t.length - 1].e, s = e.slice(r, i);
  return new n(s, t);
}
const LM = typeof console < "u" && console && console.warn || (() => {
}), FM = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", se = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function BM() {
  return qe.groups = {}, se.scanner = null, se.parser = null, se.tokenQueue = [], se.pluginQueue = [], se.customSchemes = [], se.initialized = !1, se;
}
function od(n, e = !1) {
  if (se.initialized && LM(`linkifyjs: already initialized - will not register custom scheme "${n}" ${FM}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(n))
    throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  se.customSchemes.push([n, e]);
}
function zM() {
  se.scanner = NM(se.customSchemes);
  for (let n = 0; n < se.tokenQueue.length; n++)
    se.tokenQueue[n][1]({
      scanner: se.scanner
    });
  se.parser = _M(se.scanner.tokens);
  for (let n = 0; n < se.pluginQueue.length; n++)
    se.pluginQueue[n][1]({
      scanner: se.scanner,
      parser: se.parser
    });
  return se.initialized = !0, se;
}
function $a(n) {
  return se.initialized || zM(), PM(se.parser.start, n, Ah(se.scanner.start, n));
}
$a.scan = Ah;
function Nh(n, e = null, t = null) {
  if (e && typeof e == "object") {
    if (t)
      throw Error(`linkifyjs: Invalid link type ${e}; must be a string`);
    t = e, e = null;
  }
  const r = new Ha(t), i = $a(n), s = [];
  for (let o = 0; o < i.length; o++) {
    const l = i[o];
    l.isLink && (!e || l.t === e) && r.check(l) && s.push(l.toFormattedObject(r));
  }
  return s;
}
const Wa = "[\0-   ᠎ -\u2029 　]", HM = new RegExp(Wa), $M = new RegExp(`${Wa}$`), WM = new RegExp(Wa, "g");
function VM(n) {
  return n.length === 1 ? n[0].isLink : n.length === 3 && n[1].isLink ? ["()", "[]"].includes(n[0].value + n[2].value) : !1;
}
function YM(n) {
  return new Te({
    key: new Qe("autolink"),
    appendTransaction: (e, t, r) => {
      const i = e.some((d) => d.docChanged) && !t.doc.eq(r.doc), s = e.some((d) => d.getMeta("preventAutolink"));
      if (!i || s)
        return;
      const { tr: o } = r, l = fx(t.doc, [...e]);
      if (Sx(l).forEach(({ newRange: d }) => {
        const f = px(r.doc, d, (y) => y.isTextblock);
        let h, g;
        if (f.length > 1)
          h = f[0], g = r.doc.textBetween(h.pos, h.pos + h.node.nodeSize, void 0, " ");
        else if (f.length) {
          const y = r.doc.textBetween(d.from, d.to, " ", " ");
          if (!$M.test(y))
            return;
          h = f[0], g = r.doc.textBetween(h.pos, d.to, void 0, " ");
        }
        if (h && g) {
          const y = g.split(HM).filter(Boolean);
          if (y.length <= 0)
            return !1;
          const b = y[y.length - 1], S = h.pos + g.lastIndexOf(b);
          if (!b)
            return !1;
          const x = $a(b).map((w) => w.toObject(n.defaultProtocol));
          if (!VM(x))
            return !1;
          x.filter((w) => w.isLink).map((w) => ({
            ...w,
            from: S + w.start + 1,
            to: S + w.end + 1
          })).filter((w) => r.schema.marks.code ? !r.doc.rangeHasMark(w.from, w.to, r.schema.marks.code) : !0).filter((w) => n.validate(w.value)).filter((w) => n.shouldAutoLink(w.value)).forEach((w) => {
            Na(w.from, w.to, r.doc).some((T) => T.mark.type === n.type) || o.addMark(w.from, w.to, n.type.create({
              href: w.href
            }));
          });
        }
      }), !!o.steps.length)
        return o;
    }
  });
}
function jM(n) {
  return new Te({
    key: new Qe("handleClickLink"),
    props: {
      handleClick: (e, t, r) => {
        var i, s;
        if (r.button !== 0 || !e.editable)
          return !1;
        let o = r.target;
        const l = [];
        for (; o.nodeName !== "DIV"; )
          l.push(o), o = o.parentNode;
        if (!l.find((g) => g.nodeName === "A"))
          return !1;
        const c = mh(e.state, n.type.name), d = r.target, f = (i = d == null ? void 0 : d.href) !== null && i !== void 0 ? i : c.href, h = (s = d == null ? void 0 : d.target) !== null && s !== void 0 ? s : c.target;
        return d && f ? (window.open(f, h), !0) : !1;
      }
    }
  });
}
function UM(n) {
  return new Te({
    key: new Qe("handlePasteLink"),
    props: {
      handlePaste: (e, t, r) => {
        const { state: i } = e, { selection: s } = i, { empty: o } = s;
        if (o)
          return !1;
        let l = "";
        r.content.forEach((d) => {
          l += d.textContent;
        });
        const c = Nh(l, { defaultProtocol: n.defaultProtocol }).find((d) => d.isLink && d.value === l);
        return !l || !c ? !1 : n.editor.commands.setMark(n.type, {
          href: c.href
        });
      }
    }
  });
}
function wn(n, e) {
  const t = [
    "http",
    "https",
    "ftp",
    "ftps",
    "mailto",
    "tel",
    "callto",
    "sms",
    "cid",
    "xmpp"
  ];
  return e && e.forEach((r) => {
    const i = typeof r == "string" ? r : r.scheme;
    i && t.push(i);
  }), !n || n.replace(WM, "").match(new RegExp(
    // eslint-disable-next-line no-useless-escape
    `^(?:(?:${t.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`,
    "i"
  ));
}
const qM = ut.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: !1,
  exitable: !0,
  onCreate() {
    this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach((n) => {
      if (typeof n == "string") {
        od(n);
        return;
      }
      od(n.scheme, n.optionalSlashes);
    });
  },
  onDestroy() {
    BM();
  },
  inclusive() {
    return this.options.autolink;
  },
  addOptions() {
    return {
      openOnClick: !0,
      linkOnPaste: !0,
      autolink: !0,
      protocols: [],
      defaultProtocol: "http",
      HTMLAttributes: {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        class: null
      },
      isAllowedUri: (n, e) => !!wn(n, e.protocols),
      validate: (n) => !!n,
      shouldAutoLink: (n) => !!n
    };
  },
  addAttributes() {
    return {
      href: {
        default: null,
        parseHTML(n) {
          return n.getAttribute("href");
        }
      },
      target: {
        default: this.options.HTMLAttributes.target
      },
      rel: {
        default: this.options.HTMLAttributes.rel
      },
      class: {
        default: this.options.HTMLAttributes.class
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "a[href]",
        getAttrs: (n) => {
          const e = n.getAttribute("href");
          return !e || !this.options.isAllowedUri(e, {
            defaultValidate: (t) => !!wn(t, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol
          }) ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return this.options.isAllowedUri(n.href, {
      defaultValidate: (e) => !!wn(e, this.options.protocols),
      protocols: this.options.protocols,
      defaultProtocol: this.options.defaultProtocol
    }) ? ["a", de(this.options.HTMLAttributes, n), 0] : [
      "a",
      de(this.options.HTMLAttributes, { ...n, href: "" }),
      0
    ];
  },
  addCommands() {
    return {
      setLink: (n) => ({ chain: e }) => {
        const { href: t } = n;
        return this.options.isAllowedUri(t, {
          defaultValidate: (r) => !!wn(r, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? e().setMark(this.name, n).setMeta("preventAutolink", !0).run() : !1;
      },
      toggleLink: (n) => ({ chain: e }) => {
        const { href: t } = n;
        return this.options.isAllowedUri(t, {
          defaultValidate: (r) => !!wn(r, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? e().toggleMark(this.name, n, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run() : !1;
      },
      unsetLink: () => ({ chain: n }) => n().unsetMark(this.name, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run()
    };
  },
  addPasteRules() {
    return [
      fn({
        find: (n) => {
          const e = [];
          if (n) {
            const { protocols: t, defaultProtocol: r } = this.options, i = Nh(n).filter((s) => s.isLink && this.options.isAllowedUri(s.value, {
              defaultValidate: (o) => !!wn(o, t),
              protocols: t,
              defaultProtocol: r
            }));
            i.length && i.forEach((s) => e.push({
              text: s.value,
              data: {
                href: s.href
              },
              index: s.start
            }));
          }
          return e;
        },
        type: this.type,
        getAttributes: (n) => {
          var e;
          return {
            href: (e = n.data) === null || e === void 0 ? void 0 : e.href
          };
        }
      })
    ];
  },
  addProseMirrorPlugins() {
    const n = [], { protocols: e, defaultProtocol: t } = this.options;
    return this.options.autolink && n.push(YM({
      type: this.type,
      defaultProtocol: this.options.defaultProtocol,
      validate: (r) => this.options.isAllowedUri(r, {
        defaultValidate: (i) => !!wn(i, e),
        protocols: e,
        defaultProtocol: t
      }),
      shouldAutoLink: this.options.shouldAutoLink
    })), this.options.openOnClick === !0 && n.push(jM({
      type: this.type
    })), this.options.linkOnPaste && n.push(UM({
      editor: this.editor,
      defaultProtocol: this.options.defaultProtocol,
      type: this.type
    })), n;
  }
}), GM = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, KM = We.create({
  name: "image",
  addOptions() {
    return {
      inline: !1,
      allowBase64: !1,
      HTMLAttributes: {}
    };
  },
  inline() {
    return this.options.inline;
  },
  group() {
    return this.options.inline ? "inline" : "block";
  },
  draggable: !0,
  addAttributes() {
    return {
      src: {
        default: null
      },
      alt: {
        default: null
      },
      title: {
        default: null
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: this.options.allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])'
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["img", de(this.options.HTMLAttributes, n)];
  },
  addCommands() {
    return {
      setImage: (n) => ({ commands: e }) => e.insertContent({
        type: this.name,
        attrs: n
      })
    };
  },
  addInputRules() {
    return [
      gh({
        find: GM,
        type: this.type,
        getAttributes: (n) => {
          const [, , e, t, r] = n;
          return { src: t, alt: e, title: r };
        }
      })
    ];
  }
}), JM = be.create({
  name: "textAlign",
  addOptions() {
    return {
      types: [],
      alignments: ["left", "center", "right", "justify"],
      defaultAlignment: null
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          textAlign: {
            default: this.options.defaultAlignment,
            parseHTML: (n) => {
              const e = n.style.textAlign;
              return this.options.alignments.includes(e) ? e : this.options.defaultAlignment;
            },
            renderHTML: (n) => n.textAlign ? { style: `text-align: ${n.textAlign}` } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setTextAlign: (n) => ({ commands: e }) => this.options.alignments.includes(n) ? this.options.types.map((t) => e.updateAttributes(t, { textAlign: n })).every((t) => t) : !1,
      unsetTextAlign: () => ({ commands: n }) => this.options.types.map((e) => n.resetAttributes(e, "textAlign")).every((e) => e),
      toggleTextAlign: (n) => ({ editor: e, commands: t }) => this.options.alignments.includes(n) ? e.isActive({ textAlign: n }) ? t.unsetTextAlign() : t.setTextAlign(n) : !1
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-l": () => this.editor.commands.setTextAlign("left"),
      "Mod-Shift-e": () => this.editor.commands.setTextAlign("center"),
      "Mod-Shift-r": () => this.editor.commands.setTextAlign("right"),
      "Mod-Shift-j": () => this.editor.commands.setTextAlign("justify")
    };
  }
}), QM = (n) => {
  if (!n.children.length)
    return;
  const e = n.querySelectorAll("span");
  e && e.forEach((t) => {
    var r, i;
    const s = t.getAttribute("style"), o = (i = (r = t.parentElement) === null || r === void 0 ? void 0 : r.closest("span")) === null || i === void 0 ? void 0 : i.getAttribute("style");
    t.setAttribute("style", `${o};${s}`);
  });
}, ZM = ut.create({
  name: "textStyle",
  priority: 101,
  addOptions() {
    return {
      HTMLAttributes: {},
      mergeNestedSpanStyles: !1
    };
  },
  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (n) => n.hasAttribute("style") ? (this.options.mergeNestedSpanStyles && QM(n), {}) : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["span", de(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      removeEmptyTextStyle: () => ({ tr: n }) => {
        const { selection: e } = n;
        return n.doc.nodesBetween(e.from, e.to, (t, r) => {
          if (t.isTextblock)
            return !0;
          t.marks.filter((i) => i.type === this.type).some((i) => Object.values(i.attrs).some((s) => !!s)) || n.removeMark(r, r + t.nodeSize, this.type);
        }), !0;
      }
    };
  }
}), XM = be.create({
  name: "color",
  addOptions() {
    return {
      types: ["textStyle"]
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          color: {
            default: null,
            parseHTML: (n) => {
              var e;
              return (e = n.style.color) === null || e === void 0 ? void 0 : e.replace(/['"]+/g, "");
            },
            renderHTML: (n) => n.color ? {
              style: `color: ${n.color}`
            } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setColor: (n) => ({ chain: e }) => e().setMark("textStyle", { color: n }).run(),
      unsetColor: () => ({ chain: n }) => n().setMark("textStyle", { color: null }).removeEmptyTextStyle().run()
    };
  }
}), eC = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))$/, tC = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))/g, nC = ut.create({
  name: "highlight",
  addOptions() {
    return {
      multicolor: !1,
      HTMLAttributes: {}
    };
  },
  addAttributes() {
    return this.options.multicolor ? {
      color: {
        default: null,
        parseHTML: (n) => n.getAttribute("data-color") || n.style.backgroundColor,
        renderHTML: (n) => n.color ? {
          "data-color": n.color,
          style: `background-color: ${n.color}; color: inherit`
        } : {}
      }
    } : {};
  },
  parseHTML() {
    return [
      {
        tag: "mark"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["mark", de(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setHighlight: (n) => ({ commands: e }) => e.setMark(this.name, n),
      toggleHighlight: (n) => ({ commands: e }) => e.toggleMark(this.name, n),
      unsetHighlight: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-h": () => this.editor.commands.toggleHighlight()
    };
  },
  addInputRules() {
    return [
      zn({
        find: eC,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      fn({
        find: tC,
        type: this.type
      })
    ];
  }
}), rC = be.create({
  name: "placeholder",
  addOptions() {
    return {
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      placeholder: "Write something …",
      showOnlyWhenEditable: !0,
      showOnlyCurrent: !0,
      includeChildren: !1
    };
  },
  addProseMirrorPlugins() {
    return [
      new Te({
        key: new Qe("placeholder"),
        props: {
          decorations: ({ doc: n, selection: e }) => {
            const t = this.editor.isEditable || !this.options.showOnlyWhenEditable, { anchor: r } = e, i = [];
            if (!t)
              return null;
            const s = this.editor.isEmpty;
            return n.descendants((o, l) => {
              const c = r >= l && r <= l + o.nodeSize, d = !o.isLeaf && no(o);
              if ((c || !this.options.showOnlyCurrent) && d) {
                const f = [this.options.emptyNodeClass];
                s && f.push(this.options.emptyEditorClass);
                const h = Xe.node(l, l + o.nodeSize, {
                  class: f.join(" "),
                  "data-placeholder": typeof this.options.placeholder == "function" ? this.options.placeholder({
                    editor: this.editor,
                    node: o,
                    pos: l,
                    hasAnchor: c
                  }) : this.options.placeholder
                });
                i.push(h);
              }
              return this.options.includeChildren;
            }), fe.create(n, i);
          }
        }
      })
    ];
  }
}), iC = (n) => ce({
  find: /--$/,
  replace: n ?? "—"
}), sC = (n) => ce({
  find: /\.\.\.$/,
  replace: n ?? "…"
}), oC = (n) => ce({
  find: /(?:^|[\s{[(<'"\u2018\u201C])(")$/,
  replace: n ?? "“"
}), lC = (n) => ce({
  find: /"$/,
  replace: n ?? "”"
}), aC = (n) => ce({
  find: /(?:^|[\s{[(<'"\u2018\u201C])(')$/,
  replace: n ?? "‘"
}), cC = (n) => ce({
  find: /'$/,
  replace: n ?? "’"
}), uC = (n) => ce({
  find: /<-$/,
  replace: n ?? "←"
}), dC = (n) => ce({
  find: /->$/,
  replace: n ?? "→"
}), fC = (n) => ce({
  find: /\(c\)$/,
  replace: n ?? "©"
}), hC = (n) => ce({
  find: /\(tm\)$/,
  replace: n ?? "™"
}), pC = (n) => ce({
  find: /\(sm\)$/,
  replace: n ?? "℠"
}), mC = (n) => ce({
  find: /\(r\)$/,
  replace: n ?? "®"
}), gC = (n) => ce({
  find: /(?:^|\s)(1\/2)\s$/,
  replace: n ?? "½"
}), yC = (n) => ce({
  find: /\+\/-$/,
  replace: n ?? "±"
}), bC = (n) => ce({
  find: /!=$/,
  replace: n ?? "≠"
}), kC = (n) => ce({
  find: /<<$/,
  replace: n ?? "«"
}), SC = (n) => ce({
  find: />>$/,
  replace: n ?? "»"
}), xC = (n) => ce({
  find: /\d+\s?([*x])\s?\d+$/,
  replace: n ?? "×"
}), wC = (n) => ce({
  find: /\^2$/,
  replace: n ?? "²"
}), MC = (n) => ce({
  find: /\^3$/,
  replace: n ?? "³"
}), CC = (n) => ce({
  find: /(?:^|\s)(1\/4)\s$/,
  replace: n ?? "¼"
}), TC = (n) => ce({
  find: /(?:^|\s)(3\/4)\s$/,
  replace: n ?? "¾"
}), OC = be.create({
  name: "typography",
  addOptions() {
    return {
      closeDoubleQuote: "”",
      closeSingleQuote: "’",
      copyright: "©",
      ellipsis: "…",
      emDash: "—",
      laquo: "«",
      leftArrow: "←",
      multiplication: "×",
      notEqual: "≠",
      oneHalf: "½",
      oneQuarter: "¼",
      openDoubleQuote: "“",
      openSingleQuote: "‘",
      plusMinus: "±",
      raquo: "»",
      registeredTrademark: "®",
      rightArrow: "→",
      servicemark: "℠",
      superscriptThree: "³",
      superscriptTwo: "²",
      threeQuarters: "¾",
      trademark: "™"
    };
  },
  addInputRules() {
    const n = [];
    return this.options.emDash !== !1 && n.push(iC(this.options.emDash)), this.options.ellipsis !== !1 && n.push(sC(this.options.ellipsis)), this.options.openDoubleQuote !== !1 && n.push(oC(this.options.openDoubleQuote)), this.options.closeDoubleQuote !== !1 && n.push(lC(this.options.closeDoubleQuote)), this.options.openSingleQuote !== !1 && n.push(aC(this.options.openSingleQuote)), this.options.closeSingleQuote !== !1 && n.push(cC(this.options.closeSingleQuote)), this.options.leftArrow !== !1 && n.push(uC(this.options.leftArrow)), this.options.rightArrow !== !1 && n.push(dC(this.options.rightArrow)), this.options.copyright !== !1 && n.push(fC(this.options.copyright)), this.options.trademark !== !1 && n.push(hC(this.options.trademark)), this.options.servicemark !== !1 && n.push(pC(this.options.servicemark)), this.options.registeredTrademark !== !1 && n.push(mC(this.options.registeredTrademark)), this.options.oneHalf !== !1 && n.push(gC(this.options.oneHalf)), this.options.plusMinus !== !1 && n.push(yC(this.options.plusMinus)), this.options.notEqual !== !1 && n.push(bC(this.options.notEqual)), this.options.laquo !== !1 && n.push(kC(this.options.laquo)), this.options.raquo !== !1 && n.push(SC(this.options.raquo)), this.options.multiplication !== !1 && n.push(xC(this.options.multiplication)), this.options.superscriptTwo !== !1 && n.push(wC(this.options.superscriptTwo)), this.options.superscriptThree !== !1 && n.push(MC(this.options.superscriptThree)), this.options.oneQuarter !== !1 && n.push(CC(this.options.oneQuarter)), this.options.threeQuarters !== !1 && n.push(TC(this.options.threeQuarters)), n;
  }
});
function Sl({ level: n }) {
  return /* @__PURE__ */ Je(
    Vr,
    {
      component: "span",
      sx: { fontSize: "0.7rem", fontWeight: 800, lineHeight: 1, letterSpacing: 0 },
      children: [
        "H",
        n
      ]
    }
  );
}
function vC({ editor: n, config: e }) {
  const t = ii(), r = Ki(null), i = Ki(null), s = Nc(t.palette.primary.main, 0.15), o = Nc(t.palette.primary.main, 0.25), l = () => n.chain().focus(), c = n.can();
  function d(f) {
    switch (f) {
      case "bold":
        return {
          icon: /* @__PURE__ */ O(By, { fontSize: "small" }),
          label: "Bold (Ctrl+B)",
          action: () => l().toggleBold().run(),
          isActive: n.isActive("bold")
        };
      case "italic":
        return {
          icon: /* @__PURE__ */ O(zy, { fontSize: "small" }),
          label: "Italic (Ctrl+I)",
          action: () => l().toggleItalic().run(),
          isActive: n.isActive("italic")
        };
      case "underline":
        return {
          icon: /* @__PURE__ */ O(Hy, { fontSize: "small" }),
          label: "Underline (Ctrl+U)",
          action: () => l().toggleUnderline().run(),
          isActive: n.isActive("underline")
        };
      case "strike":
        return {
          icon: /* @__PURE__ */ O($y, { fontSize: "small" }),
          label: "Strikethrough",
          action: () => l().toggleStrike().run(),
          isActive: n.isActive("strike")
        };
      case "h1":
        return {
          icon: /* @__PURE__ */ O(Sl, { level: 1 }),
          label: "Heading 1",
          action: () => l().toggleHeading({ level: 1 }).run(),
          isActive: n.isActive("heading", { level: 1 })
        };
      case "h2":
        return {
          icon: /* @__PURE__ */ O(Sl, { level: 2 }),
          label: "Heading 2",
          action: () => l().toggleHeading({ level: 2 }).run(),
          isActive: n.isActive("heading", { level: 2 })
        };
      case "h3":
        return {
          icon: /* @__PURE__ */ O(Sl, { level: 3 }),
          label: "Heading 3",
          action: () => l().toggleHeading({ level: 3 }).run(),
          isActive: n.isActive("heading", { level: 3 })
        };
      case "bulletList":
        return {
          icon: /* @__PURE__ */ O(Wy, { fontSize: "small" }),
          label: "Bullet list",
          action: () => l().toggleBulletList().run(),
          isActive: n.isActive("bulletList")
        };
      case "orderedList":
        return {
          icon: /* @__PURE__ */ O(Vy, { fontSize: "small" }),
          label: "Ordered list",
          action: () => l().toggleOrderedList().run(),
          isActive: n.isActive("orderedList")
        };
      case "blockquote":
        return {
          icon: /* @__PURE__ */ O(Yy, { fontSize: "small" }),
          label: "Blockquote",
          action: () => l().toggleBlockquote().run(),
          isActive: n.isActive("blockquote")
        };
      case "link":
        return {
          icon: /* @__PURE__ */ O(jy, { fontSize: "small" }),
          label: "Insert link",
          action: () => {
            const h = n.getAttributes("link").href, g = window.prompt("URL:", h ?? "https://");
            g !== null && (g === "" ? l().unsetLink().run() : l().setLink({ href: g }).run());
          },
          isActive: n.isActive("link")
        };
      case "image":
        return {
          icon: /* @__PURE__ */ O(Uy, { fontSize: "small" }),
          label: "Insert image",
          action: () => {
            const h = window.prompt("Image URL:");
            h && l().setImage({ src: h }).run();
          },
          isActive: !1
        };
      case "alignLeft":
        return {
          icon: /* @__PURE__ */ O(qy, { fontSize: "small" }),
          label: "Align left",
          action: () => l().setTextAlign("left").run(),
          isActive: n.isActive({ textAlign: "left" })
        };
      case "alignCenter":
        return {
          icon: /* @__PURE__ */ O(Gy, { fontSize: "small" }),
          label: "Align center",
          action: () => l().setTextAlign("center").run(),
          isActive: n.isActive({ textAlign: "center" })
        };
      case "alignRight":
        return {
          icon: /* @__PURE__ */ O(Ky, { fontSize: "small" }),
          label: "Align right",
          action: () => l().setTextAlign("right").run(),
          isActive: n.isActive({ textAlign: "right" })
        };
      case "alignJustify":
        return {
          icon: /* @__PURE__ */ O(Jy, { fontSize: "small" }),
          label: "Justify",
          action: () => l().setTextAlign("justify").run(),
          isActive: n.isActive({ textAlign: "justify" })
        };
      case "textColor":
        return {
          icon: /* @__PURE__ */ O(Qy, { fontSize: "small" }),
          label: "Text color",
          action: () => {
            var h;
            return (h = r.current) == null ? void 0 : h.click();
          },
          isActive: !1
        };
      case "bgColor":
        return {
          icon: /* @__PURE__ */ O(Zy, { fontSize: "small" }),
          label: "Background color",
          action: () => {
            var h;
            return (h = i.current) == null ? void 0 : h.click();
          },
          isActive: !1
        };
      case "rtl":
        return {
          icon: /* @__PURE__ */ O(Xy, { fontSize: "small" }),
          label: "RTL direction",
          action: () => l().updateAttributes("paragraph", { dir: "rtl" }).run(),
          isActive: n.isActive("paragraph", { dir: "rtl" })
        };
      case "ltr":
        return {
          icon: /* @__PURE__ */ O(e0, { fontSize: "small" }),
          label: "LTR direction",
          action: () => l().updateAttributes("paragraph", { dir: "ltr" }).run(),
          isActive: n.isActive("paragraph", { dir: "ltr" })
        };
      case "undo":
        return {
          icon: /* @__PURE__ */ O(t0, { fontSize: "small" }),
          label: "Undo (Ctrl+Z)",
          action: () => l().undo().run(),
          isActive: !1,
          disabled: !c.undo()
        };
      case "redo":
        return {
          icon: /* @__PURE__ */ O(n0, { fontSize: "small" }),
          label: "Redo (Ctrl+Shift+Z)",
          action: () => l().redo().run(),
          isActive: !1,
          disabled: !c.redo()
        };
      case "clearFormat":
        return {
          icon: /* @__PURE__ */ O(r0, { fontSize: "small" }),
          label: "Clear formatting",
          action: () => l().unsetAllMarks().clearNodes().run(),
          isActive: !1
        };
      default:
        return { icon: null, label: String(f), action: () => {
        }, isActive: !1 };
    }
  }
  return /* @__PURE__ */ Je(
    bd,
    {
      elevation: 1,
      className: "ips-rte-toolbar",
      sx: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        gap: 0.5,
        px: 1,
        py: 0.5,
        position: "sticky",
        top: 0,
        zIndex: 1,
        borderRadius: "4px 4px 0 0",
        borderBottom: `1px solid ${t.palette.divider}`
      },
      children: [
        /* @__PURE__ */ O(
          "input",
          {
            type: "color",
            ref: r,
            style: { position: "absolute", opacity: 0, pointerEvents: "none", width: 0, height: 0 },
            onChange: (f) => l().setColor(f.target.value).run()
          }
        ),
        /* @__PURE__ */ O(
          "input",
          {
            type: "color",
            ref: i,
            style: { position: "absolute", opacity: 0, pointerEvents: "none", width: 0, height: 0 },
            onChange: (f) => l().setHighlight({ color: f.target.value }).run()
          }
        ),
        e.groups.map((f, h) => /* @__PURE__ */ Je(he.Fragment, { children: [
          h > 0 && /* @__PURE__ */ O(Fy, { orientation: "vertical", flexItem: !0, sx: { mx: 0.5, my: 0.25 } }),
          f.items.map((g) => {
            const { icon: y, label: b, action: S, isActive: x, disabled: w } = d(g);
            return /* @__PURE__ */ O(sa, { title: b, placement: "top", children: /* @__PURE__ */ O("span", { children: /* @__PURE__ */ O(
              ia,
              {
                size: "small",
                onClick: S,
                disabled: w ?? !1,
                "aria-pressed": x,
                "aria-label": b,
                sx: {
                  borderRadius: 1,
                  p: 0.5,
                  bgcolor: x ? s : "transparent",
                  "&:hover": {
                    bgcolor: x ? o : void 0
                  }
                },
                children: y
              }
            ) }) }, g);
          })
        ] }, h))
      ]
    }
  );
}
const EC = {
  groups: [
    { items: ["bold", "italic", "underline", "strike"] },
    { items: ["h1", "h2", "h3"] },
    { items: ["bulletList", "orderedList", "blockquote"] },
    { items: ["link", "image"] },
    { items: ["alignLeft", "alignCenter", "alignRight", "alignJustify"] },
    { items: ["textColor", "bgColor"] },
    { items: ["rtl", "ltr"] },
    { items: ["undo", "redo", "clearFormat"] }
  ]
}, AC = wh.extend({
  addAttributes() {
    var n;
    return {
      ...(n = this.parent) == null ? void 0 : n.call(this),
      dir: {
        default: null,
        renderHTML: (e) => e.dir ? { dir: e.dir } : {},
        parseHTML: (e) => e.getAttribute("dir")
      }
    };
  }
}), DC = ke(
  function({
    value: e,
    onChange: t,
    defaultValue: r,
    placeholder: i,
    readOnly: s = !1,
    disabled: o = !1,
    label: l,
    error: c = !1,
    helperText: d,
    dir: f = "auto",
    minHeight: h = 200,
    maxHeight: g,
    toolbar: y = EC,
    onBlur: b,
    onFocus: S,
    sx: x,
    className: w
  }, T) {
    const v = ii(), _ = Ki(t);
    _.current = t;
    const I = kw({
      extensions: [
        // Disable StarterKit's built-in Paragraph so our DirectionParagraph
        // (which adds the `dir` attribute) is used instead.
        xM.configure({ paragraph: !1 }),
        AC,
        wM,
        qM.configure({ openOnClick: !1, autolink: !0 }),
        KM,
        JM.configure({ types: ["heading", "paragraph"] }),
        ZM,
        XM,
        nC.configure({ multicolor: !0 }),
        rC.configure({ placeholder: i ?? "" }),
        OC
      ],
      // Controlled: seed with `value`; Uncontrolled: seed with `defaultValue`.
      content: e !== void 0 ? e ?? "" : r ?? "",
      editable: !s,
      onUpdate: ({ editor: Q }) => {
        var ee;
        (ee = _.current) == null || ee.call(_, Q.getHTML());
      },
      onBlur: ({ event: Q }) => {
        b == null || b(Q);
      },
      onFocus: ({ event: Q }) => {
        S == null || S(Q);
      }
    });
    Ji(() => {
      !I || I.isDestroyed || e !== void 0 && I.getHTML() !== e && I.commands.setContent(e, !1);
    }, [I, e]), Ji(() => {
      !I || I.isDestroyed || I.setEditable(!s);
    }, [I, s]);
    const P = c ? v.palette.error.main : v.palette.divider, E = c ? v.palette.error.main : v.palette.primary.main, z = typeof h == "number" ? `${h}px` : h, j = g ? typeof g == "number" ? `${g}px` : g : void 0;
    return /* @__PURE__ */ Je(
      Ge,
      {
        ref: T,
        className: `ips-rich-text-editor${w ? ` ${w}` : ""}`,
        sx: {
          display: "flex",
          flexDirection: "column",
          opacity: o ? 0.5 : 1,
          pointerEvents: o ? "none" : void 0,
          cursor: o ? "not-allowed" : void 0,
          ...x
        },
        children: [
          l && /* @__PURE__ */ O(
            Vr,
            {
              variant: "body2",
              color: c ? "error" : "text.secondary",
              sx: { mb: 0.5, fontWeight: 500 },
              children: l
            }
          ),
          /* @__PURE__ */ Je(
            Ge,
            {
              sx: {
                border: `2px solid ${P}`,
                borderRadius: 1,
                overflow: "hidden",
                transition: "border-color 0.15s",
                "&:focus-within": s ? {} : { borderColor: E }
              },
              children: [
                !s && I && /* @__PURE__ */ O(vC, { editor: I, config: y }),
                /* @__PURE__ */ O(
                  Ge,
                  {
                    className: "ips-rte-content",
                    dir: f,
                    sx: {
                      minHeight: z,
                      maxHeight: j,
                      overflow: j ? "auto" : void 0,
                      // ProseMirror root element
                      "& .ProseMirror": {
                        padding: "12px 16px",
                        outline: "none",
                        cursor: s ? "default" : "text",
                        fontFamily: "inherit",
                        minHeight: z,
                        boxSizing: "border-box"
                      },
                      // Placeholder text
                      "& .ProseMirror p.is-editor-empty:first-of-type::before": {
                        content: "attr(data-placeholder)",
                        float: "left",
                        color: v.palette.text.disabled,
                        pointerEvents: "none",
                        height: 0
                      },
                      // Hyperlinks
                      "& .ProseMirror a": {
                        color: v.palette.primary.main,
                        textDecoration: "underline"
                      },
                      // Blockquote
                      "& .ProseMirror blockquote": {
                        borderLeft: `3px solid ${v.palette.grey[400]}`,
                        paddingLeft: "12px",
                        color: v.palette.grey[600],
                        margin: "0 0 8px",
                        fontStyle: "italic"
                      },
                      // Inline code
                      "& .ProseMirror code": {
                        background: v.palette.grey[100],
                        fontFamily: "monospace",
                        padding: "2px 4px",
                        borderRadius: "3px",
                        fontSize: "0.875em"
                      },
                      // Headings
                      "& .ProseMirror h1": { fontSize: "1.8em", margin: "8px 0" },
                      "& .ProseMirror h2": { fontSize: "1.5em", margin: "6px 0" },
                      "& .ProseMirror h3": { fontSize: "1.25em", margin: "4px 0" },
                      // Lists
                      "& .ProseMirror ul, & .ProseMirror ol": {
                        paddingLeft: "1.5em",
                        margin: "4px 0"
                      }
                    },
                    children: /* @__PURE__ */ O(cw, { editor: I })
                  }
                )
              ]
            }
          ),
          d && /* @__PURE__ */ O(
            Vr,
            {
              variant: "caption",
              color: c ? "error" : "text.secondary",
              sx: { mt: 0.5, px: 0.5 },
              children: d
            }
          )
        ]
      }
    );
  }
);
DC.displayName = "IpsRichTextEditor";
export {
  EC as DEFAULT_TOOLBAR,
  S0 as IpsAccordion,
  y0 as IpsAutocomplete,
  h0 as IpsButton,
  l0 as IpsCheckBox,
  b0 as IpsChipSelect,
  C0 as IpsDatePicker,
  T0 as IpsDateTimePicker,
  p0 as IpsIconButton,
  Q0 as IpsPillSelect,
  DC as IpsRichTextEditor,
  K0 as IpsRtlProvider,
  g0 as IpsSelect,
  c0 as IpsSwitch,
  O0 as IpsTable,
  Z0 as IpsTableLight,
  a0 as IpsTextArea,
  si as IpsTextField,
  M0 as IpsTimePicker,
  GT as IpsToastProvider,
  m0 as IpsToolTips,
  Er as TOAST_TYPES,
  v0 as ThemeContext,
  jT as ThemeProvider,
  qT as createLtrCache,
  G0 as createRtlCache,
  UT as directionFor,
  Sd as ipsTheme,
  q0 as isRtl,
  KT as useIpsToast,
  KT as useToast
};
