$(function () {
	"use strict";

    var cursor = document.querySelector('.cursor');
    var cursorLazy = document.querySelector('.cursor-lazy');

    var editCursor = function editCursor(event){
        cursor.style.left = event.clientX + "px";
        cursor.style.top = event.clientY + "px";
        cursorLazy.style.left = event.clientX + "px";
        cursorLazy.style.top = event.clientY + "px";
    };

    window.addEventListener('mousemove', editCursor);

    // var links = document.querySelector('a');



});





































function Global_Scripts() {
    var t = $("<div class='cursor-wrap'><div class='cursor-outline'></div><span class='cursor-poient'>");
    $("body").append(t),
    $(document).on("mousemove", function(e) {
        var t = $(".cursor-outline")
          , a = $(".cursor-poient")
          , o = 0
          , s = 0
          , r = 0
          , n = 0;
        o += (r - o) / 9,
        s += (n - s) / 9,
        r = e.clientX,
        n = e.clientY,
        TweenMax.to(t, .3, {
            left: r - 15,
            top: n - 15
        }),
        TweenMax.to(a, .2, {
            left: r - 6,
            top: n - 6
        })
    }),
    $("a,button").on("mouseenter", function() {
        (new TimelineMax).to(".cursor-outline", .5, {
            scale: 1.5,
            autoAlpha: .1,
            ease: Back.easeInOut
        }).to(".cursor-poient", .5, {
            scale: 0,
            ease: Back.easeInOut
        }, "-=0.4"),
        t.addClass("focus")
    }),
    $("a,button").on("mouseleave", function() {
        (new TimelineMax).to(".cursor-outline", .5, {
            scale: 1,
            autoAlpha: 1,
            ease: Back.easeInOut
        }).to(".cursor-poient", .5, {
            scale: 1,
            ease: Back.easeInOut
        }, "-=0.4"),
        t.removeClass("focus")
    }),
    jarallax(document.querySelectorAll(".parallax-bg"), {
        speed: .7
    }),
    jarallax(document.querySelectorAll(".page-top-section .page-top-bg"), {
        speed: .8
    });
    new ScrollMagic.Controller;
    $(".scroll-back-to-top").on("click", function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1e3, "easeInOutExpo")
    }),
    $(".lity-videopopup").on("click", lity),
    $(".page-top-section").each(function() {
        var e = $(this).find(".shape-left")
          , t = $(this).find(".top-img");
        $(this).mousemove(function(a) {
            var o = a.clientX / window.innerWidth - 1.2
              , s = a.clientY / window.innerHeight - 1.2;
            TweenMax.to(e, 1, {
                x: 10 * -o,
                y: 10 * s,
                ease: Quad.easeOut
            }),
            TweenMax.to(t, .5, {
                x: 10 * o,
                ease: Quad.easeOut,
                transformPerspective: 700,
                transformOrigin: "center"
            })
        })
    }),
    $(".m-parallax-wrap").each(function() {
        var e = $(this).find(".mrot-parallax-el");
        $(this).mousemove(function(t) {
            var a = t.clientX / window.innerWidth - .5
              , o = t.clientY / window.innerHeight - .5;
            TweenMax.to(e, .5, {
                rotationY: 10 * a,
                rotationX: 10 * o,
                ease: Quad.easeOut,
                transformPerspective: 700,
                transformOrigin: "center"
            })
        })
    })
}
function Header_Scripts() {
    function e() {
        $(window).scrollTop() > 50 ? $(".header-area").addClass("sticky") : $(".header-area").removeClass("sticky")
    }
    $(window).on("scroll", e),
    e(),
    $(".full-scree-navbar .dropdown-nav .nav-link").on("click", function(e) {
        var t = $(this).closest(".dropdown-nav").find(".submenu");
        $(this).closest(".full-scree-navbar").find(".submenu").not(t).slideUp(),
        $(this).hasClass("active") ? $(this).removeClass("active") : ($(this).closest(".accordion").find("a.active").removeClass("active"),
        $(this).addClass("active")),
        t.stop(!1, !0).slideToggle(),
        e.preventDefault()
    });
    let t = new TimelineMax({
        paused: !0
    })
      , a = $(".full-screen-nav")
      , o = $(".full-screen-nav .flsbg .bg-wrap")
      , s = $(".full-screen-nav .flsbg .bg-wrap span")
      , r = ($(".full-screen-nav .nav-overlay"),
    $(".full-screen-nav .nav-contact-list .citem"))
      , n = $(".full-scree-navbar .nav-item");
    $(".full-scree-navbar .nav-item .nav-link");
    TweenMax.set(a, {
        background: "transparent"
    }),
    TweenMax.set(n, {
        rotationX: 20,
        y: 40,
        autoAlpha: 0
    }),
    TweenMax.set(r, {
        rotationX: 20,
        rotation: 2,
        y: 70,
        autoAlpha: 0
    }),
    t.set(a, {
        display: "block"
    }).staggerTo(o, .6, {
        y: "0%",
        ease: Expo.easeInOut
    }, .05).staggerTo(s, .6, {
        x: "102%",
        ease: Expo.easeInOut
    }, .08, "-=0.3").set(a, {
        background: "#fff"
    }).staggerTo(n, .5, {
        rotationX: 0,
        rotation: 0,
        y: 0,
        autoAlpha: 1,
        ease: Power2.easeOut
    }, .06).staggerTo(r, .5, {
        rotationX: 0,
        rotation: 0,
        y: 0,
        autoAlpha: 1,
        ease: Power2.easeOut
    }, .02, "-=0.4"),
    t.reverse(),
    $(".header-area .nav-toggle-btn").on("click", function() {
        $(".header-area .nav-toggle-btn").toggleClass("open"),
        $(".header-area").toggleClass("open-fullnav"),
        t.reversed(!t.reversed())
    })
}
function HeroSlide_Scripts() {
    $(".hero_slide_wrapper").each(function() {
        var e = new Swiper(".hero_slide_wrapper .text_slide_container",{
            loop: !0,
            speed: 1200,
            grabCursor: !0,
            resistance: !0,
            resistanceRatio: 0,
            watchSlidesProgress: !0,
            mousewheelControl: !0,
            keyboardControl: !0,
            effect: "slide",
            mousewheel: !1,
            parallax: !0,
            navigation: {
                nextEl: ".hero_slide_wrapper .btn_next_arrow",
                prevEl: ".hero_slide_wrapper .btn_prev_arrow"
            }
        })
          , t = new Swiper(".hero_slide_wrapper .bg_slide_container",{
            loop: !0,
            speed: 1200,
            grabCursor: !0,
            watchSlidesProgress: !0,
            mousewheelControl: !0,
            keyboardControl: !0,
            resistance: !0,
            resistanceRatio: .5,
            on: {
                progress: function() {
                    for (var e = 0; e < this.slides.length; e++) {
                        var t = this.slides[e].progress * (.4 * this.width);
                        this.slides[e].querySelector(".slide_bg").style.transform = "translate3d(" + t + "px, 0, 0)"
                    }
                },
                touchStart: function() {
                    for (var e = 0; e < this.slides.length; e++)
                        this.slides[e].style.transition = ""
                },
                setTransition: function(e) {
                    for (var t = 0; t < this.slides.length; t++)
                        this.slides[t].style.transition = e + "ms",
                        this.slides[t].querySelector(".slide_bg").style.transition = e + "ms"
                }
            }
        });
        e.controller.control = t,
        t.controller.control = e
    })
}
function Slide_Scripts() {
    new Swiper(".brand-slide-container",{
        loop: !0,
        speed: 500,
        grabCursor: !0,
        resistance: !0,
        resistanceRatio: 0,
        watchSlidesProgress: !0,
        mousewheelControl: !0,
        keyboardControl: !0,
        slidesPerView: 5,
        centeredSlides: !1,
        breakpoints: {
            300: {
                slidesPerView: 2,
                centeredSlides: !0
            },
            640: {
                slidesPerView: 3,
                centeredSlides: !0
            },
            991: {
                slidesPerView: 4
            },
            1199: {
                slidesPerView: 5
            }
        }
    }),
    new Swiper(".service-slide-container",{
        loop: !0,
        speed: 500,
        grabCursor: !0,
        resistance: !0,
        resistanceRatio: 0,
        watchSlidesProgress: !0,
        mousewheelControl: !0,
        keyboardControl: !0,
        slidesPerView: 4,
        centeredSlides: !1,
        breakpoints: {
            300: {
                slidesPerView: 1,
                centeredSlides: !0,
                spaceBetween: 15
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: !0
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: !0
            },
            1199: {
                slidesPerView: 3,
                spaceBetween: 25
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 25
            }
        }
    }),
    new Swiper(".testimonial-slide-container",{
        loop: !1,
        speed: 1e3,
        grabCursor: !0,
        watchSlidesProgress: !0,
        mousewheelControl: !0,
        keyboardControl: !0,
        slidesPerView: 1,
        parallax: !0
    })
}
function portfolio_Scripts() {
    $(".portfolio_card_wrapper").each(function() {
        var e = $(this).find(".portfolio-card-thumb");
        $(this).append('<span class="portfolio-card_bg">'),
        $(this).find(".portfolio-card_bg").css("background-image", "url(" + e.attr("src") + ")")
    })
}
function TextAni_Scripts() {
    let e = new ScrollMagic.Controller;
    $(".has-sectitle-ani").each(function() {
        Splitting({
            target: ".has-sectitle-ani .sub-title",
            by: "lines"
        }),
        Splitting({
            target: ".has-sectitle-ani .title",
            by: "lines"
        });
        var t = $(this).find(".sub-title .word")
          , a = $(this).find(".title .word");
        TweenMax.set(t, {
            yPercent: 100,
            autoAlpha: 0
        }),
        TweenMax.set(a, {
            y: 25,
            autoAlpha: 0,
            rotationX: 90,
            transformOrigin: "bottom center"
        }),
        SecTl = new TimelineMax,
        SecTl.staggerTo(t, .5, {
            yPercent: 0,
            autoAlpha: 1,
            ease: Expo.easeOut
        }, .01).staggerTo(a, 1, {
            y: 0,
            autoAlpha: 1,
            rotationX: 0,
            ease: Expo.easeOut
        }, .01).set(a, {
            transform: ""
        }),
        new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: .8,
            reverse: !1
        }).setTween(SecTl).addTo(e)
    })
}
function CardsAni_Scripts() {
    let e = new ScrollMagic.Controller;
    $("[data-tooltip-thumb]").each(function() {
        var e = $(this)
          , t = e.data("tooltip-thumb")
          , a = $("<div class='img-tooltip'><span class='tooltip-bg' style='background-image:url(" + t + ")'>")
          , o = a.find(".tooltip-bg");
        e.on("mousemove", function(e) {
            a.appendTo("body"),
            TweenMax.to(a, .2, {
                top: e.pageY - 30 + "px",
                left: e.pageX + 10 + "px"
            })
        }),
        e.hover(function() {
            TweenMax.to(a, .5, {
                width: "300px",
                ease: Expo.easeInOut
            }),
            TweenMax.to(o, .5, {
                scale: 1,
                ease: Expo.easeInOut
            })
        }, function() {
            var e = new TimelineMax({
                onComplete: function() {
                    a.remove()
                }
            });
            TweenMax.to(a, .5, {
                width: "0",
                ease: Expo.easeInOut
            }),
            e.to(o, .5, {
                scale: 1.5,
                ease: Expo.easeInOut
            })
        })
    }),
    $(".box-overlay-ani").each(function() {
        $(this).append('<span class="ani-overlaywrap"><span class="overlay">');
        var t = $(this).find(".ani-overlaywrap")
          , a = $(this).find(".overlay")
          , o = $(this).find(".content-wrap");
        TweenMax.set(a, {
            x: "-100%"
        }),
        TweenMax.set(o, {
            autoAlpha: 0
        }),
        Tl = new TimelineMax,
        Tl.to(a, .5, {
            x: "0%",
            ease: Expo.easeInOut
        }).to(o, .1, {
            autoAlpha: 1,
            ease: Expo.easeInOut
        }).to(a, .5, {
            x: "100%",
            ease: Expo.easeInOut
        }).set(t, {
            display: "none"
        }),
        new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: .8,
            reverse: !1
        }).setTween(Tl).addTo(e)
    })
}
!function(e) {
    "use strict";
    Global_Scripts(),
    Header_Scripts(),
    HeroSlide_Scripts(),
    Slide_Scripts(),
    CardsAni_Scripts(),
    portfolio_Scripts(),
    Splitting({
        target: ".preloader .logo-text h6",
        by: "chars"
    });
    var t = e(".preloader .logo-text")
      , a = e(".preloader .logo-text h6 .char")
      , o = e(".preloader .logo-text p span")
      , s = e(".preloader .logo-text .line");
    TweenMax.set(t, {
        autoAlpha: 1
    });
    var r = new TimelineMax({
        repeat: -1
    });
    r.to(s, 1, {
        x: "0%",
        ease: Expo.easeInOut
    }).staggerTo(a, 1, {
        y: "0%",
        ease: Expo.easeOut
    }, .05, "-=0.4").to(o, 1, {
        y: "-0%",
        ease: Expo.easeOut
    }, "-=0.4").staggerTo(a, 1, {
        y: "-100%",
        ease: Expo.easeOut
    }, .05, "-=0.4").to(s, 1, {
        x: "100%",
        ease: Expo.easeInOut
    }, "-=0.8"),
    e(window).on("load", function() {
        r.pause(),
        TweenMax.to(t, .5, {
            y: -50,
            autoAlpha: 0,
            ease: Power3.easeInOut
        });
        var a = e(".preloader")
          , o = e(".preloader-bg span")
          , s = e(".preloader-bg");
        (new TimelineMax).staggerTo(o, 1, {
            y: "0%",
            ease: Expo.easeOut
        }, .15).set(s, {
            background: "transparent"
        }).staggerTo(o, 1, {
            y: "-100%",
            ease: Expo.easeOut
        }, .15).set(a, {
            display: "none"
        }),
        TextAni_Scripts()
    })
}(jQuery);
