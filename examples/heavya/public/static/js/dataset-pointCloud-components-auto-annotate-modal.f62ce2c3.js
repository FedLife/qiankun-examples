(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["dataset-pointCloud-components-auto-annotate-modal"],{"0be6":function(e,t,r){"use strict";r.d(t,"f",(function(){return o})),r.d(t,"a",(function(){return i})),r.d(t,"d",(function(){return u})),r.d(t,"b",(function(){return l})),r.d(t,"e",(function(){return s}));var n=r("b775"),a=r("f121");function o(e){return Object(n["a"])({url:"/".concat(a["a"].MODEL,"/ptModelBranch"),method:"get",params:e})}function i(e){return Object(n["a"])({url:"/".concat(a["a"].MODEL,"/ptModelBranch"),method:"post",data:e})}function c(e){return Object(n["a"])({url:"/".concat(a["a"].MODEL,"/ptModelBranch"),method:"put",data:e})}function u(e){return Object(n["a"])({url:"/".concat(a["a"].MODEL,"/ptModelBranch"),method:"delete",data:e})}function l(e){return Object(n["a"])({url:"".concat(a["a"].MODEL,"/ptModelBranch/convertPreset"),method:"post",data:e})}function s(e){return Object(n["a"])({url:"".concat(a["a"].MODEL,"/ptModelBranch/convertOnnx"),method:"post",data:{id:e}})}t["c"]={list:o,add:i,edit:c,del:u}},"0c61":function(e,t,r){"use strict";r.d(t,"d",(function(){return o})),r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return c})),r.d(t,"c",(function(){return u}));var n=r("b775"),a=r("f121");function o(e){return Object(n["a"])({url:"/".concat(a["a"].ADMIN,"/resourceSpecs"),method:"get",params:e})}function i(e){return Object(n["a"])({url:"/".concat(a["a"].ADMIN,"/resourceSpecs"),method:"post",data:e})}function c(e){return Object(n["a"])({url:"/".concat(a["a"].ADMIN,"/resourceSpecs"),method:"delete",data:{ids:e}})}function u(e){return Object(n["a"])({url:"/".concat(a["a"].ADMIN,"/resourceSpecs"),method:"put",data:e})}},1065:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("BaseModal",{attrs:{visible:e.state.modalVisible,title:"自动标注",loading:e.state.confirmLoading,width:"900px",top:"50px",okText:"开始标注"},on:{"update:visible":function(t){return e.$set(e.state,"modalVisible",t)},cancel:function(t){e.state.modalVisible=!1},ok:e.onSubmit,close:e.onClose}},[r("el-form",{ref:"formRef",attrs:{model:e.modelState,rules:e.rules,"label-width":"100px"}},[r("h3",[e._v("选择算法")]),e._v(" "),r("el-form-item",{attrs:{label:"算法类型",prop:"algorithmSource"}},[r("el-radio-group",{on:{change:e.onAlgorithmSourceChange},model:{value:e.modelState.algorithmSource,callback:function(t){e.$set(e.modelState,"algorithmSource",t)},expression:"modelState.algorithmSource"}},[r("el-radio",{attrs:{label:e.ALGORITHM_RESOURCE_ENUM.CUSTOM,border:""}},[e._v("我的算法")]),e._v(" "),r("el-radio",{attrs:{label:e.ALGORITHM_RESOURCE_ENUM.PRESET,border:""}},[e._v("预置算法")])],1)],1),e._v(" "),r("el-form-item",{ref:"algorithmId",attrs:{label:"算法名称",prop:"algorithmId"}},[r("InfoSelect",{staticStyle:{display:"inline-block"},attrs:{width:"270px",placeholder:"请选择算法",dataSource:e.state.algorithmList,"value-key":"id","label-key":"algorithmName",filterable:""},on:{change:e.onAlgorithmChange},model:{value:e.modelState.algorithmId,callback:function(t){e.$set(e.modelState,"algorithmId",t)},expression:"modelState.algorithmId"}})],1),e._v(" "),r("el-divider"),e._v(" "),r("h3",[e._v("加载模型")]),e._v(" "),r("el-form-item",{attrs:{label:"模型类型",prop:"modelResource"}},[r("el-radio-group",{on:{change:e.onModelResourceChange},model:{value:e.modelState.modelResource,callback:function(t){e.$set(e.modelState,"modelResource",t)},expression:"modelState.modelResource"}},[r("el-radio",{staticClass:"mr-0 w-150",attrs:{border:"",label:e.MODEL_RESOURCE_ENUM.CUSTOM}},[e._v("\n          我的模型\n        ")]),e._v(" "),r("el-radio",{staticClass:"w-150",attrs:{border:"",label:e.MODEL_RESOURCE_ENUM.PRESET}},[e._v("预训练模型")])],1)],1),e._v(" "),r("el-form-item",{ref:"modelBranchId",attrs:{label:"选用模型",prop:"modelBranchId"}},[r("InfoSelect",{staticStyle:{display:"inline-block"},attrs:{width:e.modelState.modelResource?"270px":"200px",placeholder:"请选择模型",dataSource:e.state.modelList,"value-key":"id","label-key":"name",filterable:"",clearable:!1},on:{change:e.onModelChange},model:{value:e.modelState.modelId,callback:function(t){e.$set(e.modelState,"modelId",t)},expression:"modelState.modelId"}}),e._v(" "),e.isPresetModel?e._e():r("InfoSelect",{staticStyle:{display:"inline-block"},attrs:{width:"200px",placeholder:"请选择模型版本",dataSource:e.state.modelVersionList,"value-key":"id","label-key":"version",filterable:"",clearable:!1},on:{change:e.onModelBranchChange},model:{value:e.modelState.modelBranchId,callback:function(t){e.$set(e.modelState,"modelBranchId",t)},expression:"modelState.modelBranchId"}})],1),e._v(" "),r("el-divider"),e._v(" "),r("h3",[e._v("选择镜像")]),e._v(" "),r("el-form-item",{ref:"imageTag",attrs:{label:"选用镜像",prop:"imageTag"}},[r("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择镜像",clearable:"",filterable:""},on:{change:e.getImageTags},model:{value:e.modelState.imageName,callback:function(t){e.$set(e.modelState,"imageName",t)},expression:"modelState.imageName"}},e._l(e.state.imageNameList,(function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})})),1),e._v(" "),r("el-select",{staticStyle:{width:"200px"},attrs:{placeholder:"请选择镜像版本",clearable:"",filterable:""},on:{change:e.onImageTagChange},model:{value:e.modelState.imageTag,callback:function(t){e.$set(e.modelState,"imageTag",t)},expression:"modelState.imageTag"}},e._l(e.state.imageTagList,(function(e,t){return r("el-option",{key:t,attrs:{label:e.imageTag,value:e.imageTag}})})),1)],1),e._v(" "),r("el-divider"),e._v(" "),r("h3",[e._v("资源规格")]),e._v(" "),r("el-form-item",{attrs:{label:"节点类型",prop:"resourcesPoolType"}},[r("el-radio-group",{on:{change:e.onNodeTypeChange},model:{value:e.modelState.resourcesPoolType,callback:function(t){e.$set(e.modelState,"resourcesPoolType",t)},expression:"modelState.resourcesPoolType"}},[r("el-radio",{attrs:{label:e.RESOURCES_POOL_TYPE_ENUM.CPU,border:""}},[e._v("CPU")]),e._v(" "),r("el-radio",{attrs:{label:e.RESOURCES_POOL_TYPE_ENUM.GPU,border:""}},[e._v("GPU")])],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"节点规格",prop:"resourcesPoolSpecs"}},[r("InfoSelect",{attrs:{dataSource:e.state.specsList,filterable:"","value-key":"specsName","label-key":"specsName",width:"270px"},model:{value:e.modelState.resourcesPoolSpecs,callback:function(t){e.$set(e.modelState,"resourcesPoolSpecs",t)},expression:"modelState.resourcesPoolSpecs"}})],1),e._v(" "),r("el-divider"),e._v(" "),r("h3",[e._v("标注命令 & 参数映射")]),e._v(" "),r("el-form-item",{attrs:{label:"标注命令",prop:"command"}},[r("el-input",{staticStyle:{"max-width":"405px"},model:{value:e.modelState.command,callback:function(t){e.$set(e.modelState,"command",t)},expression:"modelState.command"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"数据集路径"}},[r("el-input",{staticStyle:{"max-width":"405px"},model:{value:e.modelState.datasetDirMapping,callback:function(t){e.$set(e.modelState,"datasetDirMapping",t)},expression:"modelState.datasetDirMapping"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"标注结果路径"}},[r("el-input",{staticStyle:{"max-width":"405px"},model:{value:e.modelState.resultDirMapping,callback:function(t){e.$set(e.modelState,"resultDirMapping",t)},expression:"modelState.resultDirMapping"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"模型路径"}},[r("el-input",{staticStyle:{"max-width":"405px"},model:{value:e.modelState.modelDirMapping,callback:function(t){e.$set(e.modelState,"modelDirMapping",t)},expression:"modelState.modelDirMapping"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"命令预览"}},[r("div",{staticClass:"command-preview"},[e._v("\n        "+e._s(e.preview)+"\n      ")])])],1)],1)},a=[],o=r("ed09"),i=r("5c96"),c=r("2ef0"),u=r("54d4"),l=r("9eb2"),s=r("a40c"),d=r("0c61"),m=r("8bbd"),f=r("0be6"),p=r("ba8f"),g=r("f109"),h=r("ed08");function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function v(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */v=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(x){u=function(e,t,r){return e[t]=r}}function l(e,t,r,a){var o=t&&t.prototype instanceof m?t:m,i=Object.create(o.prototype),c=new _(a||[]);return n(i,"_invoke",{value:L(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(x){return{type:"throw",arg:x}}}e.wrap=l;var d={};function m(){}function f(){}function p(){}var g={};u(g,o,(function(){return this}));var h=Object.getPrototypeOf,O=h&&h(h(T([])));O&&O!==t&&r.call(O,o)&&(g=O);var y=p.prototype=m.prototype=Object.create(g);function I(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function a(n,o,i,c){var u=s(e[n],e,o);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==b(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){a("next",e,i,c)}),(function(e){a("throw",e,i,c)})):t.resolve(d).then((function(e){l.value=e,i(l)}),(function(e){return a("throw",e,i,c)}))}c(u.arg)}var o;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){a(e,r,t,n)}))}return o=o?o.then(n,n):n()}})}function L(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return E()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=M(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function M(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,M(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,d;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function T(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:E}}function E(){return{value:void 0,done:!0}}return f.prototype=p,n(y,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:f,configurable:!0}),f.displayName=u(p,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,u(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},I(S.prototype),u(S.prototype,i,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new S(l(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},I(y),u(y,c,"Generator"),u(y,o,(function(){return this})),u(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=T,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;j(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:T(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}function O(e,t,r,n,a,o,i){try{var c=e[o](i),u=c.value}catch(l){return void r(l)}c.done?t(u):Promise.resolve(u).then(n,a)}function y(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){O(o,n,a,i,c,"next",e)}function c(e){O(o,n,a,i,c,"throw",e)}i(void 0)}))}}function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){L(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function L(e,t,r){return t=M(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function M(e){var t=w(e,"string");return"symbol"===b(t)?t:String(t)}function w(e,t){if("object"!==b(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var j={modelId:null,modelBranchId:null,modelResource:0,algorithmId:null,algorithmSource:1,imageName:null,imageTag:null,command:"python inference.py",resourcesPoolType:0,resourcesPoolSpecs:null,datasetId:null,datasetDirMapping:null,resultDirMapping:null,modelDirMapping:null},_={name:"AutoAnnotateModal",components:{InfoSelect:p["a"],BaseModal:g["a"]},setup:function(e,t){var r=t.emit,n=Object(o["o"])(null),a=Object(o["n"])({modalVisible:!1,confirmLoading:!1,imageTagList:[],imageNameList:[],specsList:[],modelList:[],modelVersionList:[],algorithmList:[]}),p=Object(o["n"])({algorithmId:null,modelBranchId:null,imageTag:null}),g=Object(o["n"])(S({},j)),b=Object(o["a"])((function(){return 1===g.modelResource})),O=Object(o["a"])((function(){var e=g.command;return e+=e?" ".concat(g.datasetDirMapping?g.datasetDirMapping:"--dataset_dir","=/dataset_dir/ ").concat(g.resultDirMapping?g.resultDirMapping:"--results_dir","=/results_dir/"):"",e+=g.modelId?" ".concat(g.modelDirMapping?g.modelDirMapping:"--model_dir","=/model_dir/"):"",e})),I={algorithmSource:[{required:!0,message:"请选择算法",trigger:"change"}],algorithmId:[{required:!0,message:"请选择算法",trigger:"manual"}],modelBranchId:[{required:!0,trigger:"manual",validator:function(e,t,r){b.value&&!g.modelId&&r(new Error("请选择模型")),b.value||g.modelBranchId||r(new Error("请选择模型及版本")),r()}}],modelResource:[{required:!0,message:"请选择模型类型",trigger:"change"}],imageTag:[{required:!0,message:"请选择镜像",trigger:"manual"}],resourcesPoolType:[{required:!0,message:"请选择节点类型",trigger:"change"}],resourcesPoolSpecs:[{required:!0,message:"请选择节点规格",trigger:"change"}],command:[{required:!0,message:"请输入标注命令",trigger:["change","blur"]}]},L=function(e){p[e].validate("manual")},M=function(e){p[e].clearValidate()},w=function(){var e=y(v().mark((function e(){var t,r,n;return v().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(l["f"])({current:1,size:1e3,algorithmSource:g.algorithmSource});case 2:t=e.sent,r=t.result,a.algorithmList=r,g.algorithmId&&(n=a.algorithmList.find((function(e){return e.id===g.algorithmId})),n||(i["Message"].warning("原有算法不存在，请重新选择"),g.algorithmId=null));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=y(v().mark((function e(){var t,r=arguments;return v().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=r.length>0&&void 0!==r[0]&&r[0],!0!==t&&(g.imageTag=null),g.imageName){e.next=5;break}return a.imageTagList=[],e.abrupt("return",Promise.reject());case 5:return e.abrupt("return",Object(s["e"])({imageTypes:h["g"].POINTCLOUD,imageName:g.imageName}).then((function(e){a.imageTagList=e})));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=y(v().mark((function e(){return v().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["d"])({imageTypes:[h["g"].POINTCLOUD]});case 2:if(a.imageNameList=e.sent,!g.imageName||a.imageNameList.some((function(e){return e===g.imageName}))){e.next=7;break}return i["Message"].warning("原有镜像不存在，请重新选择"),g.imageName=g.imageTag=null,e.abrupt("return");case 7:if(e.t0=g.imageName,!e.t0){e.next=11;break}return e.next=11,_(!0);case 11:g.imageTag&&!a.imageTagList.some((function(e){return e.imageTag===g.imageTag}))&&(i["Message"].warning("原有镜像版本不存在，请重新选择"),g.imageTag=null);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=y(v().mark((function e(){var t,r=arguments;return v().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]&&r[0],e.next=3,Object(d["d"])({module:h["p"].POINT_CLOUD,resourcesPoolType:g.resourcesPoolType,current:1,size:500});case 3:a.specsList=e.sent.result,t&&g.resourcesPoolSpecs||!a.specsList.length?a.specsList.find((function(e){return e.specsName===g.resourcesPoolSpecs}))||(i["Message"].warning("原有资源规格不存在，请重新选择"),a.specsList.length&&(g.resourcesPoolSpecs=a.specsList[0].specsName)):g.resourcesPoolSpecs=a.specsList[0].specsName;case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){var e=y(v().mark((function e(t){var r,n,o,c=arguments;return v().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=c.length>1&&void 0!==c[1]&&c[1],e.next=3,Object(f["f"])({parentId:t,current:1,size:500});case 3:n=e.sent,a.modelVersionList=n.result,r&&g.modelBranchId&&(o=a.modelVersionList.find((function(e){return e.id===g.modelBranchId})),o||(g.modelBranchId=null,i["Message"].warning("原有模型版本不存在，请重新选择")));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=y(v().mark((function e(t){var r,n,o=arguments;return v().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]&&o[1],e.next=3,Object(m["k"])(t);case 3:if(a.modelList=e.sent,r&&g.modelId){e.next=8;break}g.modelBranchId=null,e.next=14;break;case 8:if(n=a.modelList.find((function(e){return e.id===g.modelId})),n){e.next=13;break}return i["Message"].warning("原有模型不存在，请重新选择"),g.modelId=g.modelBranchId=null,e.abrupt("return");case 13:0===t&&x(n.id,!0);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){L("imageTag")},D=function(){E()},k=function(e){g.modelId=g.modelBranchId=null,N(e),M("modelBranchId")},C=function(e){g.modelId=e,b.value?L("modelBranchId"):(x(e),g.modelBranchId=null)},R=function(){L("modelBranchId")},U=function(){var e=y(v().mark((function e(t){var r;return v().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(L("algorithmId"),r=a.algorithmList.find((function(e){return e.id===t})),g.algorithmSource!==h["b"].PRESET){e.next=20;break}if(g.command=(null===r||void 0===r?void 0:r.runCommand)||"python inference.py",g.imageName=null===r||void 0===r?void 0:r.imageName,!g.imageName||a.imageNameList.some((function(e){return e===g.imageName}))){e.next=10;break}return i["Message"].warning("算法选择的镜像项目不存在，请重新选择"),g.imageName=null,g.imageTag=null,e.abrupt("return");case 10:if(e.t0=g.imageName,!e.t0){e.next=14;break}return e.next=14,_(!0);case 14:if(g.imageTag=null===r||void 0===r?void 0:r.imageTag,!g.imageTag||a.imageTagList.some((function(e){return e.imageTag===g.imageTag}))){e.next=19;break}return i["Message"].warning("算法选择的运行镜像不存在，请重新选择"),g.imageTag=null,e.abrupt("return");case 19:g.imageTag&&L("imageTag");case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=["algorithmId","imageName","imageTag","command","modelId","modelBranchId"];Object.assign(g,Object(c["pick"])(j,e)),w()},B=function(){n.value.validate((function(e){if(e&&g.datasetId){a.confirmLoading=!0;var t=a.specsList.find((function(e){return e.specsName===g.resourcesPoolSpecs}));if(t){var n=t.cpuNum,o=t.gpuNum,c=t.memNum,l=t.workspaceRequest,s={cpuNum:1e3*n,gpuNum:o,memNum:c,workspaceRequest:"".concat(l,"M")};g.poolSpecsInfo=JSON.stringify(s)}Object(u["b"])(S(S({},g),{},{resourcesPoolNode:1})).then((function(){a.modalVisible=!1,i["Message"].success("自动标注已开启"),r("success")})).finally((function(){a.confirmLoading=!1}))}}))},G=function(){var e=y(v().mark((function e(t){var r;return v().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(u["f"])(t);case 3:r=e.sent,Object.keys(g).forEach((function(e){Object(c["isNil"])(r[e])||(g[e]=r[e])})),g.datasetId=t,w(),T(),E(!0),N(g.modelResource,!0),e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),i["Message"].error("自动标注参数获取失败");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),$=function(e){a.modalVisible=!0,G(e)},q=function(){n.value.resetFields(),Reflect.deleteProperty(g,"poolSpecsInfo"),Object.assign(g,j)};return S(S({formRef:n,state:a},Object(o["q"])(p)),{},{modelState:g,isPresetModel:b,rules:I,ALGORITHM_RESOURCE_ENUM:h["b"],MODEL_RESOURCE_ENUM:h["k"],RESOURCES_POOL_TYPE_ENUM:h["q"],preview:O,onAlgorithmChange:U,showAutoModal:$,getImageTags:_,onImageTagChange:P,onNodeTypeChange:D,onModelResourceChange:k,onModelChange:C,onModelBranchChange:R,onAlgorithmSourceChange:A,onSubmit:B,onClose:q})}},T=_,E=(r("f3f4"),r("2877")),x=Object(E["a"])(T,n,a,!1,null,"34781881",null);t["default"]=x.exports},"54d4":function(e,t,r){"use strict";r.d(t,"m",(function(){return o})),r.d(t,"d",(function(){return i})),r.d(t,"j",(function(){return c})),r.d(t,"h",(function(){return u})),r.d(t,"e",(function(){return l})),r.d(t,"q",(function(){return s})),r.d(t,"p",(function(){return d})),r.d(t,"b",(function(){return m})),r.d(t,"c",(function(){return f})),r.d(t,"o",(function(){return p})),r.d(t,"n",(function(){return g})),r.d(t,"f",(function(){return h})),r.d(t,"k",(function(){return b})),r.d(t,"a",(function(){return v})),r.d(t,"r",(function(){return O})),r.d(t,"g",(function(){return y})),r.d(t,"i",(function(){return I})),r.d(t,"l",(function(){return S}));var n=r("b775"),a=r("f121");function o(e){return Object(n["a"])({url:"/".concat(a["a"].POINT_CLOUD,"/datasets/pointCloud"),method:"get",params:e})}function i(e){return Object(n["a"])({url:"/".concat(a["a"].POINT_CLOUD,"/datasets/pointCloud"),method:"post",data:e})}function c(e){return Object(n["a"])({url:"/".concat(a["a"].POINT_CLOUD,"/datasets/pointCloud"),method:"put",data:e})}function u(e){return Object(n["a"])({url:"/".concat(a["a"].POINT_CLOUD,"/files/difficult/publish"),method:"post",data:e})}function l(e){return Object(n["a"])({url:"/".concat(a["a"].POINT_CLOUD,"/datasets/pointCloud"),method:"delete",data:{ids:e}})}function s(e){return Object(n["a"])({url:"/".concat(a["a"].POINT_CLOUD,"/datasets/pointCloud/queryByIds"),method:"get",params:e})}function d(e){return Object(n["a"])({url:"/".concat(a["a"].POINT_CLOUD,"/datasets/pointCloud/publish"),method:"post",data:e})}function m(e){return Object(n["a"])({url:"/".concat(a["a"].POINT_CLOUD,"/datasets/pointCloud/auto"),method:"post",data:e})}function f(e){return Object(n["a"])({url:"/".concat(a["a"].POINT_CLOUD,"/datasets/pointCloud/stop"),method:"post",data:e})}function p(e){return Object(n["a"])({url:"/".concat(a["a"].POINT_CLOUD,"/datasets/pointCloud/logs"),method:"get",params:e})}function g(e){return Object(n["a"])({url:"/".concat(a["a"].POINT_CLOUD,"/datasets/pointCloud/pod/").concat(e),method:"get"})}function h(e){return Object(n["a"])({url:"/".concat(a["a"].POINT_CLOUD,"/datasets/pointCloud/details/").concat(e),method:"get"})}function b(e){return Object(n["a"])({url:"/".concat(a["a"].POINT_CLOUD,"/files"),method:"get",params:e})}function v(e){return Object(n["a"])({url:"/".concat(a["a"].POINT_CLOUD,"/files/info"),method:"get",params:e})}function O(e){return Object(n["a"])({url:"/".concat(a["a"].POINT_CLOUD,"/files/save"),method:"post",data:e})}function y(e){return Object(n["a"])({url:"/".concat(a["a"].POINT_CLOUD,"/files/difficult"),method:"post",data:e})}function I(e){return Object(n["a"])({url:"/".concat(a["a"].POINT_CLOUD,"/files/done"),method:"post",data:e})}function S(e){return Object(n["a"])({url:"/".concat(a["a"].POINT_CLOUD,"/datasets/pointCloud/list"),method:"get",params:e})}},7778:function(e,t,r){},"8bbd":function(e,t,r){"use strict";r.d(t,"l",(function(){return o})),r.d(t,"a",(function(){return i})),r.d(t,"d",(function(){return u})),r.d(t,"f",(function(){return l})),r.d(t,"m",(function(){return s})),r.d(t,"k",(function(){return d})),r.d(t,"b",(function(){return m})),r.d(t,"j",(function(){return f})),r.d(t,"i",(function(){return p})),r.d(t,"e",(function(){return g})),r.d(t,"h",(function(){return h})),r.d(t,"g",(function(){return b}));var n=r("b775"),a=r("f121");function o(e){return Object(n["a"])({url:"/".concat(a["a"].MODEL,"/ptModelInfo"),method:"get",params:e})}function i(e){return Object(n["a"])({url:"/".concat(a["a"].MODEL,"/ptModelInfo"),method:"post",data:e})}function c(e){return Object(n["a"])({url:"/".concat(a["a"].MODEL,"/ptModelInfo"),method:"put",data:e})}function u(e){return Object(n["a"])({url:"/".concat(a["a"].MODEL,"/ptModelInfo"),method:"delete",data:e})}function l(e,t){return Object(n["a"])({url:"/".concat(a["a"].MODEL,"/ptModelInfo/byResource"),method:"get",params:{modelResource:e,packaged:t}})}function s(e){return Object(n["a"])({url:"/".concat(a["a"].MODEL,"/ptModelInfo/package"),method:"post",data:e})}function d(e){return Object(n["a"])({url:"/".concat(a["a"].MODEL,"/ptModelInfo/servingModel"),method:"get",params:{modelResource:e}})}function m(e){return Object(n["a"])({url:"/".concat(a["a"].MODEL,"/ptModelInfo/uploadModel"),method:"post",data:e})}function f(){return Object(n["a"])({url:"/".concat(a["a"].MODEL,"/ptModelType"),method:"get"})}function p(e){return Object(n["a"])({url:"/".concat(a["a"].MODEL,"/ptModelSuffix"),method:"get",params:e})}function g(e){return Object(n["a"])({url:"/".concat(a["a"].MODEL,"/ptModelInfo/byModelId"),method:"get",params:{id:e}})}function h(e){return Object(n["a"])({url:"/".concat(a["a"].MODEL,"/ptModelStruct"),method:"get",params:e})}function b(e){return Object(n["a"])({url:"/".concat(a["a"].MODEL,"/ptModelInfo/atlasModel"),method:"get",params:e})}t["c"]={list:o,add:i,edit:c,del:u}},"9eb2":function(e,t,r){"use strict";r.d(t,"f",(function(){return o})),r.d(t,"g",(function(){return i})),r.d(t,"a",(function(){return c})),r.d(t,"c",(function(){return u})),r.d(t,"b",(function(){return l})),r.d(t,"h",(function(){return s})),r.d(t,"e",(function(){return d})),r.d(t,"d",(function(){return m}));var n=r("b775"),a=r("f121");function o(e){return Object(n["a"])({url:"/".concat(a["a"].ALGORITHM,"/algorithms"),method:"get",params:e})}function i(e){return Object(n["a"])({url:"/".concat(a["a"].ALGORITHM,"/algorithms/getAll"),method:"get",params:e})}function c(e){return Object(n["a"])({url:"/".concat(a["a"].ALGORITHM,"/algorithms"),method:"post",data:e})}function u(e){return Object(n["a"])({url:"/".concat(a["a"].ALGORITHM,"/algorithms"),method:"put",data:e})}function l(e){return Object(n["a"])({url:"/".concat(a["a"].ALGORITHM,"/algorithms"),method:"delete",data:e})}function s(){return Object(n["a"])({url:"/".concat(a["a"].ALGORITHM,"/algorithms/myAlgorithmCount"),method:"get"})}function d(){return Object(n["a"])({url:"/".concat(a["a"].ALGORITHM,"/algorithms/getInferenceAlgorithm"),method:"get"})}function m(e){return Object(n["a"])({url:"/".concat(a["a"].ALGORITHM,"/algorithms/findAlgorithmByName"),method:"get",params:e})}},a40c:function(e,t,r){"use strict";r.d(t,"b",(function(){return u})),r.d(t,"d",(function(){return l})),r.d(t,"e",(function(){return s})),r.d(t,"c",(function(){return d})),r.d(t,"g",(function(){return m})),r.d(t,"f",(function(){return f}));var n=r("b775"),a=r("f121");function o(e){return Object(n["a"])({url:"/".concat(a["a"].IMAGE,"/ptImage/list"),method:"get",params:e})}function i(e){return Object(n["a"])({url:"/".concat(a["a"].IMAGE,"/ptImage"),method:"post",data:e})}function c(e){return Object(n["a"])({url:"/".concat(a["a"].IMAGE,"/ptImage"),method:"put",data:e})}function u(e){return Object(n["a"])({url:"/".concat(a["a"].IMAGE,"/ptImage"),method:"delete",data:e})}function l(e){return Object(n["a"])({url:"/".concat(a["a"].IMAGE,"/ptImage/imageNameList"),method:"get",params:e})}function s(e){return Object(n["a"])({url:"/".concat(a["a"].IMAGE,"/ptImage"),method:"get",params:e})}function d(e){return Object(n["a"])({url:"/".concat(a["a"].IMAGE,"/ptImage/imageDefault"),method:"get",params:e})}function m(e){return Object(n["a"])({url:"/".concat(a["a"].IMAGE,"/ptImage/imageDefault"),method:"put",params:e})}function f(){return Object(n["a"])({url:"/".concat(a["a"].IMAGE,"/ptImage/terminalImageList"),method:"get"})}t["a"]={list:o,add:i,edit:c}},f3f4:function(e,t,r){"use strict";r("7778")}}]);