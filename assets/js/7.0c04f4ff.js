(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{495:function(t,a,s){t.exports=s.p+"assets/img/1223-1.b778f0c7.png"},496:function(t,a,s){t.exports=s.p+"assets/img/1223-2.5588f260.png"},497:function(t,a,s){t.exports=s.p+"assets/img/1223-4.0756e543.png"},498:function(t,a,s){t.exports=s.p+"assets/img/1223-3.4e2f0946.png"},499:function(t,a,s){t.exports=s.p+"assets/img/1223-5.fb878370.png"},500:function(t,a,s){t.exports=s.p+"assets/img/1223-6.34f888f7.png"},501:function(t,a,s){t.exports=s.p+"assets/img/1223-7.012503f9.png"},502:function(t,a,s){t.exports=s.p+"assets/img/1223-8.c569b6ef.png"},503:function(t,a,s){t.exports=s.p+"assets/img/1223-9.40c93cfe.png"},527:function(t,a,s){"use strict";s.r(a);var i=s(6),e=Object(i.a)({},(function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("p",[t._v("今天给大家带来的论文是来自 IEEE Conference on Computer Communications 2019（INFOCOM2019）的论文《CFHider: Control Flow Obfuscation with Intel SGX》。")]),t._v(" "),i("p",[i("img",{attrs:{src:s(495),alt:""}})]),t._v(" "),i("p",[t._v("当程序在不受信任的云上运行的时候，需要保证程序逻辑的机密性。\n这篇论文基于 SGX 提出了一种面向程序分支的新的混淆方法。")]),t._v(" "),i("p",[t._v("他们的方法将程序 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("P")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("P")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.13889em"}},[t._v("P")])])])])]),t._v(" 分割成两部分，一部分为 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("msup",[i("mi",[t._v("P")]),i("mo",{attrs:{mathvariant:"normal",lspace:"0em",rspace:"0em"}},[t._v("′")])],1)],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("P'")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.751892em","vertical-align":"0em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.13889em"}},[t._v("P")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.751892em"}},[i("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mtight"},[i("span",{staticClass:"mord mtight"},[t._v("′")])])])])])])])])])])])])]),t._v("，在不可信的云上运行，一部分是控制流矩阵 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("M")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("M")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("M")])])])])]),t._v("，在 SGX 创建的可信环境 enclave 中运行。为了加快程序的查询效率，他们还引入了 LRU 缓存。")],1),t._v(" "),i("img",{staticStyle:{zoom:"50%"},attrs:{src:s(496)}}),t._v(" "),i("p",[t._v("在遇到条件分支指令的时候，程序会首先通过查询函数 "),i("code",[t._v("cfQuery")]),t._v(" 向 enclave 查询并获得一个布尔结果。\n这篇文章比较有意思的点就是混淆的设计。")]),t._v(" "),i("h2",{attrs:{id:"混淆设计"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#混淆设计"}},[t._v("#")]),t._v(" 混淆设计")]),t._v(" "),i("p",[t._v("对于原来的一条分支指令 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("s")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("s")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("s")])])])])]),t._v("，可以将其写成如下所示的三地址代码：")],1),t._v(" "),i("section",[i("eqn",[i("span",{staticClass:"katex-display"},[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("s")]),i("mo",[t._v(":")]),i("mrow",[i("mi",{attrs:{mathvariant:"normal"}},[t._v("i")]),i("mi",{attrs:{mathvariant:"normal"}},[t._v("f")])],1),i("mo",{attrs:{stretchy:"false"}},[t._v("(")]),i("mi",[t._v("x")]),i("mspace",{attrs:{width:"0.5em"}}),i("mi",[t._v("o")]),i("mi",[t._v("p")]),i("mspace",{attrs:{width:"0.5em"}}),i("mi",[t._v("y")]),i("mo",{attrs:{stretchy:"false"}},[t._v(")")]),i("mspace",{attrs:{width:"0.5em"}}),i("mrow",[i("mi",{attrs:{mathvariant:"normal"}},[t._v("t")]),i("mi",{attrs:{mathvariant:"normal"}},[t._v("h")]),i("mi",{attrs:{mathvariant:"normal"}},[t._v("e")]),i("mi",{attrs:{mathvariant:"normal"}},[t._v("n")])],1),i("mo",{attrs:{stretchy:"false"}},[t._v("{")]),i("mi",[t._v("g")]),i("mi",[t._v("o")]),i("mi",[t._v("t")]),i("mi",[t._v("o")]),i("mspace",{attrs:{width:"0.5em"}}),i("mi",[t._v("L")]),i("mo",{attrs:{stretchy:"false"}},[t._v("}")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\ns: \\mathrm{if}(x\\enspace op\\enspace y)\\enspace\n\\mathrm{then} \\{goto\\enspace L\\}\n")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("s")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),i("span",{staticClass:"mrel"},[t._v(":")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathrm"},[t._v("i")]),i("span",{staticClass:"mord mathrm",staticStyle:{"margin-right":"0.07778em"}},[t._v("f")])]),i("span",{staticClass:"mopen"},[t._v("(")]),i("span",{staticClass:"mord mathdefault"},[t._v("x")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.5em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("o")]),i("span",{staticClass:"mord mathdefault"},[t._v("p")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.5em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),i("span",{staticClass:"mclose"},[t._v(")")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.5em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathrm"},[t._v("t")]),i("span",{staticClass:"mord mathrm"},[t._v("h")]),i("span",{staticClass:"mord mathrm"},[t._v("e")]),i("span",{staticClass:"mord mathrm"},[t._v("n")])]),i("span",{staticClass:"mopen"},[t._v("{")]),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),i("span",{staticClass:"mord mathdefault"},[t._v("o")]),i("span",{staticClass:"mord mathdefault"},[t._v("t")]),i("span",{staticClass:"mord mathdefault"},[t._v("o")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.5em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("L")]),i("span",{staticClass:"mclose"},[t._v("}")])])])])])])],1),i("p",[t._v("然后他们设 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("U")]),i("mo",{attrs:{stretchy:"false"}},[t._v("(")]),i("mi",[t._v("s")]),i("mo",{attrs:{stretchy:"false"}},[t._v(")")]),i("mo",[t._v("=")]),i("mo",{attrs:{stretchy:"false"}},[t._v("{")]),i("mi",[t._v("x")]),i("mo",{attrs:{separator:"true"}},[t._v(",")]),i("mi",[t._v("y")]),i("mo",{attrs:{stretchy:"false"}},[t._v("}")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("U(s) = \\{x,y\\}")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("U")]),i("span",{staticClass:"mopen"},[t._v("(")]),i("span",{staticClass:"mord mathdefault"},[t._v("s")]),i("span",{staticClass:"mclose"},[t._v(")")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}}),i("span",{staticClass:"mrel"},[t._v("=")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2777777777777778em"}})]),i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),i("span",{staticClass:"mopen"},[t._v("{")]),i("span",{staticClass:"mord mathdefault"},[t._v("x")]),i("span",{staticClass:"mpunct"},[t._v(",")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")]),i("span",{staticClass:"mclose"},[t._v("}")])])])])]),t._v("，"),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("V")]),i("mo",{attrs:{stretchy:"false"}},[t._v("(")]),i("mi",[t._v("s")]),i("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("V(s)")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")]),i("span",{staticClass:"mopen"},[t._v("(")]),i("span",{staticClass:"mord mathdefault"},[t._v("s")]),i("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" 为执行到语句 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("s")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("s")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("s")])])])])]),t._v(" 前已经被初始化的变量集合除去 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("U")]),i("mo",{attrs:{stretchy:"false"}},[t._v("(")]),i("mi",[t._v("s")]),i("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("U(s)")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("U")]),i("span",{staticClass:"mopen"},[t._v("(")]),i("span",{staticClass:"mord mathdefault"},[t._v("s")]),i("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" 得到的集合。")],1),t._v(" "),i("p",[t._v("接下来取任意整数 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("N")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("N")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")])])])])]),t._v("，从 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("V")]),i("mo",{attrs:{stretchy:"false"}},[t._v("(")]),i("mi",[t._v("s")]),i("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("V(s)")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")]),i("span",{staticClass:"mopen"},[t._v("(")]),i("span",{staticClass:"mord mathdefault"},[t._v("s")]),i("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" 中取 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("N")]),i("mo",[t._v("−")]),i("mn",[t._v("2")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("N-2")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.76666em","vertical-align":"-0.08333em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("N")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}}),i("span",{staticClass:"mbin"},[t._v("−")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.2222222222222222em"}})]),i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.64444em","vertical-align":"0em"}}),i("span",{staticClass:"mord"},[t._v("2")])])])])]),t._v(" 个变量，组成集合 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("msup",[i("mi",[t._v("V")]),i("mo",{attrs:{mathvariant:"normal",lspace:"0em",rspace:"0em"}},[t._v("′")])],1),i("mo",{attrs:{stretchy:"false"}},[t._v("(")]),i("mi",[t._v("s")]),i("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("V'(s)")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"1.001892em","vertical-align":"-0.25em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.751892em"}},[i("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mtight"},[i("span",{staticClass:"mord mtight"},[t._v("′")])])])])])])])])]),i("span",{staticClass:"mopen"},[t._v("(")]),i("span",{staticClass:"mord mathdefault"},[t._v("s")]),i("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v("。")],1),t._v(" "),i("p",[t._v("将 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("U")]),i("mo",{attrs:{stretchy:"false"}},[t._v("(")]),i("mi",[t._v("s")]),i("mo",{attrs:{stretchy:"false"}},[t._v(")")]),i("mo",{attrs:{separator:"true"}},[t._v(",")]),i("msup",[i("mi",[t._v("V")]),i("mo",{attrs:{mathvariant:"normal",lspace:"0em",rspace:"0em"}},[t._v("′")])],1),i("mo",{attrs:{stretchy:"false"}},[t._v("(")]),i("mi",[t._v("s")]),i("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("U(s),V'(s)")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"1.001892em","vertical-align":"-0.25em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("U")]),i("span",{staticClass:"mopen"},[t._v("(")]),i("span",{staticClass:"mord mathdefault"},[t._v("s")]),i("span",{staticClass:"mclose"},[t._v(")")]),i("span",{staticClass:"mpunct"},[t._v(",")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.22222em"}},[t._v("V")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.751892em"}},[i("span",{staticStyle:{top:"-3.063em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mtight"},[i("span",{staticClass:"mord mtight"},[t._v("′")])])])])])])])])]),i("span",{staticClass:"mopen"},[t._v("(")]),i("span",{staticClass:"mord mathdefault"},[t._v("s")]),i("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" 组合，随机排序产生 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("L")]),i("mo",{attrs:{stretchy:"false"}},[t._v("(")]),i("mi",[t._v("s")]),i("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("L(s)")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("L")]),i("span",{staticClass:"mopen"},[t._v("(")]),i("span",{staticClass:"mord mathdefault"},[t._v("s")]),i("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v("，"),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("x")]),i("mo",{attrs:{separator:"true"}},[t._v(",")]),i("mi",[t._v("y")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("x,y")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("x")]),i("span",{staticClass:"mpunct"},[t._v(",")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")])])])])]),t._v(" 在 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("L")]),i("mo",{attrs:{stretchy:"false"}},[t._v("(")]),i("mi",[t._v("s")]),i("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("L(s)")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("L")]),i("span",{staticClass:"mopen"},[t._v("(")]),i("span",{staticClass:"mord mathdefault"},[t._v("s")]),i("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" 中的索引记为 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("msub",[i("mi",[t._v("i")]),i("mi",[t._v("x")])],1),i("mo",{attrs:{stretchy:"false"}},[t._v("(")]),i("mi",[t._v("s")]),i("mo",{attrs:{stretchy:"false"}},[t._v(")")]),i("mo",{attrs:{separator:"true"}},[t._v(",")]),i("msub",[i("mi",[t._v("i")]),i("mi",[t._v("y")])],1),i("mo",{attrs:{stretchy:"false"}},[t._v("(")]),i("mi",[t._v("s")]),i("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("i_x(s),i_y(s)")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"1.036108em","vertical-align":"-0.286108em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathdefault"},[t._v("i")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t vlist-t2"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.151392em"}},[i("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mathdefault mtight"},[t._v("x")])])])]),i("span",{staticClass:"vlist-s"},[t._v("​")])]),i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.15em"}},[i("span")])])])])]),i("span",{staticClass:"mopen"},[t._v("(")]),i("span",{staticClass:"mord mathdefault"},[t._v("s")]),i("span",{staticClass:"mclose"},[t._v(")")]),i("span",{staticClass:"mpunct"},[t._v(",")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathdefault"},[t._v("i")]),i("span",{staticClass:"msupsub"},[i("span",{staticClass:"vlist-t vlist-t2"},[i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.15139200000000003em"}},[i("span",{staticStyle:{top:"-2.5500000000000003em","margin-left":"0em","margin-right":"0.05em"}},[i("span",{staticClass:"pstrut",staticStyle:{height:"2.7em"}}),i("span",{staticClass:"sizing reset-size6 size3 mtight"},[i("span",{staticClass:"mord mathdefault mtight",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")])])])]),i("span",{staticClass:"vlist-s"},[t._v("​")])]),i("span",{staticClass:"vlist-r"},[i("span",{staticClass:"vlist",staticStyle:{height:"0.286108em"}},[i("span")])])])])]),i("span",{staticClass:"mopen"},[t._v("(")]),i("span",{staticClass:"mord mathdefault"},[t._v("s")]),i("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v("。")],1),t._v(" "),i("p",[t._v("为每一条分支语句 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("s")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("s")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.43056em","vertical-align":"0em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("s")])])])])]),t._v(" 分配一个惟一条件标识 ID，记为 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("i")]),i("mo",{attrs:{stretchy:"false"}},[t._v("(")]),i("mi",[t._v("s")]),i("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("i(s)")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("i")]),i("span",{staticClass:"mopen"},[t._v("(")]),i("span",{staticClass:"mord mathdefault"},[t._v("s")]),i("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v("。")],1),t._v(" "),i("p",[t._v("则原始的比较 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("x")]),i("mspace",{attrs:{width:"0.5em"}}),i("mi",[t._v("o")]),i("mi",[t._v("p")]),i("mspace",{attrs:{width:"0.5em"}}),i("mi",[t._v("y")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("x\\enspace op\\enspace y")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("x")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.5em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("o")]),i("span",{staticClass:"mord mathdefault"},[t._v("p")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.5em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")])])])])]),t._v(" 会被修改为 "),i("code",[t._v("cfQuery")]),t._v(" 函数：")],1),t._v(" "),i("section",[i("eqn",[i("span",{staticClass:"katex-display"},[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mrow",[i("mi",{attrs:{mathvariant:"normal"}},[t._v("i")]),i("mi",{attrs:{mathvariant:"normal"}},[t._v("f")])],1),i("mo",{attrs:{stretchy:"false"}},[t._v("(")]),i("mtext",[t._v("cfQuery")]),i("mo",{attrs:{stretchy:"false"}},[t._v("(")]),i("mi",[t._v("L")]),i("mo",{attrs:{stretchy:"false"}},[t._v("(")]),i("mi",[t._v("s")]),i("mo",{attrs:{stretchy:"false"}},[t._v(")")]),i("mo",{attrs:{separator:"true"}},[t._v(",")]),i("mi",[t._v("i")]),i("mo",{attrs:{stretchy:"false"}},[t._v("(")]),i("mi",[t._v("s")]),i("mo",{attrs:{stretchy:"false"}},[t._v(")")]),i("mo",{attrs:{stretchy:"false"}},[t._v(")")]),i("mo",{attrs:{stretchy:"false"}},[t._v(")")]),i("mspace",{attrs:{width:"0.5em"}}),i("mrow",[i("mi",{attrs:{mathvariant:"normal"}},[t._v("t")]),i("mi",{attrs:{mathvariant:"normal"}},[t._v("h")]),i("mi",{attrs:{mathvariant:"normal"}},[t._v("e")]),i("mi",{attrs:{mathvariant:"normal"}},[t._v("n")])],1),i("mspace",{attrs:{width:"0.5em"}}),i("mo",{attrs:{stretchy:"false"}},[t._v("{")]),i("mi",[t._v("g")]),i("mi",[t._v("o")]),i("mi",[t._v("t")]),i("mi",[t._v("o")]),i("mspace",{attrs:{width:"0.5em"}}),i("mi",[t._v("L")]),i("mo",{attrs:{stretchy:"false"}},[t._v("}")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\n\\mathrm{if}(\\textmd{cfQuery}(L(s),i(s)))\\enspace\n\\mathrm{then}\\enspace\n\\{goto\\enspace L\\}\n")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathrm"},[t._v("i")]),i("span",{staticClass:"mord mathrm",staticStyle:{"margin-right":"0.07778em"}},[t._v("f")])]),i("span",{staticClass:"mopen"},[t._v("(")]),i("span",{staticClass:"mord text"},[i("span",{staticClass:"mord textmd"},[t._v("cfQuery")])]),i("span",{staticClass:"mopen"},[t._v("(")]),i("span",{staticClass:"mord mathdefault"},[t._v("L")]),i("span",{staticClass:"mopen"},[t._v("(")]),i("span",{staticClass:"mord mathdefault"},[t._v("s")]),i("span",{staticClass:"mclose"},[t._v(")")]),i("span",{staticClass:"mpunct"},[t._v(",")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("i")]),i("span",{staticClass:"mopen"},[t._v("(")]),i("span",{staticClass:"mord mathdefault"},[t._v("s")]),i("span",{staticClass:"mclose"},[t._v(")")]),i("span",{staticClass:"mclose"},[t._v(")")]),i("span",{staticClass:"mclose"},[t._v(")")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.5em"}}),i("span",{staticClass:"mord"},[i("span",{staticClass:"mord mathrm"},[t._v("t")]),i("span",{staticClass:"mord mathrm"},[t._v("h")]),i("span",{staticClass:"mord mathrm"},[t._v("e")]),i("span",{staticClass:"mord mathrm"},[t._v("n")])]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.5em"}}),i("span",{staticClass:"mopen"},[t._v("{")]),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("g")]),i("span",{staticClass:"mord mathdefault"},[t._v("o")]),i("span",{staticClass:"mord mathdefault"},[t._v("t")]),i("span",{staticClass:"mord mathdefault"},[t._v("o")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.5em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("L")]),i("span",{staticClass:"mclose"},[t._v("}")])])])])])])],1),i("img",{staticStyle:{zoom:"50%"},attrs:{src:s(497)}}),t._v(" "),i("p",[t._v("上面这张图展示了一种实际转换的情况。")]),t._v(" "),i("p",[t._v("在查询的时候，位于 enclave 的矩阵 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("M")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("M")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.68333em","vertical-align":"0em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.10903em"}},[t._v("M")])])])])]),t._v(" 会保存所有 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("L")]),i("mo",{attrs:{stretchy:"false"}},[t._v("(")]),i("mi",[t._v("s")]),i("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("L(s)")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("L")]),i("span",{staticClass:"mopen"},[t._v("(")]),i("span",{staticClass:"mord mathdefault"},[t._v("s")]),i("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" 的信息。\n攻击者只可能知道 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("x")]),i("mo",{attrs:{separator:"true"}},[t._v(",")]),i("mi",[t._v("y")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("x,y")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("x")]),i("span",{staticClass:"mpunct"},[t._v(",")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")])])])])]),t._v(" 在 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("L")]),i("mo",{attrs:{stretchy:"false"}},[t._v("(")]),i("mi",[t._v("s")]),i("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("L(s)")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("L")]),i("span",{staticClass:"mopen"},[t._v("(")]),i("span",{staticClass:"mord mathdefault"},[t._v("s")]),i("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" 中的位置和 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("L")]),i("mo",{attrs:{stretchy:"false"}},[t._v("(")]),i("mi",[t._v("s")]),i("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("L(s)")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("L")]),i("span",{staticClass:"mopen"},[t._v("(")]),i("span",{staticClass:"mord mathdefault"},[t._v("s")]),i("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" 的 ID。\n由于不知道 enclave 的内存信息，攻击者也就无从得知相应的比较符号和 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("x")]),i("mo",{attrs:{separator:"true"}},[t._v(",")]),i("mi",[t._v("y")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("x,y")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.625em","vertical-align":"-0.19444em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("x")]),i("span",{staticClass:"mpunct"},[t._v(",")]),i("span",{staticClass:"mspace",staticStyle:{"margin-right":"0.16666666666666666em"}}),i("span",{staticClass:"mord mathdefault",staticStyle:{"margin-right":"0.03588em"}},[t._v("y")])])])])]),t._v(" 的具体值了。")],1),t._v(" "),i("p",[t._v("除此之外他们还引入了伪分支语句，可以进一步迷惑攻击者。\n由于伪分支会在运行的时候产生时间开销，他们提出以一定的概率加入伪分支语句，定义了混淆度 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("d")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("d")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"0.69444em","vertical-align":"0em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("d")])])])])]),t._v("。")],1),t._v(" "),i("p",[t._v("之后他们证明了自己的方法抵御静态分析、被动监听攻击和主动攻击的能力。\n随着 "),i("eq",[i("span",{staticClass:"katex"},[i("span",{staticClass:"katex-mathml"},[i("math",{attrs:{xmlns:"http://www.w3.org/1998/Math/MathML"}},[i("semantics",[i("mrow",[i("mi",[t._v("L")]),i("mo",{attrs:{stretchy:"false"}},[t._v("(")]),i("mi",[t._v("s")]),i("mo",{attrs:{stretchy:"false"}},[t._v(")")])],1),i("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("L(s)")])],1)],1)],1),i("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"base"},[i("span",{staticClass:"strut",staticStyle:{height:"1em","vertical-align":"-0.25em"}}),i("span",{staticClass:"mord mathdefault"},[t._v("L")]),i("span",{staticClass:"mopen"},[t._v("(")]),i("span",{staticClass:"mord mathdefault"},[t._v("s")]),i("span",{staticClass:"mclose"},[t._v(")")])])])])]),t._v(" 长度的增加，被攻击者快速判断情况出现的概率会明显降低。")],1),t._v(" "),i("img",{staticStyle:{zoom:"50%"},attrs:{src:s(498)}}),t._v(" "),i("h2",{attrs:{id:"实现"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),i("p",[t._v("他们用 Java 实现了该系统的原型，并使用 Hadoop 测试程序进行测试。")]),t._v(" "),i("img",{staticStyle:{zoom:"67%"},attrs:{src:s(499)}}),t._v(" "),i("p",[t._v("他们统计了在不同混淆度时的矩阵大小和 "),i("code",[t._v("cfQuery")]),t._v(" 调用次数，并记录了混淆后的程序运行时间。")]),t._v(" "),i("img",{staticStyle:{zoom:"50%"},attrs:{src:s(500)}}),t._v(" "),i("img",{staticStyle:{zoom:"67%"},attrs:{src:s(501)}}),t._v(" "),i("img",{staticStyle:{zoom:"50%"},attrs:{src:s(502)}}),t._v(" "),i("img",{staticStyle:{zoom:"67%"},attrs:{src:s(503)}}),t._v(" "),i("p",[t._v("总的来说这篇文章提出了一种有趣的混淆思路。")]),t._v(" "),i("p",[t._v("原文链接："),i("a",{attrs:{href:"https://ieeexplore.ieee.org/document/8737444",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://ieeexplore.ieee.org/document/8737444"),i("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=e.exports}}]);