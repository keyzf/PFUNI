(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-components-Select"],{"01d9":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"h2"},[t._v("Select")]),e("v-uni-view",{staticClass:"tip"},[t._v("Select组件主要用于非模态信息提醒，无需用户交互。"),e("strong",[t._v("注:")]),t._v("由于此组件基于uni-app实现，所以在使用之前，请确保自己了解过")]),e("v-uni-view",{staticClass:"h3"},[t._v("示例")]),e("Select",{attrs:{list:t.list},on:{getList:function(n){arguments[0]=n=t.$handleEvent(n),t.getList.apply(void 0,arguments)}}}),e("Select",{attrs:{list:t.list,isSelected:[0,3],isCheckbox:!0},on:{getList:function(n){arguments[0]=n=t.$handleEvent(n),t.moreGetList.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"tip"},[t._v("结果:"+t._s(t.result))])],1)},o=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return o})},3611:function(t,n,e){"use strict";e.r(n);var i=e("01d9"),o=e("72e7");for(var s in o)"default"!==s&&function(t){e.d(n,t,function(){return o[t]})}(s);e("dab7");var a=e("2877"),r=Object(a["a"])(o["default"],i["a"],i["b"],!1,null,"7e5403b8",null);n["default"]=r.exports},"39d2":function(t,n,e){var i=e("8274");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=e("4f06").default;o("fe880d34",i,!0,{sourceMap:!1,shadowMode:!1})},"72e7":function(t,n,e){"use strict";e.r(n);var i=e("f477"),o=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);n["default"]=o.a},8274:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-7e5403b8]{padding:%?40?%;box-sizing:border-box;font-size:%?14?%}.content .bnt[data-v-7e5403b8]{position:relative;width:100%;background:#2b9939;color:#fff;height:%?60?%;line-height:%?60?%;margin:0 auto %?40?%;text-align:center;font-size:%?16?%;border-radius:%?10?%}.content .h2[data-v-7e5403b8]{font-size:%?24?%;margin-bottom:%?10?%;font-weight:700}.content .h3[data-v-7e5403b8]{font-size:%?20?%;margin:%?20?% auto;font-weight:700;color:red}.content .tip[data-v-7e5403b8]{font-size:%?14?%;text-indent:%?15?%;margin:%?20?% auto}.content .title[data-v-7e5403b8]{margin:%?20?% auto}',""])},dab7:function(t,n,e){"use strict";var i=e("39d2"),o=e.n(i);o.a},f477:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("3ede"),o={components:{Select:i.Select},data:function(){return{result:"",list:["苹果",{value:"香蕉",disabled:!0},"葡萄","芒果","大白菜"]}},onLoad:function(t){},created:function(){},methods:{getList:function(t){console.log("获取据据"),console.log(t),this.result=t},moreGetList:function(t){this.result=t,console.log("获取据据"),console.log(t)}}};n.default=o}}]);