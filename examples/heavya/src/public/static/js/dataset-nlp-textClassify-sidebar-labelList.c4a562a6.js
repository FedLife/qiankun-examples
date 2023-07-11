(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["dataset-nlp-textClassify-sidebar-labelList","dataset-components-labelEditor","dataset-components-searchLabel"],{"4d05":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("el-popover",{key:e.state.dialogKey,attrs:{placement:"top",width:"240",trigger:"click",title:e.props.title},on:{show:e.onShow,hide:e.onHide},model:{value:e.state.visible,callback:function(t){e.$set(e.state,"visible",t)},expression:"state.visible"}},[l("el-form",{ref:"formRef",staticStyle:{"margin-top":"20px"},attrs:{model:e.state.form,rules:e.rules,"label-width":"60px"}},[l("el-form-item",{attrs:{label:"名称",prop:"name"}},[l("el-input",{ref:"inputRef",attrs:{placeholder:e.props.title},model:{value:e.state.form.name,callback:function(t){e.$set(e.state.form,"name",t)},expression:"state.form.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"颜色",prop:"color"}},[l("el-color-picker",{model:{value:e.state.form.color,callback:function(t){e.$set(e.state.form,"color",t)},expression:"state.form.color"}})],1),e._v(" "),l("div",{staticClass:"tc"},[l("el-button",{attrs:{type:"text"},on:{click:e.handleCancel}},[e._v("取消")]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:e.handleOk}},[e._v("确定")])],1)],1),e._v(" "),l("span",{attrs:{slot:"reference"},slot:"reference"},[e._t("trigger")],2)],1)},n=[],i=l("2b0e"),s=l("ed09"),r=l("61f7"),c=l("2ef0"),o={name:"LabelEditor",props:{getStyle:Function,title:String,labelData:{type:Object,default:function(){return{}}}},setup:function(e,t){var l=Object(s["o"])(null),a=Object(s["o"])(null),n=Object(s["n"])({visible:!1,dialogKey:1,form:{name:e.labelData.name||"",color:e.labelData.color||"#2e4fde"}}),o={name:[{required:!0,message:"请输入标签名称",trigger:["change","blur"]},{validator:r["p"],trigger:["change","blur"]}]},u=function(){Object.assign(n,{visible:!1,form:{name:e.labelData.name||"",color:e.labelData.color||"#2e4fde"}})},d=function(){a.value.validate().then((function(l){l&&(n.form.color===e.labelData.color&&n.form.name===e.labelData.name||t.emit("handleOk",e.labelData.id,n.form),Object(c["isNil"])(e.labelData.name)?u():Object.assign(n,{dialogKey:n.dialogKey+1}))}))},b=function(){i["default"].nextTick((function(){var e=l&&l.value.$refs.input;e&&e.focus()}))},f=function(){Object.assign(n,{dialogKey:n.dialogKey+1})};return{props:e,state:n,rules:o,inputRef:l,formRef:a,handleOk:d,handleCancel:u,onShow:b,onHide:f}}},u=o,d=l("2877"),b=Object(d["a"])(u,a,n,!1,null,null,null);t["default"]=b.exports},"504a":function(e,t,l){"use strict";l("9262")},"592d":function(e,t,l){},9262:function(e,t,l){},ac93:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"mb-10"},[l("div",{staticClass:"flex flex-between flex-wrap flex-vertical-align"},[l("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.showLabel,expression:"showLabel"}],staticStyle:{padding:"0","margin-bottom":"0"}},[l("label",{staticClass:"el-form-item__label"},[l("span",{staticClass:"vm"},[e._v(e._s(e.labelsTitle))]),e._v(" "),l("LabelEditor",{attrs:{title:"创建标签"},on:{handleOk:e.handleCreateLabel}},[l("i",{staticClass:"el-icon-circle-plus cp vm primary ml-4",staticStyle:{"font-size":"18px"},attrs:{slot:"trigger"},slot:"trigger"})])],1)]),e._v(" "),l("SearchLabel",{ref:"searchRef",staticStyle:{"padding-bottom":"10px"},on:{change:e.handleSearch}})],1),e._v(" "),l("div",{staticStyle:{"max-height":"200px",padding:"0 2.5px",overflow:"auto"}},[e.filteredLabels.length?l("div",[e.labelClickable?l("el-radio-group",{staticStyle:{width:"100%"},attrs:{disabled:!e.fileId},on:{change:e.handleLabelChange},model:{value:e.selectedLabel,callback:function(t){e.selectedLabel=t},expression:"selectedLabel"}},e._l(e.filteredLabels,(function(t){return l("div",{key:t.id,staticClass:"flex flex-between flex-vertical-align label-container"},[l("el-radio",{staticClass:"flex flex-vertical-align",attrs:{label:t.id}},[l("el-tag",{staticClass:"tag-item",style:e.getStyle(t),attrs:{title:t.name,color:t.color}},[e._v("\n              "+e._s(t.name)+"\n            ")])],1),e._v(" "),!e.isPresetDataset(e.type)&&e.isNil(t.labelGroupId)?l("div",{staticClass:"hover-show fr f14 g6"},[l("LabelEditor",{attrs:{title:"修改标签",labelData:t},on:{handleOk:e.editLabel}},[l("i",{staticClass:"el-icon-edit cp vm ml-4",attrs:{slot:"trigger"},slot:"trigger"})]),e._v(" "),l("i",{staticClass:"el-icon-delete cp vm",on:{click:function(l){return e.deleteLabel(t)}}})],1):e._e()],1)})),0):e._l(e.filteredLabels,(function(t){return l("div",{key:t.id,staticClass:"label-container"},[l("el-tag",{staticClass:"tag-item",style:e.getStyle(t),attrs:{title:t.name,color:t.color}},[e._v("\n            "+e._s(t.name)+"\n          ")])],1)}))],2):l("div",{staticClass:"g6 f14"},[e._v("\n      暂无标签，请添加\n    ")])])])},n=[],i=l("5c96"),s=l("ed09"),r=l("ed08"),c=l("beb6"),o=l("2ef0"),u=l("4d05"),d=l("3da5"),b={name:"LabelList",components:{SearchLabel:c["default"],LabelEditor:u["default"]},props:{labels:{type:Array,default:function(){return[]}},selectedLabels:{type:Array,default:function(){return[]}},labelClickable:{type:Boolean,default:!0},type:Number,fileId:[String,Number],replaceLabel:Function,createLabel:Function,editLabel:Function,deleteLabel:Function,updateLabels:{type:Function,default:function(){return{}}}},setup:function(e){var t,l,a=Object(s["o"])(null),n=Object(s["o"])([]),c=Object(s["o"])((null===(t=e.selectedLabels)||void 0===t||null===(l=t[0])||void 0===l?void 0:l.id)||null),u=function(t){var l=Object(r["z"])(t.color);return{color:l,display:"inline-block",width:"120px",cursor:e.labelClickable?"pointer":"unset"}},b=function(t){var l=e.labels.find((function(e){return e.id===t}));l&&e.labelClickable&&e.replaceLabel(l)},f=function(t){n.value=t?e.labels.filter((function(e){return e.name.includes(t)})):e.labels},p=Object(s["a"])((function(){return"全部标签(".concat(e.labels.length,")")})),v=Object(s["a"])((function(){return!a.value||!a.value.state.open})),m=function(t,l){e.labels.findIndex((function(e){return e.name===l.name}))>-1?i["Message"].warning("当前标签已存在"):e.createLabel(l)};return Object(s["r"])((function(){return e.labels}),(function(e){n.value=e}),{immediate:!0}),Object(s["r"])((function(){return e.selectedLabels}),(function(e){var t;c.value=(null===e||void 0===e||null===(t=e[0])||void 0===t?void 0:t.id)||null})),{searchRef:a,filteredLabels:n,selectedLabel:c,isNil:o["isNil"],isPresetDataset:d["isPresetDataset"],labelsTitle:p,getStyle:u,handleLabelChange:b,showLabel:v,handleCreateLabel:m,handleSearch:f}}},f=b,p=(l("d568"),l("2877")),v=Object(p["a"])(f,a,n,!1,null,"47686ace",null);t["default"]=v.exports},beb6:function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.onClickOutside,expression:"onClickOutside"}],staticClass:"dataset-searchLabel tr"},[e.state.open?l("div",[l("el-input",{ref:"inputRef",staticClass:"input-with-select",attrs:{placeholder:"请输入内容"},on:{change:e.search,input:e.search},model:{value:e.state.value,callback:function(t){e.$set(e.state,"value",t)},expression:"state.value"}},[l("el-button",{attrs:{slot:"append",size:"mini",icon:"el-icon-search"},on:{click:e.search},slot:"append"})],1)],1):l("i",{staticClass:"el-icon-search cp",on:{click:e.handleOpen}})])},n=[],i=l("2b0e"),s=l("ed09"),r=l("c28b"),c=l.n(r),o={name:"SearchLabel",directives:{clickOutside:c.a.directive},props:{handleSearch:Function},setup:function(e,t){var l=Object(s["o"])(null),a=Object(s["n"])({open:!1,prevValue:"",value:""}),n=function(){a.open=!0,i["default"].nextTick((function(){l.value.focus()}))},r=function(){Object.assign(a,{open:!1,value:""})},c=function(e){!e.target.closest(".dataset-searchLabel")&&a.open&&(r(),t.emit("change",""))},o=function(){a.value!==a.prevValue&&t.emit("change",a.value),i["default"].nextTick((function(){Object.assign(a,{prevValue:a.value})}))};return{state:a,handleOpen:n,onClickOutside:c,search:o,inputRef:l}}},u=o,d=(l("504a"),l("2877")),b=Object(d["a"])(u,a,n,!1,null,null,null);t["default"]=b.exports},d568:function(e,t,l){"use strict";l("592d")}}]);