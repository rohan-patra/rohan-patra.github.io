! function(l) {
	"use strict";

	function e() {
		var t = l(window).width(),
			e = l("#site_header");
		t < 1025 ? (e.addClass("mobile-menu-hide"), l(".menu-toggle").removeClass("open"), setTimeout(function() {
			e.addClass("animate")
		}, 500)) : e.removeClass("animate")
	}

	function i() {
		1024 < l(window).width() ? l(".animated-section, .single-page-content").each(function() {
			l(this).perfectScrollbar()
		}) : l(".animated-section, .single-page-content").each(function() {
			l(this).perfectScrollbar("destroy")
		})
	}
	l(function() {
		l("#contact_form").validator(), l("#contact_form").on("submit", function(t) {
			if (!t.isDefaultPrevented()) return l.ajax({
				type: "POST",
				url: "contact_form/contact_form.php",
				data: l(this).serialize(),
				success: function(t) {
					var e = "alert-" + t.type,
						i = t.message,
						n = '<div class="alert ' + e + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + i + "</div>";
					e && i && (l("#contact_form").find(".messages").html(n), l("#contact_form")[0].reset())
				}
			}), !1
		})
	}), l(window).on("load", function() {
		l(".preloader").fadeOut(800, "linear"), l(".animated-sections")[0] && PageTransitions.init({
			menu: "ul.main-menu"
		})
	}).on("resize", function() {
		e(), l(".animated-section").each(function() {
			l(this).perfectScrollbar("update")
		}), i()
	}), l(document).on("ready", function() {
		var s = 23 / l(document).height(),
			a = 23 / l(document).width();
		l("body").on("mousemove", function(t) {
			var e = t.pageX - l(document).width() / 2,
				i = t.pageY - l(document).height() / 2,
				n = a * e * -1,
				o = s * i * -1,
				r = l(".lm-animated-bg");
			r.addClass("transition"), r.css({
				"background-position": "calc( 50% + " + n + "px ) calc( 50% + " + o + "px )"
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
			var e = l(".portfolio-grid"),
				t = l(".portfolio-filters");
			e && (e.shuffle({
				speed: 450,
				itemSelector: "figure"
			}), t.on("click", ".filter", function(t) {
				e.shuffle("update"), t.preventDefault(), l(".portfolio-filters .filter").parent().removeClass("active"), l(this).parent().addClass("active"), e.shuffle("shuffle", l(this).attr("data-group"))
			}))
		});
		var t = l(".blog-masonry");
		t.imagesLoaded(function() {
			t.masonry()
		}), i(), l(".text-rotation").owlCarousel({
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
				markupParse: function(t, e, i) {
					e.title = i.el.attr("title")
				}
			}
		})
	})
}(jQuery),
function(e, i) {
	"function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(t) {
		return i(e, t)
	}) : "object" == typeof module && module.exports ? module.exports = i(e, require("jquery")) : e.jQueryBridget = i(e, e.jQuery)
}(window, function(t, e) {
	"use strict";

	function i(c, o, u) {
		(u = u || e || t.jQuery) && (o.prototype.option || (o.prototype.option = function(t) {
			u.isPlainObject(t) && (this.options = u.extend(!0, this.options, t))
		}), u.fn[c] = function(t) {
			if ("string" != typeof t) return n = t, this.each(function(t, e) {
				var i = u.data(e, c);
				i ? (i.option(n), i._init()) : (i = new o(e, n), u.data(e, c, i))
			}), this;
			var e, r, s, n, a = d.call(arguments, 1),
				l = "$()." + c + '("' + (r = t) + '")';
			return (e = this).each(function(t, e) {
				var i, n, o = u.data(e, c);
				o ? (i = o[r]) && "_" != r.charAt(0) ? (n = i.apply(o, a), s = void 0 === s ? n : s) : h(l + " is not a valid method") : h(c + " not initialized. Cannot call methods, i.e. " + l)
			}), void 0 !== s ? s : e
		}, n(u))
	}

	function n(t) {
		!t || t && t.bridget || (t.bridget = i)
	}
	var d = Array.prototype.slice,
		o = t.console,
		h = void 0 === o ? function() {} : function(t) {
			o.error(t)
		};
	return n(e || t.jQuery), i
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
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
			var n = 0,
				o = i[n];
			e = e || [];
			for (var r = this._onceEvents && this._onceEvents[t]; o;) {
				var s = r && r[o];
				s && (this.off(t, o), delete r[o]), o.apply(this, e), o = i[n += s ? 0 : 1]
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

	function x(t) {
		var e = parseFloat(t);
		return -1 == t.indexOf("%") && !isNaN(e) && e
	}

	function _(t) {
		var e = getComputedStyle(t);
		return e || i("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
	}
	var C, i = "undefined" == typeof console ? function() {} : function(t) {
			console.error(t)
		},
		T = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
		E = T.length,
		S = !1;
	return function t(e) {
		if (S || (S = !0, (y = document.createElement("div")).style.width = "200px", y.style.padding = "1px 2px 3px 4px", y.style.borderStyle = "solid", y.style.borderWidth = "1px 2px 3px 4px", y.style.boxSizing = "border-box", (b = document.body || document.documentElement).appendChild(y), w = _(y), t.isBoxSizeOuter = C = 200 == x(w.width), b.removeChild(y)), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) {
			var i = _(e);
			if ("none" == i.display) return function() {
				for (var t = {
						width: 0,
						height: 0,
						innerWidth: 0,
						innerHeight: 0,
						outerWidth: 0,
						outerHeight: 0
					}, e = 0; e < E; e++) t[T[e]] = 0;
				return t
			}();
			var n = {};
			n.width = e.offsetWidth, n.height = e.offsetHeight;
			for (var o = n.isBorderBox = "border-box" == i.boxSizing, r = 0; r < E; r++) {
				var s = T[r],
					a = i[s],
					l = parseFloat(a);
				n[s] = isNaN(l) ? 0 : l
			}
			var c = n.paddingLeft + n.paddingRight,
				u = n.paddingTop + n.paddingBottom,
				d = n.marginLeft + n.marginRight,
				h = n.marginTop + n.marginBottom,
				p = n.borderLeftWidth + n.borderRightWidth,
				f = n.borderTopWidth + n.borderBottomWidth,
				m = o && C,
				g = x(i.width);
			!1 !== g && (n.width = g + (m ? 0 : c + p));
			var v = x(i.height);
			return !1 !== v && (n.height = v + (m ? 0 : u + f)), n.innerWidth = n.width - (c + p), n.innerHeight = n.height - (u + f), n.outerWidth = n.width + d, n.outerHeight = n.height + h, n
		}
		var y, b, w
	}
}),
function(t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
	"use strict";
	var i = function() {
		var t = Element.prototype;
		if (t.matches) return "matches";
		if (t.matchesSelector) return "matchesSelector";
		for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
			var n = e[i] + "MatchesSelector";
			if (t[n]) return n
		}
	}();
	return function(t, e) {
		return t[i](e)
	}
}),
function(e, i) {
	"function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(t) {
		return i(e, t)
	}) : "object" == typeof module && module.exports ? module.exports = i(e, require("desandro-matches-selector")) : e.fizzyUIUtils = i(e, e.matchesSelector)
}(window, function(c, r) {
	var u = {
			extend: function(t, e) {
				for (var i in e) t[i] = e[i];
				return t
			},
			modulo: function(t, e) {
				return (t % e + e) % e
			},
			makeArray: function(t) {
				var e = [];
				if (Array.isArray(t)) e = t;
				else if (t && "number" == typeof t.length)
					for (var i = 0; i < t.length; i++) e.push(t[i]);
				else e.push(t);
				return e
			},
			removeFrom: function(t, e) {
				var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
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
			filterFindElements: function(t, n) {
				t = u.makeArray(t);
				var o = [];
				return t.forEach(function(t) {
					if (t instanceof HTMLElement) {
						if (!n) return void o.push(t);
						r(t, n) && o.push(t);
						for (var e = t.querySelectorAll(n), i = 0; i < e.length; i++) o.push(e[i])
					}
				}), o
			},
			debounceMethod: function(t, e, n) {
				var o = t.prototype[e],
					r = e + "Timeout";
				t.prototype[e] = function() {
					var t = this[r];
					t && clearTimeout(t);
					var e = arguments,
						i = this;
					this[r] = setTimeout(function() {
						o.apply(i, e), delete i[r]
					}, n || 100)
				}
			},
			docReady: function(t) {
				var e = document.readyState;
				"complete" == e || "interactive" == e ? t() : document.addEventListener("DOMContentLoaded", t)
			},
			toDashed: function(t) {
				return t.replace(/(.)([A-Z])/g, function(t, e, i) {
					return e + "-" + i
				}).toLowerCase()
			}
		},
		d = c.console;
	return u.htmlInit = function(a, l) {
		u.docReady(function() {
			var t = u.toDashed(l),
				o = "data-" + t,
				e = document.querySelectorAll("[" + o + "]"),
				i = document.querySelectorAll(".js-" + t),
				n = u.makeArray(e).concat(u.makeArray(i)),
				r = o + "-options",
				s = c.jQuery;
			n.forEach(function(t) {
				var e, i = t.getAttribute(o) || t.getAttribute(r);
				try {
					e = i && JSON.parse(i)
				} catch (e) {
					return void(d && d.error("Error parsing " + o + " on " + t.className + ": " + e))
				}
				var n = new a(t, e);
				s && s.data(t, l, n)
			})
		})
	}, u
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
	"use strict";

	function i(t, e) {
		t && (this.element = t, this.layout = e, this.position = {
			x: 0,
			y: 0
		}, this._create())
	}
	var n = document.documentElement.style,
		o = "string" == typeof n.transition ? "transition" : "WebkitTransition",
		r = "string" == typeof n.transform ? "transform" : "WebkitTransform",
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
		l = i.prototype = Object.create(t.prototype);
	l.constructor = i, l._create = function() {
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
		for (var i in t) e[a[i] || i] = t[i]
	}, l.getPosition = function() {
		var t = getComputedStyle(this.element),
			e = this.layout._getOption("originLeft"),
			i = this.layout._getOption("originTop"),
			n = t[e ? "left" : "right"],
			o = t[i ? "top" : "bottom"],
			r = this.layout.size,
			s = -1 != n.indexOf("%") ? parseFloat(n) / 100 * r.width : parseInt(n, 10),
			a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * r.height : parseInt(o, 10),
			s = isNaN(s) ? 0 : s,
			a = isNaN(a) ? 0 : a;
		s -= e ? r.paddingLeft : r.paddingRight, a -= i ? r.paddingTop : r.paddingBottom, this.position.x = s, this.position.y = a
	}, l.layoutPosition = function() {
		var t = this.layout.size,
			e = {},
			i = this.layout._getOption("originLeft"),
			n = this.layout._getOption("originTop"),
			o = i ? "paddingLeft" : "paddingRight",
			r = i ? "left" : "right",
			s = i ? "right" : "left",
			a = this.position.x + t[o];
		e[r] = this.getXValue(a), e[s] = "";
		var l = n ? "paddingTop" : "paddingBottom",
			c = n ? "top" : "bottom",
			u = n ? "bottom" : "top",
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
		var i, n, o, r = this.position.x,
			s = this.position.y,
			a = parseInt(t, 10),
			l = parseInt(e, 10),
			c = a === this.position.x && l === this.position.y;
		this.setPosition(t, e), !c || this.isTransitioning ? (i = t - r, n = e - s, (o = {}).transform = this.getTranslate(i, n), this.transition({
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
			for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
			for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
			t.from && (this.css(t.from), this.element.offsetHeight), this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
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
		var e, i;
		t.target === this.element && (e = this._transn, i = u[t.propertyName] || t.propertyName, delete e.ingProperties[i], function(t) {
			for (var e in t) return;
			return 1
		}(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd && (e.onEnd[i].call(this), delete e.onEnd[i]), this.emitEvent("transitionEnd", [this]))
	}, l.disableTransition = function() {
		this.removeTransitionStyles(), this.element.removeEventListener(s, this, !1), this.isTransitioning = !1
	}, l._removeStyles = function(t) {
		var e = {};
		for (var i in t) e[i] = "";
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
		for (var i in e) return i
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
	}, i
}),
function(o, r) {
	"use strict";
	"function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(t, e, i, n) {
		return r(o, t, e, i, n)
	}) : "object" == typeof module && module.exports ? module.exports = r(o, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : o.Outlayer = r(o, o.EvEmitter, o.getSize, o.fizzyUIUtils, o.Outlayer.Item)
}(window, function(t, e, o, r, n) {
	"use strict";

	function s(t, e) {
		var i, n = r.getQueryElement(t);
		n ? (this.element = n, c && (this.$element = c(this.element)), this.options = r.extend({}, this.constructor.defaults), this.option(e), i = ++u, this.element.outlayerGUID = i, (d[i] = this)._create(), this._getOption("initLayout") && this.layout()) : l && l.error("Bad element for " + this.constructor.namespace + ": " + (n || t))
	}

	function a(t) {
		function e() {
			t.apply(this, arguments)
		}
		return (e.prototype = Object.create(t.prototype)).constructor = e
	}

	function i() {}
	var l = t.console,
		c = t.jQuery,
		u = 0,
		d = {};
	s.namespace = "outlayer", s.Item = n, s.defaults = {
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
		for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
			var r = new i(e[o], this);
			n.push(r)
		}
		return n
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
		var i, n = this.options[t];
		n ? ("string" == typeof n ? i = this.element.querySelector(n) : n instanceof HTMLElement && (i = n), this[t] = i ? o(i)[e] : n) : this[t] = 0
	}, h.layoutItems = function(t, e) {
		t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
	}, h._getItemsForLayout = function(t) {
		return t.filter(function(t) {
			return !t.isIgnored
		})
	}, h._layoutItems = function(t, i) {
		var n;
		this._emitCompleteOnItems("layout", t), t && t.length && (n = [], t.forEach(function(t) {
			var e = this._getItemLayoutPosition(t);
			e.item = t, e.isInstant = i || t.isLayoutInstant, n.push(e)
		}, this), this._processLayoutQueue(n))
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
		var n = this.options.stagger;
		return null == n ? void(this.stagger = 0) : (this.stagger = function() {
			if ("number" == typeof n) return n;
			var t = n.match(/(^\d*\.?\d*)(\w*)/),
				e = t && t[1],
				i = t && t[2];
			return e.length ? (e = parseFloat(e)) * (p[i] || 1) : 0
		}(), this.stagger)
	}, h._positionItem = function(t, e, i, n, o) {
		n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
	}, h._postLayout = function() {
		this.resizeContainer()
	}, h.resizeContainer = function() {
		var t;
		!this._getOption("resizeContainer") || (t = this._getContainerSize()) && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
	}, h._getContainerSize = i, h._setContainerMeasure = function(t, e) {
		var i;
		void 0 !== t && ((i = this.size).isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px")
	}, h._emitCompleteOnItems = function(e, t) {
		function i() {
			r.dispatchEvent(e + "Complete", null, [t])
		}

		function n() {
			++o == s && i()
		}
		var o, r = this,
			s = t.length;
		t && s ? (o = 0, t.forEach(function(t) {
			t.once(e, n)
		})) : i()
	}, h.dispatchEvent = function(t, e, i) {
		var n, o = e ? [e].concat(i) : i;
		this.emitEvent(t, o), c && (this.$element = this.$element || c(this.element), e ? ((n = c.Event(e)).type = t, this.$element.trigger(n, i)) : this.$element.trigger(t, i))
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
	}, h._manageStamp = i, h._getElementOffset = function(t) {
		var e = t.getBoundingClientRect(),
			i = this._boundingRect,
			n = o(t);
		return {
			left: e.left - i.left - n.marginLeft,
			top: e.top - i.top - n.marginTop,
			right: i.right - e.right - n.marginRight,
			bottom: i.bottom - e.bottom - n.marginBottom
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
		var e, i = this._itemize(t);
		i.length && (e = this.items.slice(0), this.items = i.concat(e), this._resetLayout(), this._manageStamps(), this.layoutItems(i, !0), this.reveal(i), this.layoutItems(e))
	}, h.reveal = function(t) {
		var i;
		this._emitCompleteOnItems("reveal", t), t && t.length && (i = this.updateStagger(), t.forEach(function(t, e) {
			t.stagger(e * i), t.reveal()
		}))
	}, h.hide = function(t) {
		var i;
		this._emitCompleteOnItems("hide", t), t && t.length && (i = this.updateStagger(), t.forEach(function(t, e) {
			t.stagger(e * i), t.hide()
		}))
	}, h.revealItemElements = function(t) {
		var e = this.getItems(t);
		this.reveal(e)
	}, h.hideItemElements = function(t) {
		var e = this.getItems(t);
		this.hide(e)
	}, h.getItem = function(t) {
		for (var e = 0; e < this.items.length; e++) {
			var i = this.items[e];
			if (i.element == t) return i
		}
	}, h.getItems = function(t) {
		t = r.makeArray(t);
		var i = [];
		return t.forEach(function(t) {
			var e = this.getItem(t);
			e && i.push(e)
		}, this), i
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
		var i = a(s);
		return i.defaults = r.extend({}, s.defaults), r.extend(i.defaults, e), i.compatOptions = r.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = a(n), r.htmlInit(i, t), c && c.bridget && c.bridget(t, i), i
	};
	var p = {
		ms: 1,
		s: 1e3
	};
	return s.Item = n, s
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
		var i = this.columnWidth += this.gutter,
			n = this.containerWidth + this.gutter,
			o = n / i,
			r = i - n % i,
			o = Math[r && r < 1 ? "round" : "floor"](o);
		this.cols = Math.max(o, 1)
	}, e.prototype.getContainerWidth = function() {
		var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
			e = c(t);
		this.containerWidth = e && e.innerWidth
	}, e.prototype._getItemLayoutPosition = function(t) {
		t.getSize();
		for (var e = t.size.outerWidth % this.columnWidth, i = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth), n = (i = Math.min(i, this.cols), this._getColGroup(i)), o = Math.min.apply(Math, n), r = n.indexOf(o), s = {
				x: this.columnWidth * r,
				y: o
			}, a = o + t.size.outerHeight, l = this.cols + 1 - n.length, c = 0; c < l; c++) this.colYs[r + c] = a;
		return s
	}, e.prototype._getColGroup = function(t) {
		if (t < 2) return this.colYs;
		for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++) {
			var o = this.colYs.slice(n, n + t);
			e[n] = Math.max.apply(Math, o)
		}
		return e
	}, e.prototype._manageStamp = function(t) {
		var e = c(t),
			i = this._getElementOffset(t),
			n = this._getOption("originLeft") ? i.left : i.right,
			o = n + e.outerWidth,
			r = Math.floor(n / this.columnWidth),
			s = (r = Math.max(0, r), Math.floor(o / this.columnWidth));
		s -= o % this.columnWidth ? 0 : 1, s = Math.min(this.cols - 1, s);
		for (var a = (this._getOption("originTop") ? i.top : i.bottom) + e.outerHeight, l = r; l <= s; l++) this.colYs[l] = Math.max(a, this.colYs[l])
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
		function s(t, e) {
			return typeof t === e
		}

		function a(t, e) {
			for (var i in t) {
				var n = t[i];
				if (!~("" + n).indexOf("-") && c[n] !== r) return "pfx" != e || n
			}
			return !1
		}

		function n(t, e, i) {
			var n = t.charAt(0).toUpperCase() + t.slice(1),
				o = (t + " " + f.join(n + " ") + n).split(" ");
			return s(e, "string") || void 0 === e ? a(o, e) : function(t, e, i) {
				for (var n in t) {
					var o = e[t[n]];
					if (o !== r) return !1 === i ? t[n] : s(o, "function") ? o.bind(i || e) : o
				}
				return !1
			}(o = (t + " " + m.join(n + " ") + n).split(" "), e, i)
		}

		function o(t, e, i, n) {
			var o, r, s, a, l = d.createElement("div"),
				c = d.body,
				u = c || d.createElement("body");
			if (parseInt(i, 10))
				for (; i--;)(s = d.createElement("div")).id = n ? n[i] : p + (i + 1), l.appendChild(s);
			return o = ["&#173;", '<style id="s', p, '">', t, "</style>"].join(""), l.id = p, (c ? l : u).innerHTML += o, u.appendChild(l), c || (u.style.background = "", u.style.overflow = "hidden", a = h.style.overflow, h.style.overflow = "hidden", h.appendChild(u)), r = e(l, t), c ? l.parentNode.removeChild(l) : (u.parentNode.removeChild(u), h.style.overflow = a), !!r
		}
		var e, l = {},
			h = d.documentElement,
			p = "modernizr",
			c = d.createElement(p).style,
			i = " -webkit- -moz- -o- -ms- ".split(" "),
			u = "Webkit Moz O ms",
			f = u.split(" "),
			m = u.toLowerCase().split(" "),
			g = {},
			v = [],
			y = v.slice,
			b = {}.hasOwnProperty,
			w = void 0 !== b && void 0 !== b.call ? function(t, e) {
				return b.call(t, e)
			} : function(t, e) {
				return e in t && void 0 === t.constructor.prototype[e]
			};
		for (var x in Function.prototype.bind || (Function.prototype.bind = function(n) {
				var o = this;
				if ("function" != typeof o) throw new TypeError;
				var r = y.call(arguments, 1),
					s = function() {
						if (this instanceof s) {
							function t() {}
							t.prototype = o.prototype;
							var e = new t,
								i = o.apply(e, r.concat(y.call(arguments)));
							return Object(i) === i ? i : e
						}
						return o.apply(n, r.concat(y.call(arguments)))
					};
				return s
			}), g.touch = function() {
				var e;
				return "ontouchstart" in t || t.DocumentTouch && d instanceof DocumentTouch ? e = !0 : o(["@media (", i.join("touch-enabled),("), p, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(t) {
					e = 9 === t.offsetTop
				}), e
			}, g.cssanimations = function() {
				return n("animationName")
			}, g.csstransforms = function() {
				return !!n("transform")
			}, g.csstransforms3d = function() {
				var i = !!n("perspective");
				return i && "webkitPerspective" in h.style && o("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t, e) {
					i = 9 === t.offsetLeft && 3 === t.offsetHeight
				}), i
			}, g.csstransitions = function() {
				return n("transition")
			}, g) w(g, x) && (e = x.toLowerCase(), l[e] = g[x](), v.push((l[e] ? "" : "no-") + e));
		return l.addTest = function(t, e) {
				if ("object" == typeof t)
					for (var i in t) w(t, i) && l.addTest(i, t[i]);
				else {
					if (t = t.toLowerCase(), l[t] !== r) return l;
					e = "function" == typeof e ? e() : e, h.className += " " + (e ? "" : "no-") + t, l[t] = e
				}
				return l
			}, c.cssText = "",
			function(t, a) {
				function l() {
					var t = f.elements;
					return "string" == typeof t ? t.split(" ") : t
				}

				function c(t) {
					var e = p[t[n]];
					return e || (e = {}, s++, t[n] = s, p[s] = e), e
				}

				function u(t, e, i) {
					return e = e || a, h ? e.createElement(t) : !(n = (i = i || c(e)).cache[t] ? i.cache[t].cloneNode() : r.test(t) ? (i.cache[t] = i.createElem(t)).cloneNode() : i.createElem(t)).canHaveChildren || o.test(t) || n.tagUrn ? n : i.frag.appendChild(n);
					var n
				}

				function e(t) {
					var e, i, n, o, r, s = c(t = t || a);
					return !f.shivCSS || d || s.hasCSS || (s.hasCSS = (o = (n = t).createElement("p"), r = n.getElementsByTagName("head")[0] || n.documentElement, o.innerHTML = "x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>", !!r.insertBefore(o.lastChild, r.firstChild))), h || (e = t, (i = s).cache || (i.cache = {}, i.createElem = e.createElement, i.createFrag = e.createDocumentFragment, i.frag = i.createFrag()), e.createElement = function(t) {
						return f.shivMethods ? u(t, e, i) : i.createElem(t)
					}, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/[\w\-]+/g, function(t) {
						return i.createElem(t), i.frag.createElement(t), 'c("' + t + '")'
					}) + ");return n}")(f, i.frag)), t
				}
				var d, h, i = t.html5 || {},
					o = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
					r = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
					n = "_html5shiv",
					s = 0,
					p = {};
				! function() {
					try {
						var t = a.createElement("a");
						t.innerHTML = "<xyz></xyz>", d = "hidden" in t, h = 1 == t.childNodes.length || function() {
							a.createElement("a");
							var t = a.createDocumentFragment();
							return void 0 === t.cloneNode || void 0 === t.createDocumentFragment || void 0 === t.createElement
						}()
					} catch (t) {
						h = d = !0
					}
				}();
				var f = {
					elements: i.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
					version: "3.7.0",
					shivCSS: !1 !== i.shivCSS,
					supportsUnknownElements: h,
					shivMethods: !1 !== i.shivMethods,
					type: "default",
					shivDocument: e,
					createElement: u,
					createDocumentFragment: function(t, e) {
						if (t = t || a, h) return t.createDocumentFragment();
						for (var i = (e = e || c(t)).frag.cloneNode(), n = 0, o = l(), r = o.length; n < r; n++) i.createElement(o[n]);
						return i
					}
				};
				t.html5 = f, e(a)
			}(this, d), l._version = "2.8.3", l._prefixes = i, l._domPrefixes = m, l._cssomPrefixes = f, l.testProp = function(t) {
				return a([t])
			}, l.testAllProps = n, l.testStyles = o, l.prefixed = function(t, e, i) {
				return e ? n(t, e, i) : n(t, "pfx")
			}, h.className = h.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + v.join(" "), l
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

		function e(t, e, i, n, o) {
			return T = 0, e = e || "j", y(t) ? (s = "c" == e ? L : k, a = t, l = e, c = this.i++, u = i, d = n, h = (h = o) || D.errorTimeout, p = v.createElement(s), m = f = 0, g = {
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
		var i, n = v.documentElement,
			x = t.setTimeout,
			_ = v.getElementsByTagName("script")[0],
			o = {}.toString,
			C = [],
			T = 0,
			r = "MozAppearance" in n.style,
			E = r && !!v.createRange().compareNode,
			S = E ? n : _.parentNode,
			k = (n = t.opera && "[object Opera]" == o.call(t.opera), n = !!v.attachEvent && !n, r ? "object" : n ? "script" : "img"),
			L = n ? "script" : k,
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
				function u(t, e, i, n, o) {
					var r = function(t) {
							t = t.split("!");
							for (var e, i, n = l.length, o = t.pop(), r = t.length, s = (o = {
									url: o,
									origUrl: o,
									prefixes: t
								}, 0); s < r; s++) i = t[s].split("="), (e = c[i.shift()]) && (o = e(o, i));
							for (s = 0; s < n; s++) o = l[s](o);
							return o
						}(t),
						s = r.autoCallback;
					r.url.split(".").pop().split("?").shift(), r.bypass || (e = e && (d(e) ? e : e[t] || e[n] || e[t.split("/").pop().split("?")[0]]), r.instead ? r.instead(t, e, i, n, o) : (I[r.url] ? r.noexec = !0 : I[r.url] = 1, i.load(r.url, r.forceCSS || !r.forceJS && "css" == r.url.split(".").pop().split("?").shift() ? "c" : void 0, r.noexec, r.attrs, r.timeout), (d(e) || d(s)) && i.load(function() {
						a(), e && e(r.origUrl, o, n), s && s(r.origUrl, o, n), I[r.url] = 2
					})))
				}

				function e(t, e) {
					function i(i, t) {
						if (i) {
							if (y(i)) t || (a = function() {
								var t = [].slice.call(arguments);
								l.apply(this, t), c()
							}), u(i, a, e, 0, r);
							else if (Object(i) === i)
								for (o in n = function() {
										var t, e = 0;
										for (t in i) i.hasOwnProperty(t) && e++;
										return e
									}(), i) i.hasOwnProperty(o) && (t || --n || (d(a) ? a = function() {
									var t = [].slice.call(arguments);
									l.apply(this, t), c()
								} : a[o] = function(e) {
									return function() {
										var t = [].slice.call(arguments);
										e && e.apply(this, t), c()
									}
								}(l[o])), u(i[o], a, e, o, r))
						} else t || c()
					}
					var n, o, r = !!t.test,
						s = t.load || t.both,
						a = t.callback || h,
						l = a,
						c = t.complete || h;
					i(r ? t.yep : t.nope, !!s), s && i(s)
				}
				var i, n, o = this.yepnope.loader;
				if (y(t)) u(t, 0, o, 0);
				else if (s(t))
					for (i = 0; i < t.length; i++) y(n = t[i]) ? u(n, 0, o, 0) : s(n) ? D(n) : Object(n) === n && e(n, o);
				else Object(t) === t && e(t, o)
			};
		D.addPrefix = function(t, e) {
			c[t] = e
		}, D.addFilter = function(t) {
			l.push(t)
		}, D.errorTimeout = 1e4, null == v.readyState && v.addEventListener && (v.readyState = "loading", v.addEventListener("DOMContentLoaded", i = function() {
			v.removeEventListener("DOMContentLoaded", i, 0), v.readyState = "complete"
		}, 0)), t.yepnope = a(), t.yepnope.executeStack = w, t.yepnope.injectJs = function(t, e, i, n, o, r) {
			var s, a, l = v.createElement("script");
			for (a in n = n || D.errorTimeout, l.src = t, i) l.setAttribute(a, i[a]);
			e = r ? w : e || h, l.onreadystatechange = l.onload = function() {
				!s && b(l.readyState) && (s = 1, e(), l.onload = l.onreadystatechange = null)
			}, x(function() {
				s || e(s = 1)
			}, n), o ? l.onload() : _.parentNode.insertBefore(l, _)
		}, t.yepnope.injectCss = function(t, e, i, n, o, r) {
			var s;
			for (s in e = r ? w : e || h, (n = v.createElement("link")).href = t, n.rel = "stylesheet", n.type = "text/css", i) n.setAttribute(s, i[s]);
			o || (_.parentNode.insertBefore(n, _), x(e, 0))
		}
	}(this, document), Modernizr.load = function() {
		yepnope.apply(window, [].slice.call(arguments, 0))
	},
	function(l, i, o, r) {
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
			responsiveBaseElement: i,
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
					i = !this.settings.autoWidth,
					n = this.settings.rtl,
					o = {
						width: "auto",
						"margin-left": n ? e : "",
						"margin-right": n ? "" : e
					};
				i || this.$stage.children().css(o), t.css = o
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function(t) {
				var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
					i = null,
					n = this._items.length,
					o = !this.settings.autoWidth,
					r = [];
				for (t.items = {
						merge: !1,
						width: e
					}; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = 1 < i || t.items.merge, r[n] = o ? e * i : this._items[n].width();
				this._widths = r
			}
		}, {
			filter: ["items", "settings"],
			run: function() {
				var t = [],
					e = this._items,
					i = this.settings,
					n = Math.max(2 * i.items, 4),
					o = 2 * Math.ceil(e.length / 2),
					r = i.loop && e.length ? i.rewind ? n : Math.max(n, o) : 0,
					s = "",
					a = "";
				for (r /= 2; r--;) t.push(this.normalize(t.length / 2, !0)), s += e[t[t.length - 1]][0].outerHTML, t.push(this.normalize(e.length - 1 - (t.length - 1) / 2, !0)), a = e[t[t.length - 1]][0].outerHTML + a;
				this._clones = t, l(s).addClass("cloned").appendTo(this.$stage), l(a).addClass("cloned").prependTo(this.$stage)
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function() {
				for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, o = 0, r = []; ++i < e;) n = r[i - 1] || 0, o = this._widths[this.relative(i)] + this.settings.margin, r.push(n + o * t);
				this._coordinates = r
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function() {
				var t = this.settings.stagePadding,
					e = this._coordinates,
					i = {
						width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
						"padding-left": t || "",
						"padding-right": t || ""
					};
				this.$stage.css(i)
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function(t) {
				var e = this._coordinates.length,
					i = !this.settings.autoWidth,
					n = this.$stage.children();
				if (i && t.items.merge)
					for (; e--;) t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css);
				else i && (t.css.width = t.items.width, n.css(t.css))
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
				for (var t, e, i = this.settings.rtl ? 1 : -1, n = 2 * this.settings.stagePadding, o = this.coordinates(this.current()) + n, r = o + this.width() * i, s = [], a = 0, l = this._coordinates.length; a < l; a++) t = this._coordinates[a - 1] || 0, e = Math.abs(this._coordinates[a]) + n * i, (this.op(t, "<=", o) && this.op(t, ">", r) || this.op(e, "<", o) && this.op(e, ">", r)) && s.push(a);
				this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + s.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
			}
		}], c.prototype.initialize = function() {
			var t, e, i;
			this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading") && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : r, i = this.$element.children(e).width(), t.length && i <= 0 && this.preloadAutoWidthImages(t)), this.$element.addClass(this.options.loadingClass), this.$stage = l("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
		}, c.prototype.setup = function() {
			var e = this.viewport(),
				t = this.options.responsive,
				i = -1,
				n = null;
			t ? (l.each(t, function(t) {
				t <= e && i < t && (i = Number(t))
			}), "function" == typeof(n = l.extend({}, this.options, t[i])).stagePadding && (n.stagePadding = n.stagePadding()), delete n.responsive, n.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : n = l.extend({}, this.options), this.trigger("change", {
				property: {
					name: "settings",
					value: n
				}
			}), this._breakpoint = i, this.settings = n, this.invalidate("settings"), this.trigger("changed", {
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
			for (var t = 0, e = this._pipe.length, i = l.proxy(function(t) {
					return this[t]
				}, this._invalidated), n = {}; t < e;)(this._invalidated.all || 0 < l.grep(this._pipe[t].filter, i).length) && this._pipe[t].run(n), t++;
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
			i.clearTimeout(this.resizeTimer), this.resizeTimer = i.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
		}, c.prototype.onResize = function() {
			return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
		}, c.prototype.registerEventHandlers = function() {
			l.support.transition && this.$stage.on(l.support.transition.end + ".owl.core", l.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(i, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
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
				i = null,
				n = null,
				o = this.difference(this._drag.pointer, this.pointer(t)),
				r = this.difference(this._drag.stage.start, o);
			this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, r.x = ((r.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * o.x / 5 : 0, r.x = Math.max(Math.min(r.x, e + n), i + n)), this._drag.stage.current = r, this.animate(r.x))
		}, c.prototype.onDragEnd = function(t) {
			var e = this.difference(this._drag.pointer, this.pointer(t)),
				i = this._drag.stage.current,
				n = 0 < e.x ^ this.settings.rtl ? "left" : "right";
			l(o).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== e.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(i.x, 0 !== e.x ? n : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = n, (3 < Math.abs(e.x) || 300 < (new Date).getTime() - this._drag.time) && this._drag.target.one("click.owl.core", function() {
				return !1
			})), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
		}, c.prototype.closest = function(i, n) {
			var o = -1,
				r = this.width(),
				s = this.coordinates();
			return this.settings.freeDrag || l.each(s, l.proxy(function(t, e) {
				return "left" === n && e - 30 < i && i < e + 30 ? o = t : "right" === n && e - r - 30 < i && i < e - r + 30 ? o = t + 1 : this.op(i, "<", e) && this.op(i, ">", s[t + 1] || e - r) && (o = "left" === n ? t + 1 : t), -1 === o
			}, this)), this.settings.loop || (this.op(i, ">", s[this.minimum()]) ? o = i = this.minimum() : this.op(i, "<", s[this.maximum()]) && (o = i = this.maximum())), o
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
			var i = this._items.length,
				n = e ? 0 : this._clones.length;
			return !this.isNumeric(t) || i < 1 ? t = r : (t < 0 || i + n <= t) && (t = ((t - n / 2) % i + i) % i + n / 2), t
		}, c.prototype.relative = function(t) {
			return t -= this._clones.length / 2, this.normalize(t, !0)
		}, c.prototype.maximum = function(t) {
			var e, i, n, o = this.settings,
				r = this._coordinates.length;
			if (o.loop) r = this._clones.length / 2 + this._items.length - 1;
			else if (o.autoWidth || o.merge) {
				for (e = this._items.length, i = this._items[--e].width(), n = this.$element.width(); e-- && !(n < (i += this._items[e].width() + this.settings.margin)););
				r = e + 1
			} else r = o.center ? this._items.length - 1 : this._items.length - o.items;
			return t && (r -= this._clones.length / 2), Math.max(r, 0)
		}, c.prototype.minimum = function(t) {
			return t ? 0 : this._clones.length / 2
		}, c.prototype.items = function(t) {
			return t === r ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
		}, c.prototype.mergers = function(t) {
			return t === r ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
		}, c.prototype.clones = function(i) {
			function n(t) {
				return t % 2 == 0 ? o + t / 2 : e - (t + 1) / 2
			}
			var e = this._clones.length / 2,
				o = e + this._items.length;
			return i === r ? l.map(this._clones, function(t, e) {
				return n(e)
			}) : l.map(this._clones, function(t, e) {
				return t === i ? n(e) : null
			})
		}, c.prototype.speed = function(t) {
			return t !== r && (this._speed = t), this._speed
		}, c.prototype.coordinates = function(t) {
			var e, i = 1,
				n = t - 1;
			return t === r ? l.map(this._coordinates, l.proxy(function(t, e) {
				return this.coordinates(e)
			}, this)) : (this.settings.center ? (this.settings.rtl && (i = -1, n = t + 1), e = this._coordinates[t], e += (this.width() - e + (this._coordinates[n] || 0)) / 2 * i) : e = this._coordinates[n] || 0, e = Math.ceil(e))
		}, c.prototype.duration = function(t, e, i) {
			return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
		}, c.prototype.to = function(t, e) {
			var i = this.current(),
				n = null,
				o = t - this.relative(i),
				r = (0 < o) - (o < 0),
				s = this._items.length,
				a = this.minimum(),
				l = this.maximum();
			this.settings.loop ? (!this.settings.rewind && Math.abs(o) > s / 2 && (o += -1 * r * s), (n = (((t = i + o) - a) % s + s) % s + a) !== t && n - o <= l && 0 < n - o && (i = n - o, t = n, this.reset(i))) : t = this.settings.rewind ? (t % (l += 1) + l) % l : Math.max(a, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.$element.is(":visible") && this.update()
		}, c.prototype.next = function(t) {
			t = t || !1, this.to(this.relative(this.current()) + 1, t)
		}, c.prototype.prev = function(t) {
			t = t || !1, this.to(this.relative(this.current()) - 1, t)
		}, c.prototype.onTransitionEnd = function(t) {
			if (t !== r && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
			this.leave("animating"), this.trigger("translated")
		}, c.prototype.viewport = function() {
			var t;
			return this.options.responsiveBaseElement !== i ? t = l(this.options.responsiveBaseElement).width() : i.innerWidth ? t = i.innerWidth : o.documentElement && o.documentElement.clientWidth ? t = o.documentElement.clientWidth : console.warn("Can not detect viewport width."), t
		}, c.prototype.replace = function(t) {
			this.$stage.empty(), this._items = [], t = t && (t instanceof jQuery ? t : l(t)), this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)), t.filter(function() {
				return 1 === this.nodeType
			}).each(l.proxy(function(t, e) {
				e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(+e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
			}, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
		}, c.prototype.add = function(t, e) {
			var i = this.relative(this._current);
			e = e === r ? this._items.length : this.normalize(e, !0), t = t instanceof jQuery ? t : l(t), this.trigger("add", {
				content: t,
				position: e
			}), t = this.prepare(t), 0 === this._items.length || e === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[e - 1].after(t), this._items.push(t), this._mergers.push(+t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, +t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[i] && this.reset(this._items[i].index()), this.invalidate("items"), this.trigger("added", {
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
			for (var t in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), l(o).off(".owl.core"), !1 !== this.settings.responsive && (i.clearTimeout(this.resizeTimer), this.off(i, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[t].destroy();
			this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
		}, c.prototype.op = function(t, e, i) {
			var n = this.settings.rtl;
			switch (e) {
				case "<":
					return n ? i < t : t < i;
				case ">":
					return n ? t < i : i < t;
				case ">=":
					return n ? t <= i : i <= t;
				case "<=":
					return n ? i <= t : t <= i
			}
		}, c.prototype.on = function(t, e, i, n) {
			t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
		}, c.prototype.off = function(t, e, i, n) {
			t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
		}, c.prototype.trigger = function(t, e, i, n, o) {
			var r = {
					item: {
						count: this._items.length,
						index: this.current()
					}
				},
				s = l.camelCase(l.grep(["on", t, i], function(t) {
					return t
				}).join("-").toLowerCase()),
				a = l.Event([t, "owl", i || "carousel"].join(".").toLowerCase(), l.extend({
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
		}, c.prototype.register = function(i) {
			var e;
			i.type === c.Type.Event ? (l.event.special[i.name] || (l.event.special[i.name] = {}), l.event.special[i.name].owl || (e = l.event.special[i.name]._default, l.event.special[i.name]._default = function(t) {
				return !e || !e.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && -1 < t.namespace.indexOf("owl") : e.apply(this, arguments)
			}, l.event.special[i.name].owl = !0)) : i.type === c.Type.State && (this._states.tags[i.name] ? this._states.tags[i.name] = this._states.tags[i.name].concat(i.tags) : this._states.tags[i.name] = i.tags, this._states.tags[i.name] = l.grep(this._states.tags[i.name], l.proxy(function(t, e) {
				return l.inArray(t, this._states.tags[i.name]) === e
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
			return (t = (t = t.originalEvent || t || i.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (e.x = t.pageX, e.y = t.pageY) : (e.x = t.clientX, e.y = t.clientY), e
		}, c.prototype.isNumeric = function(t) {
			return !isNaN(parseFloat(t))
		}, c.prototype.difference = function(t, e) {
			return {
				x: t.x - e.x,
				y: t.y - e.y
			}
		}, l.fn.owlCarousel = function(e) {
			var n = Array.prototype.slice.call(arguments, 1);
			return this.each(function() {
				var t = l(this),
					i = t.data("owl.carousel");
				i || (i = new c(this, "object" == typeof e && e), t.data("owl.carousel", i), l.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(t, e) {
					i.register({
						type: c.Type.Event,
						name: e
					}), i.$element.on(e + ".owl.carousel.core", l.proxy(function(t) {
						t.namespace && t.relatedTarget !== this && (this.suppress([e]), i[e].apply(this, [].slice.call(arguments, 1)), this.release([e]))
					}, i))
				})), "string" == typeof e && "_" !== e.charAt(0) && i[e].apply(i, n)
			})
		}, l.fn.owlCarousel.Constructor = c
	}(window.Zepto || window.jQuery, window, document),
	function(e, i) {
		var n = function(t) {
			this._core = t, this._interval = null, this._visible = null, this._handlers = {
				"initialized.owl.carousel": e.proxy(function(t) {
					t.namespace && this._core.settings.autoRefresh && this.watch()
				}, this)
			}, this._core.options = e.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
		};
		n.Defaults = {
			autoRefresh: !0,
			autoRefreshInterval: 500
		}, n.prototype.watch = function() {
			this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = i.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
		}, n.prototype.refresh = function() {
			this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
		}, n.prototype.destroy = function() {
			var t, e;
			for (t in i.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
			for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
		}, e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = n
	}(window.Zepto || window.jQuery, window, document),
	function(a, r) {
		var e = function(t) {
			this._core = t, this._loaded = [], this._handlers = {
				"initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(t) {
					if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type))
						for (var e = this._core.settings, i = e.center && Math.ceil(e.items / 2) || e.items, n = e.center && -1 * i || 0, o = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + n, r = this._core.clones().length, s = a.proxy(function(t, e) {
								this.load(e)
							}, this); n++ < i;) this.load(r / 2 + this._core.relative(o)), r && a.each(this._core.clones(this._core.relative(o)), s), o++
				}, this)
			}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
		};
		e.Defaults = {
			lazyLoad: !1
		}, e.prototype.load = function(t) {
			var e = this._core.$stage.children().eq(t),
				i = e && e.find(".owl-lazy");
			!i || -1 < a.inArray(e.get(0), this._loaded) || (i.each(a.proxy(function(t, e) {
				var i, n = a(e),
					o = 1 < r.devicePixelRatio && n.attr("data-src-retina") || n.attr("data-src");
				this._core.trigger("load", {
					element: n,
					url: o
				}, "lazy"), n.is("img") ? n.one("load.owl.lazy", a.proxy(function() {
					n.css("opacity", 1), this._core.trigger("loaded", {
						element: n,
						url: o
					}, "lazy")
				}, this)).attr("src", o) : ((i = new Image).onload = a.proxy(function() {
					n.css({
						"background-image": 'url("' + o + '")',
						opacity: "1"
					}), this._core.trigger("loaded", {
						element: n,
						url: o
					}, "lazy")
				}, this), i.src = o)
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
				i = e + this._core.settings.items,
				n = this._core.$stage.children().toArray().slice(e, i),
				o = [];
			r.each(n, function(t, e) {
				o.push(r(e).height())
			}), t = Math.max.apply(null, o), this._core.$stage.parent().height(t).addClass(this._core.settings.autoHeightClass)
		}, e.prototype.destroy = function() {
			var t, e;
			for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
			for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
		}, r.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
	}(window.Zepto || window.jQuery, (window, document)),
	function(c, e) {
		var i = function(t) {
			this._core = t, this._videos = {}, this._playing = null, this._handlers = {
				"initialized.owl.carousel": c.proxy(function(t) {
					t.namespace && this._core.register({
						type: "state",
						name: "playing",
						tags: ["interacting"]
					})
				}, this),
				"resize.owl.carousel": c.proxy(function(t) {
					t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
				}, this),
				"refreshed.owl.carousel": c.proxy(function(t) {
					t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
				}, this),
				"changed.owl.carousel": c.proxy(function(t) {
					t.namespace && "position" === t.property.name && this._playing && this.stop()
				}, this),
				"prepared.owl.carousel": c.proxy(function(t) {
					var e;
					!t.namespace || (e = c(t.content).find(".owl-video")).length && (e.css("display", "none"), this.fetch(e, c(t.content)))
				}, this)
			}, this._core.options = c.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", c.proxy(function(t) {
				this.play(t)
			}, this))
		};
		i.Defaults = {
			video: !1,
			videoHeight: !1,
			videoWidth: !1
		}, i.prototype.fetch = function(t, e) {
			var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
				n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
				o = t.attr("data-width") || this._core.settings.videoWidth,
				r = t.attr("data-height") || this._core.settings.videoHeight,
				s = t.attr("href");
			if (!s) throw new Error("Missing video URL.");
			if (-1 < (n = s.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")) i = "youtube";
			else if (-1 < n[3].indexOf("vimeo")) i = "vimeo";
			else {
				if (!(-1 < n[3].indexOf("vzaar"))) throw new Error("Video URL not supported.");
				i = "vzaar"
			}
			n = n[6], this._videos[s] = {
				type: i,
				id: n,
				width: o,
				height: r
			}, e.attr("data-video", s), this.thumbnail(t, this._videos[s])
		}, i.prototype.thumbnail = function(e, t) {
			function i(t) {
				n = l.lazyLoad ? '<div class="owl-video-tn ' + a + '" ' + s + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(n), e.after('<div class="owl-video-play-icon"></div>')
			}
			var n, o = t.width && t.height ? 'style="width:' + t.width + "px;height:" + t.height + 'px;"' : "",
				r = e.find("img"),
				s = "src",
				a = "",
				l = this._core.settings;
			if (e.wrap('<div class="owl-video-wrapper"' + o + "></div>"), this._core.settings.lazyLoad && (s = "data-src", a = "owl-lazy"), r.length) return i(r.attr(s)), r.remove(), !1;
			"youtube" === t.type ? i("//img.youtube.com/vi/" + t.id + "/hqdefault.jpg") : "vimeo" === t.type ? c.ajax({
				type: "GET",
				url: "//vimeo.com/api/v2/video/" + t.id + ".json",
				jsonp: "callback",
				dataType: "jsonp",
				success: function(t) {
					i(t[0].thumbnail_large)
				}
			}) : "vzaar" === t.type && c.ajax({
				type: "GET",
				url: "//vzaar.com/api/videos/" + t.id + ".json",
				jsonp: "callback",
				dataType: "jsonp",
				success: function(t) {
					i(t.framegrab_url)
				}
			})
		}, i.prototype.stop = function() {
			this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
		}, i.prototype.play = function(t) {
			var e, i = c(t.target).closest("." + this._core.settings.itemClass),
				n = this._videos[i.attr("data-video")],
				o = n.width || "100%",
				r = n.height || this._core.$stage.height();
			this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), i = this._core.items(this._core.relative(i.index())), this._core.reset(i.index()), "youtube" === n.type ? e = '<iframe width="' + o + '" height="' + r + '" src="//www.youtube.com/embed/' + n.id + "?autoplay=1&rel=0&v=" + n.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === n.type ? e = '<iframe src="//player.vimeo.com/video/' + n.id + '?autoplay=1" width="' + o + '" height="' + r + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === n.type && (e = '<iframe frameborder="0"height="' + r + '"width="' + o + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + n.id + '/player?autoplay=true"></iframe>'), c('<div class="owl-video-frame">' + e + "</div>").insertAfter(i.find(".owl-video")), this._playing = i.addClass("owl-video-playing"))
		}, i.prototype.isInFullScreen = function() {
			var t = e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement;
			return t && c(t).parent().hasClass("owl-video-frame")
		}, i.prototype.destroy = function() {
			var t, e;
			for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
			for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
		}, c.fn.owlCarousel.Constructor.Plugins.Video = i
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
			var t, e, i, n, o, r;
			1 === this.core.settings.items && s.support.animation && s.support.transition && (this.core.speed(0), e = s.proxy(this.clear, this), i = this.core.$stage.children().eq(this.previous), n = this.core.$stage.children().eq(this.next), o = this.core.settings.animateIn, r = this.core.settings.animateOut, this.core.current() !== this.previous && (r && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(s.support.animation.end, e).css({
				left: t + "px"
			}).addClass("animated owl-animated-out").addClass(r)), o && n.one(s.support.animation.end, e).addClass("animated owl-animated-in").addClass(o)))
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
	function(i, n, o) {
		var e = function(t) {
			this._core = t, this._timeout = null, this._paused = !1, this._handlers = {
				"changed.owl.carousel": i.proxy(function(t) {
					t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
				}, this),
				"initialized.owl.carousel": i.proxy(function(t) {
					t.namespace && this._core.settings.autoplay && this.play()
				}, this),
				"play.owl.autoplay": i.proxy(function(t, e, i) {
					t.namespace && this.play(e, i)
				}, this),
				"stop.owl.autoplay": i.proxy(function(t) {
					t.namespace && this.stop()
				}, this),
				"mouseover.owl.autoplay": i.proxy(function() {
					this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
				}, this),
				"mouseleave.owl.autoplay": i.proxy(function() {
					this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
				}, this),
				"touchstart.owl.core": i.proxy(function() {
					this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
				}, this),
				"touchend.owl.core": i.proxy(function() {
					this._core.settings.autoplayHoverPause && this.play()
				}, this)
			}, this._core.$element.on(this._handlers), this._core.options = i.extend({}, e.Defaults, this._core.options)
		};
		e.Defaults = {
			autoplay: !1,
			autoplayTimeout: 5e3,
			autoplayHoverPause: !1,
			autoplaySpeed: !1
		}, e.prototype.play = function(t, e) {
			this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
		}, e.prototype._getNextTimeout = function(t, e) {
			return this._timeout && n.clearTimeout(this._timeout), n.setTimeout(i.proxy(function() {
				this._paused || this._core.is("busy") || this._core.is("interacting") || o.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
			}, this), t || this._core.settings.autoplayTimeout)
		}, e.prototype._setAutoPlayInterval = function() {
			this._timeout = this._getNextTimeout()
		}, e.prototype.stop = function() {
			this._core.is("rotating") && (n.clearTimeout(this._timeout), this._core.leave("rotating"))
		}, e.prototype.pause = function() {
			this._core.is("rotating") && (this._paused = !0)
		}, e.prototype.destroy = function() {
			var t, e;
			for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
			for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
		}, i.fn.owlCarousel.Constructor.Plugins.autoplay = e
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
			var t, i = this._core.settings;
			for (t in this._controls.$relative = (i.navContainer ? r(i.navContainer) : r("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = r("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", r.proxy(function(t) {
					this.prev(i.navSpeed)
				}, this)), this._controls.$next = r("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", r.proxy(function(t) {
					this.next(i.navSpeed)
				}, this)), i.dotsData || (this._templates = [r("<div>").addClass(i.dotClass).append(r("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? r(i.dotsContainer) : r("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", r.proxy(function(t) {
					var e = r(t.target).parent().is(this._controls.$absolute) ? r(t.target).index() : r(t.target).parent().index();
					t.preventDefault(), this.to(e, i.dotsSpeed)
				}, this)), this._overrides) this._core[t] = r.proxy(this[t], this)
		}, e.prototype.destroy = function() {
			var t, e, i, n;
			for (t in this._handlers) this.$element.off(t, this._handlers[t]);
			for (e in this._controls) this._controls[e].remove();
			for (n in this.overides) this._core[n] = this._overrides[n];
			for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
		}, e.prototype.update = function() {
			var t, e, i = this._core.clones().length / 2,
				n = i + this._core.items().length,
				o = this._core.maximum(!0),
				r = this._core.settings,
				s = r.center || r.autoWidth || r.dotsData ? 1 : r.dotsEach || r.items;
			if ("page" !== r.slideBy && (r.slideBy = Math.min(r.slideBy, r.items)), r.dots || "page" == r.slideBy)
				for (this._pages = [], t = i, e = 0; t < n; t++) {
					if (s <= e || 0 === e) {
						if (this._pages.push({
								start: Math.min(o, t - i),
								end: t - i + s - 1
							}), Math.min(o, t - i) === o) break;
						e = 0
					}
					e += this._core.mergers(this._core.relative(t))
				}
		}, e.prototype.draw = function() {
			var t, e = this._core.settings,
				i = this._core.items().length <= e.items,
				n = this._core.relative(this._core.current()),
				o = e.loop || e.rewind;
			this._controls.$relative.toggleClass("disabled", !e.nav || i), e.nav && (this._controls.$previous.toggleClass("disabled", !o && n <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && n >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !e.dots || i), e.dots && (t = this._pages.length - this._controls.$absolute.children().length, e.dotsData && 0 != t ? this._controls.$absolute.html(this._templates.join("")) : 0 < t ? this._controls.$absolute.append(new Array(1 + t).join(this._templates[0])) : t < 0 && this._controls.$absolute.children().slice(t).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(r.inArray(this.current(), this._pages)).addClass("active"))
		}, e.prototype.onTrigger = function(t) {
			var e = this._core.settings;
			t.page = {
				index: r.inArray(this.current(), this._pages),
				count: this._pages.length,
				size: e && (e.center || e.autoWidth || e.dotsData ? 1 : e.dotsEach || e.items)
			}
		}, e.prototype.current = function() {
			var i = this._core.relative(this._core.current());
			return r.grep(this._pages, r.proxy(function(t, e) {
				return t.start <= i && t.end >= i
			}, this)).pop()
		}, e.prototype.getPosition = function(t) {
			var e, i, n = this._core.settings;
			return "page" == n.slideBy ? (e = r.inArray(this.current(), this._pages), i = this._pages.length, t ? ++e : --e, e = this._pages[(e % i + i) % i].start) : (e = this._core.relative(this._core.current()), i = this._core.items().length, t ? e += n.slideBy : e -= n.slideBy), e
		}, e.prototype.next = function(t) {
			r.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
		}, e.prototype.prev = function(t) {
			r.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
		}, e.prototype.to = function(t, e, i) {
			var n;
			!i && this._pages.length ? (n = this._pages.length, r.proxy(this._overrides.to, this._core)(this._pages[(t % n + n) % n].start, e)) : r.proxy(this._overrides.to, this._core)(t, e)
		}, r.fn.owlCarousel.Constructor.Plugins.Navigation = e
	}(window.Zepto || window.jQuery, (window, document)),
	function(n, o) {
		"use strict";
		var e = function(t) {
			this._core = t, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
				"initialized.owl.carousel": n.proxy(function(t) {
					t.namespace && "URLHash" === this._core.settings.startPosition && n(o).trigger("hashchange.owl.navigation")
				}, this),
				"prepared.owl.carousel": n.proxy(function(t) {
					if (t.namespace) {
						var e = n(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
						if (!e) return;
						this._hashes[e] = t.content
					}
				}, this),
				"changed.owl.carousel": n.proxy(function(t) {
					if (t.namespace && "position" === t.property.name) {
						var i = this._core.items(this._core.relative(this._core.current())),
							e = n.map(this._hashes, function(t, e) {
								return t === i ? e : null
							}).join();
						if (!e || o.location.hash.slice(1) === e) return;
						o.location.hash = e
					}
				}, this)
			}, this._core.options = n.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), n(o).on("hashchange.owl.navigation", n.proxy(function(t) {
				var e = o.location.hash.substring(1),
					i = this._core.$stage.children(),
					n = this._hashes[e] && i.index(this._hashes[e]);
				void 0 !== n && n !== this._core.current() && this._core.to(this._core.relative(n), !1, !0)
			}, this))
		};
		e.Defaults = {
			URLhashListener: !1
		}, e.prototype.destroy = function() {
			var t, e;
			for (t in n(o).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(t, this._handlers[t]);
			for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
		}, n.fn.owlCarousel.Constructor.Plugins.Hash = e
	}(window.Zepto || window.jQuery, window, document),
	function(o, r) {
		function e(t, i) {
			var n = !1,
				e = t.charAt(0).toUpperCase() + t.slice(1);
			return o.each((t + " " + a.join(e + " ") + e).split(" "), function(t, e) {
				if (s[e] !== r) return n = !i || e, !1
			}), n
		}

		function t(t) {
			return e(t, !0)
		}
		var s = o("<support>").get(0).style,
			a = "Webkit Moz O ms".split(" "),
			i = {
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
			};
		e("transition") && (o.support.transition = new String(t("transition")), o.support.transition.end = i.transition.end[o.support.transition]), e("animation") && (o.support.animation = new String(t("animation")), o.support.animation.end = i.animation.end[o.support.animation]), e("transform") && (o.support.transform = new String(t("transform")), o.support.transform3d = !!e("perspective"))
	}(window.Zepto || window.jQuery, (window, void document)),
	function r(s, a, l) {
		function c(e, t) {
			if (!a[e]) {
				if (!s[e]) {
					var i = "function" == typeof require && require;
					if (!t && i) return i(e, !0);
					if (u) return u(e, !0);
					var n = new Error("Cannot find module '" + e + "'");
					throw n.code = "MODULE_NOT_FOUND", n
				}
				var o = a[e] = {
					exports: {}
				};
				s[e][0].call(o.exports, function(t) {
					return c(s[e][1][t] || t)
				}, o, o.exports, r, s, a, l)
			}
			return a[e].exports
		}
		for (var u = "function" == typeof require && require, t = 0; t < l.length; t++) c(l[t]);
		return c
	}({
		1: [function(t, e, i) {
			"use strict";

			function n(t) {
				t.fn.perfectScrollbar = function(i) {
					return this.each(function() {
						var t, e;
						"object" == typeof i || void 0 === i ? (t = i, s.get(this) || r.initialize(this, t)) : "update" === (e = i) ? r.update(this) : "destroy" === e && r.destroy(this)
					})
				}
			}
			var o, r = t("../main"),
				s = t("../plugin/instances");
			"function" == typeof define && define.amd ? define(["jquery"], n) : void 0 !== (o = window.jQuery ? window.jQuery : window.$) && n(o), e.exports = n
		}, {
			"../main": 6,
			"../plugin/instances": 17
		}],
		2: [function(t, e, i) {
			"use strict";
			var n = {
				create: function(t, e) {
					var i = document.createElement(t);
					return i.className = e, i
				},
				appendTo: function(t, e) {
					return e.appendChild(t), t
				},
				css: function(t, e, i) {
					return "object" == typeof e ? function(t, e) {
						for (var i in e) {
							var n = e[i];
							"number" == typeof n && (n = n.toString() + "px"), t.style[i] = n
						}
						return t
					}(t, e) : void 0 === i ? (s = e, window.getComputedStyle(t)[s]) : (n = t, o = e, "number" == typeof(r = i) && (r = r.toString() + "px"), n.style[o] = r, n);
					var n, o, r, s
				},
				matches: function(t, e) {
					return void 0 !== t.matches ? t.matches(e) : t.msMatchesSelector(e)
				},
				remove: function(t) {
					void 0 !== t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
				},
				queryChildren: function(t, e) {
					return Array.prototype.filter.call(t.childNodes, function(t) {
						return n.matches(t, e)
					})
				}
			};
			e.exports = n
		}, {}],
		3: [function(t, e, i) {
			"use strict";

			function n(t) {
				this.element = t, this.events = {}
			}

			function o() {
				this.eventElements = []
			}
			n.prototype.bind = function(t, e) {
				void 0 === this.events[t] && (this.events[t] = []), this.events[t].push(e), this.element.addEventListener(t, e, !1)
			}, n.prototype.unbind = function(e, i) {
				var n = void 0 !== i;
				this.events[e] = this.events[e].filter(function(t) {
					return !(!n || t === i) || (this.element.removeEventListener(e, t, !1), !1)
				}, this)
			}, n.prototype.unbindAll = function() {
				for (var t in this.events) this.unbind(t)
			}, o.prototype.eventElement = function(e) {
				var t = this.eventElements.filter(function(t) {
					return t.element === e
				})[0];
				return void 0 === t && (t = new n(e), this.eventElements.push(t)), t
			}, o.prototype.bind = function(t, e, i) {
				this.eventElement(t).bind(e, i)
			}, o.prototype.unbind = function(t, e, i) {
				this.eventElement(t).unbind(e, i)
			}, o.prototype.unbindAll = function() {
				for (var t = 0; t < this.eventElements.length; t++) this.eventElements[t].unbindAll()
			}, o.prototype.once = function(t, e, i) {
				var n = this.eventElement(t),
					o = function(t) {
						n.unbind(e, o), i(t)
					};
				n.bind(e, o)
			}, e.exports = o
		}, {}],
		4: [function(t, e, i) {
			"use strict";

			function n() {
				return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
			}
			e.exports = function() {
				return n() + n() + "-" + n() + "-" + n() + "-" + n() + "-" + n() + n() + n()
			}
		}, {}],
		5: [function(t, e, i) {
			"use strict";

			function o(t) {
				return ["ps--in-scrolling"].concat(void 0 === t ? ["ps--x", "ps--y"] : ["ps--" + t])
			}
			var n = t("./dom"),
				r = i.toInt = function(t) {
					return parseInt(t, 10) || 0
				};
			i.isEditable = function(t) {
				return n.matches(t, "input,[contenteditable]") || n.matches(t, "select,[contenteditable]") || n.matches(t, "textarea,[contenteditable]") || n.matches(t, "button,[contenteditable]")
			}, i.removePsClasses = function(t) {
				for (var e = 0; e < t.classList.length; e++) {
					var i = t.classList[e];
					0 === i.indexOf("ps-") && t.classList.remove(i)
				}
			}, i.outerWidth = function(t) {
				return r(n.css(t, "width")) + r(n.css(t, "paddingLeft")) + r(n.css(t, "paddingRight")) + r(n.css(t, "borderLeftWidth")) + r(n.css(t, "borderRightWidth"))
			}, i.startScrolling = function(t, e) {
				for (var i = o(e), n = 0; n < i.length; n++) t.classList.add(i[n])
			}, i.stopScrolling = function(t, e) {
				for (var i = o(e), n = 0; n < i.length; n++) t.classList.remove(i[n])
			}, i.env = {
				isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
				supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
				supportsIePointer: "undefined" != typeof window && null !== window.navigator.msMaxTouchPoints
			}
		}, {
			"./dom": 2
		}],
		6: [function(t, e, i) {
			"use strict";
			var n = t("./plugin/destroy"),
				o = t("./plugin/initialize"),
				r = t("./plugin/update");
			e.exports = {
				initialize: o,
				update: r,
				destroy: n
			}
		}, {
			"./plugin/destroy": 8,
			"./plugin/initialize": 16,
			"./plugin/update": 20
		}],
		7: [function(t, e, i) {
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
		8: [function(t, e, i) {
			"use strict";
			var n = t("../lib/helper"),
				o = t("../lib/dom"),
				r = t("./instances");
			e.exports = function(t) {
				var e = r.get(t);
				e && (e.event.unbindAll(), o.remove(e.scrollbarX), o.remove(e.scrollbarY), o.remove(e.scrollbarXRail), o.remove(e.scrollbarYRail), n.removePsClasses(t), r.remove(t))
			}
		}, {
			"../lib/dom": 2,
			"../lib/helper": 5,
			"./instances": 17
		}],
		9: [function(t, e, i) {
			"use strict";
			var r = t("../instances"),
				s = t("../update-geometry"),
				a = t("../update-scroll");
			e.exports = function(t) {
				function i(t) {
					return t.getBoundingClientRect()
				}

				function e(t) {
					t.stopPropagation()
				}
				var n, o;
				n = t, (o = r.get(t)).event.bind(o.scrollbarY, "click", e), o.event.bind(o.scrollbarYRail, "click", function(t) {
					var e = t.pageY - window.pageYOffset - i(o.scrollbarYRail).top > o.scrollbarYTop ? 1 : -1;
					a(n, "top", n.scrollTop + e * o.containerHeight), s(n), t.stopPropagation()
				}), o.event.bind(o.scrollbarX, "click", e), o.event.bind(o.scrollbarXRail, "click", function(t) {
					var e = t.pageX - window.pageXOffset - i(o.scrollbarXRail).left > o.scrollbarXLeft ? 1 : -1;
					a(n, "left", n.scrollLeft + e * o.containerWidth), s(n), t.stopPropagation()
				})
			}
		}, {
			"../instances": 17,
			"../update-geometry": 18,
			"../update-scroll": 19
		}],
		10: [function(t, e, i) {
			"use strict";
			var f = t("../../lib/helper"),
				m = t("../../lib/dom"),
				g = t("../instances"),
				v = t("../update-geometry"),
				y = t("../update-scroll");
			e.exports = function(t) {
				var o, r, s, e, a, l, c, i, n = g.get(t);

				function u(t) {
					(function(t) {
						var e = s + t * r.railYRatio,
							i = Math.max(0, r.scrollbarYRail.getBoundingClientRect().top) + r.railYRatio * (r.railYHeight - r.scrollbarYHeight);
						r.scrollbarYTop = e < 0 ? 0 : i < e ? i : e;
						var n = f.toInt(r.scrollbarYTop * (r.contentHeight - r.containerHeight) / (r.containerHeight - r.railYRatio * r.scrollbarYHeight));
						y(o, "top", n)
					})(t.pageY - e), v(o), t.stopPropagation(), t.preventDefault()
				}

				function d() {
					f.stopScrolling(o, "y"), r.event.unbind(r.ownerDocument, "mousemove", u)
				}

				function h(t) {
					(function(t) {
						var e = c + t * l.railXRatio,
							i = Math.max(0, l.scrollbarXRail.getBoundingClientRect().left) + l.railXRatio * (l.railXWidth - l.scrollbarXWidth);
						l.scrollbarXLeft = e < 0 ? 0 : i < e ? i : e;
						var n = f.toInt(l.scrollbarXLeft * (l.contentWidth - l.containerWidth) / (l.containerWidth - l.railXRatio * l.scrollbarXWidth)) - l.negativeScrollAdjustment;
						y(a, "left", n)
					})(t.pageX - i), v(a), t.stopPropagation(), t.preventDefault()
				}

				function p() {
					f.stopScrolling(a, "x"), l.event.unbind(l.ownerDocument, "mousemove", h)
				}
				a = t, i = c = null, (l = n).event.bind(l.scrollbarX, "mousedown", function(t) {
					i = t.pageX, c = f.toInt(m.css(l.scrollbarX, "left")) * l.railXRatio, f.startScrolling(a, "x"), l.event.bind(l.ownerDocument, "mousemove", h), l.event.once(l.ownerDocument, "mouseup", p), t.stopPropagation(), t.preventDefault()
				}), o = t, e = s = null, (r = n).event.bind(r.scrollbarY, "mousedown", function(t) {
					e = t.pageY, s = f.toInt(m.css(r.scrollbarY, "top")) * r.railYRatio, f.startScrolling(o, "y"), r.event.bind(r.ownerDocument, "mousemove", u), r.event.once(r.ownerDocument, "mouseup", d), t.stopPropagation(), t.preventDefault()
				})
			}
		}, {
			"../../lib/dom": 2,
			"../../lib/helper": 5,
			"../instances": 17,
			"../update-geometry": 18,
			"../update-scroll": 19
		}],
		11: [function(t, e, i) {
			"use strict";
			var l = t("../../lib/helper"),
				c = t("../../lib/dom"),
				n = t("../instances"),
				u = t("../update-geometry"),
				d = t("../update-scroll");
			e.exports = function(t) {
				var r = t,
					s = n.get(t),
					a = !1;
				s.event.bind(r, "mouseenter", function() {
					a = !0
				}), s.event.bind(r, "mouseleave", function() {
					a = !1
				}), s.event.bind(s.ownerDocument, "keydown", function(t) {
					if (!(t.isDefaultPrevented && t.isDefaultPrevented() || t.defaultPrevented)) {
						var e = c.matches(s.scrollbarX, ":focus") || c.matches(s.scrollbarY, ":focus");
						if (a || e) {
							var i = document.activeElement ? document.activeElement : s.ownerDocument.activeElement;
							if (i) {
								if ("IFRAME" === i.tagName) i = i.contentDocument.activeElement;
								else
									for (; i.shadowRoot;) i = i.shadowRoot.activeElement;
								if (l.isEditable(i)) return
							}
							var n = 0,
								o = 0;
							switch (t.which) {
								case 37:
									n = t.metaKey ? -s.contentWidth : t.altKey ? -s.containerWidth : -30;
									break;
								case 38:
									o = t.metaKey ? s.contentHeight : t.altKey ? s.containerHeight : 30;
									break;
								case 39:
									n = t.metaKey ? s.contentWidth : t.altKey ? s.containerWidth : 30;
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
							d(r, "top", r.scrollTop - o), d(r, "left", r.scrollLeft + n), u(r),
								function() {
									var t = r.scrollTop;
									if (0 === n) {
										if (!s.scrollbarYActive) return;
										if (0 === t && 0 < o || t >= s.contentHeight - s.containerHeight && o < 0) return !s.settings.wheelPropagation
									}
									var e = r.scrollLeft;
									if (0 === o) {
										if (!s.scrollbarXActive) return;
										if (0 === e && n < 0 || e >= s.contentWidth - s.containerWidth && 0 < n) return !s.settings.wheelPropagation
									}
									return 1
								}() && t.preventDefault()
						}
					}
				})
			}
		}, {
			"../../lib/dom": 2,
			"../../lib/helper": 5,
			"../instances": 17,
			"../update-geometry": 18,
			"../update-scroll": 19
		}],
		12: [function(t, e, i) {
			"use strict";
			var n = t("../instances"),
				c = t("../update-geometry"),
				u = t("../update-scroll");
			e.exports = function(t) {
				function e(t) {
					var e, i, n = (e = t.deltaX, i = -1 * t.deltaY, void 0 !== e && void 0 !== i || (e = -1 * t.wheelDeltaX / 6, i = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, i *= 10), e != e && i != i && (e = 0, i = t.wheelDelta), t.shiftKey ? [-i, -e] : [e, i]),
						o = n[0],
						r = n[1];
					! function(t, e) {
						var i = s.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
						if (i) {
							var n = window.getComputedStyle(i);
							if (![n.overflow, n.overflowX, n.overflowY].join("").match(/(scroll|auto)/)) return;
							var o = i.scrollHeight - i.clientHeight;
							if (0 < o && !(0 === i.scrollTop && 0 < e || i.scrollTop === o && e < 0)) return 1;
							var r = i.scrollLeft - i.clientWidth;
							if (0 < r && !(0 === i.scrollLeft && t < 0 || i.scrollLeft === r && 0 < t)) return 1
						}
					}(o, r) && (l = !1, a.settings.useBothWheelAxes ? a.scrollbarYActive && !a.scrollbarXActive ? (u(s, "top", r ? s.scrollTop - r * a.settings.wheelSpeed : s.scrollTop + o * a.settings.wheelSpeed), l = !0) : a.scrollbarXActive && !a.scrollbarYActive && (u(s, "left", o ? s.scrollLeft + o * a.settings.wheelSpeed : s.scrollLeft - r * a.settings.wheelSpeed), l = !0) : (u(s, "top", s.scrollTop - r * a.settings.wheelSpeed), u(s, "left", s.scrollLeft + o * a.settings.wheelSpeed)), c(s), (l = l || function() {
						var t = s.scrollTop;
						if (0 === o) {
							if (!a.scrollbarYActive) return !1;
							if (0 === t && 0 < r || t >= a.contentHeight - a.containerHeight && r < 0) return !a.settings.wheelPropagation
						}
						var e = s.scrollLeft;
						if (0 === r) {
							if (!a.scrollbarXActive) return !1;
							if (0 === e && o < 0 || e >= a.contentWidth - a.containerWidth && 0 < o) return !a.settings.wheelPropagation
						}
						return !0
					}()) && (t.stopPropagation(), t.preventDefault()))
				}
				var s, a, l;
				s = t, a = n.get(t), l = !1, void 0 !== window.onwheel ? a.event.bind(s, "wheel", e) : void 0 !== window.onmousewheel && a.event.bind(s, "mousewheel", e)
			}
		}, {
			"../instances": 17,
			"../update-geometry": 18,
			"../update-scroll": 19
		}],
		13: [function(t, e, i) {
			"use strict";
			var n = t("../instances"),
				o = t("../update-geometry");
			e.exports = function(t) {
				var e = n.get(t),
					i = t;
				e.event.bind(i, "scroll", function() {
					o(i)
				})
			}
		}, {
			"../instances": 17,
			"../update-geometry": 18
		}],
		14: [function(t, e, i) {
			"use strict";
			var h = t("../../lib/helper"),
				p = t("../instances"),
				f = t("../update-geometry"),
				m = t("../update-scroll");
			e.exports = function(t) {
				function a() {
					c && (clearInterval(c), c = null), h.stopScrolling(l)
				}
				var l, e, c, u, d;
				l = t, e = p.get(t), c = null, d = !(u = {
					top: 0,
					left: 0
				}), e.event.bind(e.ownerDocument, "selectionchange", function() {
					var t;
					l.contains(0 === (t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "").toString().length ? null : t.getRangeAt(0).commonAncestorContainer) ? d = !0 : (d = !1, a())
				}), e.event.bind(window, "mouseup", function() {
					d && (d = !1, a())
				}), e.event.bind(window, "keyup", function() {
					d && (d = !1, a())
				}), e.event.bind(window, "mousemove", function(t) {
					var e, i, n, o, r, s;
					d && (e = t.pageX, i = t.pageY, n = l.offsetLeft, o = l.offsetLeft + l.offsetWidth, r = l.offsetTop, s = l.offsetTop + l.offsetHeight, e < n + 3 ? (u.left = -5, h.startScrolling(l, "x")) : o - 3 < e ? (u.left = 5, h.startScrolling(l, "x")) : u.left = 0, i < r + 3 ? (u.top = r + 3 - i < 5 ? -5 : -20, h.startScrolling(l, "y")) : s - 3 < i ? (u.top = i - s + 3 < 5 ? 5 : 20, h.startScrolling(l, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? a() : c = c || setInterval(function() {
						return p.get(l) ? (m(l, "top", l.scrollTop + u.top), m(l, "left", l.scrollLeft + u.left), void f(l)) : void clearInterval(c)
					}, 50))
				})
			}
		}, {
			"../../lib/helper": 5,
			"../instances": 17,
			"../update-geometry": 18,
			"../update-scroll": 19
		}],
		15: [function(t, e, i) {
			"use strict";
			var b = t("../../lib/helper"),
				w = t("../instances"),
				x = t("../update-geometry"),
				_ = t("../update-scroll");
			e.exports = function(t) {
				function a(t, e) {
					_(d, "top", d.scrollTop - e), _(d, "left", d.scrollLeft - t), x(d)
				}

				function e() {
					v = !0
				}

				function i() {
					v = !1
				}

				function l(t) {
					return t.targetTouches ? t.targetTouches[0] : t
				}

				function c(t) {
					return (!t.pointerType || "pen" !== t.pointerType || 0 !== t.buttons) && (t.targetTouches && 1 === t.targetTouches.length || t.pointerType && "mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE)
				}

				function u(t) {
					var e;
					c(t) && (y = !0, e = l(t), p.pageX = e.pageX, p.pageY = e.pageY, f = (new Date).getTime(), null !== g && clearInterval(g), t.stopPropagation())
				}

				function n(t) {
					var e, i, n, o, r, s;
					!y && h.settings.swipePropagation && u(t), !v && y && c(t) && (a(n = (i = {
						pageX: (e = l(t)).pageX,
						pageY: e.pageY
					}).pageX - p.pageX, o = i.pageY - p.pageY), p = i, 0 < (s = (r = (new Date).getTime()) - f) && (m.x = n / s, m.y = o / s, f = r), function(t, e) {
						var i = d.scrollTop,
							n = d.scrollLeft,
							o = Math.abs(t),
							r = Math.abs(e);
						if (o < r) {
							if (e < 0 && i === h.contentHeight - h.containerHeight || 0 < e && 0 === i) return !h.settings.swipePropagation
						} else if (r < o && (t < 0 && n === h.contentWidth - h.containerWidth || 0 < t && 0 === n)) return !h.settings.swipePropagation;
						return 1
					}(n, o) && (t.stopPropagation(), t.preventDefault()))
				}

				function o() {
					!v && y && (y = !1, h.settings.swipeEasing && (clearInterval(g), g = setInterval(function() {
						return !w.get(d) || !m.x && !m.y || Math.abs(m.x) < .01 && Math.abs(m.y) < .01 ? void clearInterval(g) : (a(30 * m.x, 30 * m.y), m.x *= .8, void(m.y *= .8))
					}, 10)))
				}
				var d, h, r, s, p, f, m, g, v, y;
				(b.env.supportsTouch || b.env.supportsIePointer) && (d = t, h = w.get(t), r = b.env.supportsTouch, s = b.env.supportsIePointer, p = {}, f = 0, g = null, y = v = !(m = {}), r ? (h.event.bind(window, "touchstart", e), h.event.bind(window, "touchend", i), h.event.bind(d, "touchstart", u), h.event.bind(d, "touchmove", n), h.event.bind(d, "touchend", o)) : s && (window.PointerEvent ? (h.event.bind(window, "pointerdown", e), h.event.bind(window, "pointerup", i), h.event.bind(d, "pointerdown", u), h.event.bind(d, "pointermove", n), h.event.bind(d, "pointerup", o)) : window.MSPointerEvent && (h.event.bind(window, "MSPointerDown", e), h.event.bind(window, "MSPointerUp", i), h.event.bind(d, "MSPointerDown", u), h.event.bind(d, "MSPointerMove", n), h.event.bind(d, "MSPointerUp", o))))
			}
		}, {
			"../../lib/helper": 5,
			"../instances": 17,
			"../update-geometry": 18,
			"../update-scroll": 19
		}],
		16: [function(t, e, i) {
			"use strict";
			var n = t("./instances"),
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
				var i = n.add(e, "object" == typeof t ? t : {});
				e.classList.add("ps--theme_" + i.settings.theme), i.settings.handlers.forEach(function(t) {
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
		17: [function(t, e, i) {
			"use strict";

			function n(t, e) {
				function i() {
					t.classList.add("ps--focus")
				}

				function n() {
					t.classList.remove("ps--focus")
				}
				var o, r, s = this;
				for (var a in s.settings = c(), e) s.settings[a] = e[a];
				s.containerWidth = null, s.containerHeight = null, s.contentWidth = null, s.contentHeight = null, s.isRtl = "rtl" === u.css(t, "direction"), s.isNegativeScroll = (r = t.scrollLeft, t.scrollLeft = -1, o = t.scrollLeft < 0, t.scrollLeft = r, o), s.negativeScrollAdjustment = s.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, s.event = new d, s.ownerDocument = t.ownerDocument || document, s.scrollbarXRail = u.appendTo(u.create("div", "ps__scrollbar-x-rail"), t), s.scrollbarX = u.appendTo(u.create("div", "ps__scrollbar-x"), s.scrollbarXRail), s.scrollbarX.setAttribute("tabindex", 0), s.event.bind(s.scrollbarX, "focus", i), s.event.bind(s.scrollbarX, "blur", n), s.scrollbarXActive = null, s.scrollbarXWidth = null, s.scrollbarXLeft = null, s.scrollbarXBottom = l.toInt(u.css(s.scrollbarXRail, "bottom")), s.isScrollbarXUsingBottom = s.scrollbarXBottom == s.scrollbarXBottom, s.scrollbarXTop = s.isScrollbarXUsingBottom ? null : l.toInt(u.css(s.scrollbarXRail, "top")), s.railBorderXWidth = l.toInt(u.css(s.scrollbarXRail, "borderLeftWidth")) + l.toInt(u.css(s.scrollbarXRail, "borderRightWidth")), u.css(s.scrollbarXRail, "display", "block"), s.railXMarginWidth = l.toInt(u.css(s.scrollbarXRail, "marginLeft")) + l.toInt(u.css(s.scrollbarXRail, "marginRight")), u.css(s.scrollbarXRail, "display", ""), s.railXWidth = null, s.railXRatio = null, s.scrollbarYRail = u.appendTo(u.create("div", "ps__scrollbar-y-rail"), t), s.scrollbarY = u.appendTo(u.create("div", "ps__scrollbar-y"), s.scrollbarYRail), s.scrollbarY.setAttribute("tabindex", 0), s.event.bind(s.scrollbarY, "focus", i), s.event.bind(s.scrollbarY, "blur", n), s.scrollbarYActive = null, s.scrollbarYHeight = null, s.scrollbarYTop = null, s.scrollbarYRight = l.toInt(u.css(s.scrollbarYRail, "right")), s.isScrollbarYUsingRight = s.scrollbarYRight == s.scrollbarYRight, s.scrollbarYLeft = s.isScrollbarYUsingRight ? null : l.toInt(u.css(s.scrollbarYRail, "left")), s.scrollbarYOuterWidth = s.isRtl ? l.outerWidth(s.scrollbarY) : null, s.railBorderYWidth = l.toInt(u.css(s.scrollbarYRail, "borderTopWidth")) + l.toInt(u.css(s.scrollbarYRail, "borderBottomWidth")), u.css(s.scrollbarYRail, "display", "block"), s.railYMarginHeight = l.toInt(u.css(s.scrollbarYRail, "marginTop")) + l.toInt(u.css(s.scrollbarYRail, "marginBottom")), u.css(s.scrollbarYRail, "display", ""), s.railYHeight = null, s.railYRatio = null
			}

			function o(t) {
				return t.getAttribute("data-ps-id")
			}
			var l = t("../lib/helper"),
				c = t("./default-setting"),
				u = t("../lib/dom"),
				d = t("../lib/event-manager"),
				r = t("../lib/guid"),
				s = {};
			i.add = function(t, e) {
				var i = r();
				return t.setAttribute("data-ps-id", i), s[i] = new n(t, e), s[i]
			}, i.remove = function(t) {
				delete s[o(t)], t.removeAttribute("data-ps-id")
			}, i.get = function(t) {
				return s[o(t)]
			}
		}, {
			"../lib/dom": 2,
			"../lib/event-manager": 3,
			"../lib/guid": 4,
			"../lib/helper": 5,
			"./default-setting": 7
		}],
		18: [function(t, e, i) {
			"use strict";

			function n(t, e) {
				return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e
			}
			var o = t("../lib/helper"),
				r = t("../lib/dom"),
				s = t("./instances"),
				a = t("./update-scroll");
			e.exports = function(t) {
				var e, i = s.get(t);
				i.containerWidth = t.clientWidth, i.containerHeight = t.clientHeight, i.contentWidth = t.scrollWidth, i.contentHeight = t.scrollHeight, t.contains(i.scrollbarXRail) || (0 < (e = r.queryChildren(t, ".ps__scrollbar-x-rail")).length && e.forEach(function(t) {
						r.remove(t)
					}), r.appendTo(i.scrollbarXRail, t)), t.contains(i.scrollbarYRail) || (0 < (e = r.queryChildren(t, ".ps__scrollbar-y-rail")).length && e.forEach(function(t) {
						r.remove(t)
					}), r.appendTo(i.scrollbarYRail, t)), !i.settings.suppressScrollX && i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth ? (i.scrollbarXActive = !0, i.railXWidth = i.containerWidth - i.railXMarginWidth, i.railXRatio = i.containerWidth / i.railXWidth, i.scrollbarXWidth = n(i, o.toInt(i.railXWidth * i.containerWidth / i.contentWidth)), i.scrollbarXLeft = o.toInt((i.negativeScrollAdjustment + t.scrollLeft) * (i.railXWidth - i.scrollbarXWidth) / (i.contentWidth - i.containerWidth))) : i.scrollbarXActive = !1, !i.settings.suppressScrollY && i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight ? (i.scrollbarYActive = !0, i.railYHeight = i.containerHeight - i.railYMarginHeight, i.railYRatio = i.containerHeight / i.railYHeight, i.scrollbarYHeight = n(i, o.toInt(i.railYHeight * i.containerHeight / i.contentHeight)), i.scrollbarYTop = o.toInt(t.scrollTop * (i.railYHeight - i.scrollbarYHeight) / (i.contentHeight - i.containerHeight))) : i.scrollbarYActive = !1, i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth && (i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth), i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight && (i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight),
					function(t, e) {
						var i = {
							width: e.railXWidth
						};
						e.isRtl ? i.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : i.left = t.scrollLeft, e.isScrollbarXUsingBottom ? i.bottom = e.scrollbarXBottom - t.scrollTop : i.top = e.scrollbarXTop + t.scrollTop, r.css(e.scrollbarXRail, i);
						var n = {
							top: t.scrollTop,
							height: e.railYHeight
						};
						e.isScrollbarYUsingRight ? e.isRtl ? n.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : n.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : n.left = e.scrollbarYLeft + t.scrollLeft, r.css(e.scrollbarYRail, n), r.css(e.scrollbarX, {
							left: e.scrollbarXLeft,
							width: e.scrollbarXWidth - e.railBorderXWidth
						}), r.css(e.scrollbarY, {
							top: e.scrollbarYTop,
							height: e.scrollbarYHeight - e.railBorderYWidth
						})
					}(t, i), i.scrollbarXActive ? t.classList.add("ps--active-x") : (t.classList.remove("ps--active-x"), i.scrollbarXWidth = 0, i.scrollbarXLeft = 0, a(t, "left", 0)), i.scrollbarYActive ? t.classList.add("ps--active-y") : (t.classList.remove("ps--active-y"), i.scrollbarYHeight = 0, i.scrollbarYTop = 0, a(t, "top", 0))
			}
		}, {
			"../lib/dom": 2,
			"../lib/helper": 5,
			"./instances": 17,
			"./update-scroll": 19
		}],
		19: [function(t, e, i) {
			"use strict";

			function o(t) {
				var e = document.createEvent("Event");
				return e.initEvent(t, !0, !0), e
			}
			var r = t("./instances");
			e.exports = function(t, e, i) {
				if (void 0 === t) throw "You must provide an element to the update-scroll function";
				if (void 0 === e) throw "You must provide an axis to the update-scroll function";
				if (void 0 === i) throw "You must provide a value to the update-scroll function";
				"top" === e && i <= 0 && (t.scrollTop = i = 0, t.dispatchEvent(o("ps-y-reach-start"))), "left" === e && i <= 0 && (t.scrollLeft = i = 0, t.dispatchEvent(o("ps-x-reach-start")));
				var n = r.get(t);
				"top" === e && i >= n.contentHeight - n.containerHeight && ((i = n.contentHeight - n.containerHeight) - t.scrollTop <= 2 ? i = t.scrollTop : t.scrollTop = i, t.dispatchEvent(o("ps-y-reach-end"))), "left" === e && i >= n.contentWidth - n.containerWidth && ((i = n.contentWidth - n.containerWidth) - t.scrollLeft <= 2 ? i = t.scrollLeft : t.scrollLeft = i, t.dispatchEvent(o("ps-x-reach-end"))), void 0 === n.lastTop && (n.lastTop = t.scrollTop), void 0 === n.lastLeft && (n.lastLeft = t.scrollLeft), "top" === e && i < n.lastTop && t.dispatchEvent(o("ps-scroll-up")), "top" === e && i > n.lastTop && t.dispatchEvent(o("ps-scroll-down")), "left" === e && i < n.lastLeft && t.dispatchEvent(o("ps-scroll-left")), "left" === e && i > n.lastLeft && t.dispatchEvent(o("ps-scroll-right")), "top" === e && i !== n.lastTop && (t.scrollTop = n.lastTop = i, t.dispatchEvent(o("ps-scroll-y"))), "left" === e && i !== n.lastLeft && (t.scrollLeft = n.lastLeft = i, t.dispatchEvent(o("ps-scroll-x")))
			}
		}, {
			"./instances": 17
		}],
		20: [function(t, e, i) {
			"use strict";
			var n = t("../lib/helper"),
				o = t("../lib/dom"),
				r = t("./instances"),
				s = t("./update-geometry"),
				a = t("./update-scroll");
			e.exports = function(t) {
				var e = r.get(t);
				e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, o.css(e.scrollbarXRail, "display", "block"), o.css(e.scrollbarYRail, "display", "block"), e.railXMarginWidth = n.toInt(o.css(e.scrollbarXRail, "marginLeft")) + n.toInt(o.css(e.scrollbarXRail, "marginRight")), e.railYMarginHeight = n.toInt(o.css(e.scrollbarYRail, "marginTop")) + n.toInt(o.css(e.scrollbarYRail, "marginBottom")), o.css(e.scrollbarXRail, "display", "none"), o.css(e.scrollbarYRail, "display", "none"), s(t), a(t, "top", t.scrollTop), a(t, "left", t.scrollLeft), o.css(e.scrollbarXRail, "display", ""), o.css(e.scrollbarYRail, "display", ""))
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

		function e(n) {
			return this.each(function() {
				var t = s(this),
					e = s.extend({}, o.DEFAULTS, t.data(), "object" == typeof n && n),
					i = t.data("bs.validator");
				!i && "destroy" == n || (i || t.data("bs.validator", i = new o(this, e)), "string" == typeof n && i[n]())
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
				i = s(t.target),
				n = "focusout" !== t.type;
			this.$inputs.is(i) && this.validateInput(i, n).done(function() {
				e.toggleSubmit()
			})
		}, o.prototype.validateInput = function(e, i) {
			a(e);
			var n = e.data("bs.validator.errors");
			e.is('[type="radio"]') && (e = this.$element.find('input[name="' + e.attr("name") + '"]'));
			var o = s.Event("validate.bs.validator", {
				relatedTarget: e[0]
			});
			if (this.$element.trigger(o), !o.isDefaultPrevented()) {
				var r = this;
				return this.runValidators(e).done(function(t) {
					e.data("bs.validator.errors", t), t.length ? i ? r.defer(e, r.showErrors) : r.showErrors(e) : r.clearErrors(e), n && t.toString() === n.toString() || (o = t.length ? s.Event("invalid.bs.validator", {
						relatedTarget: e[0],
						detail: t
					}) : s.Event("valid.bs.validator", {
						relatedTarget: e[0],
						detail: n
					}), r.$element.trigger(o)), r.toggleSubmit(), r.$element.trigger(s.Event("validated.bs.validator", {
						relatedTarget: e[0]
					}))
				})
			}
		}, o.prototype.runValidators = function(n) {
			var o = [],
				e = s.Deferred();

			function r(t) {
				return n.data(t + "-error") || ((e = n[0].validity).typeMismatch ? n.data("type-error") : e.patternMismatch ? n.data("pattern-error") : e.stepMismatch ? n.data("step-error") : e.rangeOverflow ? n.data("max-error") : e.rangeUnderflow ? n.data("min-error") : e.valueMissing ? n.data("required-error") : null) || n.data("error");
				var e
			}
			return n.data("bs.validator.deferred") && n.data("bs.validator.deferred").reject(), n.data("bs.validator.deferred", e), s.each(this.validators, s.proxy(function(t, e) {
				var i = null;
				(a(n) || n.attr("required")) && (n.data(t) || "native" == t) && (i = e.call(this, n)) && (i = r(t) || i, ~o.indexOf(i) || o.push(i))
			}, this)), !o.length && a(n) && n.data("remote") ? this.defer(n, function() {
				var t = {};
				t[n.attr("name")] = a(n), s.get(n.data("remote"), t).fail(function(t, e, i) {
					o.push(r("remote") || i)
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
				i = t.closest(".form-group"),
				n = i.find(".help-block.with-errors"),
				o = i.find(".form-control-feedback");
			e.length && (void 0 === n.data("bs.validator.originalContent") && n.data("bs.validator.originalContent", n.html()), n.empty().append(e), i.addClass("has-error has-danger"), i.hasClass("has-feedback") && o.removeClass(this.options.feedback.success) && o.addClass(this.options.feedback.error) && i.removeClass("has-success"))
		}, o.prototype.clearErrors = function(t) {
			var e = t.closest(".form-group"),
				i = e.find(".help-block.with-errors"),
				n = e.find(".form-control-feedback");
			i.html(i.data("bs.validator.originalContent")), e.removeClass("has-error has-danger has-success"), e.hasClass("has-feedback") && n.removeClass(this.options.feedback.error) && n.removeClass(this.options.feedback.success) && a(t) && n.addClass(this.options.feedback.success) && e.addClass("has-success")
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

		function i() {
			e.removeClass("animated-section-moveToRight closed"), e.show(), p("body").addClass("ajax-page-visible")
		}
		var n = p(".ajax-page-load").each(function() {
			if (n = p(this).attr("href"), location.hash == location.hash.split("/")[0] + "/" + n.substr(0, n.length - 5)) {
				var t = p(this).attr("href");
				return i(), e.load(t), !1
			}
		});
		p(document).on("click", ".main-menu, #ajax-page-close-button", function(t) {
			t.preventDefault(), p("#page-ajax-loaded").addClass("animated-section-moveToRight closed"), p("body").removeClass("ajax-page-visible"), setTimeout(function() {
				p("#page-ajax-loaded.closed").html(""), e.hide()
			}, 500), location.hash = location.hash.split("/")[0]
		}).on("click", ".ajax-page-load", function() {
			var t = location.hash.split("/")[0] + "/" + p(this).attr("href").substr(0, p(this).attr("href").length - 5);
			return location.hash = t, i(), !1
		})
	}

	function s(t, e) {
		var i;
		t.attr("data-animation") || (i = parseInt(Math.floor(67 * Math.random()) + 1), t.data("animation", i));
		var n, o, r, s, a = t.data("animation").toString();
		if (67 < (s = -1 != a.indexOf("-") ? (r = a.split("-"), parseInt(r[Math.floor(Math.random() * r.length)])) : parseInt(a))) alert("Transition.js : Invalid 'data-animation' attribute configuration. Animation number should not be greater than 67");
		else {
			switch (s) {
				case 1:
					n = "animated-section-moveFromRight", o = "animated-section-moveToLeft";
					break;
				case 2:
					n = "animated-section-moveFromLeft", o = "animated-section-moveToRight";
					break;
				case 3:
					n = "animated-section-moveFromBottom", o = "animated-section-moveToTop";
					break;
				case 4:
					n = "animated-section-moveFromTop", o = "animated-section-moveToBottom";
					break;
				case 5:
					n = "animated-section-moveFromRight animated-section-ontop", o = "animated-section-fade";
					break;
				case 6:
					n = "animated-section-moveFromLeft animated-section-ontop", o = "animated-section-fade";
					break;
				case 7:
					n = "animated-section-moveFromBottom animated-section-ontop", o = "animated-section-fade";
					break;
				case 8:
					n = "animated-section-moveFromTop animated-section-ontop", o = "animated-section-fade";
					break;
				case 9:
					n = "animated-section-moveFromRightFade", o = "animated-section-moveToLeftFade";
					break;
				case 10:
					n = "animated-section-moveFromLeftFade", o = "animated-section-moveToRightFade";
					break;
				case 11:
					n = "animated-section-moveFromBottomFade", o = "animated-section-moveToTopFade";
					break;
				case 12:
					n = "animated-section-moveFromTopFade", o = "animated-section-moveToBottomFade";
					break;
				case 13:
					n = "animated-section-moveFromRight", o = "animated-section-moveToLeftEasing animated-section-ontop";
					break;
				case 14:
					n = "animated-section-moveFromLeft", o = "animated-section-moveToRightEasing animated-section-ontop";
					break;
				case 15:
					n = "animated-section-moveFromBottom", o = "animated-section-moveToTopEasing animated-section-ontop";
					break;
				case 16:
					n = "animated-section-moveFromTop", o = "animated-section-moveToBottomEasing animated-section-ontop";
					break;
				case 17:
					n = "animated-section-moveFromRight animated-section-ontop", o = "animated-section-scaleDown";
					break;
				case 18:
					n = "animated-section-moveFromLeft animated-section-ontop", o = "animated-section-scaleDown";
					break;
				case 19:
					n = "animated-section-moveFromBottom animated-section-ontop", o = "animated-section-scaleDown";
					break;
				case 20:
					n = "animated-section-moveFromTop animated-section-ontop", o = "animated-section-scaleDown";
					break;
				case 21:
					n = "animated-section-scaleUpDown animated-section-delay300", o = "animated-section-scaleDown";
					break;
				case 22:
					n = "animated-section-scaleUp animated-section-delay300", o = "animated-section-scaleDownUp";
					break;
				case 23:
					n = "animated-section-scaleUp", o = "animated-section-moveToLeft animated-section-ontop";
					break;
				case 24:
					n = "animated-section-scaleUp", o = "animated-section-moveToRight animated-section-ontop";
					break;
				case 25:
					n = "animated-section-scaleUp", o = "animated-section-moveToTop animated-section-ontop";
					break;
				case 26:
					n = "animated-section-scaleUp", o = "animated-section-moveToBottom animated-section-ontop";
					break;
				case 27:
					n = "animated-section-scaleUpCenter animated-section-delay400", o = "animated-section-scaleDownCenter";
					break;
				case 28:
					n = "animated-section-moveFromRight animated-section-delay200 animated-section-ontop", o = "animated-section-rotateRightSideFirst";
					break;
				case 29:
					n = "animated-section-moveFromLeft animated-section-delay200 animated-section-ontop", o = "animated-section-rotateLeftSideFirst";
					break;
				case 30:
					n = "animated-section-moveFromTop animated-section-delay200 animated-section-ontop", o = "animated-section-rotateTopSideFirst";
					break;
				case 31:
					n = "animated-section-moveFromBottom animated-section-delay200 animated-section-ontop", o = "animated-section-rotateBottomSideFirst";
					break;
				case 32:
					n = "animated-section-flipInLeft animated-section-delay500", o = "animated-section-flipOutRight";
					break;
				case 33:
					n = "animated-section-flipInRight animated-section-delay500", o = "animated-section-flipOutLeft";
					break;
				case 34:
					n = "animated-section-flipInBottom animated-section-delay500", o = "animated-section-flipOutTop";
					break;
				case 35:
					n = "animated-section-flipInTop animated-section-delay500", o = "animated-section-flipOutBottom";
					break;
				case 36:
					n = "animated-section-scaleUp", o = "animated-section-rotateFall animated-section-ontop";
					break;
				case 37:
					n = "animated-section-rotateInNewspaper animated-section-delay500", o = "animated-section-rotateOutNewspaper";
					break;
				case 38:
					n = "animated-section-moveFromRight", o = "animated-section-rotatePushLeft";
					break;
				case 39:
					n = "animated-section-moveFromLeft", o = "animated-section-rotatePushRight";
					break;
				case 40:
					n = "animated-section-moveFromBottom", o = "animated-section-rotatePushTop";
					break;
				case 41:
					n = "animated-section-moveFromTop", o = "animated-section-rotatePushBottom";
					break;
				case 42:
					n = "animated-section-rotatePullRight animated-section-delay180", o = "animated-section-rotatePushLeft";
					break;
				case 43:
					n = "animated-section-rotatePullLeft animated-section-delay180", o = "animated-section-rotatePushRight";
					break;
				case 44:
					n = "animated-section-rotatePullBottom animated-section-delay180", o = "animated-section-rotatePushTop";
					break;
				case 45:
					n = "animated-section-rotatePullTop animated-section-delay180", o = "animated-section-rotatePushBottom";
					break;
				case 46:
					n = "animated-section-moveFromRightFade", o = "animated-section-rotateFoldLeft";
					break;
				case 47:
					n = "animated-section-moveFromLeftFade", o = "animated-section-rotateFoldRight";
					break;
				case 48:
					n = "animated-section-moveFromBottomFade", o = "animated-section-rotateFoldTop";
					break;
				case 49:
					n = "animated-section-moveFromTopFade", o = "animated-section-rotateFoldBottom";
					break;
				case 50:
					n = "animated-section-rotateUnfoldLeft", o = "animated-section-moveToRightFade";
					break;
				case 51:
					n = "animated-section-rotateUnfoldRight", o = "animated-section-moveToLeftFade";
					break;
				case 52:
					n = "animated-section-rotateUnfoldTop", o = "animated-section-moveToBottomFade";
					break;
				case 53:
					n = "animated-section-rotateUnfoldBottom", o = "animated-section-moveToTopFade";
					break;
				case 54:
					n = "animated-section-rotateRoomLeftIn", o = "animated-section-rotateRoomLeftOut animated-section-ontop";
					break;
				case 55:
					n = "animated-section-rotateRoomRightIn", o = "animated-section-rotateRoomRightOut animated-section-ontop";
					break;
				case 56:
					n = "animated-section-rotateRoomTopIn", o = "animated-section-rotateRoomTopOut animated-section-ontop";
					break;
				case 57:
					n = "animated-section-rotateRoomBottomIn", o = "animated-section-rotateRoomBottomOut animated-section-ontop";
					break;
				case 58:
					n = "animated-section-rotateCubeLeftIn", o = "animated-section-rotateCubeLeftOut animated-section-ontop";
					break;
				case 59:
					n = "animated-section-rotateCubeRightIn", o = "animated-section-rotateCubeRightOut animated-section-ontop";
					break;
				case 60:
					n = "animated-section-rotateCubeTopIn", o = "animated-section-rotateCubeTopOut animated-section-ontop";
					break;
				case 61:
					n = "animated-section-rotateCubeBottomIn", o = "animated-section-rotateCubeBottomOut animated-section-ontop";
					break;
				case 62:
					n = "animated-section-rotateCarouselLeftIn", o = "animated-section-rotateCarouselLeftOut animated-section-ontop";
					break;
				case 63:
					n = "animated-section-rotateCarouselRightIn", o = "animated-section-rotateCarouselRightOut animated-section-ontop";
					break;
				case 64:
					n = "animated-section-rotateCarouselTopIn", o = "animated-section-rotateCarouselTopOut animated-section-ontop";
					break;
				case 65:
					n = "animated-section-rotateCarouselBottomIn", o = "animated-section-rotateCarouselBottomOut animated-section-ontop";
					break;
				case 66:
					n = "animated-section-rotateSidesIn animated-section-delay200", o = "animated-section-rotateSidesOut";
					break;
				case 67:
					n = "animated-section-rotateSlideIn", o = "animated-section-rotateSlideOut"
			}
			var l, c = f,
				u = c.data("current"),
				d = (e = t.attr("href").split("#")[1], u),
				h = p('section[data-id="' + u + '"]');
			d != (u = e) ? (m = !0, c.data("current", u), (l = p("section[data-id=" + u + "]").addClass("section-active")).scrollTop(0), h.addClass(o).on(y, function() {
				h.off(y), g = !0, v && (w(0, l, h), g = !1)
			}), l.addClass(n).on(y, function() {
				l.off(y), v = !0, g && (w(0, l, h), m = v = !1)
			})) : m = !1, b || w(0, l)
		}
	}

	function w(t, e, i) {
		var n = e;
		i.attr("class", i.data("originalClassList")), n.attr("class", n.data("originalClassList") + " section-active")
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
					var e = p(i + ' a[href*="' + location.hash.split("/")[0] + '"]');
					o(e), s(e), r()
				}
			};
			var i = t.menu,
				e = "" === location.hash ? location.hash = p("section.animated-section").first().attr("data-id") : location.hash;
			location.hash = e;
			var n = p(i + ' a[href*="' + location.hash.split("/")[0] + '"]');
			o(n), s(n), p("body").append('<div id="page-ajax-loaded" class="page-ajax-loaded animated animated-section-moveFromLeft"></div>'), r(), p(".lmpixels-arrow-right").click(function() {
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

	function h(t, e, i, n) {
		var o = document.createElement("div");
		return o.className = "mfp-" + t, i && (o.innerHTML = i), n ? e && e.appendChild(o) : (o = u(o), e && o.appendTo(e)), o
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
	var m, n, g, o, v, e, l = "Close",
		c = "BeforeClose",
		y = "MarkupParse",
		b = "Open",
		w = ".mfp",
		x = "mfp-ready",
		i = "mfp-removing",
		s = "mfp-prevent-close",
		a = !!window.jQuery,
		_ = u(window);

	function C() {
		S && (E.after(S.addClass(T)).detach(), S = null)
	}
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
				for (var e, i = t.items, n = 0; n < i.length; n++)
					if ((e = i[n]).parsed && (e = e.el[0]), e === t.el[0]) {
						m.index = n;
						break
					}
			} else m.items = u.isArray(t.items) ? t.items : [t.items], m.index = t.index || 0;
			if (!m.isOpen) {
				m.types = [], v = "", t.mainEl && t.mainEl.length ? m.ev = t.mainEl.eq(0) : m.ev = g, t.key ? (m.popupsCache[t.key] || (m.popupsCache[t.key] = {}), m.currTemplate = m.popupsCache[t.key]) : m.currTemplate = {}, m.st = u.extend(!0, {}, u.magnificPopup.defaults, t), m.fixedContentPos = "auto" === m.st.fixedContentPos ? !m.probablyMobile : m.st.fixedContentPos, m.st.modal && (m.st.closeOnContentClick = !1, m.st.closeOnBgClick = !1, m.st.showCloseBtn = !1, m.st.enableEscapeKey = !1), m.bgOverlay || (m.bgOverlay = h("bg").on("click" + w, function() {
					m.close()
				}), m.wrap = h("wrap").attr("tabindex", -1).on("click" + w, function(t) {
					m._checkIfClose(t.target) && m.close()
				}), m.container = h("container", m.wrap)), m.contentContainer = h("content"), m.st.preloader && (m.preloader = h("preloader", m.container, m.st.tLoading));
				for (var o = u.magnificPopup.modules, n = 0; n < o.length; n++) {
					var r = (r = o[n]).charAt(0).toUpperCase() + r.slice(1);
					m["init" + r].call(m)
				}
				p("BeforeOpen"), m.st.showCloseBtn && (m.st.closeBtnInside ? (d(y, function(t, e, i, n) {
					i.close_replaceWith = f(n.type)
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
				m.fixedContentPos && m._hasScrollBar(a) && (s = m._getScrollbarSize()) && (l.marginRight = s), m.fixedContentPos && (m.isIE7 ? u("body, html").css("overflow", "hidden") : l.overflow = "hidden");
				var c = m.st.mainClass;
				return m.isIE7 && (c += " mfp-ie7"), c && m._addClassToMFP(c), m.updateItemHTML(), p("BuildControls"), u("html").css(l), m.bgOverlay.add(m.wrap).prependTo(m.st.prependTo || u(document.body)), m._lastFocusedEl = document.activeElement, setTimeout(function() {
					m.content ? (m._addClassToMFP(x), m._setFocus()) : m.bgOverlay.addClass(x), g.on("focusin" + w, m._onFocusIn)
				}, 16), m.isOpen = !0, m.updateSize(a), p(b), t
			}
			m.updateItemHTML()
		},
		close: function() {
			m.isOpen && (p(c), m.isOpen = !1, m.st.removalDelay && !m.isLowIE && m.supportsTransition ? (m._addClassToMFP(i), setTimeout(function() {
				m._close()
			}, m.st.removalDelay)) : m._close())
		},
		_close: function() {
			p(l);
			var t, e = i + " " + x + " ";
			m.bgOverlay.detach(), m.wrap.detach(), m.container.empty(), m.st.mainClass && (e += m.st.mainClass + " "), m._removeClassFromMFP(e), m.fixedContentPos && (t = {
				marginRight: ""
			}, m.isIE7 ? u("body, html").css("overflow", "") : t.overflow = "", u("html").css(t)), g.off("keyup.mfp focusin" + w), m.ev.off(w), m.wrap.attr("class", "mfp-wrap").removeAttr("style"), m.bgOverlay.attr("class", "mfp-bg"), m.container.attr("class", "mfp-container"), !m.st.showCloseBtn || m.st.closeBtnInside && !0 !== m.currTemplate[m.currItem.type] || m.currTemplate.closeBtn && m.currTemplate.closeBtn.detach(), m.st.autoFocusLast && m._lastFocusedEl && u(m._lastFocusedEl).focus(), m.currItem = null, m.content = null, m.currTemplate = null, m.prevHeight = 0, p("AfterClose")
		},
		updateSize: function(t) {
			var e, i;
			m.isIOS ? (e = document.documentElement.clientWidth / window.innerWidth, i = window.innerHeight * e, m.wrap.css("height", i), m.wH = i) : m.wH = t || _.height(), m.fixedContentPos || m.wrap.css("height", m.wH), p("Resize")
		},
		updateItemHTML: function() {
			var t = m.items[m.index];
			m.contentContainer.detach(), m.content && m.content.detach(), t.parsed || (t = m.parseEl(m.index));
			var e, i = t.type;
			p("BeforeChange", [m.currItem ? m.currItem.type : "", i]), m.currItem = t, m.currTemplate[i] || (p("FirstMarkupParse", e = !!m.st[i] && m.st[i].markup), m.currTemplate[i] = !e || u(e)), o && o !== t.type && m.container.removeClass("mfp-" + o + "-holder");
			var n = m["get" + i.charAt(0).toUpperCase() + i.slice(1)](t, m.currTemplate[i]);
			m.appendContent(n, i), t.preloaded = !0, p("Change", t), o = t.type, m.container.prepend(m.contentContainer), p("AfterChange")
		},
		appendContent: function(t, e) {
			(m.content = t) ? m.st.showCloseBtn && m.st.closeBtnInside && !0 === m.currTemplate[e] ? m.content.find(".mfp-close").length || m.content.append(f()) : m.content = t: m.content = "", p("BeforeAppend"), m.container.addClass("mfp-" + e + "-holder"), m.contentContainer.append(m.content)
		},
		parseEl: function(t) {
			var e, i = m.items[t];
			if ((i = i.tagName ? {
					el: u(i)
				} : (e = i.type, {
					data: i,
					src: i.src
				})).el) {
				for (var n = m.types, o = 0; o < n.length; o++)
					if (i.el.hasClass("mfp-" + n[o])) {
						e = n[o];
						break
					} i.src = i.el.attr("data-mfp-src"), i.src || (i.src = i.el.attr("href"))
			}
			return i.type = e || m.st.type || "inline", i.index = t, i.parsed = !0, p("ElementParse", m.items[t] = i), m.items[t]
		},
		addGroup: function(e, i) {
			function t(t) {
				t.mfpEl = this, m._openClick(t, e, i)
			}
			var n = "click.magnificPopup";
			(i = i || {}).mainEl = e, i.items ? (i.isObj = !0, e.off(n).on(n, t)) : (i.isObj = !1, i.delegate ? e.off(n).on(n, i.delegate, t) : (i.items = e).off(n).on(n, t))
		},
		_openClick: function(t, e, i) {
			if ((void 0 !== i.midClick ? i.midClick : u.magnificPopup.defaults.midClick) || !(2 === t.which || t.ctrlKey || t.metaKey || t.altKey || t.shiftKey)) {
				var n = void 0 !== i.disableOn ? i.disableOn : u.magnificPopup.defaults.disableOn;
				if (n)
					if (u.isFunction(n)) {
						if (!n.call(m)) return !0
					} else if (_.width() < n) return !0;
				t.type && (t.preventDefault(), m.isOpen && t.stopPropagation()), i.el = u(t.mfpEl), i.delegate && (i.items = e.find(i.delegate)), m.open(i)
			}
		},
		updateStatus: function(t, e) {
			var i;
			m.preloader && (n !== t && m.container.removeClass("mfp-s-" + n), e || "loading" !== t || (e = m.st.tLoading), p("UpdateStatus", i = {
				status: t,
				text: e
			}), t = i.status, e = i.text, m.preloader.html(e), m.preloader.find("a").on("click", function(t) {
				t.stopImmediatePropagation()
			}), m.container.addClass("mfp-s-" + t), n = t)
		},
		_checkIfClose: function(t) {
			if (!u(t).hasClass(s)) {
				var e = m.st.closeOnContentClick,
					i = m.st.closeOnBgClick;
				if (e && i) return !0;
				if (!m.content || u(t).hasClass("mfp-close") || m.preloader && t === m.preloader[0]) return !0;
				if (t === m.content[0] || u.contains(m.content[0], t)) {
					if (e) return !0
				} else if (i && u.contains(document, t)) return !0;
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
				return void 0 === e || !1 === e || void(1 < (r = t.split("_")).length ? 0 < (i = o.find(w + "-" + r[0])).length && ("replaceWith" === (n = r[1]) ? i[0] !== e[0] && i.replaceWith(e) : "img" === n ? i.is("img") ? i.attr("src", e) : i.replaceWith(u("<img>").attr("src", e).attr("class", i.attr("class"))) : i.attr(r[1], e)) : o.find(w + "-" + t).html(e));
				var i, n
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
		var e, i, n, o = u(this);
		return "string" == typeof t ? "open" === t ? (e = a ? o.data("magnificPopup") : o[0].magnificPopup, i = parseInt(arguments[1], 10) || 0, n = e.items ? e.items[i] : (n = o, e.delegate && (n = n.find(e.delegate)), n.eq(i)), m._openClick({
			mfpEl: n
		}, o, e)) : m.isOpen && m[t].apply(m, Array.prototype.slice.call(arguments, 1)) : (t = u.extend(!0, {}, t), a ? o.data("magnificPopup", t) : o[0].magnificPopup = t, m.addGroup(o, t)), o
	};
	var T, E, S, k = "inline";

	function L() {
		D && u(document.body).removeClass(D)
	}

	function I() {
		L(), m.req && m.req.abort()
	}
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
					var i, n = m.st.inline,
						o = u(t.src);
					return o.length ? ((i = o[0].parentNode) && i.tagName && (E || (T = n.hiddenClass, E = h(T), T = "mfp-" + T), S = o.after(E).detach().removeClass(T)), m.updateStatus("ready")) : (m.updateStatus("error", n.tNotFound), o = u("<div>")), t.inlineElement = o
				}
				return m.updateStatus("ready"), m._parseMarkup(e, {}, t), e
			}
		}
	});
	var D, z, O, A = "ajax";

	function R(t) {
		var e;
		!m.currTemplate[j] || (e = m.currTemplate[j].find("iframe")).length && (t || (e[0].src = "//about:blank"), m.isIE8 && e.css("display", t ? "block" : "none"))
	}
	u.magnificPopup.registerModule(A, {
		options: {
			settings: null,
			cursor: "mfp-ajax-cur",
			tError: '<a href="%url%">The content</a> could not be loaded.'
		},
		proto: {
			initAjax: function() {
				m.types.push(A), D = m.st.ajax.cursor, d(l + "." + A, I), d("BeforeChange." + A, I)
			},
			getAjax: function(o) {
				D && u(document.body).addClass(D), m.updateStatus("loading");
				var t = u.extend({
					url: o.src,
					success: function(t, e, i) {
						var n = {
							data: t,
							xhr: i
						};
						p("ParseAjax", n), m.appendContent(u(n.data), A), o.finished = !0, L(), m._setFocus(), setTimeout(function() {
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
	}), u.magnificPopup.registerModule("image", {
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
				t.img && (t.hasSize = !0, z && clearInterval(z), t.isCheckingImgSize = !1, p("ImageHasSize", t), t.imgHidden && (m.content && m.content.removeClass("mfp-loading"), t.imgHidden = !1))
			},
			findImageSize: function(e) {
				var i = 0,
					n = e.img[0],
					o = function(t) {
						z && clearInterval(z), z = setInterval(function() {
							return 0 < n.naturalWidth ? void m._onImageHasSize(e) : (200 < i && clearInterval(z), void(3 == ++i ? o(10) : 40 === i ? o(50) : 100 === i && o(500)))
						}, t)
					};
				o(1)
			},
			getImage: function(t, e) {
				var i, n = 0,
					o = function() {
						t && (t.img[0].complete ? (t.img.off(".mfploader"), t === m.currItem && (m._onImageHasSize(t), m.updateStatus("ready")), t.hasSize = !0, t.loaded = !0, p("ImageLoadComplete")) : ++n < 200 ? setTimeout(o, 100) : r())
					},
					r = function() {
						t && (t.img.off(".mfploader"), t === m.currItem && (m._onImageHasSize(t), m.updateStatus("error", s.tError.replace("%url%", t.src))), t.hasSize = !0, t.loaded = !0, t.loadError = !0)
					},
					s = m.st.image,
					a = e.find(".mfp-img");
				return a.length && ((i = document.createElement("img")).className = "mfp-img", t.el && t.el.find("img").length && (i.alt = t.el.find("img").attr("alt")), t.img = u(i).on("load.mfploader", o).on("error.mfploader", r), i.src = t.src, a.is("img") && (t.img = t.img.clone()), 0 < (i = t.img[0]).naturalWidth ? t.hasSize = !0 : i.width || (t.hasSize = !1)), m._parseMarkup(e, {
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
				}, t), m.resizeImage(), t.hasSize ? (z && clearInterval(z), t.loadError ? (e.addClass("mfp-loading"), m.updateStatus("error", s.tError.replace("%url%", t.src))) : (e.removeClass("mfp-loading"), m.updateStatus("ready"))) : (m.updateStatus("loading"), t.loading = !0, t.hasSize || (t.imgHidden = !0, e.addClass("mfp-loading"), m.findImageSize(t))), e
			}
		}
	}), u.magnificPopup.registerModule("zoom", {
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
				var t, e, i, n, o, r, s = m.st.zoom,
					a = ".zoom";
				s.enabled && m.supportsTransition && (n = s.duration, o = function(t) {
					var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
						i = "all " + s.duration / 1e3 + "s " + s.easing,
						n = {
							position: "fixed",
							zIndex: 9999,
							left: 0,
							top: 0,
							"-webkit-backface-visibility": "hidden"
						},
						o = "transition";
					return n["-webkit-" + o] = n["-moz-" + o] = n["-o-" + o] = n[o] = i, e.css(n), e
				}, r = function() {
					m.content.css("visibility", "visible")
				}, d("BuildControls" + a, function() {
					if (m._allowZoom()) {
						if (clearTimeout(e), m.content.css("visibility", "hidden"), !(t = m._getItemToZoom())) return void r();
						(i = o(t)).css(m._getOffset()), m.wrap.append(i), e = setTimeout(function() {
							i.css(m._getOffset(!0)), e = setTimeout(function() {
								r(), setTimeout(function() {
									i.remove(), t = i = null, p("ZoomAnimationEnded")
								}, 16)
							}, n)
						}, 16)
					}
				}), d(c + a, function() {
					if (m._allowZoom()) {
						if (clearTimeout(e), m.st.removalDelay = n, !t) {
							if (!(t = m._getItemToZoom())) return;
							i = o(t)
						}
						i.css(m._getOffset(!0)), m.wrap.append(i), m.content.css("visibility", "hidden"), setTimeout(function() {
							i.css(m._getOffset())
						}, 16)
					}
				}), d(l + a, function() {
					m._allowZoom() && (r(), i && i.remove(), t = null)
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
					i = e.offset(),
					n = parseInt(e.css("padding-top"), 10),
					o = parseInt(e.css("padding-bottom"), 10);
				i.top -= u(window).scrollTop() - n;
				var r = {
					width: e.width(),
					height: (a ? e.innerHeight() : e[0].offsetHeight) - o - n
				};
				return void 0 === O && (O = void 0 !== document.createElement("p").style.MozTransform), O ? r["-moz-transform"] = r.transform = "translate(" + i.left + "px," + i.top + "px)" : (r.left = i.left, r.top = i.top), r
			}
		}
	});
	var j = "iframe";

	function N(t) {
		var e = m.items.length;
		return e - 1 < t ? t - e : t < 0 ? e + t : t
	}

	function W(t, e, i) {
		return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
	}
	u.magnificPopup.registerModule(j, {
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
				m.types.push(j), d("BeforeChange", function(t, e, i) {
					e !== i && (e === j ? R() : i === j && R(!0))
				}), d(l + "." + j, function() {
					R()
				})
			},
			getIframe: function(t, e) {
				var i = t.src,
					n = m.st.iframe;
				u.each(n.patterns, function() {
					return -1 < i.indexOf(this.index) ? (this.id && (i = "string" == typeof this.id ? i.substr(i.lastIndexOf(this.id) + this.id.length, i.length) : this.id.call(this, i)), i = this.src.replace("%id%", i), !1) : void 0
				});
				var o = {};
				return n.srcAction && (o[n.srcAction] = i), m._parseMarkup(e, o, t), m.updateStatus("ready"), e
			}
		}
	}), u.magnificPopup.registerModule("gallery", {
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
					e.text && (e.text = W(e.text, m.currItem.index, m.items.length))
				}), d(y + t, function(t, e, i, n) {
					var o = m.items.length;
					i.counter = 1 < o ? W(r.tCounter, n.index, o) : ""
				}), d("BuildControls" + t, function() {
					var t, e, i;
					1 < m.items.length && r.arrows && !m.arrowLeft && (t = r.arrowMarkup, e = m.arrowLeft = u(t.replace(/%title%/gi, r.tPrev).replace(/%dir%/gi, "left")).addClass(s), i = m.arrowRight = u(t.replace(/%title%/gi, r.tNext).replace(/%dir%/gi, "right")).addClass(s), e.click(function() {
						m.prev()
					}), i.click(function() {
						m.next()
					}), m.container.append(e.add(i)))
				}), d("Change" + t, function() {
					m._preloadTimeout && clearTimeout(m._preloadTimeout), m._preloadTimeout = setTimeout(function() {
						m.preloadNearbyImages(), m._preloadTimeout = null
					}, 16)
				}), void d(l + t, function() {
					g.off(t), m.wrap.off("click" + t), m.arrowRight = m.arrowLeft = null
				}))
			},
			next: function() {
				m.direction = !0, m.index = N(m.index + 1), m.updateItemHTML()
			},
			prev: function() {
				m.direction = !1, m.index = N(m.index - 1), m.updateItemHTML()
			},
			goTo: function(t) {
				m.direction = t >= m.index, m.index = t, m.updateItemHTML()
			},
			preloadNearbyImages: function() {
				for (var t = m.st.gallery.preload, e = Math.min(t[0], m.items.length), i = Math.min(t[1], m.items.length), n = 1; n <= (m.direction ? i : e); n++) m._preloadItem(m.index + n);
				for (n = 1; n <= (m.direction ? e : i); n++) m._preloadItem(m.index - n)
			},
			_preloadItem: function(t) {
				var e;
				t = N(t), m.items[t].preloaded || ((e = m.items[t]).parsed || (e = m.parseEl(t)), p("LazyLoad", e), "image" === e.type && (e.img = u('<img class="mfp-img" />').on("load.mfploader", function() {
					e.hasSize = !0
				}).on("error.mfploader", function() {
					e.hasSize = !0, e.loadError = !0, p("LazyLoadError", e)
				}).attr("src", e.src)), e.preloaded = !0)
			}
		}
	});
	var F = "retina";
	u.magnificPopup.registerModule(F, {
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
				var i, n;
				1 < window.devicePixelRatio && (i = m.st.retina, n = i.ratio, 1 < (n = isNaN(n) ? n() : n) && (d("ImageHasSize." + F, function(t, e) {
					e.img.css({
						"max-width": e.img[0].naturalWidth / n,
						width: "100%"
					})
				}), d("ElementParse." + F, function(t, e) {
					e.src = i.replaceSrc(e, n)
				})))
			}
		}
	}), r()
}),
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "modernizr"], t) : "object" == typeof exports ? module.exports = t(require("jquery"), window.Modernizr) : window.Shuffle = t(window.jQuery, window.Modernizr)
}(function(d, t, s) {
	"use strict";

	function r(t, e, i) {
		for (var n = 0, o = t.length; n < o; n++)
			if (e.call(i, t[n], n, t) === {}) return
	}

	function i(t, e, i) {
		return setTimeout(d.proxy(t, e), i)
	}

	function a(t) {
		return Math.max.apply(Math, t)
	}

	function n(t) {
		return d.isNumeric(t) ? t : 0
	}
	if ("object" != typeof t) throw new Error("Shuffle.js requires Modernizr.\nhttp://vestride.github.io/Shuffle/#dependencies");

	function l(t, e) {
		this.x = n(t), this.y = n(e)
	}
	var o = t.prefixed("transition"),
		c = t.prefixed("transitionDelay"),
		u = t.prefixed("transitionDuration"),
		h = {
			WebkitTransition: "webkitTransitionEnd",
			transition: "transitionend"
		} [o],
		p = t.prefixed("transform"),
		e = p ? p.replace(/([A-Z])/g, function(t, e) {
			return "-" + e.toLowerCase()
		}).replace(/^ms-/, "-ms-") : "",
		f = t.csstransforms && t.csstransitions,
		m = t.csstransforms3d,
		g = !!window.getComputedStyle,
		v = "shuffle",
		y = "all",
		b = window.getComputedStyle || function() {};
	l.equals = function(t, e) {
		return t.x === e.x && t.y === e.y
	};
	var w = function() {
			if (!g) return !1;
			var t = document.body || document.documentElement,
				e = document.createElement("div");
			e.style.cssText = "width:10px;padding:2px;-webkit-box-sizing:border-box;box-sizing:border-box;", t.appendChild(e);
			var i = "10px" === b(e, null).width;
			return t.removeChild(e), i
		}(),
		x = 0,
		_ = d(window),
		C = function(t, e) {
			e = e || {}, d.extend(this, C.options, e, C.settings), this.$el = d(t), this.element = t, this.unique = "shuffle_" + x++, this._fire(C.EventType.LOADING), this._init(), i(function() {
				this.initialized = !0, this._fire(C.EventType.DONE)
			}, this, 16)
		};
	return C.EventType = {
		LOADING: "loading",
		DONE: "done",
		LAYOUT: "layout",
		REMOVED: "removed"
	}, C.ClassName = {
		BASE: v,
		SHUFFLE_ITEM: "shuffle-item",
		FILTERED: "filtered",
		CONCEALED: "concealed"
	}, C.options = {
		group: y,
		speed: 250,
		easing: "ease-out",
		itemSelector: "",
		sizer: null,
		gutterWidth: 0,
		columnWidth: 0,
		delimeter: null,
		buffer: 0,
		columnThreshold: g ? .01 : .1,
		initialSort: null,
		throttle: function(i, n, o) {
			var r, s, a, l = null,
				c = 0;

			function u() {
				c = !1 === o.leading ? 0 : d.now(), l = null, a = i.apply(r, s), r = s = null
			}
			return o = o || {},
				function() {
					var t = d.now();
					c || !1 !== o.leading || (c = t);
					var e = n - (t - c);
					return r = this, s = arguments, e <= 0 || n < e ? (clearTimeout(l), l = null, c = t, a = i.apply(r, s), r = s = null) : l || !1 === o.trailing || (l = setTimeout(u, e)), a
				}
		},
		throttleTime: 300,
		sequentialFadeDelay: 150,
		supported: f
	}, C.settings = {
		useSizer: !1,
		itemCss: {
			position: "absolute",
			top: 0,
			left: 0,
			visibility: "visible"
		},
		revealAppendedDelay: 300,
		lastSort: {},
		lastFilter: y,
		enabled: !0,
		destroyed: !1,
		initialized: !1,
		_animations: [],
		_transitions: [],
		_isMovementCanceled: !1,
		styleQueue: []
	}, C.Point = l, C._getItemTransformString = function(t, e) {
		return m ? "translate3d(" + t.x + "px, " + t.y + "px, 0) scale3d(" + e + ", " + e + ", 1)" : "translate(" + t.x + "px, " + t.y + "px) scale(" + e + ")"
	}, C._getNumberStyle = function(t, e, i) {
		if (g) {
			i = i || b(t, null);
			var n = C._getFloat(i[e]);
			return w || "width" !== e ? w || "height" !== e || (n += C._getFloat(i.paddingTop) + C._getFloat(i.paddingBottom) + C._getFloat(i.borderTopWidth) + C._getFloat(i.borderBottomWidth)) : n += C._getFloat(i.paddingLeft) + C._getFloat(i.paddingRight) + C._getFloat(i.borderLeftWidth) + C._getFloat(i.borderRightWidth), n
		}
		return C._getFloat(d(t).css(e))
	}, C._getFloat = function(t) {
		return n(parseFloat(t))
	}, C._getOuterWidth = function(t, e) {
		var i = b(t, null),
			n = C._getNumberStyle(t, "width", i);
		return e && (n += C._getNumberStyle(t, "marginLeft", i) + C._getNumberStyle(t, "marginRight", i)), n
	}, C._getOuterHeight = function(t, e) {
		var i = b(t, null),
			n = C._getNumberStyle(t, "height", i);
		return e && (n += C._getNumberStyle(t, "marginTop", i) + C._getNumberStyle(t, "marginBottom", i)), n
	}, C._skipTransition = function(t, e, i) {
		var n = t.style[u];
		t.style[u] = "0ms", e.call(i), t.offsetWidth, t.style[u] = n
	}, C.prototype._init = function() {
		this.$items = this._getItems(), this.sizer = this._getElementOption(this.sizer), this.sizer && (this.useSizer = !0), this.$el.addClass(C.ClassName.BASE), this._initItems(), _.on("resize." + v + "." + this.unique, this._getResizeFunction());
		var t = this.$el.css(["position", "overflow"]),
			e = C._getOuterWidth(this.element);
		this._validateStyles(t), this._setColumns(e), this.shuffle(this.group, this.initialSort), this.supported && i(function() {
			this._setTransitions(), this.element.style[o] = "height " + this.speed + "ms " + this.easing
		}, this)
	}, C.prototype._getResizeFunction = function() {
		var t = d.proxy(this._onResize, this);
		return this.throttle ? this.throttle(t, this.throttleTime) : t
	}, C.prototype._getElementOption = function(t) {
		return "string" == typeof t ? this.$el.find(t)[0] || null : t && t.nodeType && 1 === t.nodeType ? t : t && t.jquery ? t[0] : null
	}, C.prototype._validateStyles = function(t) {
		"static" === t.position && (this.element.style.position = "relative"), "hidden" !== t.overflow && (this.element.style.overflow = "hidden")
	}, C.prototype._filter = function(t, e) {
		t = t || this.lastFilter, e = e || this.$items;
		var i = this._getFilteredSets(t, e);
		return this._toggleFilterClasses(i.filtered, i.concealed), "string" == typeof(this.lastFilter = t) && (this.group = t), i.filtered
	}, C.prototype._getFilteredSets = function(i, t) {
		var n = d(),
			o = d();
		return i === y ? n = t : r(t, function(t) {
			var e = d(t);
			this._doesPassFilter(i, e) ? n = n.add(e) : o = o.add(e)
		}, this), {
			filtered: n,
			concealed: o
		}
	}, C.prototype._doesPassFilter = function(t, e) {
		if (d.isFunction(t)) return t.call(e[0], e, this);
		var i = e.data("groups"),
			n = this.delimeter && !d.isArray(i) ? i.split(this.delimeter) : i;
		return -1 < d.inArray(t, n)
	}, C.prototype._toggleFilterClasses = function(t, e) {
		t.removeClass(C.ClassName.CONCEALED).addClass(C.ClassName.FILTERED), e.removeClass(C.ClassName.FILTERED).addClass(C.ClassName.CONCEALED)
	}, C.prototype._initItems = function(t) {
		(t = t || this.$items).addClass([C.ClassName.SHUFFLE_ITEM, C.ClassName.FILTERED].join(" ")), t.css(this.itemCss).data("point", new l).data("scale", 1)
	}, C.prototype._updateItemCount = function() {
		this.visibleItems = this._getFilteredItems().length
	}, C.prototype._setTransition = function(t) {
		t.style[o] = e + " " + this.speed + "ms " + this.easing + ", opacity " + this.speed + "ms " + this.easing
	}, C.prototype._setTransitions = function(t) {
		r(t = t || this.$items, function(t) {
			this._setTransition(t)
		}, this)
	}, C.prototype._setSequentialDelay = function(t) {
		this.supported && r(t, function(t, e) {
			t.style[c] = "0ms," + (e + 1) * this.sequentialFadeDelay + "ms"
		}, this)
	}, C.prototype._getItems = function() {
		return this.$el.children(this.itemSelector)
	}, C.prototype._getFilteredItems = function() {
		return this.$items.filter("." + C.ClassName.FILTERED)
	}, C.prototype._getConcealedItems = function() {
		return this.$items.filter("." + C.ClassName.CONCEALED)
	}, C.prototype._getColumnSize = function(t, e) {
		var i = d.isFunction(this.columnWidth) ? this.columnWidth(t) : this.useSizer ? C._getOuterWidth(this.sizer) : this.columnWidth ? this.columnWidth : 0 < this.$items.length ? C._getOuterWidth(this.$items[0], !0) : t;
		return 0 === i && (i = t), i + e
	}, C.prototype._getGutterSize = function(t) {
		return d.isFunction(this.gutterWidth) ? this.gutterWidth(t) : this.useSizer ? C._getNumberStyle(this.sizer, "marginLeft") : this.gutterWidth
	}, C.prototype._setColumns = function(t) {
		var e = t || C._getOuterWidth(this.element),
			i = this._getGutterSize(e),
			n = this._getColumnSize(e, i),
			o = (e + i) / n;
		Math.abs(Math.round(o) - o) < this.columnThreshold && (o = Math.round(o)), this.cols = Math.max(Math.floor(o), 1), this.containerWidth = e, this.colWidth = n
	}, C.prototype._setContainerSize = function() {
		this.$el.css("height", this._getContainerSize())
	}, C.prototype._getContainerSize = function() {
		return a(this.positions)
	}, C.prototype._fire = function(t, e) {
		this.$el.trigger(t + "." + v, e && e.length ? e : [this])
	}, C.prototype._resetCols = function() {
		var t = this.cols;
		for (this.positions = []; t--;) this.positions.push(0)
	}, C.prototype._layout = function(t, e) {
		r(t, function(t) {
			this._layoutItem(t, !!e)
		}, this), this._processStyleQueue(), this._setContainerSize()
	}, C.prototype._layoutItem = function(t, e) {
		var i = d(t),
			n = i.data(),
			o = n.point,
			r = n.scale,
			s = {
				width: C._getOuterWidth(t, !0),
				height: C._getOuterHeight(t, !0)
			},
			a = this._getItemPosition(s);
		l.equals(o, a) && 1 === r || (n.point = a, n.scale = 1, this.styleQueue.push({
			$item: i,
			point: a,
			scale: 1,
			opacity: e ? 0 : 1,
			skipTransition: e || 0 === this.speed,
			callfront: function() {
				e || i.css("visibility", "visible")
			},
			callback: function() {
				e && i.css("visibility", "hidden")
			}
		}))
	}, C.prototype._getItemPosition = function(t) {
		for (var e = this._getColumnSpan(t.width, this.colWidth, this.cols), i = this._getColumnSet(e, this.cols), n = this._getShortColumn(i, this.buffer), o = new l(Math.round(this.colWidth * n), Math.round(i[n])), r = i[n] + t.height, s = this.cols + 1 - i.length, a = 0; a < s; a++) this.positions[n + a] = r;
		return o
	}, C.prototype._getColumnSpan = function(t, e, i) {
		var n = t / e;
		return Math.abs(Math.round(n) - n) < this.columnThreshold && (n = Math.round(n)), Math.min(Math.ceil(n), i)
	}, C.prototype._getColumnSet = function(t, e) {
		if (1 === t) return this.positions;
		for (var i = e + 1 - t, n = [], o = 0; o < i; o++) n[o] = a(this.positions.slice(o, o + t));
		return n
	}, C.prototype._getShortColumn = function(t, e) {
		for (var i = Math.min.apply(Math, t), n = 0, o = t.length; n < o; n++)
			if (t[n] >= i - e && t[n] <= i + e) return n;
		return 0
	}, C.prototype._shrink = function(t) {
		r(t || this._getConcealedItems(), function(t) {
			var e = d(t),
				i = e.data();
			.001 !== i.scale && (i.scale = .001, this.styleQueue.push({
				$item: e,
				point: i.point,
				scale: .001,
				opacity: 0,
				callback: function() {
					e.css("visibility", "hidden")
				}
			}))
		}, this)
	}, C.prototype._onResize = function() {
		this.enabled && !this.destroyed && C._getOuterWidth(this.element) !== this.containerWidth && this.update()
	}, C.prototype._getStylesForTransition = function(t) {
		var e = {
			opacity: t.opacity
		};
		return this.supported ? e[p] = C._getItemTransformString(t.point, t.scale) : (e.left = t.point.x, e.top = t.point.y), e
	}, C.prototype._transition = function(t) {
		var e = this._getStylesForTransition(t);
		this._startItemAnimation(t.$item, e, t.callfront || d.noop, t.callback || d.noop)
	}, C.prototype._startItemAnimation = function(t, e, i, n) {
		function o(t) {
			t.target === t.currentTarget && (d(t.target).off(h, o), s._removeTransitionReference(a), n())
		}
		var r, s = this,
			a = {
				$element: t,
				handler: o
			};
		if (i(), !this.initialized) return t.css(e), void n();
		this.supported ? (t.css(e), t.on(h, o), this._transitions.push(a)) : (r = t.stop(!0).animate(e, this.speed, "swing", n), this._animations.push(r.promise()))
	}, C.prototype._processStyleQueue = function(t) {
		this.isTransitioning && this._cancelMovement();
		var e = d();
		r(this.styleQueue, function(t) {
			t.skipTransition ? this._styleImmediately(t) : (e = e.add(t.$item), this._transition(t))
		}, this), 0 < e.length && this.initialized && 0 < this.speed ? (this.isTransitioning = !0, this.supported ? this._whenCollectionDone(e, h, this._movementFinished) : this._whenAnimationsDone(this._movementFinished)) : t || i(this._layoutEnd, this), this.styleQueue.length = 0
	}, C.prototype._cancelMovement = function() {
		this.supported ? r(this._transitions, function(t) {
			t.$element.off(h, t.handler)
		}) : (this._isMovementCanceled = !0, this.$items.stop(!0), this._isMovementCanceled = !1), this._transitions.length = 0, this.isTransitioning = !1
	}, C.prototype._removeTransitionReference = function(t) {
		var e = d.inArray(t, this._transitions); - 1 < e && this._transitions.splice(e, 1)
	}, C.prototype._styleImmediately = function(t) {
		C._skipTransition(t.$item[0], function() {
			t.$item.css(this._getStylesForTransition(t))
		}, this)
	}, C.prototype._movementFinished = function() {
		this.isTransitioning = !1, this._layoutEnd()
	}, C.prototype._layoutEnd = function() {
		this._fire(C.EventType.LAYOUT)
	}, C.prototype._addItems = function(t, e, i) {
		this._initItems(t), this._setTransitions(t), this.$items = this._getItems(), this._shrink(t), r(this.styleQueue, function(t) {
			t.skipTransition = !0
		}), this._processStyleQueue(!0), e ? this._addItemsToEnd(t, i) : this.shuffle(this.lastFilter)
	}, C.prototype._addItemsToEnd = function(t, e) {
		var i = this._filter(null, t).get();
		this._updateItemCount(), this._layout(i, !0), e && this.supported && this._setSequentialDelay(i), this._revealAppended(i)
	}, C.prototype._revealAppended = function(t) {
		i(function() {
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
	}, C.prototype._whenCollectionDone = function(t, e, i) {
		function n(t) {
			t.target === t.currentTarget && (d(t.target).off(e, n), ++o === r && (s._removeTransitionReference(a), i.call(s)))
		}
		var o = 0,
			r = t.length,
			s = this,
			a = {
				$element: t,
				handler: n
			};
		t.on(e, n), this._transitions.push(a)
	}, C.prototype._whenAnimationsDone = function(t) {
		d.when.apply(null, this._animations).always(d.proxy(function() {
			this._animations.length = 0, this._isMovementCanceled || t.call(this)
		}, this))
	}, C.prototype.shuffle = function(t, e) {
		this.enabled && (t = t || y, this._filter(t), this._updateItemCount(), this._shrink(), this.sort(e))
	}, C.prototype.sort = function(t) {
		var e, i;
		this.enabled && (this._resetCols(), e = t || this.lastSort, i = this._getFilteredItems().sorted(e), this._layout(i), this.lastSort = e)
	}, C.prototype.update = function(t) {
		this.enabled && (t || this._setColumns(), this.sort())
	}, C.prototype.layout = function() {
		this.update(!0)
	}, C.prototype.appended = function(t, e, i) {
		this._addItems(t, !0 === e, !1 !== i)
	}, C.prototype.disable = function() {
		this.enabled = !1
	}, C.prototype.enable = function(t) {
		!(this.enabled = !0) !== t && this.update()
	}, C.prototype.remove = function(t) {
		t.length && t.jquery && (this._toggleFilterClasses(d(), t), this._shrink(t), this.sort(), this.$el.one(C.EventType.LAYOUT + "." + v, d.proxy(function() {
			t.remove(), this.$items = this._getItems(), this._updateItemCount(), this._fire(C.EventType.REMOVED, [t, this]), t = null
		}, this)))
	}, C.prototype.destroy = function() {
		_.off("." + this.unique), this.$el.removeClass(v).removeAttr("style").removeData(v), this.$items.removeAttr("style").removeData("point").removeData("scale").removeClass([C.ClassName.CONCEALED, C.ClassName.FILTERED, C.ClassName.SHUFFLE_ITEM].join(" ")), this.$items = null, this.$el = null, this.sizer = null, this.element = null, this._transitions = null, this.destroyed = !0
	}, d.fn.shuffle = function(i) {
		var n = Array.prototype.slice.call(arguments, 1);
		return this.each(function() {
			var t = d(this),
				e = t.data(v);
			e ? "string" == typeof i && e[i] && e[i].apply(e, n) : (e = new C(this, i), t.data(v, e))
		})
	}, d.fn.sorted = function(t) {
		var o = d.extend({}, d.fn.sorted.defaults, t),
			e = this.get(),
			r = !1;
		return e.length ? o.randomize ? function(t) {
			var e, i, n = t.length;
			if (!n) return t;
			for (; --n;) e = t[i = Math.floor(Math.random() * (n + 1))], t[i] = t[n], t[n] = e;
			return t
		}(e) : (d.isFunction(o.by) && e.sort(function(t, e) {
			if (r) return 0;
			var i = o.by(d(t)),
				n = o.by(d(e));
			return i === s && n === s ? (r = !0, 0) : i < n || "sortFirst" === i || "sortLast" === n ? -1 : n < i || "sortLast" === i || "sortFirst" === n ? 1 : 0
		}), r ? this.get() : (o.reverse && e.reverse(), e)) : []
	}, d.fn.sorted.defaults = {
		reverse: !1,
		by: null,
		randomize: !1
	}, C
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
	var i = [],
		u = i.slice,
		m = i.concat,
		a = i.push,
		o = i.indexOf,
		n = {},
		r = n.toString,
		g = n.hasOwnProperty,
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
			i = C.type(t);
		return "function" !== i && !C.isWindow(t) && (!(1 !== t.nodeType || !e) || "array" === i || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
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
		map: function(i) {
			return this.pushStack(C.map(this, function(t, e) {
				return i.call(t, e, t)
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
				i = +t + (t < 0 ? e : 0);
			return this.pushStack(0 <= i && i < e ? [this[i]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: a,
		sort: i.sort,
		splice: i.splice
	}, C.extend = C.fn.extend = function() {
		var t, e, i, n, o, r, s = arguments[0] || {},
			a = 1,
			l = arguments.length,
			c = !1;
		for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || C.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
			if (null != (t = arguments[a]))
				for (e in t) i = s[e], s !== (n = t[e]) && (c && n && (C.isPlainObject(n) || (o = C.isArray(n))) ? (r = o ? (o = !1, i && C.isArray(i) ? i : []) : i && C.isPlainObject(i) ? i : {}, s[e] = C.extend(c, r, n)) : void 0 !== n && (s[e] = n));
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
			return !("object" !== C.type(t) || t.nodeType || C.isWindow(t) || t.constructor && !g.call(t.constructor.prototype, "isPrototypeOf"))
		},
		isEmptyObject: function(t) {
			var e;
			for (e in t) return !1;
			return !0
		},
		type: function(t) {
			return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? n[r.call(t)] || "object" : typeof t
		},
		globalEval: function(t) {
			var e, i = eval;
			(t = C.trim(t)) && (1 === t.indexOf("use strict") ? ((e = y.createElement("script")).text = t, y.head.appendChild(e).parentNode.removeChild(e)) : i(t))
		},
		camelCase: function(t) {
			return t.replace(l, "ms-").replace(c, e)
		},
		nodeName: function(t, e) {
			return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
		},
		each: function(t, e, i) {
			var n = 0,
				o = t.length,
				r = d(t);
			if (i) {
				if (r)
					for (; n < o && !1 !== e.apply(t[n], i); n++);
				else
					for (n in t)
						if (!1 === e.apply(t[n], i)) break
			} else if (r)
				for (; n < o && !1 !== e.call(t[n], n, t[n]); n++);
			else
				for (n in t)
					if (!1 === e.call(t[n], n, t[n])) break;
			return t
		},
		trim: function(t) {
			return null == t ? "" : (t + "").replace(s, "")
		},
		makeArray: function(t, e) {
			var i = e || [];
			return null != t && (d(Object(t)) ? C.merge(i, "string" == typeof t ? [t] : t) : a.call(i, t)), i
		},
		inArray: function(t, e, i) {
			return null == e ? -1 : o.call(e, t, i)
		},
		merge: function(t, e) {
			for (var i = +e.length, n = 0, o = t.length; n < i; n++) t[o++] = e[n];
			return t.length = o, t
		},
		grep: function(t, e, i) {
			for (var n = [], o = 0, r = t.length, s = !i; o < r; o++) !e(t[o], o) != s && n.push(t[o]);
			return n
		},
		map: function(t, e, i) {
			var n, o = 0,
				r = t.length,
				s = [];
			if (d(t))
				for (; o < r; o++) null != (n = e(t[o], o, i)) && s.push(n);
			else
				for (o in t) null != (n = e(t[o], o, i)) && s.push(n);
			return m.apply([], s)
		},
		guid: 1,
		proxy: function(t, e) {
			var i, n, o;
			return "string" == typeof e && (i = t[e], e = t, t = i), C.isFunction(t) ? (n = u.call(arguments, 2), (o = function() {
				return t.apply(e || this, n.concat(u.call(arguments)))
			}).guid = t.guid = t.guid || C.guid++, o) : void 0
		},
		now: Date.now,
		support: v
	}), C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
		n["[object " + e + "]"] = e.toLowerCase()
	});
	var h = function(i) {
		function d(t, e, i) {
			var n = "0x" + e - 65536;
			return n != n || i ? e : n < 0 ? String.fromCharCode(65536 + n) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
		}

		function n() {
			v()
		}
		var t, f, w, r, o, m, h, g, x, c, u, v, _, s, y, b, a, p, C, T = "sizzle" + +new Date,
			E = i.document,
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
			R = e.push,
			j = e.slice,
			N = function(t, e) {
				for (var i = 0, n = t.length; i < n; i++)
					if (t[i] === e) return i;
				return -1
			},
			W = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			F = "[\\x20\\t\\r\\n\\f]",
			P = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			M = P.replace("w", "w#"),
			$ = "\\[" + F + "*(" + P + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + F + "*\\]",
			H = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
			B = new RegExp(F + "+", "g"),
			q = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
			Y = new RegExp("^" + F + "*," + F + "*"),
			X = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
			U = new RegExp("=" + F + "*([^\\]'\"]*?)" + F + "*\\]", "g"),
			Q = new RegExp(H),
			V = new RegExp("^" + M + "$"),
			K = {
				ID: new RegExp("^#(" + P + ")"),
				CLASS: new RegExp("^\\.(" + P + ")"),
				TAG: new RegExp("^(" + P.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + $),
				PSEUDO: new RegExp("^" + H),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + W + ")$", "i"),
				needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
			},
			Z = /^(?:input|select|textarea|button)$/i,
			G = /^h\d$/i,
			J = /^[^{]+\{\s*\[native \w/,
			tt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			et = /[+~]/,
			it = /'|\\/g,
			nt = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig");
		try {
			R.apply(e = j.call(E.childNodes), E.childNodes), e[E.childNodes.length].nodeType
		} catch (t) {
			R = {
				apply: e.length ? function(t, e) {
					A.apply(t, j.call(e))
				} : function(t, e) {
					for (var i = t.length, n = 0; t[i++] = e[n++];);
					t.length = i - 1
				}
			}
		}

		function ot(t, e, i, n) {
			var o, r, s, a, l, c, u, d, h, p;
			if ((e ? e.ownerDocument || e : E) !== _ && v(e), i = i || [], a = (e = e || _).nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return i;
			if (!n && y) {
				if (11 !== a && (o = tt.exec(t)))
					if (s = o[1]) {
						if (9 === a) {
							if (!(r = e.getElementById(s)) || !r.parentNode) return i;
							if (r.id === s) return i.push(r), i
						} else if (e.ownerDocument && (r = e.ownerDocument.getElementById(s)) && C(e, r) && r.id === s) return i.push(r), i
					} else {
						if (o[2]) return R.apply(i, e.getElementsByTagName(t)), i;
						if ((s = o[3]) && f.getElementsByClassName) return R.apply(i, e.getElementsByClassName(s)), i
					} if (f.qsa && (!b || !b.test(t))) {
					if (d = u = T, h = e, p = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
						for (c = m(t), (u = e.getAttribute("id")) ? d = u.replace(it, "\\$&") : e.setAttribute("id", d), d = "[id='" + d + "'] ", l = c.length; l--;) c[l] = d + pt(c[l]);
						h = et.test(t) && dt(e.parentNode) || e, p = c.join(",")
					}
					if (p) try {
						return R.apply(i, h.querySelectorAll(p)), i
					} catch (t) {} finally {
						u || e.removeAttribute("id")
					}
				}
			}
			return g(t.replace(q, "$1"), e, i, n)
		}

		function rt() {
			var n = [];
			return function t(e, i) {
				return n.push(e + " ") > w.cacheLength && delete t[n.shift()], t[e + " "] = i
			}
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
			for (var i = t.split("|"), n = t.length; n--;) w.attrHandle[i[n]] = e
		}

		function ct(t, e) {
			var i = e && t,
				n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || 1 << 31) - (~t.sourceIndex || 1 << 31);
			if (n) return n;
			if (i)
				for (; i = i.nextSibling;)
					if (i === e) return -1;
			return t ? 1 : -1
		}

		function ut(s) {
			return st(function(r) {
				return r = +r, st(function(t, e) {
					for (var i, n = s([], t.length, r), o = n.length; o--;) t[i = n[o]] && (t[i] = !(e[i] = t[i]))
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
				var e, i, l = t ? t.ownerDocument || t : E;
				return l !== _ && 9 === l.nodeType && l.documentElement ? (s = (_ = l).documentElement, (i = l.defaultView) && i !== i.top && (i.addEventListener ? i.addEventListener("unload", n, !1) : i.attachEvent && i.attachEvent("onunload", n)), y = !o(l), f.attributes = at(function(t) {
					return t.className = "i", !t.getAttribute("className")
				}), f.getElementsByTagName = at(function(t) {
					return t.appendChild(l.createComment("")), !t.getElementsByTagName("*").length
				}), f.getElementsByClassName = J.test(l.getElementsByClassName), f.getById = at(function(t) {
					return s.appendChild(t).id = T, !l.getElementsByName || !l.getElementsByName(T).length
				}), f.getById ? (w.find.ID = function(t, e) {
					if (void 0 !== e.getElementById && y) {
						var i = e.getElementById(t);
						return i && i.parentNode ? [i] : []
					}
				}, w.filter.ID = function(t) {
					var e = t.replace(nt, d);
					return function(t) {
						return t.getAttribute("id") === e
					}
				}) : (delete w.find.ID, w.filter.ID = function(t) {
					var i = t.replace(nt, d);
					return function(t) {
						var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
						return e && e.value === i
					}
				}), w.find.TAG = f.getElementsByTagName ? function(t, e) {
					return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : f.qsa ? e.querySelectorAll(t) : void 0
				} : function(t, e) {
					var i, n = [],
						o = 0,
						r = e.getElementsByTagName(t);
					if ("*" !== t) return r;
					for (; i = r[o++];) 1 === i.nodeType && n.push(i);
					return n
				}, w.find.CLASS = f.getElementsByClassName && function(t, e) {
					return y ? e.getElementsByClassName(t) : void 0
				}, a = [], b = [], (f.qsa = J.test(l.querySelectorAll)) && (at(function(t) {
					s.appendChild(t).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && b.push("[*^$]=" + F + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || b.push("\\[" + F + "*(?:value|" + W + ")"), t.querySelectorAll("[id~=" + T + "-]").length || b.push("~="), t.querySelectorAll(":checked").length || b.push(":checked"), t.querySelectorAll("a#" + T + "+*").length || b.push(".#.+[+~]")
				}), at(function(t) {
					var e = l.createElement("input");
					e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && b.push("name" + F + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || b.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), b.push(",.*:")
				})), (f.matchesSelector = J.test(p = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && at(function(t) {
					f.disconnectedMatch = p.call(t, "div"), p.call(t, "[s!='']:x"), a.push("!=", H)
				}), b = b.length && new RegExp(b.join("|")), a = a.length && new RegExp(a.join("|")), e = J.test(s.compareDocumentPosition), C = e || J.test(s.contains) ? function(t, e) {
					var i = 9 === t.nodeType ? t.documentElement : t,
						n = e && e.parentNode;
					return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
				} : function(t, e) {
					if (e)
						for (; e = e.parentNode;)
							if (e === t) return !0;
					return !1
				}, D = e ? function(t, e) {
					if (t === e) return u = !0, 0;
					var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
					return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !f.sortDetached && e.compareDocumentPosition(t) === i ? t === l || t.ownerDocument === E && C(E, t) ? -1 : e === l || e.ownerDocument === E && C(E, e) ? 1 : c ? N(c, t) - N(c, e) : 0 : 4 & i ? -1 : 1)
				} : function(t, e) {
					if (t === e) return u = !0, 0;
					var i, n = 0,
						o = t.parentNode,
						r = e.parentNode,
						s = [t],
						a = [e];
					if (!o || !r) return t === l ? -1 : e === l ? 1 : o ? -1 : r ? 1 : c ? N(c, t) - N(c, e) : 0;
					if (o === r) return ct(t, e);
					for (i = t; i = i.parentNode;) s.unshift(i);
					for (i = e; i = i.parentNode;) a.unshift(i);
					for (; s[n] === a[n];) n++;
					return n ? ct(s[n], a[n]) : s[n] === E ? -1 : a[n] === E ? 1 : 0
				}, l) : _
			}, ot.matches = function(t, e) {
				return ot(t, null, null, e)
			}, ot.matchesSelector = function(t, e) {
				if ((t.ownerDocument || t) !== _ && v(t), e = e.replace(U, "='$1']"), !(!f.matchesSelector || !y || a && a.test(e) || b && b.test(e))) try {
					var i = p.call(t, e);
					if (i || f.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
				} catch (t) {}
				return 0 < ot(e, _, null, [t]).length
			}, ot.contains = function(t, e) {
				return (t.ownerDocument || t) !== _ && v(t), C(t, e)
			}, ot.attr = function(t, e) {
				(t.ownerDocument || t) !== _ && v(t);
				var i = w.attrHandle[e.toLowerCase()],
					n = i && z.call(w.attrHandle, e.toLowerCase()) ? i(t, e, !y) : void 0;
				return void 0 !== n ? n : f.attributes || !y ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
			}, ot.error = function(t) {
				throw new Error("Syntax error, unrecognized expression: " + t)
			}, ot.uniqueSort = function(t) {
				var e, i = [],
					n = 0,
					o = 0;
				if (u = !f.detectDuplicates, c = !f.sortStable && t.slice(0), t.sort(D), u) {
					for (; e = t[o++];) e === t[o] && (n = i.push(o));
					for (; n--;) t.splice(i[n], 1)
				}
				return c = null, t
			}, r = ot.getText = function(t) {
				var e, i = "",
					n = 0,
					o = t.nodeType;
				if (o) {
					if (1 === o || 9 === o || 11 === o) {
						if ("string" == typeof t.textContent) return t.textContent;
						for (t = t.firstChild; t; t = t.nextSibling) i += r(t)
					} else if (3 === o || 4 === o) return t.nodeValue
				} else
					for (; e = t[n++];) i += r(e);
				return i
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
						return t[1] = t[1].replace(nt, d), t[3] = (t[3] || t[4] || t[5] || "").replace(nt, d), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
					},
					CHILD: function(t) {
						return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t
					},
					PSEUDO: function(t) {
						var e, i = !t[6] && t[2];
						return K.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && Q.test(i) && (e = m(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
					}
				},
				filter: {
					TAG: function(t) {
						var e = t.replace(nt, d).toLowerCase();
						return "*" === t ? function() {
							return !0
						} : function(t) {
							return t.nodeName && t.nodeName.toLowerCase() === e
						}
					},
					CLASS: function(t) {
						var e = l[t + " "];
						return e || (e = new RegExp("(^|" + F + ")" + t + "(" + F + "|$)")) && l(t, function(t) {
							return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
						})
					},
					ATTR: function(i, n, o) {
						return function(t) {
							var e = ot.attr(t, i);
							return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === o : "!=" === n ? e !== o : "^=" === n ? o && 0 === e.indexOf(o) : "*=" === n ? o && -1 < e.indexOf(o) : "$=" === n ? o && e.slice(-o.length) === o : "~=" === n ? -1 < (" " + e.replace(B, " ") + " ").indexOf(o) : "|=" === n && (e === o || e.slice(0, o.length + 1) === o + "-"))
						}
					},
					CHILD: function(p, t, e, f, m) {
						var g = "nth" !== p.slice(0, 3),
							v = "last" !== p.slice(-4),
							y = "of-type" === t;
						return 1 === f && 0 === m ? function(t) {
							return !!t.parentNode
						} : function(t, e, i) {
							var n, o, r, s, a, l, c = g != v ? "nextSibling" : "previousSibling",
								u = t.parentNode,
								d = y && t.nodeName.toLowerCase(),
								h = !i && !y;
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
									for (a = (n = (o = u[T] || (u[T] = {}))[p] || [])[0] === S && n[1], s = n[0] === S && n[2], r = a && u.childNodes[a]; r = ++a && r && r[c] || (s = a = 0) || l.pop();)
										if (1 === r.nodeType && ++s && r === t) {
											o[p] = [S, a, s];
											break
										}
								} else if (h && (n = (t[T] || (t[T] = {}))[p]) && n[0] === S) s = n[1];
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
							for (var i, n = s(t, r), o = n.length; o--;) t[i = N(t, n[o])] = !(e[i] = n[o])
						}) : function(t) {
							return s(t, 0, e)
						}) : s
					}
				},
				pseudos: {
					not: st(function(t) {
						var n = [],
							o = [],
							a = h(t.replace(q, "$1"));
						return a[T] ? st(function(t, e, i, n) {
							for (var o, r = a(t, null, n, []), s = t.length; s--;)(o = r[s]) && (t[s] = !(e[s] = o))
						}) : function(t, e, i) {
							return n[0] = t, a(n, null, i, o), n[0] = null, !o.pop()
						}
					}),
					has: st(function(e) {
						return function(t) {
							return 0 < ot(e, t).length
						}
					}),
					contains: st(function(e) {
						return e = e.replace(nt, d),
							function(t) {
								return -1 < (t.textContent || t.innerText || r(t)).indexOf(e)
							}
					}),
					lang: st(function(i) {
						return V.test(i || "") || ot.error("unsupported lang: " + i), i = i.replace(nt, d).toLowerCase(),
							function(t) {
								var e;
								do {
									if (e = y ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === i || 0 === e.indexOf(i + "-")
								} while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
					}),
					target: function(t) {
						var e = i.location && i.location.hash;
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
					eq: ut(function(t, e, i) {
						return [i < 0 ? i + e : i]
					}),
					even: ut(function(t, e) {
						for (var i = 0; i < e; i += 2) t.push(i);
						return t
					}),
					odd: ut(function(t, e) {
						for (var i = 1; i < e; i += 2) t.push(i);
						return t
					}),
					lt: ut(function(t, e, i) {
						for (var n = i < 0 ? i + e : i; 0 <= --n;) t.push(n);
						return t
					}),
					gt: ut(function(t, e, i) {
						for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
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
			}) w.pseudos[t] = function(i) {
			return function(t) {
				var e = t.nodeName.toLowerCase();
				return ("input" === e || "button" === e) && t.type === i
			}
		}(t);

		function ht() {}

		function pt(t) {
			for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
			return n
		}

		function ft(s, t, e) {
			var a = t.dir,
				l = e && "parentNode" === a,
				c = k++;
			return t.first ? function(t, e, i) {
				for (; t = t[a];)
					if (1 === t.nodeType || l) return s(t, e, i)
			} : function(t, e, i) {
				var n, o, r = [S, c];
				if (i) {
					for (; t = t[a];)
						if ((1 === t.nodeType || l) && s(t, e, i)) return !0
				} else
					for (; t = t[a];)
						if (1 === t.nodeType || l) {
							if ((n = (o = t[T] || (t[T] = {}))[a]) && n[0] === S && n[1] === c) return r[2] = n[2];
							if ((o[a] = r)[2] = s(t, e, i)) return !0
						}
			}
		}

		function mt(o) {
			return 1 < o.length ? function(t, e, i) {
				for (var n = o.length; n--;)
					if (!o[n](t, e, i)) return !1;
				return !0
			} : o[0]
		}

		function gt(t, e, i, n, o) {
			for (var r, s = [], a = 0, l = t.length, c = null != e; a < l; a++) !(r = t[a]) || i && !i(r, n, o) || (s.push(r), c && e.push(a));
			return s
		}
		return ht.prototype = w.filters = w.pseudos, w.setFilters = new ht, m = ot.tokenize = function(t, e) {
			var i, n, o, r, s, a, l, c = L[t + " "];
			if (c) return e ? 0 : c.slice(0);
			for (s = t, a = [], l = w.preFilter; s;) {
				for (r in i && !(n = Y.exec(s)) || (n && (s = s.slice(n[0].length) || s), a.push(o = [])), i = !1, (n = X.exec(s)) && (i = n.shift(), o.push({
						value: i,
						type: n[0].replace(q, " ")
					}), s = s.slice(i.length)), w.filter) !(n = K[r].exec(s)) || l[r] && !(n = l[r](n)) || (i = n.shift(), o.push({
					value: i,
					type: r,
					matches: n
				}), s = s.slice(i.length));
				if (!i) break
			}
			return e ? s.length : s ? ot.error(t) : L(t, a).slice(0)
		}, h = ot.compile = function(t, e) {
			var i, g, v, y, b, n = [],
				o = [],
				r = I[t + " "];
			if (!r) {
				for (i = (e = e || m(t)).length; i--;)(r = function t(e) {
					for (var o, i, n, r = e.length, s = w.relative[e[0].type], a = s || w.relative[" "], l = s ? 1 : 0, c = ft(function(t) {
							return t === o
						}, a, !0), u = ft(function(t) {
							return -1 < N(o, t)
						}, a, !0), d = [function(t, e, i) {
							var n = !s && (i || e !== x) || ((o = e).nodeType ? c : u)(t, e, i);
							return o = null, n
						}]; l < r; l++)
						if (i = w.relative[e[l].type]) d = [ft(mt(d), i)];
						else {
							if ((i = w.filter[e[l].type].apply(null, e[l].matches))[T]) {
								for (n = ++l; n < r && !w.relative[e[n].type]; n++);
								return function t(p, f, m, g, v, e) {
									return g && !g[T] && (g = t(g)), v && !v[T] && (v = t(v, e)), st(function(t, e, i, n) {
										var o, r, s, a = [],
											l = [],
											c = e.length,
											u = t || function(t, e, i) {
												for (var n = 0, o = e.length; n < o; n++) ot(t, e[n], i);
												return i
											}(f || "*", i.nodeType ? [i] : i, []),
											d = !p || !t && f ? u : gt(u, a, p, i, n),
											h = m ? v || (t ? p : c || g) ? [] : e : d;
										if (m && m(d, h, i, n), g)
											for (o = gt(h, l), g(o, [], i, n), r = o.length; r--;)(s = o[r]) && (h[l[r]] = !(d[l[r]] = s));
										if (t) {
											if (v || p) {
												if (v) {
													for (o = [], r = h.length; r--;)(s = h[r]) && o.push(d[r] = s);
													v(null, h = [], o, n)
												}
												for (r = h.length; r--;)(s = h[r]) && -1 < (o = v ? N(t, s) : a[r]) && (t[o] = !(e[o] = s))
											}
										} else h = gt(h === e ? h.splice(c, h.length) : h), v ? v(null, e, h, n) : R.apply(e, h)
									})
								}(1 < l && mt(d), 1 < l && pt(e.slice(0, l - 1).concat({
									value: " " === e[l - 2].type ? "*" : ""
								})).replace(q, "$1"), i, l < n && t(e.slice(l, n)), n < r && t(e = e.slice(n)), n < r && pt(e))
							}
							d.push(i)
						} return mt(d)
				}(e[i]))[T] ? n.push(r) : o.push(r);
				(r = I(t, (g = o, y = 0 < (v = n).length, b = 0 < g.length, y ? st(s) : s))).selector = t
			}

			function s(t, e, i, n, o) {
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
							if (a(r, e, i)) {
								n.push(r);
								break
							} o && (S = f)
					}
					y && ((r = !a && r) && l--, t && u.push(r))
				}
				if (l += c, y && c !== l) {
					for (s = 0; a = v[s++];) a(u, d, e, i);
					if (t) {
						if (0 < l)
							for (; c--;) u[c] || d[c] || (d[c] = O.call(n));
						d = gt(d)
					}
					R.apply(n, d), o && !t && 0 < d.length && 1 < l + v.length && ot.uniqueSort(n)
				}
				return o && (S = f, x = h), u
			}
			return r
		}, g = ot.select = function(t, e, i, n) {
			var o, r, s, a, l, c = "function" == typeof t && t,
				u = !n && m(t = c.selector || t);
			if (i = i || [], 1 === u.length) {
				if (2 < (r = u[0] = u[0].slice(0)).length && "ID" === (s = r[0]).type && f.getById && 9 === e.nodeType && y && w.relative[r[1].type]) {
					if (!(e = (w.find.ID(s.matches[0].replace(nt, d), e) || [])[0])) return i;
					c && (e = e.parentNode), t = t.slice(r.shift().value.length)
				}
				for (o = K.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !w.relative[a = s.type]);)
					if ((l = w.find[a]) && (n = l(s.matches[0].replace(nt, d), et.test(r[0].type) && dt(e.parentNode) || e))) {
						if (r.splice(o, 1), !(t = n.length && pt(r))) return R.apply(i, n), i;
						break
					}
			}
			return (c || h(t, u))(n, e, !y, i, et.test(t) && dt(e.parentNode) || e), i
		}, f.sortStable = T.split("").sort(D).join("") === T, f.detectDuplicates = !!u, v(), f.sortDetached = at(function(t) {
			return 1 & t.compareDocumentPosition(_.createElement("div"))
		}), at(function(t) {
			return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
		}) || lt("type|href|height|width", function(t, e, i) {
			return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
		}), f.attributes && at(function(t) {
			return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
		}) || lt("value", function(t, e, i) {
			return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
		}), at(function(t) {
			return null == t.getAttribute("disabled")
		}) || lt(W, function(t, e, i) {
			var n;
			return i ? void 0 : !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
		}), ot
	}(f);
	C.find = h, C.expr = h.selectors, C.expr[":"] = C.expr.pseudos, C.unique = h.uniqueSort, C.text = h.getText, C.isXMLDoc = h.isXML, C.contains = h.contains;
	var p = C.expr.match.needsContext,
		b = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		w = /^.[^:#\[\.,]*$/;

	function x(t, i, n) {
		if (C.isFunction(i)) return C.grep(t, function(t, e) {
			return !!i.call(t, e, t) !== n
		});
		if (i.nodeType) return C.grep(t, function(t) {
			return t === i !== n
		});
		if ("string" == typeof i) {
			if (w.test(i)) return C.filter(i, t, n);
			i = C.filter(i, t)
		}
		return C.grep(t, function(t) {
			return 0 <= o.call(i, t) !== n
		})
	}
	C.filter = function(t, e, i) {
		var n = e[0];
		return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? C.find.matchesSelector(n, t) ? [n] : [] : C.find.matches(t, C.grep(e, function(t) {
			return 1 === t.nodeType
		}))
	}, C.fn.extend({
		find: function(t) {
			var e, i = this.length,
				n = [],
				o = this;
			if ("string" != typeof t) return this.pushStack(C(t).filter(function() {
				for (e = 0; e < i; e++)
					if (C.contains(o[e], this)) return !0
			}));
			for (e = 0; e < i; e++) C.find(t, o[e], n);
			return (n = this.pushStack(1 < i ? C.unique(n) : n)).selector = this.selector ? this.selector + " " + t : t, n
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
		var i, n;
		if (!t) return this;
		if ("string" != typeof t) return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : C.isFunction(t) ? void 0 !== _.ready ? _.ready(t) : t(C) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), C.makeArray(t, this));
		if (!(i = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : T.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || _).find(t) : this.constructor(e).find(t);
		if (i[1]) {
			if (e = e instanceof C ? e[0] : e, C.merge(this, C.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : y, !0)), b.test(i[1]) && C.isPlainObject(e))
				for (i in e) C.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
			return this
		}
		return (n = y.getElementById(i[2])) && n.parentNode && (this.length = 1, this[0] = n), this.context = y, this.selector = t, this
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
		dir: function(t, e, i) {
			for (var n = [], o = void 0 !== i;
				(t = t[e]) && 9 !== t.nodeType;)
				if (1 === t.nodeType) {
					if (o && C(t).is(i)) break;
					n.push(t)
				} return n
		},
		sibling: function(t, e) {
			for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
			return i
		}
	}), C.fn.extend({
		has: function(t) {
			var e = C(t, this),
				i = e.length;
			return this.filter(function() {
				for (var t = 0; t < i; t++)
					if (C.contains(this, e[t])) return !0
			})
		},
		closest: function(t, e) {
			for (var i, n = 0, o = this.length, r = [], s = p.test(t) || "string" != typeof t ? C(t, e || this.context) : 0; n < o; n++)
				for (i = this[n]; i && i !== e; i = i.parentNode)
					if (i.nodeType < 11 && (s ? -1 < s.index(i) : 1 === i.nodeType && C.find.matchesSelector(i, t))) {
						r.push(i);
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
		parentsUntil: function(t, e, i) {
			return C.dir(t, "parentNode", i)
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
		nextUntil: function(t, e, i) {
			return C.dir(t, "nextSibling", i)
		},
		prevUntil: function(t, e, i) {
			return C.dir(t, "previousSibling", i)
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
	}, function(n, o) {
		C.fn[n] = function(t, e) {
			var i = C.map(this, o, t);
			return "Until" !== n.slice(-5) && (e = t), e && "string" == typeof e && (i = C.filter(e, i)), 1 < this.length && (S[n] || C.unique(i), E.test(n) && i.reverse()), this.pushStack(i)
		}
	});
	var L, I = /\S+/g,
		D = {};

	function z() {
		y.removeEventListener("DOMContentLoaded", z, !1), f.removeEventListener("load", z, !1), C.ready()
	}
	C.Callbacks = function(o) {
		var i;
		o = "string" == typeof o ? D[o] || (i = D[o] = {}, C.each(o.match(I) || [], function(t, e) {
			i[e] = !0
		}), i) : C.extend({}, o);
		var e, n, r, s, a, l, c = [],
			u = !o.once && [],
			d = function(t) {
				for (e = o.memory && t, n = !0, l = s || 0, s = 0, a = c.length, r = !0; c && l < a; l++)
					if (!1 === c[l].apply(t[0], t[1]) && o.stopOnFalse) {
						e = !1;
						break
					} r = !1, c && (u ? u.length && d(u.shift()) : e ? c = [] : h.disable())
			},
			h = {
				add: function() {
					var t;
					return c && (t = c.length, function n(t) {
						C.each(t, function(t, e) {
							var i = C.type(e);
							"function" === i ? o.unique && h.has(e) || c.push(e) : e && e.length && "string" !== i && n(e)
						})
					}(arguments), r ? a = c.length : e && (s = t, d(e))), this
				},
				remove: function() {
					return c && C.each(arguments, function(t, e) {
						for (var i; - 1 < (i = C.inArray(e, c, i));) c.splice(i, 1), r && (i <= a && a--, i <= l && l--)
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
					return !c || n && !u || (e = [t, (e = e || []).slice ? e.slice() : e], r ? u.push(e) : d(e)), this
				},
				fire: function() {
					return h.fireWith(this, arguments), this
				},
				fired: function() {
					return !!n
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
						return C.Deferred(function(n) {
							C.each(r, function(t, e) {
								var i = C.isFunction(o[t]) && o[t];
								a[e[1]](function() {
									var t = i && i.apply(this, arguments);
									t && C.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[e[0] + "With"](this === s ? n.promise() : this, i ? [t] : arguments)
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
				var i = e[2],
					n = e[3];
				s[e[1]] = i.add, n && i.add(function() {
					o = n
				}, r[1 ^ t][2].disable, r[2][2].lock), a[e[0]] = function() {
					return a[e[0] + "With"](this === a ? s : this, arguments), this
				}, a[e[0] + "With"] = i.fireWith
			}), s.promise(a), t && t.call(a, a), a
		},
		when: function(t) {
			function e(e, i, n) {
				return function(t) {
					i[e] = this, n[e] = 1 < arguments.length ? u.call(arguments) : t, n === o ? c.notifyWith(i, n) : --l || c.resolveWith(i, n)
				}
			}
			var o, i, n, r = 0,
				s = u.call(arguments),
				a = s.length,
				l = 1 !== a || t && C.isFunction(t.promise) ? a : 0,
				c = 1 === l ? t : C.Deferred();
			if (1 < a)
				for (o = new Array(a), i = new Array(a), n = new Array(a); r < a; r++) s[r] && C.isFunction(s[r].promise) ? s[r].promise().done(e(r, n, s)).fail(c.reject).progress(e(r, i, o)) : --l;
			return l || c.resolveWith(n, s), c.promise()
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
			(!0 === t ? --C.readyWait : C.isReady) || (C.isReady = !0) !== t && 0 < --C.readyWait || (L.resolveWith(y, [C]), C.fn.triggerHandler && (C(y).triggerHandler("ready"), C(y).off("ready")))
		}
	}), C.ready.promise = function(t) {
		return L || (L = C.Deferred(), "complete" === y.readyState ? setTimeout(C.ready) : (y.addEventListener("DOMContentLoaded", z, !1), f.addEventListener("load", z, !1))), L.promise(t)
	}, C.ready.promise();
	var O = C.access = function(t, e, i, n, o, r, s) {
		var a = 0,
			l = t.length,
			c = null == i;
		if ("object" === C.type(i))
			for (a in o = !0, i) C.access(t, e, a, i[a], !0, r, s);
		else if (void 0 !== n && (o = !0, C.isFunction(n) || (s = !0), c && (e = s ? (e.call(t, n), null) : (c = e, function(t, e, i) {
				return c.call(C(t), i)
			})), e))
			for (; a < l; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
		return o ? t : c ? e.call(t) : l ? e(t[0], i) : r
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
			var i = {},
				n = e[this.expando];
			if (!n) {
				n = A.uid++;
				try {
					i[this.expando] = {
						value: n
					}, Object.defineProperties(e, i)
				} catch (t) {
					i[this.expando] = n, C.extend(e, i)
				}
			}
			return this.cache[n] || (this.cache[n] = {}), n
		},
		set: function(t, e, i) {
			var n, o = this.key(t),
				r = this.cache[o];
			if ("string" == typeof e) r[e] = i;
			else if (C.isEmptyObject(r)) C.extend(this.cache[o], e);
			else
				for (n in e) r[n] = e[n];
			return r
		},
		get: function(t, e) {
			var i = this.cache[this.key(t)];
			return void 0 === e ? i : i[e]
		},
		access: function(t, e, i) {
			var n;
			return void 0 === e || e && "string" == typeof e && void 0 === i ? void 0 !== (n = this.get(t, e)) ? n : this.get(t, C.camelCase(e)) : (this.set(t, e, i), void 0 !== i ? i : e)
		},
		remove: function(t, e) {
			var i, n, o, r = this.key(t),
				s = this.cache[r];
			if (void 0 === e) this.cache[r] = {};
			else {
				i = (n = C.isArray(e) ? e.concat(e.map(C.camelCase)) : (o = C.camelCase(e), e in s ? [e, o] : (n = o) in s ? [n] : n.match(I) || [])).length;
				for (; i--;) delete s[n[i]]
			}
		},
		hasData: function(t) {
			return !C.isEmptyObject(this.cache[t[this.expando]] || {})
		},
		discard: function(t) {
			t[this.expando] && delete this.cache[t[this.expando]]
		}
	};
	var R = new A,
		j = new A,
		N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		W = /([A-Z])/g;

	function F(t, e, i) {
		var n;
		if (void 0 === i && 1 === t.nodeType)
			if (n = "data-" + e.replace(W, "-$1").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) {
				try {
					i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : N.test(i) ? C.parseJSON(i) : i)
				} catch (t) {}
				j.set(t, e, i)
			} else i = void 0;
		return i
	}

	function P(t, e) {
		return t = e || t, "none" === C.css(t, "display") || !C.contains(t.ownerDocument, t)
	}
	C.extend({
		hasData: function(t) {
			return j.hasData(t) || R.hasData(t)
		},
		data: function(t, e, i) {
			return j.access(t, e, i)
		},
		removeData: function(t, e) {
			j.remove(t, e)
		},
		_data: function(t, e, i) {
			return R.access(t, e, i)
		},
		_removeData: function(t, e) {
			R.remove(t, e)
		}
	}), C.fn.extend({
		data: function(n, t) {
			var e, i, o, r = this[0],
				s = r && r.attributes;
			if (void 0 !== n) return "object" == typeof n ? this.each(function() {
				j.set(this, n)
			}) : O(this, function(e) {
				var t, i = C.camelCase(n);
				if (r && void 0 === e) {
					if (void 0 !== (t = j.get(r, n))) return t;
					if (void 0 !== (t = j.get(r, i))) return t;
					if (void 0 !== (t = F(r, i, void 0))) return t
				} else this.each(function() {
					var t = j.get(this, i);
					j.set(this, i, e), -1 !== n.indexOf("-") && void 0 !== t && j.set(this, n, e)
				})
			}, null, t, 1 < arguments.length, null, !0);
			if (this.length && (o = j.get(r), 1 === r.nodeType && !R.get(r, "hasDataAttrs"))) {
				for (e = s.length; e--;) s[e] && 0 === (i = s[e].name).indexOf("data-") && (i = C.camelCase(i.slice(5)), F(r, i, o[i]));
				R.set(r, "hasDataAttrs", !0)
			}
			return o
		},
		removeData: function(t) {
			return this.each(function() {
				j.remove(this, t)
			})
		}
	}), C.extend({
		queue: function(t, e, i) {
			var n;
			return t ? (e = (e || "fx") + "queue", n = R.get(t, e), i && (!n || C.isArray(i) ? n = R.access(t, e, C.makeArray(i)) : n.push(i)), n || []) : void 0
		},
		dequeue: function(t, e) {
			e = e || "fx";
			var i = C.queue(t, e),
				n = i.length,
				o = i.shift(),
				r = C._queueHooks(t, e);
			"inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete r.stop, o.call(t, function() {
				C.dequeue(t, e)
			}, r)), !n && r && r.empty.fire()
		},
		_queueHooks: function(t, e) {
			var i = e + "queueHooks";
			return R.get(t, i) || R.access(t, i, {
				empty: C.Callbacks("once memory").add(function() {
					R.remove(t, [e + "queue", i])
				})
			})
		}
	}), C.fn.extend({
		queue: function(e, i) {
			var t = 2;
			return "string" != typeof e && (i = e, e = "fx", t--), arguments.length < t ? C.queue(this[0], e) : void 0 === i ? this : this.each(function() {
				var t = C.queue(this, e, i);
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
			function i() {
				--o || r.resolveWith(s, [s])
			}
			var n, o = 1,
				r = C.Deferred(),
				s = this,
				a = this.length;
			for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(n = R.get(s[a], t + "queueHooks")) && n.empty && (o++, n.empty.add(i));
			return i(), r.promise(e)
		}
	});
	var M, $ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		H = ["Top", "Right", "Bottom", "Left"],
		B = /^(?:checkbox|radio)$/i,
		q = y.createDocumentFragment().appendChild(y.createElement("div"));
	(M = y.createElement("input")).setAttribute("type", "radio"), M.setAttribute("checked", "checked"), M.setAttribute("name", "t"), q.appendChild(M), v.checkClone = q.cloneNode(!0).cloneNode(!0).lastChild.checked, q.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!q.cloneNode(!0).lastChild.defaultValue;
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
		add: function(e, t, i, n, o) {
			var r, s, a, l, c, u, d, h, p, f, m, g = R.get(e);
			if (g)
				for (i.handler && (i = (r = i).handler, o = r.selector), i.guid || (i.guid = C.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(t) {
						return typeof C != Y && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0
					}), c = (t = (t || "").match(I) || [""]).length; c--;) p = m = (a = V.exec(t[c]) || [])[1], f = (a[2] || "").split(".").sort(), p && (d = C.event.special[p] || {}, p = (o ? d.delegateType : d.bindType) || p, d = C.event.special[p] || {}, u = C.extend({
					type: p,
					origType: m,
					data: n,
					handler: i,
					guid: i.guid,
					selector: o,
					needsContext: o && C.expr.match.needsContext.test(o),
					namespace: f.join(".")
				}, r), (h = l[p]) || ((h = l[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, n, f, s) || e.addEventListener && e.addEventListener(p, s, !1)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = i.guid)), o ? h.splice(h.delegateCount++, 0, u) : h.push(u), C.event.global[p] = !0)
		},
		remove: function(t, e, i, n, o) {
			var r, s, a, l, c, u, d, h, p, f, m, g = R.hasData(t) && R.get(t);
			if (g && (l = g.events)) {
				for (c = (e = (e || "").match(I) || [""]).length; c--;)
					if (p = m = (a = V.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
						for (d = C.event.special[p] || {}, h = l[p = (n ? d.delegateType : d.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = h.length; r--;) u = h[r], !o && m !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (h.splice(r, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(t, u));
						s && !h.length && (d.teardown && !1 !== d.teardown.call(t, f, g.handle) || C.removeEvent(t, p, g.handle), delete l[p])
					} else
						for (p in l) C.event.remove(t, p + e[c], i, n, !0);
				C.isEmptyObject(l) && (delete g.handle, R.remove(t, "events"))
			}
		},
		trigger: function(t, e, i, n) {
			var o, r, s, a, l, c, u = [i || y],
				d = g.call(t, "type") ? t.type : t,
				h = g.call(t, "namespace") ? t.namespace.split(".") : [],
				p = r = i = i || y;
			if (3 !== i.nodeType && 8 !== i.nodeType && !Q.test(d + C.event.triggered) && (0 <= d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), a = d.indexOf(":") < 0 && "on" + d, (t = t[C.expando] ? t : new C.Event(d, "object" == typeof t && t)).isTrigger = n ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : C.makeArray(e, [t]), c = C.event.special[d] || {}, n || !c.trigger || !1 !== c.trigger.apply(i, e))) {
				if (!n && !c.noBubble && !C.isWindow(i)) {
					for (s = c.delegateType || d, Q.test(s + d) || (p = p.parentNode); p; p = p.parentNode) u.push(p), r = p;
					r === (i.ownerDocument || y) && u.push(r.defaultView || r.parentWindow || f)
				}
				for (o = 0;
					(p = u[o++]) && !t.isPropagationStopped();) t.type = 1 < o ? s : c.bindType || d, (l = (R.get(p, "events") || {})[t.type] && R.get(p, "handle")) && l.apply(p, e), (l = a && p[a]) && l.apply && C.acceptData(p) && (t.result = l.apply(p, e), !1 === t.result && t.preventDefault());
				return t.type = d, n || t.isDefaultPrevented() || c._default && !1 !== c._default.apply(u.pop(), e) || !C.acceptData(i) || a && C.isFunction(i[d]) && !C.isWindow(i) && ((r = i[a]) && (i[a] = null), i[C.event.triggered = d](), C.event.triggered = void 0, r && (i[a] = r)), t.result
			}
		},
		dispatch: function(t) {
			t = C.event.fix(t);
			var e, i, n, o, r, s = [],
				a = u.call(arguments),
				l = (R.get(this, "events") || {})[t.type] || [],
				c = C.event.special[t.type] || {};
			if ((a[0] = t).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
				for (s = C.event.handlers.call(this, t, l), e = 0;
					(o = s[e++]) && !t.isPropagationStopped();)
					for (t.currentTarget = o.elem, i = 0;
						(r = o.handlers[i++]) && !t.isImmediatePropagationStopped();) t.namespace_re && !t.namespace_re.test(r.namespace) || (t.handleObj = r, t.data = r.data, void 0 !== (n = ((C.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (t.result = n) && (t.preventDefault(), t.stopPropagation()));
				return c.postDispatch && c.postDispatch.call(this, t), t.result
			}
		},
		handlers: function(t, e) {
			var i, n, o, r, s = [],
				a = e.delegateCount,
				l = t.target;
			if (a && l.nodeType && (!t.button || "click" !== t.type))
				for (; l !== this; l = l.parentNode || this)
					if (!0 !== l.disabled || "click" !== t.type) {
						for (n = [], i = 0; i < a; i++) void 0 === n[o = (r = e[i]).selector + " "] && (n[o] = r.needsContext ? 0 <= C(o, this).index(l) : C.find(o, this, null, [l]).length), n[o] && n.push(r);
						n.length && s.push({
							elem: l,
							handlers: n
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
				var i, n, o, r = e.button;
				return null == t.pageX && null != e.clientX && (n = (i = t.target.ownerDocument || y).documentElement, o = i.body, t.pageX = e.clientX + (n && n.scrollLeft || o && o.scrollLeft || 0) - (n && n.clientLeft || o && o.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || o && o.scrollTop || 0) - (n && n.clientTop || o && o.clientTop || 0)), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
			}
		},
		fix: function(t) {
			if (t[C.expando]) return t;
			var e, i, n, o = t.type,
				r = t,
				s = this.fixHooks[o];
			for (s || (this.fixHooks[o] = s = U.test(o) ? this.mouseHooks : X.test(o) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, t = new C.Event(r), e = n.length; e--;) t[i = n[e]] = r[i];
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
		simulate: function(t, e, i, n) {
			var o = C.extend(new C.Event, i, {
				type: t,
				isSimulated: !0,
				originalEvent: {}
			});
			n ? C.event.trigger(o, null, e) : C.event.dispatch.call(e, o), o.isDefaultPrevented() && i.preventDefault()
		}
	}, C.removeEvent = function(t, e, i) {
		t.removeEventListener && t.removeEventListener(e, i, !1)
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
				var e, i = t.relatedTarget,
					n = t.handleObj;
				return i && (i === this || C.contains(this, i)) || (t.type = n.origType, e = n.handler.apply(this, arguments), t.type = o), e
			}
		}
	}), v.focusinBubbles || C.each({
		focus: "focusin",
		blur: "focusout"
	}, function(i, n) {
		function o(t) {
			C.event.simulate(n, t.target, C.event.fix(t), !0)
		}
		C.event.special[n] = {
			setup: function() {
				var t = this.ownerDocument || this,
					e = R.access(t, n);
				e || t.addEventListener(i, o, !0), R.access(t, n, (e || 0) + 1)
			},
			teardown: function() {
				var t = this.ownerDocument || this,
					e = R.access(t, n) - 1;
				e ? R.access(t, n, e) : (t.removeEventListener(i, o, !0), R.remove(t, n))
			}
		}
	}), C.fn.extend({
		on: function(t, e, i, n, o) {
			var r, s;
			if ("object" == typeof t) {
				for (s in "string" != typeof e && (i = i || e, e = void 0), t) this.on(s, e, i, t[s], o);
				return this
			}
			if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), !1 === n) n = Z;
			else if (!n) return this;
			return 1 === o && (r = n, (n = function(t) {
				return C().off(t), r.apply(this, arguments)
			}).guid = r.guid || (r.guid = C.guid++)), this.each(function() {
				C.event.add(this, t, n, i, e)
			})
		},
		one: function(t, e, i, n) {
			return this.on(t, e, i, n, 1)
		},
		off: function(t, e, i) {
			var n, o;
			if (t && t.preventDefault && t.handleObj) return n = t.handleObj, C(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
			if ("object" != typeof t) return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = Z), this.each(function() {
				C.event.remove(this, t, i, e)
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
			var i = this[0];
			return i ? C.event.trigger(t, e, i, !0) : void 0
		}
	});
	var J = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		tt = /<([\w:]+)/,
		et = /<|&#?\w+;/,
		it = /<(?:script|style|link)/i,
		nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
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
		for (var i = 0, n = t.length; i < n; i++) R.set(t[i], "globalEval", !e || R.get(e[i], "globalEval"))
	}

	function ht(t, e) {
		var i, n, o, r, s, a, l, c;
		if (1 === e.nodeType) {
			if (R.hasData(t) && (r = R.access(t), s = R.set(e, r), c = r.events))
				for (o in delete s.handle, s.events = {}, c)
					for (i = 0, n = c[o].length; i < n; i++) C.event.add(e, o, c[o][i]);
			j.hasData(t) && (a = j.access(t), l = C.extend({}, a), j.set(e, l))
		}
	}

	function pt(t, e) {
		var i = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
		return void 0 === e || e && C.nodeName(t, e) ? C.merge([t], i) : i
	}
	at.optgroup = at.option, at.tbody = at.tfoot = at.colgroup = at.caption = at.thead, at.th = at.td, C.extend({
		clone: function(t, e, i) {
			var n, o, r, s, a, l, c, u = t.cloneNode(!0),
				d = C.contains(t.ownerDocument, t);
			if (!(v.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || C.isXMLDoc(t)))
				for (s = pt(u), n = 0, o = (r = pt(t)).length; n < o; n++) a = r[n], "input" === (c = (l = s[n]).nodeName.toLowerCase()) && B.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
			if (e)
				if (i)
					for (r = r || pt(t), s = s || pt(u), n = 0, o = r.length; n < o; n++) ht(r[n], s[n]);
				else ht(t, u);
			return 0 < (s = pt(u, "script")).length && dt(s, !d && pt(t, "script")), u
		},
		buildFragment: function(t, e, i, n) {
			for (var o, r, s, a, l, c, u = e.createDocumentFragment(), d = [], h = 0, p = t.length; h < p; h++)
				if ((o = t[h]) || 0 === o)
					if ("object" === C.type(o)) C.merge(d, o.nodeType ? [o] : o);
					else if (et.test(o)) {
				for (r = r || u.appendChild(e.createElement("div")), s = (tt.exec(o) || ["", ""])[1].toLowerCase(), a = at[s] || at._default, r.innerHTML = a[1] + o.replace(J, "<$1></$2>") + a[2], c = a[0]; c--;) r = r.lastChild;
				C.merge(d, r.childNodes), (r = u.firstChild).textContent = ""
			} else d.push(e.createTextNode(o));
			for (u.textContent = "", h = 0; o = d[h++];)
				if ((!n || -1 === C.inArray(o, n)) && (l = C.contains(o.ownerDocument, o), r = pt(u.appendChild(o), "script"), l && dt(r), i))
					for (c = 0; o = r[c++];) ot.test(o.type || "") && i.push(o);
			return u
		},
		cleanData: function(t) {
			for (var e, i, n, o, r = C.event.special, s = 0; void 0 !== (i = t[s]); s++) {
				if (C.acceptData(i) && (o = i[R.expando]) && (e = R.cache[o])) {
					if (e.events)
						for (n in e.events) r[n] ? C.event.remove(i, n) : C.removeEvent(i, n, e.handle);
					R.cache[o] && delete R.cache[o]
				}
				delete j.cache[i[j.expando]]
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
			for (var i, n = t ? C.filter(t, this) : this, o = 0; null != (i = n[o]); o++) e || 1 !== i.nodeType || C.cleanData(pt(i)), i.parentNode && (e && C.contains(i.ownerDocument, i) && dt(pt(i, "script")), i.parentNode.removeChild(i));
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
					i = 0,
					n = this.length;
				if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
				if ("string" == typeof t && !it.test(t) && !at[(tt.exec(t) || ["", ""])[1].toLowerCase()]) {
					t = t.replace(J, "<$1></$2>");
					try {
						for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (C.cleanData(pt(e, !1)), e.innerHTML = t);
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
		domManip: function(i, n) {
			i = m.apply([], i);
			var t, e, o, r, s, a, l = 0,
				c = this.length,
				u = this,
				d = c - 1,
				h = i[0],
				p = C.isFunction(h);
			if (p || 1 < c && "string" == typeof h && !v.checkClone && nt.test(h)) return this.each(function(t) {
				var e = u.eq(t);
				p && (i[0] = h.call(this, t, e.html())), e.domManip(i, n)
			});
			if (c && (e = (t = C.buildFragment(i, this[0].ownerDocument, !1, this)).firstChild, 1 === t.childNodes.length && (t = e), e)) {
				for (r = (o = C.map(pt(t, "script"), ct)).length; l < c; l++) s = t, l !== d && (s = C.clone(s, !0, !0), r && C.merge(o, pt(s, "script"))), n.call(this[l], s, l);
				if (r)
					for (a = o[o.length - 1].ownerDocument, C.map(o, ut), l = 0; l < r; l++) s = o[l], ot.test(s.type || "") && !R.access(s, "globalEval") && C.contains(a, s) && (s.src ? C._evalUrl && C._evalUrl(s.src) : C.globalEval(s.textContent.replace(st, "")))
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
			for (var e, i = [], n = C(t), o = n.length - 1, r = 0; r <= o; r++) e = r === o ? this : this.clone(!0), C(n[r])[s](e), a.apply(i, e.get());
			return this.pushStack(i)
		}
	});
	var ft, mt = {};

	function gt(t, e) {
		var i, n = C(e.createElement(t)).appendTo(e.body),
			o = f.getDefaultComputedStyle && (i = f.getDefaultComputedStyle(n[0])) ? i.display : C.css(n[0], "display");
		return n.detach(), o
	}

	function vt(t) {
		var e = y,
			i = mt[t];
		return i || ("none" !== (i = gt(t, e)) && i || ((e = (ft = (ft || C("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentDocument).write(), e.close(), i = gt(t, e), ft.detach()), mt[t] = i), i
	}
	var yt, bt, wt, xt, _t, Ct = /^margin/,
		Tt = new RegExp("^(" + $ + ")(?!px)[a-z%]+$", "i"),
		Et = function(t) {
			return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : f.getComputedStyle(t, null)
		};

	function St(t, e, i) {
		var n, o, r, s, a = t.style;
		return (i = i || Et(t)) && (s = i.getPropertyValue(e) || i[e]), i && ("" !== s || C.contains(t.ownerDocument, t) || (s = C.style(t, e)), Tt.test(s) && Ct.test(e) && (n = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
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
	})), C.swap = function(t, e, i, n) {
		var o, r, s = {};
		for (r in e) s[r] = t.style[r], t.style[r] = e[r];
		for (r in o = i.apply(t, n || []), e) t.style[r] = s[r];
		return o
	};
	var It = /^(none|table(?!-c[ea]).+)/,
		Dt = new RegExp("^(" + $ + ")(.*)$", "i"),
		zt = new RegExp("^([+-])=(" + $ + ")", "i"),
		Ot = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		At = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Rt = ["Webkit", "O", "Moz", "ms"];

	function jt(t, e) {
		if (e in t) return e;
		for (var i = e[0].toUpperCase() + e.slice(1), n = e, o = Rt.length; o--;)
			if ((e = Rt[o] + i) in t) return e;
		return n
	}

	function Nt(t, e, i) {
		var n = Dt.exec(e);
		return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
	}

	function Wt(t, e, i, n, o) {
		for (var r = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; r < 4; r += 2) "margin" === i && (s += C.css(t, i + H[r], !0, o)), n ? ("content" === i && (s -= C.css(t, "padding" + H[r], !0, o)), "margin" !== i && (s -= C.css(t, "border" + H[r] + "Width", !0, o))) : (s += C.css(t, "padding" + H[r], !0, o), "padding" !== i && (s += C.css(t, "border" + H[r] + "Width", !0, o)));
		return s
	}

	function Ft(t, e, i) {
		var n = !0,
			o = "width" === e ? t.offsetWidth : t.offsetHeight,
			r = Et(t),
			s = "border-box" === C.css(t, "boxSizing", !1, r);
		if (o <= 0 || null == o) {
			if (((o = St(t, e, r)) < 0 || null == o) && (o = t.style[e]), Tt.test(o)) return o;
			n = s && (v.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
		}
		return o + Wt(t, e, i || (s ? "border" : "content"), n, r) + "px"
	}

	function Pt(t, e) {
		for (var i, n, o, r = [], s = 0, a = t.length; s < a; s++)(n = t[s]).style && (r[s] = R.get(n, "olddisplay"), i = n.style.display, e ? (r[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && P(n) && (r[s] = R.access(n, "olddisplay", vt(n.nodeName)))) : (o = P(n), "none" === i && o || R.set(n, "olddisplay", o ? i : C.css(n, "display"))));
		for (s = 0; s < a; s++)(n = t[s]).style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? r[s] || "" : "none"));
		return t
	}

	function Mt(t, e, i, n, o) {
		return new Mt.prototype.init(t, e, i, n, o)
	}
	C.extend({
		cssHooks: {
			opacity: {
				get: function(t, e) {
					if (e) {
						var i = St(t, "opacity");
						return "" === i ? "1" : i
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
		style: function(t, e, i, n) {
			if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
				var o, r, s, a = C.camelCase(e),
					l = t.style;
				return e = C.cssProps[a] || (C.cssProps[a] = jt(l, a)), s = C.cssHooks[e] || C.cssHooks[a], void 0 === i ? s && "get" in s && void 0 !== (o = s.get(t, !1, n)) ? o : l[e] : ("string" == (r = typeof i) && (o = zt.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(C.css(t, e)), r = "number"), void(null != i && i == i && ("number" !== r || C.cssNumber[a] || (i += "px"), v.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (i = s.set(t, i, n)) || (l[e] = i))))
			}
		},
		css: function(t, e, i, n) {
			var o, r, s, a = C.camelCase(e);
			return e = C.cssProps[a] || (C.cssProps[a] = jt(t.style, a)), (s = C.cssHooks[e] || C.cssHooks[a]) && "get" in s && (o = s.get(t, !0, i)), void 0 === o && (o = St(t, e, n)), "normal" === o && e in At && (o = At[e]), "" === i || i ? (r = parseFloat(o), !0 === i || C.isNumeric(r) ? r || 0 : o) : o
		}
	}), C.each(["height", "width"], function(t, o) {
		C.cssHooks[o] = {
			get: function(t, e, i) {
				return e ? It.test(C.css(t, "display")) && 0 === t.offsetWidth ? C.swap(t, Ot, function() {
					return Ft(t, o, i)
				}) : Ft(t, o, i) : void 0
			},
			set: function(t, e, i) {
				var n = i && Et(t);
				return Nt(0, e, i ? Wt(t, o, i, "border-box" === C.css(t, "boxSizing", !1, n), n) : 0)
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
				for (var e = 0, i = {}, n = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) i[o + H[e] + r] = n[e] || n[e - 2] || n[0];
				return i
			}
		}, Ct.test(o) || (C.cssHooks[o + r].set = Nt)
	}), C.fn.extend({
		css: function(t, e) {
			return O(this, function(t, e, i) {
				var n, o, r = {},
					s = 0;
				if (C.isArray(e)) {
					for (n = Et(t), o = e.length; s < o; s++) r[e[s]] = C.css(t, e[s], !1, n);
					return r
				}
				return void 0 !== i ? C.style(t, e, i) : C.css(t, e)
			}, t, e, 1 < arguments.length)
		},
		show: function() {
			return Pt(this, !0)
		},
		hide: function() {
			return Pt(this)
		},
		toggle: function(t) {
			return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
				P(this) ? C(this).show() : C(this).hide()
			})
		}
	}), (C.Tween = Mt).prototype = {
		constructor: Mt,
		init: function(t, e, i, n, o, r) {
			this.elem = t, this.prop = i, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = r || (C.cssNumber[i] ? "" : "px")
		},
		cur: function() {
			var t = Mt.propHooks[this.prop];
			return t && t.get ? t.get(this) : Mt.propHooks._default.get(this)
		},
		run: function(t) {
			var e, i = Mt.propHooks[this.prop];
			return this.pos = e = this.options.duration ? C.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Mt.propHooks._default.set(this), this
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
		Ut = new RegExp("^(?:([+-])=|)(" + $ + ")([a-z%]*)$", "i"),
		Qt = /queueHooks$/,
		Vt = [function(e, t, i) {
			var n, o, r, s, a, l, c, u = this,
				d = {},
				h = e.style,
				p = e.nodeType && P(e),
				f = R.get(e, "fxshow");
			for (n in i.queue || (null == (a = C._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
					a.unqueued || l()
				}), a.unqueued++, u.always(function() {
					u.always(function() {
						a.unqueued--, C.queue(e, "fx").length || a.empty.fire()
					})
				})), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (c = C.css(e, "display")) ? R.get(e, "olddisplay") || vt(e.nodeName) : c) && "none" === C.css(e, "float") && (h.display = "inline-block")), i.overflow && (h.overflow = "hidden", u.always(function() {
					h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
				})), t)
				if (o = t[n], Xt.exec(o)) {
					if (delete t[n], r = r || "toggle" === o, o === (p ? "hide" : "show")) {
						if ("show" !== o || !f || void 0 === f[n]) continue;
						p = !0
					}
					d[n] = f && f[n] || C.style(e, n)
				} else c = void 0;
			if (C.isEmptyObject(d)) "inline" === ("none" === c ? vt(e.nodeName) : c) && (h.display = c);
			else
				for (n in f ? "hidden" in f && (p = f.hidden) : f = R.access(e, "fxshow", {}), r && (f.hidden = !p), p ? C(e).show() : u.done(function() {
						C(e).hide()
					}), u.done(function() {
						var t;
						for (t in R.remove(e, "fxshow"), d) C.style(e, t, d[t])
					}), d) s = Jt(p ? f[n] : 0, n, u), n in f || (f[n] = s.start, p && (s.end = s.start, s.start = "width" === n || "height" === n ? 1 : 0))
		}],
		Kt = {
			"*": [function(t, e) {
				var i = this.createTween(t, e),
					n = i.cur(),
					o = Ut.exec(e),
					r = o && o[3] || (C.cssNumber[t] ? "" : "px"),
					s = (C.cssNumber[t] || "px" !== r && +n) && Ut.exec(C.css(i.elem, t)),
					a = 1,
					l = 20;
				if (s && s[3] !== r)
					for (r = r || s[3], o = o || [], s = +n || 1; s /= a = a || ".5", C.style(i.elem, t, s + r), a !== (a = i.cur() / n) && 1 !== a && --l;);
				return o && (s = i.start = +s || +n || 0, i.unit = r, i.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), i
			}]
		};

	function Zt() {
		return setTimeout(function() {
			$t = void 0
		}), $t = C.now()
	}

	function Gt(t, e) {
		var i, n = 0,
			o = {
				height: t
			};
		for (e = e ? 1 : 0; n < 4; n += 2 - e) o["margin" + (i = H[n])] = o["padding" + i] = t;
		return e && (o.opacity = o.width = t), o
	}

	function Jt(t, e, i) {
		for (var n, o = (Kt[e] || []).concat(Kt["*"]), r = 0, s = o.length; r < s; r++)
			if (n = o[r].call(i, e, t)) return n
	}

	function te(r, t, e) {
		var i, s, n = 0,
			o = Vt.length,
			a = C.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (s) return !1;
				for (var t = $t || Zt(), e = Math.max(0, c.startTime + c.duration - t), i = 1 - (e / c.duration || 0), n = 0, o = c.tweens.length; n < o; n++) c.tweens[n].run(i);
				return a.notifyWith(r, [c, i, e]), i < 1 && o ? e : (a.resolveWith(r, [c]), !1)
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
					var i = C.Tween(r, c.opts, t, e, c.opts.specialEasing[t] || c.opts.easing);
					return c.tweens.push(i), i
				},
				stop: function(t) {
					var e = 0,
						i = t ? c.tweens.length : 0;
					if (s) return this;
					for (s = !0; e < i; e++) c.tweens[e].run(1);
					return t ? a.resolveWith(r, [c, t]) : a.rejectWith(r, [c, t]), this
				}
			}),
			u = c.props;
		for (function(t, e) {
				var i, n, o, r, s;
				for (i in t)
					if (o = e[n = C.camelCase(i)], r = t[i], C.isArray(r) && (o = r[1], r = t[i] = r[0]), i !== n && (t[n] = r, delete t[i]), (s = C.cssHooks[n]) && "expand" in s)
						for (i in r = s.expand(r), delete t[n], r) i in t || (t[i] = r[i], e[i] = o);
					else e[n] = o
			}(u, c.opts.specialEasing); n < o; n++)
			if (i = Vt[n].call(c, r, u, c.opts)) return i;
		return C.map(u, Jt, c), C.isFunction(c.opts.start) && c.opts.start.call(r, c), C.fx.timer(C.extend(l, {
			elem: r,
			anim: c,
			queue: c.opts.queue
		})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
	}
	C.Animation = C.extend(te, {
		tweener: function(t, e) {
			for (var i, n = 0, o = (t = C.isFunction(t) ? (e = t, ["*"]) : t.split(" ")).length; n < o; n++) i = t[n], Kt[i] = Kt[i] || [], Kt[i].unshift(e)
		},
		prefilter: function(t, e) {
			e ? Vt.unshift(t) : Vt.push(t)
		}
	}), C.speed = function(t, e, i) {
		var n = t && "object" == typeof t ? C.extend({}, t) : {
			complete: i || !i && e || C.isFunction(t) && t,
			duration: t,
			easing: i && e || e && !C.isFunction(e) && e
		};
		return n.duration = C.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in C.fx.speeds ? C.fx.speeds[n.duration] : C.fx.speeds._default, null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
			C.isFunction(n.old) && n.old.call(this), n.queue && C.dequeue(this, n.queue)
		}, n
	}, C.fn.extend({
		fadeTo: function(t, e, i, n) {
			return this.filter(P).css("opacity", 0).show().end().animate({
				opacity: e
			}, t, i, n)
		},
		animate: function(e, t, i, n) {
			function o() {
				var t = te(this, C.extend({}, e), s);
				(r || R.get(this, "finish")) && t.stop(!0)
			}
			var r = C.isEmptyObject(e),
				s = C.speed(t, i, n);
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
					i = C.timers,
					n = R.get(this);
				if (e) n[e] && n[e].stop && s(n[e]);
				else
					for (e in n) n[e] && n[e].stop && Qt.test(e) && s(n[e]);
				for (e = i.length; e--;) i[e].elem !== this || null != o && i[e].queue !== o || (i[e].anim.stop(r), t = !1, i.splice(e, 1));
				!t && r || C.dequeue(this, o)
			})
		},
		finish: function(s) {
			return !1 !== s && (s = s || "fx"), this.each(function() {
				var t, e = R.get(this),
					i = e[s + "queue"],
					n = e[s + "queueHooks"],
					o = C.timers,
					r = i ? i.length : 0;
				for (e.finish = !0, C.queue(this, s, []), n && n.stop && n.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === s && (o[t].anim.stop(!0), o.splice(t, 1));
				for (t = 0; t < r; t++) i[t] && i[t].finish && i[t].finish.call(this);
				delete e.finish
			})
		}
	}), C.each(["toggle", "show", "hide"], function(t, n) {
		var o = C.fn[n];
		C.fn[n] = function(t, e, i) {
			return null == t || "boolean" == typeof t ? o.apply(this, arguments) : this.animate(Gt(n, !0), t, e, i)
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
	}, function(t, n) {
		C.fn[t] = function(t, e, i) {
			return this.animate(n, t, e, i)
		}
	}), C.timers = [], C.fx.tick = function() {
		var t, e = 0,
			i = C.timers;
		for ($t = C.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
		i.length || C.fx.stop(), $t = void 0
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
	}, C.fn.delay = function(n, t) {
		return n = C.fx && C.fx.speeds[n] || n, t = t || "fx", this.queue(t, function(t, e) {
			var i = setTimeout(t, n);
			e.stop = function() {
				clearTimeout(i)
			}
		})
	}, Bt = y.createElement("input"), Yt = (qt = y.createElement("select")).appendChild(y.createElement("option")), Bt.type = "checkbox", v.checkOn = "" !== Bt.value, v.optSelected = Yt.selected, qt.disabled = !0, v.optDisabled = !Yt.disabled, (Bt = y.createElement("input")).value = "t", Bt.type = "radio", v.radioValue = "t" === Bt.value;
	var ee, ie = C.expr.attrHandle;
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
		attr: function(t, e, i) {
			var n, o, r = t.nodeType;
			if (t && 3 !== r && 8 !== r && 2 !== r) return typeof t.getAttribute == Y ? C.prop(t, e, i) : (1 === r && C.isXMLDoc(t) || (e = e.toLowerCase(), n = C.attrHooks[e] || (C.expr.match.bool.test(e) ? ee : void 0)), void 0 === i ? !(n && "get" in n && null !== (o = n.get(t, e))) && null == (o = C.find.attr(t, e)) ? void 0 : o : null !== i ? n && "set" in n && void 0 !== (o = n.set(t, i, e)) ? o : (t.setAttribute(e, i + ""), i) : void C.removeAttr(t, e))
		},
		removeAttr: function(t, e) {
			var i, n, o = 0,
				r = e && e.match(I);
			if (r && 1 === t.nodeType)
				for (; i = r[o++];) n = C.propFix[i] || i, C.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
		},
		attrHooks: {
			type: {
				set: function(t, e) {
					if (!v.radioValue && "radio" === e && C.nodeName(t, "input")) {
						var i = t.value;
						return t.setAttribute("type", e), i && (t.value = i), e
					}
				}
			}
		}
	}), ee = {
		set: function(t, e, i) {
			return !1 === e ? C.removeAttr(t, i) : t.setAttribute(i, i), i
		}
	}, C.each(C.expr.match.bool.source.match(/\w+/g), function(t, e) {
		var r = ie[e] || C.find.attr;
		ie[e] = function(t, e, i) {
			var n, o;
			return i || (o = ie[e], ie[e] = n, n = null != r(t, e, i) ? e.toLowerCase() : null, ie[e] = o), n
		}
	});
	var ne = /^(?:input|select|textarea|button)$/i;
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
		prop: function(t, e, i) {
			var n, o, r = t.nodeType;
			if (t && 3 !== r && 8 !== r && 2 !== r) return 1 === r && C.isXMLDoc(t) || (e = C.propFix[e] || e, o = C.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]
		},
		propHooks: {
			tabIndex: {
				get: function(t) {
					return t.hasAttribute("tabindex") || ne.test(t.nodeName) || t.href ? t.tabIndex : -1
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
			var t, i, n, o, r, s, a = "string" == typeof e && e,
				l = 0,
				c = this.length;
			if (C.isFunction(e)) return this.each(function(t) {
				C(this).addClass(e.call(this, t, this.className))
			});
			if (a)
				for (t = (e || "").match(I) || []; l < c; l++)
					if (n = 1 === (i = this[l]).nodeType && (i.className ? (" " + i.className + " ").replace(oe, " ") : " ")) {
						for (r = 0; o = t[r++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
						s = C.trim(n), i.className !== s && (i.className = s)
					} return this
		},
		removeClass: function(e) {
			var t, i, n, o, r, s, a = 0 === arguments.length || "string" == typeof e && e,
				l = 0,
				c = this.length;
			if (C.isFunction(e)) return this.each(function(t) {
				C(this).removeClass(e.call(this, t, this.className))
			});
			if (a)
				for (t = (e || "").match(I) || []; l < c; l++)
					if (n = 1 === (i = this[l]).nodeType && (i.className ? (" " + i.className + " ").replace(oe, " ") : "")) {
						for (r = 0; o = t[r++];)
							for (; 0 <= n.indexOf(" " + o + " ");) n = n.replace(" " + o + " ", " ");
						s = e ? C.trim(n) : "", i.className !== s && (i.className = s)
					} return this
		},
		toggleClass: function(o, e) {
			var r = typeof o;
			return "boolean" == typeof e && "string" == r ? e ? this.addClass(o) : this.removeClass(o) : this.each(C.isFunction(o) ? function(t) {
				C(this).toggleClass(o.call(this, t, this.className, e), e)
			} : function() {
				if ("string" == r)
					for (var t, e = 0, i = C(this), n = o.match(I) || []; t = n[e++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
				else r != Y && "boolean" != r || (this.className && R.set(this, "__className__", this.className), this.className = !this.className && !1 !== o && R.get(this, "__className__") || "")
			})
		},
		hasClass: function(t) {
			for (var e = " " + t + " ", i = 0, n = this.length; i < n; i++)
				if (1 === this[i].nodeType && 0 <= (" " + this[i].className + " ").replace(oe, " ").indexOf(e)) return !0;
			return !1
		}
	});
	var re = /\r/g;
	C.fn.extend({
		val: function(i) {
			var n, t, o, e = this[0];
			return arguments.length ? (o = C.isFunction(i), this.each(function(t) {
				var e;
				1 === this.nodeType && (null == (e = o ? i.call(this, t, C(this).val()) : i) ? e = "" : "number" == typeof e ? e += "" : C.isArray(e) && (e = C.map(e, function(t) {
					return null == t ? "" : t + ""
				})), (n = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
			})) : e ? (n = C.valHooks[e.type] || C.valHooks[e.nodeName.toLowerCase()]) && "get" in n && void 0 !== (t = n.get(e, "value")) ? t : "string" == typeof(t = e.value) ? t.replace(re, "") : null == t ? "" : t : void 0
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
					for (var e, i, n = t.options, o = t.selectedIndex, r = "select-one" === t.type || o < 0, s = r ? null : [], a = r ? o + 1 : n.length, l = o < 0 ? a : r ? o : 0; l < a; l++)
						if (!(!(i = n[l]).selected && l !== o || (v.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && C.nodeName(i.parentNode, "optgroup"))) {
							if (e = C(i).val(), r) return e;
							s.push(e)
						} return s
				},
				set: function(t, e) {
					for (var i, n, o = t.options, r = C.makeArray(e), s = o.length; s--;)((n = o[s]).selected = 0 <= C.inArray(n.value, r)) && (i = !0);
					return i || (t.selectedIndex = -1), r
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
	}), C.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, i) {
		C.fn[i] = function(t, e) {
			return 0 < arguments.length ? this.on(i, null, t, e) : this.trigger(i)
		}
	}), C.fn.extend({
		hover: function(t, e) {
			return this.mouseenter(t).mouseleave(e || t)
		},
		bind: function(t, e, i) {
			return this.on(t, null, e, i)
		},
		unbind: function(t, e) {
			return this.off(t, null, e)
		},
		delegate: function(t, e, i, n) {
			return this.on(e, t, i, n)
		},
		undelegate: function(t, e, i) {
			return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
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
			var i, n = 0,
				o = t.toLowerCase().match(I) || [];
			if (C.isFunction(e))
				for (; i = o[n++];) "+" === i[0] ? (i = i.slice(1) || "*", (r[i] = r[i] || []).unshift(e)) : (r[i] = r[i] || []).push(e)
		}
	}

	function we(e, o, r, s) {
		var a = {},
			l = e === me;

		function c(t) {
			var n;
			return a[t] = !0, C.each(e[t] || [], function(t, e) {
				var i = e(o, r, s);
				return "string" != typeof i || l || a[i] ? l ? !(n = i) : void 0 : (o.dataTypes.unshift(i), c(i), !1)
			}), n
		}
		return c(o.dataTypes[0]) || !a["*"] && c("*")
	}

	function xe(t, e) {
		var i, n, o = C.ajaxSettings.flatOptions || {};
		for (i in e) void 0 !== e[i] && ((o[i] ? t : n = n || {})[i] = e[i]);
		return n && C.extend(!0, t, n), t
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
			var u, d, h, i, p, n, f, o, m = C.ajaxSetup({}, e),
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
							if (!i)
								for (i = {}; e = ue.exec(h);) i[e[1].toLowerCase()] = e[2];
							e = i[t.toLowerCase()]
						}
						return null == e ? null : e
					},
					getAllResponseHeaders: function() {
						return 2 === x ? h : null
					},
					setRequestHeader: function(t, e) {
						var i = t.toLowerCase();
						return x || (t = s[i] = s[i] || t, r[t] = e), this
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
			if (y.promise(_).complete = b.add, _.success = _.done, _.error = _.fail, m.url = ((t || m.url || ve) + "").replace(le, "").replace(he, ye[1] + "//"), m.type = e.method || e.type || m.method || m.type, m.dataTypes = C.trim(m.dataType || "*").toLowerCase().match(I) || [""], null == m.crossDomain && (n = pe.exec(m.url.toLowerCase()), m.crossDomain = !(!n || n[1] === ye[1] && n[2] === ye[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (ye[3] || ("http:" === ye[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = C.param(m.data, m.traditional)), we(fe, m, e, _), 2 === x) return _;
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

			function l(t, e, i, n) {
				var o, r, s, a, l, c = e;
				2 !== x && (x = 2, p && clearTimeout(p), u = void 0, h = n || "", _.readyState = 0 < t ? 4 : 0, o = 200 <= t && t < 300 || 304 === t, i && (a = function(t, e, i) {
					for (var n, o, r, s, a = t.contents, l = t.dataTypes;
						"*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
					if (n)
						for (o in a)
							if (a[o] && a[o].test(n)) {
								l.unshift(o);
								break
							} if (l[0] in i) r = l[0];
					else {
						for (o in i) {
							if (!l[0] || t.converters[o + " " + l[0]]) {
								r = o;
								break
							}
							s = s || o
						}
						r = r || s
					}
					return r ? (r !== l[0] && l.unshift(r), i[r]) : void 0
				}(m, _, i)), a = function(t, e, i, n) {
					var o, r, s, a, l, c = {},
						u = t.dataTypes.slice();
					if (u[1])
						for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
					for (r = u.shift(); r;)
						if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())
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
		getJSON: function(t, e, i) {
			return C.get(t, e, i, "json")
		},
		getScript: function(t, e) {
			return C.get(t, void 0, e, "script")
		}
	}), C.each(["get", "post"], function(t, o) {
		C[o] = function(t, e, i, n) {
			return C.isFunction(e) && (n = n || i, i = e, e = void 0), C.ajax({
				url: t,
				type: o,
				dataType: n,
				data: e,
				success: i
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
		wrapInner: function(i) {
			return this.each(C.isFunction(i) ? function(t) {
				C(this).wrapInner(i.call(this, t))
			} : function() {
				var t = C(this),
					e = t.contents();
				e.length ? e.wrapAll(i) : t.append(i)
			})
		},
		wrap: function(e) {
			var i = C.isFunction(e);
			return this.each(function(t) {
				C(this).wrapAll(i ? e.call(this, t) : e)
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
		function i(t, e) {
			e = C.isFunction(e) ? e() : null == e ? "" : e, o[o.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
		}
		var n, o = [];
		if (void 0 === e && (e = C.ajaxSettings && C.ajaxSettings.traditional), C.isArray(t) || t.jquery && !C.isPlainObject(t)) C.each(t, function() {
			i(this.name, this.value)
		});
		else
			for (n in t) ! function i(n, t, o, r) {
				var e;
				if (C.isArray(t)) C.each(t, function(t, e) {
					o || Ce.test(n) ? r(n, e) : i(n + "[" + ("object" == typeof e ? t : "") + "]", e, o, r)
				});
				else if (o || "object" !== C.type(t)) r(n, t);
				else
					for (e in t) i(n + "[" + e + "]", t[e], o, r)
			}(n, t[n], e, i);
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
				return this.name && !C(this).is(":disabled") && Se.test(this.nodeName) && !Ee.test(t) && (this.checked || !B.test(t))
			}).map(function(t, e) {
				var i = C(this).val();
				return null == i ? null : C.isArray(i) ? C.map(i, function(t) {
					return {
						name: e.name,
						value: t.replace(Te, "\r\n")
					}
				}) : {
					name: e.name,
					value: i.replace(Te, "\r\n")
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
				var i, n = r.xhr(),
					o = ++ke;
				if (n.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
					for (i in r.xhrFields) n[i] = r.xhrFields[i];
				for (i in r.mimeType && n.overrideMimeType && n.overrideMimeType(r.mimeType), r.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) n.setRequestHeader(i, t[i]);
				s = function(t) {
					return function() {
						s && (delete Le[o], s = n.onload = n.onerror = null, "abort" === t ? n.abort() : "error" === t ? e(n.status, n.statusText) : e(Ie[n.status] || n.status, n.statusText, "string" == typeof n.responseText ? {
							text: n.responseText
						} : void 0, n.getAllResponseHeaders()))
					}
				}, n.onload = s(), n.onerror = s("error"), s = Le[o] = s("abort");
				try {
					n.send(r.hasContent && r.data || null)
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
	}), C.ajaxTransport("script", function(i) {
		var n, o;
		if (i.crossDomain) return {
			send: function(t, e) {
				n = C("<script>").prop({
					async: !0,
					charset: i.scriptCharset,
					src: i.url
				}).on("load error", o = function(t) {
					n.remove(), o = null, t && e("error" === t.type ? 404 : 200, t.type)
				}), y.head.appendChild(n[0])
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
	}), C.ajaxPrefilter("json jsonp", function(t, e, i) {
		var n, o, r, s = !1 !== t.jsonp && (Oe.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Oe.test(t.data) && "data");
		return s || "jsonp" === t.dataTypes[0] ? (n = t.jsonpCallback = C.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Oe, "$1" + n) : !1 !== t.jsonp && (t.url += (ae.test(t.url) ? "&" : "?") + t.jsonp + "=" + n), t.converters["script json"] = function() {
			return r || C.error(n + " was not called"), r[0]
		}, t.dataTypes[0] = "json", o = f[n], f[n] = function() {
			r = arguments
		}, i.always(function() {
			f[n] = o, t[n] && (t.jsonpCallback = e.jsonpCallback, ze.push(n)), r && C.isFunction(o) && o(r[0]), r = o = void 0
		}), "script") : void 0
	}), C.parseHTML = function(t, e, i) {
		if (!t || "string" != typeof t) return null;
		"boolean" == typeof e && (i = e, e = !1), e = e || y;
		var n = b.exec(t),
			o = !i && [];
		return n ? [e.createElement(n[1])] : (n = C.buildFragment([t], e, o), o && o.length && C(o).remove(), C.merge([], n.childNodes))
	};
	var Ae = C.fn.load;
	C.fn.load = function(t, e, i) {
		if ("string" != typeof t && Ae) return Ae.apply(this, arguments);
		var n, o, r, s = this,
			a = t.indexOf(" ");
		return 0 <= a && (n = C.trim(t.slice(a)), t = t.slice(0, a)), C.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), 0 < s.length && C.ajax({
			url: t,
			type: o,
			dataType: "html",
			data: e
		}).done(function(t) {
			r = arguments, s.html(n ? C("<div>").append(C.parseHTML(t)).find(n) : t)
		}).complete(i && function(t, e) {
			s.each(i, r || [t.responseText, e, t])
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
	var Re = f.document.documentElement;

	function je(t) {
		return C.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
	}
	C.offset = {
		setOffset: function(t, e, i) {
			var n, o, r, s, a, l, c = C.css(t, "position"),
				u = C(t),
				d = {};
			"static" === c && (t.style.position = "relative"), a = u.offset(), r = C.css(t, "top"), l = C.css(t, "left"), o = ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto") ? (s = (n = u.position()).top, n.left) : (s = parseFloat(r) || 0, parseFloat(l) || 0), C.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : u.css(d)
		}
	}, C.fn.extend({
		offset: function(e) {
			if (arguments.length) return void 0 === e ? this : this.each(function(t) {
				C.offset.setOffset(this, e, t)
			});
			var t, i, n = this[0],
				o = {
					top: 0,
					left: 0
				},
				r = n && n.ownerDocument;
			return r ? (t = r.documentElement, C.contains(t, n) ? (typeof n.getBoundingClientRect != Y && (o = n.getBoundingClientRect()), i = je(r), {
				top: o.top + i.pageYOffset - t.clientTop,
				left: o.left + i.pageXOffset - t.clientLeft
			}) : o) : void 0
		},
		position: function() {
			if (this[0]) {
				var t, e, i = this[0],
					n = {
						top: 0,
						left: 0
					};
				return "fixed" === C.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), C.nodeName(t[0], "html") || (n = t.offset()), n.top += C.css(t[0], "borderTopWidth", !0), n.left += C.css(t[0], "borderLeftWidth", !0)), {
					top: e.top - n.top - C.css(i, "marginTop", !0),
					left: e.left - n.left - C.css(i, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var t = this.offsetParent || Re; t && !C.nodeName(t, "html") && "static" === C.css(t, "position");) t = t.offsetParent;
				return t || Re
			})
		}
	}), C.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, o) {
		var r = "pageYOffset" === o;
		C.fn[e] = function(t) {
			return O(this, function(t, e, i) {
				var n = je(t);
				return void 0 === i ? n ? n[o] : t[e] : void(n ? n.scrollTo(r ? f.pageXOffset : i, r ? i : f.pageYOffset) : t[e] = i)
			}, e, t, arguments.length, null)
		}
	}), C.each(["top", "left"], function(t, i) {
		C.cssHooks[i] = kt(v.pixelPosition, function(t, e) {
			return e ? (e = St(t, i), Tt.test(e) ? C(t).position()[i] + "px" : e) : void 0
		})
	}), C.each({
		Height: "height",
		Width: "width"
	}, function(r, s) {
		C.each({
			padding: "inner" + r,
			content: s,
			"": "outer" + r
		}, function(n, t) {
			C.fn[t] = function(t, e) {
				var i = arguments.length && (n || "boolean" != typeof t),
					o = n || (!0 === t || !0 === e ? "margin" : "border");
				return O(this, function(t, e, i) {
					var n;
					return C.isWindow(t) ? t.document.documentElement["client" + r] : 9 === t.nodeType ? (n = t.documentElement, Math.max(t.body["scroll" + r], n["scroll" + r], t.body["offset" + r], n["offset" + r], n["client" + r])) : void 0 === i ? C.css(t, e, o) : C.style(t, e, i, o)
				}, s, i ? t : void 0, i, null)
			}
		})
	}), C.fn.size = function() {
		return this.length
	}, C.fn.andSelf = C.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
		return C
	});
	var Ne = f.jQuery,
		We = f.$;
	return C.noConflict = function(t) {
		return f.$ === C && (f.$ = We), t && f.jQuery === C && (f.jQuery = Ne), C
	}, typeof t == Y && (f.jQuery = f.$ = C), C
}),
function(t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(u) {
	function t() {}

	function d(t, e) {
		m.ev.on("mfp" + t + i, e)
	}

	function h(t, e, i, n) {
		var o = document.createElement("div");
		return o.className = "mfp-" + t, i && (o.innerHTML = i), n ? e && e.appendChild(o) : (o = u(o), e && o.appendTo(e)), o
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
	var m, n, g, o, v, e, a = "Close",
		l = "BeforeClose",
		y = "MarkupParse",
		i = ".mfp",
		b = "mfp-ready",
		s = "mfp-removing",
		c = "mfp-prevent-close",
		w = !!window.jQuery,
		x = u(window);
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
				for (var e, i = t.items, n = 0; n < i.length; n++)
					if ((e = i[n]).parsed && (e = e.el[0]), e === t.el[0]) {
						m.index = n;
						break
					}
			} else m.items = u.isArray(t.items) ? t.items : [t.items], m.index = t.index || 0;
			if (!m.isOpen) {
				m.types = [], v = "", t.mainEl && t.mainEl.length ? m.ev = t.mainEl.eq(0) : m.ev = g, t.key ? (m.popupsCache[t.key] || (m.popupsCache[t.key] = {}), m.currTemplate = m.popupsCache[t.key]) : m.currTemplate = {}, m.st = u.extend(!0, {}, u.magnificPopup.defaults, t), m.fixedContentPos = "auto" === m.st.fixedContentPos ? !m.probablyMobile : m.st.fixedContentPos, m.st.modal && (m.st.closeOnContentClick = !1, m.st.closeOnBgClick = !1, m.st.showCloseBtn = !1, m.st.enableEscapeKey = !1), m.bgOverlay || (m.bgOverlay = h("bg").on("click.mfp", function() {
					m.close()
				}), m.wrap = h("wrap").attr("tabindex", -1).on("click.mfp", function(t) {
					m._checkIfClose(t.target) && m.close()
				}), m.container = h("container", m.wrap)), m.contentContainer = h("content"), m.st.preloader && (m.preloader = h("preloader", m.container, m.st.tLoading));
				var o = u.magnificPopup.modules;
				for (n = 0; n < o.length; n++) {
					var r = (r = o[n]).charAt(0).toUpperCase() + r.slice(1);
					m["init" + r].call(m)
				}
				p("BeforeOpen"), m.st.showCloseBtn && (m.st.closeBtnInside ? (d(y, function(t, e, i, n) {
					i.close_replaceWith = f(n.type)
				}), v += " mfp-close-btn-in") : m.wrap.append(f())), m.st.alignTop && (v += " mfp-align-top"), m.fixedContentPos ? m.wrap.css({
					overflow: m.st.overflowY,
					overflowX: "hidden",
					overflowY: m.st.overflowY
				}) : m.wrap.css({
					top: x.scrollTop(),
					position: "absolute"
				}), !1 !== m.st.fixedBgPos && ("auto" !== m.st.fixedBgPos || m.fixedContentPos) || m.bgOverlay.css({
					height: g.height(),
					position: "absolute"
				}), m.st.enableEscapeKey && g.on("keyup.mfp", function(t) {
					27 === t.keyCode && m.close()
				}), x.on("resize.mfp", function() {
					m.updateSize()
				}), m.st.closeOnContentClick || (v += " mfp-auto-cursor"), v && m.wrap.addClass(v);
				var s, a = m.wH = x.height(),
					l = {};
				m.fixedContentPos && m._hasScrollBar(a) && ((s = m._getScrollbarSize()) && (l.marginRight = s)), m.fixedContentPos && (m.isIE7 ? u("body, html").css("overflow", "hidden") : l.overflow = "hidden");
				var c = m.st.mainClass;
				return m.isIE7 && (c += " mfp-ie7"), c && m._addClassToMFP(c), m.updateItemHTML(), p("BuildControls"), u("html").css(l), m.bgOverlay.add(m.wrap).prependTo(m.st.prependTo || u(document.body)), m._lastFocusedEl = document.activeElement, setTimeout(function() {
					m.content ? (m._addClassToMFP(b), m._setFocus()) : m.bgOverlay.addClass(b), g.on("focusin.mfp", m._onFocusIn)
				}, 16), m.isOpen = !0, m.updateSize(a), p("Open"), t
			}
			m.updateItemHTML()
		},
		close: function() {
			m.isOpen && (p(l), m.isOpen = !1, m.st.removalDelay && !m.isLowIE && m.supportsTransition ? (m._addClassToMFP(s), setTimeout(function() {
				m._close()
			}, m.st.removalDelay)) : m._close())
		},
		_close: function() {
			p(a);
			var t, e = s + " " + b + " ";
			m.bgOverlay.detach(), m.wrap.detach(), m.container.empty(), m.st.mainClass && (e += m.st.mainClass + " "), m._removeClassFromMFP(e), m.fixedContentPos && (t = {
				marginRight: ""
			}, m.isIE7 ? u("body, html").css("overflow", "") : t.overflow = "", u("html").css(t)), g.off("keyup.mfp focusin.mfp"), m.ev.off(i), m.wrap.attr("class", "mfp-wrap").removeAttr("style"), m.bgOverlay.attr("class", "mfp-bg"), m.container.attr("class", "mfp-container"), !m.st.showCloseBtn || m.st.closeBtnInside && !0 !== m.currTemplate[m.currItem.type] || m.currTemplate.closeBtn && m.currTemplate.closeBtn.detach(), m.st.autoFocusLast && m._lastFocusedEl && u(m._lastFocusedEl).focus(), m.currItem = null, m.content = null, m.currTemplate = null, m.prevHeight = 0, p("AfterClose")
		},
		updateSize: function(t) {
			var e, i;
			m.isIOS ? (e = document.documentElement.clientWidth / window.innerWidth, i = window.innerHeight * e, m.wrap.css("height", i), m.wH = i) : m.wH = t || x.height(), m.fixedContentPos || m.wrap.css("height", m.wH), p("Resize")
		},
		updateItemHTML: function() {
			var t = m.items[m.index];
			m.contentContainer.detach(), m.content && m.content.detach(), t.parsed || (t = m.parseEl(m.index));
			var e, i = t.type;
			p("BeforeChange", [m.currItem ? m.currItem.type : "", i]), m.currItem = t, m.currTemplate[i] || (e = !!m.st[i] && m.st[i].markup, p("FirstMarkupParse", e), m.currTemplate[i] = !e || u(e)), o && o !== t.type && m.container.removeClass("mfp-" + o + "-holder");
			var n = m["get" + i.charAt(0).toUpperCase() + i.slice(1)](t, m.currTemplate[i]);
			m.appendContent(n, i), t.preloaded = !0, p("Change", t), o = t.type, m.container.prepend(m.contentContainer), p("AfterChange")
		},
		appendContent: function(t, e) {
			(m.content = t) ? m.st.showCloseBtn && m.st.closeBtnInside && !0 === m.currTemplate[e] ? m.content.find(".mfp-close").length || m.content.append(f()) : m.content = t: m.content = "", p("BeforeAppend"), m.container.addClass("mfp-" + e + "-holder"), m.contentContainer.append(m.content)
		},
		parseEl: function(t) {
			var e, i = m.items[t];
			if ((i = i.tagName ? {
					el: u(i)
				} : (e = i.type, {
					data: i,
					src: i.src
				})).el) {
				for (var n = m.types, o = 0; o < n.length; o++)
					if (i.el.hasClass("mfp-" + n[o])) {
						e = n[o];
						break
					} i.src = i.el.attr("data-mfp-src"), i.src || (i.src = i.el.attr("href"))
			}
			return i.type = e || m.st.type || "inline", i.index = t, i.parsed = !0, m.items[t] = i, p("ElementParse", i), m.items[t]
		},
		addGroup: function(e, i) {
			function t(t) {
				t.mfpEl = this, m._openClick(t, e, i)
			}
			var n = "click.magnificPopup";
			(i = i || {}).mainEl = e, i.items ? (i.isObj = !0, e.off(n).on(n, t)) : (i.isObj = !1, i.delegate ? e.off(n).on(n, i.delegate, t) : (i.items = e).off(n).on(n, t))
		},
		_openClick: function(t, e, i) {
			if ((void 0 !== i.midClick ? i.midClick : u.magnificPopup.defaults.midClick) || !(2 === t.which || t.ctrlKey || t.metaKey || t.altKey || t.shiftKey)) {
				var n = void 0 !== i.disableOn ? i.disableOn : u.magnificPopup.defaults.disableOn;
				if (n)
					if (u.isFunction(n)) {
						if (!n.call(m)) return !0
					} else if (x.width() < n) return !0;
				t.type && (t.preventDefault(), m.isOpen && t.stopPropagation()), i.el = u(t.mfpEl), i.delegate && (i.items = e.find(i.delegate)), m.open(i)
			}
		},
		updateStatus: function(t, e) {
			var i;
			m.preloader && (n !== t && m.container.removeClass("mfp-s-" + n), e || "loading" !== t || (e = m.st.tLoading), p("UpdateStatus", i = {
				status: t,
				text: e
			}), t = i.status, e = i.text, m.preloader.html(e), m.preloader.find("a").on("click", function(t) {
				t.stopImmediatePropagation()
			}), m.container.addClass("mfp-s-" + t), n = t)
		},
		_checkIfClose: function(t) {
			if (!u(t).hasClass(c)) {
				var e = m.st.closeOnContentClick,
					i = m.st.closeOnBgClick;
				if (e && i) return !0;
				if (!m.content || u(t).hasClass("mfp-close") || m.preloader && t === m.preloader[0]) return !0;
				if (t === m.content[0] || u.contains(m.content[0], t)) {
					if (e) return !0
				} else if (i && u.contains(document, t)) return !0;
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
			return (m.isIE7 ? g.height() : document.body.scrollHeight) > (t || x.height())
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
				return void 0 === e || !1 === e || void(1 < (r = t.split("_")).length ? 0 < (i = o.find(".mfp-" + r[0])).length && ("replaceWith" === (n = r[1]) ? i[0] !== e[0] && i.replaceWith(e) : "img" === n ? i.is("img") ? i.attr("src", e) : i.replaceWith(u("<img>").attr("src", e).attr("class", i.attr("class"))) : i.attr(r[1], e)) : o.find(".mfp-" + t).html(e));
				var i, n
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
		var e, i, n, o = u(this);
		return "string" == typeof t ? "open" === t ? (e = w ? o.data("magnificPopup") : o[0].magnificPopup, i = parseInt(arguments[1], 10) || 0, n = e.items ? e.items[i] : (n = o, e.delegate && (n = n.find(e.delegate)), n.eq(i)), m._openClick({
			mfpEl: n
		}, o, e)) : m.isOpen && m[t].apply(m, Array.prototype.slice.call(arguments, 1)) : (t = u.extend(!0, {}, t), w ? o.data("magnificPopup", t) : o[0].magnificPopup = t, m.addGroup(o, t)), o
	};

	function _() {
		E && (T.after(E.addClass(C)).detach(), E = null)
	}
	var C, T, E, S = "inline";
	u.magnificPopup.registerModule(S, {
		options: {
			hiddenClass: "hide",
			markup: "",
			tNotFound: "Content not found"
		},
		proto: {
			initInline: function() {
				m.types.push(S), d(a + "." + S, function() {
					_()
				})
			},
			getInline: function(t, e) {
				if (_(), t.src) {
					var i, n = m.st.inline,
						o = u(t.src);
					return o.length ? ((i = o[0].parentNode) && i.tagName && (T || (C = n.hiddenClass, T = h(C), C = "mfp-" + C), E = o.after(T).detach().removeClass(C)), m.updateStatus("ready")) : (m.updateStatus("error", n.tNotFound), o = u("<div>")), t.inlineElement = o
				}
				return m.updateStatus("ready"), m._parseMarkup(e, {}, t), e
			}
		}
	});

	function k() {
		I && u(document.body).removeClass(I)
	}

	function L() {
		k(), m.req && m.req.abort()
	}
	var I, D = "ajax";
	u.magnificPopup.registerModule(D, {
		options: {
			settings: null,
			cursor: "mfp-ajax-cur",
			tError: '<a href="%url%">The content</a> could not be loaded.'
		},
		proto: {
			initAjax: function() {
				m.types.push(D), I = m.st.ajax.cursor, d(a + "." + D, L), d("BeforeChange.ajax", L)
			},
			getAjax: function(o) {
				I && u(document.body).addClass(I), m.updateStatus("loading");
				var t = u.extend({
					url: o.src,
					success: function(t, e, i) {
						var n = {
							data: t,
							xhr: i
						};
						p("ParseAjax", n), m.appendContent(u(n.data), D), o.finished = !0, k(), m._setFocus(), setTimeout(function() {
							m.wrap.addClass(b)
						}, 16), m.updateStatus("ready"), p("AjaxContentAdded")
					},
					error: function() {
						k(), o.finished = o.loadError = !0, m.updateStatus("error", m.st.ajax.tError.replace("%url%", o.src))
					}
				}, m.st.ajax.settings);
				return m.req = u.ajax(t), ""
			}
		}
	});
	var z;
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
				m.types.push("image"), d("Open" + e, function() {
					"image" === m.currItem.type && t.cursor && u(document.body).addClass(t.cursor)
				}), d(a + e, function() {
					t.cursor && u(document.body).removeClass(t.cursor), x.off("resize.mfp")
				}), d("Resize" + e, m.resizeImage), m.isLowIE && d("AfterChange", m.resizeImage)
			},
			resizeImage: function() {
				var t, e = m.currItem;
				e && e.img && m.st.image.verticalFit && (t = 0, m.isLowIE && (t = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", m.wH - t))
			},
			_onImageHasSize: function(t) {
				t.img && (t.hasSize = !0, z && clearInterval(z), t.isCheckingImgSize = !1, p("ImageHasSize", t), t.imgHidden && (m.content && m.content.removeClass("mfp-loading"), t.imgHidden = !1))
			},
			findImageSize: function(e) {
				var i = 0,
					n = e.img[0],
					o = function(t) {
						z && clearInterval(z), z = setInterval(function() {
							return 0 < n.naturalWidth ? void m._onImageHasSize(e) : (200 < i && clearInterval(z), void(3 === ++i ? o(10) : 40 === i ? o(50) : 100 === i && o(500)))
						}, t)
					};
				o(1)
			},
			getImage: function(t, e) {
				var i, n = 0,
					o = function() {
						t && (t.img[0].complete ? (t.img.off(".mfploader"), t === m.currItem && (m._onImageHasSize(t), m.updateStatus("ready")), t.hasSize = !0, t.loaded = !0, p("ImageLoadComplete")) : ++n < 200 ? setTimeout(o, 100) : r())
					},
					r = function() {
						t && (t.img.off(".mfploader"), t === m.currItem && (m._onImageHasSize(t), m.updateStatus("error", s.tError.replace("%url%", t.src))), t.hasSize = !0, t.loaded = !0, t.loadError = !0)
					},
					s = m.st.image,
					a = e.find(".mfp-img");
				return a.length && ((i = document.createElement("img")).className = "mfp-img", t.el && t.el.find("img").length && (i.alt = t.el.find("img").attr("alt")), t.img = u(i).on("load.mfploader", o).on("error.mfploader", r), i.src = t.src, a.is("img") && (t.img = t.img.clone()), 0 < (i = t.img[0]).naturalWidth ? t.hasSize = !0 : i.width || (t.hasSize = !1)), m._parseMarkup(e, {
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
				}, t), m.resizeImage(), t.hasSize ? (z && clearInterval(z), t.loadError ? (e.addClass("mfp-loading"), m.updateStatus("error", s.tError.replace("%url%", t.src))) : (e.removeClass("mfp-loading"), m.updateStatus("ready"))) : (m.updateStatus("loading"), t.loading = !0, t.hasSize || (t.imgHidden = !0, e.addClass("mfp-loading"), m.findImageSize(t))), e
			}
		}
	});
	var O;
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
				var t, e, i, n, o, r, s = m.st.zoom;
				s.enabled && m.supportsTransition && (n = s.duration, o = function(t) {
					var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
						i = "all " + s.duration / 1e3 + "s " + s.easing,
						n = {
							position: "fixed",
							zIndex: 9999,
							left: 0,
							top: 0,
							"-webkit-backface-visibility": "hidden"
						},
						o = "transition";
					return n["-webkit-" + o] = n["-moz-" + o] = n["-o-" + o] = n[o] = i, e.css(n), e
				}, r = function() {
					m.content.css("visibility", "visible")
				}, d("BuildControls.zoom", function() {
					if (m._allowZoom()) {
						if (clearTimeout(e), m.content.css("visibility", "hidden"), !(t = m._getItemToZoom())) return void r();
						(i = o(t)).css(m._getOffset()), m.wrap.append(i), e = setTimeout(function() {
							i.css(m._getOffset(!0)), e = setTimeout(function() {
								r(), setTimeout(function() {
									i.remove(), t = i = null, p("ZoomAnimationEnded")
								}, 16)
							}, n)
						}, 16)
					}
				}), d(l + ".zoom", function() {
					if (m._allowZoom()) {
						if (clearTimeout(e), m.st.removalDelay = n, !t) {
							if (!(t = m._getItemToZoom())) return;
							i = o(t)
						}
						i.css(m._getOffset(!0)), m.wrap.append(i), m.content.css("visibility", "hidden"), setTimeout(function() {
							i.css(m._getOffset())
						}, 16)
					}
				}), d(a + ".zoom", function() {
					m._allowZoom() && (r(), i && i.remove(), t = null)
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
					i = e.offset(),
					n = parseInt(e.css("padding-top"), 10),
					o = parseInt(e.css("padding-bottom"), 10);
				i.top -= u(window).scrollTop() - n;
				var r = {
					width: e.width(),
					height: (w ? e.innerHeight() : e[0].offsetHeight) - o - n
				};
				return void 0 === O && (O = void 0 !== document.createElement("p").style.MozTransform), O ? r["-moz-transform"] = r.transform = "translate(" + i.left + "px," + i.top + "px)" : (r.left = i.left, r.top = i.top), r
			}
		}
	});

	function A(t) {
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
				m.types.push(R), d("BeforeChange", function(t, e, i) {
					e !== i && (e === R ? A() : i === R && A(!0))
				}), d(a + "." + R, function() {
					A()
				})
			},
			getIframe: function(t, e) {
				var i = t.src,
					n = m.st.iframe;
				u.each(n.patterns, function() {
					return -1 < i.indexOf(this.index) ? (this.id && (i = "string" == typeof this.id ? i.substr(i.lastIndexOf(this.id) + this.id.length, i.length) : this.id.call(this, i)), i = this.src.replace("%id%", i), !1) : void 0
				});
				var o = {};
				return n.srcAction && (o[n.srcAction] = i), m._parseMarkup(e, o, t), m.updateStatus("ready"), e
			}
		}
	});

	function j(t) {
		var e = m.items.length;
		return e - 1 < t ? t - e : t < 0 ? e + t : t
	}

	function N(t, e, i) {
		return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
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
				return m.direction = !0, !(!r || !r.enabled) && (v += " mfp-gallery", d("Open" + t, function() {
					r.navigateByImgClick && m.wrap.on("click" + t, ".mfp-img", function() {
						return 1 < m.items.length ? (m.next(), !1) : void 0
					}), g.on("keydown" + t, function(t) {
						37 === t.keyCode ? m.prev() : 39 === t.keyCode && m.next()
					})
				}), d("UpdateStatus" + t, function(t, e) {
					e.text && (e.text = N(e.text, m.currItem.index, m.items.length))
				}), d(y + t, function(t, e, i, n) {
					var o = m.items.length;
					i.counter = 1 < o ? N(r.tCounter, n.index, o) : ""
				}), d("BuildControls" + t, function() {
					var t, e, i;
					1 < m.items.length && r.arrows && !m.arrowLeft && (t = r.arrowMarkup, e = m.arrowLeft = u(t.replace(/%title%/gi, r.tPrev).replace(/%dir%/gi, "left")).addClass(c), i = m.arrowRight = u(t.replace(/%title%/gi, r.tNext).replace(/%dir%/gi, "right")).addClass(c), e.click(function() {
						m.prev()
					}), i.click(function() {
						m.next()
					}), m.container.append(e.add(i)))
				}), d("Change" + t, function() {
					m._preloadTimeout && clearTimeout(m._preloadTimeout), m._preloadTimeout = setTimeout(function() {
						m.preloadNearbyImages(), m._preloadTimeout = null
					}, 16)
				}), void d(a + t, function() {
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
				for (var t = m.st.gallery.preload, e = Math.min(t[0], m.items.length), i = Math.min(t[1], m.items.length), n = 1; n <= (m.direction ? i : e); n++) m._preloadItem(m.index + n);
				for (n = 1; n <= (m.direction ? e : i); n++) m._preloadItem(m.index - n)
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
	var W = "retina";
	u.magnificPopup.registerModule(W, {
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
				var i, n;
				1 < window.devicePixelRatio && (i = m.st.retina, n = i.ratio, 1 < (n = isNaN(n) ? n() : n) && (d("ImageHasSize." + W, function(t, e) {
					e.img.css({
						"max-width": e.img[0].naturalWidth / n,
						width: "100%"
					})
				}), d("ElementParse." + W, function(t, e) {
					e.src = i.replaceSrc(e, n)
				})))
			}
		}
	}), r()
}),
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "modernizr"], t) : "object" == typeof exports ? module.exports = t(require("jquery"), window.Modernizr) : window.Shuffle = t(window.jQuery, window.Modernizr)
}(function(d, t, s) {
	"use strict";

	function r(t, e, i) {
		for (var n = 0, o = t.length; n < o; n++)
			if (e.call(i, t[n], n, t) === {}) return
	}

	function i(t, e, i) {
		return setTimeout(d.proxy(t, e), i)
	}

	function a(t) {
		return Math.max.apply(Math, t)
	}

	function n(t) {
		return d.isNumeric(t) ? t : 0
	}
	if ("object" != typeof t) throw new Error("Shuffle.js requires Modernizr.\nhttp://vestride.github.io/Shuffle/#dependencies");

	function l(t, e) {
		this.x = n(t), this.y = n(e)
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
		b = window.getComputedStyle || function() {};
	l.equals = function(t, e) {
		return t.x === e.x && t.y === e.y
	};
	var w = function() {
			if (!v) return !1;
			var t = document.body || document.documentElement,
				e = document.createElement("div");
			e.style.cssText = "width:10px;padding:2px;-webkit-box-sizing:border-box;box-sizing:border-box;", t.appendChild(e);
			var i = "10px" === b(e, null).width;
			return t.removeChild(e), i
		}(),
		x = 0,
		_ = d(window),
		C = function(t, e) {
			e = e || {}, d.extend(this, C.options, e, C.settings), this.$el = d(t), this.element = t, this.unique = "shuffle_" + x++, this._fire(C.EventType.LOADING), this._init(), i(function() {
				this.initialized = !0, this._fire(C.EventType.DONE)
			}, this, 16)
		};
	return C.EventType = {
		LOADING: "loading",
		DONE: "done",
		LAYOUT: "layout",
		REMOVED: "removed"
	}, C.ClassName = {
		BASE: y,
		SHUFFLE_ITEM: "shuffle-item",
		FILTERED: "filtered",
		CONCEALED: "concealed"
	}, C.options = {
		group: "all",
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
		throttle: function(i, n, o) {
			var r, s, a, l = null,
				c = 0;

			function u() {
				c = !1 === o.leading ? 0 : d.now(), l = null, a = i.apply(r, s), r = s = null
			}
			return o = o || {},
				function() {
					var t = d.now();
					c || !1 !== o.leading || (c = t);
					var e = n - (t - c);
					return r = this, s = arguments, e <= 0 || n < e ? (clearTimeout(l), l = null, c = t, a = i.apply(r, s), r = s = null) : l || !1 === o.trailing || (l = setTimeout(u, e)), a
				}
		},
		throttleTime: 300,
		sequentialFadeDelay: 150,
		supported: m
	}, C.settings = {
		useSizer: !1,
		itemCss: {
			position: "absolute",
			top: 0,
			left: 0,
			visibility: "visible"
		},
		revealAppendedDelay: 300,
		lastSort: {},
		lastFilter: "all",
		enabled: !0,
		destroyed: !1,
		initialized: !1,
		_animations: [],
		_transitions: [],
		_isMovementCanceled: !1,
		styleQueue: []
	}, C.Point = l, C._getItemTransformString = function(t, e) {
		return g ? "translate3d(" + t.x + "px, " + t.y + "px, 0) scale3d(" + e + ", " + e + ", 1)" : "translate(" + t.x + "px, " + t.y + "px) scale(" + e + ")"
	}, C._getNumberStyle = function(t, e, i) {
		if (v) {
			i = i || b(t, null);
			var n = C._getFloat(i[e]);
			return w || "width" !== e ? w || "height" !== e || (n += C._getFloat(i.paddingTop) + C._getFloat(i.paddingBottom) + C._getFloat(i.borderTopWidth) + C._getFloat(i.borderBottomWidth)) : n += C._getFloat(i.paddingLeft) + C._getFloat(i.paddingRight) + C._getFloat(i.borderLeftWidth) + C._getFloat(i.borderRightWidth), n
		}
		return C._getFloat(d(t).css(e))
	}, C._getFloat = function(t) {
		return n(parseFloat(t))
	}, C._getOuterWidth = function(t, e) {
		var i = b(t, null),
			n = C._getNumberStyle(t, "width", i);
		return e && (n += C._getNumberStyle(t, "marginLeft", i) + C._getNumberStyle(t, "marginRight", i)), n
	}, C._getOuterHeight = function(t, e) {
		var i = b(t, null),
			n = C._getNumberStyle(t, "height", i);
		return e && (n += C._getNumberStyle(t, "marginTop", i) + C._getNumberStyle(t, "marginBottom", i)), n
	}, C._skipTransition = function(t, e, i) {
		var n = t.style[u];
		t.style[u] = "0ms", e.call(i);
		t.offsetWidth;
		t.style[u] = n
	}, C.prototype._init = function() {
		this.$items = this._getItems(), this.sizer = this._getElementOption(this.sizer), this.sizer && (this.useSizer = !0), this.$el.addClass(C.ClassName.BASE), this._initItems(), _.on("resize.shuffle." + this.unique, this._getResizeFunction());
		var t = this.$el.css(["position", "overflow"]),
			e = C._getOuterWidth(this.element);
		this._validateStyles(t), this._setColumns(e), this.shuffle(this.group, this.initialSort), this.supported && i(function() {
			this._setTransitions(), this.element.style[o] = "height " + this.speed + "ms " + this.easing
		}, this)
	}, C.prototype._getResizeFunction = function() {
		var t = d.proxy(this._onResize, this);
		return this.throttle ? this.throttle(t, this.throttleTime) : t
	}, C.prototype._getElementOption = function(t) {
		return "string" == typeof t ? this.$el.find(t)[0] || null : t && t.nodeType && 1 === t.nodeType ? t : t && t.jquery ? t[0] : null
	}, C.prototype._validateStyles = function(t) {
		"static" === t.position && (this.element.style.position = "relative"), "hidden" !== t.overflow && (this.element.style.overflow = "hidden")
	}, C.prototype._filter = function(t, e) {
		t = t || this.lastFilter, e = e || this.$items;
		var i = this._getFilteredSets(t, e);
		return this._toggleFilterClasses(i.filtered, i.concealed), "string" == typeof(this.lastFilter = t) && (this.group = t), i.filtered
	}, C.prototype._getFilteredSets = function(i, t) {
		var n = d(),
			o = d();
		return "all" === i ? n = t : r(t, function(t) {
			var e = d(t);
			this._doesPassFilter(i, e) ? n = n.add(e) : o = o.add(e)
		}, this), {
			filtered: n,
			concealed: o
		}
	}, C.prototype._doesPassFilter = function(t, e) {
		if (d.isFunction(t)) return t.call(e[0], e, this);
		var i = e.data("groups"),
			n = this.delimeter && !d.isArray(i) ? i.split(this.delimeter) : i;
		return -1 < d.inArray(t, n)
	}, C.prototype._toggleFilterClasses = function(t, e) {
		t.removeClass(C.ClassName.CONCEALED).addClass(C.ClassName.FILTERED), e.removeClass(C.ClassName.FILTERED).addClass(C.ClassName.CONCEALED)
	}, C.prototype._initItems = function(t) {
		(t = t || this.$items).addClass([C.ClassName.SHUFFLE_ITEM, C.ClassName.FILTERED].join(" ")), t.css(this.itemCss).data("point", new l).data("scale", 1)
	}, C.prototype._updateItemCount = function() {
		this.visibleItems = this._getFilteredItems().length
	}, C.prototype._setTransition = function(t) {
		t.style[o] = f + " " + this.speed + "ms " + this.easing + ", opacity " + this.speed + "ms " + this.easing
	}, C.prototype._setTransitions = function(t) {
		r(t = t || this.$items, function(t) {
			this._setTransition(t)
		}, this)
	}, C.prototype._setSequentialDelay = function(t) {
		this.supported && r(t, function(t, e) {
			t.style[c] = "0ms," + (e + 1) * this.sequentialFadeDelay + "ms"
		}, this)
	}, C.prototype._getItems = function() {
		return this.$el.children(this.itemSelector)
	}, C.prototype._getFilteredItems = function() {
		return this.$items.filter("." + C.ClassName.FILTERED)
	}, C.prototype._getConcealedItems = function() {
		return this.$items.filter("." + C.ClassName.CONCEALED)
	}, C.prototype._getColumnSize = function(t, e) {
		var i = d.isFunction(this.columnWidth) ? this.columnWidth(t) : this.useSizer ? C._getOuterWidth(this.sizer) : this.columnWidth ? this.columnWidth : 0 < this.$items.length ? C._getOuterWidth(this.$items[0], !0) : t;
		return 0 === i && (i = t), i + e
	}, C.prototype._getGutterSize = function(t) {
		return d.isFunction(this.gutterWidth) ? this.gutterWidth(t) : this.useSizer ? C._getNumberStyle(this.sizer, "marginLeft") : this.gutterWidth
	}, C.prototype._setColumns = function(t) {
		var e = t || C._getOuterWidth(this.element),
			i = this._getGutterSize(e),
			n = this._getColumnSize(e, i),
			o = (e + i) / n;
		Math.abs(Math.round(o) - o) < this.columnThreshold && (o = Math.round(o)), this.cols = Math.max(Math.floor(o), 1), this.containerWidth = e, this.colWidth = n
	}, C.prototype._setContainerSize = function() {
		this.$el.css("height", this._getContainerSize())
	}, C.prototype._getContainerSize = function() {
		return a(this.positions)
	}, C.prototype._fire = function(t, e) {
		this.$el.trigger(t + "." + y, e && e.length ? e : [this])
	}, C.prototype._resetCols = function() {
		var t = this.cols;
		for (this.positions = []; t--;) this.positions.push(0)
	}, C.prototype._layout = function(t, e) {
		r(t, function(t) {
			this._layoutItem(t, !!e)
		}, this), this._processStyleQueue(), this._setContainerSize()
	}, C.prototype._layoutItem = function(t, e) {
		var i = d(t),
			n = i.data(),
			o = n.point,
			r = n.scale,
			s = {
				width: C._getOuterWidth(t, !0),
				height: C._getOuterHeight(t, !0)
			},
			a = this._getItemPosition(s);
		l.equals(o, a) && 1 === r || (n.point = a, n.scale = 1, this.styleQueue.push({
			$item: i,
			point: a,
			scale: 1,
			opacity: e ? 0 : 1,
			skipTransition: e || 0 === this.speed,
			callfront: function() {
				e || i.css("visibility", "visible")
			},
			callback: function() {
				e && i.css("visibility", "hidden")
			}
		}))
	}, C.prototype._getItemPosition = function(t) {
		for (var e = this._getColumnSpan(t.width, this.colWidth, this.cols), i = this._getColumnSet(e, this.cols), n = this._getShortColumn(i, this.buffer), o = new l(Math.round(this.colWidth * n), Math.round(i[n])), r = i[n] + t.height, s = this.cols + 1 - i.length, a = 0; a < s; a++) this.positions[n + a] = r;
		return o
	}, C.prototype._getColumnSpan = function(t, e, i) {
		var n = t / e;
		return Math.abs(Math.round(n) - n) < this.columnThreshold && (n = Math.round(n)), Math.min(Math.ceil(n), i)
	}, C.prototype._getColumnSet = function(t, e) {
		if (1 === t) return this.positions;
		for (var i = e + 1 - t, n = [], o = 0; o < i; o++) n[o] = a(this.positions.slice(o, o + t));
		return n
	}, C.prototype._getShortColumn = function(t, e) {
		for (var i, n = (i = t, Math.min.apply(Math, i)), o = 0, r = t.length; o < r; o++)
			if (t[o] >= n - e && t[o] <= n + e) return o;
		return 0
	}, C.prototype._shrink = function(t) {
		r(t || this._getConcealedItems(), function(t) {
			var e = d(t),
				i = e.data();
			.001 !== i.scale && (i.scale = .001, this.styleQueue.push({
				$item: e,
				point: i.point,
				scale: .001,
				opacity: 0,
				callback: function() {
					e.css("visibility", "hidden")
				}
			}))
		}, this)
	}, C.prototype._onResize = function() {
		this.enabled && !this.destroyed && C._getOuterWidth(this.element) !== this.containerWidth && this.update()
	}, C.prototype._getStylesForTransition = function(t) {
		var e = {
			opacity: t.opacity
		};
		return this.supported ? e[p] = C._getItemTransformString(t.point, t.scale) : (e.left = t.point.x, e.top = t.point.y), e
	}, C.prototype._transition = function(t) {
		var e = this._getStylesForTransition(t);
		this._startItemAnimation(t.$item, e, t.callfront || d.noop, t.callback || d.noop)
	}, C.prototype._startItemAnimation = function(t, e, i, n) {
		function o(t) {
			t.target === t.currentTarget && (d(t.target).off(h, o), s._removeTransitionReference(a), n())
		}
		var r, s = this,
			a = {
				$element: t,
				handler: o
			};
		if (i(), !this.initialized) return t.css(e), void n();
		this.supported ? (t.css(e), t.on(h, o), this._transitions.push(a)) : (r = t.stop(!0).animate(e, this.speed, "swing", n), this._animations.push(r.promise()))
	}, C.prototype._processStyleQueue = function(t) {
		this.isTransitioning && this._cancelMovement();
		var e = d();
		r(this.styleQueue, function(t) {
			t.skipTransition ? this._styleImmediately(t) : (e = e.add(t.$item), this._transition(t))
		}, this), 0 < e.length && this.initialized && 0 < this.speed ? (this.isTransitioning = !0, this.supported ? this._whenCollectionDone(e, h, this._movementFinished) : this._whenAnimationsDone(this._movementFinished)) : t || i(this._layoutEnd, this), this.styleQueue.length = 0
	}, C.prototype._cancelMovement = function() {
		this.supported ? r(this._transitions, function(t) {
			t.$element.off(h, t.handler)
		}) : (this._isMovementCanceled = !0, this.$items.stop(!0), this._isMovementCanceled = !1), this._transitions.length = 0, this.isTransitioning = !1
	}, C.prototype._removeTransitionReference = function(t) {
		var e = d.inArray(t, this._transitions); - 1 < e && this._transitions.splice(e, 1)
	}, C.prototype._styleImmediately = function(t) {
		C._skipTransition(t.$item[0], function() {
			t.$item.css(this._getStylesForTransition(t))
		}, this)
	}, C.prototype._movementFinished = function() {
		this.isTransitioning = !1, this._layoutEnd()
	}, C.prototype._layoutEnd = function() {
		this._fire(C.EventType.LAYOUT)
	}, C.prototype._addItems = function(t, e, i) {
		this._initItems(t), this._setTransitions(t), this.$items = this._getItems(), this._shrink(t), r(this.styleQueue, function(t) {
			t.skipTransition = !0
		}), this._processStyleQueue(!0), e ? this._addItemsToEnd(t, i) : this.shuffle(this.lastFilter)
	}, C.prototype._addItemsToEnd = function(t, e) {
		var i = this._filter(null, t).get();
		this._updateItemCount(), this._layout(i, !0), e && this.supported && this._setSequentialDelay(i), this._revealAppended(i)
	}, C.prototype._revealAppended = function(t) {
		i(function() {
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
	}, C.prototype._whenCollectionDone = function(t, e, i) {
		function n(t) {
			t.target === t.currentTarget && (d(t.target).off(e, n), ++o === r && (s._removeTransitionReference(a), i.call(s)))
		}
		var o = 0,
			r = t.length,
			s = this,
			a = {
				$element: t,
				handler: n
			};
		t.on(e, n), this._transitions.push(a)
	}, C.prototype._whenAnimationsDone = function(t) {
		d.when.apply(null, this._animations).always(d.proxy(function() {
			this._animations.length = 0, this._isMovementCanceled || t.call(this)
		}, this))
	}, C.prototype.shuffle = function(t, e) {
		this.enabled && (t = t || "all", this._filter(t), this._updateItemCount(), this._shrink(), this.sort(e))
	}, C.prototype.sort = function(t) {
		var e, i;
		this.enabled && (this._resetCols(), e = t || this.lastSort, i = this._getFilteredItems().sorted(e), this._layout(i), this.lastSort = e)
	}, C.prototype.update = function(t) {
		this.enabled && (t || this._setColumns(), this.sort())
	}, C.prototype.layout = function() {
		this.update(!0)
	}, C.prototype.appended = function(t, e, i) {
		this._addItems(t, !0 === e, !1 !== i)
	}, C.prototype.disable = function() {
		this.enabled = !1
	}, C.prototype.enable = function(t) {
		!(this.enabled = !0) !== t && this.update()
	}, C.prototype.remove = function(t) {
		t.length && t.jquery && (this._toggleFilterClasses(d(), t), this._shrink(t), this.sort(), this.$el.one(C.EventType.LAYOUT + "." + y, d.proxy(function() {
			t.remove(), this.$items = this._getItems(), this._updateItemCount(), this._fire(C.EventType.REMOVED, [t, this]), t = null
		}, this)))
	}, C.prototype.destroy = function() {
		_.off("." + this.unique), this.$el.removeClass(y).removeAttr("style").removeData(y), this.$items.removeAttr("style").removeData("point").removeData("scale").removeClass([C.ClassName.CONCEALED, C.ClassName.FILTERED, C.ClassName.SHUFFLE_ITEM].join(" ")), this.$items = null, this.$el = null, this.sizer = null, this.element = null, this._transitions = null, this.destroyed = !0
	}, d.fn.shuffle = function(i) {
		var n = Array.prototype.slice.call(arguments, 1);
		return this.each(function() {
			var t = d(this),
				e = t.data(y);
			e ? "string" == typeof i && e[i] && e[i].apply(e, n) : (e = new C(this, i), t.data(y, e))
		})
	}, d.fn.sorted = function(t) {
		var o = d.extend({}, d.fn.sorted.defaults, t),
			e = this.get(),
			r = !1;
		return e.length ? o.randomize ? function(t) {
			var e, i, n = t.length;
			if (!n) return t;
			for (; --n;) e = t[i = Math.floor(Math.random() * (n + 1))], t[i] = t[n], t[n] = e;
			return t
		}(e) : (d.isFunction(o.by) && e.sort(function(t, e) {
			if (r) return 0;
			var i = o.by(d(t)),
				n = o.by(d(e));
			return i === s && n === s ? (r = !0, 0) : i < n || "sortFirst" === i || "sortLast" === n ? -1 : n < i || "sortLast" === i || "sortFirst" === n ? 1 : 0
		}), r ? this.get() : (o.reverse && e.reverse(), e)) : []
	}, d.fn.sorted.defaults = {
		reverse: !1,
		by: null,
		randomize: !1
	}, C
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
	var i = [],
		u = i.slice,
		m = i.concat,
		a = i.push,
		o = i.indexOf,
		n = {},
		r = n.toString,
		g = n.hasOwnProperty,
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
			i = C.type(t);
		return "function" !== i && !C.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === i || 0 === e || "number" == typeof e && 0 < e && e - 1 in t))
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
		map: function(i) {
			return this.pushStack(C.map(this, function(t, e) {
				return i.call(t, e, t)
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
				i = +t + (t < 0 ? e : 0);
			return this.pushStack(0 <= i && i < e ? [this[i]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: a,
		sort: i.sort,
		splice: i.splice
	}, C.extend = C.fn.extend = function() {
		var t, e, i, n, o, r, s = arguments[0] || {},
			a = 1,
			l = arguments.length,
			c = !1;
		for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || C.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
			if (null != (t = arguments[a]))
				for (e in t) i = s[e], s !== (n = t[e]) && (c && n && (C.isPlainObject(n) || (o = C.isArray(n))) ? (r = o ? (o = !1, i && C.isArray(i) ? i : []) : i && C.isPlainObject(i) ? i : {}, s[e] = C.extend(c, r, n)) : void 0 !== n && (s[e] = n));
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
			return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? n[r.call(t)] || "object" : typeof t
		},
		globalEval: function(t) {
			var e, i = eval;
			(t = C.trim(t)) && (1 === t.indexOf("use strict") ? ((e = y.createElement("script")).text = t, y.head.appendChild(e).parentNode.removeChild(e)) : i(t))
		},
		camelCase: function(t) {
			return t.replace(l, "ms-").replace(c, e)
		},
		nodeName: function(t, e) {
			return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
		},
		each: function(t, e, i) {
			var n = 0,
				o = t.length,
				r = d(t);
			if (i) {
				if (r)
					for (; n < o && !1 !== e.apply(t[n], i); n++);
				else
					for (n in t)
						if (!1 === e.apply(t[n], i)) break
			} else if (r)
				for (; n < o && !1 !== e.call(t[n], n, t[n]); n++);
			else
				for (n in t)
					if (!1 === e.call(t[n], n, t[n])) break;
			return t
		},
		trim: function(t) {
			return null == t ? "" : (t + "").replace(s, "")
		},
		makeArray: function(t, e) {
			var i = e || [];
			return null != t && (d(Object(t)) ? C.merge(i, "string" == typeof t ? [t] : t) : a.call(i, t)), i
		},
		inArray: function(t, e, i) {
			return null == e ? -1 : o.call(e, t, i)
		},
		merge: function(t, e) {
			for (var i = +e.length, n = 0, o = t.length; n < i; n++) t[o++] = e[n];
			return t.length = o, t
		},
		grep: function(t, e, i) {
			for (var n = [], o = 0, r = t.length, s = !i; o < r; o++) !e(t[o], o) != s && n.push(t[o]);
			return n
		},
		map: function(t, e, i) {
			var n, o = 0,
				r = t.length,
				s = [];
			if (d(t))
				for (; o < r; o++) null != (n = e(t[o], o, i)) && s.push(n);
			else
				for (o in t) null != (n = e(t[o], o, i)) && s.push(n);
			return m.apply([], s)
		},
		guid: 1,
		proxy: function(t, e) {
			var i, n, o;
			return "string" == typeof e && (i = t[e], e = t, t = i), C.isFunction(t) ? (n = u.call(arguments, 2), (o = function() {
				return t.apply(e || this, n.concat(u.call(arguments)))
			}).guid = t.guid = t.guid || C.guid++, o) : void 0
		},
		now: Date.now,
		support: v
	}), C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
		n["[object " + e + "]"] = e.toLowerCase()
	});
	var h = function(i) {
		function d(t, e, i) {
			var n = "0x" + e - 65536;
			return n != n || i ? e : n < 0 ? String.fromCharCode(65536 + n) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
		}

		function n() {
			v()
		}
		var t, f, w, r, o, m, h, g, x, c, u, v, _, s, y, b, a, p, C, T = "sizzle" + +new Date,
			E = i.document,
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
			R = e.push,
			j = e.slice,
			N = function(t, e) {
				for (var i = 0, n = t.length; i < n; i++)
					if (t[i] === e) return i;
				return -1
			},
			W = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			F = "[\\x20\\t\\r\\n\\f]",
			P = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			M = P.replace("w", "w#"),
			$ = "\\[" + F + "*(" + P + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + F + "*\\]",
			H = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
			B = new RegExp(F + "+", "g"),
			q = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
			Y = new RegExp("^" + F + "*," + F + "*"),
			X = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
			U = new RegExp("=" + F + "*([^\\]'\"]*?)" + F + "*\\]", "g"),
			Q = new RegExp(H),
			V = new RegExp("^" + M + "$"),
			K = {
				ID: new RegExp("^#(" + P + ")"),
				CLASS: new RegExp("^\\.(" + P + ")"),
				TAG: new RegExp("^(" + P.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + $),
				PSEUDO: new RegExp("^" + H),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + W + ")$", "i"),
				needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
			},
			Z = /^(?:input|select|textarea|button)$/i,
			G = /^h\d$/i,
			J = /^[^{]+\{\s*\[native \w/,
			tt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			et = /[+~]/,
			it = /'|\\/g,
			nt = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig");
		try {
			R.apply(e = j.call(E.childNodes), E.childNodes), e[E.childNodes.length].nodeType
		} catch (t) {
			R = {
				apply: e.length ? function(t, e) {
					A.apply(t, j.call(e))
				} : function(t, e) {
					for (var i = t.length, n = 0; t[i++] = e[n++];);
					t.length = i - 1
				}
			}
		}

		function ot(t, e, i, n) {
			var o, r, s, a, l, c, u, d, h, p;
			if ((e ? e.ownerDocument || e : E) !== _ && v(e), i = i || [], a = (e = e || _).nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return i;
			if (!n && y) {
				if (11 !== a && (o = tt.exec(t)))
					if (s = o[1]) {
						if (9 === a) {
							if (!(r = e.getElementById(s)) || !r.parentNode) return i;
							if (r.id === s) return i.push(r), i
						} else if (e.ownerDocument && (r = e.ownerDocument.getElementById(s)) && C(e, r) && r.id === s) return i.push(r), i
					} else {
						if (o[2]) return R.apply(i, e.getElementsByTagName(t)), i;
						if ((s = o[3]) && f.getElementsByClassName) return R.apply(i, e.getElementsByClassName(s)), i
					} if (f.qsa && (!b || !b.test(t))) {
					if (d = u = T, h = e, p = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
						for (c = m(t), (u = e.getAttribute("id")) ? d = u.replace(it, "\\$&") : e.setAttribute("id", d), d = "[id='" + d + "'] ", l = c.length; l--;) c[l] = d + pt(c[l]);
						h = et.test(t) && dt(e.parentNode) || e, p = c.join(",")
					}
					if (p) try {
						return R.apply(i, h.querySelectorAll(p)), i
					} catch (t) {} finally {
						u || e.removeAttribute("id")
					}
				}
			}
			return g(t.replace(q, "$1"), e, i, n)
		}

		function rt() {
			var i = [];

			function n(t, e) {
				return i.push(t + " ") > w.cacheLength && delete n[i.shift()], n[t + " "] = e
			}
			return n
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
			for (var i = t.split("|"), n = t.length; n--;) w.attrHandle[i[n]] = e
		}

		function ct(t, e) {
			var i = e && t,
				n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || 1 << 31) - (~t.sourceIndex || 1 << 31);
			if (n) return n;
			if (i)
				for (; i = i.nextSibling;)
					if (i === e) return -1;
			return t ? 1 : -1
		}

		function ut(s) {
			return st(function(r) {
				return r = +r, st(function(t, e) {
					for (var i, n = s([], t.length, r), o = n.length; o--;) t[i = n[o]] && (t[i] = !(e[i] = t[i]))
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
				var e, i, l = t ? t.ownerDocument || t : E;
				return l !== _ && 9 === l.nodeType && l.documentElement ? (s = (_ = l).documentElement, (i = l.defaultView) && i !== i.top && (i.addEventListener ? i.addEventListener("unload", n, !1) : i.attachEvent && i.attachEvent("onunload", n)), y = !o(l), f.attributes = at(function(t) {
					return t.className = "i", !t.getAttribute("className")
				}), f.getElementsByTagName = at(function(t) {
					return t.appendChild(l.createComment("")), !t.getElementsByTagName("*").length
				}), f.getElementsByClassName = J.test(l.getElementsByClassName), f.getById = at(function(t) {
					return s.appendChild(t).id = T, !l.getElementsByName || !l.getElementsByName(T).length
				}), f.getById ? (w.find.ID = function(t, e) {
					if (void 0 !== e.getElementById && y) {
						var i = e.getElementById(t);
						return i && i.parentNode ? [i] : []
					}
				}, w.filter.ID = function(t) {
					var e = t.replace(nt, d);
					return function(t) {
						return t.getAttribute("id") === e
					}
				}) : (delete w.find.ID, w.filter.ID = function(t) {
					var i = t.replace(nt, d);
					return function(t) {
						var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
						return e && e.value === i
					}
				}), w.find.TAG = f.getElementsByTagName ? function(t, e) {
					return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : f.qsa ? e.querySelectorAll(t) : void 0
				} : function(t, e) {
					var i, n = [],
						o = 0,
						r = e.getElementsByTagName(t);
					if ("*" !== t) return r;
					for (; i = r[o++];) 1 === i.nodeType && n.push(i);
					return n
				}, w.find.CLASS = f.getElementsByClassName && function(t, e) {
					return y ? e.getElementsByClassName(t) : void 0
				}, a = [], b = [], (f.qsa = J.test(l.querySelectorAll)) && (at(function(t) {
					s.appendChild(t).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && b.push("[*^$]=" + F + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || b.push("\\[" + F + "*(?:value|" + W + ")"), t.querySelectorAll("[id~=" + T + "-]").length || b.push("~="), t.querySelectorAll(":checked").length || b.push(":checked"), t.querySelectorAll("a#" + T + "+*").length || b.push(".#.+[+~]")
				}), at(function(t) {
					var e = l.createElement("input");
					e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && b.push("name" + F + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || b.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), b.push(",.*:")
				})), (f.matchesSelector = J.test(p = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && at(function(t) {
					f.disconnectedMatch = p.call(t, "div"), p.call(t, "[s!='']:x"), a.push("!=", H)
				}), b = b.length && new RegExp(b.join("|")), a = a.length && new RegExp(a.join("|")), e = J.test(s.compareDocumentPosition), C = e || J.test(s.contains) ? function(t, e) {
					var i = 9 === t.nodeType ? t.documentElement : t,
						n = e && e.parentNode;
					return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
				} : function(t, e) {
					if (e)
						for (; e = e.parentNode;)
							if (e === t) return !0;
					return !1
				}, D = e ? function(t, e) {
					if (t === e) return u = !0, 0;
					var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
					return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !f.sortDetached && e.compareDocumentPosition(t) === i ? t === l || t.ownerDocument === E && C(E, t) ? -1 : e === l || e.ownerDocument === E && C(E, e) ? 1 : c ? N(c, t) - N(c, e) : 0 : 4 & i ? -1 : 1)
				} : function(t, e) {
					if (t === e) return u = !0, 0;
					var i, n = 0,
						o = t.parentNode,
						r = e.parentNode,
						s = [t],
						a = [e];
					if (!o || !r) return t === l ? -1 : e === l ? 1 : o ? -1 : r ? 1 : c ? N(c, t) - N(c, e) : 0;
					if (o === r) return ct(t, e);
					for (i = t; i = i.parentNode;) s.unshift(i);
					for (i = e; i = i.parentNode;) a.unshift(i);
					for (; s[n] === a[n];) n++;
					return n ? ct(s[n], a[n]) : s[n] === E ? -1 : a[n] === E ? 1 : 0
				}, l) : _
			}, ot.matches = function(t, e) {
				return ot(t, null, null, e)
			}, ot.matchesSelector = function(t, e) {
				if ((t.ownerDocument || t) !== _ && v(t), e = e.replace(U, "='$1']"), !(!f.matchesSelector || !y || a && a.test(e) || b && b.test(e))) try {
					var i = p.call(t, e);
					if (i || f.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
				} catch (t) {}
				return 0 < ot(e, _, null, [t]).length
			}, ot.contains = function(t, e) {
				return (t.ownerDocument || t) !== _ && v(t), C(t, e)
			}, ot.attr = function(t, e) {
				(t.ownerDocument || t) !== _ && v(t);
				var i = w.attrHandle[e.toLowerCase()],
					n = i && z.call(w.attrHandle, e.toLowerCase()) ? i(t, e, !y) : void 0;
				return void 0 !== n ? n : f.attributes || !y ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
			}, ot.error = function(t) {
				throw new Error("Syntax error, unrecognized expression: " + t)
			}, ot.uniqueSort = function(t) {
				var e, i = [],
					n = 0,
					o = 0;
				if (u = !f.detectDuplicates, c = !f.sortStable && t.slice(0), t.sort(D), u) {
					for (; e = t[o++];) e === t[o] && (n = i.push(o));
					for (; n--;) t.splice(i[n], 1)
				}
				return c = null, t
			}, r = ot.getText = function(t) {
				var e, i = "",
					n = 0,
					o = t.nodeType;
				if (o) {
					if (1 === o || 9 === o || 11 === o) {
						if ("string" == typeof t.textContent) return t.textContent;
						for (t = t.firstChild; t; t = t.nextSibling) i += r(t)
					} else if (3 === o || 4 === o) return t.nodeValue
				} else
					for (; e = t[n++];) i += r(e);
				return i
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
						return t[1] = t[1].replace(nt, d), t[3] = (t[3] || t[4] || t[5] || "").replace(nt, d), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
					},
					CHILD: function(t) {
						return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t
					},
					PSEUDO: function(t) {
						var e, i = !t[6] && t[2];
						return K.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && Q.test(i) && (e = m(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
					}
				},
				filter: {
					TAG: function(t) {
						var e = t.replace(nt, d).toLowerCase();
						return "*" === t ? function() {
							return !0
						} : function(t) {
							return t.nodeName && t.nodeName.toLowerCase() === e
						}
					},
					CLASS: function(t) {
						var e = l[t + " "];
						return e || (e = new RegExp("(^|" + F + ")" + t + "(" + F + "|$)")) && l(t, function(t) {
							return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
						})
					},
					ATTR: function(i, n, o) {
						return function(t) {
							var e = ot.attr(t, i);
							return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === o : "!=" === n ? e !== o : "^=" === n ? o && 0 === e.indexOf(o) : "*=" === n ? o && -1 < e.indexOf(o) : "$=" === n ? o && e.slice(-o.length) === o : "~=" === n ? -1 < (" " + e.replace(B, " ") + " ").indexOf(o) : "|=" === n && (e === o || e.slice(0, o.length + 1) === o + "-"))
						}
					},
					CHILD: function(p, t, e, f, m) {
						var g = "nth" !== p.slice(0, 3),
							v = "last" !== p.slice(-4),
							y = "of-type" === t;
						return 1 === f && 0 === m ? function(t) {
							return !!t.parentNode
						} : function(t, e, i) {
							var n, o, r, s, a, l, c = g != v ? "nextSibling" : "previousSibling",
								u = t.parentNode,
								d = y && t.nodeName.toLowerCase(),
								h = !i && !y;
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
									for (a = (n = (o = u[T] || (u[T] = {}))[p] || [])[0] === S && n[1], s = n[0] === S && n[2], r = a && u.childNodes[a]; r = ++a && r && r[c] || (s = a = 0) || l.pop();)
										if (1 === r.nodeType && ++s && r === t) {
											o[p] = [S, a, s];
											break
										}
								} else if (h && (n = (t[T] || (t[T] = {}))[p]) && n[0] === S) s = n[1];
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
							for (var i, n = s(t, r), o = n.length; o--;) t[i = N(t, n[o])] = !(e[i] = n[o])
						}) : function(t) {
							return s(t, 0, e)
						}) : s
					}
				},
				pseudos: {
					not: st(function(t) {
						var n = [],
							o = [],
							a = h(t.replace(q, "$1"));
						return a[T] ? st(function(t, e, i, n) {
							for (var o, r = a(t, null, n, []), s = t.length; s--;)(o = r[s]) && (t[s] = !(e[s] = o))
						}) : function(t, e, i) {
							return n[0] = t, a(n, null, i, o), n[0] = null, !o.pop()
						}
					}),
					has: st(function(e) {
						return function(t) {
							return 0 < ot(e, t).length
						}
					}),
					contains: st(function(e) {
						return e = e.replace(nt, d),
							function(t) {
								return -1 < (t.textContent || t.innerText || r(t)).indexOf(e)
							}
					}),
					lang: st(function(i) {
						return V.test(i || "") || ot.error("unsupported lang: " + i), i = i.replace(nt, d).toLowerCase(),
							function(t) {
								var e;
								do {
									if (e = y ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === i || 0 === e.indexOf(i + "-")
								} while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
					}),
					target: function(t) {
						var e = i.location && i.location.hash;
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
					eq: ut(function(t, e, i) {
						return [i < 0 ? i + e : i]
					}),
					even: ut(function(t, e) {
						for (var i = 0; i < e; i += 2) t.push(i);
						return t
					}),
					odd: ut(function(t, e) {
						for (var i = 1; i < e; i += 2) t.push(i);
						return t
					}),
					lt: ut(function(t, e, i) {
						for (var n = i < 0 ? i + e : i; 0 <= --n;) t.push(n);
						return t
					}),
					gt: ut(function(t, e, i) {
						for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
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
			}) w.pseudos[t] = function(i) {
			return function(t) {
				var e = t.nodeName.toLowerCase();
				return ("input" === e || "button" === e) && t.type === i
			}
		}(t);

		function ht() {}

		function pt(t) {
			for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
			return n
		}

		function ft(s, t, e) {
			var a = t.dir,
				l = e && "parentNode" === a,
				c = k++;
			return t.first ? function(t, e, i) {
				for (; t = t[a];)
					if (1 === t.nodeType || l) return s(t, e, i)
			} : function(t, e, i) {
				var n, o, r = [S, c];
				if (i) {
					for (; t = t[a];)
						if ((1 === t.nodeType || l) && s(t, e, i)) return !0
				} else
					for (; t = t[a];)
						if (1 === t.nodeType || l) {
							if ((n = (o = t[T] || (t[T] = {}))[a]) && n[0] === S && n[1] === c) return r[2] = n[2];
							if ((o[a] = r)[2] = s(t, e, i)) return !0
						}
			}
		}

		function mt(o) {
			return 1 < o.length ? function(t, e, i) {
				for (var n = o.length; n--;)
					if (!o[n](t, e, i)) return !1;
				return !0
			} : o[0]
		}

		function gt(t, e, i, n, o) {
			for (var r, s = [], a = 0, l = t.length, c = null != e; a < l; a++) !(r = t[a]) || i && !i(r, n, o) || (s.push(r), c && e.push(a));
			return s
		}

		function vt(p, f, m, g, v, t) {
			return g && !g[T] && (g = vt(g)), v && !v[T] && (v = vt(v, t)), st(function(t, e, i, n) {
				var o, r, s, a = [],
					l = [],
					c = e.length,
					u = t || function(t, e, i) {
						for (var n = 0, o = e.length; n < o; n++) ot(t, e[n], i);
						return i
					}(f || "*", i.nodeType ? [i] : i, []),
					d = !p || !t && f ? u : gt(u, a, p, i, n),
					h = m ? v || (t ? p : c || g) ? [] : e : d;
				if (m && m(d, h, i, n), g)
					for (o = gt(h, l), g(o, [], i, n), r = o.length; r--;)(s = o[r]) && (h[l[r]] = !(d[l[r]] = s));
				if (t) {
					if (v || p) {
						if (v) {
							for (o = [], r = h.length; r--;)(s = h[r]) && o.push(d[r] = s);
							v(null, h = [], o, n)
						}
						for (r = h.length; r--;)(s = h[r]) && -1 < (o = v ? N(t, s) : a[r]) && (t[o] = !(e[o] = s))
					}
				} else h = gt(h === e ? h.splice(c, h.length) : h), v ? v(null, e, h, n) : R.apply(e, h)
			})
		}

		function yt(g, v) {
			function t(t, e, i, n, o) {
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
							if (a(r, e, i)) {
								n.push(r);
								break
							} o && (S = f)
					}
					y && ((r = !a && r) && l--, t && u.push(r))
				}
				if (l += c, y && c !== l) {
					for (s = 0; a = v[s++];) a(u, d, e, i);
					if (t) {
						if (0 < l)
							for (; c--;) u[c] || d[c] || (d[c] = O.call(n));
						d = gt(d)
					}
					R.apply(n, d), o && !t && 0 < d.length && 1 < l + v.length && ot.uniqueSort(n)
				}
				return o && (S = f, x = h), u
			}
			var y = 0 < v.length,
				b = 0 < g.length;
			return y ? st(t) : t
		}
		return ht.prototype = w.filters = w.pseudos, w.setFilters = new ht, m = ot.tokenize = function(t, e) {
			var i, n, o, r, s, a, l, c = L[t + " "];
			if (c) return e ? 0 : c.slice(0);
			for (s = t, a = [], l = w.preFilter; s;) {
				for (r in i && !(n = Y.exec(s)) || (n && (s = s.slice(n[0].length) || s), a.push(o = [])), i = !1, (n = X.exec(s)) && (i = n.shift(), o.push({
						value: i,
						type: n[0].replace(q, " ")
					}), s = s.slice(i.length)), w.filter) !(n = K[r].exec(s)) || l[r] && !(n = l[r](n)) || (i = n.shift(), o.push({
					value: i,
					type: r,
					matches: n
				}), s = s.slice(i.length));
				if (!i) break
			}
			return e ? s.length : s ? ot.error(t) : L(t, a).slice(0)
		}, h = ot.compile = function(t, e) {
			var i, n = [],
				o = [],
				r = I[t + " "];
			if (!r) {
				for (i = (e = e || m(t)).length; i--;)(r = function t(e) {
					for (var o, i, n, r = e.length, s = w.relative[e[0].type], a = s || w.relative[" "], l = s ? 1 : 0, c = ft(function(t) {
							return t === o
						}, a, !0), u = ft(function(t) {
							return -1 < N(o, t)
						}, a, !0), d = [function(t, e, i) {
							var n = !s && (i || e !== x) || ((o = e).nodeType ? c : u)(t, e, i);
							return o = null, n
						}]; l < r; l++)
						if (i = w.relative[e[l].type]) d = [ft(mt(d), i)];
						else {
							if ((i = w.filter[e[l].type].apply(null, e[l].matches))[T]) {
								for (n = ++l; n < r && !w.relative[e[n].type]; n++);
								return vt(1 < l && mt(d), 1 < l && pt(e.slice(0, l - 1).concat({
									value: " " === e[l - 2].type ? "*" : ""
								})).replace(q, "$1"), i, l < n && t(e.slice(l, n)), n < r && t(e = e.slice(n)), n < r && pt(e))
							}
							d.push(i)
						} return mt(d)
				}(e[i]))[T] ? n.push(r) : o.push(r);
				(r = I(t, yt(o, n))).selector = t
			}
			return r
		}, g = ot.select = function(t, e, i, n) {
			var o, r, s, a, l, c = "function" == typeof t && t,
				u = !n && m(t = c.selector || t);
			if (i = i || [], 1 === u.length) {
				if (2 < (r = u[0] = u[0].slice(0)).length && "ID" === (s = r[0]).type && f.getById && 9 === e.nodeType && y && w.relative[r[1].type]) {
					if (!(e = (w.find.ID(s.matches[0].replace(nt, d), e) || [])[0])) return i;
					c && (e = e.parentNode), t = t.slice(r.shift().value.length)
				}
				for (o = K.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !w.relative[a = s.type]);)
					if ((l = w.find[a]) && (n = l(s.matches[0].replace(nt, d), et.test(r[0].type) && dt(e.parentNode) || e))) {
						if (r.splice(o, 1), !(t = n.length && pt(r))) return R.apply(i, n), i;
						break
					}
			}
			return (c || h(t, u))(n, e, !y, i, et.test(t) && dt(e.parentNode) || e), i
		}, f.sortStable = T.split("").sort(D).join("") === T, f.detectDuplicates = !!u, v(), f.sortDetached = at(function(t) {
			return 1 & t.compareDocumentPosition(_.createElement("div"))
		}), at(function(t) {
			return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
		}) || lt("type|href|height|width", function(t, e, i) {
			return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
		}), f.attributes && at(function(t) {
			return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
		}) || lt("value", function(t, e, i) {
			return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
		}), at(function(t) {
			return null == t.getAttribute("disabled")
		}) || lt(W, function(t, e, i) {
			var n;
			return i ? void 0 : !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
		}), ot
	}(f);
	C.find = h, C.expr = h.selectors, C.expr[":"] = C.expr.pseudos, C.unique = h.uniqueSort, C.text = h.getText, C.isXMLDoc = h.isXML, C.contains = h.contains;
	var p = C.expr.match.needsContext,
		b = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		w = /^.[^:#\[\.,]*$/;

	function x(t, i, n) {
		if (C.isFunction(i)) return C.grep(t, function(t, e) {
			return !!i.call(t, e, t) !== n
		});
		if (i.nodeType) return C.grep(t, function(t) {
			return t === i !== n
		});
		if ("string" == typeof i) {
			if (w.test(i)) return C.filter(i, t, n);
			i = C.filter(i, t)
		}
		return C.grep(t, function(t) {
			return 0 <= o.call(i, t) !== n
		})
	}
	C.filter = function(t, e, i) {
		var n = e[0];
		return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? C.find.matchesSelector(n, t) ? [n] : [] : C.find.matches(t, C.grep(e, function(t) {
			return 1 === t.nodeType
		}))
	}, C.fn.extend({
		find: function(t) {
			var e, i = this.length,
				n = [],
				o = this;
			if ("string" != typeof t) return this.pushStack(C(t).filter(function() {
				for (e = 0; e < i; e++)
					if (C.contains(o[e], this)) return !0
			}));
			for (e = 0; e < i; e++) C.find(t, o[e], n);
			return (n = this.pushStack(1 < i ? C.unique(n) : n)).selector = this.selector ? this.selector + " " + t : t, n
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
		var i, n;
		if (!t) return this;
		if ("string" != typeof t) return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : C.isFunction(t) ? void 0 !== _.ready ? _.ready(t) : t(C) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), C.makeArray(t, this));
		if (!(i = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : T.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || _).find(t) : this.constructor(e).find(t);
		if (i[1]) {
			if (e = e instanceof C ? e[0] : e, C.merge(this, C.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : y, !0)), b.test(i[1]) && C.isPlainObject(e))
				for (i in e) C.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
			return this
		}
		return (n = y.getElementById(i[2])) && n.parentNode && (this.length = 1, this[0] = n), this.context = y, this.selector = t, this
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
		dir: function(t, e, i) {
			for (var n = [], o = void 0 !== i;
				(t = t[e]) && 9 !== t.nodeType;)
				if (1 === t.nodeType) {
					if (o && C(t).is(i)) break;
					n.push(t)
				} return n
		},
		sibling: function(t, e) {
			for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
			return i
		}
	}), C.fn.extend({
		has: function(t) {
			var e = C(t, this),
				i = e.length;
			return this.filter(function() {
				for (var t = 0; t < i; t++)
					if (C.contains(this, e[t])) return !0
			})
		},
		closest: function(t, e) {
			for (var i, n = 0, o = this.length, r = [], s = p.test(t) || "string" != typeof t ? C(t, e || this.context) : 0; n < o; n++)
				for (i = this[n]; i && i !== e; i = i.parentNode)
					if (i.nodeType < 11 && (s ? -1 < s.index(i) : 1 === i.nodeType && C.find.matchesSelector(i, t))) {
						r.push(i);
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
		parentsUntil: function(t, e, i) {
			return C.dir(t, "parentNode", i)
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
		nextUntil: function(t, e, i) {
			return C.dir(t, "nextSibling", i)
		},
		prevUntil: function(t, e, i) {
			return C.dir(t, "previousSibling", i)
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
	}, function(n, o) {
		C.fn[n] = function(t, e) {
			var i = C.map(this, o, t);
			return "Until" !== n.slice(-5) && (e = t), e && "string" == typeof e && (i = C.filter(e, i)), 1 < this.length && (S[n] || C.unique(i), E.test(n) && i.reverse()), this.pushStack(i)
		}
	});
	var L, I = /\S+/g,
		D = {};

	function z() {
		y.removeEventListener("DOMContentLoaded", z, !1), f.removeEventListener("load", z, !1), C.ready()
	}
	C.Callbacks = function(o) {
		var t, i;
		o = "string" == typeof o ? D[o] || (i = D[t = o] = {}, C.each(t.match(I) || [], function(t, e) {
			i[e] = !0
		}), i) : C.extend({}, o);
		var e, n, r, s, a, l, c = [],
			u = !o.once && [],
			d = function(t) {
				for (e = o.memory && t, n = !0, l = s || 0, s = 0, a = c.length, r = !0; c && l < a; l++)
					if (!1 === c[l].apply(t[0], t[1]) && o.stopOnFalse) {
						e = !1;
						break
					} r = !1, c && (u ? u.length && d(u.shift()) : e ? c = [] : h.disable())
			},
			h = {
				add: function() {
					var t;
					return c && (t = c.length, function n(t) {
						C.each(t, function(t, e) {
							var i = C.type(e);
							"function" === i ? o.unique && h.has(e) || c.push(e) : e && e.length && "string" !== i && n(e)
						})
					}(arguments), r ? a = c.length : e && (s = t, d(e))), this
				},
				remove: function() {
					return c && C.each(arguments, function(t, e) {
						for (var i; - 1 < (i = C.inArray(e, c, i));) c.splice(i, 1), r && (i <= a && a--, i <= l && l--)
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
					return !c || n && !u || (e = [t, (e = e || []).slice ? e.slice() : e], r ? u.push(e) : d(e)), this
				},
				fire: function() {
					return h.fireWith(this, arguments), this
				},
				fired: function() {
					return !!n
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
						return C.Deferred(function(n) {
							C.each(r, function(t, e) {
								var i = C.isFunction(o[t]) && o[t];
								a[e[1]](function() {
									var t = i && i.apply(this, arguments);
									t && C.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[e[0] + "With"](this === s ? n.promise() : this, i ? [t] : arguments)
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
				var i = e[2],
					n = e[3];
				s[e[1]] = i.add, n && i.add(function() {
					o = n
				}, r[1 ^ t][2].disable, r[2][2].lock), a[e[0]] = function() {
					return a[e[0] + "With"](this === a ? s : this, arguments), this
				}, a[e[0] + "With"] = i.fireWith
			}), s.promise(a), t && t.call(a, a), a
		},
		when: function(t) {
			function e(e, i, n) {
				return function(t) {
					i[e] = this, n[e] = 1 < arguments.length ? u.call(arguments) : t, n === o ? c.notifyWith(i, n) : --l || c.resolveWith(i, n)
				}
			}
			var o, i, n, r = 0,
				s = u.call(arguments),
				a = s.length,
				l = 1 !== a || t && C.isFunction(t.promise) ? a : 0,
				c = 1 === l ? t : C.Deferred();
			if (1 < a)
				for (o = new Array(a), i = new Array(a), n = new Array(a); r < a; r++) s[r] && C.isFunction(s[r].promise) ? s[r].promise().done(e(r, n, s)).fail(c.reject).progress(e(r, i, o)) : --l;
			return l || c.resolveWith(n, s), c.promise()
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
	var O = C.access = function(t, e, i, n, o, r, s) {
		var a = 0,
			l = t.length,
			c = null == i;
		if ("object" === C.type(i))
			for (a in o = !0, i) C.access(t, e, a, i[a], !0, r, s);
		else if (void 0 !== n && (o = !0, C.isFunction(n) || (s = !0), c && (e = s ? (e.call(t, n), null) : (c = e, function(t, e, i) {
				return c.call(C(t), i)
			})), e))
			for (; a < l; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
		return o ? t : c ? e.call(t) : l ? e(t[0], i) : r
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
			var i = {},
				n = e[this.expando];
			if (!n) {
				n = A.uid++;
				try {
					i[this.expando] = {
						value: n
					}, Object.defineProperties(e, i)
				} catch (t) {
					i[this.expando] = n, C.extend(e, i)
				}
			}
			return this.cache[n] || (this.cache[n] = {}), n
		},
		set: function(t, e, i) {
			var n, o = this.key(t),
				r = this.cache[o];
			if ("string" == typeof e) r[e] = i;
			else if (C.isEmptyObject(r)) C.extend(this.cache[o], e);
			else
				for (n in e) r[n] = e[n];
			return r
		},
		get: function(t, e) {
			var i = this.cache[this.key(t)];
			return void 0 === e ? i : i[e]
		},
		access: function(t, e, i) {
			var n;
			return void 0 === e || e && "string" == typeof e && void 0 === i ? void 0 !== (n = this.get(t, e)) ? n : this.get(t, C.camelCase(e)) : (this.set(t, e, i), void 0 !== i ? i : e)
		},
		remove: function(t, e) {
			var i, n, o, r = this.key(t),
				s = this.cache[r];
			if (void 0 === e) this.cache[r] = {};
			else {
				i = (n = C.isArray(e) ? e.concat(e.map(C.camelCase)) : (o = C.camelCase(e), e in s ? [e, o] : (n = o) in s ? [n] : n.match(I) || [])).length;
				for (; i--;) delete s[n[i]]
			}
		},
		hasData: function(t) {
			return !C.isEmptyObject(this.cache[t[this.expando]] || {})
		},
		discard: function(t) {
			t[this.expando] && delete this.cache[t[this.expando]]
		}
	};
	var R = new A,
		j = new A,
		N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		W = /([A-Z])/g;

	function F(t, e, i) {
		var n;
		if (void 0 === i && 1 === t.nodeType)
			if (n = "data-" + e.replace(W, "-$1").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) {
				try {
					i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : N.test(i) ? C.parseJSON(i) : i)
				} catch (t) {}
				j.set(t, e, i)
			} else i = void 0;
		return i
	}
	C.extend({
		hasData: function(t) {
			return j.hasData(t) || R.hasData(t)
		},
		data: function(t, e, i) {
			return j.access(t, e, i)
		},
		removeData: function(t, e) {
			j.remove(t, e)
		},
		_data: function(t, e, i) {
			return R.access(t, e, i)
		},
		_removeData: function(t, e) {
			R.remove(t, e)
		}
	}), C.fn.extend({
		data: function(n, t) {
			var e, i, o, r = this[0],
				s = r && r.attributes;
			if (void 0 !== n) return "object" == typeof n ? this.each(function() {
				j.set(this, n)
			}) : O(this, function(e) {
				var t, i = C.camelCase(n);
				if (r && void 0 === e) {
					if (void 0 !== (t = j.get(r, n))) return t;
					if (void 0 !== (t = j.get(r, i))) return t;
					if (void 0 !== (t = F(r, i, void 0))) return t
				} else this.each(function() {
					var t = j.get(this, i);
					j.set(this, i, e), -1 !== n.indexOf("-") && void 0 !== t && j.set(this, n, e)
				})
			}, null, t, 1 < arguments.length, null, !0);
			if (this.length && (o = j.get(r), 1 === r.nodeType && !R.get(r, "hasDataAttrs"))) {
				for (e = s.length; e--;) s[e] && (0 === (i = s[e].name).indexOf("data-") && (i = C.camelCase(i.slice(5)), F(r, i, o[i])));
				R.set(r, "hasDataAttrs", !0)
			}
			return o
		},
		removeData: function(t) {
			return this.each(function() {
				j.remove(this, t)
			})
		}
	}), C.extend({
		queue: function(t, e, i) {
			var n;
			return t ? (e = (e || "fx") + "queue", n = R.get(t, e), i && (!n || C.isArray(i) ? n = R.access(t, e, C.makeArray(i)) : n.push(i)), n || []) : void 0
		},
		dequeue: function(t, e) {
			e = e || "fx";
			var i = C.queue(t, e),
				n = i.length,
				o = i.shift(),
				r = C._queueHooks(t, e);
			"inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete r.stop, o.call(t, function() {
				C.dequeue(t, e)
			}, r)), !n && r && r.empty.fire()
		},
		_queueHooks: function(t, e) {
			var i = e + "queueHooks";
			return R.get(t, i) || R.access(t, i, {
				empty: C.Callbacks("once memory").add(function() {
					R.remove(t, [e + "queue", i])
				})
			})
		}
	}), C.fn.extend({
		queue: function(e, i) {
			var t = 2;
			return "string" != typeof e && (i = e, e = "fx", t--), arguments.length < t ? C.queue(this[0], e) : void 0 === i ? this : this.each(function() {
				var t = C.queue(this, e, i);
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
			function i() {
				--o || r.resolveWith(s, [s])
			}
			var n, o = 1,
				r = C.Deferred(),
				s = this,
				a = this.length;
			for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(n = R.get(s[a], t + "queueHooks")) && n.empty && (o++, n.empty.add(i));
			return i(), r.promise(e)
		}
	});

	function P(t, e) {
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
		add: function(e, t, i, n, o) {
			var r, s, a, l, c, u, d, h, p, f, m, g = R.get(e);
			if (g)
				for (i.handler && (i = (r = i).handler, o = r.selector), i.guid || (i.guid = C.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(t) {
						return typeof C != Y && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0
					}), c = (t = (t || "").match(I) || [""]).length; c--;) p = m = (a = V.exec(t[c]) || [])[1], f = (a[2] || "").split(".").sort(), p && (d = C.event.special[p] || {}, p = (o ? d.delegateType : d.bindType) || p, d = C.event.special[p] || {}, u = C.extend({
					type: p,
					origType: m,
					data: n,
					handler: i,
					guid: i.guid,
					selector: o,
					needsContext: o && C.expr.match.needsContext.test(o),
					namespace: f.join(".")
				}, r), (h = l[p]) || ((h = l[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, n, f, s) || e.addEventListener && e.addEventListener(p, s, !1)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = i.guid)), o ? h.splice(h.delegateCount++, 0, u) : h.push(u), C.event.global[p] = !0)
		},
		remove: function(t, e, i, n, o) {
			var r, s, a, l, c, u, d, h, p, f, m, g = R.hasData(t) && R.get(t);
			if (g && (l = g.events)) {
				for (c = (e = (e || "").match(I) || [""]).length; c--;)
					if (p = m = (a = V.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
						for (d = C.event.special[p] || {}, h = l[p = (n ? d.delegateType : d.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = h.length; r--;) u = h[r], !o && m !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (h.splice(r, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(t, u));
						s && !h.length && (d.teardown && !1 !== d.teardown.call(t, f, g.handle) || C.removeEvent(t, p, g.handle), delete l[p])
					} else
						for (p in l) C.event.remove(t, p + e[c], i, n, !0);
				C.isEmptyObject(l) && (delete g.handle, R.remove(t, "events"))
			}
		},
		trigger: function(t, e, i, n) {
			var o, r, s, a, l, c, u = [i || y],
				d = g.call(t, "type") ? t.type : t,
				h = g.call(t, "namespace") ? t.namespace.split(".") : [],
				p = r = i = i || y;
			if (3 !== i.nodeType && 8 !== i.nodeType && !Q.test(d + C.event.triggered) && (0 <= d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), a = d.indexOf(":") < 0 && "on" + d, (t = t[C.expando] ? t : new C.Event(d, "object" == typeof t && t)).isTrigger = n ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : C.makeArray(e, [t]), c = C.event.special[d] || {}, n || !c.trigger || !1 !== c.trigger.apply(i, e))) {
				if (!n && !c.noBubble && !C.isWindow(i)) {
					for (s = c.delegateType || d, Q.test(s + d) || (p = p.parentNode); p; p = p.parentNode) u.push(p), r = p;
					r === (i.ownerDocument || y) && u.push(r.defaultView || r.parentWindow || f)
				}
				for (o = 0;
					(p = u[o++]) && !t.isPropagationStopped();) t.type = 1 < o ? s : c.bindType || d, (l = (R.get(p, "events") || {})[t.type] && R.get(p, "handle")) && l.apply(p, e), (l = a && p[a]) && l.apply && C.acceptData(p) && (t.result = l.apply(p, e), !1 === t.result && t.preventDefault());
				return t.type = d, n || t.isDefaultPrevented() || c._default && !1 !== c._default.apply(u.pop(), e) || !C.acceptData(i) || a && C.isFunction(i[d]) && !C.isWindow(i) && ((r = i[a]) && (i[a] = null), i[C.event.triggered = d](), C.event.triggered = void 0, r && (i[a] = r)), t.result
			}
		},
		dispatch: function(t) {
			t = C.event.fix(t);
			var e, i, n, o, r, s = [],
				a = u.call(arguments),
				l = (R.get(this, "events") || {})[t.type] || [],
				c = C.event.special[t.type] || {};
			if ((a[0] = t).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
				for (s = C.event.handlers.call(this, t, l), e = 0;
					(o = s[e++]) && !t.isPropagationStopped();)
					for (t.currentTarget = o.elem, i = 0;
						(r = o.handlers[i++]) && !t.isImmediatePropagationStopped();) t.namespace_re && !t.namespace_re.test(r.namespace) || (t.handleObj = r, t.data = r.data, void 0 !== (n = ((C.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (t.result = n) && (t.preventDefault(), t.stopPropagation()));
				return c.postDispatch && c.postDispatch.call(this, t), t.result
			}
		},
		handlers: function(t, e) {
			var i, n, o, r, s = [],
				a = e.delegateCount,
				l = t.target;
			if (a && l.nodeType && (!t.button || "click" !== t.type))
				for (; l !== this; l = l.parentNode || this)
					if (!0 !== l.disabled || "click" !== t.type) {
						for (n = [], i = 0; i < a; i++) void 0 === n[o = (r = e[i]).selector + " "] && (n[o] = r.needsContext ? 0 <= C(o, this).index(l) : C.find(o, this, null, [l]).length), n[o] && n.push(r);
						n.length && s.push({
							elem: l,
							handlers: n
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
				var i, n, o, r = e.button;
				return null == t.pageX && null != e.clientX && (n = (i = t.target.ownerDocument || y).documentElement, o = i.body, t.pageX = e.clientX + (n && n.scrollLeft || o && o.scrollLeft || 0) - (n && n.clientLeft || o && o.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || o && o.scrollTop || 0) - (n && n.clientTop || o && o.clientTop || 0)), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
			}
		},
		fix: function(t) {
			if (t[C.expando]) return t;
			var e, i, n, o = t.type,
				r = t,
				s = this.fixHooks[o];
			for (s || (this.fixHooks[o] = s = U.test(o) ? this.mouseHooks : X.test(o) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, t = new C.Event(r), e = n.length; e--;) t[i = n[e]] = r[i];
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
		simulate: function(t, e, i, n) {
			var o = C.extend(new C.Event, i, {
				type: t,
				isSimulated: !0,
				originalEvent: {}
			});
			n ? C.event.trigger(o, null, e) : C.event.dispatch.call(e, o), o.isDefaultPrevented() && i.preventDefault()
		}
	}, C.removeEvent = function(t, e, i) {
		t.removeEventListener && t.removeEventListener(e, i, !1)
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
				var e, i = t.relatedTarget,
					n = t.handleObj;
				return i && (i === this || C.contains(this, i)) || (t.type = n.origType, e = n.handler.apply(this, arguments), t.type = o), e
			}
		}
	}), v.focusinBubbles || C.each({
		focus: "focusin",
		blur: "focusout"
	}, function(i, n) {
		function o(t) {
			C.event.simulate(n, t.target, C.event.fix(t), !0)
		}
		C.event.special[n] = {
			setup: function() {
				var t = this.ownerDocument || this,
					e = R.access(t, n);
				e || t.addEventListener(i, o, !0), R.access(t, n, (e || 0) + 1)
			},
			teardown: function() {
				var t = this.ownerDocument || this,
					e = R.access(t, n) - 1;
				e ? R.access(t, n, e) : (t.removeEventListener(i, o, !0), R.remove(t, n))
			}
		}
	}), C.fn.extend({
		on: function(t, e, i, n, o) {
			var r, s;
			if ("object" == typeof t) {
				for (s in "string" != typeof e && (i = i || e, e = void 0), t) this.on(s, e, i, t[s], o);
				return this
			}
			if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), !1 === n) n = Z;
			else if (!n) return this;
			return 1 === o && (r = n, (n = function(t) {
				return C().off(t), r.apply(this, arguments)
			}).guid = r.guid || (r.guid = C.guid++)), this.each(function() {
				C.event.add(this, t, n, i, e)
			})
		},
		one: function(t, e, i, n) {
			return this.on(t, e, i, n, 1)
		},
		off: function(t, e, i) {
			var n, o;
			if (t && t.preventDefault && t.handleObj) return n = t.handleObj, C(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
			if ("object" != typeof t) return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = Z), this.each(function() {
				C.event.remove(this, t, i, e)
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
			var i = this[0];
			return i ? C.event.trigger(t, e, i, !0) : void 0
		}
	});
	var J = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		tt = /<([\w:]+)/,
		et = /<|&#?\w+;/,
		it = /<(?:script|style|link)/i,
		nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
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
		for (var i = 0, n = t.length; i < n; i++) R.set(t[i], "globalEval", !e || R.get(e[i], "globalEval"))
	}

	function ht(t, e) {
		var i, n, o, r, s, a, l, c;
		if (1 === e.nodeType) {
			if (R.hasData(t) && (r = R.access(t), s = R.set(e, r), c = r.events))
				for (o in delete s.handle, s.events = {}, c)
					for (i = 0, n = c[o].length; i < n; i++) C.event.add(e, o, c[o][i]);
			j.hasData(t) && (a = j.access(t), l = C.extend({}, a), j.set(e, l))
		}
	}

	function pt(t, e) {
		var i = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
		return void 0 === e || e && C.nodeName(t, e) ? C.merge([t], i) : i
	}
	at.optgroup = at.option, at.tbody = at.tfoot = at.colgroup = at.caption = at.thead, at.th = at.td, C.extend({
		clone: function(t, e, i) {
			var n, o, r, s, a, l, c, u = t.cloneNode(!0),
				d = C.contains(t.ownerDocument, t);
			if (!(v.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || C.isXMLDoc(t)))
				for (s = pt(u), n = 0, o = (r = pt(t)).length; n < o; n++) a = r[n], l = s[n], "input" === (c = l.nodeName.toLowerCase()) && q.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
			if (e)
				if (i)
					for (r = r || pt(t), s = s || pt(u), n = 0, o = r.length; n < o; n++) ht(r[n], s[n]);
				else ht(t, u);
			return 0 < (s = pt(u, "script")).length && dt(s, !d && pt(t, "script")), u
		},
		buildFragment: function(t, e, i, n) {
			for (var o, r, s, a, l, c, u = e.createDocumentFragment(), d = [], h = 0, p = t.length; h < p; h++)
				if ((o = t[h]) || 0 === o)
					if ("object" === C.type(o)) C.merge(d, o.nodeType ? [o] : o);
					else if (et.test(o)) {
				for (r = r || u.appendChild(e.createElement("div")), s = (tt.exec(o) || ["", ""])[1].toLowerCase(), a = at[s] || at._default, r.innerHTML = a[1] + o.replace(J, "<$1></$2>") + a[2], c = a[0]; c--;) r = r.lastChild;
				C.merge(d, r.childNodes), (r = u.firstChild).textContent = ""
			} else d.push(e.createTextNode(o));
			for (u.textContent = "", h = 0; o = d[h++];)
				if ((!n || -1 === C.inArray(o, n)) && (l = C.contains(o.ownerDocument, o), r = pt(u.appendChild(o), "script"), l && dt(r), i))
					for (c = 0; o = r[c++];) ot.test(o.type || "") && i.push(o);
			return u
		},
		cleanData: function(t) {
			for (var e, i, n, o, r = C.event.special, s = 0; void 0 !== (i = t[s]); s++) {
				if (C.acceptData(i) && ((o = i[R.expando]) && (e = R.cache[o]))) {
					if (e.events)
						for (n in e.events) r[n] ? C.event.remove(i, n) : C.removeEvent(i, n, e.handle);
					R.cache[o] && delete R.cache[o]
				}
				delete j.cache[i[j.expando]]
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
			for (var i, n = t ? C.filter(t, this) : this, o = 0; null != (i = n[o]); o++) e || 1 !== i.nodeType || C.cleanData(pt(i)), i.parentNode && (e && C.contains(i.ownerDocument, i) && dt(pt(i, "script")), i.parentNode.removeChild(i));
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
					i = 0,
					n = this.length;
				if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
				if ("string" == typeof t && !it.test(t) && !at[(tt.exec(t) || ["", ""])[1].toLowerCase()]) {
					t = t.replace(J, "<$1></$2>");
					try {
						for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (C.cleanData(pt(e, !1)), e.innerHTML = t);
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
		domManip: function(i, n) {
			i = m.apply([], i);
			var t, e, o, r, s, a, l = 0,
				c = this.length,
				u = this,
				d = c - 1,
				h = i[0],
				p = C.isFunction(h);
			if (p || 1 < c && "string" == typeof h && !v.checkClone && nt.test(h)) return this.each(function(t) {
				var e = u.eq(t);
				p && (i[0] = h.call(this, t, e.html())), e.domManip(i, n)
			});
			if (c && (e = (t = C.buildFragment(i, this[0].ownerDocument, !1, this)).firstChild, 1 === t.childNodes.length && (t = e), e)) {
				for (r = (o = C.map(pt(t, "script"), ct)).length; l < c; l++) s = t, l !== d && (s = C.clone(s, !0, !0), r && C.merge(o, pt(s, "script"))), n.call(this[l], s, l);
				if (r)
					for (a = o[o.length - 1].ownerDocument, C.map(o, ut), l = 0; l < r; l++) s = o[l], ot.test(s.type || "") && !R.access(s, "globalEval") && C.contains(a, s) && (s.src ? C._evalUrl && C._evalUrl(s.src) : C.globalEval(s.textContent.replace(st, "")))
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
			for (var e, i = [], n = C(t), o = n.length - 1, r = 0; r <= o; r++) e = r === o ? this : this.clone(!0), C(n[r])[s](e), a.apply(i, e.get());
			return this.pushStack(i)
		}
	});
	var ft, mt = {};

	function gt(t, e) {
		var i, n = C(e.createElement(t)).appendTo(e.body),
			o = f.getDefaultComputedStyle && (i = f.getDefaultComputedStyle(n[0])) ? i.display : C.css(n[0], "display");
		return n.detach(), o
	}

	function vt(t) {
		var e = y,
			i = mt[t];
		return i || ("none" !== (i = gt(t, e)) && i || ((e = (ft = (ft || C("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentDocument).write(), e.close(), i = gt(t, e), ft.detach()), mt[t] = i), i
	}
	var yt, bt, wt, xt, _t, Ct = /^margin/,
		Tt = new RegExp("^(" + H + ")(?!px)[a-z%]+$", "i"),
		Et = function(t) {
			return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : f.getComputedStyle(t, null)
		};

	function St(t, e, i) {
		var n, o, r, s, a = t.style;
		return (i = i || Et(t)) && (s = i.getPropertyValue(e) || i[e]), i && ("" !== s || C.contains(t.ownerDocument, t) || (s = C.style(t, e)), Tt.test(s) && Ct.test(e) && (n = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
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
	})), C.swap = function(t, e, i, n) {
		var o, r, s = {};
		for (r in e) s[r] = t.style[r], t.style[r] = e[r];
		for (r in o = i.apply(t, n || []), e) t.style[r] = s[r];
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
		Rt = ["Webkit", "O", "Moz", "ms"];

	function jt(t, e) {
		if (e in t) return e;
		for (var i = e[0].toUpperCase() + e.slice(1), n = e, o = Rt.length; o--;)
			if ((e = Rt[o] + i) in t) return e;
		return n
	}

	function Nt(t, e, i) {
		var n = Dt.exec(e);
		return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
	}

	function Wt(t, e, i, n, o) {
		for (var r = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; r < 4; r += 2) "margin" === i && (s += C.css(t, i + B[r], !0, o)), n ? ("content" === i && (s -= C.css(t, "padding" + B[r], !0, o)), "margin" !== i && (s -= C.css(t, "border" + B[r] + "Width", !0, o))) : (s += C.css(t, "padding" + B[r], !0, o), "padding" !== i && (s += C.css(t, "border" + B[r] + "Width", !0, o)));
		return s
	}

	function Ft(t, e, i) {
		var n = !0,
			o = "width" === e ? t.offsetWidth : t.offsetHeight,
			r = Et(t),
			s = "border-box" === C.css(t, "boxSizing", !1, r);
		if (o <= 0 || null == o) {
			if (((o = St(t, e, r)) < 0 || null == o) && (o = t.style[e]), Tt.test(o)) return o;
			n = s && (v.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
		}
		return o + Wt(t, e, i || (s ? "border" : "content"), n, r) + "px"
	}

	function Pt(t, e) {
		for (var i, n, o, r = [], s = 0, a = t.length; s < a; s++)(n = t[s]).style && (r[s] = R.get(n, "olddisplay"), i = n.style.display, e ? (r[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && P(n) && (r[s] = R.access(n, "olddisplay", vt(n.nodeName)))) : (o = P(n), "none" === i && o || R.set(n, "olddisplay", o ? i : C.css(n, "display"))));
		for (s = 0; s < a; s++)(n = t[s]).style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? r[s] || "" : "none"));
		return t
	}

	function Mt(t, e, i, n, o) {
		return new Mt.prototype.init(t, e, i, n, o)
	}
	C.extend({
		cssHooks: {
			opacity: {
				get: function(t, e) {
					if (e) {
						var i = St(t, "opacity");
						return "" === i ? "1" : i
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
		style: function(t, e, i, n) {
			if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
				var o, r, s, a = C.camelCase(e),
					l = t.style;
				return e = C.cssProps[a] || (C.cssProps[a] = jt(l, a)), s = C.cssHooks[e] || C.cssHooks[a], void 0 === i ? s && "get" in s && void 0 !== (o = s.get(t, !1, n)) ? o : l[e] : ("string" === (r = typeof i) && (o = zt.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(C.css(t, e)), r = "number"), void(null != i && i == i && ("number" !== r || C.cssNumber[a] || (i += "px"), v.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (i = s.set(t, i, n)) || (l[e] = i))))
			}
		},
		css: function(t, e, i, n) {
			var o, r, s, a = C.camelCase(e);
			return e = C.cssProps[a] || (C.cssProps[a] = jt(t.style, a)), (s = C.cssHooks[e] || C.cssHooks[a]) && "get" in s && (o = s.get(t, !0, i)), void 0 === o && (o = St(t, e, n)), "normal" === o && e in At && (o = At[e]), "" === i || i ? (r = parseFloat(o), !0 === i || C.isNumeric(r) ? r || 0 : o) : o
		}
	}), C.each(["height", "width"], function(t, o) {
		C.cssHooks[o] = {
			get: function(t, e, i) {
				return e ? It.test(C.css(t, "display")) && 0 === t.offsetWidth ? C.swap(t, Ot, function() {
					return Ft(t, o, i)
				}) : Ft(t, o, i) : void 0
			},
			set: function(t, e, i) {
				var n = i && Et(t);
				return Nt(0, e, i ? Wt(t, o, i, "border-box" === C.css(t, "boxSizing", !1, n), n) : 0)
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
				for (var e = 0, i = {}, n = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) i[o + B[e] + r] = n[e] || n[e - 2] || n[0];
				return i
			}
		}, Ct.test(o) || (C.cssHooks[o + r].set = Nt)
	}), C.fn.extend({
		css: function(t, e) {
			return O(this, function(t, e, i) {
				var n, o, r = {},
					s = 0;
				if (C.isArray(e)) {
					for (n = Et(t), o = e.length; s < o; s++) r[e[s]] = C.css(t, e[s], !1, n);
					return r
				}
				return void 0 !== i ? C.style(t, e, i) : C.css(t, e)
			}, t, e, 1 < arguments.length)
		},
		show: function() {
			return Pt(this, !0)
		},
		hide: function() {
			return Pt(this)
		},
		toggle: function(t) {
			return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
				P(this) ? C(this).show() : C(this).hide()
			})
		}
	}), (C.Tween = Mt).prototype = {
		constructor: Mt,
		init: function(t, e, i, n, o, r) {
			this.elem = t, this.prop = i, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = r || (C.cssNumber[i] ? "" : "px")
		},
		cur: function() {
			var t = Mt.propHooks[this.prop];
			return t && t.get ? t.get(this) : Mt.propHooks._default.get(this)
		},
		run: function(t) {
			var e, i = Mt.propHooks[this.prop];
			return this.pos = e = this.options.duration ? C.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Mt.propHooks._default.set(this), this
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
		Vt = [function(e, t, i) {
			var n, o, r, s, a, l, c, u = this,
				d = {},
				h = e.style,
				p = e.nodeType && P(e),
				f = R.get(e, "fxshow");
			for (n in i.queue || (null == (a = C._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
					a.unqueued || l()
				}), a.unqueued++, u.always(function() {
					u.always(function() {
						a.unqueued--, C.queue(e, "fx").length || a.empty.fire()
					})
				})), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [h.overflow, h.overflowX, h.overflowY], c = C.css(e, "display"), "inline" === ("none" === c ? R.get(e, "olddisplay") || vt(e.nodeName) : c) && "none" === C.css(e, "float") && (h.display = "inline-block")), i.overflow && (h.overflow = "hidden", u.always(function() {
					h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
				})), t)
				if (o = t[n], Xt.exec(o)) {
					if (delete t[n], r = r || "toggle" === o, o === (p ? "hide" : "show")) {
						if ("show" !== o || !f || void 0 === f[n]) continue;
						p = !0
					}
					d[n] = f && f[n] || C.style(e, n)
				} else c = void 0;
			if (C.isEmptyObject(d)) "inline" === ("none" === c ? vt(e.nodeName) : c) && (h.display = c);
			else
				for (n in f ? "hidden" in f && (p = f.hidden) : f = R.access(e, "fxshow", {}), r && (f.hidden = !p), p ? C(e).show() : u.done(function() {
						C(e).hide()
					}), u.done(function() {
						var t;
						for (t in R.remove(e, "fxshow"), d) C.style(e, t, d[t])
					}), d) s = Jt(p ? f[n] : 0, n, u), n in f || (f[n] = s.start, p && (s.end = s.start, s.start = "width" === n || "height" === n ? 1 : 0))
		}],
		Kt = {
			"*": [function(t, e) {
				var i = this.createTween(t, e),
					n = i.cur(),
					o = Ut.exec(e),
					r = o && o[3] || (C.cssNumber[t] ? "" : "px"),
					s = (C.cssNumber[t] || "px" !== r && +n) && Ut.exec(C.css(i.elem, t)),
					a = 1,
					l = 20;
				if (s && s[3] !== r)
					for (r = r || s[3], o = o || [], s = +n || 1; s /= a = a || ".5", C.style(i.elem, t, s + r), a !== (a = i.cur() / n) && 1 !== a && --l;);
				return o && (s = i.start = +s || +n || 0, i.unit = r, i.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), i
			}]
		};

	function Zt() {
		return setTimeout(function() {
			$t = void 0
		}), $t = C.now()
	}

	function Gt(t, e) {
		var i, n = 0,
			o = {
				height: t
			};
		for (e = e ? 1 : 0; n < 4; n += 2 - e) o["margin" + (i = B[n])] = o["padding" + i] = t;
		return e && (o.opacity = o.width = t), o
	}

	function Jt(t, e, i) {
		for (var n, o = (Kt[e] || []).concat(Kt["*"]), r = 0, s = o.length; r < s; r++)
			if (n = o[r].call(i, e, t)) return n
	}

	function te(r, t, e) {
		var i, s, n = 0,
			o = Vt.length,
			a = C.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (s) return !1;
				for (var t = $t || Zt(), e = Math.max(0, c.startTime + c.duration - t), i = 1 - (e / c.duration || 0), n = 0, o = c.tweens.length; n < o; n++) c.tweens[n].run(i);
				return a.notifyWith(r, [c, i, e]), i < 1 && o ? e : (a.resolveWith(r, [c]), !1)
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
					var i = C.Tween(r, c.opts, t, e, c.opts.specialEasing[t] || c.opts.easing);
					return c.tweens.push(i), i
				},
				stop: function(t) {
					var e = 0,
						i = t ? c.tweens.length : 0;
					if (s) return this;
					for (s = !0; e < i; e++) c.tweens[e].run(1);
					return t ? a.resolveWith(r, [c, t]) : a.rejectWith(r, [c, t]), this
				}
			}),
			u = c.props;
		for (function(t, e) {
				var i, n, o, r, s;
				for (i in t)
					if (o = e[n = C.camelCase(i)], r = t[i], C.isArray(r) && (o = r[1], r = t[i] = r[0]), i !== n && (t[n] = r, delete t[i]), (s = C.cssHooks[n]) && "expand" in s)
						for (i in r = s.expand(r), delete t[n], r) i in t || (t[i] = r[i], e[i] = o);
					else e[n] = o
			}(u, c.opts.specialEasing); n < o; n++)
			if (i = Vt[n].call(c, r, u, c.opts)) return i;
		return C.map(u, Jt, c), C.isFunction(c.opts.start) && c.opts.start.call(r, c), C.fx.timer(C.extend(l, {
			elem: r,
			anim: c,
			queue: c.opts.queue
		})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
	}
	C.Animation = C.extend(te, {
		tweener: function(t, e) {
			for (var i, n = 0, o = (t = C.isFunction(t) ? (e = t, ["*"]) : t.split(" ")).length; n < o; n++) i = t[n], Kt[i] = Kt[i] || [], Kt[i].unshift(e)
		},
		prefilter: function(t, e) {
			e ? Vt.unshift(t) : Vt.push(t)
		}
	}), C.speed = function(t, e, i) {
		var n = t && "object" == typeof t ? C.extend({}, t) : {
			complete: i || !i && e || C.isFunction(t) && t,
			duration: t,
			easing: i && e || e && !C.isFunction(e) && e
		};
		return n.duration = C.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in C.fx.speeds ? C.fx.speeds[n.duration] : C.fx.speeds._default, null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
			C.isFunction(n.old) && n.old.call(this), n.queue && C.dequeue(this, n.queue)
		}, n
	}, C.fn.extend({
		fadeTo: function(t, e, i, n) {
			return this.filter(P).css("opacity", 0).show().end().animate({
				opacity: e
			}, t, i, n)
		},
		animate: function(e, t, i, n) {
			function o() {
				var t = te(this, C.extend({}, e), s);
				(r || R.get(this, "finish")) && t.stop(!0)
			}
			var r = C.isEmptyObject(e),
				s = C.speed(t, i, n);
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
					i = C.timers,
					n = R.get(this);
				if (e) n[e] && n[e].stop && s(n[e]);
				else
					for (e in n) n[e] && n[e].stop && Qt.test(e) && s(n[e]);
				for (e = i.length; e--;) i[e].elem !== this || null != o && i[e].queue !== o || (i[e].anim.stop(r), t = !1, i.splice(e, 1));
				!t && r || C.dequeue(this, o)
			})
		},
		finish: function(s) {
			return !1 !== s && (s = s || "fx"), this.each(function() {
				var t, e = R.get(this),
					i = e[s + "queue"],
					n = e[s + "queueHooks"],
					o = C.timers,
					r = i ? i.length : 0;
				for (e.finish = !0, C.queue(this, s, []), n && n.stop && n.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === s && (o[t].anim.stop(!0), o.splice(t, 1));
				for (t = 0; t < r; t++) i[t] && i[t].finish && i[t].finish.call(this);
				delete e.finish
			})
		}
	}), C.each(["toggle", "show", "hide"], function(t, n) {
		var o = C.fn[n];
		C.fn[n] = function(t, e, i) {
			return null == t || "boolean" == typeof t ? o.apply(this, arguments) : this.animate(Gt(n, !0), t, e, i)
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
	}, function(t, n) {
		C.fn[t] = function(t, e, i) {
			return this.animate(n, t, e, i)
		}
	}), C.timers = [], C.fx.tick = function() {
		var t, e = 0,
			i = C.timers;
		for ($t = C.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
		i.length || C.fx.stop(), $t = void 0
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
	}, C.fn.delay = function(n, t) {
		return n = C.fx && C.fx.speeds[n] || n, t = t || "fx", this.queue(t, function(t, e) {
			var i = setTimeout(t, n);
			e.stop = function() {
				clearTimeout(i)
			}
		})
	}, Bt = y.createElement("input"), qt = y.createElement("select"), Yt = qt.appendChild(y.createElement("option")), Bt.type = "checkbox", v.checkOn = "" !== Bt.value, v.optSelected = Yt.selected, qt.disabled = !0, v.optDisabled = !Yt.disabled, (Bt = y.createElement("input")).value = "t", Bt.type = "radio", v.radioValue = "t" === Bt.value;
	var ee, ie = C.expr.attrHandle;
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
		attr: function(t, e, i) {
			var n, o, r = t.nodeType;
			if (t && 3 !== r && 8 !== r && 2 !== r) return typeof t.getAttribute == Y ? C.prop(t, e, i) : (1 === r && C.isXMLDoc(t) || (e = e.toLowerCase(), n = C.attrHooks[e] || (C.expr.match.bool.test(e) ? ee : void 0)), void 0 === i ? n && "get" in n && null !== (o = n.get(t, e)) ? o : null == (o = C.find.attr(t, e)) ? void 0 : o : null !== i ? n && "set" in n && void 0 !== (o = n.set(t, i, e)) ? o : (t.setAttribute(e, i + ""), i) : void C.removeAttr(t, e))
		},
		removeAttr: function(t, e) {
			var i, n, o = 0,
				r = e && e.match(I);
			if (r && 1 === t.nodeType)
				for (; i = r[o++];) n = C.propFix[i] || i, C.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
		},
		attrHooks: {
			type: {
				set: function(t, e) {
					if (!v.radioValue && "radio" === e && C.nodeName(t, "input")) {
						var i = t.value;
						return t.setAttribute("type", e), i && (t.value = i), e
					}
				}
			}
		}
	}), ee = {
		set: function(t, e, i) {
			return !1 === e ? C.removeAttr(t, i) : t.setAttribute(i, i), i
		}
	}, C.each(C.expr.match.bool.source.match(/\w+/g), function(t, e) {
		var r = ie[e] || C.find.attr;
		ie[e] = function(t, e, i) {
			var n, o;
			return i || (o = ie[e], ie[e] = n, n = null != r(t, e, i) ? e.toLowerCase() : null, ie[e] = o), n
		}
	});
	var ne = /^(?:input|select|textarea|button)$/i;
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
		prop: function(t, e, i) {
			var n, o, r = t.nodeType;
			if (t && 3 !== r && 8 !== r && 2 !== r) return (1 !== r || !C.isXMLDoc(t)) && (e = C.propFix[e] || e, o = C.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]
		},
		propHooks: {
			tabIndex: {
				get: function(t) {
					return t.hasAttribute("tabindex") || ne.test(t.nodeName) || t.href ? t.tabIndex : -1
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
			var t, i, n, o, r, s, a = "string" == typeof e && e,
				l = 0,
				c = this.length;
			if (C.isFunction(e)) return this.each(function(t) {
				C(this).addClass(e.call(this, t, this.className))
			});
			if (a)
				for (t = (e || "").match(I) || []; l < c; l++)
					if (n = 1 === (i = this[l]).nodeType && (i.className ? (" " + i.className + " ").replace(oe, " ") : " ")) {
						for (r = 0; o = t[r++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
						s = C.trim(n), i.className !== s && (i.className = s)
					} return this
		},
		removeClass: function(e) {
			var t, i, n, o, r, s, a = 0 === arguments.length || "string" == typeof e && e,
				l = 0,
				c = this.length;
			if (C.isFunction(e)) return this.each(function(t) {
				C(this).removeClass(e.call(this, t, this.className))
			});
			if (a)
				for (t = (e || "").match(I) || []; l < c; l++)
					if (n = 1 === (i = this[l]).nodeType && (i.className ? (" " + i.className + " ").replace(oe, " ") : "")) {
						for (r = 0; o = t[r++];)
							for (; 0 <= n.indexOf(" " + o + " ");) n = n.replace(" " + o + " ", " ");
						s = e ? C.trim(n) : "", i.className !== s && (i.className = s)
					} return this
		},
		toggleClass: function(o, e) {
			var r = typeof o;
			return "boolean" == typeof e && "string" == r ? e ? this.addClass(o) : this.removeClass(o) : this.each(C.isFunction(o) ? function(t) {
				C(this).toggleClass(o.call(this, t, this.className, e), e)
			} : function() {
				if ("string" == r)
					for (var t, e = 0, i = C(this), n = o.match(I) || []; t = n[e++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
				else r != Y && "boolean" != r || (this.className && R.set(this, "__className__", this.className), this.className = !this.className && !1 !== o && R.get(this, "__className__") || "")
			})
		},
		hasClass: function(t) {
			for (var e = " " + t + " ", i = 0, n = this.length; i < n; i++)
				if (1 === this[i].nodeType && 0 <= (" " + this[i].className + " ").replace(oe, " ").indexOf(e)) return !0;
			return !1
		}
	});
	var re = /\r/g;
	C.fn.extend({
		val: function(i) {
			var n, t, o, e = this[0];
			return arguments.length ? (o = C.isFunction(i), this.each(function(t) {
				var e;
				1 === this.nodeType && (null == (e = o ? i.call(this, t, C(this).val()) : i) ? e = "" : "number" == typeof e ? e += "" : C.isArray(e) && (e = C.map(e, function(t) {
					return null == t ? "" : t + ""
				})), (n = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
			})) : e ? (n = C.valHooks[e.type] || C.valHooks[e.nodeName.toLowerCase()]) && "get" in n && void 0 !== (t = n.get(e, "value")) ? t : "string" == typeof(t = e.value) ? t.replace(re, "") : null == t ? "" : t : void 0
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
					for (var e, i, n = t.options, o = t.selectedIndex, r = "select-one" === t.type || o < 0, s = r ? null : [], a = r ? o + 1 : n.length, l = o < 0 ? a : r ? o : 0; l < a; l++)
						if (!(!(i = n[l]).selected && l !== o || (v.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && C.nodeName(i.parentNode, "optgroup"))) {
							if (e = C(i).val(), r) return e;
							s.push(e)
						} return s
				},
				set: function(t, e) {
					for (var i, n, o = t.options, r = C.makeArray(e), s = o.length; s--;)((n = o[s]).selected = 0 <= C.inArray(n.value, r)) && (i = !0);
					return i || (t.selectedIndex = -1), r
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
	}), C.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, i) {
		C.fn[i] = function(t, e) {
			return 0 < arguments.length ? this.on(i, null, t, e) : this.trigger(i)
		}
	}), C.fn.extend({
		hover: function(t, e) {
			return this.mouseenter(t).mouseleave(e || t)
		},
		bind: function(t, e, i) {
			return this.on(t, null, e, i)
		},
		unbind: function(t, e) {
			return this.off(t, null, e)
		},
		delegate: function(t, e, i, n) {
			return this.on(e, t, i, n)
		},
		undelegate: function(t, e, i) {
			return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
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
			var i, n = 0,
				o = t.toLowerCase().match(I) || [];
			if (C.isFunction(e))
				for (; i = o[n++];) "+" === i[0] ? (i = i.slice(1) || "*", (r[i] = r[i] || []).unshift(e)) : (r[i] = r[i] || []).push(e)
		}
	}

	function we(e, o, r, s) {
		var a = {},
			l = e === me;

		function c(t) {
			var n;
			return a[t] = !0, C.each(e[t] || [], function(t, e) {
				var i = e(o, r, s);
				return "string" != typeof i || l || a[i] ? l ? !(n = i) : void 0 : (o.dataTypes.unshift(i), c(i), !1)
			}), n
		}
		return c(o.dataTypes[0]) || !a["*"] && c("*")
	}

	function xe(t, e) {
		var i, n, o = C.ajaxSettings.flatOptions || {};
		for (i in e) void 0 !== e[i] && ((o[i] ? t : n = n || {})[i] = e[i]);
		return n && C.extend(!0, t, n), t
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
			var u, d, h, i, p, n, f, o, m = C.ajaxSetup({}, e),
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
							if (!i)
								for (i = {}; e = ue.exec(h);) i[e[1].toLowerCase()] = e[2];
							e = i[t.toLowerCase()]
						}
						return null == e ? null : e
					},
					getAllResponseHeaders: function() {
						return 2 === x ? h : null
					},
					setRequestHeader: function(t, e) {
						var i = t.toLowerCase();
						return x || (t = s[i] = s[i] || t, r[t] = e), this
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
			if (y.promise(_).complete = b.add, _.success = _.done, _.error = _.fail, m.url = ((t || m.url || ve) + "").replace(le, "").replace(he, ye[1] + "//"), m.type = e.method || e.type || m.method || m.type, m.dataTypes = C.trim(m.dataType || "*").toLowerCase().match(I) || [""], null == m.crossDomain && (n = pe.exec(m.url.toLowerCase()), m.crossDomain = !(!n || n[1] === ye[1] && n[2] === ye[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (ye[3] || ("http:" === ye[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = C.param(m.data, m.traditional)), we(fe, m, e, _), 2 === x) return _;
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

			function l(t, e, i, n) {
				var o, r, s, a, l, c = e;
				2 !== x && (x = 2, p && clearTimeout(p), u = void 0, h = n || "", _.readyState = 0 < t ? 4 : 0, o = 200 <= t && t < 300 || 304 === t, i && (a = function(t, e, i) {
					for (var n, o, r, s, a = t.contents, l = t.dataTypes;
						"*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
					if (n)
						for (o in a)
							if (a[o] && a[o].test(n)) {
								l.unshift(o);
								break
							} if (l[0] in i) r = l[0];
					else {
						for (o in i) {
							if (!l[0] || t.converters[o + " " + l[0]]) {
								r = o;
								break
							}
							s = s || o
						}
						r = r || s
					}
					return r ? (r !== l[0] && l.unshift(r), i[r]) : void 0
				}(m, _, i)), a = function(t, e, i, n) {
					var o, r, s, a, l, c = {},
						u = t.dataTypes.slice();
					if (u[1])
						for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
					for (r = u.shift(); r;)
						if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())
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
		getJSON: function(t, e, i) {
			return C.get(t, e, i, "json")
		},
		getScript: function(t, e) {
			return C.get(t, void 0, e, "script")
		}
	}), C.each(["get", "post"], function(t, o) {
		C[o] = function(t, e, i, n) {
			return C.isFunction(e) && (n = n || i, i = e, e = void 0), C.ajax({
				url: t,
				type: o,
				dataType: n,
				data: e,
				success: i
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
		wrapInner: function(i) {
			return this.each(C.isFunction(i) ? function(t) {
				C(this).wrapInner(i.call(this, t))
			} : function() {
				var t = C(this),
					e = t.contents();
				e.length ? e.wrapAll(i) : t.append(i)
			})
		},
		wrap: function(e) {
			var i = C.isFunction(e);
			return this.each(function(t) {
				C(this).wrapAll(i ? e.call(this, t) : e)
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
		function i(t, e) {
			e = C.isFunction(e) ? e() : null == e ? "" : e, o[o.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
		}
		var n, o = [];
		if (void 0 === e && (e = C.ajaxSettings && C.ajaxSettings.traditional), C.isArray(t) || t.jquery && !C.isPlainObject(t)) C.each(t, function() {
			i(this.name, this.value)
		});
		else
			for (n in t) ! function i(n, t, o, r) {
				var e;
				if (C.isArray(t)) C.each(t, function(t, e) {
					o || Ce.test(n) ? r(n, e) : i(n + "[" + ("object" == typeof e ? t : "") + "]", e, o, r)
				});
				else if (o || "object" !== C.type(t)) r(n, t);
				else
					for (e in t) i(n + "[" + e + "]", t[e], o, r)
			}(n, t[n], e, i);
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
				var i = C(this).val();
				return null == i ? null : C.isArray(i) ? C.map(i, function(t) {
					return {
						name: e.name,
						value: t.replace(Te, "\r\n")
					}
				}) : {
					name: e.name,
					value: i.replace(Te, "\r\n")
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
				var i, n = r.xhr(),
					o = ++ke;
				if (n.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
					for (i in r.xhrFields) n[i] = r.xhrFields[i];
				for (i in r.mimeType && n.overrideMimeType && n.overrideMimeType(r.mimeType), r.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) n.setRequestHeader(i, t[i]);
				s = function(t) {
					return function() {
						s && (delete Le[o], s = n.onload = n.onerror = null, "abort" === t ? n.abort() : "error" === t ? e(n.status, n.statusText) : e(Ie[n.status] || n.status, n.statusText, "string" == typeof n.responseText ? {
							text: n.responseText
						} : void 0, n.getAllResponseHeaders()))
					}
				}, n.onload = s(), n.onerror = s("error"), s = Le[o] = s("abort");
				try {
					n.send(r.hasContent && r.data || null)
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
	}), C.ajaxTransport("script", function(i) {
		var n, o;
		if (i.crossDomain) return {
			send: function(t, e) {
				n = C("<script>").prop({
					async: !0,
					charset: i.scriptCharset,
					src: i.url
				}).on("load error", o = function(t) {
					n.remove(), o = null, t && e("error" === t.type ? 404 : 200, t.type)
				}), y.head.appendChild(n[0])
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
	}), C.ajaxPrefilter("json jsonp", function(t, e, i) {
		var n, o, r, s = !1 !== t.jsonp && (Oe.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Oe.test(t.data) && "data");
		return s || "jsonp" === t.dataTypes[0] ? (n = t.jsonpCallback = C.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Oe, "$1" + n) : !1 !== t.jsonp && (t.url += (ae.test(t.url) ? "&" : "?") + t.jsonp + "=" + n), t.converters["script json"] = function() {
			return r || C.error(n + " was not called"), r[0]
		}, t.dataTypes[0] = "json", o = f[n], f[n] = function() {
			r = arguments
		}, i.always(function() {
			f[n] = o, t[n] && (t.jsonpCallback = e.jsonpCallback, ze.push(n)), r && C.isFunction(o) && o(r[0]), r = o = void 0
		}), "script") : void 0
	}), C.parseHTML = function(t, e, i) {
		if (!t || "string" != typeof t) return null;
		"boolean" == typeof e && (i = e, e = !1), e = e || y;
		var n = b.exec(t),
			o = !i && [];
		return n ? [e.createElement(n[1])] : (n = C.buildFragment([t], e, o), o && o.length && C(o).remove(), C.merge([], n.childNodes))
	};
	var Ae = C.fn.load;
	C.fn.load = function(t, e, i) {
		if ("string" != typeof t && Ae) return Ae.apply(this, arguments);
		var n, o, r, s = this,
			a = t.indexOf(" ");
		return 0 <= a && (n = C.trim(t.slice(a)), t = t.slice(0, a)), C.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), 0 < s.length && C.ajax({
			url: t,
			type: o,
			dataType: "html",
			data: e
		}).done(function(t) {
			r = arguments, s.html(n ? C("<div>").append(C.parseHTML(t)).find(n) : t)
		}).complete(i && function(t, e) {
			s.each(i, r || [t.responseText, e, t])
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
	var Re = f.document.documentElement;

	function je(t) {
		return C.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
	}
	C.offset = {
		setOffset: function(t, e, i) {
			var n, o, r, s, a, l, c = C.css(t, "position"),
				u = C(t),
				d = {};
			"static" === c && (t.style.position = "relative"), a = u.offset(), r = C.css(t, "top"), l = C.css(t, "left"), o = ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto") ? (s = (n = u.position()).top, n.left) : (s = parseFloat(r) || 0, parseFloat(l) || 0), C.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : u.css(d)
		}
	}, C.fn.extend({
		offset: function(e) {
			if (arguments.length) return void 0 === e ? this : this.each(function(t) {
				C.offset.setOffset(this, e, t)
			});
			var t, i, n = this[0],
				o = {
					top: 0,
					left: 0
				},
				r = n && n.ownerDocument;
			return r ? (t = r.documentElement, C.contains(t, n) ? (typeof n.getBoundingClientRect != Y && (o = n.getBoundingClientRect()), i = je(r), {
				top: o.top + i.pageYOffset - t.clientTop,
				left: o.left + i.pageXOffset - t.clientLeft
			}) : o) : void 0
		},
		position: function() {
			if (this[0]) {
				var t, e, i = this[0],
					n = {
						top: 0,
						left: 0
					};
				return "fixed" === C.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), C.nodeName(t[0], "html") || (n = t.offset()), n.top += C.css(t[0], "borderTopWidth", !0), n.left += C.css(t[0], "borderLeftWidth", !0)), {
					top: e.top - n.top - C.css(i, "marginTop", !0),
					left: e.left - n.left - C.css(i, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var t = this.offsetParent || Re; t && !C.nodeName(t, "html") && "static" === C.css(t, "position");) t = t.offsetParent;
				return t || Re
			})
		}
	}), C.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, o) {
		var r = "pageYOffset" === o;
		C.fn[e] = function(t) {
			return O(this, function(t, e, i) {
				var n = je(t);
				return void 0 === i ? n ? n[o] : t[e] : void(n ? n.scrollTo(r ? f.pageXOffset : i, r ? i : f.pageYOffset) : t[e] = i)
			}, e, t, arguments.length, null)
		}
	}), C.each(["top", "left"], function(t, i) {
		C.cssHooks[i] = kt(v.pixelPosition, function(t, e) {
			return e ? (e = St(t, i), Tt.test(e) ? C(t).position()[i] + "px" : e) : void 0
		})
	}), C.each({
		Height: "height",
		Width: "width"
	}, function(r, s) {
		C.each({
			padding: "inner" + r,
			content: s,
			"": "outer" + r
		}, function(n, t) {
			C.fn[t] = function(t, e) {
				var i = arguments.length && (n || "boolean" != typeof t),
					o = n || (!0 === t || !0 === e ? "margin" : "border");
				return O(this, function(t, e, i) {
					var n;
					return C.isWindow(t) ? t.document.documentElement["client" + r] : 9 === t.nodeType ? (n = t.documentElement, Math.max(t.body["scroll" + r], n["scroll" + r], t.body["offset" + r], n["offset" + r], n["client" + r])) : void 0 === i ? C.css(t, e, o) : C.style(t, e, i, o)
				}, s, i ? t : void 0, i, null)
			}
		})
	}), C.fn.size = function() {
		return this.length
	}, C.fn.andSelf = C.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
		return C
	});
	var Ne = f.jQuery,
		We = f.$;
	return C.noConflict = function(t) {
		return f.$ === C && (f.$ = We), t && f.jQuery === C && (f.jQuery = Ne), C
	}, typeof t == Y && (f.jQuery = f.$ = C), C
}),
function(l) {
	"use strict";

	function e() {
		var t = l(window).width(),
			e = l("#site_header");
		t < 1025 ? (e.addClass("mobile-menu-hide"), l(".menu-toggle").removeClass("open"), setTimeout(function() {
			e.addClass("animate")
		}, 500)) : e.removeClass("animate")
	}

	function i() {
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
							i = t.message,
							n = '<div class="alert ' + e + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + i + "</div>";
						e && i && (l("#contact_form").find(".messages").html(n), l("#contact_form")[0].reset())
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
		}), i()
	}), l(document).on("ready", function() {
		var s = 23 / l(document).height(),
			a = 23 / l(document).width();
		l("body").on("mousemove", function(t) {
			var e = t.pageX - l(document).width() / 2,
				i = t.pageY - l(document).height() / 2,
				n = a * e * -1,
				o = s * i * -1,
				r = l(".lm-animated-bg");
			r.addClass("transition"), r.css({
				"background-position": "calc( 50% + " + n + "px ) calc( 50% + " + o + "px )"
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
		}), i(), l(".text-rotation").owlCarousel({
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
				markupParse: function(t, e, i) {
					e.title = i.el.attr("title")
				}
			}
		})
	})
}(jQuery),
function(e, i) {
	"function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(t) {
		return i(e, t)
	}) : "object" == typeof module && module.exports ? module.exports = i(e, require("jquery")) : e.jQueryBridget = i(e, e.jQuery)
}(window, function(t, e) {
	"use strict";

	function i(c, o, u) {
		(u = u || e || t.jQuery) && (o.prototype.option || (o.prototype.option = function(t) {
			u.isPlainObject(t) && (this.options = u.extend(!0, this.options, t))
		}), u.fn[c] = function(t) {
			if ("string" != typeof t) return n = t, this.each(function(t, e) {
				var i = u.data(e, c);
				i ? (i.option(n), i._init()) : (i = new o(e, n), u.data(e, c, i))
			}), this;
			var e, r, s, a, l, n, i = d.call(arguments, 1);
			return s = i, l = "$()." + c + '("' + (r = t) + '")', (e = this).each(function(t, e) {
				var i, n, o = u.data(e, c);
				o ? (i = o[r]) && "_" != r.charAt(0) ? (n = i.apply(o, s), a = void 0 === a ? n : a) : h(l + " is not a valid method") : h(c + " not initialized. Cannot call methods, i.e. " + l)
			}), void 0 !== a ? a : e
		}, n(u))
	}

	function n(t) {
		!t || t && t.bridget || (t.bridget = i)
	}
	var d = Array.prototype.slice,
		o = t.console,
		h = void 0 === o ? function() {} : function(t) {
			o.error(t)
		};
	return n(e || t.jQuery), i
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
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
			var n = 0,
				o = i[n];
			e = e || [];
			for (var r = this._onceEvents && this._onceEvents[t]; o;) {
				var s = r && r[o];
				s && (this.off(t, o), delete r[o]), o.apply(this, e), o = i[n += s ? 0 : 1]
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
		return e || i("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
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
			var i = {};
			i.width = t.offsetWidth, i.height = t.offsetHeight;
			for (var n = i.isBorderBox = "border-box" == e.boxSizing, o = 0; o < E; o++) {
				var r = T[o],
					s = e[r],
					a = parseFloat(s);
				i[r] = isNaN(a) ? 0 : a
			}
			var l = i.paddingLeft + i.paddingRight,
				c = i.paddingTop + i.paddingBottom,
				u = i.marginLeft + i.marginRight,
				d = i.marginTop + i.marginBottom,
				h = i.borderLeftWidth + i.borderRightWidth,
				p = i.borderTopWidth + i.borderBottomWidth,
				f = n && C,
				m = w(e.width);
			!1 !== m && (i.width = m + (f ? 0 : l + h));
			var g = w(e.height);
			return !1 !== g && (i.height = g + (f ? 0 : c + p)), i.innerWidth = i.width - (l + h), i.innerHeight = i.height - (c + p), i.outerWidth = i.width + u, i.outerHeight = i.height + d, i
		}
		var v, y, b
	}
	var C, i = "undefined" == typeof console ? function() {} : function(t) {
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
	var i = function() {
		var t = Element.prototype;
		if (t.matches) return "matches";
		if (t.matchesSelector) return "matchesSelector";
		for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
			var n = e[i] + "MatchesSelector";
			if (t[n]) return n
		}
	}();
	return function(t, e) {
		return t[i](e)
	}
}),
function(e, i) {
	"function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(t) {
		return i(e, t)
	}) : "object" == typeof module && module.exports ? module.exports = i(e, require("desandro-matches-selector")) : e.fizzyUIUtils = i(e, e.matchesSelector)
}(window, function(c, r) {
	var u = {
			extend: function(t, e) {
				for (var i in e) t[i] = e[i];
				return t
			},
			modulo: function(t, e) {
				return (t % e + e) % e
			},
			makeArray: function(t) {
				var e = [];
				if (Array.isArray(t)) e = t;
				else if (t && "number" == typeof t.length)
					for (var i = 0; i < t.length; i++) e.push(t[i]);
				else e.push(t);
				return e
			},
			removeFrom: function(t, e) {
				var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
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
			filterFindElements: function(t, n) {
				t = u.makeArray(t);
				var o = [];
				return t.forEach(function(t) {
					if (t instanceof HTMLElement) {
						if (!n) return void o.push(t);
						r(t, n) && o.push(t);
						for (var e = t.querySelectorAll(n), i = 0; i < e.length; i++) o.push(e[i])
					}
				}), o
			},
			debounceMethod: function(t, e, n) {
				var o = t.prototype[e],
					r = e + "Timeout";
				t.prototype[e] = function() {
					var t = this[r];
					t && clearTimeout(t);
					var e = arguments,
						i = this;
					this[r] = setTimeout(function() {
						o.apply(i, e), delete i[r]
					}, n || 100)
				}
			},
			docReady: function(t) {
				var e = document.readyState;
				"complete" == e || "interactive" == e ? t() : document.addEventListener("DOMContentLoaded", t)
			},
			toDashed: function(t) {
				return t.replace(/(.)([A-Z])/g, function(t, e, i) {
					return e + "-" + i
				}).toLowerCase()
			}
		},
		d = c.console;
	return u.htmlInit = function(a, l) {
		u.docReady(function() {
			var t = u.toDashed(l),
				o = "data-" + t,
				e = document.querySelectorAll("[" + o + "]"),
				i = document.querySelectorAll(".js-" + t),
				n = u.makeArray(e).concat(u.makeArray(i)),
				r = o + "-options",
				s = c.jQuery;
			n.forEach(function(e) {
				var t, i = e.getAttribute(o) || e.getAttribute(r);
				try {
					t = i && JSON.parse(i)
				} catch (t) {
					return void(d && d.error("Error parsing " + o + " on " + e.className + ": " + t))
				}
				var n = new a(e, t);
				s && s.data(e, l, n)
			})
		})
	}, u
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
	"use strict";

	function i(t, e) {
		t && (this.element = t, this.layout = e, this.position = {
			x: 0,
			y: 0
		}, this._create())
	}
	var n = document.documentElement.style,
		o = "string" == typeof n.transition ? "transition" : "WebkitTransition",
		r = "string" == typeof n.transform ? "transform" : "WebkitTransform",
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
		l = i.prototype = Object.create(t.prototype);
	l.constructor = i, l._create = function() {
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
		for (var i in t) {
			e[a[i] || i] = t[i]
		}
	}, l.getPosition = function() {
		var t = getComputedStyle(this.element),
			e = this.layout._getOption("originLeft"),
			i = this.layout._getOption("originTop"),
			n = t[e ? "left" : "right"],
			o = t[i ? "top" : "bottom"],
			r = this.layout.size,
			s = -1 != n.indexOf("%") ? parseFloat(n) / 100 * r.width : parseInt(n, 10),
			a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * r.height : parseInt(o, 10),
			s = isNaN(s) ? 0 : s,
			a = isNaN(a) ? 0 : a;
		s -= e ? r.paddingLeft : r.paddingRight, a -= i ? r.paddingTop : r.paddingBottom, this.position.x = s, this.position.y = a
	}, l.layoutPosition = function() {
		var t = this.layout.size,
			e = {},
			i = this.layout._getOption("originLeft"),
			n = this.layout._getOption("originTop"),
			o = i ? "paddingLeft" : "paddingRight",
			r = i ? "left" : "right",
			s = i ? "right" : "left",
			a = this.position.x + t[o];
		e[r] = this.getXValue(a), e[s] = "";
		var l = n ? "paddingTop" : "paddingBottom",
			c = n ? "top" : "bottom",
			u = n ? "bottom" : "top",
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
		var i, n, o, r = this.position.x,
			s = this.position.y,
			a = parseInt(t, 10),
			l = parseInt(e, 10),
			c = a === this.position.x && l === this.position.y;
		this.setPosition(t, e), !c || this.isTransitioning ? (i = t - r, n = e - s, (o = {}).transform = this.getTranslate(i, n), this.transition({
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
			for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
			for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
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
		var e, i;
		t.target === this.element && (e = this._transn, i = u[t.propertyName] || t.propertyName, delete e.ingProperties[i], function(t) {
			for (var e in t) return;
			return 1
		}(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd && (e.onEnd[i].call(this), delete e.onEnd[i]), this.emitEvent("transitionEnd", [this]))
	}, l.disableTransition = function() {
		this.removeTransitionStyles(), this.element.removeEventListener(s, this, !1), this.isTransitioning = !1
	}, l._removeStyles = function(t) {
		var e = {};
		for (var i in t) e[i] = "";
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
		for (var i in e) return i
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
	}, i
}),
function(o, r) {
	"use strict";
	"function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(t, e, i, n) {
		return r(o, t, e, i, n)
	}) : "object" == typeof module && module.exports ? module.exports = r(o, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : o.Outlayer = r(o, o.EvEmitter, o.getSize, o.fizzyUIUtils, o.Outlayer.Item)
}(window, function(t, e, o, r, n) {
	"use strict";

	function s(t, e) {
		var i, n = r.getQueryElement(t);
		n ? (this.element = n, c && (this.$element = c(this.element)), this.options = r.extend({}, this.constructor.defaults), this.option(e), i = ++u, this.element.outlayerGUID = i, (d[i] = this)._create(), this._getOption("initLayout") && this.layout()) : l && l.error("Bad element for " + this.constructor.namespace + ": " + (n || t))
	}

	function a(t) {
		function e() {
			t.apply(this, arguments)
		}
		return (e.prototype = Object.create(t.prototype)).constructor = e
	}

	function i() {}
	var l = t.console,
		c = t.jQuery,
		u = 0,
		d = {};
	s.namespace = "outlayer", s.Item = n, s.defaults = {
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
		for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
			var r = new i(e[o], this);
			n.push(r)
		}
		return n
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
		var i, n = this.options[t];
		n ? ("string" == typeof n ? i = this.element.querySelector(n) : n instanceof HTMLElement && (i = n), this[t] = i ? o(i)[e] : n) : this[t] = 0
	}, h.layoutItems = function(t, e) {
		t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
	}, h._getItemsForLayout = function(t) {
		return t.filter(function(t) {
			return !t.isIgnored
		})
	}, h._layoutItems = function(t, i) {
		var n;
		this._emitCompleteOnItems("layout", t), t && t.length && (n = [], t.forEach(function(t) {
			var e = this._getItemLayoutPosition(t);
			e.item = t, e.isInstant = i || t.isLayoutInstant, n.push(e)
		}, this), this._processLayoutQueue(n))
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
				i = e && e[1],
				n = e && e[2];
			return i.length ? (i = parseFloat(i)) * (p[n] || 1) : 0
		}(t), this.stagger)
	}, h._positionItem = function(t, e, i, n, o) {
		n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
	}, h._postLayout = function() {
		this.resizeContainer()
	}, h.resizeContainer = function() {
		var t;
		!this._getOption("resizeContainer") || (t = this._getContainerSize()) && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
	}, h._getContainerSize = i, h._setContainerMeasure = function(t, e) {
		var i;
		void 0 !== t && ((i = this.size).isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px")
	}, h._emitCompleteOnItems = function(e, t) {
		function i() {
			r.dispatchEvent(e + "Complete", null, [t])
		}

		function n() {
			++o == s && i()
		}
		var o, r = this,
			s = t.length;
		t && s ? (o = 0, t.forEach(function(t) {
			t.once(e, n)
		})) : i()
	}, h.dispatchEvent = function(t, e, i) {
		var n, o = e ? [e].concat(i) : i;
		this.emitEvent(t, o), c && (this.$element = this.$element || c(this.element), e ? ((n = c.Event(e)).type = t, this.$element.trigger(n, i)) : this.$element.trigger(t, i))
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
	}, h._manageStamp = i, h._getElementOffset = function(t) {
		var e = t.getBoundingClientRect(),
			i = this._boundingRect,
			n = o(t);
		return {
			left: e.left - i.left - n.marginLeft,
			top: e.top - i.top - n.marginTop,
			right: i.right - e.right - n.marginRight,
			bottom: i.bottom - e.bottom - n.marginBottom
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
		var e, i = this._itemize(t);
		i.length && (e = this.items.slice(0), this.items = i.concat(e), this._resetLayout(), this._manageStamps(), this.layoutItems(i, !0), this.reveal(i), this.layoutItems(e))
	}, h.reveal = function(t) {
		var i;
		this._emitCompleteOnItems("reveal", t), t && t.length && (i = this.updateStagger(), t.forEach(function(t, e) {
			t.stagger(e * i), t.reveal()
		}))
	}, h.hide = function(t) {
		var i;
		this._emitCompleteOnItems("hide", t), t && t.length && (i = this.updateStagger(), t.forEach(function(t, e) {
			t.stagger(e * i), t.hide()
		}))
	}, h.revealItemElements = function(t) {
		var e = this.getItems(t);
		this.reveal(e)
	}, h.hideItemElements = function(t) {
		var e = this.getItems(t);
		this.hide(e)
	}, h.getItem = function(t) {
		for (var e = 0; e < this.items.length; e++) {
			var i = this.items[e];
			if (i.element == t) return i
		}
	}, h.getItems = function(t) {
		t = r.makeArray(t);
		var i = [];
		return t.forEach(function(t) {
			var e = this.getItem(t);
			e && i.push(e)
		}, this), i
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
		var i = a(s);
		return i.defaults = r.extend({}, s.defaults), r.extend(i.defaults, e), i.compatOptions = r.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = a(n), r.htmlInit(i, t), c && c.bridget && c.bridget(t, i), i
	};
	var p = {
		ms: 1,
		s: 1e3
	};
	return s.Item = n, s
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
		var i = this.columnWidth += this.gutter,
			n = this.containerWidth + this.gutter,
			o = n / i,
			r = i - n % i,
			o = Math[r && r < 1 ? "round" : "floor"](o);
		this.cols = Math.max(o, 1)
	}, e.prototype.getContainerWidth = function() {
		var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
			e = c(t);
		this.containerWidth = e && e.innerWidth
	}, e.prototype._getItemLayoutPosition = function(t) {
		t.getSize();
		for (var e = t.size.outerWidth % this.columnWidth, i = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth), i = Math.min(i, this.cols), n = this._getColGroup(i), o = Math.min.apply(Math, n), r = n.indexOf(o), s = {
				x: this.columnWidth * r,
				y: o
			}, a = o + t.size.outerHeight, l = this.cols + 1 - n.length, c = 0; c < l; c++) this.colYs[r + c] = a;
		return s
	}, e.prototype._getColGroup = function(t) {
		if (t < 2) return this.colYs;
		for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++) {
			var o = this.colYs.slice(n, n + t);
			e[n] = Math.max.apply(Math, o)
		}
		return e
	}, e.prototype._manageStamp = function(t) {
		var e = c(t),
			i = this._getElementOffset(t),
			n = this._getOption("originLeft") ? i.left : i.right,
			o = n + e.outerWidth,
			r = Math.floor(n / this.columnWidth),
			r = Math.max(0, r),
			s = Math.floor(o / this.columnWidth);
		s -= o % this.columnWidth ? 0 : 1, s = Math.min(this.cols - 1, s);
		for (var a = (this._getOption("originTop") ? i.top : i.bottom) + e.outerHeight, l = r; l <= s; l++) this.colYs[l] = Math.max(a, this.colYs[l])
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
}),
function(l, i, o, r) {
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
		responsiveBaseElement: i,
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
				i = !this.settings.autoWidth,
				n = this.settings.rtl,
				o = {
					width: "auto",
					"margin-left": n ? e : "",
					"margin-right": n ? "" : e
				};
			i || this.$stage.children().css(o), t.css = o
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function(t) {
			var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				i = null,
				n = this._items.length,
				o = !this.settings.autoWidth,
				r = [];
			for (t.items = {
					merge: !1,
					width: e
				}; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = 1 < i || t.items.merge, r[n] = o ? e * i : this._items[n].width();
			this._widths = r
		}
	}, {
		filter: ["items", "settings"],
		run: function() {
			var t = [],
				e = this._items,
				i = this.settings,
				n = Math.max(2 * i.items, 4),
				o = 2 * Math.ceil(e.length / 2),
				r = i.loop && e.length ? i.rewind ? n : Math.max(n, o) : 0,
				s = "",
				a = "";
			for (r /= 2; r--;) t.push(this.normalize(t.length / 2, !0)), s += e[t[t.length - 1]][0].outerHTML, t.push(this.normalize(e.length - 1 - (t.length - 1) / 2, !0)), a = e[t[t.length - 1]][0].outerHTML + a;
			this._clones = t, l(s).addClass("cloned").appendTo(this.$stage), l(a).addClass("cloned").prependTo(this.$stage)
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function() {
			for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, o = 0, r = []; ++i < e;) n = r[i - 1] || 0, o = this._widths[this.relative(i)] + this.settings.margin, r.push(n + o * t);
			this._coordinates = r
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function() {
			var t = this.settings.stagePadding,
				e = this._coordinates,
				i = {
					width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
					"padding-left": t || "",
					"padding-right": t || ""
				};
			this.$stage.css(i)
		}
	}, {
		filter: ["width", "items", "settings"],
		run: function(t) {
			var e = this._coordinates.length,
				i = !this.settings.autoWidth,
				n = this.$stage.children();
			if (i && t.items.merge)
				for (; e--;) t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css);
			else i && (t.css.width = t.items.width, n.css(t.css))
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
			for (var t, e, i = this.settings.rtl ? 1 : -1, n = 2 * this.settings.stagePadding, o = this.coordinates(this.current()) + n, r = o + this.width() * i, s = [], a = 0, l = this._coordinates.length; a < l; a++) t = this._coordinates[a - 1] || 0, e = Math.abs(this._coordinates[a]) + n * i, (this.op(t, "<=", o) && this.op(t, ">", r) || this.op(e, "<", o) && this.op(e, ">", r)) && s.push(a);
			this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + s.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
		}
	}], c.prototype.initialize = function() {
		var t, e, i;
		this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading") && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : r, i = this.$element.children(e).width(), t.length && i <= 0 && this.preloadAutoWidthImages(t)), this.$element.addClass(this.options.loadingClass), this.$stage = l("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
	}, c.prototype.setup = function() {
		var e = this.viewport(),
			t = this.options.responsive,
			i = -1,
			n = null;
		t ? (l.each(t, function(t) {
			t <= e && i < t && (i = Number(t))
		}), "function" == typeof(n = l.extend({}, this.options, t[i])).stagePadding && (n.stagePadding = n.stagePadding()), delete n.responsive, n.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : n = l.extend({}, this.options), this.trigger("change", {
			property: {
				name: "settings",
				value: n
			}
		}), this._breakpoint = i, this.settings = n, this.invalidate("settings"), this.trigger("changed", {
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
		for (var t = 0, e = this._pipe.length, i = l.proxy(function(t) {
				return this[t]
			}, this._invalidated), n = {}; t < e;)(this._invalidated.all || 0 < l.grep(this._pipe[t].filter, i).length) && this._pipe[t].run(n), t++;
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
		i.clearTimeout(this.resizeTimer), this.resizeTimer = i.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
	}, c.prototype.onResize = function() {
		return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
	}, c.prototype.registerEventHandlers = function() {
		l.support.transition && this.$stage.on(l.support.transition.end + ".owl.core", l.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(i, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
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
			i = null,
			n = null,
			o = this.difference(this._drag.pointer, this.pointer(t)),
			r = this.difference(this._drag.stage.start, o);
		this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, r.x = ((r.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * o.x / 5 : 0, r.x = Math.max(Math.min(r.x, e + n), i + n)), this._drag.stage.current = r, this.animate(r.x))
	}, c.prototype.onDragEnd = function(t) {
		var e = this.difference(this._drag.pointer, this.pointer(t)),
			i = this._drag.stage.current,
			n = 0 < e.x ^ this.settings.rtl ? "left" : "right";
		l(o).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== e.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(i.x, 0 !== e.x ? n : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = n, (3 < Math.abs(e.x) || 300 < (new Date).getTime() - this._drag.time) && this._drag.target.one("click.owl.core", function() {
			return !1
		})), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
	}, c.prototype.closest = function(i, n) {
		var o = -1,
			r = this.width(),
			s = this.coordinates();
		return this.settings.freeDrag || l.each(s, l.proxy(function(t, e) {
			return "left" === n && e - 30 < i && i < e + 30 ? o = t : "right" === n && e - r - 30 < i && i < e - r + 30 ? o = t + 1 : this.op(i, "<", e) && this.op(i, ">", s[t + 1] || e - r) && (o = "left" === n ? t + 1 : t), -1 === o
		}, this)), this.settings.loop || (this.op(i, ">", s[this.minimum()]) ? o = i = this.minimum() : this.op(i, "<", s[this.maximum()]) && (o = i = this.maximum())), o
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
		var i = this._items.length,
			n = e ? 0 : this._clones.length;
		return !this.isNumeric(t) || i < 1 ? t = r : (t < 0 || i + n <= t) && (t = ((t - n / 2) % i + i) % i + n / 2), t
	}, c.prototype.relative = function(t) {
		return t -= this._clones.length / 2, this.normalize(t, !0)
	}, c.prototype.maximum = function(t) {
		var e, i, n, o = this.settings,
			r = this._coordinates.length;
		if (o.loop) r = this._clones.length / 2 + this._items.length - 1;
		else if (o.autoWidth || o.merge) {
			for (e = this._items.length, i = this._items[--e].width(), n = this.$element.width(); e-- && !(n < (i += this._items[e].width() + this.settings.margin)););
			r = e + 1
		} else r = o.center ? this._items.length - 1 : this._items.length - o.items;
		return t && (r -= this._clones.length / 2), Math.max(r, 0)
	}, c.prototype.minimum = function(t) {
		return t ? 0 : this._clones.length / 2
	}, c.prototype.items = function(t) {
		return t === r ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
	}, c.prototype.mergers = function(t) {
		return t === r ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
	}, c.prototype.clones = function(i) {
		function n(t) {
			return t % 2 == 0 ? o + t / 2 : e - (t + 1) / 2
		}
		var e = this._clones.length / 2,
			o = e + this._items.length;
		return i === r ? l.map(this._clones, function(t, e) {
			return n(e)
		}) : l.map(this._clones, function(t, e) {
			return t === i ? n(e) : null
		})
	}, c.prototype.speed = function(t) {
		return t !== r && (this._speed = t), this._speed
	}, c.prototype.coordinates = function(t) {
		var e, i = 1,
			n = t - 1;
		return t === r ? l.map(this._coordinates, l.proxy(function(t, e) {
			return this.coordinates(e)
		}, this)) : (this.settings.center ? (this.settings.rtl && (i = -1, n = t + 1), e = this._coordinates[t], e += (this.width() - e + (this._coordinates[n] || 0)) / 2 * i) : e = this._coordinates[n] || 0, e = Math.ceil(e))
	}, c.prototype.duration = function(t, e, i) {
		return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
	}, c.prototype.to = function(t, e) {
		var i = this.current(),
			n = null,
			o = t - this.relative(i),
			r = (0 < o) - (o < 0),
			s = this._items.length,
			a = this.minimum(),
			l = this.maximum();
		this.settings.loop ? (!this.settings.rewind && Math.abs(o) > s / 2 && (o += -1 * r * s), (n = (((t = i + o) - a) % s + s) % s + a) !== t && n - o <= l && 0 < n - o && (i = n - o, t = n, this.reset(i))) : t = this.settings.rewind ? (t % (l += 1) + l) % l : Math.max(a, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.$element.is(":visible") && this.update()
	}, c.prototype.next = function(t) {
		t = t || !1, this.to(this.relative(this.current()) + 1, t)
	}, c.prototype.prev = function(t) {
		t = t || !1, this.to(this.relative(this.current()) - 1, t)
	}, c.prototype.onTransitionEnd = function(t) {
		if (t !== r && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
		this.leave("animating"), this.trigger("translated")
	}, c.prototype.viewport = function() {
		var t;
		return this.options.responsiveBaseElement !== i ? t = l(this.options.responsiveBaseElement).width() : i.innerWidth ? t = i.innerWidth : o.documentElement && o.documentElement.clientWidth ? t = o.documentElement.clientWidth : console.warn("Can not detect viewport width."), t
	}, c.prototype.replace = function(t) {
		this.$stage.empty(), this._items = [], t = t && (t instanceof jQuery ? t : l(t)), this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)), t.filter(function() {
			return 1 === this.nodeType
		}).each(l.proxy(function(t, e) {
			e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(+e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
		}, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
	}, c.prototype.add = function(t, e) {
		var i = this.relative(this._current);
		e = e === r ? this._items.length : this.normalize(e, !0), t = t instanceof jQuery ? t : l(t), this.trigger("add", {
			content: t,
			position: e
		}), t = this.prepare(t), 0 === this._items.length || e === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[e - 1].after(t), this._items.push(t), this._mergers.push(+t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, +t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[i] && this.reset(this._items[i].index()), this.invalidate("items"), this.trigger("added", {
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
		for (var t in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), l(o).off(".owl.core"), !1 !== this.settings.responsive && (i.clearTimeout(this.resizeTimer), this.off(i, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[t].destroy();
		this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
	}, c.prototype.op = function(t, e, i) {
		var n = this.settings.rtl;
		switch (e) {
			case "<":
				return n ? i < t : t < i;
			case ">":
				return n ? t < i : i < t;
			case ">=":
				return n ? t <= i : i <= t;
			case "<=":
				return n ? i <= t : t <= i
		}
	}, c.prototype.on = function(t, e, i, n) {
		t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
	}, c.prototype.off = function(t, e, i, n) {
		t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
	}, c.prototype.trigger = function(t, e, i, n, o) {
		var r = {
				item: {
					count: this._items.length,
					index: this.current()
				}
			},
			s = l.camelCase(l.grep(["on", t, i], function(t) {
				return t
			}).join("-").toLowerCase()),
			a = l.Event([t, "owl", i || "carousel"].join(".").toLowerCase(), l.extend({
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
	}, c.prototype.register = function(i) {
		var e;
		i.type === c.Type.Event ? (l.event.special[i.name] || (l.event.special[i.name] = {}), l.event.special[i.name].owl || (e = l.event.special[i.name]._default, l.event.special[i.name]._default = function(t) {
			return !e || !e.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && -1 < t.namespace.indexOf("owl") : e.apply(this, arguments)
		}, l.event.special[i.name].owl = !0)) : i.type === c.Type.State && (this._states.tags[i.name] ? this._states.tags[i.name] = this._states.tags[i.name].concat(i.tags) : this._states.tags[i.name] = i.tags, this._states.tags[i.name] = l.grep(this._states.tags[i.name], l.proxy(function(t, e) {
			return l.inArray(t, this._states.tags[i.name]) === e
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
		return (t = (t = t.originalEvent || t || i.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (e.x = t.pageX, e.y = t.pageY) : (e.x = t.clientX, e.y = t.clientY), e
	}, c.prototype.isNumeric = function(t) {
		return !isNaN(parseFloat(t))
	}, c.prototype.difference = function(t, e) {
		return {
			x: t.x - e.x,
			y: t.y - e.y
		}
	}, l.fn.owlCarousel = function(e) {
		var n = Array.prototype.slice.call(arguments, 1);
		return this.each(function() {
			var t = l(this),
				i = t.data("owl.carousel");
			i || (i = new c(this, "object" == typeof e && e), t.data("owl.carousel", i), l.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(t, e) {
				i.register({
					type: c.Type.Event,
					name: e
				}), i.$element.on(e + ".owl.carousel.core", l.proxy(function(t) {
					t.namespace && t.relatedTarget !== this && (this.suppress([e]), i[e].apply(this, [].slice.call(arguments, 1)), this.release([e]))
				}, i))
			})), "string" == typeof e && "_" !== e.charAt(0) && i[e].apply(i, n)
		})
	}, l.fn.owlCarousel.Constructor = c
}(window.Zepto || window.jQuery, window, document),
function(e, i) {
	var n = function(t) {
		this._core = t, this._interval = null, this._visible = null, this._handlers = {
			"initialized.owl.carousel": e.proxy(function(t) {
				t.namespace && this._core.settings.autoRefresh && this.watch()
			}, this)
		}, this._core.options = e.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	n.Defaults = {
		autoRefresh: !0,
		autoRefreshInterval: 500
	}, n.prototype.watch = function() {
		this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = i.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
	}, n.prototype.refresh = function() {
		this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
	}, n.prototype.destroy = function() {
		var t, e;
		for (t in i.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
		for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
	}, e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = n
}(window.Zepto || window.jQuery, window, document),
function(a, r) {
	var e = function(t) {
		this._core = t, this._loaded = [], this._handlers = {
			"initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(t) {
				if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type))
					for (var e = this._core.settings, i = e.center && Math.ceil(e.items / 2) || e.items, n = e.center && -1 * i || 0, o = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + n, r = this._core.clones().length, s = a.proxy(function(t, e) {
							this.load(e)
						}, this); n++ < i;) this.load(r / 2 + this._core.relative(o)), r && a.each(this._core.clones(this._core.relative(o)), s), o++
			}, this)
		}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
	};
	e.Defaults = {
		lazyLoad: !1
	}, e.prototype.load = function(t) {
		var e = this._core.$stage.children().eq(t),
			i = e && e.find(".owl-lazy");
		!i || -1 < a.inArray(e.get(0), this._loaded) || (i.each(a.proxy(function(t, e) {
			var i, n = a(e),
				o = 1 < r.devicePixelRatio && n.attr("data-src-retina") || n.attr("data-src");
			this._core.trigger("load", {
				element: n,
				url: o
			}, "lazy"), n.is("img") ? n.one("load.owl.lazy", a.proxy(function() {
				n.css("opacity", 1), this._core.trigger("loaded", {
					element: n,
					url: o
				}, "lazy")
			}, this)).attr("src", o) : ((i = new Image).onload = a.proxy(function() {
				n.css({
					"background-image": 'url("' + o + '")',
					opacity: "1"
				}), this._core.trigger("loaded", {
					element: n,
					url: o
				}, "lazy")
			}, this), i.src = o)
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
			i = e + this._core.settings.items,
			n = this._core.$stage.children().toArray().slice(e, i),
			o = [];
		r.each(n, function(t, e) {
			o.push(r(e).height())
		}), t = Math.max.apply(null, o), this._core.$stage.parent().height(t).addClass(this._core.settings.autoHeightClass)
	}, e.prototype.destroy = function() {
		var t, e;
		for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
		for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
	}, r.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, (window, document)),
function(u, e) {
	var i = function(t) {
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
		}, this._core.options = u.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", u.proxy(function(t) {
			this.play(t)
		}, this))
	};
	i.Defaults = {
		video: !1,
		videoHeight: !1,
		videoWidth: !1
	}, i.prototype.fetch = function(t, e) {
		var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
			n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
			o = t.attr("data-width") || this._core.settings.videoWidth,
			r = t.attr("data-height") || this._core.settings.videoHeight,
			s = t.attr("href");
		if (!s) throw new Error("Missing video URL.");
		if (-1 < (n = s.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")) i = "youtube";
		else if (-1 < n[3].indexOf("vimeo")) i = "vimeo";
		else {
			if (!(-1 < n[3].indexOf("vzaar"))) throw new Error("Video URL not supported.");
			i = "vzaar"
		}
		n = n[6], this._videos[s] = {
			type: i,
			id: n,
			width: o,
			height: r
		}, e.attr("data-video", s), this.thumbnail(t, this._videos[s])
	}, i.prototype.thumbnail = function(e, t) {
		function i(t) {
			n = c.lazyLoad ? '<div class="owl-video-tn ' + l + '" ' + a + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(n), e.after('<div class="owl-video-play-icon"></div>')
		}
		var n, o, r = t.width && t.height ? 'style="width:' + t.width + "px;height:" + t.height + 'px;"' : "",
			s = e.find("img"),
			a = "src",
			l = "",
			c = this._core.settings;
		if (e.wrap('<div class="owl-video-wrapper"' + r + "></div>"), this._core.settings.lazyLoad && (a = "data-src", l = "owl-lazy"), s.length) return i(s.attr(a)), s.remove(), !1;
		"youtube" === t.type ? (o = "//img.youtube.com/vi/" + t.id + "/hqdefault.jpg", i(o)) : "vimeo" === t.type ? u.ajax({
			type: "GET",
			url: "//vimeo.com/api/v2/video/" + t.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function(t) {
				o = t[0].thumbnail_large, i(o)
			}
		}) : "vzaar" === t.type && u.ajax({
			type: "GET",
			url: "//vzaar.com/api/videos/" + t.id + ".json",
			jsonp: "callback",
			dataType: "jsonp",
			success: function(t) {
				o = t.framegrab_url, i(o)
			}
		})
	}, i.prototype.stop = function() {
		this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
	}, i.prototype.play = function(t) {
		var e, i = u(t.target).closest("." + this._core.settings.itemClass),
			n = this._videos[i.attr("data-video")],
			o = n.width || "100%",
			r = n.height || this._core.$stage.height();
		this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), i = this._core.items(this._core.relative(i.index())), this._core.reset(i.index()), "youtube" === n.type ? e = '<iframe width="' + o + '" height="' + r + '" src="//www.youtube.com/embed/' + n.id + "?autoplay=1&rel=0&v=" + n.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === n.type ? e = '<iframe src="//player.vimeo.com/video/' + n.id + '?autoplay=1" width="' + o + '" height="' + r + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === n.type && (e = '<iframe frameborder="0"height="' + r + '"width="' + o + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + n.id + '/player?autoplay=true"></iframe>'), u('<div class="owl-video-frame">' + e + "</div>").insertAfter(i.find(".owl-video")), this._playing = i.addClass("owl-video-playing"))
	}, i.prototype.isInFullScreen = function() {
		var t = e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement;
		return t && u(t).parent().hasClass("owl-video-frame")
	}, i.prototype.destroy = function() {
		var t, e;
		for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
		for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
	}, u.fn.owlCarousel.Constructor.Plugins.Video = i
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
		var t, e, i, n, o, r;
		1 === this.core.settings.items && s.support.animation && s.support.transition && (this.core.speed(0), e = s.proxy(this.clear, this), i = this.core.$stage.children().eq(this.previous), n = this.core.$stage.children().eq(this.next), o = this.core.settings.animateIn, r = this.core.settings.animateOut, this.core.current() !== this.previous && (r && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(s.support.animation.end, e).css({
			left: t + "px"
		}).addClass("animated owl-animated-out").addClass(r)), o && n.one(s.support.animation.end, e).addClass("animated owl-animated-in").addClass(o)))
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
function(i, n, o) {
	var e = function(t) {
		this._core = t, this._timeout = null, this._paused = !1, this._handlers = {
			"changed.owl.carousel": i.proxy(function(t) {
				t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
			}, this),
			"initialized.owl.carousel": i.proxy(function(t) {
				t.namespace && this._core.settings.autoplay && this.play()
			}, this),
			"play.owl.autoplay": i.proxy(function(t, e, i) {
				t.namespace && this.play(e, i)
			}, this),
			"stop.owl.autoplay": i.proxy(function(t) {
				t.namespace && this.stop()
			}, this),
			"mouseover.owl.autoplay": i.proxy(function() {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
			}, this),
			"mouseleave.owl.autoplay": i.proxy(function() {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
			}, this),
			"touchstart.owl.core": i.proxy(function() {
				this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
			}, this),
			"touchend.owl.core": i.proxy(function() {
				this._core.settings.autoplayHoverPause && this.play()
			}, this)
		}, this._core.$element.on(this._handlers), this._core.options = i.extend({}, e.Defaults, this._core.options)
	};
	e.Defaults = {
		autoplay: !1,
		autoplayTimeout: 5e3,
		autoplayHoverPause: !1,
		autoplaySpeed: !1
	}, e.prototype.play = function(t, e) {
		this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
	}, e.prototype._getNextTimeout = function(t, e) {
		return this._timeout && n.clearTimeout(this._timeout), n.setTimeout(i.proxy(function() {
			this._paused || this._core.is("busy") || this._core.is("interacting") || o.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
		}, this), t || this._core.settings.autoplayTimeout)
	}, e.prototype._setAutoPlayInterval = function() {
		this._timeout = this._getNextTimeout()
	}, e.prototype.stop = function() {
		this._core.is("rotating") && (n.clearTimeout(this._timeout), this._core.leave("rotating"))
	}, e.prototype.pause = function() {
		this._core.is("rotating") && (this._paused = !0)
	}, e.prototype.destroy = function() {
		var t, e;
		for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
		for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
	}, i.fn.owlCarousel.Constructor.Plugins.autoplay = e
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
		var t, i = this._core.settings;
		for (t in this._controls.$relative = (i.navContainer ? r(i.navContainer) : r("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = r("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", r.proxy(function(t) {
				this.prev(i.navSpeed)
			}, this)), this._controls.$next = r("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", r.proxy(function(t) {
				this.next(i.navSpeed)
			}, this)), i.dotsData || (this._templates = [r("<div>").addClass(i.dotClass).append(r("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? r(i.dotsContainer) : r("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", r.proxy(function(t) {
				var e = r(t.target).parent().is(this._controls.$absolute) ? r(t.target).index() : r(t.target).parent().index();
				t.preventDefault(), this.to(e, i.dotsSpeed)
			}, this)), this._overrides) this._core[t] = r.proxy(this[t], this)
	}, e.prototype.destroy = function() {
		var t, e, i, n;
		for (t in this._handlers) this.$element.off(t, this._handlers[t]);
		for (e in this._controls) this._controls[e].remove();
		for (n in this.overides) this._core[n] = this._overrides[n];
		for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
	}, e.prototype.update = function() {
		var t, e, i = this._core.clones().length / 2,
			n = i + this._core.items().length,
			o = this._core.maximum(!0),
			r = this._core.settings,
			s = r.center || r.autoWidth || r.dotsData ? 1 : r.dotsEach || r.items;
		if ("page" !== r.slideBy && (r.slideBy = Math.min(r.slideBy, r.items)), r.dots || "page" == r.slideBy)
			for (this._pages = [], t = i, e = 0; t < n; t++) {
				if (s <= e || 0 === e) {
					if (this._pages.push({
							start: Math.min(o, t - i),
							end: t - i + s - 1
						}), Math.min(o, t - i) === o) break;
					e = 0, 0
				}
				e += this._core.mergers(this._core.relative(t))
			}
	}, e.prototype.draw = function() {
		var t, e = this._core.settings,
			i = this._core.items().length <= e.items,
			n = this._core.relative(this._core.current()),
			o = e.loop || e.rewind;
		this._controls.$relative.toggleClass("disabled", !e.nav || i), e.nav && (this._controls.$previous.toggleClass("disabled", !o && n <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && n >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !e.dots || i), e.dots && (t = this._pages.length - this._controls.$absolute.children().length, e.dotsData && 0 != t ? this._controls.$absolute.html(this._templates.join("")) : 0 < t ? this._controls.$absolute.append(new Array(1 + t).join(this._templates[0])) : t < 0 && this._controls.$absolute.children().slice(t).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(r.inArray(this.current(), this._pages)).addClass("active"))
	}, e.prototype.onTrigger = function(t) {
		var e = this._core.settings;
		t.page = {
			index: r.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: e && (e.center || e.autoWidth || e.dotsData ? 1 : e.dotsEach || e.items)
		}
	}, e.prototype.current = function() {
		var i = this._core.relative(this._core.current());
		return r.grep(this._pages, r.proxy(function(t, e) {
			return t.start <= i && t.end >= i
		}, this)).pop()
	}, e.prototype.getPosition = function(t) {
		var e, i, n = this._core.settings;
		return "page" == n.slideBy ? (e = r.inArray(this.current(), this._pages), i = this._pages.length, t ? ++e : --e, e = this._pages[(e % i + i) % i].start) : (e = this._core.relative(this._core.current()), i = this._core.items().length, t ? e += n.slideBy : e -= n.slideBy), e
	}, e.prototype.next = function(t) {
		r.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
	}, e.prototype.prev = function(t) {
		r.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
	}, e.prototype.to = function(t, e, i) {
		var n;
		!i && this._pages.length ? (n = this._pages.length, r.proxy(this._overrides.to, this._core)(this._pages[(t % n + n) % n].start, e)) : r.proxy(this._overrides.to, this._core)(t, e)
	}, r.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, (window, document)),
function(n, o) {
	"use strict";
	var e = function(t) {
		this._core = t, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
			"initialized.owl.carousel": n.proxy(function(t) {
				t.namespace && "URLHash" === this._core.settings.startPosition && n(o).trigger("hashchange.owl.navigation")
			}, this),
			"prepared.owl.carousel": n.proxy(function(t) {
				if (t.namespace) {
					var e = n(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
					if (!e) return;
					this._hashes[e] = t.content
				}
			}, this),
			"changed.owl.carousel": n.proxy(function(t) {
				if (t.namespace && "position" === t.property.name) {
					var i = this._core.items(this._core.relative(this._core.current())),
						e = n.map(this._hashes, function(t, e) {
							return t === i ? e : null
						}).join();
					if (!e || o.location.hash.slice(1) === e) return;
					o.location.hash = e
				}
			}, this)
		}, this._core.options = n.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), n(o).on("hashchange.owl.navigation", n.proxy(function(t) {
			var e = o.location.hash.substring(1),
				i = this._core.$stage.children(),
				n = this._hashes[e] && i.index(this._hashes[e]);
			void 0 !== n && n !== this._core.current() && this._core.to(this._core.relative(n), !1, !0)
		}, this))
	};
	e.Defaults = {
		URLhashListener: !1
	}, e.prototype.destroy = function() {
		var t, e;
		for (t in n(o).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(t, this._handlers[t]);
		for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
	}, n.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function(o, r) {
	function e(t, i) {
		var n = !1,
			e = t.charAt(0).toUpperCase() + t.slice(1);
		return o.each((t + " " + a.join(e + " ") + e).split(" "), function(t, e) {
			if (s[e] !== r) return n = !i || e, !1
		}), n
	}

	function t(t) {
		return e(t, !0)
	}
	var s = o("<support>").get(0).style,
		a = "Webkit Moz O ms".split(" "),
		i = {
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
		n = function() {
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
	}() || (o.support.transition = new String(t("transition")), o.support.transition.end = i.transition.end[o.support.transition]), c() && (o.support.animation = new String(t("animation")), o.support.animation.end = i.animation.end[o.support.animation]), n() && (o.support.transform = new String(t("transform")), o.support.transform3d = l())
}(window.Zepto || window.jQuery, (window, void document)),
function r(s, a, l) {
	function c(i, t) {
		if (!a[i]) {
			if (!s[i]) {
				var e = "function" == typeof require && require;
				if (!t && e) return e(i, !0);
				if (u) return u(i, !0);
				var n = new Error("Cannot find module '" + i + "'");
				throw n.code = "MODULE_NOT_FOUND", n
			}
			var o = a[i] = {
				exports: {}
			};
			s[i][0].call(o.exports, function(t) {
				var e = s[i][1][t];
				return c(e || t)
			}, o, o.exports, r, s, a, l)
		}
		return a[i].exports
	}
	for (var u = "function" == typeof require && require, t = 0; t < l.length; t++) c(l[t]);
	return c
}({
	1: [function(t, e, i) {
		"use strict";

		function n(t) {
			t.fn.perfectScrollbar = function(i) {
				return this.each(function() {
					var t, e;
					"object" == typeof i || void 0 === i ? (t = i, s.get(this) || r.initialize(this, t)) : "update" === (e = i) ? r.update(this) : "destroy" === e && r.destroy(this)
				})
			}
		}
		var o, r = t("../main"),
			s = t("../plugin/instances");
		"function" == typeof define && define.amd ? define(["jquery"], n) : void 0 !== (o = window.jQuery ? window.jQuery : window.$) && n(o), e.exports = n
	}, {
		"../main": 6,
		"../plugin/instances": 17
	}],
	2: [function(t, e, i) {
		"use strict";
		var n = {
			create: function(t, e) {
				var i = document.createElement(t);
				return i.className = e, i
			},
			appendTo: function(t, e) {
				return e.appendChild(t), t
			}
		};
		n.css = function(t, e, i) {
			return "object" == typeof e ? function(t, e) {
				for (var i in e) {
					var n = e[i];
					"number" == typeof n && (n = n.toString() + "px"), t.style[i] = n
				}
				return t
			}(t, e) : void 0 === i ? (s = t, a = e, window.getComputedStyle(s)[a]) : (n = t, o = e, "number" == typeof(r = i) && (r = r.toString() + "px"), n.style[o] = r, n);
			var n, o, r, s, a
		}, n.matches = function(t, e) {
			return void 0 !== t.matches ? t.matches(e) : t.msMatchesSelector(e)
		}, n.remove = function(t) {
			void 0 !== t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
		}, n.queryChildren = function(t, e) {
			return Array.prototype.filter.call(t.childNodes, function(t) {
				return n.matches(t, e)
			})
		}, e.exports = n
	}, {}],
	3: [function(t, e, i) {
		"use strict";

		function n(t) {
			this.element = t, this.events = {}
		}
		n.prototype.bind = function(t, e) {
			void 0 === this.events[t] && (this.events[t] = []), this.events[t].push(e), this.element.addEventListener(t, e, !1)
		}, n.prototype.unbind = function(e, i) {
			var n = void 0 !== i;
			this.events[e] = this.events[e].filter(function(t) {
				return !(!n || t === i) || (this.element.removeEventListener(e, t, !1), !1)
			}, this)
		}, n.prototype.unbindAll = function() {
			for (var t in this.events) this.unbind(t)
		};

		function o() {
			this.eventElements = []
		}
		o.prototype.eventElement = function(e) {
			var t = this.eventElements.filter(function(t) {
				return t.element === e
			})[0];
			return void 0 === t && (t = new n(e), this.eventElements.push(t)), t
		}, o.prototype.bind = function(t, e, i) {
			this.eventElement(t).bind(e, i)
		}, o.prototype.unbind = function(t, e, i) {
			this.eventElement(t).unbind(e, i)
		}, o.prototype.unbindAll = function() {
			for (var t = 0; t < this.eventElements.length; t++) this.eventElements[t].unbindAll()
		}, o.prototype.once = function(t, e, i) {
			var n = this.eventElement(t),
				o = function(t) {
					n.unbind(e, o), i(t)
				};
			n.bind(e, o)
		}, e.exports = o
	}, {}],
	4: [function(t, e, i) {
		"use strict";

		function n() {
			return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
		}
		e.exports = function() {
			return n() + n() + "-" + n() + "-" + n() + "-" + n() + "-" + n() + n() + n()
		}
	}, {}],
	5: [function(t, e, i) {
		"use strict";

		function o(t) {
			return ["ps--in-scrolling"].concat(void 0 === t ? ["ps--x", "ps--y"] : ["ps--" + t])
		}
		var n = t("./dom"),
			r = i.toInt = function(t) {
				return parseInt(t, 10) || 0
			};
		i.isEditable = function(t) {
			return n.matches(t, "input,[contenteditable]") || n.matches(t, "select,[contenteditable]") || n.matches(t, "textarea,[contenteditable]") || n.matches(t, "button,[contenteditable]")
		}, i.removePsClasses = function(t) {
			for (var e = 0; e < t.classList.length; e++) {
				var i = t.classList[e];
				0 === i.indexOf("ps-") && t.classList.remove(i)
			}
		}, i.outerWidth = function(t) {
			return r(n.css(t, "width")) + r(n.css(t, "paddingLeft")) + r(n.css(t, "paddingRight")) + r(n.css(t, "borderLeftWidth")) + r(n.css(t, "borderRightWidth"))
		}, i.startScrolling = function(t, e) {
			for (var i = o(e), n = 0; n < i.length; n++) t.classList.add(i[n])
		}, i.stopScrolling = function(t, e) {
			for (var i = o(e), n = 0; n < i.length; n++) t.classList.remove(i[n])
		}, i.env = {
			isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
			supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
			supportsIePointer: "undefined" != typeof window && null !== window.navigator.msMaxTouchPoints
		}
	}, {
		"./dom": 2
	}],
	6: [function(t, e, i) {
		"use strict";
		var n = t("./plugin/destroy"),
			o = t("./plugin/initialize"),
			r = t("./plugin/update");
		e.exports = {
			initialize: o,
			update: r,
			destroy: n
		}
	}, {
		"./plugin/destroy": 8,
		"./plugin/initialize": 16,
		"./plugin/update": 20
	}],
	7: [function(t, e, i) {
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
	8: [function(t, e, i) {
		"use strict";
		var n = t("../lib/helper"),
			o = t("../lib/dom"),
			r = t("./instances");
		e.exports = function(t) {
			var e = r.get(t);
			e && (e.event.unbindAll(), o.remove(e.scrollbarX), o.remove(e.scrollbarY), o.remove(e.scrollbarXRail), o.remove(e.scrollbarYRail), n.removePsClasses(t), r.remove(t))
		}
	}, {
		"../lib/dom": 2,
		"../lib/helper": 5,
		"./instances": 17
	}],
	9: [function(t, e, i) {
		"use strict";

		function n(i, n) {
			function o(t) {
				return t.getBoundingClientRect()
			}

			function t(t) {
				t.stopPropagation()
			}
			n.event.bind(n.scrollbarY, "click", t), n.event.bind(n.scrollbarYRail, "click", function(t) {
				var e = t.pageY - window.pageYOffset - o(n.scrollbarYRail).top > n.scrollbarYTop ? 1 : -1;
				s(i, "top", i.scrollTop + e * n.containerHeight), r(i), t.stopPropagation()
			}), n.event.bind(n.scrollbarX, "click", t), n.event.bind(n.scrollbarXRail, "click", function(t) {
				var e = t.pageX - window.pageXOffset - o(n.scrollbarXRail).left > n.scrollbarXLeft ? 1 : -1;
				s(i, "left", i.scrollLeft + e * n.containerWidth), r(i), t.stopPropagation()
			})
		}
		var o = t("../instances"),
			r = t("../update-geometry"),
			s = t("../update-scroll");
		e.exports = function(t) {
			n(t, o.get(t))
		}
	}, {
		"../instances": 17,
		"../update-geometry": 18,
		"../update-scroll": 19
	}],
	10: [function(t, e, i) {
		"use strict";

		function n(o, r) {
			function e(t) {
				(function(t) {
					var e = s + t * r.railXRatio,
						i = Math.max(0, r.scrollbarXRail.getBoundingClientRect().left) + r.railXRatio * (r.railXWidth - r.scrollbarXWidth);
					r.scrollbarXLeft = e < 0 ? 0 : i < e ? i : e;
					var n = a.toInt(r.scrollbarXLeft * (r.contentWidth - r.containerWidth) / (r.containerWidth - r.railXRatio * r.scrollbarXWidth)) - r.negativeScrollAdjustment;
					u(o, "left", n)
				})(t.pageX - n), c(o), t.stopPropagation(), t.preventDefault()
			}

			function i() {
				a.stopScrolling(o, "x"), r.event.unbind(r.ownerDocument, "mousemove", e)
			}
			var s = null,
				n = null;
			r.event.bind(r.scrollbarX, "mousedown", function(t) {
				n = t.pageX, s = a.toInt(l.css(r.scrollbarX, "left")) * r.railXRatio, a.startScrolling(o, "x"), r.event.bind(r.ownerDocument, "mousemove", e), r.event.once(r.ownerDocument, "mouseup", i), t.stopPropagation(), t.preventDefault()
			})
		}

		function o(o, r) {
			function e(t) {
				(function(t) {
					var e = s + t * r.railYRatio,
						i = Math.max(0, r.scrollbarYRail.getBoundingClientRect().top) + r.railYRatio * (r.railYHeight - r.scrollbarYHeight);
					r.scrollbarYTop = e < 0 ? 0 : i < e ? i : e;
					var n = a.toInt(r.scrollbarYTop * (r.contentHeight - r.containerHeight) / (r.containerHeight - r.railYRatio * r.scrollbarYHeight));
					u(o, "top", n)
				})(t.pageY - n), c(o), t.stopPropagation(), t.preventDefault()
			}

			function i() {
				a.stopScrolling(o, "y"), r.event.unbind(r.ownerDocument, "mousemove", e)
			}
			var s = null,
				n = null;
			r.event.bind(r.scrollbarY, "mousedown", function(t) {
				n = t.pageY, s = a.toInt(l.css(r.scrollbarY, "top")) * r.railYRatio, a.startScrolling(o, "y"), r.event.bind(r.ownerDocument, "mousemove", e), r.event.once(r.ownerDocument, "mouseup", i), t.stopPropagation(), t.preventDefault()
			})
		}
		var a = t("../../lib/helper"),
			l = t("../../lib/dom"),
			r = t("../instances"),
			c = t("../update-geometry"),
			u = t("../update-scroll");
		e.exports = function(t) {
			var e = r.get(t);
			n(t, e), o(t, e)
		}
	}, {
		"../../lib/dom": 2,
		"../../lib/helper": 5,
		"../instances": 17,
		"../update-geometry": 18,
		"../update-scroll": 19
	}],
	11: [function(t, e, i) {
		"use strict";

		function n(r, s) {
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
						var i = document.activeElement ? document.activeElement : s.ownerDocument.activeElement;
						if (i) {
							if ("IFRAME" === i.tagName) i = i.contentDocument.activeElement;
							else
								for (; i.shadowRoot;) i = i.shadowRoot.activeElement;
							if (l.isEditable(i)) return
						}
						var n = 0,
							o = 0;
						switch (t.which) {
							case 37:
								n = t.metaKey ? -s.contentWidth : t.altKey ? -s.containerWidth : -30;
								break;
							case 38:
								o = t.metaKey ? s.contentHeight : t.altKey ? s.containerHeight : 30;
								break;
							case 39:
								n = t.metaKey ? s.contentWidth : t.altKey ? s.containerWidth : 30;
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
						d(r, "top", r.scrollTop - o), d(r, "left", r.scrollLeft + n), u(r),
							function(t, e) {
								var i = r.scrollTop;
								if (0 === t) {
									if (!s.scrollbarYActive) return !1;
									if (0 === i && 0 < e || i >= s.contentHeight - s.containerHeight && e < 0) return !s.settings.wheelPropagation
								}
								var n = r.scrollLeft;
								if (0 === e) {
									if (!s.scrollbarXActive) return !1;
									if (0 === n && t < 0 || n >= s.contentWidth - s.containerWidth && 0 < t) return !s.settings.wheelPropagation
								}
								return !0
							}(n, o) && t.preventDefault()
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
			n(t, o.get(t))
		}
	}, {
		"../../lib/dom": 2,
		"../../lib/helper": 5,
		"../instances": 17,
		"../update-geometry": 18,
		"../update-scroll": 19
	}],
	12: [function(t, e, i) {
		"use strict";

		function n(a, l) {
			function t(t) {
				var e, i, n, o = (i = (e = t).deltaX, n = -1 * e.deltaY, void 0 !== i && void 0 !== n || (i = -1 * e.wheelDeltaX / 6, n = e.wheelDeltaY / 6), e.deltaMode && 1 === e.deltaMode && (i *= 10, n *= 10), i != i && n != n && (i = 0, n = e.wheelDelta), e.shiftKey ? [-n, -i] : [i, n]),
					r = o[0],
					s = o[1];
				! function(t, e) {
					var i = a.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
					if (i) {
						var n = window.getComputedStyle(i);
						if (![n.overflow, n.overflowX, n.overflowY].join("").match(/(scroll|auto)/)) return;
						var o = i.scrollHeight - i.clientHeight;
						if (0 < o && !(0 === i.scrollTop && 0 < e || i.scrollTop === o && e < 0)) return 1;
						var r = i.scrollLeft - i.clientWidth;
						if (0 < r && !(0 === i.scrollLeft && t < 0 || i.scrollLeft === r && 0 < t)) return 1
					}
				}(r, s) && (c = !1, l.settings.useBothWheelAxes ? l.scrollbarYActive && !l.scrollbarXActive ? (d(a, "top", s ? a.scrollTop - s * l.settings.wheelSpeed : a.scrollTop + r * l.settings.wheelSpeed), c = !0) : l.scrollbarXActive && !l.scrollbarYActive && (d(a, "left", r ? a.scrollLeft + r * l.settings.wheelSpeed : a.scrollLeft - s * l.settings.wheelSpeed), c = !0) : (d(a, "top", a.scrollTop - s * l.settings.wheelSpeed), d(a, "left", a.scrollLeft + r * l.settings.wheelSpeed)), u(a), (c = c || function(t, e) {
					var i = a.scrollTop;
					if (0 === t) {
						if (!l.scrollbarYActive) return !1;
						if (0 === i && 0 < e || i >= l.contentHeight - l.containerHeight && e < 0) return !l.settings.wheelPropagation
					}
					var n = a.scrollLeft;
					if (0 === e) {
						if (!l.scrollbarXActive) return !1;
						if (0 === n && t < 0 || n >= l.contentWidth - l.containerWidth && 0 < t) return !l.settings.wheelPropagation
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
			n(t, o.get(t))
		}
	}, {
		"../instances": 17,
		"../update-geometry": 18,
		"../update-scroll": 19
	}],
	13: [function(t, e, i) {
		"use strict";
		var n = t("../instances"),
			o = t("../update-geometry");
		e.exports = function(t) {
			var e, i = n.get(t);
			e = t, i.event.bind(e, "scroll", function() {
				o(e)
			})
		}
	}, {
		"../instances": 17,
		"../update-geometry": 18
	}],
	14: [function(t, e, i) {
		"use strict";

		function n(a, t) {
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
				var e, i, n, o, r, s;
				d && (e = t.pageX, i = t.pageY, n = a.offsetLeft, o = a.offsetLeft + a.offsetWidth, r = a.offsetTop, s = a.offsetTop + a.offsetHeight, e < n + 3 ? (u.left = -5, h.startScrolling(a, "x")) : o - 3 < e ? (u.left = 5, h.startScrolling(a, "x")) : u.left = 0, i < r + 3 ? (u.top = r + 3 - i < 5 ? -5 : -20, h.startScrolling(a, "y")) : s - 3 < i ? (u.top = i - s + 3 < 5 ? 5 : 20, h.startScrolling(a, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? l() : c = c || setInterval(function() {
					return p.get(a) ? (m(a, "top", a.scrollTop + u.top), m(a, "left", a.scrollLeft + u.left), void f(a)) : void clearInterval(c)
				}, 50))
			})
		}
		var h = t("../../lib/helper"),
			p = t("../instances"),
			f = t("../update-geometry"),
			m = t("../update-scroll");
		e.exports = function(t) {
			n(t, p.get(t))
		}
	}, {
		"../../lib/helper": 5,
		"../instances": 17,
		"../update-geometry": 18,
		"../update-scroll": 19
	}],
	15: [function(t, e, i) {
		"use strict";

		function n(a, l, t, e) {
			function c(t, e) {
				w(a, "top", a.scrollTop - e), w(a, "left", a.scrollLeft - t), b(a)
			}

			function i() {
				g = !0
			}

			function n() {
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
				var e, i, n, o, r, s;
				!v && l.settings.swipePropagation && h(t), !g && v && d(t) && (c(n = (i = {
					pageX: (e = u(t)).pageX,
					pageY: e.pageY
				}).pageX - p.pageX, o = i.pageY - p.pageY), p = i, 0 < (s = (r = (new Date).getTime()) - f) && (m.x = n / s, m.y = o / s, f = r), function(t, e) {
					var i = a.scrollTop,
						n = a.scrollLeft,
						o = Math.abs(t),
						r = Math.abs(e);
					if (o < r) {
						if (e < 0 && i === l.contentHeight - l.containerHeight || 0 < e && 0 === i) return !l.settings.swipePropagation
					} else if (r < o && (t < 0 && n === l.contentWidth - l.containerWidth || 0 < t && 0 === n)) return !l.settings.swipePropagation;
					return 1
				}(n, o) && (t.stopPropagation(), t.preventDefault()))
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
			t ? (l.event.bind(window, "touchstart", i), l.event.bind(window, "touchend", n), l.event.bind(a, "touchstart", h), l.event.bind(a, "touchmove", o), l.event.bind(a, "touchend", r)) : e && (window.PointerEvent ? (l.event.bind(window, "pointerdown", i), l.event.bind(window, "pointerup", n), l.event.bind(a, "pointerdown", h), l.event.bind(a, "pointermove", o), l.event.bind(a, "pointerup", r)) : window.MSPointerEvent && (l.event.bind(window, "MSPointerDown", i), l.event.bind(window, "MSPointerUp", n), l.event.bind(a, "MSPointerDown", h), l.event.bind(a, "MSPointerMove", o), l.event.bind(a, "MSPointerUp", r)))
		}
		var o = t("../../lib/helper"),
			y = t("../instances"),
			b = t("../update-geometry"),
			w = t("../update-scroll");
		e.exports = function(t) {
			(o.env.supportsTouch || o.env.supportsIePointer) && n(t, y.get(t), o.env.supportsTouch, o.env.supportsIePointer)
		}
	}, {
		"../../lib/helper": 5,
		"../instances": 17,
		"../update-geometry": 18,
		"../update-scroll": 19
	}],
	16: [function(t, e, i) {
		"use strict";
		var n = t("./instances"),
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
			var i = n.add(e, "object" == typeof t ? t : {});
			e.classList.add("ps--theme_" + i.settings.theme), i.settings.handlers.forEach(function(t) {
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
	17: [function(t, e, i) {
		"use strict";

		function o(t, e) {
			function i() {
				t.classList.add("ps--focus")
			}

			function n() {
				t.classList.remove("ps--focus")
			}
			var o, r, s = this;
			for (var a in s.settings = c(), e) s.settings[a] = e[a];
			s.containerWidth = null, s.containerHeight = null, s.contentWidth = null, s.contentHeight = null, s.isRtl = "rtl" === u.css(t, "direction"), s.isNegativeScroll = (r = t.scrollLeft, t.scrollLeft = -1, o = t.scrollLeft < 0, t.scrollLeft = r, o), s.negativeScrollAdjustment = s.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, s.event = new d, s.ownerDocument = t.ownerDocument || document, s.scrollbarXRail = u.appendTo(u.create("div", "ps__scrollbar-x-rail"), t), s.scrollbarX = u.appendTo(u.create("div", "ps__scrollbar-x"), s.scrollbarXRail), s.scrollbarX.setAttribute("tabindex", 0), s.event.bind(s.scrollbarX, "focus", i), s.event.bind(s.scrollbarX, "blur", n), s.scrollbarXActive = null, s.scrollbarXWidth = null, s.scrollbarXLeft = null, s.scrollbarXBottom = l.toInt(u.css(s.scrollbarXRail, "bottom")), s.isScrollbarXUsingBottom = s.scrollbarXBottom == s.scrollbarXBottom, s.scrollbarXTop = s.isScrollbarXUsingBottom ? null : l.toInt(u.css(s.scrollbarXRail, "top")), s.railBorderXWidth = l.toInt(u.css(s.scrollbarXRail, "borderLeftWidth")) + l.toInt(u.css(s.scrollbarXRail, "borderRightWidth")), u.css(s.scrollbarXRail, "display", "block"), s.railXMarginWidth = l.toInt(u.css(s.scrollbarXRail, "marginLeft")) + l.toInt(u.css(s.scrollbarXRail, "marginRight")), u.css(s.scrollbarXRail, "display", ""), s.railXWidth = null, s.railXRatio = null, s.scrollbarYRail = u.appendTo(u.create("div", "ps__scrollbar-y-rail"), t), s.scrollbarY = u.appendTo(u.create("div", "ps__scrollbar-y"), s.scrollbarYRail), s.scrollbarY.setAttribute("tabindex", 0), s.event.bind(s.scrollbarY, "focus", i), s.event.bind(s.scrollbarY, "blur", n), s.scrollbarYActive = null, s.scrollbarYHeight = null, s.scrollbarYTop = null, s.scrollbarYRight = l.toInt(u.css(s.scrollbarYRail, "right")), s.isScrollbarYUsingRight = s.scrollbarYRight == s.scrollbarYRight, s.scrollbarYLeft = s.isScrollbarYUsingRight ? null : l.toInt(u.css(s.scrollbarYRail, "left")), s.scrollbarYOuterWidth = s.isRtl ? l.outerWidth(s.scrollbarY) : null, s.railBorderYWidth = l.toInt(u.css(s.scrollbarYRail, "borderTopWidth")) + l.toInt(u.css(s.scrollbarYRail, "borderBottomWidth")), u.css(s.scrollbarYRail, "display", "block"), s.railYMarginHeight = l.toInt(u.css(s.scrollbarYRail, "marginTop")) + l.toInt(u.css(s.scrollbarYRail, "marginBottom")), u.css(s.scrollbarYRail, "display", ""), s.railYHeight = null, s.railYRatio = null
		}

		function n(t) {
			return t.getAttribute("data-ps-id")
		}
		var l = t("../lib/helper"),
			c = t("./default-setting"),
			u = t("../lib/dom"),
			d = t("../lib/event-manager"),
			r = t("../lib/guid"),
			s = {};
		i.add = function(t, e) {
			var i, n = r();
			return i = n, t.setAttribute("data-ps-id", i), s[n] = new o(t, e), s[n]
		}, i.remove = function(t) {
			delete s[n(t)], t.removeAttribute("data-ps-id")
		}, i.get = function(t) {
			return s[n(t)]
		}
	}, {
		"../lib/dom": 2,
		"../lib/event-manager": 3,
		"../lib/guid": 4,
		"../lib/helper": 5,
		"./default-setting": 7
	}],
	18: [function(t, e, i) {
		"use strict";

		function n(t, e) {
			return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e
		}
		var o = t("../lib/helper"),
			r = t("../lib/dom"),
			s = t("./instances"),
			a = t("./update-scroll");
		e.exports = function(t) {
			var e, i = s.get(t);
			i.containerWidth = t.clientWidth, i.containerHeight = t.clientHeight, i.contentWidth = t.scrollWidth, i.contentHeight = t.scrollHeight, t.contains(i.scrollbarXRail) || (0 < (e = r.queryChildren(t, ".ps__scrollbar-x-rail")).length && e.forEach(function(t) {
					r.remove(t)
				}), r.appendTo(i.scrollbarXRail, t)), t.contains(i.scrollbarYRail) || (0 < (e = r.queryChildren(t, ".ps__scrollbar-y-rail")).length && e.forEach(function(t) {
					r.remove(t)
				}), r.appendTo(i.scrollbarYRail, t)), !i.settings.suppressScrollX && i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth ? (i.scrollbarXActive = !0, i.railXWidth = i.containerWidth - i.railXMarginWidth, i.railXRatio = i.containerWidth / i.railXWidth, i.scrollbarXWidth = n(i, o.toInt(i.railXWidth * i.containerWidth / i.contentWidth)), i.scrollbarXLeft = o.toInt((i.negativeScrollAdjustment + t.scrollLeft) * (i.railXWidth - i.scrollbarXWidth) / (i.contentWidth - i.containerWidth))) : i.scrollbarXActive = !1, !i.settings.suppressScrollY && i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight ? (i.scrollbarYActive = !0, i.railYHeight = i.containerHeight - i.railYMarginHeight, i.railYRatio = i.containerHeight / i.railYHeight, i.scrollbarYHeight = n(i, o.toInt(i.railYHeight * i.containerHeight / i.contentHeight)), i.scrollbarYTop = o.toInt(t.scrollTop * (i.railYHeight - i.scrollbarYHeight) / (i.contentHeight - i.containerHeight))) : i.scrollbarYActive = !1, i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth && (i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth), i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight && (i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight),
				function(t, e) {
					var i = {
						width: e.railXWidth
					};
					e.isRtl ? i.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : i.left = t.scrollLeft, e.isScrollbarXUsingBottom ? i.bottom = e.scrollbarXBottom - t.scrollTop : i.top = e.scrollbarXTop + t.scrollTop, r.css(e.scrollbarXRail, i);
					var n = {
						top: t.scrollTop,
						height: e.railYHeight
					};
					e.isScrollbarYUsingRight ? e.isRtl ? n.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : n.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : n.left = e.scrollbarYLeft + t.scrollLeft, r.css(e.scrollbarYRail, n), r.css(e.scrollbarX, {
						left: e.scrollbarXLeft,
						width: e.scrollbarXWidth - e.railBorderXWidth
					}), r.css(e.scrollbarY, {
						top: e.scrollbarYTop,
						height: e.scrollbarYHeight - e.railBorderYWidth
					})
				}(t, i), i.scrollbarXActive ? t.classList.add("ps--active-x") : (t.classList.remove("ps--active-x"), i.scrollbarXWidth = 0, i.scrollbarXLeft = 0, a(t, "left", 0)), i.scrollbarYActive ? t.classList.add("ps--active-y") : (t.classList.remove("ps--active-y"), i.scrollbarYHeight = 0, i.scrollbarYTop = 0, a(t, "top", 0))
		}
	}, {
		"../lib/dom": 2,
		"../lib/helper": 5,
		"./instances": 17,
		"./update-scroll": 19
	}],
	19: [function(t, e, i) {
		"use strict";

		function o(t) {
			var e = document.createEvent("Event");
			return e.initEvent(t, !0, !0), e
		}
		var r = t("./instances");
		e.exports = function(t, e, i) {
			if (void 0 === t) throw "You must provide an element to the update-scroll function";
			if (void 0 === e) throw "You must provide an axis to the update-scroll function";
			if (void 0 === i) throw "You must provide a value to the update-scroll function";
			"top" === e && i <= 0 && (t.scrollTop = i = 0, t.dispatchEvent(o("ps-y-reach-start"))), "left" === e && i <= 0 && (t.scrollLeft = i = 0, t.dispatchEvent(o("ps-x-reach-start")));
			var n = r.get(t);
			"top" === e && i >= n.contentHeight - n.containerHeight && ((i = n.contentHeight - n.containerHeight) - t.scrollTop <= 2 ? i = t.scrollTop : t.scrollTop = i, t.dispatchEvent(o("ps-y-reach-end"))), "left" === e && i >= n.contentWidth - n.containerWidth && ((i = n.contentWidth - n.containerWidth) - t.scrollLeft <= 2 ? i = t.scrollLeft : t.scrollLeft = i, t.dispatchEvent(o("ps-x-reach-end"))), void 0 === n.lastTop && (n.lastTop = t.scrollTop), void 0 === n.lastLeft && (n.lastLeft = t.scrollLeft), "top" === e && i < n.lastTop && t.dispatchEvent(o("ps-scroll-up")), "top" === e && i > n.lastTop && t.dispatchEvent(o("ps-scroll-down")), "left" === e && i < n.lastLeft && t.dispatchEvent(o("ps-scroll-left")), "left" === e && i > n.lastLeft && t.dispatchEvent(o("ps-scroll-right")), "top" === e && i !== n.lastTop && (t.scrollTop = n.lastTop = i, t.dispatchEvent(o("ps-scroll-y"))), "left" === e && i !== n.lastLeft && (t.scrollLeft = n.lastLeft = i, t.dispatchEvent(o("ps-scroll-x")))
		}
	}, {
		"./instances": 17
	}],
	20: [function(t, e, i) {
		"use strict";
		var n = t("../lib/helper"),
			o = t("../lib/dom"),
			r = t("./instances"),
			s = t("./update-geometry"),
			a = t("./update-scroll");
		e.exports = function(t) {
			var e = r.get(t);
			e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, o.css(e.scrollbarXRail, "display", "block"), o.css(e.scrollbarYRail, "display", "block"), e.railXMarginWidth = n.toInt(o.css(e.scrollbarXRail, "marginLeft")) + n.toInt(o.css(e.scrollbarXRail, "marginRight")), e.railYMarginHeight = n.toInt(o.css(e.scrollbarYRail, "marginTop")) + n.toInt(o.css(e.scrollbarYRail, "marginBottom")), o.css(e.scrollbarXRail, "display", "none"), o.css(e.scrollbarYRail, "display", "none"), s(t), a(t, "top", t.scrollTop), a(t, "left", t.scrollLeft), o.css(e.scrollbarXRail, "display", ""), o.css(e.scrollbarYRail, "display", ""))
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

	function e(n) {
		return this.each(function() {
			var t = s(this),
				e = s.extend({}, o.DEFAULTS, t.data(), "object" == typeof n && n),
				i = t.data("bs.validator");
			!i && "destroy" == n || (i || t.data("bs.validator", i = new o(this, e)), "string" == typeof n && i[n]())
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
			i = s(t.target),
			n = "focusout" !== t.type;
		this.$inputs.is(i) && this.validateInput(i, n).done(function() {
			e.toggleSubmit()
		})
	}, o.prototype.validateInput = function(e, i) {
		a(e);
		var n = e.data("bs.validator.errors");
		e.is('[type="radio"]') && (e = this.$element.find('input[name="' + e.attr("name") + '"]'));
		var o = s.Event("validate.bs.validator", {
			relatedTarget: e[0]
		});
		if (this.$element.trigger(o), !o.isDefaultPrevented()) {
			var r = this;
			return this.runValidators(e).done(function(t) {
				e.data("bs.validator.errors", t), t.length ? i ? r.defer(e, r.showErrors) : r.showErrors(e) : r.clearErrors(e), n && t.toString() === n.toString() || (o = t.length ? s.Event("invalid.bs.validator", {
					relatedTarget: e[0],
					detail: t
				}) : s.Event("valid.bs.validator", {
					relatedTarget: e[0],
					detail: n
				}), r.$element.trigger(o)), r.toggleSubmit(), r.$element.trigger(s.Event("validated.bs.validator", {
					relatedTarget: e[0]
				}))
			})
		}
	}, o.prototype.runValidators = function(n) {
		var o = [],
			e = s.Deferred();

		function r(t) {
			return i = t, n.data(i + "-error") || ((e = n[0].validity).typeMismatch ? n.data("type-error") : e.patternMismatch ? n.data("pattern-error") : e.stepMismatch ? n.data("step-error") : e.rangeOverflow ? n.data("max-error") : e.rangeUnderflow ? n.data("min-error") : e.valueMissing ? n.data("required-error") : null) || n.data("error");
			var e, i
		}
		return n.data("bs.validator.deferred") && n.data("bs.validator.deferred").reject(), n.data("bs.validator.deferred", e), s.each(this.validators, s.proxy(function(t, e) {
			var i = null;
			(a(n) || n.attr("required")) && (n.data(t) || "native" == t) && (i = e.call(this, n)) && (i = r(t) || i, ~o.indexOf(i) || o.push(i))
		}, this)), !o.length && a(n) && n.data("remote") ? this.defer(n, function() {
			var t = {};
			t[n.attr("name")] = a(n), s.get(n.data("remote"), t).fail(function(t, e, i) {
				o.push(r("remote") || i)
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
			i = t.closest(".form-group"),
			n = i.find(".help-block.with-errors"),
			o = i.find(".form-control-feedback");
		e.length && (void 0 === n.data("bs.validator.originalContent") && n.data("bs.validator.originalContent", n.html()), n.empty().append(e), i.addClass("has-error has-danger"), i.hasClass("has-feedback") && o.removeClass(this.options.feedback.success) && o.addClass(this.options.feedback.error) && i.removeClass("has-success"))
	}, o.prototype.clearErrors = function(t) {
		var e = t.closest(".form-group"),
			i = e.find(".help-block.with-errors"),
			n = e.find(".form-control-feedback");
		i.html(i.data("bs.validator.originalContent")), e.removeClass("has-error has-danger has-success"), e.hasClass("has-feedback") && n.removeClass(this.options.feedback.error) && n.removeClass(this.options.feedback.success) && a(t) && n.addClass(this.options.feedback.success) && e.addClass("has-success")
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

		function i() {
			e.removeClass("animated-section-moveToRight closed"), e.show(), p("body").addClass("ajax-page-visible")
		}
		var n = p(".ajax-page-load").each(function() {
			if (n = p(this).attr("href"), location.hash == location.hash.split("/")[0] + "/" + n.substr(0, n.length - 5)) {
				var t = p(this).attr("href");
				return i(), e.load(t), !1
			}
		});
		p(document).on("click", ".main-menu, #ajax-page-close-button", function(t) {
			t.preventDefault(), p("#page-ajax-loaded").addClass("animated-section-moveToRight closed"), p("body").removeClass("ajax-page-visible"), setTimeout(function() {
				p("#page-ajax-loaded.closed").html(""), e.hide()
			}, 500), location.hash = location.hash.split("/")[0]
		}).on("click", ".ajax-page-load", function() {
			var t = location.hash.split("/")[0] + "/" + p(this).attr("href").substr(0, p(this).attr("href").length - 5);
			return location.hash = t, i(), !1
		})
	}

	function s(t, e) {
		var i;
		t.attr("data-animation") || (i = parseInt(Math.floor(67 * Math.random()) + 1), t.data("animation", i));
		var n, o, r, s, a = t.data("animation").toString();
		if (67 < (s = -1 != a.indexOf("-") ? (r = a.split("-"), parseInt(r[Math.floor(Math.random() * r.length)])) : parseInt(a))) alert("Transition.js : Invalid 'data-animation' attribute configuration. Animation number should not be greater than 67");
		else {
			switch (s) {
				case 1:
					n = "animated-section-moveFromRight", o = "animated-section-moveToLeft";
					break;
				case 2:
					n = "animated-section-moveFromLeft", o = "animated-section-moveToRight";
					break;
				case 3:
					n = "animated-section-moveFromBottom", o = "animated-section-moveToTop";
					break;
				case 4:
					n = "animated-section-moveFromTop", o = "animated-section-moveToBottom";
					break;
				case 5:
					n = "animated-section-moveFromRight animated-section-ontop", o = "animated-section-fade";
					break;
				case 6:
					n = "animated-section-moveFromLeft animated-section-ontop", o = "animated-section-fade";
					break;
				case 7:
					n = "animated-section-moveFromBottom animated-section-ontop", o = "animated-section-fade";
					break;
				case 8:
					n = "animated-section-moveFromTop animated-section-ontop", o = "animated-section-fade";
					break;
				case 9:
					n = "animated-section-moveFromRightFade", o = "animated-section-moveToLeftFade";
					break;
				case 10:
					n = "animated-section-moveFromLeftFade", o = "animated-section-moveToRightFade";
					break;
				case 11:
					n = "animated-section-moveFromBottomFade", o = "animated-section-moveToTopFade";
					break;
				case 12:
					n = "animated-section-moveFromTopFade", o = "animated-section-moveToBottomFade";
					break;
				case 13:
					n = "animated-section-moveFromRight", o = "animated-section-moveToLeftEasing animated-section-ontop";
					break;
				case 14:
					n = "animated-section-moveFromLeft", o = "animated-section-moveToRightEasing animated-section-ontop";
					break;
				case 15:
					n = "animated-section-moveFromBottom", o = "animated-section-moveToTopEasing animated-section-ontop";
					break;
				case 16:
					n = "animated-section-moveFromTop", o = "animated-section-moveToBottomEasing animated-section-ontop";
					break;
				case 17:
					n = "animated-section-moveFromRight animated-section-ontop", o = "animated-section-scaleDown";
					break;
				case 18:
					n = "animated-section-moveFromLeft animated-section-ontop", o = "animated-section-scaleDown";
					break;
				case 19:
					n = "animated-section-moveFromBottom animated-section-ontop", o = "animated-section-scaleDown";
					break;
				case 20:
					n = "animated-section-moveFromTop animated-section-ontop", o = "animated-section-scaleDown";
					break;
				case 21:
					n = "animated-section-scaleUpDown animated-section-delay300", o = "animated-section-scaleDown";
					break;
				case 22:
					n = "animated-section-scaleUp animated-section-delay300", o = "animated-section-scaleDownUp";
					break;
				case 23:
					n = "animated-section-scaleUp", o = "animated-section-moveToLeft animated-section-ontop";
					break;
				case 24:
					n = "animated-section-scaleUp", o = "animated-section-moveToRight animated-section-ontop";
					break;
				case 25:
					n = "animated-section-scaleUp", o = "animated-section-moveToTop animated-section-ontop";
					break;
				case 26:
					n = "animated-section-scaleUp", o = "animated-section-moveToBottom animated-section-ontop";
					break;
				case 27:
					n = "animated-section-scaleUpCenter animated-section-delay400", o = "animated-section-scaleDownCenter";
					break;
				case 28:
					n = "animated-section-moveFromRight animated-section-delay200 animated-section-ontop", o = "animated-section-rotateRightSideFirst";
					break;
				case 29:
					n = "animated-section-moveFromLeft animated-section-delay200 animated-section-ontop", o = "animated-section-rotateLeftSideFirst";
					break;
				case 30:
					n = "animated-section-moveFromTop animated-section-delay200 animated-section-ontop", o = "animated-section-rotateTopSideFirst";
					break;
				case 31:
					n = "animated-section-moveFromBottom animated-section-delay200 animated-section-ontop", o = "animated-section-rotateBottomSideFirst";
					break;
				case 32:
					n = "animated-section-flipInLeft animated-section-delay500", o = "animated-section-flipOutRight";
					break;
				case 33:
					n = "animated-section-flipInRight animated-section-delay500", o = "animated-section-flipOutLeft";
					break;
				case 34:
					n = "animated-section-flipInBottom animated-section-delay500", o = "animated-section-flipOutTop";
					break;
				case 35:
					n = "animated-section-flipInTop animated-section-delay500", o = "animated-section-flipOutBottom";
					break;
				case 36:
					n = "animated-section-scaleUp", o = "animated-section-rotateFall animated-section-ontop";
					break;
				case 37:
					n = "animated-section-rotateInNewspaper animated-section-delay500", o = "animated-section-rotateOutNewspaper";
					break;
				case 38:
					n = "animated-section-moveFromRight", o = "animated-section-rotatePushLeft";
					break;
				case 39:
					n = "animated-section-moveFromLeft", o = "animated-section-rotatePushRight";
					break;
				case 40:
					n = "animated-section-moveFromBottom", o = "animated-section-rotatePushTop";
					break;
				case 41:
					n = "animated-section-moveFromTop", o = "animated-section-rotatePushBottom";
					break;
				case 42:
					n = "animated-section-rotatePullRight animated-section-delay180", o = "animated-section-rotatePushLeft";
					break;
				case 43:
					n = "animated-section-rotatePullLeft animated-section-delay180", o = "animated-section-rotatePushRight";
					break;
				case 44:
					n = "animated-section-rotatePullBottom animated-section-delay180", o = "animated-section-rotatePushTop";
					break;
				case 45:
					n = "animated-section-rotatePullTop animated-section-delay180", o = "animated-section-rotatePushBottom";
					break;
				case 46:
					n = "animated-section-moveFromRightFade", o = "animated-section-rotateFoldLeft";
					break;
				case 47:
					n = "animated-section-moveFromLeftFade", o = "animated-section-rotateFoldRight";
					break;
				case 48:
					n = "animated-section-moveFromBottomFade", o = "animated-section-rotateFoldTop";
					break;
				case 49:
					n = "animated-section-moveFromTopFade", o = "animated-section-rotateFoldBottom";
					break;
				case 50:
					n = "animated-section-rotateUnfoldLeft", o = "animated-section-moveToRightFade";
					break;
				case 51:
					n = "animated-section-rotateUnfoldRight", o = "animated-section-moveToLeftFade";
					break;
				case 52:
					n = "animated-section-rotateUnfoldTop", o = "animated-section-moveToBottomFade";
					break;
				case 53:
					n = "animated-section-rotateUnfoldBottom", o = "animated-section-moveToTopFade";
					break;
				case 54:
					n = "animated-section-rotateRoomLeftIn", o = "animated-section-rotateRoomLeftOut animated-section-ontop";
					break;
				case 55:
					n = "animated-section-rotateRoomRightIn", o = "animated-section-rotateRoomRightOut animated-section-ontop";
					break;
				case 56:
					n = "animated-section-rotateRoomTopIn", o = "animated-section-rotateRoomTopOut animated-section-ontop";
					break;
				case 57:
					n = "animated-section-rotateRoomBottomIn", o = "animated-section-rotateRoomBottomOut animated-section-ontop";
					break;
				case 58:
					n = "animated-section-rotateCubeLeftIn", o = "animated-section-rotateCubeLeftOut animated-section-ontop";
					break;
				case 59:
					n = "animated-section-rotateCubeRightIn", o = "animated-section-rotateCubeRightOut animated-section-ontop";
					break;
				case 60:
					n = "animated-section-rotateCubeTopIn", o = "animated-section-rotateCubeTopOut animated-section-ontop";
					break;
				case 61:
					n = "animated-section-rotateCubeBottomIn", o = "animated-section-rotateCubeBottomOut animated-section-ontop";
					break;
				case 62:
					n = "animated-section-rotateCarouselLeftIn", o = "animated-section-rotateCarouselLeftOut animated-section-ontop";
					break;
				case 63:
					n = "animated-section-rotateCarouselRightIn", o = "animated-section-rotateCarouselRightOut animated-section-ontop";
					break;
				case 64:
					n = "animated-section-rotateCarouselTopIn", o = "animated-section-rotateCarouselTopOut animated-section-ontop";
					break;
				case 65:
					n = "animated-section-rotateCarouselBottomIn", o = "animated-section-rotateCarouselBottomOut animated-section-ontop";
					break;
				case 66:
					n = "animated-section-rotateSidesIn animated-section-delay200", o = "animated-section-rotateSidesOut";
					break;
				case 67:
					n = "animated-section-rotateSlideIn", o = "animated-section-rotateSlideOut"
			}
			var l, c = f,
				u = c.data("current"),
				e = t.attr("href").split("#")[1],
				d = u,
				h = p('section[data-id="' + u + '"]');
			d != (u = e) ? (m = !0, c.data("current", u), (l = p("section[data-id=" + u + "]").addClass("section-active")).scrollTop(0), h.addClass(o).on(y, function() {
				h.off(y), g = !0, v && (w(0, l, h), g = !1)
			}), l.addClass(n).on(y, function() {
				l.off(y), v = !0, g && (w(0, l, h), m = v = !1)
			})) : m = !1, b || w(0, l)
		}
	}

	function w(t, e, i) {
		var n, o;
		n = e, (o = i).attr("class", o.data("originalClassList")), n.attr("class", n.data("originalClassList") + " section-active")
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
					var e = p(i + ' a[href*="' + location.hash.split("/")[0] + '"]');
					o(e), s(e), r()
				}
			};
			var i = t.menu,
				e = "" === location.hash ? location.hash = p("section.animated-section").first().attr("data-id") : location.hash;
			location.hash = e;
			var n = p(i + ' a[href*="' + location.hash.split("/")[0] + '"]');
			o(n), s(n), p("body").append('<div id="page-ajax-loaded" class="page-ajax-loaded animated animated-section-moveFromLeft"></div>'), r(), p(".lmpixels-arrow-right").click(function() {
				var t = p(".main-menu a.active").parent("li");
				t.next("li").children("a").click(), t.is(":last-child") && p(".main-menu li:first-child").children("a").click()
			}), p(".lmpixels-arrow-left").click(function() {
				var t = p(".main-menu a.active").parent("li");
				t.prev("li").children("a").click(), t.is(":first-child") && p(".main-menu li:last-child").children("a").click()
			})
		}
	}
}(jQuery);
! function(t, e) {
	"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
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
			var n = 0,
				o = i[n];
			e = e || [];
			for (var r = this._onceEvents && this._onceEvents[t]; o;) {
				var s = r && r[o];
				s && (this.off(t, o), delete r[o]), o.apply(this, e), o = i[n += s ? 0 : 1]
			}
			return this
		}
	}, t
}),
function(e, i) {
	"use strict";
	"function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(t) {
		return i(e, t)
	}) : "object" == typeof module && module.exports ? module.exports = i(e, require("ev-emitter")) : e.imagesLoaded = i(e, e.EvEmitter)
}(window, function(e, t) {
	function n(t, e) {
		for (var i in e) t[i] = e[i];
		return t
	}

	function o(t, e, i) {
		return this instanceof o ? ("string" == typeof t && (t = document.querySelectorAll(t)), this.elements = function(t) {
			var e = [];
			if (Array.isArray(t)) e = t;
			else if ("number" == typeof t.length)
				for (var i = 0; i < t.length; i++) e.push(t[i]);
			else e.push(t);
			return e
		}(t), this.options = n({}, this.options), "function" == typeof e ? i = e : n(this.options, e), i && this.on("always", i), this.getImages(), s && (this.jqDeferred = new s.Deferred), void setTimeout(function() {
			this.check()
		}.bind(this))) : new o(t, e, i)
	}

	function i(t) {
		this.img = t
	}

	function r(t, e) {
		this.url = t, this.element = e, this.img = new Image
	}
	var s = e.jQuery,
		a = e.console;
	(o.prototype = Object.create(t.prototype)).options = {}, o.prototype.getImages = function() {
		this.images = [], this.elements.forEach(this.addElementImages, this)
	}, o.prototype.addElementImages = function(t) {
		"IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
		var e = t.nodeType;
		if (e && l[e]) {
			for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
				var o = i[n];
				this.addImage(o)
			}
			if ("string" == typeof this.options.background)
				for (var r = t.querySelectorAll(this.options.background), n = 0; n < r.length; n++) {
					var s = r[n];
					this.addElementBackgroundImages(s)
				}
		}
	};
	var l = {
		1: !0,
		9: !0,
		11: !0
	};
	return o.prototype.addElementBackgroundImages = function(t) {
		var e = getComputedStyle(t);
		if (e)
			for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
				var o = n && n[2];
				o && this.addBackground(o, t), n = i.exec(e.backgroundImage)
			}
	}, o.prototype.addImage = function(t) {
		var e = new i(t);
		this.images.push(e)
	}, o.prototype.addBackground = function(t, e) {
		var i = new r(t, e);
		this.images.push(i)
	}, o.prototype.check = function() {
		function e(t, e, i) {
			setTimeout(function() {
				n.progress(t, e, i)
			})
		}
		var n = this;
		return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(t) {
			t.once("progress", e), t.check()
		}) : void this.complete()
	}, o.prototype.progress = function(t, e, i) {
		this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, t, e)
	}, o.prototype.complete = function() {
		var t, e = this.hasAnyBroken ? "fail" : "done";
		this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred && (t = this.hasAnyBroken ? "reject" : "resolve", this.jqDeferred[t](this))
	}, (i.prototype = Object.create(t.prototype)).check = function() {
		return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
	}, i.prototype.getIsImageComplete = function() {
		return this.img.complete && void 0 !== this.img.naturalWidth
	}, i.prototype.confirm = function(t, e) {
		this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
	}, i.prototype.handleEvent = function(t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, i.prototype.onload = function() {
		this.confirm(!0, "onload"), this.unbindEvents()
	}, i.prototype.onerror = function() {
		this.confirm(!1, "onerror"), this.unbindEvents()
	}, i.prototype.unbindEvents = function() {
		this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
	}, (r.prototype = Object.create(i.prototype)).check = function() {
		this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
	}, r.prototype.unbindEvents = function() {
		this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
	}, r.prototype.confirm = function(t, e) {
		this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
	}, (o.makeJQueryPlugin = function(t) {
		(t = t || e.jQuery) && ((s = t).fn.imagesLoaded = function(t, e) {
			return new o(this, t, e).jqDeferred.promise(s(this))
		})
	})(), o
}),
function(l) {
	"use strict";

	function e() {
		var t = l(window).width(),
			e = l("#site_header");
		t < 1025 ? (e.addClass("mobile-menu-hide"), l(".menu-toggle").removeClass("open"), setTimeout(function() {
			e.addClass("animate")
		}, 500)) : e.removeClass("animate")
	}

	function i() {
		1024 < l(window).width() ? l(".animated-section, .single-page-content").each(function() {
			l(this).perfectScrollbar()
		}) : l(".animated-section, .single-page-content").each(function() {
			l(this).perfectScrollbar("destroy")
		})
	}
	l(function() {
		l("#contact_form").validator(), l("#contact_form").on("submit", function(t) {
			if (!t.isDefaultPrevented()) return l.ajax({
				type: "POST",
				url: "contact_form/contact_form.php",
				data: l(this).serialize(),
				success: function(t) {
					var e = "alert-" + t.type,
						i = t.message,
						n = '<div class="alert ' + e + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + i + "</div>";
					e && i && (l("#contact_form").find(".messages").html(n), l("#contact_form")[0].reset())
				}
			}), !1
		})
	}), l(window).on("load", function() {
		l(".preloader").fadeOut(800, "linear"), l(".animated-sections")[0] && PageTransitions.init({
			menu: "ul.main-menu"
		})
	}).on("resize", function() {
		e(), l(".animated-section").each(function() {
			l(this).perfectScrollbar("update")
		}), i()
	}), l(document).on("ready", function() {
		var s = 23 / l(document).height(),
			a = 23 / l(document).width();
		l("body").on("mousemove", function(t) {
			var e = t.pageX - l(document).width() / 2,
				i = t.pageY - l(document).height() / 2,
				n = a * e * -1,
				o = s * i * -1,
				r = l(".lm-animated-bg");
			r.addClass("transition"), r.css({
				"background-position": "calc( 50% + " + n + "px ) calc( 50% + " + o + "px )"
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
			var e = l(".portfolio-grid"),
				t = l(".portfolio-filters");
			e && (e.shuffle({
				speed: 450,
				itemSelector: "figure"
			}), t.on("click", ".filter", function(t) {
				e.shuffle("update"), t.preventDefault(), l(".portfolio-filters .filter").parent().removeClass("active"), l(this).parent().addClass("active"), e.shuffle("shuffle", l(this).attr("data-group"))
			}))
		});
		var t = l(".blog-masonry");
		t.imagesLoaded(function() {
			t.masonry()
		}), i(), l(".text-rotation").owlCarousel({
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
				markupParse: function(t, e, i) {
					e.title = i.el.attr("title")
				}
			}
		})
	})
}(jQuery),
function(e, i) {
	"function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(t) {
		return i(e, t)
	}) : "object" == typeof module && module.exports ? module.exports = i(e, require("jquery")) : e.jQueryBridget = i(e, e.jQuery)
}(window, function(t, e) {
	"use strict";

	function i(c, o, u) {
		(u = u || e || t.jQuery) && (o.prototype.option || (o.prototype.option = function(t) {
			u.isPlainObject(t) && (this.options = u.extend(!0, this.options, t))
		}), u.fn[c] = function(t) {
			if ("string" != typeof t) return n = t, this.each(function(t, e) {
				var i = u.data(e, c);
				i ? (i.option(n), i._init()) : (i = new o(e, n), u.data(e, c, i))
			}), this;
			var e, r, s, n, a = d.call(arguments, 1),
				l = "$()." + c + '("' + (r = t) + '")';
			return (e = this).each(function(t, e) {
				var i, n, o = u.data(e, c);
				o ? (i = o[r]) && "_" != r.charAt(0) ? (n = i.apply(o, a), s = void 0 === s ? n : s) : h(l + " is not a valid method") : h(c + " not initialized. Cannot call methods, i.e. " + l)
			}), void 0 !== s ? s : e
		}, n(u))
	}

	function n(t) {
		!t || t && t.bridget || (t.bridget = i)
	}
	var d = Array.prototype.slice,
		o = t.console,
		h = void 0 === o ? function() {} : function(t) {
			o.error(t)
		};
	return n(e || t.jQuery), i
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
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
			var n = 0,
				o = i[n];
			e = e || [];
			for (var r = this._onceEvents && this._onceEvents[t]; o;) {
				var s = r && r[o];
				s && (this.off(t, o), delete r[o]), o.apply(this, e), o = i[n += s ? 0 : 1]
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
		return e || i("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e
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
					}, e = 0; e < E; e++) t[T[e]] = 0;
				return t
			}();
			var i = {};
			i.width = t.offsetWidth, i.height = t.offsetHeight;
			for (var n = i.isBorderBox = "border-box" == e.boxSizing, o = 0; o < E; o++) {
				var r = T[o],
					s = e[r],
					a = parseFloat(s);
				i[r] = isNaN(a) ? 0 : a
			}
			var l = i.paddingLeft + i.paddingRight,
				c = i.paddingTop + i.paddingBottom,
				u = i.marginLeft + i.marginRight,
				d = i.marginTop + i.marginBottom,
				h = i.borderLeftWidth + i.borderRightWidth,
				p = i.borderTopWidth + i.borderBottomWidth,
				f = n && C,
				m = w(e.width);
			!1 !== m && (i.width = m + (f ? 0 : l + h));
			var g = w(e.height);
			return !1 !== g && (i.height = g + (f ? 0 : c + p)), i.innerWidth = i.width - (l + h), i.innerHeight = i.height - (c + p), i.outerWidth = i.width + u, i.outerHeight = i.height + d, i
		}
		var v, y, b
	}
	var C, i = "undefined" == typeof console ? function() {} : function(t) {
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
	var i = function() {
		var t = Element.prototype;
		if (t.matches) return "matches";
		if (t.matchesSelector) return "matchesSelector";
		for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
			var n = e[i] + "MatchesSelector";
			if (t[n]) return n
		}
	}();
	return function(t, e) {
		return t[i](e)
	}
}),
function(e, i) {
	"function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(t) {
		return i(e, t)
	}) : "object" == typeof module && module.exports ? module.exports = i(e, require("desandro-matches-selector")) : e.fizzyUIUtils = i(e, e.matchesSelector)
}(window, function(c, r) {
	var u = {
			extend: function(t, e) {
				for (var i in e) t[i] = e[i];
				return t
			},
			modulo: function(t, e) {
				return (t % e + e) % e
			},
			makeArray: function(t) {
				var e = [];
				if (Array.isArray(t)) e = t;
				else if (t && "number" == typeof t.length)
					for (var i = 0; i < t.length; i++) e.push(t[i]);
				else e.push(t);
				return e
			},
			removeFrom: function(t, e) {
				var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
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
			filterFindElements: function(t, n) {
				t = u.makeArray(t);
				var o = [];
				return t.forEach(function(t) {
					if (t instanceof HTMLElement) {
						if (!n) return void o.push(t);
						r(t, n) && o.push(t);
						for (var e = t.querySelectorAll(n), i = 0; i < e.length; i++) o.push(e[i])
					}
				}), o
			},
			debounceMethod: function(t, e, n) {
				var o = t.prototype[e],
					r = e + "Timeout";
				t.prototype[e] = function() {
					var t = this[r];
					t && clearTimeout(t);
					var e = arguments,
						i = this;
					this[r] = setTimeout(function() {
						o.apply(i, e), delete i[r]
					}, n || 100)
				}
			},
			docReady: function(t) {
				var e = document.readyState;
				"complete" == e || "interactive" == e ? t() : document.addEventListener("DOMContentLoaded", t)
			},
			toDashed: function(t) {
				return t.replace(/(.)([A-Z])/g, function(t, e, i) {
					return e + "-" + i
				}).toLowerCase()
			}
		},
		d = c.console;
	return u.htmlInit = function(a, l) {
		u.docReady(function() {
			var t = u.toDashed(l),
				o = "data-" + t,
				e = document.querySelectorAll("[" + o + "]"),
				i = document.querySelectorAll(".js-" + t),
				n = u.makeArray(e).concat(u.makeArray(i)),
				r = o + "-options",
				s = c.jQuery;
			n.forEach(function(t) {
				var e, i = t.getAttribute(o) || t.getAttribute(r);
				try {
					e = i && JSON.parse(i)
				} catch (e) {
					return void(d && d.error("Error parsing " + o + " on " + t.className + ": " + e))
				}
				var n = new a(t, e);
				s && s.data(t, l, n)
			})
		})
	}, u
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
	"use strict";

	function i(t, e) {
		t && (this.element = t, this.layout = e, this.position = {
			x: 0,
			y: 0
		}, this._create())
	}
	var n = document.documentElement.style,
		o = "string" == typeof n.transition ? "transition" : "WebkitTransition",
		r = "string" == typeof n.transform ? "transform" : "WebkitTransform",
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
		l = i.prototype = Object.create(t.prototype);
	l.constructor = i, l._create = function() {
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
		for (var i in t) e[a[i] || i] = t[i]
	}, l.getPosition = function() {
		var t = getComputedStyle(this.element),
			e = this.layout._getOption("originLeft"),
			i = this.layout._getOption("originTop"),
			n = t[e ? "left" : "right"],
			o = t[i ? "top" : "bottom"],
			r = this.layout.size,
			s = -1 != n.indexOf("%") ? parseFloat(n) / 100 * r.width : parseInt(n, 10),
			a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * r.height : parseInt(o, 10),
			s = isNaN(s) ? 0 : s,
			a = isNaN(a) ? 0 : a;
		s -= e ? r.paddingLeft : r.paddingRight, a -= i ? r.paddingTop : r.paddingBottom, this.position.x = s, this.position.y = a
	}, l.layoutPosition = function() {
		var t = this.layout.size,
			e = {},
			i = this.layout._getOption("originLeft"),
			n = this.layout._getOption("originTop"),
			o = i ? "paddingLeft" : "paddingRight",
			r = i ? "left" : "right",
			s = i ? "right" : "left",
			a = this.position.x + t[o];
		e[r] = this.getXValue(a), e[s] = "";
		var l = n ? "paddingTop" : "paddingBottom",
			c = n ? "top" : "bottom",
			u = n ? "bottom" : "top",
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
		var i, n, o, r = this.position.x,
			s = this.position.y,
			a = parseInt(t, 10),
			l = parseInt(e, 10),
			c = a === this.position.x && l === this.position.y;
		this.setPosition(t, e), !c || this.isTransitioning ? (i = t - r, n = e - s, (o = {}).transform = this.getTranslate(i, n), this.transition({
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
			for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
			for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
			t.from && (this.css(t.from), this.element.offsetHeight), this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
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
		var e, i;
		t.target === this.element && (e = this._transn, i = u[t.propertyName] || t.propertyName, delete e.ingProperties[i], function(t) {
			for (var e in t) return;
			return 1
		}(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd && (e.onEnd[i].call(this), delete e.onEnd[i]), this.emitEvent("transitionEnd", [this]))
	}, l.disableTransition = function() {
		this.removeTransitionStyles(), this.element.removeEventListener(s, this, !1), this.isTransitioning = !1
	}, l._removeStyles = function(t) {
		var e = {};
		for (var i in t) e[i] = "";
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
		for (var i in e) return i
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
	}, i
}),
function(o, r) {
	"use strict";
	"function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(t, e, i, n) {
		return r(o, t, e, i, n)
	}) : "object" == typeof module && module.exports ? module.exports = r(o, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : o.Outlayer = r(o, o.EvEmitter, o.getSize, o.fizzyUIUtils, o.Outlayer.Item)
}(window, function(t, e, o, r, n) {
	"use strict";

	function s(t, e) {
		var i, n = r.getQueryElement(t);
		n ? (this.element = n, c && (this.$element = c(this.element)), this.options = r.extend({}, this.constructor.defaults), this.option(e), i = ++u, this.element.outlayerGUID = i, (d[i] = this)._create(), this._getOption("initLayout") && this.layout()) : l && l.error("Bad element for " + this.constructor.namespace + ": " + (n || t))
	}

	function a(t) {
		function e() {
			t.apply(this, arguments)
		}
		return (e.prototype = Object.create(t.prototype)).constructor = e
	}

	function i() {}
	var l = t.console,
		c = t.jQuery,
		u = 0,
		d = {};
	s.namespace = "outlayer", s.Item = n, s.defaults = {
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
		for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
			var r = new i(e[o], this);
			n.push(r)
		}
		return n
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
		var i, n = this.options[t];
		n ? ("string" == typeof n ? i = this.element.querySelector(n) : n instanceof HTMLElement && (i = n), this[t] = i ? o(i)[e] : n) : this[t] = 0
	}, h.layoutItems = function(t, e) {
		t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
	}, h._getItemsForLayout = function(t) {
		return t.filter(function(t) {
			return !t.isIgnored
		})
	}, h._layoutItems = function(t, i) {
		var n;
		this._emitCompleteOnItems("layout", t), t && t.length && (n = [], t.forEach(function(t) {
			var e = this._getItemLayoutPosition(t);
			e.item = t, e.isInstant = i || t.isLayoutInstant, n.push(e)
		}, this), this._processLayoutQueue(n))
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
		var n = this.options.stagger;
		return null == n ? void(this.stagger = 0) : (this.stagger = function() {
			if ("number" == typeof n) return n;
			var t = n.match(/(^\d*\.?\d*)(\w*)/),
				e = t && t[1],
				i = t && t[2];
			return e.length ? (e = parseFloat(e)) * (p[i] || 1) : 0
		}(), this.stagger)
	}, h._positionItem = function(t, e, i, n, o) {
		n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
	}, h._postLayout = function() {
		this.resizeContainer()
	}, h.resizeContainer = function() {
		var t;
		!this._getOption("resizeContainer") || (t = this._getContainerSize()) && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
	}, h._getContainerSize = i, h._setContainerMeasure = function(t, e) {
		var i;
		void 0 !== t && ((i = this.size).isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px")
	}, h._emitCompleteOnItems = function(e, t) {
		function i() {
			r.dispatchEvent(e + "Complete", null, [t])
		}

		function n() {
			++o == s && i()
		}
		var o, r = this,
			s = t.length;
		t && s ? (o = 0, t.forEach(function(t) {
			t.once(e, n)
		})) : i()
	}, h.dispatchEvent = function(t, e, i) {
		var n, o = e ? [e].concat(i) : i;
		this.emitEvent(t, o), c && (this.$element = this.$element || c(this.element), e ? ((n = c.Event(e)).type = t, this.$element.trigger(n, i)) : this.$element.trigger(t, i))
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
	}, h._manageStamp = i, h._getElementOffset = function(t) {
		var e = t.getBoundingClientRect(),
			i = this._boundingRect,
			n = o(t);
		return {
			left: e.left - i.left - n.marginLeft,
			top: e.top - i.top - n.marginTop,
			right: i.right - e.right - n.marginRight,
			bottom: i.bottom - e.bottom - n.marginBottom
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
		var e, i = this._itemize(t);
		i.length && (e = this.items.slice(0), this.items = i.concat(e), this._resetLayout(), this._manageStamps(), this.layoutItems(i, !0), this.reveal(i), this.layoutItems(e))
	}, h.reveal = function(t) {
		var i;
		this._emitCompleteOnItems("reveal", t), t && t.length && (i = this.updateStagger(), t.forEach(function(t, e) {
			t.stagger(e * i), t.reveal()
		}))
	}, h.hide = function(t) {
		var i;
		this._emitCompleteOnItems("hide", t), t && t.length && (i = this.updateStagger(), t.forEach(function(t, e) {
			t.stagger(e * i), t.hide()
		}))
	}, h.revealItemElements = function(t) {
		var e = this.getItems(t);
		this.reveal(e)
	}, h.hideItemElements = function(t) {
		var e = this.getItems(t);
		this.hide(e)
	}, h.getItem = function(t) {
		for (var e = 0; e < this.items.length; e++) {
			var i = this.items[e];
			if (i.element == t) return i
		}
	}, h.getItems = function(t) {
		t = r.makeArray(t);
		var i = [];
		return t.forEach(function(t) {
			var e = this.getItem(t);
			e && i.push(e)
		}, this), i
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
		var i = a(s);
		return i.defaults = r.extend({}, s.defaults), r.extend(i.defaults, e), i.compatOptions = r.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = a(n), r.htmlInit(i, t), c && c.bridget && c.bridget(t, i), i
	};
	var p = {
		ms: 1,
		s: 1e3
	};
	return s.Item = n, s
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
		var i = this.columnWidth += this.gutter,
			n = this.containerWidth + this.gutter,
			o = n / i,
			r = i - n % i,
			o = Math[r && r < 1 ? "round" : "floor"](o);
		this.cols = Math.max(o, 1)
	}, e.prototype.getContainerWidth = function() {
		var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
			e = c(t);
		this.containerWidth = e && e.innerWidth
	}, e.prototype._getItemLayoutPosition = function(t) {
		t.getSize();
		for (var e = t.size.outerWidth % this.columnWidth, i = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth), i = Math.min(i, this.cols), n = this._getColGroup(i), o = Math.min.apply(Math, n), r = n.indexOf(o), s = {
				x: this.columnWidth * r,
				y: o
			}, a = o + t.size.outerHeight, l = this.cols + 1 - n.length, c = 0; c < l; c++) this.colYs[r + c] = a;
		return s
	}, e.prototype._getColGroup = function(t) {
		if (t < 2) return this.colYs;
		for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++) {
			var o = this.colYs.slice(n, n + t);
			e[n] = Math.max.apply(Math, o)
		}
		return e
	}, e.prototype._manageStamp = function(t) {
		var e = c(t),
			i = this._getElementOffset(t),
			n = this._getOption("originLeft") ? i.left : i.right,
			o = n + e.outerWidth,
			r = Math.floor(n / this.columnWidth),
			r = Math.max(0, r),
			s = Math.floor(o / this.columnWidth);
		s -= o % this.columnWidth ? 0 : 1, s = Math.min(this.cols - 1, s);
		for (var a = (this._getOption("originTop") ? i.top : i.bottom) + e.outerHeight, l = r; l <= s; l++) this.colYs[l] = Math.max(a, this.colYs[l])
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
		function s(t, e) {
			return typeof t === e
		}

		function a(t, e) {
			for (var i in t) {
				var n = t[i];
				if (!~("" + n).indexOf("-") && c[n] !== r) return "pfx" != e || n
			}
			return !1
		}

		function n(t, e, i) {
			var n = t.charAt(0).toUpperCase() + t.slice(1),
				o = (t + " " + f.join(n + " ") + n).split(" ");
			return s(e, "string") || void 0 === e ? a(o, e) : function(t, e, i) {
				for (var n in t) {
					var o = e[t[n]];
					if (o !== r) return !1 === i ? t[n] : s(o, "function") ? o.bind(i || e) : o
				}
				return !1
			}(o = (t + " " + m.join(n + " ") + n).split(" "), e, i)
		}

		function o(t, e, i, n) {
			var o, r, s, a, l = d.createElement("div"),
				c = d.body,
				u = c || d.createElement("body");
			if (parseInt(i, 10))
				for (; i--;)(s = d.createElement("div")).id = n ? n[i] : p + (i + 1), l.appendChild(s);
			return o = ["&#173;", '<style id="s', p, '">', t, "</style>"].join(""), l.id = p, (c ? l : u).innerHTML += o, u.appendChild(l), c || (u.style.background = "", u.style.overflow = "hidden", a = h.style.overflow, h.style.overflow = "hidden", h.appendChild(u)), r = e(l, t), c ? l.parentNode.removeChild(l) : (u.parentNode.removeChild(u), h.style.overflow = a), !!r
		}
		var e, l = {},
			h = d.documentElement,
			p = "modernizr",
			c = d.createElement(p).style,
			i = " -webkit- -moz- -o- -ms- ".split(" "),
			u = "Webkit Moz O ms",
			f = u.split(" "),
			m = u.toLowerCase().split(" "),
			g = {},
			v = [],
			y = v.slice,
			b = {}.hasOwnProperty,
			w = void 0 !== b && void 0 !== b.call ? function(t, e) {
				return b.call(t, e)
			} : function(t, e) {
				return e in t && void 0 === t.constructor.prototype[e]
			};
		for (var x in Function.prototype.bind || (Function.prototype.bind = function(n) {
				var o = this;
				if ("function" != typeof o) throw new TypeError;
				var r = y.call(arguments, 1),
					s = function() {
						if (this instanceof s) {
							function t() {}
							t.prototype = o.prototype;
							var e = new t,
								i = o.apply(e, r.concat(y.call(arguments)));
							return Object(i) === i ? i : e
						}
						return o.apply(n, r.concat(y.call(arguments)))
					};
				return s
			}), g.touch = function() {
				var e;
				return "ontouchstart" in t || t.DocumentTouch && d instanceof DocumentTouch ? e = !0 : o(["@media (", i.join("touch-enabled),("), p, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(t) {
					e = 9 === t.offsetTop
				}), e
			}, g.cssanimations = function() {
				return n("animationName")
			}, g.csstransforms = function() {
				return !!n("transform")
			}, g.csstransforms3d = function() {
				var i = !!n("perspective");
				return i && "webkitPerspective" in h.style && o("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t, e) {
					i = 9 === t.offsetLeft && 3 === t.offsetHeight
				}), i
			}, g.csstransitions = function() {
				return n("transition")
			}, g) w(g, x) && (e = x.toLowerCase(), l[e] = g[x](), v.push((l[e] ? "" : "no-") + e));
		return l.addTest = function(t, e) {
				if ("object" == typeof t)
					for (var i in t) w(t, i) && l.addTest(i, t[i]);
				else {
					if (t = t.toLowerCase(), l[t] !== r) return l;
					e = "function" == typeof e ? e() : e, h.className += " " + (e ? "" : "no-") + t, l[t] = e
				}
				return l
			}, c.cssText = "",
			function(t, a) {
				function l() {
					var t = f.elements;
					return "string" == typeof t ? t.split(" ") : t
				}

				function c(t) {
					var e = p[t[n]];
					return e || (e = {}, s++, t[n] = s, p[s] = e), e
				}

				function u(t, e, i) {
					return e = e || a, h ? e.createElement(t) : !(n = (i = i || c(e)).cache[t] ? i.cache[t].cloneNode() : r.test(t) ? (i.cache[t] = i.createElem(t)).cloneNode() : i.createElem(t)).canHaveChildren || o.test(t) || n.tagUrn ? n : i.frag.appendChild(n);
					var n
				}

				function e(t) {
					var e, i, n, o, r, s = c(t = t || a);
					return !f.shivCSS || d || s.hasCSS || (s.hasCSS = (o = (n = t).createElement("p"), r = n.getElementsByTagName("head")[0] || n.documentElement, o.innerHTML = "x<style>article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}</style>", !!r.insertBefore(o.lastChild, r.firstChild))), h || (e = t, (i = s).cache || (i.cache = {}, i.createElem = e.createElement, i.createFrag = e.createDocumentFragment, i.frag = i.createFrag()), e.createElement = function(t) {
						return f.shivMethods ? u(t, e, i) : i.createElem(t)
					}, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/[\w\-]+/g, function(t) {
						return i.createElem(t), i.frag.createElement(t), 'c("' + t + '")'
					}) + ");return n}")(f, i.frag)), t
				}
				var d, h, i = t.html5 || {},
					o = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
					r = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
					n = "_html5shiv",
					s = 0,
					p = {};
				! function() {
					try {
						var t = a.createElement("a");
						t.innerHTML = "<xyz></xyz>", d = "hidden" in t, h = 1 == t.childNodes.length || function() {
							a.createElement("a");
							var t = a.createDocumentFragment();
							return void 0 === t.cloneNode || void 0 === t.createDocumentFragment || void 0 === t.createElement
						}()
					} catch (t) {
						h = d = !0
					}
				}();
				var f = {
					elements: i.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
					version: "3.7.0",
					shivCSS: !1 !== i.shivCSS,
					supportsUnknownElements: h,
					shivMethods: !1 !== i.shivMethods,
					type: "default",
					shivDocument: e,
					createElement: u,
					createDocumentFragment: function(t, e) {
						if (t = t || a, h) return t.createDocumentFragment();
						for (var i = (e = e || c(t)).frag.cloneNode(), n = 0, o = l(), r = o.length; n < r; n++) i.createElement(o[n]);
						return i
					}
				};
				t.html5 = f, e(a)
			}(this, d), l._version = "2.8.3", l._prefixes = i, l._domPrefixes = m, l._cssomPrefixes = f, l.testProp = function(t) {
				return a([t])
			}, l.testAllProps = n, l.testStyles = o, l.prefixed = function(t, e, i) {
				return e ? n(t, e, i) : n(t, "pfx")
			}, h.className = h.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (" js " + v.join(" ")), l
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

		function e(t, e, i, n, o) {
			return T = 0, e = e || "j", y(t) ? (s = "c" == e ? L : k, a = t, l = e, c = this.i++, u = i, d = n, h = (h = o) || D.errorTimeout, p = v.createElement(s), m = f = 0, g = {
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
		var i, n = v.documentElement,
			x = t.setTimeout,
			_ = v.getElementsByTagName("script")[0],
			o = {}.toString,
			C = [],
			T = 0,
			r = "MozAppearance" in n.style,
			E = r && !!v.createRange().compareNode,
			S = E ? n : _.parentNode,
			n = t.opera && "[object Opera]" == o.call(t.opera),
			n = !!v.attachEvent && !n,
			k = r ? "object" : n ? "script" : "img",
			L = n ? "script" : k,
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
				function u(t, e, i, n, o) {
					var r = function(t) {
							for (var e, i, t = t.split("!"), n = l.length, o = t.pop(), r = t.length, o = {
									url: o,
									origUrl: o,
									prefixes: t
								}, s = 0; s < r; s++) i = t[s].split("="), (e = c[i.shift()]) && (o = e(o, i));
							for (s = 0; s < n; s++) o = l[s](o);
							return o
						}(t),
						s = r.autoCallback;
					r.url.split(".").pop().split("?").shift(), r.bypass || (e = e && (d(e) ? e : e[t] || e[n] || e[t.split("/").pop().split("?")[0]]), r.instead ? r.instead(t, e, i, n, o) : (I[r.url] ? r.noexec = !0 : I[r.url] = 1, i.load(r.url, r.forceCSS || !r.forceJS && "css" == r.url.split(".").pop().split("?").shift() ? "c" : void 0, r.noexec, r.attrs, r.timeout), (d(e) || d(s)) && i.load(function() {
						a(), e && e(r.origUrl, o, n), s && s(r.origUrl, o, n), I[r.url] = 2
					})))
				}

				function e(t, e) {
					function i(i, t) {
						if (i) {
							if (y(i)) t || (a = function() {
								var t = [].slice.call(arguments);
								l.apply(this, t), c()
							}), u(i, a, e, 0, r);
							else if (Object(i) === i)
								for (o in n = function() {
										var t, e = 0;
										for (t in i) i.hasOwnProperty(t) && e++;
										return e
									}(), i) i.hasOwnProperty(o) && (t || --n || (d(a) ? a = function() {
									var t = [].slice.call(arguments);
									l.apply(this, t), c()
								} : a[o] = function(e) {
									return function() {
										var t = [].slice.call(arguments);
										e && e.apply(this, t), c()
									}
								}(l[o])), u(i[o], a, e, o, r))
						} else t || c()
					}
					var n, o, r = !!t.test,
						s = t.load || t.both,
						a = t.callback || h,
						l = a,
						c = t.complete || h;
					i(r ? t.yep : t.nope, !!s), s && i(s)
				}
				var i, n, o = this.yepnope.loader;
				if (y(t)) u(t, 0, o, 0);
				else if (s(t))
					for (i = 0; i < t.length; i++) y(n = t[i]) ? u(n, 0, o, 0) : s(n) ? D(n) : Object(n) === n && e(n, o);
				else Object(t) === t && e(t, o)
			};
		D.addPrefix = function(t, e) {
			c[t] = e
		}, D.addFilter = function(t) {
			l.push(t)
		}, D.errorTimeout = 1e4, null == v.readyState && v.addEventListener && (v.readyState = "loading", v.addEventListener("DOMContentLoaded", i = function() {
			v.removeEventListener("DOMContentLoaded", i, 0), v.readyState = "complete"
		}, 0)), t.yepnope = a(), t.yepnope.executeStack = w, t.yepnope.injectJs = function(t, e, i, n, o, r) {
			var s, a, l = v.createElement("script"),
				n = n || D.errorTimeout;
			for (a in l.src = t, i) l.setAttribute(a, i[a]);
			e = r ? w : e || h, l.onreadystatechange = l.onload = function() {
				!s && b(l.readyState) && (s = 1, e(), l.onload = l.onreadystatechange = null)
			}, x(function() {
				s || e(s = 1)
			}, n), o ? l.onload() : _.parentNode.insertBefore(l, _)
		}, t.yepnope.injectCss = function(t, e, i, n, o, r) {
			var s, n = v.createElement("link"),
				e = r ? w : e || h;
			for (s in n.href = t, n.rel = "stylesheet", n.type = "text/css", i) n.setAttribute(s, i[s]);
			o || (_.parentNode.insertBefore(n, _), x(e, 0))
		}
	}(this, document), Modernizr.load = function() {
		yepnope.apply(window, [].slice.call(arguments, 0))
	},
	function(l, i, o, r) {
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
			responsiveBaseElement: i,
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
					i = !this.settings.autoWidth,
					n = this.settings.rtl,
					o = {
						width: "auto",
						"margin-left": n ? e : "",
						"margin-right": n ? "" : e
					};
				i || this.$stage.children().css(o), t.css = o
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function(t) {
				var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
					i = null,
					n = this._items.length,
					o = !this.settings.autoWidth,
					r = [];
				for (t.items = {
						merge: !1,
						width: e
					}; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = 1 < i || t.items.merge, r[n] = o ? e * i : this._items[n].width();
				this._widths = r
			}
		}, {
			filter: ["items", "settings"],
			run: function() {
				var t = [],
					e = this._items,
					i = this.settings,
					n = Math.max(2 * i.items, 4),
					o = 2 * Math.ceil(e.length / 2),
					r = i.loop && e.length ? i.rewind ? n : Math.max(n, o) : 0,
					s = "",
					a = "";
				for (r /= 2; r--;) t.push(this.normalize(t.length / 2, !0)), s += e[t[t.length - 1]][0].outerHTML, t.push(this.normalize(e.length - 1 - (t.length - 1) / 2, !0)), a = e[t[t.length - 1]][0].outerHTML + a;
				this._clones = t, l(s).addClass("cloned").appendTo(this.$stage), l(a).addClass("cloned").prependTo(this.$stage)
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function() {
				for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, o = 0, r = []; ++i < e;) n = r[i - 1] || 0, o = this._widths[this.relative(i)] + this.settings.margin, r.push(n + o * t);
				this._coordinates = r
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function() {
				var t = this.settings.stagePadding,
					e = this._coordinates,
					i = {
						width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
						"padding-left": t || "",
						"padding-right": t || ""
					};
				this.$stage.css(i)
			}
		}, {
			filter: ["width", "items", "settings"],
			run: function(t) {
				var e = this._coordinates.length,
					i = !this.settings.autoWidth,
					n = this.$stage.children();
				if (i && t.items.merge)
					for (; e--;) t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css);
				else i && (t.css.width = t.items.width, n.css(t.css))
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
				for (var t, e, i = this.settings.rtl ? 1 : -1, n = 2 * this.settings.stagePadding, o = this.coordinates(this.current()) + n, r = o + this.width() * i, s = [], a = 0, l = this._coordinates.length; a < l; a++) t = this._coordinates[a - 1] || 0, e = Math.abs(this._coordinates[a]) + n * i, (this.op(t, "<=", o) && this.op(t, ">", r) || this.op(e, "<", o) && this.op(e, ">", r)) && s.push(a);
				this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + s.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
			}
		}], c.prototype.initialize = function() {
			var t, e, i;
			this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading") && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : r, i = this.$element.children(e).width(), t.length && i <= 0 && this.preloadAutoWidthImages(t)), this.$element.addClass(this.options.loadingClass), this.$stage = l("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
		}, c.prototype.setup = function() {
			var e = this.viewport(),
				t = this.options.responsive,
				i = -1,
				n = null;
			t ? (l.each(t, function(t) {
				t <= e && i < t && (i = Number(t))
			}), "function" == typeof(n = l.extend({}, this.options, t[i])).stagePadding && (n.stagePadding = n.stagePadding()), delete n.responsive, n.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : n = l.extend({}, this.options), this.trigger("change", {
				property: {
					name: "settings",
					value: n
				}
			}), this._breakpoint = i, this.settings = n, this.invalidate("settings"), this.trigger("changed", {
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
			for (var t = 0, e = this._pipe.length, i = l.proxy(function(t) {
					return this[t]
				}, this._invalidated), n = {}; t < e;)(this._invalidated.all || 0 < l.grep(this._pipe[t].filter, i).length) && this._pipe[t].run(n), t++;
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
			i.clearTimeout(this.resizeTimer), this.resizeTimer = i.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
		}, c.prototype.onResize = function() {
			return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
		}, c.prototype.registerEventHandlers = function() {
			l.support.transition && this.$stage.on(l.support.transition.end + ".owl.core", l.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(i, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
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
				i = null,
				n = null,
				o = this.difference(this._drag.pointer, this.pointer(t)),
				r = this.difference(this._drag.stage.start, o);
			this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, r.x = ((r.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * o.x / 5 : 0, r.x = Math.max(Math.min(r.x, e + n), i + n)), this._drag.stage.current = r, this.animate(r.x))
		}, c.prototype.onDragEnd = function(t) {
			var e = this.difference(this._drag.pointer, this.pointer(t)),
				i = this._drag.stage.current,
				n = 0 < e.x ^ this.settings.rtl ? "left" : "right";
			l(o).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== e.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(i.x, 0 !== e.x ? n : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = n, (3 < Math.abs(e.x) || 300 < (new Date).getTime() - this._drag.time) && this._drag.target.one("click.owl.core", function() {
				return !1
			})), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
		}, c.prototype.closest = function(i, n) {
			var o = -1,
				r = this.width(),
				s = this.coordinates();
			return this.settings.freeDrag || l.each(s, l.proxy(function(t, e) {
				return "left" === n && e - 30 < i && i < e + 30 ? o = t : "right" === n && e - r - 30 < i && i < e - r + 30 ? o = t + 1 : this.op(i, "<", e) && this.op(i, ">", s[t + 1] || e - r) && (o = "left" === n ? t + 1 : t), -1 === o
			}, this)), this.settings.loop || (this.op(i, ">", s[this.minimum()]) ? o = i = this.minimum() : this.op(i, "<", s[this.maximum()]) && (o = i = this.maximum())), o
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
			var i = this._items.length,
				n = e ? 0 : this._clones.length;
			return !this.isNumeric(t) || i < 1 ? t = r : (t < 0 || i + n <= t) && (t = ((t - n / 2) % i + i) % i + n / 2), t
		}, c.prototype.relative = function(t) {
			return t -= this._clones.length / 2, this.normalize(t, !0)
		}, c.prototype.maximum = function(t) {
			var e, i, n, o = this.settings,
				r = this._coordinates.length;
			if (o.loop) r = this._clones.length / 2 + this._items.length - 1;
			else if (o.autoWidth || o.merge) {
				for (e = this._items.length, i = this._items[--e].width(), n = this.$element.width(); e-- && !(n < (i += this._items[e].width() + this.settings.margin)););
				r = e + 1
			} else r = o.center ? this._items.length - 1 : this._items.length - o.items;
			return t && (r -= this._clones.length / 2), Math.max(r, 0)
		}, c.prototype.minimum = function(t) {
			return t ? 0 : this._clones.length / 2
		}, c.prototype.items = function(t) {
			return t === r ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
		}, c.prototype.mergers = function(t) {
			return t === r ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
		}, c.prototype.clones = function(i) {
			function n(t) {
				return t % 2 == 0 ? o + t / 2 : e - (t + 1) / 2
			}
			var e = this._clones.length / 2,
				o = e + this._items.length;
			return i === r ? l.map(this._clones, function(t, e) {
				return n(e)
			}) : l.map(this._clones, function(t, e) {
				return t === i ? n(e) : null
			})
		}, c.prototype.speed = function(t) {
			return t !== r && (this._speed = t), this._speed
		}, c.prototype.coordinates = function(t) {
			var e, i = 1,
				n = t - 1;
			return t === r ? l.map(this._coordinates, l.proxy(function(t, e) {
				return this.coordinates(e)
			}, this)) : (this.settings.center ? (this.settings.rtl && (i = -1, n = t + 1), e = this._coordinates[t], e += (this.width() - e + (this._coordinates[n] || 0)) / 2 * i) : e = this._coordinates[n] || 0, e = Math.ceil(e))
		}, c.prototype.duration = function(t, e, i) {
			return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
		}, c.prototype.to = function(t, e) {
			var i = this.current(),
				n = null,
				o = t - this.relative(i),
				r = (0 < o) - (o < 0),
				s = this._items.length,
				a = this.minimum(),
				l = this.maximum();
			this.settings.loop ? (!this.settings.rewind && Math.abs(o) > s / 2 && (o += -1 * r * s), (n = (((t = i + o) - a) % s + s) % s + a) !== t && n - o <= l && 0 < n - o && (i = n - o, t = n, this.reset(i))) : t = this.settings.rewind ? (t % (l += 1) + l) % l : Math.max(a, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.$element.is(":visible") && this.update()
		}, c.prototype.next = function(t) {
			t = t || !1, this.to(this.relative(this.current()) + 1, t)
		}, c.prototype.prev = function(t) {
			t = t || !1, this.to(this.relative(this.current()) - 1, t)
		}, c.prototype.onTransitionEnd = function(t) {
			if (t !== r && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
			this.leave("animating"), this.trigger("translated")
		}, c.prototype.viewport = function() {
			var t;
			return this.options.responsiveBaseElement !== i ? t = l(this.options.responsiveBaseElement).width() : i.innerWidth ? t = i.innerWidth : o.documentElement && o.documentElement.clientWidth ? t = o.documentElement.clientWidth : console.warn("Can not detect viewport width."), t
		}, c.prototype.replace = function(t) {
			this.$stage.empty(), this._items = [], t = t && (t instanceof jQuery ? t : l(t)), this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)), t.filter(function() {
				return 1 === this.nodeType
			}).each(l.proxy(function(t, e) {
				e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(+e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
			}, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
		}, c.prototype.add = function(t, e) {
			var i = this.relative(this._current);
			e = e === r ? this._items.length : this.normalize(e, !0), t = t instanceof jQuery ? t : l(t), this.trigger("add", {
				content: t,
				position: e
			}), t = this.prepare(t), 0 === this._items.length || e === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[e - 1].after(t), this._items.push(t), this._mergers.push(+t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, +t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[i] && this.reset(this._items[i].index()), this.invalidate("items"), this.trigger("added", {
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
			for (var t in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), l(o).off(".owl.core"), !1 !== this.settings.responsive && (i.clearTimeout(this.resizeTimer), this.off(i, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[t].destroy();
			this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
		}, c.prototype.op = function(t, e, i) {
			var n = this.settings.rtl;
			switch (e) {
				case "<":
					return n ? i < t : t < i;
				case ">":
					return n ? t < i : i < t;
				case ">=":
					return n ? t <= i : i <= t;
				case "<=":
					return n ? i <= t : t <= i
			}
		}, c.prototype.on = function(t, e, i, n) {
			t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
		}, c.prototype.off = function(t, e, i, n) {
			t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
		}, c.prototype.trigger = function(t, e, i, n, o) {
			var r = {
					item: {
						count: this._items.length,
						index: this.current()
					}
				},
				s = l.camelCase(l.grep(["on", t, i], function(t) {
					return t
				}).join("-").toLowerCase()),
				a = l.Event([t, "owl", i || "carousel"].join(".").toLowerCase(), l.extend({
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
		}, c.prototype.register = function(i) {
			var e;
			i.type === c.Type.Event ? (l.event.special[i.name] || (l.event.special[i.name] = {}), l.event.special[i.name].owl || (e = l.event.special[i.name]._default, l.event.special[i.name]._default = function(t) {
				return !e || !e.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && -1 < t.namespace.indexOf("owl") : e.apply(this, arguments)
			}, l.event.special[i.name].owl = !0)) : i.type === c.Type.State && (this._states.tags[i.name] ? this._states.tags[i.name] = this._states.tags[i.name].concat(i.tags) : this._states.tags[i.name] = i.tags, this._states.tags[i.name] = l.grep(this._states.tags[i.name], l.proxy(function(t, e) {
				return l.inArray(t, this._states.tags[i.name]) === e
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
			return (t = (t = t.originalEvent || t || i.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (e.x = t.pageX, e.y = t.pageY) : (e.x = t.clientX, e.y = t.clientY), e
		}, c.prototype.isNumeric = function(t) {
			return !isNaN(parseFloat(t))
		}, c.prototype.difference = function(t, e) {
			return {
				x: t.x - e.x,
				y: t.y - e.y
			}
		}, l.fn.owlCarousel = function(e) {
			var n = Array.prototype.slice.call(arguments, 1);
			return this.each(function() {
				var t = l(this),
					i = t.data("owl.carousel");
				i || (i = new c(this, "object" == typeof e && e), t.data("owl.carousel", i), l.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(t, e) {
					i.register({
						type: c.Type.Event,
						name: e
					}), i.$element.on(e + ".owl.carousel.core", l.proxy(function(t) {
						t.namespace && t.relatedTarget !== this && (this.suppress([e]), i[e].apply(this, [].slice.call(arguments, 1)), this.release([e]))
					}, i))
				})), "string" == typeof e && "_" !== e.charAt(0) && i[e].apply(i, n)
			})
		}, l.fn.owlCarousel.Constructor = c
	}(window.Zepto || window.jQuery, window, document),
	function(e, i) {
		var n = function(t) {
			this._core = t, this._interval = null, this._visible = null, this._handlers = {
				"initialized.owl.carousel": e.proxy(function(t) {
					t.namespace && this._core.settings.autoRefresh && this.watch()
				}, this)
			}, this._core.options = e.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
		};
		n.Defaults = {
			autoRefresh: !0,
			autoRefreshInterval: 500
		}, n.prototype.watch = function() {
			this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = i.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
		}, n.prototype.refresh = function() {
			this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
		}, n.prototype.destroy = function() {
			var t, e;
			for (t in i.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
			for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
		}, e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = n
	}(window.Zepto || window.jQuery, window, document),
	function(a, r) {
		var e = function(t) {
			this._core = t, this._loaded = [], this._handlers = {
				"initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(t) {
					if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type))
						for (var e = this._core.settings, i = e.center && Math.ceil(e.items / 2) || e.items, n = e.center && -1 * i || 0, o = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + n, r = this._core.clones().length, s = a.proxy(function(t, e) {
								this.load(e)
							}, this); n++ < i;) this.load(r / 2 + this._core.relative(o)), r && a.each(this._core.clones(this._core.relative(o)), s), o++
				}, this)
			}, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
		};
		e.Defaults = {
			lazyLoad: !1
		}, e.prototype.load = function(t) {
			var e = this._core.$stage.children().eq(t),
				i = e && e.find(".owl-lazy");
			!i || -1 < a.inArray(e.get(0), this._loaded) || (i.each(a.proxy(function(t, e) {
				var i, n = a(e),
					o = 1 < r.devicePixelRatio && n.attr("data-src-retina") || n.attr("data-src");
				this._core.trigger("load", {
					element: n,
					url: o
				}, "lazy"), n.is("img") ? n.one("load.owl.lazy", a.proxy(function() {
					n.css("opacity", 1), this._core.trigger("loaded", {
						element: n,
						url: o
					}, "lazy")
				}, this)).attr("src", o) : ((i = new Image).onload = a.proxy(function() {
					n.css({
						"background-image": 'url("' + o + '")',
						opacity: "1"
					}), this._core.trigger("loaded", {
						element: n,
						url: o
					}, "lazy")
				}, this), i.src = o)
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
				i = e + this._core.settings.items,
				n = this._core.$stage.children().toArray().slice(e, i),
				o = [];
			r.each(n, function(t, e) {
				o.push(r(e).height())
			}), t = Math.max.apply(null, o), this._core.$stage.parent().height(t).addClass(this._core.settings.autoHeightClass)
		}, e.prototype.destroy = function() {
			var t, e;
			for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
			for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
		}, r.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
	}(window.Zepto || window.jQuery, (window, document)),
	function(c, e) {
		var i = function(t) {
			this._core = t, this._videos = {}, this._playing = null, this._handlers = {
				"initialized.owl.carousel": c.proxy(function(t) {
					t.namespace && this._core.register({
						type: "state",
						name: "playing",
						tags: ["interacting"]
					})
				}, this),
				"resize.owl.carousel": c.proxy(function(t) {
					t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
				}, this),
				"refreshed.owl.carousel": c.proxy(function(t) {
					t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
				}, this),
				"changed.owl.carousel": c.proxy(function(t) {
					t.namespace && "position" === t.property.name && this._playing && this.stop()
				}, this),
				"prepared.owl.carousel": c.proxy(function(t) {
					var e;
					!t.namespace || (e = c(t.content).find(".owl-video")).length && (e.css("display", "none"), this.fetch(e, c(t.content)))
				}, this)
			}, this._core.options = c.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", c.proxy(function(t) {
				this.play(t)
			}, this))
		};
		i.Defaults = {
			video: !1,
			videoHeight: !1,
			videoWidth: !1
		}, i.prototype.fetch = function(t, e) {
			var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
				n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
				o = t.attr("data-width") || this._core.settings.videoWidth,
				r = t.attr("data-height") || this._core.settings.videoHeight,
				s = t.attr("href");
			if (!s) throw new Error("Missing video URL.");
			if (-1 < (n = s.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")) i = "youtube";
			else if (-1 < n[3].indexOf("vimeo")) i = "vimeo";
			else {
				if (!(-1 < n[3].indexOf("vzaar"))) throw new Error("Video URL not supported.");
				i = "vzaar"
			}
			n = n[6], this._videos[s] = {
				type: i,
				id: n,
				width: o,
				height: r
			}, e.attr("data-video", s), this.thumbnail(t, this._videos[s])
		}, i.prototype.thumbnail = function(e, t) {
			function i(t) {
				n = l.lazyLoad ? '<div class="owl-video-tn ' + a + '" ' + s + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(n), e.after('<div class="owl-video-play-icon"></div>')
			}
			var n, o = t.width && t.height ? 'style="width:' + t.width + "px;height:" + t.height + 'px;"' : "",
				r = e.find("img"),
				s = "src",
				a = "",
				l = this._core.settings;
			if (e.wrap('<div class="owl-video-wrapper"' + o + "></div>"), this._core.settings.lazyLoad && (s = "data-src", a = "owl-lazy"), r.length) return i(r.attr(s)), r.remove(), !1;
			"youtube" === t.type ? i("//img.youtube.com/vi/" + t.id + "/hqdefault.jpg") : "vimeo" === t.type ? c.ajax({
				type: "GET",
				url: "//vimeo.com/api/v2/video/" + t.id + ".json",
				jsonp: "callback",
				dataType: "jsonp",
				success: function(t) {
					i(t[0].thumbnail_large)
				}
			}) : "vzaar" === t.type && c.ajax({
				type: "GET",
				url: "//vzaar.com/api/videos/" + t.id + ".json",
				jsonp: "callback",
				dataType: "jsonp",
				success: function(t) {
					i(t.framegrab_url)
				}
			})
		}, i.prototype.stop = function() {
			this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
		}, i.prototype.play = function(t) {
			var e, i = c(t.target).closest("." + this._core.settings.itemClass),
				n = this._videos[i.attr("data-video")],
				o = n.width || "100%",
				r = n.height || this._core.$stage.height();
			this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), i = this._core.items(this._core.relative(i.index())), this._core.reset(i.index()), "youtube" === n.type ? e = '<iframe width="' + o + '" height="' + r + '" src="//www.youtube.com/embed/' + n.id + "?autoplay=1&rel=0&v=" + n.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === n.type ? e = '<iframe src="//player.vimeo.com/video/' + n.id + '?autoplay=1" width="' + o + '" height="' + r + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === n.type && (e = '<iframe frameborder="0"height="' + r + '"width="' + o + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + n.id + '/player?autoplay=true"></iframe>'), c('<div class="owl-video-frame">' + e + "</div>").insertAfter(i.find(".owl-video")), this._playing = i.addClass("owl-video-playing"))
		}, i.prototype.isInFullScreen = function() {
			var t = e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement;
			return t && c(t).parent().hasClass("owl-video-frame")
		}, i.prototype.destroy = function() {
			var t, e;
			for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
			for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
		}, c.fn.owlCarousel.Constructor.Plugins.Video = i
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
			var t, e, i, n, o, r;
			1 === this.core.settings.items && s.support.animation && s.support.transition && (this.core.speed(0), e = s.proxy(this.clear, this), i = this.core.$stage.children().eq(this.previous), n = this.core.$stage.children().eq(this.next), o = this.core.settings.animateIn, r = this.core.settings.animateOut, this.core.current() !== this.previous && (r && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(s.support.animation.end, e).css({
				left: t + "px"
			}).addClass("animated owl-animated-out").addClass(r)), o && n.one(s.support.animation.end, e).addClass("animated owl-animated-in").addClass(o)))
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
	function(i, n, o) {
		var e = function(t) {
			this._core = t, this._timeout = null, this._paused = !1, this._handlers = {
				"changed.owl.carousel": i.proxy(function(t) {
					t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
				}, this),
				"initialized.owl.carousel": i.proxy(function(t) {
					t.namespace && this._core.settings.autoplay && this.play()
				}, this),
				"play.owl.autoplay": i.proxy(function(t, e, i) {
					t.namespace && this.play(e, i)
				}, this),
				"stop.owl.autoplay": i.proxy(function(t) {
					t.namespace && this.stop()
				}, this),
				"mouseover.owl.autoplay": i.proxy(function() {
					this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
				}, this),
				"mouseleave.owl.autoplay": i.proxy(function() {
					this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
				}, this),
				"touchstart.owl.core": i.proxy(function() {
					this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
				}, this),
				"touchend.owl.core": i.proxy(function() {
					this._core.settings.autoplayHoverPause && this.play()
				}, this)
			}, this._core.$element.on(this._handlers), this._core.options = i.extend({}, e.Defaults, this._core.options)
		};
		e.Defaults = {
			autoplay: !1,
			autoplayTimeout: 5e3,
			autoplayHoverPause: !1,
			autoplaySpeed: !1
		}, e.prototype.play = function(t, e) {
			this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
		}, e.prototype._getNextTimeout = function(t, e) {
			return this._timeout && n.clearTimeout(this._timeout), n.setTimeout(i.proxy(function() {
				this._paused || this._core.is("busy") || this._core.is("interacting") || o.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
			}, this), t || this._core.settings.autoplayTimeout)
		}, e.prototype._setAutoPlayInterval = function() {
			this._timeout = this._getNextTimeout()
		}, e.prototype.stop = function() {
			this._core.is("rotating") && (n.clearTimeout(this._timeout), this._core.leave("rotating"))
		}, e.prototype.pause = function() {
			this._core.is("rotating") && (this._paused = !0)
		}, e.prototype.destroy = function() {
			var t, e;
			for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
			for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
		}, i.fn.owlCarousel.Constructor.Plugins.autoplay = e
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
			var t, i = this._core.settings;
			for (t in this._controls.$relative = (i.navContainer ? r(i.navContainer) : r("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = r("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", r.proxy(function(t) {
					this.prev(i.navSpeed)
				}, this)), this._controls.$next = r("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", r.proxy(function(t) {
					this.next(i.navSpeed)
				}, this)), i.dotsData || (this._templates = [r("<div>").addClass(i.dotClass).append(r("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? r(i.dotsContainer) : r("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", r.proxy(function(t) {
					var e = r(t.target).parent().is(this._controls.$absolute) ? r(t.target).index() : r(t.target).parent().index();
					t.preventDefault(), this.to(e, i.dotsSpeed)
				}, this)), this._overrides) this._core[t] = r.proxy(this[t], this)
		}, e.prototype.destroy = function() {
			var t, e, i, n;
			for (t in this._handlers) this.$element.off(t, this._handlers[t]);
			for (e in this._controls) this._controls[e].remove();
			for (n in this.overides) this._core[n] = this._overrides[n];
			for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
		}, e.prototype.update = function() {
			var t, e, i = this._core.clones().length / 2,
				n = i + this._core.items().length,
				o = this._core.maximum(!0),
				r = this._core.settings,
				s = r.center || r.autoWidth || r.dotsData ? 1 : r.dotsEach || r.items;
			if ("page" !== r.slideBy && (r.slideBy = Math.min(r.slideBy, r.items)), r.dots || "page" == r.slideBy)
				for (this._pages = [], t = i, e = 0; t < n; t++) {
					if (s <= e || 0 === e) {
						if (this._pages.push({
								start: Math.min(o, t - i),
								end: t - i + s - 1
							}), Math.min(o, t - i) === o) break;
						e = 0
					}
					e += this._core.mergers(this._core.relative(t))
				}
		}, e.prototype.draw = function() {
			var t, e = this._core.settings,
				i = this._core.items().length <= e.items,
				n = this._core.relative(this._core.current()),
				o = e.loop || e.rewind;
			this._controls.$relative.toggleClass("disabled", !e.nav || i), e.nav && (this._controls.$previous.toggleClass("disabled", !o && n <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && n >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !e.dots || i), e.dots && (t = this._pages.length - this._controls.$absolute.children().length, e.dotsData && 0 != t ? this._controls.$absolute.html(this._templates.join("")) : 0 < t ? this._controls.$absolute.append(new Array(1 + t).join(this._templates[0])) : t < 0 && this._controls.$absolute.children().slice(t).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(r.inArray(this.current(), this._pages)).addClass("active"))
		}, e.prototype.onTrigger = function(t) {
			var e = this._core.settings;
			t.page = {
				index: r.inArray(this.current(), this._pages),
				count: this._pages.length,
				size: e && (e.center || e.autoWidth || e.dotsData ? 1 : e.dotsEach || e.items)
			}
		}, e.prototype.current = function() {
			var i = this._core.relative(this._core.current());
			return r.grep(this._pages, r.proxy(function(t, e) {
				return t.start <= i && t.end >= i
			}, this)).pop()
		}, e.prototype.getPosition = function(t) {
			var e, i, n = this._core.settings;
			return "page" == n.slideBy ? (e = r.inArray(this.current(), this._pages), i = this._pages.length, t ? ++e : --e, e = this._pages[(e % i + i) % i].start) : (e = this._core.relative(this._core.current()), i = this._core.items().length, t ? e += n.slideBy : e -= n.slideBy), e
		}, e.prototype.next = function(t) {
			r.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
		}, e.prototype.prev = function(t) {
			r.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
		}, e.prototype.to = function(t, e, i) {
			var n;
			!i && this._pages.length ? (n = this._pages.length, r.proxy(this._overrides.to, this._core)(this._pages[(t % n + n) % n].start, e)) : r.proxy(this._overrides.to, this._core)(t, e)
		}, r.fn.owlCarousel.Constructor.Plugins.Navigation = e
	}(window.Zepto || window.jQuery, (window, document)),
	function(n, o) {
		"use strict";
		var e = function(t) {
			this._core = t, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
				"initialized.owl.carousel": n.proxy(function(t) {
					t.namespace && "URLHash" === this._core.settings.startPosition && n(o).trigger("hashchange.owl.navigation")
				}, this),
				"prepared.owl.carousel": n.proxy(function(t) {
					if (t.namespace) {
						var e = n(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
						if (!e) return;
						this._hashes[e] = t.content
					}
				}, this),
				"changed.owl.carousel": n.proxy(function(t) {
					if (t.namespace && "position" === t.property.name) {
						var i = this._core.items(this._core.relative(this._core.current())),
							e = n.map(this._hashes, function(t, e) {
								return t === i ? e : null
							}).join();
						if (!e || o.location.hash.slice(1) === e) return;
						o.location.hash = e
					}
				}, this)
			}, this._core.options = n.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), n(o).on("hashchange.owl.navigation", n.proxy(function(t) {
				var e = o.location.hash.substring(1),
					i = this._core.$stage.children(),
					n = this._hashes[e] && i.index(this._hashes[e]);
				void 0 !== n && n !== this._core.current() && this._core.to(this._core.relative(n), !1, !0)
			}, this))
		};
		e.Defaults = {
			URLhashListener: !1
		}, e.prototype.destroy = function() {
			var t, e;
			for (t in n(o).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(t, this._handlers[t]);
			for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
		}, n.fn.owlCarousel.Constructor.Plugins.Hash = e
	}(window.Zepto || window.jQuery, window, document),
	function(o, r) {
		function e(t, i) {
			var n = !1,
				e = t.charAt(0).toUpperCase() + t.slice(1);
			return o.each((t + " " + a.join(e + " ") + e).split(" "), function(t, e) {
				if (s[e] !== r) return n = !i || e, !1
			}), n
		}

		function t(t) {
			return e(t, !0)
		}
		var s = o("<support>").get(0).style,
			a = "Webkit Moz O ms".split(" "),
			i = {
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
			};
		e("transition") && (o.support.transition = new String(t("transition")), o.support.transition.end = i.transition.end[o.support.transition]), e("animation") && (o.support.animation = new String(t("animation")), o.support.animation.end = i.animation.end[o.support.animation]), e("transform") && (o.support.transform = new String(t("transform")), o.support.transform3d = !!e("perspective"))
	}(window.Zepto || window.jQuery, (window, void document)),
	function r(s, a, l) {
		function c(e, t) {
			if (!a[e]) {
				if (!s[e]) {
					var i = "function" == typeof require && require;
					if (!t && i) return i(e, !0);
					if (u) return u(e, !0);
					var n = new Error("Cannot find module '" + e + "'");
					throw n.code = "MODULE_NOT_FOUND", n
				}
				var o = a[e] = {
					exports: {}
				};
				s[e][0].call(o.exports, function(t) {
					return c(s[e][1][t] || t)
				}, o, o.exports, r, s, a, l)
			}
			return a[e].exports
		}
		for (var u = "function" == typeof require && require, t = 0; t < l.length; t++) c(l[t]);
		return c
	}({
		1: [function(t, e, i) {
			"use strict";

			function n(t) {
				t.fn.perfectScrollbar = function(i) {
					return this.each(function() {
						var t, e;
						"object" == typeof i || void 0 === i ? (t = i, s.get(this) || r.initialize(this, t)) : "update" === (e = i) ? r.update(this) : "destroy" === e && r.destroy(this)
					})
				}
			}
			var o, r = t("../main"),
				s = t("../plugin/instances");
			"function" == typeof define && define.amd ? define(["jquery"], n) : void 0 !== (o = window.jQuery ? window.jQuery : window.$) && n(o), e.exports = n
		}, {
			"../main": 6,
			"../plugin/instances": 17
		}],
		2: [function(t, e, i) {
			"use strict";
			var n = {
				create: function(t, e) {
					var i = document.createElement(t);
					return i.className = e, i
				},
				appendTo: function(t, e) {
					return e.appendChild(t), t
				},
				css: function(t, e, i) {
					return "object" == typeof e ? function(t, e) {
						for (var i in e) {
							var n = e[i];
							"number" == typeof n && (n = n.toString() + "px"), t.style[i] = n
						}
						return t
					}(t, e) : void 0 === i ? (s = e, window.getComputedStyle(t)[s]) : (n = t, o = e, "number" == typeof(r = i) && (r = r.toString() + "px"), n.style[o] = r, n);
					var n, o, r, s
				},
				matches: function(t, e) {
					return void 0 !== t.matches ? t.matches(e) : t.msMatchesSelector(e)
				},
				remove: function(t) {
					void 0 !== t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
				},
				queryChildren: function(t, e) {
					return Array.prototype.filter.call(t.childNodes, function(t) {
						return n.matches(t, e)
					})
				}
			};
			e.exports = n
		}, {}],
		3: [function(t, e, i) {
			"use strict";

			function n(t) {
				this.element = t, this.events = {}
			}

			function o() {
				this.eventElements = []
			}
			n.prototype.bind = function(t, e) {
				void 0 === this.events[t] && (this.events[t] = []), this.events[t].push(e), this.element.addEventListener(t, e, !1)
			}, n.prototype.unbind = function(e, i) {
				var n = void 0 !== i;
				this.events[e] = this.events[e].filter(function(t) {
					return !(!n || t === i) || (this.element.removeEventListener(e, t, !1), !1)
				}, this)
			}, n.prototype.unbindAll = function() {
				for (var t in this.events) this.unbind(t)
			}, o.prototype.eventElement = function(e) {
				var t = this.eventElements.filter(function(t) {
					return t.element === e
				})[0];
				return void 0 === t && (t = new n(e), this.eventElements.push(t)), t
			}, o.prototype.bind = function(t, e, i) {
				this.eventElement(t).bind(e, i)
			}, o.prototype.unbind = function(t, e, i) {
				this.eventElement(t).unbind(e, i)
			}, o.prototype.unbindAll = function() {
				for (var t = 0; t < this.eventElements.length; t++) this.eventElements[t].unbindAll()
			}, o.prototype.once = function(t, e, i) {
				var n = this.eventElement(t),
					o = function(t) {
						n.unbind(e, o), i(t)
					};
				n.bind(e, o)
			}, e.exports = o
		}, {}],
		4: [function(t, e, i) {
			"use strict";

			function n() {
				return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
			}
			e.exports = function() {
				return n() + n() + "-" + n() + "-" + n() + "-" + n() + "-" + n() + n() + n()
			}
		}, {}],
		5: [function(t, e, i) {
			"use strict";

			function o(t) {
				return ["ps--in-scrolling"].concat(void 0 === t ? ["ps--x", "ps--y"] : ["ps--" + t])
			}
			var n = t("./dom"),
				r = i.toInt = function(t) {
					return parseInt(t, 10) || 0
				};
			i.isEditable = function(t) {
				return n.matches(t, "input,[contenteditable]") || n.matches(t, "select,[contenteditable]") || n.matches(t, "textarea,[contenteditable]") || n.matches(t, "button,[contenteditable]")
			}, i.removePsClasses = function(t) {
				for (var e = 0; e < t.classList.length; e++) {
					var i = t.classList[e];
					0 === i.indexOf("ps-") && t.classList.remove(i)
				}
			}, i.outerWidth = function(t) {
				return r(n.css(t, "width")) + r(n.css(t, "paddingLeft")) + r(n.css(t, "paddingRight")) + r(n.css(t, "borderLeftWidth")) + r(n.css(t, "borderRightWidth"))
			}, i.startScrolling = function(t, e) {
				for (var i = o(e), n = 0; n < i.length; n++) t.classList.add(i[n])
			}, i.stopScrolling = function(t, e) {
				for (var i = o(e), n = 0; n < i.length; n++) t.classList.remove(i[n])
			}, i.env = {
				isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
				supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
				supportsIePointer: "undefined" != typeof window && null !== window.navigator.msMaxTouchPoints
			}
		}, {
			"./dom": 2
		}],
		6: [function(t, e, i) {
			"use strict";
			var n = t("./plugin/destroy"),
				o = t("./plugin/initialize"),
				r = t("./plugin/update");
			e.exports = {
				initialize: o,
				update: r,
				destroy: n
			}
		}, {
			"./plugin/destroy": 8,
			"./plugin/initialize": 16,
			"./plugin/update": 20
		}],
		7: [function(t, e, i) {
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
		8: [function(t, e, i) {
			"use strict";
			var n = t("../lib/helper"),
				o = t("../lib/dom"),
				r = t("./instances");
			e.exports = function(t) {
				var e = r.get(t);
				e && (e.event.unbindAll(), o.remove(e.scrollbarX), o.remove(e.scrollbarY), o.remove(e.scrollbarXRail), o.remove(e.scrollbarYRail), n.removePsClasses(t), r.remove(t))
			}
		}, {
			"../lib/dom": 2,
			"../lib/helper": 5,
			"./instances": 17
		}],
		9: [function(t, e, i) {
			"use strict";
			var r = t("../instances"),
				s = t("../update-geometry"),
				a = t("../update-scroll");
			e.exports = function(t) {
				function i(t) {
					return t.getBoundingClientRect()
				}

				function e(t) {
					t.stopPropagation()
				}
				var n, o;
				n = t, (o = r.get(t)).event.bind(o.scrollbarY, "click", e), o.event.bind(o.scrollbarYRail, "click", function(t) {
					var e = t.pageY - window.pageYOffset - i(o.scrollbarYRail).top > o.scrollbarYTop ? 1 : -1;
					a(n, "top", n.scrollTop + e * o.containerHeight), s(n), t.stopPropagation()
				}), o.event.bind(o.scrollbarX, "click", e), o.event.bind(o.scrollbarXRail, "click", function(t) {
					var e = t.pageX - window.pageXOffset - i(o.scrollbarXRail).left > o.scrollbarXLeft ? 1 : -1;
					a(n, "left", n.scrollLeft + e * o.containerWidth), s(n), t.stopPropagation()
				})
			}
		}, {
			"../instances": 17,
			"../update-geometry": 18,
			"../update-scroll": 19
		}],
		10: [function(t, e, i) {
			"use strict";
			var f = t("../../lib/helper"),
				m = t("../../lib/dom"),
				g = t("../instances"),
				v = t("../update-geometry"),
				y = t("../update-scroll");
			e.exports = function(t) {
				var o, r, s, e, a, l, c, i, n = g.get(t);

				function u(t) {
					(function(t) {
						var e = s + t * r.railYRatio,
							i = Math.max(0, r.scrollbarYRail.getBoundingClientRect().top) + r.railYRatio * (r.railYHeight - r.scrollbarYHeight);
						r.scrollbarYTop = e < 0 ? 0 : i < e ? i : e;
						var n = f.toInt(r.scrollbarYTop * (r.contentHeight - r.containerHeight) / (r.containerHeight - r.railYRatio * r.scrollbarYHeight));
						y(o, "top", n)
					})(t.pageY - e), v(o), t.stopPropagation(), t.preventDefault()
				}

				function d() {
					f.stopScrolling(o, "y"), r.event.unbind(r.ownerDocument, "mousemove", u)
				}

				function h(t) {
					(function(t) {
						var e = c + t * l.railXRatio,
							i = Math.max(0, l.scrollbarXRail.getBoundingClientRect().left) + l.railXRatio * (l.railXWidth - l.scrollbarXWidth);
						l.scrollbarXLeft = e < 0 ? 0 : i < e ? i : e;
						var n = f.toInt(l.scrollbarXLeft * (l.contentWidth - l.containerWidth) / (l.containerWidth - l.railXRatio * l.scrollbarXWidth)) - l.negativeScrollAdjustment;
						y(a, "left", n)
					})(t.pageX - i), v(a), t.stopPropagation(), t.preventDefault()
				}

				function p() {
					f.stopScrolling(a, "x"), l.event.unbind(l.ownerDocument, "mousemove", h)
				}
				a = t, i = c = null, (l = n).event.bind(l.scrollbarX, "mousedown", function(t) {
					i = t.pageX, c = f.toInt(m.css(l.scrollbarX, "left")) * l.railXRatio, f.startScrolling(a, "x"), l.event.bind(l.ownerDocument, "mousemove", h), l.event.once(l.ownerDocument, "mouseup", p), t.stopPropagation(), t.preventDefault()
				}), o = t, e = s = null, (r = n).event.bind(r.scrollbarY, "mousedown", function(t) {
					e = t.pageY, s = f.toInt(m.css(r.scrollbarY, "top")) * r.railYRatio, f.startScrolling(o, "y"), r.event.bind(r.ownerDocument, "mousemove", u), r.event.once(r.ownerDocument, "mouseup", d), t.stopPropagation(), t.preventDefault()
				})
			}
		}, {
			"../../lib/dom": 2,
			"../../lib/helper": 5,
			"../instances": 17,
			"../update-geometry": 18,
			"../update-scroll": 19
		}],
		11: [function(t, e, i) {
			"use strict";
			var l = t("../../lib/helper"),
				c = t("../../lib/dom"),
				n = t("../instances"),
				u = t("../update-geometry"),
				d = t("../update-scroll");
			e.exports = function(t) {
				var r, s, a;
				r = t, s = n.get(t), a = !1, s.event.bind(r, "mouseenter", function() {
					a = !0
				}), s.event.bind(r, "mouseleave", function() {
					a = !1
				}), s.event.bind(s.ownerDocument, "keydown", function(t) {
					if (!(t.isDefaultPrevented && t.isDefaultPrevented() || t.defaultPrevented)) {
						var e = c.matches(s.scrollbarX, ":focus") || c.matches(s.scrollbarY, ":focus");
						if (a || e) {
							var i = document.activeElement ? document.activeElement : s.ownerDocument.activeElement;
							if (i) {
								if ("IFRAME" === i.tagName) i = i.contentDocument.activeElement;
								else
									for (; i.shadowRoot;) i = i.shadowRoot.activeElement;
								if (l.isEditable(i)) return
							}
							var n = 0,
								o = 0;
							switch (t.which) {
								case 37:
									n = t.metaKey ? -s.contentWidth : t.altKey ? -s.containerWidth : -30;
									break;
								case 38:
									o = t.metaKey ? s.contentHeight : t.altKey ? s.containerHeight : 30;
									break;
								case 39:
									n = t.metaKey ? s.contentWidth : t.altKey ? s.containerWidth : 30;
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
							d(r, "top", r.scrollTop - o), d(r, "left", r.scrollLeft + n), u(r),
								function() {
									var t = r.scrollTop;
									if (0 === n) {
										if (!s.scrollbarYActive) return;
										if (0 === t && 0 < o || t >= s.contentHeight - s.containerHeight && o < 0) return !s.settings.wheelPropagation
									}
									var e = r.scrollLeft;
									if (0 === o) {
										if (!s.scrollbarXActive) return;
										if (0 === e && n < 0 || e >= s.contentWidth - s.containerWidth && 0 < n) return !s.settings.wheelPropagation
									}
									return 1
								}() && t.preventDefault()
						}
					}
				})
			}
		}, {
			"../../lib/dom": 2,
			"../../lib/helper": 5,
			"../instances": 17,
			"../update-geometry": 18,
			"../update-scroll": 19
		}],
		12: [function(t, e, i) {
			"use strict";
			var n = t("../instances"),
				c = t("../update-geometry"),
				u = t("../update-scroll");
			e.exports = function(t) {
				function e(t) {
					var e, i, n = (e = t.deltaX, i = -1 * t.deltaY, void 0 !== e && void 0 !== i || (e = -1 * t.wheelDeltaX / 6, i = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, i *= 10), e != e && i != i && (e = 0, i = t.wheelDelta), t.shiftKey ? [-i, -e] : [e, i]),
						o = n[0],
						r = n[1];
					! function(t, e) {
						var i = s.querySelector("textarea:hover, select[multiple]:hover, .ps-child:hover");
						if (i) {
							var n = window.getComputedStyle(i);
							if (![n.overflow, n.overflowX, n.overflowY].join("").match(/(scroll|auto)/)) return;
							var o = i.scrollHeight - i.clientHeight;
							if (0 < o && !(0 === i.scrollTop && 0 < e || i.scrollTop === o && e < 0)) return 1;
							var r = i.scrollLeft - i.clientWidth;
							if (0 < r && !(0 === i.scrollLeft && t < 0 || i.scrollLeft === r && 0 < t)) return 1
						}
					}(o, r) && (l = !1, a.settings.useBothWheelAxes ? a.scrollbarYActive && !a.scrollbarXActive ? (u(s, "top", r ? s.scrollTop - r * a.settings.wheelSpeed : s.scrollTop + o * a.settings.wheelSpeed), l = !0) : a.scrollbarXActive && !a.scrollbarYActive && (u(s, "left", o ? s.scrollLeft + o * a.settings.wheelSpeed : s.scrollLeft - r * a.settings.wheelSpeed), l = !0) : (u(s, "top", s.scrollTop - r * a.settings.wheelSpeed), u(s, "left", s.scrollLeft + o * a.settings.wheelSpeed)), c(s), (l = l || function() {
						var t = s.scrollTop;
						if (0 === o) {
							if (!a.scrollbarYActive) return !1;
							if (0 === t && 0 < r || t >= a.contentHeight - a.containerHeight && r < 0) return !a.settings.wheelPropagation
						}
						var e = s.scrollLeft;
						if (0 === r) {
							if (!a.scrollbarXActive) return !1;
							if (0 === e && o < 0 || e >= a.contentWidth - a.containerWidth && 0 < o) return !a.settings.wheelPropagation
						}
						return !0
					}()) && (t.stopPropagation(), t.preventDefault()))
				}
				var s, a, l;
				s = t, a = n.get(t), l = !1, void 0 !== window.onwheel ? a.event.bind(s, "wheel", e) : void 0 !== window.onmousewheel && a.event.bind(s, "mousewheel", e)
			}
		}, {
			"../instances": 17,
			"../update-geometry": 18,
			"../update-scroll": 19
		}],
		13: [function(t, e, i) {
			"use strict";
			var n = t("../instances"),
				o = t("../update-geometry");
			e.exports = function(t) {
				var e = n.get(t),
					i = t;
				e.event.bind(i, "scroll", function() {
					o(i)
				})
			}
		}, {
			"../instances": 17,
			"../update-geometry": 18
		}],
		14: [function(t, e, i) {
			"use strict";
			var h = t("../../lib/helper"),
				p = t("../instances"),
				f = t("../update-geometry"),
				m = t("../update-scroll");
			e.exports = function(t) {
				function a() {
					c && (clearInterval(c), c = null), h.stopScrolling(l)
				}
				var l, e, c, u, d;
				l = t, e = p.get(t), c = null, d = !(u = {
					top: 0,
					left: 0
				}), e.event.bind(e.ownerDocument, "selectionchange", function() {
					var t;
					l.contains(0 === (t = window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : "").toString().length ? null : t.getRangeAt(0).commonAncestorContainer) ? d = !0 : (d = !1, a())
				}), e.event.bind(window, "mouseup", function() {
					d && (d = !1, a())
				}), e.event.bind(window, "keyup", function() {
					d && (d = !1, a())
				}), e.event.bind(window, "mousemove", function(t) {
					var e, i, n, o, r, s;
					d && (e = t.pageX, i = t.pageY, n = l.offsetLeft, o = l.offsetLeft + l.offsetWidth, r = l.offsetTop, s = l.offsetTop + l.offsetHeight, e < n + 3 ? (u.left = -5, h.startScrolling(l, "x")) : o - 3 < e ? (u.left = 5, h.startScrolling(l, "x")) : u.left = 0, i < r + 3 ? (u.top = r + 3 - i < 5 ? -5 : -20, h.startScrolling(l, "y")) : s - 3 < i ? (u.top = i - s + 3 < 5 ? 5 : 20, h.startScrolling(l, "y")) : u.top = 0, 0 === u.top && 0 === u.left ? a() : c = c || setInterval(function() {
						return p.get(l) ? (m(l, "top", l.scrollTop + u.top), m(l, "left", l.scrollLeft + u.left), void f(l)) : void clearInterval(c)
					}, 50))
				})
			}
		}, {
			"../../lib/helper": 5,
			"../instances": 17,
			"../update-geometry": 18,
			"../update-scroll": 19
		}],
		15: [function(t, e, i) {
			"use strict";
			var b = t("../../lib/helper"),
				w = t("../instances"),
				x = t("../update-geometry"),
				_ = t("../update-scroll");
			e.exports = function(t) {
				function a(t, e) {
					_(d, "top", d.scrollTop - e), _(d, "left", d.scrollLeft - t), x(d)
				}

				function e() {
					v = !0
				}

				function i() {
					v = !1
				}

				function l(t) {
					return t.targetTouches ? t.targetTouches[0] : t
				}

				function c(t) {
					return (!t.pointerType || "pen" !== t.pointerType || 0 !== t.buttons) && (t.targetTouches && 1 === t.targetTouches.length || t.pointerType && "mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE)
				}

				function u(t) {
					var e;
					c(t) && (y = !0, e = l(t), p.pageX = e.pageX, p.pageY = e.pageY, f = (new Date).getTime(), null !== g && clearInterval(g), t.stopPropagation())
				}

				function n(t) {
					var e, i, n, o, r, s;
					!y && h.settings.swipePropagation && u(t), !v && y && c(t) && (a(n = (i = {
						pageX: (e = l(t)).pageX,
						pageY: e.pageY
					}).pageX - p.pageX, o = i.pageY - p.pageY), p = i, 0 < (s = (r = (new Date).getTime()) - f) && (m.x = n / s, m.y = o / s, f = r), function(t, e) {
						var i = d.scrollTop,
							n = d.scrollLeft,
							o = Math.abs(t),
							r = Math.abs(e);
						if (o < r) {
							if (e < 0 && i === h.contentHeight - h.containerHeight || 0 < e && 0 === i) return !h.settings.swipePropagation
						} else if (r < o && (t < 0 && n === h.contentWidth - h.containerWidth || 0 < t && 0 === n)) return !h.settings.swipePropagation;
						return 1
					}(n, o) && (t.stopPropagation(), t.preventDefault()))
				}

				function o() {
					!v && y && (y = !1, h.settings.swipeEasing && (clearInterval(g), g = setInterval(function() {
						return !w.get(d) || !m.x && !m.y || Math.abs(m.x) < .01 && Math.abs(m.y) < .01 ? void clearInterval(g) : (a(30 * m.x, 30 * m.y), m.x *= .8, void(m.y *= .8))
					}, 10)))
				}
				var d, h, r, s, p, f, m, g, v, y;
				(b.env.supportsTouch || b.env.supportsIePointer) && (d = t, h = w.get(t), r = b.env.supportsTouch, s = b.env.supportsIePointer, p = {}, f = 0, g = null, y = v = !(m = {}), r ? (h.event.bind(window, "touchstart", e), h.event.bind(window, "touchend", i), h.event.bind(d, "touchstart", u), h.event.bind(d, "touchmove", n), h.event.bind(d, "touchend", o)) : s && (window.PointerEvent ? (h.event.bind(window, "pointerdown", e), h.event.bind(window, "pointerup", i), h.event.bind(d, "pointerdown", u), h.event.bind(d, "pointermove", n), h.event.bind(d, "pointerup", o)) : window.MSPointerEvent && (h.event.bind(window, "MSPointerDown", e), h.event.bind(window, "MSPointerUp", i), h.event.bind(d, "MSPointerDown", u), h.event.bind(d, "MSPointerMove", n), h.event.bind(d, "MSPointerUp", o))))
			}
		}, {
			"../../lib/helper": 5,
			"../instances": 17,
			"../update-geometry": 18,
			"../update-scroll": 19
		}],
		16: [function(t, e, i) {
			"use strict";
			var n = t("./instances"),
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
				var i = n.add(e, "object" == typeof t ? t : {});
				e.classList.add("ps--theme_" + i.settings.theme), i.settings.handlers.forEach(function(t) {
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
		17: [function(t, e, i) {
			"use strict";

			function n(t, e) {
				function i() {
					t.classList.add("ps--focus")
				}

				function n() {
					t.classList.remove("ps--focus")
				}
				var o, r, s = this;
				for (var a in s.settings = c(), e) s.settings[a] = e[a];
				s.containerWidth = null, s.containerHeight = null, s.contentWidth = null, s.contentHeight = null, s.isRtl = "rtl" === u.css(t, "direction"), s.isNegativeScroll = (r = t.scrollLeft, t.scrollLeft = -1, o = t.scrollLeft < 0, t.scrollLeft = r, o), s.negativeScrollAdjustment = s.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, s.event = new d, s.ownerDocument = t.ownerDocument || document, s.scrollbarXRail = u.appendTo(u.create("div", "ps__scrollbar-x-rail"), t), s.scrollbarX = u.appendTo(u.create("div", "ps__scrollbar-x"), s.scrollbarXRail), s.scrollbarX.setAttribute("tabindex", 0), s.event.bind(s.scrollbarX, "focus", i), s.event.bind(s.scrollbarX, "blur", n), s.scrollbarXActive = null, s.scrollbarXWidth = null, s.scrollbarXLeft = null, s.scrollbarXBottom = l.toInt(u.css(s.scrollbarXRail, "bottom")), s.isScrollbarXUsingBottom = s.scrollbarXBottom == s.scrollbarXBottom, s.scrollbarXTop = s.isScrollbarXUsingBottom ? null : l.toInt(u.css(s.scrollbarXRail, "top")), s.railBorderXWidth = l.toInt(u.css(s.scrollbarXRail, "borderLeftWidth")) + l.toInt(u.css(s.scrollbarXRail, "borderRightWidth")), u.css(s.scrollbarXRail, "display", "block"), s.railXMarginWidth = l.toInt(u.css(s.scrollbarXRail, "marginLeft")) + l.toInt(u.css(s.scrollbarXRail, "marginRight")), u.css(s.scrollbarXRail, "display", ""), s.railXWidth = null, s.railXRatio = null, s.scrollbarYRail = u.appendTo(u.create("div", "ps__scrollbar-y-rail"), t), s.scrollbarY = u.appendTo(u.create("div", "ps__scrollbar-y"), s.scrollbarYRail), s.scrollbarY.setAttribute("tabindex", 0), s.event.bind(s.scrollbarY, "focus", i), s.event.bind(s.scrollbarY, "blur", n), s.scrollbarYActive = null, s.scrollbarYHeight = null, s.scrollbarYTop = null, s.scrollbarYRight = l.toInt(u.css(s.scrollbarYRail, "right")), s.isScrollbarYUsingRight = s.scrollbarYRight == s.scrollbarYRight, s.scrollbarYLeft = s.isScrollbarYUsingRight ? null : l.toInt(u.css(s.scrollbarYRail, "left")), s.scrollbarYOuterWidth = s.isRtl ? l.outerWidth(s.scrollbarY) : null, s.railBorderYWidth = l.toInt(u.css(s.scrollbarYRail, "borderTopWidth")) + l.toInt(u.css(s.scrollbarYRail, "borderBottomWidth")), u.css(s.scrollbarYRail, "display", "block"), s.railYMarginHeight = l.toInt(u.css(s.scrollbarYRail, "marginTop")) + l.toInt(u.css(s.scrollbarYRail, "marginBottom")), u.css(s.scrollbarYRail, "display", ""), s.railYHeight = null, s.railYRatio = null
			}

			function o(t) {
				return t.getAttribute("data-ps-id")
			}
			var l = t("../lib/helper"),
				c = t("./default-setting"),
				u = t("../lib/dom"),
				d = t("../lib/event-manager"),
				r = t("../lib/guid"),
				s = {};
			i.add = function(t, e) {
				var i = r();
				return t.setAttribute("data-ps-id", i), s[i] = new n(t, e), s[i]
			}, i.remove = function(t) {
				delete s[o(t)], t.removeAttribute("data-ps-id")
			}, i.get = function(t) {
				return s[o(t)]
			}
		}, {
			"../lib/dom": 2,
			"../lib/event-manager": 3,
			"../lib/guid": 4,
			"../lib/helper": 5,
			"./default-setting": 7
		}],
		18: [function(t, e, i) {
			"use strict";

			function n(t, e) {
				return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e
			}
			var o = t("../lib/helper"),
				r = t("../lib/dom"),
				s = t("./instances"),
				a = t("./update-scroll");
			e.exports = function(t) {
				var e, i = s.get(t);
				i.containerWidth = t.clientWidth, i.containerHeight = t.clientHeight, i.contentWidth = t.scrollWidth, i.contentHeight = t.scrollHeight, t.contains(i.scrollbarXRail) || (0 < (e = r.queryChildren(t, ".ps__scrollbar-x-rail")).length && e.forEach(function(t) {
						r.remove(t)
					}), r.appendTo(i.scrollbarXRail, t)), t.contains(i.scrollbarYRail) || (0 < (e = r.queryChildren(t, ".ps__scrollbar-y-rail")).length && e.forEach(function(t) {
						r.remove(t)
					}), r.appendTo(i.scrollbarYRail, t)), !i.settings.suppressScrollX && i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth ? (i.scrollbarXActive = !0, i.railXWidth = i.containerWidth - i.railXMarginWidth, i.railXRatio = i.containerWidth / i.railXWidth, i.scrollbarXWidth = n(i, o.toInt(i.railXWidth * i.containerWidth / i.contentWidth)), i.scrollbarXLeft = o.toInt((i.negativeScrollAdjustment + t.scrollLeft) * (i.railXWidth - i.scrollbarXWidth) / (i.contentWidth - i.containerWidth))) : i.scrollbarXActive = !1, !i.settings.suppressScrollY && i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight ? (i.scrollbarYActive = !0, i.railYHeight = i.containerHeight - i.railYMarginHeight, i.railYRatio = i.containerHeight / i.railYHeight, i.scrollbarYHeight = n(i, o.toInt(i.railYHeight * i.containerHeight / i.contentHeight)), i.scrollbarYTop = o.toInt(t.scrollTop * (i.railYHeight - i.scrollbarYHeight) / (i.contentHeight - i.containerHeight))) : i.scrollbarYActive = !1, i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth && (i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth), i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight && (i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight),
					function(t, e) {
						var i = {
							width: e.railXWidth
						};
						e.isRtl ? i.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : i.left = t.scrollLeft, e.isScrollbarXUsingBottom ? i.bottom = e.scrollbarXBottom - t.scrollTop : i.top = e.scrollbarXTop + t.scrollTop, r.css(e.scrollbarXRail, i);
						var n = {
							top: t.scrollTop,
							height: e.railYHeight
						};
						e.isScrollbarYUsingRight ? e.isRtl ? n.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth : n.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : n.left = e.scrollbarYLeft + t.scrollLeft, r.css(e.scrollbarYRail, n), r.css(e.scrollbarX, {
							left: e.scrollbarXLeft,
							width: e.scrollbarXWidth - e.railBorderXWidth
						}), r.css(e.scrollbarY, {
							top: e.scrollbarYTop,
							height: e.scrollbarYHeight - e.railBorderYWidth
						})
					}(t, i), i.scrollbarXActive ? t.classList.add("ps--active-x") : (t.classList.remove("ps--active-x"), i.scrollbarXWidth = 0, i.scrollbarXLeft = 0, a(t, "left", 0)), i.scrollbarYActive ? t.classList.add("ps--active-y") : (t.classList.remove("ps--active-y"), i.scrollbarYHeight = 0, i.scrollbarYTop = 0, a(t, "top", 0))
			}
		}, {
			"../lib/dom": 2,
			"../lib/helper": 5,
			"./instances": 17,
			"./update-scroll": 19
		}],
		19: [function(t, e, i) {
			"use strict";

			function o(t) {
				var e = document.createEvent("Event");
				return e.initEvent(t, !0, !0), e
			}
			var r = t("./instances");
			e.exports = function(t, e, i) {
				if (void 0 === t) throw "You must provide an element to the update-scroll function";
				if (void 0 === e) throw "You must provide an axis to the update-scroll function";
				if (void 0 === i) throw "You must provide a value to the update-scroll function";
				"top" === e && i <= 0 && (t.scrollTop = i = 0, t.dispatchEvent(o("ps-y-reach-start"))), "left" === e && i <= 0 && (t.scrollLeft = i = 0, t.dispatchEvent(o("ps-x-reach-start")));
				var n = r.get(t);
				"top" === e && i >= n.contentHeight - n.containerHeight && ((i = n.contentHeight - n.containerHeight) - t.scrollTop <= 2 ? i = t.scrollTop : t.scrollTop = i, t.dispatchEvent(o("ps-y-reach-end"))), "left" === e && i >= n.contentWidth - n.containerWidth && ((i = n.contentWidth - n.containerWidth) - t.scrollLeft <= 2 ? i = t.scrollLeft : t.scrollLeft = i, t.dispatchEvent(o("ps-x-reach-end"))), void 0 === n.lastTop && (n.lastTop = t.scrollTop), void 0 === n.lastLeft && (n.lastLeft = t.scrollLeft), "top" === e && i < n.lastTop && t.dispatchEvent(o("ps-scroll-up")), "top" === e && i > n.lastTop && t.dispatchEvent(o("ps-scroll-down")), "left" === e && i < n.lastLeft && t.dispatchEvent(o("ps-scroll-left")), "left" === e && i > n.lastLeft && t.dispatchEvent(o("ps-scroll-right")), "top" === e && i !== n.lastTop && (t.scrollTop = n.lastTop = i, t.dispatchEvent(o("ps-scroll-y"))), "left" === e && i !== n.lastLeft && (t.scrollLeft = n.lastLeft = i, t.dispatchEvent(o("ps-scroll-x")))
			}
		}, {
			"./instances": 17
		}],
		20: [function(t, e, i) {
			"use strict";
			var n = t("../lib/helper"),
				o = t("../lib/dom"),
				r = t("./instances"),
				s = t("./update-geometry"),
				a = t("./update-scroll");
			e.exports = function(t) {
				var e = r.get(t);
				e && (e.negativeScrollAdjustment = e.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, o.css(e.scrollbarXRail, "display", "block"), o.css(e.scrollbarYRail, "display", "block"), e.railXMarginWidth = n.toInt(o.css(e.scrollbarXRail, "marginLeft")) + n.toInt(o.css(e.scrollbarXRail, "marginRight")), e.railYMarginHeight = n.toInt(o.css(e.scrollbarYRail, "marginTop")) + n.toInt(o.css(e.scrollbarYRail, "marginBottom")), o.css(e.scrollbarXRail, "display", "none"), o.css(e.scrollbarYRail, "display", "none"), s(t), a(t, "top", t.scrollTop), a(t, "left", t.scrollLeft), o.css(e.scrollbarXRail, "display", ""), o.css(e.scrollbarYRail, "display", ""))
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

		function e(n) {
			return this.each(function() {
				var t = s(this),
					e = s.extend({}, o.DEFAULTS, t.data(), "object" == typeof n && n),
					i = t.data("bs.validator");
				!i && "destroy" == n || (i || t.data("bs.validator", i = new o(this, e)), "string" == typeof n && i[n]())
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
				i = s(t.target),
				n = "focusout" !== t.type;
			this.$inputs.is(i) && this.validateInput(i, n).done(function() {
				e.toggleSubmit()
			})
		}, o.prototype.validateInput = function(e, i) {
			a(e);
			var n = e.data("bs.validator.errors");
			e.is('[type="radio"]') && (e = this.$element.find('input[name="' + e.attr("name") + '"]'));
			var o = s.Event("validate.bs.validator", {
				relatedTarget: e[0]
			});
			if (this.$element.trigger(o), !o.isDefaultPrevented()) {
				var r = this;
				return this.runValidators(e).done(function(t) {
					e.data("bs.validator.errors", t), t.length ? i ? r.defer(e, r.showErrors) : r.showErrors(e) : r.clearErrors(e), n && t.toString() === n.toString() || (o = t.length ? s.Event("invalid.bs.validator", {
						relatedTarget: e[0],
						detail: t
					}) : s.Event("valid.bs.validator", {
						relatedTarget: e[0],
						detail: n
					}), r.$element.trigger(o)), r.toggleSubmit(), r.$element.trigger(s.Event("validated.bs.validator", {
						relatedTarget: e[0]
					}))
				})
			}
		}, o.prototype.runValidators = function(n) {
			var o = [],
				e = s.Deferred();

			function r(t) {
				return n.data(t + "-error") || ((e = n[0].validity).typeMismatch ? n.data("type-error") : e.patternMismatch ? n.data("pattern-error") : e.stepMismatch ? n.data("step-error") : e.rangeOverflow ? n.data("max-error") : e.rangeUnderflow ? n.data("min-error") : e.valueMissing ? n.data("required-error") : null) || n.data("error");
				var e
			}
			return n.data("bs.validator.deferred") && n.data("bs.validator.deferred").reject(), n.data("bs.validator.deferred", e), s.each(this.validators, s.proxy(function(t, e) {
				var i = null;
				(a(n) || n.attr("required")) && (n.data(t) || "native" == t) && (i = e.call(this, n)) && (i = r(t) || i, ~o.indexOf(i) || o.push(i))
			}, this)), !o.length && a(n) && n.data("remote") ? this.defer(n, function() {
				var t = {};
				t[n.attr("name")] = a(n), s.get(n.data("remote"), t).fail(function(t, e, i) {
					o.push(r("remote") || i)
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
				i = t.closest(".form-group"),
				n = i.find(".help-block.with-errors"),
				o = i.find(".form-control-feedback");
			e.length && (void 0 === n.data("bs.validator.originalContent") && n.data("bs.validator.originalContent", n.html()), n.empty().append(e), i.addClass("has-error has-danger"), i.hasClass("has-feedback") && o.removeClass(this.options.feedback.success) && o.addClass(this.options.feedback.error) && i.removeClass("has-success"))
		}, o.prototype.clearErrors = function(t) {
			var e = t.closest(".form-group"),
				i = e.find(".help-block.with-errors"),
				n = e.find(".form-control-feedback");
			i.html(i.data("bs.validator.originalContent")), e.removeClass("has-error has-danger has-success"), e.hasClass("has-feedback") && n.removeClass(this.options.feedback.error) && n.removeClass(this.options.feedback.success) && a(t) && n.addClass(this.options.feedback.success) && e.addClass("has-success")
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

		function i() {
			e.removeClass("animated-section-moveToRight closed"), e.show(), p("body").addClass("ajax-page-visible")
		}
		var n = p(".ajax-page-load").each(function() {
			if (n = p(this).attr("href"), location.hash == location.hash.split("/")[0] + "/" + n.substr(0, n.length - 5)) {
				var t = p(this).attr("href");
				return i(), e.load(t), !1
			}
		});
		p(document).on("click", ".main-menu, #ajax-page-close-button", function(t) {
			t.preventDefault(), p("#page-ajax-loaded").addClass("animated-section-moveToRight closed"), p("body").removeClass("ajax-page-visible"), setTimeout(function() {
				p("#page-ajax-loaded.closed").html(""), e.hide()
			}, 500), location.hash = location.hash.split("/")[0]
		}).on("click", ".ajax-page-load", function() {
			var t = location.hash.split("/")[0] + "/" + p(this).attr("href").substr(0, p(this).attr("href").length - 5);
			return location.hash = t, i(), !1
		})
	}

	function s(t, e) {
		var i;
		t.attr("data-animation") || (i = parseInt(Math.floor(67 * Math.random()) + 1), t.data("animation", i));
		var n, o, r, s, a = t.data("animation").toString();
		if (67 < (s = -1 != a.indexOf("-") ? (r = a.split("-"), parseInt(r[Math.floor(Math.random() * r.length)])) : parseInt(a))) alert("Transition.js : Invalid 'data-animation' attribute configuration. Animation number should not be greater than 67");
		else {
			switch (s) {
				case 1:
					n = "animated-section-moveFromRight", o = "animated-section-moveToLeft";
					break;
				case 2:
					n = "animated-section-moveFromLeft", o = "animated-section-moveToRight";
					break;
				case 3:
					n = "animated-section-moveFromBottom", o = "animated-section-moveToTop";
					break;
				case 4:
					n = "animated-section-moveFromTop", o = "animated-section-moveToBottom";
					break;
				case 5:
					n = "animated-section-moveFromRight animated-section-ontop", o = "animated-section-fade";
					break;
				case 6:
					n = "animated-section-moveFromLeft animated-section-ontop", o = "animated-section-fade";
					break;
				case 7:
					n = "animated-section-moveFromBottom animated-section-ontop", o = "animated-section-fade";
					break;
				case 8:
					n = "animated-section-moveFromTop animated-section-ontop", o = "animated-section-fade";
					break;
				case 9:
					n = "animated-section-moveFromRightFade", o = "animated-section-moveToLeftFade";
					break;
				case 10:
					n = "animated-section-moveFromLeftFade", o = "animated-section-moveToRightFade";
					break;
				case 11:
					n = "animated-section-moveFromBottomFade", o = "animated-section-moveToTopFade";
					break;
				case 12:
					n = "animated-section-moveFromTopFade", o = "animated-section-moveToBottomFade";
					break;
				case 13:
					n = "animated-section-moveFromRight", o = "animated-section-moveToLeftEasing animated-section-ontop";
					break;
				case 14:
					n = "animated-section-moveFromLeft", o = "animated-section-moveToRightEasing animated-section-ontop";
					break;
				case 15:
					n = "animated-section-moveFromBottom", o = "animated-section-moveToTopEasing animated-section-ontop";
					break;
				case 16:
					n = "animated-section-moveFromTop", o = "animated-section-moveToBottomEasing animated-section-ontop";
					break;
				case 17:
					n = "animated-section-moveFromRight animated-section-ontop", o = "animated-section-scaleDown";
					break;
				case 18:
					n = "animated-section-moveFromLeft animated-section-ontop", o = "animated-section-scaleDown";
					break;
				case 19:
					n = "animated-section-moveFromBottom animated-section-ontop", o = "animated-section-scaleDown";
					break;
				case 20:
					n = "animated-section-moveFromTop animated-section-ontop", o = "animated-section-scaleDown";
					break;
				case 21:
					n = "animated-section-scaleUpDown animated-section-delay300", o = "animated-section-scaleDown";
					break;
				case 22:
					n = "animated-section-scaleUp animated-section-delay300", o = "animated-section-scaleDownUp";
					break;
				case 23:
					n = "animated-section-scaleUp", o = "animated-section-moveToLeft animated-section-ontop";
					break;
				case 24:
					n = "animated-section-scaleUp", o = "animated-section-moveToRight animated-section-ontop";
					break;
				case 25:
					n = "animated-section-scaleUp", o = "animated-section-moveToTop animated-section-ontop";
					break;
				case 26:
					n = "animated-section-scaleUp", o = "animated-section-moveToBottom animated-section-ontop";
					break;
				case 27:
					n = "animated-section-scaleUpCenter animated-section-delay400", o = "animated-section-scaleDownCenter";
					break;
				case 28:
					n = "animated-section-moveFromRight animated-section-delay200 animated-section-ontop", o = "animated-section-rotateRightSideFirst";
					break;
				case 29:
					n = "animated-section-moveFromLeft animated-section-delay200 animated-section-ontop", o = "animated-section-rotateLeftSideFirst";
					break;
				case 30:
					n = "animated-section-moveFromTop animated-section-delay200 animated-section-ontop", o = "animated-section-rotateTopSideFirst";
					break;
				case 31:
					n = "animated-section-moveFromBottom animated-section-delay200 animated-section-ontop", o = "animated-section-rotateBottomSideFirst";
					break;
				case 32:
					n = "animated-section-flipInLeft animated-section-delay500", o = "animated-section-flipOutRight";
					break;
				case 33:
					n = "animated-section-flipInRight animated-section-delay500", o = "animated-section-flipOutLeft";
					break;
				case 34:
					n = "animated-section-flipInBottom animated-section-delay500", o = "animated-section-flipOutTop";
					break;
				case 35:
					n = "animated-section-flipInTop animated-section-delay500", o = "animated-section-flipOutBottom";
					break;
				case 36:
					n = "animated-section-scaleUp", o = "animated-section-rotateFall animated-section-ontop";
					break;
				case 37:
					n = "animated-section-rotateInNewspaper animated-section-delay500", o = "animated-section-rotateOutNewspaper";
					break;
				case 38:
					n = "animated-section-moveFromRight", o = "animated-section-rotatePushLeft";
					break;
				case 39:
					n = "animated-section-moveFromLeft", o = "animated-section-rotatePushRight";
					break;
				case 40:
					n = "animated-section-moveFromBottom", o = "animated-section-rotatePushTop";
					break;
				case 41:
					n = "animated-section-moveFromTop", o = "animated-section-rotatePushBottom";
					break;
				case 42:
					n = "animated-section-rotatePullRight animated-section-delay180", o = "animated-section-rotatePushLeft";
					break;
				case 43:
					n = "animated-section-rotatePullLeft animated-section-delay180", o = "animated-section-rotatePushRight";
					break;
				case 44:
					n = "animated-section-rotatePullBottom animated-section-delay180", o = "animated-section-rotatePushTop";
					break;
				case 45:
					n = "animated-section-rotatePullTop animated-section-delay180", o = "animated-section-rotatePushBottom";
					break;
				case 46:
					n = "animated-section-moveFromRightFade", o = "animated-section-rotateFoldLeft";
					break;
				case 47:
					n = "animated-section-moveFromLeftFade", o = "animated-section-rotateFoldRight";
					break;
				case 48:
					n = "animated-section-moveFromBottomFade", o = "animated-section-rotateFoldTop";
					break;
				case 49:
					n = "animated-section-moveFromTopFade", o = "animated-section-rotateFoldBottom";
					break;
				case 50:
					n = "animated-section-rotateUnfoldLeft", o = "animated-section-moveToRightFade";
					break;
				case 51:
					n = "animated-section-rotateUnfoldRight", o = "animated-section-moveToLeftFade";
					break;
				case 52:
					n = "animated-section-rotateUnfoldTop", o = "animated-section-moveToBottomFade";
					break;
				case 53:
					n = "animated-section-rotateUnfoldBottom", o = "animated-section-moveToTopFade";
					break;
				case 54:
					n = "animated-section-rotateRoomLeftIn", o = "animated-section-rotateRoomLeftOut animated-section-ontop";
					break;
				case 55:
					n = "animated-section-rotateRoomRightIn", o = "animated-section-rotateRoomRightOut animated-section-ontop";
					break;
				case 56:
					n = "animated-section-rotateRoomTopIn", o = "animated-section-rotateRoomTopOut animated-section-ontop";
					break;
				case 57:
					n = "animated-section-rotateRoomBottomIn", o = "animated-section-rotateRoomBottomOut animated-section-ontop";
					break;
				case 58:
					n = "animated-section-rotateCubeLeftIn", o = "animated-section-rotateCubeLeftOut animated-section-ontop";
					break;
				case 59:
					n = "animated-section-rotateCubeRightIn", o = "animated-section-rotateCubeRightOut animated-section-ontop";
					break;
				case 60:
					n = "animated-section-rotateCubeTopIn", o = "animated-section-rotateCubeTopOut animated-section-ontop";
					break;
				case 61:
					n = "animated-section-rotateCubeBottomIn", o = "animated-section-rotateCubeBottomOut animated-section-ontop";
					break;
				case 62:
					n = "animated-section-rotateCarouselLeftIn", o = "animated-section-rotateCarouselLeftOut animated-section-ontop";
					break;
				case 63:
					n = "animated-section-rotateCarouselRightIn", o = "animated-section-rotateCarouselRightOut animated-section-ontop";
					break;
				case 64:
					n = "animated-section-rotateCarouselTopIn", o = "animated-section-rotateCarouselTopOut animated-section-ontop";
					break;
				case 65:
					n = "animated-section-rotateCarouselBottomIn", o = "animated-section-rotateCarouselBottomOut animated-section-ontop";
					break;
				case 66:
					n = "animated-section-rotateSidesIn animated-section-delay200", o = "animated-section-rotateSidesOut";
					break;
				case 67:
					n = "animated-section-rotateSlideIn", o = "animated-section-rotateSlideOut"
			}
			var l, c = f,
				u = c.data("current"),
				e = t.attr("href").split("#")[1],
				d = u,
				h = p('section[data-id="' + u + '"]');
			d != (u = e) ? (m = !0, c.data("current", u), (l = p("section[data-id=" + u + "]").addClass("section-active")).scrollTop(0), h.addClass(o).on(y, function() {
				h.off(y), g = !0, v && (w(0, l, h), g = !1)
			}), l.addClass(n).on(y, function() {
				l.off(y), v = !0, g && (w(0, l, h), m = v = !1)
			})) : m = !1, b || w(0, l)
		}
	}

	function w(t, e, i) {
		var n = e;
		i.attr("class", i.data("originalClassList")), n.attr("class", n.data("originalClassList") + " section-active")
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
					var e = p(i + ' a[href*="' + location.hash.split("/")[0] + '"]');
					o(e), s(e), r()
				}
			};
			var i = t.menu,
				e = "" === location.hash ? location.hash = p("section.animated-section").first().attr("data-id") : location.hash;
			location.hash = e;
			var n = p(i + ' a[href*="' + location.hash.split("/")[0] + '"]');
			o(n), s(n), p("body").append('<div id="page-ajax-loaded" class="page-ajax-loaded animated animated-section-moveFromLeft"></div>'), r(), p(".lmpixels-arrow-right").click(function() {
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
		m.ev.on("mfp" + t + i, e)
	}

	function h(t, e, i, n) {
		var o = document.createElement("div");
		return o.className = "mfp-" + t, i && (o.innerHTML = i), n ? e && e.appendChild(o) : (o = u(o), e && o.appendTo(e)), o
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
	var m, n, g, o, v, e, a = "Close",
		l = "BeforeClose",
		y = "MarkupParse",
		i = ".mfp",
		b = "mfp-ready",
		s = "mfp-removing",
		c = "mfp-prevent-close",
		w = !!window.jQuery,
		x = u(window);

	function _() {
		E && (T.after(E.addClass(C)).detach(), E = null)
	}
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
				for (var e, i = t.items, n = 0; n < i.length; n++)
					if ((e = i[n]).parsed && (e = e.el[0]), e === t.el[0]) {
						m.index = n;
						break
					}
			} else m.items = u.isArray(t.items) ? t.items : [t.items], m.index = t.index || 0;
			if (!m.isOpen) {
				m.types = [], v = "", t.mainEl && t.mainEl.length ? m.ev = t.mainEl.eq(0) : m.ev = g, t.key ? (m.popupsCache[t.key] || (m.popupsCache[t.key] = {}), m.currTemplate = m.popupsCache[t.key]) : m.currTemplate = {}, m.st = u.extend(!0, {}, u.magnificPopup.defaults, t), m.fixedContentPos = "auto" === m.st.fixedContentPos ? !m.probablyMobile : m.st.fixedContentPos, m.st.modal && (m.st.closeOnContentClick = !1, m.st.closeOnBgClick = !1, m.st.showCloseBtn = !1, m.st.enableEscapeKey = !1), m.bgOverlay || (m.bgOverlay = h("bg").on("click.mfp", function() {
					m.close()
				}), m.wrap = h("wrap").attr("tabindex", -1).on("click.mfp", function(t) {
					m._checkIfClose(t.target) && m.close()
				}), m.container = h("container", m.wrap)), m.contentContainer = h("content"), m.st.preloader && (m.preloader = h("preloader", m.container, m.st.tLoading));
				for (var o = u.magnificPopup.modules, n = 0; n < o.length; n++) {
					var r = (r = o[n]).charAt(0).toUpperCase() + r.slice(1);
					m["init" + r].call(m)
				}
				p("BeforeOpen"), m.st.showCloseBtn && (m.st.closeBtnInside ? (d(y, function(t, e, i, n) {
					i.close_replaceWith = f(n.type)
				}), v += " mfp-close-btn-in") : m.wrap.append(f())), m.st.alignTop && (v += " mfp-align-top"), m.fixedContentPos ? m.wrap.css({
					overflow: m.st.overflowY,
					overflowX: "hidden",
					overflowY: m.st.overflowY
				}) : m.wrap.css({
					top: x.scrollTop(),
					position: "absolute"
				}), !1 !== m.st.fixedBgPos && ("auto" !== m.st.fixedBgPos || m.fixedContentPos) || m.bgOverlay.css({
					height: g.height(),
					position: "absolute"
				}), m.st.enableEscapeKey && g.on("keyup.mfp", function(t) {
					27 === t.keyCode && m.close()
				}), x.on("resize.mfp", function() {
					m.updateSize()
				}), m.st.closeOnContentClick || (v += " mfp-auto-cursor"), v && m.wrap.addClass(v);
				var s, a = m.wH = x.height(),
					l = {};
				m.fixedContentPos && m._hasScrollBar(a) && (s = m._getScrollbarSize()) && (l.marginRight = s), m.fixedContentPos && (m.isIE7 ? u("body, html").css("overflow", "hidden") : l.overflow = "hidden");
				var c = m.st.mainClass;
				return m.isIE7 && (c += " mfp-ie7"), c && m._addClassToMFP(c), m.updateItemHTML(), p("BuildControls"), u("html").css(l), m.bgOverlay.add(m.wrap).prependTo(m.st.prependTo || u(document.body)), m._lastFocusedEl = document.activeElement, setTimeout(function() {
					m.content ? (m._addClassToMFP(b), m._setFocus()) : m.bgOverlay.addClass(b), g.on("focusin.mfp", m._onFocusIn)
				}, 16), m.isOpen = !0, m.updateSize(a), p("Open"), t
			}
			m.updateItemHTML()
		},
		close: function() {
			m.isOpen && (p(l), m.isOpen = !1, m.st.removalDelay && !m.isLowIE && m.supportsTransition ? (m._addClassToMFP(s), setTimeout(function() {
				m._close()
			}, m.st.removalDelay)) : m._close())
		},
		_close: function() {
			p(a);
			var t, e = s + " " + b + " ";
			m.bgOverlay.detach(), m.wrap.detach(), m.container.empty(), m.st.mainClass && (e += m.st.mainClass + " "), m._removeClassFromMFP(e), m.fixedContentPos && (t = {
				marginRight: ""
			}, m.isIE7 ? u("body, html").css("overflow", "") : t.overflow = "", u("html").css(t)), g.off("keyup.mfp focusin.mfp"), m.ev.off(i), m.wrap.attr("class", "mfp-wrap").removeAttr("style"), m.bgOverlay.attr("class", "mfp-bg"), m.container.attr("class", "mfp-container"), !m.st.showCloseBtn || m.st.closeBtnInside && !0 !== m.currTemplate[m.currItem.type] || m.currTemplate.closeBtn && m.currTemplate.closeBtn.detach(), m.st.autoFocusLast && m._lastFocusedEl && u(m._lastFocusedEl).focus(), m.currItem = null, m.content = null, m.currTemplate = null, m.prevHeight = 0, p("AfterClose")
		},
		updateSize: function(t) {
			var e, i;
			m.isIOS ? (e = document.documentElement.clientWidth / window.innerWidth, i = window.innerHeight * e, m.wrap.css("height", i), m.wH = i) : m.wH = t || x.height(), m.fixedContentPos || m.wrap.css("height", m.wH), p("Resize")
		},
		updateItemHTML: function() {
			var t = m.items[m.index];
			m.contentContainer.detach(), m.content && m.content.detach(), t.parsed || (t = m.parseEl(m.index));
			var e, i = t.type;
			p("BeforeChange", [m.currItem ? m.currItem.type : "", i]), m.currItem = t, m.currTemplate[i] || (p("FirstMarkupParse", e = !!m.st[i] && m.st[i].markup), m.currTemplate[i] = !e || u(e)), o && o !== t.type && m.container.removeClass("mfp-" + o + "-holder");
			var n = m["get" + i.charAt(0).toUpperCase() + i.slice(1)](t, m.currTemplate[i]);
			m.appendContent(n, i), t.preloaded = !0, p("Change", t), o = t.type, m.container.prepend(m.contentContainer), p("AfterChange")
		},
		appendContent: function(t, e) {
			(m.content = t) ? m.st.showCloseBtn && m.st.closeBtnInside && !0 === m.currTemplate[e] ? m.content.find(".mfp-close").length || m.content.append(f()) : m.content = t: m.content = "", p("BeforeAppend"), m.container.addClass("mfp-" + e + "-holder"), m.contentContainer.append(m.content)
		},
		parseEl: function(t) {
			var e, i = m.items[t];
			if ((i = i.tagName ? {
					el: u(i)
				} : (e = i.type, {
					data: i,
					src: i.src
				})).el) {
				for (var n = m.types, o = 0; o < n.length; o++)
					if (i.el.hasClass("mfp-" + n[o])) {
						e = n[o];
						break
					} i.src = i.el.attr("data-mfp-src"), i.src || (i.src = i.el.attr("href"))
			}
			return i.type = e || m.st.type || "inline", i.index = t, i.parsed = !0, p("ElementParse", m.items[t] = i), m.items[t]
		},
		addGroup: function(e, i) {
			function t(t) {
				t.mfpEl = this, m._openClick(t, e, i)
			}
			var n = "click.magnificPopup";
			(i = i || {}).mainEl = e, i.items ? (i.isObj = !0, e.off(n).on(n, t)) : (i.isObj = !1, i.delegate ? e.off(n).on(n, i.delegate, t) : (i.items = e).off(n).on(n, t))
		},
		_openClick: function(t, e, i) {
			if ((void 0 !== i.midClick ? i.midClick : u.magnificPopup.defaults.midClick) || !(2 === t.which || t.ctrlKey || t.metaKey || t.altKey || t.shiftKey)) {
				var n = void 0 !== i.disableOn ? i.disableOn : u.magnificPopup.defaults.disableOn;
				if (n)
					if (u.isFunction(n)) {
						if (!n.call(m)) return !0
					} else if (x.width() < n) return !0;
				t.type && (t.preventDefault(), m.isOpen && t.stopPropagation()), i.el = u(t.mfpEl), i.delegate && (i.items = e.find(i.delegate)), m.open(i)
			}
		},
		updateStatus: function(t, e) {
			var i;
			m.preloader && (n !== t && m.container.removeClass("mfp-s-" + n), e || "loading" !== t || (e = m.st.tLoading), p("UpdateStatus", i = {
				status: t,
				text: e
			}), t = i.status, e = i.text, m.preloader.html(e), m.preloader.find("a").on("click", function(t) {
				t.stopImmediatePropagation()
			}), m.container.addClass("mfp-s-" + t), n = t)
		},
		_checkIfClose: function(t) {
			if (!u(t).hasClass(c)) {
				var e = m.st.closeOnContentClick,
					i = m.st.closeOnBgClick;
				if (e && i) return !0;
				if (!m.content || u(t).hasClass("mfp-close") || m.preloader && t === m.preloader[0]) return !0;
				if (t === m.content[0] || u.contains(m.content[0], t)) {
					if (e) return !0
				} else if (i && u.contains(document, t)) return !0;
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
			return (m.isIE7 ? g.height() : document.body.scrollHeight) > (t || x.height())
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
				return void 0 === e || !1 === e || void(1 < (r = t.split("_")).length ? 0 < (i = o.find(".mfp-" + r[0])).length && ("replaceWith" === (n = r[1]) ? i[0] !== e[0] && i.replaceWith(e) : "img" === n ? i.is("img") ? i.attr("src", e) : i.replaceWith(u("<img>").attr("src", e).attr("class", i.attr("class"))) : i.attr(r[1], e)) : o.find(".mfp-" + t).html(e));
				var i, n
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
		var e, i, n, o = u(this);
		return "string" == typeof t ? "open" === t ? (e = w ? o.data("magnificPopup") : o[0].magnificPopup, i = parseInt(arguments[1], 10) || 0, n = e.items ? e.items[i] : (n = o, e.delegate && (n = n.find(e.delegate)), n.eq(i)), m._openClick({
			mfpEl: n
		}, o, e)) : m.isOpen && m[t].apply(m, Array.prototype.slice.call(arguments, 1)) : (t = u.extend(!0, {}, t), w ? o.data("magnificPopup", t) : o[0].magnificPopup = t, m.addGroup(o, t)), o
	};
	var C, T, E, S = "inline";

	function k() {
		I && u(document.body).removeClass(I)
	}

	function L() {
		k(), m.req && m.req.abort()
	}
	u.magnificPopup.registerModule(S, {
		options: {
			hiddenClass: "hide",
			markup: "",
			tNotFound: "Content not found"
		},
		proto: {
			initInline: function() {
				m.types.push(S), d(a + "." + S, function() {
					_()
				})
			},
			getInline: function(t, e) {
				if (_(), t.src) {
					var i, n = m.st.inline,
						o = u(t.src);
					return o.length ? ((i = o[0].parentNode) && i.tagName && (T || (C = n.hiddenClass, T = h(C), C = "mfp-" + C), E = o.after(T).detach().removeClass(C)), m.updateStatus("ready")) : (m.updateStatus("error", n.tNotFound), o = u("<div>")), t.inlineElement = o
				}
				return m.updateStatus("ready"), m._parseMarkup(e, {}, t), e
			}
		}
	});
	var I, D, z, O = "ajax";

	function A(t) {
		var e;
		!m.currTemplate[R] || (e = m.currTemplate[R].find("iframe")).length && (t || (e[0].src = "//about:blank"), m.isIE8 && e.css("display", t ? "block" : "none"))
	}
	u.magnificPopup.registerModule(O, {
		options: {
			settings: null,
			cursor: "mfp-ajax-cur",
			tError: '<a href="%url%">The content</a> could not be loaded.'
		},
		proto: {
			initAjax: function() {
				m.types.push(O), I = m.st.ajax.cursor, d(a + "." + O, L), d("BeforeChange.ajax", L)
			},
			getAjax: function(o) {
				I && u(document.body).addClass(I), m.updateStatus("loading");
				var t = u.extend({
					url: o.src,
					success: function(t, e, i) {
						var n = {
							data: t,
							xhr: i
						};
						p("ParseAjax", n), m.appendContent(u(n.data), O), o.finished = !0, k(), m._setFocus(), setTimeout(function() {
							m.wrap.addClass(b)
						}, 16), m.updateStatus("ready"), p("AjaxContentAdded")
					},
					error: function() {
						k(), o.finished = o.loadError = !0, m.updateStatus("error", m.st.ajax.tError.replace("%url%", o.src))
					}
				}, m.st.ajax.settings);
				return m.req = u.ajax(t), ""
			}
		}
	}), u.magnificPopup.registerModule("image", {
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
				m.types.push("image"), d("Open" + e, function() {
					"image" === m.currItem.type && t.cursor && u(document.body).addClass(t.cursor)
				}), d(a + e, function() {
					t.cursor && u(document.body).removeClass(t.cursor), x.off("resize.mfp")
				}), d("Resize" + e, m.resizeImage), m.isLowIE && d("AfterChange", m.resizeImage)
			},
			resizeImage: function() {
				var t, e = m.currItem;
				e && e.img && m.st.image.verticalFit && (t = 0, m.isLowIE && (t = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", m.wH - t))
			},
			_onImageHasSize: function(t) {
				t.img && (t.hasSize = !0, D && clearInterval(D), t.isCheckingImgSize = !1, p("ImageHasSize", t), t.imgHidden && (m.content && m.content.removeClass("mfp-loading"), t.imgHidden = !1))
			},
			findImageSize: function(e) {
				var i = 0,
					n = e.img[0],
					o = function(t) {
						D && clearInterval(D), D = setInterval(function() {
							return 0 < n.naturalWidth ? void m._onImageHasSize(e) : (200 < i && clearInterval(D), void(3 == ++i ? o(10) : 40 === i ? o(50) : 100 === i && o(500)))
						}, t)
					};
				o(1)
			},
			getImage: function(t, e) {
				var i, n = 0,
					o = function() {
						t && (t.img[0].complete ? (t.img.off(".mfploader"), t === m.currItem && (m._onImageHasSize(t), m.updateStatus("ready")), t.hasSize = !0, t.loaded = !0, p("ImageLoadComplete")) : ++n < 200 ? setTimeout(o, 100) : r())
					},
					r = function() {
						t && (t.img.off(".mfploader"), t === m.currItem && (m._onImageHasSize(t), m.updateStatus("error", s.tError.replace("%url%", t.src))), t.hasSize = !0, t.loaded = !0, t.loadError = !0)
					},
					s = m.st.image,
					a = e.find(".mfp-img");
				return a.length && ((i = document.createElement("img")).className = "mfp-img", t.el && t.el.find("img").length && (i.alt = t.el.find("img").attr("alt")), t.img = u(i).on("load.mfploader", o).on("error.mfploader", r), i.src = t.src, a.is("img") && (t.img = t.img.clone()), 0 < (i = t.img[0]).naturalWidth ? t.hasSize = !0 : i.width || (t.hasSize = !1)), m._parseMarkup(e, {
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
				}, t), m.resizeImage(), t.hasSize ? (D && clearInterval(D), t.loadError ? (e.addClass("mfp-loading"), m.updateStatus("error", s.tError.replace("%url%", t.src))) : (e.removeClass("mfp-loading"), m.updateStatus("ready"))) : (m.updateStatus("loading"), t.loading = !0, t.hasSize || (t.imgHidden = !0, e.addClass("mfp-loading"), m.findImageSize(t))), e
			}
		}
	}), u.magnificPopup.registerModule("zoom", {
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
				var t, e, i, n, o, r, s = m.st.zoom;
				s.enabled && m.supportsTransition && (n = s.duration, o = function(t) {
					var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
						i = "all " + s.duration / 1e3 + "s " + s.easing,
						n = {
							position: "fixed",
							zIndex: 9999,
							left: 0,
							top: 0,
							"-webkit-backface-visibility": "hidden"
						},
						o = "transition";
					return n["-webkit-" + o] = n["-moz-" + o] = n["-o-" + o] = n[o] = i, e.css(n), e
				}, r = function() {
					m.content.css("visibility", "visible")
				}, d("BuildControls.zoom", function() {
					if (m._allowZoom()) {
						if (clearTimeout(e), m.content.css("visibility", "hidden"), !(t = m._getItemToZoom())) return void r();
						(i = o(t)).css(m._getOffset()), m.wrap.append(i), e = setTimeout(function() {
							i.css(m._getOffset(!0)), e = setTimeout(function() {
								r(), setTimeout(function() {
									i.remove(), t = i = null, p("ZoomAnimationEnded")
								}, 16)
							}, n)
						}, 16)
					}
				}), d(l + ".zoom", function() {
					if (m._allowZoom()) {
						if (clearTimeout(e), m.st.removalDelay = n, !t) {
							if (!(t = m._getItemToZoom())) return;
							i = o(t)
						}
						i.css(m._getOffset(!0)), m.wrap.append(i), m.content.css("visibility", "hidden"), setTimeout(function() {
							i.css(m._getOffset())
						}, 16)
					}
				}), d(a + ".zoom", function() {
					m._allowZoom() && (r(), i && i.remove(), t = null)
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
					i = e.offset(),
					n = parseInt(e.css("padding-top"), 10),
					o = parseInt(e.css("padding-bottom"), 10);
				i.top -= u(window).scrollTop() - n;
				var r = {
					width: e.width(),
					height: (w ? e.innerHeight() : e[0].offsetHeight) - o - n
				};
				return void 0 === z && (z = void 0 !== document.createElement("p").style.MozTransform), z ? r["-moz-transform"] = r.transform = "translate(" + i.left + "px," + i.top + "px)" : (r.left = i.left, r.top = i.top), r
			}
		}
	});
	var R = "iframe";

	function j(t) {
		var e = m.items.length;
		return e - 1 < t ? t - e : t < 0 ? e + t : t
	}

	function N(t, e, i) {
		return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
	}
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
				m.types.push(R), d("BeforeChange", function(t, e, i) {
					e !== i && (e === R ? A() : i === R && A(!0))
				}), d(a + "." + R, function() {
					A()
				})
			},
			getIframe: function(t, e) {
				var i = t.src,
					n = m.st.iframe;
				u.each(n.patterns, function() {
					return -1 < i.indexOf(this.index) ? (this.id && (i = "string" == typeof this.id ? i.substr(i.lastIndexOf(this.id) + this.id.length, i.length) : this.id.call(this, i)), i = this.src.replace("%id%", i), !1) : void 0
				});
				var o = {};
				return n.srcAction && (o[n.srcAction] = i), m._parseMarkup(e, o, t), m.updateStatus("ready"), e
			}
		}
	}), u.magnificPopup.registerModule("gallery", {
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
				return m.direction = !0, !(!r || !r.enabled) && (v += " mfp-gallery", d("Open" + t, function() {
					r.navigateByImgClick && m.wrap.on("click" + t, ".mfp-img", function() {
						return 1 < m.items.length ? (m.next(), !1) : void 0
					}), g.on("keydown" + t, function(t) {
						37 === t.keyCode ? m.prev() : 39 === t.keyCode && m.next()
					})
				}), d("UpdateStatus" + t, function(t, e) {
					e.text && (e.text = N(e.text, m.currItem.index, m.items.length))
				}), d(y + t, function(t, e, i, n) {
					var o = m.items.length;
					i.counter = 1 < o ? N(r.tCounter, n.index, o) : ""
				}), d("BuildControls" + t, function() {
					var t, e, i;
					1 < m.items.length && r.arrows && !m.arrowLeft && (t = r.arrowMarkup, e = m.arrowLeft = u(t.replace(/%title%/gi, r.tPrev).replace(/%dir%/gi, "left")).addClass(c), i = m.arrowRight = u(t.replace(/%title%/gi, r.tNext).replace(/%dir%/gi, "right")).addClass(c), e.click(function() {
						m.prev()
					}), i.click(function() {
						m.next()
					}), m.container.append(e.add(i)))
				}), d("Change" + t, function() {
					m._preloadTimeout && clearTimeout(m._preloadTimeout), m._preloadTimeout = setTimeout(function() {
						m.preloadNearbyImages(), m._preloadTimeout = null
					}, 16)
				}), void d(a + t, function() {
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
				for (var t = m.st.gallery.preload, e = Math.min(t[0], m.items.length), i = Math.min(t[1], m.items.length), n = 1; n <= (m.direction ? i : e); n++) m._preloadItem(m.index + n);
				for (n = 1; n <= (m.direction ? e : i); n++) m._preloadItem(m.index - n)
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
	var W = "retina";
	u.magnificPopup.registerModule(W, {
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
				var i, n;
				1 < window.devicePixelRatio && (i = m.st.retina, n = i.ratio, 1 < (n = isNaN(n) ? n() : n) && (d("ImageHasSize." + W, function(t, e) {
					e.img.css({
						"max-width": e.img[0].naturalWidth / n,
						width: "100%"
					})
				}), d("ElementParse." + W, function(t, e) {
					e.src = i.replaceSrc(e, n)
				})))
			}
		}
	}), r()
}),
function(t) {
	"function" == typeof define && define.amd ? define(["jquery", "modernizr"], t) : "object" == typeof exports ? module.exports = t(require("jquery"), window.Modernizr) : window.Shuffle = t(window.jQuery, window.Modernizr)
}(function(d, t, s) {
	"use strict";

	function r(t, e, i) {
		for (var n = 0, o = t.length; n < o; n++)
			if (e.call(i, t[n], n, t) === {}) return
	}

	function i(t, e, i) {
		return setTimeout(d.proxy(t, e), i)
	}

	function a(t) {
		return Math.max.apply(Math, t)
	}

	function n(t) {
		return d.isNumeric(t) ? t : 0
	}
	if ("object" != typeof t) throw new Error("Shuffle.js requires Modernizr.\nhttp://vestride.github.io/Shuffle/#dependencies");

	function l(t, e) {
		this.x = n(t), this.y = n(e)
	}
	var o = t.prefixed("transition"),
		c = t.prefixed("transitionDelay"),
		u = t.prefixed("transitionDuration"),
		h = {
			WebkitTransition: "webkitTransitionEnd",
			transition: "transitionend"
		} [o],
		p = t.prefixed("transform"),
		e = p ? p.replace(/([A-Z])/g, function(t, e) {
			return "-" + e.toLowerCase()
		}).replace(/^ms-/, "-ms-") : "",
		f = t.csstransforms && t.csstransitions,
		m = t.csstransforms3d,
		g = !!window.getComputedStyle,
		v = "shuffle",
		y = window.getComputedStyle || function() {};
	l.equals = function(t, e) {
		return t.x === e.x && t.y === e.y
	};
	var b = function() {
			if (!g) return !1;
			var t = document.body || document.documentElement,
				e = document.createElement("div");
			e.style.cssText = "width:10px;padding:2px;-webkit-box-sizing:border-box;box-sizing:border-box;", t.appendChild(e);
			var i = "10px" === y(e, null).width;
			return t.removeChild(e), i
		}(),
		w = 0,
		x = d(window),
		_ = function(t, e) {
			e = e || {}, d.extend(this, _.options, e, _.settings), this.$el = d(t), this.element = t, this.unique = "shuffle_" + w++, this._fire(_.EventType.LOADING), this._init(), i(function() {
				this.initialized = !0, this._fire(_.EventType.DONE)
			}, this, 16)
		};
	return _.EventType = {
		LOADING: "loading",
		DONE: "done",
		LAYOUT: "layout",
		REMOVED: "removed"
	}, _.ClassName = {
		BASE: v,
		SHUFFLE_ITEM: "shuffle-item",
		FILTERED: "filtered",
		CONCEALED: "concealed"
	}, _.options = {
		group: "all",
		speed: 250,
		easing: "ease-out",
		itemSelector: "",
		sizer: null,
		gutterWidth: 0,
		columnWidth: 0,
		delimeter: null,
		buffer: 0,
		columnThreshold: g ? .01 : .1,
		initialSort: null,
		throttle: function(i, n, o) {
			var r, s, a, l = null,
				c = 0;

			function u() {
				c = !1 === o.leading ? 0 : d.now(), l = null, a = i.apply(r, s), r = s = null
			}
			return o = o || {},
				function() {
					var t = d.now();
					c || !1 !== o.leading || (c = t);
					var e = n - (t - c);
					return r = this, s = arguments, e <= 0 || n < e ? (clearTimeout(l), l = null, c = t, a = i.apply(r, s), r = s = null) : l || !1 === o.trailing || (l = setTimeout(u, e)), a
				}
		},
		throttleTime: 300,
		sequentialFadeDelay: 150,
		supported: f
	}, _.settings = {
		useSizer: !1,
		itemCss: {
			position: "absolute",
			top: 0,
			left: 0,
			visibility: "visible"
		},
		revealAppendedDelay: 300,
		lastSort: {},
		lastFilter: "all",
		enabled: !0,
		destroyed: !1,
		initialized: !1,
		_animations: [],
		_transitions: [],
		_isMovementCanceled: !1,
		styleQueue: []
	}, _.Point = l, _._getItemTransformString = function(t, e) {
		return m ? "translate3d(" + t.x + "px, " + t.y + "px, 0) scale3d(" + e + ", " + e + ", 1)" : "translate(" + t.x + "px, " + t.y + "px) scale(" + e + ")"
	}, _._getNumberStyle = function(t, e, i) {
		if (g) {
			i = i || y(t, null);
			var n = _._getFloat(i[e]);
			return b || "width" !== e ? b || "height" !== e || (n += _._getFloat(i.paddingTop) + _._getFloat(i.paddingBottom) + _._getFloat(i.borderTopWidth) + _._getFloat(i.borderBottomWidth)) : n += _._getFloat(i.paddingLeft) + _._getFloat(i.paddingRight) + _._getFloat(i.borderLeftWidth) + _._getFloat(i.borderRightWidth), n
		}
		return _._getFloat(d(t).css(e))
	}, _._getFloat = function(t) {
		return n(parseFloat(t))
	}, _._getOuterWidth = function(t, e) {
		var i = y(t, null),
			n = _._getNumberStyle(t, "width", i);
		return e && (n += _._getNumberStyle(t, "marginLeft", i) + _._getNumberStyle(t, "marginRight", i)), n
	}, _._getOuterHeight = function(t, e) {
		var i = y(t, null),
			n = _._getNumberStyle(t, "height", i);
		return e && (n += _._getNumberStyle(t, "marginTop", i) + _._getNumberStyle(t, "marginBottom", i)), n
	}, _._skipTransition = function(t, e, i) {
		var n = t.style[u];
		t.style[u] = "0ms", e.call(i), t.offsetWidth, t.style[u] = n
	}, _.prototype._init = function() {
		this.$items = this._getItems(), this.sizer = this._getElementOption(this.sizer), this.sizer && (this.useSizer = !0), this.$el.addClass(_.ClassName.BASE), this._initItems(), x.on("resize.shuffle." + this.unique, this._getResizeFunction());
		var t = this.$el.css(["position", "overflow"]),
			e = _._getOuterWidth(this.element);
		this._validateStyles(t), this._setColumns(e), this.shuffle(this.group, this.initialSort), this.supported && i(function() {
			this._setTransitions(), this.element.style[o] = "height " + this.speed + "ms " + this.easing
		}, this)
	}, _.prototype._getResizeFunction = function() {
		var t = d.proxy(this._onResize, this);
		return this.throttle ? this.throttle(t, this.throttleTime) : t
	}, _.prototype._getElementOption = function(t) {
		return "string" == typeof t ? this.$el.find(t)[0] || null : t && t.nodeType && 1 === t.nodeType ? t : t && t.jquery ? t[0] : null
	}, _.prototype._validateStyles = function(t) {
		"static" === t.position && (this.element.style.position = "relative"), "hidden" !== t.overflow && (this.element.style.overflow = "hidden")
	}, _.prototype._filter = function(t, e) {
		t = t || this.lastFilter, e = e || this.$items;
		var i = this._getFilteredSets(t, e);
		return this._toggleFilterClasses(i.filtered, i.concealed), "string" == typeof(this.lastFilter = t) && (this.group = t), i.filtered
	}, _.prototype._getFilteredSets = function(i, t) {
		var n = d(),
			o = d();
		return "all" === i ? n = t : r(t, function(t) {
			var e = d(t);
			this._doesPassFilter(i, e) ? n = n.add(e) : o = o.add(e)
		}, this), {
			filtered: n,
			concealed: o
		}
	}, _.prototype._doesPassFilter = function(t, e) {
		if (d.isFunction(t)) return t.call(e[0], e, this);
		var i = e.data("groups"),
			n = this.delimeter && !d.isArray(i) ? i.split(this.delimeter) : i;
		return -1 < d.inArray(t, n)
	}, _.prototype._toggleFilterClasses = function(t, e) {
		t.removeClass(_.ClassName.CONCEALED).addClass(_.ClassName.FILTERED), e.removeClass(_.ClassName.FILTERED).addClass(_.ClassName.CONCEALED)
	}, _.prototype._initItems = function(t) {
		(t = t || this.$items).addClass([_.ClassName.SHUFFLE_ITEM, _.ClassName.FILTERED].join(" ")), t.css(this.itemCss).data("point", new l).data("scale", 1)
	}, _.prototype._updateItemCount = function() {
		this.visibleItems = this._getFilteredItems().length
	}, _.prototype._setTransition = function(t) {
		t.style[o] = e + " " + this.speed + "ms " + this.easing + ", opacity " + this.speed + "ms " + this.easing
	}, _.prototype._setTransitions = function(t) {
		r(t = t || this.$items, function(t) {
			this._setTransition(t)
		}, this)
	}, _.prototype._setSequentialDelay = function(t) {
		this.supported && r(t, function(t, e) {
			t.style[c] = "0ms," + (e + 1) * this.sequentialFadeDelay + "ms"
		}, this)
	}, _.prototype._getItems = function() {
		return this.$el.children(this.itemSelector)
	}, _.prototype._getFilteredItems = function() {
		return this.$items.filter("." + _.ClassName.FILTERED)
	}, _.prototype._getConcealedItems = function() {
		return this.$items.filter("." + _.ClassName.CONCEALED)
	}, _.prototype._getColumnSize = function(t, e) {
		var i = d.isFunction(this.columnWidth) ? this.columnWidth(t) : this.useSizer ? _._getOuterWidth(this.sizer) : this.columnWidth ? this.columnWidth : 0 < this.$items.length ? _._getOuterWidth(this.$items[0], !0) : t;
		return 0 === i && (i = t), i + e
	}, _.prototype._getGutterSize = function(t) {
		return d.isFunction(this.gutterWidth) ? this.gutterWidth(t) : this.useSizer ? _._getNumberStyle(this.sizer, "marginLeft") : this.gutterWidth
	}, _.prototype._setColumns = function(t) {
		var e = t || _._getOuterWidth(this.element),
			i = this._getGutterSize(e),
			n = this._getColumnSize(e, i),
			o = (e + i) / n;
		Math.abs(Math.round(o) - o) < this.columnThreshold && (o = Math.round(o)), this.cols = Math.max(Math.floor(o), 1), this.containerWidth = e, this.colWidth = n
	}, _.prototype._setContainerSize = function() {
		this.$el.css("height", this._getContainerSize())
	}, _.prototype._getContainerSize = function() {
		return a(this.positions)
	}, _.prototype._fire = function(t, e) {
		this.$el.trigger(t + "." + v, e && e.length ? e : [this])
	}, _.prototype._resetCols = function() {
		var t = this.cols;
		for (this.positions = []; t--;) this.positions.push(0)
	}, _.prototype._layout = function(t, e) {
		r(t, function(t) {
			this._layoutItem(t, !!e)
		}, this), this._processStyleQueue(), this._setContainerSize()
	}, _.prototype._layoutItem = function(t, e) {
		var i = d(t),
			n = i.data(),
			o = n.point,
			r = n.scale,
			s = {
				width: _._getOuterWidth(t, !0),
				height: _._getOuterHeight(t, !0)
			},
			a = this._getItemPosition(s);
		l.equals(o, a) && 1 === r || (n.point = a, n.scale = 1, this.styleQueue.push({
			$item: i,
			point: a,
			scale: 1,
			opacity: e ? 0 : 1,
			skipTransition: e || 0 === this.speed,
			callfront: function() {
				e || i.css("visibility", "visible")
			},
			callback: function() {
				e && i.css("visibility", "hidden")
			}
		}))
	}, _.prototype._getItemPosition = function(t) {
		for (var e = this._getColumnSpan(t.width, this.colWidth, this.cols), i = this._getColumnSet(e, this.cols), n = this._getShortColumn(i, this.buffer), o = new l(Math.round(this.colWidth * n), Math.round(i[n])), r = i[n] + t.height, s = this.cols + 1 - i.length, a = 0; a < s; a++) this.positions[n + a] = r;
		return o
	}, _.prototype._getColumnSpan = function(t, e, i) {
		var n = t / e;
		return Math.abs(Math.round(n) - n) < this.columnThreshold && (n = Math.round(n)), Math.min(Math.ceil(n), i)
	}, _.prototype._getColumnSet = function(t, e) {
		if (1 === t) return this.positions;
		for (var i = e + 1 - t, n = [], o = 0; o < i; o++) n[o] = a(this.positions.slice(o, o + t));
		return n
	}, _.prototype._getShortColumn = function(t, e) {
		for (var i = Math.min.apply(Math, t), n = 0, o = t.length; n < o; n++)
			if (t[n] >= i - e && t[n] <= i + e) return n;
		return 0
	}, _.prototype._shrink = function(t) {
		r(t || this._getConcealedItems(), function(t) {
			var e = d(t),
				i = e.data();
			.001 !== i.scale && (i.scale = .001, this.styleQueue.push({
				$item: e,
				point: i.point,
				scale: .001,
				opacity: 0,
				callback: function() {
					e.css("visibility", "hidden")
				}
			}))
		}, this)
	}, _.prototype._onResize = function() {
		this.enabled && !this.destroyed && _._getOuterWidth(this.element) !== this.containerWidth && this.update()
	}, _.prototype._getStylesForTransition = function(t) {
		var e = {
			opacity: t.opacity
		};
		return this.supported ? e[p] = _._getItemTransformString(t.point, t.scale) : (e.left = t.point.x, e.top = t.point.y), e
	}, _.prototype._transition = function(t) {
		var e = this._getStylesForTransition(t);
		this._startItemAnimation(t.$item, e, t.callfront || d.noop, t.callback || d.noop)
	}, _.prototype._startItemAnimation = function(t, e, i, n) {
		function o(t) {
			t.target === t.currentTarget && (d(t.target).off(h, o), s._removeTransitionReference(a), n())
		}
		var r, s = this,
			a = {
				$element: t,
				handler: o
			};
		if (i(), !this.initialized) return t.css(e), void n();
		this.supported ? (t.css(e), t.on(h, o), this._transitions.push(a)) : (r = t.stop(!0).animate(e, this.speed, "swing", n), this._animations.push(r.promise()))
	}, _.prototype._processStyleQueue = function(t) {
		this.isTransitioning && this._cancelMovement();
		var e = d();
		r(this.styleQueue, function(t) {
			t.skipTransition ? this._styleImmediately(t) : (e = e.add(t.$item), this._transition(t))
		}, this), 0 < e.length && this.initialized && 0 < this.speed ? (this.isTransitioning = !0, this.supported ? this._whenCollectionDone(e, h, this._movementFinished) : this._whenAnimationsDone(this._movementFinished)) : t || i(this._layoutEnd, this), this.styleQueue.length = 0
	}, _.prototype._cancelMovement = function() {
		this.supported ? r(this._transitions, function(t) {
			t.$element.off(h, t.handler)
		}) : (this._isMovementCanceled = !0, this.$items.stop(!0), this._isMovementCanceled = !1), this._transitions.length = 0, this.isTransitioning = !1
	}, _.prototype._removeTransitionReference = function(t) {
		var e = d.inArray(t, this._transitions); - 1 < e && this._transitions.splice(e, 1)
	}, _.prototype._styleImmediately = function(t) {
		_._skipTransition(t.$item[0], function() {
			t.$item.css(this._getStylesForTransition(t))
		}, this)
	}, _.prototype._movementFinished = function() {
		this.isTransitioning = !1, this._layoutEnd()
	}, _.prototype._layoutEnd = function() {
		this._fire(_.EventType.LAYOUT)
	}, _.prototype._addItems = function(t, e, i) {
		this._initItems(t), this._setTransitions(t), this.$items = this._getItems(), this._shrink(t), r(this.styleQueue, function(t) {
			t.skipTransition = !0
		}), this._processStyleQueue(!0), e ? this._addItemsToEnd(t, i) : this.shuffle(this.lastFilter)
	}, _.prototype._addItemsToEnd = function(t, e) {
		var i = this._filter(null, t).get();
		this._updateItemCount(), this._layout(i, !0), e && this.supported && this._setSequentialDelay(i), this._revealAppended(i)
	}, _.prototype._revealAppended = function(t) {
		i(function() {
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
	}, _.prototype._whenCollectionDone = function(t, e, i) {
		function n(t) {
			t.target === t.currentTarget && (d(t.target).off(e, n), ++o === r && (s._removeTransitionReference(a), i.call(s)))
		}
		var o = 0,
			r = t.length,
			s = this,
			a = {
				$element: t,
				handler: n
			};
		t.on(e, n), this._transitions.push(a)
	}, _.prototype._whenAnimationsDone = function(t) {
		d.when.apply(null, this._animations).always(d.proxy(function() {
			this._animations.length = 0, this._isMovementCanceled || t.call(this)
		}, this))
	}, _.prototype.shuffle = function(t, e) {
		this.enabled && (t = t || "all", this._filter(t), this._updateItemCount(), this._shrink(), this.sort(e))
	}, _.prototype.sort = function(t) {
		var e, i;
		this.enabled && (this._resetCols(), e = t || this.lastSort, i = this._getFilteredItems().sorted(e), this._layout(i), this.lastSort = e)
	}, _.prototype.update = function(t) {
		this.enabled && (t || this._setColumns(), this.sort())
	}, _.prototype.layout = function() {
		this.update(!0)
	}, _.prototype.appended = function(t, e, i) {
		this._addItems(t, !0 === e, !1 !== i)
	}, _.prototype.disable = function() {
		this.enabled = !1
	}, _.prototype.enable = function(t) {
		!(this.enabled = !0) !== t && this.update()
	}, _.prototype.remove = function(t) {
		t.length && t.jquery && (this._toggleFilterClasses(d(), t), this._shrink(t), this.sort(), this.$el.one(_.EventType.LAYOUT + "." + v, d.proxy(function() {
			t.remove(), this.$items = this._getItems(), this._updateItemCount(), this._fire(_.EventType.REMOVED, [t, this]), t = null
		}, this)))
	}, _.prototype.destroy = function() {
		x.off("." + this.unique), this.$el.removeClass(v).removeAttr("style").removeData(v), this.$items.removeAttr("style").removeData("point").removeData("scale").removeClass([_.ClassName.CONCEALED, _.ClassName.FILTERED, _.ClassName.SHUFFLE_ITEM].join(" ")), this.$items = null, this.$el = null, this.sizer = null, this.element = null, this._transitions = null, this.destroyed = !0
	}, d.fn.shuffle = function(i) {
		var n = Array.prototype.slice.call(arguments, 1);
		return this.each(function() {
			var t = d(this),
				e = t.data(v);
			e ? "string" == typeof i && e[i] && e[i].apply(e, n) : (e = new _(this, i), t.data(v, e))
		})
	}, d.fn.sorted = function(t) {
		var o = d.extend({}, d.fn.sorted.defaults, t),
			e = this.get(),
			r = !1;
		return e.length ? o.randomize ? function(t) {
			var e, i, n = t.length;
			if (!n) return t;
			for (; --n;) e = t[i = Math.floor(Math.random() * (n + 1))], t[i] = t[n], t[n] = e;
			return t
		}(e) : (d.isFunction(o.by) && e.sort(function(t, e) {
			if (r) return 0;
			var i = o.by(d(t)),
				n = o.by(d(e));
			return i === s && n === s ? (r = !0, 0) : i < n || "sortFirst" === i || "sortLast" === n ? -1 : n < i || "sortLast" === i || "sortFirst" === n ? 1 : 0
		}), r ? this.get() : (o.reverse && e.reverse(), e)) : []
	}, d.fn.sorted.defaults = {
		reverse: !1,
		by: null,
		randomize: !1
	}, _
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
	var i = [],
		u = i.slice,
		m = i.concat,
		a = i.push,
		o = i.indexOf,
		n = {},
		r = n.toString,
		g = n.hasOwnProperty,
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
			i = C.type(t);
		return "function" !== i && !C.isWindow(t) && (!(1 !== t.nodeType || !e) || "array" === i || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
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
		map: function(i) {
			return this.pushStack(C.map(this, function(t, e) {
				return i.call(t, e, t)
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
				i = +t + (t < 0 ? e : 0);
			return this.pushStack(0 <= i && i < e ? [this[i]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor(null)
		},
		push: a,
		sort: i.sort,
		splice: i.splice
	}, C.extend = C.fn.extend = function() {
		var t, e, i, n, o, r, s = arguments[0] || {},
			a = 1,
			l = arguments.length,
			c = !1;
		for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || C.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
			if (null != (t = arguments[a]))
				for (e in t) i = s[e], s !== (n = t[e]) && (c && n && (C.isPlainObject(n) || (o = C.isArray(n))) ? (r = o ? (o = !1, i && C.isArray(i) ? i : []) : i && C.isPlainObject(i) ? i : {}, s[e] = C.extend(c, r, n)) : void 0 !== n && (s[e] = n));
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
			return !("object" !== C.type(t) || t.nodeType || C.isWindow(t) || t.constructor && !g.call(t.constructor.prototype, "isPrototypeOf"))
		},
		isEmptyObject: function(t) {
			var e;
			for (e in t) return !1;
			return !0
		},
		type: function(t) {
			return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? n[r.call(t)] || "object" : typeof t
		},
		globalEval: function(t) {
			var e, i = eval;
			(t = C.trim(t)) && (1 === t.indexOf("use strict") ? ((e = y.createElement("script")).text = t, y.head.appendChild(e).parentNode.removeChild(e)) : i(t))
		},
		camelCase: function(t) {
			return t.replace(l, "ms-").replace(c, e)
		},
		nodeName: function(t, e) {
			return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
		},
		each: function(t, e, i) {
			var n = 0,
				o = t.length,
				r = d(t);
			if (i) {
				if (r)
					for (; n < o && !1 !== e.apply(t[n], i); n++);
				else
					for (n in t)
						if (!1 === e.apply(t[n], i)) break
			} else if (r)
				for (; n < o && !1 !== e.call(t[n], n, t[n]); n++);
			else
				for (n in t)
					if (!1 === e.call(t[n], n, t[n])) break;
			return t
		},
		trim: function(t) {
			return null == t ? "" : (t + "").replace(s, "")
		},
		makeArray: function(t, e) {
			var i = e || [];
			return null != t && (d(Object(t)) ? C.merge(i, "string" == typeof t ? [t] : t) : a.call(i, t)), i
		},
		inArray: function(t, e, i) {
			return null == e ? -1 : o.call(e, t, i)
		},
		merge: function(t, e) {
			for (var i = +e.length, n = 0, o = t.length; n < i; n++) t[o++] = e[n];
			return t.length = o, t
		},
		grep: function(t, e, i) {
			for (var n = [], o = 0, r = t.length, s = !i; o < r; o++) !e(t[o], o) != s && n.push(t[o]);
			return n
		},
		map: function(t, e, i) {
			var n, o = 0,
				r = t.length,
				s = [];
			if (d(t))
				for (; o < r; o++) null != (n = e(t[o], o, i)) && s.push(n);
			else
				for (o in t) null != (n = e(t[o], o, i)) && s.push(n);
			return m.apply([], s)
		},
		guid: 1,
		proxy: function(t, e) {
			var i, n, o;
			return "string" == typeof e && (i = t[e], e = t, t = i), C.isFunction(t) ? (n = u.call(arguments, 2), (o = function() {
				return t.apply(e || this, n.concat(u.call(arguments)))
			}).guid = t.guid = t.guid || C.guid++, o) : void 0
		},
		now: Date.now,
		support: v
	}), C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
		n["[object " + e + "]"] = e.toLowerCase()
	});
	var h = function(i) {
		function d(t, e, i) {
			var n = "0x" + e - 65536;
			return n != n || i ? e : n < 0 ? String.fromCharCode(65536 + n) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
		}

		function n() {
			v()
		}
		var t, f, w, r, o, m, h, g, x, c, u, v, _, s, y, b, a, p, C, T = "sizzle" + +new Date,
			E = i.document,
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
			R = e.push,
			j = e.slice,
			N = function(t, e) {
				for (var i = 0, n = t.length; i < n; i++)
					if (t[i] === e) return i;
				return -1
			},
			W = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			F = "[\\x20\\t\\r\\n\\f]",
			P = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
			M = P.replace("w", "w#"),
			$ = "\\[" + F + "*(" + P + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + F + "*\\]",
			H = ":(" + P + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
			B = new RegExp(F + "+", "g"),
			q = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
			Y = new RegExp("^" + F + "*," + F + "*"),
			X = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
			U = new RegExp("=" + F + "*([^\\]'\"]*?)" + F + "*\\]", "g"),
			Q = new RegExp(H),
			V = new RegExp("^" + M + "$"),
			K = {
				ID: new RegExp("^#(" + P + ")"),
				CLASS: new RegExp("^\\.(" + P + ")"),
				TAG: new RegExp("^(" + P.replace("w", "w*") + ")"),
				ATTR: new RegExp("^" + $),
				PSEUDO: new RegExp("^" + H),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + W + ")$", "i"),
				needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
			},
			Z = /^(?:input|select|textarea|button)$/i,
			G = /^h\d$/i,
			J = /^[^{]+\{\s*\[native \w/,
			tt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			et = /[+~]/,
			it = /'|\\/g,
			nt = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig");
		try {
			R.apply(e = j.call(E.childNodes), E.childNodes), e[E.childNodes.length].nodeType
		} catch (t) {
			R = {
				apply: e.length ? function(t, e) {
					A.apply(t, j.call(e))
				} : function(t, e) {
					for (var i = t.length, n = 0; t[i++] = e[n++];);
					t.length = i - 1
				}
			}
		}

		function ot(t, e, i, n) {
			var o, r, s, a, l, c, u, d, h, p;
			if ((e ? e.ownerDocument || e : E) !== _ && v(e), i = i || [], a = (e = e || _).nodeType, "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a) return i;
			if (!n && y) {
				if (11 !== a && (o = tt.exec(t)))
					if (s = o[1]) {
						if (9 === a) {
							if (!(r = e.getElementById(s)) || !r.parentNode) return i;
							if (r.id === s) return i.push(r), i
						} else if (e.ownerDocument && (r = e.ownerDocument.getElementById(s)) && C(e, r) && r.id === s) return i.push(r), i
					} else {
						if (o[2]) return R.apply(i, e.getElementsByTagName(t)), i;
						if ((s = o[3]) && f.getElementsByClassName) return R.apply(i, e.getElementsByClassName(s)), i
					} if (f.qsa && (!b || !b.test(t))) {
					if (d = u = T, h = e, p = 1 !== a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
						for (c = m(t), (u = e.getAttribute("id")) ? d = u.replace(it, "\\$&") : e.setAttribute("id", d), d = "[id='" + d + "'] ", l = c.length; l--;) c[l] = d + pt(c[l]);
						h = et.test(t) && dt(e.parentNode) || e, p = c.join(",")
					}
					if (p) try {
						return R.apply(i, h.querySelectorAll(p)), i
					} catch (t) {} finally {
						u || e.removeAttribute("id")
					}
				}
			}
			return g(t.replace(q, "$1"), e, i, n)
		}

		function rt() {
			var i = [];

			function n(t, e) {
				return i.push(t + " ") > w.cacheLength && delete n[i.shift()], n[t + " "] = e
			}
			return n
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
			for (var i = t.split("|"), n = t.length; n--;) w.attrHandle[i[n]] = e
		}

		function ct(t, e) {
			var i = e && t,
				n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || 1 << 31) - (~t.sourceIndex || 1 << 31);
			if (n) return n;
			if (i)
				for (; i = i.nextSibling;)
					if (i === e) return -1;
			return t ? 1 : -1
		}

		function ut(s) {
			return st(function(r) {
				return r = +r, st(function(t, e) {
					for (var i, n = s([], t.length, r), o = n.length; o--;) t[i = n[o]] && (t[i] = !(e[i] = t[i]))
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
				var e, i, l = t ? t.ownerDocument || t : E;
				return l !== _ && 9 === l.nodeType && l.documentElement ? (s = (_ = l).documentElement, (i = l.defaultView) && i !== i.top && (i.addEventListener ? i.addEventListener("unload", n, !1) : i.attachEvent && i.attachEvent("onunload", n)), y = !o(l), f.attributes = at(function(t) {
					return t.className = "i", !t.getAttribute("className")
				}), f.getElementsByTagName = at(function(t) {
					return t.appendChild(l.createComment("")), !t.getElementsByTagName("*").length
				}), f.getElementsByClassName = J.test(l.getElementsByClassName), f.getById = at(function(t) {
					return s.appendChild(t).id = T, !l.getElementsByName || !l.getElementsByName(T).length
				}), f.getById ? (w.find.ID = function(t, e) {
					if (void 0 !== e.getElementById && y) {
						var i = e.getElementById(t);
						return i && i.parentNode ? [i] : []
					}
				}, w.filter.ID = function(t) {
					var e = t.replace(nt, d);
					return function(t) {
						return t.getAttribute("id") === e
					}
				}) : (delete w.find.ID, w.filter.ID = function(t) {
					var i = t.replace(nt, d);
					return function(t) {
						var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
						return e && e.value === i
					}
				}), w.find.TAG = f.getElementsByTagName ? function(t, e) {
					return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : f.qsa ? e.querySelectorAll(t) : void 0
				} : function(t, e) {
					var i, n = [],
						o = 0,
						r = e.getElementsByTagName(t);
					if ("*" !== t) return r;
					for (; i = r[o++];) 1 === i.nodeType && n.push(i);
					return n
				}, w.find.CLASS = f.getElementsByClassName && function(t, e) {
					return y ? e.getElementsByClassName(t) : void 0
				}, a = [], b = [], (f.qsa = J.test(l.querySelectorAll)) && (at(function(t) {
					s.appendChild(t).innerHTML = "<a id='" + T + "'></a><select id='" + T + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && b.push("[*^$]=" + F + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || b.push("\\[" + F + "*(?:value|" + W + ")"), t.querySelectorAll("[id~=" + T + "-]").length || b.push("~="), t.querySelectorAll(":checked").length || b.push(":checked"), t.querySelectorAll("a#" + T + "+*").length || b.push(".#.+[+~]")
				}), at(function(t) {
					var e = l.createElement("input");
					e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && b.push("name" + F + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || b.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), b.push(",.*:")
				})), (f.matchesSelector = J.test(p = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && at(function(t) {
					f.disconnectedMatch = p.call(t, "div"), p.call(t, "[s!='']:x"), a.push("!=", H)
				}), b = b.length && new RegExp(b.join("|")), a = a.length && new RegExp(a.join("|")), e = J.test(s.compareDocumentPosition), C = e || J.test(s.contains) ? function(t, e) {
					var i = 9 === t.nodeType ? t.documentElement : t,
						n = e && e.parentNode;
					return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
				} : function(t, e) {
					if (e)
						for (; e = e.parentNode;)
							if (e === t) return !0;
					return !1
				}, D = e ? function(t, e) {
					if (t === e) return u = !0, 0;
					var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
					return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !f.sortDetached && e.compareDocumentPosition(t) === i ? t === l || t.ownerDocument === E && C(E, t) ? -1 : e === l || e.ownerDocument === E && C(E, e) ? 1 : c ? N(c, t) - N(c, e) : 0 : 4 & i ? -1 : 1)
				} : function(t, e) {
					if (t === e) return u = !0, 0;
					var i, n = 0,
						o = t.parentNode,
						r = e.parentNode,
						s = [t],
						a = [e];
					if (!o || !r) return t === l ? -1 : e === l ? 1 : o ? -1 : r ? 1 : c ? N(c, t) - N(c, e) : 0;
					if (o === r) return ct(t, e);
					for (i = t; i = i.parentNode;) s.unshift(i);
					for (i = e; i = i.parentNode;) a.unshift(i);
					for (; s[n] === a[n];) n++;
					return n ? ct(s[n], a[n]) : s[n] === E ? -1 : a[n] === E ? 1 : 0
				}, l) : _
			}, ot.matches = function(t, e) {
				return ot(t, null, null, e)
			}, ot.matchesSelector = function(t, e) {
				if ((t.ownerDocument || t) !== _ && v(t), e = e.replace(U, "='$1']"), !(!f.matchesSelector || !y || a && a.test(e) || b && b.test(e))) try {
					var i = p.call(t, e);
					if (i || f.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
				} catch (t) {}
				return 0 < ot(e, _, null, [t]).length
			}, ot.contains = function(t, e) {
				return (t.ownerDocument || t) !== _ && v(t), C(t, e)
			}, ot.attr = function(t, e) {
				(t.ownerDocument || t) !== _ && v(t);
				var i = w.attrHandle[e.toLowerCase()],
					n = i && z.call(w.attrHandle, e.toLowerCase()) ? i(t, e, !y) : void 0;
				return void 0 !== n ? n : f.attributes || !y ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
			}, ot.error = function(t) {
				throw new Error("Syntax error, unrecognized expression: " + t)
			}, ot.uniqueSort = function(t) {
				var e, i = [],
					n = 0,
					o = 0;
				if (u = !f.detectDuplicates, c = !f.sortStable && t.slice(0), t.sort(D), u) {
					for (; e = t[o++];) e === t[o] && (n = i.push(o));
					for (; n--;) t.splice(i[n], 1)
				}
				return c = null, t
			}, r = ot.getText = function(t) {
				var e, i = "",
					n = 0,
					o = t.nodeType;
				if (o) {
					if (1 === o || 9 === o || 11 === o) {
						if ("string" == typeof t.textContent) return t.textContent;
						for (t = t.firstChild; t; t = t.nextSibling) i += r(t)
					} else if (3 === o || 4 === o) return t.nodeValue
				} else
					for (; e = t[n++];) i += r(e);
				return i
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
						return t[1] = t[1].replace(nt, d), t[3] = (t[3] || t[4] || t[5] || "").replace(nt, d), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
					},
					CHILD: function(t) {
						return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t
					},
					PSEUDO: function(t) {
						var e, i = !t[6] && t[2];
						return K.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && Q.test(i) && (e = m(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
					}
				},
				filter: {
					TAG: function(t) {
						var e = t.replace(nt, d).toLowerCase();
						return "*" === t ? function() {
							return !0
						} : function(t) {
							return t.nodeName && t.nodeName.toLowerCase() === e
						}
					},
					CLASS: function(t) {
						var e = l[t + " "];
						return e || (e = new RegExp("(^|" + F + ")" + t + "(" + F + "|$)")) && l(t, function(t) {
							return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
						})
					},
					ATTR: function(i, n, o) {
						return function(t) {
							var e = ot.attr(t, i);
							return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === o : "!=" === n ? e !== o : "^=" === n ? o && 0 === e.indexOf(o) : "*=" === n ? o && -1 < e.indexOf(o) : "$=" === n ? o && e.slice(-o.length) === o : "~=" === n ? -1 < (" " + e.replace(B, " ") + " ").indexOf(o) : "|=" === n && (e === o || e.slice(0, o.length + 1) === o + "-"))
						}
					},
					CHILD: function(p, t, e, f, m) {
						var g = "nth" !== p.slice(0, 3),
							v = "last" !== p.slice(-4),
							y = "of-type" === t;
						return 1 === f && 0 === m ? function(t) {
							return !!t.parentNode
						} : function(t, e, i) {
							var n, o, r, s, a, l, c = g != v ? "nextSibling" : "previousSibling",
								u = t.parentNode,
								d = y && t.nodeName.toLowerCase(),
								h = !i && !y;
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
									for (a = (n = (o = u[T] || (u[T] = {}))[p] || [])[0] === S && n[1], s = n[0] === S && n[2], r = a && u.childNodes[a]; r = ++a && r && r[c] || (s = a = 0) || l.pop();)
										if (1 === r.nodeType && ++s && r === t) {
											o[p] = [S, a, s];
											break
										}
								} else if (h && (n = (t[T] || (t[T] = {}))[p]) && n[0] === S) s = n[1];
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
							for (var i, n = s(t, r), o = n.length; o--;) t[i = N(t, n[o])] = !(e[i] = n[o])
						}) : function(t) {
							return s(t, 0, e)
						}) : s
					}
				},
				pseudos: {
					not: st(function(t) {
						var n = [],
							o = [],
							a = h(t.replace(q, "$1"));
						return a[T] ? st(function(t, e, i, n) {
							for (var o, r = a(t, null, n, []), s = t.length; s--;)(o = r[s]) && (t[s] = !(e[s] = o))
						}) : function(t, e, i) {
							return n[0] = t, a(n, null, i, o), n[0] = null, !o.pop()
						}
					}),
					has: st(function(e) {
						return function(t) {
							return 0 < ot(e, t).length
						}
					}),
					contains: st(function(e) {
						return e = e.replace(nt, d),
							function(t) {
								return -1 < (t.textContent || t.innerText || r(t)).indexOf(e)
							}
					}),
					lang: st(function(i) {
						return V.test(i || "") || ot.error("unsupported lang: " + i), i = i.replace(nt, d).toLowerCase(),
							function(t) {
								var e;
								do {
									if (e = y ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === i || 0 === e.indexOf(i + "-")
								} while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
					}),
					target: function(t) {
						var e = i.location && i.location.hash;
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
					eq: ut(function(t, e, i) {
						return [i < 0 ? i + e : i]
					}),
					even: ut(function(t, e) {
						for (var i = 0; i < e; i += 2) t.push(i);
						return t
					}),
					odd: ut(function(t, e) {
						for (var i = 1; i < e; i += 2) t.push(i);
						return t
					}),
					lt: ut(function(t, e, i) {
						for (var n = i < 0 ? i + e : i; 0 <= --n;) t.push(n);
						return t
					}),
					gt: ut(function(t, e, i) {
						for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n);
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
			}) w.pseudos[t] = function(i) {
			return function(t) {
				var e = t.nodeName.toLowerCase();
				return ("input" === e || "button" === e) && t.type === i
			}
		}(t);

		function ht() {}

		function pt(t) {
			for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
			return n
		}

		function ft(s, t, e) {
			var a = t.dir,
				l = e && "parentNode" === a,
				c = k++;
			return t.first ? function(t, e, i) {
				for (; t = t[a];)
					if (1 === t.nodeType || l) return s(t, e, i)
			} : function(t, e, i) {
				var n, o, r = [S, c];
				if (i) {
					for (; t = t[a];)
						if ((1 === t.nodeType || l) && s(t, e, i)) return !0
				} else
					for (; t = t[a];)
						if (1 === t.nodeType || l) {
							if ((n = (o = t[T] || (t[T] = {}))[a]) && n[0] === S && n[1] === c) return r[2] = n[2];
							if ((o[a] = r)[2] = s(t, e, i)) return !0
						}
			}
		}

		function mt(o) {
			return 1 < o.length ? function(t, e, i) {
				for (var n = o.length; n--;)
					if (!o[n](t, e, i)) return !1;
				return !0
			} : o[0]
		}

		function gt(t, e, i, n, o) {
			for (var r, s = [], a = 0, l = t.length, c = null != e; a < l; a++) !(r = t[a]) || i && !i(r, n, o) || (s.push(r), c && e.push(a));
			return s
		}
		return ht.prototype = w.filters = w.pseudos, w.setFilters = new ht, m = ot.tokenize = function(t, e) {
			var i, n, o, r, s, a, l, c = L[t + " "];
			if (c) return e ? 0 : c.slice(0);
			for (s = t, a = [], l = w.preFilter; s;) {
				for (r in i && !(n = Y.exec(s)) || (n && (s = s.slice(n[0].length) || s), a.push(o = [])), i = !1, (n = X.exec(s)) && (i = n.shift(), o.push({
						value: i,
						type: n[0].replace(q, " ")
					}), s = s.slice(i.length)), w.filter) !(n = K[r].exec(s)) || l[r] && !(n = l[r](n)) || (i = n.shift(), o.push({
					value: i,
					type: r,
					matches: n
				}), s = s.slice(i.length));
				if (!i) break
			}
			return e ? s.length : s ? ot.error(t) : L(t, a).slice(0)
		}, h = ot.compile = function(t, e) {
			var i, g, v, y, b, n = [],
				o = [],
				r = I[t + " "];
			if (!r) {
				for (i = (e = e || m(t)).length; i--;)(r = function t(e) {
					for (var o, i, n, r = e.length, s = w.relative[e[0].type], a = s || w.relative[" "], l = s ? 1 : 0, c = ft(function(t) {
							return t === o
						}, a, !0), u = ft(function(t) {
							return -1 < N(o, t)
						}, a, !0), d = [function(t, e, i) {
							var n = !s && (i || e !== x) || ((o = e).nodeType ? c : u)(t, e, i);
							return o = null, n
						}]; l < r; l++)
						if (i = w.relative[e[l].type]) d = [ft(mt(d), i)];
						else {
							if ((i = w.filter[e[l].type].apply(null, e[l].matches))[T]) {
								for (n = ++l; n < r && !w.relative[e[n].type]; n++);
								return function t(p, f, m, g, v, e) {
									return g && !g[T] && (g = t(g)), v && !v[T] && (v = t(v, e)), st(function(t, e, i, n) {
										var o, r, s, a = [],
											l = [],
											c = e.length,
											u = t || function(t, e, i) {
												for (var n = 0, o = e.length; n < o; n++) ot(t, e[n], i);
												return i
											}(f || "*", i.nodeType ? [i] : i, []),
											d = !p || !t && f ? u : gt(u, a, p, i, n),
											h = m ? v || (t ? p : c || g) ? [] : e : d;
										if (m && m(d, h, i, n), g)
											for (o = gt(h, l), g(o, [], i, n), r = o.length; r--;)(s = o[r]) && (h[l[r]] = !(d[l[r]] = s));
										if (t) {
											if (v || p) {
												if (v) {
													for (o = [], r = h.length; r--;)(s = h[r]) && o.push(d[r] = s);
													v(null, h = [], o, n)
												}
												for (r = h.length; r--;)(s = h[r]) && -1 < (o = v ? N(t, s) : a[r]) && (t[o] = !(e[o] = s))
											}
										} else h = gt(h === e ? h.splice(c, h.length) : h), v ? v(null, e, h, n) : R.apply(e, h)
									})
								}(1 < l && mt(d), 1 < l && pt(e.slice(0, l - 1).concat({
									value: " " === e[l - 2].type ? "*" : ""
								})).replace(q, "$1"), i, l < n && t(e.slice(l, n)), n < r && t(e = e.slice(n)), n < r && pt(e))
							}
							d.push(i)
						} return mt(d)
				}(e[i]))[T] ? n.push(r) : o.push(r);
				(r = I(t, (g = o, y = 0 < (v = n).length, b = 0 < g.length, y ? st(s) : s))).selector = t
			}

			function s(t, e, i, n, o) {
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
							if (a(r, e, i)) {
								n.push(r);
								break
							} o && (S = f)
					}
					y && ((r = !a && r) && l--, t && u.push(r))
				}
				if (l += c, y && c !== l) {
					for (s = 0; a = v[s++];) a(u, d, e, i);
					if (t) {
						if (0 < l)
							for (; c--;) u[c] || d[c] || (d[c] = O.call(n));
						d = gt(d)
					}
					R.apply(n, d), o && !t && 0 < d.length && 1 < l + v.length && ot.uniqueSort(n)
				}
				return o && (S = f, x = h), u
			}
			return r
		}, g = ot.select = function(t, e, i, n) {
			var o, r, s, a, l, c = "function" == typeof t && t,
				u = !n && m(t = c.selector || t);
			if (i = i || [], 1 === u.length) {
				if (2 < (r = u[0] = u[0].slice(0)).length && "ID" === (s = r[0]).type && f.getById && 9 === e.nodeType && y && w.relative[r[1].type]) {
					if (!(e = (w.find.ID(s.matches[0].replace(nt, d), e) || [])[0])) return i;
					c && (e = e.parentNode), t = t.slice(r.shift().value.length)
				}
				for (o = K.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !w.relative[a = s.type]);)
					if ((l = w.find[a]) && (n = l(s.matches[0].replace(nt, d), et.test(r[0].type) && dt(e.parentNode) || e))) {
						if (r.splice(o, 1), !(t = n.length && pt(r))) return R.apply(i, n), i;
						break
					}
			}
			return (c || h(t, u))(n, e, !y, i, et.test(t) && dt(e.parentNode) || e), i
		}, f.sortStable = T.split("").sort(D).join("") === T, f.detectDuplicates = !!u, v(), f.sortDetached = at(function(t) {
			return 1 & t.compareDocumentPosition(_.createElement("div"))
		}), at(function(t) {
			return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
		}) || lt("type|href|height|width", function(t, e, i) {
			return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
		}), f.attributes && at(function(t) {
			return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
		}) || lt("value", function(t, e, i) {
			return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
		}), at(function(t) {
			return null == t.getAttribute("disabled")
		}) || lt(W, function(t, e, i) {
			var n;
			return i ? void 0 : !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
		}), ot
	}(f);
	C.find = h, C.expr = h.selectors, C.expr[":"] = C.expr.pseudos, C.unique = h.uniqueSort, C.text = h.getText, C.isXMLDoc = h.isXML, C.contains = h.contains;
	var p = C.expr.match.needsContext,
		b = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		w = /^.[^:#\[\.,]*$/;

	function x(t, i, n) {
		if (C.isFunction(i)) return C.grep(t, function(t, e) {
			return !!i.call(t, e, t) !== n
		});
		if (i.nodeType) return C.grep(t, function(t) {
			return t === i !== n
		});
		if ("string" == typeof i) {
			if (w.test(i)) return C.filter(i, t, n);
			i = C.filter(i, t)
		}
		return C.grep(t, function(t) {
			return 0 <= o.call(i, t) !== n
		})
	}
	C.filter = function(t, e, i) {
		var n = e[0];
		return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? C.find.matchesSelector(n, t) ? [n] : [] : C.find.matches(t, C.grep(e, function(t) {
			return 1 === t.nodeType
		}))
	}, C.fn.extend({
		find: function(t) {
			var e, i = this.length,
				n = [],
				o = this;
			if ("string" != typeof t) return this.pushStack(C(t).filter(function() {
				for (e = 0; e < i; e++)
					if (C.contains(o[e], this)) return !0
			}));
			for (e = 0; e < i; e++) C.find(t, o[e], n);
			return (n = this.pushStack(1 < i ? C.unique(n) : n)).selector = this.selector ? this.selector + " " + t : t, n
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
		var i, n;
		if (!t) return this;
		if ("string" != typeof t) return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : C.isFunction(t) ? void 0 !== _.ready ? _.ready(t) : t(C) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), C.makeArray(t, this));
		if (!(i = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : T.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || _).find(t) : this.constructor(e).find(t);
		if (i[1]) {
			if (e = e instanceof C ? e[0] : e, C.merge(this, C.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : y, !0)), b.test(i[1]) && C.isPlainObject(e))
				for (i in e) C.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
			return this
		}
		return (n = y.getElementById(i[2])) && n.parentNode && (this.length = 1, this[0] = n), this.context = y, this.selector = t, this
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
		dir: function(t, e, i) {
			for (var n = [], o = void 0 !== i;
				(t = t[e]) && 9 !== t.nodeType;)
				if (1 === t.nodeType) {
					if (o && C(t).is(i)) break;
					n.push(t)
				} return n
		},
		sibling: function(t, e) {
			for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
			return i
		}
	}), C.fn.extend({
		has: function(t) {
			var e = C(t, this),
				i = e.length;
			return this.filter(function() {
				for (var t = 0; t < i; t++)
					if (C.contains(this, e[t])) return !0
			})
		},
		closest: function(t, e) {
			for (var i, n = 0, o = this.length, r = [], s = p.test(t) || "string" != typeof t ? C(t, e || this.context) : 0; n < o; n++)
				for (i = this[n]; i && i !== e; i = i.parentNode)
					if (i.nodeType < 11 && (s ? -1 < s.index(i) : 1 === i.nodeType && C.find.matchesSelector(i, t))) {
						r.push(i);
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
		parentsUntil: function(t, e, i) {
			return C.dir(t, "parentNode", i)
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
		nextUntil: function(t, e, i) {
			return C.dir(t, "nextSibling", i)
		},
		prevUntil: function(t, e, i) {
			return C.dir(t, "previousSibling", i)
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
	}, function(n, o) {
		C.fn[n] = function(t, e) {
			var i = C.map(this, o, t);
			return "Until" !== n.slice(-5) && (e = t), e && "string" == typeof e && (i = C.filter(e, i)), 1 < this.length && (S[n] || C.unique(i), E.test(n) && i.reverse()), this.pushStack(i)
		}
	});
	var L, I = /\S+/g,
		D = {};

	function z() {
		y.removeEventListener("DOMContentLoaded", z, !1), f.removeEventListener("load", z, !1), C.ready()
	}
	C.Callbacks = function(o) {
		var i;
		o = "string" == typeof o ? D[o] || (i = D[o] = {}, C.each(o.match(I) || [], function(t, e) {
			i[e] = !0
		}), i) : C.extend({}, o);
		var e, n, r, s, a, l, c = [],
			u = !o.once && [],
			d = function(t) {
				for (e = o.memory && t, n = !0, l = s || 0, s = 0, a = c.length, r = !0; c && l < a; l++)
					if (!1 === c[l].apply(t[0], t[1]) && o.stopOnFalse) {
						e = !1;
						break
					} r = !1, c && (u ? u.length && d(u.shift()) : e ? c = [] : h.disable())
			},
			h = {
				add: function() {
					var t;
					return c && (t = c.length, function n(t) {
						C.each(t, function(t, e) {
							var i = C.type(e);
							"function" === i ? o.unique && h.has(e) || c.push(e) : e && e.length && "string" !== i && n(e)
						})
					}(arguments), r ? a = c.length : e && (s = t, d(e))), this
				},
				remove: function() {
					return c && C.each(arguments, function(t, e) {
						for (var i; - 1 < (i = C.inArray(e, c, i));) c.splice(i, 1), r && (i <= a && a--, i <= l && l--)
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
					return !c || n && !u || (e = [t, (e = e || []).slice ? e.slice() : e], r ? u.push(e) : d(e)), this
				},
				fire: function() {
					return h.fireWith(this, arguments), this
				},
				fired: function() {
					return !!n
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
						return C.Deferred(function(n) {
							C.each(r, function(t, e) {
								var i = C.isFunction(o[t]) && o[t];
								a[e[1]](function() {
									var t = i && i.apply(this, arguments);
									t && C.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[e[0] + "With"](this === s ? n.promise() : this, i ? [t] : arguments)
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
				var i = e[2],
					n = e[3];
				s[e[1]] = i.add, n && i.add(function() {
					o = n
				}, r[1 ^ t][2].disable, r[2][2].lock), a[e[0]] = function() {
					return a[e[0] + "With"](this === a ? s : this, arguments), this
				}, a[e[0] + "With"] = i.fireWith
			}), s.promise(a), t && t.call(a, a), a
		},
		when: function(t) {
			function e(e, i, n) {
				return function(t) {
					i[e] = this, n[e] = 1 < arguments.length ? u.call(arguments) : t, n === o ? c.notifyWith(i, n) : --l || c.resolveWith(i, n)
				}
			}
			var o, i, n, r = 0,
				s = u.call(arguments),
				a = s.length,
				l = 1 !== a || t && C.isFunction(t.promise) ? a : 0,
				c = 1 === l ? t : C.Deferred();
			if (1 < a)
				for (o = new Array(a), i = new Array(a), n = new Array(a); r < a; r++) s[r] && C.isFunction(s[r].promise) ? s[r].promise().done(e(r, n, s)).fail(c.reject).progress(e(r, i, o)) : --l;
			return l || c.resolveWith(n, s), c.promise()
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
			(!0 === t ? --C.readyWait : C.isReady) || (C.isReady = !0) !== t && 0 < --C.readyWait || (L.resolveWith(y, [C]), C.fn.triggerHandler && (C(y).triggerHandler("ready"), C(y).off("ready")))
		}
	}), C.ready.promise = function(t) {
		return L || (L = C.Deferred(), "complete" === y.readyState ? setTimeout(C.ready) : (y.addEventListener("DOMContentLoaded", z, !1), f.addEventListener("load", z, !1))), L.promise(t)
	}, C.ready.promise();
	var O = C.access = function(t, e, i, n, o, r, s) {
		var a = 0,
			l = t.length,
			c = null == i;
		if ("object" === C.type(i))
			for (a in o = !0, i) C.access(t, e, a, i[a], !0, r, s);
		else if (void 0 !== n && (o = !0, C.isFunction(n) || (s = !0), c && (e = s ? (e.call(t, n), null) : (c = e, function(t, e, i) {
				return c.call(C(t), i)
			})), e))
			for (; a < l; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
		return o ? t : c ? e.call(t) : l ? e(t[0], i) : r
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
			var i = {},
				n = e[this.expando];
			if (!n) {
				n = A.uid++;
				try {
					i[this.expando] = {
						value: n
					}, Object.defineProperties(e, i)
				} catch (t) {
					i[this.expando] = n, C.extend(e, i)
				}
			}
			return this.cache[n] || (this.cache[n] = {}), n
		},
		set: function(t, e, i) {
			var n, o = this.key(t),
				r = this.cache[o];
			if ("string" == typeof e) r[e] = i;
			else if (C.isEmptyObject(r)) C.extend(this.cache[o], e);
			else
				for (n in e) r[n] = e[n];
			return r
		},
		get: function(t, e) {
			var i = this.cache[this.key(t)];
			return void 0 === e ? i : i[e]
		},
		access: function(t, e, i) {
			var n;
			return void 0 === e || e && "string" == typeof e && void 0 === i ? void 0 !== (n = this.get(t, e)) ? n : this.get(t, C.camelCase(e)) : (this.set(t, e, i), void 0 !== i ? i : e)
		},
		remove: function(t, e) {
			var i, n, o, r = this.key(t),
				s = this.cache[r];
			if (void 0 === e) this.cache[r] = {};
			else {
				i = (n = C.isArray(e) ? e.concat(e.map(C.camelCase)) : (o = C.camelCase(e), e in s ? [e, o] : (n = o) in s ? [n] : n.match(I) || [])).length;
				for (; i--;) delete s[n[i]]
			}
		},
		hasData: function(t) {
			return !C.isEmptyObject(this.cache[t[this.expando]] || {})
		},
		discard: function(t) {
			t[this.expando] && delete this.cache[t[this.expando]]
		}
	};
	var R = new A,
		j = new A,
		N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		W = /([A-Z])/g;

	function F(t, e, i) {
		var n;
		if (void 0 === i && 1 === t.nodeType)
			if (n = "data-" + e.replace(W, "-$1").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) {
				try {
					i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : N.test(i) ? C.parseJSON(i) : i)
				} catch (t) {}
				j.set(t, e, i)
			} else i = void 0;
		return i
	}

	function P(t, e) {
		return t = e || t, "none" === C.css(t, "display") || !C.contains(t.ownerDocument, t)
	}
	C.extend({
		hasData: function(t) {
			return j.hasData(t) || R.hasData(t)
		},
		data: function(t, e, i) {
			return j.access(t, e, i)
		},
		removeData: function(t, e) {
			j.remove(t, e)
		},
		_data: function(t, e, i) {
			return R.access(t, e, i)
		},
		_removeData: function(t, e) {
			R.remove(t, e)
		}
	}), C.fn.extend({
		data: function(n, t) {
			var e, i, o, r = this[0],
				s = r && r.attributes;
			if (void 0 !== n) return "object" == typeof n ? this.each(function() {
				j.set(this, n)
			}) : O(this, function(e) {
				var t, i = C.camelCase(n);
				if (r && void 0 === e) {
					if (void 0 !== (t = j.get(r, n))) return t;
					if (void 0 !== (t = j.get(r, i))) return t;
					if (void 0 !== (t = F(r, i, void 0))) return t
				} else this.each(function() {
					var t = j.get(this, i);
					j.set(this, i, e), -1 !== n.indexOf("-") && void 0 !== t && j.set(this, n, e)
				})
			}, null, t, 1 < arguments.length, null, !0);
			if (this.length && (o = j.get(r), 1 === r.nodeType && !R.get(r, "hasDataAttrs"))) {
				for (e = s.length; e--;) s[e] && 0 === (i = s[e].name).indexOf("data-") && (i = C.camelCase(i.slice(5)), F(r, i, o[i]));
				R.set(r, "hasDataAttrs", !0)
			}
			return o
		},
		removeData: function(t) {
			return this.each(function() {
				j.remove(this, t)
			})
		}
	}), C.extend({
		queue: function(t, e, i) {
			var n;
			return t ? (e = (e || "fx") + "queue", n = R.get(t, e), i && (!n || C.isArray(i) ? n = R.access(t, e, C.makeArray(i)) : n.push(i)), n || []) : void 0
		},
		dequeue: function(t, e) {
			e = e || "fx";
			var i = C.queue(t, e),
				n = i.length,
				o = i.shift(),
				r = C._queueHooks(t, e);
			"inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete r.stop, o.call(t, function() {
				C.dequeue(t, e)
			}, r)), !n && r && r.empty.fire()
		},
		_queueHooks: function(t, e) {
			var i = e + "queueHooks";
			return R.get(t, i) || R.access(t, i, {
				empty: C.Callbacks("once memory").add(function() {
					R.remove(t, [e + "queue", i])
				})
			})
		}
	}), C.fn.extend({
		queue: function(e, i) {
			var t = 2;
			return "string" != typeof e && (i = e, e = "fx", t--), arguments.length < t ? C.queue(this[0], e) : void 0 === i ? this : this.each(function() {
				var t = C.queue(this, e, i);
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
			function i() {
				--o || r.resolveWith(s, [s])
			}
			var n, o = 1,
				r = C.Deferred(),
				s = this,
				a = this.length;
			for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(n = R.get(s[a], t + "queueHooks")) && n.empty && (o++, n.empty.add(i));
			return i(), r.promise(e)
		}
	});
	var M, $ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		H = ["Top", "Right", "Bottom", "Left"],
		B = /^(?:checkbox|radio)$/i,
		q = y.createDocumentFragment().appendChild(y.createElement("div"));
	(M = y.createElement("input")).setAttribute("type", "radio"), M.setAttribute("checked", "checked"), M.setAttribute("name", "t"), q.appendChild(M), v.checkClone = q.cloneNode(!0).cloneNode(!0).lastChild.checked, q.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!q.cloneNode(!0).lastChild.defaultValue;
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
		add: function(e, t, i, n, o) {
			var r, s, a, l, c, u, d, h, p, f, m, g = R.get(e);
			if (g)
				for (i.handler && (i = (r = i).handler, o = r.selector), i.guid || (i.guid = C.guid++), (l = g.events) || (l = g.events = {}), (s = g.handle) || (s = g.handle = function(t) {
						return typeof C != Y && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0
					}), c = (t = (t || "").match(I) || [""]).length; c--;) p = m = (a = V.exec(t[c]) || [])[1], f = (a[2] || "").split(".").sort(), p && (d = C.event.special[p] || {}, p = (o ? d.delegateType : d.bindType) || p, d = C.event.special[p] || {}, u = C.extend({
					type: p,
					origType: m,
					data: n,
					handler: i,
					guid: i.guid,
					selector: o,
					needsContext: o && C.expr.match.needsContext.test(o),
					namespace: f.join(".")
				}, r), (h = l[p]) || ((h = l[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, n, f, s) || e.addEventListener && e.addEventListener(p, s, !1)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = i.guid)), o ? h.splice(h.delegateCount++, 0, u) : h.push(u), C.event.global[p] = !0)
		},
		remove: function(t, e, i, n, o) {
			var r, s, a, l, c, u, d, h, p, f, m, g = R.hasData(t) && R.get(t);
			if (g && (l = g.events)) {
				for (c = (e = (e || "").match(I) || [""]).length; c--;)
					if (p = m = (a = V.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
						for (d = C.event.special[p] || {}, h = l[p = (n ? d.delegateType : d.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = r = h.length; r--;) u = h[r], !o && m !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (h.splice(r, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(t, u));
						s && !h.length && (d.teardown && !1 !== d.teardown.call(t, f, g.handle) || C.removeEvent(t, p, g.handle), delete l[p])
					} else
						for (p in l) C.event.remove(t, p + e[c], i, n, !0);
				C.isEmptyObject(l) && (delete g.handle, R.remove(t, "events"))
			}
		},
		trigger: function(t, e, i, n) {
			var o, r, s, a, l, c, u = [i || y],
				d = g.call(t, "type") ? t.type : t,
				h = g.call(t, "namespace") ? t.namespace.split(".") : [],
				p = r = i = i || y;
			if (3 !== i.nodeType && 8 !== i.nodeType && !Q.test(d + C.event.triggered) && (0 <= d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), a = d.indexOf(":") < 0 && "on" + d, (t = t[C.expando] ? t : new C.Event(d, "object" == typeof t && t)).isTrigger = n ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), e = null == e ? [t] : C.makeArray(e, [t]), c = C.event.special[d] || {}, n || !c.trigger || !1 !== c.trigger.apply(i, e))) {
				if (!n && !c.noBubble && !C.isWindow(i)) {
					for (s = c.delegateType || d, Q.test(s + d) || (p = p.parentNode); p; p = p.parentNode) u.push(p), r = p;
					r === (i.ownerDocument || y) && u.push(r.defaultView || r.parentWindow || f)
				}
				for (o = 0;
					(p = u[o++]) && !t.isPropagationStopped();) t.type = 1 < o ? s : c.bindType || d, (l = (R.get(p, "events") || {})[t.type] && R.get(p, "handle")) && l.apply(p, e), (l = a && p[a]) && l.apply && C.acceptData(p) && (t.result = l.apply(p, e), !1 === t.result && t.preventDefault());
				return t.type = d, n || t.isDefaultPrevented() || c._default && !1 !== c._default.apply(u.pop(), e) || !C.acceptData(i) || a && C.isFunction(i[d]) && !C.isWindow(i) && ((r = i[a]) && (i[a] = null), i[C.event.triggered = d](), C.event.triggered = void 0, r && (i[a] = r)), t.result
			}
		},
		dispatch: function(t) {
			t = C.event.fix(t);
			var e, i, n, o, r, s = [],
				a = u.call(arguments),
				l = (R.get(this, "events") || {})[t.type] || [],
				c = C.event.special[t.type] || {};
			if ((a[0] = t).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
				for (s = C.event.handlers.call(this, t, l), e = 0;
					(o = s[e++]) && !t.isPropagationStopped();)
					for (t.currentTarget = o.elem, i = 0;
						(r = o.handlers[i++]) && !t.isImmediatePropagationStopped();) t.namespace_re && !t.namespace_re.test(r.namespace) || (t.handleObj = r, t.data = r.data, void 0 !== (n = ((C.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (t.result = n) && (t.preventDefault(), t.stopPropagation()));
				return c.postDispatch && c.postDispatch.call(this, t), t.result
			}
		},
		handlers: function(t, e) {
			var i, n, o, r, s = [],
				a = e.delegateCount,
				l = t.target;
			if (a && l.nodeType && (!t.button || "click" !== t.type))
				for (; l !== this; l = l.parentNode || this)
					if (!0 !== l.disabled || "click" !== t.type) {
						for (n = [], i = 0; i < a; i++) void 0 === n[o = (r = e[i]).selector + " "] && (n[o] = r.needsContext ? 0 <= C(o, this).index(l) : C.find(o, this, null, [l]).length), n[o] && n.push(r);
						n.length && s.push({
							elem: l,
							handlers: n
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
				var i, n, o, r = e.button;
				return null == t.pageX && null != e.clientX && (n = (i = t.target.ownerDocument || y).documentElement, o = i.body, t.pageX = e.clientX + (n && n.scrollLeft || o && o.scrollLeft || 0) - (n && n.clientLeft || o && o.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || o && o.scrollTop || 0) - (n && n.clientTop || o && o.clientTop || 0)), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
			}
		},
		fix: function(t) {
			if (t[C.expando]) return t;
			var e, i, n, o = t.type,
				r = t,
				s = this.fixHooks[o];
			for (s || (this.fixHooks[o] = s = U.test(o) ? this.mouseHooks : X.test(o) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, t = new C.Event(r), e = n.length; e--;) t[i = n[e]] = r[i];
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
		simulate: function(t, e, i, n) {
			var o = C.extend(new C.Event, i, {
				type: t,
				isSimulated: !0,
				originalEvent: {}
			});
			n ? C.event.trigger(o, null, e) : C.event.dispatch.call(e, o), o.isDefaultPrevented() && i.preventDefault()
		}
	}, C.removeEvent = function(t, e, i) {
		t.removeEventListener && t.removeEventListener(e, i, !1)
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
				var e, i = t.relatedTarget,
					n = t.handleObj;
				return i && (i === this || C.contains(this, i)) || (t.type = n.origType, e = n.handler.apply(this, arguments), t.type = o), e
			}
		}
	}), v.focusinBubbles || C.each({
		focus: "focusin",
		blur: "focusout"
	}, function(i, n) {
		function o(t) {
			C.event.simulate(n, t.target, C.event.fix(t), !0)
		}
		C.event.special[n] = {
			setup: function() {
				var t = this.ownerDocument || this,
					e = R.access(t, n);
				e || t.addEventListener(i, o, !0), R.access(t, n, (e || 0) + 1)
			},
			teardown: function() {
				var t = this.ownerDocument || this,
					e = R.access(t, n) - 1;
				e ? R.access(t, n, e) : (t.removeEventListener(i, o, !0), R.remove(t, n))
			}
		}
	}), C.fn.extend({
		on: function(t, e, i, n, o) {
			var r, s;
			if ("object" == typeof t) {
				for (s in "string" != typeof e && (i = i || e, e = void 0), t) this.on(s, e, i, t[s], o);
				return this
			}
			if (null == i && null == n ? (n = e, i = e = void 0) : null == n && ("string" == typeof e ? (n = i, i = void 0) : (n = i, i = e, e = void 0)), !1 === n) n = Z;
			else if (!n) return this;
			return 1 === o && (r = n, (n = function(t) {
				return C().off(t), r.apply(this, arguments)
			}).guid = r.guid || (r.guid = C.guid++)), this.each(function() {
				C.event.add(this, t, n, i, e)
			})
		},
		one: function(t, e, i, n) {
			return this.on(t, e, i, n, 1)
		},
		off: function(t, e, i) {
			var n, o;
			if (t && t.preventDefault && t.handleObj) return n = t.handleObj, C(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
			if ("object" != typeof t) return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = Z), this.each(function() {
				C.event.remove(this, t, i, e)
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
			var i = this[0];
			return i ? C.event.trigger(t, e, i, !0) : void 0
		}
	});
	var J = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		tt = /<([\w:]+)/,
		et = /<|&#?\w+;/,
		it = /<(?:script|style|link)/i,
		nt = /checked\s*(?:[^=]|=\s*.checked.)/i,
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
		for (var i = 0, n = t.length; i < n; i++) R.set(t[i], "globalEval", !e || R.get(e[i], "globalEval"))
	}

	function ht(t, e) {
		var i, n, o, r, s, a, l, c;
		if (1 === e.nodeType) {
			if (R.hasData(t) && (r = R.access(t), s = R.set(e, r), c = r.events))
				for (o in delete s.handle, s.events = {}, c)
					for (i = 0, n = c[o].length; i < n; i++) C.event.add(e, o, c[o][i]);
			j.hasData(t) && (a = j.access(t), l = C.extend({}, a), j.set(e, l))
		}
	}

	function pt(t, e) {
		var i = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
		return void 0 === e || e && C.nodeName(t, e) ? C.merge([t], i) : i
	}
	at.optgroup = at.option, at.tbody = at.tfoot = at.colgroup = at.caption = at.thead, at.th = at.td, C.extend({
		clone: function(t, e, i) {
			var n, o, r, s, a, l, c, u = t.cloneNode(!0),
				d = C.contains(t.ownerDocument, t);
			if (!(v.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || C.isXMLDoc(t)))
				for (s = pt(u), n = 0, o = (r = pt(t)).length; n < o; n++) a = r[n], "input" === (c = (l = s[n]).nodeName.toLowerCase()) && B.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
			if (e)
				if (i)
					for (r = r || pt(t), s = s || pt(u), n = 0, o = r.length; n < o; n++) ht(r[n], s[n]);
				else ht(t, u);
			return 0 < (s = pt(u, "script")).length && dt(s, !d && pt(t, "script")), u
		},
		buildFragment: function(t, e, i, n) {
			for (var o, r, s, a, l, c, u = e.createDocumentFragment(), d = [], h = 0, p = t.length; h < p; h++)
				if ((o = t[h]) || 0 === o)
					if ("object" === C.type(o)) C.merge(d, o.nodeType ? [o] : o);
					else if (et.test(o)) {
				for (r = r || u.appendChild(e.createElement("div")), s = (tt.exec(o) || ["", ""])[1].toLowerCase(), a = at[s] || at._default, r.innerHTML = a[1] + o.replace(J, "<$1></$2>") + a[2], c = a[0]; c--;) r = r.lastChild;
				C.merge(d, r.childNodes), (r = u.firstChild).textContent = ""
			} else d.push(e.createTextNode(o));
			for (u.textContent = "", h = 0; o = d[h++];)
				if ((!n || -1 === C.inArray(o, n)) && (l = C.contains(o.ownerDocument, o), r = pt(u.appendChild(o), "script"), l && dt(r), i))
					for (c = 0; o = r[c++];) ot.test(o.type || "") && i.push(o);
			return u
		},
		cleanData: function(t) {
			for (var e, i, n, o, r = C.event.special, s = 0; void 0 !== (i = t[s]); s++) {
				if (C.acceptData(i) && (o = i[R.expando]) && (e = R.cache[o])) {
					if (e.events)
						for (n in e.events) r[n] ? C.event.remove(i, n) : C.removeEvent(i, n, e.handle);
					R.cache[o] && delete R.cache[o]
				}
				delete j.cache[i[j.expando]]
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
			for (var i, n = t ? C.filter(t, this) : this, o = 0; null != (i = n[o]); o++) e || 1 !== i.nodeType || C.cleanData(pt(i)), i.parentNode && (e && C.contains(i.ownerDocument, i) && dt(pt(i, "script")), i.parentNode.removeChild(i));
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
					i = 0,
					n = this.length;
				if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
				if ("string" == typeof t && !it.test(t) && !at[(tt.exec(t) || ["", ""])[1].toLowerCase()]) {
					t = t.replace(J, "<$1></$2>");
					try {
						for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (C.cleanData(pt(e, !1)), e.innerHTML = t);
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
		domManip: function(i, n) {
			i = m.apply([], i);
			var t, e, o, r, s, a, l = 0,
				c = this.length,
				u = this,
				d = c - 1,
				h = i[0],
				p = C.isFunction(h);
			if (p || 1 < c && "string" == typeof h && !v.checkClone && nt.test(h)) return this.each(function(t) {
				var e = u.eq(t);
				p && (i[0] = h.call(this, t, e.html())), e.domManip(i, n)
			});
			if (c && (e = (t = C.buildFragment(i, this[0].ownerDocument, !1, this)).firstChild, 1 === t.childNodes.length && (t = e), e)) {
				for (r = (o = C.map(pt(t, "script"), ct)).length; l < c; l++) s = t, l !== d && (s = C.clone(s, !0, !0), r && C.merge(o, pt(s, "script"))), n.call(this[l], s, l);
				if (r)
					for (a = o[o.length - 1].ownerDocument, C.map(o, ut), l = 0; l < r; l++) s = o[l], ot.test(s.type || "") && !R.access(s, "globalEval") && C.contains(a, s) && (s.src ? C._evalUrl && C._evalUrl(s.src) : C.globalEval(s.textContent.replace(st, "")))
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
			for (var e, i = [], n = C(t), o = n.length - 1, r = 0; r <= o; r++) e = r === o ? this : this.clone(!0), C(n[r])[s](e), a.apply(i, e.get());
			return this.pushStack(i)
		}
	});
	var ft, mt = {};

	function gt(t, e) {
		var i, n = C(e.createElement(t)).appendTo(e.body),
			o = f.getDefaultComputedStyle && (i = f.getDefaultComputedStyle(n[0])) ? i.display : C.css(n[0], "display");
		return n.detach(), o
	}

	function vt(t) {
		var e = y,
			i = mt[t];
		return i || ("none" !== (i = gt(t, e)) && i || ((e = (ft = (ft || C("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentDocument).write(), e.close(), i = gt(t, e), ft.detach()), mt[t] = i), i
	}
	var yt, bt, wt, xt, _t, Ct = /^margin/,
		Tt = new RegExp("^(" + $ + ")(?!px)[a-z%]+$", "i"),
		Et = function(t) {
			return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : f.getComputedStyle(t, null)
		};

	function St(t, e, i) {
		var n, o, r, s, a = t.style;
		return (i = i || Et(t)) && (s = i.getPropertyValue(e) || i[e]), i && ("" !== s || C.contains(t.ownerDocument, t) || (s = C.style(t, e)), Tt.test(s) && Ct.test(e) && (n = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = i.width, a.width = n, a.minWidth = o, a.maxWidth = r)), void 0 !== s ? s + "" : s
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
	})), C.swap = function(t, e, i, n) {
		var o, r, s = {};
		for (r in e) s[r] = t.style[r], t.style[r] = e[r];
		for (r in o = i.apply(t, n || []), e) t.style[r] = s[r];
		return o
	};
	var It = /^(none|table(?!-c[ea]).+)/,
		Dt = new RegExp("^(" + $ + ")(.*)$", "i"),
		zt = new RegExp("^([+-])=(" + $ + ")", "i"),
		Ot = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		At = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		Rt = ["Webkit", "O", "Moz", "ms"];

	function jt(t, e) {
		if (e in t) return e;
		for (var i = e[0].toUpperCase() + e.slice(1), n = e, o = Rt.length; o--;)
			if ((e = Rt[o] + i) in t) return e;
		return n
	}

	function Nt(t, e, i) {
		var n = Dt.exec(e);
		return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
	}

	function Wt(t, e, i, n, o) {
		for (var r = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; r < 4; r += 2) "margin" === i && (s += C.css(t, i + H[r], !0, o)), n ? ("content" === i && (s -= C.css(t, "padding" + H[r], !0, o)), "margin" !== i && (s -= C.css(t, "border" + H[r] + "Width", !0, o))) : (s += C.css(t, "padding" + H[r], !0, o), "padding" !== i && (s += C.css(t, "border" + H[r] + "Width", !0, o)));
		return s
	}

	function Ft(t, e, i) {
		var n = !0,
			o = "width" === e ? t.offsetWidth : t.offsetHeight,
			r = Et(t),
			s = "border-box" === C.css(t, "boxSizing", !1, r);
		if (o <= 0 || null == o) {
			if (((o = St(t, e, r)) < 0 || null == o) && (o = t.style[e]), Tt.test(o)) return o;
			n = s && (v.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
		}
		return o + Wt(t, e, i || (s ? "border" : "content"), n, r) + "px"
	}

	function Pt(t, e) {
		for (var i, n, o, r = [], s = 0, a = t.length; s < a; s++)(n = t[s]).style && (r[s] = R.get(n, "olddisplay"), i = n.style.display, e ? (r[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && P(n) && (r[s] = R.access(n, "olddisplay", vt(n.nodeName)))) : (o = P(n), "none" === i && o || R.set(n, "olddisplay", o ? i : C.css(n, "display"))));
		for (s = 0; s < a; s++)(n = t[s]).style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? r[s] || "" : "none"));
		return t
	}

	function Mt(t, e, i, n, o) {
		return new Mt.prototype.init(t, e, i, n, o)
	}
	C.extend({
		cssHooks: {
			opacity: {
				get: function(t, e) {
					if (e) {
						var i = St(t, "opacity");
						return "" === i ? "1" : i
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
		style: function(t, e, i, n) {
			if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
				var o, r, s, a = C.camelCase(e),
					l = t.style;
				return e = C.cssProps[a] || (C.cssProps[a] = jt(l, a)), s = C.cssHooks[e] || C.cssHooks[a], void 0 === i ? s && "get" in s && void 0 !== (o = s.get(t, !1, n)) ? o : l[e] : ("string" == (r = typeof i) && (o = zt.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(C.css(t, e)), r = "number"), void(null != i && i == i && ("number" !== r || C.cssNumber[a] || (i += "px"), v.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), s && "set" in s && void 0 === (i = s.set(t, i, n)) || (l[e] = i))))
			}
		},
		css: function(t, e, i, n) {
			var o, r, s, a = C.camelCase(e);
			return e = C.cssProps[a] || (C.cssProps[a] = jt(t.style, a)), (s = C.cssHooks[e] || C.cssHooks[a]) && "get" in s && (o = s.get(t, !0, i)), void 0 === o && (o = St(t, e, n)), "normal" === o && e in At && (o = At[e]), "" === i || i ? (r = parseFloat(o), !0 === i || C.isNumeric(r) ? r || 0 : o) : o
		}
	}), C.each(["height", "width"], function(t, o) {
		C.cssHooks[o] = {
			get: function(t, e, i) {
				return e ? It.test(C.css(t, "display")) && 0 === t.offsetWidth ? C.swap(t, Ot, function() {
					return Ft(t, o, i)
				}) : Ft(t, o, i) : void 0
			},
			set: function(t, e, i) {
				var n = i && Et(t);
				return Nt(0, e, i ? Wt(t, o, i, "border-box" === C.css(t, "boxSizing", !1, n), n) : 0)
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
				for (var e = 0, i = {}, n = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) i[o + H[e] + r] = n[e] || n[e - 2] || n[0];
				return i
			}
		}, Ct.test(o) || (C.cssHooks[o + r].set = Nt)
	}), C.fn.extend({
		css: function(t, e) {
			return O(this, function(t, e, i) {
				var n, o, r = {},
					s = 0;
				if (C.isArray(e)) {
					for (n = Et(t), o = e.length; s < o; s++) r[e[s]] = C.css(t, e[s], !1, n);
					return r
				}
				return void 0 !== i ? C.style(t, e, i) : C.css(t, e)
			}, t, e, 1 < arguments.length)
		},
		show: function() {
			return Pt(this, !0)
		},
		hide: function() {
			return Pt(this)
		},
		toggle: function(t) {
			return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
				P(this) ? C(this).show() : C(this).hide()
			})
		}
	}), (C.Tween = Mt).prototype = {
		constructor: Mt,
		init: function(t, e, i, n, o, r) {
			this.elem = t, this.prop = i, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = r || (C.cssNumber[i] ? "" : "px")
		},
		cur: function() {
			var t = Mt.propHooks[this.prop];
			return t && t.get ? t.get(this) : Mt.propHooks._default.get(this)
		},
		run: function(t) {
			var e, i = Mt.propHooks[this.prop];
			return this.pos = e = this.options.duration ? C.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Mt.propHooks._default.set(this), this
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
		Ut = new RegExp("^(?:([+-])=|)(" + $ + ")([a-z%]*)$", "i"),
		Qt = /queueHooks$/,
		Vt = [function(e, t, i) {
			var n, o, r, s, a, l, c, u = this,
				d = {},
				h = e.style,
				p = e.nodeType && P(e),
				f = R.get(e, "fxshow");
			for (n in i.queue || (null == (a = C._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
					a.unqueued || l()
				}), a.unqueued++, u.always(function() {
					u.always(function() {
						a.unqueued--, C.queue(e, "fx").length || a.empty.fire()
					})
				})), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (c = C.css(e, "display")) ? R.get(e, "olddisplay") || vt(e.nodeName) : c) && "none" === C.css(e, "float") && (h.display = "inline-block")), i.overflow && (h.overflow = "hidden", u.always(function() {
					h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
				})), t)
				if (o = t[n], Xt.exec(o)) {
					if (delete t[n], r = r || "toggle" === o, o === (p ? "hide" : "show")) {
						if ("show" !== o || !f || void 0 === f[n]) continue;
						p = !0
					}
					d[n] = f && f[n] || C.style(e, n)
				} else c = void 0;
			if (C.isEmptyObject(d)) "inline" === ("none" === c ? vt(e.nodeName) : c) && (h.display = c);
			else
				for (n in f ? "hidden" in f && (p = f.hidden) : f = R.access(e, "fxshow", {}), r && (f.hidden = !p), p ? C(e).show() : u.done(function() {
						C(e).hide()
					}), u.done(function() {
						var t;
						for (t in R.remove(e, "fxshow"), d) C.style(e, t, d[t])
					}), d) s = Jt(p ? f[n] : 0, n, u), n in f || (f[n] = s.start, p && (s.end = s.start, s.start = "width" === n || "height" === n ? 1 : 0))
		}],
		Kt = {
			"*": [function(t, e) {
				var i = this.createTween(t, e),
					n = i.cur(),
					o = Ut.exec(e),
					r = o && o[3] || (C.cssNumber[t] ? "" : "px"),
					s = (C.cssNumber[t] || "px" !== r && +n) && Ut.exec(C.css(i.elem, t)),
					a = 1,
					l = 20;
				if (s && s[3] !== r)
					for (r = r || s[3], o = o || [], s = +n || 1; s /= a = a || ".5", C.style(i.elem, t, s + r), a !== (a = i.cur() / n) && 1 !== a && --l;);
				return o && (s = i.start = +s || +n || 0, i.unit = r, i.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), i
			}]
		};

	function Zt() {
		return setTimeout(function() {
			$t = void 0
		}), $t = C.now()
	}

	function Gt(t, e) {
		var i, n = 0,
			o = {
				height: t
			};
		for (e = e ? 1 : 0; n < 4; n += 2 - e) o["margin" + (i = H[n])] = o["padding" + i] = t;
		return e && (o.opacity = o.width = t), o
	}

	function Jt(t, e, i) {
		for (var n, o = (Kt[e] || []).concat(Kt["*"]), r = 0, s = o.length; r < s; r++)
			if (n = o[r].call(i, e, t)) return n
	}

	function te(r, t, e) {
		var i, s, n = 0,
			o = Vt.length,
			a = C.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (s) return !1;
				for (var t = $t || Zt(), e = Math.max(0, c.startTime + c.duration - t), i = 1 - (e / c.duration || 0), n = 0, o = c.tweens.length; n < o; n++) c.tweens[n].run(i);
				return a.notifyWith(r, [c, i, e]), i < 1 && o ? e : (a.resolveWith(r, [c]), !1)
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
					var i = C.Tween(r, c.opts, t, e, c.opts.specialEasing[t] || c.opts.easing);
					return c.tweens.push(i), i
				},
				stop: function(t) {
					var e = 0,
						i = t ? c.tweens.length : 0;
					if (s) return this;
					for (s = !0; e < i; e++) c.tweens[e].run(1);
					return t ? a.resolveWith(r, [c, t]) : a.rejectWith(r, [c, t]), this
				}
			}),
			u = c.props;
		for (function(t, e) {
				var i, n, o, r, s;
				for (i in t)
					if (o = e[n = C.camelCase(i)], r = t[i], C.isArray(r) && (o = r[1], r = t[i] = r[0]), i !== n && (t[n] = r, delete t[i]), (s = C.cssHooks[n]) && "expand" in s)
						for (i in r = s.expand(r), delete t[n], r) i in t || (t[i] = r[i], e[i] = o);
					else e[n] = o
			}(u, c.opts.specialEasing); n < o; n++)
			if (i = Vt[n].call(c, r, u, c.opts)) return i;
		return C.map(u, Jt, c), C.isFunction(c.opts.start) && c.opts.start.call(r, c), C.fx.timer(C.extend(l, {
			elem: r,
			anim: c,
			queue: c.opts.queue
		})), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
	}
	C.Animation = C.extend(te, {
		tweener: function(t, e) {
			for (var i, n = 0, o = (t = C.isFunction(t) ? (e = t, ["*"]) : t.split(" ")).length; n < o; n++) i = t[n], Kt[i] = Kt[i] || [], Kt[i].unshift(e)
		},
		prefilter: function(t, e) {
			e ? Vt.unshift(t) : Vt.push(t)
		}
	}), C.speed = function(t, e, i) {
		var n = t && "object" == typeof t ? C.extend({}, t) : {
			complete: i || !i && e || C.isFunction(t) && t,
			duration: t,
			easing: i && e || e && !C.isFunction(e) && e
		};
		return n.duration = C.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in C.fx.speeds ? C.fx.speeds[n.duration] : C.fx.speeds._default, null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
			C.isFunction(n.old) && n.old.call(this), n.queue && C.dequeue(this, n.queue)
		}, n
	}, C.fn.extend({
		fadeTo: function(t, e, i, n) {
			return this.filter(P).css("opacity", 0).show().end().animate({
				opacity: e
			}, t, i, n)
		},
		animate: function(e, t, i, n) {
			function o() {
				var t = te(this, C.extend({}, e), s);
				(r || R.get(this, "finish")) && t.stop(!0)
			}
			var r = C.isEmptyObject(e),
				s = C.speed(t, i, n);
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
					i = C.timers,
					n = R.get(this);
				if (e) n[e] && n[e].stop && s(n[e]);
				else
					for (e in n) n[e] && n[e].stop && Qt.test(e) && s(n[e]);
				for (e = i.length; e--;) i[e].elem !== this || null != o && i[e].queue !== o || (i[e].anim.stop(r), t = !1, i.splice(e, 1));
				!t && r || C.dequeue(this, o)
			})
		},
		finish: function(s) {
			return !1 !== s && (s = s || "fx"), this.each(function() {
				var t, e = R.get(this),
					i = e[s + "queue"],
					n = e[s + "queueHooks"],
					o = C.timers,
					r = i ? i.length : 0;
				for (e.finish = !0, C.queue(this, s, []), n && n.stop && n.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === s && (o[t].anim.stop(!0), o.splice(t, 1));
				for (t = 0; t < r; t++) i[t] && i[t].finish && i[t].finish.call(this);
				delete e.finish
			})
		}
	}), C.each(["toggle", "show", "hide"], function(t, n) {
		var o = C.fn[n];
		C.fn[n] = function(t, e, i) {
			return null == t || "boolean" == typeof t ? o.apply(this, arguments) : this.animate(Gt(n, !0), t, e, i)
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
	}, function(t, n) {
		C.fn[t] = function(t, e, i) {
			return this.animate(n, t, e, i)
		}
	}), C.timers = [], C.fx.tick = function() {
		var t, e = 0,
			i = C.timers;
		for ($t = C.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
		i.length || C.fx.stop(), $t = void 0
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
	}, C.fn.delay = function(n, t) {
		return n = C.fx && C.fx.speeds[n] || n, t = t || "fx", this.queue(t, function(t, e) {
			var i = setTimeout(t, n);
			e.stop = function() {
				clearTimeout(i)
			}
		})
	}, Bt = y.createElement("input"), Yt = (qt = y.createElement("select")).appendChild(y.createElement("option")), Bt.type = "checkbox", v.checkOn = "" !== Bt.value, v.optSelected = Yt.selected, qt.disabled = !0, v.optDisabled = !Yt.disabled, (Bt = y.createElement("input")).value = "t", Bt.type = "radio", v.radioValue = "t" === Bt.value;
	var ee, ie = C.expr.attrHandle;
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
		attr: function(t, e, i) {
			var n, o, r = t.nodeType;
			if (t && 3 !== r && 8 !== r && 2 !== r) return typeof t.getAttribute == Y ? C.prop(t, e, i) : (1 === r && C.isXMLDoc(t) || (e = e.toLowerCase(), n = C.attrHooks[e] || (C.expr.match.bool.test(e) ? ee : void 0)), void 0 === i ? !(n && "get" in n && null !== (o = n.get(t, e))) && null == (o = C.find.attr(t, e)) ? void 0 : o : null !== i ? n && "set" in n && void 0 !== (o = n.set(t, i, e)) ? o : (t.setAttribute(e, i + ""), i) : void C.removeAttr(t, e))
		},
		removeAttr: function(t, e) {
			var i, n, o = 0,
				r = e && e.match(I);
			if (r && 1 === t.nodeType)
				for (; i = r[o++];) n = C.propFix[i] || i, C.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
		},
		attrHooks: {
			type: {
				set: function(t, e) {
					if (!v.radioValue && "radio" === e && C.nodeName(t, "input")) {
						var i = t.value;
						return t.setAttribute("type", e), i && (t.value = i), e
					}
				}
			}
		}
	}), ee = {
		set: function(t, e, i) {
			return !1 === e ? C.removeAttr(t, i) : t.setAttribute(i, i), i
		}
	}, C.each(C.expr.match.bool.source.match(/\w+/g), function(t, e) {
		var r = ie[e] || C.find.attr;
		ie[e] = function(t, e, i) {
			var n, o;
			return i || (o = ie[e], ie[e] = n, n = null != r(t, e, i) ? e.toLowerCase() : null, ie[e] = o), n
		}
	});
	var ne = /^(?:input|select|textarea|button)$/i;
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
		prop: function(t, e, i) {
			var n, o, r = t.nodeType;
			if (t && 3 !== r && 8 !== r && 2 !== r) return 1 === r && C.isXMLDoc(t) || (e = C.propFix[e] || e, o = C.propHooks[e]), void 0 !== i ? o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : t[e] = i : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]
		},
		propHooks: {
			tabIndex: {
				get: function(t) {
					return t.hasAttribute("tabindex") || ne.test(t.nodeName) || t.href ? t.tabIndex : -1
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
			var t, i, n, o, r, s, a = "string" == typeof e && e,
				l = 0,
				c = this.length;
			if (C.isFunction(e)) return this.each(function(t) {
				C(this).addClass(e.call(this, t, this.className))
			});
			if (a)
				for (t = (e || "").match(I) || []; l < c; l++)
					if (n = 1 === (i = this[l]).nodeType && (i.className ? (" " + i.className + " ").replace(oe, " ") : " ")) {
						for (r = 0; o = t[r++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
						s = C.trim(n), i.className !== s && (i.className = s)
					} return this
		},
		removeClass: function(e) {
			var t, i, n, o, r, s, a = 0 === arguments.length || "string" == typeof e && e,
				l = 0,
				c = this.length;
			if (C.isFunction(e)) return this.each(function(t) {
				C(this).removeClass(e.call(this, t, this.className))
			});
			if (a)
				for (t = (e || "").match(I) || []; l < c; l++)
					if (n = 1 === (i = this[l]).nodeType && (i.className ? (" " + i.className + " ").replace(oe, " ") : "")) {
						for (r = 0; o = t[r++];)
							for (; 0 <= n.indexOf(" " + o + " ");) n = n.replace(" " + o + " ", " ");
						s = e ? C.trim(n) : "", i.className !== s && (i.className = s)
					} return this
		},
		toggleClass: function(o, e) {
			var r = typeof o;
			return "boolean" == typeof e && "string" == r ? e ? this.addClass(o) : this.removeClass(o) : this.each(C.isFunction(o) ? function(t) {
				C(this).toggleClass(o.call(this, t, this.className, e), e)
			} : function() {
				if ("string" == r)
					for (var t, e = 0, i = C(this), n = o.match(I) || []; t = n[e++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
				else r != Y && "boolean" != r || (this.className && R.set(this, "__className__", this.className), this.className = !this.className && !1 !== o && R.get(this, "__className__") || "")
			})
		},
		hasClass: function(t) {
			for (var e = " " + t + " ", i = 0, n = this.length; i < n; i++)
				if (1 === this[i].nodeType && 0 <= (" " + this[i].className + " ").replace(oe, " ").indexOf(e)) return !0;
			return !1
		}
	});
	var re = /\r/g;
	C.fn.extend({
		val: function(i) {
			var n, t, o, e = this[0];
			return arguments.length ? (o = C.isFunction(i), this.each(function(t) {
				var e;
				1 === this.nodeType && (null == (e = o ? i.call(this, t, C(this).val()) : i) ? e = "" : "number" == typeof e ? e += "" : C.isArray(e) && (e = C.map(e, function(t) {
					return null == t ? "" : t + ""
				})), (n = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
			})) : e ? (n = C.valHooks[e.type] || C.valHooks[e.nodeName.toLowerCase()]) && "get" in n && void 0 !== (t = n.get(e, "value")) ? t : "string" == typeof(t = e.value) ? t.replace(re, "") : null == t ? "" : t : void 0
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
					for (var e, i, n = t.options, o = t.selectedIndex, r = "select-one" === t.type || o < 0, s = r ? null : [], a = r ? o + 1 : n.length, l = o < 0 ? a : r ? o : 0; l < a; l++)
						if (!(!(i = n[l]).selected && l !== o || (v.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && C.nodeName(i.parentNode, "optgroup"))) {
							if (e = C(i).val(), r) return e;
							s.push(e)
						} return s
				},
				set: function(t, e) {
					for (var i, n, o = t.options, r = C.makeArray(e), s = o.length; s--;)((n = o[s]).selected = 0 <= C.inArray(n.value, r)) && (i = !0);
					return i || (t.selectedIndex = -1), r
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
	}), C.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, i) {
		C.fn[i] = function(t, e) {
			return 0 < arguments.length ? this.on(i, null, t, e) : this.trigger(i)
		}
	}), C.fn.extend({
		hover: function(t, e) {
			return this.mouseenter(t).mouseleave(e || t)
		},
		bind: function(t, e, i) {
			return this.on(t, null, e, i)
		},
		unbind: function(t, e) {
			return this.off(t, null, e)
		},
		delegate: function(t, e, i, n) {
			return this.on(e, t, i, n)
		},
		undelegate: function(t, e, i) {
			return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
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
			var i, n = 0,
				o = t.toLowerCase().match(I) || [];
			if (C.isFunction(e))
				for (; i = o[n++];) "+" === i[0] ? (i = i.slice(1) || "*", (r[i] = r[i] || []).unshift(e)) : (r[i] = r[i] || []).push(e)
		}
	}

	function we(e, o, r, s) {
		var a = {},
			l = e === me;

		function c(t) {
			var n;
			return a[t] = !0, C.each(e[t] || [], function(t, e) {
				var i = e(o, r, s);
				return "string" != typeof i || l || a[i] ? l ? !(n = i) : void 0 : (o.dataTypes.unshift(i), c(i), !1)
			}), n
		}
		return c(o.dataTypes[0]) || !a["*"] && c("*")
	}

	function xe(t, e) {
		var i, n, o = C.ajaxSettings.flatOptions || {};
		for (i in e) void 0 !== e[i] && ((o[i] ? t : n = n || {})[i] = e[i]);
		return n && C.extend(!0, t, n), t
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
			var u, d, h, i, p, n, f, o, m = C.ajaxSetup({}, e),
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
							if (!i)
								for (i = {}; e = ue.exec(h);) i[e[1].toLowerCase()] = e[2];
							e = i[t.toLowerCase()]
						}
						return null == e ? null : e
					},
					getAllResponseHeaders: function() {
						return 2 === x ? h : null
					},
					setRequestHeader: function(t, e) {
						var i = t.toLowerCase();
						return x || (t = s[i] = s[i] || t, r[t] = e), this
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
			if (y.promise(_).complete = b.add, _.success = _.done, _.error = _.fail, m.url = ((t || m.url || ve) + "").replace(le, "").replace(he, ye[1] + "//"), m.type = e.method || e.type || m.method || m.type, m.dataTypes = C.trim(m.dataType || "*").toLowerCase().match(I) || [""], null == m.crossDomain && (n = pe.exec(m.url.toLowerCase()), m.crossDomain = !(!n || n[1] === ye[1] && n[2] === ye[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (ye[3] || ("http:" === ye[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = C.param(m.data, m.traditional)), we(fe, m, e, _), 2 === x) return _;
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

			function l(t, e, i, n) {
				var o, r, s, a, l, c = e;
				2 !== x && (x = 2, p && clearTimeout(p), u = void 0, h = n || "", _.readyState = 0 < t ? 4 : 0, o = 200 <= t && t < 300 || 304 === t, i && (a = function(t, e, i) {
					for (var n, o, r, s, a = t.contents, l = t.dataTypes;
						"*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
					if (n)
						for (o in a)
							if (a[o] && a[o].test(n)) {
								l.unshift(o);
								break
							} if (l[0] in i) r = l[0];
					else {
						for (o in i) {
							if (!l[0] || t.converters[o + " " + l[0]]) {
								r = o;
								break
							}
							s = s || o
						}
						r = r || s
					}
					return r ? (r !== l[0] && l.unshift(r), i[r]) : void 0
				}(m, _, i)), a = function(t, e, i, n) {
					var o, r, s, a, l, c = {},
						u = t.dataTypes.slice();
					if (u[1])
						for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
					for (r = u.shift(); r;)
						if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())
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
		getJSON: function(t, e, i) {
			return C.get(t, e, i, "json")
		},
		getScript: function(t, e) {
			return C.get(t, void 0, e, "script")
		}
	}), C.each(["get", "post"], function(t, o) {
		C[o] = function(t, e, i, n) {
			return C.isFunction(e) && (n = n || i, i = e, e = void 0), C.ajax({
				url: t,
				type: o,
				dataType: n,
				data: e,
				success: i
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
		wrapInner: function(i) {
			return this.each(C.isFunction(i) ? function(t) {
				C(this).wrapInner(i.call(this, t))
			} : function() {
				var t = C(this),
					e = t.contents();
				e.length ? e.wrapAll(i) : t.append(i)
			})
		},
		wrap: function(e) {
			var i = C.isFunction(e);
			return this.each(function(t) {
				C(this).wrapAll(i ? e.call(this, t) : e)
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
		function i(t, e) {
			e = C.isFunction(e) ? e() : null == e ? "" : e, o[o.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
		}
		var n, o = [];
		if (void 0 === e && (e = C.ajaxSettings && C.ajaxSettings.traditional), C.isArray(t) || t.jquery && !C.isPlainObject(t)) C.each(t, function() {
			i(this.name, this.value)
		});
		else
			for (n in t) ! function i(n, t, o, r) {
				var e;
				if (C.isArray(t)) C.each(t, function(t, e) {
					o || Ce.test(n) ? r(n, e) : i(n + "[" + ("object" == typeof e ? t : "") + "]", e, o, r)
				});
				else if (o || "object" !== C.type(t)) r(n, t);
				else
					for (e in t) i(n + "[" + e + "]", t[e], o, r)
			}(n, t[n], e, i);
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
				return this.name && !C(this).is(":disabled") && Se.test(this.nodeName) && !Ee.test(t) && (this.checked || !B.test(t))
			}).map(function(t, e) {
				var i = C(this).val();
				return null == i ? null : C.isArray(i) ? C.map(i, function(t) {
					return {
						name: e.name,
						value: t.replace(Te, "\r\n")
					}
				}) : {
					name: e.name,
					value: i.replace(Te, "\r\n")
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
				var i, n = r.xhr(),
					o = ++ke;
				if (n.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
					for (i in r.xhrFields) n[i] = r.xhrFields[i];
				for (i in r.mimeType && n.overrideMimeType && n.overrideMimeType(r.mimeType), r.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) n.setRequestHeader(i, t[i]);
				s = function(t) {
					return function() {
						s && (delete Le[o], s = n.onload = n.onerror = null, "abort" === t ? n.abort() : "error" === t ? e(n.status, n.statusText) : e(Ie[n.status] || n.status, n.statusText, "string" == typeof n.responseText ? {
							text: n.responseText
						} : void 0, n.getAllResponseHeaders()))
					}
				}, n.onload = s(), n.onerror = s("error"), s = Le[o] = s("abort");
				try {
					n.send(r.hasContent && r.data || null)
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
	}), C.ajaxTransport("script", function(i) {
		var n, o;
		if (i.crossDomain) return {
			send: function(t, e) {
				n = C("<script>").prop({
					async: !0,
					charset: i.scriptCharset,
					src: i.url
				}).on("load error", o = function(t) {
					n.remove(), o = null, t && e("error" === t.type ? 404 : 200, t.type)
				}), y.head.appendChild(n[0])
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
	}), C.ajaxPrefilter("json jsonp", function(t, e, i) {
		var n, o, r, s = !1 !== t.jsonp && (Oe.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Oe.test(t.data) && "data");
		return s || "jsonp" === t.dataTypes[0] ? (n = t.jsonpCallback = C.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Oe, "$1" + n) : !1 !== t.jsonp && (t.url += (ae.test(t.url) ? "&" : "?") + t.jsonp + "=" + n), t.converters["script json"] = function() {
			return r || C.error(n + " was not called"), r[0]
		}, t.dataTypes[0] = "json", o = f[n], f[n] = function() {
			r = arguments
		}, i.always(function() {
			f[n] = o, t[n] && (t.jsonpCallback = e.jsonpCallback, ze.push(n)), r && C.isFunction(o) && o(r[0]), r = o = void 0
		}), "script") : void 0
	}), C.parseHTML = function(t, e, i) {
		if (!t || "string" != typeof t) return null;
		"boolean" == typeof e && (i = e, e = !1), e = e || y;
		var n = b.exec(t),
			o = !i && [];
		return n ? [e.createElement(n[1])] : (n = C.buildFragment([t], e, o), o && o.length && C(o).remove(), C.merge([], n.childNodes))
	};
	var Ae = C.fn.load;
	C.fn.load = function(t, e, i) {
		if ("string" != typeof t && Ae) return Ae.apply(this, arguments);
		var n, o, r, s = this,
			a = t.indexOf(" ");
		return 0 <= a && (n = C.trim(t.slice(a)), t = t.slice(0, a)), C.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (o = "POST"), 0 < s.length && C.ajax({
			url: t,
			type: o,
			dataType: "html",
			data: e
		}).done(function(t) {
			r = arguments, s.html(n ? C("<div>").append(C.parseHTML(t)).find(n) : t)
		}).complete(i && function(t, e) {
			s.each(i, r || [t.responseText, e, t])
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
	var Re = f.document.documentElement;

	function je(t) {
		return C.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
	}
	C.offset = {
		setOffset: function(t, e, i) {
			var n, o, r, s, a, l, c = C.css(t, "position"),
				u = C(t),
				d = {};
			"static" === c && (t.style.position = "relative"), a = u.offset(), r = C.css(t, "top"), l = C.css(t, "left"), o = ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto") ? (s = (n = u.position()).top, n.left) : (s = parseFloat(r) || 0, parseFloat(l) || 0), C.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : u.css(d)
		}
	}, C.fn.extend({
		offset: function(e) {
			if (arguments.length) return void 0 === e ? this : this.each(function(t) {
				C.offset.setOffset(this, e, t)
			});
			var t, i, n = this[0],
				o = {
					top: 0,
					left: 0
				},
				r = n && n.ownerDocument;
			return r ? (t = r.documentElement, C.contains(t, n) ? (typeof n.getBoundingClientRect != Y && (o = n.getBoundingClientRect()), i = je(r), {
				top: o.top + i.pageYOffset - t.clientTop,
				left: o.left + i.pageXOffset - t.clientLeft
			}) : o) : void 0
		},
		position: function() {
			if (this[0]) {
				var t, e, i = this[0],
					n = {
						top: 0,
						left: 0
					};
				return "fixed" === C.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), C.nodeName(t[0], "html") || (n = t.offset()), n.top += C.css(t[0], "borderTopWidth", !0), n.left += C.css(t[0], "borderLeftWidth", !0)), {
					top: e.top - n.top - C.css(i, "marginTop", !0),
					left: e.left - n.left - C.css(i, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var t = this.offsetParent || Re; t && !C.nodeName(t, "html") && "static" === C.css(t, "position");) t = t.offsetParent;
				return t || Re
			})
		}
	}), C.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, o) {
		var r = "pageYOffset" === o;
		C.fn[e] = function(t) {
			return O(this, function(t, e, i) {
				var n = je(t);
				return void 0 === i ? n ? n[o] : t[e] : void(n ? n.scrollTo(r ? f.pageXOffset : i, r ? i : f.pageYOffset) : t[e] = i)
			}, e, t, arguments.length, null)
		}
	}), C.each(["top", "left"], function(t, i) {
		C.cssHooks[i] = kt(v.pixelPosition, function(t, e) {
			return e ? (e = St(t, i), Tt.test(e) ? C(t).position()[i] + "px" : e) : void 0
		})
	}), C.each({
		Height: "height",
		Width: "width"
	}, function(r, s) {
		C.each({
			padding: "inner" + r,
			content: s,
			"": "outer" + r
		}, function(n, t) {
			C.fn[t] = function(t, e) {
				var i = arguments.length && (n || "boolean" != typeof t),
					o = n || (!0 === t || !0 === e ? "margin" : "border");
				return O(this, function(t, e, i) {
					var n;
					return C.isWindow(t) ? t.document.documentElement["client" + r] : 9 === t.nodeType ? (n = t.documentElement, Math.max(t.body["scroll" + r], n["scroll" + r], t.body["offset" + r], n["offset" + r], n["client" + r])) : void 0 === i ? C.css(t, e, o) : C.style(t, e, i, o)
				}, s, i ? t : void 0, i, null)
			}
		})
	}), C.fn.size = function() {
		return this.length
	}, C.fn.andSelf = C.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
		return C
	});
	var Ne = f.jQuery,
		We = f.$;
	return C.noConflict = function(t) {
		return f.$ === C && (f.$ = We), t && f.jQuery === C && (f.jQuery = Ne), C
	}, typeof t == Y && (f.jQuery = f.$ = C), C
});