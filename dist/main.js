!function () {
  'use strict';
  var e, t, r = {}, n = {};
  function o (e) {
    var t = n[e];
    if (void 0 !== t) return t.exports;
    var i = n[e] = { exports: {} };
    return r[e](i, i.exports, o), i.exports;
  }
  o.m = r, o.d = function (e, t) {
    for (var r in t) o.o(t, r) && !o.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
  }, o.f = {}, o.e = function (e) {
    return Promise.all(Object.keys(o.f).reduce((function (t, r) {
      return o.f[r](e, t), t;
    }), []));
  }, o.u = function (e) {
    return e + '.js';
  }, o.g = function () {
    if ('object' == typeof globalThis) return globalThis;
    try {
      return this || new Function('return this')();
    } catch (e) {
      if ('object' == typeof window) return window;
    }
  }(), o.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, e = {}, t = 'webpack-config:', o.l = function (r, n, i, c) {
    if (e[r]) e[r].push(n); else {
      var u, a;
      if (void 0 !== i) for (var l = document.getElementsByTagName('script'), s = 0; s < l.length; s++) {
        var f = l[s];
        if (f.getAttribute('src') == r || f.getAttribute('data-webpack') == t + i) {
          u = f;
          break;
        }
      }
      u || (a = !0, (u = document.createElement('script')).charset = 'utf-8', u.timeout = 120, o.nc && u.setAttribute('nonce', o.nc), u.setAttribute('data-webpack', t + i), u.src = r), e[r] = [n];
      var p = function (t, n) {
        u.onerror = u.onload = null, clearTimeout(d);
        var o = e[r];
        if (delete e[r], u.parentNode && u.parentNode.removeChild(u), o && o.forEach((function (e) {
          return e(n);
        })), t) return t(n);
      }, d = setTimeout(p.bind(null, void 0, { type: 'timeout', target: u }), 12e4);
      u.onerror = p.bind(null, u.onerror), u.onload = p.bind(null, u.onload), a && document.head.appendChild(u);
    }
  }, o.r = function (e) {
    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(e, '__esModule', { value: !0 });
  }, function () {
    var e;
    o.g.importScripts && (e = o.g.location + '');
    var t = o.g.document;
    if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
      var r = t.getElementsByTagName('script');
      r.length && (e = r[r.length - 1].src);
    }
    if (!e) throw new Error('Automatic publicPath is not supported in this browser');
    e = e.replace(/#.*$/, '').replace(/\?.*$/, '').replace(/\/[^\/]+$/, '/'), o.p = e;
  }(), function () {
    var e = { 179: 0 };
    o.f.j = function (t, r) {
      var n = o.o(e, t) ? e[t] : void 0;
      if (0 !== n) if (n) r.push(n[2]); else {
        var i = new Promise((function (r, o) {
          n = e[t] = [r, o];
        }));
        r.push(n[2] = i);
        var c = o.p + o.u(t), u = new Error;
        o.l(c, (function (r) {
          if (o.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
            var i = r && ('load' === r.type ? 'missing' : r.type), c = r && r.target && r.target.src;
            u.message = 'Loading chunk ' + t + ' failed.\n(' + i + ': ' + c + ')', u.name = 'ChunkLoadError', u.type = i, u.request = c, n[1](u);
          }
        }), 'chunk-' + t, t);
      }
    };
    var t = function (t, r) {
      var n, i, c = r[0], u = r[1], a = r[2], l = 0;
      for (n in u) o.o(u, n) && (o.m[n] = u[n]);
      for (a && a(o), t && t(r); l < c.length; l++) i = c[l], o.o(e, i) && e[i] && e[i][0](), e[c[l]] = 0;
    }, r = self.webpackChunkwebpack_config = self.webpackChunkwebpack_config || [];
    r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r));
  }();
  var i = o.e(390).then(o.bind(o, 390));
  console.log('hi'), console.log('a.js'), console.log(i), console.log(Promise.resolve('hi'));
}();