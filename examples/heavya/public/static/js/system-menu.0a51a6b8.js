(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["system-menu"],{"156b":function(e,t,r){"use strict";var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("PrismEditor",e._g(e._b({ref:"editorRef",staticClass:"code-editor",attrs:{highlight:e.highlighter}},"PrismEditor",e.attrs,!1),e.listeners))},n=[],a=r("ed09"),l=r("e57a"),i=(r("cabf"),r("8c7a"));r("cb55"),r("416b"),r("84bf");function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t=p(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){var t=f(e,"string");return"symbol"===s(t)?t:String(t)}function f(e,t){if("object"!==s(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==s(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var d={name:"Editor",components:{PrismEditor:l["a"]},inheritAttrs:!1,model:{prop:"value",event:"change"},setup:function(e,t){var r=Object(a["o"])(null),o=Object(a["a"])((function(){return t.attrs})),n=function(e){return Object(i["highlight"])(e,i["languages"].js)},l=function(){return r.value.codeData},s=function(e){t.emit("change",e)},c=Object(a["a"])((function(){return u(u({},t.listeners),{},{input:s})}));return{attrs:o,listeners:c,highlighter:n,editorRef:r,getValue:l}}},b=d,h=(r("d2c7"),r("2877")),g=Object(h["a"])(b,o,n,!1,null,"658c1b62",null);t["a"]=g.exports},"3ad2":function(e,t,r){},9354:function(e,t,r){"use strict";t["a"]={data:function(){return{pickerOptions:{disabledDate:function(e){return e.getTime()>(new Date).setHours(23,59,59,999)}}}}}},a6dc:function(e,t,r){"use strict";r.d(t,"b",(function(){return a}));var o=r("b775"),n=r("f121");function a(){return Object(o["a"])({url:"/".concat(n["a"].ADMIN,"/menus/tree"),method:"get"})}function l(e){return Object(o["a"])({url:"/".concat(n["a"].ADMIN,"/menus"),method:"get",params:e})}function i(e){return Object(o["a"])({url:"/".concat(n["a"].ADMIN,"/menus"),method:"post",data:e})}function s(e){return Object(o["a"])({url:"/".concat(n["a"].ADMIN,"/menus"),method:"delete",data:{ids:e}})}function c(e){return Object(o["a"])({url:"/".concat(n["a"].ADMIN,"/menus"),method:"put",data:e})}t["a"]={list:l,add:i,edit:c,del:s,getMenusTree:a}},bac3:function(e,t,r){},d2c7:function(e,t,r){"use strict";r("bac3")},f4d7:function(e,t,r){"use strict";r("3ad2")},f794:function(e,t,r){"use strict";r.r(t);var o,n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("div",{staticClass:"head-container"},[r("cdOperation",[r("span",{attrs:{slot:"right"},slot:"right"},[r("el-input",{staticClass:"filter-item",staticStyle:{width:"230px"},attrs:{clearable:"",placeholder:"输入菜单名称或路由地址搜索"},on:{change:e.crud.toQuery},model:{value:e.query.blurry,callback:function(t){e.$set(e.query,"blurry",t)},expression:"query.blurry"}}),e._v(" "),r("el-date-picker",{staticClass:"date-item",attrs:{"default-time":["00:00:00","23:59:59"],type:"daterange","range-separator":":","value-format":"timestamp","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},on:{change:e.crud.toQuery},model:{value:e.query.createTime,callback:function(t){e.$set(e.query,"createTime",t)},expression:"query.createTime"}}),e._v(" "),r("rrOperation")],1)])],1),e._v(" "),r("BaseModal",{attrs:{"before-close":e.crud.cancelCU,visible:e.crud.status.cu>0,title:e.crud.status.title,loading:2===e.crud.status.cu,width:"800px"},on:{cancel:e.crud.cancelCU,ok:e.crud.submitCU}},[r("el-form",{ref:"form",attrs:{inline:!0,model:e.form,rules:e.rules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"菜单类型",prop:"type"}},[r("el-radio-group",{staticClass:"long-item",attrs:{disabled:e.isEdit},on:{change:e.onChangeType},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[r("el-radio-button",{attrs:{label:"0"}},[e._v("目录")]),e._v(" "),r("el-radio-button",{attrs:{label:"1"}},[e._v("页面")]),e._v(" "),r("el-radio-button",{attrs:{label:"3"}},[e._v("外链")])],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"菜单标题",prop:"name"}},[r("el-input",{staticClass:"short-item",attrs:{placeholder:"菜单标题",maxlength:"50","show-word-limit":""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"菜单图标",prop:"icon"}},[r("el-autocomplete",{staticClass:"short-item",attrs:{"fetch-suggestions":e.querySearch,placeholder:"点击选择图标",readonly:""},on:{select:e.handleSelect},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.item;return[r("IconFont",{attrs:{type:o.value}}),e._v(" "),r("span",{staticStyle:{"margin-left":"5px"}},[e._v(e._s(o.value))])]}}]),model:{value:e.form.icon,callback:function(t){e.$set(e.form,"icon",t)},expression:"form.icon"}},[e.form.icon?r("IconFont",{style:{marginLeft:"5px"},attrs:{slot:"prefix",type:e.form.icon},slot:"prefix"}):r("i",{staticClass:"el-icon-search el-input__icon",attrs:{slot:"prefix"},slot:"prefix"})],1)],1),e._v(" "),r("el-form-item",{attrs:{label:"上级菜单",prop:"pid"}},[r("treeselect",{staticClass:"short-item",attrs:{defaultExpandLevel:1,clearable:!1,searchable:!1,options:e.menus,placeholder:"选择上级类目"},model:{value:e.form.pid,callback:function(t){e.$set(e.form,"pid",t)},expression:"form.pid"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"菜单排序",prop:"sort"}},[r("el-input-number",{attrs:{min:0,max:999},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",e._n(t))},expression:"form.sort"}})],1),e._v(" "),e.isLink?e._e():r("el-form-item",{attrs:{label:"路由地址",prop:"path"}},[r("el-input",{staticClass:"short-item",attrs:{placeholder:"相对上级菜单的路由地址",maxlength:"50","show-word-limit":""},model:{value:e.form.path,callback:function(t){e.$set(e.form,"path",t)},expression:"form.path"}})],1),e._v(" "),e.isLink?r("el-form-item",{attrs:{label:"链接地址",prop:"path"}},[r("el-input",{staticClass:"long-item",attrs:{placeholder:"以http(s)://开头",maxlength:"100","show-word-limit":""},model:{value:e.form.path,callback:function(t){e.$set(e.form,"path",t)},expression:"form.path"}})],1):e._e(),e._v(" "),e.isLink?r("el-form-item",{attrs:{label:"外链 ID",prop:"componentName"}},[r("el-input",{staticClass:"short-item",attrs:{placeholder:"外链 ID",maxlength:"50","show-word-limit":""},model:{value:e.form.componentName,callback:function(t){e.$set(e.form,"componentName",t)},expression:"form.componentName"}})],1):e._e(),e._v(" "),e.isLink?e._e():r("el-form-item",{attrs:{label:"权限标识",prop:"permission"}},[r("el-input",{staticClass:"short-item",attrs:{placeholder:"权限标识",maxlength:"50","show-word-limit":""},model:{value:e.form.permission,callback:function(t){e.$set(e.form,"permission",t)},expression:"form.permission"}})],1),e._v(" "),e.isPage?r("el-form-item",{attrs:{label:"路由名称",prop:"componentName"}},[r("el-input",{staticClass:"short-item",attrs:{placeholder:"路由名称",maxlength:"50","show-word-limit":""},model:{value:e.form.componentName,callback:function(t){e.$set(e.form,"componentName",t)},expression:"form.componentName"}})],1):e._e(),e._v(" "),e.isPage?r("el-form-item",{attrs:{label:"组件路径",prop:"component"}},[r("el-input",{staticClass:"short-item",attrs:{placeholder:"相对/src/views/的路径",maxlength:"50","show-word-limit":""},model:{value:e.form.component,callback:function(t){e.$set(e.form,"component",t)},expression:"form.component"}})],1):e._e(),e._v(" "),e.isPage?r("el-form-item",{attrs:{label:"页面布局",prop:"layout"}},[r("el-select",{staticClass:"short-item",attrs:{placeholder:"页面布局",clearable:""},model:{value:e.form.layout,callback:function(t){e.$set(e.form,"layout",t)},expression:"form.layout"}},e._l(e.dict.Layout,(function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1):e._e(),e._v(" "),e.isPage?r("el-form-item",{staticClass:"short-item",attrs:{label:"隐藏菜单",prop:"hidden"}},[r("el-switch",{model:{value:e.form.hidden,callback:function(t){e.$set(e.form,"hidden",t)},expression:"form.hidden"}})],1):e._e(),e._v(" "),e.isPage?r("el-form-item",{attrs:{label:"扩展配置",prop:"extConfig"}},[r("Editor",{ref:"editorRef",staticClass:"code-editor long-item el-input__inner",attrs:{placeholder:"扩展配置支持 JSON 格式"},on:{change:e.handleCodeChange},model:{value:e.form.extConfig,callback:function(t){e.$set(e.form,"extConfig",t)},expression:"form.extConfig"}})],1):e._e()],1)],1),e._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.crud.loading,expression:"crud.loading"}],ref:"table",attrs:{data:e.crud.data,"tree-props":{children:"children",hasChildren:"hasChildren"},"row-key":"id"},on:{select:e.crud.selectChange,"select-all":e.crud.selectAllChange,"selection-change":e.crud.selectionChangeHandler}},[r("el-table-column",{attrs:{type:"selection",width:"40"}}),e._v(" "),r("el-table-column",{attrs:{prop:"icon",label:"菜单名称","min-width":"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.icon?r("IconFont",{attrs:{type:t.row.icon}}):e._e(),e._v(" "),r("span",[e._v(e._s(t.row.name))])]}}])}),e._v(" "),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"path",label:"路由地址"}}),e._v(" "),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"componentName",label:"路由名称"}}),e._v(" "),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"component",label:"组件路径"}}),e._v(" "),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"layout",label:"页面布局"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.dict.label.Layout[t.row.layout])+"\n      ")]}}])}),e._v(" "),r("el-table-column",{attrs:{"show-overflow-tooltip":"",prop:"permission",label:"权限标识"}}),e._v(" "),r("el-table-column",{attrs:{prop:"hidden",label:"隐藏",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(1===t.row.type?t.row.hidden?"是":"否":"--")+"\n      ")]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"sort",align:"center",label:"排序",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.sort)+"\n      ")]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"createTime",label:"创建时间",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(e.parseTime(t.row.createTime)))])]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"操作",width:"120",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("udOperation",{attrs:{data:t.row,"show-edit":e.hasPermission("system:menu:edit"),"show-delete":e.hasPermission("system:menu:delete"),msg:"确定删除吗,如果存在下级节点则一并删除，此操作不能撤销！"}})]}}])})],1)],1)},a=[],l=r("7026"),i=r.n(l),s=r("c6db"),c=r("4f59"),u=r("5897"),m=r("8414"),p=r("156b"),f=r("ed08"),d=r("a6dc"),b=r("b487"),h=r("9354"),g=r("f109");r("542c");function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t,r){return t=O(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e){var t=j(e,"string");return"symbol"===v(t)?t:String(t)}function j(e,t){if("object"!==v(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==v(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var x={id:null,name:null,sort:999,path:null,component:null,componentName:null,layout:null,roles:[],pid:0,icon:null,cache:!1,hidden:!1,type:0,permission:null,extConfig:""},C=function(e,t,r){""===t?r():Object(f["Yb"])(e,t,r)},k={name:"Menu",components:{BaseModal:g["a"],Treeselect:i.a,cdOperation:u["a"],rrOperation:c["a"],udOperation:m["a"],Editor:p["a"]},cruds:function(){return Object(s["b"])({title:"菜单",crudMethod:_({},d["a"]),optShow:{add:Object(f["eb"])("system:menu:create"),del:Object(f["eb"])("system:menu:delete")}})},mixins:[Object(s["f"])(),Object(s["d"])(),Object(s["c"])(x),Object(s["a"])(),h["a"]],data:function(){return{menus:[],isEdit:!1,rules:{name:[{required:!0,message:"请输入名称",trigger:"blur"},{validator:f["Zb"],trigger:"blur"}],path:[{required:!0,message:"请输入地址",trigger:"blur"},{validator:f["bc"],trigger:"blur"}],component:[{required:!0,message:"请输入组件路径",trigger:"blur"},{validator:f["bc"],trigger:"blur"}],componentName:[{required:!0,message:"请输入路由名称",trigger:"blur"},{validator:f["Zb"],trigger:"blur"}],permission:[{required:!1,message:"请输入权限标识",trigger:"blur"},{validator:f["bc"],trigger:"blur"}],pid:[{required:!0,message:"请选择上级菜单",trigger:"blur"}],layout:[{required:!0,message:"请选择页面布局",trigger:"blur"}],extConfig:[{validator:C,trigger:"change"}]}}},dicts:["Layout"],computed:{isDir:function(){return"0"===String(this.form.type)},isPage:function(){return"1"===String(this.form.type)},isLink:function(){return"3"===String(this.form.type)}},methods:(o={hasPermission:f["eb"]},w(o,s["b"].HOOK.afterToCU,(function(){var e=this;Object(d["b"])().then((function(t){e.menus=[];var r={id:0,label:"根类目",children:[]};r.children=t,e.menus.push(r)}))})),w(o,s["b"].HOOK.beforeToAdd,(function(){this.isEdit=!1})),w(o,s["b"].HOOK.beforeToEdit,(function(){this.isEdit=!0})),w(o,"querySearch",(function(e,t){t(b["b"].map((function(e){return{value:e}})))})),w(o,"handleSelect",(function(e){this.form.icon=e.value})),w(o,"onChangeType",(function(e){this.crud.resetForm(),this.$refs.form.clearValidate(),this.crud.form.type=e})),w(o,"setCode",(function(e){this.form.extConfig=e})),w(o,"handleCodeChange",(function(e){this.setCode(e),this.$refs.form.validateField("extConfig")})),o)},S=k,P=(r("f4d7"),r("2877")),E=Object(P["a"])(S,n,a,!1,null,"104b45a2",null);t["default"]=E.exports}}]);