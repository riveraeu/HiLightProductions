webpackJsonp([5],{"1CrY":function(t,e,a){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("v-flex",{staticClass:"heading",attrs:{"text-xs-center":""}},[e("p",{staticClass:"primary--text lato line display-3"},[this._v(" "+this._s(this.header))]),e("p",{staticClass:"sub-header display-1"},[this._v(" "+this._s(this.subHeader))])])};r._withStripped=!0;var s={render:r,staticRenderFns:[]};e.a=s},"36Cp":function(t,e,a){"use strict";e.a={props:["header","subHeader"]}},"5FRf":function(t,e,a){"use strict";e.a={props:["eventProd"],data:function(){return{active:!1}}}},GD4O:function(t,e,a){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{attrs:{"grid-list-md":""}},[e("v-layout",{attrs:{"justify-center":"","text-sm-center":"",row:""}},[e("v-flex",{attrs:{sm8:""}},[e("p",{staticClass:"primary--text lato line display-3 mt-5"},[this._v("Events and Productions")]),e("p",{staticClass:"body-text mar-left mar-right"},[this._v(this._s(this.text))])])],1),e("v-layout",{attrs:{row:"",wrap:""}},this._l(this.gallery,function(t,a){return e("overlay",{key:a,attrs:{eventProd:t}})}))],1)};r._withStripped=!0;var s={render:r,staticRenderFns:[]};e.a=s},K9jj:function(t,e,a){var r=a("p4Ff");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("32854b3a",r,!1,{sourceMap:!1})},KH3h:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".heading[data-v-c25bd390]{padding:50px 5% 25px}.line[data-v-c25bd390]{border-bottom:2px solid grey}",""])},iHGT:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("jvgt"),s=a("GD4O"),i=a("VU/8")(r.a,s.a,!1,null,null,null);i.options.__file="pages/events-productions/gallery.vue",e.default=i.exports},jvgt:function(t,e,a){"use strict";var r=a("t6B0"),s=a("wM4s"),i=a("mtWM"),n=a.n(i);e.a={components:{heading:r.a,overlay:s.a},data:function(){return{text:"Hashtag helvetica celiac, occupy squid enamel pin vexillologist cardigan poutine taxidermy irony mixtape kitsch cold-pressed. Cornhole pour-over vegan, hoodie humblebrag kombucha disrupt organic typewriter. Fixie yr vaporware irony hella trust fund cred kombucha tilde post-ironic. Synth shabby chic trust fund knausgaard whatever microdosing. Prism tumblr selvage farm-to-table banjo. Post-ironic pour-over direct trade irony, drinking vinegar woke migas knausgaard meditation jianbing schlitz four loko ramps.",gallery:[]}},asyncData:function(t){t.params;return n.a.get("/api").then(function(t){return{gallery:t.data.resources}}).catch(function(t){console.log(t)})}}},p4Ff:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".box[data-v-58bcbcd8]{position:relative}.image-overlay[data-v-58bcbcd8]{width:100%;height:100%;position:absolute;top:0;left:0;background-color:rgba(38,50,56,.7);display:table}.image-title[data-v-58bcbcd8]{display:table-cell;vertical-align:middle}",""])},rHkh:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{staticClass:"box",attrs:{sm6:"","text-xs-center":""},on:{mouseover:function(e){t.active=!0},mouseleave:function(e){t.active=!1}}},[a("nuxt-link",{attrs:{to:{name:"events-productions-focus",params:{focus:t.eventProd.context.custom.path,eventProd:t.eventProd}}}},[a("img",{attrs:{src:t.eventProd.url,alt:t.eventProd.context.custom.path}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"image-overlay"},[a("h3",{staticClass:"image-title sub-header display-1"},[t._v(" "+t._s(t.eventProd.context.custom.title))])])])],1)};r._withStripped=!0;var s={render:r,staticRenderFns:[]};e.a=s},t6B0:function(t,e,a){"use strict";var r=a("36Cp"),s=a("1CrY"),i=!1;var n=function(t){i||a("vqFm")},o=a("VU/8")(r.a,s.a,!1,n,"data-v-c25bd390",null);o.options.__file="components/globals/heading.vue",e.a=o.exports},vqFm:function(t,e,a){var r=a("KH3h");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("75623171",r,!1,{sourceMap:!1})},wM4s:function(t,e,a){"use strict";var r=a("5FRf"),s=a("rHkh"),i=!1;var n=function(t){i||a("K9jj")},o=a("VU/8")(r.a,s.a,!1,n,"data-v-58bcbcd8",null);o.options.__file="components/globals/image-overlay.vue",e.a=o.exports}});