(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["model-components-modelUploader"],{2768:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"model-uploader-container"},[r("upload-inline",{attrs:{action:"fakeApi",accept:t.accept,acceptSize:t.modelConfig.uploadFileAcceptSize,acceptSizeFormat:t.uploadSizeFomatter,"list-type":"text",limit:1,multiple:!1,"show-file-count":!1,params:t.uploadParams,"auto-upload":!0,filters:t.uploadFilters,onRemove:t.onRemove},on:{uploadStart:t.uploadStart,uploadSuccess:t.uploadSuccess,uploadError:t.uploadError}}),t._v(" "),t.loading?r("upload-progress",{attrs:{progress:t.progress,color:t.customColors,status:t.status,size:t.size},on:{onSetProgress:t.onSetProgress}}):t._e()],1)},o=[],i=r("7f969"),a=r("6e3b"),c=r("f121"),u=r("ed08"),s=r("8bbd");function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function f(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */f=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(k){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),c=new j(o||[]);return n(a,"_invoke",{value:E(t,r,c)}),a}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=s;var d={};function h(){}function m(){}function y(){}var g={};u(g,i,(function(){return this}));var v=Object.getPrototypeOf,b=v&&v(v(_([])));b&&b!==e&&r.call(b,i)&&(g=b);var w=y.prototype=h.prototype=Object.create(g);function O(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function o(n,i,a,c){var u=p(t[n],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==l(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function E(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=x(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=p(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function x(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=p(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function M(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(M,this),this.reset(!0)}function _(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return m.prototype=y,n(w,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},O(L.prototype),u(L.prototype,a,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(w),u(w,c,"Generator"),u(w,i,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function p(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function d(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){p(i,n,o,a,c,"next",t)}function c(t){p(i,n,o,a,c,"throw",t)}a(void 0)}))}}var h={name:"ModelUploader",components:{UploadInline:i["a"],UploadProgress:a["a"]},props:{type:{type:String,default:"Custom"},modelType:String},data:function(){return{modelConfig:c["g"],uploadParams:{objectPath:null},loading:!1,size:0,progress:0,customColors:[{color:"#909399",percentage:40},{color:"#e6a23c",percentage:80},{color:"#67c23a",percentage:100}],uploadFilters:[u["ib"]],modelSuffixMap:{}}},computed:{status:function(){return 100===this.progress?"success":null},user:function(){return this.$store.getters.user},isAtlas:function(){return"Atlas"===this.type},accept:function(){return this.isAtlas?".zip":this.modelType?this.modelSuffixMap[this.modelType]?".zip,".concat(this.modelSuffixMap[this.modelType]):".zip":".zip,.pb,.h5,.ckpt,.pkl,.pth,.weight,.caffemodel,.pt"}},watch:{loading:function(t){this.$emit("loadingChange",t)}},created:function(){this.updatePath(),this.isAtlas||this.getModelSuffix()},methods:{uploadSizeFomatter:u["Ub"],updatePath:function(){this.uploadParams.objectPath="upload-temp/".concat(this.user.id,"/").concat(Object(u["ab"])())},getModelSuffix:function(){var t=d(f().mark((function t(){return f().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["i"])({modelType:this.modelType});case 2:this.modelSuffixMap=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onRemove:function(){this.loading=!1,this.$emit("modelAddressChange",null)},uploadStart:function(t){this.updatePath();var e=[!0,t.size,0];this.loading=e[0],this.size=e[1],this.progress=e[2],this.$emit("uploadStart")},onSetProgress:function(t){this.progress+=t},uploadSuccess:function(t){var e=this;this.progress=100,setTimeout((function(){e.loading=!1}),1e3),this.$emit("modelAddressChange",t[0].data.objectName)},uploadError:function(){this.loading=!1,this.$message({message:"上传文件失败",type:"error"}),this.$emit("uploadError")}}},m=h,y=r("2877"),g=Object(y["a"])(m,n,o,!1,null,null,null);e["default"]=g.exports},"8bbd":function(t,e,r){"use strict";r.d(e,"l",(function(){return i})),r.d(e,"a",(function(){return a})),r.d(e,"d",(function(){return u})),r.d(e,"f",(function(){return s})),r.d(e,"m",(function(){return l})),r.d(e,"k",(function(){return f})),r.d(e,"b",(function(){return p})),r.d(e,"j",(function(){return d})),r.d(e,"i",(function(){return h})),r.d(e,"e",(function(){return m})),r.d(e,"h",(function(){return y})),r.d(e,"g",(function(){return g}));var n=r("b775"),o=r("f121");function i(t){return Object(n["a"])({url:"/".concat(o["a"].MODEL,"/ptModelInfo"),method:"get",params:t})}function a(t){return Object(n["a"])({url:"/".concat(o["a"].MODEL,"/ptModelInfo"),method:"post",data:t})}function c(t){return Object(n["a"])({url:"/".concat(o["a"].MODEL,"/ptModelInfo"),method:"put",data:t})}function u(t){return Object(n["a"])({url:"/".concat(o["a"].MODEL,"/ptModelInfo"),method:"delete",data:t})}function s(t,e){return Object(n["a"])({url:"/".concat(o["a"].MODEL,"/ptModelInfo/byResource"),method:"get",params:{modelResource:t,packaged:e}})}function l(t){return Object(n["a"])({url:"/".concat(o["a"].MODEL,"/ptModelInfo/package"),method:"post",data:t})}function f(t){return Object(n["a"])({url:"/".concat(o["a"].MODEL,"/ptModelInfo/servingModel"),method:"get",params:{modelResource:t}})}function p(t){return Object(n["a"])({url:"/".concat(o["a"].MODEL,"/ptModelInfo/uploadModel"),method:"post",data:t})}function d(){return Object(n["a"])({url:"/".concat(o["a"].MODEL,"/ptModelType"),method:"get"})}function h(t){return Object(n["a"])({url:"/".concat(o["a"].MODEL,"/ptModelSuffix"),method:"get",params:t})}function m(t){return Object(n["a"])({url:"/".concat(o["a"].MODEL,"/ptModelInfo/byModelId"),method:"get",params:{id:t}})}function y(t){return Object(n["a"])({url:"/".concat(o["a"].MODEL,"/ptModelStruct"),method:"get",params:t})}function g(t){return Object(n["a"])({url:"/".concat(o["a"].MODEL,"/ptModelInfo/atlasModel"),method:"get",params:t})}e["c"]={list:i,add:a,edit:c,del:u}}}]);