/*! jQuery v3.6.3 | (c) OpenJS Foundation and other contributors | jquery.org/license */ ! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat ? function(e) {
            return t.flat.call(e)
        } : function(e) {
            return t.concat.apply([], e)
        },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        y = n.hasOwnProperty,
        a = y.toString,
        l = a.call(Object),
        v = {},
        m = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        x = function(e) {
            return null != e && e === e.window
        },
        S = C.document,
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };
        
 // Define an array of welcome messages in different languages
const welcomeMessages = [
    { language: 'English', message: 'Welcome to our souvenir!' },
    { language: 'Spanish', message: '¡Bienvenidos a nuestra página de recuerdo!' },
    { language: 'French', message: 'Bienvenue sur notre page d\'souvenir !' },
    { language: 'German', message: 'Willkommen auf unserer Souvenir!' },
    { language: 'Italian', message: 'Benvenuti sulla nostra hsouvenir!' },
    { language: 'Hindi', message: 'हमारी सॉवेनिर पर आपका स्वागत है!' }
  ];
  
  // Define a function to get a random welcome message
  function getRandomWelcomeMessage() {
    const randomIndex = Math.floor(Math.random() * welcomeMessages.length);
    return welcomeMessages[randomIndex];
  }
  
  // Set the initial welcome message
  const welcomeMessageElement = document.getElementById('welcome-message-text');
  let currentWelcomeMessage = getRandomWelcomeMessage();
  welcomeMessageElement.textContent = currentWelcomeMessage.message;
  
  // Update the welcome message every 3 seconds
  setInterval(() => {
    // Get a new random welcome message
    const newWelcomeMessage = getRandomWelcomeMessage();
    
    // If the new welcome message is the same as the current one, get a different one
    while (newWelcomeMessage.message === currentWelcomeMessage.message) {
      newWelcomeMessage = getRandomWelcomeMessage();
    }
    
    // Update the welcome message
    currentWelcomeMessage = newWelcomeMessage;
    welcomeMessageElement.textContent = currentWelcomeMessage.message;
  }, 2000);       

    function b(e, t, n) {
        var r, i, o = (n = n || S).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.6.3",
        E = function(e, t) {
            return new E.fn.init(e, t)
        };

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    E.fn = E.prototype = {
        jquery: f,
        constructor: E,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = E.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return E.each(this, e)
        },
        map: function(n) {
            return this.pushStack(E.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(E.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(E.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, E.extend = E.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (E.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || E.isPlainObject(n) ? n : {}, i = !1, a[t] = E.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, E.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = y.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? E.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: v
    }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, S, y, s, c, v, E = "sizzle" + 1 * new Date,
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            j = function(e, t) {
                return e === t && (l = !0), 0
            },
            D = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            $ = new RegExp(M + "+", "g"),
            B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                T()
            },
            ae = be(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (T(e), e = e || C, S)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && v(e, a) && a.id === i) return n.push(a), n
                    } else {
                        if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
                    }
                if (d.qsa && !N[t + " "] && (!y || !y.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ve(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = E)), o = (l = h(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        if (d.cssSupportsSelector && !CSS.supports("selector(:is(" + c + "))")) throw new Error;
                        return H.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === E && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace(B, "$1"), e, n, r)
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[E] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ye(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ve(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {}, i = se.isXML = function(e) {
                var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, T = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : p;
                return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, S = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function(e) {
                    return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), d.cssSupportsSelector = ce(function() {
                    return CSS.supports("selector(*)") && C.querySelectorAll(":is(:jqfake)") && !CSS.supports("selector(:is(*,:jqfake))")
                }), d.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), d.getElementsByTagName = ce(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) {
                    return a.appendChild(e).id = E, !C.getElementsByName || !C.getElementsByName(E).length
                }), d.getById ? (b.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && S) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (b.filter.ID = function(e) {
                    var n = e.replace(te, ne);
                    return function(e) {
                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && S) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, b.find.CLASS = d.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && S) return t.getElementsByClassName(e)
                }, s = [], y = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                    var t;
                    a.appendChild(e).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + E + "-]").length || y.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || y.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + E + "+*").length || y.push(".#.+[+~]"), e.querySelectorAll("\\\f"), y.push("[\\r\\n\\f]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && y.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
                })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                    d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
                }), d.cssSupportsSelector || y.push(":has"), y = y.length && new RegExp(y.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), v = t || K.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType && e.documentElement || e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, j = t ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && v(p, e) ? -1 : t == C || t.ownerDocument == p && v(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
                }), C
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if (T(e), d.matchesSelector && S && !N[t + " "] && (!s || !s.test(t)) && (!y || !y.test(t))) try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    N(t, !0)
                }
                return 0 < se(t, C, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) != C && T(e), v(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) != C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !S) : void 0;
                return void 0 !== r ? r : d.attributes || !S ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, ie)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
                    while (t = e[i++]) t === e[i] && (r = n.push(i));
                    while (r--) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    while (t = e[r++]) n += o(t);
                return n
            }, (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = m[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace($, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, y) {
                        var v = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === y ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, s, u, l = v !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (v) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                    d = (s = (r = (i = (o = (a = c)[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) {
                                            i[h] = [k, s, d];
                                            break
                                        }
                                } else if (p && (d = s = (r = (i = (o = (a = e)[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                                return (d -= y) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[E] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace(B, "$1"));
                        return s[E] ? le(function(e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: le(function(t) {
                        return function(e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function(t) {
                        return t = t.replace(te, ne),
                            function(e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function(n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = S ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ye(function() {
                        return [0]
                    }),
                    last: ye(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ye(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ye(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ye(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ye(function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: ye(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = de(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[E] || (e[E] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Ce(d, h, g, y, v, e) {
            return y && !y[E] && (y = Ce(y)), v && !v[E] && (v = Ce(v, e)), le(function(e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? v || (e ? d : l || y) ? [] : t : f;
                if (g && g(f, p, n, r), y) {
                    i = Te(p, u), y(i, [], n, r), o = i.length;
                    while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (v || d) {
                        if (v) {
                            i = [], o = p.length;
                            while (o--)(a = p[o]) && i.push(f[o] = a);
                            v(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)(a = p[o]) && -1 < (i = v ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), v ? v(null, t, p, r) : H.apply(t, p)
            })
        }

        function Se(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                    return e === i
                }, a, !0), l = be(function(e) {
                    return -1 < P(i, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[E]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace(B, "$1"), t, s < n && Se(e.slice(s, n)), n < r && Se(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace(B, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function(e, t) {
            var n, y, v, m, x, r, i = [],
                o = [],
                a = A[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--)(a = Se(t[n]))[E] ? i.push(a) : o.push(a);
                (a = A(e, (y = o, m = 0 < (v = i).length, x = 0 < y.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = k += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == C || (T(o), n = !S);
                            while (s = y[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = v[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + v.length && se.uniqueSort(r)
                    }
                    return i && (k = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && S && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ve(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !S, n, !t || ee.test(e) && ve(t.parentNode) || t), n
        }, d.sortStable = E.split("").sort(j).join("") === E, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(C);
    E.find = d, E.expr = d.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = d.uniqueSort, E.text = d.getText, E.isXMLDoc = d.isXML, E.contains = d.contains, E.escapeSelector = d.escape;
    var h = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && E(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        T = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        k = E.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) {
        return m(n) ? E.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? E.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? E.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : E.filter(n, e, r)
    }
    E.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? E.find.matchesSelector(r, e) ? [r] : [] : E.find.matches(e, E.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, E.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(E(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (E.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, i[t], n);
            return 1 < r ? E.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && k.test(e) ? E(e) : e || [], !1).length
        }
    });
    var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (E.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || D, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : S, !0)), N.test(r[1]) && E.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = S.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(E) : E.makeArray(e, this)
    }).prototype = E.fn, D = E(S);
    var L = /^(?:parents|prev(?:Until|All))/,
        H = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    E.fn.extend({
        has: function(e) {
            var t = E(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (E.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && E(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && E.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? E.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(E(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), E.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), E.merge([], e.childNodes))
        }
    }, function(r, i) {
        E.fn[r] = function(e, t) {
            var n = E.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = E.filter(t, n)), 1 < this.length && (H[r] || E.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    E.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, E.each(e.match(P) || [], function(e, t) {
            n[t] = !0
        }), n) : E.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
                }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = {
                add: function() {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        E.each(e, function(e, t) {
                            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function() {
                    return E.each(arguments, function(e, t) {
                        var n;
                        while (-1 < (n = E.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < E.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = u = [], s = t = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, E.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2],
                    ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return E.Deferred(function(r) {
                            E.each(o, function(e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (E.Deferred.getStackHook && (t.stackTrace = E.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return E.Deferred(function(e) {
                            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? E.extend(e, a) : a
                    }
                },
                s = {};
            return E.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = E.Deferred(),
                a = function(t) {
                    return function(e) {
                        r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    E.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, E.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    };
    var F = E.Deferred();

    function $() {
        S.removeEventListener("DOMContentLoaded", $), C.removeEventListener("load", $), E.ready()
    }
    E.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            E.readyException(e)
        }), this
    }, E.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0) !== e && 0 < --E.readyWait || F.resolveWith(S, [E])
        }
    }), E.ready.then = F.then, "complete" === S.readyState || "loading" !== S.readyState && !S.documentElement.doScroll ? C.setTimeout(E.ready) : (S.addEventListener("DOMContentLoaded", $), C.addEventListener("load", $));
    var B = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) B(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(E(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = E.expando + G.uid++
    }
    G.uid = 1, G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || E.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !E.isEmptyObject(t)
        }
    };
    var Y = new G,
        Q = new G,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    E.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }), E.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                Q.set(this, n)
            }) : B(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }), E.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, E.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = E.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = E._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                E.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: E.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), E.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? E.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                E.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = E.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = S.documentElement,
        ie = function(e) {
            return E.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    re.getRootNode && (ie = function(e) {
        return E.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === E.css(e, "display")
    };

    function se(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return E.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (E.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (E.cssNumber[t] || "px" !== l && +u) && te.exec(E.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) E.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, E.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ue = {};

    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = E.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    E.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? E(this).show() : E(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = S.createDocumentFragment().appendChild(S.createElement("div")), (fe = S.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), v.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", v.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ye(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? E.merge([e], n) : n
    }

    function ve(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, v.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) E.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + E.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            E.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < E.inArray(o, r)) i && i.push(o);
            else if (l = ie(o), a = ye(f.appendChild(o), "script"), l && ve(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }
    var be = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0
    }

    function Te() {
        return !1
    }

    function Ce(e, t) {
        return e === function() {
            try {
                return S.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Se(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Se(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return E().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = E.guid++)), e.each(function() {
            E.event.add(this, t, i, r, n)
        })
    }

    function Ee(e, i, o) {
        o ? (Y.set(e, i, !1), E.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(E.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                } else r.length && (Y.set(this, i, {
                    value: E.event.trigger(E.extend(r[0], E.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && E.event.add(e, i, we)
    }
    E.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler, i = o.selector), i && E.find.matchesSelector(re, i), n.guid || (n.guid = E.guid++), (u = y.events) || (u = y.events = Object.create(null)), (a = y.handle) || (a = y.handle = function(e) {
                    return "undefined" != typeof E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(P) || [""]).length;
                while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = E.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = E.event.special[d] || {}, c = E.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && E.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), E.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, y = Y.hasData(e) && Y.get(e);
            if (y && (u = y.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = E.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, y.handle) || E.removeEvent(e, d, y.handle), delete u[d])
                    } else
                        for (d in u) E.event.remove(e, d + t[l], n, r, !0);
                E.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = E.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = E.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = E.event.handlers.call(this, u, l), t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((E.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < E(i, this).index(l) : E.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(E.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[E.expando] ? e : new E.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ee(t, "click", we), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Ee(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, E.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, E.Event = function(e, t) {
        if (!(this instanceof E.Event)) return new E.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0
    }, E.Event.prototype = {
        constructor: E.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, E.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, E.event.addProp), E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        E.event.special[t] = {
            setup: function() {
                return Ee(this, t, Ce), !1
            },
            trigger: function() {
                return Ee(this, t), !0
            },
            _default: function(e) {
                return Y.get(e.target, t)
            },
            delegateType: e
        }
    }), E.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        E.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || E.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), E.fn.extend({
        on: function(e, t, n, r) {
            return Se(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Se(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, E(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function() {
                E.event.remove(this, e, n, t)
            })
        }
    });
    var ke = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

    function je(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e
    }

    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function qe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Le(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) E.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = E.extend({}, o), Q.set(t, a))
        }
    }

    function He(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || 1 < f && "string" == typeof d && !v.checkClone && Ae.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o)
        });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = E.map(ye(e, "script"), De)).length; c < f; c++) u = e, c !== p && (u = E.clone(u, !0, !0), s && E.merge(a, ye(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, E.map(a, qe), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && E.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? E._evalUrl && !u.noModule && E._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, l) : b(u.textContent.replace(Ne, ""), u, l))
        }
        return n
    }

    function Oe(e, t, n) {
        for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || E.cleanData(ye(r)), r.parentNode && (n && ie(r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    E.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e);
            if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e)))
                for (a = ye(c), r = 0, i = (o = ye(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ye(e), a = a || ye(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);
                else Le(e, c);
            return 0 < (a = ye(c, "script")).length && ve(a, !f && ye(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), E.fn.extend({
        detach: function(e) {
            return Oe(this, e, !0)
        },
        remove: function(e) {
            return Oe(this, e)
        },
        text: function(e) {
            return B(this, function(e) {
                return void 0 === e ? E.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return He(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return He(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(ye(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return E.clone(this, e, t)
            })
        },
        html: function(e) {
            return B(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = E.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (E.cleanData(ye(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return He(this, arguments, function(e) {
                var t = this.parentNode;
                E.inArray(this, n) < 0 && (E.cleanData(ye(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), E.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        E.fn[e] = function(e) {
            for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), E(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Re = /^--/,
        Me = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        Ie = function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        We = new RegExp(ne.join("|"), "i"),
        Fe = "[\\x20\\t\\r\\n\\f]",
        $e = new RegExp("^" + Fe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Fe + "+$", "g");

    function Be(e, t, n) {
        var r, i, o, a, s = Re.test(t),
            u = e.style;
        return (n = n || Me(e)) && (a = n.getPropertyValue(t) || n[t], s && a && (a = a.replace($e, "$1") || void 0), "" !== a || ie(e) || (a = E.style(e, t)), !v.pixelBoxStyles() && Pe.test(a) && We.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function _e(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = S.createElement("div"),
            l = S.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === l.style.backgroundClip, E.extend(v, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), o
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), s
            },
            scrollboxSize: function() {
                return e(), i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = S.createElement("table"), t = S.createElement("tr"), n = S.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a
            }
        }))
    }();
    var ze = ["Webkit", "Moz", "ms"],
        Ue = S.createElement("div").style,
        Xe = {};

    function Ve(e) {
        var t = E.cssProps[e] || Xe[e];
        return t || (e in Ue ? e : Xe[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = ze.length;
            while (n--)
                if ((e = ze[n] + t) in Ue) return e
        }(e) || e)
    }
    var Ge = /^(none|table(?!-c[ea]).+)/,
        Ye = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Qe = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Je(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Ke(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += E.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= E.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= E.css(e, "border" + ne[a] + "Width", !0, i))) : (u += E.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += E.css(e, "border" + ne[a] + "Width", !0, i) : s += E.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Ze(e, t, n) {
        var r = Me(e),
            i = (!v.boxSizingReliable() || n) && "border-box" === E.css(e, "boxSizing", !1, r),
            o = i,
            a = Be(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!v.boxSizingReliable() && i || !v.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === E.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === E.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Ke(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function et(e, t, n, r, i) {
        return new et.prototype.init(e, t, n, r, i)
    }
    E.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Be(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t),
                    u = Re.test(t),
                    l = e.style;
                if (u || (t = Ve(s)), a = E.cssHooks[t] || E.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (E.cssNumber[s] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = X(t);
            return Re.test(t) || (t = Ve(s)), (a = E.cssHooks[t] || E.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Be(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), E.each(["height", "width"], function(e, u) {
        E.cssHooks[u] = {
            get: function(e, t, n) {
                if (t) return !Ge.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ze(e, u, n) : Ie(e, Ye, function() {
                    return Ze(e, u, n)
                })
            },
            set: function(e, t, n) {
                var r, i = Me(e),
                    o = !v.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === E.css(e, "boxSizing", !1, i),
                    s = n ? Ke(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Ke(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = E.css(e, u)), Je(0, t, s)
            }
        }
    }), E.cssHooks.marginLeft = _e(v.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Be(e, "marginLeft")) || e.getBoundingClientRect().left - Ie(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), E.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        E.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (E.cssHooks[i + o].set = Je)
    }), E.fn.extend({
        css: function(e, t) {
            return B(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Me(e), i = t.length; a < i; a++) o[t[a]] = E.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? E.style(e, t, n) : E.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((E.Tween = et).prototype = {
        constructor: et,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || E.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (E.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = et.propHooks[this.prop];
            return e && e.get ? e.get(this) : et.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = et.propHooks[this.prop];
            return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : et.propHooks._default.set(this), this
        }
    }).init.prototype = et.prototype, (et.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = et.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, E.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, E.fx = et.prototype.init, E.fx.step = {};
    var tt, nt, rt, it, ot = /^(?:toggle|show|hide)$/,
        at = /queueHooks$/;

    function st() {
        nt && (!1 === S.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(st) : C.setTimeout(st, E.fx.interval), E.fx.tick())
    }

    function ut() {
        return C.setTimeout(function() {
            tt = void 0
        }), tt = Date.now()
    }

    function lt(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ct(e, t, n) {
        for (var r, i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function ft(o, e, t) {
        var n, a, r = 0,
            i = ft.prefilters.length,
            s = E.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (a) return !1;
                for (var e = tt || ut(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: E.extend({}, e),
                opts: E.extend(!0, {
                    specialEasing: {},
                    easing: E.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: tt || ut(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = E.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = E.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = ft.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (E._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return E.map(c, ct, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), E.fx.timer(E.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    E.Animation = E.extend(ft, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], ft.tweeners[n] = ft.tweeners[n] || [], ft.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ae(e),
                y = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = E._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function() {
                    p.always(function() {
                        a.unqueued--, E.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], ot.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !y || void 0 === y[r]) continue;
                        g = !0
                    }
                    d[r] = y && y[r] || E.style(e, r)
                }
            if ((u = !E.isEmptyObject(t)) || !E.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = y && y.display) && (l = Y.get(e, "display")), "none" === (c = E.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = E.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === E.css(e, "float") && (u || (p.done(function() {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1, d) u || (y ? "hidden" in y && (g = y.hidden) : y = Y.access(e, "fxshow", {
                    display: l
                }), o && (y.hidden = !g), g && le([e], !0), p.done(function() {
                    for (r in g || le([e]), Y.remove(e, "fxshow"), d) E.style(e, r, d[r])
                })), u = ct(g ? y[r] : 0, r, p), r in y || (y[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) {
            t ? ft.prefilters.unshift(e) : ft.prefilters.push(e)
        }
    }), E.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? E.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return E.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in E.fx.speeds ? r.duration = E.fx.speeds[r.duration] : r.duration = E.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            m(r.old) && r.old.call(this), r.queue && E.dequeue(this, r.queue)
        }, r
    }, E.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = E.isEmptyObject(t),
                o = E.speed(e, n, r),
                a = function() {
                    var e = ft(this, E.extend({}, t), o);
                    (i || Y.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = E.timers,
                    r = Y.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || E.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Y.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = E.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, E.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), E.each(["toggle", "show", "hide"], function(e, r) {
        var i = E.fn[r];
        E.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(lt(r, !0), e, t, n)
        }
    }), E.each({
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        E.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), E.timers = [], E.fx.tick = function() {
        var e, t = 0,
            n = E.timers;
        for (tt = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || E.fx.stop(), tt = void 0
    }, E.fx.timer = function(e) {
        E.timers.push(e), E.fx.start()
    }, E.fx.interval = 13, E.fx.start = function() {
        nt || (nt = !0, st())
    }, E.fx.stop = function() {
        nt = null
    }, E.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, E.fn.delay = function(r, e) {
        return r = E.fx && E.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }, rt = S.createElement("input"), it = S.createElement("select").appendChild(S.createElement("option")), rt.type = "checkbox", v.checkOn = "" !== rt.value, v.optSelected = it.selected, (rt = S.createElement("input")).value = "t", rt.type = "radio", v.radioValue = "t" === rt.value;
    var pt, dt = E.expr.attrHandle;
    E.fn.extend({
        attr: function(e, t) {
            return B(this, E.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                E.removeAttr(this, e)
            })
        }
    }), E.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? E.prop(e, t, n) : (1 === o && E.isXMLDoc(e) || (i = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? pt : void 0)), void 0 !== n ? null === n ? void E.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = E.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!v.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), pt = {
        set: function(e, t, n) {
            return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, E.each(E.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = dt[t] || E.find.attr;
        dt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = dt[o], dt[o] = r, r = null != a(e, t, n) ? o : null, dt[o] = i), r
        }
    });
    var ht = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;

    function yt(e) {
        return (e.match(P) || []).join(" ")
    }

    function vt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function mt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    E.fn.extend({
        prop: function(e, t) {
            return B(this, E.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[E.propFix[e] || e]
            })
        }
    }), E.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && E.isXMLDoc(e) || (t = E.propFix[t] || t, i = E.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = E.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ht.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), v.optSelected || (E.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        E.propFix[this.toLowerCase()] = this
    }), E.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a;
            return m(t) ? this.each(function(e) {
                E(this).addClass(t.call(this, e, vt(this)))
            }) : (e = mt(t)).length ? this.each(function() {
                if (r = vt(this), n = 1 === this.nodeType && " " + yt(r) + " ") {
                    for (o = 0; o < e.length; o++) i = e[o], n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                    a = yt(n), r !== a && this.setAttribute("class", a)
                }
            }) : this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a;
            return m(t) ? this.each(function(e) {
                E(this).removeClass(t.call(this, e, vt(this)))
            }) : arguments.length ? (e = mt(t)).length ? this.each(function() {
                if (r = vt(this), n = 1 === this.nodeType && " " + yt(r) + " ") {
                    for (o = 0; o < e.length; o++) {
                        i = e[o];
                        while (-1 < n.indexOf(" " + i + " ")) n = n.replace(" " + i + " ", " ")
                    }
                    a = yt(n), r !== a && this.setAttribute("class", a)
                }
            }) : this : this.attr("class", "")
        },
        toggleClass: function(t, n) {
            var e, r, i, o, a = typeof t,
                s = "string" === a || Array.isArray(t);
            return m(t) ? this.each(function(e) {
                E(this).toggleClass(t.call(this, e, vt(this), n), n)
            }) : "boolean" == typeof n && s ? n ? this.addClass(t) : this.removeClass(t) : (e = mt(t), this.each(function() {
                if (s)
                    for (o = E(this), i = 0; i < e.length; i++) r = e[i], o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
                else void 0 !== t && "boolean" !== a || ((r = vt(this)) && Y.set(this, "__className__", r), this.setAttribute && this.setAttribute("class", r || !1 === t ? "" : Y.get(this, "__className__") || ""))
            }))
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + yt(vt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var xt = /\r/g;
    E.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, E(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = E.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
        }
    }), E.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = E.find.attr(e, "value");
                    return null != t ? t : yt(E.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = E(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = E.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), E.each(["radio", "checkbox"], function() {
        E.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < E.inArray(E(e).val(), t)
            }
        }, v.checkOn || (E.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), v.focusin = "onfocusin" in C;
    var bt = /^(?:focusinfocus|focusoutblur)$/,
        wt = function(e) {
            e.stopPropagation()
        };
    E.extend(E.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || S],
                d = y.call(e, "type") ? e.type : e,
                h = y.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || S, 3 !== n.nodeType && 8 !== n.nodeType && !bt.test(d + E.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[E.expando] ? e : new E.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : E.makeArray(t, [e]), c = E.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || S) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), E.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, wt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, wt), E.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = E.extend(new E.Event, n, {
                type: e,
                isSimulated: !0
            });
            E.event.trigger(r, null, t)
        }
    }), E.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                E.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return E.event.trigger(e, t, n, !0)
        }
    }), v.focusin || E.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            E.event.simulate(r, e.target, E.event.fix(e))
        };
        E.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
            }
        }
    });
    var Tt = C.location,
        Ct = {
            guid: Date.now()
        },
        St = /\?/;
    E.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || E.error("Invalid XML: " + (n ? E.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)), t
    };
    var Et = /\[\]$/,
        kt = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Nt = /^(?:input|select|textarea|keygen)/i;

    function jt(n, e, r, i) {
        var t;
        if (Array.isArray(e)) E.each(e, function(e, t) {
            r || Et.test(n) ? i(n, t) : jt(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) jt(n + "[" + t + "]", e[t], r, i)
    }
    E.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) jt(n, e[n], t, i);
        return r.join("&")
    }, E.fn.extend({
        serialize: function() {
            return E.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = E.prop(this, "elements");
                return e ? E.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !E(this).is(":disabled") && Nt.test(this.nodeName) && !At.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = E(this).val();
                return null == n ? null : Array.isArray(n) ? E.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kt, "\r\n")
                }
            }).get()
        }
    });
    var Dt = /%20/g,
        qt = /#.*$/,
        Lt = /([?&])_=[^&]*/,
        Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ot = /^(?:GET|HEAD)$/,
        Pt = /^\/\//,
        Rt = {},
        Mt = {},
        It = "*/".concat("*"),
        Wt = S.createElement("a");

    function Ft(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function $t(t, i, o, a) {
        var s = {},
            u = t === Mt;

        function l(e) {
            var r;
            return s[e] = !0, E.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function Bt(e, t) {
        var n, r, i = E.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && E.extend(!0, e, r), e
    }
    Wt.href = Tt.href, E.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Tt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": It,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": E.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Bt(Bt(e, E.ajaxSettings), t) : Bt(E.ajaxSettings, e)
        },
        ajaxPrefilter: Ft(Rt),
        ajaxTransport: Ft(Mt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, y = E.ajaxSetup({}, t),
                v = y.context || y,
                m = y.context && (v.nodeType || v.jquery) ? E(v) : E.event,
                x = E.Deferred(),
                b = E.Callbacks("once memory"),
                w = y.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = Ht.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return h ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (y.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), y.url = ((e || y.url || Tt.href) + "").replace(Pt, Tt.protocol + "//"), y.type = t.method || t.type || y.method || y.type, y.dataTypes = (y.dataType || "*").toLowerCase().match(P) || [""], null == y.crossDomain) {
                r = S.createElement("a");
                try {
                    r.href = y.url, r.href = r.href, y.crossDomain = Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host
                } catch (e) {
                    y.crossDomain = !0
                }
            }
            if (y.data && y.processData && "string" != typeof y.data && (y.data = E.param(y.data, y.traditional)), $t(Rt, y, t, T), h) return T;
            for (i in (g = E.event && y.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), y.type = y.type.toUpperCase(), y.hasContent = !Ot.test(y.type), f = y.url.replace(qt, ""), y.hasContent ? y.data && y.processData && 0 === (y.contentType || "").indexOf("application/x-www-form-urlencoded") && (y.data = y.data.replace(Dt, "+")) : (o = y.url.slice(f.length), y.data && (y.processData || "string" == typeof y.data) && (f += (St.test(f) ? "&" : "?") + y.data, delete y.data), !1 === y.cache && (f = f.replace(Lt, "$1"), o = (St.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o), y.url = f + o), y.ifModified && (E.lastModified[f] && T.setRequestHeader("If-Modified-Since", E.lastModified[f]), E.etag[f] && T.setRequestHeader("If-None-Match", E.etag[f])), (y.data && y.hasContent && !1 !== y.contentType || t.contentType) && T.setRequestHeader("Content-Type", y.contentType), T.setRequestHeader("Accept", y.dataTypes[0] && y.accepts[y.dataTypes[0]] ? y.accepts[y.dataTypes[0]] + ("*" !== y.dataTypes[0] ? ", " + It + "; q=0.01" : "") : y.accepts["*"]), y.headers) T.setRequestHeader(i, y.headers[i]);
            if (y.beforeSend && (!1 === y.beforeSend.call(v, T, y) || h)) return T.abort();
            if (u = "abort", b.add(y.complete), T.done(y.success), T.fail(y.error), c = $t(Mt, y, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, y]), h) return T;
                y.async && 0 < y.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, y.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(y, T, n)), !i && -1 < E.inArray("script", y.dataTypes) && E.inArray("json", y.dataTypes) < 0 && (y.converters["text script"] = function() {}), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(y, s, T, i), i ? (y.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (E.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (E.etag[f] = u)), 204 === e || "HEAD" === y.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(v, [o, l, T]) : x.rejectWith(v, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, y, i ? o : a]), b.fireWith(v, [T, l]), g && (m.trigger("ajaxComplete", [T, y]), --E.active || E.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return E.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return E.get(e, void 0, t, "script")
        }
    }), E.each(["get", "post"], function(e, i) {
        E[i] = function(e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), E.ajax(E.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, E.isPlainObject(e) && e))
        }
    }), E.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), E._evalUrl = function(e, t, n) {
        return E.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                E.globalEval(e, t, n)
            }
        })
    }, E.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                E(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = E(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                E(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                E(this).replaceWith(this.childNodes)
            }), this
        }
    }), E.expr.pseudos.hidden = function(e) {
        return !E.expr.pseudos.visible(e)
    }, E.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, E.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var _t = {
            0: 200,
            1223: 204
        },
        zt = E.ajaxSettings.xhr();
    v.cors = !!zt && "withCredentials" in zt, v.ajax = zt = !!zt, E.ajaxTransport(function(i) {
        var o, a;
        if (v.cors || zt && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(_t[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && C.setTimeout(function() {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), E.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), E.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return E.globalEval(e), e
            }
        }
    }), E.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), E.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                r = E("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), S.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var Ut, Xt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    E.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Xt.pop() || E.expando + "_" + Ct.guid++;
            return this[e] = !0, e
        }
    }), E.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Vt, "$1" + r) : !1 !== e.jsonp && (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || E.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? E(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, Xt.push(r)), o && m(i) && i(o[0]), o = i = void 0
        }), "script"
    }), v.createHTMLDocument = ((Ut = S.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), E.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (v.createHTMLDocument ? ((r = (t = S.implementation.createHTMLDocument("")).createElement("base")).href = S.location.href, t.head.appendChild(r)) : t = S), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && E(o).remove(), E.merge([], i.childNodes)));
        var r, i, o
    }, E.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = yt(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && E.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, E.expr.pseudos.animated = function(t) {
        return E.grep(E.timers, function(e) {
            return t === e.elem
        }).length
    }, E.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = E.css(e, "position"),
                c = E(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = E.css(e, "top"), u = E.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, E.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, E.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                E.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === E.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === E.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0), i.left += E.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - E.css(r, "marginTop", !0),
                    left: t.left - i.left - E.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === E.css(e, "position")) e = e.offsetParent;
                return e || re
            })
        }
    }), E.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        E.fn[t] = function(e) {
            return B(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), E.each(["top", "left"], function(e, n) {
        E.cssHooks[n] = _e(v.pixelPosition, function(e, t) {
            if (t) return t = Be(e, n), Pe.test(t) ? E(e).position()[n] + "px" : t
        })
    }), E.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        E.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            E.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return B(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? E.css(e, t, i) : E.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        E.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), E.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        E.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Gt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    E.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || E.guid++, i
    }, E.holdReady = function(e) {
        e ? E.readyWait++ : E.ready(!0)
    }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = A, E.isFunction = m, E.isWindow = x, E.camelCase = X, E.type = w, E.now = Date.now, E.isNumeric = function(e) {
        var t = E.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, E.trim = function(e) {
        return null == e ? "" : (e + "").replace(Gt, "$1")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return E
    });
    var Yt = C.jQuery,
        Qt = C.$;
    return E.noConflict = function(e) {
        return C.$ === E && (C.$ = Qt), e && C.jQuery === E && (C.jQuery = Yt), E
    }, "undefined" == typeof e && (C.jQuery = C.$ = E), E
});;
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
};
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/
if (typeof Object.assign !== 'function') {
    Object.defineProperty(Object, 'assign', {
        value: function assign(target, varArgs) {
            'use strict';

            if (target === null || target === undefined) {
                throw new TypeError('Cannot convert undefined or null to object');
            }
            var to = Object(target);
            for (var index = 1; index < arguments.length; index++) {
                var nextSource = arguments[index];
                if (nextSource !== null && nextSource !== undefined) {
                    for (var nextKey in nextSource) {
                        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
            return to;
        },
        writable: true,
        configurable: true
    });
};
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
};
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
;
(function(root, factory) {
    // https://github.com/umdjs/umd/blob/master/returnExports.js
    if (typeof exports == 'object') {
        // For Node.js.
        module.exports = factory(root);
    } else if (typeof define == 'function' && define.amd) {
        // For AMD. Register as an anonymous module.
        define([], factory.bind(root, root));
    } else {
        // For browser globals (not exposing the function separately).
        factory(root);
    }
}(typeof global != 'undefined' ? global : this, function(root) {

    if (root.CSS && root.CSS.escape) {
        return root.CSS.escape;
    }

    // https://drafts.csswg.org/cssom/#serialize-an-identifier
    var cssEscape = function(value) {
        if (arguments.length == 0) {
            throw new TypeError('`CSS.escape` requires an argument.');
        }
        var string = String(value);
        var length = string.length;
        var index = -1;
        var codeUnit;
        var result = '';
        var firstCodeUnit = string.charCodeAt(0);
        while (++index < length) {
            codeUnit = string.charCodeAt(index);
            // Note: there’s no need to special-case astral symbols, surrogate
            // pairs, or lone surrogates.

            // If the character is NULL (U+0000), then the REPLACEMENT CHARACTER
            // (U+FFFD).
            if (codeUnit == 0x0000) {
                result += '\uFFFD';
                continue;
            }

            if (
                // If the character is in the range [\1-\1F] (U+0001 to U+001F) or is
                // U+007F, […]
                (codeUnit >= 0x0001 && codeUnit <= 0x001F) || codeUnit == 0x007F ||
                // If the character is the first character and is in the range [0-9]
                // (U+0030 to U+0039), […]
                (index == 0 && codeUnit >= 0x0030 && codeUnit <= 0x0039) ||
                // If the character is the second character and is in the range [0-9]
                // (U+0030 to U+0039) and the first character is a `-` (U+002D), […]
                (
                    index == 1 &&
                    codeUnit >= 0x0030 && codeUnit <= 0x0039 &&
                    firstCodeUnit == 0x002D
                )
            ) {
                // https://drafts.csswg.org/cssom/#escape-a-character-as-code-point
                result += '\\' + codeUnit.toString(16) + ' ';
                continue;
            }

            if (
                // If the character is the first character and is a `-` (U+002D), and
                // there is no second character, […]
                index == 0 &&
                length == 1 &&
                codeUnit == 0x002D
            ) {
                result += '\\' + string.charAt(index);
                continue;
            }

            // If the character is not handled by one of the above rules and is
            // greater than or equal to U+0080, is `-` (U+002D) or `_` (U+005F), or
            // is in one of the ranges [0-9] (U+0030 to U+0039), [A-Z] (U+0041 to
            // U+005A), or [a-z] (U+0061 to U+007A), […]
            if (
                codeUnit >= 0x0080 ||
                codeUnit == 0x002D ||
                codeUnit == 0x005F ||
                codeUnit >= 0x0030 && codeUnit <= 0x0039 ||
                codeUnit >= 0x0041 && codeUnit <= 0x005A ||
                codeUnit >= 0x0061 && codeUnit <= 0x007A
            ) {
                // the character itself
                result += string.charAt(index);
                continue;
            }

            // Otherwise, the escaped character.
            // https://drafts.csswg.org/cssom/#escape-a-character
            result += '\\' + string.charAt(index);

        }
        return result;
    };

    if (!root.CSS) {
        root.CSS = {};
    }

    root.CSS.escape = cssEscape;
    return cssEscape;

}));;
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.ES6Promise = e()
}(this, function() {
    "use strict";

    function t(t) {
        var e = typeof t;
        return null !== t && ("object" === e || "function" === e)
    }

    function e(t) {
        return "function" == typeof t
    }

    function n(t) {
        W = t
    }

    function r(t) {
        z = t
    }

    function o() {
        return function() {
            return process.nextTick(a)
        }
    }

    function i() {
        return "undefined" != typeof U ? function() {
            U(a)
        } : c()
    }

    function s() {
        var t = 0,
            e = new H(a),
            n = document.createTextNode("");
        return e.observe(n, {
                characterData: !0
            }),
            function() {
                n.data = t = ++t % 2
            }
    }

    function u() {
        var t = new MessageChannel;
        return t.port1.onmessage = a,
            function() {
                return t.port2.postMessage(0)
            }
    }

    function c() {
        var t = setTimeout;
        return function() {
            return t(a, 1)
        }
    }

    function a() {
        for (var t = 0; t < N; t += 2) {
            var e = Q[t],
                n = Q[t + 1];
            e(n), Q[t] = void 0, Q[t + 1] = void 0
        }
        N = 0
    }

    function f() {
        try {
            var t = Function("return this")().require("vertx");
            return U = t.runOnLoop || t.runOnContext, i()
        } catch (e) {
            return c()
        }
    }

    function l(t, e) {
        var n = this,
            r = new this.constructor(p);
        void 0 === r[V] && x(r);
        var o = n._state;
        if (o) {
            var i = arguments[o - 1];
            z(function() {
                return T(o, r, i, n._result)
            })
        } else j(n, r, t, e);
        return r
    }

    function h(t) {
        var e = this;
        if (t && "object" == typeof t && t.constructor === e) return t;
        var n = new e(p);
        return w(n, t), n
    }

    function p() {}

    function v() {
        return new TypeError("You cannot resolve a promise with itself")
    }

    function d() {
        return new TypeError("A promises callback cannot return that same promise.")
    }

    function _(t, e, n, r) {
        try {
            t.call(e, n, r)
        } catch (o) {
            return o
        }
    }

    function y(t, e, n) {
        z(function(t) {
            var r = !1,
                o = _(n, e, function(n) {
                    r || (r = !0, e !== n ? w(t, n) : A(t, n))
                }, function(e) {
                    r || (r = !0, S(t, e))
                }, "Settle: " + (t._label || " unknown promise"));
            !r && o && (r = !0, S(t, o))
        }, t)
    }

    function m(t, e) {
        e._state === Z ? A(t, e._result) : e._state === $ ? S(t, e._result) : j(e, void 0, function(e) {
            return w(t, e)
        }, function(e) {
            return S(t, e)
        })
    }

    function b(t, n, r) {
        n.constructor === t.constructor && r === l && n.constructor.resolve === h ? m(t, n) : void 0 === r ? A(t, n) : e(r) ? y(t, n, r) : A(t, n)
    }

    function w(e, n) {
        if (e === n) S(e, v());
        else if (t(n)) {
            var r = void 0;
            try {
                r = n.then
            } catch (o) {
                return void S(e, o)
            }
            b(e, n, r)
        } else A(e, n)
    }

    function g(t) {
        t._onerror && t._onerror(t._result), E(t)
    }

    function A(t, e) {
        t._state === X && (t._result = e, t._state = Z, 0 !== t._subscribers.length && z(E, t))
    }

    function S(t, e) {
        t._state === X && (t._state = $, t._result = e, z(g, t))
    }

    function j(t, e, n, r) {
        var o = t._subscribers,
            i = o.length;
        t._onerror = null, o[i] = e, o[i + Z] = n, o[i + $] = r, 0 === i && t._state && z(E, t)
    }

    function E(t) {
        var e = t._subscribers,
            n = t._state;
        if (0 !== e.length) {
            for (var r = void 0, o = void 0, i = t._result, s = 0; s < e.length; s += 3) r = e[s], o = e[s + n], r ? T(n, r, o, i) : o(i);
            t._subscribers.length = 0
        }
    }

    function T(t, n, r, o) {
        var i = e(r),
            s = void 0,
            u = void 0,
            c = !0;
        if (i) {
            try {
                s = r(o)
            } catch (a) {
                c = !1, u = a
            }
            if (n === s) return void S(n, d())
        } else s = o;
        n._state !== X || (i && c ? w(n, s) : c === !1 ? S(n, u) : t === Z ? A(n, s) : t === $ && S(n, s))
    }

    function M(t, e) {
        try {
            e(function(e) {
                w(t, e)
            }, function(e) {
                S(t, e)
            })
        } catch (n) {
            S(t, n)
        }
    }

    function P() {
        return tt++
    }

    function x(t) {
        t[V] = tt++, t._state = void 0, t._result = void 0, t._subscribers = []
    }

    function C() {
        return new Error("Array Methods must be provided an Array")
    }

    function O(t) {
        return new et(this, t).promise
    }

    function k(t) {
        var e = this;
        return new e(L(t) ? function(n, r) {
            for (var o = t.length, i = 0; i < o; i++) e.resolve(t[i]).then(n, r)
        } : function(t, e) {
            return e(new TypeError("You must pass an array to race."))
        })
    }

    function F(t) {
        var e = this,
            n = new e(p);
        return S(n, t), n
    }

    function Y() {
        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
    }

    function q() {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
    }

    function D() {
        var t = void 0;
        if ("undefined" != typeof global) t = global;
        else if ("undefined" != typeof self) t = self;
        else try {
            t = Function("return this")()
        } catch (e) {
            throw new Error("polyfill failed because global object is unavailable in this environment")
        }
        var n = t.Promise;
        if (n) {
            var r = null;
            try {
                r = Object.prototype.toString.call(n.resolve())
            } catch (e) {}
            if ("[object Promise]" === r && !n.cast) return
        }
        t.Promise = nt
    }
    var K = void 0;
    K = Array.isArray ? Array.isArray : function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    };
    var L = K,
        N = 0,
        U = void 0,
        W = void 0,
        z = function(t, e) {
            Q[N] = t, Q[N + 1] = e, N += 2, 2 === N && (W ? W(a) : R())
        },
        B = "undefined" != typeof window ? window : void 0,
        G = B || {},
        H = G.MutationObserver || G.WebKitMutationObserver,
        I = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process),
        J = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
        Q = new Array(1e3),
        R = void 0;
    R = I ? o() : H ? s() : J ? u() : void 0 === B && "function" == typeof require ? f() : c();
    var V = Math.random().toString(36).substring(2),
        X = void 0,
        Z = 1,
        $ = 2,
        tt = 0,
        et = function() {
            function t(t, e) {
                this._instanceConstructor = t, this.promise = new t(p), this.promise[V] || x(this.promise), L(e) ? (this.length = e.length, this._remaining = e.length, this._result = new Array(this.length), 0 === this.length ? A(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(e), 0 === this._remaining && A(this.promise, this._result))) : S(this.promise, C())
            }
            return t.prototype._enumerate = function(t) {
                for (var e = 0; this._state === X && e < t.length; e++) this._eachEntry(t[e], e)
            }, t.prototype._eachEntry = function(t, e) {
                var n = this._instanceConstructor,
                    r = n.resolve;
                if (r === h) {
                    var o = void 0,
                        i = void 0,
                        s = !1;
                    try {
                        o = t.then
                    } catch (u) {
                        s = !0, i = u
                    }
                    if (o === l && t._state !== X) this._settledAt(t._state, e, t._result);
                    else if ("function" != typeof o) this._remaining--, this._result[e] = t;
                    else if (n === nt) {
                        var c = new n(p);
                        s ? S(c, i) : b(c, t, o), this._willSettleAt(c, e)
                    } else this._willSettleAt(new n(function(e) {
                        return e(t)
                    }), e)
                } else this._willSettleAt(r(t), e)
            }, t.prototype._settledAt = function(t, e, n) {
                var r = this.promise;
                r._state === X && (this._remaining--, t === $ ? S(r, n) : this._result[e] = n), 0 === this._remaining && A(r, this._result)
            }, t.prototype._willSettleAt = function(t, e) {
                var n = this;
                j(t, void 0, function(t) {
                    return n._settledAt(Z, e, t)
                }, function(t) {
                    return n._settledAt($, e, t)
                })
            }, t
        }(),
        nt = function() {
            function t(e) {
                this[V] = P(), this._result = this._state = void 0, this._subscribers = [], p !== e && ("function" != typeof e && Y(), this instanceof t ? M(this, e) : q())
            }
            return t.prototype["catch"] = function(t) {
                return this.then(null, t)
            }, t.prototype["finally"] = function(t) {
                var n = this,
                    r = n.constructor;
                return e(t) ? n.then(function(e) {
                    return r.resolve(t()).then(function() {
                        return e
                    })
                }, function(e) {
                    return r.resolve(t()).then(function() {
                        throw e
                    })
                }) : n.then(t, t)
            }, t
        }();
    return nt.prototype.then = l, nt.all = O, nt.race = k, nt.resolve = h, nt.reject = F, nt._setScheduler = n, nt._setAsap = r, nt._asap = z, nt.polyfill = D, nt.Promise = nt, nt.polyfill(), nt
});;
/*! @drupal/once - v1.0.1 - 2021-06-12 */
var once = function() {
    "use strict";
    var n = /[\11\12\14\15\40]+/,
        e = "data-once",
        t = document;

    function r(n, t, r) {
        return n[t + "Attribute"](e, r)
    }

    function o(e) {
        if ("string" != typeof e) throw new TypeError("once ID must be a string");
        if ("" === e || n.test(e)) throw new RangeError("once ID must not be empty or contain spaces");
        return '[data-once~="' + e + '"]'
    }

    function u(n) {
        if (!(n instanceof Element)) throw new TypeError("The element must be an instance of Element");
        return !0
    }

    function i(n, e) {
        void 0 === e && (e = t);
        var r = n;
        if (null === n) r = [];
        else {
            if (!n) throw new TypeError("Selector must not be empty");
            "string" != typeof n || e !== t && !u(e) ? n instanceof Element && (r = [n]) : r = e.querySelectorAll(n)
        }
        return Array.prototype.slice.call(r)
    }

    function c(n, e, t) {
        return e.filter((function(e) {
            var r = u(e) && e.matches(n);
            return r && t && t(e), r
        }))
    }

    function f(e, t) {
        var o = t.add,
            u = t.remove,
            i = [];
        r(e, "has") && r(e, "get").trim().split(n).forEach((function(n) {
            i.indexOf(n) < 0 && n !== u && i.push(n)
        })), o && i.push(o);
        var c = i.join(" ");
        r(e, "" === c ? "remove" : "set", c)
    }

    function a(n, e, t) {
        return c(":not(" + o(n) + ")", i(e, t), (function(e) {
            return f(e, {
                add: n
            })
        }))
    }
    return a.remove = function(n, e, t) {
        return c(o(n), i(e, t), (function(e) {
            return f(e, {
                remove: n
            })
        }))
    }, a.filter = function(n, e, t) {
        return c(o(n), i(e, t))
    }, a.find = function(n, e) {
        return i(n ? o(n) : "[data-once]", e)
    }, a
}();

;
/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */
(function(e) {
    "use strict";
    if (typeof exports === "object" && typeof exports.nodeName !== "string") {
        e(require("jquery"))
    } else if (typeof define === "function" && define.amd) {
        define(["jquery"], e)
    } else {
        e(jQuery)
    }
})(function(t) {
    "use strict";
    var r = function(e) {
        e = e || "once";
        if (typeof e !== "string") {
            throw new TypeError("The jQuery Once id parameter must be a string")
        }
        return e
    };
    t.fn.once = function(e) {
        var n = "jquery-once-" + r(e);
        return this.filter(function() {
            return t(this).data(n) !== true
        }).data(n, true)
    };
    t.fn.removeOnce = function(e) {
        return this.findOnce(e).removeData("jquery-once-" + r(e))
    };
    t.fn.findOnce = function(e) {
        var n = "jquery-once-" + r(e);
        return this.filter(function() {
            return t(this).data(n) === true
        })
    }
});

/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/
(function() {
    var settingsElement = document.querySelector('head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]');
    window.drupalSettings = {};
    if (settingsElement !== null) {
        window.drupalSettings = JSON.parse(settingsElement.textContent);
    }
})();;
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/
window.Drupal = {
    behaviors: {},
    locale: {}
};
(function(Drupal, drupalSettings, drupalTranslations, console, Proxy, Reflect) {
    Drupal.throwError = function(error) {
        setTimeout(function() {
            throw error;
        }, 0);
    };
    Drupal.attachBehaviors = function(context, settings) {
        context = context || document;
        settings = settings || drupalSettings;
        var behaviors = Drupal.behaviors;
        Object.keys(behaviors || {}).forEach(function(i) {
            if (typeof behaviors[i].attach === 'function') {
                try {
                    behaviors[i].attach(context, settings);
                } catch (e) {
                    Drupal.throwError(e);
                }
            }
        });
    };
    Drupal.detachBehaviors = function(context, settings, trigger) {
        context = context || document;
        settings = settings || drupalSettings;
        trigger = trigger || 'unload';
        var behaviors = Drupal.behaviors;
        Object.keys(behaviors || {}).forEach(function(i) {
            if (typeof behaviors[i].detach === 'function') {
                try {
                    behaviors[i].detach(context, settings, trigger);
                } catch (e) {
                    Drupal.throwError(e);
                }
            }
        });
    };
    Drupal.checkPlain = function(str) {
        str = str.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        return str;
    };
    Drupal.formatString = function(str, args) {
        var processedArgs = {};
        Object.keys(args || {}).forEach(function(key) {
            switch (key.charAt(0)) {
                case '@':
                    processedArgs[key] = Drupal.checkPlain(args[key]);
                    break;
                case '!':
                    processedArgs[key] = args[key];
                    break;
                default:
                    processedArgs[key] = Drupal.theme('placeholder', args[key]);
                    break;
            }
        });
        return Drupal.stringReplace(str, processedArgs, null);
    };
    Drupal.stringReplace = function(str, args, keys) {
        if (str.length === 0) {
            return str;
        }
        if (!Array.isArray(keys)) {
            keys = Object.keys(args || {});
            keys.sort(function(a, b) {
                return a.length - b.length;
            });
        }
        if (keys.length === 0) {
            return str;
        }
        var key = keys.pop();
        var fragments = str.split(key);
        if (keys.length) {
            for (var i = 0; i < fragments.length; i++) {
                fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
            }
        }
        return fragments.join(args[key]);
    };
    Drupal.t = function(str, args, options) {
        options = options || {};
        options.context = options.context || '';
        if (typeof drupalTranslations !== 'undefined' && drupalTranslations.strings && drupalTranslations.strings[options.context] && drupalTranslations.strings[options.context][str]) {
            str = drupalTranslations.strings[options.context][str];
        }
        if (args) {
            str = Drupal.formatString(str, args);
        }
        return str;
    };
    Drupal.url = function(path) {
        return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
    };
    Drupal.url.toAbsolute = function(url) {
        var urlParsingNode = document.createElement('a');
        try {
            url = decodeURIComponent(url);
        } catch (e) {}
        urlParsingNode.setAttribute('href', url);
        return urlParsingNode.cloneNode(false).href;
    };
    Drupal.url.isLocal = function(url) {
        var absoluteUrl = Drupal.url.toAbsolute(url);
        var protocol = window.location.protocol;
        if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
            protocol = 'https:';
        }
        var baseUrl = "".concat(protocol, "//").concat(window.location.host).concat(drupalSettings.path.baseUrl.slice(0, -1));
        try {
            absoluteUrl = decodeURIComponent(absoluteUrl);
        } catch (e) {}
        try {
            baseUrl = decodeURIComponent(baseUrl);
        } catch (e) {}
        return absoluteUrl === baseUrl || absoluteUrl.indexOf("".concat(baseUrl, "/")) === 0;
    };
    Drupal.formatPlural = function(count, singular, plural, args, options) {
        args = args || {};
        args['@count'] = count;
        var pluralDelimiter = drupalSettings.pluralDelimiter;
        var translations = Drupal.t(singular + pluralDelimiter + plural, args, options).split(pluralDelimiter);
        var index = 0;
        if (typeof drupalTranslations !== 'undefined' && drupalTranslations.pluralFormula) {
            index = count in drupalTranslations.pluralFormula ? drupalTranslations.pluralFormula[count] : drupalTranslations.pluralFormula.default;
        } else if (args['@count'] !== 1) {
            index = 1;
        }
        return translations[index];
    };
    Drupal.encodePath = function(item) {
        return window.encodeURIComponent(item).replace(/%2F/g, '/');
    };
    Drupal.deprecationError = function(_ref) {
        var message = _ref.message;
        if (drupalSettings.suppressDeprecationErrors === false && typeof console !== 'undefined' && console.warn) {
            console.warn("[Deprecation] ".concat(message));
        }
    };
    Drupal.deprecatedProperty = function(_ref2) {
        var target = _ref2.target,
            deprecatedProperty = _ref2.deprecatedProperty,
            message = _ref2.message;
        if (!Proxy || !Reflect) {
            return target;
        }
        return new Proxy(target, {
            get: function get(target, key) {
                if (key === deprecatedProperty) {
                    Drupal.deprecationError({
                        message: message
                    });
                }
                for (var _len = arguments.length, rest = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                    rest[_key - 2] = arguments[_key];
                }
                return Reflect.get.apply(Reflect, [target, key].concat(rest));
            }
        });
    };
    Drupal.theme = function(func) {
        if (func in Drupal.theme) {
            var _Drupal$theme;
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
            }
            return (_Drupal$theme = Drupal.theme)[func].apply(_Drupal$theme, args);
        }
    };
    Drupal.theme.placeholder = function(str) {
        return "<em class=\"placeholder\">".concat(Drupal.checkPlain(str), "</em>");
    };
})(Drupal, window.drupalSettings, window.drupalTranslations, window.console, window.Proxy, window.Reflect);;
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/
if (window.jQuery) {
    jQuery.noConflict();
}
document.documentElement.className += ' js';
(function(Drupal, drupalSettings) {
    var domReady = function domReady(callback) {
        var listener = function listener() {
            callback();
            document.removeEventListener('DOMContentLoaded', listener);
        };
        if (document.readyState !== 'loading') {
            setTimeout(callback, 0);
        } else {
            document.addEventListener('DOMContentLoaded', listener);
        }
    };
    domReady(function() {
        Drupal.attachBehaviors(document, drupalSettings);
    });
})(Drupal, window.drupalSettings);;
/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
! function(a) {
    var b = navigator.userAgent;
    a.HTMLPictureElement && /ecko/.test(b) && b.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", function() {
        var b, c = document.createElement("source"),
            d = function(a) {
                var b, d, e = a.parentNode;
                "PICTURE" === e.nodeName.toUpperCase() ? (b = c.cloneNode(), e.insertBefore(b, e.firstElementChild), setTimeout(function() {
                    e.removeChild(b)
                })) : (!a._pfLastSize || a.offsetWidth > a._pfLastSize) && (a._pfLastSize = a.offsetWidth, d = a.sizes, a.sizes += ",100vw", setTimeout(function() {
                    a.sizes = d
                }))
            },
            e = function() {
                var a, b = document.querySelectorAll("picture > img, img[srcset][sizes]");
                for (a = 0; a < b.length; a++) d(b[a])
            },
            f = function() {
                clearTimeout(b), b = setTimeout(e, 99)
            },
            g = a.matchMedia && matchMedia("(orientation: landscape)"),
            h = function() {
                f(), g && g.addListener && g.addListener(f)
            };
        return c.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? h() : document.addEventListener("DOMContentLoaded", h), f
    }())
}(window),
function(a, b, c) {
    "use strict";

    function d(a) {
        return " " === a || "	" === a || "\n" === a || "\f" === a || "\r" === a
    }

    function e(b, c) {
        var d = new a.Image;
        return d.onerror = function() {
            A[b] = !1, ba()
        }, d.onload = function() {
            A[b] = 1 === d.width, ba()
        }, d.src = c, "pending"
    }

    function f() {
        M = !1, P = a.devicePixelRatio, N = {}, O = {}, s.DPR = P || 1, Q.width = Math.max(a.innerWidth || 0, z.clientWidth), Q.height = Math.max(a.innerHeight || 0, z.clientHeight), Q.vw = Q.width / 100, Q.vh = Q.height / 100, r = [Q.height, Q.width, P].join("-"), Q.em = s.getEmValue(), Q.rem = Q.em
    }

    function g(a, b, c, d) {
        var e, f, g, h;
        return "saveData" === B.algorithm ? a > 2.7 ? h = c + 1 : (f = b - c, e = Math.pow(a - .6, 1.5), g = f * e, d && (g += .1 * e), h = a + g) : h = c > 1 ? Math.sqrt(a * b) : a, h > c
    }

    function h(a) {
        var b, c = s.getSet(a),
            d = !1;
        "pending" !== c && (d = r, c && (b = s.setRes(c), s.applySetCandidate(b, a))), a[s.ns].evaled = d
    }

    function i(a, b) {
        return a.res - b.res
    }

    function j(a, b, c) {
        var d;
        return !c && b && (c = a[s.ns].sets, c = c && c[c.length - 1]), d = k(b, c), d && (b = s.makeUrl(b), a[s.ns].curSrc = b, a[s.ns].curCan = d, d.res || aa(d, d.set.sizes)), d
    }

    function k(a, b) {
        var c, d, e;
        if (a && b)
            for (e = s.parseSet(b), a = s.makeUrl(a), c = 0; c < e.length; c++)
                if (a === s.makeUrl(e[c].url)) {
                    d = e[c];
                    break
                }
        return d
    }

    function l(a, b) {
        var c, d, e, f, g = a.getElementsByTagName("source");
        for (c = 0, d = g.length; d > c; c++) e = g[c], e[s.ns] = !0, f = e.getAttribute("srcset"), f && b.push({
            srcset: f,
            media: e.getAttribute("media"),
            type: e.getAttribute("type"),
            sizes: e.getAttribute("sizes")
        })
    }

    function m(a, b) {
        function c(b) {
            var c, d = b.exec(a.substring(m));
            return d ? (c = d[0], m += c.length, c) : void 0
        }

        function e() {
            var a, c, d, e, f, i, j, k, l, m = !1,
                o = {};
            for (e = 0; e < h.length; e++) f = h[e], i = f[f.length - 1], j = f.substring(0, f.length - 1), k = parseInt(j, 10), l = parseFloat(j), X.test(j) && "w" === i ? ((a || c) && (m = !0), 0 === k ? m = !0 : a = k) : Y.test(j) && "x" === i ? ((a || c || d) && (m = !0), 0 > l ? m = !0 : c = l) : X.test(j) && "h" === i ? ((d || c) && (m = !0), 0 === k ? m = !0 : d = k) : m = !0;
            m || (o.url = g, a && (o.w = a), c && (o.d = c), d && (o.h = d), d || c || a || (o.d = 1), 1 === o.d && (b.has1x = !0), o.set = b, n.push(o))
        }

        function f() {
            for (c(T), i = "", j = "in descriptor";;) {
                if (k = a.charAt(m), "in descriptor" === j)
                    if (d(k)) i && (h.push(i), i = "", j = "after descriptor");
                    else {
                        if ("," === k) return m += 1, i && h.push(i), void e();
                        if ("(" === k) i += k, j = "in parens";
                        else {
                            if ("" === k) return i && h.push(i), void e();
                            i += k
                        }
                    }
                else if ("in parens" === j)
                    if (")" === k) i += k, j = "in descriptor";
                    else {
                        if ("" === k) return h.push(i), void e();
                        i += k
                    }
                else if ("after descriptor" === j)
                    if (d(k));
                    else {
                        if ("" === k) return void e();
                        j = "in descriptor", m -= 1
                    }
                m += 1
            }
        }
        for (var g, h, i, j, k, l = a.length, m = 0, n = [];;) {
            if (c(U), m >= l) return n;
            g = c(V), h = [], "," === g.slice(-1) ? (g = g.replace(W, ""), e()) : f()
        }
    }

    function n(a) {
        function b(a) {
            function b() {
                f && (g.push(f), f = "")
            }

            function c() {
                g[0] && (h.push(g), g = [])
            }
            for (var e, f = "", g = [], h = [], i = 0, j = 0, k = !1;;) {
                if (e = a.charAt(j), "" === e) return b(), c(), h;
                if (k) {
                    if ("*" === e && "/" === a[j + 1]) {
                        k = !1, j += 2, b();
                        continue
                    }
                    j += 1
                } else {
                    if (d(e)) {
                        if (a.charAt(j - 1) && d(a.charAt(j - 1)) || !f) {
                            j += 1;
                            continue
                        }
                        if (0 === i) {
                            b(), j += 1;
                            continue
                        }
                        e = " "
                    } else if ("(" === e) i += 1;
                    else if (")" === e) i -= 1;
                    else {
                        if ("," === e) {
                            b(), c(), j += 1;
                            continue
                        }
                        if ("/" === e && "*" === a.charAt(j + 1)) {
                            k = !0, j += 2;
                            continue
                        }
                    }
                    f += e, j += 1
                }
            }
        }

        function c(a) {
            return k.test(a) && parseFloat(a) >= 0 ? !0 : l.test(a) ? !0 : "0" === a || "-0" === a || "+0" === a ? !0 : !1
        }
        var e, f, g, h, i, j, k = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
            l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
        for (f = b(a), g = f.length, e = 0; g > e; e++)
            if (h = f[e], i = h[h.length - 1], c(i)) {
                if (j = i, h.pop(), 0 === h.length) return j;
                if (h = h.join(" "), s.matchesMedia(h)) return j
            }
        return "100vw"
    }
    b.createElement("picture");
    var o, p, q, r, s = {},
        t = !1,
        u = function() {},
        v = b.createElement("img"),
        w = v.getAttribute,
        x = v.setAttribute,
        y = v.removeAttribute,
        z = b.documentElement,
        A = {},
        B = {
            algorithm: ""
        },
        C = "data-pfsrc",
        D = C + "set",
        E = navigator.userAgent,
        F = /rident/.test(E) || /ecko/.test(E) && E.match(/rv\:(\d+)/) && RegExp.$1 > 35,
        G = "currentSrc",
        H = /\s+\+?\d+(e\d+)?w/,
        I = /(\([^)]+\))?\s*(.+)/,
        J = a.picturefillCFG,
        K = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)",
        L = "font-size:100%!important;",
        M = !0,
        N = {},
        O = {},
        P = a.devicePixelRatio,
        Q = {
            px: 1,
            "in": 96
        },
        R = b.createElement("a"),
        S = !1,
        T = /^[ \t\n\r\u000c]+/,
        U = /^[, \t\n\r\u000c]+/,
        V = /^[^ \t\n\r\u000c]+/,
        W = /[,]+$/,
        X = /^\d+$/,
        Y = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
        Z = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, d || !1) : a.attachEvent && a.attachEvent("on" + b, c)
        },
        $ = function(a) {
            var b = {};
            return function(c) {
                return c in b || (b[c] = a(c)), b[c]
            }
        },
        _ = function() {
            var a = /^([\d\.]+)(em|vw|px)$/,
                b = function() {
                    for (var a = arguments, b = 0, c = a[0]; ++b in a;) c = c.replace(a[b], a[++b]);
                    return c
                },
                c = $(function(a) {
                    return "return " + b((a || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";"
                });
            return function(b, d) {
                var e;
                if (!(b in N))
                    if (N[b] = !1, d && (e = b.match(a))) N[b] = e[1] * Q[e[2]];
                    else try {
                        N[b] = new Function("e", c(b))(Q)
                    } catch (f) {}
                return N[b]
            }
        }(),
        aa = function(a, b) {
            return a.w ? (a.cWidth = s.calcListLength(b || "100vw"), a.res = a.w / a.cWidth) : a.res = a.d, a
        },
        ba = function(a) {
            if (t) {
                var c, d, e, f = a || {};
                if (f.elements && 1 === f.elements.nodeType && ("IMG" === f.elements.nodeName.toUpperCase() ? f.elements = [f.elements] : (f.context = f.elements, f.elements = null)), c = f.elements || s.qsa(f.context || b, f.reevaluate || f.reselect ? s.sel : s.selShort), e = c.length) {
                    for (s.setupRun(f), S = !0, d = 0; e > d; d++) s.fillImg(c[d], f);
                    s.teardownRun(f)
                }
            }
        };
    o = a.console && console.warn ? function(a) {
        console.warn(a)
    } : u, G in v || (G = "src"), A["image/jpeg"] = !0, A["image/gif"] = !0, A["image/png"] = !0, A["image/svg+xml"] = b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), s.ns = ("pf" + (new Date).getTime()).substr(0, 9), s.supSrcset = "srcset" in v, s.supSizes = "sizes" in v, s.supPicture = !!a.HTMLPictureElement, s.supSrcset && s.supPicture && !s.supSizes && ! function(a) {
        v.srcset = "data:,a", a.src = "data:,a", s.supSrcset = v.complete === a.complete, s.supPicture = s.supSrcset && s.supPicture
    }(b.createElement("img")), s.supSrcset && !s.supSizes ? ! function() {
        var a = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",
            c = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
            d = b.createElement("img"),
            e = function() {
                var a = d.width;
                2 === a && (s.supSizes = !0), q = s.supSrcset && !s.supSizes, t = !0, setTimeout(ba)
            };
        d.onload = e, d.onerror = e, d.setAttribute("sizes", "9px"), d.srcset = c + " 1w," + a + " 9w", d.src = c
    }() : t = !0, s.selShort = "picture>img,img[srcset]", s.sel = s.selShort, s.cfg = B, s.DPR = P || 1, s.u = Q, s.types = A, s.setSize = u, s.makeUrl = $(function(a) {
        return R.href = a, R.href
    }), s.qsa = function(a, b) {
        return "querySelector" in a ? a.querySelectorAll(b) : []
    }, s.matchesMedia = function() {
        return a.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? s.matchesMedia = function(a) {
            return !a || matchMedia(a).matches
        } : s.matchesMedia = s.mMQ, s.matchesMedia.apply(this, arguments)
    }, s.mMQ = function(a) {
        return a ? _(a) : !0
    }, s.calcLength = function(a) {
        var b = _(a, !0) || !1;
        return 0 > b && (b = !1), b
    }, s.supportsType = function(a) {
        return a ? A[a] : !0
    }, s.parseSize = $(function(a) {
        var b = (a || "").match(I);
        return {
            media: b && b[1],
            length: b && b[2]
        }
    }), s.parseSet = function(a) {
        return a.cands || (a.cands = m(a.srcset, a)), a.cands
    }, s.getEmValue = function() {
        var a;
        if (!p && (a = b.body)) {
            var c = b.createElement("div"),
                d = z.style.cssText,
                e = a.style.cssText;
            c.style.cssText = K, z.style.cssText = L, a.style.cssText = L, a.appendChild(c), p = c.offsetWidth, a.removeChild(c), p = parseFloat(p, 10), z.style.cssText = d, a.style.cssText = e
        }
        return p || 16
    }, s.calcListLength = function(a) {
        if (!(a in O) || B.uT) {
            var b = s.calcLength(n(a));
            O[a] = b ? b : Q.width
        }
        return O[a]
    }, s.setRes = function(a) {
        var b;
        if (a) {
            b = s.parseSet(a);
            for (var c = 0, d = b.length; d > c; c++) aa(b[c], a.sizes)
        }
        return b
    }, s.setRes.res = aa, s.applySetCandidate = function(a, b) {
        if (a.length) {
            var c, d, e, f, h, k, l, m, n, o = b[s.ns],
                p = s.DPR;
            if (k = o.curSrc || b[G], l = o.curCan || j(b, k, a[0].set), l && l.set === a[0].set && (n = F && !b.complete && l.res - .1 > p, n || (l.cached = !0, l.res >= p && (h = l))), !h)
                for (a.sort(i), f = a.length, h = a[f - 1], d = 0; f > d; d++)
                    if (c = a[d], c.res >= p) {
                        e = d - 1, h = a[e] && (n || k !== s.makeUrl(c.url)) && g(a[e].res, c.res, p, a[e].cached) ? a[e] : c;
                        break
                    }
            h && (m = s.makeUrl(h.url), o.curSrc = m, o.curCan = h, m !== k && s.setSrc(b, h), s.setSize(b))
        }
    }, s.setSrc = function(a, b) {
        var c;
        a.src = b.url, "image/svg+xml" === b.set.type && (c = a.style.width, a.style.width = a.offsetWidth + 1 + "px", a.offsetWidth + 1 && (a.style.width = c))
    }, s.getSet = function(a) {
        var b, c, d, e = !1,
            f = a[s.ns].sets;
        for (b = 0; b < f.length && !e; b++)
            if (c = f[b], c.srcset && s.matchesMedia(c.media) && (d = s.supportsType(c.type))) {
                "pending" === d && (c = d), e = c;
                break
            }
        return e
    }, s.parseSets = function(a, b, d) {
        var e, f, g, h, i = b && "PICTURE" === b.nodeName.toUpperCase(),
            j = a[s.ns];
        (j.src === c || d.src) && (j.src = w.call(a, "src"), j.src ? x.call(a, C, j.src) : y.call(a, C)), (j.srcset === c || d.srcset || !s.supSrcset || a.srcset) && (e = w.call(a, "srcset"), j.srcset = e, h = !0), j.sets = [], i && (j.pic = !0, l(b, j.sets)), j.srcset ? (f = {
            srcset: j.srcset,
            sizes: w.call(a, "sizes")
        }, j.sets.push(f), g = (q || j.src) && H.test(j.srcset || ""), g || !j.src || k(j.src, f) || f.has1x || (f.srcset += ", " + j.src, f.cands.push({
            url: j.src,
            d: 1,
            set: f
        }))) : j.src && j.sets.push({
            srcset: j.src,
            sizes: null
        }), j.curCan = null, j.curSrc = c, j.supported = !(i || f && !s.supSrcset || g && !s.supSizes), h && s.supSrcset && !j.supported && (e ? (x.call(a, D, e), a.srcset = "") : y.call(a, D)), j.supported && !j.srcset && (!j.src && a.src || a.src !== s.makeUrl(j.src)) && (null === j.src ? a.removeAttribute("src") : a.src = j.src), j.parsed = !0
    }, s.fillImg = function(a, b) {
        var c, d = b.reselect || b.reevaluate;
        a[s.ns] || (a[s.ns] = {}), c = a[s.ns], (d || c.evaled !== r) && ((!c.parsed || b.reevaluate) && s.parseSets(a, a.parentNode, b), c.supported ? c.evaled = r : h(a))
    }, s.setupRun = function() {
        (!S || M || P !== a.devicePixelRatio) && f()
    }, s.supPicture ? (ba = u, s.fillImg = u) : ! function() {
        var c, d = a.attachEvent ? /d$|^c/ : /d$|^c|^i/,
            e = function() {
                var a = b.readyState || "";
                f = setTimeout(e, "loading" === a ? 200 : 999), b.body && (s.fillImgs(), c = c || d.test(a), c && clearTimeout(f))
            },
            f = setTimeout(e, b.body ? 9 : 99),
            g = function(a, b) {
                var c, d, e = function() {
                    var f = new Date - d;
                    b > f ? c = setTimeout(e, b - f) : (c = null, a())
                };
                return function() {
                    d = new Date, c || (c = setTimeout(e, b))
                }
            },
            h = z.clientHeight,
            i = function() {
                M = Math.max(a.innerWidth || 0, z.clientWidth) !== Q.width || z.clientHeight !== h, h = z.clientHeight, M && s.fillImgs()
            };
        Z(a, "resize", g(i, 99)), Z(b, "readystatechange", e)
    }(), s.picturefill = ba, s.fillImgs = ba, s.teardownRun = u, ba._ = s, a.picturefillCFG = {
        pf: s,
        push: function(a) {
            var b = a.shift();
            "function" == typeof s[b] ? s[b].apply(s, a) : (B[b] = a[0], S && s.fillImgs({
                reselect: !0
            }))
        }
    };
    for (; J && J.length;) a.picturefillCFG.push(J.shift());
    a.picturefill = ba, "object" == typeof module && "object" == typeof module.exports ? module.exports = ba : "function" == typeof define && define.amd && define("picturefill", function() {
        return ba
    }), s.supPicture || (A["image/webp"] = e("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="))
}(window, document);;
/*!
 * tabbable 5.3.3
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : (e = "undefined" != typeof globalThis ? globalThis : e || self, function() {
        var n = e.tabbable,
            o = e.tabbable = {};
        t(o), o.noConflict = function() {
            return e.tabbable = n, o
        }
    }())
}(this, (function(e) {
    "use strict";
    var t = ["input", "select", "textarea", "a[href]", "button", "[tabindex]:not(slot)", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])', "details>summary:first-of-type", "details"],
        n = t.join(","),
        o = "undefined" == typeof Element,
        r = o ? function() {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
        i = !o && Element.prototype.getRootNode ? function(e) {
            return e.getRootNode()
        } : function(e) {
            return e.ownerDocument
        },
        a = function(e, t, o) {
            var i = Array.prototype.slice.apply(e.querySelectorAll(n));
            return t && r.call(e, n) && i.unshift(e), i = i.filter(o)
        },
        l = function e(t, o, i) {
            for (var a = [], l = Array.from(t); l.length;) {
                var u = l.shift();
                if ("SLOT" === u.tagName) {
                    var c = u.assignedElements(),
                        d = e(c.length ? c : u.children, !0, i);
                    i.flatten ? a.push.apply(a, d) : a.push({
                        scope: u,
                        candidates: d
                    })
                } else {
                    r.call(u, n) && i.filter(u) && (o || !t.includes(u)) && a.push(u);
                    var f = u.shadowRoot || "function" == typeof i.getShadowRoot && i.getShadowRoot(u),
                        s = !i.shadowRootFilter || i.shadowRootFilter(u);
                    if (f && s) {
                        var p = e(!0 === f ? u.children : f.children, !0, i);
                        i.flatten ? a.push.apply(a, p) : a.push({
                            scope: u,
                            candidates: p
                        })
                    } else l.unshift.apply(l, u.children)
                }
            }
            return a
        },
        u = function(e, t) {
            return e.tabIndex < 0 && (t || /^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || e.isContentEditable) && isNaN(parseInt(e.getAttribute("tabindex"), 10)) ? 0 : e.tabIndex
        },
        c = function(e, t) {
            return e.tabIndex === t.tabIndex ? e.documentOrder - t.documentOrder : e.tabIndex - t.tabIndex
        },
        d = function(e) {
            return "INPUT" === e.tagName
        },
        f = function(e) {
            return function(e) {
                return d(e) && "radio" === e.type
            }(e) && ! function(e) {
                if (!e.name) return !0;
                var t, n = e.form || i(e),
                    o = function(e) {
                        return n.querySelectorAll('input[type="radio"][name="' + e + '"]')
                    };
                if ("undefined" != typeof window && void 0 !== window.CSS && "function" == typeof window.CSS.escape) t = o(window.CSS.escape(e.name));
                else try {
                    t = o(e.name)
                } catch (e) {
                    return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s", e.message), !1
                }
                var r = function(e, t) {
                    for (var n = 0; n < e.length; n++)
                        if (e[n].checked && e[n].form === t) return e[n]
                }(t, e.form);
                return !r || r === e
            }(e)
        },
        s = function(e) {
            var t = e.getBoundingClientRect(),
                n = t.width,
                o = t.height;
            return 0 === n && 0 === o
        },
        p = function(e, t) {
            return !(t.disabled || function(e) {
                return d(e) && "hidden" === e.type
            }(t) || function(e, t) {
                var n = t.displayCheck,
                    o = t.getShadowRoot;
                if ("hidden" === getComputedStyle(e).visibility) return !0;
                var a = r.call(e, "details>summary:first-of-type") ? e.parentElement : e;
                if (r.call(a, "details:not([open]) *")) return !0;
                var l = i(e).host,
                    u = (null == l ? void 0 : l.ownerDocument.contains(l)) || e.ownerDocument.contains(e);
                if (n && "full" !== n) {
                    if ("non-zero-area" === n) return s(e)
                } else {
                    if ("function" == typeof o) {
                        for (var c = e; e;) {
                            var d = e.parentElement,
                                f = i(e);
                            if (d && !d.shadowRoot && !0 === o(d)) return s(e);
                            e = e.assignedSlot ? e.assignedSlot : d || f === e.ownerDocument ? d : f.host
                        }
                        e = c
                    }
                    if (u) return !e.getClientRects().length
                }
                return !1
            }(t, e) || function(e) {
                return "DETAILS" === e.tagName && Array.prototype.slice.apply(e.children).some((function(e) {
                    return "SUMMARY" === e.tagName
                }))
            }(t) || function(e) {
                if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
                    for (var t = e.parentElement; t;) {
                        if ("FIELDSET" === t.tagName && t.disabled) {
                            for (var n = 0; n < t.children.length; n++) {
                                var o = t.children.item(n);
                                if ("LEGEND" === o.tagName) return !!r.call(t, "fieldset[disabled] *") || !o.contains(e)
                            }
                            return !0
                        }
                        t = t.parentElement
                    }
                return !1
            }(t))
        },
        h = function(e, t) {
            return !(f(t) || u(t) < 0 || !p(e, t))
        },
        b = function(e) {
            var t = parseInt(e.getAttribute("tabindex"), 10);
            return !!(isNaN(t) || t >= 0)
        },
        m = t.concat("iframe").join(",");
    e.focusable = function(e, t) {
        return (t = t || {}).getShadowRoot ? l([e], t.includeContainer, {
            filter: p.bind(null, t),
            flatten: !0,
            getShadowRoot: t.getShadowRoot
        }) : a(e, t.includeContainer, p.bind(null, t))
    }, e.isFocusable = function(e, t) {
        if (t = t || {}, !e) throw new Error("No node provided");
        return !1 !== r.call(e, m) && p(t, e)
    }, e.isTabbable = function(e, t) {
        if (t = t || {}, !e) throw new Error("No node provided");
        return !1 !== r.call(e, n) && h(t, e)
    }, e.tabbable = function(e, t) {
        return function e(t) {
            var n = [],
                o = [];
            return t.forEach((function(t, r) {
                var i = !!t.scope,
                    a = i ? t.scope : t,
                    l = u(a, i),
                    c = i ? e(t.candidates) : a;
                0 === l ? i ? n.push.apply(n, c) : n.push(a) : o.push({
                    documentOrder: r,
                    tabIndex: l,
                    item: t,
                    isScope: i,
                    content: c
                })
            })), o.sort(c).reduce((function(e, t) {
                return t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
            }), []).concat(n)
        }((t = t || {}).getShadowRoot ? l([e], t.includeContainer, {
            filter: h.bind(null, t),
            flatten: !1,
            getShadowRoot: t.getShadowRoot,
            shadowRootFilter: b
        }) : a(e, t.includeContainer, h.bind(null, t)))
    }, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}));

;
! function(t) {
    var e = {};

    function i(n) {
        if (e[n]) return e[n].exports;
        var r = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return t[n].call(r.exports, r, r.exports, i), r.l = !0, r.exports
    }
    i.m = t, i.c = e, i.d = function(t, e, n) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) i.d(n, r, function(e) {
                return t[e]
            }.bind(null, r));
        return n
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "", i(i.s = 24)
}([function(t, e, i) {
    var n, r;

    function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }! function(o, a) {
        n = [i(10)], void 0 === (r = function(t) {
            return function(t, e) {
                "use strict";
                var i = {
                        extend: function(t, e) {
                            for (var i in e) t[i] = e[i];
                            return t
                        },
                        modulo: function(t, e) {
                            return (t % e + e) % e
                        }
                    },
                    n = Array.prototype.slice;
                i.makeArray = function(t) {
                    return Array.isArray(t) ? t : null == t ? [] : "object" == s(t) && "number" == typeof t.length ? n.call(t) : [t]
                }, i.removeFrom = function(t, e) {
                    var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
                }, i.getParent = function(t, i) {
                    for (; t.parentNode && t != document.body;)
                        if (t = t.parentNode, e(t, i)) return t
                }, i.getQueryElement = function(t) {
                    return "string" == typeof t ? document.querySelector(t) : t
                }, i.handleEvent = function(t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t)
                }, i.filterFindElements = function(t, n) {
                    t = i.makeArray(t);
                    var r = [];
                    return t.forEach((function(t) {
                        if (t instanceof HTMLElement)
                            if (n) {
                                e(t, n) && r.push(t);
                                for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++) r.push(i[s])
                            } else r.push(t)
                    })), r
                }, i.debounceMethod = function(t, e, i) {
                    i = i || 100;
                    var n = t.prototype[e],
                        r = e + "Timeout";
                    t.prototype[e] = function() {
                        var t = this[r];
                        clearTimeout(t);
                        var e = arguments,
                            s = this;
                        this[r] = setTimeout((function() {
                            n.apply(s, e), delete s[r]
                        }), i)
                    }
                }, i.docReady = function(t) {
                    var e = document.readyState;
                    "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
                }, i.toDashed = function(t) {
                    return t.replace(/(.)([A-Z])/g, (function(t, e, i) {
                        return e + "-" + i
                    })).toLowerCase()
                };
                var r = t.console;
                return i.htmlInit = function(e, n) {
                    i.docReady((function() {
                        var s = i.toDashed(n),
                            o = "data-" + s,
                            a = document.querySelectorAll("[" + o + "]"),
                            l = document.querySelectorAll(".js-" + s),
                            u = i.makeArray(a).concat(i.makeArray(l)),
                            h = o + "-options",
                            c = t.jQuery;
                        u.forEach((function(t) {
                            var i, s = t.getAttribute(o) || t.getAttribute(h);
                            try {
                                i = s && JSON.parse(s)
                            } catch (e) {
                                return void(r && r.error("Error parsing " + o + " on " + t.className + ": " + e))
                            }
                            var a = new e(t, i);
                            c && c.data(t, n, a)
                        }))
                    }))
                }, i
            }(o, t)
        }.apply(e, n)) || (t.exports = r)
    }(window)
}, function(t, e, i) {
    var n, r;
    ! function(s, o) {
        n = [i(3), i(8), i(0), i(11), i(12), i(13)], void 0 === (r = function(t, e, i, n, r, o) {
            return function(t, e, i, n, r, s, o) {
                "use strict";
                var a = t.jQuery,
                    l = t.getComputedStyle,
                    u = t.console;

                function h(t, e) {
                    for (t = n.makeArray(t); t.length;) e.appendChild(t.shift())
                }
                var c = 0,
                    d = {};

                function p(t, e) {
                    var i = n.getQueryElement(t);
                    if (i) {
                        if (this.element = i, this.element.flickityGUID) {
                            var r = d[this.element.flickityGUID];
                            return r && r.option(e), r
                        }
                        a && (this.$element = a(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e), this._create()
                    } else u && u.error("Bad element for Flickity: " + (i || t))
                }
                p.defaults = {
                    accessibility: !0,
                    cellAlign: "center",
                    freeScrollFriction: .075,
                    friction: .28,
                    namespaceJQueryEvents: !0,
                    percentPosition: !0,
                    resize: !0,
                    selectedAttraction: .025,
                    setGallerySize: !0
                }, p.createMethods = [];
                var f = p.prototype;
                n.extend(f, e.prototype), f._create = function() {
                    var e = this.guid = ++c;
                    for (var i in this.element.flickityGUID = e, d[e] = this, this.selectedIndex = 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", this._createSlider(), (this.options.resize || this.options.watchCSS) && t.addEventListener("resize", this), this.options.on) {
                        var n = this.options.on[i];
                        this.on(i, n)
                    }
                    p.createMethods.forEach((function(t) {
                        this[t]()
                    }), this), this.options.watchCSS ? this.watchCSS() : this.activate()
                }, f.option = function(t) {
                    n.extend(this.options, t)
                }, f.activate = function() {
                    this.isActive || (this.isActive = !0, this.element.classList.add("flickity-enabled"), this.options.rightToLeft && this.element.classList.add("flickity-rtl"), this.getSize(), h(this._filterFindCellElements(this.element.children), this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, this.element.addEventListener("keydown", this)), this.emitEvent("activate"), this.selectInitialIndex(), this.isInitActivated = !0, this.dispatchEvent("ready"))
                }, f._createSlider = function() {
                    var t = document.createElement("div");
                    t.className = "flickity-slider", t.style[this.originSide] = 0, this.slider = t
                }, f._filterFindCellElements = function(t) {
                    return n.filterFindElements(t, this.options.cellSelector)
                }, f.reloadCells = function() {
                    this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize()
                }, f._makeCells = function(t) {
                    return this._filterFindCellElements(t).map((function(t) {
                        return new r(t, this)
                    }), this)
                }, f.getLastCell = function() {
                    return this.cells[this.cells.length - 1]
                }, f.getLastSlide = function() {
                    return this.slides[this.slides.length - 1]
                }, f.positionCells = function() {
                    this._sizeCells(this.cells), this._positionCells(0)
                }, f._positionCells = function(t) {
                    t = t || 0, this.maxCellHeight = t && this.maxCellHeight || 0;
                    var e = 0;
                    if (t > 0) {
                        var i = this.cells[t - 1];
                        e = i.x + i.size.outerWidth
                    }
                    for (var n = this.cells.length, r = t; r < n; r++) {
                        var s = this.cells[r];
                        s.setPosition(e), e += s.size.outerWidth, this.maxCellHeight = Math.max(s.size.outerHeight, this.maxCellHeight)
                    }
                    this.slideableWidth = e, this.updateSlides(), this._containSlides(), this.slidesWidth = n ? this.getLastSlide().target - this.slides[0].target : 0
                }, f._sizeCells = function(t) {
                    t.forEach((function(t) {
                        t.getSize()
                    }))
                }, f.updateSlides = function() {
                    if (this.slides = [], this.cells.length) {
                        var t = new s(this);
                        this.slides.push(t);
                        var e = "left" == this.originSide ? "marginRight" : "marginLeft",
                            i = this._getCanCellFit();
                        this.cells.forEach((function(n, r) {
                            if (t.cells.length) {
                                var o = t.outerWidth - t.firstMargin + (n.size.outerWidth - n.size[e]);
                                i.call(this, r, o) || (t.updateTarget(), t = new s(this), this.slides.push(t)), t.addCell(n)
                            } else t.addCell(n)
                        }), this), t.updateTarget(), this.updateSelectedSlide()
                    }
                }, f._getCanCellFit = function() {
                    var t = this.options.groupCells;
                    if (!t) return function() {
                        return !1
                    };
                    if ("number" == typeof t) {
                        var e = parseInt(t, 10);
                        return function(t) {
                            return t % e != 0
                        }
                    }
                    var i = "string" == typeof t && t.match(/^(\d+)%$/),
                        n = i ? parseInt(i[1], 10) / 100 : 1;
                    return function(t, e) {
                        return e <= (this.size.innerWidth + 1) * n
                    }
                }, f._init = f.reposition = function() {
                    this.positionCells(), this.positionSliderAtSelected()
                }, f.getSize = function() {
                    this.size = i(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign
                };
                var g = {
                    center: {
                        left: .5,
                        right: .5
                    },
                    left: {
                        left: 0,
                        right: 1
                    },
                    right: {
                        right: 0,
                        left: 1
                    }
                };
                f.setCellAlign = function() {
                    var t = g[this.options.cellAlign];
                    this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
                }, f.setGallerySize = function() {
                    if (this.options.setGallerySize) {
                        var t = this.options.adaptiveHeight && this.selectedSlide ? this.selectedSlide.height : this.maxCellHeight;
                        this.viewport.style.height = t + "px"
                    }
                }, f._getWrapShiftCells = function() {
                    if (this.options.wrapAround) {
                        this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
                        var t = this.cursorPosition,
                            e = this.cells.length - 1;
                        this.beforeShiftCells = this._getGapCells(t, e, -1), t = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(t, 0, 1)
                    }
                }, f._getGapCells = function(t, e, i) {
                    for (var n = []; t > 0;) {
                        var r = this.cells[e];
                        if (!r) break;
                        n.push(r), e += i, t -= r.size.outerWidth
                    }
                    return n
                }, f._containSlides = function() {
                    if (this.options.contain && !this.options.wrapAround && this.cells.length) {
                        var t = this.options.rightToLeft,
                            e = t ? "marginRight" : "marginLeft",
                            i = t ? "marginLeft" : "marginRight",
                            n = this.slideableWidth - this.getLastCell().size[i],
                            r = n < this.size.innerWidth,
                            s = this.cursorPosition + this.cells[0].size[e],
                            o = n - this.size.innerWidth * (1 - this.cellAlign);
                        this.slides.forEach((function(t) {
                            r ? t.target = n * this.cellAlign : (t.target = Math.max(t.target, s), t.target = Math.min(t.target, o))
                        }), this)
                    }
                }, f.dispatchEvent = function(t, e, i) {
                    var n = e ? [e].concat(i) : i;
                    if (this.emitEvent(t, n), a && this.$element) {
                        var r = t += this.options.namespaceJQueryEvents ? ".flickity" : "";
                        if (e) {
                            var s = new a.Event(e);
                            s.type = t, r = s
                        }
                        this.$element.trigger(r, i)
                    }
                }, f.select = function(t, e, i) {
                    if (this.isActive && (t = parseInt(t, 10), this._wrapSelect(t), (this.options.wrapAround || e) && (t = n.modulo(t, this.slides.length)), this.slides[t])) {
                        var r = this.selectedIndex;
                        this.selectedIndex = t, this.updateSelectedSlide(), i ? this.positionSliderAtSelected() : this.startAnimation(), this.options.adaptiveHeight && this.setGallerySize(), this.dispatchEvent("select", null, [t]), t != r && this.dispatchEvent("change", null, [t]), this.dispatchEvent("cellSelect")
                    }
                }, f._wrapSelect = function(t) {
                    var e = this.slides.length;
                    if (!(this.options.wrapAround && e > 1)) return t;
                    var i = n.modulo(t, e),
                        r = Math.abs(i - this.selectedIndex),
                        s = Math.abs(i + e - this.selectedIndex),
                        o = Math.abs(i - e - this.selectedIndex);
                    !this.isDragSelect && s < r ? t += e : !this.isDragSelect && o < r && (t -= e), t < 0 ? this.x -= this.slideableWidth : t >= e && (this.x += this.slideableWidth)
                }, f.previous = function(t, e) {
                    this.select(this.selectedIndex - 1, t, e)
                }, f.next = function(t, e) {
                    this.select(this.selectedIndex + 1, t, e)
                }, f.updateSelectedSlide = function() {
                    var t = this.slides[this.selectedIndex];
                    t && (this.unselectSelectedSlide(), this.selectedSlide = t, t.select(), this.selectedCells = t.cells, this.selectedElements = t.getCellElements(), this.selectedCell = t.cells[0], this.selectedElement = this.selectedElements[0])
                }, f.unselectSelectedSlide = function() {
                    this.selectedSlide && this.selectedSlide.unselect()
                }, f.selectInitialIndex = function() {
                    var t = this.options.initialIndex;
                    if (this.isInitActivated) this.select(this.selectedIndex, !1, !0);
                    else {
                        if (t && "string" == typeof t)
                            if (this.queryCell(t)) return void this.selectCell(t, !1, !0);
                        var e = 0;
                        t && this.slides[t] && (e = t), this.select(e, !1, !0)
                    }
                }, f.selectCell = function(t, e, i) {
                    var n = this.queryCell(t);
                    if (n) {
                        var r = this.getCellSlideIndex(n);
                        this.select(r, e, i)
                    }
                }, f.getCellSlideIndex = function(t) {
                    for (var e = 0; e < this.slides.length; e++) {
                        if (-1 != this.slides[e].cells.indexOf(t)) return e
                    }
                }, f.getCell = function(t) {
                    for (var e = 0; e < this.cells.length; e++) {
                        var i = this.cells[e];
                        if (i.element == t) return i
                    }
                }, f.getCells = function(t) {
                    t = n.makeArray(t);
                    var e = [];
                    return t.forEach((function(t) {
                        var i = this.getCell(t);
                        i && e.push(i)
                    }), this), e
                }, f.getCellElements = function() {
                    return this.cells.map((function(t) {
                        return t.element
                    }))
                }, f.getParentCell = function(t) {
                    var e = this.getCell(t);
                    return e || (t = n.getParent(t, ".flickity-slider > *"), this.getCell(t))
                }, f.getAdjacentCellElements = function(t, e) {
                    if (!t) return this.selectedSlide.getCellElements();
                    e = void 0 === e ? this.selectedIndex : e;
                    var i = this.slides.length;
                    if (1 + 2 * t >= i) return this.getCellElements();
                    for (var r = [], s = e - t; s <= e + t; s++) {
                        var o = this.options.wrapAround ? n.modulo(s, i) : s,
                            a = this.slides[o];
                        a && (r = r.concat(a.getCellElements()))
                    }
                    return r
                }, f.queryCell = function(t) {
                    if ("number" == typeof t) return this.cells[t];
                    if ("string" == typeof t) {
                        if (t.match(/^[#.]?[\d/]/)) return;
                        t = this.element.querySelector(t)
                    }
                    return this.getCell(t)
                }, f.uiChange = function() {
                    this.emitEvent("uiChange")
                }, f.childUIPointerDown = function(t) {
                    "touchstart" != t.type && t.preventDefault(), this.focus()
                }, f.onresize = function() {
                    this.watchCSS(), this.resize()
                }, n.debounceMethod(p, "onresize", 150), f.resize = function() {
                    if (this.isActive) {
                        this.getSize(), this.options.wrapAround && (this.x = n.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.emitEvent("resize");
                        var t = this.selectedElements && this.selectedElements[0];
                        this.selectCell(t, !1, !0)
                    }
                }, f.watchCSS = function() {
                    this.options.watchCSS && (-1 != l(this.element, ":after").content.indexOf("flickity") ? this.activate() : this.deactivate())
                }, f.onkeydown = function(t) {
                    var e = document.activeElement && document.activeElement != this.element;
                    if (this.options.accessibility && !e) {
                        var i = p.keyboardHandlers[t.keyCode];
                        i && i.call(this)
                    }
                }, p.keyboardHandlers = {
                    37: function() {
                        var t = this.options.rightToLeft ? "next" : "previous";
                        this.uiChange(), this[t]()
                    },
                    39: function() {
                        var t = this.options.rightToLeft ? "previous" : "next";
                        this.uiChange(), this[t]()
                    }
                }, f.focus = function() {
                    var e = t.pageYOffset;
                    this.element.focus({
                        preventScroll: !0
                    }), t.pageYOffset != e && t.scrollTo(t.pageXOffset, e)
                }, f.deactivate = function() {
                    this.isActive && (this.element.classList.remove("flickity-enabled"), this.element.classList.remove("flickity-rtl"), this.unselectSelectedSlide(), this.cells.forEach((function(t) {
                        t.destroy()
                    })), this.element.removeChild(this.viewport), h(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), this.element.removeEventListener("keydown", this)), this.isActive = !1, this.emitEvent("deactivate"))
                }, f.destroy = function() {
                    this.deactivate(), t.removeEventListener("resize", this), this.allOff(), this.emitEvent("destroy"), a && this.$element && a.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete d[this.guid]
                }, n.extend(f, o), p.data = function(t) {
                    var e = (t = n.getQueryElement(t)) && t.flickityGUID;
                    return e && d[e]
                }, n.htmlInit(p, "flickity"), a && a.bridget && a.bridget("flickity", p);
                return p.setJQuery = function(t) {
                    a = t
                }, p.Cell = r, p.Slide = s, p
            }(s, t, e, i, n, r, o)
        }.apply(e, n)) || (t.exports = r)
    }(window)
}, function(t, e, i) {
    var n, r, s;
    window, r = [i(1), i(14), i(16), i(17), i(18), i(19), i(20)], void 0 === (s = "function" == typeof(n = function(t) {
        return t
    }) ? n.apply(e, r) : n) || (t.exports = s)
}, function(t, e, i) {
    var n, r;
    "undefined" != typeof window && window, void 0 === (r = "function" == typeof(n = function() {
        "use strict";

        function t() {}
        var e = t.prototype;
        return e.on = function(t, e) {
            if (t && e) {
                var i = this._events = this._events || {},
                    n = i[t] = i[t] || [];
                return -1 == n.indexOf(e) && n.push(e), this
            }
        }, e.once = function(t, e) {
            if (t && e) {
                this.on(t, e);
                var i = this._onceEvents = this._onceEvents || {};
                return (i[t] = i[t] || {})[e] = !0, this
            }
        }, e.off = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                var n = i.indexOf(e);
                return -1 != n && i.splice(n, 1), this
            }
        }, e.emitEvent = function(t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) {
                i = i.slice(0), e = e || [];
                for (var n = this._onceEvents && this._onceEvents[t], r = 0; r < i.length; r++) {
                    var s = i[r];
                    n && n[s] && (this.off(t, s), delete n[s]), s.apply(this, e)
                }
                return this
            }
        }, e.allOff = function() {
            delete this._events, delete this._onceEvents
        }, t
    }) ? n.call(e, i, e, t) : n) || (t.exports = r)
}, function(t, e, i) {
    var n, r, s;
    r = [i(2), i(0)], void 0 === (s = "function" == typeof(n = function(t, e) {
        var i = t.Slide,
            n = i.prototype.updateTarget;
        i.prototype.updateTarget = function() {
            if (n.apply(this, arguments), this.parent.options.fade) {
                var t = this.target - this.x,
                    e = this.cells[0].x;
                this.cells.forEach((function(i) {
                    var n = i.x - e - t;
                    i.renderPosition(n)
                }))
            }
        }, i.prototype.setOpacity = function(t) {
            this.cells.forEach((function(e) {
                e.element.style.opacity = t
            }))
        };
        var r = t.prototype;
        t.createMethods.push("_createFade"), r._createFade = function() {
            this.fadeIndex = this.selectedIndex, this.prevSelectedIndex = this.selectedIndex, this.on("select", this.onSelectFade), this.on("dragEnd", this.onDragEndFade), this.on("settle", this.onSettleFade), this.on("activate", this.onActivateFade), this.on("deactivate", this.onDeactivateFade)
        };
        var s = r.updateSlides;
        r.updateSlides = function() {
            s.apply(this, arguments), this.options.fade && this.slides.forEach((function(t, e) {
                var i = e == this.selectedIndex ? 1 : 0;
                t.setOpacity(i)
            }), this)
        }, r.onSelectFade = function() {
            this.fadeIndex = Math.min(this.prevSelectedIndex, this.slides.length - 1), this.prevSelectedIndex = this.selectedIndex
        }, r.onSettleFade = function() {
            delete this.didDragEnd, this.options.fade && (this.selectedSlide.setOpacity(1), this.slides[this.fadeIndex] && this.fadeIndex != this.selectedIndex && this.slides[this.fadeIndex].setOpacity(0))
        }, r.onDragEndFade = function() {
            this.didDragEnd = !0
        }, r.onActivateFade = function() {
            this.options.fade && this.element.classList.add("is-fade")
        }, r.onDeactivateFade = function() {
            this.options.fade && (this.element.classList.remove("is-fade"), this.slides.forEach((function(t) {
                t.setOpacity("")
            })))
        };
        var o = r.positionSlider;
        r.positionSlider = function() {
            this.options.fade ? (this.fadeSlides(), this.dispatchScrollEvent()) : o.apply(this, arguments)
        };
        var a = r.positionSliderAtSelected;
        r.positionSliderAtSelected = function() {
            this.options.fade && this.setTranslateX(0), a.apply(this, arguments)
        }, r.fadeSlides = function() {
            if (!(this.slides.length < 2)) {
                var t = this.getFadeIndexes(),
                    e = this.slides[t.a],
                    i = this.slides[t.b],
                    n = this.wrapDifference(e.target, i.target),
                    r = this.wrapDifference(e.target, -this.x);
                r /= n, e.setOpacity(1 - r), i.setOpacity(r);
                var s = t.a;
                this.isDragging && (s = r > .5 ? t.a : t.b), null != this.fadeHideIndex && this.fadeHideIndex != s && this.fadeHideIndex != t.a && this.fadeHideIndex != t.b && this.slides[this.fadeHideIndex].setOpacity(0), this.fadeHideIndex = s
            }
        }, r.getFadeIndexes = function() {
            return this.isDragging || this.didDragEnd ? this.options.wrapAround ? this.getFadeDragWrapIndexes() : this.getFadeDragLimitIndexes() : {
                a: this.fadeIndex,
                b: this.selectedIndex
            }
        }, r.getFadeDragWrapIndexes = function() {
            var t = this.slides.map((function(t, e) {
                    return this.getSlideDistance(-this.x, e)
                }), this),
                i = t.map((function(t) {
                    return Math.abs(t)
                })),
                n = Math.min.apply(Math, i),
                r = i.indexOf(n),
                s = t[r],
                o = this.slides.length,
                a = s >= 0 ? 1 : -1;
            return {
                a: r,
                b: e.modulo(r + a, o)
            }
        }, r.getFadeDragLimitIndexes = function() {
            for (var t = 0, e = 0; e < this.slides.length - 1; e++) {
                var i = this.slides[e];
                if (-this.x < i.target) break;
                t = e
            }
            return {
                a: t,
                b: t + 1
            }
        }, r.wrapDifference = function(t, e) {
            var i = e - t;
            if (!this.options.wrapAround) return i;
            var n = i + this.slideableWidth,
                r = i - this.slideableWidth;
            return Math.abs(n) < Math.abs(i) && (i = n), Math.abs(r) < Math.abs(i) && (i = r), i
        };
        var l = r._getWrapShiftCells;
        r._getWrapShiftCells = function() {
            this.options.fade || l.apply(this, arguments)
        };
        var u = r.shiftWrapCells;
        return r.shiftWrapCells = function() {
            this.options.fade || u.apply(this, arguments)
        }, t
    }) ? n.apply(e, r) : n) || (t.exports = s)
}, function(t, e, i) {
    var n, r;
    /*!
     * Unipointer v2.3.0
     * base class for doing one thing with pointer event
     * MIT license
     */
    ! function(s, o) {
        n = [i(3)], void 0 === (r = function(t) {
            return function(t, e) {
                "use strict";

                function i() {}
                var n = i.prototype = Object.create(e.prototype);
                n.bindStartEvent = function(t) {
                    this._bindStartEvent(t, !0)
                }, n.unbindStartEvent = function(t) {
                    this._bindStartEvent(t, !1)
                }, n._bindStartEvent = function(e, i) {
                    var n = (i = void 0 === i || i) ? "addEventListener" : "removeEventListener",
                        r = "mousedown";
                    t.PointerEvent ? r = "pointerdown" : "ontouchstart" in t && (r = "touchstart"), e[n](r, this)
                }, n.handleEvent = function(t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t)
                }, n.getTouch = function(t) {
                    for (var e = 0; e < t.length; e++) {
                        var i = t[e];
                        if (i.identifier == this.pointerIdentifier) return i
                    }
                }, n.onmousedown = function(t) {
                    var e = t.button;
                    e && 0 !== e && 1 !== e || this._pointerDown(t, t)
                }, n.ontouchstart = function(t) {
                    this._pointerDown(t, t.changedTouches[0])
                }, n.onpointerdown = function(t) {
                    this._pointerDown(t, t)
                }, n._pointerDown = function(t, e) {
                    t.button || this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e))
                }, n.pointerDown = function(t, e) {
                    this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e])
                };
                var r = {
                    mousedown: ["mousemove", "mouseup"],
                    touchstart: ["touchmove", "touchend", "touchcancel"],
                    pointerdown: ["pointermove", "pointerup", "pointercancel"]
                };
                return n._bindPostStartEvents = function(e) {
                    if (e) {
                        var i = r[e.type];
                        i.forEach((function(e) {
                            t.addEventListener(e, this)
                        }), this), this._boundPointerEvents = i
                    }
                }, n._unbindPostStartEvents = function() {
                    this._boundPointerEvents && (this._boundPointerEvents.forEach((function(e) {
                        t.removeEventListener(e, this)
                    }), this), delete this._boundPointerEvents)
                }, n.onmousemove = function(t) {
                    this._pointerMove(t, t)
                }, n.onpointermove = function(t) {
                    t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
                }, n.ontouchmove = function(t) {
                    var e = this.getTouch(t.changedTouches);
                    e && this._pointerMove(t, e)
                }, n._pointerMove = function(t, e) {
                    this.pointerMove(t, e)
                }, n.pointerMove = function(t, e) {
                    this.emitEvent("pointerMove", [t, e])
                }, n.onmouseup = function(t) {
                    this._pointerUp(t, t)
                }, n.onpointerup = function(t) {
                    t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
                }, n.ontouchend = function(t) {
                    var e = this.getTouch(t.changedTouches);
                    e && this._pointerUp(t, e)
                }, n._pointerUp = function(t, e) {
                    this._pointerDone(), this.pointerUp(t, e)
                }, n.pointerUp = function(t, e) {
                    this.emitEvent("pointerUp", [t, e])
                }, n._pointerDone = function() {
                    this._pointerReset(), this._unbindPostStartEvents(), this.pointerDone()
                }, n._pointerReset = function() {
                    this.isPointerDown = !1, delete this.pointerIdentifier
                }, n.pointerDone = function() {}, n.onpointercancel = function(t) {
                    t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
                }, n.ontouchcancel = function(t) {
                    var e = this.getTouch(t.changedTouches);
                    e && this._pointerCancel(t, e)
                }, n._pointerCancel = function(t, e) {
                    this._pointerDone(), this.pointerCancel(t, e)
                }, n.pointerCancel = function(t, e) {
                    this.emitEvent("pointerCancel", [t, e])
                }, i.getPointerPoint = function(t) {
                    return {
                        x: t.pageX,
                        y: t.pageY
                    }
                }, i
            }(s, t)
        }.apply(e, n)) || (t.exports = r)
    }(window)
}, function(t, e, i) {
    (function(i) {
        var n, r;
        /*! smooth-scroll v16.1.3 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
        window.Element && !Element.prototype.closest && (Element.prototype.closest = function(t) {
                var e, i = (this.document || this.ownerDocument).querySelectorAll(t),
                    n = this;
                do {
                    for (e = i.length; 0 <= --e && i.item(e) !== n;);
                } while (e < 0 && (n = n.parentElement));
                return n
            }),
            function() {
                function t(t, e) {
                    e = e || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var i = document.createEvent("CustomEvent");
                    return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i
                }
                "function" != typeof window.CustomEvent && (t.prototype = window.Event.prototype, window.CustomEvent = t)
            }(),
            function() {
                for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
                window.requestAnimationFrame || (window.requestAnimationFrame = function(e, i) {
                    var n = (new Date).getTime(),
                        r = Math.max(0, 16 - (n - t)),
                        s = window.setTimeout((function() {
                            e(n + r)
                        }), r);
                    return t = n + r, s
                }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
                    clearTimeout(t)
                })
            }(), r = void 0 !== i ? i : "undefined" != typeof window ? window : this, void 0 === (n = function() {
                return function(t) {
                    "use strict";
                    var e = {
                            ignore: "[data-scroll-ignore]",
                            header: null,
                            topOnEmptyHash: !0,
                            speed: 500,
                            speedAsDuration: !1,
                            durationMax: null,
                            durationMin: null,
                            clip: !0,
                            offset: 0,
                            easing: "easeInOutCubic",
                            customEasing: null,
                            updateURL: !0,
                            popstate: !0,
                            emitEvents: !0
                        },
                        i = function() {
                            var t = {};
                            return Array.prototype.forEach.call(arguments, (function(e) {
                                for (var i in e) {
                                    if (!e.hasOwnProperty(i)) return;
                                    t[i] = e[i]
                                }
                            })), t
                        },
                        n = function(t) {
                            "#" === t.charAt(0) && (t = t.substr(1));
                            for (var e, i = String(t), n = i.length, r = -1, s = "", o = i.charCodeAt(0); ++r < n;) {
                                if (0 === (e = i.charCodeAt(r))) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
                                s += 1 <= e && e <= 31 || 127 == e || 0 === r && 48 <= e && e <= 57 || 1 === r && 48 <= e && e <= 57 && 45 === o ? "\\" + e.toString(16) + " " : 128 <= e || 45 === e || 95 === e || 48 <= e && e <= 57 || 65 <= e && e <= 90 || 97 <= e && e <= 122 ? i.charAt(r) : "\\" + i.charAt(r)
                            }
                            return "#" + s
                        },
                        r = function() {
                            return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
                        },
                        s = function(e, i, n) {
                            0 === e && document.body.focus(), n || (e.focus(), document.activeElement !== e && (e.setAttribute("tabindex", "-1"), e.focus(), e.style.outline = "none"), t.scrollTo(0, i))
                        },
                        o = function(e, i, n, r) {
                            if (i.emitEvents && "function" == typeof t.CustomEvent) {
                                var s = new CustomEvent(e, {
                                    bubbles: !0,
                                    detail: {
                                        anchor: n,
                                        toggle: r
                                    }
                                });
                                document.dispatchEvent(s)
                            }
                        };
                    return function(a, l) {
                        var u, h, c, d, p = {
                                cancelScroll: function(t) {
                                    cancelAnimationFrame(d), d = null, t || o("scrollCancel", u)
                                },
                                animateScroll: function(n, a, l) {
                                    p.cancelScroll();
                                    var h = i(u || e, l || {}),
                                        f = "[object Number]" === Object.prototype.toString.call(n),
                                        g = f || !n.tagName ? null : n;
                                    if (f || g) {
                                        var m = t.pageYOffset;
                                        h.header && !c && (c = document.querySelector(h.header));
                                        var v, D, y, b, w, _, C, x, E = function(e) {
                                                return e ? (i = e, parseInt(t.getComputedStyle(i).height, 10) + e.offsetTop) : 0;
                                                var i
                                            }(c),
                                            S = f ? n : function(e, i, n, s) {
                                                var o = 0;
                                                if (e.offsetParent)
                                                    for (; o += e.offsetTop, e = e.offsetParent;);
                                                return o = Math.max(o - i - n, 0), s && (o = Math.min(o, r() - t.innerHeight)), o
                                            }(g, E, parseInt("function" == typeof h.offset ? h.offset(n, a) : h.offset, 10), h.clip),
                                            F = S - m,
                                            T = r(),
                                            A = 0,
                                            I = (v = F, y = (D = h).speedAsDuration ? D.speed : Math.abs(v / 1e3 * D.speed), D.durationMax && y > D.durationMax ? D.durationMax : D.durationMin && y < D.durationMin ? D.durationMin : parseInt(y, 10));
                                        0 === t.pageYOffset && t.scrollTo(0, 0), C = n, x = h, f || history.pushState && x.updateURL && history.pushState({
                                            smoothScroll: JSON.stringify(x),
                                            anchor: C.id
                                        }, document.title, C === document.documentElement ? "#top" : "#" + C.id), "matchMedia" in t && t.matchMedia("(prefers-reduced-motion)").matches ? s(n, Math.floor(S), !1) : (o("scrollStart", h, n, a), p.cancelScroll(!0), t.requestAnimationFrame((function e(i) {
                                            var r, l, u;
                                            b || (b = i), A += i - b, _ = m + F * (l = w = 1 < (w = 0 === I ? 0 : A / I) ? 1 : w, "easeInQuad" === (r = h).easing && (u = l * l), "easeOutQuad" === r.easing && (u = l * (2 - l)), "easeInOutQuad" === r.easing && (u = l < .5 ? 2 * l * l : (4 - 2 * l) * l - 1), "easeInCubic" === r.easing && (u = l * l * l), "easeOutCubic" === r.easing && (u = --l * l * l + 1), "easeInOutCubic" === r.easing && (u = l < .5 ? 4 * l * l * l : (l - 1) * (2 * l - 2) * (2 * l - 2) + 1), "easeInQuart" === r.easing && (u = l * l * l * l), "easeOutQuart" === r.easing && (u = 1 - --l * l * l * l), "easeInOutQuart" === r.easing && (u = l < .5 ? 8 * l * l * l * l : 1 - 8 * --l * l * l * l), "easeInQuint" === r.easing && (u = l * l * l * l * l), "easeOutQuint" === r.easing && (u = 1 + --l * l * l * l * l), "easeInOutQuint" === r.easing && (u = l < .5 ? 16 * l * l * l * l * l : 1 + 16 * --l * l * l * l * l), r.customEasing && (u = r.customEasing(l)), u || l), t.scrollTo(0, Math.floor(_)),
                                                function(e, i) {
                                                    var r = t.pageYOffset;
                                                    if (e == i || r == i || (m < i && t.innerHeight + r) >= T) return p.cancelScroll(!0), s(n, i, f), o("scrollStop", h, n, a), !(d = b = null)
                                                }(_, S) || (d = t.requestAnimationFrame(e), b = i)
                                        })))
                                    }
                                }
                            },
                            f = function(e) {
                                if (!e.defaultPrevented && !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) && "closest" in e.target && (h = e.target.closest(a)) && "a" === h.tagName.toLowerCase() && !e.target.closest(u.ignore) && h.hostname === t.location.hostname && h.pathname === t.location.pathname && /#/.test(h.href)) {
                                    var i, r;
                                    try {
                                        i = n(decodeURIComponent(h.hash))
                                    } catch (e) {
                                        i = n(h.hash)
                                    }
                                    if ("#" === i) {
                                        if (!u.topOnEmptyHash) return;
                                        r = document.documentElement
                                    } else r = document.querySelector(i);
                                    (r = r || "#top" !== i ? r : document.documentElement) && (e.preventDefault(), function(e) {
                                        if (history.replaceState && e.updateURL && !history.state) {
                                            var i = t.location.hash;
                                            i = i || "", history.replaceState({
                                                smoothScroll: JSON.stringify(e),
                                                anchor: i || t.pageYOffset
                                            }, document.title, i || t.location.href)
                                        }
                                    }(u), p.animateScroll(r, h))
                                }
                            },
                            g = function(t) {
                                if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(u)) {
                                    var e = history.state.anchor;
                                    "string" == typeof e && e && !(e = document.querySelector(n(history.state.anchor))) || p.animateScroll(e, null, {
                                        updateURL: !1
                                    })
                                }
                            };
                        return p.destroy = function() {
                                u && (document.removeEventListener("click", f, !1), t.removeEventListener("popstate", g, !1), p.cancelScroll(), d = c = h = u = null)
                            },
                            function() {
                                if (!("querySelector" in document && "addEventListener" in t && "requestAnimationFrame" in t && "closest" in t.Element.prototype)) throw "Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";
                                p.destroy(), u = i(e, l || {}), c = u.header ? document.querySelector(u.header) : null, document.addEventListener("click", f, !1), u.updateURL && u.popstate && t.addEventListener("popstate", g, !1)
                            }(), p
                    }
                }(r)
            }.apply(e, [])) || (t.exports = n)
    }).call(this, i(7))
}, function(t, e) {
    function i(t) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" === ("undefined" == typeof window ? "undefined" : i(window)) && (n = window)
    }
    t.exports = n
}, function(t, e, i) {
    var n, r;

    function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    /*!
     * getSize v2.0.3
     * measure size of elements
     * MIT license
     */
    window, void 0 === (r = "function" == typeof(n = function() {
        "use strict";

        function t(t) {
            var e = parseFloat(t);
            return -1 == t.indexOf("%") && !isNaN(e) && e
        }
        var e = "undefined" == typeof console ? function() {} : function(t) {
                console.error(t)
            },
            i = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            n = i.length;

        function r(t) {
            var i = getComputedStyle(t);
            return i || e("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), i
        }
        var o, a = !1;

        function l(e) {
            if (function() {
                    if (!a) {
                        a = !0;
                        var e = document.createElement("div");
                        e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";
                        var i = document.body || document.documentElement;
                        i.appendChild(e);
                        var n = r(e);
                        o = 200 == Math.round(t(n.width)), l.isBoxSizeOuter = o, i.removeChild(e)
                    }
                }(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == s(e) && e.nodeType) {
                var u = r(e);
                if ("none" == u.display) return function() {
                    for (var t = {
                            width: 0,
                            height: 0,
                            innerWidth: 0,
                            innerHeight: 0,
                            outerWidth: 0,
                            outerHeight: 0
                        }, e = 0; e < n; e++) t[i[e]] = 0;
                    return t
                }();
                var h = {};
                h.width = e.offsetWidth, h.height = e.offsetHeight;
                for (var c = h.isBorderBox = "border-box" == u.boxSizing, d = 0; d < n; d++) {
                    var p = i[d],
                        f = u[p],
                        g = parseFloat(f);
                    h[p] = isNaN(g) ? 0 : g
                }
                var m = h.paddingLeft + h.paddingRight,
                    v = h.paddingTop + h.paddingBottom,
                    D = h.marginLeft + h.marginRight,
                    y = h.marginTop + h.marginBottom,
                    b = h.borderLeftWidth + h.borderRightWidth,
                    w = h.borderTopWidth + h.borderBottomWidth,
                    _ = c && o,
                    C = t(u.width);
                !1 !== C && (h.width = C + (_ ? 0 : m + b));
                var x = t(u.height);
                return !1 !== x && (h.height = x + (_ ? 0 : v + w)), h.innerWidth = h.width - (m + b), h.innerHeight = h.height - (v + w), h.outerWidth = h.width + D, h.outerHeight = h.height + y, h
            }
        }
        return l
    }) ? n.call(e, i, e, t) : n) || (t.exports = r)
}, function(t, e, i) {
    (function(i) {
        var n, r, s;
        "undefined" != typeof window && window, r = [], void 0 === (s = "function" == typeof(n = function() {
            return function t(e, i) {
                "use strict";
                var n = Object.create(t.prototype),
                    r = 0,
                    s = 0,
                    o = 0,
                    a = 0,
                    l = [],
                    u = !0,
                    h = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(t) {
                        return setTimeout(t, 1e3 / 60)
                    },
                    c = null,
                    d = !1;
                try {
                    var p = Object.defineProperty({}, "passive", {
                        get: function() {
                            d = !0
                        }
                    });
                    window.addEventListener("testPassive", null, p), window.removeEventListener("testPassive", null, p)
                } catch (t) {}
                var f = window.cancelAnimationFrame || window.mozCancelAnimationFrame || clearTimeout,
                    g = window.transformProp || function() {
                        var t = document.createElement("div");
                        if (null === t.style.transform) {
                            var e = ["Webkit", "Moz", "ms"];
                            for (var i in e)
                                if (void 0 !== t.style[e[i] + "Transform"]) return e[i] + "Transform"
                        }
                        return "transform"
                    }();
                n.options = {
                    speed: -2,
                    verticalSpeed: null,
                    horizontalSpeed: null,
                    breakpoints: [576, 768, 1201],
                    center: !1,
                    wrapper: null,
                    relativeToWrapper: !1,
                    round: !0,
                    vertical: !0,
                    horizontal: !1,
                    verticalScrollAxis: "y",
                    horizontalScrollAxis: "x",
                    callback: function() {}
                }, i && Object.keys(i).forEach((function(t) {
                    n.options[t] = i[t]
                })), i && i.breakpoints && function() {
                    if (3 === n.options.breakpoints.length && Array.isArray(n.options.breakpoints)) {
                        var t, e = !0,
                            i = !0;
                        if (n.options.breakpoints.forEach((function(n) {
                                "number" != typeof n && (i = !1), null !== t && n < t && (e = !1), t = n
                            })), e && i) return
                    }
                    n.options.breakpoints = [576, 768, 1201], console.warn("Rellax: You must pass an array of 3 numbers in ascending order to the breakpoints option. Defaults reverted")
                }(), e || (e = ".rellax");
                var m = "string" == typeof e ? document.querySelectorAll(e) : [e];
                if (m.length > 0) {
                    if (n.elems = m, n.options.wrapper && !n.options.wrapper.nodeType) {
                        var v = document.querySelector(n.options.wrapper);
                        if (!v) return void console.warn("Rellax: The wrapper you're trying to use doesn't exist.");
                        n.options.wrapper = v
                    }
                    var D, y = function t() {
                            for (var e = 0; e < l.length; e++) n.elems[e].style.cssText = l[e].style;
                            var i, r;
                            l = [], s = window.innerHeight, a = window.innerWidth, i = a, r = n.options.breakpoints, D = i < r[0] ? "xs" : i >= r[0] && i < r[1] ? "sm" : i >= r[1] && i < r[2] ? "md" : "lg", w(),
                                function() {
                                    for (var t = 0; t < n.elems.length; t++) {
                                        var e = b(n.elems[t]);
                                        l.push(e)
                                    }
                                }(), E(), u && (window.addEventListener("resize", t), u = !1, x())
                        },
                        b = function(t) {
                            var e, i = t.getAttribute("data-rellax-percentage"),
                                r = t.getAttribute("data-rellax-speed"),
                                o = t.getAttribute("data-rellax-xs-speed"),
                                l = t.getAttribute("data-rellax-mobile-speed"),
                                u = t.getAttribute("data-rellax-tablet-speed"),
                                h = t.getAttribute("data-rellax-desktop-speed"),
                                c = t.getAttribute("data-rellax-vertical-speed"),
                                d = t.getAttribute("data-rellax-horizontal-speed"),
                                p = t.getAttribute("data-rellax-vertical-scroll-axis"),
                                f = t.getAttribute("data-rellax-horizontal-scroll-axis"),
                                g = t.getAttribute("data-rellax-zindex") || 0,
                                m = t.getAttribute("data-rellax-min"),
                                v = t.getAttribute("data-rellax-max"),
                                y = t.getAttribute("data-rellax-min-x"),
                                b = t.getAttribute("data-rellax-max-x"),
                                w = t.getAttribute("data-rellax-min-y"),
                                C = t.getAttribute("data-rellax-max-y"),
                                x = !0;
                            o || l || u || h ? e = {
                                xs: o,
                                sm: l,
                                md: u,
                                lg: h
                            } : x = !1;
                            var E = n.options.wrapper ? n.options.wrapper.scrollTop : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
                            n.options.relativeToWrapper && (E = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop) - n.options.wrapper.offsetTop);
                            var S = n.options.vertical && (i || n.options.center) ? E : 0,
                                F = n.options.horizontal && (i || n.options.center) ? n.options.wrapper ? n.options.wrapper.scrollLeft : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft : 0,
                                T = S + t.getBoundingClientRect().top,
                                A = t.clientHeight || t.offsetHeight || t.scrollHeight,
                                I = F + t.getBoundingClientRect().left,
                                k = t.clientWidth || t.offsetWidth || t.scrollWidth,
                                L = i || (S - T + s) / (A + s),
                                O = i || (F - I + a) / (k + a);
                            n.options.center && (O = .5, L = .5);
                            var P = x && null !== e[D] ? Number(e[D]) : r || n.options.speed,
                                M = c || n.options.verticalSpeed,
                                B = d || n.options.horizontalSpeed,
                                z = p || n.options.verticalScrollAxis,
                                N = f || n.options.horizontalScrollAxis,
                                V = _(O, L, P, M, B),
                                R = t.style.cssText,
                                q = "",
                                H = /transform\s*:/i.exec(R);
                            if (H) {
                                var W = H.index,
                                    j = R.slice(W),
                                    G = j.indexOf(";");
                                q = G ? " " + j.slice(11, G).replace(/\s/g, "") : " " + j.slice(11).replace(/\s/g, "")
                            }
                            return {
                                baseX: V.x,
                                baseY: V.y,
                                top: T,
                                left: I,
                                height: A,
                                width: k,
                                speed: P,
                                verticalSpeed: M,
                                horizontalSpeed: B,
                                verticalScrollAxis: z,
                                horizontalScrollAxis: N,
                                style: R,
                                transform: q,
                                zindex: g,
                                min: m,
                                max: v,
                                minX: y,
                                maxX: b,
                                minY: w,
                                maxY: C
                            }
                        },
                        w = function() {
                            var t = r,
                                e = o;
                            if (r = n.options.wrapper ? n.options.wrapper.scrollTop : (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset, o = n.options.wrapper ? n.options.wrapper.scrollLeft : (document.documentElement || document.body.parentNode || document.body).scrollLeft || window.pageXOffset, n.options.relativeToWrapper) {
                                var i = (document.documentElement || document.body.parentNode || document.body).scrollTop || window.pageYOffset;
                                r = i - n.options.wrapper.offsetTop
                            }
                            return !(t == r || !n.options.vertical) || !(e == o || !n.options.horizontal)
                        },
                        _ = function(t, e, i, r, s) {
                            var o = {},
                                a = (s || i) * (100 * (1 - t)),
                                l = (r || i) * (100 * (1 - e));
                            return o.x = n.options.round ? Math.round(a) : Math.round(100 * a) / 100, o.y = n.options.round ? Math.round(l) : Math.round(100 * l) / 100, o
                        },
                        C = function t() {
                            window.removeEventListener("resize", t), window.removeEventListener("orientationchange", t), (n.options.wrapper ? n.options.wrapper : window).removeEventListener("scroll", t), (n.options.wrapper ? n.options.wrapper : document).removeEventListener("touchmove", t), c = h(x)
                        },
                        x = function t() {
                            w() && !1 === u ? (E(), c = h(t)) : (c = null, window.addEventListener("resize", C), window.addEventListener("orientationchange", C), (n.options.wrapper ? n.options.wrapper : window).addEventListener("scroll", C, !!d && {
                                passive: !0
                            }), (n.options.wrapper ? n.options.wrapper : document).addEventListener("touchmove", C, !!d && {
                                passive: !0
                            }))
                        },
                        E = function() {
                            for (var t, e = 0; e < n.elems.length; e++) {
                                var i = l[e].verticalScrollAxis.toLowerCase(),
                                    u = l[e].horizontalScrollAxis.toLowerCase(),
                                    h = -1 != i.indexOf("x") ? r : 0,
                                    c = -1 != i.indexOf("y") ? r : 0,
                                    d = -1 != u.indexOf("x") ? o : 0,
                                    p = (c + (-1 != u.indexOf("y") ? o : 0) - l[e].top + s) / (l[e].height + s),
                                    f = (h + d - l[e].left + a) / (l[e].width + a),
                                    m = (t = _(f, p, l[e].speed, l[e].verticalSpeed, l[e].horizontalSpeed)).y - l[e].baseY,
                                    v = t.x - l[e].baseX;
                                null !== l[e].min && (n.options.vertical && !n.options.horizontal && (m = m <= l[e].min ? l[e].min : m), n.options.horizontal && !n.options.vertical && (v = v <= l[e].min ? l[e].min : v)), null != l[e].minY && (m = m <= l[e].minY ? l[e].minY : m), null != l[e].minX && (v = v <= l[e].minX ? l[e].minX : v), null !== l[e].max && (n.options.vertical && !n.options.horizontal && (m = m >= l[e].max ? l[e].max : m), n.options.horizontal && !n.options.vertical && (v = v >= l[e].max ? l[e].max : v)), null != l[e].maxY && (m = m >= l[e].maxY ? l[e].maxY : m), null != l[e].maxX && (v = v >= l[e].maxX ? l[e].maxX : v);
                                var D = l[e].zindex,
                                    y = "translate3d(" + (n.options.horizontal ? v : "0") + "px," + (n.options.vertical ? m : "0") + "px," + D + "px) " + l[e].transform;
                                n.elems[e].style[g] = y
                            }
                            n.options.callback(t)
                        };
                    return n.destroy = function() {
                        for (var t = 0; t < n.elems.length; t++) n.elems[t].style.cssText = l[t].style;
                        u || (window.removeEventListener("resize", y), u = !0), f(c), c = null
                    }, y(), n.refresh = y, n
                }
                console.warn("Rellax: The elements you're trying to select don't exist.")
            }
        }) ? n.apply(e, r) : n) || (t.exports = s)
    }).call(this, i(7))
}, function(t, e, i) {
    var n, r;
    ! function(s, o) {
        "use strict";
        void 0 === (r = "function" == typeof(n = o) ? n.call(e, i, e, t) : n) || (t.exports = r)
    }(window, (function() {
        "use strict";
        var t = function() {
            var t = window.Element.prototype;
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                var n = e[i] + "MatchesSelector";
                if (t[n]) return n
            }
        }();
        return function(e, i) {
            return e[t](i)
        }
    }))
}, function(t, e, i) {
    var n, r;
    window, n = [i(8)], void 0 === (r = function(t) {
        return function(t, e) {
            "use strict";

            function i(t, e) {
                this.element = t, this.parent = e, this.create()
            }
            var n = i.prototype;
            return n.create = function() {
                this.element.style.position = "absolute", this.element.setAttribute("aria-hidden", "true"), this.x = 0, this.shift = 0
            }, n.destroy = function() {
                this.unselect(), this.element.style.position = "";
                var t = this.parent.originSide;
                this.element.style[t] = "", this.element.removeAttribute("aria-hidden")
            }, n.getSize = function() {
                this.size = e(this.element)
            }, n.setPosition = function(t) {
                this.x = t, this.updateTarget(), this.renderPosition(t)
            }, n.updateTarget = n.setDefaultTarget = function() {
                var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
                this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
            }, n.renderPosition = function(t) {
                var e = this.parent.originSide;
                this.element.style[e] = this.parent.getPositionValue(t)
            }, n.select = function() {
                this.element.classList.add("is-selected"), this.element.removeAttribute("aria-hidden")
            }, n.unselect = function() {
                this.element.classList.remove("is-selected"), this.element.setAttribute("aria-hidden", "true")
            }, n.wrapShift = function(t) {
                this.shift = t, this.renderPosition(this.x + this.parent.slideableWidth * t)
            }, n.remove = function() {
                this.element.parentNode.removeChild(this.element)
            }, i
        }(0, t)
    }.apply(e, n)) || (t.exports = r)
}, function(t, e, i) {
    var n, r;
    window, void 0 === (r = "function" == typeof(n = function() {
        "use strict";

        function t(t) {
            this.parent = t, this.isOriginLeft = "left" == t.originSide, this.cells = [], this.outerWidth = 0, this.height = 0
        }
        var e = t.prototype;
        return e.addCell = function(t) {
            if (this.cells.push(t), this.outerWidth += t.size.outerWidth, this.height = Math.max(t.size.outerHeight, this.height), 1 == this.cells.length) {
                this.x = t.x;
                var e = this.isOriginLeft ? "marginLeft" : "marginRight";
                this.firstMargin = t.size[e]
            }
        }, e.updateTarget = function() {
            var t = this.isOriginLeft ? "marginRight" : "marginLeft",
                e = this.getLastCell(),
                i = e ? e.size[t] : 0,
                n = this.outerWidth - (this.firstMargin + i);
            this.target = this.x + this.firstMargin + n * this.parent.cellAlign
        }, e.getLastCell = function() {
            return this.cells[this.cells.length - 1]
        }, e.select = function() {
            this.cells.forEach((function(t) {
                t.select()
            }))
        }, e.unselect = function() {
            this.cells.forEach((function(t) {
                t.unselect()
            }))
        }, e.getCellElements = function() {
            return this.cells.map((function(t) {
                return t.element
            }))
        }, t
    }) ? n.call(e, i, e, t) : n) || (t.exports = r)
}, function(t, e, i) {
    var n, r;
    window, n = [i(0)], void 0 === (r = function(t) {
        return function(t, e) {
            "use strict";
            var i = {
                startAnimation: function() {
                    this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
                },
                animate: function() {
                    this.applyDragForce(), this.applySelectedAttraction();
                    var t = this.x;
                    if (this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating) {
                        var e = this;
                        requestAnimationFrame((function() {
                            e.animate()
                        }))
                    }
                },
                positionSlider: function() {
                    var t = this.x;
                    this.options.wrapAround && this.cells.length > 1 && (t = e.modulo(t, this.slideableWidth), t -= this.slideableWidth, this.shiftWrapCells(t)), this.setTranslateX(t, this.isAnimating), this.dispatchScrollEvent()
                },
                setTranslateX: function(t, e) {
                    t += this.cursorPosition, t = this.options.rightToLeft ? -t : t;
                    var i = this.getPositionValue(t);
                    this.slider.style.transform = e ? "translate3d(" + i + ",0,0)" : "translateX(" + i + ")"
                },
                dispatchScrollEvent: function() {
                    var t = this.slides[0];
                    if (t) {
                        var e = -this.x - t.target,
                            i = e / this.slidesWidth;
                        this.dispatchEvent("scroll", null, [i, e])
                    }
                },
                positionSliderAtSelected: function() {
                    this.cells.length && (this.x = -this.selectedSlide.target, this.velocity = 0, this.positionSlider())
                },
                getPositionValue: function(t) {
                    return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
                },
                settle: function(t) {
                    !this.isPointerDown && Math.round(100 * this.x) == Math.round(100 * t) && this.restingFrames++, this.restingFrames > 2 && (this.isAnimating = !1, delete this.isFreeScrolling, this.positionSlider(), this.dispatchEvent("settle", null, [this.selectedIndex]))
                },
                shiftWrapCells: function(t) {
                    var e = this.cursorPosition + t;
                    this._shiftCells(this.beforeShiftCells, e, -1);
                    var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
                    this._shiftCells(this.afterShiftCells, i, 1)
                },
                _shiftCells: function(t, e, i) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n],
                            s = e > 0 ? i : 0;
                        r.wrapShift(s), e -= r.size.outerWidth
                    }
                },
                _unshiftCells: function(t) {
                    if (t && t.length)
                        for (var e = 0; e < t.length; e++) t[e].wrapShift(0)
                },
                integratePhysics: function() {
                    this.x += this.velocity, this.velocity *= this.getFrictionFactor()
                },
                applyForce: function(t) {
                    this.velocity += t
                },
                getFrictionFactor: function() {
                    return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
                },
                getRestingPosition: function() {
                    return this.x + this.velocity / (1 - this.getFrictionFactor())
                },
                applyDragForce: function() {
                    if (this.isDraggable && this.isPointerDown) {
                        var t = this.dragX - this.x - this.velocity;
                        this.applyForce(t)
                    }
                },
                applySelectedAttraction: function() {
                    if ((!this.isDraggable || !this.isPointerDown) && !this.isFreeScrolling && this.slides.length) {
                        var t = (-1 * this.selectedSlide.target - this.x) * this.options.selectedAttraction;
                        this.applyForce(t)
                    }
                }
            };
            return i
        }(0, t)
    }.apply(e, n)) || (t.exports = r)
}, function(t, e, i) {
    var n, r;
    ! function(s, o) {
        n = [i(1), i(15), i(0)], void 0 === (r = function(t, e, i) {
            return function(t, e, i, n) {
                "use strict";
                n.extend(e.defaults, {
                    draggable: ">1",
                    dragThreshold: 3
                }), e.createMethods.push("_createDrag");
                var r = e.prototype;
                n.extend(r, i.prototype), r._touchActionValue = "pan-y";
                var s = "createTouch" in document,
                    o = !1;
                r._createDrag = function() {
                    this.on("activate", this.onActivateDrag), this.on("uiChange", this._uiChangeDrag), this.on("deactivate", this.onDeactivateDrag), this.on("cellChange", this.updateDraggable), s && !o && (t.addEventListener("touchmove", (function() {})), o = !0)
                }, r.onActivateDrag = function() {
                    this.handles = [this.viewport], this.bindHandles(), this.updateDraggable()
                }, r.onDeactivateDrag = function() {
                    this.unbindHandles(), this.element.classList.remove("is-draggable")
                }, r.updateDraggable = function() {
                    ">1" == this.options.draggable ? this.isDraggable = this.slides.length > 1 : this.isDraggable = this.options.draggable, this.isDraggable ? this.element.classList.add("is-draggable") : this.element.classList.remove("is-draggable")
                }, r.bindDrag = function() {
                    this.options.draggable = !0, this.updateDraggable()
                }, r.unbindDrag = function() {
                    this.options.draggable = !1, this.updateDraggable()
                }, r._uiChangeDrag = function() {
                    delete this.isFreeScrolling
                }, r.pointerDown = function(e, i) {
                    this.isDraggable ? this.okayPointerDown(e) && (this._pointerDownPreventDefault(e), this.pointerDownFocus(e), document.activeElement != this.element && this.pointerDownBlur(), this.dragX = this.x, this.viewport.classList.add("is-pointer-down"), this.pointerDownScroll = l(), t.addEventListener("scroll", this), this._pointerDownDefault(e, i)) : this._pointerDownDefault(e, i)
                }, r._pointerDownDefault = function(t, e) {
                    this.pointerDownPointer = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    }, this._bindPostStartEvents(t), this.dispatchEvent("pointerDown", t, [e])
                };
                var a = {
                    INPUT: !0,
                    TEXTAREA: !0,
                    SELECT: !0
                };

                function l() {
                    return {
                        x: t.pageXOffset,
                        y: t.pageYOffset
                    }
                }
                return r.pointerDownFocus = function(t) {
                    a[t.target.nodeName] || this.focus()
                }, r._pointerDownPreventDefault = function(t) {
                    var e = "touchstart" == t.type,
                        i = "touch" == t.pointerType,
                        n = a[t.target.nodeName];
                    e || i || n || t.preventDefault()
                }, r.hasDragStarted = function(t) {
                    return Math.abs(t.x) > this.options.dragThreshold
                }, r.pointerUp = function(t, e) {
                    delete this.isTouchScrolling, this.viewport.classList.remove("is-pointer-down"), this.dispatchEvent("pointerUp", t, [e]), this._dragPointerUp(t, e)
                }, r.pointerDone = function() {
                    t.removeEventListener("scroll", this), delete this.pointerDownScroll
                }, r.dragStart = function(e, i) {
                    this.isDraggable && (this.dragStartPosition = this.x, this.startAnimation(), t.removeEventListener("scroll", this), this.dispatchEvent("dragStart", e, [i]))
                }, r.pointerMove = function(t, e) {
                    var i = this._dragPointerMove(t, e);
                    this.dispatchEvent("pointerMove", t, [e, i]), this._dragMove(t, e, i)
                }, r.dragMove = function(t, e, i) {
                    if (this.isDraggable) {
                        t.preventDefault(), this.previousDragX = this.dragX;
                        var n = this.options.rightToLeft ? -1 : 1;
                        this.options.wrapAround && (i.x %= this.slideableWidth);
                        var r = this.dragStartPosition + i.x * n;
                        if (!this.options.wrapAround && this.slides.length) {
                            var s = Math.max(-this.slides[0].target, this.dragStartPosition);
                            r = r > s ? .5 * (r + s) : r;
                            var o = Math.min(-this.getLastSlide().target, this.dragStartPosition);
                            r = r < o ? .5 * (r + o) : r
                        }
                        this.dragX = r, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", t, [e, i])
                    }
                }, r.dragEnd = function(t, e) {
                    if (this.isDraggable) {
                        this.options.freeScroll && (this.isFreeScrolling = !0);
                        var i = this.dragEndRestingSelect();
                        if (this.options.freeScroll && !this.options.wrapAround) {
                            var n = this.getRestingPosition();
                            this.isFreeScrolling = -n > this.slides[0].target && -n < this.getLastSlide().target
                        } else this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
                        delete this.previousDragX, this.isDragSelect = this.options.wrapAround, this.select(i), delete this.isDragSelect, this.dispatchEvent("dragEnd", t, [e])
                    }
                }, r.dragEndRestingSelect = function() {
                    var t = this.getRestingPosition(),
                        e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
                        i = this._getClosestResting(t, e, 1),
                        n = this._getClosestResting(t, e, -1);
                    return i.distance < n.distance ? i.index : n.index
                }, r._getClosestResting = function(t, e, i) {
                    for (var n = this.selectedIndex, r = 1 / 0, s = this.options.contain && !this.options.wrapAround ? function(t, e) {
                            return t <= e
                        } : function(t, e) {
                            return t < e
                        }; s(e, r) && (n += i, r = e, null !== (e = this.getSlideDistance(-t, n)));) e = Math.abs(e);
                    return {
                        distance: r,
                        index: n - i
                    }
                }, r.getSlideDistance = function(t, e) {
                    var i = this.slides.length,
                        r = this.options.wrapAround && i > 1,
                        s = r ? n.modulo(e, i) : e,
                        o = this.slides[s];
                    if (!o) return null;
                    var a = r ? this.slideableWidth * Math.floor(e / i) : 0;
                    return t - (o.target + a)
                }, r.dragEndBoostSelect = function() {
                    if (void 0 === this.previousDragX || !this.dragMoveTime || new Date - this.dragMoveTime > 100) return 0;
                    var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
                        e = this.previousDragX - this.dragX;
                    return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0
                }, r.staticClick = function(t, e) {
                    var i = this.getParentCell(t.target),
                        n = i && i.element,
                        r = i && this.cells.indexOf(i);
                    this.dispatchEvent("staticClick", t, [e, n, r])
                }, r.onscroll = function() {
                    var t = l(),
                        e = this.pointerDownScroll.x - t.x,
                        i = this.pointerDownScroll.y - t.y;
                    (Math.abs(e) > 3 || Math.abs(i) > 3) && this._pointerDone()
                }, e
            }(s, t, e, i)
        }.apply(e, n)) || (t.exports = r)
    }(window)
}, function(t, e, i) {
    var n, r;
    /*!
     * Unidragger v2.3.1
     * Draggable base class
     * MIT license
     */
    ! function(s, o) {
        n = [i(5)], void 0 === (r = function(t) {
            return function(t, e) {
                "use strict";

                function i() {}
                var n = i.prototype = Object.create(e.prototype);
                n.bindHandles = function() {
                    this._bindHandles(!0)
                }, n.unbindHandles = function() {
                    this._bindHandles(!1)
                }, n._bindHandles = function(e) {
                    for (var i = (e = void 0 === e || e) ? "addEventListener" : "removeEventListener", n = e ? this._touchActionValue : "", r = 0; r < this.handles.length; r++) {
                        var s = this.handles[r];
                        this._bindStartEvent(s, e), s[i]("click", this), t.PointerEvent && (s.style.touchAction = n)
                    }
                }, n._touchActionValue = "none", n.pointerDown = function(t, e) {
                    this.okayPointerDown(t) && (this.pointerDownPointer = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    }, t.preventDefault(), this.pointerDownBlur(), this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]))
                };
                var r = {
                        TEXTAREA: !0,
                        INPUT: !0,
                        SELECT: !0,
                        OPTION: !0
                    },
                    s = {
                        radio: !0,
                        checkbox: !0,
                        button: !0,
                        submit: !0,
                        image: !0,
                        file: !0
                    };
                return n.okayPointerDown = function(t) {
                    var e = r[t.target.nodeName],
                        i = s[t.target.type],
                        n = !e || i;
                    return n || this._pointerReset(), n
                }, n.pointerDownBlur = function() {
                    var t = document.activeElement;
                    t && t.blur && t != document.body && t.blur()
                }, n.pointerMove = function(t, e) {
                    var i = this._dragPointerMove(t, e);
                    this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i)
                }, n._dragPointerMove = function(t, e) {
                    var i = {
                        x: e.pageX - this.pointerDownPointer.pageX,
                        y: e.pageY - this.pointerDownPointer.pageY
                    };
                    return !this.isDragging && this.hasDragStarted(i) && this._dragStart(t, e), i
                }, n.hasDragStarted = function(t) {
                    return Math.abs(t.x) > 3 || Math.abs(t.y) > 3
                }, n.pointerUp = function(t, e) {
                    this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e)
                }, n._dragPointerUp = function(t, e) {
                    this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
                }, n._dragStart = function(t, e) {
                    this.isDragging = !0, this.isPreventingClicks = !0, this.dragStart(t, e)
                }, n.dragStart = function(t, e) {
                    this.emitEvent("dragStart", [t, e])
                }, n._dragMove = function(t, e, i) {
                    this.isDragging && this.dragMove(t, e, i)
                }, n.dragMove = function(t, e, i) {
                    t.preventDefault(), this.emitEvent("dragMove", [t, e, i])
                }, n._dragEnd = function(t, e) {
                    this.isDragging = !1, setTimeout(function() {
                        delete this.isPreventingClicks
                    }.bind(this)), this.dragEnd(t, e)
                }, n.dragEnd = function(t, e) {
                    this.emitEvent("dragEnd", [t, e])
                }, n.onclick = function(t) {
                    this.isPreventingClicks && t.preventDefault()
                }, n._staticClick = function(t, e) {
                    this.isIgnoringMouseUp && "mouseup" == t.type || (this.staticClick(t, e), "mouseup" != t.type && (this.isIgnoringMouseUp = !0, setTimeout(function() {
                        delete this.isIgnoringMouseUp
                    }.bind(this), 400)))
                }, n.staticClick = function(t, e) {
                    this.emitEvent("staticClick", [t, e])
                }, i.getPointerPoint = e.getPointerPoint, i
            }(s, t)
        }.apply(e, n)) || (t.exports = r)
    }(window)
}, function(t, e, i) {
    var n, r;
    window, n = [i(1), i(5), i(0)], void 0 === (r = function(t, e, i) {
        return function(t, e, i, n) {
            "use strict";
            var r = "http://www.w3.org/2000/svg";

            function s(t, e) {
                this.direction = t, this.parent = e, this._create()
            }
            s.prototype = Object.create(i.prototype), s.prototype._create = function() {
                this.isEnabled = !0, this.isPrevious = -1 == this.direction;
                var t = this.parent.options.rightToLeft ? 1 : -1;
                this.isLeft = this.direction == t;
                var e = this.element = document.createElement("button");
                e.className = "flickity-button flickity-prev-next-button", e.className += this.isPrevious ? " previous" : " next", e.setAttribute("type", "button"), this.disable(), e.setAttribute("aria-label", this.isPrevious ? "Previous" : "Next");
                var i = this.createSVG();
                e.appendChild(i), this.parent.on("select", this.update.bind(this)), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
            }, s.prototype.activate = function() {
                this.bindStartEvent(this.element), this.element.addEventListener("click", this), this.parent.element.appendChild(this.element)
            }, s.prototype.deactivate = function() {
                this.parent.element.removeChild(this.element), this.unbindStartEvent(this.element), this.element.removeEventListener("click", this)
            }, s.prototype.createSVG = function() {
                var t = document.createElementNS(r, "svg");
                t.setAttribute("class", "flickity-button-icon"), t.setAttribute("viewBox", "0 0 100 100");
                var e, i = document.createElementNS(r, "path"),
                    n = "string" == typeof(e = this.parent.options.arrowShape) ? e : "M " + e.x0 + ",50 L " + e.x1 + "," + (e.y1 + 50) + " L " + e.x2 + "," + (e.y2 + 50) + " L " + e.x3 + ",50  L " + e.x2 + "," + (50 - e.y2) + " L " + e.x1 + "," + (50 - e.y1) + " Z";
                return i.setAttribute("d", n), i.setAttribute("class", "arrow"), this.isLeft || i.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(i), t
            }, s.prototype.handleEvent = n.handleEvent, s.prototype.onclick = function() {
                if (this.isEnabled) {
                    this.parent.uiChange();
                    var t = this.isPrevious ? "previous" : "next";
                    this.parent[t]()
                }
            }, s.prototype.enable = function() {
                this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0)
            }, s.prototype.disable = function() {
                this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1)
            }, s.prototype.update = function() {
                var t = this.parent.slides;
                if (this.parent.options.wrapAround && t.length > 1) this.enable();
                else {
                    var e = t.length ? t.length - 1 : 0,
                        i = this.isPrevious ? 0 : e;
                    this[this.parent.selectedIndex == i ? "disable" : "enable"]()
                }
            }, s.prototype.destroy = function() {
                this.deactivate(), this.allOff()
            }, n.extend(e.defaults, {
                prevNextButtons: !0,
                arrowShape: {
                    x0: 10,
                    x1: 60,
                    y1: 50,
                    x2: 70,
                    y2: 40,
                    x3: 30
                }
            }), e.createMethods.push("_createPrevNextButtons");
            var o = e.prototype;
            return o._createPrevNextButtons = function() {
                this.options.prevNextButtons && (this.prevButton = new s(-1, this), this.nextButton = new s(1, this), this.on("activate", this.activatePrevNextButtons))
            }, o.activatePrevNextButtons = function() {
                this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons)
            }, o.deactivatePrevNextButtons = function() {
                this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons)
            }, e.PrevNextButton = s, e
        }(0, t, e, i)
    }.apply(e, n)) || (t.exports = r)
}, function(t, e, i) {
    var n, r;
    window, n = [i(1), i(5), i(0)], void 0 === (r = function(t, e, i) {
        return function(t, e, i, n) {
            "use strict";

            function r(t) {
                this.parent = t, this._create()
            }
            r.prototype = Object.create(i.prototype), r.prototype._create = function() {
                this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", this.dots = [], this.handleClick = this.onClick.bind(this), this.on("pointerDown", this.parent.childUIPointerDown.bind(this.parent))
            }, r.prototype.activate = function() {
                this.setDots(), this.holder.addEventListener("click", this.handleClick), this.bindStartEvent(this.holder), this.parent.element.appendChild(this.holder)
            }, r.prototype.deactivate = function() {
                this.holder.removeEventListener("click", this.handleClick), this.unbindStartEvent(this.holder), this.parent.element.removeChild(this.holder)
            }, r.prototype.setDots = function() {
                var t = this.parent.slides.length - this.dots.length;
                t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t)
            }, r.prototype.addDots = function(t) {
                for (var e = document.createDocumentFragment(), i = [], n = this.dots.length, r = n + t, s = n; s < r; s++) {
                    var o = document.createElement("li");
                    o.className = "dot", o.setAttribute("aria-label", "Page dot " + (s + 1)), e.appendChild(o), i.push(o)
                }
                this.holder.appendChild(e), this.dots = this.dots.concat(i)
            }, r.prototype.removeDots = function(t) {
                this.dots.splice(this.dots.length - t, t).forEach((function(t) {
                    this.holder.removeChild(t)
                }), this)
            }, r.prototype.updateSelected = function() {
                this.selectedDot && (this.selectedDot.className = "dot", this.selectedDot.removeAttribute("aria-current")), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected", this.selectedDot.setAttribute("aria-current", "step"))
            }, r.prototype.onTap = r.prototype.onClick = function(t) {
                var e = t.target;
                if ("LI" == e.nodeName) {
                    this.parent.uiChange();
                    var i = this.dots.indexOf(e);
                    this.parent.select(i)
                }
            }, r.prototype.destroy = function() {
                this.deactivate(), this.allOff()
            }, e.PageDots = r, n.extend(e.defaults, {
                pageDots: !0
            }), e.createMethods.push("_createPageDots");
            var s = e.prototype;
            return s._createPageDots = function() {
                this.options.pageDots && (this.pageDots = new r(this), this.on("activate", this.activatePageDots), this.on("select", this.updateSelectedPageDots), this.on("cellChange", this.updatePageDots), this.on("resize", this.updatePageDots), this.on("deactivate", this.deactivatePageDots))
            }, s.activatePageDots = function() {
                this.pageDots.activate()
            }, s.updateSelectedPageDots = function() {
                this.pageDots.updateSelected()
            }, s.updatePageDots = function() {
                this.pageDots.setDots()
            }, s.deactivatePageDots = function() {
                this.pageDots.deactivate()
            }, e.PageDots = r, e
        }(0, t, e, i)
    }.apply(e, n)) || (t.exports = r)
}, function(t, e, i) {
    var n, r;
    window, n = [i(3), i(0), i(1)], void 0 === (r = function(t, e, i) {
        return function(t, e, i) {
            "use strict";

            function n(t) {
                this.parent = t, this.state = "stopped", this.onVisibilityChange = this.visibilityChange.bind(this), this.onVisibilityPlay = this.visibilityPlay.bind(this)
            }
            n.prototype = Object.create(t.prototype), n.prototype.play = function() {
                "playing" != this.state && (document.hidden ? document.addEventListener("visibilitychange", this.onVisibilityPlay) : (this.state = "playing", document.addEventListener("visibilitychange", this.onVisibilityChange), this.tick()))
            }, n.prototype.tick = function() {
                if ("playing" == this.state) {
                    var t = this.parent.options.autoPlay;
                    t = "number" == typeof t ? t : 3e3;
                    var e = this;
                    this.clear(), this.timeout = setTimeout((function() {
                        e.parent.next(!0), e.tick()
                    }), t)
                }
            }, n.prototype.stop = function() {
                this.state = "stopped", this.clear(), document.removeEventListener("visibilitychange", this.onVisibilityChange)
            }, n.prototype.clear = function() {
                clearTimeout(this.timeout)
            }, n.prototype.pause = function() {
                "playing" == this.state && (this.state = "paused", this.clear())
            }, n.prototype.unpause = function() {
                "paused" == this.state && this.play()
            }, n.prototype.visibilityChange = function() {
                this[document.hidden ? "pause" : "unpause"]()
            }, n.prototype.visibilityPlay = function() {
                this.play(), document.removeEventListener("visibilitychange", this.onVisibilityPlay)
            }, e.extend(i.defaults, {
                pauseAutoPlayOnHover: !0
            }), i.createMethods.push("_createPlayer");
            var r = i.prototype;
            return r._createPlayer = function() {
                this.player = new n(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer)
            }, r.activatePlayer = function() {
                this.options.autoPlay && (this.player.play(), this.element.addEventListener("mouseenter", this))
            }, r.playPlayer = function() {
                this.player.play()
            }, r.stopPlayer = function() {
                this.player.stop()
            }, r.pausePlayer = function() {
                this.player.pause()
            }, r.unpausePlayer = function() {
                this.player.unpause()
            }, r.deactivatePlayer = function() {
                this.player.stop(), this.element.removeEventListener("mouseenter", this)
            }, r.onmouseenter = function() {
                this.options.pauseAutoPlayOnHover && (this.player.pause(), this.element.addEventListener("mouseleave", this))
            }, r.onmouseleave = function() {
                this.player.unpause(), this.element.removeEventListener("mouseleave", this)
            }, i.Player = n, i
        }(t, e, i)
    }.apply(e, n)) || (t.exports = r)
}, function(t, e, i) {
    var n, r;
    window, n = [i(1), i(0)], void 0 === (r = function(t, e) {
        return function(t, e, i) {
            "use strict";
            var n = e.prototype;
            return n.insert = function(t, e) {
                var i = this._makeCells(t);
                if (i && i.length) {
                    var n = this.cells.length;
                    e = void 0 === e ? n : e;
                    var r = function(t) {
                            var e = document.createDocumentFragment();
                            return t.forEach((function(t) {
                                e.appendChild(t.element)
                            })), e
                        }(i),
                        s = e == n;
                    if (s) this.slider.appendChild(r);
                    else {
                        var o = this.cells[e].element;
                        this.slider.insertBefore(r, o)
                    }
                    if (0 === e) this.cells = i.concat(this.cells);
                    else if (s) this.cells = this.cells.concat(i);
                    else {
                        var a = this.cells.splice(e, n - e);
                        this.cells = this.cells.concat(i).concat(a)
                    }
                    this._sizeCells(i), this.cellChange(e, !0)
                }
            }, n.append = function(t) {
                this.insert(t, this.cells.length)
            }, n.prepend = function(t) {
                this.insert(t, 0)
            }, n.remove = function(t) {
                var e = this.getCells(t);
                if (e && e.length) {
                    var n = this.cells.length - 1;
                    e.forEach((function(t) {
                        t.remove();
                        var e = this.cells.indexOf(t);
                        n = Math.min(e, n), i.removeFrom(this.cells, t)
                    }), this), this.cellChange(n, !0)
                }
            }, n.cellSizeChange = function(t) {
                var e = this.getCell(t);
                if (e) {
                    e.getSize();
                    var i = this.cells.indexOf(e);
                    this.cellChange(i)
                }
            }, n.cellChange = function(t, e) {
                var i = this.selectedElement;
                this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize();
                var n = this.getCell(i);
                n && (this.selectedIndex = this.getCellSlideIndex(n)), this.selectedIndex = Math.min(this.slides.length - 1, this.selectedIndex), this.emitEvent("cellChange", [t]), this.select(this.selectedIndex), e && this.positionSliderAtSelected()
            }, e
        }(0, t, e)
    }.apply(e, n)) || (t.exports = r)
}, function(t, e, i) {
    var n, r;
    window, n = [i(1), i(0)], void 0 === (r = function(t, e) {
        return function(t, e, i) {
            "use strict";
            e.createMethods.push("_createLazyload");
            var n = e.prototype;

            function r(t, e) {
                this.img = t, this.flickity = e, this.load()
            }
            return n._createLazyload = function() {
                this.on("select", this.lazyLoad)
            }, n.lazyLoad = function() {
                var t = this.options.lazyLoad;
                if (t) {
                    var e = "number" == typeof t ? t : 0,
                        n = this.getAdjacentCellElements(e),
                        s = [];
                    n.forEach((function(t) {
                        var e = function(t) {
                            if ("IMG" == t.nodeName) {
                                var e = t.getAttribute("data-flickity-lazyload"),
                                    n = t.getAttribute("data-flickity-lazyload-src"),
                                    r = t.getAttribute("data-flickity-lazyload-srcset");
                                if (e || n || r) return [t]
                            }
                            var s = t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");
                            return i.makeArray(s)
                        }(t);
                        s = s.concat(e)
                    })), s.forEach((function(t) {
                        new r(t, this)
                    }), this)
                }
            }, r.prototype.handleEvent = i.handleEvent, r.prototype.load = function() {
                this.img.addEventListener("load", this), this.img.addEventListener("error", this);
                var t = this.img.getAttribute("data-flickity-lazyload") || this.img.getAttribute("data-flickity-lazyload-src"),
                    e = this.img.getAttribute("data-flickity-lazyload-srcset");
                this.img.src = t, e && this.img.setAttribute("srcset", e), this.img.removeAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload-src"), this.img.removeAttribute("data-flickity-lazyload-srcset")
            }, r.prototype.onload = function(t) {
                this.complete(t, "flickity-lazyloaded")
            }, r.prototype.onerror = function(t) {
                this.complete(t, "flickity-lazyerror")
            }, r.prototype.complete = function(t, e) {
                this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
                var i = this.flickity.getParentCell(this.img),
                    n = i && i.element;
                this.flickity.cellSizeChange(n), this.img.classList.add(e), this.flickity.dispatchEvent("lazyLoad", t, n)
            }, e.LazyLoader = r, e
        }(0, t, e)
    }.apply(e, n)) || (t.exports = r)
}, function(t, e, i) {
    var n, r;
    window, n = [i(2), i(22)], void 0 === (r = function(t, e) {
        return function(t, e, i) {
            "use strict";
            e.createMethods.push("_createImagesLoaded");
            var n = e.prototype;
            return n._createImagesLoaded = function() {
                this.on("activate", this.imagesLoaded)
            }, n.imagesLoaded = function() {
                if (this.options.imagesLoaded) {
                    var t = this;
                    i(this.slider).on("progress", (function(e, i) {
                        var n = t.getParentCell(i.img);
                        t.cellSizeChange(n && n.element), t.options.freeScroll || t.positionSliderAtSelected()
                    }))
                }
            }, e
        }(0, t, e)
    }.apply(e, n)) || (t.exports = r)
}, function(t, e, i) {
    var n, r;

    function s(t) {
        return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    /*!
     * imagesLoaded v4.1.4
     * JavaScript is all like "You images are done yet or what?"
     * MIT License
     */
    ! function(o, a) {
        "use strict";
        n = [i(3)], void 0 === (r = function(t) {
            return function(t, e) {
                var i = t.jQuery,
                    n = t.console;

                function r(t, e) {
                    for (var i in e) t[i] = e[i];
                    return t
                }
                var o = Array.prototype.slice;

                function a(t, e, l) {
                    if (!(this instanceof a)) return new a(t, e, l);
                    var u, h = t;
                    ("string" == typeof t && (h = document.querySelectorAll(t)), h) ? (this.elements = (u = h, Array.isArray(u) ? u : "object" == s(u) && "number" == typeof u.length ? o.call(u) : [u]), this.options = r({}, this.options), "function" == typeof e ? l = e : r(this.options, e), l && this.on("always", l), this.getImages(), i && (this.jqDeferred = new i.Deferred), setTimeout(this.check.bind(this))) : n.error("Bad element for imagesLoaded " + (h || t))
                }
                a.prototype = Object.create(e.prototype), a.prototype.options = {}, a.prototype.getImages = function() {
                    this.images = [], this.elements.forEach(this.addElementImages, this)
                }, a.prototype.addElementImages = function(t) {
                    "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
                    var e = t.nodeType;
                    if (e && l[e]) {
                        for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                            var r = i[n];
                            this.addImage(r)
                        }
                        if ("string" == typeof this.options.background) {
                            var s = t.querySelectorAll(this.options.background);
                            for (n = 0; n < s.length; n++) {
                                var o = s[n];
                                this.addElementBackgroundImages(o)
                            }
                        }
                    }
                };
                var l = {
                    1: !0,
                    9: !0,
                    11: !0
                };

                function u(t) {
                    this.img = t
                }

                function h(t, e) {
                    this.url = t, this.element = e, this.img = new Image
                }
                return a.prototype.addElementBackgroundImages = function(t) {
                    var e = getComputedStyle(t);
                    if (e)
                        for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                            var r = n && n[2];
                            r && this.addBackground(r, t), n = i.exec(e.backgroundImage)
                        }
                }, a.prototype.addImage = function(t) {
                    var e = new u(t);
                    this.images.push(e)
                }, a.prototype.addBackground = function(t, e) {
                    var i = new h(t, e);
                    this.images.push(i)
                }, a.prototype.check = function() {
                    var t = this;

                    function e(e, i, n) {
                        setTimeout((function() {
                            t.progress(e, i, n)
                        }))
                    }
                    this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach((function(t) {
                        t.once("progress", e), t.check()
                    })) : this.complete()
                }, a.prototype.progress = function(t, e, i) {
                    this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && n && n.log("progress: " + i, t, e)
                }, a.prototype.complete = function() {
                    var t = this.hasAnyBroken ? "fail" : "done";
                    if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                        var e = this.hasAnyBroken ? "reject" : "resolve";
                        this.jqDeferred[e](this)
                    }
                }, u.prototype = Object.create(e.prototype), u.prototype.check = function() {
                    this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
                }, u.prototype.getIsImageComplete = function() {
                    return this.img.complete && this.img.naturalWidth
                }, u.prototype.confirm = function(t, e) {
                    this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
                }, u.prototype.handleEvent = function(t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t)
                }, u.prototype.onload = function() {
                    this.confirm(!0, "onload"), this.unbindEvents()
                }, u.prototype.onerror = function() {
                    this.confirm(!1, "onerror"), this.unbindEvents()
                }, u.prototype.unbindEvents = function() {
                    this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
                }, h.prototype = Object.create(u.prototype), h.prototype.check = function() {
                    this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
                }, h.prototype.unbindEvents = function() {
                    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
                }, h.prototype.confirm = function(t, e) {
                    this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
                }, a.makeJQueryPlugin = function(e) {
                    (e = e || t.jQuery) && ((i = e).fn.imagesLoaded = function(t, e) {
                        return new a(this, t, e).jqDeferred.promise(i(this))
                    })
                }, a.makeJQueryPlugin(), a
            }(o, t)
        }.apply(e, n)) || (t.exports = r)
    }("undefined" != typeof window ? window : this)
}, function(t, e, i) {
    ! function(e) {
        var i, n, r = !1;

        function s(t) {
            if ("undefined" != typeof document && !r) {
                var e = document.documentElement;
                n = window.pageYOffset, document.documentElement.scrollHeight > window.innerHeight ? e.style.width = "calc(100% - " + function() {
                    if (void 0 !== i) return i;
                    var t = document.documentElement,
                        e = document.createElement("div");
                    return e.setAttribute("style", "width:99px;height:99px;position:absolute;top:-9999px;overflow:scroll;"), t.appendChild(e), i = e.offsetWidth - e.clientWidth, t.removeChild(e), i
                }() + "px)" : e.style.width = "100%", e.style.position = "fixed", e.style.top = -n + "px", e.style.overflow = "hidden", r = !0
            }
        }

        function o() {
            if ("undefined" != typeof document && r) {
                var t = document.documentElement;
                t.style.width = "", t.style.position = "", t.style.top = "", t.style.overflow = "", window.scroll(0, n), r = !1
            }
        }
        var a = {
            on: s,
            off: o,
            toggle: function() {
                r ? o() : s()
            }
        };
        void 0 !== t.exports ? t.exports = a : e.noScroll = a
    }(this)
}, function(t, e, i) {
    "use strict";

    function n(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    i.r(e);
    var r = function() {
            function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var e = this;
                e.refreshBreakpoint(), window.onresize = function(t) {
                    e.refreshBreakpoint()
                }
            }
            var e, i, r;
            return e = t, (i = [{
                key: "refreshBreakpoint",
                value: function() {
                    window.breakpoint = window.getComputedStyle(document.querySelector("body"), ":before").getPropertyValue("content").replace(/\"|\'/g, "")
                }
            }]) && n(e.prototype, i), r && n(e, r), t
        }(),
        s = i(9),
        o = i.n(s),
        a = i(4),
        l = i.n(a);

    function u(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    var h = function() {
            function t(e) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var i = this;
                i.slider = e, i.nextArrow = i.slider.querySelector(".js-quote-slider-next"), i.prevArrow = i.slider.querySelector(".js-quote-slider-prev");
                i.quotesSlider = new l.a(i.slider.querySelector(".js-quotes-quotes"), {
                    cellAlign: "center",
                    draggable: !1,
                    fade: !0,
                    pageDots: !1,
                    prevNextButtons: !1,
                    initialIndex: 0,
                    wrapAround: !1,
                    selectedAttraction: .01
                }), i.teaserSlider = new l.a(i.slider.querySelector(".js-quotes-teasers"), {
                    cellAlign: "center",
                    draggable: !1,
                    pageDots: !1,
                    prevNextButtons: !1,
                    initialIndex: 1,
                    wrapAround: !1,
                    selectedAttraction: .01
                }), i.imageSlider = new l.a(i.slider.querySelector(".js-quotes-images"), {
                    cellAlign: "center",
                    draggable: !1,
                    pageDots: !1,
                    prevNextButtons: !1,
                    initialIndex: 0,
                    wrapAround: !1,
                    selectedAttraction: .01,
                    on: {
                        ready: function() {
                            i.setCurrentSlide(this.selectedIndex), i.setSlideCount(this.slides.length)
                        }
                    }
                }), i.imageSlider.on("change", (function(t) {
                    i.onSlideChange(t)
                })), i.nextArrow.addEventListener("click", (function(t) {
                    t.preventDefault(), i.imageSlider.next()
                })), i.prevArrow.addEventListener("click", (function(t) {
                    t.preventDefault(), i.imageSlider.previous()
                })), i.slider.querySelectorAll(".js-quotes-teasers .carousel-item").forEach((function(t) {
                    t.addEventListener("click", (function(t) {
                        t.preventDefault(), i.imageSlider.next()
                    }))
                }))
            }
            var e, i, n;
            return e = t, (i = [{
                key: "onSlideChange",
                value: function(t) {
                    this.setCurrentSlide(t), this.quotesSlider.select(t), this.teaserSlider.select(t + 1)
                }
            }, {
                key: "setCurrentSlide",
                value: function(t) {
                    this.slider.querySelector(".js-quote-slider-current").textContent = t + 1, 0 === t ? this.prevArrow.classList.add("is-disabled") : t == this.slideCount - 1 ? this.nextArrow.classList.add("is-disabled") : (this.prevArrow.classList.remove("is-disabled"), this.nextArrow.classList.remove("is-disabled"))
                }
            }, {
                key: "setSlideCount",
                value: function(t) {
                    this.slideCount = t, this.slider.querySelector(".js-quote-slider-count").textContent = t
                }
            }]) && u(e.prototype, i), n && u(e, n), t
        }(),
        c = function() {
            return (c = Object.assign || function(t) {
                for (var e, i = 1, n = arguments.length; i < n; i++)
                    for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t
            }).apply(this, arguments)
        },
        d = function() {
            function t(t, e, i) {
                var n = this;
                this.endVal = e, this.options = i, this.version = "2.1.0", this.defaults = {
                    startVal: 0,
                    decimalPlaces: 0,
                    duration: 2,
                    useEasing: !0,
                    useGrouping: !0,
                    smartEasingThreshold: 999,
                    smartEasingAmount: 333,
                    separator: ",",
                    decimal: ".",
                    prefix: "",
                    suffix: "",
                    enableScrollSpy: !1,
                    scrollSpyDelay: 200
                }, this.finalEndVal = null, this.useEasing = !0, this.countDown = !1, this.error = "", this.startVal = 0, this.paused = !0, this.count = function(t) {
                    n.startTime || (n.startTime = t);
                    var e = t - n.startTime;
                    n.remaining = n.duration - e, n.useEasing ? n.countDown ? n.frameVal = n.startVal - n.easingFn(e, 0, n.startVal - n.endVal, n.duration) : n.frameVal = n.easingFn(e, n.startVal, n.endVal - n.startVal, n.duration) : n.countDown ? n.frameVal = n.startVal - (n.startVal - n.endVal) * (e / n.duration) : n.frameVal = n.startVal + (n.endVal - n.startVal) * (e / n.duration), n.countDown ? n.frameVal = n.frameVal < n.endVal ? n.endVal : n.frameVal : n.frameVal = n.frameVal > n.endVal ? n.endVal : n.frameVal, n.frameVal = Number(n.frameVal.toFixed(n.options.decimalPlaces)), n.printValue(n.frameVal), e < n.duration ? n.rAF = requestAnimationFrame(n.count) : null !== n.finalEndVal ? n.update(n.finalEndVal) : n.callback && n.callback()
                }, this.formatNumber = function(t) {
                    var e, i, r, s, o = t < 0 ? "-" : "";
                    e = Math.abs(t).toFixed(n.options.decimalPlaces);
                    var a = (e += "").split(".");
                    if (i = a[0], r = a.length > 1 ? n.options.decimal + a[1] : "", n.options.useGrouping) {
                        s = "";
                        for (var l = 0, u = i.length; l < u; ++l) 0 !== l && l % 3 == 0 && (s = n.options.separator + s), s = i[u - l - 1] + s;
                        i = s
                    }
                    return n.options.numerals && n.options.numerals.length && (i = i.replace(/[0-9]/g, (function(t) {
                        return n.options.numerals[+t]
                    })), r = r.replace(/[0-9]/g, (function(t) {
                        return n.options.numerals[+t]
                    }))), o + n.options.prefix + i + r + n.options.suffix
                }, this.easeOutExpo = function(t, e, i, n) {
                    return i * (1 - Math.pow(2, -10 * t / n)) * 1024 / 1023 + e
                }, this.options = c(c({}, this.defaults), i), this.formattingFn = this.options.formattingFn ? this.options.formattingFn : this.formatNumber, this.easingFn = this.options.easingFn ? this.options.easingFn : this.easeOutExpo, this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.endVal = this.validateValue(e), this.options.decimalPlaces = Math.max(this.options.decimalPlaces), this.resetDuration(), this.options.separator = String(this.options.separator), this.useEasing = this.options.useEasing, "" === this.options.separator && (this.options.useGrouping = !1), this.el = "string" == typeof t ? document.getElementById(t) : t, this.el ? this.printValue(this.startVal) : this.error = "[CountUp] target is null or undefined", void 0 !== window && this.options.enableScrollSpy && (this.error ? console.error(this.error, t) : (window.onScrollFns = window.onScrollFns || [], window.onScrollFns.push((function() {
                    return n.handleScroll(n)
                })), window.onscroll = function() {
                    window.onScrollFns.forEach((function(t) {
                        return t()
                    }))
                }, this.handleScroll(this)))
            }
            return t.prototype.handleScroll = function(t) {
                if (t && window) {
                    var e = window.innerHeight + window.scrollY,
                        i = t.el.offsetTop + t.el.offsetHeight;
                    i < e && i > window.scrollY && t.paused ? (t.paused = !1, setTimeout((function() {
                        return t.start()
                    }), t.options.scrollSpyDelay)) : window.scrollY > i && !t.paused && t.reset()
                }
            }, t.prototype.determineDirectionAndSmartEasing = function() {
                var t = this.finalEndVal ? this.finalEndVal : this.endVal;
                this.countDown = this.startVal > t;
                var e = t - this.startVal;
                if (Math.abs(e) > this.options.smartEasingThreshold) {
                    this.finalEndVal = t;
                    var i = this.countDown ? 1 : -1;
                    this.endVal = t + i * this.options.smartEasingAmount, this.duration = this.duration / 2
                } else this.endVal = t, this.finalEndVal = null;
                this.finalEndVal ? this.useEasing = !1 : this.useEasing = this.options.useEasing
            }, t.prototype.start = function(t) {
                this.error || (this.callback = t, this.duration > 0 ? (this.determineDirectionAndSmartEasing(), this.paused = !1, this.rAF = requestAnimationFrame(this.count)) : this.printValue(this.endVal))
            }, t.prototype.pauseResume = function() {
                this.paused ? (this.startTime = null, this.duration = this.remaining, this.startVal = this.frameVal, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count)) : cancelAnimationFrame(this.rAF), this.paused = !this.paused
            }, t.prototype.reset = function() {
                cancelAnimationFrame(this.rAF), this.paused = !0, this.resetDuration(), this.startVal = this.validateValue(this.options.startVal), this.frameVal = this.startVal, this.printValue(this.startVal)
            }, t.prototype.update = function(t) {
                cancelAnimationFrame(this.rAF), this.startTime = null, this.endVal = this.validateValue(t), this.endVal !== this.frameVal && (this.startVal = this.frameVal, this.finalEndVal || this.resetDuration(), this.finalEndVal = null, this.determineDirectionAndSmartEasing(), this.rAF = requestAnimationFrame(this.count))
            }, t.prototype.printValue = function(t) {
                var e = this.formattingFn(t);
                "INPUT" === this.el.tagName ? this.el.value = e : "text" === this.el.tagName || "tspan" === this.el.tagName ? this.el.textContent = e : this.el.innerHTML = e
            }, t.prototype.ensureNumber = function(t) {
                return "number" == typeof t && !isNaN(t)
            }, t.prototype.validateValue = function(t) {
                var e = Number(t);
                return this.ensureNumber(e) ? e : (this.error = "[CountUp] invalid start or end value: " + t, null)
            }, t.prototype.resetDuration = function() {
                this.startTime = null, this.duration = 1e3 * Number(this.options.duration), this.remaining = this.duration
            }, t
        }();

    function p(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function f(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    var g = function() {
        function t(e) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = arguments.length > 2 ? arguments[2] : void 0;
            p(this, t), e && (this.element = e, this.triggerOffset = i, this.wasTriggered = !1, this.callback = n, this.init())
        }
        var e, i, n;
        return e = t, (i = [{
            key: "init",
            value: function() {
                var t = this;
                window.addEventListener("load", (function() {
                    window.addEventListener("scroll", (function() {
                        t.checkViewport()
                    })), window.addEventListener("resize", (function() {
                        t.checkViewport()
                    }))
                }))
            }
        }, {
            key: "isInViewport",
            value: function() {
                var t = this.element.getBoundingClientRect(),
                    e = window.scrollY,
                    i = window.innerHeight,
                    n = e + i,
                    r = t.top + e,
                    s = this.element.offsetHeight,
                    o = r + s;
                return r >= e && r < n - this.triggerOffset || o > e + this.triggerOffset && o <= n || s > i && r <= e && o >= n
            }
        }, {
            key: "checkViewport",
            value: function() {
                this.isInViewport() && !this.wasTriggered && (this.wasTriggered = !0, this.callback && this.callback())
            }
        }]) && f(e.prototype, i), n && f(e, n), t
    }();

    function m(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    new(function() {
        function t() {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var e = document.querySelectorAll(".js-count-up");
            e.length && (this.elements = e, this.init())
        }
        var e, i, n;
        return e = t, (i = [{
            key: "init",
            value: function() {
                this.elements.forEach((function(t) {
                    var e = t.dataset.type,
                        i = parseInt(t.dataset.number),
                        n = 0;
                    "float" === e && (i = parseFloat(t.dataset.number).toFixed(2), n = 1);
                    var r = new d(t, i, {
                        decimalPlaces: n,
                        duration: 4,
                        separator: ",",
                        decimal: "."
                    });
                    r.error || new g(t, 100, (function() {
                        r.start()
                    }))
                }))
            }
        }]) && m(e.prototype, i), n && m(e, n), t
    }());
    var v = function() {
        return (v = Object.assign || function(t) {
            for (var e, i = 1, n = arguments.length; i < n; i++)
                for (var r in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
            return t
        }).apply(this, arguments)
    };
    ! function() {
        if ("function" == typeof window.CustomEvent) return !1;
        window.CustomEvent = function(t, e) {
            e = e || {
                bubbles: !1,
                cancelable: !1,
                detail: null
            };
            var i = document.createEvent("CustomEvent");
            return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i
        }
    }(), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector);
    var D = function() {
        function t(t) {
            return this.cssVenderPrefixes = ["TransitionDuration", "TransitionTimingFunction", "Transform", "Transition"], this.selector = this._getSelector(t), this.firstElement = this._getFirstEl(), this
        }
        return t.generateUUID = function() {
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
                var e = 16 * Math.random() | 0;
                return ("x" == t ? e : 3 & e | 8).toString(16)
            }))
        }, t.prototype._getSelector = function(t, e) {
            return void 0 === e && (e = document), "string" != typeof t ? t : (e = e || document, "#" === t.substring(0, 1) ? e.querySelector(t) : e.querySelectorAll(t))
        }, t.prototype._each = function(t) {
            return this.selector ? (void 0 !== this.selector.length ? [].forEach.call(this.selector, t) : t(this.selector, 0), this) : this
        }, t.prototype._setCssVendorPrefix = function(t, e, i) {
            var n = e.replace(/-([a-z])/gi, (function(t, e) {
                return e.toUpperCase()
            })); - 1 !== this.cssVenderPrefixes.indexOf(n) ? (t.style[n.charAt(0).toLowerCase() + n.slice(1)] = i, t.style["webkit" + n] = i, t.style["moz" + n] = i, t.style["ms" + n] = i, t.style["o" + n] = i) : t.style[n] = i
        }, t.prototype._getFirstEl = function() {
            return this.selector && void 0 !== this.selector.length ? this.selector[0] : this.selector
        }, t.prototype.isEventMatched = function(t, e) {
            var i = e.split(".");
            return t.split(".").filter((function(t) {
                return t
            })).every((function(t) {
                return -1 !== i.indexOf(t)
            }))
        }, t.prototype.attr = function(t, e) {
            return void 0 === e ? this.firstElement ? this.firstElement.getAttribute(t) : "" : (this._each((function(i) {
                i.setAttribute(t, e)
            })), this)
        }, t.prototype.find = function(t) {
            return y(this._getSelector(t, this.selector))
        }, t.prototype.first = function() {
            return this.selector && void 0 !== this.selector.length ? y(this.selector[0]) : y(this.selector)
        }, t.prototype.eq = function(t) {
            return y(this.selector[t])
        }, t.prototype.parent = function() {
            return y(this.selector.parentElement)
        }, t.prototype.get = function() {
            return this._getFirstEl()
        }, t.prototype.removeAttr = function(t) {
            var e = t.split(" ");
            return this._each((function(t) {
                e.forEach((function(e) {
                    return t.removeAttribute(e)
                }))
            })), this
        }, t.prototype.wrap = function(t) {
            if (!this.firstElement) return this;
            var e = document.createElement("div");
            return e.className = t, this.firstElement.parentNode.insertBefore(e, this.firstElement), this.firstElement.parentNode.removeChild(this.firstElement), e.appendChild(this.firstElement), this
        }, t.prototype.addClass = function(t) {
            return void 0 === t && (t = ""), this._each((function(e) {
                t.split(" ").forEach((function(t) {
                    e.classList.add(t)
                }))
            })), this
        }, t.prototype.removeClass = function(t) {
            return this._each((function(e) {
                t.split(" ").forEach((function(t) {
                    e.classList.remove(t)
                }))
            })), this
        }, t.prototype.hasClass = function(t) {
            return !!this.firstElement && this.firstElement.classList.contains(t)
        }, t.prototype.hasAttribute = function(t) {
            return !!this.firstElement && this.firstElement.hasAttribute(t)
        }, t.prototype.toggleClass = function(t) {
            return this.firstElement ? (this.hasClass(t) ? this.removeClass(t) : this.addClass(t), this) : this
        }, t.prototype.css = function(t, e) {
            var i = this;
            return this._each((function(n) {
                i._setCssVendorPrefix(n, t, e)
            })), this
        }, t.prototype.on = function(e, i) {
            var n = this;
            return this.selector ? (e.split(" ").forEach((function(e) {
                Array.isArray(t.eventListeners[e]) || (t.eventListeners[e] = []), t.eventListeners[e].push(i), n.selector.addEventListener(e.split(".")[0], i)
            })), this) : this
        }, t.prototype.once = function(t, e) {
            var i = this;
            return this.on(t, (function() {
                i.off(t), e(t)
            })), this
        }, t.prototype.off = function(e) {
            var i = this;
            return this.selector ? (Object.keys(t.eventListeners).forEach((function(n) {
                i.isEventMatched(e, n) && (t.eventListeners[n].forEach((function(t) {
                    i.selector.removeEventListener(n.split(".")[0], t)
                })), t.eventListeners[n] = [])
            })), this) : this
        }, t.prototype.trigger = function(t, e) {
            if (!this.firstElement) return this;
            var i = new CustomEvent(t.split(".")[0], {
                detail: e || null
            });
            return this.firstElement.dispatchEvent(i), this
        }, t.prototype.load = function(t) {
            var e = this;
            return fetch(t).then((function(t) {
                e.selector.innerHTML = t
            })), this
        }, t.prototype.html = function(t) {
            return void 0 === t ? this.firstElement ? this.firstElement.innerHTML : "" : (this._each((function(e) {
                e.innerHTML = t
            })), this)
        }, t.prototype.append = function(t) {
            return this._each((function(e) {
                "string" == typeof t ? e.insertAdjacentHTML("beforeend", t) : e.appendChild(t)
            })), this
        }, t.prototype.prepend = function(t) {
            return this._each((function(e) {
                e.insertAdjacentHTML("afterbegin", t)
            })), this
        }, t.prototype.remove = function() {
            return this._each((function(t) {
                t.parentNode.removeChild(t)
            })), this
        }, t.prototype.empty = function() {
            return this._each((function(t) {
                t.innerHTML = ""
            })), this
        }, t.prototype.scrollTop = function(t) {
            return void 0 !== t ? (document.body.scrollTop = t, document.documentElement.scrollTop = t, this) : window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
        }, t.prototype.scrollLeft = function(t) {
            return void 0 !== t ? (document.body.scrollLeft = t, document.documentElement.scrollLeft = t, this) : window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
        }, t.prototype.offset = function() {
            if (!this.firstElement) return {
                left: 0,
                top: 0
            };
            var t = this.firstElement.getBoundingClientRect(),
                e = y("body").style().marginLeft;
            return {
                left: t.left - parseFloat(e) + this.scrollLeft(),
                top: t.top + this.scrollTop()
            }
        }, t.prototype.style = function() {
            return this.firstElement ? this.firstElement.currentStyle || window.getComputedStyle(this.firstElement) : {}
        }, t.prototype.width = function() {
            var t = this.style();
            return this.firstElement.clientWidth - parseFloat(t.paddingLeft) - parseFloat(t.paddingRight)
        }, t.prototype.height = function() {
            var t = this.style();
            return this.firstElement.clientHeight - parseFloat(t.paddingTop) - parseFloat(t.paddingBottom)
        }, t.eventListeners = {}, t
    }();

    function y(t) {
        return new D(t)
    }
    var b = ["src", "sources", "subHtml", "subHtmlUrl", "html", "video", "poster", "slideName", "responsive", "srcset", "sizes", "iframe", "downloadUrl", "download", "width", "facebookShareUrl", "tweetText", "iframeTitle", "twitterShareUrl", "pinterestShareUrl", "pinterestText", "fbHtml", "disqusIdentifier", "disqusUrl"];

    function w(t) {
        return "href" === t ? "src" : t = (t = (t = t.replace("data-", "")).charAt(0).toLowerCase() + t.slice(1)).replace(/-([a-z])/g, (function(t) {
            return t[1].toUpperCase()
        }))
    }
    var _ = function(t, e, i, n) {
            void 0 === i && (i = 0);
            var r = y(t).attr("data-lg-size") || n;
            if (r) {
                var s = r.split(",");
                if (s[1])
                    for (var o = window.innerWidth, a = 0; a < s.length; a++) {
                        var l = s[a];
                        if (parseInt(l.split("-")[2], 10) > o) {
                            r = l;
                            break
                        }
                        a === s.length - 1 && (r = l)
                    }
                var u = r.split("-"),
                    h = parseInt(u[0], 10),
                    c = parseInt(u[1], 10),
                    d = e.width(),
                    p = e.height() - i,
                    f = Math.min(d, h),
                    g = Math.min(p, c),
                    m = Math.min(f / h, g / c);
                return {
                    width: h * m,
                    height: c * m
                }
            }
        },
        C = function(t, e, i, n, r) {
            if (r) {
                var s = y(t).find("img").first();
                if (s.get()) {
                    var o = e.get().getBoundingClientRect(),
                        a = o.width,
                        l = e.height() - (i + n),
                        u = s.width(),
                        h = s.height(),
                        c = s.style(),
                        d = (a - u) / 2 - s.offset().left + (parseFloat(c.paddingLeft) || 0) + (parseFloat(c.borderLeft) || 0) + y(window).scrollLeft() + o.left,
                        p = (l - h) / 2 - s.offset().top + (parseFloat(c.paddingTop) || 0) + (parseFloat(c.borderTop) || 0) + y(window).scrollTop() + i;
                    return "translate3d(" + (d *= -1) + "px, " + (p *= -1) + "px, 0) scale3d(" + u / r.width + ", " + h / r.height + ", 1)"
                }
            }
        },
        x = function(t, e, i, n) {
            return '<div class="lg-video-cont lg-has-iframe" style="width:' + t + "; height: " + e + '">\n                    <iframe class="lg-object" frameborder="0" ' + (n ? 'title="' + n + '"' : "") + ' src="' + i + '"  allowfullscreen="true"></iframe>\n                </div>'
        },
        E = function(t, e, i, n, r, s) {
            var o = "<img " + i + " " + (n ? 'srcset="' + n + '"' : "") + "  " + (r ? 'sizes="' + r + '"' : "") + ' class="lg-object lg-image" data-index="' + t + '" src="' + e + '" />',
                a = "";
            s && (a = ("string" == typeof s ? JSON.parse(s) : s).map((function(t) {
                var e = "";
                return Object.keys(t).forEach((function(i) {
                    e += " " + i + '="' + t[i] + '"'
                })), "<source " + e + "></source>"
            })));
            return "" + a + o
        },
        S = function(t) {
            for (var e = [], i = [], n = "", r = 0; r < t.length; r++) {
                var s = t[r].split(" ");
                "" === s[0] && s.splice(0, 1), i.push(s[0]), e.push(s[1])
            }
            for (var o = window.innerWidth, a = 0; a < e.length; a++)
                if (parseInt(e[a], 10) > o) {
                    n = i[a];
                    break
                }
            return n
        },
        F = function(t) {
            return !!t && (!!t.complete && 0 !== t.naturalWidth)
        },
        T = function(t, e, i, n) {
            return '<div class="lg-video-cont ' + (n && n.youtube ? "lg-has-youtube" : n && n.vimeo ? "lg-has-vimeo" : "lg-has-html5") + '" style="' + i + '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="Play video"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>Play video</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' + (e || "") + '\n            <img class="lg-object lg-video-poster" src="' + t + '" />\n        </div>'
        },
        A = function(t, e, i, n) {
            var r = [],
                s = function() {
                    for (var t = 0, e = 0, i = arguments.length; e < i; e++) t += arguments[e].length;
                    var n = Array(t),
                        r = 0;
                    for (e = 0; e < i; e++)
                        for (var s = arguments[e], o = 0, a = s.length; o < a; o++, r++) n[r] = s[o];
                    return n
                }(b, e);
            return [].forEach.call(t, (function(t) {
                for (var e = {}, o = 0; o < t.attributes.length; o++) {
                    var a = t.attributes[o];
                    if (a.specified) {
                        var l = w(a.name),
                            u = "";
                        s.indexOf(l) > -1 && (u = l), u && (e[u] = a.value)
                    }
                }
                var h = y(t),
                    c = h.find("img").first().attr("alt"),
                    d = h.attr("title"),
                    p = n ? h.attr(n) : h.find("img").first().attr("src");
                e.thumb = p, i && !e.subHtml && (e.subHtml = d || c || ""), e.alt = c || d || "", r.push(e)
            })), r
        },
        I = function() {
            return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
        },
        k = {
            mode: "lg-slide",
            easing: "ease",
            speed: 400,
            licenseKey: "0000-0000-000-0000",
            height: "100%",
            width: "100%",
            addClass: "",
            startClass: "lg-start-zoom",
            backdropDuration: 300,
            container: document.body,
            startAnimationDuration: 400,
            zoomFromOrigin: !0,
            hideBarsDelay: 0,
            showBarsAfter: 1e4,
            slideDelay: 0,
            supportLegacyBrowser: !0,
            allowMediaOverlap: !1,
            videoMaxSize: "1280-720",
            defaultCaptionHeight: 0,
            ariaLabelledby: "",
            ariaDescribedby: "",
            closable: !0,
            swipeToClose: !0,
            closeOnTap: !0,
            showCloseIcon: !0,
            showMaximizeIcon: !1,
            loop: !0,
            escKey: !0,
            keyPress: !0,
            controls: !0,
            slideEndAnimation: !0,
            hideControlOnEnd: !1,
            mousewheel: !1,
            getCaptionFromTitleOrAlt: !0,
            appendSubHtmlTo: ".lg-sub-html",
            subHtmlSelectorRelative: !1,
            preload: 2,
            numberOfSlideItemsInDom: 10,
            showAfterLoad: !0,
            selector: "",
            selectWithin: "",
            nextHtml: "",
            prevHtml: "",
            index: 0,
            iframeWidth: "100%",
            iframeHeight: "100%",
            download: !0,
            counter: !0,
            appendCounterTo: ".lg-toolbar",
            swipeThreshold: 50,
            enableSwipe: !0,
            enableDrag: !0,
            dynamic: !1,
            dynamicEl: [],
            extraProps: [],
            exThumbImage: "",
            isMobile: void 0,
            mobileSettings: {
                controls: !1,
                showCloseIcon: !1,
                download: !1
            },
            plugins: []
        },
        L = "lgAfterAppendSlide",
        O = "lgInit",
        P = "lgHasVideo",
        M = "lgContainerResize",
        B = "lgUpdateSlides",
        z = "lgAfterAppendSubHtml",
        N = "lgBeforeOpen",
        V = "lgAfterOpen",
        R = "lgSlideItemLoad",
        q = "lgBeforeSlide",
        H = "lgAfterSlide",
        W = "lgPosterClick",
        j = "lgDragStart",
        G = "lgDragMove",
        Y = "lgDragEnd",
        U = "lgBeforeNextSlide",
        X = "lgBeforePrevSlide",
        $ = "lgBeforeClose",
        Q = "lgAfterClose",
        J = 0,
        K = function() {
            function t(t, e) {
                if (this.lgOpened = !1, this.index = 0, this.plugins = [], this.lGalleryOn = !1, this.lgBusy = !1, this.currentItemsInDom = [], this.prevScrollTop = 0, this.isDummyImageRemoved = !1, this.dragOrSwipeEnabled = !1, this.mediaContainerPosition = {
                        top: 0,
                        bottom: 0
                    }, !t) return this;
                if (J++, this.lgId = J, this.el = t, this.LGel = y(t), this.generateSettings(e), this.buildModules(), this.settings.dynamic && void 0 !== this.settings.dynamicEl && !Array.isArray(this.settings.dynamicEl)) throw "When using dynamic mode, you must also define dynamicEl as an Array.";
                return this.galleryItems = this.getItems(), this.normalizeSettings(), this.init(), this.validateLicense(), this
            }
            return t.prototype.generateSettings = function(t) {
                if (this.settings = v(v({}, k), t), this.settings.isMobile && "function" == typeof this.settings.isMobile ? this.settings.isMobile() : I()) {
                    var e = v(v({}, this.settings.mobileSettings), this.settings.mobileSettings);
                    this.settings = v(v({}, this.settings), e)
                }
            }, t.prototype.normalizeSettings = function() {
                this.settings.slideEndAnimation && (this.settings.hideControlOnEnd = !1), this.settings.closable || (this.settings.swipeToClose = !1), this.zoomFromOrigin = this.settings.zoomFromOrigin, this.settings.dynamic && (this.zoomFromOrigin = !1), this.settings.container || (this.settings.container = document.body), this.settings.preload = Math.min(this.settings.preload, this.galleryItems.length)
            }, t.prototype.init = function() {
                var t = this;
                this.addSlideVideoInfo(this.galleryItems), this.buildStructure(), this.LGel.trigger(O, {
                    instance: this
                }), this.settings.keyPress && this.keyPress(), setTimeout((function() {
                    t.enableDrag(), t.enableSwipe(), t.triggerPosterClick()
                }), 50), this.arrow(), this.settings.mousewheel && this.mousewheel(), this.settings.dynamic || this.openGalleryOnItemClick()
            }, t.prototype.openGalleryOnItemClick = function() {
                for (var t = this, e = function(e) {
                        var n = i.items[e],
                            r = y(n),
                            s = D.generateUUID();
                        r.attr("data-lg-id", s).on("click.lgcustom-item-" + s, (function(i) {
                            i.preventDefault();
                            var r = t.settings.index || e;
                            t.openGallery(r, n)
                        }))
                    }, i = this, n = 0; n < this.items.length; n++) e(n)
            }, t.prototype.buildModules = function() {
                var t = this;
                this.settings.plugins.forEach((function(e) {
                    t.plugins.push(new e(t, y))
                }))
            }, t.prototype.validateLicense = function() {
                this.settings.licenseKey ? "0000-0000-000-0000" === this.settings.licenseKey && console.warn("lightGallery: " + this.settings.licenseKey + " license key is not valid for production use") : console.error("Please provide a valid license key")
            }, t.prototype.getSlideItem = function(t) {
                return y(this.getSlideItemId(t))
            }, t.prototype.getSlideItemId = function(t) {
                return "#lg-item-" + this.lgId + "-" + t
            }, t.prototype.getIdName = function(t) {
                return t + "-" + this.lgId
            }, t.prototype.getElementById = function(t) {
                return y("#" + this.getIdName(t))
            }, t.prototype.manageSingleSlideClassName = function() {
                this.galleryItems.length < 2 ? this.outer.addClass("lg-single-item") : this.outer.removeClass("lg-single-item")
            }, t.prototype.buildStructure = function() {
                var t = this;
                if (!(this.$container && this.$container.get())) {
                    var e = "",
                        i = "";
                    this.settings.controls && (e = '<button type="button" id="' + this.getIdName("lg-prev") + '" aria-label="Previous slide" class="lg-prev lg-icon"> ' + this.settings.prevHtml + ' </button>\n                <button type="button" id="' + this.getIdName("lg-next") + '" aria-label="Next slide" class="lg-next lg-icon"> ' + this.settings.nextHtml + " </button>"), ".lg-item" !== this.settings.appendSubHtmlTo && (i = '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
                    var n = "";
                    this.settings.allowMediaOverlap && (n += "lg-media-overlap ");
                    var r = this.settings.ariaLabelledby ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"' : "",
                        s = this.settings.ariaDescribedby ? 'aria-describedby="' + this.settings.ariaDescribedby + '"' : "",
                        o = "lg-container " + this.settings.addClass + " " + (document.body !== this.settings.container ? "lg-inline" : ""),
                        a = this.settings.closable && this.settings.showCloseIcon ? '<button type="button" aria-label="Close gallery" id="' + this.getIdName("lg-close") + '" class="lg-close lg-icon"></button>' : "",
                        l = this.settings.showMaximizeIcon ? '<button type="button" aria-label="Toggle maximize" id="' + this.getIdName("lg-maximize") + '" class="lg-maximize lg-icon"></button>' : "",
                        u = '\n        <div class="' + o + '" id="' + this.getIdName("lg-container") + '" tabindex="-1" aria-modal="true" ' + r + " " + s + ' role="dialog"\n        >\n            <div id="' + this.getIdName("lg-backdrop") + '" class="lg-backdrop"></div>\n\n            <div id="' + this.getIdName("lg-outer") + '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' + n + ' ">\n\n              <div id="' + this.getIdName("lg-content") + '" class="lg-content">\n                <div id="' + this.getIdName("lg-inner") + '" class="lg-inner">\n                </div>\n                ' + e + '\n              </div>\n                <div id="' + this.getIdName("lg-toolbar") + '" class="lg-toolbar lg-group">\n                    ' + l + "\n                    " + a + "\n                    </div>\n                    " + (".lg-outer" === this.settings.appendSubHtmlTo ? i : "") + '\n                <div id="' + this.getIdName("lg-components") + '" class="lg-components">\n                    ' + (".lg-sub-html" === this.settings.appendSubHtmlTo ? i : "") + "\n                </div>\n            </div>\n        </div>\n        ";
                    y(this.settings.container).css("position", "relative").append(u), this.outer = this.getElementById("lg-outer"), this.$lgComponents = this.getElementById("lg-components"), this.$backdrop = this.getElementById("lg-backdrop"), this.$container = this.getElementById("lg-container"), this.$inner = this.getElementById("lg-inner"), this.$content = this.getElementById("lg-content"), this.$toolbar = this.getElementById("lg-toolbar"), this.$backdrop.css("transition-duration", this.settings.backdropDuration + "ms");
                    var h = this.settings.mode + " ";
                    this.manageSingleSlideClassName(), this.settings.enableDrag && (h += "lg-grab "), this.settings.showAfterLoad && (h += "lg-show-after-load"), this.outer.addClass(h), this.$inner.css("transition-timing-function", this.settings.easing), this.$inner.css("transition-duration", this.settings.speed + "ms"), this.settings.download && this.$toolbar.append('<a id="' + this.getIdName("lg-download") + '" target="_blank" rel="noopener" aria-label="Download" download class="lg-download lg-icon"></a>'), this.counter(), y(window).on("resize.lg.global" + this.lgId + " orientationchange.lg.global" + this.lgId, (function() {
                        t.refreshOnResize()
                    })), this.hideBars(), this.manageCloseGallery(), this.toggleMaximize(), this.initModules()
                }
            }, t.prototype.refreshOnResize = function() {
                if (this.lgOpened) {
                    var t = this.galleryItems[this.index].__slideVideoInfo;
                    this.mediaContainerPosition = this.getMediaContainerPosition();
                    var e = this.mediaContainerPosition,
                        i = e.top,
                        n = e.bottom;
                    if (this.currentImageSize = _(this.items[this.index], this.outer, i + n, t && this.settings.videoMaxSize), t && this.resizeVideoSlide(this.index, this.currentImageSize), this.zoomFromOrigin && !this.isDummyImageRemoved) {
                        var r = this.getDummyImgStyles(this.currentImageSize);
                        this.outer.find(".lg-current .lg-dummy-img").first().attr("style", r)
                    }
                    this.LGel.trigger(M)
                }
            }, t.prototype.resizeVideoSlide = function(t, e) {
                var i = this.getVideoContStyle(e);
                this.getSlideItem(t).find(".lg-video-cont").attr("style", i)
            }, t.prototype.updateSlides = function(t, e) {
                if (this.index > t.length - 1 && (this.index = t.length - 1), 1 === t.length && (this.index = 0), t.length) {
                    var i = this.galleryItems[e].src;
                    this.galleryItems = t, this.updateControls(), this.$inner.empty(), this.currentItemsInDom = [];
                    var n = 0;
                    this.galleryItems.some((function(t, e) {
                        return t.src === i && (n = e, !0)
                    })), this.currentItemsInDom = this.organizeSlideItems(n, -1), this.loadContent(n, !0), this.getSlideItem(n).addClass("lg-current"), this.index = n, this.updateCurrentCounter(n), this.LGel.trigger(B)
                } else this.closeGallery()
            }, t.prototype.getItems = function() {
                if (this.items = [], this.settings.dynamic) return this.settings.dynamicEl || [];
                if ("this" === this.settings.selector) this.items.push(this.el);
                else if (this.settings.selector)
                    if ("string" == typeof this.settings.selector)
                        if (this.settings.selectWithin) {
                            var t = y(this.settings.selectWithin);
                            this.items = t.find(this.settings.selector).get()
                        } else this.items = this.el.querySelectorAll(this.settings.selector);
                else this.items = this.settings.selector;
                else this.items = this.el.children;
                return A(this.items, this.settings.extraProps, this.settings.getCaptionFromTitleOrAlt, this.settings.exThumbImage)
            }, t.prototype.openGallery = function(t, e) {
                var i = this;
                if (void 0 === t && (t = this.settings.index), !this.lgOpened) {
                    this.lgOpened = !0, this.outer.get().focus(), this.outer.removeClass("lg-hide-items"), this.$container.addClass("lg-show");
                    var n = this.getItemsToBeInsertedToDom(t, t);
                    this.currentItemsInDom = n;
                    var r = "";
                    n.forEach((function(t) {
                        r = r + '<div id="' + t + '" class="lg-item"></div>'
                    })), this.$inner.append(r), this.addHtml(t);
                    var s = "";
                    this.mediaContainerPosition = this.getMediaContainerPosition();
                    var o = this.mediaContainerPosition,
                        a = o.top,
                        l = o.bottom;
                    this.settings.allowMediaOverlap || this.setMediaContainerPosition(a, l), this.zoomFromOrigin && e && (this.currentImageSize = _(e, this.outer, a + l, this.galleryItems[t].__slideVideoInfo && this.settings.videoMaxSize), s = C(e, this.outer, a, l, this.currentImageSize)), this.zoomFromOrigin && s || (this.outer.addClass(this.settings.startClass), this.getSlideItem(t).removeClass("lg-complete"));
                    var u = this.settings.zoomFromOrigin ? 100 : this.settings.backdropDuration;
                    setTimeout((function() {
                        i.outer.addClass("lg-components-open")
                    }), u), this.index = t, this.LGel.trigger(N), this.getSlideItem(t).addClass("lg-current"), this.lGalleryOn = !1, this.prevScrollTop = y(window).scrollTop(), setTimeout((function() {
                        if (i.zoomFromOrigin && s) {
                            var e = i.getSlideItem(t);
                            e.css("transform", s), setTimeout((function() {
                                e.addClass("lg-start-progress lg-start-end-progress").css("transition-duration", i.settings.startAnimationDuration + "ms"), i.outer.addClass("lg-zoom-from-image")
                            })), setTimeout((function() {
                                e.css("transform", "translate3d(0, 0, 0)")
                            }), 100)
                        }
                        setTimeout((function() {
                            i.$backdrop.addClass("in"), i.$container.addClass("lg-show-in")
                        }), 10), i.zoomFromOrigin && s || setTimeout((function() {
                            i.outer.addClass("lg-visible")
                        }), i.settings.backdropDuration), i.slide(t, !1, !1, !1), i.LGel.trigger(V)
                    })), document.body === this.settings.container && y("html").addClass("lg-on")
                }
            }, t.prototype.getMediaContainerPosition = function() {
                if (this.settings.allowMediaOverlap) return {
                    top: 0,
                    bottom: 0
                };
                var t = this.$toolbar.get().clientHeight || 0,
                    e = this.outer.find(".lg-components .lg-sub-html").get(),
                    i = this.settings.defaultCaptionHeight || e && e.clientHeight || 0,
                    n = this.outer.find(".lg-thumb-outer").get();
                return {
                    top: t,
                    bottom: (n ? n.clientHeight : 0) + i
                }
            }, t.prototype.setMediaContainerPosition = function(t, e) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), this.$content.css("top", t + "px").css("bottom", e + "px")
            }, t.prototype.hideBars = function() {
                var t = this;
                setTimeout((function() {
                    t.outer.removeClass("lg-hide-items"), t.settings.hideBarsDelay > 0 && (t.outer.on("mousemove.lg click.lg touchstart.lg", (function() {
                        t.outer.removeClass("lg-hide-items"), clearTimeout(t.hideBarTimeout), t.hideBarTimeout = setTimeout((function() {
                            t.outer.addClass("lg-hide-items")
                        }), t.settings.hideBarsDelay)
                    })), t.outer.trigger("mousemove.lg"))
                }), this.settings.showBarsAfter)
            }, t.prototype.initPictureFill = function(t) {
                if (this.settings.supportLegacyBrowser) try {
                    picturefill({
                        elements: [t.get()]
                    })
                } catch (t) {
                    console.warn("lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document.")
                }
            }, t.prototype.counter = function() {
                if (this.settings.counter) {
                    var t = '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' + this.getIdName("lg-counter-current") + '" class="lg-counter-current">' + (this.index + 1) + ' </span> /\n                <span id="' + this.getIdName("lg-counter-all") + '" class="lg-counter-all">' + this.galleryItems.length + " </span></div>";
                    this.outer.find(this.settings.appendCounterTo).append(t)
                }
            }, t.prototype.addHtml = function(t) {
                var e, i;
                if (this.galleryItems[t].subHtmlUrl ? i = this.galleryItems[t].subHtmlUrl : e = this.galleryItems[t].subHtml, !i)
                    if (e) {
                        var n = e.substring(0, 1);
                        "." !== n && "#" !== n || (e = this.settings.subHtmlSelectorRelative && !this.settings.dynamic ? y(this.items).eq(t).find(e).first().html() : y(e).first().html())
                    } else e = "";
                if (".lg-item" !== this.settings.appendSubHtmlTo) i ? this.outer.find(".lg-sub-html").load(i) : this.outer.find(".lg-sub-html").html(e);
                else {
                    var r = y(this.getSlideItemId(t));
                    i ? r.load(i) : r.append('<div class="lg-sub-html">' + e + "</div>")
                }
                null != e && ("" === e ? this.outer.find(this.settings.appendSubHtmlTo).addClass("lg-empty-html") : this.outer.find(this.settings.appendSubHtmlTo).removeClass("lg-empty-html")), this.LGel.trigger(z, {
                    index: t
                })
            }, t.prototype.preload = function(t) {
                for (var e = 1; e <= this.settings.preload && !(e >= this.galleryItems.length - t); e++) this.loadContent(t + e, !1);
                for (var i = 1; i <= this.settings.preload && !(t - i < 0); i++) this.loadContent(t - i, !1)
            }, t.prototype.getDummyImgStyles = function(t) {
                return t ? "width:" + t.width + "px;\n                margin-left: -" + t.width / 2 + "px;\n                margin-top: -" + t.height / 2 + "px;\n                height:" + t.height + "px" : ""
            }, t.prototype.getVideoContStyle = function(t) {
                return t ? "width:" + t.width + "px;\n                height:" + t.height + "px" : ""
            }, t.prototype.getDummyImageContent = function(t, e, i) {
                var n;
                if (this.settings.dynamic || (n = y(this.items).eq(e)), n) {
                    var r = void 0;
                    if (!(r = this.settings.exThumbImage ? n.attr(this.settings.exThumbImage) : n.find("img").first().attr("src"))) return "";
                    var s = "<img " + i + ' style="' + this.getDummyImgStyles(this.currentImageSize) + '" class="lg-dummy-img" src="' + r + '" />';
                    return t.addClass("lg-first-slide"), this.outer.addClass("lg-first-slide-loading"), s
                }
                return ""
            }, t.prototype.setImgMarkup = function(t, e, i) {
                var n = this.galleryItems[i],
                    r = n.alt,
                    s = n.srcset,
                    o = n.sizes,
                    a = n.sources,
                    l = r ? 'alt="' + r + '"' : "",
                    u = '<picture class="lg-img-wrap"> ' + (!this.lGalleryOn && this.zoomFromOrigin && this.currentImageSize ? this.getDummyImageContent(e, i, l) : E(i, t, l, s, o, a)) + "</picture>";
                e.prepend(u)
            }, t.prototype.onLgObjectLoad = function(t, e, i, n, r) {
                var s = this;
                r && this.LGel.trigger(R, {
                    index: e,
                    delay: i || 0
                }), t.find(".lg-object").first().on("load.lg", (function() {
                    s.handleLgObjectLoad(t, e, i, n, r)
                })), setTimeout((function() {
                    t.find(".lg-object").first().on("error.lg", (function() {
                        t.addClass("lg-complete lg-complete_"), t.html('<span class="lg-error-msg">Oops... Failed to load content...</span>')
                    }))
                }), n)
            }, t.prototype.handleLgObjectLoad = function(t, e, i, n, r) {
                var s = this;
                setTimeout((function() {
                    t.addClass("lg-complete lg-complete_"), r || s.LGel.trigger(R, {
                        index: e,
                        delay: i || 0
                    })
                }), n)
            }, t.prototype.isVideo = function(t, e) {
                if (!t) return this.galleryItems[e].video ? {
                    html5: !0
                } : void console.error("lightGallery :- data-src is not provided on slide item " + (e + 1) + ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/");
                var i = t.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i),
                    n = t.match(/\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)/i),
                    r = t.match(/https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/);
                return i ? {
                    youtube: i
                } : n ? {
                    vimeo: n
                } : r ? {
                    wistia: r
                } : void 0
            }, t.prototype.addSlideVideoInfo = function(t) {
                var e = this;
                t.forEach((function(t, i) {
                    t.__slideVideoInfo = e.isVideo(t.src, i)
                }))
            }, t.prototype.loadContent = function(t, e) {
                var i = this,
                    n = this.galleryItems[t],
                    r = y(this.getSlideItemId(t)),
                    s = n.poster,
                    o = n.srcset,
                    a = n.sizes,
                    l = n.sources,
                    u = n.src,
                    h = n.video,
                    c = h && "string" == typeof h ? JSON.parse(h) : h;
                if (n.responsive) {
                    var d = n.responsive.split(",");
                    u = S(d) || u
                }
                var p = n.__slideVideoInfo,
                    f = "",
                    g = !!n.iframe;
                if (!r.hasClass("lg-loaded")) {
                    if (p) {
                        var m = this.mediaContainerPosition,
                            v = m.top,
                            D = m.bottom,
                            b = _(this.items[t], this.outer, v + D, p && this.settings.videoMaxSize);
                        f = this.getVideoContStyle(b)
                    }
                    if (g) {
                        var w = x(this.settings.iframeWidth, this.settings.iframeHeight, u, n.iframeTitle);
                        r.prepend(w)
                    } else if (s) {
                        var C = "",
                            A = !this.lGalleryOn,
                            I = !this.lGalleryOn && this.zoomFromOrigin && this.currentImageSize;
                        I && (C = this.getDummyImageContent(r, t, ""));
                        w = T(s, C || "", f, p);
                        r.prepend(w);
                        var k = (I ? this.settings.startAnimationDuration : this.settings.backdropDuration) + 100;
                        setTimeout((function() {
                            i.LGel.trigger(P, {
                                index: t,
                                src: u,
                                html5Video: c,
                                hasPoster: !0,
                                isFirstSlide: A
                            })
                        }), k)
                    } else if (p) {
                        w = '<div class="lg-video-cont " style="' + f + '"></div>';
                        r.prepend(w), this.LGel.trigger(P, {
                            index: t,
                            src: u,
                            html5Video: c,
                            hasPoster: !1
                        })
                    } else if (this.setImgMarkup(u, r, t), o || l) {
                        var O = r.find(".lg-object");
                        this.initPictureFill(O)
                    }
                    this.LGel.trigger(L, {
                        index: t
                    }), this.lGalleryOn && ".lg-item" === this.settings.appendSubHtmlTo && this.addHtml(t)
                }
                var M = 0,
                    B = 0;
                this.lGalleryOn || (B = this.zoomFromOrigin && this.currentImageSize ? this.settings.startAnimationDuration + 10 : this.settings.backdropDuration + 10), B && !y(document.body).hasClass("lg-from-hash") && (M = B), !this.lGalleryOn && this.zoomFromOrigin && this.currentImageSize && (setTimeout((function() {
                    r.removeClass("lg-start-end-progress lg-start-progress").removeAttr("style")
                }), this.settings.startAnimationDuration + 100), r.hasClass("lg-loaded") || setTimeout((function() {
                    if (r.find(".lg-img-wrap").append(E(t, u, "", o, a, n.sources)), o || l) {
                        var e = r.find(".lg-object");
                        i.initPictureFill(e)
                    }
                    i.onLgObjectLoad(r, t, B, M, !0);
                    var s = r.find(".lg-object").first();
                    F(s.get()) ? i.loadContentOnLoad(t, r, M) : s.on("load.lg error.lg", (function() {
                        i.loadContentOnLoad(t, r, M)
                    }))
                }), this.settings.startAnimationDuration + 100)), r.addClass("lg-loaded"), this.onLgObjectLoad(r, t, B, M, !1), p && p.html5 && !s && r.addClass("lg-complete lg-complete_"), this.zoomFromOrigin && this.currentImageSize || !r.hasClass("lg-complete_") || this.lGalleryOn || setTimeout((function() {
                    r.addClass("lg-complete")
                }), this.settings.backdropDuration), this.lGalleryOn = !0, !0 === e && (r.hasClass("lg-complete_") ? this.preload(t) : r.find(".lg-object").first().on("load.lg error.lg", (function() {
                    i.preload(t)
                })))
            }, t.prototype.loadContentOnLoad = function(t, e, i) {
                var n = this;
                setTimeout((function() {
                    e.find(".lg-dummy-img").remove(), e.removeClass("lg-first-slide"), n.outer.removeClass("lg-first-slide-loading"), n.isDummyImageRemoved = !0, n.preload(t)
                }), i + 300)
            }, t.prototype.getItemsToBeInsertedToDom = function(t, e, i) {
                var n = this;
                void 0 === i && (i = 0);
                var r = [],
                    s = Math.max(i, 3);
                s = Math.min(s, this.galleryItems.length);
                var o = "lg-item-" + this.lgId + "-" + e;
                if (this.galleryItems.length <= 3) return this.galleryItems.forEach((function(t, e) {
                    r.push("lg-item-" + n.lgId + "-" + e)
                })), r;
                if (t < (this.galleryItems.length - 1) / 2) {
                    for (var a = t; a > t - s / 2 && a >= 0; a--) r.push("lg-item-" + this.lgId + "-" + a);
                    var l = r.length;
                    for (a = 0; a < s - l; a++) r.push("lg-item-" + this.lgId + "-" + (t + a + 1))
                } else {
                    for (a = t; a <= this.galleryItems.length - 1 && a < t + s / 2; a++) r.push("lg-item-" + this.lgId + "-" + a);
                    for (l = r.length, a = 0; a < s - l; a++) r.push("lg-item-" + this.lgId + "-" + (t - a - 1))
                }
                return this.settings.loop && (t === this.galleryItems.length - 1 ? r.push("lg-item-" + this.lgId + "-0") : 0 === t && r.push("lg-item-" + this.lgId + "-" + (this.galleryItems.length - 1))), -1 === r.indexOf(o) && r.push("lg-item-" + this.lgId + "-" + e), r
            }, t.prototype.organizeSlideItems = function(t, e) {
                var i = this,
                    n = this.getItemsToBeInsertedToDom(t, e, this.settings.numberOfSlideItemsInDom);
                return n.forEach((function(t) {
                    -1 === i.currentItemsInDom.indexOf(t) && i.$inner.append('<div id="' + t + '" class="lg-item"></div>')
                })), this.currentItemsInDom.forEach((function(t) {
                    -1 === n.indexOf(t) && y("#" + t).remove()
                })), n
            }, t.prototype.getPreviousSlideIndex = function() {
                var t = 0;
                try {
                    var e = this.outer.find(".lg-current").first().attr("id");
                    t = parseInt(e.split("-")[3]) || 0
                } catch (e) {
                    t = 0
                }
                return t
            }, t.prototype.setDownloadValue = function(t) {
                if (this.settings.download) {
                    var e = this.galleryItems[t];
                    if (!1 === e.downloadUrl || "false" === e.downloadUrl) this.outer.addClass("lg-hide-download");
                    else {
                        var i = this.getElementById("lg-download");
                        this.outer.removeClass("lg-hide-download"), i.attr("href", e.downloadUrl || e.src), e.download && i.attr("download", e.download)
                    }
                }
            }, t.prototype.makeSlideAnimation = function(t, e, i) {
                var n = this;
                this.lGalleryOn && i.addClass("lg-slide-progress"), setTimeout((function() {
                    n.outer.addClass("lg-no-trans"), n.outer.find(".lg-item").removeClass("lg-prev-slide lg-next-slide"), "prev" === t ? (e.addClass("lg-prev-slide"), i.addClass("lg-next-slide")) : (e.addClass("lg-next-slide"), i.addClass("lg-prev-slide")), setTimeout((function() {
                        n.outer.find(".lg-item").removeClass("lg-current"), e.addClass("lg-current"), n.outer.removeClass("lg-no-trans")
                    }), 50)
                }), this.lGalleryOn ? this.settings.slideDelay : 0)
            }, t.prototype.slide = function(t, e, i, n) {
                var r = this,
                    s = this.getPreviousSlideIndex();
                if (this.currentItemsInDom = this.organizeSlideItems(t, s), !this.lGalleryOn || s !== t) {
                    var o = this.galleryItems.length;
                    if (!this.lgBusy) {
                        this.settings.counter && this.updateCurrentCounter(t);
                        var a = this.getSlideItem(t),
                            l = this.getSlideItem(s),
                            u = this.galleryItems[t],
                            h = u.__slideVideoInfo;
                        if (this.outer.attr("data-lg-slide-type", this.getSlideType(u)), this.setDownloadValue(t), h) {
                            var c = this.mediaContainerPosition,
                                d = c.top,
                                p = c.bottom,
                                f = _(this.items[t], this.outer, d + p, h && this.settings.videoMaxSize);
                            this.resizeVideoSlide(t, f)
                        }
                        if (this.LGel.trigger(q, {
                                prevIndex: s,
                                index: t,
                                fromTouch: !!e,
                                fromThumb: !!i
                            }), this.lgBusy = !0, clearTimeout(this.hideBarTimeout), this.arrowDisable(t), n || (t < s ? n = "prev" : t > s && (n = "next")), e) {
                            this.outer.find(".lg-item").removeClass("lg-prev-slide lg-current lg-next-slide");
                            var g = void 0,
                                m = void 0;
                            o > 2 ? (g = t - 1, m = t + 1, (0 === t && s === o - 1 || t === o - 1 && 0 === s) && (m = 0, g = o - 1)) : (g = 0, m = 1), "prev" === n ? this.getSlideItem(m).addClass("lg-next-slide") : this.getSlideItem(g).addClass("lg-prev-slide"), a.addClass("lg-current")
                        } else this.makeSlideAnimation(n, a, l);
                        this.lGalleryOn || this.loadContent(t, !0), setTimeout((function() {
                            r.lGalleryOn && r.loadContent(t, !0), ".lg-item" !== r.settings.appendSubHtmlTo && r.addHtml(t)
                        }), (this.lGalleryOn ? this.settings.speed + 50 : 50) + (e ? 0 : this.settings.slideDelay)), setTimeout((function() {
                            r.lgBusy = !1, l.removeClass("lg-slide-progress"), r.LGel.trigger(H, {
                                prevIndex: s,
                                index: t,
                                fromTouch: e,
                                fromThumb: i
                            })
                        }), (this.lGalleryOn ? this.settings.speed + 100 : 100) + (e ? 0 : this.settings.slideDelay))
                    }
                    this.index = t
                }
            }, t.prototype.updateCurrentCounter = function(t) {
                this.getElementById("lg-counter-current").html(t + 1 + "")
            }, t.prototype.updateCounterTotal = function() {
                this.getElementById("lg-counter-all").html(this.galleryItems.length + "")
            }, t.prototype.getSlideType = function(t) {
                return t.__slideVideoInfo ? "video" : t.iframe ? "iframe" : "image"
            }, t.prototype.touchMove = function(t, e, i) {
                var n = e.pageX - t.pageX,
                    r = e.pageY - t.pageY,
                    s = !1;
                if (this.swipeDirection ? s = !0 : Math.abs(n) > 15 ? (this.swipeDirection = "horizontal", s = !0) : Math.abs(r) > 15 && (this.swipeDirection = "vertical", s = !0), s) {
                    var o = this.getSlideItem(this.index);
                    if ("horizontal" === this.swipeDirection) {
                        null == i || i.preventDefault(), this.outer.addClass("lg-dragging"), this.setTranslate(o, n, 0);
                        var a = o.get().offsetWidth,
                            l = 15 * a / 100 - Math.abs(10 * n / 100);
                        this.setTranslate(this.outer.find(".lg-prev-slide").first(), -a + n - l, 0), this.setTranslate(this.outer.find(".lg-next-slide").first(), a + n + l, 0)
                    } else if ("vertical" === this.swipeDirection && this.settings.swipeToClose) {
                        null == i || i.preventDefault(), this.$container.addClass("lg-dragging-vertical");
                        var u = 1 - Math.abs(r) / window.innerHeight;
                        this.$backdrop.css("opacity", u);
                        var h = 1 - Math.abs(r) / (2 * window.innerWidth);
                        this.setTranslate(o, 0, r, h, h), Math.abs(r) > 100 && this.outer.addClass("lg-hide-items").removeClass("lg-components-open")
                    }
                }
            }, t.prototype.touchEnd = function(t, e, i) {
                var n, r = this;
                "lg-slide" !== this.settings.mode && this.outer.addClass("lg-slide"), setTimeout((function() {
                    r.$container.removeClass("lg-dragging-vertical"), r.outer.removeClass("lg-dragging lg-hide-items").addClass("lg-components-open");
                    var s = !0;
                    if ("horizontal" === r.swipeDirection) {
                        n = t.pageX - e.pageX;
                        var o = Math.abs(t.pageX - e.pageX);
                        n < 0 && o > r.settings.swipeThreshold ? (r.goToNextSlide(!0), s = !1) : n > 0 && o > r.settings.swipeThreshold && (r.goToPrevSlide(!0), s = !1)
                    } else if ("vertical" === r.swipeDirection) {
                        if (n = Math.abs(t.pageY - e.pageY), r.settings.closable && r.settings.swipeToClose && n > 100) return void r.closeGallery();
                        r.$backdrop.css("opacity", 1)
                    }
                    if (r.outer.find(".lg-item").removeAttr("style"), s && Math.abs(t.pageX - e.pageX) < 5) {
                        var a = y(i.target);
                        r.isPosterElement(a) && r.LGel.trigger(W)
                    }
                    r.swipeDirection = void 0
                })), setTimeout((function() {
                    r.outer.hasClass("lg-dragging") || "lg-slide" === r.settings.mode || r.outer.removeClass("lg-slide")
                }), this.settings.speed + 100)
            }, t.prototype.enableSwipe = function() {
                var t = this,
                    e = {},
                    i = {},
                    n = !1,
                    r = !1;
                this.settings.enableSwipe && (this.$inner.on("touchstart.lg", (function(i) {
                    t.dragOrSwipeEnabled = !0;
                    var n = t.getSlideItem(t.index);
                    !y(i.target).hasClass("lg-item") && !n.get().contains(i.target) || t.outer.hasClass("lg-zoomed") || t.lgBusy || 1 !== i.targetTouches.length || (r = !0, t.touchAction = "swipe", t.manageSwipeClass(), e = {
                        pageX: i.targetTouches[0].pageX,
                        pageY: i.targetTouches[0].pageY
                    })
                })), this.$inner.on("touchmove.lg", (function(s) {
                    r && "swipe" === t.touchAction && 1 === s.targetTouches.length && (i = {
                        pageX: s.targetTouches[0].pageX,
                        pageY: s.targetTouches[0].pageY
                    }, t.touchMove(e, i, s), n = !0)
                })), this.$inner.on("touchend.lg", (function(s) {
                    if ("swipe" === t.touchAction) {
                        if (n) n = !1, t.touchEnd(i, e, s);
                        else if (r) {
                            var o = y(s.target);
                            t.isPosterElement(o) && t.LGel.trigger(W)
                        }
                        t.touchAction = void 0, r = !1
                    }
                })))
            }, t.prototype.enableDrag = function() {
                var t = this,
                    e = {},
                    i = {},
                    n = !1,
                    r = !1;
                this.settings.enableDrag && (this.outer.on("mousedown.lg", (function(i) {
                    t.dragOrSwipeEnabled = !0;
                    var r = t.getSlideItem(t.index);
                    (y(i.target).hasClass("lg-item") || r.get().contains(i.target)) && (t.outer.hasClass("lg-zoomed") || t.lgBusy || (i.preventDefault(), t.lgBusy || (t.manageSwipeClass(), e = {
                        pageX: i.pageX,
                        pageY: i.pageY
                    }, n = !0, t.outer.get().scrollLeft += 1, t.outer.get().scrollLeft -= 1, t.outer.removeClass("lg-grab").addClass("lg-grabbing"), t.LGel.trigger(j))))
                })), y(window).on("mousemove.lg.global" + this.lgId, (function(s) {
                    n && t.lgOpened && (r = !0, i = {
                        pageX: s.pageX,
                        pageY: s.pageY
                    }, t.touchMove(e, i), t.LGel.trigger(G))
                })), y(window).on("mouseup.lg.global" + this.lgId, (function(s) {
                    if (t.lgOpened) {
                        var o = y(s.target);
                        r ? (r = !1, t.touchEnd(i, e, s), t.LGel.trigger(Y)) : t.isPosterElement(o) && t.LGel.trigger(W), n && (n = !1, t.outer.removeClass("lg-grabbing").addClass("lg-grab"))
                    }
                })))
            }, t.prototype.triggerPosterClick = function() {
                var t = this;
                this.$inner.on("click.lg", (function(e) {
                    !t.dragOrSwipeEnabled && t.isPosterElement(y(e.target)) && t.LGel.trigger(W)
                }))
            }, t.prototype.manageSwipeClass = function() {
                var t = this.index + 1,
                    e = this.index - 1;
                this.settings.loop && this.galleryItems.length > 2 && (0 === this.index ? e = this.galleryItems.length - 1 : this.index === this.galleryItems.length - 1 && (t = 0)), this.outer.find(".lg-item").removeClass("lg-next-slide lg-prev-slide"), e > -1 && this.getSlideItem(e).addClass("lg-prev-slide"), this.getSlideItem(t).addClass("lg-next-slide")
            }, t.prototype.goToNextSlide = function(t) {
                var e = this,
                    i = this.settings.loop;
                t && this.galleryItems.length < 3 && (i = !1), this.lgBusy || (this.index + 1 < this.galleryItems.length ? (this.index++, this.LGel.trigger(U, {
                    index: this.index
                }), this.slide(this.index, !!t, !1, "next")) : i ? (this.index = 0, this.LGel.trigger(U, {
                    index: this.index
                }), this.slide(this.index, !!t, !1, "next")) : this.settings.slideEndAnimation && !t && (this.outer.addClass("lg-right-end"), setTimeout((function() {
                    e.outer.removeClass("lg-right-end")
                }), 400)))
            }, t.prototype.goToPrevSlide = function(t) {
                var e = this,
                    i = this.settings.loop;
                t && this.galleryItems.length < 3 && (i = !1), this.lgBusy || (this.index > 0 ? (this.index--, this.LGel.trigger(X, {
                    index: this.index,
                    fromTouch: t
                }), this.slide(this.index, !!t, !1, "prev")) : i ? (this.index = this.galleryItems.length - 1, this.LGel.trigger(X, {
                    index: this.index,
                    fromTouch: t
                }), this.slide(this.index, !!t, !1, "prev")) : this.settings.slideEndAnimation && !t && (this.outer.addClass("lg-left-end"), setTimeout((function() {
                    e.outer.removeClass("lg-left-end")
                }), 400)))
            }, t.prototype.keyPress = function() {
                var t = this;
                y(window).on("keydown.lg.global" + this.lgId, (function(e) {
                    t.lgOpened && !0 === t.settings.escKey && 27 === e.keyCode && (e.preventDefault(), t.settings.allowMediaOverlap && t.outer.hasClass("lg-can-toggle") && t.outer.hasClass("lg-components-open") ? t.outer.removeClass("lg-components-open") : t.closeGallery()), t.lgOpened && t.galleryItems.length > 1 && (37 === e.keyCode && (e.preventDefault(), t.goToPrevSlide()), 39 === e.keyCode && (e.preventDefault(), t.goToNextSlide()))
                }))
            }, t.prototype.arrow = function() {
                var t = this;
                this.getElementById("lg-prev").on("click.lg", (function() {
                    t.goToPrevSlide()
                })), this.getElementById("lg-next").on("click.lg", (function() {
                    t.goToNextSlide()
                }))
            }, t.prototype.arrowDisable = function(t) {
                if (!this.settings.loop && this.settings.hideControlOnEnd) {
                    var e = this.getElementById("lg-prev"),
                        i = this.getElementById("lg-next");
                    t + 1 === this.galleryItems.length ? i.attr("disabled", "disabled").addClass("disabled") : i.removeAttr("disabled").removeClass("disabled"), 0 === t ? e.attr("disabled", "disabled").addClass("disabled") : e.removeAttr("disabled").removeClass("disabled")
                }
            }, t.prototype.setTranslate = function(t, e, i, n, r) {
                void 0 === n && (n = 1), void 0 === r && (r = 1), t.css("transform", "translate3d(" + e + "px, " + i + "px, 0px) scale3d(" + n + ", " + r + ", 1)")
            }, t.prototype.mousewheel = function() {
                var t = this;
                this.outer.on("mousewheel.lg", (function(e) {
                    !e.deltaY || t.galleryItems.length < 2 || (e.deltaY > 0 ? t.goToPrevSlide() : t.goToNextSlide(), e.preventDefault())
                }))
            }, t.prototype.isSlideElement = function(t) {
                return t.hasClass("lg-outer") || t.hasClass("lg-item") || t.hasClass("lg-img-wrap")
            }, t.prototype.isPosterElement = function(t) {
                var e = this.getSlideItem(this.index).find(".lg-video-play-button").get();
                return t.hasClass("lg-video-poster") || t.hasClass("lg-video-play-button") || e && e.contains(t.get())
            }, t.prototype.toggleMaximize = function() {
                var t = this;
                this.getElementById("lg-maximize").on("click.lg", (function() {
                    t.$container.toggleClass("lg-inline"), t.refreshOnResize()
                }))
            }, t.prototype.invalidateItems = function() {
                for (var t = 0; t < this.items.length; t++) {
                    var e = y(this.items[t]);
                    e.off("click.lgcustom-item-" + e.attr("data-lg-id"))
                }
            }, t.prototype.manageCloseGallery = function() {
                var t = this;
                if (this.settings.closable) {
                    var e = !1;
                    this.getElementById("lg-close").on("click.lg", (function() {
                        t.closeGallery()
                    })), this.settings.closeOnTap && (this.outer.on("mousedown.lg", (function(i) {
                        var n = y(i.target);
                        e = !!t.isSlideElement(n)
                    })), this.outer.on("mousemove.lg", (function() {
                        e = !1
                    })), this.outer.on("mouseup.lg", (function(i) {
                        var n = y(i.target);
                        t.isSlideElement(n) && e && (t.outer.hasClass("lg-dragging") || t.closeGallery())
                    })))
                }
            }, t.prototype.closeGallery = function(t) {
                var e = this;
                if (!this.lgOpened || !this.settings.closable && !t) return 0;
                this.LGel.trigger($), y(window).scrollTop(this.prevScrollTop);
                var i, n = this.items[this.index];
                if (this.zoomFromOrigin && n) {
                    var r = this.mediaContainerPosition,
                        s = r.top,
                        o = r.bottom,
                        a = _(n, this.outer, s + o, this.galleryItems[this.index].__slideVideoInfo && this.settings.videoMaxSize);
                    i = C(n, this.outer, s, o, a)
                }
                this.zoomFromOrigin && i ? (this.outer.addClass("lg-closing lg-zoom-from-image"), this.getSlideItem(this.index).addClass("lg-start-end-progress").css("transition-duration", this.settings.startAnimationDuration + "ms").css("transform", i)) : (this.outer.addClass("lg-hide-items"), this.outer.removeClass("lg-zoom-from-image")), this.destroyModules(), this.lGalleryOn = !1, this.isDummyImageRemoved = !1, this.zoomFromOrigin = this.settings.zoomFromOrigin, clearTimeout(this.hideBarTimeout), this.hideBarTimeout = !1, y("html").removeClass("lg-on"), this.outer.removeClass("lg-visible lg-components-open"), this.$backdrop.removeClass("in").css("opacity", 0);
                var l = this.zoomFromOrigin && i ? Math.max(this.settings.startAnimationDuration, this.settings.backdropDuration) : this.settings.backdropDuration;
                return this.$container.removeClass("lg-show-in"), setTimeout((function() {
                    e.zoomFromOrigin && i && e.outer.removeClass("lg-zoom-from-image"), e.$container.removeClass("lg-show"), e.$backdrop.removeAttr("style").css("transition-duration", e.settings.backdropDuration + "ms"), e.outer.removeClass("lg-closing " + e.settings.startClass), e.getSlideItem(e.index).removeClass("lg-start-end-progress"), e.$inner.empty(), e.lgOpened && e.LGel.trigger(Q, {
                        instance: e
                    }), e.outer.get() && e.outer.get().blur(), e.lgOpened = !1
                }), l + 100), l + 100
            }, t.prototype.initModules = function() {
                this.plugins.forEach((function(t) {
                    try {
                        t.init()
                    } catch (t) {
                        console.warn("lightGallery:- make sure lightGallery module is properly initiated")
                    }
                }))
            }, t.prototype.destroyModules = function(t) {
                this.plugins.forEach((function(e) {
                    try {
                        t ? e.destroy() : e.closeGallery && e.closeGallery()
                    } catch (t) {
                        console.warn("lightGallery:- make sure lightGallery module is properly destroyed")
                    }
                }))
            }, t.prototype.refresh = function(t) {
                this.settings.dynamic || this.invalidateItems(), this.galleryItems = t || this.getItems(), this.updateControls(), this.openGalleryOnItemClick(), this.LGel.trigger(B)
            }, t.prototype.updateControls = function() {
                this.addSlideVideoInfo(this.galleryItems), this.updateCounterTotal(), this.manageSingleSlideClassName()
            }, t.prototype.destroy = function() {
                var t = this,
                    e = this.closeGallery(!0);
                return setTimeout((function() {
                    t.destroyModules(!0), t.settings.dynamic || t.invalidateItems(), y(window).off(".lg.global" + t.lgId), t.LGel.off(".lg"), t.$container.remove()
                }), e), e
            }, t
        }();
    var Z = function(t, e) {
            return new K(t, e)
        },
        tt = i(2),
        et = i.n(tt);
    i(21);
    new function t() {
        ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), window.addEventListener("load", (function(t) {
            document.querySelectorAll(".js-gallery").forEach((function(t) {
                var e = t.querySelector(".js-carousel"),
                    i = new et.a(e, {
                        cellAlign: "center",
                        imagesLoaded: !0,
                        pageDots: !1,
                        wrapAround: !0
                    });
                t.classList.contains("gallery--lightbox") && (t.addEventListener("lgBeforeSlide", (function(t) {
                    var e = t.detail,
                        n = e.index;
                    e.prevIndex;
                    i.select(n)
                })), Z(t, {
                    download: !1,
                    selector: "a",
                    nextHtml: "<span>Next</span>",
                    prevHtml: "<span>Prev</span>"
                }))
            }))
        }))
    };

    function it(t) {
        return (it = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function nt(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function rt(t, e) {
        t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    /*!
     * GSAP 3.7.1
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var st, ot, at, lt, ut, ht, ct, dt, pt, ft, gt, mt, vt, Dt = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        yt = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        bt = 1e8,
        wt = 2 * Math.PI,
        _t = wt / 4,
        Ct = 0,
        xt = Math.sqrt,
        Et = Math.cos,
        St = Math.sin,
        Ft = function(t) {
            return "string" == typeof t
        },
        Tt = function(t) {
            return "function" == typeof t
        },
        At = function(t) {
            return "number" == typeof t
        },
        It = function(t) {
            return void 0 === t
        },
        kt = function(t) {
            return "object" === it(t)
        },
        Lt = function(t) {
            return !1 !== t
        },
        Ot = function() {
            return "undefined" != typeof window
        },
        Pt = function(t) {
            return Tt(t) || Ft(t)
        },
        Mt = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        Bt = Array.isArray,
        zt = /(?:-?\.?\d|\.)+/gi,
        Nt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        Vt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        Rt = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        qt = /[+-]=-?[.\d]+/,
        Ht = /[^,'"\[\]\s]+/gi,
        Wt = /[\d.+\-=]+(?:e[-+]\d*)*/i,
        jt = {},
        Gt = {},
        Yt = function(t) {
            return (Gt = ve(t, jt)) && en
        },
        Ut = function(t, e) {
            return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
        },
        Xt = function(t, e) {
            return !e && console.warn(t)
        },
        $t = function(t, e) {
            return t && (jt[t] = e) && Gt && (Gt[t] = e) || jt
        },
        Qt = function() {
            return 0
        },
        Jt = {},
        Kt = [],
        Zt = {},
        te = {},
        ee = {},
        ie = 30,
        ne = [],
        re = "",
        se = function(t) {
            var e, i, n = t[0];
            if (kt(n) || Tt(n) || (t = [t]), !(e = (n._gsap || {}).harness)) {
                for (i = ne.length; i-- && !ne[i].targetTest(n););
                e = ne[i]
            }
            for (i = t.length; i--;) t[i] && (t[i]._gsap || (t[i]._gsap = new Si(t[i], e))) || t.splice(i, 1);
            return t
        },
        oe = function(t) {
            return t._gsap || se(Ye(t))[0]._gsap
        },
        ae = function(t, e, i) {
            return (i = t[e]) && Tt(i) ? t[e]() : It(i) && t.getAttribute && t.getAttribute(e) || i
        },
        le = function(t, e) {
            return (t = t.split(",")).forEach(e) || t
        },
        ue = function(t) {
            return Math.round(1e5 * t) / 1e5 || 0
        },
        he = function(t, e) {
            for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i;);
            return n < i
        },
        ce = function() {
            var t, e, i = Kt.length,
                n = Kt.slice(0);
            for (Zt = {}, Kt.length = 0, t = 0; t < i; t++)(e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        },
        de = function(t, e, i, n) {
            Kt.length && ce(), t.render(e, i, n), Kt.length && ce()
        },
        pe = function(t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(Ht).length < 2 ? e : Ft(t) ? t.trim() : t
        },
        fe = function(t) {
            return t
        },
        ge = function(t, e) {
            for (var i in e) i in t || (t[i] = e[i]);
            return t
        },
        me = function(t, e) {
            for (var i in e) i in t || "duration" === i || "ease" === i || (t[i] = e[i])
        },
        ve = function(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        },
        De = function t(e, i) {
            for (var n in i) "__proto__" !== n && "constructor" !== n && "prototype" !== n && (e[n] = kt(i[n]) ? t(e[n] || (e[n] = {}), i[n]) : i[n]);
            return e
        },
        ye = function(t, e) {
            var i, n = {};
            for (i in t) i in e || (n[i] = t[i]);
            return n
        },
        be = function(t) {
            var e = t.parent || ot,
                i = t.keyframes ? me : ge;
            if (Lt(t.inherit))
                for (; e;) i(t, e.vars.defaults), e = e.parent || e._dp;
            return t
        },
        we = function(t, e, i, n) {
            void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
            var r = e._prev,
                s = e._next;
            r ? r._next = s : t[i] === e && (t[i] = s), s ? s._prev = r : t[n] === e && (t[n] = r), e._next = e._prev = e.parent = null
        },
        _e = function(t, e) {
            t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t), t._act = 0
        },
        Ce = function(t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0))
                for (var i = t; i;) i._dirty = 1, i = i.parent;
            return t
        },
        xe = function(t) {
            for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
            return t
        },
        Ee = function(t) {
            return t._repeat ? Se(t._tTime, t = t.duration() + t._rDelay) * t : 0
        },
        Se = function(t, e) {
            var i = Math.floor(t /= e);
            return t && i === t ? i - 1 : i
        },
        Fe = function(t, e) {
            return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        },
        Te = function(t) {
            return t._end = ue(t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0))
        },
        Ae = function(t, e) {
            var i = t._dp;
            return i && i.smoothChildTiming && t._ts && (t._start = ue(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Te(t), i._dirty || Ce(i, t)), t
        },
        Ie = function(t, e) {
            var i;
            if ((e._time || e._initted && !e._dur) && (i = Fe(t.rawTime(), e), (!e._dur || qe(0, e.totalDuration(), i) - e._tTime > 1e-8) && e.render(i, !0)), Ce(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                if (t._dur < t.duration())
                    for (i = t; i._dp;) i.rawTime() >= 0 && i.totalTime(i._tTime), i = i._dp;
                t._zTime = -1e-8
            }
        },
        ke = function(t, e, i, n) {
            return e.parent && _e(e), e._start = ue((At(i) ? i : i || t !== ot ? Ne(t, i, e) : t._time) + e._delay), e._end = ue(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
                function(t, e, i, n, r) {
                    void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
                    var s, o = t[n];
                    if (r)
                        for (s = e[r]; o && o[r] > s;) o = o._prev;
                    o ? (e._next = o._next, o._next = e) : (e._next = t[i], t[i] = e), e._next ? e._next._prev = e : t[n] = e, e._prev = o, e.parent = e._dp = t
                }(t, e, "_first", "_last", t._sort ? "_start" : 0), Pe(e) || (t._recent = e), n || Ie(t, e), t
        },
        Le = function(t, e) {
            return (jt.ScrollTrigger || Ut("scrollTrigger", e)) && jt.ScrollTrigger.create(e, t)
        },
        Oe = function(t, e, i, n) {
            return Oi(t, e), t._initted ? !i && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && ct !== pi.frame ? (Kt.push(t), t._lazy = [e, n], 1) : void 0 : 1
        },
        Pe = function(t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e
        },
        Me = function(t, e, i, n) {
            var r = t._repeat,
                s = ue(e) || 0,
                o = t._tTime / t._tDur;
            return o && !n && (t._time *= s / t._dur), t._dur = s, t._tDur = r ? r < 0 ? 1e10 : ue(s * (r + 1) + t._rDelay * r) : s, o && !n ? Ae(t, t._tTime = t._tDur * o) : t.parent && Te(t), i || Ce(t.parent, t), t
        },
        Be = function(t) {
            return t instanceof Ti ? Ce(t) : Me(t, t._dur)
        },
        ze = {
            _start: 0,
            endTime: Qt,
            totalDuration: Qt
        },
        Ne = function t(e, i, n) {
            var r, s, o, a = e.labels,
                l = e._recent || ze,
                u = e.duration() >= bt ? l.endTime(!1) : e._dur;
            return Ft(i) && (isNaN(i) || i in a) ? (s = i.charAt(0), o = "%" === i.substr(-1), r = i.indexOf("="), "<" === s || ">" === s ? (r >= 0 && (i = i.replace(/=/, "")), ("<" === s ? l._start : l.endTime(l._repeat >= 0)) + (parseFloat(i.substr(1)) || 0) * (o ? (r < 0 ? l : n).totalDuration() / 100 : 1)) : r < 0 ? (i in a || (a[i] = u), a[i]) : (s = parseFloat(i.charAt(r - 1) + i.substr(r + 1)), o && n && (s = s / 100 * (Bt(n) ? n[0] : n).totalDuration()), r > 1 ? t(e, i.substr(0, r - 1), n) + s : u + s)) : null == i ? u : +i
        },
        Ve = function(t, e, i) {
            var n, r, s = At(e[1]),
                o = (s ? 2 : 1) + (t < 2 ? 0 : 1),
                a = e[o];
            if (s && (a.duration = e[1]), a.parent = i, t) {
                for (n = a, r = i; r && !("immediateRender" in n);) n = r.vars.defaults || {}, r = Lt(r.vars.inherit) && r.parent;
                a.immediateRender = Lt(n.immediateRender), t < 2 ? a.runBackwards = 1 : a.startAt = e[o - 1]
            }
            return new zi(e[0], a, e[o + 1])
        },
        Re = function(t, e) {
            return t || 0 === t ? e(t) : e
        },
        qe = function(t, e, i) {
            return i < t ? t : i > e ? e : i
        },
        He = function(t) {
            if ("string" != typeof t) return "";
            var e = Wt.exec(t);
            return e ? t.substr(e.index + e[0].length) : ""
        },
        We = [].slice,
        je = function(t, e) {
            return t && kt(t) && "length" in t && (!e && !t.length || t.length - 1 in t && kt(t[0])) && !t.nodeType && t !== at
        },
        Ge = function(t, e, i) {
            return void 0 === i && (i = []), t.forEach((function(t) {
                var n;
                return Ft(t) && !e || je(t, 1) ? (n = i).push.apply(n, Ye(t)) : i.push(t)
            })) || i
        },
        Ye = function(t, e, i) {
            return !Ft(t) || i || !lt && fi() ? Bt(t) ? Ge(t, i) : je(t) ? We.call(t, 0) : t ? [t] : [] : We.call((e || ut).querySelectorAll(t), 0)
        },
        Ue = function(t) {
            return t.sort((function() {
                return .5 - Math.random()
            }))
        },
        Xe = function(t) {
            if (Tt(t)) return t;
            var e = kt(t) ? t : {
                    each: t
                },
                i = wi(e.ease),
                n = e.from || 0,
                r = parseFloat(e.base) || 0,
                s = {},
                o = n > 0 && n < 1,
                a = isNaN(n) || o,
                l = e.axis,
                u = n,
                h = n;
            return Ft(n) ? u = h = {
                    center: .5,
                    edges: .5,
                    end: 1
                }[n] || 0 : !o && a && (u = n[0], h = n[1]),
                function(t, o, c) {
                    var d, p, f, g, m, v, D, y, b, w = (c || e).length,
                        _ = s[w];
                    if (!_) {
                        if (!(b = "auto" === e.grid ? 0 : (e.grid || [1, bt])[1])) {
                            for (D = -bt; D < (D = c[b++].getBoundingClientRect().left) && b < w;);
                            b--
                        }
                        for (_ = s[w] = [], d = a ? Math.min(b, w) * u - .5 : n % b, p = a ? w * h / b - .5 : n / b | 0, D = 0, y = bt, v = 0; v < w; v++) f = v % b - d, g = p - (v / b | 0), _[v] = m = l ? Math.abs("y" === l ? g : f) : xt(f * f + g * g), m > D && (D = m), m < y && (y = m);
                        "random" === n && Ue(_), _.max = D - y, _.min = y, _.v = w = (parseFloat(e.amount) || parseFloat(e.each) * (b > w ? w - 1 : l ? "y" === l ? w / b : b : Math.max(b, w / b)) || 0) * ("edges" === n ? -1 : 1), _.b = w < 0 ? r - w : r, _.u = He(e.amount || e.each) || 0, i = i && w < 0 ? yi(i) : i
                    }
                    return w = (_[t] - _.min) / _.max || 0, ue(_.b + (i ? i(w) : w) * _.v) + _.u
                }
        },
        $e = function(t) {
            var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
            return function(i) {
                var n = Math.round(parseFloat(i) / t) * t * e;
                return (n - n % 1) / e + (At(i) ? 0 : He(i))
            }
        },
        Qe = function(t, e) {
            var i, n, r = Bt(t);
            return !r && kt(t) && (i = r = t.radius || bt, t.values ? (t = Ye(t.values), (n = !At(t[0])) && (i *= i)) : t = $e(t.increment)), Re(e, r ? Tt(t) ? function(e) {
                return n = t(e), Math.abs(n - e) <= i ? n : e
            } : function(e) {
                for (var r, s, o = parseFloat(n ? e.x : e), a = parseFloat(n ? e.y : 0), l = bt, u = 0, h = t.length; h--;)(r = n ? (r = t[h].x - o) * r + (s = t[h].y - a) * s : Math.abs(t[h] - o)) < l && (l = r, u = h);
                return u = !i || l <= i ? t[u] : e, n || u === e || At(e) ? u : u + He(e)
            } : $e(t))
        },
        Je = function(t, e, i, n) {
            return Re(Bt(t) ? !e : !0 === i ? !!(i = 0) : !n, (function() {
                return Bt(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + .99 * i)) / i) * i * n) / n
            }))
        },
        Ke = function(t, e, i) {
            return Re(i, (function(i) {
                return t[~~e(i)]
            }))
        },
        Ze = function(t) {
            for (var e, i, n, r, s = 0, o = ""; ~(e = t.indexOf("random(", s));) n = t.indexOf(")", e), r = "[" === t.charAt(e + 7), i = t.substr(e + 7, n - e - 7).match(r ? Ht : zt), o += t.substr(s, e - s) + Je(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5), s = n + 1;
            return o + t.substr(s, t.length - s)
        },
        ti = function(t, e, i, n, r) {
            var s = e - t,
                o = n - i;
            return Re(r, (function(e) {
                return i + ((e - t) / s * o || 0)
            }))
        },
        ei = function(t, e, i) {
            var n, r, s, o = t.labels,
                a = bt;
            for (n in o)(r = o[n] - e) < 0 == !!i && r && a > (r = Math.abs(r)) && (s = n, a = r);
            return s
        },
        ii = function(t, e, i) {
            var n, r, s = t.vars,
                o = s[e];
            if (o) return n = s[e + "Params"], r = s.callbackScope || t, i && Kt.length && ce(), n ? o.apply(r, n) : o.call(r)
        },
        ni = function(t) {
            return _e(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && ii(t, "onInterrupt"), t
        },
        ri = function(t) {
            var e = (t = !t.name && t.default || t).name,
                i = Tt(t),
                n = e && !i && t.init ? function() {
                    this._props = []
                } : t,
                r = {
                    init: Qt,
                    render: Yi,
                    add: ki,
                    kill: Xi,
                    modifier: Ui,
                    rawVars: 0
                },
                s = {
                    targetTest: 0,
                    get: 0,
                    getSetter: Hi,
                    aliases: {},
                    register: 0
                };
            if (fi(), t !== n) {
                if (te[e]) return;
                ge(n, ge(ye(t, r), s)), ve(n.prototype, ve(r, ye(t, s))), te[n.prop = e] = n, t.targetTest && (ne.push(n), Jt[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
            }
            $t(e, n), t.register && t.register(en, n, Ji)
        },
        si = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        },
        oi = function(t, e, i) {
            return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
        },
        ai = function(t, e, i) {
            var n, r, s, o, a, l, u, h, c, d, p = t ? At(t) ? [t >> 16, t >> 8 & 255, 255 & t] : 0 : si.black;
            if (!p) {
                if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), si[t]) p = si[t];
                else if ("#" === t.charAt(0)) {
                    if (t.length < 6 && (n = t.charAt(1), r = t.charAt(2), s = t.charAt(3), t = "#" + n + n + r + r + s + s + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")), 9 === t.length) return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & 255, 255 & p, parseInt(t.substr(7), 16) / 255];
                    p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t]
                } else if ("hsl" === t.substr(0, 3))
                    if (p = d = t.match(zt), e) {
                        if (~t.indexOf("=")) return p = t.match(Nt), i && p.length < 4 && (p[3] = 1), p
                    } else o = +p[0] % 360 / 360, a = +p[1] / 100, n = 2 * (l = +p[2] / 100) - (r = l <= .5 ? l * (a + 1) : l + a - l * a), p.length > 3 && (p[3] *= 1), p[0] = oi(o + 1 / 3, n, r), p[1] = oi(o, n, r), p[2] = oi(o - 1 / 3, n, r);
                else p = t.match(zt) || si.transparent;
                p = p.map(Number)
            }
            return e && !d && (n = p[0] / 255, r = p[1] / 255, s = p[2] / 255, l = ((u = Math.max(n, r, s)) + (h = Math.min(n, r, s))) / 2, u === h ? o = a = 0 : (c = u - h, a = l > .5 ? c / (2 - u - h) : c / (u + h), o = u === n ? (r - s) / c + (r < s ? 6 : 0) : u === r ? (s - n) / c + 2 : (n - r) / c + 4, o *= 60), p[0] = ~~(o + .5), p[1] = ~~(100 * a + .5), p[2] = ~~(100 * l + .5)), i && p.length < 4 && (p[3] = 1), p
        },
        li = function(t) {
            var e = [],
                i = [],
                n = -1;
            return t.split(hi).forEach((function(t) {
                var r = t.match(Vt) || [];
                e.push.apply(e, r), i.push(n += r.length + 1)
            })), e.c = i, e
        },
        ui = function(t, e, i) {
            var n, r, s, o, a = "",
                l = (t + a).match(hi),
                u = e ? "hsla(" : "rgba(",
                h = 0;
            if (!l) return t;
            if (l = l.map((function(t) {
                    return (t = ai(t, e, 1)) && u + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
                })), i && (s = li(t), (n = i.c).join(a) !== s.c.join(a)))
                for (o = (r = t.replace(hi, "1").split(Vt)).length - 1; h < o; h++) a += r[h] + (~n.indexOf(h) ? l.shift() || u + "0,0,0,0)" : (s.length ? s : l.length ? l : i).shift());
            if (!r)
                for (o = (r = t.split(hi)).length - 1; h < o; h++) a += r[h] + l[h];
            return a + r[o]
        },
        hi = function() {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in si) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        ci = /hsl[a]?\(/,
        di = function(t) {
            var e, i = t.join(" ");
            if (hi.lastIndex = 0, hi.test(i)) return e = ci.test(i), t[1] = ui(t[1], e), t[0] = ui(t[0], e, li(t[1])), !0
        },
        pi = function() {
            var t, e, i, n, r, s, o = Date.now,
                a = 500,
                l = 33,
                u = o(),
                h = u,
                c = 1e3 / 240,
                d = c,
                p = [],
                f = function i(f) {
                    var g, m, v, D, y = o() - h,
                        b = !0 === f;
                    if (y > a && (u += y - l), ((g = (v = (h += y) - u) - d) > 0 || b) && (D = ++n.frame, r = v - 1e3 * n.time, n.time = v /= 1e3, d += g + (g >= c ? 4 : c - g), m = 1), b || (t = e(i)), m)
                        for (s = 0; s < p.length; s++) p[s](v, r, D, f)
                };
            return n = {
                time: 0,
                frame: 0,
                tick: function() {
                    f(!0)
                },
                deltaRatio: function(t) {
                    return r / (1e3 / (t || 60))
                },
                wake: function() {
                    ht && (!lt && Ot() && (at = lt = window, ut = at.document || {}, jt.gsap = en, (at.gsapVersions || (at.gsapVersions = [])).push(en.version), Yt(Gt || at.GreenSockGlobals || !at.gsap && at || {}), i = at.requestAnimationFrame), t && n.sleep(), e = i || function(t) {
                        return setTimeout(t, d - 1e3 * n.time + 1 | 0)
                    }, pt = 1, f(2))
                },
                sleep: function() {
                    (i ? at.cancelAnimationFrame : clearTimeout)(t), pt = 0, e = Qt
                },
                lagSmoothing: function(t, e) {
                    a = t || 1 / 1e-8, l = Math.min(e, a, 0)
                },
                fps: function(t) {
                    c = 1e3 / (t || 240), d = 1e3 * n.time + c
                },
                add: function(t) {
                    p.indexOf(t) < 0 && p.push(t), fi()
                },
                remove: function(t) {
                    var e;
                    ~(e = p.indexOf(t)) && p.splice(e, 1) && s >= e && s--
                },
                _listeners: p
            }
        }(),
        fi = function() {
            return !pt && pi.wake()
        },
        gi = {},
        mi = /^[\d.\-M][\d.\-,\s]/,
        vi = /["']/g,
        Di = function(t) {
            for (var e, i, n, r = {}, s = t.substr(1, t.length - 3).split(":"), o = s[0], a = 1, l = s.length; a < l; a++) i = s[a], e = a !== l - 1 ? i.lastIndexOf(",") : i.length, n = i.substr(0, e), r[o] = isNaN(n) ? n.replace(vi, "").trim() : +n, o = i.substr(e + 1).trim();
            return r
        },
        yi = function(t) {
            return function(e) {
                return 1 - t(1 - e)
            }
        },
        bi = function t(e, i) {
            for (var n, r = e._first; r;) r instanceof Ti ? t(r, i) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === i || (r.timeline ? t(r.timeline, i) : (n = r._ease, r._ease = r._yEase, r._yEase = n, r._yoyo = i)), r = r._next
        },
        wi = function(t, e) {
            return t && (Tt(t) ? t : gi[t] || function(t) {
                var e, i, n, r, s = (t + "").split("("),
                    o = gi[s[0]];
                return o && s.length > 1 && o.config ? o.config.apply(null, ~t.indexOf("{") ? [Di(s[1])] : (e = t, i = e.indexOf("(") + 1, n = e.indexOf(")"), r = e.indexOf("(", i), e.substring(i, ~r && r < n ? e.indexOf(")", n + 1) : n)).split(",").map(pe)) : gi._CE && mi.test(t) ? gi._CE("", t) : o
            }(t)) || e
        },
        _i = function(t, e, i, n) {
            void 0 === i && (i = function(t) {
                return 1 - e(1 - t)
            }), void 0 === n && (n = function(t) {
                return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
            });
            var r, s = {
                easeIn: e,
                easeOut: i,
                easeInOut: n
            };
            return le(t, (function(t) {
                for (var e in gi[t] = jt[t] = s, gi[r = t.toLowerCase()] = i, s) gi[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = gi[t + "." + e] = s[e]
            })), s
        },
        Ci = function(t) {
            return function(e) {
                return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
            }
        },
        xi = function t(e, i, n) {
            var r = i >= 1 ? i : 1,
                s = (n || (e ? .3 : .45)) / (i < 1 ? i : 1),
                o = s / wt * (Math.asin(1 / r) || 0),
                a = function(t) {
                    return 1 === t ? 1 : r * Math.pow(2, -10 * t) * St((t - o) * s) + 1
                },
                l = "out" === e ? a : "in" === e ? function(t) {
                    return 1 - a(1 - t)
                } : Ci(a);
            return s = wt / s, l.config = function(i, n) {
                return t(e, i, n)
            }, l
        },
        Ei = function t(e, i) {
            void 0 === i && (i = 1.70158);
            var n = function(t) {
                    return t ? --t * t * ((i + 1) * t + i) + 1 : 0
                },
                r = "out" === e ? n : "in" === e ? function(t) {
                    return 1 - n(1 - t)
                } : Ci(n);
            return r.config = function(i) {
                return t(e, i)
            }, r
        };
    le("Linear,Quad,Cubic,Quart,Quint,Strong", (function(t, e) {
        var i = e < 5 ? e + 1 : e;
        _i(t + ",Power" + (i - 1), e ? function(t) {
            return Math.pow(t, i)
        } : function(t) {
            return t
        }, (function(t) {
            return 1 - Math.pow(1 - t, i)
        }), (function(t) {
            return t < .5 ? Math.pow(2 * t, i) / 2 : 1 - Math.pow(2 * (1 - t), i) / 2
        }))
    })), gi.Linear.easeNone = gi.none = gi.Linear.easeIn, _i("Elastic", xi("in"), xi("out"), xi()), ft = 7.5625, mt = 1 / (gt = 2.75), _i("Bounce", (function(t) {
        return 1 - vt(1 - t)
    }), vt = function(t) {
        return t < mt ? ft * t * t : t < .7272727272727273 ? ft * Math.pow(t - 1.5 / gt, 2) + .75 : t < .9090909090909092 ? ft * (t -= 2.25 / gt) * t + .9375 : ft * Math.pow(t - 2.625 / gt, 2) + .984375
    }), _i("Expo", (function(t) {
        return t ? Math.pow(2, 10 * (t - 1)) : 0
    })), _i("Circ", (function(t) {
        return -(xt(1 - t * t) - 1)
    })), _i("Sine", (function(t) {
        return 1 === t ? 1 : 1 - Et(t * _t)
    })), _i("Back", Ei("in"), Ei("out"), Ei()), gi.SteppedEase = gi.steps = jt.SteppedEase = {
        config: function(t, e) {
            void 0 === t && (t = 1);
            var i = 1 / t,
                n = t + (e ? 0 : 1),
                r = e ? 1 : 0;
            return function(t) {
                return ((n * qe(0, 1 - 1e-8, t) | 0) + r) * i
            }
        }
    }, yt.ease = gi["quad.out"], le("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function(t) {
        return re += t + "," + t + "Params,"
    }));
    var Si = function(t, e) {
            this.id = Ct++, t._gsap = this, this.target = t, this.harness = e, this.get = e ? e.get : ae, this.set = e ? e.getSetter : Hi
        },
        Fi = function() {
            function t(t) {
                this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Me(this, +t.duration, 1, 1), this.data = t.data, pt || pi.wake()
            }
            var e = t.prototype;
            return e.delay = function(t) {
                return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
            }, e.duration = function(t) {
                return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
            }, e.totalDuration = function(t) {
                return arguments.length ? (this._dirty = 0, Me(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
            }, e.totalTime = function(t, e) {
                if (fi(), !arguments.length) return this._tTime;
                var i = this._dp;
                if (i && i.smoothChildTiming && this._ts) {
                    for (Ae(this, t), !i._dp || i.parent || Ie(i, this); i.parent;) i.parent._time !== i._start + (i._ts >= 0 ? i._tTime / i._ts : (i.totalDuration() - i._tTime) / -i._ts) && i.totalTime(i._tTime, !0), i = i.parent;
                    !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && ke(this._dp, this, this._start - this._delay)
                }
                return (this._tTime !== t || !this._dur && !e || this._initted && 1e-8 === Math.abs(this._zTime) || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), de(this, t, e)), this
            }, e.time = function(t, e) {
                return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Ee(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
            }, e.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
            }, e.progress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Ee(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
            }, e.iteration = function(t, e) {
                var i = this.duration() + this._rDelay;
                return arguments.length ? this.totalTime(this._time + (t - 1) * i, e) : this._repeat ? Se(this._tTime, i) + 1 : 1
            }, e.timeScale = function(t) {
                if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
                if (this._rts === t) return this;
                var e = this.parent && this._ts ? Fe(this.parent._time, this) : this._tTime;
                return this._rts = +t || 0, this._ts = this._ps || -1e-8 === t ? 0 : this._rts, xe(this.totalTime(qe(-this._delay, this._tDur, e), !0))
            }, e.paused = function(t) {
                return arguments.length ? (this._ps !== t && (this._ps = t, t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (fi(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && 1e-8 !== Math.abs(this._zTime) && (this._tTime -= 1e-8)))), this) : this._ps
            }, e.startTime = function(t) {
                if (arguments.length) {
                    this._start = t;
                    var e = this.parent || this._dp;
                    return e && (e._sort || !this.parent) && ke(e, this, t - this._delay), this
                }
                return this._start
            }, e.endTime = function(t) {
                return this._start + (Lt(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
            }, e.rawTime = function(t) {
                var e = this.parent || this._dp;
                return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Fe(e.rawTime(t), this) : this._tTime : this._tTime
            }, e.globalTime = function(t) {
                for (var e = this, i = arguments.length ? t : e.rawTime(); e;) i = e._start + i / (e._ts || 1), e = e._dp;
                return i
            }, e.repeat = function(t) {
                return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Be(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
            }, e.repeatDelay = function(t) {
                if (arguments.length) {
                    var e = this._time;
                    return this._rDelay = t, Be(this), e ? this.time(e) : this
                }
                return this._rDelay
            }, e.yoyo = function(t) {
                return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, e.seek = function(t, e) {
                return this.totalTime(Ne(this, t), Lt(e))
            }, e.restart = function(t, e) {
                return this.play().totalTime(t ? -this._delay : 0, Lt(e))
            }, e.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, e.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, e.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, e.resume = function() {
                return this.paused(!1)
            }, e.reversed = function(t) {
                return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)), this) : this._rts < 0
            }, e.invalidate = function() {
                return this._initted = this._act = 0, this._zTime = -1e-8, this
            }, e.isActive = function() {
                var t, e = this.parent || this._dp,
                    i = this._start;
                return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= i && t < this.endTime(!0) - 1e-8))
            }, e.eventCallback = function(t, e, i) {
                var n = this.vars;
                return arguments.length > 1 ? (e ? (n[t] = e, i && (n[t + "Params"] = i), "onUpdate" === t && (this._onUpdate = e)) : delete n[t], this) : n[t]
            }, e.then = function(t) {
                var e = this;
                return new Promise((function(i) {
                    var n = Tt(t) ? t : fe,
                        r = function() {
                            var t = e.then;
                            e.then = null, Tt(n) && (n = n(e)) && (n.then || n === e) && (e.then = t), i(n), e.then = t
                        };
                    e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? r() : e._prom = r
                }))
            }, e.kill = function() {
                ni(this)
            }, t
        }();
    ge(Fi.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Ti = function(t) {
        function e(e, i) {
            var n;
            return void 0 === e && (e = {}), (n = t.call(this, e) || this).labels = {}, n.smoothChildTiming = !!e.smoothChildTiming, n.autoRemoveChildren = !!e.autoRemoveChildren, n._sort = Lt(e.sortChildren), ot && ke(e.parent || ot, nt(n), i), e.reversed && n.reverse(), e.paused && n.paused(!0), e.scrollTrigger && Le(nt(n), e.scrollTrigger), n
        }
        rt(e, t);
        var i = e.prototype;
        return i.to = function(t, e, i) {
            return Ve(0, arguments, this), this
        }, i.from = function(t, e, i) {
            return Ve(1, arguments, this), this
        }, i.fromTo = function(t, e, i, n) {
            return Ve(2, arguments, this), this
        }, i.set = function(t, e, i) {
            return e.duration = 0, e.parent = this, be(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new zi(t, e, Ne(this, i), 1), this
        }, i.call = function(t, e, i) {
            return ke(this, zi.delayedCall(0, t, e), i)
        }, i.staggerTo = function(t, e, i, n, r, s, o) {
            return i.duration = e, i.stagger = i.stagger || n, i.onComplete = s, i.onCompleteParams = o, i.parent = this, new zi(t, i, Ne(this, r)), this
        }, i.staggerFrom = function(t, e, i, n, r, s, o) {
            return i.runBackwards = 1, be(i).immediateRender = Lt(i.immediateRender), this.staggerTo(t, e, i, n, r, s, o)
        }, i.staggerFromTo = function(t, e, i, n, r, s, o, a) {
            return n.startAt = i, be(n).immediateRender = Lt(n.immediateRender), this.staggerTo(t, e, n, r, s, o, a)
        }, i.render = function(t, e, i) {
            var n, r, s, o, a, l, u, h, c, d, p, f, g = this._time,
                m = this._dirty ? this.totalDuration() : this._tDur,
                v = this._dur,
                D = this !== ot && t > m - 1e-8 && t >= 0 ? m : t < 1e-8 ? 0 : t,
                y = this._zTime < 0 != t < 0 && (this._initted || !v);
            if (D !== this._tTime || i || y) {
                if (g !== this._time && v && (D += this._time - g, t += this._time - g), n = D, c = this._start, l = !(h = this._ts), y && (v || (g = this._zTime), (t || !e) && (this._zTime = t)), this._repeat) {
                    if (p = this._yoyo, a = v + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * a + t, e, i);
                    if (n = ue(D % a), D === m ? (o = this._repeat, n = v) : ((o = ~~(D / a)) && o === D / a && (n = v, o--), n > v && (n = v)), d = Se(this._tTime, a), !g && this._tTime && d !== o && (d = o), p && 1 & o && (n = v - n, f = 1), o !== d && !this._lock) {
                        var b = p && 1 & d,
                            w = b === (p && 1 & o);
                        if (o < d && (b = !b), g = b ? 0 : v, this._lock = 1, this.render(g || (f ? 0 : ue(o * a)), e, !v)._lock = 0, this._tTime = D, !e && this.parent && ii(this, "onRepeat"), this.vars.repeatRefresh && !f && (this.invalidate()._lock = 1), g && g !== this._time || l !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (v = this._dur, m = this._tDur, w && (this._lock = 2, g = b ? v : -1e-4, this.render(g, !0), this.vars.repeatRefresh && !f && this.invalidate()), this._lock = 0, !this._ts && !l) return this;
                        bi(this, f)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (u = function(t, e, i) {
                        var n;
                        if (i > e)
                            for (n = t._first; n && n._start <= i;) {
                                if (!n._dur && "isPause" === n.data && n._start > e) return n;
                                n = n._next
                            } else
                                for (n = t._last; n && n._start >= i;) {
                                    if (!n._dur && "isPause" === n.data && n._start < e) return n;
                                    n = n._prev
                                }
                    }(this, ue(g), ue(n))) && (D -= n - (n = u._start)), this._tTime = D, this._time = n, this._act = !h, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, g = 0), !g && n && !e && (ii(this, "onStart"), this._tTime !== D)) return this;
                if (n >= g && t >= 0)
                    for (r = this._first; r;) {
                        if (s = r._next, (r._act || n >= r._start) && r._ts && u !== r) {
                            if (r.parent !== this) return this.render(t, e, i);
                            if (r.render(r._ts > 0 ? (n - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (n - r._start) * r._ts, e, i), n !== this._time || !this._ts && !l) {
                                u = 0, s && (D += this._zTime = -1e-8);
                                break
                            }
                        }
                        r = s
                    } else {
                        r = this._last;
                        for (var _ = t < 0 ? t : n; r;) {
                            if (s = r._prev, (r._act || _ <= r._end) && r._ts && u !== r) {
                                if (r.parent !== this) return this.render(t, e, i);
                                if (r.render(r._ts > 0 ? (_ - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (_ - r._start) * r._ts, e, i), n !== this._time || !this._ts && !l) {
                                    u = 0, s && (D += this._zTime = _ ? -1e-8 : 1e-8);
                                    break
                                }
                            }
                            r = s
                        }
                    }
                if (u && !e && (this.pause(), u.render(n >= g ? 0 : -1e-8)._zTime = n >= g ? 1 : -1, this._ts)) return this._start = c, Te(this), this.render(t, e, i);
                this._onUpdate && !e && ii(this, "onUpdate", !0), (D === m && m >= this.totalDuration() || !D && g) && (c !== this._start && Math.abs(h) === Math.abs(this._ts) || this._lock || ((t || !v) && (D === m && this._ts > 0 || !D && this._ts < 0) && _e(this, 1), e || t < 0 && !g || !D && !g && m || (ii(this, D === m && t >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(D < m && this.timeScale() > 0) && this._prom())))
            }
            return this
        }, i.add = function(t, e) {
            var i = this;
            if (At(e) || (e = Ne(this, e, t)), !(t instanceof Fi)) {
                if (Bt(t)) return t.forEach((function(t) {
                    return i.add(t, e)
                })), this;
                if (Ft(t)) return this.addLabel(t, e);
                if (!Tt(t)) return this;
                t = zi.delayedCall(0, t)
            }
            return this !== t ? ke(this, t, e) : this
        }, i.getChildren = function(t, e, i, n) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === i && (i = !0), void 0 === n && (n = -bt);
            for (var r = [], s = this._first; s;) s._start >= n && (s instanceof zi ? e && r.push(s) : (i && r.push(s), t && r.push.apply(r, s.getChildren(!0, e, i)))), s = s._next;
            return r
        }, i.getById = function(t) {
            for (var e = this.getChildren(1, 1, 1), i = e.length; i--;)
                if (e[i].vars.id === t) return e[i]
        }, i.remove = function(t) {
            return Ft(t) ? this.removeLabel(t) : Tt(t) ? this.killTweensOf(t) : (we(this, t), t === this._recent && (this._recent = this._last), Ce(this))
        }, i.totalTime = function(e, i) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ue(pi.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))), t.prototype.totalTime.call(this, e, i), this._forcing = 0, this) : this._tTime
        }, i.addLabel = function(t, e) {
            return this.labels[t] = Ne(this, e), this
        }, i.removeLabel = function(t) {
            return delete this.labels[t], this
        }, i.addPause = function(t, e, i) {
            var n = zi.delayedCall(0, e || Qt, i);
            return n.data = "isPause", this._hasPause = 1, ke(this, n, Ne(this, t))
        }, i.removePause = function(t) {
            var e = this._first;
            for (t = Ne(this, t); e;) e._start === t && "isPause" === e.data && _e(e), e = e._next
        }, i.killTweensOf = function(t, e, i) {
            for (var n = this.getTweensOf(t, i), r = n.length; r--;) Ai !== n[r] && n[r].kill(t, e);
            return this
        }, i.getTweensOf = function(t, e) {
            for (var i, n = [], r = Ye(t), s = this._first, o = At(e); s;) s instanceof zi ? he(s._targets, r) && (o ? (!Ai || s._initted && s._ts) && s.globalTime(0) <= e && s.globalTime(s.totalDuration()) > e : !e || s.isActive()) && n.push(s) : (i = s.getTweensOf(r, e)).length && n.push.apply(n, i), s = s._next;
            return n
        }, i.tweenTo = function(t, e) {
            e = e || {};
            var i, n = this,
                r = Ne(n, t),
                s = e,
                o = s.startAt,
                a = s.onStart,
                l = s.onStartParams,
                u = s.immediateRender,
                h = zi.to(n, ge({
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: r,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((r - (o && "time" in o ? o.time : n._time)) / n.timeScale()) || 1e-8,
                    onStart: function() {
                        if (n.pause(), !i) {
                            var t = e.duration || Math.abs((r - (o && "time" in o ? o.time : n._time)) / n.timeScale());
                            h._dur !== t && Me(h, t, 0, 1).render(h._time, !0, !0), i = 1
                        }
                        a && a.apply(h, l || [])
                    }
                }, e));
            return u ? h.render(0) : h
        }, i.tweenFromTo = function(t, e, i) {
            return this.tweenTo(e, ge({
                startAt: {
                    time: Ne(this, t)
                }
            }, i))
        }, i.recent = function() {
            return this._recent
        }, i.nextLabel = function(t) {
            return void 0 === t && (t = this._time), ei(this, Ne(this, t))
        }, i.previousLabel = function(t) {
            return void 0 === t && (t = this._time), ei(this, Ne(this, t), 1)
        }, i.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + 1e-8)
        }, i.shiftChildren = function(t, e, i) {
            void 0 === i && (i = 0);
            for (var n, r = this._first, s = this.labels; r;) r._start >= i && (r._start += t, r._end += t), r = r._next;
            if (e)
                for (n in s) s[n] >= i && (s[n] += t);
            return Ce(this)
        }, i.invalidate = function() {
            var e = this._first;
            for (this._lock = 0; e;) e.invalidate(), e = e._next;
            return t.prototype.invalidate.call(this)
        }, i.clear = function(t) {
            void 0 === t && (t = !0);
            for (var e, i = this._first; i;) e = i._next, this.remove(i), i = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Ce(this)
        }, i.totalDuration = function(t) {
            var e, i, n, r = 0,
                s = this,
                o = s._last,
                a = bt;
            if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
            if (s._dirty) {
                for (n = s.parent; o;) e = o._prev, o._dirty && o.totalDuration(), (i = o._start) > a && s._sort && o._ts && !s._lock ? (s._lock = 1, ke(s, o, i - o._delay, 1)._lock = 0) : a = i, i < 0 && o._ts && (r -= i, (!n && !s._dp || n && n.smoothChildTiming) && (s._start += i / s._ts, s._time -= i, s._tTime -= i), s.shiftChildren(-i, !1, -Infinity), a = 0), o._end > r && o._ts && (r = o._end), o = e;
                Me(s, s === ot && s._time > r ? s._time : r, 1, 1), s._dirty = 0
            }
            return s._tDur
        }, e.updateRoot = function(t) {
            if (ot._ts && (de(ot, Fe(t, ot)), ct = pi.frame), pi.frame >= ie) {
                ie += Dt.autoSleep || 120;
                var e = ot._first;
                if ((!e || !e._ts) && Dt.autoSleep && pi._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || pi.sleep()
                }
            }
        }, e
    }(Fi);
    ge(Ti.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var Ai, Ii = function(t, e, i, n, r, s, o) {
            var a, l, u, h, c, d, p, f, g = new Ji(this._pt, t, e, 0, 1, Gi, null, r),
                m = 0,
                v = 0;
            for (g.b = i, g.e = n, i += "", (p = ~(n += "").indexOf("random(")) && (n = Ze(n)), s && (s(f = [i, n], t, e), i = f[0], n = f[1]), l = i.match(Rt) || []; a = Rt.exec(n);) h = a[0], c = n.substring(m, a.index), u ? u = (u + 1) % 5 : "rgba(" === c.substr(-5) && (u = 1), h !== l[v++] && (d = parseFloat(l[v - 1]) || 0, g._pt = {
                _next: g._pt,
                p: c || 1 === v ? c : ",",
                s: d,
                c: "=" === h.charAt(1) ? parseFloat(h.substr(2)) * ("-" === h.charAt(0) ? -1 : 1) : parseFloat(h) - d,
                m: u && u < 4 ? Math.round : 0
            }, m = Rt.lastIndex);
            return g.c = m < n.length ? n.substring(m, n.length) : "", g.fp = o, (qt.test(n) || p) && (g.e = 0), this._pt = g, g
        },
        ki = function(t, e, i, n, r, s, o, a, l) {
            Tt(n) && (n = n(r || 0, t, s));
            var u, h = t[e],
                c = "get" !== i ? i : Tt(h) ? l ? t[e.indexOf("set") || !Tt(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : h,
                d = Tt(h) ? l ? Ri : Vi : Ni;
            if (Ft(n) && (~n.indexOf("random(") && (n = Ze(n)), "=" === n.charAt(1) && ((u = parseFloat(c) + parseFloat(n.substr(2)) * ("-" === n.charAt(0) ? -1 : 1) + (He(c) || 0)) || 0 === u) && (n = u)), c !== n) return isNaN(c * n) || "" === n ? (!h && !(e in t) && Ut(e, n), Ii.call(this, t, e, c, n, d, a || Dt.stringFilter, l)) : (u = new Ji(this._pt, t, e, +c || 0, n - (c || 0), "boolean" == typeof h ? ji : Wi, 0, d), l && (u.fp = l), o && u.modifier(o, this, t), this._pt = u)
        },
        Li = function(t, e, i, n, r, s) {
            var o, a, l, u;
            if (te[t] && !1 !== (o = new te[t]).init(r, o.rawVars ? e[t] : function(t, e, i, n, r) {
                    if (Tt(t) && (t = Pi(t, r, e, i, n)), !kt(t) || t.style && t.nodeType || Bt(t) || Mt(t)) return Ft(t) ? Pi(t, r, e, i, n) : t;
                    var s, o = {};
                    for (s in t) o[s] = Pi(t[s], r, e, i, n);
                    return o
                }(e[t], n, r, s, i), i, n, s) && (i._pt = a = new Ji(i._pt, r, t, 0, 1, o.render, o, 0, o.priority), i !== dt))
                for (l = i._ptLookup[i._targets.indexOf(r)], u = o._props.length; u--;) l[o._props[u]] = a;
            return o
        },
        Oi = function t(e, i) {
            var n, r, s, o, a, l, u, h, c, d, p, f, g, m = e.vars,
                v = m.ease,
                D = m.startAt,
                y = m.immediateRender,
                b = m.lazy,
                w = m.onUpdate,
                _ = m.onUpdateParams,
                C = m.callbackScope,
                x = m.runBackwards,
                E = m.yoyoEase,
                S = m.keyframes,
                F = m.autoRevert,
                T = e._dur,
                A = e._startAt,
                I = e._targets,
                k = e.parent,
                L = k && "nested" === k.data ? k.parent._targets : I,
                O = "auto" === e._overwrite && !st,
                P = e.timeline;
            if (P && (!S || !v) && (v = "none"), e._ease = wi(v, yt.ease), e._yEase = E ? yi(wi(!0 === E ? v : E, yt.ease)) : 0, E && e._yoyo && !e._repeat && (E = e._yEase, e._yEase = e._ease, e._ease = E), e._from = !P && !!m.runBackwards, !P) {
                if (f = (h = I[0] ? oe(I[0]).harness : 0) && m[h.prop], n = ye(m, Jt), A && A.render(-1, !0).kill(), D)
                    if (_e(e._startAt = zi.set(I, ge({
                            data: "isStart",
                            overwrite: !1,
                            parent: k,
                            immediateRender: !0,
                            lazy: Lt(b),
                            startAt: null,
                            delay: 0,
                            onUpdate: w,
                            onUpdateParams: _,
                            callbackScope: C,
                            stagger: 0
                        }, D))), i < 0 && !y && !F && e._startAt.render(-1, !0), y) {
                        if (i > 0 && !F && (e._startAt = 0), T && i <= 0) return void(i && (e._zTime = i))
                    } else !1 === F && (e._startAt = 0);
                else if (x && T)
                    if (A) !F && (e._startAt = 0);
                    else if (i && (y = !1), s = ge({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: y && Lt(b),
                        immediateRender: y,
                        stagger: 0,
                        parent: k
                    }, n), f && (s[h.prop] = f), _e(e._startAt = zi.set(I, s)), i < 0 && e._startAt.render(-1, !0), y) {
                    if (!i) return
                } else t(e._startAt, 1e-8);
                for (e._pt = 0, b = T && Lt(b) || b && !T, r = 0; r < I.length; r++) {
                    if (u = (a = I[r])._gsap || se(I)[r]._gsap, e._ptLookup[r] = d = {}, Zt[u.id] && Kt.length && ce(), p = L === I ? r : L.indexOf(a), h && !1 !== (c = new h).init(a, f || n, e, p, L) && (e._pt = o = new Ji(e._pt, a, c.name, 0, 1, c.render, c, 0, c.priority), c._props.forEach((function(t) {
                            d[t] = o
                        })), c.priority && (l = 1)), !h || f)
                        for (s in n) te[s] && (c = Li(s, n, e, p, a, L)) ? c.priority && (l = 1) : d[s] = o = ki.call(e, a, s, "get", n[s], p, L, 0, m.stringFilter);
                    e._op && e._op[r] && e.kill(a, e._op[r]), O && e._pt && (Ai = e, ot.killTweensOf(a, d, e.globalTime(0)), g = !e.parent, Ai = 0), e._pt && b && (Zt[u.id] = 1)
                }
                l && Qi(e), e._onInit && e._onInit(e)
            }
            e._onUpdate = w, e._initted = (!e._op || e._pt) && !g
        },
        Pi = function(t, e, i, n, r) {
            return Tt(t) ? t.call(e, i, n, r) : Ft(t) && ~t.indexOf("random(") ? Ze(t) : t
        },
        Mi = re + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
        Bi = (Mi + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
        zi = function(t) {
            function e(e, i, n, r) {
                var s;
                "number" == typeof i && (n.duration = i, i = n, n = null);
                var o, a, l, u, h, c, d, p, f = (s = t.call(this, r ? i : be(i)) || this).vars,
                    g = f.duration,
                    m = f.delay,
                    v = f.immediateRender,
                    D = f.stagger,
                    y = f.overwrite,
                    b = f.keyframes,
                    w = f.defaults,
                    _ = f.scrollTrigger,
                    C = f.yoyoEase,
                    x = i.parent || ot,
                    E = (Bt(e) || Mt(e) ? At(e[0]) : "length" in i) ? [e] : Ye(e);
                if (s._targets = E.length ? se(E) : Xt("GSAP target " + e + " not found. https://greensock.com", !Dt.nullTargetWarn) || [], s._ptLookup = [], s._overwrite = y, b || D || Pt(g) || Pt(m)) {
                    if (i = s.vars, (o = s.timeline = new Ti({
                            data: "nested",
                            defaults: w || {}
                        })).kill(), o.parent = o._dp = nt(s), o._start = 0, b) ge(o.vars.defaults, {
                        ease: "none"
                    }), D ? E.forEach((function(t, e) {
                        return b.forEach((function(i, n) {
                            return o.to(t, i, n ? ">" : e * D)
                        }))
                    })) : b.forEach((function(t) {
                        return o.to(E, t, ">")
                    }));
                    else {
                        if (u = E.length, d = D ? Xe(D) : Qt, kt(D))
                            for (h in D) ~Mi.indexOf(h) && (p || (p = {}), p[h] = D[h]);
                        for (a = 0; a < u; a++) {
                            for (h in l = {}, i) Bi.indexOf(h) < 0 && (l[h] = i[h]);
                            l.stagger = 0, C && (l.yoyoEase = C), p && ve(l, p), c = E[a], l.duration = +Pi(g, nt(s), a, c, E), l.delay = (+Pi(m, nt(s), a, c, E) || 0) - s._delay, !D && 1 === u && l.delay && (s._delay = m = l.delay, s._start += m, l.delay = 0), o.to(c, l, d(a, c, E))
                        }
                        o.duration() ? g = m = 0 : s.timeline = 0
                    }
                    g || s.duration(g = o.duration())
                } else s.timeline = 0;
                return !0 !== y || st || (Ai = nt(s), ot.killTweensOf(E), Ai = 0), ke(x, nt(s), n), i.reversed && s.reverse(), i.paused && s.paused(!0), (v || !g && !b && s._start === ue(x._time) && Lt(v) && function t(e) {
                    return !e || e._ts && t(e.parent)
                }(nt(s)) && "nested" !== x.data) && (s._tTime = -1e-8, s.render(Math.max(0, -m))), _ && Le(nt(s), _), s
            }
            rt(e, t);
            var i = e.prototype;
            return i.render = function(t, e, i) {
                var n, r, s, o, a, l, u, h, c, d = this._time,
                    p = this._tDur,
                    f = this._dur,
                    g = t > p - 1e-8 && t >= 0 ? p : t < 1e-8 ? 0 : t;
                if (f) {
                    if (g !== this._tTime || !t || i || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                        if (n = g, h = this.timeline, this._repeat) {
                            if (o = f + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, i);
                            if (n = ue(g % o), g === p ? (s = this._repeat, n = f) : ((s = ~~(g / o)) && s === g / o && (n = f, s--), n > f && (n = f)), (l = this._yoyo && 1 & s) && (c = this._yEase, n = f - n), a = Se(this._tTime, o), n === d && !i && this._initted) return this;
                            s !== a && (h && this._yEase && bi(h, l), !this.vars.repeatRefresh || l || this._lock || (this._lock = i = 1, this.render(ue(o * s), !0).invalidate()._lock = 0))
                        }
                        if (!this._initted) {
                            if (Oe(this, t < 0 ? t : n, i, e)) return this._tTime = 0, this;
                            if (f !== this._dur) return this.render(t, e, i)
                        }
                        if (this._tTime = g, this._time = n, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = u = (c || this._ease)(n / f), this._from && (this.ratio = u = 1 - u), n && !d && !e && (ii(this, "onStart"), this._tTime !== g)) return this;
                        for (r = this._pt; r;) r.r(u, r.d), r = r._next;
                        h && h.render(t < 0 ? t : !n && l ? -1e-8 : h._dur * u, e, i) || this._startAt && (this._zTime = t), this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, i), ii(this, "onUpdate")), this._repeat && s !== a && this.vars.onRepeat && !e && this.parent && ii(this, "onRepeat"), g !== this._tDur && g || this._tTime !== g || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0), (t || !f) && (g === this._tDur && this._ts > 0 || !g && this._ts < 0) && _e(this, 1), e || t < 0 && !d || !g && !d || (ii(this, g === p ? "onComplete" : "onReverseComplete", !0), this._prom && !(g < p && this.timeScale() > 0) && this._prom()))
                    }
                } else ! function(t, e, i, n) {
                    var r, s, o, a = t.ratio,
                        l = e < 0 || !e && (!t._start && function t(e) {
                            var i = e.parent;
                            return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || t(i))
                        }(t) && (t._initted || !Pe(t)) || (t._ts < 0 || t._dp._ts < 0) && !Pe(t)) ? 0 : 1,
                        u = t._rDelay,
                        h = 0;
                    if (u && t._repeat && (h = qe(0, t._tDur, e), s = Se(h, u), o = Se(t._tTime, u), t._yoyo && 1 & s && (l = 1 - l), s !== o && (a = 1 - l, t.vars.repeatRefresh && t._initted && t.invalidate())), l !== a || n || 1e-8 === t._zTime || !e && t._zTime) {
                        if (!t._initted && Oe(t, e, n, i)) return;
                        for (o = t._zTime, t._zTime = e || (i ? 1e-8 : 0), i || (i = e && !o), t.ratio = l, t._from && (l = 1 - l), t._time = 0, t._tTime = h, r = t._pt; r;) r.r(l, r.d), r = r._next;
                        t._startAt && e < 0 && t._startAt.render(e, !0, !0), t._onUpdate && !i && ii(t, "onUpdate"), h && t._repeat && !i && t.parent && ii(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === l && (l && _e(t, 1), i || (ii(t, l ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                    } else t._zTime || (t._zTime = e)
                }(this, t, e, i);
                return this
            }, i.targets = function() {
                return this._targets
            }, i.invalidate = function() {
                return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(), t.prototype.invalidate.call(this)
            }, i.kill = function(t, e) {
                if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? ni(this) : this;
                if (this.timeline) {
                    var i = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(t, e, Ai && !0 !== Ai.vars.overwrite)._first || ni(this), this.parent && i !== this.timeline.totalDuration() && Me(this, this._dur * this.timeline._tDur / i, 0, 1), this
                }
                var n, r, s, o, a, l, u, h = this._targets,
                    c = t ? Ye(t) : h,
                    d = this._ptLookup,
                    p = this._pt;
                if ((!e || "all" === e) && function(t, e) {
                        for (var i = t.length, n = i === e.length; n && i-- && t[i] === e[i];);
                        return i < 0
                    }(h, c)) return "all" === e && (this._pt = 0), ni(this);
                for (n = this._op = this._op || [], "all" !== e && (Ft(e) && (a = {}, le(e, (function(t) {
                        return a[t] = 1
                    })), e = a), e = function(t, e) {
                        var i, n, r, s, o = t[0] ? oe(t[0]).harness : 0,
                            a = o && o.aliases;
                        if (!a) return e;
                        for (n in i = ve({}, e), a)
                            if (n in i)
                                for (r = (s = a[n].split(",")).length; r--;) i[s[r]] = i[n];
                        return i
                    }(h, e)), u = h.length; u--;)
                    if (~c.indexOf(h[u]))
                        for (a in r = d[u], "all" === e ? (n[u] = e, o = r, s = {}) : (s = n[u] = n[u] || {}, o = e), o)(l = r && r[a]) && ("kill" in l.d && !0 !== l.d.kill(a) || we(this, l, "_pt"), delete r[a]), "all" !== s && (s[a] = 1);
                return this._initted && !this._pt && p && ni(this), this
            }, e.to = function(t, i) {
                return new e(t, i, arguments[2])
            }, e.from = function(t, e) {
                return Ve(1, arguments)
            }, e.delayedCall = function(t, i, n, r) {
                return new e(i, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: t,
                    onComplete: i,
                    onReverseComplete: i,
                    onCompleteParams: n,
                    onReverseCompleteParams: n,
                    callbackScope: r
                })
            }, e.fromTo = function(t, e, i) {
                return Ve(2, arguments)
            }, e.set = function(t, i) {
                return i.duration = 0, i.repeatDelay || (i.repeat = 0), new e(t, i)
            }, e.killTweensOf = function(t, e, i) {
                return ot.killTweensOf(t, e, i)
            }, e
        }(Fi);
    ge(zi.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), le("staggerTo,staggerFrom,staggerFromTo", (function(t) {
        zi[t] = function() {
            var e = new Ti,
                i = We.call(arguments, 0);
            return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i)
        }
    }));
    var Ni = function(t, e, i) {
            return t[e] = i
        },
        Vi = function(t, e, i) {
            return t[e](i)
        },
        Ri = function(t, e, i, n) {
            return t[e](n.fp, i)
        },
        qi = function(t, e, i) {
            return t.setAttribute(e, i)
        },
        Hi = function(t, e) {
            return Tt(t[e]) ? Vi : It(t[e]) && t.setAttribute ? qi : Ni
        },
        Wi = function(t, e) {
            return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
        },
        ji = function(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        Gi = function(t, e) {
            var i = e._pt,
                n = "";
            if (!t && e.b) n = e.b;
            else if (1 === t && e.e) n = e.e;
            else {
                for (; i;) n = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) + n, i = i._next;
                n += e.c
            }
            e.set(e.t, e.p, n, e)
        },
        Yi = function(t, e) {
            for (var i = e._pt; i;) i.r(t, i.d), i = i._next
        },
        Ui = function(t, e, i, n) {
            for (var r, s = this._pt; s;) r = s._next, s.p === n && s.modifier(t, e, i), s = r
        },
        Xi = function(t) {
            for (var e, i, n = this._pt; n;) i = n._next, n.p === t && !n.op || n.op === t ? we(this, n, "_pt") : n.dep || (e = 1), n = i;
            return !e
        },
        $i = function(t, e, i, n) {
            n.mSet(t, e, n.m.call(n.tween, i, n.mt), n)
        },
        Qi = function(t) {
            for (var e, i, n, r, s = t._pt; s;) {
                for (e = s._next, i = n; i && i.pr > s.pr;) i = i._next;
                (s._prev = i ? i._prev : r) ? s._prev._next = s: n = s, (s._next = i) ? i._prev = s : r = s, s = e
            }
            t._pt = n
        },
        Ji = function() {
            function t(t, e, i, n, r, s, o, a, l) {
                this.t = e, this.s = n, this.c = r, this.p = i, this.r = s || Wi, this.d = o || this, this.set = a || Ni, this.pr = l || 0, this._next = t, t && (t._prev = this)
            }
            return t.prototype.modifier = function(t, e, i) {
                this.mSet = this.mSet || this.set, this.set = $i, this.m = t, this.mt = i, this.tween = e
            }, t
        }();
    le(re + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function(t) {
        return Jt[t] = 1
    })), jt.TweenMax = jt.TweenLite = zi, jt.TimelineLite = jt.TimelineMax = Ti, ot = new Ti({
        sortChildren: !1,
        defaults: yt,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), Dt.stringFilter = di;
    var Ki = {
        registerPlugin: function() {
            for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
            e.forEach((function(t) {
                return ri(t)
            }))
        },
        timeline: function(t) {
            return new Ti(t)
        },
        getTweensOf: function(t, e) {
            return ot.getTweensOf(t, e)
        },
        getProperty: function(t, e, i, n) {
            Ft(t) && (t = Ye(t)[0]);
            var r = oe(t || {}).get,
                s = i ? fe : pe;
            return "native" === i && (i = ""), t ? e ? s((te[e] && te[e].get || r)(t, e, i, n)) : function(e, i, n) {
                return s((te[e] && te[e].get || r)(t, e, i, n))
            } : t
        },
        quickSetter: function(t, e, i) {
            if ((t = Ye(t)).length > 1) {
                var n = t.map((function(t) {
                        return en.quickSetter(t, e, i)
                    })),
                    r = n.length;
                return function(t) {
                    for (var e = r; e--;) n[e](t)
                }
            }
            t = t[0] || {};
            var s = te[e],
                o = oe(t),
                a = o.harness && (o.harness.aliases || {})[e] || e,
                l = s ? function(e) {
                    var n = new s;
                    dt._pt = 0, n.init(t, i ? e + i : e, dt, 0, [t]), n.render(1, n), dt._pt && Yi(1, dt)
                } : o.set(t, a);
            return s ? l : function(e) {
                return l(t, a, i ? e + i : e, o, 1)
            }
        },
        isTweening: function(t) {
            return ot.getTweensOf(t, !0).length > 0
        },
        defaults: function(t) {
            return t && t.ease && (t.ease = wi(t.ease, yt.ease)), De(yt, t || {})
        },
        config: function(t) {
            return De(Dt, t || {})
        },
        registerEffect: function(t) {
            var e = t.name,
                i = t.effect,
                n = t.plugins,
                r = t.defaults,
                s = t.extendTimeline;
            (n || "").split(",").forEach((function(t) {
                return t && !te[t] && !jt[t] && Xt(e + " effect requires " + t + " plugin.")
            })), ee[e] = function(t, e, n) {
                return i(Ye(t), ge(e || {}, r), n)
            }, s && (Ti.prototype[e] = function(t, i, n) {
                return this.add(ee[e](t, kt(i) ? i : (n = i) && {}, this), n)
            })
        },
        registerEase: function(t, e) {
            gi[t] = wi(e)
        },
        parseEase: function(t, e) {
            return arguments.length ? wi(t, e) : gi
        },
        getById: function(t) {
            return ot.getById(t)
        },
        exportRoot: function(t, e) {
            void 0 === t && (t = {});
            var i, n, r = new Ti(t);
            for (r.smoothChildTiming = Lt(t.smoothChildTiming), ot.remove(r), r._dp = 0, r._time = r._tTime = ot._time, i = ot._first; i;) n = i._next, !e && !i._dur && i instanceof zi && i.vars.onComplete === i._targets[0] || ke(r, i, i._start - i._delay), i = n;
            return ke(ot, r, 0), r
        },
        utils: {
            wrap: function t(e, i, n) {
                var r = i - e;
                return Bt(e) ? Ke(e, t(0, e.length), i) : Re(n, (function(t) {
                    return (r + (t - e) % r) % r + e
                }))
            },
            wrapYoyo: function t(e, i, n) {
                var r = i - e,
                    s = 2 * r;
                return Bt(e) ? Ke(e, t(0, e.length - 1), i) : Re(n, (function(t) {
                    return e + ((t = (s + (t - e) % s) % s || 0) > r ? s - t : t)
                }))
            },
            distribute: Xe,
            random: Je,
            snap: Qe,
            normalize: function(t, e, i) {
                return ti(t, e, 0, 1, i)
            },
            getUnit: He,
            clamp: function(t, e, i) {
                return Re(i, (function(i) {
                    return qe(t, e, i)
                }))
            },
            splitColor: ai,
            toArray: Ye,
            selector: function(t) {
                return t = Ye(t)[0] || Xt("Invalid scope") || {},
                    function(e) {
                        var i = t.current || t.nativeElement || t;
                        return Ye(e, i.querySelectorAll ? i : i === t ? Xt("Invalid scope") || ut.createElement("div") : t)
                    }
            },
            mapRange: ti,
            pipe: function() {
                for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
                return function(t) {
                    return e.reduce((function(t, e) {
                        return e(t)
                    }), t)
                }
            },
            unitize: function(t, e) {
                return function(i) {
                    return t(parseFloat(i)) + (e || He(i))
                }
            },
            interpolate: function t(e, i, n, r) {
                var s = isNaN(e + i) ? 0 : function(t) {
                    return (1 - t) * e + t * i
                };
                if (!s) {
                    var o, a, l, u, h, c = Ft(e),
                        d = {};
                    if (!0 === n && (r = 1) && (n = null), c) e = {
                        p: e
                    }, i = {
                        p: i
                    };
                    else if (Bt(e) && !Bt(i)) {
                        for (l = [], u = e.length, h = u - 2, a = 1; a < u; a++) l.push(t(e[a - 1], e[a]));
                        u--, s = function(t) {
                            t *= u;
                            var e = Math.min(h, ~~t);
                            return l[e](t - e)
                        }, n = i
                    } else r || (e = ve(Bt(e) ? [] : {}, e));
                    if (!l) {
                        for (o in i) ki.call(d, e, o, "get", i[o]);
                        s = function(t) {
                            return Yi(t, d) || (c ? e.p : e)
                        }
                    }
                }
                return Re(n, s)
            },
            shuffle: Ue
        },
        install: Yt,
        effects: ee,
        ticker: pi,
        updateRoot: Ti.updateRoot,
        plugins: te,
        globalTimeline: ot,
        core: {
            PropTween: Ji,
            globals: $t,
            Tween: zi,
            Timeline: Ti,
            Animation: Fi,
            getCache: oe,
            _removeLinkedListItem: we,
            suppressOverwrites: function(t) {
                return st = t
            }
        }
    };
    le("to,from,fromTo,delayedCall,set,killTweensOf", (function(t) {
        return Ki[t] = zi[t]
    })), pi.add(Ti.updateRoot), dt = Ki.to({}, {
        duration: 0
    });
    var Zi = function(t, e) {
            for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e;) i = i._next;
            return i
        },
        tn = function(t, e) {
            return {
                name: t,
                rawVars: 1,
                init: function(t, i, n) {
                    n._onInit = function(t) {
                        var n, r;
                        if (Ft(i) && (n = {}, le(i, (function(t) {
                                return n[t] = 1
                            })), i = n), e) {
                            for (r in n = {}, i) n[r] = e(i[r]);
                            i = n
                        }! function(t, e) {
                            var i, n, r, s = t._targets;
                            for (i in e)
                                for (n = s.length; n--;)(r = t._ptLookup[n][i]) && (r = r.d) && (r._pt && (r = Zi(r, i)), r && r.modifier && r.modifier(e[i], t, s[n], i))
                        }(t, i)
                    }
                }
            }
        },
        en = Ki.registerPlugin({
            name: "attr",
            init: function(t, e, i, n, r) {
                var s, o;
                for (s in e)(o = this.add(t, "setAttribute", (t.getAttribute(s) || 0) + "", e[s], n, r, 0, 0, s)) && (o.op = s), this._props.push(s)
            }
        }, {
            name: "endArray",
            init: function(t, e) {
                for (var i = e.length; i--;) this.add(t, i, t[i] || 0, e[i])
            }
        }, tn("roundProps", $e), tn("modifiers"), tn("snap", Qe)) || Ki;
    zi.version = Ti.version = en.version = "3.7.1", ht = 1, Ot() && fi();
    gi.Power0, gi.Power1, gi.Power2, gi.Power3, gi.Power4, gi.Linear, gi.Quad, gi.Cubic, gi.Quart, gi.Quint, gi.Strong, gi.Elastic, gi.Back, gi.SteppedEase, gi.Bounce, gi.Sine, gi.Expo, gi.Circ;

    function nn(t) {
        return (nn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    /*!
     * CSSPlugin 3.7.1
     * https://greensock.com
     *
     * Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var rn, sn, on, an, ln, un, hn, cn = {},
        dn = 180 / Math.PI,
        pn = Math.PI / 180,
        fn = Math.atan2,
        gn = /([A-Z])/g,
        mn = /(?:left|right|width|margin|padding|x)/i,
        vn = /[\s,\(]\S/,
        Dn = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        yn = function(t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        bn = function(t, e) {
            return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
        },
        wn = function(t, e) {
            return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
        },
        _n = function(t, e) {
            var i = e.s + e.c * t;
            e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
        },
        Cn = function(t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e)
        },
        xn = function(t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
        },
        En = function(t, e, i) {
            return t.style[e] = i
        },
        Sn = function(t, e, i) {
            return t.style.setProperty(e, i)
        },
        Fn = function(t, e, i) {
            return t._gsap[e] = i
        },
        Tn = function(t, e, i) {
            return t._gsap.scaleX = t._gsap.scaleY = i
        },
        An = function(t, e, i, n, r) {
            var s = t._gsap;
            s.scaleX = s.scaleY = i, s.renderTransform(r, s)
        },
        In = function(t, e, i, n, r) {
            var s = t._gsap;
            s[e] = i, s.renderTransform(r, s)
        },
        kn = "transform",
        Ln = kn + "Origin",
        On = function(t, e) {
            var i = sn.createElementNS ? sn.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : sn.createElement(t);
            return i.style ? i : sn.createElement(t)
        },
        Pn = function t(e, i, n) {
            var r = getComputedStyle(e);
            return r[i] || r.getPropertyValue(i.replace(gn, "-$1").toLowerCase()) || r.getPropertyValue(i) || !n && t(e, Bn(i) || i, 1) || ""
        },
        Mn = "O,Moz,ms,Ms,Webkit".split(","),
        Bn = function(t, e, i) {
            var n = (e || ln).style,
                r = 5;
            if (t in n && !i) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(Mn[r] + t in n););
            return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? Mn[r] : "") + t
        },
        zn = function() {
            "undefined" != typeof window && window.document && (rn = window, sn = rn.document, on = sn.documentElement, ln = On("div") || {
                style: {}
            }, On("div"), kn = Bn(kn), Ln = kn + "Origin", ln.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", hn = !!Bn("perspective"), an = 1)
        },
        Nn = function t(e) {
            var i, n = On("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                r = this.parentNode,
                s = this.nextSibling,
                o = this.style.cssText;
            if (on.appendChild(n), n.appendChild(this), this.style.display = "block", e) try {
                i = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = t
            } catch (t) {} else this._gsapBBox && (i = this._gsapBBox());
            return r && (s ? r.insertBefore(this, s) : r.appendChild(this)), on.removeChild(n), this.style.cssText = o, i
        },
        Vn = function(t, e) {
            for (var i = e.length; i--;)
                if (t.hasAttribute(e[i])) return t.getAttribute(e[i])
        },
        Rn = function(t) {
            var e;
            try {
                e = t.getBBox()
            } catch (i) {
                e = Nn.call(t, !0)
            }
            return e && (e.width || e.height) || t.getBBox === Nn || (e = Nn.call(t, !0)), !e || e.width || e.x || e.y ? e : {
                x: +Vn(t, ["x", "cx", "x1"]) || 0,
                y: +Vn(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            }
        },
        qn = function(t) {
            return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Rn(t))
        },
        Hn = function(t, e) {
            if (e) {
                var i = t.style;
                e in cn && e !== Ln && (e = kn), i.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), i.removeProperty(e.replace(gn, "-$1").toLowerCase())) : i.removeAttribute(e)
            }
        },
        Wn = function(t, e, i, n, r, s) {
            var o = new Ji(t._pt, e, i, 0, 1, s ? xn : Cn);
            return t._pt = o, o.b = n, o.e = r, t._props.push(i), o
        },
        jn = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        Gn = function t(e, i, n, r) {
            var s, o, a, l, u = parseFloat(n) || 0,
                h = (n + "").trim().substr((u + "").length) || "px",
                c = ln.style,
                d = mn.test(i),
                p = "svg" === e.tagName.toLowerCase(),
                f = (p ? "client" : "offset") + (d ? "Width" : "Height"),
                g = "px" === r,
                m = "%" === r;
            return r === h || !u || jn[r] || jn[h] ? u : ("px" !== h && !g && (u = t(e, i, n, "px")), l = e.getCTM && qn(e), !m && "%" !== h || !cn[i] && !~i.indexOf("adius") ? (c[d ? "width" : "height"] = 100 + (g ? h : r), o = ~i.indexOf("adius") || "em" === r && e.appendChild && !p ? e : e.parentNode, l && (o = (e.ownerSVGElement || {}).parentNode), o && o !== sn && o.appendChild || (o = sn.body), (a = o._gsap) && m && a.width && d && a.time === pi.time ? ue(u / a.width * 100) : ((m || "%" === h) && (c.position = Pn(e, "position")), o === e && (c.position = "static"), o.appendChild(ln), s = ln[f], o.removeChild(ln), c.position = "absolute", d && m && ((a = oe(o)).time = pi.time, a.width = o[f]), ue(g ? s * u / 100 : s && u ? 100 / s * u : 0))) : (s = l ? e.getBBox()[d ? "width" : "height"] : e[f], ue(m ? u / s * 100 : u / 100 * s)))
        },
        Yn = function(t, e, i, n) {
            var r;
            return an || zn(), e in Dn && "transform" !== e && ~(e = Dn[e]).indexOf(",") && (e = e.split(",")[0]), cn[e] && "transform" !== e ? (r = nr(t, n), r = "transformOrigin" !== e ? r[e] : r.svg ? r.origin : rr(Pn(t, Ln)) + " " + r.zOrigin + "px") : (!(r = t.style[e]) || "auto" === r || n || ~(r + "").indexOf("calc(")) && (r = Qn[e] && Qn[e](t, e, i) || Pn(t, e) || ae(t, e) || ("opacity" === e ? 1 : 0)), i && !~(r + "").trim().indexOf(" ") ? Gn(t, e, r, i) + i : r
        },
        Un = function(t, e, i, n) {
            if (!i || "none" === i) {
                var r = Bn(e, t, 1),
                    s = r && Pn(t, r, 1);
                s && s !== i ? (e = r, i = s) : "borderColor" === e && (i = Pn(t, "borderTopColor"))
            }
            var o, a, l, u, h, c, d, p, f, g, m, v, D = new Ji(this._pt, t.style, e, 0, 1, Gi),
                y = 0,
                b = 0;
            if (D.b = i, D.e = n, i += "", "auto" === (n += "") && (t.style[e] = n, n = Pn(t, e) || n, t.style[e] = i), di(o = [i, n]), n = o[1], l = (i = o[0]).match(Vt) || [], (n.match(Vt) || []).length) {
                for (; a = Vt.exec(n);) d = a[0], f = n.substring(y, a.index), h ? h = (h + 1) % 5 : "rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5) || (h = 1), d !== (c = l[b++] || "") && (u = parseFloat(c) || 0, m = c.substr((u + "").length), (v = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)), p = parseFloat(d), g = d.substr((p + "").length), y = Vt.lastIndex - g.length, g || (g = g || Dt.units[e] || m, y === n.length && (n += g, D.e += g)), m !== g && (u = Gn(t, e, c, g) || 0), D._pt = {
                    _next: D._pt,
                    p: f || 1 === b ? f : ",",
                    s: u,
                    c: v ? v * p : p - u,
                    m: h && h < 4 || "zIndex" === e ? Math.round : 0
                });
                D.c = y < n.length ? n.substring(y, n.length) : ""
            } else D.r = "display" === e && "none" === n ? xn : Cn;
            return qt.test(n) && (D.e = 0), this._pt = D, D
        },
        Xn = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        $n = function(t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
                var i, n, r, s = e.t,
                    o = s.style,
                    a = e.u,
                    l = s._gsap;
                if ("all" === a || !0 === a) o.cssText = "", n = 1;
                else
                    for (r = (a = a.split(",")).length; --r > -1;) i = a[r], cn[i] && (n = 1, i = "transformOrigin" === i ? Ln : kn), Hn(s, i);
                n && (Hn(s, kn), l && (l.svg && s.removeAttribute("transform"), nr(s, 1), l.uncache = 1))
            }
        },
        Qn = {
            clearProps: function(t, e, i, n, r) {
                if ("isFromStart" !== r.data) {
                    var s = t._pt = new Ji(t._pt, e, i, 0, 0, $n);
                    return s.u = n, s.pr = -10, s.tween = r, t._props.push(i), 1
                }
            }
        },
        Jn = [1, 0, 0, 1, 0, 0],
        Kn = {},
        Zn = function(t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
        },
        tr = function(t) {
            var e = Pn(t, kn);
            return Zn(e) ? Jn : e.substr(7).match(Nt).map(ue)
        },
        er = function(t, e) {
            var i, n, r, s, o = t._gsap || oe(t),
                a = t.style,
                l = tr(t);
            return o.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? Jn : l : (l !== Jn || t.offsetParent || t === on || o.svg || (r = a.display, a.display = "block", (i = t.parentNode) && t.offsetParent || (s = 1, n = t.nextSibling, on.appendChild(t)), l = tr(t), r ? a.display = r : Hn(t, "display"), s && (n ? i.insertBefore(t, n) : i ? i.appendChild(t) : on.removeChild(t))), e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
        },
        ir = function(t, e, i, n, r, s) {
            var o, a, l, u = t._gsap,
                h = r || er(t, !0),
                c = u.xOrigin || 0,
                d = u.yOrigin || 0,
                p = u.xOffset || 0,
                f = u.yOffset || 0,
                g = h[0],
                m = h[1],
                v = h[2],
                D = h[3],
                y = h[4],
                b = h[5],
                w = e.split(" "),
                _ = parseFloat(w[0]) || 0,
                C = parseFloat(w[1]) || 0;
            i ? h !== Jn && (a = g * D - m * v) && (l = _ * (-m / a) + C * (g / a) - (g * b - m * y) / a, _ = _ * (D / a) + C * (-v / a) + (v * b - D * y) / a, C = l) : (_ = (o = Rn(t)).x + (~w[0].indexOf("%") ? _ / 100 * o.width : _), C = o.y + (~(w[1] || w[0]).indexOf("%") ? C / 100 * o.height : C)), n || !1 !== n && u.smooth ? (y = _ - c, b = C - d, u.xOffset = p + (y * g + b * v) - y, u.yOffset = f + (y * m + b * D) - b) : u.xOffset = u.yOffset = 0, u.xOrigin = _, u.yOrigin = C, u.smooth = !!n, u.origin = e, u.originIsAbsolute = !!i, t.style[Ln] = "0px 0px", s && (Wn(s, u, "xOrigin", c, _), Wn(s, u, "yOrigin", d, C), Wn(s, u, "xOffset", p, u.xOffset), Wn(s, u, "yOffset", f, u.yOffset)), t.setAttribute("data-svg-origin", _ + " " + C)
        },
        nr = function(t, e) {
            var i = t._gsap || new Si(t);
            if ("x" in i && !e && !i.uncache) return i;
            var n, r, s, o, a, l, u, h, c, d, p, f, g, m, v, D, y, b, w, _, C, x, E, S, F, T, A, I, k, L, O, P, M = t.style,
                B = i.scaleX < 0,
                z = Pn(t, Ln) || "0";
            return n = r = s = l = u = h = c = d = p = 0, o = a = 1, i.svg = !(!t.getCTM || !qn(t)), m = er(t, i.svg), i.svg && (S = (!i.uncache || "0px 0px" === z) && !e && t.getAttribute("data-svg-origin"), ir(t, S || z, !!S || i.originIsAbsolute, !1 !== i.smooth, m)), f = i.xOrigin || 0, g = i.yOrigin || 0, m !== Jn && (b = m[0], w = m[1], _ = m[2], C = m[3], n = x = m[4], r = E = m[5], 6 === m.length ? (o = Math.sqrt(b * b + w * w), a = Math.sqrt(C * C + _ * _), l = b || w ? fn(w, b) * dn : 0, (c = _ || C ? fn(_, C) * dn + l : 0) && (a *= Math.abs(Math.cos(c * pn))), i.svg && (n -= f - (f * b + g * _), r -= g - (f * w + g * C))) : (P = m[6], L = m[7], A = m[8], I = m[9], k = m[10], O = m[11], n = m[12], r = m[13], s = m[14], u = (v = fn(P, k)) * dn, v && (S = x * (D = Math.cos(-v)) + A * (y = Math.sin(-v)), F = E * D + I * y, T = P * D + k * y, A = x * -y + A * D, I = E * -y + I * D, k = P * -y + k * D, O = L * -y + O * D, x = S, E = F, P = T), h = (v = fn(-_, k)) * dn, v && (D = Math.cos(-v), O = C * (y = Math.sin(-v)) + O * D, b = S = b * D - A * y, w = F = w * D - I * y, _ = T = _ * D - k * y), l = (v = fn(w, b)) * dn, v && (S = b * (D = Math.cos(v)) + w * (y = Math.sin(v)), F = x * D + E * y, w = w * D - b * y, E = E * D - x * y, b = S, x = F), u && Math.abs(u) + Math.abs(l) > 359.9 && (u = l = 0, h = 180 - h), o = ue(Math.sqrt(b * b + w * w + _ * _)), a = ue(Math.sqrt(E * E + P * P)), v = fn(x, E), c = Math.abs(v) > 2e-4 ? v * dn : 0, p = O ? 1 / (O < 0 ? -O : O) : 0), i.svg && (S = t.getAttribute("transform"), i.forceCSS = t.setAttribute("transform", "") || !Zn(Pn(t, kn)), S && t.setAttribute("transform", S))), Math.abs(c) > 90 && Math.abs(c) < 270 && (B ? (o *= -1, c += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (a *= -1, c += c <= 0 ? 180 : -180)), i.x = n - ((i.xPercent = n && (i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + "px", i.y = r - ((i.yPercent = r && (i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + "px", i.z = s + "px", i.scaleX = ue(o), i.scaleY = ue(a), i.rotation = ue(l) + "deg", i.rotationX = ue(u) + "deg", i.rotationY = ue(h) + "deg", i.skewX = c + "deg", i.skewY = d + "deg", i.transformPerspective = p + "px", (i.zOrigin = parseFloat(z.split(" ")[2]) || 0) && (M[Ln] = rr(z)), i.xOffset = i.yOffset = 0, i.force3D = Dt.force3D, i.renderTransform = i.svg ? lr : hn ? ar : or, i.uncache = 0, i
        },
        rr = function(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        sr = function(t, e, i) {
            var n = He(e);
            return ue(parseFloat(e) + parseFloat(Gn(t, "x", i + "px", n))) + n
        },
        or = function(t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, ar(t, e)
        },
        ar = function(t, e) {
            var i = e || this,
                n = i.xPercent,
                r = i.yPercent,
                s = i.x,
                o = i.y,
                a = i.z,
                l = i.rotation,
                u = i.rotationY,
                h = i.rotationX,
                c = i.skewX,
                d = i.skewY,
                p = i.scaleX,
                f = i.scaleY,
                g = i.transformPerspective,
                m = i.force3D,
                v = i.target,
                D = i.zOrigin,
                y = "",
                b = "auto" === m && t && 1 !== t || !0 === m;
            if (D && ("0deg" !== h || "0deg" !== u)) {
                var w, _ = parseFloat(u) * pn,
                    C = Math.sin(_),
                    x = Math.cos(_);
                _ = parseFloat(h) * pn, w = Math.cos(_), s = sr(v, s, C * w * -D), o = sr(v, o, -Math.sin(_) * -D), a = sr(v, a, x * w * -D + D)
            }
            "0px" !== g && (y += "perspective(" + g + ") "), (n || r) && (y += "translate(" + n + "%, " + r + "%) "), (b || "0px" !== s || "0px" !== o || "0px" !== a) && (y += "0px" !== a || b ? "translate3d(" + s + ", " + o + ", " + a + ") " : "translate(" + s + ", " + o + ") "), "0deg" !== l && (y += "rotate(" + l + ") "), "0deg" !== u && (y += "rotateY(" + u + ") "), "0deg" !== h && (y += "rotateX(" + h + ") "), "0deg" === c && "0deg" === d || (y += "skew(" + c + ", " + d + ") "), 1 === p && 1 === f || (y += "scale(" + p + ", " + f + ") "), v.style[kn] = y || "translate(0, 0)"
        },
        lr = function(t, e) {
            var i, n, r, s, o, a = e || this,
                l = a.xPercent,
                u = a.yPercent,
                h = a.x,
                c = a.y,
                d = a.rotation,
                p = a.skewX,
                f = a.skewY,
                g = a.scaleX,
                m = a.scaleY,
                v = a.target,
                D = a.xOrigin,
                y = a.yOrigin,
                b = a.xOffset,
                w = a.yOffset,
                _ = a.forceCSS,
                C = parseFloat(h),
                x = parseFloat(c);
            d = parseFloat(d), p = parseFloat(p), (f = parseFloat(f)) && (p += f = parseFloat(f), d += f), d || p ? (d *= pn, p *= pn, i = Math.cos(d) * g, n = Math.sin(d) * g, r = Math.sin(d - p) * -m, s = Math.cos(d - p) * m, p && (f *= pn, o = Math.tan(p - f), r *= o = Math.sqrt(1 + o * o), s *= o, f && (o = Math.tan(f), i *= o = Math.sqrt(1 + o * o), n *= o)), i = ue(i), n = ue(n), r = ue(r), s = ue(s)) : (i = g, s = m, n = r = 0), (C && !~(h + "").indexOf("px") || x && !~(c + "").indexOf("px")) && (C = Gn(v, "x", h, "px"), x = Gn(v, "y", c, "px")), (D || y || b || w) && (C = ue(C + D - (D * i + y * r) + b), x = ue(x + y - (D * n + y * s) + w)), (l || u) && (o = v.getBBox(), C = ue(C + l / 100 * o.width), x = ue(x + u / 100 * o.height)), o = "matrix(" + i + "," + n + "," + r + "," + s + "," + C + "," + x + ")", v.setAttribute("transform", o), _ && (v.style[kn] = o)
        },
        ur = function(t, e, i, n, r, s) {
            var o, a, l = Ft(r),
                u = parseFloat(r) * (l && ~r.indexOf("rad") ? dn : 1),
                h = s ? u * s : u - n,
                c = n + h + "deg";
            return l && ("short" === (o = r.split("_")[1]) && (h %= 360) !== h % 180 && (h += h < 0 ? 360 : -360), "cw" === o && h < 0 ? h = (h + 36e9) % 360 - 360 * ~~(h / 360) : "ccw" === o && h > 0 && (h = (h - 36e9) % 360 - 360 * ~~(h / 360))), t._pt = a = new Ji(t._pt, e, i, n, h, bn), a.e = c, a.u = "deg", t._props.push(i), a
        },
        hr = function(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        },
        cr = function(t, e, i) {
            var n, r, s, o, a, l, u, h = hr({}, i._gsap),
                c = i.style;
            for (r in h.svg ? (s = i.getAttribute("transform"), i.setAttribute("transform", ""), c[kn] = e, n = nr(i, 1), Hn(i, kn), i.setAttribute("transform", s)) : (s = getComputedStyle(i)[kn], c[kn] = e, n = nr(i, 1), c[kn] = s), cn)(s = h[r]) !== (o = n[r]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (a = He(s) !== (u = He(o)) ? Gn(i, r, s, u) : parseFloat(s), l = parseFloat(o), t._pt = new Ji(t._pt, n, r, a, l - a, yn), t._pt.u = u || 0, t._props.push(r));
            hr(n, h)
        };
    le("padding,margin,Width,Radius", (function(t, e) {
        var i = "Top",
            n = "Right",
            r = "Bottom",
            s = "Left",
            o = (e < 3 ? [i, n, r, s] : [i + s, i + n, r + n, r + s]).map((function(i) {
                return e < 2 ? t + i : "border" + i + t
            }));
        Qn[e > 1 ? "border" + t : t] = function(t, e, i, n, r) {
            var s, a;
            if (arguments.length < 4) return s = o.map((function(e) {
                return Yn(t, e, i)
            })), 5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a;
            s = (n + "").split(" "), a = {}, o.forEach((function(t, e) {
                return a[t] = s[e] = s[e] || s[(e - 1) / 2 | 0]
            })), t.init(e, a, r)
        }
    }));
    var dr, pr, fr = {
        name: "css",
        register: zn,
        targetTest: function(t) {
            return t.style && t.nodeType
        },
        init: function(t, e, i, n, r) {
            var s, o, a, l, u, h, c, d, p, f, g, m, v, D, y, b, w, _, C, x = this._props,
                E = t.style,
                S = i.vars.startAt;
            for (c in an || zn(), e)
                if ("autoRound" !== c && (o = e[c], !te[c] || !Li(c, e, i, n, t, r)))
                    if (u = nn(o), h = Qn[c], "function" === u && (u = nn(o = o.call(i, n, t, r))), "string" === u && ~o.indexOf("random(") && (o = Ze(o)), h) h(this, t, c, o, i) && (y = 1);
                    else if ("--" === c.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(c) + "").trim(), o += "", hi.lastIndex = 0, hi.test(s) || (d = He(s), p = He(o)), p ? d !== p && (s = Gn(t, c, s, p) + p) : d && (o += d), this.add(E, "setProperty", s, o, n, r, 0, 0, c), x.push(c);
            else if ("undefined" !== u) {
                if (S && c in S ? (s = "function" == typeof S[c] ? S[c].call(i, n, t, r) : S[c], c in Dt.units && !He(s) && (s += Dt.units[c]), "=" === (s + "").charAt(1) && (s = Yn(t, c))) : s = Yn(t, c), l = parseFloat(s), (f = "string" === u && "=" === o.charAt(1) ? +(o.charAt(0) + "1") : 0) && (o = o.substr(2)), a = parseFloat(o), c in Dn && ("autoAlpha" === c && (1 === l && "hidden" === Yn(t, "visibility") && a && (l = 0), Wn(this, E, "visibility", l ? "inherit" : "hidden", a ? "inherit" : "hidden", !a)), "scale" !== c && "transform" !== c && ~(c = Dn[c]).indexOf(",") && (c = c.split(",")[0])), g = c in cn)
                    if (m || ((v = t._gsap).renderTransform && !e.parseTransform || nr(t, e.parseTransform), D = !1 !== e.smoothOrigin && v.smooth, (m = this._pt = new Ji(this._pt, E, kn, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === c) this._pt = new Ji(this._pt, v, "scaleY", v.scaleY, (f ? f * a : a - v.scaleY) || 0), x.push("scaleY", c), c += "X";
                    else {
                        if ("transformOrigin" === c) {
                            w = void 0, _ = void 0, C = void 0, w = (b = o).split(" "), _ = w[0], C = w[1] || "50%", "top" !== _ && "bottom" !== _ && "left" !== C && "right" !== C || (b = _, _ = C, C = b), w[0] = Xn[_] || _, w[1] = Xn[C] || C, o = w.join(" "), v.svg ? ir(t, o, 0, D, 0, this) : ((p = parseFloat(o.split(" ")[2]) || 0) !== v.zOrigin && Wn(this, v, "zOrigin", v.zOrigin, p), Wn(this, E, c, rr(s), rr(o)));
                            continue
                        }
                        if ("svgOrigin" === c) {
                            ir(t, o, 1, D, 0, this);
                            continue
                        }
                        if (c in Kn) {
                            ur(this, v, c, l, o, f);
                            continue
                        }
                        if ("smoothOrigin" === c) {
                            Wn(this, v, "smooth", v.smooth, o);
                            continue
                        }
                        if ("force3D" === c) {
                            v[c] = o;
                            continue
                        }
                        if ("transform" === c) {
                            cr(this, o, t);
                            continue
                        }
                    }
                else c in E || (c = Bn(c) || c);
                if (g || (a || 0 === a) && (l || 0 === l) && !vn.test(o) && c in E) a || (a = 0), (d = (s + "").substr((l + "").length)) !== (p = He(o) || (c in Dt.units ? Dt.units[c] : d)) && (l = Gn(t, c, s, p)), this._pt = new Ji(this._pt, g ? v : E, c, l, f ? f * a : a - l, g || "px" !== p && "zIndex" !== c || !1 === e.autoRound ? yn : _n), this._pt.u = p || 0, d !== p && (this._pt.b = s, this._pt.r = wn);
                else if (c in E) Un.call(this, t, c, s, o);
                else {
                    if (!(c in t)) {
                        Ut(c, o);
                        continue
                    }
                    this.add(t, c, s || t[c], o, n, r)
                }
                x.push(c)
            }
            y && Qi(this)
        },
        get: Yn,
        aliases: Dn,
        getSetter: function(t, e, i) {
            var n = Dn[e];
            return n && n.indexOf(",") < 0 && (e = n), e in cn && e !== Ln && (t._gsap.x || Yn(t, "x")) ? i && un === i ? "scale" === e ? Tn : Fn : (un = i || {}) && ("scale" === e ? An : In) : t.style && !It(t.style[e]) ? En : ~e.indexOf("-") ? Sn : Hi(t, e)
        },
        core: {
            _removeProperty: Hn,
            _getMatrix: er
        }
    };
    en.utils.checkPrefix = Bn, pr = le("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (dr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function(t) {
        cn[t] = 1
    })), le(dr, (function(t) {
        Dt.units[t] = "deg", Kn[t] = 1
    })), Dn[pr[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + dr, le("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function(t) {
        var e = t.split(":");
        Dn[e[1]] = pr[e[0]]
    })), le("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function(t) {
        Dt.units[t] = "px"
    })), en.registerPlugin(fr);
    var gr = en.registerPlugin(fr) || en;
    gr.core.Tween;

    function mr(t) {
        return (mr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    /*!
     * ScrollTrigger 3.7.1
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var vr, Dr, yr, br, wr, _r, Cr, xr, Er, Sr, Fr, Tr, Ar, Ir, kr, Lr, Or, Pr, Mr, Br, zr, Nr, Vr, Rr, qr, Hr, Wr, jr, Gr = 1,
        Yr = [],
        Ur = [],
        Xr = Date.now,
        $r = Xr(),
        Qr = 0,
        Jr = 1,
        Kr = function(t) {
            return t
        },
        Zr = function(t) {
            return Math.round(1e5 * t) / 1e5 || 0
        },
        ts = function() {
            return "undefined" != typeof window
        },
        es = function() {
            return vr || ts() && (vr = window.gsap) && vr.registerPlugin && vr
        },
        is = function(t) {
            return !!~Cr.indexOf(t)
        },
        ns = function(t, e) {
            return ~Yr.indexOf(t) && Yr[Yr.indexOf(t) + 1][e]
        },
        rs = function(t, e) {
            var i = e.s,
                n = e.sc,
                r = Ur.indexOf(t),
                s = n === Ds.sc ? 1 : 2;
            return !~r && (r = Ur.push(t) - 1), Ur[r + s] || (Ur[r + s] = ns(t, i) || (is(t) ? n : function(e) {
                return arguments.length ? t[i] = e : t[i]
            }))
        },
        ss = function(t) {
            return ns(t, "getBoundingClientRect") || (is(t) ? function() {
                return no.width = yr.innerWidth, no.height = yr.innerHeight, no
            } : function() {
                return ws(t)
            })
        },
        os = function(t, e) {
            var i = e.s,
                n = e.d2,
                r = e.d,
                s = e.a;
            return (i = "scroll" + n) && (s = ns(t, i)) ? s() - ss(t)()[r] : is(t) ? Math.max(wr[i], _r[i]) - (yr["inner" + n] || wr["client" + n] || _r["client" + n]) : t[i] - t["offset" + n]
        },
        as = function(t, e) {
            for (var i = 0; i < zr.length; i += 3)(!e || ~e.indexOf(zr[i + 1])) && t(zr[i], zr[i + 1], zr[i + 2])
        },
        ls = function(t) {
            return "string" == typeof t
        },
        us = function(t) {
            return "function" == typeof t
        },
        hs = function(t) {
            return "number" == typeof t
        },
        cs = function(t) {
            return "object" === mr(t)
        },
        ds = function(t) {
            return us(t) && t()
        },
        ps = function(t, e) {
            return function() {
                var i = ds(t),
                    n = ds(e);
                return function() {
                    ds(i), ds(n)
                }
            }
        },
        fs = Math.abs,
        gs = "padding",
        ms = "px",
        vs = {
            s: "scrollLeft",
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: function(t) {
                return arguments.length ? yr.scrollTo(t, Ds.sc()) : yr.pageXOffset || br.scrollLeft || wr.scrollLeft || _r.scrollLeft || 0
            }
        },
        Ds = {
            s: "scrollTop",
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: vs,
            sc: function(t) {
                return arguments.length ? yr.scrollTo(vs.sc(), t) : yr.pageYOffset || br.scrollTop || wr.scrollTop || _r.scrollTop || 0
            }
        },
        ys = function(t) {
            return yr.getComputedStyle(t)
        },
        bs = function(t, e) {
            for (var i in e) i in t || (t[i] = e[i]);
            return t
        },
        ws = function(t, e) {
            var i = e && "matrix(1, 0, 0, 1, 0, 0)" !== ys(t)[Or] && vr.to(t, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0
                }).progress(1),
                n = t.getBoundingClientRect();
            return i && i.progress(0).kill(), n
        },
        _s = function(t, e) {
            var i = e.d2;
            return t["offset" + i] || t["client" + i] || 0
        },
        Cs = function(t) {
            var e, i = [],
                n = t.labels,
                r = t.duration();
            for (e in n) i.push(n[e] / r);
            return i
        },
        xs = function(t, e, i, n) {
            return i.split(",").forEach((function(i) {
                return t(e, i, n)
            }))
        },
        Es = function(t, e, i) {
            return t.addEventListener(e, i, {
                passive: !0
            })
        },
        Ss = function(t, e, i) {
            return t.removeEventListener(e, i)
        },
        Fs = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        },
        Ts = {
            toggleActions: "play",
            anticipatePin: 0
        },
        As = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        },
        Is = function(t, e) {
            if (ls(t)) {
                var i = t.indexOf("="),
                    n = ~i ? +(t.charAt(i - 1) + 1) * parseFloat(t.substr(i + 1)) : 0;
                ~i && (t.indexOf("%") > i && (n *= e / 100), t = t.substr(0, i - 1)), t = n + (t in As ? As[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
            }
            return t
        },
        ks = function(t, e, i, n, r, s, o) {
            var a = r.startColor,
                l = r.endColor,
                u = r.fontSize,
                h = r.indent,
                c = r.fontWeight,
                d = br.createElement("div"),
                p = is(i) || "fixed" === ns(i, "pinType"),
                f = -1 !== t.indexOf("scroller"),
                g = p ? _r : i,
                m = -1 !== t.indexOf("start"),
                v = m ? a : l,
                D = "border-color:" + v + ";font-size:" + u + ";color:" + v + ";font-weight:" + c + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return D += "position:" + (f && p ? "fixed;" : "absolute;"), (f || !p) && (D += (n === Ds ? "right" : "bottom") + ":" + (s + parseFloat(h)) + "px;"), o && (D += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), d._isStart = m, d.setAttribute("class", "gsap-marker-" + t), d.style.cssText = D, d.innerText = e || 0 === e ? t + "-" + e : t, g.children[0] ? g.insertBefore(d, g.children[0]) : g.appendChild(d), d._offset = d["offset" + n.op.d2], Ls(d, 0, n, m), d
        },
        Ls = function(t, e, i, n) {
            var r = {
                    display: "block"
                },
                s = i[n ? "os2" : "p2"],
                o = i[n ? "p2" : "os2"];
            t._isFlipped = n, r[i.a + "Percent"] = n ? -100 : 0, r[i.a] = n ? "1px" : 0, r["border" + s + "Width"] = 1, r["border" + o + "Width"] = 0, r[i.p] = e + "px", vr.set(t, r)
        },
        Os = [],
        Ps = {},
        Ms = function() {
            return Sr || (Sr = Er(Qs))
        },
        Bs = function() {
            Sr || (Sr = Er(Qs), Qr || Ws("scrollStart"), Qr = Xr())
        },
        zs = function() {
            return !kr && !Rr && !br.fullscreenElement && xr.restart(!0)
        },
        Ns = {},
        Vs = [],
        Rs = [],
        qs = function(t) {
            var e, i = vr.ticker.frame,
                n = [],
                r = 0;
            if (Wr !== i || Gr) {
                for (Ys(); r < Rs.length; r += 4)(e = yr.matchMedia(Rs[r]).matches) !== Rs[r + 3] && (Rs[r + 3] = e, e ? n.push(r) : Ys(1, Rs[r]) || us(Rs[r + 2]) && Rs[r + 2]());
                for (Gs(), r = 0; r < n.length; r++) e = n[r], Hr = Rs[e], Rs[e + 2] = Rs[e + 1](t);
                Hr = 0, Dr && Us(0, 1), Wr = i, Ws("matchMedia")
            }
        },
        Hs = function t() {
            return Ss(lo, "scrollEnd", t) || Us(!0)
        },
        Ws = function(t) {
            return Ns[t] && Ns[t].map((function(t) {
                return t()
            })) || Vs
        },
        js = [],
        Gs = function(t) {
            for (var e = 0; e < js.length; e += 5) t && js[e + 4] !== t || (js[e].style.cssText = js[e + 1], js[e].getBBox && js[e].setAttribute("transform", js[e + 2] || ""), js[e + 3].uncache = 1)
        },
        Ys = function(t, e) {
            var i;
            for (Pr = 0; Pr < Os.length; Pr++) i = Os[Pr], e && i.media !== e || (t ? i.kill(1) : i.revert());
            e && Gs(e), e || Ws("revert")
        },
        Us = function(t, e) {
            if (!Qr || t) {
                jr = !0;
                var i = Ws("refreshInit");
                Nr && lo.sort(), e || Ys(), Os.forEach((function(t) {
                    return t.refresh()
                })), i.forEach((function(t) {
                    return t && t.render && t.render(-1)
                })), Ur.forEach((function(t) {
                    return "function" == typeof t && (t.rec = 0)
                })), xr.pause(), jr = !1, Ws("refresh")
            } else Es(lo, "scrollEnd", Hs)
        },
        Xs = 0,
        $s = 1,
        Qs = function() {
            if (!jr) {
                var t = Os.length,
                    e = Xr(),
                    i = e - $r >= 50,
                    n = t && Os[0].scroll();
                if ($s = Xs > n ? -1 : 1, Xs = n, i && (Qr && !Lr && e - Qr > 200 && (Qr = 0, Ws("scrollEnd")), Ar = $r, $r = e), $s < 0) {
                    for (Pr = t; Pr-- > 0;) Os[Pr] && Os[Pr].update(0, i);
                    $s = 1
                } else
                    for (Pr = 0; Pr < t; Pr++) Os[Pr] && Os[Pr].update(0, i);
                Sr = 0
            }
        },
        Js = ["left", "top", "bottom", "right", "marginBottom", "marginRight", "marginTop", "marginLeft", "display", "flexShrink", "float", "zIndex", "grid-column-start", "grid-column-end", "grid-row-start", "grid-row-end", "grid-area", "justify-self", "align-self", "place-self"],
        Ks = Js.concat(["width", "height", "boxSizing", "maxWidth", "maxHeight", "position", "margin", gs, gs + "Top", gs + "Right", gs + "Bottom", gs + "Left"]),
        Zs = function(t, e, i, n) {
            if (t.parentNode !== e) {
                for (var r, s = Js.length, o = e.style, a = t.style; s--;) o[r = Js[s]] = i[r];
                o.position = "absolute" === i.position ? "absolute" : "relative", "inline" === i.display && (o.display = "inline-block"), a.bottom = a.right = "auto", o.overflow = "visible", o.boxSizing = "border-box", o.width = _s(t, vs) + ms, o.height = _s(t, Ds) + ms, o[gs] = a.margin = a.top = a.left = "0", eo(n), a.width = a.maxWidth = i.width, a.height = a.maxHeight = i.height, a[gs] = i[gs], t.parentNode.insertBefore(e, t), e.appendChild(t)
            }
        },
        to = /([A-Z])/g,
        eo = function(t) {
            if (t) {
                var e, i, n = t.t.style,
                    r = t.length,
                    s = 0;
                for ((t.t._gsap || vr.core.getCache(t.t)).uncache = 1; s < r; s += 2) i = t[s + 1], e = t[s], i ? n[e] = i : n[e] && n.removeProperty(e.replace(to, "-$1").toLowerCase())
            }
        },
        io = function(t) {
            for (var e = Ks.length, i = t.style, n = [], r = 0; r < e; r++) n.push(Ks[r], i[Ks[r]]);
            return n.t = t, n
        },
        no = {
            left: 0,
            top: 0
        },
        ro = function(t, e, i, n, r, s, o, a, l, u, h, c) {
            if (us(t) && (t = t(a)), ls(t) && "max" === t.substr(0, 3) && (t = c + ("=" === t.charAt(4) ? Is("0" + t.substr(3), i) : 0)), hs(t)) o && Ls(o, i, n, !0);
            else {
                us(e) && (e = e(a));
                var d, p, f, g = Fr(e)[0] || _r,
                    m = ws(g) || {},
                    v = t.split(" ");
                m && (m.left || m.top) || "none" !== ys(g).display || (f = g.style.display, g.style.display = "block", m = ws(g), f ? g.style.display = f : g.style.removeProperty("display")), d = Is(v[0], m[n.d]), p = Is(v[1] || "0", i), t = m[n.p] - l[n.p] - u + d + r - p, o && Ls(o, p, n, i - p < 20 || o._isStart && p > 20), i -= i - p
            }
            if (s) {
                var D = t + i,
                    y = s._isStart;
                c = "scroll" + n.d2, Ls(s, D, n, y && D > 20 || !y && (h ? Math.max(_r[c], wr[c]) : s.parentNode[c]) <= D + 1), h && (l = ws(o), h && (s.style[n.op.p] = l[n.op.p] - n.op.m - s._offset + ms))
            }
            return Math.round(t)
        },
        so = /(?:webkit|moz|length|cssText|inset)/i,
        oo = function(t, e, i, n) {
            if (t.parentNode !== e) {
                var r, s, o = t.style;
                if (e === _r) {
                    for (r in t._stOrig = o.cssText, s = ys(t)) + r || so.test(r) || !s[r] || "string" != typeof o[r] || "0" === r || (o[r] = s[r]);
                    o.top = i, o.left = n
                } else o.cssText = t._stOrig;
                vr.core.getCache(t).uncache = 1, e.appendChild(t)
            }
        },
        ao = function(t, e) {
            var i, n, r = rs(t, e),
                s = "_scroll" + e.p2,
                o = function e(o, a, l, u, h) {
                    var c = e.tween,
                        d = a.onComplete,
                        p = {};
                    return c && c.kill(), i = Math.round(l), a[s] = o, a.modifiers = p, p[s] = function(t) {
                        return (t = Zr(r())) !== i && t !== n && Math.abs(t - i) > 2 ? (c.kill(), e.tween = 0) : t = l + u * c.ratio + h * c.ratio * c.ratio, n = i, i = Zr(t)
                    }, a.onComplete = function() {
                        e.tween = 0, d && d.call(c)
                    }, c = e.tween = vr.to(t, a)
                };
            return t[s] = r, t.addEventListener("wheel", (function() {
                return o.tween && o.tween.kill() && (o.tween = 0)
            }), {
                passive: !0
            }), o
        };
    vs.op = Ds;
    var lo = function() {
        function t(e, i) {
            Dr || t.register(vr) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(e, i)
        }
        return t.prototype.init = function(e, i) {
            if (this.progress = this.start = 0, this.vars && this.kill(1), Jr) {
                var n, r, s, o, a, l, u, h, c, d, p, f, g, m, v, D, y, b, w, _, C, x, E, S, F, T, A, I, k, L, O, P, M, B, z, N, V, R, q, H = (e = bs(ls(e) || hs(e) || e.nodeType ? {
                        trigger: e
                    } : e, Ts)).horizontal ? vs : Ds,
                    W = e,
                    j = W.onUpdate,
                    G = W.toggleClass,
                    Y = W.id,
                    U = W.onToggle,
                    X = W.onRefresh,
                    $ = W.scrub,
                    Q = W.trigger,
                    J = W.pin,
                    K = W.pinSpacing,
                    Z = W.invalidateOnRefresh,
                    tt = W.anticipatePin,
                    et = W.onScrubComplete,
                    it = W.onSnapComplete,
                    nt = W.once,
                    rt = W.snap,
                    st = W.pinReparent,
                    ot = !$ && 0 !== $,
                    at = Fr(e.scroller || yr)[0],
                    lt = vr.core.getCache(at),
                    ut = is(at),
                    ht = "pinType" in e ? "fixed" === e.pinType : ut || "fixed" === ns(at, "pinType"),
                    ct = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
                    dt = ot && e.toggleActions.split(" "),
                    pt = "markers" in e ? e.markers : Ts.markers,
                    ft = ut ? 0 : parseFloat(ys(at)["border" + H.p2 + "Width"]) || 0,
                    gt = this,
                    mt = e.onRefreshInit && function() {
                        return e.onRefreshInit(gt)
                    },
                    vt = function(t, e, i) {
                        var n = i.d,
                            r = i.d2,
                            s = i.a;
                        return (s = ns(t, "getBoundingClientRect")) ? function() {
                            return s()[n]
                        } : function() {
                            return (e ? yr["inner" + r] : t["client" + r]) || 0
                        }
                    }(at, ut, H),
                    Dt = function(t, e) {
                        return !e || ~Yr.indexOf(t) ? ss(t) : function() {
                            return no
                        }
                    }(at, ut),
                    yt = 0;
                gt.media = Hr, tt *= 45, gt.scroller = at, gt.scroll = rs(at, H), o = gt.scroll(), gt.vars = e, i = i || e.animation, "refreshPriority" in e && (Nr = 1), lt.tweenScroll = lt.tweenScroll || {
                    top: ao(at, Ds),
                    left: ao(at, vs)
                }, gt.tweenTo = n = lt.tweenScroll[H.p], i && (i.vars.lazy = !1, i._initted || !1 !== i.vars.immediateRender && !1 !== e.immediateRender && i.render(0, !0, !0), gt.animation = i.pause(), i.scrollTrigger = gt, (O = hs($) && $) && (L = vr.to(i, {
                    ease: "power3",
                    duration: O,
                    onComplete: function() {
                        return et && et(gt)
                    }
                })), I = 0, Y || (Y = i.vars.id)), Os.push(gt), rt && (cs(rt) && !rt.push || (rt = {
                    snapTo: rt
                }), "scrollBehavior" in _r.style && vr.set(ut ? [_r, wr] : at, {
                    scrollBehavior: "auto"
                }), s = us(rt.snapTo) ? rt.snapTo : "labels" === rt.snapTo ? function(t) {
                    return function(e) {
                        return vr.utils.snap(Cs(t), e)
                    }
                }(i) : "labelsDirectional" === rt.snapTo ? (V = i, function(t, e) {
                    var i, n = Cs(V);
                    if (n.sort((function(t, e) {
                            return t - e
                        })), e.direction > 0) {
                        for (t -= 1e-4, i = 0; i < n.length; i++)
                            if (n[i] >= t) return n[i];
                        return n.pop()
                    }
                    for (i = n.length, t += 1e-4; i--;)
                        if (n[i] <= t) return n[i];
                    return n[0]
                }) : vr.utils.snap(rt.snapTo), P = rt.duration || {
                    min: .1,
                    max: 2
                }, P = cs(P) ? Tr(P.min, P.max) : Tr(P, P), M = vr.delayedCall(rt.delay || O / 2 || .1, (function() {
                    if (Math.abs(gt.getVelocity()) < 10 && !Lr && yt !== gt.scroll()) {
                        var t = i && !ot ? i.totalProgress() : gt.progress,
                            e = (t - k) / (Xr() - Ar) * 1e3 || 0,
                            r = vr.utils.clamp(-gt.progress, 1 - gt.progress, fs(e / 2) * e / .185),
                            o = gt.progress + (!1 === rt.inertia ? 0 : r),
                            a = Tr(0, 1, s(o, gt)),
                            h = gt.scroll(),
                            c = Math.round(l + a * g),
                            d = rt,
                            p = d.onStart,
                            f = d.onInterrupt,
                            m = d.onComplete,
                            v = n.tween;
                        if (h <= u && h >= l && c !== h) {
                            if (v && !v._initted && v.data <= Math.abs(c - h)) return;
                            !1 === rt.inertia && (r = a - gt.progress), n(c, {
                                duration: P(fs(.185 * Math.max(fs(o - t), fs(a - t)) / e / .05 || 0)),
                                ease: rt.ease || "power3",
                                data: Math.abs(c - h),
                                onInterrupt: function() {
                                    return M.restart(!0) && f && f(gt)
                                },
                                onComplete: function() {
                                    yt = gt.scroll(), I = k = i && !ot ? i.totalProgress() : gt.progress, it && it(gt), m && m(gt)
                                }
                            }, h, r * g, c - h - r * g), p && p(gt, n.tween)
                        }
                    } else gt.isActive && M.restart(!0)
                })).pause()), Y && (Ps[Y] = gt), Q = gt.trigger = Fr(Q || J)[0], J = !0 === J ? Q : Fr(J)[0], ls(G) && (G = {
                    targets: Q,
                    className: G
                }), J && (!1 === K || "margin" === K || (K = !(!K && "flex" === ys(J.parentNode).display) && gs), gt.pin = J, !1 !== e.force3D && vr.set(J, {
                    force3D: !0
                }), (r = vr.core.getCache(J)).spacer ? m = r.pinState : (r.spacer = y = br.createElement("div"), y.setAttribute("class", "pin-spacer" + (Y ? " pin-spacer-" + Y : "")), r.pinState = m = io(J)), gt.spacer = y = r.spacer, A = ys(J), E = A[K + H.os2], w = vr.getProperty(J), _ = vr.quickSetter(J, H.a, ms), Zs(J, y, A), D = io(J)), pt && (f = cs(pt) ? bs(pt, Fs) : Fs, d = ks("scroller-start", Y, at, H, f, 0), p = ks("scroller-end", Y, at, H, f, 0, d), b = d["offset" + H.op.d2], h = ks("start", Y, at, H, f, b), c = ks("end", Y, at, H, f, b), ht || Yr.length && !0 === ns(at, "fixedMarkers") || (q = ys(R = ut ? _r : at).position, R.style.position = "absolute" === q || "fixed" === q ? q : "relative", vr.set([d, p], {
                    force3D: !0
                }), F = vr.quickSetter(d, H.a, ms), T = vr.quickSetter(p, H.a, ms))), gt.revert = function(t) {
                    var e = !1 !== t || !gt.enabled,
                        n = kr;
                    e !== gt.isReverted && (e && (gt.scroll.rec || (gt.scroll.rec = gt.scroll()), z = Math.max(gt.scroll(), gt.scroll.rec || 0), B = gt.progress, N = i && i.progress()), h && [h, c, d, p].forEach((function(t) {
                        return t.style.display = e ? "none" : "block"
                    })), e && (kr = 1), gt.update(e), kr = n, J && (e ? function(t, e, i) {
                        if (eo(i), t.parentNode === e) {
                            var n = e.parentNode;
                            n && (n.insertBefore(t, e), n.removeChild(e))
                        }
                    }(J, y, m) : (!st || !gt.isActive) && Zs(J, y, ys(J), S)), gt.isReverted = e)
                }, gt.refresh = function(n, r) {
                    if (!kr && gt.enabled || r)
                        if (J && n && Qr) Es(t, "scrollEnd", Hs);
                        else {
                            kr = 1, L && L.pause(), Z && i && i.progress(0).invalidate(), gt.isReverted || gt.revert();
                            for (var s, f, b, _, E, F, T, A, I, k, O = vt(), P = Dt(), M = os(at, H), V = 0, R = 0, q = e.end, W = e.endTrigger || Q, j = e.start || (0 !== e.start && Q ? J ? "0 0" : "0 100%" : 0), G = e.pinnedContainer && Fr(e.pinnedContainer)[0], Y = Q && Math.max(0, Os.indexOf(gt)) || 0, U = Y; U--;)(F = Os[U]).end || F.refresh(0, 1) || (kr = 1), !(T = F.pin) || T !== Q && T !== J || F.isReverted || (k || (k = []), k.unshift(F), F.revert());
                            for (l = ro(j, Q, O, H, gt.scroll(), h, d, gt, P, ft, ht, M) || (J ? -.001 : 0), us(q) && (q = q(gt)), ls(q) && !q.indexOf("+=") && (~q.indexOf(" ") ? q = (ls(j) ? j.split(" ")[0] : "") + q : (V = Is(q.substr(2), O), q = ls(j) ? j : l + V, W = Q)), u = Math.max(l, ro(q || (W ? "100% 0" : M), W, O, H, gt.scroll() + V, c, p, gt, P, ft, ht, M)) || -.001, g = u - l || (l -= .01) && .001, V = 0, U = Y; U--;)(T = (F = Os[U]).pin) && F.start - F._pinPush < l && (s = F.end - F.start, (T === Q || T === G) && (V += s), T === J && (R += s));
                            if (l += V, u += V, gt._pinPush = R, h && V && ((s = {})[H.a] = "+=" + V, G && (s[H.p] = "-=" + gt.scroll()), vr.set([h, c], s)), J) s = ys(J), _ = H === Ds, b = gt.scroll(), C = parseFloat(w(H.a)) + R, !M && u > 1 && ((ut ? _r : at).style["overflow-" + H.a] = "scroll"), Zs(J, y, s), D = io(J), f = ws(J, !0), A = ht && rs(at, _ ? vs : Ds)(), K && ((S = [K + H.os2, g + R + ms]).t = y, (U = K === gs ? _s(J, H) + g + R : 0) && S.push(H.d, U + ms), eo(S), ht && gt.scroll(z)), ht && ((E = {
                                top: f.top + (_ ? b - l : A) + ms,
                                left: f.left + (_ ? A : b - l) + ms,
                                boxSizing: "border-box",
                                position: "fixed"
                            }).width = E.maxWidth = Math.ceil(f.width) + ms, E.height = E.maxHeight = Math.ceil(f.height) + ms, E.margin = E.marginTop = E.marginRight = E.marginBottom = E.marginLeft = "0", E[gs] = s[gs], E[gs + "Top"] = s[gs + "Top"], E[gs + "Right"] = s[gs + "Right"], E[gs + "Bottom"] = s[gs + "Bottom"], E[gs + "Left"] = s[gs + "Left"], v = function(t, e, i) {
                                for (var n, r = [], s = t.length, o = i ? 8 : 0; o < s; o += 2) n = t[o], r.push(n, n in e ? e[n] : t[o + 1]);
                                return r.t = t.t, r
                            }(m, E, st)), i ? (I = i._initted, Vr(1), i.render(i.duration(), !0, !0), x = w(H.a) - C + g + R, g !== x && v.splice(v.length - 2, 2), i.render(0, !0, !0), I || i.invalidate(), Vr(0)) : x = g;
                            else if (Q && gt.scroll())
                                for (f = Q.parentNode; f && f !== _r;) f._pinOffset && (l -= f._pinOffset, u -= f._pinOffset), f = f.parentNode;
                            k && k.forEach((function(t) {
                                return t.revert(!1)
                            })), gt.start = l, gt.end = u, (o = a = gt.scroll()) < z && gt.scroll(z), gt.revert(!1), kr = 0, i && ot && i._initted && i.progress() !== N && i.progress(N, !0).render(i.time(), !0, !0), B !== gt.progress && (L && i.totalProgress(B, !0), gt.progress = B, gt.update()), J && K && (y._pinOffset = Math.round(gt.progress * x)), X && X(gt)
                        }
                }, gt.getVelocity = function() {
                    return (gt.scroll() - a) / (Xr() - Ar) * 1e3 || 0
                }, gt.update = function(t, e) {
                    var r, s, h, c, p, f = gt.scroll(),
                        m = t ? 0 : (f - l) / g,
                        b = m < 0 ? 0 : m > 1 ? 1 : m || 0,
                        w = gt.progress;
                    if (e && (a = o, o = f, rt && (k = I, I = i && !ot ? i.totalProgress() : b)), tt && !b && J && !kr && !Gr && Qr && l < f + (f - a) / (Xr() - Ar) * tt && (b = 1e-4), b !== w && gt.enabled) {
                        if (c = (p = (r = gt.isActive = !!b && b < 1) !== (!!w && w < 1)) || !!b != !!w, gt.direction = b > w ? 1 : -1, gt.progress = b, ot || (!L || kr || Gr ? i && i.totalProgress(b, !!kr) : (L.vars.totalProgress = b, L.invalidate().restart())), J)
                            if (t && K && (y.style[K + H.os2] = E), ht) {
                                if (c) {
                                    if (h = !t && b > w && u + 1 > f && f + 1 >= os(at, H), st)
                                        if (t || !r && !h) oo(J, y);
                                        else {
                                            var S = ws(J, !0),
                                                A = f - l;
                                            oo(J, _r, S.top + (H === Ds ? A : 0) + ms, S.left + (H === Ds ? 0 : A) + ms)
                                        }
                                    eo(r || h ? v : D), x !== g && b < 1 && r || _(C + (1 !== b || h ? 0 : x))
                                }
                            } else _(C + x * b);
                        rt && !n.tween && !kr && !Gr && M.restart(!0), G && (p || nt && b && (b < 1 || !qr)) && Fr(G.targets).forEach((function(t) {
                            return t.classList[r || nt ? "add" : "remove"](G.className)
                        })), j && !ot && !t && j(gt), c && !kr ? (s = b && !w ? 0 : 1 === b ? 1 : 1 === w ? 2 : 3, ot && (h = !p && "none" !== dt[s + 1] && dt[s + 1] || dt[s], i && ("complete" === h || "reset" === h || h in i) && ("complete" === h ? i.pause().totalProgress(1) : "reset" === h ? i.restart(!0).pause() : "restart" === h ? i.restart(!0) : i[h]()), j && j(gt)), !p && qr || (U && p && U(gt), ct[s] && ct[s](gt), nt && (1 === b ? gt.kill(!1, 1) : ct[s] = 0), p || ct[s = 1 === b ? 1 : 3] && ct[s](gt))) : ot && j && !kr && j(gt)
                    }
                    T && (F(f + (d._isFlipped ? 1 : 0)), T(f))
                }, gt.enable = function(e, i) {
                    gt.enabled || (gt.enabled = !0, Es(at, "resize", zs), Es(at, "scroll", Bs), mt && Es(t, "refreshInit", mt), !1 !== e && (gt.progress = B = 0, o = a = yt = gt.scroll()), !1 !== i && gt.refresh())
                }, gt.getTween = function(t) {
                    return t && n ? n.tween : L
                }, gt.disable = function(e, i) {
                    if (gt.enabled && (!1 !== e && gt.revert(), gt.enabled = gt.isActive = !1, i || L && L.pause(), z = 0, r && (r.uncache = 1), mt && Ss(t, "refreshInit", mt), M && (M.pause(), n.tween && n.tween.kill() && (n.tween = 0)), !ut)) {
                        for (var s = Os.length; s--;)
                            if (Os[s].scroller === at && Os[s] !== gt) return;
                        Ss(at, "resize", zs), Ss(at, "scroll", Bs)
                    }
                }, gt.kill = function(t, e) {
                    gt.disable(t, e), Y && delete Ps[Y];
                    var n = Os.indexOf(gt);
                    Os.splice(n, 1), n === Pr && $s > 0 && Pr--, n = 0, Os.forEach((function(t) {
                        return t.scroller === gt.scroller && (n = 1)
                    })), n || (gt.scroll.rec = 0), i && (i.scrollTrigger = null, t && i.render(-1), e || i.kill()), h && [h, c, d, p].forEach((function(t) {
                        return t.parentNode && t.parentNode.removeChild(t)
                    })), J && (r && (r.uncache = 1), n = 0, Os.forEach((function(t) {
                        return t.pin === J && n++
                    })), n || (r.spacer = 0))
                }, gt.enable(!1, !1), i && i.add && !g ? vr.delayedCall(.01, (function() {
                    return l || u || gt.refresh()
                })) && (g = .01) && (l = u = 0) : gt.refresh()
            } else this.update = this.refresh = this.kill = Kr
        }, t.register = function(e) {
            if (!Dr && (vr = e || es(), ts() && window.document && (yr = window, br = document, wr = br.documentElement, _r = br.body), vr && (Fr = vr.utils.toArray, Tr = vr.utils.clamp, Vr = vr.core.suppressOverwrites || Kr, vr.core.globals("ScrollTrigger", t), _r))) {
                Er = yr.requestAnimationFrame || function(t) {
                    return setTimeout(t, 16)
                }, Es(yr, "wheel", Bs), Cr = [yr, br, wr, _r], Es(br, "scroll", Bs);
                var i, n = _r.style,
                    r = n.borderTop;
                n.borderTop = "1px solid #000", i = ws(_r), Ds.m = Math.round(i.top + Ds.sc()) || 0, vs.m = Math.round(i.left + vs.sc()) || 0, r ? n.borderTop = r : n.removeProperty("border-top"), Ir = setInterval(Ms, 200), vr.delayedCall(.5, (function() {
                    return Gr = 0
                })), Es(br, "touchcancel", Kr), Es(_r, "touchstart", Kr), xs(Es, br, "pointerdown,touchstart,mousedown", (function() {
                    return Lr = 1
                })), xs(Es, br, "pointerup,touchend,mouseup", (function() {
                    return Lr = 0
                })), Or = vr.utils.checkPrefix("transform"), Ks.push(Or), Dr = Xr(), xr = vr.delayedCall(.2, Us).pause(), zr = [br, "visibilitychange", function() {
                    var t = yr.innerWidth,
                        e = yr.innerHeight;
                    br.hidden ? (Mr = t, Br = e) : Mr === t && Br === e || zs()
                }, br, "DOMContentLoaded", Us, yr, "load", function() {
                    return Qr || Us()
                }, yr, "resize", zs], as(Es)
            }
            return Dr
        }, t.defaults = function(t) {
            for (var e in t) Ts[e] = t[e]
        }, t.kill = function() {
            Jr = 0, Os.slice(0).forEach((function(t) {
                return t.kill(1)
            }))
        }, t.config = function(t) {
            "limitCallbacks" in t && (qr = !!t.limitCallbacks);
            var e = t.syncInterval;
            e && clearInterval(Ir) || (Ir = e) && setInterval(Ms, e), "autoRefreshEvents" in t && (as(Ss) || as(Es, t.autoRefreshEvents || "none"), Rr = -1 === (t.autoRefreshEvents + "").indexOf("resize"))
        }, t.scrollerProxy = function(t, e) {
            var i = Fr(t)[0],
                n = Ur.indexOf(i),
                r = is(i);
            ~n && Ur.splice(n, r ? 6 : 2), r ? Yr.unshift(yr, e, _r, e, wr, e) : Yr.unshift(i, e)
        }, t.matchMedia = function(t) {
            var e, i, n, r, s;
            for (i in t) n = Rs.indexOf(i), r = t[i], Hr = i, "all" === i ? r() : (e = yr.matchMedia(i)) && (e.matches && (s = r()), ~n ? (Rs[n + 1] = ps(Rs[n + 1], r), Rs[n + 2] = ps(Rs[n + 2], s)) : (n = Rs.length, Rs.push(i, r, s), e.addListener ? e.addListener(qs) : e.addEventListener("change", qs)), Rs[n + 3] = e.matches), Hr = 0;
            return Rs
        }, t.clearMatchMedia = function(t) {
            t || (Rs.length = 0), (t = Rs.indexOf(t)) >= 0 && Rs.splice(t, 4)
        }, t
    }();

    function uo(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    lo.version = "3.7.1", lo.saveStyles = function(t) {
        return t ? Fr(t).forEach((function(t) {
            if (t && t.style) {
                var e = js.indexOf(t);
                e >= 0 && js.splice(e, 5), js.push(t, t.style.cssText, t.getBBox && t.getAttribute("transform"), vr.core.getCache(t), Hr)
            }
        })) : js
    }, lo.revert = function(t, e) {
        return Ys(!t, e)
    }, lo.create = function(t, e) {
        return new lo(t, e)
    }, lo.refresh = function(t) {
        return t ? zs() : Us(!0)
    }, lo.update = Qs, lo.maxScroll = function(t, e) {
        return os(t, e ? vs : Ds)
    }, lo.getScrollFunc = function(t, e) {
        return rs(Fr(t)[0], e ? vs : Ds)
    }, lo.getById = function(t) {
        return Ps[t]
    }, lo.getAll = function() {
        return Os.slice(0)
    }, lo.isScrolling = function() {
        return !!Qr
    }, lo.addEventListener = function(t, e) {
        var i = Ns[t] || (Ns[t] = []);
        ~i.indexOf(e) || i.push(e)
    }, lo.removeEventListener = function(t, e) {
        var i = Ns[t],
            n = i && i.indexOf(e);
        n >= 0 && i.splice(n, 1)
    }, lo.batch = function(t, e) {
        var i, n = [],
            r = {},
            s = e.interval || .016,
            o = e.batchMax || 1e9,
            a = function(t, e) {
                var i = [],
                    n = [],
                    r = vr.delayedCall(s, (function() {
                        e(i, n), i = [], n = []
                    })).pause();
                return function(t) {
                    i.length || r.restart(!0), i.push(t.trigger), n.push(t), o <= i.length && r.progress(1)
                }
            };
        for (i in e) r[i] = "on" === i.substr(0, 2) && us(e[i]) && "onRefreshInit" !== i ? a(0, e[i]) : e[i];
        return us(o) && (o = o(), Es(lo, "refresh", (function() {
            return o = e.batchMax()
        }))), Fr(t).forEach((function(t) {
            var e = {};
            for (i in r) e[i] = r[i];
            e.trigger = t, n.push(lo.create(e))
        })), n
    }, lo.sort = function(t) {
        return Os.sort(t || function(t, e) {
            return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0))
        })
    }, es() && vr.registerPlugin(lo);
    var ho = function() {
        function t(e, i) {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), window.addEventListener("scroll", (function() {
                window.pageYOffset >= e ? document.body.classList.add(i) : document.body.classList.remove(i)
            }));
            var n = this;
            n.lastScrollTop = 0, document.addEventListener("DOMContentLoaded", (function(t) {
                n.initScrollBehaviour()
            }))
        }
        var e, i, n;
        return e = t, (i = [{
            key: "initScrollBehaviour",
            value: function() {
                var t = this;
                window.addEventListener("scroll", (function() {
                    var e = window.pageYOffset || document.documentElement.scrollTop;
                    e > t.lastScrollTop ? (document.body.classList.remove("is-scrolling-up"), document.body.classList.add("is-scrolling-down")) : (document.body.classList.remove("is-scrolling-down"), document.body.classList.add("is-scrolling-up")), t.lastScrollTop = e <= 0 ? 0 : e
                }))
            }
        }]) && uo(e.prototype, i), n && uo(e, n), t
    }();

    function co(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    gr.registerPlugin(lo);
    new(function() {
        function t() {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var e = document.querySelector(".js-intro");
            e && (this.intro = e, this.init())
        }
        var e, i, n;
        return e = t, (i = [{
            key: "init",
            value: function() {
                var t = this;
                window.addEventListener("load", (function() {
                    var e = t.intro.querySelector(".intro__background"),
                        i = t.intro.querySelector(".intro__mask"),
                        n = t.intro.querySelector(".intro__overlay"),
                        r = t.intro.querySelector(".intro__headline"),
                        s = t.intro.querySelector(".intro__text"),
                        o = t.intro.querySelector(".news-ticker"),
                        a = gr.timeline({
                            duration: 4
                        });
                    a.to(e, {
                        duration: 5,
                        ease: "linear",
                        scale: 2
                    }, 0), a.to(i, {
                        duration: 2,
                        ease: "linear",
                        scale: 6,
                        x: "-50%",
                        y: "-20%"
                    }, 0), a.to(i, {
                        duration: 1,
                        autoAlpha: 0
                    }, 1), a.to(r, {
                        duration: 1,
                        autoAlpha: 0
                    }, 1), a.to(n, {
                        duration: 2,
                        autoAlpha: 1
                    }, 2), a.to(s, {
                        duration: 2,
                        autoAlpha: 1,
                        y: "-20%"
                    }, 2), a.to(o, {
                        duration: 1,
                        autoAlpha: 0,
                        y: "50%"
                    }, 1);
                    var l = "2000";
                    "mobile" === window.breakpoint && (l = "1400"), new ho(l, "page-is-scrolled"), lo.create({
                        trigger: ".js-intro",
                        animation: a,
                        pin: !0,
                        pinSpacing: !0,
                        start: "top top",
                        end: "+=" + l + "px",
                        scrub: 1,
                        markers: !1
                    })
                }))
            }
        }]) && co(e.prototype, i), n && co(e, n), t
    }());

    function po(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    new(function() {
        function t() {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var e = document.querySelector(".js-news-ticker");
            e && (this.newsTicker = e, this.init())
        }
        var e, i, n;
        return e = t, (i = [{
            key: "init",
            value: function() {
                var t = this;
                t.news = t.newsTicker.querySelectorAll(".news-ticker__news div"), t.arrowButton = t.newsTicker.querySelector(".news-ticker__button"), t.currentNews = t.newsTicker.querySelector(".news-ticker__current-news"), t.currentNewsDate = t.currentNews.querySelector(".news__date"), t.currentNewsTitle = t.currentNews.querySelector(".news__title"), t.currentNewsCategory = t.currentNews.querySelector(".news__category"), t.currentNewsIndex = 0, t.progress = 0, t.progressBarIndicator = t.newsTicker.querySelector(".news-ticker__progress__indicator"), t.tickerInterval = null, t.tickerPause = !1, t.tickerUpdateDuration = 1e3, t.tickerDuration = 600, t.showNews(t.currentNewsIndex), setTimeout((function() {
                    t.tickerInterval = setInterval((function() {
                        t.updateProgress()
                    }), 10)
                }), t.tickerUpdateDuration), t.newsTicker.addEventListener("mouseenter", (function() {
                    t.tickerPause = !0
                })), t.newsTicker.addEventListener("mouseleave", (function() {
                    t.tickerPause = !1
                }))
            }
        }, {
            key: "showNews",
            value: function(t) {
                var e = this.news[t];
                e || (e = this.news[0], this.currentNewsIndex = 0), this.progressBarIndicator.style.width = "0%", this.arrowButton.setAttribute("href", e.dataset.url), this.currentNews.setAttribute("href", e.dataset.url), this.currentNewsDate.innerHTML = e.dataset.date, this.currentNewsTitle.innerHTML = e.dataset.title, this.currentNewsCategory.innerHTML = e.dataset.category, this.currentNews.classList.remove("is-updated")
            }
        }, {
            key: "showNextNews",
            value: function() {
                var t = this;
                clearInterval(t.tickerInterval), t.progress = 0, this.currentNews.classList.add("is-updated"), this.currentNewsIndex++, setTimeout((function() {
                    t.showNews(t.currentNewsIndex), setTimeout((function() {
                        t.tickerInterval = setInterval((function() {
                            t.updateProgress()
                        }), 10)
                    }), t.tickerUpdateDuration)
                }), t.tickerUpdateDuration)
            }
        }, {
            key: "updateProgress",
            value: function() {
                if (this.progress >= this.tickerDuration) this.showNextNews();
                else if (!this.tickerPause) {
                    this.progress++;
                    var t = Math.round(this.progress / this.tickerDuration * 1e4) / 100 + "%";
                    this.progressBarIndicator.style.width = t
                }
            }
        }]) && po(e.prototype, i), n && po(e, n), t
    }());

    function fo(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    var go = i(23),
        mo = i(6),
        vo = function() {
            function t(e) {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                var i = this;
                i.element = e, i.scroll = new mo, i.columns = i.element.querySelectorAll(".js-atlas-links-item"), i.columns.forEach((function(t) {
                    t.addEventListener("mouseenter", (function(e) {
                        e.preventDefault();
                        var n = Array.prototype.indexOf.call(t.parentNode.children, t);
                        i.element.classList.add("is-hover-" + n)
                    })), t.addEventListener("mouseleave", (function(t) {
                        t.preventDefault(), i.element.classList.remove("is-hover-0", "is-hover-1", "is-hover-2", "is-hover-3")
                    })), t.addEventListener("click", (function(e) {
                        e.preventDefault(), i.activeColumn = t, document.addEventListener("scrollStop", (function() {
                            go.on(), i.startTransition()
                        }), !1), i.scroll.animateScroll(t, null, {
                            speed: 1200
                        })
                    }))
                }))
            }
            var e, i, n;
            return e = t, (i = [{
                key: "startTransition",
                value: function() {
                    var t = this,
                        e = Array.prototype.indexOf.call(t.activeColumn.parentNode.children, t.activeColumn);
                    t.element.classList.add("is-in-transition", "transition-index-" + e), t.activeColumn.classList.add("is-in-transition"), setTimeout((function() {
                        location.href = t.activeColumn.getAttribute("href")
                    }), 800)
                }
            }]) && fo(e.prototype, i), n && fo(e, n), t
        }();

    function Do(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function yo(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    var bo = function() {
        function t(e, i) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            Do(this, t);
            var s = document.querySelectorAll(e);
            s.length > 0 && (this.selector = e, this.cssClass = i, this.triggerOffset = n, this.initPassedElements = r, this.init())
        }
        var e, i, n;
        return e = t, (i = [{
            key: "init",
            value: function() {
                var t = this;
                window.addEventListener("load", (function() {
                    window.addEventListener("scroll", (function() {
                        t.checkViewport()
                    })), window.addEventListener("resize", (function() {
                        t.checkViewport()
                    })), setTimeout((function() {
                        t.checkViewport(t.initPassedElements)
                    }), 500)
                }))
            }
        }, {
            key: "isInViewport",
            value: function(t) {
                var e = t.getBoundingClientRect(),
                    i = window.scrollY,
                    n = window.innerHeight,
                    r = i + n,
                    s = e.top + i,
                    o = t.offsetHeight,
                    a = s + o;
                return s >= i && s < r - this.triggerOffset || a > i + this.triggerOffset && a <= r || o > n && s <= i && a >= r
            }
        }, {
            key: "wasInViewport",
            value: function(t) {
                return t.getBoundingClientRect().top + window.scrollY + t.offsetHeight <= window.scrollY + window.innerHeight
            }
        }, {
            key: "checkViewport",
            value: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    e = this,
                    i = document.querySelectorAll(e.selector + ":not(." + e.cssClass + ")");
                i.forEach((function(i, n, r) {
                    e.isInViewport(i) && i.classList.add(e.cssClass), t && e.wasInViewport(i) && i.classList.add(e.cssClass)
                }))
            }
        }]) && yo(e.prototype, i), n && yo(e, n), t
    }();

    function wo(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    var _o = function() {
        function t() {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.actionIsNeeded && this.init()
        }
        var e, i, n;
        return e = t, (i = [{
            key: "actionIsNeeded",
            value: function() {
                return !0
            }
        }, {
            key: "init",
            value: function() {
                function t() {
                    var t = document.querySelector(".footer"),
                        e = document.querySelector("body");
                    if (t) {
                        var i = t.offsetHeight;
                        e.style.paddingBottom = i + "px"
                    }
                }
                document.addEventListener("DOMContentLoaded", (function() {
                    t()
                })), window.onload = function() {
                    t()
                }, window.addEventListener("resize", t)
            }
        }]) && wo(e.prototype, i), n && wo(e, n), t
    }();

    function Co(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    var xo = function() {
            function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.actionIsNeeded && this.init()
            }
            var e, i, n;
            return e = t, (i = [{
                key: "actionIsNeeded",
                value: function() {
                    return !0
                }
            }, {
                key: "init",
                value: function() {
                    var t = document.querySelector(".nav-button"),
                        e = document.querySelectorAll(".has-submenu"),
                        i = document.querySelector(".navigation-menu");
                    t && t.addEventListener("click", (function(n) {
                        i.classList.contains("has-submenu-active") && (i.classList.remove("has-submenu-active"), e.forEach((function(t) {
                            t.classList.remove("has-submenu-active")
                        }))), t.classList.toggle("is-active"), document.body.classList.toggle("has-navi-open")
                    }));
                    var n = document.querySelectorAll(".submenu-button");
                    n && n.forEach((function(t) {
                        t.addEventListener("click", (function(t) {
                            var e = function(t, e) {
                                for (; t && t !== document; t = t.parentNode)
                                    if (t.matches(e)) return t;
                                return null
                            }(t.target, ".submenu-container");
                            i.classList.contains("has-submenu-active") ? (i.classList.remove("has-submenu-active"), e.classList.contains("has-submenu-active") ? e.classList.remove("has-submenu-active") : e.classList.add("has-submenu-active")) : (i.classList.add("has-submenu-active"), e.classList.contains("has-submenu-active") ? e.classList.remove("has-submenu-active") : e.classList.add("has-submenu-active"))
                        }))
                    }))
                }
            }]) && Co(e.prototype, i), n && Co(e, n), t
        }(),
        Eo = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
    /*!
     * strings: 3.7.1
     * https://greensock.com
     *
     * Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    function So(t) {
        return (So = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }
    /*!
     * SplitText: 3.7.1
     * https://greensock.com
     *
     * @license Copyright 2008-2021, GreenSock. All rights reserved.
     * Subject to the terms at https://greensock.com/standard-license or for
     * Club GreenSock members, the agreement issued with that membership.
     * @author: Jack Doyle, jack@greensock.com
     */
    var Fo, To, Ao, Io = /(?:\r|\n|\t\t)/g,
        ko = /(?:\s\s+)/g,
        Lo = function(t) {
            return To.getComputedStyle(t)
        },
        Oo = Array.isArray,
        Po = [].slice,
        Mo = function(t, e) {
            var i;
            return Oo(t) ? t : "string" === (i = So(t)) && !e && t ? Po.call(Fo.querySelectorAll(t), 0) : t && "object" === i && "length" in t ? Po.call(t, 0) : t ? [t] : []
        },
        Bo = function(t) {
            return "absolute" === t.position || !0 === t.absolute
        },
        zo = function(t, e) {
            for (var i, n = e.length; --n > -1;)
                if (i = e[n], t.substr(0, i.length) === i) return i.length
        },
        No = function(t, e) {
            void 0 === t && (t = "");
            var i = ~t.indexOf("++"),
                n = 1;
            return i && (t = t.split("++").join("")),
                function() {
                    return "<" + e + " style='position:relative;display:inline-block;'" + (t ? " class='" + t + (i ? n++ : "") + "'>" : ">")
                }
        },
        Vo = function t(e, i, n) {
            var r = e.nodeType;
            if (1 === r || 9 === r || 11 === r)
                for (e = e.firstChild; e; e = e.nextSibling) t(e, i, n);
            else 3 !== r && 4 !== r || (e.nodeValue = e.nodeValue.split(i).join(n))
        },
        Ro = function(t, e) {
            for (var i = e.length; --i > -1;) t.push(e[i])
        },
        qo = function(t, e, i) {
            for (var n; t && t !== e;) {
                if (n = t._next || t.nextSibling) return n.textContent.charAt(0) === i;
                t = t.parentNode || t._parent
            }
        },
        Ho = function t(e) {
            var i, n, r = Mo(e.childNodes),
                s = r.length;
            for (i = 0; i < s; i++)(n = r[i])._isSplit ? t(n) : i && n.previousSibling && 3 === n.previousSibling.nodeType ? (n.previousSibling.nodeValue += 3 === n.nodeType ? n.nodeValue : n.firstChild.nodeValue, e.removeChild(n)) : 3 !== n.nodeType && (e.insertBefore(n.firstChild, n), e.removeChild(n))
        },
        Wo = function(t, e) {
            return parseFloat(e[t]) || 0
        },
        jo = function(t, e, i, n, r, s, o) {
            var a, l, u, h, c, d, p, f, g, m, v, D, y = Lo(t),
                b = Wo("paddingLeft", y),
                w = -999,
                _ = Wo("borderBottomWidth", y) + Wo("borderTopWidth", y),
                C = Wo("borderLeftWidth", y) + Wo("borderRightWidth", y),
                x = Wo("paddingTop", y) + Wo("paddingBottom", y),
                E = Wo("paddingLeft", y) + Wo("paddingRight", y),
                S = Wo("fontSize", y) * (e.lineThreshold || .2),
                F = y.textAlign,
                T = [],
                A = [],
                I = [],
                k = e.wordDelimiter || " ",
                L = e.tag ? e.tag : e.span ? "span" : "div",
                O = e.type || e.split || "chars,words,lines",
                P = r && ~O.indexOf("lines") ? [] : null,
                M = ~O.indexOf("words"),
                B = ~O.indexOf("chars"),
                z = Bo(e),
                N = e.linesClass,
                V = ~(N || "").indexOf("++"),
                R = [],
                q = "flex" === y.display,
                H = t.style.display;
            for (V && (N = N.split("++").join("")), q && (t.style.display = "block"), u = (l = t.getElementsByTagName("*")).length, c = [], a = 0; a < u; a++) c[a] = l[a];
            if (P || z)
                for (a = 0; a < u; a++)((d = (h = c[a]).parentNode === t) || z || B && !M) && (D = h.offsetTop, P && d && Math.abs(D - w) > S && ("BR" !== h.nodeName || 0 === a) && (p = [], P.push(p), w = D), z && (h._x = h.offsetLeft, h._y = D, h._w = h.offsetWidth, h._h = h.offsetHeight), P && ((h._isSplit && d || !B && d || M && d || !M && h.parentNode.parentNode === t && !h.parentNode._isSplit) && (p.push(h), h._x -= b, qo(h, t, k) && (h._wordEnd = !0)), "BR" === h.nodeName && (h.nextSibling && "BR" === h.nextSibling.nodeName || 0 === a) && P.push([])));
            for (a = 0; a < u; a++)
                if (d = (h = c[a]).parentNode === t, "BR" !== h.nodeName)
                    if (z && (g = h.style, M || d || (h._x += h.parentNode._x, h._y += h.parentNode._y), g.left = h._x + "px", g.top = h._y + "px", g.position = "absolute", g.display = "block", g.width = h._w + 1 + "px", g.height = h._h + "px"), !M && B)
                        if (h._isSplit)
                            for (h._next = l = h.nextSibling, h.parentNode.appendChild(h); l && 3 === l.nodeType && " " === l.textContent;) h._next = l.nextSibling, h.parentNode.appendChild(l), l = l.nextSibling;
                        else h.parentNode._isSplit ? (h._parent = h.parentNode, !h.previousSibling && h.firstChild && (h.firstChild._isFirst = !0), h.nextSibling && " " === h.nextSibling.textContent && !h.nextSibling.nextSibling && R.push(h.nextSibling), h._next = h.nextSibling && h.nextSibling._isFirst ? null : h.nextSibling, h.parentNode.removeChild(h), c.splice(a--, 1), u--) : d || (D = !h.nextSibling && qo(h.parentNode, t, k), h.parentNode._parent && h.parentNode._parent.appendChild(h), D && h.parentNode.appendChild(Fo.createTextNode(" ")), "span" === L && (h.style.display = "inline"), T.push(h));
            else h.parentNode._isSplit && !h._isSplit && "" !== h.innerHTML ? A.push(h) : B && !h._isSplit && ("span" === L && (h.style.display = "inline"), T.push(h));
            else P || z ? (h.parentNode && h.parentNode.removeChild(h), c.splice(a--, 1), u--) : M || t.appendChild(h);
            for (a = R.length; --a > -1;) R[a].parentNode.removeChild(R[a]);
            if (P) {
                for (z && (m = Fo.createElement(L), t.appendChild(m), v = m.offsetWidth + "px", D = m.offsetParent === t ? 0 : t.offsetLeft, t.removeChild(m)), g = t.style.cssText, t.style.cssText = "display:none;"; t.firstChild;) t.removeChild(t.firstChild);
                for (f = " " === k && (!z || !M && !B), a = 0; a < P.length; a++) {
                    for (p = P[a], (m = Fo.createElement(L)).style.cssText = "display:block;text-align:" + F + ";position:" + (z ? "absolute;" : "relative;"), N && (m.className = N + (V ? a + 1 : "")), I.push(m), u = p.length, l = 0; l < u; l++) "BR" !== p[l].nodeName && (h = p[l], m.appendChild(h), f && h._wordEnd && m.appendChild(Fo.createTextNode(" ")), z && (0 === l && (m.style.top = h._y + "px", m.style.left = b + D + "px"), h.style.top = "0px", D && (h.style.left = h._x - D + "px")));
                    0 === u ? m.innerHTML = "&nbsp;" : M || B || (Ho(m), Vo(m, String.fromCharCode(160), " ")), z && (m.style.width = v, m.style.height = h._h + "px"), t.appendChild(m)
                }
                t.style.cssText = g
            }
            z && (o > t.clientHeight && (t.style.height = o - x + "px", t.clientHeight < o && (t.style.height = o + _ + "px")), s > t.clientWidth && (t.style.width = s - E + "px", t.clientWidth < s && (t.style.width = s + C + "px"))), q && (H ? t.style.display = H : t.style.removeProperty("display")), Ro(i, T), M && Ro(n, A), Ro(r, I)
        },
        Go = function(t, e, i, n) {
            var r, s, o, a, l, u, h, c, d = e.tag ? e.tag : e.span ? "span" : "div",
                p = ~(e.type || e.split || "chars,words,lines").indexOf("chars"),
                f = Bo(e),
                g = e.wordDelimiter || " ",
                m = " " !== g ? "" : f ? "&#173; " : " ",
                v = "</" + d + ">",
                D = 1,
                y = e.specialChars ? "function" == typeof e.specialChars ? e.specialChars : zo : null,
                b = Fo.createElement("div"),
                w = t.parentNode;
            for (w.insertBefore(b, t), b.textContent = t.nodeValue, w.removeChild(t), h = -1 !== (r = function t(e) {
                    var i = e.nodeType,
                        n = "";
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += t(e)
                    } else if (3 === i || 4 === i) return e.nodeValue;
                    return n
                }(t = b)).indexOf("<"), !1 !== e.reduceWhiteSpace && (r = r.replace(ko, " ").replace(Io, "")), h && (r = r.split("<").join("{{LT}}")), l = r.length, s = (" " === r.charAt(0) ? m : "") + i(), o = 0; o < l; o++)
                if (u = r.charAt(o), y && (c = y(r.substr(o), e.specialChars))) u = r.substr(o, c || 1), s += p && " " !== u ? n() + u + "</" + d + ">" : u, o += c - 1;
                else if (u === g && r.charAt(o - 1) !== g && o) {
                for (s += D ? v : "", D = 0; r.charAt(o + 1) === g;) s += m, o++;
                o === l - 1 ? s += m : ")" !== r.charAt(o + 1) && (s += m + i(), D = 1)
            } else "{" === u && "{{LT}}" === r.substr(o, 6) ? (s += p ? n() + "{{LT}}</" + d + ">" : "{{LT}}", o += 5) : u.charCodeAt(0) >= 55296 && u.charCodeAt(0) <= 56319 || r.charCodeAt(o + 1) >= 65024 && r.charCodeAt(o + 1) <= 65039 ? (a = ((r.substr(o, 12).split(Eo) || [])[1] || "").length || 2, s += p && " " !== u ? n() + r.substr(o, a) + "</" + d + ">" : r.substr(o, a), o += a - 1) : s += p && " " !== u ? n() + u + "</" + d + ">" : u;
            t.outerHTML = s + (D ? v : ""), h && Vo(w, "{{LT}}", "<")
        },
        Yo = function t(e, i, n, r) {
            var s, o, a = Mo(e.childNodes),
                l = a.length,
                u = Bo(i);
            if (3 !== e.nodeType || l > 1) {
                for (i.absolute = !1, s = 0; s < l; s++)(o = a[s])._next = o._isFirst = o._parent = o._wordEnd = null, (3 !== o.nodeType || /\S+/.test(o.nodeValue)) && (u && 3 !== o.nodeType && "inline" === Lo(o).display && (o.style.display = "inline-block", o.style.position = "relative"), o._isSplit = !0, t(o, i, n, r));
                return i.absolute = u, void(e._isSplit = !0)
            }
            Go(e, i, n, r)
        },
        Uo = function() {
            function t(t, e) {
                Ao || (Fo = document, To = window, Ao = 1), this.elements = Mo(t), this.chars = [], this.words = [], this.lines = [], this._originals = [], this.vars = e || {}, this.split(e)
            }
            var e = t.prototype;
            return e.split = function(t) {
                this.isSplit && this.revert(), this.vars = t = t || this.vars, this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
                for (var e, i, n, r = this.elements.length, s = t.tag ? t.tag : t.span ? "span" : "div", o = No(t.wordsClass, s), a = No(t.charsClass, s); --r > -1;) n = this.elements[r], this._originals[r] = n.innerHTML, e = n.clientHeight, i = n.clientWidth, Yo(n, t, o, a), jo(n, t, this.chars, this.words, this.lines, i, e);
                return this.chars.reverse(), this.words.reverse(), this.lines.reverse(), this.isSplit = !0, this
            }, e.revert = function() {
                var t = this._originals;
                if (!t) throw "revert() call wasn't scoped properly.";
                return this.elements.forEach((function(e, i) {
                    return e.innerHTML = t[i]
                })), this.chars = [], this.words = [], this.lines = [], this.isSplit = !1, this
            }, t.create = function(e, i) {
                return new t(e, i)
            }, t
        }();

    function Xo(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    Uo.version = "3.7.1", gr.registerPlugin(Uo);
    var $o = function() {
            function t() {
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), this.initSplitTexts()
            }
            var e, i, n;
            return e = t, (i = [{
                key: "initSplitTexts",
                value: function() {
                    window.addEventListener("load", (function(t) {
                        new Uo(".splitted", {
                                type: "lines",
                                linesClass: "line line++"
                            }),
                            function(t, e, i) {
                                for (var n = document.querySelectorAll(e), r = 0; r < n.length; r++) {
                                    var s = t + n[r].outerHTML + i;
                                    n[r].outerHTML = s
                                }
                            }("<div class='line-wrapper'>", ".line", "</div>")
                    }))
                }
            }]) && Xo(e.prototype, i), n && Xo(e, n), t
        }(),
        Qo = i(6),
        Jo = i.n(Qo);

    function Ko(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    var Zo = function() {
        function t() {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            var e = this,
                n = i(2),
                r = document.querySelector(".carousel");
            r && (e.slider = r, e.flickity = new n(r, {
                cellAlign: "center",
                pageDots: !1,
                prevNextButtons: !0,
                initialIndex: 1,
                wrapAround: !1,
                arrowShape: {
                    x0: 10,
                    x1: 60,
                    y1: 50,
                    x2: 65,
                    y2: 45,
                    x3: 20
                },
                on: {
                    ready: function() {
                        e.setCurrentSlide(this.selectedIndex), e.setSlideCount(this.slides.length)
                    }
                }
            }), e.flickity.on("change", (function(t) {
                e.onSlideChange(t)
            })))
        }
        var e, n, r;
        return e = t, (n = [{
            key: "onSlideChange",
            value: function(t) {
                this.setCurrentSlide(t)
            }
        }, {
            key: "setCurrentSlide",
            value: function(t) {
                this.slider.parentNode.querySelector(".slider-status .js-quote-slider-current").textContent = t + 1
            }
        }, {
            key: "setSlideCount",
            value: function(t) {
                this.slider.parentNode.querySelector(".slider-status .js-quote-slider-count").textContent = t
            }
        }]) && Ko(e.prototype, n), r && Ko(e, r), t
    }();

    function ta(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    var ea = function() {
        function t() {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.actionIsNeeded && this.init()
        }
        var e, i, n;
        return e = t, (i = [{
            key: "actionIsNeeded",
            value: function() {
                return !0
            }
        }, {
            key: "init",
            value: function() {
                document.querySelectorAll(".accordion-head").forEach((function(t) {
                    t.onclick = function() {
                        this.classList.toggle("has-open");
                        var t = this.nextElementSibling;
                        t.classList.contains("is-open") ? (t.style.maxHeight = "0px", t.classList.remove("is-open")) : (t.style.maxHeight = t.scrollHeight + "px", t.classList.add("is-open"))
                    }
                }))
            }
        }]) && ta(e.prototype, i), n && ta(e, n), t
    }();

    function ia(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    new(function() {
        function t() {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t);
            document.querySelectorAll('[data-parallax="media"]').length > 0 && (window.addEventListener("scroll", this.parallax), this.parallax(), console.log("Hello Parallax Stage"))
        }
        var e, i, n;
        return e = t, (i = [{
            key: "parallax",
            value: function() {
                var t = "translate3d(0," + Math.round(.3 * window.pageYOffset) + "px, 0)";
                document.querySelectorAll('[data-parallax="media"]').forEach((function(e) {
                    e.style.WebkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.transform = t
                }))
            }
        }]) && ia(e.prototype, i), n && ia(e, n), t
    }());

    function na(t, e) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
        }
    }
    var ra = function() {
        function t() {
            ! function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, t), this.init()
        }
        var e, i, n;
        return e = t, (i = [{
            key: "init",
            value: function() {
                var t = document.querySelector(".selector-dropdown-button"),
                    e = document.querySelector(".selector-dropdown-container");
                e && t.addEventListener("click", (function() {
                    e.classList.toggle("is-active")
                }))
            }
        }]) && na(e.prototype, i), n && na(e, n), t
    }();
    new r, new ea, new Zo, new function t() {
        ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t), document.addEventListener("DOMContentLoaded", (function() {
            var t = document.querySelector(".filter-buttons");
            t && t.querySelectorAll("button").forEach((function(e) {
                e.addEventListener("click", (function() {
                    e.dataset.filter;
                    var i = e.parentNode;
                    if (i.classList.contains("is-current")) {
                        if (t.classList.contains("is-dropped")) return t.classList.remove("is-dropped"), !1;
                        t.classList.add("is-dropped")
                    } else t.classList.remove("is-dropped");
                    t.querySelector(".is-current").classList.remove("is-current"), i.classList.add("is-current")
                }))
            }))
        }))
    }, new $o, new xo, document.body.classList.contains("start") || new ho(80, "page-is-scrolled"), new ra, new _o, new function t() {
        ! function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }(this, t);
        var e = document.querySelectorAll("video");
        e && e.forEach((function(t) {
            var e = t.nextElementSibling;
            e && e.addEventListener("click", (function() {
                e.style.display = "none", t.controls = "controls", t.play()
            }), !1)
        }))
    }, new bo(".fade-in-element", "is-in-view", 100, !0), window.addEventListener("load", (function() {
        var t = document.querySelectorAll(".quote-slider");
        t.length > 0 && t.forEach((function(t) {
            new h(t)
        })), setTimeout((function() {
            new o.a(".js-rellax", {
                center: !0,
                breakpoints: [720, 910, 1300]
            })
        }), 2e3), document.querySelectorAll(".js-atlas-links").forEach((function(t) {
            new vo(t)
        }))
    })), new Jo.a('a[href*="#"]', {
        speed: 700,
        speedAsDuration: !0,
        easing: "easeInOutQuint"
    })
}]);;
var euCookieComplianceExecuted = false;

(function($, Drupal) {
    Drupal.behaviors.jbaTheme = {
        attach: function(context) {
            $(document).once('weberAjaxViews').ajaxComplete(function(event, xhr, settings) {
                // Trigger resize event, for scroll trigger based animations
                window.dispatchEvent(new Event('scroll'));
            });
        }
    }
})(jQuery, Drupal);

;
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/
(function($, once) {
    var deprecatedMessageSuffix = "is deprecated in Drupal 9.3.0 and will be removed in Drupal 10.0.0. Use the core/once library instead. See https://www.drupal.org/node/3158256";
    var originalJQOnce = $.fn.once;
    var originalJQRemoveOnce = $.fn.removeOnce;
    $.fn.once = function jQueryOnce(id) {
        Drupal.deprecationError({
            message: "jQuery.once() ".concat(deprecatedMessageSuffix)
        });
        return originalJQOnce.apply(this, [id]);
    };
    $.fn.removeOnce = function jQueryRemoveOnce(id) {
        Drupal.deprecationError({
            message: "jQuery.removeOnce() ".concat(deprecatedMessageSuffix)
        });
        return originalJQRemoveOnce.apply(this, [id]);
    };
    var drupalOnce = once;

    function augmentedOnce(id, selector, context) {
        originalJQOnce.apply($(selector, context), [id]);
        return drupalOnce(id, selector, context);
    }

    function remove(id, selector, context) {
        originalJQRemoveOnce.apply($(selector, context), [id]);
        return drupalOnce.remove(id, selector, context);
    }
    window.once = Object.assign(augmentedOnce, drupalOnce, {
        remove: remove
    });
})(jQuery, once);;
/*!
 * jQuery Form Plugin
 * version: 4.3.0
 * Requires jQuery v1.7.2 or later
 * Project repository: https://github.com/jquery-form/form

 * Copyright 2017 Kevin Morris
 * Copyright 2006 M. Alsup

 * Dual licensed under the LGPL-2.1+ or MIT licenses
 * https://github.com/jquery-form/form#license

 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 */
! function(r) {
    "function" == typeof define && define.amd ? define(["jquery"], r) : "object" == typeof module && module.exports ? module.exports = function(e, t) {
        return void 0 === t && (t = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), r(t), t
    } : r(jQuery)
}(function(q) {
    "use strict";
    var m = /\r?\n/g,
        S = {};
    S.fileapi = void 0 !== q('<input type="file">').get(0).files, S.formdata = void 0 !== window.FormData;
    var _ = !!q.fn.prop;

    function o(e) {
        var t = e.data;
        e.isDefaultPrevented() || (e.preventDefault(), q(e.target).closest("form").ajaxSubmit(t))
    }

    function i(e) {
        var t = e.target,
            r = q(t);
        if (!r.is("[type=submit],[type=image]")) {
            var a = r.closest("[type=submit]");
            if (0 === a.length) return;
            t = a[0]
        }
        var n, o = t.form;
        "image" === (o.clk = t).type && (void 0 !== e.offsetX ? (o.clk_x = e.offsetX, o.clk_y = e.offsetY) : "function" == typeof q.fn.offset ? (n = r.offset(), o.clk_x = e.pageX - n.left, o.clk_y = e.pageY - n.top) : (o.clk_x = e.pageX - t.offsetLeft, o.clk_y = e.pageY - t.offsetTop)), setTimeout(function() {
            o.clk = o.clk_x = o.clk_y = null
        }, 100)
    }

    function N() {
        var e;
        q.fn.ajaxSubmit.debug && (e = "[jquery.form] " + Array.prototype.join.call(arguments, ""), window.console && window.console.log ? window.console.log(e) : window.opera && window.opera.postError && window.opera.postError(e))
    }
    q.fn.attr2 = function() {
        if (!_) return this.attr.apply(this, arguments);
        var e = this.prop.apply(this, arguments);
        return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
    }, q.fn.ajaxSubmit = function(M, e, t, r) {
        if (!this.length) return N("ajaxSubmit: skipping submit process - no element selected"), this;
        var O, a, n, o, X = this;
        "function" == typeof M ? M = {
            success: M
        } : "string" == typeof M || !1 === M && 0 < arguments.length ? (M = {
            url: M,
            data: e,
            dataType: t
        }, "function" == typeof r && (M.success = r)) : void 0 === M && (M = {}), O = M.method || M.type || this.attr2("method"), n = (n = (n = "string" == typeof(a = M.url || this.attr2("action")) ? q.trim(a) : "") || window.location.href || "") && (n.match(/^([^#]+)/) || [])[1], o = /(MSIE|Trident)/.test(navigator.userAgent || "") && /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank", M = q.extend(!0, {
            url: n,
            success: q.ajaxSettings.success,
            type: O || q.ajaxSettings.type,
            iframeSrc: o
        }, M);
        var i = {};
        if (this.trigger("form-pre-serialize", [this, M, i]), i.veto) return N("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (M.beforeSerialize && !1 === M.beforeSerialize(this, M)) return N("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var s = M.traditional;
        void 0 === s && (s = q.ajaxSettings.traditional);
        var u, c, C = [],
            l = this.formToArray(M.semantic, C, M.filtering);
        if (M.data && (c = q.isFunction(M.data) ? M.data(l) : M.data, M.extraData = c, u = q.param(c, s)), M.beforeSubmit && !1 === M.beforeSubmit(l, this, M)) return N("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [l, this, M, i]), i.veto) return N("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var f = q.param(l, s);
        u && (f = f ? f + "&" + u : u), "GET" === M.type.toUpperCase() ? (M.url += (0 <= M.url.indexOf("?") ? "&" : "?") + f, M.data = null) : M.data = f;
        var d, m, p, h = [];
        M.resetForm && h.push(function() {
            X.resetForm()
        }), M.clearForm && h.push(function() {
            X.clearForm(M.includeHidden)
        }), !M.dataType && M.target ? (d = M.success || function() {}, h.push(function(e, t, r) {
            var a = arguments,
                n = M.replaceTarget ? "replaceWith" : "html";
            q(M.target)[n](e).each(function() {
                d.apply(this, a)
            })
        })) : M.success && (q.isArray(M.success) ? q.merge(h, M.success) : h.push(M.success)), M.success = function(e, t, r) {
            for (var a = M.context || this, n = 0, o = h.length; n < o; n++) h[n].apply(a, [e, t, r || X, X])
        }, M.error && (m = M.error, M.error = function(e, t, r) {
            var a = M.context || this;
            m.apply(a, [e, t, r, X])
        }), M.complete && (p = M.complete, M.complete = function(e, t) {
            var r = M.context || this;
            p.apply(r, [e, t, X])
        });
        var v = 0 < q("input[type=file]:enabled", this).filter(function() {
                return "" !== q(this).val()
            }).length,
            g = "multipart/form-data",
            x = X.attr("enctype") === g || X.attr("encoding") === g,
            y = S.fileapi && S.formdata;
        N("fileAPI :" + y);
        var b, T = (v || x) && !y;
        !1 !== M.iframe && (M.iframe || T) ? M.closeKeepAlive ? q.get(M.closeKeepAlive, function() {
            b = w(l)
        }) : b = w(l) : b = (v || x) && y ? function(e) {
            for (var r = new FormData, t = 0; t < e.length; t++) r.append(e[t].name, e[t].value);
            if (M.extraData) {
                var a = function(e) {
                    var t, r, a = q.param(e, M.traditional).split("&"),
                        n = a.length,
                        o = [];
                    for (t = 0; t < n; t++) a[t] = a[t].replace(/\+/g, " "), r = a[t].split("="), o.push([decodeURIComponent(r[0]), decodeURIComponent(r[1])]);
                    return o
                }(M.extraData);
                for (t = 0; t < a.length; t++) a[t] && r.append(a[t][0], a[t][1])
            }
            M.data = null;
            var n = q.extend(!0, {}, q.ajaxSettings, M, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: O || "POST"
            });
            M.uploadProgress && (n.xhr = function() {
                var e = q.ajaxSettings.xhr();
                return e.upload && e.upload.addEventListener("progress", function(e) {
                    var t = 0,
                        r = e.loaded || e.position,
                        a = e.total;
                    e.lengthComputable && (t = Math.ceil(r / a * 100)), M.uploadProgress(e, r, a, t)
                }, !1), e
            });
            n.data = null;
            var o = n.beforeSend;
            return n.beforeSend = function(e, t) {
                M.formData ? t.data = M.formData : t.data = r, o && o.call(this, e, t)
            }, q.ajax(n)
        }(l) : q.ajax(M), X.removeData("jqxhr").data("jqxhr", b);
        for (var j = 0; j < C.length; j++) C[j] = null;
        return this.trigger("form-submit-notify", [this, M]), this;

        function w(e) {
            var t, r, l, f, o, d, m, p, a, n, h, v, i = X[0],
                g = q.Deferred();
            if (g.abort = function(e) {
                    p.abort(e)
                }, e)
                for (r = 0; r < C.length; r++) t = q(C[r]), _ ? t.prop("disabled", !1) : t.removeAttr("disabled");
            (l = q.extend(!0, {}, q.ajaxSettings, M)).context = l.context || l, o = "jqFormIO" + (new Date).getTime();
            var s = i.ownerDocument,
                u = X.closest("body");
            if (l.iframeTarget ? (n = (d = q(l.iframeTarget, s)).attr2("name")) ? o = n : d.attr2("name", o) : (d = q('<iframe name="' + o + '" src="' + l.iframeSrc + '" />', s)).css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                }), m = d[0], p = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function() {},
                    getResponseHeader: function() {},
                    setRequestHeader: function() {},
                    abort: function(e) {
                        var t = "timeout" === e ? "timeout" : "aborted";
                        N("aborting upload... " + t), this.aborted = 1;
                        try {
                            m.contentWindow.document.execCommand && m.contentWindow.document.execCommand("Stop")
                        } catch (e) {}
                        d.attr("src", l.iframeSrc), p.error = t, l.error && l.error.call(l.context, p, t, e), f && q.event.trigger("ajaxError", [p, l, t]), l.complete && l.complete.call(l.context, p, t)
                    }
                }, (f = l.global) && 0 == q.active++ && q.event.trigger("ajaxStart"), f && q.event.trigger("ajaxSend", [p, l]), l.beforeSend && !1 === l.beforeSend.call(l.context, p, l)) return l.global && q.active--, g.reject(), g;
            if (p.aborted) return g.reject(), g;
            (a = i.clk) && (n = a.name) && !a.disabled && (l.extraData = l.extraData || {}, l.extraData[n] = a.value, "image" === a.type && (l.extraData[n + ".x"] = i.clk_x, l.extraData[n + ".y"] = i.clk_y));
            var x = 1,
                y = 2;

            function b(t) {
                var r = null;
                try {
                    t.contentWindow && (r = t.contentWindow.document)
                } catch (e) {
                    N("cannot get iframe.contentWindow document: " + e)
                }
                if (r) return r;
                try {
                    r = t.contentDocument ? t.contentDocument : t.document
                } catch (e) {
                    N("cannot get iframe.contentDocument: " + e), r = t.document
                }
                return r
            }
            var c = q("meta[name=csrf-token]").attr("content"),
                T = q("meta[name=csrf-param]").attr("content");

            function j() {
                var e = X.attr2("target"),
                    t = X.attr2("action"),
                    r = X.attr("enctype") || X.attr("encoding") || "multipart/form-data";
                i.setAttribute("target", o), O && !/post/i.test(O) || i.setAttribute("method", "POST"), t !== l.url && i.setAttribute("action", l.url), l.skipEncodingOverride || O && !/post/i.test(O) || X.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), l.timeout && (v = setTimeout(function() {
                    h = !0, A(x)
                }, l.timeout));
                var a = [];
                try {
                    if (l.extraData)
                        for (var n in l.extraData) l.extraData.hasOwnProperty(n) && (q.isPlainObject(l.extraData[n]) && l.extraData[n].hasOwnProperty("name") && l.extraData[n].hasOwnProperty("value") ? a.push(q('<input type="hidden" name="' + l.extraData[n].name + '">', s).val(l.extraData[n].value).appendTo(i)[0]) : a.push(q('<input type="hidden" name="' + n + '">', s).val(l.extraData[n]).appendTo(i)[0]));
                    l.iframeTarget || d.appendTo(u), m.attachEvent ? m.attachEvent("onload", A) : m.addEventListener("load", A, !1), setTimeout(function e() {
                        try {
                            var t = b(m).readyState;
                            N("state = " + t), t && "uninitialized" === t.toLowerCase() && setTimeout(e, 50)
                        } catch (e) {
                            N("Server abort: ", e, " (", e.name, ")"), A(y), v && clearTimeout(v), v = void 0
                        }
                    }, 15);
                    try {
                        i.submit()
                    } catch (e) {
                        document.createElement("form").submit.apply(i)
                    }
                } finally {
                    i.setAttribute("action", t), i.setAttribute("enctype", r), e ? i.setAttribute("target", e) : X.removeAttr("target"), q(a).remove()
                }
            }
            T && c && (l.extraData = l.extraData || {}, l.extraData[T] = c), l.forceSync ? j() : setTimeout(j, 10);
            var w, S, k, D = 50;

            function A(e) {
                if (!p.aborted && !k) {
                    if ((S = b(m)) || (N("cannot access response document"), e = y), e === x && p) return p.abort("timeout"), void g.reject(p, "timeout");
                    if (e === y && p) return p.abort("server abort"), void g.reject(p, "error", "server abort");
                    if (S && S.location.href !== l.iframeSrc || h) {
                        m.detachEvent ? m.detachEvent("onload", A) : m.removeEventListener("load", A, !1);
                        var t, r = "success";
                        try {
                            if (h) throw "timeout";
                            var a = "xml" === l.dataType || S.XMLDocument || q.isXMLDoc(S);
                            if (N("isXml=" + a), !a && window.opera && (null === S.body || !S.body.innerHTML) && --D) return N("requeing onLoad callback, DOM not available"), void setTimeout(A, 250);
                            var n = S.body ? S.body : S.documentElement;
                            p.responseText = n ? n.innerHTML : null, p.responseXML = S.XMLDocument ? S.XMLDocument : S, a && (l.dataType = "xml"), p.getResponseHeader = function(e) {
                                return {
                                    "content-type": l.dataType
                                }[e.toLowerCase()]
                            }, n && (p.status = Number(n.getAttribute("status")) || p.status, p.statusText = n.getAttribute("statusText") || p.statusText);
                            var o, i, s, u = (l.dataType || "").toLowerCase(),
                                c = /(json|script|text)/.test(u);
                            c || l.textarea ? (o = S.getElementsByTagName("textarea")[0]) ? (p.responseText = o.value, p.status = Number(o.getAttribute("status")) || p.status, p.statusText = o.getAttribute("statusText") || p.statusText) : c && (i = S.getElementsByTagName("pre")[0], s = S.getElementsByTagName("body")[0], i ? p.responseText = i.textContent ? i.textContent : i.innerText : s && (p.responseText = s.textContent ? s.textContent : s.innerText)) : "xml" === u && !p.responseXML && p.responseText && (p.responseXML = F(p.responseText));
                            try {
                                w = E(p, u, l)
                            } catch (e) {
                                r = "parsererror", p.error = t = e || r
                            }
                        } catch (e) {
                            N("error caught: ", e), r = "error", p.error = t = e || r
                        }
                        p.aborted && (N("upload aborted"), r = null), p.status && (r = 200 <= p.status && p.status < 300 || 304 === p.status ? "success" : "error"), "success" === r ? (l.success && l.success.call(l.context, w, "success", p), g.resolve(p.responseText, "success", p), f && q.event.trigger("ajaxSuccess", [p, l])) : r && (void 0 === t && (t = p.statusText), l.error && l.error.call(l.context, p, r, t), g.reject(p, "error", t), f && q.event.trigger("ajaxError", [p, l, t])), f && q.event.trigger("ajaxComplete", [p, l]), f && !--q.active && q.event.trigger("ajaxStop"), l.complete && l.complete.call(l.context, p, r), k = !0, l.timeout && clearTimeout(v), setTimeout(function() {
                            l.iframeTarget ? d.attr("src", l.iframeSrc) : d.remove(), p.responseXML = null
                        }, 100)
                    }
                }
            }
            var F = q.parseXML || function(e, t) {
                    return window.ActiveXObject ? ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" !== t.documentElement.nodeName ? t : null
                },
                L = q.parseJSON || function(e) {
                    return window.eval("(" + e + ")")
                },
                E = function(e, t, r) {
                    var a = e.getResponseHeader("content-type") || "",
                        n = ("xml" === t || !t) && 0 <= a.indexOf("xml"),
                        o = n ? e.responseXML : e.responseText;
                    return n && "parsererror" === o.documentElement.nodeName && q.error && q.error("parsererror"), r && r.dataFilter && (o = r.dataFilter(o, t)), "string" == typeof o && (("json" === t || !t) && 0 <= a.indexOf("json") ? o = L(o) : ("script" === t || !t) && 0 <= a.indexOf("javascript") && q.globalEval(o)), o
                };
            return g
        }
    }, q.fn.ajaxForm = function(e, t, r, a) {
        if (("string" == typeof e || !1 === e && 0 < arguments.length) && (e = {
                url: e,
                data: t,
                dataType: r
            }, "function" == typeof a && (e.success = a)), (e = e || {}).delegation = e.delegation && q.isFunction(q.fn.on), e.delegation || 0 !== this.length) return e.delegation ? (q(document).off("submit.form-plugin", this.selector, o).off("click.form-plugin", this.selector, i).on("submit.form-plugin", this.selector, e, o).on("click.form-plugin", this.selector, e, i), this) : (e.beforeFormUnbind && e.beforeFormUnbind(this, e), this.ajaxFormUnbind().on("submit.form-plugin", e, o).on("click.form-plugin", e, i));
        var n = {
            s: this.selector,
            c: this.context
        };
        return !q.isReady && n.s ? (N("DOM not ready, queuing ajaxForm"), q(function() {
            q(n.s, n.c).ajaxForm(e)
        })) : N("terminating; zero elements found by selector" + (q.isReady ? "" : " (DOM not ready)")), this
    }, q.fn.ajaxFormUnbind = function() {
        return this.off("submit.form-plugin click.form-plugin")
    }, q.fn.formToArray = function(e, t, r) {
        var a = [];
        if (0 === this.length) return a;
        var n, o, i, s, u, c, l, f, d, m, p = this[0],
            h = this.attr("id"),
            v = (v = e || void 0 === p.elements ? p.getElementsByTagName("*") : p.elements) && q.makeArray(v);
        if (h && (e || /(Edge|Trident)\//.test(navigator.userAgent)) && (n = q(':input[form="' + h + '"]').get()).length && (v = (v || []).concat(n)), !v || !v.length) return a;
        for (q.isFunction(r) && (v = q.map(v, r)), o = 0, c = v.length; o < c; o++)
            if ((m = (u = v[o]).name) && !u.disabled)
                if (e && p.clk && "image" === u.type) p.clk === u && (a.push({
                    name: m,
                    value: q(u).val(),
                    type: u.type
                }), a.push({
                    name: m + ".x",
                    value: p.clk_x
                }, {
                    name: m + ".y",
                    value: p.clk_y
                }));
                else if ((s = q.fieldValue(u, !0)) && s.constructor === Array)
            for (t && t.push(u), i = 0, l = s.length; i < l; i++) a.push({
                name: m,
                value: s[i]
            });
        else if (S.fileapi && "file" === u.type) {
            t && t.push(u);
            var g = u.files;
            if (g.length)
                for (i = 0; i < g.length; i++) a.push({
                    name: m,
                    value: g[i],
                    type: u.type
                });
            else a.push({
                name: m,
                value: "",
                type: u.type
            })
        } else null != s && (t && t.push(u), a.push({
            name: m,
            value: s,
            type: u.type,
            required: u.required
        }));
        return e || !p.clk || (m = (d = (f = q(p.clk))[0]).name) && !d.disabled && "image" === d.type && (a.push({
            name: m,
            value: f.val()
        }), a.push({
            name: m + ".x",
            value: p.clk_x
        }, {
            name: m + ".y",
            value: p.clk_y
        })), a
    }, q.fn.formSerialize = function(e) {
        return q.param(this.formToArray(e))
    }, q.fn.fieldSerialize = function(n) {
        var o = [];
        return this.each(function() {
            var e = this.name;
            if (e) {
                var t = q.fieldValue(this, n);
                if (t && t.constructor === Array)
                    for (var r = 0, a = t.length; r < a; r++) o.push({
                        name: e,
                        value: t[r]
                    });
                else null != t && o.push({
                    name: this.name,
                    value: t
                })
            }
        }), q.param(o)
    }, q.fn.fieldValue = function(e) {
        for (var t = [], r = 0, a = this.length; r < a; r++) {
            var n = this[r],
                o = q.fieldValue(n, e);
            null == o || o.constructor === Array && !o.length || (o.constructor === Array ? q.merge(t, o) : t.push(o))
        }
        return t
    }, q.fieldValue = function(e, t) {
        var r = e.name,
            a = e.type,
            n = e.tagName.toLowerCase();
        if (void 0 === t && (t = !0), t && (!r || e.disabled || "reset" === a || "button" === a || ("checkbox" === a || "radio" === a) && !e.checked || ("submit" === a || "image" === a) && e.form && e.form.clk !== e || "select" === n && -1 === e.selectedIndex)) return null;
        if ("select" !== n) return q(e).val().replace(m, "\r\n");
        var o = e.selectedIndex;
        if (o < 0) return null;
        for (var i = [], s = e.options, u = "select-one" === a, c = u ? o + 1 : s.length, l = u ? o : 0; l < c; l++) {
            var f = s[l];
            if (f.selected && !f.disabled) {
                var d = (d = f.value) || (f.attributes && f.attributes.value && !f.attributes.value.specified ? f.text : f.value);
                if (u) return d;
                i.push(d)
            }
        }
        return i
    }, q.fn.clearForm = function(e) {
        return this.each(function() {
            q("input,select,textarea", this).clearFields(e)
        })
    }, q.fn.clearFields = q.fn.clearInputs = function(r) {
        var a = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function() {
            var e = this.type,
                t = this.tagName.toLowerCase();
            a.test(e) || "textarea" === t ? this.value = "" : "checkbox" === e || "radio" === e ? this.checked = !1 : "select" === t ? this.selectedIndex = -1 : "file" === e ? /MSIE/.test(navigator.userAgent) ? q(this).replaceWith(q(this).clone(!0)) : q(this).val("") : r && (!0 === r && /hidden/.test(e) || "string" == typeof r && q(this).is(r)) && (this.value = "")
        })
    }, q.fn.resetForm = function() {
        return this.each(function() {
            var t = q(this),
                e = this.tagName.toLowerCase();
            switch (e) {
                case "input":
                    this.checked = this.defaultChecked;
                case "textarea":
                    return this.value = this.defaultValue, !0;
                case "option":
                case "optgroup":
                    var r = t.parents("select");
                    return r.length && r[0].multiple ? "option" === e ? this.selected = this.defaultSelected : t.find("option").resetForm() : r.resetForm(), !0;
                case "select":
                    return t.find("option").each(function(e) {
                        if (this.selected = this.defaultSelected, this.defaultSelected && !t[0].multiple) return t[0].selectedIndex = e, !1
                    }), !0;
                case "label":
                    var a = q(t.attr("for")),
                        n = t.find("input,select,textarea");
                    return a[0] && n.unshift(a[0]), n.resetForm(), !0;
                case "form":
                    return "function" != typeof this.reset && ("object" != typeof this.reset || this.reset.nodeType) || this.reset(), !0;
                default:
                    return t.find("form,input,label,select,textarea").resetForm(), !0
            }
        })
    }, q.fn.enable = function(e) {
        return void 0 === e && (e = !0), this.each(function() {
            this.disabled = !e
        })
    }, q.fn.selected = function(r) {
        return void 0 === r && (r = !0), this.each(function() {
            var e, t = this.type;
            "checkbox" === t || "radio" === t ? this.checked = r : "option" === this.tagName.toLowerCase() && (e = q(this).parent("select"), r && e[0] && "select-one" === e[0].type && e.find("option").selected(!1), this.selected = r)
        })
    }, q.fn.ajaxSubmit.debug = !1
});

;
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/
(function($, Drupal) {
    Drupal.theme.progressBar = function(id) {
        return "<div id=\"".concat(id, "\" class=\"progress\" aria-live=\"polite\">") + '<div class="progress__label">&nbsp;</div>' + '<div class="progress__track"><div class="progress__bar"></div></div>' + '<div class="progress__percentage"></div>' + '<div class="progress__description">&nbsp;</div>' + '</div>';
    };
    Drupal.ProgressBar = function(id, updateCallback, method, errorCallback) {
        this.id = id;
        this.method = method || 'GET';
        this.updateCallback = updateCallback;
        this.errorCallback = errorCallback;
        this.element = $(Drupal.theme('progressBar', id));
    };
    $.extend(Drupal.ProgressBar.prototype, {
        setProgress: function setProgress(percentage, message, label) {
            if (percentage >= 0 && percentage <= 100) {
                $(this.element).find('div.progress__bar').css('width', "".concat(percentage, "%"));
                $(this.element).find('div.progress__percentage').html("".concat(percentage, "%"));
            }
            $('div.progress__description', this.element).html(message);
            $('div.progress__label', this.element).html(label);
            if (this.updateCallback) {
                this.updateCallback(percentage, message, this);
            }
        },
        startMonitoring: function startMonitoring(uri, delay) {
            this.delay = delay;
            this.uri = uri;
            this.sendPing();
        },
        stopMonitoring: function stopMonitoring() {
            clearTimeout(this.timer);
            this.uri = null;
        },
        sendPing: function sendPing() {
            if (this.timer) {
                clearTimeout(this.timer);
            }
            if (this.uri) {
                var pb = this;
                var uri = this.uri;
                if (uri.indexOf('?') === -1) {
                    uri += '?';
                } else {
                    uri += '&';
                }
                uri += '_format=json';
                $.ajax({
                    type: this.method,
                    url: uri,
                    data: '',
                    dataType: 'json',
                    success: function success(progress) {
                        if (progress.status === 0) {
                            pb.displayError(progress.data);
                            return;
                        }
                        pb.setProgress(progress.percentage, progress.message, progress.label);
                        pb.timer = setTimeout(function() {
                            pb.sendPing();
                        }, pb.delay);
                    },
                    error: function error(xmlhttp) {
                        var e = new Drupal.AjaxError(xmlhttp, pb.uri);
                        pb.displayError("<pre>".concat(e.message, "</pre>"));
                    }
                });
            }
        },
        displayError: function displayError(string) {
            var error = $('<div class="messages messages--error"></div>').html(string);
            $(this.element).before(error).hide();
            if (this.errorCallback) {
                this.errorCallback(this);
            }
        }
    });
})(jQuery, Drupal);;
loadjs = function() {
    var h = function() {},
        c = {},
        u = {},
        f = {};

    function o(e, n) {
        if (e) {
            var r = f[e];
            if (u[e] = n, r)
                for (; r.length;) r[0](e, n), r.splice(0, 1)
        }
    }

    function l(e, n) {
        e.call && (e = {
            success: e
        }), n.length ? (e.error || h)(n) : (e.success || h)(e)
    }

    function d(r, t, s, i) {
        var c, o, e = document,
            n = s.async,
            u = (s.numRetries || 0) + 1,
            f = s.before || h,
            l = r.replace(/[\?|#].*$/, ""),
            a = r.replace(/^(css|img)!/, "");
        i = i || 0, /(^css!|\.css$)/.test(l) ? ((o = e.createElement("link")).rel = "stylesheet", o.href = a, (c = "hideFocus" in o) && o.relList && (c = 0, o.rel = "preload", o.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(l) ? (o = e.createElement("img")).src = a : ((o = e.createElement("script")).src = r, o.async = void 0 === n || n), !(o.onload = o.onerror = o.onbeforeload = function(e) {
            var n = e.type[0];
            if (c) try {
                o.sheet.cssText.length || (n = "e")
            } catch (e) {
                18 != e.code && (n = "e")
            }
            if ("e" == n) {
                if ((i += 1) < u) return d(r, t, s, i)
            } else if ("preload" == o.rel && "style" == o.as) return o.rel = "stylesheet";
            t(r, n, e.defaultPrevented)
        }) !== f(r, o) && e.head.appendChild(o)
    }

    function r(e, n, r) {
        var t, s;
        if (n && n.trim && (t = n), s = (t ? r : n) || {}, t) {
            if (t in c) throw "LoadJS";
            c[t] = !0
        }

        function i(n, r) {
            ! function(e, t, n) {
                var r, s, i = (e = e.push ? e : [e]).length,
                    c = i,
                    o = [];
                for (r = function(e, n, r) {
                        if ("e" == n && o.push(e), "b" == n) {
                            if (!r) return;
                            o.push(e)
                        }--i || t(o)
                    }, s = 0; s < c; s++) d(e[s], r, n)
            }(e, function(e) {
                l(s, e), n && l({
                    success: n,
                    error: r
                }, e), o(t, e)
            }, s)
        }
        if (s.returnPromise) return new Promise(i);
        i()
    }
    return r.ready = function(e, n) {
        return function(e, r) {
            e = e.push ? e : [e];
            var n, t, s, i = [],
                c = e.length,
                o = c;
            for (n = function(e, n) {
                    n.length && i.push(e), --o || r(i)
                }; c--;) t = e[c], (s = u[t]) ? n(t, s) : (f[t] = f[t] || []).push(n)
        }(e, function(e) {
            l(n, e)
        }), r
    }, r.done = function(e) {
        o(e, [])
    }, r.reset = function() {
        c = {}, u = {}, f = {}
    }, r.isDefined = function(e) {
        return e in c
    }, r
}();;
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/
(function(Drupal) {
    Drupal.behaviors.responsiveImageAJAX = {
        attach: function attach() {
            if (window.picturefill) {
                window.picturefill();
            }
        }
    };
})(Drupal);;
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
    }
    return arr2;
}
(function($, window, Drupal, drupalSettings, loadjs, _ref) {
    var isFocusable = _ref.isFocusable,
        tabbable = _ref.tabbable;
    Drupal.behaviors.AJAX = {
        attach: function attach(context, settings) {
            function loadAjaxBehavior(base) {
                var elementSettings = settings.ajax[base];
                if (typeof elementSettings.selector === 'undefined') {
                    elementSettings.selector = "#".concat(base);
                }
                once('drupal-ajax', $(elementSettings.selector)).forEach(function(el) {
                    elementSettings.element = el;
                    elementSettings.base = base;
                    Drupal.ajax(elementSettings);
                });
            }
            Object.keys(settings.ajax || {}).forEach(function(base) {
                return loadAjaxBehavior(base);
            });
            Drupal.ajax.bindAjaxLinks(document.body);
            once('ajax', '.use-ajax-submit').forEach(function(el) {
                var elementSettings = {};
                elementSettings.url = $(el.form).attr('action');
                elementSettings.setClick = true;
                elementSettings.event = 'click';
                elementSettings.progress = {
                    type: 'throbber'
                };
                elementSettings.base = el.id;
                elementSettings.element = el;
                Drupal.ajax(elementSettings);
            });
        },
        detach: function detach(context, settings, trigger) {
            if (trigger === 'unload') {
                Drupal.ajax.expired().forEach(function(instance) {
                    Drupal.ajax.instances[instance.instanceIndex] = null;
                });
            }
        }
    };
    Drupal.AjaxError = function(xmlhttp, uri, customMessage) {
        var statusCode;
        var statusText;
        var responseText;
        if (xmlhttp.status) {
            statusCode = "\n".concat(Drupal.t('An AJAX HTTP error occurred.'), "\n").concat(Drupal.t('HTTP Result Code: !status', {
                '!status': xmlhttp.status
            }));
        } else {
            statusCode = "\n".concat(Drupal.t('An AJAX HTTP request terminated abnormally.'));
        }
        statusCode += "\n".concat(Drupal.t('Debugging information follows.'));
        var pathText = "\n".concat(Drupal.t('Path: !uri', {
            '!uri': uri
        }));
        statusText = '';
        try {
            statusText = "\n".concat(Drupal.t('StatusText: !statusText', {
                '!statusText': xmlhttp.statusText.trim()
            }));
        } catch (e) {}
        responseText = '';
        try {
            responseText = "\n".concat(Drupal.t('ResponseText: !responseText', {
                '!responseText': xmlhttp.responseText.trim()
            }));
        } catch (e) {}
        responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
        responseText = responseText.replace(/[\n]+\s+/g, '\n');
        var readyStateText = xmlhttp.status === 0 ? "\n".concat(Drupal.t('ReadyState: !readyState', {
            '!readyState': xmlhttp.readyState
        })) : '';
        customMessage = customMessage ? "\n".concat(Drupal.t('CustomMessage: !customMessage', {
            '!customMessage': customMessage
        })) : '';
        this.message = statusCode + pathText + statusText + customMessage + responseText + readyStateText;
        this.name = 'AjaxError';
    };
    Drupal.AjaxError.prototype = new Error();
    Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;
    Drupal.ajax = function(settings) {
        if (arguments.length !== 1) {
            throw new Error('Drupal.ajax() function must be called with one configuration object only');
        }
        var base = settings.base || false;
        var element = settings.element || false;
        delete settings.base;
        delete settings.element;
        if (!settings.progress && !element) {
            settings.progress = false;
        }
        var ajax = new Drupal.Ajax(base, element, settings);
        ajax.instanceIndex = Drupal.ajax.instances.length;
        Drupal.ajax.instances.push(ajax);
        return ajax;
    };
    Drupal.ajax.instances = [];
    Drupal.ajax.expired = function() {
        return Drupal.ajax.instances.filter(function(instance) {
            return instance && instance.element !== false && !document.body.contains(instance.element);
        });
    };
    Drupal.ajax.bindAjaxLinks = function(element) {
        once('ajax', '.use-ajax', element).forEach(function(ajaxLink) {
            var $linkElement = $(ajaxLink);
            var elementSettings = {
                progress: {
                    type: 'throbber'
                },
                dialogType: $linkElement.data('dialog-type'),
                dialog: $linkElement.data('dialog-options'),
                dialogRenderer: $linkElement.data('dialog-renderer'),
                base: $linkElement.attr('id'),
                element: ajaxLink
            };
            var href = $linkElement.attr('href');
            if (href) {
                elementSettings.url = href;
                elementSettings.event = 'click';
            }
            Drupal.ajax(elementSettings);
        });
    };
    Drupal.Ajax = function(base, element, elementSettings) {
        var defaults = {
            event: element ? 'mousedown' : null,
            keypress: true,
            selector: base ? "#".concat(base) : null,
            effect: 'none',
            speed: 'none',
            method: 'replaceWith',
            progress: {
                type: 'throbber',
                message: Drupal.t('Please wait...')
            },
            submit: {
                js: true
            }
        };
        $.extend(this, defaults, elementSettings);
        this.commands = new Drupal.AjaxCommands();
        this.instanceIndex = false;
        if (this.wrapper) {
            this.wrapper = "#".concat(this.wrapper);
        }
        this.element = element;
        this.element_settings = elementSettings;
        this.elementSettings = elementSettings;
        if (this.element && this.element.form) {
            this.$form = $(this.element.form);
        }
        if (!this.url) {
            var $element = $(this.element);
            if ($element.is('a')) {
                this.url = $element.attr('href');
            } else if (this.element && element.form) {
                this.url = this.$form.attr('action');
            }
        }
        var originalUrl = this.url;
        this.url = this.url.replace(/\/nojs(\/|$|\?|#)/, '/ajax$1');
        if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
            drupalSettings.ajaxTrustedUrl[this.url] = true;
        }
        var ajax = this;
        ajax.options = {
            url: ajax.url,
            data: ajax.submit,
            isInProgress: function isInProgress() {
                return ajax.ajaxing;
            },
            beforeSerialize: function beforeSerialize(elementSettings, options) {
                return ajax.beforeSerialize(elementSettings, options);
            },
            beforeSubmit: function beforeSubmit(formValues, elementSettings, options) {
                ajax.ajaxing = true;
                return ajax.beforeSubmit(formValues, elementSettings, options);
            },
            beforeSend: function beforeSend(xmlhttprequest, options) {
                ajax.ajaxing = true;
                return ajax.beforeSend(xmlhttprequest, options);
            },
            success: function success(response, status, xmlhttprequest) {
                var _this = this;
                if (typeof response === 'string') {
                    response = $.parseJSON(response);
                }
                if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
                    if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
                        var customMessage = Drupal.t('The response failed verification so will not be processed.');
                        return ajax.error(xmlhttprequest, ajax.url, customMessage);
                    }
                }
                return Promise.resolve(ajax.success(response, status)).then(function() {
                    ajax.ajaxing = false;
                    $(document).trigger('ajaxSuccess', [xmlhttprequest, _this]);
                    $(document).trigger('ajaxComplete', [xmlhttprequest, _this]);
                    if (--$.active === 0) {
                        $(document).trigger('ajaxStop');
                    }
                });
            },
            error: function error(xmlhttprequest, status, _error) {
                ajax.ajaxing = false;
            },
            complete: function complete(xmlhttprequest, status) {
                if (status === 'error' || status === 'parsererror') {
                    return ajax.error(xmlhttprequest, ajax.url);
                }
            },
            dataType: 'json',
            jsonp: false,
            type: 'POST'
        };
        if (elementSettings.dialog) {
            ajax.options.data.dialogOptions = elementSettings.dialog;
        }
        if (ajax.options.url.indexOf('?') === -1) {
            ajax.options.url += '?';
        } else {
            ajax.options.url += '&';
        }
        var wrapper = "drupal_".concat(elementSettings.dialogType || 'ajax');
        if (elementSettings.dialogRenderer) {
            wrapper += ".".concat(elementSettings.dialogRenderer);
        }
        ajax.options.url += "".concat(Drupal.ajax.WRAPPER_FORMAT, "=").concat(wrapper);
        $(ajax.element).on(elementSettings.event, function(event) {
            if (!drupalSettings.ajaxTrustedUrl[ajax.url] && !Drupal.url.isLocal(ajax.url)) {
                throw new Error(Drupal.t('The callback URL is not local and not trusted: !url', {
                    '!url': ajax.url
                }));
            }
            return ajax.eventResponse(this, event);
        });
        if (elementSettings.keypress) {
            $(ajax.element).on('keypress', function(event) {
                return ajax.keypressResponse(this, event);
            });
        }
        if (elementSettings.prevent) {
            $(ajax.element).on(elementSettings.prevent, false);
        }
    };
    Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';
    Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';
    Drupal.Ajax.prototype.execute = function() {
        if (this.ajaxing) {
            return;
        }
        try {
            this.beforeSerialize(this.element, this.options);
            return $.ajax(this.options);
        } catch (e) {
            this.ajaxing = false;
            window.alert("An error occurred while attempting to process ".concat(this.options.url, ": ").concat(e.message));
            return $.Deferred().reject();
        }
    };
    Drupal.Ajax.prototype.keypressResponse = function(element, event) {
        var ajax = this;
        if (event.which === 13 || event.which === 32 && element.type !== 'text' && element.type !== 'textarea' && element.type !== 'tel' && element.type !== 'number') {
            event.preventDefault();
            event.stopPropagation();
            $(element).trigger(ajax.elementSettings.event);
        }
    };
    Drupal.Ajax.prototype.eventResponse = function(element, event) {
        event.preventDefault();
        event.stopPropagation();
        var ajax = this;
        if (ajax.ajaxing) {
            return;
        }
        try {
            if (ajax.$form) {
                if (ajax.setClick) {
                    element.form.clk = element;
                }
                ajax.$form.ajaxSubmit(ajax.options);
            } else {
                ajax.beforeSerialize(ajax.element, ajax.options);
                $.ajax(ajax.options);
            }
        } catch (e) {
            ajax.ajaxing = false;
            window.alert("An error occurred while attempting to process ".concat(ajax.options.url, ": ").concat(e.message));
        }
    };
    Drupal.Ajax.prototype.beforeSerialize = function(element, options) {
        if (this.$form && document.body.contains(this.$form.get(0))) {
            var settings = this.settings || drupalSettings;
            Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
        }
        options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;
        var pageState = drupalSettings.ajaxPageState;
        options.data['ajax_page_state[theme]'] = pageState.theme;
        options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
        options.data['ajax_page_state[libraries]'] = pageState.libraries;
    };
    Drupal.Ajax.prototype.beforeSubmit = function(formValues, element, options) {};
    Drupal.Ajax.prototype.beforeSend = function(xmlhttprequest, options) {
        if (this.$form) {
            options.extraData = options.extraData || {};
            options.extraData.ajax_iframe_upload = '1';
            var v = $.fieldValue(this.element);
            if (v !== null) {
                options.extraData[this.element.name] = v;
            }
        }
        $(this.element).prop('disabled', true);
        if (!this.progress || !this.progress.type) {
            return;
        }
        var progressIndicatorMethod = "setProgressIndicator".concat(this.progress.type.slice(0, 1).toUpperCase()).concat(this.progress.type.slice(1).toLowerCase());
        if (progressIndicatorMethod in this && typeof this[progressIndicatorMethod] === 'function') {
            this[progressIndicatorMethod].call(this);
        }
    };
    Drupal.theme.ajaxProgressThrobber = function(message) {
        var messageMarkup = typeof message === 'string' ? Drupal.theme('ajaxProgressMessage', message) : '';
        var throbber = '<div class="throbber">&nbsp;</div>';
        return "<div class=\"ajax-progress ajax-progress-throbber\">".concat(throbber).concat(messageMarkup, "</div>");
    };
    Drupal.theme.ajaxProgressIndicatorFullscreen = function() {
        return '<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';
    };
    Drupal.theme.ajaxProgressMessage = function(message) {
        return "<div class=\"message\">".concat(message, "</div>");
    };
    Drupal.theme.ajaxProgressBar = function($element) {
        return $('<div class="ajax-progress ajax-progress-bar"></div>').append($element);
    };
    Drupal.Ajax.prototype.setProgressIndicatorBar = function() {
        var progressBar = new Drupal.ProgressBar("ajax-progress-".concat(this.element.id), $.noop, this.progress.method, $.noop);
        if (this.progress.message) {
            progressBar.setProgress(-1, this.progress.message);
        }
        if (this.progress.url) {
            progressBar.startMonitoring(this.progress.url, this.progress.interval || 1500);
        }
        this.progress.element = $(Drupal.theme('ajaxProgressBar', progressBar.element));
        this.progress.object = progressBar;
        $(this.element).after(this.progress.element);
    };
    Drupal.Ajax.prototype.setProgressIndicatorThrobber = function() {
        this.progress.element = $(Drupal.theme('ajaxProgressThrobber', this.progress.message));
        $(this.element).after(this.progress.element);
    };
    Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function() {
        this.progress.element = $(Drupal.theme('ajaxProgressIndicatorFullscreen'));
        $('body').append(this.progress.element);
    };
    Drupal.Ajax.prototype.commandExecutionQueue = function(response, status) {
        var _this2 = this;
        var ajaxCommands = this.commands;
        return Object.keys(response || {}).reduce(function(executionQueue, key) {
            return executionQueue.then(function() {
                var command = response[key].command;
                if (command && ajaxCommands[command]) {
                    return ajaxCommands[command](_this2, response[key], status);
                }
            });
        }, Promise.resolve());
    };
    Drupal.Ajax.prototype.success = function(response, status) {
        var _this3 = this;
        if (this.progress.element) {
            $(this.progress.element).remove();
        }
        if (this.progress.object) {
            this.progress.object.stopMonitoring();
        }
        $(this.element).prop('disabled', false);
        var elementParents = $(this.element).parents('[data-drupal-selector]').addBack().toArray();
        var focusChanged = Object.keys(response || {}).some(function(key) {
            var _response$key = response[key],
                command = _response$key.command,
                method = _response$key.method;
            return command === 'focusFirst' || command === 'invoke' && method === 'focus';
        });
        return this.commandExecutionQueue(response, status).then(function() {
            if (!focusChanged && _this3.element && !$(_this3.element).data('disable-refocus')) {
                var target = false;
                for (var n = elementParents.length - 1; !target && n >= 0; n--) {
                    target = document.querySelector("[data-drupal-selector=\"".concat(elementParents[n].getAttribute('data-drupal-selector'), "\"]"));
                }
                if (target) {
                    $(target).trigger('focus');
                }
            }
            if (_this3.$form && document.body.contains(_this3.$form.get(0))) {
                var settings = _this3.settings || drupalSettings;
                Drupal.attachBehaviors(_this3.$form.get(0), settings);
            }
            _this3.settings = null;
        }).catch(function(error) {
            return console.error(Drupal.t('An error occurred during the execution of the Ajax response: !error', {
                '!error': error
            }));
        });
    };
    Drupal.Ajax.prototype.getEffect = function(response) {
        var type = response.effect || this.effect;
        var speed = response.speed || this.speed;
        var effect = {};
        if (type === 'none') {
            effect.showEffect = 'show';
            effect.hideEffect = 'hide';
            effect.showSpeed = '';
        } else if (type === 'fade') {
            effect.showEffect = 'fadeIn';
            effect.hideEffect = 'fadeOut';
            effect.showSpeed = speed;
        } else {
            effect.showEffect = "".concat(type, "Toggle");
            effect.hideEffect = "".concat(type, "Toggle");
            effect.showSpeed = speed;
        }
        return effect;
    };
    Drupal.Ajax.prototype.error = function(xmlhttprequest, uri, customMessage) {
        if (this.progress.element) {
            $(this.progress.element).remove();
        }
        if (this.progress.object) {
            this.progress.object.stopMonitoring();
        }
        $(this.wrapper).show();
        $(this.element).prop('disabled', false);
        if (this.$form && document.body.contains(this.$form.get(0))) {
            var settings = this.settings || drupalSettings;
            Drupal.attachBehaviors(this.$form.get(0), settings);
        }
        throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
    };
    Drupal.theme.ajaxWrapperNewContent = function($newContent, ajax, response) {
        return (response.effect || ajax.effect) !== 'none' && $newContent.filter(function(i) {
            return !($newContent[i].nodeName === '#comment' || $newContent[i].nodeName === '#text' && /^(\s|\n|\r)*$/.test($newContent[i].textContent));
        }).length > 1 ? Drupal.theme('ajaxWrapperMultipleRootElements', $newContent) : $newContent;
    };
    Drupal.theme.ajaxWrapperMultipleRootElements = function($elements) {
        return $('<div></div>').append($elements);
    };
    Drupal.AjaxCommands = function() {};
    Drupal.AjaxCommands.prototype = {
        insert: function insert(ajax, response) {
            var $wrapper = response.selector ? $(response.selector) : $(ajax.wrapper);
            var method = response.method || ajax.method;
            var effect = ajax.getEffect(response);
            var settings = response.settings || ajax.settings || drupalSettings;
            var $newContent = $($.parseHTML(response.data, document, true));
            $newContent = Drupal.theme('ajaxWrapperNewContent', $newContent, ajax, response);
            switch (method) {
                case 'html':
                case 'replaceWith':
                case 'replaceAll':
                case 'empty':
                case 'remove':
                    Drupal.detachBehaviors($wrapper.get(0), settings);
                    break;
                default:
                    break;
            }
            $wrapper[method]($newContent);
            if (effect.showEffect !== 'show') {
                $newContent.hide();
            }
            var $ajaxNewContent = $newContent.find('.ajax-new-content');
            if ($ajaxNewContent.length) {
                $ajaxNewContent.hide();
                $newContent.show();
                $ajaxNewContent[effect.showEffect](effect.showSpeed);
            } else if (effect.showEffect !== 'show') {
                $newContent[effect.showEffect](effect.showSpeed);
            }
            if ($newContent.parents('html').length) {
                $newContent.each(function(index, element) {
                    if (element.nodeType === Node.ELEMENT_NODE) {
                        Drupal.attachBehaviors(element, settings);
                    }
                });
            }
        },
        remove: function remove(ajax, response, status) {
            var settings = response.settings || ajax.settings || drupalSettings;
            $(response.selector).each(function() {
                Drupal.detachBehaviors(this, settings);
            }).remove();
        },
        changed: function changed(ajax, response, status) {
            var $element = $(response.selector);
            if (!$element.hasClass('ajax-changed')) {
                $element.addClass('ajax-changed');
                if (response.asterisk) {
                    $element.find(response.asterisk).append(" <abbr class=\"ajax-changed\" title=\"".concat(Drupal.t('Changed'), "\">*</abbr> "));
                }
            }
        },
        alert: function alert(ajax, response, status) {
            window.alert(response.text);
        },
        announce: function announce(ajax, response) {
            if (response.priority) {
                Drupal.announce(response.text, response.priority);
            } else {
                Drupal.announce(response.text);
            }
        },
        redirect: function redirect(ajax, response, status) {
            window.location = response.url;
        },
        css: function css(ajax, response, status) {
            $(response.selector).css(response.argument);
        },
        settings: function settings(ajax, response, status) {
            var ajaxSettings = drupalSettings.ajax;
            if (ajaxSettings) {
                Drupal.ajax.expired().forEach(function(instance) {
                    if (instance.selector) {
                        var selector = instance.selector.replace('#', '');
                        if (selector in ajaxSettings) {
                            delete ajaxSettings[selector];
                        }
                    }
                });
            }
            if (response.merge) {
                $.extend(true, drupalSettings, response.settings);
            } else {
                ajax.settings = response.settings;
            }
        },
        data: function data(ajax, response, status) {
            $(response.selector).data(response.name, response.value);
        },
        focusFirst: function focusFirst(ajax, response, status) {
            var focusChanged = false;
            var container = document.querySelector(response.selector);
            if (container) {
                var tabbableElements = tabbable(container);
                if (tabbableElements.length) {
                    tabbableElements[0].focus();
                    focusChanged = true;
                } else if (isFocusable(container)) {
                    container.focus();
                    focusChanged = true;
                }
            }
            if (ajax.hasOwnProperty('element') && !focusChanged) {
                ajax.element.focus();
            }
        },
        invoke: function invoke(ajax, response, status) {
            var $element = $(response.selector);
            $element[response.method].apply($element, _toConsumableArray(response.args));
        },
        restripe: function restripe(ajax, response, status) {
            $(response.selector).find('> tbody > tr:visible, > tr:visible').removeClass('odd even').filter(':even').addClass('odd').end().filter(':odd').addClass('even');
        },
        update_build_id: function update_build_id(ajax, response, status) {
            document.querySelectorAll("input[name=\"form_build_id\"][value=\"".concat(response.old, "\"]")).forEach(function(item) {
                item.value = response.new;
            });
        },
        add_css: function add_css(ajax, response, status) {
            $('head').prepend(response.data);
        },
        message: function message(ajax, response) {
            var messages = new Drupal.Message(document.querySelector(response.messageWrapperQuerySelector));
            if (response.clearPrevious) {
                messages.clear();
            }
            messages.add(response.message, response.messageOptions);
        },
        add_js: function add_js(ajax, response, status) {
            var parentEl = document.querySelector(response.selector || 'body');
            var settings = ajax.settings || drupalSettings;
            var allUniqueBundleIds = response.data.map(function(script) {
                var uniqueBundleId = script.src + ajax.instanceIndex;
                loadjs(script.src, uniqueBundleId, {
                    async: false,
                    before: function before(path, scriptEl) {
                        Object.keys(script).forEach(function(attributeKey) {
                            scriptEl.setAttribute(attributeKey, script[attributeKey]);
                        });
                        parentEl.appendChild(scriptEl);
                        return false;
                    }
                });
                return uniqueBundleId;
            });
            return new Promise(function(resolve, reject) {
                loadjs.ready(allUniqueBundleIds, {
                    success: function success() {
                        Drupal.attachBehaviors(parentEl, settings);
                        resolve();
                    },
                    error: function error(depsNotFound) {
                        var message = Drupal.t("The following files could not be loaded: @dependencies", {
                            '@dependencies': depsNotFound.join(', ')
                        });
                        reject(message);
                    }
                });
            });
        }
    };
    var stopEvent = function stopEvent(xhr, settings) {
        return xhr.getResponseHeader('X-Drupal-Ajax-Token') === '1' && settings.isInProgress && settings.isInProgress();
    };
    $.extend(true, $.event.special, {
        ajaxSuccess: {
            trigger: function trigger(event, xhr, settings) {
                if (stopEvent(xhr, settings)) {
                    return false;
                }
            }
        },
        ajaxComplete: {
            trigger: function trigger(event, xhr, settings) {
                if (stopEvent(xhr, settings)) {
                    $.active++;
                    return false;
                }
            }
        }
    });
})(jQuery, window, Drupal, drupalSettings, loadjs, window.tabbable);;
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/
(function(Drupal) {
    Drupal.theme.ajaxProgressBar = function($element) {
        return $element.addClass('ajax-progress ajax-progress-bar');
    };
})(Drupal);;
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/
(function($, Drupal, drupalSettings) {
    Drupal.Views = {};
    Drupal.Views.parseQueryString = function(query) {
        var args = {};
        var pos = query.indexOf('?');
        if (pos !== -1) {
            query = query.substring(pos + 1);
        }
        var pair;
        var pairs = query.split('&');
        for (var i = 0; i < pairs.length; i++) {
            pair = pairs[i].split('=');
            if (pair[0] !== 'q' && pair[1]) {
                args[decodeURIComponent(pair[0].replace(/\+/g, ' '))] = decodeURIComponent(pair[1].replace(/\+/g, ' '));
            }
        }
        return args;
    };
    Drupal.Views.parseViewArgs = function(href, viewPath) {
        var returnObj = {};
        var path = Drupal.Views.getPath(href);
        var viewHref = Drupal.url(viewPath).substring(drupalSettings.path.baseUrl.length);
        if (viewHref && path.substring(0, viewHref.length + 1) === "".concat(viewHref, "/")) {
            returnObj.view_args = decodeURIComponent(path.substring(viewHref.length + 1, path.length));
            returnObj.view_path = path;
        }
        return returnObj;
    };
    Drupal.Views.pathPortion = function(href) {
        var protocol = window.location.protocol;
        if (href.substring(0, protocol.length) === protocol) {
            href = href.substring(href.indexOf('/', protocol.length + 2));
        }
        return href;
    };
    Drupal.Views.getPath = function(href) {
        href = Drupal.Views.pathPortion(href);
        href = href.substring(drupalSettings.path.baseUrl.length, href.length);
        if (href.substring(0, 3) === '?q=') {
            href = href.substring(3, href.length);
        }
        var chars = ['#', '?', '&'];
        for (var i = 0; i < chars.length; i++) {
            if (href.indexOf(chars[i]) > -1) {
                href = href.substr(0, href.indexOf(chars[i]));
            }
        }
        return href;
    };
})(jQuery, Drupal, drupalSettings);;
/**
 * DO NOT EDIT THIS FILE.
 * See the following change record for more information,
 * https://www.drupal.org/node/2815083
 * @preserve
 **/
(function($, Drupal, drupalSettings) {
    Drupal.behaviors.ViewsAjaxView = {};
    Drupal.behaviors.ViewsAjaxView.attach = function(context, settings) {
        if (settings && settings.views && settings.views.ajaxViews) {
            var ajaxViews = settings.views.ajaxViews;
            Object.keys(ajaxViews || {}).forEach(function(i) {
                Drupal.views.instances[i] = new Drupal.views.ajaxView(ajaxViews[i]);
            });
        }
    };
    Drupal.behaviors.ViewsAjaxView.detach = function(context, settings, trigger) {
        if (trigger === 'unload') {
            if (settings && settings.views && settings.views.ajaxViews) {
                var ajaxViews = settings.views.ajaxViews;
                Object.keys(ajaxViews || {}).forEach(function(i) {
                    var selector = ".js-view-dom-id-".concat(ajaxViews[i].view_dom_id);
                    if ($(selector, context).length) {
                        delete Drupal.views.instances[i];
                        delete settings.views.ajaxViews[i];
                    }
                });
            }
        }
    };
    Drupal.views = {};
    Drupal.views.instances = {};
    Drupal.views.ajaxView = function(settings) {
        var selector = ".js-view-dom-id-".concat(settings.view_dom_id);
        this.$view = $(selector);
        var ajaxPath = drupalSettings.views.ajax_path;
        if (ajaxPath.constructor.toString().indexOf('Array') !== -1) {
            ajaxPath = ajaxPath[0];
        }
        var queryString = window.location.search || '';
        if (queryString !== '') {
            queryString = queryString.slice(1).replace(/q=[^&]+&?|&?render=[^&]+/, '');
            if (queryString !== '') {
                queryString = (/\?/.test(ajaxPath) ? '&' : '?') + queryString;
            }
        }
        this.element_settings = {
            url: ajaxPath + queryString,
            submit: settings,
            setClick: true,
            event: 'click',
            selector: selector,
            progress: {
                type: 'fullscreen'
            }
        };
        this.settings = settings;
        this.$exposed_form = $("form#views-exposed-form-".concat(settings.view_name.replace(/_/g, '-'), "-").concat(settings.view_display_id.replace(/_/g, '-')));
        once('exposed-form', this.$exposed_form).forEach($.proxy(this.attachExposedFormAjax, this));
        once('ajax-pager', this.$view.filter($.proxy(this.filterNestedViews, this))).forEach($.proxy(this.attachPagerAjax, this));
        var selfSettings = $.extend({}, this.element_settings, {
            event: 'RefreshView',
            base: this.selector,
            element: this.$view.get(0)
        });
        this.refreshViewAjax = Drupal.ajax(selfSettings);
    };
    Drupal.views.ajaxView.prototype.attachExposedFormAjax = function() {
        var that = this;
        this.exposedFormAjax = [];
        $('input[type=submit], button[type=submit], input[type=image]', this.$exposed_form).not('[data-drupal-selector=edit-reset]').each(function(index) {
            var selfSettings = $.extend({}, that.element_settings, {
                base: $(this).attr('id'),
                element: this
            });
            that.exposedFormAjax[index] = Drupal.ajax(selfSettings);
        });
    };
    Drupal.views.ajaxView.prototype.filterNestedViews = function() {
        return !this.$view.parents('.view').length;
    };
    Drupal.views.ajaxView.prototype.attachPagerAjax = function() {
        this.$view.find('ul.js-pager__items > li > a, th.views-field a, .attachment .views-summary a').each($.proxy(this.attachPagerLinkAjax, this));
    };
    Drupal.views.ajaxView.prototype.attachPagerLinkAjax = function(id, link) {
        var $link = $(link);
        var viewData = {};
        var href = $link.attr('href');
        $.extend(viewData, this.settings, Drupal.Views.parseQueryString(href), Drupal.Views.parseViewArgs(href, this.settings.view_base_path));
        var selfSettings = $.extend({}, this.element_settings, {
            submit: viewData,
            base: false,
            element: link
        });
        this.pagerAjax = Drupal.ajax(selfSettings);
    };
    Drupal.AjaxCommands.prototype.viewsScrollTop = function(ajax, response) {
        var offset = $(response.selector).offset();
        var scrollTarget = response.selector;
        while ($(scrollTarget).scrollTop() === 0 && $(scrollTarget).parent()) {
            scrollTarget = $(scrollTarget).parent();
        }
        if (offset.top - 10 < $(scrollTarget).scrollTop()) {
            $(scrollTarget).animate({
                scrollTop: offset.top - 10
            }, 500);
        }
    };
})(jQuery, Drupal, drupalSettings);;