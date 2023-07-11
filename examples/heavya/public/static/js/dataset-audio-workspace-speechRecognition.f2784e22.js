(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["dataset-audio-workspace-speechRecognition"],{"3b04":function(t,n,e){"use strict";e("5e27")},"468d":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"hotkey",rawName:"v-hotkey.stop",value:t.keymap,expression:"keymap",modifiers:{stop:!0}}]},[e("div",{staticClass:"flex flex-between"},[e("el-tabs",{staticClass:"eltabs-inlineblock",attrs:{value:t.activeTab},on:{"tab-click":t.handlePanelClick}},[e("el-tab-pane",{attrs:{label:t.countInfoAuido.noAnnotation,name:"noAnnotation"}}),t._v(" "),e("el-tab-pane",{attrs:{label:t.countInfoAuido.haveAnnotation,name:"haveAnnotation"}})],1),t._v(" "),e("div",{staticClass:"flex flex-end f1"},[e("div",{staticClass:"ml-40 mr-10 my-auto"},[t._v("标注进度:")]),t._v(" "),e("el-progress",{staticClass:"my-auto",staticStyle:{width:"50%"},attrs:{"show-text":!1,"stroke-width":10,percentage:t.percentage}}),t._v(" "),e("div",{staticClass:"my-auto ml-10"},[t._v(t._s(t.progress))])],1)],1),t._v(" "),e("el-card",{staticClass:"box-card",staticStyle:{"margin-top":"20px"},attrs:{shadow:"never"}},[e("div",{staticClass:"clearfix flex flex-between",staticStyle:{"line-height":"32px"},attrs:{slot:"header"},slot:"header"},[t.showCurrent?e("span",[t._v(t._s(t.current))]):t._e(),t._v(" "),e("div",{staticClass:"f1"},[e("div",{staticClass:"fr"},[e("el-button",{attrs:{disabled:!t.showPrev,type:"text"},on:{click:t.toPrev}},[t._v("上一篇("),e("i",{staticClass:"el-icon-back"}),t._v(")")]),t._v(" "),e("el-button",{attrs:{disabled:!t.showNext,type:"text"},on:{click:t.toNext}},[t._v("下一篇("),e("i",{staticClass:"el-icon-right"}),t._v(")")]),t._v(" "),e("el-popconfirm",{attrs:{title:"确认删除该音频？"},on:{onConfirm:t.deleteFile}},[e("el-button",{staticClass:"ml-10",attrs:{slot:"reference",disabled:!t.showDelete,type:"text"},slot:"reference"},[t._v("删除")])],1)],1)])]),t._v(" "),e("div",{staticClass:"text"},[t.showException?e("Exception"):t.loading?e("div",{staticClass:"flex flex-center g6",staticStyle:{"min-height":"80px"}},[t._v("\n        加载中...\n      ")]):e("div",[e("span",[t._v(t._s(t.title))]),t._v(" "),e("WaveSurfer",{staticStyle:{"margin-top":"10px"},attrs:{url:t.state.url,height:100}}),t._v(" "),e("label",{staticClass:"shift-text"},[t._v("语音转文本")]),t._v(" "),e("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"请输入语音识别内容"},model:{value:t.state.content,callback:function(n){t.$set(t.state,"content",n)},expression:"state.content"}})],1)],1)]),t._v(" "),t.fileId?e("div",{staticClass:"action-bar mt-20 flex flex-end"},[e("el-button",{attrs:{type:"primary",disabled:t.comfirmDisabled},on:{click:t.confirm}},[t._v("确认（C）")])],1):t._e()],1)},o=[],i=e("ed09"),c=e("5a6c"),r=e("46b1"),s=e("ed08"),l={name:"AudioClassifyWorkSpace",components:{WaveSurfer:c["a"],Exception:r["a"]},props:{activeTab:String,url:String,countInfo:{type:Object,default:function(){return{}}},pageInfo:{type:Object,default:function(){return{}}},loading:Boolean,deleteFile:Function,closeLabel:Function,toNext:Function,toPrev:Function,saving:Boolean,changeActiveTab:Function,fileId:[Number,String],annotation:[Array]},setup:function(t,n){var e=Object(i["n"])({activeTab:t.activeTab||"noAnnotation",url:t.url||"",content:""}),a=Object(i["a"])((function(){return{noAnnotation:"无标注信息（".concat(t.countInfo.noAnnotation,"）"),haveAnnotation:"有标注信息（".concat(t.countInfo.haveAnnotation,"）")}})),o=Object(i["a"])((function(){return e.loading||t.saving||!t.fileId})),c=Object(i["a"])((function(){var n=t.countInfo.noAnnotation+t.countInfo.haveAnnotation;return 0===n?0:t.countInfo.haveAnnotation/n*100})),r=Object(i["a"])((function(){return"".concat(t.countInfo.haveAnnotation,"/").concat(t.countInfo.haveAnnotation+t.countInfo.noAnnotation)})),l=function(t){var n=Object(s["z"])(t.color);return{color:n,border:"none"}},u=Object(i["a"])((function(){return t.pageInfo.total>0})),f=Object(i["a"])((function(){return"当前音频顺序：".concat(t.pageInfo.current)})),v=Object(i["a"])((function(){return t.pageInfo.current>1})),b=Object(i["a"])((function(){return t.pageInfo.current<t.pageInfo.total})),d=Object(i["a"])((function(){return t.pageInfo.total>0})),p=Object(i["a"])((function(){return!1===t.loading&&""===e.url})),h=Object(i["a"])((function(){return e.url.substring(e.url.lastIndexOf("/")+1)})),g=function(n){t.changeActiveTab(n)},_=function(){o.value||n.emit("confirm",{annotation:e.content.length?[{content:e.content}]:null})},m=Object(i["a"])((function(){return{c:_}}));return Object(i["r"])((function(){return t.url}),(function(t){e.url=t})),Object(i["r"])((function(){return t.activeTab}),(function(t){e.activeTab=t})),Object(i["r"])((function(){return t.fileId}),(function(){var n=Array.isArray(t.annotation)&&t.annotation.length>0;Object.assign(e,{content:n?t.annotation[0].content:""})})),{state:e,showException:p,showDelete:d,getStyle:l,showPrev:v,showNext:b,countInfoAuido:a,percentage:c,progress:r,title:h,handlePanelClick:g,showCurrent:u,current:f,comfirmDisabled:o,confirm:_,keymap:m}}},u=l,f=(e("3b04"),e("2877")),v=Object(f["a"])(u,a,o,!1,null,null,null);n["default"]=v.exports},"5e27":function(t,n,e){}}]);