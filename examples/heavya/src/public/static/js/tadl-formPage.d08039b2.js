(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["tadl-formPage","tadl-formPage-components-tadlForm"],{5661:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-form",{ref:"formRef",attrs:{model:t.form,rules:t.rules,"label-width":"120px"}},[r("div",{staticClass:"area-title"},[t._v("基本信息")]),t._v(" "),r("el-form-item",{attrs:{label:"实验名称",prop:"name"}},[r("el-input",{attrs:{maxlength:"32","show-word-limit":"",placeholder:"请输入实验名称"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name","string"===typeof e?e.trim():e)},expression:"form.name"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"实验描述",prop:"description"}},[r("el-input",{attrs:{type:"textarea",rows:4,maxlength:"200","show-word-limit":"",placeholder:"请输入实验描述"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),t._v(" "),r("div",{staticClass:"area-title"},[t._v("搜索策略")]),t._v(" "),r("el-form-item",{ref:"algorithmVersionIdRef",attrs:{label:"选择搜索策略",prop:"algorithmVersionId"}},[r("el-select",{attrs:{placeholder:"spos",clearable:""},on:{change:t.onAlgorithmIdChange},model:{value:t.form.algorithmId,callback:function(e){t.$set(t.form,"algorithmId",e)},expression:"form.algorithmId"}},t._l(t.algorithmList,(function(t){return r("el-option",{key:t.id,attrs:{value:t.id,label:t.name}})})),1),t._v(" "),r("el-select",{attrs:{placeholder:"选择版本",clearable:""},on:{change:t.onAlgorithmVersionChange},model:{value:t.form.algorithmVersionId,callback:function(e){t.$set(t.form,"algorithmVersionId",e)},expression:"form.algorithmVersionId"}},t._l(t.algorithmVersionList,(function(t){return r("el-option",{key:t.id,attrs:{value:t.id,label:t.versionName||"最新"}})})),1),t._v(" "),r("BaseTooltip",{attrs:{content:"只支持预置搜索策略"}})],1),t._v(" "),r("el-tabs",{staticClass:"eltabs-inlineblock mb-20",on:{"tab-click":t.onTabsChange},model:{value:t.stageTab,callback:function(e){t.stageTab=e},expression:"stageTab"}},[r("el-tab-pane",{attrs:{label:"TRAIN",name:String(t.STAGE_SEQUENCE.TRAIN)}}),t._v(" "),r("el-tab-pane",{attrs:{label:"SELECT",name:String(t.STAGE_SEQUENCE.SELECT)}}),t._v(" "),r("el-tab-pane",{attrs:{label:"RETRAIN",name:String(t.STAGE_SEQUENCE.RETRAIN)}})],1),t._v(" "),r("transition-group",{ref:"tabPane",attrs:{name:t.transition,tag:"div"}},[r("TadlStageForm",{directives:[{name:"show",rawName:"v-show",value:t.stageTab===String(t.STAGE_SEQUENCE.TRAIN),expression:"stageTab === String(STAGE_SEQUENCE.TRAIN)"}],key:t.STAGE_SEQUENCE.TRAIN,ref:"trainStageForm",staticClass:"tab-form",attrs:{model:t.form.stage[0],"use-gpu":t.useGpu},on:{"resource-change":t.onResourceChange}}),t._v(" "),r("TadlStageForm",{directives:[{name:"show",rawName:"v-show",value:t.stageTab===String(t.STAGE_SEQUENCE.SELECT),expression:"stageTab === String(STAGE_SEQUENCE.SELECT)"}],key:t.STAGE_SEQUENCE.SELECT,ref:"selectStageForm",staticClass:"tab-form",attrs:{model:t.form.stage[1],"use-gpu":t.useGpu},on:{"resource-change":t.onResourceChange}}),t._v(" "),r("TadlStageForm",{directives:[{name:"show",rawName:"v-show",value:t.stageTab===String(t.STAGE_SEQUENCE.RETRAIN),expression:"stageTab === String(STAGE_SEQUENCE.RETRAIN)"}],key:t.STAGE_SEQUENCE.RETRAIN,ref:"retrainStageForm",staticClass:"tab-form",attrs:{model:t.form.stage[2],"use-gpu":t.useGpu},on:{"resource-change":t.onResourceChange}})],1)],1)},a=[],o=r("5c96"),i=r("ed09"),c=r("2ef0"),u=r("c6e5"),l=r("0429"),s=r("ed08"),f=r("a7b4"),d=r("8785"),m=r("7f9b");function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function g(t,e){var r="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=p(t))||e&&t&&"number"===typeof t.length){r&&(t=r);var n=0,a=function(){};return{s:a,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return i=t.done,t},e:function(t){c=!0,o=t},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw o}}}}function p(t,e){if(t){if("string"===typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(t,e):void 0}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function b(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */b=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(x){u=function(t,e,r){return t[e]=r}}function l(t,e,r,a){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),c=new L(a||[]);return n(i,"_invoke",{value:T(t,r,c)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(x){return{type:"throw",arg:x}}}t.wrap=l;var f={};function d(){}function m(){}function g(){}var p={};u(p,o,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(A([])));y&&y!==e&&r.call(y,o)&&(p=y);var E=g.prototype=d.prototype=Object.create(p);function S(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function a(n,o,i,c){var u=s(t[n],t,o);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==h(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){a("next",t,i,c)}),(function(t){a("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return a("throw",t,i,c)}))}c(u.arg)}var o;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){a(t,r,e,n)}))}return o=o?o.then(n,n):n()}})}function T(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return I()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=O(i,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function O(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=s(n,t.iterator,e.arg);if("throw"===a.type)return e.method="throw",e.arg=a.arg,e.delegate=null,f;var o=a.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function A(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:I}}function I(){return{value:void 0,done:!0}}return m.prototype=g,n(E,"constructor",{value:g,configurable:!0}),n(g,"constructor",{value:m,configurable:!0}),m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},S(w.prototype),u(w.prototype,i,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new w(l(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},S(E),u(E,c,"Generator"),u(E,o,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=A,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;_(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:A(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function y(t,e,r,n,a,o,i){try{var c=t[o](i),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,a)}function E(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function i(t){y(o,n,a,i,c,"next",t)}function c(t){y(o,n,a,i,c,"throw",t)}i(void 0)}))}}function S(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?S(Object(r),!0).forEach((function(e){T(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function T(t,e,r){return e=O(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function O(t){var e=j(t,"string");return"symbol"===h(e)?e:String(e)}function j(t,e){if("object"!==h(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var _={id:null,modelType:null,name:null,description:null,algorithmId:null,algorithmVersionId:null,stage:[]},L={name:"TadlForm",components:{BaseTooltip:l["a"],TadlStageForm:f["default"]},setup:function(){var t,e=Object(i["o"])(null),r=Object(i["o"])(null),n=Object(i["o"])(null),a=Object(i["o"])(null),l=Object(i["o"])(null),f=Object(i["n"])({stageTab:String(m["STAGE_SEQUENCE"].TRAIN),transition:"tabRight",algorithmList:[],algorithmVersionList:[],useGpu:!1}),h=Object(i["n"])(w({},_)),p=(t={},T(t,m["STAGE_SEQUENCE"].TRAIN,r),T(t,m["STAGE_SEQUENCE"].SELECT,n),T(t,m["STAGE_SEQUENCE"].RETRAIN,a),t),v={name:[{required:!0,message:"请输入实验名称",trigger:"blur"},{max:32,message:"长度在 32 个字符以内",trigger:"blur"},{validator:s["ac"],trigger:["blur","change"]}],algorithmVersionId:[{required:!0,trigger:"manual",validator:function(t,e,r){h.algorithmId||r(new Error("请选择搜索策略")),h.algorithmVersionId||r(new Error("请选择策略版本")),r()}}]},y=function(t,e){var r=f.algorithmList.find((function(e){return e.id===t}));if(!r)return f.algorithmVersionList=[],h.algorithmVersionId=null,void(h.modelType=null);if(f.algorithmVersionList=r.algorithmVersionVOList.filter((function(t){return t.versionName})),f.useGpu=r.gpu,h.modelType=r.modelType,e&&h.algorithmVersionId){var n=f.algorithmVersionList.find((function(t){return t.id===h.algorithmVersionId}));n||(h.algorithmVersionId=null,o["Message"].warning("原有策略版本不存在，请重新选择"))}else h.algorithmVersionId=null},S=function(){var t=E(b().mark((function t(){var e,r,n=arguments;return b().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]&&n[0],t.next=3,Object(u["d"])();case 3:if(f.algorithmList=t.sent,e&&h.algorithmId){t.next=8;break}h.algorithmId=h.algorithmVersionId=null,t.next=14;break;case 8:if(r=f.algorithmList.find((function(t){return t.id===h.algorithmId})),r){t.next=13;break}return o["Message"].warning("原有策略不存在，请重新选择"),h.algorithmId=h.algorithmVersionId=null,t.abrupt("return");case 13:y(r.id,!0);case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),O=function(){var t=E(b().mark((function t(e){var r,n;return b().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e){t.next=6;break}return t.next=3,Object(u["a"])({algorithmVersionId:e},h.algorithmId);case 3:r=t.sent,n=r.stage,n.forEach((function(t,e){Object.assign(h.stage[e],d["defaultStageForm"],t),Object(i["g"])((function(){p[t.stageOrder].value.initForm()}))}));case 6:l.value.validate("manual");case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=E(b().mark((function t(){var e,o,u,l,s=arguments;return b().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=s.length>0&&void 0!==s[0]?s[0]:{},Object.keys(h).forEach((function(t){Object(c["isNil"])(e[t])||(h[t]=e[t])})),h.stage=[],e.stage){o=g(e.stage);try{for(o.s();!(u=o.n()).done;)l=u.value,h.stage.push(w(w({},d["defaultStageForm"]),l))}catch(f){o.e(f)}finally{o.f()}}else h.stage=[w(w({},d["defaultStageForm"]),{},{stageOrder:m["STAGE_SEQUENCE"].TRAIN}),w(w({},d["defaultStageForm"]),{},{stageOrder:m["STAGE_SEQUENCE"].SELECT}),w(w({},d["defaultStageForm"]),{},{stageOrder:m["STAGE_SEQUENCE"].RETRAIN})];return t.next=6,S(!0);case 6:h.algorithmId&&h.algorithmVersionId&&(e.stage?Object(i["g"])((function(){r.value.initForm(),n.value.initForm(),a.value.initForm()})):O(h.algorithmVersionId));case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),L=function(t,r){var n=!0;return e.value.validate((function(t){n=n&&t})),Object.keys(p).forEach((function(t,e){n&&p[t].value.validate((function(t){h.stage[e]=w(w({},t),{},{algorithmStageId:t.algorithmStageId||t.id,stageName:t.stageName||t.name})}),(function(){n=!1,f.stageTab=String(t)}))})),n?"function"!==typeof t||t(h):"function"===typeof r&&r(h)},A=function(){var t;(t=e.value).clearValidate.apply(t,arguments),r.value.clearValidate(),n.value.clearValidate(),a.value.clearValidate()},I=function(t){Object.values(p).forEach((function(e){e.value.setDefaultResource(t)}))},x=function(){p[f.stageTab].value.setYamlValue()};return Object(i["r"])((function(){return f.stageTab}),(function(t,e){Object.assign(f,{transition:Number(t)>Number(e)?"tabRight":"tabLeft"})})),w(w({STAGE_SEQUENCE:m["STAGE_SEQUENCE"],formRef:e,trainStageForm:r,selectStageForm:n,retrainStageForm:a,algorithmVersionIdRef:l,form:h,rules:v},Object(i["q"])(f)),{},{initForm:j,validate:L,clearValidate:A,onTabsChange:x,onAlgorithmIdChange:y,onAlgorithmVersionChange:O,onResourceChange:I})}},A=L,I=(r("f36a"),r("2877")),x=Object(I["a"])(A,n,a,!1,null,"6f4000ac",null);e["default"]=x.exports},"722b":function(t,e,r){},"98be":function(t,e,r){"use strict";r("c16a")},c16a:function(t,e,r){},c3b2:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container",attrs:{id:"form-page-wrapper"}},[r("TadlForm",{ref:"formRef"}),t._v(" "),r("div",{attrs:{id:"btns-wrapper"}},[t.isCreate?[r("el-button",{attrs:{loading:t.loadingState.save},on:{click:t.doSave}},[t._v("保存设置")]),t._v(" "),r("el-button",{attrs:{loading:t.loadingState.create,type:"primary"},on:{click:t.doCreate}},[t._v("立即创建")])]:t._e(),t._v(" "),t.isSave?[r("el-button",{attrs:{loading:t.loadingState.save,type:"primary"},on:{click:t.doSave}},[t._v("保存设置，确认返回")])]:t._e(),t._v(" "),t.isEdit?[r("el-button",{on:{click:t.doCancel}},[t._v("取消")]),t._v(" "),r("el-button",{attrs:{loading:t.loadingState.edit,type:"primary"},on:{click:t.doEdit}},[t._v("确定修改")])]:t._e()],2)],1)},a=[],o=r("ed09"),i=r("5c96"),c=r("92b4"),u=r("ed08"),l=r("5661"),s={create:"创建实验",save:"保存实验",edit:"修改实验"},f={name:"TadlFormPage",components:{TadlForm:l["default"]},beforeRouteEnter:function(t,e,r){var n=s[t.params.formType||"create"];t.meta.title=n,Object(u["Tb"])(n),r()},setup:function(t,e){var r=e.root,n=Object(o["o"])(null),a=Object(o["o"])(r.$route.params.formType||"create"),u=Object(o["a"])((function(){return["create","strategy"].includes(a.value)})),l=Object(o["a"])((function(){return"save"===a.value})),s=Object(o["a"])((function(){return"edit"===a.value})),f=Object(o["n"])({create:!1,save:!1,edit:!1});switch(a.value){case"edit":case"save":case"strategy":Object(o["g"])((function(){n.value.initForm(r.$route.params.formParams)}));break;case"create":default:Object(o["g"])((function(){n.value.initForm()}));break}var d=function(){n.value.validate((function(t){t.start=!0,f.create=!0,Object(c["a"])(t).then((function(){i["Message"].success("实验创建成功"),r.$router.push({name:"TadlList"})})).finally((function(){f.create=!1}))}))},m=function(){n.value.validate((function(t){t.start=!1,f.save=!0,Object(c["a"])(t).then((function(){i["Message"].success("实验保存成功"),r.$router.push({name:"TadlList"})})).finally((function(){f.save=!1}))}))},h=function(){n.value.validate((function(t){f.edit=!0,Object(c["c"])(t).then((function(){i["Message"].success("实验编辑成功"),r.$router.push({name:"TadlList"})})).finally((function(){f.edit=!1}))}))},g=function(){i["MessageBox"].confirm("取消将丢失所有信息","确认").then((function(){r.$router.back()}))};return{formRef:n,isCreate:u,isSave:l,isEdit:s,loadingState:f,doCreate:d,doSave:m,doEdit:h,doCancel:g}}},d=f,m=(r("98be"),r("2877")),h=Object(m["a"])(d,n,a,!1,null,"6479a1e6",null);e["default"]=h.exports},c6e5:function(t,e,r){"use strict";r.d(e,"g",(function(){return o})),r.d(e,"e",(function(){return i})),r.d(e,"d",(function(){return c})),r.d(e,"i",(function(){return u})),r.d(e,"h",(function(){return l})),r.d(e,"c",(function(){return s})),r.d(e,"j",(function(){return f})),r.d(e,"f",(function(){return d})),r.d(e,"a",(function(){return m})),r.d(e,"b",(function(){return h}));var n=r("b775"),a=r("f121");function o(t){return Object(n["a"])({url:"/".concat(a["a"].TADL,"/algorithm/unzip"),method:"get",params:t})}function i(t){return Object(n["a"])({url:"/".concat(a["a"].TADL,"/algorithm/yaml"),method:"get",params:t})}function c(t){return Object(n["a"])({url:"/".concat(a["a"].TADL,"/algorithm/query"),method:"get",params:t})}function u(t){return Object(n["a"])({url:"/".concat(a["a"].TADL,"/algorithm/upload"),method:"post",data:t})}function l(t){return Object(n["a"])({url:"/".concat(a["a"].TADL,"/algorithm/update"),method:"post",data:t})}function s(t){return Object(n["a"])({url:"/".concat(a["a"].TADL,"/algorithm/").concat(t," /next/version"),method:"get",params:{algorithmId:t}})}function f(t){return Object(n["a"])({url:"/".concat(a["a"].TADL,"/algorithm/push/version"),method:"post",data:t})}function d(t){return Object(n["a"])({url:"/".concat(a["a"].TADL,"/algorithm/version/switch"),method:"put",data:t})}function m(t,e){return Object(n["a"])({url:"/".concat(a["a"].TADL,"/algorithm/").concat(e,"/query"),method:"get",params:t})}function h(t){return Object(n["a"])({url:"/".concat(a["a"].TADL,"/algorithm"),method:"delete",data:t})}},f36a:function(t,e,r){"use strict";r("722b")}}]);