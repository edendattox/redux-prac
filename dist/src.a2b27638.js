// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/immer/dist/immer.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.castDraft = K;
exports.castImmutable = $;
exports.current = D;
exports.enableAllPlugins = J;
exports.enableES5 = N;
exports.enableMapSet = C;
exports.enablePatches = T;
exports.freeze = d;
exports.isDraft = t;
exports.isDraftable = r;
exports.original = e;
exports.setUseProxies = exports.setAutoFreeze = exports.produceWithPatches = exports.produce = exports.nothing = exports.immerable = exports.finishDraft = exports.createDraft = exports.applyPatches = exports.Immer = exports.default = void 0;

function n(n) {
  for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), e = 1; e < t; e++) r[e - 1] = arguments[e];

  if ("production" !== "development") {
    var i = Y[n],
        o = i ? "function" == typeof i ? i.apply(null, r) : i : "unknown error nr: " + n;
    throw Error("[Immer] " + o);
  }

  throw Error("[Immer] minified error nr: " + n + (r.length ? " " + r.map(function (n) {
    return "'" + n + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}

function t(n) {
  return !!n && !!n[Q];
}

function r(n) {
  return !!n && (function (n) {
    if (!n || "object" != typeof n) return !1;
    var t = Object.getPrototypeOf(n);
    if (null === t) return !0;
    var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
    return r === Object || "function" == typeof r && Function.toString.call(r) === Z;
  }(n) || Array.isArray(n) || !!n[L] || !!n.constructor[L] || s(n) || v(n));
}

function e(r) {
  return t(r) || n(23, r), r[Q].t;
}

function i(n, t, r) {
  void 0 === r && (r = !1), 0 === o(n) ? (r ? Object.keys : nn)(n).forEach(function (e) {
    r && "symbol" == typeof e || t(e, n[e], n);
  }) : n.forEach(function (r, e) {
    return t(e, r, n);
  });
}

function o(n) {
  var t = n[Q];
  return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(n) ? 1 : s(n) ? 2 : v(n) ? 3 : 0;
}

function u(n, t) {
  return 2 === o(n) ? n.has(t) : Object.prototype.hasOwnProperty.call(n, t);
}

function a(n, t) {
  return 2 === o(n) ? n.get(t) : n[t];
}

function f(n, t, r) {
  var e = o(n);
  2 === e ? n.set(t, r) : 3 === e ? (n.delete(t), n.add(r)) : n[t] = r;
}

function c(n, t) {
  return n === t ? 0 !== n || 1 / n == 1 / t : n != n && t != t;
}

function s(n) {
  return X && n instanceof Map;
}

function v(n) {
  return q && n instanceof Set;
}

function p(n) {
  return n.o || n.t;
}

function l(n) {
  if (Array.isArray(n)) return Array.prototype.slice.call(n);
  var t = tn(n);
  delete t[Q];

  for (var r = nn(t), e = 0; e < r.length; e++) {
    var i = r[e],
        o = t[i];
    !1 === o.writable && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (t[i] = {
      configurable: !0,
      writable: !0,
      enumerable: o.enumerable,
      value: n[i]
    });
  }

  return Object.create(Object.getPrototypeOf(n), t);
}

function d(n, e) {
  return void 0 === e && (e = !1), y(n) || t(n) || !r(n) ? n : (o(n) > 1 && (n.set = n.add = n.clear = n.delete = h), Object.freeze(n), e && i(n, function (n, t) {
    return d(t, !0);
  }, !0), n);
}

function h() {
  n(2);
}

function y(n) {
  return null == n || "object" != typeof n || Object.isFrozen(n);
}

function b(t) {
  var r = rn[t];
  return r || n(18, t), r;
}

function m(n, t) {
  rn[n] || (rn[n] = t);
}

function _() {
  return "production" === "development" || U || n(0), U;
}

function j(n, t) {
  t && (b("Patches"), n.u = [], n.s = [], n.v = t);
}

function O(n) {
  g(n), n.p.forEach(S), n.p = null;
}

function g(n) {
  n === U && (U = n.l);
}

function w(n) {
  return U = {
    p: [],
    l: U,
    h: n,
    m: !0,
    _: 0
  };
}

function S(n) {
  var t = n[Q];
  0 === t.i || 1 === t.i ? t.j() : t.O = !0;
}

function P(t, e) {
  e._ = e.p.length;
  var i = e.p[0],
      o = void 0 !== t && t !== i;
  return e.h.g || b("ES5").S(e, t, o), o ? (i[Q].P && (O(e), n(4)), r(t) && (t = M(e, t), e.l || x(e, t)), e.u && b("Patches").M(i[Q], t, e.u, e.s)) : t = M(e, i, []), O(e), e.u && e.v(e.u, e.s), t !== H ? t : void 0;
}

function M(n, t, r) {
  if (y(t)) return t;
  var e = t[Q];
  if (!e) return i(t, function (i, o) {
    return A(n, e, t, i, o, r);
  }, !0), t;
  if (e.A !== n) return t;
  if (!e.P) return x(n, e.t, !0), e.t;

  if (!e.I) {
    e.I = !0, e.A._--;
    var o = 4 === e.i || 5 === e.i ? e.o = l(e.k) : e.o;
    i(3 === e.i ? new Set(o) : o, function (t, i) {
      return A(n, e, o, t, i, r);
    }), x(n, o, !1), r && n.u && b("Patches").R(e, r, n.u, n.s);
  }

  return e.o;
}

function A(e, i, o, a, c, s) {
  if ("production" !== "development" && c === o && n(5), t(c)) {
    var v = M(e, c, s && i && 3 !== i.i && !u(i.D, a) ? s.concat(a) : void 0);
    if (f(o, a, v), !t(v)) return;
    e.m = !1;
  }

  if (r(c) && !y(c)) {
    if (!e.h.F && e._ < 1) return;
    M(e, c), i && i.A.l || x(e, c);
  }
}

function x(n, t, r) {
  void 0 === r && (r = !1), n.h.F && n.m && d(t, r);
}

function z(n, t) {
  var r = n[Q];
  return (r ? p(r) : n)[t];
}

function I(n, t) {
  if (t in n) for (var r = Object.getPrototypeOf(n); r;) {
    var e = Object.getOwnPropertyDescriptor(r, t);
    if (e) return e;
    r = Object.getPrototypeOf(r);
  }
}

function k(n) {
  n.P || (n.P = !0, n.l && k(n.l));
}

function E(n) {
  n.o || (n.o = l(n.t));
}

function R(n, t, r) {
  var e = s(t) ? b("MapSet").N(t, r) : v(t) ? b("MapSet").T(t, r) : n.g ? function (n, t) {
    var r = Array.isArray(n),
        e = {
      i: r ? 1 : 0,
      A: t ? t.A : _(),
      P: !1,
      I: !1,
      D: {},
      l: t,
      t: n,
      k: null,
      o: null,
      j: null,
      C: !1
    },
        i = e,
        o = en;
    r && (i = [e], o = on);
    var u = Proxy.revocable(i, o),
        a = u.revoke,
        f = u.proxy;
    return e.k = f, e.j = a, f;
  }(t, r) : b("ES5").J(t, r);
  return (r ? r.A : _()).p.push(e), e;
}

function D(e) {
  return t(e) || n(22, e), function n(t) {
    if (!r(t)) return t;
    var e,
        u = t[Q],
        c = o(t);

    if (u) {
      if (!u.P && (u.i < 4 || !b("ES5").K(u))) return u.t;
      u.I = !0, e = F(t, c), u.I = !1;
    } else e = F(t, c);

    return i(e, function (t, r) {
      u && a(u.t, t) === r || f(e, t, n(r));
    }), 3 === c ? new Set(e) : e;
  }(e);
}

function F(n, t) {
  switch (t) {
    case 2:
      return new Map(n);

    case 3:
      return Array.from(n);
  }

  return l(n);
}

function N() {
  function r(n, t) {
    var r = s[n];
    return r ? r.enumerable = t : s[n] = r = {
      configurable: !0,
      enumerable: t,
      get: function () {
        var t = this[Q];
        return "production" !== "development" && f(t), en.get(t, n);
      },
      set: function (t) {
        var r = this[Q];
        "production" !== "development" && f(r), en.set(r, n, t);
      }
    }, r;
  }

  function e(n) {
    for (var t = n.length - 1; t >= 0; t--) {
      var r = n[t][Q];
      if (!r.P) switch (r.i) {
        case 5:
          a(r) && k(r);
          break;

        case 4:
          o(r) && k(r);
      }
    }
  }

  function o(n) {
    for (var t = n.t, r = n.k, e = nn(r), i = e.length - 1; i >= 0; i--) {
      var o = e[i];

      if (o !== Q) {
        var a = t[o];
        if (void 0 === a && !u(t, o)) return !0;
        var f = r[o],
            s = f && f[Q];
        if (s ? s.t !== a : !c(f, a)) return !0;
      }
    }

    var v = !!t[Q];
    return e.length !== nn(t).length + (v ? 0 : 1);
  }

  function a(n) {
    var t = n.k;
    if (t.length !== n.t.length) return !0;
    var r = Object.getOwnPropertyDescriptor(t, t.length - 1);
    return !(!r || r.get);
  }

  function f(t) {
    t.O && n(3, JSON.stringify(p(t)));
  }

  var s = {};
  m("ES5", {
    J: function (n, t) {
      var e = Array.isArray(n),
          i = function (n, t) {
        if (n) {
          for (var e = Array(t.length), i = 0; i < t.length; i++) Object.defineProperty(e, "" + i, r(i, !0));

          return e;
        }

        var o = tn(t);
        delete o[Q];

        for (var u = nn(o), a = 0; a < u.length; a++) {
          var f = u[a];
          o[f] = r(f, n || !!o[f].enumerable);
        }

        return Object.create(Object.getPrototypeOf(t), o);
      }(e, n),
          o = {
        i: e ? 5 : 4,
        A: t ? t.A : _(),
        P: !1,
        I: !1,
        D: {},
        l: t,
        t: n,
        k: i,
        o: null,
        O: !1,
        C: !1
      };

      return Object.defineProperty(i, Q, {
        value: o,
        writable: !0
      }), i;
    },
    S: function (n, r, o) {
      o ? t(r) && r[Q].A === n && e(n.p) : (n.u && function n(t) {
        if (t && "object" == typeof t) {
          var r = t[Q];

          if (r) {
            var e = r.t,
                o = r.k,
                f = r.D,
                c = r.i;
            if (4 === c) i(o, function (t) {
              t !== Q && (void 0 !== e[t] || u(e, t) ? f[t] || n(o[t]) : (f[t] = !0, k(r)));
            }), i(e, function (n) {
              void 0 !== o[n] || u(o, n) || (f[n] = !1, k(r));
            });else if (5 === c) {
              if (a(r) && (k(r), f.length = !0), o.length < e.length) for (var s = o.length; s < e.length; s++) f[s] = !1;else for (var v = e.length; v < o.length; v++) f[v] = !0;

              for (var p = Math.min(o.length, e.length), l = 0; l < p; l++) void 0 === f[l] && n(o[l]);
            }
          }
        }
      }(n.p[0]), e(n.p));
    },
    K: function (n) {
      return 4 === n.i ? o(n) : a(n);
    }
  });
}

function T() {
  function e(n) {
    if (!r(n)) return n;
    if (Array.isArray(n)) return n.map(e);
    if (s(n)) return new Map(Array.from(n.entries()).map(function (n) {
      return [n[0], e(n[1])];
    }));
    if (v(n)) return new Set(Array.from(n).map(e));
    var t = Object.create(Object.getPrototypeOf(n));

    for (var i in n) t[i] = e(n[i]);

    return u(n, L) && (t[L] = n[L]), t;
  }

  function f(n) {
    return t(n) ? e(n) : n;
  }

  var c = "add";
  m("Patches", {
    $: function (t, r) {
      return r.forEach(function (r) {
        for (var i = r.path, u = r.op, f = t, s = 0; s < i.length - 1; s++) {
          var v = o(f),
              p = i[s];
          0 !== v && 1 !== v || "__proto__" !== p && "constructor" !== p || n(24), "function" == typeof f && "prototype" === p && n(24), "object" != typeof (f = a(f, p)) && n(15, i.join("/"));
        }

        var l = o(f),
            d = e(r.value),
            h = i[i.length - 1];

        switch (u) {
          case "replace":
            switch (l) {
              case 2:
                return f.set(h, d);

              case 3:
                n(16);

              default:
                return f[h] = d;
            }

          case c:
            switch (l) {
              case 1:
                return f.splice(h, 0, d);

              case 2:
                return f.set(h, d);

              case 3:
                return f.add(d);

              default:
                return f[h] = d;
            }

          case "remove":
            switch (l) {
              case 1:
                return f.splice(h, 1);

              case 2:
                return f.delete(h);

              case 3:
                return f.delete(r.value);

              default:
                return delete f[h];
            }

          default:
            n(17, u);
        }
      }), t;
    },
    R: function (n, t, r, e) {
      switch (n.i) {
        case 0:
        case 4:
        case 2:
          return function (n, t, r, e) {
            var o = n.t,
                s = n.o;
            i(n.D, function (n, i) {
              var v = a(o, n),
                  p = a(s, n),
                  l = i ? u(o, n) ? "replace" : c : "remove";

              if (v !== p || "replace" !== l) {
                var d = t.concat(n);
                r.push("remove" === l ? {
                  op: l,
                  path: d
                } : {
                  op: l,
                  path: d,
                  value: p
                }), e.push(l === c ? {
                  op: "remove",
                  path: d
                } : "remove" === l ? {
                  op: c,
                  path: d,
                  value: f(v)
                } : {
                  op: "replace",
                  path: d,
                  value: f(v)
                });
              }
            });
          }(n, t, r, e);

        case 5:
        case 1:
          return function (n, t, r, e) {
            var i = n.t,
                o = n.D,
                u = n.o;

            if (u.length < i.length) {
              var a = [u, i];
              i = a[0], u = a[1];
              var s = [e, r];
              r = s[0], e = s[1];
            }

            for (var v = 0; v < i.length; v++) if (o[v] && u[v] !== i[v]) {
              var p = t.concat([v]);
              r.push({
                op: "replace",
                path: p,
                value: f(u[v])
              }), e.push({
                op: "replace",
                path: p,
                value: f(i[v])
              });
            }

            for (var l = i.length; l < u.length; l++) {
              var d = t.concat([l]);
              r.push({
                op: c,
                path: d,
                value: f(u[l])
              });
            }

            i.length < u.length && e.push({
              op: "replace",
              path: t.concat(["length"]),
              value: i.length
            });
          }(n, t, r, e);

        case 3:
          return function (n, t, r, e) {
            var i = n.t,
                o = n.o,
                u = 0;
            i.forEach(function (n) {
              if (!o.has(n)) {
                var i = t.concat([u]);
                r.push({
                  op: "remove",
                  path: i,
                  value: n
                }), e.unshift({
                  op: c,
                  path: i,
                  value: n
                });
              }

              u++;
            }), u = 0, o.forEach(function (n) {
              if (!i.has(n)) {
                var o = t.concat([u]);
                r.push({
                  op: c,
                  path: o,
                  value: n
                }), e.unshift({
                  op: "remove",
                  path: o,
                  value: n
                });
              }

              u++;
            });
          }(n, t, r, e);
      }
    },
    M: function (n, t, r, e) {
      r.push({
        op: "replace",
        path: [],
        value: t === H ? void 0 : t
      }), e.push({
        op: "replace",
        path: [],
        value: n.t
      });
    }
  });
}

function C() {
  function t(n, t) {
    function r() {
      this.constructor = n;
    }

    a(n, t), n.prototype = (r.prototype = t.prototype, new r());
  }

  function e(n) {
    n.o || (n.D = new Map(), n.o = new Map(n.t));
  }

  function o(n) {
    n.o || (n.o = new Set(), n.t.forEach(function (t) {
      if (r(t)) {
        var e = R(n.A.h, t, n);
        n.p.set(t, e), n.o.add(e);
      } else n.o.add(t);
    }));
  }

  function u(t) {
    t.O && n(3, JSON.stringify(p(t)));
  }

  var a = function (n, t) {
    return (a = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (n, t) {
      n.__proto__ = t;
    } || function (n, t) {
      for (var r in t) t.hasOwnProperty(r) && (n[r] = t[r]);
    })(n, t);
  },
      f = function () {
    function n(n, t) {
      return this[Q] = {
        i: 2,
        l: t,
        A: t ? t.A : _(),
        P: !1,
        I: !1,
        o: void 0,
        D: void 0,
        t: n,
        k: this,
        C: !1,
        O: !1
      }, this;
    }

    t(n, Map);
    var o = n.prototype;
    return Object.defineProperty(o, "size", {
      get: function () {
        return p(this[Q]).size;
      }
    }), o.has = function (n) {
      return p(this[Q]).has(n);
    }, o.set = function (n, t) {
      var r = this[Q];
      return u(r), p(r).has(n) && p(r).get(n) === t || (e(r), k(r), r.D.set(n, !0), r.o.set(n, t), r.D.set(n, !0)), this;
    }, o.delete = function (n) {
      if (!this.has(n)) return !1;
      var t = this[Q];
      return u(t), e(t), k(t), t.D.set(n, !1), t.o.delete(n), !0;
    }, o.clear = function () {
      var n = this[Q];
      u(n), p(n).size && (e(n), k(n), n.D = new Map(), i(n.t, function (t) {
        n.D.set(t, !1);
      }), n.o.clear());
    }, o.forEach = function (n, t) {
      var r = this;
      p(this[Q]).forEach(function (e, i) {
        n.call(t, r.get(i), i, r);
      });
    }, o.get = function (n) {
      var t = this[Q];
      u(t);
      var i = p(t).get(n);
      if (t.I || !r(i)) return i;
      if (i !== t.t.get(n)) return i;
      var o = R(t.A.h, i, t);
      return e(t), t.o.set(n, o), o;
    }, o.keys = function () {
      return p(this[Q]).keys();
    }, o.values = function () {
      var n,
          t = this,
          r = this.keys();
      return (n = {})[V] = function () {
        return t.values();
      }, n.next = function () {
        var n = r.next();
        return n.done ? n : {
          done: !1,
          value: t.get(n.value)
        };
      }, n;
    }, o.entries = function () {
      var n,
          t = this,
          r = this.keys();
      return (n = {})[V] = function () {
        return t.entries();
      }, n.next = function () {
        var n = r.next();
        if (n.done) return n;
        var e = t.get(n.value);
        return {
          done: !1,
          value: [n.value, e]
        };
      }, n;
    }, o[V] = function () {
      return this.entries();
    }, n;
  }(),
      c = function () {
    function n(n, t) {
      return this[Q] = {
        i: 3,
        l: t,
        A: t ? t.A : _(),
        P: !1,
        I: !1,
        o: void 0,
        t: n,
        k: this,
        p: new Map(),
        O: !1,
        C: !1
      }, this;
    }

    t(n, Set);
    var r = n.prototype;
    return Object.defineProperty(r, "size", {
      get: function () {
        return p(this[Q]).size;
      }
    }), r.has = function (n) {
      var t = this[Q];
      return u(t), t.o ? !!t.o.has(n) || !(!t.p.has(n) || !t.o.has(t.p.get(n))) : t.t.has(n);
    }, r.add = function (n) {
      var t = this[Q];
      return u(t), this.has(n) || (o(t), k(t), t.o.add(n)), this;
    }, r.delete = function (n) {
      if (!this.has(n)) return !1;
      var t = this[Q];
      return u(t), o(t), k(t), t.o.delete(n) || !!t.p.has(n) && t.o.delete(t.p.get(n));
    }, r.clear = function () {
      var n = this[Q];
      u(n), p(n).size && (o(n), k(n), n.o.clear());
    }, r.values = function () {
      var n = this[Q];
      return u(n), o(n), n.o.values();
    }, r.entries = function () {
      var n = this[Q];
      return u(n), o(n), n.o.entries();
    }, r.keys = function () {
      return this.values();
    }, r[V] = function () {
      return this.values();
    }, r.forEach = function (n, t) {
      for (var r = this.values(), e = r.next(); !e.done;) n.call(t, e.value, e.value, this), e = r.next();
    }, n;
  }();

  m("MapSet", {
    N: function (n, t) {
      return new f(n, t);
    },
    T: function (n, t) {
      return new c(n, t);
    }
  });
}

function J() {
  N(), C(), T();
}

function K(n) {
  return n;
}

function $(n) {
  return n;
}

var G,
    U,
    W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
    X = "undefined" != typeof Map,
    q = "undefined" != typeof Set,
    B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect,
    H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = !0, G),
    L = W ? Symbol.for("immer-draftable") : "__$immer_draftable",
    Q = W ? Symbol.for("immer-state") : "__$immer_state",
    V = "undefined" != typeof Symbol && Symbol.iterator || "@@iterator",
    Y = {
  0: "Illegal state",
  1: "Immer drafts cannot have computed properties",
  2: "This object has been frozen and should not be mutated",
  3: function (n) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n;
  },
  4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  5: "Immer forbids circular references",
  6: "The first or second argument to `produce` must be a function",
  7: "The third argument to `produce` must be a function or undefined",
  8: "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  9: "First argument to `finishDraft` must be a draft returned by `createDraft`",
  10: "The given draft is already finalized",
  11: "Object.defineProperty() cannot be used on an Immer draft",
  12: "Object.setPrototypeOf() cannot be used on an Immer draft",
  13: "Immer only supports deleting array indices",
  14: "Immer only supports setting array indices and the 'length' property",
  15: function (n) {
    return "Cannot apply patch, path doesn't resolve: " + n;
  },
  16: 'Sets cannot have "replace" patches.',
  17: function (n) {
    return "Unsupported patch operation: " + n;
  },
  18: function (n) {
    return "The plugin for '" + n + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n + "()` when initializing your application.";
  },
  20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",
  21: function (n) {
    return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n + "'";
  },
  22: function (n) {
    return "'current' expects a draft, got: " + n;
  },
  23: function (n) {
    return "'original' expects a draft, got: " + n;
  },
  24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
},
    Z = "" + Object.prototype.constructor,
    nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function (n) {
  return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n));
} : Object.getOwnPropertyNames,
    tn = Object.getOwnPropertyDescriptors || function (n) {
  var t = {};
  return nn(n).forEach(function (r) {
    t[r] = Object.getOwnPropertyDescriptor(n, r);
  }), t;
},
    rn = {},
    en = {
  get: function (n, t) {
    if (t === Q) return n;
    var e = p(n);
    if (!u(e, t)) return function (n, t, r) {
      var e,
          i = I(t, r);
      return i ? "value" in i ? i.value : null === (e = i.get) || void 0 === e ? void 0 : e.call(n.k) : void 0;
    }(n, e, t);
    var i = e[t];
    return n.I || !r(i) ? i : i === z(n.t, t) ? (E(n), n.o[t] = R(n.A.h, i, n)) : i;
  },
  has: function (n, t) {
    return t in p(n);
  },
  ownKeys: function (n) {
    return Reflect.ownKeys(p(n));
  },
  set: function (n, t, r) {
    var e = I(p(n), t);
    if (null == e ? void 0 : e.set) return e.set.call(n.k, r), !0;

    if (!n.P) {
      var i = z(p(n), t),
          o = null == i ? void 0 : i[Q];
      if (o && o.t === r) return n.o[t] = r, n.D[t] = !1, !0;
      if (c(r, i) && (void 0 !== r || u(n.t, t))) return !0;
      E(n), k(n);
    }

    return n.o[t] === r && "number" != typeof r && (void 0 !== r || t in n.o) || (n.o[t] = r, n.D[t] = !0, !0);
  },
  deleteProperty: function (n, t) {
    return void 0 !== z(n.t, t) || t in n.t ? (n.D[t] = !1, E(n), k(n)) : delete n.D[t], n.o && delete n.o[t], !0;
  },
  getOwnPropertyDescriptor: function (n, t) {
    var r = p(n),
        e = Reflect.getOwnPropertyDescriptor(r, t);
    return e ? {
      writable: !0,
      configurable: 1 !== n.i || "length" !== t,
      enumerable: e.enumerable,
      value: r[t]
    } : e;
  },
  defineProperty: function () {
    n(11);
  },
  getPrototypeOf: function (n) {
    return Object.getPrototypeOf(n.t);
  },
  setPrototypeOf: function () {
    n(12);
  }
},
    on = {};

exports.immerable = L;
exports.nothing = H;
i(en, function (n, t) {
  on[n] = function () {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
}), on.deleteProperty = function (t, r) {
  return "production" !== "development" && isNaN(parseInt(r)) && n(13), en.deleteProperty.call(this, t[0], r);
}, on.set = function (t, r, e) {
  return "production" !== "development" && "length" !== r && isNaN(parseInt(r)) && n(14), en.set.call(this, t[0], r, e, t[0]);
};

var un = function () {
  function e(t) {
    var e = this;
    this.g = B, this.F = !0, this.produce = function (t, i, o) {
      if ("function" == typeof t && "function" != typeof i) {
        var u = i;
        i = t;
        var a = e;
        return function (n) {
          var t = this;
          void 0 === n && (n = u);

          for (var r = arguments.length, e = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) e[o - 1] = arguments[o];

          return a.produce(n, function (n) {
            var r;
            return (r = i).call.apply(r, [t, n].concat(e));
          });
        };
      }

      var f;

      if ("function" != typeof i && n(6), void 0 !== o && "function" != typeof o && n(7), r(t)) {
        var c = w(e),
            s = R(e, t, void 0),
            v = !0;

        try {
          f = i(s), v = !1;
        } finally {
          v ? O(c) : g(c);
        }

        return "undefined" != typeof Promise && f instanceof Promise ? f.then(function (n) {
          return j(c, o), P(n, c);
        }, function (n) {
          throw O(c), n;
        }) : (j(c, o), P(f, c));
      }

      if (!t || "object" != typeof t) {
        if ((f = i(t)) === H) return;
        return void 0 === f && (f = t), e.F && d(f, !0), f;
      }

      n(21, t);
    }, this.produceWithPatches = function (n, t) {
      return "function" == typeof n ? function (t) {
        for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];

        return e.produceWithPatches(t, function (t) {
          return n.apply(void 0, [t].concat(i));
        });
      } : [e.produce(n, t, function (n, t) {
        r = n, i = t;
      }), r, i];
      var r, i;
    }, "boolean" == typeof (null == t ? void 0 : t.useProxies) && this.setUseProxies(t.useProxies), "boolean" == typeof (null == t ? void 0 : t.autoFreeze) && this.setAutoFreeze(t.autoFreeze);
  }

  var i = e.prototype;
  return i.createDraft = function (e) {
    r(e) || n(8), t(e) && (e = D(e));
    var i = w(this),
        o = R(this, e, void 0);
    return o[Q].C = !0, g(i), o;
  }, i.finishDraft = function (t, r) {
    var e = t && t[Q];
    "production" !== "development" && (e && e.C || n(9), e.I && n(10));
    var i = e.A;
    return j(i, r), P(void 0, i);
  }, i.setAutoFreeze = function (n) {
    this.F = n;
  }, i.setUseProxies = function (t) {
    t && !B && n(20), this.g = t;
  }, i.applyPatches = function (n, r) {
    var e;

    for (e = r.length - 1; e >= 0; e--) {
      var i = r[e];

      if (0 === i.path.length && "replace" === i.op) {
        n = i.value;
        break;
      }
    }

    var o = b("Patches").$;
    return t(n) ? o(n, r) : this.produce(n, function (n) {
      return o(n, r.slice(e + 1));
    });
  }, e;
}(),
    an = new un(),
    fn = an.produce,
    cn = an.produceWithPatches.bind(an),
    sn = an.setAutoFreeze.bind(an),
    vn = an.setUseProxies.bind(an),
    pn = an.applyPatches.bind(an),
    ln = an.createDraft.bind(an),
    dn = an.finishDraft.bind(an);

exports.finishDraft = dn;
exports.createDraft = ln;
exports.applyPatches = pn;
exports.setUseProxies = vn;
exports.setAutoFreeze = sn;
exports.produceWithPatches = cn;
exports.produce = fn;
exports.Immer = un;
var _default = fn;
exports.default = _default;
},{}],"node_modules/@babel/runtime/helpers/esm/defineProperty.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _defineProperty;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
},{}],"node_modules/@babel/runtime/helpers/esm/objectSpread2.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _objectSpread2;

var _defineProperty = _interopRequireDefault(require("./defineProperty.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        (0, _defineProperty.default)(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
},{"./defineProperty.js":"node_modules/@babel/runtime/helpers/esm/defineProperty.js"}],"node_modules/redux/es/redux.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.applyMiddleware = applyMiddleware;
exports.bindActionCreators = bindActionCreators;
exports.combineReducers = combineReducers;
exports.compose = compose;
exports.createStore = createStore;
exports.__DO_NOT_USE__ActionTypes = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
} // Inlined version of the `symbol-observable` polyfill


var $$observable = function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
}();
/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */


var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */

exports.__DO_NOT_USE__ActionTypes = ActionTypes;

function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
} // Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of


function miniKindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }

  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);

  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if ("development" !== 'production') {
    typeOfVal = miniKindOf(val);
  }

  return typeOfVal;
}
/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */


function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error("development" === "production" ? formatProdErrorMessage(0) : 'It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error("development" === "production" ? formatProdErrorMessage(1) : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error("development" === "production" ? formatProdErrorMessage(2) : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error("development" === "production" ? formatProdErrorMessage(3) : 'You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error("development" === "production" ? formatProdErrorMessage(4) : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
    }

    if (isDispatching) {
      throw new Error("development" === "production" ? formatProdErrorMessage(5) : 'You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error("development" === "production" ? formatProdErrorMessage(6) : 'You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing ???what changed???. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error("development" === "production" ? formatProdErrorMessage(7) : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    }

    if (typeof action.type === 'undefined') {
      throw new Error("development" === "production" ? formatProdErrorMessage(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }

    if (isDispatching) {
      throw new Error("development" === "production" ? formatProdErrorMessage(9) : 'Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error("development" === "production" ? formatProdErrorMessage(10) : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error("development" === "production" ? formatProdErrorMessage(11) : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */


function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + kindOf(inputState) + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("development" === "production" ? formatProdErrorMessage(12) : "The slice reducer for key \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("development" === "production" ? formatProdErrorMessage(13) : "The slice reducer for key \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle '" + ActionTypes.INIT + "' or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if ("development" !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if ("development" !== 'production') {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if ("development" !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var actionType = action && action.type;
        throw new Error("development" === "production" ? formatProdErrorMessage(14) : "When called with an action of type " + (actionType ? "\"" + String(actionType) + "\"" : '(unknown type)') + ", the slice reducer for key \"" + _key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.");
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("development" === "production" ? formatProdErrorMessage(16) : "bindActionCreators expected an object or a function, but instead received: '" + kindOf(actionCreators) + "'. " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */


function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}
/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */


function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error("development" === "production" ? formatProdErrorMessage(15) : 'Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return (0, _objectSpread2.default)((0, _objectSpread2.default)({}, store), {}, {
        dispatch: _dispatch
      });
    };
  };
}
/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */


function isCrushed() {}

if ("development" !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}
},{"@babel/runtime/helpers/esm/objectSpread2":"node_modules/@babel/runtime/helpers/esm/objectSpread2.js"}],"node_modules/reselect/es/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultMemoize = defaultMemoize;
exports.createSelectorCreator = createSelectorCreator;
exports.createStructuredSelector = createStructuredSelector;
exports.createSelector = void 0;

function defaultEqualityCheck(a, b) {
  return a === b;
}

function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
  if (prev === null || next === null || prev.length !== next.length) {
    return false;
  } // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.


  var length = prev.length;

  for (var i = 0; i < length; i++) {
    if (!equalityCheck(prev[i], next[i])) {
      return false;
    }
  }

  return true;
}

function defaultMemoize(func) {
  var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;
  var lastArgs = null;
  var lastResult = null; // we reference arguments instead of spreading them for performance reasons

  return function () {
    if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
      // apply arguments instead of spreading for performance.
      lastResult = func.apply(null, arguments);
    }

    lastArgs = arguments;
    return lastResult;
  };
}

function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;

  if (!dependencies.every(function (dep) {
    return typeof dep === 'function';
  })) {
    var dependencyTypes = dependencies.map(function (dep) {
      return typeof dep;
    }).join(', ');
    throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
  }

  return dependencies;
}

function createSelectorCreator(memoize) {
  for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptions[_key - 1] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }

    var recomputations = 0;
    var resultFunc = funcs.pop();
    var dependencies = getDependencies(funcs);
    var memoizedResultFunc = memoize.apply(undefined, [function () {
      recomputations++; // apply arguments instead of spreading for performance.

      return resultFunc.apply(null, arguments);
    }].concat(memoizeOptions)); // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.

    var selector = memoize(function () {
      var params = [];
      var length = dependencies.length;

      for (var i = 0; i < length; i++) {
        // apply arguments instead of spreading and mutate a local list of params for performance.
        params.push(dependencies[i].apply(null, arguments));
      } // apply arguments instead of spreading for performance.


      return memoizedResultFunc.apply(null, params);
    });
    selector.resultFunc = resultFunc;
    selector.dependencies = dependencies;

    selector.recomputations = function () {
      return recomputations;
    };

    selector.resetRecomputations = function () {
      return recomputations = 0;
    };

    return selector;
  };
}

var createSelector = createSelectorCreator(defaultMemoize);
exports.createSelector = createSelector;

function createStructuredSelector(selectors) {
  var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;

  if (typeof selectors !== 'object') {
    throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + typeof selectors));
  }

  var objectKeys = Object.keys(selectors);
  return selectorCreator(objectKeys.map(function (key) {
    return selectors[key];
  }), function () {
    for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      values[_key3] = arguments[_key3];
    }

    return values.reduce(function (composition, value, index) {
      composition[objectKeys[index]] = value;
      return composition;
    }, {});
  });
}
},{}],"node_modules/redux-thunk/es/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
var _default = thunk;
exports.default = _default;
},{}],"node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  MiddlewareArray: true,
  configureStore: true,
  createAction: true,
  createAsyncThunk: true,
  createDraftSafeSelector: true,
  createEntityAdapter: true,
  createImmutableStateInvariantMiddleware: true,
  createReducer: true,
  createSerializableStateInvariantMiddleware: true,
  createSlice: true,
  findNonSerializableValue: true,
  getDefaultMiddleware: true,
  getType: true,
  isAllOf: true,
  isAnyOf: true,
  isAsyncThunkAction: true,
  isFulfilled: true,
  isImmutableDefault: true,
  isPending: true,
  isPlain: true,
  isPlainObject: true,
  isRejected: true,
  isRejectedWithValue: true,
  miniSerializeError: true,
  nanoid: true,
  unwrapResult: true,
  createNextState: true,
  current: true,
  freeze: true,
  original: true,
  isDraft: true,
  createSelector: true
};
exports.configureStore = configureStore;
exports.createAction = createAction;
exports.createAsyncThunk = createAsyncThunk;
exports.createEntityAdapter = createEntityAdapter;
exports.createImmutableStateInvariantMiddleware = createImmutableStateInvariantMiddleware;
exports.createReducer = createReducer;
exports.createSerializableStateInvariantMiddleware = createSerializableStateInvariantMiddleware;
exports.createSlice = createSlice;
exports.findNonSerializableValue = findNonSerializableValue;
exports.getDefaultMiddleware = getDefaultMiddleware;
exports.getType = getType;
exports.isAllOf = isAllOf;
exports.isAnyOf = isAnyOf;
exports.isAsyncThunkAction = isAsyncThunkAction;
exports.isFulfilled = isFulfilled;
exports.isImmutableDefault = isImmutableDefault;
exports.isPending = isPending;
exports.isPlain = isPlain;
exports.isPlainObject = isPlainObject;
exports.isRejected = isRejected;
exports.isRejectedWithValue = isRejectedWithValue;
exports.unwrapResult = unwrapResult;
Object.defineProperty(exports, "createNextState", {
  enumerable: true,
  get: function () {
    return _immer.default;
  }
});
Object.defineProperty(exports, "current", {
  enumerable: true,
  get: function () {
    return _immer.current;
  }
});
Object.defineProperty(exports, "freeze", {
  enumerable: true,
  get: function () {
    return _immer.freeze;
  }
});
Object.defineProperty(exports, "original", {
  enumerable: true,
  get: function () {
    return _immer.original;
  }
});
Object.defineProperty(exports, "isDraft", {
  enumerable: true,
  get: function () {
    return _immer.isDraft;
  }
});
Object.defineProperty(exports, "createSelector", {
  enumerable: true,
  get: function () {
    return _reselect.createSelector;
  }
});
exports.nanoid = exports.miniSerializeError = exports.createDraftSafeSelector = exports.MiddlewareArray = void 0;

var _immer = _interopRequireWildcard(require("immer"));

var _redux = require("redux");

Object.keys(_redux).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _redux[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _redux[key];
    }
  });
});

var _reselect = require("reselect");

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var __extends = void 0 && (void 0).__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __generator = void 0 && (void 0).__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __spreadArray = void 0 && (void 0).__spreadArray || function (to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];

  return to;
};

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;

var __defNormalProp = function (obj, key, value) {
  return key in obj ? __defProp(obj, key, {
    enumerable: true,
    configurable: true,
    writable: true,
    value: value
  }) : obj[key] = value;
};

var __spreadValues = function (a, b) {
  for (var prop in b || (b = {})) if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);

  if (__getOwnPropSymbols) for (var _i = 0, _b = __getOwnPropSymbols(b); _i < _b.length; _i++) {
    var prop = _b[_i];
    if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
  }
  return a;
};

var __spreadProps = function (a, b) {
  return __defProps(a, __getOwnPropDescs(b));
};

var __async = function (__this, __arguments, generator) {
  return new Promise(function (resolve, reject) {
    var fulfilled = function (value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };

    var rejected = function (value) {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };

    var step = function (x) {
      return x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    };

    step((generator = generator.apply(__this, __arguments)).next());
  });
}; // src/index.ts


var createDraftSafeSelector = function () {
  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var selector = _reselect.createSelector.apply(void 0, args);

  var wrappedSelector = function (value) {
    var rest = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      rest[_i - 1] = arguments[_i];
    }

    return selector.apply(void 0, __spreadArray([(0, _immer.isDraft)(value) ? (0, _immer.current)(value) : value], rest));
  };

  return wrappedSelector;
}; // src/configureStore.ts


exports.createDraftSafeSelector = createDraftSafeSelector;
var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function () {
  if (arguments.length === 0) return void 0;
  if (typeof arguments[0] === "object") return _redux.compose;
  return _redux.compose.apply(null, arguments);
};
var devToolsEnhancer = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : function () {
  return function (noop) {
    return noop;
  };
}; // src/isPlainObject.ts

function isPlainObject(value) {
  if (typeof value !== "object" || value === null) return false;
  var proto = value;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(value) === proto;
} // src/getDefaultMiddleware.ts


// src/utils.ts
function getTimeMeasureUtils(maxDelay, fnName) {
  var elapsed = 0;
  return {
    measureTime: function (fn) {
      var started = Date.now();

      try {
        return fn();
      } finally {
        var finished = Date.now();
        elapsed += finished - started;
      }
    },
    warnIfExceeded: function () {
      if (elapsed > maxDelay) {
        console.warn(fnName + " took " + elapsed + "ms, which is more than the warning threshold of " + maxDelay + "ms. \nIf your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.\nIt is disabled in production builds, so you don't need to worry about that.");
      }
    }
  };
}

var MiddlewareArray =
/** @class */
function (_super) {
  __extends(MiddlewareArray, _super);

  function MiddlewareArray() {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var _this = _super.apply(this, args) || this;

    Object.setPrototypeOf(_this, MiddlewareArray.prototype);
    return _this;
  }

  Object.defineProperty(MiddlewareArray, Symbol.species, {
    get: function () {
      return MiddlewareArray;
    },
    enumerable: false,
    configurable: true
  });

  MiddlewareArray.prototype.concat = function () {
    var arr = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      arr[_i] = arguments[_i];
    }

    return _super.prototype.concat.apply(this, arr);
  };

  MiddlewareArray.prototype.prepend = function () {
    var arr = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      arr[_i] = arguments[_i];
    }

    if (arr.length === 1 && Array.isArray(arr[0])) {
      return new (MiddlewareArray.bind.apply(MiddlewareArray, __spreadArray([void 0], arr[0].concat(this))))();
    }

    return new (MiddlewareArray.bind.apply(MiddlewareArray, __spreadArray([void 0], arr.concat(this))))();
  };

  return MiddlewareArray;
}(Array); // src/immutableStateInvariantMiddleware.ts


exports.MiddlewareArray = MiddlewareArray;
var isProduction = "development" === "production";
var prefix = "Invariant failed";

function invariant(condition, message) {
  if (condition) {
    return;
  }

  if (isProduction) {
    throw new Error(prefix);
  }

  throw new Error(prefix + ": " + (message || ""));
}

function stringify(obj, serializer, indent, decycler) {
  return JSON.stringify(obj, getSerialize(serializer, decycler), indent);
}

function getSerialize(serializer, decycler) {
  var stack = [],
      keys = [];
  if (!decycler) decycler = function (_, value) {
    if (stack[0] === value) return "[Circular ~]";
    return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
  };
  return function (key, value) {
    if (stack.length > 0) {
      var thisPos = stack.indexOf(this);
      ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
      ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
      if (~stack.indexOf(value)) value = decycler.call(this, key, value);
    } else stack.push(value);

    return serializer == null ? value : serializer.call(this, key, value);
  };
}

function isImmutableDefault(value) {
  return typeof value !== "object" || value === null || typeof value === "undefined" || Object.isFrozen(value);
}

function trackForMutations(isImmutable, ignorePaths, obj) {
  var trackedProperties = trackProperties(isImmutable, ignorePaths, obj);
  return {
    detectMutations: function () {
      return detectMutations(isImmutable, ignorePaths, trackedProperties, obj);
    }
  };
}

function trackProperties(isImmutable, ignorePaths, obj, path) {
  if (ignorePaths === void 0) {
    ignorePaths = [];
  }

  if (path === void 0) {
    path = "";
  }

  var tracked = {
    value: obj
  };

  if (!isImmutable(obj)) {
    tracked.children = {};

    for (var key in obj) {
      var childPath = path ? path + "." + key : key;

      if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
        continue;
      }

      tracked.children[key] = trackProperties(isImmutable, ignorePaths, obj[key], childPath);
    }
  }

  return tracked;
}

function detectMutations(isImmutable, ignorePaths, trackedProperty, obj, sameParentRef, path) {
  if (ignorePaths === void 0) {
    ignorePaths = [];
  }

  if (sameParentRef === void 0) {
    sameParentRef = false;
  }

  if (path === void 0) {
    path = "";
  }

  var prevObj = trackedProperty ? trackedProperty.value : void 0;
  var sameRef = prevObj === obj;

  if (sameParentRef && !sameRef && !Number.isNaN(obj)) {
    return {
      wasMutated: true,
      path: path
    };
  }

  if (isImmutable(prevObj) || isImmutable(obj)) {
    return {
      wasMutated: false
    };
  }

  var keysToDetect = {};

  for (var key in trackedProperty.children) {
    keysToDetect[key] = true;
  }

  for (var key in obj) {
    keysToDetect[key] = true;
  }

  for (var key in keysToDetect) {
    var childPath = path ? path + "." + key : key;

    if (ignorePaths.length && ignorePaths.indexOf(childPath) !== -1) {
      continue;
    }

    var result = detectMutations(isImmutable, ignorePaths, trackedProperty.children[key], obj[key], sameRef, childPath);

    if (result.wasMutated) {
      return result;
    }
  }

  return {
    wasMutated: false
  };
}

function createImmutableStateInvariantMiddleware(options) {
  if (options === void 0) {
    options = {};
  }

  if ("development" === "production") {
    return function () {
      return function (next) {
        return function (action) {
          return next(action);
        };
      };
    };
  }

  var _b = options.isImmutable,
      isImmutable = _b === void 0 ? isImmutableDefault : _b,
      ignoredPaths = options.ignoredPaths,
      _c = options.warnAfter,
      warnAfter = _c === void 0 ? 32 : _c,
      ignore = options.ignore;
  ignoredPaths = ignoredPaths || ignore;
  var track = trackForMutations.bind(null, isImmutable, ignoredPaths);
  return function (_b) {
    var getState = _b.getState;
    var state = getState();
    var tracker = track(state);
    var result;
    return function (next) {
      return function (action) {
        var measureUtils = getTimeMeasureUtils(warnAfter, "ImmutableStateInvariantMiddleware");
        measureUtils.measureTime(function () {
          state = getState();
          result = tracker.detectMutations();
          tracker = track(state);
          invariant(!result.wasMutated, "A state mutation was detected between dispatches, in the path '" + (result.path || "") + "'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
        });
        var dispatchedAction = next(action);
        measureUtils.measureTime(function () {
          state = getState();
          result = tracker.detectMutations();
          tracker = track(state);
          result.wasMutated && invariant(!result.wasMutated, "A state mutation was detected inside a dispatch, in the path: " + (result.path || "") + ". Take a look at the reducer(s) handling the action " + stringify(action) + ". (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)");
        });
        measureUtils.warnIfExceeded();
        return dispatchedAction;
      };
    };
  };
} // src/serializableStateInvariantMiddleware.ts


function isPlain(val) {
  var type = typeof val;
  return type === "undefined" || val === null || type === "string" || type === "boolean" || type === "number" || Array.isArray(val) || isPlainObject(val);
}

function findNonSerializableValue(value, path, isSerializable, getEntries, ignoredPaths) {
  if (path === void 0) {
    path = "";
  }

  if (isSerializable === void 0) {
    isSerializable = isPlain;
  }

  if (ignoredPaths === void 0) {
    ignoredPaths = [];
  }

  var foundNestedSerializable;

  if (!isSerializable(value)) {
    return {
      keyPath: path || "<root>",
      value: value
    };
  }

  if (typeof value !== "object" || value === null) {
    return false;
  }

  var entries = getEntries != null ? getEntries(value) : Object.entries(value);
  var hasIgnoredPaths = ignoredPaths.length > 0;

  for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
    var _b = entries_1[_i],
        key = _b[0],
        nestedValue = _b[1];
    var nestedPath = path ? path + "." + key : key;

    if (hasIgnoredPaths && ignoredPaths.indexOf(nestedPath) >= 0) {
      continue;
    }

    if (!isSerializable(nestedValue)) {
      return {
        keyPath: nestedPath,
        value: nestedValue
      };
    }

    if (typeof nestedValue === "object") {
      foundNestedSerializable = findNonSerializableValue(nestedValue, nestedPath, isSerializable, getEntries, ignoredPaths);

      if (foundNestedSerializable) {
        return foundNestedSerializable;
      }
    }
  }

  return false;
}

function createSerializableStateInvariantMiddleware(options) {
  if (options === void 0) {
    options = {};
  }

  if ("development" === "production") {
    return function () {
      return function (next) {
        return function (action) {
          return next(action);
        };
      };
    };
  }

  var _b = options.isSerializable,
      isSerializable = _b === void 0 ? isPlain : _b,
      getEntries = options.getEntries,
      _c = options.ignoredActions,
      ignoredActions = _c === void 0 ? [] : _c,
      _d = options.ignoredActionPaths,
      ignoredActionPaths = _d === void 0 ? ["meta.arg", "meta.baseQueryMeta"] : _d,
      _e = options.ignoredPaths,
      ignoredPaths = _e === void 0 ? [] : _e,
      _f = options.warnAfter,
      warnAfter = _f === void 0 ? 32 : _f,
      _g = options.ignoreState,
      ignoreState = _g === void 0 ? false : _g;
  return function (storeAPI) {
    return function (next) {
      return function (action) {
        if (ignoredActions.length && ignoredActions.indexOf(action.type) !== -1) {
          return next(action);
        }

        var measureUtils = getTimeMeasureUtils(warnAfter, "SerializableStateInvariantMiddleware");
        measureUtils.measureTime(function () {
          var foundActionNonSerializableValue = findNonSerializableValue(action, "", isSerializable, getEntries, ignoredActionPaths);

          if (foundActionNonSerializableValue) {
            var keyPath = foundActionNonSerializableValue.keyPath,
                value = foundActionNonSerializableValue.value;
            console.error("A non-serializable value was detected in an action, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the logic that dispatched this action: ", action, "\n(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)", "\n(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)");
          }
        });
        var result = next(action);

        if (!ignoreState) {
          measureUtils.measureTime(function () {
            var state = storeAPI.getState();
            var foundStateNonSerializableValue = findNonSerializableValue(state, "", isSerializable, getEntries, ignoredPaths);

            if (foundStateNonSerializableValue) {
              var keyPath = foundStateNonSerializableValue.keyPath,
                  value = foundStateNonSerializableValue.value;
              console.error("A non-serializable value was detected in the state, in the path: `" + keyPath + "`. Value:", value, "\nTake a look at the reducer(s) handling this action type: " + action.type + ".\n(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)");
            }
          });
          measureUtils.warnIfExceeded();
        }

        return result;
      };
    };
  };
} // src/getDefaultMiddleware.ts


function isBoolean(x) {
  return typeof x === "boolean";
}

function curryGetDefaultMiddleware() {
  return function curriedGetDefaultMiddleware(options) {
    return getDefaultMiddleware(options);
  };
}

function getDefaultMiddleware(options) {
  if (options === void 0) {
    options = {};
  }

  var _b = options.thunk,
      thunk = _b === void 0 ? true : _b,
      _c = options.immutableCheck,
      immutableCheck = _c === void 0 ? true : _c,
      _d = options.serializableCheck,
      serializableCheck = _d === void 0 ? true : _d;
  var middlewareArray = new MiddlewareArray();

  if (thunk) {
    if (isBoolean(thunk)) {
      middlewareArray.push(_reduxThunk.default);
    } else {
      middlewareArray.push(_reduxThunk.default.withExtraArgument(thunk.extraArgument));
    }
  }

  if ("development" !== "production") {
    if (immutableCheck) {
      var immutableOptions = {};

      if (!isBoolean(immutableCheck)) {
        immutableOptions = immutableCheck;
      }

      middlewareArray.unshift(createImmutableStateInvariantMiddleware(immutableOptions));
    }

    if (serializableCheck) {
      var serializableOptions = {};

      if (!isBoolean(serializableCheck)) {
        serializableOptions = serializableCheck;
      }

      middlewareArray.push(createSerializableStateInvariantMiddleware(serializableOptions));
    }
  }

  return middlewareArray;
} // src/configureStore.ts


var IS_PRODUCTION = "development" === "production";

function configureStore(options) {
  var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();

  var _b = options || {},
      _c = _b.reducer,
      reducer = _c === void 0 ? void 0 : _c,
      _d = _b.middleware,
      middleware = _d === void 0 ? curriedGetDefaultMiddleware() : _d,
      _e = _b.devTools,
      devTools = _e === void 0 ? true : _e,
      _f = _b.preloadedState,
      preloadedState = _f === void 0 ? void 0 : _f,
      _g = _b.enhancers,
      enhancers = _g === void 0 ? void 0 : _g;

  var rootReducer;

  if (typeof reducer === "function") {
    rootReducer = reducer;
  } else if (isPlainObject(reducer)) {
    rootReducer = (0, _redux.combineReducers)(reducer);
  } else {
    throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
  }

  var finalMiddleware = middleware;

  if (typeof finalMiddleware === "function") {
    finalMiddleware = finalMiddleware(curriedGetDefaultMiddleware);

    if (!IS_PRODUCTION && !Array.isArray(finalMiddleware)) {
      throw new Error("when using a middleware builder function, an array of middleware must be returned");
    }
  }

  if (!IS_PRODUCTION && finalMiddleware.some(function (item) {
    return typeof item !== "function";
  })) {
    throw new Error("each middleware provided to configureStore must be a function");
  }

  var middlewareEnhancer = _redux.applyMiddleware.apply(void 0, finalMiddleware);

  var finalCompose = _redux.compose;

  if (devTools) {
    finalCompose = composeWithDevTools(__spreadValues({
      trace: !IS_PRODUCTION
    }, typeof devTools === "object" && devTools));
  }

  var storeEnhancers = [middlewareEnhancer];

  if (Array.isArray(enhancers)) {
    storeEnhancers = __spreadArray([middlewareEnhancer], enhancers);
  } else if (typeof enhancers === "function") {
    storeEnhancers = enhancers(storeEnhancers);
  }

  var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
  return (0, _redux.createStore)(rootReducer, preloadedState, composedEnhancer);
} // src/createAction.ts


function createAction(type, prepareAction) {
  function actionCreator() {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (prepareAction) {
      var prepared = prepareAction.apply(void 0, args);

      if (!prepared) {
        throw new Error("prepareAction did not return an object");
      }

      return __spreadValues(__spreadValues({
        type: type,
        payload: prepared.payload
      }, "meta" in prepared && {
        meta: prepared.meta
      }), "error" in prepared && {
        error: prepared.error
      });
    }

    return {
      type: type,
      payload: args[0]
    };
  }

  actionCreator.toString = function () {
    return "" + type;
  };

  actionCreator.type = type;

  actionCreator.match = function (action) {
    return action.type === type;
  };

  return actionCreator;
}

function isFSA(action) {
  return isPlainObject(action) && typeof action.type === "string" && Object.keys(action).every(isValidKey);
}

function isValidKey(key) {
  return ["type", "payload", "error", "meta"].indexOf(key) > -1;
}

function getType(actionCreator) {
  return "" + actionCreator;
} // src/createReducer.ts


// src/mapBuilders.ts
function executeReducerBuilderCallback(builderCallback) {
  var actionsMap = {};
  var actionMatchers = [];
  var defaultCaseReducer;
  var builder = {
    addCase: function (typeOrActionCreator, reducer) {
      if ("development" !== "production") {
        if (actionMatchers.length > 0) {
          throw new Error("`builder.addCase` should only be called before calling `builder.addMatcher`");
        }

        if (defaultCaseReducer) {
          throw new Error("`builder.addCase` should only be called before calling `builder.addDefaultCase`");
        }
      }

      var type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;

      if (type in actionsMap) {
        throw new Error("addCase cannot be called with two reducers for the same action type");
      }

      actionsMap[type] = reducer;
      return builder;
    },
    addMatcher: function (matcher, reducer) {
      if ("development" !== "production") {
        if (defaultCaseReducer) {
          throw new Error("`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
        }
      }

      actionMatchers.push({
        matcher: matcher,
        reducer: reducer
      });
      return builder;
    },
    addDefaultCase: function (reducer) {
      if ("development" !== "production") {
        if (defaultCaseReducer) {
          throw new Error("`builder.addDefaultCase` can only be called once");
        }
      }

      defaultCaseReducer = reducer;
      return builder;
    }
  };
  builderCallback(builder);
  return [actionsMap, actionMatchers, defaultCaseReducer];
} // src/createReducer.ts


function createReducer(initialState, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
  if (actionMatchers === void 0) {
    actionMatchers = [];
  }

  var _b = typeof mapOrBuilderCallback === "function" ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer],
      actionsMap = _b[0],
      finalActionMatchers = _b[1],
      finalDefaultCaseReducer = _b[2];

  var frozenInitialState = (0, _immer.default)(initialState, function () {});
  return function (state, action) {
    if (state === void 0) {
      state = frozenInitialState;
    }

    var caseReducers = __spreadArray([actionsMap[action.type]], finalActionMatchers.filter(function (_b) {
      var matcher = _b.matcher;
      return matcher(action);
    }).map(function (_b) {
      var reducer = _b.reducer;
      return reducer;
    }));

    if (caseReducers.filter(function (cr) {
      return !!cr;
    }).length === 0) {
      caseReducers = [finalDefaultCaseReducer];
    }

    return caseReducers.reduce(function (previousState, caseReducer) {
      if (caseReducer) {
        if ((0, _immer.isDraft)(previousState)) {
          var draft = previousState;
          var result = caseReducer(draft, action);

          if (typeof result === "undefined") {
            return previousState;
          }

          return result;
        } else if (!(0, _immer.isDraftable)(previousState)) {
          var result = caseReducer(previousState, action);

          if (typeof result === "undefined") {
            if (previousState === null) {
              return previousState;
            }

            throw Error("A case reducer on a non-draftable value must not return undefined");
          }

          return result;
        } else {
          return (0, _immer.default)(previousState, function (draft) {
            return caseReducer(draft, action);
          });
        }
      }

      return previousState;
    }, state);
  };
} // src/createSlice.ts


function getType2(slice, actionKey) {
  return slice + "/" + actionKey;
}

function createSlice(options) {
  var name = options.name,
      initialState = options.initialState;

  if (!name) {
    throw new Error("`name` is a required option for createSlice");
  }

  var reducers = options.reducers || {};

  var _b = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers],
      _c = _b[0],
      extraReducers = _c === void 0 ? {} : _c,
      _d = _b[1],
      actionMatchers = _d === void 0 ? [] : _d,
      _e = _b[2],
      defaultCaseReducer = _e === void 0 ? void 0 : _e;

  var reducerNames = Object.keys(reducers);
  var sliceCaseReducersByName = {};
  var sliceCaseReducersByType = {};
  var actionCreators = {};
  reducerNames.forEach(function (reducerName) {
    var maybeReducerWithPrepare = reducers[reducerName];
    var type = getType2(name, reducerName);
    var caseReducer;
    var prepareCallback;

    if ("reducer" in maybeReducerWithPrepare) {
      caseReducer = maybeReducerWithPrepare.reducer;
      prepareCallback = maybeReducerWithPrepare.prepare;
    } else {
      caseReducer = maybeReducerWithPrepare;
    }

    sliceCaseReducersByName[reducerName] = caseReducer;
    sliceCaseReducersByType[type] = caseReducer;
    actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
  });

  var finalCaseReducers = __spreadValues(__spreadValues({}, extraReducers), sliceCaseReducersByType);

  var reducer = createReducer(initialState, finalCaseReducers, actionMatchers, defaultCaseReducer);
  return {
    name: name,
    reducer: reducer,
    actions: actionCreators,
    caseReducers: sliceCaseReducersByName
  };
} // src/entities/entity_state.ts


function getInitialEntityState() {
  return {
    ids: [],
    entities: {}
  };
}

function createInitialStateFactory() {
  function getInitialState(additionalState) {
    if (additionalState === void 0) {
      additionalState = {};
    }

    return Object.assign(getInitialEntityState(), additionalState);
  }

  return {
    getInitialState: getInitialState
  };
} // src/entities/state_selectors.ts


function createSelectorsFactory() {
  function getSelectors(selectState) {
    var selectIds = function (state) {
      return state.ids;
    };

    var selectEntities = function (state) {
      return state.entities;
    };

    var selectAll = createDraftSafeSelector(selectIds, selectEntities, function (ids, entities) {
      return ids.map(function (id) {
        return entities[id];
      });
    });

    var selectId = function (_, id) {
      return id;
    };

    var selectById = function (entities, id) {
      return entities[id];
    };

    var selectTotal = createDraftSafeSelector(selectIds, function (ids) {
      return ids.length;
    });

    if (!selectState) {
      return {
        selectIds: selectIds,
        selectEntities: selectEntities,
        selectAll: selectAll,
        selectTotal: selectTotal,
        selectById: createDraftSafeSelector(selectEntities, selectId, selectById)
      };
    }

    var selectGlobalizedEntities = createDraftSafeSelector(selectState, selectEntities);
    return {
      selectIds: createDraftSafeSelector(selectState, selectIds),
      selectEntities: selectGlobalizedEntities,
      selectAll: createDraftSafeSelector(selectState, selectAll),
      selectTotal: createDraftSafeSelector(selectState, selectTotal),
      selectById: createDraftSafeSelector(selectGlobalizedEntities, selectId, selectById)
    };
  }

  return {
    getSelectors: getSelectors
  };
} // src/entities/state_adapter.ts


function createSingleArgumentStateOperator(mutator) {
  var operator = createStateOperator(function (_, state) {
    return mutator(state);
  });
  return function operation(state) {
    return operator(state, void 0);
  };
}

function createStateOperator(mutator) {
  return function operation(state, arg) {
    function isPayloadActionArgument(arg2) {
      return isFSA(arg2);
    }

    var runMutator = function (draft) {
      if (isPayloadActionArgument(arg)) {
        mutator(arg.payload, draft);
      } else {
        mutator(arg, draft);
      }
    };

    if ((0, _immer.isDraft)(state)) {
      runMutator(state);
      return state;
    } else {
      return (0, _immer.default)(state, runMutator);
    }
  };
} // src/entities/utils.ts


function selectIdValue(entity, selectId) {
  var key = selectId(entity);

  if ("development" !== "production" && key === void 0) {
    console.warn("The entity passed to the `selectId` implementation returned undefined.", "You should probably provide your own `selectId` implementation.", "The entity that was passed:", entity, "The `selectId` implementation:", selectId.toString());
  }

  return key;
}

function ensureEntitiesArray(entities) {
  if (!Array.isArray(entities)) {
    entities = Object.values(entities);
  }

  return entities;
}

function splitAddedUpdatedEntities(newEntities, selectId, state) {
  newEntities = ensureEntitiesArray(newEntities);
  var added = [];
  var updated = [];

  for (var _i = 0, newEntities_1 = newEntities; _i < newEntities_1.length; _i++) {
    var entity = newEntities_1[_i];
    var id = selectIdValue(entity, selectId);

    if (id in state.entities) {
      updated.push({
        id: id,
        changes: entity
      });
    } else {
      added.push(entity);
    }
  }

  return [added, updated];
} // src/entities/unsorted_state_adapter.ts


function createUnsortedStateAdapter(selectId) {
  function addOneMutably(entity, state) {
    var key = selectIdValue(entity, selectId);

    if (key in state.entities) {
      return;
    }

    state.ids.push(key);
    state.entities[key] = entity;
  }

  function addManyMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);

    for (var _i = 0, newEntities_2 = newEntities; _i < newEntities_2.length; _i++) {
      var entity = newEntities_2[_i];
      addOneMutably(entity, state);
    }
  }

  function setOneMutably(entity, state) {
    var key = selectIdValue(entity, selectId);

    if (!(key in state.entities)) {
      state.ids.push(key);
    }

    state.entities[key] = entity;
  }

  function setManyMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);

    for (var _i = 0, newEntities_3 = newEntities; _i < newEntities_3.length; _i++) {
      var entity = newEntities_3[_i];
      setOneMutably(entity, state);
    }
  }

  function setAllMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);
    state.ids = [];
    state.entities = {};
    addManyMutably(newEntities, state);
  }

  function removeOneMutably(key, state) {
    return removeManyMutably([key], state);
  }

  function removeManyMutably(keys, state) {
    var didMutate = false;
    keys.forEach(function (key) {
      if (key in state.entities) {
        delete state.entities[key];
        didMutate = true;
      }
    });

    if (didMutate) {
      state.ids = state.ids.filter(function (id) {
        return id in state.entities;
      });
    }
  }

  function removeAllMutably(state) {
    Object.assign(state, {
      ids: [],
      entities: {}
    });
  }

  function takeNewKey(keys, update, state) {
    var original2 = state.entities[update.id];
    var updated = Object.assign({}, original2, update.changes);
    var newKey = selectIdValue(updated, selectId);
    var hasNewKey = newKey !== update.id;

    if (hasNewKey) {
      keys[update.id] = newKey;
      delete state.entities[update.id];
    }

    state.entities[newKey] = updated;
    return hasNewKey;
  }

  function updateOneMutably(update, state) {
    return updateManyMutably([update], state);
  }

  function updateManyMutably(updates, state) {
    var newKeys = {};
    var updatesPerEntity = {};
    updates.forEach(function (update) {
      if (update.id in state.entities) {
        updatesPerEntity[update.id] = {
          id: update.id,
          changes: __spreadValues(__spreadValues({}, updatesPerEntity[update.id] ? updatesPerEntity[update.id].changes : null), update.changes)
        };
      }
    });
    updates = Object.values(updatesPerEntity);
    var didMutateEntities = updates.length > 0;

    if (didMutateEntities) {
      var didMutateIds = updates.filter(function (update) {
        return takeNewKey(newKeys, update, state);
      }).length > 0;

      if (didMutateIds) {
        state.ids = state.ids.map(function (id) {
          return newKeys[id] || id;
        });
      }
    }
  }

  function upsertOneMutably(entity, state) {
    return upsertManyMutably([entity], state);
  }

  function upsertManyMutably(newEntities, state) {
    var _b = splitAddedUpdatedEntities(newEntities, selectId, state),
        added = _b[0],
        updated = _b[1];

    updateManyMutably(updated, state);
    addManyMutably(added, state);
  }

  return {
    removeAll: createSingleArgumentStateOperator(removeAllMutably),
    addOne: createStateOperator(addOneMutably),
    addMany: createStateOperator(addManyMutably),
    setOne: createStateOperator(setOneMutably),
    setMany: createStateOperator(setManyMutably),
    setAll: createStateOperator(setAllMutably),
    updateOne: createStateOperator(updateOneMutably),
    updateMany: createStateOperator(updateManyMutably),
    upsertOne: createStateOperator(upsertOneMutably),
    upsertMany: createStateOperator(upsertManyMutably),
    removeOne: createStateOperator(removeOneMutably),
    removeMany: createStateOperator(removeManyMutably)
  };
} // src/entities/sorted_state_adapter.ts


function createSortedStateAdapter(selectId, sort) {
  var _b = createUnsortedStateAdapter(selectId),
      removeOne = _b.removeOne,
      removeMany = _b.removeMany,
      removeAll = _b.removeAll;

  function addOneMutably(entity, state) {
    return addManyMutably([entity], state);
  }

  function addManyMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);
    var models = newEntities.filter(function (model) {
      return !(selectIdValue(model, selectId) in state.entities);
    });

    if (models.length !== 0) {
      merge(models, state);
    }
  }

  function setOneMutably(entity, state) {
    return setManyMutably([entity], state);
  }

  function setManyMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);

    if (newEntities.length !== 0) {
      merge(newEntities, state);
    }
  }

  function setAllMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);
    state.entities = {};
    state.ids = [];
    addManyMutably(newEntities, state);
  }

  function updateOneMutably(update, state) {
    return updateManyMutably([update], state);
  }

  function takeUpdatedModel(models, update, state) {
    if (!(update.id in state.entities)) {
      return false;
    }

    var original2 = state.entities[update.id];
    var updated = Object.assign({}, original2, update.changes);
    var newKey = selectIdValue(updated, selectId);
    delete state.entities[update.id];
    models.push(updated);
    return newKey !== update.id;
  }

  function updateManyMutably(updates, state) {
    var models = [];
    updates.forEach(function (update) {
      return takeUpdatedModel(models, update, state);
    });

    if (models.length !== 0) {
      merge(models, state);
    }
  }

  function upsertOneMutably(entity, state) {
    return upsertManyMutably([entity], state);
  }

  function upsertManyMutably(newEntities, state) {
    var _b = splitAddedUpdatedEntities(newEntities, selectId, state),
        added = _b[0],
        updated = _b[1];

    updateManyMutably(updated, state);
    addManyMutably(added, state);
  }

  function areArraysEqual(a, b) {
    if (a.length !== b.length) {
      return false;
    }

    for (var i = 0; i < a.length && i < b.length; i++) {
      if (a[i] === b[i]) {
        continue;
      }

      return false;
    }

    return true;
  }

  function merge(models, state) {
    models.forEach(function (model) {
      state.entities[selectId(model)] = model;
    });
    var allEntities = Object.values(state.entities);
    allEntities.sort(sort);
    var newSortedIds = allEntities.map(selectId);
    var ids = state.ids;

    if (!areArraysEqual(ids, newSortedIds)) {
      state.ids = newSortedIds;
    }
  }

  return {
    removeOne: removeOne,
    removeMany: removeMany,
    removeAll: removeAll,
    addOne: createStateOperator(addOneMutably),
    updateOne: createStateOperator(updateOneMutably),
    upsertOne: createStateOperator(upsertOneMutably),
    setOne: createStateOperator(setOneMutably),
    setMany: createStateOperator(setManyMutably),
    setAll: createStateOperator(setAllMutably),
    addMany: createStateOperator(addManyMutably),
    updateMany: createStateOperator(updateManyMutably),
    upsertMany: createStateOperator(upsertManyMutably)
  };
} // src/entities/create_adapter.ts


function createEntityAdapter(options) {
  if (options === void 0) {
    options = {};
  }

  var _b = __spreadValues({
    sortComparer: false,
    selectId: function (instance) {
      return instance.id;
    }
  }, options),
      selectId = _b.selectId,
      sortComparer = _b.sortComparer;

  var stateFactory = createInitialStateFactory();
  var selectorsFactory = createSelectorsFactory();
  var stateAdapter = sortComparer ? createSortedStateAdapter(selectId, sortComparer) : createUnsortedStateAdapter(selectId);
  return __spreadValues(__spreadValues(__spreadValues({
    selectId: selectId,
    sortComparer: sortComparer
  }, stateFactory), selectorsFactory), stateAdapter);
} // src/nanoid.ts


var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";

var nanoid = function (size) {
  if (size === void 0) {
    size = 21;
  }

  var id = "";
  var i = size;

  while (i--) {
    id += urlAlphabet[Math.random() * 64 | 0];
  }

  return id;
}; // src/createAsyncThunk.ts


exports.nanoid = nanoid;
var commonProperties = ["name", "message", "stack", "code"];

var RejectWithValue =
/** @class */
function () {
  function RejectWithValue(payload, meta) {
    this.payload = payload;
    this.meta = meta;
  }

  return RejectWithValue;
}();

var FulfillWithMeta =
/** @class */
function () {
  function FulfillWithMeta(payload, meta) {
    this.payload = payload;
    this.meta = meta;
  }

  return FulfillWithMeta;
}();

var miniSerializeError = function (value) {
  if (typeof value === "object" && value !== null) {
    var simpleError = {};

    for (var _i = 0, commonProperties_1 = commonProperties; _i < commonProperties_1.length; _i++) {
      var property = commonProperties_1[_i];

      if (typeof value[property] === "string") {
        simpleError[property] = value[property];
      }
    }

    return simpleError;
  }

  return {
    message: String(value)
  };
};

exports.miniSerializeError = miniSerializeError;

function createAsyncThunk(typePrefix, payloadCreator, options) {
  var fulfilled = createAction(typePrefix + "/fulfilled", function (payload, requestId, arg, meta) {
    return {
      payload: payload,
      meta: __spreadProps(__spreadValues({}, meta || {}), {
        arg: arg,
        requestId: requestId,
        requestStatus: "fulfilled"
      })
    };
  });
  var pending = createAction(typePrefix + "/pending", function (requestId, arg, meta) {
    return {
      payload: void 0,
      meta: __spreadProps(__spreadValues({}, meta || {}), {
        arg: arg,
        requestId: requestId,
        requestStatus: "pending"
      })
    };
  });
  var rejected = createAction(typePrefix + "/rejected", function (error, requestId, arg, payload, meta) {
    return {
      payload: payload,
      error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
      meta: __spreadProps(__spreadValues({}, meta || {}), {
        arg: arg,
        requestId: requestId,
        rejectedWithValue: !!payload,
        requestStatus: "rejected",
        aborted: (error == null ? void 0 : error.name) === "AbortError",
        condition: (error == null ? void 0 : error.name) === "ConditionError"
      })
    };
  });
  var displayedWarning = false;
  var AC = typeof AbortController !== "undefined" ? AbortController :
  /** @class */
  function () {
    function class_1() {
      this.signal = {
        aborted: false,
        addEventListener: function () {},
        dispatchEvent: function () {
          return false;
        },
        onabort: function () {},
        removeEventListener: function () {}
      };
    }

    class_1.prototype.abort = function () {
      if ("development" !== "production") {
        if (!displayedWarning) {
          displayedWarning = true;
          console.info("This platform does not implement AbortController. \nIf you want to use the AbortController to react to `abort` events, please consider importing a polyfill like 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'.");
        }
      }
    };

    return class_1;
  }();

  function actionCreator(arg) {
    return function (dispatch, getState, extra) {
      var _a;

      var requestId = ((_a = options == null ? void 0 : options.idGenerator) != null ? _a : nanoid)();
      var abortController = new AC();
      var abortReason;
      var abortedPromise = new Promise(function (_, reject) {
        return abortController.signal.addEventListener("abort", function () {
          return reject({
            name: "AbortError",
            message: abortReason || "Aborted"
          });
        });
      });
      var started = false;

      function abort(reason) {
        if (started) {
          abortReason = reason;
          abortController.abort();
        }
      }

      var promise = function () {
        return __async(this, null, function () {
          var _a2, finalAction, err_1, skipDispatch;

          return __generator(this, function (_b) {
            switch (_b.label) {
              case 0:
                _b.trys.push([0, 2,, 3]);

                if (options && options.condition && options.condition(arg, {
                  getState: getState,
                  extra: extra
                }) === false) {
                  throw {
                    name: "ConditionError",
                    message: "Aborted due to condition callback returning false."
                  };
                }

                started = true;
                dispatch(pending(requestId, arg, (_a2 = options == null ? void 0 : options.getPendingMeta) == null ? void 0 : _a2.call(options, {
                  requestId: requestId,
                  arg: arg
                }, {
                  getState: getState,
                  extra: extra
                })));
                return [4
                /*yield*/
                , Promise.race([abortedPromise, Promise.resolve(payloadCreator(arg, {
                  dispatch: dispatch,
                  getState: getState,
                  extra: extra,
                  requestId: requestId,
                  signal: abortController.signal,
                  rejectWithValue: function (value, meta) {
                    return new RejectWithValue(value, meta);
                  },
                  fulfillWithValue: function (value, meta) {
                    return new FulfillWithMeta(value, meta);
                  }
                })).then(function (result) {
                  if (result instanceof RejectWithValue) {
                    throw result;
                  }

                  if (result instanceof FulfillWithMeta) {
                    return fulfilled(result.payload, requestId, arg, result.meta);
                  }

                  return fulfilled(result, requestId, arg);
                })])];

              case 1:
                finalAction = _b.sent();
                return [3
                /*break*/
                , 3];

              case 2:
                err_1 = _b.sent();
                finalAction = err_1 instanceof RejectWithValue ? rejected(null, requestId, arg, err_1.payload, err_1.meta) : rejected(err_1, requestId, arg);
                return [3
                /*break*/
                , 3];

              case 3:
                skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;

                if (!skipDispatch) {
                  dispatch(finalAction);
                }

                return [2
                /*return*/
                , finalAction];
            }
          });
        });
      }();

      return Object.assign(promise, {
        abort: abort,
        requestId: requestId,
        arg: arg,
        unwrap: function () {
          return promise.then(unwrapResult);
        }
      });
    };
  }

  return Object.assign(actionCreator, {
    pending: pending,
    rejected: rejected,
    fulfilled: fulfilled,
    typePrefix: typePrefix
  });
}

function unwrapResult(action) {
  if (action.meta && action.meta.rejectedWithValue) {
    throw action.payload;
  }

  if (action.error) {
    throw action.error;
  }

  return action.payload;
} // src/tsHelpers.ts


var hasMatchFunction = function (v) {
  return v && typeof v.match === "function";
}; // src/matchers.ts


var matches = function (matcher, action) {
  if (hasMatchFunction(matcher)) {
    return matcher.match(action);
  } else {
    return matcher(action);
  }
};

function isAnyOf() {
  var matchers = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    matchers[_i] = arguments[_i];
  }

  return function (action) {
    return matchers.some(function (matcher) {
      return matches(matcher, action);
    });
  };
}

function isAllOf() {
  var matchers = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    matchers[_i] = arguments[_i];
  }

  return function (action) {
    return matchers.every(function (matcher) {
      return matches(matcher, action);
    });
  };
}

function hasExpectedRequestMetadata(action, validStatus) {
  if (!action || !action.meta) return false;
  var hasValidRequestId = typeof action.meta.requestId === "string";
  var hasValidRequestStatus = validStatus.indexOf(action.meta.requestStatus) > -1;
  return hasValidRequestId && hasValidRequestStatus;
}

function isAsyncThunkArray(a) {
  return typeof a[0] === "function" && "pending" in a[0] && "fulfilled" in a[0] && "rejected" in a[0];
}

function isPending() {
  var asyncThunks = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    asyncThunks[_i] = arguments[_i];
  }

  if (asyncThunks.length === 0) {
    return function (action) {
      return hasExpectedRequestMetadata(action, ["pending"]);
    };
  }

  if (!isAsyncThunkArray(asyncThunks)) {
    return isPending()(asyncThunks[0]);
  }

  return function (action) {
    var matchers = asyncThunks.map(function (asyncThunk) {
      return asyncThunk.pending;
    });
    var combinedMatcher = isAnyOf.apply(void 0, matchers);
    return combinedMatcher(action);
  };
}

function isRejected() {
  var asyncThunks = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    asyncThunks[_i] = arguments[_i];
  }

  if (asyncThunks.length === 0) {
    return function (action) {
      return hasExpectedRequestMetadata(action, ["rejected"]);
    };
  }

  if (!isAsyncThunkArray(asyncThunks)) {
    return isRejected()(asyncThunks[0]);
  }

  return function (action) {
    var matchers = asyncThunks.map(function (asyncThunk) {
      return asyncThunk.rejected;
    });
    var combinedMatcher = isAnyOf.apply(void 0, matchers);
    return combinedMatcher(action);
  };
}

function isRejectedWithValue() {
  var asyncThunks = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    asyncThunks[_i] = arguments[_i];
  }

  var hasFlag = function (action) {
    return action && action.meta && action.meta.rejectedWithValue;
  };

  if (asyncThunks.length === 0) {
    return function (action) {
      var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
      return combinedMatcher(action);
    };
  }

  if (!isAsyncThunkArray(asyncThunks)) {
    return isRejectedWithValue()(asyncThunks[0]);
  }

  return function (action) {
    var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
    return combinedMatcher(action);
  };
}

function isFulfilled() {
  var asyncThunks = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    asyncThunks[_i] = arguments[_i];
  }

  if (asyncThunks.length === 0) {
    return function (action) {
      return hasExpectedRequestMetadata(action, ["fulfilled"]);
    };
  }

  if (!isAsyncThunkArray(asyncThunks)) {
    return isFulfilled()(asyncThunks[0]);
  }

  return function (action) {
    var matchers = asyncThunks.map(function (asyncThunk) {
      return asyncThunk.fulfilled;
    });
    var combinedMatcher = isAnyOf.apply(void 0, matchers);
    return combinedMatcher(action);
  };
}

function isAsyncThunkAction() {
  var asyncThunks = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    asyncThunks[_i] = arguments[_i];
  }

  if (asyncThunks.length === 0) {
    return function (action) {
      return hasExpectedRequestMetadata(action, ["pending", "fulfilled", "rejected"]);
    };
  }

  if (!isAsyncThunkArray(asyncThunks)) {
    return isAsyncThunkAction()(asyncThunks[0]);
  }

  return function (action) {
    var matchers = [];

    for (var _i = 0, asyncThunks_1 = asyncThunks; _i < asyncThunks_1.length; _i++) {
      var asyncThunk = asyncThunks_1[_i];
      matchers.push(asyncThunk.pending, asyncThunk.rejected, asyncThunk.fulfilled);
    }

    var combinedMatcher = isAnyOf.apply(void 0, matchers);
    return combinedMatcher(action);
  };
} // src/index.ts


(0, _immer.enableES5)();
},{"immer":"node_modules/immer/dist/immer.esm.js","redux":"node_modules/redux/es/redux.js","reselect":"node_modules/reselect/es/index.js","redux-thunk":"node_modules/redux-thunk/es/index.js"}],"src/store/bugs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBugsByUser = exports.getUnResolvedBugs = exports.default = exports.bugAssignedToUser = exports.bugResolved = exports.bugAdded = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _reselect = require("reselect");

var lastId = 0;
var slice = (0, _toolkit.createSlice)({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAssignedToUser: function bugAssignedToUser(bugs, action) {
      var _action$payload = action.payload,
          bugId = _action$payload.bugId,
          userId = _action$payload.userId;
      var index = bugs.findIndex(function (bug) {
        return bug.id === bugId;
      });
      bugs[index].userId = userId;
    },
    bugAdded: function bugAdded(bugs, action) {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolve: false
      });
    },
    bugRemoved: function bugRemoved(bugs, action) {
      bugs.filter(function (bug) {
        return bug.id !== action.payload.id;
      });
    },
    bugResolved: function bugResolved(bugs, action) {
      var index = bugs.findIndex(function (bug) {
        return bug.id === action.payload.id;
      });
      bugs[index].resolve = true;
    }
  }
});
var _slice$actions = slice.actions,
    bugAdded = _slice$actions.bugAdded,
    bugResolved = _slice$actions.bugResolved,
    bugAssignedToUser = _slice$actions.bugAssignedToUser;
exports.bugAssignedToUser = bugAssignedToUser;
exports.bugResolved = bugResolved;
exports.bugAdded = bugAdded;
var _default = slice.reducer;
exports.default = _default;
var getUnResolvedBugs = (0, _reselect.createSelector)(function (state) {
  return state.entities.bugs;
}, function (bugs) {
  return bugs.filter(function (bug) {
    return !bug.resolved;
  });
});
exports.getUnResolvedBugs = getUnResolvedBugs;

var getBugsByUser = function getBugsByUser(userId) {
  return (0, _reselect.createSelector)(function (state) {
    return state.entities.bugs;
  }, function (bugs) {
    return bugs.filter(function (bug) {
      return bug.userId === userId;
    });
  });
};

exports.getBugsByUser = getBugsByUser;
},{"@reduxjs/toolkit":"node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js","reselect":"node_modules/reselect/es/index.js"}],"src/store/project.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.projectAdded = void 0;

var _toolkit = require("@reduxjs/toolkit");

var lastId = 0;
var slice = (0, _toolkit.createSlice)({
  name: "projects",
  initialState: [],
  reducers: {
    // action => action handler
    projectAdded: function projectAdded(projects, action) {
      projects.push({
        id: ++lastId,
        name: action.payload.name
      });
    }
  }
});
var projectAdded = slice.actions.projectAdded;
exports.projectAdded = projectAdded;
var _default = slice.reducer;
exports.default = _default;
},{"@reduxjs/toolkit":"node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"}],"src/store/users.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.usersAdded = void 0;

var _toolkit = require("@reduxjs/toolkit");

var lastId = 0;
var slice = (0, _toolkit.createSlice)({
  name: "users",
  initialState: [],
  reducers: {
    usersAdded: function usersAdded(users, action) {
      users.push({
        id: ++lastId,
        name: action.payload.name
      });
    }
  }
});
var usersAdded = slice.actions.usersAdded;
exports.usersAdded = usersAdded;
var _default = slice.reducer;
exports.default = _default;
},{"@reduxjs/toolkit":"node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js"}],"src/store/entities.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _bugs = _interopRequireDefault(require("./bugs"));

var _project = _interopRequireDefault(require("./project"));

var _users = _interopRequireDefault(require("./users"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _redux.combineReducers)({
  bugs: _bugs.default,
  projects: _project.default,
  users: _users.default
});

exports.default = _default;
},{"redux":"node_modules/redux/es/redux.js","./bugs":"src/store/bugs.js","./project":"src/store/project.js","./users":"src/store/users.js"}],"src/store/reducer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redux = require("redux");

var _entities = _interopRequireDefault(require("./entities"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _redux.combineReducers)({
  entities: _entities.default
});

exports.default = _default;
},{"redux":"node_modules/redux/es/redux.js","./entities":"src/store/entities.js"}],"src/store/configureStore.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _toolkit = require("@reduxjs/toolkit");

var _reducer = _interopRequireDefault(require("./reducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import reducer from "./bugs";
function _default() {
  return (0, _toolkit.configureStore)({
    reducer: _reducer.default
  });
}
},{"@reduxjs/toolkit":"node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js","./reducer":"src/store/reducer.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _configureStore = _interopRequireDefault(require("./store/configureStore"));

var _bugs = require("./store/bugs");

var _project = require("./store/project");

var _users = require("./store/users");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _configureStore.default)();
store.dispatch((0, _bugs.bugAdded)({
  description: "Bug 1"
}));
store.dispatch((0, _bugs.bugAdded)({
  description: "Bug 2"
}));
store.dispatch((0, _bugs.bugAdded)({
  description: "Bug 3"
}));
store.dispatch((0, _project.projectAdded)({
  name: "project 1"
}));
store.dispatch((0, _project.projectAdded)({
  name: "project 2"
}));
store.dispatch((0, _users.usersAdded)({
  name: "user 1"
}));
store.dispatch((0, _users.usersAdded)({
  name: "user 2"
}));
store.dispatch((0, _bugs.bugAssignedToUser)({
  bugId: 1,
  userId: 1
}));
store.dispatch((0, _bugs.bugResolved)({
  id: 1
}));
var bugs = (0, _bugs.getBugsByUser)(1)(store.getState());
console.log(bugs); // console.log(store.getState());
// import { bugAdded, bugResolved } from "./action";
// // const unsubscribe = store.subscribe(() => {
// //   console.log("store changed!", store.getState());
// // });
// store.dispatch(bugAdded("Bug 1"));
// store.dispatch(bugResolved(1));
// console.log(store.getState());
},{"./store/configureStore":"src/store/configureStore.js","./store/bugs":"src/store/bugs.js","./store/project":"src/store/project.js","./store/users":"src/store/users.js"}],"C:/Users/Rahul/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52838" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ??? Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] ????  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">????</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Rahul/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map