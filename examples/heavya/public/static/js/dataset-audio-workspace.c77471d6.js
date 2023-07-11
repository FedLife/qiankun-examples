(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["dataset-audio-workspace","dataset-audio-workspace-audioClassify","dataset-audio-workspace-speechRecognition"],{"2a75":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n(t.component,t._g(t._b({tag:"component"},"component",t.attrs,!1),t.listeners))},o=[],i=n("ed09"),c=n("d5e5"),r=n("468d"),l={name:"WorkSpace",components:{AudioClassify:c["default"],SpeechRecognition:r["default"]},inheritAttrs:!1,props:{component:String},setup:function(t,e){var n=Object(i["a"])((function(){return e.attrs})),a=Object(i["a"])((function(){return e.listeners}));return{attrs:n,listeners:a}}},s=l,u=n("2877"),f=Object(u["a"])(s,a,o,!1,null,null,null);e["default"]=f.exports},"324a":function(t,e,n){"use strict";n("9506")},"3b04":function(t,e,n){"use strict";n("5e27")},"468d":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"hotkey",rawName:"v-hotkey.stop",value:t.keymap,expression:"keymap",modifiers:{stop:!0}}]},[n("div",{staticClass:"flex flex-between"},[n("el-tabs",{staticClass:"eltabs-inlineblock",attrs:{value:t.activeTab},on:{"tab-click":t.handlePanelClick}},[n("el-tab-pane",{attrs:{label:t.countInfoAuido.noAnnotation,name:"noAnnotation"}}),t._v(" "),n("el-tab-pane",{attrs:{label:t.countInfoAuido.haveAnnotation,name:"haveAnnotation"}})],1),t._v(" "),n("div",{staticClass:"flex flex-end f1"},[n("div",{staticClass:"ml-40 mr-10 my-auto"},[t._v("标注进度:")]),t._v(" "),n("el-progress",{staticClass:"my-auto",staticStyle:{width:"50%"},attrs:{"show-text":!1,"stroke-width":10,percentage:t.percentage}}),t._v(" "),n("div",{staticClass:"my-auto ml-10"},[t._v(t._s(t.progress))])],1)],1),t._v(" "),n("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"20px"},attrs:{shadow:"never"}},[n("div",{staticClass:"clearfix flex flex-between",staticStyle:{"line-height":"32px"},attrs:{slot:"header"},slot:"header"},[t.showCurrent?n("span",[t._v(t._s(t.current))]):t._e(),t._v(" "),n("div",{staticClass:"f1"},[n("div",{staticClass:"fr"},[n("el-button",{attrs:{disabled:!t.showPrev,type:"text"},on:{click:t.toPrev}},[t._v("上一篇("),n("i",{staticClass:"el-icon-back"}),t._v(")")]),t._v(" "),n("el-button",{attrs:{disabled:!t.showNext,type:"text"},on:{click:t.toNext}},[t._v("下一篇("),n("i",{staticClass:"el-icon-right"}),t._v(")")]),t._v(" "),n("el-popconfirm",{attrs:{title:"确认删除该音频？"},on:{onConfirm:t.deleteFile}},[n("el-button",{staticClass:"ml-10",attrs:{slot:"reference",disabled:!t.showDelete,type:"text"},slot:"reference"},[t._v("删除")])],1)],1)])]),t._v(" "),n("div",{staticClass:"text"},[t.showException?n("Exception"):t.loading?n("div",{staticClass:"flex flex-center g6",staticStyle:{"min-height":"80px"}},[t._v("\n        加载中...\n      ")]):n("div",[n("span",[t._v(t._s(t.title))]),t._v(" "),n("WaveSurfer",{staticStyle:{"margin-top":"10px"},attrs:{url:t.state.url,height:100}}),t._v(" "),n("label",{staticClass:"shift-text"},[t._v("语音转文本")]),t._v(" "),n("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"请输入语音识别内容"},model:{value:t.state.content,callback:function(e){t.$set(t.state,"content",e)},expression:"state.content"}})],1)],1)]),t._v(" "),t.fileId?n("div",{staticClass:"action-bar mt-20 flex flex-end"},[n("el-button",{attrs:{type:"primary",disabled:t.comfirmDisabled},on:{click:t.confirm}},[t._v("确认（C）")])],1):t._e()],1)},o=[],i=n("ed09"),c=n("5a6c"),r=n("46b1"),l=n("ed08"),s={name:"AudioClassifyWorkSpace",components:{WaveSurfer:c["a"],Exception:r["a"]},props:{activeTab:String,url:String,countInfo:{type:Object,default:function(){return{}}},pageInfo:{type:Object,default:function(){return{}}},loading:Boolean,deleteFile:Function,closeLabel:Function,toNext:Function,toPrev:Function,saving:Boolean,changeActiveTab:Function,fileId:[Number,String],annotation:[Array]},setup:function(t,e){var n=Object(i["n"])({activeTab:t.activeTab||"noAnnotation",url:t.url||"",content:""}),a=Object(i["a"])((function(){return{noAnnotation:"无标注信息（".concat(t.countInfo.noAnnotation,"）"),haveAnnotation:"有标注信息（".concat(t.countInfo.haveAnnotation,"）")}})),o=Object(i["a"])((function(){return n.loading||t.saving||!t.fileId})),c=Object(i["a"])((function(){var e=t.countInfo.noAnnotation+t.countInfo.haveAnnotation;return 0===e?0:t.countInfo.haveAnnotation/e*100})),r=Object(i["a"])((function(){return"".concat(t.countInfo.haveAnnotation,"/").concat(t.countInfo.haveAnnotation+t.countInfo.noAnnotation)})),s=function(t){var e=Object(l["z"])(t.color);return{color:e,border:"none"}},u=Object(i["a"])((function(){return t.pageInfo.total>0})),f=Object(i["a"])((function(){return"当前音频顺序：".concat(t.pageInfo.current)})),v=Object(i["a"])((function(){return t.pageInfo.current>1})),b=Object(i["a"])((function(){return t.pageInfo.current<t.pageInfo.total})),d=Object(i["a"])((function(){return t.pageInfo.total>0})),p=Object(i["a"])((function(){return!1===t.loading&&""===n.url})),h=Object(i["a"])((function(){return n.url.substring(n.url.lastIndexOf("/")+1)})),m=function(e){t.changeActiveTab(e)},g=function(){o.value||e.emit("confirm",{annotation:n.content.length?[{content:n.content}]:null})},_=Object(i["a"])((function(){return{c:g}}));return Object(i["r"])((function(){return t.url}),(function(t){n.url=t})),Object(i["r"])((function(){return t.activeTab}),(function(t){n.activeTab=t})),Object(i["r"])((function(){return t.fileId}),(function(){var e=Array.isArray(t.annotation)&&t.annotation.length>0;Object.assign(n,{content:e?t.annotation[0].content:""})})),{state:n,showException:p,showDelete:d,getStyle:s,showPrev:v,showNext:b,countInfoAuido:a,percentage:c,progress:r,title:h,handlePanelClick:m,showCurrent:u,current:f,comfirmDisabled:o,confirm:g,keymap:_}}},u=s,f=(n("3b04"),n("2877")),v=Object(f["a"])(u,a,o,!1,null,null,null);e["default"]=v.exports},"5e27":function(t,e,n){},9506:function(t,e,n){},d5e5:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"hotkey",rawName:"v-hotkey.stop",value:t.keymap,expression:"keymap",modifiers:{stop:!0}}]},[n("div",{staticClass:"flex flex-between"},[n("el-tabs",{staticClass:"eltabs-inlineblock",attrs:{value:t.activeTab},on:{"tab-click":t.handlePanelClick}},[n("el-tab-pane",{attrs:{label:t.countInfoAuido.noAnnotation,name:"noAnnotation"}}),t._v(" "),n("el-tab-pane",{attrs:{label:t.countInfoAuido.haveAnnotation,name:"haveAnnotation"}})],1),t._v(" "),n("div",{staticClass:"flex flex-end f1"},[n("div",{staticClass:"ml-40 mr-10 my-auto"},[t._v("标注进度:")]),t._v(" "),n("el-progress",{staticClass:"my-auto",staticStyle:{width:"50%"},attrs:{"show-text":!1,"stroke-width":10,percentage:t.percentage}}),t._v(" "),n("div",{staticClass:"my-auto ml-10"},[t._v(t._s(t.progress))])],1)],1),t._v(" "),n("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"20px"},attrs:{shadow:"never"}},[n("div",{staticClass:"clearfix flex flex-between",staticStyle:{"line-height":"32px"},attrs:{slot:"header"},slot:"header"},[n("div",{staticClass:"f1"},[n("span",{staticClass:"vm"},[t._v("已选择标签：")]),t._v(" "),t.availLabel?n("el-tag",{staticClass:"text-label vm",style:t.getStyle(t.availLabel),attrs:{color:t.availLabel.color,closable:"","disable-transitions":"",title:t.availLabel.name},on:{close:function(e){return t.closeLabel(t.availLabel)}}},[t._v("\n          "+t._s(t.sliceTag(t.availLabel.name))+"\n        ")]):n("span",{staticClass:"g9 vm"},[t._v("请在右侧选择标签")])],1),t._v(" "),t.showCurrent?n("span",[t._v(t._s(t.current))]):t._e(),t._v(" "),n("div",{staticClass:"f1"},[n("div",{staticClass:"fr"},[n("el-button",{attrs:{disabled:!t.showPrev,type:"text"},on:{click:t.toPrev}},[t._v("上一篇("),n("i",{staticClass:"el-icon-back"}),t._v(")")]),t._v(" "),n("el-button",{attrs:{disabled:!t.showNext,type:"text"},on:{click:t.toNext}},[t._v("下一篇("),n("i",{staticClass:"el-icon-right"}),t._v(")")]),t._v(" "),n("el-popconfirm",{attrs:{title:"确认删除该音频？"},on:{onConfirm:t.deleteFile}},[n("el-button",{staticClass:"ml-10",attrs:{slot:"reference",disabled:!t.showDelete,type:"text"},slot:"reference"},[t._v("删除")])],1)],1)])]),t._v(" "),n("div",{staticClass:"text"},[t.showException?n("Exception"):t.loading?n("div",{staticClass:"flex flex-center g6",staticStyle:{"min-height":"80px"}},[t._v("\n        加载中...\n      ")]):n("div",[n("span",[t._v(t._s(t.title))]),t._v(" "),n("WaveSurfer",{attrs:{url:t.state.url}})],1)],1)]),t._v(" "),t.fileId?n("div",{staticClass:"action-bar mt-20 flex flex-end"},[n("el-button",{attrs:{type:"primary",disabled:t.comfirmDisabled},on:{click:t.confirm}},[t._v("确认（C）")])],1):t._e()],1)},o=[],i=n("ed09"),c=n("5a6c"),r=n("46b1"),l=n("ed08"),s={name:"AudioClassifyWorkSpace",components:{WaveSurfer:c["a"],Exception:r["a"]},props:{activeTab:String,url:String,availLabel:{type:Object,default:function(){return{}}},countInfo:{type:Object,default:function(){return{}}},pageInfo:{type:Object,default:function(){return{}}},loading:Boolean,deleteFile:Function,closeLabel:Function,toNext:Function,toPrev:Function,saving:Boolean,changeActiveTab:Function,fileId:[Number,String]},setup:function(t,e){var n=Object(i["n"])({activeTab:t.activeTab||"noAnnotation",url:t.url||""}),a=Object(i["a"])((function(){return{noAnnotation:"无标注信息（".concat(t.countInfo.noAnnotation,"）"),haveAnnotation:"有标注信息（".concat(t.countInfo.haveAnnotation,"）")}})),o=Object(i["a"])((function(){return n.loading||t.saving||!t.fileId})),c=Object(i["a"])((function(){var e=t.countInfo.noAnnotation+t.countInfo.haveAnnotation;return 0===e?0:t.countInfo.haveAnnotation/e*100})),r=Object(i["a"])((function(){return"".concat(t.countInfo.haveAnnotation,"/").concat(t.countInfo.haveAnnotation+t.countInfo.noAnnotation)})),s=function(t){return t.length<12?t:"".concat(t.slice(0,12),"...")},u=function(t){var e=Object(l["z"])(t.color);return{color:e,border:"none"}},f=Object(i["a"])((function(){return t.pageInfo.total>0})),v=Object(i["a"])((function(){return"当前音频顺序：".concat(t.pageInfo.current)})),b=Object(i["a"])((function(){return t.pageInfo.current>1})),d=Object(i["a"])((function(){return t.pageInfo.current<t.pageInfo.total})),p=Object(i["a"])((function(){return t.pageInfo.total>0})),h=Object(i["a"])((function(){return!1===t.loading&&""===n.url})),m=Object(i["a"])((function(){return n.url.substring(n.url.lastIndexOf("/")+1).split("?")[0]})),g=function(e){t.changeActiveTab(e)},_=function(){o.value||e.emit("confirm",{annotation:t.availLabel?[{category_id:t.availLabel.id,score:1}]:null})},x=Object(i["a"])((function(){return{c:_}}));return Object(i["r"])((function(){return t.url}),(function(t){n.url=t})),Object(i["r"])((function(){return t.activeTab}),(function(t){n.activeTab=t})),{state:n,showException:h,showDelete:p,getStyle:u,showPrev:b,showNext:d,countInfoAuido:a,percentage:c,progress:r,title:m,handlePanelClick:g,showCurrent:f,current:v,comfirmDisabled:o,confirm:_,keymap:x,sliceTag:s}}},u=s,f=(n("324a"),n("2877")),v=Object(f["a"])(u,a,o,!1,null,null,null);e["default"]=v.exports}}]);