(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68463b0c"],{"0362":function(t,e,c){},"25c1":function(t,e,c){},"3c70":function(t,e,c){},4384:function(t,e,c){},"4fd1":function(t,e,c){},7519:function(t,e,c){"use strict";var i=c("0362"),n=c.n(i);n.a},"94a1":function(t,e,c){t.exports=c.p+"img/tick.5228ea23.svg"},ac6a:function(t,e,c){for(var i=c("cadf"),n=c("0d58"),s=c("2aba"),a=c("7726"),r=c("32e9"),o=c("84f2"),l=c("2b4c"),u=l("iterator"),f=l("toStringTag"),m=o.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=n(d),v=0;v<h.length;v++){var C,k=h[v],p=d[k],L=a[k],_=L&&L.prototype;if(_&&(_[u]||r(_,u,m),_[f]||r(_,f,k),o[k]=m,p))for(C in i)_[C]||s(_,C,i[C],!0)}},b021:function(t,e,c){"use strict";var i=c("25c1"),n=c.n(i);n.a},c228:function(t,e,c){"use strict";c.r(e);var i=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{attrs:{id:"cart"}},[c("nav-bar",{staticClass:"nav-bar"},[c("div",{attrs:{slot:"center"},slot:"center"},[t._v("购物车("+t._s(t.cartCount)+")")])]),c("cart-list",{staticClass:"cart-list",attrs:{"cart-list":t.cartList}}),c("bottom-bar")],1)},n=[],s=c("a7ac"),a=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("scroll",[c("div",t._l(t.cartList,function(t){return c("cart-list-item",{key:t.iid,attrs:{"item-info":t}})}))])},r=[],o=c("5d17"),l=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{attrs:{id:"shop-item"}},[c("div",{staticClass:"item-selector"},[c("CheckButton",{on:{checkBtnClick:t.checkedChange},model:{value:t.itemInfo.checked,callback:function(e){t.$set(t.itemInfo,"checked",e)},expression:"itemInfo.checked"}})],1),c("div",{staticClass:"item-img"},[c("img",{attrs:{src:t.itemInfo.imgURL,alt:"商品图片"}})]),c("div",{staticClass:"item-info"},[c("div",{staticClass:"item-title"},[t._v(t._s(t.itemInfo.title))]),c("div",{staticClass:"item-desc"},[t._v("商品描述: "+t._s(t.itemInfo.desc))]),c("div",{staticClass:"info-bottom"},[c("div",{staticClass:"item-price left"},[t._v("¥"+t._s(t.itemInfo.newPrice))]),c("div",{staticClass:"item-count right"},[t._v("x"+t._s(t.itemInfo.count))])])])])},u=[],f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"icon-selector",class:{"selector-active":t.checked},on:{click:t.selectItem}},[i("img",{attrs:{src:c("94a1"),alt:""}})])])},m=[],d={name:"CheckButton",props:{value:{type:Boolean,default:!0}},data:function(){return{checked:this.value}},methods:{selectItem:function(){this.$emit("checkBtnClick")}},watch:{value:function(t){this.checked=t}}},h=d,v=(c("b021"),c("2877")),C=Object(v["a"])(h,f,m,!1,null,"4cdd9fdf",null);C.options.__file="CheckButton.vue";var k=C.exports,p={name:"ShopCartItem",props:{itemInfo:Object},components:{CheckButton:k},methods:{checkedChange:function(){this.itemInfo.checked=!this.itemInfo.checked}}},L=p,_=(c("7519"),Object(v["a"])(L,l,u,!1,null,"8856e65c",null));_.options.__file="CartListItem.vue";var S=_.exports,g={name:"CartList",components:{Scroll:o["a"],CartListItem:S},props:{cartList:{type:Array,default:function(){return[]}}}},b=g,B=(c("e131"),Object(v["a"])(b,a,r,!1,null,"31a29f47",null));B.options.__file="CartList.vue";var I=B.exports,$=function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"bottom-menu"},[c("CheckButton",{staticClass:"select-all",on:{checkBtnClick:t.checkBtnClick},model:{value:t.isSelectAll,callback:function(e){t.isSelectAll=e},expression:"isSelectAll"}}),c("span",[t._v("全选")]),c("span",{staticClass:"total-price"},[t._v("合计: ¥"+t._s(t.totalPrice))]),c("span",{staticClass:"buy-product",on:{click:t.calcClick}},[t._v("去计算("+t._s(t.$store.getters.cartCount)+")")])],1)},T=[],x=(c("ac6a"),c("7514"),{name:"BottomBar",components:{CheckButton:k},computed:{totalPrice:function(){var t=this.$store.getters.cartList;return t.filter(function(t){return t.checked}).reduce(function(t,e){return t+e.count*e.newPrice},0).toFixed(2)},isSelectAll:function(){return void 0===this.$store.getters.cartList.find(function(t){return!1===t.checked})}},methods:{checkBtnClick:function(){var t=this.$store.getters.cartList.find(function(t){return!t.checked});t?this.$store.state.cartList.forEach(function(t){t.checked=!0}):this.$store.state.cartList.forEach(function(t){t.checked=!1})},calcClick:function(){this.isSelectAll}}}),y=x,A=(c("e2fa"),Object(v["a"])(y,$,T,!1,null,"2f467e22",null));A.options.__file="BottomBar.vue";var M=A.exports,w={name:"Cart",components:{NavBar:s["a"],CartList:I,BottomBar:M},computed:{cartList:function(){return this.$store.getters.cartList},cartCount:function(){return this.$store.getters.cartCount}}},E=w,O=(c("f51f"),Object(v["a"])(E,i,n,!1,null,"c22a4150",null));O.options.__file="Cart.vue";e["default"]=O.exports},e131:function(t,e,c){"use strict";var i=c("4fd1"),n=c.n(i);n.a},e2fa:function(t,e,c){"use strict";var i=c("3c70"),n=c.n(i);n.a},f51f:function(t,e,c){"use strict";var i=c("4384"),n=c.n(i);n.a}}]);
//# sourceMappingURL=chunk-68463b0c.0b6152eb.js.map