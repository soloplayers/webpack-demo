(()=>{"use strict";var e,t,r={},n={};function o(e){if(n[e])return n[e].exports;var t=n[e]={exports:{}};return r[e](t,t.exports,o),t.exports}o.m=r,o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[])),o.u=e=>"index.9cb002f12f84466795ba.js",o.miniCssF=e=>958===e?"958.31d6cfe0d16ae931b73c.css":"main.undefined.css",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="webpack-demo:",o.l=(r,n,a)=>{if(e[r])e[r].push(n);else{var i,c;if(void 0!==a)for(var d=document.getElementsByTagName("script"),s=0;s<d.length;s++){var l=d[s];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+a){i=l;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+a),i.src=r),e[r]=[n];var u=(t,n)=>{i.onerror=i.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),t)return t(n)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),c&&document.head.appendChild(i)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={179:0};o.f.j=(t,r)=>{var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((r,o)=>{n=e[t]=[r,o]}));r.push(n[2]=a);var i=o.p+o.u(t),c=new Error;o.l(i,(r=>{if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,n[1](c)}}),"chunk-"+t)}};var t=self.webpackChunkwebpack_demo=self.webpackChunkwebpack_demo||[],r=t.push.bind(t);t.push=t=>{for(var n,a,[i,c,d]=t,s=0,l=[];s<i.length;s++)a=i[s],o.o(e,a)&&e[a]&&l.push(e[a][0]),e[a]=0;for(n in c)o.o(c,n)&&(o.m[n]=c[n]);for(d&&d(o),r(t);l.length;)l.shift()()}})();const a=o.p+"12a461f26cdd554657e6abeb382aa308.jpg",i=document.getElementById("app");i.innerHTML=`\n\t<img src="${a}"  width="600px"/>\n`;const c=document.createElement("button");c.innerText="懒加载",c.addEventListener("click",(()=>{o.e(958).then(o.bind(o,958)).then((e=>{(0,e.default)()}),(()=>{console.log("模块加载错误")}))})),i.appendChild(c)})();