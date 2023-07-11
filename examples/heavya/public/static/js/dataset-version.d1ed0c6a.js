(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["dataset-version","dataset-version-actions","dataset-version-convert"],{1507:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("h2",[e._v("数据集版本管理")]),e._v(" "),n("InfoTable",{attrs:{columns:e.columns,request:e.request,params:e.queryParams,actionRef:e.actionRefFn}}),e._v(" "),n("BaseModal",{attrs:{visible:e.state.modal.show,loading:e.state.modal.loading,title:"生成预置数据集"},on:{change:e.handleCancel,ok:e.handleConvert}},[n("Convert",{ref:"convertForm",attrs:{row:e.state.modal.row}})],1)],1)},o=[],a=n("ed09"),i=n("ed35"),s=n("f109"),c=n("141b"),l=n("5c96"),u=n("b775"),d=n("f121"),f=n("ed08"),b=n("b55a"),p=n("3d4f"),m=n("3da5");function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return t=g(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e){var t=h(e,"string");return"symbol"===v(t)?t:String(t)}function h(e,t){if("object"!==v(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var j=Object(m["annotationBy"])("code"),C={name:"DatasetVersion",components:{InfoTable:i["a"],BaseModal:s["a"],Convert:p["default"]},setup:function(e,t){var n=t.root.$route,r=n.params,o=void 0===r?{}:r,i=Object(a["o"])(null),s=Object(a["o"])(null),p=Object(a["n"])({modal:{show:!1,loading:!1,row:null}}),v=function(e){Object.assign(p,{modal:{show:!0,row:e}})},O=[{prop:"datasetId",label:"ID",minWidth:100,sortable:!0},{prop:"name",label:"名称",minWidth:160},{prop:"dataType",label:"数据类型",minWidth:100,render:function(e){var t=e.row;return m["dataTypeMap"][t.dataType]}},{prop:"annotateType",label:"标注类型",minWidth:100,render:function(e){var t=e.row;return j(t.annotateType,"name")}},{prop:"isCurrent",label:"是否为当前版本",minWidth:120,render:function(e){var t=e.row;return t.isCurrent?"是":"否"}},{prop:"versionName",label:"版本号",minWidth:100,sortable:!0},{prop:"createTime",label:"创建时间",minWidth:150,sortable:!0,render:function(e){var t=e.row;return Object(f["Bb"])(t.createTime)}},{prop:"versionNote",label:"版本描述"},{label:"操作",minWidth:240,align:"left",render:function(e,t){var n=e.row;return[Object(a["d"])(b["default"],{props:{row:n,actions:t,showConvert:v}})]}}],y={datasetId:o.datasetId},g=function(e){return Object(u["a"])("/".concat(d["a"].DATA,"/datasets/versions/"),{params:e})},h=function(){Object.assign(p,{modal:{show:!1,loading:!1,row:null}})},C=function(){s.value.doConvert().then((function(){Object.assign(p,{modal:{show:!1,loading:!1,row:null}}),l["Message"].success("生成预置数据集成功",500),s.value.resetModel()})).catch((function(e){p.modal.loading=!1,l["Message"].error(e.message,1e3)}))},_=function(){Object(c["k"])(p.modal.row.datasetId).then((function(e){e?l["MessageBox"].confirm("该操作将覆盖当前数据集已有的转预置版本，可能会影响正在使用的训练任务，继续请确认","提示",{distinguishCancelAndClose:!0}).then((function(){C()})).catch((function(){p.modal.loading=!1})):C()}))},N=function(){Object.assign(p,{modal:w(w({},p.modal),{},{loading:!0})}),_()};return{parseTime:f["Bb"],request:g,queryParams:y,columns:O,state:p,actionRefFn:function(){return i},convertForm:s,handleCancel:h,handleConvert:N}}},_=C,N=n("2877"),P=Object(N["a"])(_,r,o,!1,null,null,null);t["default"]=P.exports},"16ad":function(e,t,n){"use strict";n("27de")},"27de":function(e,t,n){},"3d4f":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{ref:"form",attrs:{model:e.state.model,rules:e.rules,"label-width":"100px"}},[n("el-form-item",{attrs:{label:"数据集名称",prop:"name"}},[n("el-input",{model:{value:e.state.model.name,callback:function(t){e.$set(e.state.model,"name",t)},expression:"state.model.name"}})],1),e._v(" "),n("el-form-item",{attrs:{label:"版本号",prop:"versionName"}},[n("el-input",{attrs:{disabled:"",value:e.state.model.versionName}})],1),e._v(" "),n("el-form-item",{attrs:{label:"数据集描述",prop:"versionNote"}},[n("el-input",{attrs:{type:"textarea",placeholder:"数据集描述长度不能超过100字",maxlength:"100",rows:"3","show-word-limit":""},model:{value:e.state.model.versionNote,callback:function(t){e.$set(e.state.model,"versionNote",t)},expression:"state.model.versionNote"}})],1)],1)},o=[],a=n("2ef0"),i=n("ed09"),s=n("61f7"),c=n("141b");function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t=b(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){var t=p(e,"string");return"symbol"===l(t)?t:String(t)}function p(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var m={name:"Convert",props:{row:{type:Object,default:function(){return{}}}},setup:function(e){var t=Object(i["o"])(null),n={name:[{required:!0,message:"请输入预置数据集名称",trigger:["change","blur"]},{validator:s["p"],trigger:["blur"]}],remark:[{required:!1,message:"请输入数据集描述信息",trigger:"blur"}]},r=Object(a["pick"])(e.row,["datasetId","name","versionName","versionNote"]),o=Object(i["n"])({model:d({},r)}),l=function(){return Object(c["b"])(t.value.model)},u=function(){Object.assign(o,{model:d({},r)})};return Object(i["r"])((function(){return e.row}),(function(e){Object.assign(o,{model:Object(a["pick"])(e,["datasetId","name","versionName","versionNote"])})})),{rules:n,state:o,form:t,doConvert:l,resetModel:u}}},v=m,O=n("2877"),w=Object(O["a"])(v,r,o,!1,null,null,null);t["default"]=w.exports},"84a9":function(e,t,n){"use strict";n("ed59")},b55a:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"info-table-action-cell"},[e.isCurrent?e._e():n("el-button",{attrs:{type:"text"},on:{click:e.setCurrent}},[e._v("设置为当前版本")]),e._v(" "),n("el-popover",{attrs:{placement:"top",width:"200",trigger:"click"}},[n("div",[n("TableTooltip",{attrs:{keys:e.labels,title:e.title,data:e.list,keyAccessor:e.keyAccessor,valueAccessor:e.valueAccessor}})],1),e._v(" "),n("el-button",{attrs:{slot:"reference",type:"text"},slot:"reference"},[e._v("详情")])],1),e._v(" "),e.isCurrent&&!e.publishing?n("el-button",{attrs:{type:"text"},on:{click:e.gotoDetail}},[e._v("\n    "+e._s(e.isCustom?"查看文件":"查看标注")+"\n  ")]):e._e(),e._v(" "),n("el-dropdown",{attrs:{placement:"bottom"}},[n("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"text"},on:{click:function(e){e.stopPropagation()}}},[e._v("\n      更多"),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e.isCurrent?e._e():n("el-dropdown-item",{nativeOn:{click:function(t){return e.deleteItem(t)}}},[n("el-button",{attrs:{type:"text"}},[e._v("删除")])],1),e._v(" "),n("el-dropdown-item",{directives:[{name:"click-once",rawName:"v-click-once"}],attrs:{disabled:e.publishing},nativeOn:{click:function(t){return e.download(e.row)}}},[e.publishing?n("el-tooltip",{attrs:{content:"文件生成中，请稍后",placement:"top","open-delay":400}},[n("el-button",{staticClass:"disabled-button",attrs:{type:"text"}},[e._v("\n            导出\n          ")])],1):n("el-button",{attrs:{type:"text"}},[e._v("\n          导出\n        ")])],1)],1)],1)],1)},o=[],a=n("ed09"),i=n("5c96"),s=n("ed08"),c=n("3da5"),l=n("141b"),u=n("d294"),d=Object(c["annotationBy"])("code"),f={name:"Actions",components:{TableTooltip:u["b"]},props:{row:{type:Object,default:function(){return{}}},actions:Object,showConvert:Function},setup:function(e,t){var n=e.actions,r=e.showConvert,o=t.root.$router,u=Object(a["a"])((function(){return Object(c["isPublishDataset"])(e.row)})),f=Object(a["a"])((function(){return!!e.row.isCurrent})),b=Object(a["a"])((function(){return e.row.presetFlag&&e.row.dataType!==c["dataTypeCodeMap"].CUSTOM})),p=Object(a["a"])((function(){return["NOT_CONVERTED","CONVERT_FAILED"].includes(c["conversionStateMap"][e.row.dataConversion])})),m=Object(a["a"])((function(){return e.row.isOfRecord&&"CONVERTING"===c["conversionStateMap"][e.row.dataConversion]})),v=Object(a["a"])((function(){return Object(c["isCustomDataset"])(e.row)})),O=Object(a["a"])((function(){return"".concat(e.row.name,"(").concat(e.row.versionName,")")})),w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.finished,n=e.unfinished,r=e.autoFinished,o=e.finishAutoTrack,a=t+r+o;if(0===a)return 0;var i=a+n;return"".concat(Object(s["Qb"])(a/i),"%")},y=e.row.progressVO?w(e.row.progressVO):"--",g={status:{label:"状       态",value:c["datasetStatusMap"][e.row.status].name},fileCount:{label:"文件数量",value:e.row.fileCount},progressVO:{label:"标注进度",value:y}},h=function(){var t=e.row.annotateType;if(Object(c["isCustomDataset"])(e.row)){var n=d(c["annotationMap"].Custom.code,"urlPrefix");return o.push({path:"/data/datasets/".concat(n,"/").concat(e.row.datasetId)}),!1}var r=d(t,"urlPrefix");return o.push({path:"/data/datasets/".concat(r,"/").concat(e.row.datasetId)}),!1},j=function(){Object(l["A"])({datasetId:e.row.datasetId,versionName:e.row.versionName}).then((function(){n.refresh(),i["Message"].success("切换版本成功")}))},C=function(){i["MessageBox"].confirm("是否要删除此版本?","请确认",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"}).then((function(){Object(l["f"])({datasetId:e.row.datasetId,versionName:e.row.versionName}).then((function(){n.refresh(),i["Message"].success("删除版本成功")}))}))},_=function(e){var t="dataset/".concat(e.datasetId,"/versionFile/").concat(e.versionName);return Object(s["G"])(t,"".concat(e.datasetId,"_").concat(e.versionName,".zip"),{fileName:function(e){return e.name.replace("".concat(t,"/"),"")},filter:function(n){return Object(c["isCustomDataset"])(e)?n:["COCO","YOLO"].includes(e.format)?n.filter((function(n){return n.name.startsWith("".concat(t,"/").concat(e.format))})):n.filter((function(e){return["annotation","origin"].some((function(n){return e.name.startsWith("".concat(t,"/").concat(n))}))}))}})},N=function(e){return r(e)},P=function(){Object(l["j"])({datasetId:e.row.datasetId,versionName:e.row.versionName}).then((function(){n.refresh(),i["Message"].success("开始生成OFRecord")}))},T=function(){Object(l["y"])(e.row.datasetId,e.row.versionName).then((function(){n.refresh(),i["Message"].success("已停止OFRecord转换")}))},k=function(e,t,n){return n[e].value||"--"},S=function(e,t,n){return n[e].label};return{publishing:u,isCurrent:f,isPreset:b,isCustom:v,canGenerate:p,isGenerating:m,title:O,labels:Object.keys(g),list:g,gotoDetail:h,deleteItem:C,setCurrent:j,convert:N,keyAccessor:S,valueAccessor:k,download:_,onGenerateOfRecord:P,stopGenerateOfRecord:T,showOfRecord:c["showOfRecord"]}}},b=f,p=(n("16ad"),n("84a9"),n("2877")),m=Object(p["a"])(b,r,o,!1,null,"70abd514",null);t["default"]=m.exports},ed59:function(e,t,n){}}]);