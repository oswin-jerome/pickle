(function(e){function t(t){for(var a,i,o=t[0],d=t[1],l=t[2],u=0,b=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&b.push(n[i][0]),n[i]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);s&&s(t);while(b.length)b.shift()();return r.push.apply(r,l||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],a=!0,o=1;o<c.length;o++){var d=c[o];0!==n[d]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=c[0]))}return e}var a={},n={app:0},r=[];function i(t){if(a[t])return a[t].exports;var c=a[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,i),c.l=!0,c.exports}i.m=e,i.c=a,i.d=function(e,t,c){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(i.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(c,a,function(t){return e[t]}.bind(null,a));return c},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var s=d;r.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"11ac":function(e,t,c){"use strict";c("e235")},"18c5":function(e,t,c){e.exports=c.p+"img/path1.15edb5a6.png"},"22e3":function(e,t,c){"use strict";c("9077")},"34b1":function(e,t,c){"use strict";c("cb12")},"3b92":function(e,t,c){"use strict";c("b1b5")},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var a=c("7a23");function n(e,t,c,n,r,i){var o=Object(a["l"])("Home"),d=Object(a["l"])("Footer");return Object(a["h"])(),Object(a["c"])(a["a"],null,[Object(a["g"])(o),Object(a["g"])(d)],64)}function r(e,t,c,n,r,i){var o=Object(a["l"])("NavBar"),d=Object(a["l"])("Hero"),l=Object(a["l"])("About"),s=Object(a["l"])("Special"),u=Object(a["l"])("Contact");return Object(a["h"])(),Object(a["c"])("div",null,[Object(a["g"])(o,{id:"nav"}),Object(a["g"])(d),Object(a["g"])(l),Object(a["g"])(s),Object(a["g"])(u)])}Object(a["j"])("data-v-222d66a1");var i={class:"container"},o=Object(a["d"])("nav",null,[Object(a["d"])("ul",null,[Object(a["d"])("li",null,[Object(a["d"])("a",{href:"#"},"Home")]),Object(a["d"])("li",null,[Object(a["d"])("a",{href:"#"},"About us")]),Object(a["d"])("li",null,[Object(a["d"])("a",{href:"#"},"Specials")]),Object(a["d"])("li",null,[Object(a["d"])("a",{href:"#"},"Contact")])])],-1),d=[o];function l(e,t,c,n,r,o){return Object(a["h"])(),Object(a["c"])("div",i,d)}Object(a["i"])();var s={name:"NavBar"};c("34b1");s.render=l,s.__scopeId="data-v-222d66a1";var u=s,b=c("dba9"),f=c.n(b),p=c("18c5"),m=c.n(p);Object(a["j"])("data-v-3ce960e9");var j=Object(a["d"])("div",{class:"row container m-auto text-center text-md-left",id:"hero"},[Object(a["d"])("div",{class:"col-md-6 col-sm-12 p-0 m-0"},[Object(a["d"])("h1",{id:"heading"},[Object(a["f"])(" Freshness "),Object(a["d"])("br"),Object(a["f"])(" in every bite ")]),Object(a["d"])("p",{id:"description"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime atque aspernatur corrupti voluptatum rem."),Object(a["d"])("a",{href:"#contact",id:"cta"},"Contact us")]),Object(a["d"])("div",{class:"col-md-6 col-sm-12 p-0 m-0 img_cont d-none d-md-block"},[Object(a["d"])("img",{src:f.a,id:"food1",alt:""})]),Object(a["d"])("img",{src:m.a,class:"d-none d-md-block",alt:"",id:"heroPath"})],-1),v=[j];function O(e,t,c,n,r,i){return Object(a["h"])(),Object(a["c"])("div",null,v)}Object(a["i"])();var g=c("cffa"),h=c("1dac");g["a"].registerPlugin(h["a"]);var y={mounted:function(){var e=g["a"].timeline();e.from("#food1",{opacity:0,duration:.5,scale:.7}),e.from("#heading",{opacity:0,duration:.5,ease:"ease-in-out"}),e.from("#description",{opacity:0,duration:.5}),e.from("#cta",{opacity:0,duration:.5});var t=g["a"].timeline({scrollTrigger:{trigger:"#food1",pin:!1,start:"top top",end:"+=500",scrub:1,markers:!1}});t.addLabel("start").to("#food1",{rotation:-45})}};c("3b92");y.render=O,y.__scopeId="data-v-3ce960e9";var x=y,_=c("d170"),w=c.n(_);Object(a["j"])("data-v-24e5eddc");var k={id:"about",class:"container"},P=Object(a["d"])("div",{class:"row"},[Object(a["d"])("div",{class:"col-md-6 col-sm-12 w-50 pl-0 m-auto"},[Object(a["d"])("img",{id:"abt-img",src:w.a,alt:""})]),Object(a["d"])("div",{class:"col-md-6 col-sm-12"},[Object(a["d"])("h1",{class:"text-center text-md-left"},"About us"),Object(a["d"])("p",{class:"text-center text-md-left"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra, sed malesuada turpis tellus nisi odio justo condimentum iaculis. Praesent commodo lorem eros facilisi sed accumsan mi nulla arcu. Arcu amet, nisi, egestas aliquam aliquam sed. Egestas viverra elementum at lorem facilisis.")])],-1),S=[P];function A(e,t,c,n,r,i){return Object(a["h"])(),Object(a["c"])("div",k,S)}Object(a["i"])(),g["a"].registerPlugin(h["a"]);var M={mounted:function(){var e=g["a"].timeline();e.from("#abt-img",{opacity:0,duration:.5,scale:.7});var t=g["a"].timeline({scrollTrigger:{trigger:"#about",pin:!1,start:"top bottom",end:"+=1300",scrub:1,markers:!1}});t.addLabel("start").to("#abt-img",{rotation:-90})}};c("57c8");M.render=A,M.__scopeId="data-v-24e5eddc";var H=M,I=c("92e9"),C=c.n(I);Object(a["j"])("data-v-de1caac0");var L={id:"specials",class:"container"},N=Object(a["d"])("h1",{class:"text-sm-center text-md-left"},"Our Specials",-1),T={class:"grid"},q=Object(a["d"])("img",{src:C.a,alt:""},null,-1),B=Object(a["d"])("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maxime, adipisci nisi illo dicta magni.",-1),E=[q,B],F=Object(a["d"])("a",{href:"#",class:"black-btn"},"View More",-1);function W(e,t,c,n,r,i){return Object(a["h"])(),Object(a["c"])("div",L,[N,Object(a["d"])("div",T,[(Object(a["h"])(!0),Object(a["c"])(a["a"],null,Object(a["k"])(e.specials,(function(e){return Object(a["h"])(),Object(a["c"])("div",{class:"grid-item",key:e},E)})),128))]),F])}Object(a["i"])();var J={data:function(){return{specials:["Hello","World","World2"]}}};c("faee");J.render=W,J.__scopeId="data-v-de1caac0";var z=J;Object(a["j"])("data-v-4f91609c");var Q={id:"contact",class:"container p-md-0 p-sm-4"},R=Object(a["e"])('<h1 class="heading" data-v-4f91609c>Contact</h1><div class="row" data-v-4f91609c><div class="col-md-6 col-sm-12" data-v-4f91609c><form action="#" data-v-4f91609c><input type="text" name="name" placeholder="Name" id="" data-v-4f91609c><input type="Email" name="email" placeholder="Email" id="" data-v-4f91609c><textarea name="message" id="" placeholder="Message" data-v-4f91609c></textarea><a href="#" class="black-btn" data-v-4f91609c>Send</a></form></div><div class="col-md-6 col-sm-12 mt-sm-5 mt-md-0" id="address" data-v-4f91609c><p data-v-4f91609c>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p><p data-v-4f91609c>hello@picklestore.in</p><p data-v-4f91609c>pozhiyoor</p><p data-v-4f91609c>hello@picklestore.in</p></div></div>',2),V=[R];function D(e,t,c,n,r,i){return Object(a["h"])(),Object(a["c"])("div",Q,V)}Object(a["i"])();var G={};c("11ac");G.render=D,G.__scopeId="data-v-4f91609c";var K=G,U={components:{NavBar:u,Hero:x,About:H,Special:z,Contact:K}};c("8706");U.render=r;var X=U,Y=Object(a["d"])("p",null,"©️ picklestore.in",-1),Z=[Y];function $(e,t,c,n,r,i){return Object(a["h"])(),Object(a["c"])("footer",null,Z)}var ee={};c("22e3");ee.render=$;var te=ee,ce={name:"App",components:{Home:X,Footer:te}};c("ad56");ce.render=n;var ae=ce;Object(a["b"])(ae).mount("#app")},"57c8":function(e,t,c){"use strict";c("b5e7")},8706:function(e,t,c){"use strict";c("9265")},9077:function(e,t,c){},9265:function(e,t,c){},"92e9":function(e,t,c){e.exports=c.p+"img/food3.9ba468ba.png"},ad56:function(e,t,c){"use strict";c("d405")},b1b5:function(e,t,c){},b5e7:function(e,t,c){},cb12:function(e,t,c){},d170:function(e,t,c){e.exports=c.p+"img/food2.887ba2a6.png"},d405:function(e,t,c){},dba9:function(e,t,c){e.exports=c.p+"img/food1.8a1ffc41.png"},e1b1:function(e,t,c){},e235:function(e,t,c){},faee:function(e,t,c){"use strict";c("e1b1")}});
//# sourceMappingURL=app.c5a8d885.js.map