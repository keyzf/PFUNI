(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-components-Popup"],{"2a15":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n("993f"));function o(t){return t&&t.__esModule?t:{default:t}}var a={components:{Popup:i.default},data:function(){return{htmlData:'<Popup ref="Popup1" :position="\'top\'"></Popup>',jsData:'export default {methods: {\n\t\t\t\t  showToast() { //显示头部\n\t\t\t\t   this.$refs.Popup.show({message:"显示在头部"});\n\t\t\t\t}\n\t\t\t  }\n\t\t\t}'}},onLoad:function(t){},created:function(){},methods:{showToastTop:function(){this.$refs.Popup1.show({message:"从上往下滑动"})},showToastCentre:function(){this.$refs.Popup2.show({message:"显示中间"})},showToastBottom:function(){this.$refs.Popup3.show({message:"向上滑"})},showToastLeft:function(){this.$refs.Popup4.show({message:"向右滑"})},showToastRight:function(){this.$refs.Popup5.show({message:"向左滑"})}}};e.default=a},"2c48":function(t,e,n){"use strict";n.r(e);var i=n("5d59"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},"50c3":function(t,e,n){"use strict";n.r(e);var i=n("2a15"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},5643:function(t,e,n){var i=n("e207");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("1bbe5d54",i,!0,{sourceMap:!1,shadowMode:!1})},"5d59":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"Popup",props:{position:{type:String,default:function(){return"middle"}}},data:function(){return{mask:!1,visible:!1,message:"",duration:2e3,icon:""}},onLoad:function(t){console.log(t+"=============")},created:function(t){console.log(t+"=============")},methods:{hide:function(){this.visible=!1,this.mask=!1},show:function(t){this.message="string"===typeof t?t:t.message,this.duration=t.duration||this.duration,this.icon=t.icon,this.visible=!0,this.mask=!0}},computed:{}};e.default=i},"68d2":function(t,e,n){var i=n("f702");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var o=n("4f06").default;o("68e55b66",i,!0,{sourceMap:!1,shadowMode:!1})},"6dc2":function(t,e,n){"use strict";var i=n("5643"),o=n.n(i);o.a},"8ab6":function(t,e,n){"use strict";n.r(e);var i=n("c142"),o=n("50c3");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("6dc2");var s=n("2877"),r=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,"30c0d42d",null);e["default"]=r.exports},"993f":function(t,e,n){"use strict";n.r(e);var i=n("bf50"),o=n("2c48");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("b814");var s=n("2877"),r=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,"bab1936e",null);e["default"]=r.exports},b814:function(t,e,n){"use strict";var i=n("68d2"),o=n.n(i);o.a},bf50:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.mask,expression:"mask"}],staticClass:"uni-mask",class:{show:t.mask},on:{click:function(e){e=t.$handleEvent(e),t.hide(e)}}}),"top"==t.position?n("v-uni-view",{staticClass:"uni-content-top",class:{"show-top":t.visible}},[n("v-uni-view",[t._v(t._s(t.message)+"--"+t._s(t.position))]),t._t("default")],2):t._e(),"middle"==t.position?n("v-uni-view",{staticClass:"uni-content-middle",class:{"show-middle":t.visible}},[n("v-uni-view",[t._v(t._s(t.message))]),t._t("default")],2):t._e(),"bottom"==t.position?n("v-uni-view",{staticClass:"uni-content-bottom",class:{"show-bottom":t.visible}},[n("v-uni-view",[t._v(t._s(t.message))]),t._t("default")],2):t._e(),"left"==t.position?n("v-uni-view",{staticClass:"uni-content-left",class:{"show-left":t.visible}},[n("v-uni-view",[t._v(t._s(t.message))]),t._t("default")],2):t._e(),"right"==t.position?n("v-uni-view",{staticClass:"uni-content-right",class:{"show-right":t.visible}},[n("v-uni-view",[t._v(t._s(t.message))]),t._t("default")],2):t._e()],1)},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},c142:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"bnt",on:{click:function(e){e=t.$handleEvent(e),t.showToastTop(e)}}},[t._v("点击上部弹出Popup-top")]),n("v-uni-view",{staticClass:"bnt",on:{click:function(e){e=t.$handleEvent(e),t.showToastCentre(e)}}},[t._v("点击中部弹出Popup-centre")]),n("v-uni-view",{staticClass:"bnt",on:{click:function(e){e=t.$handleEvent(e),t.showToastBottom(e)}}},[t._v("点击下部弹出Popup-bottom")]),n("v-uni-view",{staticClass:"bnt",on:{click:function(e){e=t.$handleEvent(e),t.showToastLeft(e)}}},[t._v("点击左侧弹出Popup-left")]),n("v-uni-view",{staticClass:"bnt",on:{click:function(e){e=t.$handleEvent(e),t.showToastRight(e)}}},[t._v("点击右侧弹出Popup-right")]),n("v-uni-view",{staticClass:"h2"},[t._v("Popup")]),n("v-uni-view",{staticClass:"tip"},[t._v("Popup组件主要用于非模态信息提醒，无需用户交互。")]),n("v-uni-view",[n("strong",[t._v("注:")]),t._v("由于此组件基于PFUIN实现，所以在使用之前，请确保自己了解过")]),n("v-uni-view",{staticClass:"h3"},[t._v("示例")]),n("pre",{staticClass:"pre html"},[t._v(""),n("element",{attrs:{contenteditable:"true"}},[t._v(t._s(t.htmlData))]),t._v(""),t._v("")]),n("v-uni-view",{staticClass:"title"},[t._v("time 字段决定了 Popup 显示的时间，如果设置为 0，则不会消失，需要手动调用组件的 hide 方法。")]),n("pre",{staticClass:"pre js"},[t._v(""),n("element",{attrs:{contenteditable:"true"}},[t._v(t._s(t.jsData))]),t._v("")]),n("v-uni-view",{staticClass:"list"},[n("v-uni-view",{staticClass:"th"},[n("v-uni-text",[t._v("属性名")]),n("v-uni-text",[t._v("说明")]),n("v-uni-text",[t._v("类型")]),n("v-uni-text",[t._v("默认值")]),n("v-uni-text",[t._v("版本")])],1),n("v-uni-view",{staticClass:"td"},[n("v-uni-text",[t._v("show")]),n("v-uni-text",[t._v("显示")]),n("v-uni-text",[t._v("function")]),n("v-uni-text",[t._v("无")]),n("v-uni-text",[t._v("1.0.0")])],1),n("v-uni-view",{staticClass:"td"},[n("v-uni-text",[t._v("hide")]),n("v-uni-text",[t._v("隐藏")]),n("v-uni-text",[t._v("function")]),n("v-uni-text",[t._v("无")]),n("v-uni-text",[t._v("1.0.0")])],1),n("v-uni-view",{staticClass:"td"},[n("v-uni-text",[t._v("time")]),n("v-uni-text",[t._v("显示时间(如果设置为 0，则不会消失，需要手动调用组件的 hide 方法)")]),n("v-uni-text",[t._v("Number")]),n("v-uni-text",[t._v("3000")]),n("v-uni-text",[t._v("1.0.0")])],1)],1),n("Popup",{ref:"Popup1",attrs:{position:"top"}}),n("Popup",{ref:"Popup2",attrs:{position:"middle"}}),n("Popup",{ref:"Popup3",attrs:{position:"bottom"}}),n("Popup",{ref:"Popup4",attrs:{position:"left"}}),n("Popup",{ref:"Popup5",attrs:{position:"right"}})],1)},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},e207:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-30c0d42d]{padding:%?40?%;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:%?14?%}.content .bnt[data-v-30c0d42d]{position:relative;width:100%;background:#2b9939;color:#fff;height:%?60?%;line-height:%?60?%;margin:0 auto %?40?%;text-align:center;font-size:%?16?%;-webkit-border-radius:%?10?%;border-radius:%?10?%}.content .h2[data-v-30c0d42d]{font-size:%?24?%;margin-bottom:%?10?%;font-weight:700}.content .h3[data-v-30c0d42d]{font-size:%?20?%;margin:%?20?% auto;font-weight:700;color:red}.content .tip[data-v-30c0d42d]{font-size:%?14?%;text-indent:%?15?%;margin:%?20?% auto}.content .pre[data-v-30c0d42d]{background:#eee;color:#000;padding:%?20?% %?20?%;-webkit-border-radius:%?10?%;border-radius:%?10?%;margin-bottom:%?10?%;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:auto;word-wrap:normal}.content .pre element[data-v-30c0d42d]{width:100%;display:block;height:100%}.content .pre .isCopy[data-v-30c0d42d]{position:absolute;right:%?10?%;bottom:%?5?%;background:#55a532;color:#fff;padding:%?5?%;-webkit-border-radius:%?2?%;border-radius:%?2?%}.content .html[data-v-30c0d42d],.content .js[data-v-30c0d42d]{position:relative}.content .html[data-v-30c0d42d]:before{content:"HTML";position:absolute;top:0;right:%?12?%;color:#999}.content .js[data-v-30c0d42d]:before{content:"JS";position:absolute;top:0;right:%?12?%;color:#999}.content .title[data-v-30c0d42d]{margin:%?20?% auto}.content .list[data-v-30c0d42d]{border:%?1?% solid #eee;border-right:0;border-bottom:0;margin:%?20?% auto}.content .th[data-v-30c0d42d]{background:#f8f8f8;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.content uni-text[data-v-30c0d42d]{display:inline-block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;height:%?50?%;line-height:%?50?%;text-align:center;border-right:%?1?% solid #eee}.content .td[data-v-30c0d42d]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.content uni-text[data-v-30c0d42d]{display:inline-block;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;text-align:center;min-height:%?50?%;line-height:%?50?%;border-right:%?1?% solid #eee;border-bottom:%?1?% solid #eee;padding:%?20?% auto;overflow:hidden}.content .swipe[data-v-30c0d42d],.content .swiper-warp[data-v-30c0d42d]{background:#2b9939}',""])},f702:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".uni-mask[data-v-bab1936e]{background:rgba(0,0,0,.6);position:fixed;width:100%;height:100%;left:0;top:0;bottom:0;right:0;z-index:999;visibility:hide;opacity:0}.uni-mask.show[data-v-bab1936e]{visibility:visible;opacity:1}.uni-content-top[data-v-bab1936e]{position:fixed;top:0;left:0;width:100%;height:90%;-webkit-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease;z-index:1000;background:#fff;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%)}.show-top[data-v-bab1936e]{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}.uni-content-middle[data-v-bab1936e]{position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:1000;background:#fff}.show-middle[data-v-bab1936e]{visibility:visible;opacity:1}.uni-content-bottom[data-v-bab1936e]{position:fixed;bottom:0;left:0;width:100%;height:90%;-webkit-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translateY(100%);-ms-transform:translateY(100%);transform:translateY(100%);z-index:1000;background:#fff}.show-bottom[data-v-bab1936e]{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}.uni-content-left[data-v-bab1936e]{position:fixed;top:0;left:0;width:80%;height:100%;-webkit-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease;z-index:1000;background:#fff;-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%)}.show-left[data-v-bab1936e]{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}.uni-content-right[data-v-bab1936e]{position:fixed;bottom:0;right:0;width:80%;height:100%;-webkit-transition:all .3s ease;-o-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translateX(100%);-ms-transform:translateX(100%);transform:translateX(100%);z-index:1000;background:#fff}.show-right[data-v-bab1936e]{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}",""])}}]);