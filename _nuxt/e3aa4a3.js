(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{113:function(t,o,n){"use strict";o.a={brand:{name:"OUPC",nameShort:"OUPC Web site",footer:{links:[{icon:"mdi-twitter",link:"https://twitter.com/oucp60_shinkan"},{icon:"mdi-instagram",link:"https://www.instagram.com/oucp61_shinkan/"},{icon:"mdi-youtube",link:"https://www.youtube.com/channel/UCZgxA7NqKHRBlIMOIeNvCcg"}]},copyrightInfo:{year:2022,owner:"大阪大学応援団"}}}},219:function(t,o,n){var content=n(302);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("48517564",content,!0,{sourceMap:!1})},221:function(t,o,n){var content=n(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("8db4221e",content,!0,{sourceMap:!1})},232:function(t,o,n){var content=n(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(28).default)("b457879e",content,!0,{sourceMap:!1})},253:function(t,o,n){"use strict";n.r(o);var e={brand:{name:"GoNuxt",nameShort:"第61代大阪大学応援団",header:{links:[{icon:"mdi-twitter",link:"https://twitter.com/oucp60_shinkan"},{icon:"mdi-instagram",link:"https://www.instagram.com/oucp61_shinkan/"},{icon:"mdi-youtube",link:"https://www.youtube.com/channel/UCZgxA7NqKHRBlIMOIeNvCcg"}]},footer:{links:[{icon:"mdi-twitter",link:"https://twitter.com/oucp60_shinkan"},{icon:"mdi-instagram",link:"https://www.instagram.com/oucp61_shinkan/"},{icon:"mdi-youtube",link:"https://www.youtube.com/channel/UCZgxA7NqKHRBlIMOIeNvCcg"}]},copyrightInfo:{year:2022,owner:"Sample Club"}}},r={name:"TheHeader",props:{brandNameFontWeight:{type:String,default:"font-weight-bold"}},data:function(){return{links:e.brand.header.links,brandName:e.brand.nameShort}}},c=(n(307),n(53)),l=n(64),m=n.n(l),d=n(367),v=n(354),f=n(353),h=n(362),w=n(183),component=Object(c.a)(r,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("v-app-bar",{attrs:{dark:"",dense:"",height:"64",fixed:""}},[n("v-toolbar-title",{class:t.brandNameFontWeight},[t._v(t._s(t.brandName))]),t._v(" "),n("v-spacer"),t._v(" "),t._l(t.links,(function(link){return[n("a",{key:link.icon,staticClass:"text-decoration-none",attrs:{href:link.link,target:"_blank"}},[n("v-btn",{staticClass:"mx-1",attrs:{color:"white",rounded:"",icon:""}},[n("v-icon",{attrs:{size:"2em"}},[t._v(t._s(link.icon))])],1)],1)]}))],2)}),[],!1,null,null,null);o.default=component.exports;m()(component,{VAppBar:d.a,VBtn:v.a,VIcon:f.a,VSpacer:h.a,VToolbarTitle:w.a})},254:function(t,o,n){"use strict";var e=n(253),r=n(255),c={name:"DefaultLayout",components:{TheHeader:e.default,TheFooter:r.default}},l=n(53),m=n(64),d=n.n(m),v=n(361),f=n(366),h=n(57),component=Object(l.a)(c,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("v-app",[n("TheHeader"),t._v(" "),n("v-sheet",{attrs:{elevation:"0",height:"64",width:"100%"}}),t._v(" "),n("v-main",[n("Nuxt")],1),t._v(" "),n("TheFooter")],1)}),[],!1,null,null,null);o.a=component.exports;d()(component,{VApp:v.a,VMain:f.a,VSheet:h.a})},255:function(t,o,n){"use strict";n.r(o);var e=n(113),r={name:"TheFooter",data:function(){return{links:e.a.brand.footer.links,copyright:{year:e.a.brand.copyrightInfo.year,owner:e.a.brand.copyrightInfo.owner}}}},c=(n(342),n(53)),l=n(64),m=n.n(l),d=n(354),v=n(363),f=n(364),h=n(353),w=n(365),component=Object(c.a)(r,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("v-footer",{attrs:{color:"primary lighten-1 py-2",padless:""}},[n("v-row",{attrs:{"no-gutters":"",justify:"center"}},[t._l(t.links,(function(link){return[n("a",{key:link.icon,staticClass:"text-decoration-none",attrs:{href:link.link,target:"_blank"}},[n("v-btn",{staticClass:"mx-1",attrs:{color:"white",rounded:"",icon:""}},[n("v-icon",{attrs:{size:"2em"}},[t._v(t._s(link.icon))])],1)],1)]})),t._v(" "),n("v-col",{staticClass:"primary lighten-1 text-center white--text",attrs:{cols:"12"}},[t._v("\n      © "+t._s(t.copyright.year)+" "+t._s(t.copyright.owner)+"\n    ")])],2)],1)}),[],!1,null,null,null);o.default=component.exports;m()(component,{VBtn:d.a,VCol:v.a,VFooter:f.a,VIcon:h.a,VRow:w.a})},268:function(t,o,n){n(269),t.exports=n(270)},301:function(t,o,n){"use strict";n(219)},302:function(t,o,n){var e=n(27)(!1);e.push([t.i,"h1[data-v-6ffeedc3]{font-size:20px}",""]),t.exports=e},307:function(t,o,n){"use strict";n(221)},308:function(t,o,n){var e=n(27)(!1);e.push([t.i,".v-application .page-title{font-size:2.4rem;color:#b9b9b9;margin-bottom:0}.v-application .v-card{box-shadow:0 3px 11px 0 #e8eafc,0 3px 3px -2px hsla(0,0%,69.8%,.10196),0 1px 8px 0 hsla(0,0%,60.4%,.10196)!important}.v-application .v-card .v-card__title p{color:#6e6e6e;line-height:1.33;margin:0;font-size:20px;font-weight:400}.v-application .v-card .card-dark-grey{color:#4a4a4a!important}.v-application .v-card .card-light-grey{color:#6e6e6e!important}.v-application .v-navigation-drawer .v-navigation-drawer__content .v-list .v-list-item--active{background-color:#f3f5ff}.v-application .v-navigation-drawer .v-navigation-drawer__content .v-list .v-list-item--active:before{opacity:0}.v-application .v-navigation-drawer .v-navigation-drawer__content .v-list .v-list-item:hover{background-color:#f3f5ff}.v-application .v-navigation-drawer .v-navigation-drawer__content .v-list .v-list-item:hover:before{opacity:0}.v-application h1{font-size:3rem}.v-application h1,.v-application h2{font-weight:400;margin-bottom:16px;line-height:1}.v-application h2{font-size:2rem}.v-application h3{font-size:1.64rem}.v-application h3,.v-application h4{font-weight:400;margin-bottom:16px;line-height:1}.v-application h4{font-size:1.5rem}.v-application h5{font-size:1.285rem;font-weight:400;margin-bottom:16px}.v-application h6{font-size:1.142rem;font-weight:400;margin-bottom:16px}.mapContainer+footer.v-footer{display:none}.toasted-container .toasted{height:50px!important;box-shadow:none}.toasted-container .toasted.default{background:#536dfe!important}.toasted-container .toasted.error{background:#ff4081!important}.toasted-container .toasted.success{background:#3cd4a0!important}.toasted-container .toasted.info{background-color:#536dfe!important}.toasted-container .toasted.warning{background:#ffc260!important}.toasted-container .toasted .action{color:#6e6e6e}.gnt-sec-0,.gnt-sec-1{flex:0 0 100%;max-width:100%}.gnt-sec-1{margin-top:5em;margin-bottom:5em}.gnt-sec-2{margin-top:4em;margin-bottom:4em}.gnt-sec-2,.gnt-sec-3{flex:0 0 100%;max-width:100%}.gnt-sec-3{margin-top:3em;margin-bottom:3em}.gnt-sec-4{margin-top:2em;margin-bottom:2em}.gnt-sec-4,.gnt-sec-5{flex:0 0 100%;max-width:100%}.gnt-sec-5{margin-top:1em;margin-bottom:1em}.nt-app-bar-link{text-decoration:none!important}",""]),t.exports=e},342:function(t,o,n){"use strict";n(232)},343:function(t,o,n){var e=n(27)(!1);e.push([t.i,".v-application .page-title{font-size:2.4rem;color:#b9b9b9;margin-bottom:0}.v-application .v-card{box-shadow:0 3px 11px 0 #e8eafc,0 3px 3px -2px hsla(0,0%,69.8%,.10196),0 1px 8px 0 hsla(0,0%,60.4%,.10196)!important}.v-application .v-card .v-card__title p{color:#6e6e6e;line-height:1.33;margin:0;font-size:20px;font-weight:400}.v-application .v-card .card-dark-grey{color:#4a4a4a!important}.v-application .v-card .card-light-grey{color:#6e6e6e!important}.v-application .v-navigation-drawer .v-navigation-drawer__content .v-list .v-list-item--active{background-color:#f3f5ff}.v-application .v-navigation-drawer .v-navigation-drawer__content .v-list .v-list-item--active:before{opacity:0}.v-application .v-navigation-drawer .v-navigation-drawer__content .v-list .v-list-item:hover{background-color:#f3f5ff}.v-application .v-navigation-drawer .v-navigation-drawer__content .v-list .v-list-item:hover:before{opacity:0}.v-application h1{font-size:3rem}.v-application h1,.v-application h2{font-weight:400;margin-bottom:16px;line-height:1}.v-application h2{font-size:2rem}.v-application h3{font-size:1.64rem}.v-application h3,.v-application h4{font-weight:400;margin-bottom:16px;line-height:1}.v-application h4{font-size:1.5rem}.v-application h5{font-size:1.285rem;font-weight:400;margin-bottom:16px}.v-application h6{font-size:1.142rem;font-weight:400;margin-bottom:16px}.mapContainer+footer.v-footer{display:none}.toasted-container .toasted{height:50px!important;box-shadow:none}.toasted-container .toasted.default{background:#536dfe!important}.toasted-container .toasted.error{background:#ff4081!important}.toasted-container .toasted.success{background:#3cd4a0!important}.toasted-container .toasted.info{background-color:#536dfe!important}.toasted-container .toasted.warning{background:#ffc260!important}.toasted-container .toasted .action{color:#6e6e6e}.gnt-sec-0,.gnt-sec-1{flex:0 0 100%;max-width:100%}.gnt-sec-1{margin-top:5em;margin-bottom:5em}.gnt-sec-2{margin-top:4em;margin-bottom:4em}.gnt-sec-2,.gnt-sec-3{flex:0 0 100%;max-width:100%}.gnt-sec-3{margin-top:3em;margin-bottom:3em}.gnt-sec-4{margin-top:2em;margin-bottom:2em}.gnt-sec-4,.gnt-sec-5{flex:0 0 100%;max-width:100%}.gnt-sec-5{margin-top:1em;margin-bottom:1em}.v-footer .row{justify-content:center}@media(min-width:600px){.v-footer .row{justify-content:space-between}}",""]),t.exports=e},76:function(t,o,n){"use strict";var e={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(301),n(53)),c=n(64),l=n.n(c),m=n(361),component=Object(r.a)(e,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"6ffeedc3",null);o.a=component.exports;l()(component,{VApp:m.a})}},[[268,47,5,48]]]);