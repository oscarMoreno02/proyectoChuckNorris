(()=>{"use strict";var e={626:(e,t,n)=>{n.d(t,{E:()=>r});class r{constructor(e){this.nombre=e}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(626);document.getElementById("tabla");var t=document.getElementById("random");function r(e){localStorage.setItem("categoria",JSON.stringify(e))}!async function(){try{const o=await fetch("https://api.chucknorris.io/jokes/categories");if(!o.ok)throw new Error("No se pudo obtener las categorias");return t=await o.json(),n=document.getElementById("tabla"),t.forEach((function(t){let o=document.createElement("tr"),a=document.createElement("td"),c=document.createElement("a");c.href="frase.html",c.textContent=t,c.addEventListener("click",(function(t){t.preventDefault();var n=c.textContent;r(new e.E(n)),window.location.href="frase.html"})),a.appendChild(c),o.appendChild(a),n.appendChild(o)})),!0}catch(e){return!1}var t,n}(),t.addEventListener("click",(function(){r(new e.E("aleatorio")),window.location.href="frase.html"}))})()})();