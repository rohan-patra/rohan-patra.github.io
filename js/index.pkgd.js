! function(l) {
	"use strict";

	function e() {
		var t = l(window).width(),
			e = l("#site_header");
		t < 1025 ? (e.addClass("mobile-menu-hide"), l(".menu-toggle").removeClass("open"), setTimeout(function() {
			e.addClass("animate")
		}, 500)) : e.removeClass("animate")
	}

	function n() {
		1024 < l(window).width() ? l(".animated-section, .single-page-content").each(function() {
			l(this).perfectScrollbar()
		}) : l(".animated-section, .single-page-content").each(function() {
			l(this).perfectScrollbar("destroy")
		})
	}
	l(function() {
		l("#contact_form").validator(), l("#contact_form").on("submit", function(t) {
			if (!t.isDefaultPrevented()) {
				return l.ajax({
					type: "POST",
					url: "contact_form/contact_form.php",
					data: l(this).serialize(),
					success: function(t) {
						var e = "alert-" + t.type,
							n = t.message,
							i = '<div class="alert ' + e + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + n + "</div>";
						e && n && (l("#contact_form").find(".messages").html(i), l("#contact_form")[0].reset())
					}
				}), !1
			}
		})
	}), l(window).on("load", function() {
		l(".preloader").fadeOut(800, "linear"), l(".animated-sections")[0] && PageTransitions.init({
			menu: "ul.main-menu"
		})
	}).on("resize", function() {
		e(), l(".animated-section").each(function() {
			l(this).perfectScrollbar("update")
		}), n()
	}), l(document).on("ready", function() {
		var s = 23 / l(document).height(),
			a = 23 / l(document).width();
		l("body").on("mousemove", function(t) {
			var e = t.pageX - l(document).width() / 2,
				n = t.pageY - l(document).height() / 2,
				i = a * e * -1,
				o = s * n * -1,
				r = l(".lm-animated-bg");
			r.addClass("transition"), r.css({
				"background-position": "calc( 50% + " + i + "px ) calc( 50% + " + o + "px )"
			}), setTimeout(function() {
				r.removeClass("transition")
			}, 300)
		}), l(".menu-toggle").on("click", function() {
			l("#site_header").addClass("animate"), l("#site_header").toggleClass("mobile-menu-hide"), l(".menu-toggle").toggleClass("open")
		}), l(".main-menu").on("click", "a", function(t) {
			e()
		}), l(".sidebar-toggle").on("click", function() {
			l("#blog-sidebar").toggleClass("open")
		}), l(".portfolio-grid").imagesLoaded(function() {
			var e, t;
			e = l(".portfolio-grid"), t = l(".portfolio-filters"), e && (e.shuffle({
				speed: 450,
				itemSelector: "figure"
			}), t.on("click", ".filter", function(t) {
				e.shuffle("update"), t.preventDefault(), l(".portfolio-filters .filter").parent().removeClass("active"), l(this).parent().addClass("active"), e.shuffle("shuffle", l(this).attr("data-group"))
			}))
		});
		var t = l(".blog-masonry");
		t.imagesLoaded(function() {
			t.masonry()
		}), n(), l(".text-rotation").owlCarousel({
			loop: !0,
			dots: !1,
			nav: !1,
			margin: 0,
			items: 1,
			autoplay: !0,
			autoplayHoverPause: !1,
			autoplayTimeout: 3800,
			animateOut: "animated-section-scaleDown",
			animateIn: "animated-section-scaleUp"
		}), l(".testimonials.owl-carousel").imagesLoaded(function() {
			l(".testimonials.owl-carousel").owlCarousel({
				nav: !0,
				items: 3,
				loop: !1,
				navText: !1,
				autoHeight: !0,
				margin: 25,
				responsive: {
					0: {
						items: 1
					},
					480: {
						items: 1
					},
					768: {
						items: 2
					},
					1200: {
						items: 2
					}
				}
			})
		}), l(".clients.owl-carousel").imagesLoaded().owlCarousel({
			nav: !0,
			items: 2,
			loop: !1,
			navText: !1,
			margin: 10,
			autoHeight: !0,
			responsive: {
				0: {
					items: 2
				},
				768: {
					items: 4
				},
				1200: {
					items: 5
				}
			}
		}), l(".form-control").val("").on("focusin", function() {
			l(this).parent(".form-group").addClass("form-group-focus")
		}).on("focusout", function() {
			0 === l(this).val().length && l(this).parent(".form-group").removeClass("form-group-focus")
		}), l("body").magnificPopup({
			delegate: "a.lightbox",
			type: "image",
			removalDelay: 300,
			mainClass: "mfp-fade",
			image: {
				titleSrc: "title",
				gallery: {
					enabled: !0
				}
			},
			iframe: {
				markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe><div class="mfp-title mfp-bottom-iframe-title"></div></div>',
				patterns: {
					youtube: {
						index: "youtube.com/",
						id: null,
						src: "%id%?autoplay=1"
					},
					vimeo: {
						index: "vimeo.com/",
						id: "/",
						src: "//player.vimeo.com/video/%id%?autoplay=1"
					},
					gmaps: {
						index: "//maps.google.",
						src: "%id%&output=embed"
					}
				},
				srcAction: "iframe_src"
			},
			callbacks: {
				markupParse: function(t, e, n) {
					e.title = n.el.attr("title")
				}
			}
		})
	})
}(jQuery),
function(e, n) {
	"function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(t) {
		return n(e, t)
	}) : "object" == typeof module && module.exports ? module.exports = n(e, require("jquery")) : e.jQueryBridget = n(e, e.jQuery)
}(window, function(t, e) {
	"use strict";

	function n(c, o, u) {
		(u = u || e || t.jQuery) && (o.prototype.option || (o.prototype.option = function(t) {
			u.isPlainObject(t) && (this.options = u.extend(!0, this.options, t))
		}), u.fn[c] = function(t) {
			if ("string" != typeof t) return i = t, this.each(function(t, e) {
				var n = u.data(e, c);
				n ? (n.option(i), n._init()) : (n = new o(e, i), u.data(e, c, n))
			}), this;
			var e, r, s, a, l, i, n = d.call(arguments, 1);
			return s = n, l = "$()." + c + '("' + (r = t) + '")', (e = this).each(function(t, e) {
				var n, i, o = u.data(e, c);
				o ? (n = o[r]) && "_" != r.charAt(0) ? (i = n.apply(o, s), a = void 0 === a ? i : a) : h(l + " is not a valid method") : h(c + " not initialized. Cannot call methods, i.e. " + l)
			}), void 0 !== a ? a : e
		}, i(u))
	}

	function i(t) {
		!t || t && t.bridget || (t.bridget = n)
	}
	var d = Array.prototype.slice,
		o = t.console,
		h = void 0 === o ? function() {} : function(t) {
			o.error(t)
		};
	return i(e || t.jQuery), n
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
	function t() {}
	var e = t.prototype;
	return e.on = function(t, e) {
		if (t && e) {
			var n = this._events = this._events || {},
				i = n[t] = n[t] || [];
			return -1 == i.indexOf(e) && i.push(e), this
		}
	}, e.once = function(t, e) {
		if (t && e) {
			this.on(t, e);
			var n = this._onceEvents = this._onceEvents || {};
			return (n[t] = n[t] || {})[e] = !0, this
		}
	}, e.off = function(t, e) {
		var n = this._events && this._events[t];
		if (n && n.length) {
			var i = n.indexOf(e);
			return -1 != i && n.splice(i, 1), this
		}
	}, e.emitEvent = function(t, e) {
		var n = this._events && this._events[t];
		if (n && n.length) {
			var i = 0,
				o = n[i];
			e = e || [];
			for (var r = this._onceEvents && this._onceEvents[t]; o;) {
				var s = r && r[o];
				s && (this.off(t, o), delete r[o]), o.apply(this, e), o = n[i += s ? 0 : 1]
			}
			return this
		}
	}, t
}),
function(t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("get-size/get-size", [], e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
	"use strict";

	function w(t) {
		var e = parseFloat(t);
		return -1 == t.indexOf("%") && !isNaN(e) && e
	}

	function x(t) {
		var e = getComputedStyle(t);
		return e || n("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
	}

	function _(t) {
		if (S || (S = !0, (v = document.createElement("div")).style.width = "200px", v.style.padding = "1px 2px 3px 4px", v.style.borderStyle = "solid", v.style.borderWidth = "1px 2px 3px 4px", v.style.boxSizing = "border-box", (y = document.body || document.documentElement).appendChild(v), b = x(v), _.isBoxSizeOuter = C = 200 == w(b.width), y.removeChild(v)), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
			var e = x(t);
			if ("none" == e.display) return function() {
				for (var t = {
						width: 0,
						height: 0,
						innerWidth: 0,
						innerHeight: 0,
						outerWidth: 0,
						outerHeight: 0
					}, e = 0; e < E; e++) {
					t[T[e]] = 0
				}
				return t
			}();
			var n = {};
			n.width = t.offsetWidth, n.height = t.offsetHeight;
			for (var i = n.isBorderBox = "border-box" == e.boxSizing, o = 0; o < E; o++) {
				var r = T[o],
					s = e[r],
					a = parseFloat(s);
				n[r] = isNaN(a) ? 0 : a
			}
			var l = n.paddingLeft + n.paddingRight,
				c = n.paddingTop + n.paddingBottom,
				u = n.marginLeft + n.marginRight,
				d = n.marginTop + n.marginBottom,
				h = n.borderLeftWidth + n.borderRightWidth,
				p = n.borderTopWidth + n.borderBottomWidth,
				f = i && C,
				m = w(e.width);
			!1 !== m && (n.width = m + (f ? 0 : l + h));
			var g = w(e.height);
			return !1 !== g && (n.height = g + (f ? 0 : c + p)), n.innerWidth = n.width - (l + h), n.innerHeight = n.height - (c + p), n.outerWidth = n.width + u, n.outerHeight = n.height + d, n
		}
		var v, y, b
	}
	var C, n = "undefined" == typeof console ? function() {} : function(t) {
			console.error(t)
		},
		T = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
		E = T.length,
		S = !1;
	return _
}),
function(t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
	"use strict";
	var n = function() {
		var t = Element.prototype;
		if (t.matches) return "matches";
		if (t.matchesSelector) return "matchesSelector";
		for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
			var i = e[n] + "MatchesSelector";
			if (t[i]) return i
		}
	}();
	return function(t, e) {
		return t[n](e)
	}
}),
function(e, n) {
	"function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(t) {
		return n(e, t)
	}) : "object" == typeof module && module.exports ? module.exports = n(e, require("desandro-matches-selector")) : e.fizzyUIUtils = n(e, e.matchesSelector)
}(window, function(c, r) {
	var u = {
			extend: function(t, e) {
				for (var n in e) t[n] = e[n];
				return t
			},
			modulo: function(t, e) {
				return (t % e + e) % e
			},
			makeArray: function(t) {
				var e = [];
				if (Array.isArray(t)) e = t;
				else if (t && "number" == typeof t.length)
					for (var n = 0; n < t.length; n++) e.push(t[n]);
				else e.push(t);
				return e
			},
			removeFrom: function(t, e) {
				var n = t.indexOf(e); - 1 != n && t.splice(n, 1)
			},
			getParent: function(t, e) {
				for (; t != document.body;)
					if (t = t.parentNode, r(t, e)) return t
			},
			getQueryElement: function(t) {
				return "string" == typeof t ? document.querySelector(t) : t
			},
			handleEvent: function(t) {
				var e = "on" + t.type;
				this[e] && this[e](t)
			},
			filterFindElements: function(t, i) {
				t = u.makeArray(t);
				var o = [];
				return t.forEach(function(t) {
					if (t instanceof HTMLElement) {
						if (!i) return void o.push(t);
						r(t, i) && o.push(t);
						for (var e = t.querySelectorAll(i), n = 0; n < e.length; n++) o.push(e[n])
					}
				}), o
			},
			debounceMethod: function(t, e, i) {
				var o = t.prototype[e],
					r = e + "Timeout";
				t.prototype[e] = function() {
					var t = this[r];
					t && clearTimeout(t);
					var e = arguments,
						n = this;
					this[r] = setTimeout(function() {
						o.apply(n, e), delete n[r]
					}, i || 100)
				}
			},
			docReady: function(t) {
				var e = document.readyState;
				"complete" == e || "interactive" == e ? t() : document.addEventListener("DOMContentLoaded", t)
			},
			toDashed: function(t) {
				return t.replace(/(.)([A-Z])/g, function(t, e, n) {
					return e + "-" + n
				}).toLowerCase()
			}
		},
		d = c.console;
	return u.htmlInit = function(a, l) {
		u.docReady(function() {
			var t = u.toDashed(l),
				o = "data-" + t,
				e = document.querySelectorAll("[" + o + "]"),
				n = document.querySelectorAll(".js-" + t),
				i = u.makeArray(e).concat(u.makeArray(n)),
				r = o + "-options",
				s = c.jQuery;
			i.forEach(function(e) {
				var t, n = e.getAttribute(o) || e.getAttribute(r);
				try {
					t = n && JSON.parse(n)
				} catch (t) {
					return void(d && d.error("Error parsing " + o + " on " + e.className + ": " + t))
				}
				var i = new a(e, t);
				s && s.data(e, l, i)
			})
		})
	}, u
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
	"use strict";

	function n(t, e) {
		t && (this.element = t, this.layout = e, this.position = {
			x: 0,
			y: 0
		}, this._create())
	}
	var i = document.documentElement.style,
		o = "string" == typeof i.transition ? "transition" : "WebkitTransition",
		r = "string" == typeof i.transform ? "transform" : "WebkitTransform",
		s = {
			WebkitTransition: "webkitTransitionEnd",
			transition: "transitionend"
		} [o],
		a = {
			transform: r,
			transition: o,
			transitionDuration: o + "Duration",
			transitionProperty: o + "Property",
			transitionDelay: o + "Delay"
		},
		l = n.prototype = Object.create(t.prototype);
	l.constructor = n, l._create = function() {
		this._transn = {
			ingProperties: {},
			clean: {},
			onEnd: {}
		}, this.css({
			position: "absolute"
		})
	}, l.handleEvent = function(t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, l.getSize = function() {
		this.size = e(this.element)
	}, l.css = function(t) {
		var e = this.element.style;
		for (var n in t) {
			e[a[n] || n] = t[n]
		}
	}, l.getPosition = function() {
		var t = getComputedStyle(this.element),
			e = this.layout._getOption("originLeft"),
			n = this.layout._getOption("originTop"),
			i = t[e ? "left" : "right"],
			o = t[n ? "top" : "bottom"],
			r = this.layout.size,
			s = -1 != i.indexOf("%") ? parseFloat(i) / 100 * r.width : parseInt(i, 10),
			a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * r.height : parseInt(o, 10),
			s = isNaN(s) ? 0 : s,
			a = isNaN(a) ? 0 : a;
		s -= e ? r.paddingLeft : r.paddingRight, a -= n ? r.paddingTop : r.paddingBottom, this.position.x = s, this.position.y = a
	}, l.layoutPosition = function() {
		var t = this.layout.size,
			e = {},
			n = this.layout._getOption("originLeft"),
			i = this.layout._getOption("originTop"),
			o = n ? "paddingLeft" : "paddingRight",
			r = n ? "left" : "right",
			s = n ? "right" : "left",
			a = this.position.x + t[o];
		e[r] = this.getXValue(a), e[s] = "";
		var l = i ? "paddingTop" : "paddingBottom",
			c = i ? "top" : "bottom",
			u = i ? "bottom" : "top",
			d = this.position.y + t[l];
		e[c] = this.getYValue(d), e[u] = "", this.css(e), this.emitEvent("layout", [this])
	}, l.getXValue = function(t) {
		var e = this.layout._getOption("horizontal");
		return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
	}, l.getYValue = function(t) {
		var e = this.layout._getOption("horizontal");
		return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
	}, l._transitionTo = function(t, e) {
		this.getPosition();
		var n, i, o, r = this.position.x,
			s = this.position.y,
			a = parseInt(t, 10),
			l = parseInt(e, 10),
			c = a === this.position.x && l === this.position.y;
		this.setPosition(t, e), !c || this.isTransitioning ? (n = t - r, i = e - s, (o = {}).transform = this.getTranslate(n, i), this.transition({
			to: o,
			onTransitionEnd: {
				transform: this.layoutPosition
			},
			isCleaning: !0
		})) : this.layoutPosition()
	}, l.getTranslate = function(t, e) {
		return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
	}, l.goTo = function(t, e) {
		this.setPosition(t, e), this.layoutPosition()
	}, l.moveTo = l._transitionTo, l.setPosition = function(t, e) {
		this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
	}, l._nonTransition = function(t) {
		for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
	}, l.transition = function(t) {
		if (parseFloat(this.layout.options.transitionDuration)) {
			var e = this._transn;
			for (var n in t.onTransitionEnd) e.onEnd[n] = t.onTransitionEnd[n];
			for (n in t.to) e.ingProperties[n] = !0, t.isCleaning && (e.clean[n] = !0);
			t.from && (this.css(t.from), this.element.offsetHeight, 0), this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
		} else this._nonTransition(t)
	};
	var c = "opacity," + r.replace(/([A-Z])/g, function(t) {
		return "-" + t.toLowerCase()
	});
	l.enableTransition = function() {
		var t;
		this.isTransitioning || (t = "number" == typeof(t = this.layout.options.transitionDuration) ? t + "ms" : t, this.css({
			transitionProperty: c,
			transitionDuration: t,
			transitionDelay: this.staggerDelay || 0
		}), this.element.addEventListener(s, this, !1))
	}, l.onwebkitTransitionEnd = function(t) {
		this.ontransitionend(t)
	}, l.onotransitionend = function(t) {
		this.ontransitionend(t)
	};
	var u = {
		"-webkit-transform": "transform"
	};
	l.ontransitionend = function(t) {
		var e, n;
		t.target === this.element && (e = this._transn, n = u[t.propertyName] || t.propertyName, delete e.ingProperties[n], function(t) {
			for (var e in t) return;
			return 1
		}(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd && (e.onEnd[n].call(this), delete e.onEnd[n]), this.emitEvent("transitionEnd", [this]))
	}, l.disableTransition = function() {
		this.removeTransitionStyles(), this.element.removeEventListener(s, this, !1), this.isTransitioning = !1
	}, l._removeStyles = function(t) {
		var e = {};
		for (var n in t) e[n] = "";
		this.css(e)
	};
	var d = {
		transitionProperty: "",
		transitionDuration: "",
		transitionDelay: ""
	};
	return l.removeTransitionStyles = function() {
		this.css(d)
	}, l.stagger = function(t) {
		t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
	}, l.removeElem = function() {
		this.element.parentNode.removeChild(this.element), this.css({
			display: ""
		}), this.emitEvent("remove", [this])
	}, l.remove = function() {
		return o && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
			this.removeElem()
		}), void this.hide()) : void this.removeElem()
	}, l.reveal = function() {
		delete this.isHidden, this.css({
			display: ""
		});
		var t = this.layout.options,
			e = {};
		e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
			from: t.hiddenStyle,
			to: t.visibleStyle,
			isCleaning: !0,
			onTransitionEnd: e
		})
	}, l.onRevealTransitionEnd = function() {
		this.isHidden || this.emitEvent("reveal")
	}, l.getHideRevealTransitionEndProperty = function(t) {
		var e = this.layout.options[t];
		if (e.opacity) return "opacity";
		for (var n in e) return n
	}, l.hide = function() {
		this.isHidden = !0, this.css({
			display: ""
		});
		var t = this.layout.options,
			e = {};
		e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
			from: t.visibleStyle,
			to: t.hiddenStyle,
			isCleaning: !0,
			onTransitionEnd: e
		})
	}, l.onHideTransitionEnd = function() {
		this.isHidden && (this.css({
			display: "none"
		}), this.emitEvent("hide"))
	}, l.destroy = function() {
		this.css({
			position: "",
			left: "",
			right: "",
			top: "",
			bottom: "",
			transition: "",
			transform: ""
		})
	}, n
}),
function(o, r) {
	"use strict";
	"function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(t, e, n, i) {
		return r(o, t, e, n, i)
	}) : "object" == typeof module && module.exports ? module.exports = r(o, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : o.Outlayer = r(o, o.EvEmitter, o.getSize, o.fizzyUIUtils, o.Outlayer.Item)
}(window, function(t, e, o, r, i) {
	"use strict";

	function s(t, e) {
		var n, i = r.getQueryElement(t);
		i ? (this.element = i, c && (this.$element = c(this.element)), this.options = r.extend({}, this.constructor.defaults), this.option(e), n = ++u, this.element.outlayerGUID = n, (d[n] = this)._create(), this._getOption("initLayout") && this.layout()) : l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
	}

	function a(t) {
		function e() {
			t.apply(this, arguments)
		}
		return (e.prototype = Object.create(t.prototype)).constructor = e
	}

	function n() {}
	var l = t.console,
		c = t.jQuery,
		u = 0,
		d = {};
	s.namespace = "outlayer", s.Item = i, s.defaults = {
		containerStyle: {
			position: "relative"
		},
		initLayout: !0,
		originLeft: !0,
		originTop: !0,
		resize: !0,
		resizeContainer: !0,
		transitionDuration: "0.4s",
		hiddenStyle: {
			opacity: 0,
			transform: "scale(0.001)"
		},
		visibleStyle: {
			opacity: 1,
			transform: "scale(1)"
		}
	};
	var h = s.prototype;
	r.extend(h, e.prototype), h.option = function(t) {
		r.extend(this.options, t)
	}, h._getOption = function(t) {
		var e = this.constructor.compatOptions[t];
		return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
	}, s.compatOptions = {
		initLayout: "isInitLayout",
		horizontal: "isHorizontal",
		layoutInstant: "isLayoutInstant",
		originLeft: "isOriginLeft",
		originTop: "isOriginTop",
		resize: "isResizeBound",
		resizeContainer: "isResizingContainer"
	}, h._create = function() {
		this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), r.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
	}, h.reloadItems = function() {
		this.items = this._itemize(this.element.children)
	}, h._itemize = function(t) {
		for (var e = this._filterFindItemElements(t), n = this.constructor.Item, i = [], o = 0; o < e.length; o++) {
			var r = new n(e[o], this);
			i.push(r)
		}
		return i
	}, h._filterFindItemElements = function(t) {
		return r.filterFindElements(t, this.options.itemSelector)
	}, h.getItemElements = function() {
		return this.items.map(function(t) {
			return t.element
		})
	}, h.layout = function() {
		this._resetLayout(), this._manageStamps();
		var t = this._getOption("layoutInstant"),
			e = void 0 !== t ? t : !this._isLayoutInited;
		this.layoutItems(this.items, e), this._isLayoutInited = !0
	}, h._init = h.layout, h._resetLayout = function() {
		this.getSize()
	}, h.getSize = function() {
		this.size = o(this.element)
	}, h._getMeasurement = function(t, e) {
		var n, i = this.options[t];
		i ? ("string" == typeof i ? n = this.element.querySelector(i) : i instanceof HTMLElement && (n = i), this[t] = n ? o(n)[e] : i) : this[t] = 0
	}, h.layoutItems = function(t, e) {
		t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
	}, h._getItemsForLayout = function(t) {
		return t.filter(function(t) {
			return !t.isIgnored
		})
	}, h._layoutItems = function(t, n) {
		var i;
		this._emitCompleteOnItems("layout", t), t && t.length && (i = [], t.forEach(function(t) {
			var e = this._getItemLayoutPosition(t);
			e.item = t, e.isInstant = n || t.isLayoutInstant, i.push(e)
		}, this), this._processLayoutQueue(i))
	}, h._getItemLayoutPosition = function() {
		return {
			x: 0,
			y: 0
		}
	}, h._processLayoutQueue = function(t) {
		this.updateStagger(), t.forEach(function(t, e) {
			this._positionItem(t.item, t.x, t.y, t.isInstant, e)
		}, this)
	}, h.updateStagger = function() {
		var t = this.options.stagger;
		return null == t ? void(this.stagger = 0) : (this.stagger = function(t) {
			if ("number" == typeof t) return t;
			var e = t.match(/(^\d*\.?\d*)(\w*)/),
				n = e && e[1],
				i = e && e[2];
			return n.length ? (n = parseFloat(n)) * (p[i] || 1) : 0
		}(t), this.stagger)
	}, h._positionItem = function(t, e, n, i, o) {
		i ? t.goTo(e, n) : (t.stagger(o * this.stagger), t.moveTo(e, n))
	}, h._postLayout = function() {
		this.resizeContainer()
	}, h.resizeContainer = function() {
		var t;
		!this._getOption("resizeContainer") || (t = this._getContainerSize()) && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
	}, h._getContainerSize = n, h._setContainerMeasure = function(t, e) {
		var n;
		void 0 !== t && ((n = this.size).isBorderBox && (t += e ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px")
	}, h._emitCompleteOnItems = function(e, t) {
		function n() {
			r.dispatchEvent(e + "Complete", null, [t])
		}

		function i() {
			++o == s && n()
		}
		var o, r = this,
			s = t.length;
		t && s ? (o = 0, t.forEach(function(t) {
			t.once(e, i)
		})) : n()
	}, h.dispatchEvent = function(t, e, n) {
		var i, o = e ? [e].concat(n) : n;
		this.emitEvent(t, o), c && (this.$element = this.$element || c(this.element), e ? ((i = c.Event(e)).type = t, this.$element.trigger(i, n)) : this.$element.trigger(t, n))
	}, h.ignore = function(t) {
		var e = this.getItem(t);
		e && (e.isIgnored = !0)
	}, h.unignore = function(t) {
		var e = this.getItem(t);
		e && delete e.isIgnored
	}, h.stamp = function(t) {
		(t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
	}, h.unstamp = function(t) {
		(t = this._find(t)) && t.forEach(function(t) {
			r.removeFrom(this.stamps, t), this.unignore(t)
		}, this)
	}, h._find = function(t) {
		return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = r.makeArray(t)) : void 0
	}, h._manageStamps = function() {
		this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
	}, h._getBoundingRect = function() {
		var t = this.element.getBoundingClientRect(),
			e = this.size;
		this._boundingRect = {
			left: t.left + e.paddingLeft + e.borderLeftWidth,
			top: t.top + e.paddingTop + e.borderTopWidth,
			right: t.right - (e.paddingRight + e.borderRightWidth),
			bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
		}
	}, h._manageStamp = n, h._getElementOffset = function(t) {
		var e = t.getBoundingClientRect(),
			n = this._boundingRect,
			i = o(t);
		return {
			left: e.left - n.left - i.marginLeft,
			top: e.top - n.top - i.marginTop,
			right: n.right - e.right - i.marginRight,
			bottom: n.bottom - e.bottom - i.marginBottom
		}
	}, h.handleEvent = r.handleEvent, h.bindResize = function() {
		t.addEventListener("resize", this), this.isResizeBound = !0
	}, h.unbindResize = function() {
		t.removeEventListener("resize", this), this.isResizeBound = !1
	}, h.onresize = function() {
		this.resize()
	}, r.debounceMethod(s, "onresize", 100), h.resize = function() {
		this.isResizeBound && this.needsResizeLayout() && this.layout()
	}, h.needsResizeLayout = function() {
		var t = o(this.element);
		return this.size && t && t.innerWidth !== this.size.innerWidth
	}, h.addItems = function(t) {
		var e = this._itemize(t);
		return e.length && (this.items = this.items.concat(e)), e
	}, h.appended = function(t) {
		var e = this.addItems(t);
		e.length && (this.layoutItems(e, !0), this.reveal(e))
	}, h.prepended = function(t) {
		var e, n = this._itemize(t);
		n.length && (e = this.items.slice(0), this.items = n.concat(e), this._resetLayout(), this._manageStamps(), this.layoutItems(n, !0), this.reveal(n), this.layoutItems(e))
	}, h.reveal = function(t) {
		var n;
		this._emitCompleteOnItems("reveal", t), t && t.length && (n = this.updateStagger(), t.forEach(function(t, e) {
			t.stagger(e * n), t.reveal()
		}))
	}, h.hide = function(t) {
		var n;
		this._emitCompleteOnItems("hide", t), t && t.length && (n = this.updateStagger(), t.forEach(function(t, e) {
			t.stagger(e * n), t.hide()
		}))
	}, h.revealItemElements = function(t) {
		var e = this.getItems(t);
		this.reveal(e)
	}, h.hideItemElements = function(t) {
		var e = this.getItems(t);
		this.hide(e)
	}, h.getItem = function(t) {
		for (var e = 0; e < this.items.length; e++) {
			var n = this.items[e];
			if (n.element == t) return n
		}
	}, h.getItems = function(t) {
		t = r.makeArray(t);
		var n = [];
		return t.forEach(function(t) {
			var e = this.getItem(t);
			e && n.push(e)
		}, this), n
	}, h.remove = function(t) {
		var e = this.getItems(t);
		this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
			t.remove(), r.removeFrom(this.items, t)
		}, this)
	}, h.destroy = function() {
		var t = this.element.style;
		t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
			t.destroy()
		}), this.unbindResize();
		var e = this.element.outlayerGUID;
		delete d[e], delete this.element.outlayerGUID, c && c.removeData(this.element, this.constructor.namespace)
	}, s.data = function(t) {
		var e = (t = r.getQueryElement(t)) && t.outlayerGUID;
		return e && d[e]
	}, s.create = function(t, e) {
		var n = a(s);
		return n.defaults = r.extend({}, s.defaults), r.extend(n.defaults, e), n.compatOptions = r.extend({}, s.compatOptions), n.namespace = t, n.data = s.data, n.Item = a(i), r.htmlInit(n, t), c && c.bridget && c.bridget(t, n), n
	};
	var p = {
		ms: 1,
		s: 1e3
	};
	return s.Item = i, s
}),
function(t, e) {
	"function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, c) {
	var e = t.create("masonry");
	return e.compatOptions.fitWidth = "isFitWidth", e.prototype._resetLayout = function() {
		this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
		for (var t = 0; t < this.cols; t++) this.colYs.push(0);
		this.maxY = 0
	}, e.prototype.measureColumns = function() {
		var t, e;
		this.getContainerWidth(), this.columnWidth || (e = (t = this.items[0]) && t.element, this.columnWidth = e && c(e).outerWidth || this.containerWidth);
		var n = this.columnWidth += this.gutter,
			i = this.containerWidth + this.gutter,
			o = i / n,
			r = n - i % n,
			o = Math[r && r < 1 ? "round" : "floor"](o);
		this.cols = Math.max(o, 1)
	}, e.prototype.getContainerWidth = function() {
		var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
			e = c(t);
		this.containerWidth = e && e.innerWidth
	}, e.prototype._getItemLayoutPosition = function(t) {
		t.getSize();
		for (var e = t.size.outerWidth % this.columnWidth, n = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth), n = Math.min(n, this.cols), i = this._getColGroup(n), o = Math.min.apply(Math, i), r = i.indexOf(o), s = {
				x: this.columnWidth * r,
				y: o
			}, a = o + t.size.outerHeight, l = this.cols + 1 - i.length, c = 0; c < l; c++) this.colYs[r + c] = a;
		return s
	}, e.prototype._getColGroup = function(t) {
		if (t < 2) return this.colYs;
		for (var e = [], n = this.cols + 1 - t, i = 0; i < n; i++) {
			var o = this.colYs.slice(i, i + t);
			e[i] = Math.max.apply(Math, o)
		}
		return e
	}, e.prototype._manageStamp = function(t) {
		var e = c(t),
			n = this._getElementOffset(t),
			i = this._getOption("originLeft") ? n.left : n.right,
			o = i + e.outerWidth,
			r = Math.floor(i / this.columnWidth),
			r = Math.max(0, r),
			s = Math.floor(o / this.columnWidth);
		s -= o % this.columnWidth ? 0 : 1, s = Math.min(this.cols - 1, s);
		for (var a = (this._getOption("originTop") ? n.top : n.bottom) + e.outerHeight, l = r; l <= s; l++) this.colYs[l] = Math.max(a, this.colYs[l])
	}, e.prototype._getContainerSize = function() {
		this.maxY = Math.max.apply(Math, this.colYs);
		var t = {
			height: this.maxY
		};
		return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
	}, e.prototype._getContainerFitWidth = function() {
		for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
		return (this.cols - t) * this.columnWidth - this.gutter
	}, e.prototype.needsResizeLayout = function() {
		var t = this.containerWidth;
		return this.getContainerWidth(), t != this.containerWidth
	}, e
}), window.Modernizr = function(t, d, r) {
		function e(t) {
			c.cssText = t
		}

		function s(t, e) {
			return typeof t === e
		}

		function a(t, e) {
			for (var n in t) {
				var i = t[n];
				if (!~("" + i).indexOf("-") && c[i] !== r) return "pfx" != e || i
			}
			return !1
		}

		function i(t, e, n) {
			var i = t.charAt(0).toUpperCase() + t.slice(1),
				o = (t + " " + m.join(i + " ") + i).split(" ");
			return s(e, "string") || void 0 === e ? a(o, e) : function(t, e, n) {
				for (var i in t) {
					var o = e[t[i]];
					if (o !== r) return !1 === n ? t[i] : s(o, "function") ? o.bind(n || e) : o
				}
				return !1
			}(o = (t + " " + g.join(i + " ") + i).split(" "), e, n)
		}

		function o(t, e, n, i) {
			var o, r, s, a, l = d.createElement("div"),
				c = d.body,
				u = c || d.createElement("body");
			if (parseInt(n, 10))
				for (; n--;)(s = d.createElement("div")).id = i ? i[n] : p + (n + 1), l.appendChild(s);
			return o = ["&#173;", '<style id="s', p, '">', t, "</style>"].join(""), l.id = p, (c ? l : u).innerHTML += o, u.appendChild(l), c || (u.style.background = "", u.style.overflow = "hidden", a = h.style.overflow, h.style.overflow = "hidden", h.appendChild(u)), r = e(l, t), c ? l.parentNode.removeChild(l) : (u.parentNode.removeChild(u), h.style.overflow = a), !!r
		}
		var n, l = {},
			h = d.documentElement,
			p = "modernizr",
			c = d.createElement(p).style,
			u = " -webkit- -moz- -o- -ms- ".split(" "),
			f = "Webkit Moz O ms",
			m = f.split(" "),
			g = f.toLowerCase().split(" "),
			v = {},
			y = [],
			b = y.slice,
			w = {}.hasOwnProperty,
			x = void 0 !== w && void 0 !== w.call ? function(t, e) {
				return w.call(t, e)
			} : function(t, e) {
				return e in t && void 0 === t.constructor.prototype[e]
			};
		for (var _ in Function.prototype.bind || (Function.prototype.bind = function(i) {
				var o = this;
				if ("function" != typeof o) throw new TypeError;
				var r = b.call(arguments, 1),
					s = function() {
						if (this instanceof s) {
							function t() {}
							t.prototype = o.prototype;
							var e = new t,
								n = o.apply(e, r.concat(b.call(arguments)));
							return Object(n) === n ? n : e
						}
						return o.apply(i, r.concat(b.call(arguments)))
					};
				return s
			}), v.touch = function() {
				var e;
				return "ontouchstart" in t || t.DocumentTouch && d instanceof DocumentTouch ? e = !0 : o(["@media (", u.join("touch-enabled),("), p, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(t) {
					e = 9 === t.offsetTop
				}), e
			}, v.cssanimations = function() {
				return i("animationName")
			}, v.csstransforms = function() {
				return !!i("transform")
			}, v.csstransforms3d = function() {
				var n = !!i("perspective");
				return n && "webkitPerspective" in h.style && o("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t, e) {
					n = 9 === t.offsetLeft && 3 === t.offsetHeight
				}), n
			}, v.csstransitions = function() {
				return i("transition")
			}, v) x(v, _) && (n = _.toLowerCase(), l[n] = v[_](), y.push((l[n] ? "" : "no-") + n));
		return l.addTest = function(t, e) {
				if ("object" == typeof t)
					for (var n in t) x(t, n) && l.addTest(n, t[n]);
				else {
					if (t = t.toLowerCase(), l[t] !== r) return l;
					e = "function" == typeof e ? e() : e, h.className += " " + (e ? "" : "no-") + t, l[t] = e
				}
				return l
			}, e(""), 0,
			function(t, l) {
				function c() {
					var t = f.elements;
					return "string" == typeof t ? t.split(" ") : t
				}

				function u(t) {
					var e = a[t[i]];
					return e || (e = {}, s++, t[i] = s, a[s] = e), e
				}

				function d(t, e, n) {
					return e = e || l, p ? e.createElement(t) : !(i = (n = n || u(e)).cache[t] ? n.cache[t].cloneNode() : r.test(t) ? (n.cache[t] = n.createElem(t)).cloneNode() : n.createElem(t)).canHaveChildren || o.test(t) || i.tagUrn ? i : n.frag.appendChild(i);
					var i
				}

				function e(t) {
					var e, n, i, o, r, s, a = u(t = t || l);
					return !f.shivCSS || h || a.hasCSS || (a.hasCSS = (o = "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}", r = (i = t).createElement("p"), s = i.getElementsByTagName("head")[0] || i.documentElement, r.innerHTML = "x<style>" + o + "</style>", !!s.insertBefore(r.lastChild, s.firstChild))), p || (e = t, (n = a).cache || (n.cache = {}, n.createElem = e.createElement, n.createFrag = e.createDocumentFragment, n.frag = n.createFrag()), e.createElement = function(t) {
						return f.shivMethods ? d(t, e, n) : n.createElem(t)
					}, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + c().join().replace(/[\w\-]+/g, function(t) {
						return n.createElem(t), n.frag.createElement(t), 'c("' + t + '")'
					}) + ");return n}")(f, n.frag)), t
				}
				var h, p, n = t.html5 || {},
					o = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
					r = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
					i = "_html5shiv",
					s = 0,
					a = {};
				! function() {
					try {
						var t = l.createElement("a");
						t.innerHTML = "<xyz></xyz>", h = "hidden" in t, p = 1 == t.childNodes.length || function() {
							l.createElement("a");
							var t = l.createDocumentFragment();
							return void 0 === t.cloneNode || void 0 === t.createDocumentFragment || void 0 === t.createElement
						}()
					} catch (t) {
						p = h = !0
					}
				}();
				var f = {
					elements: n.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
					version: "3.7.0",
					shivCSS: !1 !== n.shivCSS,
					supportsUnknownElements: p,
					shivMethods: !1 !== n.shivMethods,
					type: "default",
					shivDocument: e,
					createElement: d,
					createDocumentFragment: function(t, e) {
						if (t = t || l, p) return t.createDocumentFragment();
						for (var n = (e = e || u(t)).frag.cloneNode(), i = 0, o = c(), r = o.length; i < r; i++) n.createElement(o[i]);
						return n
					}
				};
				t.html5 = f, e(l)
			}(this, d), l._version = "2.8.3", l._prefixes = u, l._domPrefixes = g, l._cssomPrefixes = m, l.testProp = function(t) {
				return a([t])
			}, l.testAllProps = i, l.testStyles = o, l.prefixed = function(t, e, n) {
				return e ? i(t, e, n) : i(t, "pfx")
			}, h.className = h.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (" js " + y.join(" ")), l
	}(this, this.document),
	function(t, v) {
		function d(t) {
			return "[object Function]" == o.call(t)
		}

		function y(t) {
			return "string" == typeof t
		}

		function h() {}

		function b(t) {
			return !t || "loaded" == t || "complete" == t || "uninitialized" == t
		}

		function w() {
			var t = C.shift();
			T = 1, t ? t.t ? x(function() {
				("c" == t.t ? D.injectCss : D.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
			}, 0) : (t(), w()) : T = 0
		}

		function e(t, e, n, i, o) {
			return T = 0, e = e || "j", y(t) ? (s = "c" == e ? L : k, a = t, l = e, c = this.i++, u = n, d = i, h = (h = o) || D.errorTimeout, p = v.createElement(s), m = f = 0, g = {
				t: l,
				s: a,
				e: u,
				a: d,
				x: h
			}, 1 === I[a] && (m = 1, I[a] = []), "object" == s ? p.data = a : (p.src = a, p.type = s), p.width = p.height = "0", p.onerror = p.onload = p.onreadystatechange = function() {
				r.call(this, m)
			}, C.splice(c, 0, g), "img" != s && (m || 2 === I[a] ? (S.insertBefore(p, E ? null : _), x(r, h)) : I[a].push(p))) : (C.splice(this.i++, 0, t), 1 == C.length && w()), this;

			function r(t) {
				if (!f && b(p.readyState) && (g.r = f = 1, T || w(), p.onload = p.onreadystatechange = null, t))
					for (var e in "img" != s && x(function() {
							S.removeChild(p)
						}, 50), I[a]) I[a].hasOwnProperty(e) && I[a][e].onload()
			}
			var s, a, l, c, u, d, h, p, f, m, g
		}

		function a() {
			var t = D;
			return t.loader = {
				load: e,
				i: 0
			}, t
		}
		var n, i = v.documentElement,
			x = t.setTimeout,
			_ = v.getElementsByTagName("script")[0],
			o = {}.toString,
			C = [],
			T = 0,
			r = "MozAppearance" in i.style,
			E = r && !!v.createRange().compareNode,
			S = E ? i : _.parentNode,
			i = t.opera && "[object Opera]" == o.call(t.opera),
			i = !!v.attachEvent && !i,
			k = r ? "object" : i ? "script" : "img",
			L = i ? "script" : k,
			s = Array.isArray || function(t) {
				return "[object Array]" == o.call(t)
			},
			l = [],
			I = {},
			c = {
				timeout: function(t, e) {
					return e.length && (t.timeout = e[0]), t
				}
			},
			D = function(t) {
				function u(t, e, n, i, o) {
					var r = function(t) {
							for (var e, n, t = t.split("!"), i = l.length, o = t.pop(), r = t.length, o = {
									url: o,
									origUrl: o,
									prefixes: t
								}, s = 0; s < r; s++) n = t[s].split("="), (e = c[n.shift()]) && (o = e(o, n));
							for (s = 0; s < i; s++) o = l[s](o);
							return o
						}(t),
						s = r.autoCallback;
					r.url.split(".").pop().split("?").shift(), r.bypass || (e = e && (d(e) ? e : e[t] || e[i] || e[t.split("/").pop().split("?")[0]]), r.instead ? r.instead(t, e, n, i, o) : (I[r.url] ? r.noexec = !0 : I[r.url] = 1, n.load(r.url, r.forceCSS || !r.forceJS && "css" == r.url.split(".").pop().split("?").shift() ? "c" : void 0, r.noexec, r.attrs, r.timeout), (d(e) || d(s)) && n.load(function() {
						a(), e && e(r.origUrl, o, i), s && s(r.origUrl, o, i), I[r.url] = 2
					})))
				}

				function e(t, e) {
					function n(n, t) {
						if (n) {
							if (y(n)) t || (a = function() {
								var t = [].slice.call(arguments);
								l.apply(this, t), c()
							}), u(n, a, e, 0, r);
							else if (Object(n) === n)
								for (o in i = function() {
										var t, e = 0;
										for (t in n) n.hasOwnProperty(t) && e++;
										return e
									}(), n) n.hasOwnProperty(o) && (t || --i || (d(a) ? a = function() {
									var t = [].slice.call(arguments);
									l.apply(this, t), c()
								} : a[o] = function(e) {
									return function() {
										var t = [].slice.call(arguments);
										e && e.apply(this, t), c()
									}
								}(l[o])), u(n[o], a, e, o, r))
						} else t || c()
					}
					var i, o, r = !!t.test,
						s = t.load || t.both,
						a = t.callback || h,
						l = a,
						c = t.complete || h;
					n(r ? t.yep : t.nope, !!s), s && n(s)
				}
				var n, i, o = this.yepnope.loader;
				if (y(t)) u(t, 0, o, 0);
				else if (s(t))
					for (n = 0; n < t.length; n++) y(i = t[n]) ? u(i, 0, o, 0) : s(i) ? D(i) : Object(i) === i && e(i, o);
				else Object(t) === t && e(t, o)
			};
		D.addPrefix = function(t, e) {
			c[t] = e
		}, D.addFilter = function(t) {
			l.push(t)
		}, D.errorTimeout = 1e4, null == v.readyState && v.addEventListener && (v.readyState = "loading", v.addEventListener("DOMContentLoaded", n = function() {
			v.removeEventListener("DOMContentLoaded", n, 0), v.readyState = "complete"
		}, 0)), t.yepnope = a(), t.yepnope.executeStack = w, t.yepnope.injectJs = function(t, e, n, i, o, r) {
			var s, a, l = v.createElement("script"),
				i = i || D.errorTimeout;
			for (a in l.src = t, n) l.setAttribute(a, n[a]);
			e = r ? w : e || h, l.onreadystatechange = l.onload = function() {
				!s && b(l.readyState) && (s = 1, e(), l.onload = l.onreadystatechange = null)
			}, x(function() {
				s || e(s = 1)
			}, i), o ? l.onload() : _.parentNode.insertBefore(l, _)
		}, t.yepnope.injectCss = function(t, e, n, i, o, r) {
			var s, i = v.createElement("link"),
				e = r ? w : e || h;
			for (s in i.href = t, i.rel = "stylesheet", i.type = "text/css", n) i.setAttribute(s, n[s]);
			o || (_.parentNode.insertBefore(i, _), x(e, 0))
		}
	}(this, document), Modernizr.load = function() {
		yepnope.apply(window, [].slice.call(arguments, 0))
	},
	function(l, n, o, r) {
		function c(t, e) {
			this.settings = null, this.options = l.extend({}, c.Defaults, e), this.$element = l(t), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
				time: null,
				target: null,
				pointer: null,
				stage: {
					start: null,
					current: null
				},
				direction: null
			}, this._states = {
				current: {},
				tags: {
					initializing: ["busy"],
					animating: ["busy"],
					dragging: ["interacting"]
				}
			}, l.each(["onResize", "onThrottledResize"], l.proxy(function(t, e) {
				this._handlers[e] = l.proxy(this[e], this)
			}, this)), l.each(c.Plugins, l.proxy(function(t, e) {
				this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
			}, this)), l.each(c.Workers, l.proxy(function(t, e) {
				this._pipe.push({
					filter: e.filter,
					run: l.proxy(e.run, this)
				})
			}, this)), this.setup(), this.initialize()
		}
		c.Defaults = {
			items: 3,
			loop: !1,
			center: !1,
			rewind: !1,
			mouseDrag: !0,
			touchDrag: !0,
			pullDrag: !0,
			freeDrag: !1,
			margin: 0,
			stagePadding: 0,
			merge: !1,
			mergeFit: !0,
			autoWidth: !1,
			startPosition: 0,
			rtl: !1,
			smartSpeed: 250,
			fluidSpeed: !1,
			dragEndSpeed: !1,
			responsive: {},
			responsiveRefreshRate: 200,
			responsiveBaseElement: n,
			fallbackEasing: "swing",
			info: !1,
			nestedItemSelector: !1,
			itemElement: "div",
			stageElement: "div",
			refreshClass: "owl-refresh",
			loadedClass: "owl-loaded",
			loadingClass: "owl-loading",
			rtlClass: "owl-rtl",
			responsiveClass: "owl-responsive",
			dragClass: "owl-drag",
			itemClass: "owl-item",
			stageClass: "owl-stage",
			stageOuterClass: "owl-stage-outer",
			grabClass: "owl-grab"
		}, c.Width = {
			Default: "default",
			Inner: "inner",
			Outer: "outer"
		}, c.Type = {
			Event: "event",
			State: "state"
		}, c.Plugins = {}, c.Workers = [{
			filter: ["width", "settings"],
			run: function() {
				this._width = this.$element.width()
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function(t) {
				t.current = this._items && this._items[this.relative(this._current)]
			}
		}, {
			filter: ["items", "settings"],
			run: function() {
				this.$stage.children(".cloned").remove()
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function(t) {
				var e = this.settings.margin || "",
					n = !this.settings.autoWidth,
					i = this.settings.rtl,
					o = {
						width: "auto",
						"margin-left": i ? e : "",
						"margin-right": i ? "" : e
					};
				n || this.$stage.children().css(o), t.css = o
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function(t) {
				var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
					n = null,
					i = this._items.length,
					o = !this.settings.autoWidth,
					r = [];
				for (t.items = {
						merge: !1,
						width: e
					}; i--;) n = this._mergers[i], n = this.settings.mergeFit && Math.min(n, this.settings.items) || n, t.items.merge = 1 < n || t.items.merge, r[i] = o ? e * n : this._items[i].width();
				this._widths = r
			}
		}, {
			filter: ["items", "settings"],
			run: function() {
				var t = [],
					e = this._items,
					n = this.settings,
					i = Math.max(2 * n.items, 4),
					o = 2 * Math.ceil(e.length / 2),
					r = n.loop && e.length ? n.rewind ? i : Math.max(i, o) : 0,
					s = "",
					a = "";
				for (r /= 2; r--;) t.push(this.normalize(t.length / 2, !0)), s += e[t[t.length - 1]][0].outerHTML, t.push(this.normalize(e.length - 1 - (t.length - 1) / 2, !0)), a = e[t[t.length - 1]][0].outerHTML + a;
				this._clones = t, l(s).addClass("cloned").appendTo(this.$stage), l(a).addClass("cloned").prependTo(this.$stage)
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function() {
				for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, n = -1, i = 0, o = 0, r = []; ++n < e;) i = r[n - 1] || 0, o = this._widths[this.relative(n)] + this.settings.margin, r.push(i + o * t);
				this._coordinates = r
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function() {
				var t = this.settings.stagePadding,
					e = this._coordinates,
					n = {
						width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
						"padding-left": t || "",
						"padding-right": t || ""
					};
				this.$stage.css(n)
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function(t) {
				var e = this._coordinates.length,
					n = !this.settings.autoWidth,
					i = this.$stage.children();
				if (n && t.items.merge)
					for (; e--;) t.css.width = this._widths[this.relative(e)], i.eq(e).css(t.css);
				else n && (t.css.width = t.items.width, i.css(t.css))
			}
		}, {
			filter: ["items"],
			run: function() {
				this._coordinates.length < 1 && this.$stage.removeAttr("style")
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function(t) {
				t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
			}
		}, {
			filter: ["position"],
			run: function() {
				this.animate(this.coordinates(this._current))
			}
		}, {
			filter: ["width", "position", "items", "settings"],
			run: function() {
				for (var t, e, n = this.settings.rtl ? 1 : -1, i = 2 * this.settings.stagePadding, o = this.coordinates(this.current()) + i, r = o + this.width() * n, s = [], a = 0, l = this._coordinates.length; a < l; a++) t = this._coordinates[a - 1] || 0, e = Math.abs(this._coordinates[a]) + i * n, (this.op(t, "<=", o) && this.op(t, ">", r) || this.op(e, "<", o) && this.op(e, ">", r)) && s.push(a);
				this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + s.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
			}
		}], c.prototype.initialize = function() {
			var t, e, n;
			this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading") && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : r, n = this.$element.children(e).width(), t.length && n <= 0 && this.preloadAutoWidthImages(t)), this.$element.addClass(this.options.loadingClass), this.$stage = l("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
		}, c.prototype.setup = function() {
			var e = this.viewport(),
				t = this.options.responsive,
				n = -1,
				i = null;
			t ? (l.each(t, function(t) {
				t <= e && n < t && (n = Number(t))
			}), "function" == typeof(i = l.extend({}, this.options, t[n])).stagePadding && (i.stagePadding = i.stagePadding()), delete i.responsive, i.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : i = l.extend({}, this.options), this.trigger("change", {
				property: {
					name: "settings",
					value: i
				}
			}), this._breakpoint = n, this.settings = i, this.invalidate("settings"), this.trigger("changed", {
				property: {
					name: "settings",
					value: this.settings
				}
			})
		}, c.prototype.optionsLogic = function() {
			this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
		}, c.prototype.prepare = function(t) {
			var e = this.trigger("prepare", {
				content: t
			});
			return e.data || (e.data = l("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", {
				content: e.data
			}), e.data
		}, c.prototype.update = function() {
			for (var t = 0, e = this._pipe.length, n = l.proxy(function(t) {
					return this[t]
				}, this._invalidated), i = {}; t < e;)(this._invalidated.all || 0 < l.grep(this._pipe[t].filter, n).length) && this._pipe[t].run(i), t++;
			this._invalidated = {}, this.is("valid") || this.enter("valid")
		}, c.prototype.width = function(t) {
			switch (t = t || c.Width.Default) {
				case c.Width.Inner:
				case c.Width.Outer:
					return this._width;
				default:
					return this._width - 2 * this.settings.stagePadding + this.settings.margin
			}
		}, c.prototype.refresh = function() {
			this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
		}, c.prototype.onThrottledResize = function() {
			n.clearTimeout(this.resizeTimer), this.resizeTimer = n.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
		}, c.prototype.onResize = function() {
			return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
		}, c.prototype.registerEventHandlers = function() {
			l.support.transition && this.$stage.on(l.support.transition.end + ".owl.core", l.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(n, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
				return !1
			})), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", l.proxy(this.onDragEnd, this)))
		}, c.prototype.onDragStart = function(t) {
			var e = null;
			3 !== t.which && (e = l.support.transform ? {
				x: (e = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === e.length ? 12 : 4],
				y: e[16 === e.length ? 13 : 5]
			} : (e = this.$stage.position(), {
				x: this.settings.rtl ? e.left + this.$stage.width() - this.width() + this.settings.margin : e.left,
				y: e.top
			}), this.is("animating") && (l.support.transform ? this.animate(e.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = l(t.target), this._drag.stage.start = e, this._drag.stage.current = e, this._drag.pointer = this.pointer(t), l(o).on("mouseup.owl.core touchend.owl.core", l.proxy(this.onDragEnd, this)), l(o).one("mousemove.owl.core touchmove.owl.core", l.proxy(function(t) {
				var e = this.difference(this._drag.pointer, this.pointer(t));
				l(o).on("mousemove.owl.core touchmove.owl.core", l.proxy(this.onDragMove, this)), Math.abs(e.x) < Math.abs(e.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"))
			}, this)))
		}, c.prototype.onDragMove = function(t) {
			var e = null,
				n = null,
				i = null,
				o = this.difference(this._drag.pointer, this.pointer(t)),
				r = this.difference(this._drag.stage.start, o);
			this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), n = this.coordinates(this.maximum() + 1) - e, r.x = ((r.x - e) % n + n) % n + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), n = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), i = this.settings.pullDrag ? -1 * o.x / 5 : 0, r.x = Math.max(Math.min(r.x, e + i), n + i)), this._drag.stage.current = r, this.animate(r.x))
		}, c.prototype.onDragEnd = function(t) {
			var e = this.difference(this._drag.pointer, this.pointer(t)),
				n = this._drag.stage.current,
				i = 0 < e.x ^ this.settings.rtl ? "left" : "right";
			l(o).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== e.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(n.x, 0 !== e.x ? i : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = i, (3 < Math.abs(e.x) || 300 < (new Date).getTime() - this._drag.time) && this._drag.target.one("click.owl.core", function() {
				return !1
			})), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
		}, c.prototype.closest = function(n, i) {
			var o = -1,
				r = this.width(),
				s = this.coordinates();
			return this.settings.freeDrag || l.each(s, l.proxy(function(t, e) {
				return "left" === i && e - 30 < n && n < e + 30 ? o = t : "right" === i && e - r - 30 < n && n < e - r + 30 ? o = t + 1 : this.op(n, "<", e) && this.op(n, ">", s[t + 1] || e - r) && (o = "left" === i ? t + 1 : t), -1 === o
			}, this)), this.settings.loop || (this.op(n, ">", s[this.minimum()]) ? o = n = this.minimum() : this.op(n, "<", s[this.maximum()]) && (o = n = this.maximum())), o
		}, c.prototype.animate = function(t) {
			var e = 0 < this.speed();
			this.is("animating") && this.onTransitionEnd(), e && (this.enter("animating"), this.trigger("translate")), l.support.transform3d && l.support.transition ? this.$stage.css({
				transform: "translate3d(" + t + "px,0px,0px)",
				transition: this.speed() / 1e3 + "s"
			}) : e ? this.$stage.animate({
				left: t + "px"
			}, this.speed(), this.settings.fallbackEasing, l.proxy(this.onTransitionEnd, this)) : this.$stage.css({
				left: t + "px"
			})
		}, c.prototype.is = function(t) {
			return this._states.current[t] && 0 < this._states.current[t]
		}, c.prototype.current = function(t) {
			return t === r ? this._current : 0 === this._items.length ? r : (t = this.normalize(t), this._current !== t && ((e = this.trigger("change", {
				property: {
					name: "position",
					value: t
				}
			})).data !== r && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
				property: {
					name: "position",
					value: this._current
				}
			})), this._current);
			var e
		}, c.prototype.invalidate = function(t) {
			return "string" === l.type(t) && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")), l.map(this._invalidated, function(t, e) {
				return e
			})
		}, c.prototype.reset = function(t) {
			(t = this.normalize(t)) !== r && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
		}, c.prototype.normalize = function(t, e) {
			var n = this._items.length,
				i = e ? 0 : this._clones.length;
			return !this.isNumeric(t) || n < 1 ? t = r : (t < 0 || n + i <= t) && (t = ((t - i / 2) % n + n) % n + i / 2), t
		}, c.prototype.relative = function(t) {
			return t -= this._clones.length / 2, this.normalize(t, !0)
		}, c.prototype.maximum = function(t) {
			var e, n, i, o = this.settings,
				r = this._coordinates.length;
			if (o.loop) r = this._clones.length / 2 + this._items.length - 1;
			else if (o.autoWidth || o.merge) {
				for (e = this._items.length, n = this._items[--e].width(), i = this.$element.width(); e-- && !(i < (n += this._items[e].width() + this.settings.margin)););
				r = e + 1
			} else r = o.center ? this._items.length - 1 : this._items.length - o.items;
			return t && (r -= this._clones.length / 2), Math.max(r, 0)
		}, c.prototype.minimum = function(t) {
			return t ? 0 : this._clones.length / 2
		}, c.prototype.items = function(t) {
			return t === r ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
		}, c.prototype.mergers = function(t) {
			return t === r ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
		}, c.prototype.clones = function(n) {
			function i(t) {
				return t % 2 == 0 ? o + t / 2 : e - (t + 1) / 2
			}
			var e = this._clones.length / 2,
				o = e + this._items.length;
			return n === r ? l.map(this._clones, function(t, e) {
				return i(e)
			}) : l.map(this._clones, function(t, e) {
				return t === n ? i(e) : null
			})
		}, c.prototype.speed = function(t) {
			return t !== r && (this._speed = t), this._speed
		}, c.prototype.coordinates = function(t) {
			var e, n = 1,
				i = t - 1;
			return t === r ? l.map(this._coordinates, l.proxy(function(t, e) {
				return this.coordinates(e)
			}, this)) : (this.settings.center ? (this.settings.rtl && (n = -1, i = t + 1), e = this._coordinates[t], e += (this.width() - e + (this._coordinates[i] || 0)) / 2 * n) : e = this._coordinates[i] || 0, e = Math.ceil(e))
		}, c.prototype.duration = function(t, e, n) {
			return 0 === n ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(n || this.settings.smartSpeed)
		}, c.prototype.to = function(t, e) {
			var n = this.current(),
				i = null,
				o = t - this.relative(n),
				r = (0 < o) - (o < 0),
				s = this._items.length,
				a = this.minimum(),
				l = this.maximum();
			this.settings.loop ? (!this.settings.rewind && Math.abs(o) > s / 2 && (o += -1 * r * s), (i = (((t = n + o) - a) % s + s) % s + a) !== t && i - o <= l && 0 < i - o && (n = i - o, t = i, this.reset(n))) : t = this.settings.rewind ? (t % (l += 1) + l) % l : Math.max(a, Math.min(l, t)), this.speed(this.duration(n, t, e)), this.current(t), this.$element.is(":visible") && this.update()
		}, c.prototype.next = function(t) {
			t = t || !1, this.to(this.relative(this.current()) + 1, t)
		}, c.prototype.prev = function(t) {
			t = t || !1, this.to(this.relative(this.current()) - 1, t)
		}, c.prototype.onTransitionEnd = function(t) {
			if (t !== r && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
			this.leave("animating"), this.trigger("translated")
		}, c.prototype.viewport = function() {
			var t;
			return this.options.responsiveBaseElement !== n ? t = l(this.options.responsiveBaseElement).width() : n.innerWidth ? t = n.innerWidth : o.documentElement && o.documentElement.clientWidth ? t = o.documentElement.clientWidth : console.warn("Can not detect viewport width."), t
		}, c.prototype.replace = function(t) {
			this.$stage.empty(), this._items = [], t = t && (t instanceof jQuery ? t : l(t)), this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)), t.filter(function() {
				return 1 === this.nodeType
			}).each(l.proxy(function(t, e) {
				e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(+e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
			}, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
		}, c.prototype.add = function(t, e) {
			var n = this.relative(this._current);
			e = e === r ? this._items.length : this.normalize(e, !0), t = t instanceof jQuery ? t : l(t), this.trigger("add", {
				content: t,
				position: e
			}), t = this.prepare(t), 0 === this._items.length || e === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[e - 1].after(t), this._items.push(t), this._mergers.push(+t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, +t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[n] && this.reset(this._items[n].index()), this.invalidate("items"), this.trigger("added", {
				content: t,
				position: e
			})
		}, c.prototype.remove = function(t) {
			(t = this.normalize(t, !0)) !== r && (this.trigger("remove", {
				content: this._items[t],
				position: t
			}), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
				content: null,
				position: t
			}))
		}, c.prototype.preloadAutoWidthImages = function(t) {
			t.each(l.proxy(function(t, e) {
				this.enter("pre-loading"), e = l(e), l(new Image).one("load", l.proxy(function(t) {
					e.attr("src", t.target.src), e.css("opacity", 1), this.leave("pre-loading"), this.is("pre-loading") || this.is("initializing") || this.refresh()
				}, this)).attr("src", e.attr("src") || e.attr("data-src") || e.attr("data-src-retina"))
			}, this))
		}, c.prototype.destroy = function() {
			for (var t in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), l(o).off(".owl.core"), !1 !== this.settings.responsive && (n.clearTimeout(this.resizeTimer), this.off(n, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[t].destroy();
			this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
		}, c.prototype.op = function(t, e, n) {
			var i = this.settings.rtl;
			switch (e) {
				case "<":
					return i ? n < t : t < n;
				case ">":
					return i ? t < n : n < t;
				case ">=":
					return i ? t <= n : n <= t;
				case "<=":
					return i ? n <= t : t <= n
			}
		}, c.prototype.on = function(t, e, n, i) {
			t.addEventListener ? t.addEventListener(e, n, i) : t.attachEvent && t.attachEvent("on" + e, n)
		}, c.prototype.off = function(t, e, n, i) {
			t.removeEventListener ? t.removeEventListener(e, n, i) : t.detachEvent && t.detachEvent("on" + e, n)
		}, c.prototype.trigger = function(t, e, n, i, o) {
			var r = {
					item: {
						count: this._items.length,
						index: this.current()
					}
				},
				s = l.camelCase(l.grep(["on", t, n], function(t) {
					return t
				}).join("-").toLowerCase()),
				a = l.Event([t, "owl", n || "carousel"].join(".").toLowerCase(), l.extend({
					relatedTarget: this
				}, r, e));
			return this._supress[t] || (l.each(this._plugins, function(t, e) {
				e.onTrigger && e.onTrigger(a)
			}), this.register({
				type: c.Type.Event,
				name: t
			}), this.$element.trigger(a), this.settings && "function" == typeof this.settings[s] && this.settings[s].call(this, a)), a
		}, c.prototype.enter = function(t) {
			l.each([t].concat(this._states.tags[t] || []), l.proxy(function(t, e) {
				this._states.current[e] === r && (this._states.current[e] = 0), this._states.current[e]++
			}, this))
		}, c.prototype.leave = function(t) {
			l.each([t].concat(this._states.tags[t] || []), l.proxy(function(t, e) {
				this._states.current[e]--
			}, this))
		}, c.prototype.register = function(n) {
			var e;
			n.type === c.Type.Event ? (l.event.special[n.name] || (l.event.special[n.name] = {}), l.event.special[n.name].owl || (e = l.event.special[n.name]._default, l.event.special[n.name]._default = function(t) {
				return !e || !e.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && -1 < t.namespace.indexOf("owl") : e.apply(this, arguments)
			}, l.event.special[n.name].owl = !0)) : n.type === c.Type.State && (this._states.tags[n.name] ? this._states.tags[n.name] = this._states.tags[n.name].concat(n.tags) : this._states.tags[n.name] = n.tags, this._states.tags[n.name] = l.grep(this._states.tags[n.name], l.proxy(function(t, e) {
				return l.inArray(t, this._states.tags[n.name]) === e
			}, this)))
		}, c.prototype.suppress = function(t) {
			l.each(t, l.proxy(function(t, e) {
				this._supress[e] = !0
			}, this))
		}, c.prototype.release = function(t) {
			l.each(t, l.proxy(function(t, e) {
				delete this._supress[e]
			}, this))
		}, c.prototype.pointer = function(t) {
			var e = {
				x: null,
				y: null
			};
			return (t = (t = t.originalEvent || t || n.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (e.x = t.pageX, e.y = t.pageY) : (e.x = t.clientX, e.y = t.clientY), e
		}, c.prototype.isNumeric = function(t) {
			return !isNaN(parseFloat(t))
		}, c.prototype.difference = function(t, e) {
			return {
				x: t.x - e.x,
				y: t.y - e.y
			}
		}, l.fn.owlCarousel = function(e) {
			var i = Array.prototype.slice.call(arguments, 1);
			return this.each(function() {
				var t = l(this),
					n = t.data("owl.carousel");
				n || (n = new c(this, "object" == typeof e && e), t.data("owl.carousel", n), l.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(t, e) {
					n.register({
						type: c.Type.Event,
						name: e
					}), n.$element.on(e + ".owl.carousel.core", l.proxy(function(t) {
						t.namespace && t.relatedTarget !== this && (this.suppress([e]), n[e].apply(this, [].slice.call(arguments, 1)), this.release([e]))
					}, n))
				})), "string" == typeof e && "_" !== e.charAt(0) && n[e].apply(n, i)
			})
		}, l.fn.owlCarousel.Constructor = c
	}(window.Zepto || window.jQuery, window, document),
	function(e, n) {
		var i = function(t) {
			this._core = t, this._interval = null, this._visible = null, this._handlers = {
				"initialized.owl.carousel": e.proxy(function(t) {
					t.namespace && this._core.settings.autoRefresh && this.watch()
				}, this)
			}, this._core.options = e.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
		};
		i.Defaults = {
			autoRefresh: !0,
			autoRefreshInterval: 500
		}, i.prototype.watch = function() {
			this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = n.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
		}, i.prototype.refresh = function() {
			this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
		}, i.prototype.destroy = function() {
			var t, e;
			for (t in n.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
			for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
		}, e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = i
	}(window.Zepto || window.jQuery, window, document),
	function(a, r) {
		var e = function(t) {
			this._core = t, this._loaded = [], this._handlers = {
				"initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(t) {
					if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type))
						for (var e = this._core.settings, n = e.center && Math.ceil(e.items / 2) || e.items, i = e.center && -1 * n || 0, o = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + i, r = this._core.clones().length, s = a.proxy(function(t, e) {
								this.load(e)
							}, this); i++ < n;) this.load(r / 2 + this._core.relative(o)), r && a.each(this._core.clones(this._core.relative(o)), s), o++
				}, this)
			}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
		};
		e.Defaults = {
			lazyLoad: !1
		}, e.prototype.load = function(t) {
			var e = this._core.$stage.children().eq(t),
				n = e && e.find(".owl-lazy");
			!n || -1 < a.inArray(e.get(0), this._loaded) || (n.each(a.proxy(function(t, e) {
				var n, i = a(e),
					o = 1 < r.devicePixelRatio && i.attr("data-src-retina") || i.attr("data-src");
				this._core.trigger("load", {
					element: i,
					url: o
				}, "lazy"), i.is("img") ? i.one("load.owl.lazy", a.proxy(function() {
					i.css("opacity", 1), this._core.trigger("loaded", {
						element: i,
						url: o
					}, "lazy")
				}, this)).attr("src", o) : ((n = new Image).onload = a.proxy(function() {
					i.css({
						"background-image": 'url("' + o + '")',
						opacity: "1"
					}), this._core.trigger("loaded", {
						element: i,
						url: o
					}, "lazy")
				}, this), n.src = o)
			}, this)), this._loaded.push(e.get(0)))
		}, e.prototype.destroy = function() {
			var t, e;
			for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
			for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
		}, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
	}(window.Zepto || window.jQuery, window, document),
	function(r) {
		var e = function(t) {
			this._core = t, this._handlers = {
				"initialized.owl.carousel refreshed.owl.carousel": r.proxy(function(t) {
					t.namespace && this._core.settings.autoHeight && this.update()
				}, this),
				"changed.owl.carousel": r.proxy(function(t) {
					t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update()
				}, this),
				"loaded.owl.lazy": r.proxy(function(t) {
					t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
				}, this)
			}, this._core.options = r.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
		};
		e.Defaults = {
			autoHeight: !1,
			autoHeightClass: "owl-height"
		}, e.prototype.update = function() {
			var t, e = this._core._current,
				n = e + this._core.settings.items,
				i = this._core.$stage.children().toArray().slice(e, n),
				o = [];
			r.each(i, function(t, e) {
				o.push(r(e).height())
			}), t = Math.max.apply(null, o), this._core.$stage.parent().height(t).addClass(this._core.settings.autoHeightClass)
		}, e.prototype.destroy = function() {
			var t, e;
			for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
			for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
		}, r.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
	}(window.Zepto || window.jQuery, (window, document)),
	function(u, e) {
		var n = function(t) {
			this._core = t, this._videos = {}, this._playing = null, this._handlers = {
				"initialized.owl.carousel": u.proxy(function(t) {
					t.namespace && this._core.register({
						type: "state",
						name: "playing",
						tags: ["interacting"]
					})
				}, this),
				"resize.owl.carousel": u.proxy(function(t) {
					t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
				}, this),
				"refreshed.owl.carousel": u.proxy(function(t) {
					t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
				}, this),
				"changed.owl.carousel": u.proxy(function(t) {
					t.namespace && "position" === t.property.name && this._playing && this.stop()
				}, this),
				"prepared.owl.carousel": u.proxy(function(t) {
					var e;
					!t.namespace || (e = u(t.content).find(".owl-video")).length && (e.css("display", "none"), this.fetch(e, u(t.content)))
				}, this)
			}, this._core.options = u.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", u.proxy(function(t) {
				this.play(t)
			}, this))
		};
		n.Defaults = {
			video: !1,
			videoHeight: !1,
			videoWidth: !1
		}, n.prototype.fetch = function(t, e) {
			var n = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
				i = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
				o = t.attr("data-width") || this._core.settings.videoWidth,
				r = t.attr("data-height") || this._core.settings.videoHeight,
				s = t.attr("href");
			if (!s) throw new Error("Missing video URL.");
			if (-1 < (i = s.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")) n = "youtube";
			else if (-1 < i[3].indexOf("vimeo")) n = "vimeo";
			else {
				if (!(-1 < i[3].indexOf("vzaar"))) throw new Error("Video URL not supported.");
				n = "vzaar"
			}
			i = i[6], this._videos[s] = {
				type: n,
				id: i,
				width: o,
				height: r
			}, e.attr("data-video", s), this.thumbnail(t, this._videos[s])
		}, n.prototype.thumbnail = function(e, t) {
			function n(t) {
				i = c.lazyLoad ? '<div class="owl-video-tn ' + l + '" ' + a + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(i), e.after('<div class="owl-video-play-icon"></div>')
			}
			var i, o, r = t.width && t.height ? 'style="width:' + t.width + "px;height:" + t.height + 'px;"' : "",
				s = e.find("img"),
				a = "src",
				l = "",
				c = this._core.settings;
			if (e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (a = "data-src", l = "owl-lazy"), s.length) return n(s.attr(a)), s.remove(), !1;
			"youtube" === t.type ? (o = "//img.youtube.com/vi/" + t.id + "/hqdefault.jpg", n(o)) : "vimeo" === t.type ? u.ajax({
				type: "GET",
				url: "//vimeo.com/api/v2/video/" + t.id + ".json",
				jsonp: "callback",
				dataType: "jsonp",
				success: function(t) {
					o = t[0].thumbnail_large, n(o)
				}
			}) : "vzaar" === t.type && u.ajax({
				type: "GET",
				url: "//vzaar.com/api/videos/" + t.id + ".json",
				jsonp: "callback",
				dataType: "jsonp",
				success: function(t) {
					o = t.framegrab_url, n(o)
				}
			})
		}, n.prototype.stop = function() {
			this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
		}, n.prototype.play = function(t) {
			var e, n = u(t.target).closest("." + this._core.settings.itemClass),
				i = this._videos[n.attr("data-video")],
				o = i.width || "100%",
				r = i.height || this._core.$stage.height();
			this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), n = this._core.items(this._core.relative(n.index())), this._core.reset(n.index()), "youtube" === i.type ? e = '<iframe width="' + o + '" height="' + r + '" src="//www.youtube.com/embed/' + i.id + "?autoplay=1&rel=0&v=" + i.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === i.type ? e = '<iframe src="//player.vimeo.com/video/' + i.id + '?autoplay=1" width="' + o + '" height="' + r + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === i.type && (e = '<iframe frameborder="0"height="' + r + '"width="' + o + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + i.id + '/player?autoplay=true"></iframe>'), u('<div class="owl-video-frame">' + e + "</div>").insertAfter(n.find(".owl-video")), this._playing = n.addClass("owl-video-playing"))
		}, n.prototype.isInFullScreen = function() {
			var t = e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement;
			return t && u(t).parent().hasClass("owl-video-frame")
		}, n.prototype.destroy = function() {
			var t, e;
			for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
			for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
		}, u.fn.owlCarousel.Constructor.Plugins.Video = n
	}(window.Zepto || window.jQuery, (window, document)),
	function(s) {
		var e = function(t) {
			this.core = t, this.core.options = s.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
				"change.owl.carousel": s.proxy(function(t) {
					t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
				}, this),
				"drag.owl.carousel dragged.owl.carousel translated.owl.carousel": s.proxy(function(t) {
					t.namespace && (this.swapping = "translated" == t.type)
				}, this),
				"translate.owl.carousel": s.proxy(function(t) {
					t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
				}, this)
			}, this.core.$element.on(this.handlers)
		};
		e.Defaults = {
			animateOut: !1,
			animateIn: !1
		}, e.prototype.swap = function() {
			var t, e, n, i, o, r;
			1 === this.core.settings.items && s.support.animation && s.support.transition && (this.core.speed(0), e = s.proxy(this.clear, this), n = this.core.$stage.children().eq(this.previous), i = this.core.$stage.children().eq(this.next), o = this.core.settings.animateIn, r = this.core.settings.animateOut, this.core.current() !== this.previous && (r && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(s.support.animation.end, e).css({
				left: t + "px"
			}).addClass("animated owl-animated-out").addClass(r)), o && i.one(s.support.animation.end, e).addClass("animated owl-animated-in").addClass(o)))
		}, e.prototype.clear = function(t) {
			s(t.target).css({
				left: ""
			}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
		}, e.prototype.destroy = function() {
			var t, e;
			for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
			for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
		}, s.fn.owlCarousel.Constructor.Plugins.Animate = e
	}(window.Zepto || window.jQuery, (window, document)),
	function(n, i, o) {
		var e = function(t) {
			this._core = t, this._timeout = null, this._paused = !1, this._handlers = {
				"changed.owl.carousel": n.proxy(function(t) {
					t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
				}, this),
				"initialized.owl.carousel": n.proxy(function(t) {
					t.namespace && this._core.settings.autoplay && this.play()
				}, this),
				"play.owl.autoplay": n.proxy(function(t, e, n) {
					t.namespace && this.play(e, n)
				}, this),
				"stop.owl.autoplay": n.proxy(function(t) {
					t.namespace && this.stop()
				}, this),
				"mouseover.owl.autoplay": n.proxy(function() {
					this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
				}, this),
				"mouseleave.owl.autoplay": n.proxy(function() {
					this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
				}, this),
				"touchstart.owl.core": n.proxy(function() {
					this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
				}, this),
				"touchend.owl.core": n.proxy(function() {
					this._core.settings.autoplayHoverPause && this.play()
				}, this)
			}, this._core.$element.on(this._handlers), this._core.options = n.extend({}, e.Defaults, this._core.options)
		};
		e.Defaults = {
			autoplay: !1,
			autoplayTimeout: 5e3,
			autoplayHoverPause: !1,
			autoplaySpeed: !1
		}, e.prototype.play = function(t, e) {
			this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
		}, e.prototype._getNextTimeout = function(t, e) {
			return this._timeout && i.clearTimeout(this._timeout), i.setTimeout(n.proxy(function() {
				this._paused || this._core.is("busy") || this._core.is("interacting") || o.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
			}, this), t || this._core.settings.autoplayTimeout)
		}, e.prototype._setAutoPlayInterval = function() {
			this._timeout = this._getNextTimeout()
		}, e.prototype.stop = function() {
			this._core.is("rotating") && (i.clearTimeout(this._timeout), this._core.leave("rotating"))
		}, e.prototype.pause = function() {
			this._core.is("rotating") && (this._paused = !0)
		}, e.prototype.destroy = function() {
			var t, e;
			for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
			for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
		}, n.fn.owlCarousel.Constructor.Plugins.autoplay = e
	}(window.Zepto || window.jQuery, window, document),
	function(r) {
		"use strict";
		var e = function(t) {
			this._core = t, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
				next: this._core.next,
				prev: this._core.prev,
				to: this._core.to
			}, this._handlers = {
				"prepared.owl.carousel": r.proxy(function(t) {
					t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + r(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
				}, this),
				"added.owl.carousel": r.proxy(function(t) {
					t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
				}, this),
				"remove.owl.carousel": r.proxy(function(t) {
					t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
				}, this),
				"changed.owl.carousel": r.proxy(function(t) {
					t.namespace && "position" == t.property.name && this.draw()
				}, this),
				"initialized.owl.carousel": r.proxy(function(t) {
					t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
				}, this),
				"refreshed.owl.carousel": r.proxy(function(t) {
					t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
				}, this)
			}, this._core.options = r.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
		};
		e.Defaults = {
			nav: !1,
			navText: ["prev", "next"],
			navSpeed: !1,
			navElement: "div",
			navContainer: !1,
			navContainerClass: "owl-nav",
			navClass: ["owl-prev", "owl-next"],
			slideBy: 1,
			dotClass: "owl-dot",
			dotsClass: "owl-dots",
			dots: !0,
			dotsEach: !1,
			dotsData: !1,
			dotsSpeed: !1,
			dotsContainer: !1
		}, e.prototype.initialize = function() {
			var t, n = this._core.settings;
			for (t in this._controls.$relative = (n.navContainer ? r(n.navContainer) : r("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = r("<" + n.navElement + ">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click", r.proxy(function(t) {
					this.prev(n.navSpeed)
				}, this)), this._controls.$next = r("<" + n.navElement + ">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click", r.proxy(function(t) {
					this.next(n.navSpeed)
				}, this)), n.dotsData || (this._templates = [r("<div>").addClass(n.dotClass).append(r("<span>")).prop("outerHTML")]), this._controls.$absolute = (n.dotsContainer ? r(n.dotsContainer) : r("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", r.proxy(function(t) {
					var e = r(t.target).parent().is(this._controls.$absolute) ? r(t.target).index() : r(t.target).parent().index();
					t.preventDefault(), this.to(e, n.dotsSpeed)
				}, this)), this._overrides) this._core[t] = r.proxy(this[t], this)
		}, e.prototype.destroy = function() {
			var t, e, n, i;
			for (t in this._handlers) this.$element.off(t, this._handlers[t]);
			for (e in this._controls) this._controls[e].remove();
			for (i in this.overides) this._core[i] = this._overrides[i];
			for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
		}, e.prototype.update = function() {
			var t, e, n = this._core.clones().length / 2,
				i = n + this._core.items().length,
				o = this._core.maximum(!0),
				r = this._core.settings,
				s = r.center || r.autoWidth || r.dotsData ? 1 : r.dotsEach || r.items;
			if ("page" !== r.slideBy && (r.slideBy = Math.min(r.slideBy, r.items)), r.dots || "page" == r.slideBy)
				for (this._pages = [], t = n, e = 0; t < i; t++) {
					if (s <= e || 0 === e) {
						if (this._pages.push({
								start: Math.min(o, t - n),
								end: t - n + s - 1
							}), Math.min(o, t - n) === o) break;
						e = 0, 0
					}
					e += this._core.mergers(this._core.relative(t))
				}
		}, e.prototype.draw = function() {
			var t, e = this._core.settings,
				n = this._core.items().length <= e.items,
				i = this._core.relative(this._core.current()),
				o = e.loop || e.rewind;
			this._controls.$relative.toggleClass("disabled", !e.nav || n), e.nav && (this._controls.$previous.toggleClass("disabled", !o && i <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && i >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !e.dots || n), e.dots && (t = this._pages.length - this._controls.$absolute.children().length, e.dotsData && 0 != t ? this._controls.$absolute.html(this._templates.join("")) : 0 < t ? this._controls.$absolute.append(new Array(1 + t).join(this._templates[0])) : t < 0 && this._controls.$absolute.children().slice(t).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(r.inArray(this.current(), this._pages)).addClass("active"))
		}, e.prototype.onTrigger = function(t) {
			var e = this._core.settings;
			t.page = {
				index: r.inArray(this.current(), this._pages),
				count: this._pages.length,
				size: e && (e.center || e.autoWidth || e.dotsData ? 1 : e.dotsEach || e.items)
			}
		}, e.prototype.current = function() {
			var n = this._core.relative(this._core.current());
			return r.grep(this._pages, r.proxy(function(t, e) {
				return t.start <= n && t.end >= n
			}, this)).pop()
		}, e.prototype.getPosition = function(t) {
			var e, n, i = this._core.settings;
			return "page" == i.slideBy ? (e = r.inArray(this.current(), this._pages), n = this._pages.length, t ? ++e : --e, e = this._pages[(e % n + n) % n].start) : (e = this._core.relative(this._core.current()), n = this._core.items().length, t ? e += i.slideBy : e -= i.slideBy), e
		}, e.prototype.next = function(t) {
			r.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
		}, e.prototype.prev = function(t) {
			r.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
		}, e.prototype.to = function(t, e, n) {
			var i;
			!n && this._pages.length ? (i = this._pages.length, r.proxy(this._overrides.to, this._core)(this._pages[(t % i + i) % i].start, e)) : r.proxy(this._overrides.to, this._core)(t, e)
		}, r.fn.owlCarousel.Constructor.Plugins.Navigation = e
	}(window.Zepto || window.jQuery, (window, document)),
	function(i, o) {
		"use strict";
		var e = function(t) {
			this._core = t, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
				"initialized.owl.carousel": i.proxy(function(t) {
					t.namespace && "URLHash" === this._core.settings.startPosition && i(o).trigger("hashchange.owl.navigation")
				}, this),
				"prepared.owl.carousel": i.proxy(function(t) {
					if (t.namespace) {
						var e = i(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
						if (!e) return;
						this._hashes[e] = t.content
					}
				}, this),
				"changed.owl.carousel": i.proxy(function(t) {
					if (t.namespace && "position" === t.property.name) {
						var n = this._core.items(this._core.relative(this._core.current())),
							e = i.map(this._hashes, function(t, e) {
								return t === n ? e : null
							}).join();
						if (!e || o.location.hash.slice(1) === e) return;
						o.location.hash = e
					}
				}, this)
			}, this._core.options = i.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), i(o).on("hashchange.owl.navigation", i.proxy(function(t) {
				var e = o.location.hash.substring(1),
					n = this._core.$stage.children(),
					i = this._hashes[e] && n.index(this._hashes[e]);
				void 0 !== i && i !== this._core.current() && this._core.to(this._core.relative(i), !1, !0)
			}, this))
		};
		e.Defaults = {
			URLhashListener: !1
		}, e.prototype.destroy = function() {
			var t, e;
			for (t in i(o).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(t, this._handlers[t]);
			for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
		}, i.fn.owlCarousel.Constructor.Plugins.Hash = e
	}(window.Zepto || window.jQuery, window, document),
	function(o, r) {
		function e(t, n) {
			var i = !1,
				e = t.charAt(0).toUpperCase() + t.slice(1);
			return o.each((t + " " + a.join(e + " ") + e).split(" "), function(t, e) {
				if (s[e] !== r) return i = !n || e, !1
			}), i
		}

		function t(t) {
			return e(t, !0)
		}
		var s = o("<support>").get(0).style,
			a = "Webkit Moz O ms".split(" "),
			n = {
				transition: {
					end: {
						WebkitTransition: "webkitTransitionEnd",
						MozTransition: "transitionend",
						OTransition: "oTransitionEnd",
						transition: "transitionend"
					}
				},
				animation: {
					end: {
						WebkitAnimation: "webkitAnimationEnd",
						MozAnimation: "animationend",
						OAnimation: "oAnimationEnd",
						animation: "animationend"
					}
				}
			},
			i = function() {
				return !!e("transform")
			},
			l = function() {
				return !!e("perspective")
			},
			c = function() {
				return !!e("animation")
			};
		! function() {
			return !!e("transition")
		}() || (o.support.transition = new String(t("transition")), o.support.transition.end = n.transition.end[o.support.transition]), c() && (o.support.animation = new String(t("animation")), o.support.animation.end = n.animation.end[o.support.animation]), i() && (o.support.transform = new String(t("transform")), o.support.transform3d = l())
	}(window.Zepto || window.jQuery, (window, void document)),
	function r(s, a, l) {
		function c(n, t) {
			if (!a[n]) {
				if (!s[n]) {
					var e = "function" == typeof require && require;
					if (!t && e) return e(n, !0);
					if (u) return u(n, !0);
					var i = new Error("Cannot find module '" + n + "'");
					throw i.code = "MODULE_NOT_FOUND", i
				}
				var o = a[n] = {
					exports: {}
				};
				s[n][0].call(o.exports, function(t) {
					var e = s[n][1][t];
					return c(e || t)
				}, o, o.exports, r, s, a, l)
			}
			return a[n].exports
		}
		for (var u = "function" == typeof require && require, t = 0; t < l.length; t++) c(l[t]);
		return c
	}({
		1: [function(t, e, n) {
			"use strict";

			function i(t) {
				t.fn.perfectScrollbar = function(n) {
					return this.each(function() {
						var t, e;
						"object" == typeof n || void 0 === n ? (t = n, s.get(this) || r.initialize(this, t)) : "update" === (e = n) ? r.update(this) : "destroy" === e && r.destroy(this)
					})
				}
			}
			var o, r = t("../main"),
				s = t("../plugin/instances");
			"function" == typeof define && define.amd ? define(["jquery"], i) : void 0 !== (o = window.jQuery ? window.jQuery : window.$) && i(o), e.exports = i
		}, {
			"../main": 6,
			"../plugin/instances": 17
		}],
		2: [function(t, e, n) {
			"use strict";
			var i = {
				create: function(t, e) {
					var n = document.createElement(t);
					return n.className = e, n
				},
				appendTo: function(t, e) {
					return e.appendChild(t), t
				}
			};
			i.css = function(t, e, n) {
				return "object" == typeof e ? function(t, e) {
					for (var n in e) {
						var i = e[n];
						"number" == typeof i && (i = i.toString() + "px"), t.style[n] = i
					}
					return t
				}(t, e) : void 0 === n ? (s = t, a = e, window.getComputedStyle(s)[a]) : (i = t, o = e, "number" == typeof(r = n) && (r = r.toString() + "px"), i.style[o] = r, i);
				var i, o, r, s, a
			}, i.matches = function(t, e) {
				return void 0 !== t.matches ? t.matches(e) : t.msMatchesSelector(e)
			}, i.remove = function(t) {
				void 0 !== t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
			}, i.queryChildren = function(t, e) {
				return Array.prototype.filter.call(t.childNodes, function(t) {
					return i.matches(t, e)
				})
			}, e.exports = i
		}, {}],
		3: [function(t, e, n) {
			"use strict";

			function i(t) {
				this.element = t, this.events = {}
			}
			i.prototype.bind = function(t, e) {
				void 0 === this.events[t] && (this.events[t] = []), this.events[t].push(e), this.element.addEventListener(t, e, !1)
			}, i.prototype.unbind = function(e, n) {
				var i = void 0 !== n;
				this.events[e] = this.events[e].filter(function(t) {
					return !(!i || t === n) || (this.element.removeEventListener(e, t, !1), !1)
				}, this)
			}, i.prototype.unbindAll = function() {
				for (var t in this.events) this.unbind(t)
			};

			function o() {
				this.eventElements = []
			}
			o.prototype.eventElement = function(e) {
				var t = this.eventElements.filter(function(t) {
					return t.element === e
				})[0];
				return void 0 === t && (t = new i(e), this.eventElements.push(t)), t
			}, o.prototype.bind = function(t, e, n) {
				this.eventElement(t).bind(e, n)
			}, o.prototype.unbind = function(t, e, n) {
				this.eventElement(t).unbind(e, n)
			}, o.prototype.unbindAll = function() {
				for (var t = 0; t < this.eventElements.length; t++) this.eventElements[t].unbindAll()
			}, o.prototype.once = function(t, e, n) {
				var i = this.eventElement(t),
					o = function(t) {
						i.unbind(e, o), n(t)
					};
				i.bind(e, o)
			}, e.exports = o
		}, {}],
		4: [function(t, e, n) {
			"use strict";

			function i() {
				return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
			}
			e.exports = function() {
				return i() + i() + "-" + i() + "-" + i() + "-" + i() + "-" + i() + i() + i()
			}
		}, {}],
		5: [function(t, e, n) {
			"use strict";

			function o(t) {
				return ["ps--in-scrolling"].concat(void 0 === t ? ["ps--x", "ps--y"] : ["ps--" + t])
			}
			var i = t("./dom"),
				r = n.toInt = function(t) {
					return parseInt(t, 10) || 0
				};
			n.isEditable = function(t) {
				return i.matches(t, "input,[contenteditable]") || i.matches(t, "select,[contenteditable]") || i.matches(t, "textarea,[contenteditable]") || i.matches(t, "button,[contenteditable]")
			}, n.removePsClasses = function(t) {
				for (var e = 0; e < t.classList.length; e++) {
					var n = t.classList[e];
					0 === n.indexOf("ps-") && t.classList.remove(n)
				}
			}, n.outerWidth = function(t) {
				return r(i.css(t, "width")) + r(i.css(t, "paddingLeft")) + r(i.css(t, "paddingRight")) + r(i.css(t, "borderLeftWidth")) + r(i.css(t, "borderRightWidth"))
			}, n.startScrolling = function(t, e) {
				for (var n = o(e), i = 0; i < n.length; i++) t.classList.add(n[i])
			}, n.stopScrolling = function(t, e) {
				for (var n = o(e), i = 0; i < n.length; i++) t.classList.remove(n[i])
			}, n.env = {
				isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
				supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
				supportsIePointer: "undefined" != typeof window && null !== window.navigator.msMaxTouchPoints
			}
		}, {
			"./dom": 2
		}],
		6: [function(t, e, n) {
			"use strict";
			var i = t("./plugin/destroy"),
				o = t("./plugin/initialize"),
				r = t("./plugin/update");
			e.exports = {
				initialize: o,
				update: r,
				destroy: i
			}
		}, {
			"./plugin/destroy": 8,
			"./plugin/initialize": 16,
			"./plugin/update": 20
		}],
		7: [function(t, e, n) {
			"use strict";
			e.exports = function() {
				return {
					handlers: ["click-rail", "drag-scrollbar", "keyboard", "wheel", "touch"],
					maxScrollbarLength: null,
					minScrollbarLength: null,
					scrollXMarginOffset: 0,
					scrollYMarginOffset: 0,
					suppressScrollX: !1,
					suppressScrollY: !1,
					swipePropagation: !0,
					swipeEasing: !0,
					useBothWheelAxes: !1,
					wheelPropagation: !1,
					wheelSpeed: 1,
					theme: "default"
				}
			}
		}, {}],
		8: [function(t, e, n) {
			"use strict";
			var i = t("../lib/helper"),
				o = t("../lib/dom"),
				r = t("./instances");
			e.exports = function(t) {
				var e = r.get(t);
				e && (e.event.unbindAll(), o.remove(e.scrollbarX), o.remove(e.scrollbarY), o.remove(e.scrollbarXRail), o.remove(e.scrollbarYRail), i.removePsClasses(t), r.remove(t))
			}
		}, {
			"../lib/dom": 2,
			"../lib/helper": 5,
			"./instances": 17
		}],
		9: [function(t, e, n) {
			"use strict";

			function i(n, i) {
				function o(t) {
					return t.getBoundingClientRect()
				}

				function t(t) {
					t.stopPropagation()
				}
				i.event.bind(i.scrollbarY, "click", t), i.event.bind(i.scrollbarYRail, "click", function(t) {
					var e = t.pageY - window.pageYOffset - o(i.scrollbarYRail).top > i.scrollbarYTop ? 1 : -1;
					s(n, "top", n.scrollTop + e * i.containerHeight), r(n), t.stopPropagation()
				}), i.event.bind(i.scrollbarX, "click", t), i.event.bind(i.scrollbarXRail, "click", function(t) {
					var e = t.pageX - window.pageXOffset - o(i.scrollbarXRail).left > i.scrollbarXLeft ? 1 : -1;
					s(n, "left", n.scrollLeft + e * i.containerWidth), r(n), t.stopPropagation()
				})
			}
			var o = t("../instances"),
				r = t("../update-geometry"),
				s = t("../update-scroll");
			e.exports = function(t) {
				i(t, o.get(t))
			}
		}, {
			"../instances": 17,
			"../update-geometry": 18,
			"../update-scroll": 19
		}],
		10: [function(t, e, n) {
			"use strict";

			function i(o, r) {
				function e(t) {
					(function(t) {
						var e = s + t * r.railXRatio,
							n = Math.max(0, r.scrollbarXRail.getBoundingClientRect().left) + r.railXRatio * (r.railXWidth - r.scrollbarXWidth);
						r.scrollbarXLeft = e < 0 ? 0 : n < e ? n : e;
						var i = a.toInt(r.scrollbarXLeft * (r.contentWidth - r.containerWidth) / (r.containerWidth - r.railXRatio * r.scrollbarXWidth)) - r.negativeScrollAdjustment;
						u(o, "left", i)
					})(t.pageX - i), c(o), t.stopPropagation(), t.preventDefault()
				}

				function n() {
					a.stopScrolling(o, "x"), r.event.unbind(r.ownerDocument, "mousemove", e)
				}
				var s = null,
					i = null;
				r.event.bind(r.scrollbarX, "mousedown", function(t) {
					i = t.pageX, s = a.toInt(l.css(r.scrollbarX, "left")) * r.railXRatio, a.startScrolling(o, "x"), r.event.bind(r.ownerDocument, "mousemove", e), r.event.once(r.ownerDocument, "mouseup", n), t.stopPropagation(), t.preventDefault()
				})
			}

			function o(o, r) {
				function e(t) {
					(function(t) {
						var e = s + t * r.railYRatio,
							n = Math.max(0, r.scrollbarYRail.getBoundingClientRect().top) + r.railYRatio * (r.railYHeight - r.scrollbarYHeight);
						r.scrollbarYTop = e < 0 ? 0 : n < e ? n : e;
						var i = a.toInt(r.scrollbarYTop * (r.contentHeight - r.containerHeight) / (r.containerHeight - r.railYRatio * r.scrollbarYHeight));
						u(o, "top", i)
					})(t.pageY - i), c(o), t.stopPropagation(), t.preventDefault()
				}

				function n() {
					a.stopScrolling(o, "y"), r.event.unbind(r.ownerDocument, "mousemove", e)
				}
				var s = null,
					i = null;
				r.event.bind(r.scrollbarY, "mousedown", function(t) {
					i = t.pageY, s = a.toInt(l.css(r.scrollbarY, "top")) * r.railYRatio, a.startScrolling(o, "y"), r.event.bind(r.ownerDocument, "mousemove", e), r.event.once(r.ownerDocument, "mouseup", n), t.stopPropagation(), t.preventDefault()
				})
			}
			var a = t("../../lib/helper"),
				l = t("../../lib/dom"),
				r = t("../instances"),
				c = t("../update-geometry"),
				u = t("../update-scroll");
			e.exports = function(t) {
				var e = r.get(t);
				i(t, e), o(t, e)
			}
		}, {
			"../../lib/dom": 2,
			"../../lib/helper": 5,
			"../instances": 17,
			"../update-geometry": 18,
			"../update-scroll": 19
		}],
		11: [function(t, e, n) {
			"use strict";

			function i(r, s) {
				var a = !1;
				s.event.bind(r, "mouseenter", function() {
					a = !0
				}), s.event.bind(r, "mouseleave", function() {
					a = !1
				});
				s.event.bind(s.ownerDocument, "keydown", function(t) {
					if (!(t.isDefaultPrevented && t.isDefaultPrevented() || t.defaultPrevented)) {
						var e = c.matches(s.scrollbarX, ":focus") || c.matches(s.scrollbarY, ":focus");
						if (a || e) {
							var n = document.activeElement ? document.activeElement : s.ownerDocument.activeElement;
							if (n) {
								if ("IFRAME" === n.tagName) n = n.contentDocument.activeElement;
								else
									for (; n.shadowRoot;) n = n.shadowRoot.activeElement;
								if (l.isEditable(n)) return
							}
							var i = 0,
								o = 0;
							switch (t.which) {
								case 37:
									i = t.metaKey ? -s.contentWidth : t.altKey ? -s.containerWidth : -30;
									break;
								case 38:
									o = t.metaKey ? s.contentHeight : t.altKey ? s.containerHeight : 30;
									break;
								case 39:
									i = t.metaKey ? s.contentWidth : t.altKey ? s.containerWidth : 30;
									break;
								case 40:
									o = t.metaKey ? -s.contentHeight : t.altKey ? -s.containerHeight : -30;
									break;
								case 33:
									o = 90;
									break;
								case 32:
									o = t.shiftKey ? 90 : -90;
									break;
								case 34:
									o = -90;
									break;
								case 35:
									o = t.ctrlKey ? -s.contentHeight : -s.containerHeight;
									break;
								case 36:
									o = t.ctrlKey ? r.scrollTop : s.containerHeight;
									break;
								default:
									return
							}
							d(r, "top", r.scrollTop - o), d(r, "left", r.scrollLeft + i), u(r),
								function(t, e) {
									var n = r.scrollTop;
									if (0 === t) {
										if (!s.scrollbarYActive) return !1;
										if (0 === n && 0 < e || n >= s.contentHeight - s.containerHeight && e < 0) return !s.settings.wheelPropagation
									}
									var i = r.scrollLeft;
									if (0 === e) {
										if (!s.scrollbarXActive) return !1;
										if (0 === i && t < 0 || i >= s.contentWidth - s.containerWidth && 0 < t) return !s.settings.wheelPropagation
									}
									return !0
								}(i, o) && t.preventDefault()
						}
					}
				})
			}
			var l = t("../../lib/helper"),
				c = t("../../lib/dom"),
				o = t("../instances"),
				u = t("../update-geometry"),
				d = t("../update-scroll");
			e.exports = function(t) {
				i(t, o.get(t))
			}
		}, {
			"../../lib/dom": 2,
			"../../lib/helper": 5,
			"../instances": 17,
			"../update-geometry": 18,
			"../update-scroll": 19
		}],
		12: [function(t, e, n) {
			"use strict";

			function i(a, l) {
				function t(t) {
					var e, n, i, o = (n = (e = t).deltaX, i = -1 * e.deltaY, void 0 !== n && void 0 !== i || (n = -1 * e.wheelDeltaX / 6, i = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (n *= 10, i *= 10), n != n && i != i && (n = 0, i = e.wheelDelta), e.shiftKey ? [-i, -n] : [n, i]),
						r = o[0],
						s = o[1];
					! function(t, e) {
						var n = a.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
						if (n) {
							var i = window.getComputedStyle(n);
							if (![i.overflow, i.overflowX, i.overflowY].join("").match(/(scroll|auto)/)) return;
							var o = n.scrollHeight - n.clientHeight;
							if (0 < o && !(0 === n.scrollTop && 0 < e || n.scrollTop === o && e < 0)) return 1;
							var r = n.scrollLeft - n.clientWidth;
							if (0 < r && !(0 === n.scrollLeft && t < 0 || n.scrollLeft === r && 0 < t)) return 1
						}
					}(r, s) && (c = !1, l.settings.useBothWheelAxes ? l.scrollbarYActive && !l.scrollbarXActive ? (d(a, "top", s ? a.scrollTop - s * l.settings.wheelSpeed : a.scrollTop + r * l.settings.wheelSpeed), c = !0) : l.scrollbarXActive && !l.scrollbarYActive && (d(a, "left", r ? a.scrollLeft + r * l.settings.wheelSpeed : a.scrollLeft - s * l.settings.wheelSpeed), c = !0) : (d(a, "top", a.scrollTop - s * l.settings.wheelSpeed), d(a, "left", a.scrollLeft + r * l.settings.wheelSpeed)), u(a), (c = c || function(t, e) {
						var n = a.scrollTop;
						if (0 === t) {
							if (!l.scrollbarYActive) return !1;
							if (0 === n && 0 < e || n >= l.contentHeight - l.containerHeight && e < 0) return !l.settings.wheelPropagation
						}
						var i = a.scrollLeft;
						if (0 === e) {
							if (!l.scrollbarXActive) return !1;
							if (0 === i && t < 0 || i >= l.contentWidth - l.containerWidth && 0 < t) return !l.settings.wheelPropagation
						}
						return !0
					}(r, s)) && (t.stopPropagation(), t.preventDefault()))
				}
				var c = !1;
				void 0 !== window.onwheel ? l.event.bind(a, "wheel", t) : void 0 !== window.onmousewheel && l.event.bind(a, "mousewheel", t)
			}
			var o = t("../instances"),
				u = t("../update-geometry"),
				d = t("../update-scroll");
			e.exports = function(t) {
				i(t, o.get(t))
			}
		}, {
			"../instances": 17,
			"../update-geometry": 18,
			"../update-scroll": 19
		}],
		13: [function(t, e, n) {
			"use strict";
			var i = t("../instances"),
				o = t("../update-geometry");
			e.exports = function(t) {
				var e, n = i.get(t);
				e = t, n.event.bind(e, "scroll", function() {
					o(e)
				})
			}
		}, {
			"../instances": 17,
			"../update-geometry": 18
		}],
		14: [function(t, e, n) {
			"use strict";

			function i(a, t) {
				function l() {
					c && (clearInterval(c), c = null), h.stopScrolling(a)
				}
				var c = null,
					u = {
						top: 0,
						left: 0
					},
					d = !1;
				t.event.bind(t.ownerDocument, "selectionchange", function() {
					var t;
					a.contains(0 === (t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "").toString().length ? null : t.getRangeAt(0).commonAncestorContainer) ? d = !0 : (d = !1, l())
				}), t.event.bind(window, "mouseup", function() {
					d && (d = !1, l())
				}), t.event.bind(window, "keyup", function() {
					d && (d = !1, l())
				}), t.event.bind(window, "mousemove", function(t) {
					var e, n, i, o, r, s;
					d && (e = t.pageX, n = t.pageY, i = a.offsetLeft, o = a.offsetLeft + a.offsetWidth, r = a.offsetTop, s = a.offsetTop + a.offsetHeight, e < i + 3 ? (u.left = -5, h.startScrolling(a, "x")) : o - 3 < e ? (u.left = 5, h.startScrolling(a, "x")) : u.left = 0, n < r + 3 ? (u.top = r + 3 - n < 5 ? -5 : -20, h.startScrolling(a, "y")) : s - 3 < n ? (u.top = n - s + 3 < 5 ? 5 : 20, h.startScrolling(a, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? l() : c = c || setInterval(function() {
						return p.get(a) ? (m(a, "top", a.scrollTop + u.top), m(a, "left", a.scrollLeft + u.left), void f(a)) : void clearInterval(c)
					}, 50))
				})
			}
			var h = t("../../lib/helper"),
				p = t("../instances"),
				f = t("../update-geometry"),
				m = t("../update-scroll");
			e.exports = function(t) {
				i(t, p.get(t))
			}
		}, {
			"../../lib/helper": 5,
			"../instances": 17,
			"../update-geometry": 18,
			"../update-scroll": 19
		}],
		15: [function(t, e, n) {
			"use strict";

			function i(a, l, t, e) {
				function c(t, e) {
					w(a, "top", a.scrollTop - e), w(a, "left", a.scrollLeft - t), b(a)
				}

				function n() {
					g = !0
				}

				function i() {
					g = !1
				}

				function u(t) {
					return t.targetTouches ? t.targetTouches[0] : t
				}

				function d(t) {
					return (!t.pointerType || "pen" !== t.pointerType || 0 !== t.buttons) && (t.targetTouches && 1 === t.targetTouches.length || t.pointerType && "mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE)
				}

				function h(t) {
					var e;
					d(t) && (v = !0, e = u(t), p.pageX = e.pageX, p.pageY = e.pageY, f = (new Date).getTime(), null !== s && clearInterval(s), t.stopPropagation())
				}

				function o(t) {
					var e, n, i, o, r, s;
					!v && l.settings.swipePropagation && h(t), !g && v && d(t) && (c(i = (n = {
						pageX: (e = u(t)).pageX,
						pageY: e.pageY
					}).pageX - p.pageX, o = n.pageY - p.pageY), p = n, 0 < (s = (r = (new Date).getTime()) - f) && (m.x = i / s, m.y = o / s, f = r), function(t, e) {
						var n = a.scrollTop,
							i = a.scrollLeft,
							o = Math.abs(t),
							r = Math.abs(e);
						if (o < r) {
							if (e < 0 && n === l.contentHeight - l.containerHeight || 0 < e && 0 === n) return !l.settings.swipePropagation
						} else if (r < o && (t < 0 && i === l.contentWidth - l.containerWidth || 0 < t && 0 === i)) return !l.settings.swipePropagation;
						return 1
					}(i, o) && (t.stopPropagation(), t.preventDefault()))
				}

				function r() {
					!g && v && (v = !1, l.settings.swipeEasing && (clearInterval(s), s = setInterval(function() {
						return !y.get(a) || !m.x && !m.y || Math.abs(m.x) < .01 && Math.abs(m.y) < .01 ? void clearInterval(s) : (c(30 * m.x, 30 * m.y), m.x *= .8, void(m.y *= .8))
					}, 10)))
				}
				var p = {},
					f = 0,
					m = {},
					s = null,
					g = !1,
					v = !1;
				t ? (l.event.bind(window, "touchstart", n), l.event.bind(window, "touchend", i), l.event.bind(a, "touchstart", h), l.event.bind(a, "touchmove", o), l.event.bind(a, "touchend", r)) : e && (window.PointerEvent ? (l.event.bind(window, "pointerdown", n), l.event.bind(window, "pointerup", i), l.event.bind(a, "pointerdown", h), l.event.bind(a, "pointermove", o), l.event.bind(a, "pointerup", r)) : window.MSPointerEvent && (l.event.bind(window, "MSPointerDown", n), l.event.bind(window, "MSPointerUp", i), l.event.bind(a, "MSPointerDown", h), l.event.bind(a, "MSPointerMove", o), l.event.bind(a, "MSPointerUp", r)))
			}
			var o = t("../../lib/helper"),
				y = t("../instances"),
				b = t("../update-geometry"),
				w = t("../update-scroll");
			e.exports = function(t) {
				(o.env.supportsTouch || o.env.supportsIePointer) && i(t, y.get(t), o.env.supportsTouch, o.env.supportsIePointer)
			}
		}, {
			"../../lib/helper": 5,
			"../instances": 17,
			"../update-geometry": 18,
			"../update-scroll": 19
		}],
		16: [function(t, e, n) {
			"use strict";
			var i = t("./instances"),
				o = t("./update-geometry"),
				r = {
					"click-rail": t("./handler/click-rail"),
					"drag-scrollbar": t("./handler/drag-scrollbar"),
					keyboard: t("./handler/keyboard"),
					wheel: t("./handler/mouse-wheel"),
					touch: t("./handler/touch"),
					selection: t("./handler/selection")
				},
				s = t("./handler/native-scroll");
			e.exports = function(e, t) {
				e.classList.add("ps");
				var n = i.add(e, "object" == typeof t ? t : {});
				e.classList.add("ps--theme_" + n.settings.theme), n.settings.handlers.forEach(function(t) {
					r[t](e)
				}), s(e), o(e)
			}
		}, {
			"./handler/click-rail": 9,
			"./handler/drag-scrollbar": 10,
			"./handler/keyboard": 11,
			"./handler/mouse-wheel": 12,
			"./handler/native-scroll": 13,
			"./handler/selection": 14,
			"./handler/touch": 15,
			"./instances": 17,
			"./update-geometry": 18
		}],
		17: [function(t, e, n) {
			"use strict";

			function o(t, e) {
				function n() {
					t.classList.add("ps--focus")
				}

				function i() {
					t.classList.remove("ps--focus")
				}
				var o, r, s = this;
				for (var a in s.settings = c(), e) s.settings[a] = e[a];
				s.containerWidth = null, s.containerHeight = null, s.contentWidth = null, s.contentHeight = null, s.isRtl = "rtl" === u.css(t, "direction"), s.isNegativeScroll = (r = t.scrollLeft, t.scrollLeft = -1, o = t.scrollLeft < 0, t.scrollLeft = r, o), s.negativeScrollAdjustment = s.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, s.event = new d, s.ownerDocument = t.ownerDocument || document, s.scrollbarXRail = u.appendTo(u.create("div", "ps__scrollbar-x-rail"), t), s.scrollbarX = u.appendTo(u.create("div", "ps__scrollbar-x"), s.scrollbarXRail), s.scrollbarX.setAttribute("tabindex", 0), s.event.bind(s.scrollbarX, "focus", n), s.event.bind(s.scrollbarX, "blur", i), s.scrollbarXActive = null, s.scrollbarXWidth = null, s.scrollbarXLeft = null, s.scrollbarXBottom = l.toInt(u.css(s.scrollbarXRail, "bottom")), s.isScrollbarXUsingBottom = s.scrollbarXBottom == s.scrollbarXBottom, s.scrollbarXTop = s.isScrollbarXUsingBottom ? null : l.toInt(u.css(s.scrollbarXRail, "top")), s.railBorderXWidth = l.toInt(u.css(s.scrollbarXRail, "borderLeftWidth")) + l.toInt(u.css(s.scrollbarXRail, "borderRightWidth")), u.css(s.scrollbarXRail, "display", "block"), s.railXMarginWidth = l.toInt(u.css(s.scrollbarXRail, "marginLeft")) + l.toInt(u.css(s.scrollbarXRail, "marginRight")), u.css(s.scrollbarXRail, "display", ""), s.railXWidth = null, s.railXRatio = null, s.scrollbarYRail = u.appendTo(u.create("div", "ps__scrollbar-y-rail"), t), s.scrollbarY = u.appendTo(u.create("div", "ps__scrollbar-y"), s.scrollbarYRail), s.scrollbarY.setAttribute("tabindex", 0), s.event.bind(s.scrollbarY, "focus", n), s.event.bind(s.scrollbarY, "blur", i), s.scrollbarYActive = null, s.scrollbarYHeight = null, s.scrollbarYTop = null, s.scrollbarYRight = l.toInt(u.css(s.scrollbarYRail, "right")), s.isScrollbarYUsingRight = s.scrollbarYRight == s.scrollbarYRight, s.scrollbarYLeft = s.isScrollbarYUsingRight ? null : l.toInt(u.css(s.scrollbarYRail, "left")), s.scrollbarYOuterWidth = s.isRtl ? l.outerWidth(s.scrollbarY) : null, s.railBorderYWidth = l.toInt(u.css(s.scrollbarYRail, "borderTopWidth")) + l.toInt(u.css(s.scrollbarYRail, "borderBottomWidth")), u.css(s.scrollbarYRail, "display", "block"), s.railYMarginHeight = l.toInt(u.css(s.scrollbarYRail, "marginTop")) + l.toInt(u.css(s.scrollbarYRail, "marginBottom")), u.css(s.scrollbarYRail, "display", ""), s.railYHeight = null, s.railYRatio = null
			}

			function i(t) {
				return t.getAttribute("data-ps-id")
			}
			var l = t("../lib/helper"),
				c = t("./default-setting"),
				u = t("../lib/dom"),
				d = t("../lib/event-manager"),
				r = t("../lib/guid"),
				s = {};
			n.add = function(t, e) {
				var n, i = r();
				return n = i, t.setAttribute("data-ps-id", n), s[i] = new o(t, e), s[i]
			}, n.remove = function(t) {
				delete s[i(t)], t.removeAttribute("data-ps-id")
			}, n.get = function(t) {
				return s[i(t)]
			}
		}, {
			"../lib/dom": 2,
			"../lib/event-manager": 3,
			"../lib/guid": 4,
			"../lib/helper": 5,
			"./default-setting": 7
		}],
		18: [function(t, e, n) {
			"use strict";

			function i(t, e) {
				return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e
			}
			var o = t("../lib/helper"),
				r = t("../lib/dom"),
				s = t("./instances"),
				a = t("./update-scroll");
			e.exports = function(t) {
				var e, n = s.get(t);
				n.containerWidth = t.clientWidth, n.containerHeight = t.clientHeight, n.contentWidth = t.scrollWidth, n.contentHeight = t.scrollHeight, t.contains(n.scrollbarXRail) || (0 < (e = r.queryChildren(t, ".ps__scrollbar-x-rail")).length && e.forEach(function(t) {
						r.remove(t)
					}), r.appendTo(n.scrollbarXRail, t)), t.contains(n.scrollbarYRail) || (0 < (e = r.queryChildren(t, ".ps__scrollbar-y-rail")).length && e.forEach(function(t) {
						r.remove(t)
					}), r.appendTo(n.scrollbarYRail, t)), !n.settings.suppressScrollX && n.containerWidth + n.settings.scrollXMarginOffset < n.contentWidth ? (n.scrollbarXActive = !0, n.railXWidth = n.containerWidth - n.railXMarginWidth, n.railXRatio = n.containerWidth / n.railXWidth, n.scrollbarXWidth = i(n, o.toInt(n.railXWidth * n.containerWidth / n.contentWidth)), n.scrollbarXLeft = o.toInt((n.negativeScrollAdjustment + t.scrollLeft) * (n.railXWidth - n.scrollbarXWidth) / (n.contentWidth - n.containerWidth))) : n.scrollbarXActive = !1, !n.settings.suppressScrollY && n.containerHeight + n.settings.scrollYMarginOffset < n.contentHeight ? (n.scrollbarYActive = !0, n.railYHeight = n.containerHeight - n.railYMarginHeight, n.railYRatio = n.containerHeight / n.railYHeight, n.scrollbarYHeight = i(n, o.toInt(n.railYHeight * n.containerHeight / n.contentHeight)), n.scrollbarYTop = o.toInt(t.scrollTop * (n.railYHeight - n.scrollbarYHeight) / (n.contentHeight - n.containerHeight))) : n.scrollbarYActive = !1, n.scrollbarXLeft >= n.railXWidth - n.scrollbarXWidth && (n.scrollbarXLeft = n.railXWidth - n.scrollbarXWidth), n.scrollbarYTop >= n.railYHeight - n.scrollbarYHeight && (n.scrollbarYTop = n.railYHeight - n.scrollbarYHeight),
					function(t, e) {
						var n = {
							width: e.railXWidth
						};
						e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : n.left = t.scrollLeft, e.isScrollbarXUsingBottom ? n.bottom = e.scrollbarXBottom - t.scrollTop : n.top = e.scrollbarXTop + t.scrollTop, r.css(e.scrollbarXRail, n);
						var i = {
							top: t.scrollTop,
							height: e.railYHeight
						};
						e.isScrollbarYUsingRight ? e.isRtl ? i.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : i.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? i.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : i.left = e.scrollbarYLeft + t.scrollLeft, r.css(e.scrollbarYRail, i), r.css(e.scrollbarX, {
							left: e.scrollbarXLeft,
							width: e.scrollbarXWidth - e.railBorderXWidth
						}), r.css(e.scrollbarY, {
							top: e.scrollbarYTop,
							height: e.scrollbarYHeight - e.railBorderYWidth
						})
					}(t, n), n.scrollbarXActive ? t.classList.add("ps--active-x") : (t.classList.remove("ps--active-x"), n.scrollbarXWidth = 0, n.scrollbarXLeft = 0, a(t, "left", 0)), n.scrollbarYActive ? t.classList.add("ps--active-y") : (t.classList.remove("ps--active-y"), n.scrollbarYHeight = 0, n.scrollbarYTop = 0, a(t, "top", 0))
			}
		}, {
			"../lib/dom": 2,
			"../lib/helper": 5,
			"./instances": 17,
			"./update-scroll": 19
		}],
		19: [function(t, e, n) {
			"use strict";

			function o(t) {
				var e = document.createEvent("Event");
				return e.initEvent(t, !0, !0), e
			}
			var r = t("./instances");
			e.exports = function(t, e, n) {
				if (void 0 === t) throw "You must provide an element to the update-scroll function";
				if (void 0 === e) throw "You must provide an axis to the update-scroll function";
				if (void 0 === n) throw "You must provide a value to the update-scroll function";
				"top" === e && n <= 0 && (t.scrollTop = n = 0, t.dispatchEvent(o("ps-y-reach-start"))), "left" === e && n <= 0 && (t.scrollLeft = n = 0, t.dispatchEvent(o("ps-x-reach-start")));
				var i = r.get(t);
				"top" === e && n >= i.contentHeight - i.containerHeight && ((n = i.contentHeight - i.containerHeight) - t.scrollTop <= 2 ? n = t.scrollTop : t.scrollTop = n, t.dispatchEvent(o("ps-y-reach-end"))), "left" === e && n >= i.contentWidth - i.containerWidth && ((n = i.contentWidth - i.containerWidth) - t.scrollLeft <= 2 ? n = t.scrollLeft : t.scrollLeft = n, t.dispatchEvent(o("ps-x-reach-end"))), void 0 === i.lastTop && (i.lastTop = t.scrollTop), void 0 === i.lastLeft && (i.lastLeft = t.scrollLeft), "top" === e && n < i.lastTop && t.dispatchEvent(o("ps-scroll-up")), "top" === e && n > i.lastTop && t.dispatchEvent(o("ps-scroll-down")), "left" === e && n < i.lastLeft && t.dispatchEvent(o("ps-scroll-left")), "left" === e && n > i.lastLeft && t.dispatchEvent(o("ps-scroll-right")), "top" === e && n !== i.lastTop && (t.scrollTop = i.lastTop = n, t.dispatchEvent(o("ps-scroll-y"))), "left" === e && n !== i.lastLeft && (t.scrollLeft = i.lastLeft = n, t.dispatchEvent(o("ps-scroll-x")))
			}
		}, {
			"./instances": 17
		}],
		20: [function(t, e, n) {
			"use strict";
			var i = t("../lib/helper"),
				o = t("../lib/dom"),
				r = t("./instances"),
				s = t("./update-geometry"),
				a = t("./update-scroll");
			e.exports = function(t) {
				var e = r.get(t);
				e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, o.css(e.scrollbarXRail, "display", "block"), o.css(e.scrollbarYRail, "display", "block"), e.railXMarginWidth = i.toInt(o.css(e.scrollbarXRail, "marginLeft")) + i.toInt(o.css(e.scrollbarXRail, "marginRight")), e.railYMarginHeight = i.toInt(o.css(e.scrollbarYRail, "marginTop")) + i.toInt(o.css(e.scrollbarYRail, "marginBottom")), o.css(e.scrollbarXRail, "display", "none"), o.css(e.scrollbarYRail, "display", "none"), s(t), a(t, "top", t.scrollTop), a(t, "left", t.scrollLeft), o.css(e.scrollbarXRail, "display", ""), o.css(e.scrollbarYRail, "display", ""))
			}
		}, {
			"../lib/dom": 2,
			"../lib/helper": 5,
			"./instances": 17,
			"./update-geometry": 18,
			"./update-scroll": 19
		}]
	}, {}, [1]),
	function(s) {
		"use strict";

		function a(t) {
			return t.is('[type="checkbox"]') ? t.prop("checked") : t.is('[type="radio"]') ? !!s('[name="' + t.attr("name") + '"]:checked').length : t.val()
		}
		var o = function(t, e) {
			this.options = e, this.validators = s.extend({}, o.VALIDATORS, e.custom), this.$element = s(t), this.$btn = s('button[type="submit"], input[type="submit"]').filter('[form="' + this.$element.attr("id") + '"]').add(this.$element.find('input[type="submit"], button[type="submit"]')), this.update(), this.$element.on("input.bs.validator change.bs.validator focusout.bs.validator", s.proxy(this.onInput, this)), this.$element.on("submit.bs.validator", s.proxy(this.onSubmit, this)), this.$element.on("reset.bs.validator", s.proxy(this.reset, this)), this.$element.find("[data-match]").each(function() {
				var e = s(this),
					t = e.data("match");
				s(t).on("input.bs.validator", function(t) {
					a(e) && e.trigger("input.bs.validator")
				})
			}), this.$inputs.filter(function() {
				return a(s(this))
			}).trigger("focusout"), this.$element.attr("novalidate", !0), this.toggleSubmit()
		};

		function e(i) {
			return this.each(function() {
				var t = s(this),
					e = s.extend({}, o.DEFAULTS, t.data(), "object" == typeof i && i),
					n = t.data("bs.validator");
				!n && "destroy" == i || (n || t.data("bs.validator", n = new o(this, e)), "string" == typeof i && n[i]())
			})
		}
		o.VERSION = "0.11.5", o.INPUT_SELECTOR = ':input:not([type="hidden"], [type="submit"], [type="reset"], button)', o.FOCUS_OFFSET = 20, o.DEFAULTS = {
			delay: 500,
			html: !1,
			disable: !0,
			focus: !0,
			custom: {},
			errors: {
				match: "Does not match",
				minlength: "Not long enough"
			},
			feedback: {
				success: "glyphicon-ok",
				error: "glyphicon-remove"
			}
		}, o.VALIDATORS = {
			native: function(t) {
				var e = t[0];
				if (e.checkValidity) return !e.checkValidity() && !e.validity.valid && (e.validationMessage || "error!")
			},
			match: function(t) {
				var e = t.data("match");
				return t.val() !== s(e).val() && o.DEFAULTS.errors.match
			},
			minlength: function(t) {
				var e = t.data("minlength");
				return t.val().length < e && o.DEFAULTS.errors.minlength
			}
		}, o.prototype.update = function() {
			return this.$inputs = this.$element.find(o.INPUT_SELECTOR).add(this.$element.find('[data-validate="true"]')).not(this.$element.find('[data-validate="false"]')), this
		}, o.prototype.onInput = function(t) {
			var e = this,
				n = s(t.target),
				i = "focusout" !== t.type;
			this.$inputs.is(n) && this.validateInput(n, i).done(function() {
				e.toggleSubmit()
			})
		}, o.prototype.validateInput = function(e, n) {
			a(e);
			var i = e.data("bs.validator.errors");
			e.is('[type="radio"]') && (e = this.$element.find('input[name="' + e.attr("name") + '"]'));
			var o = s.Event("validate.bs.validator", {
				relatedTarget: e[0]
			});
			if (this.$element.trigger(o), !o.isDefaultPrevented()) {
				var r = this;
				return this.runValidators(e).done(function(t) {
					e.data("bs.validator.errors", t), t.length ? n ? r.defer(e, r.showErrors) : r.showErrors(e) : r.clearErrors(e), i && t.toString() === i.toString() || (o = t.length ? s.Event("invalid.bs.validator", {
						relatedTarget: e[0],
						detail: t
					}) : s.Event("valid.bs.validator", {
						relatedTarget: e[0],
						detail: i
					}), r.$element.trigger(o)), r.toggleSubmit(), r.$element.trigger(s.Event("validated.bs.validator", {
						relatedTarget: e[0]
					}))
				})
			}
		}, o.prototype.runValidators = function(i) {
			var o = [],
				e = s.Deferred();

			function r(t) {
				return n = t, i.data(n + "-error") || ((e = i[0].validity).typeMismatch ? i.data("type-error") : e.patternMismatch ? i.data("pattern-error") : e.stepMismatch ? i.data("step-error") : e.rangeOverflow ? i.data("max-error") : e.rangeUnderflow ? i.data("min-error") : e.valueMissing ? i.data("required-error") : null) || i.data("error");
				var e, n
			}
			return i.data("bs.validator.deferred") && i.data("bs.validator.deferred").reject(), i.data("bs.validator.deferred", e), s.each(this.validators, s.proxy(function(t, e) {
				var n = null;
				(a(i) || i.attr("required")) && (i.data(t) || "native" == t) && (n = e.call(this, i)) && (n = r(t) || n, ~o.indexOf(n) || o.push(n))
			}, this)), !o.length && a(i) && i.data("remote") ? this.defer(i, function() {
				var t = {};
				t[i.attr("name")] = a(i), s.get(i.data("remote"), t).fail(function(t, e, n) {
					o.push(r("remote") || n)
				}).always(function() {
					e.resolve(o)
				})
			}) : e.resolve(o), e.promise()
		}, o.prototype.validate = function() {
			var e = this;
			return s.when(this.$inputs.map(function(t) {
				return e.validateInput(s(this), !1)
			})).then(function() {
				e.toggleSubmit(), e.focusError()
			}), this
		}, o.prototype.focusError = function() {
			var t;
			!this.options.focus || 0 !== (t = this.$element.find(".has-error:first :input")).length && (s("html, body").animate({
				scrollTop: t.offset().top - o.FOCUS_OFFSET
			}, 250), t.focus())
		}, o.prototype.showErrors = function(t) {
			this.options.html;
			var e = t.data("bs.validator.errors"),
				n = t.closest(".form-group"),
				i = n.find(".help-block.with-errors"),
				o = n.find(".form-control-feedback");
			e.length && (void 0 === i.data("bs.validator.originalContent") && i.data("bs.validator.originalContent", i.html()), i.empty().append(e), n.addClass("has-error has-danger"), n.hasClass("has-feedback") && o.removeClass(this.options.feedback.success) && o.addClass(this.options.feedback.error) && n.removeClass("has-success"))
		}, o.prototype.clearErrors = function(t) {
			var e = t.closest(".form-group"),
				n = e.find(".help-block.with-errors"),
				i = e.find(".form-control-feedback");
			n.html(n.data("bs.validator.originalContent")), e.removeClass("has-error has-danger has-success"), e.hasClass("has-feedback") && i.removeClass(this.options.feedback.error) && i.removeClass(this.options.feedback.success) && a(t) && i.addClass(this.options.feedback.success) && e.addClass("has-success")
		}, o.prototype.hasErrors = function() {
			return !!this.$inputs.filter(function() {
				return !!(s(this).data("bs.validator.errors") || []).length
			}).length
		}, o.prototype.isIncomplete = function() {
			return !!this.$inputs.filter("[required]").filter(function() {
				var t = a(s(this));
				return !("string" == typeof t ? s.trim(t) : t)
			}).length
		}, o.prototype.onSubmit = function(t) {
			this.validate(), (this.isIncomplete() || this.hasErrors()) && t.preventDefault()
		}, o.prototype.toggleSubmit = function() {
			this.options.disable && this.$btn.toggleClass("disabled", this.isIncomplete() || this.hasErrors())
		}, o.prototype.defer = function(t, e) {
			if (e = s.proxy(e, this, t), !this.options.delay) return e();
			window.clearTimeout(t.data("bs.validator.timeout")), t.data("bs.validator.timeout", window.setTimeout(e, this.options.delay))
		}, o.prototype.reset = function() {
			return this.$element.find(".form-control-feedback").removeClass(this.options.feedback.error).removeClass(this.options.feedback.success), this.$inputs.removeData(["bs.validator.errors", "bs.validator.deferred"]).each(function() {
				var t = s(this),
					e = t.data("bs.validator.timeout");
				window.clearTimeout(e) && t.removeData("bs.validator.timeout")
			}), this.$element.find(".help-block.with-errors").each(function() {
				var t = s(this),
					e = t.data("bs.validator.originalContent");
				t.removeData("bs.validator.originalContent").html(e)
			}), this.$btn.removeClass("disabled"), this.$element.find(".has-error, .has-danger, .has-success").removeClass("has-error has-danger has-success"), this
		}, o.prototype.destroy = function() {
			return this.reset(), this.$element.removeAttr("novalidate").removeData("bs.validator").off(".bs.validator"), this.$inputs.off(".bs.validator"), this.options = null, this.validators = null, this.$element = null, this.$btn = null, this
		};
		var t = s.fn.validator;
		s.fn.validator = e, s.fn.validator.Constructor = o, s.fn.validator.noConflict = function() {
			return s.fn.validator = t, this
		}, s(window).on("load", function() {
			s('form[data-toggle="validator"]').each(function() {
				var t = s(this);
				e.call(t, t.data())
			})
		})
	}(jQuery);
var PageTransitions = function(p) {
	"use strict";
	var f = p(".animated-sections"),
		m = !1,
		g = !0,
		v = !1,
		y = (p(window), {
			WebkitAnimation: "webkitAnimationEnd",
			OAnimation: "oAnimationEnd",
			msAnimation: "MSAnimationEnd",
			animation: "animationend"
		} [Modernizr.prefixed("animation")]),
		b = Modernizr.cssanimations;

	function o(t) {
		var e;
		t && (e = (e = p(t))[0], (e = p(e)) && (p("ul.main-menu a").removeClass("active"), e.addClass("active")))
	}

	function r() {
		var e = p("#page-ajax-loaded");

		function n() {
			e.removeClass("animated-section-moveToRight closed"), e.show(), p("body").addClass("ajax-page-visible")
		}
		var i = p(".ajax-page-load").each(function() {
			if (i = p(this).attr("href"), location.hash == location.hash.split("/")[0] + "/" + i.substr(0, i.length - 5)) {
				var t = p(this).attr("href");
				return n(), e.load(t), !1
			}
		});
		p(document).on("click", ".main-menu, #ajax-page-close-button", function(t) {
			t.preventDefault(), p("#page-ajax-loaded").addClass("animated-section-moveToRight closed"), p("body").removeClass("ajax-page-visible"), setTimeout(function() {
				p("#page-ajax-loaded.closed").html(""), e.hide()
			}, 500), location.hash = location.hash.split("/")[0]
		}).on("click", ".ajax-page-load", function() {
			var t = location.hash.split("/")[0] + "/" + p(this).attr("href").substr(0, p(this).attr("href").length - 5);
			return location.hash = t, n(), !1
		})
	}

	function s(t, e) {
		var n;
		t.attr("data-animation") || (n = parseInt(Math.floor(67 * Math.random()) + 1), t.data("animation", n));
		var i, o, r, s, a = t.data("animation").toString();
		if (67 < (s = -1 != a.indexOf("-") ? (r = a.split("-"), parseInt(r[Math.floor(Math.random() * r.length)])) : parseInt(a))) alert("Transition.js : Invalid 'data-animation' attribute configuration. Animation number should not be greater than 67");
		else {
			switch (s) {
				case 1:
					i = "animated-section-moveFromRight", o = "animated-section-moveToLeft";
					break;
				case 2:
					i = "animated-section-moveFromLeft", o = "animated-section-moveToRight";
					break;
				case 3:
					i = "animated-section-moveFromBottom", o = "animated-section-moveToTop";
					break;
				case 4:
					i = "animated-section-moveFromTop", o = "animated-section-moveToBottom";
					break;
				case 5:
					i = "animated-section-moveFromRight animated-section-ontop", o = "animated-section-fade";
					break;
				case 6:
					i = "animated-section-moveFromLeft animated-section-ontop", o = "animated-section-fade";
					break;
				case 7:
					i = "animated-section-moveFromBottom animated-section-ontop", o = "animated-section-fade";
					break;
				case 8:
					i = "animated-section-moveFromTop animated-section-ontop", o = "animated-section-fade";
					break;
				case 9:
					i = "animated-section-moveFromRightFade", o = "animated-section-moveToLeftFade";
					break;
				case 10:
					i = "animated-section-moveFromLeftFade", o = "animated-section-moveToRightFade";
					break;
				case 11:
					i = "animated-section-moveFromBottomFade", o = "animated-section-moveToTopFade";
					break;
				case 12:
					i = "animated-section-moveFromTopFade", o = "animated-section-moveToBottomFade";
					break;
				case 13:
					i = "animated-section-moveFromRight", o = "animated-section-moveToLeftEasing animated-section-ontop";
					break;
				case 14:
					i = "animated-section-moveFromLeft", o = "animated-section-moveToRightEasing animated-section-ontop";
					break;
				case 15:
					i = "animated-section-moveFromBottom", o = "animated-section-moveToTopEasing animated-section-ontop";
					break;
				case 16:
					i = "animated-section-moveFromTop", o = "animated-section-moveToBottomEasing animated-section-ontop";
					break;
				case 17:
					i = "animated-section-moveFromRight animated-section-ontop", o = "animated-section-scaleDown";
					break;
				case 18:
					i = "animated-section-moveFromLeft animated-section-ontop", o = "animated-section-scaleDown";
					break;
				case 19:
					i = "animated-section-moveFromBottom animated-section-ontop", o = "animated-section-scaleDown";
					break;
				case 20:
					i = "animated-section-moveFromTop animated-section-ontop", o = "animated-section-scaleDown";
					break;
				case 21:
					i = "animated-section-scaleUpDown animated-section-delay300", o = "animated-section-scaleDown";
					break;
				case 22:
					i = "animated-section-scaleUp animated-section-delay300", o = "animated-section-scaleDownUp";
					break;
				case 23:
					i = "animated-section-scaleUp", o = "animated-section-moveToLeft animated-section-ontop";
					break;
				case 24:
					i = "animated-section-scaleUp", o = "animated-section-moveToRight animated-section-ontop";
					break;
				case 25:
					i = "animated-section-scaleUp", o = "animated-section-moveToTop animated-section-ontop";
					break;
				case 26:
					i = "animated-section-scaleUp", o = "animated-section-moveToBottom animated-section-ontop";
					break;
				case 27:
					i = "animated-section-scaleUpCenter animated-section-delay400", o = "animated-section-scaleDownCenter";
					break;
				case 28:
					i = "animated-section-moveFromRight animated-section-delay200 animated-section-ontop", o = "animated-section-rotateRightSideFirst";
					break;
				case 29:
					i = "animated-section-moveFromLeft animated-section-delay200 animated-section-ontop", o = "animated-section-rotateLeftSideFirst";
					break;
				case 30:
					i = "animated-section-moveFromTop animated-section-delay200 animated-section-ontop", o = "animated-section-rotateTopSideFirst";
					break;
				case 31:
					i = "animated-section-moveFromBottom animated-section-delay200 animated-section-ontop", o = "animated-section-rotateBottomSideFirst";
					break;
				case 32:
					i = "animated-section-flipInLeft animated-section-delay500", o = "animated-section-flipOutRight";
					break;
				case 33:
					i = "animated-section-flipInRight animated-section-delay500", o = "animated-section-flipOutLeft";
					break;
				case 34:
					i = "animated-section-flipInBottom animated-section-delay500", o = "animated-section-flipOutTop";
					break;
				case 35:
					i = "animated-section-flipInTop animated-section-delay500", o = "animated-section-flipOutBottom";
					break;
				case 36:
					i = "animated-section-scaleUp", o = "animated-section-rotateFall animated-section-ontop";
					break;
				case 37:
					i = "animated-section-rotateInNewspaper animated-section-delay500", o = "animated-section-rotateOutNewspaper";
					break;
				case 38:
					i = "animated-section-moveFromRight", o = "animated-section-rotatePushLeft";
					break;
				case 39:
					i = "animated-section-moveFromLeft", o = "animated-section-rotatePushRight";
					break;
				case 40:
					i = "animated-section-moveFromBottom", o = "animated-section-rotatePushTop";
					break;
				case 41:
					i = "animated-section-moveFromTop", o = "animated-section-rotatePushBottom";
					break;
				case 42:
					i = "animated-section-rotatePullRight animated-section-delay180", o = "animated-section-rotatePushLeft";
					break;
				case 43:
					i = "animated-section-rotatePullLeft animated-section-delay180", o = "animated-section-rotatePushRight";
					break;
				case 44:
					i = "animated-section-rotatePullBottom animated-section-delay180", o = "animated-section-rotatePushTop";
					break;
				case 45:
					i = "animated-section-rotatePullTop animated-section-delay180", o = "animated-section-rotatePushBottom";
					break;
				case 46:
					i = "animated-section-moveFromRightFade", o = "animated-section-rotateFoldLeft";
					break;
				case 47:
					i = "animated-section-moveFromLeftFade", o = "animated-section-rotateFoldRight";
					break;
				case 48:
					i = "animated-section-moveFromBottomFade", o = "animated-section-rotateFoldTop";
					break;
				case 49:
					i = "animated-section-moveFromTopFade", o = "animated-section-rotateFoldBottom";
					break;
				case 50:
					i = "animated-section-rotateUnfoldLeft", o = "animated-section-moveToRightFade";
					break;
				case 51:
					i = "animated-section-rotateUnfoldRight", o = "animated-section-moveToLeftFade";
					break;
				case 52:
					i = "animated-section-rotateUnfoldTop", o = "animated-section-moveToBottomFade";
					break;
				case 53:
					i = "animated-section-rotateUnfoldBottom", o = "animated-section-moveToTopFade";
					break;
				case 54:
					i = "animated-section-rotateRoomLeftIn", o = "animated-section-rotateRoomLeftOut animated-section-ontop";
					break;
				case 55:
					i = "animated-section-rotateRoomRightIn", o = "animated-section-rotateRoomRightOut animated-section-ontop";
					break;
				case 56:
					i = "animated-section-rotateRoomTopIn", o = "animated-section-rotateRoomTopOut animated-section-ontop";
					break;
				case 57:
					i = "animated-section-rotateRoomBottomIn", o = "animated-section-rotateRoomBottomOut animated-section-ontop";
					break;
				case 58:
					i = "animated-section-rotateCubeLeftIn", o = "animated-section-rotateCubeLeftOut animated-section-ontop";
					break;
				case 59:
					i = "animated-section-rotateCubeRightIn", o = "animated-section-rotateCubeRightOut animated-section-ontop";
					break;
				case 60:
					i = "animated-section-rotateCubeTopIn", o = "animated-section-rotateCubeTopOut animated-section-ontop";
					break;
				case 61:
					i = "animated-section-rotateCubeBottomIn", o = "animated-section-rotateCubeBottomOut animated-section-ontop";
					break;
				case 62:
					i = "animated-section-rotateCarouselLeftIn", o = "animated-section-rotateCarouselLeftOut animated-section-ontop";
					break;
				case 63:
					i = "animated-section-rotateCarouselRightIn", o = "animated-section-rotateCarouselRightOut animated-section-ontop";
					break;
				case 64:
					i = "animated-section-rotateCarouselTopIn", o = "animated-section-rotateCarouselTopOut animated-section-ontop";
					break;
				case 65:
					i = "animated-section-rotateCarouselBottomIn", o = "animated-section-rotateCarouselBottomOut animated-section-ontop";
					break;
				case 66:
					i = "animated-section-rotateSidesIn animated-section-delay200", o = "animated-section-rotateSidesOut";
					break;
				case 67:
					i = "animated-section-rotateSlideIn", o = "animated-section-rotateSlideOut"
			}
			var l, c = f,
				u = c.data("current"),
				e = t.attr("href").split("#")[1],
				d = u,
				h = p('section[data-id="' + u + '"]');
			d != (u = e) ? (m = !0, c.data("current", u), (l = p("section[data-id=" + u + "]").addClass("section-active")).scrollTop(0), h.addClass(o).on(y, function() {
				h.off(y), g = !0, v && (w(0, l, h), g = !1)
			}), l.addClass(i).on(y, function() {
				l.off(y), v = !0, g && (w(0, l, h), m = v = !1)
			})) : m = !1, b || w(0, l)
		}
	}

	function w(t, e, n) {
		var i, o;
		i = e, (o = n).attr("class", o.data("originalClassList")), i.attr("class", i.data("originalClassList") + " section-active")
	}
	return {
		init: function(t) {
			p(".animated-section").each(function() {
				var t = p(this);
				t.data("originalClassList", t.attr("class"))
			}), f.each(function() {
				"" === location.hash && p("section[data-id=" + e + "]").addClass("section-active")
			}), p(".nav-anim").on("click", function(t) {
				if (t.preventDefault(), m) return !1;
				var e = p(this);
				o(e), s(e), location.hash = p(this).attr("href")
			}), window.onhashchange = function(t) {
				if (location.hash) {
					if (m) return !1;
					var e = p(n + ' a[href*="' + location.hash.split("/")[0] + '"]');
					o(e), s(e), r()
				}
			};
			var n = t.menu,
				e = "" === location.hash ? location.hash = p("section.animated-section").first().attr("data-id") : location.hash;
			location.hash = e;
			var i = p(n + ' a[href*="' + location.hash.split("/")[0] + '"]');
			o(i), s(i), p("body").append('<div id="page-ajax-loaded" class="page-ajax-loaded animated animated-section-moveFromLeft"></div>'), r(), p(".lmpixels-arrow-right").click(function() {
				var t = p(".main-menu a.active").parent("li");
				t.next("li").children("a").click(), t.is(":last-child") && p(".main-menu li:first-child").children("a").click()
			}), p(".lmpixels-arrow-left").click(function() {
				var t = p(".main-menu a.active").parent("li");
				t.prev("li").children("a").click(), t.is(":first-child") && p(".main-menu li:last-child").children("a").click()
			})
		}
	}
}(jQuery);
! function(t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(u) {
	function t() {}

	function d(t, e) {
		m.ev.on("mfp" + t + w, e)
	}

	function h(t, e, n, i) {
		var o = document.createElement("div");
		return o.className = "mfp-" + t, n && (o.innerHTML = n), i ? e && e.appendChild(o) : (o = u(o), e && o.appendTo(e)), o
	}

	function p(t, e) {
		m.ev.triggerHandler("mfp" + t, e), m.st.callbacks && (t = t.charAt(0).toLowerCase() + t.slice(1), m.st.callbacks[t] && m.st.callbacks[t].apply(m, u.isArray(e) ? e : [e]))
	}

	function f(t) {
		return t === e && m.currTemplate.closeBtn || (m.currTemplate.closeBtn = u(m.st.closeMarkup.replace("%title%", m.st.tClose)), e = t), m.currTemplate.closeBtn
	}

	function r() {
		u.magnificPopup.instance || ((m = new t).init(), u.magnificPopup.instance = m)
	}
	var m, i, g, o, v, e, l = "Close",
		c = "BeforeClose",
		y = "MarkupParse",
		b = "Open",
		w = ".mfp",
		x = "mfp-ready",
		n = "mfp-removing",
		s = "mfp-prevent-close",
		a = !!window.jQuery,
		_ = u(window);
	t.prototype = {
		constructor: t,
		init: function() {
			var t = navigator.appVersion;
			m.isLowIE = m.isIE8 = document.all && !document.addEventListener, m.isAndroid = /android/gi.test(t), m.isIOS = /iphone|ipad|ipod/gi.test(t), m.supportsTransition = function() {
				var t = document.createElement("p").style,
					e = ["ms", "O", "Moz", "Webkit"];
				if (void 0 !== t.transition) return !0;
				for (; e.length;)
					if (e.pop() + "Transition" in t) return !0;
				return !1
			}(), m.probablyMobile = m.isAndroid || m.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), g = u(document), m.popupsCache = {}
		},
		open: function(t) {
			if (!1 === t.isObj) {
				m.items = t.items.toArray(), m.index = 0;
				for (var e, n = t.items, i = 0; i < n.length; i++)
					if ((e = n[i]).parsed && (e = e.el[0]), e === t.el[0]) {
						m.index = i;
						break
					}
			} else m.items = u.isArray(t.items) ? t.items : [t.items], m.index = t.index || 0;
			if (!m.isOpen) {
				m.types = [], v = "", t.mainEl && t.mainEl.length ? m.ev = t.mainEl.eq(0) : m.ev = g, t.key ? (m.popupsCache[t.key] || (m.popupsCache[t.key] = {}), m.currTemplate = m.popupsCache[t.key]) : m.currTemplate = {}, m.st = u.extend(!0, {}, u.magnificPopup.defaults, t), m.fixedContentPos = "auto" === m.st.fixedContentPos ? !m.probablyMobile : m.st.fixedContentPos, m.st.modal && (m.st.closeOnContentClick = !1, m.st.closeOnBgClick = !1, m.st.showCloseBtn = !1, m.st.enableEscapeKey = !1), m.bgOverlay || (m.bgOverlay = h("bg").on("click" + w, function() {
					m.close()
				}), m.wrap = h("wrap").attr("tabindex", -1).on("click" + w, function(t) {
					m._checkIfClose(t.target) && m.close()
				}), m.container = h("container", m.wrap)), m.contentContainer = h("content"), m.st.preloader && (m.preloader = h("preloader", m.container, m.st.tLoading));
				var o = u.magnificPopup.modules;
				for (i = 0; i < o.length; i++) {
					var r = (r = o[i]).charAt(0).toUpperCase() + r.slice(1);
					m["init" + r].call(m)
				}
				p("BeforeOpen"), m.st.showCloseBtn && (m.st.closeBtnInside ? (d(y, function(t, e, n, i) {
					n.close_replaceWith = f(i.type)
				}), v += " mfp-close-btn-in") : m.wrap.append(f())), m.st.alignTop && (v += " mfp-align-top"), m.fixedContentPos ? m.wrap.css({
					overflow: m.st.overflowY,
					overflowX: "hidden",
					overflowY: m.st.overflowY
				}) : m.wrap.css({
					top: _.scrollTop(),
					position: "absolute"
				}), !1 !== m.st.fixedBgPos && ("auto" !== m.st.fixedBgPos || m.fixedContentPos) || m.bgOverlay.css({
					height: g.height(),
					position: "absolute"
				}), m.st.enableEscapeKey && g.on("keyup" + w, function(t) {
					27 === t.keyCode && m.close()
				}), _.on("resize" + w, function() {
					m.updateSize()
				}), m.st.closeOnContentClick || (v += " mfp-auto-cursor"), v && m.wrap.addClass(v);
				var s, a = m.wH = _.height(),
					l = {};
				m.fixedContentPos && m._hasScrollBar(a) && ((s = m._getScrollbarSize()) && (l.marginRight = s)), m.fixedContentPos && (m.isIE7 ? u("body, html").css("overflow", "hidden") : l.overflow = "hidden");
				var c = m.st.mainClass;
				return m.isIE7 && (c += " mfp-ie7"), c && m._addClassToMFP(c), m.updateItemHTML(), p("BuildControls"), u("html").css(l), m.bgOverlay.add(m.wrap).prependTo(m.st.prependTo || u(document.body)), m._lastFocusedEl = document.activeElement, setTimeout(function() {
					m.content ? (m._addClassToMFP(x), m._setFocus()) : m.bgOverlay.addClass(x), g.on("focusin" + w, m._onFocusIn)
				}, 16), m.isOpen = !0, m.updateSize(a), p(b), t
			}
			m.updateItemHTML()
		},
		close: function() {
			m.isOpen && (p(c), m.isOpen = !1, m.st.removalDelay && !m.isLowIE && m.supportsTransition ? (m._addClassToMFP(n), setTimeout(function() {
				m._close()
			}, m.st.removalDelay)) : m._close())
		},
		_close: function() {
			p(l);
			var t, e = n + " " + x + " ";
			m.bgOverlay.detach(), m.wrap.detach(), m.container.empty(), m.st.mainClass && (e += m.st.mainClass + " "), m._removeClassFromMFP(e), m.fixedContentPos && (t = {
				marginRight: ""
			}, m.isIE7 ? u("body, html").css("overflow", "") : t.overflow = "", u("html").css(t)), g.off("keyup.mfp focusin" + w), m.ev.off(w), m.wrap.attr("class", "mfp-wrap").removeAttr("style"), m.bgOverlay.attr("class", "mfp-bg"), m.container.attr("class", "mfp-container"), !m.st.showCloseBtn || m.st.closeBtnInside && !0 !== m.currTemplate[m.currItem.type] || m.currTemplate.closeBtn && m.currTemplate.closeBtn.detach(), m.st.autoFocusLast && m._lastFocusedEl && u(m._lastFocusedEl).focus(), m.currItem = null, m.content = null, m.currTemplate = null, m.prevHeight = 0, p("AfterClose")
		},
		updateSize: function(t) {
			var e, n;
			m.isIOS ? (e = document.documentElement.clientWidth / window.innerWidth, n = window.innerHeight * e, m.wrap.css("height", n), m.wH = n) : m.wH = t || _.height(), m.fixedContentPos || m.wrap.css("height", m.wH), p("Resize")
		},
		updateItemHTML: function() {
			var t = m.items[m.index];
			m.contentContainer.detach(), m.content && m.content.detach(), t.parsed || (t = m.parseEl(m.index));
			var e, n = t.type;
			p("BeforeChange", [m.currItem ? m.currItem.type : "", n]), m.currItem = t, m.currTemplate[n] || (e = !!m.st[n] && m.st[n].markup, p("FirstMarkupParse", e), m.currTemplate[n] = !e || u(e)), o && o !== t.type && m.container.removeClass("mfp-" + o + "-holder");
			var i = m["get" + n.charAt(0).toUpperCase() + n.slice(1)](t, m.currTemplate[n]);
			m.appendContent(i, n), t.preloaded = !0, p("Change", t), o = t.type, m.container.prepend(m.contentContainer), p("AfterChange")
		},
		appendContent: function(t, e) {
			(m.content = t) ? m.st.showCloseBtn && m.st.closeBtnInside && !0 === m.currTemplate[e] ? m.content.find(".mfp-close").length || m.content.append(f()) : m.content = t: m.content = "", p("BeforeAppend"), m.container.addClass("mfp-" + e + "-holder"), m.contentContainer.append(m.content)
		},
		parseEl: function(t) {
			var e, n = m.items[t];
			if ((n = n.tagName ? {
					el: u(n)
				} : (e = n.type, {
					data: n,
					src: n.src
				})).el) {
				for (var i = m.types, o = 0; o < i.length; o++)
					if (n.el.hasClass("mfp-" + i[o])) {
						e = i[o];
						break
					} n.src = n.el.attr("data-mfp-src"), n.src || (n.src = n.el.attr("href"))
			}
			return n.type = e || m.st.type || "inline", n.index = t, n.parsed = !0, m.items[t] = n, p("ElementParse", n), m.items[t]
		},
		addGroup: function(e, n) {
			function t(t) {
				t.mfpEl = this, m._openClick(t, e, n)
			}
			var i = "click.magnificPopup";
			(n = n || {}).mainEl = e, n.items ? (n.isObj = !0, e.off(i).on(i, t)) : (n.isObj = !1, n.delegate ? e.off(i).on(i, n.delegate, t) : (n.items = e).off(i).on(i, t))
		},
		_openClick: function(t, e, n) {
			if ((void 0 !== n.midClick ? n.midClick : u.magnificPopup.defaults.midClick) || !(2 === t.which || t.ctrlKey || t.metaKey || t.altKey || t.shiftKey)) {
				var i = void 0 !== n.disableOn ? n.disableOn : u.magnificPopup.defaults.disableOn;
				if (i)
					if (u.isFunction(i)) {
						if (!i.call(m)) return !0
					} else if (_.width() < i) return !0;
				t.type && (t.preventDefault(), m.isOpen && t.stopPropagation()), n.el = u(t.mfpEl), n.delegate && (n.items = e.find(n.delegate)), m.open(n)
			}
		},
		updateStatus: function(t, e) {
			var n;
			m.preloader && (i !== t && m.container.removeClass("mfp-s-" + i), e || "loading" !== t || (e = m.st.tLoading), p("UpdateStatus", n = {
				status: t,
				text: e
			}), t = n.status, e = n.text, m.preloader.html(e), m.preloader.find("a").on("click", function(t) {
				t.stopImmediatePropagation()
			}), m.container.addClass("mfp-s-" + t), i = t)
		},
		_checkIfClose: function(t) {
			if (!u(t).hasClass(s)) {
				var e = m.st.closeOnContentClick,
					n = m.st.closeOnBgClick;
				if (e && n) return !0;
				if (!m.content || u(t).hasClass("mfp-close") || m.preloader && t === m.preloader[0]) return !0;
				if (t === m.content[0] || u.contains(m.content[0], t)) {
					if (e) return !0
				} else if (n && u.contains(document, t)) return !0;
				return !1
			}
		},
		_addClassToMFP: function(t) {
			m.bgOverlay.addClass(t), m.wrap.addClass(t)
		},
		_removeClassFromMFP: function(t) {
			this.bgOverlay.removeClass(t), m.wrap.removeClass(t)
		},
		_hasScrollBar: function(t) {
			return (m.isIE7 ? g.height() : document.body.scrollHeight) > (t || _.height())
		},
		_setFocus: function() {
			(m.st.focus ? m.content.find(m.st.focus).eq(0) : m.wrap).focus()
		},
		_onFocusIn: function(t) {
			return t.target === m.wrap[0] || u.contains(m.wrap[0], t.target) ? void 0 : (m._setFocus(), !1)
		},
		_parseMarkup: function(o, t, e) {
			var r;
			e.data && (t = u.extend(e.data, t)), p(y, [o, t, e]), u.each(t, function(t, e) {
				return void 0 === e || !1 === e || void(1 < (r = t.split("_")).length ? 0 < (n = o.find(w + "-" + r[0])).length && ("replaceWith" === (i = r[1]) ? n[0] !== e[0] && n.replaceWith(e) : "img" === i ? n.is("img") ? n.attr("src", e) : n.replaceWith(u("<img>").attr("src", e).attr("class", n.attr("class"))) : n.attr(r[1], e)) : o.find(w + "-" + t).html(e));
				var n, i
			})
		},
		_getScrollbarSize: function() {
			var t;
			return void 0 === m.scrollbarSize && ((t = document.createElement("div")).style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), m.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)), m.scrollbarSize
		}
	}, u.magnificPopup = {
		instance: null,
		proto: t.prototype,
		modules: [],
		open: function(t, e) {
			return r(), (t = t ? u.extend(!0, {}, t) : {}).isObj = !0, t.index = e || 0, this.instance.open(t)
		},
		close: function() {
			return u.magnificPopup.instance && u.magnificPopup.instance.close()
		},
		registerModule: function(t, e) {
			e.options && (u.magnificPopup.defaults[t] = e.options), u.extend(this.proto, e.proto), this.modules.push(t)
		},
		defaults: {
			disableOn: 0,
			key: null,
			midClick: !1,
			mainClass: "",
			preloader: !0,
			focus: "",
			closeOnContentClick: !1,
			closeOnBgClick: !0,
			closeBtnInside: !0,
			showCloseBtn: !0,
			enableEscapeKey: !0,
			modal: !1,
			alignTop: !1,
			removalDelay: 0,
			prependTo: null,
			fixedContentPos: "auto",
			fixedBgPos: "auto",
			overflowY: "auto",
			closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
			tClose: "Close (Esc)",
			tLoading: "Loading...",
			autoFocusLast: !0
		}
	}, u.fn.magnificPopup = function(t) {
		r();
		var e, n, i, o = u(this);
		return "string" == typeof t ? "open" === t ? (e = a ? o.data("magnificPopup") : o[0].magnificPopup, n = parseInt(arguments[1], 10) || 0, i = e.items ? e.items[n] : (i = o, e.delegate && (i = i.find(e.delegate)), i.eq(n)), m._openClick({
			mfpEl: i
		}, o, e)) : m.isOpen && m[t].apply(m, Array.prototype.slice.call(arguments, 1)) : (t = u.extend(!0, {}, t), a ? o.data("magnificPopup", t) : o[0].magnificPopup = t, m.addGroup(o, t)), o
	};

	function C() {
		S && (E.after(S.addClass(T)).detach(), S = null)
	}
	var T, E, S, k = "inline";
	u.magnificPopup.registerModule(k, {
		options: {
			hiddenClass: "hide",
			markup: "",
			tNotFound: "Content not found"
		},
		proto: {
			initInline: function() {
				m.types.push(k), d(l + "." + k, function() {
					C()
				})
			},
			getInline: function(t, e) {
				if (C(), t.src) {
					var n, i = m.st.inline,
						o = u(t.src);
					return o.length ? ((n = o[0].parentNode) && n.tagName && (E || (T = i.hiddenClass, E = h(T), T = "mfp-" + T), S = o.after(E).detach().removeClass(T)), m.updateStatus("ready")) : (m.updateStatus("error", i.tNotFound), o = u("<div>")), t.inlineElement = o
				}
				return m.updateStatus("ready"), m._parseMarkup(e, {}, t), e
			}
		}
	});

	function L() {
		D && u(document.body).removeClass(D)
	}

	function I() {
		L(), m.req && m.req.abort()
	}
	var D, z = "ajax";
	u.magnificPopup.registerModule(z, {
		options: {
			settings: null,
			cursor: "mfp-ajax-cur",
			tError: '<a href="%url%">The content</a> could not be loaded.'
		},
		proto: {
			initAjax: function() {
				m.types.push(z), D = m.st.ajax.cursor, d(l + "." + z, I), d("BeforeChange." + z, I)
			},
			getAjax: function(o) {
				D && u(document.body).addClass(D), m.updateStatus("loading");
				var t = u.extend({
					url: o.src,
					success: function(t, e, n) {
						var i = {
							data: t,
							xhr: n
						};
						p("ParseAjax", i), m.appendContent(u(i.data), z), o.finished = !0, L(), m._setFocus(), setTimeout(function() {
							m.wrap.addClass(x)
						}, 16), m.updateStatus("ready"), p("AjaxContentAdded")
					},
					error: function() {
						L(), o.finished = o.loadError = !0, m.updateStatus("error", m.st.ajax.tError.replace("%url%", o.src))
					}
				}, m.st.ajax.settings);
				return m.req = u.ajax(t), ""
			}
		}
	});
	var O;
	u.magnificPopup.registerModule("image", {
		options: {
			markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
			cursor: "mfp-zoom-out-cur",
			titleSrc: "title",
			verticalFit: !0,
			tError: '<a href="%url%">The image</a> could not be loaded.'
		},
		proto: {
			initImage: function() {
				var t = m.st.image,
					e = ".image";
				m.types.push("image"), d(b + e, function() {
					"image" === m.currItem.type && t.cursor && u(document.body).addClass(t.cursor)
				}), d(l + e, function() {
					t.cursor && u(document.body).removeClass(t.cursor), _.off("resize" + w)
				}), d("Resize" + e, m.resizeImage), m.isLowIE && d("AfterChange", m.resizeImage)
			},
			resizeImage: function() {
				var t, e = m.currItem;
				e && e.img && m.st.image.verticalFit && (t = 0, m.isLowIE && (t = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", m.wH - t))
			},
			_onImageHasSize: function(t) {
				t.img && (t.hasSize = !0, O && clearInterval(O), t.isCheckingImgSize = !1, p("ImageHasSize", t), t.imgHidden && (m.content && m.content.removeClass("mfp-loading"), t.imgHidden = !1))
			},
			findImageSize: function(e) {
				var n = 0,
					i = e.img[0],
					o = function(t) {
						O && clearInterval(O), O = setInterval(function() {
							return 0 < i.naturalWidth ? void m._onImageHasSize(e) : (200 < n && clearInterval(O), void(3 === ++n ? o(10) : 40 === n ? o(50) : 100 === n && o(500)))
						}, t)
					};
				o(1)
			},
			getImage: function(t, e) {
				var n, i = 0,
					o = function() {
						t && (t.img[0].complete ? (t.img.off(".mfploader"), t === m.currItem && (m._onImageHasSize(t), m.updateStatus("ready")), t.hasSize = !0, t.loaded = !0, p("ImageLoadComplete")) : ++i < 200 ? setTimeout(o, 100) : r())
					},
					r = function() {
						t && (t.img.off(".mfploader"), t === m.currItem && (m._onImageHasSize(t), m.updateStatus("error", s.tError.replace("%url%", t.src))), t.hasSize = !0, t.loaded = !0, t.loadError = !0)
					},
					s = m.st.image,
					a = e.find(".mfp-img");
				return a.length && ((n = document.createElement("img")).className = "mfp-img", t.el && t.el.find("img").length && (n.alt = t.el.find("img").attr("alt")), t.img = u(n).on("load.mfploader", o).on("error.mfploader", r), n.src = t.src, a.is("img") && (t.img = t.img.clone()), 0 < (n = t.img[0]).naturalWidth ? t.hasSize = !0 : n.width || (t.hasSize = !1)), m._parseMarkup(e, {
					title: function(t) {
						if (t.data && void 0 !== t.data.title) return t.data.title;
						var e = m.st.image.titleSrc;
						if (e) {
							if (u.isFunction(e)) return e.call(m, t);
							if (t.el) return t.el.attr(e) || ""
						}
						return ""
					}(t),
					img_replaceWith: t.img
				}, t), m.resizeImage(), t.hasSize ? (O && clearInterval(O), t.loadError ? (e.addClass("mfp-loading"), m.updateStatus("error", s.tError.replace("%url%", t.src))) : (e.removeClass("mfp-loading"), m.updateStatus("ready"))) : (m.updateStatus("loading"), t.loading = !0, t.hasSize || (t.imgHidden = !0, e.addClass("mfp-loading"), m.findImageSize(t))), e
			}
		}
	});
	var A;
	u.magnificPopup.registerModule("zoom", {
		options: {
			enabled: !1,
			easing: "ease-in-out",
			duration: 300,
			opener: function(t) {
				return t.is("img") ? t : t.find("img")
			}
		},
		proto: {
			initZoom: function() {
				var t, e, n, i, o, r, s = m.st.zoom,
					a = ".zoom";
				s.enabled && m.supportsTransition && (i = s.duration, o = function(t) {
					var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
						n = "all " + s.duration / 1e3 + "s " + s.easing,
						i = {
							position: "fixed",
							zIndex: 9999,
							left: 0,
							top: 0,
							"-webkit-backface-visibility": "hidden"
						},
						o = "transition";
					return i["-webkit-" + o] = i["-moz-" + o] = i["-o-" + o] = i[o] = n, e.css(i), e
				}, r = function() {
					m.content.css("visibility", "visible")
				}, d("BuildControls" + a, function() {
					if (m._allowZoom()) {
						if (clearTimeout(e), m.content.css("visibility", "hidden"), !(t = m._getItemToZoom())) return void r();
						(n = o(t)).css(m._getOffset()), m.wrap.append(n), e = setTimeout(function() {
							n.css(m._getOffset(!0)), e = setTimeout(function() {
								r(), setTimeout(function() {
									n.remove(), t = n = null, p("ZoomAnimationEnded")
								}, 16)
							}, i)
						}, 16)
					}
				}), d(c + a, function() {
					if (m._allowZoom()) {
						if (clearTimeout(e), m.st.removalDelay = i, !t) {
							if (!(t = m._getItemToZoom())) return;
							n = o(t)
						}
						n.css(m._getOffset(!0)), m.wrap.append(n), m.content.css("visibility", "hidden"), setTimeout(function() {
							n.css(m._getOffset())
						}, 16)
					}
				}), d(l + a, function() {
					m._allowZoom() && (r(), n && n.remove(), t = null)
				}))
			},
			_allowZoom: function() {
				return "image" === m.currItem.type
			},
			_getItemToZoom: function() {
				return !!m.currItem.hasSize && m.currItem.img
			},
			_getOffset: function(t) {
				var e = t ? m.currItem.img : m.st.zoom.opener(m.currItem.el || m.currItem),
					n = e.offset(),
					i = parseInt(e.css("padding-top"), 10),
					o = parseInt(e.css("padding-bottom"), 10);
				n.top -= u(window).scrollTop() - i;
				var r = {
					width: e.width(),
					height: (a ? e.innerHeight() : e[0].offsetHeight) - o - i
				};
				return void 0 === A && (A = void 0 !== document.createElement("p").style.MozTransform), A ? r["-moz-transform"] = r.transform = "translate(" + n.left + "px," + n.top + "px)" : (r.left = n.left, r.top = n.top), r
			}
		}
	});

	function N(t) {
		var e;
		!m.currTemplate[R] || (e = m.currTemplate[R].find("iframe")).length && (t || (e[0].src = "//about:blank"), m.isIE8 && e.css("display", t ? "block" : "none"))
	}
	var R = "iframe";
	u.magnificPopup.registerModule(R, {
		options: {
			markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
			srcAction: "iframe_src",
			patterns: {
				youtube: {
					index: "youtube.com",
					id: "v=",
					src: "//www.youtube.com/embed/%id%?autoplay=1"
				},
				vimeo: {
					index: "vimeo.com/",
					id: "/",
					src: "//player.vimeo.com/video/%id%?autoplay=1"
				},
				gmaps: {
					index: "//maps.google.",
					src: "%id%&output=embed"
				}
			}
		},
		proto: {
			initIframe: function() {
				m.types.push(R), d("BeforeChange", function(t, e, n) {
					e !== n && (e === R ? N() : n === R && N(!0))
				}), d(l + "." + R, function() {
					N()
				})
			},
			getIframe: function(t, e) {
				var n = t.src,
					i = m.st.iframe;
				u.each(i.patterns, function() {
					return -1 < n.indexOf(this.index) ? (this.id && (n = "string" == typeof this.id ? n.substr(n.lastIndexOf(this.id) + this.id.length, n.length) : this.id.call(this, n)), n = this.src.replace("%id%", n), !1) : void 0
				});
				var o = {};
				return i.srcAction && (o[i.srcAction] = n), m._parseMarkup(e, o, t), m.updateStatus("ready"), e
			}
		}
	});

	function j(t) {
		var e = m.items.length;
		return e - 1 < t ? t - e : t < 0 ? e + t : t
	}

	function F(t, e, n) {
		return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, n)
	}
	u.magnificPopup.registerModule("gallery", {
		options: {
			enabled: !1,
			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
			preload: [0, 2],
			navigateByImgClick: !0,
			arrows: !0,
			tPrev: "Previous (Left arrow key)",
			tNext: "Next (Right arrow key)",
			tCounter: "%curr% of %total%"
		},
		proto: {
			initGallery: function() {
				var r = m.st.gallery,
					t = ".mfp-gallery";
				return m.direction = !0, !(!r || !r.enabled) && (v += " mfp-gallery", d(b + t, function() {
					r.navigateByImgClick && m.wrap.on("click" + t, ".mfp-img", function() {
						return 1 < m.items.length ? (m.next(), !1) : void 0
					}), g.on("keydown" + t, function(t) {
						37 === t.keyCode ? m.prev() : 39 === t.keyCode && m.next()
					})
				}), d("UpdateStatus" + t, function(t, e) {
					e.text && (e.text = F(e.text, m.currItem.index, m.items.length))
				}), d(y + t, function(t, e, n, i) {
					var o = m.items.length;
					n.counter = 1 < o ? F(r.tCounter, i.index, o) : ""
				}), d("BuildControls" + t, function() {
					var t, e, n;
					1 < m.items.length && r.arrows && !m.arrowLeft && (t = r.arrowMarkup, e = m.arrowLeft = u(t.replace(/%title%/gi, r.tPrev).replace(/%dir%/gi, "left")).addClass(s), n = m.arrowRight = u(t.replace(/%title%/gi, r.tNext).replace(/%dir%/gi, "right")).addClass(s), e.click(function() {
						m.prev()
					}), n.click(function() {
						m.next()
					}), m.container.append(e.add(n)))
				}), d("Change" + t, function() {
					m._preloadTimeout && clearTimeout(m._preloadTimeout), m._preloadTimeout = setTimeout(function() {
						m.preloadNearbyImages(), m._preloadTimeout = null
					}, 16)
				}), void d(l + t, function() {
					g.off(t), m.wrap.off("click" + t), m.arrowRight = m.arrowLeft = null
				}))
			},
			next: function() {
				m.direction = !0, m.index = j(m.index + 1), m.updateItemHTML()
			},
			prev: function() {
				m.direction = !1, m.index = j(m.index - 1), m.updateItemHTML()
			},
			goTo: function(t) {
				m.direction = t >= m.index, m.index = t, m.updateItemHTML()
			},
			preloadNearbyImages: function() {
				for (var t = m.st.gallery.preload, e = Math.min(t[0], m.items.length), n = Math.min(t[1], m.items.length), i = 1; i <= (m.direction ? n : e); i++) m._preloadItem(m.index + i);
				for (i = 1; i <= (m.direction ? e : n); i++) m._preloadItem(m.index - i)
			},
			_preloadItem: function(t) {
				var e;
				t = j(t), m.items[t].preloaded || ((e = m.items[t]).parsed || (e = m.parseEl(t)), p("LazyLoad", e), "image" === e.type && (e.img = u('<img class="mfp-img" />').on("load.mfploader", function() {
					e.hasSize = !0
				}).on("error.mfploader", function() {
					e.hasSize = !0, e.loadError = !0, p("LazyLoadError", e)
				}).attr("src", e.src)), e.preloaded = !0)
			}
		}
	});
	var P = "retina";
	u.magnificPopup.registerModule(P, {
		options: {
			replaceSrc: function(t) {
				return t.src.replace(/\.\w+$/, function(t) {
					return "@2x" + t
				})
			},
			ratio: 1
		},
		proto: {
			initRetina: function() {
				var n, i;
				1 < window.devicePixelRatio && (n = m.st.retina, i = n.ratio, 1 < (i = isNaN(i) ? i() : i) && (d("ImageHasSize." + P, function(t, e) {
					e.img.css({
						"max-width": e.img[0].naturalWidth / i,
						width: "100%"
					})
				}), d("ElementParse." + P, function(t, e) {
					e.src = n.replaceSrc(e, i)
				})))
			}
		}
	}), r()
}),
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "modernizr"], t) : "object" == typeof exports ? module.exports = t(require("jquery"), window.Modernizr) : window.Shuffle = t(window.jQuery, window.Modernizr)
}(function(d, t, s) {
	"use strict";

	function r(t, e, n) {
		for (var i = 0, o = t.length; i < o; i++)
			if (e.call(n, t[i], i, t) === {}) return
	}

	function n(t, e, n) {
		return setTimeout(d.proxy(t, e), n)
	}

	function a(t) {
		return Math.max.apply(Math, t)
	}

	function i(t) {
		return d.isNumeric(t) ? t : 0
	}
	if ("object" != typeof t) throw new Error("Shuffle.js requires Modernizr.\nhttp://vestride.github.io/Shuffle/#dependencies");

	function l(t, e) {
		this.x = i(t), this.y = i(e)
	}
	var e, o = t.prefixed("transition"),
		c = t.prefixed("transitionDelay"),
		u = t.prefixed("transitionDuration"),
		h = {
			WebkitTransition: "webkitTransitionEnd",
			transition: "transitionend"
		} [o],
		p = t.prefixed("transform"),
		f = (e = p) ? e.replace(/([A-Z])/g, function(t, e) {
			return "-" + e.toLowerCase()
		}).replace(/^ms-/, "-ms-") : "",
		m = t.csstransforms && t.csstransitions,
		g = t.csstransforms3d,
		v = !!window.getComputedStyle,
		y = "shuffle",
		b = "all",
		w = window.getComputedStyle || function() {};
	l.equals = function(t, e) {
		return t.x === e.x && t.y === e.y
	};
	var x = function() {
			if (!v) return !1;
			var t = document.body || document.documentElement,
				e = document.createElement("div");
			e.style.cssText = "width:10px;padding:2px;-webkit-box-sizing:border-box;box-sizing:border-box;", t.appendChild(e);
			var n = "10px" === w(e, null).width;
			return t.removeChild(e), n
		}(),
		_ = 0,
		C = d(window),
		T = function(t, e) {
			e = e || {}, d.extend(this, T.options, e, T.settings), this.$el = d(t), this.element = t, this.unique = "shuffle_" + _++, this._fire(T.EventType.LOADING), this._init(), n(function() {
				this.initialized = !0, this._fire(T.EventType.DONE)
			}, this, 16)
		};
	return T.EventType = {
		LOADING: "loading",
		DONE: "done",
		LAYOUT: "layout",
		REMOVED: "removed"
	}, T.ClassName = {
		BASE: y,
		SHUFFLE_ITEM: "shuffle-item",
		FILTERED: "filtered",
		CONCEALED: "concealed"
	}, T.options = {
		group: b,
		speed: 250,
		easing: "ease-out",
		itemSelector: "",
		sizer: null,
		gutterWidth: 0,
		columnWidth: 0,
		delimeter: null,
		buffer: 0,
		columnThreshold: v ? .01 : .1,
		initialSort: null,
		throttle: function(n, i, o) {
			var r, s, a, l = null,
				c = 0;

			function u() {
				c = !1 === o.leading ? 0 : d.now(), l = null, a = n.apply(r, s), r = s = null
			}
			return o = o || {},
				function() {
					var t = d.now();
					c || !1 !== o.leading || (c = t);
					var e = i - (t - c);
					return r = this, s = arguments, e <= 0 || i < e ? (clearTimeout(l), l = null, c = t, a = n.apply(r, s), r = s = null) : l || !1 === o.trailing || (l = setTimeout(u, e)), a
				}
		},
		throttleTime: 300,
		sequentialFadeDelay: 150,
		supported: m
	}, T.settings = {
		useSizer: !1,
		itemCss: {
			position: "absolute",
			top: 0,
			left: 0,
			visibility: "visible"
		},
		revealAppendedDelay: 300,
		lastSort: {},
		lastFilter: b,
		enabled: !0,
		destroyed: !1,
		initialized: !1,
		_animations: [],
		_transitions: [],
		_isMovementCanceled: !1,
		styleQueue: []
	}, T.Point = l, T._getItemTransformString = function(t, e) {
		return g ? "translate3d(" + t.x + "px, " + t.y + "px, 0) scale3d(" + e + ", " + e + ", 1)" : "translate(" + t.x + "px, " + t.y + "px) scale(" + e + ")"
	}, T._getNumberStyle = function(t, e, n) {
		if (v) {
			n = n || w(t, null);
			var i = T._getFloat(n[e]);
			return x || "width" !== e ? x || "height" !== e || (i += T._getFloat(n.paddingTop) + T._getFloat(n.paddingBottom) + T._getFloat(n.borderTopWidth) + T._getFloat(n.borderBottomWidth)) : i += T._getFloat(n.paddingLeft) + T._getFloat(n.paddingRight) + T._getFloat(n.borderLeftWidth) + T._getFloat(n.borderRightWidth), i
		}
		return T._getFloat(d(t).css(e))
	}, T._getFloat = function(t) {
		return i(parseFloat(t))
	}, T._getOuterWidth = function(t, e) {
		var n = w(t, null),
			i = T._getNumberStyle(t, "width", n);
		return e && (i += T._getNumberStyle(t, "marginLeft", n) + T._getNumberStyle(t, "marginRight", n)), i
	}, T._getOuterHeight = function(t, e) {
		var n = w(t, null),
			i = T._getNumberStyle(t, "height", n);
		return e && (i += T._getNumberStyle(t, "marginTop", n) + T._getNumberStyle(t, "marginBottom", n)), i
	}, T._skipTransition = function(t, e, n) {
		var i = t.style[u];
		t.style[u] = "0ms", e.call(n);
		t.offsetWidth;
		t.style[u] = i
	}, T.prototype._init = function() {
		this.$items = this._getItems(), this.sizer = this._getElementOption(this.sizer), this.sizer && (this.useSizer = !0), this.$el.addClass(T.ClassName.BASE), this._initItems(), C.on("resize." + y + "." + this.unique, this._getResizeFunction());
		var t = this.$el.css(["position", "overflow"]),
			e = T._getOuterWidth(this.element);
		this._validateStyles(t), this._setColumns(e), this.shuffle(this.group, this.initialSort), this.supported && n(function() {
			this._setTransitions(), this.element.style[o] = "height " + this.speed + "ms " + this.easing
		}, this)
	}, T.prototype._getResizeFunction = function() {
		var t = d.proxy(this._onResize, this);
		return this.throttle ? this.throttle(t, this.throttleTime) : t
	}, T.prototype._getElementOption = function(t) {
		return "string" == typeof t ? this.$el.find(t)[0] || null : t && t.nodeType && 1 === t.nodeType ? t : t && t.jquery ? t[0] : null
	}, T.prototype._validateStyles = function(t) {
		"static" === t.position && (this.element.style.position = "relative"), "hidden" !== t.overflow && (this.element.style.overflow = "hidden")
	}, T.prototype._filter = function(t, e) {
		t = t || this.lastFilter, e = e || this.$items;
		var n = this._getFilteredSets(t, e);
		return this._toggleFilterClasses(n.filtered, n.concealed), "string" == typeof(this.lastFilter = t) && (this.group = t), n.filtered
	}, T.prototype._getFilteredSets = function(n, t) {
		var i = d(),
			o = d();
		return n === b ? i = t : r(t, function(t) {
			var e = d(t);
			this._doesPassFilter(n, e) ? i = i.add(e) : o = o.add(e)
		}, this), {
			filtered: i,
			concealed: o
		}
	}, T.prototype._doesPassFilter = function(t, e) {
		if (d.isFunction(t)) return t.call(e[0], e, this);
		var n = e.data("groups"),
			i = this.delimeter && !d.isArray(n) ? n.split(this.delimeter) : n;
		return -1 < d.inArray(t, i)
	}, T.prototype._toggleFilterClasses = function(t, e) {
		t.removeClass(T.ClassName.CONCEALED).addClass(T.ClassName.FILTERED), e.removeClass(T.ClassName.FILTERED).addClass(T.ClassName.CONCEALED)
	}, T.prototype._initItems = function(t) {
		(t = t || this.$items).addClass([T.ClassName.SHUFFLE_ITEM, T.ClassName.FILTERED].join(" ")), t.css(this.itemCss).data("point", new l).data("scale", 1)
	}, T.prototype._updateItemCount = function() {
		this.visibleItems = this._getFilteredItems().length
	}, T.prototype._setTransition = function(t) {
		t.style[o] = f + " " + this.speed + "ms " + this.easing + ", opacity " + this.speed + "ms " + this.easing
	}, T.prototype._setTransitions = function(t) {
		r(t = t || this.$items, function(t) {
			this._setTransition(t)
		}, this)
	}, T.prototype._setSequentialDelay = function(t) {
		this.supported && r(t, function(t, e) {
			t.style[c] = "0ms," + (e + 1) * this.sequentialFadeDelay + "ms"
		}, this)
	}, T.prototype._getItems = function() {
		return this.$el.children(this.itemSelector)
	}, T.prototype._getFilteredItems = function() {
		return this.$items.filter("." + T.ClassName.FILTERED)
	}, T.prototype._getConcealedItems = function() {
		return this.$items.filter("." + T.ClassName.CONCEALED)
	}, T.prototype._getColumnSize = function(t, e) {
		var n = d.isFunction(this.columnWidth) ? this.columnWidth(t) : this.useSizer ? T._getOuterWidth(this.sizer) : this.columnWidth ? this.columnWidth : 0 < this.$items.length ? T._getOuterWidth(this.$items[0], !0) : t;
		return 0 === n && (n = t), n + e
	}, T.prototype._getGutterSize = function(t) {
		return d.isFunction(this.gutterWidth) ? this.gutterWidth(t) : this.useSizer ? T._getNumberStyle(this.sizer, "marginLeft") : this.gutterWidth
	}, T.prototype._setColumns = function(t) {
		var e = t || T._getOuterWidth(this.element),
			n = this._getGutterSize(e),
			i = this._getColumnSize(e, n),
			o = (e + n) / i;
		Math.abs(Math.round(o) - o) < this.columnThreshold && (o = Math.round(o)), this.cols = Math.max(Math.floor(o), 1), this.containerWidth = e, this.colWidth = i
	}, T.prototype._setContainerSize = function() {
		this.$el.css("height", this._getContainerSize())
	}, T.prototype._getContainerSize = function() {
		return a(this.positions)
	}, T.prototype._fire = function(t, e) {
		this.$el.trigger(t + "." + y, e && e.length ? e : [this])
	}, T.prototype._resetCols = function() {
		var t = this.cols;
		for (this.positions = []; t--;) this.positions.push(0)
	}, T.prototype._layout = function(t, e) {
		r(t, function(t) {
			this._layoutItem(t, !!e)
		}, this), this._processStyleQueue(), this._setContainerSize()
	}, T.prototype._layoutItem = function(t, e) {
		var n = d(t),
			i = n.data(),
			o = i.point,
			r = i.scale,
			s = {
				width: T._getOuterWidth(t, !0),
				height: T._getOuterHeight(t, !0)
			},
			a = this._getItemPosition(s);
		l.equals(o, a) && 1 === r || (i.point = a, i.scale = 1, this.styleQueue.push({
			$item: n,
			point: a,
			scale: 1,
			opacity: e ? 0 : 1,
			skipTransition: e || 0 === this.speed,
			callfront: function() {
				e || n.css("visibility", "visible")
			},
			callback: function() {
				e && n.css("visibility", "hidden")
			}
		}))
	}, T.prototype._getItemPosition = function(t) {
		for (var e = this._getColumnSpan(t.width, this.colWidth, this.cols), n = this._getColumnSet(e, this.cols), i = this._getShortColumn(n, this.buffer), o = new l(Math.round(this.colWidth * i), Math.round(n[i])), r = n[i] + t.height, s = this.cols + 1 - n.length, a = 0; a < s; a++) this.positions[i + a] = r;
		return o
	}, T.prototype._getColumnSpan = function(t, e, n) {
		var i = t / e;
		return Math.abs(Math.round(i) - i) < this.columnThreshold && (i = Math.round(i)), Math.min(Math.ceil(i), n)
	}, T.prototype._getColumnSet = function(t, e) {
		if (1 === t) return this.positions;
		for (var n = e + 1 - t, i = [], o = 0; o < n; o++) i[o] = a(this.positions.slice(o, o + t));
		return i
	}, T.prototype._getShortColumn = function(t, e) {
		for (var n, i = (n = t, Math.min.apply(Math, n)), o = 0, r = t.length; o < r; o++)
			if (t[o] >= i - e && t[o] <= i + e) return o;
		return 0
	}, T.prototype._shrink = function(t) {
		r(t || this._getConcealedItems(), function(t) {
			var e = d(t),
				n = e.data();
			.001 !== n.scale && (n.scale = .001, this.styleQueue.push({
				$item: e,
				point: n.point,
				scale: .001,
				opacity: 0,
				callback: function() {
					e.css("visibility", "hidden")
				}
			}))
		}, this)
	}, T.prototype._onResize = function() {
		this.enabled && !this.destroyed && T._getOuterWidth(this.element) !== this.containerWidth && this.update()
	}, T.prototype._getStylesForTransition = function(t) {
		var e = {
			opacity: t.opacity
		};
		return this.supported ? e[p] = T._getItemTransformString(t.point, t.scale) : (e.left = t.point.x, e.top = t.point.y), e
	}, T.prototype._transition = function(t) {
		var e = this._getStylesForTransition(t);
		this._startItemAnimation(t.$item, e, t.callfront || d.noop, t.callback || d.noop)
	}, T.prototype._startItemAnimation = function(t, e, n, i) {
		function o(t) {
			t.target === t.currentTarget && (d(t.target).off(h, o), s._removeTransitionReference(a), i())
		}
		var r, s = this,
			a = {
				$element: t,
				handler: o
			};
		if (n(), !this.initialized) return t.css(e), void i();
		this.supported ? (t.css(e), t.on(h, o), this._transitions.push(a)) : (r = t.stop(!0).animate(e, this.speed, "swing", i), this._animations.push(r.promise()))
	}, T.prototype._processStyleQueue = function(t) {
		this.isTransitioning && this._cancelMovement();
		var e = d();
		r(this.styleQueue, function(t) {
			t.skipTransition ? this._styleImmediately(t) : (e = e.add(t.$item), this._transition(t))
		}, this), 0 < e.length && this.initialized && 0 < this.speed ? (this.isTransitioning = !0, this.supported ? this._whenCollectionDone(e, h, this._movementFinished) : this._whenAnimationsDone(this._movementFinished)) : t || n(this._layoutEnd, this), this.styleQueue.length = 0
	}, T.prototype._cancelMovement = function() {
		this.supported ? r(this._transitions, function(t) {
			t.$element.off(h, t.handler)
		}) : (this._isMovementCanceled = !0, this.$items.stop(!0), this._isMovementCanceled = !1), this._transitions.length = 0, this.isTransitioning = !1
	}, T.prototype._removeTransitionReference = function(t) {
		var e = d.inArray(t, this._transitions); - 1 < e && this._transitions.splice(e, 1)
	}, T.prototype._styleImmediately = function(t) {
		T._skipTransition(t.$item[0], function() {
			t.$item.css(this._getStylesForTransition(t))
		}, this)
	}, T.prototype._movementFinished = function() {
		this.isTransitioning = !1, this._layoutEnd()
	}, T.prototype._layoutEnd = function() {
		this._fire(T.EventType.LAYOUT)
	}, T.prototype._addItems = function(t, e, n) {
		this._initItems(t), this._setTransitions(t), this.$items = this._getItems(), this._shrink(t), r(this.styleQueue, function(t) {
			t.skipTransition = !0
		}), this._processStyleQueue(!0), e ? this._addItemsToEnd(t, n) : this.shuffle(this.lastFilter)
	}, T.prototype._addItemsToEnd = function(t, e) {
		var n = this._filter(null, t).get();
		this._updateItemCount(), this._layout(n, !0), e && this.supported && this._setSequentialDelay(n), this._revealAppended(n)
	}, T.prototype._revealAppended = function(t) {
		n(function() {
			r(t, function(t) {
				var e = d(t);
				this._transition({
					$item: e,
					opacity: 1,
					point: e.data("point"),
					scale: 1
				})
			}, this), this._whenCollectionDone(d(t), h, function() {
				d(t).css(c, "0ms"), this._movementFinished()
			})
		}, this, this.revealAppendedDelay)
	}, T.prototype._whenCollectionDone = function(t, e, n) {
		function i(t) {
			t.target === t.currentTarget && (d(t.target).off(e, i), ++o === r && (s._removeTransitionReference(a), n.call(s)))
		}
		var o = 0,
			r = t.length,
			s = this,
			a = {
				$element: t,
				handler: i
			};
		t.on(e, i), this._transitions.push(a)
	}, T.prototype._whenAnimationsDone = function(t) {
		d.when.apply(null, this._animations).always(d.proxy(function() {
			this._animations.length = 0, this._isMovementCanceled || t.call(this)
		}, this))
	}, T.prototype.shuffle = function(t, e) {
		this.enabled && (t = t || b, this._filter(t), this._updateItemCount(), this._shrink(), this.sort(e))
	}, T.prototype.sort = function(t) {
		var e, n;
		this.enabled && (this._resetCols(), e = t || this.lastSort, n = this._getFilteredItems().sorted(e), this._layout(n), this.lastSort = e)
	}, T.prototype.update = function(t) {
		this.enabled && (t || this._setColumns(), this.sort())
	}, T.prototype.layout = function() {
		this.update(!0)
	}, T.prototype.appended = function(t, e, n) {
		this._addItems(t, !0 === e, !1 !== n)
	}, T.prototype.disable = function() {
		this.enabled = !1
	}, T.prototype.enable = function(t) {
		!(this.enabled = !0) !== t && this.update()
	}, T.prototype.remove = function(t) {
		t.length && t.jquery && (this._toggleFilterClasses(d(), t), this._shrink(t), this.sort(), this.$el.one(T.EventType.LAYOUT + "." + y, d.proxy(function() {
			t.remove(), this.$items = this._getItems(), this._updateItemCount(), this._fire(T.EventType.REMOVED, [t, this]), t = null
		}, this)))
	}, T.prototype.destroy = function() {
		C.off("." + this.unique), this.$el.removeClass(y).removeAttr("style").removeData(y), this.$items.removeAttr("style").removeData("point").removeData("scale").removeClass([T.ClassName.CONCEALED, T.ClassName.FILTERED, T.ClassName.SHUFFLE_ITEM].join(" ")), this.$items = null, this.$el = null, this.sizer = null, this.element = null, this._transitions = null, this.destroyed = !0
	}, d.fn.shuffle = function(n) {
		var i = Array.prototype.slice.call(arguments, 1);
		return this.each(function() {
			var t = d(this),
				e = t.data(y);
			e ? "string" == typeof n && e[n] && e[n].apply(e, i) : (e = new T(this, n), t.data(y, e))
		})
	}, d.fn.sorted = function(t) {
		var o = d.extend({}, d.fn.sorted.defaults, t),
			e = this.get(),
			r = !1;
		return e.length ? o.randomize ? function(t) {
			var e, n, i = t.length;
			if (!i) return t;
			for (; --i;) e = t[n = Math.floor(Math.random() * (i + 1))], t[n] = t[i], t[i] = e;
			return t
		}(e) : (d.isFunction(o.by) && e.sort(function(t, e) {
			if (r) return 0;
			var n = o.by(d(t)),
				i = o.by(d(e));
			return n === s && i === s ? (r = !0, 0) : n < i || "sortFirst" === n || "sortLast" === i ? -1 : i < n || "sortLast" === n || "sortFirst" === i ? 1 : 0
		}), r ? this.get() : (o.reverse && e.reverse(), e)) : []
	}, d.fn.sorted.defaults = {
		reverse: !1,
		by: null,
		randomize: !1
	}, T
}),
function(t, e) {
	"object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
		if (!t.document) throw new Error("jQuery requires a window with a document");
		return e(t)
	} : e(t)
}("undefined" != typeof window ? window : this, function(f, t) {
	function e(t, e) {
		return e.toUpperCase()
	}
	var n = [],
		u = n.slice,
		m = n.concat,
		a = n.push,
		o = n.indexOf,
		i = {},
		r = i.toString,
		g = i.hasOwnProperty,
		v = {},
		y = f.document,
		C = function(t, e) {
			return new C.fn.init(t, e)
		},
		s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		l = /^-ms-/,
		c = /-([\da-z])/gi;

	function d(t) {
		var e = t.length,
			n = C.type(t);
		return "function" !== n && !C.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t))
	}
	C.fn = C.prototype = {
		jquery: "2.1.3",
		constructor: C,
		selector: "",
		length: 0,
		toArray: function() {
			return u.call(this)
		},
		get: function(t) {
			return null != t ? t < 0 ? this[t + this.length] : this[t] : u.call(this)
		},
		pushStack: function(t) {
			var e = C.merge(this.constructor(), t);
			return e.prevObject = this, e.context = this.context, e
		},
		each: function(t, e) {
			return C.each(this, t, e)
		},
		map: function(n) {
			return this.pushStack(C.map(this, function(t, e) {
				return n.call(t, e, t)
			}))
		},
		slice: function() {
			return this.pushStack(u.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(t) {
			var e = this.length,
				n = +t + (t < 0 ? e : 0);
			return this.pushStack(0 <= n && n < e ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: a,
		sort: n.sort,
		splice: n.splice
	}, C.extend = C.fn.extend = function() {
		var t, e, n, i, o, r, s = arguments[0] || {},
			a = 1,
			l = arguments.length,
			c = !1;
		for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || C.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
			if (null != (t = arguments[a]))
				for (e in t) n = s[e], s !== (i = t[e]) && (c && i && (C.isPlainObject(i) || (o = C.isArray(i))) ? (r = o ? (o = !1, n && C.isArray(n) ? n : []) : n && C.isPlainObject(n) ? n : {}, s[e] = C.extend(c, r, i)) : void 0 !== i && (s[e] = i));
		return s
	}, C.extend({
		expando: "jQuery" + ("2.1.3" + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(t) {
			throw new Error(t)
		},
		noop: function() {},
		isFunction: function(t) {
			return "function" === C.type(t)
		},
		isArray: Array.isArray,
		isWindow: function(t) {
			return null != t && t === t.window
		},
		isNumeric: function(t) {
			return !C.isArray(t) && 0 <= t - parseFloat(t) + 1
		},
		isPlainObject: function(t) {
			return "object" === C.type(t) && !t.nodeType && !C.isWindow(t) && !(t.constructor && !g.call(t.constructor.prototype, "isPrototypeOf"))
		},
		isEmptyObject: function(t) {
			var e;
			for (e in t) return !1;
			return !0
		},
		type: function(t) {
			return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? i[r.call(t)] || "object" : typeof t
		},
		globalEval: function(t) {
			var e, n = eval;
			(t = C.trim(t)) && (1 === t.indexOf("use strict") ? ((e = y.createElement("script")).text = t, y.head.appendChild(e).parentNode.removeChild(e)) : n(t))
		},
		camelCase: function(t) {
			return t.replace(l, "ms-").replace(c, e)
		},
		nodeName: function(t, e) {
			return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
		},
		each: function(t, e, n) {
			var i = 0,
				o = t.length,
				r = d(t);
			if (n) {
				if (r)
					for (; i < o && !1 !== e.apply(t[i], n); i++);
				else
					for (i in t)
						if (!1 === e.apply(t[i], n)) break
			} else if (r)
				for (; i < o && !1 !== e.call(t[i], i, t[i]); i++);
			else
				for (i in t)
					if (!1 === e.call(t[i], i, t[i])) break;
			return t
		},
		trim: function(t) {
			return null == t ? "" : (t + "").replace(s, "")
		},
		makeArray: function(t, e) {
			var n = e || [];
			return null != t && (d(Object(t)) ? C.merge(n, "string" == typeof t ? [t] : t) : a.call(n, t)), n
		},
		inArray: function(t, e, n) {
			return null == e ? -1 : o.call(e, t, n)
		},
		merge: function(t, e) {
			for (var n = +e.length, i = 0, o = t.length; i < n; i++) t[o++] = e[i];
			return t.length = o, t
		},
		grep: function(t, e, n) {
			for (var i = [], o = 0, r = t.length, s = !n; o < r; o++) !e(t[o], o) != s && i.push(t[o]);
			return i
		},
		map: function(t, e, n) {
			var i, o = 0,
				r = t.length,
				s = [];
			if (d(t))
				for (; o < r; o++) null != (i = e(t[o], o, n)) && s.push(i);
			else
				for (o in t) null != (i = e(t[o], o, n)) && s.push(i);
			return m.apply([], s)
		},
		guid: 1,
		proxy: function(t, e) {
			var n, i, o;
			return "string" == typeof e && (n = t[e], e = t, t = n), C.isFunction(t) ? (i = u.call(arguments, 2), (o = function() {
				return t.apply(e || this, i.concat(u.call(arguments)))
			}).guid = t.guid = t.guid || C.guid++, o) : void 0
		},
		now: Date.now,
		support: v
	}), C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
		i["[object " + e + "]"] = e.toLowerCase()
	});
	var h = function(n) {
		function d(t, e, n) {
			var i = "0x" + e - 65536;
			return i != i || n ? e : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
		}

		function i() {
			v()
		}
		var t, f, w, r, o, m, h, g, x, c, u, v, _, s, y, b, a, p, C, T = "sizzle" + +new Date,
			E = n.document,
			S = 0,
			k = 0,
			l = rt(),
			L = rt(),
			I = rt(),
			D = function(t, e) {
				return t === e && (u = !0), 0
			},
			z = {}.hasOwnProperty,
			e = [],
			O = e.pop,
			A = e.push,
			N = e.push,
			R = e.slice,
			j = function(t, e) {
				for (var n = 0, i = t.length; n < i; n++)
					if (t[n] === e) return n;
				return -1
			},
			F = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			P = "[\\x20\\t\\r\\n\\f]",
			W = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			M = W.replace("w", "w#"),
			$ = "\\[" + P + "*(" + W + ")(?:" + P + "*([*^$|!~]?=)" + P + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + P + "*\\]",
			H = ":(" + W + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
			B = new RegExp(P + "+", "g"),
			q = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
			Y = new RegExp("^" + P + "*," + P + "*"),
			X = new RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"),
			U = new RegExp("=" + P + "*([^\\]'\"]*?)" + P + "*\\]", "g"),
			Q = new RegExp(H),
			V = new RegExp("^" + M + "$"),
			K = {
				ID: new RegExp("^#(" + W + ")"),
				CLASS: new RegExp("^\\.(" + W + ")"),
				TAG: new RegExp("^(" + W.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + $),
				PSEUDO: new RegExp("^" + H),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + F + ")$", "i"),
				needsContext: new RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")
			},
			Z = /^(?:input|select|textarea|button)$/i,
			G = /^h\d$/i,
			J = /^[^{]+\{\s*\[native \w/,
			tt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			et = /[+~]/,
			nt = /'|\\/g,
			it = new RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig");
		try {
			N.apply(e = R.call(E.childNodes), E.childNodes), e[E.childNodes.length].nodeType
		} catch (t) {
			N = {
				apply: e.length ? function(t, e) {
					A.apply(t, R.call(e))
				} : function(t, e) {
					for (var n = t.length, i = 0; t[n++] = e[i++];);
					t.length = n - 1
				}
			}
		}

		function ot(t, e, n, i) {
			var o, r, s, a, l, c, u, d, h, p;
			if ((e ? e.ownerDocument || e : E) !== _ && v(e), n = n || [], a = (e = e || _).nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return n;
			if (!i && y) {
				if (11 !== a && (o = tt.exec(t)))
					if (s = o[1]) {
						if (9 === a) {
							if (!(r = e.getElementById(s)) || !r.parentNode) return n;
							if (r.id === s) return n.push(r), n
						} else if (e.ownerDocument && (r = e.ownerDocument.getElementById(s)) && C(e, r) && r.id === s) return n.push(r), n
					} else {
						if (o[2]) return N.apply(n, e.getElementsByTagName(t)), n;
						if ((s = o[3]) && f.getElementsByClassName) return N.apply(n, e.getElementsByClassName(s)), n
					} if (f.qsa && (!b || !b.test(t))) {
					if (d = u = T, h = e, p = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
						for (c = m(t), (u = e.getAttribute("id")) ? d = u.replace(nt, "\\$&") : e.setAttribute("id", d), d = "[id='" + d + "'] ", l = c.length; l--;) c[l] = d + pt(c[l]);
						h = et.test(t) && dt(e.parentNode) || e, p = c.join(",")
					}
					if (p) try {
						return N.apply(n, h.querySelectorAll(p)), n
					} catch (t) {} finally {
						u || e.removeAttribute("id")
					}
				}
			}
			return g(t.replace(q, "$1"), e, n, i)
		}

		function rt() {
			var n = [];

			function i(t, e) {
				return n.push(t + " ") > w.cacheLength && delete i[n.shift()], i[t + " "] = e
			}
			return i
		}

		function st(t) {
			return t[T] = !0, t
		}

		function at(t) {
			var e = _.createElement("div");
			try {
				return !!t(e)
			} catch (t) {
				return !1
			} finally {
				e.parentNode && e.parentNode.removeChild(e), e = null
			}
		}

		function lt(t, e) {
			for (var n = t.split("|"), i = t.length; i--;) w.attrHandle[n[i]] = e
		}

		function ct(t, e) {
			var n = e && t,
				i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || 1 << 31) - (~t.sourceIndex || 1 << 31);
			if (i) return i;
			if (n)
				for (; n = n.nextSibling;)
					if (n === e) return -1;
			return t ? 1 : -1
		}

		function ut(s) {
			return st(function(r) {
				return r = +r, st(function(t, e) {
					for (var n, i = s([], t.length, r), o = i.length; o--;) t[n = i[o]] && (t[n] = !(e[n] = t[n]))
				})
			})
		}

		function dt(t) {
			return t && void 0 !== t.getElementsByTagName && t
		}
		for (t in f = ot.support = {}, o = ot.isXML = function(t) {
				var e = t && (t.ownerDocument || t).documentElement;
				return !!e && "HTML" !== e.nodeName
			}, v = ot.setDocument = function(t) {
				var e, n, l = t ? t.ownerDocument || t : E;
				return l !== _ && 9 === l.nodeType && l.documentElement ? (s = (_ = l).documentElement, (n = l.defaultView) && n !== n.top && (n.addEventListener ? n.addEventListener("unload", i, !1) : n.attachEvent && n.attachEvent("onunload", i)), y = !o(l), f.attributes = at(function(t) {
					return t.className = "i", !t.getAttribute("className")
				}), f.getElementsByTagName = at(function(t) {
					return t.appendChild(l.createComment("")), !t.getElementsByTagName("*").length
				}), f.getElementsByClassName = J.test(l.getElementsByClassName), f.getById = at(function(t) {
					return s.appendChild(t).id = T, !l.getElementsByName || !l.getElementsByName(T).length
				}), f.getById ? (w.find.ID = function(t, e) {
					if (void 0 !== e.getElementById && y) {
						var n = e.getElementById(t);
						return n && n.parentNode ? [n] : []
					}
				}, w.filter.ID = function(t) {
					var e = t.replace(it, d);
					return function(t) {
						return t.getAttribute("id") === e
					}
				}) : (delete w.find.ID, w.filter.ID = function(t) {
					var n = t.replace(it, d);
					return function(t) {
						var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
						return e && e.value === n
					}
				}), w.find.TAG = f.getElementsByTagName ? function(t, e) {
					return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : f.qsa ? e.querySelectorAll(t) : void 0
				} : function(t, e) {
					var n, i = [],
						o = 0,
						r = e.getElementsByTagName(t);
					if ("*" !== t) return r;
					for (; n = r[o++];) 1 === n.nodeType && i.push(n);
					return i
				}, w.find.CLASS = f.getElementsByClassName && function(t, e) {
					return y ? e.getElementsByClassName(t) : void 0
				}, a = [], b = [], (f.qsa = J.test(l.querySelectorAll)) && (at(function(t) {
					s.appendChild(t).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && b.push("[*^$]=" + P + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || b.push("\\[" + P + "*(?:value|" + F + ")"), t.querySelectorAll("[id~=" + T + "-]").length || b.push("~="), t.querySelectorAll(":checked").length || b.push(":checked"), t.querySelectorAll("a#" + T + "+*").length || b.push(".#.+[+~]")
				}), at(function(t) {
					var e = l.createElement("input");
					e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && b.push("name" + P + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || b.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), b.push(",.*:")
				})), (f.matchesSelector = J.test(p = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && at(function(t) {
					f.disconnectedMatch = p.call(t, "div"), p.call(t, "[s!='']:x"), a.push("!=", H)
				}), b = b.length && new RegExp(b.join("|")), a = a.length && new RegExp(a.join("|")), e = J.test(s.compareDocumentPosition), C = e || J.test(s.contains) ? function(t, e) {
					var n = 9 === t.nodeType ? t.documentElement : t,
						i = e && e.parentNode;
					return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
				} : function(t, e) {
					if (e)
						for (; e = e.parentNode;)
							if (e === t) return !0;
					return !1
				}, D = e ? function(t, e) {
					if (t === e) return u = !0, 0;
					var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
					return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !f.sortDetached && e.compareDocumentPosition(t) === n ? t === l || t.ownerDocument === E && C(E, t) ? -1 : e === l || e.ownerDocument === E && C(E, e) ? 1 : c ? j(c, t) - j(c, e) : 0 : 4 & n ? -1 : 1)
				} : function(t, e) {
					if (t === e) return u = !0, 0;
					var n, i = 0,
						o = t.parentNode,
						r = e.parentNode,
						s = [t],
						a = [e];
					if (!o || !r) return t === l ? -1 : e === l ? 1 : o ? -1 : r ? 1 : c ? j(c, t) - j(c, e) : 0;
					if (o === r) return ct(t, e);
					for (n = t; n = n.parentNode;) s.unshift(n);
					for (n = e; n = n.parentNode;) a.unshift(n);
					for (; s[i] === a[i];) i++;
					return i ? ct(s[i], a[i]) : s[i] === E ? -1 : a[i] === E ? 1 : 0
				}, l) : _
			}, ot.matches = function(t, e) {
				return ot(t, null, null, e)
			}, ot.matchesSelector = function(t, e) {
				if ((t.ownerDocument || t) !== _ && v(t), e = e.replace(U, "='$1']"), !(!f.matchesSelector || !y || a && a.test(e) || b && b.test(e))) try {
					var n = p.call(t, e);
					if (n || f.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
				} catch (t) {}
				return 0 < ot(e, _, null, [t]).length
			}, ot.contains = function(t, e) {
				return (t.ownerDocument || t) !== _ && v(t), C(t, e)
			}, ot.attr = function(t, e) {
				(t.ownerDocument || t) !== _ && v(t);
				var n = w.attrHandle[e.toLowerCase()],
					i = n && z.call(w.attrHandle, e.toLowerCase()) ? n(t, e, !y) : void 0;
				return void 0 !== i ? i : f.attributes || !y ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
			}, ot.error = function(t) {
				throw new Error("Syntax error, unrecognized expression: " + t)
			}, ot.uniqueSort = function(t) {
				var e, n = [],
					i = 0,
					o = 0;
				if (u = !f.detectDuplicates, c = !f.sortStable && t.slice(0), t.sort(D), u) {
					for (; e = t[o++];) e === t[o] && (i = n.push(o));
					for (; i--;) t.splice(n[i], 1)
				}
				return c = null, t
			}, r = ot.getText = function(t) {
				var e, n = "",
					i = 0,
					o = t.nodeType;
				if (o) {
					if (1 === o || 9 === o || 11 === o) {
						if ("string" == typeof t.textContent) return t.textContent;
						for (t = t.firstChild; t; t = t.nextSibling) n += r(t)
					} else if (3 === o || 4 === o) return t.nodeValue
				} else
					for (; e = t[i++];) n += r(e);
				return n
			}, (w = ot.selectors = {
				cacheLength: 50,
				createPseudo: st,
				match: K,
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
					ATTR: function(t) {
						return t[1] = t[1].replace(it, d), t[3] = (t[3] || t[4] || t[5] || "").replace(it, d), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
					},
					CHILD: function(t) {
						return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t
					},
					PSEUDO: function(t) {
						var e, n = !t[6] && t[2];
						return K.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && Q.test(n) && (e = m(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
					}
				},
				filter: {
					TAG: function(t) {
						var e = t.replace(it, d).toLowerCase();
						return "*" === t ? function() {
							return !0
						} : function(t) {
							return t.nodeName && t.nodeName.toLowerCase() === e
						}
					},
					CLASS: function(t) {
						var e = l[t + " "];
						return e || (e = new RegExp("(^|" + P + ")" + t + "(" + P + "|$)")) && l(t, function(t) {
							return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
						})
					},
					ATTR: function(n, i, o) {
						return function(t) {
							var e = ot.attr(t, n);
							return null == e ? "!=" === i : !i || (e += "", "=" === i ? e === o : "!=" === i ? e !== o : "^=" === i ? o && 0 === e.indexOf(o) : "*=" === i ? o && -1 < e.indexOf(o) : "$=" === i ? o && e.slice(-o.length) === o : "~=" === i ? -1 < (" " + e.replace(B, " ") + " ").indexOf(o) : "|=" === i && (e === o || e.slice(0, o.length + 1) === o + "-"))
						}
					},
					CHILD: function(p, t, e, f, m) {
						var g = "nth" !== p.slice(0, 3),
							v = "last" !== p.slice(-4),
							y = "of-type" === t;
						return 1 === f && 0 === m ? function(t) {
							return !!t.parentNode
						} : function(t, e, n) {
							var i, o, r, s, a, l, c = g != v ? "nextSibling" : "previousSibling",
								u = t.parentNode,
								d = y && t.nodeName.toLowerCase(),
								h = !n && !y;
							if (u) {
								if (g) {
									for (; c;) {
										for (r = t; r = r[c];)
											if (y ? r.nodeName.toLowerCase() === d : 1 === r.nodeType) return !1;
										l = c = "only" === p && !l && "nextSibling"
									}
									return !0
								}
								if (l = [v ? u.firstChild : u.lastChild], v && h) {
									for (a = (i = (o = u[T] || (u[T] = {}))[p] || [])[0] === S && i[1], s = i[0] === S && i[2], r = a && u.childNodes[a]; r = ++a && r && r[c] || (s = a = 0) || l.pop();)
										if (1 === r.nodeType && ++s && r === t) {
											o[p] = [S, a, s];
											break
										}
								} else if (h && (i = (t[T] || (t[T] = {}))[p]) && i[0] === S) s = i[1];
								else
									for (;
										(r = ++a && r && r[c] || (s = a = 0) || l.pop()) && ((y ? r.nodeName.toLowerCase() !== d : 1 !== r.nodeType) || !++s || (h && ((r[T] || (r[T] = {}))[p] = [S, s]), r !== t)););
								return (s -= m) === f || s % f == 0 && 0 <= s / f
							}
						}
					},
					PSEUDO: function(t, r) {
						var e, s = w.pseudos[t] || w.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
						return s[T] ? s(r) : 1 < s.length ? (e = [t, t, "", r], w.setFilters.hasOwnProperty(t.toLowerCase()) ? st(function(t, e) {
							for (var n, i = s(t, r), o = i.length; o--;) t[n = j(t, i[o])] = !(e[n] = i[o])
						}) : function(t) {
							return s(t, 0, e)
						}) : s
					}
				},
				pseudos: {
					not: st(function(t) {
						var i = [],
							o = [],
							a = h(t.replace(q, "$1"));
						return a[T] ? st(function(t, e, n, i) {
							for (var o, r = a(t, null, i, []), s = t.length; s--;)(o = r[s]) && (t[s] = !(e[s] = o))
						}) : function(t, e, n) {
							return i[0] = t, a(i, null, n, o), i[0] = null, !o.pop()
						}
					}),
					has: st(function(e) {
						return function(t) {
							return 0 < ot(e, t).length
						}
					}),
					contains: st(function(e) {
						return e = e.replace(it, d),
							function(t) {
								return -1 < (t.textContent || t.innerText || r(t)).indexOf(e)
							}
					}),
					lang: st(function(n) {
						return V.test(n || "") || ot.error("unsupported lang: " + n), n = n.replace(it, d).toLowerCase(),
							function(t) {
								var e;
								do {
									if (e = y ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
								} while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
					}),
					target: function(t) {
						var e = n.location && n.location.hash;
						return e && e.slice(1) === t.id
					},
					root: function(t) {
						return t === s
					},
					focus: function(t) {
						return t === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
					},
					enabled: function(t) {
						return !1 === t.disabled
					},
					disabled: function(t) {
						return !0 === t.disabled
					},
					checked: function(t) {
						var e = t.nodeName.toLowerCase();
						return "input" === e && !!t.checked || "option" === e && !!t.selected
					},
					selected: function(t) {
						return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
					},
					empty: function(t) {
						for (t = t.firstChild; t; t = t.nextSibling)
							if (t.nodeType < 6) return !1;
						return !0
					},
					parent: function(t) {
						return !w.pseudos.empty(t)
					},
					header: function(t) {
						return G.test(t.nodeName)
					},
					input: function(t) {
						return Z.test(t.nodeName)
					},
					button: function(t) {
						var e = t.nodeName.toLowerCase();
						return "input" === e && "button" === t.type || "button" === e
					},
					text: function(t) {
						var e;
						return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
					},
					first: ut(function() {
						return [0]
					}),
					last: ut(function(t, e) {
						return [e - 1]
					}),
					eq: ut(function(t, e, n) {
						return [n < 0 ? n + e : n]
					}),
					even: ut(function(t, e) {
						for (var n = 0; n < e; n += 2) t.push(n);
						return t
					}),
					odd: ut(function(t, e) {
						for (var n = 1; n < e; n += 2) t.push(n);
						return t
					}),
					lt: ut(function(t, e, n) {
						for (var i = n < 0 ? n + e : n; 0 <= --i;) t.push(i);
						return t
					}),
					gt: ut(function(t, e, n) {
						for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
						return t
					})
				}
			}).pseudos.nth = w.pseudos.eq, {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) w.pseudos[t] = function(e) {
			return function(t) {
				return "input" === t.nodeName.toLowerCase() && t.type === e
			}
		}(t);
		for (t in {
				submit: !0,
				reset: !0
			}) w.pseudos[t] = function(n) {
			return function(t) {
				var e = t.nodeName.toLowerCase();
				return ("input" === e || "button" === e) && t.type === n
			}
		}(t);

		function ht() {}

		function pt(t) {
			for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
			return i
		}

		function ft(s, t, e) {
			var a = t.dir,
				l = e && "parentNode" === a,
				c = k++;
			return t.first ? function(t, e, n) {
				for (; t = t[a];)
					if (1 === t.nodeType || l) return s(t, e, n)
			} : function(t, e, n) {
				var i, o, r = [S, c];
				if (n) {
					for (; t = t[a];)
						if ((1 === t.nodeType || l) && s(t, e, n)) return !0
				} else
					for (; t = t[a];)
						if (1 === t.nodeType || l) {
							if ((i = (o = t[T] || (t[T] = {}))[a]) && i[0] === S && i[1] === c) return r[2] = i[2];
							if ((o[a] = r)[2] = s(t, e, n)) return !0
						}
			}
		}

		function mt(o) {
			return 1 < o.length ? function(t, e, n) {
				for (var i = o.length; i--;)
					if (!o[i](t, e, n)) return !1;
				return !0
			} : o[0]
		}

		function gt(t, e, n, i, o) {
			for (var r, s = [], a = 0, l = t.length, c = null != e; a < l; a++) !(r = t[a]) || n && !n(r, i, o) || (s.push(r), c && e.push(a));
			return s
		}

		function vt(p, f, m, g, v, t) {
			return g && !g[T] && (g = vt(g)), v && !v[T] && (v = vt(v, t)), st(function(t, e, n, i) {
				var o, r, s, a = [],
					l = [],
					c = e.length,
					u = t || function(t, e, n) {
						for (var i = 0, o = e.length; i < o; i++) ot(t, e[i], n);
						return n
					}(f || "*", n.nodeType ? [n] : n, []),
					d = !p || !t && f ? u : gt(u, a, p, n, i),
					h = m ? v || (t ? p : c || g) ? [] : e : d;
				if (m && m(d, h, n, i), g)
					for (o = gt(h, l), g(o, [], n, i), r = o.length; r--;)(s = o[r]) && (h[l[r]] = !(d[l[r]] = s));
				if (t) {
					if (v || p) {
						if (v) {
							for (o = [], r = h.length; r--;)(s = h[r]) && o.push(d[r] = s);
							v(null, h = [], o, i)
						}
						for (r = h.length; r--;)(s = h[r]) && -1 < (o = v ? j(t, s) : a[r]) && (t[o] = !(e[o] = s))
					}
				} else h = gt(h === e ? h.splice(c, h.length) : h), v ? v(null, e, h, i) : N.apply(e, h)
			})
		}

		function yt(g, v) {
			function t(t, e, n, i, o) {
				var r, s, a, l = 0,
					c = "0",
					u = t && [],
					d = [],
					h = x,
					p = t || b && w.find.TAG("*", o),
					f = S += null == h ? 1 : Math.random() || .1,
					m = p.length;
				for (o && (x = e !== _ && e); c !== m && null != (r = p[c]); c++) {
					if (b && r) {
						for (s = 0; a = g[s++];)
							if (a(r, e, n)) {
								i.push(r);
								break
							} o && (S = f)
					}
					y && ((r = !a && r) && l--, t && u.push(r))
				}
				if (l += c, y && c !== l) {
					for (s = 0; a = v[s++];) a(u, d, e, n);
					if (t) {
						if (0 < l)
							for (; c--;) u[c] || d[c] || (d[c] = O.call(i));
						d = gt(d)
					}
					N.apply(i, d), o && !t && 0 < d.length && 1 < l + v.length && ot.uniqueSort(i)
				}
				return o && (S = f, x = h), u
			}
			var y = 0 < v.length,
				b = 0 < g.length;
			return y ? st(t) : t
		}
		return ht.prototype = w.filters = w.pseudos, w.setFilters = new ht, m = ot.tokenize = function(t, e) {
			var n, i, o, r, s, a, l, c = L[t + " "];
			if (c) return e ? 0 : c.slice(0);
			for (s = t, a = [], l = w.preFilter; s;) {
				for (r in n && !(i = Y.exec(s)) || (i && (s = s.slice(i[0].length) || s), a.push(o = [])), n = !1, (i = X.exec(s)) && (n = i.shift(), o.push({
						value: n,
						type: i[0].replace(q, " ")
					}), s = s.slice(n.length)), w.filter) !(i = K[r].exec(s)) || l[r] && !(i = l[r](i)) || (n = i.shift(), o.push({
					value: n,
					type: r,
					matches: i
				}), s = s.slice(n.length));
				if (!n) break
			}
			return e ? s.length : s ? ot.error(t) : L(t, a).slice(0)
		}, h = ot.compile = function(t, e) {
			var n, i = [],
				o = [],
				r = I[t + " "];
			if (!r) {
				for (n = (e = e || m(t)).length; n--;)(r = function t(e) {
					for (var o, n, i, r = e.length, s = w.relative[e[0].type], a = s || w.relative[" "], l = s ? 1 : 0, c = ft(function(t) {
							return t === o
						}, a, !0), u = ft(function(t) {
							return -1 < j(o, t)
						}, a, !0), d = [function(t, e, n) {
							var i = !s && (n || e !== x) || ((o = e).nodeType ? c : u)(t, e, n);
							return o = null, i
						}]; l < r; l++)
						if (n = w.relative[e[l].type]) d = [ft(mt(d), n)];
						else {
							if ((n = w.filter[e[l].type].apply(null, e[l].matches))[T]) {
								for (i = ++l; i < r && !w.relative[e[i].type]; i++);
								return vt(1 < l && mt(d), 1 < l && pt(e.slice(0, l - 1).concat({
									value: " " === e[l - 2].type ? "*" : ""
								})).replace(q, "$1"), n, l < i && t(e.slice(l, i)), i < r && t(e = e.slice(i)), i < r && pt(e))
							}
							d.push(n)
						} return mt(d)
				}(e[n]))[T] ? i.push(r) : o.push(r);
				(r = I(t, yt(o, i))).selector = t
			}
			return r
		}, g = ot.select = function(t, e, n, i) {
			var o, r, s, a, l, c = "function" == typeof t && t,
				u = !i && m(t = c.selector || t);
			if (n = n || [], 1 === u.length) {
				if (2 < (r = u[0] = u[0].slice(0)).length && "ID" === (s = r[0]).type && f.getById && 9 === e.nodeType && y && w.relative[r[1].type]) {
					if (!(e = (w.find.ID(s.matches[0].replace(it, d), e) || [])[0])) return n;
					c && (e = e.parentNode), t = t.slice(r.shift().value.length)
				}
				for (o = K.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !w.relative[a = s.type]);)
					if ((l = w.find[a]) && (i = l(s.matches[0].replace(it, d), et.test(r[0].type) && dt(e.parentNode) || e))) {
						if (r.splice(o, 1), !(t = i.length && pt(r))) return N.apply(n, i), n;
						break
					}
			}
			return (c || h(t, u))(i, e, !y, n, et.test(t) && dt(e.parentNode) || e), n
		}, f.sortStable = T.split("").sort(D).join("") === T, f.detectDuplicates = !!u, v(), f.sortDetached = at(function(t) {
			return 1 & t.compareDocumentPosition(_.createElement("div"))
		}), at(function(t) {
			return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
		}) || lt("type|href|height|width", function(t, e, n) {
			return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
		}), f.attributes && at(function(t) {
			return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
		}) || lt("value", function(t, e, n) {
			return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
		}), at(function(t) {
			return null == t.getAttribute("disabled")
		}) || lt(F, function(t, e, n) {
			var i;
			return n ? void 0 : !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
		}), ot
	}(f);
	C.find = h, C.expr = h.selectors, C.expr[":"] = C.expr.pseudos, C.unique = h.uniqueSort, C.text = h.getText, C.isXMLDoc = h.isXML, C.contains = h.contains;
	var p = C.expr.match.needsContext,
		b = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		w = /^.[^:#\[\.,]*$/;

	function x(t, n, i) {
		if (C.isFunction(n)) return C.grep(t, function(t, e) {
			return !!n.call(t, e, t) !== i
		});
		if (n.nodeType) return C.grep(t, function(t) {
			return t === n !== i
		});
		if ("string" == typeof n) {
			if (w.test(n)) return C.filter(n, t, i);
			n = C.filter(n, t)
		}
		return C.grep(t, function(t) {
			return 0 <= o.call(n, t) !== i
		})
	}
	C.filter = function(t, e, n) {
		var i = e[0];
		return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? C.find.matchesSelector(i, t) ? [i] : [] : C.find.matches(t, C.grep(e, function(t) {
			return 1 === t.nodeType
		}))
	}, C.fn.extend({
		find: function(t) {
			var e, n = this.length,
				i = [],
				o = this;
			if ("string" != typeof t) return this.pushStack(C(t).filter(function() {
				for (e = 0; e < n; e++)
					if (C.contains(o[e], this)) return !0
			}));
			for (e = 0; e < n; e++) C.find(t, o[e], i);
			return (i = this.pushStack(1 < n ? C.unique(i) : i)).selector = this.selector ? this.selector + " " + t : t, i
		},
		filter: function(t) {
			return this.pushStack(x(this, t || [], !1))
		},
		not: function(t) {
			return this.pushStack(x(this, t || [], !0))
		},
		is: function(t) {
			return !!x(this, "string" == typeof t && p.test(t) ? C(t) : t || [], !1).length
		}
	});
	var _, T = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
	(C.fn.init = function(t, e) {
		var n, i;
		if (!t) return this;
		if ("string" != typeof t) return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : C.isFunction(t) ? void 0 !== _.ready ? _.ready(t) : t(C) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), C.makeArray(t, this));
		if (!(n = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : T.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || _).find(t) : this.constructor(e).find(t);
		if (n[1]) {
			if (e = e instanceof C ? e[0] : e, C.merge(this, C.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : y, !0)), b.test(n[1]) && C.isPlainObject(e))
				for (n in e) C.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
			return this
		}
		return (i = y.getElementById(n[2])) && i.parentNode && (this.length = 1, this[0] = i), this.context = y, this.selector = t, this
	}).prototype = C.fn, _ = C(y);
	var E = /^(?:parents|prev(?:Until|All))/,
		S = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};

	function k(t, e) {
		for (;
			(t = t[e]) && 1 !== t.nodeType;);
		return t
	}
	C.extend({
		dir: function(t, e, n) {
			for (var i = [], o = void 0 !== n;
				(t = t[e]) && 9 !== t.nodeType;)
				if (1 === t.nodeType) {
					if (o && C(t).is(n)) break;
					i.push(t)
				} return i
		},
		sibling: function(t, e) {
			for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
			return n
		}
	}), C.fn.extend({
		has: function(t) {
			var e = C(t, this),
				n = e.length;
			return this.filter(function() {
				for (var t = 0; t < n; t++)
					if (C.contains(this, e[t])) return !0
			})
		},
		closest: function(t, e) {
			for (var n, i = 0, o = this.length, r = [], s = p.test(t) || "string" != typeof t ? C(t, e || this.context) : 0; i < o; i++)
				for (n = this[i]; n && n !== e; n = n.parentNode)
					if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, t))) {
						r.push(n);
						break
					} return this.pushStack(1 < r.length ? C.unique(r) : r)
		},
		index: function(t) {
			return t ? "string" == typeof t ? o.call(C(t), this[0]) : o.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(t, e) {
			return this.pushStack(C.unique(C.merge(this.get(), C(t, e))))
		},
		addBack: function(t) {
			return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
		}
	}), C.each({
		parent: function(t) {
			var e = t.parentNode;
			return e && 11 !== e.nodeType ? e : null
		},
		parents: function(t) {
			return C.dir(t, "parentNode")
		},
		parentsUntil: function(t, e, n) {
			return C.dir(t, "parentNode", n)
		},
		next: function(t) {
			return k(t, "nextSibling")
		},
		prev: function(t) {
			return k(t, "previousSibling")
		},
		nextAll: function(t) {
			return C.dir(t, "nextSibling")
		},
		prevAll: function(t) {
			return C.dir(t, "previousSibling")
		},
		nextUntil: function(t, e, n) {
			return C.dir(t, "nextSibling", n)
		},
		prevUntil: function(t, e, n) {
			return C.dir(t, "previousSibling", n)
		},
		siblings: function(t) {
			return C.sibling((t.parentNode || {}).firstChild, t)
		},
		children: function(t) {
			return C.sibling(t.firstChild)
		},
		contents: function(t) {
			return t.contentDocument || C.merge([], t.childNodes)
		}
	}, function(i, o) {
		C.fn[i] = function(t, e) {
			var n = C.map(this, o, t);
			return "Until" !== i.slice(-5) && (e = t), e && "string" == typeof e && (n = C.filter(e, n)), 1 < this.length && (S[i] || C.unique(n), E.test(i) && n.reverse()), this.pushStack(n)
		}
	});
	var L, I = /\S+/g,
		D = {};

	function z() {
		y.removeEventListener("DOMContentLoaded", z, !1), f.removeEventListener("load", z, !1), C.ready()
	}
	C.Callbacks = function(o) {
		var t, n;
		o = "string" == typeof o ? D[o] || (n = D[t = o] = {}, C.each(t.match(I) || [], function(t, e) {
			n[e] = !0
		}), n) : C.extend({}, o);
		var e, i, r, s, a, l, c = [],
			u = !o.once && [],
			d = function(t) {
				for (e = o.memory && t, i = !0, l = s || 0, s = 0, a = c.length, r = !0; c && l < a; l++)
					if (!1 === c[l].apply(t[0], t[1]) && o.stopOnFalse) {
						e = !1;
						break
					} r = !1, c && (u ? u.length && d(u.shift()) : e ? c = [] : h.disable())
			},
			h = {
				add: function() {
					var t;
					return c && (t = c.length, function i(t) {
						C.each(t, function(t, e) {
							var n = C.type(e);
							"function" === n ? o.unique && h.has(e) || c.push(e) : e && e.length && "string" !== n && i(e)
						})
					}(arguments), r ? a = c.length : e && (s = t, d(e))), this
				},
				remove: function() {
					return c && C.each(arguments, function(t, e) {
						for (var n; - 1 < (n = C.inArray(e, c, n));) c.splice(n, 1), r && (n <= a && a--, n <= l && l--)
					}), this
				},
				has: function(t) {
					return t ? -1 < C.inArray(t, c) : !(!c || !c.length)
				},
				empty: function() {
					return c = [], a = 0, this
				},
				disable: function() {
					return c = u = e = void 0, this
				},
				disabled: function() {
					return !c
				},
				lock: function() {
					return u = void 0, e || h.disable(), this
				},
				locked: function() {
					return !u
				},
				fireWith: function(t, e) {
					return !c || i && !u || (e = [t, (e = e || []).slice ? e.slice() : e], r ? u.push(e) : d(e)), this
				},
				fire: function() {
					return h.fireWith(this, arguments), this
				},
				fired: function() {
					return !!i
				}
			};
		return h
	}, C.extend({
		Deferred: function(t) {
			var r = [
					["resolve", "done", C.Callbacks("once memory"), "resolved"],
					["reject", "fail", C.Callbacks("once memory"), "rejected"],
					["notify", "progress", C.Callbacks("memory")]
				],
				o = "pending",
				s = {
					state: function() {
						return o
					},
					always: function() {
						return a.done(arguments).fail(arguments), this
					},
					then: function() {
						var o = arguments;
						return C.Deferred(function(i) {
							C.each(r, function(t, e) {
								var n = C.isFunction(o[t]) && o[t];
								a[e[1]](function() {
									var t = n && n.apply(this, arguments);
									t && C.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[e[0] + "With"](this === s ? i.promise() : this, n ? [t] : arguments)
								})
							}), o = null
						}).promise()
					},
					promise: function(t) {
						return null != t ? C.extend(t, s) : s
					}
				},
				a = {};
			return s.pipe = s.then, C.each(r, function(t, e) {
				var n = e[2],
					i = e[3];
				s[e[1]] = n.add, i && n.add(function() {
					o = i
				}, r[1 ^ t][2].disable, r[2][2].lock), a[e[0]] = function() {
					return a[e[0] + "With"](this === a ? s : this, arguments), this
				}, a[e[0] + "With"] = n.fireWith
			}), s.promise(a), t && t.call(a, a), a
		},
		when: function(t) {
			function e(e, n, i) {
				return function(t) {
					n[e] = this, i[e] = 1 < arguments.length ? u.call(arguments) : t, i === o ? c.notifyWith(n, i) : --l || c.resolveWith(n, i)
				}
			}
			var o, n, i, r = 0,
				s = u.call(arguments),
				a = s.length,
				l = 1 !== a || t && C.isFunction(t.promise) ? a : 0,
				c = 1 === l ? t : C.Deferred();
			if (1 < a)
				for (o = new Array(a), n = new Array(a), i = new Array(a); r < a; r++) s[r] && C.isFunction(s[r].promise) ? s[r].promise().done(e(r, i, s)).fail(c.reject).progress(e(r, n, o)) : --l;
			return l || c.resolveWith(i, s), c.promise()
		}
	}), C.fn.ready = function(t) {
		return C.ready.promise().done(t), this
	}, C.extend({
		isReady: !1,
		readyWait: 1,
		holdReady: function(t) {
			t ? C.readyWait++ : C.ready(!0)
		},
		ready: function(t) {
			(!0 === t ? --C.readyWait : C.isReady) || ((C.isReady = !0) !== t && 0 < --C.readyWait || (L.resolveWith(y, [C]), C.fn.triggerHandler && (C(y).triggerHandler("ready"), C(y).off("ready"))))
		}
	}), C.ready.promise = function(t) {
		return L || (L = C.Deferred(), "complete" === y.readyState ? setTimeout(C.ready) : (y.addEventListener("DOMContentLoaded", z, !1), f.addEventListener("load", z, !1))), L.promise(t)
	}, C.ready.promise();
	var O = C.access = function(t, e, n, i, o, r, s) {
		var a = 0,
			l = t.length,
			c = null == n;
		if ("object" === C.type(n))
			for (a in o = !0, n) C.access(t, e, a, n[a], !0, r, s);
		else if (void 0 !== i && (o = !0, C.isFunction(i) || (s = !0), c && (e = s ? (e.call(t, i), null) : (c = e, function(t, e, n) {
				return c.call(C(t), n)
			})), e))
			for (; a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
		return o ? t : c ? e.call(t) : l ? e(t[0], n) : r
	};

	function A() {
		Object.defineProperty(this.cache = {}, 0, {
			get: function() {
				return {}
			}
		}), this.expando = C.expando + A.uid++
	}
	C.acceptData = function(t) {
		return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
	}, A.uid = 1, A.accepts = C.acceptData, A.prototype = {
		key: function(e) {
			if (!A.accepts(e)) return 0;
			var n = {},
				i = e[this.expando];
			if (!i) {
				i = A.uid++;
				try {
					n[this.expando] = {
						value: i
					}, Object.defineProperties(e, n)
				} catch (t) {
					n[this.expando] = i, C.extend(e, n)
				}
			}
			return this.cache[i] || (this.cache[i] = {}), i
		},
		set: function(t, e, n) {
			var i, o = this.key(t),
				r = this.cache[o];
			if ("string" == typeof e) r[e] = n;
			else if (C.isEmptyObject(r)) C.extend(this.cache[o], e);
			else
				for (i in e) r[i] = e[i];
			return r
		},
		get: function(t, e) {
			var n = this.cache[this.key(t)];
			return void 0 === e ? n : n[e]
		},
		access: function(t, e, n) {
			var i;
			return void 0 === e || e && "string" == typeof e && void 0 === n ? void 0 !== (i = this.get(t, e)) ? i : this.get(t, C.camelCase(e)) : (this.set(t, e, n), void 0 !== n ? n : e)
		},
		remove: function(t, e) {
			var n, i, o, r = this.key(t),
				s = this.cache[r];
			if (void 0 === e) this.cache[r] = {};
			else {
				n = (i = C.isArray(e) ? e.concat(e.map(C.camelCase)) : (o = C.camelCase(e), e in s ? [e, o] : (i = o) in s ? [i] : i.match(I) || [])).length;
				for (; n--;) delete s[i[n]]
			}
		},
		hasData: function(t) {
			return !C.isEmptyObject(this.cache[t[this.expando]] || {})
		},
		discard: function(t) {
			t[this.expando] && delete this.cache[t[this.expando]]
		}
	};
	var N = new A,
		R = new A,
		j = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		F = /([A-Z])/g;

	function P(t, e, n) {
		var i;
		if (void 0 === n && 1 === t.nodeType)
			if (i = "data-" + e.replace(F, "-$1").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
				try {
					n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : j.test(n) ? C.parseJSON(n) : n)
				} catch (t) {}
				R.set(t, e, n)
			} else n = void 0;
		return n
	}
	C.extend({
		hasData: function(t) {
			return R.hasData(t) || N.hasData(t)
		},
		data: function(t, e, n) {
			return R.access(t, e, n)
		},
		removeData: function(t, e) {
			R.remove(t, e)
		},
		_data: function(t, e, n) {
			return N.access(t, e, n)
		},
		_removeData: function(t, e) {
			N.remove(t, e)
		}
	}), C.fn.extend({
		data: function(i, t) {
			var e, n, o, r = this[0],
				s = r && r.attributes;
			if (void 0 !== i) return "object" == typeof i ? this.each(function() {
				R.set(this, i)
			}) : O(this, function(e) {
				var t, n = C.camelCase(i);
				if (r && void 0 === e) {
					if (void 0 !== (t = R.get(r, i))) return t;
					if (void 0 !== (t = R.get(r, n))) return t;
					if (void 0 !== (t = P(r, n, void 0))) return t
				} else this.each(function() {
					var t = R.get(this, n);
					R.set(this, n, e), -1 !== i.indexOf("-") && void 0 !== t && R.set(this, i, e)
				})
			}, null, t, 1 < arguments.length, null, !0);
			if (this.length && (o = R.get(r), 1 === r.nodeType && !N.get(r, "hasDataAttrs"))) {
				for (e = s.length; e--;) s[e] && (0 === (n = s[e].name).indexOf("data-") && (n = C.camelCase(n.slice(5)), P(r, n, o[n])));
				N.set(r, "hasDataAttrs", !0)
			}
			return o
		},
		removeData: function(t) {
			return this.each(function() {
				R.remove(this, t)
			})
		}
	}), C.extend({
		queue: function(t, e, n) {
			var i;
			return t ? (e = (e || "fx") + "queue", i = N.get(t, e), n && (!i || C.isArray(n) ? i = N.access(t, e, C.makeArray(n)) : i.push(n)), i || []) : void 0
		},
		dequeue: function(t, e) {
			e = e || "fx";
			var n = C.queue(t, e),
				i = n.length,
				o = n.shift(),
				r = C._queueHooks(t, e);
			"inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, function() {
				C.dequeue(t, e)
			}, r)), !i && r && r.empty.fire()
		},
		_queueHooks: function(t, e) {
			var n = e + "queueHooks";
			return N.get(t, n) || N.access(t, n, {
				empty: C.Callbacks("once memory").add(function() {
					N.remove(t, [e + "queue", n])
				})
			})
		}
	}), C.fn.extend({
		queue: function(e, n) {
			var t = 2;
			return "string" != typeof e && (n = e, e = "fx", t--), arguments.length < t ? C.queue(this[0], e) : void 0 === n ? this : this.each(function() {
				var t = C.queue(this, e, n);
				C._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && C.dequeue(this, e)
			})
		},
		dequeue: function(t) {
			return this.each(function() {
				C.dequeue(this, t)
			})
		},
		clearQueue: function(t) {
			return this.queue(t || "fx", [])
		},
		promise: function(t, e) {
			function n() {
				--o || r.resolveWith(s, [s])
			}
			var i, o = 1,
				r = C.Deferred(),
				s = this,
				a = this.length;
			for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(i = N.get(s[a], t + "queueHooks")) && i.empty && (o++, i.empty.add(n));
			return n(), r.promise(e)
		}
	});

	function W(t, e) {
		return t = e || t, "none" === C.css(t, "display") || !C.contains(t.ownerDocument, t)
	}
	var M, $, H = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		B = ["Top", "Right", "Bottom", "Left"],
		q = /^(?:checkbox|radio)$/i;
	M = y.createDocumentFragment().appendChild(y.createElement("div")), ($ = y.createElement("input")).setAttribute("type", "radio"), $.setAttribute("checked", "checked"), $.setAttribute("name", "t"), M.appendChild($), v.checkClone = M.cloneNode(!0).cloneNode(!0).lastChild.checked, M.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!M.cloneNode(!0).lastChild.defaultValue;
	var Y = "undefined";
	v.focusinBubbles = "onfocusin" in f;
	var X = /^key/,
		U = /^(?:mouse|pointer|contextmenu)|click/,
		Q = /^(?:focusinfocus|focusoutblur)$/,
		V = /^([^.]*)(?:\.(.+)|)$/;

	function K() {
		return !0
	}

	function Z() {
		return !1
	}

	function G() {
		try {
			return y.activeElement
		} catch (t) {}
	}
	C.event = {
		global: {},
		add: function(e, t, n, i, o) {
			var r, s, a, l, c, u, d, h, p, f, m, g = N.get(e);
			if (g)
				for (n.handler && (n = (r = n).handler, o = r.selector), n.guid || (n.guid = C.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(t) {
						return typeof C != Y && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0
					}), c = (t = (t || "").match(I) || [""]).length; c--;) p = m = (a = V.exec(t[c]) || [])[1], f = (a[2] || "").split(".").sort(), p && (d = C.event.special[p] || {}, p = (o ? d.delegateType : d.bindType) || p, d = C.event.special[p] || {}, u = C.extend({
					type: p,
					origType: m,
					data: i,
					handler: n,
					guid: n.guid,
					selector: o,
					needsContext: o && C.expr.match.needsContext.test(o),
					namespace: f.join(".")
				}, r), (h = l[p]) || ((h = l[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, f, s) || e.addEventListener && e.addEventListener(p, s, !1)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, u) : h.push(u), C.event.global[p] = !0)
		},
		remove: function(t, e, n, i, o) {
			var r, s, a, l, c, u, d, h, p, f, m, g = N.hasData(t) && N.get(t);
			if (g && (l = g.events)) {
				for (c = (e = (e || "").match(I) || [""]).length; c--;)
					if (p = m = (a = V.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
						for (d = C.event.special[p] || {}, h = l[p = (i ? d.delegateType : d.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = h.length; r--;) u = h[r], !o && m !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (h.splice(r, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(t, u));
						s && !h.length && (d.teardown && !1 !== d.teardown.call(t, f, g.handle) || C.removeEvent(t, p, g.handle), delete l[p])
					} else
						for (p in l) C.event.remove(t, p + e[c], n, i, !0);
				C.isEmptyObject(l) && (delete g.handle, N.remove(t, "events"))
			}
		},
		trigger: function(t, e, n, i) {
			var o, r, s, a, l, c, u = [n || y],
				d = g.call(t, "type") ? t.type : t,
				h = g.call(t, "namespace") ? t.namespace.split(".") : [],
				p = r = n = n || y;
			if (3 !== n.nodeType && 8 !== n.nodeType && !Q.test(d + C.event.triggered) && (0 <= d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), a = d.indexOf(":") < 0 && "on" + d, (t = t[C.expando] ? t : new C.Event(d, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : C.makeArray(e, [t]), c = C.event.special[d] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, e))) {
				if (!i && !c.noBubble && !C.isWindow(n)) {
					for (s = c.delegateType || d, Q.test(s + d) || (p = p.parentNode); p; p = p.parentNode) u.push(p), r = p;
					r === (n.ownerDocument || y) && u.push(r.defaultView || r.parentWindow || f)
				}
				for (o = 0;
					(p = u[o++]) && !t.isPropagationStopped();) t.type = 1 < o ? s : c.bindType || d, (l = (N.get(p, "events") || {})[t.type] && N.get(p, "handle")) && l.apply(p, e), (l = a && p[a]) && l.apply && C.acceptData(p) && (t.result = l.apply(p, e), !1 === t.result && t.preventDefault());
				return t.type = d, i || t.isDefaultPrevented() || c._default && !1 !== c._default.apply(u.pop(), e) || !C.acceptData(n) || a && C.isFunction(n[d]) && !C.isWindow(n) && ((r = n[a]) && (n[a] = null), n[C.event.triggered = d](), C.event.triggered = void 0, r && (n[a] = r)), t.result
			}
		},
		dispatch: function(t) {
			t = C.event.fix(t);
			var e, n, i, o, r, s = [],
				a = u.call(arguments),
				l = (N.get(this, "events") || {})[t.type] || [],
				c = C.event.special[t.type] || {};
			if ((a[0] = t).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
				for (s = C.event.handlers.call(this, t, l), e = 0;
					(o = s[e++]) && !t.isPropagationStopped();)
					for (t.currentTarget = o.elem, n = 0;
						(r = o.handlers[n++]) && !t.isImmediatePropagationStopped();) t.namespace_re && !t.namespace_re.test(r.namespace) || (t.handleObj = r, t.data = r.data, void 0 !== (i = ((C.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
				return c.postDispatch && c.postDispatch.call(this, t), t.result
			}
		},
		handlers: function(t, e) {
			var n, i, o, r, s = [],
				a = e.delegateCount,
				l = t.target;
			if (a && l.nodeType && (!t.button || "click" !== t.type))
				for (; l !== this; l = l.parentNode || this)
					if (!0 !== l.disabled || "click" !== t.type) {
						for (i = [], n = 0; n < a; n++) void 0 === i[o = (r = e[n]).selector + " "] && (i[o] = r.needsContext ? 0 <= C(o, this).index(l) : C.find(o, this, null, [l]).length), i[o] && i.push(r);
						i.length && s.push({
							elem: l,
							handlers: i
						})
					} return a < e.length && s.push({
				elem: this,
				handlers: e.slice(a)
			}), s
		},
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
		fixHooks: {},
		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function(t, e) {
				return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
			}
		},
		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function(t, e) {
				var n, i, o, r = e.button;
				return null == t.pageX && null != e.clientX && (i = (n = t.target.ownerDocument || y).documentElement, o = n.body, t.pageX = e.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
			}
		},
		fix: function(t) {
			if (t[C.expando]) return t;
			var e, n, i, o = t.type,
				r = t,
				s = this.fixHooks[o];
			for (s || (this.fixHooks[o] = s = U.test(o) ? this.mouseHooks : X.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new C.Event(r), e = i.length; e--;) t[n = i[e]] = r[n];
			return t.target || (t.target = y), 3 === t.target.nodeType && (t.target = t.target.parentNode), s.filter ? s.filter(t, r) : t
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					return this !== G() && this.focus ? (this.focus(), !1) : void 0
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					return this === G() && this.blur ? (this.blur(), !1) : void 0
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					return "checkbox" === this.type && this.click && C.nodeName(this, "input") ? (this.click(), !1) : void 0
				},
				_default: function(t) {
					return C.nodeName(t.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(t) {
					void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
				}
			}
		},
		simulate: function(t, e, n, i) {
			var o = C.extend(new C.Event, n, {
				type: t,
				isSimulated: !0,
				originalEvent: {}
			});
			i ? C.event.trigger(o, null, e) : C.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault()
		}
	}, C.removeEvent = function(t, e, n) {
		t.removeEventListener && t.removeEventListener(e, n, !1)
	}, C.Event = function(t, e) {
		return this instanceof C.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? K : Z) : this.type = t, e && C.extend(this, e), this.timeStamp = t && t.timeStamp || C.now(), void(this[C.expando] = !0)) : new C.Event(t, e)
	}, C.Event.prototype = {
		isDefaultPrevented: Z,
		isPropagationStopped: Z,
		isImmediatePropagationStopped: Z,
		preventDefault: function() {
			var t = this.originalEvent;
			this.isDefaultPrevented = K, t && t.preventDefault && t.preventDefault()
		},
		stopPropagation: function() {
			var t = this.originalEvent;
			this.isPropagationStopped = K, t && t.stopPropagation && t.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var t = this.originalEvent;
			this.isImmediatePropagationStopped = K, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
		}
	}, C.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(t, o) {
		C.event.special[t] = {
			delegateType: o,
			bindType: o,
			handle: function(t) {
				var e, n = t.relatedTarget,
					i = t.handleObj;
				return n && (n === this || C.contains(this, n)) || (t.type = i.origType, e = i.handler.apply(this, arguments), t.type = o), e
			}
		}
	}), v.focusinBubbles || C.each({
		focus: "focusin",
		blur: "focusout"
	}, function(n, i) {
		function o(t) {
			C.event.simulate(i, t.target, C.event.fix(t), !0)
		}
		C.event.special[i] = {
			setup: function() {
				var t = this.ownerDocument || this,
					e = N.access(t, i);
				e || t.addEventListener(n, o, !0), N.access(t, i, (e || 0) + 1)
			},
			teardown: function() {
				var t = this.ownerDocument || this,
					e = N.access(t, i) - 1;
				e ? N.access(t, i, e) : (t.removeEventListener(n, o, !0), N.remove(t, i))
			}
		}
	}), C.fn.extend({
		on: function(t, e, n, i, o) {
			var r, s;
			if ("object" == typeof t) {
				for (s in "string" != typeof e && (n = n || e, e = void 0), t) this.on(s, e, n, t[s], o);
				return this
			}
			if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), !1 === i) i = Z;
			else if (!i) return this;
			return 1 === o && (r = i, (i = function(t) {
				return C().off(t), r.apply(this, arguments)
			}).guid = r.guid || (r.guid = C.guid++)), this.each(function() {
				C.event.add(this, t, i, n, e)
			})
		},
		one: function(t, e, n, i) {
			return this.on(t, e, n, i, 1)
		},
		off: function(t, e, n) {
			var i, o;
			if (t && t.preventDefault && t.handleObj) return i = t.handleObj, C(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" != typeof t) return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = Z), this.each(function() {
				C.event.remove(this, t, n, e)
			});
			for (o in t) this.off(o, e, t[o]);
			return this
		},
		trigger: function(t, e) {
			return this.each(function() {
				C.event.trigger(t, e, this)
			})
		},
		triggerHandler: function(t, e) {
			var n = this[0];
			return n ? C.event.trigger(t, e, n, !0) : void 0
		}
	});
	var J = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		tt = /<([\w:]+)/,
		et = /<|&#?\w+;/,
		nt = /<(?:script|style|link)/i,
		it = /checked\s*(?:[^=]|=\s*.checked.)/i,
		ot = /^$|\/(?:java|ecma)script/i,
		rt = /^true\/(.*)/,
		st = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		at = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};

	function lt(t, e) {
		return C.nodeName(t, "table") && C.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
	}

	function ct(t) {
		return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
	}

	function ut(t) {
		var e = rt.exec(t.type);
		return e ? t.type = e[1] : t.removeAttribute("type"), t
	}

	function dt(t, e) {
		for (var n = 0, i = t.length; n < i; n++) N.set(t[n], "globalEval", !e || N.get(e[n], "globalEval"))
	}

	function ht(t, e) {
		var n, i, o, r, s, a, l, c;
		if (1 === e.nodeType) {
			if (N.hasData(t) && (r = N.access(t), s = N.set(e, r), c = r.events))
				for (o in delete s.handle, s.events = {}, c)
					for (n = 0, i = c[o].length; n < i; n++) C.event.add(e, o, c[o][n]);
			R.hasData(t) && (a = R.access(t), l = C.extend({}, a), R.set(e, l))
		}
	}

	function pt(t, e) {
		var n = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
		return void 0 === e || e && C.nodeName(t, e) ? C.merge([t], n) : n
	}
	at.optgroup = at.option, at.tbody = at.tfoot = at.colgroup = at.caption = at.thead, at.th = at.td, C.extend({
		clone: function(t, e, n) {
			var i, o, r, s, a, l, c, u = t.cloneNode(!0),
				d = C.contains(t.ownerDocument, t);
			if (!(v.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || C.isXMLDoc(t)))
				for (s = pt(u), i = 0, o = (r = pt(t)).length; i < o; i++) a = r[i], l = s[i], "input" === (c = l.nodeName.toLowerCase()) && q.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
			if (e)
				if (n)
					for (r = r || pt(t), s = s || pt(u), i = 0, o = r.length; i < o; i++) ht(r[i], s[i]);
				else ht(t, u);
			return 0 < (s = pt(u, "script")).length && dt(s, !d && pt(t, "script")), u
		},
		buildFragment: function(t, e, n, i) {
			for (var o, r, s, a, l, c, u = e.createDocumentFragment(), d = [], h = 0, p = t.length; h < p; h++)
				if ((o = t[h]) || 0 === o)
					if ("object" === C.type(o)) C.merge(d, o.nodeType ? [o] : o);
					else if (et.test(o)) {
				for (r = r || u.appendChild(e.createElement("div")), s = (tt.exec(o) || ["", ""])[1].toLowerCase(), a = at[s] || at._default, r.innerHTML = a[1] + o.replace(J, "<$1></$2>") + a[2], c = a[0]; c--;) r = r.lastChild;
				C.merge(d, r.childNodes), (r = u.firstChild).textContent = ""
			} else d.push(e.createTextNode(o));
			for (u.textContent = "", h = 0; o = d[h++];)
				if ((!i || -1 === C.inArray(o, i)) && (l = C.contains(o.ownerDocument, o), r = pt(u.appendChild(o), "script"), l && dt(r), n))
					for (c = 0; o = r[c++];) ot.test(o.type || "") && n.push(o);
			return u
		},
		cleanData: function(t) {
			for (var e, n, i, o, r = C.event.special, s = 0; void 0 !== (n = t[s]); s++) {
				if (C.acceptData(n) && ((o = n[N.expando]) && (e = N.cache[o]))) {
					if (e.events)
						for (i in e.events) r[i] ? C.event.remove(n, i) : C.removeEvent(n, i, e.handle);
					N.cache[o] && delete N.cache[o]
				}
				delete R.cache[n[R.expando]]
			}
		}
	}), C.fn.extend({
		text: function(t) {
			return O(this, function(t) {
				return void 0 === t ? C.text(this) : this.empty().each(function() {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
				})
			}, null, t, arguments.length)
		},
		append: function() {
			return this.domManip(arguments, function(t) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || lt(this, t).appendChild(t)
			})
		},
		prepend: function() {
			return this.domManip(arguments, function(t) {
				var e;
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (e = lt(this, t)).insertBefore(t, e.firstChild)
			})
		},
		before: function() {
			return this.domManip(arguments, function(t) {
				this.parentNode && this.parentNode.insertBefore(t, this)
			})
		},
		after: function() {
			return this.domManip(arguments, function(t) {
				this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
			})
		},
		remove: function(t, e) {
			for (var n, i = t ? C.filter(t, this) : this, o = 0; null != (n = i[o]); o++) e || 1 !== n.nodeType || C.cleanData(pt(n)), n.parentNode && (e && C.contains(n.ownerDocument, n) && dt(pt(n, "script")), n.parentNode.removeChild(n));
			return this
		},
		empty: function() {
			for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (C.cleanData(pt(t, !1)), t.textContent = "");
			return this
		},
		clone: function(t, e) {
			return t = null != t && t, e = null == e ? t : e, this.map(function() {
				return C.clone(this, t, e)
			})
		},
		html: function(t) {
			return O(this, function(t) {
				var e = this[0] || {},
					n = 0,
					i = this.length;
				if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
				if ("string" == typeof t && !nt.test(t) && !at[(tt.exec(t) || ["", ""])[1].toLowerCase()]) {
					t = t.replace(J, "<$1></$2>");
					try {
						for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (C.cleanData(pt(e, !1)), e.innerHTML = t);
						e = 0
					} catch (t) {}
				}
				e && this.empty().append(t)
			}, null, t, arguments.length)
		},
		replaceWith: function() {
			var e = arguments[0];
			return this.domManip(arguments, function(t) {
				e = this.parentNode, C.cleanData(pt(this)), e && e.replaceChild(t, this)
			}), e && (e.length || e.nodeType) ? this : this.remove()
		},
		detach: function(t) {
			return this.remove(t, !0)
		},
		domManip: function(n, i) {
			n = m.apply([], n);
			var t, e, o, r, s, a, l = 0,
				c = this.length,
				u = this,
				d = c - 1,
				h = n[0],
				p = C.isFunction(h);
			if (p || 1 < c && "string" == typeof h && !v.checkClone && it.test(h)) return this.each(function(t) {
				var e = u.eq(t);
				p && (n[0] = h.call(this, t, e.html())), e.domManip(n, i)
			});
			if (c && (e = (t = C.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild, 1 === t.childNodes.length && (t = e), e)) {
				for (r = (o = C.map(pt(t, "script"), ct)).length; l < c; l++) s = t, l !== d && (s = C.clone(s, !0, !0), r && C.merge(o, pt(s, "script"))), i.call(this[l], s, l);
				if (r)
					for (a = o[o.length - 1].ownerDocument, C.map(o, ut), l = 0; l < r; l++) s = o[l], ot.test(s.type || "") && !N.access(s, "globalEval") && C.contains(a, s) && (s.src ? C._evalUrl && C._evalUrl(s.src) : C.globalEval(s.textContent.replace(st, "")))
			}
			return this
		}
	}), C.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(t, s) {
		C.fn[t] = function(t) {
			for (var e, n = [], i = C(t), o = i.length - 1, r = 0; r <= o; r++) e = r === o ? this : this.clone(!0), C(i[r])[s](e), a.apply(n, e.get());
			return this.pushStack(n)
		}
	});
	var ft, mt = {};

	function gt(t, e) {
		var n, i = C(e.createElement(t)).appendTo(e.body),
			o = f.getDefaultComputedStyle && (n = f.getDefaultComputedStyle(i[0])) ? n.display : C.css(i[0], "display");
		return i.detach(), o
	}

	function vt(t) {
		var e = y,
			n = mt[t];
		return n || ("none" !== (n = gt(t, e)) && n || ((e = (ft = (ft || C("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentDocument).write(), e.close(), n = gt(t, e), ft.detach()), mt[t] = n), n
	}
	var yt, bt, wt, xt, _t, Ct = /^margin/,
		Tt = new RegExp("^(" + H + ")(?!px)[a-z%]+$", "i"),
		Et = function(t) {
			return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : f.getComputedStyle(t, null)
		};

	function St(t, e, n) {
		var i, o, r, s, a = t.style;
		return (n = n || Et(t)) && (s = n.getPropertyValue(e) || n[e]), n && ("" !== s || C.contains(t.ownerDocument, t) || (s = C.style(t, e)), Tt.test(s) && Ct.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
	}

	function kt(t, e) {
		return {
			get: function() {
				return t() ? void delete this.get : (this.get = e).apply(this, arguments)
			}
		}
	}

	function Lt() {
		_t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", _t.innerHTML = "", wt.appendChild(xt);
		var t = f.getComputedStyle(_t, null);
		yt = "1%" !== t.top, bt = "4px" === t.width, wt.removeChild(xt)
	}
	wt = y.documentElement, xt = y.createElement("div"), (_t = y.createElement("div")).style && (_t.style.backgroundClip = "content-box", _t.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === _t.style.backgroundClip, xt.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", xt.appendChild(_t), f.getComputedStyle && C.extend(v, {
		pixelPosition: function() {
			return Lt(), yt
		},
		boxSizingReliable: function() {
			return null == bt && Lt(), bt
		},
		reliableMarginRight: function() {
			var t, e = _t.appendChild(y.createElement("div"));
			return e.style.cssText = _t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", _t.style.width = "1px", wt.appendChild(xt), t = !parseFloat(f.getComputedStyle(e, null).marginRight), wt.removeChild(xt), _t.removeChild(e), t
		}
	})), C.swap = function(t, e, n, i) {
		var o, r, s = {};
		for (r in e) s[r] = t.style[r], t.style[r] = e[r];
		for (r in o = n.apply(t, i || []), e) t.style[r] = s[r];
		return o
	};
	var It = /^(none|table(?!-c[ea]).+)/,
		Dt = new RegExp("^(" + H + ")(.*)$", "i"),
		zt = new RegExp("^([+-])=(" + H + ")", "i"),
		Ot = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		At = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Nt = ["Webkit", "O", "Moz", "ms"];

	function Rt(t, e) {
		if (e in t) return e;
		for (var n = e[0].toUpperCase() + e.slice(1), i = e, o = Nt.length; o--;)
			if ((e = Nt[o] + n) in t) return e;
		return i
	}

	function jt(t, e, n) {
		var i = Dt.exec(e);
		return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
	}

	function Ft(t, e, n, i, o) {
		for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; r < 4; r += 2) "margin" === n && (s += C.css(t, n + B[r], !0, o)), i ? ("content" === n && (s -= C.css(t, "padding" + B[r], !0, o)), "margin" !== n && (s -= C.css(t, "border" + B[r] + "Width", !0, o))) : (s += C.css(t, "padding" + B[r], !0, o), "padding" !== n && (s += C.css(t, "border" + B[r] + "Width", !0, o)));
		return s
	}

	function Pt(t, e, n) {
		var i = !0,
			o = "width" === e ? t.offsetWidth : t.offsetHeight,
			r = Et(t),
			s = "border-box" === C.css(t, "boxSizing", !1, r);
		if (o <= 0 || null == o) {
			if (((o = St(t, e, r)) < 0 || null == o) && (o = t.style[e]), Tt.test(o)) return o;
			i = s && (v.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
		}
		return o + Ft(t, e, n || (s ? "border" : "content"), i, r) + "px"
	}

	function Wt(t, e) {
		for (var n, i, o, r = [], s = 0, a = t.length; s < a; s++)(i = t[s]).style && (r[s] = N.get(i, "olddisplay"), n = i.style.display, e ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && W(i) && (r[s] = N.access(i, "olddisplay", vt(i.nodeName)))) : (o = W(i), "none" === n && o || N.set(i, "olddisplay", o ? n : C.css(i, "display"))));
		for (s = 0; s < a; s++)(i = t[s]).style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[s] || "" : "none"));
		return t
	}

	function Mt(t, e, n, i, o) {
		return new Mt.prototype.init(t, e, n, i, o)
	}
	C.extend({
		cssHooks: {
			opacity: {
				get: function(t, e) {
					if (e) {
						var n = St(t, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {
			float: "cssFloat"
		},
		style: function(t, e, n, i) {
			if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
				var o, r, s, a = C.camelCase(e),
					l = t.style;
				return e = C.cssProps[a] || (C.cssProps[a] = Rt(l, a)), s = C.cssHooks[e] || C.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : l[e] : ("string" === (r = typeof n) && (o = zt.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(C.css(t, e)), r = "number"), void(null != n && n == n && ("number" !== r || C.cssNumber[a] || (n += "px"), v.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (n = s.set(t, n, i)) || (l[e] = n))))
			}
		},
		css: function(t, e, n, i) {
			var o, r, s, a = C.camelCase(e);
			return e = C.cssProps[a] || (C.cssProps[a] = Rt(t.style, a)), (s = C.cssHooks[e] || C.cssHooks[a]) && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = St(t, e, i)), "normal" === o && e in At && (o = At[e]), "" === n || n ? (r = parseFloat(o), !0 === n || C.isNumeric(r) ? r || 0 : o) : o
		}
	}), C.each(["height", "width"], function(t, o) {
		C.cssHooks[o] = {
			get: function(t, e, n) {
				return e ? It.test(C.css(t, "display")) && 0 === t.offsetWidth ? C.swap(t, Ot, function() {
					return Pt(t, o, n)
				}) : Pt(t, o, n) : void 0
			},
			set: function(t, e, n) {
				var i = n && Et(t);
				return jt(0, e, n ? Ft(t, o, n, "border-box" === C.css(t, "boxSizing", !1, i), i) : 0)
			}
		}
	}), C.cssHooks.marginRight = kt(v.reliableMarginRight, function(t, e) {
		return e ? C.swap(t, {
			display: "inline-block"
		}, St, [t, "marginRight"]) : void 0
	}), C.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(o, r) {
		C.cssHooks[o + r] = {
			expand: function(t) {
				for (var e = 0, n = {}, i = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) n[o + B[e] + r] = i[e] || i[e - 2] || i[0];
				return n
			}
		}, Ct.test(o) || (C.cssHooks[o + r].set = jt)
	}), C.fn.extend({
		css: function(t, e) {
			return O(this, function(t, e, n) {
				var i, o, r = {},
					s = 0;
				if (C.isArray(e)) {
					for (i = Et(t), o = e.length; s < o; s++) r[e[s]] = C.css(t, e[s], !1, i);
					return r
				}
				return void 0 !== n ? C.style(t, e, n) : C.css(t, e)
			}, t, e, 1 < arguments.length)
		},
		show: function() {
			return Wt(this, !0)
		},
		hide: function() {
			return Wt(this)
		},
		toggle: function(t) {
			return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
				W(this) ? C(this).show() : C(this).hide()
			})
		}
	}), (C.Tween = Mt).prototype = {
		constructor: Mt,
		init: function(t, e, n, i, o, r) {
			this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (C.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var t = Mt.propHooks[this.prop];
			return t && t.get ? t.get(this) : Mt.propHooks._default.get(this)
		},
		run: function(t) {
			var e, n = Mt.propHooks[this.prop];
			return this.pos = e = this.options.duration ? C.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Mt.propHooks._default.set(this), this
		}
	}, Mt.prototype.init.prototype = Mt.prototype, Mt.propHooks = {
		_default: {
			get: function(t) {
				var e;
				return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = C.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0 : t.elem[t.prop]
			},
			set: function(t) {
				C.fx.step[t.prop] ? C.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[C.cssProps[t.prop]] || C.cssHooks[t.prop]) ? C.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
			}
		}
	}, Mt.propHooks.scrollTop = Mt.propHooks.scrollLeft = {
		set: function(t) {
			t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
		}
	}, C.easing = {
		linear: function(t) {
			return t
		},
		swing: function(t) {
			return .5 - Math.cos(t * Math.PI) / 2
		}
	}, C.fx = Mt.prototype.init, C.fx.step = {};
	var $t, Ht, Bt, qt, Yt, Xt = /^(?:toggle|show|hide)$/,
		Ut = new RegExp("^(?:([+-])=|)(" + H + ")([a-z%]*)$", "i"),
		Qt = /queueHooks$/,
		Vt = [function(e, t, n) {
			var i, o, r, s, a, l, c, u = this,
				d = {},
				h = e.style,
				p = e.nodeType && W(e),
				f = N.get(e, "fxshow");
			for (i in n.queue || (null == (a = C._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
					a.unqueued || l()
				}), a.unqueued++, u.always(function() {
					u.always(function() {
						a.unqueued--, C.queue(e, "fx").length || a.empty.fire()
					})
				})), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = C.css(e, "display"), "inline" === ("none" === c ? N.get(e, "olddisplay") || vt(e.nodeName) : c) && "none" === C.css(e, "float") && (h.display = "inline-block")), n.overflow && (h.overflow = "hidden", u.always(function() {
					h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
				})), t)
				if (o = t[i], Xt.exec(o)) {
					if (delete t[i], r = r || "toggle" === o, o === (p ? "hide" : "show")) {
						if ("show" !== o || !f || void 0 === f[i]) continue;
						p = !0
					}
					d[i] = f && f[i] || C.style(e, i)
				} else c = void 0;
			if (C.isEmptyObject(d)) "inline" === ("none" === c ? vt(e.nodeName) : c) && (h.display = c);
			else
				for (i in f ? "hidden" in f && (p = f.hidden) : f = N.access(e, "fxshow", {}), r && (f.hidden = !p), p ? C(e).show() : u.done(function() {
						C(e).hide()
					}), u.done(function() {
						var t;
						for (t in N.remove(e, "fxshow"), d) C.style(e, t, d[t])
					}), d) s = Jt(p ? f[i] : 0, i, u), i in f || (f[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
		}],
		Kt = {
			"*": [function(t, e) {
				var n = this.createTween(t, e),
					i = n.cur(),
					o = Ut.exec(e),
					r = o && o[3] || (C.cssNumber[t] ? "" : "px"),
					s = (C.cssNumber[t] || "px" !== r && +i) && Ut.exec(C.css(n.elem, t)),
					a = 1,
					l = 20;
				if (s && s[3] !== r)
					for (r = r || s[3], o = o || [], s = +i || 1; s /= a = a || ".5", C.style(n.elem, t, s + r), a !== (a = n.cur() / i) && 1 !== a && --l;);
				return o && (s = n.start = +s || +i || 0, n.unit = r, n.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), n
			}]
		};

	function Zt() {
		return setTimeout(function() {
			$t = void 0
		}), $t = C.now()
	}

	function Gt(t, e) {
		var n, i = 0,
			o = {
				height: t
			};
		for (e = e ? 1 : 0; i < 4; i += 2 - e) o["margin" + (n = B[i])] = o["padding" + n] = t;
		return e && (o.opacity = o.width = t), o
	}

	function Jt(t, e, n) {
		for (var i, o = (Kt[e] || []).concat(Kt["*"]), r = 0, s = o.length; r < s; r++)
			if (i = o[r].call(n, e, t)) return i
	}

	function te(r, t, e) {
		var n, s, i = 0,
			o = Vt.length,
			a = C.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (s) return !1;
				for (var t = $t || Zt(), e = Math.max(0, c.startTime + c.duration - t), n = 1 - (e / c.duration || 0), i = 0, o = c.tweens.length; i < o; i++) c.tweens[i].run(n);
				return a.notifyWith(r, [c, n, e]), n < 1 && o ? e : (a.resolveWith(r, [c]), !1)
			},
			c = a.promise({
				elem: r,
				props: C.extend({}, t),
				opts: C.extend(!0, {
					specialEasing: {}
				}, e),
				originalProperties: t,
				originalOptions: e,
				startTime: $t || Zt(),
				duration: e.duration,
				tweens: [],
				createTween: function(t, e) {
					var n = C.Tween(r, c.opts, t, e, c.opts.specialEasing[t] || c.opts.easing);
					return c.tweens.push(n), n
				},
				stop: function(t) {
					var e = 0,
						n = t ? c.tweens.length : 0;
					if (s) return this;
					for (s = !0; e < n; e++) c.tweens[e].run(1);
					return t ? a.resolveWith(r, [c, t]) : a.rejectWith(r, [c, t]), this
				}
			}),
			u = c.props;
		for (function(t, e) {
				var n, i, o, r, s;
				for (n in t)
					if (o = e[i = C.camelCase(n)], r = t[n], C.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (s = C.cssHooks[i]) && "expand" in s)
						for (n in r = s.expand(r), delete t[i], r) n in t || (t[n] = r[n], e[n] = o);
					else e[i] = o
			}(u, c.opts.specialEasing); i < o; i++)
			if (n = Vt[i].call(c, r, u, c.opts)) return n;
		return C.map(u, Jt, c), C.isFunction(c.opts.start) && c.opts.start.call(r, c), C.fx.timer(C.extend(l, {
			elem: r,
			anim: c,
			queue: c.opts.queue
		})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
	}
	C.Animation = C.extend(te, {
		tweener: function(t, e) {
			for (var n, i = 0, o = (t = C.isFunction(t) ? (e = t, ["*"]) : t.split(" ")).length; i < o; i++) n = t[i], Kt[n] = Kt[n] || [], Kt[n].unshift(e)
		},
		prefilter: function(t, e) {
			e ? Vt.unshift(t) : Vt.push(t)
		}
	}), C.speed = function(t, e, n) {
		var i = t && "object" == typeof t ? C.extend({}, t) : {
			complete: n || !n && e || C.isFunction(t) && t,
			duration: t,
			easing: n && e || e && !C.isFunction(e) && e
		};
		return i.duration = C.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in C.fx.speeds ? C.fx.speeds[i.duration] : C.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
			C.isFunction(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue)
		}, i
	}, C.fn.extend({
		fadeTo: function(t, e, n, i) {
			return this.filter(W).css("opacity", 0).show().end().animate({
				opacity: e
			}, t, n, i)
		},
		animate: function(e, t, n, i) {
			function o() {
				var t = te(this, C.extend({}, e), s);
				(r || N.get(this, "finish")) && t.stop(!0)
			}
			var r = C.isEmptyObject(e),
				s = C.speed(t, n, i);
			return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
		},
		stop: function(o, t, r) {
			function s(t) {
				var e = t.stop;
				delete t.stop, e(r)
			}
			return "string" != typeof o && (r = t, t = o, o = void 0), t && !1 !== o && this.queue(o || "fx", []), this.each(function() {
				var t = !0,
					e = null != o && o + "queueHooks",
					n = C.timers,
					i = N.get(this);
				if (e) i[e] && i[e].stop && s(i[e]);
				else
					for (e in i) i[e] && i[e].stop && Qt.test(e) && s(i[e]);
				for (e = n.length; e--;) n[e].elem !== this || null != o && n[e].queue !== o || (n[e].anim.stop(r), t = !1, n.splice(e, 1));
				!t && r || C.dequeue(this, o)
			})
		},
		finish: function(s) {
			return !1 !== s && (s = s || "fx"), this.each(function() {
				var t, e = N.get(this),
					n = e[s + "queue"],
					i = e[s + "queueHooks"],
					o = C.timers,
					r = n ? n.length : 0;
				for (e.finish = !0, C.queue(this, s, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === s && (o[t].anim.stop(!0), o.splice(t, 1));
				for (t = 0; t < r; t++) n[t] && n[t].finish && n[t].finish.call(this);
				delete e.finish
			})
		}
	}), C.each(["toggle", "show", "hide"], function(t, i) {
		var o = C.fn[i];
		C.fn[i] = function(t, e, n) {
			return null == t || "boolean" == typeof t ? o.apply(this, arguments) : this.animate(Gt(i, !0), t, e, n)
		}
	}), C.each({
		slideDown: Gt("show"),
		slideUp: Gt("hide"),
		slideToggle: Gt("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(t, i) {
		C.fn[t] = function(t, e, n) {
			return this.animate(i, t, e, n)
		}
	}), C.timers = [], C.fx.tick = function() {
		var t, e = 0,
			n = C.timers;
		for ($t = C.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
		n.length || C.fx.stop(), $t = void 0
	}, C.fx.timer = function(t) {
		C.timers.push(t), t() ? C.fx.start() : C.timers.pop()
	}, C.fx.interval = 13, C.fx.start = function() {
		Ht = Ht || setInterval(C.fx.tick, C.fx.interval)
	}, C.fx.stop = function() {
		clearInterval(Ht), Ht = null
	}, C.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, C.fn.delay = function(i, t) {
		return i = C.fx && C.fx.speeds[i] || i, t = t || "fx", this.queue(t, function(t, e) {
			var n = setTimeout(t, i);
			e.stop = function() {
				clearTimeout(n)
			}
		})
	}, Bt = y.createElement("input"), qt = y.createElement("select"), Yt = qt.appendChild(y.createElement("option")), Bt.type = "checkbox", v.checkOn = "" !== Bt.value, v.optSelected = Yt.selected, qt.disabled = !0, v.optDisabled = !Yt.disabled, (Bt = y.createElement("input")).value = "t", Bt.type = "radio", v.radioValue = "t" === Bt.value;
	var ee, ne = C.expr.attrHandle;
	C.fn.extend({
		attr: function(t, e) {
			return O(this, C.attr, t, e, 1 < arguments.length)
		},
		removeAttr: function(t) {
			return this.each(function() {
				C.removeAttr(this, t)
			})
		}
	}), C.extend({
		attr: function(t, e, n) {
			var i, o, r = t.nodeType;
			if (t && 3 !== r && 8 !== r && 2 !== r) return typeof t.getAttribute == Y ? C.prop(t, e, n) : (1 === r && C.isXMLDoc(t) || (e = e.toLowerCase(), i = C.attrHooks[e] || (C.expr.match.bool.test(e) ? ee : void 0)), void 0 === n ? i && "get" in i && null !== (o = i.get(t, e)) ? o : null == (o = C.find.attr(t, e)) ? void 0 : o : null !== n ? i && "set" in i && void 0 !== (o = i.set(t, n, e)) ? o : (t.setAttribute(e, n + ""), n) : void C.removeAttr(t, e))
		},
		removeAttr: function(t, e) {
			var n, i, o = 0,
				r = e && e.match(I);
			if (r && 1 === t.nodeType)
				for (; n = r[o++];) i = C.propFix[n] || n, C.expr.match.bool.test(n) && (t[i] = !1), t.removeAttribute(n)
		},
		attrHooks: {
			type: {
				set: function(t, e) {
					if (!v.radioValue && "radio" === e && C.nodeName(t, "input")) {
						var n = t.value;
						return t.setAttribute("type", e), n && (t.value = n), e
					}
				}
			}
		}
	}), ee = {
		set: function(t, e, n) {
			return !1 === e ? C.removeAttr(t, n) : t.setAttribute(n, n), n
		}
	}, C.each(C.expr.match.bool.source.match(/\w+/g), function(t, e) {
		var r = ne[e] || C.find.attr;
		ne[e] = function(t, e, n) {
			var i, o;
			return n || (o = ne[e], ne[e] = i, i = null != r(t, e, n) ? e.toLowerCase() : null, ne[e] = o), i
		}
	});
	var ie = /^(?:input|select|textarea|button)$/i;
	C.fn.extend({
		prop: function(t, e) {
			return O(this, C.prop, t, e, 1 < arguments.length)
		},
		removeProp: function(t) {
			return this.each(function() {
				delete this[C.propFix[t] || t]
			})
		}
	}), C.extend({
		propFix: {
			for: "htmlFor",
			class: "className"
		},
		prop: function(t, e, n) {
			var i, o, r = t.nodeType;
			if (t && 3 !== r && 8 !== r && 2 !== r) return (1 !== r || !C.isXMLDoc(t)) && (e = C.propFix[e] || e, o = C.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
		},
		propHooks: {
			tabIndex: {
				get: function(t) {
					return t.hasAttribute("tabindex") || ie.test(t.nodeName) || t.href ? t.tabIndex : -1
				}
			}
		}
	}), v.optSelected || (C.propHooks.selected = {
		get: function(t) {
			var e = t.parentNode;
			return e && e.parentNode && e.parentNode.selectedIndex, null
		}
	}), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		C.propFix[this.toLowerCase()] = this
	});
	var oe = /[\t\r\n\f]/g;
	C.fn.extend({
		addClass: function(e) {
			var t, n, i, o, r, s, a = "string" == typeof e && e,
				l = 0,
				c = this.length;
			if (C.isFunction(e)) return this.each(function(t) {
				C(this).addClass(e.call(this, t, this.className))
			});
			if (a)
				for (t = (e || "").match(I) || []; l < c; l++)
					if (i = 1 === (n = this[l]).nodeType && (n.className ? (" " + n.className + " ").replace(oe, " ") : " ")) {
						for (r = 0; o = t[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
						s = C.trim(i), n.className !== s && (n.className = s)
					} return this
		},
		removeClass: function(e) {
			var t, n, i, o, r, s, a = 0 === arguments.length || "string" == typeof e && e,
				l = 0,
				c = this.length;
			if (C.isFunction(e)) return this.each(function(t) {
				C(this).removeClass(e.call(this, t, this.className))
			});
			if (a)
				for (t = (e || "").match(I) || []; l < c; l++)
					if (i = 1 === (n = this[l]).nodeType && (n.className ? (" " + n.className + " ").replace(oe, " ") : "")) {
						for (r = 0; o = t[r++];)
							for (; 0 <= i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
						s = e ? C.trim(i) : "", n.className !== s && (n.className = s)
					} return this
		},
		toggleClass: function(o, e) {
			var r = typeof o;
			return "boolean" == typeof e && "string" == r ? e ? this.addClass(o) : this.removeClass(o) : this.each(C.isFunction(o) ? function(t) {
				C(this).toggleClass(o.call(this, t, this.className, e), e)
			} : function() {
				if ("string" == r)
					for (var t, e = 0, n = C(this), i = o.match(I) || []; t = i[e++];) n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
				else r != Y && "boolean" != r || (this.className && N.set(this, "__className__", this.className), this.className = !this.className && !1 !== o && N.get(this, "__className__") || "")
			})
		},
		hasClass: function(t) {
			for (var e = " " + t + " ", n = 0, i = this.length; n < i; n++)
				if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(oe, " ").indexOf(e)) return !0;
			return !1
		}
	});
	var re = /\r/g;
	C.fn.extend({
		val: function(n) {
			var i, t, o, e = this[0];
			return arguments.length ? (o = C.isFunction(n), this.each(function(t) {
				var e;
				1 === this.nodeType && (null == (e = o ? n.call(this, t, C(this).val()) : n) ? e = "" : "number" == typeof e ? e += "" : C.isArray(e) && (e = C.map(e, function(t) {
					return null == t ? "" : t + ""
				})), (i = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, e, "value") || (this.value = e))
			})) : e ? (i = C.valHooks[e.type] || C.valHooks[e.nodeName.toLowerCase()]) && "get" in i && void 0 !== (t = i.get(e, "value")) ? t : "string" == typeof(t = e.value) ? t.replace(re, "") : null == t ? "" : t : void 0
		}
	}), C.extend({
		valHooks: {
			option: {
				get: function(t) {
					var e = C.find.attr(t, "value");
					return null != e ? e : C.trim(C.text(t))
				}
			},
			select: {
				get: function(t) {
					for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || o < 0, s = r ? null : [], a = r ? o + 1 : i.length, l = o < 0 ? a : r ? o : 0; l < a; l++)
						if (!(!(n = i[l]).selected && l !== o || (v.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && C.nodeName(n.parentNode, "optgroup"))) {
							if (e = C(n).val(), r) return e;
							s.push(e)
						} return s
				},
				set: function(t, e) {
					for (var n, i, o = t.options, r = C.makeArray(e), s = o.length; s--;)((i = o[s]).selected = 0 <= C.inArray(i.value, r)) && (n = !0);
					return n || (t.selectedIndex = -1), r
				}
			}
		}
	}), C.each(["radio", "checkbox"], function() {
		C.valHooks[this] = {
			set: function(t, e) {
				return C.isArray(e) ? t.checked = 0 <= C.inArray(C(t).val(), e) : void 0
			}
		}, v.checkOn || (C.valHooks[this].get = function(t) {
			return null === t.getAttribute("value") ? "on" : t.value
		})
	}), C.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, n) {
		C.fn[n] = function(t, e) {
			return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n)
		}
	}), C.fn.extend({
		hover: function(t, e) {
			return this.mouseenter(t).mouseleave(e || t)
		},
		bind: function(t, e, n) {
			return this.on(t, null, e, n)
		},
		unbind: function(t, e) {
			return this.off(t, null, e)
		},
		delegate: function(t, e, n, i) {
			return this.on(e, t, n, i)
		},
		undelegate: function(t, e, n) {
			return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
		}
	});
	var se = C.now(),
		ae = /\?/;
	C.parseJSON = function(t) {
		return JSON.parse(t + "")
	}, C.parseXML = function(t) {
		var e;
		if (!t || "string" != typeof t) return null;
		try {
			e = (new DOMParser).parseFromString(t, "text/xml")
		} catch (t) {
			e = void 0
		}
		return e && !e.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + t), e
	};
	var le = /#.*$/,
		ce = /([?&])_=[^&]*/,
		ue = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		de = /^(?:GET|HEAD)$/,
		he = /^\/\//,
		pe = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
		fe = {},
		me = {},
		ge = "*/".concat("*"),
		ve = f.location.href,
		ye = pe.exec(ve.toLowerCase()) || [];

	function be(r) {
		return function(t, e) {
			"string" != typeof t && (e = t, t = "*");
			var n, i = 0,
				o = t.toLowerCase().match(I) || [];
			if (C.isFunction(e))
				for (; n = o[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(e)) : (r[n] = r[n] || []).push(e)
		}
	}

	function we(e, o, r, s) {
		var a = {},
			l = e === me;

		function c(t) {
			var i;
			return a[t] = !0, C.each(e[t] || [], function(t, e) {
				var n = e(o, r, s);
				return "string" != typeof n || l || a[n] ? l ? !(i = n) : void 0 : (o.dataTypes.unshift(n), c(n), !1)
			}), i
		}
		return c(o.dataTypes[0]) || !a["*"] && c("*")
	}

	function xe(t, e) {
		var n, i, o = C.ajaxSettings.flatOptions || {};
		for (n in e) void 0 !== e[n] && ((o[n] ? t : i = i || {})[n] = e[n]);
		return i && C.extend(!0, t, i), t
	}
	C.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: ve,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ye[1]),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": ge,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": C.parseJSON,
				"text xml": C.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(t, e) {
			return e ? xe(xe(t, C.ajaxSettings), e) : xe(C.ajaxSettings, t)
		},
		ajaxPrefilter: be(fe),
		ajaxTransport: be(me),
		ajax: function(t, e) {
			"object" == typeof t && (e = t, t = void 0), e = e || {};
			var u, d, h, n, p, i, f, o, m = C.ajaxSetup({}, e),
				g = m.context || m,
				v = m.context && (g.nodeType || g.jquery) ? C(g) : C.event,
				y = C.Deferred(),
				b = C.Callbacks("once memory"),
				w = m.statusCode || {},
				r = {},
				s = {},
				x = 0,
				a = "canceled",
				_ = {
					readyState: 0,
					getResponseHeader: function(t) {
						var e;
						if (2 === x) {
							if (!n)
								for (n = {}; e = ue.exec(h);) n[e[1].toLowerCase()] = e[2];
							e = n[t.toLowerCase()]
						}
						return null == e ? null : e
					},
					getAllResponseHeaders: function() {
						return 2 === x ? h : null
					},
					setRequestHeader: function(t, e) {
						var n = t.toLowerCase();
						return x || (t = s[n] = s[n] || t, r[t] = e), this
					},
					overrideMimeType: function(t) {
						return x || (m.mimeType = t), this
					},
					statusCode: function(t) {
						var e;
						if (t)
							if (x < 2)
								for (e in t) w[e] = [w[e], t[e]];
							else _.always(t[_.status]);
						return this
					},
					abort: function(t) {
						var e = t || a;
						return u && u.abort(e), l(0, e), this
					}
				};
			if (y.promise(_).complete = b.add, _.success = _.done, _.error = _.fail, m.url = ((t || m.url || ve) + "").replace(le, "").replace(he, ye[1] + "//"), m.type = e.method || e.type || m.method || m.type, m.dataTypes = C.trim(m.dataType || "*").toLowerCase().match(I) || [""], null == m.crossDomain && (i = pe.exec(m.url.toLowerCase()), m.crossDomain = !(!i || i[1] === ye[1] && i[2] === ye[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (ye[3] || ("http:" === ye[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = C.param(m.data, m.traditional)), we(fe, m, e, _), 2 === x) return _;
			for (o in (f = C.event && m.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !de.test(m.type), d = m.url, m.hasContent || (m.data && (d = m.url += (ae.test(d) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = ce.test(d) ? d.replace(ce, "$1_=" + se++) : d + (ae.test(d) ? "&" : "?") + "_=" + se++)), m.ifModified && (C.lastModified[d] && _.setRequestHeader("If-Modified-Since", C.lastModified[d]), C.etag[d] && _.setRequestHeader("If-None-Match", C.etag[d])), (m.data && m.hasContent && !1 !== m.contentType || e.contentType) && _.setRequestHeader("Content-Type", m.contentType), _.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ge + "; q=0.01" : "") : m.accepts["*"]), m.headers) _.setRequestHeader(o, m.headers[o]);
			if (m.beforeSend && (!1 === m.beforeSend.call(g, _, m) || 2 === x)) return _.abort();
			for (o in a = "abort", {
					success: 1,
					error: 1,
					complete: 1
				}) _[o](m[o]);
			if (u = we(me, m, e, _)) {
				_.readyState = 1, f && v.trigger("ajaxSend", [_, m]), m.async && 0 < m.timeout && (p = setTimeout(function() {
					_.abort("timeout")
				}, m.timeout));
				try {
					x = 1, u.send(r, l)
				} catch (t) {
					if (!(x < 2)) throw t;
					l(-1, t)
				}
			} else l(-1, "No Transport");

			function l(t, e, n, i) {
				var o, r, s, a, l, c = e;
				2 !== x && (x = 2, p && clearTimeout(p), u = void 0, h = i || "", _.readyState = 0 < t ? 4 : 0, o = 200 <= t && t < 300 || 304 === t, n && (a = function(t, e, n) {
					for (var i, o, r, s, a = t.contents, l = t.dataTypes;
						"*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
					if (i)
						for (o in a)
							if (a[o] && a[o].test(i)) {
								l.unshift(o);
								break
							} if (l[0] in n) r = l[0];
					else {
						for (o in n) {
							if (!l[0] || t.converters[o + " " + l[0]]) {
								r = o;
								break
							}
							s = s || o
						}
						r = r || s
					}
					return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
				}(m, _, n)), a = function(t, e, n, i) {
					var o, r, s, a, l, c = {},
						u = t.dataTypes.slice();
					if (u[1])
						for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
					for (r = u.shift(); r;)
						if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())
							if ("*" === r) r = l;
							else if ("*" !== l && l !== r) {
						if (!(s = c[l + " " + r] || c["* " + r]))
							for (o in c)
								if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
									!0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
									break
								} if (!0 !== s)
							if (s && t.throws) e = s(e);
							else try {
								e = s(e)
							} catch (t) {
								return {
									state: "parsererror",
									error: s ? t : "No conversion from " + l + " to " + r
								}
							}
					}
					return {
						state: "success",
						data: e
					}
				}(m, a, _, o), o ? (m.ifModified && ((l = _.getResponseHeader("Last-Modified")) && (C.lastModified[d] = l), (l = _.getResponseHeader("etag")) && (C.etag[d] = l)), 204 === t || "HEAD" === m.type ? c = "nocontent" : 304 === t ? c = "notmodified" : (c = a.state, r = a.data, o = !(s = a.error))) : (s = c, !t && c || (c = "error", t < 0 && (t = 0))), _.status = t, _.statusText = (e || c) + "", o ? y.resolveWith(g, [r, c, _]) : y.rejectWith(g, [_, c, s]), _.statusCode(w), w = void 0, f && v.trigger(o ? "ajaxSuccess" : "ajaxError", [_, m, o ? r : s]), b.fireWith(g, [_, c]), f && (v.trigger("ajaxComplete", [_, m]), --C.active || C.event.trigger("ajaxStop")))
			}
			return _
		},
		getJSON: function(t, e, n) {
			return C.get(t, e, n, "json")
		},
		getScript: function(t, e) {
			return C.get(t, void 0, e, "script")
		}
	}), C.each(["get", "post"], function(t, o) {
		C[o] = function(t, e, n, i) {
			return C.isFunction(e) && (i = i || n, n = e, e = void 0), C.ajax({
				url: t,
				type: o,
				dataType: i,
				data: e,
				success: n
			})
		}
	}), C._evalUrl = function(t) {
		return C.ajax({
			url: t,
			type: "GET",
			dataType: "script",
			async: !1,
			global: !1,
			throws: !0
		})
	}, C.fn.extend({
		wrapAll: function(e) {
			var t;
			return C.isFunction(e) ? this.each(function(t) {
				C(this).wrapAll(e.call(this, t))
			}) : (this[0] && (t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
				for (var t = this; t.firstElementChild;) t = t.firstElementChild;
				return t
			}).append(this)), this)
		},
		wrapInner: function(n) {
			return this.each(C.isFunction(n) ? function(t) {
				C(this).wrapInner(n.call(this, t))
			} : function() {
				var t = C(this),
					e = t.contents();
				e.length ? e.wrapAll(n) : t.append(n)
			})
		},
		wrap: function(e) {
			var n = C.isFunction(e);
			return this.each(function(t) {
				C(this).wrapAll(n ? e.call(this, t) : e)
			})
		},
		unwrap: function() {
			return this.parent().each(function() {
				C.nodeName(this, "body") || C(this).replaceWith(this.childNodes)
			}).end()
		}
	}), C.expr.filters.hidden = function(t) {
		return t.offsetWidth <= 0 && t.offsetHeight <= 0
	}, C.expr.filters.visible = function(t) {
		return !C.expr.filters.hidden(t)
	};
	var _e = /%20/g,
		Ce = /\[\]$/,
		Te = /\r?\n/g,
		Ee = /^(?:submit|button|image|reset|file)$/i,
		Se = /^(?:input|select|textarea|keygen)/i;
	C.param = function(t, e) {
		function n(t, e) {
			e = C.isFunction(e) ? e() : null == e ? "" : e, o[o.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
		}
		var i, o = [];
		if (void 0 === e && (e = C.ajaxSettings && C.ajaxSettings.traditional), C.isArray(t) || t.jquery && !C.isPlainObject(t)) C.each(t, function() {
			n(this.name, this.value)
		});
		else
			for (i in t) ! function n(i, t, o, r) {
				var e;
				if (C.isArray(t)) C.each(t, function(t, e) {
					o || Ce.test(i) ? r(i, e) : n(i + "[" + ("object" == typeof e ? t : "") + "]", e, o, r)
				});
				else if (o || "object" !== C.type(t)) r(i, t);
				else
					for (e in t) n(i + "[" + e + "]", t[e], o, r)
			}(i, t[i], e, n);
		return o.join("&").replace(_e, "+")
	}, C.fn.extend({
		serialize: function() {
			return C.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var t = C.prop(this, "elements");
				return t ? C.makeArray(t) : this
			}).filter(function() {
				var t = this.type;
				return this.name && !C(this).is(":disabled") && Se.test(this.nodeName) && !Ee.test(t) && (this.checked || !q.test(t))
			}).map(function(t, e) {
				var n = C(this).val();
				return null == n ? null : C.isArray(n) ? C.map(n, function(t) {
					return {
						name: e.name,
						value: t.replace(Te, "\r\n")
					}
				}) : {
					name: e.name,
					value: n.replace(Te, "\r\n")
				}
			}).get()
		}
	}), C.ajaxSettings.xhr = function() {
		try {
			return new XMLHttpRequest
		} catch (t) {}
	};
	var ke = 0,
		Le = {},
		Ie = {
			0: 200,
			1223: 204
		},
		De = C.ajaxSettings.xhr();
	f.attachEvent && f.attachEvent("onunload", function() {
		for (var t in Le) Le[t]()
	}), v.cors = !!De && "withCredentials" in De, v.ajax = De = !!De, C.ajaxTransport(function(r) {
		var s;
		return v.cors || De && !r.crossDomain ? {
			send: function(t, e) {
				var n, i = r.xhr(),
					o = ++ke;
				if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
					for (n in r.xhrFields) i[n] = r.xhrFields[n];
				for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) i.setRequestHeader(n, t[n]);
				s = function(t) {
					return function() {
						s && (delete Le[o], s = i.onload = i.onerror = null, "abort" === t ? i.abort() : "error" === t ? e(i.status, i.statusText) : e(Ie[i.status] || i.status, i.statusText, "string" == typeof i.responseText ? {
							text: i.responseText
						} : void 0, i.getAllResponseHeaders()))
					}
				}, i.onload = s(), i.onerror = s("error"), s = Le[o] = s("abort");
				try {
					i.send(r.hasContent && r.data || null)
				} catch (t) {
					if (s) throw t
				}
			},
			abort: function() {
				s && s()
			}
		} : void 0
	}), C.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function(t) {
				return C.globalEval(t), t
			}
		}
	}), C.ajaxPrefilter("script", function(t) {
		void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
	}), C.ajaxTransport("script", function(n) {
		var i, o;
		if (n.crossDomain) return {
			send: function(t, e) {
				i = C("<script>").prop({
					async: !0,
					charset: n.scriptCharset,
					src: n.url
				}).on("load error", o = function(t) {
					i.remove(), o = null, t && e("error" === t.type ? 404 : 200, t.type)
				}), y.head.appendChild(i[0])
			},
			abort: function() {
				o && o()
			}
		}
	});
	var ze = [],
		Oe = /(=)\?(?=&|$)|\?\?/;
	C.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var t = ze.pop() || C.expando + "_" + se++;
			return this[t] = !0, t
		}
	}), C.ajaxPrefilter("json jsonp", function(t, e, n) {
		var i, o, r, s = !1 !== t.jsonp && (Oe.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Oe.test(t.data) && "data");
		return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = C.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Oe, "$1" + i) : !1 !== t.jsonp && (t.url += (ae.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
			return r || C.error(i + " was not called"), r[0]
		}, t.dataTypes[0] = "json", o = f[i], f[i] = function() {
			r = arguments
		}, n.always(function() {
			f[i] = o, t[i] && (t.jsonpCallback = e.jsonpCallback, ze.push(i)), r && C.isFunction(o) && o(r[0]), r = o = void 0
		}), "script") : void 0
	}), C.parseHTML = function(t, e, n) {
		if (!t || "string" != typeof t) return null;
		"boolean" == typeof e && (n = e, e = !1), e = e || y;
		var i = b.exec(t),
			o = !n && [];
		return i ? [e.createElement(i[1])] : (i = C.buildFragment([t], e, o), o && o.length && C(o).remove(), C.merge([], i.childNodes))
	};
	var Ae = C.fn.load;
	C.fn.load = function(t, e, n) {
		if ("string" != typeof t && Ae) return Ae.apply(this, arguments);
		var i, o, r, s = this,
			a = t.indexOf(" ");
		return 0 <= a && (i = C.trim(t.slice(a)), t = t.slice(0, a)), C.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), 0 < s.length && C.ajax({
			url: t,
			type: o,
			dataType: "html",
			data: e
		}).done(function(t) {
			r = arguments, s.html(i ? C("<div>").append(C.parseHTML(t)).find(i) : t)
		}).complete(n && function(t, e) {
			s.each(n, r || [t.responseText, e, t])
		}), this
	}, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
		C.fn[e] = function(t) {
			return this.on(e, t)
		}
	}), C.expr.filters.animated = function(e) {
		return C.grep(C.timers, function(t) {
			return e === t.elem
		}).length
	};
	var Ne = f.document.documentElement;

	function Re(t) {
		return C.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
	}
	C.offset = {
		setOffset: function(t, e, n) {
			var i, o, r, s, a, l, c = C.css(t, "position"),
				u = C(t),
				d = {};
			"static" === c && (t.style.position = "relative"), a = u.offset(), r = C.css(t, "top"), l = C.css(t, "left"), o = ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto") ? (s = (i = u.position()).top, i.left) : (s = parseFloat(r) || 0, parseFloat(l) || 0), C.isFunction(e) && (e = e.call(t, n, a)), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : u.css(d)
		}
	}, C.fn.extend({
		offset: function(e) {
			if (arguments.length) return void 0 === e ? this : this.each(function(t) {
				C.offset.setOffset(this, e, t)
			});
			var t, n, i = this[0],
				o = {
					top: 0,
					left: 0
				},
				r = i && i.ownerDocument;
			return r ? (t = r.documentElement, C.contains(t, i) ? (typeof i.getBoundingClientRect != Y && (o = i.getBoundingClientRect()), n = Re(r), {
				top: o.top + n.pageYOffset - t.clientTop,
				left: o.left + n.pageXOffset - t.clientLeft
			}) : o) : void 0
		},
		position: function() {
			if (this[0]) {
				var t, e, n = this[0],
					i = {
						top: 0,
						left: 0
					};
				return "fixed" === C.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), C.nodeName(t[0], "html") || (i = t.offset()), i.top += C.css(t[0], "borderTopWidth", !0), i.left += C.css(t[0], "borderLeftWidth", !0)), {
					top: e.top - i.top - C.css(n, "marginTop", !0),
					left: e.left - i.left - C.css(n, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var t = this.offsetParent || Ne; t && !C.nodeName(t, "html") && "static" === C.css(t, "position");) t = t.offsetParent;
				return t || Ne
			})
		}
	}), C.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, o) {
		var r = "pageYOffset" === o;
		C.fn[e] = function(t) {
			return O(this, function(t, e, n) {
				var i = Re(t);
				return void 0 === n ? i ? i[o] : t[e] : void(i ? i.scrollTo(r ? f.pageXOffset : n, r ? n : f.pageYOffset) : t[e] = n)
			}, e, t, arguments.length, null)
		}
	}), C.each(["top", "left"], function(t, n) {
		C.cssHooks[n] = kt(v.pixelPosition, function(t, e) {
			return e ? (e = St(t, n), Tt.test(e) ? C(t).position()[n] + "px" : e) : void 0
		})
	}), C.each({
		Height: "height",
		Width: "width"
	}, function(r, s) {
		C.each({
			padding: "inner" + r,
			content: s,
			"": "outer" + r
		}, function(i, t) {
			C.fn[t] = function(t, e) {
				var n = arguments.length && (i || "boolean" != typeof t),
					o = i || (!0 === t || !0 === e ? "margin" : "border");
				return O(this, function(t, e, n) {
					var i;
					return C.isWindow(t) ? t.document.documentElement["client" + r] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + r], i["scroll" + r], t.body["offset" + r], i["offset" + r], i["client" + r])) : void 0 === n ? C.css(t, e, o) : C.style(t, e, n, o)
				}, s, n ? t : void 0, n, null)
			}
		})
	}), C.fn.size = function() {
		return this.length
	}, C.fn.andSelf = C.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
		return C
	});
	var je = f.jQuery,
		Fe = f.$;
	return C.noConflict = function(t) {
		return f.$ === C && (f.$ = Fe), t && f.jQuery === C && (f.jQuery = je), C
	}, typeof t == Y && (f.jQuery = f.$ = C), C
});