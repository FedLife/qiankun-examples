(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["trainingJob-utils"],{"03b8":function(e,t,A){"use strict";var n,r;function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function o(e,t,A){return t=i(t),t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function i(e){var t=u(e,"string");return"symbol"===a(t)?t:String(t)}function u(e,t){if("object"!==a(e)||null===e)return e;var A=e[Symbol.toPrimitive];if(void 0!==A){var n=A.call(e,t||"default");if("object"!==a(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}A.r(t),A.d(t,"JOB_TYPE_ENUM",(function(){return l})),A.d(t,"TRAINING_STATUS_ENUM",(function(){return I})),A.d(t,"TRAINING_TYPE_ENUM",(function(){return p})),A.d(t,"TRAINING_STATUS_MAP",(function(){return m})),A.d(t,"TRAINING_TYPE_MAP",(function(){return E})),A.d(t,"copywriting",(function(){return d})),A.d(t,"IMAGE_RESOURCE_ENUM",(function(){return c})),A.d(t,"ATLAS_ALGORITHM_TYPE_ENUM",(function(){return N})),A.d(t,"trainVisualQueryFormItems",(function(){return g})),A.d(t,"getTrainVisualColumns",(function(){return s})),A.d(t,"trainCreateList",(function(){return T}));var l={SINGLE:1,MULTIPLE:2},I={PENDING:0,RUNNING:1,FINISHED:2,FAILED:3,STOPED:4,UNKNOW:5,CREATE_FAILED:7},p={TRAINING:0,DISTRIBUTED:1,ATLAS:2,DDRL:3},m=(n={},o(n,I.PENDING,{name:"待处理",statusMap:"running"}),o(n,I.RUNNING,{name:"运行中",statusMap:"running"}),o(n,I.FINISHED,{name:"运行完成",tagMap:"success",statusMap:"done"}),o(n,I.FAILED,{name:"运行失败",tagMap:"danger",statusMap:"done"}),o(n,I.STOPED,{name:"停止",tagMap:"info",statusMap:"done"}),o(n,I.UNKNOW,{name:"未知",statusMap:"done"}),o(n,I.CREATE_FAILED,{name:"创建失败",tagMap:"danger",statusMap:"done"}),n),E=(r={},o(r,p.TRAINING,"训练任务"),o(r,p.DISTRIBUTED,"训练任务"),o(r,p.ATLAS,"模型重组"),o(r,p.DDRL,"强化学习"),r),d={title:{jobResume:"断点续训",modelDownload:"模型下载",modelSelect:"模型选择"},description:{jobResume:"请选择模型并开始训练",modelDownload:"请选择需要下载的模型文件目录",modelSelect:"请选择要保存的模型"},emptyText:{jobResume:"暂无数据，无法断点续训",modelDownload:"暂无数据",modelSelect:"暂无模型数据"},tip:{jobResume:"此功能将会以用户选择的模型作为预训练模型进行新一轮训练，之前的训练结果将被覆盖且无法找回。建议先保存模型！"}},c={CUSTOM:"0",PRESET:"1",NOTEBOOK:"2",TERMINAL:"3"},N={LAYERWISE:1,CFL:2,TASK_BRANCHING:3,DDRL:4},g=[{prop:"trainName",placeholder:"请输入训练名称",class:"w-200",change:"query"},{prop:"createTime",startPlaceholder:"开始时间",endPlaceholder:"结束时间",type:"date",dateType:"datetimerange",defaultTime:["00:00:00","23:59:59"],pickerOptions:{disabledDate:function(e){return e.getTime()>(new Date).setHours(23,59,59,999)}},valueFormat:"timestamp",change:"query"},{type:"button",btnText:"重置",func:"resetQuery"},{type:"button",btnText:"搜索",btnType:"primary",func:"query"}];function s(e){var t=e.goVisual,A=e.jobStatusList,n={};return Object.keys(m).forEach((function(e){n[e]=m[e].tagMap})),[{label:"名称",prop:"trainName",minWidth:"160px"},{label:"版本",prop:"trainVersion",sortable:"custom"},{label:"训练时长",prop:"runtime",sortable:"custom"},{label:"状态",prop:"trainStatus",dropdownList:A.value,formatter:function(e){var t;return null===(t=A.value.find((function(t){return t.value===String(e)})))||void 0===t?void 0:t.label},type:"tag",tagMap:n},{label:"创建时间",prop:"createTime",type:"time",minWidth:"160px",sortable:"custom"},{label:"操作",type:"operation",width:"370px",operations:[{label:"可视化",func:t,iconAfter:"externallink"}]}]}var T=[{type:p.TRAINING,title:"训练任务",img:A("b237")},{type:p.ATLAS,title:"模型重组",img:A("321f")}]},"321f":function(e,t){e.exports="data:image/png;base64,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"},b237:function(e,t){e.exports="data:image/png;base64,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"}}]);