webpackJsonp([0,2],[function(t,s,a){t.exports=a.p+"img/img-1.8585c1e.png"},,,function(t,s,a){t.exports=a.p+"img/about-4.4cb08ff.png"},function(t,s,a){"use strict";var n=a(2),e=a.n(n),i=a(34),c=a(9);e.a.use(i.a);var r=new i.a({routes:c.a});s.a=r},function(t,s,a){"use strict";var n=a(2),e=a.n(n),i=a(36);e.a.use(i.a),s.a=new i.a.Store({strict:!0,state:{user:{}},mutations:{setUserData:function(t,s){t.user=s}}})},function(t,s){},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=a(21),e=a.n(n),i=a(20),c=a.n(i);s.default={data:function(){return{}},components:{MyHeader:e.a,MyFooter:c.a},methods:{},created:function(){"/"===this.$route.name&&this.goPage("index")}}},function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{}},methods:{loadMap:function(){var t=document.createElement("script");t.src="http://api.map.baidu.com/api?v=2.0&ak=KOHyYqHtfpzGQRGtMXcncdG6NjAPffOW&callback=initialize",document.body.appendChild(t)},baiduMap:function(){new BMap.Map("map").centerAndZoom(new BMap.Point(121.491,31.233),11)}},created:function(){this.loadMap()}}},function(t,s,a){"use strict";s.a=[{path:"*",name:"/",component:a(22),children:[{path:"/index",name:"index",component:a(25)},{path:"/product",name:"product",component:a(26)},{path:"/about",name:"about",component:a(23)},{path:"/contact",name:"contact",component:a(24)}]}]},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s,a){t.exports=a.p+"img/about-1.421d3e4.png"},function(t,s,a){t.exports=a.p+"img/about-2.b28071f.png"},function(t,s,a){t.exports=a.p+"img/about-3.b7f3097.png"},function(t,s,a){a(15);var n=a(1)(null,a(32),"data-v-cfa645d6",null);t.exports=n.exports},function(t,s,a){a(13);var n=a(1)(null,a(30),"data-v-8d417df2",null);t.exports=n.exports},function(t,s,a){a(10);var n=a(1)(a(7),a(27),"data-v-1135ddb3",null);t.exports=n.exports},function(t,s,a){a(16);var n=a(1)(null,a(33),"data-v-f14e9b08",null);t.exports=n.exports},function(t,s,a){a(11);var n=a(1)(a(8),a(28),"data-v-1672d7cf",null);t.exports=n.exports},function(t,s,a){a(14);var n=a(1)(null,a(31),"data-v-b1dee57e",null);t.exports=n.exports},function(t,s,a){a(12);var n=a(1)(null,a(29),"data-v-89cafdc4",null);t.exports=n.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("my-header"),t._v(" "),a("router-view"),t._v(" "),a("my-footer")],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;return(t._self._c||s)("div")},staticRenderFns:[]}},function(t,s,a){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"contain"},[n("div",{staticClass:"main"},[n("div",{staticClass:"title"},[n("span",{staticClass:"icon"}),t._v("产品简介\n\t\t")]),t._v(" "),n("div",{staticClass:"product"},[n("div",{staticClass:"left-img"},[n("img",{attrs:{src:a(0)}})]),t._v(" "),n("div",{staticClass:"right-content"},[n("h3",[t._v("产品一")]),t._v(" "),n("p",[t._v("一家专业生产各种包装纸牛皮纸等的包装纸厂，\n\t\t\t\t海外销往")])])]),t._v(" "),n("div",{staticClass:"product"},[n("div",{staticClass:"left-img"},[n("img",{attrs:{src:a(0)}})]),t._v(" "),n("div",{staticClass:"right-content"})]),t._v(" "),n("div",{staticClass:"product"},[n("div",{staticClass:"left-img"},[n("img",{attrs:{src:a(0)}})]),t._v(" "),n("div",{staticClass:"right-content"})])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"header"},[t._m(0),t._v(" "),a("div",{staticClass:"banner"},[a("ul",{staticClass:"g-clear"},[a("li",[a("router-link",{class:{active:"index"==t.$route.name},attrs:{to:"/index"}},[a("span",{staticClass:"banner-h"},[t._v("首页")]),a("span",{staticClass:"banner-c"},[t._v("HOME")])])],1),t._v(" "),a("li",[a("router-link",{class:{active:"product"==t.$route.name},attrs:{to:"/product"}},[a("span",{staticClass:"banner-h"},[t._v("产品介绍")]),a("span",{staticClass:"banner-c"},[t._v("PRODUCT")])])],1),t._v(" "),a("li",[a("router-link",{class:{active:"about"==t.$route.name},attrs:{to:"/about"}},[a("span",{staticClass:"banner-h"},[t._v("关于我们")]),a("span",{staticClass:"banner-c"},[t._v("ABOUT US")])])],1),t._v(" "),a("li",[a("router-link",{class:{active:"contact"==t.$route.name},attrs:{to:"/contact"}},[a("span",{staticClass:"banner-h"},[t._v("联系我们")]),a("span",{staticClass:"banner-c"},[t._v("CONTACT US")])])],1)])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("header",{staticClass:"g-clear"},[a("div",{staticClass:"left-section"},[a("i",{staticClass:"logo"}),t._v(" "),a("span",[t._v("桐庐信达包装纸厂")])]),t._v(" "),a("div",{staticClass:"right-section"},[a("i",{staticClass:"icon-phone"}),t._v(" "),a("div",{staticClass:"section"},[a("div",{staticClass:"section-line1"},[t._v("联系电话 Telphone")]),t._v(" "),a("div",{staticClass:"section-line2"},[t._v("13906817500")])])])])}]}},function(t,s,a){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"container"},[n("div",{staticClass:"index-img"}),t._v(" "),n("div",{staticClass:"product-cotainer"},[n("div",{staticClass:"title"},[n("p",[t._v("产品展示")]),t._v(" "),n("p",[t._v("PRODUCTS")]),t._v(" "),n("div",{staticClass:"orange-line"})]),t._v(" "),n("div",{staticClass:"img-container"},[n("div",{staticClass:"img"},[n("img",{attrs:{src:a(0)}}),t._v(" "),n("span",{staticClass:"desc"},[t._v("图片1")])]),t._v(" "),n("div",{staticClass:"img"},[n("img",{attrs:{src:a(0)}}),t._v(" "),n("span",{staticClass:"desc"},[t._v("图片2")])]),t._v(" "),n("div",{staticClass:"img"},[n("img",{attrs:{src:a(0)}}),t._v(" "),n("span",{staticClass:"desc"},[t._v("图片3")])]),t._v(" "),n("div",{staticClass:"img"},[n("img",{attrs:{src:a(0)}}),t._v(" "),n("span",{staticClass:"desc"},[t._v("图片4")])])])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"footer"},[a("div",{staticClass:"footer-main"},[a("div",{staticClass:"left-section"},[a("i",{staticClass:"logo"}),t._v(" "),a("span",[t._v("桐庐信达包装纸厂")])]),t._v(" "),a("div",{staticClass:"right-section"},[a("ul",[a("li",[t._v("公司地址："),a("span",[t._v("江西省抚州市南城县徐家乡工业园")])]),t._v(" "),a("li",[t._v("手机号码："),a("span",[t._v("13906817500")])]),t._v(" "),a("li",[t._v("微  信  号："),a("span",[t._v("13968061588")])]),t._v(" "),a("li",[t._v("负  责  人："),a("span",[t._v("徐经理")])])])])])])}]}},function(t,s,a){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"container"},[n("div",{staticClass:"main"},[n("h3",[t._v("江西永泰诚信包装纸厂")]),t._v(" "),n("div",{staticClass:"content"},[n("p",[t._v("主题： 一家专业生产各类条纹纸、牛皮纸等包装纸厂")]),t._v(" "),n("p",[t._v("专业生产各类条纹纸、牛皮纸")]),t._v(" "),n("p",{staticClass:"last-p"},[t._v("企业介绍： 江西南城县永泰纸业有限公司，位于江西省南城县徐家乡工业区,\n\t\t\t\t\t206国道左侧距县城及高速公路仅十公里环境优越，交通运输便捷。\n公司专注于本行业近20年，专业生产精致全木浆牛皮纸，本色条纹牛皮纸，金色木浆条纹纸，防潮原纸，胶带原纸，拖蜡原纸等包装纸，\n广泛应用于信封，工业品包装，中药包装，水果包装等文化工农业纸制品包装。产品销往浙江，上海，山东等十几个省市且条纹牛皮制，\n防潮纸等出口到印尼，巴基斯坦等国")]),t._v(" "),n("span",{staticClass:"icon-tangle"})]),t._v(" "),n("div",{staticClass:"images"},[n("p",[n("img",{attrs:{src:a(17)}}),t._v(" "),n("img",{attrs:{src:a(18)}}),t._v(" "),n("img",{attrs:{src:a(19)}})]),t._v(" "),n("p",[n("img",{attrs:{src:a(3)}}),t._v(" "),n("img",{attrs:{src:a(3)}}),t._v(" "),n("img",{attrs:{src:a(3)}})])])])])}]}},,,,,function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=a(6),e=(a.n(n),a(2)),i=a.n(e),c=a(4),r=a(5);i.a.prototype.goPage=function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};c.a.push({name:t,params:s})},new i.a({store:r.a,router:c.a}).$mount("#app")}],[38]);
//# sourceMappingURL=app.1eb76460faa6a9f701f7.js.map