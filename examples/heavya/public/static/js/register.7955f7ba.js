(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["register"],{7803:function(e,r,t){"use strict";t.r(r);var i=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticStyle:{height:"100%"}},[t("login-public",[t("el-form",{ref:"registerForm",staticClass:"register-form",attrs:{model:e.registerForm,rules:e.registerRules,"label-width":"26%"}},[t("h2",{staticClass:"register-title"},[e._v("heavyA平台")]),e._v(" "),t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.registerForm.username,callback:function(r){e.$set(e.registerForm,"username",r)},expression:"registerForm.username"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[t("el-input",{attrs:{placeholder:"请输入手机号"},model:{value:e.registerForm.phone,callback:function(r){e.$set(e.registerForm,"phone",r)},expression:"registerForm.phone"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"昵称",prop:"nickName"}},[t("el-input",{attrs:{placeholder:"请输入昵称"},model:{value:e.registerForm.nickName,callback:function(r){e.$set(e.registerForm,"nickName",r)},expression:"registerForm.nickName"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"性别",prop:"sex"}},[t("el-radio-group",{model:{value:e.registerForm.sex,callback:function(r){e.$set(e.registerForm,"sex",r)},expression:"registerForm.sex"}},[t("el-radio",{attrs:{label:1}},[e._v("男")]),e._v(" "),t("el-radio",{attrs:{label:0}},[e._v("女")])],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{attrs:{"auto-complete":"on",placeholder:"请输入邮箱"},model:{value:e.registerForm.email,callback:function(r){e.$set(e.registerForm,"email",r)},expression:"registerForm.email"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"邮箱验证码",prop:"code"}},[t("el-input",{staticStyle:{width:"50%"},attrs:{placeholder:"请输入验证码"},model:{value:e.registerForm.code,callback:function(r){e.$set(e.registerForm,"code",r)},expression:"registerForm.code"}}),e._v(" "),t("el-button",{staticStyle:{width:"48%",padding:"8px 0"},attrs:{loading:e.codeLoading,disabled:e.isDisabled},on:{click:e.sendCode}},[e._v(e._s(e.buttonName))])],1),e._v(" "),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.registerForm.password,callback:function(r){e.$set(e.registerForm,"password",r)},expression:"registerForm.password"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"确认密码",prop:"pass"}},[t("el-input",{attrs:{type:"password",placeholder:"请再次输入密码"},model:{value:e.registerForm.pass,callback:function(r){e.$set(e.registerForm,"pass",r)},expression:"registerForm.pass"}})],1),e._v(" "),t("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",size:"medium"},on:{click:function(r){return e.submitForm("registerForm")}}},[e._v("注册")]),e._v(" "),t("div",{staticClass:"go-login fr"},[e._v("\n        已有账号?"),t("el-button",{attrs:{type:"text"},on:{click:function(r){return e.$router.replace({path:"/login"})}}},[e._v("去登录")])],1)],1)],1)],1)},s=[],o=t("61f7"),a=t("8de4"),n=t("3786"),l=t("93d2"),m=t("f121");function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r,t){return r=d(r),r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e){var r=b(e,"string");return"symbol"===c(r)?r:String(r)}function b(e,r){if("object"!==c(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,r||"default");if("object"!==c(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}var f={username:"",phone:"",nickName:"",email:"",code:"",password:"",sex:1,pass:""},h={name:"Register",components:{LoginPublic:l["a"]},data:function(){var e=this,r=function(r,t,i){""===t?i(new Error("请再次输入密码")):t!==e.registerForm.password?i(new Error("两次输入密码不一致!")):i()};return{buttonName:"发送邮箱验证码",isDisabled:!1,time:60,codeLoading:!1,registerForm:g({},f),registerRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{validator:o["j"],trigger:"blur"}],nickName:[{required:!0,message:"请输入用户昵称",trigger:"blur"},{validator:o["p"],trigger:"blur"}],email:[{required:!0,message:"请输入邮箱地址",trigger:"blur"},{pattern:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,message:"请输入正确的邮箱地址",trigger:["blur","change"]}],phone:[{required:!0,message:"请输入手机号码",trigger:"blur"},{pattern:/^1\d{10}$/,message:"请输入正确的11位手机号码",trigger:["blur","change"]}],sex:[{required:!0,message:"请选择性别",trigger:"change"}],code:[{required:!0,trigger:"change",message:"验证码不能为空"}],password:[{required:!0,trigger:"blur",message:"密码不能为空"},{min:6,max:20,message:"长度在 6 到 20 个字符",trigger:"blur"}],pass:[{required:!0,message:"请再次验证密码",trigger:"blur"},{validator:r,trigger:"blur"}]},loading:!1}},beforeRouteEnter:function(e,r,t){m["f"].allowRegister?t():t("/login")},methods:{sendCode:function(){var e=this;if(Object(o["i"])(this.registerForm.email)){this.codeLoading=!0,this.buttonName="发送中";var r={email:this.registerForm.email,type:1};Object(n["a"])(r).then((function(){e.$message({showClose:!0,message:"发送成功，验证码有效期5分钟",type:"success"}),e.codeLoading=!1,e.isDisabled=!0,e.buttonName="".concat(e.time-=1,"秒"),e.timer=window.setInterval((function(){e.buttonName="".concat(e.time,"秒"),e.time-=1,e.time<0&&(e.buttonName="重新发送",e.time=60,e.isDisabled=!1,window.clearInterval(e.timer))}),1e3)})).catch((function(r){e.codeLoading=!1,e.$message({message:r.message,type:"error"})}))}else this.$message.warning("请先输入正确邮箱地址")},submitForm:function(e){var r=this;this.$refs[e].validate((function(e){if(e){var t={username:r.registerForm.username,phone:r.registerForm.phone,nickName:r.registerForm.nickName,email:r.registerForm.email,code:r.registerForm.code,password:Object(a["b"])(r.registerForm.password),sex:r.registerForm.sex};return Object(n["g"])(t).then((function(){r.loading=!1,r.resetForm(),r.$notify({title:"注册成功",type:"success",duration:1500}),r.$router.replace({path:"/login"})})).catch((function(e){r.loading=!1,r.$message({message:e.message,type:"error"})})),!0}return!1}))},resetForm:function(){this.dialog=!1,this.$refs.registerForm.resetFields(),window.clearInterval(this.timer),this.time=60,this.buttonName="发送验证码",this.isDisabled=!1,this.registerForm=g({},f)}}},v=h,w=(t("c58c"),t("2877")),F=Object(w["a"])(v,i,s,!1,null,"108c48ea",null);r["default"]=F.exports},b73f4:function(e,r,t){},c58c:function(e,r,t){"use strict";t("b73f4")}}]);