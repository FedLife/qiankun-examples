(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["system-authCode-components-permissionForm","system-authCode-utils"],{"89b2":function(t,e,r){"use strict";r.r(e),r.d(e,"getAuthCodeColumns",(function(){return o})),r.d(e,"getQueryFormItems",(function(){return i})),r.d(e,"getPermissionFormItems",(function(){return a})),r.d(e,"permissionRules",(function(){return u}));var n=r("ed08");function o(t){var e=t.doEdit,r=t.doDelete;return[{label:"ID",prop:"id",width:80,sortable:"custom"},{label:"名称",prop:"authCode"},{label:"描述",prop:"description",minWidth:"200px"},{label:"修改时间",prop:"updateTime",type:"time",minWidth:"160px",sortable:"custom"},{label:"操作",type:"operation",width:"370px",operations:[{label:"编辑",func:e,hide:!Object(n["eb"])("system:authCode:edit")},{label:"删除",func:r,hide:!Object(n["eb"])("system:authCode:delete")}]}]}function i(t){var e,r=t.activeTab,n=t.query,o=t.resetQuery;switch(r){case"permission":e="请输入权限名称或权限码";break;case"authCode":default:e="请输入权限组名称或 ID"}return[{prop:"keyword",placeholder:e,class:"w-300",change:n},{type:"button",btnText:"重置",func:o},{type:"button",btnText:"搜索",btnType:"primary",func:n}]}function a(t){var e=t.addPermission,r=t.removePermission,n=t.index,o=t.length,i=t.formType,a="edit"===i;return[{prop:"name",label:"权限名称",placeholder:"请输入权限名称",class:"w-200"},{prop:"permission",label:"权限标识",placeholder:"请输入权限标识",class:"w-300"},{type:"button",btnType:"primary",circle:!0,hidden:n!==o-1||a,func:function(){return e(n)},icon:"el-icon-plus",size:"mini"},{type:"button",btnType:"danger",circle:!0,hidden:1===o||a,func:function(){return r(n)},icon:"el-icon-minus",size:"mini"}]}var u={name:[{required:!0,message:"请输入权限名称",trigger:"blur"},{validator:n["ac"],trigger:["blur","change"]}],permission:[{validator:Object(n["Y"])(/^[\w:]+$/,"仅支持字母、数字、下划线和英文冒号"),trigger:["blur","change"]}]}},c1b4:function(t,e,r){"use strict";r.d(e,"e",(function(){return i})),r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return u})),r.d(e,"c",(function(){return c})),r.d(e,"d",(function(){return s}));var n=r("b775"),o=r("f121");function i(t){return Object(n["a"])({url:"/".concat(o["a"].ADMIN,"/permission"),method:"get",params:t})}function a(t){return Object(n["a"])({url:"/".concat(o["a"].ADMIN,"/permission"),method:"post",data:t})}function u(t){return Object(n["a"])({url:"/".concat(o["a"].ADMIN,"/permission"),method:"delete",data:{ids:t}})}function c(t){return Object(n["a"])({url:"/".concat(o["a"].ADMIN,"/permission"),method:"put",data:t})}function s(){return Object(n["a"])({url:"/".concat(o["a"].ADMIN,"/permission/tree"),method:"get"})}},c83a:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-form",{ref:"formRef",attrs:{model:t.form,rules:t.rules,"label-width":"100px"}},[t._l(t.form.permissions,(function(e,n){return r("BaseForm",{key:e._id,ref:"permissionFormRefs",refInFor:!0,attrs:{inline:"","label-width":"100px","form-items":t.permissionFormItems(n),model:e,rules:t.permissionRules}})})),t._v(" "),r("el-divider",{staticClass:"mt-0"}),t._v(" "),r("el-form-item",{ref:"pidRef",attrs:{prop:"pid",label:"上级权限"}},[r("TreeSelect",{attrs:{"default-expand-level":1,clearable:!1,searchable:!1,options:t.permissions,placeholder:"选择上级权限"},on:{select:function(e){return t.validatePid()}},model:{value:t.form.pid,callback:function(e){t.$set(t.form,"pid",e)},expression:"form.pid"}})],1)],2)},o=[],i=r("ed09"),a=r("7026"),u=r.n(a),c=(r("542c"),r("2ef0")),s=r("c1b4"),l=r("f482"),f=r("89b2");function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function h(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){m(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function m(t,e,r){return e=v(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function v(t){var e=y(t,"string");return"symbol"===p(e)?e:String(e)}function y(t,e){if("object"!==p(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function b(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */b=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof d?e:d,a=Object.create(i.prototype),u=new _(o||[]);return n(a,"_invoke",{value:x(t,r,u)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=s;var f={};function d(){}function h(){}function m(){}var v={};c(v,i,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(S([])));g&&g!==e&&r.call(g,i)&&(v=g);var w=m.prototype=d.prototype=Object.create(v);function O(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function o(n,i,a,u){var c=l(t[n],t,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==p(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,u)}),(function(t){o("throw",t,a,u)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,u)}))}u(c.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function x(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return F()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=P(a,r);if(u){if(u===f)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function P(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,P(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:F}}function F(){return{value:void 0,done:!0}}return h.prototype=m,n(w,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:h,configurable:!0}),h.displayName=c(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},O(j.prototype),c(j.prototype,a,(function(){return this})),t.AsyncIterator=j,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new j(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(w),c(w,u,"Generator"),c(w,i,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=S,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function g(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,o)}function w(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){g(i,n,o,a,u,"next",t)}function u(t){g(i,n,o,a,u,"throw",t)}a(void 0)}))}}var O={name:"PermissionForm",components:{TreeSelect:u.a,BaseForm:l["a"]},props:{type:{type:String,default:"add"}},setup:function(t){var e=Object(i["n"])({permissions:[]}),r=function(){var t=w(b().mark((function t(){var r;return b().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["d"])();case 2:r=t.sent,e.permissions=[{id:0,label:"根权限",children:r}];case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),n=Object(i["o"])(null),o=Object(i["o"])(null),a=Object(i["o"])(null),u={id:null,permissions:[],pid:null},l={name:null,permission:null,_id:null},p=1,d=Object(i["n"])(h(h({},u),{},{permissions:[]})),m=function(){d.permissions.push(h(h({},l),{},{_id:p++}))},v=function(t){d.permissions.splice(t,1)},y=function(e){return Object(f["getPermissionFormItems"])({addPermission:m,removePermission:v,index:e,length:d.permissions.length,formType:t.type})},g={pid:[{required:!0,message:"请选择上级权限",trigger:"manual"}]},O=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object.keys(d).forEach((function(e){d[e]=Object(c["isNil"])(t[e])?u[e]:t[e]})),d.permissions=[],d.permissions.push({name:t.name,permission:t.permission,_id:p++}),d.permissions.length||m(),r()},j=function(t,e){n.value.validate((function(r){var n=r;return o.value.forEach((function(t){n=t.validate()&&n})),n?"function"!==typeof t||t(d):"function"===typeof e&&e(d)}))},x=function(){n.value.clearValidate()},P=function(){O(),x()},E=function(){Object(i["g"])((function(){a.value.validate("manual")}))};return h(h({},Object(i["q"])(e)),{},{formRef:n,permissionFormRefs:o,pidRef:a,form:d,rules:g,initForm:O,validate:j,clearValidate:x,resetForm:P,validatePid:E,addPermission:m,removePermission:v,permissionFormItems:y,permissionRules:f["permissionRules"]})}},j=O,x=r("2877"),P=Object(x["a"])(j,n,o,!1,null,null,null);e["default"]=P.exports}}]);