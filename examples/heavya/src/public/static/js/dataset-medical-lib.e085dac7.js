(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["dataset-medical-lib"],{17:function(t,r){},"22a3":function(t,r,e){"use strict";e.r(r),e.d(r,"sortInstances",(function(){return L})),e.d(r,"buildWADOUrl",(function(){return S})),e.d(r,"getImageIdsForSeries",(function(){return O})),e.d(r,"getSOPInstanceUID",(function(){return j})),e.d(r,"retrieveBulkData",(function(){return A})),e.d(r,"readRawData",(function(){return U})),e.d(r,"parseDicom",(function(){return _})),e.d(r,"readDicom",(function(){return k})),e.d(r,"readDicoms",(function(){return P})),e.d(r,"validateDicomSeries",(function(){return N})),e.d(r,"genDrawingFromAnnotations",(function(){return C})),e.d(r,"removeAnchorsFromDrawer",(function(){return F})),e.d(r,"getDrawLayer",(function(){return G})),e.d(r,"getShapeEditor",(function(){return T})),e.d(r,"activeShapeGroup",(function(){return M})),e.d(r,"getShapeGroup",(function(){return B})),e.d(r,"dwc",(function(){return E}));var n=e("4e9b"),o=e.n(n),i=e("acd4"),a=e.n(i),u=e("df03"),c=e("2ef0"),s=e("ed08");function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function l(t,r){return p(t)||d(t,r)||y(t,r)||h()}function h(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,i,a,u=[],c=!0,s=!1;try{if(i=(e=e.call(t)).next,0===r){if(Object(e)!==e)return;c=!1}else for(;!(c=(n=i.call(e)).done)&&(u.push(n.value),u.length!==r);c=!0);}catch(f){s=!0,o=f}finally{try{if(!c&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(s)throw o}}return u}}function p(t){if(Array.isArray(t))return t}function v(t,r){var e="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=y(t))||r&&t&&"number"===typeof t.length){e&&(t=e);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return a=t.done,t},e:function(t){u=!0,i=t},f:function(){try{a||null==e.return||e.return()}finally{if(u)throw i}}}}function y(t,r){if(t){if("string"===typeof t)return g(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?g(t,r):void 0}}function g(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function m(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */m=function(){return t};var t={},r=Object.prototype,e=r.hasOwnProperty,n=Object.defineProperty||function(t,r,e){t[r]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{c({},"")}catch(U){c=function(t,r,e){return t[r]=e}}function s(t,r,e,o){var i=r&&r.prototype instanceof d?r:d,a=Object.create(i.prototype),u=new O(o||[]);return n(a,"_invoke",{value:D(t,e,u)}),a}function l(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(U){return{type:"throw",arg:U}}}t.wrap=s;var h={};function d(){}function p(){}function v(){}var y={};c(y,i,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(j([])));w&&w!==r&&e.call(w,i)&&(y=w);var b=v.prototype=d.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(r){c(t,r,(function(t){return this._invoke(r,t)}))}))}function I(t,r){function o(n,i,a,u){var c=l(t[n],t,i);if("throw"!==c.type){var s=c.arg,h=s.value;return h&&"object"==f(h)&&e.call(h,"__await")?r.resolve(h.__await).then((function(t){o("next",t,a,u)}),(function(t){o("throw",t,a,u)})):r.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,u)}))}u(c.arg)}var i;n(this,"_invoke",{value:function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}})}function D(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return A()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=E(a,e);if(u){if(u===h)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var c=l(t,r,e);if("normal"===c.type){if(n=e.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n="completed",e.method="throw",e.arg=c.arg)}}}function E(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,E(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),h;var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,h;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function L(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function S(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function j(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function r(){for(;++n<t.length;)if(e.call(t,n))return r.value=t[n],r.done=!1,r;return r.value=void 0,r.done=!0,r};return o.next=o}}return{next:A}}function A(){return{value:void 0,done:!0}}return p.prototype=v,n(b,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:p,configurable:!0}),p.displayName=c(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===p||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,c(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(I.prototype),c(I.prototype,a,(function(){return this})),t.AsyncIterator=I,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new I(s(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(b),c(b,u,"Generator"),c(b,i,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=e.call(i,"catchLoc"),c=e.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,r){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),h},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),S(e),h}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;S(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:j(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),h}},t}function w(t,r,e,n,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void e(s)}u.done?r(c):Promise.resolve(c).then(n,o)}function b(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var i=t.apply(r,e);function a(t){w(i,n,o,a,u,"next",t)}function u(t){w(i,n,o,a,u,"throw",t)}a(void 0)}))}}var x=e("76a0"),I=function(){return{}},D="".concat("http://192.168.26.202:30800/dcm4chee/dcm4chee-arc/aets/DCM4CHEE_ADMIN","/rs"),E=new u["a"].DICOMwebClient({url:D,headers:I()}),L=function(t){return t.sort((function(t,r){var e=t["00200013"].Value[0],n=r["00200013"].Value[0];return e-n}))},S=function(t){var r=t.studyInstanceUID,e=t.seriesInstanceUID,n=t.objectUID;return"".concat("http://192.168.26.202:30800/dcm4chee/dcm4chee-arc/aets/DCM4CHEE_ADMIN","/wado?requestType=WADO&studyUID=").concat(r,"&seriesUID=").concat(e,"&objectUID=").concat(n,"&contentType=application/dicom")},O=function(t){return t&&t.length?L(t).map((function(t){var r=t["7FE00010"].BulkDataURI.replace(/^https?:\/\//,""),e=r.split("/"),n=e.findIndex((function(t){return"studies"===t})),o=e.findIndex((function(t){return"series"===t})),i=e.findIndex((function(t){return"instances"===t}));if(n>-1&&o>-1){var a=e[n+1],u=e[o+1],c=e[i+1];return{studyInstanceUID:a,seriesInstanceUID:u,objectUID:c}}throw new Error("找不到对应的 studyUID 或 seriesUID")})):[]},j=function(t){if("undefined"!==typeof t.x00020010&&"undefined"!==typeof t.x00080018)return o.a.dicom.cleanString(t.x00080018.value[0]);throw new Error("当前 dcm 文件不合法，无法找到 SOPInstanceUID")},A=function(t){return E.retrieveBulkData({BulkDataURI:t})};function U(t){var r={},e=o.a.v01Tov02DrawingsAndDetails(t);return r.drawings=o.a.v02Tov03Drawings(e.drawings).toObject(),r.drawingsDetails=e.drawingsDetails,r}var _=function(t,r){try{var e=a.a.parseDicom(t),n=e.uint16("x00280010"),o=e.uint16("x00280011"),i=e.string("x0020000e"),u=e.string("x00100020"),c=e.string("x0020000d"),s=e.string("x00080060"),f=e.string("x00180015"),l=e.string("x00080018"),h=e.elements.x7fe00010;if(!h)throw new Error("文件信息不完整：7fe00010字段不存在");return{rows:n,columns:o,patientID:u,seriesInstanceUID:i,studyInstanceUID:c,modality:s,bodyPartExamined:f,filename:r,SOPInstanceUID:l}}catch(d){return d instanceof Error?d:new Error(d.exception||d)}},k=function(t){return new Promise((function(r,e){var n=new FileReader;n.onload=function(n){var o=n.target.result,i=new Uint8Array(o),a=_(i,t.raw.name.slice(0,-4));a instanceof Error?e(a):r(a)},n.readAsArrayBuffer(t.raw)}))},P=function(){var t=b(m().mark((function t(r){var e,n;return m().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=function(t){return new Promise((function(r,e){var n=new FileReader;n.onload=function(n){var o=n.target.result,i=new Uint8Array(o),a=_(i,t.raw.name.slice(0,-4));a instanceof Error?e(a):r(a)},n.readAsArrayBuffer(t.raw)}))},t.prev=1,t.next=4,x(r,e,{concurrency:10});case 4:return n=t.sent,t.abrupt("return",n);case 8:return t.prev=8,t.t0=t["catch"](1),t.abrupt("return",Promise.reject(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(r){return t.apply(this,arguments)}}(),N=function(t){if(t.length<1)return"文件数量不能为空";var r=Object(s["kb"])(t,"rows");if(!r)return"文件系列 rows 必须一致";var e=Object(s["kb"])(t,"columns");return e?"":"文件系列 columns 必须一致"},C=function(t,r){for(var e=[],n=1,i=[],a={},u=0;u<t.length;u+=1){for(var f=[],l=[],h=0;h<n;h+=1){for(var d=[],p=0;p<t[u].length;p+=1){var v=t[u][p],y=1/r,g=Object(s["L"])(v,y),m=o.a.math.guid();d.push({attrs:{name:"roi-group",id:m},className:"Group",children:[{attrs:{points:Object(c["flatten"])(g),name:"shape",closed:!0,strokeWidth:3,draggable:!0},className:"Line"}]}),i.push(m),l.push(m)}f.push(d)}a[u]=l,e.push(f)}var w=U(e),b=w.drawings,x=w.drawingsDetails;return{drawings:b,drawingsDetails:x,drawingIds:i,sliceDrawingMap:a}},F=function(t){var r=t.getChildren(o.a.draw.isPositionNode);r.forEach((function(t){var r=t.getChildren();r.forEach((function(t){var r=t.getChildren((function(t){return"anchor"===t.name()}));r.each((function(t){return t.remove()}))}))}))},G=function(t){var r=t.getDrawController().getDrawLayer();return r},T=function(t){return t.getShapeEditor()},M=function(t,r){var e=T(t);e.disable(),e.setShape(r),e.setImage(t.getImage()),e.enable()},B=function(t,r){var e,n=r.getChildren(o.a.draw.isPositionNode),i=null,a=v(n);try{for(a.s();!(e=a.n()).done;){var u=e.value,c=u.getChildren(),s=c.filter((function(r){return t===r.id()}));if(s.length){var f=s[0].find(".shape"),h=l(f,1);i=h[0];break}}}catch(d){a.e(d)}finally{a.f()}return i}}}]);