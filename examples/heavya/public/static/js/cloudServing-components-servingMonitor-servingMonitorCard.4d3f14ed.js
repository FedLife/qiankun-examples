(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["cloudServing-components-servingMonitor-servingMonitorCard","cloudServing-components-servingCallGuide","cloudServing-components-servingMonitor-servingMonitorUsageUnit","cloudServing-util"],{"25e0":function(t,e,n){},2988:function(t,e,n){"use strict";n.r(e),n.d(e,"SERVING_STATUS_ENUM",(function(){return m})),n.d(e,"ONLINE_SERVING_STATUS_MAP",(function(){return g})),n.d(e,"BATCH_SERVING_STATUS_MAP",(function(){return v})),n.d(e,"ONLINE_SERVING_TYPE",(function(){return y})),n.d(e,"serviceTypeMap",(function(){return b})),n.d(e,"map2Array",(function(){return S})),n.d(e,"numFormatter",(function(){return _})),n.d(e,"upload",(function(){return O})),n.d(e,"cpuFormatter",(function(){return h})),n.d(e,"memFormatter",(function(){return N})),n.d(e,"batchServingProgressColor",(function(){return U})),n.d(e,"getPollId",(function(){return P})),n.d(e,"parseObj",(function(){return E}));var r,o,a,u=n("ed08");function i(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=c(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,i=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return u=t.done,t},e:function(t){i=!0,a=t},f:function(){try{u||null==n.return||n.return()}finally{if(i)throw a}}}}function c(t,e){if(t){if("string"===typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(t,e):void 0}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function p(t,e,n){return e=f(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function f(t){var e=d(t,"string");return"symbol"===l(e)?e:String(e)}function d(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var m={EXCEPTION:"0",IN_DEPLOYMENT:"1",WORKING:"2",STOP:"3",COMPLETED:"4",UNKNOWN:"5"},g=(r={},p(r,m.IN_DEPLOYMENT,{name:"部署中",tagMap:""}),p(r,m.WORKING,{name:"运行中",tagMap:"success"}),p(r,m.STOP,{name:"已停止",tagMap:"info"}),p(r,m.EXCEPTION,{name:"运行失败",tagMap:"danger"}),r),v=(o={},p(o,m.IN_DEPLOYMENT,{name:"部署中",tagMap:""}),p(o,m.WORKING,{name:"运行中",tagMap:""}),p(o,m.STOP,{name:"已停止",tagMap:"info"}),p(o,m.EXCEPTION,{name:"运行失败",tagMap:"danger"}),p(o,m.COMPLETED,{name:"运行完成",tagMap:"success"}),p(o,m.UNKNOWN,{name:"未知",tagMap:"info"}),o),y={HTTP:0,GRPC:1},b=(a={},p(a,y.HTTP,"HTTP 模式"),p(a,y.GRPC,"GRPC 模式"),a);function S(t){var e=[];if("object"!==l(t)||null===t)return e;for(var n=0,r=Object.keys(t);n<r.length;n++){var o=r[n];e.push({name:o,type:t[o]})}return e}function _(t){return t<1e4?"".concat(t):"".concat(Math.round(t/1e3)/10,"万")}function M(t){var e=t.response||t.responseText;try{return JSON.parse(e)}catch(n){return e}}function O(t){var e,n=new XMLHttpRequest,r=new FormData,o=i(t.fileList);try{for(o.s();!(e=o.n()).done;){var a=e.value;r.append(t.uploadName,a,a.name)}}catch(u){o.e(u)}finally{o.f()}return n.upload&&t.onUploadProgress&&(n.upload.onprogress=function(e){e.total>0&&(e.percent=e.loaded/e.total*100),t.onUploadProgress(e)}),n.onreadystatechange=function(){if(4===n.readyState){var e=M(n);if(n.status<200||n.status>=300){var r=new Error(e.msg||"未知错误");return t.onUploadError(r)}t.onUploadSuccess(e)}},n.open("post",t.requestUrl,!0),n.send(r),n}function h(t,e){return e?("n"===e&&(t/=1e6,e="m"),"m"===e?"".concat(Math.round(10*t)/10,"m"):t+e):"".concat(t,"核")}function N(t,e){return"".concat(Math.round(10*Object(u["qb"])(t,e))/10," Gi")}var U=[{color:"#67c23a",percentage:100}];function P(){return(new Date).getTime()}function E(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"; ";return t instanceof Object?Object.keys(t).filter((function(e){return null!==t[e]||""!==t[e]})).map((function(e){return"".concat(e,": ").concat(t[e])})).join(e):""}},"2d60":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"usage-wrapper"},[n("el-progress",{attrs:{type:"circle",percentage:t.percentage>100?100:t.percentage,format:t.formatter(t.percentage),color:t.color,width:100}}),t._v(" "),n("div",{staticClass:"usage-display"},[n("span",{staticClass:"usage-title"},[t._v(t._s(t.title))]),t._v(" "),t.used?n("p",[t._v("已用 "+t._s(t.used))]):t._e(),t._v(" "),t.total?n("p",[t._v("可用 "+t._s(t.total))]):t._e(),t._v(" "),t._l(t.otherMsgs,(function(e,r){return n("p",{key:r},[t._v(t._s(e))])}))],2)],1)},o=[],a={name:"ServingMonitorUsageUnit",props:{title:{type:String,required:!0},used:{type:String},total:{type:String},percentage:{type:Number,required:!0},otherMsgs:{type:Array,default:function(){return[]}},color:{type:[String,Function,Array],default:null}},methods:{formatter:function(t){return function(){return"".concat(t,"%")}}}},u=a,i=(n("5589"),n("2877")),c=Object(i["a"])(u,r,o,!1,null,"c0da142e",null);e["default"]=c.exports},5589:function(t,e,n){"use strict";n("63fa")},"63fa":function(t,e,n){},"9fa2":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-card",{staticClass:"serving-monitor-card"},[n("div",{staticClass:"name"},[t._v(t._s(t.pod.fullDisplayName))]),t._v(" "),n("el-tooltip",{attrs:{content:"点击查看监控信息详情",placement:"top",disabled:!t.pod.grafanaUrl}},[n("div",{staticClass:"info-wrapper cp",on:{click:t.onMonitorClick}},[t.modelUsages.length?n("div",{staticClass:"monitor-units-container"},t._l(t.modelUsages,(function(t){return n("ServingMonitorUsageUnit",{key:t.title,staticClass:"dib",attrs:{title:t.title,used:t.used,total:t.total,percentage:t.percentage,"other-msgs":t.otherMsgs}})})),1):n("p",[t._v("暂无数据")])])])],1)},o=[],a=n("ed09"),u=n("ed08"),i=n("2988"),c=n("2d60"),s={name:"ServingMonitorCard",components:{ServingMonitorUsageUnit:c["default"]},props:{pod:{type:Object,required:!0}},setup:function(t,e){var n=Object(a["q"])(t),r=n.pod,o=t.pod,c=o.podName,s=o.namespace,l=Object(a["a"])((function(){var t=[],e=r.value,n=e.cpuUsageAmount,o=e.cpuUsageFormat,a=e.cpuRequestAmount,c=e.cpuRequestFormat,s=e.memoryUsageAmount,l=e.memoryUsageFormat,p=e.memoryRequestAmount,f=e.memoryRequestFormat,d=e.gpuUsed,m=e.gpuUsagePersent;if(t.push({title:"CPU",used:Object(i["cpuFormatter"])(n,o),total:Object(i["cpuFormatter"])(a,c),percentage:Object(u["C"])(n,o,a,c)}),t.push({title:"内存",used:Object(i["memFormatter"])(s,l),total:Object(i["memFormatter"])(p,f),percentage:Object(u["rb"])(s,l,p,f)}),d>0){var g=m.reduce((function(t,e){return t+Number(e.usage)}),0);t.push({title:"GPU",otherMsgs:["GPU 卡数：".concat(d)],percentage:g})}return t})),p=function(){e.emit("show-monitor",{podName:c,namespace:s})};return{modelUsages:l,onMonitorClick:p}}},l=s,p=(n("a4d6"),n("2877")),f=Object(p["a"])(l,r,o,!1,null,"35954f32",null);e["default"]=f.exports},a4d6:function(t,e,n){"use strict";n("25e0")}}]);