(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["home","home-imagePublic"],{1540:function(t,e,r){},"4dec":function(t,e){t.exports="//127.0.0.1:7201/img/circle.2730f23e.png"},5736:function(t,e){t.exports="//127.0.0.1:7201/img/gift3.b2cdce62.png"},5962:function(t,e,r){"use strict";r("1540")},"65a7":function(t,e){t.exports="//127.0.0.1:7201/img/gift.2b4bf15e.png"},"71f3":function(t,e){t.exports="//127.0.0.1:7201/img/icon-deep.989790ff.png"},"7abe":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-content"},[n("div",{staticClass:"index-header"},[t._m(0),t._v(" "),n("div",{staticClass:"index-avatar"},[n("img",{staticClass:"user-avatar",attrs:{src:t.user.avatar,alt:t.user.nickName,title:t.user.nickName}})])]),t._v(" "),n("div",{staticClass:"index-plate"},[n("div",{staticClass:"index-posi"},[n("img",{staticStyle:{position:"absolute",top:"20%",left:"12%",width:"3vw"},attrs:{src:r("b8d5")}}),t._v(" "),n("img",{staticStyle:{position:"absolute",top:"0",right:"7%",width:"3vw"},attrs:{src:r("b8d5")}}),t._v(" "),n("img",{staticClass:"plate",attrs:{src:r("4dec")}}),t._v(" "),t._l(t.imageList,(function(e,r){return n("image-public",{key:r,staticClass:"yuanshi",class:t.transition?e.class:"",attrs:{base:e.base,hoverurl:e.hoverurl,title:e.title}})})),t._v(" "),n("div",{staticClass:"image-model yuanshi",class:t.transition?"image-moxing":"",on:{click:t.openMA}},[n("el-popover",{attrs:{placement:"top",content:"炼知平台是由模型知识驱动的深度学习定制平台。平台内置了丰富的预训练模型库和多属性模型关系图谱，覆盖分类、分割、深度估计等常见视觉任务，并通过灵活可配的知识重组技术为用户提供简单易用的模型定制能力。",width:"240",trigger:"hover"}},[n("img",{attrs:{slot:"reference",src:r("9288")},slot:"reference"})]),t._v(" "),n("span",{staticClass:"title"},[t._v("模型炼知框架")])],1),t._v(" "),n("div",{staticClass:"image-model yuanshi",class:t.transition?"image-depth":"",on:{click:t.openDL}},[n("el-popover",{attrs:{placement:"top",content:"平台面向AI模型生产的生命周期，提供了包括数据处理(数据集管理、智能标注和数据增强)、算法开发、模型训练和模型管理等功能，方便用户一站式构建AI算法。",width:"240",trigger:"hover"}},[n("img",{attrs:{slot:"reference",src:r("71f3")},slot:"reference"})]),t._v(" "),n("span",{staticClass:"title"},[t._v("深度学习框架")])],1)],2),t._v(" "),t._m(1),t._v(" "),t._m(2)])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-logo"},[n("img",{attrs:{src:r("931e"),width:"60",alt:"logo"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"index-mask"},[r("div",{staticStyle:{width:"100%",height:"100%",background:"#fff",opacity:"0.8"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"plate-center"},[n("img",{attrs:{src:r("b708")}})])}],o=r("2f62"),a=r("5f87"),s=r("65a7"),c=r.n(s),l=r("7dea"),u=r.n(l),f=r("89a25"),p=r.n(f),m=r("a031"),g=r.n(m),v=r("5736"),d=r.n(v),b=r("7faf"),h=r.n(b),y=r("8fc7");function _(t){return _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},_(t)}function w(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function x(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?w(Object(r),!0).forEach((function(e){O(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function O(t,e,r){return e=j(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function j(t){var e=C(t,"string");return"symbol"===_(e)?e:String(e)}function C(t,e){if("object"!==_(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==_(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var S={name:"DubheIndex",components:{ImagePublic:y["default"]},data:function(){return{hover:!0,timer:null,imageList:[{base:c.a,hoverurl:u.a,title:"强化学习框架",class:"image-one"},{base:d.a,hoverurl:h.a,title:"",class:"image-two"},{base:d.a,hoverurl:h.a,title:"联邦学习框架",class:"image-three"},{base:p.a,hoverurl:g.a,title:"自动机器学习框架",class:"image-four"},{base:c.a,hoverurl:u.a,title:"",class:"image-five"}],transition:!1}},computed:x({},Object(o["d"])(["user"])),mounted:function(){var t=this;this.timer=setTimeout((function(){t.transition=!0}),500),this.$once("hook:beforeDestroy",(function(){clearTimeout(t.timer),t.timer=null}))},methods:{openMA:function(){var t="".concat("http://127.0.0.1","/#/login?token=").concat(Object(a["a"])());window.open(t,"_blank")},openDL:function(){window.open("/","_blank")}}},k=S,P=(r("ddf4"),r("2877")),D=Object(P["a"])(k,n,i,!1,null,"3be63a3b",null);e["default"]=D.exports},"7d98":function(t,e,r){},"7dea":function(t,e){t.exports="//127.0.0.1:7201/img/gift-hover.9dff6e49.png"},"7faf":function(t,e){t.exports="//127.0.0.1:7201/img/gift3-hover.c092fc97.png"},"89a25":function(t,e){t.exports="//127.0.0.1:7201/img/gif2.775fa987.png"},"8fc7":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"public"},[r("el-popover",{attrs:{placement:"top",trigger:"hover",content:"敬请期待","popper-class":"w100"}},[r("div",{attrs:{slot:"reference"},on:{mouseenter:function(e){t.hover=!1},mouseleave:function(e){t.hover=!0}},slot:"reference"},[t.hover?r("img",{attrs:{src:t.base}}):r("img",{attrs:{src:t.hoverurl}})])]),t._v(" "),r("span",{staticClass:"hover-tit",style:t.hoverColor},[t._v(t._s(t.title))])],1)},i=[],o={name:"ImagePublic",props:{base:{type:String,default:""},hoverurl:{type:String,default:""},title:{type:String,default:null}},data:function(){return{hover:!0}},computed:{hoverColor:function(){return this.hover?"color: rgba(178, 178, 178, 1)":"color: #444"}}},a=o,s=(r("5962"),r("2877")),c=Object(s["a"])(a,n,i,!1,null,"02ab3e7f",null);e["default"]=c.exports},9288:function(t,e){t.exports="//127.0.0.1:7201/img/icon-model.94a73123.png"},"931e":function(t,e,r){t.exports=r.p+"static/img/dubhe-logo.9d96ac34.svg"},a031:function(t,e){t.exports="//127.0.0.1:7201/img/gift2-hover.cd2cae40.png"},b708:function(t,e){t.exports="//127.0.0.1:7201/img/zhongjian .fa2dd77a.png"},b8d5:function(t,e){t.exports="//127.0.0.1:7201/img/bg-quan.2ef85413.png"},ddf4:function(t,e,r){"use strict";r("7d98")}}]);