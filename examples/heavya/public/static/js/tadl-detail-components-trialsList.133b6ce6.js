(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["tadl-detail-components-trialsList","tadl-detail-components-detailDashboard~tadl-detail-components-general~tadl-detail-components-paramet~724f2696","tadl-detail-components-chart","tadl-detail-util","tadl-util"],{"21d6":function(t,e,r){"use strict";r("6ac9d")},"2e38":function(t,e,r){"use strict";r.d(e,"f",(function(){return a})),r.d(e,"c",(function(){return i})),r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return u})),r.d(e,"e",(function(){return l})),r.d(e,"d",(function(){return s})),r.d(e,"g",(function(){return f}));var n=r("b775"),o=r("f121");function a(t){return Object(n["a"])({url:"/".concat(o["a"].K8S,"/pod/log"),method:"get",params:t})}function i(t){return Object(n["a"])({url:"/".concat(o["a"].K8S,"/pod/log/download"),method:"get",params:t})}function c(t){return Object(n["a"])({url:"/".concat(o["a"].K8S,"/pod/log/download"),method:"post",responseType:"blob",data:t})}function u(t,e){return Object(n["a"])({url:"/".concat(o["a"].K8S,"/pod/log/count"),method:"post",data:{namespace:t,podVOList:e}})}function l(t){return Object(n["a"])({url:"/".concat(o["a"].K8S,"/pod/realtimeMetrics"),method:"get",params:t})}function s(t){return Object(n["a"])({url:"/".concat(o["a"].K8S,"/pod/rangeMetrics"),method:"get",params:t})}function f(t){return Object(n["a"])({url:"/".concat(o["a"].K8S,"/namespace/findNamespace"),method:"get",params:{userId:t}})}},"48e0":function(t,e,r){"use strict";r.r(e),r.d(e,"allTrialStatusList",(function(){return o}));var n=r("7f9b"),o=[{label:"全部",value:null}].concat(Object.values(n["TRIAL_STATUS_MAP"]).map((function(t){return{label:t.label,value:t.value}})))},"6ac9d":function(t,e,r){},"7f9b":function(t,e,r){"use strict";r.r(e),r.d(e,"EXPERIMENT_STATUS_MAP",(function(){return p})),r.d(e,"expIsFinished",(function(){return h})),r.d(e,"expInprogress",(function(){return m})),r.d(e,"expEnablePause",(function(){return v})),r.d(e,"expEnableStop",(function(){return g})),r.d(e,"expEnableStart",(function(){return y})),r.d(e,"TRIAL_STATUS_MAP",(function(){return b})),r.d(e,"STAGE_STATUS_MAP",(function(){return w})),r.d(e,"STAGE_SEQUENCE",(function(){return O})),r.d(e,"MODEL_TYPE_ENUM",(function(){return x})),r.d(e,"getExpByCode",(function(){return j})),r.d(e,"getModelByCode",(function(){return L})),r.d(e,"getTrialByCode",(function(){return T})),r.d(e,"getStageName",(function(){return E})),r.d(e,"getStageOrder",(function(){return S})),r.d(e,"refreshControls",(function(){return C})),r.d(e,"timeFmts",(function(){return _})),r.d(e,"runTimeFormatter",(function(){return F})),r.d(e,"parseRunTime",(function(){return P})),r.d(e,"extractData",(function(){return A})),r.d(e,"extractScatterData",(function(){return D})),r.d(e,"extractSeriesData",(function(){return N})),r.d(e,"fetchMetric",(function(){return k})),r.d(e,"isVaildMaxExecDuration",(function(){return M})),r.d(e,"getPublicRules",(function(){return G}));var n=r("2ef0"),o=r("ed08"),a=r("92b4");function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function c(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */c=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(F){s=function(t,e,r){return t[e]=r}}function f(t,e,r,o){var a=e&&e.prototype instanceof h?e:h,i=Object.create(a.prototype),c=new S(o||[]);return n(i,"_invoke",{value:j(t,r,c)}),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(F){return{type:"throw",arg:F}}}t.wrap=f;var p={};function h(){}function m(){}function v(){}var g={};s(g,a,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(C([])));b&&b!==e&&r.call(b,a)&&(g=b);var w=v.prototype=h.prototype=Object.create(g);function O(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(n,a,c,u){var l=d(t[n],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==i(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return o("throw",t,c,u)}))}u(l.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function j(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=d(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=d(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function C(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return m.prototype=v,n(w,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:m,configurable:!0}),m.displayName=s(v,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},O(x.prototype),s(x.prototype,u,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new x(f(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},O(w),s(w,l,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=C,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function u(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,o)}function l(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){u(a,n,o,i,c,"next",t)}function c(t){u(a,n,o,i,c,"throw",t)}i(void 0)}))}}function s(t,e,r){return e=f(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function f(t){var e=d(t,"string");return"symbol"===i(e)?e:String(e)}function d(t,e){if("object"!==i(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==i(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var p={TO_RUN:{value:101,label:"待运行",bgColor:"#BFBFBF"},WAITING:{value:102,label:"等待中",bgColor:"#409EFF"},RUNNING:{value:103,label:"运行中",bgColor:"#1890FF"},PAUSED:{value:104,label:"已暂停",bgColor:"#409EFF"},FINISHED:{value:202,label:"已完成",bgColor:"#52C41A"},FAILED:{value:203,label:"运行失败",bgColor:"#F5222D"}},h=function(t){return[202].includes(t)},m=function(t){return[101,102,103,104,105].includes(t)},v=function(t){return[101,102,103].includes(t)},g=function(t){return[102,103,104].includes(t)},y=function(t){return[101,104,203].includes(t)},b={toRun:{value:101,label:"待运行",bgColor:"#BFBFBF"},waiting:{value:102,label:"等待中",bgColor:"#409EFF"},running:{value:103,label:"运行中",bgColor:"#1890FF"},finished:{value:201,label:"已完成",bgColor:"#52C41A"},failed:{value:202,label:"运行失败",bgColor:"#F5222D"}},w={TO_RUN:{value:101,label:"待运行",bgColor:"#BFBFBF"},RUNNING:{value:102,label:"运行中",bgColor:"#1890FF"},FINISHED:{value:201,label:"已完成",bgColor:"#52C41A"},FAILED:{value:202,label:"运行失败",bgColor:"#F5222D"}},O={TRAIN:1,SELECT:2,RETRAIN:3},x={ImageClassify:{value:101,label:"图像分类"},TextClassify:{value:301,label:"文本分类"}},j=function(t,e){return Object(o["cb"])(p,t,e)},L=function(t,e){return Object(o["cb"])(x,t,e)},T=function(t,e){return Object(o["cb"])(b,t,e)},E=function(t){return Object(n["invert"])(O)[t]},S=function(t){return O[t]},C=[{icon:"el-icon-remove-outline",label:"关闭自动刷新",value:0},{icon:"el-icon-timer",label:"每 10s 刷新",value:10},{icon:"el-icon-timer",label:"每 20s 刷新",value:20},{icon:"el-icon-timer",label:"每 30s 刷新",value:30},{icon:"el-icon-timer",label:"每 60s 刷新",value:60}],_=[{label:"day",value:"day"},{label:"hour",value:"hour"},{label:"min",value:"min"}],F=function(t){var e,r,a;t>o["m"]&&(e=Math.floor(t/o["m"]),t%=o["m"]),t>o["n"]&&(r=Math.floor(t/o["n"]),t%=o["n"]),t>o["o"]&&(a=Math.floor(t/o["o"]));var i=Object(n["isNil"])(e)?"":"".concat(e,"day "),c=Object(n["isNil"])(r)&&!i?"":"".concat(r||0,"hour "),u=Object(n["isNil"])(a)&&!c?"":"".concat(a||0,"min");return"".concat(i).concat(c).concat(u)},P=function(t,e){var r={day:o["m"],hour:o["n"],min:o["o"]};return t*r[e]||0},A=function(t){var e=t.config,r=e.xField,n=e.yField,o=t.data.map((function(t){var e;return e={},s(e,r,String(t[r])),s(e,n,t[n]),e}));return o.flat()},D=function(t){var e=t.config,r=e.xField,n=e.yField,o=t.data.map((function(t){var e;return e={},s(e,r,t[r]),s(e,n,t[n]),e}));return o.flat()},N=function(t){var e=t.config,r=e.xField,n=e.yField,o=e.seriesField,a=t.data.map((function(t){return t.list.map((function(e){var a;return a={},s(a,r,String(e[r])),s(a,n,e[n]),s(a,o,t[o]),a}))}));return a.flat()},I={accuracy:a["f"],intermediate:a["h"]},k=function(){var t=l(c().mark((function t(e,r,n){var o;return c().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,I[n](e,r);case 2:return o=t.sent,t.abrupt("return",o);case 4:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}(),M=function(t){return/^([1-9]\d{0,4}|0)(\.\d{1,4})?$/.test(t)},G=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"maxExecDurationUnit";return{maxExecDuration:[{required:!0,validator:function(r,n,o){n||0===n||o(new Error("请设置时间")),n<=0&&o(new Error("时间设置必须大于0")),M(n)||o(new Error("时间为数值,并保持在5位整数位和4位小数位之间")),t[e]||o(new Error("请选择时间单位")),o()},trigger:["blur","change"]}],maxTrialNum:[{required:!0,message:"请输入最大Trial次数",trigger:["blur","change"]},{type:"number",message:"所填必须为数字"},{validator:function(t,e,r){e||0===e||r(),(e<1||e>2147483647)&&r(new Error("最大Trial次数需要在1到2147483647之间")),r()},trigger:["blur","change"]}],trialConcurrentNum:[{required:!0,message:"请输入Trial并发数量",trigger:["blur","change"]},{type:"number",message:"所填必须为数字"},{validator:function(t,e,r){e||0===e||r(),(e<1||e>20)&&r(new Error("Trial并发数量需要在1到20之间")),r()},trigger:["blur","change"]}]}}},"92b4":function(t,e,r){"use strict";r.d(e,"s",(function(){return h})),r.d(e,"a",(function(){return m})),r.d(e,"c",(function(){return v})),r.d(e,"e",(function(){return g})),r.d(e,"d",(function(){return y})),r.d(e,"g",(function(){return b})),r.d(e,"i",(function(){return w})),r.d(e,"k",(function(){return O})),r.d(e,"v",(function(){return x})),r.d(e,"y",(function(){return j})),r.d(e,"x",(function(){return L})),r.d(e,"m",(function(){return T})),r.d(e,"n",(function(){return E})),r.d(e,"w",(function(){return S})),r.d(e,"l",(function(){return C})),r.d(e,"f",(function(){return _})),r.d(e,"h",(function(){return F})),r.d(e,"j",(function(){return P})),r.d(e,"u",(function(){return A})),r.d(e,"t",(function(){return D})),r.d(e,"b",(function(){return N})),r.d(e,"q",(function(){return I})),r.d(e,"r",(function(){return k})),r.d(e,"o",(function(){return M})),r.d(e,"p",(function(){return G}));var n=r("b775"),o=r("f121");function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}var i=["experimentId","stageOrder","current","size"];function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){l(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e,r){return e=s(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t){var e=f(t,"string");return"symbol"===a(e)?e:String(e)}function f(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function d(t,e){if(null==t)return{};var r,n,o=p(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}function p(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}function h(t){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment"),method:"get",params:t})}function m(t){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment"),method:"post",data:t})}function v(t){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment"),method:"put",data:t})}function g(t){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/").concat(t),method:"get"})}function y(t){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/").concat(t,"/info"),method:"get"})}function b(t,e){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/stage/").concat(t,"/").concat(e),method:"get"})}function w(t,e){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/stage/").concat(t,"/").concat(e,"/param"),method:"get"})}function O(t,e){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/stage/").concat(t,"/").concat(e,"/runtime/param"),method:"get"})}function x(t,e,r){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/stage/update/ConcurrentNum"),method:"put",data:{experimentId:t,stageOrder:e,trialConcurrentNum:r}})}function j(t,e,r){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/stage/update/MaxTrialNum"),method:"put",data:{experimentId:t,stageOrder:e,maxTrialNum:r}})}function L(t,e,r,a){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/stage/update/MaxExecDuration"),method:"put",data:{experimentId:t,stageOrder:e,maxExecDuration:r,maxExecDurationUnit:a}})}function T(t,e){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/stage/").concat(t,"/").concat(e,"/trial/rep"),method:"get"})}function E(t,e){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/stage/").concat(t,"/").concat(e,"/yaml"),method:"get"})}function S(t,e,r){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/stage/update/yaml"),method:"put",data:{yaml:r,experimentId:t,stageOrder:e}})}function C(t){var e=t.experimentId,r=t.stageOrder,a=t.current,c=void 0===a?1:a,l=t.size,s=void 0===l?1:l,f=d(t,i);return Object(n["a"])({url:"/".concat(o["a"].TADL,"/trial/").concat(e,"/").concat(r,"/list"),method:"get",params:u({experimentId:e,stageOrder:r,current:c,size:s},f)})}function _(t,e){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/best/accuracy"),method:"get",params:{experimentId:t,stageOrder:e}})}function F(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a={experimentId:t,stageOrder:e,trialIds:r};return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/intermediate/accuracy"),method:"get",params:a})}function P(t,e){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/runTime"),method:"get",params:{experimentId:t,stageOrder:e}})}function A(t){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/").concat(t,"/start"),method:"put"})}function D(t){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/").concat(t,"/pause"),method:"put"})}function N(t){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/").concat(t),method:"delete"})}function I(t){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/").concat(t,"/searchSpace"),method:"get"})}function k(t){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/").concat(t,"/bestSelectedSpace"),method:"get"})}function M(t){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/").concat(t,"/config"),method:"get"})}function G(t){return Object(n["a"])({url:"/".concat(o["a"].TADL,"/experiment/").concat(t.experimentId,"/logs"),method:"get",params:t})}},e64e:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r(t.type,t._b({tag:"component",attrs:{data:t.chartData}},"component",t.chartConfig,!1))},o=[],a=r("aca0"),i={name:"Chart",components:{LineChart:a["b"],ColumnChart:a["a"],ScatterChart:a["c"]},props:{type:String,chartConfig:{type:Object,default:function(){return{}}},chartData:{type:Array,default:function(){return[]}}}},c=i,u=r("2877"),l=Object(u["a"])(c,n,o,!1,null,null,null);e["default"]=l.exports},fe6d:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-card",{staticClass:"rel app-content-section trials-card",attrs:{shadow:"never"}},[r("div",{staticClass:"app-content-title mb-20"},[t._v("Trials")]),t._v(" "),r("ProTable",{ref:"proTable",attrs:{showCreate:!1,columns:t.columns,"list-request":t.list,"list-options":t.listOptions,showRefresh:""}},[r("div",{attrs:{slot:"left"},slot:"left"},[r("el-button",{attrs:{disabled:t.contrastDisabled},on:{click:t.showContrast}},[t._v("\n        "+t._s(t.contrastTitle)+"\n      ")])],1)]),t._v(" "),r("BaseModal",{key:"prod"+t.state.prodKey,attrs:{visible:t.state.actionModal.show&&"prod"===t.state.actionModal.type,title:"保存制品",loading:t.state.actionModal.showOkLoading},on:{change:t.handleCancel,ok:t.saveProd}},[r("el-form",{ref:"saveForm",attrs:{model:t.state.saveForm,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"制品名称",prop:"prodName"}},[r("el-input",{attrs:{placeholder:"制品名称长度不能超过50字",maxlength:"50","show-word-limit":""},model:{value:t.state.saveForm.prodName,callback:function(e){t.$set(t.state.saveForm,"prodName","string"===typeof e?e.trim():e)},expression:"state.saveForm.prodName"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"描述",prop:"description"}},[r("el-input",{attrs:{type:"textarea",placeholder:"制品描述长度不能超过100字",maxlength:"100",rows:"3","show-word-limit":""},model:{value:t.state.saveForm.description,callback:function(e){t.$set(t.state.saveForm,"description","string"===typeof e?e.trim():e)},expression:"state.saveForm.description"}})],1)],1)],1),t._v(" "),r("BaseModal",{key:"visual"+t.state.visualKey,attrs:{visible:t.state.actionModal.show&&"visual"===t.state.actionModal.type,title:t.visualTitle,loading:t.state.actionModal.showOkLoading,showCancel:!1},on:{change:t.handleCancel,ok:t.handleCancel}},[t.isEmpty(t.state.contrastChartConfig)||t.isEmpty(t.state.contrastChartData)?r("div",[t._v("获取绘图数据失败")]):r("div",[r("Chart",{staticStyle:{height:"400px"},attrs:{type:"LineChart",chartConfig:t.state.contrastChartConfig,chartData:t.state.contrastChartData}})],1)]),t._v(" "),r("BaseModal",{key:"log"+t.state.logKey,attrs:{visible:t.state.actionModal.show&&"log"===t.state.actionModal.type,loading:t.state.actionModal.showOkLoading,title:"trial日志",width:"50",showCancel:!1},on:{change:t.handleCancel,ok:t.handleCancel}},[r("PodLogContainer",{ref:"podLogContainer",staticClass:"log",attrs:{pod:t.logOptions}})],1),t._v(" "),r("BaseModal",{key:"param"+t.state.paramKey,attrs:{visible:t.state.actionModal.show&&"param"===t.state.actionModal.type,loading:t.state.actionModal.showOkLoading,title:"trial参数",showCancel:!1},on:{change:t.handleCancel,ok:t.handleCancel}},[t._v("\n    参数\n  ")])],1)},o=[],a=r("ed09"),i=r("5c96"),c=r("2ef0"),u=r("92b4"),l=r("2e38"),s=r("f092"),f=r("f109"),d=r("d32b"),p=r("7f9b"),h=r("e64e"),m=r("48e0");function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){b(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e,r){return e=w(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function w(t){var e=O(t,"string");return"symbol"===v(e)?e:String(e)}function O(t,e){if("object"!==v(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function x(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */x=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(F){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var a=e&&e.prototype instanceof d?e:d,i=Object.create(a.prototype),c=new S(o||[]);return n(i,"_invoke",{value:j(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(F){return{type:"throw",arg:F}}}t.wrap=l;var f={};function d(){}function p(){}function h(){}var m={};u(m,a,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(C([])));y&&y!==e&&r.call(y,a)&&(m=y);var b=h.prototype=d.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function o(n,a,i,c){var u=s(t[n],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==v(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return o("throw",t,i,c)}))}c(u.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function j(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return _()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=L(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function C(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=h,n(b,"constructor",{value:h,configurable:!0}),n(h,"constructor",{value:p,configurable:!0}),p.displayName=u(h,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(O.prototype),u(O.prototype,i,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new O(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(b),u(b,c,"Generator"),u(b,a,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=C,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:C(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function j(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,o)}function L(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){j(a,n,o,i,c,"next",t)}function c(t){j(a,n,o,i,c,"throw",t)}i(void 0)}))}}var T={name:"TrialsList",components:{ProTable:s["a"],BaseModal:f["a"],Chart:h["default"],PodLogContainer:d["a"]},props:{stage:String,activeTab:String,contrastTitle:String,createUserId:Number},setup:function(t,e){var r=e.root.$route,n=r.params,o=void 0===n?{}:n,s=o.experimentId,f=Object(p["getStageOrder"])(t.stage),d=Object(a["o"])(null),h=Object(a["a"])((function(){return{experimentId:s,stageOrder:f}})),v={autoFit:!0,xField:null,yField:null,seriesField:null,smooth:!1,xAxis:{title:{text:"sequence",spacing:30,style:{fontSize:20}}},yAxis:{title:{text:"中间值",autoRotate:!1,textStyle:{fontSize:20,width:20},position:"center"}}},g=Object(a["o"])(null),b=Object(a["n"])({isContrast:!0,contrastChartConfig:{},contrastChartData:[],saveForm:{},actionModal:{show:!1,row:void 0,showOkLoading:!1,type:null},logKey:1,paramKey:1,prodKey:1,visualKey:1,activePod:""}),w=Object(a["a"])((function(){var t;return(null===(t=g.value)||void 0===t?void 0:t.state.selectedRows.length)<=1})),O=Object(a["a"])((function(){return b.isContrast?"trials对比":""})),j=function(t,e){Object.assign(b,{actionModal:{show:!0,row:t,showOkLoading:!1,type:e}})},T=function(){setTimeout((function(){d.value.reset(!0)}),0)},E=Object(a["a"])((function(){var e;return{podName:null===(e=b.actionModal.row)||void 0===e?void 0:e.podName,namespace:"namespace-".concat(t.createUserId)}})),S=function(){var t=L(x().mark((function t(e){return x().wrap((function(t){while(1)switch(t.prev=t.next){case 0:j(e,"log"),T();case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),C=function(){var t=L(x().mark((function t(e){var r,n,o,a=arguments;return x().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=!(a.length>1&&void 0!==a[1])||a[1],j(e,"visual"),n=e.map((function(t){return t.id})),t.next=5,Object(u["h"])(s,f,n);case 5:o=t.sent,Object.assign(b,{isContrast:r,contrastChartData:Object(p["extractSeriesData"])(o),contrastChartConfig:y(y(y({},v),o.config),{},{xAxis:{title:{text:o.config.xFieldName}},yAxis:{title:{text:o.config.yFieldName}}})});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),_=function(t){C([y({},t)],!1)},F=function(){var t;C(null===(t=g.value)||void 0===t?void 0:t.state.selectedRows)},P=function(){var t=b.actionModal.type.concat("Key");b[t]+=1,Object.assign(b,{actionModal:{show:!1,row:void 0,showOkLoading:!1,type:null}})},A=function(){P()},D=function(){i["Message"].info(b.saveForm,400),A()},N=Object(a["a"])((function(){return[{prop:"selections",type:"selection"},{prop:"sequence",label:"Sequence"},{prop:"status",label:"状态",type:"tag",tagAttr:{style:function(t){return{color:Object(p["getTrialByCode"])(t.status,"bgColor"),borderColor:Object(p["getTrialByCode"])(t.status,"bgColor")}}},formatter:function(t){return Object(p["getTrialByCode"])(t,"label")},dropdownList:m["allTrialStatusList"]},{prop:"executeScript",label:"算法文件"},{prop:"value",label:"accuracy",width:"120px"},{prop:"runTime",label:"持续时间",formatter:p["runTimeFormatter"],width:"240px"},{prop:"startTime",label:"开始时间",width:"240px",type:"time"},{prop:"resourceName",label:"计算资源"},{label:"操作",type:"operation",width:"370px",fixed:"right",operations:[{label:"可视化",func:_},{label:"查看日志",func:S,hideFunc:function(t){return[p["TRIAL_STATUS_MAP"].toRun.value,p["TRIAL_STATUS_MAP"].waiting.value].includes(t.status)}}]}]}));return Object(a["r"])((function(){return t.activeTab}),(function(){g.value.refresh()})),{contrastDisabled:w,visualTitle:O,experimentId:s,stageOrder:f,list:u["l"],listOptions:h,state:b,columns:N,handleCancel:A,showContrast:F,proTable:g,isEmpty:c["isEmpty"],saveProd:D,getPodLog:l["f"],logOptions:E,podLogContainer:d}}},E=T,S=(r("21d6"),r("2877")),C=Object(S["a"])(E,n,o,!1,null,null,null);e["default"]=C.exports}}]);