(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["dataset-modelService-CreateModelService"],{"0be6":function(t,e,n){"use strict";n.d(e,"f",(function(){return c})),n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return d})),n.d(e,"b",(function(){return i})),n.d(e,"e",(function(){return l}));var a=n("b775"),r=n("f121");function c(t){return Object(a["a"])({url:"/".concat(r["a"].MODEL,"/ptModelBranch"),method:"get",params:t})}function o(t){return Object(a["a"])({url:"/".concat(r["a"].MODEL,"/ptModelBranch"),method:"post",data:t})}function u(t){return Object(a["a"])({url:"/".concat(r["a"].MODEL,"/ptModelBranch"),method:"put",data:t})}function d(t){return Object(a["a"])({url:"/".concat(r["a"].MODEL,"/ptModelBranch"),method:"delete",data:t})}function i(t){return Object(a["a"])({url:"".concat(r["a"].MODEL,"/ptModelBranch/convertPreset"),method:"post",data:t})}function l(t){return Object(a["a"])({url:"".concat(r["a"].MODEL,"/ptModelBranch/convertOnnx"),method:"post",data:{id:t}})}e["c"]={list:c,add:o,edit:u,del:d}},"0c61":function(t,e,n){"use strict";n.d(e,"d",(function(){return c})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return d}));var a=n("b775"),r=n("f121");function c(t){return Object(a["a"])({url:"/".concat(r["a"].ADMIN,"/resourceSpecs"),method:"get",params:t})}function o(t){return Object(a["a"])({url:"/".concat(r["a"].ADMIN,"/resourceSpecs"),method:"post",data:t})}function u(t){return Object(a["a"])({url:"/".concat(r["a"].ADMIN,"/resourceSpecs"),method:"delete",data:{ids:t}})}function d(t){return Object(a["a"])({url:"/".concat(r["a"].ADMIN,"/resourceSpecs"),method:"put",data:t})}},"6c99":function(t,e,n){"use strict";n.d(e,"e",(function(){return o})),n.d(e,"g",(function(){return u})),n.d(e,"a",(function(){return d})),n.d(e,"f",(function(){return i})),n.d(e,"c",(function(){return l})),n.d(e,"i",(function(){return s})),n.d(e,"h",(function(){return m})),n.d(e,"d",(function(){return b}));var a=n("b775"),r=n("f121");function c(t){return Object(a["a"])({url:"/".concat(r["a"].DATA,"/datasets/label/service/list"),method:"get",params:t})}function o(t){return Object(a["a"])({url:"/".concat(r["a"].DATA,"/datasets/label/service/running/list"),method:"get",params:t})}function u(t){return Object(a["a"])({url:"/".concat(r["a"].DATA,"/datasets/files/annotations/auto"),method:"post",data:t})}function d(t){return Object(a["a"])({url:"/".concat(r["a"].DATA,"/datasets/label/service"),method:"post",data:t})}function i(t){return Object(a["a"])({url:"/".concat(r["a"].DATA,"/datasets/label/service"),method:"put",data:t})}function l(t){return Object(a["a"])({url:"/".concat(r["a"].DATA,"/datasets/label/service/").concat(t),method:"get"})}function f(t){return Object(a["a"])({url:"/".concat(r["a"].DATA,"/datasets/label/service"),method:"delete",data:{ids:t}})}function s(t){return Object(a["a"])({url:"/".concat(r["a"].DATA,"/datasets/label/service/stop/").concat(t),method:"put"})}function m(t){return Object(a["a"])({url:"/".concat(r["a"].DATA,"/datasets/label/service/start/").concat(t),method:"put"})}function b(t){return Object(a["a"])({url:"/".concat(r["a"].DATA,"/datasets/label/service/pods/").concat(t),method:"get"})}e["b"]={list:c,add:d,del:f}},"8bbd":function(t,e,n){"use strict";n.d(e,"l",(function(){return c})),n.d(e,"a",(function(){return o})),n.d(e,"d",(function(){return d})),n.d(e,"f",(function(){return i})),n.d(e,"m",(function(){return l})),n.d(e,"k",(function(){return f})),n.d(e,"b",(function(){return s})),n.d(e,"j",(function(){return m})),n.d(e,"i",(function(){return b})),n.d(e,"e",(function(){return p})),n.d(e,"h",(function(){return O})),n.d(e,"g",(function(){return h}));var a=n("b775"),r=n("f121");function c(t){return Object(a["a"])({url:"/".concat(r["a"].MODEL,"/ptModelInfo"),method:"get",params:t})}function o(t){return Object(a["a"])({url:"/".concat(r["a"].MODEL,"/ptModelInfo"),method:"post",data:t})}function u(t){return Object(a["a"])({url:"/".concat(r["a"].MODEL,"/ptModelInfo"),method:"put",data:t})}function d(t){return Object(a["a"])({url:"/".concat(r["a"].MODEL,"/ptModelInfo"),method:"delete",data:t})}function i(t,e){return Object(a["a"])({url:"/".concat(r["a"].MODEL,"/ptModelInfo/byResource"),method:"get",params:{modelResource:t,packaged:e}})}function l(t){return Object(a["a"])({url:"/".concat(r["a"].MODEL,"/ptModelInfo/package"),method:"post",data:t})}function f(t){return Object(a["a"])({url:"/".concat(r["a"].MODEL,"/ptModelInfo/servingModel"),method:"get",params:{modelResource:t}})}function s(t){return Object(a["a"])({url:"/".concat(r["a"].MODEL,"/ptModelInfo/uploadModel"),method:"post",data:t})}function m(){return Object(a["a"])({url:"/".concat(r["a"].MODEL,"/ptModelType"),method:"get"})}function b(t){return Object(a["a"])({url:"/".concat(r["a"].MODEL,"/ptModelSuffix"),method:"get",params:t})}function p(t){return Object(a["a"])({url:"/".concat(r["a"].MODEL,"/ptModelInfo/byModelId"),method:"get",params:{id:t}})}function O(t){return Object(a["a"])({url:"/".concat(r["a"].MODEL,"/ptModelStruct"),method:"get",params:t})}function h(t){return Object(a["a"])({url:"/".concat(r["a"].MODEL,"/ptModelInfo/atlasModel"),method:"get",params:t})}e["c"]={list:c,add:o,edit:u,del:d}},"9eb2":function(t,e,n){"use strict";n.d(e,"f",(function(){return c})),n.d(e,"g",(function(){return o})),n.d(e,"a",(function(){return u})),n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return i})),n.d(e,"h",(function(){return l})),n.d(e,"e",(function(){return f})),n.d(e,"d",(function(){return s}));var a=n("b775"),r=n("f121");function c(t){return Object(a["a"])({url:"/".concat(r["a"].ALGORITHM,"/algorithms"),method:"get",params:t})}function o(t){return Object(a["a"])({url:"/".concat(r["a"].ALGORITHM,"/algorithms/getAll"),method:"get",params:t})}function u(t){return Object(a["a"])({url:"/".concat(r["a"].ALGORITHM,"/algorithms"),method:"post",data:t})}function d(t){return Object(a["a"])({url:"/".concat(r["a"].ALGORITHM,"/algorithms"),method:"put",data:t})}function i(t){return Object(a["a"])({url:"/".concat(r["a"].ALGORITHM,"/algorithms"),method:"delete",data:t})}function l(){return Object(a["a"])({url:"/".concat(r["a"].ALGORITHM,"/algorithms/myAlgorithmCount"),method:"get"})}function f(){return Object(a["a"])({url:"/".concat(r["a"].ALGORITHM,"/algorithms/getInferenceAlgorithm"),method:"get"})}function s(t){return Object(a["a"])({url:"/".concat(r["a"].ALGORITHM,"/algorithms/findAlgorithmByName"),method:"get",params:t})}},a40c:function(t,e,n){"use strict";n.d(e,"b",(function(){return d})),n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return l})),n.d(e,"c",(function(){return f})),n.d(e,"g",(function(){return s})),n.d(e,"f",(function(){return m}));var a=n("b775"),r=n("f121");function c(t){return Object(a["a"])({url:"/".concat(r["a"].IMAGE,"/ptImage/list"),method:"get",params:t})}function o(t){return Object(a["a"])({url:"/".concat(r["a"].IMAGE,"/ptImage"),method:"post",data:t})}function u(t){return Object(a["a"])({url:"/".concat(r["a"].IMAGE,"/ptImage"),method:"put",data:t})}function d(t){return Object(a["a"])({url:"/".concat(r["a"].IMAGE,"/ptImage"),method:"delete",data:t})}function i(t){return Object(a["a"])({url:"/".concat(r["a"].IMAGE,"/ptImage/imageNameList"),method:"get",params:t})}function l(t){return Object(a["a"])({url:"/".concat(r["a"].IMAGE,"/ptImage"),method:"get",params:t})}function f(t){return Object(a["a"])({url:"/".concat(r["a"].IMAGE,"/ptImage/imageDefault"),method:"get",params:t})}function s(t){return Object(a["a"])({url:"/".concat(r["a"].IMAGE,"/ptImage/imageDefault"),method:"put",params:t})}function m(){return Object(a["a"])({url:"/".concat(r["a"].IMAGE,"/ptImage/terminalImageList"),method:"get"})}e["a"]={list:c,add:o,edit:u}}}]);