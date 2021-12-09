(function(n) {
    var e = function() {
        try {
            return !!Symbol.iterator
        } catch (n) {
            return !1
        }
    }, r = e(), i = function(n) {
        var t = {
            next: function() {
                var t = n.shift();
                return {
                    done: t === void 0,
                    value: t
                }
            }
        };
        return r && (t[Symbol.iterator] = function() {
            return t
        }
        ),
        t
    }, u = function(n) {
        return encodeURIComponent(n).replace(/%20/g, "+")
    }, f = function(n) {
        return decodeURIComponent(String(n).replace(/\+/g, " "))
    }, o = function() {
        var f = function(n) {
            var r, e, t, i, u;
            if (Object.defineProperty(this, "_entries", {
                writable: !0,
                value: {}
            }),
            r = typeof n,
            r !== "undefined")
                if (r === "string")
                    n !== "" && this._fromString(n);
                else if (n instanceof f)
                    e = this,
                    n.forEach(function(n, t) {
                        e.append(t, n)
                    });
                else if (n !== null && r === "object")
                    if (Object.prototype.toString.call(n) === "[object Array]")
                        for (t = 0; t < n.length; t++)
                            if (i = n[t],
                            Object.prototype.toString.call(i) === "[object Array]" || i.length !== 2)
                                this.append(i[0], i[1]);
                            else
                                throw new TypeError("Expected [string, any] as entry at index " + t + " of URLSearchParams's input");
                    else
                        for (u in n)
                            n.hasOwnProperty(u) && this.append(u, n[u]);
                else
                    throw new TypeError("Unsupported input's type for URLSearchParams");
        }
          , t = f.prototype;
        t.append = function(n, t) {
            n in this._entries ? this._entries[n].push(String(t)) : this._entries[n] = [String(t)]
        }
        ;
        t.delete = function(n) {
            delete this._entries[n]
        }
        ;
        t.get = function(n) {
            return n in this._entries ? this._entries[n][0] : null
        }
        ;
        t.getAll = function(n) {
            return n in this._entries ? this._entries[n].slice(0) : []
        }
        ;
        t.has = function(n) {
            return n in this._entries
        }
        ;
        t.set = function(n, t) {
            this._entries[n] = [String(t)]
        }
        ;
        t.forEach = function(n, t) {
            var u, i, r;
            for (i in this._entries)
                if (this._entries.hasOwnProperty(i))
                    for (u = this._entries[i],
                    r = 0; r < u.length; r++)
                        n.call(t, u[r], i, this)
        }
        ;
        t.keys = function() {
            var n = [];
            return this.forEach(function(t, i) {
                n.push(i)
            }),
            i(n)
        }
        ;
        t.values = function() {
            var n = [];
            return this.forEach(function(t) {
                n.push(t)
            }),
            i(n)
        }
        ;
        t.entries = function() {
            var n = [];
            return this.forEach(function(t, i) {
                n.push([i, t])
            }),
            i(n)
        }
        ;
        r && (t[Symbol.iterator] = t.entries);
        t.toString = function() {
            var n = [];
            return this.forEach(function(t, i) {
                n.push(u(i) + "=" + u(t))
            }),
            n.join("&")
        }
        ;
        n.URLSearchParams = f
    }, s = function() {
        try {
            var t = n.URLSearchParams;
            return new t("?a=1").toString() === "a=1" && typeof t.prototype.set == "function"
        } catch (i) {
            return !1
        }
    }, t;
    s() || o();
    t = n.URLSearchParams.prototype;
    typeof t.sort != "function" && (t.sort = function() {
        var i = this, n = [], t;
        for (this.forEach(function(t, r) {
            n.push([r, t]);
            i._entries || i.delete(r)
        }),
        n.sort(function(n, t) {
            return n[0] < t[0] ? -1 : n[0] > t[0] ? 1 : 0
        }),
        i._entries && (i._entries = {}),
        t = 0; t < n.length; t++)
            this.append(n[t][0], n[t][1])
    }
    );
    typeof t._fromString != "function" && Object.defineProperty(t, "_fromString", {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: function(n) {
            var i, u, r, t;
            if (this._entries)
                this._entries = {};
            else
                for (i = [],
                this.forEach(function(n, t) {
                    i.push(t)
                }),
                t = 0; t < i.length; t++)
                    this.delete(i[t]);
            for (n = n.replace(/^\?/, ""),
            u = n.split("&"),
            t = 0; t < u.length; t++)
                r = u[t].split("="),
                this.append(f(r[0]), r.length > 1 ? f(r[1]) : "")
        }
    })
}
)(typeof global != "undefined" ? global : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this),
function(n) {
    var i = function() {
        try {
            var t = new n.URL("b","http://a");
            return t.pathname = "c d",
            t.href === "http://a/c%20d" && t.searchParams
        } catch (i) {
            return !1
        }
    }, r = function() {
        var t = n.URL
          , i = function(t, i) {
            var u, f, r, o, c;
            if (typeof t != "string" && (t = String(t)),
            u = document,
            i && (n.location === void 0 || i !== n.location.href)) {
                u = document.implementation.createHTMLDocument("");
                f = u.createElement("base");
                f.href = i;
                u.head.appendChild(f);
                try {
                    if (f.href.indexOf(i) !== 0)
                        throw new Error(f.href);
                } catch (l) {
                    throw new Error("URL unable to set base " + i + " due to " + l);
                }
            }
            if (r = u.createElement("a"),
            r.href = t,
            f && (u.body.appendChild(r),
            r.href = r.href),
            o = u.createElement("input"),
            o.type = "url",
            o.value = t,
            r.protocol === ":" || !/:/.test(r.href) || !o.checkValidity() && !i)
                throw new TypeError("Invalid URL");
            Object.defineProperty(this, "_anchorElement", {
                value: r
            });
            var e = new n.URLSearchParams(this.search)
              , s = !0
              , h = !0
              , a = this;
            ["append", "delete", "set"].forEach(function(n) {
                var t = e[n];
                e[n] = function() {
                    t.apply(e, arguments);
                    s && (h = !1,
                    a.search = e.toString(),
                    h = !0)
                }
            });
            Object.defineProperty(this, "searchParams", {
                value: e,
                enumerable: !0
            });
            c = void 0;
            Object.defineProperty(this, "_updateSearchParams", {
                enumerable: !1,
                configurable: !1,
                writable: !1,
                value: function() {
                    this.search !== c && (c = this.search,
                    h && (s = !1,
                    this.searchParams._fromString(this.search),
                    s = !0))
                }
            })
        }
          , r = i.prototype
          , u = function(n) {
            Object.defineProperty(r, n, {
                get: function() {
                    return this._anchorElement[n]
                },
                set: function(t) {
                    this._anchorElement[n] = t
                },
                enumerable: !0
            })
        };
        ["hash", "host", "hostname", "port", "protocol"].forEach(function(n) {
            u(n)
        });
        Object.defineProperty(r, "search", {
            get: function() {
                return this._anchorElement.search
            },
            set: function(n) {
                this._anchorElement.search = n;
                this._updateSearchParams()
            },
            enumerable: !0
        });
        Object.defineProperties(r, {
            toString: {
                get: function() {
                    var n = this;
                    return function() {
                        return n.href
                    }
                }
            },
            href: {
                get: function() {
                    return this._anchorElement.href.replace(/\?$/, "")
                },
                set: function(n) {
                    this._anchorElement.href = n;
                    this._updateSearchParams()
                },
                enumerable: !0
            },
            pathname: {
                get: function() {
                    return this._anchorElement.pathname.replace(/(^\/?)/, "/")
                },
                set: function(n) {
                    this._anchorElement.pathname = n
                },
                enumerable: !0
            },
            origin: {
                get: function() {
                    var n = {
                        "http:": 80,
                        "https:": 443,
                        "ftp:": 21
                    }[this._anchorElement.protocol]
                      , t = this._anchorElement.port != n && this._anchorElement.port !== "";
                    return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (t ? ":" + this._anchorElement.port : "")
                },
                enumerable: !0
            },
            password: {
                get: function() {
                    return ""
                },
                set: function() {},
                enumerable: !0
            },
            username: {
                get: function() {
                    return ""
                },
                set: function() {},
                enumerable: !0
            }
        });
        i.createObjectURL = function() {
            return t.createObjectURL.apply(t, arguments)
        }
        ;
        i.revokeObjectURL = function() {
            return t.revokeObjectURL.apply(t, arguments)
        }
        ;
        n.URL = i
    }, t;
    if (i() || r(),
    n.location !== void 0 && !("origin"in n.location)) {
        t = function() {
            return n.location.protocol + "//" + n.location.hostname + (n.location.port ? ":" + n.location.port : "")
        }
        ;
        try {
            Object.defineProperty(n.location, "origin", {
                get: t,
                enumerable: !0
            })
        } catch (u) {
            setInterval(function() {
                n.location.origin = t()
            }, 100)
        }
    }
}(typeof global != "undefined" ? global : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this),
function() {
    var n;
    n = !1;
    window.tableau = window.tableau || {},
    function(n) {
        function t() {
            for (var i, n, r = document.getElementsByTagName("script"), t = r.length - 1; t >= 0; t -= 1)
                if (i = r[t],
                /viz_v1\.js/.test(i.src))
                    break;
            return n = new RegExp(".*?[^/:]/").exec(i.src),
            n && (n[0].toLowerCase().indexOf("http://") !== -1 || n[0].toLowerCase().indexOf("https://") !== -1) || (n = new RegExp(".*?[^/:]/").exec(window.location.href)),
            n ? n[0].toLowerCase() : ""
        }
        n._apiScripts = n._apiScripts || [];
        n._apiScripts.push(t())
    }(window.tableau);
    window.tableau._apiLoaded || (window.tableau._apiLoaded = !0,
    function() {
        function d() {
            return typeof pageXOffset != "undefined" ? window.pageXOffset : document.documentElement.scrollLeft
        }
        function g() {
            return typeof pageYOffset != "undefined" ? window.pageYOffset : document.documentElement.scrollTop
        }
        function e(n) {
            return n === undefined || n === null
        }
        function u(n) {
            return n === undefined || n === null || n.length === 0
        }
        function nt() {
            return !e(window.postMessage)
        }
        function tt(n, t) {
            return n && n.nodeType === ot && n.tagName.toLowerCase() === t.toLowerCase()
        }
        function it(n, t) {
            return n && (" " + n.className + " ").replace(/[\n\t\r]/g, " ").indexOf(" " + t + " ") > -1
        }
        function st(n, t, i) {
            var r = n ? n.parentNode : null;
            for (i = i || document.body; r; ) {
                if (it(r, t))
                    return r;
                r = r === i ? null : r.parentNode
            }
            return r
        }
        function y(n) {
            var i, t, u, r;
            for (r = [[/&/g, "&amp;"], [/</g, "&lt;"], [/>/g, "&gt;"], [/"/g, "&quot;"], [/'/g, "&#39;"], [/\//g, "&#47;"]],
            i = n || "",
            t = 0,
            u = r.length; t < u; t++)
                i = i.replace(r[t][0], r[t][1]);
            return i
        }
        function f(n, t) {
            return window.getComputedStyle ? window.getComputedStyle(n, t) : n.currentStyle
        }
        function o(n, t) {
            var i;
            return u(n) ? t : (i = n.match(/^(yes|y|true|t|1)$/i),
            !u(i))
        }
        function ht(n) {
            var t, i, r = [];
            if (u(n.filter))
                return "";
            for (t = 0,
            i = n.filter.length; t < i; t++)
                r.push("&" + n.filter[t]);
            return r.join("")
        }
        function ct(n) {
            return n = n.replace(/^\//, ""),
            n.charAt(n.length) !== "/" && (n += "/"),
            n
        }
        function lt(n, t, i) {
            var e, o, f, r = [t];
            f = i.site_root ? i.site_root : "";
            f.length > 0 && (f = ct(f));
            u(i.path) ? u(i.ticket) ? r.push(f + "views/" + n) : r.push("trusted/" + i.ticket + "/" + f + "views/" + n) : r.push(i.path);
            r.push("?:embed=y");
            r.push("&:showVizHome=no");
            o = {
                "load-order": 1,
                width: 1,
                height: 1,
                embed: 1,
                filter: 1,
                path: 1,
                ticket: 1,
                serverRoot: 1,
                static_image: 1,
                site_prefix: 1,
                site_root: 1,
                bootstrapWhenNotified: 1
            };
            for (e in i)
                i.hasOwnProperty(e) && o[e] === undefined && r.push("&:" + e + "=" + i[e]);
            return r.join("")
        }
        function p(n, t) {
            var i, h = n.childNodes, s, c, r, f, e = "", l;
            for (t = t || {},
            s = 0,
            c = h.length; s < c; s++)
                i = h[s],
                tt(i, "param") && i.name ? (r = i.name,
                f = i.value ? i.value : null,
                r === "name" ? e = f : r === "filter" ? (t.filter = t.filter || [],
                t.filter.push(f)) : (t[r] = f,
                r === "mobile" && o(f, !1) && (k = !0))) : i.childNodes && i.childNodes.length > 0 && !tt(i, "object") && (l = p(i, t),
                e = u(e) ? l : e);
            return e
        }
        function rt(n) {
            var r, i, t, f;
            return t = u(n.host_url) ? u(n.serverRoot) ? tableau._apiScripts[0] : n.serverRoot : decodeURIComponent(n.host_url),
            r = new RegExp(".*//"),
            f = new RegExp("https?://[-A-Za-z0-9]*public[-A-Za-z0-9]*\\.tableau"),
            i = r.exec(window.location.href) && r.exec(window.location.href)[0],
            i && i.indexOf("file://") === -1 && t.indexOf(i) === -1 && t.match(f) !== null && (t = t.replace(r, i)),
            t
        }
        function at(n, t) {
            for (var i = 0; n[i] !== undefined; i += 1)
                if (n[i] === t)
                    return !0;
            return !1
        }
        function vt(n, t) {
            for (var i = 0; n[i] !== undefined; i += 1)
                if (n[i] === t)
                    return n.splice(i, 1),
                    !0;
            return !1
        }
        function a(n) {
            var i = n.getBoundingClientRect()
              , t = f(n)
              , r = parseInt(t.paddingLeft, 10) || 0
              , e = parseInt(t.paddingRight, 10) || 0
              , u = parseInt(t.paddingTop, 10) || 0
              , o = parseInt(t.paddingBottom, 10) || 0
              , s = parseInt(t.borderLeftWidth, 10) || 0
              , h = parseInt(t.borderTopWidth, 10) || 0;
            return {
                left: i.left + r + s + d(),
                top: i.top + u + h + g(),
                width: n.clientWidth - (r + e),
                height: n.clientHeight - (u + o)
            }
        }
        function ut(n, t) {
            var i = Math.max(n.left, t.left)
              , r = Math.max(n.top, t.top)
              , u = Math.min(n.left + n.width, t.left + t.width)
              , f = Math.min(n.top + n.height, t.top + t.height);
            return u <= i || f <= r ? {
                left: 0,
                top: 0,
                width: 0,
                height: 0
            } : {
                left: i,
                top: r,
                width: u - i,
                height: f - r
            }
        }
        function yt() {
            return window.visualViewport ? {
                left: window.visualViewport.pageLeft,
                top: window.visualViewport.pageTop,
                width: window.visualViewport.width,
                height: window.visualViewport.height
            } : null
        }
        function pt() {
            var n, t;
            return n = yt(),
            n ? n : (n = a(document.documentElement),
            t = document.compatMode === "BackCompat",
            t && (n.height = document.body.clientHeight - n.left,
            n.width = document.body.clientWidth - n.top),
            n.left += d(),
            n.top += g(),
            n)
        }
        function wt(n) {
            for (var r, u, i = a(n), t = n.parentElement; t && t.parentElement; t = t.parentElement)
                r = f(t).overflow,
                (r === "auto" || r === "scroll" || r === "hidden") && (i = ut(i, a(t)));
            return u = pt(),
            ut(i, u)
        }
        function bt(n, t) {
            var i = tableau.vizs[n]._loadOrder
              , r = tableau.vizs[t]._loadOrder;
            return i < r ? -1 : i === r ? 0 : 1
        }
        function w(n) {
            var t = n > -1 ? tableau.vizs[r[n]] : null;
            t && t._onLoaded()
        }
        function c(n) {
            var i, u;
            n === t && (u = t + 1,
            i = tableau.vizs[r[u]],
            i && (t = u,
            i.load(),
            window.postMessage && setTimeout(function() {
                c(t)
            }, 3e3)))
        }
        function kt() {
            return document.baseURI !== document.location.href
        }
        function dt() {
            var n;
            b ? (n = tableau.vizs[r[t]],
            n && n._iframe.readyState === "complete" && (w(t),
            c(t))) : (w(t),
            c(t))
        }
        function ft() {
            setTimeout(dt, 3e3)
        }
        function l(n) {
            var u, i, o, f, e;
            if (n.data && (typeof n.data == "string" || n.data instanceof String))
                if (o = n.data.split(","),
                f = o[0],
                f === "tableau.completed" || f === "completed") {
                    if (e = parseInt(o[1], 10),
                    isNaN(e))
                        for (u = 0; u <= t; u++)
                            i = tableau.vizs[r[u]],
                            i && i._hideLoadIndicators();
                    w(e);
                    c(e)
                } else if (f === "tableau.loadIndicatorsLoaded")
                    i = tableau.vizs[r[t]],
                    i && i._hideLoadIndicators();
                else if (f === "layoutInfoReq")
                    for (u = 0; u <= t; u++)
                        i = tableau.vizs[r[u]],
                        i && i._sendVisibleRect();
                else
                    f === "tableau.listening" ? (i = tableau.vizs[r[t]],
                    i && i._enableVisibleRectCommunication()) : f === "tableau.staticImageRedirect" && (e = parseInt(o[1], 10),
                    i = e > -1 ? tableau.vizs[r[e]] : null,
                    i && i._hideLoadIndicators())
        }
        function gt() {
            var n = navigator.userAgent;
            return n.indexOf("iPad") !== -1 ? !0 : n.indexOf("Android") !== -1 ? !0 : n.indexOf("AppleWebKit") !== -1 && n.indexOf("Mobile") !== -1 ? !0 : !1
        }
        function ni() {
            function t(n, t) {
                var i, r, u, f;
                i = 0;
                r = 0;
                u = document.documentElement.clientWidth / window.innerWidth;
                f = "sf," + t + "," + u + "," + i + "," + r;
                n.postMessage(f, "*")
            }
            function i(i) {
                if (typeof i.data == "string" || i.data instanceof String)
                    for (var u = i.data.split(","), r = 0, f; r < u.length; )
                        n || u[r] !== "tableau.completed" && u[r] !== "completed" || (n = !0,
                        t(i.source, -1)),
                        u[r] === "sf?" && (f = u[++r],
                        t(i.source, f)),
                        ++r
            }
            var n = !1;
            return window.addEventListener && window.addEventListener("message", i, !1),
            this
        }
        function i(n) {
            this._objectElement = n
        }
        function ii() {
            for (var n, r = document.getElementsByTagName("object"), u = [], t = 0, i = r.length; t < i; t++)
                n = r[t],
                it(n, "tableauViz") && !at(v, n) && (v.push(n),
                u.push(n));
            return u
        }
        function ri(n) {
            for (var r = window.tableau._apiScripts, t = 0, i = Math.min(n.length, r.length); t < i; t++)
                n[t].params.serverRoot = r[t]
        }
        function ui() {
            for (var n = document.getElementById("tableau_hide_this"); n; )
                n.parentNode.removeChild(n),
                n = document.getElementById("tableau_hide_this")
        }
        function h() {
            var n, o, e, s, i, h, u = [];
            if (s = ii(),
            s.length !== 0) {
                for (ui(),
                n = 0,
                o = s.length; n < o; n++)
                    e = s[n],
                    i = {
                        filter: [],
                        ticket: "",
                        path: ""
                    },
                    h = p(e, i),
                    i.width = parseInt(f(e, null).width, 10),
                    isNaN(i.width) && delete i.width,
                    i.height = parseInt(f(e, null).height, 10),
                    isNaN(i.height) && delete i.height,
                    u.push({
                        name: h,
                        objectElement: e,
                        params: i
                    });
                for (ri(u),
                n = 0,
                o = u.length; n < o; n++)
                    tableau.createViz(u[n].name, u[n].objectElement, u[n].params);
                r.sort(bt);
                c(t)
            }
        }
        var ot = 1, b = navigator.userAgent.indexOf("MSIE") > -1 && !window.opera, t = -1, k, v = [], r = [];
        i._instanceCounter = 0;
        i.prototype.getRootElement = function() {
            return this._ensurePlaceholderDiv() ? this._placeholderDiv : null
        }
        ;
        i.prototype.adjustSlopInWidth = function(n, t) {
            return t - 4
        }
        ;
        i.prototype.adjustSlopInHeight = function(t, i) {
            var r = 4;
            return o(t.tabs, !1) && (r += 3),
            (o(t.toolbar, !0) || n) && (r += 5),
            i - r
        }
        ;
        i.prototype.adjustHeightForPublic = function(n, t) {
            return !n.embed_code_version || n.embed_code_version < 3 ? t - 33 : t
        }
        ;
        i.prototype.sizeIframeToObjectElement = function(t) {
            var o = this._objectElement, u = {}, r, i;
            e(o) || (p(o, u),
            r = f(o, null).width,
            i = f(o, null).height,
            r.indexOf("%") === -1 && i.indexOf("%") === -1 && (r = parseInt(r, 10),
            i = parseInt(i, 10),
            u.embed_code_version || (r = this.adjustSlopInWidth(u, r),
            i = this.adjustSlopInHeight(u, i)),
            n && (i = this.adjustHeightForPublic(u, i)),
            r = r + "px",
            i = i + "px"),
            t.style.width = r,
            t.style.height = i)
        }
        ;
        i.prototype.sizeToObjectElement = function(n) {
            var t = this._objectElement, i, r;
            e(t) || (i = f(t, null).width,
            r = f(t, null).height,
            n.style.width = i,
            n.style.height = r)
        }
        ;
        const s = function(n) {
            return typeof n == "number" ? n : typeof n == "string" && +n.substr(0, n.indexOf("px")) || 0
        }
          , et = function(n, t, i) {
            var r = n;
            return i > 0 && r > i ? r = i : r < t && (r = t),
            r
        }
          , ti = function(n, t, i, r, u, f) {
            return t > 0 && n > 0 && (r == 0 || i == 0) ? u >= t && f >= n ? [u, f] : [t, n] : [et(u, t, r), et(f, n, i)]
        };
        i.prototype.determinePlaceholderSize = function(n, t) {
            var i = n.clientWidth
              , r = n.clientHeight;
            i = Math.round(s(i));
            r = Math.round(s(r));
            var f = Math.round(s(t.style.minHeight))
              , e = Math.round(s(t.style.minWidth))
              , o = Math.round(s(t.style.maxHeight))
              , h = Math.round(s(t.style.maxWidth))
              , u = ti(f, e, o, h, i, r);
            return {
                placeholderWidth: u[0],
                placeholderHeight: u[1]
            }
        }
        ;
        i.prototype.createLoadingFeedback = function(n, t) {
            var r, h, s, w, d = this, a, v, b = o(t.display_spinner, !0), f, e, p, c, l;
            if (a = kt(),
            b !== !0 || a || (t.display_spinner = "no"),
            this._ensurePlaceholderDiv()) {
                this.sizeToObjectElement(this._placeholderDiv);
                try {
                    if (p = this.determinePlaceholderSize(this._placeholderDiv, this._objectElement),
                    f = p.placeholderWidth,
                    e = p.placeholderHeight,
                    typeof f != "number" || isNaN(f)) {
                        c = "Invalid width- " + f;
                        throw c;
                    }
                    if (typeof e != "number" || isNaN(e)) {
                        c = "Invalid height- " + e;
                        throw c;
                    }
                } catch (k) {
                    console.error("Failed to get iframe size: " + k);
                    f = 0;
                    e = 0
                }
                if (h = this._placeholderDiv.style,
                h.position = "relative",
                h.overflow = "hidden",
                h.display = "none",
                r = ['<div style="position:absolute;top:0;left:0;right:0;bottom:0;border:0;padding:0;margin:0">'],
                v = i._instanceCounter++,
                a || r.push('<div style="top:100px;left:0;right:0;position:absolute;z-index:991;box-shadow:none;display:flex;justify-content:center;"><style>#tableau-svg-spinner-container-%instId%{width:65px;height:65px;border-radius:10px;display:flex;justify-content:center;align-items:center}#tableau-svg-spinner-%instId%{width:50px;height:50px;-webkit-animation:tableau-svg-spinner-animation 1s linear infinite;animation:tableau-svg-spinner-animation 1s linear infinite}@-webkit-keyframes tableau-svg-spinner-animation{100%{-webkit-transform:rotate(360deg)}}@keyframes tableau-svg-spinner-animation{100%{transform:rotate(360deg)}}<\/style><div id="tableau-svg-spinner-container-%instId%"><svg id="tableau-svg-spinner-%instId%" viewBox="0 0 50 50"><style>#tail{fill:url(#tableau-fade-%instId%)}#head{fill:#616570}stop{stop-color:#616570}<\/style><linearGradient id="tableau-fade-%instId%" x2="50" y1="25" y2="25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-opacity="0" /><stop offset=".15" stop-opacity=".04" /><stop offset=".3" stop-opacity=".16" /><stop offset=".45" stop-opacity=".36" /><stop offset=".61" stop-opacity=".64" /><stop offset=".76" /><\/linearGradient><path id="head" d="M0 25a25 25 0 1 0 50 0h-3.9a21.1 21.1 0 1 1-42.2 0" /><path id="tail" d="M50 25a25 25 0 0 0-50 0h3.9a21.1 21.1 0 1 1 42.2 0" /><\/svg><\/div><\/div>'.replace(/%instId%/g, v)),
                o(t.display_overlay, !0) && r.push("<div style='position:absolute;top:0;left:0;right:0;bottom:0;z-index:990;background-color:#EBEBEB;opacity:.24'><\/div>"),
                o(t.display_static_image, !0) && !u(t.static_image)) {
                    r.push("<style>#tableau-svg-spinner-container-%instId%{border-radius:12px;background:rgba(255,255,255,.6);<\/style>".replace(/%instId%/g, v));
                    t.display_static_image = "no";
                    w = "1px";
                    r.push('<div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; ');
                    r.push("background: transparent url('");
                    l = {
                        height: e,
                        width: f,
                        deviceScaleFactor: window.devicePixelRatio
                    };
                    function n(n, t) {
                        var u, i, r;
                        try {
                            u = new URL(n);
                            for (i in t)
                                if (t.hasOwnProperty(i)) {
                                    if (r = t[i],
                                    typeof r != "number" || isNaN(r)) {
                                        console.error("Invalid query parameter- " + i + ":" + r);
                                        continue
                                    }
                                    u.searchParams.append(encodeURIComponent(i), encodeURIComponent(r))
                                }
                        } catch (f) {
                            return console.error("Unable to append params to the url : " + f),
                            n
                        }
                        return u.toString()
                    }
                    r.push(y(n(t.static_image, l)));
                    r.push("') no-repeat scroll 0 0; background-size: " + y(l.width + "px ") + y(l.height + "px") + "; box-shadow: none; left:0px; top:");
                    r.push(w);
                    r.push('"><\/div>')
                }
                return r.push("<\/div>"),
                s = document.createElement("div"),
                s.innerHTML = r.join(""),
                this._glassPaneElement = s.firstChild,
                this._placeholderDiv.appendChild(this._glassPaneElement),
                s.innerHTML = "",
                s = null,
                this._createAndAppendIframe()
            }
        }
        ;
        i.prototype.show = function() {
            this._placeholderDiv && (this._placeholderDiv.style.display = "block")
        }
        ;
        i.prototype.dispose = function() {
            if (this._glassPaneElement) {
                var n, t, i;
                n = 150;
                this._glassPaneElement.style.transition = n + "ms opacity";
                this._glassPaneElement.style.opacity = 0;
                t = function(n) {
                    n.innerHTML = "";
                    n.parentNode.removeChild(n);
                    n = null
                }
                ;
                i = this._glassPaneElement;
                window.setTimeout(function() {
                    t(i)
                }, n)
            }
            this._objectElement && (vt(v, this._objectElement),
            this._objectElement.parentNode.removeChild(this._objectElement),
            this._objectElement = null)
        }
        ;
        i.prototype._ensurePlaceholderDiv = function() {
            var n;
            return e(this._placeholderDiv) ? e(this._objectElement) ? !1 : (n = st(this._objectElement, "tableauPlaceholder"),
            n || (n = document.createElement("div"),
            n.className = "tableauPlaceholder",
            this._objectElement.parentNode.insertBefore(n, this._objectElement),
            n.appendChild(this._objectElement),
            this._objectElement.style.display = "none"),
            this._placeholderDiv = n,
            !0) : !0
        }
        ;
        i.prototype._createAndAppendIframe = function() {
            var i, t, o, n, s, h, c, r, u, l, f;
            if (!e(this._objectElement)) {
                for (i = this._objectElement.attributes,
                n = document.createElement("iframe"),
                n.frameBorder = "0",
                n.marginHeight = "0",
                n.marginWidth = "0",
                u = {
                    en: "Data Visualization",
                    "en-GB": "Data Visualisation",
                    fr: "Visualisation de données",
                    es: "Visualización de datos",
                    it: "Visualizzazione dati",
                    pt: "Visualização de dados",
                    ja: "データ ビジュアライゼーション",
                    de: "Datenvisualisierung",
                    ko: "데이터 비주얼리제이션",
                    "zh-CN": "数据可视化",
                    "zh-TW": "資料可視化"
                },
                f = window.navigator.language,
                l = u[f] || u[f.substr(0, 2)] || u.en,
                n.setAttribute("title", l),
                n.setAttribute("allowTransparency", "true"),
                n.setAttribute("allowFullScreen", "true"),
                t = 0,
                o = i.length; t < o; t++)
                    i[t].specified && n.setAttribute(i[t].name, i[t].value);
                return n.style.cssText = this._objectElement.style.cssText,
                n.style.margin = "0px",
                n.style.padding = "0px",
                n.style.border = "none",
                this.sizeIframeToObjectElement(n),
                r = navigator.userAgent,
                h = r.indexOf("WebKit") >= 0,
                s = r.indexOf("Chrome") >= 0,
                c = r.indexOf("Safari") >= 0 || h && !s,
                c && n.addEventListener("mousewheel", function() {}),
                this._ensurePlaceholderDiv() && this._placeholderDiv.appendChild(n),
                n
            }
        }
        ;
        window.tableau.Viz = function(n, t, i) {
            this._name = n;
            this._iframe = t;
            this._filterArgs = "";
            this._filterOpts = ht(i);
            this._serverRoot = rt(i);
            this._baseUrl = lt(this._name, this._serverRoot, i);
            this._loadOrder = i["load-order"] ? parseInt(i["load-order"], 10) : 0;
            this._filter = {}
        }
        ;
        window.tableau.vizs = [];
        window.tableau.createViz = function(n, t, f) {
            var o, s, h, e;
            h = rt(f);
            s = new i(t);
            o = s.createLoadingFeedback(h, f);
            s.show();
            e = new tableau.Viz(n,o,f);
            e._loadFeedback = s;
            e.show();
            r.push(this.vizs.length);
            this.vizs.push(e);
            u(n) || (this.vizs[n] = e);
            window.postMessage || (b ? o.onreadystatechange = ft : o.onload = ft)
        }
        ;
        window.tableau.Viz.prototype.load = function() {
            var n = "&:loadOrderID=" + t
              , i = window.top === window.self ? "" : "&:increment_view_count=no";
            this._iframe.src = this._baseUrl + this._filterOpts + n + i
        }
        ;
        window.tableau.Viz.prototype.show = function() {
            this._iframe.style.display = "block"
        }
        ;
        window.tableau.Viz.prototype.hide = function() {
            this._iframe.style.display = "none"
        }
        ;
        window.tableau.Viz.prototype.refresh = function() {
            this._iframe.src = this._baseUrl + this._filterOpts + this._filterArgs + "&:refresh=true"
        }
        ;
        window.tableau.Viz.prototype.revert = function() {
            this._iframe.src = this._baseUrl + "&:revert=all";
            this._filterArgs = "";
            this._filter = {}
        }
        ;
        window.tableau.Viz.prototype.filter = function(n) {
            var t;
            if (e(n)) {
                this.revert();
                return
            }
            for (t in n)
                this._filter[t] = n[t];
            this._filterArgs = "";
            for (t in n)
                this._filterArgs += "&" + encodeURIComponent(t) + "=",
                this._filterArgs += typeof n[t] == "string" ? encodeURIComponent(n[t]) : encodeURIComponent(n[t].join(","));
            this._iframe.src = this._baseUrl + this._filterOpts + this._filterArgs
        }
        ;
        window.tableau.Viz.prototype._sendVisibleRect = function() {
            var n, t, i;
            nt() && this._iframe && this._iframe.contentWindow && (n = wt(this._iframe),
            t = a(this._iframe),
            i = ["layoutInfoResp", n.left - t.left, n.top - t.top, n.width, n.height].join(","),
            this._iframe.contentWindow.postMessage(i, "*"))
        }
        ;
        window.tableau.Viz.prototype._enableVisibleRectCommunication = function() {
            nt() && this._iframe && this._iframe.contentWindow && this._iframe.contentWindow.postMessage("tableau.enableVisibleRectCommunication", "*")
        }
        ;
        window.tableau.Viz.prototype._onLoaded = function() {
            this._hideLoadIndicators();
            this._enableVisibleRectCommunication()
        }
        ;
        window.tableau.Viz.prototype._hideLoadIndicators = function() {
            this._loadFeedback && (this._loadFeedback.dispose(),
            this._loadFeedback = null,
            delete this._loadFeedback)
        }
        ;
        document.addEventListener ? (document.addEventListener("DOMContentLoaded", h, !1),
        document.addEventListener("message", l, !1),
        window.addEventListener("load", h, !1),
        window.addEventListener("message", l, !1)) : document.attachEvent ? (document.attachEvent("onreadystatechange", h),
        document.attachEvent("onmessage", l),
        window.attachEvent("onload", h),
        window.attachEvent("onmessage", l)) : (window.onload = h,
        window.onmessage = l);
        (gt() || k) && ni();
        tableau._createNewVizesAndStartLoading = h
    }());
    document.readyState === "complete" && tableau._createNewVizesAndStartLoading()
}();
