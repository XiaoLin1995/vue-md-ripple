(function(e){function t(t){for(var i,o,c=t[0],s=t[1],l=t[2],u=0,d=[];u<c.length;u++)o=c[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);p&&p(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(i=!1)}i&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={app:0},a=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},3387:function(e,t,n){},"5c0b":function(e,t,n){"use strict";var i=n("9c0c"),r=n.n(i);r.a},"9c0c":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"btn"},[e._v("Button")]),n("div",{directives:[{name:"ripple",rawName:"v-ripple",value:{center:!0},expression:"{center: true}"}],staticClass:"btn"},[e._v("Center")]),n("div",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"content"},[n("div",[e._v(" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe culpa sunt voluptas ex nobis. Delectus, illum, fugit iusto deserunt, dolore a quae quidem officia pariatur dolor officiis facilis voluptates quam! ")])])])},a=[],o=i["a"].extend({name:"App"}),c=o,s=(n("5c0b"),n("2877")),l=Object(s["a"])(c,r,a,!1,null,null,null),p=l.exports,u=(n("99af"),n("b0c0"),n("a9e3"),n("d3b7"),n("ac1f"),n("25f0"),n("466d"),n("5319"),n("3387"),n("dca8"),n("b64b"),Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34}));function d(e,t){e.style["transform"]=t,e.style["webkitTransform"]=t}function v(e,t){e.style["opacity"]=t.toString()}function f(e){return"TouchEvent"===e.constructor.name}function m(e){return"KeyboardEvent"===e.constructor.name}function h(){var e=window.navigator.userAgent,t=/Android/i.test(e),n=/iPhone|iPad|iPod/i.test(e),i=[];n&&(i=e.match(/OS\s([0-9_]*)/i)||[]),t&&(i=e.match(/Android\s([0-9\.]*)/i)||[]);var r=i&&i.length?i[1].replace(/_/g,"."):"";return{isIOS:n,isAndroid:t,version:r}}function _(){var e=h(),t=e.isIOS,n=e.version,i=e.isAndroid,r=window.parseInt(n);return t&&r||i&&r>=5||!i&&!t}var g=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=0,r=0;if(!m(e)){var a=t.getBoundingClientRect(),o=f(e)?e.touches[e.touches.length-1]:e;i=o.clientX-a.left,r=o.clientY-a.top}var c=0,s=.3;t._ripple&&t._ripple.circle?(s=.15,c=t.clientWidth/2,c=n.center?c:c+Math.sqrt(Math.pow(i-c,2)+Math.pow(r-c,2))/4):c=Math.sqrt(Math.pow(t.clientWidth,2)+Math.pow(t.clientHeight,2))/2;var l="".concat((t.clientWidth-2*c)/2,"px"),p="".concat((t.clientHeight-2*c)/2,"px"),u=n.center?l:"".concat(i-c,"px"),d=n.center?p:"".concat(r-c,"px");return{radius:c,scale:s,x:u,y:d,centerX:l,centerY:p}},w={show:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(t._ripple&&t._ripple.enabled){var i=document.createElement("span"),r=document.createElement("span");i.appendChild(r),i.className="v-ripple__container",n.class&&(i.className+=" ".concat(n.class));var a=g(e,t,n),o=a.radius,c=a.scale,s=a.x,l=a.y,p=a.centerX,u=a.centerY,f="".concat(2*o,"px");r.className="v-ripple__animation",r.style.width=f,r.style.height=f,t.appendChild(i);var m=window.getComputedStyle(t);m&&"static"===m.position&&(t.style.position="relative",t.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),d(r,"translate(".concat(s,", ").concat(l,") scale3d(").concat(c,",").concat(c,",").concat(c,")")),v(r,0),r.dataset.activated=String(performance.now()),setTimeout((function(){r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),d(r,"translate(".concat(p,", ").concat(u,") scale3d(1,1,1)")),v(r,.25)}),0)}},hide:function(e){if(e&&e._ripple&&e._ripple.enabled){var t=e.getElementsByClassName("v-ripple__animation");if(0!==t.length){var n=t[t.length-1];if(!n.dataset.isHiding){n.dataset.isHiding="true";var i=performance.now()-Number(n.dataset.activated),r=Math.max(250-i,0);setTimeout((function(){n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),v(n,0),setTimeout((function(){var t=e.getElementsByClassName("v-ripple__animation");1===t.length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),n.parentNode&&e.removeChild(n.parentNode)}),300)}),r)}}}}};function b(e){return"undefined"===typeof e||!!e}function y(e){var t={},n=e.currentTarget;if(n&&n._ripple&&!n._ripple.touched){if(f(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;t.center=n._ripple.centered||m(e),n._ripple.class&&(t.class=n._ripple.class),w.show(e,n,t)}}function E(e){var t=e.currentTarget;t&&t._ripple&&(window.setTimeout((function(){t._ripple&&(t._ripple.touched=!1)})),w.hide(t))}function L(e){var t=e.currentTarget;if(t&&t._ripple&&f(e)){var n=t.getBoundingClientRect(),i=e.touches[e.touches.length-1],r=n.left,a=n.top,o=n.left+n.width,c=n.top+n.height;(i.clientX<r||i.clientX>o||i.clientY<a||i.clientY>c)&&E(e)}}var x=!1;function O(e){x||e.keyCode!==u.enter&&e.keyCode!==u.space||(x=!0,y(e))}function C(e){x=!1,E(e)}function P(e,t,n){var i=b(t.value);i||w.hide(e),e._ripple=e._ripple||{},e._ripple.enabled=i;var r=t.value||{};r.center&&(e._ripple.centered=!0),r.class&&(e._ripple.class=t.value.class),r.circle&&(e._ripple.circle=r.circle),i&&!n?(e.addEventListener("touchstart",y,{passive:!0}),e.addEventListener("touchend",E,{passive:!0}),e.addEventListener("touchmove",L,{passive:!0}),e.addEventListener("touchcancel",E),e.addEventListener("mousedown",y),e.addEventListener("mouseup",E),e.addEventListener("mouseleave",E),e.addEventListener("keydown",O),e.addEventListener("keyup",C),e.addEventListener("dragstart",E,{passive:!0})):!i&&n&&T(e)}function T(e){e.removeEventListener("mousedown",y),e.removeEventListener("touchstart",y),e.removeEventListener("touchend",E),e.removeEventListener("touchmove",L),e.removeEventListener("touchcancel",E),e.removeEventListener("mouseup",E),e.removeEventListener("mouseleave",E),e.removeEventListener("keydown",O),e.removeEventListener("keyup",C),e.removeEventListener("dragstart",E)}function S(e,t,n){_()&&P(e,t,!1)}function j(e){delete e._ripple,T(e)}function k(e,t){if(t.value!==t.oldValue){var n=b(t.oldValue);P(e,t,n)}}var M={bind:S,unbind:j,update:k},N={install:function(e){e.directive("ripple",M)}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(N);var A=N;i["a"].config.productionTip=!1,i["a"].use(A),new i["a"]({render:function(e){return e(p)}}).$mount("#app")}});