(()=>{"use strict";var e={756:(e,t,n)=>{n.d(t,{Z:()=>a});var o=n(81),r=n.n(o),s=n(645),i=n.n(s)()(r());i.push([e.id,"body {\n    height: 100vh;\n    width: 100vw;\n    margin: 0;\n}\n\n",""]);const a=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,s){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);o&&i[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var s={},i=[],a=0;a<e.length;a++){var c=e[a],u=o.base?c[0]+o.base:c[0],l=s[u]||0,p="".concat(u," ").concat(l);s[u]=l+1;var v=n(p),d={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==v)t[v].references++,t[v].updater(d);else{var h=r(d,o);o.byIndex=a,t.splice(a,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var s=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<s.length;i++){var a=n(s[i]);t[a].references--}for(var c=o(e,r),u=0;u<s.length;u++){var l=n(s[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}s=c}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var s=n.sourceMap;s&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={id:o,exports:{}};return e[o](s,s.exports,n),s.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),s=n(569),i=n.n(s),a=n(565),c=n.n(a),u=n(216),l=n.n(u),p=n(589),v=n.n(p),d=n(756),h={};h.styleTagTransform=v(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),t()(d.Z,h),d.Z&&d.Z.locals&&d.Z.locals;class f{constructor(e,t,n,o,r,s,i,a,c){this.position=e,this.move0=t,this.move1=n,this.move2=o,this.move3=r,this.move4=s,this.move5=i,this.move6=a,this.move7=c}}let m=new class{constructor(e,t,n,o,r,s,i,a,c,u,l){this.start=e,this.end=t,this.position=n,this.move0=o,this.move1=r,this.move2=s,this.move3=i,this.move4=a,this.move5=c,this.move6=u,this.move7=l}possibleMoves(e){let t=[-1,1],n=[-2,2],o=this.calculateMoves(e,t,n),r=this.calculateMoves(e,n,t);return o.concat(r)}calculateMoves(e,t,n){let o=[];return t.forEach((t=>{for(let r=0;r<2;r++){let s=t+e[0],i=n[r]+e[1];if(!(s>7||i>7||s<0||i<0)){let e=[s,i];o.push(e)}}})),o}appendMoves(e,t=this,n=-1){let o=this.possibleMoves(e);if(3==n)return;console.log("position",e),console.log(o);let r=o.length-1;for(;r>=0;)t[`move${r}`]=new f(o[r]),r--;return console.log("node",t),++n<3?this.appendMoves(e=this[`move${n}`].position,t=this[`move${n}`],n):void 0}}([7,1],[3,3],[7,1]);new f,m.appendMoves([7,1])})()})();