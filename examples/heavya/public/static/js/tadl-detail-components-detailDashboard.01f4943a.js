(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["tadl-detail-components-detailDashboard"],{"0be6":function(t,e,n){"use strict";n.d(e,"f",(function(){return a})),n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return u})),n.d(e,"b",(function(){return l})),n.d(e,"e",(function(){return s}));var r=n("b775"),o=n("f121");function a(t){return Object(r["a"])({url:"/".concat(o["a"].MODEL,"/ptModelBranch"),method:"get",params:t})}function i(t){return Object(r["a"])({url:"/".concat(o["a"].MODEL,"/ptModelBranch"),method:"post",data:t})}function c(t){return Object(r["a"])({url:"/".concat(o["a"].MODEL,"/ptModelBranch"),method:"put",data:t})}function u(t){return Object(r["a"])({url:"/".concat(o["a"].MODEL,"/ptModelBranch"),method:"delete",data:t})}function l(t){return Object(r["a"])({url:"".concat(o["a"].MODEL,"/ptModelBranch/convertPreset"),method:"post",data:t})}function s(t){return Object(r["a"])({url:"".concat(o["a"].MODEL,"/ptModelBranch/convertOnnx"),method:"post",data:{id:t}})}e["c"]={list:a,add:i,edit:c,del:u}},"1afb":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return i}));var r=n("b775"),o=n("f121");function a(t){return Object(r["a"])({url:"/".concat(o["a"].ALGORITHM,"/algorithmUsage"),method:"get",params:t})}function i(t){return Object(r["a"])({url:"/".concat(o["a"].ALGORITHM,"/algorithmUsage"),method:"post",data:t})}},"457d":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"detail-container"},[n("div",{staticClass:"app-page-header-title"},[t._v("实验详情")]),t._v(" "),n("div",{staticClass:"mt-50 flex flex-between"},[n("div",{staticClass:"flex status-box"},[n("div",{staticClass:"mr-10 my-auto"},[t._v("\n        状态："),n("span",{style:t.statusColor},[t._v(t._s(t.statusName))])]),t._v(" "),t.isFinished?[n("div",{staticClass:"mx-10 my-auto"},[t._v("\n          最佳精度：\n          "),n("span",{staticClass:"primary"},[t._v(t._s(t.detail.bestAccuracy.toFixed(2)))])]),t._v(" "),n("div",{staticClass:"mx-10 my-auto"},[t._v("\n          TRIAL-ID：\n          "),n("span",{staticClass:"primary"},[t._v(t._s(t.detail.bestTrialSequence))])])]:n("div",{staticClass:"mx-10 my-auto"},[t._v("\n        当前阶段：\n        "),n("span",{staticClass:"primary"},[t._v(t._s(t.stageName))])])],2),t._v(" "),n("div",{staticClass:"flex f1 flex-end"},[n("el-button",{staticClass:"primary mr-10",attrs:{type:"text",icon:"el-icon-refresh-right"},on:{click:t.refresh}}),t._v(" "),n("div",{staticClass:"app-page-header-extra"},[n("el-dropdown",{directives:[{name:"show",rawName:"v-show",value:t.state.activeTab===t.stageName,expression:"state.activeTab === stageName"}],on:{command:t.command}},[n("div",{staticClass:"primary mr-10 rel"},[t._v("\n            "+t._s(t.enableAutoRefresh?"每"+t.refreshTime+"s刷新":"定时刷新已关闭")+"\n            "),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.refreshControls,(function(e){return n("el-dropdown-item",{key:e.value,attrs:{icon:e.icon,command:e.value}},[t._v("\n              "+t._s(e.label)+"\n            ")])})),1)],1),t._v(" "),t.enablePause?n("el-button",{attrs:{type:"primary"},on:{click:t.pause}},[t._v("\n          暂停实验\n        ")]):t._e(),t._v(" "),t.enableStart?n("el-button",{attrs:{type:"primary"},on:{click:t.start}},[t._v("\n          启动实验\n        ")]):t._e(),t._v(" "),t.isFinished?n("el-button",{attrs:{type:"primary"},on:{click:t.saveModel}},[t._v("\n          保存模型\n        ")]):t._e()],1)],1)]),t._v(" "),n("div",{staticClass:"flex flex-between mt-50"},[n("Description",{attrs:{columns:t.infoList}}),t._v(" "),n("el-button",{staticStyle:{margin:"auto auto 0 auto"},on:{click:t.changeToLog}},[t._v("查看日志")])],1),t._v(" "),n("SaveModelDialog",{ref:"saveModelRef",attrs:{type:"tadl"}})],1)},o=[],a=n("5c96"),i=n("ed09"),c=n("7f3a"),u=n("ed08"),l=n("92b4"),s=n("4d99"),d=n("7f9b");function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function h(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */h=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(D){u=function(t,e,n){return t[e]=n}}function l(t,e,n,o){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),c=new E(o||[]);return r(i,"_invoke",{value:_(t,n,c)}),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(D){return{type:"throw",arg:D}}}t.wrap=l;var d={};function p(){}function v(){}function m(){}var b={};u(b,a,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(T([])));g&&g!==e&&n.call(g,a)&&(b=g);var O=m.prototype=p.prototype=Object.create(b);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function o(r,a,i,c){var u=s(t[r],t,a);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==f(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):e.resolve(d).then((function(t){l.value=t,i(l)}),(function(t){return o("throw",t,i,c)}))}c(u.arg)}var a;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return a=a?a.then(r,r):r()}})}function _(t,e,n){var r="suspendedStart";return function(o,a){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw a;return C()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=L(i,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=s(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function L(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=s(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function M(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(M,this),this.reset(!0)}function T(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:C}}function C(){return{value:void 0,done:!0}}return v.prototype=m,r(O,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:v,configurable:!0}),v.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},w(j.prototype),u(j.prototype,i,(function(){return this})),t.AsyncIterator=j,t.async=function(e,n,r,o,a){void 0===a&&(a=Promise);var i=new j(l(e,n,r,o),a);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(O),u(O,c,"Generator"),u(O,a,(function(){return this})),u(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=T,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return i.type="throw",i.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),x(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:T(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}function p(t,e,n,r,o,a,i){try{var c=t[a](i),u=c.value}catch(l){return void n(l)}c.done?e(u):Promise.resolve(u).then(r,o)}function v(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var a=t.apply(e,n);function i(t){p(a,r,o,i,c,"next",t)}function c(t){p(a,r,o,i,c,"throw",t)}i(void 0)}))}}var m={name:"DetailDashboard",components:{Description:c["a"],SaveModelDialog:s["a"]},props:{refreshTime:Number,refresh:Function,updateState:Function,detail:Object,isFinished:Boolean,inProgress:Boolean,enablePause:Boolean,enableStart:Boolean,activePath:Array,command:Function},setup:function(t){var e=t.updateState,n=t.refresh,r=t.command,o=Object(i["o"])(null),c=Object(i["n"])({activeTab:t.activePath[0],prevActiveTab:t.activePath[0]}),s=function(){Object.assign(c,{prevActiveTab:null,activeTab:null}),r(0),e({activePath:["LOG","algrithom"],activeStage:""})},f=function(){var e=v(h().mark((function e(){return h().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["t"])(t.detail.id).then((function(){a["Message"].success("实验已暂停"),n(),r(0)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=v(h().mark((function e(){return h().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["u"])(t.detail.id).then((function(){a["Message"].success("实验启动中"),n(),r(0)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=Object(i["a"])((function(){return Object(d["getExpByCode"])(t.detail.status,"label")})),b=Object(i["a"])((function(){return Object(d["getStageName"])(t.detail.runStage)})),y=Object(i["a"])((function(){return{color:Object(d["getExpByCode"])(t.detail.status,"bgColor")}})),g=Object(i["a"])((function(){return t.refreshTime>0})),O=Object(i["a"])((function(){return t.detail.runStage===d["STAGE_SEQUENCE"].RETRAIN})),w=Object(i["a"])((function(){var e=t.inProgress?{label:"运行时间",content:Object(d["runTimeFormatter"])(t.detail.runTime)}:{label:"结束时间",content:Object(u["Bb"])(t.detail.endTime)};return[[{label:"实验名称",content:t.detail.name},{label:"实验 ID",content:t.detail.id},{label:"模型类别",content:Object(d["getModelByCode"])(t.detail.modelType,"label")}],[{label:"算法名称",content:t.detail.algorithmName},{label:"算法版本",content:t.detail.algorithmVersion},{label:"创 建 人",content:t.detail.createUser}],[{label:"开始时间",content:Object(u["Bb"])(t.detail.startTime)},e,{label:"实验描述",content:t.detail.description,span:2}]]})),j=function(){var e={algorithmId:t.detail.algorithmId,modelAddress:t.detail.bestCheckpointPath};o.value.show(e)};return Object(i["r"])((function(){return t.activePath}),(function(t){t&&t.length&&Object.assign(c,{activeTab:t[0],prevActiveTab:t[0]})})),Object(i["j"])((function(){return r(0)})),{state:c,saveModelRef:o,statusColor:y,changeToLog:s,statusName:m,stageName:b,refreshControls:d["refreshControls"],enableAutoRefresh:g,showBestAccuracy:O,pause:f,start:p,infoList:w,saveModel:j}}},b=m,y=(n("8cbd"),n("2877")),g=Object(y["a"])(b,r,o,!1,null,"0e0dc6d4",null);e["default"]=g.exports},"659e":function(t,e,n){},"8bbd":function(t,e,n){"use strict";n.d(e,"l",(function(){return a})),n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return u})),n.d(e,"f",(function(){return l})),n.d(e,"m",(function(){return s})),n.d(e,"k",(function(){return d})),n.d(e,"b",(function(){return f})),n.d(e,"j",(function(){return h})),n.d(e,"i",(function(){return p})),n.d(e,"e",(function(){return v})),n.d(e,"h",(function(){return m})),n.d(e,"g",(function(){return b}));var r=n("b775"),o=n("f121");function a(t){return Object(r["a"])({url:"/".concat(o["a"].MODEL,"/ptModelInfo"),method:"get",params:t})}function i(t){return Object(r["a"])({url:"/".concat(o["a"].MODEL,"/ptModelInfo"),method:"post",data:t})}function c(t){return Object(r["a"])({url:"/".concat(o["a"].MODEL,"/ptModelInfo"),method:"put",data:t})}function u(t){return Object(r["a"])({url:"/".concat(o["a"].MODEL,"/ptModelInfo"),method:"delete",data:t})}function l(t,e){return Object(r["a"])({url:"/".concat(o["a"].MODEL,"/ptModelInfo/byResource"),method:"get",params:{modelResource:t,packaged:e}})}function s(t){return Object(r["a"])({url:"/".concat(o["a"].MODEL,"/ptModelInfo/package"),method:"post",data:t})}function d(t){return Object(r["a"])({url:"/".concat(o["a"].MODEL,"/ptModelInfo/servingModel"),method:"get",params:{modelResource:t}})}function f(t){return Object(r["a"])({url:"/".concat(o["a"].MODEL,"/ptModelInfo/uploadModel"),method:"post",data:t})}function h(){return Object(r["a"])({url:"/".concat(o["a"].MODEL,"/ptModelType"),method:"get"})}function p(t){return Object(r["a"])({url:"/".concat(o["a"].MODEL,"/ptModelSuffix"),method:"get",params:t})}function v(t){return Object(r["a"])({url:"/".concat(o["a"].MODEL,"/ptModelInfo/byModelId"),method:"get",params:{id:t}})}function m(t){return Object(r["a"])({url:"/".concat(o["a"].MODEL,"/ptModelStruct"),method:"get",params:t})}function b(t){return Object(r["a"])({url:"/".concat(o["a"].MODEL,"/ptModelInfo/atlasModel"),method:"get",params:t})}e["c"]={list:a,add:i,edit:c,del:u}},"8cbd":function(t,e,n){"use strict";n("659e")}}]);