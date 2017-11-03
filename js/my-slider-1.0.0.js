(function (g, w, m, n, p, q, f) {
    $("#" + g);
    var c = $("#" + g + ">." + w),
        r = $("#" + g + ">#" + m),
        d = $("#" + g + ">#" + m + ">img");
    c.eq(0).width();
    c.eq(0).height();
    var k = [],
        s = [],
        h = c.length,
        l = null,
        e = 0,
        t = function (a, b, c, d, e) {
            this.n = a;
            this.w = b;
            this.h = c;
            this.to = this.from = 0;
            this.distance = "vertical" == p ? b : c;
            this.direction = "";
            this.isMoving = !1
        };
    t.prototype.move = function (a, b) {
        var d = 0 == b ? "0" : "10";
        "vertical" == p ? (this.from = "top" == a ? b * this.w : -1 * b * this.w, this.to = "top" == a ? this.from - this.distance : this.from + this.distance, c.eq(this.n).css({
            display: "block",
            left: this.from + "px",
            zIndex: d
        }).animate({
            left: this.to + "px"
        }, n, function () {
            0 == b && $(this).css({
                display: "none",
                left: "0",
                top: "0px"
            })
        })) : (this.from = "up" == a ? b * this.h : -1 * b * this.h, this.to = "up" == a ? this.from - this.distance : this.from + this.distance, c.eq(this.n).css({
            display: "block",
            top: this.from + "px",
            zIndex: d
        }).animate({
            top: this.to + "px"
        }, n, function () {
            0 == b && $(this).css({
                display: "none",
                top: "0",
                top: "0px"
            })
        }))
    };
    var u = function (a, b) {
        this.n = a;
        this.imgSrc = b
    };
    u.prototype.change = function () {
        for (var a, b, c = 0; c < h; c++) a = d.eq(c).attr("src"),
            b = a.replace("-on", "-off"), a != b && d.eq(c).attr("src", b);
        this.imgSrc = b = this.imgSrc.replace("-off", "-on");
        d.eq(this.n).attr("src", b)
    };
    var v = function (a) {
            if ("left" == f || "up" == f) return (a + 1) % h;
            a -= 1;
            0 > a && (a = h - 1);
            return a
        },
        x = function () {
            for (var a = 0; a < h; a++) k.push(new t(a, c.eq(a).width(), c.eq(a).height(), f, 0)), s.push(new u(a, d.eq(a).attr("src")))
        };
    (function () {
        x();
        d.click(function (a) {
            a.stopPropagation();
            var b = c.filter(":visible");
            a = d.index($(this));
            b = c.index(b);
            e = a;
            s[a].change();
            k[b].move(f, 0);
            k[a].move(f, 1)
        });
        r.mouseenter(function (a) {
            a.stopPropagation();
            clearInterval(l)
        });
        r.mouseleave(function (a) {
            a.stopPropagation();
            l = setInterval(function () {
                e = v(e);
                d.eq(e).trigger("click")
            }, q)
        });
        c.eq(0).css({
            display: "block"
        });
        l = setInterval(function () {
            e = v(e);
            d.eq(e).trigger("click")
        }, q)
    })()
})("slider-holder", "slide", "btn-nav-holder", 1E3, "horizontal", 4E3, "left");