var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b2) => (typeof require !== "undefined" ? require : a)[b2]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/json-formatter-js/dist/json-formatter.umd.js
var require_json_formatter_umd = __commonJS({
  "node_modules/json-formatter-js/dist/json-formatter.umd.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).JSONFormatter = e();
    }(exports, function() {
      "use strict";
      function t(t2) {
        return null === t2 ? "null" : typeof t2;
      }
      function e(t2) {
        return !!t2 && "object" == typeof t2;
      }
      function r(t2) {
        if (void 0 === t2)
          return "";
        if (null === t2)
          return "Object";
        if ("object" == typeof t2 && !t2.constructor)
          return "Object";
        var e2 = /function ([^(]*)/.exec(t2.constructor.toString());
        return e2 && e2.length > 1 ? e2[1] : "";
      }
      function n6(t2, e2, r2) {
        return "null" === t2 || "undefined" === t2 ? t2 : ("string" !== t2 && "stringifiable" !== t2 || (r2 = '"' + r2.replace(/"/g, '\\"') + '"'), "function" === t2 ? e2.toString().replace(/[\r\n]/g, "").replace(/\{.*\}/, "") + "{\u2026}" : r2);
      }
      function o(o2) {
        var i2 = "";
        return e(o2) ? (i2 = r(o2), Array.isArray(o2) && (i2 += "[" + o2.length + "]")) : i2 = n6(t(o2), o2, o2), i2;
      }
      function i(t2) {
        return "json-formatter-" + t2;
      }
      function s(t2, e2, r2) {
        var n7 = document.createElement(t2);
        return e2 && n7.classList.add(i(e2)), void 0 !== r2 && (r2 instanceof Node ? n7.appendChild(r2) : n7.appendChild(document.createTextNode(String(r2)))), n7;
      }
      !function(t2) {
        if (t2 && "undefined" != typeof window) {
          var e2 = document.createElement("style");
          e2.setAttribute("media", "screen"), e2.innerHTML = t2, document.head.appendChild(e2);
        }
      }('.json-formatter-row {\n  font-family: monospace;\n}\n.json-formatter-row,\n.json-formatter-row a,\n.json-formatter-row a:hover {\n  color: black;\n  text-decoration: none;\n}\n.json-formatter-row .json-formatter-row {\n  margin-left: 1rem;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty {\n  opacity: 0.5;\n  margin-left: 1rem;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty:after {\n  display: none;\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-object:after {\n  content: "No properties";\n}\n.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-array:after {\n  content: "[]";\n}\n.json-formatter-row .json-formatter-string,\n.json-formatter-row .json-formatter-stringifiable {\n  color: green;\n  white-space: pre;\n  word-wrap: break-word;\n}\n.json-formatter-row .json-formatter-number {\n  color: blue;\n}\n.json-formatter-row .json-formatter-boolean {\n  color: red;\n}\n.json-formatter-row .json-formatter-null {\n  color: #855A00;\n}\n.json-formatter-row .json-formatter-undefined {\n  color: #ca0b69;\n}\n.json-formatter-row .json-formatter-function {\n  color: #FF20ED;\n}\n.json-formatter-row .json-formatter-date {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.json-formatter-row .json-formatter-url {\n  text-decoration: underline;\n  color: blue;\n  cursor: pointer;\n}\n.json-formatter-row .json-formatter-bracket {\n  color: blue;\n}\n.json-formatter-row .json-formatter-key {\n  color: #00008B;\n  padding-right: 0.2rem;\n}\n.json-formatter-row .json-formatter-toggler-link {\n  cursor: pointer;\n}\n.json-formatter-row .json-formatter-toggler {\n  line-height: 1.2rem;\n  font-size: 0.7rem;\n  vertical-align: middle;\n  opacity: 0.6;\n  cursor: pointer;\n  padding-right: 0.2rem;\n}\n.json-formatter-row .json-formatter-toggler:after {\n  display: inline-block;\n  transition: transform 100ms ease-in;\n  content: "\u25BA";\n}\n.json-formatter-row > a > .json-formatter-preview-text {\n  opacity: 0;\n  transition: opacity 0.15s ease-in;\n  font-style: italic;\n}\n.json-formatter-row:hover > a > .json-formatter-preview-text {\n  opacity: 0.6;\n}\n.json-formatter-row.json-formatter-open > .json-formatter-toggler-link .json-formatter-toggler:after {\n  transform: rotate(90deg);\n}\n.json-formatter-row.json-formatter-open > .json-formatter-children:after {\n  display: inline-block;\n}\n.json-formatter-row.json-formatter-open > a > .json-formatter-preview-text {\n  display: none;\n}\n.json-formatter-row.json-formatter-open.json-formatter-empty:after {\n  display: block;\n}\n.json-formatter-dark.json-formatter-row {\n  font-family: monospace;\n}\n.json-formatter-dark.json-formatter-row,\n.json-formatter-dark.json-formatter-row a,\n.json-formatter-dark.json-formatter-row a:hover {\n  color: white;\n  text-decoration: none;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-row {\n  margin-left: 1rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty {\n  opacity: 0.5;\n  margin-left: 1rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty:after {\n  display: none;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-object:after {\n  content: "No properties";\n}\n.json-formatter-dark.json-formatter-row .json-formatter-children.json-formatter-empty.json-formatter-array:after {\n  content: "[]";\n}\n.json-formatter-dark.json-formatter-row .json-formatter-string,\n.json-formatter-dark.json-formatter-row .json-formatter-stringifiable {\n  color: #31F031;\n  white-space: pre;\n  word-wrap: break-word;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-number {\n  color: #66C2FF;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-boolean {\n  color: #EC4242;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-null {\n  color: #EEC97D;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-undefined {\n  color: #ef8fbe;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-function {\n  color: #FD48CB;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-date {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.json-formatter-dark.json-formatter-row .json-formatter-url {\n  text-decoration: underline;\n  color: #027BFF;\n  cursor: pointer;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-bracket {\n  color: #9494FF;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-key {\n  color: #23A0DB;\n  padding-right: 0.2rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler-link {\n  cursor: pointer;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler {\n  line-height: 1.2rem;\n  font-size: 0.7rem;\n  vertical-align: middle;\n  opacity: 0.6;\n  cursor: pointer;\n  padding-right: 0.2rem;\n}\n.json-formatter-dark.json-formatter-row .json-formatter-toggler:after {\n  display: inline-block;\n  transition: transform 100ms ease-in;\n  content: "\u25BA";\n}\n.json-formatter-dark.json-formatter-row > a > .json-formatter-preview-text {\n  opacity: 0;\n  transition: opacity 0.15s ease-in;\n  font-style: italic;\n}\n.json-formatter-dark.json-formatter-row:hover > a > .json-formatter-preview-text {\n  opacity: 0.6;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > .json-formatter-toggler-link .json-formatter-toggler:after {\n  transform: rotate(90deg);\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > .json-formatter-children:after {\n  display: inline-block;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open > a > .json-formatter-preview-text {\n  display: none;\n}\n.json-formatter-dark.json-formatter-row.json-formatter-open.json-formatter-empty:after {\n  display: block;\n}\n');
      var a = /(^\d{1,4}[\.|\\/|-]\d{1,2}[\.|\\/|-]\d{1,4})(\s*(?:0?[1-9]:[0-5]|1(?=[012])\d:[0-5])\d\s*[ap]m)?$/, f = /\d{2}:\d{2}:\d{2} GMT-\d{4}/, m2 = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/, l = window.requestAnimationFrame || function(t2) {
        return t2(), 0;
      }, d2 = { hoverPreviewEnabled: false, hoverPreviewArrayCount: 100, hoverPreviewFieldCount: 5, animateOpen: true, animateClose: true, theme: null, useToJSON: true, sortPropertiesBy: null };
      return function() {
        function c(t2, e2, r2, n7) {
          void 0 === e2 && (e2 = 1), void 0 === r2 && (r2 = d2), this.json = t2, this.open = e2, this.config = r2, this.key = n7, this._isOpen = null, void 0 === this.config.hoverPreviewEnabled && (this.config.hoverPreviewEnabled = d2.hoverPreviewEnabled), void 0 === this.config.hoverPreviewArrayCount && (this.config.hoverPreviewArrayCount = d2.hoverPreviewArrayCount), void 0 === this.config.hoverPreviewFieldCount && (this.config.hoverPreviewFieldCount = d2.hoverPreviewFieldCount), void 0 === this.config.useToJSON && (this.config.useToJSON = d2.useToJSON), "" === this.key && (this.key = '""');
        }
        return Object.defineProperty(c.prototype, "isOpen", { get: function() {
          return null !== this._isOpen ? this._isOpen : this.open > 0;
        }, set: function(t2) {
          this._isOpen = t2;
        }, enumerable: true, configurable: true }), Object.defineProperty(c.prototype, "isDate", { get: function() {
          return this.json instanceof Date || "string" === this.type && (a.test(this.json) || m2.test(this.json) || f.test(this.json));
        }, enumerable: true, configurable: true }), Object.defineProperty(c.prototype, "isUrl", { get: function() {
          return "string" === this.type && 0 === this.json.indexOf("http");
        }, enumerable: true, configurable: true }), Object.defineProperty(c.prototype, "isArray", { get: function() {
          return Array.isArray(this.json);
        }, enumerable: true, configurable: true }), Object.defineProperty(c.prototype, "isObject", { get: function() {
          return e(this.json);
        }, enumerable: true, configurable: true }), Object.defineProperty(c.prototype, "isEmptyObject", { get: function() {
          return !this.keys.length && !this.isArray;
        }, enumerable: true, configurable: true }), Object.defineProperty(c.prototype, "isEmpty", { get: function() {
          return this.isEmptyObject || this.keys && !this.keys.length && this.isArray;
        }, enumerable: true, configurable: true }), Object.defineProperty(c.prototype, "useToJSON", { get: function() {
          return this.config.useToJSON && "stringifiable" === this.type;
        }, enumerable: true, configurable: true }), Object.defineProperty(c.prototype, "hasKey", { get: function() {
          return void 0 !== this.key;
        }, enumerable: true, configurable: true }), Object.defineProperty(c.prototype, "constructorName", { get: function() {
          return r(this.json);
        }, enumerable: true, configurable: true }), Object.defineProperty(c.prototype, "type", { get: function() {
          return this.config.useToJSON && this.json && this.json.toJSON ? "stringifiable" : t(this.json);
        }, enumerable: true, configurable: true }), Object.defineProperty(c.prototype, "keys", { get: function() {
          if (this.isObject) {
            var t2 = Object.keys(this.json);
            return !this.isArray && this.config.sortPropertiesBy ? t2.sort(this.config.sortPropertiesBy) : t2;
          }
          return [];
        }, enumerable: true, configurable: true }), c.prototype.toggleOpen = function() {
          this.isOpen = !this.isOpen, this.element && (this.isOpen ? this.appendChildren(this.config.animateOpen) : this.removeChildren(this.config.animateClose), this.element.classList.toggle(i("open")));
        }, c.prototype.openAtDepth = function(t2) {
          void 0 === t2 && (t2 = 1), t2 < 0 || (this.open = t2, this.isOpen = 0 !== t2, this.element && (this.removeChildren(false), 0 === t2 ? this.element.classList.remove(i("open")) : (this.appendChildren(this.config.animateOpen), this.element.classList.add(i("open")))));
        }, c.prototype.getInlinepreview = function() {
          var t2 = this;
          if (this.isArray)
            return this.json.length > this.config.hoverPreviewArrayCount ? "Array[" + this.json.length + "]" : "[" + this.json.map(o).join(", ") + "]";
          var e2 = this.keys, r2 = e2.slice(0, this.config.hoverPreviewFieldCount).map(function(e3) {
            return e3 + ":" + o(t2.json[e3]);
          }), n7 = e2.length >= this.config.hoverPreviewFieldCount ? "\u2026" : "";
          return "{" + r2.join(", ") + n7 + "}";
        }, c.prototype.render = function() {
          this.element = s("div", "row");
          var t2 = this.isObject ? s("a", "toggler-link") : s("span");
          if (this.isObject && !this.useToJSON && t2.appendChild(s("span", "toggler")), this.hasKey && t2.appendChild(s("span", "key", this.key + ":")), this.isObject && !this.useToJSON) {
            var e2 = s("span", "value"), r2 = s("span"), o2 = s("span", "constructor-name", this.constructorName);
            if (r2.appendChild(o2), this.isArray) {
              var a2 = s("span");
              a2.appendChild(s("span", "bracket", "[")), a2.appendChild(s("span", "number", this.json.length)), a2.appendChild(s("span", "bracket", "]")), r2.appendChild(a2);
            }
            e2.appendChild(r2), t2.appendChild(e2);
          } else {
            (e2 = this.isUrl ? s("a") : s("span")).classList.add(i(this.type)), this.isDate && e2.classList.add(i("date")), this.isUrl && (e2.classList.add(i("url")), e2.setAttribute("href", this.json));
            var f2 = n6(this.type, this.json, this.useToJSON ? this.json.toJSON() : this.json);
            e2.appendChild(document.createTextNode(f2)), t2.appendChild(e2);
          }
          if (this.isObject && this.config.hoverPreviewEnabled) {
            var m3 = s("span", "preview-text");
            m3.appendChild(document.createTextNode(this.getInlinepreview())), t2.appendChild(m3);
          }
          var l2 = s("div", "children");
          return this.isObject && l2.classList.add(i("object")), this.isArray && l2.classList.add(i("array")), this.isEmpty && l2.classList.add(i("empty")), this.config && this.config.theme && this.element.classList.add(i(this.config.theme)), this.isOpen && this.element.classList.add(i("open")), this.element.appendChild(t2), this.element.appendChild(l2), this.isObject && this.isOpen && this.appendChildren(), this.isObject && !this.useToJSON && t2.addEventListener("click", this.toggleOpen.bind(this)), this.element;
        }, c.prototype.appendChildren = function(t2) {
          var e2 = this;
          void 0 === t2 && (t2 = false);
          var r2 = this.element.querySelector("div." + i("children"));
          if (r2 && !this.isEmpty)
            if (t2) {
              var n7 = 0, o2 = function() {
                var t3 = e2.keys[n7], i2 = new c(e2.json[t3], e2.open - 1, e2.config, t3);
                r2.appendChild(i2.render()), (n7 += 1) < e2.keys.length && (n7 > 10 ? o2() : l(o2));
              };
              l(o2);
            } else
              this.keys.forEach(function(t3) {
                var n8 = new c(e2.json[t3], e2.open - 1, e2.config, t3);
                r2.appendChild(n8.render());
              });
        }, c.prototype.removeChildren = function(t2) {
          void 0 === t2 && (t2 = false);
          var e2 = this.element.querySelector("div." + i("children"));
          if (t2) {
            var r2 = 0, n7 = function() {
              e2 && e2.children.length && (e2.removeChild(e2.children[0]), (r2 += 1) > 10 ? n7() : l(n7));
            };
            l(n7);
          } else
            e2 && (e2.innerHTML = "");
        }, c;
      }();
    });
  }
});

// ../../../../../omni-sdk/lib/index.js
var ss = Object.create;
var jt = Object.defineProperty;
var os = Object.getOwnPropertyDescriptor;
var as = Object.getOwnPropertyNames;
var ls = Object.getPrototypeOf;
var us = Object.prototype.hasOwnProperty;
var cs = (n6, e, t) => e in n6 ? jt(n6, e, { enumerable: true, configurable: true, writable: true, value: t }) : n6[e] = t;
var _e = ((n6) => typeof __require < "u" ? __require : typeof Proxy < "u" ? new Proxy(n6, { get: (e, t) => (typeof __require < "u" ? __require : e)[t] }) : n6)(function(n6) {
  if (typeof __require < "u")
    return __require.apply(this, arguments);
  throw Error('Dynamic require of "' + n6 + '" is not supported');
});
var _ = (n6, e) => () => (e || n6((e = { exports: {} }).exports, e), e.exports);
var hs = (n6, e, t, r) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let i of as(e))
      !us.call(n6, i) && i !== t && jt(n6, i, { get: () => e[i], enumerable: !(r = os(e, i)) || r.enumerable });
  return n6;
};
var ps = (n6, e, t) => (t = n6 != null ? ss(ls(n6)) : {}, hs(e || !n6 || !n6.__esModule ? jt(t, "default", { value: n6, enumerable: true }) : t, n6));
var b = (n6, e, t) => (cs(n6, typeof e != "symbol" ? e + "" : e, t), t);
var fs = (n6, e, t) => {
  if (!e.has(n6))
    throw TypeError("Cannot " + t);
};
var Xt = (n6, e, t) => {
  if (e.has(n6))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(n6) : e.set(n6, t);
};
var Xe = (n6, e, t) => (fs(n6, e, "access private method"), t);
var A = _((T) => {
  "use strict";
  T.__esModule = true;
  T.extend = nn;
  T.indexOf = vs;
  T.escapeExpression = ks;
  T.isEmpty = Ss;
  T.createFrame = bs;
  T.blockParams = ws;
  T.appendContextPath = xs;
  var gs = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;", "=": "&#x3D;" }, ms = /[&<>"'`=]/g, _s = /[&<>"'`=]/;
  function ys(n6) {
    return gs[n6];
  }
  function nn(n6) {
    for (var e = 1; e < arguments.length; e++)
      for (var t in arguments[e])
        Object.prototype.hasOwnProperty.call(arguments[e], t) && (n6[t] = arguments[e][t]);
    return n6;
  }
  var nr = Object.prototype.toString;
  T.toString = nr;
  var rr = function(e) {
    return typeof e == "function";
  };
  rr(/x/) && (T.isFunction = rr = function(n6) {
    return typeof n6 == "function" && nr.call(n6) === "[object Function]";
  });
  T.isFunction = rr;
  var sn = Array.isArray || function(n6) {
    return n6 && typeof n6 == "object" ? nr.call(n6) === "[object Array]" : false;
  };
  T.isArray = sn;
  function vs(n6, e) {
    for (var t = 0, r = n6.length; t < r; t++)
      if (n6[t] === e)
        return t;
    return -1;
  }
  function ks(n6) {
    if (typeof n6 != "string") {
      if (n6 && n6.toHTML)
        return n6.toHTML();
      if (n6 == null)
        return "";
      if (!n6)
        return n6 + "";
      n6 = "" + n6;
    }
    return _s.test(n6) ? n6.replace(ms, ys) : n6;
  }
  function Ss(n6) {
    return !n6 && n6 !== 0 ? true : !!(sn(n6) && n6.length === 0);
  }
  function bs(n6) {
    var e = nn({}, n6);
    return e._parent = n6, e;
  }
  function ws(n6, e) {
    return n6.path = e, n6;
  }
  function xs(n6, e) {
    return (n6 ? n6 + "." : "") + e;
  }
});
var D = _((lt, on2) => {
  "use strict";
  lt.__esModule = true;
  var ir = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
  function sr(n6, e) {
    var t = e && e.loc, r = void 0, i = void 0, s = void 0, o = void 0;
    t && (r = t.start.line, i = t.end.line, s = t.start.column, o = t.end.column, n6 += " - " + r + ":" + s);
    for (var a = Error.prototype.constructor.call(this, n6), l = 0; l < ir.length; l++)
      this[ir[l]] = a[ir[l]];
    Error.captureStackTrace && Error.captureStackTrace(this, sr);
    try {
      t && (this.lineNumber = r, this.endLineNumber = i, Object.defineProperty ? (Object.defineProperty(this, "column", { value: s, enumerable: true }), Object.defineProperty(this, "endColumn", { value: o, enumerable: true })) : (this.column = s, this.endColumn = o));
    } catch {
    }
  }
  sr.prototype = new Error();
  lt.default = sr;
  on2.exports = lt.default;
});
var ln = _((ut, an) => {
  "use strict";
  ut.__esModule = true;
  var or = A();
  ut.default = function(n6) {
    n6.registerHelper("blockHelperMissing", function(e, t) {
      var r = t.inverse, i = t.fn;
      if (e === true)
        return i(this);
      if (e === false || e == null)
        return r(this);
      if (or.isArray(e))
        return e.length > 0 ? (t.ids && (t.ids = [t.name]), n6.helpers.each(e, t)) : r(this);
      if (t.data && t.ids) {
        var s = or.createFrame(t.data);
        s.contextPath = or.appendContextPath(t.data.contextPath, t.name), t = { data: s };
      }
      return i(e, t);
    });
  };
  an.exports = ut.default;
});
var cn = _((ct, un) => {
  "use strict";
  ct.__esModule = true;
  function Es(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  var Re = A(), Cs = D(), Is = Es(Cs);
  ct.default = function(n6) {
    n6.registerHelper("each", function(e, t) {
      if (!t)
        throw new Is.default("Must pass iterator to #each");
      var r = t.fn, i = t.inverse, s = 0, o = "", a = void 0, l = void 0;
      t.data && t.ids && (l = Re.appendContextPath(t.data.contextPath, t.ids[0]) + "."), Re.isFunction(e) && (e = e.call(this)), t.data && (a = Re.createFrame(t.data));
      function u(y, S, I) {
        a && (a.key = y, a.index = S, a.first = S === 0, a.last = !!I, l && (a.contextPath = l + y)), o = o + r(e[y], { data: a, blockParams: Re.blockParams([e[y], y], [l + y, null]) });
      }
      if (e && typeof e == "object")
        if (Re.isArray(e))
          for (var h = e.length; s < h; s++)
            s in e && u(s, s, s === e.length - 1);
        else if (typeof Symbol == "function" && e[Symbol.iterator]) {
          for (var c = [], p = e[Symbol.iterator](), f = p.next(); !f.done; f = p.next())
            c.push(f.value);
          e = c;
          for (var h = e.length; s < h; s++)
            u(s, s, s === e.length - 1);
        } else
          (function() {
            var y = void 0;
            Object.keys(e).forEach(function(S) {
              y !== void 0 && u(y, s - 1), y = S, s++;
            }), y !== void 0 && u(y, s - 1, true);
          })();
      return s === 0 && (o = i(this)), o;
    });
  };
  un.exports = ct.default;
});
var pn = _((ht, hn) => {
  "use strict";
  ht.__esModule = true;
  function Ms(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  var Os = D(), Ps = Ms(Os);
  ht.default = function(n6) {
    n6.registerHelper("helperMissing", function() {
      if (arguments.length !== 1)
        throw new Ps.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
    });
  };
  hn.exports = ht.default;
});
var mn = _((pt, gn) => {
  "use strict";
  pt.__esModule = true;
  function As(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  var fn = A(), Ts = D(), dn = As(Ts);
  pt.default = function(n6) {
    n6.registerHelper("if", function(e, t) {
      if (arguments.length != 2)
        throw new dn.default("#if requires exactly one argument");
      return fn.isFunction(e) && (e = e.call(this)), !t.hash.includeZero && !e || fn.isEmpty(e) ? t.inverse(this) : t.fn(this);
    }), n6.registerHelper("unless", function(e, t) {
      if (arguments.length != 2)
        throw new dn.default("#unless requires exactly one argument");
      return n6.helpers.if.call(this, e, { fn: t.inverse, inverse: t.fn, hash: t.hash });
    });
  };
  gn.exports = pt.default;
});
var yn = _((ft, _n) => {
  "use strict";
  ft.__esModule = true;
  ft.default = function(n6) {
    n6.registerHelper("log", function() {
      for (var e = [void 0], t = arguments[arguments.length - 1], r = 0; r < arguments.length - 1; r++)
        e.push(arguments[r]);
      var i = 1;
      t.hash.level != null ? i = t.hash.level : t.data && t.data.level != null && (i = t.data.level), e[0] = i, n6.log.apply(n6, e);
    });
  };
  _n.exports = ft.default;
});
var kn = _((dt, vn) => {
  "use strict";
  dt.__esModule = true;
  dt.default = function(n6) {
    n6.registerHelper("lookup", function(e, t, r) {
      return e && r.lookupProperty(e, t);
    });
  };
  vn.exports = dt.default;
});
var bn = _((gt, Sn) => {
  "use strict";
  gt.__esModule = true;
  function Ls(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  var Ne = A(), Rs = D(), Ns = Ls(Rs);
  gt.default = function(n6) {
    n6.registerHelper("with", function(e, t) {
      if (arguments.length != 2)
        throw new Ns.default("#with requires exactly one argument");
      Ne.isFunction(e) && (e = e.call(this));
      var r = t.fn;
      if (Ne.isEmpty(e))
        return t.inverse(this);
      var i = t.data;
      return t.data && t.ids && (i = Ne.createFrame(t.data), i.contextPath = Ne.appendContextPath(t.data.contextPath, t.ids[0])), r(e, { data: i, blockParams: Ne.blockParams([e], [i && i.contextPath]) });
    });
  };
  Sn.exports = gt.default;
});
var ar = _((mt) => {
  "use strict";
  mt.__esModule = true;
  mt.registerDefaultHelpers = js;
  mt.moveHelperToHooks = Xs;
  function ae(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  var Ds = ln(), Bs = ae(Ds), Hs = cn(), qs = ae(Hs), Fs = pn(), zs = ae(Fs), Ws = mn(), Gs = ae(Ws), Vs = yn(), Us = ae(Vs), Ks = kn(), Js = ae(Ks), Zs = bn(), Qs = ae(Zs);
  function js(n6) {
    Bs.default(n6), qs.default(n6), zs.default(n6), Gs.default(n6), Us.default(n6), Js.default(n6), Qs.default(n6);
  }
  function Xs(n6, e, t) {
    n6.helpers[e] && (n6.hooks[e] = n6.helpers[e], t || delete n6.helpers[e]);
  }
});
var xn = _((_t, wn) => {
  "use strict";
  _t.__esModule = true;
  var Ys = A();
  _t.default = function(n6) {
    n6.registerDecorator("inline", function(e, t, r, i) {
      var s = e;
      return t.partials || (t.partials = {}, s = function(o, a) {
        var l = r.partials;
        r.partials = Ys.extend({}, l, t.partials);
        var u = e(o, a);
        return r.partials = l, u;
      }), t.partials[i.args[0]] = i.fn, s;
    });
  };
  wn.exports = _t.default;
});
var En = _((lr) => {
  "use strict";
  lr.__esModule = true;
  lr.registerDefaultDecorators = ro;
  function $s(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  var eo = xn(), to = $s(eo);
  function ro(n6) {
    to.default(n6);
  }
});
var ur = _((yt, Cn) => {
  "use strict";
  yt.__esModule = true;
  var no = A(), Se = { methodMap: ["debug", "info", "warn", "error"], level: "info", lookupLevel: function(e) {
    if (typeof e == "string") {
      var t = no.indexOf(Se.methodMap, e.toLowerCase());
      t >= 0 ? e = t : e = parseInt(e, 10);
    }
    return e;
  }, log: function(e) {
    if (e = Se.lookupLevel(e), typeof console < "u" && Se.lookupLevel(Se.level) <= e) {
      var t = Se.methodMap[e];
      console[t] || (t = "log");
      for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
        i[s - 1] = arguments[s];
      console[t].apply(console, i);
    }
  } };
  yt.default = Se;
  Cn.exports = yt.default;
});
var In = _((cr) => {
  "use strict";
  cr.__esModule = true;
  cr.createNewLookupObject = so;
  var io = A();
  function so() {
    for (var n6 = arguments.length, e = Array(n6), t = 0; t < n6; t++)
      e[t] = arguments[t];
    return io.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(e));
  }
});
var hr = _((De) => {
  "use strict";
  De.__esModule = true;
  De.createProtoAccessControl = uo;
  De.resultIsAllowed = co;
  De.resetLoggedProperties = po;
  function oo(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  var Mn = In(), ao = ur(), lo = oo(ao), vt = /* @__PURE__ */ Object.create(null);
  function uo(n6) {
    var e = /* @__PURE__ */ Object.create(null);
    e.constructor = false, e.__defineGetter__ = false, e.__defineSetter__ = false, e.__lookupGetter__ = false;
    var t = /* @__PURE__ */ Object.create(null);
    return t.__proto__ = false, { properties: { whitelist: Mn.createNewLookupObject(t, n6.allowedProtoProperties), defaultValue: n6.allowProtoPropertiesByDefault }, methods: { whitelist: Mn.createNewLookupObject(e, n6.allowedProtoMethods), defaultValue: n6.allowProtoMethodsByDefault } };
  }
  function co(n6, e, t) {
    return On(typeof n6 == "function" ? e.methods : e.properties, t);
  }
  function On(n6, e) {
    return n6.whitelist[e] !== void 0 ? n6.whitelist[e] === true : n6.defaultValue !== void 0 ? n6.defaultValue : (ho(e), false);
  }
  function ho(n6) {
    vt[n6] !== true && (vt[n6] = true, lo.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + n6 + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
  }
  function po() {
    Object.keys(vt).forEach(function(n6) {
      delete vt[n6];
    });
  }
});
var St = _((G) => {
  "use strict";
  G.__esModule = true;
  G.HandlebarsEnvironment = dr;
  function Pn(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  var le = A(), fo = D(), pr = Pn(fo), go = ar(), mo = En(), _o = ur(), kt = Pn(_o), yo = hr(), vo = "4.7.8";
  G.VERSION = vo;
  var ko = 8;
  G.COMPILER_REVISION = ko;
  var So = 7;
  G.LAST_COMPATIBLE_COMPILER_REVISION = So;
  var bo = { 1: "<= 1.0.rc.2", 2: "== 1.0.0-rc.3", 3: "== 1.0.0-rc.4", 4: "== 1.x.x", 5: "== 2.0.0-alpha.x", 6: ">= 2.0.0-beta.1", 7: ">= 4.0.0 <4.3.0", 8: ">= 4.3.0" };
  G.REVISION_CHANGES = bo;
  var fr = "[object Object]";
  function dr(n6, e, t) {
    this.helpers = n6 || {}, this.partials = e || {}, this.decorators = t || {}, go.registerDefaultHelpers(this), mo.registerDefaultDecorators(this);
  }
  dr.prototype = { constructor: dr, logger: kt.default, log: kt.default.log, registerHelper: function(e, t) {
    if (le.toString.call(e) === fr) {
      if (t)
        throw new pr.default("Arg not supported with multiple helpers");
      le.extend(this.helpers, e);
    } else
      this.helpers[e] = t;
  }, unregisterHelper: function(e) {
    delete this.helpers[e];
  }, registerPartial: function(e, t) {
    if (le.toString.call(e) === fr)
      le.extend(this.partials, e);
    else {
      if (typeof t > "u")
        throw new pr.default('Attempting to register a partial called "' + e + '" as undefined');
      this.partials[e] = t;
    }
  }, unregisterPartial: function(e) {
    delete this.partials[e];
  }, registerDecorator: function(e, t) {
    if (le.toString.call(e) === fr) {
      if (t)
        throw new pr.default("Arg not supported with multiple decorators");
      le.extend(this.decorators, e);
    } else
      this.decorators[e] = t;
  }, unregisterDecorator: function(e) {
    delete this.decorators[e];
  }, resetLoggedPropertyAccesses: function() {
    yo.resetLoggedProperties();
  } };
  var wo = kt.default.log;
  G.log = wo;
  G.createFrame = le.createFrame;
  G.logger = kt.default;
});
var Tn = _((bt, An) => {
  "use strict";
  bt.__esModule = true;
  function gr(n6) {
    this.string = n6;
  }
  gr.prototype.toString = gr.prototype.toHTML = function() {
    return "" + this.string;
  };
  bt.default = gr;
  An.exports = bt.default;
});
var Ln = _((mr) => {
  "use strict";
  mr.__esModule = true;
  mr.wrapHelper = xo;
  function xo(n6, e) {
    if (typeof n6 != "function")
      return n6;
    var t = function() {
      var i = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = e(i), n6.apply(this, arguments);
    };
    return t;
  }
});
var Hn = _((re) => {
  "use strict";
  re.__esModule = true;
  re.checkRevision = Po;
  re.template = Ao;
  re.wrapProgram = wt;
  re.resolvePartial = To;
  re.invokePartial = Lo;
  re.noop = Dn;
  function Eo(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  function Co(n6) {
    if (n6 && n6.__esModule)
      return n6;
    var e = {};
    if (n6 != null)
      for (var t in n6)
        Object.prototype.hasOwnProperty.call(n6, t) && (e[t] = n6[t]);
    return e.default = n6, e;
  }
  var Io = A(), J = Co(Io), Mo = D(), Z = Eo(Mo), Q = St(), Rn = ar(), Oo = Ln(), Nn = hr();
  function Po(n6) {
    var e = n6 && n6[0] || 1, t = Q.COMPILER_REVISION;
    if (!(e >= Q.LAST_COMPATIBLE_COMPILER_REVISION && e <= Q.COMPILER_REVISION))
      if (e < Q.LAST_COMPATIBLE_COMPILER_REVISION) {
        var r = Q.REVISION_CHANGES[t], i = Q.REVISION_CHANGES[e];
        throw new Z.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + r + ") or downgrade your runtime to an older version (" + i + ").");
      } else
        throw new Z.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + n6[1] + ").");
  }
  function Ao(n6, e) {
    if (!e)
      throw new Z.default("No environment passed to template");
    if (!n6 || !n6.main)
      throw new Z.default("Unknown template object: " + typeof n6);
    n6.main.decorator = n6.main_d, e.VM.checkRevision(n6.compiler);
    var t = n6.compiler && n6.compiler[0] === 7;
    function r(o, a, l) {
      l.hash && (a = J.extend({}, a, l.hash), l.ids && (l.ids[0] = true)), o = e.VM.resolvePartial.call(this, o, a, l);
      var u = J.extend({}, l, { hooks: this.hooks, protoAccessControl: this.protoAccessControl }), h = e.VM.invokePartial.call(this, o, a, u);
      if (h == null && e.compile && (l.partials[l.name] = e.compile(o, n6.compilerOptions, e), h = l.partials[l.name](a, u)), h != null) {
        if (l.indent) {
          for (var c = h.split(`
`), p = 0, f = c.length; p < f && !(!c[p] && p + 1 === f); p++)
            c[p] = l.indent + c[p];
          h = c.join(`
`);
        }
        return h;
      } else
        throw new Z.default("The partial " + l.name + " could not be compiled when running in runtime-only mode");
    }
    var i = { strict: function(a, l, u) {
      if (!a || !(l in a))
        throw new Z.default('"' + l + '" not defined in ' + a, { loc: u });
      return i.lookupProperty(a, l);
    }, lookupProperty: function(a, l) {
      var u = a[l];
      if (u == null || Object.prototype.hasOwnProperty.call(a, l) || Nn.resultIsAllowed(u, i.protoAccessControl, l))
        return u;
    }, lookup: function(a, l) {
      for (var u = a.length, h = 0; h < u; h++) {
        var c = a[h] && i.lookupProperty(a[h], l);
        if (c != null)
          return a[h][l];
      }
    }, lambda: function(a, l) {
      return typeof a == "function" ? a.call(l) : a;
    }, escapeExpression: J.escapeExpression, invokePartial: r, fn: function(a) {
      var l = n6[a];
      return l.decorator = n6[a + "_d"], l;
    }, programs: [], program: function(a, l, u, h, c) {
      var p = this.programs[a], f = this.fn(a);
      return l || c || h || u ? p = wt(this, a, f, l, u, h, c) : p || (p = this.programs[a] = wt(this, a, f)), p;
    }, data: function(a, l) {
      for (; a && l--; )
        a = a._parent;
      return a;
    }, mergeIfNeeded: function(a, l) {
      var u = a || l;
      return a && l && a !== l && (u = J.extend({}, l, a)), u;
    }, nullContext: Object.seal({}), noop: e.VM.noop, compilerInfo: n6.compiler };
    function s(o) {
      var a = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], l = a.data;
      s._setup(a), !a.partial && n6.useData && (l = Ro(o, l));
      var u = void 0, h = n6.useBlockParams ? [] : void 0;
      n6.useDepths && (a.depths ? u = o != a.depths[0] ? [o].concat(a.depths) : a.depths : u = [o]);
      function c(p) {
        return "" + n6.main(i, p, i.helpers, i.partials, l, h, u);
      }
      return c = Bn(n6.main, c, i, a.depths || [], l, h), c(o, a);
    }
    return s.isTop = true, s._setup = function(o) {
      if (o.partial)
        i.protoAccessControl = o.protoAccessControl, i.helpers = o.helpers, i.partials = o.partials, i.decorators = o.decorators, i.hooks = o.hooks;
      else {
        var a = J.extend({}, e.helpers, o.helpers);
        No(a, i), i.helpers = a, n6.usePartial && (i.partials = i.mergeIfNeeded(o.partials, e.partials)), (n6.usePartial || n6.useDecorators) && (i.decorators = J.extend({}, e.decorators, o.decorators)), i.hooks = {}, i.protoAccessControl = Nn.createProtoAccessControl(o);
        var l = o.allowCallsToHelperMissing || t;
        Rn.moveHelperToHooks(i, "helperMissing", l), Rn.moveHelperToHooks(i, "blockHelperMissing", l);
      }
    }, s._child = function(o, a, l, u) {
      if (n6.useBlockParams && !l)
        throw new Z.default("must pass block params");
      if (n6.useDepths && !u)
        throw new Z.default("must pass parent depths");
      return wt(i, o, n6[o], a, 0, l, u);
    }, s;
  }
  function wt(n6, e, t, r, i, s, o) {
    function a(l) {
      var u = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], h = o;
      return o && l != o[0] && !(l === n6.nullContext && o[0] === null) && (h = [l].concat(o)), t(n6, l, n6.helpers, n6.partials, u.data || r, s && [u.blockParams].concat(s), h);
    }
    return a = Bn(t, a, n6, o, r, s), a.program = e, a.depth = o ? o.length : 0, a.blockParams = i || 0, a;
  }
  function To(n6, e, t) {
    return n6 ? !n6.call && !t.name && (t.name = n6, n6 = t.partials[n6]) : t.name === "@partial-block" ? n6 = t.data["partial-block"] : n6 = t.partials[t.name], n6;
  }
  function Lo(n6, e, t) {
    var r = t.data && t.data["partial-block"];
    t.partial = true, t.ids && (t.data.contextPath = t.ids[0] || t.data.contextPath);
    var i = void 0;
    if (t.fn && t.fn !== Dn && function() {
      t.data = Q.createFrame(t.data);
      var s = t.fn;
      i = t.data["partial-block"] = function(a) {
        var l = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return l.data = Q.createFrame(l.data), l.data["partial-block"] = r, s(a, l);
      }, s.partials && (t.partials = J.extend({}, t.partials, s.partials));
    }(), n6 === void 0 && i && (n6 = i), n6 === void 0)
      throw new Z.default("The partial " + t.name + " could not be found");
    if (n6 instanceof Function)
      return n6(e, t);
  }
  function Dn() {
    return "";
  }
  function Ro(n6, e) {
    return (!e || !("root" in e)) && (e = e ? Q.createFrame(e) : {}, e.root = n6), e;
  }
  function Bn(n6, e, t, r, i, s) {
    if (n6.decorator) {
      var o = {};
      e = n6.decorator(e, o, t, r && r[0], i, s, r), J.extend(e, o);
    }
    return e;
  }
  function No(n6, e) {
    Object.keys(n6).forEach(function(t) {
      var r = n6[t];
      n6[t] = Do(r, e);
    });
  }
  function Do(n6, e) {
    var t = e.lookupProperty;
    return Oo.wrapHelper(n6, function(r) {
      return J.extend({ lookupProperty: t }, r);
    });
  }
});
var _r = _((xt, qn) => {
  "use strict";
  xt.__esModule = true;
  xt.default = function(n6) {
    (function() {
      typeof globalThis != "object" && (Object.prototype.__defineGetter__("__magic__", function() {
        return this;
      }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__);
    })();
    var e = globalThis.Handlebars;
    n6.noConflict = function() {
      return globalThis.Handlebars === n6 && (globalThis.Handlebars = e), n6;
    };
  };
  qn.exports = xt.default;
});
var Vn = _((Et, Gn) => {
  "use strict";
  Et.__esModule = true;
  function vr(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  function kr(n6) {
    if (n6 && n6.__esModule)
      return n6;
    var e = {};
    if (n6 != null)
      for (var t in n6)
        Object.prototype.hasOwnProperty.call(n6, t) && (e[t] = n6[t]);
    return e.default = n6, e;
  }
  var Bo = St(), Fn = kr(Bo), Ho = Tn(), qo = vr(Ho), Fo = D(), zo = vr(Fo), Wo = A(), yr = kr(Wo), Go = Hn(), zn = kr(Go), Vo = _r(), Uo = vr(Vo);
  function Wn() {
    var n6 = new Fn.HandlebarsEnvironment();
    return yr.extend(n6, Fn), n6.SafeString = qo.default, n6.Exception = zo.default, n6.Utils = yr, n6.escapeExpression = yr.escapeExpression, n6.VM = zn, n6.template = function(e) {
      return zn.template(e, n6);
    }, n6;
  }
  var Be = Wn();
  Be.create = Wn;
  Uo.default(Be);
  Be.default = Be;
  Et.default = Be;
  Gn.exports = Et.default;
});
var Sr = _((Ct, Kn) => {
  "use strict";
  Ct.__esModule = true;
  var Un = { helpers: { helperExpression: function(e) {
    return e.type === "SubExpression" || (e.type === "MustacheStatement" || e.type === "BlockStatement") && !!(e.params && e.params.length || e.hash);
  }, scopedId: function(e) {
    return /^\.|this\b/.test(e.original);
  }, simpleId: function(e) {
    return e.parts.length === 1 && !Un.helpers.scopedId(e) && !e.depth;
  } } };
  Ct.default = Un;
  Kn.exports = Ct.default;
});
var Zn = _((It, Jn) => {
  "use strict";
  It.__esModule = true;
  var Ko = function() {
    var n6 = { trace: function() {
    }, yy: {}, symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 }, terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" }, productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]], performAction: function(i, s, o, a, l, u, h) {
      var c = u.length - 1;
      switch (l) {
        case 1:
          return u[c - 1];
        case 2:
          this.$ = a.prepareProgram(u[c]);
          break;
        case 3:
          this.$ = u[c];
          break;
        case 4:
          this.$ = u[c];
          break;
        case 5:
          this.$ = u[c];
          break;
        case 6:
          this.$ = u[c];
          break;
        case 7:
          this.$ = u[c];
          break;
        case 8:
          this.$ = u[c];
          break;
        case 9:
          this.$ = { type: "CommentStatement", value: a.stripComment(u[c]), strip: a.stripFlags(u[c], u[c]), loc: a.locInfo(this._$) };
          break;
        case 10:
          this.$ = { type: "ContentStatement", original: u[c], value: u[c], loc: a.locInfo(this._$) };
          break;
        case 11:
          this.$ = a.prepareRawBlock(u[c - 2], u[c - 1], u[c], this._$);
          break;
        case 12:
          this.$ = { path: u[c - 3], params: u[c - 2], hash: u[c - 1] };
          break;
        case 13:
          this.$ = a.prepareBlock(u[c - 3], u[c - 2], u[c - 1], u[c], false, this._$);
          break;
        case 14:
          this.$ = a.prepareBlock(u[c - 3], u[c - 2], u[c - 1], u[c], true, this._$);
          break;
        case 15:
          this.$ = { open: u[c - 5], path: u[c - 4], params: u[c - 3], hash: u[c - 2], blockParams: u[c - 1], strip: a.stripFlags(u[c - 5], u[c]) };
          break;
        case 16:
          this.$ = { path: u[c - 4], params: u[c - 3], hash: u[c - 2], blockParams: u[c - 1], strip: a.stripFlags(u[c - 5], u[c]) };
          break;
        case 17:
          this.$ = { path: u[c - 4], params: u[c - 3], hash: u[c - 2], blockParams: u[c - 1], strip: a.stripFlags(u[c - 5], u[c]) };
          break;
        case 18:
          this.$ = { strip: a.stripFlags(u[c - 1], u[c - 1]), program: u[c] };
          break;
        case 19:
          var p = a.prepareBlock(u[c - 2], u[c - 1], u[c], u[c], false, this._$), f = a.prepareProgram([p], u[c - 1].loc);
          f.chained = true, this.$ = { strip: u[c - 2].strip, program: f, chain: true };
          break;
        case 20:
          this.$ = u[c];
          break;
        case 21:
          this.$ = { path: u[c - 1], strip: a.stripFlags(u[c - 2], u[c]) };
          break;
        case 22:
          this.$ = a.prepareMustache(u[c - 3], u[c - 2], u[c - 1], u[c - 4], a.stripFlags(u[c - 4], u[c]), this._$);
          break;
        case 23:
          this.$ = a.prepareMustache(u[c - 3], u[c - 2], u[c - 1], u[c - 4], a.stripFlags(u[c - 4], u[c]), this._$);
          break;
        case 24:
          this.$ = { type: "PartialStatement", name: u[c - 3], params: u[c - 2], hash: u[c - 1], indent: "", strip: a.stripFlags(u[c - 4], u[c]), loc: a.locInfo(this._$) };
          break;
        case 25:
          this.$ = a.preparePartialBlock(u[c - 2], u[c - 1], u[c], this._$);
          break;
        case 26:
          this.$ = { path: u[c - 3], params: u[c - 2], hash: u[c - 1], strip: a.stripFlags(u[c - 4], u[c]) };
          break;
        case 27:
          this.$ = u[c];
          break;
        case 28:
          this.$ = u[c];
          break;
        case 29:
          this.$ = { type: "SubExpression", path: u[c - 3], params: u[c - 2], hash: u[c - 1], loc: a.locInfo(this._$) };
          break;
        case 30:
          this.$ = { type: "Hash", pairs: u[c], loc: a.locInfo(this._$) };
          break;
        case 31:
          this.$ = { type: "HashPair", key: a.id(u[c - 2]), value: u[c], loc: a.locInfo(this._$) };
          break;
        case 32:
          this.$ = a.id(u[c - 1]);
          break;
        case 33:
          this.$ = u[c];
          break;
        case 34:
          this.$ = u[c];
          break;
        case 35:
          this.$ = { type: "StringLiteral", value: u[c], original: u[c], loc: a.locInfo(this._$) };
          break;
        case 36:
          this.$ = { type: "NumberLiteral", value: Number(u[c]), original: Number(u[c]), loc: a.locInfo(this._$) };
          break;
        case 37:
          this.$ = { type: "BooleanLiteral", value: u[c] === "true", original: u[c] === "true", loc: a.locInfo(this._$) };
          break;
        case 38:
          this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: a.locInfo(this._$) };
          break;
        case 39:
          this.$ = { type: "NullLiteral", original: null, value: null, loc: a.locInfo(this._$) };
          break;
        case 40:
          this.$ = u[c];
          break;
        case 41:
          this.$ = u[c];
          break;
        case 42:
          this.$ = a.preparePath(true, u[c], this._$);
          break;
        case 43:
          this.$ = a.preparePath(false, u[c], this._$);
          break;
        case 44:
          u[c - 2].push({ part: a.id(u[c]), original: u[c], separator: u[c - 1] }), this.$ = u[c - 2];
          break;
        case 45:
          this.$ = [{ part: a.id(u[c]), original: u[c] }];
          break;
        case 46:
          this.$ = [];
          break;
        case 47:
          u[c - 1].push(u[c]);
          break;
        case 48:
          this.$ = [];
          break;
        case 49:
          u[c - 1].push(u[c]);
          break;
        case 50:
          this.$ = [];
          break;
        case 51:
          u[c - 1].push(u[c]);
          break;
        case 58:
          this.$ = [];
          break;
        case 59:
          u[c - 1].push(u[c]);
          break;
        case 64:
          this.$ = [];
          break;
        case 65:
          u[c - 1].push(u[c]);
          break;
        case 70:
          this.$ = [];
          break;
        case 71:
          u[c - 1].push(u[c]);
          break;
        case 78:
          this.$ = [];
          break;
        case 79:
          u[c - 1].push(u[c]);
          break;
        case 82:
          this.$ = [];
          break;
        case 83:
          u[c - 1].push(u[c]);
          break;
        case 86:
          this.$ = [];
          break;
        case 87:
          u[c - 1].push(u[c]);
          break;
        case 90:
          this.$ = [];
          break;
        case 91:
          u[c - 1].push(u[c]);
          break;
        case 94:
          this.$ = [];
          break;
        case 95:
          u[c - 1].push(u[c]);
          break;
        case 98:
          this.$ = [u[c]];
          break;
        case 99:
          u[c - 1].push(u[c]);
          break;
        case 100:
          this.$ = [u[c]];
          break;
        case 101:
          u[c - 1].push(u[c]);
          break;
      }
    }, table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }], defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] }, parseError: function(i, s) {
      throw new Error(i);
    }, parse: function(i) {
      var s = this, o = [0], a = [null], l = [], u = this.table, h = "", c = 0, p = 0, f = 0, y = 2, S = 1;
      this.lexer.setInput(i), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
      var I = this.lexer.yylloc;
      l.push(I);
      var x = this.lexer.options && this.lexer.options.ranges;
      typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
      function F(z) {
        o.length = o.length - 2 * z, a.length = a.length - z, l.length = l.length - z;
      }
      function ie() {
        var z;
        return z = s.lexer.lex() || 1, typeof z != "number" && (z = s.symbols_[z] || z), z;
      }
      for (var M, se, oe, N, gl, Zt, me = {}, Qe, U, jr, je; ; ) {
        if (oe = o[o.length - 1], this.defaultActions[oe] ? N = this.defaultActions[oe] : ((M === null || typeof M > "u") && (M = ie()), N = u[oe] && u[oe][M]), typeof N > "u" || !N.length || !N[0]) {
          var Qt = "";
          if (!f) {
            je = [];
            for (Qe in u[oe])
              this.terminals_[Qe] && Qe > 2 && je.push("'" + this.terminals_[Qe] + "'");
            this.lexer.showPosition ? Qt = "Parse error on line " + (c + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + je.join(", ") + ", got '" + (this.terminals_[M] || M) + "'" : Qt = "Parse error on line " + (c + 1) + ": Unexpected " + (M == 1 ? "end of input" : "'" + (this.terminals_[M] || M) + "'"), this.parseError(Qt, { text: this.lexer.match, token: this.terminals_[M] || M, line: this.lexer.yylineno, loc: I, expected: je });
          }
        }
        if (N[0] instanceof Array && N.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + oe + ", token: " + M);
        switch (N[0]) {
          case 1:
            o.push(M), a.push(this.lexer.yytext), l.push(this.lexer.yylloc), o.push(N[1]), M = null, se ? (M = se, se = null) : (p = this.lexer.yyleng, h = this.lexer.yytext, c = this.lexer.yylineno, I = this.lexer.yylloc, f > 0 && f--);
            break;
          case 2:
            if (U = this.productions_[N[1]][1], me.$ = a[a.length - U], me._$ = { first_line: l[l.length - (U || 1)].first_line, last_line: l[l.length - 1].last_line, first_column: l[l.length - (U || 1)].first_column, last_column: l[l.length - 1].last_column }, x && (me._$.range = [l[l.length - (U || 1)].range[0], l[l.length - 1].range[1]]), Zt = this.performAction.call(me, h, p, c, this.yy, N[1], a, l), typeof Zt < "u")
              return Zt;
            U && (o = o.slice(0, -1 * U * 2), a = a.slice(0, -1 * U), l = l.slice(0, -1 * U)), o.push(this.productions_[N[1]][0]), a.push(me.$), l.push(me._$), jr = u[o[o.length - 2]][o[o.length - 1]], o.push(jr);
            break;
          case 3:
            return true;
        }
      }
      return true;
    } }, e = function() {
      var r = { EOF: 1, parseError: function(s, o) {
        if (this.yy.parser)
          this.yy.parser.parseError(s, o);
        else
          throw new Error(s);
      }, setInput: function(s) {
        return this._input = s, this._more = this._less = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      }, input: function() {
        var s = this._input[0];
        this.yytext += s, this.yyleng++, this.offset++, this.match += s, this.matched += s;
        var o = s.match(/(?:\r\n?|\n).*/g);
        return o ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), s;
      }, unput: function(s) {
        var o = s.length, a = s.split(/(?:\r\n?|\n)/g);
        this._input = s + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - o - 1), this.offset -= o;
        var l = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), a.length - 1 && (this.yylineno -= a.length - 1);
        var u = this.yylloc.range;
        return this.yylloc = { first_line: this.yylloc.first_line, last_line: this.yylineno + 1, first_column: this.yylloc.first_column, last_column: a ? (a.length === l.length ? this.yylloc.first_column : 0) + l[l.length - a.length].length - a[0].length : this.yylloc.first_column - o }, this.options.ranges && (this.yylloc.range = [u[0], u[0] + this.yyleng - o]), this;
      }, more: function() {
        return this._more = true, this;
      }, less: function(s) {
        this.unput(this.match.slice(s));
      }, pastInput: function() {
        var s = this.matched.substr(0, this.matched.length - this.match.length);
        return (s.length > 20 ? "..." : "") + s.substr(-20).replace(/\n/g, "");
      }, upcomingInput: function() {
        var s = this.match;
        return s.length < 20 && (s += this._input.substr(0, 20 - s.length)), (s.substr(0, 20) + (s.length > 20 ? "..." : "")).replace(/\n/g, "");
      }, showPosition: function() {
        var s = this.pastInput(), o = new Array(s.length + 1).join("-");
        return s + this.upcomingInput() + `
` + o + "^";
      }, next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var s, o, a, l, u, h;
        this._more || (this.yytext = "", this.match = "");
        for (var c = this._currentRules(), p = 0; p < c.length && (a = this._input.match(this.rules[c[p]]), !(a && (!o || a[0].length > o[0].length) && (o = a, l = p, !this.options.flex))); p++)
          ;
        return o ? (h = o[0].match(/(?:\r\n?|\n).*/g), h && (this.yylineno += h.length), this.yylloc = { first_line: this.yylloc.last_line, last_line: this.yylineno + 1, first_column: this.yylloc.last_column, last_column: h ? h[h.length - 1].length - h[h.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + o[0].length }, this.yytext += o[0], this.match += o[0], this.matches = o, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._input = this._input.slice(o[0].length), this.matched += o[0], s = this.performAction.call(this, this.yy, this, c[l], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), s || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: "", token: null, line: this.yylineno });
      }, lex: function() {
        var s = this.next();
        return typeof s < "u" ? s : this.lex();
      }, begin: function(s) {
        this.conditionStack.push(s);
      }, popState: function() {
        return this.conditionStack.pop();
      }, _currentRules: function() {
        return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
      }, topState: function() {
        return this.conditionStack[this.conditionStack.length - 2];
      }, pushState: function(s) {
        this.begin(s);
      } };
      return r.options = {}, r.performAction = function(s, o, a, l) {
        function u(c, p) {
          return o.yytext = o.yytext.substring(c, o.yyleng - p + c);
        }
        var h = l;
        switch (a) {
          case 0:
            if (o.yytext.slice(-2) === "\\\\" ? (u(0, 1), this.begin("mu")) : o.yytext.slice(-1) === "\\" ? (u(0, 1), this.begin("emu")) : this.begin("mu"), o.yytext)
              return 15;
            break;
          case 1:
            return 15;
          case 2:
            return this.popState(), 15;
            break;
          case 3:
            return this.begin("raw"), 15;
            break;
          case 4:
            return this.popState(), this.conditionStack[this.conditionStack.length - 1] === "raw" ? 15 : (u(5, 9), "END_RAW_BLOCK");
          case 5:
            return 15;
          case 6:
            return this.popState(), 14;
            break;
          case 7:
            return 65;
          case 8:
            return 68;
          case 9:
            return 19;
          case 10:
            return this.popState(), this.begin("raw"), 23;
            break;
          case 11:
            return 55;
          case 12:
            return 60;
          case 13:
            return 29;
          case 14:
            return 47;
          case 15:
            return this.popState(), 44;
            break;
          case 16:
            return this.popState(), 44;
            break;
          case 17:
            return 34;
          case 18:
            return 39;
          case 19:
            return 51;
          case 20:
            return 48;
          case 21:
            this.unput(o.yytext), this.popState(), this.begin("com");
            break;
          case 22:
            return this.popState(), 14;
            break;
          case 23:
            return 48;
          case 24:
            return 73;
          case 25:
            return 72;
          case 26:
            return 72;
          case 27:
            return 87;
          case 28:
            break;
          case 29:
            return this.popState(), 54;
            break;
          case 30:
            return this.popState(), 33;
            break;
          case 31:
            return o.yytext = u(1, 2).replace(/\\"/g, '"'), 80;
            break;
          case 32:
            return o.yytext = u(1, 2).replace(/\\'/g, "'"), 80;
            break;
          case 33:
            return 85;
          case 34:
            return 82;
          case 35:
            return 82;
          case 36:
            return 83;
          case 37:
            return 84;
          case 38:
            return 81;
          case 39:
            return 75;
          case 40:
            return 77;
          case 41:
            return 72;
          case 42:
            return o.yytext = o.yytext.replace(/\\([\\\]])/g, "$1"), 72;
            break;
          case 43:
            return "INVALID";
          case 44:
            return 5;
        }
      }, r.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/], r.conditions = { mu: { rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], inclusive: false }, emu: { rules: [2], inclusive: false }, com: { rules: [6], inclusive: false }, raw: { rules: [3, 4, 5], inclusive: false }, INITIAL: { rules: [0, 1, 44], inclusive: true } }, r;
    }();
    n6.lexer = e;
    function t() {
      this.yy = {};
    }
    return t.prototype = n6, n6.Parser = t, new t();
  }();
  It.default = Ko;
  Jn.exports = It.default;
});
var At = _((Pt, Xn) => {
  "use strict";
  Pt.__esModule = true;
  function Jo(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  var Zo = D(), br = Jo(Zo);
  function Mt() {
    this.parents = [];
  }
  Mt.prototype = { constructor: Mt, mutating: false, acceptKey: function(e, t) {
    var r = this.accept(e[t]);
    if (this.mutating) {
      if (r && !Mt.prototype[r.type])
        throw new br.default('Unexpected node type "' + r.type + '" found when accepting ' + t + " on " + e.type);
      e[t] = r;
    }
  }, acceptRequired: function(e, t) {
    if (this.acceptKey(e, t), !e[t])
      throw new br.default(e.type + " requires " + t);
  }, acceptArray: function(e) {
    for (var t = 0, r = e.length; t < r; t++)
      this.acceptKey(e, t), e[t] || (e.splice(t, 1), t--, r--);
  }, accept: function(e) {
    if (e) {
      if (!this[e.type])
        throw new br.default("Unknown type: " + e.type, e);
      this.current && this.parents.unshift(this.current), this.current = e;
      var t = this[e.type](e);
      if (this.current = this.parents.shift(), !this.mutating || t)
        return t;
      if (t !== false)
        return e;
    }
  }, Program: function(e) {
    this.acceptArray(e.body);
  }, MustacheStatement: Ot, Decorator: Ot, BlockStatement: Qn, DecoratorBlock: Qn, PartialStatement: jn, PartialBlockStatement: function(e) {
    jn.call(this, e), this.acceptKey(e, "program");
  }, ContentStatement: function() {
  }, CommentStatement: function() {
  }, SubExpression: Ot, PathExpression: function() {
  }, StringLiteral: function() {
  }, NumberLiteral: function() {
  }, BooleanLiteral: function() {
  }, UndefinedLiteral: function() {
  }, NullLiteral: function() {
  }, Hash: function(e) {
    this.acceptArray(e.pairs);
  }, HashPair: function(e) {
    this.acceptRequired(e, "value");
  } };
  function Ot(n6) {
    this.acceptRequired(n6, "path"), this.acceptArray(n6.params), this.acceptKey(n6, "hash");
  }
  function Qn(n6) {
    Ot.call(this, n6), this.acceptKey(n6, "program"), this.acceptKey(n6, "inverse");
  }
  function jn(n6) {
    this.acceptRequired(n6, "name"), this.acceptArray(n6.params), this.acceptKey(n6, "hash");
  }
  Pt.default = Mt;
  Xn.exports = Pt.default;
});
var $n = _((Tt, Yn) => {
  "use strict";
  Tt.__esModule = true;
  function Qo(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  var jo = At(), Xo = Qo(jo);
  function V() {
    var n6 = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
    this.options = n6;
  }
  V.prototype = new Xo.default();
  V.prototype.Program = function(n6) {
    var e = !this.options.ignoreStandalone, t = !this.isRootSeen;
    this.isRootSeen = true;
    for (var r = n6.body, i = 0, s = r.length; i < s; i++) {
      var o = r[i], a = this.accept(o);
      if (a) {
        var l = wr(r, i, t), u = xr(r, i, t), h = a.openStandalone && l, c = a.closeStandalone && u, p = a.inlineStandalone && l && u;
        a.close && ue(r, i, true), a.open && ne(r, i, true), e && p && (ue(r, i), ne(r, i) && o.type === "PartialStatement" && (o.indent = /([ \t]+$)/.exec(r[i - 1].original)[1])), e && h && (ue((o.program || o.inverse).body), ne(r, i)), e && c && (ue(r, i), ne((o.inverse || o.program).body));
      }
    }
    return n6;
  };
  V.prototype.BlockStatement = V.prototype.DecoratorBlock = V.prototype.PartialBlockStatement = function(n6) {
    this.accept(n6.program), this.accept(n6.inverse);
    var e = n6.program || n6.inverse, t = n6.program && n6.inverse, r = t, i = t;
    if (t && t.chained)
      for (r = t.body[0].program; i.chained; )
        i = i.body[i.body.length - 1].program;
    var s = { open: n6.openStrip.open, close: n6.closeStrip.close, openStandalone: xr(e.body), closeStandalone: wr((r || e).body) };
    if (n6.openStrip.close && ue(e.body, null, true), t) {
      var o = n6.inverseStrip;
      o.open && ne(e.body, null, true), o.close && ue(r.body, null, true), n6.closeStrip.open && ne(i.body, null, true), !this.options.ignoreStandalone && wr(e.body) && xr(r.body) && (ne(e.body), ue(r.body));
    } else
      n6.closeStrip.open && ne(e.body, null, true);
    return s;
  };
  V.prototype.Decorator = V.prototype.MustacheStatement = function(n6) {
    return n6.strip;
  };
  V.prototype.PartialStatement = V.prototype.CommentStatement = function(n6) {
    var e = n6.strip || {};
    return { inlineStandalone: true, open: e.open, close: e.close };
  };
  function wr(n6, e, t) {
    e === void 0 && (e = n6.length);
    var r = n6[e - 1], i = n6[e - 2];
    if (!r)
      return t;
    if (r.type === "ContentStatement")
      return (i || !t ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(r.original);
  }
  function xr(n6, e, t) {
    e === void 0 && (e = -1);
    var r = n6[e + 1], i = n6[e + 2];
    if (!r)
      return t;
    if (r.type === "ContentStatement")
      return (i || !t ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(r.original);
  }
  function ue(n6, e, t) {
    var r = n6[e == null ? 0 : e + 1];
    if (!(!r || r.type !== "ContentStatement" || !t && r.rightStripped)) {
      var i = r.value;
      r.value = r.value.replace(t ? /^\s+/ : /^[ \t]*\r?\n?/, ""), r.rightStripped = r.value !== i;
    }
  }
  function ne(n6, e, t) {
    var r = n6[e == null ? n6.length - 1 : e - 1];
    if (!(!r || r.type !== "ContentStatement" || !t && r.leftStripped)) {
      var i = r.value;
      return r.value = r.value.replace(t ? /\s+$/ : /[ \t]+$/, ""), r.leftStripped = r.value !== i, r.leftStripped;
    }
  }
  Tt.default = V;
  Yn.exports = Tt.default;
});
var ei = _((B) => {
  "use strict";
  B.__esModule = true;
  B.SourceLocation = ea;
  B.id = ta;
  B.stripFlags = ra;
  B.stripComment = na;
  B.preparePath = ia;
  B.prepareMustache = sa;
  B.prepareRawBlock = oa;
  B.prepareBlock = aa;
  B.prepareProgram = la;
  B.preparePartialBlock = ua;
  function Yo(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  var $o = D(), Er = Yo($o);
  function Cr(n6, e) {
    if (e = e.path ? e.path.original : e, n6.path.original !== e) {
      var t = { loc: n6.path.loc };
      throw new Er.default(n6.path.original + " doesn't match " + e, t);
    }
  }
  function ea(n6, e) {
    this.source = n6, this.start = { line: e.first_line, column: e.first_column }, this.end = { line: e.last_line, column: e.last_column };
  }
  function ta(n6) {
    return /^\[.*\]$/.test(n6) ? n6.substring(1, n6.length - 1) : n6;
  }
  function ra(n6, e) {
    return { open: n6.charAt(2) === "~", close: e.charAt(e.length - 3) === "~" };
  }
  function na(n6) {
    return n6.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
  }
  function ia(n6, e, t) {
    t = this.locInfo(t);
    for (var r = n6 ? "@" : "", i = [], s = 0, o = 0, a = e.length; o < a; o++) {
      var l = e[o].part, u = e[o].original !== l;
      if (r += (e[o].separator || "") + l, !u && (l === ".." || l === "." || l === "this")) {
        if (i.length > 0)
          throw new Er.default("Invalid path: " + r, { loc: t });
        l === ".." && s++;
      } else
        i.push(l);
    }
    return { type: "PathExpression", data: n6, depth: s, parts: i, original: r, loc: t };
  }
  function sa(n6, e, t, r, i, s) {
    var o = r.charAt(3) || r.charAt(2), a = o !== "{" && o !== "&", l = /\*/.test(r);
    return { type: l ? "Decorator" : "MustacheStatement", path: n6, params: e, hash: t, escaped: a, strip: i, loc: this.locInfo(s) };
  }
  function oa(n6, e, t, r) {
    Cr(n6, t), r = this.locInfo(r);
    var i = { type: "Program", body: e, strip: {}, loc: r };
    return { type: "BlockStatement", path: n6.path, params: n6.params, hash: n6.hash, program: i, openStrip: {}, inverseStrip: {}, closeStrip: {}, loc: r };
  }
  function aa(n6, e, t, r, i, s) {
    r && r.path && Cr(n6, r);
    var o = /\*/.test(n6.open);
    e.blockParams = n6.blockParams;
    var a = void 0, l = void 0;
    if (t) {
      if (o)
        throw new Er.default("Unexpected inverse block on decorator", t);
      t.chain && (t.program.body[0].closeStrip = r.strip), l = t.strip, a = t.program;
    }
    return i && (i = a, a = e, e = i), { type: o ? "DecoratorBlock" : "BlockStatement", path: n6.path, params: n6.params, hash: n6.hash, program: e, inverse: a, openStrip: n6.strip, inverseStrip: l, closeStrip: r && r.strip, loc: this.locInfo(s) };
  }
  function la(n6, e) {
    if (!e && n6.length) {
      var t = n6[0].loc, r = n6[n6.length - 1].loc;
      t && r && (e = { source: t.source, start: { line: t.start.line, column: t.start.column }, end: { line: r.end.line, column: r.end.column } });
    }
    return { type: "Program", body: n6, strip: {}, loc: e };
  }
  function ua(n6, e, t, r) {
    return Cr(n6, t), { type: "PartialBlockStatement", name: n6.path, params: n6.params, hash: n6.hash, program: e, openStrip: n6.strip, closeStrip: t && t.strip, loc: this.locInfo(r) };
  }
});
var ni = _((He) => {
  "use strict";
  He.__esModule = true;
  He.parseWithoutProcessing = ri;
  He.parse = _a;
  function ca(n6) {
    if (n6 && n6.__esModule)
      return n6;
    var e = {};
    if (n6 != null)
      for (var t in n6)
        Object.prototype.hasOwnProperty.call(n6, t) && (e[t] = n6[t]);
    return e.default = n6, e;
  }
  function ti(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  var ha = Zn(), Ir = ti(ha), pa = $n(), fa = ti(pa), da = ei(), ga = ca(da), ma = A();
  He.parser = Ir.default;
  var Lt = {};
  ma.extend(Lt, ga);
  function ri(n6, e) {
    if (n6.type === "Program")
      return n6;
    Ir.default.yy = Lt, Lt.locInfo = function(r) {
      return new Lt.SourceLocation(e && e.srcName, r);
    };
    var t = Ir.default.parse(n6);
    return t;
  }
  function _a(n6, e) {
    var t = ri(n6, e), r = new fa.default(e);
    return r.accept(t);
  }
});
var ai = _((We) => {
  "use strict";
  We.__esModule = true;
  We.Compiler = Mr;
  We.precompile = Sa;
  We.compile = ba;
  function si(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  var ya = D(), Fe = si(ya), ze = A(), va = Sr(), qe = si(va), ka = [].slice;
  function Mr() {
  }
  Mr.prototype = { compiler: Mr, equals: function(e) {
    var t = this.opcodes.length;
    if (e.opcodes.length !== t)
      return false;
    for (var r = 0; r < t; r++) {
      var i = this.opcodes[r], s = e.opcodes[r];
      if (i.opcode !== s.opcode || !oi(i.args, s.args))
        return false;
    }
    t = this.children.length;
    for (var r = 0; r < t; r++)
      if (!this.children[r].equals(e.children[r]))
        return false;
    return true;
  }, guid: 0, compile: function(e, t) {
    return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = t, this.stringParams = t.stringParams, this.trackIds = t.trackIds, t.blockParams = t.blockParams || [], t.knownHelpers = ze.extend(/* @__PURE__ */ Object.create(null), { helperMissing: true, blockHelperMissing: true, each: true, if: true, unless: true, with: true, log: true, lookup: true }, t.knownHelpers), this.accept(e);
  }, compileProgram: function(e) {
    var t = new this.compiler(), r = t.compile(e, this.options), i = this.guid++;
    return this.usePartial = this.usePartial || r.usePartial, this.children[i] = r, this.useDepths = this.useDepths || r.useDepths, i;
  }, accept: function(e) {
    if (!this[e.type])
      throw new Fe.default("Unknown type: " + e.type, e);
    this.sourceNode.unshift(e);
    var t = this[e.type](e);
    return this.sourceNode.shift(), t;
  }, Program: function(e) {
    this.options.blockParams.unshift(e.blockParams);
    for (var t = e.body, r = t.length, i = 0; i < r; i++)
      this.accept(t[i]);
    return this.options.blockParams.shift(), this.isSimple = r === 1, this.blockParams = e.blockParams ? e.blockParams.length : 0, this;
  }, BlockStatement: function(e) {
    ii(e);
    var t = e.program, r = e.inverse;
    t = t && this.compileProgram(t), r = r && this.compileProgram(r);
    var i = this.classifySexpr(e);
    i === "helper" ? this.helperSexpr(e, t, r) : i === "simple" ? (this.simpleSexpr(e), this.opcode("pushProgram", t), this.opcode("pushProgram", r), this.opcode("emptyHash"), this.opcode("blockValue", e.path.original)) : (this.ambiguousSexpr(e, t, r), this.opcode("pushProgram", t), this.opcode("pushProgram", r), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
  }, DecoratorBlock: function(e) {
    var t = e.program && this.compileProgram(e.program), r = this.setupFullMustacheParams(e, t, void 0), i = e.path;
    this.useDecorators = true, this.opcode("registerDecorator", r.length, i.original);
  }, PartialStatement: function(e) {
    this.usePartial = true;
    var t = e.program;
    t && (t = this.compileProgram(e.program));
    var r = e.params;
    if (r.length > 1)
      throw new Fe.default("Unsupported number of partial arguments: " + r.length, e);
    r.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : r.push({ type: "PathExpression", parts: [], depth: 0 }));
    var i = e.name.original, s = e.name.type === "SubExpression";
    s && this.accept(e.name), this.setupFullMustacheParams(e, t, void 0, true);
    var o = e.indent || "";
    this.options.preventIndent && o && (this.opcode("appendContent", o), o = ""), this.opcode("invokePartial", s, i, o), this.opcode("append");
  }, PartialBlockStatement: function(e) {
    this.PartialStatement(e);
  }, MustacheStatement: function(e) {
    this.SubExpression(e), e.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
  }, Decorator: function(e) {
    this.DecoratorBlock(e);
  }, ContentStatement: function(e) {
    e.value && this.opcode("appendContent", e.value);
  }, CommentStatement: function() {
  }, SubExpression: function(e) {
    ii(e);
    var t = this.classifySexpr(e);
    t === "simple" ? this.simpleSexpr(e) : t === "helper" ? this.helperSexpr(e) : this.ambiguousSexpr(e);
  }, ambiguousSexpr: function(e, t, r) {
    var i = e.path, s = i.parts[0], o = t != null || r != null;
    this.opcode("getContext", i.depth), this.opcode("pushProgram", t), this.opcode("pushProgram", r), i.strict = true, this.accept(i), this.opcode("invokeAmbiguous", s, o);
  }, simpleSexpr: function(e) {
    var t = e.path;
    t.strict = true, this.accept(t), this.opcode("resolvePossibleLambda");
  }, helperSexpr: function(e, t, r) {
    var i = this.setupFullMustacheParams(e, t, r), s = e.path, o = s.parts[0];
    if (this.options.knownHelpers[o])
      this.opcode("invokeKnownHelper", i.length, o);
    else {
      if (this.options.knownHelpersOnly)
        throw new Fe.default("You specified knownHelpersOnly, but used the unknown helper " + o, e);
      s.strict = true, s.falsy = true, this.accept(s), this.opcode("invokeHelper", i.length, s.original, qe.default.helpers.simpleId(s));
    }
  }, PathExpression: function(e) {
    this.addDepth(e.depth), this.opcode("getContext", e.depth);
    var t = e.parts[0], r = qe.default.helpers.scopedId(e), i = !e.depth && !r && this.blockParamIndex(t);
    i ? this.opcode("lookupBlockParam", i, e.parts) : t ? e.data ? (this.options.data = true, this.opcode("lookupData", e.depth, e.parts, e.strict)) : this.opcode("lookupOnContext", e.parts, e.falsy, e.strict, r) : this.opcode("pushContext");
  }, StringLiteral: function(e) {
    this.opcode("pushString", e.value);
  }, NumberLiteral: function(e) {
    this.opcode("pushLiteral", e.value);
  }, BooleanLiteral: function(e) {
    this.opcode("pushLiteral", e.value);
  }, UndefinedLiteral: function() {
    this.opcode("pushLiteral", "undefined");
  }, NullLiteral: function() {
    this.opcode("pushLiteral", "null");
  }, Hash: function(e) {
    var t = e.pairs, r = 0, i = t.length;
    for (this.opcode("pushHash"); r < i; r++)
      this.pushParam(t[r].value);
    for (; r--; )
      this.opcode("assignToHash", t[r].key);
    this.opcode("popHash");
  }, opcode: function(e) {
    this.opcodes.push({ opcode: e, args: ka.call(arguments, 1), loc: this.sourceNode[0].loc });
  }, addDepth: function(e) {
    e && (this.useDepths = true);
  }, classifySexpr: function(e) {
    var t = qe.default.helpers.simpleId(e.path), r = t && !!this.blockParamIndex(e.path.parts[0]), i = !r && qe.default.helpers.helperExpression(e), s = !r && (i || t);
    if (s && !i) {
      var o = e.path.parts[0], a = this.options;
      a.knownHelpers[o] ? i = true : a.knownHelpersOnly && (s = false);
    }
    return i ? "helper" : s ? "ambiguous" : "simple";
  }, pushParams: function(e) {
    for (var t = 0, r = e.length; t < r; t++)
      this.pushParam(e[t]);
  }, pushParam: function(e) {
    var t = e.value != null ? e.value : e.original || "";
    if (this.stringParams)
      t.replace && (t = t.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), e.depth && this.addDepth(e.depth), this.opcode("getContext", e.depth || 0), this.opcode("pushStringParam", t, e.type), e.type === "SubExpression" && this.accept(e);
    else {
      if (this.trackIds) {
        var r = void 0;
        if (e.parts && !qe.default.helpers.scopedId(e) && !e.depth && (r = this.blockParamIndex(e.parts[0])), r) {
          var i = e.parts.slice(1).join(".");
          this.opcode("pushId", "BlockParam", r, i);
        } else
          t = e.original || t, t.replace && (t = t.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", e.type, t);
      }
      this.accept(e);
    }
  }, setupFullMustacheParams: function(e, t, r, i) {
    var s = e.params;
    return this.pushParams(s), this.opcode("pushProgram", t), this.opcode("pushProgram", r), e.hash ? this.accept(e.hash) : this.opcode("emptyHash", i), s;
  }, blockParamIndex: function(e) {
    for (var t = 0, r = this.options.blockParams.length; t < r; t++) {
      var i = this.options.blockParams[t], s = i && ze.indexOf(i, e);
      if (i && s >= 0)
        return [t, s];
    }
  } };
  function Sa(n6, e, t) {
    if (n6 == null || typeof n6 != "string" && n6.type !== "Program")
      throw new Fe.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + n6);
    e = e || {}, "data" in e || (e.data = true), e.compat && (e.useDepths = true);
    var r = t.parse(n6, e), i = new t.Compiler().compile(r, e);
    return new t.JavaScriptCompiler().compile(i, e);
  }
  function ba(n6, e, t) {
    if (e === void 0 && (e = {}), n6 == null || typeof n6 != "string" && n6.type !== "Program")
      throw new Fe.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + n6);
    e = ze.extend({}, e), "data" in e || (e.data = true), e.compat && (e.useDepths = true);
    var r = void 0;
    function i() {
      var o = t.parse(n6, e), a = new t.Compiler().compile(o, e), l = new t.JavaScriptCompiler().compile(a, e, void 0, true);
      return t.template(l);
    }
    function s(o, a) {
      return r || (r = i()), r.call(this, o, a);
    }
    return s._setup = function(o) {
      return r || (r = i()), r._setup(o);
    }, s._child = function(o, a, l, u) {
      return r || (r = i()), r._child(o, a, l, u);
    }, s;
  }
  function oi(n6, e) {
    if (n6 === e)
      return true;
    if (ze.isArray(n6) && ze.isArray(e) && n6.length === e.length) {
      for (var t = 0; t < n6.length; t++)
        if (!oi(n6[t], e[t]))
          return false;
      return true;
    }
  }
  function ii(n6) {
    if (!n6.path.parts) {
      var e = n6.path;
      n6.path = { type: "PathExpression", data: false, depth: 0, parts: [e.original + ""], original: e.original + "", loc: e.loc };
    }
  }
});
var ui = _((Or) => {
  "use strict";
  var li = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  Or.encode = function(n6) {
    if (0 <= n6 && n6 < li.length)
      return li[n6];
    throw new TypeError("Must be between 0 and 63: " + n6);
  };
  Or.decode = function(n6) {
    var e = 65, t = 90, r = 97, i = 122, s = 48, o = 57, a = 43, l = 47, u = 26, h = 52;
    return e <= n6 && n6 <= t ? n6 - e : r <= n6 && n6 <= i ? n6 - r + u : s <= n6 && n6 <= o ? n6 - s + h : n6 == a ? 62 : n6 == l ? 63 : -1;
  };
});
var Tr = _((Ar) => {
  "use strict";
  var ci = ui(), Pr = 5, hi = 1 << Pr, pi = hi - 1, fi = hi;
  function wa(n6) {
    return n6 < 0 ? (-n6 << 1) + 1 : (n6 << 1) + 0;
  }
  function xa(n6) {
    var e = (n6 & 1) === 1, t = n6 >> 1;
    return e ? -t : t;
  }
  Ar.encode = function(e) {
    var t = "", r, i = wa(e);
    do
      r = i & pi, i >>>= Pr, i > 0 && (r |= fi), t += ci.encode(r);
    while (i > 0);
    return t;
  };
  Ar.decode = function(e, t, r) {
    var i = e.length, s = 0, o = 0, a, l;
    do {
      if (t >= i)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (l = ci.decode(e.charCodeAt(t++)), l === -1)
        throw new Error("Invalid base64 digit: " + e.charAt(t - 1));
      a = !!(l & fi), l &= pi, s = s + (l << o), o += Pr;
    } while (a);
    r.value = xa(s), r.rest = t;
  };
});
var xe = _((P) => {
  "use strict";
  function Ea(n6, e, t) {
    if (e in n6)
      return n6[e];
    if (arguments.length === 3)
      return t;
    throw new Error('"' + e + '" is a required argument.');
  }
  P.getArg = Ea;
  var di = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, Ca = /^data:.+\,.+$/;
  function Ge(n6) {
    var e = n6.match(di);
    return e ? { scheme: e[1], auth: e[2], host: e[3], port: e[4], path: e[5] } : null;
  }
  P.urlParse = Ge;
  function be(n6) {
    var e = "";
    return n6.scheme && (e += n6.scheme + ":"), e += "//", n6.auth && (e += n6.auth + "@"), n6.host && (e += n6.host), n6.port && (e += ":" + n6.port), n6.path && (e += n6.path), e;
  }
  P.urlGenerate = be;
  function Lr(n6) {
    var e = n6, t = Ge(n6);
    if (t) {
      if (!t.path)
        return n6;
      e = t.path;
    }
    for (var r = P.isAbsolute(e), i = e.split(/\/+/), s, o = 0, a = i.length - 1; a >= 0; a--)
      s = i[a], s === "." ? i.splice(a, 1) : s === ".." ? o++ : o > 0 && (s === "" ? (i.splice(a + 1, o), o = 0) : (i.splice(a, 2), o--));
    return e = i.join("/"), e === "" && (e = r ? "/" : "."), t ? (t.path = e, be(t)) : e;
  }
  P.normalize = Lr;
  function gi(n6, e) {
    n6 === "" && (n6 = "."), e === "" && (e = ".");
    var t = Ge(e), r = Ge(n6);
    if (r && (n6 = r.path || "/"), t && !t.scheme)
      return r && (t.scheme = r.scheme), be(t);
    if (t || e.match(Ca))
      return e;
    if (r && !r.host && !r.path)
      return r.host = e, be(r);
    var i = e.charAt(0) === "/" ? e : Lr(n6.replace(/\/+$/, "") + "/" + e);
    return r ? (r.path = i, be(r)) : i;
  }
  P.join = gi;
  P.isAbsolute = function(n6) {
    return n6.charAt(0) === "/" || di.test(n6);
  };
  function Ia(n6, e) {
    n6 === "" && (n6 = "."), n6 = n6.replace(/\/$/, "");
    for (var t = 0; e.indexOf(n6 + "/") !== 0; ) {
      var r = n6.lastIndexOf("/");
      if (r < 0 || (n6 = n6.slice(0, r), n6.match(/^([^\/]+:\/)?\/*$/)))
        return e;
      ++t;
    }
    return Array(t + 1).join("../") + e.substr(n6.length + 1);
  }
  P.relative = Ia;
  var mi = function() {
    var n6 = /* @__PURE__ */ Object.create(null);
    return !("__proto__" in n6);
  }();
  function _i(n6) {
    return n6;
  }
  function Ma(n6) {
    return yi(n6) ? "$" + n6 : n6;
  }
  P.toSetString = mi ? _i : Ma;
  function Oa(n6) {
    return yi(n6) ? n6.slice(1) : n6;
  }
  P.fromSetString = mi ? _i : Oa;
  function yi(n6) {
    if (!n6)
      return false;
    var e = n6.length;
    if (e < 9 || n6.charCodeAt(e - 1) !== 95 || n6.charCodeAt(e - 2) !== 95 || n6.charCodeAt(e - 3) !== 111 || n6.charCodeAt(e - 4) !== 116 || n6.charCodeAt(e - 5) !== 111 || n6.charCodeAt(e - 6) !== 114 || n6.charCodeAt(e - 7) !== 112 || n6.charCodeAt(e - 8) !== 95 || n6.charCodeAt(e - 9) !== 95)
      return false;
    for (var t = e - 10; t >= 0; t--)
      if (n6.charCodeAt(t) !== 36)
        return false;
    return true;
  }
  function Pa(n6, e, t) {
    var r = we(n6.source, e.source);
    return r !== 0 || (r = n6.originalLine - e.originalLine, r !== 0) || (r = n6.originalColumn - e.originalColumn, r !== 0 || t) || (r = n6.generatedColumn - e.generatedColumn, r !== 0) || (r = n6.generatedLine - e.generatedLine, r !== 0) ? r : we(n6.name, e.name);
  }
  P.compareByOriginalPositions = Pa;
  function Aa(n6, e, t) {
    var r = n6.generatedLine - e.generatedLine;
    return r !== 0 || (r = n6.generatedColumn - e.generatedColumn, r !== 0 || t) || (r = we(n6.source, e.source), r !== 0) || (r = n6.originalLine - e.originalLine, r !== 0) || (r = n6.originalColumn - e.originalColumn, r !== 0) ? r : we(n6.name, e.name);
  }
  P.compareByGeneratedPositionsDeflated = Aa;
  function we(n6, e) {
    return n6 === e ? 0 : n6 === null ? 1 : e === null ? -1 : n6 > e ? 1 : -1;
  }
  function Ta(n6, e) {
    var t = n6.generatedLine - e.generatedLine;
    return t !== 0 || (t = n6.generatedColumn - e.generatedColumn, t !== 0) || (t = we(n6.source, e.source), t !== 0) || (t = n6.originalLine - e.originalLine, t !== 0) || (t = n6.originalColumn - e.originalColumn, t !== 0) ? t : we(n6.name, e.name);
  }
  P.compareByGeneratedPositionsInflated = Ta;
  function La(n6) {
    return JSON.parse(n6.replace(/^\)]}'[^\n]*\n/, ""));
  }
  P.parseSourceMapInput = La;
  function Ra(n6, e, t) {
    if (e = e || "", n6 && (n6[n6.length - 1] !== "/" && e[0] !== "/" && (n6 += "/"), e = n6 + e), t) {
      var r = Ge(t);
      if (!r)
        throw new Error("sourceMapURL could not be parsed");
      if (r.path) {
        var i = r.path.lastIndexOf("/");
        i >= 0 && (r.path = r.path.substring(0, i + 1));
      }
      e = gi(be(r), e);
    }
    return Lr(e);
  }
  P.computeSourceURL = Ra;
});
var Dr = _((vi) => {
  "use strict";
  var Rr = xe(), Nr = Object.prototype.hasOwnProperty, ce = typeof Map < "u";
  function j() {
    this._array = [], this._set = ce ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  j.fromArray = function(e, t) {
    for (var r = new j(), i = 0, s = e.length; i < s; i++)
      r.add(e[i], t);
    return r;
  };
  j.prototype.size = function() {
    return ce ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  };
  j.prototype.add = function(e, t) {
    var r = ce ? e : Rr.toSetString(e), i = ce ? this.has(e) : Nr.call(this._set, r), s = this._array.length;
    (!i || t) && this._array.push(e), i || (ce ? this._set.set(e, s) : this._set[r] = s);
  };
  j.prototype.has = function(e) {
    if (ce)
      return this._set.has(e);
    var t = Rr.toSetString(e);
    return Nr.call(this._set, t);
  };
  j.prototype.indexOf = function(e) {
    if (ce) {
      var t = this._set.get(e);
      if (t >= 0)
        return t;
    } else {
      var r = Rr.toSetString(e);
      if (Nr.call(this._set, r))
        return this._set[r];
    }
    throw new Error('"' + e + '" is not in the set.');
  };
  j.prototype.at = function(e) {
    if (e >= 0 && e < this._array.length)
      return this._array[e];
    throw new Error("No element indexed by " + e);
  };
  j.prototype.toArray = function() {
    return this._array.slice();
  };
  vi.ArraySet = j;
});
var bi = _((Si) => {
  "use strict";
  var ki = xe();
  function Na(n6, e) {
    var t = n6.generatedLine, r = e.generatedLine, i = n6.generatedColumn, s = e.generatedColumn;
    return r > t || r == t && s >= i || ki.compareByGeneratedPositionsInflated(n6, e) <= 0;
  }
  function Rt() {
    this._array = [], this._sorted = true, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  Rt.prototype.unsortedForEach = function(e, t) {
    this._array.forEach(e, t);
  };
  Rt.prototype.add = function(e) {
    Na(this._last, e) ? (this._last = e, this._array.push(e)) : (this._sorted = false, this._array.push(e));
  };
  Rt.prototype.toArray = function() {
    return this._sorted || (this._array.sort(ki.compareByGeneratedPositionsInflated), this._sorted = true), this._array;
  };
  Si.MappingList = Rt;
});
var Br = _((wi) => {
  "use strict";
  var Ve = Tr(), C = xe(), Nt = Dr().ArraySet, Da = bi().MappingList;
  function H(n6) {
    n6 || (n6 = {}), this._file = C.getArg(n6, "file", null), this._sourceRoot = C.getArg(n6, "sourceRoot", null), this._skipValidation = C.getArg(n6, "skipValidation", false), this._sources = new Nt(), this._names = new Nt(), this._mappings = new Da(), this._sourcesContents = null;
  }
  H.prototype._version = 3;
  H.fromSourceMap = function(e) {
    var t = e.sourceRoot, r = new H({ file: e.file, sourceRoot: t });
    return e.eachMapping(function(i) {
      var s = { generated: { line: i.generatedLine, column: i.generatedColumn } };
      i.source != null && (s.source = i.source, t != null && (s.source = C.relative(t, s.source)), s.original = { line: i.originalLine, column: i.originalColumn }, i.name != null && (s.name = i.name)), r.addMapping(s);
    }), e.sources.forEach(function(i) {
      var s = i;
      t !== null && (s = C.relative(t, i)), r._sources.has(s) || r._sources.add(s);
      var o = e.sourceContentFor(i);
      o != null && r.setSourceContent(i, o);
    }), r;
  };
  H.prototype.addMapping = function(e) {
    var t = C.getArg(e, "generated"), r = C.getArg(e, "original", null), i = C.getArg(e, "source", null), s = C.getArg(e, "name", null);
    this._skipValidation || this._validateMapping(t, r, i, s), i != null && (i = String(i), this._sources.has(i) || this._sources.add(i)), s != null && (s = String(s), this._names.has(s) || this._names.add(s)), this._mappings.add({ generatedLine: t.line, generatedColumn: t.column, originalLine: r != null && r.line, originalColumn: r != null && r.column, source: i, name: s });
  };
  H.prototype.setSourceContent = function(e, t) {
    var r = e;
    this._sourceRoot != null && (r = C.relative(this._sourceRoot, r)), t != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[C.toSetString(r)] = t) : this._sourcesContents && (delete this._sourcesContents[C.toSetString(r)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  };
  H.prototype.applySourceMap = function(e, t, r) {
    var i = t;
    if (t == null) {
      if (e.file == null)
        throw new Error(`SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`);
      i = e.file;
    }
    var s = this._sourceRoot;
    s != null && (i = C.relative(s, i));
    var o = new Nt(), a = new Nt();
    this._mappings.unsortedForEach(function(l) {
      if (l.source === i && l.originalLine != null) {
        var u = e.originalPositionFor({ line: l.originalLine, column: l.originalColumn });
        u.source != null && (l.source = u.source, r != null && (l.source = C.join(r, l.source)), s != null && (l.source = C.relative(s, l.source)), l.originalLine = u.line, l.originalColumn = u.column, u.name != null && (l.name = u.name));
      }
      var h = l.source;
      h != null && !o.has(h) && o.add(h);
      var c = l.name;
      c != null && !a.has(c) && a.add(c);
    }, this), this._sources = o, this._names = a, e.sources.forEach(function(l) {
      var u = e.sourceContentFor(l);
      u != null && (r != null && (l = C.join(r, l)), s != null && (l = C.relative(s, l)), this.setSourceContent(l, u));
    }, this);
  };
  H.prototype._validateMapping = function(e, t, r, i) {
    if (t && typeof t.line != "number" && typeof t.column != "number")
      throw new Error("original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.");
    if (!(e && "line" in e && "column" in e && e.line > 0 && e.column >= 0 && !t && !r && !i)) {
      if (e && "line" in e && "column" in e && t && "line" in t && "column" in t && e.line > 0 && e.column >= 0 && t.line > 0 && t.column >= 0 && r)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({ generated: e, source: r, original: t, name: i }));
    }
  };
  H.prototype._serializeMappings = function() {
    for (var e = 0, t = 1, r = 0, i = 0, s = 0, o = 0, a = "", l, u, h, c, p = this._mappings.toArray(), f = 0, y = p.length; f < y; f++) {
      if (u = p[f], l = "", u.generatedLine !== t)
        for (e = 0; u.generatedLine !== t; )
          l += ";", t++;
      else if (f > 0) {
        if (!C.compareByGeneratedPositionsInflated(u, p[f - 1]))
          continue;
        l += ",";
      }
      l += Ve.encode(u.generatedColumn - e), e = u.generatedColumn, u.source != null && (c = this._sources.indexOf(u.source), l += Ve.encode(c - o), o = c, l += Ve.encode(u.originalLine - 1 - i), i = u.originalLine - 1, l += Ve.encode(u.originalColumn - r), r = u.originalColumn, u.name != null && (h = this._names.indexOf(u.name), l += Ve.encode(h - s), s = h)), a += l;
    }
    return a;
  };
  H.prototype._generateSourcesContent = function(e, t) {
    return e.map(function(r) {
      if (!this._sourcesContents)
        return null;
      t != null && (r = C.relative(t, r));
      var i = C.toSetString(r);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, i) ? this._sourcesContents[i] : null;
    }, this);
  };
  H.prototype.toJSON = function() {
    var e = { version: this._version, sources: this._sources.toArray(), names: this._names.toArray(), mappings: this._serializeMappings() };
    return this._file != null && (e.file = this._file), this._sourceRoot != null && (e.sourceRoot = this._sourceRoot), this._sourcesContents && (e.sourcesContent = this._generateSourcesContent(e.sources, e.sourceRoot)), e;
  };
  H.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  };
  wi.SourceMapGenerator = H;
});
var xi = _((he) => {
  "use strict";
  he.GREATEST_LOWER_BOUND = 1;
  he.LEAST_UPPER_BOUND = 2;
  function Hr(n6, e, t, r, i, s) {
    var o = Math.floor((e - n6) / 2) + n6, a = i(t, r[o], true);
    return a === 0 ? o : a > 0 ? e - o > 1 ? Hr(o, e, t, r, i, s) : s == he.LEAST_UPPER_BOUND ? e < r.length ? e : -1 : o : o - n6 > 1 ? Hr(n6, o, t, r, i, s) : s == he.LEAST_UPPER_BOUND ? o : n6 < 0 ? -1 : n6;
  }
  he.search = function(e, t, r, i) {
    if (t.length === 0)
      return -1;
    var s = Hr(-1, t.length, e, t, r, i || he.GREATEST_LOWER_BOUND);
    if (s < 0)
      return -1;
    for (; s - 1 >= 0 && r(t[s], t[s - 1], true) === 0; )
      --s;
    return s;
  };
});
var Ci = _((Ei) => {
  "use strict";
  function qr(n6, e, t) {
    var r = n6[e];
    n6[e] = n6[t], n6[t] = r;
  }
  function Ba(n6, e) {
    return Math.round(n6 + Math.random() * (e - n6));
  }
  function Fr(n6, e, t, r) {
    if (t < r) {
      var i = Ba(t, r), s = t - 1;
      qr(n6, i, r);
      for (var o = n6[r], a = t; a < r; a++)
        e(n6[a], o) <= 0 && (s += 1, qr(n6, s, a));
      qr(n6, s + 1, a);
      var l = s + 1;
      Fr(n6, e, t, l - 1), Fr(n6, e, l + 1, r);
    }
  }
  Ei.quickSort = function(n6, e) {
    Fr(n6, e, 0, n6.length - 1);
  };
});
var Mi = _((Dt) => {
  "use strict";
  var g = xe(), zr = xi(), Ee = Dr().ArraySet, Ha = Tr(), Ue = Ci().quickSort;
  function w(n6, e) {
    var t = n6;
    return typeof n6 == "string" && (t = g.parseSourceMapInput(n6)), t.sections != null ? new q(t, e) : new O(t, e);
  }
  w.fromSourceMap = function(n6, e) {
    return O.fromSourceMap(n6, e);
  };
  w.prototype._version = 3;
  w.prototype.__generatedMappings = null;
  Object.defineProperty(w.prototype, "_generatedMappings", { configurable: true, enumerable: true, get: function() {
    return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
  } });
  w.prototype.__originalMappings = null;
  Object.defineProperty(w.prototype, "_originalMappings", { configurable: true, enumerable: true, get: function() {
    return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
  } });
  w.prototype._charIsMappingSeparator = function(e, t) {
    var r = e.charAt(t);
    return r === ";" || r === ",";
  };
  w.prototype._parseMappings = function(e, t) {
    throw new Error("Subclasses must implement _parseMappings");
  };
  w.GENERATED_ORDER = 1;
  w.ORIGINAL_ORDER = 2;
  w.GREATEST_LOWER_BOUND = 1;
  w.LEAST_UPPER_BOUND = 2;
  w.prototype.eachMapping = function(e, t, r) {
    var i = t || null, s = r || w.GENERATED_ORDER, o;
    switch (s) {
      case w.GENERATED_ORDER:
        o = this._generatedMappings;
        break;
      case w.ORIGINAL_ORDER:
        o = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var a = this.sourceRoot;
    o.map(function(l) {
      var u = l.source === null ? null : this._sources.at(l.source);
      return u = g.computeSourceURL(a, u, this._sourceMapURL), { source: u, generatedLine: l.generatedLine, generatedColumn: l.generatedColumn, originalLine: l.originalLine, originalColumn: l.originalColumn, name: l.name === null ? null : this._names.at(l.name) };
    }, this).forEach(e, i);
  };
  w.prototype.allGeneratedPositionsFor = function(e) {
    var t = g.getArg(e, "line"), r = { source: g.getArg(e, "source"), originalLine: t, originalColumn: g.getArg(e, "column", 0) };
    if (r.source = this._findSourceIndex(r.source), r.source < 0)
      return [];
    var i = [], s = this._findMapping(r, this._originalMappings, "originalLine", "originalColumn", g.compareByOriginalPositions, zr.LEAST_UPPER_BOUND);
    if (s >= 0) {
      var o = this._originalMappings[s];
      if (e.column === void 0)
        for (var a = o.originalLine; o && o.originalLine === a; )
          i.push({ line: g.getArg(o, "generatedLine", null), column: g.getArg(o, "generatedColumn", null), lastColumn: g.getArg(o, "lastGeneratedColumn", null) }), o = this._originalMappings[++s];
      else
        for (var l = o.originalColumn; o && o.originalLine === t && o.originalColumn == l; )
          i.push({ line: g.getArg(o, "generatedLine", null), column: g.getArg(o, "generatedColumn", null), lastColumn: g.getArg(o, "lastGeneratedColumn", null) }), o = this._originalMappings[++s];
    }
    return i;
  };
  Dt.SourceMapConsumer = w;
  function O(n6, e) {
    var t = n6;
    typeof n6 == "string" && (t = g.parseSourceMapInput(n6));
    var r = g.getArg(t, "version"), i = g.getArg(t, "sources"), s = g.getArg(t, "names", []), o = g.getArg(t, "sourceRoot", null), a = g.getArg(t, "sourcesContent", null), l = g.getArg(t, "mappings"), u = g.getArg(t, "file", null);
    if (r != this._version)
      throw new Error("Unsupported version: " + r);
    o && (o = g.normalize(o)), i = i.map(String).map(g.normalize).map(function(h) {
      return o && g.isAbsolute(o) && g.isAbsolute(h) ? g.relative(o, h) : h;
    }), this._names = Ee.fromArray(s.map(String), true), this._sources = Ee.fromArray(i, true), this._absoluteSources = this._sources.toArray().map(function(h) {
      return g.computeSourceURL(o, h, e);
    }), this.sourceRoot = o, this.sourcesContent = a, this._mappings = l, this._sourceMapURL = e, this.file = u;
  }
  O.prototype = Object.create(w.prototype);
  O.prototype.consumer = w;
  O.prototype._findSourceIndex = function(n6) {
    var e = n6;
    if (this.sourceRoot != null && (e = g.relative(this.sourceRoot, e)), this._sources.has(e))
      return this._sources.indexOf(e);
    var t;
    for (t = 0; t < this._absoluteSources.length; ++t)
      if (this._absoluteSources[t] == n6)
        return t;
    return -1;
  };
  O.fromSourceMap = function(e, t) {
    var r = Object.create(O.prototype), i = r._names = Ee.fromArray(e._names.toArray(), true), s = r._sources = Ee.fromArray(e._sources.toArray(), true);
    r.sourceRoot = e._sourceRoot, r.sourcesContent = e._generateSourcesContent(r._sources.toArray(), r.sourceRoot), r.file = e._file, r._sourceMapURL = t, r._absoluteSources = r._sources.toArray().map(function(f) {
      return g.computeSourceURL(r.sourceRoot, f, t);
    });
    for (var o = e._mappings.toArray().slice(), a = r.__generatedMappings = [], l = r.__originalMappings = [], u = 0, h = o.length; u < h; u++) {
      var c = o[u], p = new Ii();
      p.generatedLine = c.generatedLine, p.generatedColumn = c.generatedColumn, c.source && (p.source = s.indexOf(c.source), p.originalLine = c.originalLine, p.originalColumn = c.originalColumn, c.name && (p.name = i.indexOf(c.name)), l.push(p)), a.push(p);
    }
    return Ue(r.__originalMappings, g.compareByOriginalPositions), r;
  };
  O.prototype._version = 3;
  Object.defineProperty(O.prototype, "sources", { get: function() {
    return this._absoluteSources.slice();
  } });
  function Ii() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  O.prototype._parseMappings = function(e, t) {
    for (var r = 1, i = 0, s = 0, o = 0, a = 0, l = 0, u = e.length, h = 0, c = {}, p = {}, f = [], y = [], S, I, x, F, ie; h < u; )
      if (e.charAt(h) === ";")
        r++, h++, i = 0;
      else if (e.charAt(h) === ",")
        h++;
      else {
        for (S = new Ii(), S.generatedLine = r, F = h; F < u && !this._charIsMappingSeparator(e, F); F++)
          ;
        if (I = e.slice(h, F), x = c[I], x)
          h += I.length;
        else {
          for (x = []; h < F; )
            Ha.decode(e, h, p), ie = p.value, h = p.rest, x.push(ie);
          if (x.length === 2)
            throw new Error("Found a source, but no line and column");
          if (x.length === 3)
            throw new Error("Found a source and line, but no column");
          c[I] = x;
        }
        S.generatedColumn = i + x[0], i = S.generatedColumn, x.length > 1 && (S.source = a + x[1], a += x[1], S.originalLine = s + x[2], s = S.originalLine, S.originalLine += 1, S.originalColumn = o + x[3], o = S.originalColumn, x.length > 4 && (S.name = l + x[4], l += x[4])), y.push(S), typeof S.originalLine == "number" && f.push(S);
      }
    Ue(y, g.compareByGeneratedPositionsDeflated), this.__generatedMappings = y, Ue(f, g.compareByOriginalPositions), this.__originalMappings = f;
  };
  O.prototype._findMapping = function(e, t, r, i, s, o) {
    if (e[r] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + e[r]);
    if (e[i] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + e[i]);
    return zr.search(e, t, s, o);
  };
  O.prototype.computeColumnSpans = function() {
    for (var e = 0; e < this._generatedMappings.length; ++e) {
      var t = this._generatedMappings[e];
      if (e + 1 < this._generatedMappings.length) {
        var r = this._generatedMappings[e + 1];
        if (t.generatedLine === r.generatedLine) {
          t.lastGeneratedColumn = r.generatedColumn - 1;
          continue;
        }
      }
      t.lastGeneratedColumn = 1 / 0;
    }
  };
  O.prototype.originalPositionFor = function(e) {
    var t = { generatedLine: g.getArg(e, "line"), generatedColumn: g.getArg(e, "column") }, r = this._findMapping(t, this._generatedMappings, "generatedLine", "generatedColumn", g.compareByGeneratedPositionsDeflated, g.getArg(e, "bias", w.GREATEST_LOWER_BOUND));
    if (r >= 0) {
      var i = this._generatedMappings[r];
      if (i.generatedLine === t.generatedLine) {
        var s = g.getArg(i, "source", null);
        s !== null && (s = this._sources.at(s), s = g.computeSourceURL(this.sourceRoot, s, this._sourceMapURL));
        var o = g.getArg(i, "name", null);
        return o !== null && (o = this._names.at(o)), { source: s, line: g.getArg(i, "originalLine", null), column: g.getArg(i, "originalColumn", null), name: o };
      }
    }
    return { source: null, line: null, column: null, name: null };
  };
  O.prototype.hasContentsOfAllSources = function() {
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(e) {
      return e == null;
    }) : false;
  };
  O.prototype.sourceContentFor = function(e, t) {
    if (!this.sourcesContent)
      return null;
    var r = this._findSourceIndex(e);
    if (r >= 0)
      return this.sourcesContent[r];
    var i = e;
    this.sourceRoot != null && (i = g.relative(this.sourceRoot, i));
    var s;
    if (this.sourceRoot != null && (s = g.urlParse(this.sourceRoot))) {
      var o = i.replace(/^file:\/\//, "");
      if (s.scheme == "file" && this._sources.has(o))
        return this.sourcesContent[this._sources.indexOf(o)];
      if ((!s.path || s.path == "/") && this._sources.has("/" + i))
        return this.sourcesContent[this._sources.indexOf("/" + i)];
    }
    if (t)
      return null;
    throw new Error('"' + i + '" is not in the SourceMap.');
  };
  O.prototype.generatedPositionFor = function(e) {
    var t = g.getArg(e, "source");
    if (t = this._findSourceIndex(t), t < 0)
      return { line: null, column: null, lastColumn: null };
    var r = { source: t, originalLine: g.getArg(e, "line"), originalColumn: g.getArg(e, "column") }, i = this._findMapping(r, this._originalMappings, "originalLine", "originalColumn", g.compareByOriginalPositions, g.getArg(e, "bias", w.GREATEST_LOWER_BOUND));
    if (i >= 0) {
      var s = this._originalMappings[i];
      if (s.source === r.source)
        return { line: g.getArg(s, "generatedLine", null), column: g.getArg(s, "generatedColumn", null), lastColumn: g.getArg(s, "lastGeneratedColumn", null) };
    }
    return { line: null, column: null, lastColumn: null };
  };
  Dt.BasicSourceMapConsumer = O;
  function q(n6, e) {
    var t = n6;
    typeof n6 == "string" && (t = g.parseSourceMapInput(n6));
    var r = g.getArg(t, "version"), i = g.getArg(t, "sections");
    if (r != this._version)
      throw new Error("Unsupported version: " + r);
    this._sources = new Ee(), this._names = new Ee();
    var s = { line: -1, column: 0 };
    this._sections = i.map(function(o) {
      if (o.url)
        throw new Error("Support for url field in sections not implemented.");
      var a = g.getArg(o, "offset"), l = g.getArg(a, "line"), u = g.getArg(a, "column");
      if (l < s.line || l === s.line && u < s.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return s = a, { generatedOffset: { generatedLine: l + 1, generatedColumn: u + 1 }, consumer: new w(g.getArg(o, "map"), e) };
    });
  }
  q.prototype = Object.create(w.prototype);
  q.prototype.constructor = w;
  q.prototype._version = 3;
  Object.defineProperty(q.prototype, "sources", { get: function() {
    for (var n6 = [], e = 0; e < this._sections.length; e++)
      for (var t = 0; t < this._sections[e].consumer.sources.length; t++)
        n6.push(this._sections[e].consumer.sources[t]);
    return n6;
  } });
  q.prototype.originalPositionFor = function(e) {
    var t = { generatedLine: g.getArg(e, "line"), generatedColumn: g.getArg(e, "column") }, r = zr.search(t, this._sections, function(s, o) {
      var a = s.generatedLine - o.generatedOffset.generatedLine;
      return a || s.generatedColumn - o.generatedOffset.generatedColumn;
    }), i = this._sections[r];
    return i ? i.consumer.originalPositionFor({ line: t.generatedLine - (i.generatedOffset.generatedLine - 1), column: t.generatedColumn - (i.generatedOffset.generatedLine === t.generatedLine ? i.generatedOffset.generatedColumn - 1 : 0), bias: e.bias }) : { source: null, line: null, column: null, name: null };
  };
  q.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(e) {
      return e.consumer.hasContentsOfAllSources();
    });
  };
  q.prototype.sourceContentFor = function(e, t) {
    for (var r = 0; r < this._sections.length; r++) {
      var i = this._sections[r], s = i.consumer.sourceContentFor(e, true);
      if (s)
        return s;
    }
    if (t)
      return null;
    throw new Error('"' + e + '" is not in the SourceMap.');
  };
  q.prototype.generatedPositionFor = function(e) {
    for (var t = 0; t < this._sections.length; t++) {
      var r = this._sections[t];
      if (r.consumer._findSourceIndex(g.getArg(e, "source")) !== -1) {
        var i = r.consumer.generatedPositionFor(e);
        if (i) {
          var s = { line: i.line + (r.generatedOffset.generatedLine - 1), column: i.column + (r.generatedOffset.generatedLine === i.line ? r.generatedOffset.generatedColumn - 1 : 0) };
          return s;
        }
      }
    }
    return { line: null, column: null };
  };
  q.prototype._parseMappings = function(e, t) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var r = 0; r < this._sections.length; r++)
      for (var i = this._sections[r], s = i.consumer._generatedMappings, o = 0; o < s.length; o++) {
        var a = s[o], l = i.consumer._sources.at(a.source);
        l = g.computeSourceURL(i.consumer.sourceRoot, l, this._sourceMapURL), this._sources.add(l), l = this._sources.indexOf(l);
        var u = null;
        a.name && (u = i.consumer._names.at(a.name), this._names.add(u), u = this._names.indexOf(u));
        var h = { source: l, generatedLine: a.generatedLine + (i.generatedOffset.generatedLine - 1), generatedColumn: a.generatedColumn + (i.generatedOffset.generatedLine === a.generatedLine ? i.generatedOffset.generatedColumn - 1 : 0), originalLine: a.originalLine, originalColumn: a.originalColumn, name: u };
        this.__generatedMappings.push(h), typeof h.originalLine == "number" && this.__originalMappings.push(h);
      }
    Ue(this.__generatedMappings, g.compareByGeneratedPositionsDeflated), Ue(this.__originalMappings, g.compareByOriginalPositions);
  };
  Dt.IndexedSourceMapConsumer = q;
});
var Pi = _((Oi) => {
  "use strict";
  var qa = Br().SourceMapGenerator, Bt = xe(), Fa = /(\r?\n)/, za = 10, Ce = "$$$isSourceNode$$$";
  function L(n6, e, t, r, i) {
    this.children = [], this.sourceContents = {}, this.line = n6 ?? null, this.column = e ?? null, this.source = t ?? null, this.name = i ?? null, this[Ce] = true, r != null && this.add(r);
  }
  L.fromStringWithSourceMap = function(e, t, r) {
    var i = new L(), s = e.split(Fa), o = 0, a = function() {
      var p = y(), f = y() || "";
      return p + f;
      function y() {
        return o < s.length ? s[o++] : void 0;
      }
    }, l = 1, u = 0, h = null;
    return t.eachMapping(function(p) {
      if (h !== null)
        if (l < p.generatedLine)
          c(h, a()), l++, u = 0;
        else {
          var f = s[o] || "", y = f.substr(0, p.generatedColumn - u);
          s[o] = f.substr(p.generatedColumn - u), u = p.generatedColumn, c(h, y), h = p;
          return;
        }
      for (; l < p.generatedLine; )
        i.add(a()), l++;
      if (u < p.generatedColumn) {
        var f = s[o] || "";
        i.add(f.substr(0, p.generatedColumn)), s[o] = f.substr(p.generatedColumn), u = p.generatedColumn;
      }
      h = p;
    }, this), o < s.length && (h && c(h, a()), i.add(s.splice(o).join(""))), t.sources.forEach(function(p) {
      var f = t.sourceContentFor(p);
      f != null && (r != null && (p = Bt.join(r, p)), i.setSourceContent(p, f));
    }), i;
    function c(p, f) {
      if (p === null || p.source === void 0)
        i.add(f);
      else {
        var y = r ? Bt.join(r, p.source) : p.source;
        i.add(new L(p.originalLine, p.originalColumn, y, f, p.name));
      }
    }
  };
  L.prototype.add = function(e) {
    if (Array.isArray(e))
      e.forEach(function(t) {
        this.add(t);
      }, this);
    else if (e[Ce] || typeof e == "string")
      e && this.children.push(e);
    else
      throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
    return this;
  };
  L.prototype.prepend = function(e) {
    if (Array.isArray(e))
      for (var t = e.length - 1; t >= 0; t--)
        this.prepend(e[t]);
    else if (e[Ce] || typeof e == "string")
      this.children.unshift(e);
    else
      throw new TypeError("Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + e);
    return this;
  };
  L.prototype.walk = function(e) {
    for (var t, r = 0, i = this.children.length; r < i; r++)
      t = this.children[r], t[Ce] ? t.walk(e) : t !== "" && e(t, { source: this.source, line: this.line, column: this.column, name: this.name });
  };
  L.prototype.join = function(e) {
    var t, r, i = this.children.length;
    if (i > 0) {
      for (t = [], r = 0; r < i - 1; r++)
        t.push(this.children[r]), t.push(e);
      t.push(this.children[r]), this.children = t;
    }
    return this;
  };
  L.prototype.replaceRight = function(e, t) {
    var r = this.children[this.children.length - 1];
    return r[Ce] ? r.replaceRight(e, t) : typeof r == "string" ? this.children[this.children.length - 1] = r.replace(e, t) : this.children.push("".replace(e, t)), this;
  };
  L.prototype.setSourceContent = function(e, t) {
    this.sourceContents[Bt.toSetString(e)] = t;
  };
  L.prototype.walkSourceContents = function(e) {
    for (var t = 0, r = this.children.length; t < r; t++)
      this.children[t][Ce] && this.children[t].walkSourceContents(e);
    for (var i = Object.keys(this.sourceContents), t = 0, r = i.length; t < r; t++)
      e(Bt.fromSetString(i[t]), this.sourceContents[i[t]]);
  };
  L.prototype.toString = function() {
    var e = "";
    return this.walk(function(t) {
      e += t;
    }), e;
  };
  L.prototype.toStringWithSourceMap = function(e) {
    var t = { code: "", line: 1, column: 0 }, r = new qa(e), i = false, s = null, o = null, a = null, l = null;
    return this.walk(function(u, h) {
      t.code += u, h.source !== null && h.line !== null && h.column !== null ? ((s !== h.source || o !== h.line || a !== h.column || l !== h.name) && r.addMapping({ source: h.source, original: { line: h.line, column: h.column }, generated: { line: t.line, column: t.column }, name: h.name }), s = h.source, o = h.line, a = h.column, l = h.name, i = true) : i && (r.addMapping({ generated: { line: t.line, column: t.column } }), s = null, i = false);
      for (var c = 0, p = u.length; c < p; c++)
        u.charCodeAt(c) === za ? (t.line++, t.column = 0, c + 1 === p ? (s = null, i = false) : i && r.addMapping({ source: h.source, original: { line: h.line, column: h.column }, generated: { line: t.line, column: t.column }, name: h.name })) : t.column++;
    }), this.walkSourceContents(function(u, h) {
      r.setSourceContent(u, h);
    }), { code: t.code, map: r };
  };
  Oi.SourceNode = L;
});
var Ai = _((Ht) => {
  "use strict";
  Ht.SourceMapGenerator = Br().SourceMapGenerator;
  Ht.SourceMapConsumer = Mi().SourceMapConsumer;
  Ht.SourceNode = Pi().SourceNode;
});
var Ni = _((qt, Ri) => {
  "use strict";
  qt.__esModule = true;
  var Gr = A(), pe = void 0;
  try {
    (typeof define != "function" || !define.amd) && (Ti = Ai(), pe = Ti.SourceNode);
  } catch {
  }
  var Ti;
  pe || (pe = function(n6, e, t, r) {
    this.src = "", r && this.add(r);
  }, pe.prototype = { add: function(e) {
    Gr.isArray(e) && (e = e.join("")), this.src += e;
  }, prepend: function(e) {
    Gr.isArray(e) && (e = e.join("")), this.src = e + this.src;
  }, toStringWithSourceMap: function() {
    return { code: this.toString() };
  }, toString: function() {
    return this.src;
  } });
  function Wr(n6, e, t) {
    if (Gr.isArray(n6)) {
      for (var r = [], i = 0, s = n6.length; i < s; i++)
        r.push(e.wrap(n6[i], t));
      return r;
    } else if (typeof n6 == "boolean" || typeof n6 == "number")
      return n6 + "";
    return n6;
  }
  function Li(n6) {
    this.srcFile = n6, this.source = [];
  }
  Li.prototype = { isEmpty: function() {
    return !this.source.length;
  }, prepend: function(e, t) {
    this.source.unshift(this.wrap(e, t));
  }, push: function(e, t) {
    this.source.push(this.wrap(e, t));
  }, merge: function() {
    var e = this.empty();
    return this.each(function(t) {
      e.add(["  ", t, `
`]);
    }), e;
  }, each: function(e) {
    for (var t = 0, r = this.source.length; t < r; t++)
      e(this.source[t]);
  }, empty: function() {
    var e = this.currentLocation || { start: {} };
    return new pe(e.start.line, e.start.column, this.srcFile);
  }, wrap: function(e) {
    var t = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
    return e instanceof pe ? e : (e = Wr(e, this, t), new pe(t.start.line, t.start.column, this.srcFile, e));
  }, functionCall: function(e, t, r) {
    return r = this.generateList(r), this.wrap([e, t ? "." + t + "(" : "(", r, ")"]);
  }, quotedString: function(e) {
    return '"' + (e + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
  }, objectLiteral: function(e) {
    var t = this, r = [];
    Object.keys(e).forEach(function(s) {
      var o = Wr(e[s], t);
      o !== "undefined" && r.push([t.quotedString(s), ":", o]);
    });
    var i = this.generateList(r);
    return i.prepend("{"), i.add("}"), i;
  }, generateList: function(e) {
    for (var t = this.empty(), r = 0, i = e.length; r < i; r++)
      r && t.add(","), t.add(Wr(e[r], this));
    return t;
  }, generateArray: function(e) {
    var t = this.generateList(e);
    return t.prepend("["), t.add("]"), t;
  } };
  qt.default = Li;
  Ri.exports = qt.default;
});
var Fi = _((Ft, qi) => {
  "use strict";
  Ft.__esModule = true;
  function Hi(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  var Di = St(), Wa = D(), Vr = Hi(Wa), Ga = A(), Va = Ni(), Bi = Hi(Va);
  function Ie(n6) {
    this.value = n6;
  }
  function Me() {
  }
  Me.prototype = { nameLookup: function(e, t) {
    return this.internalNameLookup(e, t);
  }, depthedLookup: function(e) {
    return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(e), ")"];
  }, compilerInfo: function() {
    var e = Di.COMPILER_REVISION, t = Di.REVISION_CHANGES[e];
    return [e, t];
  }, appendToBuffer: function(e, t, r) {
    return Ga.isArray(e) || (e = [e]), e = this.source.wrap(e, t), this.environment.isSimple ? ["return ", e, ";"] : r ? ["buffer += ", e, ";"] : (e.appendToBuffer = true, e);
  }, initializeBuffer: function() {
    return this.quotedString("");
  }, internalNameLookup: function(e, t) {
    return this.lookupPropertyFunctionIsUsed = true, ["lookupProperty(", e, ",", JSON.stringify(t), ")"];
  }, lookupPropertyFunctionIsUsed: false, compile: function(e, t, r, i) {
    this.environment = e, this.options = t, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !i, this.name = this.environment.name, this.isChild = !!r, this.context = r || { decorators: [], programs: [], environments: [] }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(e, t), this.useDepths = this.useDepths || e.useDepths || e.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || e.useBlockParams;
    var s = e.opcodes, o = void 0, a = void 0, l = void 0, u = void 0;
    for (l = 0, u = s.length; l < u; l++)
      o = s[l], this.source.currentLocation = o.loc, a = a || o.loc, this[o.opcode].apply(this, o.args);
    if (this.source.currentLocation = a, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
      throw new Vr.default("Compile completed with content left on stack");
    this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = true, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), `;
`]), this.decorators.push("return fn;"), i ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`), this.decorators.push(`}
`), this.decorators = this.decorators.merge()));
    var h = this.createFunctionContext(i);
    if (this.isChild)
      return h;
    var c = { compiler: this.compilerInfo(), main: h };
    this.decorators && (c.main_d = this.decorators, c.useDecorators = true);
    var p = this.context, f = p.programs, y = p.decorators;
    for (l = 0, u = f.length; l < u; l++)
      f[l] && (c[l] = f[l], y[l] && (c[l + "_d"] = y[l], c.useDecorators = true));
    return this.environment.usePartial && (c.usePartial = true), this.options.data && (c.useData = true), this.useDepths && (c.useDepths = true), this.useBlockParams && (c.useBlockParams = true), this.options.compat && (c.compat = true), i ? c.compilerOptions = this.options : (c.compiler = JSON.stringify(c.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, c = this.objectLiteral(c), t.srcName ? (c = c.toStringWithSourceMap({ file: t.destName }), c.map = c.map && c.map.toString()) : c = c.toString()), c;
  }, preamble: function() {
    this.lastContext = 0, this.source = new Bi.default(this.options.srcName), this.decorators = new Bi.default(this.options.srcName);
  }, createFunctionContext: function(e) {
    var t = this, r = "", i = this.stackVars.concat(this.registers.list);
    i.length > 0 && (r += ", " + i.join(", "));
    var s = 0;
    Object.keys(this.aliases).forEach(function(l) {
      var u = t.aliases[l];
      u.children && u.referenceCount > 1 && (r += ", alias" + ++s + "=" + l, u.children[0] = "alias" + s);
    }), this.lookupPropertyFunctionIsUsed && (r += ", " + this.lookupPropertyFunctionVarDeclaration());
    var o = ["container", "depth0", "helpers", "partials", "data"];
    (this.useBlockParams || this.useDepths) && o.push("blockParams"), this.useDepths && o.push("depths");
    var a = this.mergeSource(r);
    return e ? (o.push(a), Function.apply(this, o)) : this.source.wrap(["function(", o.join(","), `) {
  `, a, "}"]);
  }, mergeSource: function(e) {
    var t = this.environment.isSimple, r = !this.forceBuffer, i = void 0, s = void 0, o = void 0, a = void 0;
    return this.source.each(function(l) {
      l.appendToBuffer ? (o ? l.prepend("  + ") : o = l, a = l) : (o && (s ? o.prepend("buffer += ") : i = true, a.add(";"), o = a = void 0), s = true, t || (r = false));
    }), r ? o ? (o.prepend("return "), a.add(";")) : s || this.source.push('return "";') : (e += ", buffer = " + (i ? "" : this.initializeBuffer()), o ? (o.prepend("return buffer + "), a.add(";")) : this.source.push("return buffer;")), e && this.source.prepend("var " + e.substring(2) + (i ? "" : `;
`)), this.source.merge();
  }, lookupPropertyFunctionVarDeclaration: function() {
    return `
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim();
  }, blockValue: function(e) {
    var t = this.aliasable("container.hooks.blockHelperMissing"), r = [this.contextName(0)];
    this.setupHelperArgs(e, 0, r);
    var i = this.popStack();
    r.splice(1, 0, i), this.push(this.source.functionCall(t, "call", r));
  }, ambiguousBlockValue: function() {
    var e = this.aliasable("container.hooks.blockHelperMissing"), t = [this.contextName(0)];
    this.setupHelperArgs("", 0, t, true), this.flushInline();
    var r = this.topStack();
    t.splice(1, 0, r), this.pushSource(["if (!", this.lastHelper, ") { ", r, " = ", this.source.functionCall(e, "call", t), "}"]);
  }, appendContent: function(e) {
    this.pendingContent ? e = this.pendingContent + e : this.pendingLocation = this.source.currentLocation, this.pendingContent = e;
  }, append: function() {
    if (this.isInline())
      this.replaceStack(function(t) {
        return [" != null ? ", t, ' : ""'];
      }), this.pushSource(this.appendToBuffer(this.popStack()));
    else {
      var e = this.popStack();
      this.pushSource(["if (", e, " != null) { ", this.appendToBuffer(e, void 0, true), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, true), " }"]);
    }
  }, appendEscaped: function() {
    this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"), "(", this.popStack(), ")"]));
  }, getContext: function(e) {
    this.lastContext = e;
  }, pushContext: function() {
    this.pushStackLiteral(this.contextName(this.lastContext));
  }, lookupOnContext: function(e, t, r, i) {
    var s = 0;
    !i && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(e[s++])) : this.pushContext(), this.resolvePath("context", e, s, t, r);
  }, lookupBlockParam: function(e, t) {
    this.useBlockParams = true, this.push(["blockParams[", e[0], "][", e[1], "]"]), this.resolvePath("context", t, 1);
  }, lookupData: function(e, t, r) {
    e ? this.pushStackLiteral("container.data(data, " + e + ")") : this.pushStackLiteral("data"), this.resolvePath("data", t, 0, true, r);
  }, resolvePath: function(e, t, r, i, s) {
    var o = this;
    if (this.options.strict || this.options.assumeObjects) {
      this.push(Ua(this.options.strict && s, this, t, r, e));
      return;
    }
    for (var a = t.length; r < a; r++)
      this.replaceStack(function(l) {
        var u = o.nameLookup(l, t[r], e);
        return i ? [" && ", u] : [" != null ? ", u, " : ", l];
      });
  }, resolvePossibleLambda: function() {
    this.push([this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"]);
  }, pushStringParam: function(e, t) {
    this.pushContext(), this.pushString(t), t !== "SubExpression" && (typeof e == "string" ? this.pushString(e) : this.pushStackLiteral(e));
  }, emptyHash: function(e) {
    this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(e ? "undefined" : "{}");
  }, pushHash: function() {
    this.hash && this.hashes.push(this.hash), this.hash = { values: {}, types: [], contexts: [], ids: [] };
  }, popHash: function() {
    var e = this.hash;
    this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(e.ids)), this.stringParams && (this.push(this.objectLiteral(e.contexts)), this.push(this.objectLiteral(e.types))), this.push(this.objectLiteral(e.values));
  }, pushString: function(e) {
    this.pushStackLiteral(this.quotedString(e));
  }, pushLiteral: function(e) {
    this.pushStackLiteral(e);
  }, pushProgram: function(e) {
    e != null ? this.pushStackLiteral(this.programExpression(e)) : this.pushStackLiteral(null);
  }, registerDecorator: function(e, t) {
    var r = this.nameLookup("decorators", t, "decorator"), i = this.setupHelperArgs(t, e);
    this.decorators.push(["fn = ", this.decorators.functionCall(r, "", ["fn", "props", "container", i]), " || fn;"]);
  }, invokeHelper: function(e, t, r) {
    var i = this.popStack(), s = this.setupHelper(e, t), o = [];
    r && o.push(s.name), o.push(i), this.options.strict || o.push(this.aliasable("container.hooks.helperMissing"));
    var a = ["(", this.itemsSeparatedBy(o, "||"), ")"], l = this.source.functionCall(a, "call", s.callParams);
    this.push(l);
  }, itemsSeparatedBy: function(e, t) {
    var r = [];
    r.push(e[0]);
    for (var i = 1; i < e.length; i++)
      r.push(t, e[i]);
    return r;
  }, invokeKnownHelper: function(e, t) {
    var r = this.setupHelper(e, t);
    this.push(this.source.functionCall(r.name, "call", r.callParams));
  }, invokeAmbiguous: function(e, t) {
    this.useRegister("helper");
    var r = this.popStack();
    this.emptyHash();
    var i = this.setupHelper(0, e, t), s = this.lastHelper = this.nameLookup("helpers", e, "helper"), o = ["(", "(helper = ", s, " || ", r, ")"];
    this.options.strict || (o[0] = "(helper = ", o.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", o, i.paramsInit ? ["),(", i.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", i.callParams), " : helper))"]);
  }, invokePartial: function(e, t, r) {
    var i = [], s = this.setupParams(t, 1, i);
    e && (t = this.popStack(), delete s.name), r && (s.indent = JSON.stringify(r)), s.helpers = "helpers", s.partials = "partials", s.decorators = "container.decorators", e ? i.unshift(t) : i.unshift(this.nameLookup("partials", t, "partial")), this.options.compat && (s.depths = "depths"), s = this.objectLiteral(s), i.push(s), this.push(this.source.functionCall("container.invokePartial", "", i));
  }, assignToHash: function(e) {
    var t = this.popStack(), r = void 0, i = void 0, s = void 0;
    this.trackIds && (s = this.popStack()), this.stringParams && (i = this.popStack(), r = this.popStack());
    var o = this.hash;
    r && (o.contexts[e] = r), i && (o.types[e] = i), s && (o.ids[e] = s), o.values[e] = t;
  }, pushId: function(e, t, r) {
    e === "BlockParam" ? this.pushStackLiteral("blockParams[" + t[0] + "].path[" + t[1] + "]" + (r ? " + " + JSON.stringify("." + r) : "")) : e === "PathExpression" ? this.pushString(t) : e === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
  }, compiler: Me, compileChildren: function(e, t) {
    for (var r = e.children, i = void 0, s = void 0, o = 0, a = r.length; o < a; o++) {
      i = r[o], s = new this.compiler();
      var l = this.matchExistingProgram(i);
      if (l == null) {
        this.context.programs.push("");
        var u = this.context.programs.length;
        i.index = u, i.name = "program" + u, this.context.programs[u] = s.compile(i, t, this.context, !this.precompile), this.context.decorators[u] = s.decorators, this.context.environments[u] = i, this.useDepths = this.useDepths || s.useDepths, this.useBlockParams = this.useBlockParams || s.useBlockParams, i.useDepths = this.useDepths, i.useBlockParams = this.useBlockParams;
      } else
        i.index = l.index, i.name = "program" + l.index, this.useDepths = this.useDepths || l.useDepths, this.useBlockParams = this.useBlockParams || l.useBlockParams;
    }
  }, matchExistingProgram: function(e) {
    for (var t = 0, r = this.context.environments.length; t < r; t++) {
      var i = this.context.environments[t];
      if (i && i.equals(e))
        return i;
    }
  }, programExpression: function(e) {
    var t = this.environment.children[e], r = [t.index, "data", t.blockParams];
    return (this.useBlockParams || this.useDepths) && r.push("blockParams"), this.useDepths && r.push("depths"), "container.program(" + r.join(", ") + ")";
  }, useRegister: function(e) {
    this.registers[e] || (this.registers[e] = true, this.registers.list.push(e));
  }, push: function(e) {
    return e instanceof Ie || (e = this.source.wrap(e)), this.inlineStack.push(e), e;
  }, pushStackLiteral: function(e) {
    this.push(new Ie(e));
  }, pushSource: function(e) {
    this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), e && this.source.push(e);
  }, replaceStack: function(e) {
    var t = ["("], r = void 0, i = void 0, s = void 0;
    if (!this.isInline())
      throw new Vr.default("replaceStack on non-inline");
    var o = this.popStack(true);
    if (o instanceof Ie)
      r = [o.value], t = ["(", r], s = true;
    else {
      i = true;
      var a = this.incrStack();
      t = ["((", this.push(a), " = ", o, ")"], r = this.topStack();
    }
    var l = e.call(this, r);
    s || this.popStack(), i && this.stackSlot--, this.push(t.concat(l, ")"));
  }, incrStack: function() {
    return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName();
  }, topStackName: function() {
    return "stack" + this.stackSlot;
  }, flushInline: function() {
    var e = this.inlineStack;
    this.inlineStack = [];
    for (var t = 0, r = e.length; t < r; t++) {
      var i = e[t];
      if (i instanceof Ie)
        this.compileStack.push(i);
      else {
        var s = this.incrStack();
        this.pushSource([s, " = ", i, ";"]), this.compileStack.push(s);
      }
    }
  }, isInline: function() {
    return this.inlineStack.length;
  }, popStack: function(e) {
    var t = this.isInline(), r = (t ? this.inlineStack : this.compileStack).pop();
    if (!e && r instanceof Ie)
      return r.value;
    if (!t) {
      if (!this.stackSlot)
        throw new Vr.default("Invalid stack pop");
      this.stackSlot--;
    }
    return r;
  }, topStack: function() {
    var e = this.isInline() ? this.inlineStack : this.compileStack, t = e[e.length - 1];
    return t instanceof Ie ? t.value : t;
  }, contextName: function(e) {
    return this.useDepths && e ? "depths[" + e + "]" : "depth" + e;
  }, quotedString: function(e) {
    return this.source.quotedString(e);
  }, objectLiteral: function(e) {
    return this.source.objectLiteral(e);
  }, aliasable: function(e) {
    var t = this.aliases[e];
    return t ? (t.referenceCount++, t) : (t = this.aliases[e] = this.source.wrap(e), t.aliasable = true, t.referenceCount = 1, t);
  }, setupHelper: function(e, t, r) {
    var i = [], s = this.setupHelperArgs(t, e, i, r), o = this.nameLookup("helpers", t, "helper"), a = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
    return { params: i, paramsInit: s, name: o, callParams: [a].concat(i) };
  }, setupParams: function(e, t, r) {
    var i = {}, s = [], o = [], a = [], l = !r, u = void 0;
    l && (r = []), i.name = this.quotedString(e), i.hash = this.popStack(), this.trackIds && (i.hashIds = this.popStack()), this.stringParams && (i.hashTypes = this.popStack(), i.hashContexts = this.popStack());
    var h = this.popStack(), c = this.popStack();
    (c || h) && (i.fn = c || "container.noop", i.inverse = h || "container.noop");
    for (var p = t; p--; )
      u = this.popStack(), r[p] = u, this.trackIds && (a[p] = this.popStack()), this.stringParams && (o[p] = this.popStack(), s[p] = this.popStack());
    return l && (i.args = this.source.generateArray(r)), this.trackIds && (i.ids = this.source.generateArray(a)), this.stringParams && (i.types = this.source.generateArray(o), i.contexts = this.source.generateArray(s)), this.options.data && (i.data = "data"), this.useBlockParams && (i.blockParams = "blockParams"), i;
  }, setupHelperArgs: function(e, t, r, i) {
    var s = this.setupParams(e, t, r);
    return s.loc = JSON.stringify(this.source.currentLocation), s = this.objectLiteral(s), i ? (this.useRegister("options"), r.push("options"), ["options=", s]) : r ? (r.push(s), "") : s;
  } };
  (function() {
    for (var n6 = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), e = Me.RESERVED_WORDS = {}, t = 0, r = n6.length; t < r; t++)
      e[n6[t]] = true;
  })();
  Me.isValidJavaScriptVariableName = function(n6) {
    return !Me.RESERVED_WORDS[n6] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(n6);
  };
  function Ua(n6, e, t, r, i) {
    var s = e.popStack(), o = t.length;
    for (n6 && o--; r < o; r++)
      s = e.nameLookup(s, t[r], i);
    return n6 ? [e.aliasable("container.strict"), "(", s, ", ", e.quotedString(t[r]), ", ", JSON.stringify(e.source.currentLocation), " )"] : s;
  }
  Ft.default = Me;
  qi.exports = Ft.default;
});
var Gi = _((zt, Wi) => {
  "use strict";
  zt.__esModule = true;
  function Ke(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  var Ka = Vn(), Ja = Ke(Ka), Za = Sr(), Qa = Ke(Za), Ur = ni(), Kr = ai(), ja = Fi(), Xa = Ke(ja), Ya = At(), $a = Ke(Ya), el = _r(), tl = Ke(el), rl = Ja.default.create;
  function zi() {
    var n6 = rl();
    return n6.compile = function(e, t) {
      return Kr.compile(e, t, n6);
    }, n6.precompile = function(e, t) {
      return Kr.precompile(e, t, n6);
    }, n6.AST = Qa.default, n6.Compiler = Kr.Compiler, n6.JavaScriptCompiler = Xa.default, n6.Parser = Ur.parser, n6.parse = Ur.parse, n6.parseWithoutProcessing = Ur.parseWithoutProcessing, n6;
  }
  var Oe = zi();
  Oe.create = zi;
  tl.default(Oe);
  Oe.Visitor = $a.default;
  Oe.default = Oe;
  zt.default = Oe;
  Wi.exports = zt.default;
});
var Vi = _((Wt) => {
  "use strict";
  Wt.__esModule = true;
  Wt.print = ol;
  Wt.PrintVisitor = E;
  function nl(n6) {
    return n6 && n6.__esModule ? n6 : { default: n6 };
  }
  var il = At(), sl = nl(il);
  function ol(n6) {
    return new E().accept(n6);
  }
  function E() {
    this.padding = 0;
  }
  E.prototype = new sl.default();
  E.prototype.pad = function(n6) {
    for (var e = "", t = 0, r = this.padding; t < r; t++)
      e += "  ";
    return e += n6 + `
`, e;
  };
  E.prototype.Program = function(n6) {
    var e = "", t = n6.body, r = void 0, i = void 0;
    if (n6.blockParams) {
      var s = "BLOCK PARAMS: [";
      for (r = 0, i = n6.blockParams.length; r < i; r++)
        s += " " + n6.blockParams[r];
      s += " ]", e += this.pad(s);
    }
    for (r = 0, i = t.length; r < i; r++)
      e += this.accept(t[r]);
    return this.padding--, e;
  };
  E.prototype.MustacheStatement = function(n6) {
    return this.pad("{{ " + this.SubExpression(n6) + " }}");
  };
  E.prototype.Decorator = function(n6) {
    return this.pad("{{ DIRECTIVE " + this.SubExpression(n6) + " }}");
  };
  E.prototype.BlockStatement = E.prototype.DecoratorBlock = function(n6) {
    var e = "";
    return e += this.pad((n6.type === "DecoratorBlock" ? "DIRECTIVE " : "") + "BLOCK:"), this.padding++, e += this.pad(this.SubExpression(n6)), n6.program && (e += this.pad("PROGRAM:"), this.padding++, e += this.accept(n6.program), this.padding--), n6.inverse && (n6.program && this.padding++, e += this.pad("{{^}}"), this.padding++, e += this.accept(n6.inverse), this.padding--, n6.program && this.padding--), this.padding--, e;
  };
  E.prototype.PartialStatement = function(n6) {
    var e = "PARTIAL:" + n6.name.original;
    return n6.params[0] && (e += " " + this.accept(n6.params[0])), n6.hash && (e += " " + this.accept(n6.hash)), this.pad("{{> " + e + " }}");
  };
  E.prototype.PartialBlockStatement = function(n6) {
    var e = "PARTIAL BLOCK:" + n6.name.original;
    return n6.params[0] && (e += " " + this.accept(n6.params[0])), n6.hash && (e += " " + this.accept(n6.hash)), e += " " + this.pad("PROGRAM:"), this.padding++, e += this.accept(n6.program), this.padding--, this.pad("{{> " + e + " }}");
  };
  E.prototype.ContentStatement = function(n6) {
    return this.pad("CONTENT[ '" + n6.value + "' ]");
  };
  E.prototype.CommentStatement = function(n6) {
    return this.pad("{{! '" + n6.value + "' }}");
  };
  E.prototype.SubExpression = function(n6) {
    for (var e = n6.params, t = [], r = void 0, i = 0, s = e.length; i < s; i++)
      t.push(this.accept(e[i]));
    return e = "[" + t.join(", ") + "]", r = n6.hash ? " " + this.accept(n6.hash) : "", this.accept(n6.path) + " " + e + r;
  };
  E.prototype.PathExpression = function(n6) {
    var e = n6.parts.join("/");
    return (n6.data ? "@" : "") + "PATH:" + e;
  };
  E.prototype.StringLiteral = function(n6) {
    return '"' + n6.value + '"';
  };
  E.prototype.NumberLiteral = function(n6) {
    return "NUMBER{" + n6.value + "}";
  };
  E.prototype.BooleanLiteral = function(n6) {
    return "BOOLEAN{" + n6.value + "}";
  };
  E.prototype.UndefinedLiteral = function() {
    return "UNDEFINED";
  };
  E.prototype.NullLiteral = function() {
    return "NULL";
  };
  E.prototype.Hash = function(n6) {
    for (var e = n6.pairs, t = [], r = 0, i = e.length; r < i; r++)
      t.push(this.accept(e[r]));
    return "HASH{" + t.join(", ") + "}";
  };
  E.prototype.HashPair = function(n6) {
    return n6.key + "=" + this.accept(n6.value);
  };
});
var Zi = _((au, Ji) => {
  "use strict";
  var Gt = Gi().default, Ki = Vi();
  Gt.PrintVisitor = Ki.PrintVisitor;
  Gt.print = Ki.print;
  Ji.exports = Gt;
  function Ui(n6, e) {
    var t = _e("fs"), r = t.readFileSync(e, "utf8");
    n6.exports = Gt.compile(r);
  }
  typeof _e < "u" && _e.extensions && (_e.extensions[".handlebars"] = Ui, _e.extensions[".hbs"] = Ui);
});
var Te = class n {
  static isPlaceholder(e) {
    return e?.onclick != null;
  }
  static isAudio(e) {
    return e && !n.isPlaceholder(e) && e?.mimeType?.startsWith("audio/") || e.mimeType == "application/ogg";
  }
  static isImage(e) {
    return e && !n.isPlaceholder(e) && e?.mimeType?.startsWith("image/");
  }
  static isDocument(e) {
    return e && !n.isPlaceholder(e) && (e?.mimeType?.startsWith("text/") || e?.mimeType?.startsWith("application/pdf"));
  }
};
var Yt = ((h) => (h.REGISTRATION = "client_registration", h.DEREGISTRATION = "client_deregistration", h.SEND_CHAT_MESSAGE = "client_send_chat", h.RUN_CLIENT_SCRIPT = "client_run_cscript", h.SIGNAL_INTENT = "client_signal_intent", h.WINDOW_MESSAGE = "client_window_message", h.SHOW_TOAST = "client_show_toast", h.SHOW_EXTENSION = "client_show_extension", h.LOAD_RECIPE = "client_load_recipe", h.SHOW_TOP_BANNER = "client_show_top_banner", h))(Yt || {});
var $t = ((e) => (e.INTENT_MAP = "omni-intentMap", e))($t || {});
var Xr = ((r) => (r.DATA_UPDATED = "data_updated", r.CUSTOM_EVENT = "custom_event", r.CHAT_MESSAGE_RECEIVED = "chat_message_received", r))(Xr || {});
var er = ((o) => (o.ACKNOWLEDGE = "host_acknowledge", o.CLIENT_SCRIPT_RESPONSE = "host_cscript_response", o.SYNC_DATA = "host_sync_data", o.CHAT_COMMAND = "host_chat_command", o.CHAT_MESSAGE_RECEIVED = "host_chat_message_received", o.CUSTOM_EVENT = "custom_extension_event", o))(er || {});
var Yr = ((s) => (s.image = "image", s.audio = "audio", s.document = "document", s.video = "video", s.file = "file", s))(Yr || {});
var Ye = class n2 {
  constructor(e) {
    if (this.fid = e.fid || e.ticket?.fid, !this.fid)
      throw new Error("Invalid resource, fid missing");
    this.ticket = e.ticket, this.fileName = e.fileName, this.size = e.size, this.data = e.data, this.url = e.url, this.mimeType = e.mimeType, this.expires = e.expires, this.meta = e.meta || {}, this.meta.created = this.meta.created || Date.now();
    let t = this.fileName.split(".").pop();
    this.furl = `fid://${this.fid}.${t}`, this.fileType = n2.determineFileTypeFromMimeType(this.mimeType) || e.fileType || "file";
  }
  static determineFileTypeFromMimeType(e) {
    let t = ["audio", "document", "image", "video", "file"];
    if (e) {
      let r = e.split("/")[0];
      if (t.includes(r))
        return r;
      if (r.startsWith("text/"))
        return "document";
      if (r === "application/ogg")
        return "audio";
      if (r === "application/pdf")
        return "document";
      if (r === "video/")
        return "video";
    }
  }
  isAudio() {
    return this.fileType === "audio" ? true : this.mimeType ? this.mimeType?.startsWith("audio/") || this.mimeType?.startsWith("application/ogg") : false;
  }
  isVideo() {
    return this.fileType === "video" ? true : this.mimeType ? this.mimeType?.startsWith("video/") : false;
  }
  isImage() {
    return this.fileType === "image" ? true : this.mimeType ? this.mimeType?.startsWith("image/") : false;
  }
  isDocument() {
    return this.fileType === "document" ? true : this.mimeType ? this.mimeType?.startsWith("text/") || this.mimeType?.startsWith("application/pdf") : false;
  }
  asBase64(e) {
    if (this.data instanceof Buffer)
      return e ? `data:${this.mimeType};base64,${this.data.toString("base64")}` : this.data.toString("base64");
    if (typeof this.data == "string")
      return this.data;
  }
};
var $e = class {
  constructor(e = (t, r) => window.fetch(t, r)) {
    this.fetch = e;
  }
  async executeRequest(e, t) {
    return await this.fetch(e, t);
  }
};
var K = /* @__PURE__ */ new WeakMap();
var $ = /* @__PURE__ */ new WeakMap();
var W = /* @__PURE__ */ new WeakMap();
var rt = Symbol("anyProducer");
var $r = Promise.resolve();
var nt = Symbol("listenerAdded");
var it = Symbol("listenerRemoved");
var st = false;
var tr = false;
function ye(n6) {
  if (typeof n6 != "string" && typeof n6 != "symbol" && typeof n6 != "number")
    throw new TypeError("`eventName` must be a string, symbol, or number");
}
function et(n6) {
  if (typeof n6 != "function")
    throw new TypeError("listener must be a function");
}
function ve(n6, e) {
  let t = $.get(n6);
  if (t.has(e))
    return t.get(e);
}
function Le(n6, e) {
  let t = typeof e == "string" || typeof e == "symbol" || typeof e == "number" ? e : rt, r = W.get(n6);
  if (r.has(t))
    return r.get(t);
}
function ds(n6, e, t) {
  let r = W.get(n6);
  if (r.has(e))
    for (let i of r.get(e))
      i.enqueue(t);
  if (r.has(rt)) {
    let i = Promise.all([e, t]);
    for (let s of r.get(rt))
      s.enqueue(i);
  }
}
function en(n6, e) {
  e = Array.isArray(e) ? e : [e];
  let t = false, r = () => {
  }, i = [], s = { enqueue(o) {
    i.push(o), r();
  }, finish() {
    t = true, r();
  } };
  for (let o of e) {
    let a = Le(n6, o);
    a || (a = /* @__PURE__ */ new Set(), W.get(n6).set(o, a)), a.add(s);
  }
  return { async next() {
    return i ? i.length === 0 ? t ? (i = void 0, this.next()) : (await new Promise((o) => {
      r = o;
    }), this.next()) : { done: false, value: await i.shift() } : { done: true };
  }, async return(o) {
    i = void 0;
    for (let a of e) {
      let l = Le(n6, a);
      l && (l.delete(s), l.size === 0 && W.get(n6).delete(a));
    }
    return r(), arguments.length > 0 ? { done: true, value: await o } : { done: true };
  }, [Symbol.asyncIterator]() {
    return this;
  } };
}
function tn(n6) {
  if (n6 === void 0)
    return rn;
  if (!Array.isArray(n6))
    throw new TypeError("`methodNames` must be an array of strings");
  for (let e of n6)
    if (!rn.includes(e))
      throw typeof e != "string" ? new TypeError("`methodNames` element must be a string") : new Error(`${e} is not Emittery method`);
  return n6;
}
var ke = (n6) => n6 === nt || n6 === it;
function tt(n6, e, t) {
  if (ke(e))
    try {
      st = true, n6.emit(e, t);
    } finally {
      st = false;
    }
}
var ee = class n3 {
  static mixin(e, t) {
    return t = tn(t), (r) => {
      if (typeof r != "function")
        throw new TypeError("`target` must be function");
      for (let o of t)
        if (r.prototype[o] !== void 0)
          throw new Error(`The property \`${o}\` already exists on \`target\``);
      function i() {
        return Object.defineProperty(this, e, { enumerable: false, value: new n3() }), this[e];
      }
      Object.defineProperty(r.prototype, e, { enumerable: false, get: i });
      let s = (o) => function(...a) {
        return this[e][o](...a);
      };
      for (let o of t)
        Object.defineProperty(r.prototype, o, { enumerable: false, value: s(o) });
      return r;
    };
  }
  static get isDebugEnabled() {
    if (typeof globalThis.process?.env != "object")
      return tr;
    let { env: e } = globalThis.process ?? { env: {} };
    return e.DEBUG === "emittery" || e.DEBUG === "*" || tr;
  }
  static set isDebugEnabled(e) {
    tr = e;
  }
  constructor(e = {}) {
    K.set(this, /* @__PURE__ */ new Set()), $.set(this, /* @__PURE__ */ new Map()), W.set(this, /* @__PURE__ */ new Map()), W.get(this).set(rt, /* @__PURE__ */ new Set()), this.debug = e.debug ?? {}, this.debug.enabled === void 0 && (this.debug.enabled = false), this.debug.logger || (this.debug.logger = (t, r, i, s) => {
      try {
        s = JSON.stringify(s);
      } catch {
        s = `Object with the following keys failed to stringify: ${Object.keys(s).join(",")}`;
      }
      (typeof i == "symbol" || typeof i == "number") && (i = i.toString());
      let o = /* @__PURE__ */ new Date(), a = `${o.getHours()}:${o.getMinutes()}:${o.getSeconds()}.${o.getMilliseconds()}`;
      console.log(`[${a}][emittery:${t}][${r}] Event Name: ${i}
	data: ${s}`);
    });
  }
  logIfDebugEnabled(e, t, r) {
    (n3.isDebugEnabled || this.debug.enabled) && this.debug.logger(e, this.debug.name, t, r);
  }
  on(e, t) {
    et(t), e = Array.isArray(e) ? e : [e];
    for (let r of e) {
      ye(r);
      let i = ve(this, r);
      i || (i = /* @__PURE__ */ new Set(), $.get(this).set(r, i)), i.add(t), this.logIfDebugEnabled("subscribe", r, void 0), ke(r) || tt(this, nt, { eventName: r, listener: t });
    }
    return this.off.bind(this, e, t);
  }
  off(e, t) {
    et(t), e = Array.isArray(e) ? e : [e];
    for (let r of e) {
      ye(r);
      let i = ve(this, r);
      i && (i.delete(t), i.size === 0 && $.get(this).delete(r)), this.logIfDebugEnabled("unsubscribe", r, void 0), ke(r) || tt(this, it, { eventName: r, listener: t });
    }
  }
  once(e) {
    let t, r = new Promise((i) => {
      t = this.on(e, (s) => {
        t(), i(s);
      });
    });
    return r.off = t, r;
  }
  events(e) {
    e = Array.isArray(e) ? e : [e];
    for (let t of e)
      ye(t);
    return en(this, e);
  }
  async emit(e, t) {
    if (ye(e), ke(e) && !st)
      throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");
    this.logIfDebugEnabled("emit", e, t), ds(this, e, t);
    let r = ve(this, e) ?? /* @__PURE__ */ new Set(), i = K.get(this), s = [...r], o = ke(e) ? [] : [...i];
    await $r, await Promise.all([...s.map(async (a) => {
      if (r.has(a))
        return a(t);
    }), ...o.map(async (a) => {
      if (i.has(a))
        return a(e, t);
    })]);
  }
  async emitSerial(e, t) {
    if (ye(e), ke(e) && !st)
      throw new TypeError("`eventName` cannot be meta event `listenerAdded` or `listenerRemoved`");
    this.logIfDebugEnabled("emitSerial", e, t);
    let r = ve(this, e) ?? /* @__PURE__ */ new Set(), i = K.get(this), s = [...r], o = [...i];
    await $r;
    for (let a of s)
      r.has(a) && await a(t);
    for (let a of o)
      i.has(a) && await a(e, t);
  }
  onAny(e) {
    return et(e), this.logIfDebugEnabled("subscribeAny", void 0, void 0), K.get(this).add(e), tt(this, nt, { listener: e }), this.offAny.bind(this, e);
  }
  anyEvent() {
    return en(this);
  }
  offAny(e) {
    et(e), this.logIfDebugEnabled("unsubscribeAny", void 0, void 0), tt(this, it, { listener: e }), K.get(this).delete(e);
  }
  clearListeners(e) {
    e = Array.isArray(e) ? e : [e];
    for (let t of e)
      if (this.logIfDebugEnabled("clear", t, void 0), typeof t == "string" || typeof t == "symbol" || typeof t == "number") {
        let r = ve(this, t);
        r && r.clear();
        let i = Le(this, t);
        if (i) {
          for (let s of i)
            s.finish();
          i.clear();
        }
      } else {
        K.get(this).clear();
        for (let [r, i] of $.get(this).entries())
          i.clear(), $.get(this).delete(r);
        for (let [r, i] of W.get(this).entries()) {
          for (let s of i)
            s.finish();
          i.clear(), W.get(this).delete(r);
        }
      }
  }
  listenerCount(e) {
    e = Array.isArray(e) ? e : [e];
    let t = 0;
    for (let r of e) {
      if (typeof r == "string") {
        t += K.get(this).size + (ve(this, r)?.size ?? 0) + (Le(this, r)?.size ?? 0) + (Le(this)?.size ?? 0);
        continue;
      }
      typeof r < "u" && ye(r), t += K.get(this).size;
      for (let i of $.get(this).values())
        t += i.size;
      for (let i of W.get(this).values())
        t += i.size;
    }
    return t;
  }
  bindMethods(e, t) {
    if (typeof e != "object" || e === null)
      throw new TypeError("`target` must be an object");
    t = tn(t);
    for (let r of t) {
      if (e[r] !== void 0)
        throw new Error(`The property \`${r}\` already exists on \`target\``);
      Object.defineProperty(e, r, { enumerable: false, value: this[r].bind(this) });
    }
  }
};
var rn = Object.getOwnPropertyNames(ee.prototype).filter((n6) => n6 !== "constructor");
Object.defineProperty(ee, "listenerAdded", { value: nt, writable: false, enumerable: true, configurable: false });
Object.defineProperty(ee, "listenerRemoved", { value: it, writable: false, enumerable: true, configurable: false });
var te = class {
  constructor() {
    this.messageHandlers = {};
    this._isClient = false;
    this.Resource = Te;
    this.events = new ee();
    this.intentMap = /* @__PURE__ */ new Map();
    this._messageListenerHandler = (e) => {
      if (e.origin !== window.location.origin) {
        console.warn(`Dropping Message received from an unknown origin: ${e.origin}`);
        return;
      }
      try {
        let t = e.data, r = this.messageHandlers[t.type];
        r ? r.call(this, t, e.source) : console.warn(`No handler found for message type: ${t.type}`);
      } catch (t) {
        console.error("Error processing the message:", t);
      }
    };
    this._initMessageListener(), this._httpClient = new $e();
  }
  unload() {
    window.removeEventListener("message", this._messageListenerHandler), console.log("Message listener removed.");
  }
  _initMessageListener() {
    window.addEventListener("message", this._messageListenerHandler, false), console.log("Message listener initialized.");
  }
  addMessageHandler(e, t) {
    this.messageHandlers[e] = t;
  }
  getLocalValue(e, t) {
    let r = e;
    this._isClient ? r = "omni/" + this._extensionId + "/" + e : r = "omni/host/" + e;
    let i = globalThis.localStorage.getItem(r);
    if (i !== null) {
      let s = JSON.parse(i), o = s.value;
      switch (s.type) {
        case "boolean":
          o = o === "true";
          break;
        case "object":
        case "number":
        case "string":
          break;
        default:
          return console.warn("Unsupported value type", s.type, "on", e), null;
      }
      return o;
    }
    return null;
  }
  setLocalValue(e, t) {
    if (e == null || e.length == 0)
      throw new Error("Invalid null Key passed into setLocalValue");
    let r = e;
    if (this._isClient ? r = "omni/" + this._extensionId + "/" + e : r = "omni/host/" + e, t == null) {
      globalThis.localStorage.removeItem(r);
      return;
    }
    let i = typeof t, s = t;
    switch (i) {
      case "number":
      case "string":
      case "object":
        break;
      case "boolean":
        s = t ? "true" : "false";
        break;
      default:
        console.warn("Unsupported value type", i, "on", e);
        return;
    }
    globalThis.localStorage.setItem(r, JSON.stringify({ type: i, value: t }));
  }
  send(e, t) {
    this._isClient ? (console.log("Sending message from client:", e), e.token = this.token, e = JSON.parse(JSON.stringify(e)), window.parent.postMessage(e, "*")) : console.warn("Attempted to send a message from the host without specifying a target.");
  }
  async runServerScript(e, t) {
    return await (await this._httpClient.executeRequest("/api/v1/mercenaries/runscript/" + e, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(t) })).json();
  }
  canEditFile(e) {
    return e ? this.intentMap.has(`file:edit:${e.mimeType}`) : false;
  }
  canViewFile(e) {
    return e ? this.intentMap.has(`file:show:${e.mimeType}`) : false;
  }
  async getFileObject(e) {
    try {
      let r = await (await this._httpClient.executeRequest("/fid/" + e + "?obj=true", { method: "GET", headers: { "Content-Type": "application/json" } })).json();
      return r ? (console.log("getFileObject", r), new Ye(r)) : (console.warn(`No valid file object found for fid ${e}`), null);
    } catch (t) {
      return console.error(t), null;
    }
  }
  async getFileBlob(e) {
    try {
      return await (await this._httpClient.executeRequest("/fid/" + e + "?download=true")).blob();
    } catch (t) {
      return console.error(t), null;
    }
  }
  async uploadFiles(e, t = "temporary") {
    if (e?.length > 0) {
      let r = await Promise.all(Array.from(e).map(async (i) => {
        let s = new FormData();
        s.append("storageType", t), s.append("file", i, i.name || Date.now().toString());
        try {
          let o = await fetch("/fid", { method: "POST", body: s });
          if (o.ok) {
            let a = await o.json();
            return a.length > 0 && a[0].ticket && a[0].fid ? a[0] : (console.warn("Failed to upload file", { data: a, file: i }), null);
          } else
            return console.warn("Failed to upload file", { response: o, file: i }), null;
        } catch (o) {
          return console.error("Failed to upload file", { error: o, file: i }), null;
        }
      }));
      return r = r.filter((i) => i), r;
    } else
      return [];
  }
  async startRecipe(e, t) {
    let i = await (await fetch("/api/v1/workflow/exec", { method: "POST", credentials: "include", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ workflow: e, args: t }) })).json();
    if (i.status === "JOB_STARTED")
      return { ...i };
  }
  async downloadFile(e, t) {
    let r = e.fid, i = t || e.fileName;
    fetch("/fid/" + r + "?download=true").then((s) => s.blob()).then((s) => {
      let o = URL.createObjectURL(s), a = document.createElement("a");
      a.href = o, a.download = i, document.body.appendChild(a), a.click(), document.body.removeChild(a);
    }).catch((s) => console.error(s));
  }
};
te.Resource = Te;
var ot = class extends te {
  constructor(t) {
    super();
    this._isClient = true, this._extensionId = t;
    let r = new URLSearchParams(location.search);
    this.options = JSON.parse(r.get("o") || "{}"), this.args = JSON.parse(r.get("q") || "{}"), r.has("omniHash") ? this.token = r.get("omniHash") : (console.warn("No omniHash found in the query string, this is not a window opened by OmniHost"), this.token = t + (/* @__PURE__ */ new Date()).getTime().toString());
  }
  get extensionId() {
    return this._extensionId;
  }
  init({ subscriptions: t } = { subscriptions: [] }) {
    console.log("OmniSDKClient initialized for " + this.extensionId + ".");
    let r = window.localStorage.getItem("omni-intentMap");
    if (r) {
      let i = JSON.parse(r);
      i && i.length > 0 && (this.intentMap = new Map(i));
    }
    return this.addMessageHandler("host_cscript_response", this._handleClientScriptResponse), this.addMessageHandler("host_sync_data", this._handleSyncData), t.includes("custom_extension_event") && this.addMessageHandler("custom_extension_event", this._handleCustomEvent), t.includes("host_chat_message_received") && this.addMessageHandler("host_chat_message_received", this._handleChatMessageReceived), this.register(), this;
  }
  register() {
    this.token && this.send({ type: "client_registration", token: this.token });
  }
  deregister(t) {
    this.send({ type: "client_deregistration", token: t });
  }
  sendChatMessage(t, r = "text/markdown", i, s) {
    let o = { type: "client_send_chat", message: { content: t, type: r, attachments: i, flags: s } };
    this.send(o);
  }
  async runClientScript(t, r) {
    let i = { type: "client_run_cscript", script: t, args: r, invokeId: this.extensionId + (/* @__PURE__ */ new Date()).getTime().toString() };
    return new Promise((s, o) => {
      this.send(i), this.events.once("host_cscript_response:" + i.invokeId).then((a) => {
        s(a);
      });
    });
  }
  async _handleCustomEvent(t) {
    if (t.type !== "custom_extension_event")
      return;
    let r = t;
    r.extensionId === this.extensionId && await this.events.emit("custom_event", { eventId: r.eventId, eventArgs: r.eventArgs });
  }
  async _handleSyncData(t) {
    if (t.type !== "host_sync_data")
      return;
    let r = t;
    this.intentMap = new Map(r.frame), await this.events.emit("data_updated", [{ property: "intentMap" }]);
  }
  async _handleChatMessageReceived(t) {
    if (t.type !== "host_chat_message_received")
      return;
    let r = t;
    await this.events.emit("chat_message_received", [r.message]);
  }
  async _handleClientScriptResponse(t) {
    if (t.type !== "host_cscript_response")
      return;
    let r = t;
    await this.events.emit("host_cscript_response:" + r.invokeId, r.result);
  }
  showExtension(t, r, i = "", s = {}, o = "open") {
    let a = { type: "client_show_extension", extensionId: t, action: o, args: r, page: i, opts: s };
    this.send(a);
  }
  hide() {
    let t = { type: "client_window_message", action: "hide", args: {} };
    this.send(t);
  }
  show() {
    let t = { type: "client_window_message", action: "show", args: {} };
    this.send(t);
  }
  close() {
    let t = { type: "client_window_message", action: "close", args: {} };
    this.send(t);
  }
  signalIntent(t, r, i, s = {}) {
    let o = { type: "client_signal_intent", intent: t, target: r, opts: s || {}, payload: i };
    this.send(o);
  }
  showToast(t, r) {
    let i = { type: "client_show_toast", message: t, options: r };
    this.send(i);
  }
  showTopBanner(t, r, i) {
    let s = { type: "client_show_top_banner", bannerTitle: t, bannerDescription: r, options: i };
    this.send(s);
  }
  openRecipeInEditor(t, r) {
    let i = { type: "client_load_recipe", recipeId: t, recipeVersion: r };
    this.send(i);
  }
  async runExtensionScript(t, r) {
    let i = await this._httpClient.executeRequest(`/api/v1/mercenaries/runscript/${this.extensionId}:` + t, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(r) });
    if (!i.ok)
      throw new Error("Server error: HTTP status " + i.status);
    return await i.json();
  }
};
var Jt = ps(Zi(), 1);
function Qr() {
  return { async: false, breaks: false, extensions: null, gfm: true, hooks: null, pedantic: false, renderer: null, silent: false, tokenizer: null, walkTokens: null };
}
var ge = Qr();
function $i(n6) {
  ge = n6;
}
var es = /[&<>"']/;
var al = new RegExp(es.source, "g");
var ts = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
var ll = new RegExp(ts.source, "g");
var ul = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
var Qi = (n6) => ul[n6];
function R(n6, e) {
  if (e) {
    if (es.test(n6))
      return n6.replace(al, Qi);
  } else if (ts.test(n6))
    return n6.replace(ll, Qi);
  return n6;
}
var cl = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function hl(n6) {
  return n6.replace(cl, (e, t) => (t = t.toLowerCase(), t === "colon" ? ":" : t.charAt(0) === "#" ? t.charAt(1) === "x" ? String.fromCharCode(parseInt(t.substring(2), 16)) : String.fromCharCode(+t.substring(1)) : ""));
}
var pl = /(^|[^\[])\^/g;
function k(n6, e) {
  n6 = typeof n6 == "string" ? n6 : n6.source, e = e || "";
  let t = { replace: (r, i) => (i = typeof i == "object" && "source" in i ? i.source : i, i = i.replace(pl, "$1"), n6 = n6.replace(r, i), t), getRegex: () => new RegExp(n6, e) };
  return t;
}
function ji(n6) {
  try {
    n6 = encodeURI(n6).replace(/%25/g, "%");
  } catch {
    return null;
  }
  return n6;
}
var Ut = { exec: () => null };
function Xi(n6, e) {
  let t = n6.replace(/\|/g, (s, o, a) => {
    let l = false, u = o;
    for (; --u >= 0 && a[u] === "\\"; )
      l = !l;
    return l ? "|" : " |";
  }), r = t.split(/ \|/), i = 0;
  if (r[0].trim() || r.shift(), r.length > 0 && !r[r.length - 1].trim() && r.pop(), e)
    if (r.length > e)
      r.splice(e);
    else
      for (; r.length < e; )
        r.push("");
  for (; i < r.length; i++)
    r[i] = r[i].trim().replace(/\\\|/g, "|");
  return r;
}
function Vt(n6, e, t) {
  let r = n6.length;
  if (r === 0)
    return "";
  let i = 0;
  for (; i < r; ) {
    let s = n6.charAt(r - i - 1);
    if (s === e && !t)
      i++;
    else if (s !== e && t)
      i++;
    else
      break;
  }
  return n6.slice(0, r - i);
}
function fl(n6, e) {
  if (n6.indexOf(e[1]) === -1)
    return -1;
  let t = 0;
  for (let r = 0; r < n6.length; r++)
    if (n6[r] === "\\")
      r++;
    else if (n6[r] === e[0])
      t++;
    else if (n6[r] === e[1] && (t--, t < 0))
      return r;
  return -1;
}
function Yi(n6, e, t, r) {
  let i = e.href, s = e.title ? R(e.title) : null, o = n6[1].replace(/\\([\[\]])/g, "$1");
  if (n6[0].charAt(0) !== "!") {
    r.state.inLink = true;
    let a = { type: "link", raw: t, href: i, title: s, text: o, tokens: r.inlineTokens(o) };
    return r.state.inLink = false, a;
  }
  return { type: "image", raw: t, href: i, title: s, text: R(o) };
}
function dl(n6, e) {
  let t = n6.match(/^(\s+)(?:```)/);
  if (t === null)
    return e;
  let r = t[1];
  return e.split(`
`).map((i) => {
    let s = i.match(/^\s+/);
    if (s === null)
      return i;
    let [o] = s;
    return o.length >= r.length ? i.slice(r.length) : i;
  }).join(`
`);
}
var Pe = class {
  constructor(e) {
    b(this, "options");
    b(this, "rules");
    b(this, "lexer");
    this.options = e || ge;
  }
  space(e) {
    let t = this.rules.block.newline.exec(e);
    if (t && t[0].length > 0)
      return { type: "space", raw: t[0] };
  }
  code(e) {
    let t = this.rules.block.code.exec(e);
    if (t) {
      let r = t[0].replace(/^ {1,4}/gm, "");
      return { type: "code", raw: t[0], codeBlockStyle: "indented", text: this.options.pedantic ? r : Vt(r, `
`) };
    }
  }
  fences(e) {
    let t = this.rules.block.fences.exec(e);
    if (t) {
      let r = t[0], i = dl(r, t[3] || "");
      return { type: "code", raw: r, lang: t[2] ? t[2].trim().replace(this.rules.inline._escapes, "$1") : t[2], text: i };
    }
  }
  heading(e) {
    let t = this.rules.block.heading.exec(e);
    if (t) {
      let r = t[2].trim();
      if (/#$/.test(r)) {
        let i = Vt(r, "#");
        (this.options.pedantic || !i || / $/.test(i)) && (r = i.trim());
      }
      return { type: "heading", raw: t[0], depth: t[1].length, text: r, tokens: this.lexer.inline(r) };
    }
  }
  hr(e) {
    let t = this.rules.block.hr.exec(e);
    if (t)
      return { type: "hr", raw: t[0] };
  }
  blockquote(e) {
    let t = this.rules.block.blockquote.exec(e);
    if (t) {
      let r = Vt(t[0].replace(/^ *>[ \t]?/gm, ""), `
`), i = this.lexer.state.top;
      this.lexer.state.top = true;
      let s = this.lexer.blockTokens(r);
      return this.lexer.state.top = i, { type: "blockquote", raw: t[0], tokens: s, text: r };
    }
  }
  list(e) {
    let t = this.rules.block.list.exec(e);
    if (t) {
      let r = t[1].trim(), i = r.length > 1, s = { type: "list", raw: "", ordered: i, start: i ? +r.slice(0, -1) : "", loose: false, items: [] };
      r = i ? `\\d{1,9}\\${r.slice(-1)}` : `\\${r}`, this.options.pedantic && (r = i ? r : "[*+-]");
      let o = new RegExp(`^( {0,3}${r})((?:[	 ][^\\n]*)?(?:\\n|$))`), a = "", l = "", u = false;
      for (; e; ) {
        let h = false;
        if (!(t = o.exec(e)) || this.rules.block.hr.test(e))
          break;
        a = t[0], e = e.substring(a.length);
        let c = t[2].split(`
`, 1)[0].replace(/^\t+/, (x) => " ".repeat(3 * x.length)), p = e.split(`
`, 1)[0], f = 0;
        this.options.pedantic ? (f = 2, l = c.trimStart()) : (f = t[2].search(/[^ ]/), f = f > 4 ? 1 : f, l = c.slice(f), f += t[1].length);
        let y = false;
        if (!c && /^ *$/.test(p) && (a += p + `
`, e = e.substring(p.length + 1), h = true), !h) {
          let x = new RegExp(`^ {0,${Math.min(3, f - 1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`), F = new RegExp(`^ {0,${Math.min(3, f - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`), ie = new RegExp(`^ {0,${Math.min(3, f - 1)}}(?:\`\`\`|~~~)`), M = new RegExp(`^ {0,${Math.min(3, f - 1)}}#`);
          for (; e; ) {
            let se = e.split(`
`, 1)[0];
            if (p = se, this.options.pedantic && (p = p.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), ie.test(p) || M.test(p) || x.test(p) || F.test(e))
              break;
            if (p.search(/[^ ]/) >= f || !p.trim())
              l += `
` + p.slice(f);
            else {
              if (y || c.search(/[^ ]/) >= 4 || ie.test(c) || M.test(c) || F.test(c))
                break;
              l += `
` + p;
            }
            !y && !p.trim() && (y = true), a += se + `
`, e = e.substring(se.length + 1), c = p.slice(f);
          }
        }
        s.loose || (u ? s.loose = true : /\n *\n *$/.test(a) && (u = true));
        let S = null, I;
        this.options.gfm && (S = /^\[[ xX]\] /.exec(l), S && (I = S[0] !== "[ ] ", l = l.replace(/^\[[ xX]\] +/, ""))), s.items.push({ type: "list_item", raw: a, task: !!S, checked: I, loose: false, text: l, tokens: [] }), s.raw += a;
      }
      s.items[s.items.length - 1].raw = a.trimEnd(), s.items[s.items.length - 1].text = l.trimEnd(), s.raw = s.raw.trimEnd();
      for (let h = 0; h < s.items.length; h++)
        if (this.lexer.state.top = false, s.items[h].tokens = this.lexer.blockTokens(s.items[h].text, []), !s.loose) {
          let c = s.items[h].tokens.filter((f) => f.type === "space"), p = c.length > 0 && c.some((f) => /\n.*\n/.test(f.raw));
          s.loose = p;
        }
      if (s.loose)
        for (let h = 0; h < s.items.length; h++)
          s.items[h].loose = true;
      return s;
    }
  }
  html(e) {
    let t = this.rules.block.html.exec(e);
    if (t)
      return { type: "html", block: true, raw: t[0], pre: t[1] === "pre" || t[1] === "script" || t[1] === "style", text: t[0] };
  }
  def(e) {
    let t = this.rules.block.def.exec(e);
    if (t) {
      let r = t[1].toLowerCase().replace(/\s+/g, " "), i = t[2] ? t[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "", s = t[3] ? t[3].substring(1, t[3].length - 1).replace(this.rules.inline._escapes, "$1") : t[3];
      return { type: "def", tag: r, raw: t[0], href: i, title: s };
    }
  }
  table(e) {
    let t = this.rules.block.table.exec(e);
    if (t) {
      if (!/[:|]/.test(t[2]))
        return;
      let r = { type: "table", raw: t[0], header: Xi(t[1]).map((i) => ({ text: i, tokens: [] })), align: t[2].replace(/^\||\| *$/g, "").split("|"), rows: t[3] && t[3].trim() ? t[3].replace(/\n[ \t]*$/, "").split(`
`) : [] };
      if (r.header.length === r.align.length) {
        let i = r.align.length, s, o, a, l;
        for (s = 0; s < i; s++) {
          let u = r.align[s];
          u && (/^ *-+: *$/.test(u) ? r.align[s] = "right" : /^ *:-+: *$/.test(u) ? r.align[s] = "center" : /^ *:-+ *$/.test(u) ? r.align[s] = "left" : r.align[s] = null);
        }
        for (i = r.rows.length, s = 0; s < i; s++)
          r.rows[s] = Xi(r.rows[s], r.header.length).map((u) => ({ text: u, tokens: [] }));
        for (i = r.header.length, o = 0; o < i; o++)
          r.header[o].tokens = this.lexer.inline(r.header[o].text);
        for (i = r.rows.length, o = 0; o < i; o++)
          for (l = r.rows[o], a = 0; a < l.length; a++)
            l[a].tokens = this.lexer.inline(l[a].text);
        return r;
      }
    }
  }
  lheading(e) {
    let t = this.rules.block.lheading.exec(e);
    if (t)
      return { type: "heading", raw: t[0], depth: t[2].charAt(0) === "=" ? 1 : 2, text: t[1], tokens: this.lexer.inline(t[1]) };
  }
  paragraph(e) {
    let t = this.rules.block.paragraph.exec(e);
    if (t) {
      let r = t[1].charAt(t[1].length - 1) === `
` ? t[1].slice(0, -1) : t[1];
      return { type: "paragraph", raw: t[0], text: r, tokens: this.lexer.inline(r) };
    }
  }
  text(e) {
    let t = this.rules.block.text.exec(e);
    if (t)
      return { type: "text", raw: t[0], text: t[0], tokens: this.lexer.inline(t[0]) };
  }
  escape(e) {
    let t = this.rules.inline.escape.exec(e);
    if (t)
      return { type: "escape", raw: t[0], text: R(t[1]) };
  }
  tag(e) {
    let t = this.rules.inline.tag.exec(e);
    if (t)
      return !this.lexer.state.inLink && /^<a /i.test(t[0]) ? this.lexer.state.inLink = true : this.lexer.state.inLink && /^<\/a>/i.test(t[0]) && (this.lexer.state.inLink = false), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(t[0]) ? this.lexer.state.inRawBlock = true : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0]) && (this.lexer.state.inRawBlock = false), { type: "html", raw: t[0], inLink: this.lexer.state.inLink, inRawBlock: this.lexer.state.inRawBlock, block: false, text: t[0] };
  }
  link(e) {
    let t = this.rules.inline.link.exec(e);
    if (t) {
      let r = t[2].trim();
      if (!this.options.pedantic && /^</.test(r)) {
        if (!/>$/.test(r))
          return;
        let o = Vt(r.slice(0, -1), "\\");
        if ((r.length - o.length) % 2 === 0)
          return;
      } else {
        let o = fl(t[2], "()");
        if (o > -1) {
          let l = (t[0].indexOf("!") === 0 ? 5 : 4) + t[1].length + o;
          t[2] = t[2].substring(0, o), t[0] = t[0].substring(0, l).trim(), t[3] = "";
        }
      }
      let i = t[2], s = "";
      if (this.options.pedantic) {
        let o = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);
        o && (i = o[1], s = o[3]);
      } else
        s = t[3] ? t[3].slice(1, -1) : "";
      return i = i.trim(), /^</.test(i) && (this.options.pedantic && !/>$/.test(r) ? i = i.slice(1) : i = i.slice(1, -1)), Yi(t, { href: i && i.replace(this.rules.inline._escapes, "$1"), title: s && s.replace(this.rules.inline._escapes, "$1") }, t[0], this.lexer);
    }
  }
  reflink(e, t) {
    let r;
    if ((r = this.rules.inline.reflink.exec(e)) || (r = this.rules.inline.nolink.exec(e))) {
      let i = (r[2] || r[1]).replace(/\s+/g, " ");
      if (i = t[i.toLowerCase()], !i) {
        let s = r[0].charAt(0);
        return { type: "text", raw: s, text: s };
      }
      return Yi(r, i, r[0], this.lexer);
    }
  }
  emStrong(e, t, r = "") {
    let i = this.rules.inline.emStrong.lDelim.exec(e);
    if (!i || i[3] && r.match(/[\p{L}\p{N}]/u))
      return;
    if (!(i[1] || i[2] || "") || !r || this.rules.inline.punctuation.exec(r)) {
      let o = [...i[0]].length - 1, a, l, u = o, h = 0, c = i[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      for (c.lastIndex = 0, t = t.slice(-1 * e.length + i[0].length - 1); (i = c.exec(t)) != null; ) {
        if (a = i[1] || i[2] || i[3] || i[4] || i[5] || i[6], !a)
          continue;
        if (l = [...a].length, i[3] || i[4]) {
          u += l;
          continue;
        } else if ((i[5] || i[6]) && o % 3 && !((o + l) % 3)) {
          h += l;
          continue;
        }
        if (u -= l, u > 0)
          continue;
        l = Math.min(l, l + u + h);
        let p = [...e].slice(0, o + i.index + l + 1).join("");
        if (Math.min(o, l) % 2) {
          let y = p.slice(1, -1);
          return { type: "em", raw: p, text: y, tokens: this.lexer.inlineTokens(y) };
        }
        let f = p.slice(2, -2);
        return { type: "strong", raw: p, text: f, tokens: this.lexer.inlineTokens(f) };
      }
    }
  }
  codespan(e) {
    let t = this.rules.inline.code.exec(e);
    if (t) {
      let r = t[2].replace(/\n/g, " "), i = /[^ ]/.test(r), s = /^ /.test(r) && / $/.test(r);
      return i && s && (r = r.substring(1, r.length - 1)), r = R(r, true), { type: "codespan", raw: t[0], text: r };
    }
  }
  br(e) {
    let t = this.rules.inline.br.exec(e);
    if (t)
      return { type: "br", raw: t[0] };
  }
  del(e) {
    let t = this.rules.inline.del.exec(e);
    if (t)
      return { type: "del", raw: t[0], text: t[2], tokens: this.lexer.inlineTokens(t[2]) };
  }
  autolink(e) {
    let t = this.rules.inline.autolink.exec(e);
    if (t) {
      let r, i;
      return t[2] === "@" ? (r = R(t[1]), i = "mailto:" + r) : (r = R(t[1]), i = r), { type: "link", raw: t[0], text: r, href: i, tokens: [{ type: "text", raw: r, text: r }] };
    }
  }
  url(e) {
    let t;
    if (t = this.rules.inline.url.exec(e)) {
      let r, i;
      if (t[2] === "@")
        r = R(t[0]), i = "mailto:" + r;
      else {
        let s;
        do
          s = t[0], t[0] = this.rules.inline._backpedal.exec(t[0])[0];
        while (s !== t[0]);
        r = R(t[0]), t[1] === "www." ? i = "http://" + t[0] : i = t[0];
      }
      return { type: "link", raw: t[0], text: r, href: i, tokens: [{ type: "text", raw: r, text: r }] };
    }
  }
  inlineText(e) {
    let t = this.rules.inline.text.exec(e);
    if (t) {
      let r;
      return this.lexer.state.inRawBlock ? r = t[0] : r = R(t[0]), { type: "text", raw: t[0], text: r };
    }
  }
};
var m = { newline: /^(?: *(?:\n|$))+/, code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/, fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/, hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/, heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/, blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/, list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/, html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))", def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/, table: Ut, lheading: /^(?!bull )((?:.|\n(?!\s*?\n|bull ))+?)\n {0,3}(=+|-+) *(?:\n+|$)/, _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/, text: /^[^\n]+/ };
m._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
m._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
m.def = k(m.def).replace("label", m._label).replace("title", m._title).getRegex();
m.bullet = /(?:[*+-]|\d{1,9}[.)])/;
m.listItemStart = k(/^( *)(bull) */).replace("bull", m.bullet).getRegex();
m.list = k(m.list).replace(/bull/g, m.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + m.def.source + ")").getRegex();
m._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
m._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
m.html = k(m.html, "i").replace("comment", m._comment).replace("tag", m._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
m.lheading = k(m.lheading).replace(/bull/g, m.bullet).getRegex();
m.paragraph = k(m._paragraph).replace("hr", m.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", m._tag).getRegex();
m.blockquote = k(m.blockquote).replace("paragraph", m.paragraph).getRegex();
m.normal = { ...m };
m.gfm = { ...m.normal, table: "^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)" };
m.gfm.table = k(m.gfm.table).replace("hr", m.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", m._tag).getRegex();
m.gfm.paragraph = k(m._paragraph).replace("hr", m.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", m.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", m._tag).getRegex();
m.pedantic = { ...m.normal, html: k(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", m._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(), def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/, heading: /^(#{1,6})(.*)(?:\n+|$)/, fences: Ut, lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/, paragraph: k(m.normal._paragraph).replace("hr", m.hr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", m.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex() };
var d = { escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/, autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/, url: Ut, tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/, reflink: /^!?\[(label)\]\[(ref)\]/, nolink: /^!?\[(ref)\](?:\[\])?/, reflinkSearch: "reflink|nolink(?!\\()", emStrong: { lDelim: /^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/, rDelimAst: /^[^_*]*?__[^_*]*?\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\*)[punct](\*+)(?=[\s]|$)|[^punct\s](\*+)(?!\*)(?=[punct\s]|$)|(?!\*)[punct\s](\*+)(?=[^punct\s])|[\s](\*+)(?!\*)(?=[punct])|(?!\*)[punct](\*+)(?!\*)(?=[punct])|[^punct\s](\*+)(?=[^punct\s])/, rDelimUnd: /^[^_*]*?\*\*[^_*]*?_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\s]|$)|[^punct\s](_+)(?!_)(?=[punct\s]|$)|(?!_)[punct\s](_+)(?=[^punct\s])|[\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])/ }, code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/, br: /^( {2,}|\\)\n(?!\s*$)/, del: Ut, text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/, punctuation: /^((?![*_])[\spunctuation])/ };
d._punctuation = "\\p{P}$+<=>`^|~";
d.punctuation = k(d.punctuation, "u").replace(/punctuation/g, d._punctuation).getRegex();
d.blockSkip = /\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g;
d.anyPunctuation = /\\[punct]/g;
d._escapes = /\\([punct])/g;
d._comment = k(m._comment).replace("(?:-->|$)", "-->").getRegex();
d.emStrong.lDelim = k(d.emStrong.lDelim, "u").replace(/punct/g, d._punctuation).getRegex();
d.emStrong.rDelimAst = k(d.emStrong.rDelimAst, "gu").replace(/punct/g, d._punctuation).getRegex();
d.emStrong.rDelimUnd = k(d.emStrong.rDelimUnd, "gu").replace(/punct/g, d._punctuation).getRegex();
d.anyPunctuation = k(d.anyPunctuation, "gu").replace(/punct/g, d._punctuation).getRegex();
d._escapes = k(d._escapes, "gu").replace(/punct/g, d._punctuation).getRegex();
d._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
d._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
d.autolink = k(d.autolink).replace("scheme", d._scheme).replace("email", d._email).getRegex();
d._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
d.tag = k(d.tag).replace("comment", d._comment).replace("attribute", d._attribute).getRegex();
d._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
d._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
d._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
d.link = k(d.link).replace("label", d._label).replace("href", d._href).replace("title", d._title).getRegex();
d.reflink = k(d.reflink).replace("label", d._label).replace("ref", m._label).getRegex();
d.nolink = k(d.nolink).replace("ref", m._label).getRegex();
d.reflinkSearch = k(d.reflinkSearch, "g").replace("reflink", d.reflink).replace("nolink", d.nolink).getRegex();
d.normal = { ...d };
d.pedantic = { ...d.normal, strong: { start: /^__|\*\*/, middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/, endAst: /\*\*(?!\*)/g, endUnd: /__(?!_)/g }, em: { start: /^_|\*/, middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/, endAst: /\*(?!\*)/g, endUnd: /_(?!_)/g }, link: k(/^!?\[(label)\]\((.*?)\)/).replace("label", d._label).getRegex(), reflink: k(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", d._label).getRegex() };
d.gfm = { ...d.normal, escape: k(d.escape).replace("])", "~|])").getRegex(), _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/, url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/, _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/, del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/, text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/ };
d.gfm.url = k(d.gfm.url, "i").replace("email", d.gfm._extended_email).getRegex();
d.breaks = { ...d.gfm, br: k(d.br).replace("{2,}", "*").getRegex(), text: k(d.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex() };
var X = class n4 {
  constructor(e) {
    b(this, "tokens");
    b(this, "options");
    b(this, "state");
    b(this, "tokenizer");
    b(this, "inlineQueue");
    this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = e || ge, this.options.tokenizer = this.options.tokenizer || new Pe(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = { inLink: false, inRawBlock: false, top: true };
    let t = { block: m.normal, inline: d.normal };
    this.options.pedantic ? (t.block = m.pedantic, t.inline = d.pedantic) : this.options.gfm && (t.block = m.gfm, this.options.breaks ? t.inline = d.breaks : t.inline = d.gfm), this.tokenizer.rules = t;
  }
  static get rules() {
    return { block: m, inline: d };
  }
  static lex(e, t) {
    return new n4(t).lex(e);
  }
  static lexInline(e, t) {
    return new n4(t).inlineTokens(e);
  }
  lex(e) {
    e = e.replace(/\r\n|\r/g, `
`), this.blockTokens(e, this.tokens);
    let t;
    for (; t = this.inlineQueue.shift(); )
      this.inlineTokens(t.src, t.tokens);
    return this.tokens;
  }
  blockTokens(e, t = []) {
    this.options.pedantic ? e = e.replace(/\t/g, "    ").replace(/^ +$/gm, "") : e = e.replace(/^( *)(\t+)/gm, (a, l, u) => l + "    ".repeat(u.length));
    let r, i, s, o;
    for (; e; )
      if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((a) => (r = a.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), true) : false))) {
        if (r = this.tokenizer.space(e)) {
          e = e.substring(r.raw.length), r.raw.length === 1 && t.length > 0 ? t[t.length - 1].raw += `
` : t.push(r);
          continue;
        }
        if (r = this.tokenizer.code(e)) {
          e = e.substring(r.raw.length), i = t[t.length - 1], i && (i.type === "paragraph" || i.type === "text") ? (i.raw += `
` + r.raw, i.text += `
` + r.text, this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : t.push(r);
          continue;
        }
        if (r = this.tokenizer.fences(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.heading(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.hr(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.blockquote(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.list(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.html(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.def(e)) {
          e = e.substring(r.raw.length), i = t[t.length - 1], i && (i.type === "paragraph" || i.type === "text") ? (i.raw += `
` + r.raw, i.text += `
` + r.raw, this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : this.tokens.links[r.tag] || (this.tokens.links[r.tag] = { href: r.href, title: r.title });
          continue;
        }
        if (r = this.tokenizer.table(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.lheading(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (s = e, this.options.extensions && this.options.extensions.startBlock) {
          let a = 1 / 0, l = e.slice(1), u;
          this.options.extensions.startBlock.forEach((h) => {
            u = h.call({ lexer: this }, l), typeof u == "number" && u >= 0 && (a = Math.min(a, u));
          }), a < 1 / 0 && a >= 0 && (s = e.substring(0, a + 1));
        }
        if (this.state.top && (r = this.tokenizer.paragraph(s))) {
          i = t[t.length - 1], o && i.type === "paragraph" ? (i.raw += `
` + r.raw, i.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : t.push(r), o = s.length !== e.length, e = e.substring(r.raw.length);
          continue;
        }
        if (r = this.tokenizer.text(e)) {
          e = e.substring(r.raw.length), i = t[t.length - 1], i && i.type === "text" ? (i.raw += `
` + r.raw, i.text += `
` + r.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = i.text) : t.push(r);
          continue;
        }
        if (e) {
          let a = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(a);
            break;
          } else
            throw new Error(a);
        }
      }
    return this.state.top = true, t;
  }
  inline(e, t = []) {
    return this.inlineQueue.push({ src: e, tokens: t }), t;
  }
  inlineTokens(e, t = []) {
    let r, i, s, o = e, a, l, u;
    if (this.tokens.links) {
      let h = Object.keys(this.tokens.links);
      if (h.length > 0)
        for (; (a = this.tokenizer.rules.inline.reflinkSearch.exec(o)) != null; )
          h.includes(a[0].slice(a[0].lastIndexOf("[") + 1, -1)) && (o = o.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + o.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
    }
    for (; (a = this.tokenizer.rules.inline.blockSkip.exec(o)) != null; )
      o = o.slice(0, a.index) + "[" + "a".repeat(a[0].length - 2) + "]" + o.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    for (; (a = this.tokenizer.rules.inline.anyPunctuation.exec(o)) != null; )
      o = o.slice(0, a.index) + "++" + o.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);
    for (; e; )
      if (l || (u = ""), l = false, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((h) => (r = h.call({ lexer: this }, e, t)) ? (e = e.substring(r.raw.length), t.push(r), true) : false))) {
        if (r = this.tokenizer.escape(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.tag(e)) {
          e = e.substring(r.raw.length), i = t[t.length - 1], i && r.type === "text" && i.type === "text" ? (i.raw += r.raw, i.text += r.text) : t.push(r);
          continue;
        }
        if (r = this.tokenizer.link(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.reflink(e, this.tokens.links)) {
          e = e.substring(r.raw.length), i = t[t.length - 1], i && r.type === "text" && i.type === "text" ? (i.raw += r.raw, i.text += r.text) : t.push(r);
          continue;
        }
        if (r = this.tokenizer.emStrong(e, o, u)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.codespan(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.br(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.del(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (r = this.tokenizer.autolink(e)) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (!this.state.inLink && (r = this.tokenizer.url(e))) {
          e = e.substring(r.raw.length), t.push(r);
          continue;
        }
        if (s = e, this.options.extensions && this.options.extensions.startInline) {
          let h = 1 / 0, c = e.slice(1), p;
          this.options.extensions.startInline.forEach((f) => {
            p = f.call({ lexer: this }, c), typeof p == "number" && p >= 0 && (h = Math.min(h, p));
          }), h < 1 / 0 && h >= 0 && (s = e.substring(0, h + 1));
        }
        if (r = this.tokenizer.inlineText(s)) {
          e = e.substring(r.raw.length), r.raw.slice(-1) !== "_" && (u = r.raw.slice(-1)), l = true, i = t[t.length - 1], i && i.type === "text" ? (i.raw += r.raw, i.text += r.text) : t.push(r);
          continue;
        }
        if (e) {
          let h = "Infinite loop on byte: " + e.charCodeAt(0);
          if (this.options.silent) {
            console.error(h);
            break;
          } else
            throw new Error(h);
        }
      }
    return t;
  }
};
var Ae = class {
  constructor(e) {
    b(this, "options");
    this.options = e || ge;
  }
  code(e, t, r) {
    let i = (t || "").match(/^\S*/)?.[0];
    return e = e.replace(/\n$/, "") + `
`, i ? '<pre><code class="language-' + R(i) + '">' + (r ? e : R(e, true)) + `</code></pre>
` : "<pre><code>" + (r ? e : R(e, true)) + `</code></pre>
`;
  }
  blockquote(e) {
    return `<blockquote>
${e}</blockquote>
`;
  }
  html(e, t) {
    return e;
  }
  heading(e, t, r) {
    return `<h${t}>${e}</h${t}>
`;
  }
  hr() {
    return `<hr>
`;
  }
  list(e, t, r) {
    let i = t ? "ol" : "ul", s = t && r !== 1 ? ' start="' + r + '"' : "";
    return "<" + i + s + `>
` + e + "</" + i + `>
`;
  }
  listitem(e, t, r) {
    return `<li>${e}</li>
`;
  }
  checkbox(e) {
    return "<input " + (e ? 'checked="" ' : "") + 'disabled="" type="checkbox">';
  }
  paragraph(e) {
    return `<p>${e}</p>
`;
  }
  table(e, t) {
    return t && (t = `<tbody>${t}</tbody>`), `<table>
<thead>
` + e + `</thead>
` + t + `</table>
`;
  }
  tablerow(e) {
    return `<tr>
${e}</tr>
`;
  }
  tablecell(e, t) {
    let r = t.header ? "th" : "td";
    return (t.align ? `<${r} align="${t.align}">` : `<${r}>`) + e + `</${r}>
`;
  }
  strong(e) {
    return `<strong>${e}</strong>`;
  }
  em(e) {
    return `<em>${e}</em>`;
  }
  codespan(e) {
    return `<code>${e}</code>`;
  }
  br() {
    return "<br>";
  }
  del(e) {
    return `<del>${e}</del>`;
  }
  link(e, t, r) {
    let i = ji(e);
    if (i === null)
      return r;
    e = i;
    let s = '<a href="' + e + '"';
    return t && (s += ' title="' + t + '"'), s += ">" + r + "</a>", s;
  }
  image(e, t, r) {
    let i = ji(e);
    if (i === null)
      return r;
    e = i;
    let s = `<img src="${e}" alt="${r}"`;
    return t && (s += ` title="${t}"`), s += ">", s;
  }
  text(e) {
    return e;
  }
};
var Je = class {
  strong(e) {
    return e;
  }
  em(e) {
    return e;
  }
  codespan(e) {
    return e;
  }
  del(e) {
    return e;
  }
  html(e) {
    return e;
  }
  text(e) {
    return e;
  }
  link(e, t, r) {
    return "" + r;
  }
  image(e, t, r) {
    return "" + r;
  }
  br() {
    return "";
  }
};
var Y = class n5 {
  constructor(e) {
    b(this, "options");
    b(this, "renderer");
    b(this, "textRenderer");
    this.options = e || ge, this.options.renderer = this.options.renderer || new Ae(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Je();
  }
  static parse(e, t) {
    return new n5(t).parse(e);
  }
  static parseInline(e, t) {
    return new n5(t).parseInline(e);
  }
  parse(e, t = true) {
    let r = "";
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[s.type]) {
        let o = s, a = this.options.extensions.renderers[o.type].call({ parser: this }, o);
        if (a !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(o.type)) {
          r += a || "";
          continue;
        }
      }
      switch (s.type) {
        case "space":
          continue;
        case "hr": {
          r += this.renderer.hr();
          continue;
        }
        case "heading": {
          let o = s;
          r += this.renderer.heading(this.parseInline(o.tokens), o.depth, hl(this.parseInline(o.tokens, this.textRenderer)));
          continue;
        }
        case "code": {
          let o = s;
          r += this.renderer.code(o.text, o.lang, !!o.escaped);
          continue;
        }
        case "table": {
          let o = s, a = "", l = "";
          for (let h = 0; h < o.header.length; h++)
            l += this.renderer.tablecell(this.parseInline(o.header[h].tokens), { header: true, align: o.align[h] });
          a += this.renderer.tablerow(l);
          let u = "";
          for (let h = 0; h < o.rows.length; h++) {
            let c = o.rows[h];
            l = "";
            for (let p = 0; p < c.length; p++)
              l += this.renderer.tablecell(this.parseInline(c[p].tokens), { header: false, align: o.align[p] });
            u += this.renderer.tablerow(l);
          }
          r += this.renderer.table(a, u);
          continue;
        }
        case "blockquote": {
          let o = s, a = this.parse(o.tokens);
          r += this.renderer.blockquote(a);
          continue;
        }
        case "list": {
          let o = s, a = o.ordered, l = o.start, u = o.loose, h = "";
          for (let c = 0; c < o.items.length; c++) {
            let p = o.items[c], f = p.checked, y = p.task, S = "";
            if (p.task) {
              let I = this.renderer.checkbox(!!f);
              u ? p.tokens.length > 0 && p.tokens[0].type === "paragraph" ? (p.tokens[0].text = I + " " + p.tokens[0].text, p.tokens[0].tokens && p.tokens[0].tokens.length > 0 && p.tokens[0].tokens[0].type === "text" && (p.tokens[0].tokens[0].text = I + " " + p.tokens[0].tokens[0].text)) : p.tokens.unshift({ type: "text", text: I + " " }) : S += I + " ";
            }
            S += this.parse(p.tokens, u), h += this.renderer.listitem(S, y, !!f);
          }
          r += this.renderer.list(h, a, l);
          continue;
        }
        case "html": {
          let o = s;
          r += this.renderer.html(o.text, o.block);
          continue;
        }
        case "paragraph": {
          let o = s;
          r += this.renderer.paragraph(this.parseInline(o.tokens));
          continue;
        }
        case "text": {
          let o = s, a = o.tokens ? this.parseInline(o.tokens) : o.text;
          for (; i + 1 < e.length && e[i + 1].type === "text"; )
            o = e[++i], a += `
` + (o.tokens ? this.parseInline(o.tokens) : o.text);
          r += t ? this.renderer.paragraph(a) : a;
          continue;
        }
        default: {
          let o = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent)
            return console.error(o), "";
          throw new Error(o);
        }
      }
    }
    return r;
  }
  parseInline(e, t) {
    t = t || this.renderer;
    let r = "";
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[s.type]) {
        let o = this.options.extensions.renderers[s.type].call({ parser: this }, s);
        if (o !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(s.type)) {
          r += o || "";
          continue;
        }
      }
      switch (s.type) {
        case "escape": {
          let o = s;
          r += t.text(o.text);
          break;
        }
        case "html": {
          let o = s;
          r += t.html(o.text);
          break;
        }
        case "link": {
          let o = s;
          r += t.link(o.href, o.title, this.parseInline(o.tokens, t));
          break;
        }
        case "image": {
          let o = s;
          r += t.image(o.href, o.title, o.text);
          break;
        }
        case "strong": {
          let o = s;
          r += t.strong(this.parseInline(o.tokens, t));
          break;
        }
        case "em": {
          let o = s;
          r += t.em(this.parseInline(o.tokens, t));
          break;
        }
        case "codespan": {
          let o = s;
          r += t.codespan(o.text);
          break;
        }
        case "br": {
          r += t.br();
          break;
        }
        case "del": {
          let o = s;
          r += t.del(this.parseInline(o.tokens, t));
          break;
        }
        case "text": {
          let o = s;
          r += t.text(o.text);
          break;
        }
        default: {
          let o = 'Token with "' + s.type + '" type was not found.';
          if (this.options.silent)
            return console.error(o), "";
          throw new Error(o);
        }
      }
    }
    return r;
  }
};
var fe = class {
  constructor(e) {
    b(this, "options");
    this.options = e || ge;
  }
  preprocess(e) {
    return e;
  }
  postprocess(e) {
    return e;
  }
};
b(fe, "passThroughHooks", /* @__PURE__ */ new Set(["preprocess", "postprocess"]));
var Ze;
var Zr;
var Kt;
var rs;
var Jr = class {
  constructor(...e) {
    Xt(this, Ze);
    Xt(this, Kt);
    b(this, "defaults", Qr());
    b(this, "options", this.setOptions);
    b(this, "parse", Xe(this, Ze, Zr).call(this, X.lex, Y.parse));
    b(this, "parseInline", Xe(this, Ze, Zr).call(this, X.lexInline, Y.parseInline));
    b(this, "Parser", Y);
    b(this, "parser", Y.parse);
    b(this, "Renderer", Ae);
    b(this, "TextRenderer", Je);
    b(this, "Lexer", X);
    b(this, "lexer", X.lex);
    b(this, "Tokenizer", Pe);
    b(this, "Hooks", fe);
    this.use(...e);
  }
  walkTokens(e, t) {
    let r = [];
    for (let i of e)
      switch (r = r.concat(t.call(this, i)), i.type) {
        case "table": {
          let s = i;
          for (let o of s.header)
            r = r.concat(this.walkTokens(o.tokens, t));
          for (let o of s.rows)
            for (let a of o)
              r = r.concat(this.walkTokens(a.tokens, t));
          break;
        }
        case "list": {
          let s = i;
          r = r.concat(this.walkTokens(s.items, t));
          break;
        }
        default: {
          let s = i;
          this.defaults.extensions?.childTokens?.[s.type] ? this.defaults.extensions.childTokens[s.type].forEach((o) => {
            r = r.concat(this.walkTokens(s[o], t));
          }) : s.tokens && (r = r.concat(this.walkTokens(s.tokens, t)));
        }
      }
    return r;
  }
  use(...e) {
    let t = this.defaults.extensions || { renderers: {}, childTokens: {} };
    return e.forEach((r) => {
      let i = { ...r };
      if (i.async = this.defaults.async || i.async || false, r.extensions && (r.extensions.forEach((s) => {
        if (!s.name)
          throw new Error("extension name required");
        if ("renderer" in s) {
          let o = t.renderers[s.name];
          o ? t.renderers[s.name] = function(...a) {
            let l = s.renderer.apply(this, a);
            return l === false && (l = o.apply(this, a)), l;
          } : t.renderers[s.name] = s.renderer;
        }
        if ("tokenizer" in s) {
          if (!s.level || s.level !== "block" && s.level !== "inline")
            throw new Error("extension level must be 'block' or 'inline'");
          let o = t[s.level];
          o ? o.unshift(s.tokenizer) : t[s.level] = [s.tokenizer], s.start && (s.level === "block" ? t.startBlock ? t.startBlock.push(s.start) : t.startBlock = [s.start] : s.level === "inline" && (t.startInline ? t.startInline.push(s.start) : t.startInline = [s.start]));
        }
        "childTokens" in s && s.childTokens && (t.childTokens[s.name] = s.childTokens);
      }), i.extensions = t), r.renderer) {
        let s = this.defaults.renderer || new Ae(this.defaults);
        for (let o in r.renderer) {
          let a = r.renderer[o], l = o, u = s[l];
          s[l] = (...h) => {
            let c = a.apply(s, h);
            return c === false && (c = u.apply(s, h)), c || "";
          };
        }
        i.renderer = s;
      }
      if (r.tokenizer) {
        let s = this.defaults.tokenizer || new Pe(this.defaults);
        for (let o in r.tokenizer) {
          let a = r.tokenizer[o], l = o, u = s[l];
          s[l] = (...h) => {
            let c = a.apply(s, h);
            return c === false && (c = u.apply(s, h)), c;
          };
        }
        i.tokenizer = s;
      }
      if (r.hooks) {
        let s = this.defaults.hooks || new fe();
        for (let o in r.hooks) {
          let a = r.hooks[o], l = o, u = s[l];
          fe.passThroughHooks.has(o) ? s[l] = (h) => {
            if (this.defaults.async)
              return Promise.resolve(a.call(s, h)).then((p) => u.call(s, p));
            let c = a.call(s, h);
            return u.call(s, c);
          } : s[l] = (...h) => {
            let c = a.apply(s, h);
            return c === false && (c = u.apply(s, h)), c;
          };
        }
        i.hooks = s;
      }
      if (r.walkTokens) {
        let s = this.defaults.walkTokens, o = r.walkTokens;
        i.walkTokens = function(a) {
          let l = [];
          return l.push(o.call(this, a)), s && (l = l.concat(s.call(this, a))), l;
        };
      }
      this.defaults = { ...this.defaults, ...i };
    }), this;
  }
  setOptions(e) {
    return this.defaults = { ...this.defaults, ...e }, this;
  }
};
Ze = /* @__PURE__ */ new WeakSet(), Zr = function(e, t) {
  return (r, i) => {
    let s = { ...i }, o = { ...this.defaults, ...s };
    this.defaults.async === true && s.async === false && (o.silent || console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."), o.async = true);
    let a = Xe(this, Kt, rs).call(this, !!o.silent, !!o.async);
    if (typeof r > "u" || r === null)
      return a(new Error("marked(): input parameter is undefined or null"));
    if (typeof r != "string")
      return a(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(r) + ", string expected"));
    if (o.hooks && (o.hooks.options = o), o.async)
      return Promise.resolve(o.hooks ? o.hooks.preprocess(r) : r).then((l) => e(l, o)).then((l) => o.walkTokens ? Promise.all(this.walkTokens(l, o.walkTokens)).then(() => l) : l).then((l) => t(l, o)).then((l) => o.hooks ? o.hooks.postprocess(l) : l).catch(a);
    try {
      o.hooks && (r = o.hooks.preprocess(r));
      let l = e(r, o);
      o.walkTokens && this.walkTokens(l, o.walkTokens);
      let u = t(l, o);
      return o.hooks && (u = o.hooks.postprocess(u)), u;
    } catch (l) {
      return a(l);
    }
  };
}, Kt = /* @__PURE__ */ new WeakSet(), rs = function(e, t) {
  return (r) => {
    if (r.message += `
Please report this to https://github.com/markedjs/marked.`, e) {
      let i = "<p>An error occurred:</p><pre>" + R(r.message + "", true) + "</pre>";
      return t ? Promise.resolve(i) : i;
    }
    if (t)
      return Promise.reject(r);
    throw r;
  };
};
var de = new Jr();
function v(n6, e) {
  return de.parse(n6, e);
}
v.options = v.setOptions = function(n6) {
  return de.setOptions(n6), v.defaults = de.defaults, $i(v.defaults), v;
};
v.getDefaults = Qr;
v.defaults = ge;
v.use = function(...n6) {
  return de.use(...n6), v.defaults = de.defaults, $i(v.defaults), v;
};
v.walkTokens = function(n6, e) {
  return de.walkTokens(n6, e);
};
v.parseInline = de.parseInline;
v.Parser = Y;
v.parser = Y.parse;
v.Renderer = Ae;
v.TextRenderer = Je;
v.Lexer = X;
v.lexer = X.lex;
v.Tokenizer = Pe;
v.Hooks = fe;
v.parse = v;
var uu = v.options;
var cu = v.setOptions;
var hu = v.use;
var pu = v.walkTokens;
var fu = v.parseInline;
var du = Y.parse;
var gu = X.lex;
var is = new v.Renderer();
is.link = function(n6, e, t) {
  return v.Renderer.prototype.link.apply(this, arguments).replace("<a", "<a target='_blank'");
};

// ../../../../../../node_modules/alpinejs/dist/module.esm.js
var flushPending = false;
var flushing = false;
var queue = [];
var lastFlushedIndex = -1;
function scheduler(callback) {
  queueJob(callback);
}
function queueJob(job) {
  if (!queue.includes(job))
    queue.push(job);
  queueFlush();
}
function dequeueJob(job) {
  let index = queue.indexOf(job);
  if (index !== -1 && index > lastFlushedIndex)
    queue.splice(index, 1);
}
function queueFlush() {
  if (!flushing && !flushPending) {
    flushPending = true;
    queueMicrotask(flushJobs);
  }
}
function flushJobs() {
  flushPending = false;
  flushing = true;
  for (let i = 0; i < queue.length; i++) {
    queue[i]();
    lastFlushedIndex = i;
  }
  queue.length = 0;
  lastFlushedIndex = -1;
  flushing = false;
}
var reactive;
var effect;
var release;
var raw;
var shouldSchedule = true;
function disableEffectScheduling(callback) {
  shouldSchedule = false;
  callback();
  shouldSchedule = true;
}
function setReactivityEngine(engine) {
  reactive = engine.reactive;
  release = engine.release;
  effect = (callback) => engine.effect(callback, { scheduler: (task) => {
    if (shouldSchedule) {
      scheduler(task);
    } else {
      task();
    }
  } });
  raw = engine.raw;
}
function overrideEffect(override) {
  effect = override;
}
function elementBoundEffect(el) {
  let cleanup2 = () => {
  };
  let wrappedEffect = (callback) => {
    let effectReference = effect(callback);
    if (!el._x_effects) {
      el._x_effects = /* @__PURE__ */ new Set();
      el._x_runEffects = () => {
        el._x_effects.forEach((i) => i());
      };
    }
    el._x_effects.add(effectReference);
    cleanup2 = () => {
      if (effectReference === void 0)
        return;
      el._x_effects.delete(effectReference);
      release(effectReference);
    };
    return effectReference;
  };
  return [wrappedEffect, () => {
    cleanup2();
  }];
}
function dispatch(el, name, detail = {}) {
  el.dispatchEvent(
    new CustomEvent(name, {
      detail,
      bubbles: true,
      // Allows events to pass the shadow DOM barrier.
      composed: true,
      cancelable: true
    })
  );
}
function walk(el, callback) {
  if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
    Array.from(el.children).forEach((el2) => walk(el2, callback));
    return;
  }
  let skip = false;
  callback(el, () => skip = true);
  if (skip)
    return;
  let node = el.firstElementChild;
  while (node) {
    walk(node, callback, false);
    node = node.nextElementSibling;
  }
}
function warn(message, ...args) {
  console.warn(`Alpine Warning: ${message}`, ...args);
}
var started = false;
function start() {
  if (started)
    warn("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems.");
  started = true;
  if (!document.body)
    warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
  dispatch(document, "alpine:init");
  dispatch(document, "alpine:initializing");
  startObservingMutations();
  onElAdded((el) => initTree(el, walk));
  onElRemoved((el) => destroyTree(el));
  onAttributesAdded((el, attrs) => {
    directives(el, attrs).forEach((handle) => handle());
  });
  let outNestedComponents = (el) => !closestRoot(el.parentElement, true);
  Array.from(document.querySelectorAll(allSelectors())).filter(outNestedComponents).forEach((el) => {
    initTree(el);
  });
  dispatch(document, "alpine:initialized");
}
var rootSelectorCallbacks = [];
var initSelectorCallbacks = [];
function rootSelectors() {
  return rootSelectorCallbacks.map((fn) => fn());
}
function allSelectors() {
  return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn) => fn());
}
function addRootSelector(selectorCallback) {
  rootSelectorCallbacks.push(selectorCallback);
}
function addInitSelector(selectorCallback) {
  initSelectorCallbacks.push(selectorCallback);
}
function closestRoot(el, includeInitSelectors = false) {
  return findClosest(el, (element) => {
    const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
    if (selectors.some((selector) => element.matches(selector)))
      return true;
  });
}
function findClosest(el, callback) {
  if (!el)
    return;
  if (callback(el))
    return el;
  if (el._x_teleportBack)
    el = el._x_teleportBack;
  if (!el.parentElement)
    return;
  return findClosest(el.parentElement, callback);
}
function isRoot(el) {
  return rootSelectors().some((selector) => el.matches(selector));
}
var initInterceptors = [];
function interceptInit(callback) {
  initInterceptors.push(callback);
}
function initTree(el, walker = walk, intercept = () => {
}) {
  deferHandlingDirectives(() => {
    walker(el, (el2, skip) => {
      intercept(el2, skip);
      initInterceptors.forEach((i) => i(el2, skip));
      directives(el2, el2.attributes).forEach((handle) => handle());
      el2._x_ignore && skip();
    });
  });
}
function destroyTree(root) {
  walk(root, (el) => {
    cleanupAttributes(el);
    cleanupElement(el);
  });
}
var onAttributeAddeds = [];
var onElRemoveds = [];
var onElAddeds = [];
function onElAdded(callback) {
  onElAddeds.push(callback);
}
function onElRemoved(el, callback) {
  if (typeof callback === "function") {
    if (!el._x_cleanups)
      el._x_cleanups = [];
    el._x_cleanups.push(callback);
  } else {
    callback = el;
    onElRemoveds.push(callback);
  }
}
function onAttributesAdded(callback) {
  onAttributeAddeds.push(callback);
}
function onAttributeRemoved(el, name, callback) {
  if (!el._x_attributeCleanups)
    el._x_attributeCleanups = {};
  if (!el._x_attributeCleanups[name])
    el._x_attributeCleanups[name] = [];
  el._x_attributeCleanups[name].push(callback);
}
function cleanupAttributes(el, names) {
  if (!el._x_attributeCleanups)
    return;
  Object.entries(el._x_attributeCleanups).forEach(([name, value]) => {
    if (names === void 0 || names.includes(name)) {
      value.forEach((i) => i());
      delete el._x_attributeCleanups[name];
    }
  });
}
function cleanupElement(el) {
  if (el._x_cleanups) {
    while (el._x_cleanups.length)
      el._x_cleanups.pop()();
  }
}
var observer = new MutationObserver(onMutate);
var currentlyObserving = false;
function startObservingMutations() {
  observer.observe(document, { subtree: true, childList: true, attributes: true, attributeOldValue: true });
  currentlyObserving = true;
}
function stopObservingMutations() {
  flushObserver();
  observer.disconnect();
  currentlyObserving = false;
}
var recordQueue = [];
var willProcessRecordQueue = false;
function flushObserver() {
  recordQueue = recordQueue.concat(observer.takeRecords());
  if (recordQueue.length && !willProcessRecordQueue) {
    willProcessRecordQueue = true;
    queueMicrotask(() => {
      processRecordQueue();
      willProcessRecordQueue = false;
    });
  }
}
function processRecordQueue() {
  onMutate(recordQueue);
  recordQueue.length = 0;
}
function mutateDom(callback) {
  if (!currentlyObserving)
    return callback();
  stopObservingMutations();
  let result = callback();
  startObservingMutations();
  return result;
}
var isCollecting = false;
var deferredMutations = [];
function deferMutations() {
  isCollecting = true;
}
function flushAndStopDeferringMutations() {
  isCollecting = false;
  onMutate(deferredMutations);
  deferredMutations = [];
}
function onMutate(mutations) {
  if (isCollecting) {
    deferredMutations = deferredMutations.concat(mutations);
    return;
  }
  let addedNodes = [];
  let removedNodes = [];
  let addedAttributes = /* @__PURE__ */ new Map();
  let removedAttributes = /* @__PURE__ */ new Map();
  for (let i = 0; i < mutations.length; i++) {
    if (mutations[i].target._x_ignoreMutationObserver)
      continue;
    if (mutations[i].type === "childList") {
      mutations[i].addedNodes.forEach((node) => node.nodeType === 1 && addedNodes.push(node));
      mutations[i].removedNodes.forEach((node) => node.nodeType === 1 && removedNodes.push(node));
    }
    if (mutations[i].type === "attributes") {
      let el = mutations[i].target;
      let name = mutations[i].attributeName;
      let oldValue = mutations[i].oldValue;
      let add2 = () => {
        if (!addedAttributes.has(el))
          addedAttributes.set(el, []);
        addedAttributes.get(el).push({ name, value: el.getAttribute(name) });
      };
      let remove = () => {
        if (!removedAttributes.has(el))
          removedAttributes.set(el, []);
        removedAttributes.get(el).push(name);
      };
      if (el.hasAttribute(name) && oldValue === null) {
        add2();
      } else if (el.hasAttribute(name)) {
        remove();
        add2();
      } else {
        remove();
      }
    }
  }
  removedAttributes.forEach((attrs, el) => {
    cleanupAttributes(el, attrs);
  });
  addedAttributes.forEach((attrs, el) => {
    onAttributeAddeds.forEach((i) => i(el, attrs));
  });
  for (let node of removedNodes) {
    if (addedNodes.includes(node))
      continue;
    onElRemoveds.forEach((i) => i(node));
    destroyTree(node);
  }
  addedNodes.forEach((node) => {
    node._x_ignoreSelf = true;
    node._x_ignore = true;
  });
  for (let node of addedNodes) {
    if (removedNodes.includes(node))
      continue;
    if (!node.isConnected)
      continue;
    delete node._x_ignoreSelf;
    delete node._x_ignore;
    onElAddeds.forEach((i) => i(node));
    node._x_ignore = true;
    node._x_ignoreSelf = true;
  }
  addedNodes.forEach((node) => {
    delete node._x_ignoreSelf;
    delete node._x_ignore;
  });
  addedNodes = null;
  removedNodes = null;
  addedAttributes = null;
  removedAttributes = null;
}
function scope(node) {
  return mergeProxies(closestDataStack(node));
}
function addScopeToNode(node, data2, referenceNode) {
  node._x_dataStack = [data2, ...closestDataStack(referenceNode || node)];
  return () => {
    node._x_dataStack = node._x_dataStack.filter((i) => i !== data2);
  };
}
function closestDataStack(node) {
  if (node._x_dataStack)
    return node._x_dataStack;
  if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) {
    return closestDataStack(node.host);
  }
  if (!node.parentNode) {
    return [];
  }
  return closestDataStack(node.parentNode);
}
function mergeProxies(objects) {
  return new Proxy({ objects }, mergeProxyTrap);
}
var mergeProxyTrap = {
  ownKeys({ objects }) {
    return Array.from(
      new Set(objects.flatMap((i) => Object.keys(i)))
    );
  },
  has({ objects }, name) {
    if (name == Symbol.unscopables)
      return false;
    return objects.some(
      (obj) => Object.prototype.hasOwnProperty.call(obj, name)
    );
  },
  get({ objects }, name, thisProxy) {
    if (name == "toJSON")
      return collapseProxies;
    return Reflect.get(
      objects.find(
        (obj) => Object.prototype.hasOwnProperty.call(obj, name)
      ) || {},
      name,
      thisProxy
    );
  },
  set({ objects }, name, value, thisProxy) {
    const target = objects.find(
      (obj) => Object.prototype.hasOwnProperty.call(obj, name)
    ) || objects[objects.length - 1];
    const descriptor = Object.getOwnPropertyDescriptor(target, name);
    if (descriptor?.set && descriptor?.get)
      return Reflect.set(target, name, value, thisProxy);
    return Reflect.set(target, name, value);
  }
};
function collapseProxies() {
  let keys = Reflect.ownKeys(this);
  return keys.reduce((acc, key) => {
    acc[key] = Reflect.get(this, key);
    return acc;
  }, {});
}
function initInterceptors2(data2) {
  let isObject2 = (val) => typeof val === "object" && !Array.isArray(val) && val !== null;
  let recurse = (obj, basePath = "") => {
    Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, { value, enumerable }]) => {
      if (enumerable === false || value === void 0)
        return;
      let path = basePath === "" ? key : `${basePath}.${key}`;
      if (typeof value === "object" && value !== null && value._x_interceptor) {
        obj[key] = value.initialize(data2, path, key);
      } else {
        if (isObject2(value) && value !== obj && !(value instanceof Element)) {
          recurse(value, path);
        }
      }
    });
  };
  return recurse(data2);
}
function interceptor(callback, mutateObj = () => {
}) {
  let obj = {
    initialValue: void 0,
    _x_interceptor: true,
    initialize(data2, path, key) {
      return callback(this.initialValue, () => get(data2, path), (value) => set(data2, path, value), path, key);
    }
  };
  mutateObj(obj);
  return (initialValue) => {
    if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
      let initialize = obj.initialize.bind(obj);
      obj.initialize = (data2, path, key) => {
        let innerValue = initialValue.initialize(data2, path, key);
        obj.initialValue = innerValue;
        return initialize(data2, path, key);
      };
    } else {
      obj.initialValue = initialValue;
    }
    return obj;
  };
}
function get(obj, path) {
  return path.split(".").reduce((carry, segment) => carry[segment], obj);
}
function set(obj, path, value) {
  if (typeof path === "string")
    path = path.split(".");
  if (path.length === 1)
    obj[path[0]] = value;
  else if (path.length === 0)
    throw error;
  else {
    if (obj[path[0]])
      return set(obj[path[0]], path.slice(1), value);
    else {
      obj[path[0]] = {};
      return set(obj[path[0]], path.slice(1), value);
    }
  }
}
var magics = {};
function magic(name, callback) {
  magics[name] = callback;
}
function injectMagics(obj, el) {
  Object.entries(magics).forEach(([name, callback]) => {
    let memoizedUtilities = null;
    function getUtilities() {
      if (memoizedUtilities) {
        return memoizedUtilities;
      } else {
        let [utilities, cleanup2] = getElementBoundUtilities(el);
        memoizedUtilities = { interceptor, ...utilities };
        onElRemoved(el, cleanup2);
        return memoizedUtilities;
      }
    }
    Object.defineProperty(obj, `$${name}`, {
      get() {
        return callback(el, getUtilities());
      },
      enumerable: false
    });
  });
  return obj;
}
function tryCatch(el, expression, callback, ...args) {
  try {
    return callback(...args);
  } catch (e) {
    handleError(e, el, expression);
  }
}
function handleError(error2, el, expression = void 0) {
  Object.assign(error2, { el, expression });
  console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
  setTimeout(() => {
    throw error2;
  }, 0);
}
var shouldAutoEvaluateFunctions = true;
function dontAutoEvaluateFunctions(callback) {
  let cache = shouldAutoEvaluateFunctions;
  shouldAutoEvaluateFunctions = false;
  let result = callback();
  shouldAutoEvaluateFunctions = cache;
  return result;
}
function evaluate(el, expression, extras = {}) {
  let result;
  evaluateLater(el, expression)((value) => result = value, extras);
  return result;
}
function evaluateLater(...args) {
  return theEvaluatorFunction(...args);
}
var theEvaluatorFunction = normalEvaluator;
function setEvaluator(newEvaluator) {
  theEvaluatorFunction = newEvaluator;
}
function normalEvaluator(el, expression) {
  let overriddenMagics = {};
  injectMagics(overriddenMagics, el);
  let dataStack = [overriddenMagics, ...closestDataStack(el)];
  let evaluator = typeof expression === "function" ? generateEvaluatorFromFunction(dataStack, expression) : generateEvaluatorFromString(dataStack, expression, el);
  return tryCatch.bind(null, el, expression, evaluator);
}
function generateEvaluatorFromFunction(dataStack, func) {
  return (receiver = () => {
  }, { scope: scope2 = {}, params = [] } = {}) => {
    let result = func.apply(mergeProxies([scope2, ...dataStack]), params);
    runIfTypeOfFunction(receiver, result);
  };
}
var evaluatorMemo = {};
function generateFunctionFromString(expression, el) {
  if (evaluatorMemo[expression]) {
    return evaluatorMemo[expression];
  }
  let AsyncFunction = Object.getPrototypeOf(async function() {
  }).constructor;
  let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression.trim()) || /^(let|const)\s/.test(expression.trim()) ? `(async()=>{ ${expression} })()` : expression;
  const safeAsyncFunction = () => {
    try {
      let func2 = new AsyncFunction(
        ["__self", "scope"],
        `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`
      );
      Object.defineProperty(func2, "name", {
        value: `[Alpine] ${expression}`
      });
      return func2;
    } catch (error2) {
      handleError(error2, el, expression);
      return Promise.resolve();
    }
  };
  let func = safeAsyncFunction();
  evaluatorMemo[expression] = func;
  return func;
}
function generateEvaluatorFromString(dataStack, expression, el) {
  let func = generateFunctionFromString(expression, el);
  return (receiver = () => {
  }, { scope: scope2 = {}, params = [] } = {}) => {
    func.result = void 0;
    func.finished = false;
    let completeScope = mergeProxies([scope2, ...dataStack]);
    if (typeof func === "function") {
      let promise = func(func, completeScope).catch((error2) => handleError(error2, el, expression));
      if (func.finished) {
        runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
        func.result = void 0;
      } else {
        promise.then((result) => {
          runIfTypeOfFunction(receiver, result, completeScope, params, el);
        }).catch((error2) => handleError(error2, el, expression)).finally(() => func.result = void 0);
      }
    }
  };
}
function runIfTypeOfFunction(receiver, value, scope2, params, el) {
  if (shouldAutoEvaluateFunctions && typeof value === "function") {
    let result = value.apply(scope2, params);
    if (result instanceof Promise) {
      result.then((i) => runIfTypeOfFunction(receiver, i, scope2, params)).catch((error2) => handleError(error2, el, value));
    } else {
      receiver(result);
    }
  } else if (typeof value === "object" && value instanceof Promise) {
    value.then((i) => receiver(i));
  } else {
    receiver(value);
  }
}
var prefixAsString = "x-";
function prefix(subject = "") {
  return prefixAsString + subject;
}
function setPrefix(newPrefix) {
  prefixAsString = newPrefix;
}
var directiveHandlers = {};
function directive(name, callback) {
  directiveHandlers[name] = callback;
  return {
    before(directive2) {
      if (!directiveHandlers[directive2]) {
        console.warn(
          "Cannot find directive `${directive}`. `${name}` will use the default order of execution"
        );
        return;
      }
      const pos = directiveOrder.indexOf(directive2);
      directiveOrder.splice(pos >= 0 ? pos : directiveOrder.indexOf("DEFAULT"), 0, name);
    }
  };
}
function directives(el, attributes, originalAttributeOverride) {
  attributes = Array.from(attributes);
  if (el._x_virtualDirectives) {
    let vAttributes = Object.entries(el._x_virtualDirectives).map(([name, value]) => ({ name, value }));
    let staticAttributes = attributesOnly(vAttributes);
    vAttributes = vAttributes.map((attribute) => {
      if (staticAttributes.find((attr) => attr.name === attribute.name)) {
        return {
          name: `x-bind:${attribute.name}`,
          value: `"${attribute.value}"`
        };
      }
      return attribute;
    });
    attributes = attributes.concat(vAttributes);
  }
  let transformedAttributeMap = {};
  let directives2 = attributes.map(toTransformedAttributes((newName, oldName) => transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
  return directives2.map((directive2) => {
    return getDirectiveHandler(el, directive2);
  });
}
function attributesOnly(attributes) {
  return Array.from(attributes).map(toTransformedAttributes()).filter((attr) => !outNonAlpineAttributes(attr));
}
var isDeferringHandlers = false;
var directiveHandlerStacks = /* @__PURE__ */ new Map();
var currentHandlerStackKey = Symbol();
function deferHandlingDirectives(callback) {
  isDeferringHandlers = true;
  let key = Symbol();
  currentHandlerStackKey = key;
  directiveHandlerStacks.set(key, []);
  let flushHandlers = () => {
    while (directiveHandlerStacks.get(key).length)
      directiveHandlerStacks.get(key).shift()();
    directiveHandlerStacks.delete(key);
  };
  let stopDeferring = () => {
    isDeferringHandlers = false;
    flushHandlers();
  };
  callback(flushHandlers);
  stopDeferring();
}
function getElementBoundUtilities(el) {
  let cleanups = [];
  let cleanup2 = (callback) => cleanups.push(callback);
  let [effect3, cleanupEffect] = elementBoundEffect(el);
  cleanups.push(cleanupEffect);
  let utilities = {
    Alpine: alpine_default,
    effect: effect3,
    cleanup: cleanup2,
    evaluateLater: evaluateLater.bind(evaluateLater, el),
    evaluate: evaluate.bind(evaluate, el)
  };
  let doCleanup = () => cleanups.forEach((i) => i());
  return [utilities, doCleanup];
}
function getDirectiveHandler(el, directive2) {
  let noop = () => {
  };
  let handler4 = directiveHandlers[directive2.type] || noop;
  let [utilities, cleanup2] = getElementBoundUtilities(el);
  onAttributeRemoved(el, directive2.original, cleanup2);
  let fullHandler = () => {
    if (el._x_ignore || el._x_ignoreSelf)
      return;
    handler4.inline && handler4.inline(el, directive2, utilities);
    handler4 = handler4.bind(handler4, el, directive2, utilities);
    isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler4) : handler4();
  };
  fullHandler.runCleanups = cleanup2;
  return fullHandler;
}
var startingWith = (subject, replacement) => ({ name, value }) => {
  if (name.startsWith(subject))
    name = name.replace(subject, replacement);
  return { name, value };
};
var into = (i) => i;
function toTransformedAttributes(callback = () => {
}) {
  return ({ name, value }) => {
    let { name: newName, value: newValue } = attributeTransformers.reduce((carry, transform) => {
      return transform(carry);
    }, { name, value });
    if (newName !== name)
      callback(newName, name);
    return { name: newName, value: newValue };
  };
}
var attributeTransformers = [];
function mapAttributes(callback) {
  attributeTransformers.push(callback);
}
function outNonAlpineAttributes({ name }) {
  return alpineAttributeRegex().test(name);
}
var alpineAttributeRegex = () => new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
  return ({ name, value }) => {
    let typeMatch = name.match(alpineAttributeRegex());
    let valueMatch = name.match(/:([a-zA-Z0-9\-_:]+)/);
    let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
    let original = originalAttributeOverride || transformedAttributeMap[name] || name;
    return {
      type: typeMatch ? typeMatch[1] : null,
      value: valueMatch ? valueMatch[1] : null,
      modifiers: modifiers.map((i) => i.replace(".", "")),
      expression: value,
      original
    };
  };
}
var DEFAULT = "DEFAULT";
var directiveOrder = [
  "ignore",
  "ref",
  "data",
  "id",
  "bind",
  "init",
  "for",
  "model",
  "modelable",
  "transition",
  "show",
  "if",
  DEFAULT,
  "teleport"
];
function byPriority(a, b2) {
  let typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type;
  let typeB = directiveOrder.indexOf(b2.type) === -1 ? DEFAULT : b2.type;
  return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
}
var tickStack = [];
var isHolding = false;
function nextTick(callback = () => {
}) {
  queueMicrotask(() => {
    isHolding || setTimeout(() => {
      releaseNextTicks();
    });
  });
  return new Promise((res) => {
    tickStack.push(() => {
      callback();
      res();
    });
  });
}
function releaseNextTicks() {
  isHolding = false;
  while (tickStack.length)
    tickStack.shift()();
}
function holdNextTicks() {
  isHolding = true;
}
function setClasses(el, value) {
  if (Array.isArray(value)) {
    return setClassesFromString(el, value.join(" "));
  } else if (typeof value === "object" && value !== null) {
    return setClassesFromObject(el, value);
  } else if (typeof value === "function") {
    return setClasses(el, value());
  }
  return setClassesFromString(el, value);
}
function setClassesFromString(el, classString) {
  let split = (classString2) => classString2.split(" ").filter(Boolean);
  let missingClasses = (classString2) => classString2.split(" ").filter((i) => !el.classList.contains(i)).filter(Boolean);
  let addClassesAndReturnUndo = (classes) => {
    el.classList.add(...classes);
    return () => {
      el.classList.remove(...classes);
    };
  };
  classString = classString === true ? classString = "" : classString || "";
  return addClassesAndReturnUndo(missingClasses(classString));
}
function setClassesFromObject(el, classObject) {
  let split = (classString) => classString.split(" ").filter(Boolean);
  let forAdd = Object.entries(classObject).flatMap(([classString, bool]) => bool ? split(classString) : false).filter(Boolean);
  let forRemove = Object.entries(classObject).flatMap(([classString, bool]) => !bool ? split(classString) : false).filter(Boolean);
  let added = [];
  let removed = [];
  forRemove.forEach((i) => {
    if (el.classList.contains(i)) {
      el.classList.remove(i);
      removed.push(i);
    }
  });
  forAdd.forEach((i) => {
    if (!el.classList.contains(i)) {
      el.classList.add(i);
      added.push(i);
    }
  });
  return () => {
    removed.forEach((i) => el.classList.add(i));
    added.forEach((i) => el.classList.remove(i));
  };
}
function setStyles(el, value) {
  if (typeof value === "object" && value !== null) {
    return setStylesFromObject(el, value);
  }
  return setStylesFromString(el, value);
}
function setStylesFromObject(el, value) {
  let previousStyles = {};
  Object.entries(value).forEach(([key, value2]) => {
    previousStyles[key] = el.style[key];
    if (!key.startsWith("--")) {
      key = kebabCase(key);
    }
    el.style.setProperty(key, value2);
  });
  setTimeout(() => {
    if (el.style.length === 0) {
      el.removeAttribute("style");
    }
  });
  return () => {
    setStyles(el, previousStyles);
  };
}
function setStylesFromString(el, value) {
  let cache = el.getAttribute("style", value);
  el.setAttribute("style", value);
  return () => {
    el.setAttribute("style", cache || "");
  };
}
function kebabCase(subject) {
  return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function once(callback, fallback = () => {
}) {
  let called = false;
  return function() {
    if (!called) {
      called = true;
      callback.apply(this, arguments);
    } else {
      fallback.apply(this, arguments);
    }
  };
}
directive("transition", (el, { value, modifiers, expression }, { evaluate: evaluate2 }) => {
  if (typeof expression === "function")
    expression = evaluate2(expression);
  if (expression === false)
    return;
  if (!expression || typeof expression === "boolean") {
    registerTransitionsFromHelper(el, modifiers, value);
  } else {
    registerTransitionsFromClassString(el, expression, value);
  }
});
function registerTransitionsFromClassString(el, classString, stage) {
  registerTransitionObject(el, setClasses, "");
  let directiveStorageMap = {
    "enter": (classes) => {
      el._x_transition.enter.during = classes;
    },
    "enter-start": (classes) => {
      el._x_transition.enter.start = classes;
    },
    "enter-end": (classes) => {
      el._x_transition.enter.end = classes;
    },
    "leave": (classes) => {
      el._x_transition.leave.during = classes;
    },
    "leave-start": (classes) => {
      el._x_transition.leave.start = classes;
    },
    "leave-end": (classes) => {
      el._x_transition.leave.end = classes;
    }
  };
  directiveStorageMap[stage](classString);
}
function registerTransitionsFromHelper(el, modifiers, stage) {
  registerTransitionObject(el, setStyles);
  let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
  let transitioningIn = doesntSpecify || modifiers.includes("in") || ["enter"].includes(stage);
  let transitioningOut = doesntSpecify || modifiers.includes("out") || ["leave"].includes(stage);
  if (modifiers.includes("in") && !doesntSpecify) {
    modifiers = modifiers.filter((i, index) => index < modifiers.indexOf("out"));
  }
  if (modifiers.includes("out") && !doesntSpecify) {
    modifiers = modifiers.filter((i, index) => index > modifiers.indexOf("out"));
  }
  let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
  let wantsOpacity = wantsAll || modifiers.includes("opacity");
  let wantsScale = wantsAll || modifiers.includes("scale");
  let opacityValue = wantsOpacity ? 0 : 1;
  let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
  let delay = modifierValue(modifiers, "delay", 0) / 1e3;
  let origin = modifierValue(modifiers, "origin", "center");
  let property = "opacity, transform";
  let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
  let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
  let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
  if (transitioningIn) {
    el._x_transition.enter.during = {
      transformOrigin: origin,
      transitionDelay: `${delay}s`,
      transitionProperty: property,
      transitionDuration: `${durationIn}s`,
      transitionTimingFunction: easing
    };
    el._x_transition.enter.start = {
      opacity: opacityValue,
      transform: `scale(${scaleValue})`
    };
    el._x_transition.enter.end = {
      opacity: 1,
      transform: `scale(1)`
    };
  }
  if (transitioningOut) {
    el._x_transition.leave.during = {
      transformOrigin: origin,
      transitionDelay: `${delay}s`,
      transitionProperty: property,
      transitionDuration: `${durationOut}s`,
      transitionTimingFunction: easing
    };
    el._x_transition.leave.start = {
      opacity: 1,
      transform: `scale(1)`
    };
    el._x_transition.leave.end = {
      opacity: opacityValue,
      transform: `scale(${scaleValue})`
    };
  }
}
function registerTransitionObject(el, setFunction, defaultValue = {}) {
  if (!el._x_transition)
    el._x_transition = {
      enter: { during: defaultValue, start: defaultValue, end: defaultValue },
      leave: { during: defaultValue, start: defaultValue, end: defaultValue },
      in(before = () => {
      }, after = () => {
      }) {
        transition(el, setFunction, {
          during: this.enter.during,
          start: this.enter.start,
          end: this.enter.end
        }, before, after);
      },
      out(before = () => {
      }, after = () => {
      }) {
        transition(el, setFunction, {
          during: this.leave.during,
          start: this.leave.start,
          end: this.leave.end
        }, before, after);
      }
    };
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
  const nextTick2 = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
  let clickAwayCompatibleShow = () => nextTick2(show);
  if (value) {
    if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) {
      el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
    } else {
      el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
    }
    return;
  }
  el._x_hidePromise = el._x_transition ? new Promise((resolve, reject) => {
    el._x_transition.out(() => {
    }, () => resolve(hide));
    el._x_transitioning.beforeCancel(() => reject({ isFromCancelledTransition: true }));
  }) : Promise.resolve(hide);
  queueMicrotask(() => {
    let closest = closestHide(el);
    if (closest) {
      if (!closest._x_hideChildren)
        closest._x_hideChildren = [];
      closest._x_hideChildren.push(el);
    } else {
      nextTick2(() => {
        let hideAfterChildren = (el2) => {
          let carry = Promise.all([
            el2._x_hidePromise,
            ...(el2._x_hideChildren || []).map(hideAfterChildren)
          ]).then(([i]) => i());
          delete el2._x_hidePromise;
          delete el2._x_hideChildren;
          return carry;
        };
        hideAfterChildren(el).catch((e) => {
          if (!e.isFromCancelledTransition)
            throw e;
        });
      });
    }
  });
};
function closestHide(el) {
  let parent = el.parentNode;
  if (!parent)
    return;
  return parent._x_hidePromise ? parent : closestHide(parent);
}
function transition(el, setFunction, { during, start: start2, end } = {}, before = () => {
}, after = () => {
}) {
  if (el._x_transitioning)
    el._x_transitioning.cancel();
  if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
    before();
    after();
    return;
  }
  let undoStart, undoDuring, undoEnd;
  performTransition(el, {
    start() {
      undoStart = setFunction(el, start2);
    },
    during() {
      undoDuring = setFunction(el, during);
    },
    before,
    end() {
      undoStart();
      undoEnd = setFunction(el, end);
    },
    after,
    cleanup() {
      undoDuring();
      undoEnd();
    }
  });
}
function performTransition(el, stages) {
  let interrupted, reachedBefore, reachedEnd;
  let finish = once(() => {
    mutateDom(() => {
      interrupted = true;
      if (!reachedBefore)
        stages.before();
      if (!reachedEnd) {
        stages.end();
        releaseNextTicks();
      }
      stages.after();
      if (el.isConnected)
        stages.cleanup();
      delete el._x_transitioning;
    });
  });
  el._x_transitioning = {
    beforeCancels: [],
    beforeCancel(callback) {
      this.beforeCancels.push(callback);
    },
    cancel: once(function() {
      while (this.beforeCancels.length) {
        this.beforeCancels.shift()();
      }
      ;
      finish();
    }),
    finish
  };
  mutateDom(() => {
    stages.start();
    stages.during();
  });
  holdNextTicks();
  requestAnimationFrame(() => {
    if (interrupted)
      return;
    let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
    let delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
    if (duration === 0)
      duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
    mutateDom(() => {
      stages.before();
    });
    reachedBefore = true;
    requestAnimationFrame(() => {
      if (interrupted)
        return;
      mutateDom(() => {
        stages.end();
      });
      releaseNextTicks();
      setTimeout(el._x_transitioning.finish, duration + delay);
      reachedEnd = true;
    });
  });
}
function modifierValue(modifiers, key, fallback) {
  if (modifiers.indexOf(key) === -1)
    return fallback;
  const rawValue = modifiers[modifiers.indexOf(key) + 1];
  if (!rawValue)
    return fallback;
  if (key === "scale") {
    if (isNaN(rawValue))
      return fallback;
  }
  if (key === "duration" || key === "delay") {
    let match = rawValue.match(/([0-9]+)ms/);
    if (match)
      return match[1];
  }
  if (key === "origin") {
    if (["top", "right", "left", "center", "bottom"].includes(modifiers[modifiers.indexOf(key) + 2])) {
      return [rawValue, modifiers[modifiers.indexOf(key) + 2]].join(" ");
    }
  }
  return rawValue;
}
var isCloning = false;
function skipDuringClone(callback, fallback = () => {
}) {
  return (...args) => isCloning ? fallback(...args) : callback(...args);
}
function onlyDuringClone(callback) {
  return (...args) => isCloning && callback(...args);
}
function cloneNode(from, to) {
  if (from._x_dataStack) {
    to._x_dataStack = from._x_dataStack;
    to.setAttribute("data-has-alpine-state", true);
  }
  isCloning = true;
  dontRegisterReactiveSideEffects(() => {
    initTree(to, (el, callback) => {
      callback(el, () => {
      });
    });
  });
  isCloning = false;
}
var isCloningLegacy = false;
function clone(oldEl, newEl) {
  if (!newEl._x_dataStack)
    newEl._x_dataStack = oldEl._x_dataStack;
  isCloning = true;
  isCloningLegacy = true;
  dontRegisterReactiveSideEffects(() => {
    cloneTree(newEl);
  });
  isCloning = false;
  isCloningLegacy = false;
}
function cloneTree(el) {
  let hasRunThroughFirstEl = false;
  let shallowWalker = (el2, callback) => {
    walk(el2, (el3, skip) => {
      if (hasRunThroughFirstEl && isRoot(el3))
        return skip();
      hasRunThroughFirstEl = true;
      callback(el3, skip);
    });
  };
  initTree(el, shallowWalker);
}
function dontRegisterReactiveSideEffects(callback) {
  let cache = effect;
  overrideEffect((callback2, el) => {
    let storedEffect = cache(callback2);
    release(storedEffect);
    return () => {
    };
  });
  callback();
  overrideEffect(cache);
}
function shouldSkipRegisteringDataDuringClone(el) {
  if (!isCloning)
    return false;
  if (isCloningLegacy)
    return true;
  return el.hasAttribute("data-has-alpine-state");
}
function bind(el, name, value, modifiers = []) {
  if (!el._x_bindings)
    el._x_bindings = reactive({});
  el._x_bindings[name] = value;
  name = modifiers.includes("camel") ? camelCase(name) : name;
  switch (name) {
    case "value":
      bindInputValue(el, value);
      break;
    case "style":
      bindStyles(el, value);
      break;
    case "class":
      bindClasses(el, value);
      break;
    case "selected":
    case "checked":
      bindAttributeAndProperty(el, name, value);
      break;
    default:
      bindAttribute(el, name, value);
      break;
  }
}
function bindInputValue(el, value) {
  if (el.type === "radio") {
    if (el.attributes.value === void 0) {
      el.value = value;
    }
    if (window.fromModel) {
      el.checked = checkedAttrLooseCompare(el.value, value);
    }
  } else if (el.type === "checkbox") {
    if (Number.isInteger(value)) {
      el.value = value;
    } else if (!Array.isArray(value) && typeof value !== "boolean" && ![null, void 0].includes(value)) {
      el.value = String(value);
    } else {
      if (Array.isArray(value)) {
        el.checked = value.some((val) => checkedAttrLooseCompare(val, el.value));
      } else {
        el.checked = !!value;
      }
    }
  } else if (el.tagName === "SELECT") {
    updateSelect(el, value);
  } else {
    if (el.value === value)
      return;
    el.value = value === void 0 ? "" : value;
  }
}
function bindClasses(el, value) {
  if (el._x_undoAddedClasses)
    el._x_undoAddedClasses();
  el._x_undoAddedClasses = setClasses(el, value);
}
function bindStyles(el, value) {
  if (el._x_undoAddedStyles)
    el._x_undoAddedStyles();
  el._x_undoAddedStyles = setStyles(el, value);
}
function bindAttributeAndProperty(el, name, value) {
  bindAttribute(el, name, value);
  setPropertyIfChanged(el, name, value);
}
function bindAttribute(el, name, value) {
  if ([null, void 0, false].includes(value) && attributeShouldntBePreservedIfFalsy(name)) {
    el.removeAttribute(name);
  } else {
    if (isBooleanAttr(name))
      value = name;
    setIfChanged(el, name, value);
  }
}
function setIfChanged(el, attrName, value) {
  if (el.getAttribute(attrName) != value) {
    el.setAttribute(attrName, value);
  }
}
function setPropertyIfChanged(el, propName, value) {
  if (el[propName] !== value) {
    el[propName] = value;
  }
}
function updateSelect(el, value) {
  const arrayWrappedValue = [].concat(value).map((value2) => {
    return value2 + "";
  });
  Array.from(el.options).forEach((option) => {
    option.selected = arrayWrappedValue.includes(option.value);
  });
}
function camelCase(subject) {
  return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
}
function checkedAttrLooseCompare(valueA, valueB) {
  return valueA == valueB;
}
function isBooleanAttr(attrName) {
  const booleanAttributes = [
    "disabled",
    "checked",
    "required",
    "readonly",
    "hidden",
    "open",
    "selected",
    "autofocus",
    "itemscope",
    "multiple",
    "novalidate",
    "allowfullscreen",
    "allowpaymentrequest",
    "formnovalidate",
    "autoplay",
    "controls",
    "loop",
    "muted",
    "playsinline",
    "default",
    "ismap",
    "reversed",
    "async",
    "defer",
    "nomodule"
  ];
  return booleanAttributes.includes(attrName);
}
function attributeShouldntBePreservedIfFalsy(name) {
  return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(name);
}
function getBinding(el, name, fallback) {
  if (el._x_bindings && el._x_bindings[name] !== void 0)
    return el._x_bindings[name];
  return getAttributeBinding(el, name, fallback);
}
function extractProp(el, name, fallback, extract = true) {
  if (el._x_bindings && el._x_bindings[name] !== void 0)
    return el._x_bindings[name];
  if (el._x_inlineBindings && el._x_inlineBindings[name] !== void 0) {
    let binding = el._x_inlineBindings[name];
    binding.extract = extract;
    return dontAutoEvaluateFunctions(() => {
      return evaluate(el, binding.expression);
    });
  }
  return getAttributeBinding(el, name, fallback);
}
function getAttributeBinding(el, name, fallback) {
  let attr = el.getAttribute(name);
  if (attr === null)
    return typeof fallback === "function" ? fallback() : fallback;
  if (attr === "")
    return true;
  if (isBooleanAttr(name)) {
    return !![name, "true"].includes(attr);
  }
  return attr;
}
function debounce(func, wait) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
function throttle(func, limit) {
  let inThrottle;
  return function() {
    let context = this, args = arguments;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
function entangle({ get: outerGet, set: outerSet }, { get: innerGet, set: innerSet }) {
  let firstRun = true;
  let outerHash;
  let reference = effect(() => {
    const outer = outerGet();
    const inner = innerGet();
    if (firstRun) {
      innerSet(cloneIfObject(outer));
      firstRun = false;
      outerHash = JSON.stringify(outer);
    } else {
      const outerHashLatest = JSON.stringify(outer);
      if (outerHashLatest !== outerHash) {
        innerSet(cloneIfObject(outer));
        outerHash = outerHashLatest;
      } else {
        outerSet(cloneIfObject(inner));
        outerHash = JSON.stringify(inner);
      }
    }
    JSON.stringify(innerGet());
    JSON.stringify(outerGet());
  });
  return () => {
    release(reference);
  };
}
function cloneIfObject(value) {
  return typeof value === "object" ? JSON.parse(JSON.stringify(value)) : value;
}
function plugin(callback) {
  let callbacks = Array.isArray(callback) ? callback : [callback];
  callbacks.forEach((i) => i(alpine_default));
}
var stores = {};
var isReactive = false;
function store(name, value) {
  if (!isReactive) {
    stores = reactive(stores);
    isReactive = true;
  }
  if (value === void 0) {
    return stores[name];
  }
  stores[name] = value;
  if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") {
    stores[name].init();
  }
  initInterceptors2(stores[name]);
}
function getStores() {
  return stores;
}
var binds = {};
function bind2(name, bindings) {
  let getBindings = typeof bindings !== "function" ? () => bindings : bindings;
  if (name instanceof Element) {
    return applyBindingsObject(name, getBindings());
  } else {
    binds[name] = getBindings;
  }
  return () => {
  };
}
function injectBindingProviders(obj) {
  Object.entries(binds).forEach(([name, callback]) => {
    Object.defineProperty(obj, name, {
      get() {
        return (...args) => {
          return callback(...args);
        };
      }
    });
  });
  return obj;
}
function applyBindingsObject(el, obj, original) {
  let cleanupRunners = [];
  while (cleanupRunners.length)
    cleanupRunners.pop()();
  let attributes = Object.entries(obj).map(([name, value]) => ({ name, value }));
  let staticAttributes = attributesOnly(attributes);
  attributes = attributes.map((attribute) => {
    if (staticAttributes.find((attr) => attr.name === attribute.name)) {
      return {
        name: `x-bind:${attribute.name}`,
        value: `"${attribute.value}"`
      };
    }
    return attribute;
  });
  directives(el, attributes, original).map((handle) => {
    cleanupRunners.push(handle.runCleanups);
    handle();
  });
  return () => {
    while (cleanupRunners.length)
      cleanupRunners.pop()();
  };
}
var datas = {};
function data(name, callback) {
  datas[name] = callback;
}
function injectDataProviders(obj, context) {
  Object.entries(datas).forEach(([name, callback]) => {
    Object.defineProperty(obj, name, {
      get() {
        return (...args) => {
          return callback.bind(context)(...args);
        };
      },
      enumerable: false
    });
  });
  return obj;
}
var Alpine = {
  get reactive() {
    return reactive;
  },
  get release() {
    return release;
  },
  get effect() {
    return effect;
  },
  get raw() {
    return raw;
  },
  version: "3.13.2",
  flushAndStopDeferringMutations,
  dontAutoEvaluateFunctions,
  disableEffectScheduling,
  startObservingMutations,
  stopObservingMutations,
  setReactivityEngine,
  onAttributeRemoved,
  onAttributesAdded,
  closestDataStack,
  skipDuringClone,
  onlyDuringClone,
  addRootSelector,
  addInitSelector,
  addScopeToNode,
  deferMutations,
  mapAttributes,
  evaluateLater,
  interceptInit,
  setEvaluator,
  mergeProxies,
  extractProp,
  findClosest,
  onElRemoved,
  closestRoot,
  destroyTree,
  interceptor,
  // INTERNAL: not public API and is subject to change without major release.
  transition,
  // INTERNAL
  setStyles,
  // INTERNAL
  mutateDom,
  directive,
  entangle,
  throttle,
  debounce,
  evaluate,
  initTree,
  nextTick,
  prefixed: prefix,
  prefix: setPrefix,
  plugin,
  magic,
  store,
  start,
  clone,
  // INTERNAL
  cloneNode,
  // INTERNAL
  bound: getBinding,
  $data: scope,
  walk,
  data,
  bind: bind2
};
var alpine_default = Alpine;
function makeMap(str, expectsLowerCase) {
  const map = /* @__PURE__ */ Object.create(null);
  const list = str.split(",");
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase ? (val) => !!map[val.toLowerCase()] : (val) => !!map[val];
}
var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
var EMPTY_OBJ = true ? Object.freeze({}) : {};
var EMPTY_ARR = true ? Object.freeze([]) : [];
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = (val, key) => hasOwnProperty.call(val, key);
var isArray = Array.isArray;
var isMap = (val) => toTypeString(val) === "[object Map]";
var isString = (val) => typeof val === "string";
var isSymbol = (val) => typeof val === "symbol";
var isObject = (val) => val !== null && typeof val === "object";
var objectToString = Object.prototype.toString;
var toTypeString = (value) => objectToString.call(value);
var toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
var cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction((str) => {
  return str.replace(camelizeRE, (_2, c) => c ? c.toUpperCase() : "");
});
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction((str) => str.replace(hyphenateRE, "-$1").toLowerCase());
var capitalize = cacheStringFunction((str) => str.charAt(0).toUpperCase() + str.slice(1));
var toHandlerKey = cacheStringFunction((str) => str ? `on${capitalize(str)}` : ``);
var hasChanged = (value, oldValue) => value !== oldValue && (value === value || oldValue === oldValue);
var targetMap = /* @__PURE__ */ new WeakMap();
var effectStack = [];
var activeEffect;
var ITERATE_KEY = Symbol(true ? "iterate" : "");
var MAP_KEY_ITERATE_KEY = Symbol(true ? "Map key iterate" : "");
function isEffect(fn) {
  return fn && fn._isEffect === true;
}
function effect2(fn, options = EMPTY_OBJ) {
  if (isEffect(fn)) {
    fn = fn.raw;
  }
  const effect3 = createReactiveEffect(fn, options);
  if (!options.lazy) {
    effect3();
  }
  return effect3;
}
function stop(effect3) {
  if (effect3.active) {
    cleanup(effect3);
    if (effect3.options.onStop) {
      effect3.options.onStop();
    }
    effect3.active = false;
  }
}
var uid = 0;
function createReactiveEffect(fn, options) {
  const effect3 = function reactiveEffect() {
    if (!effect3.active) {
      return fn();
    }
    if (!effectStack.includes(effect3)) {
      cleanup(effect3);
      try {
        enableTracking();
        effectStack.push(effect3);
        activeEffect = effect3;
        return fn();
      } finally {
        effectStack.pop();
        resetTracking();
        activeEffect = effectStack[effectStack.length - 1];
      }
    }
  };
  effect3.id = uid++;
  effect3.allowRecurse = !!options.allowRecurse;
  effect3._isEffect = true;
  effect3.active = true;
  effect3.raw = fn;
  effect3.deps = [];
  effect3.options = options;
  return effect3;
}
function cleanup(effect3) {
  const { deps } = effect3;
  if (deps.length) {
    for (let i = 0; i < deps.length; i++) {
      deps[i].delete(effect3);
    }
    deps.length = 0;
  }
}
var shouldTrack = true;
var trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function enableTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = true;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
  if (!shouldTrack || activeEffect === void 0) {
    return;
  }
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
  }
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, dep = /* @__PURE__ */ new Set());
  }
  if (!dep.has(activeEffect)) {
    dep.add(activeEffect);
    activeEffect.deps.push(dep);
    if (activeEffect.options.onTrack) {
      activeEffect.options.onTrack({
        effect: activeEffect,
        target,
        type,
        key
      });
    }
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  const effects = /* @__PURE__ */ new Set();
  const add2 = (effectsToAdd) => {
    if (effectsToAdd) {
      effectsToAdd.forEach((effect3) => {
        if (effect3 !== activeEffect || effect3.allowRecurse) {
          effects.add(effect3);
        }
      });
    }
  };
  if (type === "clear") {
    depsMap.forEach(add2);
  } else if (key === "length" && isArray(target)) {
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || key2 >= newValue) {
        add2(dep);
      }
    });
  } else {
    if (key !== void 0) {
      add2(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray(target)) {
          add2(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            add2(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          add2(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray(target)) {
          add2(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            add2(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          add2(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  const run = (effect3) => {
    if (effect3.options.onTrigger) {
      effect3.options.onTrigger({
        effect: effect3,
        target,
        key,
        type,
        newValue,
        oldValue,
        oldTarget
      });
    }
    if (effect3.options.scheduler) {
      effect3.options.scheduler(effect3);
    } else {
      effect3();
    }
  };
  effects.forEach(run);
}
var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key) => Symbol[key]).filter(isSymbol));
var get2 = /* @__PURE__ */ createGetter();
var readonlyGet = /* @__PURE__ */ createGetter(true);
var arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      const res = toRaw(this)[key].apply(this, args);
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function createGetter(isReadonly = false, shallow = false) {
  return function get3(target, key, receiver) {
    if (key === "__v_isReactive") {
      return !isReadonly;
    } else if (key === "__v_isReadonly") {
      return isReadonly;
    } else if (key === "__v_raw" && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) {
      return target;
    }
    const targetIsArray = isArray(target);
    if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver);
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly) {
      track(target, "get", key);
    }
    if (shallow) {
      return res;
    }
    if (isRef(res)) {
      const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
      return shouldUnwrap ? res.value : res;
    }
    if (isObject(res)) {
      return isReadonly ? readonly(res) : reactive2(res);
    }
    return res;
  };
}
var set2 = /* @__PURE__ */ createSetter();
function createSetter(shallow = false) {
  return function set3(target, key, value, receiver) {
    let oldValue = target[key];
    if (!shallow) {
      value = toRaw(value);
      oldValue = toRaw(oldValue);
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      }
    }
    const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
    }
    return result;
  };
}
function deleteProperty(target, key) {
  const hadKey = hasOwn(target, key);
  const oldValue = target[key];
  const result = Reflect.deleteProperty(target, key);
  if (result && hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function has(target, key) {
  const result = Reflect.has(target, key);
  if (!isSymbol(key) || !builtInSymbols.has(key)) {
    track(target, "has", key);
  }
  return result;
}
function ownKeys(target) {
  track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
  return Reflect.ownKeys(target);
}
var mutableHandlers = {
  get: get2,
  set: set2,
  deleteProperty,
  has,
  ownKeys
};
var readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    if (true) {
      console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
    }
    return true;
  },
  deleteProperty(target, key) {
    if (true) {
      console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
    }
    return true;
  }
};
var toReactive = (value) => isObject(value) ? reactive2(value) : value;
var toReadonly = (value) => isObject(value) ? readonly(value) : value;
var toShallow = (value) => value;
var getProto = (v2) => Reflect.getPrototypeOf(v2);
function get$1(target, key, isReadonly = false, isShallow = false) {
  target = target[
    "__v_raw"
    /* RAW */
  ];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly && track(rawTarget, "get", key);
  }
  !isReadonly && track(rawTarget, "get", rawKey);
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has$1(key, isReadonly = false) {
  const target = this[
    "__v_raw"
    /* RAW */
  ];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (key !== rawKey) {
    !isReadonly && track(rawTarget, "has", key);
  }
  !isReadonly && track(rawTarget, "has", rawKey);
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
  target = target[
    "__v_raw"
    /* RAW */
  ];
  !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set$1(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get3 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else if (true) {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get3.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key, value, oldValue);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get3 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else if (true) {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get3 ? get3.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const oldTarget = true ? isMap(target) ? new Map(target) : new Set(target) : void 0;
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0, oldTarget);
  }
  return result;
}
function createForEach(isReadonly, isShallow) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed[
      "__v_raw"
      /* RAW */
    ];
    const rawTarget = toRaw(target);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly, isShallow) {
  return function(...args) {
    const target = this[
      "__v_raw"
      /* RAW */
    ];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
    return {
      // iterator protocol
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    if (true) {
      const key = args[0] ? `on key "${args[0]}" ` : ``;
      console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
    }
    return type === "delete" ? false : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get$1(this, key);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get$1(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has: has$1,
    add,
    set: set$1,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod(
      "add"
      /* ADD */
    ),
    set: createReadonlyMethod(
      "set"
      /* SET */
    ),
    delete: createReadonlyMethod(
      "delete"
      /* DELETE */
    ),
    clear: createReadonlyMethod(
      "clear"
      /* CLEAR */
    ),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get$1(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has$1.call(this, key, true);
    },
    add: createReadonlyMethod(
      "add"
      /* ADD */
    ),
    set: createReadonlyMethod(
      "set"
      /* SET */
    ),
    delete: createReadonlyMethod(
      "delete"
      /* DELETE */
    ),
    clear: createReadonlyMethod(
      "clear"
      /* CLEAR */
    ),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = ["keys", "values", "entries", Symbol.iterator];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
var [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly, shallow) {
  const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly;
    } else if (key === "__v_isReadonly") {
      return isReadonly;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
  };
}
var mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
var readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
function checkIdentityKeys(target, has2, key) {
  const rawKey = toRaw(key);
  if (rawKey !== key && has2.call(target, rawKey)) {
    const type = toRawType(target);
    console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
var reactiveMap = /* @__PURE__ */ new WeakMap();
var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
var readonlyMap = /* @__PURE__ */ new WeakMap();
var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value[
    "__v_skip"
    /* SKIP */
  ] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive2(target) {
  if (target && target[
    "__v_isReadonly"
    /* IS_READONLY */
  ]) {
    return target;
  }
  return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function readonly(target) {
  return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target)) {
    if (true) {
      console.warn(`value cannot be made reactive: ${String(target)}`);
    }
    return target;
  }
  if (target[
    "__v_raw"
    /* RAW */
  ] && !(isReadonly && target[
    "__v_isReactive"
    /* IS_REACTIVE */
  ])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
  proxyMap.set(target, proxy);
  return proxy;
}
function toRaw(observed) {
  return observed && toRaw(observed[
    "__v_raw"
    /* RAW */
  ]) || observed;
}
function isRef(r) {
  return Boolean(r && r.__v_isRef === true);
}
magic("nextTick", () => nextTick);
magic("dispatch", (el) => dispatch.bind(dispatch, el));
magic("watch", (el, { evaluateLater: evaluateLater2, effect: effect3 }) => (key, callback) => {
  let evaluate2 = evaluateLater2(key);
  let firstTime = true;
  let oldValue;
  let effectReference = effect3(() => evaluate2((value) => {
    JSON.stringify(value);
    if (!firstTime) {
      queueMicrotask(() => {
        callback(value, oldValue);
        oldValue = value;
      });
    } else {
      oldValue = value;
    }
    firstTime = false;
  }));
  el._x_effects.delete(effectReference);
});
magic("store", getStores);
magic("data", (el) => scope(el));
magic("root", (el) => closestRoot(el));
magic("refs", (el) => {
  if (el._x_refs_proxy)
    return el._x_refs_proxy;
  el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
  return el._x_refs_proxy;
});
function getArrayOfRefObject(el) {
  let refObjects = [];
  let currentEl = el;
  while (currentEl) {
    if (currentEl._x_refs)
      refObjects.push(currentEl._x_refs);
    currentEl = currentEl.parentNode;
  }
  return refObjects;
}
var globalIdMemo = {};
function findAndIncrementId(name) {
  if (!globalIdMemo[name])
    globalIdMemo[name] = 0;
  return ++globalIdMemo[name];
}
function closestIdRoot(el, name) {
  return findClosest(el, (element) => {
    if (element._x_ids && element._x_ids[name])
      return true;
  });
}
function setIdRoot(el, name) {
  if (!el._x_ids)
    el._x_ids = {};
  if (!el._x_ids[name])
    el._x_ids[name] = findAndIncrementId(name);
}
magic("id", (el) => (name, key = null) => {
  let root = closestIdRoot(el, name);
  let id = root ? root._x_ids[name] : findAndIncrementId(name);
  return key ? `${name}-${id}-${key}` : `${name}-${id}`;
});
magic("el", (el) => el);
warnMissingPluginMagic("Focus", "focus", "focus");
warnMissingPluginMagic("Persist", "persist", "persist");
function warnMissingPluginMagic(name, magicName, slug) {
  magic(magicName, (el) => warn(`You can't use [$${magicName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
}
directive("modelable", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2, cleanup: cleanup2 }) => {
  let func = evaluateLater2(expression);
  let innerGet = () => {
    let result;
    func((i) => result = i);
    return result;
  };
  let evaluateInnerSet = evaluateLater2(`${expression} = __placeholder`);
  let innerSet = (val) => evaluateInnerSet(() => {
  }, { scope: { "__placeholder": val } });
  let initialValue = innerGet();
  innerSet(initialValue);
  queueMicrotask(() => {
    if (!el._x_model)
      return;
    el._x_removeModelListeners["default"]();
    let outerGet = el._x_model.get;
    let outerSet = el._x_model.set;
    let releaseEntanglement = entangle(
      {
        get() {
          return outerGet();
        },
        set(value) {
          outerSet(value);
        }
      },
      {
        get() {
          return innerGet();
        },
        set(value) {
          innerSet(value);
        }
      }
    );
    cleanup2(releaseEntanglement);
  });
});
directive("teleport", (el, { modifiers, expression }, { cleanup: cleanup2 }) => {
  if (el.tagName.toLowerCase() !== "template")
    warn("x-teleport can only be used on a <template> tag", el);
  let target = getTarget(expression);
  let clone2 = el.content.cloneNode(true).firstElementChild;
  el._x_teleport = clone2;
  clone2._x_teleportBack = el;
  el.setAttribute("data-teleport-template", true);
  clone2.setAttribute("data-teleport-target", true);
  if (el._x_forwardEvents) {
    el._x_forwardEvents.forEach((eventName) => {
      clone2.addEventListener(eventName, (e) => {
        e.stopPropagation();
        el.dispatchEvent(new e.constructor(e.type, e));
      });
    });
  }
  addScopeToNode(clone2, {}, el);
  let placeInDom = (clone3, target2, modifiers2) => {
    if (modifiers2.includes("prepend")) {
      target2.parentNode.insertBefore(clone3, target2);
    } else if (modifiers2.includes("append")) {
      target2.parentNode.insertBefore(clone3, target2.nextSibling);
    } else {
      target2.appendChild(clone3);
    }
  };
  mutateDom(() => {
    placeInDom(clone2, target, modifiers);
    initTree(clone2);
    clone2._x_ignore = true;
  });
  el._x_teleportPutBack = () => {
    let target2 = getTarget(expression);
    mutateDom(() => {
      placeInDom(el._x_teleport, target2, modifiers);
    });
  };
  cleanup2(() => clone2.remove());
});
var teleportContainerDuringClone = document.createElement("div");
function getTarget(expression) {
  let target = skipDuringClone(() => {
    return document.querySelector(expression);
  }, () => {
    return teleportContainerDuringClone;
  })();
  if (!target)
    warn(`Cannot find x-teleport element for selector: "${expression}"`);
  return target;
}
var handler = () => {
};
handler.inline = (el, { modifiers }, { cleanup: cleanup2 }) => {
  modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
  cleanup2(() => {
    modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
  });
};
directive("ignore", handler);
directive("effect", (el, { expression }, { effect: effect3 }) => effect3(evaluateLater(el, expression)));
function on(el, event, modifiers, callback) {
  let listenerTarget = el;
  let handler4 = (e) => callback(e);
  let options = {};
  let wrapHandler = (callback2, wrapper) => (e) => wrapper(callback2, e);
  if (modifiers.includes("dot"))
    event = dotSyntax(event);
  if (modifiers.includes("camel"))
    event = camelCase2(event);
  if (modifiers.includes("passive"))
    options.passive = true;
  if (modifiers.includes("capture"))
    options.capture = true;
  if (modifiers.includes("window"))
    listenerTarget = window;
  if (modifiers.includes("document"))
    listenerTarget = document;
  if (modifiers.includes("debounce")) {
    let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
    let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
    handler4 = debounce(handler4, wait);
  }
  if (modifiers.includes("throttle")) {
    let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
    let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
    handler4 = throttle(handler4, wait);
  }
  if (modifiers.includes("prevent"))
    handler4 = wrapHandler(handler4, (next, e) => {
      e.preventDefault();
      next(e);
    });
  if (modifiers.includes("stop"))
    handler4 = wrapHandler(handler4, (next, e) => {
      e.stopPropagation();
      next(e);
    });
  if (modifiers.includes("self"))
    handler4 = wrapHandler(handler4, (next, e) => {
      e.target === el && next(e);
    });
  if (modifiers.includes("away") || modifiers.includes("outside")) {
    listenerTarget = document;
    handler4 = wrapHandler(handler4, (next, e) => {
      if (el.contains(e.target))
        return;
      if (e.target.isConnected === false)
        return;
      if (el.offsetWidth < 1 && el.offsetHeight < 1)
        return;
      if (el._x_isShown === false)
        return;
      next(e);
    });
  }
  if (modifiers.includes("once")) {
    handler4 = wrapHandler(handler4, (next, e) => {
      next(e);
      listenerTarget.removeEventListener(event, handler4, options);
    });
  }
  handler4 = wrapHandler(handler4, (next, e) => {
    if (isKeyEvent(event)) {
      if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) {
        return;
      }
    }
    next(e);
  });
  listenerTarget.addEventListener(event, handler4, options);
  return () => {
    listenerTarget.removeEventListener(event, handler4, options);
  };
}
function dotSyntax(subject) {
  return subject.replace(/-/g, ".");
}
function camelCase2(subject) {
  return subject.toLowerCase().replace(/-(\w)/g, (match, char) => char.toUpperCase());
}
function isNumeric(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
}
function kebabCase2(subject) {
  if ([" ", "_"].includes(
    subject
  ))
    return subject;
  return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
}
function isKeyEvent(event) {
  return ["keydown", "keyup"].includes(event);
}
function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
  let keyModifiers = modifiers.filter((i) => {
    return !["window", "document", "prevent", "stop", "once", "capture"].includes(i);
  });
  if (keyModifiers.includes("debounce")) {
    let debounceIndex = keyModifiers.indexOf("debounce");
    keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (keyModifiers.includes("throttle")) {
    let debounceIndex = keyModifiers.indexOf("throttle");
    keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (keyModifiers.length === 0)
    return false;
  if (keyModifiers.length === 1 && keyToModifiers(e.key).includes(keyModifiers[0]))
    return false;
  const systemKeyModifiers = ["ctrl", "shift", "alt", "meta", "cmd", "super"];
  const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier) => keyModifiers.includes(modifier));
  keyModifiers = keyModifiers.filter((i) => !selectedSystemKeyModifiers.includes(i));
  if (selectedSystemKeyModifiers.length > 0) {
    const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier) => {
      if (modifier === "cmd" || modifier === "super")
        modifier = "meta";
      return e[`${modifier}Key`];
    });
    if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
      if (keyToModifiers(e.key).includes(keyModifiers[0]))
        return false;
    }
  }
  return true;
}
function keyToModifiers(key) {
  if (!key)
    return [];
  key = kebabCase2(key);
  let modifierToKeyMap = {
    "ctrl": "control",
    "slash": "/",
    "space": " ",
    "spacebar": " ",
    "cmd": "meta",
    "esc": "escape",
    "up": "arrow-up",
    "down": "arrow-down",
    "left": "arrow-left",
    "right": "arrow-right",
    "period": ".",
    "equal": "=",
    "minus": "-",
    "underscore": "_"
  };
  modifierToKeyMap[key] = key;
  return Object.keys(modifierToKeyMap).map((modifier) => {
    if (modifierToKeyMap[modifier] === key)
      return modifier;
  }).filter((modifier) => modifier);
}
directive("model", (el, { modifiers, expression }, { effect: effect3, cleanup: cleanup2 }) => {
  let scopeTarget = el;
  if (modifiers.includes("parent")) {
    scopeTarget = el.parentNode;
  }
  let evaluateGet = evaluateLater(scopeTarget, expression);
  let evaluateSet;
  if (typeof expression === "string") {
    evaluateSet = evaluateLater(scopeTarget, `${expression} = __placeholder`);
  } else if (typeof expression === "function" && typeof expression() === "string") {
    evaluateSet = evaluateLater(scopeTarget, `${expression()} = __placeholder`);
  } else {
    evaluateSet = () => {
    };
  }
  let getValue = () => {
    let result;
    evaluateGet((value) => result = value);
    return isGetterSetter(result) ? result.get() : result;
  };
  let setValue = (value) => {
    let result;
    evaluateGet((value2) => result = value2);
    if (isGetterSetter(result)) {
      result.set(value);
    } else {
      evaluateSet(() => {
      }, {
        scope: { "__placeholder": value }
      });
    }
  };
  if (typeof expression === "string" && el.type === "radio") {
    mutateDom(() => {
      if (!el.hasAttribute("name"))
        el.setAttribute("name", expression);
    });
  }
  var event = el.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
  let removeListener = isCloning ? () => {
  } : on(el, event, modifiers, (e) => {
    setValue(getInputValue(el, modifiers, e, getValue()));
  });
  if (modifiers.includes("fill")) {
    if ([null, ""].includes(getValue()) || el.type === "checkbox" && Array.isArray(getValue())) {
      el.dispatchEvent(new Event(event, {}));
    }
  }
  if (!el._x_removeModelListeners)
    el._x_removeModelListeners = {};
  el._x_removeModelListeners["default"] = removeListener;
  cleanup2(() => el._x_removeModelListeners["default"]());
  if (el.form) {
    let removeResetListener = on(el.form, "reset", [], (e) => {
      nextTick(() => el._x_model && el._x_model.set(el.value));
    });
    cleanup2(() => removeResetListener());
  }
  el._x_model = {
    get() {
      return getValue();
    },
    set(value) {
      setValue(value);
    }
  };
  el._x_forceModelUpdate = (value) => {
    if (value === void 0 && typeof expression === "string" && expression.match(/\./))
      value = "";
    window.fromModel = true;
    mutateDom(() => bind(el, "value", value));
    delete window.fromModel;
  };
  effect3(() => {
    let value = getValue();
    if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el))
      return;
    el._x_forceModelUpdate(value);
  });
});
function getInputValue(el, modifiers, event, currentValue) {
  return mutateDom(() => {
    if (event instanceof CustomEvent && event.detail !== void 0)
      return event.detail !== null && event.detail !== void 0 ? event.detail : event.target.value;
    else if (el.type === "checkbox") {
      if (Array.isArray(currentValue)) {
        let newValue = modifiers.includes("number") ? safeParseNumber(event.target.value) : event.target.value;
        return event.target.checked ? currentValue.concat([newValue]) : currentValue.filter((el2) => !checkedAttrLooseCompare2(el2, newValue));
      } else {
        return event.target.checked;
      }
    } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
      return modifiers.includes("number") ? Array.from(event.target.selectedOptions).map((option) => {
        let rawValue = option.value || option.text;
        return safeParseNumber(rawValue);
      }) : Array.from(event.target.selectedOptions).map((option) => {
        return option.value || option.text;
      });
    } else {
      let rawValue = event.target.value;
      return modifiers.includes("number") ? safeParseNumber(rawValue) : modifiers.includes("trim") ? rawValue.trim() : rawValue;
    }
  });
}
function safeParseNumber(rawValue) {
  let number = rawValue ? parseFloat(rawValue) : null;
  return isNumeric2(number) ? number : rawValue;
}
function checkedAttrLooseCompare2(valueA, valueB) {
  return valueA == valueB;
}
function isNumeric2(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
}
function isGetterSetter(value) {
  return value !== null && typeof value === "object" && typeof value.get === "function" && typeof value.set === "function";
}
directive("cloak", (el) => queueMicrotask(() => mutateDom(() => el.removeAttribute(prefix("cloak")))));
addInitSelector(() => `[${prefix("init")}]`);
directive("init", skipDuringClone((el, { expression }, { evaluate: evaluate2 }) => {
  if (typeof expression === "string") {
    return !!expression.trim() && evaluate2(expression, {}, false);
  }
  return evaluate2(expression, {}, false);
}));
directive("text", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
  let evaluate2 = evaluateLater2(expression);
  effect3(() => {
    evaluate2((value) => {
      mutateDom(() => {
        el.textContent = value;
      });
    });
  });
});
directive("html", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 }) => {
  let evaluate2 = evaluateLater2(expression);
  effect3(() => {
    evaluate2((value) => {
      mutateDom(() => {
        el.innerHTML = value;
        el._x_ignoreSelf = true;
        initTree(el);
        delete el._x_ignoreSelf;
      });
    });
  });
});
mapAttributes(startingWith(":", into(prefix("bind:"))));
var handler2 = (el, { value, modifiers, expression, original }, { effect: effect3 }) => {
  if (!value) {
    let bindingProviders = {};
    injectBindingProviders(bindingProviders);
    let getBindings = evaluateLater(el, expression);
    getBindings((bindings) => {
      applyBindingsObject(el, bindings, original);
    }, { scope: bindingProviders });
    return;
  }
  if (value === "key")
    return storeKeyForXFor(el, expression);
  if (el._x_inlineBindings && el._x_inlineBindings[value] && el._x_inlineBindings[value].extract) {
    return;
  }
  let evaluate2 = evaluateLater(el, expression);
  effect3(() => evaluate2((result) => {
    if (result === void 0 && typeof expression === "string" && expression.match(/\./)) {
      result = "";
    }
    mutateDom(() => bind(el, value, result, modifiers));
  }));
};
handler2.inline = (el, { value, modifiers, expression }) => {
  if (!value)
    return;
  if (!el._x_inlineBindings)
    el._x_inlineBindings = {};
  el._x_inlineBindings[value] = { expression, extract: false };
};
directive("bind", handler2);
function storeKeyForXFor(el, expression) {
  el._x_keyExpression = expression;
}
addRootSelector(() => `[${prefix("data")}]`);
directive("data", (el, { expression }, { cleanup: cleanup2 }) => {
  if (shouldSkipRegisteringDataDuringClone(el))
    return;
  expression = expression === "" ? "{}" : expression;
  let magicContext = {};
  injectMagics(magicContext, el);
  let dataProviderContext = {};
  injectDataProviders(dataProviderContext, magicContext);
  let data2 = evaluate(el, expression, { scope: dataProviderContext });
  if (data2 === void 0 || data2 === true)
    data2 = {};
  injectMagics(data2, el);
  let reactiveData = reactive(data2);
  initInterceptors2(reactiveData);
  let undo = addScopeToNode(el, reactiveData);
  reactiveData["init"] && evaluate(el, reactiveData["init"]);
  cleanup2(() => {
    reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
    undo();
  });
});
directive("show", (el, { modifiers, expression }, { effect: effect3 }) => {
  let evaluate2 = evaluateLater(el, expression);
  if (!el._x_doHide)
    el._x_doHide = () => {
      mutateDom(() => {
        el.style.setProperty("display", "none", modifiers.includes("important") ? "important" : void 0);
      });
    };
  if (!el._x_doShow)
    el._x_doShow = () => {
      mutateDom(() => {
        if (el.style.length === 1 && el.style.display === "none") {
          el.removeAttribute("style");
        } else {
          el.style.removeProperty("display");
        }
      });
    };
  let hide = () => {
    el._x_doHide();
    el._x_isShown = false;
  };
  let show = () => {
    el._x_doShow();
    el._x_isShown = true;
  };
  let clickAwayCompatibleShow = () => setTimeout(show);
  let toggle = once(
    (value) => value ? show() : hide(),
    (value) => {
      if (typeof el._x_toggleAndCascadeWithTransitions === "function") {
        el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
      } else {
        value ? clickAwayCompatibleShow() : hide();
      }
    }
  );
  let oldValue;
  let firstTime = true;
  effect3(() => evaluate2((value) => {
    if (!firstTime && value === oldValue)
      return;
    if (modifiers.includes("immediate"))
      value ? clickAwayCompatibleShow() : hide();
    toggle(value);
    oldValue = value;
    firstTime = false;
  }));
});
directive("for", (el, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
  let iteratorNames = parseForExpression(expression);
  let evaluateItems = evaluateLater(el, iteratorNames.items);
  let evaluateKey = evaluateLater(
    el,
    // the x-bind:key expression is stored for our use instead of evaluated.
    el._x_keyExpression || "index"
  );
  el._x_prevKeys = [];
  el._x_lookup = {};
  effect3(() => loop(el, iteratorNames, evaluateItems, evaluateKey));
  cleanup2(() => {
    Object.values(el._x_lookup).forEach((el2) => el2.remove());
    delete el._x_prevKeys;
    delete el._x_lookup;
  });
});
function loop(el, iteratorNames, evaluateItems, evaluateKey) {
  let isObject2 = (i) => typeof i === "object" && !Array.isArray(i);
  let templateEl = el;
  evaluateItems((items) => {
    if (isNumeric3(items) && items >= 0) {
      items = Array.from(Array(items).keys(), (i) => i + 1);
    }
    if (items === void 0)
      items = [];
    let lookup = el._x_lookup;
    let prevKeys = el._x_prevKeys;
    let scopes = [];
    let keys = [];
    if (isObject2(items)) {
      items = Object.entries(items).map(([key, value]) => {
        let scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
        evaluateKey((value2) => keys.push(value2), { scope: { index: key, ...scope2 } });
        scopes.push(scope2);
      });
    } else {
      for (let i = 0; i < items.length; i++) {
        let scope2 = getIterationScopeVariables(iteratorNames, items[i], i, items);
        evaluateKey((value) => keys.push(value), { scope: { index: i, ...scope2 } });
        scopes.push(scope2);
      }
    }
    let adds = [];
    let moves = [];
    let removes = [];
    let sames = [];
    for (let i = 0; i < prevKeys.length; i++) {
      let key = prevKeys[i];
      if (keys.indexOf(key) === -1)
        removes.push(key);
    }
    prevKeys = prevKeys.filter((key) => !removes.includes(key));
    let lastKey = "template";
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let prevIndex = prevKeys.indexOf(key);
      if (prevIndex === -1) {
        prevKeys.splice(i, 0, key);
        adds.push([lastKey, i]);
      } else if (prevIndex !== i) {
        let keyInSpot = prevKeys.splice(i, 1)[0];
        let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
        prevKeys.splice(i, 0, keyForSpot);
        prevKeys.splice(prevIndex, 0, keyInSpot);
        moves.push([keyInSpot, keyForSpot]);
      } else {
        sames.push(key);
      }
      lastKey = key;
    }
    for (let i = 0; i < removes.length; i++) {
      let key = removes[i];
      if (!!lookup[key]._x_effects) {
        lookup[key]._x_effects.forEach(dequeueJob);
      }
      lookup[key].remove();
      lookup[key] = null;
      delete lookup[key];
    }
    for (let i = 0; i < moves.length; i++) {
      let [keyInSpot, keyForSpot] = moves[i];
      let elInSpot = lookup[keyInSpot];
      let elForSpot = lookup[keyForSpot];
      let marker = document.createElement("div");
      mutateDom(() => {
        if (!elForSpot)
          warn(`x-for ":key" is undefined or invalid`, templateEl);
        elForSpot.after(marker);
        elInSpot.after(elForSpot);
        elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
        marker.before(elInSpot);
        elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
        marker.remove();
      });
      elForSpot._x_refreshXForScope(scopes[keys.indexOf(keyForSpot)]);
    }
    for (let i = 0; i < adds.length; i++) {
      let [lastKey2, index] = adds[i];
      let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
      if (lastEl._x_currentIfEl)
        lastEl = lastEl._x_currentIfEl;
      let scope2 = scopes[index];
      let key = keys[index];
      let clone2 = document.importNode(templateEl.content, true).firstElementChild;
      let reactiveScope = reactive(scope2);
      addScopeToNode(clone2, reactiveScope, templateEl);
      clone2._x_refreshXForScope = (newScope) => {
        Object.entries(newScope).forEach(([key2, value]) => {
          reactiveScope[key2] = value;
        });
      };
      mutateDom(() => {
        lastEl.after(clone2);
        initTree(clone2);
      });
      if (typeof key === "object") {
        warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
      }
      lookup[key] = clone2;
    }
    for (let i = 0; i < sames.length; i++) {
      lookup[sames[i]]._x_refreshXForScope(scopes[keys.indexOf(sames[i])]);
    }
    templateEl._x_prevKeys = keys;
  });
}
function parseForExpression(expression) {
  let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
  let stripParensRE = /^\s*\(|\)\s*$/g;
  let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
  let inMatch = expression.match(forAliasRE);
  if (!inMatch)
    return;
  let res = {};
  res.items = inMatch[2].trim();
  let item = inMatch[1].replace(stripParensRE, "").trim();
  let iteratorMatch = item.match(forIteratorRE);
  if (iteratorMatch) {
    res.item = item.replace(forIteratorRE, "").trim();
    res.index = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.collection = iteratorMatch[2].trim();
    }
  } else {
    res.item = item;
  }
  return res;
}
function getIterationScopeVariables(iteratorNames, item, index, items) {
  let scopeVariables = {};
  if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
    let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i) => i.trim());
    names.forEach((name, i) => {
      scopeVariables[name] = item[i];
    });
  } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
    let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i) => i.trim());
    names.forEach((name) => {
      scopeVariables[name] = item[name];
    });
  } else {
    scopeVariables[iteratorNames.item] = item;
  }
  if (iteratorNames.index)
    scopeVariables[iteratorNames.index] = index;
  if (iteratorNames.collection)
    scopeVariables[iteratorNames.collection] = items;
  return scopeVariables;
}
function isNumeric3(subject) {
  return !Array.isArray(subject) && !isNaN(subject);
}
function handler3() {
}
handler3.inline = (el, { expression }, { cleanup: cleanup2 }) => {
  let root = closestRoot(el);
  if (!root._x_refs)
    root._x_refs = {};
  root._x_refs[expression] = el;
  cleanup2(() => delete root._x_refs[expression]);
};
directive("ref", handler3);
directive("if", (el, { expression }, { effect: effect3, cleanup: cleanup2 }) => {
  if (el.tagName.toLowerCase() !== "template")
    warn("x-if can only be used on a <template> tag", el);
  let evaluate2 = evaluateLater(el, expression);
  let show = () => {
    if (el._x_currentIfEl)
      return el._x_currentIfEl;
    let clone2 = el.content.cloneNode(true).firstElementChild;
    addScopeToNode(clone2, {}, el);
    mutateDom(() => {
      el.after(clone2);
      initTree(clone2);
    });
    el._x_currentIfEl = clone2;
    el._x_undoIf = () => {
      walk(clone2, (node) => {
        if (!!node._x_effects) {
          node._x_effects.forEach(dequeueJob);
        }
      });
      clone2.remove();
      delete el._x_currentIfEl;
    };
    return clone2;
  };
  let hide = () => {
    if (!el._x_undoIf)
      return;
    el._x_undoIf();
    delete el._x_undoIf;
  };
  effect3(() => evaluate2((value) => {
    value ? show() : hide();
  }));
  cleanup2(() => el._x_undoIf && el._x_undoIf());
});
directive("id", (el, { expression }, { evaluate: evaluate2 }) => {
  let names = evaluate2(expression);
  names.forEach((name) => setIdRoot(el, name));
});
mapAttributes(startingWith("@", into(prefix("on:"))));
directive("on", skipDuringClone((el, { value, modifiers, expression }, { cleanup: cleanup2 }) => {
  let evaluate2 = expression ? evaluateLater(el, expression) : () => {
  };
  if (el.tagName.toLowerCase() === "template") {
    if (!el._x_forwardEvents)
      el._x_forwardEvents = [];
    if (!el._x_forwardEvents.includes(value))
      el._x_forwardEvents.push(value);
  }
  let removeListener = on(el, value, modifiers, (e) => {
    evaluate2(() => {
    }, { scope: { "$event": e }, params: [e] });
  });
  cleanup2(() => removeListener());
}));
warnMissingPluginDirective("Collapse", "collapse", "collapse");
warnMissingPluginDirective("Intersect", "intersect", "intersect");
warnMissingPluginDirective("Focus", "trap", "focus");
warnMissingPluginDirective("Mask", "mask", "mask");
function warnMissingPluginDirective(name, directiveName, slug) {
  directive(directiveName, (el) => warn(`You can't use [x-${directiveName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
}
alpine_default.setEvaluator(normalEvaluator);
alpine_default.setReactivityEngine({ reactive: reactive2, effect: effect2, release: stop, raw: toRaw });
var src_default = alpine_default;
var module_default = src_default;

// main.ts
var import_json_formatter_js = __toESM(require_json_formatter_umd());
var sdk = new ot("omni-extension-log-viewer").init({
  subscriptions: [er.CUSTOM_EVENT]
});
window.Alpine = module_default;
document.addEventListener("alpine:init", async () => {
  module_default.data("extLogs", () => ({
    logs: [],
    isOpen(element) {
      return element.nextElementSibling.style.display !== "none";
    },
    toggle(event) {
    },
    init() {
      sdk.events.on(Xr.CUSTOM_EVENT, (event) => {
        if (event.eventId === "log") {
          this.logs.push({ type: event.eventArgs.type, timestamp: new Date(event.eventArgs.timestamp).toISOString(), message: event.eventArgs.message, details: event.eventArgs.details });
        }
      });
    }
  }));
});
module_default.directive("json", (el, { expression }, { evaluate: evaluate2 }) => {
  const jsonData = evaluate2(expression);
  console.log(jsonData);
  const formatter = new import_json_formatter_js.default(jsonData);
  el.appendChild(formatter.render());
});
module_default.start();
var main_default = {};
export {
  main_default as default
};
