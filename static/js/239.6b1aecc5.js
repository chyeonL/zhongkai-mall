"use strict";(self["webpackChunkzhongkai_mall"]=self["webpackChunkzhongkai_mall"]||[]).push([[239,858,326],{4858:function(t,e,s){s.r(e),s.d(e,{default:function(){return c}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"order-right"},[e("div",{staticClass:"order-content"},[t._m(0),t._m(1),e("div",{staticClass:"orders"},t._l(t.myOrder.records,(function(s){return e("table",{key:s.id,staticClass:"order-item"},[e("thead",[e("tr",[e("th",{attrs:{colspan:"5"}},[e("span",{staticClass:"ordertitle"},[t._v(t._s(s.createTime)+"　订单编号："+t._s(s.outTradeNo)+" "),t._m(2,!0)])])])]),e("tbody",t._l(s.orderDetailList,(function(r,a){return e("tr",{key:r.skuId},[e("td",{attrs:{width:"60%"}},[e("div",{staticClass:"typographic"},[e("img",{attrs:{src:r.imgUrl,width:"100px"}}),e("a",{staticClass:"block-text",attrs:{href:"#"}},[t._v(t._s(r.skuName))]),e("span",[t._v("x"+t._s(r.skuNum))]),e("a",{staticClass:"service",attrs:{href:"#"}},[t._v("售后申请")])])]),e("td",{directives:[{name:"show",rawName:"v-show",value:0==a,expression:"index==0"}],staticClass:"center",attrs:{rowspan:s.orderDetailList.length,width:"8%"}},[t._v(t._s(s.consignee))]),e("td",{directives:[{name:"show",rawName:"v-show",value:0==a,expression:"index==0"}],staticClass:"center",attrs:{rowspan:s.orderDetailList.length,width:"13%"}},[e("ul",{staticClass:"unstyled"},[e("li",[t._v("总金额¥"+t._s(s.totalAmount))]),e("li",[t._v("在线支付")])])]),e("td",{directives:[{name:"show",rawName:"v-show",value:0==a,expression:"index==0"}],staticClass:"center",attrs:{rowspan:s.orderDetailList.length,width:"8%"}},[e("a",{staticClass:"btn",attrs:{href:"javascript:;"}},[t._v(t._s(s.orderStatusName)+" ")])]),e("td",{directives:[{name:"show",rawName:"v-show",value:0==a,expression:"index==0"}],staticClass:"center",attrs:{rowspan:s.orderDetailList.length,width:"13%"}},[t._m(3,!0)])])})),0)])})),0),e("Pagination",{attrs:{pageNo:t.page,pageSize:t.limit,total:t.myOrder.total,continues:3},on:{getPageNo:t.getPageNo}})],1)])},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"title"},[e("h3",[t._v("我的订单")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"chosetype"},[e("table",[e("thead",[e("tr",[e("th",{attrs:{width:"29%"}},[t._v("商品")]),e("th",{attrs:{width:"31%"}},[t._v("订单详情")]),e("th",{attrs:{width:"13%"}},[t._v("收货人")]),e("th",[t._v("金额")]),e("th",[t._v("状态")]),e("th",[t._v("操作")])])])])])},function(){var t=this,e=t._self._c;return e("span",{staticClass:"pull-right delete"},[e("img",{attrs:{src:s(6144)}})])},function(){var t=this,e=t._self._c;return e("ul",{staticClass:"unstyled"},[e("li",[e("a",{attrs:{href:"javascript:;"}},[t._v("评价|晒单")])])])}],i=s(2236),n={name:"MyOrder",data(){return{page:1,limit:3,myOrder:{}}},components:{Pagination:i.Z},mounted(){this.getOrderList(this.page)},methods:{getOrderList(t){this.$api.regOrderList(t,this.limit).then((t=>{console.log(t),200==t.code&&(this.myOrder=t.data,this.page=t.data.current)}))},getPageNo(t){console.log(1111111,t),this.getOrderList(t)}}},l=n,o=s(1001),d=(0,o.Z)(l,r,a,!1,null,null,null),c=d.exports},9326:function(t,e,s){s.r(e),s.d(e,{default:function(){return d}});var r=function(){var t=this,e=t._self._c;return e("div",[t._v("团购订单")])},a=[],i={name:"groupOrder"},n=i,l=s(1001),o=(0,l.Z)(n,r,a,!1,null,null,null),d=o.exports},7239:function(t,e,s){s.r(e),s.d(e,{default:function(){return u}});var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"order-main"},[e("div",{staticClass:"container"},[e("div",{staticClass:"order-body"},[e("div",{staticClass:"order-left"},[e("dl",[t._m(0),e("dd",[e("router-link",{attrs:{to:{name:"myOrder"}}},[t._v("我的订单")])],1),e("dd",[e("router-link",{attrs:{to:{name:"GroupOrder"}}},[t._v("团购订单")])],1),e("dd",[t._v("本地生活订单 ")]),e("dd",[t._v("我的预售")]),e("dd",[t._v("评价晒单")]),e("dd",[t._v("取消订单记录")])])]),e("router-view")],1)])])},a=[function(){var t=this,e=t._self._c;return e("dt",[e("i",[t._v("·")]),t._v(" 订单中心")])}],i=s(4858),n=s(9326),l={name:"center",components:{MyOrder:i["default"],GroupOrder:n["default"]}},o=l,d=s(1001),c=(0,d.Z)(o,r,a,!1,null,null,null),u=c.exports},6144:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoklEQVQ4T2NkoBAwYtFvwMDAsICBgeEDmpwAAwNDAgMDwwVkcWQDHBgYGP4zMDBMYGBgKMBiMMiABiS5gyA1yAaAJEkBYPXoXgC54gDUFBD7AZStgCYOU4NhAMhUmEtANLJhyOJw16K7YNQASABSLRBxpQlkSzCiEZSE12NJxjDDQKkxEJqkwWLY8gIoGYMUYgOg/IGST7AZQEpyxuoCkgwAAM/OLBHb4Q8yAAAAAElFTkSuQmCC"}}]);