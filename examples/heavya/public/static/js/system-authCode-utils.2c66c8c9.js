(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["system-authCode-utils"],{"89b2":function(e,t,n){"use strict";n.r(t),n.d(t,"getAuthCodeColumns",(function(){return i})),n.d(t,"getQueryFormItems",(function(){return o})),n.d(t,"getPermissionFormItems",(function(){return u})),n.d(t,"permissionRules",(function(){return a}));var r=n("ed08");function i(e){var t=e.doEdit,n=e.doDelete;return[{label:"ID",prop:"id",width:80,sortable:"custom"},{label:"名称",prop:"authCode"},{label:"描述",prop:"description",minWidth:"200px"},{label:"修改时间",prop:"updateTime",type:"time",minWidth:"160px",sortable:"custom"},{label:"操作",type:"operation",width:"370px",operations:[{label:"编辑",func:t,hide:!Object(r["eb"])("system:authCode:edit")},{label:"删除",func:n,hide:!Object(r["eb"])("system:authCode:delete")}]}]}function o(e){var t,n=e.activeTab,r=e.query,i=e.resetQuery;switch(n){case"permission":t="请输入权限名称或权限码";break;case"authCode":default:t="请输入权限组名称或 ID"}return[{prop:"keyword",placeholder:t,class:"w-300",change:r},{type:"button",btnText:"重置",func:i},{type:"button",btnText:"搜索",btnType:"primary",func:r}]}function u(e){var t=e.addPermission,n=e.removePermission,r=e.index,i=e.length,o=e.formType,u="edit"===o;return[{prop:"name",label:"权限名称",placeholder:"请输入权限名称",class:"w-200"},{prop:"permission",label:"权限标识",placeholder:"请输入权限标识",class:"w-300"},{type:"button",btnType:"primary",circle:!0,hidden:r!==i-1||u,func:function(){return t(r)},icon:"el-icon-plus",size:"mini"},{type:"button",btnType:"danger",circle:!0,hidden:1===i||u,func:function(){return n(r)},icon:"el-icon-minus",size:"mini"}]}var a={name:[{required:!0,message:"请输入权限名称",trigger:"blur"},{validator:r["ac"],trigger:["blur","change"]}],permission:[{validator:Object(r["Y"])(/^[\w:]+$/,"仅支持字母、数字、下划线和英文冒号"),trigger:["blur","change"]}]}}}]);