(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-detail-goods-detail"],{"130e":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* uView */.content[data-v-4627d566]{display:flex;flex-direction:column;position:relative}.scollview[data-v-4627d566]{margin-bottom:%?110?%}.carsol-goods-price[data-v-4627d566]{display:flex;flex-direction:row;align-items:flex-end;margin-top:%?45?%;padding-left:%?28?%}.carsol-goods-price .goods-price-l[data-v-4627d566]{font-size:%?28?%;color:#fd2c54;font-weight:700;margin-bottom:%?7?%}.carsol-goods-price .goods-price[data-v-4627d566]{font-size:%?50?%;color:#fd2c54;font-weight:700}.carsol-goods-price .goods-price_discount[data-v-4627d566]{width:%?194?%;height:%?42?%;background:rgba(253,44,84,.05);border:NaNpx solid #fd2c54;border-radius:%?21?%;font-size:%?22?%;color:#fd2c54;line-height:%?42?%;text-align:center;margin-left:%?26?%;margin-bottom:%?7?%}.goods_title[data-v-4627d566]{margin-top:%?20?%;padding-left:%?28?%;font-size:%?33?%;font-weight:500;color:#333;line-height:%?42?%}.discount_area[data-v-4627d566]{display:flex;padding:%?28?%}.discount_area .discount_item[data-v-4627d566]{line-height:%?39?%;margin-right:%?17?%;padding-left:%?19?%;padding-right:%?19?%;height:%?39?%;background:#fd2c54;border-radius:%?19?%;font-size:%?22?%;color:#fff}.line01[data-v-4627d566]{width:%?750?%;height:%?22?%;background-color:#f9f9f9}.yhq-area[data-v-4627d566]{display:flex;flex-direction:column;padding-left:%?28?%;padding-top:%?30?%}.yhq-area .send-area[data-v-4627d566]{display:flex;align-items:center;margin-bottom:%?40?%}.yhq-area .send-area .title1[data-v-4627d566]{color:#868686;font-size:%?25?%}.yhq-area .send-area .title2[data-v-4627d566]{padding-left:%?30?%;color:#333;font-size:%?25?%}.yhq-area .send-area .lines02[data-v-4627d566]{margin-left:%?30?%;width:%?1?%;height:%?25?%;background-color:#999}.yhq-area .goods-reduced-zengsong[data-v-4627d566]{display:flex;flex-direction:row;flex-wrap:nowrap;padding-bottom:%?15?%}.yhq-area .goods-reduced-zengsong .title3[data-v-4627d566]{font-size:%?25?%;color:#868686;margin-right:%?20?%}.yhq-area .goods-reduced-common-view[data-v-4627d566]{flex:1;min-width:0}.yhq-area .goods-reduced-common-view .goods-reduced-common-text[data-v-4627d566]{margin-right:%?10?%;padding:0 %?12?%;color:#fd2c54;background-color:#fff2ed;line-height:%?30?%;height:%?30?%;border-radius:%?30?%;font-size:%?22?%}.goods-comment[data-v-4627d566]{padding-top:%?20?%;padding-bottom:%?20?%;padding-left:%?28?%;display:flex;flex-direction:column}.goods-comment .goods-cmt-num-view[data-v-4627d566]{display:flex;flex-direction:row;justify-content:space-between}.goods-comment .goods-cmt-num-view .right[data-v-4627d566]{color:#929292;font-size:%?28?%;margin-right:%?25?%}.goods-cmt-lst[data-v-4627d566]{padding-right:%?29?%}.goods-cmt-lst .up[data-v-4627d566]{margin-top:%?30?%;margin-bottom:%?30?%;display:flex;align-items:center;justify-content:space-between}.goods-cmt-lst .up .up_left[data-v-4627d566]{display:flex;align-items:center}.goods-cmt-lst .up .up_left .user[data-v-4627d566]{margin-left:%?15?%}.goods-cmt-lst .up .time[data-v-4627d566]{color:#999;font-size:%?22?%}.goods-cmt-lst .pj_c[data-v-4627d566]{margin-left:%?77?%;font-size:%?28?%;font-weight:700;color:#333}.store[data-v-4627d566]{padding:%?30?%;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.store .store-left[data-v-4627d566]{display:flex}.store .name[data-v-4627d566]{padding-top:%?12?%;display:flex;flex-direction:column;margin-left:%?20?%}.detail[data-v-4627d566]{display:flex;flex-direction:column;background-color:#f9f9f9}.detail .detail-title[data-v-4627d566]{width:100%;height:%?98?%;line-height:%?98?%;display:flex;align-items:center;justify-content:center}.u-content[data-v-4627d566]{display:flex;margin-top:%?20?%;padding:%?24?%;font-size:%?32?%;color:#606266;line-height:1.6}.bottom[data-v-4627d566]{height:%?105?%;width:%?750?%;background-color:#fff;display:flex;flex-direction:row;align-items:center;position:fixed;bottom:0;left:0;right:0}.bottom .b[data-v-4627d566]{width:%?100?%;display:flex;flex-direction:column;align-items:center;font-size:%?21?%;color:#666}.bottom .b-col[data-v-4627d566]{margin-left:%?5?%}.bottom .b-car[data-v-4627d566]{margin-right:%?10?%}.bottom .b-add-car[data-v-4627d566]{width:%?220?%;height:100%;text-align:center;line-height:%?105?%;background:linear-gradient(115deg,#ffc000,#ff7b10);font-size:%?28?%;color:#fff;font-weight:700}.bottom .b-buy[data-v-4627d566]{width:%?220?%;height:100%;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(-55deg,#f11604,#ff4d1d);color:#fff}.bottom .b-buy .b-buy-title[data-v-4627d566]{font-size:%?28?%;font-weight:700}.bottom .b-buy .b-buy-dis[data-v-4627d566]{font-size:%?25?%}.top[data-v-4627d566]{padding:%?17?%;width:100%;display:flex;position:fixed;align-items:center;flex-direction:row;justify-content:space-between;top:100;left:0;right:0;z-index:1000}',""]),t.exports=e},"3c5e":function(t,e,i){"use strict";(function(t){i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(i("c7eb")),s=a(i("1da1")),n=a(i("ade3"));i("ac1f"),i("841c");var d=i("4adc"),r={mounted:function(){var e=document.createElement("script");e.type="text/javascript",e.src="//web.cdn.openinstall.io/openinstall.js",e.addEventListener("load",(function(){var e=OpenInstall.parseUrlParams();t.log(e),new OpenInstall({appKey:"i3302g",preferWakeup:!0,mask:function(){return'<div id="openinstall_shadow"style="position:fixed;left:0;top:0;background:transparent;filter:alpha(opacity=50);width:100%;height:100%;z-index:10000;"> </div>'},onready:function(){var t=this,e=document.getElementById("downloadButton");t.schemeWakeup(),e.style.visibility="visible",e.onclick=function(){t.wakeupOrInstall();var e=location.search,i=document.createElement("a");return i.href="com.mc.phonelive://goods"+e,i.click(),!1},e.click()}},e)}),!1),document.head.appendChild(e)},data:function(){var t;return t={goodsDetail:{},goodsid:"",banners:[],couponList:[],goodsComment:[],count:5,value:2,content:"",shopMsg:{}},(0,n.default)(t,"goodsid","2"),(0,n.default)(t,"goodsskuid","10"),t},onLoad:function(t){this.goodsskuid=t.goods_skuid||"",this.goodsid=t.goods_id||"",this.getGoodsDetailData(),this.getCommentGoodsData()},methods:{getGoodsDetailData:function(){var e=this;return(0,s.default)((0,o.default)().mark((function i(){var a,s;return(0,o.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,(0,d.goodsInfo)({sku_id:e.goodsskuid});case 3:a=i.sent,e.goodsDetail=a.goods_sku_detail,e.shopMsg=a.shop_info,e.sku_images=a.goods_sku_detail.sku_images,s=a.goods_sku_detail.sku_images.split(","),e.banners=s,i.next=14;break;case 11:i.prev=11,i.t0=i["catch"](0),t.log(i.t0);case 14:case"end":return i.stop()}}),i,null,[[0,11]])})))()},getCommentGoodsData:function(){var e=this;return(0,s.default)((0,o.default)().mark((function i(){var a;return(0,o.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,i.next=3,(0,d.getCommentGoods)({goods_id:e.goodsid,page:"1",page_size:"2"});case 3:a=i.sent,e.goodsComment=a.list,i.next=10;break;case 7:i.prev=7,i.t0=i["catch"](0),t.log(i.t0);case 10:case"end":return i.stop()}}),i,null,[[0,7]])})))()}}};e.default=r}).call(this,i("5a52")["default"])},"8d1d":function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return s})),i.d(e,"a",(function(){return a}));var a={uSwiper:i("93e5").default,uRate:i("d9c6").default,uParse:i("c5e8").default},o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content test"},[a("v-uni-scroll-view",{attrs:{"scroll-y":"true"}},[a("v-uni-view",{staticClass:"scollview"},[a("v-uni-view",{staticClass:"carsol"},[a("u-swiper",{attrs:{list:t.banners,height:"750",indicatorMode:"dot",indicatorInactiveColor:"#000000"}}),a("v-uni-view",{staticClass:"carsol-goods-price"},[a("v-uni-text",{staticClass:"goods-price-l"},[t._v("￥")]),a("v-uni-text",{staticClass:"goods-price"},[t._v(t._s(this.goodsDetail.price))]),a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:t.goodsDetail.after_coupon_money>0,expression:"goodsDetail.after_coupon_money>0"}],staticClass:"goods-price_discount"},[t._v("券后￥"+t._s(t.goodsDetail.after_coupon_money)+"起")])],1),a("v-uni-view",{staticClass:"goods_title"},[t._v(t._s(t.goodsDetail.sku_name))]),a("v-uni-view",{staticClass:"discount_area"},[a("v-uni-view",{staticClass:"discount_item"},[t._v("佣金比例："+t._s(t.goodsDetail.member_commission_rate)+"%")]),a("v-uni-view",{staticClass:"discount_item"},[t._v("预计佣金："+t._s(t.goodsDetail.member_commission_money)+"元")])],1)],1),a("v-uni-view",{staticClass:"line01"}),a("v-uni-view",{staticClass:"yhq-area"},[a("v-uni-view",{staticClass:"send-area"},[a("v-uni-view",{staticClass:"title1"},[t._v("配送")]),a("v-uni-view",{staticClass:"title2"},[t._v("全国寄送")]),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.goodsDetail.is_free_shipping,expression:"goodsDetail.is_free_shipping==1"}],staticClass:"lines02"}),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1==t.goodsDetail.is_free_shipping,expression:"goodsDetail.is_free_shipping==1"}],staticClass:"title2"},[t._v("快递：免邮")])],1),a("v-uni-view",{staticClass:"goods-reduced-zengsong"},[a("v-uni-text",{staticClass:"title3"},[t._v("优惠券")]),a("v-uni-view",{staticClass:"goods-reduced-common-view"},[a("v-uni-scroll-view",{attrs:{"scroll-x":"true",indicator:"false"}},t._l(t.goodsDetail.goods_coupon_list,(function(e,i){return a("v-uni-text",{key:e.coupon_type_id,staticClass:"goods-reduced-common-text"},[t._v("满"+t._s(e.at_least)+"减"+t._s(e.money))])})),1)],1)],1)],1),a("v-uni-view",{staticClass:"line01"}),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.goodsComment.length>0,expression:"goodsComment.length>0"}],staticClass:"goods-comment"},[a("v-uni-view",{staticClass:"goods-cmt-num-view"},[a("v-uni-text",[t._v("宝贝评价（"+t._s(t.goodsComment.length)+"）")]),a("v-uni-view",{staticClass:"right"},[a("v-uni-text",[t._v("查看更多")]),a("v-uni-image",{staticStyle:{width:"14rpx",height:"24rpx","margin-left":"5rpx"},attrs:{src:i("ffc3")}})],1)],1),t._l(t.goodsComment,(function(e,i){return a("v-uni-view",{key:e.evaluate_id,staticClass:"goods-cmt-lst"},[a("v-uni-view",{staticClass:"up"},[a("v-uni-view",{staticClass:"up_left"},[a("v-uni-image",{staticStyle:{width:"60rpx",height:"60rpx","background-color":"#007AFF","border-radius":"60rpx"},attrs:{mode:"aspectFill",src:e.member_headimg}}),a("v-uni-view",{staticClass:"user"},[a("v-uni-text",{staticStyle:{"font-size":"28rpx","font-weight":"bold",color:"#333333"}},[t._v(t._s(e.member_name))]),a("v-uni-view",{staticClass:"star-icons"},[a("v-uni-text",{staticStyle:{"font-size":"25rpx",color:"#666666"}},[t._v("评分")]),a("u-rate",{attrs:{count:t.count,inactiveColor:"#999999",activeColor:"#FF992B",disabled:!0},model:{value:e.scores,callback:function(i){t.$set(e,"scores",i)},expression:"item.scores"}})],1)],1)],1),a("v-uni-view",{staticClass:"time"},[t._v(t._s(e.create_time))])],1),a("v-uni-text",{staticClass:"pj_c"},[t._v(t._s(e.content))])],1)}))],2),a("v-uni-view",{staticClass:"line01"}),a("v-uni-view",{staticClass:"store"},[a("v-uni-view",{staticClass:"store-left"},[a("v-uni-image",{staticStyle:{width:"104rpx",height:"104rpx","border-radius":"10rpx"},attrs:{src:t.shopMsg.logo,mode:"aspectFill"}}),a("v-uni-view",{staticClass:"name"},[a("v-uni-text",{staticStyle:{"font-size":"29rpx",color:"#333333","font-weight":"600"}},[t._v(t._s(t.shopMsg.site_name))]),a("v-uni-text",{staticStyle:{"font-size":"24rpx","font-weight":"400",color:"#999999","margin-top":"15rpx"}},[t._v("已售"+t._s(t.shopMsg.shop_sales)+"件")])],1)],1),a("v-uni-text",{staticClass:"enter_shop",staticStyle:{width:"153rpx",height:"42rpx","background-color":"#FFFFFF",border:"1rpx solid #FD2C55",opacity:"0.67","border-radius":"20rpx",color:"#FD2C55","font-size":"25rpx","text-align":"center","line-height":"40rpx"}},[t._v("进店逛逛")])],1),a("v-uni-view",{staticClass:"line01"}),a("v-uni-view",{staticClass:"detail"},[a("v-uni-view",{staticClass:"detail-title"},[t._v("--商品详情--")]),a("v-uni-view",{staticClass:"u-content"},[a("u-parse",{attrs:{html:t.content}})],1)],1)],1)],1),a("v-uni-view",{staticClass:"bottom",attrs:{id:"downloadButton"}},[a("v-uni-view",{staticClass:"b b-col"},[a("v-uni-image",{staticStyle:{width:"50rpx",height:"50rpx"},attrs:{src:i("cbed"),mode:"aspectFill"}}),a("v-uni-text",[t._v("收藏")])],1),a("v-uni-view",{staticClass:"b b-kf"},[a("v-uni-image",{staticStyle:{width:"50rpx",height:"50rpx"},attrs:{src:i("1728"),mode:"aspectFill"}}),a("v-uni-text",[t._v("客服")])],1),a("v-uni-view",{staticClass:"b b-car"},[a("v-uni-image",{staticStyle:{width:"50rpx",height:"50rpx"},attrs:{src:i("fade"),mode:"aspectFill"}}),a("v-uni-text",[t._v("购物车")])],1),a("v-uni-text",{staticClass:"b-add-car"},[t._v("加入购物车")]),a("v-uni-view",{staticClass:"b-buy"},[a("v-uni-text",{staticClass:"b-buy-title"},[t._v("领券购买")]),a("v-uni-text",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"b-buy-dis"},[t._v("券后￥"+t._s(t.goodsDetail.discount_price)+"起")])],1)],1)],1)},s=[]},a327:function(t,e,i){var a=i("130e");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var o=i("4f06").default;o("db3cd70c",a,!0,{sourceMap:!1,shadowMode:!1})},a9e0:function(t,e,i){"use strict";i.r(e);var a=i("3c5e"),o=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(s);e["default"]=o.a},b049:function(t,e,i){"use strict";var a=i("a327"),o=i.n(a);o.a},b78f:function(t,e,i){"use strict";i.r(e);var a=i("8d1d"),o=i("a9e0");for(var s in o)["default"].indexOf(s)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(s);i("b049");var n=i("f0c5"),d=Object(n["a"])(o["default"],a["b"],a["c"],!1,null,"4627d566",null,!1,a["a"],void 0);e["default"]=d.exports},fade:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAACf1BMVEUAAAAAAABVVVWAgIBmZmZtbW1gYGBxcXFmZmZdXV1iYmJtbW1mZmZgYGBpaWljY2NmZmZhYWFkZGRmZmZiYmJkZGRqampmZmZjY2NoaGhkZGRpaWljY2NnZ2dlZWVmZmZnZ2dlZWVmZmZnZ2dlZWVoaGhmZmZkZGRnZ2dlZWVmZmZkZGRnZ2doaGhkZGRnZ2dlZWVoaGhmZmZnZ2dlZWVnZ2dmZmZlZWVlZWVnZ2dmZmZlZWVnZ2dnZ2dlZWVnZ2dlZWVnZ2dmZmZlZWVnZ2dlZWVnZ2dmZmZlZWVnZ2dlZWVnZ2dmZmZlZWVnZ2dlZWVnZ2dmZmZlZWVmZmZmZmZlZWVmZmZmZmZnZ2dmZmZlZWVmZmZmZmZmZmZlZWVmZmZmZmZmZmZlZWVmZmZnZ2dmZmZmZmZnZ2dmZmZmZmZnZ2dmZmZlZWVmZmZmZmZnZ2dmZmZmZmZnZ2dmZmZlZWVmZmZmZmZnZ2dmZmZlZWVmZmZmZmZnZ2dmZmZlZWVmZmZmZmZnZ2dmZmZlZWVmZmZmZmZnZ2dmZmZmZmZmZmZnZ2dmZmZlZWVmZmZnZ2dmZmZlZWVmZmZnZ2dmZmZlZWVmZmZmZmZnZ2dmZmZlZWVmZmZmZmZlZWVmZmZmZmZnZ2dmZmZmZmZnZ2dmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmaLobXUAAAA1HRSTlMAAQMEBQcICQoLDQ4PEBESFBUXGRocHR4fICEiJCUmKCorLS8wMTIzNDU3ODk7PT4/QEFDREVGR0lKS0xNT1FSU1RVVldYWVpbXF1eX2BhYmNkZWdpamtsbW5vcHFzdHh7fX6AgYKFhomKi4yNjo+Qk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqrK2ur7Cys7S1tri5uru8vb6/wcPExcbHyMvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ufo6err7O3u7/Dx8vP09fb3+Pn6+/z9/pC9s4IAAAMoSURBVBgZ7cH7VxR1AMbht4RacPOCBRFGKkZWJFmZGZplhhqomxQhaWalCUSUFhKWt1C7kRUplAkV3aQI1C6kWdZGZIkGfP6gZtwFt90Z5guHXzqH59GoUSNhdntXpOO70jU8/xDl3FQNSy/Rvtaw3NEWjIRlsobHFyHhY2C+RsAWoFAjYC3Q9FBh4cNFRatWFRevXumTJbswP16WGwKBFcuXLcvPu3/pksWLc+9bdO/ChffcfVuiYuUQ5chlUgBo9UtLcfZrQDGuIdocqRVLjtSKm7mKFv8H/xVMktYCf14uPYabFsX4CHi97OmysrLS0tKSkseTZckvfypNlpXPbtr8/AuVW6perK7euvWll7dt275jZ00fnFGM7cBdGopkoEMx1gGVGoongL2KsQBo0FA0AQWKMQ04eZHM+XuANMXw/QVcKXPzgWNy0AzcKnMVQJUc1ABFMtcC5MrBemCTjE3EkiQHeUCdjC0CPpeTLKBDxiqBcjnxnwUmydQR4E45agOyZegqoCdRjvYBBTL0AHBQzjYCFTK0C3hSzgLAPhn6CZgpZ9nAUZmZBpyOk7MJPdA3UUZWA2/LzTEgS0beAh6VmzpguUzEdQHT5aYcKJWJm4Bf5KoAeE0m1gG75Wo20C4TjUCBXE3Askbe8rGkyd1+LIcb6hsc1R8Ia8bylQYxGXPXazBzezGUp8Gl7/wdb12vZsrT2BkzvcwYp/+rrJL3mz945mZFydxwoPngc7fL1KU1hLzpV6QqQvZfISOJ7fT7YbwGjPmEfp2pMnGICz7VgDe44DsZmIelaUHGvHosuQq7EcuXuRlzarEUy1sdcEi294BGhb0CHJZtD9AmTxefgr6psqX0wulLFHIUmCVbwt9AkryM7YZuhZwEUhTyMzBO57UA18lL3G/QmyJbwhk451fIt8C1Oi8IpMrTh8Bu2TYDLQqrBd6VbT1wQt5WYKme4ru6AssaheVg2Tvdl7oBy0YZ6MAWxHZqjPp9hi2IrTtRBtLP0q8vQwMmBRkwS0amfEHIN5mKkNxISMctMhV458fO43UPKsqS2u87TzQ8Eq9Ro0bcv7jQ4n/C9Sd7AAAAAElFTkSuQmCC"}}]);