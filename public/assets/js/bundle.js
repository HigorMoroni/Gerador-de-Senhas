!function(n){var e={};function r(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=n,r.c=e,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)r.d(t,o,function(e){return n[e]}.bind(null,o));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=4)}([function(n,e,r){var t=r(1),o=r(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1};t(o,a);n.exports=o.locals||{}},function(n,e,r){"use strict";var t,o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},a=function(){var n={};return function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[e]=r}return n[e]}}(),i=[];function c(n){for(var e=-1,r=0;r<i.length;r++)if(i[r].identifier===n){e=r;break}return e}function u(n,e){for(var r={},t=[],o=0;o<n.length;o++){var a=n[o],u=e.base?a[0]+e.base:a[0],s=r[u]||0,l="".concat(u," ").concat(s);r[u]=s+1;var f=c(l),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(i[f].references++,i[f].updater(d)):i.push({identifier:l,updater:v(d,e),references:1}),t.push(l)}return t}function s(n){var e=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var o=r.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(e);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var l,f=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function d(n,e,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=f(e,o);else{var a=document.createTextNode(o),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function p(n,e,r){var t=r.css,o=r.media,a=r.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var m=null,h=0;function v(n,e){var r,t,o;if(e.singleton){var a=h++;r=m||(m=s(e)),t=d.bind(null,r,a,!1),o=d.bind(null,r,a,!0)}else r=s(e),t=p.bind(null,r,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var r=u(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<r.length;t++){var o=c(r[t]);i[o].references--}for(var a=u(n,e),s=0;s<r.length;s++){var l=c(r[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}r=a}}}},function(n,e,r){(e=r(3)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);"]),e.push([n.i,":root {\n  --primary-color: rgb(17, 86, 102);\n  --primary-color-darker: rgb(9, 48, 56);\n}\n\n* {\n  box-sizing: border-box;\n  outline: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--primary-color);\n  font-family: 'Open sans', sans-serif;\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 800px;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\ninput {\n  font-size: 24px;\n  height: 50px;\n  padding: 0 20px;\n}\n\ninput:focus {\n  outline: 1px solid var(--primary-color);\n}\n\nbutton {\n  border: none;\n  background: var(--primary-color);\n  color: #fff;\n  font-size: 18px;\n  font-weight: 700;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 30px;\n}\n\nform button:hover {\n  background: var(--primary-color-darker);\n}\n\n.senha-gerada {\n  font-size: 2em;\n  color: var(--primary-color);\n  margin: 40px 0;\n}\n\ninput[type=\"checkbox\"] {\n  width: 15px;\n  height: 15px;\n}\n\nbutton {\n  display: block;\n  margin: 40px 0;\n  font-size: 1em;\n}",""]),n.exports=e},function(n,e,r){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=function(n,e){var r=n[1]||"",t=n[3];if(!t)return r;if(e&&"function"==typeof btoa){var o=(i=t,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),a=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[r].concat(a).concat([o]).join("\n")}var i,c,u;return[r].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<n.length;c++){var u=[].concat(n[c]);t&&o[u[0]]||(r&&(u[2]?u[2]="".concat(r," and ").concat(u[2]):u[2]=r),e.push(u))}},e}},function(n,e,r){"use strict";r.r(e);var t=function(n,e){return Math.floor(Math.random()*(e-n)+n)},o="'\"!@#$%¨&*()_+-=´[]{}~^:;.,/?°ºª§£¢¬|";var a=document.querySelector(".senha-gerada"),i=document.querySelector(".qtd-caracteres"),c=document.querySelector(".chk-maiusculas"),u=document.querySelector(".chk-minusculas"),s=document.querySelector(".chk-numeros"),l=document.querySelector(".chk-simbolos"),f=document.querySelector(".gerar-senha"),d=document.querySelector("i.fa-copy");r(0);f.addEventListener("click",(function(){a.innerHTML=function(n,e,r,a,i){var c=[];n=Number(n);for(var u=0;u<n;u++)e&&c.push(String.fromCharCode(t(65,91))),r&&c.push(String.fromCharCode(t(97,123))),a&&c.push(String.fromCharCode(t(48,58))),i&&c.push(o[t(0,o.length)]);return c.join("").slice(0,n)}(i.value,c.checked,u.checked,s.checked,l.checked)||"Nenhuma opção selecionada"})),d.addEventListener("click",(function(){a.select(),document.execCommand("copy"),alert("Senha copiada para a área de transferência!")}))}]);
//# sourceMappingURL=bundle.js.map