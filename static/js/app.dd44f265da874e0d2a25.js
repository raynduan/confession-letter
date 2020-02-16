webpackJsonp([1], {
    38: function (n, e, t) {
        t(84);
        var r = t(23)(t(40), t(96), "data-v-bd26cd6c", null);
        n.exports = r.exports
    }, 40: function (n, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var r = t(24), o = t.n(r), i = t(45), a = t.n(i), s = t(44), l = t.n(s), u = t(93), c = t.n(u), d = t(92),
            f = t.n(d), m = t(81), h = (t.n(m), function () {
                for (var n = navigator.userAgent, e = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], t = !0, r = 0; r < e.length; r++) if (n.indexOf(e[r]) > 0) {
                    t = !1;
                    break
                }
                return t
            }()), g = function (n, e) {
                var t = new Date(Date.parse(n.replace(/-/g, "/"))).getTime(),
                    r = new Date(Date.parse(e.replace(/-/g, "/"))).getTime();
                return Math.abs(t - r) / 864e5
            };
        e.default = {
            name: "app",
            components: {StyleEditor: c.a, ResumeEditor: f.a},
            data: function () {
                return {
                    interval: 27,
                    currentStyle: "",
                    enableHtml: !1,
                    fullStyle: ["/*\n* Hi,晓林！\n* 认识也有段时间了。还没和你正式的介绍过我的工作呢！\n* 我是个python后端工程师。俗称程序猿，程序猿其实是分为前端和后端，前端专注于网页数据的渲染，而后端主要是给前端提供展示数据。\n* 如这个页面。就是个什么也没有的网页。\n* 我的工作就是给这种空白的页面提供各种数据，然后通过前端技术渲染出来。\n* 想了很久，也不知道该写些什么，文笔不好，写不出什么华丽的文章，就回忆回忆，写写这段时间相处的过程吧。\n* 本来是想做一个网站出来的，但是准备太仓促，没来得及做，只能做成这种网页格式的了。\n* 嗯。说起来手机和电脑还得区分一下。\n* 你现在用的是。。。" + (h ? "电脑" : "手机") + "\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n/* 白色背景太单调了。来点背景 */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(0,43,54); \n}\n/* 文字太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  " + (h ? "width: 48%;height: 96%;" : "width: 96%;height: 50%;") + "\n  font-size: 14px;\n  line-height:1.5;\n}\n/* 这些代码颜色都一样。加点儿高亮区别来 */\n.token.selector{ color: rgb(133,153,0) }\n.token.property{ color: rgb(187,137,0) }\n.token.punctuation{ color: yellow }\n.token.function{ color: rgb(42,161,152) }\n.token.comment{ color: rgb(177,177,177) }\n/* 加个 3D 效果 */\nhtml{\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; \n  " + (h ? "left: 0;" : "left:0;right:0;margin:auto;") + "\n  top: 0; \n  -webkit-transition: none; \n  transition: none;   \n  " + (h ? "-webkit-transform: rotateY(10deg) translateZ(-100px) ;transform: rotateY(10deg) translateZ(-100px) ;" : "-webkit-transform: rotateX(-10deg) translateZ(-100px) ;transform: rotateX(-10deg) translateZ(-100px) ;") + "\n  " + (h ? "" : "-webkit-transform-origin: 50% 0% 0;transform-origin: 50% 0% 0;") + "\n}\n\n/* 再来一张信纸 */\n.resumeEditor{\n  position: fixed; \n  " + (h ? "right: 0;" : "left:0;right:0;margin:auto;") + "\n  " + (h ? "top: 0;" : "bottom:2%;") + "\n  padding: .5em;  \n  " + (h ? "margin: .5em;" : "") + "\n  " + (h ? "width: 48%;height: 96%;" : "width: 96%;height: 50%;") + "\n  border: 1px solid;\n  color: #222;\n  overflow: auto;\n  font-size: 14px;\n  line-height:1.5;\n  " + (h ? "-webkit-transform: rotateY(-10deg) translateZ(-100px) ;transform: rotateY(-10deg) translateZ(-100px) ;" : "-webkit-transform: rotateX(10deg) translateZ(-100px) ;transform: rotateX(10deg) translateZ(-100px) ;") + "\n    " + (h ? "" : "-webkit-transform-origin: 50% 0% 0;transform-origin: 50% 0% 0;") + "\n  }\n/* 我开始写了 */\n\n\n", "\n/* 是不是看着很简陋粗糙？\n * 因为这是 Markdown 格式的\n * 一种程序员用来写文档日志的简易语言\n * 翻译成 网页 就行了\n */\n", '\n/* 再加点样式 */\n.resumeEditor{\n  padding: 2em;\n  line-height:1.8;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n  font-size:18px;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;            \n  content: counters(section, ".") " ";  \n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: rgba(221,221,221,.5);\n}\n\n/* OK。完成！ */\n\n'],
                    currentMarkdown: "",
                    fullMarkdown: "晓林：\n\n2019年07月12日。第一次给你打电话，有三分的忐忑+三分的应付+六分的期待吧。那时的我满脑子都是代码，性子就比较直男，因此实在是想不出来聊天的话题，几次的尬聊后，慢慢就淡了继续聊下去的心思了。 \n如果从第一通电话算起，我们认识有 `" + (g((new Date).getFullYear() + "-" + ((new Date).getMonth() + 1) + "-" + (new Date).getDate(), "2019-07-12") + 1) + "` 天了\n\n第一次见面\n----\n\n* 我们是在阴历年的最后一天见的面，按习俗来说，就是除旧迎新了，哈哈哈哈。\n* 你给我第一感觉嘛，有点腼腆和内向，因为你全程没说几句话；完全没有当初电话沟通时，给我的那种有压迫感，尤其是听到你是采购时，我整个压力山大（原因我后面也跟你解释过，这里就不再做叙述了）。 \n* 第一次面对面的交流，给我又是另外一种感觉，有点邻家姐姐的那种，没有一点的傲娇，说话和气，跟你说话很舒服，会很放松。\n* 我们聊了聊各自的一些想法与看法，虽有些看法有出入，但人与人相处本就是求同存异嘛，尊重不同点，拓展相同点。\n* ……\n\n开始互相沟通\n----\n\n过年的那几天，我们开始慢慢互相的沟通与了解，我感觉我说的比较多，肯能是因为太想把自己更全面的展示在你面前吧。\n不过呢，不要把我定义成话特多的那种了... 虽然我比较健谈，但是我一般也不跟别人去聊我或者他人的事情，因为常言道，静坐常思己过，闲谈莫论人非，除非是我信任和我喜欢的人。上次唠叨了你好几个小时，一个部分原因是没人说话，但更多的还是跟你说话很放松，很舒心。\n所以了，作为补偿：对你7*24小时开机，没有关机，没有不在服务器。我不太会安慰人，但你伤心或者难过时，我可以当个出气筒，我体量大，能放下很多气，不用担心我撑着了；其实我最期望的就是你能有与我一起分享开心的事情，因为这代表你过得很开心。\n …… \n 请原谅我的脑容量实在有限，熬着夜也只能写出这么多了. \n\n期待更远的未来\n----\n\n* 也许，是前世的姻，也许是来世的缘，终在今生相见。就算世事化云烟，沧海变桑田，也要坚守这段情缘。\n\n> 【Screw the world×I have my dear XiaoLing】  \n> 喂。我不只想影响你的习惯。我还要去改变你的人生。！\n\n"
                }
            },
            created: function () {
                this.makeResume()
            },
            methods: {
                makeResume: function () {
                    function n() {
                        return e.apply(this, arguments)
                    }

                    var e = l()(a.a.mark(function n() {
                        return a.a.wrap(function (n) {
                            for (; ;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, this.progressivelyShowStyle(0);
                                case 2:
                                    return n.next = 4, this.progressivelyShowResume();
                                case 4:
                                    return n.next = 6, this.progressivelyShowStyle(1);
                                case 6:
                                    return n.next = 8, this.showHtml();
                                case 8:
                                    return n.next = 10, this.progressivelyShowStyle(2);
                                case 10:
                                case"end":
                                    return n.stop()
                            }
                        }, n, this)
                    }));
                    return n
                }(), showHtml: function () {
                    var n = this;
                    return new o.a(function (e, t) {
                        n.enableHtml = !0, e()
                    })
                }, progressivelyShowStyle: function (n) {
                    var e = this;
                    return new o.a(function (t, r) {
                        var o = e.interval, i = l()(a.a.mark(function e() {
                            var r, s, l, u, c, d = this;
                            return a.a.wrap(function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = this.fullStyle[n]) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 3:
                                        s = this.fullStyle.filter(function (e, t) {
                                            return t <= n
                                        }).map(function (n) {
                                            return n.length
                                        }).reduce(function (n, e) {
                                            return n + e
                                        }, 0), l = s - r.length, this.currentStyle.length < s ? (u = this.currentStyle.length - l, c = r.substring(u, u + 1) || " ", this.currentStyle += c, "\n" === r.substring(u - 1, u) && this.$refs.styleEditor && this.$nextTick(function () {
                                            d.$refs.styleEditor.goBottom()
                                        }), setTimeout(i, o)) : t();
                                    case 6:
                                    case"end":
                                        return e.stop()
                                }
                            }, e, this)
                        })).bind(e);
                        i()
                    })
                }, progressivelyShowResume: function () {
                    var n = this;
                    return new o.a(function (e, t) {
                        var r = n.fullMarkdown.length, o = n.interval;
                        !function t() {
                            if (n.currentMarkdown.length < r) {
                                n.currentMarkdown = n.fullMarkdown.substring(0, n.currentMarkdown.length + 1);
                                n.currentMarkdown[n.currentMarkdown.length - 1];
                                "\n" === n.currentMarkdown[n.currentMarkdown.length - 2] && n.$refs.resumeEditor && n.$nextTick(function () {
                                    return n.$refs.resumeEditor.goBottom()
                                }), setTimeout(t, o)
                            } else e()
                        }()
                    })
                }
            }
        }
    }, 41: function (n, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var r = t(85), o = t.n(r);
        e.default = {
            props: ["markdown", "enableHtml"], name: "ResumeEditor", computed: {
                result: function () {
                    return this.enableHtml ? o()(this.markdown) : this.markdown
                }
            }, methods: {
                goBottom: function () {
                    this.$refs.container.scrollTop = 1e5
                }
            }
        }
    }, 42: function (n, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var r = t(86), o = t.n(r);
        e.default = {
            name: "Editor", props: ["code"], computed: {
                highlightedCode: function () {
                    return o.a.highlight(this.code, o.a.languages.css)
                }, codeInStyleTag: function () {
                    return "<style>" + this.code + "</style>"
                }
            }, methods: {
                goBottom: function () {
                    this.$refs.container.scrollTop = 1e5
                }
            }
        }
    }, 43: function (n, e, t) {
        "use strict";
        Object.defineProperty(e, "__esModule", {value: !0});
        var r = t(39), o = t(38), i = t.n(o);
        new r.a({
            el: "#app", render: function (n) {
                return n(i.a)
            }
        })
    }, 81: function (n, e) {
    }, 82: function (n, e) {
    }, 83: function (n, e) {
    }, 84: function (n, e) {
    }, 92: function (n, e, t) {
        t(83);
        var r = t(23)(t(41), t(95), "data-v-3539023c", null);
        n.exports = r.exports
    }, 93: function (n, e, t) {
        t(82);
        var r = t(23)(t(42), t(94), "data-v-23b5cc2c", null);
        n.exports = r.exports
    }, 94: function (n, e) {
        n.exports = {
            render: function () {
                var n = this, e = n.$createElement, t = n._self._c || e;
                return t("div", {ref: "container", staticClass: "styleEditor"}, [t("div", {
                    staticClass: "code",
                    domProps: {innerHTML: n._s(n.codeInStyleTag)}
                }), n._v(" "), t("pre", {domProps: {innerHTML: n._s(n.highlightedCode)}})])
            }, staticRenderFns: []
        }
    }, 95: function (n, e) {
        n.exports = {
            render: function () {
                var n = this, e = n.$createElement, t = n._self._c || e;
                return t("div", {
                    ref: "container",
                    staticClass: "resumeEditor",
                    class: {htmlMode: n.enableHtml}
                }, [n.enableHtml ? t("div", {domProps: {innerHTML: n._s(n.result)}}) : t("pre", [n._v(n._s(n.result))])])
            }, staticRenderFns: []
        }
    }, 96: function (n, e) {
        n.exports = {
            render: function () {
                var n = this, e = n.$createElement, t = n._self._c || e;
                return t("div", {attrs: {id: "app"}}, [t("StyleEditor", {
                    ref: "styleEditor",
                    attrs: {code: n.currentStyle}
                }), n._v(" "), t("ResumeEditor", {
                    ref: "resumeEditor",
                    attrs: {markdown: n.currentMarkdown, enableHtml: n.enableHtml}
                })], 1)
            }, staticRenderFns: []
        }
    }
}, [43]);