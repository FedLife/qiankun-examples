(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["atlas-utils"],{"305c":function(n,e){n.exports="//127.0.0.1:7201/img/TaskBranching.b7e9a941.png"},a282:function(n,e,t){"use strict";t.r(e),t.d(e,"MEASURE_STATUS_ENUM",(function(){return m})),t.d(e,"MEASURE_STATUS_MAP",(function(){return c})),t.d(e,"ERROR_MSG",(function(){return f})),t.d(e,"atlasAlgorithmList",(function(){return p}));var r,i=t("60fe");function o(n){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},o(n)}function a(n,e,t){return e=u(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function u(n){var e=s(n,"string");return"symbol"===o(e)?e:String(e)}function s(n,e){if("object"!==o(n)||null===n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var r=t.call(n,e||"default");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(n)}var m={MAKING:0,SUCCESS:1,FAIL:2},c=(r={},a(r,m.MAKING,{name:"生成中",tagMap:""}),a(r,m.SUCCESS,{name:"生成成功",tagMap:"success"}),a(r,m.FAIL,{name:"生成失败",tagMap:"danger"}),r),f={NO_NODES:"度量图中不存在节点信息，请检查后重试",NO_EDGES:"度量图中不存在边信息，请检查后重试",NODES_NOT_ARRAY:"度量图中的节点信息结构错误，请检查后重试",EDGES_NOT_ARRAY:"度量图中的边信息结构错误，请检查后重试"},p=[{en:"Layerwise Amalgamation",cn:"逐层融合算法",description:"Amalgamating Knowledge towards Comprehensive Classification(AAAI 2019)",paperLink:"https://arxiv.org/abs/1811.02796v1",img:t("dfe4"),id:i["e"].LAYERWISE_AMALGAMATION},{en:"Task Branching",cn:"任务自适应分杈重组算法",description:"Student Becoming the Master: Knowledge Amalgamation for Joint Scene Parsing, Depth Estimation, and More (CVPR 2019)",paperLink:"https://arxiv.org/abs/1904.10167",img:t("305c"),id:i["e"].TASK_BRANCHING},{en:"Common Feature Learning",cn:"共同特征聚合算法",description:"Knowledge Amalgamation from Heterogeneous Networks by Common Feature Learning(IJCAI 2019)",paperLink:"https://arxiv.org/abs/1906.10546",img:t("a9df"),id:i["e"].COMMON_FEATURE_LEARNING}]},a9df:function(n,e){n.exports="//127.0.0.1:7201/img/Common.dcd9e047.png"},dfe4:function(n,e){n.exports="//127.0.0.1:7201/img/Layerwise.703ff3fe.png"}}]);