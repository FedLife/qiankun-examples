(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["dataset-tableImport-uploader"],{4066:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{width:"600px"}},[n("el-form-item",{attrs:{label:"文件类型",prop:"fileType"}},[n("div",{staticClass:"image-select flex flex-wrap"},e._l(e.fileTypeList,(function(t){return n("div",{key:t.name,class:e.getImageKlass(t.name),on:{click:function(n){return e.selectFileType(t.name)}}},[n("div",{staticClass:"image-title"},[e._v(e._s(t.name))]),e._v(" "),n("IconFont",{staticClass:"fileIcon",attrs:{type:t.icon}}),e._v(" "),n("span",[n("i",{staticClass:"check-icon"})])],1)})),0),e._v(" "),n("el-input",{staticClass:"dn",attrs:{value:e.state.form.fileType}}),e._v(" "),n("div",{staticClass:"el-form-item__tip"},[n("el-link",{attrs:{target:"_blank",href:(e.__IN_CLOUD__?"/annotation-web":"")+"/template-10dbac08a9f37fd8b9641944af77b74f.zip"}},[e._v("没有数据？查看并下载预置模板")])],1)],1),e._v(" "),n("el-form-item",{attrs:{label:"上传文件",prop:"file"}},[n("upload-inline",e._b({key:e.state.form.fileType,ref:"fileUploadForm",attrs:{action:"fakeApi","on-remove":e.fileRemove},on:{fileChange:e.fileChange}},"upload-inline",e.uploadOptions,!1))],1),e._v(" "),n("div",{staticStyle:{margin:"25px 0 0 100px"}},[n("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.preview}},[e._v("\n      下一步\n    ")])],1)],1)},r=[],o=n("2b0e"),l=n("ed09"),a=n("4d26"),c=n.n(a),f=n("7f969"),s=n("3da5");function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t=y(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(e){var t=v(e,"string");return"symbol"===p(t)?t:String(t)}function v(e,t){if("object"!==p(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==p(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}var d={name:"UploaderTable",components:{UploadInline:f["a"]},props:{fileTypeList:Array,state:Object,setState:Function,setForm:Function,tableForm:Object,validateField:Function,loading:Boolean},setup:function(e,t){var n=e.setForm,i=e.validateField,r=Object(l["o"])(null),a=function(t){return c()("image-select-item item-".concat(t),{"is-active":t===e.state.form.fileType})},f=function(t){t!==e.state.form.fileType&&n({fileType:t,file:null})},p=function(){e.tableForm.validate((function(n){n&&t.emit("preview",e.state.form.file.raw,e.state.form.fileType)}))},u=function(e){n({file:e}),o["default"].nextTick((function(){i("file")}))},b=function(){n({file:null})},y=Object(l["a"])((function(){var t="csv"===e.state.form.fileType?".csv":".xlsx";return m(m({},s["tableUploadProps"]),{},{accept:t,hash:!0})}));return{uploadOptions:y,getImageKlass:a,selectFileType:f,preview:p,fileChange:u,fileRemove:b,fileUploadForm:r}}},g=d,O=n("2877"),_=Object(O["a"])(g,i,r,!1,null,null,null);t["default"]=_.exports}}]);