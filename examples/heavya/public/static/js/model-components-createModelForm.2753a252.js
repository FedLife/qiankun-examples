(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["model-components-createModelForm","model-components-modelUploader","model-util","trainingJob-utils"],{"03b8":function(t,e,r){"use strict";var n,o;function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function i(t,e,r){return e=l(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t){var e=u(t,"string");return"symbol"===a(e)?e:String(e)}function u(t,e){if("object"!==a(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}r.r(e),r.d(e,"JOB_TYPE_ENUM",(function(){return c})),r.d(e,"TRAINING_STATUS_ENUM",(function(){return s})),r.d(e,"TRAINING_TYPE_ENUM",(function(){return f})),r.d(e,"TRAINING_STATUS_MAP",(function(){return p})),r.d(e,"TRAINING_TYPE_MAP",(function(){return d})),r.d(e,"copywriting",(function(){return m})),r.d(e,"IMAGE_RESOURCE_ENUM",(function(){return h})),r.d(e,"ATLAS_ALGORITHM_TYPE_ENUM",(function(){return y})),r.d(e,"trainVisualQueryFormItems",(function(){return g})),r.d(e,"getTrainVisualColumns",(function(){return v})),r.d(e,"trainCreateList",(function(){return b}));var c={SINGLE:1,MULTIPLE:2},s={PENDING:0,RUNNING:1,FINISHED:2,FAILED:3,STOPED:4,UNKNOW:5,CREATE_FAILED:7},f={TRAINING:0,DISTRIBUTED:1,ATLAS:2,DDRL:3},p=(n={},i(n,s.PENDING,{name:"待处理",statusMap:"running"}),i(n,s.RUNNING,{name:"运行中",statusMap:"running"}),i(n,s.FINISHED,{name:"运行完成",tagMap:"success",statusMap:"done"}),i(n,s.FAILED,{name:"运行失败",tagMap:"danger",statusMap:"done"}),i(n,s.STOPED,{name:"停止",tagMap:"info",statusMap:"done"}),i(n,s.UNKNOW,{name:"未知",statusMap:"done"}),i(n,s.CREATE_FAILED,{name:"创建失败",tagMap:"danger",statusMap:"done"}),n),d=(o={},i(o,f.TRAINING,"训练任务"),i(o,f.DISTRIBUTED,"训练任务"),i(o,f.ATLAS,"模型重组"),i(o,f.DDRL,"强化学习"),o),m={title:{jobResume:"断点续训",modelDownload:"模型下载",modelSelect:"模型选择"},description:{jobResume:"请选择模型并开始训练",modelDownload:"请选择需要下载的模型文件目录",modelSelect:"请选择要保存的模型"},emptyText:{jobResume:"暂无数据，无法断点续训",modelDownload:"暂无数据",modelSelect:"暂无模型数据"},tip:{jobResume:"此功能将会以用户选择的模型作为预训练模型进行新一轮训练，之前的训练结果将被覆盖且无法找回。建议先保存模型！"}},h={CUSTOM:"0",PRESET:"1",NOTEBOOK:"2",TERMINAL:"3"},y={LAYERWISE:1,CFL:2,TASK_BRANCHING:3,DDRL:4},g=[{prop:"trainName",placeholder:"请输入训练名称",class:"w-200",change:"query"},{prop:"createTime",startPlaceholder:"开始时间",endPlaceholder:"结束时间",type:"date",dateType:"datetimerange",defaultTime:["00:00:00","23:59:59"],pickerOptions:{disabledDate:function(t){return t.getTime()>(new Date).setHours(23,59,59,999)}},valueFormat:"timestamp",change:"query"},{type:"button",btnText:"重置",func:"resetQuery"},{type:"button",btnText:"搜索",btnType:"primary",func:"query"}];function v(t){var e=t.goVisual,r=t.jobStatusList,n={};return Object.keys(p).forEach((function(t){n[t]=p[t].tagMap})),[{label:"名称",prop:"trainName",minWidth:"160px"},{label:"版本",prop:"trainVersion",sortable:"custom"},{label:"训练时长",prop:"runtime",sortable:"custom"},{label:"状态",prop:"trainStatus",dropdownList:r.value,formatter:function(t){var e;return null===(e=r.value.find((function(e){return e.value===String(t)})))||void 0===e?void 0:e.label},type:"tag",tagMap:n},{label:"创建时间",prop:"createTime",type:"time",minWidth:"160px",sortable:"custom"},{label:"操作",type:"operation",width:"370px",operations:[{label:"可视化",func:e,iconAfter:"externallink"}]}]}var b=[{type:f.TRAINING,title:"训练任务",img:r("b237")},{type:f.ATLAS,title:"模型重组",img:r("321f")}]},"1afb":function(t,e,r){"use strict";r.d(e,"b",(function(){return a})),r.d(e,"a",(function(){return i}));var n=r("b775"),o=r("f121");function a(t){return Object(n["a"])({url:"/".concat(o["a"].ALGORITHM,"/algorithmUsage"),method:"get",params:t})}function i(t){return Object(n["a"])({url:"/".concat(o["a"].ALGORITHM,"/algorithmUsage"),method:"post",data:t})}},2768:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"model-uploader-container"},[r("upload-inline",{attrs:{action:"fakeApi",accept:t.accept,acceptSize:t.modelConfig.uploadFileAcceptSize,acceptSizeFormat:t.uploadSizeFomatter,"list-type":"text",limit:1,multiple:!1,"show-file-count":!1,params:t.uploadParams,"auto-upload":!0,filters:t.uploadFilters,onRemove:t.onRemove},on:{uploadStart:t.uploadStart,uploadSuccess:t.uploadSuccess,uploadError:t.uploadError}}),t._v(" "),t.loading?r("upload-progress",{attrs:{progress:t.progress,color:t.customColors,status:t.status,size:t.size},on:{onSetProgress:t.onSetProgress}}):t._e()],1)},o=[],a=r("7f969"),i=r("6e3b"),l=r("f121"),u=r("ed08"),c=r("8bbd");function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */f=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(O){u=function(t,e,r){return t[e]=r}}function c(t,e,r,o){var a=e&&e.prototype instanceof m?e:m,i=Object.create(a.prototype),l=new N(o||[]);return n(i,"_invoke",{value:L(t,r,l)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=c;var d={};function m(){}function h(){}function y(){}var g={};u(g,a,(function(){return this}));var v=Object.getPrototypeOf,b=v&&v(v(x([])));b&&b!==e&&r.call(b,a)&&(g=b);var A=y.prototype=m.prototype=Object.create(g);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function o(n,a,i,l){var u=p(t[n],t,a);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==s(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,i,l)}),(function(t){o("throw",t,i,l)})):e.resolve(f).then((function(t){c.value=t,i(c)}),(function(t){return o("throw",t,i,l)}))}l(u.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return M()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=T(i,r);if(l){if(l===d)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=p(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function T(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,T(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=p(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function x(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:M}}function M(){return{value:void 0,done:!0}}return h.prototype=y,n(A,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:h,configurable:!0}),h.displayName=u(y,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,l,"GeneratorFunction")),t.prototype=Object.create(A),t},t.awrap=function(t){return{__await:t}},w(E.prototype),u(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(c(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(A),u(A,l,"Generator"),u(A,a,(function(){return this})),u(A,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=x,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:x(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function p(t,e,r,n,o,a,i){try{var l=t[a](i),u=l.value}catch(c){return void r(c)}l.done?e(u):Promise.resolve(u).then(n,o)}function d(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){p(a,n,o,i,l,"next",t)}function l(t){p(a,n,o,i,l,"throw",t)}i(void 0)}))}}var m={name:"ModelUploader",components:{UploadInline:a["a"],UploadProgress:i["a"]},props:{type:{type:String,default:"Custom"},modelType:String},data:function(){return{modelConfig:l["g"],uploadParams:{objectPath:null},loading:!1,size:0,progress:0,customColors:[{color:"#909399",percentage:40},{color:"#e6a23c",percentage:80},{color:"#67c23a",percentage:100}],uploadFilters:[u["ib"]],modelSuffixMap:{}}},computed:{status:function(){return 100===this.progress?"success":null},user:function(){return this.$store.getters.user},isAtlas:function(){return"Atlas"===this.type},accept:function(){return this.isAtlas?".zip":this.modelType?this.modelSuffixMap[this.modelType]?".zip,".concat(this.modelSuffixMap[this.modelType]):".zip":".zip,.pb,.h5,.ckpt,.pkl,.pth,.weight,.caffemodel,.pt"}},watch:{loading:function(t){this.$emit("loadingChange",t)}},created:function(){this.updatePath(),this.isAtlas||this.getModelSuffix()},methods:{uploadSizeFomatter:u["Ub"],updatePath:function(){this.uploadParams.objectPath="upload-temp/".concat(this.user.id,"/").concat(Object(u["ab"])())},getModelSuffix:function(){var t=d(f().mark((function t(){return f().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["i"])({modelType:this.modelType});case 2:this.modelSuffixMap=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onRemove:function(){this.loading=!1,this.$emit("modelAddressChange",null)},uploadStart:function(t){this.updatePath();var e=[!0,t.size,0];this.loading=e[0],this.size=e[1],this.progress=e[2],this.$emit("uploadStart")},onSetProgress:function(t){this.progress+=t},uploadSuccess:function(t){var e=this;this.progress=100,setTimeout((function(){e.loading=!1}),1e3),this.$emit("modelAddressChange",t[0].data.objectName)},uploadError:function(){this.loading=!1,this.$message({message:"上传文件失败",type:"error"}),this.$emit("uploadError")}}},h=m,y=r("2877"),g=Object(y["a"])(h,n,o,!1,null,null,null);e["default"]=g.exports},"321f":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAqySURBVHic7Z3vaxzHGce/z9z5ZeqE1HZcY9T+D25xIdSzNLSQF8EEST2oKI4xJhQ3jcO5uGnKzramlpNLa4oJxqTBuGoqS34RggmhGG5daCil/8PhOEFJjtI/QKqmL/bmbm939sfsze6eTvcFodXpbm93Pvv8mGdmZ4G55pprrrnmmmuuueYCACy3t93l9rZb93GUIar7AIpoub0jR39JsdE54NV3NHbF6j6AyUVilqxlBiwkrL1vLTNgIWHtfWuZMQsJa29ay54B0mpvc7W9C3SDrazD33tQphpIq73N/wdyAYAAXmQfG53mVJ9jVM26DyAqBYEAvovRFSMBX72HILnaShODdIoeAwCsdw746e+0r6m4esIQwq8rCA1IL9w4WTFEAv5mp1kIxvj+q3d5tVqIArEL8LAlNCA9oNgVyiCdya9sKQASAIml9g6PXhBlqjYLCdJTEqNX8l+NOgtRIG01XNxqq7GWyoFEQRRpyDiQ8hpr/HjLh1IZkFZ7m++CuurvSa5oBcS2VSR/X3FrNlUlQMInZKMRl9vbLgMeVp0Fhc/DTqyKq3QgVZt82SobSqlAlto7XRUUy7qi6lCZUEoBEs5QqvLzVassKNaBROPFJB20aZfyADbP02r5PSg5jOLFLMMAgM1O05GATwBfau90sz+RLatARmnt3g/eeWUbijUg6mAk4O8XGEqq1EMADw8TFJEVIMvt7WGJYdbdlE5BQJcCANRwQVFNDCSabUy6v72qjc4BT7muSYaRJwIS7fTNWmprKuW6ABJFXddEaW+d4wYA8Gyrx9FouASACJyBBBjg3zleWwybNBUuDGRkHdXDONnq8QY1XCLJiQhEABHAQtsEiAe36wGjLtQiHcYJBqjC1c9qdLLV4wRyGREnkkiEEWyLH5z9HIwBH797rGIwwQDXIMD7Jp8sZCFVW8fJVo9DkktEnI03+nBb9zoLwQGAj25VB6aolRS0kMA6yoZxcrHHJZELCZ7U6DlggAiCiPDCy1sAAz5852jpYFTGZWolxkBGKV2Qd5ehE4s9TkSuJPC0Rs8JI7QtBRHh9IUtfHCjXCgNSG8XxE2nLxm5rHCaW9Z8pxOLvW4QI9Ibffz1KJA4DC0kJsW96+WBURmXidsq2A+xbx0nXuy5317sySiM7O2CMAhgIPGji1/I1mtfljIfWPVLTHrvhhYSBCqb1nHidI/LBrqJjZb6ejaMdEih9zGAEcTam0esWoxpm+W2EBU7pGEalyXZgJtkAWXB0P4NAoi4zXMDRu2Vt+du7LII0jf9TOr+TN2MgTtLhqSPR4zI6rkB5m7LAEg5qe6/733LAZHIjhPJMLItJrqP+PeA4N9ZPVRagM+rXEAmrfFn6V8bC94/736TCBD6xky2hmyLycq04IOR8+drh50yzk1lV5Qz/c0FZBc4FWyV1/cAgE/WF7x/vL9AQX8huzFN0+HItk8NctauHXbWVg/5ZZ6XSRzJ6bLUeAceFj6qiE4u9njS//6+tuARBZOd09yMCQxldSDyGZjzl7f0IM690efnRD/x2MpWZk89mAIayNZ4x3eWH7kgKb7begQCxCfrCzHfrUroz515jCABwlicSYcUhwEiv0HkrXX01nDujT6XIJcInCRw3vuPuOU+bSWmBIkQ8YGn0X6/Uu6gbjPdZYMSBhFADOLZH38qv7fySJuFPLh93Hvw3nEPRIIyLEYb3AEfbNdZf/uwkwTj7Ot9V4K6pEo1IDAJ8bL4L7dyvgPPIpGdVmdaiIofttLdQQldl/kI/pNPBUBCN8D0t0EJ/fnzn4OGWVlyBsYIPjWkt945mnjcZ17vu2xQeNSBbtRwj3Itt0WPN2QkBjCI77/0WD539rHWYj66dcy7f/MbRKFUOQLDb0A6d//wjJME48zlPn/pV/1uGgwisna+JplW5XdQNQHIjOA8gCR+eO4zQSChG2AalNC90xe2OAiniOEhILF5PcUiLvc5CEGcQHY8sq08br+WW9qy0tbItnj+fDDyd/9mHMwHN476yDjRlct93gBcDMv52VkbI6CR4274PAonRlnKBCKDmr69lLfZBElp2usWRMALP90yGlxaudznJKVLCIPQp8O6DA4NK2dspFpiiAmM8R8pTl/Yki9e2MqsC61c+qpLUnaJwLP6JklWUocygahAZKsP0sTgpFWmhXQYukYDg1j8+ReJ82hXLn3VJRZYhWkVOPx6HcoEIgHfdsl92ADQX5k5G40vXYxDWfnFl66Ckbd3r/++egJs5ndan6vbBEhGfDaMYajXeXT3KelwVpyKuEeLUd1ANfZDklJOMzfTao/qTiuX+5mWkReGTZdl0rmupR+CMRjRHzM304jsWyaCzpM0jP+vDpdVm4XEGgdF3AxirWYKI80aLZ6xAPJ1Haq/CDQxpJjPH/j5yL6ZzGtl2a4RDbvNkydTrcllJTQ6TNwMxVwWNJ/XW0x1aa/p5JCaSiemg03JjRk7mRww8qW9ZLWjnrdaXmMtK63R8ruZaKvlgZF35sqVV5/wJz1X09JT5UH943eP+0TkJzYawn0TpMKIuZWmDkA+GLqML69a7W2+3N52dWPmZFjpqCnLkn6aZQxhINtqwiY+LMsk7NtoUgTLf/9LMOeKxC6oG76/sMjkwlqA3L95zAt61EkBOH9jRmXmApNhXPnZE16xsyOx1N7pttrbXA3Zmoy21raQ8ofvHPVAcAgQcTeT/8oej4LNjPH25NhERCAGnxg5pjCiDU7BAp7DhXdMJhcWuj9EgqysQ6gGlxZf2QIFd0fxWKMjHdJYTG/o3VzWpAgQ+UySd+WVyYN4XBJL7Z1u3ppgAQshEVwB1FWmab6Pcd3741Fv8/ozDo1NXsjnZsIKx5B0a0AIKHOuvvo158pF2zBo+JsAvtzekXnuXzcCEm1822DWf3/E++vbRwjDKaWDxkSym4kq+j5d4ZARAIK4evEg2QcBADLye3h0IqutrMQQ22De7xzx1t48TNBYTDSeRL1uJgwGsfraQVq9eLBg0M4jivwe+8/Y2pNRTQhk/AqwDebO6iHv9tVDRGMWE0l7Q0Gk2UQiDAb4jDGnDBDjnb4k6wi/P3kJkgmBkPaLFRhbj45473eHvD/99utEIBEN2rHvjrs2vyGlc639pLNainuKHUHkd1hSbHSalJYMGQEZzYLXHUD5uvWbpz1iEBikygwkbvz6KV/9//ovn/JBEANL8gHpvNV+0lm9NHpPPQpA5El/jVpTs35tyi72zyJmQHxx5+A+dWm8dtiExcUwDAVnf4GIK7iHZrNgGxgBUZVLvWimloI1lQrUk56/kcsKr8M7vhPpq7rNfoZiQ5OmvWKj06S7nQOOqmhOusTdfpcRkFERLZ41lLFk6n6U9Zx1VpcXr0qldCLmUIqrlPGQoNQcpH82e+z7QaV2s2ftURVVqPS6xxyKmSopRFX5yKC9ruoqg9h7YAb3Bp6q8hgrBQKMxuRHPf7pgqJ7yGWVj2+tHIiSzlqA8lc6TZIORB1PB6oNiFIcDFAlnGkBoVQ7EKVRX0UPx8Zj8tSwsu4J1EXHL2xraoCEpbeaQKrh1N9Zk5h3gVMyZf3caXto2VQCUQr38NMaNa/CT58G6nk8d5amGohOKhUFspc7UpakrGgaAcw111xzzTXXXDOq/wN9D0Cv+vCFbAAAAABJRU5ErkJggg=="},"44fe":function(t,e,r){"use strict";function n(t){var e=t.count,r=t.min,n=t.max,o=t.emptyMsg;return function(t,a,i){if(!a)return i(new Error(o||"值不能为空"));try{var l=JSON.parse(a);return l.length!==e?i(new Error("数组需要有 ".concat(e," 个成员"))):void 0!==r&&l.find((function(t){return t<r}))?i(new Error("数组成员不能小于 ".concat(r))):void 0!==n&&l.find((function(t){return t>n}))?i(new Error("数组成员不能大于 ".concat(n))):i()}catch(u){return i(new Error("不是有效的 JSON 数组"))}}}r.r(e),r.d(e,"generateNumArrValidator",(function(){return n})),r.d(e,"atlasFrameTypeList",(function(){return o})),r.d(e,"atlasModelTypeList",(function(){return a})),r.d(e,"TF_FRAME_TYPE",(function(){return i})),r.d(e,"SAVED_MODEL_MODEL_TYPE",(function(){return l}));var o=[{label:"PyTorch",value:"3"}],a=[{label:"PyTorch PTH",value:"8"}],i=2,l=1},"8bbd":function(t,e,r){"use strict";r.d(e,"l",(function(){return a})),r.d(e,"a",(function(){return i})),r.d(e,"d",(function(){return u})),r.d(e,"f",(function(){return c})),r.d(e,"m",(function(){return s})),r.d(e,"k",(function(){return f})),r.d(e,"b",(function(){return p})),r.d(e,"j",(function(){return d})),r.d(e,"i",(function(){return m})),r.d(e,"e",(function(){return h})),r.d(e,"h",(function(){return y})),r.d(e,"g",(function(){return g}));var n=r("b775"),o=r("f121");function a(t){return Object(n["a"])({url:"/".concat(o["a"].MODEL,"/ptModelInfo"),method:"get",params:t})}function i(t){return Object(n["a"])({url:"/".concat(o["a"].MODEL,"/ptModelInfo"),method:"post",data:t})}function l(t){return Object(n["a"])({url:"/".concat(o["a"].MODEL,"/ptModelInfo"),method:"put",data:t})}function u(t){return Object(n["a"])({url:"/".concat(o["a"].MODEL,"/ptModelInfo"),method:"delete",data:t})}function c(t,e){return Object(n["a"])({url:"/".concat(o["a"].MODEL,"/ptModelInfo/byResource"),method:"get",params:{modelResource:t,packaged:e}})}function s(t){return Object(n["a"])({url:"/".concat(o["a"].MODEL,"/ptModelInfo/package"),method:"post",data:t})}function f(t){return Object(n["a"])({url:"/".concat(o["a"].MODEL,"/ptModelInfo/servingModel"),method:"get",params:{modelResource:t}})}function p(t){return Object(n["a"])({url:"/".concat(o["a"].MODEL,"/ptModelInfo/uploadModel"),method:"post",data:t})}function d(){return Object(n["a"])({url:"/".concat(o["a"].MODEL,"/ptModelType"),method:"get"})}function m(t){return Object(n["a"])({url:"/".concat(o["a"].MODEL,"/ptModelSuffix"),method:"get",params:t})}function h(t){return Object(n["a"])({url:"/".concat(o["a"].MODEL,"/ptModelInfo/byModelId"),method:"get",params:{id:t}})}function y(t){return Object(n["a"])({url:"/".concat(o["a"].MODEL,"/ptModelStruct"),method:"get",params:t})}function g(t){return Object(n["a"])({url:"/".concat(o["a"].MODEL,"/ptModelInfo/atlasModel"),method:"get",params:t})}e["c"]={list:a,add:i,edit:l,del:u}},b237:function(t,e){t.exports="data:image/png;base64,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"},ce08:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-form",{ref:"form",attrs:{model:t.form,rules:t.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"模型名称",prop:"name"}},[r("el-input",{staticClass:"w-300",attrs:{maxlength:"32",placeholder:"请输入模型名称","show-word-limit":""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name","string"===typeof e?e.trim():e)},expression:"form.name"}})],1),t._v(" "),r("el-form-item",{attrs:{label:"框架",prop:"frameType"}},[r("el-select",{staticClass:"w-300",attrs:{placeholder:"请选择框架",disabled:t.isAtlas,filterable:""},on:{change:t.onFrameTypeChange},model:{value:t.form.frameType,callback:function(e){t.$set(t.form,"frameType",e)},expression:"form.frameType"}},t._l(t.dict.frame_type,(function(t){return r("el-option",{key:t.value,attrs:{value:t.value,label:t.label}})})),1),t._v(" "),t.isAtlas?r("el-tooltip",{attrs:{content:"模型炼知暂只支持 Pytorch 框架的模型",effect:"dark",placement:"top"}},[r("i",{staticClass:"el-icon-warning-outline primary f18 v-text-top"})]):t._e()],1),t._v(" "),t.isAtlas?t._e():r("el-form-item",{attrs:{label:"模型格式",prop:"modelType"}},[r("el-select",{staticClass:"w-300",attrs:{placeholder:"请选择模型格式",disabled:t.isAtlas,filterable:""},model:{value:t.form.modelType,callback:function(e){t.$set(t.form,"modelType",e)},expression:"form.modelType"}},t._l(t.modelTypeList,(function(t){return r("el-option",{key:t.value,attrs:{value:t.value,label:t.label}})})),1)],1),t._v(" "),r("el-form-item",{attrs:{label:"模型类别",prop:"modelClassName"}},[r("el-select",{staticClass:"w-300",attrs:{placeholder:"请选择模型类别",filterable:""},model:{value:t.form.modelClassName,callback:function(e){t.$set(t.form,"modelClassName",e)},expression:"form.modelClassName"}},t._l(t.dict.model_class,(function(t){return r("el-option",{key:t.id,attrs:{label:t.label,value:t.value}})})),1)],1),t._v(" "),t.isAtlas?r("el-form-item",{attrs:{label:"模型结构",prop:"structName"}},[r("el-select",{staticClass:"w-300",attrs:{placeholder:"请选择模型结构",filterable:"","allow-create":""},model:{value:t.form.structName,callback:function(e){t.$set(t.form,"structName",e)},expression:"form.structName"}},t._l(t.structNameList,(function(t){return r("el-option",{key:t,attrs:{label:t,value:t}})})),1)],1):t._e(),t._v(" "),t.isAtlas?r("el-form-item",{attrs:{label:"任务类型",prop:"jobType"}},[r("el-select",{staticClass:"w-300",attrs:{placeholder:"请选择任务类型",filterable:""},on:{change:t.onJobTypeChange},model:{value:t.form.jobType,callback:function(e){t.$set(t.form,"jobType",e)},expression:"form.jobType"}},t._l(t.jobTypeList,(function(t){return r("el-option",{key:t.id,attrs:{label:t.label,value:+t.value}})})),1),t._v(" "),r("el-tooltip",{attrs:{content:"若模型支持多任务场景，请选择“多任务”类型",effect:"dark",placement:"top"}},[r("i",{staticClass:"el-icon-warning-outline primary f18 v-text-top"})])],1):t._e(),t._v(" "),t.isAtlas?r("el-form-item",{attrs:{label:"输入尺寸",prop:"modelSize"}},[r("el-input-number",{staticClass:"w-300",attrs:{controls:!1,min:1,"step-strictly":""},model:{value:t.form.modelSize,callback:function(e){t.$set(t.form,"modelSize",e)},expression:"form.modelSize"}})],1):t._e(),t._v(" "),r("el-form-item",{attrs:{label:"模型描述",prop:"modelDescription"}},[r("el-input",{staticStyle:{width:"500px"},attrs:{type:"textarea",placeholder:"请输入模型描述",maxlength:"255","show-word-limit":""},model:{value:t.form.modelDescription,callback:function(e){t.$set(t.form,"modelDescription",e)},expression:"form.modelDescription"}})],1),t._v(" "),t.isAtlas?[r("el-form-item",{ref:"modelAddress",attrs:{label:"模型上传",prop:"modelAddress"}},[r("ModelUploader",t._g({attrs:{type:t.type},on:{modelAddressChange:t.onModelAddressChange}},t.$listeners))],1)]:t._e()],2)},o=[],a=r("1afb"),i=r("ed08"),l=r("8bbd"),u=r("03b8"),c=r("2768"),s=r("44fe");function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */p=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(O){u=function(t,e,r){return t[e]=r}}function c(t,e,r,o){var a=e&&e.prototype instanceof m?e:m,i=Object.create(a.prototype),l=new N(o||[]);return n(i,"_invoke",{value:L(t,r,l)}),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=c;var d={};function m(){}function h(){}function y(){}var g={};u(g,a,(function(){return this}));var v=Object.getPrototypeOf,b=v&&v(v(x([])));b&&b!==e&&r.call(b,a)&&(g=b);var A=y.prototype=m.prototype=Object.create(g);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function o(n,a,i,l){var u=s(t[n],t,a);if("throw"!==u.type){var c=u.arg,p=c.value;return p&&"object"==f(p)&&r.call(p,"__await")?e.resolve(p.__await).then((function(t){o("next",t,i,l)}),(function(t){o("throw",t,i,l)})):e.resolve(p).then((function(t){c.value=t,i(c)}),(function(t){return o("throw",t,i,l)}))}l(u.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return M()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var l=T(i,r);if(l){if(l===d)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function T(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,T(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function x(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:M}}function M(){return{value:void 0,done:!0}}return h.prototype=y,n(A,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:h,configurable:!0}),h.displayName=u(y,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,l,"GeneratorFunction")),t.prototype=Object.create(A),t},t.awrap=function(t){return{__await:t}},w(E.prototype),u(E.prototype,i,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(c(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},w(A),u(A,l,"Generator"),u(A,a,(function(){return this})),u(A,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=x,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(l&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:x(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function d(t,e,r,n,o,a,i){try{var l=t[a](i),u=l.value}catch(c){return void r(c)}l.done?e(u):Promise.resolve(u).then(n,o)}function m(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){d(a,n,o,i,l,"next",t)}function l(t){d(a,n,o,i,l,"throw",t)}i(void 0)}))}}function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){g(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e,r){return e=v(e),e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function v(t){var e=b(t,"string");return"symbol"===f(e)?e:String(e)}function b(t,e){if("object"!==f(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var A={name:null,frameType:null,jobType:u["JOB_TYPE_ENUM"].SINGLE,modelType:null,modelDescription:null,modelAddress:null,modelResource:null,modelClassName:null,structName:null,modelSize:224},w={name:"CreateModelForm",dicts:["model_type","frame_type","model_class","job_type"],components:{ModelUploader:c["default"]},props:{type:{type:String,default:"Custom"}},data:function(){return{form:y({},A),rules:{name:[{required:!0,message:"请输入模型名称",trigger:"blur"},{max:32,message:"长度在32个字符以内",trigger:"blur"},{validator:i["ac"],trigger:["blur","change"]}],frameType:[{required:!0,message:"请选择模型框架",trigger:"blur"}],modelType:[{required:!0,message:"请选择模型格式",trigger:"blur"}],modelDescription:[{max:255,message:"长度在255个字符以内",trigger:"blur"}],modelAddress:[{required:!0,message:"请上传有效的模型",trigger:["blur","manual"]}],modelClassName:[{required:!0,message:"请选择模型类别",trigger:"blur"}],structName:[{required:!0,message:"请选择模型结构",trigger:"blur"}],modelSize:[{required:!0,message:"请输入模型尺寸",trigger:"blur"}]},modelTypeMap:{},structNameList:[]}},computed:{isAtlas:function(){return"Atlas"===this.type},modelTypeList:function(){var t=this;return this.form.frameType&&this.modelTypeMap[this.form.frameType]?this.dict.model_type.filter((function(e){return t.modelTypeMap[t.form.frameType].includes(+e.value)})):this.dict.model_type},jobTypeList:function(){return this.dict.job_type}},created:function(){this.getModelTypeMap(),this.isAtlas&&(this.form.frameType=s["atlasFrameTypeList"][0].value,this.form.modelType=s["atlasModelTypeList"][0].value,this.getStructNameList())},methods:{validate:function(t,e){var r=!0;return this.$refs.form.validate((function(t){r=r&&t})),r?(this.form.modelResource=this.isAtlas?i["k"].ATLAS:i["k"].CUSTOM,"function"!==typeof t||t(this.form)):"function"===typeof e&&e(this.form)},reset:function(){var t=this;this.form=y({},A),this.$nextTick((function(){t.$refs.form.clearValidate()}))},createAlgorithmUsage:function(){var t=m(p().mark((function t(e){return p().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(a["a"])({auxInfo:e});case 2:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),onModelAddressChange:function(t){this.form.modelAddress=t,this.$refs.modelAddress.validate("manual")},onJobTypeChange:function(){this.getStructNameList()},getModelTypeMap:function(){var t=m(p().mark((function t(){return p().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["j"])();case 2:this.modelTypeMap=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onFrameTypeChange:function(){this.form.modelType=null},getStructNameList:function(){var t=m(p().mark((function t(){return p().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["h"])({jobType:this.form.jobType});case 2:this.structNameList=t.sent;case 3:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},E=w,L=r("2877"),T=Object(L["a"])(E,n,o,!1,null,null,null);e["default"]=T.exports}}]);