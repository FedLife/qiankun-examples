(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["dataset-pointCloud-editor-layout-Header","dataset-pointCloud-util"],{"54d4":function(t,n,e){"use strict";e.d(n,"m",(function(){return u})),e.d(n,"d",(function(){return a})),e.d(n,"j",(function(){return c})),e.d(n,"h",(function(){return d})),e.d(n,"e",(function(){return i})),e.d(n,"q",(function(){return l})),e.d(n,"p",(function(){return p})),e.d(n,"b",(function(){return s})),e.d(n,"c",(function(){return f})),e.d(n,"o",(function(){return O})),e.d(n,"n",(function(){return b})),e.d(n,"f",(function(){return m})),e.d(n,"k",(function(){return L})),e.d(n,"a",(function(){return T})),e.d(n,"r",(function(){return h})),e.d(n,"g",(function(){return C})),e.d(n,"i",(function(){return I})),e.d(n,"l",(function(){return _}));var o=e("b775"),r=e("f121");function u(t){return Object(o["a"])({url:"/".concat(r["a"].POINT_CLOUD,"/datasets/pointCloud"),method:"get",params:t})}function a(t){return Object(o["a"])({url:"/".concat(r["a"].POINT_CLOUD,"/datasets/pointCloud"),method:"post",data:t})}function c(t){return Object(o["a"])({url:"/".concat(r["a"].POINT_CLOUD,"/datasets/pointCloud"),method:"put",data:t})}function d(t){return Object(o["a"])({url:"/".concat(r["a"].POINT_CLOUD,"/files/difficult/publish"),method:"post",data:t})}function i(t){return Object(o["a"])({url:"/".concat(r["a"].POINT_CLOUD,"/datasets/pointCloud"),method:"delete",data:{ids:t}})}function l(t){return Object(o["a"])({url:"/".concat(r["a"].POINT_CLOUD,"/datasets/pointCloud/queryByIds"),method:"get",params:t})}function p(t){return Object(o["a"])({url:"/".concat(r["a"].POINT_CLOUD,"/datasets/pointCloud/publish"),method:"post",data:t})}function s(t){return Object(o["a"])({url:"/".concat(r["a"].POINT_CLOUD,"/datasets/pointCloud/auto"),method:"post",data:t})}function f(t){return Object(o["a"])({url:"/".concat(r["a"].POINT_CLOUD,"/datasets/pointCloud/stop"),method:"post",data:t})}function O(t){return Object(o["a"])({url:"/".concat(r["a"].POINT_CLOUD,"/datasets/pointCloud/logs"),method:"get",params:t})}function b(t){return Object(o["a"])({url:"/".concat(r["a"].POINT_CLOUD,"/datasets/pointCloud/pod/").concat(t),method:"get"})}function m(t){return Object(o["a"])({url:"/".concat(r["a"].POINT_CLOUD,"/datasets/pointCloud/details/").concat(t),method:"get"})}function L(t){return Object(o["a"])({url:"/".concat(r["a"].POINT_CLOUD,"/files"),method:"get",params:t})}function T(t){return Object(o["a"])({url:"/".concat(r["a"].POINT_CLOUD,"/files/info"),method:"get",params:t})}function h(t){return Object(o["a"])({url:"/".concat(r["a"].POINT_CLOUD,"/files/save"),method:"post",data:t})}function C(t){return Object(o["a"])({url:"/".concat(r["a"].POINT_CLOUD,"/files/difficult"),method:"post",data:t})}function I(t){return Object(o["a"])({url:"/".concat(r["a"].POINT_CLOUD,"/files/done"),method:"post",data:t})}function _(t){return Object(o["a"])({url:"/".concat(r["a"].POINT_CLOUD,"/datasets/pointCloud/list"),method:"get",params:t})}},da2d:function(t,n,e){"use strict";e.r(n),e.d(n,"statusMap",(function(){return o})),e.d(n,"statusValueMap",(function(){return r})),e.d(n,"fileStatusMap",(function(){return u})),e.d(n,"getListColumns",(function(){return c})),e.d(n,"listQueryFormItems",(function(){return d})),e.d(n,"getStatisticsColumns",(function(){return i})),e.d(n,"editorSymbol",(function(){return l}));var o={1001:{text:"未采样",color:"purple"},1002:{text:"导入中",color:"orange"},1003:{text:"未标注",color:"purple"},1004:{text:"自动标注中",color:"orange"},1005:{text:"自动标注停止",color:"default"},1006:{text:"自动标注失败",color:"red"},1007:{text:"标注中",color:"orange"},1008:{text:"自动标注完成",color:"blue"},1009:{text:"难例发布中",color:"orange"},1010:{text:"难例发布失败",color:"red"},1011:{text:"已发布",color:"green"}},r={NOT_SAMPLED:1001,IMPORTING:1002,UNLABELLED:1003,AUTO_LABELING:1004,AUTO_LABEL_STOP:1005,AUTO_LABEL_FAILED:1006,LABELING:1007,AUTO_LABEL_COMPLETE:1008,DIFFICULT_CASE_PUBLISHING:1009,DIFFICULT_CASE_FAILED_TO_PUBLISH:1010,PUBLISHED:1011},u={101:"未标注",102:"自动标注完成",103:"手动标注中",104:"手动标注完成",undefined:"不限"},a=[{label:"全部",value:null}].concat(Object.keys(o).map((function(t){return{label:o[t].text,value:t}}))),c=function(t){return[{prop:"selections",type:"selection",fixed:!0,selectable:function(t){var n=t.status;return![r.AUTO_LABELING,r.DIFFICULT_CASE_PUBLISHING].includes(n)}},{label:"ID",prop:"id",width:80,sortable:"custom",fixed:!0},{label:"名称",prop:"name",minWidth:"150px",type:"link",func:t,fixed:!0},{label:"难例数量",prop:"difficultyCount",minWidth:"100px"},{label:"状态",prop:"status",minWidth:"200px",dropdownList:a},{label:"描述",prop:"remark",minWidth:"150px"},{label:"创建时间",prop:"createTime",type:"time",width:300},{label:"更新时间",prop:"updateTime",type:"time",width:300},{label:"操作",prop:"action",width:300,fixed:"right"}]},d=[{prop:"name",placeholder:"输入名称或ID查询",class:"w-200",change:"query"},{type:"button",btnText:"重置",func:"resetQuery"},{type:"button",btnText:"搜索",btnType:"primary",func:"query"}],i=function(){return[{label:"标签",prop:"label"},{label:"实体数量",prop:"count"}]},l=Symbol("editor")},fcbd:function(t,n,e){"use strict";e.d(n,"a",(function(){return u})),e.d(n,"e",(function(){return a})),e.d(n,"c",(function(){return d})),e.d(n,"b",(function(){return i})),e.d(n,"g",(function(){return p})),e.d(n,"f",(function(){return s})),e.d(n,"h",(function(){return f}));var o=e("b775"),r=e("f121");function u(t){return Object(o["a"])({url:"/".concat(r["a"].DATA,"/labelGroup"),method:"post",data:t})}function a(t){return Object(o["a"])({url:"/".concat(r["a"].DATA,"/labelGroup/").concat(t.id),method:"put",data:t})}function c(t){return Object(o["a"])({url:"/".concat(r["a"].DATA,"/labelGroup"),method:"delete",data:{ids:t}})}function d(t){return Object(o["a"])({url:"/".concat(r["a"].DATA,"/labelGroup/copy"),method:"post",data:t})}function i(t){return Object(o["a"])({url:"/".concat(r["a"].DATA,"/labelGroup/convertPreset"),method:"post",data:t})}function l(t){return Object(o["a"])({url:"/".concat(r["a"].DATA,"/labelGroup/query"),method:"get",params:t})}function p(t){return new Promise((function(t,n){setTimeout((function(){t([])}),200)}))}function s(t){return Object(o["a"])({url:"/".concat(r["a"].DATA,"/labelGroup/").concat(t),method:"get"})}function f(t){return o["a"].post("/".concat(r["a"].DATA,"/labelGroup/import"),t,{headers:{"Content-Type":"multipart/form-data"}})}n["d"]={list:l,add:u,del:c,edit:a}}}]);