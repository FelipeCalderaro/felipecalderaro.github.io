(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"713b":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-layout",{staticClass:"light-color",staticStyle:{height:"100%"}},[e("q-header",{staticClass:"light-color",staticStyle:{height:"110px"},attrs:{bordered:""}},[e("div",{staticClass:"column items-center q-pb-md",staticStyle:{height:"80px"}},[e("div",{staticClass:"header-container"}),e("div",{staticClass:"col self-center"},[e("p",[e("span",{staticClass:"bebas-font title-color",staticStyle:{"font-size":"19px"}},[t._v("\n            "+t._s(t.title)+"\n          ")])])]),e("div",{staticClass:"col self-end"},[e("div",{staticClass:"row justify-end q-pa-md"},[e("div",{staticClass:"col-auto q-pr-sm"},[e("q-btn",{staticClass:"arterio-font",staticStyle:{color:"#3f4747","font-size":"14px"},attrs:{outline:"",label:"Home",to:{name:"home"},size:"sm"}})],1),e("div",{staticClass:"col-auto q-pr-sm"},[e("q-btn",{staticClass:"arterio-font",staticStyle:{color:"#3f4747","font-size":"14px"},attrs:{outline:"",label:"sobre mim",size:"sm",to:{name:"about"}}})],1),e("div",{staticClass:"col-auto q-pr-sm"},[e("q-btn",{staticClass:"arterio-font",staticStyle:{color:"#3f4747","font-size":"14px"},attrs:{outline:"",label:"portfolio",size:"sm",to:{name:"portfolio"}}})],1),e("div",{staticClass:"col-auto q-pr-sm"},[e("q-btn",{staticClass:"arterio-font",staticStyle:{background:"#3f4747",color:"#FFFFFF","font-size":"14px"},attrs:{label:"contato",to:{name:"contato"},size:"sm"}})],1)])])])]),e("q-page-container",[e("router-view")],1),e("q-footer",{staticClass:"light-color",staticStyle:{height:"70px"},attrs:{elevated:""}},[e("div",{staticClass:"col q-pa-sm q-pt-lg"},[e("h8",{staticStyle:{color:"#3f4747","font-size":"12px"}},[e("strong",[t._v("\n          © FELIPE CALDERARO "+t._s((new Date).getFullYear())+" / ALL RIGHTS RESERVED.\n        ")])])],1)])],1)},o=[],i=e("bc3a"),l=e.n(i),n={name:"MainLayout",data:function(){return{title:"CALDERARO"}},methods:{getConnection:function(){l.a.get("https://felipecalderaroapis.herokuapp.com/").then((function(t){return console.log(t)}))}},mounted:function(){this.getConnection()}},c=n,r=e("2877"),p=e("eebe"),f=e.n(p),u=e("4d5a"),d=e("e359"),m=e("65c6"),C=e("9c40"),b=e("09e3"),h=e("7ff0"),g=Object(r["a"])(c,s,o,!1,null,null,null);a["default"]=g.exports;f()(g,"components",{QLayout:u["a"],QHeader:d["a"],QToolbar:m["a"],QBtn:C["a"],QPageContainer:b["a"],QFooter:h["a"]})}}]);