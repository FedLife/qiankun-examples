(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["dataset-custom-GridTable"],{"01cb":function(t,e,n){"use strict";n("19cd")},"19cd":function(t,e,n){},"496e":function(t,e,n){"use strict";n.r(e);var c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.data.length>0?n("div",{staticClass:"flex flex-wrap"},t._l(t.data,(function(e){return n("div",{key:e.name,staticClass:"mx-10 my-10",staticStyle:{width:"200px"}},[n("el-card",{attrs:{"body-style":{padding:"0px"},shadow:"hover"}},[n("el-checkbox",{staticClass:"checkbox",on:{change:function(n){return t.onChange(e)}},model:{value:t.state.checkboxGroup[e.name],callback:function(n){t.$set(t.state.checkboxGroup,e.name,n)},expression:"state.checkboxGroup[item.name]"}}),t._v(" "),n("div",{staticClass:"tc",class:""===e.browser?"":"pointer item",on:{click:function(n){return t.goDetail(e)}}},["img"===e.fileType?n("el-image",{staticClass:"mb-10 w-100 h-100",attrs:{src:t.buildFileUrl(e),alt:"item.ext",fit:"scale-down",lazy:""}}):n("IconFont",{staticClass:"mb-10",staticStyle:{"font-size":"99px"},attrs:{type:t.getIcon(e.ext)}}),t._v(" "),n("el-tooltip",{attrs:{"open-delay":1e3}},[n("div",{attrs:{slot:"content"},slot:"content"},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"ellipsis mb-10 mx-10"},[t._v("\n            "+t._s(e.name)+"\n          ")])])],1)],1)],1)})),0):n("div",{staticClass:"el-table__empty-block"},[n("span",{staticClass:"el-table__empty-text"},[t._v("暂无数据")])])},a=[],s=n("ed09"),o=n("3da5"),i={name:"GridTable",props:{data:{type:Array,default:function(){return[]}},goDetail:{type:Function,default:function(){}},buildFileUrl:{type:Function,default:function(){}},selections:{type:Array,default:function(){return[]}},changeSelection:{type:Function,default:function(){}}},setup:function(t){var e=Object(s["n"])({selections:[],checkboxGroup:{}}),n=function(){Object.keys(e.checkboxGroup).forEach((function(t){e.checkboxGroup[t]=!1})),e.selections=[]},c=function(n){e.checkboxGroup[n.name]?e.selections.push(n):e.selections=e.selections.filter((function(t){return n.name!==t.name})),t.changeSelection(e.selections)};return{state:e,onChange:c,clearSelection:n,getIcon:o["getIcon"]}}},l=i,r=(n("01cb"),n("2877")),u=Object(r["a"])(l,c,a,!1,null,"3354d292",null);e["default"]=u.exports}}]);