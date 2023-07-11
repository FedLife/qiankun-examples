(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["development-components-CreateDialog"],{"0c61":function(t,e,r){"use strict";r.d(e,"d",(function(){return a})),r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return c})),r.d(e,"c",(function(){return s}));var n=r("b775"),o=r("f121");function a(t){return Object(n["a"])({url:"/".concat(o["a"].ADMIN,"/resourceSpecs"),method:"get",params:t})}function i(t){return Object(n["a"])({url:"/".concat(o["a"].ADMIN,"/resourceSpecs"),method:"post",data:t})}function c(t){return Object(n["a"])({url:"/".concat(o["a"].ADMIN,"/resourceSpecs"),method:"delete",data:{ids:t}})}function s(t){return Object(n["a"])({url:"/".concat(o["a"].ADMIN,"/resourceSpecs"),method:"put",data:t})}},a40c:function(t,e,r){"use strict";r.d(e,"b",(function(){return s})),r.d(e,"d",(function(){return u})),r.d(e,"e",(function(){return l})),r.d(e,"c",(function(){return f})),r.d(e,"g",(function(){return m})),r.d(e,"f",(function(){return h}));var n=r("b775"),o=r("f121");function a(t){return Object(n["a"])({url:"/".concat(o["a"].IMAGE,"/ptImage/list"),method:"get",params:t})}function i(t){return Object(n["a"])({url:"/".concat(o["a"].IMAGE,"/ptImage"),method:"post",data:t})}function c(t){return Object(n["a"])({url:"/".concat(o["a"].IMAGE,"/ptImage"),method:"put",data:t})}function s(t){return Object(n["a"])({url:"/".concat(o["a"].IMAGE,"/ptImage"),method:"delete",data:t})}function u(t){return Object(n["a"])({url:"/".concat(o["a"].IMAGE,"/ptImage/imageNameList"),method:"get",params:t})}function l(t){return Object(n["a"])({url:"/".concat(o["a"].IMAGE,"/ptImage"),method:"get",params:t})}function f(t){return Object(n["a"])({url:"/".concat(o["a"].IMAGE,"/ptImage/imageDefault"),method:"get",params:t})}function m(t){return Object(n["a"])({url:"/".concat(o["a"].IMAGE,"/ptImage/imageDefault"),method:"put",params:t})}function h(){return Object(n["a"])({url:"/".concat(o["a"].IMAGE,"/ptImage/terminalImageList"),method:"get"})}e["a"]={list:a,add:i,edit:c}},db30:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("BaseModal",{attrs:{visible:t.showDialog,loading:t.submitting,title:"创建Notebook",width:"800px"},on:{"update:visible":function(e){t.showDialog=e},open:t.onDialogOpen,close:t.onDialogClose,cancel:function(e){t.showDialog=!1},ok:t.onSubmit}},[r("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"名称",prop:"noteBookName"}},[r("el-input",{staticClass:"input",staticStyle:{width:"600px"},attrs:{id:"noteBookName",maxlength:"30","show-word-limit":"",placeholder:"请输入 Notebook 名称"},model:{value:t.form.noteBookName,callback:function(e){t.$set(t.form,"noteBookName",e)},expression:"form.noteBookName"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"开发环境",prop:"k8sImageName"}},[r("el-select",{staticStyle:{width:"200px"},attrs:{id:"imageName",placeholder:"请选择镜像",clearable:"",filterable:""},on:{change:t.getHarborImages},model:{value:t.form.imageName,callback:function(e){t.$set(t.form,"imageName",e)},expression:"form.imageName"}},t._l(t.harborProjectList,(function(t){return r("el-option",{key:t,attrs:{label:t,value:t}})})),1),t._v(" "),r("el-select",{staticStyle:{width:"200px"},attrs:{id:"k8sImageName",placeholder:"请选择镜像版本",clearable:"",filterable:""},on:{change:function(e){return t.validateField("k8sImageName")}},model:{value:t.form.k8sImageName,callback:function(e){t.$set(t.form,"k8sImageName",e)},expression:"form.k8sImageName"}},t._l(t.harborImageList,(function(t,e){return r("el-option",{key:e,attrs:{label:t.imageTag,value:t.imageUrl}})})),1)],1),t._v(" "),r("el-form-item",{ref:"dataSourceId",attrs:{label:"数据集",prop:"dataSourceId"}},[r("InfoSelect",{staticStyle:{display:"inline-block"},attrs:{width:"200px",placeholder:"请选择数据集",dataSource:t.datasetIdList,"value-key":"id","label-key":"name"},on:{change:t.onDatasetChange},model:{value:t.form.dataSourceId,callback:function(e){t.$set(t.form,"dataSourceId",e)},expression:"form.dataSourceId"}}),t._v(" "),r("InfoSelect",{staticStyle:{display:"inline-block"},attrs:{width:"200px",placeholder:"请选择数据集版本",dataSource:t.datasetVersionList,"value-key":"versionUrl","label-key":"versionName"},model:{value:t.form.dataSourcePath,callback:function(e){t.$set(t.form,"dataSourcePath",e)},expression:"form.dataSourcePath"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"类型",prop:"resourcesPoolType"}},[r("el-radio-group",{attrs:{id:"resourcesPoolType"},on:{change:t.onDeviceChange},model:{value:t.form.resourcesPoolType,callback:function(e){t.$set(t.form,"resourcesPoolType",e)},expression:"form.resourcesPoolType"}},[r("el-radio",{staticClass:"mr-0 w-150",attrs:{border:"",label:0}},[t._v("CPU")]),t._v(" "),r("el-radio",{staticClass:"w-150",attrs:{border:"",label:1}},[t._v("GPU")])],1)],1),t._v(" "),r("el-form-item",{attrs:{label:"节点规格",prop:"resourcesPoolSpecs"}},[r("el-select",{attrs:{placeholder:"请选择节点规格",filterable:""},model:{value:t.form.resourcesPoolSpecs,callback:function(e){t.$set(t.form,"resourcesPoolSpecs",e)},expression:"form.resourcesPoolSpecs"}},t._l(t.specsList,(function(t){return r("el-option",{key:t.id,attrs:{label:t.specsName,value:t.specsName}})})),1)],1),t._v(" "),r("el-form-item",{attrs:{label:"描述",prop:"description"}},[r("el-input",{staticStyle:{width:"600px"},attrs:{id:"description",type:"textarea",maxlength:"255","show-word-limit":""},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)],1)],1)},o=[],a=r("ed08"),i=r("f109"),c=r("ba8f"),s=r("141b"),u=r("e659"),l=r("0c61"),f=r("a40c");function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function h(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */h=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(E){s=function(t,e,r){return t[e]=r}}function u(t,e,r,o){var a=e&&e.prototype instanceof d?e:d,i=Object.create(a.prototype),c=new S(o||[]);return n(i,"_invoke",{value:k(t,r,c)}),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(E){return{type:"throw",arg:E}}}t.wrap=u;var f={};function d(){}function p(){}function g(){}var b={};s(b,a,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(P([])));y&&y!==e&&r.call(y,a)&&(b=y);var O=g.prototype=d.prototype=Object.create(b);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function N(t,e){function o(n,a,i,c){var s=l(t[n],t,a);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==m(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,i,c)}),(function(t){o("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return o("throw",t,i,c)}))}c(s.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function k(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return L()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=j(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function P(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=g,n(O,"constructor",{value:g,configurable:!0}),n(g,"constructor",{value:p,configurable:!0}),p.displayName=s(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},w(N.prototype),s(N.prototype,i,(function(){return this})),t.AsyncIterator=N,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new N(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(O),s(O,c,"Generator"),s(O,a,(function(){return this})),s(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=P,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(I),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),s=r.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function d(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function p(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){d(a,n,o,i,c,"next",t)}function c(t){d(a,n,o,i,c,"throw",t)}i(void 0)}))}}function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){v(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function v(t,e,r){return e=y(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function y(t){var e=O(t,"string");return"symbol"===m(e)?e:String(e)}function O(t,e){if("object"!==m(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var w={noteBookName:null,description:null,k8sImageName:null,imageName:null,resourcesPoolType:0,diskMemNum:null,dataSourceId:null,dataSourcePath:null,resourcesPoolSpecs:null},N={name:"CreateDialog",components:{BaseModal:i["a"],InfoSelect:c["a"]},filters:{formatModel:function(t){if(!t)return"没有节点配置信息";var e=t.gpuNum&&t.spec?" GPU: ".concat(t.gpuNum,"*").concat(t.spec):"";return"".concat(t.cpuNum,"Cores ").concat(t.memNum,"GB").concat(e)}},data:function(){return{showDialog:!1,form:b({},w),rules:{noteBookName:[{required:!0,message:"请输入名称",trigger:"blur"},{pattern:/^[^-](.*[^-])?$/,message:"首尾不能是连字符",trigger:"blur"},{validator:a["ac"],trigger:["blur","change"]},{max:30,message:"长度不超过30个字符",trigger:["blur","change"]}],k8sImageName:[{required:!0,message:"请选择镜像",trigger:"blur"}],resourcesPoolType:[{required:!0,message:"请选择类型",trigger:"blur"}],resourcesPoolSpecs:[{required:!0,message:"请选择节点规格",trigger:"change"}]},harborProjectList:[],harborImageList:[],datasetIdList:[],datasetVersionList:[],specsList:[],submitting:!1}},methods:{showThis:function(){this.showDialog=!0},onDialogOpen:function(){var t=this;this.getHarborProjects().then((function(){t.resetProject()})),this.getDataset(),this.onDeviceChange()},onDialogClose:function(){this.form=b({},w),this.$refs.form.resetFields()},onDeviceChange:function(){var t=p(h().mark((function t(){return h().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["d"])({module:a["p"].NOTEBOOK,resourcesPoolType:this.form.resourcesPoolType,current:1,size:500});case 2:this.specsList=t.sent.result,this.specsList.length&&(this.form.resourcesPoolSpecs=this.specsList[0].specsName);case 4:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getHarborProjects:function(){var t=p(h().mark((function t(){var e=this;return h().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["d"])({imageTypes:[a["g"].NOTEBOOK]});case 2:if(this.harborProjectList=t.sent,!this.form.imageName||this.harborProjectList.some((function(t){return t===e.form.imageName}))){t.next=8;break}return this.$message.warning("原有的镜像名称不存在，请重新选择"),this.form.imageName=null,this.form.k8sImageName=null,t.abrupt("return");case 8:if(t.t0=this.form.imageName,!t.t0){t.next=12;break}return t.next=12,this.getHarborImages(!0);case 12:this.form.imageTag&&!this.harborImageList.some((function(t){return t.imageTag===e.form.imageTag}))&&(this.$message.warning("原有的镜像版本不存在，请重新选择"),this.form.k8sImageName=null);case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),getHarborImages:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return!0!==e&&(this.form.k8sImageName=null),this.form.imageName?Object(f["e"])({imageName:this.form.imageName,imageTypes:[a["g"].NOTEBOOK]}).then((function(e){t.harborImageList=e})):(this.harborImageList=[],Promise.reject())},resetProject:function(){if(!this.form.imageName){if(!this.harborProjectList.length)return void this.$message.warning("镜像项目列表为空");Object.assign(this.form,{imageName:this.harborProjectList[0]}),this.getHarborImages()}},getDatasetVersion:function(){var t=p(h().mark((function t(e){var r,n,o=this,a=arguments;return h().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=a.length>1&&void 0!==a[1]&&a[1],t.next=3,Object(s["l"])(e);case 3:this.datasetVersionList=t.sent,r&&this.form.dataSourcePath&&(n=this.datasetVersionList.find((function(t){return t.versionUrl===o.form.dataSourcePath})),n||(this.form.dataSourcePath=null,this.$message.warning("原有数据集版本不存在，请重新选择")));case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getDataset:function(){var t=p(h().mark((function t(){var e,r,n=this,o=arguments;return h().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=o.length>0&&void 0!==o[0]&&o[0],t.next=3,Object(s["p"])({size:1e3});case 3:if(this.datasetIdList=t.sent.result,e&&!this.form.dataSourceId){t.next=8;break}this.form.dataSourcePath=null,t.next=14;break;case 8:if(r=this.datasetIdList.find((function(t){return t.id===n.form.dataSourceId})),r){t.next=13;break}return this.$message.warning("原有数据集不存在，请重新选择"),this.form.dataSourceId=this.form.dataSourcePath=null,t.abrupt("return");case 13:this.getDatasetVersion(r.id,!0);case 14:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onDatasetChange:function(t){this.form.dataSourcePath=null,this.datasetVersionList=[],t&&this.getDatasetVersion(t)},validateField:function(t){this.$refs.form.validateField(t)},onSubmit:function(){var t=this;this.$refs.form.validate((function(e){if(e){t.submitting=!0;var r=t.specsList.find((function(e){return e.specsName===t.form.resourcesPoolSpecs}));if(r){var n=r.cpuNum,o=r.gpuNum,a=r.memNum,i=r.workspaceRequest;Object.assign(t.form,{cpuNum:n,gpuNum:o,memNum:a,diskMemNum:i})}return Object(u["a"])(t.form).then((function(){t.$emit("on-add"),t.$message({message:"创建成功",type:"success"}),t.showDialog=!1})).catch((function(e){t.$message({message:e.message,type:"error"})})).finally((function(){t.submitting=!1})),!0}return!1}))}}},k=N,j=r("2877"),x=Object(j["a"])(k,n,o,!1,null,null,null);e["default"]=x.exports},e659:function(t,e,r){"use strict";r.d(e,"g",(function(){return a})),r.d(e,"a",(function(){return i})),r.d(e,"j",(function(){return s})),r.d(e,"k",(function(){return u})),r.d(e,"i",(function(){return l})),r.d(e,"h",(function(){return f})),r.d(e,"c",(function(){return m})),r.d(e,"f",(function(){return h})),r.d(e,"e",(function(){return d})),r.d(e,"b",(function(){return p}));var n=r("b775"),o=r("f121");function a(t){return Object(n["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks"),method:"get",params:t})}function i(t){return Object(n["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks"),method:"post",data:t})}function c(t){return Object(n["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks"),method:"delete",data:t})}function s(t){return Object(n["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks/start"),method:"put",params:t})}function u(t){return Object(n["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks/stop"),method:"put",params:t})}function l(t){return Object(n["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks/").concat(t),method:"get"})}function f(){return Object(n["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks/run-number"),method:"get"})}function m(t,e){return Object(n["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks/create/").concat(t),method:"post",data:e})}function h(t){return Object(n["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks/").concat(t,"/get-address"),method:"get"})}function d(t){return Object(n["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks/detail"),method:"post",data:t})}function p(){return Object(n["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks/batchStop"),method:"put"})}e["d"]={list:a,add:i,del:c,start:s,stop:u,open:l,detail:d}}}]);