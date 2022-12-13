(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),l=new URL(t(716),t.b),u=new URL(t(415),t.b),d=new URL(t(733),t.b),f=new URL(t(888),t.b),p=i()(o()),m=s()(l),h=s()(u),v=s()(d),g=s()(f);p.push([e.id,":root {\n  --grullo: #9B8C6Eff;\n  --smoky-black: #0C0A05ff;\n  --shadow: #90815Eff;\n  --grullo-2: #9B8F77ff;\n  --olive-drab-7: #352810ff;\n}\n\n@font-face {\n  font-family: 'signatra_demoregular';\n  src: url("+m+") format('woff2'),\n       url("+h+") format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'bebas_neueregular';\n  src: url("+v+") format('woff2'),\n       url("+g+") format('woff');\n  font-weight: normal;\n  font-style: normal;\n}\n\nbody {\n  background-color: black;\n  padding: 50px;\n}\n\n#content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nheader {\n  display: flex;\n  gap: 20px;\n  color: var(--grullo);\n  /* font-family: 'Dancing Script', cursive; */\n  font-family: 'signatra_demoregular';\n  font-size: 120px;\n}\n\nheader > img {\n  width: 120px;\n  height: auto;\n  border-radius: 50%;\n}\n\nfooter {\n  color: tomato;\n}\n\n.bar {\n  display: flex;\n  justify-content: space-around;\n  gap: 50px;\n  color: white;\n  padding: 20px;\n  padding-top: 30px;\n  font-size: 40px;\n  font-family: 'bebas_neueregular';\n}\n\n.bar > div {\n  cursor: pointer;\n}\n\n.bar>div:hover  {\n  color: var(--grullo);\n}\n\nmain {\n  color: white;\n}",""]);const y=p},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var f=t(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var m=o(p,r);r.byIndex=c,n.splice(c,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var u=t(a[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},888:(e,n,t)=>{e.exports=t.p+"a40e6553b4b706a14d0a.woff"},733:(e,n,t)=>{e.exports=t.p+"0430bdb508e17071c16f.woff2"},415:(e,n,t)=>{e.exports=t.p+"65443420fd5480ae71d4.woff"},716:(e,n,t)=>{e.exports=t.p+"e57eeea6153c8f77f71f.woff2"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),u=t.n(l),d=t(589),f=t.n(d),p=t(426),m={};m.styleTagTransform=f(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),n()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;const h=function(){document.querySelector("main").innerText="contact"},v=function(){document.querySelector("main").innerText="home"},g=function(){document.querySelector("main").innerText="menu"};!function(){const e=document.getElementById("content");e.appendChild(function(){const e=document.createElement("header"),n=document.createElement("img"),t=document.createElement("div");return n.src="../dist/images/apprendistalogo.jpg",e.appendChild(n),e.appendChild(t),t.innerText="Apprendista",e}()),e.appendChild(function(){const e=document.createElement("div"),n=document.createElement("div"),t=document.createElement("div"),r=document.createElement("div");return e.classList.add("bar"),n.classList.add("option"),t.classList.add("option"),r.classList.add("option"),e.appendChild(t),e.appendChild(n),e.appendChild(r),n.innerText="menu",t.innerText="home",r.innerText="contact",n.addEventListener("click",g),t.addEventListener("click",v),r.addEventListener("click",h),e}()),e.appendChild(function(){const e=document.createElement("main");return e.innerHTML="home",e}()),e.appendChild(function(){const e=document.createElement("footer");return e.innerText="copyright by kitkath",e}())}()})()})();