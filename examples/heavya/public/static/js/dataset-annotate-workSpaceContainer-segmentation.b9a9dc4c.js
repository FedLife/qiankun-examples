(window["webpackJsonp_dubhe_web"]=window["webpackJsonp_dubhe_web"]||[]).push([["dataset-annotate-workSpaceContainer-segmentation","dataset-annotate-workSpaceContainer-segmentation-polygon","dataset-annotate-workSpaceContainer-segmentation-polyline","dataset-annotate-workSpaceContainer-segmentation-selection","dataset-annotate-workSpaceContainer-segmentation-vertice"],{"0393":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("g",{staticClass:"segmentation"},[n("Selection",{attrs:{stageWidth:t.stageWidth,stageHeight:t.stageHeight,state:t.state,draw:t.draw,handlePointClick:t.handlePointClick,handleChange:t.handleChange,transformZoom:t.transformZoom}}),t._v(" "),t._l(t.state.shapes,(function(e){return n("PolygonRender",{key:e.id,attrs:{shape:e,stageWidth:t.stageWidth,stageHeight:t.stageHeight,draw:t.draw,transformer:t.transformer,guides:t.state.guides,scale:t.scale,getZoom:t.getZoom,bounds:t.bounds,offset:t.offset,handleChange:t.handleChange,currentAnnotationId:t.currentAnnotationId,onDragStart:t.onDragStart,onDragMove:t.onDragMove,onDragEnd:t.onDragEnd,setTransformer:t.setTransformer}})}))],2)},a=[],o=n("ed09"),i=n("46c3"),s=n.n(i),u=n("2ef0"),c=n("ed08"),d=n("806c"),f=n("9f0e"),l=n("7e60");function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function h(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?h(Object(n),!0).forEach((function(e){y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function y(t,e,n){return e=b(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function b(t){var e=v(t,"string");return"symbol"===p(e)?e:String(e)}function v(t,e){if("object"!==p(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}var m={name:"Segmentation",components:{Selection:f["default"],PolygonRender:l["default"]},props:{stageWidth:Number,stageHeight:Number,className:String,shapes:Array,updateState:Function,setCurAnnotation:Function,currentAnnotationId:String,transformZoom:Function,getZoom:Function,scale:Number,bounds:Object,offset:Function},setup:function(t,e){var n=t.updateState,r=t.setCurAnnotation,a=t.getZoom,i=Object(o["n"])({shapes:t.shapes||[],unfinishedShape:{},guides:[],status:""}),f=Object(o["n"])({id:void 0,dx:0,dy:0,x:void 0,y:void 0}),l=function(){return!!Object(u["isEmpty"])(i.unfinishedShape)},p=Object(d["d"])(),h=p.draw,b=p.onDrawStart,v=p.onDrawMove,m=p.onDrawEnd,O=function(t,e,n){if("function"===typeof e){var r=e(i);return Object.assign(i,y({},t,r)),void(Object(u["isFunction"])(n)&&n(i))}Object.assign(i,y({},t,e)),Object(u["isFunction"])(n)&&n(i)},j=function(t){Object.assign(f,t)},D=function(){Object.assign(i,{guides:[],unfinishedShape:{},status:""}),h.isDrawing&&m()},x=function(t){e.emit("change",t)},S=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return function(n){x({type:t,state:n,options:e})}},w=function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{bounds:!0},o=r.scale||t.scale,i=a(),s=i.zoom,u=s*o,d=Object(c["W"])(n),f=d.x0,l=d.x1,p=d.y0,h=d.y1;if(!r.bounds)return g(g({},e),{},{validDx:e.dx/u,validDy:e.dy/u});var y=e.dx>0?Math.min(e.dx/u,t.bounds.width-l):Math.max(e.dx/u,-f),b=e.dy>0?Math.min(e.dy/u,t.bounds.height-h):Math.max(e.dy/u,-p);return g(g({},e),{},{validDx:y,validDy:b})},E=function(t){n({currentAnnotationId:t||""})},P=function(t,e){var n=i.shapes.findIndex((function(t){return t.id===e.id}));if(n>-1){var a=Object(c["Gb"])(i.shapes,n);Object.assign(i,{shapes:a})}O("status","EDITING"),r(e),x({type:"DRAG_START",state:i})},A=function(t,e){var n=t.drag,r=w(n,e.data.points,{scale:1}),a=r.validDx,o=r.validDy;j({isDragging:!0,id:e.id,x:n.x,y:n.y,dx:a,dy:o}),x({type:"DRAG_MOVE",state:i})},N=function(t,e){var r=t.drag;n((function(t){var n=t.shapes.findIndex((function(t){return t.id===e.id}));if(n>-1){var a=t.shapes[n],o=g(g({},a),{},{data:g(g({},a.data),{},{points:a.data.points.map((function(t){return{x:t.x+r.validDx,y:t.y+r.validDy}}))})}),i=Object(c["Kb"])(t.shapes,n,o);return g(g({},t),{},{shapes:i})}return t}),(function(t){return x({type:"DRAG_END",state:t})}))},M=function(t,e){var n=i.unfinishedShape.points,r=void 0===n?[]:n,a=s()(r,{$push:[t]});O("unfinishedShape",(function(t){return s()(t.unfinishedShape,{points:{$set:a}})}),e)},k=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t){case"DRAW_START":var n=e.point;b(n),O("status","DRAWING"),M(n,(function(){return E()}));break;case"DRAW_POINT":var r=e.point;M(r);break;case"DRAW_MOVE":var a=e.point,o=i.unfinishedShape.points,c=void 0===o?[]:o;if(h.start&&v(a),c.length){var d=[Object(u["last"])(c),a];O("guides",d)}break;case"DRAW_END":var f=i.unfinishedShape;m();var l=Object(u["last"])(i.shapes),p=null!==l&&void 0!==l&&l.id?"$push":"$set";O("status","FINISHED"),O("shapes",(function(t){return s()(t.shapes,y({},p,[{points:f.points}]))}),S("DRAW_END",e)),D();break;case"ADD_POINT":var g=e.index,j=e.point,x=e.shape;O("shapes",(function(t){var e=t.shapes.findIndex((function(t){return t.id===x.id})),n=s()(t.shapes[e],{data:{points:{$splice:[[g,0,j]]}}});return s()(t.shapes,y({},e,{$set:n}))}),S("ADD_POINT"));break;case"MOVE_POINT":var P=[];if(e){var A=e.drag,N=e.index,k=e.shape,I=k.data.points.length,$=w(A,k.data.points,{bounds:!1}),T=$.validDx,C=$.validDy,_=k.data.points[N],R={x:_.x+T,y:_.y+C};P.push([R,k.data.points[(N+1)%I]],[R,k.data.points[(N-1+I)%I]])}O("guides",P,S("MOVE_POINT"));break;case"UPDATE_POINT":var F=e.index,W=e.shape;O("shapes",(function(t){if(!t.guides.length)return t.shapes;var e=t.shapes.findIndex((function(t){return t.id===W.id})),n=s()(t.shapes[e],{data:{points:{$splice:[[F,1,t.guides[0][0]]]}}});return s()(t.shapes,y({},e,{$set:n}))}),S("UPDATE_POINT")),O("guides",[]);break;case"REMOVE_POINT":var H=e.index,V=e.shape;if(V.data.points.length<=3)return;O("shapes",(function(t){var e=t.shapes.findIndex((function(t){return t.id===V.id})),n=s()(t.shapes[e],{data:{points:{$splice:[[H,1]]}}});return s()(t.shapes,y({},e,{$set:n}))}),S("REMOVE_POINT"));break;default:throw new Error("unknown eventType: ",t)}},I=function(t){if(i.unfinishedShape.points.length>=3){var e={event:t,shape:i.unfinishedShape};k("DRAW_END",e)}},$=function(t,e,n){return n.stopPropagation(),0===t&&I(n),!1};return Object(o["r"])((function(){return t.shapes}),(function(t){i.shapes=t})),{state:i,transformer:f,validate:l,draw:h,reset:D,finishDraw:I,handleChange:k,handlePointClick:$,setTransformer:j,onDragStart:P,onDragMove:A,onDragEnd:N}}},O=m,j=(n("6253"),n("2877")),D=Object(j["a"])(O,r,a,!1,null,"2d7966a0",null);e["default"]=D.exports},"46c3":function(t,e,n){"use strict";(function(n){function r(t){return"object"!==typeof t||"toString"in t?t:Object.prototype.toString.call(t).slice(8,-1)}Object.defineProperty(e,"__esModule",{value:!0});var a="object"===typeof n&&!0;function o(t,e){if(!t){if(a)throw new Error("Invariant failed");throw new Error(e())}}e.invariant=o;var i=Object.prototype.hasOwnProperty,s=Array.prototype.splice,u=Object.prototype.toString;function c(t){return u.call(t).slice(8,-1)}var d=Object.assign||function(t,e){return f(e).forEach((function(n){i.call(e,n)&&(t[n]=e[n])})),t},f="function"===typeof Object.getOwnPropertySymbols?function(t){return Object.keys(t).concat(Object.getOwnPropertySymbols(t))}:function(t){return Object.keys(t)};function l(t){return Array.isArray(t)?d(t.constructor(t.length),t):"Map"===c(t)?new Map(t):"Set"===c(t)?new Set(t):t&&"object"===typeof t?d(Object.create(Object.getPrototypeOf(t)),t):t}var p=function(){function t(){this.commands=d({},h),this.update=this.update.bind(this),this.update.extend=this.extend=this.extend.bind(this),this.update.isEquals=function(t,e){return t===e},this.update.newContext=function(){return(new t).update}}return Object.defineProperty(t.prototype,"isEquals",{get:function(){return this.update.isEquals},set:function(t){this.update.isEquals=t},enumerable:!0,configurable:!0}),t.prototype.extend=function(t,e){this.commands[t]=e},t.prototype.update=function(t,e){var n=this,r="function"===typeof e?{$apply:e}:e;Array.isArray(t)&&Array.isArray(r)||o(!Array.isArray(r),(function(){return"update(): You provided an invalid spec to update(). The spec may not contain an array except as the value of $set, $push, $unshift, $splice or any custom command allowing an array value."})),o("object"===typeof r&&null!==r,(function(){return"update(): You provided an invalid spec to update(). The spec and every included key path must be plain objects containing one of the following commands: "+Object.keys(n.commands).join(", ")+"."}));var a=t;return f(r).forEach((function(e){if(i.call(n.commands,e)){var o=t===a;a=n.commands[e](r[e],a,r,t),o&&n.isEquals(a,t)&&(a=t)}else{var s="Map"===c(t)?n.update(t.get(e),r[e]):n.update(t[e],r[e]),u="Map"===c(a)?a.get(e):a[e];n.isEquals(s,u)&&("undefined"!==typeof s||i.call(t,e))||(a===t&&(a=l(t)),"Map"===c(a)?a.set(e,s):a[e]=s)}})),a},t}();e.Context=p;var h={$push:function(t,e,n){return y(e,n,"$push"),t.length?e.concat(t):e},$unshift:function(t,e,n){return y(e,n,"$unshift"),t.length?t.concat(e):e},$splice:function(t,e,n,r){return v(e,n),t.forEach((function(t){m(t),e===r&&t.length&&(e=l(r)),s.apply(e,t)})),e},$set:function(t,e,n){return j(n),t},$toggle:function(t,e){b(t,"$toggle");var n=t.length?l(e):e;return t.forEach((function(t){n[t]=!e[t]})),n},$unset:function(t,e,n,r){return b(t,"$unset"),t.forEach((function(t){Object.hasOwnProperty.call(e,t)&&(e===r&&(e=l(r)),delete e[t])})),e},$add:function(t,e,n,r){return x(e,"$add"),b(t,"$add"),"Map"===c(e)?t.forEach((function(t){var n=t[0],a=t[1];e===r&&e.get(n)!==a&&(e=l(r)),e.set(n,a)})):t.forEach((function(t){e!==r||e.has(t)||(e=l(r)),e.add(t)})),e},$remove:function(t,e,n,r){return x(e,"$remove"),b(t,"$remove"),t.forEach((function(t){e===r&&e.has(t)&&(e=l(r)),e.delete(t)})),e},$merge:function(t,e,n,r){return D(e,t),f(t).forEach((function(n){t[n]!==e[n]&&(e===r&&(e=l(r)),e[n]=t[n])})),e},$apply:function(t,e){return O(t),t(e)}},g=new p;function y(t,e,n){o(Array.isArray(t),(function(){return"update(): expected target of "+r(n)+" to be an array; got "+r(t)+"."})),b(e[n],n)}function b(t,e){o(Array.isArray(t),(function(){return"update(): expected spec of "+r(e)+" to be an array; got "+r(t)+". Did you forget to wrap your parameter in an array?"}))}function v(t,e){o(Array.isArray(t),(function(){return"Expected $splice target to be an array; got "+r(t)})),m(e.$splice)}function m(t){o(Array.isArray(t),(function(){return"update(): expected spec of $splice to be an array of arrays; got "+r(t)+". Did you forget to wrap your parameters in an array?"}))}function O(t){o("function"===typeof t,(function(){return"update(): expected spec of $apply to be a function; got "+r(t)+"."}))}function j(t){o(1===Object.keys(t).length,(function(){return"Cannot have more than one key in an object with $set"}))}function D(t,e){o(e&&"object"===typeof e,(function(){return"update(): $merge expects a spec of type 'object'; got "+r(e)})),o(t&&"object"===typeof t,(function(){return"update(): $merge expects a target of type 'object'; got "+r(t)}))}function x(t,e){var n=c(t);o("Map"===n||"Set"===n,(function(){return"update(): "+r(e)+" expects a target of type Set or Map; got "+r(n)}))}e.isEquals=g.update.isEquals,e.extend=g.extend,e.default=g.update,e.default.default=t.exports=d(e.default,e)}).call(this,n("4362"))},6253:function(t,e,n){"use strict";n("ec0b")},"7e60":function(t,e,n){"use strict";n.r(e),n.d(e,"MIN_POINT_DISTANCE",(function(){return S}));var r=n("2638"),a=n.n(r),o=n("2b0e"),i=n("5698"),s=n("ed09"),u=n("df78"),c=n("ed08"),d=n("b3f5"),f=n("d2a9");function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e=y(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function y(t){var e=b(t,"string");return"symbol"===l(e)?e:String(e)}function b(t,e){if("object"!==l(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}function v(t,e){return x(t)||D(t,e)||O(t,e)||m()}function m(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function O(t,e){if(t){if("string"===typeof t)return j(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?j(t,e):void 0}}function j(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function D(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,o,i,s=[],u=!0,c=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=o.call(n)).done)&&(s.push(r.value),s.length!==e);u=!0);}catch(d){c=!0,a=d}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw a}}return s}}function x(t){if(Array.isArray(t))return t}var S=20;e["default"]={name:"PolygonRender",components:{PolylineRender:d["default"],Vertice:f["default"]},props:{guides:Array,stageWidth:Number,stageHeight:Number,currentAnnotationId:String,handleChange:Function,draw:Object,transformer:Object,scale:Number,offset:Function,getZoom:Function,bounds:Object,shape:Object,onDragStart:Function,onDragMove:Function,onDragEnd:Function,setTransformer:Function},setup:function(t){var e=t.onDragStart,n=t.onDragMove,r=t.onDragEnd,a=t.getZoom,i=t.setTransformer,u=Object(s["n"])({drag:void 0}),d=function(t,e){var n=t(u);o["default"].nextTick((function(){Object.assign(u,n),"function"===typeof e&&e(u)}))},f=function(t){var e=t.map((function(e,n){return[e,t[(n+1)%t.length],n]})).filter((function(t){var e=v(t,2),n=e[0],r=e[1];return Object(c["v"])(n,r)>2*S}));return e},l=function(n){var r={x:n.x+n.dx,y:n.y+n.dy},a=h({},r),o={start:r,end:a};"function"===typeof e&&e(o,t.shape)},p=function(e){var r=a(),o=r.zoom;d((function(n){var r=o*t.scale,a=Object(c["W"])(t.shape.data.points),i=a.x0,s=a.x1,u=a.y0,d=a.y1,f=e.dx>0?Math.min(e.dx/r,t.bounds.width-s):Math.max(e.dx/r,-i),l=e.dy>0?Math.min(e.dy/r,t.bounds.height-d):Math.max(e.dy/r,-u);return h(h({},n),{},{drag:h(h({},e),{},{validDx:f,validDy:l})})}),(function(e){"function"===typeof n&&n(e,t.shape)}))},g=function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=a.prevState;i({isDragging:!1,id:t.shape.id,x:e.x,y:e.y,dx:0,dy:0}),o.isMoving&&d((function(t){return h(h({},t),{},{drag:h(h({},t.drag),e)})}),(function(e){"function"===typeof r&&r(e,t.shape)}))};return{state:u,updateState:d,renderMidPoints:f,selectionDragStart:l,selectionDragMove:p,selectionDragEnd:g}},render:function(){var t,e=this,n=arguments[0],r=this.shape,o=void 0===r?{}:r,s=this.transformer,l=void 0===s?{}:s,p=this.renderMidPoints,h=this.handleChange,g=this.draw,y=this.stageWidth,b=this.stageHeight,m=this.offset,O=null;o.id===l.id&&(O={translate:"translate(".concat(l.dx,", ").concat(l.dy,")"),isDragging:l.isDragging});var j={pointerEvents:g.isDrawing||null!==(t=O)&&void 0!==t&&t.isDragging?"none":"all"},D={props:{resetOnStart:!0,width:y,height:b,onDragStart:this.selectionDragStart,onDragMove:this.selectionDragMove,onDragEnd:this.selectionDragEnd}},x=o.id===this.currentAnnotationId;return n(u["a"],a()([{},D,{key:o.id}]),[function(t){var r;return n("g",[t.state.isDragging&&n("rect",{attrs:{width:y,height:b,fill:"transparent"},on:{mouseup:t.dragEnd,mousemove:t.dragMove,mouseleave:function(e){Object(c["gb"])(e,e.target)||t.dragEnd()}},style:{cursor:"move"}}),x&&e.guides.map((function(t,e){return n(d["default"],{key:e,attrs:{points:t,offset:m,fill:o.data.color,"stroke-opacity":.7,"stroke-dasharray":"5"}})})),n("g",{attrs:{transform:null===(r=O)||void 0===r?void 0:r.translate},style:j},[n(d["default"],{key:o.id,attrs:{points:o.data.points,fill:o.data.color,"stroke-dasharray":x?"10":void 0,"fill-opacity":x?.4:.1,curve:i["k"],offset:m},on:{mousedown:t.dragStart,mousemove:t.dragMove,mouseup:t.dragEnd}}),x&&[o.data.points.map((function(t,e){var r={props:{handlePointClick:function(){return h("REMOVE_POINT",{index:e,shape:o})},fill:o.data.color}};return n(f["default"],a()([{key:e,attrs:{index:e,position:t,shape:o,offset:m,draggable:!0,stageWidth:y,stageHeight:b,handleChange:h}},r]))})),p(o.data.points).map((function(t){var e=v(t,3),r=e[0],i=e[1],s=e[2],u={props:{handlePointClick:function(){return h("ADD_POINT",{point:Object(c["ub"])(r,i),index:s+1,shape:o})}}};return n(f["default"],a()([{key:"".concat(s,"-mid"),attrs:{index:s,position:Object(c["ub"])(r,i),shape:o,offset:m,innerRadius:3,outerRadius:8,fill:"#fff",fillOpacity:.6,className:"add-point"}},u]))}))]])])}])}}},"9f0e":function(t,e,n){"use strict";n.r(e);var r=n("2638"),a=n.n(r),o=n("ed09"),i=n("4d26"),s=n.n(i),u=n("2ef0"),c=n("ed08"),d=n("df78"),f=n("d2a9"),l=n("b3f5"),p=n("7e60");e["default"]={name:"SegmentationSelection",components:{Vertice:f["default"],PolylineRender:l["default"]},props:{stageWidth:Number,stageHeight:Number,className:String,state:{type:Object,default:function(){return{}}},draw:Object,handlePointClick:Function,handleChange:Function,transformZoom:Function},setup:function(t){var e=t.handleChange,n=t.transformZoom,r=Object(o["n"])({lastPoint:null}),a=function(){Object.assign(r,{lastPoint:null})},i=function(t){var a=n({x:t.x,y:t.y});Object.assign(r,{lastPoint:a}),e("DRAW_START",{point:a})},s=function(t,a){var o=n({x:t.x+t.dx,y:t.y+t.dy});e("DRAW_MOVE",{point:o}),a.shiftKey&&r.lastPoint&&Object(c["v"])(o,r.lastPoint)>p["MIN_POINT_DISTANCE"]&&(e("DRAW_POINT",{point:o}),Object.assign(r,{lastPoint:o}))},u=function(){a()},d=function(t,e){return 0===e?"#fff":void 0};return Object(o["r"])((function(){return t.state.status}),(function(t){"FINISHED"!==t&&""!==t||a()})),{drag:r,getFill:d,handleDragStart:i,handleDragMove:s,handleDragEnd:u}},render:function(){var t=arguments[0],e=this.stageWidth,n=this.stageHeight,r=this.className,o=this.handlePointClick,i=this.draw,c=this.getFill,p=this.state,h=p.unfinishedShape,g=void 0===h?{}:h,y=p.guides,b=g.points,v=void 0===b?[]:b,m={pointerEvents:i.isDrawing?"none":"all"},O={props:{width:e,height:n,resetOnStart:!0,onDragStart:this.handleDragStart,onDragMove:this.handleDragMove,onDragEnd:this.handleDragEnd}};return t("g",{attrs:{className:s()("db-brush",r)}},[t(d["a"],a()([{},O]),[function(r){return t("rect",{attrs:{className:"selection-overlay",fill:"transparent",x:0,y:0,width:e,height:n},style:{cursor:"crosshair"},on:{mousedown:r.dragStart,mousemove:r.dragMove,mouseup:r.dragEnd}})}]),!Object(u["isEmpty"])(v)&&t("g",[t(l["default"],{attrs:{points:y,"fill-opacity":"1","stroke-dasharray":"5"},style:m}),t(l["default"],{attrs:{points:v,"fill-opacity":"0.2"},style:m}),v.map((function(e,n){return t(f["default"],{key:n,attrs:{index:n,position:e,shape:g,handlePointClick:o,fill:c(e,n)}})}))])])}}},b3f5:function(t,e,n){"use strict";n.r(e);var r=n("2638"),a=n.n(r),o=n("2ef0"),i=n("5698"),s=n("3da5");e["default"]={name:"PolylineRender",functional:!0,props:{points:Array,curve:Function,fill:String,offset:Function},render:function(t,e){var n=e.props,r=n.fill,u=n.points,c=void 0===u?[]:u,d=n.offset;if(Object(o["isNil"])(c))return null;var f=e.data.style,l=Object(i["y"])().x((function(t){return t.x})).y((function(t){return t.y}));n.curve&&l.curve(n.curve);var p=r||s["defaultColor"],h={attrs:e.data.attrs,on:e.data.on},g=Object(o["isFunction"])(d)?c.map(d):c;return t("path",a()([{class:"interactive",attrs:{d:l(g),stroke:p,fill:p,"stroke-width":2}},h,{style:f}]))}}},d2a9:function(t,e,n){"use strict";n.r(e);var r=n("2638"),a=n.n(r),o=n("4d26"),i=n.n(o),s=n("2ef0"),u=n("ed08"),c=n("df78"),d=n("3da5");e["default"]={name:"Vertice",components:{Drag:c["a"]},props:{shape:Object,index:Number,position:Object,className:String,handlePointClick:{type:Function,default:u["xb"]},handleChange:Function,draggable:{type:Boolean,default:!1},outerRadius:{type:Number,default:10},innerRadius:{type:Number,default:4},fill:{type:String,default:d["defaultColor"]},fillOpacity:{type:Number,default:1},stageHeight:Number,stageWidth:Number,offset:Function},setup:function(t){var e=t.handleChange,n=function(n,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=a.prevState;!o.isMoving||0===o.dx&&0===o.dy||e("UPDATE_POINT",{drag:n,index:t.index,shape:t.shape})},r=function(n){e("MOVE_POINT",{drag:n,index:t.index,shape:t.shape})};return{dragEnd:n,dragMove:r}},render:function(){var t=this,e=arguments[0],n=this.stageWidth,r=this.stageHeight,o=this.className,d=this.draggable,f=this.position,l=void 0===f?{}:f,p=this.outerRadius,h=this.innerRadius,g=this.fill,y=this.fillOpacity,b=this.handlePointClick,v=this.offset,m=function(e){e.stopPropagation(),e.preventDefault(),b(t.index,t.shape,e)},O={props:{onDragMove:this.dragMove,onDragEnd:this.dragEnd,resetOnStart:!0,width:n,height:r}},j=Object(s["isFunction"])(v)?v(l):l;return e("g",{class:i()("vertice-group cp",o)},[e("circle",{attrs:{r:h,cx:j.x,cy:j.y,"fill-rule":"evenodd","fill-opacity":y,fill:g}}),e(c["a"],a()([{},O]),[function(t){return e("circle",{attrs:{r:p,cx:j.x,cy:j.y,"fill-opacity":0,opacity:0},on:{click:m,mousedown:d?t.dragStart:u["xb"],mousemove:d?t.dragMove:u["xb"],mouseup:d?t.dragEnd:u["xb"]}})}])])}}},ec0b:function(t,e,n){}}]);