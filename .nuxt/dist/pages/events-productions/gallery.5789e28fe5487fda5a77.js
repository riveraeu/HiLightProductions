webpackJsonp([6],{"5FRf":function(t,e,a){"use strict";e.a={props:["eventProd"],data:function(){return{active:!1}}}},GD4O:function(t,e,a){"use strict";var r=function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{attrs:{"grid-list-md":""}},[e("v-layout",{attrs:{"justify-center":"","text-sm-center":"",row:""}},[e("v-flex",{attrs:{sm8:""}},[e("p",{staticClass:"primary--text lato line display-3 mt-5"},[this._v("Events and Productions")]),e("p",{staticClass:"body-text mar-left mar-right"},[this._v(this._s(this.text))])])],1),e("v-layout",{attrs:{row:"",wrap:""}},this._l(this.gallery,function(t,a){return e("overlay",{key:a,attrs:{eventProd:t}})}))],1)};r._withStripped=!0;var i={render:r,staticRenderFns:[]};e.a=i},K9jj:function(t,e,a){var r=a("p4Ff");"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);a("rjj0")("32854b3a",r,!1,{sourceMap:!1})},iHGT:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("jvgt"),i=a("GD4O"),s=a("VU/8")(r.a,i.a,!1,null,null,null);s.options.__file="pages/events-productions/gallery.vue",e.default=s.exports},jvgt:function(t,e,a){"use strict";var r=a("Xxa5"),i=a.n(r),s=a("exGp"),n=a.n(s),o=a("wM4s");e.a={components:{overlay:o.a},data:function(){return{text:"Hashtag helvetica celiac, occupy squid enamel pin vexillologist cardigan poutine taxidermy irony mixtape kitsch cold-pressed. Cornhole pour-over vegan, hoodie humblebrag kombucha disrupt organic typewriter. Fixie yr vaporware irony hella trust fund cred kombucha tilde post-ironic. Synth shabby chic trust fund knausgaard whatever microdosing. Prism tumblr selvage farm-to-table banjo. Post-ironic pour-over direct trade irony, drinking vinegar woke migas knausgaard meditation jianbing schlitz four loko ramps.",gallery:[]}},asyncData:function(){var t=n()(i.a.mark(function t(e){var a,r=e.app;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.$axios.$get("api/gallery");case 2:return a=t.sent,t.abrupt("return",{gallery:a.resources});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},p4Ff:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,".box[data-v-58bcbcd8]{position:relative}.image-overlay[data-v-58bcbcd8]{width:100%;height:100%;position:absolute;top:0;left:0;background-color:rgba(38,50,56,.7);display:table}.image-title[data-v-58bcbcd8]{display:table-cell;vertical-align:middle}",""])},rHkh:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-flex",{staticClass:"box",attrs:{sm6:"","text-xs-center":""},on:{mouseover:function(e){t.active=!0},mouseleave:function(e){t.active=!1}}},[a("nuxt-link",{attrs:{to:{name:"events-productions-focus",params:{focus:t.eventProd.context.custom.path}}}},[a("img",{attrs:{src:t.eventProd.url,alt:t.eventProd.context.custom.path}}),a("div",{directives:[{name:"show",rawName:"v-show",value:t.active,expression:"active"}],staticClass:"image-overlay"},[a("h3",{staticClass:"image-title sub-header display-1"},[t._v(" "+t._s(t.eventProd.context.custom.title))])])])],1)};r._withStripped=!0;var i={render:r,staticRenderFns:[]};e.a=i},wM4s:function(t,e,a){"use strict";var r=a("5FRf"),i=a("rHkh"),s=!1;var n=function(t){s||a("K9jj")},o=a("VU/8")(r.a,i.a,!1,n,"data-v-58bcbcd8",null);o.options.__file="components/globals/image-overlay.vue",e.a=o.exports}});