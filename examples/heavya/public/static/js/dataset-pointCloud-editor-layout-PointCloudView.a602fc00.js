(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["dataset-pointCloud-editor-layout-PointCloudView","dataset-pointCloud-util"],{"43a6":function(e,t,n){},b8a2:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"scene flex flex-col"},[n("div",{ref:"main",staticClass:"main-view"},[n("IconFont",{staticClass:"axes",attrs:{type:"zuobiaozhou"}})],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isMultiView,expression:"isMultiView"}],staticClass:"multi-view flex"},[n("div",{ref:"top"},[n("el-tag",{attrs:{color:"#303030"}},[e._v("俯视图")])],1),e._v(" "),n("div",{ref:"side"},[n("el-tag",{attrs:{color:"#303030"}},[e._v("正视图")])],1),e._v(" "),n("div",{ref:"front"},[n("el-tag",{attrs:{color:"#303030"}},[e._v("侧视图")])],1)]),e._v(" "),n("el-dialog",{ref:"dialogRef",staticClass:"el-modal__dark",attrs:{visible:e.state.visible,title:void 0,"close-on-click-modal":!1,top:"0",width:"300px",modal:!1},on:{"update:visible":function(t){return e.$set(e.state,"visible",t)}}},[n("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",placeholder:"请选择标签"},on:{change:e.handleChange,close:function(t){e.selectValue=null}},model:{value:e.selectValue,callback:function(t){e.selectValue=t},expression:"selectValue"}},e._l(e.labelGroups,(function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.name}})})),1)],1)],1)},r=[],l=n("ed09"),i=n("da2d");function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t=p(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){var t=f(e,"string");return"symbol"===a(t)?t:String(t)}function f(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==a(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var d={name:"PointCloudView",setup:function(){var e=Object(l["e"])(i["editorSymbol"]),t=e.value,n=t.data,o=t.view,r=Object(l["o"])(null),a=Object(l["o"])(null),u=Object(l["o"])(),s=Object(l["n"])({visible:!1,info:null}),p=Object(l["n"])({main:null,top:null,side:null,front:null}),f=Object(l["a"])((function(){return n.multiView})),d=Object(l["a"])((function(){return n.labelGroup})),b=e.value.html(),m=function(e){Object.assign(a.value.$el.firstChild.style,{top:"".concat(e.detail.clientY,"px"),left:"".concat(e.detail.clientX,"px")}),s.visible=!0,s.info=e.detail.boxInfo},v=function t(){e.value.render(),r.value=requestAnimationFrame(t)},y=function(e){var t="".concat(e," ").concat(s.info);n.setMultiView(!0),o.createBoundingBox(t,!0),s.visible=!1,u.value=null};return Object(l["k"])((function(){Object.keys(p).forEach((function(e){p[e].appendChild(b[e])})),b.main.addEventListener("annodown",m),v()})),Object(l["j"])((function(){cancelAnimationFrame(r.value),b.main.removeEventListener("annodown",m)})),c(c({},Object(l["q"])(p)),{},{state:s,isMultiView:f,dialogRef:a,labelGroups:d,selectValue:u,handleChange:y})}},b=d,m=(n("e562"),n("2877")),v=Object(m["a"])(b,o,r,!1,null,"58f1f9b6",null);t["default"]=v.exports},da2d:function(e,t,n){"use strict";n.r(t),n.d(t,"statusMap",(function(){return o})),n.d(t,"statusValueMap",(function(){return r})),n.d(t,"fileStatusMap",(function(){return l})),n.d(t,"getListColumns",(function(){return a})),n.d(t,"listQueryFormItems",(function(){return u})),n.d(t,"getStatisticsColumns",(function(){return c})),n.d(t,"editorSymbol",(function(){return s}));var o={1001:{text:"未采样",color:"purple"},1002:{text:"导入中",color:"orange"},1003:{text:"未标注",color:"purple"},1004:{text:"自动标注中",color:"orange"},1005:{text:"自动标注停止",color:"default"},1006:{text:"自动标注失败",color:"red"},1007:{text:"标注中",color:"orange"},1008:{text:"自动标注完成",color:"blue"},1009:{text:"难例发布中",color:"orange"},1010:{text:"难例发布失败",color:"red"},1011:{text:"已发布",color:"green"}},r={NOT_SAMPLED:1001,IMPORTING:1002,UNLABELLED:1003,AUTO_LABELING:1004,AUTO_LABEL_STOP:1005,AUTO_LABEL_FAILED:1006,LABELING:1007,AUTO_LABEL_COMPLETE:1008,DIFFICULT_CASE_PUBLISHING:1009,DIFFICULT_CASE_FAILED_TO_PUBLISH:1010,PUBLISHED:1011},l={101:"未标注",102:"自动标注完成",103:"手动标注中",104:"手动标注完成",undefined:"不限"},i=[{label:"全部",value:null}].concat(Object.keys(o).map((function(e){return{label:o[e].text,value:e}}))),a=function(e){return[{prop:"selections",type:"selection",fixed:!0,selectable:function(e){var t=e.status;return![r.AUTO_LABELING,r.DIFFICULT_CASE_PUBLISHING].includes(t)}},{label:"ID",prop:"id",width:80,sortable:"custom",fixed:!0},{label:"名称",prop:"name",minWidth:"150px",type:"link",func:e,fixed:!0},{label:"难例数量",prop:"difficultyCount",minWidth:"100px"},{label:"状态",prop:"status",minWidth:"200px",dropdownList:i},{label:"描述",prop:"remark",minWidth:"150px"},{label:"创建时间",prop:"createTime",type:"time",width:300},{label:"更新时间",prop:"updateTime",type:"time",width:300},{label:"操作",prop:"action",width:300,fixed:"right"}]},u=[{prop:"name",placeholder:"输入名称或ID查询",class:"w-200",change:"query"},{type:"button",btnText:"重置",func:"resetQuery"},{type:"button",btnText:"搜索",btnType:"primary",func:"query"}],c=function(){return[{label:"标签",prop:"label"},{label:"实体数量",prop:"count"}]},s=Symbol("editor")},e562:function(e,t,n){"use strict";n("43a6")}}]);