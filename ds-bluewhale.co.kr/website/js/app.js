if ("undefined" === typeof console || null === console) console = {
    log: function() {}
};
var APP = APP || {};
APP.register = function(c) {
    c = c.split(".");
    for (var a = APP, e = 0; e < c.length; e += 1) "undefined" === typeof a[c[e]] && (a[c[e]] = {}), a = a[c[e]];
    return a
};
APP.isAlphaTween = !0;
var browser = navigator.userAgent;
if (0 < browser.toLowerCase().indexOf("msie 8") || 0 < browser.toLowerCase().indexOf("msie 7")) APP.isAlphaTween = !1;
(function(c, a, e) {
    c.register("gnb");
    c.gnb = function() {
        var b, c, k, l = [],
            f, m = null,
            h = null,
            e = function(b) {
                var c = a(b.currentTarget).parent().attr("class").slice(4);
                switch (b.type) {
                    case "mouseenter":
                    case "focusin":
                        clearTimeout(f);
                        q(c);
                        break;
                    case "focusout":
                    case "mouseleave":
                        clearTimeout(f), f = setTimeout(n, 1E3)
                }
            },
            q = function(g) {
                TweenLite.to(c, .3, {
                    className: "-=on"
                });
                TweenLite.to(a(b).find(".menu" + g + "> a"), .3, {
                    className: "+=on"
                });
                a(k).css({
                    display: "none"
                });
                g && 0 < a(b).find(".menu" + g + "> ul>li").length && (a(b).find(".menu" +
                    g + "> ul").css({
                    display: "block",
                    opacity: 0
                }), TweenLite.to(a(b).find(".menu" + g + "> ul"), 0, {
                    css: {
                        opacity: 1
                    }
                }))
            },
            r = function(b) {
                var c = a(b.currentTarget).parent().parent().parent().attr("class").slice(4);
                a(b.currentTarget).parent().attr("class").slice(3);
                switch (b.type) {
                    case "mouseenter":
                    case "focusin":
                        TweenLite.to(a(b.currentTarget), .2, {
                            className: "+=on"
                        });
                        clearTimeout(f);
                        q(c);
                        break;
                    case "focusout":
                    case "mouseleave":
                        TweenLite.to(a(b.currentTarget), .2, {
                            className: "-=on"
                        }), clearTimeout(f), f = setTimeout(n, 1E3)
                }
            },
            n = function() {
                a(k).css({
                    display: "none"
                });
                TweenLite.to(c, .3, {
                    className: "-=on"
                });
                TweenLite.to(a(b).find(".menu" + m + "> a"), .3, {
                    className: "+=on"
                });
                h && a(b).find(".menu" + m + "> ul>.sub" + h + ">a").trigger("mouseenter")
            };
        return {
            init: function(f, u) {
                var g;
                m = f;
                h = u;
                b = a("nav>.gnb");
                a("header");
                c = b.find("> li > a");
                k = b.find(">li> ul");
                c.on("mouseenter focusin mouseleave focusout", e);
                var d = 0;
                for (g = k.length; d < g; d++) l[d] = a(k[d]).find("> li > a"), l[d].on("mouseenter focusin mouseleave focusout", r);
                n()
            }
        }
    }();
    c.register("main");
    c.main = function() {
        var b = !0,
            c, k, l, f, m, h = 4,
            e = 0,
            q = function() {
                a(".main_visual .visual_con").css("display", "block");
                var d = new TimelineLite({
                    onComplete: function() {
                        console.log(e);
                        g(e);
                        TweenLite.to(a(".main_visual .visual_con>div"), .4, {
                            autoAlpha: 0,
                            ease: Sine.easeOut
                        });
                        TweenLite.to(a(".main_visual .visual_con"), 1, {
                            className: "+=on",
                            ease: Sine.easeOut,
                            onComplete: function() {
                                a(".main_visual .banner_con").css("display", "block");
                                TweenLite.from(a(".main_visual .banner_con"), .4, {
                                    x: 160,
                                    ease: Sine.easeOut
                                });
                                a(".main_visual .menu_con").css("display",
                                    "block");
                                TweenLite.from(a(".main_visual .menu_con"), .4, {
                                    x: -160,
                                    ease: Sine.easeOut
                                });
                                a(".main_visual .title_con").css("display", "block");
                                TweenLite.from(a(".main_visual .title_con"), .4, {
                                    autoAlpha: 0,
                                    x: 100,
                                    ease: Sine.easeOut
                                });
                                TweenLite.to(a("header"), 1, {
                                    y: 0,
                                    ease: Sine.easeOut
                                });
                                a("footer").css("display", "block");
                                TweenLite.from(a("footer"), 1, {
                                    autoAlpha: 0
                                });
                                a(".movie_layer1").css("display", "block");
                                TweenLite.from(a(".movie_layer1"), .3, {
                                    opacity: 0
                                });
                                a(".movie_layer1 .movie_con video")[0].play()
                            }
                        })
                    }
                });
                d.from(a(".main_visual .visual_con .l_t"),
                    .2, {
                        width: 0,
                        ease: Sine.easeOut
                    });
                d.from(a(".main_visual .visual_con .l_r"), .2, {
                    height: 0,
                    ease: Sine.easeOut
                });
                d.from(a(".main_visual .visual_con .l_b"), .2, {
                    width: 0,
                    ease: Sine.easeOut
                });
                d.from(a(".main_visual .visual_con .l_l"), .2, {
                    height: 0,
                    ease: Sine.easeOut
                })
            },
            r = function(d) {
                var b = Number(h);
                a(d.currentTarget).hasClass("btn_next") ? b++ : b--;
                4 <= b && (b = 0);
                0 > b && (b = 3);
                g(b)
            },
            n = function(d) {
                var b = a(d.currentTarget).index();
                switch (d.type) {
                    case "mouseenter":
                    case "focusin":
                        clearTimeout(k);
                        break;
                    case "focusout":
                    case "mouseleave":
                        t();
                        break;
                    case "click":
                        g(b)
                }
            },
            g = function(d) {
                h != d && b && (b = !1, a(f[h]).removeClass("on"), a(f[d]).addClass("on"), TweenLite.to(a(l[h]), 1, {
                    opacity: 0,
                    ease: Sine.easeOut
                }), TweenLite.to(a(l[d]), 1, {
                    opacity: 1,
                    ease: Sine.easeOut

                }), TweenLite.from(a(l[d]).find(".txt"), 1, {
                    opacity: 0,
                    y: 30,
                    ease: Sine.easeOut,
                    delay: 1
                }), a(m[h]).css("display", "none"), a(m[d]).css("display", "block"), TweenLite.from(a(m[d]).find(".tit"), 1, {
                    autoAlpha: 0,
                    y: -50,
                    ease: Sine.easeOut
                }), TweenLite.from(a(m[d]).find(".txt"), 1, {
                    autoAlpha: 0,
                    x: 50,
                    ease: Sine.easeOut,
                    delay: .3,
                    onComplete: function() {
                        b = !0
                    }
                }), h = d, t())
            },
            t = function() {
                clearTimeout(k);
                k = setTimeout(function() {
                    var a = Number(h) + 1;
                    4 <= a && (a = 0);
                    g(a)
                }, 6E3)
            },
            p = function() {
                a(window).width();
                var b = a(window).height();
                1E3 > b && (b = 1E3);
                c.css("height", b);
                a(".main_visual").css("height", b)
            };
        return {
            init: function() {
                c = a(".main_wrap");
                a(".main_wrap .intro .bg");
                a(".main_wrap .intro .bg2");
                TweenLite.set(a("header"), {
                    y: -109
                });
                a("footer").css("display", "none");
                f = a(".main_visual .menu_con li");
                f.on("mouseenter focusin mouseleave focusout click",
                    n);
                l = a(".main_visual .visual_con li");
                m = a(".main_visual .title_con li");
                a(".menu_con .btn_prev").on("click", r);
                a(".banner_con .btn_next").on("click", r);
                a(window).resize(p);
                p();
                setTimeout(p, 100);
                setTimeout(p, 200);
                setTimeout(p, 300);
				setTimeout(p, 400);
                var b = new TimelineLite({
                    onComplete: q
                });
                b.to(a(".main_wrap .intro .bg"), 1, {
                    autoAlpha: 1,
                    ease: Sine.easeOut
                });
                b.from(a(".main_wrap .intro .obj_1"), 1, {
                    autoAlpha: 0,
                    ease: Sine.easeOut
                }, "-=0.2");
                b.from(a(".main_wrap .intro .obj_2"), 1, {
                    autoAlpha: 0,
                    ease: Sine.easeOut
                }, "-=0.2");
                b.from(a(".main_wrap .intro .obj_3"), 1, {
                    autoAlpha: 0,
                    ease: Sine.easeOut
                }, "-=0.2");
                b.from(a(".main_wrap .intro .obj_4"), 1, {
                    autoAlpha: 0,
                    ease: Sine.easeOut
                }, "-=0.2");
                b.to(a(".main_wrap .intro .txt_con"), 1, {
                    autoAlpha: 0,
                    ease: Sine.easeOut
                }, "+=0.5");
                b.to(a(".main_wrap .intro .bg3"), 0, {
                    autoAlpha: 1,
                    ease: Sine.easeOut
                }, "-=1")
            },
            set: function(a) {
                e = Number(a) - 1
            }
        }
    }();
    c.register("sub");
    c.sub = function() {
        var b = function() {
            var b = a(window).height() - 614;
            b > a(".contents_wrap").outerHeight() ?
                a(".container").css("height", b + 314) : a(".container").css("height", "auto")
        };
        return {
            init: function() {
                TweenMax.from(a(".sub_visual .tit"), 2, {
                    x: 50,
                    autoAlpha: 0,
                    ease: Sine.easeOut,
                    delay: 0
                });
                a(window).resize(b);
                b();
                setTimeout(b, 100);
                setTimeout(b, 200);
                setTimeout(b, 300);
                setTimeout(b, 1E3)
            }
        }
    }();
    c.register("cm");
    c.cm = function() {
        function b(a) {
            this.name = a
        }
        var c;
        b.prototype.init = function(b) {
            c = document.getElementById("audio1");
            a(".cm .playBtn").on("click", e);
            a(".cm .stopBtn").on("click", l);
            b ? a(".cm .playBtn").trigger("click") :
                a(".cm .stopBtn").trigger("click");
            c.addEventListener("ended", function() {
                a(".cm .playBtn").css("display", "block");
                a(".cm .stopBtn").css("display", "none")
            }, !1)
        };
        var e = function() {
                c.play();
                a(".cm .playBtn").css("display", "none");
                a(".cm .stopBtn").css("display", "block")
            },
            l = function() {
                c.pause();
                a(".cm .playBtn").css("display", "block");
                a(".cm .stopBtn").css("display", "none")
            };
        return new b
    }()
})(APP || {}, jQuery);