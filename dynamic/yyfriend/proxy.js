/* @version websdk: v1.6.0 update time: 2019-05-21 */
!function() {
    "use strict";
    function t(e) {
        var t = ("; " + document.cookie).split("; " + e + "=");
        return 1 === t.length ? "" : decodeURIComponent(t[1].split(";")[0])
    }
    var l = [{
        name: "duowan.com",
        key: ""
    }, {
        name: "yy.com",
        key: "@yy"
    }, {
        name: "yy.tv",
        key: "@yytv"
    }, {
        name: "kuaikuai.cn",
        key: "@kuaikuai"
    }, {
        name: "hiido.com",
        key: "@hiido"
    }, {
        name: "hiido.cn",
        key: "@hiidocn"
    }, {
        name: "hiido.net",
        key: "@hiidonet"
    }, {
        name: "bengou.com",
        key: "@bengou"
    }, {
        name: "5253.com",
        key: "@5253"
    }, {
        name: "duowan.cn",
        key: "@duowancn"
    }, {
        name: "zzvv.com",
        key: "@zzvv"
    }, {
        name: "99d.com",
        key: "@99d"
    }, {
        name: "sc2.com.cn",
        key: "@sc2"
    }, {
        name: "100.com",
        key: "@100"
    }, {
        name: "5153.com",
        key: "@5153"
    }, {
        name: "huya.com",
        key: "@huya"
    }, {
        name: "1931.com",
        key: "@1931"
    }, {
        name: "fengkaobiguo.com",
        key: "@fengkaobiguo"
    }, {
        name: "up24.com",
        key: "@up24"
    }, {
        name: "edu24ol.com",
        key: "@edu24ol"
    }, {
        name: "ruixueys.com",
        key: "@ruixueys"
    }, {
        name: "hqgwy.cn",
        key: "@hqgwy"
    }, {
        name: "erdmusic.com",
        key: "@erdmusic"
    }, {
        name: "zhiniu8.com",
        key: "@zhiniu8"
    }, {
        name: "100yy.com",
        key: "@100yy"
    }];
    function d(e, t, n) {
        console.log('d',e,t,n)
        return e + "//" + t + "/" + n
    }
    var F = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
      , h = "ylog.hiido.com"
      , e = function i() {
        var e = t("hiido_ui");
        return e || function r(e, t, n) {
            n = n || {};
            var o = e + "=" + encodeURIComponent(t);
            if (n.expires && "number" == typeof n.expires) {
                var i = new Date;
                n.expires = 1e3 * n.expires * 60 * 60 * 24,
                o = o + "; expires=" + (i = new Date(i.getTime() + n.expires)).toUTCString()
            }
            n.path ? o = o + "; path=" + n.path : o += "; path=/",
            n.domain ? o = o + "; domain=" + n.domain : o += "",
            document.cookie = o
        }("hiido_ui", e = Math.random(), {
            expires: 36500
        }),
        e
    }();
    function n(e, t) {
        var a = this.xc + "&prodid=" + e + "&eventid=" + t
          , s = void 0
          , u = void 0
          , n = void 0
          , f = void 0
          , l = void 0;
        this._isOverseaMode = !1,
        this._isDebugMode = !1,
        this.setUid = function(e) {
            this.uid = e
        }
        ,
        this.setImei = function(e) {
            a += "&imei=" + e
        }
        ,
        this.setMac = function(e) {
            a += "&mac=" + e
        }
        ,
        this.setHdid = function(e) {
            a += "&hdid=" + e
        }
        ,
        this.setAppkey = function(e) {
            a += "&appkey=" + e
        }
        ,
        this.setSys = function(e) {
            a += "&sys=" + e
        }
        ,
        this.setFrom = function(e) {
            a += "&from=" + e
        }
        ,
        this.setSid = function(e) {
            a += "&sid=" + e
        }
        ,
        this.setSubsid = function(e) {
            a += "&subsid=" + e
        }
        ,
        this.setTempid = function(e) {
            a += "&tempid=" + e
        }
        ,
        this.setSubtempid = function(e) {
            a += "&sub_tempid=" + e
        }
        ,
        this.setHostid = function(e) {
            a += "&hostid=" + e
        }
        ,
        this.setRef = function(e) {
            a += "&ref=" + e
        }
        ,
        this.setEntranid = function(e) {
            a += "&entran_id=" + e
        }
        ,
        this.setActtype = function(e) {
            a += "&act_type=" + e
        }
        ,
        this.setTpid = function(e) {
            a += "&tpid=" + e
        }
        ,
        this.setStatisobj = function(e) {
            a += "&statis_obj=" + e
        }
        ,
        this.setValue = function(e) {
            l = e
        }
        ,
        this.setMoreinfo = function(e) {
            "object" === (void 0 === e ? "undefined" : F(e)) && (e = JSON.stringify(e)),
            a += "&moreinfo=" + encodeURIComponent(e)
        }
        ,
        this.reportHeart = function() {
            var t = this;
            this.setType("heart"),
            this.report(0);
            var e = 1e3 * parseInt(l);
            n = setInterval(function() {
                t.report()
            }, e),
            window.onbeforeunload = function(e) {
                e = e || window.event,
                t.reportLeave()
            }
        }
        ,
        this.reportAmount = function() {
            this.setType("amount"),
            this.report(l)
        }
        ,
        this.reportProcess = function() {
            this.setType("process"),
            this.report(l)
        }
        ,
        this.reportJudge = function() {
            this.setType("judge"),
            this.report(1)
        }
        ,
        this.setType = function(e) {
            a += "&type=" + (f = e)
        }
        ,
        this.report = function(t) {
            var n = this;
            void 0 === t && (t = l);
            var e = parseInt((new Date - 0) / 1e3) + ""
              , o = this.ui + e
              , i = parseInt((new Date).getTime() / 1e3)
              , r = new Image(1,1)
              , c = d(this._hiidoHttpProtocol, this._hiidoHttpHost, this.getReportImageResourceName()).trim();
            console.log(c)
            r.src = c + "?" + a + "&uid=" + this.uid + "&guid=" + o + "&time=" + i + "&value=" + t,
            console.log(r)
            r.onload = function() {}
            ,
            r.onerror = function() {
                if (n._isOverseaMode && !n._isDebugMode) {
                    var e = d(n._hiidoHttpProtocol, h, n.getReportImageResourceName());
                    r.src = e + "?" + a + "&uid=" + this.uid + "&guid=" + o + "&time=" + i + "&value=" + t,
                    r.onerror = function() {}
                }
            }
            ,
            "heart" === f && (u && clearInterval(u),
            s = 1,
            u = setInterval(this.countSec, 1e3))
        }
        ,
        this.reportLeave = function() {
            var e = "heart" === f ? s : l;
            this.report(e),
            "heart" === f && clearInterval(n)
        }
        ,
        this.countSec = function() {
            s += 1
        }
    }
    (n.prototype = {
        constructor: n,
        _hiidoHttpProtocol: window.location.protocol,
        _hiidoHttpHost: h,
        uid: t("yyuid"),
        ui: e,
        xc: "act=websdkprotocol&sdkver=1.4.1&url=" + encodeURIComponent(String(window.location.href)) + "&domain=" + function r() {
            var e = function i(e) {
                var t = e.match(/(\w+):\/\/([\w.-]+)(?::\d+)?\/(\S*)/);
                if (null == t)
                    return !1;
                var n = t[2]
                  , o = t[3];
                return "localhost" !== n && {
                    host: n,
                    path: o
                }
            }(String(window.location.href));
            return function f(e) {
                var t = ""
                  , n = ""
                  , o = ""
                  , i = "";
                if (e) {
                    for (var r = [], c = 0; c < l.length; c++)
                        r.push({
                            n: l[c].name,
                            k: l[c].key
                        });
                    for (var a = e.split("."), s = 0; s < r.length; s++) {
                        var u = r[s].n.split(".");
                        if (-1 < e.indexOf(r[s].n)) {
                            if (2 === u.length && 3 === a.length && u[0] !== a[1])
                                continue;
                            t = r[s].n,
                            n = r[s].k,
                            o = r[s].n.split(".").length,
                            i = 2 === a.length ? "www" : a[a.length - o - 1];
                            break
                        }
                    }
                }
                return {
                    dmn: t,
                    dmk: n,
                    dml: o,
                    dsn: i
                }
            }(e ? e.host : ".").dmn
        }() + "&ui=" + e + "&region=1"
    }).setOverseaMode = function() {
        this._isDebugMode || (this._hiidoHttpHost = "hlog.hiido.com",
        this._isOverseaMode = !0)
    }
    ,
    n.prototype.setDebugMode = function(e) {
        this._hiidoHttpHost = e ? "datatest.hiido.com" : h,
        this._isDebugMode = !!e
    }
    ,
    n.prototype.getReportImageResourceName = function() {
        return this._isDebugMode ? "c.gif" : "j.gif"
    }
    ;
    var u = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    var o = function c(e, t) {
        return e(t = {
            exports: {}
        }, t.exports),
        t.exports
    }(function(a, s) {
        (function() {
            var e = "function" == typeof undefined && undefined.amd
              , E = {
                "function": !0,
                object: !0
            }
              , t = s && !s.nodeType && s
              , z = E["undefined" == typeof window ? "undefined" : F(window)] && window || this
              , n = t && E.object && a && !a.nodeType && "object" == F(u) && u;
            function Z(e, s) {
                e || (e = z.Object()),
                s || (s = z.Object());
                var u = e.Number || z.Number
                  , f = e.String || z.String
                  , t = e.Object || z.Object
                  , l = e.Date || z.Date
                  , n = e.SyntaxError || z.SyntaxError
                  , _ = e.TypeError || z.TypeError
                  , o = e.Math || z.Math
                  , i = e.JSON || z.JSON;
                "object" == (void 0 === i ? "undefined" : F(i)) && i && (s.stringify = i.stringify,
                s.parse = i.parse);
                var C, T, j, r = t.prototype, O = r.toString, d = new l(-0xc782b5b800cec);
                try {
                    d = -109252 == d.getUTCFullYear() && 0 === d.getUTCMonth() && 1 === d.getUTCDate() && 10 == d.getUTCHours() && 37 == d.getUTCMinutes() && 6 == d.getUTCSeconds() && 708 == d.getUTCMilliseconds()
                } catch (P) {}
                function h(e) {
                    if (h[e] !== j)
                        return h[e];
                    var t;
                    if ("bug-string-char-index" == e)
                        t = "a" != "a"[0];
                    else if ("json" == e)
                        t = h("json-stringify") && h("json-parse");
                    else {
                        var n, o = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                        if ("json-stringify" == e) {
                            var i = s.stringify
                              , r = "function" == typeof i && d;
                            if (r) {
                                (n = function n() {
                                    return 1
                                }
                                ).toJSON = n;
                                try {
                                    r = "0" === i(0) && "0" === i(new u) && '""' == i(new f) && i(O) === j && i(j) === j && i() === j && "1" === i(n) && "[1]" == i([n]) && "[null]" == i([j]) && "null" == i(null) && "[null,null,null]" == i([j, O, null]) && i({
                                        a: [n, !0, !1, null, "\0\b\n\f\r\t"]
                                    }) == o && "1" === i(null, n) && "[\n 1,\n 2\n]" == i([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == i(new l(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == i(new l(864e13)) && '"-000001-01-01T00:00:00.000Z"' == i(new l(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == i(new l(-1))
                                } catch (P) {
                                    r = !1
                                }
                            }
                            t = r
                        }
                        if ("json-parse" == e) {
                            var c = s.parse;
                            if ("function" == typeof c)
                                try {
                                    if (0 === c("0") && !c(!1)) {
                                        var a = 5 == (n = c(o)).a.length && 1 === n.a[0];
                                        if (a) {
                                            try {
                                                a = !c('"\t"')
                                            } catch (P) {}
                                            if (a)
                                                try {
                                                    a = 1 !== c("01")
                                                } catch (P) {}
                                            if (a)
                                                try {
                                                    a = 1 !== c("1.")
                                                } catch (P) {}
                                        }
                                    }
                                } catch (P) {
                                    a = !1
                                }
                            t = a
                        }
                    }
                    return h[e] = !!t
                }
                if (!h("json")) {
                    var p = "[object Function]"
                      , A = "[object Number]"
                      , x = "[object String]"
                      , N = "[object Array]"
                      , a = h("bug-string-char-index");
                    if (!d)
                        var M = o.floor
                          , c = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
                          , U = function U(e, t) {
                            return c[t] + 365 * (e - 1970) + M((e - 1969 + (t = +(1 < t))) / 4) - M((e - 1901 + t) / 100) + M((e - 1601 + t) / 400)
                        };
                    if ((C = r.hasOwnProperty) || (C = function(e) {
                        var n, t = {};
                        return C = (t.__proto__ = null,
                        t.__proto__ = {
                            toString: 1
                        },
                        t).toString != O ? function(e) {
                            var t = this.__proto__
                              , n = e in (this.__proto__ = null,
                            this);
                            return this.__proto__ = t,
                            n
                        }
                        : (n = t.constructor,
                        function(e) {
                            var t = (this.constructor || n).prototype;
                            return e in this && !(e in t && this[e] === t[e])
                        }
                        ),
                        t = null,
                        C.call(this, e)
                    }
                    ),
                    T = function(e, t) {
                        var n, c, o, i = 0;
                        for (o in (n = function n() {
                            this.valueOf = 0
                        }
                        ).prototype.valueOf = 0,
                        c = new n)
                            C.call(c, o) && i++;
                        return n = c = null,
                        (T = i ? 2 == i ? function(e, t) {
                            var n, o = {}, i = O.call(e) == p;
                            for (n in e)
                                i && "prototype" == n || C.call(o, n) || !(o[n] = 1) || !C.call(e, n) || t(n)
                        }
                        : function(e, t) {
                            var n, o, i = O.call(e) == p;
                            for (n in e)
                                i && "prototype" == n || !C.call(e, n) || (o = "constructor" === n) || t(n);
                            (o || C.call(e, n = "constructor")) && t(n)
                        }
                        : (c = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"],
                        function(e, t) {
                            var n, o, i = O.call(e) == p, r = !i && "function" != typeof e.constructor && E[F(e.hasOwnProperty)] && e.hasOwnProperty || C;
                            for (n in e)
                                i && "prototype" == n || !r.call(e, n) || t(n);
                            for (o = c.length; n = c[--o]; r.call(e, n) && t(n))
                                ;
                        }
                        ))(e, t)
                    }
                    ,
                    !h("json-stringify")) {
                        var y = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t"
                        }
                          , I = function I(e, t) {
                            return ("000000" + (t || 0)).slice(-e)
                        }
                          , H = function H(e) {
                            for (var t = '"', n = 0, o = e.length, i = !a || 10 < o, r = i && (a ? e.split("") : e); n < o; n++) {
                                var c = e.charCodeAt(n);
                                switch (c) {
                                case 8:
                                case 9:
                                case 10:
                                case 12:
                                case 13:
                                case 34:
                                case 92:
                                    t += y[c];
                                    break;
                                default:
                                    if (c < 32) {
                                        t += "\\u00" + I(2, c.toString(16));
                                        break
                                    }
                                    t += i ? r[n] : e.charAt(n)
                                }
                            }
                            return t + '"'
                        }
                          , J = function J(e, t, n, o, i, r, c) {
                            var a, s, u, f, l, d, h, p, y, m, g, v, b, w, k, S;
                            try {
                                a = t[e]
                            } catch (P) {}
                            if ("object" == (void 0 === a ? "undefined" : F(a)) && a)
                                if ("[object Date]" != (s = O.call(a)) || C.call(a, "toJSON"))
                                    "function" == typeof a.toJSON && (s != A && s != x && s != N || C.call(a, "toJSON")) && (a = a.toJSON(e));
                                else if (-1 / 0 < a && a < 1 / 0) {
                                    if (U) {
                                        for (l = M(a / 864e5),
                                        u = M(l / 365.2425) + 1970 - 1; U(u + 1, 0) <= l; u++)
                                            ;
                                        for (f = M((l - U(u, 0)) / 30.42); U(u, f + 1) <= l; f++)
                                            ;
                                        l = 1 + l - U(u, f),
                                        h = M((d = (a % 864e5 + 864e5) % 864e5) / 36e5) % 24,
                                        p = M(d / 6e4) % 60,
                                        y = M(d / 1e3) % 60,
                                        m = d % 1e3
                                    } else
                                        u = a.getUTCFullYear(),
                                        f = a.getUTCMonth(),
                                        l = a.getUTCDate(),
                                        h = a.getUTCHours(),
                                        p = a.getUTCMinutes(),
                                        y = a.getUTCSeconds(),
                                        m = a.getUTCMilliseconds();
                                    a = (u <= 0 || 1e4 <= u ? (u < 0 ? "-" : "+") + I(6, u < 0 ? -u : u) : I(4, u)) + "-" + I(2, f + 1) + "-" + I(2, l) + "T" + I(2, h) + ":" + I(2, p) + ":" + I(2, y) + "." + I(3, m) + "Z"
                                } else
                                    a = null;
                            if (n && (a = n.call(t, e, a)),
                            null === a)
                                return "null";
                            if ("[object Boolean]" == (s = O.call(a)))
                                return "" + a;
                            if (s == A)
                                return -1 / 0 < a && a < 1 / 0 ? "" + a : "null";
                            if (s == x)
                                return H("" + a);
                            if ("object" == (void 0 === a ? "undefined" : F(a))) {
                                for (w = c.length; w--; )
                                    if (c[w] === a)
                                        throw _();
                                if (c.push(a),
                                g = [],
                                k = r,
                                r += i,
                                s == N) {
                                    for (b = 0,
                                    w = a.length; b < w; b++)
                                        v = J(b, a, n, o, i, r, c),
                                        g.push(v === j ? "null" : v);
                                    S = g.length ? i ? "[\n" + r + g.join(",\n" + r) + "\n" + k + "]" : "[" + g.join(",") + "]" : "[]"
                                } else
                                    T(o || a, function(e) {
                                        var t = J(e, a, n, o, i, r, c);
                                        t !== j && g.push(H(e) + ":" + (i ? " " : "") + t)
                                    }),
                                    S = g.length ? i ? "{\n" + r + g.join(",\n" + r) + "\n" + k + "}" : "{" + g.join(",") + "}" : "{}";
                                return c.pop(),
                                S
                            }
                        };
                        s.stringify = function(e, t, n) {
                            var o, i, r, c;
                            if (E[void 0 === t ? "undefined" : F(t)] && t)
                                if ((c = O.call(t)) == p)
                                    i = t;
                                else if (c == N) {
                                    r = {};
                                    for (var a, s = 0, u = t.length; s < u; a = t[s++],
                                    ((c = O.call(a)) == x || c == A) && (r[a] = 1))
                                        ;
                                }
                            if (n)
                                if ((c = O.call(n)) == A) {
                                    if (0 < (n -= n % 1))
                                        for (o = "",
                                        10 < n && (n = 10); o.length < n; o += " ")
                                            ;
                                } else
                                    c == x && (o = n.length <= 10 ? n : n.slice(0, 10));
                            return J("", ((a = {})[""] = e,
                            a), i, r, o, "", [])
                        }
                    }
                    if (!h("json-parse")) {
                        var m, g, v = f.fromCharCode, b = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: "\t",
                            110: "\n",
                            102: "\f",
                            114: "\r"
                        }, w = function w() {
                            throw m = g = null,
                            n()
                        }, k = function k() {
                            for (var e, t, n, o, i, r = g, c = r.length; m < c; )
                                switch (i = r.charCodeAt(m)) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    m++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    return e = a ? r.charAt(m) : r[m],
                                    m++,
                                    e;
                                case 34:
                                    for (e = "@",
                                    m++; m < c; )
                                        if ((i = r.charCodeAt(m)) < 32)
                                            w();
                                        else if (92 == i)
                                            switch (i = r.charCodeAt(++m)) {
                                            case 92:
                                            case 34:
                                            case 47:
                                            case 98:
                                            case 116:
                                            case 110:
                                            case 102:
                                            case 114:
                                                e += b[i],
                                                m++;
                                                break;
                                            case 117:
                                                for (t = ++m,
                                                n = m + 4; m < n; m++)
                                                    48 <= (i = r.charCodeAt(m)) && i <= 57 || 97 <= i && i <= 102 || 65 <= i && i <= 70 || w();
                                                e += v("0x" + r.slice(t, m));
                                                break;
                                            default:
                                                w()
                                            }
                                        else {
                                            if (34 == i)
                                                break;
                                            for (i = r.charCodeAt(m),
                                            t = m; 32 <= i && 92 != i && 34 != i; )
                                                i = r.charCodeAt(++m);
                                            e += r.slice(t, m)
                                        }
                                    if (34 == r.charCodeAt(m))
                                        return m++,
                                        e;
                                    w();
                                default:
                                    if (t = m,
                                    45 == i && (o = !0,
                                    i = r.charCodeAt(++m)),
                                    48 <= i && i <= 57) {
                                        for (48 == i && (48 <= (i = r.charCodeAt(m + 1)) && i <= 57) && w(),
                                        o = !1; m < c && (48 <= (i = r.charCodeAt(m)) && i <= 57); m++)
                                            ;
                                        if (46 == r.charCodeAt(m)) {
                                            for (n = ++m; n < c && (48 <= (i = r.charCodeAt(n)) && i <= 57); n++)
                                                ;
                                            n == m && w(),
                                            m = n
                                        }
                                        if (101 == (i = r.charCodeAt(m)) || 69 == i) {
                                            for (43 != (i = r.charCodeAt(++m)) && 45 != i || m++,
                                            n = m; n < c && (48 <= (i = r.charCodeAt(n)) && i <= 57); n++)
                                                ;
                                            n == m && w(),
                                            m = n
                                        }
                                        return +r.slice(t, m)
                                    }
                                    if (o && w(),
                                    "true" == r.slice(m, m + 4))
                                        return m += 4,
                                        !0;
                                    if ("false" == r.slice(m, m + 5))
                                        return m += 5,
                                        !1;
                                    if ("null" == r.slice(m, m + 4))
                                        return m += 4,
                                        null;
                                    w()
                                }
                            return "$"
                        }, S = function S(e) {
                            var t, n;
                            if ("$" == e && w(),
                            "string" == typeof e) {
                                if ("@" == (a ? e.charAt(0) : e[0]))
                                    return e.slice(1);
                                if ("[" == e) {
                                    for (t = []; "]" != (e = k()); n || (n = !0))
                                        n && ("," == e ? "]" == (e = k()) && w() : w()),
                                        "," == e && w(),
                                        t.push(S(e));
                                    return t
                                }
                                if ("{" == e) {
                                    for (t = {}; "}" != (e = k()); n || (n = !0))
                                        n && ("," == e ? "}" == (e = k()) && w() : w()),
                                        "," != e && "string" == typeof e && "@" == (a ? e.charAt(0) : e[0]) && ":" == k() || w(),
                                        t[e.slice(1)] = S(k());
                                    return t
                                }
                                w()
                            }
                            return e
                        }, D = function D(e, t, n) {
                            var o = R(e, t, n);
                            o === j ? delete e[t] : e[t] = o
                        }, R = function R(e, t, n) {
                            var o, i = e[t];
                            if ("object" == (void 0 === i ? "undefined" : F(i)) && i)
                                if (O.call(i) == N)
                                    for (o = i.length; o--; )
                                        D(i, o, n);
                                else
                                    T(i, function(e) {
                                        D(i, e, n)
                                    });
                            return n.call(e, t, i)
                        };
                        s.parse = function(e, t) {
                            var n, o;
                            return m = 0,
                            g = "" + e,
                            n = S(k()),
                            "$" != k() && w(),
                            m = g = null,
                            t && O.call(t) == p ? R(((o = {})[""] = n,
                            o), "", t) : n
                        }
                    }
                }
                return s.runInContext = Z,
                s
            }
            if (!n || n.global !== n && n.window !== n && n.self !== n || (z = n),
            t && !e)
                Z(z, t);
            else {
                var o = z.JSON
                  , i = z.JSON3
                  , r = !1
                  , c = Z(z, z.JSON3 = {
                    noConflict: function() {
                        return r || (r = !0,
                        z.JSON = o,
                        z.JSON3 = i,
                        o = i = null),
                        c
                    }
                });
                z.JSON = {
                    parse: c.parse,
                    stringify: c.stringify
                }
            }
            e && undefined(function() {
                return c
            })
        }
        ).call(u)
    });
    window.JSON || (window.JSON = o),
    window.HiidoEvent = window.hiidoEvent = n
}();
