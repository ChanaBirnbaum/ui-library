var ur = Object.create, Ee = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, Pe = Object.getOwnPropertyNames, gr = Object.getPrototypeOf, dr = Object.prototype.hasOwnProperty, hr = (e, r) => function() {
  return r || (0, e[Pe(e)[0]])((r = { exports: {} }).exports, r), r.exports;
}, xr = (e, r, n, c) => {
  if (r && typeof r == "object" || typeof r == "function")
    for (let a of Pe(r))
      !dr.call(e, a) && a !== n && Ee(e, a, { get: () => r[a], enumerable: !(c = fr(r, a)) || c.enumerable });
  return e;
}, wr = (e, r, n) => (n = e != null ? ur(gr(e)) : {}, xr(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  !e || !e.__esModule ? Ee(n, "default", { value: e, enumerable: !0 }) : n,
  e
)), Rr = hr({
  "node_modules/cssjanus/src/cssjanus.js"(e, r) {
    var n;
    function c(u, g) {
      var f = [], d = 0;
      function T(o) {
        return f.push(o), g;
      }
      function P() {
        return f[d++];
      }
      return {
        /**
         * Replace matching strings with tokens.
         *
         * @param {string} str String to tokenize
         * @return {string} Tokenized string
         */
        tokenize: function(o) {
          return o.replace(u, T);
        },
        /**
         * Restores tokens to their original values.
         *
         * @param {string} str String previously run through tokenize()
         * @return {string} Original string
         */
        detokenize: function(o) {
          return o.replace(new RegExp("(" + g + ")", "g"), P);
        }
      };
    }
    function a() {
      var u = "`TMP`", g = "`TMPLTR`", f = "`TMPRTL`", d = "`NOFLIP_SINGLE`", T = "`NOFLIP_CLASS`", P = "`COMMENT`", o = "[^\\u0020-\\u007e]", z = "(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)", y = "(?:[0-9]*\\.[0-9]+|[0-9]+)", k = "(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)", w = "direction\\s*:\\s*", A = "[!#$%&*-~]", h = `['"]?\\s*`, s = "(^|[^a-zA-Z])", _ = "[^\\}]*?", C = "\\/\\*\\!?\\s*@noflip\\s*\\*\\/", S = "\\/\\*[^*]*\\*+([^\\/*][^*]*\\*+)*\\/", R = "(?:" + z + "|\\\\[^\\r\\n\\f0-9a-f])", i = "(?:[_a-z]|" + o + "|" + R + ")", Z = "(?:[_a-z0-9-]|" + o + "|" + R + ")", ye = "-?" + i + Z + "*", K = y + "(?:\\s*" + k + "|" + ye + ")?", x = "((?:-?" + K + ")|(?:inherit|auto))", _e = "(?:-?" + y + "(?:\\s*" + k + ")?)", ze = "(?:\\+|\\-|\\*|\\/)", Se = "(?:\\(|\\)|\\t| )", Oe = "(?:" + Se + "|" + _e + "|" + ze + "){3,}", Ce = "(?:calc\\((?:" + Oe + ")\\))", D = "((?:-?" + K + ")|(?:inherit|auto)|" + Ce + ")", Ne = "((?:margin|padding|border-width)\\s*:\\s*)", Ae = "((?:-color|border-style)\\s*:\\s*)", j = "(#?" + Z + "+|(?:rgba?|hsla?)\\([ \\d.,%-]+\\))", pe = "(?:" + A + "|" + o + "|" + R + ")*?", le = "(?![a-zA-Z])", V = "(?!(" + Z + `|\\r?\\n|\\s|#|\\:|\\.|\\,|\\+|>|~|\\(|\\)|\\[|\\]|=|\\*=|~=|\\^=|'[^']*'|"[^"]*"|` + P + ")*?{)", ue = "(?!" + pe + h + "\\))", Q = "(?=" + pe + h + "\\))", Y = "(\\s*(?:!important\\s*)?[;}])", F = /`TMP`/g, je = /`TMPLTR`/g, Le = /`TMPRTL`/g, Me = new RegExp(S, "gi"), Fe = new RegExp("(" + C + V + "[^;}]+;?)", "gi"), Ie = new RegExp("(" + C + _ + "})", "gi"), Ue = new RegExp("(" + w + ")ltr", "gi"), De = new RegExp("(" + w + ")rtl", "gi"), Qe = new RegExp(s + "(left)" + le + ue + V, "gi"), qe = new RegExp(s + "(right)" + le + ue + V, "gi"), Be = new RegExp(s + "(left)" + Q, "gi"), Ge = new RegExp(s + "(right)" + Q, "gi"), Xe = /(:dir\( *)ltr( *\))/g, He = /(:dir\( *)rtl( *\))/g, Je = new RegExp(s + "(ltr)" + Q, "gi"), We = new RegExp(s + "(rtl)" + Q, "gi"), Ze = new RegExp(s + "([ns]?)e-resize", "gi"), Ke = new RegExp(s + "([ns]?)w-resize", "gi"), Ve = new RegExp(Ne + D + "(\\s+)" + D + "(\\s+)" + D + "(\\s+)" + D + Y, "gi"), Ye = new RegExp(Ae + j + "(\\s+)" + j + "(\\s+)" + j + "(\\s+)" + j + Y, "gi"), er = new RegExp("(background(?:-position)?\\s*:\\s*(?:[^:;}\\s]+\\s+)*?)(" + K + ")", "gi"), rr = new RegExp("(background-position-x\\s*:\\s*)(-?" + y + "%)", "gi"), tr = new RegExp("(border-radius\\s*:\\s*)" + x + "(?:(?:\\s+" + x + ")(?:\\s+" + x + ")?(?:\\s+" + x + ")?)?(?:(?:(?:\\s*\\/\\s*)" + x + ")(?:\\s+" + x + ")?(?:\\s+" + x + ")?(?:\\s+" + x + ")?)?" + Y, "gi"), nr = new RegExp("(box-shadow\\s*:\\s*(?:inset\\s*)?)" + x, "gi"), ar = new RegExp("(text-shadow\\s*:\\s*)" + x + "(\\s*)" + j, "gi"), ir = new RegExp("(text-shadow\\s*:\\s*)" + j + "(\\s*)" + x, "gi"), cr = new RegExp("(text-shadow\\s*:\\s*)" + x, "gi"), or = new RegExp("(transform\\s*:[^;}]*)(translateX\\s*\\(\\s*)" + x + "(\\s*\\))", "gi"), sr = new RegExp("(transform\\s*:[^;}]*)(translate\\s*\\(\\s*)" + x + "((?:\\s*,\\s*" + x + "){0,2}\\s*\\))", "gi");
      function fe(t, b, p) {
        var E, m;
        return p.slice(-1) === "%" && (E = p.indexOf("."), E !== -1 ? (m = p.length - E - 2, p = 100 - parseFloat(p), p = p.toFixed(m) + "%") : p = 100 - parseFloat(p) + "%"), b + p;
      }
      function ee(t) {
        switch (t.length) {
          case 4:
            t = [t[1], t[0], t[3], t[2]];
            break;
          case 3:
            t = [t[1], t[0], t[1], t[2]];
            break;
          case 2:
            t = [t[1], t[0]];
            break;
          case 1:
            t = [t[0]];
            break;
        }
        return t.join(" ");
      }
      function pr(t, b) {
        var p, E = [].slice.call(arguments), m = E.slice(2, 6).filter(function(te) {
          return te;
        }), xe = E.slice(6, 10).filter(function(te) {
          return te;
        }), lr = E[10] || "";
        return xe.length ? p = ee(m) + " / " + ee(xe) : p = ee(m), b + p + lr;
      }
      function re(t) {
        return parseFloat(t) === 0 ? t : t[0] === "-" ? t.slice(1) : "-" + t;
      }
      function ge(t, b, p) {
        return b + re(p);
      }
      function de(t, b, p, E, m) {
        return b + p + re(E) + m;
      }
      function he(t, b, p, E, m) {
        return b + p + E + re(m);
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
        transform: function(t, b) {
          var p = new c(Fe, d), E = new c(Ie, T), m = new c(Me, P);
          return t = m.tokenize(
            E.tokenize(
              p.tokenize(
                // We wrap tokens in ` , not ~ like the original implementation does.
                // This was done because ` is not a legal character in CSS and can only
                // occur in URLs, where we escape it to %60 before inserting our tokens.
                t.replace("`", "%60")
              )
            )
          ), b.transformDirInUrl && (t = t.replace(Xe, "$1" + g + "$2").replace(He, "$1" + f + "$2").replace(Je, "$1" + u).replace(We, "$1ltr").replace(F, "rtl").replace(je, "ltr").replace(Le, "rtl")), b.transformEdgeInUrl && (t = t.replace(Be, "$1" + u).replace(Ge, "$1left").replace(F, "right")), t = t.replace(Ue, "$1" + u).replace(De, "$1ltr").replace(F, "rtl").replace(Qe, "$1" + u).replace(qe, "$1left").replace(F, "right").replace(Ze, "$1$2" + u).replace(Ke, "$1$2e-resize").replace(F, "w-resize").replace(tr, pr).replace(nr, ge).replace(ar, he).replace(ir, he).replace(cr, ge).replace(or, de).replace(sr, de).replace(Ve, "$1$2$3$8$5$6$7$4$9").replace(Ye, "$1$2$3$8$5$6$7$4$9").replace(er, fe).replace(rr, fe), t = p.detokenize(
            E.detokenize(
              m.detokenize(t)
            )
          ), t;
        }
      };
    }
    n = new a(), typeof r < "u" && r.exports ? e.transform = function(u, g, f) {
      var d;
      return typeof g == "object" ? d = g : (d = {}, typeof g == "boolean" && (d.transformDirInUrl = g), typeof f == "boolean" && (d.transformEdgeInUrl = f)), n.transform(u, d);
    } : typeof window < "u" && (window.cssjanus = n);
  }
}), Er = wr(Rr()), ae = "comm", H = "rule", ke = "decl", Pr = "@media", kr = "@import", br = "@supports", mr = "@keyframes", $r = Math.abs, oe = String.fromCharCode;
function be(e) {
  return e.trim();
}
function B(e, r, n) {
  return e.replace(r, n);
}
function vr(e, r) {
  return e.indexOf(r);
}
function I(e, r) {
  return e.charCodeAt(r) | 0;
}
function U(e, r, n) {
  return e.slice(r, n);
}
function O(e) {
  return e.length;
}
function me(e) {
  return e.length;
}
function q(e, r) {
  return r.push(e), e;
}
var J = 1, L = 1, $e = 0, $ = 0, l = 0, M = "";
function se(e, r, n, c, a, u, g) {
  return { value: e, root: r, parent: n, type: c, props: a, children: u, line: J, column: L, length: g, return: "" };
}
function Tr() {
  return l;
}
function yr() {
  return l = $ > 0 ? I(M, --$) : 0, L--, l === 10 && (L = 1, J--), l;
}
function v() {
  return l = $ < $e ? I(M, $++) : 0, L++, l === 10 && (L = 1, J++), l;
}
function N() {
  return I(M, $);
}
function G() {
  return $;
}
function W(e, r) {
  return U(M, e, r);
}
function ie(e) {
  switch (e) {
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
function _r(e) {
  return J = L = 1, $e = O(M = e), $ = 0, [];
}
function zr(e) {
  return M = "", e;
}
function ne(e) {
  return be(W($ - 1, ce(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Sr(e) {
  for (; (l = N()) && l < 33; )
    v();
  return ie(e) > 2 || ie(l) > 3 ? "" : " ";
}
function Or(e, r) {
  for (; --r && v() && !(l < 48 || l > 102 || l > 57 && l < 65 || l > 70 && l < 97); )
    ;
  return W(e, G() + (r < 6 && N() == 32 && v() == 32));
}
function ce(e) {
  for (; v(); )
    switch (l) {
      case e:
        return $;
      case 34:
      case 39:
        e !== 34 && e !== 39 && ce(l);
        break;
      case 40:
        e === 41 && ce(e);
        break;
      case 92:
        v();
        break;
    }
  return $;
}
function Cr(e, r) {
  for (; v() && e + l !== 57; )
    if (e + l === 84 && N() === 47)
      break;
  return "/*" + W(r, $ - 1) + "*" + oe(e === 47 ? e : v());
}
function Nr(e) {
  for (; !ie(N()); )
    v();
  return W(e, $);
}
function Ar(e) {
  return zr(X("", null, null, null, [""], e = _r(e), 0, [0], e));
}
function X(e, r, n, c, a, u, g, f, d) {
  for (var T = 0, P = 0, o = g, z = 0, y = 0, k = 0, w = 1, A = 1, h = 1, s = 0, _ = "", C = a, S = u, R = c, i = _; A; )
    switch (k = s, s = v()) {
      case 40:
        if (k != 108 && I(i, o - 1) == 58) {
          vr(i += B(ne(s), "&", "&\f"), "&\f") != -1 && (h = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        i += ne(s);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        i += Sr(k);
        break;
      case 92:
        i += Or(G() - 1, 7);
        continue;
      case 47:
        switch (N()) {
          case 42:
          case 47:
            q(jr(Cr(v(), G()), r, n), d);
            break;
          default:
            i += "/";
        }
        break;
      case 123 * w:
        f[T++] = O(i) * h;
      case 125 * w:
      case 59:
      case 0:
        switch (s) {
          case 0:
          case 125:
            A = 0;
          case 59 + P:
            h == -1 && (i = B(i, /\f/g, "")), y > 0 && O(i) - o && q(y > 32 ? Re(i + ";", c, n, o - 1) : Re(B(i, " ", "") + ";", c, n, o - 2), d);
            break;
          case 59:
            i += ";";
          default:
            if (q(R = we(i, r, n, T, P, a, f, _, C = [], S = [], o), u), s === 123)
              if (P === 0)
                X(i, r, R, R, C, u, o, f, S);
              else
                switch (z === 99 && I(i, 3) === 110 ? 100 : z) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    X(e, R, R, c && q(we(e, R, R, 0, 0, a, f, _, a, C = [], o), S), a, S, o, f, c ? C : S);
                    break;
                  default:
                    X(i, R, R, R, [""], S, 0, f, S);
                }
        }
        T = P = y = 0, w = h = 1, _ = i = "", o = g;
        break;
      case 58:
        o = 1 + O(i), y = k;
      default:
        if (w < 1) {
          if (s == 123)
            --w;
          else if (s == 125 && w++ == 0 && yr() == 125)
            continue;
        }
        switch (i += oe(s), s * w) {
          case 38:
            h = P > 0 ? 1 : (i += "\f", -1);
            break;
          case 44:
            f[T++] = (O(i) - 1) * h, h = 1;
            break;
          case 64:
            N() === 45 && (i += ne(v())), z = N(), P = o = O(_ = i += Nr(G())), s++;
            break;
          case 45:
            k === 45 && O(i) == 2 && (w = 0);
        }
    }
  return u;
}
function we(e, r, n, c, a, u, g, f, d, T, P) {
  for (var o = a - 1, z = a === 0 ? u : [""], y = me(z), k = 0, w = 0, A = 0; k < c; ++k)
    for (var h = 0, s = U(e, o + 1, o = $r(w = g[k])), _ = e; h < y; ++h)
      (_ = be(w > 0 ? z[h] + " " + s : B(s, /&\f/g, z[h]))) && (d[A++] = _);
  return se(e, r, n, a === 0 ? H : f, d, T, P);
}
function jr(e, r, n) {
  return se(e, r, n, ae, oe(Tr()), U(e, 2, -2), 0);
}
function Re(e, r, n, c) {
  return se(e, r, n, ke, U(e, 0, c), U(e, c + 1, -1), c);
}
function Lr(e, r) {
  for (var n = "", c = me(e), a = 0; a < c; a++)
    n += r(e[a], a, e, r) || "";
  return n;
}
function ve(e, r, n) {
  switch (e.type) {
    case kr:
    case ke:
    case ae:
      return e.return = e.return || e.value;
    case H:
      e.value = Array.isArray(e.props) ? e.props.join(",") : e.props, Array.isArray(e.children) && e.children.forEach(function(a) {
        a.type === ae && (a.children = a.value);
      });
  }
  var c = Lr(Array.prototype.concat(e.children), ve);
  return O(c) ? e.return = e.value + "{" + c + "}" : "";
}
function Te(e, r, n, c) {
  if (e.type === mr || e.type === br || e.type === H && (!e.parent || e.parent.type === Pr || e.parent.type === H)) {
    var a = Er.default.transform(ve(e));
    e.children = a ? Ar(a)[0].children : [], e.return = "";
  }
}
Object.defineProperty(Te, "name", { value: "stylisRTLPlugin" });
var Mr = Te;
export {
  Mr as default
};
