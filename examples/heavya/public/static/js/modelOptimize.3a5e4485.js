(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["modelOptimize"],{1173:function(t,e,r){"use strict";r.r(e);var n,o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container"},[r("div",{staticClass:"head-container"},[r("cdOperation",{attrs:{linkType:"custom"},on:{"to-add":t.doAdd}},[r("el-form",{staticClass:"flex flex-end flex-wrap",attrs:{slot:"right",inline:!0,model:t.localQuery},slot:"right"},[r("el-form-item",[r("el-input",{staticStyle:{width:"200px"},attrs:{clearable:"",placeholder:"请输入任务名称或 ID"},on:{clear:t.crud.toQuery},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.crud.toQuery(e)}},model:{value:t.localQuery.name,callback:function(e){t.$set(t.localQuery,"name",e)},expression:"localQuery.name"}})],1),t._v(" "),r("el-form-item",[r("el-date-picker",{attrs:{type:"datetimerange","start-placeholder":"开始时间","end-placeholder":"结束时间","default-time":["00:00:00","23:59:59"],"value-format":"timestamp","picker-options":t.pickerOptions},on:{change:function(e){return t.crud.toQuery()}},model:{value:t.localQuery.updateTime,callback:function(e){t.$set(t.localQuery,"updateTime",e)},expression:"localQuery.updateTime"}})],1),t._v(" "),r("rrOperation",{staticClass:"fr search-btns",on:{resetQuery:t.resetQuery}})],1)],1)],1),t._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.crud.loading,expression:"crud.loading"}],ref:"table",attrs:{data:t.crud.data,"default-sort":t.defaultSort,"highlight-current-row":""},on:{"sort-change":t.crud.sortChange}},[r("el-table-column",{attrs:{prop:"id",label:"ID",sortable:"custom",width:"80px",fixed:""}}),t._v(" "),r("el-table-column",{attrs:{prop:"name",label:"任务名称","min-width":"120px","show-overflow-tooltip":"",fixed:""},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-link",{staticClass:"name-col",attrs:{type:"primary"},on:{click:function(r){return t.goRecord(e.row.id)}}},[t._v(t._s(e.row.name))])]}}])}),t._v(" "),r("el-table-column",{attrs:{prop:"description",label:"任务描述","min-width":"180px","show-overflow-tooltip":""}}),t._v(" "),r("el-table-column",{attrs:{prop:"modelName",label:"模型名称","min-width":"120px"}}),t._v(" "),r("el-table-column",{attrs:{prop:"algorithmName",label:"优化算法","min-width":"180px"}}),t._v(" "),r("el-table-column",{attrs:{prop:"updateTime",label:"更新时间",sortable:"custom","min-width":"160px"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("span",[t._v(t._s(t.parseTime(e.row.updateTime)))])]}}])}),t._v(" "),r("el-table-column",{attrs:{label:"操作",width:"250px",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[r("el-button",{attrs:{type:"text"},on:{click:function(r){return r.stopPropagation(),t.doEdit(e.row)}}},[t._v("编辑")]),t._v(" "),r("el-button",{attrs:{type:"text"},on:{click:function(r){return r.stopPropagation(),t.doSubmit(e.row.id)}}},[t._v("提交")]),t._v(" "),r("el-button",{attrs:{type:"text"},on:{click:function(r){return r.stopPropagation(),t.doFork(e.row)}}},[t._v("Fork")]),t._v(" "),r("el-button",{attrs:{type:"text"},on:{click:function(r){return r.stopPropagation(),t.doDelete(e.row.id)}}},[t._v("删除")])]}}])})],1),t._v(" "),r("pagination"),t._v(" "),r("BaseModal",{staticClass:"create-form-dialog",attrs:{visible:t.formVisible,title:t.FORM_TYPE_MAP[t.formType]+"模型优化任务","destroy-on-close":"",loading:t.submitting,width:"800px"},on:{"update:visible":function(e){t.formVisible=e},cancel:t.onDialogCancel,ok:t.onSubmitForm}},[r("OptimizeForm",{ref:"form",staticClass:"create-form"})],1)],1)},i=[],a=r("2f62"),c=r("5a63"),u=r("c6db"),s=r("ed08"),l=r("f109"),f=r("5897"),h=r("4f59"),d=r("55b8"),p=r("9354"),m=r("f166e"),y=r("2bea");function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){w(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function w(t,e,r){return e=O(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function O(t){var e=k(t,"string");return"symbol"===v(e)?e:String(e)}function k(t,e){if("object"!==v(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function x(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */x=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(P){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof h?e:h,a=Object.create(i.prototype),c=new L(o||[]);return n(a,"_invoke",{value:k(t,r,c)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=s;var f={};function h(){}function d(){}function p(){}var m={};u(m,i,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(N([])));g&&g!==e&&r.call(g,i)&&(m=g);var b=p.prototype=h.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function o(n,i,a,c){var u=l(t[n],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==v(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function k(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function N(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:T}}function T(){return{value:void 0,done:!0}}return d.prototype=p,n(b,"constructor",{value:p,configurable:!0}),n(p,"constructor",{value:d,configurable:!0}),d.displayName=u(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},w(O.prototype),u(O.prototype,a,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),u(b,c,"Generator"),u(b,i,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}function E(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function _(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){E(i,n,o,a,c,"next",t)}function c(t){E(i,n,o,a,c,"throw",t)}a(void 0)}))}}var j={name:"ModelOptimize",components:{BaseModal:l["a"],pagination:d["a"],rrOperation:h["a"],cdOperation:f["a"],OptimizeForm:y["default"]},cruds:function(){return Object(u["b"])({title:"模型优化管理",crudMethod:{list:c["i"]},optShow:{del:!1},queryOnPresenterCreated:!1,props:{optText:{add:"创建模型优化任务"}}})},mixins:[Object(u["f"])(),Object(u["d"])(),Object(u["a"])(),p["a"],m["b"]],data:function(){return{formType:"add",defaultQuery:{name:null,updateTime:null},localQuery:{name:null,updateTime:null},optimizeAlgorithms:{},showMoreQuery:!1,FORM_TYPE_MAP:s["f"].FORM_TYPE_MAP,formVisible:!1,submitting:!1,defaultSort:{}}},computed:{lastPageInfo:function(){return this.$store.state.modelOptimize.optimizePageInfo}},beforeRouteEnter:function(t,e,r){["ModelOptRecord"].includes(e.name)?r((function(t){return t.pageEnter(!0)})):r((function(t){return t.pageEnter(!1)}))},beforeDestroy:function(){this.stopOpenNotebook()},mounted:function(){var t=_(x().mark((function t(){var e,r,n;return x().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["g"])();case 2:this.optimizeAlgorithms=t.sent,e=this.$route.params.actionType,"add"===e&&(r={},r.modelSource="1",n=this.$route.params.item,r.customizeModelType=n,r.modelAddress=null===n||void 0===n?void 0:n.modelAddress,r.modelName=null===n||void 0===n?void 0:n.name,r.name="".concat(null===n||void 0===n?void 0:n.name,"_优化任务"),this.openFormDialog(r));case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:b(b({},Object(a["c"])({updatePageInfo:"modelOptimize/updateOptimizePageInfo"})),{},(n={pageEnter:function(t){if(t){var e=this.lastPageInfo,r=e.page,n=e.sort,o=n.sort,i=n.order,a=e.query;this.crud.page.current=r,this.defaultSort={prop:o,order:s["f"].tableSortMap2Element[i]},this.crud.sort=o,this.crud.order=i,this.localQuery=a}this.crud.refresh()},goRecord:function(t){this.$router.push({path:"/model/optimize/record",query:{taskId:t}})},filter:function(t,e){this.localQuery[t]=e,this.crud.toQuery()},doFork:function(t){this.formType="fork",this.openFormDialog(t)},doEdit:function(t){this.formType="edit",this.openFormDialog(t)},doAdd:function(){this.formType="add",this.openFormDialog()},openFormDialog:function(t){var e=this;this.formVisible=!0,this.$nextTick((function(){e.$refs.form.initForm(t)}))},doDelete:function(t){var e=this;this.$confirm("此操作将删除该任务, 是否继续?","请确认").then(_(x().mark((function r(){return x().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(c["c"])({id:t});case 2:e.$message({message:"删除成功",type:"success"}),e.crud.refresh();case 4:case"end":return r.stop()}}),r)}))))},doSubmit:function(t){var e=this;this.$confirm("请确认是否提交任务?","请确认").then(_(x().mark((function r(){return x().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(c["j"])({id:t});case 2:e.$message({message:"提交成功",type:"success"}),e.$router.push({name:"ModelOptRecord",query:{taskId:t}});case 4:case"end":return r.stop()}}),r)}))))}},w(n,u["b"].HOOK.beforeRefresh,(function(){this.crud.query=b({},this.localQuery)})),w(n,u["b"].HOOK.afterRefresh,(function(){this.updatePageInfo({page:this.crud.page.current,sort:{sort:this.crud.sort,order:this.crud.order},query:this.localQuery})})),w(n,"resetQuery",(function(){this.localQuery=b({},this.defaultQuery)})),w(n,"onDialogCancel",(function(){this.formVisible=!1})),w(n,"onSubmitForm",(function(){var t=this;this.submitting||this.$refs.form.validate((function(e){var r="edit"===t.formType?c["d"]:c["a"];r&&(t.submitting=!0,r(e).then((function(r){t.formVisible=!1,t.crud.refresh(),e.editAlgorithm&&(r?t.editAlgorithm(r.algorithmId,r.algorithmPath):t.$message.warning("没有返回算法信息，无法在线编辑"))})).finally((function(){t.submitting=!1})))}))})),w(n,m["a"].START,(function(){this.$alert("正在打开 Notebook，请稍后",{showClose:!1,type:"success",title:"优化任务已创建"})})),n))},L=j,N=(r("22a1"),r("2877")),T=Object(N["a"])(L,o,i,!1,null,"64a85db5",null);e["default"]=T.exports},"22a1":function(t,e,r){"use strict";r("5477")},5477:function(t,e,r){},9354:function(t,e,r){"use strict";e["a"]={data:function(){return{pickerOptions:{disabledDate:function(t){return t.getTime()>(new Date).setHours(23,59,59,999)}}}}}},e659:function(t,e,r){"use strict";r.d(e,"g",(function(){return i})),r.d(e,"a",(function(){return a})),r.d(e,"j",(function(){return u})),r.d(e,"k",(function(){return s})),r.d(e,"i",(function(){return l})),r.d(e,"h",(function(){return f})),r.d(e,"c",(function(){return h})),r.d(e,"f",(function(){return d})),r.d(e,"e",(function(){return p})),r.d(e,"b",(function(){return m}));var n=r("b775"),o=r("f121");function i(t){return Object(n["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks"),method:"get",params:t})}function a(t){return Object(n["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks"),method:"post",data:t})}function c(t){return Object(n["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks"),method:"delete",data:t})}function u(t){return Object(n["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks/start"),method:"put",params:t})}function s(t){return Object(n["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks/stop"),method:"put",params:t})}function l(t){return Object(n["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks/").concat(t),method:"get"})}function f(){return Object(n["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks/run-number"),method:"get"})}function h(t,e){return Object(n["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks/create/").concat(t),method:"post",data:e})}function d(t){return Object(n["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks/").concat(t,"/get-address"),method:"get"})}function p(t){return Object(n["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks/detail"),method:"post",data:t})}function m(){return Object(n["a"])({url:"/".concat(o["a"].NOTEBOOK,"/notebooks/batchStop"),method:"put"})}e["d"]={list:i,add:a,del:c,start:u,stop:s,open:l,detail:p}},f166e:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var n=r("e659");function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(P){l=function(t,e,r){return t[e]=r}}function f(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new L(o||[]);return n(a,"_invoke",{value:x(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}t.wrap=f;var d={};function p(){}function m(){}function y(){}var v={};l(v,c,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(N([])));b&&b!==e&&r.call(b,c)&&(v=b);var w=y.prototype=p.prototype=Object.create(v);function O(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function i(n,a,c,u){var s=h(t[n],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==o(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){i("next",t,c,u)}),(function(t){i("throw",t,c,u)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return i("throw",t,c,u)}))}u(s.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){i(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function x(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=h(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function N(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:T}}function T(){return{value:void 0,done:!0}}return m.prototype=y,n(w,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:m,configurable:!0}),m.displayName=l(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},O(k.prototype),l(k.prototype,u,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new k(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(w),l(w,s,"Generator"),l(w,c,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=N,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function a(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,u,"next",t)}function u(t){a(i,n,o,c,u,"throw",t)}c(void 0)}))}}var u={OPENED:"onNotebookOpened",GET_INFO_ERR:"onGetInfoErr",START:"onNotebokOpenStart"};e["b"]={data:function(){return{askNotebookInfoLoading:!1,keepAskAddress:!1,notebookNotifyInstance:null}},computed:{openNotebookLoading:function(){return this.askNotebookInfoLoading||this.keepAskAddress}},beforeDestroy:function(){this.keepAskAddress=!1,this.notebookNotifyInstance&&(this.notebookNotifyInstance.close(),this.notebookNotifyInstance=null)},methods:{editAlgorithm:function(){var t=c(i().mark((function t(e,r){var o,a=this;return i().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e){t.next=3;break}return this.$message.warning("没有算法ID"),t.abrupt("return");case 3:if(r){t.next=6;break}return this.$message.warning("没有算法路径"),t.abrupt("return");case 6:if(!this.askNotebookInfoLoading){t.next=8;break}return t.abrupt("return");case 8:return this.callHook(u.START),this.notebookNotifyInstance=this.$notify({title:"正在启动 Notebook",message:"正在启动 Notebook，请稍等",iconClass:"el-icon-loading",duration:0}),this.askNotebookInfoLoading=!0,t.next=13,Object(n["c"])(1,{sourceId:e,sourceFilePath:r}).finally((function(){a.askNotebookInfoLoading=!1}));case 13:o=t.sent,0===o.status&&o.url?this.openNotebook(o.url):(this.keepAskAddress=!0,this.getNotebookAddress(o.id));case 15:case"end":return t.stop()}}),t,this)})));function e(e,r){return t.apply(this,arguments)}return e}(),getNotebookAddress:function(t){var e=this;this.keepAskAddress&&Object(n["f"])(t).then((function(r){r?e.openNotebook(r):setTimeout((function(){e.getNotebookAddress(t)}),1e3)})).catch((function(t){throw e.keepAskAddress=!1,new Error(t)}))},openNotebook:function(t){window.open(t),this.$message.success("Notebook已启动."),this.callHook(u.OPENED)},stopOpenNotebook:function(){this.keepAskAddress=this.askNotebookInfoLoading=!1},callHook:function(t){"function"===typeof this[t]&&this[t]()}}}}}]);