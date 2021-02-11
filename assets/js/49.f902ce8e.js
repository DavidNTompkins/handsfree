(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{484:function(t,s,e){"use strict";e.r(s);var a=e(43),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"method-handsfree-pause"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#method-handsfree-pause"}},[t._v("#")]),t._v(" Method: "),e("code",[t._v("handsfree.pause()")])]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("handsfree"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("pause")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Pauses the "),e("RouterLink",{attrs:{to:"/guide/the-loop/"}},[t._v("main loop")]),t._v(" while keeping the webcam stream active. By keeping the stream open, pausing allows you to instantly unpause without needing to wait for a new stream to be created.")],1),t._v(" "),e("p",[t._v("In complex apps with multiple routes, loading screens, or processing heavy workflows the "),e("code",[t._v("handsfree.pause()")]),t._v(" method helps you free resources until tracking is needed again.")]),t._v(" "),e("p",[t._v('Pausing can also be used in combination with start as a sort of "preloader" to load all dependencies for all models, making switching between models instant.')]),t._v(" "),e("p",[t._v("This is different from "),e("RouterLink",{attrs:{to:"/ref/method/stop/"}},[t._v("handsfree.stop()")]),t._v(", which ends the webcam stream completely.")],1),t._v(" "),e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" handsfree "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Handsfree")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("weboji"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Load dependencies and start the webcam, but don't start the loop")]),t._v("\nhandsfree"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  handsfree"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("pause")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("h2",{attrs:{id:"see-also"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[t._v("#")]),t._v(" See also")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/ref/prop/isLooping/"}},[t._v("handsfree.isLooping")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/ref/method/unpause/"}},[t._v("handsfree.unpause()")])],1)])])}),[],!1,null,null,null);s.default=n.exports}}]);