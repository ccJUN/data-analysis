!function() {
    "use strict";
    var t, e, i;
    !function(t) {
        var e = {};
        function i(s) {
            if (e[s])
                return e[s].exports;
            var n = e[s] = {
                i: s,
                l: !1,
                exports: {}
            };
            return t[s].call(n.exports, n, n.exports, i),
            n.l = !0,
            n.exports
        }
        i.m = t,
        i.c = e,
        i.d = function(t, e, s) {
            i.o(t, e) || Object.defineProperty(t, e, {
                configurable: !1,
                enumerable: !0,
                get: s
            })
        }
        ,
        i.r = function(t) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }
        ,
        i.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default
            }
            : function() {
                return t
            }
            ;
            return i.d(e, "a", e),
            e
        }
        ,
        i.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        ,
        i.p = "",
        i(i.s = 105)
    }({
        0: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var s, n = i(14), o = i(13);
            !function(t) {
                t[t.Dev = 0] = "Dev",
                t[t.Production = 1] = "Production",
                t[t.WarnAndError = 2] = "WarnAndError",
                t[t.OnlyError = 3] = "OnlyError",
                t[t.None = 4] = "None"
            }(s = e.LogLevel || (e.LogLevel = {}));
            var r, a = s.Production, h = {}, l = {};
            !function() {
                for (var t = 0; t < 10; t++)
                    h[t] = "0" + t,
                    l[t] = "00" + t;
                for (var t = 10; t < 100; t++)
                    h[t] = t.toString(),
                    l[t] = "0" + t;
                for (var t = 100; t < 1e3; t++)
                    l[t] = t.toString()
            }(),
            n.log("[YYPlayer] Log date " + ((r = new Date).getFullYear() + "-" + h[r.getMonth() + 1] + "-" + h[r.getDate()]));
            var u = o.parseQuery();
            function d() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                a === s.Dev && n.log.apply(n, [v()].concat(t))
            }
            function c() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                a !== s.Dev && a !== s.Production || n.log.apply(n, [v()].concat(t))
            }
            function f() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                a !== s.OnlyError && a !== s.None && n.warn.apply(n, [v()].concat(t))
            }
            function g() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                a !== s.None && n.error.apply(n, [v()].concat(t))
            }
            function p(t) {
                a = t
            }
            "0" === u.player_log ? p(s.None) : "1" === u.player_log ? p(s.Dev) : p(s.Production),
            e.debug = d,
            e.log = c,
            e.warn = f,
            e.error = g,
            e.setLevel = p;
            var _ = function() {
                function t() {}
                return t.debug = d,
                t.log = c,
                t.warn = f,
                t.error = g,
                t.setLevel = p,
                t
            }();
            function v() {
                return "[YYPlayer(" + (t = new Date,
                h[t.getHours()] + ":" + h[t.getMinutes()] + ":" + h[t.getSeconds()] + "." + l[t.getMilliseconds()]) + ")]";
                var t
            }
            e.default = _
        },
        104: function(t, e, i) {
            (function(s) {
                var n, o, r, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                , h = h || {};
                h.scope = {},
                h.ASSUME_ES5 = !1,
                h.ASSUME_NO_NATIVE_MAP = !1,
                h.ASSUME_NO_NATIVE_SET = !1,
                h.defineProperty = h.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, i) {
                    t != Array.prototype && t != Object.prototype && (t[e] = i.value)
                }
                ,
                h.getGlobal = function(t) {
                    return "undefined" != typeof window && window === t ? t : void 0 !== s && null != s ? s : t
                }
                ,
                h.global = h.getGlobal(void 0),
                h.SYMBOL_PREFIX = "jscomp_symbol_",
                h.initSymbol = function() {
                    h.initSymbol = function() {}
                    ,
                    h.global.Symbol || (h.global.Symbol = h.Symbol)
                }
                ,
                h.Symbol = (r = 0,
                function(t) {
                    return h.SYMBOL_PREFIX + (t || "") + r++
                }
                ),
                h.initSymbolIterator = function() {
                    h.initSymbol();
                    var t = h.global.Symbol.iterator;
                    t || (t = h.global.Symbol.iterator = h.global.Symbol("iterator")),
                    "function" != typeof Array.prototype[t] && h.defineProperty(Array.prototype, t, {
                        configurable: !0,
                        writable: !0,
                        value: function() {
                            return h.arrayIterator(this)
                        }
                    }),
                    h.initSymbolIterator = function() {}
                }
                ,
                h.arrayIterator = function(t) {
                    var e = 0;
                    return h.iteratorPrototype(function() {
                        return e < t.length ? {
                            done: !1,
                            value: t[e++]
                        } : {
                            done: !0
                        }
                    })
                }
                ,
                h.iteratorPrototype = function(t) {
                    return h.initSymbolIterator(),
                    (t = {
                        next: t
                    })[h.global.Symbol.iterator] = function() {
                        return this
                    }
                    ,
                    t
                }
                ,
                h.initSymbol(),
                h.initSymbol(),
                h.initSymbolIterator();
                var l = "function" == typeof Symbol && "symbol" === a(Symbol.iterator) ? function(t) {
                    return void 0 === t ? "undefined" : a(t)
                }
                : function(t) {
                    return h.initSymbol(),
                    h.initSymbol(),
                    h.initSymbol(),
                    t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : a(t)
                }
                ;
                void 0 === (o = "function" == typeof (n = function() {
                    return function() {
                        function t(t, e) {
                            if (65537 > e && (t.subarray && q || !t.subarray && W))
                                return String.fromCharCode.apply(null, Z(t, e));
                            for (var i = "", s = 0; s < e; s++)
                                i += String.fromCharCode(t[s]);
                            return i
                        }
                        function e(t, e, i, s) {
                            var n, o = 65535 & t | 0;
                            for (t = t >>> 16 & 65535 | 0; 0 !== i; ) {
                                i -= n = 2e3 < i ? 2e3 : i;
                                do {
                                    o = o + e[s++] | 0,
                                    t = t + o | 0
                                } while (--n);o %= 65521,
                                t %= 65521
                            }
                            return o | t << 16 | 0
                        }
                        function i(t, e, i, s) {
                            var n = $;
                            for (i = s + i,
                            t ^= -1; s < i; s++)
                                t = t >>> 8 ^ n[255 & (t ^ e[s])];
                            return -1 ^ t
                        }
                        function s(t, e) {
                            return t.msg = jt[e],
                            e
                        }
                        function n(t) {
                            for (var e = t.length; 0 <= --e; )
                                t[e] = 0
                        }
                        function o(t) {
                            var e = t.state
                              , i = e.pending;
                            i > t.avail_out && (i = t.avail_out),
                            0 !== i && (Y(t.output, e.pending_buf, e.pending_out, i, t.next_out),
                            t.next_out += i,
                            e.pending_out += i,
                            t.total_out += i,
                            t.avail_out -= i,
                            e.pending -= i,
                            0 === e.pending && (e.pending_out = 0))
                        }
                        function r(t, e) {
                            var i = 0 <= t.block_start ? t.block_start : -1
                              , s = t.strstart - t.block_start
                              , n = 0;
                            if (0 < t.level) {
                                for (t.strm.data_type === dt && (t.strm.data_type = function(t) {
                                    var e, i = 4093624447;
                                    for (e = 0; 31 >= e; e++,
                                    i >>>= 1)
                                        if (1 & i && 0 !== t.dyn_ltree[2 * e])
                                            return zt;
                                    if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26])
                                        return Ht;
                                    for (e = 32; e < gt; e++)
                                        if (0 !== t.dyn_ltree[2 * e])
                                            return Ht;
                                    return zt
                                }(t)),
                                O(t, t.l_desc),
                                O(t, t.d_desc),
                                F(t, t.dyn_ltree, t.l_desc.max_code),
                                F(t, t.dyn_dtree, t.d_desc.max_code),
                                O(t, t.bl_desc),
                                n = vt - 1; 3 <= n && 0 === t.bl_tree[2 * te[n] + 1]; n--)
                                    ;
                                t.opt_len += 3 * (n + 1) + 14;
                                var r = t.opt_len + 3 + 7 >>> 3
                                  , a = t.static_len + 3 + 7 >>> 3;
                                a <= r && (r = a)
                            } else
                                r = a = s + 5;
                            if (s + 4 <= r && -1 !== i)
                                k(t, (Pt << 1) + (e ? 1 : 0), 3),
                                A(t, i, s, !0);
                            else if (t.strategy === lt || a === r)
                                k(t, (Jt << 1) + (e ? 1 : 0), 3),
                                N(t, ee, ie);
                            else {
                                for (k(t, (Zt << 1) + (e ? 1 : 0), 3),
                                i = t.l_desc.max_code + 1,
                                s = t.d_desc.max_code + 1,
                                n += 1,
                                k(t, i - 257, 5),
                                k(t, s - 1, 5),
                                k(t, n - 4, 4),
                                r = 0; r < n; r++)
                                    k(t, t.bl_tree[2 * te[r] + 1], 3);
                                B(t, t.dyn_ltree, i - 1),
                                B(t, t.dyn_dtree, s - 1),
                                N(t, t.dyn_ltree, t.dyn_dtree)
                            }
                            x(t),
                            e && L(t),
                            t.block_start = t.strstart,
                            o(t.strm)
                        }
                        function a(t, e) {
                            t.pending_buf[t.pending++] = e
                        }
                        function u(t, e) {
                            t.pending_buf[t.pending++] = e >>> 8 & 255,
                            t.pending_buf[t.pending++] = 255 & e
                        }
                        function d(t, e) {
                            var i = t.max_chain_length
                              , s = t.strstart
                              , n = t.prev_length
                              , o = t.nice_match
                              , r = t.strstart > t.w_size - yt ? t.strstart - (t.w_size - yt) : 0
                              , a = t.window
                              , h = t.w_mask
                              , l = t.prev
                              , u = t.strstart + It
                              , d = a[s + n - 1]
                              , c = a[s + n];
                            t.prev_length >= t.good_match && (i >>= 2),
                            o > t.lookahead && (o = t.lookahead);
                            do {
                                var f = e;
                                if (a[f + n] === c && a[f + n - 1] === d && a[f] === a[s] && a[++f] === a[s + 1]) {
                                    for (s += 2,
                                    f++; a[++s] === a[++f] && a[++s] === a[++f] && a[++s] === a[++f] && a[++s] === a[++f] && a[++s] === a[++f] && a[++s] === a[++f] && a[++s] === a[++f] && a[++s] === a[++f] && s < u; )
                                        ;
                                    if (f = It - (u - s),
                                    s = u - It,
                                    f > n) {
                                        if (t.match_start = e,
                                        n = f,
                                        f >= o)
                                            break;
                                        d = a[s + n - 1],
                                        c = a[s + n]
                                    }
                                }
                            } while ((e = l[e & h]) > r && 0 != --i);return n <= t.lookahead ? n : t.lookahead
                        }
                        function c(t) {
                            var s, n = t.w_size;
                            do {
                                var o = t.window_size - t.lookahead - t.strstart;
                                if (t.strstart >= n + (n - yt)) {
                                    Y(t.window, t.window, n, n, 0),
                                    t.match_start -= n,
                                    t.strstart -= n,
                                    t.block_start -= n;
                                    var r = s = t.hash_size;
                                    do {
                                        var a = t.head[--r];
                                        t.head[r] = a >= n ? a - n : 0
                                    } while (--s);r = s = n;
                                    do {
                                        a = t.prev[--r],
                                        t.prev[r] = a >= n ? a - n : 0
                                    } while (--s);o += n
                                }
                                if (0 === t.strm.avail_in)
                                    break;
                                r = t.strm,
                                s = t.window,
                                a = t.strstart + t.lookahead;
                                var h = r.avail_in;
                                if (h > o && (h = o),
                                0 === h ? s = 0 : (r.avail_in -= h,
                                Y(s, r.input, r.next_in, h, a),
                                1 === r.state.wrap ? r.adler = e(r.adler, s, h, a) : 2 === r.state.wrap && (r.adler = i(r.adler, s, h, a)),
                                r.next_in += h,
                                r.total_in += h,
                                s = h),
                                t.lookahead += s,
                                t.lookahead + t.insert >= mt)
                                    for (o = t.strstart - t.insert,
                                    t.ins_h = t.window[o],
                                    t.ins_h = (t.ins_h << t.hash_shift ^ t.window[o + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[o + mt - 1]) & t.hash_mask,
                                    t.prev[o & t.w_mask] = t.head[t.ins_h],
                                    t.head[t.ins_h] = o,
                                    o++,
                                    t.insert--,
                                    !(t.lookahead + t.insert < mt)); )
                                        ;
                            } while (t.lookahead < yt && 0 !== t.strm.avail_in)
                        }
                        function f(t, e) {
                            for (var i; ; ) {
                                if (t.lookahead < yt) {
                                    if (c(t),
                                    t.lookahead < yt && e === tt)
                                        return 1;
                                    if (0 === t.lookahead)
                                        break
                                }
                                if (i = 0,
                                t.lookahead >= mt && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + mt - 1]) & t.hash_mask,
                                i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
                                t.head[t.ins_h] = t.strstart),
                                0 !== i && t.strstart - i <= t.w_size - yt && (t.match_length = d(t, i)),
                                t.match_length >= mt)
                                    if (i = R(t, t.strstart - t.match_start, t.match_length - mt),
                                    t.lookahead -= t.match_length,
                                    t.match_length <= t.max_lazy_match && t.lookahead >= mt) {
                                        t.match_length--;
                                        do {
                                            t.strstart++,
                                            t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + mt - 1]) & t.hash_mask,
                                            t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
                                            t.head[t.ins_h] = t.strstart
                                        } while (0 != --t.match_length);t.strstart++
                                    } else
                                        t.strstart += t.match_length,
                                        t.match_length = 0,
                                        t.ins_h = t.window[t.strstart],
                                        t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
                                else
                                    i = R(t, 0, t.window[t.strstart]),
                                    t.lookahead--,
                                    t.strstart++;
                                if (i && (r(t, !1),
                                0 === t.strm.avail_out))
                                    return 1
                            }
                            return t.insert = t.strstart < mt - 1 ? t.strstart : mt - 1,
                            e === et ? (r(t, !0),
                            0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (r(t, !1),
                            0 === t.strm.avail_out) ? 1 : 2
                        }
                        function g(t, e) {
                            for (var i, s; ; ) {
                                if (t.lookahead < yt) {
                                    if (c(t),
                                    t.lookahead < yt && e === tt)
                                        return 1;
                                    if (0 === t.lookahead)
                                        break
                                }
                                if (i = 0,
                                t.lookahead >= mt && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + mt - 1]) & t.hash_mask,
                                i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
                                t.head[t.ins_h] = t.strstart),
                                t.prev_length = t.match_length,
                                t.prev_match = t.match_start,
                                t.match_length = mt - 1,
                                0 !== i && t.prev_length < t.max_lazy_match && t.strstart - i <= t.w_size - yt && (t.match_length = d(t, i),
                                5 >= t.match_length && (1 === t.strategy || t.match_length === mt && 4096 < t.strstart - t.match_start) && (t.match_length = mt - 1)),
                                t.prev_length >= mt && t.match_length <= t.prev_length) {
                                    s = t.strstart + t.lookahead - mt,
                                    i = R(t, t.strstart - 1 - t.prev_match, t.prev_length - mt),
                                    t.lookahead -= t.prev_length - 1,
                                    t.prev_length -= 2;
                                    do {
                                        ++t.strstart <= s && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + mt - 1]) & t.hash_mask,
                                        t.prev[t.strstart & t.w_mask] = t.head[t.ins_h],
                                        t.head[t.ins_h] = t.strstart)
                                    } while (0 != --t.prev_length);if (t.match_available = 0,
                                    t.match_length = mt - 1,
                                    t.strstart++,
                                    i && (r(t, !1),
                                    0 === t.strm.avail_out))
                                        return 1
                                } else if (t.match_available) {
                                    if ((i = R(t, 0, t.window[t.strstart - 1])) && r(t, !1),
                                    t.strstart++,
                                    t.lookahead--,
                                    0 === t.strm.avail_out)
                                        return 1
                                } else
                                    t.match_available = 1,
                                    t.strstart++,
                                    t.lookahead--
                            }
                            return t.match_available && (R(t, 0, t.window[t.strstart - 1]),
                            t.match_available = 0),
                            t.insert = t.strstart < mt - 1 ? t.strstart : mt - 1,
                            e === et ? (r(t, !0),
                            0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (r(t, !1),
                            0 === t.strm.avail_out) ? 1 : 2
                        }
                        function p(t, e, i, s, n) {
                            this.good_length = t,
                            this.max_lazy = e,
                            this.nice_length = i,
                            this.max_chain = s,
                            this.func = n
                        }
                        function _(t, e) {
                            if (!t || !t.state || e > it || 0 > e)
                                return t ? s(t, ot) : ot;
                            var h = t.state;
                            if (!t.output || !t.input && 0 !== t.avail_in || 666 === h.status && e !== et)
                                return s(t, 0 === t.avail_out ? at : ot);
                            h.strm = t;
                            var l = h.last_flush;
                            if (h.last_flush = e,
                            42 === h.status)
                                if (2 === h.wrap)
                                    t.adler = 0,
                                    a(h, 31),
                                    a(h, 139),
                                    a(h, 8),
                                    h.gzhead ? (a(h, (h.gzhead.text ? 1 : 0) + (h.gzhead.hcrc ? 2 : 0) + (h.gzhead.extra ? 4 : 0) + (h.gzhead.name ? 8 : 0) + (h.gzhead.comment ? 16 : 0)),
                                    a(h, 255 & h.gzhead.time),
                                    a(h, h.gzhead.time >> 8 & 255),
                                    a(h, h.gzhead.time >> 16 & 255),
                                    a(h, h.gzhead.time >> 24 & 255),
                                    a(h, 9 === h.level ? 2 : 2 <= h.strategy || 2 > h.level ? 4 : 0),
                                    a(h, 255 & h.gzhead.os),
                                    h.gzhead.extra && h.gzhead.extra.length && (a(h, 255 & h.gzhead.extra.length),
                                    a(h, h.gzhead.extra.length >> 8 & 255)),
                                    h.gzhead.hcrc && (t.adler = i(t.adler, h.pending_buf, h.pending, 0)),
                                    h.gzindex = 0,
                                    h.status = 69) : (a(h, 0),
                                    a(h, 0),
                                    a(h, 0),
                                    a(h, 0),
                                    a(h, 0),
                                    a(h, 9 === h.level ? 2 : 2 <= h.strategy || 2 > h.level ? 4 : 0),
                                    a(h, 3),
                                    h.status = 113);
                                else {
                                    var d = ct + (h.w_bits - 8 << 4) << 8;
                                    d |= (2 <= h.strategy || 2 > h.level ? 0 : 6 > h.level ? 1 : 6 === h.level ? 2 : 3) << 6,
                                    0 !== h.strstart && (d |= 32),
                                    h.status = 113,
                                    u(h, d + (31 - d % 31)),
                                    0 !== h.strstart && (u(h, t.adler >>> 16),
                                    u(h, 65535 & t.adler)),
                                    t.adler = 1
                                }
                            if (69 === h.status)
                                if (h.gzhead.extra) {
                                    for (d = h.pending; h.gzindex < (65535 & h.gzhead.extra.length) && (h.pending !== h.pending_buf_size || (h.gzhead.hcrc && h.pending > d && (t.adler = i(t.adler, h.pending_buf, h.pending - d, d)),
                                    o(t),
                                    d = h.pending,
                                    h.pending !== h.pending_buf_size)); )
                                        a(h, 255 & h.gzhead.extra[h.gzindex]),
                                        h.gzindex++;
                                    h.gzhead.hcrc && h.pending > d && (t.adler = i(t.adler, h.pending_buf, h.pending - d, d)),
                                    h.gzindex === h.gzhead.extra.length && (h.gzindex = 0,
                                    h.status = 73)
                                } else
                                    h.status = 73;
                            if (73 === h.status)
                                if (h.gzhead.name) {
                                    d = h.pending;
                                    do {
                                        if (h.pending === h.pending_buf_size && (h.gzhead.hcrc && h.pending > d && (t.adler = i(t.adler, h.pending_buf, h.pending - d, d)),
                                        o(t),
                                        d = h.pending,
                                        h.pending === h.pending_buf_size)) {
                                            var f = 1;
                                            break
                                        }
                                        f = h.gzindex < h.gzhead.name.length ? 255 & h.gzhead.name.charCodeAt(h.gzindex++) : 0,
                                        a(h, f)
                                    } while (0 !== f);h.gzhead.hcrc && h.pending > d && (t.adler = i(t.adler, h.pending_buf, h.pending - d, d)),
                                    0 === f && (h.gzindex = 0,
                                    h.status = 91)
                                } else
                                    h.status = 91;
                            if (91 === h.status)
                                if (h.gzhead.comment) {
                                    d = h.pending;
                                    do {
                                        if (h.pending === h.pending_buf_size && (h.gzhead.hcrc && h.pending > d && (t.adler = i(t.adler, h.pending_buf, h.pending - d, d)),
                                        o(t),
                                        d = h.pending,
                                        h.pending === h.pending_buf_size)) {
                                            f = 1;
                                            break
                                        }
                                        f = h.gzindex < h.gzhead.comment.length ? 255 & h.gzhead.comment.charCodeAt(h.gzindex++) : 0,
                                        a(h, f)
                                    } while (0 !== f);h.gzhead.hcrc && h.pending > d && (t.adler = i(t.adler, h.pending_buf, h.pending - d, d)),
                                    0 === f && (h.status = 103)
                                } else
                                    h.status = 103;
                            if (103 === h.status && (h.gzhead.hcrc ? (h.pending + 2 > h.pending_buf_size && o(t),
                            h.pending + 2 <= h.pending_buf_size && (a(h, 255 & t.adler),
                            a(h, t.adler >> 8 & 255),
                            t.adler = 0,
                            h.status = 113)) : h.status = 113),
                            0 !== h.pending) {
                                if (o(t),
                                0 === t.avail_out)
                                    return h.last_flush = -1,
                                    st
                            } else if (0 === t.avail_in && (e << 1) - (4 < e ? 9 : 0) <= (l << 1) - (4 < l ? 9 : 0) && e !== et)
                                return s(t, at);
                            if (666 === h.status && 0 !== t.avail_in)
                                return s(t, at);
                            if (0 !== t.avail_in || 0 !== h.lookahead || e !== tt && 666 !== h.status) {
                                if (3 !== (l = 2 === h.strategy ? function(t, e) {
                                    for (var i; ; ) {
                                        if (0 === t.lookahead && (c(t),
                                        0 === t.lookahead)) {
                                            if (e === tt)
                                                return 1;
                                            break
                                        }
                                        if (t.match_length = 0,
                                        i = R(t, 0, t.window[t.strstart]),
                                        t.lookahead--,
                                        t.strstart++,
                                        i && (r(t, !1),
                                        0 === t.strm.avail_out))
                                            return 1
                                    }
                                    return t.insert = 0,
                                    e === et ? (r(t, !0),
                                    0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (r(t, !1),
                                    0 === t.strm.avail_out) ? 1 : 2
                                }(h, e) : 3 === h.strategy ? function(t, e) {
                                    for (var i, s, n, o = t.window; ; ) {
                                        if (t.lookahead <= It) {
                                            if (c(t),
                                            t.lookahead <= It && e === tt)
                                                return 1;
                                            if (0 === t.lookahead)
                                                break
                                        }
                                        if (t.match_length = 0,
                                        t.lookahead >= mt && 0 < t.strstart && (s = t.strstart - 1,
                                        (i = o[s]) === o[++s] && i === o[++s] && i === o[++s])) {
                                            for (n = t.strstart + It; i === o[++s] && i === o[++s] && i === o[++s] && i === o[++s] && i === o[++s] && i === o[++s] && i === o[++s] && i === o[++s] && s < n; )
                                                ;
                                            t.match_length = It - (n - s),
                                            t.match_length > t.lookahead && (t.match_length = t.lookahead)
                                        }
                                        if (t.match_length >= mt ? (i = R(t, 1, t.match_length - mt),
                                        t.lookahead -= t.match_length,
                                        t.strstart += t.match_length,
                                        t.match_length = 0) : (i = R(t, 0, t.window[t.strstart]),
                                        t.lookahead--,
                                        t.strstart++),
                                        i && (r(t, !1),
                                        0 === t.strm.avail_out))
                                            return 1
                                    }
                                    return t.insert = 0,
                                    e === et ? (r(t, !0),
                                    0 === t.strm.avail_out ? 3 : 4) : t.last_lit && (r(t, !1),
                                    0 === t.strm.avail_out) ? 1 : 2
                                }(h, e) : wt[h.level].func(h, e)) && 4 !== l || (h.status = 666),
                                1 === l || 3 === l)
                                    return 0 === t.avail_out && (h.last_flush = -1),
                                    st;
                                if (2 === l && (1 === e ? (k(h, Jt << 1, 3),
                                S(h, Wt, ee),
                                16 === h.bi_valid ? (w(h, h.bi_buf),
                                h.bi_buf = 0,
                                h.bi_valid = 0) : 8 <= h.bi_valid && (h.pending_buf[h.pending++] = 255 & h.bi_buf,
                                h.bi_buf >>= 8,
                                h.bi_valid -= 8)) : e !== it && (k(h, Pt << 1, 3),
                                A(h, 0, 0, !0),
                                3 === e && (n(h.head),
                                0 === h.lookahead && (h.strstart = 0,
                                h.block_start = 0,
                                h.insert = 0))),
                                o(t),
                                0 === t.avail_out))
                                    return h.last_flush = -1,
                                    st
                            }
                            return e !== et ? st : 0 >= h.wrap ? nt : (2 === h.wrap ? (a(h, 255 & t.adler),
                            a(h, t.adler >> 8 & 255),
                            a(h, t.adler >> 16 & 255),
                            a(h, t.adler >> 24 & 255),
                            a(h, 255 & t.total_in),
                            a(h, t.total_in >> 8 & 255),
                            a(h, t.total_in >> 16 & 255),
                            a(h, t.total_in >> 24 & 255)) : (u(h, t.adler >>> 16),
                            u(h, 65535 & t.adler)),
                            o(t),
                            0 < h.wrap && (h.wrap = -h.wrap),
                            0 !== h.pending ? st : nt)
                        }
                        function v(t) {
                            return (t >>> 24 & 255) + (t >>> 8 & 65280) + ((65280 & t) << 8) + ((255 & t) << 24)
                        }
                        function b(t, e, i, s) {
                            var n = t.state;
                            return null === n.window && (n.wsize = 1 << n.wbits,
                            n.wnext = 0,
                            n.whave = 0,
                            n.window = new Uint8Array(n.wsize)),
                            s >= n.wsize ? (Y(n.window, e, i - n.wsize, n.wsize, 0),
                            n.wnext = 0,
                            n.whave = n.wsize) : ((t = n.wsize - n.wnext) > s && (t = s),
                            Y(n.window, e, i - s, t, n.wnext),
                            (s -= t) ? (Y(n.window, e, i - s, s, 0),
                            n.wnext = s,
                            n.whave = n.wsize) : (n.wnext += t,
                            n.wnext === n.wsize && (n.wnext = 0),
                            n.whave < n.wsize && (n.whave += t))),
                            0
                        }
                        function U(t, s) {
                            var n = new Uint8Array(4)
                              , o = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                            if (!t || !t.state || !t.output || !t.input && 0 !== t.avail_in)
                                return ot;
                            var r = t.state;
                            r.mode === St && (r.mode = 13);
                            var a = t.next_out
                              , h = t.output
                              , l = t.avail_out
                              , u = t.next_in
                              , d = t.input
                              , c = t.avail_in
                              , f = r.hold
                              , g = r.bits
                              , p = c
                              , _ = l
                              , U = st;
                            t: for (; ; )
                                switch (r.mode) {
                                case 1:
                                    if (0 === r.wrap) {
                                        r.mode = 13;
                                        break
                                    }
                                    for (; 16 > g; ) {
                                        if (0 === c)
                                            break t;
                                        c--,
                                        f += d[u++] << g,
                                        g += 8
                                    }
                                    if (2 & r.wrap && 35615 === f) {
                                        r.check = 0,
                                        n[0] = 255 & f,
                                        n[1] = f >>> 8 & 255,
                                        r.check = i(r.check, n, 2, 0),
                                        g = f = 0,
                                        r.mode = 2;
                                        break
                                    }
                                    if (r.flags = 0,
                                    r.head && (r.head.done = !1),
                                    !(1 & r.wrap) || (((255 & f) << 8) + (f >> 8)) % 31) {
                                        t.msg = "incorrect header check",
                                        r.mode = kt;
                                        break
                                    }
                                    if ((15 & f) !== ct) {
                                        t.msg = "unknown compression method",
                                        r.mode = kt;
                                        break
                                    }
                                    g -= 4;
                                    var m = 8 + (15 & (f >>>= 4));
                                    if (0 === r.wbits)
                                        r.wbits = m;
                                    else if (m > r.wbits) {
                                        t.msg = "invalid window size",
                                        r.mode = kt;
                                        break
                                    }
                                    r.dmax = 1 << m,
                                    t.adler = r.check = 1,
                                    r.mode = 512 & f ? 10 : St,
                                    g = f = 0;
                                    break;
                                case 2:
                                    for (; 16 > g; ) {
                                        if (0 === c)
                                            break t;
                                        c--,
                                        f += d[u++] << g,
                                        g += 8
                                    }
                                    if (r.flags = f,
                                    (255 & r.flags) !== ct) {
                                        t.msg = "unknown compression method",
                                        r.mode = kt;
                                        break
                                    }
                                    if (57344 & r.flags) {
                                        t.msg = "unknown header flags set",
                                        r.mode = kt;
                                        break
                                    }
                                    r.head && (r.head.text = f >> 8 & 1),
                                    512 & r.flags && (n[0] = 255 & f,
                                    n[1] = f >>> 8 & 255,
                                    r.check = i(r.check, n, 2, 0)),
                                    g = f = 0,
                                    r.mode = 3;
                                case 3:
                                    for (; 32 > g; ) {
                                        if (0 === c)
                                            break t;
                                        c--,
                                        f += d[u++] << g,
                                        g += 8
                                    }
                                    r.head && (r.head.time = f),
                                    512 & r.flags && (n[0] = 255 & f,
                                    n[1] = f >>> 8 & 255,
                                    n[2] = f >>> 16 & 255,
                                    n[3] = f >>> 24 & 255,
                                    r.check = i(r.check, n, 4, 0)),
                                    g = f = 0,
                                    r.mode = 4;
                                case 4:
                                    for (; 16 > g; ) {
                                        if (0 === c)
                                            break t;
                                        c--,
                                        f += d[u++] << g,
                                        g += 8
                                    }
                                    r.head && (r.head.xflags = 255 & f,
                                    r.head.os = f >> 8),
                                    512 & r.flags && (n[0] = 255 & f,
                                    n[1] = f >>> 8 & 255,
                                    r.check = i(r.check, n, 2, 0)),
                                    g = f = 0,
                                    r.mode = 5;
                                case 5:
                                    if (1024 & r.flags) {
                                        for (; 16 > g; ) {
                                            if (0 === c)
                                                break t;
                                            c--,
                                            f += d[u++] << g,
                                            g += 8
                                        }
                                        r.length = f,
                                        r.head && (r.head.extra_len = f),
                                        512 & r.flags && (n[0] = 255 & f,
                                        n[1] = f >>> 8 & 255,
                                        r.check = i(r.check, n, 2, 0)),
                                        g = f = 0
                                    } else
                                        r.head && (r.head.extra = null);
                                    r.mode = 6;
                                case 6:
                                    if (1024 & r.flags) {
                                        var I = r.length;
                                        if (I > c && (I = c),
                                        I && (r.head && (m = r.head.extra_len - r.length,
                                        r.head.extra || (r.head.extra = Array(r.head.extra_len)),
                                        Y(r.head.extra, d, u, I, m)),
                                        512 & r.flags && (r.check = i(r.check, d, I, u)),
                                        c -= I,
                                        u += I,
                                        r.length -= I),
                                        r.length)
                                            break t
                                    }
                                    r.length = 0,
                                    r.mode = 7;
                                case 7:
                                    if (2048 & r.flags) {
                                        if (0 === c)
                                            break t;
                                        I = 0;
                                        do {
                                            m = d[u + I++],
                                            r.head && m && 65536 > r.length && (r.head.name += String.fromCharCode(m))
                                        } while (m && I < c);if (512 & r.flags && (r.check = i(r.check, d, I, u)),
                                        c -= I,
                                        u += I,
                                        m)
                                            break t
                                    } else
                                        r.head && (r.head.name = null);
                                    r.length = 0,
                                    r.mode = 8;
                                case 8:
                                    if (4096 & r.flags) {
                                        if (0 === c)
                                            break t;
                                        I = 0;
                                        do {
                                            m = d[u + I++],
                                            r.head && m && 65536 > r.length && (r.head.comment += String.fromCharCode(m))
                                        } while (m && I < c);if (512 & r.flags && (r.check = i(r.check, d, I, u)),
                                        c -= I,
                                        u += I,
                                        m)
                                            break t
                                    } else
                                        r.head && (r.head.comment = null);
                                    r.mode = 9;
                                case 9:
                                    if (512 & r.flags) {
                                        for (; 16 > g; ) {
                                            if (0 === c)
                                                break t;
                                            c--,
                                            f += d[u++] << g,
                                            g += 8
                                        }
                                        if (f !== (65535 & r.check)) {
                                            t.msg = "header crc mismatch",
                                            r.mode = kt;
                                            break
                                        }
                                        g = f = 0
                                    }
                                    r.head && (r.head.hcrc = r.flags >> 9 & 1,
                                    r.head.done = !0),
                                    t.adler = r.check = 0,
                                    r.mode = St;
                                    break;
                                case 10:
                                    for (; 32 > g; ) {
                                        if (0 === c)
                                            break t;
                                        c--,
                                        f += d[u++] << g,
                                        g += 8
                                    }
                                    t.adler = r.check = v(f),
                                    g = f = 0,
                                    r.mode = 11;
                                case 11:
                                    if (0 === r.havedict)
                                        return t.next_out = a,
                                        t.avail_out = l,
                                        t.next_in = u,
                                        t.avail_in = c,
                                        r.hold = f,
                                        r.bits = g,
                                        2;
                                    t.adler = r.check = 1,
                                    r.mode = St;
                                case St:
                                    if (s === it || 6 === s)
                                        break t;
                                case 13:
                                    if (r.last) {
                                        f >>>= 7 & g,
                                        g -= 7 & g,
                                        r.mode = 27;
                                        break
                                    }
                                    for (; 3 > g; ) {
                                        if (0 === c)
                                            break t;
                                        c--,
                                        f += d[u++] << g,
                                        g += 8
                                    }
                                    switch (r.last = 1 & f,
                                    --g,
                                    3 & (f >>>= 1)) {
                                    case 0:
                                        r.mode = 14;
                                        break;
                                    case 1:
                                        if (m = r,
                                        Nt) {
                                            for (Lt = new Int32Array(512),
                                            At = new Int32Array(32),
                                            I = 0; 144 > I; )
                                                m.lens[I++] = 8;
                                            for (; 256 > I; )
                                                m.lens[I++] = 9;
                                            for (; 280 > I; )
                                                m.lens[I++] = 7;
                                            for (; 288 > I; )
                                                m.lens[I++] = 8;
                                            for (Dt(Tt, m.lens, 0, 288, Lt, 0, m.work, {
                                                bits: 9
                                            }),
                                            I = 0; 32 > I; )
                                                m.lens[I++] = 5;
                                            Dt(xt, m.lens, 0, 32, At, 0, m.work, {
                                                bits: 5
                                            }),
                                            Nt = !1
                                        }
                                        if (m.lencode = Lt,
                                        m.lenbits = 9,
                                        m.distcode = At,
                                        m.distbits = 5,
                                        r.mode = 20,
                                        6 === s) {
                                            f >>>= 2,
                                            g -= 2;
                                            break t
                                        }
                                        break;
                                    case 2:
                                        r.mode = 17;
                                        break;
                                    case 3:
                                        t.msg = "invalid block type",
                                        r.mode = kt
                                    }
                                    f >>>= 2,
                                    g -= 2;
                                    break;
                                case 14:
                                    for (f >>>= 7 & g,
                                    g -= 7 & g; 32 > g; ) {
                                        if (0 === c)
                                            break t;
                                        c--,
                                        f += d[u++] << g,
                                        g += 8
                                    }
                                    if ((65535 & f) != (f >>> 16 ^ 65535)) {
                                        t.msg = "invalid stored block lengths",
                                        r.mode = kt;
                                        break
                                    }
                                    if (r.length = 65535 & f,
                                    g = f = 0,
                                    r.mode = 15,
                                    6 === s)
                                        break t;
                                case 15:
                                    r.mode = 16;
                                case 16:
                                    if (I = r.length) {
                                        if (I > c && (I = c),
                                        I > l && (I = l),
                                        0 === I)
                                            break t;
                                        Y(h, d, u, I, a),
                                        c -= I,
                                        u += I,
                                        l -= I,
                                        a += I,
                                        r.length -= I;
                                        break
                                    }
                                    r.mode = St;
                                    break;
                                case 17:
                                    for (; 14 > g; ) {
                                        if (0 === c)
                                            break t;
                                        c--,
                                        f += d[u++] << g,
                                        g += 8
                                    }
                                    if (r.nlen = 257 + (31 & f),
                                    f >>>= 5,
                                    g -= 5,
                                    r.ndist = 1 + (31 & f),
                                    f >>>= 5,
                                    g -= 5,
                                    r.ncode = 4 + (15 & f),
                                    f >>>= 4,
                                    g -= 4,
                                    286 < r.nlen || 30 < r.ndist) {
                                        t.msg = "too many length or distance symbols",
                                        r.mode = kt;
                                        break
                                    }
                                    r.have = 0,
                                    r.mode = 18;
                                case 18:
                                    for (; r.have < r.ncode; ) {
                                        for (; 3 > g; ) {
                                            if (0 === c)
                                                break t;
                                            c--,
                                            f += d[u++] << g,
                                            g += 8
                                        }
                                        r.lens[o[r.have++]] = 7 & f,
                                        f >>>= 3,
                                        g -= 3
                                    }
                                    for (; 19 > r.have; )
                                        r.lens[o[r.have++]] = 0;
                                    if (r.lencode = r.lendyn,
                                    r.lenbits = 7,
                                    I = {
                                        bits: r.lenbits
                                    },
                                    U = Dt(Ct, r.lens, 0, 19, r.lencode, 0, r.work, I),
                                    r.lenbits = I.bits,
                                    U) {
                                        t.msg = "invalid code lengths set",
                                        r.mode = kt;
                                        break
                                    }
                                    r.have = 0,
                                    r.mode = 19;
                                case 19:
                                    for (; r.have < r.nlen + r.ndist; ) {
                                        for (; ; ) {
                                            var y = r.lencode[f & (1 << r.lenbits) - 1];
                                            if (I = y >>> 24,
                                            y &= 65535,
                                            I <= g)
                                                break;
                                            if (0 === c)
                                                break t;
                                            c--,
                                            f += d[u++] << g,
                                            g += 8
                                        }
                                        if (16 > y)
                                            f >>>= I,
                                            g -= I,
                                            r.lens[r.have++] = y;
                                        else {
                                            if (16 === y) {
                                                for (m = I + 2; g < m; ) {
                                                    if (0 === c)
                                                        break t;
                                                    c--,
                                                    f += d[u++] << g,
                                                    g += 8
                                                }
                                                if (f >>>= I,
                                                g -= I,
                                                0 === r.have) {
                                                    t.msg = "invalid bit length repeat",
                                                    r.mode = kt;
                                                    break
                                                }
                                                m = r.lens[r.have - 1],
                                                I = 3 + (3 & f),
                                                f >>>= 2,
                                                g -= 2
                                            } else if (17 === y) {
                                                for (m = I + 3; g < m; ) {
                                                    if (0 === c)
                                                        break t;
                                                    c--,
                                                    f += d[u++] << g,
                                                    g += 8
                                                }
                                                g -= I,
                                                m = 0,
                                                I = 3 + (7 & (f >>>= I)),
                                                f >>>= 3,
                                                g -= 3
                                            } else {
                                                for (m = I + 7; g < m; ) {
                                                    if (0 === c)
                                                        break t;
                                                    c--,
                                                    f += d[u++] << g,
                                                    g += 8
                                                }
                                                g -= I,
                                                m = 0,
                                                I = 11 + (127 & (f >>>= I)),
                                                f >>>= 7,
                                                g -= 7
                                            }
                                            if (r.have + I > r.nlen + r.ndist) {
                                                t.msg = "invalid bit length repeat",
                                                r.mode = kt;
                                                break
                                            }
                                            for (; I--; )
                                                r.lens[r.have++] = m
                                        }
                                    }
                                    if (r.mode === kt)
                                        break;
                                    if (0 === r.lens[256]) {
                                        t.msg = "invalid code -- missing end-of-block",
                                        r.mode = kt;
                                        break
                                    }
                                    if (r.lenbits = 9,
                                    I = {
                                        bits: r.lenbits
                                    },
                                    U = Dt(Tt, r.lens, 0, r.nlen, r.lencode, 0, r.work, I),
                                    r.lenbits = I.bits,
                                    U) {
                                        t.msg = "invalid literal/lengths set",
                                        r.mode = kt;
                                        break
                                    }
                                    if (r.distbits = 6,
                                    r.distcode = r.distdyn,
                                    I = {
                                        bits: r.distbits
                                    },
                                    U = Dt(xt, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, I),
                                    r.distbits = I.bits,
                                    U) {
                                        t.msg = "invalid distances set",
                                        r.mode = kt;
                                        break
                                    }
                                    if (r.mode = 20,
                                    6 === s)
                                        break t;
                                case 20:
                                    r.mode = 21;
                                case 21:
                                    if (6 <= c && 258 <= l) {
                                        t.next_out = a,
                                        t.avail_out = l,
                                        t.next_in = u,
                                        t.avail_in = c,
                                        r.hold = f,
                                        r.bits = g;
                                        var w = t
                                          , k = w.state
                                          , S = w.next_in;
                                        h = w.input;
                                        var C = S + (w.avail_in - 5)
                                          , T = w.next_out;
                                        d = w.output;
                                        var x = T - (_ - w.avail_out)
                                          , L = T + (w.avail_out - 257)
                                          , A = k.dmax;
                                        y = k.wsize;
                                        var M = k.whave
                                          , E = k.wnext
                                          , N = k.window;
                                        m = k.hold,
                                        I = k.bits,
                                        g = k.lencode,
                                        f = k.distcode,
                                        l = (1 << k.lenbits) - 1,
                                        c = (1 << k.distbits) - 1;
                                        e: do {
                                            15 > I && (m += h[S++] << I,
                                            I += 8,
                                            m += h[S++] << I,
                                            I += 8);
                                            var O = g[m & l];
                                            i: for (; ; ) {
                                                if (m >>>= a = O >>> 24,
                                                I -= a,
                                                0 == (a = O >>> 16 & 255))
                                                    d[T++] = 65535 & O;
                                                else {
                                                    if (!(16 & a)) {
                                                        if (0 == (64 & a)) {
                                                            O = g[(65535 & O) + (m & (1 << a) - 1)];
                                                            continue i
                                                        }
                                                        32 & a ? k.mode = St : (w.msg = "invalid literal/length code",
                                                        k.mode = kt);
                                                        break e
                                                    }
                                                    u = 65535 & O,
                                                    (a &= 15) && (I < a && (m += h[S++] << I,
                                                    I += 8),
                                                    u += m & (1 << a) - 1,
                                                    m >>>= a,
                                                    I -= a),
                                                    15 > I && (m += h[S++] << I,
                                                    I += 8,
                                                    m += h[S++] << I,
                                                    I += 8),
                                                    O = f[m & c];
                                                    s: for (; ; ) {
                                                        if (m >>>= a = O >>> 24,
                                                        I -= a,
                                                        !(16 & (a = O >>> 16 & 255))) {
                                                            if (0 == (64 & a)) {
                                                                O = f[(65535 & O) + (m & (1 << a) - 1)];
                                                                continue s
                                                            }
                                                            w.msg = "invalid distance code",
                                                            k.mode = kt;
                                                            break e
                                                        }
                                                        var F = 65535 & O;
                                                        if (I < (a &= 15) && (m += h[S++] << I,
                                                        (I += 8) < a && (m += h[S++] << I,
                                                        I += 8)),
                                                        (F += m & (1 << a) - 1) > A) {
                                                            w.msg = "invalid distance too far back",
                                                            k.mode = kt;
                                                            break e
                                                        }
                                                        if (m >>>= a,
                                                        I -= a,
                                                        F > (a = T - x)) {
                                                            if ((a = F - a) > M && k.sane) {
                                                                w.msg = "invalid distance too far back",
                                                                k.mode = kt;
                                                                break e
                                                            }
                                                            var B = 0;
                                                            if (O = N,
                                                            0 === E) {
                                                                if (B += y - a,
                                                                a < u) {
                                                                    u -= a;
                                                                    do {
                                                                        d[T++] = N[B++]
                                                                    } while (--a);B = T - F,
                                                                    O = d
                                                                }
                                                            } else if (E < a) {
                                                                if (B += y + E - a,
                                                                (a -= E) < u) {
                                                                    u -= a;
                                                                    do {
                                                                        d[T++] = N[B++]
                                                                    } while (--a);if (B = 0,
                                                                    E < u) {
                                                                        u -= a = E;
                                                                        do {
                                                                            d[T++] = N[B++]
                                                                        } while (--a);B = T - F,
                                                                        O = d
                                                                    }
                                                                }
                                                            } else if (B += E - a,
                                                            a < u) {
                                                                u -= a;
                                                                do {
                                                                    d[T++] = N[B++]
                                                                } while (--a);B = T - F,
                                                                O = d
                                                            }
                                                            for (; 2 < u; )
                                                                d[T++] = O[B++],
                                                                d[T++] = O[B++],
                                                                d[T++] = O[B++],
                                                                u -= 3;
                                                            u && (d[T++] = O[B++],
                                                            1 < u && (d[T++] = O[B++]))
                                                        } else {
                                                            B = T - F;
                                                            do {
                                                                d[T++] = d[B++],
                                                                d[T++] = d[B++],
                                                                d[T++] = d[B++],
                                                                u -= 3
                                                            } while (2 < u);u && (d[T++] = d[B++],
                                                            1 < u && (d[T++] = d[B++]))
                                                        }
                                                        break
                                                    }
                                                }
                                                break
                                            }
                                        } while (S < C && T < L);S -= u = I >> 3,
                                        I -= u << 3,
                                        w.next_in = S,
                                        w.next_out = T,
                                        w.avail_in = S < C ? C - S + 5 : 5 - (S - C),
                                        w.avail_out = T < L ? L - T + 257 : 257 - (T - L),
                                        k.hold = m & (1 << I) - 1,
                                        k.bits = I,
                                        a = t.next_out,
                                        h = t.output,
                                        l = t.avail_out,
                                        u = t.next_in,
                                        d = t.input,
                                        c = t.avail_in,
                                        f = r.hold,
                                        g = r.bits,
                                        r.mode === St && (r.back = -1);
                                        break
                                    }
                                    for (r.back = 0; y = r.lencode[f & (1 << r.lenbits) - 1],
                                    I = y >>> 24,
                                    m = y >>> 16 & 255,
                                    y &= 65535,
                                    !(I <= g); ) {
                                        if (0 === c)
                                            break t;
                                        c--,
                                        f += d[u++] << g,
                                        g += 8
                                    }
                                    if (m && 0 == (240 & m)) {
                                        for (N = I,
                                        E = m,
                                        M = y; y = r.lencode[M + ((f & (1 << N + E) - 1) >> N)],
                                        I = y >>> 24,
                                        m = y >>> 16 & 255,
                                        y &= 65535,
                                        !(N + I <= g); ) {
                                            if (0 === c)
                                                break t;
                                            c--,
                                            f += d[u++] << g,
                                            g += 8
                                        }
                                        f >>>= N,
                                        g -= N,
                                        r.back += N
                                    }
                                    if (f >>>= I,
                                    g -= I,
                                    r.back += I,
                                    r.length = y,
                                    0 === m) {
                                        r.mode = 26;
                                        break
                                    }
                                    if (32 & m) {
                                        r.back = -1,
                                        r.mode = St;
                                        break
                                    }
                                    if (64 & m) {
                                        t.msg = "invalid literal/length code",
                                        r.mode = kt;
                                        break
                                    }
                                    r.extra = 15 & m,
                                    r.mode = 22;
                                case 22:
                                    if (r.extra) {
                                        for (m = r.extra; g < m; ) {
                                            if (0 === c)
                                                break t;
                                            c--,
                                            f += d[u++] << g,
                                            g += 8
                                        }
                                        r.length += f & (1 << r.extra) - 1,
                                        f >>>= r.extra,
                                        g -= r.extra,
                                        r.back += r.extra
                                    }
                                    r.was = r.length,
                                    r.mode = 23;
                                case 23:
                                    for (; y = r.distcode[f & (1 << r.distbits) - 1],
                                    I = y >>> 24,
                                    m = y >>> 16 & 255,
                                    y &= 65535,
                                    !(I <= g); ) {
                                        if (0 === c)
                                            break t;
                                        c--,
                                        f += d[u++] << g,
                                        g += 8
                                    }
                                    if (0 == (240 & m)) {
                                        for (N = I,
                                        E = m,
                                        M = y; y = r.distcode[M + ((f & (1 << N + E) - 1) >> N)],
                                        I = y >>> 24,
                                        m = y >>> 16 & 255,
                                        y &= 65535,
                                        !(N + I <= g); ) {
                                            if (0 === c)
                                                break t;
                                            c--,
                                            f += d[u++] << g,
                                            g += 8
                                        }
                                        f >>>= N,
                                        g -= N,
                                        r.back += N
                                    }
                                    if (f >>>= I,
                                    g -= I,
                                    r.back += I,
                                    64 & m) {
                                        t.msg = "invalid distance code",
                                        r.mode = kt;
                                        break
                                    }
                                    r.offset = y,
                                    r.extra = 15 & m,
                                    r.mode = 24;
                                case 24:
                                    if (r.extra) {
                                        for (m = r.extra; g < m; ) {
                                            if (0 === c)
                                                break t;
                                            c--,
                                            f += d[u++] << g,
                                            g += 8
                                        }
                                        r.offset += f & (1 << r.extra) - 1,
                                        f >>>= r.extra,
                                        g -= r.extra,
                                        r.back += r.extra
                                    }
                                    if (r.offset > r.dmax) {
                                        t.msg = "invalid distance too far back",
                                        r.mode = kt;
                                        break
                                    }
                                    r.mode = 25;
                                case 25:
                                    if (0 === l)
                                        break t;
                                    if (I = _ - l,
                                    r.offset > I) {
                                        if ((I = r.offset - I) > r.whave && r.sane) {
                                            t.msg = "invalid distance too far back",
                                            r.mode = kt;
                                            break
                                        }
                                        I > r.wnext ? (I -= r.wnext,
                                        m = r.wsize - I) : m = r.wnext - I,
                                        I > r.length && (I = r.length),
                                        N = r.window
                                    } else
                                        N = h,
                                        m = a - r.offset,
                                        I = r.length;
                                    I > l && (I = l),
                                    l -= I,
                                    r.length -= I;
                                    do {
                                        h[a++] = N[m++]
                                    } while (--I);0 === r.length && (r.mode = 21);
                                    break;
                                case 26:
                                    if (0 === l)
                                        break t;
                                    h[a++] = r.length,
                                    l--,
                                    r.mode = 21;
                                    break;
                                case 27:
                                    if (r.wrap) {
                                        for (; 32 > g; ) {
                                            if (0 === c)
                                                break t;
                                            c--,
                                            f |= d[u++] << g,
                                            g += 8
                                        }
                                        if (_ -= l,
                                        t.total_out += _,
                                        r.total += _,
                                        _ && (t.adler = r.check = r.flags ? i(r.check, h, _, a - _) : e(r.check, h, _, a - _)),
                                        _ = l,
                                        (r.flags ? f : v(f)) !== r.check) {
                                            t.msg = "incorrect data check",
                                            r.mode = kt;
                                            break
                                        }
                                        g = f = 0
                                    }
                                    r.mode = 28;
                                case 28:
                                    if (r.wrap && r.flags) {
                                        for (; 32 > g; ) {
                                            if (0 === c)
                                                break t;
                                            c--,
                                            f += d[u++] << g,
                                            g += 8
                                        }
                                        if (f !== (4294967295 & r.total)) {
                                            t.msg = "incorrect length check",
                                            r.mode = kt;
                                            break
                                        }
                                        g = f = 0
                                    }
                                    r.mode = 29;
                                case 29:
                                    U = nt;
                                    break t;
                                case kt:
                                    U = rt;
                                    break t;
                                case 31:
                                    return -4;
                                default:
                                    return ot
                                }
                            return t.next_out = a,
                            t.avail_out = l,
                            t.next_in = u,
                            t.avail_in = c,
                            r.hold = f,
                            r.bits = g,
                            (r.wsize || _ !== t.avail_out && r.mode < kt && (27 > r.mode || s !== et)) && b(t, t.output, t.next_out, _ - t.avail_out) ? (r.mode = 31,
                            -4) : (p -= t.avail_in,
                            _ -= t.avail_out,
                            t.total_in += p,
                            t.total_out += _,
                            r.total += _,
                            r.wrap && _ && (t.adler = r.check = r.flags ? i(r.check, h, _, t.next_out - _) : e(r.check, h, _, t.next_out - _)),
                            t.data_type = r.bits + (r.last ? 64 : 0) + (r.mode === St ? 128 : 0) + (20 === r.mode || 15 === r.mode ? 256 : 0),
                            (0 === p && 0 === _ || s === et) && U === st && (U = at),
                            U)
                        }
                        function m(t, i) {
                            var s = i.length;
                            if (!t || !t.state)
                                return ot;
                            var n = t.state;
                            if (0 !== n.wrap && 11 !== n.mode)
                                return ot;
                            if (11 === n.mode) {
                                var o = e(1, i, s, 0);
                                if (o !== n.check)
                                    return rt
                            }
                            return b(t, i, s, s) ? (n.mode = 31,
                            -4) : (n.havedict = 1,
                            st)
                        }
                        function I(t, e, i, s, n) {
                            this.static_tree = t,
                            this.extra_bits = e,
                            this.extra_base = i,
                            this.elems = s,
                            this.max_length = n,
                            this.has_stree = t && t.length
                        }
                        function y(t, e) {
                            this.dyn_tree = t,
                            this.max_code = 0,
                            this.stat_desc = e
                        }
                        function w(t, e) {
                            t.pending_buf[t.pending++] = 255 & e,
                            t.pending_buf[t.pending++] = e >>> 8 & 255
                        }
                        function k(t, e, i) {
                            t.bi_valid > Yt - i ? (t.bi_buf |= e << t.bi_valid & 65535,
                            w(t, t.bi_buf),
                            t.bi_buf = e >> Yt - t.bi_valid,
                            t.bi_valid += i - Yt) : (t.bi_buf |= e << t.bi_valid & 65535,
                            t.bi_valid += i)
                        }
                        function S(t, e, i) {
                            k(t, i[2 * e], i[2 * e + 1])
                        }
                        function C(t, e) {
                            var i = 0;
                            do {
                                i |= 1 & t,
                                t >>>= 1,
                                i <<= 1
                            } while (0 < --e);return i >>> 1
                        }
                        function T(t, e, i) {
                            var s, n = Array(Ut + 1), o = 0;
                            for (s = 1; s <= Ut; s++)
                                n[s] = o = o + i[s - 1] << 1;
                            for (i = 0; i <= e; i++)
                                0 !== (o = t[2 * i + 1]) && (t[2 * i] = C(n[o]++, o))
                        }
                        function x(t) {
                            var e;
                            for (e = 0; e < pt; e++)
                                t.dyn_ltree[2 * e] = 0;
                            for (e = 0; e < _t; e++)
                                t.dyn_dtree[2 * e] = 0;
                            for (e = 0; e < vt; e++)
                                t.bl_tree[2 * e] = 0;
                            t.dyn_ltree[2 * Wt] = 1,
                            t.opt_len = t.static_len = 0,
                            t.last_lit = t.matches = 0
                        }
                        function L(t) {
                            8 < t.bi_valid ? w(t, t.bi_buf) : 0 < t.bi_valid && (t.pending_buf[t.pending++] = t.bi_buf),
                            t.bi_buf = 0,
                            t.bi_valid = 0
                        }
                        function A(t, e, i, s) {
                            L(t),
                            s && (w(t, i),
                            w(t, ~i)),
                            Y(t.pending_buf, t.window, e, i, t.pending),
                            t.pending += i
                        }
                        function M(t, e, i, s) {
                            var n = 2 * e
                              , o = 2 * i;
                            return t[n] < t[o] || t[n] === t[o] && s[e] <= s[i]
                        }
                        function E(t, e, i) {
                            for (var s = t.heap[i], n = i << 1; n <= t.heap_len && (n < t.heap_len && M(e, t.heap[n + 1], t.heap[n], t.depth) && n++,
                            !M(e, s, t.heap[n], t.depth)); )
                                t.heap[i] = t.heap[n],
                                i = n,
                                n <<= 1;
                            t.heap[i] = s
                        }
                        function N(t, e, i) {
                            var s = 0;
                            if (0 !== t.last_lit)
                                do {
                                    var n = t.pending_buf[t.d_buf + 2 * s] << 8 | t.pending_buf[t.d_buf + 2 * s + 1]
                                      , o = t.pending_buf[t.l_buf + s];
                                    if (s++,
                                    0 === n)
                                        S(t, o, e);
                                    else {
                                        var r = ne[o];
                                        S(t, r + gt + 1, e);
                                        var a = Xt[r];
                                        0 !== a && (o -= oe[r],
                                        k(t, o, a)),
                                        r = 256 > --n ? se[n] : se[256 + (n >>> 7)],
                                        S(t, r, i),
                                        0 !== (a = Qt[r]) && (n -= re[r],
                                        k(t, n, a))
                                    }
                                } while (s < t.last_lit);S(t, Wt, e)
                        }
                        function O(t, e) {
                            var i, s = e.dyn_tree, n = e.stat_desc.static_tree, o = e.stat_desc.has_stree, r = e.stat_desc.elems, a = -1;
                            for (t.heap_len = 0,
                            t.heap_max = bt,
                            i = 0; i < r; i++)
                                0 !== s[2 * i] ? (t.heap[++t.heap_len] = a = i,
                                t.depth[i] = 0) : s[2 * i + 1] = 0;
                            for (; 2 > t.heap_len; ) {
                                var h = t.heap[++t.heap_len] = 2 > a ? ++a : 0;
                                s[2 * h] = 1,
                                t.depth[h] = 0,
                                t.opt_len--,
                                o && (t.static_len -= n[2 * h + 1])
                            }
                            for (e.max_code = a,
                            i = t.heap_len >> 1; 1 <= i; i--)
                                E(t, s, i);
                            h = r;
                            do {
                                i = t.heap[1],
                                t.heap[1] = t.heap[t.heap_len--],
                                E(t, s, 1),
                                n = t.heap[1],
                                t.heap[--t.heap_max] = i,
                                t.heap[--t.heap_max] = n,
                                s[2 * h] = s[2 * i] + s[2 * n],
                                t.depth[h] = (t.depth[i] >= t.depth[n] ? t.depth[i] : t.depth[n]) + 1,
                                s[2 * i + 1] = s[2 * n + 1] = h,
                                t.heap[1] = h++,
                                E(t, s, 1)
                            } while (2 <= t.heap_len);t.heap[--t.heap_max] = t.heap[1],
                            i = e.dyn_tree,
                            h = e.max_code;
                            var l = e.stat_desc.static_tree
                              , u = e.stat_desc.has_stree
                              , d = e.stat_desc.extra_bits
                              , c = e.stat_desc.extra_base
                              , f = e.stat_desc.max_length
                              , g = 0;
                            for (r = 0; r <= Ut; r++)
                                t.bl_count[r] = 0;
                            for (i[2 * t.heap[t.heap_max] + 1] = 0,
                            n = t.heap_max + 1; n < bt; n++)
                                if (o = t.heap[n],
                                (r = i[2 * i[2 * o + 1] + 1] + 1) > f && (r = f,
                                g++),
                                i[2 * o + 1] = r,
                                !(o > h)) {
                                    t.bl_count[r]++;
                                    var p = 0;
                                    o >= c && (p = d[o - c]);
                                    var _ = i[2 * o];
                                    t.opt_len += _ * (r + p),
                                    u && (t.static_len += _ * (l[2 * o + 1] + p))
                                }
                            if (0 !== g) {
                                do {
                                    for (r = f - 1; 0 === t.bl_count[r]; )
                                        r--;
                                    t.bl_count[r]--,
                                    t.bl_count[r + 1] += 2,
                                    t.bl_count[f]--,
                                    g -= 2
                                } while (0 < g);for (r = f; 0 !== r; r--)
                                    for (o = t.bl_count[r]; 0 !== o; )
                                        (l = t.heap[--n]) > h || (i[2 * l + 1] !== r && (t.opt_len += (r - i[2 * l + 1]) * i[2 * l],
                                        i[2 * l + 1] = r),
                                        o--)
                            }
                            T(s, a, t.bl_count)
                        }
                        function F(t, e, i) {
                            var s, n = -1, o = e[1], r = 0, a = 7, h = 4;
                            for (0 === o && (a = 138,
                            h = 3),
                            e[2 * (i + 1) + 1] = 65535,
                            s = 0; s <= i; s++) {
                                var l = o;
                                o = e[2 * (s + 1) + 1],
                                ++r < a && l === o || (r < h ? t.bl_tree[2 * l] += r : 0 !== l ? (l !== n && t.bl_tree[2 * l]++,
                                t.bl_tree[2 * qt]++) : 10 >= r ? t.bl_tree[2 * Gt]++ : t.bl_tree[2 * Kt]++,
                                r = 0,
                                n = l,
                                0 === o ? (a = 138,
                                h = 3) : l === o ? (a = 6,
                                h = 3) : (a = 7,
                                h = 4))
                            }
                        }
                        function B(t, e, i) {
                            var s, n = -1, o = e[1], r = 0, a = 7, h = 4;
                            for (0 === o && (a = 138,
                            h = 3),
                            s = 0; s <= i; s++) {
                                var l = o;
                                if (o = e[2 * (s + 1) + 1],
                                !(++r < a && l === o)) {
                                    if (r < h)
                                        do {
                                            S(t, l, t.bl_tree)
                                        } while (0 != --r);
                                    else
                                        0 !== l ? (l !== n && (S(t, l, t.bl_tree),
                                        r--),
                                        S(t, qt, t.bl_tree),
                                        k(t, r - 3, 2)) : 10 >= r ? (S(t, Gt, t.bl_tree),
                                        k(t, r - 3, 3)) : (S(t, Kt, t.bl_tree),
                                        k(t, r - 11, 7));
                                    r = 0,
                                    n = l,
                                    0 === o ? (a = 138,
                                    h = 3) : l === o ? (a = 6,
                                    h = 3) : (a = 7,
                                    h = 4)
                                }
                            }
                        }
                        function R(t, e, i) {
                            return t.pending_buf[t.d_buf + 2 * t.last_lit] = e >>> 8 & 255,
                            t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e,
                            t.pending_buf[t.l_buf + t.last_lit] = 255 & i,
                            t.last_lit++,
                            0 === e ? t.dyn_ltree[2 * i]++ : (t.matches++,
                            e--,
                            t.dyn_ltree[2 * (ne[i] + gt + 1)]++,
                            t.dyn_dtree[2 * (256 > e ? se[e] : se[256 + (e >>> 7)])]++),
                            t.last_lit === t.lit_bufsize - 1
                        }
                        function D() {
                            this.input = null,
                            this.total_in = this.avail_in = this.next_in = 0,
                            this.output = null,
                            this.total_out = this.avail_out = this.next_out = 0,
                            this.msg = "",
                            this.state = null,
                            this.data_type = 2,
                            this.adler = 0
                        }
                        function j(t) {
                            if (!(this instanceof j))
                                return new j(t);
                            (t = this.options = J({
                                level: ht,
                                method: ct,
                                chunkSize: 16384,
                                windowBits: 15,
                                memLevel: 8,
                                strategy: ut,
                                to: ""
                            }, t || {})).raw && 0 < t.windowBits ? t.windowBits = -t.windowBits : t.gzip && 0 < t.windowBits && 16 > t.windowBits && (t.windowBits += 16),
                            this.err = 0,
                            this.msg = "",
                            this.ended = !1,
                            this.chunks = [],
                            this.strm = new D,
                            this.strm.avail_out = 0;
                            var i = this.strm
                              , o = t.level
                              , r = t.method
                              , a = t.windowBits
                              , h = t.memLevel
                              , l = t.strategy;
                            if (i) {
                                var u = 1;
                                if (o === ht && (o = 6),
                                0 > a ? (u = 0,
                                a = -a) : 15 < a && (u = 2,
                                a -= 16),
                                1 > h || 9 < h || r !== ct || 8 > a || 15 < a || 0 > o || 9 < o || 0 > l || l > lt)
                                    i = s(i, ot);
                                else {
                                    8 === a && (a = 9);
                                    var d = new function() {
                                        this.strm = null,
                                        this.status = 0,
                                        this.pending_buf = null,
                                        this.wrap = this.pending = this.pending_out = this.pending_buf_size = 0,
                                        this.gzhead = null,
                                        this.gzindex = 0,
                                        this.method = ct,
                                        this.last_flush = -1,
                                        this.w_mask = this.w_bits = this.w_size = 0,
                                        this.window = null,
                                        this.window_size = 0,
                                        this.head = this.prev = null,
                                        this.nice_match = this.good_match = this.strategy = this.level = this.max_lazy_match = this.max_chain_length = this.prev_length = this.lookahead = this.match_start = this.strstart = this.match_available = this.prev_match = this.match_length = this.block_start = this.hash_shift = this.hash_mask = this.hash_bits = this.hash_size = this.ins_h = 0,
                                        this.dyn_ltree = new Uint16Array(2 * bt),
                                        this.dyn_dtree = new Uint16Array(2 * (2 * _t + 1)),
                                        this.bl_tree = new Uint16Array(2 * (2 * vt + 1)),
                                        n(this.dyn_ltree),
                                        n(this.dyn_dtree),
                                        n(this.bl_tree),
                                        this.bl_desc = this.d_desc = this.l_desc = null,
                                        this.bl_count = new Uint16Array(Ut + 1),
                                        this.heap = new Uint16Array(2 * pt + 1),
                                        n(this.heap),
                                        this.heap_max = this.heap_len = 0,
                                        this.depth = new Uint16Array(2 * pt + 1),
                                        n(this.depth),
                                        this.bi_valid = this.bi_buf = this.insert = this.matches = this.static_len = this.opt_len = this.d_buf = this.last_lit = this.lit_bufsize = this.l_buf = 0
                                    }
                                    ;
                                    if (i.state = d,
                                    d.strm = i,
                                    d.wrap = u,
                                    d.gzhead = null,
                                    d.w_bits = a,
                                    d.w_size = 1 << d.w_bits,
                                    d.w_mask = d.w_size - 1,
                                    d.hash_bits = h + 7,
                                    d.hash_size = 1 << d.hash_bits,
                                    d.hash_mask = d.hash_size - 1,
                                    d.hash_shift = ~~((d.hash_bits + mt - 1) / mt),
                                    d.window = new Uint8Array(2 * d.w_size),
                                    d.head = new Uint16Array(d.hash_size),
                                    d.prev = new Uint16Array(d.w_size),
                                    d.lit_bufsize = 1 << h + 6,
                                    d.pending_buf_size = 4 * d.lit_bufsize,
                                    d.pending_buf = new Uint8Array(d.pending_buf_size),
                                    d.d_buf = 1 * d.lit_bufsize,
                                    d.l_buf = 3 * d.lit_bufsize,
                                    d.level = o,
                                    d.strategy = l,
                                    d.method = r,
                                    i && i.state) {
                                        if (i.total_in = i.total_out = 0,
                                        i.data_type = dt,
                                        (o = i.state).pending = 0,
                                        o.pending_out = 0,
                                        0 > o.wrap && (o.wrap = -o.wrap),
                                        o.status = o.wrap ? 42 : 113,
                                        i.adler = 2 === o.wrap ? 0 : 1,
                                        o.last_flush = tt,
                                        !ue) {
                                            for (r = Array(Ut + 1),
                                            h = l = 0; h < ft - 1; h++)
                                                for (oe[h] = l,
                                                a = 0; a < 1 << Xt[h]; a++)
                                                    ne[l++] = h;
                                            for (ne[l - 1] = h,
                                            h = l = 0; 16 > h; h++)
                                                for (re[h] = l,
                                                a = 0; a < 1 << Qt[h]; a++)
                                                    se[l++] = h;
                                            for (l >>= 7; h < _t; h++)
                                                for (re[h] = l << 7,
                                                a = 0; a < 1 << Qt[h] - 7; a++)
                                                    se[256 + l++] = h;
                                            for (a = 0; a <= Ut; a++)
                                                r[a] = 0;
                                            for (a = 0; 143 >= a; )
                                                ee[2 * a + 1] = 8,
                                                a++,
                                                r[8]++;
                                            for (; 255 >= a; )
                                                ee[2 * a + 1] = 9,
                                                a++,
                                                r[9]++;
                                            for (; 279 >= a; )
                                                ee[2 * a + 1] = 7,
                                                a++,
                                                r[7]++;
                                            for (; 287 >= a; )
                                                ee[2 * a + 1] = 8,
                                                a++,
                                                r[8]++;
                                            for (T(ee, pt + 1, r),
                                            a = 0; a < _t; a++)
                                                ie[2 * a + 1] = 5,
                                                ie[2 * a] = C(a, 5);
                                            ae = new I(ee,Xt,gt + 1,pt,Ut),
                                            he = new I(ie,Qt,0,_t,Ut),
                                            le = new I([],$t,0,vt,Vt),
                                            ue = !0
                                        }
                                        o.l_desc = new y(o.dyn_ltree,ae),
                                        o.d_desc = new y(o.dyn_dtree,he),
                                        o.bl_desc = new y(o.bl_tree,le),
                                        o.bi_buf = 0,
                                        o.bi_valid = 0,
                                        x(o),
                                        o = st
                                    } else
                                        o = s(i, ot);
                                    o === st && ((i = i.state).window_size = 2 * i.w_size,
                                    n(i.head),
                                    i.max_lazy_match = wt[i.level].max_lazy,
                                    i.good_match = wt[i.level].good_length,
                                    i.nice_match = wt[i.level].nice_length,
                                    i.max_chain_length = wt[i.level].max_chain,
                                    i.strstart = 0,
                                    i.block_start = 0,
                                    i.lookahead = 0,
                                    i.insert = 0,
                                    i.match_length = i.prev_length = mt - 1,
                                    i.match_available = 0,
                                    i.ins_h = 0),
                                    i = o
                                }
                            } else
                                i = ot;
                            if (i !== st)
                                throw Error(jt[i]);
                            if (t.header && (i = this.strm) && i.state && 2 === i.state.wrap && (i.state.gzhead = t.header),
                            t.dictionary) {
                                if (i = "string" == typeof t.dictionary ? X(t.dictionary) : "[object ArrayBuffer]" === de.call(t.dictionary) ? new Uint8Array(t.dictionary) : t.dictionary,
                                t = this.strm,
                                u = (l = i).length,
                                t && t.state)
                                    if (i = t.state,
                                    2 === (o = i.wrap) || 1 === o && 42 !== i.status || i.lookahead)
                                        i = ot;
                                    else {
                                        for (1 === o && (t.adler = e(t.adler, l, u, 0)),
                                        i.wrap = 0,
                                        u >= i.w_size && (0 === o && (n(i.head),
                                        i.strstart = 0,
                                        i.block_start = 0,
                                        i.insert = 0),
                                        r = new Uint8Array(i.w_size),
                                        Y(r, l, u - i.w_size, i.w_size, 0),
                                        l = r,
                                        u = i.w_size),
                                        r = t.avail_in,
                                        a = t.next_in,
                                        h = t.input,
                                        t.avail_in = u,
                                        t.next_in = 0,
                                        t.input = l,
                                        c(i); i.lookahead >= mt; ) {
                                            l = i.strstart,
                                            u = i.lookahead - (mt - 1);
                                            do {
                                                i.ins_h = (i.ins_h << i.hash_shift ^ i.window[l + mt - 1]) & i.hash_mask,
                                                i.prev[l & i.w_mask] = i.head[i.ins_h],
                                                i.head[i.ins_h] = l,
                                                l++
                                            } while (--u);i.strstart = l,
                                            i.lookahead = mt - 1,
                                            c(i)
                                        }
                                        i.strstart += i.lookahead,
                                        i.block_start = i.strstart,
                                        i.insert = i.lookahead,
                                        i.lookahead = 0,
                                        i.match_length = i.prev_length = mt - 1,
                                        i.match_available = 0,
                                        t.next_in = a,
                                        t.input = h,
                                        t.avail_in = r,
                                        i.wrap = o,
                                        i = st
                                    }
                                else
                                    i = ot;
                                if (i !== st)
                                    throw Error(jt[i]);
                                this._dict_set = !0
                            }
                        }
                        function z(t) {
                            if (!(this instanceof z))
                                return new z(t);
                            var e = this.options = J({
                                chunkSize: 16384,
                                windowBits: 0,
                                to: ""
                            }, t || {});
                            if (e.raw && 0 <= e.windowBits && 16 > e.windowBits && (e.windowBits = -e.windowBits,
                            0 === e.windowBits && (e.windowBits = -15)),
                            !(0 <= e.windowBits && 16 > e.windowBits) || t && t.windowBits || (e.windowBits += 32),
                            15 < e.windowBits && 48 > e.windowBits && 0 == (15 & e.windowBits) && (e.windowBits |= 15),
                            this.err = 0,
                            this.msg = "",
                            this.ended = !1,
                            this.chunks = [],
                            this.strm = new D,
                            this.strm.avail_out = 0,
                            t = this.strm,
                            e = e.windowBits,
                            t) {
                                var i = new function() {
                                    this.mode = 0,
                                    this.last = !1,
                                    this.wrap = 0,
                                    this.havedict = !1,
                                    this.total = this.check = this.dmax = this.flags = 0,
                                    this.head = null,
                                    this.wnext = this.whave = this.wsize = this.wbits = 0,
                                    this.window = null,
                                    this.extra = this.offset = this.length = this.bits = this.hold = 0,
                                    this.distcode = this.lencode = null,
                                    this.have = this.ndist = this.nlen = this.ncode = this.distbits = this.lenbits = 0,
                                    this.next = null,
                                    this.lens = new Uint16Array(320),
                                    this.work = new Uint16Array(288),
                                    this.distdyn = this.lendyn = null,
                                    this.was = this.back = this.sane = 0
                                }
                                ;
                                if (t.state = i,
                                i.window = null,
                                t && t.state) {
                                    var s = t.state;
                                    0 > e ? (i = 0,
                                    e = -e) : (i = 1 + (e >> 4),
                                    48 > e && (e &= 15)),
                                    e && (8 > e || 15 < e) ? e = ot : (null !== s.window && s.wbits !== e && (s.window = null),
                                    s.wrap = i,
                                    s.wbits = e,
                                    t && t.state ? ((e = t.state).wsize = 0,
                                    e.whave = 0,
                                    e.wnext = 0,
                                    t && t.state ? (e = t.state,
                                    t.total_in = t.total_out = e.total = 0,
                                    t.msg = "",
                                    e.wrap && (t.adler = 1 & e.wrap),
                                    e.mode = 1,
                                    e.last = 0,
                                    e.havedict = 0,
                                    e.dmax = 32768,
                                    e.head = null,
                                    e.hold = 0,
                                    e.bits = 0,
                                    e.lencode = e.lendyn = new Int32Array(Mt),
                                    e.distcode = e.distdyn = new Int32Array(Et),
                                    e.sane = 1,
                                    e.back = -1,
                                    e = st) : e = ot) : e = ot)
                                } else
                                    e = ot;
                                e !== st && (t.state = null),
                                t = e
                            } else
                                t = ot;
                            if (t !== Q.Z_OK)
                                throw Error(jt[t]);
                            this.header = new function() {
                                this.os = this.xflags = this.time = this.text = 0,
                                this.extra = null,
                                this.extra_len = 0,
                                this.comment = this.name = "",
                                this.hcrc = 0,
                                this.done = !1
                            }
                            ,
                            e = this.strm,
                            t = this.header,
                            e && e.state && 0 != (2 & (e = e.state).wrap) && (e.head = t,
                            t.done = !1)
                        }
                        function H(t, e) {
                            if (!(t instanceof e))
                                throw new TypeError("Cannot call a class as a function")
                        }
                        h.initSymbol(),
                        h.initSymbol(),
                        h.initSymbolIterator();
                        var P = "function" == typeof Symbol && "symbol" === l(Symbol.iterator) ? function(t) {
                            return void 0 === t ? "undefined" : l(t)
                        }
                        : function(t) {
                            return h.initSymbol(),
                            h.initSymbol(),
                            h.initSymbol(),
                            t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : l(t)
                        }
                          , J = function(t) {
                            for (var e = Array.prototype.slice.call(arguments, 1); e.length; ) {
                                var i = e.shift();
                                if (i) {
                                    if ("object" !== (void 0 === i ? "undefined" : P(i)))
                                        throw new TypeError(i + "must be non-object");
                                    for (var s in i)
                                        i.hasOwnProperty(s) && (t[s] = i[s])
                                }
                            }
                            return t
                        }
                          , Z = function(t, e) {
                            return t.length === e ? t : t.subarray ? t.subarray(0, e) : (t.length = e,
                            t)
                        }
                          , Y = function(t, e, i, s, n) {
                            if (e.subarray && t.subarray)
                                t.set(e.subarray(i, i + s), n);
                            else
                                for (var o = 0; o < s; o++)
                                    t[n + o] = e[i + o]
                        }
                          , V = function(t) {
                            var e, i, s = i = 0;
                            for (e = t.length; s < e; s++)
                                i += t[s].length;
                            var n = new Uint8Array(i);
                            for (s = i = 0,
                            e = t.length; s < e; s++) {
                                var o = t[s];
                                n.set(o, i),
                                i += o.length
                            }
                            return n
                        }
                          , W = !0
                          , q = !0;
                        try {
                            String.fromCharCode.apply(null, [0])
                        } catch (t) {
                            W = !1
                        }
                        try {
                            String.fromCharCode.apply(null, new Uint8Array(1))
                        } catch (t) {
                            q = !1
                        }
                        for (var G = new Uint8Array(256), K = 0; 256 > K; K++)
                            G[K] = 252 <= K ? 6 : 248 <= K ? 5 : 240 <= K ? 4 : 224 <= K ? 3 : 192 <= K ? 2 : 1;
                        G[254] = G[254] = 1;
                        var X = function(t) {
                            var e, i, s = t.length, n = 0;
                            for (e = 0; e < s; e++) {
                                var o = t.charCodeAt(e);
                                if (55296 == (64512 & o) && e + 1 < s) {
                                    var r = t.charCodeAt(e + 1);
                                    56320 == (64512 & r) && (o = 65536 + (o - 55296 << 10) + (r - 56320),
                                    e++)
                                }
                                n += 128 > o ? 1 : 2048 > o ? 2 : 65536 > o ? 3 : 4
                            }
                            var a = new Uint8Array(n);
                            for (e = i = 0; i < n; e++)
                                55296 == (64512 & (o = t.charCodeAt(e))) && e + 1 < s && 56320 == (64512 & (r = t.charCodeAt(e + 1))) && (o = 65536 + (o - 55296 << 10) + (r - 56320),
                                e++),
                                128 > o ? a[i++] = o : (2048 > o ? a[i++] = 192 | o >>> 6 : (65536 > o ? a[i++] = 224 | o >>> 12 : (a[i++] = 240 | o >>> 18,
                                a[i++] = 128 | o >>> 12 & 63),
                                a[i++] = 128 | o >>> 6 & 63),
                                a[i++] = 128 | 63 & o);
                            return a
                        };
                        t = function t(e) {
                            return t(e, e.length)
                        }
                        ;
                        var Q = {
                            Z_NO_FLUSH: 0,
                            Z_PARTIAL_FLUSH: 1,
                            Z_SYNC_FLUSH: 2,
                            Z_FULL_FLUSH: 3,
                            Z_FINISH: 4,
                            Z_BLOCK: 5,
                            Z_TREES: 6,
                            Z_OK: 0,
                            Z_STREAM_END: 1,
                            Z_NEED_DICT: 2,
                            Z_ERRNO: -1,
                            Z_STREAM_ERROR: -2,
                            Z_DATA_ERROR: -3,
                            Z_BUF_ERROR: -5,
                            Z_NO_COMPRESSION: 0,
                            Z_BEST_SPEED: 1,
                            Z_BEST_COMPRESSION: 9,
                            Z_DEFAULT_COMPRESSION: -1,
                            Z_FILTERED: 1,
                            Z_HUFFMAN_ONLY: 2,
                            Z_RLE: 3,
                            Z_FIXED: 4,
                            Z_DEFAULT_STRATEGY: 0,
                            Z_BINARY: 0,
                            Z_TEXT: 1,
                            Z_UNKNOWN: 2,
                            Z_DEFLATED: 8
                        }
                          , $ = function() {
                            for (var t, e = [], i = 0; 256 > i; i++) {
                                t = i;
                                for (var s = 0; 8 > s; s++)
                                    t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
                                e[i] = t
                            }
                            return e
                        }()
                          , tt = 0
                          , et = 4
                          , it = 5
                          , st = 0
                          , nt = 1
                          , ot = -2
                          , rt = -3
                          , at = -5
                          , ht = -1
                          , lt = 4
                          , ut = 0
                          , dt = 2
                          , ct = 8
                          , ft = 29
                          , gt = 256
                          , pt = gt + 1 + ft
                          , _t = 30
                          , vt = 19
                          , bt = 2 * pt + 1
                          , Ut = 15
                          , mt = 3
                          , It = 258
                          , yt = It + mt + 1
                          , wt = [new p(0,0,0,0,function(t, e) {
                            var i = 65535;
                            for (i > t.pending_buf_size - 5 && (i = t.pending_buf_size - 5); ; ) {
                                if (1 >= t.lookahead) {
                                    if (c(t),
                                    0 === t.lookahead && e === tt)
                                        return 1;
                                    if (0 === t.lookahead)
                                        break
                                }
                                t.strstart += t.lookahead,
                                t.lookahead = 0;
                                var s = t.block_start + i;
                                if ((0 === t.strstart || t.strstart >= s) && (t.lookahead = t.strstart - s,
                                t.strstart = s,
                                r(t, !1),
                                0 === t.strm.avail_out))
                                    return 1;
                                if (t.strstart - t.block_start >= t.w_size - yt && (r(t, !1),
                                0 === t.strm.avail_out))
                                    return 1
                            }
                            return t.insert = 0,
                            e === et ? (r(t, !0),
                            0 === t.strm.avail_out ? 3 : 4) : (t.strstart > t.block_start && r(t, !1),
                            1)
                        }
                        ), new p(4,4,8,4,f), new p(4,5,16,8,f), new p(4,6,32,32,f), new p(4,4,16,16,g), new p(8,16,32,32,g), new p(8,16,128,128,g), new p(8,32,128,256,g), new p(32,128,258,1024,g), new p(32,258,258,4096,g)]
                          , kt = 30
                          , St = 12
                          , Ct = 0
                          , Tt = 1
                          , xt = 2;
                        et = 4,
                        it = 5,
                        st = 0,
                        nt = 1,
                        ot = -2,
                        rt = -3,
                        at = -5,
                        ct = 8,
                        St = 12,
                        kt = 30;
                        var Lt, At, Mt = 852, Et = 592, Nt = !0;
                        Mt = 852,
                        Et = 592,
                        Ct = 0,
                        Tt = 1,
                        xt = 2;
                        var Ot = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0]
                          , Ft = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78]
                          , Bt = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0]
                          , Rt = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64]
                          , Dt = function(t, e, i, s, n, o, r, a) {
                            var h, l, u, d, c, f, g, p = a.bits, _ = 0, v = new Uint16Array(16), b = new Uint16Array(16), U = 0;
                            for (h = 0; 15 >= h; h++)
                                v[h] = 0;
                            for (l = 0; l < s; l++)
                                v[e[i + l]]++;
                            var m = p;
                            for (u = 15; 1 <= u && 0 === v[u]; u--)
                                ;
                            if (m > u && (m = u),
                            0 === u)
                                return n[o++] = 20971520,
                                n[o++] = 20971520,
                                a.bits = 1,
                                0;
                            for (p = 1; p < u && 0 === v[p]; p++)
                                ;
                            for (m < p && (m = p),
                            h = d = 1; 15 >= h; h++)
                                if (d <<= 1,
                                0 > (d -= v[h]))
                                    return -1;
                            if (0 < d && (t === Ct || 1 !== u))
                                return -1;
                            for (b[1] = 0,
                            h = 1; 15 > h; h++)
                                b[h + 1] = b[h] + v[h];
                            for (l = 0; l < s; l++)
                                0 !== e[i + l] && (r[b[e[i + l]]++] = l);
                            if (t === Ct)
                                var I = g = r
                                  , y = 19;
                            else
                                t === Tt ? (I = Ot,
                                _ -= 257,
                                g = Ft,
                                U -= 257,
                                y = 256) : (I = Bt,
                                g = Rt,
                                y = -1);
                            l = c = 0,
                            h = p;
                            var w = o;
                            s = m,
                            b = 0;
                            var k = -1
                              , S = 1 << m
                              , C = S - 1;
                            if (t === Tt && S > Mt || t === xt && S > Et)
                                return 1;
                            for (; ; ) {
                                var T = h - b;
                                if (r[l] < y)
                                    var x = 0
                                      , L = r[l];
                                else
                                    r[l] > y ? (x = g[U + r[l]],
                                    L = I[_ + r[l]]) : (x = 96,
                                    L = 0);
                                d = 1 << h - b,
                                p = f = 1 << s;
                                do {
                                    n[w + (c >> b) + (f -= d)] = T << 24 | x << 16 | L | 0
                                } while (0 !== f);for (d = 1 << h - 1; c & d; )
                                    d >>= 1;
                                if (0 !== d ? (c &= d - 1,
                                c += d) : c = 0,
                                l++,
                                0 == --v[h]) {
                                    if (h === u)
                                        break;
                                    h = e[i + r[l]]
                                }
                                if (h > m && (c & C) !== k) {
                                    for (0 === b && (b = m),
                                    w += p,
                                    d = 1 << (s = h - b); s + b < u && !(0 >= (d -= v[s + b])); )
                                        s++,
                                        d <<= 1;
                                    if (S += 1 << s,
                                    t === Tt && S > Mt || t === xt && S > Et)
                                        return 1;
                                    n[k = c & C] = m << 24 | s << 16 | w - o | 0
                                }
                            }
                            return 0 !== c && (n[w + c] = h - b << 24 | 4194304),
                            a.bits = m,
                            0
                        }
                          , jt = {
                            2: "need dictionary",
                            1: "stream end",
                            0: "",
                            "-1": "file error",
                            "-2": "stream error",
                            "-3": "data error",
                            "-4": "insufficient memory",
                            "-5": "buffer error",
                            "-6": "incompatible version"
                        };
                        lt = 4;
                        var zt = 0
                          , Ht = 1;
                        dt = 2;
                        var Pt = 0
                          , Jt = 1
                          , Zt = 2;
                        mt = 3,
                        It = 258,
                        _t = 30,
                        vt = 19,
                        bt = 2 * (pt = 1 + (gt = 256) + (ft = 29)) + 1,
                        Ut = 15;
                        var Yt = 16
                          , Vt = 7
                          , Wt = 256
                          , qt = 16
                          , Gt = 17
                          , Kt = 18
                          , Xt = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
                          , Qt = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
                          , $t = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
                          , te = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
                          , ee = Array(2 * (pt + 2));
                        n(ee);
                        var ie = Array(2 * _t);
                        n(ie);
                        var se = Array(512);
                        n(se);
                        var ne = Array(It - mt + 1);
                        n(ne);
                        var oe = Array(ft);
                        n(oe);
                        var re = Array(_t);
                        n(re);
                        var ae, he, le, ue = !1, de = Object.prototype.toString;
                        tt = 0,
                        et = 4,
                        st = 0,
                        nt = 1,
                        ht = -1,
                        ut = 0,
                        ct = 8,
                        j.prototype.push = function(e, i) {
                            var n = this.strm
                              , o = this.options.chunkSize;
                            if (this.ended)
                                return !1;
                            var r = i === ~~i ? i : !0 === i ? et : tt;
                            "string" == typeof e ? n.input = X(e) : "[object ArrayBuffer]" === de.call(e) ? n.input = new Uint8Array(e) : n.input = e,
                            n.next_in = 0,
                            n.avail_in = n.input.length;
                            do {
                                0 === n.avail_out && (n.output = new Uint8Array(o),
                                n.next_out = 0,
                                n.avail_out = o);
                                var a = _(n, r);
                                if (a !== nt && a !== st)
                                    return this.onEnd(a),
                                    this.ended = !0,
                                    !1;
                                0 !== n.avail_out && (0 !== n.avail_in || r !== et && 2 !== r) || ("string" === this.options.to ? this.onData(t(Z(n.output, n.next_out))) : this.onData(Z(n.output, n.next_out)))
                            } while ((0 < n.avail_in || 0 === n.avail_out) && a !== nt);return r === et ? ((n = this.strm) && n.state ? 42 !== (o = n.state.status) && 69 !== o && 73 !== o && 91 !== o && 103 !== o && 113 !== o && 666 !== o ? a = s(n, ot) : (n.state = null,
                            a = 113 === o ? s(n, rt) : st) : a = ot,
                            this.onEnd(a),
                            this.ended = !0,
                            a === st) : (2 === r && (this.onEnd(st),
                            n.avail_out = 0),
                            !0)
                        }
                        ,
                        j.prototype.onData = function(t) {
                            this.chunks.push(t)
                        }
                        ,
                        j.prototype.onEnd = function(t) {
                            t === st && (this.result = "string" === this.options.to ? this.chunks.join("") : V(this.chunks)),
                            this.chunks = [],
                            this.err = t,
                            this.msg = this.strm.msg
                        }
                        ,
                        de = Object.prototype.toString,
                        z.prototype.push = function(e, i) {
                            var s, n = this.strm, o = this.options.chunkSize, r = this.options.dictionary, a = !1;
                            if (this.ended)
                                return !1;
                            var h = i === ~~i ? i : !0 === i ? Q.Z_FINISH : Q.Z_NO_FLUSH;
                            if ("string" == typeof e) {
                                var l = new Uint8Array(e.length)
                                  , u = 0;
                                for (s = l.length; u < s; u++)
                                    l[u] = e.charCodeAt(u);
                                n.input = l
                            } else
                                "[object ArrayBuffer]" === de.call(e) ? n.input = new Uint8Array(e) : n.input = e;
                            n.next_in = 0,
                            n.avail_in = n.input.length;
                            do {
                                if (0 === n.avail_out && (n.output = new Uint8Array(o),
                                n.next_out = 0,
                                n.avail_out = o),
                                (l = U(n, Q.Z_NO_FLUSH)) === Q.Z_NEED_DICT && r && (l = "string" == typeof r ? X(r) : "[object ArrayBuffer]" === de.call(r) ? new Uint8Array(r) : r,
                                l = m(this.strm, l)),
                                l === Q.Z_BUF_ERROR && !0 === a && (l = Q.Z_OK,
                                a = !1),
                                l !== Q.Z_STREAM_END && l !== Q.Z_OK)
                                    return this.onEnd(l),
                                    this.ended = !0,
                                    !1;
                                if (n.next_out && (0 === n.avail_out || l === Q.Z_STREAM_END || 0 === n.avail_in && (h === Q.Z_FINISH || h === Q.Z_SYNC_FLUSH)))
                                    if ("string" === this.options.to) {
                                        s = n.output;
                                        var d = (d = n.next_out) || s.length;
                                        for (d > s.length && (d = s.length),
                                        u = d - 1; 0 <= u && 128 == (192 & s[u]); )
                                            u--;
                                        u = 0 > u ? d : 0 === u ? d : u + G[s[u]] > d ? u : d,
                                        s = n.next_out - u;
                                        var c, f, g = n.output, p = u || g.length, _ = Array(2 * p);
                                        for (f = c = 0; f < p; ) {
                                            var v = g[f++];
                                            if (128 > v)
                                                _[c++] = v;
                                            else if (4 < (d = G[v]))
                                                _[c++] = 65533,
                                                f += d - 1;
                                            else {
                                                for (v &= 2 === d ? 31 : 3 === d ? 15 : 7; 1 < d && f < p; )
                                                    v = v << 6 | 63 & g[f++],
                                                    d--;
                                                1 < d ? _[c++] = 65533 : 65536 > v ? _[c++] = v : (v -= 65536,
                                                _[c++] = 55296 | v >> 10 & 1023,
                                                _[c++] = 56320 | 1023 & v)
                                            }
                                        }
                                        d = t(_, c),
                                        n.next_out = s,
                                        n.avail_out = o - s,
                                        s && Y(n.output, n.output, u, s, 0),
                                        this.onData(d)
                                    } else
                                        this.onData(Z(n.output, n.next_out));
                                0 === n.avail_in && 0 === n.avail_out && (a = !0)
                            } while ((0 < n.avail_in || 0 === n.avail_out) && l !== Q.Z_STREAM_END);return l === Q.Z_STREAM_END && (h = Q.Z_FINISH),
                            h === Q.Z_FINISH ? ((n = this.strm) && n.state ? ((o = n.state).window && (o.window = null),
                            n.state = null,
                            l = st) : l = ot,
                            this.onEnd(l),
                            this.ended = !0,
                            l === Q.Z_OK) : (h === Q.Z_SYNC_FLUSH && (this.onEnd(Q.Z_OK),
                            n.avail_out = 0),
                            !0)
                        }
                        ,
                        z.prototype.onData = function(t) {
                            this.chunks.push(t)
                        }
                        ,
                        z.prototype.onEnd = function(t) {
                            t === Q.Z_OK && (this.result = "string" === this.options.to ? this.chunks.join("") : V(this.chunks)),
                            this.chunks = [],
                            this.err = t,
                            this.msg = this.strm.msg
                        }
                        ;
                        var ce = function() {
                            this.topSid = this.uid = 0,
                            this.marshal = function(t) {
                                t.setUI32(this.uid),
                                t.setUI32(this.topSid)
                            }
                        };
                        ce = function() {
                            this.topSid = this.uid = 0,
                            this.marshal = function(t) {
                                t.setUI32(this.uid),
                                t.setUI32(this.topSid)
                            }
                        }
                        ;
                        var fe = function() {
                            this.sid = this.uid = 0,
                            this.reason = "",
                            this.mode = this.kickType = this.toChannel = this.admin = this.seconds = 0,
                            this.uinfos = [],
                            this.unmarshal = function(t) {
                                this.uid = t.getUI32(),
                                this.sid = t.getUI32();
                                var e = t.getUI16();
                                this.reason = t.getUTF8(e),
                                this.seconds = t.getUI32(),
                                this.admin = t.getUI32(),
                                this.toChannel = t.getUI32(),
                                this.kickType = t.getUI32(),
                                this.mode = t.getUI8();
                                for (var i = t.getUI32(), s = 0; s < i; ++s) {
                                    var n = {};
                                    n.uid = t.getUI32(),
                                    e = t.getUI16(),
                                    n.nick = t.getUTF8(e),
                                    e = t.getUI16(),
                                    n.sign = t.getUTF8(e),
                                    n.pid = t.getUI32(),
                                    n.jifen = t.getUI32(),
                                    n.sjifen = t.getUI32(),
                                    n.gender = t.getUI8(),
                                    n.rolers = [];
                                    for (var o = t.getUI32(), r = 0; r < o; r++) {
                                        var a = {};
                                        a.cid = t.getUI32(),
                                        a.roler = t.getUI16(),
                                        n.rolers.push(a)
                                    }
                                    for (n.ip = t.getUI32(),
                                    e = t.getUI16(),
                                    n.pcInfo = t.getUTF8(e),
                                    n.extInfo = {},
                                    o = t.getUI32(),
                                    r = 0; r < o; ++r)
                                        a = t.getUI8(),
                                        e = t.getUI16(),
                                        e = t.getUTF8(e),
                                        n.extInfo[a.toString()] = e;
                                    this.uinfos.push(n)
                                }
                            }
                        }
                          , ge = function() {
                            this.fontEffects = 0,
                            this.fontName = "",
                            this.color = 0,
                            this.height = 16,
                            this.msg = "",
                            this.sd = 0,
                            this.marshal = function(t) {
                                t.setUI32(this.fontEffects),
                                t.setUTF8(this.fontName, 32),
                                t.setUI32(this.color),
                                t.setUI32(this.height),
                                t.setUCS2(this.msg, 32),
                                t.setUI32(this.sd)
                            }
                            ,
                            this.unmarshal = function(t) {
                                this.fontEffects = t.getUI32();
                                var e = t.getUI32();
                                this.fontName = t.getUTF8(e),
                                this.color = t.getUI32(),
                                this.height = t.getUI32(),
                                e = t.getUI32(),
                                this.msg = t.getUCS2(e),
                                this.sd = t.getUI32()
                            }
                        }
                          , pe = function() {
                            this.subSid = this.topSid = this.from = 0,
                            this.chat = null,
                            this.nick = this.reserve2 = this.reserve1 = "",
                            this.yyid = 0,
                            this.extra = {},
                            this.marshal = function(t) {
                                t.setUI32(this.from),
                                t.setUI32(this.topSid),
                                t.setUI32(this.subSid);
                                var e = new xe(null,0,0,0,0);
                                t.save(e),
                                t.setUI16(0),
                                t.setMarshal(this.chat);
                                var i = new xe(null,0,0,0,0);
                                for (t.save(i),
                                t.restore(e),
                                t.setUI32(i.length - e.length - 2),
                                t.restore(i),
                                t.setUTF8(this.reserve1, 16),
                                t.setUTF8(this.reserve2, 16),
                                t.setUTF8(this.nick, 16),
                                e = Object.keys(this.extra),
                                t.setUI32(e.length),
                                i = 0; i < e.length; ++i)
                                    t.setUI16(parseInt(e[i])),
                                    t.setUTF8(this.extra[e[i]], 16)
                            }
                            ,
                            this.unmarshal = function(t) {
                                this.from = t.getUI32(),
                                this.topSid = t.getUI32(),
                                this.subSid = t.getUI32(),
                                t.getUI16(),
                                this.chat = new ge,
                                t.getMarshal(this.chat);
                                var e = t.getUI16();
                                this.reserve1 = t.getUTF8(e),
                                e = t.getUI16(),
                                this.reserve2 = t.getUTF8(e),
                                e = t.getUI16(),
                                this.nick = t.getUTF8(e);
                                for (var i = t.getUI32(), s = 0; s < i; ++s) {
                                    var n = t.getUI16();
                                    e = t.getUI16(),
                                    e = t.getUTF8(e),
                                    this.extra[n.toString()] = e
                                }
                                this.yyid = this.extra[4]
                            }
                        }
                          , _e = function() {
                            this.us = {},
                            this.unmarshal = function(t) {
                                for (var e = t.getUI32(), i = 0; i < e; ++i)
                                    for (var s = t.getUI32(), n = 0; n < s; ++n) {
                                        var o = t.getUI32()
                                          , r = t.getUI32();
                                        void 0 === this.us[o.toString()] && (this.us[o.toString()] = []),
                                        this.us[o.toString()].push(r)
                                    }
                            }
                        }
                          , ve = function() {
                            this.uid = 0,
                            this.disable = !1,
                            this.mode = this.admin = this.subSid = 0,
                            this.uinfos = [],
                            this.reason = "",
                            this.unmarshal = function(t) {
                                this.uid = t.getUI32(),
                                this.disable = t.getUI8(),
                                this.subSid = t.getUI32(),
                                this.admin = t.getUI32(),
                                this.mode = t.getUI8()
                            }
                        }
                          , be = function() {
                            this.from = "",
                            this.res_code = this.ruri = 0,
                            this.payload = "",
                            this.uid = this.appid = this.realUri = 0,
                            this.vecProxyId = [],
                            this.vecS2SId = [],
                            this.routeNum = this.clientPort = this.clientIp = this.codec = 0,
                            this.srvName = "",
                            this.clientFromType = 0,
                            this.clientFromExt = "",
                            this.extentProps = {},
                            this.clientCtx = "",
                            this.marshal = function(t) {
                                t.setUTF8(this.from, 16),
                                t.setUI32(this.ruri),
                                t.setUI16(this.res_code),
                                t.packPayload(this.payload, 32);
                                var e = new xe(null,0,0,0,0);
                                t.save(e),
                                t.setUI32(0),
                                t.setUI32(16777224),
                                t.setUI32(this.realUri),
                                t.setUI32(33554448),
                                t.setUI32(this.appid),
                                t.setUI32(this.uid),
                                t.setUI32(0);
                                var i = 8 * this.vecProxyId.length + 12 + 8 * this.vecS2SId.length;
                                t.setUI32(67108864 | 16777215 & i),
                                t.setUI32(this.vecProxyId.length);
                                for (var s = 0; s < this.vecProxyId.length; ++s)
                                    t.setUI64(this.vecProxyId[s]);
                                for (t.setUI32(this.vecS2SId.length),
                                s = 0; s < this.vecS2SId.length; ++s)
                                    t.setUI64(this.vecS2SId[s]);
                                t.setUI32(83886088),
                                t.setUI32(this.codec),
                                i = 16 + Te.sizeof(this.srvName) + 4 + 2 + Te.sizeof(this.clientFromExt),
                                t.setUI32(100663296 | 16777215 & i),
                                t.setUI32(this.clientIp),
                                t.setUI16(this.clientPort),
                                t.setUI32(this.routeNum),
                                t.setUTF8(this.srvName, 16),
                                t.setUI32(this.clientFromType),
                                t.setUTF8(this.clientFromExt, 16),
                                i = 8;
                                var n = Object.keys(this.extentProps);
                                for (s = 0; s < n.length; ++s)
                                    i += 4,
                                    i += 2 + this.extentProps[n[s]].byteLength;
                                for (t.setUI32(117440512 | 16777215 & i),
                                t.setUI32(n.length),
                                s = 0; s < n.length; ++s)
                                    t.setUI32(parseInt(n[s])),
                                    t.setBytes(this.extentProps[n[s]], 16);
                                i = 6 + Te.sizeof(this.clientCtx),
                                t.setUI32(134217728 | 16777215 & i),
                                t.setUTF8(this.clientCtx, 16),
                                t.setUI32(4286085240),
                                s = new xe(null,0,0,0,0),
                                t.save(s),
                                t.restore(e),
                                i = 0 | s.length - e.length - 4 & 268435455,
                                t.setUI32(i),
                                t.restore(s)
                            }
                            ,
                            this.unmarshal = function(t) {
                                var e = t.getUI16();
                                for (this.from = t.getUTF8(e),
                                this.ruri = t.getUI32(),
                                this.res_code = t.getUI16(),
                                e = t.getUI32(),
                                this.payload = t.getBytes(e),
                                t.getUI32(),
                                e = (e = t.getUI32()) >> 24 & 255; 255 != e; ) {
                                    switch (e) {
                                    case 1:
                                        this.realUri = t.getUI32();
                                        break;
                                    case 2:
                                        this.appid = t.getUI32(),
                                        this.uid = t.getUI32(),
                                        t.getUI32();
                                        break;
                                    case 4:
                                        var i = t.getUI32();
                                        for (e = 0; e < i; ++e)
                                            this.vecProxyId.push(t.getUI64());
                                        for (i = t.getUI32(),
                                        e = 0; e < i; ++e)
                                            this.vecS2SId.push(t.getUI64());
                                        break;
                                    case 5:
                                        this.codec = t.getUI32();
                                        break;
                                    case 6:
                                        this.clientIp = t.getUI32(),
                                        this.clientPort = t.getUI16(),
                                        this.routeNum = t.getUI32(),
                                        e = t.getUI16(),
                                        this.srvName = t.getUTF8(e),
                                        this.clientFromType = t.getUI32(),
                                        e = t.getUI16(),
                                        this.clientFromExt = t.getUTF8(e);
                                        break;
                                    case 7:
                                        for (i = t.getUI32(),
                                        e = 0; e < i; ++e) {
                                            var s = t.getUI32()
                                              , n = t.getUI16();
                                            n = t.getBytes(n),
                                            this.extentProps[s.toString()] = n
                                        }
                                        break;
                                    case 8:
                                        e = t.getUI16(),
                                        this.clientCtx = t.getUTF8(e)
                                    }
                                    e = (e = t.getUI32()) >> 24 & 255
                                }
                            }
                        }
                          , Ue = function() {
                            this.uid = 0,
                            this.grpIdSet = [],
                            this.extraInfo = "",
                            this.marshal = function(t) {
                                t.setUI32(this.uid),
                                t.setUI32(0),
                                t.setUI32(this.grpIdSet.length);
                                for (var e = 0; e < this.grpIdSet.length; ++e)
                                    t.setUI32(this.grpIdSet[e].grpTypeLow),
                                    t.setUI32(this.grpIdSet[e].grpTypeHigh),
                                    t.setUI32(this.grpIdSet[e].grpIdLow),
                                    t.setUI32(this.grpIdSet[e].grpIdHigh);
                                t.setUTF8(this.extraInfo, 16)
                            }
                            ,
                            this.unmarshal = function(t) {
                                this.uid = t.getUI32(),
                                t.getUI32();
                                for (var e = t.getUI32(), i = 0; i < e; ++i) {
                                    var s = {};
                                    s.grpType = t.getUI64(),
                                    s.grpId = t.getUI64(),
                                    this.grpIdSet.push(s)
                                }
                                e = t.getUI16(),
                                this.extraInfo = t.getUTF8(e)
                            }
                        }
                          , me = function() {
                            this.grpId = this.grpType = "",
                            this.appid = 0,
                            this.srvId = this.seqNum = this.msg = "",
                            this.ruri = 0,
                            this.subSvcName = "",
                            this.unmarshal = function(t) {
                                this.grpType = t.getUI64(),
                                this.grpId = t.getUI64(),
                                this.appid = t.getUI32();
                                var e = t.getUI32();
                                this.msg = new Uint8Array(t.getBytes(e)),
                                t.empty() || (this.seqNum = t.getUI64()),
                                t.empty() || (this.srvId = t.getUI64()),
                                t.empty() || (this.ruri = t.getUI32()),
                                t.empty() || (e = t.getUI16(),
                                this.subSvcName = t.getUTF8(e))
                            }
                        }
                          , Ie = function() {
                            this.uid = 0,
                            this.appids = [],
                            this.marshal = function(t) {
                                t.setUI32(this.uid),
                                t.setUI32(0),
                                t.setUI32(this.appids.length);
                                for (var e = 0; e < this.appids.length; ++e)
                                    t.setUI32(this.appids[e])
                            }
                        }
                          , ye = function() {
                            this.uid = 0,
                            this.sign = this.nick = "",
                            this.gender = 1,
                            this.yyid = 0,
                            this.sname = "",
                            this.unmarshal = function(t) {
                                this.uid = t.getUI32();
                                var e = t.getUI16();
                                this.nick = t.getUTF8(e),
                                e = t.getUI16(),
                                this.sign = t.getUTF8(e),
                                this.yyid = t.getUI32(),
                                e = t.getUI16(),
                                this.sname = t.getUTF8(e),
                                this.gender = t.getUI8()
                            }
                        }
                          , we = function() {
                            this.props = {},
                            this.unmarshal = function(t) {
                                for (var e = t.getUI32(), i = 0; i < e; ++i) {
                                    var s = t.getUI8()
                                      , n = t.getUI32();
                                    5 == s ? this.props.contribution = n : 3 == s && (this.props.subSid = n)
                                }
                                for (e = t.getUI32(),
                                i = 0; i < e; ++i)
                                    if (s = t.getUI8(),
                                    n = t.getUI16(),
                                    n = t.getBytes(n),
                                    17 == s) {
                                        this.props.role = [],
                                        s = new Le(n),
                                        n = s.getUI32();
                                        for (var o = 0; o < n; ++o) {
                                            var r = s.getUI32()
                                              , a = s.getUI16();
                                            this.props.role.push({
                                                subSid: r,
                                                role: a
                                            })
                                        }
                                    } else
                                        18 == s && (this.props.nick = Te.decode(n))
                            }
                        }
                          , ke = function() {
                            function t(t, e) {
                                for (var i = 0; i < e.length; i++) {
                                    var s = e[i];
                                    s.enumerable = s.enumerable || !1,
                                    s.configurable = !0,
                                    "value"in s && (s.writable = !0),
                                    Object.defineProperty(t, s.key, s)
                                }
                            }
                            return function(e, i, s) {
                                return i && t(e.prototype, i),
                                s && t(e, s),
                                e
                            }
                        }()
                          , Se = function() {
                            function t() {
                                H(this, t)
                            }
                            return ke(t, null, [{
                                key: "read",
                                value: function(t, e, i, s, n) {
                                    var o = 8 * n - s - 1
                                      , r = (1 << o) - 1
                                      , a = r >> 1
                                      , h = -7;
                                    n = i ? n - 1 : 0;
                                    var l = i ? -1 : 1
                                      , u = t[e + n];
                                    for (n += l,
                                    i = u & (1 << -h) - 1,
                                    u >>= -h,
                                    h += o; 0 < h; i = 256 * i + t[e + n],
                                    n += l,
                                    h -= 8)
                                        ;
                                    for (o = i & (1 << -h) - 1,
                                    i >>= -h,
                                    h += s; 0 < h; o = 256 * o + t[e + n],
                                    n += l,
                                    h -= 8)
                                        ;
                                    if (0 === i)
                                        i = 1 - a;
                                    else {
                                        if (i === r)
                                            return o ? NaN : 1 / 0 * (u ? -1 : 1);
                                        o += Math.pow(2, s),
                                        i -= a
                                    }
                                    return (u ? -1 : 1) * o * Math.pow(2, i - s)
                                }
                            }, {
                                key: "write",
                                value: function(t, e, i, s, n, o) {
                                    var r, a = 8 * o - n - 1, h = (1 << a) - 1, l = h >> 1, u = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                                    o = s ? 0 : o - 1;
                                    var d = s ? 1 : -1
                                      , c = 0 > e || 0 === e && 0 > 1 / e ? 1 : 0;
                                    for (e = Math.abs(e),
                                    isNaN(e) || 1 / 0 === e ? (e = isNaN(e) ? 1 : 0,
                                    s = h) : (s = Math.floor(Math.log(e) / Math.LN2),
                                    1 > e * (r = Math.pow(2, -s)) && (s--,
                                    r *= 2),
                                    2 <= (e = 1 <= s + l ? e + u / r : e + u * Math.pow(2, 1 - l)) * r && (s++,
                                    r /= 2),
                                    s + l >= h ? (e = 0,
                                    s = h) : 1 <= s + l ? (e = (e * r - 1) * Math.pow(2, n),
                                    s += l) : (e = e * Math.pow(2, l - 1) * Math.pow(2, n),
                                    s = 0)); 8 <= n; t[i + o] = 255 & e,
                                    o += d,
                                    e /= 256,
                                    n -= 8)
                                        ;
                                    for (s = s << n | e,
                                    a += n; 0 < a; t[i + o] = 255 & s,
                                    o += d,
                                    s /= 256,
                                    a -= 8)
                                        ;
                                    t[i + o - d] |= 128 * c
                                }
                            }]),
                            t
                        }()
                          , Ce = function() {
                            function t() {
                                H(this, t)
                            }
                            return ke(t, null, [{
                                key: "sizeof",
                                value: function(t) {
                                    return 2 * t.length
                                }
                            }, {
                                key: "encode",
                                value: function(e) {
                                    for (var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1, s = 0, n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null) || new Uint8Array(t.sizeof(e)), o = 0; o < e.length; ++o) {
                                        var r = e.charCodeAt(o);
                                        1 === i ? (n[s++] = r,
                                        n[s++] = r >> 8) : (n[s++] = r >> 8,
                                        n[s++] = r)
                                    }
                                    return n
                                }
                            }, {
                                key: "decode",
                                value: function(t) {
                                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 1;
                                    if (1 == (1 & t.length))
                                        throw new RangeError("Invalid buffer length.");
                                    for (var i, s = "", n = 0; n < t.length; n += 2)
                                        i = 1 === e ? t[n] | t[n + 1] << 8 : t[n] << 8 | t[n + 1],
                                        s += String.fromCharCode(i);
                                    return s
                                }
                            }]),
                            t
                        }()
                          , Te = function() {
                            function t() {
                                H(this, t)
                            }
                            return ke(t, null, [{
                                key: "sizeof",
                                value: function(t) {
                                    for (var e = 0, i = 0; i < t.length; ++i) {
                                        var s = t.charCodeAt(i);
                                        if (55296 <= s && 56319 >= s && i + 1 < t.length) {
                                            var n = t.charCodeAt(i + 1);
                                            if (56320 <= n && 57343 >= n) {
                                                ++i,
                                                e += 4;
                                                continue
                                            }
                                        }
                                        e += 127 >= s ? 1 : 2047 >= s ? 2 : 3
                                    }
                                    return e
                                }
                            }, {
                                key: "encode",
                                value: function(e) {
                                    for (var i = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null) || new Uint8Array(t.sizeof(e)), s = 0, n = 0; n < e.length; ++n) {
                                        var o = e.charCodeAt(n);
                                        if (55296 <= o && 56319 >= o && n + 1 < e.length) {
                                            var r = e.charCodeAt(n + 1);
                                            56320 <= r && 57343 >= r && (++n,
                                            o = 65536 + ((1023 & o) << 10 | 1023 & r))
                                        }
                                        55296 <= o && 57343 >= o && (o = 65533),
                                        127 >= o ? i[s++] = o : (2047 >= o ? i[s++] = 192 + (o >>> 6) : (65535 >= o ? i[s++] = 224 + (o >>> 12) : (i[s++] = 240 + (o >>> 18),
                                        i[s++] = 128 + (o >>> 12 & 63)),
                                        i[s++] = 128 + (o >>> 6 & 63)),
                                        i[s++] = 128 + (63 & o))
                                    }
                                    return i
                                }
                            }, {
                                key: "decode",
                                value: function(t) {
                                    for (var e = "", i = 0; i < t.length; ++i) {
                                        var s = t[i];
                                        if (128 <= s) {
                                            var n = 0;
                                            if (194 > s || 244 < s)
                                                s = 65533;
                                            else
                                                switch (!0) {
                                                case 240 == (240 & s):
                                                    i + 2 >= t.length ? (s = 65533,
                                                    n = 0) : (n = t[i + 1],
                                                    240 == s && 144 > n || 244 == s && 143 < n ? (s = 65533,
                                                    n = 0) : (s &= 7,
                                                    n = 3));
                                                    break;
                                                case 224 == (224 & s):
                                                    i + 2 >= t.length ? (s = 65533,
                                                    n = 0) : (n = t[i + 1],
                                                    224 == s && 160 > n || 237 == s && 159 < n ? (s = 65533,
                                                    n = 0) : (s &= 15,
                                                    n = 2));
                                                    break;
                                                case 192 == (192 & s):
                                                    i + 1 >= t.length ? (s = 65533,
                                                    n = 0) : (s &= 31,
                                                    n = 1);
                                                    break;
                                                default:
                                                    s = 65533
                                                }
                                            for (var o = i, r = 1; r <= n; ++r) {
                                                var a = t[r + o];
                                                if (!(128 <= a && 191 >= a)) {
                                                    s = 65533;
                                                    break
                                                }
                                                ++i,
                                                s = s << 6 | 63 & a
                                            }
                                        }
                                        65536 <= s ? e += String.fromCharCode(55232 + (s >> 10), 56320 + (1023 & s)) : 65279 != s && (e += String.fromCharCode(s))
                                    }
                                    return e
                                }
                            }]),
                            t
                        }()
                          , xe = function t() {
                            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null
                              , i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0
                              , s = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0
                              , n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0
                              , o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0;
                            H(this, t),
                            this.buffer = e,
                            this.points = i,
                            this.offlen = s,
                            this.offset = n,
                            this.length = o
                        }
                          , Le = function() {
                            function t() {
                                H(this, t),
                                this._buffer = t.from.apply(t, arguments),
                                this._offlen = this._offset = 0,
                                this._length = this._buffer.length,
                                this._chunks = [this._buffer],
                                this._points = 0,
                                this._totals = this._buffer.length,
                                this._endian = t.LITTLE_ENDIAN
                            }
                            return ke(t, null, [{
                                key: "from",
                                value: function() {
                                    var t = 0 >= arguments.length ? void 0 : arguments[0];
                                    if (0 == arguments.length || null === t || void 0 === t)
                                        return new Uint8Array(0);
                                    if ("number" == typeof t || Array.isArray(t))
                                        return new Uint8Array(t);
                                    if (t instanceof ArrayBuffer) {
                                        var e = 1 >= arguments.length ? null : arguments[1]
                                          , i = 2 >= arguments.length ? void 0 : arguments[2];
                                        return null != e && null != i ? new Uint8Array(t,e,i) : null != e ? new Uint8Array(t,e) : null != i ? new Uint8Array(t,0,i) : new Uint8Array(t)
                                    }
                                    return t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Uint16Array || t instanceof Uint32Array || t instanceof Int8Array || t instanceof Int16Array || t instanceof Int32Array || t instanceof Float32Array || t instanceof Float64Array || t instanceof DataView ? new Uint8Array(t.buffer,t.byteOffset,t.byteLength) : new Uint8Array(t >> 0)
                                }
                            }, {
                                key: "dispose",
                                value: function() {
                                    t.__SWAP_ARRAY__ = new Uint8Array(32)
                                }
                            }]),
                            ke(t, [{
                                key: "alloc",
                                value: function(e) {
                                    this._totals >= e || (e = new Uint8Array(t.__CHUNK_SIZE__ * Math.ceil((e - this._totals) / t.__CHUNK_SIZE__)),
                                    this._chunks.push(e),
                                    this._totals += e.length,
                                    this.position = this.position)
                                }
                            }, {
                                key: "reset",
                                value: function() {
                                    this._chunks = [this._buffer = new Uint8Array(0)],
                                    this._totals = this._points = this._length = this._offlen = this._offset = 0
                                }
                            }, {
                                key: "save",
                                value: function() {
                                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                                    return t ? (t.buffer = this._buffer,
                                    t.points = this._points,
                                    t.offlen = this._offlen,
                                    t.offset = this._offset,
                                    t.length = this._length,
                                    t) : new xe(this._buffer,this._points,this._offlen,this._offset,this._length)
                                }
                            }, {
                                key: "restore",
                                value: function(t) {
                                    if (t.buffer !== this._chunks[t.points])
                                        throw Error("Invaild buffer state");
                                    this._offlen = t.offlen,
                                    this._offset = t.offset,
                                    this._points = t.points,
                                    this._length = t.length,
                                    this._buffer = this._chunks[this._points],
                                    this.position = this.position
                                }
                            }, {
                                key: "push",
                                value: function() {
                                    var e = t.from.apply(t, arguments);
                                    0 < e.length && (this.reduce(),
                                    this._chunks.push(e),
                                    this._length += e.length,
                                    this._totals += e.length,
                                    this.position = this.position)
                                }
                            }, {
                                key: "reduce",
                                value: function() {
                                    this._totals > this._length && (this._totals = this._length,
                                    this._chunks = this.chunks,
                                    this._chunks.length || this._chunks.push(new Uint8Array(0)),
                                    this._offset = this.position,
                                    this._points = this._offlen = 0,
                                    this._buffer = this._chunks[0],
                                    this._onval(this._offset))
                                }
                            }, {
                                key: "concat",
                                value: function() {
                                    this._offset = this._offlen + this._offset,
                                    this._points = this._offlen = 0;
                                    var t = this.chunks
                                      , e = 0;
                                    if (1 == t.length)
                                        this._buffer = t[0],
                                        this._chunks = [this._buffer];
                                    else {
                                        this._buffer = new Uint8Array(this._length),
                                        this._chunks = [this._buffer];
                                        for (var i = 0; i < t.length; ++i)
                                            this._buffer.set(t[i], (e += t[i].length) - t[i].length)
                                    }
                                }
                            }, {
                                key: "toArrayBuffer",
                                value: function() {
                                    return this.concat(),
                                    this._buffer.buffer.slice(0, this._length)
                                }
                            }, {
                                key: "toTypedBuffer",
                                value: function() {
                                    return this.concat(),
                                    this._buffer.subarray(0, this._length)
                                }
                            }, {
                                key: "empty",
                                value: function() {
                                    return 0 == this._length - this._offset
                                }
                            }, {
                                key: "compress",
                                value: function() {
                                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : t.ZLIB
                                      , i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                                    if (e === t.LZMA)
                                        throw Error('The "LZMA" algorithm does not supported');
                                    e === t.DEFLATE && ((i = i || {}).raw = !0),
                                    e = this.avails;
                                    var s = []
                                      , n = new j(i);
                                    for (n.onData = function(t) {
                                        s.push(t)
                                    }
                                    ,
                                    n.onEnd = function(t) {
                                        if (t)
                                            throw Error(n.strm.msg || t)
                                    }
                                    ,
                                    i = 0; i < e.length; ++i)
                                        n.push(e[i], i == e.length - 1);
                                    return s
                                }
                            }, {
                                key: "decompress",
                                value: function() {
                                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : t.ZLIB
                                      , i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                                    if (e === t.LZMA)
                                        throw Error('The "LZMA" algorithm does not supported');
                                    e === t.DEFLATE && ((i = i || {}).raw = !0),
                                    e = this.avails;
                                    var s = []
                                      , n = new z(i);
                                    for (n.onData = function(t) {
                                        s.push(t)
                                    }
                                    ,
                                    n.onEnd = function(t) {
                                        if (t)
                                            throw Error(n.strm.msg || t)
                                    }
                                    ,
                                    i = 0; i < e.length; ++i)
                                        n.push(e[i], i == e.length - 1);
                                    return s
                                }
                            }, {
                                key: "dump",
                                value: function() {
                                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 256;
                                    if (0 > t || 256 < t)
                                        throw new RangeError('Dump "size" must be positive value and less than "256"');
                                    var e = "[Buffer remain=" + this.remain + ", position=" + this.position + ", length=" + this.length + "]\n";
                                    e = e + "  Properties:\n    _points: " + this._points + "\n",
                                    e += "    _offset: " + this._offset + "\n",
                                    e += "    _offlen: " + this._offlen + "\n",
                                    e += "    _length: " + this._length + "\n",
                                    e += "    _totals: " + this._totals + "\n",
                                    e += "  Chunks(" + this._chunks.length + "):\n";
                                    for (var i = 0; i < this._chunks.length; ++i)
                                        e += "    [" + i + "]: " + this._chunks[i].length + " bytes\n";
                                    if (0 < t) {
                                        e += ".======================================================.\n| RC | 00 01 02 03 04 05 06 07 08 09 0a 0b 0c 0d 0e 0f |\n|------------------------------------------------------|\n";
                                        var s = [];
                                        for (i = this.save(); t-- && this.remain; )
                                            s.push(("0" + this.getUI8().toString(16)).slice(-2));
                                        for (this.restore(i),
                                        i = (16 - s.length % 16) % 16; 0 < i; --i)
                                            s.push("  ");
                                        for (t = i = 0; i + 16 <= s.length; i += 16,
                                        ++t)
                                            e += "| " + ("0" + t.toString(16)).slice(-2) + " | ",
                                            e += s.slice(i, i + 16).join(" "),
                                            e += " |\n";
                                        0 >= s.length && (e += "| 00 | No values                                       |\n"),
                                        e += "'======================================================'\n"
                                    }
                                    return e
                                }
                            }, {
                                key: "_onget",
                                value: function(t) {
                                    if (t > this.remain)
                                        throw new RangeError("Offset is outside the bounds of the buffer")
                                }
                            }, {
                                key: "_onset",
                                value: function(t) {
                                    t > this.remain && (this.length = this.position + t)
                                }
                            }, {
                                key: "_onval",
                                value: function(t) {
                                    for (; this._offset >= this._buffer.length && this._points + 1 < this._chunks.length; ) {
                                        var e = this._buffer.length;
                                        this._offlen += e,
                                        this._offset -= e,
                                        this._buffer = this._chunks[++this._points]
                                    }
                                    return t
                                }
                            }, {
                                key: "_slice",
                                value: function() {
                                    for (var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0, i = [], s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0; 0 < e && s < this._chunks.length; ++s,
                                    e -= o) {
                                        var n = this._chunks[s];
                                        if (0 == t) {
                                            var o = n.length;
                                            n = o <= e ? n : n.subarray(0, e)
                                        } else
                                            o = n.length - t,
                                            n = o <= e ? n.subarray(t) : n.subarray(t, t + e),
                                            t = 0;
                                        0 < n.length && i.push(n)
                                    }
                                    return i
                                }
                            }, {
                                key: "getBool",
                                value: function() {
                                    return this._onget(1),
                                    !!this._onval(this._buffer[this._offset++])
                                }
                            }, {
                                key: "setBool",
                                value: function(t) {
                                    this._onset(1),
                                    this._onval(this._buffer[this._offset++] = t ? 1 : 0)
                                }
                            }, {
                                key: "getUI8",
                                value: function() {
                                    return this._onget(1),
                                    this._onval(this._buffer[this._offset++])
                                }
                            }, {
                                key: "setUI8",
                                value: function(t) {
                                    this._onset(1),
                                    this._onval(this._buffer[this._offset++] = t)
                                }
                            }, {
                                key: "getSI8",
                                value: function() {
                                    return this._onget(1),
                                    this._onval(this._buffer[this._offset++]) << 24 >> 24
                                }
                            }, {
                                key: "setSI8",
                                value: function(t) {
                                    this._onset(1),
                                    this._onval(this._buffer[this._offset++] = t)
                                }
                            }, {
                                key: "getUI16",
                                value: function() {
                                    this._onget(2);
                                    var e = this._onval(this._buffer[this._offset++])
                                      , i = this._onval(this._buffer[this._offset++]);
                                    return this._endian === t.LITTLE_ENDIAN ? e | i << 8 : i | e << 8
                                }
                            }, {
                                key: "setUI16",
                                value: function(e) {
                                    this._onset(2),
                                    this._endian === t.LITTLE_ENDIAN ? (this._onval(this._buffer[this._offset++] = e),
                                    this._onval(this._buffer[this._offset++] = e >> 8)) : (this._onval(this._buffer[this._offset++] = e >> 8),
                                    this._onval(this._buffer[this._offset++] = e))
                                }
                            }, {
                                key: "getSI16",
                                value: function() {
                                    this._onget(2);
                                    var e = this._onval(this._buffer[this._offset++])
                                      , i = this._onval(this._buffer[this._offset++]);
                                    return this._endian === t.LITTLE_ENDIAN ? (e | i << 8) << 16 >> 16 : (i | e << 8) << 16 >> 16
                                }
                            }, {
                                key: "setSI16",
                                value: function(e) {
                                    this._onset(2),
                                    this._endian === t.LITTLE_ENDIAN ? (this._onval(this._buffer[this._offset++] = e),
                                    this._onval(this._buffer[this._offset++] = e >> 8)) : (this._onval(this._buffer[this._offset++] = e >> 8),
                                    this._onval(this._buffer[this._offset++] = e))
                                }
                            }, {
                                key: "getUI24",
                                value: function() {
                                    this._onget(3);
                                    var e = this._onval(this._buffer[this._offset++])
                                      , i = this._onval(this._buffer[this._offset++])
                                      , s = this._onval(this._buffer[this._offset++]);
                                    return this._endian === t.LITTLE_ENDIAN ? e | i << 8 | s << 16 : s | i << 8 | e << 16
                                }
                            }, {
                                key: "setUI24",
                                value: function(e) {
                                    this._onset(3),
                                    this._endian === t.LITTLE_ENDIAN ? (this._onval(this._buffer[this._offset++] = e),
                                    this._onval(this._buffer[this._offset++] = e >> 8),
                                    this._onval(this._buffer[this._offset++] = e >> 16)) : (this._onval(this._buffer[this._offset++] = e >> 16),
                                    this._onval(this._buffer[this._offset++] = e >> 8),
                                    this._onval(this._buffer[this._offset++] = e))
                                }
                            }, {
                                key: "getUI32",
                                value: function() {
                                    this._onget(4);
                                    var e = this._onval(this._buffer[this._offset++])
                                      , i = this._onval(this._buffer[this._offset++])
                                      , s = this._onval(this._buffer[this._offset++])
                                      , n = this._onval(this._buffer[this._offset++]);
                                    return this._endian === t.LITTLE_ENDIAN ? (e | i << 8 | s << 16 | n << 24) >>> 0 : (n | s << 8 | i << 16 | e << 24) >>> 0
                                }
                            }, {
                                key: "setUI32",
                                value: function(e) {
                                    this._onset(4),
                                    this._endian === t.LITTLE_ENDIAN ? (this._onval(this._buffer[this._offset++] = e),
                                    this._onval(this._buffer[this._offset++] = e >> 8),
                                    this._onval(this._buffer[this._offset++] = e >> 16),
                                    this._onval(this._buffer[this._offset++] = e >> 24)) : (this._onval(this._buffer[this._offset++] = e >> 24),
                                    this._onval(this._buffer[this._offset++] = e >> 16),
                                    this._onval(this._buffer[this._offset++] = e >> 8),
                                    this._onval(this._buffer[this._offset++] = e))
                                }
                            }, {
                                key: "getUI64",
                                value: function() {
                                    this._onget(8);
                                    var t = this._onval(this._buffer[this._offset++])
                                      , e = this._onval(this._buffer[this._offset++])
                                      , i = this._onval(this._buffer[this._offset++])
                                      , s = this._onval(this._buffer[this._offset++])
                                      , n = this._onval(this._buffer[this._offset++])
                                      , o = this._onval(this._buffer[this._offset++])
                                      , r = this._onval(this._buffer[this._offset++])
                                      , a = this._onval(this._buffer[this._offset++]);
                                    return t.toString(16) + ":" + e.toString(16) + ":" + i.toString(16) + ":" + s.toString(16) + ":" + n.toString(16) + ":" + o.toString(16) + ":" + r.toString(16) + ":" + a.toString(16)
                                }
                            }, {
                                key: "setUI64",
                                value: function(t) {
                                    if (this._onset(8),
                                    8 != (t = t.split(":")).length)
                                        throw new RangeError("input string invalid");
                                    for (var e = 0; e < t.length; ++e)
                                        this._onval(this._buffer[this._offset++] = parseInt(t[e], 16))
                                }
                            }, {
                                key: "getSI32",
                                value: function() {
                                    this._onget(4);
                                    var e = this._onval(this._buffer[this._offset++])
                                      , i = this._onval(this._buffer[this._offset++])
                                      , s = this._onval(this._buffer[this._offset++])
                                      , n = this._onval(this._buffer[this._offset++]);
                                    return this._endian === t.LITTLE_ENDIAN ? e | i << 8 | s << 16 | n << 24 : n | s << 8 | i << 16 | e << 24
                                }
                            }, {
                                key: "setSI32",
                                value: function(e) {
                                    this._onset(4),
                                    this._endian === t.LITTLE_ENDIAN ? (this._onval(this._buffer[this._offset++] = e),
                                    this._onval(this._buffer[this._offset++] = e >> 8),
                                    this._onval(this._buffer[this._offset++] = e >> 16),
                                    this._onval(this._buffer[this._offset++] = e >> 24)) : (this._onval(this._buffer[this._offset++] = e >> 24),
                                    this._onval(this._buffer[this._offset++] = e >> 16),
                                    this._onval(this._buffer[this._offset++] = e >> 8),
                                    this._onval(this._buffer[this._offset++] = e))
                                }
                            }, {
                                key: "getFL32",
                                value: function() {
                                    return this._onget(4),
                                    4 <= this._buffer.length - this._offset ? Se.read(this._buffer, this._onval((this._offset += 4) - 4), this._endian === t.LITTLE_ENDIAN, 23, 4) : Se.read(this.getBytes(4), 0, this._endian === t.LITTLE_ENDIAN, 23, 4)
                                }
                            }, {
                                key: "setFL32",
                                value: function(e) {
                                    this._onset(4),
                                    4 <= this._buffer.length - this._offset ? Se.write(this._buffer, e, this._onval((this._offset += 4) - 4), this._endian === t.LITTLE_ENDIAN, 23, 4) : (Se.write(t.__SWAP_ARRAY__, e, 0, this._endian === t.LITTLE_ENDIAN, 23, 4),
                                    this.setBytes(t.__SWAP_ARRAY__.subarray(0, 4)))
                                }
                            }, {
                                key: "getFL64",
                                value: function() {
                                    return this._onget(8),
                                    8 <= this._buffer.length - this._offset ? Se.read(this._buffer, this._onval((this._offset += 8) - 8), this._endian === t.LITTLE_ENDIAN, 52, 8) : Se.read(this.getBytes(8), 0, this._endian === t.LITTLE_ENDIAN, 52, 8)
                                }
                            }, {
                                key: "setFL64",
                                value: function(e) {
                                    this._onset(8),
                                    8 <= this._buffer.length - this._offset ? Se.write(this._buffer, e, this._onval((this._offset += 8) - 8), this._endian === t.LITTLE_ENDIAN, 52, 8) : (Se.write(t.__SWAP_ARRAY__, e, 0, this._endian === t.LITTLE_ENDIAN, 52, 8),
                                    this.setBytes(t.__SWAP_ARRAY__.subarray(0, 8)))
                                }
                            }, {
                                key: "getUTF8",
                                value: function(e) {
                                    return t.__HAS_TEXT_ENCODER__ ? t.__UTF8_TEXT_DECODER__.decode(this.getBytes(e)) : Te.decode(this.getBytes(e))
                                }
                            }, {
                                key: "setUTF8",
                                value: function(e) {
                                    var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t.NO_LEN;
                                    if (t.__HAS_TEXT_ENCODER__)
                                        this.setBytes(t.__UTF8_TEXT_ENCODER__.encode(e), i);
                                    else {
                                        var s = Te.sizeof(e);
                                        s > t.__SWAP_ARRAY__.length && (t.__SWAP_ARRAY__ = new Uint8Array(s)),
                                        this.setBytes(Te.encode(e, t.__SWAP_ARRAY__.subarray(0, s)), i)
                                    }
                                }
                            }, {
                                key: "getUCS2",
                                value: function(t) {
                                    return Ce.decode(this.getBytes(t), this._endian)
                                }
                            }, {
                                key: "setUCS2",
                                value: function(e) {
                                    var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t.NO_LEN
                                      , s = Ce.sizeof(e);
                                    s > t.__SWAP_ARRAY__.length && (t.__SWAP_ARRAY__ = new Uint8Array(s)),
                                    this.setBytes(Ce.encode(e, this._endian, t.__SWAP_ARRAY__.subarray(0, s)), i)
                                }
                            }, {
                                key: "getBytes",
                                value: function(e) {
                                    if (0 > e)
                                        throw new RangeError("Offset is outside the bounds of the buffer");
                                    this._onget(e);
                                    var i = this._buffer.length - this._offset;
                                    if (i >= e)
                                        return this._onval(this._buffer.subarray(this._offset, this._offset += e));
                                    for (e > t.__SWAP_ARRAY__.length && (t.__SWAP_ARRAY__ = new Uint8Array(e)),
                                    t.__SWAP_ARRAY__.set(this._buffer.subarray(this._offset), 0),
                                    this._offlen += this._buffer.length,
                                    this._offset = 0,
                                    this._buffer = this._chunks[++this._points]; this._buffer.length < e - i; )
                                        t.__SWAP_ARRAY__.set(this._buffer, i),
                                        i += this._buffer.length,
                                        this._offlen += this._buffer.length,
                                        this._buffer = this._chunks[++this._points];
                                    return t.__SWAP_ARRAY__.set(this._buffer.subarray(0, this._onval(this._offset = e - i)), i),
                                    t.__SWAP_ARRAY__.subarray(0, e)
                                }
                            }, {
                                key: "setBytes",
                                value: function(e) {
                                    var i = e.length
                                      , s = this._buffer.length - this._offset;
                                    switch (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t.NO_LEN) {
                                    case t.LEN_UINT16:
                                        if (this._onset(2 + i),
                                        65535 < i)
                                            throw new RangeError('The length of bytes is large than "0xFFFF"');
                                        this.setUI16(i);
                                        break;
                                    case t.LEN_UINT32:
                                        if (this._onset(4 + i),
                                        4294967295 < i)
                                            throw new RangeError('The length of bytes is large than "0xFFFFFFFF"');
                                        this.setUI32(i);
                                        break;
                                    default:
                                        this._onset(i)
                                    }
                                    if (s >= i)
                                        this._buffer.set(e, this._onval((this._offset += i) - i));
                                    else
                                        for (s = 0; s < i; ) {
                                            var n = Math.min(this._buffer.length - this._offset, i - s);
                                            this._buffer.set(e.subarray(s, s += n), this._onval((this._offset += n) - n))
                                        }
                                }
                            }, {
                                key: "getMarshal",
                                value: function(t) {
                                    return t.unmarshal(this),
                                    t
                                }
                            }, {
                                key: "setMarshal",
                                value: function(t) {
                                    t.marshal(this)
                                }
                            }, {
                                key: "packPayload",
                                value: function(e) {
                                    var i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t.NO_LEN
                                      , s = new xe(null,0,0,0,0);
                                    switch (this.save(s),
                                    i) {
                                    case t.LEN_UINT32:
                                        i = 4,
                                        this.setUI32(0);
                                        break;
                                    default:
                                        i = 2,
                                        this.setUI16(0)
                                    }
                                    this.setMarshal(e);
                                    var n = new xe(null,0,0,0,0);
                                    this.save(n),
                                    this.restore(s),
                                    this.setUI32(n.length - s.length - i),
                                    this.restore(n)
                                }
                            }, {
                                key: "toString",
                                value: function() {
                                    return "[Buffer remain=" + this.remain + ", position=" + this.position + ", length=" + this.length + "]"
                                }
                            }, {
                                key: "endian",
                                get: function() {
                                    return this._endian
                                },
                                set: function(e) {
                                    this._endian = e === t.BIG_ENDIAN ? t.BIG_ENDIAN : t.LITTLE_ENDIAN
                                }
                            }, {
                                key: "position",
                                get: function() {
                                    return this._offlen + this._offset
                                },
                                set: function(t) {
                                    if (0 > t)
                                        throw new RangeError('The "position" of buffer must be positive value');
                                    t < this._offlen && (this._points = this._offlen = 0,
                                    this._buffer = this._chunks[this._points]),
                                    this._onval(this._offset = t - this._offlen)
                                }
                            }, {
                                key: "length",
                                get: function() {
                                    return this._length
                                },
                                set: function(t) {
                                    if (0 > t)
                                        throw new RangeError('The "length" of buffer must be positive value');
                                    this.alloc(this._length = t)
                                }
                            }, {
                                key: "remain",
                                get: function() {
                                    return Math.max(0, this.length - this.position)
                                }
                            }, {
                                key: "chunks",
                                get: function() {
                                    return this._slice(0, 0, this.length)
                                }
                            }, {
                                key: "avails",
                                get: function() {
                                    return this._slice(this._points, this._offset, this.remain)
                                }
                            }]),
                            t
                        }();
                        Le.__CHUNK_SIZE__ = 1024,
                        Le.__SWAP_ARRAY__ = new Uint8Array(32),
                        Le.BIG_ENDIAN = 0,
                        Le.LITTLE_ENDIAN = 1,
                        Le.DEFLATE = "deflate",
                        Le.ZLIB = "zlib",
                        Le.LZMA = "lzma",
                        Le.NO_LEN = 0,
                        Le.LEN_UINT16 = 16,
                        Le.LEN_UINT32 = 32,
                        Le.STATE = new xe(null,0,0,0,0),
                        Le.__HAS_TEXT_ENCODER__ = "undefined" != typeof TextEncoder && "undefined" != typeof TextDecoder,
                        Le.__UTF8_TEXT_ENCODER__ = Le.__HAS_TEXT_ENCODER__ ? new TextEncoder("utf-8") : null,
                        Le.__UTF8_TEXT_DECODER__ = Le.__HAS_TEXT_ENCODER__ ? new TextDecoder("utf-8") : null,
                        "function" != typeof Object.assign && (Object.assign = function(t) {
                            if (void 0 === t || null === t)
                                throw new TypeError("Cannot convert undefined or null to object");
                            for (var e = Object(t), i = 1; i < arguments.length; i++) {
                                var s = arguments[i];
                                if (void 0 !== s && null !== s)
                                    for (var n in s)
                                        s.hasOwnProperty(n) && (e[n] = s[n])
                            }
                            return e
                        }
                        );
                        var Ae = function() {
                            this.uri = 0,
                            this.code = 200,
                            this.buffer = new Le,
                            this.marshal = function(t) {
                                var e = new xe(null,0,0,0,0);
                                this.buffer.save(e),
                                this.buffer.setUI32(0),
                                this.buffer.setUI32(this.uri),
                                this.buffer.setUI16(this.code),
                                this.buffer.setMarshal(t),
                                t = new xe(null,0,0,0,0),
                                this.buffer.save(t);
                                var i = this.buffer.length;
                                return this.buffer.restore(e),
                                this.buffer.setUI32(i),
                                this.buffer.restore(t),
                                this.buffer.toArrayBuffer()
                            }
                        }
                          , Me = function(t) {
                            if (0 < document.cookie.length) {
                                var e = document.cookie.indexOf(t + "=");
                                if (-1 != e) {
                                    e = e + t.length + 1;
                                    var i = document.cookie.indexOf(";", e);
                                    return -1 == i && (i = document.cookie.length),
                                    e = decodeURI(document.cookie.substring(e, i)),
                                    console.log(" [svc_sdk] getCookie key:", t, "value:", e),
                                    e
                                }
                            }
                            return console.log(" [svc_sdk] getCookie key:", t, "empty"),
                            ""
                        }
                          , Ee = function(t, e, i) {
                            var s = new Date;
                            s.setDate(s.getDate() + i),
                            console.log(" [svc_sdk] setCookie key:", t, "value:", e, "expire:", s),
                            document.cookie = t + "=" + encodeURI(e) + (null == i ? "" : ";expires=" + s.toGMTString())
                        }
                          , Ne = new function() {
                            this.udbAppId = "yymwebh5",
                            this.udbAppkey = "a8d7eef2",
                            this.cookie = this.linkticket = this.ticket = null,
                            this.yyid = this.uid = 0,
                            this.credit = this.password = this.username = null,
                            this.trySubSid = this.tryTopSid = this.subSid = this.topSid = 0,
                            this.exclusiveJoin = !1,
                            this.asid = 0,
                            this.from = "yytianlaitv",
                            this.channelJoined = this.loginedUDB = !1,
                            this.userType = this.lastSentJoinChl = 0,
                            this.nick = "",
                            this.channelInfo = null,
                            this.channelUserCount = {},
                            this.micList = {
                                micList: [],
                                linkedMicList: []
                            },
                            this.userInfos = {},
                            this.bNeedOnlineChanUser = !1,
                            this.wxappid = "",
                            this.uuid = function(t) {
                                var e = "";
                                try {
                                    var i = document.createElement("canvas")
                                      , s = i.getContext("2d");
                                    s.fillStyle = "#f60",
                                    s.fillRect(0, 0, 8, 10),
                                    s.fillStyle = "#FF0000",
                                    s.fillText(t, 4, 17);
                                    var n, o = i.toDataURL().replace("data:image/png;base64,", ""), r = atob(o).slice(-16, -12);
                                    t = "";
                                    var a = 0;
                                    for (n = (r += "").length; a < n; a++) {
                                        var h = r.charCodeAt(a).toString(16);
                                        t += 2 > h.length ? "0" + h : h
                                    }
                                    e = t,
                                    console.log(" [svc_sdk] canvas uuid:", e)
                                } catch (t) {
                                    for (e = [],
                                    r = 0; 8 > r; r++)
                                        e[r] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);
                                    e = e.join(""),
                                    console.log(" [svc_sdk] draw uuid canvas error. use random insted:", e)
                                }
                                for (a = [],
                                r = 0; 28 > r; r++)
                                    a[r] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);
                                return a[6] = "4",
                                a[11] = "0123456789abcdef".substr(3 & a[19] | 8, 1),
                                a[0] = a[5] = a[10] = a[15] = "-",
                                e += a.join(""),
                                console.log(" [svc_sdk] final uuid:", e),
                                e
                            }("yy.com"),
                            this.appidSubs = {},
                            this.appidUnsubs = {},
                            this.logout = function() {
                                this.cookie = this.linkticket = this.ticket = null,
                                this.yyid = this.uid = 0,
                                this.credit = this.password = this.username = null,
                                this.asid = this.trySubSid = this.tryTopSid = this.subSid = this.topSid = 0,
                                this.from = "",
                                this.channelJoined = this.loginedUDB = !1,
                                this.userType = this.lastSentJoinChl = 0,
                                this.nick = "",
                                this.channelInfo = null,
                                this.channelUserCount = {},
                                this.micList = {},
                                this.userInfos = {},
                                this.appidSubs = {},
                                this.appidUnsubs = {}
                            }
                        }
                          , Oe = null
                          , Fe = null
                          , Be = function(t, e) {
                            this.appid = e,
                            this.mod = t,
                            259 == this.appid ? (this.wsAddr = "wss://h5chl.yy.com/websocket?appid=" + Ne.udbAppId + "&version=" + encodeURIComponent("1.31.20") + "&uuid=" + encodeURIComponent(Ne.uuid),
                            console.log(" [svc_sdk] appid:259 wsAddr:", this.wsAddr)) : (this.wsAddr = "wss://h5svc.yy.com/websocket?appid=" + Ne.udbAppId + "&version=" + encodeURIComponent("1.31.20") + "&uuid=" + encodeURIComponent(Ne.uuid),
                            console.log(" [svc_sdk] appid:260 wsAddr:", this.wsAddr)),
                            this.wsState = "init",
                            this.logined = !1,
                            this.timer = null,
                            this.lastTimerCheck = Date.now(),
                            this.last_login_ts = 0,
                            this.lastRecvPong = Date.now(),
                            this.sendBuf = [],
                            this.clearSendBuf = function() {
                                500 < this.sendBuf.length && (this.sendBuf = [])
                            }
                            ,
                            this.appidReady = function() {
                                return this.wsSock && "connected" == this.wsState && this.logined
                            }
                            ,
                            this.resetWsState = function() {
                                console.log(" [svc_sdk] reset websocket state.", this.wsSock),
                                this.wsState = "closed",
                                this.wsSock && (this.wsSock.onopen = null,
                                this.wsSock.onclose = null,
                                this.wsSock.onerror = null,
                                this.wsSock = this.wsSock.onmessage = null),
                                this.logined = !1,
                                this.clearSendBuf()
                            }
                            ,
                            this.reportLog = function(t, e, i) {
                                var s = new function() {
                                    this.uid = 0,
                                    this.uuid = "",
                                    this.subSid = this.topSid = 0,
                                    this.result = this.action = this.source = "",
                                    this.ext = {},
                                    this.marshal = function(t) {
                                        t.setUI32(this.uid),
                                        t.setUTF8(this.uuid, 16),
                                        t.setUI32(this.topSid),
                                        t.setUI32(this.subSid),
                                        t.setUTF8(this.source),
                                        t.setUTF8(this.action),
                                        t.setUTF8(this.result);
                                        var e = Object.keys(this.ext);
                                        t.setUI32(e.length);
                                        for (var i = 0; i < e.length; ++i)
                                            t.setUTF8(e[i]),
                                            t.setUTF8(this.ext[e[i]], 16)
                                    }
                                }
                                ;
                                s.uid = Ne.uid,
                                s.uuid = Ne.uuid,
                                s.topSid = Ne.topSid,
                                s.subSid = Ne.subSid,
                                s.source = location ? location.host : Ne.wxappid ? Ne.thirdUdbAppId.toString() + "_" + Ne.wxappid : "unknown",
                                s.action = t,
                                s.result = e,
                                i && (s.ext = i)
                            }
                            ,
                            this.onopen = function(t) {
                                console.log(" [svc_sdk] h5 websocket open. appid:", this.appLayer.appid),
                                this.appLayer.wsState = "connected",
                                this.appLayer.mod.onApOpen(),
                                Ne.loginedUDB && this.appLayer.loginAp()
                            }
                            ,
                            this.onclose = function(t) {
                                console.log(" [svc_sdk] h5 websocket onclose", t, "appid:", this.appLayer.appid),
                                this.appLayer.resetWsState()
                            }
                            ,
                            this.onerror = function(t) {
                                console.log(" [svc_sdk] h5 websocket onerror", JSON.stringify(t), "appid:", this.appLayer.appid),
                                this.appLayer.resetWsState()
                            }
                            ,
                            this.send = function(t) {
                                this.wsSock && "connected" == this.wsState ? this.wsSock.send(t) : console.log(" [svc_sdk] send failed. ", this.appid)
                            }
                            ,
                            this.bufSend = function(t) {
                                this.appidReady() ? this.send(t) : (console.log(" [svc_sdk]ap not ready, cache it.", this.appid),
                                this.sendBuf.push(t))
                            }
                            ,
                            this.sendApRouter = function(t, e, i, s) {
                                var n = new be;
                                n.appid = this.appid,
                                n.uid = Ne.uid,
                                n.realUri = e,
                                n.srvName = t,
                                n.ruri = e,
                                s && (n.extentProps = s),
                                n.payload = i,
                                (t = new Ae).uri = 512011,
                                n = t.marshal(n),
                                this.bufSend(n)
                            }
                            ,
                            this.connect = function() {
                                this.wsSock ? (console.log(" [svc_sdk] close existing socket before connecting"),
                                this.close()) : "connecting" != this.wsState ? (console.log(" [svc_sdk] start to connect ws.", this.appid, this.wsAddr),
                                this.wsSock = new WebSocket(this.wsAddr),
                                this.wsState = "connecting",
                                this.wsSock.binaryType = "arraybuffer",
                                this.wsSock.appLayer = this,
                                this.wsSock.onopen = this.onopen,
                                this.wsSock.onclose = this.onclose,
                                this.wsSock.onerror = this.onerror,
                                this.wsSock.onmessage = this.onmessage) : console.log(" [svc_sdk] websocket is connecting...")
                            }
                            ,
                            this.close = function() {
                                "closing" == this.wsState ? console.log(" [svc_sdk] websocket is closing...") : (console.log(" [svc_sdk] require to close ws.", this.appid, this.wsSock),
                                this.wsState = "closing",
                                this.wsSock && this.wsSock.close())
                            }
                            ,
                            this.onmessage = function(t) {
                                (t = new Le(t.data)).getUI32();
                                var e = t.getUI32();
                                if (t.getUI16(),
                                775940 == e)
                                    if (e = new function() {
                                        this.resCode = 0,
                                        this.context = "",
                                        this.unmarshal = function(t) {
                                            var e = new xe(null,0,0,0,0);
                                            t.save(e),
                                            t.setUI32(0),
                                            this.resCode = t.getUI32();
                                            var i = t.getUI16();
                                            this.context = t.getUTF8(i),
                                            i = new xe(null,0,0,0,0),
                                            t.save(i),
                                            t.restore(e),
                                            t.setUI32(0 | i.length - e.length - 4 & 268435455),
                                            t.restore(i)
                                        }
                                    }
                                    ,
                                    t.getMarshal(e),
                                    t = e.context,
                                    this.appLayer.appidReady())
                                        console.log(" [svc_sdk] appid is ready, ignore login resp", t, e.resCode, this.appLayer.wsState, this.appLayer.logined);
                                    else if (200 == e.resCode) {
                                        if (console.log(" [svc_sdk] login AP success", this.appLayer.appid),
                                        this.appLayer.logined = !0,
                                        0 != this.appLayer.sendBuf.length) {
                                            for (console.log(" [svc_sdk] flush cached buffer:", this.appLayer.sendBuf.length, "appid:", this.appLayer.appid),
                                            t = 0; t < this.appLayer.sendBuf.length; ++t)
                                                this.appLayer.send(this.appLayer.sendBuf[t]);
                                            this.appLayer.sendBuf = []
                                        }
                                        this.appLayer.mod.onLoginAp()
                                    } else
                                        409 == e.resCode ? (console.log("409 resource conflict. change route.", this.appLayer.appid, e.resCode),
                                        this.appLayer.start(this.appLayer)) : 401 == e.resCode ? (console.log("401 validation failed. maybe ticket expires. re-login udb", this.appid, e.resCode),
                                        this.appLayer.mod.restart()) : console.log(" [svc_sdk] login AP failed:", e.resCode, this.appLayer.appid);
                                else
                                    794372 == e ? this.lastRecvPong = Date.now() : this.appLayer.mod.onmessage(e, t)
                            }
                            ,
                            this.timerCheck = function(t) {
                                if ("closed" != !t.wsState && t.wsSock) {
                                    if ("connected" == t.wsState) {
                                        var e = Date.now();
                                        5e3 <= e - t.lastTimerCheck && (t.lastTimerCheck = e,
                                        Ne.loginedUDB ? t.logined ? t.pingAP() : t.loginAp() : 259 == t.appid && t.mod.loginUDB())
                                    }
                                } else
                                    console.log(" [svc_sdk] timer check ap not ready. re-connect.", t.wsState, t.wsSock, t.appid),
                                    t.connect();
                                t.startTimer(t.timerCheck, t)
                            }
                            ,
                            this.pingAP = function() {
                                var t = new function() {
                                    this.marshal = function(t) {
                                        t.setUI32(0)
                                    }
                                }
                                  , e = new Ae;
                                e.uri = 794116,
                                this.bufSend(e.marshal(t))
                            }
                            ,
                            this.loginAp = function() {
                                if (this.logined)
                                    console.log(" [svc_sdk] already logined. appid:", this.appid);
                                else {
                                    var t = Date.now();
                                    if (2e3 > t - this.last_login_ts)
                                        console.log(" [svc_sdk] ignore frequently login request.", this.appid, t, this.last_login_ts);
                                    else {
                                        this.last_login_ts = t,
                                        (t = new function() {
                                            this.password = this.account = null,
                                            this.cliLcid = this.cliVer = this.cliType = 0,
                                            this.instance = this.cliVerStr = this.cliInfo = this.from = "",
                                            this.uid = this.appid = 0,
                                            this.bRelogin = !1,
                                            this.ticket = new Uint8Array,
                                            this.cookie = new Uint8Array,
                                            this.context = "",
                                            this.marshal = function(t) {
                                                var e = new xe(null,0,0,0,0);
                                                t.save(e),
                                                t.setUI32(0),
                                                t.setBytes(this.account, 16),
                                                this.fromWeb ? t.setUTF8(this.password, 16) : t.setBytes(this.password, 16),
                                                t.setUI32(this.cliType),
                                                t.setUI32(this.cliVer),
                                                t.setUI32(this.cliLcid),
                                                t.setUTF8(this.from, 16),
                                                t.setUTF8(this.cliInfo, 16),
                                                t.setUTF8(this.cliVerStr, 16),
                                                t.setUI32(0),
                                                t.setUI32(0),
                                                t.setUI32(0),
                                                t.setUI32(0),
                                                t.setUTF8(this.instance, 16);
                                                var i = new xe(null,0,0,0,0);
                                                t.save(i),
                                                t.restore(e),
                                                t.setUI32(0 | i.length - e.length - 4 & 268435455),
                                                t.restore(i),
                                                t.setUI32(this.appid),
                                                t.setUI32(this.uid),
                                                t.setUI32(0),
                                                t.setBool(this.bRelogin),
                                                t.setBytes(this.ticket, 16),
                                                t.setBytes(this.cookie, 16),
                                                this.context = this.appid.toString(),
                                                t.setUTF8(this.context, 16)
                                            }
                                        }
                                        ).appid = this.appid,
                                        t.uid = Ne.uid,
                                        t.cookie = Ne.cookie,
                                        Ne.linkticket && (t.ticket = Ne.linkticket),
                                        t.account = Ne.username,
                                        t.password = Ne.password,
                                        t.from = "yytianlaitv",
                                        t.cliInfo = "B8-97-5A-17-AD-4D",
                                        t.instance = Ne.uuid,
                                        t.fromWeb = Ne.userType,
                                        console.log(" [svc_sdk] start to login ap... appid:", t.appid);
                                        var e = new Ae;
                                        e.uri = 775684,
                                        this.send(e.marshal(t))
                                    }
                                }
                            }
                            ,
                            this.startTimer = function(t, e) {
                                clearTimeout(this.timer),
                                this.timer = setTimeout(function() {
                                    t(e)
                                }, 500)
                            }
                            ,
                            this.stopTimer = function() {
                                console.log(" [svc_sdk] stop timer."),
                                clearTimeout(this.timer)
                            }
                            ,
                            this.start = function() {
                                console.log(" [svc_sdk] start ApH5.", this.appid),
                                this.connect(),
                                this.stopTimer(),
                                this.startTimer(this.timerCheck, this)
                            }
                        }
                          , Re = function(t) {
                            this.serviceH5 = t,
                            this.ap = new Be(this,259),
                            Ne.everJoinChannel = !1,
                            this.h5EventCbs = [],
                            this.h5ChannelEventCbs = [],
                            this.h5MaixuCbs = [],
                            this.getGlobals = function() {
                                return Ne
                            }
                            ,
                            this.setH5EventCb = function(t, e) {
                                if (e)
                                    this.h5EventCbs = [];
                                else
                                    for (var i = 0; i < this.h5EventCbs.length; ++i)
                                        if (this.h5EventCbs[i] == t)
                                            return;
                                this.h5EventCbs.push(t)
                            }
                            ,
                            this.setChannelEventCb = function(t, e) {
                                if (e)
                                    this.h5ChannelEventCbs = [];
                                else
                                    for (var i = 0; i < this.h5ChannelEventCbs.length; ++i)
                                        if (this.h5ChannelEventCbs[i] == t)
                                            return;
                                this.h5ChannelEventCbs.push(t)
                            }
                            ,
                            this.setH5MaixuCb = function(t, e) {
                                if (e)
                                    this.h5MaixuCbs = [];
                                else
                                    for (var i = 0; i < this.h5MaixuCbs.length; ++i)
                                        if (this.h5MaixuCbs[i] == t)
                                            return;
                                this.h5MaixuCbs.push(t)
                            }
                            ,
                            this.enableChanUserPush = function() {
                                Ne.bNeedOnlineChanUser = !0
                            }
                            ,
                            this.start = function(t, e, i, s, n, o) {
                                t && (Ne.udbAppId = t),
                                e && (Ne.udbAppkey = e),
                                Ne.uid = i,
                                Ne.credit = s,
                                Ne.username = n,
                                Ne.password = o,
                                Ne.userType = Ne.credit || n && o ? 1 : 0,
                                console.log(" [svc_sdk] channel h5 start udbAppId:", t, "udbAppkey:", e, "uid:", i, "credit:", s, "username:", n, "udb_l:", o),
                                this.ap || (this.ap = new Be(this,259)),
                                this.ap.start()
                            }
                            ,
                            this.restart = function() {
                                console.log(" [svc_sdk] restart login udb and ap."),
                                Ne.loginedUDB = !1,
                                this.ap && this.ap.close(),
                                this.ap || (this.ap = new Be(this,259)),
                                this.ap.start()
                            }
                            ,
                            this.login = function(t, e, i, s) {
                                var n = Ne.topSid
                                  , o = Ne.subSid;
                                this.logout(),
                                console.log(" [svc_sdk] re-login... uid:", t, "credit:", e, "udbAppId:", Ne.udbAppId, "udbAppkey:", Ne.udbAppkey, "username:", i, "udb_l:", s),
                                this.ap.reportLog("re-login", "start"),
                                this.start(Ne.udbAppId, Ne.udbAppkey, t, e, i, s),
                                n && o && (console.log(" [svc_sdk] re-join channel by login", n, o),
                                this.joinChannel(n, o, null, null, Ne.exclusiveJoin))
                            }
                            ,
                            this.stop = function(t, e) {
                                console.log(" [svc_sdk] stop h5. uid:", t, "reason:", e),
                                this.ap.reportLog("stop", "start"),
                                Ne.logout(),
                                this.ap && (this.ap.close(),
                                this.ap.stopTimer()),
                                this.serviceH5.ap && (this.serviceH5.ap.close(),
                                this.serviceH5.ap.stopTimer())
                            }
                            ,
                            this.onLoginUDB = function(t, e, i, s) {
                                0 == t && (Ne.loginedUDB = !0,
                                this.ap.loginAp(),
                                this.serviceH5.login());
                                for (var n = 0; n < this.h5EventCbs.length; ++n)
                                    this.h5EventCbs[n](Object({
                                        type: 0,
                                        code: t,
                                        isAnonymous: e,
                                        baseInfo: i,
                                        errMsg: s
                                    }))
                            }
                            ,
                            this.anonyousLoginUDB = function() {
                                var t = new function() {
                                    this.context = "",
                                    this.ruri = 0,
                                    this.payload = null,
                                    this.marshal = function(t) {
                                        t.setUTF8(this.context, 16),
                                        t.setUI32(this.ruri);
                                        var e = new xe(null,0,0,0,0);
                                        t.save(e),
                                        t.setUI32(0),
                                        t.setMarshal(this.payload);
                                        var i = new xe(null,0,0,0,0);
                                        t.save(i),
                                        t.restore(e),
                                        t.setUI32(i.length - e.length - 4),
                                        t.restore(i)
                                    }
                                }
                                ;
                                t.ruri = 19822;
                                var e = new function() {
                                    this.context = "",
                                    this.version = 0,
                                    this.macAddr = this.pcInfo = "",
                                    this.cliFrom = 0,
                                    this.cliExtension = "",
                                    this.marshal = function(t) {
                                        t.setUTF8(this.context, 16),
                                        t.setUI32(this.version),
                                        t.setUTF8(this.pcInfo, 16),
                                        t.setUTF8(this.macAddr, 16),
                                        t.setUI32(this.cliFrom),
                                        t.setUTF8(this.cliExtension, 16)
                                    }
                                }
                                ;
                                e.cliExtension = Ne.udbAppId,
                                e.pcInfo = "B8-97-5A-17-AD-4D",
                                e.macAddr = "B8-97-5A-17-AD-4D",
                                t.payload = e,
                                console.log(" [svc_sdk] start to anonyous login udb:", JSON.stringify(e)),
                                this.ap.reportLog("anonyous_login_udb", "start"),
                                (e = new Ae).uri = 778244,
                                this.ap.send(e.marshal(t))
                            }
                            ,
                            this.normalLoginUDB = function() {
                                var t = new function() {
                                    this.context = "",
                                    this.ruri = 0,
                                    this.payload = null,
                                    this.marshal = function(t) {
                                        t.setUTF8(this.context, 16),
                                        t.setUI32(this.ruri);
                                        var e = new xe(null,0,0,0,0);
                                        t.save(e),
                                        t.setUI32(0),
                                        t.setMarshal(this.payload);
                                        var i = new xe(null,0,0,0,0);
                                        t.save(i),
                                        t.restore(e),
                                        t.setUI32(i.length - e.length - 4),
                                        t.restore(i)
                                    }
                                }
                                ;
                                t.ruri = 335570153;
                                var e = new function() {
                                    this.protoVersion = 0,
                                    this.context = "",
                                    this.appType = 6,
                                    this.sign = this.appid = "",
                                    this.appVer = "1.0.0",
                                    this.clientIp = this.sdkVer = "",
                                    this.clientPort = 0,
                                    this.reserve = this.channel = "",
                                    this.appidlist = [],
                                    this.tokenType = 1,
                                    this.username = "",
                                    this.uid = 0,
                                    this.protoTicket = this.protoCredit = this.protoPasswd = "",
                                    this.strategy = 0,
                                    this.antiCode = this.bizName = this.sessionData = this.straToken = "",
                                    this.marshal = function(t) {
                                        var e = new xe(null,0,0,0,0);
                                        t.save(e),
                                        t.setUI16(0),
                                        t.setUI32(this.protoVersion),
                                        t.setUTF8(this.context, 16);
                                        var i = new xe(null,0,0,0,0);
                                        t.save(i),
                                        t.setUI16(0),
                                        t.setUI16(this.appType),
                                        t.setUTF8(this.appid, 16),
                                        t.setUTF8(this.sign, 16),
                                        t.setUTF8(this.appVer, 16),
                                        t.setUTF8(this.sdkVer, 16),
                                        t.setUTF8(this.clientIp, 16),
                                        t.setUI32(this.clientPort);
                                        var s = new xe(null,0,0,0,0);
                                        t.save(s),
                                        t.setUI16(0),
                                        t.setUTF8("iPhone X", 16),
                                        t.setUTF8("xx-xx-xx-xx", 16),
                                        t.setUTF8("xx-xx-xx-xx", 16),
                                        t.setUTF8("xx-xx-xx-xx", 16),
                                        t.setUI32(0),
                                        t.setUI32(0),
                                        t.setUTF8("iOS", 16),
                                        t.setUTF8("11", 16),
                                        t.setUTF8("", 16),
                                        t.setUTF8("", 16),
                                        t.setUTF8("", 16);
                                        var n = new xe(null,0,0,0,0);
                                        for (t.save(n),
                                        t.restore(s),
                                        t.setUI16(n.length - s.length - 2),
                                        t.restore(n),
                                        t.setUTF8(this.channel, 16),
                                        t.setUTF8(this.reserve, 16),
                                        t.setUI32(this.appidlist.length),
                                        s = 0; s < this.appidlist.length; ++s)
                                            t.setUTF8(this.appidlist[s], 16);
                                        s = new xe(null,0,0,0,0),
                                        t.save(s),
                                        t.restore(i),
                                        t.setUI16(s.length - i.length - 2),
                                        t.restore(s),
                                        i = new xe(null,0,0,0,0),
                                        t.save(i),
                                        t.setUI16(0),
                                        t.setUI32(this.tokenType),
                                        2 == this.tokenType ? (s = new xe(null,0,0,0,0),
                                        t.save(s),
                                        t.setUI16(0),
                                        t.setUTF8(this.username, 16),
                                        t.setUI32(0),
                                        t.setUTF8(this.protoPasswd, 16),
                                        n = new xe(null,0,0,0,0),
                                        t.save(n),
                                        t.restore(s),
                                        t.setUI16(n.length - s.length - 2),
                                        t.restore(n)) : 1 == this.tokenType ? (s = new xe(null,0,0,0,0),
                                        t.save(s),
                                        t.setUI16(0),
                                        t.setUI32(this.uid),
                                        t.setUI32(0),
                                        t.setUTF8(this.protoCredit, 16),
                                        t.setUI32(1),
                                        n = new xe(null,0,0,0,0),
                                        t.save(n),
                                        t.restore(s),
                                        t.setUI16(n.length - s.length - 2),
                                        t.restore(n)) : 3 == this.tokenType ? (s = new xe(null,0,0,0,0),
                                        t.save(s),
                                        t.setUI16(0),
                                        t.setUI32(this.uid),
                                        t.setUTF8(this.protoTicket, 16),
                                        t.setUTF8("0", 16),
                                        n = new xe(null,0,0,0,0),
                                        t.save(n),
                                        t.restore(s),
                                        t.setUI16(n.length - s.length - 2),
                                        t.restore(n)) : 4 == this.tokenType ? (s = new xe(null,0,0,0,0),
                                        t.save(s),
                                        t.setUI16(0),
                                        t.setUTF8(this.username, 16),
                                        t.setUTF8(this.protoPasswd, 16),
                                        t.setUTF8("", 16),
                                        n = new xe(null,0,0,0,0),
                                        t.save(n),
                                        t.restore(s),
                                        t.setUI16(n.length - s.length - 2),
                                        t.restore(n)) : 5 == this.tokenType && (t.setUI32(4),
                                        t.setUI32(0)),
                                        t.setUI32(this.strategy),
                                        t.setUTF8(this.straToken, 16),
                                        s = new xe(null,0,0,0,0),
                                        t.save(s),
                                        t.restore(i),
                                        t.setUI16(s.length - i.length - 2),
                                        t.restore(s),
                                        t.setUTF8(this.sessionData, 16),
                                        i = new xe(null,0,0,0,0),
                                        t.save(i),
                                        t.setUI16(0),
                                        t.setUTF8(this.bizName, 16),
                                        t.setUTF8(this.antiCode, 16),
                                        s = new xe(null,0,0,0,0),
                                        t.save(s),
                                        t.restore(i),
                                        t.setUI16(s.length - i.length - 2),
                                        t.restore(s),
                                        i = new xe(null,0,0,0,0),
                                        t.save(i),
                                        t.restore(e),
                                        t.setUI16(i.length - e.length - 2),
                                        t.restore(i)
                                    }
                                }
                                ;
                                e.appid = Ne.udbAppId,
                                e.sign = Ne.udbAppkey,
                                e.protoVersion = 0,
                                e.appType = 6,
                                e.tokenType = 1,
                                e.uid = Ne.uid,
                                Ne.credit ? (e.tokenType = 1,
                                e.protoCredit = Ne.credit,
                                console.log(" [svc_sdk] start to normal login udb using credit", JSON.stringify(e)),
                                this.ap.reportLog("credit_login_udb", "start")) : (e.tokenType = 4,
                                e.username = Ne.username,
                                e.protoPasswd = Ne.password,
                                console.log(" [svc_sdk] start to normal login udb using ticket", JSON.stringify(e)),
                                this.ap.reportLog("ticket_login_udb", "start")),
                                t.payload = e,
                                (e = new Ae).uri = 779268,
                                this.ap.send(e.marshal(t))
                            }
                            ,
                            this.joinChannel = function(t, e, i, s, n, o, r) {
                                if (!t || !e)
                                    return console.log(" [svc_sdk] ignore invalid topSid or subSid:", Ne.uid, JSON.stringify(arguments)),
                                    this.ap.reportLog("join_channel", "invalid", {
                                        topSid: t,
                                        subSid: e
                                    }),
                                    !1;
                                if (!r && Ne.topSid == t && Ne.subSid == e)
                                    return console.log(" [svc_sdk] ignore duplicate join channel request. uid:", Ne.uid, JSON.stringify(arguments)),
                                    this.ap.reportLog("join_channel", "dupliated"),
                                    !0;
                                var a = Date.now();
                                if (2e3 > a - Ne.lastSentJoinChl)
                                    return console.log(" [svc_sdk] ignore too often join channel request. uid:", Ne.uid, JSON.stringify(arguments)),
                                    this.ap.reportLog("join_channel", "frequently"),
                                    !1;
                                if (!r && t == Ne.topSid)
                                    return this.jumpSubChannel(e, o);
                                if (Ne.channelJoined && (console.log(" [svc_sdk] firstly leave channel topSid:", Ne.topSid, "subSid:", Ne.subSid),
                                this.leaveChannel()),
                                Ne.tryTopSid = t,
                                Ne.trySubSid = e,
                                Ne.everJoinChannel = !0,
                                Ne.exclusiveJoin = n,
                                console.log(" [svc_sdk] start to join channel. uid:", Ne.uid, JSON.stringify(arguments)),
                                this.ap.reportLog("join_channel", "start", {
                                    topSid: t,
                                    subSid: e
                                }),
                                this.ap.appidReady()) {
                                    Ne.lastSentJoinChl = a,
                                    (a = new function() {
                                        this.subSid = this.topSid = this.uid = 0,
                                        this.joinProps = {},
                                        this.marshal = function(t) {
                                            t.setUI32(this.uid),
                                            t.setUI32(this.topSid),
                                            t.setUI32(this.subSid);
                                            var e = Object.keys(this.joinProps);
                                            t.setUI32(Object.keys(this.joinProps).length);
                                            for (var i = 0; i < e.length; ++i)
                                                t.setUI32(parseInt(e[i])),
                                                "6" == e[i] ? t.setBytes(this.joinProps[e[i]], 16) : t.setUTF8(this.joinProps[e[i]], 16)
                                        }
                                    }
                                    ).uid = Ne.uid,
                                    a.topSid = t,
                                    a.subSid = e,
                                    i && (a.joinProps[5] = i),
                                    s && (a.joinProps[6] = new Uint8Array(s)),
                                    n && (a.joinProps[2] = "0",
                                    a.joinProps[3] = "1"),
                                    null != o && void 0 !== o && 0 != o.length && (a.joinProps[1] = o);
                                    var h = new Le;
                                    h.setUI32(t);
                                    var l = {};
                                    l[1] = h.toTypedBuffer(),
                                    this.ap.sendApRouter("channelAuther", 2048258, a, l)
                                } else
                                    console.log(" [svc_sdk] delay. join channel request will be sent after ap ready.")
                            }
                            ,
                            this.jumpSubChannel = function(t, e) {
                                Ne.trySubSid = t,
                                Ne.everJoinChannel = !0;
                                var i = Date.now();
                                Ne.lastSentJoinChl = i,
                                (i = new function() {
                                    this.toSid = this.fromSid = 0,
                                    this.password = "",
                                    this.marshal = function(t) {
                                        t.setUI32(this.fromSid),
                                        t.setUI32(this.toSid),
                                        t.setUTF8(this.password, 16)
                                    }
                                }
                                ).fromSid = Ne.subSid,
                                i.toSid = t,
                                e && (i.password = e);
                                var s = new Le;
                                s.setUI32(Ne.topSid);
                                var n = {};
                                n[1] = s.toTypedBuffer(),
                                console.log(" [svc_sdk] start to change subSid from", Ne.subSid, "to", t, ".topSid:", Ne.topSid, "uid:", Ne.uid, JSON.stringify(i)),
                                this.ap.reportLog("jump_sub_channel", "start"),
                                this.ap.sendApRouter("channelAuther", 25090, i, n)
                            }
                            ,
                            this.changeChannelBc = function(t, e, i, s) {
                                (s = {
                                    grpTypeLow: 1,
                                    grpTypeHigh: 0
                                }).grpIdLow = e,
                                s.grpIdHigh = 0;
                                var n = {
                                    grpTypeLow: 2,
                                    grpTypeHigh: 0
                                };
                                n.grpIdLow = i,
                                n.grpIdHigh = 0;
                                var o = {
                                    grpTypeLow: 1024,
                                    grpTypeHigh: 259
                                };
                                o.grpIdLow = i,
                                o.grpIdHigh = e,
                                (i = {
                                    grpTypeLow: 768,
                                    grpTypeHigh: 259,
                                    grpIdLow: 0
                                }).grpIdHigh = e;
                                var r = {
                                    grpTypeLow: 256,
                                    grpTypeHigh: 259,
                                    grpIdLow: 0
                                };
                                r.grpIdHigh = e,
                                (e = new Ue).uid = Ne.uid,
                                e.grpIdSet.push(s),
                                e.grpIdSet.push(n),
                                e.grpIdSet.push(o),
                                e.grpIdSet.push(i),
                                e.grpIdSet.push(r),
                                Ne.bNeedOnlineChanUser && ((s = {
                                    grpTypeLow: 769,
                                    grpTypeHigh: 259,
                                    grpIdLow: 0
                                }).grpIdHigh = Ne.topSid,
                                e.grpIdSet.push(s)),
                                (s = new Ae).uri = t,
                                this.ap.send(s.marshal(e))
                            }
                            ,
                            this.joinChannelBc = function() {
                                console.log(" [svc_sdk] start to join channel broadcast group."),
                                this.ap.reportLog("join_user_group_chl", "start", {
                                    topSid: Ne.topSid,
                                    subSid: Ne.subSid
                                }),
                                this.changeChannelBc(642648, Ne.topSid, Ne.subSid, Ne.bNeedOnlineChanUser)
                            }
                            ,
                            this.leaveChannel = function() {
                                if (0 == Ne.topSid || 0 == Ne.subSid)
                                    console.log(" [svc_sdk] sid zero. no action.", Ne.topSid, Ne.subSid),
                                    this.ap.reportLog("leave_channel", "invalid");
                                else {
                                    var t = new ce;
                                    t.uid = Ne.uid,
                                    t.topSid = Ne.topSid;
                                    var e = new Le;
                                    e.setUI32(Ne.topSid);
                                    var i = {};
                                    i[1] = e.toTypedBuffer(),
                                    console.log(" [svc_sdk] leave channel. topSid:", Ne.topSid, "subSid:", Ne.subSid),
                                    this.ap.reportLog("leave_channel", "start"),
                                    this.ap.sendApRouter("channelAuther", 2049794, t, i),
                                    this.leaveChannelBc(),
                                    this.serviceH5.leaveServiceBc(),
                                    Ne.topSid = 0,
                                    Ne.subSid = 0,
                                    Ne.tryTopSid = 0,
                                    Ne.trySubSid = 0,
                                    Ne.asid = 0,
                                    Ne.channelJoined = !1,
                                    Ne.lastSentJoinChl = 0,
                                    Ne.channelInfo = null,
                                    Ne.channelUserCount = {},
                                    Ne.micList = {},
                                    Ne.userInfos = {}
                                }
                            }
                            ,
                            this.leaveChannelBc = function() {
                                console.log(" [svc_sdk] start to leave channel broadcast group."),
                                this.ap.reportLog("leave_user_group_chl", "start"),
                                this.changeChannelBc(642904, Ne.topSid, Ne.subSid, Ne.bNeedOnlineChanUser)
                            }
                            ,
                            this.logout = function() {
                                console.log(" [svc_sdk] logout. uid:", Ne.uid);
                                var t = Ne.topSid
                                  , e = Ne.subSid;
                                this.ap.reportLog("logout", "start"),
                                this.leaveChannel();
                                var i = this.isGuestLogin();
                                Ne.logout(),
                                this.ap && this.ap.close(),
                                this.serviceH5.ap && this.serviceH5.ap.close(),
                                i || (this.start(Ne.udbAppId, Ne.udbAppkey, null, null),
                                t && e && (console.log(" [svc_sdk] re-join channel by logout", t, e),
                                this.joinChannel(t, e)))
                            }
                            ,
                            this.getUDBCredit = function() {
                                return Ne.credit
                            }
                            ,
                            this.getChannelUserCount = function() {
                                console.log(" [svc_sdk] start to get channel user count.");
                                var t = new function() {
                                    this.topSid = 0,
                                    this.sidlist = [],
                                    this.marshal = function(t) {
                                        t.setUI32(this.topSid),
                                        t.setUI32(this.sidlist.length);
                                        for (var e = 0; e < this.sidlist.length; ++e)
                                            t.setUI32(this.sidlist[e])
                                    }
                                }
                                ;
                                t.topSid = Ne.topSid;
                                var e = new Le;
                                e.setUI32(Ne.topSid);
                                var i = {};
                                i[1] = e.toTypedBuffer(),
                                this.ap.sendApRouter("channelUserInfo", 3125250, t, i)
                            }
                            ,
                            this.getMaixuList = function() {
                                console.log(" [svc_sdk] start to get maixu list"),
                                this.ap.reportLog("get_maixu", "start");
                                var t = new function() {
                                    this.uid = this.subSid = this.topSid = 0,
                                    this.marshal = function(t) {
                                        t.setUI32(this.topSid),
                                        t.setUI32(this.subSid),
                                        t.setUI32(this.uid)
                                    }
                                }
                                ;
                                t.uid = Ne.uid,
                                t.topSid = Ne.topSid,
                                t.subSid = Ne.subSid;
                                var e = new Le;
                                e.setUI32(Ne.topSid);
                                var i = {};
                                i[1] = e.toTypedBuffer(),
                                this.ap.sendApRouter("channelMaixu", 3854338, t, i)
                            }
                            ,
                            this.getCurSubSidRole = function(t, e, i, s) {
                                var n = 25
                                  , o = !1;
                                if (i) {
                                    for (var r = 0, a = 0; a < i.length; ++a)
                                        if (parseInt(t) == parseInt(i[a].subSid) && (r = i[a].role,
                                        o = !0),
                                        parseInt(e) == parseInt(i[a].subSid)) {
                                            n = i[a].role,
                                            o = !0;
                                            break
                                        }
                                    25 == n && r && (n = r)
                                }
                                return !o && s && (n = s),
                                n
                            }
                            ,
                            this.procMaixuSerialPack = function(t) {
                                (t = new Le(t.cmd)).getUI32();
                                var e = t.getUI32();
                                switch (t.getUI16(),
                                e) {
                                case 20482:
                                    for (e = new function() {
                                        this.uids = [],
                                        this.unmarshal = function(t) {
                                            for (var e = t.getUI32(), i = 0; i < e; ++i)
                                                this.uids.push(t.getUI32())
                                        }
                                    }
                                    ,
                                    t.getMarshal(e),
                                    t = 0; t < e.uids.length; ++t)
                                        this.addMicList(e.uids[t]);
                                    for (t = 0; t < this.h5MaixuCbs.length; ++t)
                                        this.h5MaixuCbs[t](Object({
                                            type: 1,
                                            microphones: e.uids
                                        }));
                                    break;
                                case 13058:
                                    for (e = new function() {
                                        this.uid = 0,
                                        this.unmarshal = function(t) {
                                            this.uid = t.getUI32()
                                        }
                                    }
                                    ,
                                    t.getMarshal(e),
                                    this.removeMicList(e.uid),
                                    t = 0; t < this.h5MaixuCbs.length; ++t)
                                        this.h5MaixuCbs[t](Object({
                                            type: 2,
                                            uid: e.uid
                                        }));
                                    break;
                                case 13314:
                                    for (e = new function() {
                                        this.admin = this.uid = 0,
                                        this.unmarshal = function(t) {
                                            this.uid = t.getUI32(),
                                            this.admin = t.getUI32()
                                        }
                                    }
                                    ,
                                    t.getMarshal(e),
                                    this.removeMicList(e.uid),
                                    t = 0; t < this.h5MaixuCbs.length; ++t)
                                        this.h5MaixuCbs[t](Object({
                                            type: 5,
                                            uid: e.uid,
                                            admin: e.admin
                                        }));
                                    break;
                                case 13570:
                                    for (e = new function() {
                                        this.time = this.admin = this.uid = 0,
                                        this.unmarshal = function(t) {
                                            this.uid = t.getUI32(),
                                            this.admin = t.getUI32(),
                                            this.time = t.getUI32()
                                        }
                                    }
                                    ,
                                    t.getMarshal(e),
                                    t = 0; t < this.h5MaixuCbs.length; ++t)
                                        this.h5MaixuCbs[t](Object({
                                            type: 6,
                                            uid: e.uid,
                                            admin: e.admin,
                                            time: e.time
                                        }));
                                    break;
                                case 13826:
                                    for (e = new function() {
                                        this.time = this.uid = 0,
                                        this.mute = !0,
                                        this.unmarshal = function(t) {
                                            this.uid = t.getUI32(),
                                            this.time = t.getUI32(),
                                            this.mute = t.getBool()
                                        }
                                    }
                                    ,
                                    t.getMarshal(e),
                                    t = 0; t < this.h5MaixuCbs.length; ++t)
                                        this.h5MaixuCbs[t](Object({
                                            type: 7,
                                            uid: e.uid,
                                            time: e.time
                                        }));
                                    break;
                                case 14082:
                                    for (e = new function() {
                                        this.uid = 0,
                                        this.down = !1,
                                        this.unmarshal = function(t) {
                                            this.uid = t.getUI32(),
                                            this.down = t.getBool()
                                        }
                                    }
                                    ,
                                    t.getMarshal(e),
                                    t = 0; t < this.h5MaixuCbs.length; ++t)
                                        this.h5MaixuCbs[t](Object({
                                            type: 8,
                                            uid: e.uid,
                                            down: e.down
                                        }));
                                    break;
                                case 14338:
                                    for (e = new function() {
                                        this.time = this.uid = 0,
                                        this.unmarshal = function(t) {
                                            this.uid = t.getUI32(),
                                            this.time = t.getUI32()
                                        }
                                    }
                                    ,
                                    t.getMarshal(e),
                                    t = 0; t < this.h5MaixuCbs.length; ++t)
                                        this.h5MaixuCbs[t](Object({
                                            type: 9,
                                            uid: e.uid,
                                            time: e.time
                                        }));
                                    break;
                                case 14594:
                                    for (e = new function() {
                                        this.uid = 0,
                                        this.unmarshal = function(t) {
                                            this.uid = t.getUI32()
                                        }
                                    }
                                    ,
                                    t.getMarshal(e),
                                    this.removeMicList(e.uid),
                                    t = 0; t < this.h5MaixuCbs.length; ++t)
                                        this.h5MaixuCbs[t](Object({
                                            type: 10,
                                            uid: e.uid
                                        }));
                                    break;
                                case 14850:
                                    for (e = new function() {
                                        this.uid = 0,
                                        this.disable = !0,
                                        this.unmarshal = function(t) {
                                            this.uid = t.getUI32(),
                                            this.disable = t.getBool()
                                        }
                                    }
                                    ,
                                    t.getMarshal(e),
                                    t = 0; t < this.h5MaixuCbs.length; ++t)
                                        this.h5MaixuCbs[t](Object({
                                            type: 11,
                                            uid: e.uid,
                                            disable: e.disable
                                        }));
                                    break;
                                case 15362:
                                    for (e = new function() {
                                        this.admin = this.uid = 0,
                                        this.unmarshal = function(t) {
                                            this.uid = t.getUI32(),
                                            this.admin = t.getUI32()
                                        }
                                    }
                                    ,
                                    t.getMarshal(e),
                                    this.addMicList(e.uid),
                                    t = 0; t < this.h5MaixuCbs.length; ++t)
                                        this.h5MaixuCbs[t](Object({
                                            type: 12,
                                            uid: e.uid,
                                            admin: e.admin
                                        }));
                                    break;
                                case 17922:
                                    e = new function() {
                                        this.admin = 0,
                                        this.unmarshal = function(t) {
                                            this.admin = t.getUI32()
                                        }
                                    }
                                    ,
                                    t.getMarshal(e),
                                    console.log(" [svc_sdk] got KickAllMaixuURI:", JSON.stringify(e));
                                    var i = Ne.micList.micList.slice();
                                    for (t = 0; t < i.length; ++t)
                                        this.removeMicList(i[t]);
                                    for (t = 0; t < this.h5MaixuCbs.length; ++t)
                                        this.h5MaixuCbs[t](Object({
                                            type: 13,
                                            admin: e.admin
                                        }));
                                    break;
                                case 18178:
                                    for (e = new function() {
                                        this.uid = 0,
                                        this.unmarshal = function(t) {
                                            this.uid = t.getUI32()
                                        }
                                    }
                                    ,
                                    t.getMarshal(e),
                                    t = 0; t < this.h5MaixuCbs.length; ++t)
                                        this.h5MaixuCbs[t](Object({
                                            type: 14,
                                            uid: e.uid
                                        }));
                                    break;
                                case 3379202:
                                    for (e = new function() {
                                        this.invitee = this.micFirst = this.admin = this.subSid = this.topSid = 0,
                                        this.unmarshal = function(t) {
                                            this.topSid = t.getUI32(),
                                            this.subSid = t.getUI32(),
                                            this.admin = t.getUI32(),
                                            this.micFirst = t.getUI32(),
                                            this.invitee = t.getUI32()
                                        }
                                    }
                                    ,
                                    t.getMarshal(e),
                                    this.addChorusList(e.invitee),
                                    t = 0; t < this.h5MaixuCbs.length; ++t)
                                        this.h5MaixuCbs[t](Object({
                                            type: 15,
                                            uid: e.invitee,
                                            admin: e.admin,
                                            mic_first: e.micFirst
                                        }));
                                    break;
                                case 3379714:
                                    for (e = new function() {
                                        this.mode = this.invitee = this.micFirst = this.res = this.subSid = this.topSid = 0,
                                        this.uinfos = [],
                                        this.unmarshal = function(t) {
                                            this.topSid = t.getUI32(),
                                            this.subSid = t.getUI32(),
                                            this.res = t.getUI32(),
                                            this.micFirst = t.getUI32(),
                                            this.invitee = t.getUI32()
                                        }
                                    }
                                    ,
                                    t.getMarshal(e),
                                    this.addChorusList(e.invitee),
                                    t = 0; t < this.h5MaixuCbs.length; ++t)
                                        this.h5MaixuCbs[t](Object({
                                            type: 16,
                                            uid: e.invitee,
                                            admin: e.admin,
                                            mic_first: e.micFirst
                                        }));
                                    break;
                                case 3379970:
                                    for (e = new function() {
                                        this.invitee = this.micFirst = this.oper = this.subSid = this.topSid = 0,
                                        this.unmarshal = function(t) {
                                            this.topSid = t.getUI32(),
                                            this.subSid = t.getUI32(),
                                            this.oper = t.getUI32(),
                                            this.micFirst = t.getUI32(),
                                            this.invitee = t.getUI32()
                                        }
                                    }
                                    ,
                                    t.getMarshal(e),
                                    this.removeChorusList(e.invitee),
                                    t = 0; t < this.h5MaixuCbs.length; ++t)
                                        this.h5MaixuCbs[t](Object({
                                            type: 17,
                                            uid: e.invitee,
                                            operator: e.oper,
                                            mic_first: e.micFirst
                                        }));
                                    break;
                                default:
                                    console.log(" [svc_sdk] unrecognized MaixuSerialPack ruri:", e / 256, "|", e % 256)
                                }
                            }
                            ,
                            this.procUserGroupMsg = function(t) {
                                (t = new Le(t.msg)).getUI32();
                                var e = t.getUI32();
                                switch (t.getUI16(),
                                e) {
                                case 3100418:
                                    e = new function() {
                                        this.serialH32 = this.serialL32 = 0,
                                        this.cmd = null,
                                        this.unmarshal = function(t) {
                                            this.serialL32 = t.getUI32(),
                                            this.serialH32 = t.getUI32();
                                            var e = t.getUI32();
                                            this.cmd = t.getBytes(e)
                                        }
                                    }
                                    ,
                                    t.getMarshal(e),
                                    this.procMaixuSerialPack(e);
                                    break;
                                case 3139586:
                                    for (e = new function() {
                                        this.totalCount = 0,
                                        this.subCount = {},
                                        this.unmarshal = function(t) {
                                            this.totalCount = t.getUI32();
                                            for (var e = t.getUI32(), i = 0; i < e; ++i) {
                                                var s = t.getUI32()
                                                  , n = t.getUI32();
                                                this.subCount[s.toString()] = n
                                            }
                                        }
                                    }
                                    ,
                                    t.getMarshal(e),
                                    Ne.channelUserCount.totalUserCount = e.totalCount,
                                    Ne.channelUserCount.sid2count = e.subCount,
                                    t = 0; t < this.h5ChannelEventCbs.length; ++t)
                                        this.h5ChannelEventCbs[t](Object({
                                            type: 1,
                                            total: e.totalCount,
                                            sid2count: e.subCount
                                        }));
                                    break;
                                case 79106:
                                    for (e = new fe,
                                    t.getMarshal(e),
                                    console.log(" [svc_sdk] got ChannelKickOffURI:", JSON.stringify(e)),
                                    Ne.uid == e.uid && (0 == e.toChannel ? (this.ap.reportLog("be_kicked_channel", "leave", {
                                        notify_uid: e.uid
                                    }),
                                    this.leaveChannel()) : (this.ap.reportLog("be_kicked_sub_channel", "leave", {
                                        notify_uid: e.uid
                                    }),
                                    this.leaveChannelBc(),
                                    this.serviceH5.leaveServiceBc(),
                                    Ne.micList = {},
                                    Ne.subSid = e.toChannel,
                                    this.joinChannelBc(),
                                    this.serviceH5.joinServiceBc(),
                                    console.log("be kicked to subChannel:", e.toChannel),
                                    this.getMaixuList())),
                                    t = 0; t < this.h5ChannelEventCbs.length; ++t)
                                        this.h5ChannelEventCbs[t](Object({
                                            type: 7,
                                            reason: e.reason,
                                            seconds: e.seconds,
                                            uid: e.uid,
                                            admin: e.admin,
                                            oldSid: e.sid,
                                            newSid: e.toChannel,
                                            kickType: e.kickType
                                        }));
                                    break;
                                case 2440706:
                                case 16647:
                                    e = new function() {
                                        this.updator = this.sid = 0,
                                        this.infos = {},
                                        this.unmarshal = function(t) {
                                            this.sid = t.getUI32(),
                                            this.updator = t.getUI32();
                                            for (var e = t.getUI32(), i = 0; i < e; ++i) {
                                                var s = t.getUI16()
                                                  , n = t.getUI16();
                                                n = t.getUTF8(n),
                                                this.infos[s.toString()] = n
                                            }
                                        }
                                    }
                                    ,
                                    t.getMarshal(e),
                                    console.log(" [svc_sdk] got PChannelInfoUpdateURI:", JSON.stringify(e));
                                    var i = Object.keys(e.infos);
                                    for (t = 0; t < i.length; ++t)
                                        Ne.channelInfo.baseInfo[e.sid.toString()][i[t]] = e.infos[i[t]];
                                    for (t = 0; t < this.h5ChannelEventCbs.length; ++t)
                                        this.h5ChannelEventCbs[t](Object({
                                            type: 5,
                                            sub_sid: e.sid,
                                            updator: e.updator,
                                            infos: e.infos
                                        }));
                                    break;
                                case 2440450:
                                    for (e = new function() {
                                        this.subSid = 0,
                                        this.props = {},
                                        this.mode = this.creator = 0,
                                        this.infos = [],
                                        this.unmarshal = function(t) {
                                            this.subSid = t.getUI32();
                                            for (var e = t.getUI32(), i = 0; i < e; ++i) {
                                                var s = t.getUI16()
                                                  , n = t.getUI16()
                                                  , o = t.getUTF8(n);
                                                this.props[s.toString()] = o
                                            }
                                            if (this.creator = t.getUI32(),
                                            !t.empty())
                                                for (this.mode = t.getUI8(),
                                                e = t.getUI32(),
                                                i = 0; i < e; ++i) {
                                                    for ((o = {}).uid = t.getUI32(),
                                                    n = t.getUI16(),
                                                    o.nick = t.getUTF8(n),
                                                    n = t.getUI16(),
                                                    o.sign = t.getUTF8(n),
                                                    o.pid = t.getUI32(),
                                                    o.jifen = t.getUI32(),
                                                    o.sjifen = t.getUI32(),
                                                    o.gender = t.getUI8(),
                                                    o.rolers = [],
                                                    i = t.getUI32(),
                                                    s = 0; s < i; s++) {
                                                        var r = {};
                                                        r.cid = t.getUI32(),
                                                        r.roler = t.getUI16(),
                                                        o.rolers.push(r)
                                                    }
                                                    for (o.ip = t.getUI32(),
                                                    n = t.getUI16(),
                                                    o.pcInfo = t.getUTF8(n),
                                                    o.extInfo = {},
                                                    r = t.getUI32(),
                                                    i = 0; i < r; ++i)
                                                        s = t.getUI8(),
                                                        n = t.getUI16(),
                                                        n = t.getUTF8(n),
                                                        o.extInfo[s.toString()] = n;
                                                    this.infos.push(o)
                                                }
                                        }
                                    }
                                    ,
                                    t.getMarshal(e),
                                    Ne.channelInfo.baseInfo[e.subSid.toString()] = e.props,
                                    Ne.channelInfo.subs.push(e.subSid),
                                    console.log(" [svc_sdk] got PSubChannelAddInfoURI:", JSON.stringify(e)),
                                    t = 0; t < this.h5ChannelEventCbs.length; ++t)
                                        this.h5ChannelEventCbs[t](Object({
                                            type: 6,
                                            code: 0,
                                            add: e
                                        }));
                                    break;
                                case 8706:
                                    for (e = new function() {
                                        this.mode = this.uid = this.pid = this.subSid = 0,
                                        this.infos = [],
                                        this.opMode = 0,
                                        this.unmarshal = function(t) {
                                            if (this.subSid = t.getUI32(),
                                            this.pid = t.getUI32(),
                                            this.uid = t.getUI32(),
                                            !t.empty()) {
                                                this.mode = t.getUI8(),
                                                sz = t.getUI32();
                                                for (var e = 0; e < sz; ++e) {
                                                    var i = {};
                                                    i.uid = t.getUI32();
                                                    var s = t.getUI16();
                                                    i.nick = t.getUTF8(s),
                                                    s = t.getUI16(),
                                                    i.sign = t.getUTF8(s),
                                                    i.pid = t.getUI32(),
                                                    i.jifen = t.getUI32(),
                                                    i.sjifen = t.getUI32(),
                                                    i.gender = t.getUI8(),
                                                    i.rolers = [],
                                                    e = t.getUI32();
                                                    for (var n = 0; n < e; n++) {
                                                        var o = {};
                                                        o.cid = t.getUI32(),
                                                        o.roler = t.getUI16(),
                                                        i.rolers.push(o)
                                                    }
                                                    for (i.ip = t.getUI32(),
                                                    s = t.getUI16(),
                                                    i.pcInfo = t.getUTF8(s),
                                                    i.extInfo = {},
                                                    n = t.getUI32(),
                                                    e = 0; e < n; ++e)
                                                        o = t.getUI8(),
                                                        s = t.getUI16(),
                                                        s = t.getUTF8(s),
                                                        i.extInfo[o.toString()] = s;
                                                    this.infos.push(i)
                                                }
                                            }
                                            t.empty() || (this.opMode = t.getUI8())
                                        }
                                    }
                                    ,
                                    t.getMarshal(e),
                                    delete Ne.channelInfo.baseInfo[e.subSid.toString()],
                                    t = 0; t < Ne.channelInfo.subs.length; ++t)
                                        if (Ne.channelInfo.subs[t] == e.subSid) {
                                            Ne.channelInfo.subs.splice(t, 1);
                                            break
                                        }
                                    for (console.log(" [svc_sdk] got PSubChannelRmInfoURI:", JSON.stringify(e)),
                                    t = 0; t < this.h5ChannelEventCbs.length; ++t)
                                        this.h5ChannelEventCbs[t](Object({
                                            type: 6,
                                            code: 1,
                                            remove: e
                                        }));
                                    break;
                                case 3140610:
                                    if (t.getUI32(),
                                    t.getUI32(),
                                    1 == (e = t.decompress()).length)
                                        t = new Le(e[0]);
                                    else {
                                        var s = e[0];
                                        for (t = 1; t < e.length; ++t)
                                            s = s.concat(e[t]);
                                        t = new Le(s)
                                    }
                                    for (e = new function() {
                                        this.topSid = 0,
                                        this.admins = {},
                                        this.removes = [],
                                        this.unmarshal = function(t) {
                                            this.topSid = t.getUI32();
                                            for (var e = t.getUI32(), i = 0; i < e; ++i) {
                                                var s = t.getUI32()
                                                  , n = new we;
                                                t.getMarshal(n),
                                                this.admins[s.toString()] = n.props
                                            }
                                            for (e = t.getUI32(),
                                            i = 0; i < e; ++i)
                                                this.removes.push(t.getUI32())
                                        }
                                    }
                                    ,
                                    t.getMarshal(e),
                                    console.log(" [svc_sdk] got channel admins push:", JSON.stringify(e)),
                                    s = {},
                                    i = Object.keys(e.admins),
                                    t = 0; t < i.length; ++t) {
                                        var n = i[t];
                                        Ne.userInfos[n] || (Ne.userInfos[n] = {}),
                                        Object.assign(Ne.userInfos[n], e.admins[n]),
                                        Ne.userInfos[n].chl = !0,
                                        s[n] = {
                                            uid: n,
                                            role: this.getCurSubSidRole(Ne.topSid, Ne.subSid, e.admins[n].role, Ne.userInfos[n].roler)
                                        }
                                    }
                                    this.serviceH5.dataRecvCbs(6, s);
                                    break;
                                case 16903:
                                    e = new function() {
                                        this.op = this.roler = this.admin = this.uid = this.topSid = 0,
                                        this.nick = "",
                                        this.gender = 0,
                                        this.unmarshal = function(t) {
                                            this.topSid = t.getUI32(),
                                            this.uid = t.getUI32(),
                                            this.admin = t.getUI32(),
                                            this.roler = t.getUI16(),
                                            this.op = t.getUI16();
                                            var e = t.getUI16();
                                            this.nick = t.getUTF8(e),
                                            this.gender = t.getUI16()
                                        }
                                    }
                                    ,
                                    t.getMarshal(e),
                                    console.log(" [svc_sdk] got channel member update:", JSON.stringify(e)),
                                    t = e.uid.toString(),
                                    void 0 === Ne.userInfos[t] && (Ne.userInfos[t] = {}),
                                    Ne.userInfos[t].roler = e.roler,
                                    150 > e.roler && delete Ne.userInfos[t].role,
                                    Ne.userInfos[t].chl = !0,
                                    s = {},
                                    n = e.uid.toString(),
                                    s[n] = {
                                        admin: e.admin
                                    },
                                    s[n].role = this.getCurSubSidRole(Ne.topSid, Ne.subSid, Ne.userInfos[t].role, e.roler),
                                    s[n].uid = e.uid,
                                    s[n].op = e.op,
                                    this.serviceH5.dataRecvCbs(6, s);
                                    break;
                                case 3137794:
                                    if (t.getUI32(),
                                    t.getUI32(),
                                    1 == (e = t.decompress()).length)
                                        t = new Le(e[0]);
                                    else {
                                        for (s = e[0],
                                        t = 1; t < e.length; ++t)
                                            s = s.concat(e[t]);
                                        t = new Le(s)
                                    }
                                    for (e = new function() {
                                        this.version = this.topSid = 0,
                                        this.updates = {},
                                        this.removes = [],
                                        this.unmarshal = function(t) {
                                            this.topSid = t.getUI32(),
                                            this.version = t.getUI32();
                                            for (var e = t.getUI32(), i = 0; i < e; ++i) {
                                                var s = t.getUI32();
                                                t.getUI32();
                                                var n = new we;
                                                t.getMarshal(n),
                                                this.updates[s.toString()] = n
                                            }
                                            for (e = t.getUI32(),
                                            i = 0; i < e; ++i)
                                                this.removes.push(t.getUI32()),
                                                t.getUI32()
                                        }
                                    }
                                    ,
                                    t.getMarshal(e),
                                    console.log(" [svc_sdk] got channel user push notification:", JSON.stringify(e)),
                                    t = 0; t < this.h5ChannelEventCbs.length; ++t)
                                        this.h5ChannelEventCbs[t](Object({
                                            type: 8,
                                            updates: e.updates,
                                            removes: e.removes
                                        }));
                                    break;
                                case 12290:
                                    for (e = new ve,
                                    t.getMarshal(e),
                                    Ne.userInfos[e.uid] || (Ne.userInfos[e.uid] = {}),
                                    Ne.userInfos[e.uid].disableVoice = 1,
                                    console.log(" [svc_sdk] disable user voice:", JSON.stringify(e)),
                                    t = 0; t < this.h5ChannelEventCbs.length; ++t)
                                        this.h5ChannelEventCbs[t](Object({
                                            type: 10,
                                            code: 0,
                                            uid: e.uid,
                                            admin: e.admin,
                                            disable: e.disable,
                                            subSid: e.subSid
                                        }));
                                    break;
                                case 12546:
                                    for (e = new ve,
                                    t.getMarshal(e),
                                    Ne.userInfos[e.uid] || (Ne.userInfos[e.uid] = {}),
                                    Ne.userInfos[e.uid].disableText = 1,
                                    console.log(" [svc_sdk] disable user text:", JSON.stringify(e)),
                                    t = 0; t < this.h5ChannelEventCbs.length; ++t)
                                        this.h5ChannelEventCbs[t](Object({
                                            type: 10,
                                            code: 1,
                                            uid: e.uid,
                                            admin: e.admin,
                                            disable: e.disable,
                                            subSid: e.subSid
                                        }));
                                    break;
                                case 43010:
                                    for (e = new function() {
                                        this.status = this.admin = this.subSid = 0,
                                        this.unmarshal = function(t) {
                                            this.subSid = t.getUI32(),
                                            this.admin = t.getUI32(),
                                            this.status = t.getUI32()
                                        }
                                    }
                                    ,
                                    t.getMarshal(e),
                                    this.updateSubChanInfo(e.subSid, "disableText", e.status),
                                    console.log(" [svc_sdk] got SetChannelTextURI:", JSON.stringify(e)),
                                    t = 0; t < this.h5ChannelEventCbs.length; ++t)
                                        this.h5ChannelEventCbs[t](Object({
                                            type: 11,
                                            status: e.status,
                                            admin: e.admin,
                                            subSid: e.subSid
                                        }))
                                }
                            }
                            ,
                            this.addMicList = function(t) {
                                Ne.micList.micList.push(t),
                                console.log(" [svc_sdk] after addMicList... ", JSON.stringify(Ne.micList))
                            }
                            ,
                            this.removeMicList = function(t) {
                                for (var e = !1, i = 0; i < Ne.micList.micList.length; ++i)
                                    if (Ne.micList.micList[i] == t) {
                                        Ne.micList.micList.splice(i, 1),
                                        e = !0;
                                        break
                                    }
                                if (e)
                                    for (i = 0; i < Ne.micList.linkedMicList.length; ++i)
                                        if (Ne.micList.linkedMicList[i] == t) {
                                            Ne.micList.linkedMicList.splice(i, 1),
                                            1 == Ne.micList.linkedMicList.length && Ne.micList.linkedMicList[0] == Ne.micList.micList[0] && Ne.micList.linkedMicList.splice(0, 1);
                                            break
                                        }
                                console.log(" [svc_sdk] after removeMicList... uid:", t, JSON.stringify(Ne.micList))
                            }
                            ,
                            this.addChorusList = function(t) {
                                0 == Ne.micList.linkedMicList.length && Ne.micList.linkedMicList.push(Ne.micList.micList[0]),
                                Ne.micList.linkedMicList.push(t),
                                console.log(" [svc_sdk] after addChorusList... ", JSON.stringify(Ne.micList))
                            }
                            ,
                            this.removeChorusList = function(t) {
                                for (var e = 0; e < Ne.micList.linkedMicList.length; ++e)
                                    if (Ne.micList.linkedMicList[e] == t) {
                                        Ne.micList.linkedMicList.splice(e, 1);
                                        break
                                    }
                                1 == Ne.micList.linkedMicList.length && Ne.micList.linkedMicList[0] == Ne.micList.micList[0] && Ne.micList.linkedMicList.splice(0, 1),
                                console.log(" [svc_sdk] after removeChorusList... ", JSON.stringify(Ne.micList))
                            }
                            ,
                            this.procAPRouter = function(t) {
                                switch (t.ruri) {
                                case 2048514:
                                    var e = new Le(t.payload)
                                      , i = new function() {
                                        this.loginStatus = this.loginTs = this.asid = this.subSid = this.uid = this.topSid = 0,
                                        this.errInfo = "",
                                        this.expiredTs = 0,
                                        this.joinProps = {},
                                        this.unmarshal = function(t) {
                                            this.topSid = t.getUI32(),
                                            this.uid = t.getUI32(),
                                            this.subSid = t.getUI32(),
                                            this.asid = t.getUI32(),
                                            this.loginTs = t.getUI32(),
                                            this.loginStatus = t.getUI8();
                                            var e = t.getUI16();
                                            this.errInfo = t.getUTF8(e),
                                            this.expiredTs = t.getUI32();
                                            for (var i = t.getUI32(), s = 0; s < i; ++s) {
                                                var n = t.getUI32();
                                                e = t.getUI16(),
                                                e = t.getUTF8(e),
                                                this.joinProps[n.toString()] = e
                                            }
                                        }
                                    }
                                    ;
                                    if (e.getMarshal(i),
                                    4 == i.loginStatus)
                                        Ne.channelJoined = !0,
                                        Ne.topSid = i.topSid,
                                        Ne.subSid = i.subSid,
                                        Ne.asid = i.asid,
                                        console.log(" [svc_sdk] join channel success.", JSON.stringify(i)),
                                        this.ap.reportLog("join_channel", "success"),
                                        this.joinChannelBc(),
                                        this.serviceH5.joinServiceBc(),
                                        (t = new function() {
                                            this.chnlInfoMode = 0,
                                            this.md5 = "",
                                            this.topSid = 0,
                                            this.marshal = function(t) {
                                                t.setUI8(this.chnlInfoMode),
                                                t.setUTF8(this.md5, 16),
                                                t.setUI32(this.topSid)
                                            }
                                        }
                                        ).topSid = Ne.topSid,
                                        (e = new Le).setUI32(Ne.topSid),
                                        (i = {})[1] = e.toTypedBuffer(),
                                        this.ap.sendApRouter("channelInfo", 3096834, t, i),
                                        (e = new function() {
                                            this.topSid = 0,
                                            this.marshal = function(t) {
                                                t.setUI32(this.topSid)
                                            }
                                        }
                                        ).topSid = Ne.topSid,
                                        this.ap.sendApRouter("chatCtrl", 3143682, e, i),
                                        this.serviceH5.getUserRoleInfo([Ne.uid]),
                                        (i = new function() {
                                            this.topSid = this.uid = 0,
                                            this.reserve = "",
                                            this.type2Val = {},
                                            this.marshal = function(t) {
                                                t.setUI32(this.uid),
                                                t.setUI32(this.topSid),
                                                t.setUTF8(this.reserve, 16);
                                                var e = Object.keys(this.type2Val);
                                                t.setUI32(e.length);
                                                for (var i = 0; i < e.length; ++i)
                                                    t.setUI16(parseInt(e[i])),
                                                    t.setBytes(this.type2Val[e[i]], 16)
                                            }
                                        }
                                        ).uid = Ne.uid,
                                        i.topSid = Ne.topSid,
                                        (e = new Le).setUI32(1),
                                        e.setUI16(2),
                                        e.setUTF8("4100", 16),
                                        i.type2Val[1] = e.toTypedBuffer(),
                                        console.log(" [svc_sdk] setting webyy logo..."),
                                        this.serviceH5.sendAppSender(22, 386136, i);
                                    else
                                        for (console.log(" [svc_sdk] join channel failed.", JSON.stringify(i)),
                                        this.ap.reportLog("join_channel", "fail", {
                                            code: i.loginStatus,
                                            topSid: i.topSid,
                                            subSid: i.subSid
                                        }),
                                        e = 0; e < this.h5ChannelEventCbs.length; ++e)
                                            this.h5ChannelEventCbs[e](Object({
                                                type: 0,
                                                code: i.loginStatus,
                                                uid: i.uid,
                                                top_sid: i.topSid,
                                                sub_sid: i.subSid,
                                                msg: i.errInfo
                                            }));
                                    break;
                                case 2439426:
                                    for (e = new Le(t.payload),
                                    i = new function() {
                                        this.rank = this.resCode = this.uid = this.toSid = this.fromSid = 0,
                                        this.sid2Change = [],
                                        this.seq = 0,
                                        this.unmarshal = function(t) {
                                            this.fromSid = t.getUI32(),
                                            this.toSid = t.getUI32(),
                                            this.uid = t.getUI32(),
                                            this.resCode = t.getUI32(),
                                            this.rank = t.getUI32();
                                            for (var e = t.getUI32(), i = 0; i < e; ++i) {
                                                var s = t.getUI32()
                                                  , n = t.getUI32();
                                                this.sid2Change.push({
                                                    first: s,
                                                    second: n
                                                })
                                            }
                                            this.seq = t.getUI64()
                                        }
                                    }
                                    ,
                                    e.getMarshal(i),
                                    200 == i.resCode ? (this.leaveChannelBc(),
                                    this.serviceH5.leaveServiceBc(),
                                    Ne.micList = {},
                                    Ne.subSid = i.toSid,
                                    this.joinChannelBc(),
                                    this.serviceH5.joinServiceBc(),
                                    console.log("jump subChannel success.", JSON.stringify(i)),
                                    this.ap.reportLog("jump_sub_channel", "success"),
                                    i.resCode = 4,
                                    this.getMaixuList()) : (console.log("jump subChannel failed.", JSON.stringify(i)),
                                    this.ap.reportLog("jump_sub_channel", "fail")),
                                    e = 0; e < this.h5ChannelEventCbs.length; ++e)
                                        this.h5ChannelEventCbs[e](Object({
                                            type: 0,
                                            code: i.resCode,
                                            uid: i.uid,
                                            top_sid: Ne.topSid,
                                            sub_sid: i.toSid
                                        }));
                                    break;
                                case 2050050:
                                    for (e = new Le(t.payload),
                                    i = new function() {
                                        this.topSid = this.uid = 0,
                                        this.marshal = function(t) {
                                            t.setUI32(this.uid),
                                            t.setUI32(this.topSid)
                                        }
                                    }
                                    ,
                                    e.getMarshal(i),
                                    console.log(" [svc_sdk] leave channel rsp.", JSON.stringify(i)),
                                    this.ap.reportLog("leave_channel", "success", {
                                        topSid: i.topSid
                                    }),
                                    Ne.topSid == i.topSid && (Ne.channelJoined = !1,
                                    Ne.topSid = 0,
                                    Ne.subSid = 0,
                                    Ne.asid = 0,
                                    Ne.everJoinChannel = !1),
                                    e = 0; e < this.h5ChannelEventCbs.length; ++e)
                                        this.h5ChannelEventCbs[e](Object({
                                            type: 4,
                                            top_sid: i.topSid
                                        }));
                                    break;
                                case 3125506:
                                    for (e = new Le(t.payload),
                                    i = new function() {
                                        this.totalCount = this.topSid = 0,
                                        this.sid2Count = {},
                                        this.unmarshal = function(t) {
                                            this.topSid = t.getUI32(),
                                            this.totalCount = t.getUI32();
                                            for (var e = t.getUI32(), i = 0; i < e; ++i) {
                                                var s = t.getUI32()
                                                  , n = t.getUI32();
                                                this.sid2Count[s.toString()] = n
                                            }
                                        }
                                    }
                                    ,
                                    e.getMarshal(i),
                                    console.log(" [svc_sdk] got ChannelUserCountResURI:", JSON.stringify(i)),
                                    Ne.channelUserCount.totalUserCount = i.totalCount,
                                    Ne.channelUserCount.sid2count = i.sid2Count,
                                    e = 0; e < this.h5ChannelEventCbs.length; ++e)
                                        this.h5ChannelEventCbs[e](Object({
                                            type: 1,
                                            total: i.totalCount,
                                            sid2count: i.sid2Count
                                        }));
                                    break;
                                case 3854594:
                                    for (e = new Le(t.payload),
                                    i = new function() {
                                        this.disable = this.mute = !1,
                                        this.validring = this.count = this.ring = 0,
                                        this.userlist = [],
                                        this.subSid = this.topSid = 0,
                                        this.choruslist = [],
                                        this.unmarshal = function(t) {
                                            this.mute = t.getBool(),
                                            this.disable = t.getBool(),
                                            this.ring = t.getUI32(),
                                            this.count = t.getUI32(),
                                            this.validring = t.getUI32();
                                            for (var e = t.getUI32(), i = 0; i < e; ++i)
                                                this.userlist.push(t.getUI32());
                                            for (this.topSid = t.getUI32(),
                                            this.subSid = t.getUI32(),
                                            e = t.getUI32(),
                                            i = 0; i < e; ++i)
                                                this.choruslist.push(t.getUI32())
                                        }
                                    }
                                    ,
                                    e.getMarshal(i),
                                    console.log(" [svc_sdk] got maixu list:", JSON.stringify(i)),
                                    this.ap.reportLog("get_maixu", "success"),
                                    Ne.micList.micList = i.userlist,
                                    Ne.micList.linkedMicList = i.choruslist,
                                    0 != i.choruslist.length && Ne.micList.linkedMicList.unshift(i.userlist[0]),
                                    console.log(" [svc_sdk] globals mic list:", JSON.stringify(Ne.micList.micList)),
                                    console.log(" [svc_sdk] globals linked mic list:", JSON.stringify(Ne.micList.linkedMicList)),
                                    e = 0; e < this.h5MaixuCbs.length; ++e)
                                        this.h5MaixuCbs[e](Object({
                                            type: 0,
                                            microphones: i.userlist,
                                            chorus: i.choruslist
                                        }));
                                    break;
                                case 533080:
                                    e = new Le(t.payload),
                                    i = new me,
                                    e.getMarshal(i),
                                    this.procUserGroupMsg(i);
                                    break;
                                case 3123714:
                                    for (e = new Le(t.payload),
                                    i = new function() {
                                        this.receptionSid = this.topSid = 0,
                                        this.baseInfo = {},
                                        this.subs = [],
                                        this.authes = [],
                                        this.resCode = 0,
                                        this.unmarshal = function(t) {
                                            this.topSid = t.getUI32(),
                                            this.receptionSid = t.getUI32();
                                            for (var e = t.getUI32(), i = 0; i < e; ++i) {
                                                var s = t.getUI32().toString();
                                                this.baseInfo[s] = {};
                                                for (var n = t.getUI32(), o = 0; o < n; ++o) {
                                                    var r = t.getUI16()
                                                      , a = t.getUI16();
                                                    a = t.getUTF8(a),
                                                    this.baseInfo[s][r] = a
                                                }
                                            }
                                            for (e = t.getUI32(),
                                            i = 0; i < e; ++i)
                                                this.subs.push(t.getUI32());
                                            for (e = t.getUI32(),
                                            i = 0; i < e; ++i)
                                                (s = {}).sess_from_role = t.getUI32(),
                                                s.sess_to_role = t.getUI32(),
                                                s.auth_code = t.getUI32(),
                                                this.authes.push(s);
                                            this.resCode = t.getUI32()
                                        }
                                    }
                                    ,
                                    e.getMarshal(i),
                                    this.ap.reportLog("get_channel_info", "success"),
                                    this.getChannelUserCount(),
                                    this.getMaixuList(),
                                    Ne.channelInfo = i,
                                    e = 0; e < this.h5ChannelEventCbs.length; ++e)
                                        this.h5ChannelEventCbs[e](Object({
                                            type: 0,
                                            code: 4,
                                            uid: t.uid,
                                            top_sid: Ne.topSid,
                                            sub_sid: Ne.subSid
                                        }));
                                    break;
                                case 3126018:
                                    for (e = new Le(t.payload),
                                    i = new function() {
                                        this.users = {},
                                        this.unmarshal = function(t) {
                                            t.getUI32();
                                            for (var e = t.getUI32(), i = 0; i < e; ++i) {
                                                var s = t.getUI32()
                                                  , n = new we;
                                                t.getMarshal(n),
                                                n.props.uid = s,
                                                n.props.chl = !0,
                                                this.users[s.toString()] = n.props
                                            }
                                        }
                                        ,
                                        this.onlySubChannel = function(t, e, i) {
                                            for (var s = {}, n = Object.keys(this.users), o = 0; o < n.length; ++o) {
                                                for (var r = {}, a = this.users[n[o]], h = Object.keys(a), l = 0; l < h.length; ++l)
                                                    "role" != h[l] && "roler" != h[l] && (r[h[l]] = a[h[l]]);
                                                r.role = i(t, e, a.role, 25),
                                                s[n[o]] = r
                                            }
                                            return s
                                        }
                                    }
                                    ,
                                    e.getMarshal(i),
                                    t = Object.keys(i.users),
                                    e = 0; e < t.length; ++e) {
                                        var s = t[e];
                                        void 0 === Ne.userInfos[s] && (Ne.userInfos[s] = {}),
                                        Object.assign(Ne.userInfos[s], i.users[s])
                                    }
                                    0 != Object.keys(i.users).length && this.serviceH5.dataRecvCbs(6, i.onlySubChannel(Ne.topSid, Ne.subSid, this.getCurSubSidRole));
                                    break;
                                case 3126530:
                                    e = new Le(t.payload),
                                    i = new function() {
                                        this.pos = this.subSid = this.topSid = 0,
                                        this.users = {},
                                        this.unmarshal = function(t) {
                                            this.topSid = t.getUI32(),
                                            this.subSid = t.getUI32(),
                                            this.pos = t.getUI32();
                                            for (var e = t.getUI32(), i = 0; i < e; ++i) {
                                                var s = t.getUI32()
                                                  , n = new we;
                                                t.getMarshal(n),
                                                n.props.uid = s,
                                                n.props.chl = !0,
                                                this.users[s.toString()] = n.props
                                            }
                                        }
                                    }
                                    ,
                                    e.getMarshal(i),
                                    t = Object.keys(i.users);
                                    var n = [];
                                    for (e = 0; e < t.length; ++e)
                                        s = t[e],
                                        n.push(s),
                                        void 0 === Ne.userInfos[s] && (Ne.userInfos[s] = {}),
                                        Object.assign(Ne.userInfos[s], i.users[s]);
                                    for (e = 0; e < this.h5ChannelEventCbs.length; ++e)
                                        this.h5ChannelEventCbs[e](Object({
                                            type: 2,
                                            uids: n,
                                            topSid: i.topSid,
                                            subSid: i.subSid
                                        }));
                                    break;
                                case 3148802:
                                    if (e = new Le(t.payload),
                                    i = new function() {
                                        this.topSid = this.type = 0,
                                        this.msg = "",
                                        this.seqId = this.serverId = 0,
                                        this.unmarshal = function(t) {
                                            this.type = t.getUI32(),
                                            this.topSid = t.getUI32();
                                            var e = t.getUI32();
                                            this.msg = t.getBytes(e)
                                        }
                                    }
                                    ,
                                    e.getMarshal(i),
                                    e = new Le(i.msg),
                                    i = e.getUI32(),
                                    t = e.getUI32(),
                                    e.getUI16(),
                                    2051330 == t)
                                        for (i = new function() {
                                            this.uid = this.from = 0,
                                            this.reason = "",
                                            this.unmarshal = function(t) {
                                                this.from = t.getUI32(),
                                                this.uid = t.getUI32();
                                                var e = t.getUI16();
                                                this.reason = t.getUTF8(e)
                                            }
                                        }
                                        ,
                                        e.getMarshal(i),
                                        this.leaveChannel(),
                                        console.log(" [svc_sdk] PMutiJoinKick:", JSON.stringify(i)),
                                        this.ap.reportLog("multi_join_kick", "ok"),
                                        e = 0; e < this.h5ChannelEventCbs.length; ++e)
                                            this.h5ChannelEventCbs[e](Object({
                                                type: 3,
                                                uid: i.uid
                                            }));
                                    else if (79106 == t)
                                        for (i = new fe,
                                        e.getMarshal(i),
                                        console.log(" [svc_sdk] got unicast ChannelKickOffURI:", JSON.stringify(i)),
                                        Ne.uid == i.uid && (0 == i.toChannel ? (this.ap.reportLog("be_kicked_channel", "leave", {
                                            notify_uid: i.uid
                                        }),
                                        this.leaveChannel()) : (this.ap.reportLog("be_kicked_sub_channel", "leave", {
                                            notify_uid: i.uid
                                        }),
                                        this.leaveChannelBc(),
                                        this.serviceH5.leaveServiceBc(),
                                        Ne.micList = {},
                                        Ne.subSid = i.toChannel,
                                        this.joinChannelBc(),
                                        this.serviceH5.joinServiceBc(),
                                        console.log("be kicked to subChannel:", i.toChannel),
                                        this.getMaixuList())),
                                        e = 0; e < this.h5ChannelEventCbs.length; ++e)
                                            this.h5ChannelEventCbs[e](Object({
                                                type: 7,
                                                reason: i.reason,
                                                seconds: i.seconds,
                                                uid: i.uid,
                                                admin: i.admin,
                                                oldSid: i.sid,
                                                newSid: i.toChannel,
                                                kickType: i.kickType
                                            }));
                                    else if (11266 == t)
                                        for (i = new function() {
                                            this.mode = this.admin = this.toSid = this.fromSid = this.uid = 0,
                                            this.uinfos = [],
                                            this.unmarshal = function(t) {
                                                this.uid = t.getUI32(),
                                                this.fromSid = t.getUI32(),
                                                this.toSid = t.getUI32(),
                                                this.admin = t.getUI32(),
                                                this.mode = t.getUI8();
                                                for (var e = t.getUI32(), i = 0; i < e; ++i) {
                                                    var s = {};
                                                    s.uid = t.getUI32();
                                                    var n = t.getUI16();
                                                    s.nick = t.getUTF8(n),
                                                    n = t.getUI16(),
                                                    s.sign = t.getUTF8(n),
                                                    s.pid = t.getUI32(),
                                                    s.jifen = t.getUI32(),
                                                    s.sjifen = t.getUI32(),
                                                    s.gender = t.getUI8(),
                                                    s.rolers = [],
                                                    i = t.getUI32();
                                                    for (var o = 0; o < i; o++) {
                                                        var r = {};
                                                        r.cid = t.getUI32(),
                                                        r.roler = t.getUI16(),
                                                        s.rolers.push(r)
                                                    }
                                                    for (s.ip = t.getUI32(),
                                                    n = t.getUI16(),
                                                    s.pcInfo = t.getUTF8(n),
                                                    s.extInfo = {},
                                                    o = t.getUI32(),
                                                    i = 0; i < o; ++i)
                                                        r = t.getUI8(),
                                                        n = t.getUI16(),
                                                        n = t.getUTF8(n),
                                                        s.extInfo[r.toString()] = n;
                                                    this.uinfos.push(s)
                                                }
                                            }
                                        }
                                        ,
                                        e.getMarshal(i),
                                        i.uid == Ne.uid && (this.leaveChannelBc(),
                                        this.serviceH5.leaveServiceBc(),
                                        Ne.micList = {},
                                        Ne.subSid = i.toSid,
                                        this.joinChannelBc(),
                                        this.serviceH5.joinServiceBc(),
                                        console.log("recv tuoren notify to subChannel:", i.toSid),
                                        this.getMaixuList()),
                                        e = 0; e < this.h5ChannelEventCbs.length; ++e)
                                            this.h5ChannelEventCbs[e](Object({
                                                type: 12,
                                                admin: i.admin,
                                                uid: i.uid,
                                                fromSid: i.fromSid,
                                                toSid: i.toSid,
                                                uinfos: i.uinfos,
                                                mode: i.mode
                                            }));
                                    else
                                        console.log(" [svc_sdk] unknown POnUniCast ruri:", t / 256, "|", t % 256, "len:", i);
                                    break;
                                case 3144194:
                                    if ((e = new Le(t.payload)).getUI32(),
                                    e.getUI32(),
                                    1 == (i = e.decompress()).length)
                                        e = new Le(i[0]);
                                    else {
                                        for (t = i[0],
                                        e = 1; e < i.length; ++e)
                                            t = t.concat(i[e]);
                                        e = new Le(t)
                                    }
                                    for (i = new function() {
                                        this.topSid = 0,
                                        this.speakableList = this.disableText = this.disableVoice = null,
                                        this.chTextDisabled = [],
                                        this.disableVisitorTextChs = [],
                                        this.unmarshal = function(t) {
                                            this.topSid = t.getUI32();
                                            var e = new _e;
                                            t.getMarshal(e),
                                            this.disableVoice = e.us,
                                            e = new _e,
                                            t.getMarshal(e),
                                            this.disableText = e.us,
                                            e = new _e,
                                            t.getMarshal(e),
                                            this.speakableList = e.us,
                                            e = t.getUI32();
                                            for (var i = 0; i < e; ++i)
                                                this.chTextDisabled.push(t.getUI32());
                                            for (e = t.getUI32(),
                                            i = 0; i < e; ++i)
                                                this.disableVisitorTextChs.push(t.getUI32())
                                        }
                                    }
                                    ,
                                    e.getMarshal(i),
                                    console.log(" [svc_sdk] got channel chat control res:", JSON.stringify(i)),
                                    e = 0; e < this.h5ChannelEventCbs.length; ++e)
                                        this.h5ChannelEventCbs[e](Object({
                                            type: 9,
                                            topSid: i.topSid,
                                            disableVoice: i.disableVoice,
                                            disableText: i.disableText,
                                            speakableList: i.speakableList,
                                            chTextDisabled: i.chTextDisabled,
                                            disableVisitorTextChs: i.disableVisitorTextChs
                                        }))
                                }
                            }
                            ,
                            this.loginUDB = function() {
                                0 == Ne.userType ? this.anonyousLoginUDB() : this.normalLoginUDB()
                            }
                            ,
                            this.onApOpen = function(t) {
                                Ne.loginedUDB || (console.log(" [svc_sdk] start to login UDB:", Ne),
                                this.loginUDB())
                            }
                            ,
                            this.onLoginAp = function() {
                                1 == Ne.everJoinChannel && (console.log(" [svc_sdk] start to re-join channel"),
                                this.ap.reportLog("rejoin_channel", "start"),
                                Ne.channelJoined ? this.joinChannel(Ne.topSid, Ne.subSid, null, null, Ne.exclusiveJoin, null, !0) : this.joinChannel(Ne.tryTopSid, Ne.trySubSid, null, null, Ne.exclusiveJoin));
                                for (var t = 0; t < this.h5EventCbs.length; ++t)
                                    this.h5EventCbs[t](Object({
                                        type: 1,
                                        code: 0
                                    }))
                            }
                            ,
                            this.onmessage = function(t, e) {
                                if (512011 == t) {
                                    var i = new be;
                                    e.getMarshal(i),
                                    this.procAPRouter(i)
                                } else if (778500 == t)
                                    if (i = new function() {
                                        this.context = "",
                                        this.ruri = this.resCode = 0,
                                        this.payload = "",
                                        this.unmarshal = function(t) {
                                            var e = t.getUI16();
                                            this.context = t.getUTF8(e),
                                            this.resCode = t.getUI32(),
                                            this.ruri = t.getUI32(),
                                            e = t.getUI32(),
                                            this.payload = t.getBytes(e)
                                        }
                                    }
                                    ,
                                    e.getMarshal(i),
                                    20078 == i.ruri) {
                                        var s = new Le(i.payload)
                                          , n = new function() {
                                            this.context = "",
                                            this.yyid = this.uid = this.resCode = 0,
                                            this.ticket = this.cookie = this.password = this.passport = "",
                                            this.unmarshal = function(t) {
                                                var e = t.getUI16();
                                                this.context = t.getUTF8(e),
                                                this.resCode = t.getUI32(),
                                                this.uid = t.getUI32(),
                                                this.yyid = t.getUI32(),
                                                e = t.getUI16(),
                                                this.passport = t.getBytes(e),
                                                e = t.getUI16(),
                                                this.password = t.getBytes(e),
                                                e = t.getUI16(),
                                                this.cookie = t.getBytes(e),
                                                e = t.getUI16(),
                                                this.ticket = t.getBytes(e)
                                            }
                                        }
                                        ;
                                        s.getMarshal(n),
                                        0 != n.resCode && 200 != n.resCode ? (console.log(" [svc_sdk] anonyous login UDB failed. res:", n),
                                        this.ap.reportLog("anonyous_login_udb", "fail", {
                                            code: i.resCode
                                        }),
                                        this.onLoginUDB(i.resCode, !0)) : (console.log(" [svc_sdk] anonyous login UDB success.", n),
                                        this.ap.reportLog("anonyous_login_udb", "success"),
                                        Ne.uid = n.uid,
                                        Ne.ticket = n.ticket,
                                        Ne.cookie = n.cookie,
                                        Ne.username = n.passport,
                                        Ne.password = n.password,
                                        Ne.yyid = n.yyid,
                                        this.userType = 0,
                                        this.onLoginUDB(n.resCode, !0, {
                                            uid: n.uid,
                                            yyid: n.yyid
                                        }))
                                    } else
                                        19054 == i.ruri || 19566 == i.ruri ? (s = new Le(i.payload),
                                        i = new function() {
                                            this.context = "",
                                            this.yyid = this.uid = this.resCode = 0,
                                            this.ticket = this.cookie = this.email = this.passport = "",
                                            this.errCode = 0,
                                            this.errMsg = "",
                                            this.unmarshal = function(t) {
                                                var e = t.getUI16();
                                                this.context = t.getUTF8(e),
                                                this.resCode = t.getUI32(),
                                                this.uid = t.getUI32(),
                                                this.yyid = t.getUI32(),
                                                e = t.getUI16(),
                                                this.passport = t.getBytes(e),
                                                e = t.getUI16(),
                                                this.email = t.getUTF8(e),
                                                e = t.getUI16(),
                                                this.cookie = t.getBytes(e),
                                                e = t.getUI16(),
                                                this.ticket = t.getBytes(e),
                                                this.errCode = t.getUI32(),
                                                e = t.getUI16(),
                                                this.errMsg = t.getUTF8(e)
                                            }
                                        }
                                        ,
                                        s.getMarshal(i),
                                        0 != i.resCode && 200 != i.resCode ? (console.log(" [svc_sdk] normal login UDB failed. res:", i),
                                        this.ap.reportLog("normal_login_udb", "fail", {
                                            code: i.resCode
                                        }),
                                        this.onLoginUDB(i.resCode, !1)) : (console.log(" [svc_sdk] normal login UDB success.", i),
                                        this.ap.reportLog("normal_login_udb", "success"),
                                        Ne.uid = i.uid,
                                        Ne.yyid = i.yyid,
                                        Ne.ticket = i.ticket,
                                        Ne.cookie = i.cookie,
                                        Ne.username = i.passport,
                                        this.userType = 1,
                                        this.onLoginUDB(i.resCode, !1, {
                                            uid: i.uid,
                                            yyid: i.yyid
                                        }))) : console.log(" [svc_sdk] unhandle ruri in CliAPLoginAuthRes:", i.ruri / 256, "|", i.ruri % 256);
                                else if (779524 == t)
                                    i = new function() {
                                        this.context = "",
                                        this.ruri = this.resCode = 0,
                                        this.payload = "",
                                        this.unmarshal = function(t) {
                                            var e = t.getUI16();
                                            this.context = t.getUTF8(e),
                                            this.resCode = t.getUI32(),
                                            this.ruri = t.getUI32(),
                                            e = t.getUI32(),
                                            this.payload = t.getBytes(e)
                                        }
                                    }
                                    ,
                                    e.getMarshal(i),
                                    352347369 == i.ruri ? (s = new Le(i.payload),
                                    i = new function() {
                                        this.protoVersion = 0,
                                        this.context = "",
                                        this.errCode = 0,
                                        this.description = this.errMsg = "",
                                        this.yyid = this.uid = this.strategy = 0,
                                        this.credit = this.passport = "",
                                        this.loginParams = {},
                                        this.emailMask = this.mobileMask = "",
                                        this.nowTime = 0,
                                        this.sessionData = "",
                                        this.protoStrategyDetail = [],
                                        this.linkTicket = this.cookie = this.ticket = this.url = "",
                                        this.unmarshal = function(t) {
                                            t.getUI16(),
                                            this.protoVersion = t.getUI32();
                                            var e = t.getUI16();
                                            this.context = t.getUTF8(e),
                                            this.errCode = t.getUI32(),
                                            e = t.getUI16(),
                                            this.errMsg = t.getUTF8(e),
                                            e = t.getUI16(),
                                            this.description = t.getUTF8(e),
                                            this.strategy = t.getUI32(),
                                            t.getUI16(),
                                            this.uid = t.getUI32(),
                                            t.getUI32(),
                                            this.yyid = t.getUI32(),
                                            t.getUI32(),
                                            e = t.getUI16(),
                                            this.passport = t.getBytes(e),
                                            e = t.getUI16(),
                                            this.credit = t.getUTF8(e);
                                            for (var i = t.getUI32(), s = 0; s < i; ++s) {
                                                e = t.getUI16();
                                                var n = t.getUTF8(e);
                                                e = t.getUI16(),
                                                e = t.getUTF8(e),
                                                this.loginParams[n] = e
                                            }
                                            for (e = t.getUI16(),
                                            this.mobileMask = t.getUTF8(e),
                                            e = t.getUI16(),
                                            this.emailMask = t.getUTF8(e),
                                            this.nowTime = t.getUI32(),
                                            e = t.getUI16(),
                                            this.sessionData = t.getUTF8(e),
                                            i = t.getUI32(),
                                            s = 0; s < i; ++s)
                                                t.getUI16(),
                                                (n = {}).strategy = t.getUI32(),
                                                e = t.getUI16(),
                                                n.selectTitle = t.getUTF8(e),
                                                e = t.getUI16(),
                                                n.promptTitle = t.getUTF8(e),
                                                e = t.getUI16(),
                                                n.promptContent = t.getUTF8(e),
                                                n.dataType = t.getUI32(),
                                                e = t.getUI16(),
                                                n.data = t.getUTF8(e),
                                                n.promptBoxHigh = t.getUI32(),
                                                n.promptBoxLength = t.getUI32(),
                                                this.protoStrategyDetail.push(n);
                                            e = t.getUI16(),
                                            this.url = t.getUTF8(e),
                                            e = t.getUI16(),
                                            this.ticket = t.getBytes(e),
                                            e = t.getUI16(),
                                            this.cookie = t.getBytes(e),
                                            t.empty() || (e = t.getUI16(),
                                            this.linkTicket = t.getBytes(e))
                                        }
                                    }
                                    ,
                                    s.getMarshal(i),
                                    0 != i.errCode ? (console.log(" [svc_sdk] YYLoginRes login UDB failed. res:", JSON.stringify(i)),
                                    this.ap.reportLog("normal_login_udb", "fail", {
                                        code: i.resCode
                                    }),
                                    this.onLoginUDB(i.errCode, !1, {}, i.errMsg)) : (console.log(" [svc_sdk] YYLoginRes login UDB success. res:", i),
                                    this.ap.reportLog("normal_login_udb", "success"),
                                    Ne.uid = i.uid,
                                    Ne.yyid = i.yyid,
                                    Ne.ticket = i.ticket,
                                    Ne.linkticket = i.linkTicket,
                                    Ne.cookie = i.cookie,
                                    Ne.username = i.passport,
                                    Ne.credit = i.credit,
                                    Ne.wxappid && (Ee("yyuid", i.uid),
                                    Ee("udb_c", i.credit)),
                                    Ne.password = i.credit,
                                    this.userType = 1,
                                    this.onLoginUDB(i.errCode, !1, {
                                        uid: i.uid,
                                        yyid: i.yyid
                                    }))) : console.log(" [svc_sdk] unhandle ruri in CliAPLoginAuth2Res:", i.ruri / 256, "|", i.ruri % 256);
                                else if (795140 == t)
                                    for (i = new function() {
                                        this.appid = 0,
                                        this.reason = "",
                                        this.uid2 = this.uid = this.appkey = this.routeNum = this.code = 0,
                                        this.unmarshal = function(t) {
                                            t.getUI32(),
                                            this.appid = t.getUI32();
                                            var e = t.getUI16();
                                            this.reason = t.getUTF8(e),
                                            this.code = t.getUI32(),
                                            this.routeNum = t.getUI32(),
                                            this.appkey = t.getUI32(),
                                            t.empty() || (this.uid = t.getUI32()),
                                            t.empty() || (this.uid2 = t.getUI32())
                                        }
                                    }
                                    ,
                                    e.getMarshal(i),
                                    console.log(" [svc_sdk] force out:", JSON.stringify(i)),
                                    this.ap.reportLog("ap_force_out", "stop"),
                                    this.stop(i.uid, i.reason),
                                    s = 0; s < this.h5EventCbs.length; ++s)
                                        this.h5EventCbs[s](Object({
                                            type: 3,
                                            code: i.code,
                                            reason: i.reason
                                        }));
                                else
                                    console.log(" [svc_sdk] unhandle channel uri:", t / 256, "|", t % 256)
                            }
                            ,
                            this.myInfo = function() {
                                var t = {
                                    uid: Ne.uid,
                                    yyid: Ne.yyid,
                                    top_sid: Ne.topSid,
                                    sub_sid: Ne.subSid
                                };
                                return 0 != Ne.nick.length && (t.nick = Ne.nick),
                                t
                            }
                            ,
                            this.getChannelInfo = function(t) {
                                if (null == Ne.channelInfo || void 0 === Ne.channelInfo)
                                    return console.log(" [svc_sdk] channel info not ready"),
                                    null;
                                var e = Ne.channelInfo.baseInfo;
                                if (null == e || void 0 === e)
                                    return null;
                                var i = {};
                                return null == (e = e[t]) || void 0 === e ? i.name = "" : (i.name = e[256],
                                i.textLimitTime = e[289],
                                i.micListMode = e[275],
                                i.pid = e[262],
                                i.guestWaitTime = e[294],
                                i.guestTextMaxLen = e[295],
                                i.sendUrlText = e[308],
                                i.memberSendUrlText = e[318],
                                i.sendTextBindMobile = e[323],
                                i.templateId = e[8196],
                                i.disableText = e.disableText,
                                i.disalbeVoice = e.disableVoice),
                                e = null,
                                Ne.channelUserCount.sid2count && (e = Ne.channelUserCount.sid2count[t]),
                                t = Ne.channelUserCount.totalUserCount,
                                i.userCount = e,
                                i.totalUserCount = t,
                                i
                            }
                            ,
                            this.getCurrentChannelInfo = function() {
                                if (null == Ne.channelInfo || void 0 === Ne.channelInfo)
                                    return console.log(" [svc_sdk] channel info not ready"),
                                    null;
                                var t = Ne.channelInfo.baseInfo;
                                if (null == t || void 0 === t)
                                    return null;
                                var e = {};
                                return null == (t = t[Ne.topSid]) || void 0 === t ? e.name = 0 : (e.name = t[256],
                                e.textLimitTime = t[289],
                                e.channelType = t[278],
                                e.channelTypeStr = t[279],
                                e.micListMode = t[275],
                                e.jifen = t[280],
                                e.guestWaitTime = t[294],
                                e.guestTextMaxLen = t[295],
                                e.sendUrlText = t[308],
                                e.memberSendUrlText = t[318],
                                e.sendTextBindMobile = t[323],
                                e.templateId = t[8196],
                                e.disableText = t.disableText,
                                e.disalbeVoice = t.disableVoice,
                                e.owner = t[263]),
                                e.totalUserCount = Ne.channelUserCount.totalUserCount,
                                e.asid = Ne.asid,
                                e
                            }
                            ,
                            this.getChannelTreeInfo = function() {
                                return Ne.channelInfo
                            }
                            ,
                            this.updateSubChanInfo = function(t, e, i) {
                                Ne.channelInfo.baseInfo[t][e] = i
                            }
                            ,
                            this.getUserList = function(t, e, i) {
                                var s = new function() {
                                    this.pos = this.num = this.subSid = this.topSid = 0,
                                    this.marshal = function(t) {
                                        t.setUI32(this.topSid),
                                        t.setUI32(this.subSid),
                                        t.setUI32(this.num),
                                        t.setUI32(this.pos)
                                    }
                                }
                                ;
                                s.topSid = Ne.topSid,
                                s.subSid = null != i && void 0 !== i && 0 != i ? i : Ne.subSid,
                                s.num = e,
                                s.pos = t,
                                console.log(" [svc_sdk] getUserList num:", s.num, "pos:", s.pos),
                                (t = new Le).setUI32(Ne.topSid),
                                (e = {})[1] = t.toTypedBuffer(),
                                this.ap.sendApRouter("channelUserInfo", 3126274, s, e)
                            }
                            ,
                            this.getMicListMode = function() {
                                if (null == Ne.channelInfo || void 0 === Ne.channelInfo)
                                    return console.log(" [svc_sdk] channel info not ready"),
                                    null;
                                var t = this.channelInfo.baseInfo;
                                return null == t || void 0 === t ? null : null == (t = t[Ne.subSid]) || void 0 === t ? null : t[275]
                            }
                            ,
                            this.getLinkedMicList = function() {
                                return Ne.micList.linkedMicList
                            }
                            ,
                            this.getMicList = function() {
                                return Ne.micList.micList
                            }
                            ,
                            this.isGuestLogin = function() {
                                return 0 == Ne.userType
                            }
                            ,
                            this.isInChannel = function() {
                                return 0 != Ne.topSid && 0 != Ne.subSid ? {
                                    code: 1,
                                    topSid: Ne.topSid,
                                    subSid: Ne.subSid
                                } : {
                                    code: 0
                                }
                            }
                        }
                          , De = function(t) {
                            this.channelH5 = t,
                            this.ap = new Be(this,260),
                            this.h5EventCbs = [],
                            this.h5DataRecvCbs = [],
                            this.h5ChatRecvCbs = [],
                            this.setChlH5 = function(t) {
                                this.channelH5 = t
                            }
                            ,
                            this.setH5EventCb = function(t, e) {
                                if (e)
                                    this.h5EventCbs = [];
                                else
                                    for (var i = 0; i < this.h5EventCbs.length; ++i)
                                        if (this.h5EventCbs[i] == t)
                                            return;
                                this.h5EventCbs.push(t)
                            }
                            ,
                            this.setH5DataRecvCb = function(t, e) {
                                if (e)
                                    this.h5DataRecvCbs = [];
                                else
                                    for (var i = 0; i < this.h5DataRecvCbs.length; ++i)
                                        if (this.h5DataRecvCbs[i] == t)
                                            return;
                                this.h5DataRecvCbs.push(t)
                            }
                            ,
                            this.setH5ChatRecvCb = function(t, e) {
                                if (e)
                                    this.h5ChatRecvCbs = [];
                                else
                                    for (var i = 0; i < this.h5ChatRecvCbs.length; ++i)
                                        if (this.h5ChatRecvCbs[i] == t)
                                            return;
                                this.h5ChatRecvCbs.push(t)
                            }
                            ,
                            this.dataRecvCbs = function(t, e) {
                                for (var i = 0; i < this.h5DataRecvCbs.length; ++i)
                                    this.h5DataRecvCbs[i](t, e)
                            }
                            ,
                            this.login = function() {
                                this.ap || (this.ap = new Be(this,260)),
                                this.ap.start()
                            }
                            ,
                            this.changeServiceBc = function(t, e, i) {
                                var s = {
                                    grpTypeLow: 1,
                                    grpTypeHigh: 0
                                };
                                s.grpIdLow = e,
                                s.grpIdHigh = 0,
                                (e = {
                                    grpTypeLow: 2,
                                    grpTypeHigh: 0
                                }).grpIdLow = i,
                                e.grpIdHigh = 0,
                                (i = new Ue).uid = Ne.uid,
                                i.grpIdSet.push(s),
                                i.grpIdSet.push(e),
                                (s = new Ae).uri = t,
                                this.ap.bufSend(s.marshal(i))
                            }
                            ,
                            this.joinServiceBc = function() {
                                this.changeServiceBc(642648, Ne.topSid, Ne.subSid),
                                console.log(" [svc_sdk] start to join service broadcast group. topSid:", Ne.topSid, "subSid:", Ne.subSid),
                                this.ap.reportLog("join_user_group_svc", "start")
                            }
                            ,
                            this.joinSvcUserGroup = function(t, e) {
                                var i = {};
                                i.grpTypeLow = t,
                                i.grpTypeHigh = 0,
                                i.grpIdLow = e,
                                i.grpIdHigh = 0;
                                var s = new Ue;
                                s.uid = Ne.uid,
                                s.grpIdSet.push(i),
                                (i = new Ae).uri = 642648,
                                this.ap.bufSend(i.marshal(s))
                            }
                            ,
                            this.leaveServiceBc = function() {
                                this.changeServiceBc(642904, Ne.topSid, Ne.subSid),
                                console.log(" [svc_sdk] start to leave service broadcast group. topSid:", Ne.topSid, "subSid:", Ne.subSid),
                                this.ap.reportLog("leave_user_group_svc", "start")
                            }
                            ,
                            this.leaveSvcUserGroup = function(t, e) {
                                var i = {};
                                i.grpTypeLow = t,
                                i.grpTypeHigh = 0,
                                i.grpIdLow = e,
                                i.grpIdHigh = 0;
                                var s = new Ue;
                                s.uid = Ne.uid,
                                s.grpIdSet.push(i),
                                (i = new Ae).uri = 642904,
                                this.ap.bufSend(i.marshal(s))
                            }
                            ,
                            this.procDlByUid = function(t) {
                                var e = new function() {
                                    this.uid = this.appid = 0,
                                    this.seqId = this.suid = this.msg = "",
                                    this.unmarshal = function(t) {
                                        this.appid = t.getUI16(),
                                        this.uid = t.getUI32();
                                        var e = t.getUI32();
                                        this.msg = new Uint8Array(t.getBytes(e)),
                                        t.empty() || (this.suid = t.getUI64()),
                                        t.empty() || (this.seqId = t.getUI64())
                                    }
                                }
                                ;
                                if (t.getMarshal(e),
                                31 == e.appid)
                                    if ((e = new Le(e.msg)).getUI32(),
                                    t = e.getUI32(),
                                    e.getUI16(),
                                    3115608 == t)
                                        for (t = new function() {
                                            this.reason = this.subSid = this.uid = this.topSid = 0,
                                            this.props = {},
                                            this.props2 = {},
                                            this.unmarshal = function(t) {
                                                this.topSid = t.getUI32(),
                                                this.uid = t.getUI32(),
                                                this.subSid = t.getUI32(),
                                                this.reason = t.getUI8();
                                                for (var e = t.getUI32(), i = 0; i < e; ++i) {
                                                    var s = t.getUI32()
                                                      , n = t.getUI16();
                                                    n = t.getUTF8(n),
                                                    this.props[s.toString()] = n
                                                }
                                                for (e = t.getUI32(),
                                                i = 0; i < e; ++i)
                                                    s = t.getUI32(),
                                                    n = t.getUI16(),
                                                    n = t.getUTF8(n),
                                                    this.props2[s.toString()] = n
                                            }
                                        }
                                        ,
                                        e.getMarshal(t),
                                        console.log(" [svc_sdk] got chat exception msg:", JSON.stringify(t)),
                                        this.ap.reportLog("chat_exception", "ignore", {
                                            code: t.reason
                                        }),
                                        e = 0; e < this.h5ChatRecvCbs.length; ++e)
                                            this.h5ChatRecvCbs[e](Object({
                                                code: t.reason,
                                                props: t.props2
                                            }));
                                    else
                                        console.log(" [svc_sdk] unknown chat service uri:", t / 256, "|", t % 256);
                                else if (6 == e.appid)
                                    if ((e = new Le(e.msg)).getUI32(),
                                    t = e.getUI32(),
                                    e.getUI16(),
                                    283480 == t) {
                                        t = new function() {
                                            this.users = {},
                                            this.unmarshal = function(t) {
                                                for (var e = t.getUI32(), i = 0; i < e; ++i) {
                                                    var s = new ye;
                                                    t.getMarshal(s),
                                                    s.svc = !0,
                                                    this.users[s.uid] = s
                                                }
                                            }
                                        }
                                        ,
                                        e.getMarshal(t);
                                        var i = Object.keys(t.users);
                                        for (e = 0; e < i.length; ++e) {
                                            var s = i[e];
                                            void 0 === Ne.userInfos[s] && (Ne.userInfos[s] = {}),
                                            Object.assign(Ne.userInfos[s], t.users[s])
                                        }
                                        null != (e = t.users[Ne.uid]) && void 0 !== e && (Ne.nick = e.nick),
                                        this.dataRecvCbs(6, t.users)
                                    } else
                                        console.log(" [svc_sdk] unknown uinfo service uri:", t / 256, "|", t % 256);
                                else
                                    this.dataRecvCbs(e.appid, e.msg)
                            }
                            ,
                            this.procUserGroupMsg = function(t) {
                                switch (t.ruri) {
                                case 80216:
                                    t = new Le(t.msg),
                                    this.procDlByUid(t)
                                }
                            }
                            ,
                            this.procAPRouter = function(t) {
                                switch (t.ruri) {
                                case 533080:
                                    t = new Le(t.payload);
                                    var e = new me;
                                    t.getMarshal(e),
                                    this.procUserGroupMsg(e);
                                    break;
                                case 80216:
                                    t = new Le(t.payload),
                                    this.procDlByUid(t)
                                }
                            }
                            ,
                            this.onApOpen = function(t) {}
                            ,
                            this.onLoginAp = function() {
                                if (console.log(" [svc_sdk] login service ap success. start to join user group etc."),
                                this.ap.reportLog("login_svc_ap", "success"),
                                Ne.appidSubs) {
                                    var t = Object.keys(Ne.appidSubs);
                                    console.log(" [svc_sdk] re-subs appids:", JSON.stringify(t)),
                                    this.subsAppids(t)
                                }
                                for (Ne.appidUnsubs && (t = Object.keys(Ne.appidUnsubs),
                                console.log(" [svc_sdk] re-unsubs appids:", JSON.stringify(t)),
                                this.unsubsAppids(t)),
                                t = 0; t < this.h5EventCbs.length; ++t)
                                    this.h5EventCbs[t](Object({
                                        type: 2,
                                        code: 0
                                    })),
                                    this.getSvcUserInfo([Ne.uid])
                            }
                            ,
                            this.onmessage = function(t, e) {
                                if (512011 == t) {
                                    var i = new be;
                                    e.getMarshal(i),
                                    this.procAPRouter(i)
                                } else if (28760 == t)
                                    if (i = new function() {
                                        this.topSid = this.appid = 0,
                                        this.msg = "",
                                        this.unmarshal = function(t) {
                                            this.appid = t.getUI16(),
                                            this.topSid = t.getUI32();
                                            var e = t.getUI16();
                                            this.msg = new Uint8Array(t.getBytes(e))
                                        }
                                    }
                                    ,
                                    e.getMarshal(i),
                                    31 == i.appid) {
                                        var s = new Le(i.msg);
                                        if (s.getUI32(),
                                        t = s.getUI32(),
                                        s.getUI16(),
                                        3104600 == t)
                                            for (i = new pe,
                                            s.getMarshal(i),
                                            s = 0; s < this.h5ChatRecvCbs.length; ++s)
                                                this.h5ChatRecvCbs[s](Object({
                                                    code: 0,
                                                    yyid: i.yyid,
                                                    from_uid: i.from,
                                                    nick: i.nick,
                                                    msg: i.chat.msg,
                                                    top_sid: i.topSid,
                                                    sub_sid: i.subSid
                                                }));
                                        else
                                            console.log(" [svc_sdk] unknown chat service uri:", t / 256, "|", t % 256)
                                    } else
                                        this.dataRecvCbs(i.appid, i.msg);
                                else
                                    80216 == t ? this.procDlByUid(e) : 533080 == t ? (i = new me,
                                    e.getMarshal(i),
                                    this.dataRecvCbs(i.appid, i.msg)) : 643928 != t && console.log(" [svc_sdk] unhandle service uri:", t / 256, "|", t % 256)
                            }
                            ,
                            this.sendChatMsg = function(t, e) {
                                var i = new pe;
                                i.from = Ne.uid,
                                i.topSid = Ne.topSid,
                                i.subSid = Ne.subSid;
                                var s = new ge;
                                s.msg = e,
                                i.chat = s,
                                0 != t.length && (i.nick = t,
                                i.extra[8] = t),
                                i.extra[2] = "25",
                                i.extra[3] = "1",
                                i.extra[4] = Ne.yyid.toString(),
                                i.extra[4] = "0",
                                i.extra[6] = "0",
                                i.extra[7] = "0",
                                console.log(" [svc_sdk] sending chat msg. nick:", t, "msg:", e),
                                this.ap.reportLog("send_chat", "start", {
                                    msg: e
                                }),
                                (s = new Ae).uri = 3104344,
                                this.sendAppData(31, s.marshal(i))
                            }
                            ,
                            this.sendAppData = function(t, e) {
                                var i = new function() {
                                    this.uid = this.topSid = this.appid = 0,
                                    this.payload = null,
                                    this.suid = this.subSid = this.statType = this.termType = this.clientIp = 0,
                                    this.ext = {},
                                    this.marshal = function(t) {
                                        t.setUI16(this.appid),
                                        t.setUI32(this.topSid),
                                        t.setUI32(this.uid),
                                        "string" == typeof this.payload ? t.setUTF8(this.payload, 32) : t.setBytes(this.payload, 32),
                                        t.setUI32(this.clientIp),
                                        t.setUI8(this.termType),
                                        t.setUI8(this.statType),
                                        t.setUI32(this.subSid),
                                        t.setUI32(0),
                                        t.setUI32(0);
                                        var e = Object.keys(this.ext);
                                        t.setUI32(e.length);
                                        for (var i = 0; i < e.length; ++i)
                                            t.setUI32(parseInt(e[i])),
                                            t.setUTF8(this.ext[e[i]], 16)
                                    }
                                }
                                ;
                                i.appid = t,
                                i.topSid = Ne.topSid,
                                i.subSid = Ne.subSid,
                                i.uid = Ne.uid,
                                i.payload = "string" == typeof e ? e : new Uint8Array(e),
                                i.statType = t,
                                this.ap.sendApRouter("", 79960, i, null)
                            }
                            ,
                            this.sendAppSender = function(t, e, i) {
                                var s = new Ae;
                                s.uri = e,
                                this.sendAppData(t, s.marshal(i))
                            }
                            ,
                            this.getSvcUserInfo = function(t) {
                                if (0 != t.length) {
                                    var e = new function() {
                                        this.topSid = this.uid = 0,
                                        this.uids = [],
                                        this.connType = 1,
                                        this.marshal = function(t) {
                                            t.setUI32(this.uid),
                                            t.setUI32(this.topSid),
                                            t.setUI32(this.uids.length);
                                            for (var e = 0; e < this.uids.length; ++e)
                                                t.setUI32(this.uids[e]);
                                            t.setUI8(this.connType)
                                        }
                                    }
                                    ;
                                    e.uid = Ne.uid,
                                    e.topSid = Ne.topSid,
                                    e.uids = t,
                                    console.log(" [svc_sdk] getting userinfo of uids:", t),
                                    (t = new Ae).uri = 282968,
                                    this.sendAppData(6, t.marshal(e))
                                }
                            }
                            ,
                            this.getUserRoleInfo = function(t) {
                                if (0 != t.length) {
                                    var e = new function() {
                                        this.topSid = 0,
                                        this.uids = [],
                                        this.type = 0,
                                        this.marshal = function(t) {
                                            t.setUI32(this.topSid);
                                            var e = this.uids.length;
                                            t.setUI32(e);
                                            for (var i = 0; i < e; ++i)
                                                t.setUI32(this.uids[i]);
                                            t.setUI32(this.type)
                                        }
                                    }
                                    ;
                                    e.topSid = Ne.topSid,
                                    e.uids = t,
                                    console.log(" [svc_sdk] getting user role info of uids:", t),
                                    (t = new Le).setUI32(Ne.topSid);
                                    var i = {};
                                    i[1] = t.toTypedBuffer(),
                                    this.channelH5.ap.sendApRouter("channelUserInfo", 3125762, e, i)
                                }
                            }
                            ,
                            this.getUserInfo = function(t) {
                                if (0 != t.length) {
                                    for (var e = [], i = [], s = {}, n = 0; n < t.length; ++n) {
                                        var o = t[n].toString()
                                          , r = Ne.userInfos[o];
                                        void 0 === r || null == r ? (e.push(o),
                                        i.push(o)) : (void 0 === r.svc ? e.push(o) : s[o] = r,
                                        void 0 === r.chl ? i.push(o) : s[o] = r)
                                    }
                                    if (0 != Object.keys(s).length && 0 != this.h5DataRecvCbs.length) {
                                        for (t = {},
                                        o = Object.keys(s),
                                        n = 0; n < o.length; ++n) {
                                            r = {};
                                            for (var a = s[o[n]], h = Object.keys(a), l = 0; l < h.length; ++l)
                                                "role" != h[l] && "roler" != h[l] && (r[h[l]] = a[h[l]]);
                                            r.role = this.channelH5.getCurSubSidRole(Ne.topSid, Ne.subSid, a.role, a.roler),
                                            t[o[n]] = r
                                        }
                                        this.dataRecvCbs(6, t)
                                    }
                                    this.getSvcUserInfo(e),
                                    this.getUserRoleInfo(i)
                                }
                            }
                            ,
                            this.subsAppids = function(t) {
                                if (this.ap.appidReady()) {
                                    console.log(" [svc_sdk] subscribe appids:", t),
                                    this.ap.reportLog("subs_appids", t.toString());
                                    var e = new Ie;
                                    e.uid = Ne.uid,
                                    e.appids = t,
                                    (t = new Ae).uri = 643160,
                                    this.ap.bufSend(t.marshal(e))
                                } else
                                    for (console.log(" [svc_sdk] ap not ready, delay subs.", JSON.stringify(t)),
                                    e = 0; e < t.length; ++e)
                                        Ne.appidSubs[t[e]] = 1
                            }
                            ,
                            this.unsubsAppids = function(t) {
                                if (this.ap.appidReady()) {
                                    console.log(" [svc_sdk] unsubscribe appids:", t),
                                    this.ap.reportLog("unsubs_appids", t.toString());
                                    var e = new Ie;
                                    e.uid = Ne.uid,
                                    e.appids = t,
                                    (t = new Ae).uri = 643416,
                                    this.ap.bufSend(t.marshal(e))
                                } else
                                    for (console.log(" [svc_sdk] ap not ready, delay unsubs.", JSON.stringify(t)),
                                    e = 0; e < t.length; ++e)
                                        Ne.appidUnsubs[t[e]] = 1
                            }
                        }
                          , je = function(t, e, i) {
                            console.log(" [svc_sdk] location:", JSON.stringify(location));
                            var s = location.search
                              , n = {};
                            if (-1 != s.indexOf("?")) {
                                s = s.substr(1).split("&");
                                for (var o = 0; o < s.length; o++)
                                    n[s[o].split("=")[0]] = unescape(s[o].split("=")[1])
                            }
                            console.log(" [svc_sdk] current page request:", JSON.stringify(n)),
                            s = Me("udb_c"),
                            o = Me("yyuid");
                            var r = Me("username")
                              , a = Me("udb_l");
                            s && o && "undefined" != s && "undefined" != o ? (console.log("  [svc_sdk] cookie existssss... ... ..." + s + "    " + o),
                            i && i.start(null, null, o, s, r, a)) : n.code && n.state ? (t = "https://thirdlogin.yy.com/open/thirdtokenlogin.do?source=qq&third_sub_sys=wechatU&udb_appid=" + t + "&tokenid=" + n.code + "&third_appkey=" + e + "&oauth_url=&oauth_type=0&domainlist_flag=&version=2&term_type=6&ticket_type=1&device_id=" + e + "&callback_id=udbResCb",
                            console.log(" [svc_sdk] udb request path:", t),
                            function(t) {
                                var e = (t = t || {}).jsonp ? function(t) {
                                    var e = t.jsonp
                                      , i = document.getElementsByTagName("head")[0]
                                      , s = document.createElement("script");
                                    i.appendChild(s),
                                    window[e] = function(n) {
                                        console.log("jsonp success:", JSON.stringify(n)),
                                        i.removeChild(s),
                                        clearTimeout(s.timer),
                                        window[e] = null,
                                        t.success && t.success(n, t.handler)
                                    }
                                    ,
                                    s.src = t.url,
                                    console.log("jsonp url:", s.src),
                                    t.time && (s.timer = setTimeout(function() {
                                        window[e] = null,
                                        i.removeChild(s),
                                        t.error && t.error({
                                            message: "time out"
                                        })
                                    }, t.time))
                                }(t) : e(t)
                            }({
                                url: t,
                                jsonp: "udbResCb",
                                time: 3e3,
                                handler: i,
                                success: function(t, e) {
                                    "1" == t.rcode ? (console.log("  [svc_sdk] udb response success and set cookie:", JSON.stringify(t)),
                                    Ee("yyuid", t.yyuid),
                                    Ee("username", t.username),
                                    Ee("password", t.password),
                                    Ee("account_token", t.account_token),
                                    Ee("accountinfo", t.accountinfo),
                                    Ee("stoken", t.stoken),
                                    Ee("udb_l", t.udb_l),
                                    Ee("udb_n", t.udb_n),
                                    Ee("udb_c", t.udb_c),
                                    Ee("udb_oar", t.udb_oar),
                                    Ee("partner_uid", t.partner_uid),
                                    Ee("partner_nickname", t.partner_nickname),
                                    Ee("partner_gender", t.partnerGender),
                                    Ee("partner_image", t.partnerImage),
                                    e && e.start(null, null, t.yyuid, t.udb_c, t.username, t.udb_l)) : (console.log("  [svc_sdk] udb response failed. rcode:", t.rcode, JSON.stringify(t)),
                                    e && e.start())
                                },
                                error: function(t) {
                                    console.log(" [svc_sdk] udb response fail:", JSON.stringify(t))
                                }
                            })) : (console.log("  [svc_sdk] cookie not exists... ... ..." + s + "    " + o),
                            i = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=" + e + "&redirect_uri=" + encodeURIComponent(location.href) + "&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect",
                            console.log("  [svc_sdk] wxAuthPath:", i),
                            window.location.href = i),
                            Ne.wxappid = e
                        }
                          , ze = function(t, e, i, s, n, o, r) {
                            return Ne.wxappid && (i && s || (s = Me("udb_c"),
                            i = Me("yyuid")),
                            n && o || (n = Me("username"),
                            o = Me("udb_l"))),
                            console.log(" [svc_sdk] NewH5:", JSON.stringify(arguments), "uuid:", Ne.uuid),
                            Oe || (Oe = new De,
                            console.log(" [svc_sdk] new Service H5... ... ...")),
                            Fe ? Fe.isGuestLogin() && (i && s || n && o) && (console.log(" [svc_sdk] change to normal login... ... ..."),
                            Fe.login(i, s, n, o)) : (console.log(" [svc_sdk] version:", "1.31.20"),
                            Fe = new Re(Oe),
                            console.log(" [svc_sdk] new Channel H5... ... ..."),
                            Oe.setChlH5(Fe),
                            r || Fe.start(t, e, i, s, n, o)),
                            window.addEventListener("beforeunload", function(t) {
                                Fe.leaveChannel(),
                                console.log(" [svc_sdk] window.addEventListener('beforeunload') evt:", JSON.stringify(t))
                            }),
                            {
                                setH5EventCb: function(t, e) {
                                    Oe.setH5EventCb(t, e),
                                    Fe.setH5EventCb(t, e)
                                },
                                setChannelEventCb: function(t, e) {
                                    Fe.setChannelEventCb(t, e)
                                },
                                setH5MaixuCb: function(t, e) {
                                    Fe.setH5MaixuCb(t, e)
                                },
                                setH5DataRecvCb: function(t, e) {
                                    Oe.setH5DataRecvCb(t, e)
                                },
                                setH5ChatRecvCb: function(t, e) {
                                    Oe.setH5ChatRecvCb(t, e)
                                },
                                enableChanUserPush: function() {
                                    Fe.enableChanUserPush()
                                },
                                sendAppData: function(t, e) {
                                    Oe.sendAppData(t, e)
                                },
                                sendAppSender: function(t, e, i) {
                                    Oe.sendAppSender(t, e, i)
                                },
                                joinChannel: function(t, e, i, s, n, o) {
                                    Fe.joinChannel(t, e, i, s, n, o)
                                },
                                leaveChannel: function() {
                                    Fe.leaveChannel()
                                },
                                sendChatMsg: function(t, e) {
                                    Oe.sendChatMsg(t, e)
                                },
                                subsAppids: function(t) {
                                    Oe.subsAppids(t)
                                },
                                unsubsAppids: function(t) {
                                    Oe.unsubsAppids(t)
                                },
                                joinSvcUserGroup: function(t, e) {
                                    Oe.joinSvcUserGroup(t, e)
                                },
                                leaveSvcUserGroup: function(t, e) {
                                    Oe.leaveSvcUserGroup(t, e)
                                },
                                getUDBCredit: function() {
                                    return Fe.getUDBCredit()
                                },
                                getUserInfo: function(t) {
                                    Oe.getUserInfo(t)
                                },
                                getUserList: function(t, e, i) {
                                    Fe.getUserList(t, e, i)
                                },
                                myInfo: function() {
                                    return Fe.myInfo()
                                },
                                getChannelInfo: function(t) {
                                    return Fe.getChannelInfo(t)
                                },
                                getCurrentChannelInfo: function() {
                                    return Fe.getCurrentChannelInfo()
                                },
                                getChannelTreeInfo: function() {
                                    return Fe.getChannelTreeInfo()
                                },
                                getMicListMode: function() {
                                    return Fe.getMicListMode()
                                },
                                getLinkedMicList: function() {
                                    return Fe.getLinkedMicList()
                                },
                                getMicList: function() {
                                    return Fe.getMicList()
                                },
                                isGuestLogin: function() {
                                    return Fe.isGuestLogin()
                                },
                                isInChannel: function() {
                                    return Fe.isInChannel()
                                },
                                start: function(t, e, i, s, n, o) {
                                    Fe.start(t, e, i, s, n, o)
                                },
                                login: function(t, e) {
                                    return Fe.login(t, e)
                                },
                                logout: function() {
                                    return Fe.logout()
                                }
                            }
                        };
                        return {
                            WxLogin: je,
                            NewH5: ze,
                            NewH5Wx: function(t, e) {
                                console.log(" [svc_sdk] NewH5Wx arguments:", JSON.stringify(arguments));
                                var i = new ze(null,null,null,null,null,null,!0);
                                return je(t, e, i),
                                i
                            },
                            Buffer: Le,
                            BufferState: xe,
                            UCS2Encoder: Ce,
                            UTF8Encoder: Te
                        }
                    }
                }
                ) ? n.call(e, i, e, t) : n) || (t.exports = o)
            }
            ).call(this, i(66))
        },
        105: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var s, n = i(4), o = i(104), r = i(0), a = function() {
                function t() {
                    if (t.instance)
                        return t.instance;
                    t.instance = this,
                    this.ins = new o,
                    this.Buffer = this.ins.Buffer
                }
                return t.prototype.NewH5 = function(t, e, i, s, n, o) {
                    var r = Boolean(this.h5);
                    r || (this.h5 = this.ins.NewH5(t, e, i, s, n, o));
                    var a = new l(this.h5);
                    return r && i && s && a.login(i, s),
                    a
                }
                ,
                t
            }();
            e.default = a,
            function(t) {
                t[t.None = 0] = "None",
                t[t.Once = 1] = "Once",
                t[t.Sequence = 2] = "Sequence"
            }(s || (s = {}));
            var h = function() {
                function t(t) {
                    void 0 === t && (t = s.None);
                    var e = this;
                    this.hasUse = !1,
                    this.autoID = 0,
                    this.hasTrigger = !1,
                    this.cacheSequence = [],
                    this.handlers = [],
                    this.cacheOption = t,
                    this.mainHandler = function() {
                        for (var t = [], i = 0; i < arguments.length; i++)
                            t[i] = arguments[i];
                        e.cacheOption === s.Once ? (e.cacheData = t,
                        e.hasTrigger = !0) : e.cacheOption === s.Sequence && e.cacheSequence.push(t);
                        for (var n = 0, o = e.handlers; n < o.length; n++) {
                            var a = o[n];
                            try {
                                a.handler.apply(a, t)
                            } catch (t) {
                                r.default.warn(t)
                            }
                        }
                    }
                }
                return t.prototype.getMainHandler = function() {
                    return this.mainHandler
                }
                ,
                t.prototype.addHandler = function(t) {
                    for (var e = 0, i = this.handlers; e < i.length; e++) {
                        var n = i[e];
                        if (n.handler === t)
                            return n.id
                    }
                    if (this.autoID += 1,
                    this.handlers.push({
                        id: this.autoID,
                        handler: t
                    }),
                    this.cacheOption === s.Once)
                        this.hasTrigger && t.apply(void 0, this.cacheData);
                    else if (this.cacheOption === s.Sequence)
                        for (var o = 0, a = this.cacheSequence; o < a.length; o++) {
                            var h = a[o];
                            try {
                                t.apply(void 0, h)
                            } catch (t) {
                                r.default.warn(t)
                            }
                        }
                    return this.autoID
                }
                ,
                t.prototype.removeHandler = function(t) {
                    for (var e = -1, i = 0; i < this.handlers.length; i++)
                        if (this.handlers[i].id === t) {
                            e = i;
                            break
                        }
                    e > -1 && this.handlers.splice(e, 1)
                }
                ,
                t
            }()
              , l = function() {
                function t(t) {
                    this.ins = t,
                    this.initEventMainHandler()
                }
                return t.prototype.setH5EventCb = function(e) {
                    return t.h5EventManager.addHandler(e)
                }
                ,
                t.prototype.unsetH5EventCb = function(e) {
                    t.h5EventManager.removeHandler(e)
                }
                ,
                t.prototype.setChannelEventCb = function(e) {
                    return t.channelEventManager.addHandler(e)
                }
                ,
                t.prototype.unsetChannelEventCb = function(e) {
                    t.channelEventManager.removeHandler(e)
                }
                ,
                t.prototype.setH5MaixuCb = function(e) {
                    return t.h5MaixuEventManager.addHandler(e)
                }
                ,
                t.prototype.unsetH5MaixuCb = function(e) {
                    t.h5MaixuEventManager.removeHandler(e)
                }
                ,
                t.prototype.setH5ChatRecvCb = function(e) {
                    return t.h5ChatEventManager.addHandler(e)
                }
                ,
                t.prototype.unsetH5ChatRecvCb = function(e) {
                    t.h5ChatEventManager.removeHandler(e)
                }
                ,
                t.prototype.setH5DataRecvCb = function(e) {
                    return t.h5DataEventManager.addHandler(e)
                }
                ,
                t.prototype.unsetH5DataRecvCb = function(e) {
                    t.h5DataEventManager.removeHandler(e)
                }
                ,
                t.prototype.getUDBCredit = function() {
                    return this.ins.getUDBCredit()
                }
                ,
                t.prototype.joinChannel = function(t, e, i, s, n, o) {
                    this.ins.joinChannel(t, e, i, s, n, o)
                }
                ,
                t.prototype.leaveChannel = function() {
                    this.ins.leaveChannel()
                }
                ,
                t.prototype.subsAppids = function(t) {
                    this.ins.subsAppids(t)
                }
                ,
                t.prototype.unsubsAppids = function(t) {
                    this.ins.unsubsAppids(t)
                }
                ,
                t.prototype.myInfo = function() {
                    return this.ins.myInfo()
                }
                ,
                t.prototype.getMicList = function() {
                    return this.ins.getMicList()
                }
                ,
                t.prototype.sendAppData = function(t, e) {
                    this.ins.sendAppData(t, e)
                }
                ,
                t.prototype.getUserInfo = function(t) {
                    return this.ins.getUserInfo(t)
                }
                ,
                t.prototype.sendChatMsg = function(t, e) {
                    this.ins.sendChatMsg(t, e)
                }
                ,
                t.prototype.isGuestLogin = function() {
                    return this.ins.isGuestLogin()
                }
                ,
                t.prototype.login = function(t, e) {
                    this.ins.login(t, e)
                }
                ,
                t.prototype.logout = function() {
                    this.ins.logout()
                }
                ,
                t.prototype.getCurrentChannelInfo = function() {
                    return this.ins.getCurrentChannelInfo()
                }
                ,
                t.prototype.getLinkedMicList = function() {
                    return this.ins.getLinkedMicList()
                }
                ,
                t.prototype.getUserList = function(t, e) {
                    this.ins.getUserList(t, e)
                }
                ,
                t.prototype.initEventMainHandler = function() {
                    t.h5EventManager.hasUse || (this.ins.setH5EventCb(t.h5EventManager.getMainHandler()),
                    t.h5EventManager.hasUse = !0),
                    t.channelEventManager.hasUse || (this.ins.setChannelEventCb(t.channelEventManager.getMainHandler()),
                    t.channelEventManager.hasUse = !0),
                    t.h5MaixuEventManager.hasUse || (this.ins.setH5MaixuCb(t.h5MaixuEventManager.getMainHandler()),
                    t.h5MaixuEventManager.hasUse = !0),
                    t.h5ChatEventManager.hasUse || (this.ins.setH5ChatRecvCb(t.h5ChatEventManager.getMainHandler()),
                    t.h5ChatEventManager.hasUse = !0),
                    t.h5DataEventManager.hasUse || (this.ins.setH5DataRecvCb(t.h5DataEventManager.getMainHandler()),
                    t.h5DataEventManager.hasUse = !0)
                }
                ,
                t.h5EventManager = new h(s.Sequence),
                t.channelEventManager = new h(s.Sequence),
                t.h5MaixuEventManager = new h(s.Once),
                t.h5ChatEventManager = new h,
                t.h5DataEventManager = new h,
                t
            }();
            n.def({
                name: "@/YYHTML5BasePlayer/v1/modules/H5ServiceSDK",
                exportName: "YYPlayer.Module.H5ServiceSDK",
                factory: function() {
                    return a
                }
            })
        },
        13: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.parseQuery = function(t) {
                null == t && (t = window.location.search),
                "?" === t[0] && (t = t.substr(1));
                var e = {};
                if ("" === t)
                    return e;
                for (var i = 0, s = t.split("&"); i < s.length; i++) {
                    var n = s[i].split("=")
                      , o = n[0]
                      , r = n[1];
                    o = decodeURIComponent(o),
                    r = decodeURIComponent(r),
                    e[o] = r
                }
                return e
            }
        },
        14: function(t, e, i) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.log = function() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                console && "function" == typeof console.log && console.log.apply(console, t)
            }
            ,
            e.warn = function() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                console && "function" == typeof console.warn && console.warn.apply(console, t)
            }
            ,
            e.error = function() {
                for (var t = [], e = 0; e < arguments.length; e++)
                    t[e] = arguments[e];
                console && "function" == typeof console.error && console.error.apply(console, t)
            }
        },
        4: function(s, n, o) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.def = function(s) {
                var n = window.YYPlayer;
                n && "function" == typeof n.define ? n.define(s) : (window.YYPlayerModules || (window.YYPlayerModules = {}),
                window.YYPlayerModules[s.name] = function() {
                    return s
                }
                ),
                s.disableAMD && (i = !0),
                t = s.factory,
                e = function(t) {
                    for (var e = s.exportName.split("."), i = t, n = 0; n < e.length; n++)
                        n < e.length - 1 ? (i[e[n]] || (i[e[n]] = {}),
                        i = i[e[n]]) : i[e[n]] = s.factory()
                }
            }
        },
        66: function(t, e) {
            var i;
            i = function() {
                return this
            }();
            try {
                i = i || Function("return this")() || (0,
                eval)("this")
            } catch (t) {
                "object" == typeof window && (i = window)
            }
            t.exports = i
        }
    }),
    t && e && ("object" == typeof exports ? module.exports = t() : "function" == typeof define && define.amd ? i || window.YYPlayerDisableAMD || define([], t) : e(window))
}();
