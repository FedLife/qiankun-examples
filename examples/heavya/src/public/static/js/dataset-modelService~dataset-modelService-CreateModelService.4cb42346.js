(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["dataset-modelService~dataset-modelService-CreateModelService"],{9533:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("BaseModal",{attrs:{visible:e.visible,loading:e.loading,title:"创建服务"},on:{change:e.hide,ok:e.handleOk}},[r("el-form",{ref:"formRef",attrs:{model:e.state.model,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"服务名称",prop:"name"}},[r("el-input",{attrs:{placeholder:"服务名称不能超过32字",maxlength:"32"},model:{value:e.state.model.name,callback:function(t){e.$set(e.state.model,"name",t)},expression:"state.model.name"}})],1),e._v(" "),r("el-form-item",{staticStyle:{width:"66.7%"},attrs:{label:"模型类型",prop:"modelType"}},[r("InfoSelect",{attrs:{dataSource:e.modelTypeList},model:{value:e.state.model.modelType,callback:function(t){e.$set(e.state.model,"modelType",t)},expression:"state.model.modelType"}})],1),e._v(" "),r("el-form-item",{staticStyle:{width:"66.7%"},attrs:{label:"算法",prop:"algorithmId"}},[r("InfoSelect",{attrs:{dataSource:e.algorithmList,filterable:"",labelKey:"algorithmName",valueKey:"id"},model:{value:e.state.model.algorithmId,callback:function(t){e.$set(e.state.model,"algorithmId",t)},expression:"state.model.algorithmId"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"预加载模型",prop:"modelParentId"}},[r("div",{staticClass:"flex"},[r("div",{staticStyle:{width:"40%"}},[r("InfoSelect",{staticStyle:{width:"100%"},attrs:{dataSource:e.modelList,filterable:"",labelKey:"name",valueKey:"id",placeholder:"请选择模型"},on:{change:e.handleModelParentChange},model:{value:e.state.model.modelParentId,callback:function(t){e.$set(e.state.model,"modelParentId",t)},expression:"state.model.modelParentId"}})],1),e._v(" "),r("div",{staticStyle:{width:"40%","margin-left":"10px"}},[r("InfoSelect",{staticStyle:{width:"100%"},attrs:{dataSource:e.modelBranchList,filterable:"",labelKey:"version",valueKey:"id",placeholder:"请选择模型版本"},model:{value:e.state.model.modelBranchId,callback:function(t){e.$set(e.state.model,"modelBranchId",t)},expression:"state.model.modelBranchId"}})],1)])]),e._v(" "),r("el-form-item",{attrs:{label:"镜像",prop:"imageId"}},[r("div",{staticClass:"flex"},[r("div",{staticStyle:{width:"40%"}},[r("InfoSelect",{staticStyle:{width:"100%"},attrs:{dataSource:e.imageList,filterable:"",plain:"",placeholder:"请选择镜像"},on:{change:e.handleImageNameChange},model:{value:e.state.model.imageName,callback:function(t){e.$set(e.state.model,"imageName",t)},expression:"state.model.imageName"}})],1),e._v(" "),r("div",{staticStyle:{width:"40%","margin-left":"10px"}},[r("InfoSelect",{staticStyle:{width:"100%"},attrs:{dataSource:e.imageTagList,filterable:"",labelKey:"imageTag",valueKey:"id",placeholder:"请选择镜像版本"},model:{value:e.state.model.imageId,callback:function(t){e.$set(e.state.model,"imageId",t)},expression:"state.model.imageId"}})],1)])]),e._v(" "),r("el-form-item",{attrs:{label:"节点类型",prop:"resourcesPoolType"}},[r("InfoRadio",{attrs:{dataSource:e.resoucePoolOptions,radioProps:e.radioProps},model:{value:e.state.model.resourcesPoolType,callback:function(t){e.$set(e.state.model,"resourcesPoolType",t)},expression:"state.model.resourcesPoolType"}})],1),e._v(" "),r("el-form-item",{staticStyle:{width:"66.7%"},attrs:{label:"节点规格",prop:"resourcesPoolSpecs"}},[r("InfoSelect",{staticStyle:{width:"100%"},attrs:{dataSource:e.resourcesPoolSpecList,filterable:"",labelKey:"specsName",valueKey:"id",placeholder:"请选择节点规格"},model:{value:e.state.model.resourcesPoolSpecs,callback:function(t){e.$set(e.state.model,"resourcesPoolSpecs",t)},expression:"state.model.resourcesPoolSpecs"}})],1),e._v(" "),r("el-form-item",{staticStyle:{width:"66.7%"},attrs:{label:"服务数量",prop:"instanceCount"}},[r("el-input-number",{attrs:{min:1,step:1,"step-strictly":""},model:{value:e.state.model.instanceNum,callback:function(t){e.$set(e.state.model,"instanceNum",t)},expression:"state.model.instanceNum"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"描述"}},[r("el-input",{attrs:{type:"textarea",placeholder:"服务描述",maxlength:"100",rows:"3"},model:{value:e.state.model.desc,callback:function(t){e.$set(e.state.model,"desc",t)},expression:"state.model.desc"}})],1)],1)],1)},o=[],a=r("5c96"),i=r("ed09"),l=r("2ef0"),c=r("f109"),u=r("ba8f"),s=r("ccc3"),d=r("6c99"),f=r("9eb2"),m=r("8bbd"),p=r("0be6"),h=r("a40c"),v=r("0c61"),y=r("61f7"),g=r("60fe");function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function w(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */w=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(k){c=function(e,t,r){return e[t]=r}}function u(e,t,r,o){var a=t&&t.prototype instanceof f?t:f,i=Object.create(a.prototype),l=new L(o||[]);return n(i,"_invoke",{value:j(e,r,l)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=u;var d={};function f(){}function m(){}function p(){}var h={};c(h,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(T([])));y&&y!==t&&r.call(y,a)&&(h=y);var g=p.prototype=f.prototype=Object.create(h);function O(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function o(n,a,i,l){var c=s(e[n],e,a);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"==b(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){o("next",e,i,l)}),(function(e){o("throw",e,i,l)})):t.resolve(d).then((function(e){u.value=e,i(u)}),(function(e){return o("throw",e,i,l)}))}l(c.arg)}var a;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){o(e,r,t,n)}))}return a=a?a.then(n,n):n()}})}function j(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return N()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=x(i,r);if(l){if(l===d)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function x(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=s(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,d;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function T(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return m.prototype=p,n(g,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:m,configurable:!0}),m.displayName=c(p,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,c(e,l,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},O(S.prototype),c(S.prototype,i,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new S(u(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},O(g),c(g,l,"Generator"),c(g,a,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=T,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(I),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),I(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:T(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}function O(e){return x(e)||j(e)||L(e)||S()}function S(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function j(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function x(e){if(Array.isArray(e))return T(e)}function P(e,t){return k(e)||N(e,t)||L(e,t)||I()}function I(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function L(e,t){if(e){if("string"===typeof e)return T(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?T(e,t):void 0}}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function N(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a,i,l=[],c=!0,u=!1;try{if(a=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(l.push(n.value),l.length!==t);c=!0);}catch(s){u=!0,o=s}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return l}}function k(e){if(Array.isArray(e))return e}function E(e,t,r,n,o,a,i){try{var l=e[a](i),c=l.value}catch(u){return void r(u)}l.done?t(c):Promise.resolve(c).then(n,o)}function _(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){E(a,n,o,i,l,"next",e)}function l(e){E(a,n,o,i,l,"throw",e)}i(void 0)}))}}function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){C(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function C(e,t,r){return t=K(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function K(e){var t=q(e,"string");return"symbol"===b(t)?t:String(t)}function q(e,t){if("object"!==b(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var M={name:void 0,modelType:void 0,algorithmId:void 0,modelParentId:void 0,modelBranchId:void 0,imageName:void 0,imageId:void 0,resourcesPoolType:g["q"].CPU,resourcesPoolSpecs:void 0,instanceNum:1,desc:void 0},B={name:"CreateModelService",components:{BaseModal:c["a"],InfoSelect:u["a"],InfoRadio:s["a"]},props:{refresh:Function},setup:function(e){var t=Object(i["o"])(!1),r=Object(i["o"])(!1),n=Object(i["o"])(null),o=Object(i["o"])([]),c=Object(i["o"])([]),u=Object(i["o"])([]),s=Object(i["o"])([]),b=Object(i["o"])([]),S=Object(i["o"])([]),j=Object(i["e"])(g["v"]),x=Object(i["n"])({model:$({},M)}),I=function(){r.value=!1,o.value=[],c.value=[],u.value=[],s.value=[],b.value=[],S.value=[],Object.assign(x,{model:$({},M)})},L=function(e,t,r){var n=x.model.instanceNum;y["h"].number(n)?Number(n)<1?r(new Error("节点数量不能小于1")):r():r(new Error("节点数量必须为数字"))},T={name:[{required:!0,message:"请填写服务名称",trigger:["change"]}],modelType:[{required:!0,message:"请选择模型类型",trigger:["change"]}],algorithmId:[{required:!0,message:"请选择算法",trigger:["change"]}],imageId:[{required:!0,message:"请选择镜像",trigger:["change"]}],resourcesPoolType:[{required:!0,message:"请选择节点类型",trigger:["change"]}],resourcesPoolSpecs:[{required:!0,message:"请选择节点规格",trigger:["change"]}],instanceCount:{required:!0,validator:L,trigger:"blur"}},N=function(){t.value=!0},k=function(){t.value=!1,Object(i["g"])((function(){I(),n.value.resetFields()}))},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(f["g"])({algorithmUsage:e.modelType})},A=function(){var e=_(w().mark((function e(){var t,r,n,o;return w().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Object(m["f"])(0),Object(m["f"])(1)]);case 2:return t=e.sent,r=P(t,2),n=r[0],o=r[1],e.abrupt("return",[].concat(O(n),O(o)));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=_(w().mark((function e(t){return w().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(p["f"])({parentId:t}).then((function(e){return e.result}));case 2:u.value=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(){var e=_(w().mark((function e(t){return w().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(h["e"])({imageName:t});case 2:b.value=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){return Object(h["d"])({imageTypes:[g["g"].DATASETMARKED]})},B=function(){Object.assign(x.model,{modelBranchId:void 0})},G=function(){Object.assign(x.model,{imageId:void 0}),Object(i["g"])((function(){n.value.clearValidate("imageId")}))},D=function(){var e=_(w().mark((function e(t){var r;return w().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([E(t),A(t),q()]);case 3:r=e.sent,o.value=r[0],c.value=r[1],s.value=r[2],e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),a["Message"].error(e.t0.message||"参数获取失败");case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),F=Object(i["a"])((function(){return Object.keys(g["q"]).map((function(e){return{label:e,value:g["q"][e]}}))})),R=function(){var e=_(w().mark((function e(t){return w().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(v["d"])($({module:g["p"].DATA_ANNOTATION,curent:1,size:500},t)).then((function(e){return e.result}));case 2:S.value=e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),J={border:!0},U=function(e){var t=S.value.find((function(t){return t.id===e}));return t?{resourcesPoolSpecs:JSON.stringify(Object(l["pick"])(t,["cpuNum","gpuNum","memNum"]))}:null},Y=function(){n.value.validate((function(t){if(t){r.value=!0;var n=U(x.model.resourcesPoolSpecs);Object(d["a"])($($($({},Object(l["omit"])(x.model,["resourcesPoolSpecs"])),n),{},{instanceNum:Number(x.model.instanceNum)})).then((function(){a["Message"].success("模型服务创建成功"),k(),e.refresh()})).finally((function(){r.value=!1}))}}))};return Object(i["r"])((function(){return x.model.modelType}),(function(e){e&&D({modelType:e})})),Object(i["r"])((function(){return x.model.modelParentId}),(function(e){e&&C(e)})),Object(i["r"])((function(){return x.model.imageName}),(function(e){e&&K(e)})),Object(i["s"])((function(){R({resourcesPoolType:x.model.resourcesPoolType})})),{visible:t,loading:r,show:N,hide:k,rules:T,state:x,formRef:n,handleOk:Y,modelTypeList:j,algorithmList:o,modelList:c,modelBranchList:u,imageList:s,imageTagList:b,radioProps:J,resoucePoolOptions:F,resourcesPoolSpecList:S,handleModelParentChange:B,handleImageNameChange:G}}},G=B,D=r("2877"),F=Object(D["a"])(G,n,o,!1,null,null,null);t["default"]=F.exports}}]);