import Te, { forwardRef as Pe, useState as ce, useRef as Ye, useCallback as Lt, useEffect as Or, useMemo as sf, createContext as Pa, useContext as of, useDebugValue as lf, useLayoutEffect as af } from "react";
import { jsx as M, jsxs as Q, Fragment as La } from "react/jsx-runtime";
import cf from "@mui/material/TextField";
import fu from "@mui/material/InputAdornment";
import Mi from "@mui/material/Checkbox";
import uf from "@mui/material/FormControlLabel";
import ne from "@mui/material/Box";
import hu from "@mui/material/Switch";
import ct from "@mui/material/Button";
import Ts from "@mui/material/CircularProgress";
import za from "@mui/material/SvgIcon";
import { useTheme as or, alpha as hi } from "@mui/material/styles";
import Un from "@mui/material/IconButton";
import Er from "@mui/material/Tooltip";
import df from "@mui/material/FormControl";
import ff from "@mui/material/InputLabel";
import hf from "@mui/material/Select";
import pf from "@mui/material/MenuItem";
import v0 from "@mui/material/FormHelperText";
import T0 from "@mui/material/ListItemText";
import O0 from "@mui/material/Autocomplete";
import E0 from "@mui/material/Chip";
import { Accordion as A0, AccordionSummary as D0, AccordionDetails as N0, SvgIcon as R0 } from "@mui/material";
import { TimePicker as I0 } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider as Fa } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment as _0 } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker as P0 } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns as mf } from "@mui/x-date-pickers/AdapterDateFns";
import { DateTimePicker as L0 } from "@mui/x-date-pickers/DateTimePicker";
import { DataGrid as z0 } from "@mui/x-data-grid";
import F0 from "@mui/material/Stack";
import B0 from "@mui/icons-material/Save";
import H0 from "@mui/icons-material/DeleteSweep";
import Ie from "@mui/material/Typography";
import W0 from "@mui/material/Alert";
import $0 from "@mui/material/Snackbar";
import Ul from "@mui/icons-material/CameraAlt";
import ql from "@mui/icons-material/Scanner";
import V0 from "@mui/icons-material/FolderOpen";
import Y0 from "@mui/icons-material/ScreenshotMonitor";
import Ba from "@mui/material/Dialog";
import Ha from "@mui/material/DialogTitle";
import Wa from "@mui/material/DialogContent";
import gf from "@mui/material/DialogActions";
import j0 from "@mui/icons-material/FlipCameraAndroid";
import yf from "@mui/icons-material/Image";
import U0 from "@mui/icons-material/PictureAsPdf";
import q0 from "@mui/icons-material/InsertDriveFile";
import K0 from "@mui/icons-material/Visibility";
import G0 from "@mui/icons-material/Delete";
import bf from "@mui/icons-material/Close";
import Sf from "@emotion/cache";
import { CacheProvider as J0 } from "@emotion/react";
import Q0 from "@mui/material/ButtonBase";
import Z0 from "@mui/material/TableContainer";
import X0 from "@mui/material/Table";
import eb from "@mui/material/TableHead";
import tb from "@mui/material/TableBody";
import ul from "@mui/material/TableRow";
import dl from "@mui/material/TableCell";
import wf from "@mui/material/Paper";
import kf from "react-dom";
import nb from "@mui/icons-material/CheckCircleOutline";
import rb from "@mui/icons-material/InfoOutlined";
import sb from "@mui/icons-material/WarningAmber";
import ib from "@mui/icons-material/ErrorOutline";
import ob from "@mui/material/Divider";
import pu from "@mui/material/Popover";
import lb from "@mui/icons-material/ExpandMore";
import ab from "@mui/icons-material/FormatBold";
import cb from "@mui/icons-material/FormatItalic";
import ub from "@mui/icons-material/FormatUnderlined";
import db from "@mui/icons-material/StrikethroughS";
import fb from "@mui/icons-material/FormatListBulleted";
import hb from "@mui/icons-material/FormatListNumbered";
import pb from "@mui/icons-material/FormatQuote";
import mb from "@mui/icons-material/Link";
import gb from "@mui/icons-material/FormatAlignLeft";
import yb from "@mui/icons-material/FormatAlignCenter";
import bb from "@mui/icons-material/FormatAlignRight";
import Sb from "@mui/icons-material/FormatAlignJustify";
import wb from "@mui/icons-material/FormatColorText";
import kb from "@mui/icons-material/FormatColorFill";
import xb from "@mui/icons-material/FormatTextdirectionRToL";
import Cb from "@mui/icons-material/FormatTextdirectionLToR";
import Mb from "@mui/icons-material/Undo";
import vb from "@mui/icons-material/Redo";
import Tb from "@mui/icons-material/FormatClear";
import Ob from "@mui/icons-material/AttachFile";
import Eb from "@mui/icons-material/TableChart";
const Ab = {
  white: "#FFFFFF",
  black: "#000000",
  gray100: "#F7FAFC",
  gray500: "#6B7280",
  gray900: "#111827",
  primary: "#2563EB",
  primaryDark: "#1D4ED8",
  success: "#16A34A",
  danger: "#DC2626"
}, Db = {
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
}, Nb = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px"
}, xf = {
  colors: Ab,
  typography: Db,
  spacing: Nb,
  borderRadius: "6px"
}, Os = Pe(
  (n, e) => {
    const {
      startAdornment: t,
      endAdornment: r,
      InputProps: s,
      inputProps: i,
      className: o,
      readOnly: l,
      ...a
    } = n, u = {
      ...i,
      readOnly: l ? !0 : i == null ? void 0 : i.readOnly
    }, d = {
      ref: e,
      startAdornment: t ? /* @__PURE__ */ M(fu, { position: "start", children: t }) : s == null ? void 0 : s.startAdornment,
      endAdornment: r ? /* @__PURE__ */ M(fu, { position: "end", children: r }) : s == null ? void 0 : s.endAdornment,
      ...s
    };
    return /* @__PURE__ */ M(
      cf,
      {
        ...a,
        slotProps: { input: d, htmlInput: u },
        className: ["ips-text-field", o].filter(Boolean).join(" ")
      }
    );
  }
);
Os.displayName = "IpsTextField";
const Rb = Pe(
  (n, e) => {
    const { label: t, labelPlacement: r = "end", className: s, ...i } = n, o = ["ips-checkbox", s].filter(Boolean).join(" ");
    return t !== void 0 ? /* @__PURE__ */ M(
      uf,
      {
        className: o,
        control: /* @__PURE__ */ M(Mi, { ...i, slotProps: { input: { ref: e } } }),
        label: t,
        labelPlacement: r
      }
    ) : /* @__PURE__ */ M(Mi, { className: o, slotProps: { input: { ref: e } }, ...i });
  }
);
Rb.displayName = "IpsCheckBox";
const Ib = Pe(
  (n, e) => {
    const {
      rows: t = 4,
      maxLength: r,
      className: s,
      helperText: i,
      defaultValue: o,
      value: l,
      onChange: a,
      ...u
    } = n, d = l !== void 0, [h, p] = ce(() => o ?? ""), g = (d ? l : h) ?? "", b = (x) => {
      let v = x.currentTarget.value;
      r !== void 0 && v.length > r && (v = v.slice(0, r), x.target.value = v), d || p(v), a && a(x);
    }, S = r ? `${g.length} / ${r}` : null, w = /* @__PURE__ */ Q(
      ne,
      {
        component: "span",
        sx: { display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" },
        children: [
          /* @__PURE__ */ M(ne, { component: "span", children: i }),
          S ? /* @__PURE__ */ M(ne, { component: "span", sx: { color: "text.secondary", fontSize: "0.875rem" }, children: S }) : null
        ]
      }
    );
    return /* @__PURE__ */ M(
      cf,
      {
        ...u,
        multiline: !0,
        minRows: t,
        defaultValue: o,
        slotProps: { input: { ref: e } },
        className: ["ips-textarea", s].filter(Boolean).join(" "),
        helperText: w,
        onChange: b
      }
    );
  }
);
Ib.displayName = "IpsTextArea";
const _b = Pe(
  (n, e) => {
    const { label: t, labelPlacement: r = "end", className: s, ...i } = n, o = ["ips-switch", s].filter(Boolean).join(" ");
    return t !== void 0 ? /* @__PURE__ */ M(
      uf,
      {
        className: o,
        control: /* @__PURE__ */ M(hu, { ...i, slotProps: { input: { ref: e } } }),
        label: t,
        labelPlacement: r
      }
    ) : /* @__PURE__ */ M(hu, { className: o, slotProps: { input: { ref: e } }, ...i });
  }
);
_b.displayName = "IpsSwitch";
const Pb = (n) => /* @__PURE__ */ M(za, { ...n, children: /* @__PURE__ */ M("path", { d: "M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" }) }), Lb = (n) => /* @__PURE__ */ M(za, { ...n, children: /* @__PURE__ */ M("path", { d: "M17 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V7L17 3Z" }) }), zb = (n) => /* @__PURE__ */ M(za, { ...n, children: /* @__PURE__ */ M("path", { d: "M6 18L18 6M6 6l12 12", stroke: "currentColor", strokeWidth: "2", fill: "none" }) }), Fb = Pe((n, e) => {
  const { buttonType: t, loading: r, className: s, children: i, ...o } = n, a = or().direction === "rtl", u = { ...o };
  let d = u.variant, h = u.color, p = u.startIcon;
  if (t)
    switch (t) {
      case "add":
        d = "contained", h = "primary", p = p ?? /* @__PURE__ */ M(Pb, {});
        break;
      case "save":
        d = "contained", h = "primary", p = p ?? /* @__PURE__ */ M(Lb, {});
        break;
      case "clean":
        d = "outlined", h = "inherit", p = p ?? /* @__PURE__ */ M(zb, {});
        break;
      case "primary":
        d = "contained", h = "primary";
        break;
      case "secondary":
        d = "outlined", h = "secondary";
        break;
    }
  r && (u.disabled = !0, p = /* @__PURE__ */ M(Ts, { size: 16, color: "inherit" }));
  const g = ["ips-button", s].filter(Boolean).join(" "), b = a ? void 0 : p, S = a ? p : u.endIcon;
  return /* @__PURE__ */ M(
    ct,
    {
      ...u,
      variant: d,
      color: h,
      startIcon: b,
      endIcon: S,
      ref: e,
      className: g,
      children: i
    }
  );
});
Fb.displayName = "IpsButton";
const Bb = Pe(
  ({ icon: n, tooltip: e, className: t, ...r }, s) => {
    const i = ["ips-icon-button", t].filter(Boolean).join(" "), o = /* @__PURE__ */ M(
      Un,
      {
        ref: s,
        className: i,
        ...r,
        children: n
      }
    );
    return e ? /* @__PURE__ */ M(Er, { title: e, children: o }) : o;
  }
);
Bb.displayName = "IpsIconButton";
const Hb = Pe(
  (n, e) => {
    var a;
    const {
      arrow: t = !0,
      placement: r = "top",
      className: s,
      componentsProps: i,
      ...o
    } = n, l = {
      ...i,
      tooltip: {
        ...(i == null ? void 0 : i.tooltip) || {},
        className: ["ips-tooltip", (a = i == null ? void 0 : i.tooltip) == null ? void 0 : a.className, s].filter(Boolean).join(" ")
      }
    };
    return /* @__PURE__ */ M(
      Er,
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
Hb.displayName = "IpsToolTips";
const Wb = Pe(
  (n, e) => {
    const {
      options: t = [],
      value: r,
      onChange: s,
      label: i,
      readOnly: o = !1,
      placeholder: l,
      error: a = !1,
      helperText: u,
      multiple: d = !1,
      disabled: h = !1,
      className: p,
      ...g
    } = n, b = ["ips-select", p].filter(Boolean).join(" ");
    return /* @__PURE__ */ Q(
      df,
      {
        className: b,
        error: a,
        disabled: h || o,
        fullWidth: !0,
        children: [
          i && /* @__PURE__ */ M(ff, { children: i }),
          /* @__PURE__ */ M(
            hf,
            {
              ref: e,
              value: r ?? (d ? [] : ""),
              onChange: (x) => {
                s && !o && s(x.target.value);
              },
              label: i,
              multiple: d,
              displayEmpty: !!l,
              renderValue: (x) => {
                var v;
                return d && Array.isArray(x) ? x.length === 0 ? l || "" : x.map((T) => {
                  var D;
                  return ((D = t.find((A) => A.value === T)) == null ? void 0 : D.label) || T;
                }).join(", ") : x === "" || x === void 0 ? l || "" : ((v = t.find((T) => T.value === x)) == null ? void 0 : v.label) || x;
              },
              sx: o ? {
                pointerEvents: "none",
                "& .MuiSelect-icon": {
                  display: "none"
                }
              } : {},
              ...g,
              children: t.map((x) => /* @__PURE__ */ M(pf, { value: x.value, children: d ? /* @__PURE__ */ Q(La, { children: [
                /* @__PURE__ */ M(
                  Mi,
                  {
                    checked: Array.isArray(r) ? r.includes(x.value) : r === x.value
                  }
                ),
                /* @__PURE__ */ M(T0, { primary: x.label })
              ] }) : x.label }, x.value))
            }
          ),
          u && /* @__PURE__ */ M(v0, { children: u })
        ]
      }
    );
  }
);
Wb.displayName = "IpsSelect";
const $b = Pe((n, e) => {
  const {
    showCheckboxes: t = !0,
    className: r,
    multiple: s = !1,
    renderOption: i,
    renderInput: o,
    disabled: l = !1,
    loading: a = !1,
    label: u,
    ...d
  } = n, p = or().direction === "rtl", g = (w, x, { selected: v }) => {
    const { key: T, ...D } = w;
    if (typeof i == "function")
      return i(D, x, { selected: v });
    const A = s && t, R = typeof x == "string" ? x : (x == null ? void 0 : x.label) || String(x);
    return /* @__PURE__ */ Q("li", { ...D, children: [
      A && /* @__PURE__ */ M(
        Mi,
        {
          checked: v,
          style: p ? { marginLeft: 8 } : { marginRight: 8 }
        }
      ),
      R
    ] }, T);
  }, b = (w) => o ? o(w) : /* @__PURE__ */ M(Os, { ...w, label: u }), S = ["ips-autocomplete", r].filter(Boolean).join(" ");
  return /* @__PURE__ */ M(
    O0,
    {
      ref: e,
      multiple: s,
      disabled: l,
      loading: a,
      renderOption: g,
      renderInput: b,
      className: S,
      ...d
    }
  );
});
$b.displayName = "IpsAutocomplete";
const Vb = Pe(
  (n, e) => {
    const {
      options: t = [],
      value: r = [],
      onChange: s,
      label: i,
      placeholder: o,
      disabled: l = !1,
      className: a,
      ...u
    } = n, d = ["ips-chip-select", a].filter(Boolean).join(" "), h = (b) => {
      if (l) return;
      const S = r.filter(
        (w) => w !== b
      );
      s == null || s(S);
    };
    return /* @__PURE__ */ Q(df, { fullWidth: !0, disabled: l, className: d, children: [
      i && /* @__PURE__ */ M(ff, { children: i }),
      /* @__PURE__ */ M(
        hf,
        {
          ref: e,
          multiple: !0,
          value: r,
          onChange: (b) => {
            const S = b.target.value;
            s == null || s(S);
          },
          label: i,
          renderValue: (b) => !b || b.length === 0 ? /* @__PURE__ */ M("span", { style: { color: "#999" }, children: o || "Select items..." }) : /* @__PURE__ */ M(ne, { sx: { display: "flex", flexWrap: "wrap", gap: 0.5 }, children: b.map((S) => {
            const w = t.find((v) => v.value === S), x = (w == null ? void 0 : w.label) || String(S);
            return /* @__PURE__ */ M(
              E0,
              {
                label: x,
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
          displayEmpty: !i,
          ...u,
          children: t.map((b) => /* @__PURE__ */ M(pf, { value: b.value, children: b.label }, b.value))
        }
      )
    ] });
  }
);
Vb.displayName = "IpsChipSelect";
const Yb = (n) => /* @__PURE__ */ M(R0, { ...n, children: /* @__PURE__ */ M("path", { d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" }) }), jb = Pe(
  ({
    summary: n,
    children: e,
    className: t,
    defaultExpanded: r = !1,
    disabled: s = !1,
    onChange: i,
    ...o
  }, l) => {
    const a = [
      "ips-accordion",
      t
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ Q(
      A0,
      {
        ref: l,
        className: a,
        defaultExpanded: r,
        disabled: s,
        onChange: i,
        ...o,
        children: [
          /* @__PURE__ */ M(
            D0,
            {
              expandIcon: /* @__PURE__ */ M(Yb, {}),
              "aria-controls": "accordion-content",
              id: "accordion-header",
              children: n
            }
          ),
          /* @__PURE__ */ M(N0, { id: "accordion-content", children: e })
        ]
      }
    );
  }
);
jb.displayName = "IpsAccordion";
var Cf = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ub(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function Mf(n) {
  throw new Error('Could not dynamically require "' + n + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var fl = { exports: {} }, mu;
function qb() {
  return mu || (mu = 1, function(n, e) {
    (function(t, r) {
      n.exports = r();
    })(Cf, function() {
      var t;
      function r() {
        return t.apply(null, arguments);
      }
      function s(c) {
        t = c;
      }
      function i(c) {
        return c instanceof Array || Object.prototype.toString.call(c) === "[object Array]";
      }
      function o(c) {
        return c != null && Object.prototype.toString.call(c) === "[object Object]";
      }
      function l(c, f) {
        return Object.prototype.hasOwnProperty.call(c, f);
      }
      function a(c) {
        if (Object.getOwnPropertyNames)
          return Object.getOwnPropertyNames(c).length === 0;
        var f;
        for (f in c)
          if (l(c, f))
            return !1;
        return !0;
      }
      function u(c) {
        return c === void 0;
      }
      function d(c) {
        return typeof c == "number" || Object.prototype.toString.call(c) === "[object Number]";
      }
      function h(c) {
        return c instanceof Date || Object.prototype.toString.call(c) === "[object Date]";
      }
      function p(c, f) {
        var m = [], y, k = c.length;
        for (y = 0; y < k; ++y)
          m.push(f(c[y], y));
        return m;
      }
      function g(c, f) {
        for (var m in f)
          l(f, m) && (c[m] = f[m]);
        return l(f, "toString") && (c.toString = f.toString), l(f, "valueOf") && (c.valueOf = f.valueOf), c;
      }
      function b(c, f, m, y) {
        return Vc(c, f, m, y, !0).utc();
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
      function w(c) {
        return c._pf == null && (c._pf = S()), c._pf;
      }
      var x;
      Array.prototype.some ? x = Array.prototype.some : x = function(c) {
        var f = Object(this), m = f.length >>> 0, y;
        for (y = 0; y < m; y++)
          if (y in f && c.call(this, f[y], y, f))
            return !0;
        return !1;
      };
      function v(c) {
        var f = null, m = !1, y = c._d && !isNaN(c._d.getTime());
        if (y && (f = w(c), m = x.call(f.parsedDateParts, function(k) {
          return k != null;
        }), y = f.overflow < 0 && !f.empty && !f.invalidEra && !f.invalidMonth && !f.invalidWeekday && !f.weekdayMismatch && !f.nullInput && !f.invalidFormat && !f.userInvalidated && (!f.meridiem || f.meridiem && m), c._strict && (y = y && f.charsLeftOver === 0 && f.unusedTokens.length === 0 && f.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(c))
          c._isValid = y;
        else
          return y;
        return c._isValid;
      }
      function T(c) {
        var f = b(NaN);
        return c != null ? g(w(f), c) : w(f).userInvalidated = !0, f;
      }
      var D = r.momentProperties = [], A = !1;
      function R(c, f) {
        var m, y, k, C = D.length;
        if (u(f._isAMomentObject) || (c._isAMomentObject = f._isAMomentObject), u(f._i) || (c._i = f._i), u(f._f) || (c._f = f._f), u(f._l) || (c._l = f._l), u(f._strict) || (c._strict = f._strict), u(f._tzm) || (c._tzm = f._tzm), u(f._isUTC) || (c._isUTC = f._isUTC), u(f._offset) || (c._offset = f._offset), u(f._pf) || (c._pf = w(f)), u(f._locale) || (c._locale = f._locale), C > 0)
          for (m = 0; m < C; m++)
            y = D[m], k = f[y], u(k) || (c[y] = k);
        return c;
      }
      function O(c) {
        R(this, c), this._d = new Date(c._d != null ? c._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), A === !1 && (A = !0, r.updateOffset(this), A = !1);
      }
      function L(c) {
        return c instanceof O || c != null && c._isAMomentObject != null;
      }
      function Y(c) {
        r.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + c);
      }
      function te(c, f) {
        var m = !0;
        return g(function() {
          if (r.deprecationHandler != null && r.deprecationHandler(null, c), m) {
            var y = [], k, C, E, F = arguments.length;
            for (C = 0; C < F; C++) {
              if (k = "", typeof arguments[C] == "object") {
                k += `
[` + C + "] ";
                for (E in arguments[0])
                  l(arguments[0], E) && (k += E + ": " + arguments[0][E] + ", ");
                k = k.slice(0, -2);
              } else
                k = arguments[C];
              y.push(k);
            }
            Y(
              c + `
Arguments: ` + Array.prototype.slice.call(y).join("") + `
` + new Error().stack
            ), m = !1;
          }
          return f.apply(this, arguments);
        }, f);
      }
      var re = {};
      function ye(c, f) {
        r.deprecationHandler != null && r.deprecationHandler(c, f), re[c] || (Y(f), re[c] = !0);
      }
      r.suppressDeprecationWarnings = !1, r.deprecationHandler = null;
      function be(c) {
        return typeof Function < "u" && c instanceof Function || Object.prototype.toString.call(c) === "[object Function]";
      }
      function j(c) {
        var f, m;
        for (m in c)
          l(c, m) && (f = c[m], be(f) ? this[m] = f : this["_" + m] = f);
        this._config = c, this._dayOfMonthOrdinalParseLenient = new RegExp(
          (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
        );
      }
      function q(c, f) {
        var m = g({}, c), y;
        for (y in f)
          l(f, y) && (o(c[y]) && o(f[y]) ? (m[y] = {}, g(m[y], c[y]), g(m[y], f[y])) : f[y] != null ? m[y] = f[y] : delete m[y]);
        for (y in c)
          l(c, y) && !l(f, y) && o(c[y]) && (m[y] = g({}, m[y]));
        return m;
      }
      function W(c) {
        c != null && this.set(c);
      }
      var G;
      Object.keys ? G = Object.keys : G = function(c) {
        var f, m = [];
        for (f in c)
          l(c, f) && m.push(f);
        return m;
      };
      var we = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
      };
      function qe(c, f, m) {
        var y = this._calendar[c] || this._calendar.sameElse;
        return be(y) ? y.call(f, m) : y;
      }
      function oe(c, f, m) {
        var y = "" + Math.abs(c), k = f - y.length, C = c >= 0;
        return (C ? m ? "+" : "" : "-") + Math.pow(10, Math.max(0, k)).toString().substr(1) + y;
      }
      var Oe = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, At = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Dt = {}, dt = {};
      function B(c, f, m, y) {
        var k = y;
        typeof y == "string" && (k = function() {
          return this[y]();
        }), c && (dt[c] = k), f && (dt[f[0]] = function() {
          return oe(k.apply(this, arguments), f[1], f[2]);
        }), m && (dt[m] = function() {
          return this.localeData().ordinal(
            k.apply(this, arguments),
            c
          );
        });
      }
      function Nt(c) {
        return c.match(/\[[\s\S]/) ? c.replace(/^\[|\]$/g, "") : c.replace(/\\/g, "");
      }
      function Pn(c) {
        var f = c.match(Oe), m, y;
        for (m = 0, y = f.length; m < y; m++)
          dt[f[m]] ? f[m] = dt[f[m]] : f[m] = Nt(f[m]);
        return function(k) {
          var C = "", E;
          for (E = 0; E < y; E++)
            C += be(f[E]) ? f[E].call(k, c) : f[E];
          return C;
        };
      }
      function ar(c, f) {
        return c.isValid() ? (f = Rs(f, c.localeData()), Dt[f] = Dt[f] || Pn(f), Dt[f](c)) : c.localeData().invalidDate();
      }
      function Rs(c, f) {
        var m = 5;
        function y(k) {
          return f.longDateFormat(k) || k;
        }
        for (At.lastIndex = 0; m >= 0 && At.test(c); )
          c = c.replace(
            At,
            y
          ), At.lastIndex = 0, m -= 1;
        return c;
      }
      var Ro = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
      };
      function Io(c) {
        var f = this._longDateFormat[c], m = this._longDateFormat[c.toUpperCase()];
        return f || !m ? f : (this._longDateFormat[c] = m.match(Oe).map(function(y) {
          return y === "MMMM" || y === "MM" || y === "DD" || y === "dddd" ? y.slice(1) : y;
        }).join(""), this._longDateFormat[c]);
      }
      var _o = "Invalid date";
      function Po() {
        return this._invalidDate;
      }
      var Lo = "%d", zo = /\d{1,2}/;
      function Fo(c) {
        return this._ordinal.replace("%d", c);
      }
      var Bo = {
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
      function Ho(c, f, m, y) {
        var k = this._relativeTime[m];
        return be(k) ? k(c, f, m, y) : k.replace(/%d/i, c);
      }
      function Wo(c, f) {
        var m = this._relativeTime[c > 0 ? "future" : "past"];
        return be(m) ? m(f) : m.replace(/%s/i, f);
      }
      var Is = {
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
      function it(c) {
        return typeof c == "string" ? Is[c] || Is[c.toLowerCase()] : void 0;
      }
      function Lr(c) {
        var f = {}, m, y;
        for (y in c)
          l(c, y) && (m = it(y), m && (f[m] = c[y]));
        return f;
      }
      var $o = {
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
      function Vo(c) {
        var f = [], m;
        for (m in c)
          l(c, m) && f.push({ unit: m, priority: $o[m] });
        return f.sort(function(y, k) {
          return y.priority - k.priority;
        }), f;
      }
      var _s = /\d/, tt = /\d\d/, Ps = /\d{3}/, zr = /\d{4}/, cr = /[+-]?\d{6}/, ue = /\d\d?/, Ls = /\d\d\d\d?/, zs = /\d\d\d\d\d\d?/, ur = /\d{1,3}/, Fr = /\d{1,4}/, dr = /[+-]?\d{1,6}/, Wt = /\d+/, ln = /[+-]?\d+/, Yo = /Z|[+-]\d\d:?\d\d/gi, an = /Z|[+-]\d\d(?::?\d\d)?/gi, Fs = /[+-]?\d+(\.\d{1,3})?/, cn = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, $t = /^[1-9]\d?/, J = /^([1-9]\d|\d)/, He;
      He = {};
      function P(c, f, m) {
        He[c] = be(f) ? f : function(y, k) {
          return y && m ? m : f;
        };
      }
      function Ke(c, f) {
        return l(He, c) ? He[c](f._strict, f._locale) : new RegExp(ot(c));
      }
      function ot(c) {
        return mt(
          c.replace("\\", "").replace(
            /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
            function(f, m, y, k, C) {
              return m || y || k || C;
            }
          )
        );
      }
      function mt(c) {
        return c.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
      }
      function lt(c) {
        return c < 0 ? Math.ceil(c) || 0 : Math.floor(c);
      }
      function Z(c) {
        var f = +c, m = 0;
        return f !== 0 && isFinite(f) && (m = lt(f)), m;
      }
      var jo = {};
      function ae(c, f) {
        var m, y = f, k;
        for (typeof c == "string" && (c = [c]), d(f) && (y = function(C, E) {
          E[f] = Z(C);
        }), k = c.length, m = 0; m < k; m++)
          jo[c[m]] = y;
      }
      function Br(c, f) {
        ae(c, function(m, y, k, C) {
          k._w = k._w || {}, f(m, k._w, k, C);
        });
      }
      function Kp(c, f, m) {
        f != null && l(jo, c) && jo[c](f, m._a, m, c);
      }
      function Bs(c) {
        return c % 4 === 0 && c % 100 !== 0 || c % 400 === 0;
      }
      var Ge = 0, Vt = 1, Rt = 2, Re = 3, Mt = 4, Yt = 5, Ln = 6, Gp = 7, Jp = 8;
      B("Y", 0, 0, function() {
        var c = this.year();
        return c <= 9999 ? oe(c, 4) : "+" + c;
      }), B(0, ["YY", 2], 0, function() {
        return this.year() % 100;
      }), B(0, ["YYYY", 4], 0, "year"), B(0, ["YYYYY", 5], 0, "year"), B(0, ["YYYYYY", 6, !0], 0, "year"), P("Y", ln), P("YY", ue, tt), P("YYYY", Fr, zr), P("YYYYY", dr, cr), P("YYYYYY", dr, cr), ae(["YYYYY", "YYYYYY"], Ge), ae("YYYY", function(c, f) {
        f[Ge] = c.length === 2 ? r.parseTwoDigitYear(c) : Z(c);
      }), ae("YY", function(c, f) {
        f[Ge] = r.parseTwoDigitYear(c);
      }), ae("Y", function(c, f) {
        f[Ge] = parseInt(c, 10);
      });
      function Hr(c) {
        return Bs(c) ? 366 : 365;
      }
      r.parseTwoDigitYear = function(c) {
        return Z(c) + (Z(c) > 68 ? 1900 : 2e3);
      };
      var Oc = fr("FullYear", !0);
      function Qp() {
        return Bs(this.year());
      }
      function fr(c, f) {
        return function(m) {
          return m != null ? (Ec(this, c, m), r.updateOffset(this, f), this) : Wr(this, c);
        };
      }
      function Wr(c, f) {
        if (!c.isValid())
          return NaN;
        var m = c._d, y = c._isUTC;
        switch (f) {
          case "Milliseconds":
            return y ? m.getUTCMilliseconds() : m.getMilliseconds();
          case "Seconds":
            return y ? m.getUTCSeconds() : m.getSeconds();
          case "Minutes":
            return y ? m.getUTCMinutes() : m.getMinutes();
          case "Hours":
            return y ? m.getUTCHours() : m.getHours();
          case "Date":
            return y ? m.getUTCDate() : m.getDate();
          case "Day":
            return y ? m.getUTCDay() : m.getDay();
          case "Month":
            return y ? m.getUTCMonth() : m.getMonth();
          case "FullYear":
            return y ? m.getUTCFullYear() : m.getFullYear();
          default:
            return NaN;
        }
      }
      function Ec(c, f, m) {
        var y, k, C, E, F;
        if (!(!c.isValid() || isNaN(m))) {
          switch (y = c._d, k = c._isUTC, f) {
            case "Milliseconds":
              return void (k ? y.setUTCMilliseconds(m) : y.setMilliseconds(m));
            case "Seconds":
              return void (k ? y.setUTCSeconds(m) : y.setSeconds(m));
            case "Minutes":
              return void (k ? y.setUTCMinutes(m) : y.setMinutes(m));
            case "Hours":
              return void (k ? y.setUTCHours(m) : y.setHours(m));
            case "Date":
              return void (k ? y.setUTCDate(m) : y.setDate(m));
            case "FullYear":
              break;
            default:
              return;
          }
          C = m, E = c.month(), F = c.date(), F = F === 29 && E === 1 && !Bs(C) ? 28 : F, k ? y.setUTCFullYear(C, E, F) : y.setFullYear(C, E, F);
        }
      }
      function Zp(c) {
        return c = it(c), be(this[c]) ? this[c]() : this;
      }
      function Xp(c, f) {
        if (typeof c == "object") {
          c = Lr(c);
          var m = Vo(c), y, k = m.length;
          for (y = 0; y < k; y++)
            this[m[y].unit](c[m[y].unit]);
        } else if (c = it(c), be(this[c]))
          return this[c](f);
        return this;
      }
      function em(c, f) {
        return (c % f + f) % f;
      }
      var ve;
      Array.prototype.indexOf ? ve = Array.prototype.indexOf : ve = function(c) {
        var f;
        for (f = 0; f < this.length; ++f)
          if (this[f] === c)
            return f;
        return -1;
      };
      function Uo(c, f) {
        if (isNaN(c) || isNaN(f))
          return NaN;
        var m = em(f, 12);
        return c += (f - m) / 12, m === 1 ? Bs(c) ? 29 : 28 : 31 - m % 7 % 2;
      }
      B("M", ["MM", 2], "Mo", function() {
        return this.month() + 1;
      }), B("MMM", 0, 0, function(c) {
        return this.localeData().monthsShort(this, c);
      }), B("MMMM", 0, 0, function(c) {
        return this.localeData().months(this, c);
      }), P("M", ue, $t), P("MM", ue, tt), P("MMM", function(c, f) {
        return f.monthsShortRegex(c);
      }), P("MMMM", function(c, f) {
        return f.monthsRegex(c);
      }), ae(["M", "MM"], function(c, f) {
        f[Vt] = Z(c) - 1;
      }), ae(["MMM", "MMMM"], function(c, f, m, y) {
        var k = m._locale.monthsParse(c, y, m._strict);
        k != null ? f[Vt] = k : w(m).invalidMonth = c;
      });
      var tm = "January_February_March_April_May_June_July_August_September_October_November_December".split(
        "_"
      ), Ac = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Dc = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, nm = cn, rm = cn;
      function sm(c, f) {
        return c ? i(this._months) ? this._months[c.month()] : this._months[(this._months.isFormat || Dc).test(f) ? "format" : "standalone"][c.month()] : i(this._months) ? this._months : this._months.standalone;
      }
      function im(c, f) {
        return c ? i(this._monthsShort) ? this._monthsShort[c.month()] : this._monthsShort[Dc.test(f) ? "format" : "standalone"][c.month()] : i(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
      }
      function om(c, f, m) {
        var y, k, C, E = c.toLocaleLowerCase();
        if (!this._monthsParse)
          for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], y = 0; y < 12; ++y)
            C = b([2e3, y]), this._shortMonthsParse[y] = this.monthsShort(
              C,
              ""
            ).toLocaleLowerCase(), this._longMonthsParse[y] = this.months(C, "").toLocaleLowerCase();
        return m ? f === "MMM" ? (k = ve.call(this._shortMonthsParse, E), k !== -1 ? k : null) : (k = ve.call(this._longMonthsParse, E), k !== -1 ? k : null) : f === "MMM" ? (k = ve.call(this._shortMonthsParse, E), k !== -1 ? k : (k = ve.call(this._longMonthsParse, E), k !== -1 ? k : null)) : (k = ve.call(this._longMonthsParse, E), k !== -1 ? k : (k = ve.call(this._shortMonthsParse, E), k !== -1 ? k : null));
      }
      function lm(c, f, m) {
        var y, k, C;
        if (this._monthsParseExact)
          return om.call(this, c, f, m);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), y = 0; y < 12; y++) {
          if (k = b([2e3, y]), m && !this._longMonthsParse[y] && (this._longMonthsParse[y] = new RegExp(
            "^" + this.months(k, "").replace(".", "") + "$",
            "i"
          ), this._shortMonthsParse[y] = new RegExp(
            "^" + this.monthsShort(k, "").replace(".", "") + "$",
            "i"
          )), !m && !this._monthsParse[y] && (C = "^" + this.months(k, "") + "|^" + this.monthsShort(k, ""), this._monthsParse[y] = new RegExp(C.replace(".", ""), "i")), m && f === "MMMM" && this._longMonthsParse[y].test(c))
            return y;
          if (m && f === "MMM" && this._shortMonthsParse[y].test(c))
            return y;
          if (!m && this._monthsParse[y].test(c))
            return y;
        }
      }
      function Nc(c, f) {
        if (!c.isValid())
          return c;
        if (typeof f == "string") {
          if (/^\d+$/.test(f))
            f = Z(f);
          else if (f = c.localeData().monthsParse(f), !d(f))
            return c;
        }
        var m = f, y = c.date();
        return y = y < 29 ? y : Math.min(y, Uo(c.year(), m)), c._isUTC ? c._d.setUTCMonth(m, y) : c._d.setMonth(m, y), c;
      }
      function Rc(c) {
        return c != null ? (Nc(this, c), r.updateOffset(this, !0), this) : Wr(this, "Month");
      }
      function am() {
        return Uo(this.year(), this.month());
      }
      function cm(c) {
        return this._monthsParseExact ? (l(this, "_monthsRegex") || Ic.call(this), c ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = nm), this._monthsShortStrictRegex && c ? this._monthsShortStrictRegex : this._monthsShortRegex);
      }
      function um(c) {
        return this._monthsParseExact ? (l(this, "_monthsRegex") || Ic.call(this), c ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = rm), this._monthsStrictRegex && c ? this._monthsStrictRegex : this._monthsRegex);
      }
      function Ic() {
        function c(K, se) {
          return se.length - K.length;
        }
        var f = [], m = [], y = [], k, C, E, F;
        for (k = 0; k < 12; k++)
          C = b([2e3, k]), E = mt(this.monthsShort(C, "")), F = mt(this.months(C, "")), f.push(E), m.push(F), y.push(F), y.push(E);
        f.sort(c), m.sort(c), y.sort(c), this._monthsRegex = new RegExp("^(" + y.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
          "^(" + m.join("|") + ")",
          "i"
        ), this._monthsShortStrictRegex = new RegExp(
          "^(" + f.join("|") + ")",
          "i"
        );
      }
      function dm(c, f, m, y, k, C, E) {
        var F;
        return c < 100 && c >= 0 ? (F = new Date(c + 400, f, m, y, k, C, E), isFinite(F.getFullYear()) && F.setFullYear(c)) : F = new Date(c, f, m, y, k, C, E), F;
      }
      function $r(c) {
        var f, m;
        return c < 100 && c >= 0 ? (m = Array.prototype.slice.call(arguments), m[0] = c + 400, f = new Date(Date.UTC.apply(null, m)), isFinite(f.getUTCFullYear()) && f.setUTCFullYear(c)) : f = new Date(Date.UTC.apply(null, arguments)), f;
      }
      function Hs(c, f, m) {
        var y = 7 + f - m, k = (7 + $r(c, 0, y).getUTCDay() - f) % 7;
        return -k + y - 1;
      }
      function _c(c, f, m, y, k) {
        var C = (7 + m - y) % 7, E = Hs(c, y, k), F = 1 + 7 * (f - 1) + C + E, K, se;
        return F <= 0 ? (K = c - 1, se = Hr(K) + F) : F > Hr(c) ? (K = c + 1, se = F - Hr(c)) : (K = c, se = F), {
          year: K,
          dayOfYear: se
        };
      }
      function Vr(c, f, m) {
        var y = Hs(c.year(), f, m), k = Math.floor((c.dayOfYear() - y - 1) / 7) + 1, C, E;
        return k < 1 ? (E = c.year() - 1, C = k + jt(E, f, m)) : k > jt(c.year(), f, m) ? (C = k - jt(c.year(), f, m), E = c.year() + 1) : (E = c.year(), C = k), {
          week: C,
          year: E
        };
      }
      function jt(c, f, m) {
        var y = Hs(c, f, m), k = Hs(c + 1, f, m);
        return (Hr(c) - y + k) / 7;
      }
      B("w", ["ww", 2], "wo", "week"), B("W", ["WW", 2], "Wo", "isoWeek"), P("w", ue, $t), P("ww", ue, tt), P("W", ue, $t), P("WW", ue, tt), Br(
        ["w", "ww", "W", "WW"],
        function(c, f, m, y) {
          f[y.substr(0, 1)] = Z(c);
        }
      );
      function fm(c) {
        return Vr(c, this._week.dow, this._week.doy).week;
      }
      var hm = {
        dow: 0,
        // Sunday is the first day of the week.
        doy: 6
        // The week that contains Jan 6th is the first week of the year.
      };
      function pm() {
        return this._week.dow;
      }
      function mm() {
        return this._week.doy;
      }
      function gm(c) {
        var f = this.localeData().week(this);
        return c == null ? f : this.add((c - f) * 7, "d");
      }
      function ym(c) {
        var f = Vr(this, 1, 4).week;
        return c == null ? f : this.add((c - f) * 7, "d");
      }
      B("d", 0, "do", "day"), B("dd", 0, 0, function(c) {
        return this.localeData().weekdaysMin(this, c);
      }), B("ddd", 0, 0, function(c) {
        return this.localeData().weekdaysShort(this, c);
      }), B("dddd", 0, 0, function(c) {
        return this.localeData().weekdays(this, c);
      }), B("e", 0, 0, "weekday"), B("E", 0, 0, "isoWeekday"), P("d", ue), P("e", ue), P("E", ue), P("dd", function(c, f) {
        return f.weekdaysMinRegex(c);
      }), P("ddd", function(c, f) {
        return f.weekdaysShortRegex(c);
      }), P("dddd", function(c, f) {
        return f.weekdaysRegex(c);
      }), Br(["dd", "ddd", "dddd"], function(c, f, m, y) {
        var k = m._locale.weekdaysParse(c, y, m._strict);
        k != null ? f.d = k : w(m).invalidWeekday = c;
      }), Br(["d", "e", "E"], function(c, f, m, y) {
        f[y] = Z(c);
      });
      function bm(c, f) {
        return typeof c != "string" ? c : isNaN(c) ? (c = f.weekdaysParse(c), typeof c == "number" ? c : null) : parseInt(c, 10);
      }
      function Sm(c, f) {
        return typeof c == "string" ? f.weekdaysParse(c) % 7 || 7 : isNaN(c) ? null : c;
      }
      function qo(c, f) {
        return c.slice(f, 7).concat(c.slice(0, f));
      }
      var wm = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Pc = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), km = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), xm = cn, Cm = cn, Mm = cn;
      function vm(c, f) {
        var m = i(this._weekdays) ? this._weekdays : this._weekdays[c && c !== !0 && this._weekdays.isFormat.test(f) ? "format" : "standalone"];
        return c === !0 ? qo(m, this._week.dow) : c ? m[c.day()] : m;
      }
      function Tm(c) {
        return c === !0 ? qo(this._weekdaysShort, this._week.dow) : c ? this._weekdaysShort[c.day()] : this._weekdaysShort;
      }
      function Om(c) {
        return c === !0 ? qo(this._weekdaysMin, this._week.dow) : c ? this._weekdaysMin[c.day()] : this._weekdaysMin;
      }
      function Em(c, f, m) {
        var y, k, C, E = c.toLocaleLowerCase();
        if (!this._weekdaysParse)
          for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], y = 0; y < 7; ++y)
            C = b([2e3, 1]).day(y), this._minWeekdaysParse[y] = this.weekdaysMin(
              C,
              ""
            ).toLocaleLowerCase(), this._shortWeekdaysParse[y] = this.weekdaysShort(
              C,
              ""
            ).toLocaleLowerCase(), this._weekdaysParse[y] = this.weekdays(C, "").toLocaleLowerCase();
        return m ? f === "dddd" ? (k = ve.call(this._weekdaysParse, E), k !== -1 ? k : null) : f === "ddd" ? (k = ve.call(this._shortWeekdaysParse, E), k !== -1 ? k : null) : (k = ve.call(this._minWeekdaysParse, E), k !== -1 ? k : null) : f === "dddd" ? (k = ve.call(this._weekdaysParse, E), k !== -1 || (k = ve.call(this._shortWeekdaysParse, E), k !== -1) ? k : (k = ve.call(this._minWeekdaysParse, E), k !== -1 ? k : null)) : f === "ddd" ? (k = ve.call(this._shortWeekdaysParse, E), k !== -1 || (k = ve.call(this._weekdaysParse, E), k !== -1) ? k : (k = ve.call(this._minWeekdaysParse, E), k !== -1 ? k : null)) : (k = ve.call(this._minWeekdaysParse, E), k !== -1 || (k = ve.call(this._weekdaysParse, E), k !== -1) ? k : (k = ve.call(this._shortWeekdaysParse, E), k !== -1 ? k : null));
      }
      function Am(c, f, m) {
        var y, k, C;
        if (this._weekdaysParseExact)
          return Em.call(this, c, f, m);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), y = 0; y < 7; y++) {
          if (k = b([2e3, 1]).day(y), m && !this._fullWeekdaysParse[y] && (this._fullWeekdaysParse[y] = new RegExp(
            "^" + this.weekdays(k, "").replace(".", "\\.?") + "$",
            "i"
          ), this._shortWeekdaysParse[y] = new RegExp(
            "^" + this.weekdaysShort(k, "").replace(".", "\\.?") + "$",
            "i"
          ), this._minWeekdaysParse[y] = new RegExp(
            "^" + this.weekdaysMin(k, "").replace(".", "\\.?") + "$",
            "i"
          )), this._weekdaysParse[y] || (C = "^" + this.weekdays(k, "") + "|^" + this.weekdaysShort(k, "") + "|^" + this.weekdaysMin(k, ""), this._weekdaysParse[y] = new RegExp(C.replace(".", ""), "i")), m && f === "dddd" && this._fullWeekdaysParse[y].test(c))
            return y;
          if (m && f === "ddd" && this._shortWeekdaysParse[y].test(c))
            return y;
          if (m && f === "dd" && this._minWeekdaysParse[y].test(c))
            return y;
          if (!m && this._weekdaysParse[y].test(c))
            return y;
        }
      }
      function Dm(c) {
        if (!this.isValid())
          return c != null ? this : NaN;
        var f = Wr(this, "Day");
        return c != null ? (c = bm(c, this.localeData()), this.add(c - f, "d")) : f;
      }
      function Nm(c) {
        if (!this.isValid())
          return c != null ? this : NaN;
        var f = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return c == null ? f : this.add(c - f, "d");
      }
      function Rm(c) {
        if (!this.isValid())
          return c != null ? this : NaN;
        if (c != null) {
          var f = Sm(c, this.localeData());
          return this.day(this.day() % 7 ? f : f - 7);
        } else
          return this.day() || 7;
      }
      function Im(c) {
        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Ko.call(this), c ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = xm), this._weekdaysStrictRegex && c ? this._weekdaysStrictRegex : this._weekdaysRegex);
      }
      function _m(c) {
        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Ko.call(this), c ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Cm), this._weekdaysShortStrictRegex && c ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
      }
      function Pm(c) {
        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Ko.call(this), c ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Mm), this._weekdaysMinStrictRegex && c ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
      }
      function Ko() {
        function c(nt, Jt) {
          return Jt.length - nt.length;
        }
        var f = [], m = [], y = [], k = [], C, E, F, K, se;
        for (C = 0; C < 7; C++)
          E = b([2e3, 1]).day(C), F = mt(this.weekdaysMin(E, "")), K = mt(this.weekdaysShort(E, "")), se = mt(this.weekdays(E, "")), f.push(F), m.push(K), y.push(se), k.push(F), k.push(K), k.push(se);
        f.sort(c), m.sort(c), y.sort(c), k.sort(c), this._weekdaysRegex = new RegExp("^(" + k.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
          "^(" + y.join("|") + ")",
          "i"
        ), this._weekdaysShortStrictRegex = new RegExp(
          "^(" + m.join("|") + ")",
          "i"
        ), this._weekdaysMinStrictRegex = new RegExp(
          "^(" + f.join("|") + ")",
          "i"
        );
      }
      function Go() {
        return this.hours() % 12 || 12;
      }
      function Lm() {
        return this.hours() || 24;
      }
      B("H", ["HH", 2], 0, "hour"), B("h", ["hh", 2], 0, Go), B("k", ["kk", 2], 0, Lm), B("hmm", 0, 0, function() {
        return "" + Go.apply(this) + oe(this.minutes(), 2);
      }), B("hmmss", 0, 0, function() {
        return "" + Go.apply(this) + oe(this.minutes(), 2) + oe(this.seconds(), 2);
      }), B("Hmm", 0, 0, function() {
        return "" + this.hours() + oe(this.minutes(), 2);
      }), B("Hmmss", 0, 0, function() {
        return "" + this.hours() + oe(this.minutes(), 2) + oe(this.seconds(), 2);
      });
      function Lc(c, f) {
        B(c, 0, 0, function() {
          return this.localeData().meridiem(
            this.hours(),
            this.minutes(),
            f
          );
        });
      }
      Lc("a", !0), Lc("A", !1);
      function zc(c, f) {
        return f._meridiemParse;
      }
      P("a", zc), P("A", zc), P("H", ue, J), P("h", ue, $t), P("k", ue, $t), P("HH", ue, tt), P("hh", ue, tt), P("kk", ue, tt), P("hmm", Ls), P("hmmss", zs), P("Hmm", Ls), P("Hmmss", zs), ae(["H", "HH"], Re), ae(["k", "kk"], function(c, f, m) {
        var y = Z(c);
        f[Re] = y === 24 ? 0 : y;
      }), ae(["a", "A"], function(c, f, m) {
        m._isPm = m._locale.isPM(c), m._meridiem = c;
      }), ae(["h", "hh"], function(c, f, m) {
        f[Re] = Z(c), w(m).bigHour = !0;
      }), ae("hmm", function(c, f, m) {
        var y = c.length - 2;
        f[Re] = Z(c.substr(0, y)), f[Mt] = Z(c.substr(y)), w(m).bigHour = !0;
      }), ae("hmmss", function(c, f, m) {
        var y = c.length - 4, k = c.length - 2;
        f[Re] = Z(c.substr(0, y)), f[Mt] = Z(c.substr(y, 2)), f[Yt] = Z(c.substr(k)), w(m).bigHour = !0;
      }), ae("Hmm", function(c, f, m) {
        var y = c.length - 2;
        f[Re] = Z(c.substr(0, y)), f[Mt] = Z(c.substr(y));
      }), ae("Hmmss", function(c, f, m) {
        var y = c.length - 4, k = c.length - 2;
        f[Re] = Z(c.substr(0, y)), f[Mt] = Z(c.substr(y, 2)), f[Yt] = Z(c.substr(k));
      });
      function zm(c) {
        return (c + "").toLowerCase().charAt(0) === "p";
      }
      var Fm = /[ap]\.?m?\.?/i, Bm = fr("Hours", !0);
      function Hm(c, f, m) {
        return c > 11 ? m ? "pm" : "PM" : m ? "am" : "AM";
      }
      var Fc = {
        calendar: we,
        longDateFormat: Ro,
        invalidDate: _o,
        ordinal: Lo,
        dayOfMonthOrdinalParse: zo,
        relativeTime: Bo,
        months: tm,
        monthsShort: Ac,
        week: hm,
        weekdays: wm,
        weekdaysMin: km,
        weekdaysShort: Pc,
        meridiemParse: Fm
      }, ge = {}, Yr = {}, jr;
      function Wm(c, f) {
        var m, y = Math.min(c.length, f.length);
        for (m = 0; m < y; m += 1)
          if (c[m] !== f[m])
            return m;
        return y;
      }
      function Bc(c) {
        return c && c.toLowerCase().replace("_", "-");
      }
      function $m(c) {
        for (var f = 0, m, y, k, C; f < c.length; ) {
          for (C = Bc(c[f]).split("-"), m = C.length, y = Bc(c[f + 1]), y = y ? y.split("-") : null; m > 0; ) {
            if (k = Ws(C.slice(0, m).join("-")), k)
              return k;
            if (y && y.length >= m && Wm(C, y) >= m - 1)
              break;
            m--;
          }
          f++;
        }
        return jr;
      }
      function Vm(c) {
        return !!(c && c.match("^[^/\\\\]*$"));
      }
      function Ws(c) {
        var f = null, m;
        if (ge[c] === void 0 && n && n.exports && Vm(c))
          try {
            f = jr._abbr, m = Mf, m("./locale/" + c), un(f);
          } catch {
            ge[c] = null;
          }
        return ge[c];
      }
      function un(c, f) {
        var m;
        return c && (u(f) ? m = Ut(c) : m = Jo(c, f), m ? jr = m : typeof console < "u" && console.warn && console.warn(
          "Locale " + c + " not found. Did you forget to load it?"
        )), jr._abbr;
      }
      function Jo(c, f) {
        if (f !== null) {
          var m, y = Fc;
          if (f.abbr = c, ge[c] != null)
            ye(
              "defineLocaleOverride",
              "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
            ), y = ge[c]._config;
          else if (f.parentLocale != null)
            if (ge[f.parentLocale] != null)
              y = ge[f.parentLocale]._config;
            else if (m = Ws(f.parentLocale), m != null)
              y = m._config;
            else
              return Yr[f.parentLocale] || (Yr[f.parentLocale] = []), Yr[f.parentLocale].push({
                name: c,
                config: f
              }), null;
          return ge[c] = new W(q(y, f)), Yr[c] && Yr[c].forEach(function(k) {
            Jo(k.name, k.config);
          }), un(c), ge[c];
        } else
          return delete ge[c], null;
      }
      function Ym(c, f) {
        if (f != null) {
          var m, y, k = Fc;
          ge[c] != null && ge[c].parentLocale != null ? ge[c].set(q(ge[c]._config, f)) : (y = Ws(c), y != null && (k = y._config), f = q(k, f), y == null && (f.abbr = c), m = new W(f), m.parentLocale = ge[c], ge[c] = m), un(c);
        } else
          ge[c] != null && (ge[c].parentLocale != null ? (ge[c] = ge[c].parentLocale, c === un() && un(c)) : ge[c] != null && delete ge[c]);
        return ge[c];
      }
      function Ut(c) {
        var f;
        if (c && c._locale && c._locale._abbr && (c = c._locale._abbr), !c)
          return jr;
        if (!i(c)) {
          if (f = Ws(c), f)
            return f;
          c = [c];
        }
        return $m(c);
      }
      function jm() {
        return G(ge);
      }
      function Qo(c) {
        var f, m = c._a;
        return m && w(c).overflow === -2 && (f = m[Vt] < 0 || m[Vt] > 11 ? Vt : m[Rt] < 1 || m[Rt] > Uo(m[Ge], m[Vt]) ? Rt : m[Re] < 0 || m[Re] > 24 || m[Re] === 24 && (m[Mt] !== 0 || m[Yt] !== 0 || m[Ln] !== 0) ? Re : m[Mt] < 0 || m[Mt] > 59 ? Mt : m[Yt] < 0 || m[Yt] > 59 ? Yt : m[Ln] < 0 || m[Ln] > 999 ? Ln : -1, w(c)._overflowDayOfYear && (f < Ge || f > Rt) && (f = Rt), w(c)._overflowWeeks && f === -1 && (f = Gp), w(c)._overflowWeekday && f === -1 && (f = Jp), w(c).overflow = f), c;
      }
      var Um = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, qm = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Km = /Z|[+-]\d\d(?::?\d\d)?/, $s = [
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
      ], Zo = [
        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
        ["HH:mm", /\d\d:\d\d/],
        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
        ["HHmmss", /\d\d\d\d\d\d/],
        ["HHmm", /\d\d\d\d/],
        ["HH", /\d\d/]
      ], Gm = /^\/?Date\((-?\d+)/i, Jm = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, Qm = {
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
      function Hc(c) {
        var f, m, y = c._i, k = Um.exec(y) || qm.exec(y), C, E, F, K, se = $s.length, nt = Zo.length;
        if (k) {
          for (w(c).iso = !0, f = 0, m = se; f < m; f++)
            if ($s[f][1].exec(k[1])) {
              E = $s[f][0], C = $s[f][2] !== !1;
              break;
            }
          if (E == null) {
            c._isValid = !1;
            return;
          }
          if (k[3]) {
            for (f = 0, m = nt; f < m; f++)
              if (Zo[f][1].exec(k[3])) {
                F = (k[2] || " ") + Zo[f][0];
                break;
              }
            if (F == null) {
              c._isValid = !1;
              return;
            }
          }
          if (!C && F != null) {
            c._isValid = !1;
            return;
          }
          if (k[4])
            if (Km.exec(k[4]))
              K = "Z";
            else {
              c._isValid = !1;
              return;
            }
          c._f = E + (F || "") + (K || ""), el(c);
        } else
          c._isValid = !1;
      }
      function Zm(c, f, m, y, k, C) {
        var E = [
          Xm(c),
          Ac.indexOf(f),
          parseInt(m, 10),
          parseInt(y, 10),
          parseInt(k, 10)
        ];
        return C && E.push(parseInt(C, 10)), E;
      }
      function Xm(c) {
        var f = parseInt(c, 10);
        return f <= 49 ? 2e3 + f : f <= 999 ? 1900 + f : f;
      }
      function eg(c) {
        return c.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
      }
      function tg(c, f, m) {
        if (c) {
          var y = Pc.indexOf(c), k = new Date(
            f[0],
            f[1],
            f[2]
          ).getDay();
          if (y !== k)
            return w(m).weekdayMismatch = !0, m._isValid = !1, !1;
        }
        return !0;
      }
      function ng(c, f, m) {
        if (c)
          return Qm[c];
        if (f)
          return 0;
        var y = parseInt(m, 10), k = y % 100, C = (y - k) / 100;
        return C * 60 + k;
      }
      function Wc(c) {
        var f = Jm.exec(eg(c._i)), m;
        if (f) {
          if (m = Zm(
            f[4],
            f[3],
            f[2],
            f[5],
            f[6],
            f[7]
          ), !tg(f[1], m, c))
            return;
          c._a = m, c._tzm = ng(f[8], f[9], f[10]), c._d = $r.apply(null, c._a), c._d.setUTCMinutes(c._d.getUTCMinutes() - c._tzm), w(c).rfc2822 = !0;
        } else
          c._isValid = !1;
      }
      function rg(c) {
        var f = Gm.exec(c._i);
        if (f !== null) {
          c._d = /* @__PURE__ */ new Date(+f[1]);
          return;
        }
        if (Hc(c), c._isValid === !1)
          delete c._isValid;
        else
          return;
        if (Wc(c), c._isValid === !1)
          delete c._isValid;
        else
          return;
        c._strict ? c._isValid = !1 : r.createFromInputFallback(c);
      }
      r.createFromInputFallback = te(
        "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
        function(c) {
          c._d = /* @__PURE__ */ new Date(c._i + (c._useUTC ? " UTC" : ""));
        }
      );
      function hr(c, f, m) {
        return c ?? f ?? m;
      }
      function sg(c) {
        var f = new Date(r.now());
        return c._useUTC ? [
          f.getUTCFullYear(),
          f.getUTCMonth(),
          f.getUTCDate()
        ] : [f.getFullYear(), f.getMonth(), f.getDate()];
      }
      function Xo(c) {
        var f, m, y = [], k, C, E;
        if (!c._d) {
          for (k = sg(c), c._w && c._a[Rt] == null && c._a[Vt] == null && ig(c), c._dayOfYear != null && (E = hr(c._a[Ge], k[Ge]), (c._dayOfYear > Hr(E) || c._dayOfYear === 0) && (w(c)._overflowDayOfYear = !0), m = $r(E, 0, c._dayOfYear), c._a[Vt] = m.getUTCMonth(), c._a[Rt] = m.getUTCDate()), f = 0; f < 3 && c._a[f] == null; ++f)
            c._a[f] = y[f] = k[f];
          for (; f < 7; f++)
            c._a[f] = y[f] = c._a[f] == null ? f === 2 ? 1 : 0 : c._a[f];
          c._a[Re] === 24 && c._a[Mt] === 0 && c._a[Yt] === 0 && c._a[Ln] === 0 && (c._nextDay = !0, c._a[Re] = 0), c._d = (c._useUTC ? $r : dm).apply(
            null,
            y
          ), C = c._useUTC ? c._d.getUTCDay() : c._d.getDay(), c._tzm != null && c._d.setUTCMinutes(c._d.getUTCMinutes() - c._tzm), c._nextDay && (c._a[Re] = 24), c._w && typeof c._w.d < "u" && c._w.d !== C && (w(c).weekdayMismatch = !0);
        }
      }
      function ig(c) {
        var f, m, y, k, C, E, F, K, se;
        f = c._w, f.GG != null || f.W != null || f.E != null ? (C = 1, E = 4, m = hr(
          f.GG,
          c._a[Ge],
          Vr(he(), 1, 4).year
        ), y = hr(f.W, 1), k = hr(f.E, 1), (k < 1 || k > 7) && (K = !0)) : (C = c._locale._week.dow, E = c._locale._week.doy, se = Vr(he(), C, E), m = hr(f.gg, c._a[Ge], se.year), y = hr(f.w, se.week), f.d != null ? (k = f.d, (k < 0 || k > 6) && (K = !0)) : f.e != null ? (k = f.e + C, (f.e < 0 || f.e > 6) && (K = !0)) : k = C), y < 1 || y > jt(m, C, E) ? w(c)._overflowWeeks = !0 : K != null ? w(c)._overflowWeekday = !0 : (F = _c(m, y, k, C, E), c._a[Ge] = F.year, c._dayOfYear = F.dayOfYear);
      }
      r.ISO_8601 = function() {
      }, r.RFC_2822 = function() {
      };
      function el(c) {
        if (c._f === r.ISO_8601) {
          Hc(c);
          return;
        }
        if (c._f === r.RFC_2822) {
          Wc(c);
          return;
        }
        c._a = [], w(c).empty = !0;
        var f = "" + c._i, m, y, k, C, E, F = f.length, K = 0, se, nt;
        for (k = Rs(c._f, c._locale).match(Oe) || [], nt = k.length, m = 0; m < nt; m++)
          C = k[m], y = (f.match(Ke(C, c)) || [])[0], y && (E = f.substr(0, f.indexOf(y)), E.length > 0 && w(c).unusedInput.push(E), f = f.slice(
            f.indexOf(y) + y.length
          ), K += y.length), dt[C] ? (y ? w(c).empty = !1 : w(c).unusedTokens.push(C), Kp(C, y, c)) : c._strict && !y && w(c).unusedTokens.push(C);
        w(c).charsLeftOver = F - K, f.length > 0 && w(c).unusedInput.push(f), c._a[Re] <= 12 && w(c).bigHour === !0 && c._a[Re] > 0 && (w(c).bigHour = void 0), w(c).parsedDateParts = c._a.slice(0), w(c).meridiem = c._meridiem, c._a[Re] = og(
          c._locale,
          c._a[Re],
          c._meridiem
        ), se = w(c).era, se !== null && (c._a[Ge] = c._locale.erasConvertYear(se, c._a[Ge])), Xo(c), Qo(c);
      }
      function og(c, f, m) {
        var y;
        return m == null ? f : c.meridiemHour != null ? c.meridiemHour(f, m) : (c.isPM != null && (y = c.isPM(m), y && f < 12 && (f += 12), !y && f === 12 && (f = 0)), f);
      }
      function lg(c) {
        var f, m, y, k, C, E, F = !1, K = c._f.length;
        if (K === 0) {
          w(c).invalidFormat = !0, c._d = /* @__PURE__ */ new Date(NaN);
          return;
        }
        for (k = 0; k < K; k++)
          C = 0, E = !1, f = R({}, c), c._useUTC != null && (f._useUTC = c._useUTC), f._f = c._f[k], el(f), v(f) && (E = !0), C += w(f).charsLeftOver, C += w(f).unusedTokens.length * 10, w(f).score = C, F ? C < y && (y = C, m = f) : (y == null || C < y || E) && (y = C, m = f, E && (F = !0));
        g(c, m || f);
      }
      function ag(c) {
        if (!c._d) {
          var f = Lr(c._i), m = f.day === void 0 ? f.date : f.day;
          c._a = p(
            [f.year, f.month, m, f.hour, f.minute, f.second, f.millisecond],
            function(y) {
              return y && parseInt(y, 10);
            }
          ), Xo(c);
        }
      }
      function cg(c) {
        var f = new O(Qo($c(c)));
        return f._nextDay && (f.add(1, "d"), f._nextDay = void 0), f;
      }
      function $c(c) {
        var f = c._i, m = c._f;
        return c._locale = c._locale || Ut(c._l), f === null || m === void 0 && f === "" ? T({ nullInput: !0 }) : (typeof f == "string" && (c._i = f = c._locale.preparse(f)), L(f) ? new O(Qo(f)) : (h(f) ? c._d = f : i(m) ? lg(c) : m ? el(c) : ug(c), v(c) || (c._d = null), c));
      }
      function ug(c) {
        var f = c._i;
        u(f) ? c._d = new Date(r.now()) : h(f) ? c._d = new Date(f.valueOf()) : typeof f == "string" ? rg(c) : i(f) ? (c._a = p(f.slice(0), function(m) {
          return parseInt(m, 10);
        }), Xo(c)) : o(f) ? ag(c) : d(f) ? c._d = new Date(f) : r.createFromInputFallback(c);
      }
      function Vc(c, f, m, y, k) {
        var C = {};
        return (f === !0 || f === !1) && (y = f, f = void 0), (m === !0 || m === !1) && (y = m, m = void 0), (o(c) && a(c) || i(c) && c.length === 0) && (c = void 0), C._isAMomentObject = !0, C._useUTC = C._isUTC = k, C._l = m, C._i = c, C._f = f, C._strict = y, cg(C);
      }
      function he(c, f, m, y) {
        return Vc(c, f, m, y, !1);
      }
      var dg = te(
        "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
        function() {
          var c = he.apply(null, arguments);
          return this.isValid() && c.isValid() ? c < this ? this : c : T();
        }
      ), fg = te(
        "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
        function() {
          var c = he.apply(null, arguments);
          return this.isValid() && c.isValid() ? c > this ? this : c : T();
        }
      );
      function Yc(c, f) {
        var m, y;
        if (f.length === 1 && i(f[0]) && (f = f[0]), !f.length)
          return he();
        for (m = f[0], y = 1; y < f.length; ++y)
          (!f[y].isValid() || f[y][c](m)) && (m = f[y]);
        return m;
      }
      function hg() {
        var c = [].slice.call(arguments, 0);
        return Yc("isBefore", c);
      }
      function pg() {
        var c = [].slice.call(arguments, 0);
        return Yc("isAfter", c);
      }
      var mg = function() {
        return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
      }, Ur = [
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
      function gg(c) {
        var f, m = !1, y, k = Ur.length;
        for (f in c)
          if (l(c, f) && !(ve.call(Ur, f) !== -1 && (c[f] == null || !isNaN(c[f]))))
            return !1;
        for (y = 0; y < k; ++y)
          if (c[Ur[y]]) {
            if (m)
              return !1;
            parseFloat(c[Ur[y]]) !== Z(c[Ur[y]]) && (m = !0);
          }
        return !0;
      }
      function yg() {
        return this._isValid;
      }
      function bg() {
        return vt(NaN);
      }
      function Vs(c) {
        var f = Lr(c), m = f.year || 0, y = f.quarter || 0, k = f.month || 0, C = f.week || f.isoWeek || 0, E = f.day || 0, F = f.hour || 0, K = f.minute || 0, se = f.second || 0, nt = f.millisecond || 0;
        this._isValid = gg(f), this._milliseconds = +nt + se * 1e3 + // 1000
        K * 6e4 + // 1000 * 60
        F * 1e3 * 60 * 60, this._days = +E + C * 7, this._months = +k + y * 3 + m * 12, this._data = {}, this._locale = Ut(), this._bubble();
      }
      function Ys(c) {
        return c instanceof Vs;
      }
      function tl(c) {
        return c < 0 ? Math.round(-1 * c) * -1 : Math.round(c);
      }
      function Sg(c, f, m) {
        var y = Math.min(c.length, f.length), k = Math.abs(c.length - f.length), C = 0, E;
        for (E = 0; E < y; E++)
          Z(c[E]) !== Z(f[E]) && C++;
        return C + k;
      }
      function jc(c, f) {
        B(c, 0, 0, function() {
          var m = this.utcOffset(), y = "+";
          return m < 0 && (m = -m, y = "-"), y + oe(~~(m / 60), 2) + f + oe(~~m % 60, 2);
        });
      }
      jc("Z", ":"), jc("ZZ", ""), P("Z", an), P("ZZ", an), ae(["Z", "ZZ"], function(c, f, m) {
        m._useUTC = !0, m._tzm = nl(an, c);
      });
      var wg = /([\+\-]|\d\d)/gi;
      function nl(c, f) {
        var m = (f || "").match(c), y, k, C;
        return m === null ? null : (y = m[m.length - 1] || [], k = (y + "").match(wg) || ["-", 0, 0], C = +(k[1] * 60) + Z(k[2]), C === 0 ? 0 : k[0] === "+" ? C : -C);
      }
      function rl(c, f) {
        var m, y;
        return f._isUTC ? (m = f.clone(), y = (L(c) || h(c) ? c.valueOf() : he(c).valueOf()) - m.valueOf(), m._d.setTime(m._d.valueOf() + y), r.updateOffset(m, !1), m) : he(c).local();
      }
      function sl(c) {
        return -Math.round(c._d.getTimezoneOffset());
      }
      r.updateOffset = function() {
      };
      function kg(c, f, m) {
        var y = this._offset || 0, k;
        if (!this.isValid())
          return c != null ? this : NaN;
        if (c != null) {
          if (typeof c == "string") {
            if (c = nl(an, c), c === null)
              return this;
          } else Math.abs(c) < 16 && !m && (c = c * 60);
          return !this._isUTC && f && (k = sl(this)), this._offset = c, this._isUTC = !0, k != null && this.add(k, "m"), y !== c && (!f || this._changeInProgress ? Gc(
            this,
            vt(c - y, "m"),
            1,
            !1
          ) : this._changeInProgress || (this._changeInProgress = !0, r.updateOffset(this, !0), this._changeInProgress = null)), this;
        } else
          return this._isUTC ? y : sl(this);
      }
      function xg(c, f) {
        return c != null ? (typeof c != "string" && (c = -c), this.utcOffset(c, f), this) : -this.utcOffset();
      }
      function Cg(c) {
        return this.utcOffset(0, c);
      }
      function Mg(c) {
        return this._isUTC && (this.utcOffset(0, c), this._isUTC = !1, c && this.subtract(sl(this), "m")), this;
      }
      function vg() {
        if (this._tzm != null)
          this.utcOffset(this._tzm, !1, !0);
        else if (typeof this._i == "string") {
          var c = nl(Yo, this._i);
          c != null ? this.utcOffset(c) : this.utcOffset(0, !0);
        }
        return this;
      }
      function Tg(c) {
        return this.isValid() ? (c = c ? he(c).utcOffset() : 0, (this.utcOffset() - c) % 60 === 0) : !1;
      }
      function Og() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
      }
      function Eg() {
        if (!u(this._isDSTShifted))
          return this._isDSTShifted;
        var c = {}, f;
        return R(c, this), c = $c(c), c._a ? (f = c._isUTC ? b(c._a) : he(c._a), this._isDSTShifted = this.isValid() && Sg(c._a, f.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
      }
      function Ag() {
        return this.isValid() ? !this._isUTC : !1;
      }
      function Dg() {
        return this.isValid() ? this._isUTC : !1;
      }
      function Uc() {
        return this.isValid() ? this._isUTC && this._offset === 0 : !1;
      }
      var Ng = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Rg = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
      function vt(c, f) {
        var m = c, y = null, k, C, E;
        return Ys(c) ? m = {
          ms: c._milliseconds,
          d: c._days,
          M: c._months
        } : d(c) || !isNaN(+c) ? (m = {}, f ? m[f] = +c : m.milliseconds = +c) : (y = Ng.exec(c)) ? (k = y[1] === "-" ? -1 : 1, m = {
          y: 0,
          d: Z(y[Rt]) * k,
          h: Z(y[Re]) * k,
          m: Z(y[Mt]) * k,
          s: Z(y[Yt]) * k,
          ms: Z(tl(y[Ln] * 1e3)) * k
          // the millisecond decimal point is included in the match
        }) : (y = Rg.exec(c)) ? (k = y[1] === "-" ? -1 : 1, m = {
          y: zn(y[2], k),
          M: zn(y[3], k),
          w: zn(y[4], k),
          d: zn(y[5], k),
          h: zn(y[6], k),
          m: zn(y[7], k),
          s: zn(y[8], k)
        }) : m == null ? m = {} : typeof m == "object" && ("from" in m || "to" in m) && (E = Ig(
          he(m.from),
          he(m.to)
        ), m = {}, m.ms = E.milliseconds, m.M = E.months), C = new Vs(m), Ys(c) && l(c, "_locale") && (C._locale = c._locale), Ys(c) && l(c, "_isValid") && (C._isValid = c._isValid), C;
      }
      vt.fn = Vs.prototype, vt.invalid = bg;
      function zn(c, f) {
        var m = c && parseFloat(c.replace(",", "."));
        return (isNaN(m) ? 0 : m) * f;
      }
      function qc(c, f) {
        var m = {};
        return m.months = f.month() - c.month() + (f.year() - c.year()) * 12, c.clone().add(m.months, "M").isAfter(f) && --m.months, m.milliseconds = +f - +c.clone().add(m.months, "M"), m;
      }
      function Ig(c, f) {
        var m;
        return c.isValid() && f.isValid() ? (f = rl(f, c), c.isBefore(f) ? m = qc(c, f) : (m = qc(f, c), m.milliseconds = -m.milliseconds, m.months = -m.months), m) : { milliseconds: 0, months: 0 };
      }
      function Kc(c, f) {
        return function(m, y) {
          var k, C;
          return y !== null && !isNaN(+y) && (ye(
            f,
            "moment()." + f + "(period, number) is deprecated. Please use moment()." + f + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
          ), C = m, m = y, y = C), k = vt(m, y), Gc(this, k, c), this;
        };
      }
      function Gc(c, f, m, y) {
        var k = f._milliseconds, C = tl(f._days), E = tl(f._months);
        c.isValid() && (y = y ?? !0, E && Nc(c, Wr(c, "Month") + E * m), C && Ec(c, "Date", Wr(c, "Date") + C * m), k && c._d.setTime(c._d.valueOf() + k * m), y && r.updateOffset(c, C || E));
      }
      var _g = Kc(1, "add"), Pg = Kc(-1, "subtract");
      function Jc(c) {
        return typeof c == "string" || c instanceof String;
      }
      function Lg(c) {
        return L(c) || h(c) || Jc(c) || d(c) || Fg(c) || zg(c) || c === null || c === void 0;
      }
      function zg(c) {
        var f = o(c) && !a(c), m = !1, y = [
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
        ], k, C, E = y.length;
        for (k = 0; k < E; k += 1)
          C = y[k], m = m || l(c, C);
        return f && m;
      }
      function Fg(c) {
        var f = i(c), m = !1;
        return f && (m = c.filter(function(y) {
          return !d(y) && Jc(c);
        }).length === 0), f && m;
      }
      function Bg(c) {
        var f = o(c) && !a(c), m = !1, y = [
          "sameDay",
          "nextDay",
          "lastDay",
          "nextWeek",
          "lastWeek",
          "sameElse"
        ], k, C;
        for (k = 0; k < y.length; k += 1)
          C = y[k], m = m || l(c, C);
        return f && m;
      }
      function Hg(c, f) {
        var m = c.diff(f, "days", !0);
        return m < -6 ? "sameElse" : m < -1 ? "lastWeek" : m < 0 ? "lastDay" : m < 1 ? "sameDay" : m < 2 ? "nextDay" : m < 7 ? "nextWeek" : "sameElse";
      }
      function Wg(c, f) {
        arguments.length === 1 && (arguments[0] ? Lg(arguments[0]) ? (c = arguments[0], f = void 0) : Bg(arguments[0]) && (f = arguments[0], c = void 0) : (c = void 0, f = void 0));
        var m = c || he(), y = rl(m, this).startOf("day"), k = r.calendarFormat(this, y) || "sameElse", C = f && (be(f[k]) ? f[k].call(this, m) : f[k]);
        return this.format(
          C || this.localeData().calendar(k, this, he(m))
        );
      }
      function $g() {
        return new O(this);
      }
      function Vg(c, f) {
        var m = L(c) ? c : he(c);
        return this.isValid() && m.isValid() ? (f = it(f) || "millisecond", f === "millisecond" ? this.valueOf() > m.valueOf() : m.valueOf() < this.clone().startOf(f).valueOf()) : !1;
      }
      function Yg(c, f) {
        var m = L(c) ? c : he(c);
        return this.isValid() && m.isValid() ? (f = it(f) || "millisecond", f === "millisecond" ? this.valueOf() < m.valueOf() : this.clone().endOf(f).valueOf() < m.valueOf()) : !1;
      }
      function jg(c, f, m, y) {
        var k = L(c) ? c : he(c), C = L(f) ? f : he(f);
        return this.isValid() && k.isValid() && C.isValid() ? (y = y || "()", (y[0] === "(" ? this.isAfter(k, m) : !this.isBefore(k, m)) && (y[1] === ")" ? this.isBefore(C, m) : !this.isAfter(C, m))) : !1;
      }
      function Ug(c, f) {
        var m = L(c) ? c : he(c), y;
        return this.isValid() && m.isValid() ? (f = it(f) || "millisecond", f === "millisecond" ? this.valueOf() === m.valueOf() : (y = m.valueOf(), this.clone().startOf(f).valueOf() <= y && y <= this.clone().endOf(f).valueOf())) : !1;
      }
      function qg(c, f) {
        return this.isSame(c, f) || this.isAfter(c, f);
      }
      function Kg(c, f) {
        return this.isSame(c, f) || this.isBefore(c, f);
      }
      function Gg(c, f, m) {
        var y, k, C;
        if (!this.isValid())
          return NaN;
        if (y = rl(c, this), !y.isValid())
          return NaN;
        switch (k = (y.utcOffset() - this.utcOffset()) * 6e4, f = it(f), f) {
          case "year":
            C = js(this, y) / 12;
            break;
          case "month":
            C = js(this, y);
            break;
          case "quarter":
            C = js(this, y) / 3;
            break;
          case "second":
            C = (this - y) / 1e3;
            break;
          case "minute":
            C = (this - y) / 6e4;
            break;
          case "hour":
            C = (this - y) / 36e5;
            break;
          case "day":
            C = (this - y - k) / 864e5;
            break;
          case "week":
            C = (this - y - k) / 6048e5;
            break;
          default:
            C = this - y;
        }
        return m ? C : lt(C);
      }
      function js(c, f) {
        if (c.date() < f.date())
          return -js(f, c);
        var m = (f.year() - c.year()) * 12 + (f.month() - c.month()), y = c.clone().add(m, "months"), k, C;
        return f - y < 0 ? (k = c.clone().add(m - 1, "months"), C = (f - y) / (y - k)) : (k = c.clone().add(m + 1, "months"), C = (f - y) / (k - y)), -(m + C) || 0;
      }
      r.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", r.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
      function Jg() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
      }
      function Qg(c) {
        if (!this.isValid())
          return null;
        var f = c !== !0, m = f ? this.clone().utc() : this;
        return m.year() < 0 || m.year() > 9999 ? ar(
          m,
          f ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
        ) : be(Date.prototype.toISOString) ? f ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", ar(m, "Z")) : ar(
          m,
          f ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
        );
      }
      function Zg() {
        if (!this.isValid())
          return "moment.invalid(/* " + this._i + " */)";
        var c = "moment", f = "", m, y, k, C;
        return this.isLocal() || (c = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", f = "Z"), m = "[" + c + '("]', y = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", k = "-MM-DD[T]HH:mm:ss.SSS", C = f + '[")]', this.format(m + y + k + C);
      }
      function Xg(c) {
        c || (c = this.isUtc() ? r.defaultFormatUtc : r.defaultFormat);
        var f = ar(this, c);
        return this.localeData().postformat(f);
      }
      function ey(c, f) {
        return this.isValid() && (L(c) && c.isValid() || he(c).isValid()) ? vt({ to: this, from: c }).locale(this.locale()).humanize(!f) : this.localeData().invalidDate();
      }
      function ty(c) {
        return this.from(he(), c);
      }
      function ny(c, f) {
        return this.isValid() && (L(c) && c.isValid() || he(c).isValid()) ? vt({ from: this, to: c }).locale(this.locale()).humanize(!f) : this.localeData().invalidDate();
      }
      function ry(c) {
        return this.to(he(), c);
      }
      function Qc(c) {
        var f;
        return c === void 0 ? this._locale._abbr : (f = Ut(c), f != null && (this._locale = f), this);
      }
      var Zc = te(
        "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
        function(c) {
          return c === void 0 ? this.localeData() : this.locale(c);
        }
      );
      function Xc() {
        return this._locale;
      }
      var Us = 1e3, pr = 60 * Us, qs = 60 * pr, eu = (365 * 400 + 97) * 24 * qs;
      function mr(c, f) {
        return (c % f + f) % f;
      }
      function tu(c, f, m) {
        return c < 100 && c >= 0 ? new Date(c + 400, f, m) - eu : new Date(c, f, m).valueOf();
      }
      function nu(c, f, m) {
        return c < 100 && c >= 0 ? Date.UTC(c + 400, f, m) - eu : Date.UTC(c, f, m);
      }
      function sy(c) {
        var f, m;
        if (c = it(c), c === void 0 || c === "millisecond" || !this.isValid())
          return this;
        switch (m = this._isUTC ? nu : tu, c) {
          case "year":
            f = m(this.year(), 0, 1);
            break;
          case "quarter":
            f = m(
              this.year(),
              this.month() - this.month() % 3,
              1
            );
            break;
          case "month":
            f = m(this.year(), this.month(), 1);
            break;
          case "week":
            f = m(
              this.year(),
              this.month(),
              this.date() - this.weekday()
            );
            break;
          case "isoWeek":
            f = m(
              this.year(),
              this.month(),
              this.date() - (this.isoWeekday() - 1)
            );
            break;
          case "day":
          case "date":
            f = m(this.year(), this.month(), this.date());
            break;
          case "hour":
            f = this._d.valueOf(), f -= mr(
              f + (this._isUTC ? 0 : this.utcOffset() * pr),
              qs
            );
            break;
          case "minute":
            f = this._d.valueOf(), f -= mr(f, pr);
            break;
          case "second":
            f = this._d.valueOf(), f -= mr(f, Us);
            break;
        }
        return this._d.setTime(f), r.updateOffset(this, !0), this;
      }
      function iy(c) {
        var f, m;
        if (c = it(c), c === void 0 || c === "millisecond" || !this.isValid())
          return this;
        switch (m = this._isUTC ? nu : tu, c) {
          case "year":
            f = m(this.year() + 1, 0, 1) - 1;
            break;
          case "quarter":
            f = m(
              this.year(),
              this.month() - this.month() % 3 + 3,
              1
            ) - 1;
            break;
          case "month":
            f = m(this.year(), this.month() + 1, 1) - 1;
            break;
          case "week":
            f = m(
              this.year(),
              this.month(),
              this.date() - this.weekday() + 7
            ) - 1;
            break;
          case "isoWeek":
            f = m(
              this.year(),
              this.month(),
              this.date() - (this.isoWeekday() - 1) + 7
            ) - 1;
            break;
          case "day":
          case "date":
            f = m(this.year(), this.month(), this.date() + 1) - 1;
            break;
          case "hour":
            f = this._d.valueOf(), f += qs - mr(
              f + (this._isUTC ? 0 : this.utcOffset() * pr),
              qs
            ) - 1;
            break;
          case "minute":
            f = this._d.valueOf(), f += pr - mr(f, pr) - 1;
            break;
          case "second":
            f = this._d.valueOf(), f += Us - mr(f, Us) - 1;
            break;
        }
        return this._d.setTime(f), r.updateOffset(this, !0), this;
      }
      function oy() {
        return this._d.valueOf() - (this._offset || 0) * 6e4;
      }
      function ly() {
        return Math.floor(this.valueOf() / 1e3);
      }
      function ay() {
        return new Date(this.valueOf());
      }
      function cy() {
        var c = this;
        return [
          c.year(),
          c.month(),
          c.date(),
          c.hour(),
          c.minute(),
          c.second(),
          c.millisecond()
        ];
      }
      function uy() {
        var c = this;
        return {
          years: c.year(),
          months: c.month(),
          date: c.date(),
          hours: c.hours(),
          minutes: c.minutes(),
          seconds: c.seconds(),
          milliseconds: c.milliseconds()
        };
      }
      function dy() {
        return this.isValid() ? this.toISOString() : null;
      }
      function fy() {
        return v(this);
      }
      function hy() {
        return g({}, w(this));
      }
      function py() {
        return w(this).overflow;
      }
      function my() {
        return {
          input: this._i,
          format: this._f,
          locale: this._locale,
          isUTC: this._isUTC,
          strict: this._strict
        };
      }
      B("N", 0, 0, "eraAbbr"), B("NN", 0, 0, "eraAbbr"), B("NNN", 0, 0, "eraAbbr"), B("NNNN", 0, 0, "eraName"), B("NNNNN", 0, 0, "eraNarrow"), B("y", ["y", 1], "yo", "eraYear"), B("y", ["yy", 2], 0, "eraYear"), B("y", ["yyy", 3], 0, "eraYear"), B("y", ["yyyy", 4], 0, "eraYear"), P("N", il), P("NN", il), P("NNN", il), P("NNNN", Ty), P("NNNNN", Oy), ae(
        ["N", "NN", "NNN", "NNNN", "NNNNN"],
        function(c, f, m, y) {
          var k = m._locale.erasParse(c, y, m._strict);
          k ? w(m).era = k : w(m).invalidEra = c;
        }
      ), P("y", Wt), P("yy", Wt), P("yyy", Wt), P("yyyy", Wt), P("yo", Ey), ae(["y", "yy", "yyy", "yyyy"], Ge), ae(["yo"], function(c, f, m, y) {
        var k;
        m._locale._eraYearOrdinalRegex && (k = c.match(m._locale._eraYearOrdinalRegex)), m._locale.eraYearOrdinalParse ? f[Ge] = m._locale.eraYearOrdinalParse(c, k) : f[Ge] = parseInt(c, 10);
      });
      function gy(c, f) {
        var m, y, k, C = this._eras || Ut("en")._eras;
        for (m = 0, y = C.length; m < y; ++m) {
          switch (typeof C[m].since) {
            case "string":
              k = r(C[m].since).startOf("day"), C[m].since = k.valueOf();
              break;
          }
          switch (typeof C[m].until) {
            case "undefined":
              C[m].until = 1 / 0;
              break;
            case "string":
              k = r(C[m].until).startOf("day").valueOf(), C[m].until = k.valueOf();
              break;
          }
        }
        return C;
      }
      function yy(c, f, m) {
        var y, k, C = this.eras(), E, F, K;
        for (c = c.toUpperCase(), y = 0, k = C.length; y < k; ++y)
          if (E = C[y].name.toUpperCase(), F = C[y].abbr.toUpperCase(), K = C[y].narrow.toUpperCase(), m)
            switch (f) {
              case "N":
              case "NN":
              case "NNN":
                if (F === c)
                  return C[y];
                break;
              case "NNNN":
                if (E === c)
                  return C[y];
                break;
              case "NNNNN":
                if (K === c)
                  return C[y];
                break;
            }
          else if ([E, F, K].indexOf(c) >= 0)
            return C[y];
      }
      function by(c, f) {
        var m = c.since <= c.until ? 1 : -1;
        return f === void 0 ? r(c.since).year() : r(c.since).year() + (f - c.offset) * m;
      }
      function Sy() {
        var c, f, m, y = this.localeData().eras();
        for (c = 0, f = y.length; c < f; ++c)
          if (m = this.clone().startOf("day").valueOf(), y[c].since <= m && m <= y[c].until || y[c].until <= m && m <= y[c].since)
            return y[c].name;
        return "";
      }
      function wy() {
        var c, f, m, y = this.localeData().eras();
        for (c = 0, f = y.length; c < f; ++c)
          if (m = this.clone().startOf("day").valueOf(), y[c].since <= m && m <= y[c].until || y[c].until <= m && m <= y[c].since)
            return y[c].narrow;
        return "";
      }
      function ky() {
        var c, f, m, y = this.localeData().eras();
        for (c = 0, f = y.length; c < f; ++c)
          if (m = this.clone().startOf("day").valueOf(), y[c].since <= m && m <= y[c].until || y[c].until <= m && m <= y[c].since)
            return y[c].abbr;
        return "";
      }
      function xy() {
        var c, f, m, y, k = this.localeData().eras();
        for (c = 0, f = k.length; c < f; ++c)
          if (m = k[c].since <= k[c].until ? 1 : -1, y = this.clone().startOf("day").valueOf(), k[c].since <= y && y <= k[c].until || k[c].until <= y && y <= k[c].since)
            return (this.year() - r(k[c].since).year()) * m + k[c].offset;
        return this.year();
      }
      function Cy(c) {
        return l(this, "_erasNameRegex") || ol.call(this), c ? this._erasNameRegex : this._erasRegex;
      }
      function My(c) {
        return l(this, "_erasAbbrRegex") || ol.call(this), c ? this._erasAbbrRegex : this._erasRegex;
      }
      function vy(c) {
        return l(this, "_erasNarrowRegex") || ol.call(this), c ? this._erasNarrowRegex : this._erasRegex;
      }
      function il(c, f) {
        return f.erasAbbrRegex(c);
      }
      function Ty(c, f) {
        return f.erasNameRegex(c);
      }
      function Oy(c, f) {
        return f.erasNarrowRegex(c);
      }
      function Ey(c, f) {
        return f._eraYearOrdinalRegex || Wt;
      }
      function ol() {
        var c = [], f = [], m = [], y = [], k, C, E, F, K, se = this.eras();
        for (k = 0, C = se.length; k < C; ++k)
          E = mt(se[k].name), F = mt(se[k].abbr), K = mt(se[k].narrow), f.push(E), c.push(F), m.push(K), y.push(E), y.push(F), y.push(K);
        this._erasRegex = new RegExp("^(" + y.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
          "^(" + m.join("|") + ")",
          "i"
        );
      }
      B(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100;
      }), B(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100;
      });
      function Ks(c, f) {
        B(0, [c, c.length], 0, f);
      }
      Ks("gggg", "weekYear"), Ks("ggggg", "weekYear"), Ks("GGGG", "isoWeekYear"), Ks("GGGGG", "isoWeekYear"), P("G", ln), P("g", ln), P("GG", ue, tt), P("gg", ue, tt), P("GGGG", Fr, zr), P("gggg", Fr, zr), P("GGGGG", dr, cr), P("ggggg", dr, cr), Br(
        ["gggg", "ggggg", "GGGG", "GGGGG"],
        function(c, f, m, y) {
          f[y.substr(0, 2)] = Z(c);
        }
      ), Br(["gg", "GG"], function(c, f, m, y) {
        f[y] = r.parseTwoDigitYear(c);
      });
      function Ay(c) {
        return ru.call(
          this,
          c,
          this.week(),
          this.weekday() + this.localeData()._week.dow,
          this.localeData()._week.dow,
          this.localeData()._week.doy
        );
      }
      function Dy(c) {
        return ru.call(
          this,
          c,
          this.isoWeek(),
          this.isoWeekday(),
          1,
          4
        );
      }
      function Ny() {
        return jt(this.year(), 1, 4);
      }
      function Ry() {
        return jt(this.isoWeekYear(), 1, 4);
      }
      function Iy() {
        var c = this.localeData()._week;
        return jt(this.year(), c.dow, c.doy);
      }
      function _y() {
        var c = this.localeData()._week;
        return jt(this.weekYear(), c.dow, c.doy);
      }
      function ru(c, f, m, y, k) {
        var C;
        return c == null ? Vr(this, y, k).year : (C = jt(c, y, k), f > C && (f = C), Py.call(this, c, f, m, y, k));
      }
      function Py(c, f, m, y, k) {
        var C = _c(c, f, m, y, k), E = $r(C.year, 0, C.dayOfYear);
        return this.year(E.getUTCFullYear()), this.month(E.getUTCMonth()), this.date(E.getUTCDate()), this;
      }
      B("Q", 0, "Qo", "quarter"), P("Q", _s), ae("Q", function(c, f) {
        f[Vt] = (Z(c) - 1) * 3;
      });
      function Ly(c) {
        return c == null ? Math.ceil((this.month() + 1) / 3) : this.month((c - 1) * 3 + this.month() % 3);
      }
      B("D", ["DD", 2], "Do", "date"), P("D", ue, $t), P("DD", ue, tt), P("Do", function(c, f) {
        return c ? f._dayOfMonthOrdinalParse || f._ordinalParse : f._dayOfMonthOrdinalParseLenient;
      }), ae(["D", "DD"], Rt), ae("Do", function(c, f) {
        f[Rt] = Z(c.match(ue)[0]);
      });
      var su = fr("Date", !0);
      B("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), P("DDD", ur), P("DDDD", Ps), ae(["DDD", "DDDD"], function(c, f, m) {
        m._dayOfYear = Z(c);
      });
      function zy(c) {
        var f = Math.round(
          (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
        ) + 1;
        return c == null ? f : this.add(c - f, "d");
      }
      B("m", ["mm", 2], 0, "minute"), P("m", ue, J), P("mm", ue, tt), ae(["m", "mm"], Mt);
      var Fy = fr("Minutes", !1);
      B("s", ["ss", 2], 0, "second"), P("s", ue, J), P("ss", ue, tt), ae(["s", "ss"], Yt);
      var By = fr("Seconds", !1);
      B("S", 0, 0, function() {
        return ~~(this.millisecond() / 100);
      }), B(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10);
      }), B(0, ["SSS", 3], 0, "millisecond"), B(0, ["SSSS", 4], 0, function() {
        return this.millisecond() * 10;
      }), B(0, ["SSSSS", 5], 0, function() {
        return this.millisecond() * 100;
      }), B(0, ["SSSSSS", 6], 0, function() {
        return this.millisecond() * 1e3;
      }), B(0, ["SSSSSSS", 7], 0, function() {
        return this.millisecond() * 1e4;
      }), B(0, ["SSSSSSSS", 8], 0, function() {
        return this.millisecond() * 1e5;
      }), B(0, ["SSSSSSSSS", 9], 0, function() {
        return this.millisecond() * 1e6;
      }), P("S", ur, _s), P("SS", ur, tt), P("SSS", ur, Ps);
      var dn, iu;
      for (dn = "SSSS"; dn.length <= 9; dn += "S")
        P(dn, Wt);
      function Hy(c, f) {
        f[Ln] = Z(("0." + c) * 1e3);
      }
      for (dn = "S"; dn.length <= 9; dn += "S")
        ae(dn, Hy);
      iu = fr("Milliseconds", !1), B("z", 0, 0, "zoneAbbr"), B("zz", 0, 0, "zoneName");
      function Wy() {
        return this._isUTC ? "UTC" : "";
      }
      function $y() {
        return this._isUTC ? "Coordinated Universal Time" : "";
      }
      var _ = O.prototype;
      _.add = _g, _.calendar = Wg, _.clone = $g, _.diff = Gg, _.endOf = iy, _.format = Xg, _.from = ey, _.fromNow = ty, _.to = ny, _.toNow = ry, _.get = Zp, _.invalidAt = py, _.isAfter = Vg, _.isBefore = Yg, _.isBetween = jg, _.isSame = Ug, _.isSameOrAfter = qg, _.isSameOrBefore = Kg, _.isValid = fy, _.lang = Zc, _.locale = Qc, _.localeData = Xc, _.max = fg, _.min = dg, _.parsingFlags = hy, _.set = Xp, _.startOf = sy, _.subtract = Pg, _.toArray = cy, _.toObject = uy, _.toDate = ay, _.toISOString = Qg, _.inspect = Zg, typeof Symbol < "u" && Symbol.for != null && (_[Symbol.for("nodejs.util.inspect.custom")] = function() {
        return "Moment<" + this.format() + ">";
      }), _.toJSON = dy, _.toString = Jg, _.unix = ly, _.valueOf = oy, _.creationData = my, _.eraName = Sy, _.eraNarrow = wy, _.eraAbbr = ky, _.eraYear = xy, _.year = Oc, _.isLeapYear = Qp, _.weekYear = Ay, _.isoWeekYear = Dy, _.quarter = _.quarters = Ly, _.month = Rc, _.daysInMonth = am, _.week = _.weeks = gm, _.isoWeek = _.isoWeeks = ym, _.weeksInYear = Iy, _.weeksInWeekYear = _y, _.isoWeeksInYear = Ny, _.isoWeeksInISOWeekYear = Ry, _.date = su, _.day = _.days = Dm, _.weekday = Nm, _.isoWeekday = Rm, _.dayOfYear = zy, _.hour = _.hours = Bm, _.minute = _.minutes = Fy, _.second = _.seconds = By, _.millisecond = _.milliseconds = iu, _.utcOffset = kg, _.utc = Cg, _.local = Mg, _.parseZone = vg, _.hasAlignedHourOffset = Tg, _.isDST = Og, _.isLocal = Ag, _.isUtcOffset = Dg, _.isUtc = Uc, _.isUTC = Uc, _.zoneAbbr = Wy, _.zoneName = $y, _.dates = te(
        "dates accessor is deprecated. Use date instead.",
        su
      ), _.months = te(
        "months accessor is deprecated. Use month instead",
        Rc
      ), _.years = te(
        "years accessor is deprecated. Use year instead",
        Oc
      ), _.zone = te(
        "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
        xg
      ), _.isDSTShifted = te(
        "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
        Eg
      );
      function Vy(c) {
        return he(c * 1e3);
      }
      function Yy() {
        return he.apply(null, arguments).parseZone();
      }
      function ou(c) {
        return c;
      }
      var le = W.prototype;
      le.calendar = qe, le.longDateFormat = Io, le.invalidDate = Po, le.ordinal = Fo, le.preparse = ou, le.postformat = ou, le.relativeTime = Ho, le.pastFuture = Wo, le.set = j, le.eras = gy, le.erasParse = yy, le.erasConvertYear = by, le.erasAbbrRegex = My, le.erasNameRegex = Cy, le.erasNarrowRegex = vy, le.months = sm, le.monthsShort = im, le.monthsParse = lm, le.monthsRegex = um, le.monthsShortRegex = cm, le.week = fm, le.firstDayOfYear = mm, le.firstDayOfWeek = pm, le.weekdays = vm, le.weekdaysMin = Om, le.weekdaysShort = Tm, le.weekdaysParse = Am, le.weekdaysRegex = Im, le.weekdaysShortRegex = _m, le.weekdaysMinRegex = Pm, le.isPM = zm, le.meridiem = Hm;
      function Gs(c, f, m, y) {
        var k = Ut(), C = b().set(y, f);
        return k[m](C, c);
      }
      function lu(c, f, m) {
        if (d(c) && (f = c, c = void 0), c = c || "", f != null)
          return Gs(c, f, m, "month");
        var y, k = [];
        for (y = 0; y < 12; y++)
          k[y] = Gs(c, y, m, "month");
        return k;
      }
      function ll(c, f, m, y) {
        typeof c == "boolean" ? (d(f) && (m = f, f = void 0), f = f || "") : (f = c, m = f, c = !1, d(f) && (m = f, f = void 0), f = f || "");
        var k = Ut(), C = c ? k._week.dow : 0, E, F = [];
        if (m != null)
          return Gs(f, (m + C) % 7, y, "day");
        for (E = 0; E < 7; E++)
          F[E] = Gs(f, (E + C) % 7, y, "day");
        return F;
      }
      function jy(c, f) {
        return lu(c, f, "months");
      }
      function Uy(c, f) {
        return lu(c, f, "monthsShort");
      }
      function qy(c, f, m) {
        return ll(c, f, m, "weekdays");
      }
      function Ky(c, f, m) {
        return ll(c, f, m, "weekdaysShort");
      }
      function Gy(c, f, m) {
        return ll(c, f, m, "weekdaysMin");
      }
      un("en", {
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
        ordinal: function(c) {
          var f = c % 10, m = Z(c % 100 / 10) === 1 ? "th" : f === 1 ? "st" : f === 2 ? "nd" : f === 3 ? "rd" : "th";
          return c + m;
        }
      }), r.lang = te(
        "moment.lang is deprecated. Use moment.locale instead.",
        un
      ), r.langData = te(
        "moment.langData is deprecated. Use moment.localeData instead.",
        Ut
      );
      var qt = Math.abs;
      function Jy() {
        var c = this._data;
        return this._milliseconds = qt(this._milliseconds), this._days = qt(this._days), this._months = qt(this._months), c.milliseconds = qt(c.milliseconds), c.seconds = qt(c.seconds), c.minutes = qt(c.minutes), c.hours = qt(c.hours), c.months = qt(c.months), c.years = qt(c.years), this;
      }
      function au(c, f, m, y) {
        var k = vt(f, m);
        return c._milliseconds += y * k._milliseconds, c._days += y * k._days, c._months += y * k._months, c._bubble();
      }
      function Qy(c, f) {
        return au(this, c, f, 1);
      }
      function Zy(c, f) {
        return au(this, c, f, -1);
      }
      function cu(c) {
        return c < 0 ? Math.floor(c) : Math.ceil(c);
      }
      function Xy() {
        var c = this._milliseconds, f = this._days, m = this._months, y = this._data, k, C, E, F, K;
        return c >= 0 && f >= 0 && m >= 0 || c <= 0 && f <= 0 && m <= 0 || (c += cu(al(m) + f) * 864e5, f = 0, m = 0), y.milliseconds = c % 1e3, k = lt(c / 1e3), y.seconds = k % 60, C = lt(k / 60), y.minutes = C % 60, E = lt(C / 60), y.hours = E % 24, f += lt(E / 24), K = lt(uu(f)), m += K, f -= cu(al(K)), F = lt(m / 12), m %= 12, y.days = f, y.months = m, y.years = F, this;
      }
      function uu(c) {
        return c * 4800 / 146097;
      }
      function al(c) {
        return c * 146097 / 4800;
      }
      function e0(c) {
        if (!this.isValid())
          return NaN;
        var f, m, y = this._milliseconds;
        if (c = it(c), c === "month" || c === "quarter" || c === "year")
          switch (f = this._days + y / 864e5, m = this._months + uu(f), c) {
            case "month":
              return m;
            case "quarter":
              return m / 3;
            case "year":
              return m / 12;
          }
        else
          switch (f = this._days + Math.round(al(this._months)), c) {
            case "week":
              return f / 7 + y / 6048e5;
            case "day":
              return f + y / 864e5;
            case "hour":
              return f * 24 + y / 36e5;
            case "minute":
              return f * 1440 + y / 6e4;
            case "second":
              return f * 86400 + y / 1e3;
            case "millisecond":
              return Math.floor(f * 864e5) + y;
            default:
              throw new Error("Unknown unit " + c);
          }
      }
      function Kt(c) {
        return function() {
          return this.as(c);
        };
      }
      var du = Kt("ms"), t0 = Kt("s"), n0 = Kt("m"), r0 = Kt("h"), s0 = Kt("d"), i0 = Kt("w"), o0 = Kt("M"), l0 = Kt("Q"), a0 = Kt("y"), c0 = du;
      function u0() {
        return vt(this);
      }
      function d0(c) {
        return c = it(c), this.isValid() ? this[c + "s"]() : NaN;
      }
      function Fn(c) {
        return function() {
          return this.isValid() ? this._data[c] : NaN;
        };
      }
      var f0 = Fn("milliseconds"), h0 = Fn("seconds"), p0 = Fn("minutes"), m0 = Fn("hours"), g0 = Fn("days"), y0 = Fn("months"), b0 = Fn("years");
      function S0() {
        return lt(this.days() / 7);
      }
      var Gt = Math.round, gr = {
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
      function w0(c, f, m, y, k) {
        return k.relativeTime(f || 1, !!m, c, y);
      }
      function k0(c, f, m, y) {
        var k = vt(c).abs(), C = Gt(k.as("s")), E = Gt(k.as("m")), F = Gt(k.as("h")), K = Gt(k.as("d")), se = Gt(k.as("M")), nt = Gt(k.as("w")), Jt = Gt(k.as("y")), fn = C <= m.ss && ["s", C] || C < m.s && ["ss", C] || E <= 1 && ["m"] || E < m.m && ["mm", E] || F <= 1 && ["h"] || F < m.h && ["hh", F] || K <= 1 && ["d"] || K < m.d && ["dd", K];
        return m.w != null && (fn = fn || nt <= 1 && ["w"] || nt < m.w && ["ww", nt]), fn = fn || se <= 1 && ["M"] || se < m.M && ["MM", se] || Jt <= 1 && ["y"] || ["yy", Jt], fn[2] = f, fn[3] = +c > 0, fn[4] = y, w0.apply(null, fn);
      }
      function x0(c) {
        return c === void 0 ? Gt : typeof c == "function" ? (Gt = c, !0) : !1;
      }
      function C0(c, f) {
        return gr[c] === void 0 ? !1 : f === void 0 ? gr[c] : (gr[c] = f, c === "s" && (gr.ss = f - 1), !0);
      }
      function M0(c, f) {
        if (!this.isValid())
          return this.localeData().invalidDate();
        var m = !1, y = gr, k, C;
        return typeof c == "object" && (f = c, c = !1), typeof c == "boolean" && (m = c), typeof f == "object" && (y = Object.assign({}, gr, f), f.s != null && f.ss == null && (y.ss = f.s - 1)), k = this.localeData(), C = k0(this, !m, y, k), m && (C = k.pastFuture(+this, C)), k.postformat(C);
      }
      var cl = Math.abs;
      function yr(c) {
        return (c > 0) - (c < 0) || +c;
      }
      function Js() {
        if (!this.isValid())
          return this.localeData().invalidDate();
        var c = cl(this._milliseconds) / 1e3, f = cl(this._days), m = cl(this._months), y, k, C, E, F = this.asSeconds(), K, se, nt, Jt;
        return F ? (y = lt(c / 60), k = lt(y / 60), c %= 60, y %= 60, C = lt(m / 12), m %= 12, E = c ? c.toFixed(3).replace(/\.?0+$/, "") : "", K = F < 0 ? "-" : "", se = yr(this._months) !== yr(F) ? "-" : "", nt = yr(this._days) !== yr(F) ? "-" : "", Jt = yr(this._milliseconds) !== yr(F) ? "-" : "", K + "P" + (C ? se + C + "Y" : "") + (m ? se + m + "M" : "") + (f ? nt + f + "D" : "") + (k || y || c ? "T" : "") + (k ? Jt + k + "H" : "") + (y ? Jt + y + "M" : "") + (c ? Jt + E + "S" : "")) : "P0D";
      }
      var ie = Vs.prototype;
      ie.isValid = yg, ie.abs = Jy, ie.add = Qy, ie.subtract = Zy, ie.as = e0, ie.asMilliseconds = du, ie.asSeconds = t0, ie.asMinutes = n0, ie.asHours = r0, ie.asDays = s0, ie.asWeeks = i0, ie.asMonths = o0, ie.asQuarters = l0, ie.asYears = a0, ie.valueOf = c0, ie._bubble = Xy, ie.clone = u0, ie.get = d0, ie.milliseconds = f0, ie.seconds = h0, ie.minutes = p0, ie.hours = m0, ie.days = g0, ie.weeks = S0, ie.months = y0, ie.years = b0, ie.humanize = M0, ie.toISOString = Js, ie.toString = Js, ie.toJSON = Js, ie.locale = Qc, ie.localeData = Xc, ie.toIsoString = te(
        "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
        Js
      ), ie.lang = Zc, B("X", 0, 0, "unix"), B("x", 0, 0, "valueOf"), P("x", ln), P("X", Fs), ae("X", function(c, f, m) {
        m._d = new Date(parseFloat(c) * 1e3);
      }), ae("x", function(c, f, m) {
        m._d = new Date(Z(c));
      });
      //! moment.js
      return r.version = "2.30.1", s(he), r.fn = _, r.min = hg, r.max = pg, r.now = mg, r.utc = b, r.unix = Vy, r.months = jy, r.isDate = h, r.locale = un, r.invalid = T, r.duration = vt, r.isMoment = L, r.weekdays = qy, r.parseZone = Yy, r.localeData = Ut, r.isDuration = Ys, r.monthsShort = Uy, r.weekdaysMin = Gy, r.defineLocale = Jo, r.updateLocale = Ym, r.locales = jm, r.weekdaysShort = Ky, r.normalizeUnits = it, r.relativeTimeRounding = x0, r.relativeTimeThreshold = C0, r.calendarFormat = Hg, r.prototype = _, r.HTML5_FMT = {
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
  }(fl)), fl.exports;
}
(function(n, e) {
  (function(t, r) {
    r(typeof Mf == "function" ? qb() : t.moment);
  })(Cf, function(t) {
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
        hh: function(s) {
          return s === 2 ? "שעתיים" : s + " שעות";
        },
        d: "יום",
        dd: function(s) {
          return s === 2 ? "יומיים" : s + " ימים";
        },
        M: "חודש",
        MM: function(s) {
          return s === 2 ? "חודשיים" : s + " חודשים";
        },
        y: "שנה",
        yy: function(s) {
          return s === 2 ? "שנתיים" : s % 10 === 0 && s !== 10 ? s + " שנה" : s + " שנים";
        }
      },
      meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
      isPM: function(s) {
        return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(s);
      },
      meridiem: function(s, i, o) {
        return s < 5 ? "לפנות בוקר" : s < 10 ? "בבוקר" : s < 12 ? o ? 'לפנה"צ' : "לפני הצהריים" : s < 18 ? o ? 'אחה"צ' : "אחרי הצהריים" : "בערב";
      }
    });
    return r;
  });
})();
const Kb = Pe(
  ({
    mask: n,
    // legacy — no-op in v7+
    sx: e,
    className: t,
    error: r,
    helperText: s,
    slotProps: i,
    onChange: o,
    ...l
  }, a) => {
    const u = ["ips-time-picker", t].filter(Boolean).join(" "), d = {
      ...i,
      textField: {
        ...i == null ? void 0 : i.textField,
        ...r !== void 0 ? { error: r } : {},
        ...s !== void 0 ? { helperText: s } : {}
      }
    };
    return /* @__PURE__ */ M(ne, { ref: a, className: u, sx: e, children: /* @__PURE__ */ M(Fa, { dateAdapter: _0, adapterLocale: "he", children: /* @__PURE__ */ M(
      I0,
      {
        ...l,
        onChange: o ? (p) => o(p) : void 0,
        enableAccessibleFieldDOMStructure: !1,
        slotProps: d,
        slots: {
          // IpsTextField is fully compatible with MUI TextFieldProps
          textField: Os
        }
      }
    ) }) });
  }
);
Kb.displayName = "IpsTimePicker";
const Gb = Pe(
  ({
    format: n = "dd/MM/yyyy",
    rtl: e = !1,
    error: t,
    helperText: r,
    slotProps: s,
    sx: i,
    className: o,
    readOnly: l,
    onChange: a,
    ...u
  }, d) => {
    const h = ["ips-date-picker", o].filter(Boolean).join(" "), p = {
      ...s,
      textField: {
        ...s == null ? void 0 : s.textField,
        ...t !== void 0 ? { error: t } : {},
        ...r !== void 0 ? { helperText: r } : {},
        ...l ? { readOnly: !0 } : {}
      }
    };
    return /* @__PURE__ */ M(
      ne,
      {
        ref: d,
        className: h,
        dir: e ? "rtl" : void 0,
        sx: i,
        children: /* @__PURE__ */ M(Fa, { dateAdapter: mf, children: /* @__PURE__ */ M(
          P0,
          {
            format: n,
            ...u,
            readOnly: l,
            onChange: a ? (b) => a(b) : void 0,
            enableAccessibleFieldDOMStructure: !1,
            slotProps: p,
            slots: {
              textField: Os
            }
          }
        ) })
      }
    );
  }
);
Gb.displayName = "IpsDatePicker";
const Jb = Pe(
  ({
    format: n = "dd/MM/yyyy HH:mm",
    rtl: e = !1,
    error: t,
    helperText: r,
    slotProps: s,
    sx: i,
    className: o,
    readOnly: l,
    onChange: a,
    ...u
  }, d) => {
    const h = ["ips-date-time-picker", o].filter(Boolean).join(" "), p = {
      ...s,
      textField: {
        ...s == null ? void 0 : s.textField,
        ...t !== void 0 ? { error: t } : {},
        ...r !== void 0 ? { helperText: r } : {},
        ...l ? { readOnly: !0 } : {}
      }
    };
    return /* @__PURE__ */ M(
      ne,
      {
        ref: d,
        className: h,
        dir: e ? "rtl" : void 0,
        sx: i,
        children: /* @__PURE__ */ M(Fa, { dateAdapter: mf, children: /* @__PURE__ */ M(
          L0,
          {
            format: n,
            ...u,
            readOnly: l,
            onChange: a ? (b) => a(b) : void 0,
            enableAccessibleFieldDOMStructure: !1,
            slotProps: p,
            slots: {
              textField: Os
            }
          }
        ) })
      }
    );
  }
);
Jb.displayName = "IpsDateTimePicker";
const Qb = Pe(
  ({
    rows: n,
    columns: e,
    loading: t = !1,
    pageSize: r = 25,
    checkboxSelection: s = !1,
    disableColumnFilter: i = !1,
    onRowClick: o,
    sx: l,
    className: a,
    ...u
  }, d) => {
    const h = ["ips-table", a].filter(Boolean).join(" ");
    return /* @__PURE__ */ M(ne, { ref: d, className: h, sx: l, children: /* @__PURE__ */ M(
      z0,
      {
        rows: n,
        columns: e,
        loading: t,
        checkboxSelection: s,
        disableColumnFilter: i,
        onRowClick: o,
        initialState: {
          pagination: { paginationModel: { pageSize: r } },
          ...u.initialState
        },
        pageSizeOptions: [10, 25, 50, 100],
        ...u,
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
Qb.displayName = "IpsTable";
function Zb({ open: n, onClose: e, onCapture: t }) {
  const r = Ye(null), s = Ye(null), i = Ye(null), [o, l] = ce(null), [a, u] = ce(!1), [d, h] = ce("environment"), [p, g] = ce(null), [b, S] = ce(!1), w = Lt(() => {
    var R;
    (R = i.current) == null || R.getTracks().forEach((O) => O.stop()), i.current = null, S(!1);
  }, []), x = Lt(async () => {
    w(), u(!0), l(null), S(!1);
    try {
      const R = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: d, width: { ideal: 1280 }, height: { ideal: 720 } },
        audio: !1
      });
      i.current = R;
      const O = () => {
        const L = r.current;
        if (!L) {
          requestAnimationFrame(O);
          return;
        }
        L.srcObject = R, L.onloadedmetadata = () => {
          L.play().then(() => {
            u(!1), S(!0);
          }).catch(() => {
            u(!1), S(!0);
          });
        };
      };
      O();
    } catch {
      l("לא ניתן לגשת למצלמה. ודא שניתנה הרשאה בדפדפן."), u(!1);
    }
  }, [d, w]);
  Or(() => {
    if (!n) {
      w(), g(null), l(null);
      return;
    }
    return g(null), x(), () => w();
  }, [n, d]);
  const v = Lt(() => {
    const R = r.current, O = s.current;
    !R || !O || R.videoWidth === 0 || (O.width = R.videoWidth, O.height = R.videoHeight, O.getContext("2d").drawImage(R, 0, 0), g(O.toDataURL("image/png")), w());
  }, [w]);
  function T() {
    g(null), x();
  }
  function D() {
    const R = s.current;
    R && R.toBlob((O) => {
      O && (t(new File([O], `camera-${Date.now()}.png`, { type: "image/png" })), A());
    }, "image/png");
  }
  function A() {
    w(), g(null), l(null), e();
  }
  return /* @__PURE__ */ Q(Ba, { open: n, onClose: A, maxWidth: "sm", fullWidth: !0, children: [
    /* @__PURE__ */ Q(Ha, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
      /* @__PURE__ */ M(Ul, {}),
      " צילום תמונה"
    ] }),
    /* @__PURE__ */ Q(Wa, { children: [
      o && /* @__PURE__ */ M(Ie, { color: "error", sx: { mb: 1 }, children: o }),
      !p && /* @__PURE__ */ Q(ne, { sx: { position: "relative", width: "100%", bgcolor: "#000", borderRadius: 1, overflow: "hidden", minHeight: 200 }, children: [
        a && /* @__PURE__ */ M(ne, { sx: { position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }, children: /* @__PURE__ */ M(Ts, { sx: { color: "#fff" } }) }),
        /* @__PURE__ */ M(
          "video",
          {
            ref: r,
            style: { width: "100%", display: "block" },
            autoPlay: !0,
            playsInline: !0,
            muted: !0
          }
        )
      ] }),
      p && /* @__PURE__ */ M(ne, { sx: { width: "100%", borderRadius: 1, overflow: "hidden" }, children: /* @__PURE__ */ M("img", { src: p, alt: "captured", style: { width: "100%", display: "block" } }) }),
      /* @__PURE__ */ M("canvas", { ref: s, style: { display: "none" } })
    ] }),
    /* @__PURE__ */ Q(gf, { sx: { justifyContent: "space-between", px: 3, pb: 2 }, children: [
      /* @__PURE__ */ M(ct, { onClick: A, color: "inherit", children: "ביטול" }),
      p ? /* @__PURE__ */ Q(ne, { sx: { display: "flex", gap: 1 }, children: [
        /* @__PURE__ */ M(ct, { variant: "outlined", onClick: T, children: "צלם שוב" }),
        /* @__PURE__ */ M(ct, { variant: "contained", onClick: D, children: "השתמש בתמונה" })
      ] }) : /* @__PURE__ */ Q(ne, { sx: { display: "flex", gap: 1 }, children: [
        /* @__PURE__ */ M(
          ct,
          {
            variant: "outlined",
            startIcon: /* @__PURE__ */ M(j0, {}),
            onClick: () => h((R) => R === "user" ? "environment" : "user"),
            children: "הפוך מצלמה"
          }
        ),
        /* @__PURE__ */ M(
          ct,
          {
            variant: "contained",
            startIcon: /* @__PURE__ */ M(Ul, {}),
            onClick: v,
            disabled: !b || !!o,
            children: "צלם"
          }
        )
      ] })
    ] })
  ] });
}
function Xb({ open: n, onClose: e, onScan: t, containerId: r = "dwtcontrolContainer" }) {
  const [s, i] = ce("מאתחל..."), [o, l] = ce(null), [a, u] = ce(!1), d = Ye(null);
  Or(() => {
    n && (l(null), p());
  }, [n]);
  function h() {
    var w;
    return ((w = window.Dynamsoft) == null ? void 0 : w.DWT.GetWebTwain(r)) ?? null;
  }
  async function p() {
    u(!0), i("מאתחל Web TWAIN...");
    try {
      if (!window.Dynamsoft)
        throw new Error("NO_DWT");
      window.Dynamsoft.DWT.RegisterEvent("OnWebTwainReady", () => {
        d.current = h(), i("מוכן לסריקה"), u(!1);
      }), window.Dynamsoft.DWT.Load();
    } catch (w) {
      const x = w instanceof Error ? w.message : "";
      l(x === "NO_DWT" ? "NO_DWT" : w instanceof Error ? w.message : "שגיאה באתחול סורק"), u(!1);
    }
  }
  async function g() {
    const w = d.current ?? h();
    if (!w) {
      l("Web TWAIN לא מוכן");
      return;
    }
    u(!0), l(null);
    try {
      await w.SelectSourceAsync(), w.OpenSource(), w.RegisterEvent("OnPostTransfer", () => {
        i(`נסרקו ${w.HowManyImagesInBuffer} עמודים`);
      }), w.RegisterEvent("OnPostAllTransfers", () => {
        w.CloseSource(), b(w);
      }), w.AcquireImage();
    } catch {
      l("שגיאה בבחירת סורק"), u(!1);
    }
  }
  function b(w) {
    const x = Array.from({ length: w.HowManyImagesInBuffer }, (v, T) => T);
    w.ConvertToBlob(
      x,
      w.EnumDWT_ImageType.IT_PNG,
      (v) => {
        const T = new File([v], `scan-${Date.now()}.png`, { type: "image/png" });
        t(T), S();
      },
      (v, T, D) => {
        l(`שגיאת המרה: ${D}`), u(!1);
      }
    );
  }
  function S() {
    l(null), i("מאתחל..."), u(!1), e();
  }
  return /* @__PURE__ */ Q(Ba, { open: n, onClose: S, maxWidth: "xs", fullWidth: !0, children: [
    /* @__PURE__ */ Q(Ha, { sx: { display: "flex", alignItems: "center", gap: 1 }, children: [
      /* @__PURE__ */ M(ql, {}),
      " סריקת מסמך"
    ] }),
    /* @__PURE__ */ Q(Wa, { children: [
      /* @__PURE__ */ M(ne, { id: r, sx: { display: "none" } }),
      o === "NO_DWT" ? /* @__PURE__ */ Q(ne, { sx: { py: 1, textAlign: "center" }, children: [
        /* @__PURE__ */ M(Ie, { fontSize: 40, sx: { mb: 1 }, children: "🖨️" }),
        /* @__PURE__ */ M(Ie, { fontWeight: 600, gutterBottom: !0, children: "לא נמצא סורק זמין" }),
        /* @__PURE__ */ M(Ie, { variant: "body2", color: "text.secondary", children: "ודא שהסורק מחובר למחשב ומופעל, ונסה שוב." }),
        /* @__PURE__ */ M(Ie, { variant: "body2", color: "text.secondary", sx: { mt: 0.5 }, children: "לתמיכה פנה למנהל המערכת." })
      ] }) : o ? /* @__PURE__ */ M(Ie, { color: "error", children: o }) : a ? /* @__PURE__ */ Q(ne, { sx: { display: "flex", alignItems: "center", gap: 2, py: 2 }, children: [
        /* @__PURE__ */ M(Ts, { size: 24 }),
        /* @__PURE__ */ M(Ie, { children: s })
      ] }) : /* @__PURE__ */ M(Ie, { color: "text.secondary", children: s })
    ] }),
    /* @__PURE__ */ Q(gf, { sx: { px: 3, pb: 2 }, children: [
      /* @__PURE__ */ M(ct, { onClick: S, color: "inherit", children: "ביטול" }),
      /* @__PURE__ */ M(
        ct,
        {
          variant: "contained",
          startIcon: /* @__PURE__ */ M(ql, {}),
          onClick: g,
          disabled: a || !!o,
          children: "סרוק"
        }
      )
    ] })
  ] });
}
function e1({ imageBitmap: n, onCrop: e, onCancel: t }) {
  const r = Ye(null), s = Ye(null), [i, o] = ce(null);
  function l(S) {
    const w = r.current;
    if (!w) return;
    const x = w.getContext("2d");
    x.clearRect(0, 0, w.width, w.height), x.globalAlpha = 0.45, x.drawImage(n, 0, 0, w.width, w.height), x.globalAlpha = 1, S && (x.clearRect(S.x, S.y, S.w, S.h), x.drawImage(
      n,
      S.x,
      S.y,
      S.w,
      S.h,
      S.x,
      S.y,
      S.w,
      S.h
    ), x.strokeStyle = "#1565C0", x.lineWidth = 2, x.strokeRect(S.x, S.y, S.w, S.h), x.fillStyle = "#1565C0", x.font = "13px sans-serif", x.fillText(
      `${Math.abs(S.w)} × ${Math.abs(S.h)}`,
      S.x + 4,
      S.y - 6
    ));
  }
  function a(S) {
    const w = r.current.getBoundingClientRect();
    return { x: S.clientX - w.left, y: S.clientY - w.top };
  }
  function u(S) {
    s.current = a(S), o(null), l(null);
  }
  function d(S) {
    if (!s.current) return;
    const w = a(S), x = {
      x: Math.min(s.current.x, w.x),
      y: Math.min(s.current.y, w.y),
      w: Math.abs(w.x - s.current.x),
      h: Math.abs(w.y - s.current.y)
    };
    o(x), l(x);
  }
  function h() {
    s.current = null;
  }
  function p() {
    if (!i || i.w < 4 || i.h < 4) return;
    const S = r.current, w = n.width / S.width, x = n.height / S.height, v = document.createElement("canvas");
    v.width = i.w * w, v.height = i.h * x, v.getContext("2d").drawImage(
      n,
      i.x * w,
      i.y * x,
      v.width,
      v.height,
      0,
      0,
      v.width,
      v.height
    ), v.toBlob((D) => {
      D && e(new File([D], `screenshot-${Date.now()}.png`, { type: "image/png" }));
    }, "image/png");
  }
  const g = Ye(!1), b = (S) => {
    !S || g.current || (g.current = !0, r.current = S, S.width = window.innerWidth, S.height = window.innerHeight, document.body.style.overflow = "hidden", l(null));
  };
  return Te.useEffect(() => () => {
    document.body.style.overflow = "";
  }, []), /* @__PURE__ */ Q(
    "div",
    {
      style: {
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        cursor: "crosshair",
        userSelect: "none"
      },
      children: [
        /* @__PURE__ */ M(
          "canvas",
          {
            ref: b,
            style: { display: "block", width: "100%", height: "100%" },
            onMouseDown: u,
            onMouseMove: d,
            onMouseUp: h
          }
        ),
        /* @__PURE__ */ Q("div", { style: {
          position: "fixed",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 12,
          background: "rgba(0,0,0,0.7)",
          borderRadius: 8,
          padding: "10px 20px"
        }, children: [
          /* @__PURE__ */ M("span", { style: { color: "#fff", fontSize: 14, alignSelf: "center" }, children: i ? 'גרור לשינוי • לחץ "אישור" לקבלת הצילום' : "גרור לבחירת אזור" }),
          /* @__PURE__ */ M(
            "button",
            {
              onClick: p,
              disabled: !i || i.w < 4,
              style: {
                background: "#1565C0",
                color: "#fff",
                border: "none",
                borderRadius: 6,
                padding: "6px 18px",
                cursor: "pointer",
                fontSize: 14
              },
              children: "אישור"
            }
          ),
          /* @__PURE__ */ M(
            "button",
            {
              onClick: t,
              style: {
                background: "transparent",
                color: "#fff",
                border: "1px solid #fff",
                borderRadius: 6,
                padding: "6px 18px",
                cursor: "pointer",
                fontSize: 14
              },
              children: "ביטול"
            }
          )
        ] })
      ]
    }
  );
}
function vf({
  onFilesAdded: n,
  camera: e = !1,
  screenshot: t = !0,
  scan: r = !1,
  accept: s,
  multiple: i = !0,
  disabled: o = !1,
  containerId: l
}) {
  const a = or(), u = Ye(null), d = Ye(null), h = Ye(null), [p, g] = ce(!1), [b, S] = ce(null), [w, x] = ce(null), [v, T] = ce(!1), [D, A] = ce(!1), [R, O] = ce("idle"), [L, Y] = ce(null), te = s == null ? void 0 : s.join(","), re = (W) => {
    W.preventDefault(), o || g(!0);
  }, ye = (W) => {
    W.preventDefault(), g(!1);
  }, be = (W) => {
    if (W.preventDefault(), g(!1), o) return;
    const G = Array.from(W.dataTransfer.files);
    G.length > 0 && n(G);
  }, j = (W) => {
    const G = Array.from(W.target.files ?? []);
    G.length > 0 && n(G), W.target.value = "";
  }, q = async () => {
    x(null);
    try {
      const W = await navigator.mediaDevices.getDisplayMedia({
        video: { frameRate: 1 },
        // @ts-expect-error non-standard Chrome hints
        selfBrowserSurface: "exclude",
        systemAudio: "exclude"
      }), G = document.createElement("video");
      G.srcObject = W, G.muted = !0, await new Promise((oe, Oe) => {
        G.onloadedmetadata = () => G.play().then(oe).catch(Oe), G.onerror = Oe;
      }), await new Promise((oe) => requestAnimationFrame(() => {
        requestAnimationFrame(() => oe());
      }));
      const we = document.createElement("canvas");
      we.width = G.videoWidth || window.screen.width, we.height = G.videoHeight || window.screen.height, we.getContext("2d").drawImage(G, 0, 0), W.getTracks().forEach((oe) => oe.stop()), G.srcObject = null;
      const qe = await createImageBitmap(we);
      document.visibilityState === "hidden" && (O("waiting"), await new Promise((oe) => {
        const Oe = () => {
          document.visibilityState === "visible" && (document.removeEventListener("visibilitychange", Oe), oe());
        };
        document.addEventListener("visibilitychange", Oe);
      })), O("crop"), Y(qe);
    } catch (W) {
      O("idle"), W instanceof Error && W.name === "NotAllowedError" ? x("הגישה למסך נדחתה על ידי המשתמש") : x("אירעה שגיאה בצילום המסך");
    }
  };
  return /* @__PURE__ */ Q(La, { children: [
    /* @__PURE__ */ M(
      "input",
      {
        ref: u,
        type: "file",
        multiple: i,
        accept: te,
        style: { display: "none" },
        onChange: j
      }
    ),
    e && /* @__PURE__ */ M(
      "input",
      {
        ref: d,
        type: "file",
        accept: "image/*",
        capture: "environment",
        style: { display: "none" },
        onChange: j
      }
    ),
    /* @__PURE__ */ M(
      "input",
      {
        ref: h,
        type: "file",
        accept: "image/*",
        capture: "environment",
        style: { display: "none" },
        onChange: j
      }
    ),
    /* @__PURE__ */ Q(
      ne,
      {
        className: "ips-drop-zone",
        onDragOver: re,
        onDragLeave: ye,
        onDrop: be,
        sx: {
          border: `2px ${p ? "solid" : "dashed"}`,
          borderColor: p ? a.palette.primary.main : a.palette.divider ?? a.palette.grey[300],
          borderRadius: 2,
          bgcolor: p ? hi(a.palette.primary.main, 0.05) : "background.paper",
          p: 3,
          textAlign: "center",
          transition: "all 0.2s",
          opacity: o ? 0.5 : 1,
          pointerEvents: o ? "none" : "auto",
          cursor: "default"
        },
        children: [
          /* @__PURE__ */ M(Ie, { variant: "body1", color: "text.secondary", sx: { mb: 2 }, children: "🗂  גרור קבצים לכאן" }),
          w && /* @__PURE__ */ M(W0, { severity: "error", sx: { mb: 1, textAlign: "right" }, onClose: () => x(null), children: w }),
          /* @__PURE__ */ Q(ne, { sx: { display: "flex", gap: 1, flexWrap: "wrap", justifyContent: "center" }, children: [
            /* @__PURE__ */ M(
              ct,
              {
                variant: "outlined",
                size: "small",
                startIcon: /* @__PURE__ */ M(V0, {}),
                onClick: () => {
                  var W;
                  return (W = u.current) == null ? void 0 : W.click();
                },
                children: "עיין בקבצים"
              }
            ),
            e && /* @__PURE__ */ M(
              ct,
              {
                variant: "outlined",
                size: "small",
                startIcon: /* @__PURE__ */ M(Ul, {}),
                onClick: () => T(!0),
                children: "מצלמה"
              }
            ),
            t && /* @__PURE__ */ M(
              ct,
              {
                variant: "outlined",
                size: "small",
                startIcon: R === "waiting" ? /* @__PURE__ */ M(Ts, { size: 14 }) : /* @__PURE__ */ M(Y0, {}),
                onClick: q,
                disabled: R !== "idle",
                children: R === "waiting" ? "ממתין לחזרה..." : "צילום מסך"
              }
            ),
            r && /* @__PURE__ */ M(
              ct,
              {
                variant: "outlined",
                size: "small",
                startIcon: /* @__PURE__ */ M(ql, {}),
                onClick: () => A(!0),
                children: "סריקה"
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ M(
      $0,
      {
        open: !!b,
        autoHideDuration: 4e3,
        onClose: () => S(null),
        anchorOrigin: { vertical: "bottom", horizontal: "center" },
        message: b
      }
    ),
    /* @__PURE__ */ M(
      Zb,
      {
        open: v,
        onClose: () => T(!1),
        onCapture: (W) => {
          n([W]), T(!1);
        }
      }
    ),
    r && /* @__PURE__ */ M(
      Xb,
      {
        open: D,
        onClose: () => A(!1),
        onScan: (W) => {
          n([W]), A(!1);
        },
        containerId: l
      }
    ),
    L && /* @__PURE__ */ M(
      e1,
      {
        imageBitmap: L,
        onCrop: (W) => {
          n([W]), Y(null), O("idle");
        },
        onCancel: () => {
          Y(null), O("idle");
        }
      }
    )
  ] });
}
vf.displayName = "IpsDropZone";
function t1(n) {
  return n < 1024 * 1024 ? `${(n / 1024).toFixed(0)} KB` : `${(n / (1024 * 1024)).toFixed(2)} MB`;
}
function n1(n) {
  return n.type.startsWith("image/") ? /* @__PURE__ */ M(yf, { fontSize: "small", color: "primary" }) : n.type === "application/pdf" ? /* @__PURE__ */ M(U0, { fontSize: "small", color: "error" }) : /* @__PURE__ */ M(q0, { fontSize: "small", color: "action" });
}
function r1(n) {
  return n.type.startsWith("image/") ? "image" : n.type === "application/pdf" ? "pdf" : "none";
}
function Tf({ file: n, hasError: e = !1, errorMessage: t, onDelete: r }) {
  const s = or(), [i, o] = ce(null), [l, a] = ce("none"), u = () => {
    const h = r1(n), p = URL.createObjectURL(n);
    if (h === "none") {
      window.open(p, "_blank"), setTimeout(() => URL.revokeObjectURL(p), 1e3);
      return;
    }
    o(p), a(h);
  }, d = () => {
    i && URL.revokeObjectURL(i), o(null), a("none");
  };
  return /* @__PURE__ */ Q(La, { children: [
    /* @__PURE__ */ Q(
      ne,
      {
        className: "ips-file-item",
        sx: {
          display: "flex",
          alignItems: "center",
          gap: 1,
          px: 1.5,
          py: 0.75,
          borderRadius: 1,
          bgcolor: e ? s.palette.error.light : s.palette.grey[50],
          border: `1px solid ${e ? s.palette.error.main : s.palette.divider}`,
          "&:hover": {
            bgcolor: e ? s.palette.error.light : s.palette.grey[100]
          }
        },
        children: [
          /* @__PURE__ */ M(ne, { sx: { flexShrink: 0, display: "flex", alignItems: "center" }, children: n1(n) }),
          /* @__PURE__ */ Q(ne, { sx: { flex: 1, minWidth: 0 }, children: [
            /* @__PURE__ */ M(
              Ie,
              {
                variant: "body2",
                noWrap: !0,
                title: n.name,
                sx: { color: e ? "error.dark" : "text.primary" },
                children: n.name
              }
            ),
            e && t && /* @__PURE__ */ M(Ie, { variant: "caption", color: "error.dark", children: t })
          ] }),
          /* @__PURE__ */ M(
            Ie,
            {
              variant: "caption",
              color: "text.secondary",
              sx: { flexShrink: 0, whiteSpace: "nowrap" },
              children: t1(n.size)
            }
          ),
          /* @__PURE__ */ M(Er, { title: "תצוגה מקדימה", placement: "top", children: /* @__PURE__ */ M("span", { children: /* @__PURE__ */ M(Un, { size: "small", onClick: u, "aria-label": "תצוגה מקדימה", children: /* @__PURE__ */ M(K0, { fontSize: "small" }) }) }) }),
          /* @__PURE__ */ M(Er, { title: "מחק", placement: "top", children: /* @__PURE__ */ M("span", { children: /* @__PURE__ */ M(
            Un,
            {
              size: "small",
              onClick: () => r(n),
              "aria-label": "מחק קובץ",
              sx: { color: "error.main" },
              children: /* @__PURE__ */ M(G0, { fontSize: "small" })
            }
          ) }) })
        ]
      }
    ),
    /* @__PURE__ */ Q(
      Ba,
      {
        open: !!i,
        onClose: d,
        maxWidth: "md",
        fullWidth: !0,
        children: [
          /* @__PURE__ */ Q(Ha, { sx: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
            /* @__PURE__ */ M(Ie, { variant: "subtitle1", noWrap: !0, sx: { maxWidth: "80%" }, children: n.name }),
            /* @__PURE__ */ M(Un, { size: "small", onClick: d, "aria-label": "סגור", children: /* @__PURE__ */ M(bf, { fontSize: "small" }) })
          ] }),
          /* @__PURE__ */ Q(Wa, { dividers: !0, sx: { p: 0 }, children: [
            l === "image" && i && /* @__PURE__ */ M(ne, { sx: { textAlign: "center", p: 2 }, children: /* @__PURE__ */ M(
              "img",
              {
                src: i,
                alt: n.name,
                style: { maxWidth: "100%", maxHeight: "70vh", objectFit: "contain" }
              }
            ) }),
            l === "pdf" && i && /* @__PURE__ */ M(
              "iframe",
              {
                src: i,
                title: n.name,
                width: "100%",
                height: "500px",
                style: { border: "none", display: "block" }
              }
            )
          ] })
        ]
      }
    )
  ] });
}
Tf.displayName = "IpsFileItem";
function s1(n, e, t) {
  const r = n.replace(/^\/|\/$/g, "").trim(), s = e.replace(/^\/|\/$/g, "").trim(), i = t == null ? void 0 : t.replace(/^\/|\/$/g, "").trim(), o = `https://${r}.company.com/sharepoint/${s}/upload`;
  return i ? `${o}/${i}` : o;
}
function i1(n) {
  const {
    sviva: e,
    system: t,
    uploadParams: r = {},
    uploadMethod: s,
    maxFileSizeMB: i = 10,
    onBeforeSave: o,
    onSaveSuccess: l,
    onSaveError: a
  } = n, [u, d] = ce([]), [h, p] = ce(!1), g = Lt((v) => {
    const T = i * 1024 * 1024, D = v.map((A) => A.size > T ? {
      file: A,
      hasError: !0,
      errorMessage: `הקובץ חורג מהגודל המותר (${i} MB)`
    } : { file: A, hasError: !1 });
    d((A) => [...A, ...D]);
  }, [i]), b = Lt((v) => {
    d((T) => T.filter(({ file: D }) => D !== v));
  }, []), S = Lt(() => {
    d([]);
  }, []), w = Lt(async () => {
    if (o && !await o())
      return;
    p(!0);
    const v = [];
    try {
      for (const { file: T } of u) {
        const D = new FormData();
        D.append("file", T), Object.entries(r).forEach(([O, L]) => D.append(O, L));
        const A = await fetch(s1(e, t, s), {
          method: "POST",
          body: D
        });
        if (!A.ok)
          throw new Error(`Upload failed for ${T.name}: ${A.statusText}`);
        const R = await A.json();
        v.push({ name: T.name, path: R.path });
      }
      l == null || l(v), S();
    } catch (T) {
      a == null || a(T);
    } finally {
      p(!1);
    }
  }, [u, r, e, t, s, o, l, a, S]), x = u.length > 0 && !u.some((v) => v.hasError) && !h;
  return {
    files: u,
    addFiles: g,
    removeFile: b,
    clearAll: S,
    saveFiles: w,
    loading: h,
    canSave: x
  };
}
function o1(n) {
  const {
    camera: e = !1,
    screenshot: t = !1,
    scan: r = !1,
    accept: s,
    multiple: i = !0,
    disabled: o = !1,
    containerId: l,
    className: a,
    sx: u
  } = n, {
    files: d,
    addFiles: h,
    removeFile: p,
    clearAll: g,
    saveFiles: b,
    loading: S,
    canSave: w
  } = i1(n);
  return /* @__PURE__ */ Q(
    ne,
    {
      className: `ips-file-upload${a ? ` ${a}` : ""}`,
      sx: { display: "flex", flexDirection: "column", gap: 2, ...u },
      children: [
        /* @__PURE__ */ M(
          vf,
          {
            onFilesAdded: h,
            camera: e,
            screenshot: t,
            scan: r,
            accept: s,
            multiple: i,
            disabled: o,
            containerId: l
          }
        ),
        d.length > 0 && /* @__PURE__ */ M(F0, { spacing: 0.75, children: d.map(({ file: x, hasError: v, errorMessage: T }) => /* @__PURE__ */ M(
          Tf,
          {
            file: x,
            hasError: v,
            errorMessage: T,
            onDelete: p
          },
          `${x.name}-${x.size}`
        )) }),
        /* @__PURE__ */ Q(ne, { sx: { display: "flex", gap: 1, justifyContent: "flex-start" }, children: [
          /* @__PURE__ */ M(
            ct,
            {
              variant: "contained",
              size: "small",
              disabled: !w || o,
              onClick: b,
              startIcon: S ? /* @__PURE__ */ M(Ts, { size: 16, color: "inherit" }) : /* @__PURE__ */ M(B0, {}),
              children: "שמור קבצים"
            }
          ),
          /* @__PURE__ */ M(
            ct,
            {
              variant: "outlined",
              size: "small",
              color: "error",
              disabled: d.length === 0 || o,
              onClick: g,
              startIcon: /* @__PURE__ */ M(H0, {}),
              children: "נקה הכל"
            }
          )
        ] })
      ]
    }
  );
}
o1.displayName = "IpsFileUpload";
const l1 = Te.createContext(xf), QE = ({ children: n }) => Te.createElement(l1.Provider, { value: xf }, n);
var Kl = { exports: {} };
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
  function r(i, o) {
    var l = [], a = 0;
    function u(h) {
      return l.push(h), o;
    }
    function d() {
      return l[a++];
    }
    return {
      /**
       * Replace matching strings with tokens.
       *
       * @param {string} str String to tokenize
       * @return {string} Tokenized string
       */
      tokenize: function(h) {
        return h.replace(i, u);
      },
      /**
       * Restores tokens to their original values.
       *
       * @param {string} str String previously run through tokenize()
       * @return {string} Original string
       */
      detokenize: function(h) {
        return h.replace(new RegExp("(" + o + ")", "g"), d);
      }
    };
  }
  function s() {
    var i = "`TMP`", o = "`TMPLTR`", l = "`TMPRTL`", a = "`NOFLIP_SINGLE`", u = "`NOFLIP_CLASS`", d = "`COMMENT`", h = "[^\\u0020-\\u007e]", p = "(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)", g = "(?:[0-9]*\\.[0-9]+|[0-9]+)", b = "(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)", S = "direction\\s*:\\s*", w = "[!#$%&*-~]", x = `['"]?\\s*`, v = "(^|[^a-zA-Z])", T = "[^\\}]*?", D = "\\/\\*\\!?\\s*@noflip\\s*\\*\\/", A = "\\/\\*[^*]*\\*+([^\\/*][^*]*\\*+)*\\/", R = "(?:" + p + "|\\\\[^\\r\\n\\f0-9a-f])", O = "(?:[_a-z]|" + h + "|" + R + ")", L = "(?:[_a-z0-9-]|" + h + "|" + R + ")", Y = "-?" + O + L + "*", te = g + "(?:\\s*" + b + "|" + Y + ")?", re = "((?:-?" + te + ")|(?:inherit|auto))", ye = "(?:-?" + g + "(?:\\s*" + b + ")?)", be = "(?:\\+|\\-|\\*|\\/)", j = "(?:\\(|\\)|\\t| )", q = "(?:" + j + "|" + ye + "|" + be + "){3,}", W = "(?:calc\\((?:" + q + ")\\))", G = "((?:-?" + te + ")|(?:inherit|auto)|" + W + ")", we = "((?:margin|padding|border-width)\\s*:\\s*)", qe = "((?:-color|border-style)\\s*:\\s*)", oe = "(#?" + L + "+|(?:rgba?|hsla?)\\([ \\d.,%-]+\\))", Oe = "(?:" + w + "|" + h + "|" + R + ")*?", At = "(?![a-zA-Z])", Dt = "(?!(" + L + `|\\r?\\n|\\s|#|\\:|\\.|\\,|\\+|>|~|\\(|\\)|\\[|\\]|=|\\*=|~=|\\^=|'[^']*'|"[^"]*"|` + d + ")*?{)", dt = "(?!" + Oe + x + "\\))", B = "(?=" + Oe + x + "\\))", Nt = "(\\s*(?:!important\\s*)?[;}])", Pn = /`TMP`/g, ar = /`TMPLTR`/g, Rs = /`TMPRTL`/g, Ro = new RegExp(A, "gi"), Io = new RegExp("(" + D + Dt + "[^;}]+;?)", "gi"), _o = new RegExp("(" + D + T + "})", "gi"), Po = new RegExp("(" + S + ")ltr", "gi"), Lo = new RegExp("(" + S + ")rtl", "gi"), zo = new RegExp(v + "(left)" + At + dt + Dt, "gi"), Fo = new RegExp(v + "(right)" + At + dt + Dt, "gi"), Bo = new RegExp(v + "(left)" + B, "gi"), Ho = new RegExp(v + "(right)" + B, "gi"), Wo = /(:dir\( *)ltr( *\))/g, Is = /(:dir\( *)rtl( *\))/g, it = new RegExp(v + "(ltr)" + B, "gi"), Lr = new RegExp(v + "(rtl)" + B, "gi"), $o = new RegExp(v + "([ns]?)e-resize", "gi"), Vo = new RegExp(v + "([ns]?)w-resize", "gi"), _s = new RegExp(we + G + "(\\s+)" + G + "(\\s+)" + G + "(\\s+)" + G + Nt, "gi"), tt = new RegExp(qe + oe + "(\\s+)" + oe + "(\\s+)" + oe + "(\\s+)" + oe + Nt, "gi"), Ps = new RegExp("(background(?:-position)?\\s*:\\s*(?:[^:;}\\s]+\\s+)*?)(" + te + ")", "gi"), zr = new RegExp("(background-position-x\\s*:\\s*)(-?" + g + "%)", "gi"), cr = new RegExp("(border-radius\\s*:\\s*)" + re + "(?:(?:\\s+" + re + ")(?:\\s+" + re + ")?(?:\\s+" + re + ")?)?(?:(?:(?:\\s*\\/\\s*)" + re + ")(?:\\s+" + re + ")?(?:\\s+" + re + ")?(?:\\s+" + re + ")?)?" + Nt, "gi"), ue = new RegExp("(box-shadow\\s*:\\s*(?:inset\\s*)?)" + re, "gi"), Ls = new RegExp("(text-shadow\\s*:\\s*)" + re + "(\\s*)" + oe, "gi"), zs = new RegExp("(text-shadow\\s*:\\s*)" + oe + "(\\s*)" + re, "gi"), ur = new RegExp("(text-shadow\\s*:\\s*)" + re, "gi"), Fr = new RegExp("(transform\\s*:[^;}]*)(translateX\\s*\\(\\s*)" + re + "(\\s*\\))", "gi"), dr = new RegExp("(transform\\s*:[^;}]*)(translate\\s*\\(\\s*)" + re + "((?:\\s*,\\s*" + re + "){0,2}\\s*\\))", "gi");
    function Wt(J, He, P) {
      var Ke, ot;
      return P.slice(-1) === "%" && (Ke = P.indexOf("."), Ke !== -1 ? (ot = P.length - Ke - 2, P = 100 - parseFloat(P), P = P.toFixed(ot) + "%") : P = 100 - parseFloat(P) + "%"), He + P;
    }
    function ln(J) {
      switch (J.length) {
        case 4:
          J = [J[1], J[0], J[3], J[2]];
          break;
        case 3:
          J = [J[1], J[0], J[1], J[2]];
          break;
        case 2:
          J = [J[1], J[0]];
          break;
        case 1:
          J = [J[0]];
          break;
      }
      return J.join(" ");
    }
    function Yo(J, He) {
      var P, Ke = [].slice.call(arguments), ot = Ke.slice(2, 6).filter(function(Z) {
        return Z;
      }), mt = Ke.slice(6, 10).filter(function(Z) {
        return Z;
      }), lt = Ke[10] || "";
      return mt.length ? P = ln(ot) + " / " + ln(mt) : P = ln(ot), He + P + lt;
    }
    function an(J) {
      return parseFloat(J) === 0 ? J : J[0] === "-" ? J.slice(1) : "-" + J;
    }
    function Fs(J, He, P) {
      return He + an(P);
    }
    function cn(J, He, P, Ke, ot) {
      return He + P + an(Ke) + ot;
    }
    function $t(J, He, P, Ke, ot) {
      return He + P + Ke + an(ot);
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
      transform: function(J, He) {
        var P = new r(Io, a), Ke = new r(_o, u), ot = new r(Ro, d);
        return J = ot.tokenize(
          Ke.tokenize(
            P.tokenize(
              // We wrap tokens in ` , not ~ like the original implementation does.
              // This was done because ` is not a legal character in CSS and can only
              // occur in URLs, where we escape it to %60 before inserting our tokens.
              J.replace("`", "%60")
            )
          )
        ), He.transformDirInUrl && (J = J.replace(Wo, "$1" + o + "$2").replace(Is, "$1" + l + "$2").replace(it, "$1" + i).replace(Lr, "$1ltr").replace(Pn, "rtl").replace(ar, "ltr").replace(Rs, "rtl")), He.transformEdgeInUrl && (J = J.replace(Bo, "$1" + i).replace(Ho, "$1left").replace(Pn, "right")), J = J.replace(Po, "$1" + i).replace(Lo, "$1ltr").replace(Pn, "rtl").replace(zo, "$1" + i).replace(Fo, "$1left").replace(Pn, "right").replace($o, "$1$2" + i).replace(Vo, "$1$2e-resize").replace(Pn, "w-resize").replace(cr, Yo).replace(ue, Fs).replace(Ls, $t).replace(zs, $t).replace(ur, Fs).replace(Fr, cn).replace(dr, cn).replace(_s, "$1$2$3$8$5$6$7$4$9").replace(tt, "$1$2$3$8$5$6$7$4$9").replace(Ps, Wt).replace(zr, Wt), J = P.detokenize(
          Ke.detokenize(
            ot.detokenize(J)
          )
        ), J;
      }
    };
  }
  t = new s(), n.exports ? e.transform = function(i, o, l) {
    var a;
    return typeof o == "object" ? a = o : (a = {}, typeof o == "boolean" && (a.transformDirInUrl = o), typeof l == "boolean" && (a.transformEdgeInUrl = l)), t.transform(i, a);
  } : typeof window < "u" && (window.cssjanus = t);
})(Kl, Kl.exports);
var a1 = Kl.exports;
const c1 = /* @__PURE__ */ Ub(a1);
var Gl = "comm", vi = "rule", Of = "decl", u1 = "@media", d1 = "@import", f1 = "@supports", h1 = "@keyframes", p1 = Math.abs, $a = String.fromCharCode;
function Ef(n) {
  return n.trim();
}
function pi(n, e, t) {
  return n.replace(e, t);
}
function m1(n, e) {
  return n.indexOf(e);
}
function ds(n, e) {
  return n.charCodeAt(e) | 0;
}
function fs(n, e, t) {
  return n.slice(e, t);
}
function mn(n) {
  return n.length;
}
function Af(n) {
  return n.length;
}
function Qs(n, e) {
  return e.push(n), n;
}
var po = 1, Ar = 1, Df = 0, xt = 0, Ee = 0, _r = "";
function Va(n, e, t, r, s, i, o) {
  return { value: n, root: e, parent: t, type: r, props: s, children: i, line: po, column: Ar, length: o, return: "" };
}
function g1() {
  return Ee;
}
function y1() {
  return Ee = xt > 0 ? ds(_r, --xt) : 0, Ar--, Ee === 10 && (Ar = 1, po--), Ee;
}
function Ot() {
  return Ee = xt < Df ? ds(_r, xt++) : 0, Ar++, Ee === 10 && (Ar = 1, po++), Ee;
}
function qn() {
  return ds(_r, xt);
}
function mi() {
  return xt;
}
function mo(n, e) {
  return fs(_r, n, e);
}
function Jl(n) {
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
function b1(n) {
  return po = Ar = 1, Df = mn(_r = n), xt = 0, [];
}
function S1(n) {
  return _r = "", n;
}
function hl(n) {
  return Ef(mo(xt - 1, Ql(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
}
function w1(n) {
  for (; (Ee = qn()) && Ee < 33; )
    Ot();
  return Jl(n) > 2 || Jl(Ee) > 3 ? "" : " ";
}
function k1(n, e) {
  for (; --e && Ot() && !(Ee < 48 || Ee > 102 || Ee > 57 && Ee < 65 || Ee > 70 && Ee < 97); )
    ;
  return mo(n, mi() + (e < 6 && qn() == 32 && Ot() == 32));
}
function Ql(n) {
  for (; Ot(); )
    switch (Ee) {
      case n:
        return xt;
      case 34:
      case 39:
        n !== 34 && n !== 39 && Ql(Ee);
        break;
      case 40:
        n === 41 && Ql(n);
        break;
      case 92:
        Ot();
        break;
    }
  return xt;
}
function x1(n, e) {
  for (; Ot() && n + Ee !== 57; )
    if (n + Ee === 84 && qn() === 47)
      break;
  return "/*" + mo(e, xt - 1) + "*" + $a(n === 47 ? n : Ot());
}
function C1(n) {
  for (; !Jl(qn()); )
    Ot();
  return mo(n, xt);
}
function M1(n) {
  return S1(gi("", null, null, null, [""], n = b1(n), 0, [0], n));
}
function gi(n, e, t, r, s, i, o, l, a) {
  for (var u = 0, d = 0, h = o, p = 0, g = 0, b = 0, S = 1, w = 1, x = 1, v = 0, T = "", D = s, A = i, R = r, O = T; w; )
    switch (b = v, v = Ot()) {
      case 40:
        if (b != 108 && ds(O, h - 1) == 58) {
          m1(O += pi(hl(v), "&", "&\f"), "&\f") != -1 && (x = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        O += hl(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        O += w1(b);
        break;
      case 92:
        O += k1(mi() - 1, 7);
        continue;
      case 47:
        switch (qn()) {
          case 42:
          case 47:
            Qs(v1(x1(Ot(), mi()), e, t), a);
            break;
          default:
            O += "/";
        }
        break;
      case 123 * S:
        l[u++] = mn(O) * x;
      case 125 * S:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            w = 0;
          case 59 + d:
            x == -1 && (O = pi(O, /\f/g, "")), g > 0 && mn(O) - h && Qs(g > 32 ? yu(O + ";", r, t, h - 1) : yu(pi(O, " ", "") + ";", r, t, h - 2), a);
            break;
          case 59:
            O += ";";
          default:
            if (Qs(R = gu(O, e, t, u, d, s, l, T, D = [], A = [], h), i), v === 123)
              if (d === 0)
                gi(O, e, R, R, D, i, h, l, A);
              else
                switch (p === 99 && ds(O, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    gi(n, R, R, r && Qs(gu(n, R, R, 0, 0, s, l, T, s, D = [], h), A), s, A, h, l, r ? D : A);
                    break;
                  default:
                    gi(O, R, R, R, [""], A, 0, l, A);
                }
        }
        u = d = g = 0, S = x = 1, T = O = "", h = o;
        break;
      case 58:
        h = 1 + mn(O), g = b;
      default:
        if (S < 1) {
          if (v == 123)
            --S;
          else if (v == 125 && S++ == 0 && y1() == 125)
            continue;
        }
        switch (O += $a(v), v * S) {
          case 38:
            x = d > 0 ? 1 : (O += "\f", -1);
            break;
          case 44:
            l[u++] = (mn(O) - 1) * x, x = 1;
            break;
          case 64:
            qn() === 45 && (O += hl(Ot())), p = qn(), d = h = mn(T = O += C1(mi())), v++;
            break;
          case 45:
            b === 45 && mn(O) == 2 && (S = 0);
        }
    }
  return i;
}
function gu(n, e, t, r, s, i, o, l, a, u, d) {
  for (var h = s - 1, p = s === 0 ? i : [""], g = Af(p), b = 0, S = 0, w = 0; b < r; ++b)
    for (var x = 0, v = fs(n, h + 1, h = p1(S = o[b])), T = n; x < g; ++x)
      (T = Ef(S > 0 ? p[x] + " " + v : pi(v, /&\f/g, p[x]))) && (a[w++] = T);
  return Va(n, e, t, s === 0 ? vi : l, a, u, d);
}
function v1(n, e, t) {
  return Va(n, e, t, Gl, $a(g1()), fs(n, 2, -2), 0);
}
function yu(n, e, t, r) {
  return Va(n, e, t, Of, fs(n, 0, r), fs(n, r + 1, -1), r);
}
function T1(n, e) {
  for (var t = "", r = Af(n), s = 0; s < r; s++)
    t += e(n[s], s, n, e) || "";
  return t;
}
function Nf(n, e, t) {
  switch (n.type) {
    case d1:
    case Of:
    case Gl:
      return n.return = n.return || n.value;
    case vi:
      n.value = Array.isArray(n.props) ? n.props.join(",") : n.props, Array.isArray(n.children) && n.children.forEach(function(s) {
        s.type === Gl && (s.children = s.value);
      });
  }
  var r = T1(Array.prototype.concat(n.children), Nf);
  return mn(r) ? n.return = n.value + "{" + r + "}" : "";
}
function Rf(n, e, t, r) {
  if (n.type === h1 || n.type === f1 || n.type === vi && (!n.parent || n.parent.type === u1 || n.parent.type === vi)) {
    var s = c1.transform(Nf(n));
    n.children = s ? M1(s)[0].children : [], n.return = "";
  }
}
Object.defineProperty(Rf, "name", { value: "stylisRTLPlugin" });
const O1 = (n) => n ? ["ar", "he", "fa", "ur"].some((t) => n.startsWith(t)) : !1, ZE = (n) => O1(n) ? "rtl" : "ltr", E1 = () => Sf({ key: "muirtl", stylisPlugins: [Rf] }), XE = () => Sf({ key: "muiltr" }), A1 = ({ children: n }) => {
  const e = sf(() => E1(), []);
  return /* @__PURE__ */ M(J0, { value: e, children: n });
};
A1.displayName = "IpsRtlProvider";
const D1 = {
  small: { px: 1.5, py: 0.5, fontSize: "0.75rem" },
  medium: { px: 2.5, py: 1, fontSize: "0.875rem" }
}, N1 = Pe(
  ({
    options: n = [],
    value: e,
    onChange: t,
    multiple: r = !1,
    disabled: s = !1,
    size: i = "medium",
    sx: o,
    className: l
  }, a) => {
    const u = or(), d = u.palette.primary.main, h = (x) => r ? Array.isArray(e) && e.includes(x) : e === x, p = (x) => {
      if (!(s || !t))
        if (r) {
          const v = Array.isArray(e) ? e : [], T = v.includes(x) ? v.filter((D) => D !== x) : [...v, x];
          t(T);
        } else
          t(e === x ? "" : x);
    }, g = ["ips-pill-select", l].filter(Boolean).join(" "), { px: b, py: S, fontSize: w } = D1[i];
    return /* @__PURE__ */ M(
      ne,
      {
        ref: a,
        className: g,
        sx: {
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          opacity: s ? 0.5 : 1,
          pointerEvents: s ? "none" : "auto",
          ...o
        },
        children: n.map((x) => {
          const v = h(x.value);
          return /* @__PURE__ */ M(
            Q0,
            {
              className: "ips-pill",
              onClick: () => p(x.value),
              disableRipple: !1,
              sx: {
                borderRadius: "999px",
                px: b,
                py: S,
                fontSize: w,
                fontWeight: 500,
                fontFamily: "inherit",
                lineHeight: 1.5,
                transition: "all 0.2s ease",
                ...v ? {
                  backgroundColor: d,
                  color: "white",
                  border: `1px solid ${d}`,
                  "&:hover": {
                    backgroundColor: u.palette.primary.dark,
                    borderColor: u.palette.primary.dark
                  }
                } : {
                  backgroundColor: "transparent",
                  color: d,
                  border: `1px solid ${d}`,
                  "&:hover": {
                    backgroundColor: `${d}14`
                  }
                }
              },
              children: x.label
            },
            x.value
          );
        })
      }
    );
  }
);
N1.displayName = "IpsPillSelect";
const R1 = Pe(
  ({
    columns: n,
    rows: e,
    stickyHeader: t = !1,
    striped: r = !0,
    dense: s = !1,
    emptyText: i = "No data",
    sx: o,
    className: l
  }, a) => {
    const u = ["ips-table-light", l].filter(Boolean).join(" ");
    return /* @__PURE__ */ M(
      Z0,
      {
        ref: a,
        component: wf,
        className: u,
        sx: o,
        children: /* @__PURE__ */ Q(
          X0,
          {
            stickyHeader: t,
            size: s ? "small" : "medium",
            children: [
              /* @__PURE__ */ M(eb, { children: /* @__PURE__ */ M(ul, { children: n.map((d) => /* @__PURE__ */ M(
                dl,
                {
                  width: d.width,
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
                  children: d.label
                },
                d.key
              )) }) }),
              /* @__PURE__ */ M(tb, { children: e.length === 0 ? /* @__PURE__ */ M(ul, { children: /* @__PURE__ */ M(dl, { colSpan: n.length, align: "center", children: /* @__PURE__ */ M(Ie, { variant: "body2", color: "text.secondary", sx: { py: 2 }, children: i }) }) }) : e.map((d, h) => /* @__PURE__ */ M(
                ul,
                {
                  sx: r && h % 2 === 1 ? { backgroundColor: "grey.50" } : void 0,
                  children: n.map((p) => /* @__PURE__ */ M(dl, { children: d[p.key] }, p.key))
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
R1.displayName = "IpsTableLight";
const If = Pa(
  (n, e) => {
  }
);
function I1({ toast: n, onClose: e }) {
  return /* @__PURE__ */ Q(
    ne,
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
        /* @__PURE__ */ M(ne, { sx: { flexShrink: 0, display: "flex", alignItems: "center" }, children: n.icon }),
        /* @__PURE__ */ M(Ie, { variant: "body2", sx: { flex: 1, fontWeight: 500, lineHeight: 1.4 }, children: n.message }),
        /* @__PURE__ */ M(
          Un,
          {
            size: "small",
            onClick: () => e(n.id),
            sx: { color: "white", ml: 0.5, flexShrink: 0 },
            "aria-label": "close",
            children: /* @__PURE__ */ M(bf, { fontSize: "small" })
          }
        )
      ]
    }
  );
}
const Gr = {
  SUCCESS: "success",
  INFO: "info",
  WARNING: "warning",
  DANGER: "danger"
}, bu = {
  [Gr.SUCCESS]: {
    bgColor: "#5cb85c",
    icon: /* @__PURE__ */ M(nb, { fontSize: "small" })
  },
  [Gr.INFO]: {
    bgColor: "#5bc0de",
    icon: /* @__PURE__ */ M(rb, { fontSize: "small" })
  },
  [Gr.WARNING]: {
    bgColor: "#e4872b",
    icon: /* @__PURE__ */ M(sb, { fontSize: "small" })
  },
  [Gr.DANGER]: {
    bgColor: "#d9534f",
    icon: /* @__PURE__ */ M(ib, { fontSize: "small" })
  }
};
function _1(n) {
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
function eA({
  children: n,
  deleteTime: e = 3e3,
  maxToasts: t = 5,
  position: r = "bottom-right"
}) {
  const [s, i] = ce([]), o = sf(() => {
    let u = 0;
    return () => ++u;
  }, []), l = Lt((u) => {
    i((d) => d.filter((h) => h.id !== u));
  }, []), a = Lt(
    (u, d) => {
      const h = bu[u] ?? bu[Gr.INFO], p = o(), g = {
        id: p,
        message: d,
        type: u,
        icon: h.icon,
        bgColor: h.bgColor
      };
      i((b) => {
        const S = [...b, g];
        return S.length > t ? S.slice(S.length - t) : S;
      }), setTimeout(() => l(p), e);
    },
    [e, t, o, l]
  );
  return /* @__PURE__ */ Q(If.Provider, { value: a, children: [
    n,
    kf.createPortal(
      /* @__PURE__ */ M(
        "div",
        {
          className: "ips-toast-container",
          style: _1(r),
          dir: "rtl",
          "data-testid": "ips-toast-container",
          children: s.map((u) => /* @__PURE__ */ M(I1, { toast: u, onClose: l }, u.id))
        }
      ),
      document.body
    )
  ] });
}
const tA = () => of(If);
function We(n) {
  this.content = n;
}
We.prototype = {
  constructor: We,
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
    var r = t && t != n ? this.remove(t) : this, s = r.find(n), i = r.content.slice();
    return s == -1 ? i.push(t || n, e) : (i[s + 1] = e, t && (i[s] = t)), new We(i);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(n) {
    var e = this.find(n);
    if (e == -1) return this;
    var t = this.content.slice();
    return t.splice(e, 2), new We(t);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(n, e) {
    return new We([n, e].concat(this.remove(n).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(n, e) {
    var t = this.remove(n).content.slice();
    return t.push(n, e), new We(t);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(n, e, t) {
    var r = this.remove(e), s = r.content.slice(), i = r.find(n);
    return s.splice(i == -1 ? s.length : i, 0, e, t), new We(s);
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
    return n = We.from(n), n.size ? new We(n.content.concat(this.subtract(n).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(n) {
    return n = We.from(n), n.size ? new We(this.subtract(n).content.concat(n.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(n) {
    var e = this;
    n = We.from(n);
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
We.from = function(n) {
  if (n instanceof We) return n;
  var e = [];
  if (n) for (var t in n) e.push(t, n[t]);
  return new We(e);
};
function _f(n, e, t) {
  for (let r = 0; ; r++) {
    if (r == n.childCount || r == e.childCount)
      return n.childCount == e.childCount ? null : t;
    let s = n.child(r), i = e.child(r);
    if (s == i) {
      t += s.nodeSize;
      continue;
    }
    if (!s.sameMarkup(i))
      return t;
    if (s.isText && s.text != i.text) {
      for (let o = 0; s.text[o] == i.text[o]; o++)
        t++;
      return t;
    }
    if (s.content.size || i.content.size) {
      let o = _f(s.content, i.content, t + 1);
      if (o != null)
        return o;
    }
    t += s.nodeSize;
  }
}
function Pf(n, e, t, r) {
  for (let s = n.childCount, i = e.childCount; ; ) {
    if (s == 0 || i == 0)
      return s == i ? null : { a: t, b: r };
    let o = n.child(--s), l = e.child(--i), a = o.nodeSize;
    if (o == l) {
      t -= a, r -= a;
      continue;
    }
    if (!o.sameMarkup(l))
      return { a: t, b: r };
    if (o.isText && o.text != l.text) {
      let u = 0, d = Math.min(o.text.length, l.text.length);
      for (; u < d && o.text[o.text.length - u - 1] == l.text[l.text.length - u - 1]; )
        u++, t--, r--;
      return { a: t, b: r };
    }
    if (o.content.size || l.content.size) {
      let u = Pf(o.content, l.content, t - 1, r - 1);
      if (u)
        return u;
    }
    t -= a, r -= a;
  }
}
class N {
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
  nodesBetween(e, t, r, s = 0, i) {
    for (let o = 0, l = 0; l < t; o++) {
      let a = this.content[o], u = l + a.nodeSize;
      if (u > e && r(a, s + l, i || null, o) !== !1 && a.content.size) {
        let d = l + 1;
        a.nodesBetween(Math.max(0, e - d), Math.min(a.content.size, t - d), r, s + d);
      }
      l = u;
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
  textBetween(e, t, r, s) {
    let i = "", o = !0;
    return this.nodesBetween(e, t, (l, a) => {
      let u = l.isText ? l.text.slice(Math.max(e, a) - a, t - a) : l.isLeaf ? s ? typeof s == "function" ? s(l) : s : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
      l.isBlock && (l.isLeaf && u || l.isTextblock) && r && (o ? o = !1 : i += r), i += u;
    }, 0), i;
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
    let t = this.lastChild, r = e.firstChild, s = this.content.slice(), i = 0;
    for (t.isText && t.sameMarkup(r) && (s[s.length - 1] = t.withText(t.text + r.text), i = 1); i < e.content.length; i++)
      s.push(e.content[i]);
    return new N(s, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, t = this.size) {
    if (e == 0 && t == this.size)
      return this;
    let r = [], s = 0;
    if (t > e)
      for (let i = 0, o = 0; o < t; i++) {
        let l = this.content[i], a = o + l.nodeSize;
        a > e && ((o < e || a > t) && (l.isText ? l = l.cut(Math.max(0, e - o), Math.min(l.text.length, t - o)) : l = l.cut(Math.max(0, e - o - 1), Math.min(l.content.size, t - o - 1))), r.push(l), s += l.nodeSize), o = a;
      }
    return new N(r, s);
  }
  /**
  @internal
  */
  cutByIndex(e, t) {
    return e == t ? N.empty : e == 0 && t == this.content.length ? this : new N(this.content.slice(e, t));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, t) {
    let r = this.content[e];
    if (r == t)
      return this;
    let s = this.content.slice(), i = this.size + t.nodeSize - r.nodeSize;
    return s[e] = t, new N(s, i);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new N([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new N(this.content.concat(e), this.size + e.nodeSize);
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
      let s = this.content[t];
      e(s, r, t), r += s.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, t = 0) {
    return _f(this, e, t);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, t = this.size, r = e.size) {
    return Pf(this, e, t, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e) {
    if (e == 0)
      return Zs(0, e);
    if (e == this.size)
      return Zs(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let t = 0, r = 0; ; t++) {
      let s = this.child(t), i = r + s.nodeSize;
      if (i >= e)
        return i == e ? Zs(t + 1, i) : Zs(t, r);
      r = i;
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
      return N.empty;
    if (!Array.isArray(t))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new N(t.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return N.empty;
    let t, r = 0;
    for (let s = 0; s < e.length; s++) {
      let i = e[s];
      r += i.nodeSize, s && i.isText && e[s - 1].sameMarkup(i) ? (t || (t = e.slice(0, s)), t[t.length - 1] = i.withText(t[t.length - 1].text + i.text)) : t && t.push(i);
    }
    return new N(t || e, r);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return N.empty;
    if (e instanceof N)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new N([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
N.empty = new N([], 0);
const pl = { index: 0, offset: 0 };
function Zs(n, e) {
  return pl.index = n, pl.offset = e, pl;
}
function Ti(n, e) {
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
      if (!Ti(n[r], e[r]))
        return !1;
  } else {
    for (let r in n)
      if (!(r in e) || !Ti(n[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in n))
        return !1;
  }
  return !0;
}
let de = class Zl {
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
    for (let s = 0; s < e.length; s++) {
      let i = e[s];
      if (this.eq(i))
        return e;
      if (this.type.excludes(i.type))
        t || (t = e.slice(0, s));
      else {
        if (i.type.excludes(this.type))
          return e;
        !r && i.type.rank > this.type.rank && (t || (t = e.slice(0, s)), t.push(this), r = !0), t && t.push(i);
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
    return this == e || this.type == e.type && Ti(this.attrs, e.attrs);
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
    let s = r.create(t.attrs);
    return r.checkAttrs(s.attrs), s;
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
      return Zl.none;
    if (e instanceof Zl)
      return [e];
    let t = e.slice();
    return t.sort((r, s) => r.type.rank - s.type.rank), t;
  }
};
de.none = [];
class Oi extends Error {
}
class z {
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
    let r = zf(this.content, e + this.openStart, t);
    return r && new z(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, t) {
    return new z(Lf(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
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
      return z.empty;
    let r = t.openStart || 0, s = t.openEnd || 0;
    if (typeof r != "number" || typeof s != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new z(N.fromJSON(e, t.content), r, s);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, t = !0) {
    let r = 0, s = 0;
    for (let i = e.firstChild; i && !i.isLeaf && (t || !i.type.spec.isolating); i = i.firstChild)
      r++;
    for (let i = e.lastChild; i && !i.isLeaf && (t || !i.type.spec.isolating); i = i.lastChild)
      s++;
    return new z(e, r, s);
  }
}
z.empty = new z(N.empty, 0, 0);
function Lf(n, e, t) {
  let { index: r, offset: s } = n.findIndex(e), i = n.maybeChild(r), { index: o, offset: l } = n.findIndex(t);
  if (s == e || i.isText) {
    if (l != t && !n.child(o).isText)
      throw new RangeError("Removing non-flat range");
    return n.cut(0, e).append(n.cut(t));
  }
  if (r != o)
    throw new RangeError("Removing non-flat range");
  return n.replaceChild(r, i.copy(Lf(i.content, e - s - 1, t - s - 1)));
}
function zf(n, e, t, r) {
  let { index: s, offset: i } = n.findIndex(e), o = n.maybeChild(s);
  if (i == e || o.isText)
    return r && !r.canReplace(s, s, t) ? null : n.cut(0, e).append(t).append(n.cut(e));
  let l = zf(o.content, e - i - 1, t, o);
  return l && n.replaceChild(s, o.copy(l));
}
function P1(n, e, t) {
  if (t.openStart > n.depth)
    throw new Oi("Inserted content deeper than insertion position");
  if (n.depth - t.openStart != e.depth - t.openEnd)
    throw new Oi("Inconsistent open depths");
  return Ff(n, e, t, 0);
}
function Ff(n, e, t, r) {
  let s = n.index(r), i = n.node(r);
  if (s == e.index(r) && r < n.depth - t.openStart) {
    let o = Ff(n, e, t, r + 1);
    return i.copy(i.content.replaceChild(s, o));
  } else if (t.content.size)
    if (!t.openStart && !t.openEnd && n.depth == r && e.depth == r) {
      let o = n.parent, l = o.content;
      return Gn(o, l.cut(0, n.parentOffset).append(t.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: o, end: l } = L1(t, n);
      return Gn(i, Hf(n, o, l, e, r));
    }
  else return Gn(i, Ei(n, e, r));
}
function Bf(n, e) {
  if (!e.type.compatibleContent(n.type))
    throw new Oi("Cannot join " + e.type.name + " onto " + n.type.name);
}
function Xl(n, e, t) {
  let r = n.node(t);
  return Bf(r, e.node(t)), r;
}
function Kn(n, e) {
  let t = e.length - 1;
  t >= 0 && n.isText && n.sameMarkup(e[t]) ? e[t] = n.withText(e[t].text + n.text) : e.push(n);
}
function es(n, e, t, r) {
  let s = (e || n).node(t), i = 0, o = e ? e.index(t) : s.childCount;
  n && (i = n.index(t), n.depth > t ? i++ : n.textOffset && (Kn(n.nodeAfter, r), i++));
  for (let l = i; l < o; l++)
    Kn(s.child(l), r);
  e && e.depth == t && e.textOffset && Kn(e.nodeBefore, r);
}
function Gn(n, e) {
  return n.type.checkContent(e), n.copy(e);
}
function Hf(n, e, t, r, s) {
  let i = n.depth > s && Xl(n, e, s + 1), o = r.depth > s && Xl(t, r, s + 1), l = [];
  return es(null, n, s, l), i && o && e.index(s) == t.index(s) ? (Bf(i, o), Kn(Gn(i, Hf(n, e, t, r, s + 1)), l)) : (i && Kn(Gn(i, Ei(n, e, s + 1)), l), es(e, t, s, l), o && Kn(Gn(o, Ei(t, r, s + 1)), l)), es(r, null, s, l), new N(l);
}
function Ei(n, e, t) {
  let r = [];
  if (es(null, n, t, r), n.depth > t) {
    let s = Xl(n, e, t + 1);
    Kn(Gn(s, Ei(n, e, t + 1)), r);
  }
  return es(e, null, t, r), new N(r);
}
function L1(n, e) {
  let t = e.depth - n.openStart, s = e.node(t).copy(n.content);
  for (let i = t - 1; i >= 0; i--)
    s = e.node(i).copy(N.from(s));
  return {
    start: s.resolveNoCache(n.openStart + t),
    end: s.resolveNoCache(s.content.size - n.openEnd - t)
  };
}
class hs {
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
    let r = this.pos - this.path[this.path.length - 1], s = e.child(t);
    return r ? e.child(t).cut(r) : s;
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
    let r = this.path[t * 3], s = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
    for (let i = 0; i < e; i++)
      s += r.child(i).nodeSize;
    return s;
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
      return de.none;
    if (this.textOffset)
      return e.child(t).marks;
    let r = e.maybeChild(t - 1), s = e.maybeChild(t);
    if (!r) {
      let l = r;
      r = s, s = l;
    }
    let i = r.marks;
    for (var o = 0; o < i.length; o++)
      i[o].type.spec.inclusive === !1 && (!s || !i[o].isInSet(s.marks)) && (i = i[o--].removeFromSet(i));
    return i;
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
    let r = t.marks, s = e.parent.maybeChild(e.index());
    for (var i = 0; i < r.length; i++)
      r[i].type.spec.inclusive === !1 && (!s || !r[i].isInSet(s.marks)) && (r = r[i--].removeFromSet(r));
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
        return new Ai(this, e, r);
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
    let r = [], s = 0, i = t;
    for (let o = e; ; ) {
      let { index: l, offset: a } = o.content.findIndex(i), u = i - a;
      if (r.push(o, l, s + a), !u || (o = o.child(l), o.isText))
        break;
      i = u - 1, s += a + 1;
    }
    return new hs(t, r, i);
  }
  /**
  @internal
  */
  static resolveCached(e, t) {
    let r = Su.get(e);
    if (r)
      for (let i = 0; i < r.elts.length; i++) {
        let o = r.elts[i];
        if (o.pos == t)
          return o;
      }
    else
      Su.set(e, r = new z1());
    let s = r.elts[r.i] = hs.resolve(e, t);
    return r.i = (r.i + 1) % F1, s;
  }
}
class z1 {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const F1 = 12, Su = /* @__PURE__ */ new WeakMap();
class Ai {
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
const B1 = /* @__PURE__ */ Object.create(null);
let vn = class ea {
  /**
  @internal
  */
  constructor(e, t, r, s = de.none) {
    this.type = e, this.attrs = t, this.marks = s, this.content = r || N.empty;
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
  nodesBetween(e, t, r, s = 0) {
    this.content.nodesBetween(e, t, r, s, this);
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
  textBetween(e, t, r, s) {
    return this.content.textBetween(e, t, r, s);
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
    return this.type == e && Ti(this.attrs, t || e.defaultAttrs || B1) && de.sameSet(this.marks, r || de.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new ea(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new ea(this.type, this.attrs, this.content, e);
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
      return z.empty;
    let s = this.resolve(e), i = this.resolve(t), o = r ? 0 : s.sharedDepth(t), l = s.start(o), u = s.node(o).content.cut(s.pos - l, i.pos - l);
    return new z(u, s.depth - o, i.depth - o);
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
    return P1(this.resolve(e), this.resolve(t), r);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let t = this; ; ) {
      let { index: r, offset: s } = t.content.findIndex(e);
      if (t = t.maybeChild(r), !t)
        return null;
      if (s == e || t.isText)
        return t;
      e -= s + 1;
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
    let s = this.content.child(t - 1);
    return { node: s, index: t - 1, offset: r - s.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return hs.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return hs.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, t, r) {
    let s = !1;
    return t > e && this.nodesBetween(e, t, (i) => (r.isInSet(i.marks) && (s = !0), !s)), s;
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
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), Wf(this.marks, e);
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
  canReplace(e, t, r = N.empty, s = 0, i = r.childCount) {
    let o = this.contentMatchAt(e).matchFragment(r, s, i), l = o && o.matchFragment(this.content, t);
    if (!l || !l.validEnd)
      return !1;
    for (let a = s; a < i; a++)
      if (!this.type.allowsMarks(r.child(a).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, t, r, s) {
    if (s && !this.type.allowsMarks(s))
      return !1;
    let i = this.contentMatchAt(e).matchType(r), o = i && i.matchFragment(this.content, t);
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
    let e = de.none;
    for (let t = 0; t < this.marks.length; t++) {
      let r = this.marks[t];
      r.type.checkAttrs(r.attrs), e = r.addToSet(e);
    }
    if (!de.sameSet(e, this.marks))
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
    let s = N.fromJSON(e, t.content), i = e.nodeType(t.type).create(t.attrs, s, r);
    return i.type.checkAttrs(i.attrs), i;
  }
};
vn.prototype.text = void 0;
class Di extends vn {
  /**
  @internal
  */
  constructor(e, t, r, s) {
    if (super(e, t, null, s), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : Wf(this.marks, JSON.stringify(this.text));
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
    return e == this.marks ? this : new Di(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new Di(this.type, this.attrs, e, this.marks);
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
function Wf(n, e) {
  for (let t = n.length - 1; t >= 0; t--)
    e = n[t].type.name + "(" + e + ")";
  return e;
}
class Xn {
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
    let r = new H1(e, t);
    if (r.next == null)
      return Xn.empty;
    let s = $f(r);
    r.next && r.err("Unexpected trailing text");
    let i = q1(U1(s));
    return K1(i, r), i;
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
    let s = this;
    for (let i = t; s && i < r; i++)
      s = s.matchType(e.child(i).type);
    return s;
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
    let s = [this];
    function i(o, l) {
      let a = o.matchFragment(e, r);
      if (a && (!t || a.validEnd))
        return N.from(l.map((u) => u.createAndFill()));
      for (let u = 0; u < o.next.length; u++) {
        let { type: d, next: h } = o.next[u];
        if (!(d.isText || d.hasRequiredAttrs()) && s.indexOf(h) == -1) {
          s.push(h);
          let p = i(h, l.concat(d));
          if (p)
            return p;
        }
      }
      return null;
    }
    return i(this, []);
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
      let s = r.shift(), i = s.match;
      if (i.matchType(e)) {
        let o = [];
        for (let l = s; l.type; l = l.via)
          o.push(l.type);
        return o.reverse();
      }
      for (let o = 0; o < i.next.length; o++) {
        let { type: l, next: a } = i.next[o];
        !l.isLeaf && !l.hasRequiredAttrs() && !(l.name in t) && (!s.type || a.validEnd) && (r.push({ match: l.contentMatch, type: l, via: s }), t[l.name] = !0);
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
      for (let s = 0; s < r.next.length; s++)
        e.indexOf(r.next[s].next) == -1 && t(r.next[s].next);
    }
    return t(this), e.map((r, s) => {
      let i = s + (r.validEnd ? "*" : " ") + " ";
      for (let o = 0; o < r.next.length; o++)
        i += (o ? ", " : "") + r.next[o].type.name + "->" + e.indexOf(r.next[o].next);
      return i;
    }).join(`
`);
  }
}
Xn.empty = new Xn(!0);
class H1 {
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
function $f(n) {
  let e = [];
  do
    e.push(W1(n));
  while (n.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function W1(n) {
  let e = [];
  do
    e.push($1(n));
  while (n.next && n.next != ")" && n.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function $1(n) {
  let e = j1(n);
  for (; ; )
    if (n.eat("+"))
      e = { type: "plus", expr: e };
    else if (n.eat("*"))
      e = { type: "star", expr: e };
    else if (n.eat("?"))
      e = { type: "opt", expr: e };
    else if (n.eat("{"))
      e = V1(n, e);
    else
      break;
  return e;
}
function wu(n) {
  /\D/.test(n.next) && n.err("Expected number, got '" + n.next + "'");
  let e = Number(n.next);
  return n.pos++, e;
}
function V1(n, e) {
  let t = wu(n), r = t;
  return n.eat(",") && (n.next != "}" ? r = wu(n) : r = -1), n.eat("}") || n.err("Unclosed braced range"), { type: "range", min: t, max: r, expr: e };
}
function Y1(n, e) {
  let t = n.nodeTypes, r = t[e];
  if (r)
    return [r];
  let s = [];
  for (let i in t) {
    let o = t[i];
    o.isInGroup(e) && s.push(o);
  }
  return s.length == 0 && n.err("No node type or group '" + e + "' found"), s;
}
function j1(n) {
  if (n.eat("(")) {
    let e = $f(n);
    return n.eat(")") || n.err("Missing closing paren"), e;
  } else if (/\W/.test(n.next))
    n.err("Unexpected token '" + n.next + "'");
  else {
    let e = Y1(n, n.next).map((t) => (n.inline == null ? n.inline = t.isInline : n.inline != t.isInline && n.err("Mixing inline and block content"), { type: "name", value: t }));
    return n.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function U1(n) {
  let e = [[]];
  return s(i(n, 0), t()), e;
  function t() {
    return e.push([]) - 1;
  }
  function r(o, l, a) {
    let u = { term: a, to: l };
    return e[o].push(u), u;
  }
  function s(o, l) {
    o.forEach((a) => a.to = l);
  }
  function i(o, l) {
    if (o.type == "choice")
      return o.exprs.reduce((a, u) => a.concat(i(u, l)), []);
    if (o.type == "seq")
      for (let a = 0; ; a++) {
        let u = i(o.exprs[a], l);
        if (a == o.exprs.length - 1)
          return u;
        s(u, l = t());
      }
    else if (o.type == "star") {
      let a = t();
      return r(l, a), s(i(o.expr, a), a), [r(a)];
    } else if (o.type == "plus") {
      let a = t();
      return s(i(o.expr, l), a), s(i(o.expr, a), a), [r(a)];
    } else {
      if (o.type == "opt")
        return [r(l)].concat(i(o.expr, l));
      if (o.type == "range") {
        let a = l;
        for (let u = 0; u < o.min; u++) {
          let d = t();
          s(i(o.expr, a), d), a = d;
        }
        if (o.max == -1)
          s(i(o.expr, a), a);
        else
          for (let u = o.min; u < o.max; u++) {
            let d = t();
            r(a, d), s(i(o.expr, a), d), a = d;
          }
        return [r(a)];
      } else {
        if (o.type == "name")
          return [r(l, void 0, o.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function Vf(n, e) {
  return e - n;
}
function ku(n, e) {
  let t = [];
  return r(e), t.sort(Vf);
  function r(s) {
    let i = n[s];
    if (i.length == 1 && !i[0].term)
      return r(i[0].to);
    t.push(s);
    for (let o = 0; o < i.length; o++) {
      let { term: l, to: a } = i[o];
      !l && t.indexOf(a) == -1 && r(a);
    }
  }
}
function q1(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return t(ku(n, 0));
  function t(r) {
    let s = [];
    r.forEach((o) => {
      n[o].forEach(({ term: l, to: a }) => {
        if (!l)
          return;
        let u;
        for (let d = 0; d < s.length; d++)
          s[d][0] == l && (u = s[d][1]);
        ku(n, a).forEach((d) => {
          u || s.push([l, u = []]), u.indexOf(d) == -1 && u.push(d);
        });
      });
    });
    let i = e[r.join(",")] = new Xn(r.indexOf(n.length - 1) > -1);
    for (let o = 0; o < s.length; o++) {
      let l = s[o][1].sort(Vf);
      i.next.push({ type: s[o][0], next: e[l.join(",")] || t(l) });
    }
    return i;
  }
}
function K1(n, e) {
  for (let t = 0, r = [n]; t < r.length; t++) {
    let s = r[t], i = !s.validEnd, o = [];
    for (let l = 0; l < s.next.length; l++) {
      let { type: a, next: u } = s.next[l];
      o.push(a.name), i && !(a.isText || a.hasRequiredAttrs()) && (i = !1), r.indexOf(u) == -1 && r.push(u);
    }
    i && e.err("Only non-generatable nodes (" + o.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function Yf(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n) {
    let r = n[t];
    if (!r.hasDefault)
      return null;
    e[t] = r.default;
  }
  return e;
}
function jf(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let r in n) {
    let s = e && e[r];
    if (s === void 0) {
      let i = n[r];
      if (i.hasDefault)
        s = i.default;
      else
        throw new RangeError("No value supplied for attribute " + r);
    }
    t[r] = s;
  }
  return t;
}
function Uf(n, e, t, r) {
  for (let s in e)
    if (!(s in n))
      throw new RangeError(`Unsupported attribute ${s} for ${t} of type ${s}`);
  for (let s in n) {
    let i = n[s];
    i.validate && i.validate(e[s]);
  }
}
function qf(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let r in e)
      t[r] = new J1(n, r, e[r]);
  return t;
}
let xu = class Kf {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.name = e, this.schema = t, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = qf(e, r.attrs), this.defaultAttrs = Yf(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
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
    return this.contentMatch == Xn.empty;
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
    return !e && this.defaultAttrs ? this.defaultAttrs : jf(this.attrs, e);
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
    return new vn(this, this.computeAttrs(e), N.from(t), de.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, t, r) {
    return t = N.from(t), this.checkContent(t), new vn(this, this.computeAttrs(e), t, de.setFrom(r));
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
    if (e = this.computeAttrs(e), t = N.from(t), t.size) {
      let o = this.contentMatch.fillBefore(t);
      if (!o)
        return null;
      t = o.append(t);
    }
    let s = this.contentMatch.matchFragment(t), i = s && s.fillBefore(N.empty, !0);
    return i ? new vn(this, e, t.append(i), de.setFrom(r)) : null;
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
    Uf(this.attrs, e, "node", this.name);
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
    return t ? t.length ? t : de.none : e;
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((i, o) => r[i] = new Kf(i, t, o));
    let s = t.spec.topNode || "doc";
    if (!r[s])
      throw new RangeError("Schema is missing its top node type ('" + s + "')");
    if (!r.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let i in r.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return r;
  }
};
function G1(n, e, t) {
  let r = t.split("|");
  return (s) => {
    let i = s === null ? "null" : typeof s;
    if (r.indexOf(i) < 0)
      throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${n}, got ${i}`);
  };
}
class J1 {
  constructor(e, t, r) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default"), this.default = r.default, this.validate = typeof r.validate == "string" ? G1(e, t, r.validate) : r.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class go {
  /**
  @internal
  */
  constructor(e, t, r, s) {
    this.name = e, this.rank = t, this.schema = r, this.spec = s, this.attrs = qf(e, s.attrs), this.excluded = null;
    let i = Yf(this.attrs);
    this.instance = i ? new de(this, i) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new de(this, jf(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null), s = 0;
    return e.forEach((i, o) => r[i] = new go(i, s++, t, o)), r;
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
    Uf(this.attrs, e, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class Gf {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let t = this.spec = {};
    for (let s in e)
      t[s] = e[s];
    t.nodes = We.from(e.nodes), t.marks = We.from(e.marks || {}), this.nodes = xu.compile(this.spec.nodes, this), this.marks = go.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let s in this.nodes) {
      if (s in this.marks)
        throw new RangeError(s + " can not be both a node and a mark");
      let i = this.nodes[s], o = i.spec.content || "", l = i.spec.marks;
      if (i.contentMatch = r[o] || (r[o] = Xn.parse(o, this.nodes)), i.inlineContent = i.contentMatch.inlineContent, i.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!i.isInline || !i.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = i;
      }
      i.markSet = l == "_" ? null : l ? Cu(this, l.split(" ")) : l == "" || !i.inlineContent ? [] : null;
    }
    for (let s in this.marks) {
      let i = this.marks[s], o = i.spec.excludes;
      i.excluded = o == null ? [i] : o == "" ? [] : Cu(this, o.split(" "));
    }
    this.nodeFromJSON = (s) => vn.fromJSON(this, s), this.markFromJSON = (s) => de.fromJSON(this, s), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, t = null, r, s) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof xu) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else throw new RangeError("Invalid node type: " + e);
    return e.createChecked(t, r, s);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, t) {
    let r = this.nodes.text;
    return new Di(r, r.defaultAttrs, e, de.setFrom(t));
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
function Cu(n, e) {
  let t = [];
  for (let r = 0; r < e.length; r++) {
    let s = e[r], i = n.marks[s], o = i;
    if (i)
      t.push(i);
    else
      for (let l in n.marks) {
        let a = n.marks[l];
        (s == "_" || a.spec.group && a.spec.group.split(" ").indexOf(s) > -1) && t.push(o = a);
      }
    if (!o)
      throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
  }
  return t;
}
function Q1(n) {
  return n.tag != null;
}
function Z1(n) {
  return n.style != null;
}
class Tn {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, t) {
    this.schema = e, this.rules = t, this.tags = [], this.styles = [];
    let r = this.matchedStyles = [];
    t.forEach((s) => {
      if (Q1(s))
        this.tags.push(s);
      else if (Z1(s)) {
        let i = /[^=]*/.exec(s.style)[0];
        r.indexOf(i) < 0 && r.push(i), this.styles.push(s);
      }
    }), this.normalizeLists = !this.tags.some((s) => {
      if (!/^(ul|ol)\b/.test(s.tag) || !s.node)
        return !1;
      let i = e.nodes[s.node];
      return i.contentMatch.matchType(i);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, t = {}) {
    let r = new vu(this, t, !1);
    return r.addAll(e, de.none, t.from, t.to), r.finish();
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
    let r = new vu(this, t, !0);
    return r.addAll(e, de.none, t.from, t.to), z.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, t, r) {
    for (let s = r ? this.tags.indexOf(r) + 1 : 0; s < this.tags.length; s++) {
      let i = this.tags[s];
      if (tS(e, i.tag) && (i.namespace === void 0 || e.namespaceURI == i.namespace) && (!i.context || t.matchesContext(i.context))) {
        if (i.getAttrs) {
          let o = i.getAttrs(e);
          if (o === !1)
            continue;
          i.attrs = o || void 0;
        }
        return i;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, t, r, s) {
    for (let i = s ? this.styles.indexOf(s) + 1 : 0; i < this.styles.length; i++) {
      let o = this.styles[i], l = o.style;
      if (!(l.indexOf(e) != 0 || o.context && !r.matchesContext(o.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != t))) {
        if (o.getAttrs) {
          let a = o.getAttrs(t);
          if (a === !1)
            continue;
          o.attrs = a || void 0;
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
    function r(s) {
      let i = s.priority == null ? 50 : s.priority, o = 0;
      for (; o < t.length; o++) {
        let l = t[o];
        if ((l.priority == null ? 50 : l.priority) < i)
          break;
      }
      t.splice(o, 0, s);
    }
    for (let s in e.marks) {
      let i = e.marks[s].spec.parseDOM;
      i && i.forEach((o) => {
        r(o = Tu(o)), o.mark || o.ignore || o.clearMark || (o.mark = s);
      });
    }
    for (let s in e.nodes) {
      let i = e.nodes[s].spec.parseDOM;
      i && i.forEach((o) => {
        r(o = Tu(o)), o.node || o.ignore || o.mark || (o.node = s);
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
    return e.cached.domParser || (e.cached.domParser = new Tn(e, Tn.schemaRules(e)));
  }
}
const Jf = {
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
}, X1 = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, Qf = { ol: !0, ul: !0 }, ps = 1, ta = 2, ts = 4;
function Mu(n, e, t) {
  return e != null ? (e ? ps : 0) | (e === "full" ? ta : 0) : n && n.whitespace == "pre" ? ps | ta : t & ~ts;
}
class Xs {
  constructor(e, t, r, s, i, o) {
    this.type = e, this.attrs = t, this.marks = r, this.solid = s, this.options = o, this.content = [], this.activeMarks = de.none, this.match = i || (o & ts ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let t = this.type.contentMatch.fillBefore(N.from(e));
      if (t)
        this.match = this.type.contentMatch.matchFragment(t);
      else {
        let r = this.type.contentMatch, s;
        return (s = r.findWrapping(e.type)) ? (this.match = r, s) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & ps)) {
      let r = this.content[this.content.length - 1], s;
      if (r && r.isText && (s = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let i = r;
        r.text.length == s[0].length ? this.content.pop() : this.content[this.content.length - 1] = i.withText(i.text.slice(0, i.text.length - s[0].length));
      }
    }
    let t = N.from(this.content);
    return !e && this.match && (t = t.append(this.match.fillBefore(N.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t;
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !Jf.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class vu {
  constructor(e, t, r) {
    this.parser = e, this.options = t, this.isOpen = r, this.open = 0, this.localPreserveWS = !1;
    let s = t.topNode, i, o = Mu(null, t.preserveWhitespace, 0) | (r ? ts : 0);
    s ? i = new Xs(s.type, s.attrs, de.none, !0, t.topMatch || s.type.contentMatch, o) : r ? i = new Xs(null, null, de.none, !0, null, o) : i = new Xs(e.schema.topNodeType, null, de.none, !0, null, o), this.nodes = [i], this.find = t.findPositions, this.needsBlock = !1;
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
    let r = e.nodeValue, s = this.top, i = s.options & ta ? "full" : this.localPreserveWS || (s.options & ps) > 0, { schema: o } = this.parser;
    if (i === "full" || s.inlineContext(e) || /[^ \t\r\n\u000c]/.test(r)) {
      if (i)
        if (i === "full")
          r = r.replace(/\r\n?/g, `
`);
        else if (o.linebreakReplacement && /[\r\n]/.test(r) && this.top.findWrapping(o.linebreakReplacement.create())) {
          let l = r.split(/\r?\n|\r/);
          for (let a = 0; a < l.length; a++)
            a && this.insertNode(o.linebreakReplacement.create(), t, !0), l[a] && this.insertNode(o.text(l[a]), t, !/\S/.test(l[a]));
          r = "";
        } else
          r = r.replace(/\r?\n|\r/g, " ");
      else if (r = r.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(r) && this.open == this.nodes.length - 1) {
        let l = s.content[s.content.length - 1], a = e.previousSibling;
        (!l || a && a.nodeName == "BR" || l.isText && /[ \t\r\n\u000c]$/.test(l.text)) && (r = r.slice(1));
      }
      r && this.insertNode(o.text(r), t, !/\S/.test(r)), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, t, r) {
    let s = this.localPreserveWS, i = this.top;
    (e.tagName == "PRE" || /pre/.test(e.style && e.style.whiteSpace)) && (this.localPreserveWS = !0);
    let o = e.nodeName.toLowerCase(), l;
    Qf.hasOwnProperty(o) && this.parser.normalizeLists && eS(e);
    let a = this.options.ruleFromNode && this.options.ruleFromNode(e) || (l = this.parser.matchTag(e, this, r));
    e: if (a ? a.ignore : X1.hasOwnProperty(o))
      this.findInside(e), this.ignoreFallback(e, t);
    else if (!a || a.skip || a.closeParent) {
      a && a.closeParent ? this.open = Math.max(0, this.open - 1) : a && a.skip.nodeType && (e = a.skip);
      let u, d = this.needsBlock;
      if (Jf.hasOwnProperty(o))
        i.content.length && i.content[0].isInline && this.open && (this.open--, i = this.top), u = !0, i.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e, t);
        break e;
      }
      let h = a && a.skip ? t : this.readStyles(e, t);
      h && this.addAll(e, h), u && this.sync(i), this.needsBlock = d;
    } else {
      let u = this.readStyles(e, t);
      u && this.addElementByRule(e, a, u, a.consuming === !1 ? l : void 0);
    }
    this.localPreserveWS = s;
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
      for (let s = 0; s < this.parser.matchedStyles.length; s++) {
        let i = this.parser.matchedStyles[s], o = r.getPropertyValue(i);
        if (o)
          for (let l = void 0; ; ) {
            let a = this.parser.matchStyle(i, o, this, l);
            if (!a)
              break;
            if (a.ignore)
              return null;
            if (a.clearMark ? t = t.filter((u) => !a.clearMark(u)) : t = t.concat(this.parser.schema.marks[a.mark].create(a.attrs)), a.consuming === !1)
              l = a;
            else
              break;
          }
      }
    return t;
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(e, t, r, s) {
    let i, o;
    if (t.node)
      if (o = this.parser.schema.nodes[t.node], o.isLeaf)
        this.insertNode(o.create(t.attrs), r, e.nodeName == "BR") || this.leafFallback(e, r);
      else {
        let a = this.enter(o, t.attrs || null, r, t.preserveWhitespace);
        a && (i = !0, r = a);
      }
    else {
      let a = this.parser.schema.marks[t.mark];
      r = r.concat(a.create(t.attrs));
    }
    let l = this.top;
    if (o && o.isLeaf)
      this.findInside(e);
    else if (s)
      this.addElement(e, r, s);
    else if (t.getContent)
      this.findInside(e), t.getContent(e, this.parser.schema).forEach((a) => this.insertNode(a, r, !1));
    else {
      let a = e;
      typeof t.contentElement == "string" ? a = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? a = t.contentElement(e) : t.contentElement && (a = t.contentElement), this.findAround(e, a, !0), this.addAll(a, r), this.findAround(e, a, !1);
    }
    i && this.sync(l) && this.open--;
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, t, r, s) {
    let i = r || 0;
    for (let o = r ? e.childNodes[r] : e.firstChild, l = s == null ? null : e.childNodes[s]; o != l; o = o.nextSibling, ++i)
      this.findAtPoint(e, i), this.addDOM(o, t);
    this.findAtPoint(e, i);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e, t, r) {
    let s, i;
    for (let o = this.open, l = 0; o >= 0; o--) {
      let a = this.nodes[o], u = a.findWrapping(e);
      if (u && (!s || s.length > u.length + l) && (s = u, i = a, !u.length))
        break;
      if (a.solid) {
        if (r)
          break;
        l += 2;
      }
    }
    if (!s)
      return null;
    this.sync(i);
    for (let o = 0; o < s.length; o++)
      t = this.enterInner(s[o], null, t, !1);
    return t;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e, t, r) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let i = this.textblockFromContext();
      i && (t = this.enterInner(i, null, t));
    }
    let s = this.findPlace(e, t, r);
    if (s) {
      this.closeExtra();
      let i = this.top;
      i.match && (i.match = i.match.matchType(e.type));
      let o = de.none;
      for (let l of s.concat(e.marks))
        (i.type ? i.type.allowsMarkType(l.type) : Ou(l.type, e.type)) && (o = l.addToSet(o));
      return i.content.push(e.mark(o)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, t, r, s) {
    let i = this.findPlace(e.create(t), r, !1);
    return i && (i = this.enterInner(e, t, r, !0, s)), i;
  }
  // Open a node of the given type
  enterInner(e, t, r, s = !1, i) {
    this.closeExtra();
    let o = this.top;
    o.match = o.match && o.match.matchType(e);
    let l = Mu(e, i, o.options);
    o.options & ts && o.content.length == 0 && (l |= ts);
    let a = de.none;
    return r = r.filter((u) => (o.type ? o.type.allowsMarkType(u.type) : Ou(u.type, e)) ? (a = u.addToSet(a), !1) : !0), this.nodes.push(new Xs(e, t, a, s, null, l)), this.open++, r;
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
      this.localPreserveWS && (this.nodes[t].options |= ps);
    }
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let t = this.open; t >= 0; t--) {
      let r = this.nodes[t].content;
      for (let s = r.length - 1; s >= 0; s--)
        e += r[s].nodeSize;
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
      for (let s = 0; s < this.find.length; s++)
        this.find[s].pos == null && e.nodeType == 1 && e.contains(this.find[s].node) && t.compareDocumentPosition(this.find[s].node) & (r ? 2 : 4) && (this.find[s].pos = this.currentPos);
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
    let t = e.split("/"), r = this.options.context, s = !this.isOpen && (!r || r.parent.type == this.nodes[0].type), i = -(r ? r.depth + 1 : 0) + (s ? 0 : 1), o = (l, a) => {
      for (; l >= 0; l--) {
        let u = t[l];
        if (u == "") {
          if (l == t.length - 1 || l == 0)
            continue;
          for (; a >= i; a--)
            if (o(l - 1, a))
              return !0;
          return !1;
        } else {
          let d = a > 0 || a == 0 && s ? this.nodes[a].type : r && a >= i ? r.node(a - i).type : null;
          if (!d || d.name != u && !d.isInGroup(u))
            return !1;
          a--;
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
function eS(n) {
  for (let e = n.firstChild, t = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && Qf.hasOwnProperty(r) && t ? (t.appendChild(e), e = t) : r == "li" ? t = e : r && (t = null);
  }
}
function tS(n, e) {
  return (n.matches || n.msMatchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector).call(n, e);
}
function Tu(n) {
  let e = {};
  for (let t in n)
    e[t] = n[t];
  return e;
}
function Ou(n, e) {
  let t = e.schema.nodes;
  for (let r in t) {
    let s = t[r];
    if (!s.allowsMarkType(n))
      continue;
    let i = [], o = (l) => {
      i.push(l);
      for (let a = 0; a < l.edgeCount; a++) {
        let { type: u, next: d } = l.edge(a);
        if (u == e || i.indexOf(d) < 0 && o(d))
          return !0;
      }
    };
    if (o(s.contentMatch))
      return !0;
  }
}
class lr {
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
    r || (r = ml(t).createDocumentFragment());
    let s = r, i = [];
    return e.forEach((o) => {
      if (i.length || o.marks.length) {
        let l = 0, a = 0;
        for (; l < i.length && a < o.marks.length; ) {
          let u = o.marks[a];
          if (!this.marks[u.type.name]) {
            a++;
            continue;
          }
          if (!u.eq(i[l][0]) || u.type.spec.spanning === !1)
            break;
          l++, a++;
        }
        for (; l < i.length; )
          s = i.pop()[1];
        for (; a < o.marks.length; ) {
          let u = o.marks[a++], d = this.serializeMark(u, o.isInline, t);
          d && (i.push([u, s]), s.appendChild(d.dom), s = d.contentDOM || d.dom);
        }
      }
      s.appendChild(this.serializeNodeInner(o, t));
    }), r;
  }
  /**
  @internal
  */
  serializeNodeInner(e, t) {
    let { dom: r, contentDOM: s } = yi(ml(t), this.nodes[e.type.name](e), null, e.attrs);
    if (s) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, t, s);
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
    for (let s = e.marks.length - 1; s >= 0; s--) {
      let i = this.serializeMark(e.marks[s], e.isInline, t);
      i && ((i.contentDOM || i.dom).appendChild(r), r = i.dom);
    }
    return r;
  }
  /**
  @internal
  */
  serializeMark(e, t, r = {}) {
    let s = this.marks[e.type.name];
    return s && yi(ml(r), s(e, t), null, e.attrs);
  }
  static renderSpec(e, t, r = null, s) {
    return yi(e, t, r, s);
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new lr(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let t = Eu(e.nodes);
    return t.text || (t.text = (r) => r.text), t;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return Eu(e.marks);
  }
}
function Eu(n) {
  let e = {};
  for (let t in n) {
    let r = n[t].spec.toDOM;
    r && (e[t] = r);
  }
  return e;
}
function ml(n) {
  return n.document || window.document;
}
const Au = /* @__PURE__ */ new WeakMap();
function nS(n) {
  let e = Au.get(n);
  return e === void 0 && Au.set(n, e = rS(n)), e;
}
function rS(n) {
  let e = null;
  function t(r) {
    if (r && typeof r == "object")
      if (Array.isArray(r))
        if (typeof r[0] == "string")
          e || (e = []), e.push(r);
        else
          for (let s = 0; s < r.length; s++)
            t(r[s]);
      else
        for (let s in r)
          t(r[s]);
  }
  return t(n), e;
}
function yi(n, e, t, r) {
  if (typeof e == "string")
    return { dom: n.createTextNode(e) };
  if (e.nodeType != null)
    return { dom: e };
  if (e.dom && e.dom.nodeType != null)
    return e;
  let s = e[0], i;
  if (typeof s != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (r && (i = nS(r)) && i.indexOf(e) > -1)
    throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  let o = s.indexOf(" ");
  o > 0 && (t = s.slice(0, o), s = s.slice(o + 1));
  let l, a = t ? n.createElementNS(t, s) : n.createElement(s), u = e[1], d = 1;
  if (u && typeof u == "object" && u.nodeType == null && !Array.isArray(u)) {
    d = 2;
    for (let h in u)
      if (u[h] != null) {
        let p = h.indexOf(" ");
        p > 0 ? a.setAttributeNS(h.slice(0, p), h.slice(p + 1), u[h]) : h == "style" && a.style ? a.style.cssText = u[h] : a.setAttribute(h, u[h]);
      }
  }
  for (let h = d; h < e.length; h++) {
    let p = e[h];
    if (p === 0) {
      if (h < e.length - 1 || h > d)
        throw new RangeError("Content hole must be the only child of its parent node");
      return { dom: a, contentDOM: a };
    } else {
      let { dom: g, contentDOM: b } = yi(n, p, t, r);
      if (a.appendChild(g), b) {
        if (l)
          throw new RangeError("Multiple content holes");
        l = b;
      }
    }
  }
  return { dom: a, contentDOM: l };
}
const Zf = 65535, Xf = Math.pow(2, 16);
function sS(n, e) {
  return n + e * Xf;
}
function Du(n) {
  return n & Zf;
}
function iS(n) {
  return (n - (n & Zf)) / Xf;
}
const eh = 1, th = 2, bi = 4, nh = 8;
class na {
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
    return (this.delInfo & nh) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (eh | bi)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (th | bi)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & bi) > 0;
  }
}
class ft {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, t = !1) {
    if (this.ranges = e, this.inverted = t, !e.length && ft.empty)
      return ft.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let t = 0, r = Du(e);
    if (!this.inverted)
      for (let s = 0; s < r; s++)
        t += this.ranges[s * 3 + 2] - this.ranges[s * 3 + 1];
    return this.ranges[r * 3] + t + iS(e);
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
    let s = 0, i = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? s : 0);
      if (a > e)
        break;
      let u = this.ranges[l + i], d = this.ranges[l + o], h = a + u;
      if (e <= h) {
        let p = u ? e == a ? -1 : e == h ? 1 : t : t, g = a + s + (p < 0 ? 0 : d);
        if (r)
          return g;
        let b = e == (t < 0 ? a : h) ? null : sS(l / 3, e - a), S = e == a ? th : e == h ? eh : bi;
        return (t < 0 ? e != a : e != h) && (S |= nh), new na(g, S, b);
      }
      s += d - u;
    }
    return r ? e + s : new na(e + s, 0, null);
  }
  /**
  @internal
  */
  touches(e, t) {
    let r = 0, s = Du(t), i = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? r : 0);
      if (a > e)
        break;
      let u = this.ranges[l + i], d = a + u;
      if (e <= d && l == s * 3)
        return !0;
      r += this.ranges[l + o] - u;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let t = this.inverted ? 2 : 1, r = this.inverted ? 1 : 2;
    for (let s = 0, i = 0; s < this.ranges.length; s += 3) {
      let o = this.ranges[s], l = o - (this.inverted ? i : 0), a = o + (this.inverted ? 0 : i), u = this.ranges[s + t], d = this.ranges[s + r];
      e(l, l + u, a, a + d), i += d - u;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new ft(this.ranges, !this.inverted);
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
    return e == 0 ? ft.empty : new ft(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
ft.empty = new ft([]);
class ms {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(e, t, r = 0, s = e ? e.length : 0) {
    this.mirror = t, this.from = r, this.to = s, this._maps = e || [], this.ownData = !(e || t);
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
    return new ms(this._maps, this.mirror, e, t);
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
      let s = e.getMirror(t);
      this.appendMap(e._maps[t], s != null && s < t ? r + s : void 0);
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
      let s = e.getMirror(t);
      this.appendMap(e._maps[t].invert(), s != null && s > t ? r - s - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let e = new ms();
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
    let s = 0;
    for (let i = this.from; i < this.to; i++) {
      let o = this._maps[i], l = o.mapResult(e, t);
      if (l.recover != null) {
        let a = this.getMirror(i);
        if (a != null && a > i && a < this.to) {
          i = a, e = this._maps[a].recover(l.recover);
          continue;
        }
      }
      s |= l.delInfo, e = l.pos;
    }
    return r ? e : new na(e, s, null);
  }
}
const gl = /* @__PURE__ */ Object.create(null);
class et {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return ft.empty;
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
    let r = gl[t.stepType];
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
    if (e in gl)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return gl[e] = t, t.prototype.jsonID = e, t;
  }
}
class Ae {
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
    return new Ae(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new Ae(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, t, r, s) {
    try {
      return Ae.ok(e.replace(t, r, s));
    } catch (i) {
      if (i instanceof Oi)
        return Ae.fail(i.message);
      throw i;
    }
  }
}
function Ya(n, e, t) {
  let r = [];
  for (let s = 0; s < n.childCount; s++) {
    let i = n.child(s);
    i.content.size && (i = i.copy(Ya(i.content, e, i))), i.isInline && (i = e(i, t, s)), r.push(i);
  }
  return N.fromArray(r);
}
class xn extends et {
  /**
  Create a mark step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = e.resolve(this.from), s = r.node(r.sharedDepth(this.to)), i = new z(Ya(t.content, (o, l) => !o.isAtom || !l.type.allowsMarkType(this.mark.type) ? o : o.mark(this.mark.addToSet(o.marks)), s), t.openStart, t.openEnd);
    return Ae.fromReplace(e, this.from, this.to, i);
  }
  invert() {
    return new zt(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new xn(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof xn && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new xn(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
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
    return new xn(t.from, t.to, e.markFromJSON(t.mark));
  }
}
et.jsonID("addMark", xn);
class zt extends et {
  /**
  Create a mark-removing step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = new z(Ya(t.content, (s) => s.mark(this.mark.removeFromSet(s.marks)), e), t.openStart, t.openEnd);
    return Ae.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new xn(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new zt(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof zt && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new zt(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
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
    return new zt(t.from, t.to, e.markFromJSON(t.mark));
  }
}
et.jsonID("removeMark", zt);
class Cn extends et {
  /**
  Create a node mark step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return Ae.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
    return Ae.fromReplace(e, this.pos, this.pos + 1, new z(N.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    if (t) {
      let r = this.mark.addToSet(t.marks);
      if (r.length == t.marks.length) {
        for (let s = 0; s < t.marks.length; s++)
          if (!t.marks[s].isInSet(r))
            return new Cn(this.pos, t.marks[s]);
        return new Cn(this.pos, this.mark);
      }
    }
    return new er(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new Cn(t.pos, this.mark);
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
    return new Cn(t.pos, e.markFromJSON(t.mark));
  }
}
et.jsonID("addNodeMark", Cn);
class er extends et {
  /**
  Create a mark-removing step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return Ae.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
    return Ae.fromReplace(e, this.pos, this.pos + 1, new z(N.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    return !t || !this.mark.isInSet(t.marks) ? this : new Cn(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new er(t.pos, this.mark);
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
    return new er(t.pos, e.markFromJSON(t.mark));
  }
}
et.jsonID("removeNodeMark", er);
class Le extends et {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, t, r, s = !1) {
    super(), this.from = e, this.to = t, this.slice = r, this.structure = s;
  }
  apply(e) {
    return this.structure && ra(e, this.from, this.to) ? Ae.fail("Structure replace would overwrite content") : Ae.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new ft([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new Le(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deletedAcross && r.deletedAcross ? null : new Le(t.pos, Math.max(t.pos, r.pos), this.slice, this.structure);
  }
  merge(e) {
    if (!(e instanceof Le) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let t = this.slice.size + e.slice.size == 0 ? z.empty : new z(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new Le(this.from, this.to + (e.to - e.from), t, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let t = this.slice.size + e.slice.size == 0 ? z.empty : new z(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new Le(e.from, this.to, t, this.structure);
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
    return new Le(t.from, t.to, z.fromJSON(e, t.slice), !!t.structure);
  }
}
et.jsonID("replace", Le);
class ze extends et {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, t, r, s, i, o, l = !1) {
    super(), this.from = e, this.to = t, this.gapFrom = r, this.gapTo = s, this.slice = i, this.insert = o, this.structure = l;
  }
  apply(e) {
    if (this.structure && (ra(e, this.from, this.gapFrom) || ra(e, this.gapTo, this.to)))
      return Ae.fail("Structure gap-replace would overwrite content");
    let t = e.slice(this.gapFrom, this.gapTo);
    if (t.openStart || t.openEnd)
      return Ae.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, t.content);
    return r ? Ae.fromReplace(e, this.from, this.to, r) : Ae.fail("Content does not fit in gap");
  }
  getMap() {
    return new ft([
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
    return new ze(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), s = this.from == this.gapFrom ? t.pos : e.map(this.gapFrom, -1), i = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
    return t.deletedAcross && r.deletedAcross || s < t.pos || i > r.pos ? null : new ze(t.pos, r.pos, s, i, this.slice, this.insert, this.structure);
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
    return new ze(t.from, t.to, t.gapFrom, t.gapTo, z.fromJSON(e, t.slice), t.insert, !!t.structure);
  }
}
et.jsonID("replaceAround", ze);
function ra(n, e, t) {
  let r = n.resolve(e), s = t - e, i = r.depth;
  for (; s > 0 && i > 0 && r.indexAfter(i) == r.node(i).childCount; )
    i--, s--;
  if (s > 0) {
    let o = r.node(i).maybeChild(r.indexAfter(i));
    for (; s > 0; ) {
      if (!o || o.isLeaf)
        return !0;
      o = o.firstChild, s--;
    }
  }
  return !1;
}
function oS(n, e, t, r) {
  let s = [], i = [], o, l;
  n.doc.nodesBetween(e, t, (a, u, d) => {
    if (!a.isInline)
      return;
    let h = a.marks;
    if (!r.isInSet(h) && d.type.allowsMarkType(r.type)) {
      let p = Math.max(u, e), g = Math.min(u + a.nodeSize, t), b = r.addToSet(h);
      for (let S = 0; S < h.length; S++)
        h[S].isInSet(b) || (o && o.to == p && o.mark.eq(h[S]) ? o.to = g : s.push(o = new zt(p, g, h[S])));
      l && l.to == p ? l.to = g : i.push(l = new xn(p, g, r));
    }
  }), s.forEach((a) => n.step(a)), i.forEach((a) => n.step(a));
}
function lS(n, e, t, r) {
  let s = [], i = 0;
  n.doc.nodesBetween(e, t, (o, l) => {
    if (!o.isInline)
      return;
    i++;
    let a = null;
    if (r instanceof go) {
      let u = o.marks, d;
      for (; d = r.isInSet(u); )
        (a || (a = [])).push(d), u = d.removeFromSet(u);
    } else r ? r.isInSet(o.marks) && (a = [r]) : a = o.marks;
    if (a && a.length) {
      let u = Math.min(l + o.nodeSize, t);
      for (let d = 0; d < a.length; d++) {
        let h = a[d], p;
        for (let g = 0; g < s.length; g++) {
          let b = s[g];
          b.step == i - 1 && h.eq(s[g].style) && (p = b);
        }
        p ? (p.to = u, p.step = i) : s.push({ style: h, from: Math.max(l, e), to: u, step: i });
      }
    }
  }), s.forEach((o) => n.step(new zt(o.from, o.to, o.style)));
}
function ja(n, e, t, r = t.contentMatch, s = !0) {
  let i = n.doc.nodeAt(e), o = [], l = e + 1;
  for (let a = 0; a < i.childCount; a++) {
    let u = i.child(a), d = l + u.nodeSize, h = r.matchType(u.type);
    if (!h)
      o.push(new Le(l, d, z.empty));
    else {
      r = h;
      for (let p = 0; p < u.marks.length; p++)
        t.allowsMarkType(u.marks[p].type) || n.step(new zt(l, d, u.marks[p]));
      if (s && u.isText && t.whitespace != "pre") {
        let p, g = /\r?\n|\r/g, b;
        for (; p = g.exec(u.text); )
          b || (b = new z(N.from(t.schema.text(" ", t.allowedMarks(u.marks))), 0, 0)), o.push(new Le(l + p.index, l + p.index + p[0].length, b));
      }
    }
    l = d;
  }
  if (!r.validEnd) {
    let a = r.fillBefore(N.empty, !0);
    n.replace(l, l, new z(a, 0, 0));
  }
  for (let a = o.length - 1; a >= 0; a--)
    n.step(o[a]);
}
function aS(n, e, t) {
  return (e == 0 || n.canReplace(e, n.childCount)) && (t == n.childCount || n.canReplace(0, t));
}
function Pr(n) {
  let t = n.parent.content.cutByIndex(n.startIndex, n.endIndex);
  for (let r = n.depth, s = 0, i = 0; ; --r) {
    let o = n.$from.node(r), l = n.$from.index(r) + s, a = n.$to.indexAfter(r) - i;
    if (r < n.depth && o.canReplace(l, a, t))
      return r;
    if (r == 0 || o.type.spec.isolating || !aS(o, l, a))
      break;
    l && (s = 1), a < o.childCount && (i = 1);
  }
  return null;
}
function cS(n, e, t) {
  let { $from: r, $to: s, depth: i } = e, o = r.before(i + 1), l = s.after(i + 1), a = o, u = l, d = N.empty, h = 0;
  for (let b = i, S = !1; b > t; b--)
    S || r.index(b) > 0 ? (S = !0, d = N.from(r.node(b).copy(d)), h++) : a--;
  let p = N.empty, g = 0;
  for (let b = i, S = !1; b > t; b--)
    S || s.after(b + 1) < s.end(b) ? (S = !0, p = N.from(s.node(b).copy(p)), g++) : u++;
  n.step(new ze(a, u, o, l, new z(d.append(p), h, g), d.size - h, !0));
}
function Ua(n, e, t = null, r = n) {
  let s = uS(n, e), i = s && dS(r, e);
  return i ? s.map(Nu).concat({ type: e, attrs: t }).concat(i.map(Nu)) : null;
}
function Nu(n) {
  return { type: n, attrs: null };
}
function uS(n, e) {
  let { parent: t, startIndex: r, endIndex: s } = n, i = t.contentMatchAt(r).findWrapping(e);
  if (!i)
    return null;
  let o = i.length ? i[0] : e;
  return t.canReplaceWith(r, s, o) ? i : null;
}
function dS(n, e) {
  let { parent: t, startIndex: r, endIndex: s } = n, i = t.child(r), o = e.contentMatch.findWrapping(i.type);
  if (!o)
    return null;
  let a = (o.length ? o[o.length - 1] : e).contentMatch;
  for (let u = r; a && u < s; u++)
    a = a.matchType(t.child(u).type);
  return !a || !a.validEnd ? null : o;
}
function fS(n, e, t) {
  let r = N.empty;
  for (let o = t.length - 1; o >= 0; o--) {
    if (r.size) {
      let l = t[o].type.contentMatch.matchFragment(r);
      if (!l || !l.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = N.from(t[o].type.create(t[o].attrs, r));
  }
  let s = e.start, i = e.end;
  n.step(new ze(s, i, s, i, new z(r, 0, 0), t.length, !0));
}
function hS(n, e, t, r, s) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let i = n.steps.length;
  n.doc.nodesBetween(e, t, (o, l) => {
    let a = typeof s == "function" ? s(o) : s;
    if (o.isTextblock && !o.hasMarkup(r, a) && pS(n.doc, n.mapping.slice(i).map(l), r)) {
      let u = null;
      if (r.schema.linebreakReplacement) {
        let g = r.whitespace == "pre", b = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
        g && !b ? u = !1 : !g && b && (u = !0);
      }
      u === !1 && sh(n, o, l, i), ja(n, n.mapping.slice(i).map(l, 1), r, void 0, u === null);
      let d = n.mapping.slice(i), h = d.map(l, 1), p = d.map(l + o.nodeSize, 1);
      return n.step(new ze(h, p, h + 1, p - 1, new z(N.from(r.create(a, null, o.marks)), 0, 0), 1, !0)), u === !0 && rh(n, o, l, i), !1;
    }
  });
}
function rh(n, e, t, r) {
  e.forEach((s, i) => {
    if (s.isText) {
      let o, l = /\r?\n|\r/g;
      for (; o = l.exec(s.text); ) {
        let a = n.mapping.slice(r).map(t + 1 + i + o.index);
        n.replaceWith(a, a + 1, e.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function sh(n, e, t, r) {
  e.forEach((s, i) => {
    if (s.type == s.type.schema.linebreakReplacement) {
      let o = n.mapping.slice(r).map(t + 1 + i);
      n.replaceWith(o, o + 1, e.type.schema.text(`
`));
    }
  });
}
function pS(n, e, t) {
  let r = n.resolve(e), s = r.index();
  return r.parent.canReplaceWith(s, s + 1, t);
}
function mS(n, e, t, r, s) {
  let i = n.doc.nodeAt(e);
  if (!i)
    throw new RangeError("No node at given position");
  t || (t = i.type);
  let o = t.create(r, null, s || i.marks);
  if (i.isLeaf)
    return n.replaceWith(e, e + i.nodeSize, o);
  if (!t.validContent(i.content))
    throw new RangeError("Invalid content for node type " + t.name);
  n.step(new ze(e, e + i.nodeSize, e + 1, e + i.nodeSize - 1, new z(N.from(o), 0, 0), 1, !0));
}
function sn(n, e, t = 1, r) {
  let s = n.resolve(e), i = s.depth - t, o = r && r[r.length - 1] || s.parent;
  if (i < 0 || s.parent.type.spec.isolating || !s.parent.canReplace(s.index(), s.parent.childCount) || !o.type.validContent(s.parent.content.cutByIndex(s.index(), s.parent.childCount)))
    return !1;
  for (let u = s.depth - 1, d = t - 2; u > i; u--, d--) {
    let h = s.node(u), p = s.index(u);
    if (h.type.spec.isolating)
      return !1;
    let g = h.content.cutByIndex(p, h.childCount), b = r && r[d + 1];
    b && (g = g.replaceChild(0, b.type.create(b.attrs)));
    let S = r && r[d] || h;
    if (!h.canReplace(p + 1, h.childCount) || !S.type.validContent(g))
      return !1;
  }
  let l = s.indexAfter(i), a = r && r[0];
  return s.node(i).canReplaceWith(l, l, a ? a.type : s.node(i + 1).type);
}
function gS(n, e, t = 1, r) {
  let s = n.doc.resolve(e), i = N.empty, o = N.empty;
  for (let l = s.depth, a = s.depth - t, u = t - 1; l > a; l--, u--) {
    i = N.from(s.node(l).copy(i));
    let d = r && r[u];
    o = N.from(d ? d.type.create(d.attrs, o) : s.node(l).copy(o));
  }
  n.step(new Le(e, e, new z(i.append(o), t, t), !0));
}
function Rn(n, e) {
  let t = n.resolve(e), r = t.index();
  return ih(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(r, r + 1);
}
function yS(n, e) {
  e.content.size || n.type.compatibleContent(e.type);
  let t = n.contentMatchAt(n.childCount), { linebreakReplacement: r } = n.type.schema;
  for (let s = 0; s < e.childCount; s++) {
    let i = e.child(s), o = i.type == r ? n.type.schema.nodes.text : i.type;
    if (t = t.matchType(o), !t || !n.type.allowsMarks(i.marks))
      return !1;
  }
  return t.validEnd;
}
function ih(n, e) {
  return !!(n && e && !n.isLeaf && yS(n, e));
}
function yo(n, e, t = -1) {
  let r = n.resolve(e);
  for (let s = r.depth; ; s--) {
    let i, o, l = r.index(s);
    if (s == r.depth ? (i = r.nodeBefore, o = r.nodeAfter) : t > 0 ? (i = r.node(s + 1), l++, o = r.node(s).maybeChild(l)) : (i = r.node(s).maybeChild(l - 1), o = r.node(s + 1)), i && !i.isTextblock && ih(i, o) && r.node(s).canReplace(l, l + 1))
      return e;
    if (s == 0)
      break;
    e = t < 0 ? r.before(s) : r.after(s);
  }
}
function bS(n, e, t) {
  let r = null, { linebreakReplacement: s } = n.doc.type.schema, i = n.doc.resolve(e - t), o = i.node().type;
  if (s && o.inlineContent) {
    let d = o.whitespace == "pre", h = !!o.contentMatch.matchType(s);
    d && !h ? r = !1 : !d && h && (r = !0);
  }
  let l = n.steps.length;
  if (r === !1) {
    let d = n.doc.resolve(e + t);
    sh(n, d.node(), d.before(), l);
  }
  o.inlineContent && ja(n, e + t - 1, o, i.node().contentMatchAt(i.index()), r == null);
  let a = n.mapping.slice(l), u = a.map(e - t);
  if (n.step(new Le(u, a.map(e + t, -1), z.empty, !0)), r === !0) {
    let d = n.doc.resolve(u);
    rh(n, d.node(), d.before(), n.steps.length);
  }
  return n;
}
function SS(n, e, t) {
  let r = n.resolve(e);
  if (r.parent.canReplaceWith(r.index(), r.index(), t))
    return e;
  if (r.parentOffset == 0)
    for (let s = r.depth - 1; s >= 0; s--) {
      let i = r.index(s);
      if (r.node(s).canReplaceWith(i, i, t))
        return r.before(s + 1);
      if (i > 0)
        return null;
    }
  if (r.parentOffset == r.parent.content.size)
    for (let s = r.depth - 1; s >= 0; s--) {
      let i = r.indexAfter(s);
      if (r.node(s).canReplaceWith(i, i, t))
        return r.after(s + 1);
      if (i < r.node(s).childCount)
        return null;
    }
  return null;
}
function oh(n, e, t) {
  let r = n.resolve(e);
  if (!t.content.size)
    return e;
  let s = t.content;
  for (let i = 0; i < t.openStart; i++)
    s = s.firstChild.content;
  for (let i = 1; i <= (t.openStart == 0 && t.size ? 2 : 1); i++)
    for (let o = r.depth; o >= 0; o--) {
      let l = o == r.depth ? 0 : r.pos <= (r.start(o + 1) + r.end(o + 1)) / 2 ? -1 : 1, a = r.index(o) + (l > 0 ? 1 : 0), u = r.node(o), d = !1;
      if (i == 1)
        d = u.canReplace(a, a, s);
      else {
        let h = u.contentMatchAt(a).findWrapping(s.firstChild.type);
        d = h && u.canReplaceWith(a, a, h[0]);
      }
      if (d)
        return l == 0 ? r.pos : l < 0 ? r.before(o + 1) : r.after(o + 1);
    }
  return null;
}
function bo(n, e, t = e, r = z.empty) {
  if (e == t && !r.size)
    return null;
  let s = n.resolve(e), i = n.resolve(t);
  return lh(s, i, r) ? new Le(e, t, r) : new wS(s, i, r).fit();
}
function lh(n, e, t) {
  return !t.openStart && !t.openEnd && n.start() == e.start() && n.parent.canReplace(n.index(), e.index(), t.content);
}
class wS {
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.unplaced = r, this.frontier = [], this.placed = N.empty;
    for (let s = 0; s <= e.depth; s++) {
      let i = e.node(s);
      this.frontier.push({
        type: i.type,
        match: i.contentMatchAt(e.indexAfter(s))
      });
    }
    for (let s = e.depth; s > 0; s--)
      this.placed = N.from(e.node(s).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let u = this.findFittable();
      u ? this.placeNodes(u) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), t = this.placed.size - this.depth - this.$from.depth, r = this.$from, s = this.close(e < 0 ? this.$to : r.doc.resolve(e));
    if (!s)
      return null;
    let i = this.placed, o = r.depth, l = s.depth;
    for (; o && l && i.childCount == 1; )
      i = i.firstChild.content, o--, l--;
    let a = new z(i, o, l);
    return e > -1 ? new ze(r.pos, e, this.$to.pos, this.$to.end(), a, t) : a.size || r.pos != this.$to.pos ? new Le(r.pos, s.pos, a) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let t = this.unplaced.content, r = 0, s = this.unplaced.openEnd; r < e; r++) {
      let i = t.firstChild;
      if (t.childCount > 1 && (s = 0), i.type.spec.isolating && s <= r) {
        e = r;
        break;
      }
      t = i.content;
    }
    for (let t = 1; t <= 2; t++)
      for (let r = t == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
        let s, i = null;
        r ? (i = yl(this.unplaced.content, r - 1).firstChild, s = i.content) : s = this.unplaced.content;
        let o = s.firstChild;
        for (let l = this.depth; l >= 0; l--) {
          let { type: a, match: u } = this.frontier[l], d, h = null;
          if (t == 1 && (o ? u.matchType(o.type) || (h = u.fillBefore(N.from(o), !1)) : i && a.compatibleContent(i.type)))
            return { sliceDepth: r, frontierDepth: l, parent: i, inject: h };
          if (t == 2 && o && (d = u.findWrapping(o.type)))
            return { sliceDepth: r, frontierDepth: l, parent: i, wrap: d };
          if (i && u.matchType(i.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, s = yl(e, t);
    return !s.childCount || s.firstChild.isLeaf ? !1 : (this.unplaced = new z(e, t + 1, Math.max(r, s.size + t >= e.size - r ? t + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, s = yl(e, t);
    if (s.childCount <= 1 && t > 0) {
      let i = e.size - t <= t + s.size;
      this.unplaced = new z(Jr(e, t - 1, 1), t - 1, i ? t - 1 : r);
    } else
      this.unplaced = new z(Jr(e, t, 1), t, r);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: t, parent: r, inject: s, wrap: i }) {
    for (; this.depth > t; )
      this.closeFrontierNode();
    if (i)
      for (let S = 0; S < i.length; S++)
        this.openFrontierNode(i[S]);
    let o = this.unplaced, l = r ? r.content : o.content, a = o.openStart - e, u = 0, d = [], { match: h, type: p } = this.frontier[t];
    if (s) {
      for (let S = 0; S < s.childCount; S++)
        d.push(s.child(S));
      h = h.matchFragment(s);
    }
    let g = l.size + e - (o.content.size - o.openEnd);
    for (; u < l.childCount; ) {
      let S = l.child(u), w = h.matchType(S.type);
      if (!w)
        break;
      u++, (u > 1 || a == 0 || S.content.size) && (h = w, d.push(ah(S.mark(p.allowedMarks(S.marks)), u == 1 ? a : 0, u == l.childCount ? g : -1)));
    }
    let b = u == l.childCount;
    b || (g = -1), this.placed = Qr(this.placed, t, N.from(d)), this.frontier[t].match = h, b && g < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let S = 0, w = l; S < g; S++) {
      let x = w.lastChild;
      this.frontier.push({ type: x.type, match: x.contentMatchAt(x.childCount) }), w = x.content;
    }
    this.unplaced = b ? e == 0 ? z.empty : new z(Jr(o.content, e - 1, 1), e - 1, g < 0 ? o.openEnd : e - 1) : new z(Jr(o.content, e, u), o.openStart, o.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], t;
    if (!e.type.isTextblock || !bl(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, s = this.$to.after(r);
    for (; r > 1 && s == this.$to.end(--r); )
      ++s;
    return s;
  }
  findCloseLevel(e) {
    e: for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
      let { match: r, type: s } = this.frontier[t], i = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), o = bl(e, t, s, r, i);
      if (o) {
        for (let l = t - 1; l >= 0; l--) {
          let { match: a, type: u } = this.frontier[l], d = bl(e, l, u, a, !0);
          if (!d || d.childCount)
            continue e;
        }
        return { depth: t, fit: o, move: i ? e.doc.resolve(e.after(t + 1)) : e };
      }
    }
  }
  close(e) {
    let t = this.findCloseLevel(e);
    if (!t)
      return null;
    for (; this.depth > t.depth; )
      this.closeFrontierNode();
    t.fit.childCount && (this.placed = Qr(this.placed, t.depth, t.fit)), e = t.move;
    for (let r = t.depth + 1; r <= e.depth; r++) {
      let s = e.node(r), i = s.type.contentMatch.fillBefore(s.content, !0, e.index(r));
      this.openFrontierNode(s.type, s.attrs, i);
    }
    return e;
  }
  openFrontierNode(e, t = null, r) {
    let s = this.frontier[this.depth];
    s.match = s.match.matchType(e), this.placed = Qr(this.placed, this.depth, N.from(e.create(t, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let t = this.frontier.pop().match.fillBefore(N.empty, !0);
    t.childCount && (this.placed = Qr(this.placed, this.frontier.length, t));
  }
}
function Jr(n, e, t) {
  return e == 0 ? n.cutByIndex(t, n.childCount) : n.replaceChild(0, n.firstChild.copy(Jr(n.firstChild.content, e - 1, t)));
}
function Qr(n, e, t) {
  return e == 0 ? n.append(t) : n.replaceChild(n.childCount - 1, n.lastChild.copy(Qr(n.lastChild.content, e - 1, t)));
}
function yl(n, e) {
  for (let t = 0; t < e; t++)
    n = n.firstChild.content;
  return n;
}
function ah(n, e, t) {
  if (e <= 0)
    return n;
  let r = n.content;
  return e > 1 && (r = r.replaceChild(0, ah(r.firstChild, e - 1, r.childCount == 1 ? t - 1 : 0))), e > 0 && (r = n.type.contentMatch.fillBefore(r).append(r), t <= 0 && (r = r.append(n.type.contentMatch.matchFragment(r).fillBefore(N.empty, !0)))), n.copy(r);
}
function bl(n, e, t, r, s) {
  let i = n.node(e), o = s ? n.indexAfter(e) : n.index(e);
  if (o == i.childCount && !t.compatibleContent(i.type))
    return null;
  let l = r.fillBefore(i.content, !0, o);
  return l && !kS(t, i.content, o) ? l : null;
}
function kS(n, e, t) {
  for (let r = t; r < e.childCount; r++)
    if (!n.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function xS(n) {
  return n.spec.defining || n.spec.definingForContent;
}
function CS(n, e, t, r) {
  if (!r.size)
    return n.deleteRange(e, t);
  let s = n.doc.resolve(e), i = n.doc.resolve(t);
  if (lh(s, i, r))
    return n.step(new Le(e, t, r));
  let o = uh(s, i);
  o[o.length - 1] == 0 && o.pop();
  let l = -(s.depth + 1);
  o.unshift(l);
  for (let p = s.depth, g = s.pos - 1; p > 0; p--, g--) {
    let b = s.node(p).type.spec;
    if (b.defining || b.definingAsContext || b.isolating)
      break;
    o.indexOf(p) > -1 ? l = p : s.before(p) == g && o.splice(1, 0, -p);
  }
  let a = o.indexOf(l), u = [], d = r.openStart;
  for (let p = r.content, g = 0; ; g++) {
    let b = p.firstChild;
    if (u.push(b), g == r.openStart)
      break;
    p = b.content;
  }
  for (let p = d - 1; p >= 0; p--) {
    let g = u[p], b = xS(g.type);
    if (b && !g.sameMarkup(s.node(Math.abs(l) - 1)))
      d = p;
    else if (b || !g.type.isTextblock)
      break;
  }
  for (let p = r.openStart; p >= 0; p--) {
    let g = (p + d + 1) % (r.openStart + 1), b = u[g];
    if (b)
      for (let S = 0; S < o.length; S++) {
        let w = o[(S + a) % o.length], x = !0;
        w < 0 && (x = !1, w = -w);
        let v = s.node(w - 1), T = s.index(w - 1);
        if (v.canReplaceWith(T, T, b.type, b.marks))
          return n.replace(s.before(w), x ? i.after(w) : t, new z(ch(r.content, 0, r.openStart, g), g, r.openEnd));
      }
  }
  let h = n.steps.length;
  for (let p = o.length - 1; p >= 0 && (n.replace(e, t, r), !(n.steps.length > h)); p--) {
    let g = o[p];
    g < 0 || (e = s.before(g), t = i.after(g));
  }
}
function ch(n, e, t, r, s) {
  if (e < t) {
    let i = n.firstChild;
    n = n.replaceChild(0, i.copy(ch(i.content, e + 1, t, r, i)));
  }
  if (e > r) {
    let i = s.contentMatchAt(0), o = i.fillBefore(n).append(n);
    n = o.append(i.matchFragment(o).fillBefore(N.empty, !0));
  }
  return n;
}
function MS(n, e, t, r) {
  if (!r.isInline && e == t && n.doc.resolve(e).parent.content.size) {
    let s = SS(n.doc, e, r.type);
    s != null && (e = t = s);
  }
  n.replaceRange(e, t, new z(N.from(r), 0, 0));
}
function vS(n, e, t) {
  let r = n.doc.resolve(e), s = n.doc.resolve(t), i = uh(r, s);
  for (let o = 0; o < i.length; o++) {
    let l = i[o], a = o == i.length - 1;
    if (a && l == 0 || r.node(l).type.contentMatch.validEnd)
      return n.delete(r.start(l), s.end(l));
    if (l > 0 && (a || r.node(l - 1).canReplace(r.index(l - 1), s.indexAfter(l - 1))))
      return n.delete(r.before(l), s.after(l));
  }
  for (let o = 1; o <= r.depth && o <= s.depth; o++)
    if (e - r.start(o) == r.depth - o && t > r.end(o) && s.end(o) - t != s.depth - o && r.start(o - 1) == s.start(o - 1) && r.node(o - 1).canReplace(r.index(o - 1), s.index(o - 1)))
      return n.delete(r.before(o), t);
  n.delete(e, t);
}
function uh(n, e) {
  let t = [], r = Math.min(n.depth, e.depth);
  for (let s = r; s >= 0; s--) {
    let i = n.start(s);
    if (i < n.pos - (n.depth - s) || e.end(s) > e.pos + (e.depth - s) || n.node(s).type.spec.isolating || e.node(s).type.spec.isolating)
      break;
    (i == e.start(s) || s == n.depth && s == e.depth && n.parent.inlineContent && e.parent.inlineContent && s && e.start(s - 1) == i - 1) && t.push(s);
  }
  return t;
}
class vr extends et {
  /**
  Construct an attribute step.
  */
  constructor(e, t, r) {
    super(), this.pos = e, this.attr = t, this.value = r;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return Ae.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let i in t.attrs)
      r[i] = t.attrs[i];
    r[this.attr] = this.value;
    let s = t.type.create(r, null, t.marks);
    return Ae.fromReplace(e, this.pos, this.pos + 1, new z(N.from(s), 0, t.isLeaf ? 0 : 1));
  }
  getMap() {
    return ft.empty;
  }
  invert(e) {
    return new vr(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new vr(t.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number" || typeof t.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new vr(t.pos, t.attr, t.value);
  }
}
et.jsonID("attr", vr);
class gs extends et {
  /**
  Construct an attribute step.
  */
  constructor(e, t) {
    super(), this.attr = e, this.value = t;
  }
  apply(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let s in e.attrs)
      t[s] = e.attrs[s];
    t[this.attr] = this.value;
    let r = e.type.create(t, e.content, e.marks);
    return Ae.ok(r);
  }
  getMap() {
    return ft.empty;
  }
  invert(e) {
    return new gs(this.attr, e.attrs[this.attr]);
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
    return new gs(t.attr, t.value);
  }
}
et.jsonID("docAttr", gs);
let Dr = class extends Error {
};
Dr = function n(e) {
  let t = Error.call(this, e);
  return t.__proto__ = n.prototype, t;
};
Dr.prototype = Object.create(Error.prototype);
Dr.prototype.constructor = Dr;
Dr.prototype.name = "TransformError";
class qa {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new ms();
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
      throw new Dr(t.failed);
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
      let s = this.mapping.maps[r];
      r && (e = s.map(e, 1), t = s.map(t, -1)), s.forEach((i, o, l, a) => {
        e = Math.min(e, l), t = Math.max(t, a);
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
  replace(e, t = e, r = z.empty) {
    let s = bo(this.doc, e, t, r);
    return s && this.step(s), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, t, r) {
    return this.replace(e, t, new z(N.from(r), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, t) {
    return this.replace(e, t, z.empty);
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
    return CS(this, e, t, r), this;
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
    return MS(this, e, t, r), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, t) {
    return vS(this, e, t), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, t) {
    return cS(this, e, t), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, t = 1) {
    return bS(this, e, t), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, t) {
    return fS(this, e, t), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, t = e, r, s = null) {
    return hS(this, e, t, r, s), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, t, r = null, s) {
    return mS(this, e, t, r, s), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(e, t, r) {
    return this.step(new vr(e, t, r)), this;
  }
  /**
  Set a single attribute on the document to a new value.
  */
  setDocAttribute(e, t) {
    return this.step(new gs(e, t)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, t) {
    return this.step(new Cn(e, t)), this;
  }
  /**
  Remove a mark (or all marks of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, t) {
    let r = this.doc.nodeAt(e);
    if (!r)
      throw new RangeError("No node at position " + e);
    if (t instanceof de)
      t.isInSet(r.marks) && this.step(new er(e, t));
    else {
      let s = r.marks, i, o = [];
      for (; i = t.isInSet(s); )
        o.push(new er(e, i)), s = i.removeFromSet(s);
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
    return gS(this, e, t, r), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, t, r) {
    return oS(this, e, t, r), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, t, r) {
    return lS(this, e, t, r), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, t, r) {
    return ja(this, e, t, r), this;
  }
}
const Sl = /* @__PURE__ */ Object.create(null);
class U {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, t, r) {
    this.$anchor = e, this.$head = t, this.ranges = r || [new dh(e.min(t), e.max(t))];
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
  replace(e, t = z.empty) {
    let r = t.content.lastChild, s = null;
    for (let l = 0; l < t.openEnd; l++)
      s = r, r = r.lastChild;
    let i = e.steps.length, o = this.ranges;
    for (let l = 0; l < o.length; l++) {
      let { $from: a, $to: u } = o[l], d = e.mapping.slice(i);
      e.replaceRange(d.map(a.pos), d.map(u.pos), l ? z.empty : t), l == 0 && _u(e, i, (r ? r.isInline : s && s.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, t) {
    let r = e.steps.length, s = this.ranges;
    for (let i = 0; i < s.length; i++) {
      let { $from: o, $to: l } = s[i], a = e.mapping.slice(r), u = a.map(o.pos), d = a.map(l.pos);
      i ? e.deleteRange(u, d) : (e.replaceRangeWith(u, d, t), _u(e, r, t.isInline ? -1 : 1));
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
    let s = e.parent.inlineContent ? new V(e) : wr(e.node(0), e.parent, e.pos, e.index(), t, r);
    if (s)
      return s;
    for (let i = e.depth - 1; i >= 0; i--) {
      let o = t < 0 ? wr(e.node(0), e.node(i), e.before(i + 1), e.index(i), t, r) : wr(e.node(0), e.node(i), e.after(i + 1), e.index(i) + 1, t, r);
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
    return this.findFrom(e, t) || this.findFrom(e, -t) || new pt(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return wr(e, e, 0, 0, 1) || new pt(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return wr(e, e, e.content.size, e.childCount, -1) || new pt(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, t) {
    if (!t || !t.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = Sl[t.type];
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
    if (e in Sl)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return Sl[e] = t, t.prototype.jsonID = e, t;
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
U.prototype.visible = !0;
class dh {
  /**
  Create a range.
  */
  constructor(e, t) {
    this.$from = e, this.$to = t;
  }
}
let Ru = !1;
function Iu(n) {
  !Ru && !n.parent.inlineContent && (Ru = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + n.parent.type.name + ")"));
}
class V extends U {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, t = e) {
    Iu(e), Iu(t), super(e, t);
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
      return U.near(r);
    let s = e.resolve(t.map(this.anchor));
    return new V(s.parent.inlineContent ? s : r, r);
  }
  replace(e, t = z.empty) {
    if (super.replace(e, t), t == z.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof V && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new So(this.anchor, this.head);
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
    let s = e.resolve(t);
    return new this(s, r == t ? s : e.resolve(r));
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
    let s = e.pos - t.pos;
    if ((!r || s) && (r = s >= 0 ? 1 : -1), !t.parent.inlineContent) {
      let i = U.findFrom(t, r, !0) || U.findFrom(t, -r, !0);
      if (i)
        t = i.$head;
      else
        return U.near(t, r);
    }
    return e.parent.inlineContent || (s == 0 ? e = t : (e = (U.findFrom(e, -r, !0) || U.findFrom(e, r, !0)).$anchor, e.pos < t.pos != s < 0 && (e = t))), new V(e, t);
  }
}
U.jsonID("text", V);
class So {
  constructor(e, t) {
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new So(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return V.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class $ extends U {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let t = e.nodeAfter, r = e.node(0).resolve(e.pos + t.nodeSize);
    super(e, r), this.node = t;
  }
  map(e, t) {
    let { deleted: r, pos: s } = t.mapResult(this.anchor), i = e.resolve(s);
    return r ? U.near(i) : new $(i);
  }
  content() {
    return new z(N.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof $ && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new Ka(this.anchor);
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
U.jsonID("node", $);
class Ka {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: t, pos: r } = e.mapResult(this.anchor);
    return t ? new So(r, r) : new Ka(r);
  }
  resolve(e) {
    let t = e.resolve(this.anchor), r = t.nodeAfter;
    return r && $.isSelectable(r) ? new $(t) : U.near(t);
  }
}
class pt extends U {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, t = z.empty) {
    if (t == z.empty) {
      e.delete(0, e.doc.content.size);
      let r = U.atStart(e.doc);
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
    return new pt(e);
  }
  map(e) {
    return new pt(e);
  }
  eq(e) {
    return e instanceof pt;
  }
  getBookmark() {
    return TS;
  }
}
U.jsonID("all", pt);
const TS = {
  map() {
    return this;
  },
  resolve(n) {
    return new pt(n);
  }
};
function wr(n, e, t, r, s, i = !1) {
  if (e.inlineContent)
    return V.create(n, t);
  for (let o = r - (s > 0 ? 0 : 1); s > 0 ? o < e.childCount : o >= 0; o += s) {
    let l = e.child(o);
    if (l.isAtom) {
      if (!i && $.isSelectable(l))
        return $.create(n, t - (s < 0 ? l.nodeSize : 0));
    } else {
      let a = wr(n, l, t + s, s < 0 ? l.childCount : 0, s, i);
      if (a)
        return a;
    }
    t += l.nodeSize * s;
  }
  return null;
}
function _u(n, e, t) {
  let r = n.steps.length - 1;
  if (r < e)
    return;
  let s = n.steps[r];
  if (!(s instanceof Le || s instanceof ze))
    return;
  let i = n.mapping.maps[r], o;
  i.forEach((l, a, u, d) => {
    o == null && (o = d);
  }), n.setSelection(U.near(n.doc.resolve(o), t));
}
const Pu = 1, ei = 2, Lu = 4;
class OS extends qa {
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
    return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | Pu) & ~ei, this.storedMarks = null, this;
  }
  /**
  Whether the selection was explicitly updated by this transaction.
  */
  get selectionSet() {
    return (this.updated & Pu) > 0;
  }
  /**
  Set the current stored marks.
  */
  setStoredMarks(e) {
    return this.storedMarks = e, this.updated |= ei, this;
  }
  /**
  Make sure the current stored marks or, if that is null, the marks
  at the selection, match the given set of marks. Does nothing if
  this is already the case.
  */
  ensureMarks(e) {
    return de.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
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
    return (this.updated & ei) > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    super.addStep(e, t), this.updated = this.updated & ~ei, this.storedMarks = null;
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
    return t && (e = e.mark(this.storedMarks || (r.empty ? r.$from.marks() : r.$from.marksAcross(r.$to) || de.none))), r.replaceWith(this, e), this;
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
    let s = this.doc.type.schema;
    if (t == null)
      return e ? this.replaceSelectionWith(s.text(e), !0) : this.deleteSelection();
    {
      if (r == null && (r = t), !e)
        return this.deleteRange(t, r);
      let i = this.storedMarks;
      if (!i) {
        let o = this.doc.resolve(t);
        i = r == t ? o.marks() : o.marksAcross(this.doc.resolve(r));
      }
      return this.replaceRangeWith(t, r, s.text(e, i)), !this.selection.empty && this.selection.to == t + e.length && this.setSelection(U.near(this.selection.$to)), this;
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
    return this.updated |= Lu, this;
  }
  /**
  True when this transaction has had `scrollIntoView` called on it.
  */
  get scrolledIntoView() {
    return (this.updated & Lu) > 0;
  }
}
function zu(n, e) {
  return !e || !n ? n : n.bind(e);
}
class Zr {
  constructor(e, t, r) {
    this.name = e, this.init = zu(t.init, r), this.apply = zu(t.apply, r);
  }
}
const ES = [
  new Zr("doc", {
    init(n) {
      return n.doc || n.schema.topNodeType.createAndFill();
    },
    apply(n) {
      return n.doc;
    }
  }),
  new Zr("selection", {
    init(n, e) {
      return n.selection || U.atStart(e.doc);
    },
    apply(n) {
      return n.selection;
    }
  }),
  new Zr("storedMarks", {
    init(n) {
      return n.storedMarks || null;
    },
    apply(n, e, t, r) {
      return r.selection.$cursor ? n.storedMarks : null;
    }
  }),
  new Zr("scrollToSelection", {
    init() {
      return 0;
    },
    apply(n, e) {
      return n.scrolledIntoView ? e + 1 : e;
    }
  })
];
class wl {
  constructor(e, t) {
    this.schema = e, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = ES.slice(), t && t.forEach((r) => {
      if (this.pluginsByKey[r.key])
        throw new RangeError("Adding different instances of a keyed plugin (" + r.key + ")");
      this.plugins.push(r), this.pluginsByKey[r.key] = r, r.spec.state && this.fields.push(new Zr(r.key, r.spec.state, r));
    });
  }
}
class Cr {
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
        let s = this.config.plugins[r];
        if (s.spec.filterTransaction && !s.spec.filterTransaction.call(s, e, this))
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
    let t = [e], r = this.applyInner(e), s = null;
    for (; ; ) {
      let i = !1;
      for (let o = 0; o < this.config.plugins.length; o++) {
        let l = this.config.plugins[o];
        if (l.spec.appendTransaction) {
          let a = s ? s[o].n : 0, u = s ? s[o].state : this, d = a < t.length && l.spec.appendTransaction.call(l, a ? t.slice(a) : t, u, r);
          if (d && r.filterTransaction(d, o)) {
            if (d.setMeta("appendedTransaction", e), !s) {
              s = [];
              for (let h = 0; h < this.config.plugins.length; h++)
                s.push(h < o ? { state: r, n: t.length } : { state: this, n: 0 });
            }
            t.push(d), r = r.applyInner(d), i = !0;
          }
          s && (s[o] = { state: r, n: t.length });
        }
      }
      if (!i)
        return { state: r, transactions: t };
    }
  }
  /**
  @internal
  */
  applyInner(e) {
    if (!e.before.eq(this.doc))
      throw new RangeError("Applying a mismatched transaction");
    let t = new Cr(this.config), r = this.config.fields;
    for (let s = 0; s < r.length; s++) {
      let i = r[s];
      t[i.name] = i.apply(e, this[i.name], this, t);
    }
    return t;
  }
  /**
  Accessor that constructs and returns a new [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
  */
  get tr() {
    return new OS(this);
  }
  /**
  Create a new state.
  */
  static create(e) {
    let t = new wl(e.doc ? e.doc.type.schema : e.schema, e.plugins), r = new Cr(t);
    for (let s = 0; s < t.fields.length; s++)
      r[t.fields[s].name] = t.fields[s].init(e, r);
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
    let t = new wl(this.schema, e.plugins), r = t.fields, s = new Cr(t);
    for (let i = 0; i < r.length; i++) {
      let o = r[i].name;
      s[o] = this.hasOwnProperty(o) ? this[o] : r[i].init(e, s);
    }
    return s;
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
        let s = e[r], i = s.spec.state;
        i && i.toJSON && (t[r] = i.toJSON.call(s, this[s.key]));
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
    let s = new wl(e.schema, e.plugins), i = new Cr(s);
    return s.fields.forEach((o) => {
      if (o.name == "doc")
        i.doc = vn.fromJSON(e.schema, t.doc);
      else if (o.name == "selection")
        i.selection = U.fromJSON(i.doc, t.selection);
      else if (o.name == "storedMarks")
        t.storedMarks && (i.storedMarks = t.storedMarks.map(e.schema.markFromJSON));
      else {
        if (r)
          for (let l in r) {
            let a = r[l], u = a.spec.state;
            if (a.key == o.name && u && u.fromJSON && Object.prototype.hasOwnProperty.call(t, l)) {
              i[o.name] = u.fromJSON.call(a, e, t[l], i);
              return;
            }
          }
        i[o.name] = o.init(e, i);
      }
    }), i;
  }
}
function fh(n, e, t) {
  for (let r in n) {
    let s = n[r];
    s instanceof Function ? s = s.bind(e) : r == "handleDOMEvents" && (s = fh(s, e, {})), t[r] = s;
  }
  return t;
}
class Ne {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && fh(e.props, this, this.props), this.key = e.key ? e.key.key : hh("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const kl = /* @__PURE__ */ Object.create(null);
function hh(n) {
  return n in kl ? n + "$" + ++kl[n] : (kl[n] = 0, n + "$");
}
class Ue {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = hh(e);
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
const $e = function(n) {
  for (var e = 0; ; e++)
    if (n = n.previousSibling, !n)
      return e;
}, Nr = function(n) {
  let e = n.assignedSlot || n.parentNode;
  return e && e.nodeType == 11 ? e.host : e;
};
let sa = null;
const nn = function(n, e, t) {
  let r = sa || (sa = document.createRange());
  return r.setEnd(n, t ?? n.nodeValue.length), r.setStart(n, e || 0), r;
}, AS = function() {
  sa = null;
}, tr = function(n, e, t, r) {
  return t && (Fu(n, e, t, r, -1) || Fu(n, e, t, r, 1));
}, DS = /^(img|br|input|textarea|hr)$/i;
function Fu(n, e, t, r, s) {
  for (var i; ; ) {
    if (n == t && e == r)
      return !0;
    if (e == (s < 0 ? 0 : St(n))) {
      let o = n.parentNode;
      if (!o || o.nodeType != 1 || Es(n) || DS.test(n.nodeName) || n.contentEditable == "false")
        return !1;
      e = $e(n) + (s < 0 ? 0 : 1), n = o;
    } else if (n.nodeType == 1) {
      let o = n.childNodes[e + (s < 0 ? -1 : 0)];
      if (o.nodeType == 1 && o.contentEditable == "false")
        if (!((i = o.pmViewDesc) === null || i === void 0) && i.ignoreForSelection)
          e += s;
        else
          return !1;
      else
        n = o, e = s < 0 ? St(n) : 0;
    } else
      return !1;
  }
}
function St(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function NS(n, e) {
  for (; ; ) {
    if (n.nodeType == 3 && e)
      return n;
    if (n.nodeType == 1 && e > 0) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[e - 1], e = St(n);
    } else if (n.parentNode && !Es(n))
      e = $e(n), n = n.parentNode;
    else
      return null;
  }
}
function RS(n, e) {
  for (; ; ) {
    if (n.nodeType == 3 && e < n.nodeValue.length)
      return n;
    if (n.nodeType == 1 && e < n.childNodes.length) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[e], e = 0;
    } else if (n.parentNode && !Es(n))
      e = $e(n) + 1, n = n.parentNode;
    else
      return null;
  }
}
function IS(n, e, t) {
  for (let r = e == 0, s = e == St(n); r || s; ) {
    if (n == t)
      return !0;
    let i = $e(n);
    if (n = n.parentNode, !n)
      return !1;
    r = r && i == 0, s = s && i == St(n);
  }
}
function Es(n) {
  let e;
  for (let t = n; t && !(e = t.pmViewDesc); t = t.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == n || e.contentDOM == n);
}
const wo = function(n) {
  return n.focusNode && tr(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset);
};
function Hn(n, e) {
  let t = document.createEvent("Event");
  return t.initEvent("keydown", !0, !0), t.keyCode = n, t.key = t.code = e, t;
}
function _S(n) {
  let e = n.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function PS(n, e, t) {
  if (n.caretPositionFromPoint)
    try {
      let r = n.caretPositionFromPoint(e, t);
      if (r)
        return { node: r.offsetNode, offset: Math.min(St(r.offsetNode), r.offset) };
    } catch {
    }
  if (n.caretRangeFromPoint) {
    let r = n.caretRangeFromPoint(e, t);
    if (r)
      return { node: r.startContainer, offset: Math.min(St(r.startContainer), r.startOffset) };
  }
}
const Ft = typeof navigator < "u" ? navigator : null, Bu = typeof document < "u" ? document : null, In = Ft && Ft.userAgent || "", ia = /Edge\/(\d+)/.exec(In), ph = /MSIE \d/.exec(In), oa = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(In), ut = !!(ph || oa || ia), On = ph ? document.documentMode : oa ? +oa[1] : ia ? +ia[1] : 0, wt = !ut && /gecko\/(\d+)/i.test(In);
wt && +(/Firefox\/(\d+)/.exec(In) || [0, 0])[1];
const la = !ut && /Chrome\/(\d+)/.exec(In), je = !!la, mh = la ? +la[1] : 0, Ze = !ut && !!Ft && /Apple Computer/.test(Ft.vendor), Rr = Ze && (/Mobile\/\w+/.test(In) || !!Ft && Ft.maxTouchPoints > 2), bt = Rr || (Ft ? /Mac/.test(Ft.platform) : !1), gh = Ft ? /Win/.test(Ft.platform) : !1, rn = /Android \d/.test(In), As = !!Bu && "webkitFontSmoothing" in Bu.documentElement.style, LS = As ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function zS(n) {
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
function Qt(n, e) {
  return typeof n == "number" ? n : n[e];
}
function FS(n) {
  let e = n.getBoundingClientRect(), t = e.width / n.offsetWidth || 1, r = e.height / n.offsetHeight || 1;
  return {
    left: e.left,
    right: e.left + n.clientWidth * t,
    top: e.top,
    bottom: e.top + n.clientHeight * r
  };
}
function Hu(n, e, t) {
  let r = n.someProp("scrollThreshold") || 0, s = n.someProp("scrollMargin") || 5, i = n.dom.ownerDocument;
  for (let o = t || n.dom; o; ) {
    if (o.nodeType != 1) {
      o = Nr(o);
      continue;
    }
    let l = o, a = l == i.body, u = a ? zS(i) : FS(l), d = 0, h = 0;
    if (e.top < u.top + Qt(r, "top") ? h = -(u.top - e.top + Qt(s, "top")) : e.bottom > u.bottom - Qt(r, "bottom") && (h = e.bottom - e.top > u.bottom - u.top ? e.top + Qt(s, "top") - u.top : e.bottom - u.bottom + Qt(s, "bottom")), e.left < u.left + Qt(r, "left") ? d = -(u.left - e.left + Qt(s, "left")) : e.right > u.right - Qt(r, "right") && (d = e.right - u.right + Qt(s, "right")), d || h)
      if (a)
        i.defaultView.scrollBy(d, h);
      else {
        let g = l.scrollLeft, b = l.scrollTop;
        h && (l.scrollTop += h), d && (l.scrollLeft += d);
        let S = l.scrollLeft - g, w = l.scrollTop - b;
        e = { left: e.left - S, top: e.top - w, right: e.right - S, bottom: e.bottom - w };
      }
    let p = a ? "fixed" : getComputedStyle(o).position;
    if (/^(fixed|sticky)$/.test(p))
      break;
    o = p == "absolute" ? o.offsetParent : Nr(o);
  }
}
function BS(n) {
  let e = n.dom.getBoundingClientRect(), t = Math.max(0, e.top), r, s;
  for (let i = (e.left + e.right) / 2, o = t + 1; o < Math.min(innerHeight, e.bottom); o += 5) {
    let l = n.root.elementFromPoint(i, o);
    if (!l || l == n.dom || !n.dom.contains(l))
      continue;
    let a = l.getBoundingClientRect();
    if (a.top >= t - 20) {
      r = l, s = a.top;
      break;
    }
  }
  return { refDOM: r, refTop: s, stack: yh(n.dom) };
}
function yh(n) {
  let e = [], t = n.ownerDocument;
  for (let r = n; r && (e.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), n != t); r = Nr(r))
    ;
  return e;
}
function HS({ refDOM: n, refTop: e, stack: t }) {
  let r = n ? n.getBoundingClientRect().top : 0;
  bh(t, r == 0 ? 0 : r - e);
}
function bh(n, e) {
  for (let t = 0; t < n.length; t++) {
    let { dom: r, top: s, left: i } = n[t];
    r.scrollTop != s + e && (r.scrollTop = s + e), r.scrollLeft != i && (r.scrollLeft = i);
  }
}
let br = null;
function WS(n) {
  if (n.setActive)
    return n.setActive();
  if (br)
    return n.focus(br);
  let e = yh(n);
  n.focus(br == null ? {
    get preventScroll() {
      return br = { preventScroll: !0 }, !0;
    }
  } : void 0), br || (br = !1, bh(e, 0));
}
function Sh(n, e) {
  let t, r = 2e8, s, i = 0, o = e.top, l = e.top, a, u;
  for (let d = n.firstChild, h = 0; d; d = d.nextSibling, h++) {
    let p;
    if (d.nodeType == 1)
      p = d.getClientRects();
    else if (d.nodeType == 3)
      p = nn(d).getClientRects();
    else
      continue;
    for (let g = 0; g < p.length; g++) {
      let b = p[g];
      if (b.top <= o && b.bottom >= l) {
        o = Math.max(b.bottom, o), l = Math.min(b.top, l);
        let S = b.left > e.left ? b.left - e.left : b.right < e.left ? e.left - b.right : 0;
        if (S < r) {
          t = d, r = S, s = S && t.nodeType == 3 ? {
            left: b.right < e.left ? b.right : b.left,
            top: e.top
          } : e, d.nodeType == 1 && S && (i = h + (e.left >= (b.left + b.right) / 2 ? 1 : 0));
          continue;
        }
      } else b.top > e.top && !a && b.left <= e.left && b.right >= e.left && (a = d, u = { left: Math.max(b.left, Math.min(b.right, e.left)), top: b.top });
      !t && (e.left >= b.right && e.top >= b.top || e.left >= b.left && e.top >= b.bottom) && (i = h + 1);
    }
  }
  return !t && a && (t = a, s = u, r = 0), t && t.nodeType == 3 ? $S(t, s) : !t || r && t.nodeType == 1 ? { node: n, offset: i } : Sh(t, s);
}
function $S(n, e) {
  let t = n.nodeValue.length, r = document.createRange(), s;
  for (let i = 0; i < t; i++) {
    r.setEnd(n, i + 1), r.setStart(n, i);
    let o = pn(r, 1);
    if (o.top != o.bottom && Ga(e, o)) {
      s = { node: n, offset: i + (e.left >= (o.left + o.right) / 2 ? 1 : 0) };
      break;
    }
  }
  return r.detach(), s || { node: n, offset: 0 };
}
function Ga(n, e) {
  return n.left >= e.left - 1 && n.left <= e.right + 1 && n.top >= e.top - 1 && n.top <= e.bottom + 1;
}
function VS(n, e) {
  let t = n.parentNode;
  return t && /^li$/i.test(t.nodeName) && e.left < n.getBoundingClientRect().left ? t : n;
}
function YS(n, e, t) {
  let { node: r, offset: s } = Sh(e, t), i = -1;
  if (r.nodeType == 1 && !r.firstChild) {
    let o = r.getBoundingClientRect();
    i = o.left != o.right && t.left > (o.left + o.right) / 2 ? 1 : -1;
  }
  return n.docView.posFromDOM(r, s, i);
}
function jS(n, e, t, r) {
  let s = -1;
  for (let i = e, o = !1; i != n.dom; ) {
    let l = n.docView.nearestDesc(i, !0), a;
    if (!l)
      return null;
    if (l.dom.nodeType == 1 && (l.node.isBlock && l.parent || !l.contentDOM) && // Ignore elements with zero-size bounding rectangles
    ((a = l.dom.getBoundingClientRect()).width || a.height) && (l.node.isBlock && l.parent && !/^T(R|BODY|HEAD|FOOT)$/.test(l.dom.nodeName) && (!o && a.left > r.left || a.top > r.top ? s = l.posBefore : (!o && a.right < r.left || a.bottom < r.top) && (s = l.posAfter), o = !0), !l.contentDOM && s < 0 && !l.node.isText))
      return (l.node.isBlock ? r.top < (a.top + a.bottom) / 2 : r.left < (a.left + a.right) / 2) ? l.posBefore : l.posAfter;
    i = l.dom.parentNode;
  }
  return s > -1 ? s : n.docView.posFromDOM(e, t, -1);
}
function wh(n, e, t) {
  let r = n.childNodes.length;
  if (r && t.top < t.bottom)
    for (let s = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - t.top) / (t.bottom - t.top)) - 2)), i = s; ; ) {
      let o = n.childNodes[i];
      if (o.nodeType == 1) {
        let l = o.getClientRects();
        for (let a = 0; a < l.length; a++) {
          let u = l[a];
          if (Ga(e, u))
            return wh(o, e, u);
        }
      }
      if ((i = (i + 1) % r) == s)
        break;
    }
  return n;
}
function US(n, e) {
  let t = n.dom.ownerDocument, r, s = 0, i = PS(t, e.left, e.top);
  i && ({ node: r, offset: s } = i);
  let o = (n.root.elementFromPoint ? n.root : t).elementFromPoint(e.left, e.top), l;
  if (!o || !n.dom.contains(o.nodeType != 1 ? o.parentNode : o)) {
    let u = n.dom.getBoundingClientRect();
    if (!Ga(e, u) || (o = wh(n.dom, e, u), !o))
      return null;
  }
  if (Ze)
    for (let u = o; r && u; u = Nr(u))
      u.draggable && (r = void 0);
  if (o = VS(o, e), r) {
    if (wt && r.nodeType == 1 && (s = Math.min(s, r.childNodes.length), s < r.childNodes.length)) {
      let d = r.childNodes[s], h;
      d.nodeName == "IMG" && (h = d.getBoundingClientRect()).right <= e.left && h.bottom > e.top && s++;
    }
    let u;
    As && s && r.nodeType == 1 && (u = r.childNodes[s - 1]).nodeType == 1 && u.contentEditable == "false" && u.getBoundingClientRect().top >= e.top && s--, r == n.dom && s == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && e.top > r.lastChild.getBoundingClientRect().bottom ? l = n.state.doc.content.size : (s == 0 || r.nodeType != 1 || r.childNodes[s - 1].nodeName != "BR") && (l = jS(n, r, s, e));
  }
  l == null && (l = YS(n, o, e));
  let a = n.docView.nearestDesc(o, !0);
  return { pos: l, inside: a ? a.posAtStart - a.border : -1 };
}
function Wu(n) {
  return n.top < n.bottom || n.left < n.right;
}
function pn(n, e) {
  let t = n.getClientRects();
  if (t.length) {
    let r = t[e < 0 ? 0 : t.length - 1];
    if (Wu(r))
      return r;
  }
  return Array.prototype.find.call(t, Wu) || n.getBoundingClientRect();
}
const qS = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function kh(n, e, t) {
  let { node: r, offset: s, atom: i } = n.docView.domFromPos(e, t < 0 ? -1 : 1), o = As || wt;
  if (r.nodeType == 3)
    if (o && (qS.test(r.nodeValue) || (t < 0 ? !s : s == r.nodeValue.length))) {
      let a = pn(nn(r, s, s), t);
      if (wt && s && /\s/.test(r.nodeValue[s - 1]) && s < r.nodeValue.length) {
        let u = pn(nn(r, s - 1, s - 1), -1);
        if (u.top == a.top) {
          let d = pn(nn(r, s, s + 1), -1);
          if (d.top != a.top)
            return qr(d, d.left < u.left);
        }
      }
      return a;
    } else {
      let a = s, u = s, d = t < 0 ? 1 : -1;
      return t < 0 && !s ? (u++, d = -1) : t >= 0 && s == r.nodeValue.length ? (a--, d = 1) : t < 0 ? a-- : u++, qr(pn(nn(r, a, u), d), d < 0);
    }
  if (!n.state.doc.resolve(e - (i || 0)).parent.inlineContent) {
    if (i == null && s && (t < 0 || s == St(r))) {
      let a = r.childNodes[s - 1];
      if (a.nodeType == 1)
        return xl(a.getBoundingClientRect(), !1);
    }
    if (i == null && s < St(r)) {
      let a = r.childNodes[s];
      if (a.nodeType == 1)
        return xl(a.getBoundingClientRect(), !0);
    }
    return xl(r.getBoundingClientRect(), t >= 0);
  }
  if (i == null && s && (t < 0 || s == St(r))) {
    let a = r.childNodes[s - 1], u = a.nodeType == 3 ? nn(a, St(a) - (o ? 0 : 1)) : a.nodeType == 1 && (a.nodeName != "BR" || !a.nextSibling) ? a : null;
    if (u)
      return qr(pn(u, 1), !1);
  }
  if (i == null && s < St(r)) {
    let a = r.childNodes[s];
    for (; a.pmViewDesc && a.pmViewDesc.ignoreForCoords; )
      a = a.nextSibling;
    let u = a ? a.nodeType == 3 ? nn(a, 0, o ? 0 : 1) : a.nodeType == 1 ? a : null : null;
    if (u)
      return qr(pn(u, -1), !0);
  }
  return qr(pn(r.nodeType == 3 ? nn(r) : r, -t), t >= 0);
}
function qr(n, e) {
  if (n.width == 0)
    return n;
  let t = e ? n.left : n.right;
  return { top: n.top, bottom: n.bottom, left: t, right: t };
}
function xl(n, e) {
  if (n.height == 0)
    return n;
  let t = e ? n.top : n.bottom;
  return { top: t, bottom: t, left: n.left, right: n.right };
}
function xh(n, e, t) {
  let r = n.state, s = n.root.activeElement;
  r != e && n.updateState(e), s != n.dom && n.focus();
  try {
    return t();
  } finally {
    r != e && n.updateState(r), s != n.dom && s && s.focus();
  }
}
function KS(n, e, t) {
  let r = e.selection, s = t == "up" ? r.$from : r.$to;
  return xh(n, e, () => {
    let { node: i } = n.docView.domFromPos(s.pos, t == "up" ? -1 : 1);
    for (; ; ) {
      let l = n.docView.nearestDesc(i, !0);
      if (!l)
        break;
      if (l.node.isBlock) {
        i = l.contentDOM || l.dom;
        break;
      }
      i = l.dom.parentNode;
    }
    let o = kh(n, s.pos, 1);
    for (let l = i.firstChild; l; l = l.nextSibling) {
      let a;
      if (l.nodeType == 1)
        a = l.getClientRects();
      else if (l.nodeType == 3)
        a = nn(l, 0, l.nodeValue.length).getClientRects();
      else
        continue;
      for (let u = 0; u < a.length; u++) {
        let d = a[u];
        if (d.bottom > d.top + 1 && (t == "up" ? o.top - d.top > (d.bottom - o.top) * 2 : d.bottom - o.bottom > (o.bottom - d.top) * 2))
          return !1;
      }
    }
    return !0;
  });
}
const GS = /[\u0590-\u08ac]/;
function JS(n, e, t) {
  let { $head: r } = e.selection;
  if (!r.parent.isTextblock)
    return !1;
  let s = r.parentOffset, i = !s, o = s == r.parent.content.size, l = n.domSelection();
  return l ? !GS.test(r.parent.textContent) || !l.modify ? t == "left" || t == "backward" ? i : o : xh(n, e, () => {
    let { focusNode: a, focusOffset: u, anchorNode: d, anchorOffset: h } = n.domSelectionRange(), p = l.caretBidiLevel;
    l.modify("move", t, "character");
    let g = r.depth ? n.docView.domAfterPos(r.before()) : n.dom, { focusNode: b, focusOffset: S } = n.domSelectionRange(), w = b && !g.contains(b.nodeType == 1 ? b : b.parentNode) || a == b && u == S;
    try {
      l.collapse(d, h), a && (a != d || u != h) && l.extend && l.extend(a, u);
    } catch {
    }
    return p != null && (l.caretBidiLevel = p), w;
  }) : r.pos == r.start() || r.pos == r.end();
}
let $u = null, Vu = null, Yu = !1;
function QS(n, e, t) {
  return $u == e && Vu == t ? Yu : ($u = e, Vu = t, Yu = t == "up" || t == "down" ? KS(n, e, t) : JS(n, e, t));
}
const kt = 0, ju = 1, $n = 2, Bt = 3;
class Ds {
  constructor(e, t, r, s) {
    this.parent = e, this.children = t, this.dom = r, this.contentDOM = s, this.dirty = kt, r.pmViewDesc = this;
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
      let s = this.children[t];
      if (s == e)
        return r;
      r += s.size;
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
        let i, o;
        if (e == this.contentDOM)
          i = e.childNodes[t - 1];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          i = e.previousSibling;
        }
        for (; i && !((o = i.pmViewDesc) && o.parent == this); )
          i = i.previousSibling;
        return i ? this.posBeforeChild(o) + o.size : this.posAtStart;
      } else {
        let i, o;
        if (e == this.contentDOM)
          i = e.childNodes[t];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          i = e.nextSibling;
        }
        for (; i && !((o = i.pmViewDesc) && o.parent == this); )
          i = i.nextSibling;
        return i ? this.posBeforeChild(o) : this.posAtEnd;
      }
    let s;
    if (e == this.dom && this.contentDOM)
      s = t > $e(this.contentDOM);
    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
      s = e.compareDocumentPosition(this.contentDOM) & 2;
    else if (this.dom.firstChild) {
      if (t == 0)
        for (let i = e; ; i = i.parentNode) {
          if (i == this.dom) {
            s = !1;
            break;
          }
          if (i.previousSibling)
            break;
        }
      if (s == null && t == e.childNodes.length)
        for (let i = e; ; i = i.parentNode) {
          if (i == this.dom) {
            s = !0;
            break;
          }
          if (i.nextSibling)
            break;
        }
    }
    return s ?? r > 0 ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(e, t = !1) {
    for (let r = !0, s = e; s; s = s.parentNode) {
      let i = this.getDesc(s), o;
      if (i && (!t || i.node))
        if (r && (o = i.nodeDOM) && !(o.nodeType == 1 ? o.contains(e.nodeType == 1 ? e : e.parentNode) : o == e))
          r = !1;
        else
          return i;
    }
  }
  getDesc(e) {
    let t = e.pmViewDesc;
    for (let r = t; r; r = r.parent)
      if (r == this)
        return t;
  }
  posFromDOM(e, t, r) {
    for (let s = e; s; s = s.parentNode) {
      let i = this.getDesc(s);
      if (i)
        return i.localPosFromDOM(e, t, r);
    }
    return -1;
  }
  // Find the desc for the node after the given pos, if any. (When a
  // parent node overrode rendering, there might not be one.)
  descAt(e) {
    for (let t = 0, r = 0; t < this.children.length; t++) {
      let s = this.children[t], i = r + s.size;
      if (r == e && i != r) {
        for (; !s.border && s.children.length; )
          for (let o = 0; o < s.children.length; o++) {
            let l = s.children[o];
            if (l.size) {
              s = l;
              break;
            }
          }
        return s;
      }
      if (e < i)
        return s.descAt(e - r - s.border);
      r = i;
    }
  }
  domFromPos(e, t) {
    if (!this.contentDOM)
      return { node: this.dom, offset: 0, atom: e + 1 };
    let r = 0, s = 0;
    for (let i = 0; r < this.children.length; r++) {
      let o = this.children[r], l = i + o.size;
      if (l > e || o instanceof Mh) {
        s = e - i;
        break;
      }
      i = l;
    }
    if (s)
      return this.children[r].domFromPos(s - this.children[r].border, t);
    for (let i; r && !(i = this.children[r - 1]).size && i instanceof Ch && i.side >= 0; r--)
      ;
    if (t <= 0) {
      let i, o = !0;
      for (; i = r ? this.children[r - 1] : null, !(!i || i.dom.parentNode == this.contentDOM); r--, o = !1)
        ;
      return i && t && o && !i.border && !i.domAtom ? i.domFromPos(i.size, t) : { node: this.contentDOM, offset: i ? $e(i.dom) + 1 : 0 };
    } else {
      let i, o = !0;
      for (; i = r < this.children.length ? this.children[r] : null, !(!i || i.dom.parentNode == this.contentDOM); r++, o = !1)
        ;
      return i && o && !i.border && !i.domAtom ? i.domFromPos(0, t) : { node: this.contentDOM, offset: i ? $e(i.dom) : this.contentDOM.childNodes.length };
    }
  }
  // Used to find a DOM range in a single parent for a given changed
  // range.
  parseRange(e, t, r = 0) {
    if (this.children.length == 0)
      return { node: this.contentDOM, from: e, to: t, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
    let s = -1, i = -1;
    for (let o = r, l = 0; ; l++) {
      let a = this.children[l], u = o + a.size;
      if (s == -1 && e <= u) {
        let d = o + a.border;
        if (e >= d && t <= u - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM))
          return a.parseRange(e, t, d);
        e = o;
        for (let h = l; h > 0; h--) {
          let p = this.children[h - 1];
          if (p.size && p.dom.parentNode == this.contentDOM && !p.emptyChildAt(1)) {
            s = $e(p.dom) + 1;
            break;
          }
          e -= p.size;
        }
        s == -1 && (s = 0);
      }
      if (s > -1 && (u > t || l == this.children.length - 1)) {
        t = u;
        for (let d = l + 1; d < this.children.length; d++) {
          let h = this.children[d];
          if (h.size && h.dom.parentNode == this.contentDOM && !h.emptyChildAt(-1)) {
            i = $e(h.dom);
            break;
          }
          t += h.size;
        }
        i == -1 && (i = this.contentDOM.childNodes.length);
        break;
      }
      o = u;
    }
    return { node: this.contentDOM, from: e, to: t, fromOffset: s, toOffset: i };
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
  setSelection(e, t, r, s = !1) {
    let i = Math.min(e, t), o = Math.max(e, t);
    for (let g = 0, b = 0; g < this.children.length; g++) {
      let S = this.children[g], w = b + S.size;
      if (i > b && o < w)
        return S.setSelection(e - b - S.border, t - b - S.border, r, s);
      b = w;
    }
    let l = this.domFromPos(e, e ? -1 : 1), a = t == e ? l : this.domFromPos(t, t ? -1 : 1), u = r.root.getSelection(), d = r.domSelectionRange(), h = !1;
    if ((wt || Ze) && e == t) {
      let { node: g, offset: b } = l;
      if (g.nodeType == 3) {
        if (h = !!(b && g.nodeValue[b - 1] == `
`), h && b == g.nodeValue.length)
          for (let S = g, w; S; S = S.parentNode) {
            if (w = S.nextSibling) {
              w.nodeName == "BR" && (l = a = { node: w.parentNode, offset: $e(w) + 1 });
              break;
            }
            let x = S.pmViewDesc;
            if (x && x.node && x.node.isBlock)
              break;
          }
      } else {
        let S = g.childNodes[b - 1];
        h = S && (S.nodeName == "BR" || S.contentEditable == "false");
      }
    }
    if (wt && d.focusNode && d.focusNode != a.node && d.focusNode.nodeType == 1) {
      let g = d.focusNode.childNodes[d.focusOffset];
      g && g.contentEditable == "false" && (s = !0);
    }
    if (!(s || h && Ze) && tr(l.node, l.offset, d.anchorNode, d.anchorOffset) && tr(a.node, a.offset, d.focusNode, d.focusOffset))
      return;
    let p = !1;
    if ((u.extend || e == t) && !(h && wt)) {
      u.collapse(l.node, l.offset);
      try {
        e != t && u.extend(a.node, a.offset), p = !0;
      } catch {
      }
    }
    if (!p) {
      if (e > t) {
        let b = l;
        l = a, a = b;
      }
      let g = document.createRange();
      g.setEnd(a.node, a.offset), g.setStart(l.node, l.offset), u.removeAllRanges(), u.addRange(g);
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
    for (let r = 0, s = 0; s < this.children.length; s++) {
      let i = this.children[s], o = r + i.size;
      if (r == o ? e <= o && t >= r : e < o && t > r) {
        let l = r + i.border, a = o - i.border;
        if (e >= l && t <= a) {
          this.dirty = e == r || t == o ? $n : ju, e == l && t == a && (i.contentLost || i.dom.parentNode != this.contentDOM) ? i.dirty = Bt : i.markDirty(e - l, t - l);
          return;
        } else
          i.dirty = i.dom == i.contentDOM && i.dom.parentNode == this.contentDOM && !i.children.length ? $n : Bt;
      }
      r = o;
    }
    this.dirty = $n;
  }
  markParentsDirty() {
    let e = 1;
    for (let t = this.parent; t; t = t.parent, e++) {
      let r = e == 1 ? $n : ju;
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
class Ch extends Ds {
  constructor(e, t, r, s) {
    let i, o = t.type.toDOM;
    if (typeof o == "function" && (o = o(r, () => {
      if (!i)
        return s;
      if (i.parent)
        return i.parent.posBeforeChild(i);
    })), !t.type.spec.raw) {
      if (o.nodeType != 1) {
        let l = document.createElement("span");
        l.appendChild(o), o = l;
      }
      o.contentEditable = "false", o.classList.add("ProseMirror-widget");
    }
    super(e, [], o, null), this.widget = t, this.widget = t, i = this;
  }
  matchesWidget(e) {
    return this.dirty == kt && e.type.eq(this.widget.type);
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
class ZS extends Ds {
  constructor(e, t, r, s) {
    super(e, [], t, null), this.textDOM = r, this.text = s;
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
class nr extends Ds {
  constructor(e, t, r, s, i) {
    super(e, [], r, s), this.mark = t, this.spec = i;
  }
  static create(e, t, r, s) {
    let i = s.nodeViews[t.type.name], o = i && i(t, s, r);
    return (!o || !o.dom) && (o = lr.renderSpec(document, t.type.spec.toDOM(t, r), null, t.attrs)), new nr(e, t, o.dom, o.contentDOM || o.dom, o);
  }
  parseRule() {
    return this.dirty & Bt || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
  }
  matchesMark(e) {
    return this.dirty != Bt && this.mark.eq(e);
  }
  markDirty(e, t) {
    if (super.markDirty(e, t), this.dirty != kt) {
      let r = this.parent;
      for (; !r.node; )
        r = r.parent;
      r.dirty < this.dirty && (r.dirty = this.dirty), this.dirty = kt;
    }
  }
  slice(e, t, r) {
    let s = nr.create(this.parent, this.mark, !0, r), i = this.children, o = this.size;
    t < o && (i = ca(i, t, o, r)), e > 0 && (i = ca(i, 0, e, r));
    for (let l = 0; l < i.length; l++)
      i[l].parent = s;
    return s.children = i, s;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
}
class En extends Ds {
  constructor(e, t, r, s, i, o, l, a, u) {
    super(e, [], i, o), this.node = t, this.outerDeco = r, this.innerDeco = s, this.nodeDOM = l;
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
  static create(e, t, r, s, i, o) {
    let l = i.nodeViews[t.type.name], a, u = l && l(t, i, () => {
      if (!a)
        return o;
      if (a.parent)
        return a.parent.posBeforeChild(a);
    }, r, s), d = u && u.dom, h = u && u.contentDOM;
    if (t.isText) {
      if (!d)
        d = document.createTextNode(t.text);
      else if (d.nodeType != 3)
        throw new RangeError("Text must be rendered as a DOM text node");
    } else d || ({ dom: d, contentDOM: h } = lr.renderSpec(document, t.type.spec.toDOM(t), null, t.attrs));
    !h && !t.isText && d.nodeName != "BR" && (d.hasAttribute("contenteditable") || (d.contentEditable = "false"), t.type.spec.draggable && (d.draggable = !0));
    let p = d;
    return d = Oh(d, r, t), u ? a = new XS(e, t, r, s, d, h || null, p, u, i, o + 1) : t.isText ? new ko(e, t, r, s, d, p, i) : new En(e, t, r, s, d, h || null, p, i, o + 1);
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
      e.contentElement || (e.getContent = () => N.empty);
    }
    return e;
  }
  matchesNode(e, t, r) {
    return this.dirty == kt && e.eq(this.node) && Ni(t, this.outerDeco) && r.eq(this.innerDeco);
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
    let r = this.node.inlineContent, s = t, i = e.composing ? this.localCompositionInfo(e, t) : null, o = i && i.pos > -1 ? i : null, l = i && i.pos < 0, a = new tw(this, o && o.node, e);
    sw(this.node, this.innerDeco, (u, d, h) => {
      u.spec.marks ? a.syncToMarks(u.spec.marks, r, e, d) : u.type.side >= 0 && !h && a.syncToMarks(d == this.node.childCount ? de.none : this.node.child(d).marks, r, e, d), a.placeWidget(u, e, s);
    }, (u, d, h, p) => {
      a.syncToMarks(u.marks, r, e, p);
      let g;
      a.findNodeMatch(u, d, h, p) || l && e.state.selection.from > s && e.state.selection.to < s + u.nodeSize && (g = a.findIndexWithChild(i.node)) > -1 && a.updateNodeAt(u, d, h, g, e) || a.updateNextNode(u, d, h, e, p, s) || a.addNode(u, d, h, e, s), s += u.nodeSize;
    }), a.syncToMarks([], r, e, 0), this.node.isTextblock && a.addTextblockHacks(), a.destroyRest(), (a.changed || this.dirty == $n) && (o && this.protectLocalComposition(e, o), vh(this.contentDOM, this.children, e), Rr && iw(this.dom));
  }
  localCompositionInfo(e, t) {
    let { from: r, to: s } = e.state.selection;
    if (!(e.state.selection instanceof V) || r < t || s > t + this.node.content.size)
      return null;
    let i = e.input.compositionNode;
    if (!i || !this.dom.contains(i.parentNode))
      return null;
    if (this.node.inlineContent) {
      let o = i.nodeValue, l = ow(this.node.content, o, r - t, s - t);
      return l < 0 ? null : { node: i, pos: l, text: o };
    } else
      return { node: i, pos: -1, text: "" };
  }
  protectLocalComposition(e, { node: t, pos: r, text: s }) {
    if (this.getDesc(t))
      return;
    let i = t;
    for (; i.parentNode != this.contentDOM; i = i.parentNode) {
      for (; i.previousSibling; )
        i.parentNode.removeChild(i.previousSibling);
      for (; i.nextSibling; )
        i.parentNode.removeChild(i.nextSibling);
      i.pmViewDesc && (i.pmViewDesc = void 0);
    }
    let o = new ZS(this, i, t, s);
    e.input.compositionNodes.push(o), this.children = ca(this.children, r, r + s.length, e, o);
  }
  // If this desc must be updated to match the given node decoration,
  // do so and return true.
  update(e, t, r, s) {
    return this.dirty == Bt || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, r, s), !0);
  }
  updateInner(e, t, r, s) {
    this.updateOuterDeco(t), this.node = e, this.innerDeco = r, this.contentDOM && this.updateChildren(s, this.posAtStart), this.dirty = kt;
  }
  updateOuterDeco(e) {
    if (Ni(e, this.outerDeco))
      return;
    let t = this.nodeDOM.nodeType != 1, r = this.dom;
    this.dom = Th(this.dom, this.nodeDOM, aa(this.outerDeco, this.node, t), aa(e, this.node, t)), this.dom != r && (r.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
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
function Uu(n, e, t, r, s) {
  Oh(r, e, n);
  let i = new En(void 0, n, e, t, r, r, r, s, 0);
  return i.contentDOM && i.updateChildren(s, 0), i;
}
class ko extends En {
  constructor(e, t, r, s, i, o, l) {
    super(e, t, r, s, i, null, o, l, 0);
  }
  parseRule() {
    let e = this.nodeDOM.parentNode;
    for (; e && e != this.dom && !e.pmIsDeco; )
      e = e.parentNode;
    return { skip: e || !0 };
  }
  update(e, t, r, s) {
    return this.dirty == Bt || this.dirty != kt && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t), (this.dirty != kt || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, s.trackWrites == this.nodeDOM && (s.trackWrites = null)), this.node = e, this.dirty = kt, !0);
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
    let s = this.node.cut(e, t), i = document.createTextNode(s.text);
    return new ko(this.parent, s, this.outerDeco, this.innerDeco, i, i, r);
  }
  markDirty(e, t) {
    super.markDirty(e, t), this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = Bt);
  }
  get domAtom() {
    return !1;
  }
  isText(e) {
    return this.node.text == e;
  }
}
class Mh extends Ds {
  parseRule() {
    return { ignore: !0 };
  }
  matchesHack(e) {
    return this.dirty == kt && this.dom.nodeName == e;
  }
  get domAtom() {
    return !0;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class XS extends En {
  constructor(e, t, r, s, i, o, l, a, u, d) {
    super(e, t, r, s, i, o, l, u, d), this.spec = a;
  }
  // A custom `update` method gets to decide whether the update goes
  // through. If it does, and there's a `contentDOM` node, our logic
  // updates the children.
  update(e, t, r, s) {
    if (this.dirty == Bt)
      return !1;
    if (this.spec.update && (this.node.type == e.type || this.spec.multiType)) {
      let i = this.spec.update(e, t, r);
      return i && this.updateInner(e, t, r, s), i;
    } else return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, t, r, s);
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(e, t, r, s) {
    this.spec.setSelection ? this.spec.setSelection(e, t, r.root) : super.setSelection(e, t, r, s);
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
function vh(n, e, t) {
  let r = n.firstChild, s = !1;
  for (let i = 0; i < e.length; i++) {
    let o = e[i], l = o.dom;
    if (l.parentNode == n) {
      for (; l != r; )
        r = qu(r), s = !0;
      r = r.nextSibling;
    } else
      s = !0, n.insertBefore(l, r);
    if (o instanceof nr) {
      let a = r ? r.previousSibling : n.lastChild;
      vh(o.contentDOM, o.children, t), r = a ? a.nextSibling : n.firstChild;
    }
  }
  for (; r; )
    r = qu(r), s = !0;
  s && t.trackWrites == n && (t.trackWrites = null);
}
const ns = function(n) {
  n && (this.nodeName = n);
};
ns.prototype = /* @__PURE__ */ Object.create(null);
const Vn = [new ns()];
function aa(n, e, t) {
  if (n.length == 0)
    return Vn;
  let r = t ? Vn[0] : new ns(), s = [r];
  for (let i = 0; i < n.length; i++) {
    let o = n[i].type.attrs;
    if (o) {
      o.nodeName && s.push(r = new ns(o.nodeName));
      for (let l in o) {
        let a = o[l];
        a != null && (t && s.length == 1 && s.push(r = new ns(e.isInline ? "span" : "div")), l == "class" ? r.class = (r.class ? r.class + " " : "") + a : l == "style" ? r.style = (r.style ? r.style + ";" : "") + a : l != "nodeName" && (r[l] = a));
      }
    }
  }
  return s;
}
function Th(n, e, t, r) {
  if (t == Vn && r == Vn)
    return e;
  let s = e;
  for (let i = 0; i < r.length; i++) {
    let o = r[i], l = t[i];
    if (i) {
      let a;
      l && l.nodeName == o.nodeName && s != n && (a = s.parentNode) && a.nodeName.toLowerCase() == o.nodeName || (a = document.createElement(o.nodeName), a.pmIsDeco = !0, a.appendChild(s), l = Vn[0]), s = a;
    }
    ew(s, l || Vn[0], o);
  }
  return s;
}
function ew(n, e, t) {
  for (let r in e)
    r != "class" && r != "style" && r != "nodeName" && !(r in t) && n.removeAttribute(r);
  for (let r in t)
    r != "class" && r != "style" && r != "nodeName" && t[r] != e[r] && n.setAttribute(r, t[r]);
  if (e.class != t.class) {
    let r = e.class ? e.class.split(" ").filter(Boolean) : [], s = t.class ? t.class.split(" ").filter(Boolean) : [];
    for (let i = 0; i < r.length; i++)
      s.indexOf(r[i]) == -1 && n.classList.remove(r[i]);
    for (let i = 0; i < s.length; i++)
      r.indexOf(s[i]) == -1 && n.classList.add(s[i]);
    n.classList.length == 0 && n.removeAttribute("class");
  }
  if (e.style != t.style) {
    if (e.style) {
      let r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, s;
      for (; s = r.exec(e.style); )
        n.style.removeProperty(s[1]);
    }
    t.style && (n.style.cssText += t.style);
  }
}
function Oh(n, e, t) {
  return Th(n, n, Vn, aa(e, t, n.nodeType != 1));
}
function Ni(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (!n[t].type.eq(e[t].type))
      return !1;
  return !0;
}
function qu(n) {
  let e = n.nextSibling;
  return n.parentNode.removeChild(n), e;
}
class tw {
  constructor(e, t, r) {
    this.lock = t, this.view = r, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = nw(e.node.content, e);
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
  syncToMarks(e, t, r, s) {
    let i = 0, o = this.stack.length >> 1, l = Math.min(o, e.length);
    for (; i < l && (i == o - 1 ? this.top : this.stack[i + 1 << 1]).matchesMark(e[i]) && e[i].type.spec.spanning !== !1; )
      i++;
    for (; i < o; )
      this.destroyRest(), this.top.dirty = kt, this.index = this.stack.pop(), this.top = this.stack.pop(), o--;
    for (; o < e.length; ) {
      this.stack.push(this.top, this.index + 1);
      let a = -1, u = this.top.children.length;
      s < this.preMatch.index && (u = Math.min(this.index + 3, u));
      for (let d = this.index; d < u; d++) {
        let h = this.top.children[d];
        if (h.matchesMark(e[o]) && !this.isLocked(h.dom)) {
          a = d;
          break;
        }
      }
      if (a > -1)
        a > this.index && (this.changed = !0, this.destroyBetween(this.index, a)), this.top = this.top.children[this.index];
      else {
        let d = nr.create(this.top, e[o], t, r);
        this.top.children.splice(this.index, 0, d), this.top = d, this.changed = !0;
      }
      this.index = 0, o++;
    }
  }
  // Try to find a node desc matching the given data. Skip over it and
  // return true when successful.
  findNodeMatch(e, t, r, s) {
    let i = -1, o;
    if (s >= this.preMatch.index && (o = this.preMatch.matches[s - this.preMatch.index]).parent == this.top && o.matchesNode(e, t, r))
      i = this.top.children.indexOf(o, this.index);
    else
      for (let l = this.index, a = Math.min(this.top.children.length, l + 5); l < a; l++) {
        let u = this.top.children[l];
        if (u.matchesNode(e, t, r) && !this.preMatch.matched.has(u)) {
          i = l;
          break;
        }
      }
    return i < 0 ? !1 : (this.destroyBetween(this.index, i), this.index++, !0);
  }
  updateNodeAt(e, t, r, s, i) {
    let o = this.top.children[s];
    return o.dirty == Bt && o.dom == o.contentDOM && (o.dirty = $n), o.update(e, t, r, i) ? (this.destroyBetween(this.index, s), this.index++, !0) : !1;
  }
  findIndexWithChild(e) {
    for (; ; ) {
      let t = e.parentNode;
      if (!t)
        return -1;
      if (t == this.top.contentDOM) {
        let r = e.pmViewDesc;
        if (r) {
          for (let s = this.index; s < this.top.children.length; s++)
            if (this.top.children[s] == r)
              return s;
        }
        return -1;
      }
      e = t;
    }
  }
  // Try to update the next node, if any, to the given data. Checks
  // pre-matches to avoid overwriting nodes that could still be used.
  updateNextNode(e, t, r, s, i, o) {
    for (let l = this.index; l < this.top.children.length; l++) {
      let a = this.top.children[l];
      if (a instanceof En) {
        let u = this.preMatch.matched.get(a);
        if (u != null && u != i)
          return !1;
        let d = a.dom, h, p = this.isLocked(d) && !(e.isText && a.node && a.node.isText && a.nodeDOM.nodeValue == e.text && a.dirty != Bt && Ni(t, a.outerDeco));
        if (!p && a.update(e, t, r, s))
          return this.destroyBetween(this.index, l), a.dom != d && (this.changed = !0), this.index++, !0;
        if (!p && (h = this.recreateWrapper(a, e, t, r, s, o)))
          return this.destroyBetween(this.index, l), this.top.children[this.index] = h, h.contentDOM && (h.dirty = $n, h.updateChildren(s, o + 1), h.dirty = kt), this.changed = !0, this.index++, !0;
        break;
      }
    }
    return !1;
  }
  // When a node with content is replaced by a different node with
  // identical content, move over its children.
  recreateWrapper(e, t, r, s, i, o) {
    if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content) || !Ni(r, e.outerDeco) || !s.eq(e.innerDeco))
      return null;
    let l = En.create(this.top, t, r, s, i, o);
    if (l.contentDOM) {
      l.children = e.children, e.children = [];
      for (let a of l.children)
        a.parent = l;
    }
    return e.destroy(), l;
  }
  // Insert the node as a newly created node desc.
  addNode(e, t, r, s, i) {
    let o = En.create(this.top, e, t, r, s, i);
    o.contentDOM && o.updateChildren(s, i + 1), this.top.children.splice(this.index++, 0, o), this.changed = !0;
  }
  placeWidget(e, t, r) {
    let s = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (s && s.matchesWidget(e) && (e == s.widget || !s.widget.type.toDOM.parentNode))
      this.index++;
    else {
      let i = new Ch(this.top, e, t, r);
      this.top.children.splice(this.index++, 0, i), this.changed = !0;
    }
  }
  // Make sure a textblock looks and behaves correctly in
  // contentEditable.
  addTextblockHacks() {
    let e = this.top.children[this.index - 1], t = this.top;
    for (; e instanceof nr; )
      t = e, e = t.children[t.children.length - 1];
    (!e || // Empty textblock
    !(e instanceof ko) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((Ze || je) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t), this.addHackNode("BR", this.top));
  }
  addHackNode(e, t) {
    if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e))
      this.index++;
    else {
      let r = document.createElement(e);
      e == "IMG" && (r.className = "ProseMirror-separator", r.alt = ""), e == "BR" && (r.className = "ProseMirror-trailingBreak");
      let s = new Mh(this.top, [], r, null);
      t != this.top ? t.children.push(s) : t.children.splice(this.index++, 0, s), this.changed = !0;
    }
  }
  isLocked(e) {
    return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode));
  }
}
function nw(n, e) {
  let t = e, r = t.children.length, s = n.childCount, i = /* @__PURE__ */ new Map(), o = [];
  e: for (; s > 0; ) {
    let l;
    for (; ; )
      if (r) {
        let u = t.children[r - 1];
        if (u instanceof nr)
          t = u, r = u.children.length;
        else {
          l = u, r--;
          break;
        }
      } else {
        if (t == e)
          break e;
        r = t.parent.children.indexOf(t), t = t.parent;
      }
    let a = l.node;
    if (a) {
      if (a != n.child(s - 1))
        break;
      --s, i.set(l, s), o.push(l);
    }
  }
  return { index: s, matched: i, matches: o.reverse() };
}
function rw(n, e) {
  return n.type.side - e.type.side;
}
function sw(n, e, t, r) {
  let s = e.locals(n), i = 0;
  if (s.length == 0) {
    for (let u = 0; u < n.childCount; u++) {
      let d = n.child(u);
      r(d, s, e.forChild(i, d), u), i += d.nodeSize;
    }
    return;
  }
  let o = 0, l = [], a = null;
  for (let u = 0; ; ) {
    let d, h;
    for (; o < s.length && s[o].to == i; ) {
      let w = s[o++];
      w.widget && (d ? (h || (h = [d])).push(w) : d = w);
    }
    if (d)
      if (h) {
        h.sort(rw);
        for (let w = 0; w < h.length; w++)
          t(h[w], u, !!a);
      } else
        t(d, u, !!a);
    let p, g;
    if (a)
      g = -1, p = a, a = null;
    else if (u < n.childCount)
      g = u, p = n.child(u++);
    else
      break;
    for (let w = 0; w < l.length; w++)
      l[w].to <= i && l.splice(w--, 1);
    for (; o < s.length && s[o].from <= i && s[o].to > i; )
      l.push(s[o++]);
    let b = i + p.nodeSize;
    if (p.isText) {
      let w = b;
      o < s.length && s[o].from < w && (w = s[o].from);
      for (let x = 0; x < l.length; x++)
        l[x].to < w && (w = l[x].to);
      w < b && (a = p.cut(w - i), p = p.cut(0, w - i), b = w, g = -1);
    } else
      for (; o < s.length && s[o].to < b; )
        o++;
    let S = p.isInline && !p.isLeaf ? l.filter((w) => !w.inline) : l.slice();
    r(p, S, e.forChild(i, p), g), i = b;
  }
}
function iw(n) {
  if (n.nodeName == "UL" || n.nodeName == "OL") {
    let e = n.style.cssText;
    n.style.cssText = e + "; list-style: square !important", window.getComputedStyle(n).listStyle, n.style.cssText = e;
  }
}
function ow(n, e, t, r) {
  for (let s = 0, i = 0; s < n.childCount && i <= r; ) {
    let o = n.child(s++), l = i;
    if (i += o.nodeSize, !o.isText)
      continue;
    let a = o.text;
    for (; s < n.childCount; ) {
      let u = n.child(s++);
      if (i += u.nodeSize, !u.isText)
        break;
      a += u.text;
    }
    if (i >= t) {
      if (i >= r && a.slice(r - e.length - l, r - l) == e)
        return r - e.length;
      let u = l < r ? a.lastIndexOf(e, r - l - 1) : -1;
      if (u >= 0 && u + e.length + l >= t)
        return l + u;
      if (t == r && a.length >= r + e.length - l && a.slice(r - l, r - l + e.length) == e)
        return r;
    }
  }
  return -1;
}
function ca(n, e, t, r, s) {
  let i = [];
  for (let o = 0, l = 0; o < n.length; o++) {
    let a = n[o], u = l, d = l += a.size;
    u >= t || d <= e ? i.push(a) : (u < e && i.push(a.slice(0, e - u, r)), s && (i.push(s), s = void 0), d > t && i.push(a.slice(t - u, a.size, r)));
  }
  return i;
}
function Ja(n, e = null) {
  let t = n.domSelectionRange(), r = n.state.doc;
  if (!t.focusNode)
    return null;
  let s = n.docView.nearestDesc(t.focusNode), i = s && s.size == 0, o = n.docView.posFromDOM(t.focusNode, t.focusOffset, 1);
  if (o < 0)
    return null;
  let l = r.resolve(o), a, u;
  if (wo(t)) {
    for (a = o; s && !s.node; )
      s = s.parent;
    let h = s.node;
    if (s && h.isAtom && $.isSelectable(h) && s.parent && !(h.isInline && IS(t.focusNode, t.focusOffset, s.dom))) {
      let p = s.posBefore;
      u = new $(o == p ? l : r.resolve(p));
    }
  } else {
    if (t instanceof n.dom.ownerDocument.defaultView.Selection && t.rangeCount > 1) {
      let h = o, p = o;
      for (let g = 0; g < t.rangeCount; g++) {
        let b = t.getRangeAt(g);
        h = Math.min(h, n.docView.posFromDOM(b.startContainer, b.startOffset, 1)), p = Math.max(p, n.docView.posFromDOM(b.endContainer, b.endOffset, -1));
      }
      if (h < 0)
        return null;
      [a, o] = p == n.state.selection.anchor ? [p, h] : [h, p], l = r.resolve(o);
    } else
      a = n.docView.posFromDOM(t.anchorNode, t.anchorOffset, 1);
    if (a < 0)
      return null;
  }
  let d = r.resolve(a);
  if (!u) {
    let h = e == "pointer" || n.state.selection.head < l.pos && !i ? 1 : -1;
    u = Qa(n, d, l, h);
  }
  return u;
}
function Eh(n) {
  return n.editable ? n.hasFocus() : Dh(n) && document.activeElement && document.activeElement.contains(n.dom);
}
function on(n, e = !1) {
  let t = n.state.selection;
  if (Ah(n, t), !!Eh(n)) {
    if (!e && n.input.mouseDown && n.input.mouseDown.allowDefault && je) {
      let r = n.domSelectionRange(), s = n.domObserver.currentSelection;
      if (r.anchorNode && s.anchorNode && tr(r.anchorNode, r.anchorOffset, s.anchorNode, s.anchorOffset)) {
        n.input.mouseDown.delayedSelectionSync = !0, n.domObserver.setCurSelection();
        return;
      }
    }
    if (n.domObserver.disconnectSelection(), n.cursorWrapper)
      aw(n);
    else {
      let { anchor: r, head: s } = t, i, o;
      Ku && !(t instanceof V) && (t.$from.parent.inlineContent || (i = Gu(n, t.from)), !t.empty && !t.$from.parent.inlineContent && (o = Gu(n, t.to))), n.docView.setSelection(r, s, n, e), Ku && (i && Ju(i), o && Ju(o)), t.visible ? n.dom.classList.remove("ProseMirror-hideselection") : (n.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && lw(n));
    }
    n.domObserver.setCurSelection(), n.domObserver.connectSelection();
  }
}
const Ku = Ze || je && mh < 63;
function Gu(n, e) {
  let { node: t, offset: r } = n.docView.domFromPos(e, 0), s = r < t.childNodes.length ? t.childNodes[r] : null, i = r ? t.childNodes[r - 1] : null;
  if (Ze && s && s.contentEditable == "false")
    return Cl(s);
  if ((!s || s.contentEditable == "false") && (!i || i.contentEditable == "false")) {
    if (s)
      return Cl(s);
    if (i)
      return Cl(i);
  }
}
function Cl(n) {
  return n.contentEditable = "true", Ze && n.draggable && (n.draggable = !1, n.wasDraggable = !0), n;
}
function Ju(n) {
  n.contentEditable = "false", n.wasDraggable && (n.draggable = !0, n.wasDraggable = null);
}
function lw(n) {
  let e = n.dom.ownerDocument;
  e.removeEventListener("selectionchange", n.input.hideSelectionGuard);
  let t = n.domSelectionRange(), r = t.anchorNode, s = t.anchorOffset;
  e.addEventListener("selectionchange", n.input.hideSelectionGuard = () => {
    (t.anchorNode != r || t.anchorOffset != s) && (e.removeEventListener("selectionchange", n.input.hideSelectionGuard), setTimeout(() => {
      (!Eh(n) || n.state.selection.visible) && n.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function aw(n) {
  let e = n.domSelection();
  if (!e)
    return;
  let t = n.cursorWrapper.dom, r = t.nodeName == "IMG";
  r ? e.collapse(t.parentNode, $e(t) + 1) : e.collapse(t, 0), !r && !n.state.selection.visible && ut && On <= 11 && (t.disabled = !0, t.disabled = !1);
}
function Ah(n, e) {
  if (e instanceof $) {
    let t = n.docView.descAt(e.from);
    t != n.lastSelectedViewDesc && (Qu(n), t && t.selectNode(), n.lastSelectedViewDesc = t);
  } else
    Qu(n);
}
function Qu(n) {
  n.lastSelectedViewDesc && (n.lastSelectedViewDesc.parent && n.lastSelectedViewDesc.deselectNode(), n.lastSelectedViewDesc = void 0);
}
function Qa(n, e, t, r) {
  return n.someProp("createSelectionBetween", (s) => s(n, e, t)) || V.between(e, t, r);
}
function Zu(n) {
  return n.editable && !n.hasFocus() ? !1 : Dh(n);
}
function Dh(n) {
  let e = n.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return n.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (n.editable || n.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function cw(n) {
  let e = n.docView.domFromPos(n.state.selection.anchor, 0), t = n.domSelectionRange();
  return tr(e.node, e.offset, t.anchorNode, t.anchorOffset);
}
function ua(n, e) {
  let { $anchor: t, $head: r } = n.selection, s = e > 0 ? t.max(r) : t.min(r), i = s.parent.inlineContent ? s.depth ? n.doc.resolve(e > 0 ? s.after() : s.before()) : null : s;
  return i && U.findFrom(i, e);
}
function gn(n, e) {
  return n.dispatch(n.state.tr.setSelection(e).scrollIntoView()), !0;
}
function Xu(n, e, t) {
  let r = n.state.selection;
  if (r instanceof V)
    if (t.indexOf("s") > -1) {
      let { $head: s } = r, i = s.textOffset ? null : e < 0 ? s.nodeBefore : s.nodeAfter;
      if (!i || i.isText || !i.isLeaf)
        return !1;
      let o = n.state.doc.resolve(s.pos + i.nodeSize * (e < 0 ? -1 : 1));
      return gn(n, new V(r.$anchor, o));
    } else if (r.empty) {
      if (n.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let s = ua(n.state, e);
        return s && s instanceof $ ? gn(n, s) : !1;
      } else if (!(bt && t.indexOf("m") > -1)) {
        let s = r.$head, i = s.textOffset ? null : e < 0 ? s.nodeBefore : s.nodeAfter, o;
        if (!i || i.isText)
          return !1;
        let l = e < 0 ? s.pos - i.nodeSize : s.pos;
        return i.isAtom || (o = n.docView.descAt(l)) && !o.contentDOM ? $.isSelectable(i) ? gn(n, new $(e < 0 ? n.state.doc.resolve(s.pos - i.nodeSize) : s)) : As ? gn(n, new V(n.state.doc.resolve(e < 0 ? l : l + i.nodeSize))) : !1 : !1;
      }
    } else return !1;
  else {
    if (r instanceof $ && r.node.isInline)
      return gn(n, new V(e > 0 ? r.$to : r.$from));
    {
      let s = ua(n.state, e);
      return s ? gn(n, s) : !1;
    }
  }
}
function Ri(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function rs(n, e) {
  let t = n.pmViewDesc;
  return t && t.size == 0 && (e < 0 || n.nextSibling || n.nodeName != "BR");
}
function Sr(n, e) {
  return e < 0 ? uw(n) : dw(n);
}
function uw(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let s, i, o = !1;
  for (wt && t.nodeType == 1 && r < Ri(t) && rs(t.childNodes[r], -1) && (o = !0); ; )
    if (r > 0) {
      if (t.nodeType != 1)
        break;
      {
        let l = t.childNodes[r - 1];
        if (rs(l, -1))
          s = t, i = --r;
        else if (l.nodeType == 3)
          t = l, r = t.nodeValue.length;
        else
          break;
      }
    } else {
      if (Nh(t))
        break;
      {
        let l = t.previousSibling;
        for (; l && rs(l, -1); )
          s = t.parentNode, i = $e(l), l = l.previousSibling;
        if (l)
          t = l, r = Ri(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = 0;
        }
      }
    }
  o ? da(n, t, r) : s && da(n, s, i);
}
function dw(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let s = Ri(t), i, o;
  for (; ; )
    if (r < s) {
      if (t.nodeType != 1)
        break;
      let l = t.childNodes[r];
      if (rs(l, 1))
        i = t, o = ++r;
      else
        break;
    } else {
      if (Nh(t))
        break;
      {
        let l = t.nextSibling;
        for (; l && rs(l, 1); )
          i = l.parentNode, o = $e(l) + 1, l = l.nextSibling;
        if (l)
          t = l, r = 0, s = Ri(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = s = 0;
        }
      }
    }
  i && da(n, i, o);
}
function Nh(n) {
  let e = n.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function fw(n, e) {
  for (; n && e == n.childNodes.length && !Es(n); )
    e = $e(n) + 1, n = n.parentNode;
  for (; n && e < n.childNodes.length; ) {
    let t = n.childNodes[e];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = 0;
  }
}
function hw(n, e) {
  for (; n && !e && !Es(n); )
    e = $e(n), n = n.parentNode;
  for (; n && e; ) {
    let t = n.childNodes[e - 1];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = n.childNodes.length;
  }
}
function da(n, e, t) {
  if (e.nodeType != 3) {
    let i, o;
    (o = fw(e, t)) ? (e = o, t = 0) : (i = hw(e, t)) && (e = i, t = i.nodeValue.length);
  }
  let r = n.domSelection();
  if (!r)
    return;
  if (wo(r)) {
    let i = document.createRange();
    i.setEnd(e, t), i.setStart(e, t), r.removeAllRanges(), r.addRange(i);
  } else r.extend && r.extend(e, t);
  n.domObserver.setCurSelection();
  let { state: s } = n;
  setTimeout(() => {
    n.state == s && on(n);
  }, 50);
}
function ed(n, e) {
  let t = n.state.doc.resolve(e);
  if (!(je || gh) && t.parent.inlineContent) {
    let s = n.coordsAtPos(e);
    if (e > t.start()) {
      let i = n.coordsAtPos(e - 1), o = (i.top + i.bottom) / 2;
      if (o > s.top && o < s.bottom && Math.abs(i.left - s.left) > 1)
        return i.left < s.left ? "ltr" : "rtl";
    }
    if (e < t.end()) {
      let i = n.coordsAtPos(e + 1), o = (i.top + i.bottom) / 2;
      if (o > s.top && o < s.bottom && Math.abs(i.left - s.left) > 1)
        return i.left > s.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(n.dom).direction == "rtl" ? "rtl" : "ltr";
}
function td(n, e, t) {
  let r = n.state.selection;
  if (r instanceof V && !r.empty || t.indexOf("s") > -1 || bt && t.indexOf("m") > -1)
    return !1;
  let { $from: s, $to: i } = r;
  if (!s.parent.inlineContent || n.endOfTextblock(e < 0 ? "up" : "down")) {
    let o = ua(n.state, e);
    if (o && o instanceof $)
      return gn(n, o);
  }
  if (!s.parent.inlineContent) {
    let o = e < 0 ? s : i, l = r instanceof pt ? U.near(o, e) : U.findFrom(o, e);
    return l ? gn(n, l) : !1;
  }
  return !1;
}
function nd(n, e) {
  if (!(n.state.selection instanceof V))
    return !0;
  let { $head: t, $anchor: r, empty: s } = n.state.selection;
  if (!t.sameParent(r))
    return !0;
  if (!s)
    return !1;
  if (n.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0;
  let i = !t.textOffset && (e < 0 ? t.nodeBefore : t.nodeAfter);
  if (i && !i.isText) {
    let o = n.state.tr;
    return e < 0 ? o.delete(t.pos - i.nodeSize, t.pos) : o.delete(t.pos, t.pos + i.nodeSize), n.dispatch(o), !0;
  }
  return !1;
}
function rd(n, e, t) {
  n.domObserver.stop(), e.contentEditable = t, n.domObserver.start();
}
function pw(n) {
  if (!Ze || n.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: t } = n.domSelectionRange();
  if (e && e.nodeType == 1 && t == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    rd(n, r, "true"), setTimeout(() => rd(n, r, "false"), 20);
  }
  return !1;
}
function mw(n) {
  let e = "";
  return n.ctrlKey && (e += "c"), n.metaKey && (e += "m"), n.altKey && (e += "a"), n.shiftKey && (e += "s"), e;
}
function gw(n, e) {
  let t = e.keyCode, r = mw(e);
  if (t == 8 || bt && t == 72 && r == "c")
    return nd(n, -1) || Sr(n, -1);
  if (t == 46 && !e.shiftKey || bt && t == 68 && r == "c")
    return nd(n, 1) || Sr(n, 1);
  if (t == 13 || t == 27)
    return !0;
  if (t == 37 || bt && t == 66 && r == "c") {
    let s = t == 37 ? ed(n, n.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return Xu(n, s, r) || Sr(n, s);
  } else if (t == 39 || bt && t == 70 && r == "c") {
    let s = t == 39 ? ed(n, n.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return Xu(n, s, r) || Sr(n, s);
  } else {
    if (t == 38 || bt && t == 80 && r == "c")
      return td(n, -1, r) || Sr(n, -1);
    if (t == 40 || bt && t == 78 && r == "c")
      return pw(n) || td(n, 1, r) || Sr(n, 1);
    if (r == (bt ? "m" : "c") && (t == 66 || t == 73 || t == 89 || t == 90))
      return !0;
  }
  return !1;
}
function Za(n, e) {
  n.someProp("transformCopied", (g) => {
    e = g(e, n);
  });
  let t = [], { content: r, openStart: s, openEnd: i } = e;
  for (; s > 1 && i > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    s--, i--;
    let g = r.firstChild;
    t.push(g.type.name, g.attrs != g.type.defaultAttrs ? g.attrs : null), r = g.content;
  }
  let o = n.someProp("clipboardSerializer") || lr.fromSchema(n.state.schema), l = zh(), a = l.createElement("div");
  a.appendChild(o.serializeFragment(r, { document: l }));
  let u = a.firstChild, d, h = 0;
  for (; u && u.nodeType == 1 && (d = Lh[u.nodeName.toLowerCase()]); ) {
    for (let g = d.length - 1; g >= 0; g--) {
      let b = l.createElement(d[g]);
      for (; a.firstChild; )
        b.appendChild(a.firstChild);
      a.appendChild(b), h++;
    }
    u = a.firstChild;
  }
  u && u.nodeType == 1 && u.setAttribute("data-pm-slice", `${s} ${i}${h ? ` -${h}` : ""} ${JSON.stringify(t)}`);
  let p = n.someProp("clipboardTextSerializer", (g) => g(e, n)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: a, text: p, slice: e };
}
function Rh(n, e, t, r, s) {
  let i = s.parent.type.spec.code, o, l;
  if (!t && !e)
    return null;
  let a = !!e && (r || i || !t);
  if (a) {
    if (n.someProp("transformPastedText", (p) => {
      e = p(e, i || r, n);
    }), i)
      return l = new z(N.from(n.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0), n.someProp("transformPasted", (p) => {
        l = p(l, n, !0);
      }), l;
    let h = n.someProp("clipboardTextParser", (p) => p(e, s, r, n));
    if (h)
      l = h;
    else {
      let p = s.marks(), { schema: g } = n.state, b = lr.fromSchema(g);
      o = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((S) => {
        let w = o.appendChild(document.createElement("p"));
        S && w.appendChild(b.serializeNode(g.text(S, p)));
      });
    }
  } else
    n.someProp("transformPastedHTML", (h) => {
      t = h(t, n);
    }), o = ww(t), As && kw(o);
  let u = o && o.querySelector("[data-pm-slice]"), d = u && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(u.getAttribute("data-pm-slice") || "");
  if (d && d[3])
    for (let h = +d[3]; h > 0; h--) {
      let p = o.firstChild;
      for (; p && p.nodeType != 1; )
        p = p.nextSibling;
      if (!p)
        break;
      o = p;
    }
  if (l || (l = (n.someProp("clipboardParser") || n.someProp("domParser") || Tn.fromSchema(n.state.schema)).parseSlice(o, {
    preserveWhitespace: !!(a || d),
    context: s,
    ruleFromNode(p) {
      return p.nodeName == "BR" && !p.nextSibling && p.parentNode && !yw.test(p.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), d)
    l = xw(sd(l, +d[1], +d[2]), d[4]);
  else if (l = z.maxOpen(bw(l.content, s), !0), l.openStart || l.openEnd) {
    let h = 0, p = 0;
    for (let g = l.content.firstChild; h < l.openStart && !g.type.spec.isolating; h++, g = g.firstChild)
      ;
    for (let g = l.content.lastChild; p < l.openEnd && !g.type.spec.isolating; p++, g = g.lastChild)
      ;
    l = sd(l, h, p);
  }
  return n.someProp("transformPasted", (h) => {
    l = h(l, n, a);
  }), l;
}
const yw = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function bw(n, e) {
  if (n.childCount < 2)
    return n;
  for (let t = e.depth; t >= 0; t--) {
    let s = e.node(t).contentMatchAt(e.index(t)), i, o = [];
    if (n.forEach((l) => {
      if (!o)
        return;
      let a = s.findWrapping(l.type), u;
      if (!a)
        return o = null;
      if (u = o.length && i.length && _h(a, i, l, o[o.length - 1], 0))
        o[o.length - 1] = u;
      else {
        o.length && (o[o.length - 1] = Ph(o[o.length - 1], i.length));
        let d = Ih(l, a);
        o.push(d), s = s.matchType(d.type), i = a;
      }
    }), o)
      return N.from(o);
  }
  return n;
}
function Ih(n, e, t = 0) {
  for (let r = e.length - 1; r >= t; r--)
    n = e[r].create(null, N.from(n));
  return n;
}
function _h(n, e, t, r, s) {
  if (s < n.length && s < e.length && n[s] == e[s]) {
    let i = _h(n, e, t, r.lastChild, s + 1);
    if (i)
      return r.copy(r.content.replaceChild(r.childCount - 1, i));
    if (r.contentMatchAt(r.childCount).matchType(s == n.length - 1 ? t.type : n[s + 1]))
      return r.copy(r.content.append(N.from(Ih(t, n, s + 1))));
  }
}
function Ph(n, e) {
  if (e == 0)
    return n;
  let t = n.content.replaceChild(n.childCount - 1, Ph(n.lastChild, e - 1)), r = n.contentMatchAt(n.childCount).fillBefore(N.empty, !0);
  return n.copy(t.append(r));
}
function fa(n, e, t, r, s, i) {
  let o = e < 0 ? n.firstChild : n.lastChild, l = o.content;
  return n.childCount > 1 && (i = 0), s < r - 1 && (l = fa(l, e, t, r, s + 1, i)), s >= t && (l = e < 0 ? o.contentMatchAt(0).fillBefore(l, i <= s).append(l) : l.append(o.contentMatchAt(o.childCount).fillBefore(N.empty, !0))), n.replaceChild(e < 0 ? 0 : n.childCount - 1, o.copy(l));
}
function sd(n, e, t) {
  return e < n.openStart && (n = new z(fa(n.content, -1, e, n.openStart, 0, n.openEnd), e, n.openEnd)), t < n.openEnd && (n = new z(fa(n.content, 1, t, n.openEnd, 0, 0), n.openStart, t)), n;
}
const Lh = {
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
let id = null;
function zh() {
  return id || (id = document.implementation.createHTMLDocument("title"));
}
let Ml = null;
function Sw(n) {
  let e = window.trustedTypes;
  return e ? (Ml || (Ml = e.defaultPolicy || e.createPolicy("ProseMirrorClipboard", { createHTML: (t) => t })), Ml.createHTML(n)) : n;
}
function ww(n) {
  let e = /^(\s*<meta [^>]*>)*/.exec(n);
  e && (n = n.slice(e[0].length));
  let t = zh().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(n), s;
  if ((s = r && Lh[r[1].toLowerCase()]) && (n = s.map((i) => "<" + i + ">").join("") + n + s.map((i) => "</" + i + ">").reverse().join("")), t.innerHTML = Sw(n), s)
    for (let i = 0; i < s.length; i++)
      t = t.querySelector(s[i]) || t;
  return t;
}
function kw(n) {
  let e = n.querySelectorAll(je ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(n.ownerDocument.createTextNode(" "), r);
  }
}
function xw(n, e) {
  if (!n.size)
    return n;
  let t = n.content.firstChild.type.schema, r;
  try {
    r = JSON.parse(e);
  } catch {
    return n;
  }
  let { content: s, openStart: i, openEnd: o } = n;
  for (let l = r.length - 2; l >= 0; l -= 2) {
    let a = t.nodes[r[l]];
    if (!a || a.hasRequiredAttrs())
      break;
    s = N.from(a.create(r[l + 1], s)), i++, o++;
  }
  return new z(s, i, o);
}
const rt = {}, st = {}, Cw = { touchstart: !0, touchmove: !0 };
class Mw {
  constructor() {
    this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = { time: 0, x: 0, y: 0, type: "", button: 0 }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastChromeDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.badSafariComposition = !1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
  }
}
function vw(n) {
  for (let e in rt) {
    let t = rt[e];
    n.dom.addEventListener(e, n.input.eventHandlers[e] = (r) => {
      Ow(n, r) && !Xa(n, r) && (n.editable || !(r.type in st)) && t(n, r);
    }, Cw[e] ? { passive: !0 } : void 0);
  }
  Ze && n.dom.addEventListener("input", () => null), ha(n);
}
function Mn(n, e) {
  n.input.lastSelectionOrigin = e, n.input.lastSelectionTime = Date.now();
}
function Tw(n) {
  n.domObserver.stop();
  for (let e in n.input.eventHandlers)
    n.dom.removeEventListener(e, n.input.eventHandlers[e]);
  clearTimeout(n.input.composingTimeout), clearTimeout(n.input.lastIOSEnterFallbackTimeout);
}
function ha(n) {
  n.someProp("handleDOMEvents", (e) => {
    for (let t in e)
      n.input.eventHandlers[t] || n.dom.addEventListener(t, n.input.eventHandlers[t] = (r) => Xa(n, r));
  });
}
function Xa(n, e) {
  return n.someProp("handleDOMEvents", (t) => {
    let r = t[e.type];
    return r ? r(n, e) || e.defaultPrevented : !1;
  });
}
function Ow(n, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target; t != n.dom; t = t.parentNode)
    if (!t || t.nodeType == 11 || t.pmViewDesc && t.pmViewDesc.stopEvent(e))
      return !1;
  return !0;
}
function Ew(n, e) {
  !Xa(n, e) && rt[e.type] && (n.editable || !(e.type in st)) && rt[e.type](n, e);
}
st.keydown = (n, e) => {
  let t = e;
  if (n.input.shiftKey = t.keyCode == 16 || t.shiftKey, !Bh(n, t) && (n.input.lastKeyCode = t.keyCode, n.input.lastKeyCodeTime = Date.now(), !(rn && je && t.keyCode == 13)))
    if (t.keyCode != 229 && n.domObserver.forceFlush(), Rr && t.keyCode == 13 && !t.ctrlKey && !t.altKey && !t.metaKey) {
      let r = Date.now();
      n.input.lastIOSEnter = r, n.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        n.input.lastIOSEnter == r && (n.someProp("handleKeyDown", (s) => s(n, Hn(13, "Enter"))), n.input.lastIOSEnter = 0);
      }, 200);
    } else n.someProp("handleKeyDown", (r) => r(n, t)) || gw(n, t) ? t.preventDefault() : Mn(n, "key");
};
st.keyup = (n, e) => {
  e.keyCode == 16 && (n.input.shiftKey = !1);
};
st.keypress = (n, e) => {
  let t = e;
  if (Bh(n, t) || !t.charCode || t.ctrlKey && !t.altKey || bt && t.metaKey)
    return;
  if (n.someProp("handleKeyPress", (s) => s(n, t))) {
    t.preventDefault();
    return;
  }
  let r = n.state.selection;
  if (!(r instanceof V) || !r.$from.sameParent(r.$to)) {
    let s = String.fromCharCode(t.charCode), i = () => n.state.tr.insertText(s).scrollIntoView();
    !/[\r\n]/.test(s) && !n.someProp("handleTextInput", (o) => o(n, r.$from.pos, r.$to.pos, s, i)) && n.dispatch(i()), t.preventDefault();
  }
};
function xo(n) {
  return { left: n.clientX, top: n.clientY };
}
function Aw(n, e) {
  let t = e.x - n.clientX, r = e.y - n.clientY;
  return t * t + r * r < 100;
}
function ec(n, e, t, r, s) {
  if (r == -1)
    return !1;
  let i = n.state.doc.resolve(r);
  for (let o = i.depth + 1; o > 0; o--)
    if (n.someProp(e, (l) => o > i.depth ? l(n, t, i.nodeAfter, i.before(o), s, !0) : l(n, t, i.node(o), i.before(o), s, !1)))
      return !0;
  return !1;
}
function Tr(n, e, t) {
  if (n.focused || n.focus(), n.state.selection.eq(e))
    return;
  let r = n.state.tr.setSelection(e);
  r.setMeta("pointer", !0), n.dispatch(r);
}
function Dw(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.doc.resolve(e), r = t.nodeAfter;
  return r && r.isAtom && $.isSelectable(r) ? (Tr(n, new $(t)), !0) : !1;
}
function Nw(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.selection, r, s;
  t instanceof $ && (r = t.node);
  let i = n.state.doc.resolve(e);
  for (let o = i.depth + 1; o > 0; o--) {
    let l = o > i.depth ? i.nodeAfter : i.node(o);
    if ($.isSelectable(l)) {
      r && t.$from.depth > 0 && o >= t.$from.depth && i.before(t.$from.depth + 1) == t.$from.pos ? s = i.before(t.$from.depth) : s = i.before(o);
      break;
    }
  }
  return s != null ? (Tr(n, $.create(n.state.doc, s)), !0) : !1;
}
function Rw(n, e, t, r, s) {
  return ec(n, "handleClickOn", e, t, r) || n.someProp("handleClick", (i) => i(n, e, r)) || (s ? Nw(n, t) : Dw(n, t));
}
function Iw(n, e, t, r) {
  return ec(n, "handleDoubleClickOn", e, t, r) || n.someProp("handleDoubleClick", (s) => s(n, e, r));
}
function _w(n, e, t, r) {
  return ec(n, "handleTripleClickOn", e, t, r) || n.someProp("handleTripleClick", (s) => s(n, e, r)) || Pw(n, t, r);
}
function Pw(n, e, t) {
  if (t.button != 0)
    return !1;
  let r = n.state.doc;
  if (e == -1)
    return r.inlineContent ? (Tr(n, V.create(r, 0, r.content.size)), !0) : !1;
  let s = r.resolve(e);
  for (let i = s.depth + 1; i > 0; i--) {
    let o = i > s.depth ? s.nodeAfter : s.node(i), l = s.before(i);
    if (o.inlineContent)
      Tr(n, V.create(r, l + 1, l + 1 + o.content.size));
    else if ($.isSelectable(o))
      Tr(n, $.create(r, l));
    else
      continue;
    return !0;
  }
}
function tc(n) {
  return Ii(n);
}
const Fh = bt ? "metaKey" : "ctrlKey";
rt.mousedown = (n, e) => {
  let t = e;
  n.input.shiftKey = t.shiftKey;
  let r = tc(n), s = Date.now(), i = "singleClick";
  s - n.input.lastClick.time < 500 && Aw(t, n.input.lastClick) && !t[Fh] && n.input.lastClick.button == t.button && (n.input.lastClick.type == "singleClick" ? i = "doubleClick" : n.input.lastClick.type == "doubleClick" && (i = "tripleClick")), n.input.lastClick = { time: s, x: t.clientX, y: t.clientY, type: i, button: t.button };
  let o = n.posAtCoords(xo(t));
  o && (i == "singleClick" ? (n.input.mouseDown && n.input.mouseDown.done(), n.input.mouseDown = new Lw(n, o, t, !!r)) : (i == "doubleClick" ? Iw : _w)(n, o.pos, o.inside, t) ? t.preventDefault() : Mn(n, "pointer"));
};
class Lw {
  constructor(e, t, r, s) {
    this.view = e, this.pos = t, this.event = r, this.flushed = s, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[Fh], this.allowDefault = r.shiftKey;
    let i, o;
    if (t.inside > -1)
      i = e.state.doc.nodeAt(t.inside), o = t.inside;
    else {
      let d = e.state.doc.resolve(t.pos);
      i = d.parent, o = d.depth ? d.before() : 0;
    }
    const l = s ? null : r.target, a = l ? e.docView.nearestDesc(l, !0) : null;
    this.target = a && a.nodeDOM.nodeType == 1 ? a.nodeDOM : null;
    let { selection: u } = e.state;
    (r.button == 0 && i.type.spec.draggable && i.type.spec.selectable !== !1 || u instanceof $ && u.from <= o && u.to > o) && (this.mightDrag = {
      node: i,
      pos: o,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && wt && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), Mn(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => on(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let t = this.pos;
    this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(xo(e))), this.updateAllowDefault(e), this.allowDefault || !t ? Mn(this.view, "pointer") : Rw(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    Ze && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    je && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (Tr(this.view, U.near(this.view.state.doc.resolve(t.pos))), e.preventDefault()) : Mn(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), Mn(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
rt.touchstart = (n) => {
  n.input.lastTouch = Date.now(), tc(n), Mn(n, "pointer");
};
rt.touchmove = (n) => {
  n.input.lastTouch = Date.now(), Mn(n, "pointer");
};
rt.contextmenu = (n) => tc(n);
function Bh(n, e) {
  return n.composing ? !0 : Ze && Math.abs(e.timeStamp - n.input.compositionEndedAt) < 500 ? (n.input.compositionEndedAt = -2e8, !0) : !1;
}
const zw = rn ? 5e3 : -1;
st.compositionstart = st.compositionupdate = (n) => {
  if (!n.composing) {
    n.domObserver.flush();
    let { state: e } = n, t = e.selection.$to;
    if (e.selection instanceof V && (e.storedMarks || !t.textOffset && t.parentOffset && t.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1) || je && gh && Fw(n)))
      n.markCursor = n.state.storedMarks || t.marks(), Ii(n, !0), n.markCursor = null;
    else if (Ii(n, !e.selection.empty), wt && e.selection.empty && t.parentOffset && !t.textOffset && t.nodeBefore.marks.length) {
      let r = n.domSelectionRange();
      for (let s = r.focusNode, i = r.focusOffset; s && s.nodeType == 1 && i != 0; ) {
        let o = i < 0 ? s.lastChild : s.childNodes[i - 1];
        if (!o)
          break;
        if (o.nodeType == 3) {
          let l = n.domSelection();
          l && l.collapse(o, o.nodeValue.length);
          break;
        } else
          s = o, i = -1;
      }
    }
    n.input.composing = !0;
  }
  Hh(n, zw);
};
function Fw(n) {
  let { focusNode: e, focusOffset: t } = n.domSelectionRange();
  if (!e || e.nodeType != 1 || t >= e.childNodes.length)
    return !1;
  let r = e.childNodes[t];
  return r.nodeType == 1 && r.contentEditable == "false";
}
st.compositionend = (n, e) => {
  n.composing && (n.input.composing = !1, n.input.compositionEndedAt = e.timeStamp, n.input.compositionPendingChanges = n.domObserver.pendingRecords().length ? n.input.compositionID : 0, n.input.compositionNode = null, n.input.badSafariComposition ? n.domObserver.forceFlush() : n.input.compositionPendingChanges && Promise.resolve().then(() => n.domObserver.flush()), n.input.compositionID++, Hh(n, 20));
};
function Hh(n, e) {
  clearTimeout(n.input.composingTimeout), e > -1 && (n.input.composingTimeout = setTimeout(() => Ii(n), e));
}
function Wh(n) {
  for (n.composing && (n.input.composing = !1, n.input.compositionEndedAt = Hw()); n.input.compositionNodes.length > 0; )
    n.input.compositionNodes.pop().markParentsDirty();
}
function Bw(n) {
  let e = n.domSelectionRange();
  if (!e.focusNode)
    return null;
  let t = NS(e.focusNode, e.focusOffset), r = RS(e.focusNode, e.focusOffset);
  if (t && r && t != r) {
    let s = r.pmViewDesc, i = n.domObserver.lastChangedTextNode;
    if (t == i || r == i)
      return i;
    if (!s || !s.isText(r.nodeValue))
      return r;
    if (n.input.compositionNode == r) {
      let o = t.pmViewDesc;
      if (!(!o || !o.isText(t.nodeValue)))
        return r;
    }
  }
  return t || r;
}
function Hw() {
  let n = document.createEvent("Event");
  return n.initEvent("event", !0, !0), n.timeStamp;
}
function Ii(n, e = !1) {
  if (!(rn && n.domObserver.flushingSoon >= 0)) {
    if (n.domObserver.forceFlush(), Wh(n), e || n.docView && n.docView.dirty) {
      let t = Ja(n), r = n.state.selection;
      return t && !t.eq(r) ? n.dispatch(n.state.tr.setSelection(t)) : (n.markCursor || e) && !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent ? n.dispatch(n.state.tr.deleteSelection()) : n.updateState(n.state), !0;
    }
    return !1;
  }
}
function Ww(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.dom.parentNode.appendChild(document.createElement("div"));
  t.appendChild(e), t.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), s = document.createRange();
  s.selectNodeContents(e), n.dom.blur(), r.removeAllRanges(), r.addRange(s), setTimeout(() => {
    t.parentNode && t.parentNode.removeChild(t), n.focus();
  }, 50);
}
const ys = ut && On < 15 || Rr && LS < 604;
rt.copy = st.cut = (n, e) => {
  let t = e, r = n.state.selection, s = t.type == "cut";
  if (r.empty)
    return;
  let i = ys ? null : t.clipboardData, o = r.content(), { dom: l, text: a } = Za(n, o);
  i ? (t.preventDefault(), i.clearData(), i.setData("text/html", l.innerHTML), i.setData("text/plain", a)) : Ww(n, l), s && n.dispatch(n.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function $w(n) {
  return n.openStart == 0 && n.openEnd == 0 && n.content.childCount == 1 ? n.content.firstChild : null;
}
function Vw(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.input.shiftKey || n.state.selection.$from.parent.type.spec.code, r = n.dom.parentNode.appendChild(document.createElement(t ? "textarea" : "div"));
  t || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let s = n.input.shiftKey && n.input.lastKeyCode != 45;
  setTimeout(() => {
    n.focus(), r.parentNode && r.parentNode.removeChild(r), t ? bs(n, r.value, null, s, e) : bs(n, r.textContent, r.innerHTML, s, e);
  }, 50);
}
function bs(n, e, t, r, s) {
  let i = Rh(n, e, t, r, n.state.selection.$from);
  if (n.someProp("handlePaste", (a) => a(n, s, i || z.empty)))
    return !0;
  if (!i)
    return !1;
  let o = $w(i), l = o ? n.state.tr.replaceSelectionWith(o, r) : n.state.tr.replaceSelection(i);
  return n.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function $h(n) {
  let e = n.getData("text/plain") || n.getData("Text");
  if (e)
    return e;
  let t = n.getData("text/uri-list");
  return t ? t.replace(/\r?\n/g, " ") : "";
}
st.paste = (n, e) => {
  let t = e;
  if (n.composing && !rn)
    return;
  let r = ys ? null : t.clipboardData, s = n.input.shiftKey && n.input.lastKeyCode != 45;
  r && bs(n, $h(r), r.getData("text/html"), s, t) ? t.preventDefault() : Vw(n, t);
};
class Vh {
  constructor(e, t, r) {
    this.slice = e, this.move = t, this.node = r;
  }
}
const Yw = bt ? "altKey" : "ctrlKey";
function Yh(n, e) {
  let t = n.someProp("dragCopies", (r) => !r(e));
  return t ?? !e[Yw];
}
rt.dragstart = (n, e) => {
  let t = e, r = n.input.mouseDown;
  if (r && r.done(), !t.dataTransfer)
    return;
  let s = n.state.selection, i = s.empty ? null : n.posAtCoords(xo(t)), o;
  if (!(i && i.pos >= s.from && i.pos <= (s instanceof $ ? s.to - 1 : s.to))) {
    if (r && r.mightDrag)
      o = $.create(n.state.doc, r.mightDrag.pos);
    else if (t.target && t.target.nodeType == 1) {
      let h = n.docView.nearestDesc(t.target, !0);
      h && h.node.type.spec.draggable && h != n.docView && (o = $.create(n.state.doc, h.posBefore));
    }
  }
  let l = (o || n.state.selection).content(), { dom: a, text: u, slice: d } = Za(n, l);
  (!t.dataTransfer.files.length || !je || mh > 120) && t.dataTransfer.clearData(), t.dataTransfer.setData(ys ? "Text" : "text/html", a.innerHTML), t.dataTransfer.effectAllowed = "copyMove", ys || t.dataTransfer.setData("text/plain", u), n.dragging = new Vh(d, Yh(n, t), o);
};
rt.dragend = (n) => {
  let e = n.dragging;
  window.setTimeout(() => {
    n.dragging == e && (n.dragging = null);
  }, 50);
};
st.dragover = st.dragenter = (n, e) => e.preventDefault();
st.drop = (n, e) => {
  try {
    jw(n, e, n.dragging);
  } finally {
    n.dragging = null;
  }
};
function jw(n, e, t) {
  if (!e.dataTransfer)
    return;
  let r = n.posAtCoords(xo(e));
  if (!r)
    return;
  let s = n.state.doc.resolve(r.pos), i = t && t.slice;
  i ? n.someProp("transformPasted", (g) => {
    i = g(i, n, !1);
  }) : i = Rh(n, $h(e.dataTransfer), ys ? null : e.dataTransfer.getData("text/html"), !1, s);
  let o = !!(t && Yh(n, e));
  if (n.someProp("handleDrop", (g) => g(n, e, i || z.empty, o))) {
    e.preventDefault();
    return;
  }
  if (!i)
    return;
  e.preventDefault();
  let l = i ? oh(n.state.doc, s.pos, i) : s.pos;
  l == null && (l = s.pos);
  let a = n.state.tr;
  if (o) {
    let { node: g } = t;
    g ? g.replace(a) : a.deleteSelection();
  }
  let u = a.mapping.map(l), d = i.openStart == 0 && i.openEnd == 0 && i.content.childCount == 1, h = a.doc;
  if (d ? a.replaceRangeWith(u, u, i.content.firstChild) : a.replaceRange(u, u, i), a.doc.eq(h))
    return;
  let p = a.doc.resolve(u);
  if (d && $.isSelectable(i.content.firstChild) && p.nodeAfter && p.nodeAfter.sameMarkup(i.content.firstChild))
    a.setSelection(new $(p));
  else {
    let g = a.mapping.map(l);
    a.mapping.maps[a.mapping.maps.length - 1].forEach((b, S, w, x) => g = x), a.setSelection(Qa(n, p, a.doc.resolve(g)));
  }
  n.focus(), n.dispatch(a.setMeta("uiEvent", "drop"));
}
rt.focus = (n) => {
  n.input.lastFocus = Date.now(), n.focused || (n.domObserver.stop(), n.dom.classList.add("ProseMirror-focused"), n.domObserver.start(), n.focused = !0, setTimeout(() => {
    n.docView && n.hasFocus() && !n.domObserver.currentSelection.eq(n.domSelectionRange()) && on(n);
  }, 20));
};
rt.blur = (n, e) => {
  let t = e;
  n.focused && (n.domObserver.stop(), n.dom.classList.remove("ProseMirror-focused"), n.domObserver.start(), t.relatedTarget && n.dom.contains(t.relatedTarget) && n.domObserver.currentSelection.clear(), n.focused = !1);
};
rt.beforeinput = (n, e) => {
  if (je && rn && e.inputType == "deleteContentBackward") {
    n.domObserver.flushSoon();
    let { domChangeCount: r } = n.input;
    setTimeout(() => {
      if (n.input.domChangeCount != r || (n.dom.blur(), n.focus(), n.someProp("handleKeyDown", (i) => i(n, Hn(8, "Backspace")))))
        return;
      let { $cursor: s } = n.state.selection;
      s && s.pos > 0 && n.dispatch(n.state.tr.delete(s.pos - 1, s.pos).scrollIntoView());
    }, 50);
  }
};
for (let n in st)
  rt[n] = st[n];
function Ss(n, e) {
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
class _i {
  constructor(e, t) {
    this.toDOM = e, this.spec = t || Jn, this.side = this.spec.side || 0;
  }
  map(e, t, r, s) {
    let { pos: i, deleted: o } = e.mapResult(t.from + s, this.side < 0 ? -1 : 1);
    return o ? null : new Qe(i - r, i - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof _i && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && Ss(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class An {
  constructor(e, t) {
    this.attrs = e, this.spec = t || Jn;
  }
  map(e, t, r, s) {
    let i = e.map(t.from + s, this.spec.inclusiveStart ? -1 : 1) - r, o = e.map(t.to + s, this.spec.inclusiveEnd ? 1 : -1) - r;
    return i >= o ? null : new Qe(i, o, this);
  }
  valid(e, t) {
    return t.from < t.to;
  }
  eq(e) {
    return this == e || e instanceof An && Ss(this.attrs, e.attrs) && Ss(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof An;
  }
  destroy() {
  }
}
class nc {
  constructor(e, t) {
    this.attrs = e, this.spec = t || Jn;
  }
  map(e, t, r, s) {
    let i = e.mapResult(t.from + s, 1);
    if (i.deleted)
      return null;
    let o = e.mapResult(t.to + s, -1);
    return o.deleted || o.pos <= i.pos ? null : new Qe(i.pos - r, o.pos - r, this);
  }
  valid(e, t) {
    let { index: r, offset: s } = e.content.findIndex(t.from), i;
    return s == t.from && !(i = e.child(r)).isText && s + i.nodeSize == t.to;
  }
  eq(e) {
    return this == e || e instanceof nc && Ss(this.attrs, e.attrs) && Ss(this.spec, e.spec);
  }
  destroy() {
  }
}
class Qe {
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
    return new Qe(e, t, this.type);
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
    return new Qe(e, e, new _i(t, r));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, t, r, s) {
    return new Qe(e, t, new An(r, s));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, t, r, s) {
    return new Qe(e, t, new nc(r, s));
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
    return this.type instanceof An;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof _i;
  }
}
const kr = [], Jn = {};
class Se {
  /**
  @internal
  */
  constructor(e, t) {
    this.local = e.length ? e : kr, this.children = t.length ? t : kr;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(e, t) {
    return t.length ? Pi(t, e, 0, Jn) : Je;
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
    let s = [];
    return this.findInner(e ?? 0, t ?? 1e9, s, 0, r), s;
  }
  findInner(e, t, r, s, i) {
    for (let o = 0; o < this.local.length; o++) {
      let l = this.local[o];
      l.from <= t && l.to >= e && (!i || i(l.spec)) && r.push(l.copy(l.from + s, l.to + s));
    }
    for (let o = 0; o < this.children.length; o += 3)
      if (this.children[o] < t && this.children[o + 1] > e) {
        let l = this.children[o] + 1;
        this.children[o + 2].findInner(e - l, t - l, r, s + l, i);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(e, t, r) {
    return this == Je || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, r || Jn);
  }
  /**
  @internal
  */
  mapInner(e, t, r, s, i) {
    let o;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l].map(e, r, s);
      a && a.type.valid(t, a) ? (o || (o = [])).push(a) : i.onRemove && i.onRemove(this.local[l].spec);
    }
    return this.children.length ? Uw(this.children, o || [], e, t, r, s, i) : o ? new Se(o.sort(Qn), kr) : Je;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(e, t) {
    return t.length ? this == Je ? Se.create(e, t) : this.addInner(e, t, 0) : this;
  }
  addInner(e, t, r) {
    let s, i = 0;
    e.forEach((l, a) => {
      let u = a + r, d;
      if (d = Uh(t, l, u)) {
        for (s || (s = this.children.slice()); i < s.length && s[i] < a; )
          i += 3;
        s[i] == a ? s[i + 2] = s[i + 2].addInner(l, d, u + 1) : s.splice(i, 0, a, a + l.nodeSize, Pi(d, l, u + 1, Jn)), i += 3;
      }
    });
    let o = jh(i ? qh(t) : t, -r);
    for (let l = 0; l < o.length; l++)
      o[l].type.valid(e, o[l]) || o.splice(l--, 1);
    return new Se(o.length ? this.local.concat(o).sort(Qn) : this.local, s || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == Je ? this : this.removeInner(e, 0);
  }
  removeInner(e, t) {
    let r = this.children, s = this.local;
    for (let i = 0; i < r.length; i += 3) {
      let o, l = r[i] + t, a = r[i + 1] + t;
      for (let d = 0, h; d < e.length; d++)
        (h = e[d]) && h.from > l && h.to < a && (e[d] = null, (o || (o = [])).push(h));
      if (!o)
        continue;
      r == this.children && (r = this.children.slice());
      let u = r[i + 2].removeInner(o, l + 1);
      u != Je ? r[i + 2] = u : (r.splice(i, 3), i -= 3);
    }
    if (s.length) {
      for (let i = 0, o; i < e.length; i++)
        if (o = e[i])
          for (let l = 0; l < s.length; l++)
            s[l].eq(o, t) && (s == this.local && (s = this.local.slice()), s.splice(l--, 1));
    }
    return r == this.children && s == this.local ? this : s.length || r.length ? new Se(s, r) : Je;
  }
  forChild(e, t) {
    if (this == Je)
      return this;
    if (t.isLeaf)
      return Se.empty;
    let r, s;
    for (let l = 0; l < this.children.length; l += 3)
      if (this.children[l] >= e) {
        this.children[l] == e && (r = this.children[l + 2]);
        break;
      }
    let i = e + 1, o = i + t.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < o && a.to > i && a.type instanceof An) {
        let u = Math.max(i, a.from) - i, d = Math.min(o, a.to) - i;
        u < d && (s || (s = [])).push(a.copy(u, d));
      }
    }
    if (s) {
      let l = new Se(s.sort(Qn), kr);
      return r ? new Sn([l, r]) : l;
    }
    return r || Je;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof Se) || this.local.length != e.local.length || this.children.length != e.children.length)
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
    return rc(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == Je)
      return kr;
    if (e.inlineContent || !this.local.some(An.is))
      return this.local;
    let t = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof An || t.push(this.local[r]);
    return t;
  }
  forEachSet(e) {
    e(this);
  }
}
Se.empty = new Se([], []);
Se.removeOverlap = rc;
const Je = Se.empty;
class Sn {
  constructor(e) {
    this.members = e;
  }
  map(e, t) {
    const r = this.members.map((s) => s.map(e, t, Jn));
    return Sn.from(r);
  }
  forChild(e, t) {
    if (t.isLeaf)
      return Se.empty;
    let r = [];
    for (let s = 0; s < this.members.length; s++) {
      let i = this.members[s].forChild(e, t);
      i != Je && (i instanceof Sn ? r = r.concat(i.members) : r.push(i));
    }
    return Sn.from(r);
  }
  eq(e) {
    if (!(e instanceof Sn) || e.members.length != this.members.length)
      return !1;
    for (let t = 0; t < this.members.length; t++)
      if (!this.members[t].eq(e.members[t]))
        return !1;
    return !0;
  }
  locals(e) {
    let t, r = !0;
    for (let s = 0; s < this.members.length; s++) {
      let i = this.members[s].localsInner(e);
      if (i.length)
        if (!t)
          t = i;
        else {
          r && (t = t.slice(), r = !1);
          for (let o = 0; o < i.length; o++)
            t.push(i[o]);
        }
    }
    return t ? rc(r ? t : t.sort(Qn)) : kr;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return Je;
      case 1:
        return e[0];
      default:
        return new Sn(e.every((t) => t instanceof Se) ? e : e.reduce((t, r) => t.concat(r instanceof Se ? r : r.members), []));
    }
  }
  forEachSet(e) {
    for (let t = 0; t < this.members.length; t++)
      this.members[t].forEachSet(e);
  }
}
function Uw(n, e, t, r, s, i, o) {
  let l = n.slice();
  for (let u = 0, d = i; u < t.maps.length; u++) {
    let h = 0;
    t.maps[u].forEach((p, g, b, S) => {
      let w = S - b - (g - p);
      for (let x = 0; x < l.length; x += 3) {
        let v = l[x + 1];
        if (v < 0 || p > v + d - h)
          continue;
        let T = l[x] + d - h;
        g >= T ? l[x + 1] = p <= T ? -2 : -1 : p >= d && w && (l[x] += w, l[x + 1] += w);
      }
      h += w;
    }), d = t.maps[u].map(d, -1);
  }
  let a = !1;
  for (let u = 0; u < l.length; u += 3)
    if (l[u + 1] < 0) {
      if (l[u + 1] == -2) {
        a = !0, l[u + 1] = -1;
        continue;
      }
      let d = t.map(n[u] + i), h = d - s;
      if (h < 0 || h >= r.content.size) {
        a = !0;
        continue;
      }
      let p = t.map(n[u + 1] + i, -1), g = p - s, { index: b, offset: S } = r.content.findIndex(h), w = r.maybeChild(b);
      if (w && S == h && S + w.nodeSize == g) {
        let x = l[u + 2].mapInner(t, w, d + 1, n[u] + i + 1, o);
        x != Je ? (l[u] = h, l[u + 1] = g, l[u + 2] = x) : (l[u + 1] = -2, a = !0);
      } else
        a = !0;
    }
  if (a) {
    let u = qw(l, n, e, t, s, i, o), d = Pi(u, r, 0, o);
    e = d.local;
    for (let h = 0; h < l.length; h += 3)
      l[h + 1] < 0 && (l.splice(h, 3), h -= 3);
    for (let h = 0, p = 0; h < d.children.length; h += 3) {
      let g = d.children[h];
      for (; p < l.length && l[p] < g; )
        p += 3;
      l.splice(p, 0, d.children[h], d.children[h + 1], d.children[h + 2]);
    }
  }
  return new Se(e.sort(Qn), l);
}
function jh(n, e) {
  if (!e || !n.length)
    return n;
  let t = [];
  for (let r = 0; r < n.length; r++) {
    let s = n[r];
    t.push(new Qe(s.from + e, s.to + e, s.type));
  }
  return t;
}
function qw(n, e, t, r, s, i, o) {
  function l(a, u) {
    for (let d = 0; d < a.local.length; d++) {
      let h = a.local[d].map(r, s, u);
      h ? t.push(h) : o.onRemove && o.onRemove(a.local[d].spec);
    }
    for (let d = 0; d < a.children.length; d += 3)
      l(a.children[d + 2], a.children[d] + u + 1);
  }
  for (let a = 0; a < n.length; a += 3)
    n[a + 1] == -1 && l(n[a + 2], e[a] + i + 1);
  return t;
}
function Uh(n, e, t) {
  if (e.isLeaf)
    return null;
  let r = t + e.nodeSize, s = null;
  for (let i = 0, o; i < n.length; i++)
    (o = n[i]) && o.from > t && o.to < r && ((s || (s = [])).push(o), n[i] = null);
  return s;
}
function qh(n) {
  let e = [];
  for (let t = 0; t < n.length; t++)
    n[t] != null && e.push(n[t]);
  return e;
}
function Pi(n, e, t, r) {
  let s = [], i = !1;
  e.forEach((l, a) => {
    let u = Uh(n, l, a + t);
    if (u) {
      i = !0;
      let d = Pi(u, l, t + a + 1, r);
      d != Je && s.push(a, a + l.nodeSize, d);
    }
  });
  let o = jh(i ? qh(n) : n, -t).sort(Qn);
  for (let l = 0; l < o.length; l++)
    o[l].type.valid(e, o[l]) || (r.onRemove && r.onRemove(o[l].spec), o.splice(l--, 1));
  return o.length || s.length ? new Se(o, s) : Je;
}
function Qn(n, e) {
  return n.from - e.from || n.to - e.to;
}
function rc(n) {
  let e = n;
  for (let t = 0; t < e.length - 1; t++) {
    let r = e[t];
    if (r.from != r.to)
      for (let s = t + 1; s < e.length; s++) {
        let i = e[s];
        if (i.from == r.from) {
          i.to != r.to && (e == n && (e = n.slice()), e[s] = i.copy(i.from, r.to), od(e, s + 1, i.copy(r.to, i.to)));
          continue;
        } else {
          i.from < r.to && (e == n && (e = n.slice()), e[t] = r.copy(r.from, i.from), od(e, s, r.copy(i.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function od(n, e, t) {
  for (; e < n.length && Qn(t, n[e]) > 0; )
    e++;
  n.splice(e, 0, t);
}
function vl(n) {
  let e = [];
  return n.someProp("decorations", (t) => {
    let r = t(n.state);
    r && r != Je && e.push(r);
  }), n.cursorWrapper && e.push(Se.create(n.state.doc, [n.cursorWrapper.deco])), Sn.from(e);
}
const Kw = {
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0,
  attributes: !0,
  attributeOldValue: !0,
  subtree: !0
}, Gw = ut && On <= 11;
class Jw {
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
class Qw {
  constructor(e, t) {
    this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new Jw(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver((r) => {
      for (let s = 0; s < r.length; s++)
        this.queue.push(r[s]);
      ut && On <= 11 && r.some((s) => s.type == "childList" && s.removedNodes.length || s.type == "characterData" && s.oldValue.length > s.target.nodeValue.length) ? this.flushSoon() : Ze && e.composing && r.some((s) => s.type == "childList" && s.target.nodeName == "TR") ? (e.input.badSafariComposition = !0, this.flushSoon()) : this.flush();
    }), Gw && (this.onCharData = (r) => {
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
    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, Kw)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
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
    if (Zu(this.view)) {
      if (this.suppressingSelectionUpdates)
        return on(this.view);
      if (ut && On <= 11 && !this.view.state.selection.empty) {
        let e = this.view.domSelectionRange();
        if (e.focusNode && tr(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
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
    for (let i = e.focusNode; i; i = Nr(i))
      t.add(i);
    for (let i = e.anchorNode; i; i = Nr(i))
      if (t.has(i)) {
        r = i;
        break;
      }
    let s = r && this.view.docView.nearestDesc(r);
    if (s && s.ignoreMutation({
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
    let r = e.domSelectionRange(), s = !this.suppressingSelectionUpdates && !this.currentSelection.eq(r) && Zu(e) && !this.ignoreSelectionChange(r), i = -1, o = -1, l = !1, a = [];
    if (e.editable)
      for (let d = 0; d < t.length; d++) {
        let h = this.registerMutation(t[d], a);
        h && (i = i < 0 ? h.from : Math.min(h.from, i), o = o < 0 ? h.to : Math.max(h.to, o), h.typeOver && (l = !0));
      }
    if (a.some((d) => d.nodeName == "BR") && (e.input.lastKeyCode == 8 || e.input.lastKeyCode == 46)) {
      for (let d of a)
        if (d.nodeName == "BR" && d.parentNode) {
          let h = d.nextSibling;
          h && h.nodeType == 1 && h.contentEditable == "false" && d.parentNode.removeChild(d);
        }
    } else if (wt && a.length) {
      let d = a.filter((h) => h.nodeName == "BR");
      if (d.length == 2) {
        let [h, p] = d;
        h.parentNode && h.parentNode.parentNode == p.parentNode ? p.remove() : h.remove();
      } else {
        let { focusNode: h } = this.currentSelection;
        for (let p of d) {
          let g = p.parentNode;
          g && g.nodeName == "LI" && (!h || ek(e, h) != g) && p.remove();
        }
      }
    }
    let u = null;
    i < 0 && s && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && wo(r) && (u = Ja(e)) && u.eq(U.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, on(e), this.currentSelection.set(r), e.scrollToSelection()) : (i > -1 || s) && (i > -1 && (e.docView.markDirty(i, o), Zw(e)), e.input.badSafariComposition && (e.input.badSafariComposition = !1, tk(e, a)), this.handleDOMChange(i, o, l, a), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(r) || on(e), this.currentSelection.set(r));
  }
  registerMutation(e, t) {
    if (t.indexOf(e.target) > -1)
      return null;
    let r = this.view.docView.nearestDesc(e.target);
    if (e.type == "attributes" && (r == this.view.docView || e.attributeName == "contenteditable" || // Firefox sometimes fires spurious events for null/empty styles
    e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !r || r.ignoreMutation(e))
      return null;
    if (e.type == "childList") {
      for (let d = 0; d < e.addedNodes.length; d++) {
        let h = e.addedNodes[d];
        t.push(h), h.nodeType == 3 && (this.lastChangedTextNode = h);
      }
      if (r.contentDOM && r.contentDOM != r.dom && !r.contentDOM.contains(e.target))
        return { from: r.posBefore, to: r.posAfter };
      let s = e.previousSibling, i = e.nextSibling;
      if (ut && On <= 11 && e.addedNodes.length)
        for (let d = 0; d < e.addedNodes.length; d++) {
          let { previousSibling: h, nextSibling: p } = e.addedNodes[d];
          (!h || Array.prototype.indexOf.call(e.addedNodes, h) < 0) && (s = h), (!p || Array.prototype.indexOf.call(e.addedNodes, p) < 0) && (i = p);
        }
      let o = s && s.parentNode == e.target ? $e(s) + 1 : 0, l = r.localPosFromDOM(e.target, o, -1), a = i && i.parentNode == e.target ? $e(i) : e.target.childNodes.length, u = r.localPosFromDOM(e.target, a, 1);
      return { from: l, to: u };
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
let ld = /* @__PURE__ */ new WeakMap(), ad = !1;
function Zw(n) {
  if (!ld.has(n) && (ld.set(n, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(n.dom).whiteSpace) !== -1)) {
    if (n.requiresGeckoHackNode = wt, ad)
      return;
    console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), ad = !0;
  }
}
function cd(n, e) {
  let t = e.startContainer, r = e.startOffset, s = e.endContainer, i = e.endOffset, o = n.domAtPos(n.state.selection.anchor);
  return tr(o.node, o.offset, s, i) && ([t, r, s, i] = [s, i, t, r]), { anchorNode: t, anchorOffset: r, focusNode: s, focusOffset: i };
}
function Xw(n, e) {
  if (e.getComposedRanges) {
    let s = e.getComposedRanges(n.root)[0];
    if (s)
      return cd(n, s);
  }
  let t;
  function r(s) {
    s.preventDefault(), s.stopImmediatePropagation(), t = s.getTargetRanges()[0];
  }
  return n.dom.addEventListener("beforeinput", r, !0), document.execCommand("indent"), n.dom.removeEventListener("beforeinput", r, !0), t ? cd(n, t) : null;
}
function ek(n, e) {
  for (let t = e.parentNode; t && t != n.dom; t = t.parentNode) {
    let r = n.docView.nearestDesc(t, !0);
    if (r && r.node.isBlock)
      return t;
  }
  return null;
}
function tk(n, e) {
  var t;
  let { focusNode: r, focusOffset: s } = n.domSelectionRange();
  for (let i of e)
    if (((t = i.parentNode) === null || t === void 0 ? void 0 : t.nodeName) == "TR") {
      let o = i.nextSibling;
      for (; o && o.nodeName != "TD" && o.nodeName != "TH"; )
        o = o.nextSibling;
      if (o) {
        let l = o;
        for (; ; ) {
          let a = l.firstChild;
          if (!a || a.nodeType != 1 || a.contentEditable == "false" || /^(BR|IMG)$/.test(a.nodeName))
            break;
          l = a;
        }
        l.insertBefore(i, l.firstChild), r == i && n.domSelection().collapse(i, s);
      } else
        i.parentNode.removeChild(i);
    }
}
function nk(n, e, t) {
  let { node: r, fromOffset: s, toOffset: i, from: o, to: l } = n.docView.parseRange(e, t), a = n.domSelectionRange(), u, d = a.anchorNode;
  if (d && n.dom.contains(d.nodeType == 1 ? d : d.parentNode) && (u = [{ node: d, offset: a.anchorOffset }], wo(a) || u.push({ node: a.focusNode, offset: a.focusOffset })), je && n.input.lastKeyCode === 8)
    for (let w = i; w > s; w--) {
      let x = r.childNodes[w - 1], v = x.pmViewDesc;
      if (x.nodeName == "BR" && !v) {
        i = w;
        break;
      }
      if (!v || v.size)
        break;
    }
  let h = n.state.doc, p = n.someProp("domParser") || Tn.fromSchema(n.state.schema), g = h.resolve(o), b = null, S = p.parse(r, {
    topNode: g.parent,
    topMatch: g.parent.contentMatchAt(g.index()),
    topOpen: !0,
    from: s,
    to: i,
    preserveWhitespace: g.parent.type.whitespace == "pre" ? "full" : !0,
    findPositions: u,
    ruleFromNode: rk,
    context: g
  });
  if (u && u[0].pos != null) {
    let w = u[0].pos, x = u[1] && u[1].pos;
    x == null && (x = w), b = { anchor: w + o, head: x + o };
  }
  return { doc: S, sel: b, from: o, to: l };
}
function rk(n) {
  let e = n.pmViewDesc;
  if (e)
    return e.parseRule();
  if (n.nodeName == "BR" && n.parentNode) {
    if (Ze && /^(ul|ol)$/i.test(n.parentNode.nodeName)) {
      let t = document.createElement("div");
      return t.appendChild(document.createElement("li")), { skip: t };
    } else if (n.parentNode.lastChild == n || Ze && /^(tr|table)$/i.test(n.parentNode.nodeName))
      return { ignore: !0 };
  } else if (n.nodeName == "IMG" && n.getAttribute("mark-placeholder"))
    return { ignore: !0 };
  return null;
}
const sk = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function ik(n, e, t, r, s) {
  let i = n.input.compositionPendingChanges || (n.composing ? n.input.compositionID : 0);
  if (n.input.compositionPendingChanges = 0, e < 0) {
    let O = n.input.lastSelectionTime > Date.now() - 50 ? n.input.lastSelectionOrigin : null, L = Ja(n, O);
    if (L && !n.state.selection.eq(L)) {
      if (je && rn && n.input.lastKeyCode === 13 && Date.now() - 100 < n.input.lastKeyCodeTime && n.someProp("handleKeyDown", (te) => te(n, Hn(13, "Enter"))))
        return;
      let Y = n.state.tr.setSelection(L);
      O == "pointer" ? Y.setMeta("pointer", !0) : O == "key" && Y.scrollIntoView(), i && Y.setMeta("composition", i), n.dispatch(Y);
    }
    return;
  }
  let o = n.state.doc.resolve(e), l = o.sharedDepth(t);
  e = o.before(l + 1), t = n.state.doc.resolve(t).after(l + 1);
  let a = n.state.selection, u = nk(n, e, t), d = n.state.doc, h = d.slice(u.from, u.to), p, g;
  n.input.lastKeyCode === 8 && Date.now() - 100 < n.input.lastKeyCodeTime ? (p = n.state.selection.to, g = "end") : (p = n.state.selection.from, g = "start"), n.input.lastKeyCode = null;
  let b = ak(h.content, u.doc.content, u.from, p, g);
  if (b && n.input.domChangeCount++, (Rr && n.input.lastIOSEnter > Date.now() - 225 || rn) && s.some((O) => O.nodeType == 1 && !sk.test(O.nodeName)) && (!b || b.endA >= b.endB) && n.someProp("handleKeyDown", (O) => O(n, Hn(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (!b)
    if (r && a instanceof V && !a.empty && a.$head.sameParent(a.$anchor) && !n.composing && !(u.sel && u.sel.anchor != u.sel.head))
      b = { start: a.from, endA: a.to, endB: a.to };
    else {
      if (u.sel) {
        let O = ud(n, n.state.doc, u.sel);
        if (O && !O.eq(n.state.selection)) {
          let L = n.state.tr.setSelection(O);
          i && L.setMeta("composition", i), n.dispatch(L);
        }
      }
      return;
    }
  n.state.selection.from < n.state.selection.to && b.start == b.endB && n.state.selection instanceof V && (b.start > n.state.selection.from && b.start <= n.state.selection.from + 2 && n.state.selection.from >= u.from ? b.start = n.state.selection.from : b.endA < n.state.selection.to && b.endA >= n.state.selection.to - 2 && n.state.selection.to <= u.to && (b.endB += n.state.selection.to - b.endA, b.endA = n.state.selection.to)), ut && On <= 11 && b.endB == b.start + 1 && b.endA == b.start && b.start > u.from && u.doc.textBetween(b.start - u.from - 1, b.start - u.from + 1) == "  " && (b.start--, b.endA--, b.endB--);
  let S = u.doc.resolveNoCache(b.start - u.from), w = u.doc.resolveNoCache(b.endB - u.from), x = d.resolve(b.start), v = S.sameParent(w) && S.parent.inlineContent && x.end() >= b.endA;
  if ((Rr && n.input.lastIOSEnter > Date.now() - 225 && (!v || s.some((O) => O.nodeName == "DIV" || O.nodeName == "P")) || !v && S.pos < u.doc.content.size && (!S.sameParent(w) || !S.parent.inlineContent) && S.pos < w.pos && !/\S/.test(u.doc.textBetween(S.pos, w.pos, "", ""))) && n.someProp("handleKeyDown", (O) => O(n, Hn(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (n.state.selection.anchor > b.start && lk(d, b.start, b.endA, S, w) && n.someProp("handleKeyDown", (O) => O(n, Hn(8, "Backspace")))) {
    rn && je && n.domObserver.suppressSelectionUpdates();
    return;
  }
  je && b.endB == b.start && (n.input.lastChromeDelete = Date.now()), rn && !v && S.start() != w.start() && w.parentOffset == 0 && S.depth == w.depth && u.sel && u.sel.anchor == u.sel.head && u.sel.head == b.endA && (b.endB -= 2, w = u.doc.resolveNoCache(b.endB - u.from), setTimeout(() => {
    n.someProp("handleKeyDown", function(O) {
      return O(n, Hn(13, "Enter"));
    });
  }, 20));
  let T = b.start, D = b.endA, A = (O) => {
    let L = O || n.state.tr.replace(T, D, u.doc.slice(b.start - u.from, b.endB - u.from));
    if (u.sel) {
      let Y = ud(n, L.doc, u.sel);
      Y && !(je && n.composing && Y.empty && (b.start != b.endB || n.input.lastChromeDelete < Date.now() - 100) && (Y.head == T || Y.head == L.mapping.map(D) - 1) || ut && Y.empty && Y.head == T) && L.setSelection(Y);
    }
    return i && L.setMeta("composition", i), L.scrollIntoView();
  }, R;
  if (v)
    if (S.pos == w.pos) {
      ut && On <= 11 && S.parentOffset == 0 && (n.domObserver.suppressSelectionUpdates(), setTimeout(() => on(n), 20));
      let O = A(n.state.tr.delete(T, D)), L = d.resolve(b.start).marksAcross(d.resolve(b.endA));
      L && O.ensureMarks(L), n.dispatch(O);
    } else if (
      // Adding or removing a mark
      b.endA == b.endB && (R = ok(S.parent.content.cut(S.parentOffset, w.parentOffset), x.parent.content.cut(x.parentOffset, b.endA - x.start())))
    ) {
      let O = A(n.state.tr);
      R.type == "add" ? O.addMark(T, D, R.mark) : O.removeMark(T, D, R.mark), n.dispatch(O);
    } else if (S.parent.child(S.index()).isText && S.index() == w.index() - (w.textOffset ? 0 : 1)) {
      let O = S.parent.textBetween(S.parentOffset, w.parentOffset), L = () => A(n.state.tr.insertText(O, T, D));
      n.someProp("handleTextInput", (Y) => Y(n, T, D, O, L)) || n.dispatch(L());
    } else
      n.dispatch(A());
  else
    n.dispatch(A());
}
function ud(n, e, t) {
  return Math.max(t.anchor, t.head) > e.content.size ? null : Qa(n, e.resolve(t.anchor), e.resolve(t.head));
}
function ok(n, e) {
  let t = n.firstChild.marks, r = e.firstChild.marks, s = t, i = r, o, l, a;
  for (let d = 0; d < r.length; d++)
    s = r[d].removeFromSet(s);
  for (let d = 0; d < t.length; d++)
    i = t[d].removeFromSet(i);
  if (s.length == 1 && i.length == 0)
    l = s[0], o = "add", a = (d) => d.mark(l.addToSet(d.marks));
  else if (s.length == 0 && i.length == 1)
    l = i[0], o = "remove", a = (d) => d.mark(l.removeFromSet(d.marks));
  else
    return null;
  let u = [];
  for (let d = 0; d < e.childCount; d++)
    u.push(a(e.child(d)));
  if (N.from(u).eq(n))
    return { mark: l, type: o };
}
function lk(n, e, t, r, s) {
  if (
    // The content must have shrunk
    t - e <= s.pos - r.pos || // newEnd must point directly at or after the end of the block that newStart points into
    Tl(r, !0, !1) < s.pos
  )
    return !1;
  let i = n.resolve(e);
  if (!r.parent.isTextblock) {
    let l = i.nodeAfter;
    return l != null && t == e + l.nodeSize;
  }
  if (i.parentOffset < i.parent.content.size || !i.parent.isTextblock)
    return !1;
  let o = n.resolve(Tl(i, !0, !0));
  return !o.parent.isTextblock || o.pos > t || Tl(o, !0, !1) < t ? !1 : r.parent.content.cut(r.parentOffset).eq(o.parent.content);
}
function Tl(n, e, t) {
  let r = n.depth, s = e ? n.end() : n.pos;
  for (; r > 0 && (e || n.indexAfter(r) == n.node(r).childCount); )
    r--, s++, e = !1;
  if (t) {
    let i = n.node(r).maybeChild(n.indexAfter(r));
    for (; i && !i.isLeaf; )
      i = i.firstChild, s++;
  }
  return s;
}
function ak(n, e, t, r, s) {
  let i = n.findDiffStart(e, t);
  if (i == null)
    return null;
  let { a: o, b: l } = n.findDiffEnd(e, t + n.size, t + e.size);
  if (s == "end") {
    let a = Math.max(0, i - Math.min(o, l));
    r -= o + a - i;
  }
  if (o < i && n.size < e.size) {
    let a = r <= i && r >= o ? i - r : 0;
    i -= a, i && i < e.size && dd(e.textBetween(i - 1, i + 1)) && (i += a ? 1 : -1), l = i + (l - o), o = i;
  } else if (l < i) {
    let a = r <= i && r >= l ? i - r : 0;
    i -= a, i && i < n.size && dd(n.textBetween(i - 1, i + 1)) && (i += a ? 1 : -1), o = i + (o - l), l = i;
  }
  return { start: i, endA: o, endB: l };
}
function dd(n) {
  if (n.length != 2)
    return !1;
  let e = n.charCodeAt(0), t = n.charCodeAt(1);
  return e >= 56320 && e <= 57343 && t >= 55296 && t <= 56319;
}
class Kh {
  /**
  Create a view. `place` may be a DOM node that the editor should
  be appended to, a function that will place it into the document,
  or an object whose `mount` property holds the node to use as the
  document container. If it is `null`, the editor will not be
  added to the document.
  */
  constructor(e, t) {
    this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new Mw(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(gd), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = pd(this), hd(this), this.nodeViews = md(this), this.docView = Uu(this.state.doc, fd(this), vl(this), this.dom, this), this.domObserver = new Qw(this, (r, s, i, o) => ik(this, r, s, i, o)), this.domObserver.start(), vw(this), this.updatePluginViews();
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
    e.handleDOMEvents != this._props.handleDOMEvents && ha(this);
    let t = this._props;
    this._props = e, e.plugins && (e.plugins.forEach(gd), this.directPlugins = e.plugins), this.updateStateInner(e.state, t);
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
    let s = this.state, i = !1, o = !1;
    e.storedMarks && this.composing && (Wh(this), o = !0), this.state = e;
    let l = s.plugins != e.plugins || this._props.plugins != t.plugins;
    if (l || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
      let g = md(this);
      uk(g, this.nodeViews) && (this.nodeViews = g, i = !0);
    }
    (l || t.handleDOMEvents != this._props.handleDOMEvents) && ha(this), this.editable = pd(this), hd(this);
    let a = vl(this), u = fd(this), d = s.plugins != e.plugins && !s.doc.eq(e.doc) ? "reset" : e.scrollToSelection > s.scrollToSelection ? "to selection" : "preserve", h = i || !this.docView.matchesNode(e.doc, u, a);
    (h || !e.selection.eq(s.selection)) && (o = !0);
    let p = d == "preserve" && o && this.dom.style.overflowAnchor == null && BS(this);
    if (o) {
      this.domObserver.stop();
      let g = h && (ut || je) && !this.composing && !s.selection.empty && !e.selection.empty && ck(s.selection, e.selection);
      if (h) {
        let b = je ? this.trackWrites = this.domSelectionRange().focusNode : null;
        this.composing && (this.input.compositionNode = Bw(this)), (i || !this.docView.update(e.doc, u, a, this)) && (this.docView.updateOuterDeco(u), this.docView.destroy(), this.docView = Uu(e.doc, u, a, this.dom, this)), b && (!this.trackWrites || !this.dom.contains(this.trackWrites)) && (g = !0);
      }
      g || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && cw(this)) ? on(this, g) : (Ah(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
    }
    this.updatePluginViews(s), !((r = this.dragging) === null || r === void 0) && r.node && !s.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, s), d == "reset" ? this.dom.scrollTop = 0 : d == "to selection" ? this.scrollToSelection() : p && HS(p);
  }
  /**
  @internal
  */
  scrollToSelection() {
    let e = this.domSelectionRange().focusNode;
    if (!(!e || !this.dom.contains(e.nodeType == 1 ? e : e.parentNode))) {
      if (!this.someProp("handleScrollToSelection", (t) => t(this))) if (this.state.selection instanceof $) {
        let t = this.docView.domAfterPos(this.state.selection.from);
        t.nodeType == 1 && Hu(this, t.getBoundingClientRect(), e);
      } else
        Hu(this, this.coordsAtPos(this.state.selection.head, 1), e);
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
    let r = e.node, s = -1;
    if (this.state.doc.nodeAt(r.from) == r.node)
      s = r.from;
    else {
      let i = r.from + (this.state.doc.content.size - t.doc.content.size);
      (i > 0 && this.state.doc.nodeAt(i)) == r.node && (s = i);
    }
    this.dragging = new Vh(e.slice, e.move, s < 0 ? void 0 : $.create(this.state.doc, s));
  }
  someProp(e, t) {
    let r = this._props && this._props[e], s;
    if (r != null && (s = t ? t(r) : r))
      return s;
    for (let o = 0; o < this.directPlugins.length; o++) {
      let l = this.directPlugins[o].props[e];
      if (l != null && (s = t ? t(l) : l))
        return s;
    }
    let i = this.state.plugins;
    if (i)
      for (let o = 0; o < i.length; o++) {
        let l = i[o].props[e];
        if (l != null && (s = t ? t(l) : l))
          return s;
      }
  }
  /**
  Query whether the view has focus.
  */
  hasFocus() {
    if (ut) {
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
    this.domObserver.stop(), this.editable && WS(this.dom), on(this), this.domObserver.start();
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
    return US(this, e);
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
    return kh(this, e, t);
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
    let s = this.docView.posFromDOM(e, t, r);
    if (s == null)
      throw new RangeError("DOM position not inside the editor");
    return s;
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
    return QS(this, t || this.state, e);
  }
  /**
  Run the editor's paste logic with the given HTML string. The
  `event`, if given, will be passed to the
  [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
  */
  pasteHTML(e, t) {
    return bs(this, "", e, !1, t || new ClipboardEvent("paste"));
  }
  /**
  Run the editor's paste logic with the given plain-text input.
  */
  pasteText(e, t) {
    return bs(this, e, null, !0, t || new ClipboardEvent("paste"));
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
    return Za(this, e);
  }
  /**
  Removes the editor from the DOM and destroys all [node
  views](https://prosemirror.net/docs/ref/#view.NodeView).
  */
  destroy() {
    this.docView && (Tw(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], vl(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, AS());
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
    return Ew(this, e);
  }
  /**
  @internal
  */
  domSelectionRange() {
    let e = this.domSelection();
    return e ? Ze && this.root.nodeType === 11 && _S(this.dom.ownerDocument) == this.dom && Xw(this, e) || e : { focusNode: null, focusOffset: 0, anchorNode: null, anchorOffset: 0 };
  }
  /**
  @internal
  */
  domSelection() {
    return this.root.getSelection();
  }
}
Kh.prototype.dispatch = function(n) {
  let e = this._props.dispatchTransaction;
  e ? e.call(this, n) : this.updateState(this.state.apply(n));
};
function fd(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return e.class = "ProseMirror", e.contenteditable = String(n.editable), n.someProp("attributes", (t) => {
    if (typeof t == "function" && (t = t(n.state)), t)
      for (let r in t)
        r == "class" ? e.class += " " + t[r] : r == "style" ? e.style = (e.style ? e.style + ";" : "") + t[r] : !e[r] && r != "contenteditable" && r != "nodeName" && (e[r] = String(t[r]));
  }), e.translate || (e.translate = "no"), [Qe.node(0, n.state.doc.content.size, e)];
}
function hd(n) {
  if (n.markCursor) {
    let e = document.createElement("img");
    e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), n.cursorWrapper = { dom: e, deco: Qe.widget(n.state.selection.from, e, { raw: !0, marks: n.markCursor }) };
  } else
    n.cursorWrapper = null;
}
function pd(n) {
  return !n.someProp("editable", (e) => e(n.state) === !1);
}
function ck(n, e) {
  let t = Math.min(n.$anchor.sharedDepth(n.head), e.$anchor.sharedDepth(e.head));
  return n.$anchor.start(t) != e.$anchor.start(t);
}
function md(n) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(r) {
    for (let s in r)
      Object.prototype.hasOwnProperty.call(e, s) || (e[s] = r[s]);
  }
  return n.someProp("nodeViews", t), n.someProp("markViews", t), e;
}
function uk(n, e) {
  let t = 0, r = 0;
  for (let s in n) {
    if (n[s] != e[s])
      return !0;
    t++;
  }
  for (let s in e)
    r++;
  return t != r;
}
function gd(n) {
  if (n.spec.state || n.spec.filterTransaction || n.spec.appendTransaction)
    throw new RangeError("Plugins passed directly to the view must not have a state component");
}
var Dn = {
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
}, Li = {
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
}, dk = typeof navigator < "u" && /Mac/.test(navigator.platform), fk = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var Ve = 0; Ve < 10; Ve++) Dn[48 + Ve] = Dn[96 + Ve] = String(Ve);
for (var Ve = 1; Ve <= 24; Ve++) Dn[Ve + 111] = "F" + Ve;
for (var Ve = 65; Ve <= 90; Ve++)
  Dn[Ve] = String.fromCharCode(Ve + 32), Li[Ve] = String.fromCharCode(Ve);
for (var Ol in Dn) Li.hasOwnProperty(Ol) || (Li[Ol] = Dn[Ol]);
function hk(n) {
  var e = dk && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || fk && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? Li : Dn)[n.keyCode] || n.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
const pk = typeof navigator < "u" && /Mac|iP(hone|[oa]d)/.test(navigator.platform), mk = typeof navigator < "u" && /Win/.test(navigator.platform);
function gk(n) {
  let e = n.split(/-(?!$)/), t = e[e.length - 1];
  t == "Space" && (t = " ");
  let r, s, i, o;
  for (let l = 0; l < e.length - 1; l++) {
    let a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      o = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      s = !0;
    else if (/^s(hift)?$/i.test(a))
      i = !0;
    else if (/^mod$/i.test(a))
      pk ? o = !0 : s = !0;
    else
      throw new Error("Unrecognized modifier name: " + a);
  }
  return r && (t = "Alt-" + t), s && (t = "Ctrl-" + t), o && (t = "Meta-" + t), i && (t = "Shift-" + t), t;
}
function yk(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n)
    e[gk(t)] = n[t];
  return e;
}
function El(n, e, t = !0) {
  return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t && e.shiftKey && (n = "Shift-" + n), n;
}
function bk(n) {
  return new Ne({ props: { handleKeyDown: sc(n) } });
}
function sc(n) {
  let e = yk(n);
  return function(t, r) {
    let s = hk(r), i, o = e[El(s, r)];
    if (o && o(t.state, t.dispatch, t))
      return !0;
    if (s.length == 1 && s != " ") {
      if (r.shiftKey) {
        let l = e[El(s, r, !1)];
        if (l && l(t.state, t.dispatch, t))
          return !0;
      }
      if ((r.altKey || r.metaKey || r.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
      !(mk && r.ctrlKey && r.altKey) && (i = Dn[r.keyCode]) && i != s) {
        let l = e[El(i, r)];
        if (l && l(t.state, t.dispatch, t))
          return !0;
      }
    }
    return !1;
  };
}
const ic = (n, e) => n.selection.empty ? !1 : (e && e(n.tr.deleteSelection().scrollIntoView()), !0);
function Gh(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("backward", n) : t.parentOffset > 0) ? null : t;
}
const Jh = (n, e, t) => {
  let r = Gh(n, t);
  if (!r)
    return !1;
  let s = oc(r);
  if (!s) {
    let o = r.blockRange(), l = o && Pr(o);
    return l == null ? !1 : (e && e(n.tr.lift(o, l).scrollIntoView()), !0);
  }
  let i = s.nodeBefore;
  if (ip(n, s, e, -1))
    return !0;
  if (r.parent.content.size == 0 && (Ir(i, "end") || $.isSelectable(i)))
    for (let o = r.depth; ; o--) {
      let l = bo(n.doc, r.before(o), r.after(o), z.empty);
      if (l && l.slice.size < l.to - l.from) {
        if (e) {
          let a = n.tr.step(l);
          a.setSelection(Ir(i, "end") ? U.findFrom(a.doc.resolve(a.mapping.map(s.pos, -1)), -1) : $.create(a.doc, s.pos - i.nodeSize)), e(a.scrollIntoView());
        }
        return !0;
      }
      if (o == 1 || r.node(o - 1).childCount > 1)
        break;
    }
  return i.isAtom && s.depth == r.depth - 1 ? (e && e(n.tr.delete(s.pos - i.nodeSize, s.pos).scrollIntoView()), !0) : !1;
}, Sk = (n, e, t) => {
  let r = Gh(n, t);
  if (!r)
    return !1;
  let s = oc(r);
  return s ? Qh(n, s, e) : !1;
}, wk = (n, e, t) => {
  let r = Xh(n, t);
  if (!r)
    return !1;
  let s = lc(r);
  return s ? Qh(n, s, e) : !1;
};
function Qh(n, e, t) {
  let r = e.nodeBefore, s = r, i = e.pos - 1;
  for (; !s.isTextblock; i--) {
    if (s.type.spec.isolating)
      return !1;
    let d = s.lastChild;
    if (!d)
      return !1;
    s = d;
  }
  let o = e.nodeAfter, l = o, a = e.pos + 1;
  for (; !l.isTextblock; a++) {
    if (l.type.spec.isolating)
      return !1;
    let d = l.firstChild;
    if (!d)
      return !1;
    l = d;
  }
  let u = bo(n.doc, i, a, z.empty);
  if (!u || u.from != i || u instanceof Le && u.slice.size >= a - i)
    return !1;
  if (t) {
    let d = n.tr.step(u);
    d.setSelection(V.create(d.doc, i)), t(d.scrollIntoView());
  }
  return !0;
}
function Ir(n, e, t = !1) {
  for (let r = n; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0;
    if (t && r.childCount != 1)
      return !1;
  }
  return !1;
}
const Zh = (n, e, t) => {
  let { $head: r, empty: s } = n.selection, i = r;
  if (!s)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("backward", n) : r.parentOffset > 0)
      return !1;
    i = oc(r);
  }
  let o = i && i.nodeBefore;
  return !o || !$.isSelectable(o) ? !1 : (e && e(n.tr.setSelection($.create(n.doc, i.pos - o.nodeSize)).scrollIntoView()), !0);
};
function oc(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      if (n.index(e) > 0)
        return n.doc.resolve(n.before(e + 1));
      if (n.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function Xh(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("forward", n) : t.parentOffset < t.parent.content.size) ? null : t;
}
const ep = (n, e, t) => {
  let r = Xh(n, t);
  if (!r)
    return !1;
  let s = lc(r);
  if (!s)
    return !1;
  let i = s.nodeAfter;
  if (ip(n, s, e, 1))
    return !0;
  if (r.parent.content.size == 0 && (Ir(i, "start") || $.isSelectable(i))) {
    let o = bo(n.doc, r.before(), r.after(), z.empty);
    if (o && o.slice.size < o.to - o.from) {
      if (e) {
        let l = n.tr.step(o);
        l.setSelection(Ir(i, "start") ? U.findFrom(l.doc.resolve(l.mapping.map(s.pos)), 1) : $.create(l.doc, l.mapping.map(s.pos))), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return i.isAtom && s.depth == r.depth - 1 ? (e && e(n.tr.delete(s.pos, s.pos + i.nodeSize).scrollIntoView()), !0) : !1;
}, tp = (n, e, t) => {
  let { $head: r, empty: s } = n.selection, i = r;
  if (!s)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("forward", n) : r.parentOffset < r.parent.content.size)
      return !1;
    i = lc(r);
  }
  let o = i && i.nodeAfter;
  return !o || !$.isSelectable(o) ? !1 : (e && e(n.tr.setSelection($.create(n.doc, i.pos)).scrollIntoView()), !0);
};
function lc(n) {
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
const kk = (n, e) => {
  let t = n.selection, r = t instanceof $, s;
  if (r) {
    if (t.node.isTextblock || !Rn(n.doc, t.from))
      return !1;
    s = t.from;
  } else if (s = yo(n.doc, t.from, -1), s == null)
    return !1;
  if (e) {
    let i = n.tr.join(s);
    r && i.setSelection($.create(i.doc, s - n.doc.resolve(s).nodeBefore.nodeSize)), e(i.scrollIntoView());
  }
  return !0;
}, xk = (n, e) => {
  let t = n.selection, r;
  if (t instanceof $) {
    if (t.node.isTextblock || !Rn(n.doc, t.to))
      return !1;
    r = t.to;
  } else if (r = yo(n.doc, t.to, 1), r == null)
    return !1;
  return e && e(n.tr.join(r).scrollIntoView()), !0;
}, Ck = (n, e) => {
  let { $from: t, $to: r } = n.selection, s = t.blockRange(r), i = s && Pr(s);
  return i == null ? !1 : (e && e(n.tr.lift(s, i).scrollIntoView()), !0);
}, np = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  return !t.parent.type.spec.code || !t.sameParent(r) ? !1 : (e && e(n.tr.insertText(`
`).scrollIntoView()), !0);
};
function ac(n) {
  for (let e = 0; e < n.edgeCount; e++) {
    let { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
const Mk = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  if (!t.parent.type.spec.code || !t.sameParent(r))
    return !1;
  let s = t.node(-1), i = t.indexAfter(-1), o = ac(s.contentMatchAt(i));
  if (!o || !s.canReplaceWith(i, i, o))
    return !1;
  if (e) {
    let l = t.after(), a = n.tr.replaceWith(l, l, o.createAndFill());
    a.setSelection(U.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
  }
  return !0;
}, rp = (n, e) => {
  let t = n.selection, { $from: r, $to: s } = t;
  if (t instanceof pt || r.parent.inlineContent || s.parent.inlineContent)
    return !1;
  let i = ac(s.parent.contentMatchAt(s.indexAfter()));
  if (!i || !i.isTextblock)
    return !1;
  if (e) {
    let o = (!r.parentOffset && s.index() < s.parent.childCount ? r : s).pos, l = n.tr.insert(o, i.createAndFill());
    l.setSelection(V.create(l.doc, o + 1)), e(l.scrollIntoView());
  }
  return !0;
}, sp = (n, e) => {
  let { $cursor: t } = n.selection;
  if (!t || t.parent.content.size)
    return !1;
  if (t.depth > 1 && t.after() != t.end(-1)) {
    let i = t.before();
    if (sn(n.doc, i))
      return e && e(n.tr.split(i).scrollIntoView()), !0;
  }
  let r = t.blockRange(), s = r && Pr(r);
  return s == null ? !1 : (e && e(n.tr.lift(r, s).scrollIntoView()), !0);
};
function vk(n) {
  return (e, t) => {
    let { $from: r, $to: s } = e.selection;
    if (e.selection instanceof $ && e.selection.node.isBlock)
      return !r.parentOffset || !sn(e.doc, r.pos) ? !1 : (t && t(e.tr.split(r.pos).scrollIntoView()), !0);
    if (!r.depth)
      return !1;
    let i = [], o, l, a = !1, u = !1;
    for (let g = r.depth; ; g--)
      if (r.node(g).isBlock) {
        a = r.end(g) == r.pos + (r.depth - g), u = r.start(g) == r.pos - (r.depth - g), l = ac(r.node(g - 1).contentMatchAt(r.indexAfter(g - 1))), i.unshift(a && l ? { type: l } : null), o = g;
        break;
      } else {
        if (g == 1)
          return !1;
        i.unshift(null);
      }
    let d = e.tr;
    (e.selection instanceof V || e.selection instanceof pt) && d.deleteSelection();
    let h = d.mapping.map(r.pos), p = sn(d.doc, h, i.length, i);
    if (p || (i[0] = l ? { type: l } : null, p = sn(d.doc, h, i.length, i)), !p)
      return !1;
    if (d.split(h, i.length, i), !a && u && r.node(o).type != l) {
      let g = d.mapping.map(r.before(o)), b = d.doc.resolve(g);
      l && r.node(o - 1).canReplaceWith(b.index(), b.index() + 1, l) && d.setNodeMarkup(d.mapping.map(r.before(o)), l);
    }
    return t && t(d.scrollIntoView()), !0;
  };
}
const Tk = vk(), Ok = (n, e) => {
  let { $from: t, to: r } = n.selection, s, i = t.sharedDepth(r);
  return i == 0 ? !1 : (s = t.before(i), e && e(n.tr.setSelection($.create(n.doc, s))), !0);
};
function Ek(n, e, t) {
  let r = e.nodeBefore, s = e.nodeAfter, i = e.index();
  return !r || !s || !r.type.compatibleContent(s.type) ? !1 : !r.content.size && e.parent.canReplace(i - 1, i) ? (t && t(n.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(i, i + 1) || !(s.isTextblock || Rn(n.doc, e.pos)) ? !1 : (t && t(n.tr.join(e.pos).scrollIntoView()), !0);
}
function ip(n, e, t, r) {
  let s = e.nodeBefore, i = e.nodeAfter, o, l, a = s.type.spec.isolating || i.type.spec.isolating;
  if (!a && Ek(n, e, t))
    return !0;
  let u = !a && e.parent.canReplace(e.index(), e.index() + 1);
  if (u && (o = (l = s.contentMatchAt(s.childCount)).findWrapping(i.type)) && l.matchType(o[0] || i.type).validEnd) {
    if (t) {
      let g = e.pos + i.nodeSize, b = N.empty;
      for (let x = o.length - 1; x >= 0; x--)
        b = N.from(o[x].create(null, b));
      b = N.from(s.copy(b));
      let S = n.tr.step(new ze(e.pos - 1, g, e.pos, g, new z(b, 1, 0), o.length, !0)), w = S.doc.resolve(g + 2 * o.length);
      w.nodeAfter && w.nodeAfter.type == s.type && Rn(S.doc, w.pos) && S.join(w.pos), t(S.scrollIntoView());
    }
    return !0;
  }
  let d = i.type.spec.isolating || r > 0 && a ? null : U.findFrom(e, 1), h = d && d.$from.blockRange(d.$to), p = h && Pr(h);
  if (p != null && p >= e.depth)
    return t && t(n.tr.lift(h, p).scrollIntoView()), !0;
  if (u && Ir(i, "start", !0) && Ir(s, "end")) {
    let g = s, b = [];
    for (; b.push(g), !g.isTextblock; )
      g = g.lastChild;
    let S = i, w = 1;
    for (; !S.isTextblock; S = S.firstChild)
      w++;
    if (g.canReplace(g.childCount, g.childCount, S.content)) {
      if (t) {
        let x = N.empty;
        for (let T = b.length - 1; T >= 0; T--)
          x = N.from(b[T].copy(x));
        let v = n.tr.step(new ze(e.pos - b.length, e.pos + i.nodeSize, e.pos + w, e.pos + i.nodeSize - w, new z(x, b.length, 0), 0, !0));
        t(v.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function op(n) {
  return function(e, t) {
    let r = e.selection, s = n < 0 ? r.$from : r.$to, i = s.depth;
    for (; s.node(i).isInline; ) {
      if (!i)
        return !1;
      i--;
    }
    return s.node(i).isTextblock ? (t && t(e.tr.setSelection(V.create(e.doc, n < 0 ? s.start(i) : s.end(i)))), !0) : !1;
  };
}
const Ak = op(-1), Dk = op(1);
function Nk(n, e = null) {
  return function(t, r) {
    let { $from: s, $to: i } = t.selection, o = s.blockRange(i), l = o && Ua(o, n, e);
    return l ? (r && r(t.tr.wrap(o, l).scrollIntoView()), !0) : !1;
  };
}
function yd(n, e = null) {
  return function(t, r) {
    let s = !1;
    for (let i = 0; i < t.selection.ranges.length && !s; i++) {
      let { $from: { pos: o }, $to: { pos: l } } = t.selection.ranges[i];
      t.doc.nodesBetween(o, l, (a, u) => {
        if (s)
          return !1;
        if (!(!a.isTextblock || a.hasMarkup(n, e)))
          if (a.type == n)
            s = !0;
          else {
            let d = t.doc.resolve(u), h = d.index();
            s = d.parent.canReplaceWith(h, h + 1, n);
          }
      });
    }
    if (!s)
      return !1;
    if (r) {
      let i = t.tr;
      for (let o = 0; o < t.selection.ranges.length; o++) {
        let { $from: { pos: l }, $to: { pos: a } } = t.selection.ranges[o];
        i.setBlockType(l, a, n, e);
      }
      r(i.scrollIntoView());
    }
    return !0;
  };
}
function cc(...n) {
  return function(e, t, r) {
    for (let s = 0; s < n.length; s++)
      if (n[s](e, t, r))
        return !0;
    return !1;
  };
}
cc(ic, Jh, Zh);
cc(ic, ep, tp);
cc(np, rp, sp, Tk);
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function Rk(n, e = null) {
  return function(t, r) {
    let { $from: s, $to: i } = t.selection, o = s.blockRange(i);
    if (!o)
      return !1;
    let l = r ? t.tr : null;
    return Ik(l, o, n, e) ? (r && r(l.scrollIntoView()), !0) : !1;
  };
}
function Ik(n, e, t, r = null) {
  let s = !1, i = e, o = e.$from.doc;
  if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(t) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0)
      return !1;
    let a = o.resolve(e.start - 2);
    i = new Ai(a, a, e.depth), e.endIndex < e.parent.childCount && (e = new Ai(e.$from, o.resolve(e.$to.end(e.depth)), e.depth)), s = !0;
  }
  let l = Ua(i, t, r, e);
  return l ? (n && _k(n, e, l, s, t), !0) : !1;
}
function _k(n, e, t, r, s) {
  let i = N.empty;
  for (let d = t.length - 1; d >= 0; d--)
    i = N.from(t[d].type.create(t[d].attrs, i));
  n.step(new ze(e.start - (r ? 2 : 0), e.end, e.start, e.end, new z(i, 0, 0), t.length, !0));
  let o = 0;
  for (let d = 0; d < t.length; d++)
    t[d].type == s && (o = d + 1);
  let l = t.length - o, a = e.start + t.length - (r ? 2 : 0), u = e.parent;
  for (let d = e.startIndex, h = e.endIndex, p = !0; d < h; d++, p = !1)
    !p && sn(n.doc, a, l) && (n.split(a, l), a += 2 * l), a += u.child(d).nodeSize;
  return n;
}
function Pk(n) {
  return function(e, t) {
    let { $from: r, $to: s } = e.selection, i = r.blockRange(s, (o) => o.childCount > 0 && o.firstChild.type == n);
    return i ? t ? r.node(i.depth - 1).type == n ? Lk(e, t, n, i) : zk(e, t, i) : !0 : !1;
  };
}
function Lk(n, e, t, r) {
  let s = n.tr, i = r.end, o = r.$to.end(r.depth);
  i < o && (s.step(new ze(i - 1, o, i, o, new z(N.from(t.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new Ai(s.doc.resolve(r.$from.pos), s.doc.resolve(o), r.depth));
  const l = Pr(r);
  if (l == null)
    return !1;
  s.lift(r, l);
  let a = s.doc.resolve(s.mapping.map(i, -1) - 1);
  return Rn(s.doc, a.pos) && a.nodeBefore.type == a.nodeAfter.type && s.join(a.pos), e(s.scrollIntoView()), !0;
}
function zk(n, e, t) {
  let r = n.tr, s = t.parent;
  for (let g = t.end, b = t.endIndex - 1, S = t.startIndex; b > S; b--)
    g -= s.child(b).nodeSize, r.delete(g - 1, g + 1);
  let i = r.doc.resolve(t.start), o = i.nodeAfter;
  if (r.mapping.map(t.end) != t.start + i.nodeAfter.nodeSize)
    return !1;
  let l = t.startIndex == 0, a = t.endIndex == s.childCount, u = i.node(-1), d = i.index(-1);
  if (!u.canReplace(d + (l ? 0 : 1), d + 1, o.content.append(a ? N.empty : N.from(s))))
    return !1;
  let h = i.pos, p = h + o.nodeSize;
  return r.step(new ze(h - (l ? 1 : 0), p + (a ? 1 : 0), h + 1, p - 1, new z((l ? N.empty : N.from(s.copy(N.empty))).append(a ? N.empty : N.from(s.copy(N.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function Fk(n) {
  return function(e, t) {
    let { $from: r, $to: s } = e.selection, i = r.blockRange(s, (u) => u.childCount > 0 && u.firstChild.type == n);
    if (!i)
      return !1;
    let o = i.startIndex;
    if (o == 0)
      return !1;
    let l = i.parent, a = l.child(o - 1);
    if (a.type != n)
      return !1;
    if (t) {
      let u = a.lastChild && a.lastChild.type == l.type, d = N.from(u ? n.create() : null), h = new z(N.from(n.create(null, N.from(l.type.create(null, d)))), u ? 3 : 1, 0), p = i.start, g = i.end;
      t(e.tr.step(new ze(p - (u ? 3 : 1), g, p, g, h, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
function Co(n) {
  const { state: e, transaction: t } = n;
  let { selection: r } = t, { doc: s } = t, { storedMarks: i } = t;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return i;
    },
    get selection() {
      return r;
    },
    get doc() {
      return s;
    },
    get tr() {
      return r = t.selection, s = t.doc, i = t.storedMarks, t;
    }
  };
}
class Mo {
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
    const { rawCommands: e, editor: t, state: r } = this, { view: s } = t, { tr: i } = r, o = this.buildProps(i);
    return Object.fromEntries(Object.entries(e).map(([l, a]) => [l, (...d) => {
      const h = a(...d)(o);
      return !i.getMeta("preventDispatch") && !this.hasCustomState && s.dispatch(i), h;
    }]));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(e, t = !0) {
    const { rawCommands: r, editor: s, state: i } = this, { view: o } = s, l = [], a = !!e, u = e || i.tr, d = () => (!a && t && !u.getMeta("preventDispatch") && !this.hasCustomState && o.dispatch(u), l.every((p) => p === !0)), h = {
      ...Object.fromEntries(Object.entries(r).map(([p, g]) => [p, (...S) => {
        const w = this.buildProps(u, t), x = g(...S)(w);
        return l.push(x), h;
      }])),
      run: d
    };
    return h;
  }
  createCan(e) {
    const { rawCommands: t, state: r } = this, s = !1, i = e || r.tr, o = this.buildProps(i, s);
    return {
      ...Object.fromEntries(Object.entries(t).map(([a, u]) => [a, (...d) => u(...d)({ ...o, dispatch: void 0 })])),
      chain: () => this.createChain(i, s)
    };
  }
  buildProps(e, t = !0) {
    const { rawCommands: r, editor: s, state: i } = this, { view: o } = s, l = {
      tr: e,
      editor: s,
      view: o,
      state: Co({
        state: i,
        transaction: e
      }),
      dispatch: t ? () => {
      } : void 0,
      chain: () => this.createChain(e, t),
      can: () => this.createCan(e),
      get commands() {
        return Object.fromEntries(Object.entries(r).map(([a, u]) => [a, (...d) => u(...d)(l)]));
      }
    };
    return l;
  }
}
class Bk {
  constructor() {
    this.callbacks = {};
  }
  on(e, t) {
    return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), this;
  }
  emit(e, ...t) {
    const r = this.callbacks[e];
    return r && r.forEach((s) => s.apply(this, t)), this;
  }
  off(e, t) {
    const r = this.callbacks[e];
    return r && (t ? this.callbacks[e] = r.filter((s) => s !== t) : delete this.callbacks[e]), this;
  }
  once(e, t) {
    const r = (...s) => {
      this.off(e, r), t.apply(this, s);
    };
    return this.on(e, r);
  }
  removeAllListeners() {
    this.callbacks = {};
  }
}
function H(n, e, t) {
  return n.config[e] === void 0 && n.parent ? H(n.parent, e, t) : typeof n.config[e] == "function" ? n.config[e].bind({
    ...t,
    parent: n.parent ? H(n.parent, e, t) : null
  }) : n.config[e];
}
function vo(n) {
  const e = n.filter((s) => s.type === "extension"), t = n.filter((s) => s.type === "node"), r = n.filter((s) => s.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: t,
    markExtensions: r
  };
}
function lp(n) {
  const e = [], { nodeExtensions: t, markExtensions: r } = vo(n), s = [...t, ...r], i = {
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
      extensions: s
    }, a = H(o, "addGlobalAttributes", l);
    if (!a)
      return;
    a().forEach((d) => {
      d.types.forEach((h) => {
        Object.entries(d.attributes).forEach(([p, g]) => {
          e.push({
            type: h,
            name: p,
            attribute: {
              ...i,
              ...g
            }
          });
        });
      });
    });
  }), s.forEach((o) => {
    const l = {
      name: o.name,
      options: o.options,
      storage: o.storage
    }, a = H(o, "addAttributes", l);
    if (!a)
      return;
    const u = a();
    Object.entries(u).forEach(([d, h]) => {
      const p = {
        ...i,
        ...h
      };
      typeof (p == null ? void 0 : p.default) == "function" && (p.default = p.default()), p != null && p.isRequired && (p == null ? void 0 : p.default) === void 0 && delete p.default, e.push({
        type: o.name,
        name: d,
        attribute: p
      });
    });
  }), e;
}
function Be(n, e) {
  if (typeof n == "string") {
    if (!e.nodes[n])
      throw Error(`There is no node type named '${n}'. Maybe you forgot to add the extension?`);
    return e.nodes[n];
  }
  return n;
}
function me(...n) {
  return n.filter((e) => !!e).reduce((e, t) => {
    const r = { ...e };
    return Object.entries(t).forEach(([s, i]) => {
      if (!r[s]) {
        r[s] = i;
        return;
      }
      if (s === "class") {
        const l = i ? String(i).split(" ") : [], a = r[s] ? r[s].split(" ") : [], u = l.filter((d) => !a.includes(d));
        r[s] = [...a, ...u].join(" ");
      } else if (s === "style") {
        const l = i ? i.split(";").map((d) => d.trim()).filter(Boolean) : [], a = r[s] ? r[s].split(";").map((d) => d.trim()).filter(Boolean) : [], u = /* @__PURE__ */ new Map();
        a.forEach((d) => {
          const [h, p] = d.split(":").map((g) => g.trim());
          u.set(h, p);
        }), l.forEach((d) => {
          const [h, p] = d.split(":").map((g) => g.trim());
          u.set(h, p);
        }), r[s] = Array.from(u.entries()).map(([d, h]) => `${d}: ${h}`).join("; ");
      } else
        r[s] = i;
    }), r;
  }, {});
}
function pa(n, e) {
  return e.filter((t) => t.type === n.type.name).filter((t) => t.attribute.rendered).map((t) => t.attribute.renderHTML ? t.attribute.renderHTML(n.attrs) || {} : {
    [t.name]: n.attrs[t.name]
  }).reduce((t, r) => me(t, r), {});
}
function ap(n) {
  return typeof n == "function";
}
function ee(n, e = void 0, ...t) {
  return ap(n) ? e ? n.bind(e)(...t) : n(...t) : n;
}
function Hk(n = {}) {
  return Object.keys(n).length === 0 && n.constructor === Object;
}
function Wk(n) {
  return typeof n != "string" ? n : n.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(n) : n === "true" ? !0 : n === "false" ? !1 : n;
}
function bd(n, e) {
  return "style" in n ? n : {
    ...n,
    getAttrs: (t) => {
      const r = n.getAttrs ? n.getAttrs(t) : n.attrs;
      if (r === !1)
        return !1;
      const s = e.reduce((i, o) => {
        const l = o.attribute.parseHTML ? o.attribute.parseHTML(t) : Wk(t.getAttribute(o.name));
        return l == null ? i : {
          ...i,
          [o.name]: l
        };
      }, {});
      return { ...r, ...s };
    }
  };
}
function Sd(n) {
  return Object.fromEntries(
    // @ts-ignore
    Object.entries(n).filter(([e, t]) => e === "attrs" && Hk(t) ? !1 : t != null)
  );
}
function $k(n, e) {
  var t;
  const r = lp(n), { nodeExtensions: s, markExtensions: i } = vo(n), o = (t = s.find((u) => H(u, "topNode"))) === null || t === void 0 ? void 0 : t.name, l = Object.fromEntries(s.map((u) => {
    const d = r.filter((x) => x.type === u.name), h = {
      name: u.name,
      options: u.options,
      storage: u.storage,
      editor: e
    }, p = n.reduce((x, v) => {
      const T = H(v, "extendNodeSchema", h);
      return {
        ...x,
        ...T ? T(u) : {}
      };
    }, {}), g = Sd({
      ...p,
      content: ee(H(u, "content", h)),
      marks: ee(H(u, "marks", h)),
      group: ee(H(u, "group", h)),
      inline: ee(H(u, "inline", h)),
      atom: ee(H(u, "atom", h)),
      selectable: ee(H(u, "selectable", h)),
      draggable: ee(H(u, "draggable", h)),
      code: ee(H(u, "code", h)),
      whitespace: ee(H(u, "whitespace", h)),
      linebreakReplacement: ee(H(u, "linebreakReplacement", h)),
      defining: ee(H(u, "defining", h)),
      isolating: ee(H(u, "isolating", h)),
      attrs: Object.fromEntries(d.map((x) => {
        var v;
        return [x.name, { default: (v = x == null ? void 0 : x.attribute) === null || v === void 0 ? void 0 : v.default }];
      }))
    }), b = ee(H(u, "parseHTML", h));
    b && (g.parseDOM = b.map((x) => bd(x, d)));
    const S = H(u, "renderHTML", h);
    S && (g.toDOM = (x) => S({
      node: x,
      HTMLAttributes: pa(x, d)
    }));
    const w = H(u, "renderText", h);
    return w && (g.toText = w), [u.name, g];
  })), a = Object.fromEntries(i.map((u) => {
    const d = r.filter((w) => w.type === u.name), h = {
      name: u.name,
      options: u.options,
      storage: u.storage,
      editor: e
    }, p = n.reduce((w, x) => {
      const v = H(x, "extendMarkSchema", h);
      return {
        ...w,
        ...v ? v(u) : {}
      };
    }, {}), g = Sd({
      ...p,
      inclusive: ee(H(u, "inclusive", h)),
      excludes: ee(H(u, "excludes", h)),
      group: ee(H(u, "group", h)),
      spanning: ee(H(u, "spanning", h)),
      code: ee(H(u, "code", h)),
      attrs: Object.fromEntries(d.map((w) => {
        var x;
        return [w.name, { default: (x = w == null ? void 0 : w.attribute) === null || x === void 0 ? void 0 : x.default }];
      }))
    }), b = ee(H(u, "parseHTML", h));
    b && (g.parseDOM = b.map((w) => bd(w, d)));
    const S = H(u, "renderHTML", h);
    return S && (g.toDOM = (w) => S({
      mark: w,
      HTMLAttributes: pa(w, d)
    })), [u.name, g];
  }));
  return new Gf({
    topNode: o,
    nodes: l,
    marks: a
  });
}
function Al(n, e) {
  return e.nodes[n] || e.marks[n] || null;
}
function wd(n, e) {
  return Array.isArray(e) ? e.some((t) => (typeof t == "string" ? t : t.name) === n.name) : e;
}
function uc(n, e) {
  const t = lr.fromSchema(e).serializeFragment(n), s = document.implementation.createHTMLDocument().createElement("div");
  return s.appendChild(t), s.innerHTML;
}
const Vk = (n, e = 500) => {
  let t = "";
  const r = n.parentOffset;
  return n.parent.nodesBetween(Math.max(0, r - e), r, (s, i, o, l) => {
    var a, u;
    const d = ((u = (a = s.type.spec).toText) === null || u === void 0 ? void 0 : u.call(a, {
      node: s,
      pos: i,
      parent: o,
      index: l
    })) || s.textContent || "%leaf%";
    t += s.isAtom && !s.isText ? d : d.slice(0, Math.max(0, r - i));
  }), t;
};
function dc(n) {
  return Object.prototype.toString.call(n) === "[object RegExp]";
}
class Ns {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const Yk = (n, e) => {
  if (dc(e))
    return e.exec(n);
  const t = e(n);
  if (!t)
    return null;
  const r = [t.text];
  return r.index = t.index, r.input = n, r.data = t.data, t.replaceWith && (t.text.includes(t.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(t.replaceWith)), r;
};
function ti(n) {
  var e;
  const { editor: t, from: r, to: s, text: i, rules: o, plugin: l } = n, { view: a } = t;
  if (a.composing)
    return !1;
  const u = a.state.doc.resolve(r);
  if (
    // check for code node
    u.parent.type.spec.code || !((e = u.nodeBefore || u.nodeAfter) === null || e === void 0) && e.marks.find((p) => p.type.spec.code)
  )
    return !1;
  let d = !1;
  const h = Vk(u) + i;
  return o.forEach((p) => {
    if (d)
      return;
    const g = Yk(h, p.find);
    if (!g)
      return;
    const b = a.state.tr, S = Co({
      state: a.state,
      transaction: b
    }), w = {
      from: r - (g[0].length - i.length),
      to: s
    }, { commands: x, chain: v, can: T } = new Mo({
      editor: t,
      state: S
    });
    p.handler({
      state: S,
      range: w,
      match: g,
      commands: x,
      chain: v,
      can: T
    }) === null || !b.steps.length || (b.setMeta(l, {
      transform: b,
      from: r,
      to: s,
      text: i
    }), a.dispatch(b), d = !0);
  }), d;
}
function jk(n) {
  const { editor: e, rules: t } = n, r = new Ne({
    state: {
      init() {
        return null;
      },
      apply(s, i, o) {
        const l = s.getMeta(r);
        if (l)
          return l;
        const a = s.getMeta("applyInputRules");
        return !!a && setTimeout(() => {
          let { text: d } = a;
          typeof d == "string" ? d = d : d = uc(N.from(d), o.schema);
          const { from: h } = a, p = h + d.length;
          ti({
            editor: e,
            from: h,
            to: p,
            text: d,
            rules: t,
            plugin: r
          });
        }), s.selectionSet || s.docChanged ? null : i;
      }
    },
    props: {
      handleTextInput(s, i, o, l) {
        return ti({
          editor: e,
          from: i,
          to: o,
          text: l,
          rules: t,
          plugin: r
        });
      },
      handleDOMEvents: {
        compositionend: (s) => (setTimeout(() => {
          const { $cursor: i } = s.state.selection;
          i && ti({
            editor: e,
            from: i.pos,
            to: i.pos,
            text: "",
            rules: t,
            plugin: r
          });
        }), !1)
      },
      // add support for input rules to trigger on enter
      // this is useful for example for code blocks
      handleKeyDown(s, i) {
        if (i.key !== "Enter")
          return !1;
        const { $cursor: o } = s.state.selection;
        return o ? ti({
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
function Uk(n) {
  return Object.prototype.toString.call(n).slice(8, -1);
}
function ni(n) {
  return Uk(n) !== "Object" ? !1 : n.constructor === Object && Object.getPrototypeOf(n) === Object.prototype;
}
function To(n, e) {
  const t = { ...n };
  return ni(n) && ni(e) && Object.keys(e).forEach((r) => {
    ni(e[r]) && ni(n[r]) ? t[r] = To(n[r], e[r]) : t[r] = e[r];
  }), t;
}
class Ct {
  constructor(e = {}) {
    this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = ee(H(this, "addOptions", {
      name: this.name
    }))), this.storage = ee(H(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new Ct(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => To(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new Ct(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = ee(H(t, "addOptions", {
      name: t.name
    })), t.storage = ee(H(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  static handleExit({ editor: e, mark: t }) {
    const { tr: r } = e.state, s = e.state.selection.$from;
    if (s.pos === s.end()) {
      const o = s.marks();
      if (!!!o.find((u) => (u == null ? void 0 : u.type.name) === t.name))
        return !1;
      const a = o.find((u) => (u == null ? void 0 : u.type.name) === t.name);
      return a && r.removeStoredMark(a), r.insertText(" ", s.pos), e.view.dispatch(r), !0;
    }
    return !1;
  }
}
function qk(n) {
  return typeof n == "number";
}
class Kk {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const Gk = (n, e, t) => {
  if (dc(e))
    return [...n.matchAll(e)];
  const r = e(n, t);
  return r ? r.map((s) => {
    const i = [s.text];
    return i.index = s.index, i.input = n, i.data = s.data, s.replaceWith && (s.text.includes(s.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), i.push(s.replaceWith)), i;
  }) : [];
};
function Jk(n) {
  const { editor: e, state: t, from: r, to: s, rule: i, pasteEvent: o, dropEvent: l } = n, { commands: a, chain: u, can: d } = new Mo({
    editor: e,
    state: t
  }), h = [];
  return t.doc.nodesBetween(r, s, (g, b) => {
    if (!g.isTextblock || g.type.spec.code)
      return;
    const S = Math.max(r, b), w = Math.min(s, b + g.content.size), x = g.textBetween(S - b, w - b, void 0, "￼");
    Gk(x, i.find, o).forEach((T) => {
      if (T.index === void 0)
        return;
      const D = S + T.index + 1, A = D + T[0].length, R = {
        from: t.tr.mapping.map(D),
        to: t.tr.mapping.map(A)
      }, O = i.handler({
        state: t,
        range: R,
        match: T,
        commands: a,
        chain: u,
        can: d,
        pasteEvent: o,
        dropEvent: l
      });
      h.push(O);
    });
  }), h.every((g) => g !== null);
}
let ri = null;
const Qk = (n) => {
  var e;
  const t = new ClipboardEvent("paste", {
    clipboardData: new DataTransfer()
  });
  return (e = t.clipboardData) === null || e === void 0 || e.setData("text/html", n), t;
};
function Zk(n) {
  const { editor: e, rules: t } = n;
  let r = null, s = !1, i = !1, o = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, l;
  try {
    l = typeof DragEvent < "u" ? new DragEvent("drop") : null;
  } catch {
    l = null;
  }
  const a = ({ state: d, from: h, to: p, rule: g, pasteEvt: b }) => {
    const S = d.tr, w = Co({
      state: d,
      transaction: S
    });
    if (!(!Jk({
      editor: e,
      state: w,
      from: Math.max(h - 1, 0),
      to: p.b - 1,
      rule: g,
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
  return t.map((d) => new Ne({
    // we register a global drag handler to track the current drag source element
    view(h) {
      const p = (b) => {
        var S;
        r = !((S = h.dom.parentElement) === null || S === void 0) && S.contains(b.target) ? h.dom.parentElement : null, r && (ri = e);
      }, g = () => {
        ri && (ri = null);
      };
      return window.addEventListener("dragstart", p), window.addEventListener("dragend", g), {
        destroy() {
          window.removeEventListener("dragstart", p), window.removeEventListener("dragend", g);
        }
      };
    },
    props: {
      handleDOMEvents: {
        drop: (h, p) => {
          if (i = r === h.dom.parentElement, l = p, !i) {
            const g = ri;
            g != null && g.isEditable && setTimeout(() => {
              const b = g.state.selection;
              b && g.commands.deleteRange({ from: b.from, to: b.to });
            }, 10);
          }
          return !1;
        },
        paste: (h, p) => {
          var g;
          const b = (g = p.clipboardData) === null || g === void 0 ? void 0 : g.getData("text/html");
          return o = p, s = !!(b != null && b.includes("data-pm-slice")), !1;
        }
      }
    },
    appendTransaction: (h, p, g) => {
      const b = h[0], S = b.getMeta("uiEvent") === "paste" && !s, w = b.getMeta("uiEvent") === "drop" && !i, x = b.getMeta("applyPasteRules"), v = !!x;
      if (!S && !w && !v)
        return;
      if (v) {
        let { text: A } = x;
        typeof A == "string" ? A = A : A = uc(N.from(A), g.schema);
        const { from: R } = x, O = R + A.length, L = Qk(A);
        return a({
          rule: d,
          state: g,
          from: R,
          to: { b: O },
          pasteEvt: L
        });
      }
      const T = p.doc.content.findDiffStart(g.doc.content), D = p.doc.content.findDiffEnd(g.doc.content);
      if (!(!qk(T) || !D || T === D.b))
        return a({
          rule: d,
          state: g,
          from: T,
          to: D,
          pasteEvt: o
        });
    }
  }));
}
function Xk(n) {
  const e = n.filter((t, r) => n.indexOf(t) !== r);
  return Array.from(new Set(e));
}
class Mr {
  constructor(e, t) {
    this.splittableMarks = [], this.editor = t, this.extensions = Mr.resolve(e), this.schema = $k(this.extensions, t), this.setupExtensions();
  }
  /**
   * Returns a flattened and sorted extension list while
   * also checking for duplicated extensions and warns the user.
   * @param extensions An array of Tiptap extensions
   * @returns An flattened and sorted array of Tiptap extensions
   */
  static resolve(e) {
    const t = Mr.sort(Mr.flatten(e)), r = Xk(t.map((s) => s.name));
    return r.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${r.map((s) => `'${s}'`).join(", ")}]. This can lead to issues.`), t;
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
      }, s = H(t, "addExtensions", r);
      return s ? [t, ...this.flatten(s())] : t;
    }).flat(10);
  }
  /**
   * Sort extensions by priority.
   * @param extensions An array of Tiptap extensions
   * @returns A sorted array of Tiptap extensions by priority
   */
  static sort(e) {
    return e.sort((r, s) => {
      const i = H(r, "priority") || 100, o = H(s, "priority") || 100;
      return i > o ? -1 : i < o ? 1 : 0;
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
        type: Al(t.name, this.schema)
      }, s = H(t, "addCommands", r);
      return s ? {
        ...e,
        ...s()
      } : e;
    }, {});
  }
  /**
   * Get all registered Prosemirror plugins from the extensions.
   * @returns An array of Prosemirror plugins
   */
  get plugins() {
    const { editor: e } = this, t = Mr.sort([...this.extensions].reverse()), r = [], s = [], i = t.map((o) => {
      const l = {
        name: o.name,
        options: o.options,
        storage: o.storage,
        editor: e,
        type: Al(o.name, this.schema)
      }, a = [], u = H(o, "addKeyboardShortcuts", l);
      let d = {};
      if (o.type === "mark" && H(o, "exitable", l) && (d.ArrowRight = () => Ct.handleExit({ editor: e, mark: o })), u) {
        const S = Object.fromEntries(Object.entries(u()).map(([w, x]) => [w, () => x({ editor: e })]));
        d = { ...d, ...S };
      }
      const h = bk(d);
      a.push(h);
      const p = H(o, "addInputRules", l);
      wd(o, e.options.enableInputRules) && p && r.push(...p());
      const g = H(o, "addPasteRules", l);
      wd(o, e.options.enablePasteRules) && g && s.push(...g());
      const b = H(o, "addProseMirrorPlugins", l);
      if (b) {
        const S = b();
        a.push(...S);
      }
      return a;
    }).flat();
    return [
      jk({
        editor: e,
        rules: r
      }),
      ...Zk({
        editor: e,
        rules: s
      }),
      ...i
    ];
  }
  /**
   * Get all attributes from the extensions.
   * @returns An array of attributes
   */
  get attributes() {
    return lp(this.extensions);
  }
  /**
   * Get all node views from the extensions.
   * @returns An object with all node views where the key is the node name and the value is the node view function
   */
  get nodeViews() {
    const { editor: e } = this, { nodeExtensions: t } = vo(this.extensions);
    return Object.fromEntries(t.filter((r) => !!H(r, "addNodeView")).map((r) => {
      const s = this.attributes.filter((a) => a.type === r.name), i = {
        name: r.name,
        options: r.options,
        storage: r.storage,
        editor: e,
        type: Be(r.name, this.schema)
      }, o = H(r, "addNodeView", i);
      if (!o)
        return [];
      const l = (a, u, d, h, p) => {
        const g = pa(a, s);
        return o()({
          // pass-through
          node: a,
          view: u,
          getPos: d,
          decorations: h,
          innerDecorations: p,
          // tiptap-specific
          editor: e,
          extension: r,
          HTMLAttributes: g
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
        type: Al(e.name, this.schema)
      };
      e.type === "mark" && (!((t = ee(H(e, "keepOnSplit", r))) !== null && t !== void 0) || t) && this.splittableMarks.push(e.name);
      const s = H(e, "onBeforeCreate", r), i = H(e, "onCreate", r), o = H(e, "onUpdate", r), l = H(e, "onSelectionUpdate", r), a = H(e, "onTransaction", r), u = H(e, "onFocus", r), d = H(e, "onBlur", r), h = H(e, "onDestroy", r);
      s && this.editor.on("beforeCreate", s), i && this.editor.on("create", i), o && this.editor.on("update", o), l && this.editor.on("selectionUpdate", l), a && this.editor.on("transaction", a), u && this.editor.on("focus", u), d && this.editor.on("blur", d), h && this.editor.on("destroy", h);
    });
  }
}
class De {
  constructor(e = {}) {
    this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = ee(H(this, "addOptions", {
      name: this.name
    }))), this.storage = ee(H(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new De(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => To(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new De({ ...this.config, ...e });
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = ee(H(t, "addOptions", {
      name: t.name
    })), t.storage = ee(H(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function cp(n, e, t) {
  const { from: r, to: s } = e, { blockSeparator: i = `

`, textSerializers: o = {} } = t || {};
  let l = "";
  return n.nodesBetween(r, s, (a, u, d, h) => {
    var p;
    a.isBlock && u > r && (l += i);
    const g = o == null ? void 0 : o[a.type.name];
    if (g)
      return d && (l += g({
        node: a,
        pos: u,
        parent: d,
        index: h,
        range: e
      })), !1;
    a.isText && (l += (p = a == null ? void 0 : a.text) === null || p === void 0 ? void 0 : p.slice(Math.max(r, u) - u, s - u));
  }), l;
}
function up(n) {
  return Object.fromEntries(Object.entries(n.nodes).filter(([, e]) => e.spec.toText).map(([e, t]) => [e, t.spec.toText]));
}
const ex = De.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new Ne({
        key: new Ue("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: n } = this, { state: e, schema: t } = n, { doc: r, selection: s } = e, { ranges: i } = s, o = Math.min(...i.map((d) => d.$from.pos)), l = Math.max(...i.map((d) => d.$to.pos)), a = up(t);
            return cp(r, { from: o, to: l }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: a
            });
          }
        }
      })
    ];
  }
}), tx = () => ({ editor: n, view: e }) => (requestAnimationFrame(() => {
  var t;
  n.isDestroyed || (e.dom.blur(), (t = window == null ? void 0 : window.getSelection()) === null || t === void 0 || t.removeAllRanges());
}), !0), nx = (n = !1) => ({ commands: e }) => e.setContent("", n), rx = () => ({ state: n, tr: e, dispatch: t }) => {
  const { selection: r } = e, { ranges: s } = r;
  return t && s.forEach(({ $from: i, $to: o }) => {
    n.doc.nodesBetween(i.pos, o.pos, (l, a) => {
      if (l.type.isText)
        return;
      const { doc: u, mapping: d } = e, h = u.resolve(d.map(a)), p = u.resolve(d.map(a + l.nodeSize)), g = h.blockRange(p);
      if (!g)
        return;
      const b = Pr(g);
      if (l.type.isTextblock) {
        const { defaultType: S } = h.parent.contentMatchAt(h.index());
        e.setNodeMarkup(g.start, S);
      }
      (b || b === 0) && e.lift(g, b);
    });
  }), !0;
}, sx = (n) => (e) => n(e), ix = () => ({ state: n, dispatch: e }) => rp(n, e), ox = (n, e) => ({ editor: t, tr: r }) => {
  const { state: s } = t, i = s.doc.slice(n.from, n.to);
  r.deleteRange(n.from, n.to);
  const o = r.mapping.map(e);
  return r.insert(o, i.content), r.setSelection(new V(r.doc.resolve(Math.max(o - 1, 0)))), !0;
}, lx = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, r = t.$anchor.node();
  if (r.content.size > 0)
    return !1;
  const s = n.selection.$anchor;
  for (let i = s.depth; i > 0; i -= 1)
    if (s.node(i).type === r.type) {
      if (e) {
        const l = s.before(i), a = s.after(i);
        n.delete(l, a).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, ax = (n) => ({ tr: e, state: t, dispatch: r }) => {
  const s = Be(n, t.schema), i = e.selection.$anchor;
  for (let o = i.depth; o > 0; o -= 1)
    if (i.node(o).type === s) {
      if (r) {
        const a = i.before(o), u = i.after(o);
        e.delete(a, u).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, cx = (n) => ({ tr: e, dispatch: t }) => {
  const { from: r, to: s } = n;
  return t && e.delete(r, s), !0;
}, ux = () => ({ state: n, dispatch: e }) => ic(n, e), dx = () => ({ commands: n }) => n.keyboardShortcut("Enter"), fx = () => ({ state: n, dispatch: e }) => Mk(n, e);
function zi(n, e, t = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((s) => t.strict ? e[s] === n[s] : dc(e[s]) ? e[s].test(n[s]) : e[s] === n[s]) : !0;
}
function dp(n, e, t = {}) {
  return n.find((r) => r.type === e && zi(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(t).map((s) => [s, r.attrs[s]])),
    t
  ));
}
function kd(n, e, t = {}) {
  return !!dp(n, e, t);
}
function fc(n, e, t) {
  var r;
  if (!n || !e)
    return;
  let s = n.parent.childAfter(n.parentOffset);
  if ((!s.node || !s.node.marks.some((d) => d.type === e)) && (s = n.parent.childBefore(n.parentOffset)), !s.node || !s.node.marks.some((d) => d.type === e) || (t = t || ((r = s.node.marks[0]) === null || r === void 0 ? void 0 : r.attrs), !dp([...s.node.marks], e, t)))
    return;
  let o = s.index, l = n.start() + s.offset, a = o + 1, u = l + s.node.nodeSize;
  for (; o > 0 && kd([...n.parent.child(o - 1).marks], e, t); )
    o -= 1, l -= n.parent.child(o).nodeSize;
  for (; a < n.parent.childCount && kd([...n.parent.child(a).marks], e, t); )
    u += n.parent.child(a).nodeSize, a += 1;
  return {
    from: l,
    to: u
  };
}
function _n(n, e) {
  if (typeof n == "string") {
    if (!e.marks[n])
      throw Error(`There is no mark type named '${n}'. Maybe you forgot to add the extension?`);
    return e.marks[n];
  }
  return n;
}
const hx = (n, e = {}) => ({ tr: t, state: r, dispatch: s }) => {
  const i = _n(n, r.schema), { doc: o, selection: l } = t, { $from: a, from: u, to: d } = l;
  if (s) {
    const h = fc(a, i, e);
    if (h && h.from <= u && h.to >= d) {
      const p = V.create(o, h.from, h.to);
      t.setSelection(p);
    }
  }
  return !0;
}, px = (n) => (e) => {
  const t = typeof n == "function" ? n(e) : n;
  for (let r = 0; r < t.length; r += 1)
    if (t[r](e))
      return !0;
  return !1;
};
function fp(n) {
  return n instanceof V;
}
function Yn(n = 0, e = 0, t = 0) {
  return Math.min(Math.max(n, e), t);
}
function hp(n, e = null) {
  if (!e)
    return null;
  const t = U.atStart(n), r = U.atEnd(n);
  if (e === "start" || e === !0)
    return t;
  if (e === "end")
    return r;
  const s = t.from, i = r.to;
  return e === "all" ? V.create(n, Yn(0, s, i), Yn(n.content.size, s, i)) : V.create(n, Yn(e, s, i), Yn(e, s, i));
}
function xd() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function Fi() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function mx() {
  return typeof navigator < "u" ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent) : !1;
}
const gx = (n = null, e = {}) => ({ editor: t, view: r, tr: s, dispatch: i }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const o = () => {
    (Fi() || xd()) && r.dom.focus(), requestAnimationFrame(() => {
      t.isDestroyed || (r.focus(), mx() && !Fi() && !xd() && r.dom.focus({ preventScroll: !0 }));
    });
  };
  if (r.hasFocus() && n === null || n === !1)
    return !0;
  if (i && n === null && !fp(t.state.selection))
    return o(), !0;
  const l = hp(s.doc, n) || t.state.selection, a = t.state.selection.eq(l);
  return i && (a || s.setSelection(l), a && s.storedMarks && s.setStoredMarks(s.storedMarks), o()), !0;
}, yx = (n, e) => (t) => n.every((r, s) => e(r, { ...t, index: s })), bx = (n, e) => ({ tr: t, commands: r }) => r.insertContentAt({ from: t.selection.from, to: t.selection.to }, n, e), pp = (n) => {
  const e = n.childNodes;
  for (let t = e.length - 1; t >= 0; t -= 1) {
    const r = e[t];
    r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? n.removeChild(r) : r.nodeType === 1 && pp(r);
  }
  return n;
};
function si(n) {
  const e = `<body>${n}</body>`, t = new window.DOMParser().parseFromString(e, "text/html").body;
  return pp(t);
}
function ws(n, e, t) {
  if (n instanceof vn || n instanceof N)
    return n;
  t = {
    slice: !0,
    parseOptions: {},
    ...t
  };
  const r = typeof n == "object" && n !== null, s = typeof n == "string";
  if (r)
    try {
      if (Array.isArray(n) && n.length > 0)
        return N.fromArray(n.map((l) => e.nodeFromJSON(l)));
      const o = e.nodeFromJSON(n);
      return t.errorOnInvalidContent && o.check(), o;
    } catch (i) {
      if (t.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: i });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", n, "Error:", i), ws("", e, t);
    }
  if (s) {
    if (t.errorOnInvalidContent) {
      let o = !1, l = "";
      const a = new Gf({
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
                getAttrs: (u) => (o = !0, l = typeof u == "string" ? u : u.outerHTML, null)
              }
            ]
          }
        })
      });
      if (t.slice ? Tn.fromSchema(a).parseSlice(si(n), t.parseOptions) : Tn.fromSchema(a).parse(si(n), t.parseOptions), t.errorOnInvalidContent && o)
        throw new Error("[tiptap error]: Invalid HTML content", { cause: new Error(`Invalid element found: ${l}`) });
    }
    const i = Tn.fromSchema(e);
    return t.slice ? i.parseSlice(si(n), t.parseOptions).content : i.parse(si(n), t.parseOptions);
  }
  return ws("", e, t);
}
function Sx(n, e, t) {
  const r = n.steps.length - 1;
  if (r < e)
    return;
  const s = n.steps[r];
  if (!(s instanceof Le || s instanceof ze))
    return;
  const i = n.mapping.maps[r];
  let o = 0;
  i.forEach((l, a, u, d) => {
    o === 0 && (o = d);
  }), n.setSelection(U.near(n.doc.resolve(o), t));
}
const wx = (n) => !("type" in n), kx = (n, e, t) => ({ tr: r, dispatch: s, editor: i }) => {
  var o;
  if (s) {
    t = {
      parseOptions: i.options.parseOptions,
      updateSelection: !0,
      applyInputRules: !1,
      applyPasteRules: !1,
      ...t
    };
    let l;
    const a = (w) => {
      i.emit("contentError", {
        editor: i,
        error: w,
        disableCollaboration: () => {
          i.storage.collaboration && (i.storage.collaboration.isDisabled = !0);
        }
      });
    }, u = {
      preserveWhitespace: "full",
      ...t.parseOptions
    };
    if (!t.errorOnInvalidContent && !i.options.enableContentCheck && i.options.emitContentError)
      try {
        ws(e, i.schema, {
          parseOptions: u,
          errorOnInvalidContent: !0
        });
      } catch (w) {
        a(w);
      }
    try {
      l = ws(e, i.schema, {
        parseOptions: u,
        errorOnInvalidContent: (o = t.errorOnInvalidContent) !== null && o !== void 0 ? o : i.options.enableContentCheck
      });
    } catch (w) {
      return a(w), !1;
    }
    let { from: d, to: h } = typeof n == "number" ? { from: n, to: n } : { from: n.from, to: n.to }, p = !0, g = !0;
    if ((wx(l) ? l : [l]).forEach((w) => {
      w.check(), p = p ? w.isText && w.marks.length === 0 : !1, g = g ? w.isBlock : !1;
    }), d === h && g) {
      const { parent: w } = r.doc.resolve(d);
      w.isTextblock && !w.type.spec.code && !w.childCount && (d -= 1, h += 1);
    }
    let S;
    if (p) {
      if (Array.isArray(e))
        S = e.map((w) => w.text || "").join("");
      else if (e instanceof N) {
        let w = "";
        e.forEach((x) => {
          x.text && (w += x.text);
        }), S = w;
      } else typeof e == "object" && e && e.text ? S = e.text : S = e;
      r.insertText(S, d, h);
    } else
      S = l, r.replaceWith(d, h, S);
    t.updateSelection && Sx(r, r.steps.length - 1, -1), t.applyInputRules && r.setMeta("applyInputRules", { from: d, text: S }), t.applyPasteRules && r.setMeta("applyPasteRules", { from: d, text: S });
  }
  return !0;
}, xx = () => ({ state: n, dispatch: e }) => kk(n, e), Cx = () => ({ state: n, dispatch: e }) => xk(n, e), Mx = () => ({ state: n, dispatch: e }) => Jh(n, e), vx = () => ({ state: n, dispatch: e }) => ep(n, e), Tx = () => ({ state: n, dispatch: e, tr: t }) => {
  try {
    const r = yo(n.doc, n.selection.$from.pos, -1);
    return r == null ? !1 : (t.join(r, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, Ox = () => ({ state: n, dispatch: e, tr: t }) => {
  try {
    const r = yo(n.doc, n.selection.$from.pos, 1);
    return r == null ? !1 : (t.join(r, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, Ex = () => ({ state: n, dispatch: e }) => Sk(n, e), Ax = () => ({ state: n, dispatch: e }) => wk(n, e);
function mp() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function Dx(n) {
  const e = n.split(/-(?!$)/);
  let t = e[e.length - 1];
  t === "Space" && (t = " ");
  let r, s, i, o;
  for (let l = 0; l < e.length - 1; l += 1) {
    const a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      o = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      s = !0;
    else if (/^s(hift)?$/i.test(a))
      i = !0;
    else if (/^mod$/i.test(a))
      Fi() || mp() ? o = !0 : s = !0;
    else
      throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return r && (t = `Alt-${t}`), s && (t = `Ctrl-${t}`), o && (t = `Meta-${t}`), i && (t = `Shift-${t}`), t;
}
const Nx = (n) => ({ editor: e, view: t, tr: r, dispatch: s }) => {
  const i = Dx(n).split(/-(?!$)/), o = i.find((u) => !["Alt", "Ctrl", "Meta", "Shift"].includes(u)), l = new KeyboardEvent("keydown", {
    key: o === "Space" ? " " : o,
    altKey: i.includes("Alt"),
    ctrlKey: i.includes("Ctrl"),
    metaKey: i.includes("Meta"),
    shiftKey: i.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), a = e.captureTransaction(() => {
    t.someProp("handleKeyDown", (u) => u(t, l));
  });
  return a == null || a.steps.forEach((u) => {
    const d = u.map(r.mapping);
    d && s && r.maybeStep(d);
  }), !0;
};
function ks(n, e, t = {}) {
  const { from: r, to: s, empty: i } = n.selection, o = e ? Be(e, n.schema) : null, l = [];
  n.doc.nodesBetween(r, s, (h, p) => {
    if (h.isText)
      return;
    const g = Math.max(r, p), b = Math.min(s, p + h.nodeSize);
    l.push({
      node: h,
      from: g,
      to: b
    });
  });
  const a = s - r, u = l.filter((h) => o ? o.name === h.node.type.name : !0).filter((h) => zi(h.node.attrs, t, { strict: !1 }));
  return i ? !!u.length : u.reduce((h, p) => h + p.to - p.from, 0) >= a;
}
const Rx = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const s = Be(n, t.schema);
  return ks(t, s, e) ? Ck(t, r) : !1;
}, Ix = () => ({ state: n, dispatch: e }) => sp(n, e), _x = (n) => ({ state: e, dispatch: t }) => {
  const r = Be(n, e.schema);
  return Pk(r)(e, t);
}, Px = () => ({ state: n, dispatch: e }) => np(n, e);
function Oo(n, e) {
  return e.nodes[n] ? "node" : e.marks[n] ? "mark" : null;
}
function Cd(n, e) {
  const t = typeof e == "string" ? [e] : e;
  return Object.keys(n).reduce((r, s) => (t.includes(s) || (r[s] = n[s]), r), {});
}
const Lx = (n, e) => ({ tr: t, state: r, dispatch: s }) => {
  let i = null, o = null;
  const l = Oo(typeof n == "string" ? n : n.name, r.schema);
  return l ? (l === "node" && (i = Be(n, r.schema)), l === "mark" && (o = _n(n, r.schema)), s && t.selection.ranges.forEach((a) => {
    r.doc.nodesBetween(a.$from.pos, a.$to.pos, (u, d) => {
      i && i === u.type && t.setNodeMarkup(d, void 0, Cd(u.attrs, e)), o && u.marks.length && u.marks.forEach((h) => {
        o === h.type && t.addMark(d, d + u.nodeSize, o.create(Cd(h.attrs, e)));
      });
    });
  }), !0) : !1;
}, zx = () => ({ tr: n, dispatch: e }) => (e && n.scrollIntoView(), !0), Fx = () => ({ tr: n, dispatch: e }) => {
  if (e) {
    const t = new pt(n.doc);
    n.setSelection(t);
  }
  return !0;
}, Bx = () => ({ state: n, dispatch: e }) => Zh(n, e), Hx = () => ({ state: n, dispatch: e }) => tp(n, e), Wx = () => ({ state: n, dispatch: e }) => Ok(n, e), $x = () => ({ state: n, dispatch: e }) => Dk(n, e), Vx = () => ({ state: n, dispatch: e }) => Ak(n, e);
function ma(n, e, t = {}, r = {}) {
  return ws(n, e, {
    slice: !1,
    parseOptions: t,
    errorOnInvalidContent: r.errorOnInvalidContent
  });
}
const Yx = (n, e = !1, t = {}, r = {}) => ({ editor: s, tr: i, dispatch: o, commands: l }) => {
  var a, u;
  const { doc: d } = i;
  if (t.preserveWhitespace !== "full") {
    const h = ma(n, s.schema, t, {
      errorOnInvalidContent: (a = r.errorOnInvalidContent) !== null && a !== void 0 ? a : s.options.enableContentCheck
    });
    return o && i.replaceWith(0, d.content.size, h).setMeta("preventUpdate", !e), !0;
  }
  return o && i.setMeta("preventUpdate", !e), l.insertContentAt({ from: 0, to: d.content.size }, n, {
    parseOptions: t,
    errorOnInvalidContent: (u = r.errorOnInvalidContent) !== null && u !== void 0 ? u : s.options.enableContentCheck
  });
};
function gp(n, e) {
  const t = _n(e, n.schema), { from: r, to: s, empty: i } = n.selection, o = [];
  i ? (n.storedMarks && o.push(...n.storedMarks), o.push(...n.selection.$head.marks())) : n.doc.nodesBetween(r, s, (a) => {
    o.push(...a.marks);
  });
  const l = o.find((a) => a.type.name === t.name);
  return l ? { ...l.attrs } : {};
}
function jx(n, e) {
  const t = new qa(n);
  return e.forEach((r) => {
    r.steps.forEach((s) => {
      t.step(s);
    });
  }), t;
}
function Ux(n) {
  for (let e = 0; e < n.edgeCount; e += 1) {
    const { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
function qx(n, e, t) {
  const r = [];
  return n.nodesBetween(e.from, e.to, (s, i) => {
    t(s) && r.push({
      node: s,
      pos: i
    });
  }), r;
}
function yp(n, e) {
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
function hc(n) {
  return (e) => yp(e.$from, n);
}
function Kx(n, e) {
  const t = {
    from: 0,
    to: n.content.size
  };
  return cp(n, t, e);
}
function Gx(n, e) {
  const t = Be(e, n.schema), { from: r, to: s } = n.selection, i = [];
  n.doc.nodesBetween(r, s, (l) => {
    i.push(l);
  });
  const o = i.reverse().find((l) => l.type.name === t.name);
  return o ? { ...o.attrs } : {};
}
function bp(n, e) {
  const t = Oo(typeof e == "string" ? e : e.name, n.schema);
  return t === "node" ? Gx(n, e) : t === "mark" ? gp(n, e) : {};
}
function Jx(n, e = JSON.stringify) {
  const t = {};
  return n.filter((r) => {
    const s = e(r);
    return Object.prototype.hasOwnProperty.call(t, s) ? !1 : t[s] = !0;
  });
}
function Qx(n) {
  const e = Jx(n);
  return e.length === 1 ? e : e.filter((t, r) => !e.filter((i, o) => o !== r).some((i) => t.oldRange.from >= i.oldRange.from && t.oldRange.to <= i.oldRange.to && t.newRange.from >= i.newRange.from && t.newRange.to <= i.newRange.to));
}
function Zx(n) {
  const { mapping: e, steps: t } = n, r = [];
  return e.maps.forEach((s, i) => {
    const o = [];
    if (s.ranges.length)
      s.forEach((l, a) => {
        o.push({ from: l, to: a });
      });
    else {
      const { from: l, to: a } = t[i];
      if (l === void 0 || a === void 0)
        return;
      o.push({ from: l, to: a });
    }
    o.forEach(({ from: l, to: a }) => {
      const u = e.slice(i).map(l, -1), d = e.slice(i).map(a), h = e.invert().map(u, -1), p = e.invert().map(d);
      r.push({
        oldRange: {
          from: h,
          to: p
        },
        newRange: {
          from: u,
          to: d
        }
      });
    });
  }), Qx(r);
}
function pc(n, e, t) {
  const r = [];
  return n === e ? t.resolve(n).marks().forEach((s) => {
    const i = t.resolve(n), o = fc(i, s.type);
    o && r.push({
      mark: s,
      ...o
    });
  }) : t.nodesBetween(n, e, (s, i) => {
    !s || (s == null ? void 0 : s.nodeSize) === void 0 || r.push(...s.marks.map((o) => ({
      from: i,
      to: i + s.nodeSize,
      mark: o
    })));
  }), r;
}
function Si(n, e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => {
    const s = n.find((i) => i.type === e && i.name === r);
    return s ? s.attribute.keepOnSplit : !1;
  }));
}
function ga(n, e, t = {}) {
  const { empty: r, ranges: s } = n.selection, i = e ? _n(e, n.schema) : null;
  if (r)
    return !!(n.storedMarks || n.selection.$from.marks()).filter((h) => i ? i.name === h.type.name : !0).find((h) => zi(h.attrs, t, { strict: !1 }));
  let o = 0;
  const l = [];
  if (s.forEach(({ $from: h, $to: p }) => {
    const g = h.pos, b = p.pos;
    n.doc.nodesBetween(g, b, (S, w) => {
      if (!S.isText && !S.marks.length)
        return;
      const x = Math.max(g, w), v = Math.min(b, w + S.nodeSize), T = v - x;
      o += T, l.push(...S.marks.map((D) => ({
        mark: D,
        from: x,
        to: v
      })));
    });
  }), o === 0)
    return !1;
  const a = l.filter((h) => i ? i.name === h.mark.type.name : !0).filter((h) => zi(h.mark.attrs, t, { strict: !1 })).reduce((h, p) => h + p.to - p.from, 0), u = l.filter((h) => i ? h.mark.type !== i && h.mark.type.excludes(i) : !0).reduce((h, p) => h + p.to - p.from, 0);
  return (a > 0 ? a + u : a) >= o;
}
function Xx(n, e, t = {}) {
  if (!e)
    return ks(n, null, t) || ga(n, null, t);
  const r = Oo(e, n.schema);
  return r === "node" ? ks(n, e, t) : r === "mark" ? ga(n, e, t) : !1;
}
function Md(n, e) {
  const { nodeExtensions: t } = vo(e), r = t.find((o) => o.name === n);
  if (!r)
    return !1;
  const s = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, i = ee(H(r, "group", s));
  return typeof i != "string" ? !1 : i.split(" ").includes("list");
}
function Eo(n, { checkChildren: e = !0, ignoreWhitespace: t = !1 } = {}) {
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
    let s = !0;
    return n.content.forEach((i) => {
      s !== !1 && (Eo(i, { ignoreWhitespace: t, checkChildren: e }) || (s = !1));
    }), s;
  }
  return !1;
}
function eC(n) {
  return n instanceof $;
}
function tC(n, e, t) {
  var r;
  const { selection: s } = e;
  let i = null;
  if (fp(s) && (i = s.$cursor), i) {
    const l = (r = n.storedMarks) !== null && r !== void 0 ? r : i.marks();
    return !!t.isInSet(l) || !l.some((a) => a.type.excludes(t));
  }
  const { ranges: o } = s;
  return o.some(({ $from: l, $to: a }) => {
    let u = l.depth === 0 ? n.doc.inlineContent && n.doc.type.allowsMarkType(t) : !1;
    return n.doc.nodesBetween(l.pos, a.pos, (d, h, p) => {
      if (u)
        return !1;
      if (d.isInline) {
        const g = !p || p.type.allowsMarkType(t), b = !!t.isInSet(d.marks) || !d.marks.some((S) => S.type.excludes(t));
        u = g && b;
      }
      return !u;
    }), u;
  });
}
const nC = (n, e = {}) => ({ tr: t, state: r, dispatch: s }) => {
  const { selection: i } = t, { empty: o, ranges: l } = i, a = _n(n, r.schema);
  if (s)
    if (o) {
      const u = gp(r, a);
      t.addStoredMark(a.create({
        ...u,
        ...e
      }));
    } else
      l.forEach((u) => {
        const d = u.$from.pos, h = u.$to.pos;
        r.doc.nodesBetween(d, h, (p, g) => {
          const b = Math.max(g, d), S = Math.min(g + p.nodeSize, h);
          p.marks.find((x) => x.type === a) ? p.marks.forEach((x) => {
            a === x.type && t.addMark(b, S, a.create({
              ...x.attrs,
              ...e
            }));
          }) : t.addMark(b, S, a.create(e));
        });
      });
  return tC(r, t, a);
}, rC = (n, e) => ({ tr: t }) => (t.setMeta(n, e), !0), sC = (n, e = {}) => ({ state: t, dispatch: r, chain: s }) => {
  const i = Be(n, t.schema);
  let o;
  return t.selection.$anchor.sameParent(t.selection.$head) && (o = t.selection.$anchor.parent.attrs), i.isTextblock ? s().command(({ commands: l }) => yd(i, { ...o, ...e })(t) ? !0 : l.clearNodes()).command(({ state: l }) => yd(i, { ...o, ...e })(l, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, iC = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, s = Yn(n, 0, r.content.size), i = $.create(r, s);
    e.setSelection(i);
  }
  return !0;
}, oC = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, { from: s, to: i } = typeof n == "number" ? { from: n, to: n } : n, o = V.atStart(r).from, l = V.atEnd(r).to, a = Yn(s, o, l), u = Yn(i, o, l), d = V.create(r, a, u);
    e.setSelection(d);
  }
  return !0;
}, lC = (n) => ({ state: e, dispatch: t }) => {
  const r = Be(n, e.schema);
  return Fk(r)(e, t);
};
function vd(n, e) {
  const t = n.storedMarks || n.selection.$to.parentOffset && n.selection.$from.marks();
  if (t) {
    const r = t.filter((s) => e == null ? void 0 : e.includes(s.type.name));
    n.tr.ensureMarks(r);
  }
}
const aC = ({ keepMarks: n = !0 } = {}) => ({ tr: e, state: t, dispatch: r, editor: s }) => {
  const { selection: i, doc: o } = e, { $from: l, $to: a } = i, u = s.extensionManager.attributes, d = Si(u, l.node().type.name, l.node().attrs);
  if (i instanceof $ && i.node.isBlock)
    return !l.parentOffset || !sn(o, l.pos) ? !1 : (r && (n && vd(t, s.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
  if (!l.parent.isBlock)
    return !1;
  const h = a.parentOffset === a.parent.content.size, p = l.depth === 0 ? void 0 : Ux(l.node(-1).contentMatchAt(l.indexAfter(-1)));
  let g = h && p ? [
    {
      type: p,
      attrs: d
    }
  ] : void 0, b = sn(e.doc, e.mapping.map(l.pos), 1, g);
  if (!g && !b && sn(e.doc, e.mapping.map(l.pos), 1, p ? [{ type: p }] : void 0) && (b = !0, g = p ? [
    {
      type: p,
      attrs: d
    }
  ] : void 0), r) {
    if (b && (i instanceof V && e.deleteSelection(), e.split(e.mapping.map(l.pos), 1, g), p && !h && !l.parentOffset && l.parent.type !== p)) {
      const S = e.mapping.map(l.before()), w = e.doc.resolve(S);
      l.node(-1).canReplaceWith(w.index(), w.index() + 1, p) && e.setNodeMarkup(e.mapping.map(l.before()), p);
    }
    n && vd(t, s.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return b;
}, cC = (n, e = {}) => ({ tr: t, state: r, dispatch: s, editor: i }) => {
  var o;
  const l = Be(n, r.schema), { $from: a, $to: u } = r.selection, d = r.selection.node;
  if (d && d.isBlock || a.depth < 2 || !a.sameParent(u))
    return !1;
  const h = a.node(-1);
  if (h.type !== l)
    return !1;
  const p = i.extensionManager.attributes;
  if (a.parent.content.size === 0 && a.node(-1).childCount === a.indexAfter(-1)) {
    if (a.depth === 2 || a.node(-3).type !== l || a.index(-2) !== a.node(-2).childCount - 1)
      return !1;
    if (s) {
      let x = N.empty;
      const v = a.index(-1) ? 1 : a.index(-2) ? 2 : 3;
      for (let L = a.depth - v; L >= a.depth - 3; L -= 1)
        x = N.from(a.node(L).copy(x));
      const T = a.indexAfter(-1) < a.node(-2).childCount ? 1 : a.indexAfter(-2) < a.node(-3).childCount ? 2 : 3, D = {
        ...Si(p, a.node().type.name, a.node().attrs),
        ...e
      }, A = ((o = l.contentMatch.defaultType) === null || o === void 0 ? void 0 : o.createAndFill(D)) || void 0;
      x = x.append(N.from(l.createAndFill(null, A) || void 0));
      const R = a.before(a.depth - (v - 1));
      t.replace(R, a.after(-T), new z(x, 4 - v, 0));
      let O = -1;
      t.doc.nodesBetween(R, t.doc.content.size, (L, Y) => {
        if (O > -1)
          return !1;
        L.isTextblock && L.content.size === 0 && (O = Y + 1);
      }), O > -1 && t.setSelection(V.near(t.doc.resolve(O))), t.scrollIntoView();
    }
    return !0;
  }
  const g = u.pos === a.end() ? h.contentMatchAt(0).defaultType : null, b = {
    ...Si(p, h.type.name, h.attrs),
    ...e
  }, S = {
    ...Si(p, a.node().type.name, a.node().attrs),
    ...e
  };
  t.delete(a.pos, u.pos);
  const w = g ? [
    { type: l, attrs: b },
    { type: g, attrs: S }
  ] : [{ type: l, attrs: b }];
  if (!sn(t.doc, a.pos, 2))
    return !1;
  if (s) {
    const { selection: x, storedMarks: v } = r, { splittableMarks: T } = i.extensionManager, D = v || x.$to.parentOffset && x.$from.marks();
    if (t.split(a.pos, 2, w).scrollIntoView(), !D || !s)
      return !0;
    const A = D.filter((R) => T.includes(R.type.name));
    t.ensureMarks(A);
  }
  return !0;
}, Dl = (n, e) => {
  const t = hc((o) => o.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(Math.max(0, t.pos - 1)).before(t.depth);
  if (r === void 0)
    return !0;
  const s = n.doc.nodeAt(r);
  return t.node.type === (s == null ? void 0 : s.type) && Rn(n.doc, t.pos) && n.join(t.pos), !0;
}, Nl = (n, e) => {
  const t = hc((o) => o.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(t.start).after(t.depth);
  if (r === void 0)
    return !0;
  const s = n.doc.nodeAt(r);
  return t.node.type === (s == null ? void 0 : s.type) && Rn(n.doc, r) && n.join(r), !0;
}, uC = (n, e, t, r = {}) => ({ editor: s, tr: i, state: o, dispatch: l, chain: a, commands: u, can: d }) => {
  const { extensions: h, splittableMarks: p } = s.extensionManager, g = Be(n, o.schema), b = Be(e, o.schema), { selection: S, storedMarks: w } = o, { $from: x, $to: v } = S, T = x.blockRange(v), D = w || S.$to.parentOffset && S.$from.marks();
  if (!T)
    return !1;
  const A = hc((R) => Md(R.type.name, h))(S);
  if (T.depth >= 1 && A && T.depth - A.depth <= 1) {
    if (A.node.type === g)
      return u.liftListItem(b);
    if (Md(A.node.type.name, h) && g.validContent(A.node.content) && l)
      return a().command(() => (i.setNodeMarkup(A.pos, g), !0)).command(() => Dl(i, g)).command(() => Nl(i, g)).run();
  }
  return !t || !D || !l ? a().command(() => d().wrapInList(g, r) ? !0 : u.clearNodes()).wrapInList(g, r).command(() => Dl(i, g)).command(() => Nl(i, g)).run() : a().command(() => {
    const R = d().wrapInList(g, r), O = D.filter((L) => p.includes(L.type.name));
    return i.ensureMarks(O), R ? !0 : u.clearNodes();
  }).wrapInList(g, r).command(() => Dl(i, g)).command(() => Nl(i, g)).run();
}, dC = (n, e = {}, t = {}) => ({ state: r, commands: s }) => {
  const { extendEmptyMarkRange: i = !1 } = t, o = _n(n, r.schema);
  return ga(r, o, e) ? s.unsetMark(o, { extendEmptyMarkRange: i }) : s.setMark(o, e);
}, fC = (n, e, t = {}) => ({ state: r, commands: s }) => {
  const i = Be(n, r.schema), o = Be(e, r.schema), l = ks(r, i, t);
  let a;
  return r.selection.$anchor.sameParent(r.selection.$head) && (a = r.selection.$anchor.parent.attrs), l ? s.setNode(o, a) : s.setNode(i, { ...a, ...t });
}, hC = (n, e = {}) => ({ state: t, commands: r }) => {
  const s = Be(n, t.schema);
  return ks(t, s, e) ? r.lift(s) : r.wrapIn(s, e);
}, pC = () => ({ state: n, dispatch: e }) => {
  const t = n.plugins;
  for (let r = 0; r < t.length; r += 1) {
    const s = t[r];
    let i;
    if (s.spec.isInputRules && (i = s.getState(n))) {
      if (e) {
        const o = n.tr, l = i.transform;
        for (let a = l.steps.length - 1; a >= 0; a -= 1)
          o.step(l.steps[a].invert(l.docs[a]));
        if (i.text) {
          const a = o.doc.resolve(i.from).marks();
          o.replaceWith(i.from, i.to, n.schema.text(i.text, a));
        } else
          o.delete(i.from, i.to);
      }
      return !0;
    }
  }
  return !1;
}, mC = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, { empty: r, ranges: s } = t;
  return r || e && s.forEach((i) => {
    n.removeMark(i.$from.pos, i.$to.pos);
  }), !0;
}, gC = (n, e = {}) => ({ tr: t, state: r, dispatch: s }) => {
  var i;
  const { extendEmptyMarkRange: o = !1 } = e, { selection: l } = t, a = _n(n, r.schema), { $from: u, empty: d, ranges: h } = l;
  if (!s)
    return !0;
  if (d && o) {
    let { from: p, to: g } = l;
    const b = (i = u.marks().find((w) => w.type === a)) === null || i === void 0 ? void 0 : i.attrs, S = fc(u, a, b);
    S && (p = S.from, g = S.to), t.removeMark(p, g, a);
  } else
    h.forEach((p) => {
      t.removeMark(p.$from.pos, p.$to.pos, a);
    });
  return t.removeStoredMark(a), !0;
}, yC = (n, e = {}) => ({ tr: t, state: r, dispatch: s }) => {
  let i = null, o = null;
  const l = Oo(typeof n == "string" ? n : n.name, r.schema);
  return l ? (l === "node" && (i = Be(n, r.schema)), l === "mark" && (o = _n(n, r.schema)), s && t.selection.ranges.forEach((a) => {
    const u = a.$from.pos, d = a.$to.pos;
    let h, p, g, b;
    t.selection.empty ? r.doc.nodesBetween(u, d, (S, w) => {
      i && i === S.type && (g = Math.max(w, u), b = Math.min(w + S.nodeSize, d), h = w, p = S);
    }) : r.doc.nodesBetween(u, d, (S, w) => {
      w < u && i && i === S.type && (g = Math.max(w, u), b = Math.min(w + S.nodeSize, d), h = w, p = S), w >= u && w <= d && (i && i === S.type && t.setNodeMarkup(w, void 0, {
        ...S.attrs,
        ...e
      }), o && S.marks.length && S.marks.forEach((x) => {
        if (o === x.type) {
          const v = Math.max(w, u), T = Math.min(w + S.nodeSize, d);
          t.addMark(v, T, o.create({
            ...x.attrs,
            ...e
          }));
        }
      }));
    }), p && (h !== void 0 && t.setNodeMarkup(h, void 0, {
      ...p.attrs,
      ...e
    }), o && p.marks.length && p.marks.forEach((S) => {
      o === S.type && t.addMark(g, b, o.create({
        ...S.attrs,
        ...e
      }));
    }));
  }), !0) : !1;
}, bC = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const s = Be(n, t.schema);
  return Nk(s, e)(t, r);
}, SC = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const s = Be(n, t.schema);
  return Rk(s, e)(t, r);
};
var wC = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur: tx,
  clearContent: nx,
  clearNodes: rx,
  command: sx,
  createParagraphNear: ix,
  cut: ox,
  deleteCurrentNode: lx,
  deleteNode: ax,
  deleteRange: cx,
  deleteSelection: ux,
  enter: dx,
  exitCode: fx,
  extendMarkRange: hx,
  first: px,
  focus: gx,
  forEach: yx,
  insertContent: bx,
  insertContentAt: kx,
  joinBackward: Mx,
  joinDown: Cx,
  joinForward: vx,
  joinItemBackward: Tx,
  joinItemForward: Ox,
  joinTextblockBackward: Ex,
  joinTextblockForward: Ax,
  joinUp: xx,
  keyboardShortcut: Nx,
  lift: Rx,
  liftEmptyBlock: Ix,
  liftListItem: _x,
  newlineInCode: Px,
  resetAttributes: Lx,
  scrollIntoView: zx,
  selectAll: Fx,
  selectNodeBackward: Bx,
  selectNodeForward: Hx,
  selectParentNode: Wx,
  selectTextblockEnd: $x,
  selectTextblockStart: Vx,
  setContent: Yx,
  setMark: nC,
  setMeta: rC,
  setNode: sC,
  setNodeSelection: iC,
  setTextSelection: oC,
  sinkListItem: lC,
  splitBlock: aC,
  splitListItem: cC,
  toggleList: uC,
  toggleMark: dC,
  toggleNode: fC,
  toggleWrap: hC,
  undoInputRule: pC,
  unsetAllMarks: mC,
  unsetMark: gC,
  updateAttributes: yC,
  wrapIn: bC,
  wrapInList: SC
});
const kC = De.create({
  name: "commands",
  addCommands() {
    return {
      ...wC
    };
  }
}), xC = De.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new Ne({
        key: new Ue("tiptapDrop"),
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
}), CC = De.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new Ne({
        key: new Ue("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), MC = new Ue("focusEvents"), vC = De.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: n } = this;
    return [
      new Ne({
        key: MC,
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
}), TC = De.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const n = () => this.editor.commands.first(({ commands: o }) => [
      () => o.undoInputRule(),
      // maybe convert first text block node to default node
      () => o.command(({ tr: l }) => {
        const { selection: a, doc: u } = l, { empty: d, $anchor: h } = a, { pos: p, parent: g } = h, b = h.parent.isTextblock && p > 0 ? l.doc.resolve(p - 1) : h, S = b.parent.type.spec.isolating, w = h.pos - h.parentOffset, x = S && b.parent.childCount === 1 ? w === h.pos : U.atStart(u).from === p;
        return !d || !g.type.isTextblock || g.textContent.length || !x || x && h.parent.type.name === "paragraph" ? !1 : o.clearNodes();
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
    }, s = {
      ...r
    }, i = {
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
    return Fi() || mp() ? i : s;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new Ne({
        key: new Ue("clearDocument"),
        appendTransaction: (n, e, t) => {
          if (n.some((S) => S.getMeta("composition")))
            return;
          const r = n.some((S) => S.docChanged) && !e.doc.eq(t.doc), s = n.some((S) => S.getMeta("preventClearDocument"));
          if (!r || s)
            return;
          const { empty: i, from: o, to: l } = e.selection, a = U.atStart(e.doc).from, u = U.atEnd(e.doc).to;
          if (i || !(o === a && l === u) || !Eo(t.doc))
            return;
          const p = t.tr, g = Co({
            state: t,
            transaction: p
          }), { commands: b } = new Mo({
            editor: this.editor,
            state: g
          });
          if (b.clearNodes(), !!p.steps.length)
            return p;
        }
      })
    ];
  }
}), OC = De.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new Ne({
        key: new Ue("tiptapPaste"),
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
}), EC = De.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new Ne({
        key: new Ue("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
});
class Wn {
  get name() {
    return this.node.type.name;
  }
  constructor(e, t, r = !1, s = null) {
    this.currentNode = null, this.actualDepth = null, this.isBlock = r, this.resolvedPos = e, this.editor = t, this.currentNode = s;
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
    return new Wn(t, this.editor);
  }
  get before() {
    let e = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.from - 3)), new Wn(e, this.editor);
  }
  get after() {
    let e = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.to + 3)), new Wn(e, this.editor);
  }
  get children() {
    const e = [];
    return this.node.content.forEach((t, r) => {
      const s = t.isBlock && !t.isTextblock, i = t.isAtom && !t.isText, o = this.pos + r + (i ? 0 : 1);
      if (o < 0 || o > this.resolvedPos.doc.nodeSize - 2)
        return;
      const l = this.resolvedPos.doc.resolve(o);
      if (!s && l.depth <= this.depth)
        return;
      const a = new Wn(l, this.editor, s, s ? t : null);
      s && (a.actualDepth = this.depth + 1), e.push(new Wn(l, this.editor, s, s ? t : null));
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
    let r = null, s = this.parent;
    for (; s && !r; ) {
      if (s.node.type.name === e)
        if (Object.keys(t).length > 0) {
          const i = s.node.attrs, o = Object.keys(t);
          for (let l = 0; l < o.length; l += 1) {
            const a = o[l];
            if (i[a] !== t[a])
              break;
          }
        } else
          r = s;
      s = s.parent;
    }
    return r;
  }
  querySelector(e, t = {}) {
    return this.querySelectorAll(e, t, !0)[0] || null;
  }
  querySelectorAll(e, t = {}, r = !1) {
    let s = [];
    if (!this.children || this.children.length === 0)
      return s;
    const i = Object.keys(t);
    return this.children.forEach((o) => {
      r && s.length > 0 || (o.node.type.name === e && i.every((a) => t[a] === o.node.attrs[a]) && s.push(o), !(r && s.length > 0) && (s = s.concat(o.querySelectorAll(e, t, r))));
    }), s;
  }
  setAttribute(e) {
    const { tr: t } = this.editor.state;
    t.setNodeMarkup(this.from, void 0, {
      ...this.node.attrs,
      ...e
    }), this.editor.view.dispatch(t);
  }
}
const AC = `.ProseMirror {
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
function DC(n, e, t) {
  const r = document.querySelector("style[data-tiptap-style]");
  if (r !== null)
    return r;
  const s = document.createElement("style");
  return e && s.setAttribute("nonce", e), s.setAttribute("data-tiptap-style", ""), s.innerHTML = n, document.getElementsByTagName("head")[0].appendChild(s), s;
}
class NC extends Bk {
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
    }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.on("contentError", this.options.onContentError), this.createView(), this.injectCSS(), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), this.on("drop", ({ event: t, slice: r, moved: s }) => this.options.onDrop(t, r, s)), this.on("paste", ({ event: t, slice: r }) => this.options.onPaste(t, r)), window.setTimeout(() => {
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
    this.options.injectCSS && document && (this.css = DC(AC, this.options.injectNonce));
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
    const r = ap(t) ? t(e, [...this.state.plugins]) : [...this.state.plugins, e], s = this.state.reconfigure({ plugins: r });
    return this.view.updateState(s), s;
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
    if ([].concat(e).forEach((i) => {
      const o = typeof i == "string" ? `${i}$` : i.key;
      r = r.filter((l) => !l.key.startsWith(o));
    }), t.length === r.length)
      return;
    const s = this.state.reconfigure({
      plugins: r
    });
    return this.view.updateState(s), s;
  }
  /**
   * Creates an extension manager.
   */
  createExtensionManager() {
    var e, t;
    const s = [...this.options.enableCoreExtensions ? [
      CC,
      ex.configure({
        blockSeparator: (t = (e = this.options.coreExtensionOptions) === null || e === void 0 ? void 0 : e.clipboardTextSerializer) === null || t === void 0 ? void 0 : t.blockSeparator
      }),
      kC,
      vC,
      TC,
      EC,
      xC,
      OC
    ].filter((i) => typeof this.options.enableCoreExtensions == "object" ? this.options.enableCoreExtensions[i.name] !== !1 : !0) : [], ...this.options.extensions].filter((i) => ["extension", "node", "mark"].includes(i == null ? void 0 : i.type));
    this.extensionManager = new Mr(s, this);
  }
  /**
   * Creates an command manager.
   */
  createCommandManager() {
    this.commandManager = new Mo({
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
      t = ma(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: this.options.enableContentCheck });
    } catch (o) {
      if (!(o instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(o.message))
        throw o;
      this.emit("contentError", {
        editor: this,
        error: o,
        disableCollaboration: () => {
          this.storage.collaboration && (this.storage.collaboration.isDisabled = !0), this.options.extensions = this.options.extensions.filter((l) => l.name !== "collaboration"), this.createExtensionManager();
        }
      }), t = ma(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: !1 });
    }
    const r = hp(t, this.options.autofocus);
    this.view = new Kh(this.options.element, {
      ...this.options.editorProps,
      attributes: {
        // add `role="textbox"` to the editor element
        role: "textbox",
        ...(e = this.options.editorProps) === null || e === void 0 ? void 0 : e.attributes
      },
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: Cr.create({
        doc: t,
        selection: r || void 0
      })
    });
    const s = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(s), this.createNodeViews(), this.prependClass();
    const i = this.view.dom;
    i.editor = this;
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
    const s = e.getMeta("focus"), i = e.getMeta("blur");
    s && this.emit("focus", {
      editor: this,
      event: s.event,
      transaction: e
    }), i && this.emit("blur", {
      editor: this,
      event: i.event,
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
    return bp(this.state, e);
  }
  isActive(e, t) {
    const r = typeof e == "string" ? e : null, s = typeof e == "string" ? t : e;
    return Xx(this.state, r, s);
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
    return uc(this.state.doc.content, this.schema);
  }
  /**
   * Get the document as text.
   */
  getText(e) {
    const { blockSeparator: t = `

`, textSerializers: r = {} } = e || {};
    return Kx(this.state.doc, {
      blockSeparator: t,
      textSerializers: {
        ...up(this.schema),
        ...r
      }
    });
  }
  /**
   * Check if there is no content.
   */
  get isEmpty() {
    return Eo(this.state.doc);
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
    return new Wn(t, this);
  }
  get $doc() {
    return this.$pos(0);
  }
}
function rr(n) {
  return new Ns({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const s = ee(n.getAttributes, void 0, r);
      if (s === !1 || s === null)
        return null;
      const { tr: i } = e, o = r[r.length - 1], l = r[0];
      if (o) {
        const a = l.search(/\S/), u = t.from + l.indexOf(o), d = u + o.length;
        if (pc(t.from, t.to, e.doc).filter((g) => g.mark.type.excluded.find((S) => S === n.type && S !== g.mark.type)).filter((g) => g.to > u).length)
          return null;
        d < t.to && i.delete(d, t.to), u > t.from && i.delete(t.from + a, u);
        const p = t.from + a + o.length;
        i.addMark(t.from + a, p, n.type.create(s || {})), i.removeStoredMark(n.type);
      }
    }
  });
}
function Sp(n) {
  return new Ns({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const s = ee(n.getAttributes, void 0, r) || {}, { tr: i } = e, o = t.from;
      let l = t.to;
      const a = n.type.create(s);
      if (r[1]) {
        const u = r[0].lastIndexOf(r[1]);
        let d = o + u;
        d > l ? d = l : l = d + r[1].length;
        const h = r[0][r[0].length - 1];
        i.insertText(h, o + r[0].length - 1), i.replaceWith(d, l, a);
      } else if (r[0]) {
        const u = n.type.isInline ? o : o - 1;
        i.insert(u, n.type.create(s)).delete(i.mapping.map(o), i.mapping.map(l));
      }
      i.scrollIntoView();
    }
  });
}
function ya(n) {
  return new Ns({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const s = e.doc.resolve(t.from), i = ee(n.getAttributes, void 0, r) || {};
      if (!s.node(-1).canReplaceWith(s.index(-1), s.indexAfter(-1), n.type))
        return null;
      e.tr.delete(t.from, t.to).setBlockType(t.from, t.from, n.type, i);
    }
  });
}
function Me(n) {
  return new Ns({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      let s = n.replace, i = t.from;
      const o = t.to;
      if (r[1]) {
        const l = r[0].lastIndexOf(r[1]);
        s += r[0].slice(l + r[1].length), i += l;
        const a = i - o;
        a > 0 && (s = r[0].slice(l - a, l) + s, i = o);
      }
      e.tr.insertText(s, i, o);
    }
  });
}
function xs(n) {
  return new Ns({
    find: n.find,
    handler: ({ state: e, range: t, match: r, chain: s }) => {
      const i = ee(n.getAttributes, void 0, r) || {}, o = e.tr.delete(t.from, t.to), a = o.doc.resolve(t.from).blockRange(), u = a && Ua(a, n.type, i);
      if (!u)
        return null;
      if (o.wrap(a, u), n.keepMarks && n.editor) {
        const { selection: h, storedMarks: p } = e, { splittableMarks: g } = n.editor.extensionManager, b = p || h.$to.parentOffset && h.$from.marks();
        if (b) {
          const S = b.filter((w) => g.includes(w.type.name));
          o.ensureMarks(S);
        }
      }
      if (n.keepAttributes) {
        const h = n.type.name === "bulletList" || n.type.name === "orderedList" ? "listItem" : "taskList";
        s().updateAttributes(h, i).run();
      }
      const d = o.doc.resolve(t.from - 1).nodeBefore;
      d && d.type === n.type && Rn(o.doc, t.from - 1) && (!n.joinPredicate || n.joinPredicate(r, d)) && o.join(t.from - 1);
    }
  });
}
class _e {
  constructor(e = {}) {
    this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = ee(H(this, "addOptions", {
      name: this.name
    }))), this.storage = ee(H(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new _e(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => To(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new _e(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = ee(H(t, "addOptions", {
      name: t.name
    })), t.storage = ee(H(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function Nn(n) {
  return new Kk({
    find: n.find,
    handler: ({ state: e, range: t, match: r, pasteEvent: s }) => {
      const i = ee(n.getAttributes, void 0, r, s);
      if (i === !1 || i === null)
        return null;
      const { tr: o } = e, l = r[r.length - 1], a = r[0];
      let u = t.to;
      if (l) {
        const d = a.search(/\S/), h = t.from + a.indexOf(l), p = h + l.length;
        if (pc(t.from, t.to, e.doc).filter((b) => b.mark.type.excluded.find((w) => w === n.type && w !== b.mark.type)).filter((b) => b.to > h).length)
          return null;
        p < t.to && o.delete(p, t.to), h > t.from && o.delete(t.from + d, h), u = t.from + d + l.length, o.addMark(t.from + d, u, n.type.create(i || {})), o.removeStoredMark(n.type);
      }
    }
  });
}
function RC(n, e) {
  const { selection: t } = n, { $from: r } = t;
  if (t instanceof $) {
    const i = r.index();
    return r.parent.canReplaceWith(i, i + 1, e);
  }
  let s = r.depth;
  for (; s >= 0; ) {
    const i = r.index(s);
    if (r.node(s).contentMatchAt(i).matchType(e))
      return !0;
    s -= 1;
  }
  return !1;
}
function IC(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var ba = { exports: {} }, Rl = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Td;
function _C() {
  if (Td) return Rl;
  Td = 1;
  var n = Te;
  function e(h, p) {
    return h === p && (h !== 0 || 1 / h === 1 / p) || h !== h && p !== p;
  }
  var t = typeof Object.is == "function" ? Object.is : e, r = n.useState, s = n.useEffect, i = n.useLayoutEffect, o = n.useDebugValue;
  function l(h, p) {
    var g = p(), b = r({ inst: { value: g, getSnapshot: p } }), S = b[0].inst, w = b[1];
    return i(function() {
      S.value = g, S.getSnapshot = p, a(S) && w({ inst: S });
    }, [h, g, p]), s(function() {
      return a(S) && w({ inst: S }), h(function() {
        a(S) && w({ inst: S });
      });
    }, [h]), o(g), g;
  }
  function a(h) {
    var p = h.getSnapshot;
    h = h.value;
    try {
      var g = p();
      return !t(h, g);
    } catch {
      return !0;
    }
  }
  function u(h, p) {
    return p();
  }
  var d = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? u : l;
  return Rl.useSyncExternalStore = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : d, Rl;
}
var Il = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Od;
function PC() {
  return Od || (Od = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var n = Te, e = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function t(T) {
      {
        for (var D = arguments.length, A = new Array(D > 1 ? D - 1 : 0), R = 1; R < D; R++)
          A[R - 1] = arguments[R];
        r("error", T, A);
      }
    }
    function r(T, D, A) {
      {
        var R = e.ReactDebugCurrentFrame, O = R.getStackAddendum();
        O !== "" && (D += "%s", A = A.concat([O]));
        var L = A.map(function(Y) {
          return String(Y);
        });
        L.unshift("Warning: " + D), Function.prototype.apply.call(console[T], console, L);
      }
    }
    function s(T, D) {
      return T === D && (T !== 0 || 1 / T === 1 / D) || T !== T && D !== D;
    }
    var i = typeof Object.is == "function" ? Object.is : s, o = n.useState, l = n.useEffect, a = n.useLayoutEffect, u = n.useDebugValue, d = !1, h = !1;
    function p(T, D, A) {
      d || n.startTransition !== void 0 && (d = !0, t("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var R = D();
      if (!h) {
        var O = D();
        i(R, O) || (t("The result of getSnapshot should be cached to avoid an infinite loop"), h = !0);
      }
      var L = o({
        inst: {
          value: R,
          getSnapshot: D
        }
      }), Y = L[0].inst, te = L[1];
      return a(function() {
        Y.value = R, Y.getSnapshot = D, g(Y) && te({
          inst: Y
        });
      }, [T, R, D]), l(function() {
        g(Y) && te({
          inst: Y
        });
        var re = function() {
          g(Y) && te({
            inst: Y
          });
        };
        return T(re);
      }, [T]), u(R), R;
    }
    function g(T) {
      var D = T.getSnapshot, A = T.value;
      try {
        var R = D();
        return !i(A, R);
      } catch {
        return !0;
      }
    }
    function b(T, D, A) {
      return D();
    }
    var S = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", w = !S, x = w ? b : p, v = n.useSyncExternalStore !== void 0 ? n.useSyncExternalStore : x;
    Il.useSyncExternalStore = v, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Il;
}
process.env.NODE_ENV === "production" ? ba.exports = _C() : ba.exports = PC();
var Ao = ba.exports;
const LC = (...n) => (e) => {
  n.forEach((t) => {
    typeof t == "function" ? t(e) : t && (t.current = e);
  });
}, zC = ({ contentComponent: n }) => {
  const e = Ao.useSyncExternalStore(n.subscribe, n.getSnapshot, n.getServerSnapshot);
  return Te.createElement(Te.Fragment, null, Object.values(e));
};
function FC() {
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
        [t]: kf.createPortal(r.reactElement, r.element, t)
      }, n.forEach((s) => s());
    },
    /**
     * Removes a NodeView Renderer from the editor.
     */
    removeRenderer(t) {
      const r = { ...e };
      delete r[t], e = r, n.forEach((s) => s());
    }
  };
}
class BC extends Te.Component {
  constructor(e) {
    var t;
    super(e), this.editorContentRef = Te.createRef(), this.initialized = !1, this.state = {
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
      }), e.contentComponent = FC(), this.state.hasContentComponentInitialized || (this.unsubscribeToContentComponent = e.contentComponent.subscribe(() => {
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
    return Te.createElement(
      Te.Fragment,
      null,
      Te.createElement("div", { ref: LC(t, this.editorContentRef), ...r }),
      (e == null ? void 0 : e.contentComponent) && Te.createElement(zC, { contentComponent: e.contentComponent })
    );
  }
}
const HC = Pe((n, e) => {
  const t = Te.useMemo(() => Math.floor(Math.random() * 4294967295).toString(), [n.editor]);
  return Te.createElement(BC, {
    key: t,
    innerRef: e,
    ...n
  });
}), WC = Te.memo(HC);
var $C = function n(e, t) {
  if (e === t) return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor) return !1;
    var r, s, i;
    if (Array.isArray(e)) {
      if (r = e.length, r != t.length) return !1;
      for (s = r; s-- !== 0; )
        if (!n(e[s], t[s])) return !1;
      return !0;
    }
    if (e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1;
      for (s of e.entries())
        if (!t.has(s[0])) return !1;
      for (s of e.entries())
        if (!n(s[1], t.get(s[0]))) return !1;
      return !0;
    }
    if (e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1;
      for (s of e.entries())
        if (!t.has(s[0])) return !1;
      return !0;
    }
    if (ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (r = e.length, r != t.length) return !1;
      for (s = r; s-- !== 0; )
        if (e[s] !== t[s]) return !1;
      return !0;
    }
    if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString) return e.toString() === t.toString();
    if (i = Object.keys(e), r = i.length, r !== Object.keys(t).length) return !1;
    for (s = r; s-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, i[s])) return !1;
    for (s = r; s-- !== 0; ) {
      var o = i[s];
      if (!(o === "_owner" && e.$$typeof) && !n(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}, VC = /* @__PURE__ */ IC($C), Sa = { exports: {} }, _l = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ed;
function YC() {
  if (Ed) return _l;
  Ed = 1;
  var n = Te, e = Ao;
  function t(u, d) {
    return u === d && (u !== 0 || 1 / u === 1 / d) || u !== u && d !== d;
  }
  var r = typeof Object.is == "function" ? Object.is : t, s = e.useSyncExternalStore, i = n.useRef, o = n.useEffect, l = n.useMemo, a = n.useDebugValue;
  return _l.useSyncExternalStoreWithSelector = function(u, d, h, p, g) {
    var b = i(null);
    if (b.current === null) {
      var S = { hasValue: !1, value: null };
      b.current = S;
    } else S = b.current;
    b = l(function() {
      function x(R) {
        if (!v) {
          if (v = !0, T = R, R = p(R), g !== void 0 && S.hasValue) {
            var O = S.value;
            if (g(O, R)) return D = O;
          }
          return D = R;
        }
        if (O = D, r(T, R)) return O;
        var L = p(R);
        return g !== void 0 && g(O, L) ? O : (T = R, D = L);
      }
      var v = !1, T, D, A = h === void 0 ? null : h;
      return [function() {
        return x(d());
      }, A === null ? void 0 : function() {
        return x(A());
      }];
    }, [d, h, p, g]);
    var w = s(u, b[0], b[1]);
    return o(function() {
      S.hasValue = !0, S.value = w;
    }, [w]), a(w), w;
  }, _l;
}
var Pl = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ad;
function jC() {
  return Ad || (Ad = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var n = Te, e = Ao;
    function t(d, h) {
      return d === h && (d !== 0 || 1 / d === 1 / h) || d !== d && h !== h;
    }
    var r = typeof Object.is == "function" ? Object.is : t, s = e.useSyncExternalStore, i = n.useRef, o = n.useEffect, l = n.useMemo, a = n.useDebugValue;
    function u(d, h, p, g, b) {
      var S = i(null), w;
      S.current === null ? (w = {
        hasValue: !1,
        value: null
      }, S.current = w) : w = S.current;
      var x = l(function() {
        var A = !1, R, O, L = function(ye) {
          if (!A) {
            A = !0, R = ye;
            var be = g(ye);
            if (b !== void 0 && w.hasValue) {
              var j = w.value;
              if (b(j, be))
                return O = j, j;
            }
            return O = be, be;
          }
          var q = R, W = O;
          if (r(q, ye))
            return W;
          var G = g(ye);
          return b !== void 0 && b(W, G) ? W : (R = ye, O = G, G);
        }, Y = p === void 0 ? null : p, te = function() {
          return L(h());
        }, re = Y === null ? void 0 : function() {
          return L(Y());
        };
        return [te, re];
      }, [h, p, g, b]), v = x[0], T = x[1], D = s(d, v, T);
      return o(function() {
        w.hasValue = !0, w.value = D;
      }, [D]), a(D), D;
    }
    Pl.useSyncExternalStoreWithSelector = u, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Pl;
}
process.env.NODE_ENV === "production" ? Sa.exports = YC() : Sa.exports = jC();
var UC = Sa.exports;
const qC = typeof window < "u" ? af : Or;
class KC {
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
        this.transactionNumber += 1, this.subscribers.forEach((s) => s());
      }, r = this.editor;
      return r.on("transaction", t), () => {
        r.off("transaction", t);
      };
    }
  }
}
function GC(n) {
  var e;
  const [t] = ce(() => new KC(n.editor)), r = UC.useSyncExternalStoreWithSelector(t.subscribe, t.getSnapshot, t.getServerSnapshot, n.selector, (e = n.equalityFn) !== null && e !== void 0 ? e : VC);
  return qC(() => t.watch(n.editor), [n.editor, t]), lf(r), r;
}
const Dd = process.env.NODE_ENV !== "production", wa = typeof window > "u", JC = wa || !!(typeof window < "u" && window.next);
class mc {
  constructor(e) {
    this.editor = null, this.subscriptions = /* @__PURE__ */ new Set(), this.isComponentMounted = !1, this.previousDeps = null, this.instanceId = "", this.options = e, this.subscriptions = /* @__PURE__ */ new Set(), this.setEditor(this.getInitialEditor()), this.scheduleDestroy(), this.getEditor = this.getEditor.bind(this), this.getServerSnapshot = this.getServerSnapshot.bind(this), this.subscribe = this.subscribe.bind(this), this.refreshEditorInstance = this.refreshEditorInstance.bind(this), this.scheduleDestroy = this.scheduleDestroy.bind(this), this.onRender = this.onRender.bind(this), this.createEditor = this.createEditor.bind(this);
  }
  setEditor(e) {
    this.editor = e, this.instanceId = Math.random().toString(36).slice(2, 9), this.subscriptions.forEach((t) => t());
  }
  getInitialEditor() {
    if (this.options.current.immediatelyRender === void 0)
      return wa || JC ? (Dd && console.warn("Tiptap Error: SSR has been detected, please set `immediatelyRender` explicitly to `false` to avoid hydration mismatches."), null) : this.createEditor();
    if (this.options.current.immediatelyRender && wa && Dd)
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
        var s, i;
        return (i = (s = this.options.current).onBeforeCreate) === null || i === void 0 ? void 0 : i.call(s, ...r);
      },
      onBlur: (...r) => {
        var s, i;
        return (i = (s = this.options.current).onBlur) === null || i === void 0 ? void 0 : i.call(s, ...r);
      },
      onCreate: (...r) => {
        var s, i;
        return (i = (s = this.options.current).onCreate) === null || i === void 0 ? void 0 : i.call(s, ...r);
      },
      onDestroy: (...r) => {
        var s, i;
        return (i = (s = this.options.current).onDestroy) === null || i === void 0 ? void 0 : i.call(s, ...r);
      },
      onFocus: (...r) => {
        var s, i;
        return (i = (s = this.options.current).onFocus) === null || i === void 0 ? void 0 : i.call(s, ...r);
      },
      onSelectionUpdate: (...r) => {
        var s, i;
        return (i = (s = this.options.current).onSelectionUpdate) === null || i === void 0 ? void 0 : i.call(s, ...r);
      },
      onTransaction: (...r) => {
        var s, i;
        return (i = (s = this.options.current).onTransaction) === null || i === void 0 ? void 0 : i.call(s, ...r);
      },
      onUpdate: (...r) => {
        var s, i;
        return (i = (s = this.options.current).onUpdate) === null || i === void 0 ? void 0 : i.call(s, ...r);
      },
      onContentError: (...r) => {
        var s, i;
        return (i = (s = this.options.current).onContentError) === null || i === void 0 ? void 0 : i.call(s, ...r);
      },
      onDrop: (...r) => {
        var s, i;
        return (i = (s = this.options.current).onDrop) === null || i === void 0 ? void 0 : i.call(s, ...r);
      },
      onPaste: (...r) => {
        var s, i;
        return (i = (s = this.options.current).onPaste) === null || i === void 0 ? void 0 : i.call(s, ...r);
      }
    };
    return new NC(e);
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
    return Object.keys(e).every((r) => ["onCreate", "onBeforeCreate", "onDestroy", "onUpdate", "onTransaction", "onFocus", "onBlur", "onSelectionUpdate", "onContentError", "onDrop", "onPaste"].includes(r) ? !0 : r === "extensions" && e.extensions && t.extensions ? e.extensions.length !== t.extensions.length ? !1 : e.extensions.every((s, i) => {
      var o;
      return s === ((o = t.extensions) === null || o === void 0 ? void 0 : o[i]);
    }) : e[r] === t[r]);
  }
  /**
   * On each render, we will create, update, or destroy the editor instance.
   * @param deps The dependencies to watch for changes
   * @returns A cleanup function
   */
  onRender(e) {
    return () => (this.isComponentMounted = !0, clearTimeout(this.scheduledDestructionTimeout), this.editor && !this.editor.isDestroyed && e.length === 0 ? mc.compareOptions(this.options.current, this.editor.options) || this.editor.setOptions({
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
      if (this.previousDeps.length === e.length && this.previousDeps.every((r, s) => r === e[s]))
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
function QC(n = {}, e = []) {
  const t = Ye(n);
  t.current = n;
  const [r] = ce(() => new mc(t)), s = Ao.useSyncExternalStore(r.subscribe, r.getEditor, r.getServerSnapshot);
  return lf(s), Or(r.onRender(e)), GC({
    editor: s,
    selector: ({ transactionNumber: i }) => n.shouldRerenderOnTransaction === !1 ? null : n.immediatelyRender && i === 0 ? 0 : i + 1
  }), s;
}
const ZC = Pa({
  editor: null
});
ZC.Consumer;
const XC = Pa({
  onDragStart: void 0
}), eM = () => of(XC);
Te.forwardRef((n, e) => {
  const { onDragStart: t } = eM(), r = n.as || "div";
  return (
    // @ts-ignore
    Te.createElement(r, { ...n, ref: e, "data-node-view-wrapper": "", onDragStart: t, style: {
      whiteSpace: "normal",
      ...n.style
    } })
  );
});
const tM = /^\s*>\s$/, nM = _e.create({
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
    return ["blockquote", me(this.options.HTMLAttributes, n), 0];
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
      xs({
        find: tM,
        type: this.type
      })
    ];
  }
}), rM = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, sM = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, iM = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, oM = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, lM = Ct.create({
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
    return ["strong", me(this.options.HTMLAttributes, n), 0];
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
      rr({
        find: rM,
        type: this.type
      }),
      rr({
        find: iM,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Nn({
        find: sM,
        type: this.type
      }),
      Nn({
        find: oM,
        type: this.type
      })
    ];
  }
}), aM = "listItem", Nd = "textStyle", Rd = /^\s*([-+*])\s$/, cM = _e.create({
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
    return ["ul", me(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(aM, this.editor.getAttributes(Nd)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let n = xs({
      find: Rd,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = xs({
      find: Rd,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(Nd),
      editor: this.editor
    })), [
      n
    ];
  }
}), uM = /(^|[^`])`([^`]+)`(?!`)/, dM = /(^|[^`])`([^`]+)`(?!`)/g, fM = Ct.create({
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
    return ["code", me(this.options.HTMLAttributes, n), 0];
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
      rr({
        find: uM,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Nn({
        find: dM,
        type: this.type
      })
    ];
  }
}), hM = /^```([a-z]+)?[\s\n]$/, pM = /^~~~([a-z]+)?[\s\n]$/, mM = _e.create({
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
          const { languageClassPrefix: t } = this.options, i = [...((e = n.firstElementChild) === null || e === void 0 ? void 0 : e.classList) || []].filter((o) => o.startsWith(t)).map((o) => o.replace(t, ""))[0];
          return i || null;
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
      me(this.options.HTMLAttributes, e),
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
        const { state: e } = n, { selection: t } = e, { $from: r, empty: s } = t;
        if (!s || r.parent.type !== this.type)
          return !1;
        const i = r.parentOffset === r.parent.nodeSize - 2, o = r.parent.textContent.endsWith(`

`);
        return !i || !o ? !1 : n.chain().command(({ tr: l }) => (l.delete(r.pos - 2, r.pos), !0)).exitCode().run();
      },
      // exit node on arrow down
      ArrowDown: ({ editor: n }) => {
        if (!this.options.exitOnArrowDown)
          return !1;
        const { state: e } = n, { selection: t, doc: r } = e, { $from: s, empty: i } = t;
        if (!i || s.parent.type !== this.type || !(s.parentOffset === s.parent.nodeSize - 2))
          return !1;
        const l = s.after();
        return l === void 0 ? !1 : r.nodeAt(l) ? n.commands.command(({ tr: u }) => (u.setSelection(U.near(r.resolve(l))), !0)) : n.commands.exitCode();
      }
    };
  },
  addInputRules() {
    return [
      ya({
        find: hM,
        type: this.type,
        getAttributes: (n) => ({
          language: n[1]
        })
      }),
      ya({
        find: pM,
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
      new Ne({
        key: new Ue("codeBlockVSCodeHandler"),
        props: {
          handlePaste: (n, e) => {
            if (!e.clipboardData || this.editor.isActive(this.type.name))
              return !1;
            const t = e.clipboardData.getData("text/plain"), r = e.clipboardData.getData("vscode-editor-data"), s = r ? JSON.parse(r) : void 0, i = s == null ? void 0 : s.mode;
            if (!t || !i)
              return !1;
            const { tr: o, schema: l } = n.state, a = l.text(t.replace(/\r\n?/g, `
`));
            return o.replaceSelectionWith(this.type.create({ language: i }, a)), o.selection.$from.parent.type !== this.type && o.setSelection(V.near(o.doc.resolve(Math.max(0, o.selection.from - 2)))), o.setMeta("paste", !0), n.dispatch(o), !0;
          }
        }
      })
    ];
  }
}), gM = _e.create({
  name: "doc",
  topNode: !0,
  content: "block+"
});
function yM(n = {}) {
  return new Ne({
    view(e) {
      return new bM(e, n);
    }
  });
}
class bM {
  constructor(e, t) {
    var r;
    this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (r = t.width) !== null && r !== void 0 ? r : 1, this.color = t.color === !1 ? void 0 : t.color || "black", this.class = t.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((s) => {
      let i = (o) => {
        this[s](o);
      };
      return e.dom.addEventListener(s, i), { name: s, handler: i };
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
    let e = this.editorView.state.doc.resolve(this.cursorPos), t = !e.parent.inlineContent, r, s = this.editorView.dom, i = s.getBoundingClientRect(), o = i.width / s.offsetWidth, l = i.height / s.offsetHeight;
    if (t) {
      let h = e.nodeBefore, p = e.nodeAfter;
      if (h || p) {
        let g = this.editorView.nodeDOM(this.cursorPos - (h ? h.nodeSize : 0));
        if (g) {
          let b = g.getBoundingClientRect(), S = h ? b.bottom : b.top;
          h && p && (S = (S + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2);
          let w = this.width / 2 * l;
          r = { left: b.left, right: b.right, top: S - w, bottom: S + w };
        }
      }
    }
    if (!r) {
      let h = this.editorView.coordsAtPos(this.cursorPos), p = this.width / 2 * o;
      r = { left: h.left - p, right: h.left + p, top: h.top, bottom: h.bottom };
    }
    let a = this.editorView.dom.offsetParent;
    this.element || (this.element = a.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", t), this.element.classList.toggle("prosemirror-dropcursor-inline", !t);
    let u, d;
    if (!a || a == document.body && getComputedStyle(a).position == "static")
      u = -pageXOffset, d = -pageYOffset;
    else {
      let h = a.getBoundingClientRect(), p = h.width / a.offsetWidth, g = h.height / a.offsetHeight;
      u = h.left - a.scrollLeft * p, d = h.top - a.scrollTop * g;
    }
    this.element.style.left = (r.left - u) / o + "px", this.element.style.top = (r.top - d) / l + "px", this.element.style.width = (r.right - r.left) / o + "px", this.element.style.height = (r.bottom - r.top) / l + "px";
  }
  scheduleRemoval(e) {
    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e);
  }
  dragover(e) {
    if (!this.editorView.editable)
      return;
    let t = this.editorView.posAtCoords({ left: e.clientX, top: e.clientY }), r = t && t.inside >= 0 && this.editorView.state.doc.nodeAt(t.inside), s = r && r.type.spec.disableDropCursor, i = typeof s == "function" ? s(this.editorView, t, e) : s;
    if (t && !i) {
      let o = t.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let l = oh(this.editorView.state.doc, o, this.editorView.dragging.slice);
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
const SM = De.create({
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
      yM(this.options)
    ];
  }
});
class xe extends U {
  /**
  Create a gap cursor.
  */
  constructor(e) {
    super(e, e);
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    return xe.valid(r) ? new xe(r) : U.near(r);
  }
  content() {
    return z.empty;
  }
  eq(e) {
    return e instanceof xe && e.head == this.head;
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
    return new xe(e.resolve(t.pos));
  }
  /**
  @internal
  */
  getBookmark() {
    return new gc(this.anchor);
  }
  /**
  @internal
  */
  static valid(e) {
    let t = e.parent;
    if (t.isTextblock || !wM(e) || !kM(e))
      return !1;
    let r = t.type.spec.allowGapCursor;
    if (r != null)
      return r;
    let s = t.contentMatchAt(e.index()).defaultType;
    return s && s.isTextblock;
  }
  /**
  @internal
  */
  static findGapCursorFrom(e, t, r = !1) {
    e: for (; ; ) {
      if (!r && xe.valid(e))
        return e;
      let s = e.pos, i = null;
      for (let o = e.depth; ; o--) {
        let l = e.node(o);
        if (t > 0 ? e.indexAfter(o) < l.childCount : e.index(o) > 0) {
          i = l.child(t > 0 ? e.indexAfter(o) : e.index(o) - 1);
          break;
        } else if (o == 0)
          return null;
        s += t;
        let a = e.doc.resolve(s);
        if (xe.valid(a))
          return a;
      }
      for (; ; ) {
        let o = t > 0 ? i.firstChild : i.lastChild;
        if (!o) {
          if (i.isAtom && !i.isText && !$.isSelectable(i)) {
            e = e.doc.resolve(s + i.nodeSize * t), r = !1;
            continue e;
          }
          break;
        }
        i = o, s += t;
        let l = e.doc.resolve(s);
        if (xe.valid(l))
          return l;
      }
      return null;
    }
  }
}
xe.prototype.visible = !1;
xe.findFrom = xe.findGapCursorFrom;
U.jsonID("gapcursor", xe);
class gc {
  constructor(e) {
    this.pos = e;
  }
  map(e) {
    return new gc(e.map(this.pos));
  }
  resolve(e) {
    let t = e.resolve(this.pos);
    return xe.valid(t) ? new xe(t) : U.near(t);
  }
}
function wp(n) {
  return n.isAtom || n.spec.isolating || n.spec.createGapCursor;
}
function wM(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.index(e), r = n.node(e);
    if (t == 0) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let s = r.child(t - 1); ; s = s.lastChild) {
      if (s.childCount == 0 && !s.inlineContent || wp(s.type))
        return !0;
      if (s.inlineContent)
        return !1;
    }
  }
  return !0;
}
function kM(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.indexAfter(e), r = n.node(e);
    if (t == r.childCount) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let s = r.child(t); ; s = s.firstChild) {
      if (s.childCount == 0 && !s.inlineContent || wp(s.type))
        return !0;
      if (s.inlineContent)
        return !1;
    }
  }
  return !0;
}
function xM() {
  return new Ne({
    props: {
      decorations: TM,
      createSelectionBetween(n, e, t) {
        return e.pos == t.pos && xe.valid(t) ? new xe(t) : null;
      },
      handleClick: MM,
      handleKeyDown: CM,
      handleDOMEvents: { beforeinput: vM }
    }
  });
}
const CM = sc({
  ArrowLeft: ii("horiz", -1),
  ArrowRight: ii("horiz", 1),
  ArrowUp: ii("vert", -1),
  ArrowDown: ii("vert", 1)
});
function ii(n, e) {
  const t = n == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
  return function(r, s, i) {
    let o = r.selection, l = e > 0 ? o.$to : o.$from, a = o.empty;
    if (o instanceof V) {
      if (!i.endOfTextblock(t) || l.depth == 0)
        return !1;
      a = !1, l = r.doc.resolve(e > 0 ? l.after() : l.before());
    }
    let u = xe.findGapCursorFrom(l, e, a);
    return u ? (s && s(r.tr.setSelection(new xe(u))), !0) : !1;
  };
}
function MM(n, e, t) {
  if (!n || !n.editable)
    return !1;
  let r = n.state.doc.resolve(e);
  if (!xe.valid(r))
    return !1;
  let s = n.posAtCoords({ left: t.clientX, top: t.clientY });
  return s && s.inside > -1 && $.isSelectable(n.state.doc.nodeAt(s.inside)) ? !1 : (n.dispatch(n.state.tr.setSelection(new xe(r))), !0);
}
function vM(n, e) {
  if (e.inputType != "insertCompositionText" || !(n.state.selection instanceof xe))
    return !1;
  let { $from: t } = n.state.selection, r = t.parent.contentMatchAt(t.index()).findWrapping(n.state.schema.nodes.text);
  if (!r)
    return !1;
  let s = N.empty;
  for (let o = r.length - 1; o >= 0; o--)
    s = N.from(r[o].createAndFill(null, s));
  let i = n.state.tr.replace(t.pos, t.pos, new z(s, 0, 0));
  return i.setSelection(V.near(i.doc.resolve(t.pos + 1))), n.dispatch(i), !1;
}
function TM(n) {
  if (!(n.selection instanceof xe))
    return null;
  let e = document.createElement("div");
  return e.className = "ProseMirror-gapcursor", Se.create(n.doc, [Qe.widget(n.selection.head, e, { key: "gapcursor" })]);
}
const OM = De.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [
      xM()
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
      allowGapCursor: (e = ee(H(n, "allowGapCursor", t))) !== null && e !== void 0 ? e : null
    };
  }
}), EM = _e.create({
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
    return ["br", me(this.options.HTMLAttributes, n)];
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
          const { selection: s, storedMarks: i } = t;
          if (s.$from.parent.type.spec.isolating)
            return !1;
          const { keepMarks: o } = this.options, { splittableMarks: l } = r.extensionManager, a = i || s.$to.parentOffset && s.$from.marks();
          return e().insertContent({ type: this.name }).command(({ tr: u, dispatch: d }) => {
            if (d && a && o) {
              const h = a.filter((p) => l.includes(p.type.name));
              u.ensureMarks(h);
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
}), AM = _e.create({
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
    return [`h${this.options.levels.includes(n.attrs.level) ? n.attrs.level : this.options.levels[0]}`, me(this.options.HTMLAttributes, e), 0];
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
    return this.options.levels.map((n) => ya({
      find: new RegExp(`^(#{${Math.min(...this.options.levels)},${n}})\\s$`),
      type: this.type,
      getAttributes: {
        level: n
      }
    }));
  }
});
var Bi = 200, Fe = function() {
};
Fe.prototype.append = function(e) {
  return e.length ? (e = Fe.from(e), !this.length && e || e.length < Bi && this.leafAppend(e) || this.length < Bi && e.leafPrepend(this) || this.appendInner(e)) : this;
};
Fe.prototype.prepend = function(e) {
  return e.length ? Fe.from(e).append(this) : this;
};
Fe.prototype.appendInner = function(e) {
  return new DM(this, e);
};
Fe.prototype.slice = function(e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = this.length), e >= t ? Fe.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t));
};
Fe.prototype.get = function(e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
};
Fe.prototype.forEach = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length), t <= r ? this.forEachInner(e, t, r, 0) : this.forEachInvertedInner(e, t, r, 0);
};
Fe.prototype.map = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length);
  var s = [];
  return this.forEach(function(i, o) {
    return s.push(e(i, o));
  }, t, r), s;
};
Fe.from = function(e) {
  return e instanceof Fe ? e : e && e.length ? new kp(e) : Fe.empty;
};
var kp = /* @__PURE__ */ function(n) {
  function e(r) {
    n.call(this), this.values = r;
  }
  n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e;
  var t = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(s, i) {
    return s == 0 && i == this.length ? this : new e(this.values.slice(s, i));
  }, e.prototype.getInner = function(s) {
    return this.values[s];
  }, e.prototype.forEachInner = function(s, i, o, l) {
    for (var a = i; a < o; a++)
      if (s(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.forEachInvertedInner = function(s, i, o, l) {
    for (var a = i - 1; a >= o; a--)
      if (s(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.leafAppend = function(s) {
    if (this.length + s.length <= Bi)
      return new e(this.values.concat(s.flatten()));
  }, e.prototype.leafPrepend = function(s) {
    if (this.length + s.length <= Bi)
      return new e(s.flatten().concat(this.values));
  }, t.length.get = function() {
    return this.values.length;
  }, t.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, t), e;
}(Fe);
Fe.empty = new kp([]);
var DM = /* @__PURE__ */ function(n) {
  function e(t, r) {
    n.call(this), this.left = t, this.right = r, this.length = t.length + r.length, this.depth = Math.max(t.depth, r.depth) + 1;
  }
  return n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(r) {
    return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length);
  }, e.prototype.forEachInner = function(r, s, i, o) {
    var l = this.left.length;
    if (s < l && this.left.forEachInner(r, s, Math.min(i, l), o) === !1 || i > l && this.right.forEachInner(r, Math.max(s - l, 0), Math.min(this.length, i) - l, o + l) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function(r, s, i, o) {
    var l = this.left.length;
    if (s > l && this.right.forEachInvertedInner(r, s - l, Math.max(i, l) - l, o + l) === !1 || i < l && this.left.forEachInvertedInner(r, Math.min(s, l), i, o) === !1)
      return !1;
  }, e.prototype.sliceInner = function(r, s) {
    if (r == 0 && s == this.length)
      return this;
    var i = this.left.length;
    return s <= i ? this.left.slice(r, s) : r >= i ? this.right.slice(r - i, s - i) : this.left.slice(r, i).append(this.right.slice(0, s - i));
  }, e.prototype.leafAppend = function(r) {
    var s = this.right.leafAppend(r);
    if (s)
      return new e(this.left, s);
  }, e.prototype.leafPrepend = function(r) {
    var s = this.left.leafPrepend(r);
    if (s)
      return new e(s, this.right);
  }, e.prototype.appendInner = function(r) {
    return this.left.depth >= Math.max(this.right.depth, r.depth) + 1 ? new e(this.left, new e(this.right, r)) : new e(this, r);
  }, e;
}(Fe);
const NM = 500;
class Tt {
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
    let s, i;
    t && (s = this.remapping(r, this.items.length), i = s.maps.length);
    let o = e.tr, l, a, u = [], d = [];
    return this.items.forEach((h, p) => {
      if (!h.step) {
        s || (s = this.remapping(r, p + 1), i = s.maps.length), i--, d.push(h);
        return;
      }
      if (s) {
        d.push(new It(h.map));
        let g = h.step.map(s.slice(i)), b;
        g && o.maybeStep(g).doc && (b = o.mapping.maps[o.mapping.maps.length - 1], u.push(new It(b, void 0, void 0, u.length + d.length))), i--, b && s.appendMap(b, i);
      } else
        o.maybeStep(h.step);
      if (h.selection)
        return l = s ? h.selection.map(s.slice(i)) : h.selection, a = new Tt(this.items.slice(0, r).append(d.reverse().concat(u)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: a, transform: o, selection: l };
  }
  // Create a new branch with the given transform added.
  addTransform(e, t, r, s) {
    let i = [], o = this.eventCount, l = this.items, a = !s && l.length ? l.get(l.length - 1) : null;
    for (let d = 0; d < e.steps.length; d++) {
      let h = e.steps[d].invert(e.docs[d]), p = new It(e.mapping.maps[d], h, t), g;
      (g = a && a.merge(p)) && (p = g, d ? i.pop() : l = l.slice(0, l.length - 1)), i.push(p), t && (o++, t = void 0), s || (a = p);
    }
    let u = o - r.depth;
    return u > IM && (l = RM(l, u), o -= u), new Tt(l.append(i), o);
  }
  remapping(e, t) {
    let r = new ms();
    return this.items.forEach((s, i) => {
      let o = s.mirrorOffset != null && i - s.mirrorOffset >= e ? r.maps.length - s.mirrorOffset : void 0;
      r.appendMap(s.map, o);
    }, e, t), r;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new Tt(this.items.append(e.map((t) => new It(t))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(e, t) {
    if (!this.eventCount)
      return this;
    let r = [], s = Math.max(0, this.items.length - t), i = e.mapping, o = e.steps.length, l = this.eventCount;
    this.items.forEach((p) => {
      p.selection && l--;
    }, s);
    let a = t;
    this.items.forEach((p) => {
      let g = i.getMirror(--a);
      if (g == null)
        return;
      o = Math.min(o, g);
      let b = i.maps[g];
      if (p.step) {
        let S = e.steps[g].invert(e.docs[g]), w = p.selection && p.selection.map(i.slice(a + 1, g));
        w && l++, r.push(new It(b, S, w));
      } else
        r.push(new It(b));
    }, s);
    let u = [];
    for (let p = t; p < o; p++)
      u.push(new It(i.maps[p]));
    let d = this.items.slice(0, s).append(u).append(r), h = new Tt(d, l);
    return h.emptyItemCount() > NM && (h = h.compress(this.items.length - r.length)), h;
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
    let t = this.remapping(0, e), r = t.maps.length, s = [], i = 0;
    return this.items.forEach((o, l) => {
      if (l >= e)
        s.push(o), o.selection && i++;
      else if (o.step) {
        let a = o.step.map(t.slice(r)), u = a && a.getMap();
        if (r--, u && t.appendMap(u, r), a) {
          let d = o.selection && o.selection.map(t.slice(r));
          d && i++;
          let h = new It(u.invert(), a, d), p, g = s.length - 1;
          (p = s.length && s[g].merge(h)) ? s[g] = p : s.push(h);
        }
      } else o.map && r--;
    }, this.items.length, 0), new Tt(Fe.from(s.reverse()), i);
  }
}
Tt.empty = new Tt(Fe.empty, 0);
function RM(n, e) {
  let t;
  return n.forEach((r, s) => {
    if (r.selection && e-- == 0)
      return t = s, !1;
  }), n.slice(t);
}
class It {
  constructor(e, t, r, s) {
    this.map = e, this.step = t, this.selection = r, this.mirrorOffset = s;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let t = e.step.merge(this.step);
      if (t)
        return new It(t.getMap().invert(), t, this.selection);
    }
  }
}
class yn {
  constructor(e, t, r, s, i) {
    this.done = e, this.undone = t, this.prevRanges = r, this.prevTime = s, this.prevComposition = i;
  }
}
const IM = 20;
function _M(n, e, t, r) {
  let s = t.getMeta(Zn), i;
  if (s)
    return s.historyState;
  t.getMeta(zM) && (n = new yn(n.done, n.undone, null, 0, -1));
  let o = t.getMeta("appendedTransaction");
  if (t.steps.length == 0)
    return n;
  if (o && o.getMeta(Zn))
    return o.getMeta(Zn).redo ? new yn(n.done.addTransform(t, void 0, r, wi(e)), n.undone, Id(t.mapping.maps), n.prevTime, n.prevComposition) : new yn(n.done, n.undone.addTransform(t, void 0, r, wi(e)), null, n.prevTime, n.prevComposition);
  if (t.getMeta("addToHistory") !== !1 && !(o && o.getMeta("addToHistory") === !1)) {
    let l = t.getMeta("composition"), a = n.prevTime == 0 || !o && n.prevComposition != l && (n.prevTime < (t.time || 0) - r.newGroupDelay || !PM(t, n.prevRanges)), u = o ? Ll(n.prevRanges, t.mapping) : Id(t.mapping.maps);
    return new yn(n.done.addTransform(t, a ? e.selection.getBookmark() : void 0, r, wi(e)), Tt.empty, u, t.time, l ?? n.prevComposition);
  } else return (i = t.getMeta("rebased")) ? new yn(n.done.rebased(t, i), n.undone.rebased(t, i), Ll(n.prevRanges, t.mapping), n.prevTime, n.prevComposition) : new yn(n.done.addMaps(t.mapping.maps), n.undone.addMaps(t.mapping.maps), Ll(n.prevRanges, t.mapping), n.prevTime, n.prevComposition);
}
function PM(n, e) {
  if (!e)
    return !1;
  if (!n.docChanged)
    return !0;
  let t = !1;
  return n.mapping.maps[0].forEach((r, s) => {
    for (let i = 0; i < e.length; i += 2)
      r <= e[i + 1] && s >= e[i] && (t = !0);
  }), t;
}
function Id(n) {
  let e = [];
  for (let t = n.length - 1; t >= 0 && e.length == 0; t--)
    n[t].forEach((r, s, i, o) => e.push(i, o));
  return e;
}
function Ll(n, e) {
  if (!n)
    return null;
  let t = [];
  for (let r = 0; r < n.length; r += 2) {
    let s = e.map(n[r], 1), i = e.map(n[r + 1], -1);
    s <= i && t.push(s, i);
  }
  return t;
}
function LM(n, e, t) {
  let r = wi(e), s = Zn.get(e).spec.config, i = (t ? n.undone : n.done).popEvent(e, r);
  if (!i)
    return null;
  let o = i.selection.resolve(i.transform.doc), l = (t ? n.done : n.undone).addTransform(i.transform, e.selection.getBookmark(), s, r), a = new yn(t ? l : i.remaining, t ? i.remaining : l, null, 0, -1);
  return i.transform.setSelection(o).setMeta(Zn, { redo: t, historyState: a });
}
let zl = !1, _d = null;
function wi(n) {
  let e = n.plugins;
  if (_d != e) {
    zl = !1, _d = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].spec.historyPreserveItems) {
        zl = !0;
        break;
      }
  }
  return zl;
}
const Zn = new Ue("history"), zM = new Ue("closeHistory");
function FM(n = {}) {
  return n = {
    depth: n.depth || 100,
    newGroupDelay: n.newGroupDelay || 500
  }, new Ne({
    key: Zn,
    state: {
      init() {
        return new yn(Tt.empty, Tt.empty, null, 0, -1);
      },
      apply(e, t, r) {
        return _M(t, r, e, n);
      }
    },
    config: n,
    props: {
      handleDOMEvents: {
        beforeinput(e, t) {
          let r = t.inputType, s = r == "historyUndo" ? Cp : r == "historyRedo" ? Mp : null;
          return !s || !e.editable ? !1 : (t.preventDefault(), s(e.state, e.dispatch));
        }
      }
    }
  });
}
function xp(n, e) {
  return (t, r) => {
    let s = Zn.getState(t);
    if (!s || (n ? s.undone : s.done).eventCount == 0)
      return !1;
    if (r) {
      let i = LM(s, t, n);
      i && r(e ? i.scrollIntoView() : i);
    }
    return !0;
  };
}
const Cp = xp(!1, !0), Mp = xp(!0, !0), BM = De.create({
  name: "history",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: n, dispatch: e }) => Cp(n, e),
      redo: () => ({ state: n, dispatch: e }) => Mp(n, e)
    };
  },
  addProseMirrorPlugins() {
    return [
      FM(this.options)
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
}), HM = _e.create({
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
    return ["hr", me(this.options.HTMLAttributes, n)];
  },
  addCommands() {
    return {
      setHorizontalRule: () => ({ chain: n, state: e }) => {
        if (!RC(e, e.schema.nodes[this.name]))
          return !1;
        const { selection: t } = e, { $from: r, $to: s } = t, i = n();
        return r.parentOffset === 0 ? i.insertContentAt({
          from: Math.max(r.pos - 1, 0),
          to: s.pos
        }, {
          type: this.name
        }) : eC(t) ? i.insertContentAt(s.pos, {
          type: this.name
        }) : i.insertContent({ type: this.name }), i.command(({ tr: o, dispatch: l }) => {
          var a;
          if (l) {
            const { $to: u } = o.selection, d = u.end();
            if (u.nodeAfter)
              u.nodeAfter.isTextblock ? o.setSelection(V.create(o.doc, u.pos + 1)) : u.nodeAfter.isBlock ? o.setSelection($.create(o.doc, u.pos)) : o.setSelection(V.create(o.doc, u.pos));
            else {
              const h = (a = u.parent.type.contentMatch.defaultType) === null || a === void 0 ? void 0 : a.create();
              h && (o.insert(d, h), o.setSelection(V.create(o.doc, d + 1)));
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
      Sp({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })
    ];
  }
}), WM = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, $M = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, VM = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, YM = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, jM = Ct.create({
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
    return ["em", me(this.options.HTMLAttributes, n), 0];
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
      rr({
        find: WM,
        type: this.type
      }),
      rr({
        find: VM,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Nn({
        find: $M,
        type: this.type
      }),
      Nn({
        find: YM,
        type: this.type
      })
    ];
  }
}), UM = _e.create({
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
    return ["li", me(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), qM = "listItem", Pd = "textStyle", Ld = /^(\d+)\.\s$/, KM = _e.create({
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
    return e === 1 ? ["ol", me(this.options.HTMLAttributes, t), 0] : ["ol", me(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(qM, this.editor.getAttributes(Pd)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let n = xs({
      find: Ld,
      type: this.type,
      getAttributes: (e) => ({ start: +e[1] }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1]
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = xs({
      find: Ld,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: (e) => ({ start: +e[1], ...this.editor.getAttributes(Pd) }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1],
      editor: this.editor
    })), [
      n
    ];
  }
}), vp = _e.create({
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
    return ["p", me(this.options.HTMLAttributes, n), 0];
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
}), GM = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, JM = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, QM = Ct.create({
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
    return ["s", me(this.options.HTMLAttributes, n), 0];
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
      rr({
        find: GM,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Nn({
        find: JM,
        type: this.type
      })
    ];
  }
}), ZM = _e.create({
  name: "text",
  group: "inline"
}), XM = De.create({
  name: "starterKit",
  addExtensions() {
    const n = [];
    return this.options.bold !== !1 && n.push(lM.configure(this.options.bold)), this.options.blockquote !== !1 && n.push(nM.configure(this.options.blockquote)), this.options.bulletList !== !1 && n.push(cM.configure(this.options.bulletList)), this.options.code !== !1 && n.push(fM.configure(this.options.code)), this.options.codeBlock !== !1 && n.push(mM.configure(this.options.codeBlock)), this.options.document !== !1 && n.push(gM.configure(this.options.document)), this.options.dropcursor !== !1 && n.push(SM.configure(this.options.dropcursor)), this.options.gapcursor !== !1 && n.push(OM.configure(this.options.gapcursor)), this.options.hardBreak !== !1 && n.push(EM.configure(this.options.hardBreak)), this.options.heading !== !1 && n.push(AM.configure(this.options.heading)), this.options.history !== !1 && n.push(BM.configure(this.options.history)), this.options.horizontalRule !== !1 && n.push(HM.configure(this.options.horizontalRule)), this.options.italic !== !1 && n.push(jM.configure(this.options.italic)), this.options.listItem !== !1 && n.push(UM.configure(this.options.listItem)), this.options.orderedList !== !1 && n.push(KM.configure(this.options.orderedList)), this.options.paragraph !== !1 && n.push(vp.configure(this.options.paragraph)), this.options.strike !== !1 && n.push(QM.configure(this.options.strike)), this.options.text !== !1 && n.push(ZM.configure(this.options.text)), n;
  }
}), ev = Ct.create({
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
    return ["u", me(this.options.HTMLAttributes, n), 0];
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
}), tv = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", nv = "ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2", ka = "numeric", xa = "ascii", Ca = "alpha", ss = "asciinumeric", Xr = "alphanumeric", Ma = "domain", Tp = "emoji", rv = "scheme", sv = "slashscheme", Fl = "whitespace";
function iv(n, e) {
  return n in e || (e[n] = []), e[n];
}
function jn(n, e, t) {
  e[ka] && (e[ss] = !0, e[Xr] = !0), e[xa] && (e[ss] = !0, e[Ca] = !0), e[ss] && (e[Xr] = !0), e[Ca] && (e[Xr] = !0), e[Xr] && (e[Ma] = !0), e[Tp] && (e[Ma] = !0);
  for (const r in e) {
    const s = iv(r, t);
    s.indexOf(n) < 0 && s.push(n);
  }
}
function ov(n, e) {
  const t = {};
  for (const r in e)
    e[r].indexOf(n) >= 0 && (t[r] = !0);
  return t;
}
function at(n = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = n;
}
at.groups = {};
at.prototype = {
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
      const s = e.jr[r][0], i = e.jr[r][1];
      if (i && s.test(n))
        return i;
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
    for (let s = 0; s < n.length; s++)
      this.tt(n[s], e, t, r);
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
    r = r || at.groups;
    let s;
    return e && e.j ? s = e : (s = new at(e), t && r && jn(e, t, r)), this.jr.push([n, s]), s;
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
    let s = this;
    const i = n.length;
    if (!i)
      return s;
    for (let o = 0; o < i - 1; o++)
      s = s.tt(n[o]);
    return s.tt(n[i - 1], e, t, r);
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
    r = r || at.groups;
    const s = this;
    if (e && e.j)
      return s.j[n] = e, e;
    const i = e;
    let o, l = s.go(n);
    if (l ? (o = new at(), Object.assign(o.j, l.j), o.jr.push.apply(o.jr, l.jr), o.jd = l.jd, o.t = l.t) : o = new at(), i) {
      if (r)
        if (o.t && typeof o.t == "string") {
          const a = Object.assign(ov(o.t, r), t);
          jn(i, a, r);
        } else t && jn(i, t, r);
      o.t = i;
    }
    return s.j[n] = o, o;
  }
};
const X = (n, e, t, r, s) => n.ta(e, t, r, s), ke = (n, e, t, r, s) => n.tr(e, t, r, s), zd = (n, e, t, r, s) => n.ts(e, t, r, s), I = (n, e, t, r, s) => n.tt(e, t, r, s), en = "WORD", va = "UWORD", Op = "ASCIINUMERICAL", Ep = "ALPHANUMERICAL", Cs = "LOCALHOST", Ta = "TLD", Oa = "UTLD", ki = "SCHEME", xr = "SLASH_SCHEME", yc = "NUM", Ea = "WS", bc = "NL", is = "OPENBRACE", ls = "CLOSEBRACE", Hi = "OPENBRACKET", Wi = "CLOSEBRACKET", $i = "OPENPAREN", Vi = "CLOSEPAREN", Yi = "OPENANGLEBRACKET", ji = "CLOSEANGLEBRACKET", Ui = "FULLWIDTHLEFTPAREN", qi = "FULLWIDTHRIGHTPAREN", Ki = "LEFTCORNERBRACKET", Gi = "RIGHTCORNERBRACKET", Ji = "LEFTWHITECORNERBRACKET", Qi = "RIGHTWHITECORNERBRACKET", Zi = "FULLWIDTHLESSTHAN", Xi = "FULLWIDTHGREATERTHAN", eo = "AMPERSAND", to = "APOSTROPHE", no = "ASTERISK", bn = "AT", ro = "BACKSLASH", so = "BACKTICK", io = "CARET", wn = "COLON", Sc = "COMMA", oo = "DOLLAR", _t = "DOT", lo = "EQUALS", wc = "EXCLAMATION", yt = "HYPHEN", as = "PERCENT", ao = "PIPE", co = "PLUS", uo = "POUND", cs = "QUERY", kc = "QUOTE", Ap = "FULLWIDTHMIDDLEDOT", xc = "SEMI", Pt = "SLASH", us = "TILDE", fo = "UNDERSCORE", Dp = "EMOJI", ho = "SYM";
var Np = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: Ep,
  AMPERSAND: eo,
  APOSTROPHE: to,
  ASCIINUMERICAL: Op,
  ASTERISK: no,
  AT: bn,
  BACKSLASH: ro,
  BACKTICK: so,
  CARET: io,
  CLOSEANGLEBRACKET: ji,
  CLOSEBRACE: ls,
  CLOSEBRACKET: Wi,
  CLOSEPAREN: Vi,
  COLON: wn,
  COMMA: Sc,
  DOLLAR: oo,
  DOT: _t,
  EMOJI: Dp,
  EQUALS: lo,
  EXCLAMATION: wc,
  FULLWIDTHGREATERTHAN: Xi,
  FULLWIDTHLEFTPAREN: Ui,
  FULLWIDTHLESSTHAN: Zi,
  FULLWIDTHMIDDLEDOT: Ap,
  FULLWIDTHRIGHTPAREN: qi,
  HYPHEN: yt,
  LEFTCORNERBRACKET: Ki,
  LEFTWHITECORNERBRACKET: Ji,
  LOCALHOST: Cs,
  NL: bc,
  NUM: yc,
  OPENANGLEBRACKET: Yi,
  OPENBRACE: is,
  OPENBRACKET: Hi,
  OPENPAREN: $i,
  PERCENT: as,
  PIPE: ao,
  PLUS: co,
  POUND: uo,
  QUERY: cs,
  QUOTE: kc,
  RIGHTCORNERBRACKET: Gi,
  RIGHTWHITECORNERBRACKET: Qi,
  SCHEME: ki,
  SEMI: xc,
  SLASH: Pt,
  SLASH_SCHEME: xr,
  SYM: ho,
  TILDE: us,
  TLD: Ta,
  UNDERSCORE: fo,
  UTLD: Oa,
  UWORD: va,
  WORD: en,
  WS: Ea
});
const Zt = /[a-z]/, Kr = new RegExp("\\p{L}", "u"), Bl = new RegExp("\\p{Emoji}", "u"), Xt = /\d/, Hl = /\s/, Fd = "\r", Wl = `
`, lv = "️", av = "‍", $l = "￼";
let oi = null, li = null;
function cv(n = []) {
  const e = {};
  at.groups = e;
  const t = new at();
  oi == null && (oi = Bd(tv)), li == null && (li = Bd(nv)), I(t, "'", to), I(t, "{", is), I(t, "}", ls), I(t, "[", Hi), I(t, "]", Wi), I(t, "(", $i), I(t, ")", Vi), I(t, "<", Yi), I(t, ">", ji), I(t, "（", Ui), I(t, "）", qi), I(t, "「", Ki), I(t, "」", Gi), I(t, "『", Ji), I(t, "』", Qi), I(t, "＜", Zi), I(t, "＞", Xi), I(t, "&", eo), I(t, "*", no), I(t, "@", bn), I(t, "`", so), I(t, "^", io), I(t, ":", wn), I(t, ",", Sc), I(t, "$", oo), I(t, ".", _t), I(t, "=", lo), I(t, "!", wc), I(t, "-", yt), I(t, "%", as), I(t, "|", ao), I(t, "+", co), I(t, "#", uo), I(t, "?", cs), I(t, '"', kc), I(t, "/", Pt), I(t, ";", xc), I(t, "~", us), I(t, "_", fo), I(t, "\\", ro), I(t, "・", Ap);
  const r = ke(t, Xt, yc, {
    [ka]: !0
  });
  ke(r, Xt, r);
  const s = ke(r, Zt, Op, {
    [ss]: !0
  }), i = ke(r, Kr, Ep, {
    [Xr]: !0
  }), o = ke(t, Zt, en, {
    [xa]: !0
  });
  ke(o, Xt, s), ke(o, Zt, o), ke(s, Xt, s), ke(s, Zt, s);
  const l = ke(t, Kr, va, {
    [Ca]: !0
  });
  ke(l, Zt), ke(l, Xt, i), ke(l, Kr, l), ke(i, Xt, i), ke(i, Zt), ke(i, Kr, i);
  const a = I(t, Wl, bc, {
    [Fl]: !0
  }), u = I(t, Fd, Ea, {
    [Fl]: !0
  }), d = ke(t, Hl, Ea, {
    [Fl]: !0
  });
  I(t, $l, d), I(u, Wl, a), I(u, $l, d), ke(u, Hl, d), I(d, Fd), I(d, Wl), ke(d, Hl, d), I(d, $l, d);
  const h = ke(t, Bl, Dp, {
    [Tp]: !0
  });
  I(h, "#"), ke(h, Bl, h), I(h, lv, h);
  const p = I(h, av);
  I(p, "#"), ke(p, Bl, h);
  const g = [[Zt, o], [Xt, s]], b = [[Zt, null], [Kr, l], [Xt, i]];
  for (let S = 0; S < oi.length; S++)
    hn(t, oi[S], Ta, en, g);
  for (let S = 0; S < li.length; S++)
    hn(t, li[S], Oa, va, b);
  jn(Ta, {
    tld: !0,
    ascii: !0
  }, e), jn(Oa, {
    utld: !0,
    alpha: !0
  }, e), hn(t, "file", ki, en, g), hn(t, "mailto", ki, en, g), hn(t, "http", xr, en, g), hn(t, "https", xr, en, g), hn(t, "ftp", xr, en, g), hn(t, "ftps", xr, en, g), jn(ki, {
    scheme: !0,
    ascii: !0
  }, e), jn(xr, {
    slashscheme: !0,
    ascii: !0
  }, e), n = n.sort((S, w) => S[0] > w[0] ? 1 : -1);
  for (let S = 0; S < n.length; S++) {
    const w = n[S][0], v = n[S][1] ? {
      [rv]: !0
    } : {
      [sv]: !0
    };
    w.indexOf("-") >= 0 ? v[Ma] = !0 : Zt.test(w) ? Xt.test(w) ? v[ss] = !0 : v[xa] = !0 : v[ka] = !0, zd(t, w, w, v);
  }
  return zd(t, "localhost", Cs, {
    ascii: !0
  }), t.jd = new at(ho), {
    start: t,
    tokens: Object.assign({
      groups: e
    }, Np)
  };
}
function Rp(n, e) {
  const t = uv(e.replace(/[A-Z]/g, (l) => l.toLowerCase())), r = t.length, s = [];
  let i = 0, o = 0;
  for (; o < r; ) {
    let l = n, a = null, u = 0, d = null, h = -1, p = -1;
    for (; o < r && (a = l.go(t[o])); )
      l = a, l.accepts() ? (h = 0, p = 0, d = l) : h >= 0 && (h += t[o].length, p++), u += t[o].length, i += t[o].length, o++;
    i -= h, o -= p, u -= h, s.push({
      t: d.t,
      // token type/name
      v: e.slice(i - u, i),
      // string value
      s: i - u,
      // start index
      e: i
      // end index (excluding)
    });
  }
  return s;
}
function uv(n) {
  const e = [], t = n.length;
  let r = 0;
  for (; r < t; ) {
    let s = n.charCodeAt(r), i, o = s < 55296 || s > 56319 || r + 1 === t || (i = n.charCodeAt(r + 1)) < 56320 || i > 57343 ? n[r] : n.slice(r, r + 2);
    e.push(o), r += o.length;
  }
  return e;
}
function hn(n, e, t, r, s) {
  let i;
  const o = e.length;
  for (let l = 0; l < o - 1; l++) {
    const a = e[l];
    n.j[a] ? i = n.j[a] : (i = new at(r), i.jr = s.slice(), n.j[a] = i), n = i;
  }
  return i = new at(t), i.jr = s.slice(), n.j[e[o - 1]] = i, i;
}
function Bd(n) {
  const e = [], t = [];
  let r = 0, s = "0123456789";
  for (; r < n.length; ) {
    let i = 0;
    for (; s.indexOf(n[r + i]) >= 0; )
      i++;
    if (i > 0) {
      e.push(t.join(""));
      for (let o = parseInt(n.substring(r, r + i), 10); o > 0; o--)
        t.pop();
      r += i;
    } else
      t.push(n[r]), r++;
  }
  return e;
}
const Ms = {
  defaultProtocol: "http",
  events: null,
  format: Hd,
  formatHref: Hd,
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
function Cc(n, e = null) {
  let t = Object.assign({}, Ms);
  n && (t = Object.assign(t, n instanceof Cc ? n.o : n));
  const r = t.ignoreTags, s = [];
  for (let i = 0; i < r.length; i++)
    s.push(r[i].toUpperCase());
  this.o = t, e && (this.defaultRender = e), this.ignoreTags = s;
}
Cc.prototype = {
  o: Ms,
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
    let s = this.o[n];
    return s && (typeof s == "object" ? (s = t.t in s ? s[t.t] : Ms[n], typeof s == "function" && r && (s = s(e, t))) : typeof s == "function" && r && (s = s(e, t.t, t)), s);
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
function Hd(n) {
  return n;
}
function Ip(n, e) {
  this.t = "token", this.v = n, this.tk = e;
}
Ip.prototype = {
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
  toObject(n = Ms.defaultProtocol) {
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
    const e = this, t = this.toHref(n.get("defaultProtocol")), r = n.get("formatHref", t, this), s = n.get("tagName", t, e), i = this.toFormattedString(n), o = {}, l = n.get("className", t, e), a = n.get("target", t, e), u = n.get("rel", t, e), d = n.getObj("attributes", t, e), h = n.getObj("events", t, e);
    return o.href = r, l && (o.class = l), a && (o.target = a), u && (o.rel = u), d && Object.assign(o, d), {
      tagName: s,
      attributes: o,
      content: i,
      eventListeners: h
    };
  }
};
function Do(n, e) {
  class t extends Ip {
    constructor(s, i) {
      super(s, i), this.t = n;
    }
  }
  for (const r in e)
    t.prototype[r] = e[r];
  return t.t = n, t;
}
const Wd = Do("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), $d = Do("text"), dv = Do("nl"), ai = Do("url", {
  isLink: !0,
  /**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@param {string} [scheme] default scheme (e.g., 'https')
  	@return {string} the full href
  */
  toHref(n = Ms.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${n}://${this.v}`;
  },
  /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */
  hasProtocol() {
    const n = this.tk;
    return n.length >= 2 && n[0].t !== Cs && n[1].t === wn;
  }
}), gt = (n) => new at(n);
function fv({
  groups: n
}) {
  const e = n.domain.concat([eo, no, bn, ro, so, io, oo, lo, yt, yc, as, ao, co, uo, Pt, ho, us, fo]), t = [to, wn, Sc, _t, wc, as, cs, kc, xc, Yi, ji, is, ls, Wi, Hi, $i, Vi, Ui, qi, Ki, Gi, Ji, Qi, Zi, Xi], r = [eo, to, no, ro, so, io, oo, lo, yt, is, ls, as, ao, co, uo, cs, Pt, ho, us, fo], s = gt(), i = I(s, us);
  X(i, r, i), X(i, n.domain, i);
  const o = gt(), l = gt(), a = gt();
  X(s, n.domain, o), X(s, n.scheme, l), X(s, n.slashscheme, a), X(o, r, i), X(o, n.domain, o);
  const u = I(o, bn);
  I(i, bn, u), I(l, bn, u), I(a, bn, u);
  const d = I(i, _t);
  X(d, r, i), X(d, n.domain, i);
  const h = gt();
  X(u, n.domain, h), X(h, n.domain, h);
  const p = I(h, _t);
  X(p, n.domain, h);
  const g = gt(Wd);
  X(p, n.tld, g), X(p, n.utld, g), I(u, Cs, g);
  const b = I(h, yt);
  I(b, yt, b), X(b, n.domain, h), X(g, n.domain, h), I(g, _t, p), I(g, yt, b);
  const S = I(g, wn);
  X(S, n.numeric, Wd);
  const w = I(o, yt), x = I(o, _t);
  I(w, yt, w), X(w, n.domain, o), X(x, r, i), X(x, n.domain, o);
  const v = gt(ai);
  X(x, n.tld, v), X(x, n.utld, v), X(v, n.domain, o), X(v, r, i), I(v, _t, x), I(v, yt, w), I(v, bn, u);
  const T = I(v, wn), D = gt(ai);
  X(T, n.numeric, D);
  const A = gt(ai), R = gt();
  X(A, e, A), X(A, t, R), X(R, e, A), X(R, t, R), I(v, Pt, A), I(D, Pt, A);
  const O = I(l, wn), L = I(a, wn), Y = I(L, Pt), te = I(Y, Pt);
  X(l, n.domain, o), I(l, _t, x), I(l, yt, w), X(a, n.domain, o), I(a, _t, x), I(a, yt, w), X(O, n.domain, A), I(O, Pt, A), I(O, cs, A), X(te, n.domain, A), X(te, e, A), I(te, Pt, A);
  const re = [
    [is, ls],
    // {}
    [Hi, Wi],
    // []
    [$i, Vi],
    // ()
    [Yi, ji],
    // <>
    [Ui, qi],
    // （）
    [Ki, Gi],
    // 「」
    [Ji, Qi],
    // 『』
    [Zi, Xi]
    // ＜＞
  ];
  for (let ye = 0; ye < re.length; ye++) {
    const [be, j] = re[ye], q = I(A, be);
    I(R, be, q), I(q, j, A);
    const W = gt(ai);
    X(q, e, W);
    const G = gt();
    X(q, t), X(W, e, W), X(W, t, G), X(G, e, W), X(G, t, G), I(W, j, A), I(G, j, A);
  }
  return I(s, Cs, v), I(s, bc, dv), {
    start: s,
    tokens: Np
  };
}
function hv(n, e, t) {
  let r = t.length, s = 0, i = [], o = [];
  for (; s < r; ) {
    let l = n, a = null, u = null, d = 0, h = null, p = -1;
    for (; s < r && !(a = l.go(t[s].t)); )
      o.push(t[s++]);
    for (; s < r && (u = a || l.go(t[s].t)); )
      a = null, l = u, l.accepts() ? (p = 0, h = l) : p >= 0 && p++, s++, d++;
    if (p < 0)
      s -= d, s < r && (o.push(t[s]), s++);
    else {
      o.length > 0 && (i.push(Vl($d, e, o)), o = []), s -= p, d -= p;
      const g = h.t, b = t.slice(s - d, s);
      i.push(Vl(g, e, b));
    }
  }
  return o.length > 0 && i.push(Vl($d, e, o)), i;
}
function Vl(n, e, t) {
  const r = t[0].s, s = t[t.length - 1].e, i = e.slice(r, s);
  return new n(i, t);
}
const pv = typeof console < "u" && console && console.warn || (() => {
}), mv = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", pe = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function gv() {
  return at.groups = {}, pe.scanner = null, pe.parser = null, pe.tokenQueue = [], pe.pluginQueue = [], pe.customSchemes = [], pe.initialized = !1, pe;
}
function Vd(n, e = !1) {
  if (pe.initialized && pv(`linkifyjs: already initialized - will not register custom scheme "${n}" ${mv}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(n))
    throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  pe.customSchemes.push([n, e]);
}
function yv() {
  pe.scanner = cv(pe.customSchemes);
  for (let n = 0; n < pe.tokenQueue.length; n++)
    pe.tokenQueue[n][1]({
      scanner: pe.scanner
    });
  pe.parser = fv(pe.scanner.tokens);
  for (let n = 0; n < pe.pluginQueue.length; n++)
    pe.pluginQueue[n][1]({
      scanner: pe.scanner,
      parser: pe.parser
    });
  return pe.initialized = !0, pe;
}
function Mc(n) {
  return pe.initialized || yv(), hv(pe.parser.start, n, Rp(pe.scanner.start, n));
}
Mc.scan = Rp;
function _p(n, e = null, t = null) {
  if (e && typeof e == "object") {
    if (t)
      throw Error(`linkifyjs: Invalid link type ${e}; must be a string`);
    t = e, e = null;
  }
  const r = new Cc(t), s = Mc(n), i = [];
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    l.isLink && (!e || l.t === e) && r.check(l) && i.push(l.toFormattedObject(r));
  }
  return i;
}
const vc = "[\0-   ᠎ -\u2029 　]", bv = new RegExp(vc), Sv = new RegExp(`${vc}$`), wv = new RegExp(vc, "g");
function kv(n) {
  return n.length === 1 ? n[0].isLink : n.length === 3 && n[1].isLink ? ["()", "[]"].includes(n[0].value + n[2].value) : !1;
}
function xv(n) {
  return new Ne({
    key: new Ue("autolink"),
    appendTransaction: (e, t, r) => {
      const s = e.some((u) => u.docChanged) && !t.doc.eq(r.doc), i = e.some((u) => u.getMeta("preventAutolink"));
      if (!s || i)
        return;
      const { tr: o } = r, l = jx(t.doc, [...e]);
      if (Zx(l).forEach(({ newRange: u }) => {
        const d = qx(r.doc, u, (g) => g.isTextblock);
        let h, p;
        if (d.length > 1)
          h = d[0], p = r.doc.textBetween(h.pos, h.pos + h.node.nodeSize, void 0, " ");
        else if (d.length) {
          const g = r.doc.textBetween(u.from, u.to, " ", " ");
          if (!Sv.test(g))
            return;
          h = d[0], p = r.doc.textBetween(h.pos, u.to, void 0, " ");
        }
        if (h && p) {
          const g = p.split(bv).filter(Boolean);
          if (g.length <= 0)
            return !1;
          const b = g[g.length - 1], S = h.pos + p.lastIndexOf(b);
          if (!b)
            return !1;
          const w = Mc(b).map((x) => x.toObject(n.defaultProtocol));
          if (!kv(w))
            return !1;
          w.filter((x) => x.isLink).map((x) => ({
            ...x,
            from: S + x.start + 1,
            to: S + x.end + 1
          })).filter((x) => r.schema.marks.code ? !r.doc.rangeHasMark(x.from, x.to, r.schema.marks.code) : !0).filter((x) => n.validate(x.value)).filter((x) => n.shouldAutoLink(x.value)).forEach((x) => {
            pc(x.from, x.to, r.doc).some((v) => v.mark.type === n.type) || o.addMark(x.from, x.to, n.type.create({
              href: x.href
            }));
          });
        }
      }), !!o.steps.length)
        return o;
    }
  });
}
function Cv(n) {
  return new Ne({
    key: new Ue("handleClickLink"),
    props: {
      handleClick: (e, t, r) => {
        var s, i;
        if (r.button !== 0 || !e.editable)
          return !1;
        let o = r.target;
        const l = [];
        for (; o.nodeName !== "DIV"; )
          l.push(o), o = o.parentNode;
        if (!l.find((p) => p.nodeName === "A"))
          return !1;
        const a = bp(e.state, n.type.name), u = r.target, d = (s = u == null ? void 0 : u.href) !== null && s !== void 0 ? s : a.href, h = (i = u == null ? void 0 : u.target) !== null && i !== void 0 ? i : a.target;
        return u && d ? (window.open(d, h), !0) : !1;
      }
    }
  });
}
function Mv(n) {
  return new Ne({
    key: new Ue("handlePasteLink"),
    props: {
      handlePaste: (e, t, r) => {
        const { state: s } = e, { selection: i } = s, { empty: o } = i;
        if (o)
          return !1;
        let l = "";
        r.content.forEach((u) => {
          l += u.textContent;
        });
        const a = _p(l, { defaultProtocol: n.defaultProtocol }).find((u) => u.isLink && u.value === l);
        return !l || !a ? !1 : n.editor.commands.setMark(n.type, {
          href: a.href
        });
      }
    }
  });
}
function Bn(n, e) {
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
    const s = typeof r == "string" ? r : r.scheme;
    s && t.push(s);
  }), !n || n.replace(wv, "").match(new RegExp(
    // eslint-disable-next-line no-useless-escape
    `^(?:(?:${t.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`,
    "i"
  ));
}
const vv = Ct.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: !1,
  exitable: !0,
  onCreate() {
    this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach((n) => {
      if (typeof n == "string") {
        Vd(n);
        return;
      }
      Vd(n.scheme, n.optionalSlashes);
    });
  },
  onDestroy() {
    gv();
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
      isAllowedUri: (n, e) => !!Bn(n, e.protocols),
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
            defaultValidate: (t) => !!Bn(t, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol
          }) ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return this.options.isAllowedUri(n.href, {
      defaultValidate: (e) => !!Bn(e, this.options.protocols),
      protocols: this.options.protocols,
      defaultProtocol: this.options.defaultProtocol
    }) ? ["a", me(this.options.HTMLAttributes, n), 0] : [
      "a",
      me(this.options.HTMLAttributes, { ...n, href: "" }),
      0
    ];
  },
  addCommands() {
    return {
      setLink: (n) => ({ chain: e }) => {
        const { href: t } = n;
        return this.options.isAllowedUri(t, {
          defaultValidate: (r) => !!Bn(r, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? e().setMark(this.name, n).setMeta("preventAutolink", !0).run() : !1;
      },
      toggleLink: (n) => ({ chain: e }) => {
        const { href: t } = n;
        return this.options.isAllowedUri(t, {
          defaultValidate: (r) => !!Bn(r, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? e().toggleMark(this.name, n, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run() : !1;
      },
      unsetLink: () => ({ chain: n }) => n().unsetMark(this.name, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run()
    };
  },
  addPasteRules() {
    return [
      Nn({
        find: (n) => {
          const e = [];
          if (n) {
            const { protocols: t, defaultProtocol: r } = this.options, s = _p(n).filter((i) => i.isLink && this.options.isAllowedUri(i.value, {
              defaultValidate: (o) => !!Bn(o, t),
              protocols: t,
              defaultProtocol: r
            }));
            s.length && s.forEach((i) => e.push({
              text: i.value,
              data: {
                href: i.href
              },
              index: i.start
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
    return this.options.autolink && n.push(xv({
      type: this.type,
      defaultProtocol: this.options.defaultProtocol,
      validate: (r) => this.options.isAllowedUri(r, {
        defaultValidate: (s) => !!Bn(s, e),
        protocols: e,
        defaultProtocol: t
      }),
      shouldAutoLink: this.options.shouldAutoLink
    })), this.options.openOnClick === !0 && n.push(Cv({
      type: this.type
    })), this.options.linkOnPaste && n.push(Mv({
      editor: this.editor,
      defaultProtocol: this.options.defaultProtocol,
      type: this.type
    })), n;
  }
}), Tv = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/, Ov = _e.create({
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
    return ["img", me(this.options.HTMLAttributes, n)];
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
      Sp({
        find: Tv,
        type: this.type,
        getAttributes: (n) => {
          const [, , e, t, r] = n;
          return { src: t, alt: e, title: r };
        }
      })
    ];
  }
}), Ev = De.create({
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
}), Av = (n) => {
  if (!n.children.length)
    return;
  const e = n.querySelectorAll("span");
  e && e.forEach((t) => {
    var r, s;
    const i = t.getAttribute("style"), o = (s = (r = t.parentElement) === null || r === void 0 ? void 0 : r.closest("span")) === null || s === void 0 ? void 0 : s.getAttribute("style");
    t.setAttribute("style", `${o};${i}`);
  });
}, Dv = Ct.create({
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
        getAttrs: (n) => n.hasAttribute("style") ? (this.options.mergeNestedSpanStyles && Av(n), {}) : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["span", me(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      removeEmptyTextStyle: () => ({ tr: n }) => {
        const { selection: e } = n;
        return n.doc.nodesBetween(e.from, e.to, (t, r) => {
          if (t.isTextblock)
            return !0;
          t.marks.filter((s) => s.type === this.type).some((s) => Object.values(s.attrs).some((i) => !!i)) || n.removeMark(r, r + t.nodeSize, this.type);
        }), !0;
      }
    };
  }
}), Nv = De.create({
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
}), Rv = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))$/, Iv = /(?:^|\s)(==(?!\s+==)((?:[^=]+))==(?!\s+==))/g, _v = Ct.create({
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
    return ["mark", me(this.options.HTMLAttributes, n), 0];
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
      rr({
        find: Rv,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Nn({
        find: Iv,
        type: this.type
      })
    ];
  }
}), Pv = De.create({
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
      new Ne({
        key: new Ue("placeholder"),
        props: {
          decorations: ({ doc: n, selection: e }) => {
            const t = this.editor.isEditable || !this.options.showOnlyWhenEditable, { anchor: r } = e, s = [];
            if (!t)
              return null;
            const i = this.editor.isEmpty;
            return n.descendants((o, l) => {
              const a = r >= l && r <= l + o.nodeSize, u = !o.isLeaf && Eo(o);
              if ((a || !this.options.showOnlyCurrent) && u) {
                const d = [this.options.emptyNodeClass];
                i && d.push(this.options.emptyEditorClass);
                const h = Qe.node(l, l + o.nodeSize, {
                  class: d.join(" "),
                  "data-placeholder": typeof this.options.placeholder == "function" ? this.options.placeholder({
                    editor: this.editor,
                    node: o,
                    pos: l,
                    hasAnchor: a
                  }) : this.options.placeholder
                });
                s.push(h);
              }
              return this.options.includeChildren;
            }), Se.create(n, s);
          }
        }
      })
    ];
  }
}), Lv = (n) => Me({
  find: /--$/,
  replace: n ?? "—"
}), zv = (n) => Me({
  find: /\.\.\.$/,
  replace: n ?? "…"
}), Fv = (n) => Me({
  find: /(?:^|[\s{[(<'"\u2018\u201C])(")$/,
  replace: n ?? "“"
}), Bv = (n) => Me({
  find: /"$/,
  replace: n ?? "”"
}), Hv = (n) => Me({
  find: /(?:^|[\s{[(<'"\u2018\u201C])(')$/,
  replace: n ?? "‘"
}), Wv = (n) => Me({
  find: /'$/,
  replace: n ?? "’"
}), $v = (n) => Me({
  find: /<-$/,
  replace: n ?? "←"
}), Vv = (n) => Me({
  find: /->$/,
  replace: n ?? "→"
}), Yv = (n) => Me({
  find: /\(c\)$/,
  replace: n ?? "©"
}), jv = (n) => Me({
  find: /\(tm\)$/,
  replace: n ?? "™"
}), Uv = (n) => Me({
  find: /\(sm\)$/,
  replace: n ?? "℠"
}), qv = (n) => Me({
  find: /\(r\)$/,
  replace: n ?? "®"
}), Kv = (n) => Me({
  find: /(?:^|\s)(1\/2)\s$/,
  replace: n ?? "½"
}), Gv = (n) => Me({
  find: /\+\/-$/,
  replace: n ?? "±"
}), Jv = (n) => Me({
  find: /!=$/,
  replace: n ?? "≠"
}), Qv = (n) => Me({
  find: /<<$/,
  replace: n ?? "«"
}), Zv = (n) => Me({
  find: />>$/,
  replace: n ?? "»"
}), Xv = (n) => Me({
  find: /\d+\s?([*x])\s?\d+$/,
  replace: n ?? "×"
}), eT = (n) => Me({
  find: /\^2$/,
  replace: n ?? "²"
}), tT = (n) => Me({
  find: /\^3$/,
  replace: n ?? "³"
}), nT = (n) => Me({
  find: /(?:^|\s)(1\/4)\s$/,
  replace: n ?? "¼"
}), rT = (n) => Me({
  find: /(?:^|\s)(3\/4)\s$/,
  replace: n ?? "¾"
}), sT = De.create({
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
    return this.options.emDash !== !1 && n.push(Lv(this.options.emDash)), this.options.ellipsis !== !1 && n.push(zv(this.options.ellipsis)), this.options.openDoubleQuote !== !1 && n.push(Fv(this.options.openDoubleQuote)), this.options.closeDoubleQuote !== !1 && n.push(Bv(this.options.closeDoubleQuote)), this.options.openSingleQuote !== !1 && n.push(Hv(this.options.openSingleQuote)), this.options.closeSingleQuote !== !1 && n.push(Wv(this.options.closeSingleQuote)), this.options.leftArrow !== !1 && n.push($v(this.options.leftArrow)), this.options.rightArrow !== !1 && n.push(Vv(this.options.rightArrow)), this.options.copyright !== !1 && n.push(Yv(this.options.copyright)), this.options.trademark !== !1 && n.push(jv(this.options.trademark)), this.options.servicemark !== !1 && n.push(Uv(this.options.servicemark)), this.options.registeredTrademark !== !1 && n.push(qv(this.options.registeredTrademark)), this.options.oneHalf !== !1 && n.push(Kv(this.options.oneHalf)), this.options.plusMinus !== !1 && n.push(Gv(this.options.plusMinus)), this.options.notEqual !== !1 && n.push(Jv(this.options.notEqual)), this.options.laquo !== !1 && n.push(Qv(this.options.laquo)), this.options.raquo !== !1 && n.push(Zv(this.options.raquo)), this.options.multiplication !== !1 && n.push(Xv(this.options.multiplication)), this.options.superscriptTwo !== !1 && n.push(eT(this.options.superscriptTwo)), this.options.superscriptThree !== !1 && n.push(tT(this.options.superscriptThree)), this.options.oneQuarter !== !1 && n.push(nT(this.options.oneQuarter)), this.options.threeQuarters !== !1 && n.push(rT(this.options.threeQuarters)), n;
  }
});
let Aa, Da;
if (typeof WeakMap < "u") {
  let n = /* @__PURE__ */ new WeakMap();
  Aa = (e) => n.get(e), Da = (e, t) => (n.set(e, t), t);
} else {
  const n = [];
  let t = 0;
  Aa = (r) => {
    for (let s = 0; s < n.length; s += 2) if (n[s] == r) return n[s + 1];
  }, Da = (r, s) => (t == 10 && (t = 0), n[t++] = r, n[t++] = s);
}
var Ce = class {
  constructor(n, e, t, r) {
    this.width = n, this.height = e, this.map = t, this.problems = r;
  }
  findCell(n) {
    for (let e = 0; e < this.map.length; e++) {
      const t = this.map[e];
      if (t != n) continue;
      const r = e % this.width, s = e / this.width | 0;
      let i = r + 1, o = s + 1;
      for (let l = 1; i < this.width && this.map[e + l] == t; l++) i++;
      for (let l = 1; o < this.height && this.map[e + this.width * l] == t; l++) o++;
      return {
        left: r,
        top: s,
        right: i,
        bottom: o
      };
    }
    throw new RangeError(`No cell with offset ${n} found`);
  }
  colCount(n) {
    for (let e = 0; e < this.map.length; e++) if (this.map[e] == n) return e % this.width;
    throw new RangeError(`No cell with offset ${n} found`);
  }
  nextCell(n, e, t) {
    const { left: r, right: s, top: i, bottom: o } = this.findCell(n);
    return e == "horiz" ? (t < 0 ? r == 0 : s == this.width) ? null : this.map[i * this.width + (t < 0 ? r - 1 : s)] : (t < 0 ? i == 0 : o == this.height) ? null : this.map[r + this.width * (t < 0 ? i - 1 : o)];
  }
  rectBetween(n, e) {
    const { left: t, right: r, top: s, bottom: i } = this.findCell(n), { left: o, right: l, top: a, bottom: u } = this.findCell(e);
    return {
      left: Math.min(t, o),
      top: Math.min(s, a),
      right: Math.max(r, l),
      bottom: Math.max(i, u)
    };
  }
  cellsInRect(n) {
    const e = [], t = {};
    for (let r = n.top; r < n.bottom; r++) for (let s = n.left; s < n.right; s++) {
      const i = r * this.width + s, o = this.map[i];
      t[o] || (t[o] = !0, !(s == n.left && s && this.map[i - 1] == o || r == n.top && r && this.map[i - this.width] == o) && e.push(o));
    }
    return e;
  }
  positionAt(n, e, t) {
    for (let r = 0, s = 0; ; r++) {
      const i = s + t.child(r).nodeSize;
      if (r == n) {
        let o = e + n * this.width;
        const l = (n + 1) * this.width;
        for (; o < l && this.map[o] < s; ) o++;
        return o == l ? i - 1 : this.map[o];
      }
      s = i;
    }
  }
  static get(n) {
    return Aa(n) || Da(n, iT(n));
  }
};
function iT(n) {
  if (n.type.spec.tableRole != "table") throw new RangeError("Not a table node: " + n.type.name);
  const e = oT(n), t = n.childCount, r = [];
  let s = 0, i = null;
  const o = [];
  for (let u = 0, d = e * t; u < d; u++) r[u] = 0;
  for (let u = 0, d = 0; u < t; u++) {
    const h = n.child(u);
    d++;
    for (let b = 0; ; b++) {
      for (; s < r.length && r[s] != 0; ) s++;
      if (b == h.childCount) break;
      const S = h.child(b), { colspan: w, rowspan: x, colwidth: v } = S.attrs;
      for (let T = 0; T < x; T++) {
        if (T + u >= t) {
          (i || (i = [])).push({
            type: "overlong_rowspan",
            pos: d,
            n: x - T
          });
          break;
        }
        const D = s + T * e;
        for (let A = 0; A < w; A++) {
          r[D + A] == 0 ? r[D + A] = d : (i || (i = [])).push({
            type: "collision",
            row: u,
            pos: d,
            n: w - A
          });
          const R = v && v[A];
          if (R) {
            const O = (D + A) % e * 2, L = o[O];
            L == null || L != R && o[O + 1] == 1 ? (o[O] = R, o[O + 1] = 1) : L == R && o[O + 1]++;
          }
        }
      }
      s += w, d += S.nodeSize;
    }
    const p = (u + 1) * e;
    let g = 0;
    for (; s < p; ) r[s++] == 0 && g++;
    g && (i || (i = [])).push({
      type: "missing",
      row: u,
      n: g
    }), d++;
  }
  (e === 0 || t === 0) && (i || (i = [])).push({ type: "zero_sized" });
  const l = new Ce(e, t, r, i);
  let a = !1;
  for (let u = 0; !a && u < o.length; u += 2) o[u] != null && o[u + 1] < t && (a = !0);
  return a && lT(l, o, n), l;
}
function oT(n) {
  let e = -1, t = !1;
  for (let r = 0; r < n.childCount; r++) {
    const s = n.child(r);
    let i = 0;
    if (t) for (let o = 0; o < r; o++) {
      const l = n.child(o);
      for (let a = 0; a < l.childCount; a++) {
        const u = l.child(a);
        o + u.attrs.rowspan > r && (i += u.attrs.colspan);
      }
    }
    for (let o = 0; o < s.childCount; o++) {
      const l = s.child(o);
      i += l.attrs.colspan, l.attrs.rowspan > 1 && (t = !0);
    }
    e == -1 ? e = i : e != i && (e = Math.max(e, i));
  }
  return e;
}
function lT(n, e, t) {
  n.problems || (n.problems = []);
  const r = {};
  for (let s = 0; s < n.map.length; s++) {
    const i = n.map[s];
    if (r[i]) continue;
    r[i] = !0;
    const o = t.nodeAt(i);
    if (!o) throw new RangeError(`No cell with offset ${i} found`);
    let l = null;
    const a = o.attrs;
    for (let u = 0; u < a.colspan; u++) {
      const d = e[(s + u) % n.width * 2];
      d != null && (!a.colwidth || a.colwidth[u] != d) && ((l || (l = aT(a)))[u] = d);
    }
    l && n.problems.unshift({
      type: "colwidth mismatch",
      pos: i,
      colwidth: l
    });
  }
}
function aT(n) {
  if (n.colwidth) return n.colwidth.slice();
  const e = [];
  for (let t = 0; t < n.colspan; t++) e.push(0);
  return e;
}
function Xe(n) {
  let e = n.cached.tableNodeTypes;
  if (!e) {
    e = n.cached.tableNodeTypes = {};
    for (const t in n.nodes) {
      const r = n.nodes[t], s = r.spec.tableRole;
      s && (e[s] = r);
    }
  }
  return e;
}
const kn = new Ue("selectingCells");
function sr(n) {
  for (let e = n.depth - 1; e > 0; e--) if (n.node(e).type.spec.tableRole == "row") return n.node(0).resolve(n.before(e + 1));
  return null;
}
function cT(n) {
  for (let e = n.depth; e > 0; e--) {
    const t = n.node(e).type.spec.tableRole;
    if (t === "cell" || t === "header_cell") return n.node(e);
  }
  return null;
}
function Et(n) {
  const e = n.selection.$head;
  for (let t = e.depth; t > 0; t--) if (e.node(t).type.spec.tableRole == "row") return !0;
  return !1;
}
function No(n) {
  const e = n.selection;
  if ("$anchorCell" in e && e.$anchorCell) return e.$anchorCell.pos > e.$headCell.pos ? e.$anchorCell : e.$headCell;
  if ("node" in e && e.node && e.node.type.spec.tableRole == "cell") return e.$anchor;
  const t = sr(e.$head) || uT(e.$head);
  if (t) return t;
  throw new RangeError(`No cell found around position ${e.head}`);
}
function uT(n) {
  for (let e = n.nodeAfter, t = n.pos; e; e = e.firstChild, t++) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell") return n.doc.resolve(t);
  }
  for (let e = n.nodeBefore, t = n.pos; e; e = e.lastChild, t--) {
    const r = e.type.spec.tableRole;
    if (r == "cell" || r == "header_cell") return n.doc.resolve(t - e.nodeSize);
  }
}
function Na(n) {
  return n.parent.type.spec.tableRole == "row" && !!n.nodeAfter;
}
function dT(n) {
  return n.node(0).resolve(n.pos + n.nodeAfter.nodeSize);
}
function Tc(n, e) {
  return n.depth == e.depth && n.pos >= e.start(-1) && n.pos <= e.end(-1);
}
function Pp(n, e, t) {
  const r = n.node(-1), s = Ce.get(r), i = n.start(-1), o = s.nextCell(n.pos - i, e, t);
  return o == null ? null : n.node(0).resolve(i + o);
}
function ir(n, e, t = 1) {
  const r = {
    ...n,
    colspan: n.colspan - t
  };
  return r.colwidth && (r.colwidth = r.colwidth.slice(), r.colwidth.splice(e, t), r.colwidth.some((s) => s > 0) || (r.colwidth = null)), r;
}
function Lp(n, e, t = 1) {
  const r = {
    ...n,
    colspan: n.colspan + t
  };
  if (r.colwidth) {
    r.colwidth = r.colwidth.slice();
    for (let s = 0; s < t; s++) r.colwidth.splice(e, 0, 0);
  }
  return r;
}
function fT(n, e, t) {
  const r = Xe(e.type.schema).header_cell;
  for (let s = 0; s < n.height; s++) if (e.nodeAt(n.map[t + s * n.width]).type != r) return !1;
  return !0;
}
var fe = class tn extends U {
  constructor(e, t = e) {
    const r = e.node(-1), s = Ce.get(r), i = e.start(-1), o = s.rectBetween(e.pos - i, t.pos - i), l = e.node(0), a = s.cellsInRect(o).filter((d) => d != t.pos - i);
    a.unshift(t.pos - i);
    const u = a.map((d) => {
      const h = r.nodeAt(d);
      if (!h) throw new RangeError(`No cell with offset ${d} found`);
      const p = i + d + 1;
      return new dh(l.resolve(p), l.resolve(p + h.content.size));
    });
    super(u[0].$from, u[0].$to, u), this.$anchorCell = e, this.$headCell = t;
  }
  map(e, t) {
    const r = e.resolve(t.map(this.$anchorCell.pos)), s = e.resolve(t.map(this.$headCell.pos));
    if (Na(r) && Na(s) && Tc(r, s)) {
      const i = this.$anchorCell.node(-1) != r.node(-1);
      return i && this.isRowSelection() ? tn.rowSelection(r, s) : i && this.isColSelection() ? tn.colSelection(r, s) : new tn(r, s);
    }
    return V.between(r, s);
  }
  content() {
    const e = this.$anchorCell.node(-1), t = Ce.get(e), r = this.$anchorCell.start(-1), s = t.rectBetween(this.$anchorCell.pos - r, this.$headCell.pos - r), i = {}, o = [];
    for (let a = s.top; a < s.bottom; a++) {
      const u = [];
      for (let d = a * t.width + s.left, h = s.left; h < s.right; h++, d++) {
        const p = t.map[d];
        if (i[p]) continue;
        i[p] = !0;
        const g = t.findCell(p);
        let b = e.nodeAt(p);
        if (!b) throw new RangeError(`No cell with offset ${p} found`);
        const S = s.left - g.left, w = g.right - s.right;
        if (S > 0 || w > 0) {
          let x = b.attrs;
          if (S > 0 && (x = ir(x, 0, S)), w > 0 && (x = ir(x, x.colspan - w, w)), g.left < s.left) {
            if (b = b.type.createAndFill(x), !b) throw new RangeError(`Could not create cell with attrs ${JSON.stringify(x)}`);
          } else b = b.type.create(x, b.content);
        }
        if (g.top < s.top || g.bottom > s.bottom) {
          const x = {
            ...b.attrs,
            rowspan: Math.min(g.bottom, s.bottom) - Math.max(g.top, s.top)
          };
          g.top < s.top ? b = b.type.createAndFill(x) : b = b.type.create(x, b.content);
        }
        u.push(b);
      }
      o.push(e.child(a).copy(N.from(u)));
    }
    const l = this.isColSelection() && this.isRowSelection() ? e : o;
    return new z(N.from(l), 1, 1);
  }
  replace(e, t = z.empty) {
    const r = e.steps.length, s = this.ranges;
    for (let o = 0; o < s.length; o++) {
      const { $from: l, $to: a } = s[o], u = e.mapping.slice(r);
      e.replace(u.map(l.pos), u.map(a.pos), o ? z.empty : t);
    }
    const i = U.findFrom(e.doc.resolve(e.mapping.slice(r).map(this.to)), -1);
    i && e.setSelection(i);
  }
  replaceWith(e, t) {
    this.replace(e, new z(N.from(t), 0, 0));
  }
  forEachCell(e) {
    const t = this.$anchorCell.node(-1), r = Ce.get(t), s = this.$anchorCell.start(-1), i = r.cellsInRect(r.rectBetween(this.$anchorCell.pos - s, this.$headCell.pos - s));
    for (let o = 0; o < i.length; o++) e(t.nodeAt(i[o]), s + i[o]);
  }
  isColSelection() {
    const e = this.$anchorCell.index(-1), t = this.$headCell.index(-1);
    if (Math.min(e, t) > 0) return !1;
    const r = e + this.$anchorCell.nodeAfter.attrs.rowspan, s = t + this.$headCell.nodeAfter.attrs.rowspan;
    return Math.max(r, s) == this.$headCell.node(-1).childCount;
  }
  static colSelection(e, t = e) {
    const r = e.node(-1), s = Ce.get(r), i = e.start(-1), o = s.findCell(e.pos - i), l = s.findCell(t.pos - i), a = e.node(0);
    return o.top <= l.top ? (o.top > 0 && (e = a.resolve(i + s.map[o.left])), l.bottom < s.height && (t = a.resolve(i + s.map[s.width * (s.height - 1) + l.right - 1]))) : (l.top > 0 && (t = a.resolve(i + s.map[l.left])), o.bottom < s.height && (e = a.resolve(i + s.map[s.width * (s.height - 1) + o.right - 1]))), new tn(e, t);
  }
  isRowSelection() {
    const e = this.$anchorCell.node(-1), t = Ce.get(e), r = this.$anchorCell.start(-1), s = t.colCount(this.$anchorCell.pos - r), i = t.colCount(this.$headCell.pos - r);
    if (Math.min(s, i) > 0) return !1;
    const o = s + this.$anchorCell.nodeAfter.attrs.colspan, l = i + this.$headCell.nodeAfter.attrs.colspan;
    return Math.max(o, l) == t.width;
  }
  eq(e) {
    return e instanceof tn && e.$anchorCell.pos == this.$anchorCell.pos && e.$headCell.pos == this.$headCell.pos;
  }
  static rowSelection(e, t = e) {
    const r = e.node(-1), s = Ce.get(r), i = e.start(-1), o = s.findCell(e.pos - i), l = s.findCell(t.pos - i), a = e.node(0);
    return o.left <= l.left ? (o.left > 0 && (e = a.resolve(i + s.map[o.top * s.width])), l.right < s.width && (t = a.resolve(i + s.map[s.width * (l.top + 1) - 1]))) : (l.left > 0 && (t = a.resolve(i + s.map[l.top * s.width])), o.right < s.width && (e = a.resolve(i + s.map[s.width * (o.top + 1) - 1]))), new tn(e, t);
  }
  toJSON() {
    return {
      type: "cell",
      anchor: this.$anchorCell.pos,
      head: this.$headCell.pos
    };
  }
  static fromJSON(e, t) {
    return new tn(e.resolve(t.anchor), e.resolve(t.head));
  }
  static create(e, t, r = t) {
    return new tn(e.resolve(t), e.resolve(r));
  }
  getBookmark() {
    return new hT(this.$anchorCell.pos, this.$headCell.pos);
  }
};
fe.prototype.visible = !1;
U.jsonID("cell", fe);
var hT = class zp {
  constructor(e, t) {
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new zp(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    const t = e.resolve(this.anchor), r = e.resolve(this.head);
    return t.parent.type.spec.tableRole == "row" && r.parent.type.spec.tableRole == "row" && t.index() < t.parent.childCount && r.index() < r.parent.childCount && Tc(t, r) ? new fe(t, r) : U.near(r, 1);
  }
};
function pT(n) {
  if (!(n.selection instanceof fe)) return null;
  const e = [];
  return n.selection.forEachCell((t, r) => {
    e.push(Qe.node(r, r + t.nodeSize, { class: "selectedCell" }));
  }), Se.create(n.doc, e);
}
function mT({ $from: n, $to: e }) {
  if (n.pos == e.pos || n.pos < e.pos - 6) return !1;
  let t = n.pos, r = e.pos, s = n.depth;
  for (; s >= 0 && !(n.after(s + 1) < n.end(s)); s--, t++) ;
  for (let i = e.depth; i >= 0 && !(e.before(i + 1) > e.start(i)); i--, r--) ;
  return t == r && /row|table/.test(n.node(s).type.spec.tableRole);
}
function gT({ $from: n, $to: e }) {
  let t, r;
  for (let s = n.depth; s > 0; s--) {
    const i = n.node(s);
    if (i.type.spec.tableRole === "cell" || i.type.spec.tableRole === "header_cell") {
      t = i;
      break;
    }
  }
  for (let s = e.depth; s > 0; s--) {
    const i = e.node(s);
    if (i.type.spec.tableRole === "cell" || i.type.spec.tableRole === "header_cell") {
      r = i;
      break;
    }
  }
  return t !== r && e.parentOffset === 0;
}
function yT(n, e, t) {
  const r = (e || n).selection, s = (e || n).doc;
  let i, o;
  if (r instanceof $ && (o = r.node.type.spec.tableRole)) {
    if (o == "cell" || o == "header_cell") i = fe.create(s, r.from);
    else if (o == "row") {
      const l = s.resolve(r.from + 1);
      i = fe.rowSelection(l, l);
    } else if (!t) {
      const l = Ce.get(r.node), a = r.from + 1, u = a + l.map[l.width * l.height - 1];
      i = fe.create(s, a + 1, u);
    }
  } else r instanceof V && mT(r) ? i = V.create(s, r.from) : r instanceof V && gT(r) && (i = V.create(s, r.$from.start(), r.$from.end()));
  return i && (e || (e = n.tr)).setSelection(i), e;
}
const bT = new Ue("fix-tables");
function Fp(n, e, t, r) {
  const s = n.childCount, i = e.childCount;
  e: for (let o = 0, l = 0; o < i; o++) {
    const a = e.child(o);
    for (let u = l, d = Math.min(s, o + 3); u < d; u++) if (n.child(u) == a) {
      l = u + 1, t += a.nodeSize;
      continue e;
    }
    r(a, t), l < s && n.child(l).sameMarkup(a) ? Fp(n.child(l), a, t + 1, r) : a.nodesBetween(0, a.content.size, r, t + 1), t += a.nodeSize;
  }
}
function Bp(n, e) {
  let t;
  const r = (s, i) => {
    s.type.spec.tableRole == "table" && (t = ST(n, s, i, t));
  };
  return e ? e.doc != n.doc && Fp(e.doc, n.doc, 0, r) : n.doc.descendants(r), t;
}
function ST(n, e, t, r) {
  const s = Ce.get(e);
  if (!s.problems) return r;
  r || (r = n.tr);
  const i = [];
  for (let a = 0; a < s.height; a++) i.push(0);
  for (let a = 0; a < s.problems.length; a++) {
    const u = s.problems[a];
    if (u.type == "collision") {
      const d = e.nodeAt(u.pos);
      if (!d) continue;
      const h = d.attrs;
      for (let p = 0; p < h.rowspan; p++) i[u.row + p] += u.n;
      r.setNodeMarkup(r.mapping.map(t + 1 + u.pos), null, ir(h, h.colspan - u.n, u.n));
    } else if (u.type == "missing") i[u.row] += u.n;
    else if (u.type == "overlong_rowspan") {
      const d = e.nodeAt(u.pos);
      if (!d) continue;
      r.setNodeMarkup(r.mapping.map(t + 1 + u.pos), null, {
        ...d.attrs,
        rowspan: d.attrs.rowspan - u.n
      });
    } else if (u.type == "colwidth mismatch") {
      const d = e.nodeAt(u.pos);
      if (!d) continue;
      r.setNodeMarkup(r.mapping.map(t + 1 + u.pos), null, {
        ...d.attrs,
        colwidth: u.colwidth
      });
    } else if (u.type == "zero_sized") {
      const d = r.mapping.map(t);
      r.delete(d, d + e.nodeSize);
    }
  }
  let o, l;
  for (let a = 0; a < i.length; a++) i[a] && (o == null && (o = a), l = a);
  for (let a = 0, u = t + 1; a < s.height; a++) {
    const d = e.child(a), h = u + d.nodeSize, p = i[a];
    if (p > 0) {
      let g = "cell";
      d.firstChild && (g = d.firstChild.type.spec.tableRole);
      const b = [];
      for (let w = 0; w < p; w++) {
        const x = Xe(n.schema)[g].createAndFill();
        x && b.push(x);
      }
      const S = (a == 0 || o == a - 1) && l == a ? u + 1 : h - 1;
      r.insert(r.mapping.map(S), b);
    }
    u = h;
  }
  return r.setMeta(bT, { fixTables: !0 });
}
function Ht(n) {
  const e = n.selection, t = No(n), r = t.node(-1), s = t.start(-1), i = Ce.get(r);
  return {
    ...e instanceof fe ? i.rectBetween(e.$anchorCell.pos - s, e.$headCell.pos - s) : i.findCell(t.pos - s),
    tableStart: s,
    map: i,
    table: r
  };
}
function Hp(n, { map: e, tableStart: t, table: r }, s) {
  let i = s > 0 ? -1 : 0;
  fT(e, r, s + i) && (i = s == 0 || s == e.width ? null : 0);
  for (let o = 0; o < e.height; o++) {
    const l = o * e.width + s;
    if (s > 0 && s < e.width && e.map[l - 1] == e.map[l]) {
      const a = e.map[l], u = r.nodeAt(a);
      n.setNodeMarkup(n.mapping.map(t + a), null, Lp(u.attrs, s - e.colCount(a))), o += u.attrs.rowspan - 1;
    } else {
      const a = i == null ? Xe(r.type.schema).cell : r.nodeAt(e.map[l + i]).type, u = e.positionAt(o, s, r);
      n.insert(n.mapping.map(t + u), a.createAndFill());
    }
  }
  return n;
}
function wT(n, e) {
  if (!Et(n)) return !1;
  if (e) {
    const t = Ht(n);
    e(Hp(n.tr, t, t.left));
  }
  return !0;
}
function kT(n, e) {
  if (!Et(n)) return !1;
  if (e) {
    const t = Ht(n);
    e(Hp(n.tr, t, t.right));
  }
  return !0;
}
function xT(n, { map: e, table: t, tableStart: r }, s) {
  const i = n.mapping.maps.length;
  for (let o = 0; o < e.height; ) {
    const l = o * e.width + s, a = e.map[l], u = t.nodeAt(a), d = u.attrs;
    if (s > 0 && e.map[l - 1] == a || s < e.width - 1 && e.map[l + 1] == a) n.setNodeMarkup(n.mapping.slice(i).map(r + a), null, ir(d, s - e.colCount(a)));
    else {
      const h = n.mapping.slice(i).map(r + a);
      n.delete(h, h + u.nodeSize);
    }
    o += d.rowspan;
  }
}
function CT(n, e) {
  if (!Et(n)) return !1;
  if (e) {
    const t = Ht(n), r = n.tr;
    if (t.left == 0 && t.right == t.map.width) return !1;
    for (let s = t.right - 1; xT(r, t, s), s != t.left; s--) {
      const i = t.tableStart ? r.doc.nodeAt(t.tableStart - 1) : r.doc;
      if (!i) throw new RangeError("No table found");
      t.table = i, t.map = Ce.get(i);
    }
    e(r);
  }
  return !0;
}
function MT(n, e, t) {
  var r;
  const s = Xe(e.type.schema).header_cell;
  for (let i = 0; i < n.width; i++) if (((r = e.nodeAt(n.map[i + t * n.width])) === null || r === void 0 ? void 0 : r.type) != s) return !1;
  return !0;
}
function Wp(n, { map: e, tableStart: t, table: r }, s) {
  let i = t;
  for (let u = 0; u < s; u++) i += r.child(u).nodeSize;
  const o = [];
  let l = s > 0 ? -1 : 0;
  MT(e, r, s + l) && (l = s == 0 || s == e.height ? null : 0);
  for (let u = 0, d = e.width * s; u < e.width; u++, d++) if (s > 0 && s < e.height && e.map[d] == e.map[d - e.width]) {
    const h = e.map[d], p = r.nodeAt(h).attrs;
    n.setNodeMarkup(t + h, null, {
      ...p,
      rowspan: p.rowspan + 1
    }), u += p.colspan - 1;
  } else {
    var a;
    const h = l == null ? Xe(r.type.schema).cell : (a = r.nodeAt(e.map[d + l * e.width])) === null || a === void 0 ? void 0 : a.type, p = h == null ? void 0 : h.createAndFill();
    p && o.push(p);
  }
  return n.insert(i, Xe(r.type.schema).row.create(null, o)), n;
}
function vT(n, e) {
  if (!Et(n)) return !1;
  if (e) {
    const t = Ht(n);
    e(Wp(n.tr, t, t.top));
  }
  return !0;
}
function TT(n, e) {
  if (!Et(n)) return !1;
  if (e) {
    const t = Ht(n);
    e(Wp(n.tr, t, t.bottom));
  }
  return !0;
}
function OT(n, { map: e, table: t, tableStart: r }, s) {
  let i = 0;
  for (let u = 0; u < s; u++) i += t.child(u).nodeSize;
  const o = i + t.child(s).nodeSize, l = n.mapping.maps.length;
  n.delete(i + r, o + r);
  const a = /* @__PURE__ */ new Set();
  for (let u = 0, d = s * e.width; u < e.width; u++, d++) {
    const h = e.map[d];
    if (!a.has(h)) {
      if (a.add(h), s > 0 && h == e.map[d - e.width]) {
        const p = t.nodeAt(h).attrs;
        n.setNodeMarkup(n.mapping.slice(l).map(h + r), null, {
          ...p,
          rowspan: p.rowspan - 1
        }), u += p.colspan - 1;
      } else if (s < e.height && h == e.map[d + e.width]) {
        const p = t.nodeAt(h), g = p.attrs, b = p.type.create({
          ...g,
          rowspan: p.attrs.rowspan - 1
        }, p.content), S = e.positionAt(s + 1, u, t);
        n.insert(n.mapping.slice(l).map(r + S), b), u += g.colspan - 1;
      }
    }
  }
}
function ET(n, e) {
  if (!Et(n)) return !1;
  if (e) {
    const t = Ht(n), r = n.tr;
    if (t.top == 0 && t.bottom == t.map.height) return !1;
    for (let s = t.bottom - 1; OT(r, t, s), s != t.top; s--) {
      const i = t.tableStart ? r.doc.nodeAt(t.tableStart - 1) : r.doc;
      if (!i) throw new RangeError("No table found");
      t.table = i, t.map = Ce.get(t.table);
    }
    e(r);
  }
  return !0;
}
function Yd(n) {
  const e = n.content;
  return e.childCount == 1 && e.child(0).isTextblock && e.child(0).childCount == 0;
}
function AT({ width: n, height: e, map: t }, r) {
  let s = r.top * n + r.left, i = s, o = (r.bottom - 1) * n + r.left, l = s + (r.right - r.left - 1);
  for (let a = r.top; a < r.bottom; a++) {
    if (r.left > 0 && t[i] == t[i - 1] || r.right < n && t[l] == t[l + 1]) return !0;
    i += n, l += n;
  }
  for (let a = r.left; a < r.right; a++) {
    if (r.top > 0 && t[s] == t[s - n] || r.bottom < e && t[o] == t[o + n]) return !0;
    s++, o++;
  }
  return !1;
}
function jd(n, e) {
  const t = n.selection;
  if (!(t instanceof fe) || t.$anchorCell.pos == t.$headCell.pos) return !1;
  const r = Ht(n), { map: s } = r;
  if (AT(s, r)) return !1;
  if (e) {
    const i = n.tr, o = {};
    let l = N.empty, a, u;
    for (let d = r.top; d < r.bottom; d++) for (let h = r.left; h < r.right; h++) {
      const p = s.map[d * s.width + h], g = r.table.nodeAt(p);
      if (!(o[p] || !g))
        if (o[p] = !0, a == null)
          a = p, u = g;
        else {
          Yd(g) || (l = l.append(g.content));
          const b = i.mapping.map(p + r.tableStart);
          i.delete(b, b + g.nodeSize);
        }
    }
    if (a == null || u == null) return !0;
    if (i.setNodeMarkup(a + r.tableStart, null, {
      ...Lp(u.attrs, u.attrs.colspan, r.right - r.left - u.attrs.colspan),
      rowspan: r.bottom - r.top
    }), l.size > 0) {
      const d = a + 1 + u.content.size, h = Yd(u) ? a + 1 : d;
      i.replaceWith(h + r.tableStart, d + r.tableStart, l);
    }
    i.setSelection(new fe(i.doc.resolve(a + r.tableStart))), e(i);
  }
  return !0;
}
function Ud(n, e) {
  const t = Xe(n.schema);
  return DT(({ node: r }) => t[r.type.spec.tableRole])(n, e);
}
function DT(n) {
  return (e, t) => {
    const r = e.selection;
    let s, i;
    if (r instanceof fe) {
      if (r.$anchorCell.pos != r.$headCell.pos) return !1;
      s = r.$anchorCell.nodeAfter, i = r.$anchorCell.pos;
    } else {
      var o;
      if (s = cT(r.$from), !s) return !1;
      i = (o = sr(r.$from)) === null || o === void 0 ? void 0 : o.pos;
    }
    if (s == null || i == null || s.attrs.colspan == 1 && s.attrs.rowspan == 1) return !1;
    if (t) {
      let l = s.attrs;
      const a = [], u = l.colwidth;
      l.rowspan > 1 && (l = {
        ...l,
        rowspan: 1
      }), l.colspan > 1 && (l = {
        ...l,
        colspan: 1
      });
      const d = Ht(e), h = e.tr;
      for (let g = 0; g < d.right - d.left; g++) a.push(u ? {
        ...l,
        colwidth: u && u[g] ? [u[g]] : null
      } : l);
      let p;
      for (let g = d.top; g < d.bottom; g++) {
        let b = d.map.positionAt(g, d.left, d.table);
        g == d.top && (b += s.nodeSize);
        for (let S = d.left, w = 0; S < d.right; S++, w++)
          S == d.left && g == d.top || h.insert(p = h.mapping.map(b + d.tableStart, 1), n({
            node: s,
            row: g,
            col: S
          }).createAndFill(a[w]));
      }
      h.setNodeMarkup(i, n({
        node: s,
        row: d.top,
        col: d.left
      }), a[0]), r instanceof fe && h.setSelection(new fe(h.doc.resolve(r.$anchorCell.pos), p ? h.doc.resolve(p) : void 0)), t(h);
    }
    return !0;
  };
}
function NT(n, e) {
  return function(t, r) {
    if (!Et(t)) return !1;
    const s = No(t);
    if (s.nodeAfter.attrs[n] === e) return !1;
    if (r) {
      const i = t.tr;
      t.selection instanceof fe ? t.selection.forEachCell((o, l) => {
        o.attrs[n] !== e && i.setNodeMarkup(l, null, {
          ...o.attrs,
          [n]: e
        });
      }) : i.setNodeMarkup(s.pos, null, {
        ...s.nodeAfter.attrs,
        [n]: e
      }), r(i);
    }
    return !0;
  };
}
function RT(n) {
  return function(e, t) {
    if (!Et(e)) return !1;
    if (t) {
      const r = Xe(e.schema), s = Ht(e), i = e.tr, o = s.map.cellsInRect(n == "column" ? {
        left: s.left,
        top: 0,
        right: s.right,
        bottom: s.map.height
      } : n == "row" ? {
        left: 0,
        top: s.top,
        right: s.map.width,
        bottom: s.bottom
      } : s), l = o.map((a) => s.table.nodeAt(a));
      for (let a = 0; a < o.length; a++) l[a].type == r.header_cell && i.setNodeMarkup(s.tableStart + o[a], r.cell, l[a].attrs);
      if (i.steps.length === 0) for (let a = 0; a < o.length; a++) i.setNodeMarkup(s.tableStart + o[a], r.header_cell, l[a].attrs);
      t(i);
    }
    return !0;
  };
}
function qd(n, e, t) {
  const r = e.map.cellsInRect({
    left: 0,
    top: 0,
    right: n == "row" ? e.map.width : 1,
    bottom: n == "column" ? e.map.height : 1
  });
  for (let s = 0; s < r.length; s++) {
    const i = e.table.nodeAt(r[s]);
    if (i && i.type !== t.header_cell) return !1;
  }
  return !0;
}
function vs(n, e) {
  return e = e || { useDeprecatedLogic: !1 }, e.useDeprecatedLogic ? RT(n) : function(t, r) {
    if (!Et(t)) return !1;
    if (r) {
      const s = Xe(t.schema), i = Ht(t), o = t.tr, l = qd("row", i, s), a = qd("column", i, s), u = (n === "column" ? l : n === "row" && a) ? 1 : 0, d = n == "column" ? {
        left: 0,
        top: u,
        right: 1,
        bottom: i.map.height
      } : n == "row" ? {
        left: u,
        top: 0,
        right: i.map.width,
        bottom: 1
      } : i, h = n == "column" ? a ? s.cell : s.header_cell : n == "row" ? l ? s.cell : s.header_cell : s.cell;
      i.map.cellsInRect(d).forEach((p) => {
        const g = p + i.tableStart, b = o.doc.nodeAt(g);
        b && o.setNodeMarkup(g, h, b.attrs);
      }), r(o);
    }
    return !0;
  };
}
vs("row", { useDeprecatedLogic: !0 });
vs("column", { useDeprecatedLogic: !0 });
const IT = vs("cell", { useDeprecatedLogic: !0 });
function _T(n, e) {
  if (e < 0) {
    const t = n.nodeBefore;
    if (t) return n.pos - t.nodeSize;
    for (let r = n.index(-1) - 1, s = n.before(); r >= 0; r--) {
      const i = n.node(-1).child(r), o = i.lastChild;
      if (o) return s - 1 - o.nodeSize;
      s -= i.nodeSize;
    }
  } else {
    if (n.index() < n.parent.childCount - 1) return n.pos + n.nodeAfter.nodeSize;
    const t = n.node(-1);
    for (let r = n.indexAfter(-1), s = n.after(); r < t.childCount; r++) {
      const i = t.child(r);
      if (i.childCount) return s + 1;
      s += i.nodeSize;
    }
  }
  return null;
}
function Kd(n) {
  return function(e, t) {
    if (!Et(e)) return !1;
    const r = _T(No(e), n);
    if (r == null) return !1;
    if (t) {
      const s = e.doc.resolve(r);
      t(e.tr.setSelection(V.between(s, dT(s))).scrollIntoView());
    }
    return !0;
  };
}
function PT(n, e) {
  const t = n.selection.$anchor;
  for (let r = t.depth; r > 0; r--) if (t.node(r).type.spec.tableRole == "table")
    return e && e(n.tr.delete(t.before(r), t.after(r)).scrollIntoView()), !0;
  return !1;
}
function ci(n, e) {
  const t = n.selection;
  if (!(t instanceof fe)) return !1;
  if (e) {
    const r = n.tr, s = Xe(n.schema).cell.createAndFill().content;
    t.forEachCell((i, o) => {
      i.content.eq(s) || r.replace(r.mapping.map(o + 1), r.mapping.map(o + i.nodeSize - 1), new z(s, 0, 0));
    }), r.docChanged && e(r);
  }
  return !0;
}
function LT(n) {
  if (n.size === 0) return null;
  let { content: e, openStart: t, openEnd: r } = n;
  for (; e.childCount == 1 && (t > 0 && r > 0 || e.child(0).type.spec.tableRole == "table"); )
    t--, r--, e = e.child(0).content;
  const s = e.child(0), i = s.type.spec.tableRole, o = s.type.schema, l = [];
  if (i == "row") for (let a = 0; a < e.childCount; a++) {
    let u = e.child(a).content;
    const d = a ? 0 : Math.max(0, t - 1), h = a < e.childCount - 1 ? 0 : Math.max(0, r - 1);
    (d || h) && (u = Ra(Xe(o).row, new z(u, d, h)).content), l.push(u);
  }
  else if (i == "cell" || i == "header_cell") l.push(t || r ? Ra(Xe(o).row, new z(e, t, r)).content : e);
  else return null;
  return zT(o, l);
}
function zT(n, e) {
  const t = [];
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    for (let o = i.childCount - 1; o >= 0; o--) {
      const { rowspan: l, colspan: a } = i.child(o).attrs;
      for (let u = s; u < s + l; u++) t[u] = (t[u] || 0) + a;
    }
  }
  let r = 0;
  for (let s = 0; s < t.length; s++) r = Math.max(r, t[s]);
  for (let s = 0; s < t.length; s++)
    if (s >= e.length && e.push(N.empty), t[s] < r) {
      const i = Xe(n).cell.createAndFill(), o = [];
      for (let l = t[s]; l < r; l++) o.push(i);
      e[s] = e[s].append(N.from(o));
    }
  return {
    height: e.length,
    width: r,
    rows: e
  };
}
function Ra(n, e) {
  const t = n.createAndFill();
  return new qa(t).replace(0, t.content.size, e).doc;
}
function FT({ width: n, height: e, rows: t }, r, s) {
  if (n != r) {
    const i = [], o = [];
    for (let l = 0; l < t.length; l++) {
      const a = t[l], u = [];
      for (let d = i[l] || 0, h = 0; d < r; h++) {
        let p = a.child(h % a.childCount);
        d + p.attrs.colspan > r && (p = p.type.createChecked(ir(p.attrs, p.attrs.colspan, d + p.attrs.colspan - r), p.content)), u.push(p), d += p.attrs.colspan;
        for (let g = 1; g < p.attrs.rowspan; g++) i[l + g] = (i[l + g] || 0) + p.attrs.colspan;
      }
      o.push(N.from(u));
    }
    t = o, n = r;
  }
  if (e != s) {
    const i = [];
    for (let o = 0, l = 0; o < s; o++, l++) {
      const a = [], u = t[l % e];
      for (let d = 0; d < u.childCount; d++) {
        let h = u.child(d);
        o + h.attrs.rowspan > s && (h = h.type.create({
          ...h.attrs,
          rowspan: Math.max(1, s - h.attrs.rowspan)
        }, h.content)), a.push(h);
      }
      i.push(N.from(a));
    }
    t = i, e = s;
  }
  return {
    width: n,
    height: e,
    rows: t
  };
}
function BT(n, e, t, r, s, i, o) {
  const l = n.doc.type.schema, a = Xe(l);
  let u, d;
  if (s > e.width) for (let h = 0, p = 0; h < e.height; h++) {
    const g = t.child(h);
    p += g.nodeSize;
    const b = [];
    let S;
    g.lastChild == null || g.lastChild.type == a.cell ? S = u || (u = a.cell.createAndFill()) : S = d || (d = a.header_cell.createAndFill());
    for (let w = e.width; w < s; w++) b.push(S);
    n.insert(n.mapping.slice(o).map(p - 1 + r), b);
  }
  if (i > e.height) {
    const h = [];
    for (let b = 0, S = (e.height - 1) * e.width; b < Math.max(e.width, s); b++) {
      const w = b >= e.width ? !1 : t.nodeAt(e.map[S + b]).type == a.header_cell;
      h.push(w ? d || (d = a.header_cell.createAndFill()) : u || (u = a.cell.createAndFill()));
    }
    const p = a.row.create(null, N.from(h)), g = [];
    for (let b = e.height; b < i; b++) g.push(p);
    n.insert(n.mapping.slice(o).map(r + t.nodeSize - 2), g);
  }
  return !!(u || d);
}
function Gd(n, e, t, r, s, i, o, l) {
  if (o == 0 || o == e.height) return !1;
  let a = !1;
  for (let u = s; u < i; u++) {
    const d = o * e.width + u, h = e.map[d];
    if (e.map[d - e.width] == h) {
      a = !0;
      const p = t.nodeAt(h), { top: g, left: b } = e.findCell(h);
      n.setNodeMarkup(n.mapping.slice(l).map(h + r), null, {
        ...p.attrs,
        rowspan: o - g
      }), n.insert(n.mapping.slice(l).map(e.positionAt(o, b, t)), p.type.createAndFill({
        ...p.attrs,
        rowspan: g + p.attrs.rowspan - o
      })), u += p.attrs.colspan - 1;
    }
  }
  return a;
}
function Jd(n, e, t, r, s, i, o, l) {
  if (o == 0 || o == e.width) return !1;
  let a = !1;
  for (let u = s; u < i; u++) {
    const d = u * e.width + o, h = e.map[d];
    if (e.map[d - 1] == h) {
      a = !0;
      const p = t.nodeAt(h), g = e.colCount(h), b = n.mapping.slice(l).map(h + r);
      n.setNodeMarkup(b, null, ir(p.attrs, o - g, p.attrs.colspan - (o - g))), n.insert(b + p.nodeSize, p.type.createAndFill(ir(p.attrs, 0, o - g))), u += p.attrs.rowspan - 1;
    }
  }
  return a;
}
function Qd(n, e, t, r, s) {
  let i = t ? n.doc.nodeAt(t - 1) : n.doc;
  if (!i) throw new Error("No table found");
  let o = Ce.get(i);
  const { top: l, left: a } = r, u = a + s.width, d = l + s.height, h = n.tr;
  let p = 0;
  function g() {
    if (i = t ? h.doc.nodeAt(t - 1) : h.doc, !i) throw new Error("No table found");
    o = Ce.get(i), p = h.mapping.maps.length;
  }
  BT(h, o, i, t, u, d, p) && g(), Gd(h, o, i, t, a, u, l, p) && g(), Gd(h, o, i, t, a, u, d, p) && g(), Jd(h, o, i, t, l, d, a, p) && g(), Jd(h, o, i, t, l, d, u, p) && g();
  for (let b = l; b < d; b++) {
    const S = o.positionAt(b, a, i), w = o.positionAt(b, u, i);
    h.replace(h.mapping.slice(p).map(S + t), h.mapping.slice(p).map(w + t), new z(s.rows[b - l], 0, 0));
  }
  g(), h.setSelection(new fe(h.doc.resolve(t + o.positionAt(l, a, i)), h.doc.resolve(t + o.positionAt(d - 1, u - 1, i)))), e(h);
}
const HT = sc({
  ArrowLeft: ui("horiz", -1),
  ArrowRight: ui("horiz", 1),
  ArrowUp: ui("vert", -1),
  ArrowDown: ui("vert", 1),
  "Shift-ArrowLeft": di("horiz", -1),
  "Shift-ArrowRight": di("horiz", 1),
  "Shift-ArrowUp": di("vert", -1),
  "Shift-ArrowDown": di("vert", 1),
  Backspace: ci,
  "Mod-Backspace": ci,
  Delete: ci,
  "Mod-Delete": ci
});
function xi(n, e, t) {
  return t.eq(n.selection) ? !1 : (e && e(n.tr.setSelection(t).scrollIntoView()), !0);
}
function ui(n, e) {
  return (t, r, s) => {
    if (!s) return !1;
    const i = t.selection;
    if (i instanceof fe) return xi(t, r, U.near(i.$headCell, e));
    if (n != "horiz" && !i.empty) return !1;
    const o = $p(s, n, e);
    if (o == null) return !1;
    if (n == "horiz") return xi(t, r, U.near(t.doc.resolve(i.head + e), e));
    {
      const l = t.doc.resolve(o), a = Pp(l, n, e);
      let u;
      return a ? u = U.near(a, 1) : e < 0 ? u = U.near(t.doc.resolve(l.before(-1)), -1) : u = U.near(t.doc.resolve(l.after(-1)), 1), xi(t, r, u);
    }
  };
}
function di(n, e) {
  return (t, r, s) => {
    if (!s) return !1;
    const i = t.selection;
    let o;
    if (i instanceof fe) o = i;
    else {
      const a = $p(s, n, e);
      if (a == null) return !1;
      o = new fe(t.doc.resolve(a));
    }
    const l = Pp(o.$headCell, n, e);
    return l ? xi(t, r, new fe(o.$anchorCell, l)) : !1;
  };
}
function WT(n, e) {
  const t = n.state.doc, r = sr(t.resolve(e));
  return r ? (n.dispatch(n.state.tr.setSelection(new fe(r))), !0) : !1;
}
function $T(n, e, t) {
  if (!Et(n.state)) return !1;
  let r = LT(t);
  const s = n.state.selection;
  if (s instanceof fe) {
    r || (r = {
      width: 1,
      height: 1,
      rows: [N.from(Ra(Xe(n.state.schema).cell, t))]
    });
    const i = s.$anchorCell.node(-1), o = s.$anchorCell.start(-1), l = Ce.get(i).rectBetween(s.$anchorCell.pos - o, s.$headCell.pos - o);
    return r = FT(r, l.right - l.left, l.bottom - l.top), Qd(n.state, n.dispatch, o, l, r), !0;
  } else if (r) {
    const i = No(n.state), o = i.start(-1);
    return Qd(n.state, n.dispatch, o, Ce.get(i.node(-1)).findCell(i.pos - o), r), !0;
  } else return !1;
}
function VT(n, e) {
  var t;
  if (e.button != 0 || e.ctrlKey || e.metaKey) return;
  const r = Zd(n, e.target);
  let s;
  if (e.shiftKey && n.state.selection instanceof fe)
    i(n.state.selection.$anchorCell, e), e.preventDefault();
  else if (e.shiftKey && r && (s = sr(n.state.selection.$anchor)) != null && ((t = Yl(n, e)) === null || t === void 0 ? void 0 : t.pos) != s.pos)
    i(s, e), e.preventDefault();
  else if (!r) return;
  function i(a, u) {
    let d = Yl(n, u);
    const h = kn.getState(n.state) == null;
    if (!d || !Tc(a, d)) if (h) d = a;
    else return;
    const p = new fe(a, d);
    if (h || !n.state.selection.eq(p)) {
      const g = n.state.tr.setSelection(p);
      h && g.setMeta(kn, a.pos), n.dispatch(g);
    }
  }
  function o() {
    n.root.removeEventListener("mouseup", o), n.root.removeEventListener("dragstart", o), n.root.removeEventListener("mousemove", l), kn.getState(n.state) != null && n.dispatch(n.state.tr.setMeta(kn, -1));
  }
  function l(a) {
    const u = a, d = kn.getState(n.state);
    let h;
    if (d != null) h = n.state.doc.resolve(d);
    else if (Zd(n, u.target) != r && (h = Yl(n, e), !h))
      return o();
    h && i(h, u);
  }
  n.root.addEventListener("mouseup", o), n.root.addEventListener("dragstart", o), n.root.addEventListener("mousemove", l);
}
function $p(n, e, t) {
  if (!(n.state.selection instanceof V)) return null;
  const { $head: r } = n.state.selection;
  for (let s = r.depth - 1; s >= 0; s--) {
    const i = r.node(s);
    if ((t < 0 ? r.index(s) : r.indexAfter(s)) != (t < 0 ? 0 : i.childCount)) return null;
    if (i.type.spec.tableRole == "cell" || i.type.spec.tableRole == "header_cell") {
      const o = r.before(s), l = e == "vert" ? t > 0 ? "down" : "up" : t > 0 ? "right" : "left";
      return n.endOfTextblock(l) ? o : null;
    }
  }
  return null;
}
function Zd(n, e) {
  for (; e && e != n.dom; e = e.parentNode) if (e.nodeName == "TD" || e.nodeName == "TH") return e;
  return null;
}
function Yl(n, e) {
  const t = n.posAtCoords({
    left: e.clientX,
    top: e.clientY
  });
  if (!t) return null;
  let { inside: r, pos: s } = t;
  return r >= 0 && sr(n.state.doc.resolve(r)) || sr(n.state.doc.resolve(s));
}
var YT = class {
  constructor(e, t) {
    this.node = e, this.defaultCellMinWidth = t, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), this.table.style.setProperty("--default-cell-min-width", `${t}px`), this.colgroup = this.table.appendChild(document.createElement("colgroup")), Ia(e, this.colgroup, this.table, t), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(e) {
    return e.type != this.node.type ? !1 : (this.node = e, Ia(e, this.colgroup, this.table, this.defaultCellMinWidth), !0);
  }
  ignoreMutation(e) {
    return e.type == "attributes" && (e.target == this.table || this.colgroup.contains(e.target));
  }
};
function Ia(n, e, t, r, s, i) {
  let o = 0, l = !0, a = e.firstChild;
  const u = n.firstChild;
  if (u) {
    for (let h = 0, p = 0; h < u.childCount; h++) {
      const { colspan: g, colwidth: b } = u.child(h).attrs;
      for (let S = 0; S < g; S++, p++) {
        const w = s == p ? i : b && b[S], x = w ? w + "px" : "";
        if (o += w || r, w || (l = !1), a)
          a.style.width != x && (a.style.width = x), a = a.nextSibling;
        else {
          const v = document.createElement("col");
          v.style.width = x, e.appendChild(v);
        }
      }
    }
    for (; a; ) {
      var d;
      const h = a.nextSibling;
      (d = a.parentNode) === null || d === void 0 || d.removeChild(a), a = h;
    }
    l ? (t.style.width = o + "px", t.style.minWidth = "") : (t.style.width = "", t.style.minWidth = o + "px");
  }
}
const ht = new Ue("tableColumnResizing");
function jT({ handleWidth: n = 5, cellMinWidth: e = 25, defaultCellMinWidth: t = 100, View: r = YT, lastColumnResizable: s = !0 } = {}) {
  const i = new Ne({
    key: ht,
    state: {
      init(o, l) {
        var a;
        const u = (a = i.spec) === null || a === void 0 || (a = a.props) === null || a === void 0 ? void 0 : a.nodeViews, d = Xe(l.schema).table.name;
        return r && u && (u[d] = (h, p) => new r(h, t, p)), new UT(-1, !1);
      },
      apply(o, l) {
        return l.apply(o);
      }
    },
    props: {
      attributes: (o) => {
        const l = ht.getState(o);
        return l && l.activeHandle > -1 ? { class: "resize-cursor" } : {};
      },
      handleDOMEvents: {
        mousemove: (o, l) => {
          qT(o, l, n, s);
        },
        mouseleave: (o) => {
          KT(o);
        },
        mousedown: (o, l) => {
          GT(o, l, e, t);
        }
      },
      decorations: (o) => {
        const l = ht.getState(o);
        if (l && l.activeHandle > -1) return eO(o, l.activeHandle);
      },
      nodeViews: {}
    }
  });
  return i;
}
var UT = class Ci {
  constructor(e, t) {
    this.activeHandle = e, this.dragging = t;
  }
  apply(e) {
    const t = this, r = e.getMeta(ht);
    if (r && r.setHandle != null) return new Ci(r.setHandle, !1);
    if (r && r.setDragging !== void 0) return new Ci(t.activeHandle, r.setDragging);
    if (t.activeHandle > -1 && e.docChanged) {
      let s = e.mapping.map(t.activeHandle, -1);
      return Na(e.doc.resolve(s)) || (s = -1), new Ci(s, t.dragging);
    }
    return t;
  }
};
function qT(n, e, t, r) {
  if (!n.editable) return;
  const s = ht.getState(n.state);
  if (s && !s.dragging) {
    const i = QT(e.target);
    let o = -1;
    if (i) {
      const { left: l, right: a } = i.getBoundingClientRect();
      e.clientX - l <= t ? o = Xd(n, e, "left", t) : a - e.clientX <= t && (o = Xd(n, e, "right", t));
    }
    if (o != s.activeHandle) {
      if (!r && o !== -1) {
        const l = n.state.doc.resolve(o), a = l.node(-1), u = Ce.get(a), d = l.start(-1);
        if (u.colCount(l.pos - d) + l.nodeAfter.attrs.colspan - 1 == u.width - 1) return;
      }
      Vp(n, o);
    }
  }
}
function KT(n) {
  if (!n.editable) return;
  const e = ht.getState(n.state);
  e && e.activeHandle > -1 && !e.dragging && Vp(n, -1);
}
function GT(n, e, t, r) {
  var s;
  if (!n.editable) return !1;
  const i = (s = n.dom.ownerDocument.defaultView) !== null && s !== void 0 ? s : window, o = ht.getState(n.state);
  if (!o || o.activeHandle == -1 || o.dragging) return !1;
  const l = n.state.doc.nodeAt(o.activeHandle), a = JT(n, o.activeHandle, l.attrs);
  n.dispatch(n.state.tr.setMeta(ht, { setDragging: {
    startX: e.clientX,
    startWidth: a
  } }));
  function u(h) {
    i.removeEventListener("mouseup", u), i.removeEventListener("mousemove", d);
    const p = ht.getState(n.state);
    p != null && p.dragging && (ZT(n, p.activeHandle, ef(p.dragging, h, t)), n.dispatch(n.state.tr.setMeta(ht, { setDragging: null })));
  }
  function d(h) {
    if (!h.which) return u(h);
    const p = ht.getState(n.state);
    if (p && p.dragging) {
      const g = ef(p.dragging, h, t);
      tf(n, p.activeHandle, g, r);
    }
  }
  return tf(n, o.activeHandle, a, r), i.addEventListener("mouseup", u), i.addEventListener("mousemove", d), e.preventDefault(), !0;
}
function JT(n, e, { colspan: t, colwidth: r }) {
  const s = r && r[r.length - 1];
  if (s) return s;
  const i = n.domAtPos(e);
  let o = i.node.childNodes[i.offset].offsetWidth, l = t;
  if (r)
    for (let a = 0; a < t; a++) r[a] && (o -= r[a], l--);
  return o / l;
}
function QT(n) {
  for (; n && n.nodeName != "TD" && n.nodeName != "TH"; ) n = n.classList && n.classList.contains("ProseMirror") ? null : n.parentNode;
  return n;
}
function Xd(n, e, t, r) {
  const s = t == "right" ? -r : r, i = n.posAtCoords({
    left: e.clientX + s,
    top: e.clientY
  });
  if (!i) return -1;
  const { pos: o } = i, l = sr(n.state.doc.resolve(o));
  if (!l) return -1;
  if (t == "right") return l.pos;
  const a = Ce.get(l.node(-1)), u = l.start(-1), d = a.map.indexOf(l.pos - u);
  return d % a.width == 0 ? -1 : u + a.map[d - 1];
}
function ef(n, e, t) {
  const r = e.clientX - n.startX;
  return Math.max(t, n.startWidth + r);
}
function Vp(n, e) {
  n.dispatch(n.state.tr.setMeta(ht, { setHandle: e }));
}
function ZT(n, e, t) {
  const r = n.state.doc.resolve(e), s = r.node(-1), i = Ce.get(s), o = r.start(-1), l = i.colCount(r.pos - o) + r.nodeAfter.attrs.colspan - 1, a = n.state.tr;
  for (let u = 0; u < i.height; u++) {
    const d = u * i.width + l;
    if (u && i.map[d] == i.map[d - i.width]) continue;
    const h = i.map[d], p = s.nodeAt(h).attrs, g = p.colspan == 1 ? 0 : l - i.colCount(h);
    if (p.colwidth && p.colwidth[g] == t) continue;
    const b = p.colwidth ? p.colwidth.slice() : XT(p.colspan);
    b[g] = t, a.setNodeMarkup(o + h, null, {
      ...p,
      colwidth: b
    });
  }
  a.docChanged && n.dispatch(a);
}
function tf(n, e, t, r) {
  const s = n.state.doc.resolve(e), i = s.node(-1), o = s.start(-1), l = Ce.get(i).colCount(s.pos - o) + s.nodeAfter.attrs.colspan - 1;
  let a = n.domAtPos(s.start(-1)).node;
  for (; a && a.nodeName != "TABLE"; ) a = a.parentNode;
  a && Ia(i, a.firstChild, a, r, l, t);
}
function XT(n) {
  return Array(n).fill(0);
}
function eO(n, e) {
  const t = [], r = n.doc.resolve(e), s = r.node(-1);
  if (!s) return Se.empty;
  const i = Ce.get(s), o = r.start(-1), l = i.colCount(r.pos - o) + r.nodeAfter.attrs.colspan - 1;
  for (let u = 0; u < i.height; u++) {
    const d = l + u * i.width;
    if ((l == i.width - 1 || i.map[d] != i.map[d + 1]) && (u == 0 || i.map[d] != i.map[d - i.width])) {
      var a;
      const h = i.map[d], p = o + h + s.nodeAt(h).nodeSize - 1, g = document.createElement("div");
      g.className = "column-resize-handle", !((a = ht.getState(n)) === null || a === void 0) && a.dragging && t.push(Qe.node(o + h, o + h + s.nodeAt(h).nodeSize, { class: "column-resize-dragging" })), t.push(Qe.widget(p, g));
    }
  }
  return Se.create(n.doc, t);
}
function tO({ allowTableNodeSelection: n = !1 } = {}) {
  return new Ne({
    key: kn,
    state: {
      init() {
        return null;
      },
      apply(e, t) {
        const r = e.getMeta(kn);
        if (r != null) return r == -1 ? null : r;
        if (t == null || !e.docChanged) return t;
        const { deleted: s, pos: i } = e.mapping.mapResult(t);
        return s ? null : i;
      }
    },
    props: {
      decorations: pT,
      handleDOMEvents: { mousedown: VT },
      createSelectionBetween(e) {
        return kn.getState(e.state) != null ? e.state.selection : null;
      },
      handleTripleClick: WT,
      handleKeyDown: HT,
      handlePaste: $T
    },
    appendTransaction(e, t, r) {
      return yT(r, Bp(r, t), n);
    }
  });
}
var Yp = _e.create({
  name: "tableCell",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (n) => {
          var e, t;
          const r = n.getAttribute("colwidth"), s = r ? r.split(",").map((i) => parseInt(i, 10)) : null;
          if (!s) {
            const i = (e = n.closest("table")) == null ? void 0 : e.querySelectorAll("colgroup > col"), o = Array.from(((t = n.parentElement) == null ? void 0 : t.children) || []).indexOf(n);
            if (o && o > -1 && i && i[o]) {
              const l = i[o].getAttribute("width");
              return l ? [parseInt(l, 10)] : null;
            }
          }
          return s;
        }
      }
    };
  },
  tableRole: "cell",
  isolating: !0,
  parseHTML() {
    return [{ tag: "td" }];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["td", me(this.options.HTMLAttributes, n), 0];
  }
}), jp = _e.create({
  name: "tableHeader",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  addAttributes() {
    return {
      colspan: {
        default: 1
      },
      rowspan: {
        default: 1
      },
      colwidth: {
        default: null,
        parseHTML: (n) => {
          const e = n.getAttribute("colwidth");
          return e ? e.split(",").map((r) => parseInt(r, 10)) : null;
        }
      }
    };
  },
  tableRole: "header_cell",
  isolating: !0,
  parseHTML() {
    return [{ tag: "th" }];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["th", me(this.options.HTMLAttributes, n), 0];
  }
}), Up = _e.create({
  name: "tableRow",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "(tableCell | tableHeader)*",
  tableRole: "row",
  parseHTML() {
    return [{ tag: "tr" }];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["tr", me(this.options.HTMLAttributes, n), 0];
  }
});
function _a(n, e) {
  return e ? ["width", `${Math.max(e, n)}px`] : ["min-width", `${n}px`];
}
function nf(n, e, t, r, s, i) {
  var o;
  let l = 0, a = !0, u = e.firstChild;
  const d = n.firstChild;
  if (d !== null)
    for (let p = 0, g = 0; p < d.childCount; p += 1) {
      const { colspan: b, colwidth: S } = d.child(p).attrs;
      for (let w = 0; w < b; w += 1, g += 1) {
        const x = s === g ? i : S && S[w], v = x ? `${x}px` : "";
        if (l += x || r, x || (a = !1), u) {
          if (u.style.width !== v) {
            const [T, D] = _a(r, x);
            u.style.setProperty(T, D);
          }
          u = u.nextSibling;
        } else {
          const T = document.createElement("col"), [D, A] = _a(r, x);
          T.style.setProperty(D, A), e.appendChild(T);
        }
      }
    }
  for (; u; ) {
    const p = u.nextSibling;
    (o = u.parentNode) == null || o.removeChild(u), u = p;
  }
  const h = n.attrs.style && typeof n.attrs.style == "string" && /\bwidth\s*:/i.test(n.attrs.style);
  a && !h ? (t.style.width = `${l}px`, t.style.minWidth = "") : (t.style.width = "", t.style.minWidth = `${l}px`);
}
var nO = class {
  constructor(n, e) {
    this.node = n, this.cellMinWidth = e, this.dom = document.createElement("div"), this.dom.className = "tableWrapper", this.table = this.dom.appendChild(document.createElement("table")), n.attrs.style && (this.table.style.cssText = n.attrs.style), this.colgroup = this.table.appendChild(document.createElement("colgroup")), nf(n, this.colgroup, this.table, e), this.contentDOM = this.table.appendChild(document.createElement("tbody"));
  }
  update(n) {
    return n.type !== this.node.type ? !1 : (this.node = n, nf(n, this.colgroup, this.table, this.cellMinWidth), !0);
  }
  ignoreMutation(n) {
    const e = n.target, t = this.dom.contains(e), r = this.contentDOM.contains(e);
    return !!(t && !r && (n.type === "attributes" || n.type === "childList" || n.type === "characterData"));
  }
};
function rO(n, e, t, r) {
  let s = 0, i = !0;
  const o = [], l = n.firstChild;
  if (!l)
    return {};
  for (let h = 0, p = 0; h < l.childCount; h += 1) {
    const { colspan: g, colwidth: b } = l.child(h).attrs;
    for (let S = 0; S < g; S += 1, p += 1) {
      const w = t === p ? r : b && b[S];
      s += w || e, w || (i = !1);
      const [x, v] = _a(e, w);
      o.push(["col", { style: `${x}: ${v}` }]);
    }
  }
  const a = i ? `${s}px` : "", u = i ? "" : `${s}px`;
  return { colgroup: ["colgroup", {}, ...o], tableWidth: a, tableMinWidth: u };
}
function rf(n, e) {
  return n.createAndFill();
}
function sO(n) {
  if (n.cached.tableNodeTypes)
    return n.cached.tableNodeTypes;
  const e = {};
  return Object.keys(n.nodes).forEach((t) => {
    const r = n.nodes[t];
    r.spec.tableRole && (e[r.spec.tableRole] = r);
  }), n.cached.tableNodeTypes = e, e;
}
function iO(n, e, t, r, s) {
  const i = sO(n), o = [], l = [];
  for (let u = 0; u < t; u += 1) {
    const d = rf(i.cell);
    if (d && l.push(d), r) {
      const h = rf(i.header_cell);
      h && o.push(h);
    }
  }
  const a = [];
  for (let u = 0; u < e; u += 1)
    a.push(i.row.createChecked(null, r && u === 0 ? o : l));
  return i.table.createChecked(null, a);
}
function oO(n) {
  return n instanceof fe;
}
var fi = ({ editor: n }) => {
  const { selection: e } = n.state;
  if (!oO(e))
    return !1;
  let t = 0;
  const r = yp(e.ranges[0].$from, (i) => i.type.name === "table");
  return r == null || r.node.descendants((i) => {
    if (i.type.name === "table")
      return !1;
    ["tableCell", "tableHeader"].includes(i.type.name) && (t += 1);
  }), t === e.ranges.length ? (n.commands.deleteTable(), !0) : !1;
}, lO = "";
function aO(n) {
  return (n || "").replace(/\s+/g, " ").trim();
}
function cO(n, e, t = {}) {
  var r;
  const s = (r = t.cellLineSeparator) != null ? r : lO;
  if (!n || !n.content || n.content.length === 0)
    return "";
  const i = [];
  n.content.forEach((b) => {
    const S = [];
    b.content && b.content.forEach((w) => {
      let x = "";
      w.content && Array.isArray(w.content) && w.content.length > 1 ? x = w.content.map((A) => e.renderChildren(A)).join(s) : x = w.content ? e.renderChildren(w.content) : "";
      const v = aO(x), T = w.type === "tableHeader";
      S.push({ text: v, isHeader: T });
    }), i.push(S);
  });
  const o = i.reduce((b, S) => Math.max(b, S.length), 0);
  if (o === 0)
    return "";
  const l = new Array(o).fill(0);
  i.forEach((b) => {
    var S;
    for (let w = 0; w < o; w += 1) {
      const v = (((S = b[w]) == null ? void 0 : S.text) || "").length;
      v > l[w] && (l[w] = v), l[w] < 3 && (l[w] = 3);
    }
  });
  const a = (b, S) => b + " ".repeat(Math.max(0, S - b.length)), u = i[0], d = u.some((b) => b.isHeader);
  let h = `
`;
  const p = new Array(o).fill(0).map((b, S) => d && u[S] && u[S].text || "");
  return h += `| ${p.map((b, S) => a(b, l[S])).join(" | ")} |
`, h += `| ${l.map((b) => "-".repeat(Math.max(3, b))).join(" | ")} |
`, (d ? i.slice(1) : i).forEach((b) => {
    h += `| ${new Array(o).fill(0).map((S, w) => a(b[w] && b[w].text || "", l[w])).join(" | ")} |
`;
  }), h;
}
var uO = cO, qp = _e.create({
  name: "table",
  // @ts-ignore
  addOptions() {
    return {
      HTMLAttributes: {},
      resizable: !1,
      renderWrapper: !1,
      handleWidth: 5,
      cellMinWidth: 25,
      // TODO: fix
      View: nO,
      lastColumnResizable: !0,
      allowTableNodeSelection: !1
    };
  },
  content: "tableRow+",
  tableRole: "table",
  isolating: !0,
  group: "block",
  parseHTML() {
    return [{ tag: "table" }];
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    const { colgroup: t, tableWidth: r, tableMinWidth: s } = rO(n, this.options.cellMinWidth), i = e.style;
    function o() {
      return i || (r ? `width: ${r}` : `min-width: ${s}`);
    }
    const l = [
      "table",
      me(this.options.HTMLAttributes, e, {
        style: o()
      }),
      t,
      ["tbody", 0]
    ];
    return this.options.renderWrapper ? ["div", { class: "tableWrapper" }, l] : l;
  },
  parseMarkdown: (n, e) => {
    const t = [];
    if (n.header) {
      const r = [];
      n.header.forEach((s) => {
        r.push(e.createNode("tableHeader", {}, [{ type: "paragraph", content: e.parseInline(s.tokens) }]));
      }), t.push(e.createNode("tableRow", {}, r));
    }
    return n.rows && n.rows.forEach((r) => {
      const s = [];
      r.forEach((i) => {
        s.push(e.createNode("tableCell", {}, [{ type: "paragraph", content: e.parseInline(i.tokens) }]));
      }), t.push(e.createNode("tableRow", {}, s));
    }), e.createNode("table", void 0, t);
  },
  renderMarkdown: (n, e) => uO(n, e),
  addCommands() {
    return {
      insertTable: ({ rows: n = 3, cols: e = 3, withHeaderRow: t = !0 } = {}) => ({ tr: r, dispatch: s, editor: i }) => {
        const o = iO(i.schema, n, e, t);
        if (s) {
          const l = r.selection.from + 1;
          r.replaceSelectionWith(o).scrollIntoView().setSelection(V.near(r.doc.resolve(l)));
        }
        return !0;
      },
      addColumnBefore: () => ({ state: n, dispatch: e }) => wT(n, e),
      addColumnAfter: () => ({ state: n, dispatch: e }) => kT(n, e),
      deleteColumn: () => ({ state: n, dispatch: e }) => CT(n, e),
      addRowBefore: () => ({ state: n, dispatch: e }) => vT(n, e),
      addRowAfter: () => ({ state: n, dispatch: e }) => TT(n, e),
      deleteRow: () => ({ state: n, dispatch: e }) => ET(n, e),
      deleteTable: () => ({ state: n, dispatch: e }) => PT(n, e),
      mergeCells: () => ({ state: n, dispatch: e }) => jd(n, e),
      splitCell: () => ({ state: n, dispatch: e }) => Ud(n, e),
      toggleHeaderColumn: () => ({ state: n, dispatch: e }) => vs("column")(n, e),
      toggleHeaderRow: () => ({ state: n, dispatch: e }) => vs("row")(n, e),
      toggleHeaderCell: () => ({ state: n, dispatch: e }) => IT(n, e),
      mergeOrSplit: () => ({ state: n, dispatch: e }) => jd(n, e) ? !0 : Ud(n, e),
      setCellAttribute: (n, e) => ({ state: t, dispatch: r }) => NT(n, e)(t, r),
      goToNextCell: () => ({ state: n, dispatch: e }) => Kd(1)(n, e),
      goToPreviousCell: () => ({ state: n, dispatch: e }) => Kd(-1)(n, e),
      fixTables: () => ({ state: n, dispatch: e }) => (e && Bp(n), !0),
      setCellSelection: (n) => ({ tr: e, dispatch: t }) => {
        if (t) {
          const r = fe.create(e.doc, n.anchorCell, n.headCell);
          e.setSelection(r);
        }
        return !0;
      }
    };
  },
  addKeyboardShortcuts() {
    return {
      Tab: () => this.editor.commands.goToNextCell() ? !0 : this.editor.can().addRowAfter() ? this.editor.chain().addRowAfter().goToNextCell().run() : !1,
      "Shift-Tab": () => this.editor.commands.goToPreviousCell(),
      Backspace: fi,
      "Mod-Backspace": fi,
      Delete: fi,
      "Mod-Delete": fi
    };
  },
  addProseMirrorPlugins() {
    return [
      ...this.options.resizable && this.editor.isEditable ? [
        jT({
          handleWidth: this.options.handleWidth,
          cellMinWidth: this.options.cellMinWidth,
          defaultCellMinWidth: this.options.cellMinWidth,
          View: this.options.View,
          lastColumnResizable: this.options.lastColumnResizable
        })
      ] : [],
      tO({
        allowTableNodeSelection: this.options.allowTableNodeSelection
      })
    ];
  },
  extendNodeSchema(n) {
    const e = {
      name: n.name,
      options: n.options,
      storage: n.storage
    };
    return {
      tableRole: ee(H(n, "tableRole", e))
    };
  }
});
De.create({
  name: "tableKit",
  addExtensions() {
    const n = [];
    return this.options.table !== !1 && n.push(qp.configure(this.options.table)), this.options.tableCell !== !1 && n.push(Yp.configure(this.options.tableCell)), this.options.tableHeader !== !1 && n.push(jp.configure(this.options.tableHeader)), this.options.tableRow !== !1 && n.push(Up.configure(this.options.tableRow)), n;
  }
});
function jl({ level: n }) {
  return /* @__PURE__ */ Q(
    Ie,
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
function dO({ editor: n, config: e }) {
  const t = or(), r = Ye(null), s = Ye(null), i = Ye(null), o = Ye(null), l = hi(t.palette.primary.main, 0.15), a = hi(t.palette.primary.main, 0.25), [u, d] = ce(null), [h, p] = ce({ rows: 0, cols: 0 }), g = 8, b = 8, S = () => n.chain().focus(), w = n.can(), x = ["link", "image", "file", "insertTable", "textColor", "bgColor", "rtl", "ltr"], v = e.groups.map((j) => ({ items: j.items.filter((q) => !x.includes(q)) })).filter((j) => j.items.length > 0), T = e.groups.map((j) => ({ items: j.items.filter((q) => x.includes(q)) })).filter((j) => j.items.length > 0), D = Ye(null), [A, R] = ce([]), [O, L] = ce(null), Y = v.flatMap((j) => j.items), te = Lt(() => {
    const j = D.current;
    if (!j) return;
    const q = 30, W = 4, we = j.offsetWidth - 34, qe = Math.max(1, Math.floor(we / (q + W)));
    R(Y.slice(qe));
  }, [Y.join(",")]);
  af(() => {
    te();
    const j = new ResizeObserver(te);
    return D.current && j.observe(D.current), () => j.disconnect();
  }, [te]);
  const re = A.length > 0 ? Y.slice(0, Y.length - A.length) : Y;
  function ye(j) {
    const { icon: q, label: W, action: G, isActive: we, disabled: qe } = be(j);
    return /* @__PURE__ */ M(Er, { title: W, placement: "top", children: /* @__PURE__ */ M("span", { children: /* @__PURE__ */ M(
      Un,
      {
        size: "small",
        onClick: (oe) => G(oe),
        disabled: qe ?? !1,
        "aria-pressed": we,
        "aria-label": W,
        sx: {
          borderRadius: 1,
          p: 0.5,
          bgcolor: we ? l : "transparent",
          "&:hover": { bgcolor: we ? a : void 0 }
        },
        children: q
      }
    ) }) }, j);
  }
  function be(j) {
    switch (j) {
      case "bold":
        return {
          icon: /* @__PURE__ */ M(ab, { fontSize: "small" }),
          label: "Bold (Ctrl+B)",
          action: () => S().toggleBold().run(),
          isActive: n.isActive("bold")
        };
      case "italic":
        return {
          icon: /* @__PURE__ */ M(cb, { fontSize: "small" }),
          label: "Italic (Ctrl+I)",
          action: () => S().toggleItalic().run(),
          isActive: n.isActive("italic")
        };
      case "underline":
        return {
          icon: /* @__PURE__ */ M(ub, { fontSize: "small" }),
          label: "Underline (Ctrl+U)",
          action: () => S().toggleUnderline().run(),
          isActive: n.isActive("underline")
        };
      case "strike":
        return {
          icon: /* @__PURE__ */ M(db, { fontSize: "small" }),
          label: "Strikethrough",
          action: () => S().toggleStrike().run(),
          isActive: n.isActive("strike")
        };
      case "h1":
        return {
          icon: /* @__PURE__ */ M(jl, { level: 1 }),
          label: "Heading 1",
          action: () => S().toggleHeading({ level: 1 }).run(),
          isActive: n.isActive("heading", { level: 1 })
        };
      case "h2":
        return {
          icon: /* @__PURE__ */ M(jl, { level: 2 }),
          label: "Heading 2",
          action: () => S().toggleHeading({ level: 2 }).run(),
          isActive: n.isActive("heading", { level: 2 })
        };
      case "h3":
        return {
          icon: /* @__PURE__ */ M(jl, { level: 3 }),
          label: "Heading 3",
          action: () => S().toggleHeading({ level: 3 }).run(),
          isActive: n.isActive("heading", { level: 3 })
        };
      case "bulletList":
        return {
          icon: /* @__PURE__ */ M(fb, { fontSize: "small" }),
          label: "Bullet list",
          action: () => S().toggleBulletList().run(),
          isActive: n.isActive("bulletList")
        };
      case "orderedList":
        return {
          icon: /* @__PURE__ */ M(hb, { fontSize: "small" }),
          label: "Ordered list",
          action: () => S().toggleOrderedList().run(),
          isActive: n.isActive("orderedList")
        };
      case "blockquote":
        return {
          icon: /* @__PURE__ */ M(pb, { fontSize: "small" }),
          label: "Blockquote",
          action: () => S().toggleBlockquote().run(),
          isActive: n.isActive("blockquote")
        };
      case "link":
        return {
          icon: /* @__PURE__ */ M(mb, { fontSize: "small" }),
          label: "Insert link",
          action: () => {
            const q = n.getAttributes("link").href, W = window.prompt("URL:", q ?? "https://");
            W !== null && (W === "" ? S().unsetLink().run() : S().setLink({ href: W }).run());
          },
          isActive: n.isActive("link")
        };
      case "image":
        return {
          icon: /* @__PURE__ */ M(yf, { fontSize: "small" }),
          label: "Insert image",
          action: () => {
            i.current && (i.current.value = "", i.current.click());
          },
          isActive: !1
        };
      case "file":
        return {
          icon: /* @__PURE__ */ M(Ob, { fontSize: "small" }),
          label: "Attach file",
          action: () => {
            o.current && (o.current.value = "", o.current.click());
          },
          isActive: !1
        };
      case "alignLeft":
        return {
          icon: /* @__PURE__ */ M(gb, { fontSize: "small" }),
          label: "Align left",
          action: () => S().setTextAlign("left").run(),
          isActive: n.isActive({ textAlign: "left" })
        };
      case "alignCenter":
        return {
          icon: /* @__PURE__ */ M(yb, { fontSize: "small" }),
          label: "Align center",
          action: () => S().setTextAlign("center").run(),
          isActive: n.isActive({ textAlign: "center" })
        };
      case "alignRight":
        return {
          icon: /* @__PURE__ */ M(bb, { fontSize: "small" }),
          label: "Align right",
          action: () => S().setTextAlign("right").run(),
          isActive: n.isActive({ textAlign: "right" })
        };
      case "alignJustify":
        return {
          icon: /* @__PURE__ */ M(Sb, { fontSize: "small" }),
          label: "Justify",
          action: () => S().setTextAlign("justify").run(),
          isActive: n.isActive({ textAlign: "justify" })
        };
      case "textColor":
        return {
          icon: /* @__PURE__ */ M(wb, { fontSize: "small" }),
          label: "Text color",
          action: () => {
            var q;
            return (q = r.current) == null ? void 0 : q.click();
          },
          isActive: !1
        };
      case "bgColor":
        return {
          icon: /* @__PURE__ */ M(kb, { fontSize: "small" }),
          label: "Background color",
          action: () => {
            var q;
            return (q = s.current) == null ? void 0 : q.click();
          },
          isActive: !1
        };
      case "rtl":
        return {
          icon: /* @__PURE__ */ M(xb, { fontSize: "small" }),
          label: "RTL direction",
          action: () => S().updateAttributes("paragraph", { dir: "rtl" }).run(),
          isActive: n.isActive("paragraph", { dir: "rtl" })
        };
      case "ltr":
        return {
          icon: /* @__PURE__ */ M(Cb, { fontSize: "small" }),
          label: "LTR direction",
          action: () => S().updateAttributes("paragraph", { dir: "ltr" }).run(),
          isActive: n.isActive("paragraph", { dir: "ltr" })
        };
      case "undo":
        return {
          icon: /* @__PURE__ */ M(Mb, { fontSize: "small" }),
          label: "Undo (Ctrl+Z)",
          action: () => S().undo().run(),
          isActive: !1,
          disabled: !w.undo()
        };
      case "redo":
        return {
          icon: /* @__PURE__ */ M(vb, { fontSize: "small" }),
          label: "Redo (Ctrl+Shift+Z)",
          action: () => S().redo().run(),
          isActive: !1,
          disabled: !w.redo()
        };
      case "clearFormat":
        return {
          icon: /* @__PURE__ */ M(Tb, { fontSize: "small" }),
          label: "Clear formatting",
          action: () => S().unsetAllMarks().clearNodes().run(),
          isActive: !1
        };
      case "insertTable":
        return {
          icon: /* @__PURE__ */ M(Eb, { fontSize: "small" }),
          label: "הוסף טבלה",
          action: (q) => {
            q && d(q.currentTarget);
          },
          isActive: n.isActive("table")
        };
      default:
        return { icon: null, label: String(j), action: () => {
        }, isActive: !1 };
    }
  }
  return /* @__PURE__ */ Q(
    wf,
    {
      elevation: 0,
      className: "ips-rte-toolbar",
      sx: {
        display: "flex",
        flexDirection: "column",
        position: "sticky",
        bottom: 0,
        zIndex: 1,
        borderRadius: "0 0 4px 4px",
        borderTop: `1px solid ${t.palette.divider}`,
        bgcolor: "transparent"
      },
      children: [
        /* @__PURE__ */ M(
          "input",
          {
            type: "color",
            ref: r,
            style: { position: "absolute", opacity: 0, pointerEvents: "none", width: 0, height: 0 },
            onChange: (j) => S().setColor(j.target.value).run()
          }
        ),
        /* @__PURE__ */ M(
          "input",
          {
            type: "color",
            ref: s,
            style: { position: "absolute", opacity: 0, pointerEvents: "none", width: 0, height: 0 },
            onChange: (j) => S().setHighlight({ color: j.target.value }).run()
          }
        ),
        /* @__PURE__ */ M(
          "input",
          {
            type: "file",
            ref: i,
            accept: "image/*",
            style: { position: "absolute", opacity: 0, pointerEvents: "none", width: 0, height: 0 },
            onChange: (j) => {
              var we;
              const q = (we = j.target.files) == null ? void 0 : we[0];
              if (!q) return;
              const W = 400, G = new FileReader();
              G.onload = (qe) => {
                var At;
                const oe = (At = qe.target) == null ? void 0 : At.result, Oe = new window.Image();
                Oe.onload = () => {
                  const Dt = Oe.width > W ? W / Oe.width : 1, dt = Math.round(Oe.width * Dt), B = Math.round(Oe.height * Dt), Nt = document.createElement("canvas");
                  Nt.width = dt, Nt.height = B, Nt.getContext("2d").drawImage(Oe, 0, 0, dt, B), n.chain().focus().setImage({ src: Nt.toDataURL(q.type || "image/png"), width: dt, height: B }).run();
                }, Oe.src = oe;
              }, G.readAsDataURL(q);
            }
          }
        ),
        /* @__PURE__ */ M(
          "input",
          {
            type: "file",
            ref: o,
            style: { position: "absolute", opacity: 0, pointerEvents: "none", width: 0, height: 0 },
            onChange: (j) => {
              var G;
              const q = (G = j.target.files) == null ? void 0 : G[0];
              if (!q) return;
              const W = URL.createObjectURL(q);
              n.chain().focus().insertContent(`<a href="${W}" download="${q.name}">📎 ${q.name}</a>`).run();
            }
          }
        ),
        /* @__PURE__ */ Q(
          ne,
          {
            ref: D,
            sx: {
              display: "flex",
              alignItems: "center",
              flexWrap: "nowrap",
              overflow: "hidden",
              px: 1,
              py: 0.5,
              gap: 0.5,
              bgcolor: t.palette.grey[100],
              borderRadius: "0 0 0 0"
            },
            children: [
              re.map(ye),
              /* @__PURE__ */ M(Er, { title: "עוד אפשרויות", placement: "top", children: /* @__PURE__ */ M("span", { children: /* @__PURE__ */ M(
                Un,
                {
                  size: "small",
                  onClick: (j) => L(j.currentTarget),
                  sx: { borderRadius: 1, p: 0.5, ml: "auto", opacity: A.length > 0 ? 1 : 0, pointerEvents: A.length > 0 ? "auto" : "none" },
                  children: /* @__PURE__ */ M(lb, { fontSize: "small" })
                }
              ) }) })
            ]
          }
        ),
        /* @__PURE__ */ M(
          pu,
          {
            open: !!O,
            anchorEl: O,
            onClose: () => L(null),
            anchorOrigin: { vertical: "bottom", horizontal: "left" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            children: /* @__PURE__ */ M(ne, { sx: { display: "flex", flexWrap: "wrap", p: 0.5, gap: 0.5, maxWidth: 240 }, children: A.map(ye) })
          }
        ),
        T.length > 0 && /* @__PURE__ */ M(ne, { sx: { display: "flex", alignItems: "center", flexWrap: "wrap", px: 1, py: 0.5, gap: 0.5, bgcolor: "transparent" }, children: T.map((j, q) => /* @__PURE__ */ Q(Te.Fragment, { children: [
          q > 0 && /* @__PURE__ */ M(ob, { orientation: "vertical", flexItem: !0, sx: { mx: 0.5, my: 0.25 } }),
          j.items.map(ye)
        ] }, q)) }),
        /* @__PURE__ */ M(
          pu,
          {
            open: !!u,
            anchorEl: u,
            onClose: () => {
              d(null), p({ rows: 0, cols: 0 });
            },
            anchorOrigin: { vertical: "bottom", horizontal: "left" },
            transformOrigin: { vertical: "top", horizontal: "left" },
            children: /* @__PURE__ */ Q(ne, { sx: { p: 1.5 }, children: [
              /* @__PURE__ */ M(Ie, { variant: "caption", sx: { display: "block", mb: 1, color: "text.secondary", textAlign: "center" }, children: h.rows > 0 && h.cols > 0 ? `${h.rows} × ${h.cols}` : "בחר גודל טבלה" }),
              /* @__PURE__ */ M(ne, { sx: { display: "grid", gridTemplateColumns: `repeat(${b}, 20px)`, gap: "3px" }, children: Array.from(
                { length: g },
                (j, q) => Array.from({ length: b }, (W, G) => {
                  const we = q + 1, qe = G + 1, oe = we <= h.rows && qe <= h.cols;
                  return /* @__PURE__ */ M(
                    ne,
                    {
                      onMouseEnter: () => p({ rows: we, cols: qe }),
                      onClick: () => {
                        S().insertTable({ rows: we, cols: qe, withHeaderRow: !0 }).run(), d(null), p({ rows: 0, cols: 0 });
                      },
                      sx: {
                        width: 20,
                        height: 20,
                        border: "1px solid",
                        borderRadius: "2px",
                        cursor: "pointer",
                        transition: "all 0.1s",
                        borderColor: oe ? "primary.main" : "divider",
                        bgcolor: oe ? hi(t.palette.primary.main, 0.15) : "background.paper"
                      }
                    },
                    `${we}-${qe}`
                  );
                })
              ) })
            ] })
          }
        )
      ]
    }
  );
}
const fO = {
  groups: [
    { items: ["bold", "italic", "underline", "strike"] },
    { items: ["h1", "h2", "h3"] },
    { items: ["bulletList", "orderedList", "blockquote"] },
    { items: ["link", "image", "file"] },
    { items: ["alignLeft", "alignCenter", "alignRight", "alignJustify"] },
    { items: ["textColor", "bgColor"] },
    { items: ["rtl", "ltr"] },
    { items: ["undo", "redo", "clearFormat"] },
    { items: ["insertTable"] }
  ]
}, hO = vp.extend({
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
}), pO = Pe(
  function({
    value: e,
    onChange: t,
    defaultValue: r,
    placeholder: s,
    readOnly: i = !1,
    disabled: o = !1,
    label: l,
    error: a = !1,
    helperText: u,
    dir: d = "auto",
    minHeight: h = 200,
    maxHeight: p,
    toolbar: g = fO,
    onBlur: b,
    onFocus: S,
    sx: w,
    className: x
  }, v) {
    const T = or(), D = Ye(t);
    D.current = t;
    const A = QC({
      extensions: [
        // Disable StarterKit's built-in Paragraph so our DirectionParagraph
        // (which adds the `dir` attribute) is used instead.
        XM.configure({ paragraph: !1 }),
        hO,
        ev,
        vv.configure({ openOnClick: !1, autolink: !0 }),
        Ov,
        Ev.configure({ types: ["heading", "paragraph"] }),
        Dv,
        Nv,
        _v.configure({ multicolor: !0 }),
        Pv.configure({ placeholder: s ?? "" }),
        sT,
        qp.configure({ resizable: !1 }),
        Up,
        jp,
        Yp
      ],
      // Controlled: seed with `value`; Uncontrolled: seed with `defaultValue`.
      content: e !== void 0 ? e ?? "" : r ?? "",
      editable: !i,
      onUpdate: ({ editor: re }) => {
        var ye;
        (ye = D.current) == null || ye.call(D, re.getHTML());
      },
      onBlur: ({ event: re }) => {
        b == null || b(re);
      },
      onFocus: ({ event: re }) => {
        S == null || S(re);
      }
    });
    Or(() => {
      !A || A.isDestroyed || e !== void 0 && A.getHTML() !== e && A.commands.setContent(e, !1);
    }, [A, e]), Or(() => {
      !A || A.isDestroyed || A.setEditable(!i);
    }, [A, i]);
    const R = a ? T.palette.error.main : T.palette.divider, O = a ? T.palette.error.main : T.palette.primary.main, L = typeof h == "number" ? `${h}px` : h, Y = p ? typeof p == "number" ? `${p}px` : p : void 0, te = d === "auto" ? T.direction : d;
    return /* @__PURE__ */ Q(
      ne,
      {
        ref: v,
        className: `ips-rich-text-editor${x ? ` ${x}` : ""}`,
        sx: {
          display: "flex",
          flexDirection: "column",
          opacity: o ? 0.5 : 1,
          pointerEvents: o ? "none" : void 0,
          cursor: o ? "not-allowed" : void 0,
          ...w
        },
        children: [
          l && /* @__PURE__ */ M(
            Ie,
            {
              variant: "body2",
              color: a ? "error" : "text.secondary",
              sx: { mb: 0.5, fontWeight: 500 },
              children: l
            }
          ),
          /* @__PURE__ */ Q(
            ne,
            {
              sx: {
                border: `2px solid ${R}`,
                borderRadius: 1,
                overflow: "hidden",
                transition: "border-color 0.15s",
                "&:focus-within": i ? {} : { borderColor: O }
              },
              children: [
                /* @__PURE__ */ M(
                  ne,
                  {
                    className: "ips-rte-content",
                    dir: te,
                    sx: {
                      minHeight: L,
                      maxHeight: Y,
                      overflow: Y ? "auto" : void 0,
                      // ProseMirror root element
                      "& .ProseMirror": {
                        padding: "12px 16px",
                        outline: "none",
                        cursor: i ? "default" : "text",
                        fontFamily: "inherit",
                        minHeight: L,
                        boxSizing: "border-box"
                        // NOTE: do NOT set `direction` here — stylis-plugin-rtl would flip
                        // `direction: rtl` → `direction: ltr`, breaking the cursor position.
                        // Instead, `dir={effectiveDir}` on the wrapper Box (HTML attribute)
                        // cascades `direction: rtl` to all children via the browser's
                        // default UA stylesheet, which stylis does NOT touch.
                      },
                      // Placeholder — write as LTR source (float:left).
                      // stylis-plugin-rtl flips it to float:right in an RTL theme context.
                      // If we wrote float:right here, stylis would flip it AGAIN to left — bug!
                      "& .ProseMirror p.is-editor-empty:first-of-type::before": {
                        content: "attr(data-placeholder)",
                        float: "left",
                        color: T.palette.text.disabled,
                        pointerEvents: "none",
                        height: 0
                      },
                      // Hyperlinks
                      "& .ProseMirror a": {
                        color: T.palette.primary.main,
                        textDecoration: "underline"
                      },
                      // Blockquote — write LTR source; stylis flips border/padding in RTL
                      "& .ProseMirror blockquote": {
                        borderLeft: `3px solid ${T.palette.grey[400]}`,
                        paddingLeft: "12px",
                        color: T.palette.grey[600],
                        margin: "0 0 8px",
                        fontStyle: "italic"
                      },
                      // Inline code
                      "& .ProseMirror code": {
                        background: T.palette.grey[100],
                        fontFamily: "monospace",
                        padding: "2px 4px",
                        borderRadius: "3px",
                        fontSize: "0.875em"
                      },
                      // Headings
                      "& .ProseMirror h1": { fontSize: "1.8em", margin: "8px 0" },
                      "& .ProseMirror h2": { fontSize: "1.5em", margin: "6px 0" },
                      "& .ProseMirror h3": { fontSize: "1.25em", margin: "4px 0" },
                      // Lists — write LTR source; stylis flips paddingLeft→paddingRight in RTL
                      "& .ProseMirror ul, & .ProseMirror ol": {
                        paddingLeft: "1.5em",
                        margin: "4px 0"
                      },
                      // Table
                      "& .ProseMirror table": {
                        borderCollapse: "collapse",
                        width: "100%",
                        margin: "8px 0",
                        tableLayout: "fixed",
                        overflow: "hidden"
                      },
                      "& .ProseMirror td, & .ProseMirror th": {
                        border: `1px solid ${T.palette.divider}`,
                        padding: "6px 10px",
                        verticalAlign: "top",
                        position: "relative",
                        minWidth: 60,
                        boxSizing: "border-box"
                      },
                      "& .ProseMirror th": {
                        background: T.palette.grey[100],
                        fontWeight: 600
                      },
                      "& .ProseMirror .selectedCell:after": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        background: T.palette.primary.main,
                        opacity: 0.15,
                        pointerEvents: "none"
                      }
                    },
                    children: /* @__PURE__ */ M(WC, { editor: A })
                  }
                ),
                !i && A && /* @__PURE__ */ M(dO, { editor: A, config: g })
              ]
            }
          ),
          u && /* @__PURE__ */ M(
            Ie,
            {
              variant: "caption",
              color: a ? "error" : "text.secondary",
              sx: { mt: 0.5, px: 0.5 },
              children: u
            }
          )
        ]
      }
    );
  }
);
pO.displayName = "IpsRichTextEditor";
export {
  fO as DEFAULT_TOOLBAR,
  jb as IpsAccordion,
  $b as IpsAutocomplete,
  Fb as IpsButton,
  Rb as IpsCheckBox,
  Vb as IpsChipSelect,
  Gb as IpsDatePicker,
  Jb as IpsDateTimePicker,
  o1 as IpsFileUpload,
  Bb as IpsIconButton,
  N1 as IpsPillSelect,
  pO as IpsRichTextEditor,
  A1 as IpsRtlProvider,
  Wb as IpsSelect,
  _b as IpsSwitch,
  Qb as IpsTable,
  R1 as IpsTableLight,
  Ib as IpsTextArea,
  Os as IpsTextField,
  Kb as IpsTimePicker,
  eA as IpsToastProvider,
  Hb as IpsToolTips,
  Gr as TOAST_TYPES,
  l1 as ThemeContext,
  QE as ThemeProvider,
  XE as createLtrCache,
  E1 as createRtlCache,
  ZE as directionFor,
  xf as ipsTheme,
  O1 as isRtl,
  tA as useIpsToast,
  tA as useToast
};
