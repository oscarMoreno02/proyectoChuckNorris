(()=>{"use strict";var t={626:(t,e,o)=>{o.d(e,{C:()=>n,E:()=>r});class r{constructor(t){this.nombre=t}}class n{constructor(t,e){this.contenido=t,this.id=e}}}},e={};function o(r){var n=e[r];if(void 0!==n)return n.exports;var c=e[r]={exports:{}};return t[r](c,c.exports,o),c.exports}o.d=(t,e)=>{for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=o(626);const e=document.getElementById("frase"),r=document.getElementById("boton");let n=JSON.parse(localStorage.getItem("categoria")),c=new t.E(n.nombre);async function a(){try{const o=await fetch("https://api.chucknorris.io/jokes/random?category="+c.nombre);if(!o.ok)throw new Error("No se pudo obtener las categorias");const r=await o.json();let n=new t.C(r.value,r.id);return e.textContent=n.contenido,!0}catch(t){return!1}}r.addEventListener("click",(function(){a()})),document.addEventListener("keydown",(function(t){"r"==t.key&&a()}))})()})();