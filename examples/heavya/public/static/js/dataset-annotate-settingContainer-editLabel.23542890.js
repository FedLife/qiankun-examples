(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["dataset-annotate-settingContainer-editLabel"],{"5cbe":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-popover",{attrs:{placement:"bottom",width:"200",trigger:"click",title:"修改标签名称"},model:{value:e.state.visible,callback:function(t){e.$set(e.state,"visible",t)},expression:"state.visible"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.handleEditLabel},model:{value:e.state.value,callback:function(t){e.$set(e.state,"value",t)},expression:"state.value"}},e._l(e.labels,(function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),e._v(" "),a("i",{staticClass:"el-icon-edit primary cp dib ml-10",attrs:{slot:"reference"},slot:"reference"})],1)},n=[],i=a("ed09"),r={name:"EditLabel",props:{row:{type:Object,default:function(){return{}}},labels:{type:Array,default:function(){return[]}},handleEditLabel:Function},setup:function(e){var t=e.row,a=Object(i["n"])({visible:!1,value:t.data.categoryId});return Object(i["r"])((function(){return e.row}),(function(e){var t;Object.assign(a,{value:null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.categoryId})})),{state:a}}},s=r,o=a("2877"),c=Object(o["a"])(s,l,n,!1,null,null,null);t["default"]=c.exports}}]);