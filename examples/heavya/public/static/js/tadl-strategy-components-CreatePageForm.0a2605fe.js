(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["tadl-strategy-components-CreatePageForm","tadl-strategy-util"],{b1dd:function(t,e,r){"use strict";r.r(e),r.d(e,"modifyTime",(function(){return n})),r.d(e,"typeOf",(function(){return o})),r.d(e,"underlineShiftHump",(function(){return i})),r.d(e,"humpShiftUnderline",(function(){return l})),r.d(e,"isNull",(function(){return c}));var a=/^([\d.]+)([a-z]+)$/;function n(t){return t.match(a).slice(1,3)}function o(t){return Object.prototype.toString.call(t).slice(8,-1)}function i(t){var e={};return Object.keys(t).forEach((function(r){var a=r.split("_"),n=a[0];a.forEach((function(t,e){e&&(n+=t.slice(0,1).toUpperCase()+t.slice(1))})),e[n]=t[r],"Array"===o(t[r])&&t[r].forEach((function(t,r){"Object"===o(t)&&(e[n][r]=i(t))})),"Object"===o(t[r])&&(e[n]=i(t[r]))})),e}function l(t){var e={};return Object.keys(t).forEach((function(r){var a=r.replace(/([A-Z])/g,"_$1").toLowerCase();e[a]=t[r],"Array"===o(t[r])&&t[r].forEach((function(t,r){"Object"===o(t)&&(e[a][r]=l(t))})),"Object"===o(t[r])&&(e[a]=l(t[r]))})),e}var c=function(t){return null===t||void 0===t||"string"===typeof t&&0===t.trim().length}},c6e5:function(t,e,r){"use strict";r.d(e,"g",(function(){return o})),r.d(e,"e",(function(){return i})),r.d(e,"d",(function(){return l})),r.d(e,"i",(function(){return c})),r.d(e,"h",(function(){return u})),r.d(e,"c",(function(){return s})),r.d(e,"j",(function(){return m})),r.d(e,"f",(function(){return d})),r.d(e,"a",(function(){return p})),r.d(e,"b",(function(){return f}));var a=r("b775"),n=r("f121");function o(t){return Object(a["a"])({url:"/".concat(n["a"].TADL,"/algorithm/unzip"),method:"get",params:t})}function i(t){return Object(a["a"])({url:"/".concat(n["a"].TADL,"/algorithm/yaml"),method:"get",params:t})}function l(t){return Object(a["a"])({url:"/".concat(n["a"].TADL,"/algorithm/query"),method:"get",params:t})}function c(t){return Object(a["a"])({url:"/".concat(n["a"].TADL,"/algorithm/upload"),method:"post",data:t})}function u(t){return Object(a["a"])({url:"/".concat(n["a"].TADL,"/algorithm/update"),method:"post",data:t})}function s(t){return Object(a["a"])({url:"/".concat(n["a"].TADL,"/algorithm/").concat(t," /next/version"),method:"get",params:{algorithmId:t}})}function m(t){return Object(a["a"])({url:"/".concat(n["a"].TADL,"/algorithm/push/version"),method:"post",data:t})}function d(t){return Object(a["a"])({url:"/".concat(n["a"].TADL,"/algorithm/version/switch"),method:"put",data:t})}function p(t,e){return Object(a["a"])({url:"/".concat(n["a"].TADL,"/algorithm/").concat(e,"/query"),method:"get",params:t})}function f(t){return Object(a["a"])({url:"/".concat(n["a"].TADL,"/algorithm"),method:"delete",data:t})}},daef:function(t,e,r){"use strict";r("de13")},de13:function(t,e,r){},e3b7:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"tabs"},[r("el-tabs",{staticClass:"eltabs-inlineblock",on:{"tab-click":t.handleClick},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[r("el-tab-pane",{attrs:{id:"tab_0",label:"基本配置",name:"page"}}),t._v(" "),r("el-tab-pane",{attrs:{id:"tab_1",label:"运行参数",name:"params"}})],1)],1),t._v(" "),r("el-form",{directives:[{name:"show",rawName:"v-show",value:"page"===t.active,expression:"active === 'page'"}],key:t.steps,ref:"formRef",staticClass:"form",attrs:{model:t.form,disabled:"check"===t.type,rules:t.rules,"label-width":"150px"}},[0===t.steps?[r("el-form-item",{attrs:{label:"默认指标",prop:"default_metric"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{id:"default_metric",placeholder:"由上传的算法文件生成",disabled:""},model:{value:t.createForm.default_metric,callback:function(e){t.$set(t.createForm,"default_metric",e)},expression:"createForm.default_metric"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"GPU",prop:"gpu"}},[r("el-switch",{attrs:{id:"gpu","active-value":!0,"inactive-value":!1,disabled:""},model:{value:t.createForm.gpu,callback:function(e){t.$set(t.createForm,"gpu",e)},expression:"createForm.gpu"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"算法类型",prop:"alg_type"}},[r("el-radio-group",{attrs:{disabled:""},model:{value:t.createForm.alg_type,callback:function(e){t.$set(t.createForm,"alg_type",e)},expression:"createForm.alg_type"}},[r("el-radio",{staticClass:"mr-0",attrs:{label:"NAS",border:""}},[t._v("NAS")])],1)],1),t._v(" "),r("el-form-item",{attrs:{label:"运行环境"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{id:"imageId",placeholder:"由上传的算法文件生成",disabled:""},model:{value:t.createForm.platform,callback:function(e){t.$set(t.createForm,"platform",e)},expression:"createForm.platform"}}),t._v(" "),r("el-input",{staticStyle:{width:"200px"},attrs:{id:"imagePath",placeholder:"由上传的算法文件生成",disabled:""},model:{value:t.createForm.platform_version,callback:function(e){t.$set(t.createForm,"platform_version",e)},expression:"createForm.platform_version"}})],1),t._v(" "),"NAS"===t.createForm.alg_type?r("el-form-item",{attrs:{label:"ONE_SHOT",prop:"one_shot"}},[r("el-switch",{attrs:{id:"one_shot","active-value":!0,"inactive-value":!1,disabled:""},model:{value:t.createForm.one_shot,callback:function(e){t.$set(t.createForm,"one_shot",e)},expression:"createForm.one_shot"}})],1):t._e(),t._v(" "),r("el-form-item",{attrs:{label:"算法描述",prop:"description"}},[r("el-input",{staticStyle:{width:"400px"},attrs:{id:"description",type:"textarea",rows:3,maxlength:"256","show-word-limit":"",placeholder:""},model:{value:t.createForm.description,callback:function(e){t.$set(t.createForm,"description",e)},expression:"createForm.description"}})],1)]:[r("el-form-item",{attrs:{label:"支持多卡训练"}},[r("el-switch",{attrs:{id:"multi_gpu","active-value":!0,"inactive-value":!1},model:{value:t.pageForm.multi_gpu,callback:function(e){t.$set(t.pageForm,"multi_gpu",e)},expression:"pageForm.multi_gpu"}})],1),t._v(" "),r("el-form-item",{ref:"datasetId",attrs:{label:"数据集",prop:"datasetId"}},[r("InfoSelect",{staticStyle:{display:"inline-block"},attrs:{width:"200px",placeholder:"请选择数据集",dataSource:t.datasetIdList,"value-key":"id","label-key":"name",filterable:""},on:{change:t.onDatasetChange},model:{value:t.pageForm.dataset_id,callback:function(e){t.$set(t.pageForm,"dataset_id",e)},expression:"pageForm.dataset_id"}}),t._v(" "),r("InfoSelect",{staticStyle:{display:"inline-block"},attrs:{width:"200px",placeholder:"请选择数据集版本",dataSource:t.datasetVersionList,"value-key":"versionUrl","label-key":"versionName",filterable:""},on:{change:t.onDatasetVersionChange},model:{value:t.pageForm.dataset_path,callback:function(e){t.$set(t.pageForm,"dataset_path",e)},expression:"pageForm.dataset_path"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"运行命令"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{id:"pythonVersion",placeholder:"由上传文件生成",disabled:""},model:{value:t.pageForm.python_version,callback:function(e){t.$set(t.pageForm,"python_version",e)},expression:"pageForm.python_version"}}),t._v(" "),r("el-input",{staticStyle:{width:"200px"},attrs:{id:"executeScript",placeholder:"由上传文件生成",disabled:""},model:{value:t.pageForm.execute_script,callback:function(e){t.$set(t.pageForm,"execute_script",e)},expression:"pageForm.execute_script"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"现阶段最大运行时间",prop:"max_exec_duration"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{id:"maxExecDuration",placeholder:"请输入时间",clearable:""},model:{value:t.pageForm.max_exec_duration,callback:function(e){t.$set(t.pageForm,"max_exec_duration",e)},expression:"pageForm.max_exec_duration"}}),t._v(" "),r("InfoSelect",{staticStyle:{display:"inline-block"},attrs:{width:"190",placeholder:"请选择时间单位",dataSource:t.timeFmts,"value-key":"value","label-key":"label"},model:{value:t.pageForm.max_exec_duration_unit,callback:function(e){t.$set(t.pageForm,"max_exec_duration_unit",e)},expression:"pageForm.max_exec_duration_unit"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"最大Trial次数",prop:"max_trial_num"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入最大Trial次数",clearable:""},model:{value:t.pageForm.max_trial_num,callback:function(e){t.$set(t.pageForm,"max_trial_num",t._n(e))},expression:"pageForm.max_trial_num"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"Trial并发数量",prop:"trial_concurrent_num"}},[r("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:"请输入Trial并发数量",clearable:""},model:{value:t.pageForm.trial_concurrent_num,callback:function(e){t.$set(t.pageForm,"trial_concurrent_num",t._n(e))},expression:"pageForm.trial_concurrent_num"}})],1)]],2),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:"params"===t.active,expression:"active === 'params'"}],staticStyle:{position:"relative",height:"500px"}},[r("YamlEditor",{ref:"yamlRef",attrs:{value:t.yamlValue,"read-only":0===t.steps||"check"===t.type},on:{changed:t.onYamlChange}})],1)],1)},n=[],o=r("e2c1"),i=r("5c96"),l=r("ed09"),c=r("141b"),u=r("c6e5"),s=r("ba8f"),m=r("08da"),d=r("ed08"),p=r("7f9b"),f=r("b1dd");function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function v(t,e){return x(t)||_(t,e)||b(t,e)||y()}function y(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function b(t,e){if(t){if("string"===typeof t)return g(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(t,e):void 0}}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}function _(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var a,n,o,i,l=[],c=!0,u=!1;try{if(o=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(a=o.call(r)).done)&&(l.push(a.value),l.length!==e);c=!0);}catch(s){u=!0,n=s}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw n}}return l}}function x(t){if(Array.isArray(t))return t}function w(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */w=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",l=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(E){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),l=new k(n||[]);return a(i,"_invoke",{value:O(t,r,l)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(E){return{type:"throw",arg:E}}}t.wrap=u;var m={};function d(){}function p(){}function f(){}var v={};c(v,o,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(L([])));b&&b!==e&&r.call(b,o)&&(v=b);var g=f.prototype=d.prototype=Object.create(v);function _(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(a,o,i,l){var c=s(t[a],t,o);if("throw"!==c.type){var u=c.arg,m=u.value;return m&&"object"==h(m)&&r.call(m,"__await")?e.resolve(m.__await).then((function(t){n("next",t,i,l)}),(function(t){n("throw",t,i,l)})):e.resolve(m).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,l)}))}l(c.arg)}var o;a(this,"_invoke",{value:function(t,r){function a(){return new e((function(e,a){n(t,r,e,a)}))}return o=o?o.then(a,a):a()}})}function O(t,e,r){var a="suspendedStart";return function(n,o){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===n)throw o;return P()}for(r.method=n,r.arg=o;;){var i=r.delegate;if(i){var l=j(i,r);if(l){if(l===m)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===a)throw a="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);a="executing";var c=s(t,e,r);if("normal"===c.type){if(a=r.done?"completed":"suspendedYield",c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(a="completed",r.method="throw",r.arg=c.arg)}}}function j(t,e){var r=e.method,a=t.iterator[r];if(void 0===a)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),m;var n=s(a,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,m;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,m):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function F(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(F,this),this.reset(!0)}function L(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,n=function e(){for(;++a<t.length;)if(r.call(t,a))return e.value=t[a],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:P}}function P(){return{value:void 0,done:!0}}return p.prototype=f,a(g,"constructor",{value:f,configurable:!0}),a(f,"constructor",{value:p,configurable:!0}),p.displayName=c(f,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,c(t,l,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},_(x.prototype),c(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,a,n,o){void 0===o&&(o=Promise);var i=new x(u(e,r,a,n),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(g),c(g,l,"Generator"),c(g,o,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var a in e)r.push(a);return r.reverse(),function t(){for(;r.length;){var a=r.pop();if(a in e)return t.value=a,t.done=!1,t}return t.done=!0,t}},t.values=L,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function a(r,a){return i.type="throw",i.arg=t,e.next=r,a&&(e.method="next",e.arg=void 0),!!a}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var a=r.completion;if("throw"===a.type){var n=a.arg;S(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),m}},t}function O(t,e,r,a,n,o,i){try{var l=t[o](i),c=l.value}catch(u){return void r(u)}l.done?e(c):Promise.resolve(c).then(a,n)}function j(t){return function(){var e=this,r=arguments;return new Promise((function(a,n){var o=t.apply(e,r);function i(t){O(o,a,n,i,l,"next",t)}function l(t){O(o,a,n,i,l,"throw",t)}i(void 0)}))}}function F(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function S(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?F(Object(r),!0).forEach((function(e){k(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function k(t,e,r){return e=L(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function L(t){var e=P(t,"string");return"symbol"===h(e)?e:String(e)}function P(t,e){if("object"!==h(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var a=r.call(t,e||"default");if("object"!==h(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var E={default_metric:null,alg_type:"NAS",platform:null,platform_version:null,gpu:!1,one_shot:!1,description:null},N={multi_gpu:!1,dataset_id:null,dataset_name:null,dataset_path:null,dataset_version:null,python_version:null,execute_script:null,max_trial_num:null,max_exec_duration:null,max_exec_duration_unit:null,trial_concurrent_num:null},V={name:"CreatePageForm",components:{YamlEditor:m["a"],InfoSelect:s["a"]},props:{baseForm:{type:Object,default:function(){return{}}},steps:{type:Number,default:0},type:{type:String,default:"create"},zipPath:{type:String}},setup:function(t,e){var r=Object(l["n"])({active:"page",yamlValue:"",yamlParams:{},datasetIdList:[],datasetVersionList:[],valueForm:{}}),a=Object(l["n"])(S({},N)),n=Object(l["n"])(S({},E)),s=Object(l["n"])({yamlRef:null,formRef:null,datasetId:null,maxExecDuration:null}),m=Object(l["a"])((function(){return Object(f["humpShiftUnderline"])(Object(p["getPublicRules"])(a,"max_exec_duration_unit"))})),h=S({description:[{required:!0,message:"请输入算法描述",trigger:["blur","change"]}],datasetId:[{required:!0,trigger:"manual",validator:function(t,e,r){a.dataset_id||r(new Error("请选择数据集")),a.dataset_path||r(new Error("请选择数据集版本")),r()}}]},m.value),y=Object(l["a"])((function(){return 0===t.steps?n:a})),b=function(){var t=j(w().mark((function t(e){var n,o,l=arguments;return w().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=l.length>1&&void 0!==l[1]&&l[1],t.next=3,Object(c["l"])(e);case 3:r.datasetVersionList=t.sent,n&&a.dataset_path&&(o=r.datasetVersionList.find((function(t){return t.versionUrl===a.dataset_path})),o||(a.dataset_path=null,i["Message"].warning("原有数据集版本不存在，请重新选择")));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=j(w().mark((function t(){var e,n,o=arguments;return w().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=o.length>0&&void 0!==o[0]&&o[0],t.next=3,Object(c["p"])({size:1e3,annotateType:Object(p["getModelByCode"])(r.valueForm.model_type,"label")});case 3:if(r.datasetIdList=t.sent.result,e&&a.dataset_id){t.next=8;break}a.dataset_path=null,t.next=14;break;case 8:if(n=r.datasetIdList.find((function(t){return t.id===a.dataset_id})),n){t.next=13;break}return i["Message"].warning("原有数据集不存在，请重新选择"),a.dataset_id=a.dataset_path=a.dataset_version=null,t.abrupt("return");case 13:b(n.id,!0);case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),_=function(t){if(a.dataset_path=a.dataset_version=a.dataset_name=null,r.datasetVersionList=[],t){b(t);var e=r.datasetIdList.find((function(e){return e.id===t}));a.dataset_name=e.name}},x=function(){var t=r.datasetVersionList.find((function(t){return t.versionUrl===a.dataset_path}));a.dataset_version=t?t.versionName:null,s.datasetId.validate("manual")},O=function(){try{var t=a.dataset_name;if(r.yamlParams=o["default"].load(r.yamlValue),Object(d["Eb"])(y.value,r.yamlParams,(function(t){return!Object(f["isNull"])(t)})),a.dataset_name=t,"command"in r.yamlParams){var e=r.yamlParams.command.split(" "),n=v(e,2);a.python_version=n[0],a.execute_script=n[1]}if("max_exec_duration"in r.yamlParams){var i=Object(f["modifyTime"])(r.yamlParams.max_exec_duration),l=v(i,2);a.max_exec_duration=l[0],a.max_exec_duration_unit=l[1]}}catch(c){throw c}},F=function(t){r.yamlValue=t},k=function(){var a=j(w().mark((function a(){var n;return w().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(u["e"])({algorithm:t.steps?r.valueForm.name:t.baseForm.name||void 0,zipPath:t.zipPath||void 0,stageOrder:t.steps,versionName:t.steps?r.valueForm.version_name:t.baseForm.version_name||void 0});case 2:r.yamlValue=a.sent,O(),t.steps||e.emit("yaml-loaded",{modelType:(null===(n=r.yamlParams)||void 0===n?void 0:n.model_type)||"ImageClassify",name:r.yamlParams.alg_name});case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(r.valueForm=e,t.steps){g(!0);var a=e.stage.find((function(e){return e.stage_order===t.steps}));a?(Object(d["Eb"])(y.value,a,(function(t){return!Object(f["isNull"])(t)})),r.yamlValue=a.yaml,r.yamlParams=o["default"].load(r.yamlValue)):k()}else Object(d["Eb"])(y.value,e,(function(t){return!Object(f["isNull"])(t)})),r.yamlValue=e.yaml,r.yamlParams=o["default"].load(r.yamlValue)},P=function(){Object(l["g"])((function(){s.yamlRef.codeValid()?O():r.active="params"}))},V=function(){Object(d["Eb"])(r.yamlParams,y.value,(function(t){return!Object(f["isNull"])(t)})),t.steps&&(Object(f["isNull"])(a.python_version)||Object(f["isNull"])(a.execute_script)||(r.yamlParams.command="".concat(a.python_version," ").concat(a.execute_script)),Object(f["isNull"])(a.max_exec_duration)||Object(f["isNull"])(a.max_exec_duration_unit)||(r.yamlParams.max_exec_duration="".concat(a.max_exec_duration).concat(a.max_exec_duration_unit))),r.yamlValue=o["default"].dump(r.yamlParams),Object(l["g"])((function(){s.yamlRef.setValue()}))},T=function(){"page"===r.active?P():V(),Object(l["g"])((function(){e.emit("tabs-change",r.active)}))},A=function(){return[y.value,r.yamlValue]},I=function(t,e){r.yamlValue&&V(),s.formRef.validate((function(a){return a?"function"!==typeof t||t(y.value,r.yamlValue):"function"===typeof e&&e(y.value)}))},D=function(){s.formRef.clearValidate()},$=function(){Object.assign(n,E),Object.assign(a,N),r.active="page",r.yamlValue="",r.yamlParams={},Object(l["g"])((function(){D(),e.emit("tabs-change",r.active)}))};return S(S(S({},Object(l["q"])(r)),Object(l["q"])(s)),{},{createForm:n,pageForm:a,form:y,rules:h,handleClick:T,onDatasetChange:_,onDatasetVersionChange:x,getYaml:k,initForm:L,getFormValue:A,validateForm:I,resetForm:$,timeFmts:p["timeFmts"],clearValidate:D,onYamlChange:F})}},T=V,A=(r("daef"),r("2877")),I=Object(A["a"])(T,a,n,!1,null,"e258976e",null);e["default"]=I.exports}}]);