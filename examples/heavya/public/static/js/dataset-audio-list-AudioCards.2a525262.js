(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["dataset-audio-list-AudioCards"],{3160:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"audio-cards"},[a("ul",{staticClass:"audio-cards__wrapper"},t._l(t.dataAudiosLocal,(function(e,o){return a("li",{key:e.id,staticClass:"audio-cards__item"},[a("div",{on:{mouseenter:function(a){return t.onMouseEnter(e)},mouseleave:function(a){return t.onMouseLeave(e)}}},[a("el-card",{staticClass:"audio-cards__card"},[a("WaveSurfer",{attrs:{mini:"",height:70,url:e.url}}),t._v(" "),a("div",{staticStyle:{height:"25px"}},[a("el-button",{directives:[{name:"show",rawName:"v-show",value:t.showOption(e.id),expression:"showOption(item.id)"}],staticClass:"audio-cards__button",attrs:{icon:"el-icon-right",circle:""},on:{click:function(e){return t.goDetail(o)}}})],1),t._v(" "),t.isStatus(e,"UNANNOTATED")?t._e():a("el-tag",{staticClass:"audio-cards__tag",attrs:{color:t.audioLabelTag[e.id]["color"]}},[t._v("\n            "+t._s(t.audioLabelTag[e.id]["text"])+"\n          ")]),t._v(" "),a("el-checkbox",{directives:[{name:"show",rawName:"v-show",value:t.showOption(e.id),expression:"showOption(item.id)"}],staticClass:"audio-checkbox",attrs:{label:e.id}},[t._v(" ")]),t._v(" "),a("div",{staticClass:"auido-cards__row",attrs:{title:e.name}},[a("div",{staticClass:"audio-cards__name"},[t._v(t._s(e.name))])])],1)],1)])})),0)])},i=[],n=a("ed09"),r=a("3da5"),s=a("5a6c"),c={name:"AudioCards",components:{WaveSurfer:s["a"]},props:{dataAudios:{type:Array,default:function(){return[]}},loading:Boolean,categoryId2Name:{type:Object,default:function(){}},selectedId:{type:Array,default:function(){return[]}},audioType:Number},setup:function(t,e){var a={UNRECOGNIZED:{text:"未识别",color:"#FFFFFF"},UNANNOTATED:{text:"未标注",color:"#FFFFFF"},AUTO_ANNOTATED:{text:"自动",color:"#468CFF"},MANUAL_ANNOTATED:{text:"人工",color:"#FF9943"}},o=Object(n["o"])(null),i=Object(n["a"])((function(){return t.dataAudios||[]})),s=Object(n["a"])((function(){var e={};try{i.value.forEach((function(o){var i=a[Object(r["findKey"])(o.status,r["fileCodeMap"])],n=JSON.parse(o.annotation),s={},c="#db2a2a";if(i&&Array.isArray(n)&&n.length>0){if(t.audioType===r["annotationMap"].AudioClassify.code){var u=n[0].category_id;s=t.categoryId2Name[u]||{}}else t.audioType===r["annotationMap"].SpeechRecognition.code&&(s.name="语音识别完成");c=i.color}var d=s.name&&"| ".concat(s.name);e[o.id]={text:"".concat(i.text," ").concat(d),color:c}}))}catch(o){throw o}return e})),c=function(t){e.emit("goDetail",t)},u=function(t){Object(n["p"])(t,"isHover",!0),o.value=t},d=function(t){t.isHover&&(Object(n["p"])(t,"isHover",!1),o.value=null)},l=function(t){var e;return(null===(e=o.value)||void 0===e?void 0:e.id)===t},v=function(e){return t.selectedId.find((function(t){return e===t}))},f=function(t){return l(t)||v(t)};return{dataAudiosLocal:i,audioLabelTag:s,goDetail:c,onMouseEnter:u,onMouseLeave:d,isStatus:r["isStatus"],showOption:f}}},u=c,d=(a("fc33"),a("2877")),l=Object(d["a"])(u,o,i,!1,null,"2649c31a",null);e["default"]=l.exports},"66e0":function(t,e,a){},fc33:function(t,e,a){"use strict";a("66e0")}}]);