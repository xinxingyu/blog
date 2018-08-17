(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{82:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"async-await"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#async-await","aria-hidden":"true"}},[t._v("#")]),t._v(" async | await")]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("参考")]),a("p",[a("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/async",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://es6.ruanyifeng.com/#docs/async")])])]),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[t._v("#")]),t._v(" 简介")]),a("ul",[a("li",[t._v("问：什么是async 、 await 呢？")]),a("li",[t._v("答：Generator 函数的语法糖。")])]),a("p",[t._v("async函数对 Generator 函数的改进，体现在以下四点。")]),a("ol",[a("li",[t._v("内置执行器")])]),a("p",[a("code",[t._v("generator")]),t._v(" 的执行需要执行器，所以有了 "),a("code",[t._v("co")])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("更好的语义")])]),a("p",[a("code",[t._v("async")]),t._v(" 和 "),a("code",[t._v("await")]),t._v("，比起星号和 "),a("code",[t._v("yield")]),t._v("，语义更清楚了。async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。")]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("更广的适用性")])]),a("p",[a("code",[t._v("co")]),t._v(" 模块约定，"),a("code",[t._v("yield")]),t._v(" 命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是 "),a("code",[t._v("Promise")]),t._v(" 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）。")]),a("ol",{attrs:{start:"4"}},[a("li",[t._v("返回值是 Promise。")])]),a("p",[a("code",[t._v("async")]),t._v(" 函数的返回值是 "),a("code",[t._v("Promise")]),t._v(" 对象，这比 "),a("code",[t._v("Generator")]),t._v(" 函数的返回值是 "),a("code",[t._v("Iterator")]),t._v(" 对象方便多了。你可以用 "),a("code",[t._v("then")]),t._v(" 方法指定下一步的操作。")]),a("p",[t._v("进一步说，"),a("code",[t._v("async")]),t._v("函数完全可以看作多个异步操作，包装成的一个 "),a("code",[t._v("Promise")]),t._v(" 对象，而"),a("code",[t._v("await")]),t._v("命令就是内部"),a("code",[t._v("then")]),t._v("命令的语法糖。")]),a("h2",{attrs:{id:"用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用法","aria-hidden":"true"}},[t._v("#")]),t._v(" 用法")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{attrs:{class:"token function-variable function"}},[t._v("timeout")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ms"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Promise")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("resolve"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token function"}},[t._v("resolve")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ms"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" test "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("timeout")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'aa'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" b "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("timeout")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'bb'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// await Promise.reject('出错了');")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" c "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'cc'")]),t._v("\n\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    b"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    c\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("test")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("then")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("// TODO...")]),t._v("\n  console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("v"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("catch")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("e "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" console"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("log")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'错误处理...'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),a("ul",[a("li",[a("code",[t._v("await")]),t._v("命令后面是一个 "),a("code",[t._v("Promise")]),t._v(" 对象。如果不是，会被转成一个立即"),a("code",[t._v("resolve")]),t._v("的 "),a("code",[t._v("Promise")]),t._v(" 对象。")]),a("li",[a("code",[t._v("await")]),t._v("命令后面的 "),a("code",[t._v("Promise")]),t._v(" 对象如果变为"),a("code",[t._v("reject")]),t._v("状态，则"),a("code",[t._v("reject")]),t._v("的参数会被"),a("code",[t._v("catch")]),t._v("方法的回调函数接收到。")])])])}],!1,null,null,null);s.default=o.exports}}]);