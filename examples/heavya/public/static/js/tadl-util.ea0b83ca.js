(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["tadl-util","tadl-detail-components-detailDashboard~tadl-detail-components-general~tadl-detail-components-paramet~724f2696"],{"7f9b":function(t,e,r){"use strict";r.r(e),r.d(e,"EXPERIMENT_STATUS_MAP",(function(){return p})),r.d(e,"expIsFinished",(function(){return m})),r.d(e,"expInprogress",(function(){return h})),r.d(e,"expEnablePause",(function(){return b})),r.d(e,"expEnableStop",(function(){return g})),r.d(e,"expEnableStart",(function(){return v})),r.d(e,"TRIAL_STATUS_MAP",(function(){return y})),r.d(e,"STAGE_STATUS_MAP",(function(){return x})),r.d(e,"STAGE_SEQUENCE",(function(){return O})),r.d(e,"MODEL_TYPE_ENUM",(function(){return w})),r.d(e,"getExpByCode",(function(){return j})),r.d(e,"getModelByCode",(function(){return E})),r.d(e,"getTrialByCode",(function(){return T})),r.d(e,"getStageName",(function(){return L})),r.d(e,"getStageOrder",(function(){return S})),r.d(e,"refreshControls",(function(){return D})),r.d(e,"timeFmts",(function(){return A})),r.d(e,"runTimeFormatter",(function(){return F})),r.d(e,"parseRunTime",(function(){return N})),r.d(e,"extractData",(function(){return I})),r.d(e,"extractScatterData",(function(){return P})),r.d(e,"extractSeriesData",(function(){return _})),r.d(e,"fetchMetric",(function(){return k})),r.d(e,"isVaildMaxExecDuration",(function(){return M})),r.d(e,"getPublicRules",(function(){return G}));var n=r("2ef0"),o=r("ed08"),i=r("92b4");function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function u(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */u=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(F){f=function(t,e,r){return t[e]=r}}function d(t,e,r,o){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),u=new S(o||[]);return n(a,"_invoke",{value:j(t,r,u)}),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(F){return{type:"throw",arg:F}}}t.wrap=d;var p={};function m(){}function h(){}function b(){}var g={};f(g,i,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(D([])));y&&y!==e&&r.call(y,i)&&(g=y);var x=b.prototype=m.prototype=Object.create(g);function O(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(n,i,u,c){var l=s(t[n],t,i);if("throw"!==l.type){var f=l.arg,d=f.value;return d&&"object"==a(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){o("next",t,u,c)}),(function(t){o("throw",t,u,c)})):e.resolve(d).then((function(t){f.value=t,u(f)}),(function(t){return o("throw",t,u,c)}))}c(l.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function j(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return A()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=E(a,r);if(u){if(u===p)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function D(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:A}}function A(){return{value:void 0,done:!0}}return h.prototype=b,n(x,"constructor",{value:b,configurable:!0}),n(b,"constructor",{value:h,configurable:!0}),h.displayName=f(b,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,f(t,l,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},O(w.prototype),f(w.prototype,c,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(d(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(x),f(x,l,"Generator"),f(x,i,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=D,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:D(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function c(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(l){return void r(l)}u.done?e(c):Promise.resolve(c).then(n,o)}function l(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){c(i,n,o,a,u,"next",t)}function u(t){c(i,n,o,a,u,"throw",t)}a(void 0)}))}}function f(t,e,r){return e=d(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function d(t){var e=s(t,"string");return"symbol"===a(e)?e:String(e)}function s(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var p={TO_RUN:{value:101,label:"待运行",bgColor:"#BFBFBF"},WAITING:{value:102,label:"等待中",bgColor:"#409EFF"},RUNNING:{value:103,label:"运行中",bgColor:"#1890FF"},PAUSED:{value:104,label:"已暂停",bgColor:"#409EFF"},FINISHED:{value:202,label:"已完成",bgColor:"#52C41A"},FAILED:{value:203,label:"运行失败",bgColor:"#F5222D"}},m=function(t){return[202].includes(t)},h=function(t){return[101,102,103,104,105].includes(t)},b=function(t){return[101,102,103].includes(t)},g=function(t){return[102,103,104].includes(t)},v=function(t){return[101,104,203].includes(t)},y={toRun:{value:101,label:"待运行",bgColor:"#BFBFBF"},waiting:{value:102,label:"等待中",bgColor:"#409EFF"},running:{value:103,label:"运行中",bgColor:"#1890FF"},finished:{value:201,label:"已完成",bgColor:"#52C41A"},failed:{value:202,label:"运行失败",bgColor:"#F5222D"}},x={TO_RUN:{value:101,label:"待运行",bgColor:"#BFBFBF"},RUNNING:{value:102,label:"运行中",bgColor:"#1890FF"},FINISHED:{value:201,label:"已完成",bgColor:"#52C41A"},FAILED:{value:202,label:"运行失败",bgColor:"#F5222D"}},O={TRAIN:1,SELECT:2,RETRAIN:3},w={ImageClassify:{value:101,label:"图像分类"},TextClassify:{value:301,label:"文本分类"}},j=function(t,e){return Object(o["cb"])(p,t,e)},E=function(t,e){return Object(o["cb"])(w,t,e)},T=function(t,e){return Object(o["cb"])(y,t,e)},L=function(t){return Object(n["invert"])(O)[t]},S=function(t){return O[t]},D=[{icon:"el-icon-remove-outline",label:"关闭自动刷新",value:0},{icon:"el-icon-timer",label:"每 10s 刷新",value:10},{icon:"el-icon-timer",label:"每 20s 刷新",value:20},{icon:"el-icon-timer",label:"每 30s 刷新",value:30},{icon:"el-icon-timer",label:"每 60s 刷新",value:60}],A=[{label:"day",value:"day"},{label:"hour",value:"hour"},{label:"min",value:"min"}],F=function(t){var e,r,i;t>o["m"]&&(e=Math.floor(t/o["m"]),t%=o["m"]),t>o["n"]&&(r=Math.floor(t/o["n"]),t%=o["n"]),t>o["o"]&&(i=Math.floor(t/o["o"]));var a=Object(n["isNil"])(e)?"":"".concat(e,"day "),u=Object(n["isNil"])(r)&&!a?"":"".concat(r||0,"hour "),c=Object(n["isNil"])(i)&&!u?"":"".concat(i||0,"min");return"".concat(a).concat(u).concat(c)},N=function(t,e){var r={day:o["m"],hour:o["n"],min:o["o"]};return t*r[e]||0},I=function(t){var e=t.config,r=e.xField,n=e.yField,o=t.data.map((function(t){var e;return e={},f(e,r,String(t[r])),f(e,n,t[n]),e}));return o.flat()},P=function(t){var e=t.config,r=e.xField,n=e.yField,o=t.data.map((function(t){var e;return e={},f(e,r,t[r]),f(e,n,t[n]),e}));return o.flat()},_=function(t){var e=t.config,r=e.xField,n=e.yField,o=e.seriesField,i=t.data.map((function(t){return t.list.map((function(e){var i;return i={},f(i,r,String(e[r])),f(i,n,e[n]),f(i,o,t[o]),i}))}));return i.flat()},C={accuracy:i["f"],intermediate:i["h"]},k=function(){var t=l(u().mark((function t(e,r,n){var o;return u().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,C[n](e,r);case 2:return o=t.sent,t.abrupt("return",o);case 4:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}(),M=function(t){return/^([1-9]\d{0,4}|0)(\.\d{1,4})?$/.test(t)},G=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"maxExecDurationUnit";return{maxExecDuration:[{required:!0,validator:function(r,n,o){n||0===n||o(new Error("请设置时间")),n<=0&&o(new Error("时间设置必须大于0")),M(n)||o(new Error("时间为数值,并保持在5位整数位和4位小数位之间")),t[e]||o(new Error("请选择时间单位")),o()},trigger:["blur","change"]}],maxTrialNum:[{required:!0,message:"请输入最大Trial次数",trigger:["blur","change"]},{type:"number",message:"所填必须为数字"},{validator:function(t,e,r){e||0===e||r(),(e<1||e>2147483647)&&r(new Error("最大Trial次数需要在1到2147483647之间")),r()},trigger:["blur","change"]}],trialConcurrentNum:[{required:!0,message:"请输入Trial并发数量",trigger:["blur","change"]},{type:"number",message:"所填必须为数字"},{validator:function(t,e,r){e||0===e||r(),(e<1||e>20)&&r(new Error("Trial并发数量需要在1到20之间")),r()},trigger:["blur","change"]}]}}},"92b4":function(t,e,r){"use strict";r.d(e,"s",(function(){return m})),r.d(e,"a",(function(){return h})),r.d(e,"c",(function(){return b})),r.d(e,"e",(function(){return g})),r.d(e,"d",(function(){return v})),r.d(e,"g",(function(){return y})),r.d(e,"i",(function(){return x})),r.d(e,"k",(function(){return O})),r.d(e,"v",(function(){return w})),r.d(e,"y",(function(){return j})),r.d(e,"x",(function(){return E})),r.d(e,"m",(function(){return T})),r.d(e,"n",(function(){return L})),r.d(e,"w",(function(){return S})),r.d(e,"l",(function(){return D})),r.d(e,"f",(function(){return A})),r.d(e,"h",(function(){return F})),r.d(e,"j",(function(){return N})),r.d(e,"u",(function(){return I})),r.d(e,"t",(function(){return P})),r.d(e,"b",(function(){return _})),r.d(e,"q",(function(){return C})),r.d(e,"r",(function(){return k})),r.d(e,"o",(function(){return M})),r.d(e,"p",(function(){return G}));var n=r("b775"),o=r("f121");function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}var a=["experimentId","stageOrder","current","size"];function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e=f(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function f(t){var e=d(t,"string");return"symbol"===i(e)?e:String(e)}function d(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function s(t,e){if(null==t)return{};var r,n,o=p(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function p(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}function m(t){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment"),method:"get",params:t})}function h(t){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment"),method:"post",data:t})}function b(t){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment"),method:"put",data:t})}function g(t){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/").concat(t),method:"get"})}function v(t){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/").concat(t,"/info"),method:"get"})}function y(t,e){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/stage/").concat(t,"/").concat(e),method:"get"})}function x(t,e){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/stage/").concat(t,"/").concat(e,"/param"),method:"get"})}function O(t,e){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/stage/").concat(t,"/").concat(e,"/runtime/param"),method:"get"})}function w(t,e,r){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/stage/update/ConcurrentNum"),method:"put",data:{experimentId:t,stageOrder:e,trialConcurrentNum:r}})}function j(t,e,r){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/stage/update/MaxTrialNum"),method:"put",data:{experimentId:t,stageOrder:e,maxTrialNum:r}})}function E(t,e,r,i){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/stage/update/MaxExecDuration"),method:"put",data:{experimentId:t,stageOrder:e,maxExecDuration:r,maxExecDurationUnit:i}})}function T(t,e){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/stage/").concat(t,"/").concat(e,"/trial/rep"),method:"get"})}function L(t,e){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/stage/").concat(t,"/").concat(e,"/yaml"),method:"get"})}function S(t,e,r){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/stage/update/yaml"),method:"put",data:{yaml:r,experimentId:t,stageOrder:e}})}function D(t){var e=t.experimentId,r=t.stageOrder,i=t.current,u=void 0===i?1:i,l=t.size,f=void 0===l?1:l,d=s(t,a);return Object(n["a"])({url:"/".concat(o["a"].TADL,"/trial/").concat(e,"/").concat(r,"/list"),method:"get",params:c({experimentId:e,stageOrder:r,current:u,size:f},d)})}function A(t,e){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/best/accuracy"),method:"get",params:{experimentId:t,stageOrder:e}})}function F(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i={experimentId:t,stageOrder:e,trialIds:r};return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/intermediate/accuracy"),method:"get",params:i})}function N(t,e){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/runTime"),method:"get",params:{experimentId:t,stageOrder:e}})}function I(t){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/").concat(t,"/start"),method:"put"})}function P(t){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/").concat(t,"/pause"),method:"put"})}function _(t){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/").concat(t),method:"delete"})}function C(t){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/").concat(t,"/searchSpace"),method:"get"})}function k(t){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/").concat(t,"/bestSelectedSpace"),method:"get"})}function M(t){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/").concat(t,"/config"),method:"get"})}function G(t){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/").concat(t.experimentId,"/logs"),method:"get",params:t})}}}]);