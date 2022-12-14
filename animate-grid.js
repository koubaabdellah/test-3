! function(t, r) {
	"object" == typeof exports && "object" == typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define([], r) : "object" == typeof exports ? exports.animateCSSGrid = r() : t.animateCSSGrid = r()
}(window, function() {
	return function(t) {
		var r = {};

		function e(n) {
			if (r[n]) return r[n].exports;
			var o = r[n] = {
				i: n,
				l: !1,
				exports: {}
			};
			return t[n].call(o.exports, o, o.exports, e), o.l = !0, o.exports
		}
		return e.m = t, e.c = r, e.d = function(t, r, n) {
			e.o(t, r) || Object.defineProperty(t, r, {
				configurable: !1,
				enumerable: !0,
				get: n
			})
		}, e.r = function(t) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			})
		}, e.n = function(t) {
			var r = t && t.__esModule ? function() {
				return t.default
			} : function() {
				return t
			};
			return e.d(r, "a", r), r
		}, e.o = function(t, r) {
			return Object.prototype.hasOwnProperty.call(t, r)
		}, e.p = "", e(e.s = 18)
	}([function(t, r, e) {
		"use strict";
		e.r(r), e.d(r, "getValueFromFunctionString", function() {
			return a
		}), e.d(r, "splitCommaDelimited", function() {
			return c
		}), e.d(r, "splitColorValues", function() {
			return f
		}), e.d(r, "number", function() {
			return s
		}), e.d(r, "alpha", function() {
			return l
		}), e.d(r, "degrees", function() {
			return d
		}), e.d(r, "percent", function() {
			return p
		}), e.d(r, "px", function() {
			return v
		}), e.d(r, "scale", function() {
			return h
		}), e.d(r, "complex", function() {
			return y
		}), e.d(r, "rgbUnit", function() {
			return O
		}), e.d(r, "rgba", function() {
			return w
		}), e.d(r, "hsla", function() {
			return x
		}), e.d(r, "hex", function() {
			return M
		}), e.d(r, "color", function() {
			return P
		});
		var n = Object.assign || function(t) {
				for (var r, e = 1, n = arguments.length; e < n; e++)
					for (var o in r = arguments[e]) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
				return t
			},
			o = function(t, r) {
				return function(e) {
					return Math.max(Math.min(e, r), t)
				}
			},
			i = function(t) {
				return {
					test: (r = t, function(t) {
						return "string" == typeof t && -1 !== t.indexOf(r)
					}),
					parse: parseFloat,
					transform: function(r) {
						return "" + r + t
					}
				};
				var r
			},
			u = function(t) {
				return function(r) {
					return "string" == typeof r && 0 === r.indexOf(t)
				}
			},
			a = function(t) {
				return t.substring(t.indexOf("(") + 1, t.lastIndexOf(")"))
			},
			c = function(t) {
				return "string" == typeof t ? t.split(/,\s*/) : [t]
			};

		function f(t) {
			var r = t.length;
			return function(e) {
				for (var n = {}, o = c(a(e)), i = 0; i < r; i++) n[t[i]] = void 0 !== o[i] ? parseFloat(o[i]) : 1;
				return n
			}
		}
		var s = {
				test: function(t) {
					return "number" == typeof t
				},
				parse: parseFloat,
				transform: function(t) {
					return t
				}
			},
			l = n({}, s, {
				transform: o(0, 1)
			}),
			d = i("deg"),
			p = i("%"),
			v = i("px"),
			h = n({}, s, {
				default: 1
			}),
			g = /(-)?(\d[\d\.]*)/g,
			m = function(t) {
				return "${" + t + "}"
			},
			y = {
				test: function(t) {
					var r = t.match && t.match(g);
					return void 0 !== r && r.constructor === Array && r.length > 1
				},
				parse: function(t) {
					var r = {};
					return t.match(g).forEach(function(t, e) {
						return r[e] = parseFloat(t)
					}), r
				},
				createTransformer: function(t) {
					var r = 0,
						e = t.replace(g, function() {
							return m("" + r++)
						});
					return function(t) {
						var r = e;
						for (var n in t) t.hasOwnProperty(n) && (r = r.replace(m(n), t[n].toString()));
						return r
					}
				}
			},
			b = o(0, 255),
			O = n({}, s, {
				transform: function(t) {
					return Math.round(b(t))
				}
			}),
			w = {
				test: u("rgb"),
				parse: f(["red", "green", "blue", "alpha"]),
				transform: function(t) {
					var r = t.red,
						e = t.green,
						n = t.blue,
						o = t.alpha;
					return function(t) {
						var r = t.red,
							e = t.green,
							n = t.blue,
							o = t.alpha;
						return "rgba(" + r + ", " + e + ", " + n + ", " + (void 0 === o ? 1 : o) + ")"
					}({
						red: O.transform(r),
						green: O.transform(e),
						blue: O.transform(n),
						alpha: o
					})
				}
			},
			x = {
				test: u("hsl"),
				parse: f(["hue", "saturation", "lightness", "alpha"]),
				transform: function(t) {
					var r = t.hue,
						e = t.saturation,
						n = t.lightness,
						o = t.alpha;
					return function(t) {
						var r = t.hue,
							e = t.saturation,
							n = t.lightness,
							o = t.alpha;
						return "hsla(" + r + ", " + e + ", " + n + ", " + (void 0 === o ? 1 : o) + ")"
					}({
						hue: Math.round(r),
						saturation: p.transform(e),
						lightness: p.transform(n),
						alpha: o
					})
				}
			},
			M = n({}, w, {
				test: u("#"),
				parse: function(t) {
					var r, e, n;
					return t.length > 4 ? (r = t.substr(1, 2), e = t.substr(3, 2), n = t.substr(5, 2)) : (r = t.substr(1, 1), e = t.substr(2, 1), n = t.substr(3, 1), r += r, e += e, n += n), {
						red: parseInt(r, 16),
						green: parseInt(e, 16),
						blue: parseInt(n, 16),
						alpha: 1
					}
				}
			}),
			P = {
				test: function(t) {
					return w.test(t) || x.test(t) || M.test(t)
				},
				parse: function(t) {
					return w.test(t) ? w.parse(t) : x.test(t) ? x.parse(t) : M.test(t) ? M.parse(t) : t
				},
				transform: function(t) {
					return function(t) {
						return void 0 !== t.red
					}(t) ? w.transform(t) : function(t) {
						return void 0 !== t.hue
					}(t) ? x.transform(t) : t
				}
			}
	}, function(t, r, e) {
		"use strict";
		e.r(r), e.d(r, "currentTime", function() {
			return u
		}), e.d(r, "onFrameStart", function() {
			return b
		}), e.d(r, "onFrameUpdate", function() {
			return O
		}), e.d(r, "onFrameRender", function() {
			return w
		}), e.d(r, "onFrameEnd", function() {
			return x
		}), e.d(r, "cancelOnFrameStart", function() {
			return M
		}), e.d(r, "cancelOnFrameUpdate", function() {
			return P
		}), e.d(r, "cancelOnFrameRender", function() {
			return j
		}), e.d(r, "cancelOnFrameEnd", function() {
			return _
		}), e.d(r, "timeSinceLastFrame", function() {
			return F
		}), e.d(r, "currentFrameTime", function() {
			return A
		});
		var n = 0,
			o = "undefined" != typeof window && void 0 !== window.requestAnimationFrame ? function(t) {
				return window.requestAnimationFrame(t)
			} : function(t) {
				var r = Date.now(),
					e = Math.max(0, 16.7 - (r - n));
				n = r + e, setTimeout(function() {
					return t(n)
				}, e)
			};

		function i(t) {
			var r = [],
				e = [],
				n = 0,
				o = !1,
				i = 0;
			return {
				cancel: function(t) {
					var r = e.indexOf(t); - 1 !== r && e.splice(r, 1)
				},
				process: function() {
					for (o = !0, r = (t = [e, r])[0], (e = t[1]).length = 0, n = r.length, i = 0; i < n; i++) r[i]();
					var t;
					o = !1
				},
				schedule: function(i, u) {
					void 0 === u && (u = !1), t();
					var a = u && o,
						c = a ? r : e; - 1 === c.indexOf(i) && (c.push(i), a && (n = r.length))
				}
			}
		}
		var u = "undefined" != typeof performance && void 0 !== performance.now ? function() {
				return performance.now()
			} : function() {
				return Date.now()
			},
			a = !1,
			c = 40,
			f = 16.7,
			s = !0,
			l = 0,
			d = 0;

		function p() {
			a || (a = !0, s = !0, o(y))
		}
		var v = i(p),
			h = i(p),
			g = i(p),
			m = i(p);

		function y(t) {
			a = !1, d = s ? f : Math.max(Math.min(t - l, c), 1), s || (f = d), l = t, v.process(), h.process(), g.process(), m.process(), a && (s = !1)
		}
		var b = v.schedule,
			O = h.schedule,
			w = g.schedule,
			x = m.schedule,
			M = v.cancel,
			P = h.cancel,
			j = g.cancel,
			_ = m.cancel,
			F = function() {
				return d
			},
			A = function() {
				return l
			}
	}, function(t, r, e) {
		"use strict";
		var n, o = this && this.__extends || (n = Object.setPrototypeOf || {
					__proto__: []
				}
				instanceof Array && function(t, r) {
					t.__proto__ = r
				} || function(t, r) {
					for (var e in r) r.hasOwnProperty(e) && (t[e] = r[e])
				},
				function(t, r) {
					function e() {
						this.constructor = t
					}
					n(t, r), t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e)
				}),
			i = this && this.__assign || Object.assign || function(t) {
				for (var r, e = 1, n = arguments.length; e < n; e++)
					for (var o in r = arguments[e]) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
				return t
			},
			u = this && this.__rest || function(t, r) {
				var e = {};
				for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && r.indexOf(n) < 0 && (e[n] = t[n]);
				if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(t); o < n.length; o++) r.indexOf(n[o]) < 0 && (e[n[o]] = t[n[o]])
				}
				return e
			};
		Object.defineProperty(r, "__esModule", {
			value: !0
		});
		var a = e(14),
			c = e(13),
			f = function(t) {
				function r() {
					return null !== t && t.apply(this, arguments) || this
				}
				return o(r, t), r.prototype.create = function(t) {
					return new r(t)
				}, r.prototype.start = function(t) {
					void 0 === t && (t = {});
					var r = !1,
						e = {
							stop: function() {}
						},
						n = this.props,
						o = n.init,
						a = u(n, ["init"]),
						f = o(c.default(t, a, function() {
							r = !0, e.stop()
						}));
					return e = f ? i({}, e, f) : e, t.registerParent && t.registerParent(e), r && e.stop(), e
				}, r
			}(a.default);
		r.Action = f, r.default = function(t) {
			return new f({
				init: t
			})
		}
	}, function(t, r, e) {
		"use strict";
		Object.defineProperty(r, "__esModule", {
			value: !0
		});
		r.createReversedEasing = function(t) {
			return function(r) {
				return 1 - t(1 - r)
			}
		}, r.createMirroredEasing = function(t) {
			return function(r) {
				return r <= .5 ? t(2 * r) / 2 : (2 - t(2 * (1 - r))) / 2
			}
		}, r.linear = function(t) {
			return t
		}, r.createExpoIn = function(t) {
			return function(r) {
				return Math.pow(r, t)
			}
		}, r.easeIn = r.createExpoIn(2), r.easeOut = r.createReversedEasing(r.easeIn), r.easeInOut = r.createMirroredEasing(r.easeIn), r.circIn = function(t) {
			return 1 - Math.sin(Math.acos(t))
		}, r.circOut = r.createReversedEasing(r.circIn), r.circInOut = r.createMirroredEasing(r.circOut), r.createBackIn = function(t) {
			return function(r) {
				return r * r * ((t + 1) * r - t)
			}
		}, r.backIn = r.createBackIn(1.525), r.backOut = r.createReversedEasing(r.backIn), r.backInOut = r.createMirroredEasing(r.backIn), r.createAnticipateEasing = function(t) {
			var e = r.createBackIn(t);
			return function(t) {
				return (t *= 2) < 1 ? .5 * e(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
			}
		}, r.anticipate = r.createAnticipateEasing(1.525);
		var n = 8,
			o = .001,
			i = 1e-7,
			u = 10,
			a = 11,
			c = 1 / (a - 1),
			f = "undefined" != typeof Float32Array,
			s = function(t, r) {
				return 1 - 3 * r + 3 * t
			},
			l = function(t, r) {
				return 3 * r - 6 * t
			},
			d = function(t) {
				return 3 * t
			},
			p = function(t, r, e) {
				return 3 * s(r, e) * t * t + 2 * l(r, e) * t + d(r)
			},
			v = function(t, r, e) {
				return ((s(r, e) * t + l(r, e)) * t + d(r)) * t
			};
		r.cubicBezier = function(t, r, e, s) {
			var l = f ? new Float32Array(a) : new Array(a),
				d = !1,
				h = function(r) {
					for (var f, s, d, h = 0, g = 1, m = a - 1; g != m && l[g] <= r; ++g) h += c;
					return f = (r - l[--g]) / (l[g + 1] - l[g]), (d = p(s = h + f * c, t, e)) >= o ? function(r, o) {
						for (var i = 0, u = 0; i < n; ++i) {
							if (0 === (u = p(o, t, e))) return o;
							o -= (v(o, t, e) - r) / u
						}
						return o
					}(r, s) : 0 === d ? s : function(r, n, o) {
						var a, c, f = 0;
						do {
							(a = v(c = n + (o - n) / 2, t, e) - r) > 0 ? o = c : n = c
						} while (Math.abs(a) > i && ++f < u);
						return c
					}(r, h, h + c)
				},
				g = function() {
					d = !0, t == r && e == s || function() {
						for (var r = 0; r < a; ++r) l[r] = v(r * c, t, e)
					}()
				};
			return function(n) {
				return d || g(), t === r && e === s ? n : 0 === n ? 0 : 1 === n ? 1 : v(h(n), r, s)
			}
		}
	}, function(t, r, e) {
		"use strict";
		Object.defineProperty(r, "__esModule", {
			value: !0
		});
		var n = function(t) {
			return "number" == typeof t
		};
		r.isPoint = function(t) {
			return void 0 !== t.x && void 0 !== t.y
		}, r.isPoint3D = function(t) {
			return void 0 !== t.z
		};
		var o = {
				x: 0,
				y: 0,
				z: 0
			},
			i = function(t, r) {
				return Math.abs(t - r)
			};
		r.angle = function(t, e) {
			return void 0 === e && (e = o), r.radiansToDegrees(Math.atan2(e.y - t.y, e.x - t.x))
		}, r.degreesToRadians = function(t) {
			return t * Math.PI / 180
		}, r.dilate = function(t, r, e) {
			return t + (r - t) * e
		}, r.distance = function(t, e) {
			if (void 0 === e && (e = o), n(t) && n(e)) return i(t, e);
			if (r.isPoint(t) && r.isPoint(e)) {
				var u = i(t.x, e.x),
					a = i(t.y, e.y),
					c = r.isPoint3D(t) && r.isPoint3D(e) ? i(t.z, e.z) : 0;
				return Math.sqrt(Math.pow(u, 2) + Math.pow(a, 2) + Math.pow(c, 2))
			}
			return 0
		}, r.getProgressFromValue = function(t, r, e) {
			var n = r - t;
			return 0 === n ? 1 : (e - t) / n
		}, r.getValueFromProgress = function(t, r, e) {
			return -e * t + e * r + t
		}, r.pointFromAngleAndDistance = function(t, e, n) {
			return e = r.degreesToRadians(e), {
				x: n * Math.cos(e) + t.x,
				y: n * Math.sin(e) + t.y
			}
		}, r.radiansToDegrees = function(t) {
			return 180 * t / Math.PI
		}, r.smooth = function(t, r, e, n) {
			return void 0 === n && (n = 0), o = r + e * (t - r) / Math.max(n, e), void 0 === i && (i = 2), i = Math.pow(10, i), Math.round(o * i) / i;
			var o, i
		}, r.speedPerFrame = function(t, r) {
			return n(t) ? t / (1e3 / r) : 0
		}, r.speedPerSecond = function(t, r) {
			return r ? t * (1e3 / r) : 0
		}, r.stepProgress = function(t, r) {
			var e = 1 / (t - 1),
				n = 1 - 1 / t,
				o = Math.min(r / n, 1);
			return Math.floor(o / e) * e
		}
	}, function(t, r, e) {
		"use strict";
		var n = this && this.__assign || Object.assign || function(t) {
			for (var r, e = 1, n = arguments.length; e < n; e++)
				for (var o in r = arguments[e]) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
			return t
		};
		Object.defineProperty(r, "__esModule", {
			value: !0
		});
		var o = e(1),
			i = e(0),
			u = e(4),
			a = function(t) {
				return t
			};
		r.appendUnit = function(t) {
			return function(r) {
				return "" + r + t
			}
		}, r.applyOffset = function(t, r) {
			var e = !0;
			void 0 === r && (r = t, e = !1);
			return function(n) {
				return e ? function(t) {
					return t + r
				}(function(r) {
					return r - t
				}(n)) : (t = n, e = !0, r)
			}
		};
		var c = function(t, r, e) {
			var n = t * t,
				o = r * r;
			return Math.sqrt(e * (o - n) + n)
		};
		r.blendColor = function(t, r) {
			var e = "string" == typeof t ? i.color.parse(t) : t,
				o = "string" == typeof r ? i.color.parse(r) : r,
				a = n({}, e),
				f = void 0 !== t.hue || "string" == typeof t && i.hsla.test(t) ? u.getValueFromProgress : c;
			return function(t) {
				for (var r in a = n({}, a)) "alpha" !== r && a.hasOwnProperty(r) && (a[r] = f(e[r], o[r], t));
				return a.alpha = u.getValueFromProgress(e.alpha, o.alpha, t), a
			}
		}, r.clamp = function(t, r) {
			return function(e) {
				return Math.min(Math.max(e, t), r)
			}
		};
		var f = function(t, r) {
			return function(e) {
				return r(t(e))
			}
		};
		r.pipe = function() {
			for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
			return t.reduce(f)
		}, r.conditional = function(t, r) {
			return function(e) {
				return t(e) ? r(e) : e
			}
		};
		r.interpolate = function(t, r, e) {
			var n, o, i, a, c = t.length;
			return 2 !== c ? function(t, r, e, n) {
				var o = e - 1;
				return t[0] > t[o] && (t.reverse(), r.reverse()),
					function(i) {
						if (i <= t[0]) return r[0];
						if (i >= t[o]) return r[o];
						for (var a = 1; a < e && !(t[a] > i || a === o); a++);
						var c = u.getProgressFromValue(t[a - 1], t[a], i),
							f = n ? n[a - 1](c) : c;
						return u.getValueFromProgress(r[a - 1], r[a], f)
					}
			}(t, r, c, e) : (n = t[0], o = t[1], i = r[0], a = r[1], function(t) {
				return (t - n) * (a - i) / (o - n) + i
			})
		}, r.generateStaticSpring = function(t) {
			return void 0 === t && (t = a),
				function(r, e) {
					return function(n) {
						var o = e - n,
							i = -r * (0 - t(Math.abs(o)));
						return o <= 0 ? e + i : e - i
					}
				}
		}, r.linearSpring = r.generateStaticSpring(), r.nonlinearSpring = r.generateStaticSpring(Math.sqrt), r.wrap = function(t, r) {
			return function(e) {
				var n = r - t;
				return ((e - t) % n + n) % n + t
			}
		}, r.smooth = function(t) {
			void 0 === t && (t = 50);
			var r = 0,
				e = 0;
			return function(n) {
				var i = o.currentFrameTime(),
					a = i !== e ? i - e : 0,
					c = a ? u.smooth(n, r, a, t) : r;
				return e = i, r = c, c
			}
		}, r.snap = function(t) {
			if ("number" == typeof t) return function(r) {
				return Math.round(r / t) * t
			};
			var r = 0,
				e = t.length;
			return function(n) {
				var o = Math.abs(t[0] - n);
				for (r = 1; r < e; r++) {
					var i = t[r],
						u = Math.abs(i - n);
					if (0 === u) return i;
					if (u > o) return t[r - 1];
					if (r === e - 1) return i;
					o = u
				}
			}
		}, r.steps = function(t, r, e) {
			return void 0 === r && (r = 0), void 0 === e && (e = 1),
				function(n) {
					var o = u.getProgressFromValue(r, e, n);
					return u.getValueFromProgress(r, e, u.stepProgress(t, o))
				}
		}, r.transformMap = function(t) {
			return function(r) {
				var e = n({}, r);
				for (var o in t)
					if (t.hasOwnProperty(o)) {
						var i = t[o];
						e[o] = i(r[o])
					} return e
			}
		}
	}, function(t, r, e) {
		"use strict";
		Object.defineProperty(r, "__esModule", {
			value: !0
		});
		var n = e(1),
			o = e(2);
		r.default = function(t) {
			var r = t.getCount,
				e = t.getFirst,
				i = t.getOutput,
				u = t.mapApi,
				a = t.setProp,
				c = t.startActions;
			return function(t) {
				return o.default(function(o) {
					var f = o.update,
						s = o.complete,
						l = o.error,
						d = r(t),
						p = i(),
						v = function() {
							return f(p)
						},
						h = 0,
						g = c(t, function(t, r) {
							var e = !1;
							return t.start({
								complete: function() {
									e || (e = !0, ++h === d && n.onFrameUpdate(s))
								},
								error: l,
								update: function(t) {
									a(p, r, t), n.onFrameUpdate(v, !0)
								}
							})
						});
					return Object.keys(e(g)).reduce(function(t, r) {
						return t[r] = u(g, r), t
					}, {})
				})
			}
		}
	}, function(t, r, e) {
		"use strict";
		e.r(r);
		var n = e(1),
			o = e(0);
		e.d(r, "createStylerFactory", function() {
			return a
		}), e.d(r, "buildStyles", function() {
			return C
		});
		var i, u = Object.assign || function(t) {
				for (var r, e = 1, n = arguments.length; e < n; e++)
					for (var o in r = arguments[e]) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
				return t
			},
			a = function(t) {
				var r = t.onRead,
					e = t.onRender,
					o = t.aliasMap,
					i = void 0 === o ? {} : o,
					u = t.useCache,
					a = void 0 === u || u;
				return function(t) {
					var o = {},
						u = [],
						c = !1,
						f = function(t, r) {
							var e = i[t] || t,
								a = o[e];
							o[e] = r, o[e] !== a && (-1 === u.indexOf(e) && u.push(e), c || (c = !0, Object(n.onFrameRender)(s)))
						};

					function s(r) {
						return void 0 === r && (r = !1), (r || c) && (e(o, t, u), c = !1, u.length = 0), this
					}
					return {
						get: function(e) {
							var n = i[e] || e;
							return n ? a && void 0 !== o[n] ? o[n] : r(n, t) : o
						},
						set: function(t, r) {
							if ("string" == typeof t) {
								if (void 0 === r) return function(r) {
									return f(t, r)
								};
								f(t, r)
							} else
								for (var e in t) t.hasOwnProperty(e) && f(e, t[e]);
							return this
						},
						render: s
					}
				}
			},
			c = /([a-z])([A-Z])/g,
			f = function(t) {
				return t.replace(c, "$1-$2").toLowerCase()
			},
			s = new Map,
			l = new Map,
			d = ["Webkit", "Moz", "O", "ms", ""],
			p = d.length,
			v = function(t, r) {
				void 0 === r && (r = !1);
				var e = r ? l : s;
				return e.has(t) || function(t) {
					if ("undefined" != typeof document) {
						i = i || document.createElement("div");
						for (var r = 0; r < p; r++) {
							var e = d[r],
								n = "" === e,
								o = n ? t : e + t.charAt(0).toUpperCase() + t.slice(1);
							o in i.style && (s.set(t, o), l.set(t, (n ? "" : "-") + f(o)))
						}
					}
				}(t), e.get(t) || t
			},
			h = ["", "X", "Y", "Z"],
			g = ["translate", "scale", "rotate", "skew", "transformPerspective"].reduce(function(t, r) {
				return h.reduce(function(t, e) {
					return t.push(r + e), t
				}, t)
			}, ["x", "y", "z"]),
			m = g.reduce(function(t, r) {
				return t[r] = !0, t
			}, {}),
			y = function(t) {
				return !0 === m[t]
			},
			b = function(t, r) {
				return g.indexOf(t) - g.indexOf(r)
			},
			O = function(t) {
				return "transformOriginX" === t || "transformOriginY" === t
			},
			w = {
				color: o.color,
				backgroundColor: o.color,
				outlineColor: o.color,
				fill: o.color,
				stroke: o.color,
				borderColor: o.color,
				borderTopColor: o.color,
				borderRightColor: o.color,
				borderBottomColor: o.color,
				borderLeftColor: o.color,
				borderRadius: o.px,
				width: o.px,
				maxWidth: o.px,
				height: o.px,
				maxHeight: o.px,
				top: o.px,
				left: o.px,
				bottom: o.px,
				right: o.px,
				rotate: o.degrees,
				rotateX: o.degrees,
				rotateY: o.degrees,
				rotateZ: o.degrees,
				scale: o.scale,
				scaleX: o.scale,
				scaleY: o.scale,
				scaleZ: o.scale,
				skewX: o.degrees,
				skewY: o.degrees,
				distance: o.px,
				translateX: o.px,
				translateY: o.px,
				translateZ: o.px,
				perspective: o.px,
				opacity: o.alpha,
				transformOriginX: o.percent,
				transformOriginY: o.percent,
				transformOriginZ: o.px
			},
			x = function(t) {
				return w[t]
			},
			M = "number",
			P = "object",
			j = "transform-origin",
			_ = "transform",
			F = "translateZ",
			A = ";transform: none",
			k = function(t, r) {
				return ";" + t + ":" + r
			};

		function C(t, r, e, n) {
			void 0 === r && (r = !0), void 0 === e && (e = !0);
			for (var o = !0 === r ? Object.keys(t) : r, i = "", u = "", a = !1, c = !0, f = !1, s = !1, l = o.length, d = 0; d < l; d++) {
				var p = o[d];
				if (y(p)) {
					for (var h in f = !0, t) y(h) && -1 === o.indexOf(h) && o.push(h);
					break
				}
			}
			o.sort(b);
			var g = o.length;
			for (d = 0; d < g; d++) {
				p = o[d];
				if (!n.has(p)) {
					var m = y(p),
						w = t[p],
						C = x(p);
					m && (C.default && w !== C.default || !C.default && 0 !== w) && (c = !1), C && (typeof w === M || typeof w === P) && C.transform && (w = C.transform(w)), m ? (u += p + "(" + w + ") ", s = p === F || s) : O(p) ? (t[p] = w, a = !0) : i += k(v(p, !0), w)
				}
			}
			return a && (i += k(j, (t.transformOriginX || 0) + " " + (t.transformOriginY || 0) + " " + (t.transformOriginZ || 0))), f && (!s && e && (u += F + "(0)"), i += k(_, c ? A : u)), i
		}
		var T = new Set(["scrollLeft", "scrollTop"]),
			S = a({
				onRead: function(t, r) {
					var e = r.element,
						n = r.preparseOutput,
						o = x(t);
					if (y(t)) return o && o.default || 0;
					if (T.has(t)) return e[t];
					var i = window.getComputedStyle(e, null).getPropertyValue(v(t, !0)) || 0;
					return n && o && o.parse ? o.parse(i) : i
				},
				onRender: function(t, r, e) {
					var n = r.element,
						o = r.enableHardwareAcceleration;
					n.style.cssText += C(t, e, o, T), -1 !== e.indexOf("scrollLeft") && (n.scrollLeft = t.scrollLeft), -1 !== e.indexOf("scrollTop") && (n.scrollTop = t.scrollTop)
				},
				aliasMap: {
					x: "translateX",
					y: "translateY",
					z: "translateZ",
					originX: "transformOriginX",
					originY: "transformOriginY",
					originZ: "transformOriginZ"
				},
				uncachedValues: T
			}),
			E = function(t, r) {
				return t / 100 * r + "px"
			},
			I = {
				fill: o.color,
				stroke: o.color,
				scale: o.scale,
				scaleX: o.scale,
				scaleY: o.scale,
				opacity: o.alpha,
				fillOpacity: o.alpha,
				strokeOpacity: o.alpha
			},
			Y = a({
				onRead: function(t, r) {
					var e = r.element;
					if (y(t)) {
						var n = function(t) {
							return I[t]
						}(t);
						return n ? n.default : 0
					}
					return e.getAttribute(t)
				},
				onRender: function(t, r, e) {
					var n = r.dimensions;
					! function(t, r) {
						for (var e in r) r.hasOwnProperty(e) && t.setAttribute(e, r[e])
					}(r.element, function(t, r, e, n) {
						var o = !1,
							i = !1,
							u = {},
							a = e ? {
								pathLength: "0",
								pathSpacing: "" + n
							} : void 0,
							c = void 0 !== t.scale ? t.scale || 1e-7 : t.scaleX || 1,
							s = void 0 !== t.scaleY ? t.scaleY || 1e-7 : c || 1,
							l = r.width * ((t.originX || 50) / 100) + r.x,
							d = r.height * ((t.originY || 50) / 100) + r.y,
							p = 1 * c * -l,
							v = 1 * s * -d,
							h = l / c,
							g = d / s,
							m = {
								translate: "translate(" + t.translateX + ", " + t.translateY + ") ",
								scale: "translate(" + p + ", " + v + ") scale(" + c + ", " + s + ") translate(" + h + ", " + g + ") ",
								rotate: "rotate(" + t.rotate + ", " + l + ", " + d + ") ",
								skewX: "skewX(" + t.skewX + ") ",
								skewY: "skewY(" + t.skewY + ") "
							};
						for (var b in t)
							if (t.hasOwnProperty(b)) {
								var O = t[b];
								y(b) ? o = !0 : !e || "pathLength" !== b && "pathSpacing" !== b || "number" != typeof O ? e && "pathOffset" === b ? u["stroke-dashoffset"] = E(-O, n) : u[f(b)] = O : (i = !0, a[b] = E(O, n))
							} if (i && (u["stroke-dasharray"] = a.pathLength + " " + a.pathSpacing), o)
							for (var b in u.transform = "", m)
								if (m.hasOwnProperty(b)) {
									var w = "scale" === b ? "1" : "0";
									u.transform += m[b].replace(/undefined/g, w)
								} return u
					}(t, n, r.isPath, r.pathLength))
				},
				aliasMap: {
					x: "translateX",
					y: "translateY",
					background: "fill"
				}
			}),
			R = a({
				useCache: !1,
				onRead: function(t) {
					return "scrollTop" === t ? window.pageYOffset : window.pageXOffset
				},
				onRender: function(t) {
					var r = t.scrollTop,
						e = void 0 === r ? 0 : r,
						n = t.scrollLeft,
						o = void 0 === n ? 0 : n;
					return window.scrollTo(o, e)
				}
			}),
			X = new WeakMap,
			L = function(t, r) {
				var e;
				return t instanceof HTMLElement ? e = function(t, r) {
					return S(u({
						element: t,
						enableHardwareAcceleration: !0,
						preparseOutput: !0
					}, r))
				}(t, r) : t instanceof SVGElement ? e = function(t) {
					var r = t.getBBox(),
						e = {
							element: t,
							dimensions: {
								x: r.x,
								y: r.y,
								width: r.width,
								height: r.height
							},
							isPath: !1
						};
					return "path" === t.tagName && (e.isPath = !0, e.pathLength = t.getTotalLength()), Y(e)
				}(t) : "undefined" != typeof window && t === window && (e = R(t)), X.set(t, e), e
			},
			V = function(t, r) {
				return X.has(t) ? X.get(t) : L(t, r)
			};
		r.default = function(t, r) {
			var e = "string" == typeof t ? document.querySelector(t) : t;
			return V(e, r)
		}
	}, function(t, r, e) {
		"use strict";
		Object.defineProperty(r, "__esModule", {
			value: !0
		});
		var n = e(6).default({
			getOutput: function() {
				return []
			},
			getCount: function(t) {
				return t.length
			},
			getFirst: function(t) {
				return t[0]
			},
			mapApi: function(t, r) {
				return function() {
					for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
					return t.map(function(t, n) {
						if (t[r]) return Array.isArray(e[0]) ? t[r](e[0][n]) : t[r].apply(t, e)
					})
				}
			},
			setProp: function(t, r, e) {
				return t[r] = e
			},
			startActions: function(t, r) {
				return t.map(function(t, e) {
					return r(t, e)
				})
			}
		});
		r.default = function() {
			for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
			return n(t)
		}
	}, function(t, r, e) {
		"use strict";
		Object.defineProperty(r, "__esModule", {
			value: !0
		});
		var n = e(6).default({
			getOutput: function() {
				return {}
			},
			getCount: function(t) {
				return Object.keys(t).length
			},
			getFirst: function(t) {
				return t[Object.keys(t)[0]]
			},
			mapApi: function(t, r) {
				return function() {
					for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
					return Object.keys(t).reduce(function(n, o) {
						return t[o][r] && (e[0] && void 0 !== e[0][o] ? n[o] = t[o][r](e[0][o]) : n[o] = (i = t[o])[r].apply(i, e)), n;
						var i
					}, {})
				}
			},
			setProp: function(t, r, e) {
				return t[r] = e
			},
			startActions: function(t, r) {
				return Object.keys(t).reduce(function(e, n) {
					return e[n] = r(t[n], n), e
				}, {})
			}
		});
		r.default = n
	}, function(t, r, e) {
		"use strict";
		var n = this && this.__assign || Object.assign || function(t) {
			for (var r, e = 1, n = arguments.length; e < n; e++)
				for (var o in r = arguments[e]) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
			return t
		};
		Object.defineProperty(r, "__esModule", {
			value: !0
		});
		var o = e(0),
			i = e(9),
			u = e(8),
			a = e(5),
			c = o.color.test,
			f = function(t, r) {
				return "string" == typeof r.from && c(r.from) && "string" == typeof r.to && c(r.to) ? t(n({}, r, {
					from: 0,
					to: 1
				})).pipe(a.blendColor(r.from, r.to), o.color.transform) : t(r)
			};
		r.default = function(t, r) {
			var e = function(t) {
					var r = Object.keys(t);
					return {
						getVectorKeys: function(e) {
							return r.reduce(function(r, n) {
								return void 0 === e[n] || t[n](e[n]) || r.push(n), r
							}, [])
						},
						test: function(e) {
							return e && r.reduce(function(r, n) {
								return r || void 0 !== e[n] && !t[n](e[n])
							}, !1)
						}
					}
				}(r),
				o = e.test,
				a = e.getVectorKeys;
			return function(r) {
				if (!o(r)) return t(r);
				var e = a(r),
					s = r[e[0]];
				return Array.isArray(s) ? function(t, r, e) {
					var o = e[0],
						i = r[o].map(function(o, i) {
							return f(t, e.reduce(function(t) {
								return function(r, e) {
									return r[e] = r[e][t], r
								}
							}(i), n({}, r)))
						});
					return u.default.apply(void 0, i)
				}(t, r, e) : "string" == typeof s && c(s) ? function(t, r) {
					return f(t, r)
				}(t, r) : function(t, r, e) {
					var o = e[0],
						u = Object.keys(r[o]).reduce(function(o, i) {
							return o[i] = f(t, e.reduce(function(t) {
								return function(r, e) {
									return r[e] = r[e][t], r
								}
							}(i), n({}, r))), o
						}, {});
					return i.default(u)
				}(t, r, e)
			}
		}
	}, function(t, r, e) {
		"use strict";
		Object.defineProperty(r, "__esModule", {
			value: !0
		});
		var n = e(0),
			o = e(2),
			i = e(10),
			u = e(4),
			a = e(3);
		r.default = i.default(function(t) {
			var r = t.from,
				e = void 0 === r ? 0 : r,
				n = t.to,
				i = void 0 === n ? 1 : n,
				c = t.ease,
				f = void 0 === c ? a.linear : c;
			return o.default(function(t) {
				var r = t.update;
				return {
					seek: function(t) {
						return r(t)
					}
				}
			}).pipe(f, function(t) {
				return u.getValueFromProgress(e, i, t)
			})
		}, {
			ease: function(t) {
				return "function" == typeof t
			},
			from: n.number.test,
			to: n.number.test
		})
	}, function(t, r, e) {
		"use strict";
		Object.defineProperty(r, "__esModule", {
			value: !0
		});
		var n = e(1),
			o = e(2);
		r.default = function() {
			return o.default(function(t) {
				var r = t.update,
					e = !0,
					o = n.currentTime(),
					i = function() {
						e && (r(Math.max(n.currentFrameTime() - o, 0)), n.onFrameUpdate(i))
					};
				return n.onFrameUpdate(i), {
					stop: function() {
						return e = !1
					}
				}
			})
		}
	}, function(t, r, e) {
		"use strict";
		Object.defineProperty(r, "__esModule", {
			value: !0
		});
		var n = function() {
			return function(t, r) {
				var e = t.middleware,
					n = t.onComplete,
					o = this;
				this.isActive = !0, this.update = function(t) {
					o.observer.update && o.updateObserver(t)
				}, this.complete = function() {
					o.observer.complete && o.isActive && o.observer.complete(), o.onComplete && o.onComplete(), o.isActive = !1
				}, this.error = function(t) {
					o.observer.error && o.isActive && o.observer.error(t), o.isActive = !1
				}, this.observer = r, this.updateObserver = function(t) {
					return r.update(t)
				}, this.onComplete = n, r.update && e && e.length && e.forEach(function(t) {
					return o.updateObserver = t(o.updateObserver, o.complete)
				})
			}
		}();
		r.Observer = n, r.default = function(t, r, e) {
			var o = r.middleware;
			return new n({
				middleware: o,
				onComplete: e
			}, "function" == typeof t ? {
				update: t
			} : t)
		}
	}, function(t, r, e) {
		"use strict";
		var n = this && this.__assign || Object.assign || function(t) {
			for (var r, e = 1, n = arguments.length; e < n; e++)
				for (var o in r = arguments[e]) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
			return t
		};
		Object.defineProperty(r, "__esModule", {
			value: !0
		});
		var o = e(5),
			i = function() {
				function t(t) {
					void 0 === t && (t = {}), this.props = t
				}
				return t.prototype.applyMiddleware = function(t) {
					return this.create(n({}, this.props, {
						middleware: this.props.middleware ? [t].concat(this.props.middleware) : [t]
					}))
				}, t.prototype.pipe = function() {
					for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
					var e = 1 === t.length ? t[0] : o.pipe.apply(void 0, t);
					return this.applyMiddleware(function(t) {
						return function(r) {
							return t(e(r))
						}
					})
				}, t.prototype.while = function(t) {
					return this.applyMiddleware(function(r, e) {
						return function(n) {
							return t(n) ? r(n) : e()
						}
					})
				}, t.prototype.filter = function(t) {
					return this.applyMiddleware(function(r, e) {
						return function(e) {
							return t(e) && r(e)
						}
					})
				}, t
			}();
		r.default = i
	}, function(t, r, e) {
		"use strict";
		Object.defineProperty(r, "__esModule", {
			value: !0
		});
		var n = e(1),
			o = e(2),
			i = e(4),
			u = e(3),
			a = e(5),
			c = e(12),
			f = e(11),
			s = a.clamp(0, 1);
		r.default = function(t) {
			return void 0 === t && (t = {}), o.default(function(r) {
				var e, o = r.update,
					l = r.complete,
					d = t.duration,
					p = void 0 === d ? 300 : d,
					v = t.ease,
					h = void 0 === v ? u.easeOut : v,
					g = t.flip,
					m = void 0 === g ? 0 : g,
					y = t.loop,
					b = void 0 === y ? 0 : y,
					O = t.yoyo,
					w = void 0 === O ? 0 : O,
					x = t.from,
					M = void 0 === x ? 0 : x,
					P = t.to,
					j = void 0 === P ? 1 : P,
					_ = t.elapsed,
					F = void 0 === _ ? 0 : _,
					A = t.playDirection,
					k = void 0 === A ? 1 : A,
					C = t.flipCount,
					T = void 0 === C ? 0 : C,
					S = t.yoyoCount,
					E = void 0 === S ? 0 : S,
					I = t.loopCount,
					Y = void 0 === I ? 0 : I,
					R = f.default({
						from: M,
						to: j,
						ease: h
					}).start(o),
					X = 0,
					L = !1,
					V = function() {
						return k *= -1
					},
					G = function() {
						X = s(i.getProgressFromValue(0, p, F)), R.seek(X)
					},
					z = function() {
						L = !0, e = c.default().start(function() {
							F += n.timeSinceLastFrame() * k, G(),
								function() {
									var t = 1 === k ? L && F >= p : L && F <= 0;
									if (!t) return !1;
									if (t && !b && !m && !w) return !0;
									var r, e = !1;
									return b && Y < b ? (F = 0, Y++, e = !0) : m && T < m ? (F = p - F, M = (r = [j, M])[0], j = r[1], R = f.default({
										from: M,
										to: j,
										ease: h
									}).start(o), T++, e = !0) : w && E < w && (V(), E++, e = !0), !e
								}() && l && (e.stop(), n.onFrameUpdate(l, !0))
						})
					},
					B = function() {
						L = !1, e && e.stop()
					};
				return z(), {
					isActive: function() {
						return L
					},
					getElapsed: function() {
						return a.clamp(0, p)(F)
					},
					getProgress: function() {
						return X
					},
					stop: function() {
						B()
					},
					pause: function() {
						return B(), this
					},
					resume: function() {
						return z(), this
					},
					seek: function(t) {
						return F = i.getValueFromProgress(0, p, t), n.onFrameUpdate(G, !0), this
					},
					reverse: function() {
						return V(), this
					}
				}
			})
		}
	}, function(t, r) {
		var e;
		e = function() {
			return this
		}();
		try {
			e = e || Function("return this")() || (0, eval)("this")
		} catch (t) {
			"object" == typeof window && (e = window)
		}
		t.exports = e
	}, function(t, r, e) {
		(function(r) {
			var e = "Expected a function",
				n = NaN,
				o = "[object Symbol]",
				i = /^\s+|\s+$/g,
				u = /^[-+]0x[0-9a-f]+$/i,
				a = /^0b[01]+$/i,
				c = /^0o[0-7]+$/i,
				f = parseInt,
				s = "object" == typeof r && r && r.Object === Object && r,
				l = "object" == typeof self && self && self.Object === Object && self,
				d = s || l || Function("return this")(),
				p = Object.prototype.toString,
				v = Math.max,
				h = Math.min,
				g = function() {
					return d.Date.now()
				};

			function m(t, r, n) {
				var o, i, u, a, c, f, s = 0,
					l = !1,
					d = !1,
					p = !0;
				if ("function" != typeof t) throw new TypeError(e);

				function m(r) {
					var e = o,
						n = i;
					return o = i = void 0, s = r, a = t.apply(n, e)
				}

				function O(t) {
					var e = t - f;
					return void 0 === f || e >= r || e < 0 || d && t - s >= u
				}

				function w() {
					var t = g();
					if (O(t)) return x(t);
					c = setTimeout(w, function(t) {
						var e = r - (t - f);
						return d ? h(e, u - (t - s)) : e
					}(t))
				}

				function x(t) {
					return c = void 0, p && o ? m(t) : (o = i = void 0, a)
				}

				function M() {
					var t = g(),
						e = O(t);
					if (o = arguments, i = this, f = t, e) {
						if (void 0 === c) return function(t) {
							return s = t, c = setTimeout(w, r), l ? m(t) : a
						}(f);
						if (d) return c = setTimeout(w, r), m(f)
					}
					return void 0 === c && (c = setTimeout(w, r)), a
				}
				return r = b(r) || 0, y(n) && (l = !!n.leading, u = (d = "maxWait" in n) ? v(b(n.maxWait) || 0, r) : u, p = "trailing" in n ? !!n.trailing : p), M.cancel = function() {
					void 0 !== c && clearTimeout(c), s = 0, o = f = i = c = void 0
				}, M.flush = function() {
					return void 0 === c ? a : x(g())
				}, M
			}

			function y(t) {
				var r = typeof t;
				return !!t && ("object" == r || "function" == r)
			}

			function b(t) {
				if ("number" == typeof t) return t;
				if (function(t) {
						return "symbol" == typeof t || function(t) {
							return !!t && "object" == typeof t
						}(t) && p.call(t) == o
					}(t)) return n;
				if (y(t)) {
					var r = "function" == typeof t.valueOf ? t.valueOf() : t;
					t = y(r) ? r + "" : r
				}
				if ("string" != typeof t) return 0 === t ? t : +t;
				t = t.replace(i, "");
				var e = a.test(t);
				return e || c.test(t) ? f(t.slice(2), e ? 2 : 8) : u.test(t) ? n : +t
			}
			t.exports = function(t, r, n) {
				var o = !0,
					i = !0;
				if ("function" != typeof t) throw new TypeError(e);
				return y(n) && (o = "leading" in n ? !!n.leading : o, i = "trailing" in n ? !!n.trailing : i), m(t, r, {
					leading: o,
					maxWait: r,
					trailing: i
				})
			}
		}).call(this, e(16))
	}, function(t, r, e) {
		"use strict";
		Object.defineProperty(r, "__esModule", {
			value: !0
		}), r.wrapGrid = void 0;
		var n = c(e(17)),
			o = c(e(15)),
			i = c(e(7)),
			u = function(t) {
				if (t && t.__esModule) return t;
				var r = {};
				if (null != t)
					for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e]);
				return r.default = t, r
			}(e(3)),
			a = e(1);

		function c(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function f(t) {
			if (Array.isArray(t)) {
				for (var r = 0, e = Array(t.length); r < t.length; r++) e[r] = t[r];
				return e
			}
			return Array.from(t)
		}
		var s = function(t, r) {
				var e = r.getBoundingClientRect(),
					n = {
						top: e.top,
						left: e.left,
						width: e.width,
						height: e.height
					};
				return n.top -= t.top, n.left -= t.left, n.top = Math.max(n.top, 0), n.left = Math.max(n.left, 0), n
			},
			l = function(t, r) {
				var e = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).immediate,
					n = (0, i.default)(t).set(r);
				if (e && n.render(), t.children[0]) {
					var o = (0, i.default)(t.children[0]).set({
						scaleX: 1 / r.scaleX,
						scaleY: 1 / r.scaleY
					});
					e && o.render()
				}
			};
		r.wrapGrid = function(t) {
			var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
				e = r.duration,
				i = void 0 === e ? 250 : e,
				c = r.stagger,
				d = void 0 === c ? 0 : c,
				p = r.easing,
				v = void 0 === p ? "easeInOut" : p,
				h = {},
				g = function(r) {
					var e = t.getBoundingClientRect();
					[].concat(f(r)).forEach(function(t) {
						if ("function" == typeof t.getBoundingClientRect) {
							if (!t.dataset.animateGridId) {
								var r = Math.random();
								t.dataset.animateGridId = r, h[r] = {}
							}
							var n = t.dataset.animateGridId,
								o = s(e, t);
							h[n].rect = o
						}
					})
				};
			g(t.children);
			var m = (0, n.default)(function() {
				g(t.children)
			}, 250);
			window.addEventListener("resize", m);
			var y = function(r) {
					if ("forceGridAnimation" !== r && !r.filter(function(t) {
							return "class" === t.attributeName || t.addedNodes.length || t.removedNodes.length
						}).length) return;
					var e = t.getBoundingClientRect(),
						n = [].concat(f(t.children));
					n.filter(function(t) {
						var r = h[t.dataset.animateGridId];
						if (r && r.stopTween) return r.stopTween(), delete r.stopTween, !0
					}).forEach(function(t) {
						t.style.transform = "", t.children[0] && (t.children[0].style.transform = "")
					});
					var c = n.map(function(t) {
						return {
							el: t,
							boundingClientRect: s(e, t)
						}
					}).filter(function(t) {
						var r = t.el,
							e = t.boundingClientRect,
							n = h[r.dataset.animateGridId];
						return n ? e.top !== n.rect.top || e.left !== n.rect.left || e.width !== n.rect.width || e.height !== n.rect.height : (g([r]), !1)
					});
					c.forEach(function(t) {
						var r = t.el;
						if ([].concat(f(r.children)).length > 1) throw new Error("Make sure every grid item has a single container element surrounding its children")
					}), c.map(function(t) {
						var r = t.el.children[0];
						if (r) {
							var n = s(e, r),
								o = n.left,
								i = n.top;
							t.childCoords = {
								childLeft: o,
								childTop: i
							}
						} else t.childCoords = {};
						return t
					}).forEach(function(t, r, e) {
						var n = t.el,
							c = t.boundingClientRect,
							f = c.top,
							s = c.left,
							p = c.width,
							m = c.height,
							y = t.childCoords,
							b = y.childLeft,
							O = y.childTop,
							w = n.children[0],
							x = h[n.dataset.animateGridId],
							M = {};
						M.scaleX = x.rect.width / p, M.scaleY = x.rect.height / m, M.translateX = x.rect.left - s, M.translateY = x.rect.top - f, n.style.transformOrigin = "0 0", w && b === s && O === f && (w.style.transformOrigin = "0 0"), l(n, M, {
							immediate: !0
						});
						var P = function() {
							var t = (0, o.default)({
								from: M,
								to: {
									translateX: 0,
									translateY: 0,
									scaleX: 1,
									scaleY: 1
								},
								duration: i,
								ease: u[v]
							}).start(function(t) {
								l(n, t), (0, a.onFrameEnd)(function() {
									return g([n])
								})
							}).stop;
							x.stopTween = t
						};
						if ("number" != typeof d) P();
						else {
							var j = setTimeout(P, d * r);
							x.stopTween = function() {
								return clearTimeout(j)
							}
						}
					})
				},
				b = new MutationObserver(y);
			b.observe(t, {
				childList: !0,
				attributes: !0,
				subtree: !0,
				attributeFilter: ["class"]
			});
			return {
				unwrapGrid: function() {
					window.removeEventListener("resize", m), b.disconnect()
				},
				forceGridAnimation: function() {
					return y("forceGridAnimation")
				}
			}
		}
	}])
});
