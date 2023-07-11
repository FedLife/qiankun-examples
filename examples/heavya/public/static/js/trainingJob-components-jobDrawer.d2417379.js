(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["trainingJob-components-jobDrawer"],{15407:function(t,e,n){},"2e38":function(t,e,n){"use strict";n.d(e,"f",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return s})),n.d(e,"e",(function(){return u})),n.d(e,"d",(function(){return l})),n.d(e,"g",(function(){return f}));var r=n("b775"),o=n("f121");function i(t){return Object(r["a"])({url:"/".concat(o["a"].K8S,"/pod/log"),method:"get",params:t})}function a(t){return Object(r["a"])({url:"/".concat(o["a"].K8S,"/pod/log/download"),method:"get",params:t})}function c(t){return Object(r["a"])({url:"/".concat(o["a"].K8S,"/pod/log/download"),method:"post",responseType:"blob",data:t})}function s(t,e){return Object(r["a"])({url:"/".concat(o["a"].K8S,"/pod/log/count"),method:"post",data:{namespace:t,podVOList:e}})}function u(t){return Object(r["a"])({url:"/".concat(o["a"].K8S,"/pod/realtimeMetrics"),method:"get",params:t})}function l(t){return Object(r["a"])({url:"/".concat(o["a"].K8S,"/pod/rangeMetrics"),method:"get",params:t})}function f(t){return Object(r["a"])({url:"/".concat(o["a"].K8S,"/namespace/findNamespace"),method:"get",params:{userId:t}})}},"323b":function(t,e,n){"use strict";n("15407")},"79ab":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ts-drawer"},[n("div",{staticClass:"title",attrs:{tabindex:"0"}},[t._v("配置信息")]),t._v(" "),n("job-detail",{attrs:{item:t.item}}),t._v(" "),n("div",{staticClass:"title"},[t._v("运行信息")]),t._v(" "),n("el-row",{staticClass:"row"},[n("el-col",{attrs:{span:12}},[n("div",{staticClass:"label"},[t._v("运行时长")]),t._v(" "),n("div",{staticClass:"text"},[t._v(t._s(t.item.runtime))])]),t._v(" "),n("el-col",{attrs:{span:12}},[n("div",{staticClass:"label"},[t._v("运行日志")]),t._v(" "),n("el-button",{on:{click:t.onCheckLog}},[t._v("点击查看")])],1),t._v(" "),1===t.item.trainStatus?n("el-col",{attrs:{span:12}},[n("div",{staticClass:"label"},[t._v("监控信息")]),t._v(" "),n("el-button",{attrs:{size:"mini"},on:{click:t.checkMetrics}},[t._v("查看监控信息")])],1):t._e()],1),t._v(" "),n("el-row",{staticClass:"row"},[t.item.delayCreateCountDown>0?n("el-col",{attrs:{span:12}},[n("div",{staticClass:"label"},[t._v("延迟启动")]),t._v(" "),n("div",{staticClass:"text"},[t._v("剩余 "+t._s(t._f("minute2Time")(t.item.delayCreateCountDown)))])]):t._e(),t._v(" "),t.item.delayDeleteCountDown>0?n("el-col",{attrs:{span:12}},[n("div",{staticClass:"label"},[t._v("训练停止")]),t._v(" "),n("div",{staticClass:"text"},[t._v("剩余 "+t._s(t._f("minute2Time")(t.item.delayDeleteCountDown)))])]):t._e()],1),t._v(" "),n("el-dialog",{attrs:{visible:t.metricsVisible,width:"800px",title:"监控信息","append-to-body":"",top:"5vh","custom-class":"metrics-dialog","close-on-click-modal":!1},on:{"update:visible":function(e){t.metricsVisible=e},opened:t.onMetricsDialogOpened,close:t.onMetricsDialogClose}},[n("label",{staticClass:"pr-20"},[t._v("选择节点")]),t._v(" "),n("el-select",{staticClass:"w-300 mb-20",attrs:{placeholder:"请选择节点",filterable:"",multiple:"","collapse-tags":""},on:{change:t.onSelectedPodChange},model:{value:t.selectedPod,callback:function(e){t.selectedPod=e},expression:"selectedPod"}},t._l(t.podList,(function(t){return n("el-option",{key:t.podName,attrs:{value:t.podName,label:t.displayName}})})),1),t._v(" "),n("PodMonitor",{ref:"podMonitor",attrs:{namespace:t.item.k8sNamespace,"resource-name":t.item.jobName,"pod-name":t.selectedPod,"display-gpu":t.item.resourcesPoolType===t.RESOURCES_POOL_TYPE_ENUM.GPU}})],1)],1)},o=[],i=n("ed08"),a=n("cce0"),c=n("f48d"),s=n("e9e5");function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function l(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */l=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(D){s=function(t,e,n){return t[e]=n}}function f(t,e,n,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new k(o||[]);return r(a,"_invoke",{value:L(t,n,c)}),a}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(D){return{type:"throw",arg:D}}}t.wrap=f;var d={};function p(){}function v(){}function m(){}var y={};s(y,i,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(j([])));w&&w!==e&&n.call(w,i)&&(y=w);var b=m.prototype=p.prototype=Object.create(y);function _(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(r,i,a,c){var s=h(t[r],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==u(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,c)}))}c(s.arg)}var i;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}})}function L(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return P()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=C(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=h(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===d)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function C(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,C(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=h(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return v.prototype=m,r(b,"constructor",{value:m,configurable:!0}),r(m,"constructor",{value:v,configurable:!0}),v.displayName=s(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},_(x.prototype),s(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new x(f(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(b),s(b,c,"Generator"),s(b,i,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=j,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}function f(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,o)}function h(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){f(i,r,o,a,c,"next",t)}function c(t){f(i,r,o,a,c,"throw",t)}a(void 0)}))}}var d={name:"JobDrawer",components:{JobDetail:s["default"],PodMonitor:c["a"]},filters:{minute2Time:function(t){var e=t||0,n=Math.floor(t/1440);e%=1440;var r=Math.floor(e/60);return e%=60,"".concat(n?n+"天":"").concat(r?r+"小时":"").concat(e,"分钟")}},data:function(){return{RESOURCES_POOL_TYPE_ENUM:i["q"],item:{},podList:[],selectedPod:[],keepCountDown:!1,metricsVisible:!1}},methods:{countDown:function(){var t=this;this.keepCountDown&&setTimeout((function(){t.getJobDetail(t.item.id),t.countDown()}),6e4)},onOpen:function(){var t=h(l().mark((function t(e){return l().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.getPodList(e),t.next=3,this.getJobDetail(e);case 3:(this.item.delayCreateCountDown>0||this.item.delayDeleteCountDown>0)&&(this.keepCountDown=!0,this.countDown());case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getJobDetail:function(){var t=h(l().mark((function t(e){return l().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(a["g"])(e);case 2:this.item=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getPodList:function(){var t=h(l().mark((function t(e){return l().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(a["j"])(e);case 2:this.podList=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onSelectedPodChange:function(){var t=this;this.$nextTick((function(){t.$refs.podMonitor.init()}))},checkMetrics:function(){this.item.k8sNamespace&&this.item.jobName?this.metricsVisible=!0:this.$message.warning("命名空间或资源名称为空，无法查看监控信息")},onMetricsDialogOpened:function(){var t=this;this.podList.length&&(this.selectedPod=[this.podList[0].podName]),this.$nextTick((function(){t.$refs.podMonitor.init()}))},onMetricsDialogClose:function(){this.$refs.podMonitor.stop(),this.selectedPod=[]},onClose:function(){this.keepCountDown=!1},onCheckLog:function(){this.$emit("show-log",this.item)}}},p=d,v=(n("323b"),n("2877")),m=Object(v["a"])(p,r,o,!1,null,"0318687f",null);e["default"]=m.exports}}]);