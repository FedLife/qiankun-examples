(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["dataset-nlp-annotation-workspace-textSegmentation"],{3707:function(t,e,n){},"9fff":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"hotkey",rawName:"v-hotkey.stop",value:t.keymap,expression:"keymap",modifiers:{stop:!0}}]},[n("div",{staticClass:"flex flex-between"},[n("el-tabs",{staticClass:"eltabs-inlineblock",attrs:{value:t.activeTab},on:{"tab-click":t.handlePanelClick}},[n("el-tab-pane",{attrs:{label:t.countInfoTxt.noAnnotation,name:"noAnnotation"}}),t._v(" "),n("el-tab-pane",{attrs:{label:t.countInfoTxt.haveAnnotation,name:"haveAnnotation"}})],1),t._v(" "),n("div",{staticClass:"flex flex-end f1"},[n("div",{staticClass:"ml-40 mr-10 my-auto"},[t._v("标注进度:")]),t._v(" "),n("el-progress",{staticClass:"my-auto",staticStyle:{width:"50%"},attrs:{"show-text":!1,"stroke-width":10,percentage:t.percentage}}),t._v(" "),n("div",{staticClass:"my-auto ml-10"},[t._v(t._s(t.progressTxt))])],1)],1),t._v(" "),n("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"20px"},attrs:{shadow:"never"}},[n("div",{staticClass:"clearfix flex flex-between",staticStyle:{"line-height":"32px"},attrs:{slot:"header"},slot:"header"},[t.fileId?n("div",{staticClass:"f1"},[t._v(" ")]):t._e(),t._v(" "),t.showCurrent?n("span",[t._v(t._s(t.current))]):t._e(),t._v(" "),n("div",{staticClass:"f1"},[n("div",{staticClass:"fr"},[n("el-button",{attrs:{disabled:!t.showPrev,type:"text"},on:{click:t.toPrev}},[t._v("上一篇("),n("i",{staticClass:"el-icon-back"}),t._v(")")]),t._v(" "),n("el-button",{attrs:{disabled:!t.showNext,type:"text"},on:{click:t.toNext}},[t._v("下一篇("),n("i",{staticClass:"el-icon-right"}),t._v(")")]),t._v(" "),n("el-popconfirm",{attrs:{title:"确认删除该文本？"},on:{onConfirm:t.deleteFile}},[n("el-button",{staticClass:"ml-10",attrs:{slot:"reference",disabled:!t.showDelete,type:"text"},slot:"reference"},[t._v("\n              删除\n            ")])],1)],1)])]),t._v(" "),n("div",{staticClass:"text"},[t.showException?n("Exception"):t.loading?n("div",{staticClass:"flex flex-center g6",staticStyle:{"min-height":"80px"}},[t._v("\n        加载中...\n      ")]):n("TextEditor",{ref:"textRef",staticClass:"text-annotate",attrs:{txt:t.state.txt},on:{mount:t.handleTextMount}})],1)]),t._v(" "),t.fileId?n("div",{staticClass:"action-bar mt-20 flex flex-end"},[n("el-button",{attrs:{type:"primary",disabled:t.comfirmDisabled},on:{click:t.confirm}},[t._v("确认（C）")])],1):t._e()],1)},a=[],r=n("ed09"),i=n("14e0"),c=n.n(i),s=n("f7d4"),u=n("46b1"),l=n("ed08"),f=n("493fb");function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function v(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?v(Object(n),!0).forEach((function(e){d(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e,n){return e=m(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t){var e=x(t,"string");return"symbol"===b(e)?e:String(e)}function x(t,e){if("object"!==b(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!==b(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var h={name:"TextSegmentationWorkSpace",components:{TextEditor:s["a"],Exception:u["a"]},inheritAttrs:!1,props:{activeTab:String,txt:String,countInfo:{type:Object,default:function(){return{}}},pageInfo:{type:Object,default:function(){return{}}},loading:Boolean,deleteFile:Function,toNext:Function,toPrev:Function,saving:Boolean,changeActiveTab:Function,fileId:[Number,String],annotation:[Array]},setup:function(t,e){var n=Object(r["n"])({activeTab:t.activeTab||"noAnnotation",txt:t.txt||"",sources:[]}),o=Object(r["o"])(null),a=Object(r["o"])(null),i=Object(r["a"])((function(){return{noAnnotation:"无标注信息（".concat(t.countInfo.noAnnotation,"）"),haveAnnotation:"有标注信息（".concat(t.countInfo.haveAnnotation,"）")}})),s=Object(r["a"])((function(){return n.loading||t.saving||!t.fileId})),u=Object(r["a"])((function(){var e=t.countInfo.noAnnotation+t.countInfo.haveAnnotation;return 0===e?0:t.countInfo.haveAnnotation/e*100})),b=Object(r["a"])((function(){return"".concat(t.countInfo.haveAnnotation,"/").concat(t.countInfo.haveAnnotation+t.countInfo.noAnnotation)})),v=function(t){var e=Object(l["z"])(t.color);return{color:e,border:"none"}},d=Object(r["a"])((function(){return t.pageInfo.total>0})),m=Object(r["a"])((function(){return"当前文本顺序：".concat(t.pageInfo.current)})),x=Object(r["a"])((function(){return t.pageInfo.current>1})),h=Object(r["a"])((function(){return t.pageInfo.current<t.pageInfo.total})),g=Object(r["a"])((function(){return t.pageInfo.total>0})),y=Object(r["a"])((function(){return!1===t.loading&&!t.fileId})),O=function(e){t.changeActiveTab(e)},j=function(t){var e=t.sources,o=t.type;if(e.forEach((function(t){a.value.addClass("range-selected",t.id)})),"from-input"===o){var r=e.map((function(t){return p(p({},t),{},{extra:{type:o}})}));Object.assign(n,{sources:n.sources.concat(r)})}},w=function(t){var e=t.id;a.value.remove(e);var o=Object(l["Jb"])(n.sources,(function(t){return t.id===e}));Object.assign(n,{sources:o})},_=function(t){t.hooks.Render.SelectedNodes.tap((function(t,e){if(e.length>1)return[];var n=e.filter((function(t){return t.$node.textContent.trim()}));return 0===n.length?[]:n}))},C=function(){a.value=new c.a({$root:o.value.$el,exceptSelectors:["span"]}),a.value.on(c.a.event.CREATE,j).on(c.a.event.CLICK,w),_(a.value),a.value.run()},I=function(){if(t.annotation){var e=Object(f["json2Hs"])(t.annotation);Object.assign(n,{sources:n.sources.concat(e)}),e.forEach((function(t){a.value.fromStore(t.startMeta,t.endMeta,t.text,t.id,t.extra)}))}},S=function(){Object(r["g"])((function(){C(),I()}))},k=function(){Object.assign(n,{sources:[]})},A=function(){if(!s.value){var t=n.sources.length?Object(f["hs2Json"])(n.sources):null;e.emit("confirm",{annotation:t})}},T=Object(r["a"])((function(){return{c:A}}));return Object(r["r"])((function(){return t.txt}),(function(t){n.txt=t})),Object(r["r"])((function(){return t.fileId}),(function(){k()})),Object(r["r"])((function(){return t.activeTab}),(function(t){n.activeTab=t})),{state:n,textRef:o,showException:y,showDelete:g,getStyle:v,showPrev:x,showNext:h,countInfoTxt:i,percentage:u,progressTxt:b,handlePanelClick:O,showCurrent:d,current:m,comfirmDisabled:s,handleTextMount:S,confirm:A,keymap:T}}},g=h,y=(n("b7e6"),n("2877")),O=Object(y["a"])(g,o,a,!1,null,null,null);e["default"]=O.exports},b7e6:function(t,e,n){"use strict";n("3707")}}]);