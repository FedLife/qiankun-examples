(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["dataset-pointCloud-editor-layout~dataset-pointCloud-editor-layout-Header","dataset-pointCloud-editor-style-scss"],{1596:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-center flex-col usn"},[n("span",[t._v(t._s(t.fileName))]),t._v(" "),n("div",{staticClass:"flex flex-center flex-row annotation__pagination"},[n("IconFont",{directives:[{name:"click-once",rawName:"v-click-once"}],class:t.className("isFirst"),attrs:{type:"diyizhen"},on:{click:t.toFirst}}),t._v(" "),n("IconFont",{directives:[{name:"click-once",rawName:"v-click-once"}],class:t.className("isPrev"),attrs:{type:"shangyizhen"},on:{click:t.toPrev}}),t._v(" "),n("IconFont",{directives:[{name:"click-once",rawName:"v-click-once"}],class:t.className("isNext"),attrs:{type:"xiayizhen"},on:{click:t.toNext}}),t._v(" "),n("IconFont",{directives:[{name:"click-once",rawName:"v-click-once"}],class:t.className("isLast"),attrs:{type:"zuihouyizhen"},on:{click:t.toLast}}),t._v(" "),t.total?n("el-pagination",{staticClass:"pag",attrs:{"current-page":t.currentModel,"page-size":1,layout:"jumper",total:t.total},on:{"update:currentPage":function(e){t.currentModel=e},"update:current-page":function(e){t.currentModel=e}}}):n("span",[t._v("0")]),t._v("\n    /\n    "+t._s(t.total)+"\n  ")],1)])},o=[],a=n("ed09"),i=n("da2d"),l={name:"FilesAction",setup:function(){var t=Object(a["e"])(i["editorSymbol"]),e=t.value.data,n=Object(a["a"])({get:function(){return e.filesListLength?e.currentIndex+1:(e.setCurrentIndex(0),0)},set:function(n){n!==e.currentIndex+1&&(e.setCurrentIndex(n-1),t.value.resetEditor())}}),r=Object(a["a"])((function(){var t;return null===(t=e.currentFile)||void 0===t?void 0:t.name})),o=Object(a["a"])((function(){return e.filesListLength})),l=Object(a["a"])((function(){return{isFirst:0===e.currentIndex,isPrev:e.currentIndex<1,isNext:e.currentIndex+1>=e.filesListLength,isLast:!e.filesListLength||e.currentIndex+1===e.filesListLength}})),c=function(){l.value.isFirst||(e.setCurrentIndex(0),t.value.resetEditor())},s=function(){l.value.isPrev||(e.setCurrentIndex(e.currentIndex-1),t.value.resetEditor())},u=function(){l.value.isNext||(e.setCurrentIndex(e.currentIndex+1),t.value.resetEditor())},d=function(){l.value.isLast||(e.setCurrentIndex(e.filesListLength-1),t.value.resetEditor())},f=function(t){return{"mr-20 pointer":!0,"icon-disabled":l.value[t]}};return{currentModel:n,fileName:r,total:o,isDisabled:l,toFirst:c,toPrev:s,toNext:u,toLast:d,className:f}}},c=l,s=(n("e382"),n("2877")),u=Object(s["a"])(c,r,o,!1,null,"292f5874",null);e["default"]=u.exports},"18ac":function(t,e,n){},"2e5b":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BaseModal",{staticClass:"el-modal__dark",attrs:{visible:t.visibleValue,title:"文件筛选",width:"700px"},on:{"update:visible":function(e){t.visibleValue=e},cancel:function(e){t.visibleValue=!1},close:function(e){t.checkList=[]},ok:t.handleOk}},[n("div",{staticClass:"flex"},[n("label",{staticClass:"mr-10",staticStyle:{color:"#dbdbdb"}},[t._v("标注状态:")]),t._v(" "),n("el-checkbox-group",{model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},t._l(t.stateMap,(function(e){return n("el-checkbox",{key:e.key,attrs:{label:e.key}},[t._v(t._s(e.val))])})),1)],1)])},o=[],a=n("ed09"),i=n("f109"),l=n("da2d");function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function s(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */s=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(E){u=function(t,e,n){return t[e]=n}}function d(t,e,n,o){var a=e&&e.prototype instanceof v?e:v,i=Object.create(a.prototype),l=new L(o||[]);return r(i,"_invoke",{value:k(t,n,l)}),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(E){return{type:"throw",arg:E}}}t.wrap=d;var p={};function v(){}function h(){}function b(){}var m={};u(m,a,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(I([])));g&&g!==e&&n.call(g,a)&&(m=g);var w=b.prototype=v.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function o(r,a,i,l){var s=f(t[r],t,a);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==c(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){o("next",t,i,l)}),(function(t){o("throw",t,i,l)})):e.resolve(d).then((function(t){u.value=t,i(u)}),(function(t){return o("throw",t,i,l)}))}l(s.arg)}var a;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return a=a?a.then(r,r):r()}})}function k(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return C()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var l=_(i,n);if(l){if(l===p)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=f(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}function _(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var o=f(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function I(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return h.prototype=b,r(w,"constructor",{value:b,configurable:!0}),r(b,"constructor",{value:h,configurable:!0}),h.displayName=u(b,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,u(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(O.prototype),u(O.prototype,i,(function(){return this})),t.AsyncIterator=O,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new O(d(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},x(w),u(w,l,"Generator"),u(w,a,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=I,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:I(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},t}function u(t,e,n,r,o,a,i){try{var l=t[a](i),c=l.value}catch(s){return void n(s)}l.done?e(c):Promise.resolve(c).then(r,o)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){u(a,r,o,i,l,"next",t)}function l(t){u(a,r,o,i,l,"throw",t)}i(void 0)}))}}function f(t,e){return m(t)||b(t,e)||v(t,e)||p()}function p(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function v(t,e){if(t){if("string"===typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(t,e):void 0}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function b(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a,i,l=[],c=!0,s=!1;try{if(a=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(l.push(r.value),l.length!==e);c=!0);}catch(u){s=!0,o=u}finally{try{if(!c&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(s)throw o}}return l}}function m(t){if(Array.isArray(t))return t}var y={name:"FilterModal",components:{BaseModal:i["a"]},setup:function(){var t=Object(a["o"])(!1),e=Object(a["o"])([]),n=Object(a["o"])(null),r=Object(a["a"])((function(){return Object.entries(l["fileStatusMap"]).map((function(t){var e=f(t,2),n=e[0],r=e[1];return{key:n,val:r}}))})),o=function(e){t.value=!0,n.value=e},i=function(){var r=d(s().mark((function r(){var o;return s().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return o=e.value.some((function(t){return"undefined"===t}))?{datasetId:n.value.data.datasetId}:{datasetId:n.value.data.datasetId,markStatus:e.value},r.next=3,n.value.data.getFilesList(o);case 3:n.value.resetEditor(),n.value.data.setCurrentIndex(0),t.value=!1;case 6:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return{visibleValue:t,checkList:e,stateMap:r,showModal:o,handleOk:i}}},g=y,w=(n("ea8b"),n("2877")),x=Object(w["a"])(g,r,o,!1,null,"5c47e6c4",null);e["default"]=x.exports},"39f0":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor-header flex flex-between flex-vertical-align"},[n("div",{staticClass:"back"},[n("span",{staticClass:"pointer",on:{click:t.goDataset}},[n("i",{staticClass:"el-icon-back"}),t._v("\n      返回\n    ")])]),t._v(" "),n("FilesAction"),t._v(" "),n("div",{staticClass:"flex flex-vertical-align"},[n("el-button",{staticClass:"mr-10",attrs:{type:"primary",disabled:t.isCheck},on:{click:t.onPublish}},[t._v("\n      确认发布\n    ")]),t._v(" "),n("el-button",{attrs:{type:"primary",disabled:t.disabled||t.isCheck},on:{click:t.onDifficultPublish}},[t._v("\n      难例发布\n    ")]),t._v(" "),n("el-divider",{staticClass:"divider",attrs:{type:"vertical"}}),t._v(" "),n("el-tooltip",{attrs:{content:"标注统计","popper-class":"tip-db",placement:"bottom"}},[n("IconFont",{staticClass:"mr-10 f20 pointer",attrs:{type:"xinxitongji"},on:{click:t.openStatisticsModal}})],1),t._v(" "),n("el-tooltip",{attrs:{content:"文件筛选","popper-class":"tip-db",placement:"bottom"}},[n("IconFont",{staticClass:"f20 pointer",attrs:{type:"wenjianshaixuan"},on:{click:t.filterInfo}})],1)],1),t._v(" "),n("statistics-modal",{ref:"modalRef"}),t._v(" "),n("filter-modal",{ref:"filterModalRef"}),t._v(" "),n("dataset-modal",{ref:"datasetModalRef"})],1)},o=[],a=n("ed09"),i=n("5c96"),l=n("da2d"),c=n("438a"),s=n("1596"),u=n("4888"),d=n("2e5b"),f={components:{FilesAction:s["default"],StatisticsModal:u["default"],DatasetModal:c["default"],FilterModal:d["default"]},props:{disabled:Boolean,datasetInfo:{type:Object,default:function(){return{}}}},setup:function(t,e){var n=t.datasetInfo,r=e.root.$router,o=Object(a["e"])(l["editorSymbol"]),c=o.value.data,s=Object(a["o"])(null),u=Object(a["o"])(null),d=Object(a["o"])(null),f=Object(a["a"])((function(){return c.isCheck})),p=function(){return r.push({name:"PointCloud"})},v=function(){i["MessageBox"].confirm("您是否确认要发布这个数据集?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){c.onPublish()}))},h=function(){d.value.showModal("publish",{id:n.datasetId,difficultyCount:c.diffCount,dark:!0,labelGroupId:n.labelGroupId,labelGroupType:n.labelGroupType})},b=function(){u.value.showModal(o.value)},m=function(){s.value.showModal(c.labelInfo)};return{modalRef:s,datasetModalRef:d,filterModalRef:u,isCheck:f,goDataset:p,onPublish:v,filterInfo:b,onDifficultPublish:h,openStatisticsModal:m}}},p=f,v=(n("a311"),n("2877")),h=Object(v["a"])(p,r,o,!1,null,"69e1d9e6",null);e["default"]=h.exports},"438a":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BaseModal",{class:{"el-modal__dark":t.state.dark},attrs:{visible:t.state.modalVisible,title:t.title,loading:t.state.confirmLoading,width:"700px",okText:"提交"},on:{"update:visible":function(e){return t.$set(t.state,"modalVisible",e)},cancel:function(e){t.state.modalVisible=!1},ok:t.onSubmit,close:t.onClose}},[n("el-form",{ref:"formRef",attrs:{model:t.modelState,rules:t.rules,"label-width":"100px"}},[t.state.difficultyCount?[n("el-form-item",{attrs:{label:"难例数量"}},[n("label",{staticStyle:{"font-size":"16px",color:"#abb9f2"}},[t._v(t._s(t.state.difficultyCount))])])]:t._e(),t._v(" "),n("el-form-item",{attrs:{label:"数据集名称",prop:"name"}},[n("el-input",{attrs:{placeholder:"请输入数据集名称","show-word-limit":""},model:{value:t.modelState.name,callback:function(e){t.$set(t.modelState,"name",e)},expression:"modelState.name"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"标签组",prop:"labelGroupId"}},[n("el-cascader",{staticStyle:{width:"100%","line-height":"32px"},attrs:{clearable:"",placeholder:"请选择标签组",options:t.labelGroupOptions,props:{expandTrigger:"hover"},"show-all-levels":!1,filterable:"",disabled:t.isDisabled},on:{change:t.handleGroupChange},model:{value:t.modelState.labelGroup,callback:function(e){t.$set(t.modelState,"labelGroup",e)},expression:"modelState.labelGroup"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"描述"}},[n("el-input",{attrs:{type:"textarea",placeholder:"数据集描述长度不能超过100字",maxlength:"100",rows:"3","show-word-limit":""},model:{value:t.modelState.remark,callback:function(e){t.$set(t.modelState,"remark",e)},expression:"modelState.remark"}})],1),t._v(" "),n("div",{class:{"border-primary":t.state.isShow,"border-base":!t.state.isShow},staticStyle:{"border-radius":"4px"}},[n("div",{staticClass:"flex flex-vertical-align pointer",staticStyle:{padding:"10px 10px"},on:{click:t.handleShow}},[n("span",[t.state.isShow?n("label",{staticClass:"el-icon-arrow-down"}):n("label",{staticClass:"el-icon-arrow-right"})]),t._v(" "),n("label",{staticClass:"pl-5"},[t._v("高级设置")])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.state.isShow,expression:"state.isShow"}],style:{padding:"4px 11px"}},[n("p",[n("span",{staticStyle:{"margin-left":"20px"}},[t._v("标注范围(m)")]),t._v(" "),n("el-tooltip",{attrs:{effect:"dark",placement:"top",content:"标注坐标范围，坐标轴负方向请填写负值"}},[n("i",{staticClass:"el-icon-question"})])],1),t._v(" "),n("el-form-item",{attrs:{"label-width":"10px",error:t.scopeRules}},[n("div",{staticClass:"flex flex-between"},t._l(t.deepPage,(function(e){return n("div",{key:e.key,staticClass:"flex flex-center ml-10"},[n("label",{staticStyle:{width:"110px"}},[t._v(t._s(e.label))]),t._v(" "),n("el-input",{model:{value:t.modelState[e.key],callback:function(n){t.$set(t.modelState,e.key,n)},expression:"modelState[deep.key]"}})],1)})),0)])],1)])],2)],1)},o=[],a=n("ed09"),i=n("5c96"),l=n("2ef0"),c=n("54d4"),s=n("fcbd"),u=n("f109"),d=n("61f7"),f=n("3da5"),p=n("da2d");function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){m(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function m(t,e,n){return e=y(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(t){var e=g(t,"string");return"symbol"===v(e)?e:String(e)}function g(t,e){if("object"!==v(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var w={create:{title:"创建",apiFunc:c["d"]},edit:{title:"编辑",apiFunc:c["j"]},publish:{title:"难例发布",apiFunc:c["h"]}},x=p["statusValueMap"].NOT_SAMPLED,O=p["statusValueMap"].IMPORTING,k=p["statusValueMap"].UNLABELLED,_={name:"",remark:"",labelGroupId:void 0,labelGroup:void 0,scopeFront:0,scopeBehind:0,scopeLeft:0,scopeRight:0},j={components:{BaseModal:u["a"]},setup:function(t,e){var n=e.emit,r=[{value:"custom",label:"自定义标签组",disabled:!1,children:[]},{value:"system",label:"预置标签组",disabled:!1,children:[]}],o={0:"custom",1:"system"},c=Object(a["o"])(r),u=Object(a["o"])(null),p=Object(a["n"])({modalVisible:!1,modalTitle:"create",confirmLoading:!1,difficultyCount:0,status:0,isShow:!1,datasetId:null,labelGroupType:void 0,dark:!1}),v=Object(a["n"])(b({},_)),h=Object(a["a"])((function(){return"publish"===p.modalTitle?w[p.modalTitle].title:"".concat(w[p.modalTitle].title,"数据集")})),y=Object(a["a"])((function(){return"publish"===p.modalTitle||!([x,O,k].includes(p.status)||!p.status)})),g=Object(a["a"])((function(){var t=v.scopeFront,e=v.scopeBehind,n=v.scopeLeft,r=v.scopeRight,o=[t,e,n,r],a=o.filter((function(t){return Object(l["isNil"])(t)||""===t})),i=o.filter((function(t){return!Object(l["isNumber"])(Number(t))||!(t>=-999&&t<=999)}));return a.length?"标注范围不能为空":i.length?"标注范围为数值型,区间范围为-999 - 999":""})),j=[{label:"前(maxX)",key:"scopeFront"},{label:"后(minX)",key:"scopeBehind"},{label:"左(maxY)",key:"scopeLeft"},{label:"右(minY)",key:"scopeRight"}],S={name:[{required:!0,message:"请输入数据集名称",trigger:["change","blur"]},{validator:d["p"],trigger:["change","blur"]}],labelGroupId:[{required:!0,message:"请选择标签组",trigger:"change"}]},L=Object.keys(v),I=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.assign(v,b({},Object(l["pick"])(e,L))),Object.assign(p,{modalVisible:!0,modalTitle:t,status:(null===e||void 0===e?void 0:e.status)||0,datasetId:e.id,labelGroupType:o[null===e||void 0===e?void 0:e.labelGroupType],difficultyCount:"publish"===t?e.difficultyCount:0,dark:null===e||void 0===e?void 0:e.dark}),p.labelGroupType&&v.labelGroupId&&(v.labelGroup=[p.labelGroupType,v.labelGroupId])},C=function(){p.isShow=!p.isShow},E=function(t){Object.assign(v,{labelGroupId:null!==t&&void 0!==t&&t.length?t[1]:void 0,labelGroup:null!==t&&void 0!==t&&t.length?t:void 0})},M=function(){u.value.validate((function(t){if(t&&!g.value){var e,r;p.confirmLoading=!0;var o=Object(l["cloneDeep"])(v);Reflect.deleteProperty(o,"labelGroup");var a="create"===p.modalTitle?o:b(b({},o),{},m({},"edit"===p.modalTitle?"id":"datasetId",p.datasetId));null===(e=w[p.modalTitle])||void 0===e||null===(r=e.apiFunc)||void 0===r||r.call(e,a).then((function(){p.modalVisible=!1,i["Message"].success("".concat(w[p.modalTitle].title,"成功")),n("success")})).finally((function(){p.confirmLoading=!1}))}}))},P=function(){p.isShow=!1,u.value.resetFields(),Object.assign(v,_)},G=function(t){return t.map((function(t){return{value:t.id,label:t.name,disabled:!1}}))};return Object(a["k"])((function(){var t=[0,1];t.forEach((function(t){Object(s["g"])({type:t,dataType:f["labelGroupTypeMap"].POINT_CLOUD.value,annotateType:f["annotationMap"].ObjectDetection.code}).then((function(e){var n=G(e);c.value[t].children=n}))}))})),{formRef:u,state:p,modelState:v,title:h,isDisabled:y,labelGroupOptions:c,deepPage:j,rules:S,scopeRules:g,showModal:I,handleShow:C,handleGroupChange:E,onSubmit:M,onClose:P}}},S=j,L=(n("f2733"),n("2877")),I=Object(L["a"])(S,r,o,!1,null,"3acb325c",null);e["default"]=I.exports},4888:function(t,e,n){"use strict";n.r(e);var r=n("ed09"),o=n("c0ee"),a=n("f109"),i=n("da2d");n("6c31");e["default"]={name:"StatisticsModal",components:{BaseTable:o["a"],BaseModal:a["a"]},setup:function(){var t=Object(r["o"])(!1),e=Object(r["o"])([]),n=Object(r["a"])((function(){return Object(i["getStatisticsColumns"])()})),o=function(n){t.value=!0,e.value=n};return{visibleValue:t,dataSource:e,columns:n,showModal:o}},render:function(){var t=this,e=arguments[0];return e(a["a"],{attrs:{visible:this.visibleValue,title:"标注统计",width:"700px","ok-text":"确认","show-cancel":!1,"show-close":!1},class:"el-modal__dark",on:{ok:function(){t.visibleValue=!1}}},[e(o["a"],{attrs:{size:"small",columns:this.columns,data:this.dataSource,"row-key":"label"}})])}}},"4ea8":function(t,e,n){},"6c31":function(t,e,n){},"9c43":function(t,e,n){},a311:function(t,e,n){"use strict";n("b399")},b399:function(t,e,n){},e382:function(t,e,n){"use strict";n("9c43")},ea8b:function(t,e,n){"use strict";n("18ac")},f2733:function(t,e,n){"use strict";n("4ea8")}}]);