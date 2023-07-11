(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["dashboard-dashboard","dashboard-components-CardPanel","dashboard-components-Welcome"],{"0448":function(t,n){t.exports="//127.0.0.1:7201/img/advantage-1.2deee46e.png"},"06b7":function(t,n){t.exports="//127.0.0.1:7201/img/advantage-2.062a0509.png"},"30b1a":function(t,n,a){"use strict";a("e618")},"51f7":function(t,n,a){"use strict";a("cc9b")},5976:function(t,n,a){},"65d4":function(t,n){t.exports="//127.0.0.1:7201/img/advantage-3.da220cbc.png"},8511:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("el-card",{staticClass:"welcome",attrs:{shadow:"never"}},[e("div",{staticClass:"welcome-title"},[t._v("欢迎体验一站式 AI 模型开发平台")]),t._v(" "),e("div",{staticClass:"welcome-desc"},[t._v("\n    一站式 AI 模型开发平台（简称：一站式开发平台）面向 AI\n    模型生产的生命周期，提供了包括数据处理(数据集管理、智能标注和数据增强)、算法开发、模型训练和模型管理等功能，方便用户一站式构建\n    AI 算法。\n  ")]),t._v(" "),e("div",{staticClass:"welcome-title"},[t._v("产品优势")]),t._v(" "),e("el-row",{staticClass:"card-row"},[e("el-col",{staticClass:"card-col",attrs:{xs:12,sm:12,lg:6}},[e("div",{staticClass:"card-panel"},[e("img",{staticClass:"card-panel-img",attrs:{src:a("0448"),alt:""}}),t._v(" "),e("div",{staticClass:"card-panel-title"},[t._v("一站式开发")]),t._v(" "),e("div",{staticClass:"card-panel-desc"},[t._v("\n          为用户提供一站式深度学习开发功能，通过智能数据处理、便利的算法开发和模型训练，打通深度学习全链路。\n        ")])])]),t._v(" "),e("el-col",{staticClass:"card-col",attrs:{xs:12,sm:12,lg:6}},[e("div",{staticClass:"card-panel"},[e("img",{staticClass:"card-panel-img",attrs:{src:a("06b7"),alt:""}}),t._v(" "),e("div",{staticClass:"card-panel-title"},[t._v("集成先进算法")]),t._v(" "),e("div",{staticClass:"card-panel-desc"},[t._v("\n          除了囊括常规AI算法外，一站式开发平台还集成了多领域的独家算法，提供业界领先性能。\n        ")])])]),t._v(" "),e("el-col",{staticClass:"card-col",attrs:{xs:12,sm:12,lg:6}},[e("div",{staticClass:"card-panel"},[e("img",{staticClass:"card-panel-img",attrs:{src:a("65d4"),alt:""}}),t._v(" "),e("div",{staticClass:"card-panel-title"},[t._v("灵活易用")]),t._v(" "),e("div",{staticClass:"card-panel-desc"},[t._v("\n          除了一站式深度学习开发平台，亦提供可视化和动静结合编码方式，调试灵活，小白亦可快速上手。\n        ")])])]),t._v(" "),e("el-col",{staticClass:"card-col",attrs:{xs:12,sm:12,lg:6}},[e("div",{staticClass:"card-panel"},[e("img",{staticClass:"card-panel-img",attrs:{src:a("a869"),alt:""}}),t._v(" "),e("div",{staticClass:"card-panel-title"},[t._v("性能优越")]),t._v(" "),e("div",{staticClass:"card-panel-desc"},[t._v("\n          集成自主研发的分布式训练平台，提供高性能的分布式计算体验，节省训练成本和训练时间。\n        ")])])])],1)],1)},o=[],r={name:"Welcome"},c=r,i=(a("30b1a"),a("2877")),s=Object(i["a"])(c,e,o,!1,null,"30d639bb",null);n["default"]=s.exports},"9b1f":function(t,n,a){"use strict";a("5976")},"9eb2":function(t,n,a){"use strict";a.d(n,"f",(function(){return r})),a.d(n,"g",(function(){return c})),a.d(n,"a",(function(){return i})),a.d(n,"c",(function(){return s})),a.d(n,"b",(function(){return u})),a.d(n,"h",(function(){return l})),a.d(n,"e",(function(){return d})),a.d(n,"d",(function(){return b}));var e=a("b775"),o=a("f121");function r(t){return Object(e["a"])({url:"/".concat(o["a"].ALGORITHM,"/algorithms"),method:"get",params:t})}function c(t){return Object(e["a"])({url:"/".concat(o["a"].ALGORITHM,"/algorithms/getAll"),method:"get",params:t})}function i(t){return Object(e["a"])({url:"/".concat(o["a"].ALGORITHM,"/algorithms"),method:"post",data:t})}function s(t){return Object(e["a"])({url:"/".concat(o["a"].ALGORITHM,"/algorithms"),method:"put",data:t})}function u(t){return Object(e["a"])({url:"/".concat(o["a"].ALGORITHM,"/algorithms"),method:"delete",data:t})}function l(){return Object(e["a"])({url:"/".concat(o["a"].ALGORITHM,"/algorithms/myAlgorithmCount"),method:"get"})}function d(){return Object(e["a"])({url:"/".concat(o["a"].ALGORITHM,"/algorithms/getInferenceAlgorithm"),method:"get"})}function b(t){return Object(e["a"])({url:"/".concat(o["a"].ALGORITHM,"/algorithms/findAlgorithmByName"),method:"get",params:t})}},a869:function(t,n){t.exports="//127.0.0.1:7201/img/advantage-4.60dab3ff.png"},b7b43:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"dashboard-container"},[a("welcome"),t._v(" "),t.show.data?[a("div",{staticClass:"section-title"},[t._v("数据管理")]),t._v(" "),a("el-card",{staticClass:"section-card",attrs:{shadow:"hover"}},[a("div",{staticClass:"card-head"},[a("div",{staticClass:"card-head-title"},[t._v("数据集")]),t._v(" "),a("el-button",{staticClass:"card-head-button",attrs:{type:"primary"},on:{click:function(n){return t.goTo("/data/datasets")}}},[t._v("进入项目")])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{xs:12,sm:12,lg:6}},[a("CardPanel",{attrs:{icon:"shuju1",name:"我的数据集",value:t.privateCount}})],1),t._v(" "),a("el-col",{attrs:{xs:12,sm:12,lg:6}},[a("CardPanel",{attrs:{icon:"shujumoxing",name:"预置数据集",value:t.publicCount}})],1)],1)],1)]:t._e(),t._v(" "),t.show.development?[a("div",{staticClass:"section-title"},[t._v("算法开发")]),t._v(" "),a("el-card",{staticClass:"section-card",attrs:{shadow:"hover"}},[a("div",{staticClass:"card-head"},[a("div",{staticClass:"card-head-title"},[t._v("编码式建模")]),t._v(" "),a("el-button",{staticClass:"card-head-button",attrs:{type:"primary"},on:{click:function(n){return t.goTo("/development/notebook")}}},[t._v("进入项目")])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{xs:12,sm:12,lg:6}},[a("CardPanel",{attrs:{icon:"zongshili",name:"总实例",value:t.notebookCount+t.algorithmCount}})],1),t._v(" "),a("el-col",{attrs:{xs:12,sm:12,lg:6}},[a("CardPanel",{attrs:{icon:"yunhangzhong",name:"在建算法数",value:t.notebookCount}})],1),t._v(" "),a("el-col",{attrs:{xs:12,sm:12,lg:6}},[a("CardPanel",{attrs:{icon:"moxingzongshu",name:"算法总数",value:t.algorithmCount}})],1)],1)],1)]:t._e(),t._v(" "),t.show.training?[a("div",{staticClass:"section-title"},[t._v("训练任务")]),t._v(" "),a("el-card",{staticClass:"section-card",attrs:{shadow:"hover"}},[a("div",{staticClass:"card-head"},[a("div",{staticClass:"card-head-title"},[t._v("任务详情")]),t._v(" "),a("el-button",{staticClass:"card-head-button",attrs:{type:"primary"},on:{click:function(n){return t.goTo("/training/job")}}},[t._v("进入项目")])],1),t._v(" "),a("el-row",[a("el-col",{attrs:{xs:12,sm:12,lg:6}},[a("CardPanel",{attrs:{icon:"zongshiyanbeifen",name:"运行中任务",value:t.runJobCount}})],1),t._v(" "),a("el-col",{attrs:{xs:12,sm:12,lg:6}},[a("CardPanel",{attrs:{icon:"jinhangzhongshiyanbeifen",name:"已完成任务",value:t.finishJobCount}})],1)],1)],1)]:t._e()],2)},o=[],r=a("2f62"),c=a("e659"),i=a("9eb2"),s=a("cce0"),u=a("141b"),l=a("be09"),d=a("8511");function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function f(t,n){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.push.apply(a,e)}return a}function m(t){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?f(Object(a),!0).forEach((function(n){v(t,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(a,n))}))}return t}function v(t,n,a){return n=h(n),n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function h(t){var n=p(t,"string");return"symbol"===b(n)?n:String(n)}function p(t,n){if("object"!==b(t)||null===t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var e=a.call(t,n||"default");if("object"!==b(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}var g={name:"Dashboard",components:{Welcome:d["default"],CardPanel:l["default"]},data:function(){return{show:{data:!1,development:!1,training:!1},publicCount:0,privateCount:0,notebookCount:0,algorithmCount:0,runJobCount:0,finishJobCount:0}},computed:m({},Object(r["d"])(["permissions"])),mounted:function(){this.permissions.includes("data")&&(this.show.data=!0,this.getDatasetsCount()),this.permissions.includes("development")&&(this.getNotebookCount(),this.getAlgorithmCount(),this.show.development=!0),this.permissions.includes("training")&&(this.getTrainJobCount(),this.show.training=!0)},methods:{getDatasetsCount:function(){var t=this;Object(u["t"])().then((function(n){t.publicCount=n.publicCount,t.privateCount=n.privateCount}))},getNotebookCount:function(){var t=this;Object(c["h"])().then((function(n){t.notebookCount=n}))},getAlgorithmCount:function(){var t=this;Object(i["h"])().then((function(n){t.algorithmCount=n.count}))},getTrainJobCount:function(){var t=this;Object(s["m"])().then((function(n){t.runJobCount=n.runJobCount,t.finishJobCount=n.finishJobCount}))},goTo:function(t){this.$router.push({path:t})}}},O=g,C=(a("51f7"),a("2877")),_=Object(C["a"])(O,e,o,!1,null,"5a84ee98",null);n["default"]=_.exports},be09:function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"card-panel"},[a("IconFont",{staticClass:"card-panel-icon",style:{fontSize:"32px"},attrs:{type:t.icon}}),t._v(" "),a("div",{staticClass:"card-panel-text"},[a("div",{staticClass:"card-panel-text-name"},[t._v(t._s(t.name))]),t._v(" "),a("div",{staticClass:"card-panel-text-value"},[t._v(t._s(t.value))])])],1)},o=[],r={name:"CardPanel",props:{icon:{type:String,default:""},name:{type:String,default:""},value:[Number,String]}},c=r,i=(a("9b1f"),a("2877")),s=Object(i["a"])(c,e,o,!1,null,"4e39b4ff",null);n["default"]=s.exports},cc9b:function(t,n,a){},cce0:function(t,n,a){"use strict";a.d(n,"a",(function(){return c})),a.d(n,"e",(function(){return i})),a.d(n,"d",(function(){return s})),a.d(n,"n",(function(){return u})),a.d(n,"o",(function(){return l})),a.d(n,"b",(function(){return d})),a.d(n,"h",(function(){return b})),a.d(n,"g",(function(){return f})),a.d(n,"m",(function(){return m})),a.d(n,"j",(function(){return v})),a.d(n,"k",(function(){return h})),a.d(n,"l",(function(){return p})),a.d(n,"f",(function(){return g})),a.d(n,"i",(function(){return O}));var e=a("b775"),o=a("f121");function r(t){return Object(e["a"])({url:"/".concat(o["a"].TRAIN,"/trainJob"),method:"get",params:t})}function c(t){return Object(e["a"])({url:"/".concat(o["a"].TRAIN,"/trainJob"),method:"post",data:t})}function i(t){return Object(e["a"])({url:"/".concat(o["a"].TRAIN,"/trainJob"),method:"put",data:t})}function s(t){return Object(e["a"])({url:"/".concat(o["a"].TRAIN,"/trainJob"),method:"delete",data:t})}function u(t){return Object(e["a"])({url:"/".concat(o["a"].TRAIN,"/trainJob/resume"),method:"post",data:t})}function l(t){return Object(e["a"])({url:"/".concat(o["a"].TRAIN,"/trainJob/stop"),method:"post",data:t})}function d(t){return Object(e["a"])({url:"/".concat(o["a"].TRAIN,"/trainJob/batchStop"),method:"post",data:t})}function b(t){return Object(e["a"])({url:"/".concat(o["a"].TRAIN,"/trainJob/trainJobVersionDetail"),method:"get",params:t})}function f(t){return Object(e["a"])({url:"/".concat(o["a"].TRAIN,"/trainJob/jobDetail"),method:"get",params:{id:t}})}function m(){return Object(e["a"])({url:"/".concat(o["a"].TRAIN,"/trainJob/mine"),method:"get"})}function v(t){return Object(e["a"])({url:"/".concat(o["a"].TRAIN,"/trainLog/pod/").concat(t),method:"get"})}function h(t){return Object(e["a"])({url:"/".concat(o["a"].TRAIN,"/trainJob/model"),method:"get",params:t})}function p(t){return Object(e["a"])({url:"/".concat(o["a"].TRAIN,"/trainJob/visualTrain"),method:"get",params:t})}function g(t){return Object(e["a"])({url:"/".concat(o["a"].TRAIN,"/trainJob/defaultAtlasParams"),method:"get",params:t})}function O(t){return Object(e["a"])({url:"/".concat(o["a"].TRAIN,"/trainJob/defaultDdrlParams"),method:"get",params:t})}n["c"]={list:r,add:c,edit:i,del:s}},e618:function(t,n,a){},e659:function(t,n,a){"use strict";a.d(n,"g",(function(){return r})),a.d(n,"a",(function(){return c})),a.d(n,"j",(function(){return s})),a.d(n,"k",(function(){return u})),a.d(n,"i",(function(){return l})),a.d(n,"h",(function(){return d})),a.d(n,"c",(function(){return b})),a.d(n,"f",(function(){return f})),a.d(n,"e",(function(){return m})),a.d(n,"b",(function(){return v}));var e=a("b775"),o=a("f121");function r(t){return Object(e["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks"),method:"get",params:t})}function c(t){return Object(e["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks"),method:"post",data:t})}function i(t){return Object(e["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks"),method:"delete",data:t})}function s(t){return Object(e["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks/start"),method:"put",params:t})}function u(t){return Object(e["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks/stop"),method:"put",params:t})}function l(t){return Object(e["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks/").concat(t),method:"get"})}function d(){return Object(e["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks/run-number"),method:"get"})}function b(t,n){return Object(e["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks/create/").concat(t),method:"post",data:n})}function f(t){return Object(e["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks/").concat(t,"/get-address"),method:"get"})}function m(t){return Object(e["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks/detail"),method:"post",data:t})}function v(){return Object(e["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks/batchStop"),method:"put"})}n["d"]={list:r,add:c,del:i,start:s,stop:u,open:l,detail:m}}}]);