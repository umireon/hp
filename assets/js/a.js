!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,e,n){Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/assets/",e(e.s=11)}({0:function(t,e){"use strict";var n=document.getElementById("drawer"),i=document.getElementById("toggle"),o=document.getElementById("obfucator"),r=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.id;t.classList.contains(e+"--animation__show")?t.classList.toggle(e+"--animation__hide"):t.classList.toggle(e+"--animation__show")};i.addEventListener("click",function(){n.classList.toggle("drawer__visible"),r(n),o.classList.toggle("obfucator__visible")}),o.addEventListener("click",function(){n.classList.toggle("drawer__visible"),r(n),o.classList.toggle("obfucator__visible")})},11:function(t,e,n){"use strict";n(0)}});