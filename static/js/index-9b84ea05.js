import{j as f,a as r,L as h,O as g,r as p,F as _,R as v,c as R,B as O,u as P}from"./vendor-df519bda.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function l(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=l(t);fetch(t.href,e)}})();const b="modulepreload",k=function(i,o){return new URL(i,o).href},L={},d=function(o,l,c){if(!l||l.length===0)return o();const t=document.getElementsByTagName("link");return Promise.all(l.map(e=>{if(e=k(e,c),e in L)return;L[e]=!0;const n=e.endsWith(".css"),E=n?'[rel="stylesheet"]':"";if(!!c)for(let a=t.length-1;a>=0;a--){const u=t[a];if(u.href===e&&(!n||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${E}`))return;const s=document.createElement("link");if(s.rel=n?"stylesheet":b,n||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),n)return new Promise((a,u)=>{s.addEventListener("load",a),s.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>o())},A="basicLayout-91133",B="nav-a4600",y={basicLayout:A,nav:B},S=()=>f("div",{className:y.basicLayout,children:[f("div",{className:y.nav,children:[r(h,{to:"/",children:"Home"})," | ",r(h,{to:"articleList",children:"ArticleList"})]}),r(g,{})]}),m=i=>r(p.exports.Suspense,{fallback:r(_,{children:"..."}),children:v.createElement(p.exports.lazy(i))}),I=[{path:"/",element:r(S,{}),children:[{index:!0,element:m(()=>d(()=>import("./index-501fe4c8.js"),["./index-501fe4c8.js","./vendor-df519bda.js","../css/index-71f7a81f.css"],import.meta.url))},{path:"articleList",element:m(()=>d(()=>import("./index-54869e22.js"),["./index-54869e22.js","./vendor-df519bda.js","../css/index-ce79b39e.css"],import.meta.url))},{path:"articleList/:id",element:m(()=>d(()=>import("./index-6f999aca.js"),["./index-6f999aca.js","./vendor-df519bda.js","../css/index-f680665a.css"],import.meta.url))},{path:"*",element:m(()=>d(()=>import("./index-5c7ee4f6.js"),["./index-5c7ee4f6.js","./vendor-df519bda.js","../css/index-cf1f9e3c.css"],import.meta.url))}]}],N=()=>r(_,{children:P(I)});R.createRoot(document.getElementById("root")).render(r(v.StrictMode,{children:r(O,{children:r(N,{})})}));
