(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{502:function(t,e,a){"use strict";a.r(e);var s=a(43),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"prop-handsfree-debug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prop-handsfree-debug"}},[t._v("#")]),t._v(" Prop: "),a("code",[t._v("handsfree.debug")])]),t._v(" "),a("p",[t._v("This property contains references to all the debug elements used to hold the webcam stream and the skeleton and keypoint overlays. The following elements are all automatically created if you omit the "),a("RouterLink",{attrs:{to:"/ref/prop/config/#setup-canvas"}},[t._v(".setup config")]),t._v(" during instantiation.")],1),t._v(" "),a("h2",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),a("dl",[a("dt",[t._v("handsfree.debug.$canvas[modelName]: CANVAS")]),t._v(" "),a("dd",[t._v("The canvas element used for overlaying the skeleton/keypoints")]),t._v(" "),a("dt",[t._v("handsfree.debug.context[modelName]: CANVAS")]),t._v(" "),a("dd",[t._v("The canvas context used for overlaying the skeleton/keypoints")]),t._v(" "),a("dt",[t._v("handsfree.debug.$video: VIDEO")]),t._v(" "),a("dd",[t._v("The video element containing the webcam stream. You can access the stream directly with "),a("code",[t._v("handsfree.debug.$video.srcObject")]),t._v(". Currently this is only used by the "),a("RouterLink",{attrs:{to:"/ref/model/weboji/"}},[t._v("weboji model")]),t._v(" as each model handles the stream differently. This will be unified eventually!")],1),t._v(" "),a("dt",[t._v("handsfree.debug.$wrap: CANVAS")]),t._v(" "),a("dd",[t._v("The element that contains the canvases and video. If you need to move all the debug elements around in your DOM, this is the element to target")])]),t._v(" "),a("h2",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" handsfree "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Handsfree")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("hands"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nhandsfree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Move the debuggers to a DIV#debug-window")]),t._v("\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#debug-window'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("handsfree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$wrap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Apply a filter to the canvas")]),t._v("\nhandsfree"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("debug"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$canvas"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("weboji"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'blur(4px)'")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);