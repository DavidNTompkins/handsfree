(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{438:function(t,a,s){"use strict";s.r(a);var n={data:function(){return{demoOpts:{autostart:!0,weboji:!1,hands:!0,facemesh:!1,pose:!1,handpose:!1}}},methods:{startDemo:function(){this.$root.handsfree.update(this.demoOpts)}}},e=s(43),r=Object(e.a)(n,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"model-hands"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#model-hands"}},[t._v("#")]),t._v(" Model: Hands")]),t._v(" "),s("div",{staticClass:"row align-top"},[s("div",{staticClass:"col-6"},[s("p",[s("img",{attrs:{alt:"A 3D model of a hand projected above a person's hand",src:"https://media0.giphy.com/media/y4S6WFaCUWvqHL7UA8/giphy.gif"}})]),t._v(" "),s("ul",[s("li",[t._v("Powered by "),s("a",{attrs:{href:"https://www.npmjs.com/package/@mediapipe/hands"}},[t._v("MediaPipe's Hands")])]),t._v(" "),s("li",[t._v("Full "),s("a",{attrs:{href:"https://google.github.io/mediapipe/solutions/hands.html"}},[t._v("technical documentation")])])])]),t._v(" "),s("div",{staticClass:"col-6"},[s("Window",{attrs:{title:"Overview and basic demo"}},[s("section",[s("ul",[s("li",[t._v("🖐 22 2D hand landmarks")]),t._v(" "),s("li",[t._v("🖐🖐 Track up to 4 hands total")])]),t._v(" "),s("p",[t._v("This model includes dozens of "),s("router-link",{attrs:{to:"/ref/plugin/pinchers/"}},[t._v("Pinch Events")]),t._v(" and helper styles to get you going quickly, along with a "),s("router-link",{attrs:{to:"/ref/plugin/pinchScroll/"}},[t._v("plugin for scrolling pages handsfree")]),t._v(".")],1),t._v(" "),s("div",[s("HandsfreeToggle",{staticClass:"full-width handsfree-hide-when-started-without-hands",attrs:{"text-off":"Try basic Hands demo","text-on":"Stop Hands Model",opts:t.demoOpts}}),t._v(" "),s("button",{staticClass:"handsfree-show-when-started-without-hands handsfree-show-when-loading",attrs:{disabled:""}},[s("Fa-Spinner",{attrs:{spin:""}}),t._v(" Loading...")],1),t._v(" "),s("button",{staticClass:"handsfree-show-when-started-without-hands handsfree-hide-when-loading",on:{click:t.startDemo}},[s("Fa-Video"),t._v(" Try basic Hands demo")],1)],1)])])],1)]),t._v(" "),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("h3",{attrs:{id:"with-defaults"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#with-defaults"}},[t._v("#")]),t._v(" With defaults")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" handsfree "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Handsfree")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("hands"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nhandsfree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"with-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#with-config"}},[t._v("#")]),t._v(" With config")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" handsfree "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Handsfree")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  hands"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    enabled"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The maximum number of hands to detect [0 - 4]")]),t._v("\n    maxNumHands"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Minimum confidence [0 - 1] for a hand to be considered detected")]),t._v("\n    minDetectionConfidence"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Minimum confidence [0 - 1] for the landmark tracker to be considered detected")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Higher values are more robust at the expense of higher latency")]),t._v("\n    minTrackingConfidence"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nhandsfree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[t._v("#")]),t._v(" Data")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://i.imgur.com/yhSbAUU.png",alt:""}}),t._v(" "),s("br"),s("small",[t._v("Image source, MediaPipe: "),s("a",{attrs:{href:"https://google.github.io/mediapipe/solutions/hands#hand-landmark-model",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://google.github.io/mediapipe/solutions/hands#hand-landmark-model"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"hand-landmarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hand-landmarks"}},[t._v("#")]),t._v(" Hand Landmarks")]),t._v(" "),s("h4",{attrs:{id:"landmarks-and-landmarksvisible"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#landmarks-and-landmarksvisible"}},[t._v("#")]),t._v(" "),s("code",[t._v(".landmarks")]),t._v(" and "),s("code",[t._v(".landmarksVisible")])]),t._v(" "),s("p",[t._v("You can access the landmarks for each hand through:")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// handIndex [0 - 3] An array of landmark points for each detected hands")]),t._v("\nhandsfree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("landmarks\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Left hand, person #1")]),t._v("\nhandsfree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("landmarks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Right hand, person #1")]),t._v("\nhandsfree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("landmarks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Left hand, person #2")]),t._v("\nhandsfree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("landmarks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Right hand, person #2")]),t._v("\nhandsfree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("landmarks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("Each of these has 22 "),s("code",[t._v("{x, y}")]),t._v(" landmarks. To check if the hand is detected, you can use "),s("code",[t._v("handsfree.data.hands.landmarksVisible")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Left hand, person #1")]),t._v("\nhandsfree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("landmarksVisible"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Right hand, person #1")]),t._v("\nhandsfree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("landmarksVisible"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Left hand, person #2")]),t._v("\nhandsfree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("landmarksVisible"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Right hand, person #2")]),t._v("\nhandsfree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("landmarksVisible"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h4",{attrs:{id:"original-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#original-data"}},[t._v("#")]),t._v(" Original data")]),t._v(" "),s("p",[t._v("It's not recommended to use these as the hands are not always in the correct index, however it's exposed here to provide backward compatibility for those switching to Handsfree.js from using MediaPipe Hands directly.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// handIndex [0 - 3] An array of landmark points for each detected hands")]),t._v("\nhandsfree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("multiHandLandmarks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("handIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Landmark 0")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Landmark 1")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Landmark 20")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// hand 0, landmark 0")]),t._v("\nhandsfree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("multiHandLandmarks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("x\nhandsfree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("multiHandLandmarks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("y\n")])])]),s("h3",{attrs:{id:"is-it-the-right-or-left-hand"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#is-it-the-right-or-left-hand"}},[t._v("#")]),t._v(" Is it the right or left hand?")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// handIndex [0 - 3] An array of landmark points for each detected hands")]),t._v("\nhandsfree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("multiHandedness"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("handIndex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "Right" or "Left"')]),t._v("\n  label"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// The probability that it is "Right" or "Left"')]),t._v("\n  score\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// hand 0")]),t._v("\nhandsfree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("multiHandedness"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("label\nhandsfree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("multiHandedness"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("score\n")])])]),s("h3",{attrs:{id:"examples-of-accessing-the-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-of-accessing-the-data"}},[t._v("#")]),t._v(" Examples of accessing the data")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("handsfree "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Handsfree")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("hands"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nhandsfree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// From anywhere")]),t._v("\nhandsfree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("landmarks\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// From inside a plugin")]),t._v("\nhandsfree"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'logger'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Show a log whenever the left hand is visible")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("landmarksVisible"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("landmarks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// From an event")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'handsfree-data'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("detail\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Show a log whenever the right hand for person #2 is visible")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("landmarksVisible"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hands"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("landmarks"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("div",{staticClass:"row align-top"},[s("div",{staticClass:"col-6"},[s("Window",{attrs:{title:"Scroll pages handsfree",maximize:!0}},[s("section",[s("div",[s("router-link",{attrs:{to:"/ref/plugin/pinchScroll/"}},[s("img",{attrs:{alt:"Person scrolling page by pinching the air and moving hand up and down to scroll in that direction",src:"https://media1.giphy.com/media/BSkodGjuwBPAEwxjGv/giphy.gif"}})])],1),t._v(" "),s("p",[t._v("The "),s("router-link",{attrs:{to:"/ref/plugin/pinchScroll/"}},[t._v("pinchScroll plugin")]),t._v(" helps you scroll pages with a pinch gesture. In the GIF above, it's being used within a Browser Extension to scroll pages you visit handsfree.")],1),t._v(" "),s("div",[s("ul",[s("li",[s("router-link",{attrs:{to:"/ref/plugin/pinchScroll/"}},[t._v("Try it on the plugin page")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/ref/plugin/pinchScroll.html#full-plugin-code"}},[t._v("See the source")])],1)])])])])],1),t._v(" "),s("div",{staticClass:"col-6"},[s("Window",{attrs:{title:"Add your project"}},[t._v("\n      If you've made something with this model I'd love to showcase it here! DM me "),s("a",{attrs:{href:"https://twitter.com/midiblocks"}},[t._v("on Twitter")]),t._v(", "),s("a",{staticClass:"https://github.com/midiblocks/handsfree/edit/master/docs/ref/model/hands.md"},[t._v("make a pull request")]),t._v(", or "),s("a",{attrs:{href:"https://discord.gg/q96txF5Wf5"}},[t._v("find us on Discord")]),t._v(".  \n    ")])],1)]),t._v(" "),s("h2",{attrs:{id:"see-also"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#see-also"}},[t._v("#")]),t._v(" See Also")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/ref/plugin/palmPointers/"}},[t._v("palmPointers plugin")]),t._v(" - Creates pointers for each hand that can be moved around my moving the hands with the palm pointed towards the webcam")],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ref/plugin/pinchers/"}},[t._v("pinchers plugin")]),t._v(" - This plugin adds dozens of new events and helper styles for pinching any finger (index, middle, ring, pinky) to your thumb. It is enabled by default")],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/ref/plugin/pinchScroll/"}},[t._v("pinchScroll plugin")]),t._v(" - Adds the ability to scroll pages with a pinch gesture")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);