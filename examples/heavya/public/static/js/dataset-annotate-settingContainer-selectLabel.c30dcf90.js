(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["dataset-annotate-settingContainer-selectLabel","dataset-components-labelEditor","dataset-annotate-settingContainer-labelTip"],{"0442":function(e,t,a){"use strict";a.r(t);var l=function(e,t){var a=t._c;return a("div",{staticClass:"el-form-item__label no-float tl"},[a("label",[t._v("选择系统预置标签")]),t._v(" "),a("el-tooltip",{attrs:{effect:"dark",placement:"top"}},[a("div",{attrs:{slot:"content"},slot:"content"},[a("div",{staticClass:"label-tooltip"},[a("div",{staticClass:"flex tips-wrapper f12"},[a("div",[t._v("可以选择系统预置标签，")]),t._v(" "),a("div",[t._v("或者点击下方新建标签")])])])]),t._v(" "),a("i",{staticClass:"el-icon-warning-outline",staticStyle:{color:"#2e4fde"}})])],1)},n=[],o={name:"LabelTip"},r=o,i=(a("d447"),a("2877")),s=Object(i["a"])(r,l,n,!0,null,"3e74b644",null);t["default"]=s.exports},"1bec":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",[e._t("label",[a("LabelTip")]),e._v(" "),a("div",{staticClass:"flex flex-between"},[a("InfoSelect",{staticStyle:{width:"80%"},attrs:{innerRef:e.innerRef,placeholder:"选择系统预置标签",dataSource:e.dataSource,"value-key":"value","default-first-option":"",filterable:""},on:{change:e.handleLabelSelect}})],1),e._v(" "),a("LabelEditor",{attrs:{title:"新建标签"},on:{handleOk:e.handleLabelCreate}},[a("span",{staticClass:"cp vm primary f14",attrs:{slot:"trigger"},slot:"trigger"},[e._v("新建标签")])])],2)},n=[],o=a("ed09"),r=a("ba8f"),i=a("4d05"),s=a("0442"),c={name:"SelectLabel",components:{LabelTip:s["default"],InfoSelect:r["a"],LabelEditor:i["default"]},props:{dataSource:{type:Array,default:function(){return[]}},handleLabelSelect:Function,handleLabelCreate:Function},setup:function(){var e=Object(o["o"])(null);return{innerRef:function(){return e}}}},u=c,f=a("2877"),d=Object(f["a"])(u,l,n,!1,null,null,null);t["default"]=d.exports},"2fcc":function(e,t,a){},"4d05":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-popover",{key:e.state.dialogKey,attrs:{placement:"top",width:"240",trigger:"click",title:e.props.title},on:{show:e.onShow,hide:e.onHide},model:{value:e.state.visible,callback:function(t){e.$set(e.state,"visible",t)},expression:"state.visible"}},[a("el-form",{ref:"formRef",staticStyle:{"margin-top":"20px"},attrs:{model:e.state.form,rules:e.rules,"label-width":"60px"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{ref:"inputRef",attrs:{placeholder:e.props.title},model:{value:e.state.form.name,callback:function(t){e.$set(e.state.form,"name",t)},expression:"state.form.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"颜色",prop:"color"}},[a("el-color-picker",{model:{value:e.state.form.color,callback:function(t){e.$set(e.state.form,"color",t)},expression:"state.form.color"}})],1),e._v(" "),a("div",{staticClass:"tc"},[a("el-button",{attrs:{type:"text"},on:{click:e.handleCancel}},[e._v("取消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.handleOk}},[e._v("确定")])],1)],1),e._v(" "),a("span",{attrs:{slot:"reference"},slot:"reference"},[e._t("trigger")],2)],1)},n=[],o=a("2b0e"),r=a("ed09"),i=a("61f7"),s=a("2ef0"),c={name:"LabelEditor",props:{getStyle:Function,title:String,labelData:{type:Object,default:function(){return{}}}},setup:function(e,t){var a=Object(r["o"])(null),l=Object(r["o"])(null),n=Object(r["n"])({visible:!1,dialogKey:1,form:{name:e.labelData.name||"",color:e.labelData.color||"#2e4fde"}}),c={name:[{required:!0,message:"请输入标签名称",trigger:["change","blur"]},{validator:i["p"],trigger:["change","blur"]}]},u=function(){Object.assign(n,{visible:!1,form:{name:e.labelData.name||"",color:e.labelData.color||"#2e4fde"}})},f=function(){l.value.validate().then((function(a){a&&(n.form.color===e.labelData.color&&n.form.name===e.labelData.name||t.emit("handleOk",e.labelData.id,n.form),Object(s["isNil"])(e.labelData.name)?u():Object.assign(n,{dialogKey:n.dialogKey+1}))}))},d=function(){o["default"].nextTick((function(){var e=a&&a.value.$refs.input;e&&e.focus()}))},b=function(){Object.assign(n,{dialogKey:n.dialogKey+1})};return{props:e,state:n,rules:c,inputRef:a,formRef:l,handleOk:f,handleCancel:u,onShow:d,onHide:b}}},u=c,f=a("2877"),d=Object(f["a"])(u,l,n,!1,null,null,null);t["default"]=d.exports},d447:function(e,t,a){"use strict";a("2fcc")}}]);