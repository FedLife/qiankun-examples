(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["labelGroup-labelGroupForm","labelGroup-dynamicField"],{"156b":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("PrismEditor",e._g(e._b({ref:"editorRef",staticClass:"code-editor",attrs:{highlight:e.highlighter}},"PrismEditor",e.attrs,!1),e.listeners))},a=[],o=r("ed09"),i=r("e57a"),l=(r("cabf"),r("8c7a"));r("cb55"),r("416b"),r("84bf");function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t=d(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e){var t=p(e,"string");return"symbol"===c(t)?t:String(t)}function p(e,t){if("object"!==c(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var b={name:"Editor",components:{PrismEditor:i["a"]},inheritAttrs:!1,model:{prop:"value",event:"change"},setup:function(e,t){var r=Object(o["o"])(null),n=Object(o["a"])((function(){return t.attrs})),a=function(e){return Object(l["highlight"])(e,l["languages"].js)},i=function(){return r.value.codeData},c=function(e){t.emit("change",e)},u=Object(o["a"])((function(){return s(s({},t.listeners),{},{input:c})}));return{attrs:n,listeners:u,highlighter:a,editorRef:r,getValue:i}}},m=b,v=(r("d2c7"),r("2877")),y=Object(v["a"])(m,n,a,!1,null,"658c1b62",null);t["a"]=y.exports},"4f10":function(e,t,r){"use strict";r.d(t,"e",(function(){return f})),r.d(t,"a",(function(){return d})),r.d(t,"c",(function(){return p})),r.d(t,"d",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r("b775"),a=r("f121");function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t=u(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e){var t=s(e,"string");return"symbol"===o(t)?t:String(t)}function s(e,t){if("object"!==o(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}function f(e){return Object(n["a"])({url:"/".concat(a["a"].DATA,"/datasets/").concat(e,"/labels"),method:"get"})}function d(e,t){return Object(n["a"])({url:"/".concat(a["a"].DATA,"/datasets/").concat(e,"/labels"),method:"post",data:t})}function p(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return t.labelId=e,Object(n["a"])({url:"/".concat(a["a"].DATA,"/datasets/labels"),method:"put",data:l(l({},t),{},{datasetId:r})})}function b(e){return Object(n["a"])({url:"/".concat(a["a"].DATA,"/datasets/labels/auto/").concat(e),method:"get"})}function m(e,t){return Object(n["a"])({url:"/".concat(a["a"].DATA,"/datasets/labels"),method:"delete",data:{datasetId:e,labelId:t}})}},"747a":function(e,t,r){"use strict";r("91f5")},"91f5":function(e,t,r){},bac3:function(e,t,r){},bc46:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{ref:"formRef",attrs:{model:e.formData,"label-width":"100px"}},e._l(e.keys,(function(t,n){return r("el-form-item",{key:t,staticClass:"mb-10",attrs:{label:"自定义标签"+(t+1),prop:"labels."+n,rules:e.rules}},[e.addable?r("div",{staticClass:"flex"},[e.isVisual?r("div",[r("InfoSelect",{style:{width:"200px",marginRight:"10px"},attrs:{value:e.formData.labels[n].id||e.formData.labels[n].name,placeholder:"选择或新建标签",dataSource:e.labelOptions,valueKey:"id",labelKey:"name","default-first-option":"",filterable:"","allow-create":"",disabled:!e.editable(e.formData.labels[n])},on:{change:function(r){return e.handleChange(t,r)}}}),e._v(" "),r("el-input",{staticClass:"dn",attrs:{disabled:!e.editable(e.formData.labels[n])},model:{value:e.formData.labels[n].name,callback:function(t){e.$set(e.formData.labels[n],"name",t)},expression:"formData.labels[index].name"}})],1):r("el-input",{staticStyle:{width:"200px","margin-right":"10px"},attrs:{placeholder:"请输入标签名称",disabled:!e.editable(e.formData.labels[n])},model:{value:e.formData.labels[n].name,callback:function(t){e.$set(e.formData.labels[n],"name",t)},expression:"formData.labels[index].name"}}),e._v(" "),r("el-color-picker",{attrs:{disabled:!e.editable(e.formData.labels[n]),size:"small"},model:{value:e.formData.labels[n].color,callback:function(t){e.$set(e.formData.labels[n],"color",t)},expression:"formData.labels[index].color"}}),e._v(" "),r("span",{staticStyle:{width:"50px","margin-left":"10px","line-height":"32px"}},[e.keys.length>1&&e.addable?r("i",{staticClass:"el-icon-remove-outline vm cp",class:e.editable(e.formData.labels[n])?"":"disabled",staticStyle:{"font-size":"20px"},on:{click:function(r){return r.preventDefault(),e.removeLabel(t)}}}):e._e(),e._v(" "),n===e.keys.length-1&&e.addable?r("i",{staticClass:"el-icon-circle-plus-outline vm cp",class:e.addable?"":"disabled",staticStyle:{"font-size":"20px"},on:{click:e.addLabel}}):e._e()])],1):r("div",{staticClass:"flex"},[r("el-input",{staticStyle:{width:"200px","margin-right":"10px"},attrs:{disabled:!e.editable(e.formData.labels[n])},model:{value:e.formData.labels[n].name,callback:function(t){e.$set(e.formData.labels[n],"name",t)},expression:"formData.labels[index].name"}}),e._v(" "),r("el-color-picker",{attrs:{disabled:"",size:"small"},model:{value:e.formData.labels[n].color,callback:function(t){e.$set(e.formData.labels[n],"color",t)},expression:"formData.labels[index].color"}})],1)])})),1)},a=[],o=r("2b0e"),i=r("ed09"),l=r("2ef0"),c=r("ba8f"),u=r("3da5"),s=r("ed08"),f=r("61f7");function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t=v(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e){var t=y(e,"string");return"symbol"===d(t)?t:String(t)}function y(e,t){if("object"!==d(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var h="#FFFFFF",g={name:"DynamicField",components:{InfoSelect:c["a"]},props:{data:{type:Object,default:function(){return{}}},labelGroupType:{type:Number,default:void 0},originList:{type:Array,deafault:function(){return[]}},activeLabels:{type:Array,deafault:function(){return[]}},actionType:String},setup:function(e){var t=Object(i["o"])(null),r=Object(i["o"])({labels:[{name:"",color:h},{name:"",color:"#000000"}]}),n=Object(i["a"])((function(){return r.value.labels.map((function(e,t){return t}))})),a=Object(i["a"])((function(){return e.labelGroupType===u["labelGroupTypeMap"].VISUAL.value})),c=function(e,t,n){var a=Object(s["H"])(r.value.labels,(function(e){return!!t.id&&e.id===t.id}));a?n(new Error("标签不能重复")):n()},d=[{validator:f["n"],trigger:["change","blur"]},{validator:c,trigger:["change","blur"]}],p=Object(i["o"])([]),m=function(e){return n.value.findIndex((function(t){return t===e}))},v=["create","edit"].includes(e.actionType),y=function(t){return e.originList.findIndex((function(e){return e.id===t.id}))>-1},g=function(t){return!!v&&("create"===e.actionType||!y(t))},O=function(e,t){var n=m(e);o["default"].set(r.value.labels,n,b({},t))},j=function(e,t){var n=m(e);r.value.labels[n].name=t},w=function(r,n){var a=t.value.fields.filter((function(e){return"error"===e.validateState})).map((function(e){return e.prop}));t.value.validateField(a);var o=e.activeLabels.find((function(e){return e.id===n}));o?O(r,Object(l["pick"])(o,["name","id","color"])):j(r,n)},S=function(){r.value.labels.push({name:"",color:h})},x=function(e){if(1!==n.value.length){var t=m(e);r.value.labels=Object(s["Ib"])(r.value.labels,t)}};return Object(i["r"])((function(){return e.activeLabels}),(function(t){p.value=t.map((function(t){return b(b({},t),{},{disabled:e.originList.findIndex((function(e){return e.id===t.id}))>-1})}))})),Object(i["r"])((function(){return Object(l["cloneDeep"])(e.data)}),(function(e){r.value=e})),{formRef:t,formData:r,keys:n,isVisual:a,rules:d,editable:g,addable:v,labelOptions:p,handleChange:w,removeLabel:x,addLabel:S}}},O=g,j=r("2877"),w=Object(j["a"])(O,n,a,!1,null,null,null);t["default"]=w.exports},c1a8:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"app-container",staticStyle:{width:"600px","margin-top":"28px"}},[r("el-form",{ref:"formRef",attrs:{model:e.createForm,rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{attrs:{placeholder:"标签组名称不能超过50字",maxlength:"50","show-word-limit":"",disabled:e.isDetail},model:{value:e.createForm.name,callback:function(t){e.$set(e.createForm,"name",t)},expression:"createForm.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"类型",prop:"labelGroupType"}},[r("InfoSelect",{attrs:{placeholder:"类型",dataSource:e.labelGroupTypeList,disabled:e.isDetail||e.isEdit},on:{change:e.handleLabelGroupTypeChange},model:{value:e.createForm.labelGroupType,callback:function(t){e.$set(e.createForm,"labelGroupType",t)},expression:"createForm.labelGroupType"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"描述",prop:"remark"}},[r("el-input",{attrs:{type:"textarea",placeholder:"标签组描述长度不能超过100字",maxlength:"100",rows:"3","show-word-limit":"",disabled:e.isDetail},model:{value:e.createForm.remark,callback:function(t){e.$set(e.createForm,"remark",t)},expression:"createForm.remark"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"创建方式"}},[r("el-tabs",{staticClass:"labels-edit-wrapper",attrs:{value:e.state.addWay,type:"border-card","before-leave":e.beforeLeave},on:{"tab-click":e.handleClickTab}},[r("el-tab-pane",{staticClass:"dynamic-field",attrs:{label:"自定义标签组",name:"custom"}},[0===e.labelListForm.labels.length?r("Exception"):r("div",[e.isPresetLabelGroup(e.state.labelGroupCategory)?r("div",e._l(e.state.originList,(function(t){return r("el-tag",{key:t.id,staticClass:"mr-10"},[e._v("\n                "+e._s(t.name)+"\n              ")])})),1):r("DynamicField",{ref:"customFormRef",attrs:{data:e.labelListForm,labelGroupType:Number(e.createForm.labelGroupType),originList:e.state.originList,activeLabels:e.state.activeLabels,actionType:e.actionType}})],1)],1),e._v(" "),r("el-tab-pane",{staticClass:"code-editor",attrs:{label:"编辑标签组",name:"edit",disabled:e.isDetail}},[r("Editor",{ref:"editorRef",attrs:{readonly:e.isDetail},on:{change:e.setCode},model:{value:e.state.codeContent,callback:function(t){e.$set(e.state,"codeContent",t)},expression:"state.codeContent"}}),e._v(" "),r("span",{staticClass:"icon-wrapper",on:{click:e.beautify}},[r("IconFont",{staticClass:"format",attrs:{type:"beauty"}})],1)],1),e._v(" "),r("el-tab-pane",{attrs:{label:"导入标签组",name:"upload",disabled:!e.isCreate}},[r("div",{staticClass:"min-height-100 flex flex-center upload-tab"},[r("UploadInline",{ref:"uploadFormRef",attrs:{action:"fakeApi",accept:".json",listType:"text",limit:1,acceptSize:0,multiple:!1,showFileCount:!1},on:{uploadError:e.uploadError}})],1)])],1),e._v(" "),r("div",{staticClass:"field-extra mt-10"},["custom"===e.state.addWay?r("div",[r("div",[e._v("「自定义标签组」由用户自己创建，标签名长度不能超过 30")])]):"edit"===e.state.addWay?r("div",[r("div",[e._v("1.「编辑标签组」提供用户自由编写标签方式")]),e._v(" "),r("div",[e._v("2. 请不要随意删除已有标签")]),e._v(" "),r("div",[e._v("3. 请不要随意修改已有标签 id")]),e._v(" "),r("div",[e._v("4. 请按照标准格式提供颜色色值")])]):"upload"===e.state.addWay?r("div",[r("div",[e._v("1. 请按照格式要求提交 json 格式标签文件")]),e._v(" "),r("div",[e._v("\n            2. 格式参考\n            "),r("el-tooltip",{attrs:{effect:"dark",placement:"top"}},[r("div",{attrs:{slot:"content"},slot:"content"},[r("div",{staticClass:"label-tooltip"},[r("div",{staticClass:"tips-wrapper f12"},[r("div",[e._v("导入标签文件格式")]),e._v(" "),r("div",[e._v("格式：")]),e._v(" "),r("pre",[e._v("name: 名称\ncolor: 颜色(16进制编码)\n                    ")]),e._v(" "),r("div",[e._v("详细示例：")]),e._v(" "),r("pre",[e._v('[{\n    "name": "行人"，\n    "color": "#ffbb96"\n}， \n{\n    "name": "自行车"，\n    "color": "#fcffe6"\n}]\n                    ')])])])]),e._v(" "),r("i",{staticClass:"el-icon-warning-outline",staticStyle:{color:"#2e4fde"}})])],1)]):e._e()])],1)],1),e._v(" "),r("div",{staticStyle:{"margin-left":"100px"}},[r("el-button",{attrs:{type:"primary",loading:e.submitting},on:{click:e.handleSubmit}},[e._v("\n      "+e._s(e.submitTxt)+"\n    ")])],1)],1)},a=[],o=r("ed09"),i=r("5c96"),l=r("2ef0"),c=r("e552"),u=r.n(c),s=r("156b"),f=r("46b1"),d=r("7f969"),p=r("3da5"),b=r("61f7"),m=r("4f10"),v=r("fcbd"),y=r("ba8f"),h=r("bc46");function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function O(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */O=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(E){c=function(e,t,r){return e[t]=r}}function u(e,t,r,a){var o=t&&t.prototype instanceof d?t:d,i=Object.create(o.prototype),l=new D(a||[]);return n(i,"_invoke",{value:S(e,r,l)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(E){return{type:"throw",arg:E}}}e.wrap=u;var f={};function d(){}function p(){}function b(){}var m={};c(m,o,(function(){return this}));var v=Object.getPrototypeOf,y=v&&v(v(P([])));y&&y!==t&&r.call(y,o)&&(m=y);var h=b.prototype=d.prototype=Object.create(m);function j(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function a(n,o,i,l){var c=s(e[n],e,o);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==g(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){a("next",e,i,l)}),(function(e){a("throw",e,i,l)})):t.resolve(f).then((function(e){u.value=e,i(u)}),(function(e){return a("throw",e,i,l)}))}l(c.arg)}var o;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){a(e,r,t,n)}))}return o=o?o.then(n,n):n()}})}function S(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return T()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var l=x(i,r);if(l){if(l===f)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function x(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var a=s(n,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function D(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function P(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:T}}function T(){return{value:void 0,done:!0}}return p.prototype=b,n(h,"constructor",{value:b,configurable:!0}),n(b,"constructor",{value:p,configurable:!0}),p.displayName=c(b,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,c(e,l,"GeneratorFunction")),e.prototype=Object.create(h),e},e.awrap=function(e){return{__await:e}},j(w.prototype),c(w.prototype,i,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new w(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},j(h),c(h,l,"Generator"),c(h,o,(function(){return this})),c(h,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=P,D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;_(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:P(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function j(e){return x(e)||S(e)||P(e)||w()}function w(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function S(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function x(e){if(Array.isArray(e))return T(e)}function L(e,t,r,n,a,o,i){try{var l=e[o](i),c=l.value}catch(u){return void r(u)}l.done?t(c):Promise.resolve(c).then(n,a)}function _(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function i(e){L(o,n,a,i,l,"next",e)}function l(e){L(o,n,a,i,l,"throw",e)}i(void 0)}))}}function D(e,t){var r="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=P(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,l=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){l=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(l)throw o}}}}function P(e,t){if(e){if("string"===typeof e)return T(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?T(e,t):void 0}}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){G(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function G(e,t,r){return t=C(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function C(e){var t=F(e,"string");return"symbol"===g(t)?t:String(t)}function F(e,t){if("object"!==g(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var A="#FFFFFF",I={name:"",labelGroupType:void 0,remark:"",type:p["labelGroupCategoryMap"].REGULAR},R=[{name:"",color:A},{name:"",color:"#000000"}],N={LabelGroupCreate:"create",LabelGroupDetail:"detail",LabelGroupEdit:"edit"},$={create:"确认创建",edit:"确认编辑",detail:"返回"},M={custom:1,edit:2,upload:3},W={name:"LabelGroupForm",components:{Editor:s["a"],DynamicField:h["default"],UploadInline:d["a"],Exception:f["a"],InfoSelect:y["a"]},setup:function(e,t){var r=Object(o["o"])(null),n=Object(o["o"])(null),a=Object(o["o"])(null),c=Object(o["o"])(null),s=t.root,f=s.$route,d=s.$router,y=N[f.name]||"create",h="create"!==y?f.query.id:null,g=$[y],w="create"===y,S="edit"===y,x="detail"===y,L=Object.values(p["labelGroupTypeMap"]),P={name:[{required:!0,message:"请输入标签组名称",trigger:["change","blur"]},{validator:b["p"],trigger:["change","blur"]}],labelGroupType:[{required:!0,message:"请选择标签组类型",trigger:["change","blur"]}]},T=Object(o["o"])(!1),E=Object(o["o"])(!1),G=Object(o["o"])(k({},I)),C=Object(o["o"])({labels:Object(l["cloneDeep"])(R)}),F=Object(o["n"])({labelGroupCategory:null,autoLabels:[],originList:[],activeLabels:[],addWay:"custom",codeContent:JSON.stringify(R),customForm:{labels:[{name:"",color:A}]}}),W=function(e){Object.assign(F,{codeContent:e})},J=function(){var e=r.value.getValue(),t=u()(e);W(t)},U=function(e){i["Message"].error("上传失败",e.message||e)},V=function(){d.push({path:"/data/labelgroup"})},q=function(e){Object(m["d"])(e).then((function(e){Object.assign(F,{autoLabels:e,activeLabels:Object(l["uniqBy"])(e.concat(F.activeLabels),"id")})}))},z=function(e){C.value.labels=Object(l["cloneDeep"])(R),Object.assign(F,{autoLabels:[],activeLabels:[],addWay:"custom",codeContent:JSON.stringify(R),customForm:{labels:[{name:"",color:A}]}}),e===p["labelGroupTypeMap"].VISUAL.value&&q(e)},B=function(e){var t=k(k({},e),{},{labels:JSON.stringify(e.labels)}),r=e.id?v["e"]:v["a"],n=e.id?"标签组编辑成功":"标签组创建成功";r(t).then((function(){i["Message"].success({message:n,duration:1500,onClose:V})}))},K=function(){return E.value=!0,x?(V(),void(E.value=!1)):S&&Object(p["isPresetLabelGroup"])(F.labelGroupCategory)?(i["Message"].info("预置标签组不可编辑"),void(E.value=!1)):void n.value.validate((function(e){if(e)switch(F.addWay){case"custom":c.value.$refs.formRef.validate((function(e){if(e){var t=k(k({},G.value),{},{labels:c.value.$refs.formRef.model.labels,operateType:M.custom});B(t)}else E.value=!1}));break;case"edit":try{var t="",n=JSON.parse(r.value.getValue());if(Array.isArray(n)&&n.length){var o,l=D(n);try{for(l.s();!(o=l.n()).done;){var u=o.value;if(""!==Object(b["o"])(u)){t=Object(b["o"])(u);break}}}catch(w){l.e(w)}finally{l.f()}}if(t)return void i["Message"].error(t);var s=k(k({},G.value),{},{labels:n,operateType:M.edit});B(s)}catch(w){throw w}break;case"upload":var f,d,p=(null===(f=a.value.formRef)||void 0===f?void 0:f.$refs.uploader)||{},m=p.uploadFiles,y=G.value,h=y.name,g=y.remark,O=y.labelGroupType,j=new FormData;j.append("name",h),j.append("remark",g),j.append("file",null===(d=m[0])||void 0===d?void 0:d.raw),j.append("operateType",M.upload),j.append("labelGroupType",O),Object(v["h"])(j).then((function(){i["Message"].success({message:"标签组导入成功",duration:1500,onClose:V})}));break;default:break}else E.value=!1}))},Y=function(e,t){if(e===t)return!1;if("upload"===t){var r,n=(null===(r=a.value.formRef)||void 0===r?void 0:r.$refs.uploader)||{},o=n.uploadFiles;return!o.length||i["MessageBox"].confirm("标注文件已提交，确认切换？").catch((function(){return F.addWay="upload",Promise.reject()}))}return!0},H=function(e){if(F.addWay!==e.name){if("edit"===e.name)"custom"===F.addWay&&(F.codeContent=JSON.stringify(c.value.$refs.formRef.model.labels));else if("custom"===e.name&&"edit"===F.addWay)try{var t=JSON.parse(r.value.getValue());C.value.labels=t}catch(n){return void i["Message"].error("编辑格式不合法")}F.addWay=e.name}};return Object(o["k"])((function(){if(!w){if(!h)throw d.push({path:"/data/labelgroup"}),new Error("当前标签组 id 不存在");T.value=!0,Object(v["f"])(h).then(function(){var e=_(O().mark((function e(t){var r;return O().wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=0===t.labels.length&&S?R:t.labels,G.value=k({},t),C.value.labels=j(r),Object.assign(F,{addWay:"custom",activeLabels:Object(l["uniqBy"])(F.activeLabels.concat(t.labels),"id"),originList:t.labels.slice(),codeContent:JSON.stringify(t.labels),labelGroupCategory:t.type||p["labelGroupCategoryMap"].REGULAR}),q(t.labelGroupType);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).finally((function(){T.value=!1}))}})),{VUE_APP_DOCS_URL:"http://docs.tianshu.org.cn/docs/",rules:P,actionType:y,isCreate:w,isDetail:x,isEdit:S,submitTxt:g,labelGroupTypeList:L,editorRef:r,formRef:n,customFormRef:c,uploadFormRef:a,state:F,loading:T,submitting:E,createForm:G,labelListForm:C,beautify:J,goBack:V,handleClickTab:H,handleSubmit:K,handleLabelGroupTypeChange:z,uploadError:U,beforeLeave:Y,setCode:W,isPresetLabelGroup:p["isPresetLabelGroup"]}}},J=W,U=(r("747a"),r("2877")),V=Object(U["a"])(J,n,a,!1,null,"a20e4d52",null);t["default"]=V.exports},d2c7:function(e,t,r){"use strict";r("bac3")},fcbd:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"e",(function(){return i})),r.d(t,"c",(function(){return c})),r.d(t,"b",(function(){return u})),r.d(t,"g",(function(){return f})),r.d(t,"f",(function(){return d})),r.d(t,"h",(function(){return p}));var n=r("b775"),a=r("f121");function o(e){return Object(n["a"])({url:"/".concat(a["a"].DATA,"/labelGroup"),method:"post",data:e})}function i(e){return Object(n["a"])({url:"/".concat(a["a"].DATA,"/labelGroup/").concat(e.id),method:"put",data:e})}function l(e){return Object(n["a"])({url:"/".concat(a["a"].DATA,"/labelGroup"),method:"delete",data:{ids:e}})}function c(e){return Object(n["a"])({url:"/".concat(a["a"].DATA,"/labelGroup/copy"),method:"post",data:e})}function u(e){return Object(n["a"])({url:"/".concat(a["a"].DATA,"/labelGroup/convertPreset"),method:"post",data:e})}function s(e){return Object(n["a"])({url:"/".concat(a["a"].DATA,"/labelGroup/query"),method:"get",params:e})}function f(e){return new Promise((function(e,t){setTimeout((function(){e([])}),200)}))}function d(e){return Object(n["a"])({url:"/".concat(a["a"].DATA,"/labelGroup/").concat(e),method:"get"})}function p(e){return n["a"].post("/".concat(a["a"].DATA,"/labelGroup/import"),e,{headers:{"Content-Type":"multipart/form-data"}})}t["d"]={list:s,add:o,del:l,edit:i}}}]);