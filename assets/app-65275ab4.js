import{d as Pe,r as Z,a as pr,b as gr,c as F,i as le,e as ra,f as hr,g as br,o as _t,h as k,j as U,k as ke,l as oa,m as yr,u as St,n as wr,p as ia,q as sa,s as At,t as ze,v as C,w as re,x as X,y as J,z as S,A as D,B as Me,C as ce,D as Ae,_ as Q,E as la,F as kn,G as z,H as xn,I as kr,J as xr,T as ca,K as We,L as $,M as _r,N as mt,O as Ht,P as Sr,Q as _n,R as Ar,S as Er,U as Or,V as Lr,W as Cr,X as Pr,Y as Tr,Z as Ir,$ as Nr}from"./framework-c14c4553.js";const zr="modulepreload",$r=function(e){return"/"+e},Sn={},oe=function(t,n,a){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=$r(i),i in Sn)return;Sn[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(!!a)for(let c=r.length-1;c>=0;c--){const f=r[c];if(f.href===i&&(!o||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":zr,o||(u.as="script",u.crossOrigin=""),u.href=i,document.head.appendChild(u),o)return new Promise((c,f)=>{u.addEventListener("load",c),u.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())},Mr={"v-8daa1a0e":()=>oe(()=>import("./index.html-cfe7424b.js"),[]).then(({data:e})=>e),"v-2285d931":()=>oe(()=>import("./1-brand-new-day-remix.html-14b944fb.js"),[]).then(({data:e})=>e),"v-3706649a":()=>oe(()=>import("./404.html-35114fab.js"),[]).then(({data:e})=>e),"v-66748663":()=>oe(()=>import("./index.html-3c5aded9.js"),[]).then(({data:e})=>e)},Rr=JSON.parse('{"base":"/","lang":"ja-JP","title":"PHOHP","description":"plumshand home page","head":[["link",{"rel":"stylesheet","href":"https://fonts.googleapis.com/css?family=Kosugi+Maru"}]],"locales":{"/":{"lang":"ja-JP"}}}'),ua={"v-8daa1a0e":Pe(()=>oe(()=>import("./index.html-24e22a94.js"),["assets/index.html-24e22a94.js","assets/framework-c14c4553.js"])),"v-2285d931":Pe(()=>oe(()=>import("./1-brand-new-day-remix.html-32c60e8d.js"),["assets/1-brand-new-day-remix.html-32c60e8d.js","assets/framework-c14c4553.js"])),"v-3706649a":Pe(()=>oe(()=>import("./404.html-75563a68.js"),["assets/404.html-75563a68.js","assets/framework-c14c4553.js"])),"v-66748663":Pe(()=>oe(()=>import("./index.html-0790f9eb.js"),["assets/index.html-0790f9eb.js","assets/framework-c14c4553.js"]))};var Dr=Symbol(""),Fr=Z(Mr),fa=pr({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),ge=Z(fa),Et=()=>ge,da=Symbol(""),tn=()=>{const e=ke(da);if(!e)throw new Error("usePageFrontmatter() is called without provider.");return e},ma=Symbol(""),jr=()=>{const e=ke(ma);if(!e)throw new Error("usePageHead() is called without provider.");return e},Hr=Symbol(""),va=Symbol(""),Br=()=>{const e=ke(va);if(!e)throw new Error("usePageLang() is called without provider.");return e},pa=Symbol(""),Yr=()=>{const e=ke(pa);if(!e)throw new Error("usePageLayout() is called without provider.");return e},nn=Symbol(""),ga=()=>{const e=ke(nn);if(!e)throw new Error("useRouteLocale() is called without provider.");return e},Te=Z(Rr),Ur=()=>Te,ha=Symbol(""),Wr=()=>{const e=ke(ha);if(!e)throw new Error("useSiteLocaleData() is called without provider.");return e},Vr=Symbol(""),qr="Layout",Xr="NotFound",se=gr({resolveLayouts:e=>e.reduce((t,n)=>({...t,...n.layouts}),{}),resolvePageData:async e=>{const t=Fr.value[e];return await(t==null?void 0:t())??fa},resolvePageFrontmatter:e=>e.frontmatter,resolvePageHead:(e,t,n)=>{const a=le(t.description)?t.description:n.description,r=[...ra(t.head)?t.head:[],...n.head,["title",{},e],["meta",{name:"description",content:a}]];return hr(r)},resolvePageHeadTitle:(e,t)=>[e.title,t.title].filter(n=>!!n).join(" | "),resolvePageLang:e=>e.lang||"en",resolvePageLayout:(e,t)=>{let n;if(e.path){const a=e.frontmatter.layout;le(a)?n=a:n=qr}else n=Xr;return t[n]},resolveRouteLocale:(e,t)=>br(e,t),resolveSiteLocaleData:(e,t)=>({...e,...e.locales[t]})}),ba=F({name:"ClientOnly",setup(e,t){const n=Z(!1);return _t(()=>{n.value=!0}),()=>{var a,r;return n.value?(r=(a=t.slots).default)==null?void 0:r.call(a):null}}}),Gr=F({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(e){const t=Et(),n=k(()=>ua[e.pageKey||t.value.key]);return()=>n.value?U(n.value):U("div","404 Not Found")}}),De=(e={})=>e,ya=e=>oa(e)?e:`/${yr(e)}`;/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const L={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:e=>{const t=L.isStarted();e=$t(e,L.settings.minimum,1),L.status=e===1?null:e;const n=L.render(!t),a=n.querySelector(L.settings.barSelector),r=L.settings.speed,i=L.settings.easing;return n.offsetWidth,Kr(o=>{tt(a,{transform:"translate3d("+An(e)+"%,0,0)",transition:"all "+r+"ms "+i}),e===1?(tt(n,{transition:"none",opacity:"1"}),n.offsetWidth,setTimeout(function(){tt(n,{transition:"all "+r+"ms linear",opacity:"0"}),setTimeout(function(){L.remove(),o()},r)},r)):setTimeout(()=>o(),r)}),L},isStarted:()=>typeof L.status=="number",start:()=>{L.status||L.set(0);const e=()=>{setTimeout(()=>{L.status&&(L.trickle(),e())},L.settings.trickleSpeed)};return L.settings.trickle&&e(),L},done:e=>!e&&!L.status?L:L.inc(.3+.5*Math.random()).set(1),inc:e=>{let t=L.status;return t?(typeof e!="number"&&(e=(1-t)*$t(Math.random()*t,.1,.95)),t=$t(t+e,0,.994),L.set(t)):L.start()},trickle:()=>L.inc(Math.random()*L.settings.trickleRate),render:e=>{if(L.isRendered())return document.getElementById("nprogress");En(document.documentElement,"nprogress-busy");const t=document.createElement("div");t.id="nprogress",t.innerHTML=L.settings.template;const n=t.querySelector(L.settings.barSelector),a=e?"-100":An(L.status||0),r=document.querySelector(L.settings.parent);return tt(n,{transition:"all 0 linear",transform:"translate3d("+a+"%,0,0)"}),r!==document.body&&En(r,"nprogress-custom-parent"),r==null||r.appendChild(t),t},remove:()=>{On(document.documentElement,"nprogress-busy"),On(document.querySelector(L.settings.parent),"nprogress-custom-parent");const e=document.getElementById("nprogress");e&&Zr(e)},isRendered:()=>!!document.getElementById("nprogress")},$t=(e,t,n)=>e<t?t:e>n?n:e,An=e=>(-1+e)*100,Kr=function(){const e=[];function t(){const n=e.shift();n&&n(t)}return function(n){e.push(n),e.length===1&&t()}}(),tt=function(){const e=["Webkit","O","Moz","ms"],t={};function n(o){return o.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(s,l){return l.toUpperCase()})}function a(o){const s=document.body.style;if(o in s)return o;let l=e.length;const u=o.charAt(0).toUpperCase()+o.slice(1);let c;for(;l--;)if(c=e[l]+u,c in s)return c;return o}function r(o){return o=n(o),t[o]||(t[o]=a(o))}function i(o,s,l){s=r(s),o.style[s]=l}return function(o,s){for(const l in s){const u=s[l];u!==void 0&&Object.prototype.hasOwnProperty.call(s,l)&&i(o,l,u)}}}(),wa=(e,t)=>(typeof e=="string"?e:an(e)).indexOf(" "+t+" ")>=0,En=(e,t)=>{const n=an(e),a=n+t;wa(n,t)||(e.className=a.substring(1))},On=(e,t)=>{const n=an(e);if(!wa(e,t))return;const a=n.replace(" "+t+" "," ");e.className=a.substring(1,a.length-1)},an=e=>(" "+(e.className||"")+" ").replace(/\s+/gi," "),Zr=e=>{e&&e.parentNode&&e.parentNode.removeChild(e)};const Jr=()=>{_t(()=>{const e=St(),t=new Set;t.add(e.currentRoute.value.path),e.beforeEach(n=>{t.has(n.path)||L.start()}),e.afterEach(n=>{t.add(n.path),L.done()})})},Qr=De({setup(){Jr()}});/*! medium-zoom 1.0.8 | MIT License | https://github.com/francoischalifour/medium-zoom */var xe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},nt=function(t){return t.tagName==="IMG"},eo=function(t){return NodeList.prototype.isPrototypeOf(t)},vt=function(t){return t&&t.nodeType===1},Ln=function(t){var n=t.currentSrc||t.src;return n.substr(-4).toLowerCase()===".svg"},Cn=function(t){try{return Array.isArray(t)?t.filter(nt):eo(t)?[].slice.call(t).filter(nt):vt(t)?[t].filter(nt):typeof t=="string"?[].slice.call(document.querySelectorAll(t)).filter(nt):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},to=function(t){var n=document.createElement("div");return n.classList.add("medium-zoom-overlay"),n.style.background=t,n},no=function(t){var n=t.getBoundingClientRect(),a=n.top,r=n.left,i=n.width,o=n.height,s=t.cloneNode(),l=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,u=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return s.removeAttribute("id"),s.style.position="absolute",s.style.top=a+l+"px",s.style.left=r+u+"px",s.style.width=i+"px",s.style.height=o+"px",s.style.transform="",s},Ce=function(t,n){var a=xe({bubbles:!1,cancelable:!1,detail:void 0},n);if(typeof window.CustomEvent=="function")return new CustomEvent(t,a);var r=document.createEvent("CustomEvent");return r.initCustomEvent(t,a.bubbles,a.cancelable,a.detail),r},ao=function e(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=window.Promise||function(x){function A(){}x(A,A)},r=function(x){var A=x.target;if(A===K){y();return}w.indexOf(A)!==-1&&O({target:A})},i=function(){if(!(P||!d.original)){var x=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(G-x)>_.scrollOffset&&setTimeout(y,150)}},o=function(x){var A=x.key||x.keyCode;(A==="Escape"||A==="Esc"||A===27)&&y()},s=function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},A=x;if(x.background&&(K.style.background=x.background),x.container&&x.container instanceof Object&&(A.container=xe({},_.container,x.container)),x.template){var M=vt(x.template)?x.template:document.querySelector(x.template);A.template=M}return _=xe({},_,A),w.forEach(function(H){H.dispatchEvent(Ce("medium-zoom:update",{detail:{zoom:j}}))}),j},l=function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return e(xe({},_,x))},u=function(){for(var x=arguments.length,A=Array(x),M=0;M<x;M++)A[M]=arguments[M];var H=A.reduce(function(E,V){return[].concat(E,Cn(V))},[]);return H.filter(function(E){return w.indexOf(E)===-1}).forEach(function(E){w.push(E),E.classList.add("medium-zoom-image")}),T.forEach(function(E){var V=E.type,te=E.listener,Le=E.options;H.forEach(function(ve){ve.addEventListener(V,te,Le)})}),j},c=function(){for(var x=arguments.length,A=Array(x),M=0;M<x;M++)A[M]=arguments[M];d.zoomed&&y();var H=A.length>0?A.reduce(function(E,V){return[].concat(E,Cn(V))},[]):w;return H.forEach(function(E){E.classList.remove("medium-zoom-image"),E.dispatchEvent(Ce("medium-zoom:detach",{detail:{zoom:j}}))}),w=w.filter(function(E){return H.indexOf(E)===-1}),j},f=function(x,A){var M=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return w.forEach(function(H){H.addEventListener("medium-zoom:"+x,A,M)}),T.push({type:"medium-zoom:"+x,listener:A,options:M}),j},p=function(x,A){var M=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return w.forEach(function(H){H.removeEventListener("medium-zoom:"+x,A,M)}),T=T.filter(function(H){return!(H.type==="medium-zoom:"+x&&H.listener.toString()===A.toString())}),j},m=function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},A=x.target,M=function(){var E={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},V=void 0,te=void 0;if(_.container)if(_.container instanceof Object)E=xe({},E,_.container),V=E.width-E.left-E.right-_.margin*2,te=E.height-E.top-E.bottom-_.margin*2;else{var Le=vt(_.container)?_.container:document.querySelector(_.container),ve=Le.getBoundingClientRect(),Tt=ve.width,rr=ve.height,or=ve.left,ir=ve.top;E=xe({},E,{width:Tt,height:rr,left:or,top:ir})}V=V||E.width-_.margin*2,te=te||E.height-_.margin*2;var je=d.zoomedHd||d.original,sr=Ln(je)?V:je.naturalWidth||V,lr=Ln(je)?te:je.naturalHeight||te,et=je.getBoundingClientRect(),cr=et.top,ur=et.left,It=et.width,Nt=et.height,fr=Math.min(Math.max(It,sr),V)/It,dr=Math.min(Math.max(Nt,lr),te)/Nt,zt=Math.min(fr,dr),mr=(-ur+(V-It)/2+_.margin+E.left)/zt,vr=(-cr+(te-Nt)/2+_.margin+E.top)/zt,wn="scale("+zt+") translate3d("+mr+"px, "+vr+"px, 0)";d.zoomed.style.transform=wn,d.zoomedHd&&(d.zoomedHd.style.transform=wn)};return new a(function(H){if(A&&w.indexOf(A)===-1){H(j);return}var E=function Tt(){P=!1,d.zoomed.removeEventListener("transitionend",Tt),d.original.dispatchEvent(Ce("medium-zoom:opened",{detail:{zoom:j}})),H(j)};if(d.zoomed){H(j);return}if(A)d.original=A;else if(w.length>0){var V=w;d.original=V[0]}else{H(j);return}if(d.original.dispatchEvent(Ce("medium-zoom:open",{detail:{zoom:j}})),G=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,P=!0,d.zoomed=no(d.original),document.body.appendChild(K),_.template){var te=vt(_.template)?_.template:document.querySelector(_.template);d.template=document.createElement("div"),d.template.appendChild(te.content.cloneNode(!0)),document.body.appendChild(d.template)}if(d.original.parentElement&&d.original.parentElement.tagName==="PICTURE"&&d.original.currentSrc&&(d.zoomed.src=d.original.currentSrc),document.body.appendChild(d.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),d.original.classList.add("medium-zoom-image--hidden"),d.zoomed.classList.add("medium-zoom-image--opened"),d.zoomed.addEventListener("click",y),d.zoomed.addEventListener("transitionend",E),d.original.getAttribute("data-zoom-src")){d.zoomedHd=d.zoomed.cloneNode(),d.zoomedHd.removeAttribute("srcset"),d.zoomedHd.removeAttribute("sizes"),d.zoomedHd.removeAttribute("loading"),d.zoomedHd.src=d.zoomed.getAttribute("data-zoom-src"),d.zoomedHd.onerror=function(){clearInterval(Le),console.warn("Unable to reach the zoom image target "+d.zoomedHd.src),d.zoomedHd=null,M()};var Le=setInterval(function(){d.zoomedHd.complete&&(clearInterval(Le),d.zoomedHd.classList.add("medium-zoom-image--opened"),d.zoomedHd.addEventListener("click",y),document.body.appendChild(d.zoomedHd),M())},10)}else if(d.original.hasAttribute("srcset")){d.zoomedHd=d.zoomed.cloneNode(),d.zoomedHd.removeAttribute("sizes"),d.zoomedHd.removeAttribute("loading");var ve=d.zoomedHd.addEventListener("load",function(){d.zoomedHd.removeEventListener("load",ve),d.zoomedHd.classList.add("medium-zoom-image--opened"),d.zoomedHd.addEventListener("click",y),document.body.appendChild(d.zoomedHd),M()})}else M()})},y=function(){return new a(function(x){if(P||!d.original){x(j);return}var A=function M(){d.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(d.zoomed),d.zoomedHd&&document.body.removeChild(d.zoomedHd),document.body.removeChild(K),d.zoomed.classList.remove("medium-zoom-image--opened"),d.template&&document.body.removeChild(d.template),P=!1,d.zoomed.removeEventListener("transitionend",M),d.original.dispatchEvent(Ce("medium-zoom:closed",{detail:{zoom:j}})),d.original=null,d.zoomed=null,d.zoomedHd=null,d.template=null,x(j)};P=!0,document.body.classList.remove("medium-zoom--opened"),d.zoomed.style.transform="",d.zoomedHd&&(d.zoomedHd.style.transform=""),d.template&&(d.template.style.transition="opacity 150ms",d.template.style.opacity=0),d.original.dispatchEvent(Ce("medium-zoom:close",{detail:{zoom:j}})),d.zoomed.addEventListener("transitionend",A)})},O=function(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},A=x.target;return d.original?y():m({target:A})},B=function(){return _},h=function(){return w},b=function(){return d.original},w=[],T=[],P=!1,G=0,_=n,d={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(t)==="[object Object]"?_=t:(t||typeof t=="string")&&u(t),_=xe({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},_);var K=to(_.background);document.addEventListener("click",r),document.addEventListener("keyup",o),document.addEventListener("scroll",i),window.addEventListener("resize",y);var j={open:m,close:y,toggle:O,update:s,clone:l,attach:u,detach:c,on:f,off:p,getOptions:B,getImages:h,getZoomedImage:b};return j};function ro(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var oo=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";ro(oo);const io=ao,so=Symbol("mediumZoom");const lo=".theme-default-content > img, .theme-default-content :not(a) > img",co={},uo=300,fo=De({enhance({app:e,router:t}){const n=io(co);n.refresh=(a=lo)=>{n.detach(),n.attach(a)},e.provide(so,n),t.afterEach(()=>{setTimeout(()=>n.refresh(),uo)})}});const mo=U("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[U("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),U("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),vo=F({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(e){const t=ga(),n=k(()=>e.locales[t.value]??{openInNewWindow:"open in new window"});return()=>U("span",[mo,U("span",{class:"external-link-icon-sr-only"},n.value.openInNewWindow)])}}),po={"/":{}},go=De({enhance({app:e}){e.component("ExternalLinkIcon",U(vo,{locales:po}))}}),ho=JSON.parse('{"logo":"/plumshand.png","sidebar":false,"locales":{"/":{"lastUpdatedText":"更新日時","navbar":[{"icon":{"prefix":"fab","iconName":"twitter","icon":[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]},"link":"https://twitter.com/plumshand","noExternalIcon":true},{"icon":{"prefix":"fab","iconName":"youtube","icon":[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},"link":"https://www.youtube.com/@plumshand","noExternalIcon":true}]}},"colorMode":"light","colorModeSwitch":false,"navbar":[],"lastUpdated":true,"lastUpdatedText":"Last Updated","sidebarDepth":2,"toggleSidebar":"toggle sidebar"}'),bo=Z(ho),yo=()=>bo,ka=Symbol(""),wo=()=>{const e=ke(ka);if(!e)throw new Error("useThemeLocaleData() is called without provider.");return e},ko=(e,t)=>{var n;return{...e,...(n=e.locales)==null?void 0:n[t]}},xo=De({enhance({app:e}){const t=yo(),n=e._context.provides[nn],a=k(()=>ko(t.value,n.value));e.provide(ka,a),Object.defineProperties(e.config.globalProperties,{$theme:{get(){return t.value}},$themeLocale:{get(){return a.value}}})}}),xa=(...e)=>{const n=St().resolve(...e),a=n.matched[n.matched.length-1];if(!(a!=null&&a.redirect))return n;const{redirect:r}=a,i=wr(r)?r(n):r,o=le(i)?{path:i}:i;return xa({hash:n.hash,query:n.query,params:n.params,...o})},_a=e=>{const t=xa(encodeURI(e));return{text:t.meta.title||e,link:t.name==="404"?e:t.fullPath}},Sa=Symbol("sidebarItems"),Aa=()=>{const e=ke(Sa);if(!e)throw new Error("useSidebarItems() is called without provider.");return e},_o=()=>{const e=he(),t=tn(),n=k(()=>So(t.value,e.value));ia(Sa,n)},So=(e,t)=>{const n=e.sidebar??t.sidebar??"auto",a=e.sidebarDepth??t.sidebarDepth??2;return e.home||n===!1?[]:n==="auto"?Eo(a):ra(n)?Ea(n):sa(n)?Oo(n):[]},Ao=(e,t)=>({text:e.title,link:`#${e.slug}`,children:rn(e.children,t)}),rn=(e,t)=>t>0?e.map(n=>Ao(n,t-1)):[],Eo=e=>{const t=Et();return[{text:t.value.title,children:rn(t.value.headers,e)}]},Ea=(e,t)=>{const n=At(),a=Et(),r=i=>{var s;let o;if(le(i)?o=_a(i):o=i,o.children)return{...o,children:o.children.map(l=>r(l))};if(o.link===n.path){const l=((s=a.value.headers[0])==null?void 0:s.level)===1?a.value.headers[0].children:a.value.headeres;return{...o,children:rn(l,sidebarDepth)}}return o};return e.map(i=>r(i))},Oo=(e,t)=>{At();const n=e[sidebarDepth]??[];return Ea(n,sidebarDepth)},he=()=>wo(),Lo=F({__name:"NavbarBrand",setup(e){const t=ga(),n=Wr(),a=he(),r=k(()=>a.value.home||t.value),i=k(()=>n.value.title),o=k(()=>a.value.logo),s=()=>{if(!o.value)return null;const l=U("img",{class:"logo",src:ya(o.value),alt:i.value});return a.value.logoDark===void 0?l:U(ba,()=>l)};return(l,u)=>{const c=ze("RouterLink");return C(),re(c,{to:S(r)},{default:X(()=>[J(s),S(i)?(C(),D("span",{key:0,class:Me(["site-name",{"can-hide":S(o)}])},ce(S(i)),3)):Ae("v-if",!0)]),_:1},8,["to"])}}}),Co=Q(Lo,[["__file","NavbarBrand.vue"]]),Po=["href","rel","target","aria-label"],To=F({inheritAttrs:!1}),Io=F({...To,__name:"AutoLink",props:{item:{type:Object,required:!0}},setup(e){const t=e,n=At(),a=Ur(),{item:r}=la(t),i=k(()=>oa(r.value.link)),o=k(()=>kr(r.value.link)||xr(r.value.link)),s=k(()=>{if(!o.value){if(r.value.target)return r.value.target;if(i.value)return"_blank"}}),l=k(()=>s.value==="_blank"),u=k(()=>!i.value&&!o.value&&!l.value),c=k(()=>{if(!o.value){if(r.value.rel)return r.value.rel;if(l.value)return"noopener noreferrer"}}),f=k(()=>r.value.ariaLabel||r.value.text),p=k(()=>{const O=Object.keys(a.value.locales);return O.length?!O.some(B=>B===r.value.link):r.value.link!=="/"}),m=k(()=>p.value?n.path.startsWith(r.value.link):!1),y=k(()=>u.value?r.value.activeMatch?new RegExp(r.value.activeMatch).test(n.path):m.value:!1);return(O,B)=>{const h=ze("RouterLink"),b=ze("fa"),w=ze("AutoLinkExternalIcon");return S(u)?(C(),re(h,kn({key:0,class:{"router-link-active":S(y)},to:S(r).link,"aria-label":S(f)},O.$attrs),{default:X(()=>[z(O.$slots,"before"),xn(" "+ce(S(r).text)+" ",1),z(O.$slots,"after")]),_:3},16,["class","to","aria-label"])):(C(),D("a",kn({key:1,class:"external-link",href:S(r).link,rel:S(c),target:S(s),"aria-label":S(f)},O.$attrs),[z(O.$slots,"before"),S(r).icon?(C(),re(b,{key:0,icon:S(r).icon},null,8,["icon"])):Ae("v-if",!0),xn(" "+ce(S(r).text)+" ",1),S(l)&&!S(r).noExternalIcon?(C(),re(w,{key:1})):Ae("v-if",!0),z(O.$slots,"after")],16,Po))}}}),pt=Q(Io,[["__file","AutoLink.vue"]]),No=F({__name:"DropdownTransition",setup(e){const t=a=>{a.style.height=a.scrollHeight+"px"},n=a=>{a.style.height=""};return(a,r)=>(C(),re(ca,{name:"dropdown",onEnter:t,onAfterEnter:n,onBeforeEnter:t},{default:X(()=>[z(a.$slots,"default")]),_:3}))}}),zo=Q(No,[["__file","DropdownTransition.vue"]]),$o=["onTouchstart","onMouseover"],Mo=["aria-label"],Ro={class:"title"},Do=$("span",{class:"arrow down"},null,-1),Fo=["aria-label"],jo={class:"title"},Ho={class:"navbar-dropdown"},Bo={class:"navbar-dropdown-subtitle"},Yo={key:1},Uo={class:"navbar-dropdown-subitem-wrapper"},Wo=F({__name:"NavbarDropdown",props:{item:{type:Object,required:!0}},setup(e){const t=e,{item:n}=la(t),a=k(()=>n.value.ariaLabel||n.value.text),r=Z(!1),i=Z(),o=Z(),s=At(),l=async()=>{if(await Ar(),!o.value||!i.value)return;const f=o.value.getBoundingClientRect();let p=f.left;const m=f.top+o.value.offsetHeight;let y=i.value.scrollWidth;y>window.innerWidth?(y=window.innerWidth,p=0):(p+y-window.scrollX>window.innerWidth&&(p=window.innerWidth-y+window.scrollX),p<0&&(p=0)),i.value.style.top=`${m}px`,i.value.style.left=`${p}px`,y?i.value.style.width=`${y}px`:i.value.style.width=""};We(r,f=>{f&&l()}),We(()=>s.path,()=>{r.value=!1});const u=f=>{f.detail===9?r.value=!r.value:r.value=!1},c=(f,p)=>p[p.length-1]===f;return(f,p)=>(C(),D("div",{class:Me(["navbar-dropdown-wrapper",{open:r.value}]),ref_key:"rootEl",ref:o,onTouchstart:_n(l,["self"]),onMouseover:_n(l,["self"])},[$("button",{class:"navbar-dropdown-title",type:"button","aria-label":S(a),onClick:u,onTouchstart:l,onMouseover:l},[$("span",Ro,ce(S(n).text),1),Do],40,Mo),$("button",{class:"navbar-dropdown-title-mobile",type:"button","aria-label":S(a),onClick:p[0]||(p[0]=m=>r.value=!r.value)},[$("span",jo,ce(S(n).text),1),$("span",{class:Me(["arrow",r.value?"down":"right"])},null,2)],8,Fo),J(zo,null,{default:X(()=>[_r($("ul",Ho,[(C(!0),D(mt,null,Ht(S(n).children,m=>(C(),D("li",{key:m.text,class:"navbar-dropdown-item"},[m.children?(C(),D(mt,{key:0},[$("h4",Bo,[m.link?(C(),re(pt,{key:0,item:m,onFocusout:y=>c(m,S(n).children)&&m.children.length===0&&(r.value=!1)},null,8,["item","onFocusout"])):(C(),D("span",Yo,ce(m.text),1))]),$("ul",Uo,[(C(!0),D(mt,null,Ht(m.children,y=>(C(),D("li",{key:y.link,class:"navbar-dropdown-subitem"},[J(pt,{item:y,onFocusout:O=>c(y,m.children)&&c(m,S(n).children)&&(r.value=!1)},null,8,["item","onFocusout"])]))),128))])],64)):(C(),re(pt,{key:1,item:m,onFocusout:y=>c(m,S(n).children)&&(r.value=!1)},null,8,["item","onFocusout"]))]))),128))],512),[[Sr,r.value]])]),_:1})],42,$o))}}),Vo=Q(Wo,[["__file","NavbarDropdown.vue"]]),qo={key:0,class:"navbar-items"},Xo=F({__name:"NavbarItems",setup(e){const t=o=>le(o)?_a(o):o.children?{...o,children:o.children.map(t)}:o,n=()=>{const o=he();return k(()=>(o.value.navbar||[]).map(t))},a=Z(!1),r=n(),i=k(()=>[...r.value]);return(o,s)=>S(i).length?(C(),D("nav",qo,[(C(!0),D(mt,null,Ht(S(i),l=>(C(),D("div",{key:l.text,class:"navbar-item"},[l.children?(C(),re(Vo,{key:0,item:l,class:Me(a.value?"mobile":"")},null,8,["item","class"])):(C(),re(pt,{key:1,item:l},null,8,["item"]))]))),128))])):Ae("v-if",!0)}}),Oa=Q(Xo,[["__file","NavbarItems.vue"]]),Go=["title"],Ko=$("div",{class:"icon","aria-hidden":"true"},[$("span"),$("span"),$("span")],-1),Zo=[Ko],Jo=F({__name:"ToggleSidebarButton",emits:["toggle"],setup(e){const t=he();return(n,a)=>(C(),D("div",{class:"toggle-sidebar-button",title:S(t).toggleSidebar,"aria-expanded":"false",role:"button",tabindex:"0",onClick:a[0]||(a[0]=r=>n.$emit("toggle"))},Zo,8,Go))}}),Qo=Q(Jo,[["__file","ToggleSidebarButton.vue"]]),ei={ref:"navbar",class:"navbar"},ti={ref:"navbarBrand"},ni=F({__name:"Navbar",setup(e){const t=Z(0),n=k(()=>t.value?{maxWidth:t.value+"px"}:{});return(a,r)=>(C(),D("header",ei,[J(Qo,{onToggle:r[0]||(r[0]=i=>a.$emit("toggle-sidebar"))}),$("span",ti,[J(Co)],512),$("div",{class:"navbar-items-wrapper",style:Er(S(n))},[z(a.$slots,"before"),J(Oa,{class:"can-hide"}),z(a.$slots,"after")],4)],512))}}),ai=Q(ni,[["__file","Navbar.vue"]]),ri={class:"page-meta"},oi={key:0,class:"meta-item last-updated"},ii={class:"meta-item-label"},si={class:"meta-item-info"},li=F({__name:"PageMeta",setup(e){const t=()=>{const r=he(),i=tn();return k(()=>i.value.lastUpdated??r.value.lastUpdated??!0?i.value.updatedDate:null)},n=he(),a=t();return(r,i)=>{const o=ze("ClientOnly");return C(),D("footer",ri,[S(a)?(C(),D("div",oi,[$("span",ii,ce(S(n).lastUpdatedText)+": ",1),J(o,null,{default:X(()=>[$("span",si,ce(S(a)),1)]),_:1})])):Ae("v-if",!0)])}}}),ci=Q(li,[["__file","PageMeta.vue"]]),ui={class:"page"},fi={class:"theme-default-content"},di=F({__name:"Page",setup(e){return(t,n)=>{const a=ze("Content");return C(),D("main",ui,[z(t.$slots,"top"),$("div",fi,[z(t.$slots,"content-top"),J(a),z(t.$slots,"content-bottom")]),J(ci),z(t.$slots,"bottom"),$("div",{class:Me(t.$style.footer)},"Copyright © 2023 すももの手",2)])}}}),mi="_footer_153qo_1",vi={footer:mi},pi={$style:vi},gi=Q(di,[["__cssModules",pi],["__file","Page.vue"]]),hi={key:0,class:"sidebar-items"},bi=F({__name:"SidebarItems",setup(e){St();const t=Aa();return(n,a)=>S(t).length?(C(),D("ul",hi)):Ae("v-if",!0)}}),yi=Q(bi,[["__file","SidebarItems.vue"]]),wi={class:"sidebar"},ki=F({__name:"Sidebar",setup(e){return(t,n)=>(C(),D("aside",wi,[J(Oa),z(t.$slots,"top"),J(yi),z(t.$slots,"bottom")]))}}),xi=Q(ki,[["__file","Sidebar.vue"]]),_i=F({__name:"Layout",setup(e){const t=Et(),n=tn(),a=he(),r=k(()=>n.value.navbar!==!1&&a.value.navbar!==!1),i=Aa(),o=Z(!1),s=m=>{o.value=typeof m=="boolean"?m:!o.value},l={x:0,y:0},u=m=>{l.x=m.changedTouches[0].clientX,l.y=m.changedTouches[0].clientY},c=m=>{const y=m.changedTouches[0].clientX-l.x,O=m.changedTouches[0].clientY-l.y;Math.abs(y)>Math.abs(O)&&Math.abs(y)>40&&(y>0&&l.x<=80?s(!0):s(!1))},f=k(()=>[{"no-navbar":!r.value,"no-sidebar":!i.value.length,"sidebar-open":o.value},n.value.pageClass]);let p;return _t(()=>{p=St().afterEach(()=>s(!1))}),Or(()=>{p()}),(m,y)=>(C(),D("div",{class:Me(["theme-container",S(f)]),onTouchstart:u,onTouchend:c},[z(m.$slots,"navbar",{},()=>[S(r)?(C(),re(ai,{key:0,onToggleSidebar:s},{before:X(()=>[z(m.$slots,"navbar-before")]),after:X(()=>[z(m.$slots,"navbar-after")]),_:3})):Ae("v-if",!0)]),$("div",{class:"sidebar-mask",onClick:y[0]||(y[0]=O=>s(!1))}),z(m.$slots,"sidebar",{},()=>[J(xi,null,{top:X(()=>[z(m.$slots,"sidebar-top")]),bottom:X(()=>[z(m.$slots,"sidebar-bottom")]),_:3})]),z(m.$slots,"page",{},()=>[J(ca,{name:"fade-slide-y",mode:"out-in"},{default:X(()=>[(C(),re(gi,{key:S(t).path},{top:X(()=>[z(m.$slots,"page-top")]),"content-top":X(()=>[z(m.$slots,"page-content-top")]),"content-bottom":X(()=>[z(m.$slots,"page-content-bottom")]),bottom:X(()=>[z(m.$slots,"page-bottom")]),_:3}))]),_:3})])],34))}}),Si=Q(_i,[["__file","Layout.vue"]]),Ai={class:"theme-container"},Ei={class:"page"},Oi={class:"theme-default-content"},Li=$("h1",null,"404 Not Found",-1),Ci=F({__name:"NotFound",setup(e){const n=he().value.notFound??["Not Found"],a=()=>n[Math.floor(Math.random()*n.length)];return(r,i)=>(C(),D("div",Ai,[$("main",Ei,[$("div",Oi,[Li,$("blockquote",null,ce(a()),1)])])]))}}),Pi=Q(Ci,[["__file","NotFound.vue"]]);const Ti=De({enhance({app:e,router:t}){e.component("AutoLinkExternalIcon",()=>{const n=e.component("ExternalLinkIcon");return n?U(n):null})},setup(){_o()},layouts:{Layout:Si,NotFound:Pi}}),Ii={enhance:({app:e})=>{e.component("BlogRecents",Pe(()=>oe(()=>import("./BlogRecents-86a98045.js"),["assets/BlogRecents-86a98045.js","assets/framework-c14c4553.js"]))),e.component("MoreRecents",Pe(()=>oe(()=>import("./MoreRecents-9a025e9a.js"),["assets/MoreRecents-9a025e9a.js","assets/framework-c14c4553.js"])))}};function Pn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pn(Object(n),!0).forEach(function(a){Y(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pn(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function bt(e){return bt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},bt(e)}function Ni(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Tn(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function zi(e,t,n){return t&&Tn(e.prototype,t),n&&Tn(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function on(e,t){return Mi(e)||Di(e,t)||La(e,t)||ji()}function Ze(e){return $i(e)||Ri(e)||La(e)||Fi()}function $i(e){if(Array.isArray(e))return Bt(e)}function Mi(e){if(Array.isArray(e))return e}function Ri(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Di(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,o,s;try{for(n=n.call(e);!(r=(o=n.next()).done)&&(a.push(o.value),!(t&&a.length===t));r=!0);}catch(l){i=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw s}}return a}}function La(e,t){if(e){if(typeof e=="string")return Bt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bt(e,t)}}function Bt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Fi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ji(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var In=function(){},sn={},Ca={},Pa=null,Ta={mark:In,measure:In};try{typeof window<"u"&&(sn=window),typeof document<"u"&&(Ca=document),typeof MutationObserver<"u"&&(Pa=MutationObserver),typeof performance<"u"&&(Ta=performance)}catch{}var Hi=sn.navigator||{},Nn=Hi.userAgent,zn=Nn===void 0?"":Nn,be=sn,N=Ca,$n=Pa,at=Ta;be.document;var me=!!N.documentElement&&!!N.head&&typeof N.addEventListener=="function"&&typeof N.createElement=="function",Ia=~zn.indexOf("MSIE")||~zn.indexOf("Trident/"),rt,ot,it,st,lt,ue="___FONT_AWESOME___",Yt=16,Na="fa",za="svg-inline--fa",Ee="data-fa-i2svg",Ut="data-fa-pseudo-element",Bi="data-fa-pseudo-element-pending",ln="data-prefix",cn="data-icon",Mn="fontawesome-i2svg",Yi="async",Ui=["HTML","HEAD","STYLE","SCRIPT"],$a=function(){try{return!0}catch{return!1}}(),I="classic",R="sharp",un=[I,R];function Je(e){return new Proxy(e,{get:function(n,a){return a in n?n[a]:n[I]}})}var Ve=Je((rt={},Y(rt,I,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Y(rt,R,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),rt)),qe=Je((ot={},Y(ot,I,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Y(ot,R,{solid:"fass",regular:"fasr",light:"fasl"}),ot)),Xe=Je((it={},Y(it,I,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Y(it,R,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),it)),Wi=Je((st={},Y(st,I,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Y(st,R,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),st)),Vi=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Ma="fa-layers-text",qi=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Xi=Je((lt={},Y(lt,I,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Y(lt,R,{900:"fass",400:"fasr",300:"fasl"}),lt)),Ra=[1,2,3,4,5,6,7,8,9,10],Gi=Ra.concat([11,12,13,14,15,16,17,18,19,20]),Ki=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],_e={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ge=new Set;Object.keys(qe[I]).map(Ge.add.bind(Ge));Object.keys(qe[R]).map(Ge.add.bind(Ge));var Zi=[].concat(un,Ze(Ge),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",_e.GROUP,_e.SWAP_OPACITY,_e.PRIMARY,_e.SECONDARY]).concat(Ra.map(function(e){return"".concat(e,"x")})).concat(Gi.map(function(e){return"w-".concat(e)})),Be=be.FontAwesomeConfig||{};function Ji(e){var t=N.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Qi(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(N&&typeof N.querySelector=="function"){var es=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];es.forEach(function(e){var t=on(e,2),n=t[0],a=t[1],r=Qi(Ji(n));r!=null&&(Be[a]=r)})}var Da={styleDefault:"solid",familyDefault:"classic",cssPrefix:Na,replacementClass:za,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Be.familyPrefix&&(Be.cssPrefix=Be.familyPrefix);var Re=v(v({},Da),Be);Re.autoReplaceSvg||(Re.observeMutations=!1);var g={};Object.keys(Da).forEach(function(e){Object.defineProperty(g,e,{enumerable:!0,set:function(n){Re[e]=n,Ye.forEach(function(a){return a(g)})},get:function(){return Re[e]}})});Object.defineProperty(g,"familyPrefix",{enumerable:!0,set:function(t){Re.cssPrefix=t,Ye.forEach(function(n){return n(g)})},get:function(){return Re.cssPrefix}});be.FontAwesomeConfig=g;var Ye=[];function ts(e){return Ye.push(e),function(){Ye.splice(Ye.indexOf(e),1)}}var pe=Yt,ie={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ns(e){if(!(!e||!me)){var t=N.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=N.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return N.head.insertBefore(t,a),e}}var as="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ke(){for(var e=12,t="";e-- >0;)t+=as[Math.random()*62|0];return t}function Fe(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function fn(e){return e.classList?Fe(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Fa(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function rs(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Fa(e[n]),'" ')},"").trim()}function Ot(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function dn(e){return e.size!==ie.size||e.x!==ie.x||e.y!==ie.y||e.rotate!==ie.rotate||e.flipX||e.flipY}function os(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:u}}function is(e){var t=e.transform,n=e.width,a=n===void 0?Yt:n,r=e.height,i=r===void 0?Yt:r,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Ia?l+="translate(".concat(t.x/pe-a/2,"em, ").concat(t.y/pe-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/pe,"em), calc(-50% + ").concat(t.y/pe,"em)) "):l+="translate(".concat(t.x/pe,"em, ").concat(t.y/pe,"em) "),l+="scale(".concat(t.size/pe*(t.flipX?-1:1),", ").concat(t.size/pe*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var ss=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ja(){var e=Na,t=za,n=g.cssPrefix,a=g.replacementClass,r=ss;if(n!==e||a!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var Rn=!1;function Mt(){g.autoAddCss&&!Rn&&(ns(ja()),Rn=!0)}var ls={mixout:function(){return{dom:{css:ja,insertCss:Mt}}},hooks:function(){return{beforeDOMElementCreation:function(){Mt()},beforeI2svg:function(){Mt()}}}},fe=be||{};fe[ue]||(fe[ue]={});fe[ue].styles||(fe[ue].styles={});fe[ue].hooks||(fe[ue].hooks={});fe[ue].shims||(fe[ue].shims=[]);var ae=fe[ue],Ha=[],cs=function e(){N.removeEventListener("DOMContentLoaded",e),yt=1,Ha.map(function(t){return t()})},yt=!1;me&&(yt=(N.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(N.readyState),yt||N.addEventListener("DOMContentLoaded",cs));function us(e){me&&(yt?setTimeout(e,0):Ha.push(e))}function Qe(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?Fa(e):"<".concat(t," ").concat(rs(a),">").concat(i.map(Qe).join(""),"</").concat(t,">")}function Dn(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var fs=function(t,n){return function(a,r,i,o){return t.call(n,a,r,i,o)}},Rt=function(t,n,a,r){var i=Object.keys(t),o=i.length,s=r!==void 0?fs(n,r):n,l,u,c;for(a===void 0?(l=1,c=t[i[0]]):(l=0,c=a);l<o;l++)u=i[l],c=s(c,t[u],u,t);return c};function ds(e){for(var t=[],n=0,a=e.length;n<a;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function Wt(e){var t=ds(e);return t.length===1?t[0].toString(16):null}function ms(e,t){var n=e.length,a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Fn(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function Vt(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=Fn(t);typeof ae.hooks.addPack=="function"&&!r?ae.hooks.addPack(e,Fn(t)):ae.styles[e]=v(v({},ae.styles[e]||{}),i),e==="fas"&&Vt("fa",t)}var ct,ut,ft,Ie=ae.styles,vs=ae.shims,ps=(ct={},Y(ct,I,Object.values(Xe[I])),Y(ct,R,Object.values(Xe[R])),ct),mn=null,Ba={},Ya={},Ua={},Wa={},Va={},gs=(ut={},Y(ut,I,Object.keys(Ve[I])),Y(ut,R,Object.keys(Ve[R])),ut);function hs(e){return~Zi.indexOf(e)}function bs(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!hs(r)?r:null}var qa=function(){var t=function(i){return Rt(Ie,function(o,s,l){return o[l]=Rt(s,i,{}),o},{})};Ba=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),Ya=t(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),Va=t(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var n="far"in Ie||g.autoFetchSvg,a=Rt(vs,function(r,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});Ua=a.names,Wa=a.unicodes,mn=Lt(g.styleDefault,{family:g.familyDefault})};ts(function(e){mn=Lt(e.styleDefault,{family:g.familyDefault})});qa();function vn(e,t){return(Ba[e]||{})[t]}function ys(e,t){return(Ya[e]||{})[t]}function Se(e,t){return(Va[e]||{})[t]}function Xa(e){return Ua[e]||{prefix:null,iconName:null}}function ws(e){var t=Wa[e],n=vn("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function ye(){return mn}var pn=function(){return{prefix:null,iconName:null,rest:[]}};function Lt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,a=n===void 0?I:n,r=Ve[a][e],i=qe[a][e]||qe[a][r],o=e in ae.styles?e:null;return i||o||null}var jn=(ft={},Y(ft,I,Object.keys(Xe[I])),Y(ft,R,Object.keys(Xe[R])),ft);function Ct(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(t={},Y(t,I,"".concat(g.cssPrefix,"-").concat(I)),Y(t,R,"".concat(g.cssPrefix,"-").concat(R)),t),o=null,s=I;(e.includes(i[I])||e.some(function(u){return jn[I].includes(u)}))&&(s=I),(e.includes(i[R])||e.some(function(u){return jn[R].includes(u)}))&&(s=R);var l=e.reduce(function(u,c){var f=bs(g.cssPrefix,c);if(Ie[c]?(c=ps[s].includes(c)?Wi[s][c]:c,o=c,u.prefix=c):gs[s].indexOf(c)>-1?(o=c,u.prefix=Lt(c,{family:s})):f?u.iconName=f:c!==g.replacementClass&&c!==i[I]&&c!==i[R]&&u.rest.push(c),!r&&u.prefix&&u.iconName){var p=o==="fa"?Xa(u.iconName):{},m=Se(u.prefix,u.iconName);p.prefix&&(o=null),u.iconName=p.iconName||m||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!Ie.far&&Ie.fas&&!g.autoFetchSvg&&(u.prefix="fas")}return u},pn());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===R&&(Ie.fass||g.autoFetchSvg)&&(l.prefix="fass",l.iconName=Se(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=ye()||"fas"),l}var ks=function(){function e(){Ni(this,e),this.definitions={}}return zi(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=v(v({},n.definitions[s]||{}),o[s]),Vt(s,o[s]);var l=Xe[I][s];l&&Vt(l,o[s]),qa()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[s][f]=u)}),n[s][l]=u}),n}}]),e}(),Hn=[],Ne={},$e={},xs=Object.keys($e);function _s(e,t){var n=t.mixoutsTo;return Hn=e,Ne={},Object.keys($e).forEach(function(a){xs.indexOf(a)===-1&&delete $e[a]}),Hn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),bt(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(o){Ne[o]||(Ne[o]=[]),Ne[o].push(i[o])})}a.provides&&a.provides($e)}),n}function qt(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=Ne[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(a))}),t}function Oe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=Ne[e]||[];r.forEach(function(i){i.apply(null,n)})}function de(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return $e[e]?$e[e].apply(null,t):void 0}function Xt(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||ye();if(t)return t=Se(n,t)||t,Dn(Ga.definitions,n,t)||Dn(ae.styles,n,t)}var Ga=new ks,Ss=function(){g.autoReplaceSvg=!1,g.observeMutations=!1,Oe("noAuto")},As={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return me?(Oe("beforeI2svg",t),de("pseudoElements2svg",t),de("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;g.autoReplaceSvg===!1&&(g.autoReplaceSvg=!0),g.observeMutations=!0,us(function(){Os({autoReplaceSvgRoot:n}),Oe("watch",t)})}},Es={icon:function(t){if(t===null)return null;if(bt(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Se(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=Lt(t[0]);return{prefix:a,iconName:Se(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(g.cssPrefix,"-"))>-1||t.match(Vi))){var r=Ct(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||ye(),iconName:Se(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=ye();return{prefix:i,iconName:Se(i,t)||t}}}},ee={noAuto:Ss,config:g,dom:As,parse:Es,library:Ga,findIconDefinition:Xt,toHtml:Qe},Os=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?N:n;(Object.keys(ae.styles).length>0||g.autoFetchSvg)&&me&&g.autoReplaceSvg&&ee.dom.i2svg({node:a})};function Pt(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return Qe(a)})}}),Object.defineProperty(e,"node",{get:function(){if(me){var a=N.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function Ls(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,i=e.styles,o=e.transform;if(dn(o)&&n.found&&!a.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};r.style=Ot(v(v({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function Cs(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(g.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:v(v({},r),{},{id:o}),children:a}]}]}function gn(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,p=e.watchable,m=p===void 0?!1:p,y=a.found?a:n,O=y.width,B=y.height,h=r==="fak",b=[g.replacementClass,i?"".concat(g.cssPrefix,"-").concat(i):""].filter(function(K){return f.classes.indexOf(K)===-1}).filter(function(K){return K!==""||!!K}).concat(f.classes).join(" "),w={children:[],attributes:v(v({},f.attributes),{},{"data-prefix":r,"data-icon":i,class:b,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(O," ").concat(B)})},T=h&&!~f.classes.indexOf("fa-fw")?{width:"".concat(O/B*16*.0625,"em")}:{};m&&(w.attributes[Ee]=""),l&&(w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(c||Ke())},children:[l]}),delete w.attributes.title);var P=v(v({},w),{},{prefix:r,iconName:i,main:n,mask:a,maskId:u,transform:o,symbol:s,styles:v(v({},T),f.styles)}),G=a.found&&n.found?de("generateAbstractMask",P)||{children:[],attributes:{}}:de("generateAbstractIcon",P)||{children:[],attributes:{}},_=G.children,d=G.attributes;return P.children=_,P.attributes=d,s?Cs(P):Ls(P)}function Bn(e){var t=e.content,n=e.width,a=e.height,r=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=v(v(v({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[Ee]="");var c=v({},o.styles);dn(r)&&(c.transform=is({transform:r,startCentered:!0,width:n,height:a}),c["-webkit-transform"]=c.transform);var f=Ot(c);f.length>0&&(u.style=f);var p=[];return p.push({tag:"span",attributes:u,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Ps(e){var t=e.content,n=e.title,a=e.extra,r=v(v(v({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=Ot(a.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Dt=ae.styles;function Gt(e){var t=e[0],n=e[1],a=e.slice(4),r=on(a,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(g.cssPrefix,"-").concat(_e.GROUP)},children:[{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(_e.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(g.cssPrefix,"-").concat(_e.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Ts={found:!1,width:512,height:512};function Is(e,t){!$a&&!g.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Kt(e,t){var n=t;return t==="fa"&&g.styleDefault!==null&&(t=ye()),new Promise(function(a,r){if(de("missingIconAbstract"),n==="fa"){var i=Xa(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Dt[t]&&Dt[t][e]){var o=Dt[t][e];return a(Gt(o))}Is(e,t),a(v(v({},Ts),{},{icon:g.showMissingIcons&&e?de("missingIconAbstract")||{}:{}}))})}var Yn=function(){},Zt=g.measurePerformance&&at&&at.mark&&at.measure?at:{mark:Yn,measure:Yn},He='FA "6.4.0"',Ns=function(t){return Zt.mark("".concat(He," ").concat(t," begins")),function(){return Ka(t)}},Ka=function(t){Zt.mark("".concat(He," ").concat(t," ends")),Zt.measure("".concat(He," ").concat(t),"".concat(He," ").concat(t," begins"),"".concat(He," ").concat(t," ends"))},hn={begin:Ns,end:Ka},gt=function(){};function Un(e){var t=e.getAttribute?e.getAttribute(Ee):null;return typeof t=="string"}function zs(e){var t=e.getAttribute?e.getAttribute(ln):null,n=e.getAttribute?e.getAttribute(cn):null;return t&&n}function $s(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(g.replacementClass)}function Ms(){if(g.autoReplaceSvg===!0)return ht.replace;var e=ht[g.autoReplaceSvg];return e||ht.replace}function Rs(e){return N.createElementNS("http://www.w3.org/2000/svg",e)}function Ds(e){return N.createElement(e)}function Za(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?Rs:Ds:n;if(typeof e=="string")return N.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(o){r.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){r.appendChild(Za(o,{ceFn:a}))}),r}function Fs(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var ht={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(Za(r),n)}),n.getAttribute(Ee)===null&&g.keepOriginalSource){var a=N.createComment(Fs(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~fn(n).indexOf(g.replacementClass))return ht.replace(t);var r=new RegExp("".concat(g.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(s,l){return l===g.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=a.map(function(s){return Qe(s)}).join(`
`);n.setAttribute(Ee,""),n.innerHTML=o}};function Wn(e){e()}function Ja(e,t){var n=typeof t=="function"?t:gt;if(e.length===0)n();else{var a=Wn;g.mutateApproach===Yi&&(a=be.requestAnimationFrame||Wn),a(function(){var r=Ms(),i=hn.begin("mutate");e.map(r),i(),n()})}}var bn=!1;function Qa(){bn=!0}function Jt(){bn=!1}var wt=null;function Vn(e){if($n&&g.observeMutations){var t=e.treeCallback,n=t===void 0?gt:t,a=e.nodeCallback,r=a===void 0?gt:a,i=e.pseudoElementsCallback,o=i===void 0?gt:i,s=e.observeMutationsRoot,l=s===void 0?N:s;wt=new $n(function(u){if(!bn){var c=ye();Fe(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Un(f.addedNodes[0])&&(g.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&g.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Un(f.target)&&~Ki.indexOf(f.attributeName))if(f.attributeName==="class"&&zs(f.target)){var p=Ct(fn(f.target)),m=p.prefix,y=p.iconName;f.target.setAttribute(ln,m||c),y&&f.target.setAttribute(cn,y)}else $s(f.target)&&r(f.target)})}}),me&&wt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function js(){wt&&wt.disconnect()}function Hs(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(a[o]=s.join(":").trim()),a},{})),n}function Bs(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=Ct(fn(e));return r.prefix||(r.prefix=ye()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ys(r.prefix,e.innerText)||vn(r.prefix,Wt(e.innerText))),!r.iconName&&g.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Ys(e){var t=Fe(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return g.autoA11y&&(n?t["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(a||Ke()):(t["aria-hidden"]="true",t.focusable="false")),t}function Us(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ie,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function qn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Bs(e),a=n.iconName,r=n.prefix,i=n.rest,o=Ys(e),s=qt("parseNodeAttributes",{},e),l=t.styleParser?Hs(e):[];return v({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:ie,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Ws=ae.styles;function er(e){var t=g.autoReplaceSvg==="nest"?qn(e,{styleParser:!1}):qn(e);return~t.extra.classes.indexOf(Ma)?de("generateLayersText",e,t):de("generateSvgReplacementMutation",e,t)}var we=new Set;un.map(function(e){we.add("fa-".concat(e))});Object.keys(Ve[I]).map(we.add.bind(we));Object.keys(Ve[R]).map(we.add.bind(we));we=Ze(we);function Xn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!me)return Promise.resolve();var n=N.documentElement.classList,a=function(f){return n.add("".concat(Mn,"-").concat(f))},r=function(f){return n.remove("".concat(Mn,"-").concat(f))},i=g.autoFetchSvg?we:un.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Ws));i.includes("fa")||i.push("fa");var o=[".".concat(Ma,":not([").concat(Ee,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(Ee,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Fe(e.querySelectorAll(o))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var l=hn.begin("onTree"),u=s.reduce(function(c,f){try{var p=er(f);p&&c.push(p)}catch(m){$a||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(p){Ja(p,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),f(p)})})}function Vs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;er(e).then(function(n){n&&Ja([n],t)})}function qs(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:Xt(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Xt(r||{})),e(a,v(v({},n),{},{mask:r}))}}var Xs=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?ie:a,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,f=n.title,p=f===void 0?null:f,m=n.titleId,y=m===void 0?null:m,O=n.classes,B=O===void 0?[]:O,h=n.attributes,b=h===void 0?{}:h,w=n.styles,T=w===void 0?{}:w;if(t){var P=t.prefix,G=t.iconName,_=t.icon;return Pt(v({type:"icon"},t),function(){return Oe("beforeDOMElementCreation",{iconDefinition:t,params:n}),g.autoA11y&&(p?b["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(y||Ke()):(b["aria-hidden"]="true",b.focusable="false")),gn({icons:{main:Gt(_),mask:l?Gt(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:P,iconName:G,transform:v(v({},ie),r),symbol:o,title:p,maskId:c,titleId:y,extra:{attributes:b,styles:T,classes:B}})})}},Gs={mixout:function(){return{icon:qs(Xs)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Xn,n.nodeCallback=Vs,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?N:a,i=n.callback,o=i===void 0?function(){}:i;return Xn(r,o)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,o=a.titleId,s=a.prefix,l=a.transform,u=a.symbol,c=a.mask,f=a.maskId,p=a.extra;return new Promise(function(m,y){Promise.all([Kt(r,s),c.iconName?Kt(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(O){var B=on(O,2),h=B[0],b=B[1];m([n,gn({icons:{main:h,mask:b},prefix:s,iconName:r,transform:l,symbol:u,maskId:f,title:i,titleId:o,extra:p,watchable:!0})])}).catch(y)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Ot(s);l.length>0&&(r.style=l);var u;return dn(o)&&(u=de("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),a.push(u||i.icon),{children:a,attributes:r}}}},Ks={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Pt({type:"layer"},function(){Oe("beforeDOMElementCreation",{assembler:n,params:a});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(g.cssPrefix,"-layers")].concat(Ze(i)).join(" ")},children:o}]})}}}},Zs={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,o=a.classes,s=o===void 0?[]:o,l=a.attributes,u=l===void 0?{}:l,c=a.styles,f=c===void 0?{}:c;return Pt({type:"counter",content:n},function(){return Oe("beforeDOMElementCreation",{content:n,params:a}),Ps({content:n.toString(),title:i,extra:{attributes:u,styles:f,classes:["".concat(g.cssPrefix,"-layers-counter")].concat(Ze(s))}})})}}}},Js={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?ie:r,o=a.title,s=o===void 0?null:o,l=a.classes,u=l===void 0?[]:l,c=a.attributes,f=c===void 0?{}:c,p=a.styles,m=p===void 0?{}:p;return Pt({type:"text",content:n},function(){return Oe("beforeDOMElementCreation",{content:n,params:a}),Bn({content:n,transform:v(v({},ie),i),title:s,extra:{attributes:f,styles:m,classes:["".concat(g.cssPrefix,"-layers-text")].concat(Ze(u))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.title,i=a.transform,o=a.extra,s=null,l=null;if(Ia){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return g.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Bn({content:n.innerHTML,width:s,height:l,transform:i,title:r,extra:o,watchable:!0})])}}},Qs=new RegExp('"',"ug"),Gn=[1105920,1112319];function el(e){var t=e.replace(Qs,""),n=ms(t,0),a=n>=Gn[0]&&n<=Gn[1],r=t.length===2?t[0]===t[1]:!1;return{value:Wt(r?t[0]:t),isSecondary:a||r}}function Kn(e,t){var n="".concat(Bi).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var i=Fe(e.children),o=i.filter(function(_){return _.getAttribute(Ut)===t})[0],s=be.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(qi),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),a();if(l&&c!=="none"&&c!==""){var f=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?R:I,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?qe[p][l[2].toLowerCase()]:Xi[p][u],y=el(f),O=y.value,B=y.isSecondary,h=l[0].startsWith("FontAwesome"),b=vn(m,O),w=b;if(h){var T=ws(O);T.iconName&&T.prefix&&(b=T.iconName,m=T.prefix)}if(b&&!B&&(!o||o.getAttribute(ln)!==m||o.getAttribute(cn)!==w)){e.setAttribute(n,w),o&&e.removeChild(o);var P=Us(),G=P.extra;G.attributes[Ut]=t,Kt(b,m).then(function(_){var d=gn(v(v({},P),{},{icons:{main:_,mask:pn()},prefix:m,iconName:w,extra:G,watchable:!0})),K=N.createElement("svg");t==="::before"?e.insertBefore(K,e.firstChild):e.appendChild(K),K.outerHTML=d.map(function(j){return Qe(j)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function tl(e){return Promise.all([Kn(e,"::before"),Kn(e,"::after")])}function nl(e){return e.parentNode!==document.head&&!~Ui.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ut)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Zn(e){if(me)return new Promise(function(t,n){var a=Fe(e.querySelectorAll("*")).filter(nl).map(tl),r=hn.begin("searchPseudoElements");Qa(),Promise.all(a).then(function(){r(),Jt(),t()}).catch(function(){r(),Jt(),n()})})}var al={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Zn,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?N:a;g.searchPseudoElements&&Zn(r)}}},Jn=!1,rl={mixout:function(){return{dom:{unwatch:function(){Qa(),Jn=!0}}}},hooks:function(){return{bootstrap:function(){Vn(qt("mutationObserverCallbacks",{}))},noAuto:function(){js()},watch:function(n){var a=n.observeMutationsRoot;Jn?Jt():Vn(qt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Qn=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return a.flipX=!0,a;if(o&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(o){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},ol={mixout:function(){return{parse:{transform:function(n){return Qn(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Qn(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},m={outer:s,inner:f,path:p};return{tag:"g",attributes:v({},m.outer),children:[{tag:"g",attributes:v({},m.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:v(v({},a.icon.attributes),m.path)}]}]}}}},Ft={x:0,y:0,width:"100%",height:"100%"};function ea(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function il(e){return e.tag==="g"?e.children:[e]}var sl={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?Ct(r.split(" ").map(function(o){return o.trim()})):pn();return i.prefix||(i.prefix=ye()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,c=i.icon,f=o.width,p=o.icon,m=os({transform:l,containerWidth:f,iconWidth:u}),y={tag:"rect",attributes:v(v({},Ft),{},{fill:"white"})},O=c.children?{children:c.children.map(ea)}:{},B={tag:"g",attributes:v({},m.inner),children:[ea(v({tag:c.tag,attributes:v(v({},c.attributes),m.path)},O))]},h={tag:"g",attributes:v({},m.outer),children:[B]},b="mask-".concat(s||Ke()),w="clip-".concat(s||Ke()),T={tag:"mask",attributes:v(v({},Ft),{},{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,h]},P={tag:"defs",children:[{tag:"clipPath",attributes:{id:w},children:il(p)},T]};return a.push(P,{tag:"rect",attributes:v({fill:"currentColor","clip-path":"url(#".concat(w,")"),mask:"url(#".concat(b,")")},Ft)}),{children:a,attributes:r}}}},ll={provides:function(t){var n=!1;be.matchMedia&&(n=be.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:v(v({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=v(v({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:v(v({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:v(v({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:v(v({},o),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:v(v({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:v(v({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:v(v({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:v(v({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},cl={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},ul=[ls,Gs,Ks,Zs,Js,al,rl,ol,sl,ll,cl];_s(ul,{mixoutsTo:ee});ee.noAuto;var tr=ee.config,jt=ee.library;ee.dom;var kt=ee.parse;ee.findIconDefinition;ee.toHtml;var fl=ee.icon;ee.layer;var dl=ee.text;ee.counter;function ta(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ta(Object(n),!0).forEach(function(a){q(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ta(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function xt(e){return xt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},xt(e)}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ml(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function vl(e,t){if(e==null)return{};var n=ml(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function Qt(e){return pl(e)||gl(e)||hl(e)||bl()}function pl(e){if(Array.isArray(e))return en(e)}function gl(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function hl(e,t){if(e){if(typeof e=="string")return en(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return en(e,t)}}function en(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function bl(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var yl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},nr={exports:{}};(function(e){(function(t){var n=function(h,b,w){if(!u(b)||f(b)||p(b)||m(b)||l(b))return b;var T,P=0,G=0;if(c(b))for(T=[],G=b.length;P<G;P++)T.push(n(h,b[P],w));else{T={};for(var _ in b)Object.prototype.hasOwnProperty.call(b,_)&&(T[h(_,w)]=n(h,b[_],w))}return T},a=function(h,b){b=b||{};var w=b.separator||"_",T=b.split||/(?=[A-Z])/;return h.split(T).join(w)},r=function(h){return y(h)?h:(h=h.replace(/[\-_\s]+(.)?/g,function(b,w){return w?w.toUpperCase():""}),h.substr(0,1).toLowerCase()+h.substr(1))},i=function(h){var b=r(h);return b.substr(0,1).toUpperCase()+b.substr(1)},o=function(h,b){return a(h,b).toLowerCase()},s=Object.prototype.toString,l=function(h){return typeof h=="function"},u=function(h){return h===Object(h)},c=function(h){return s.call(h)=="[object Array]"},f=function(h){return s.call(h)=="[object Date]"},p=function(h){return s.call(h)=="[object RegExp]"},m=function(h){return s.call(h)=="[object Boolean]"},y=function(h){return h=h-0,h===h},O=function(h,b){var w=b&&"process"in b?b.process:b;return typeof w!="function"?h:function(T,P){return w(T,h,P)}},B={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(h,b){return n(O(r,b),h)},decamelizeKeys:function(h,b){return n(O(o,b),h,b)},pascalizeKeys:function(h,b){return n(O(i,b),h)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=B:t.humps=B})(yl)})(nr);var wl=nr.exports,kl=["class","style"];function xl(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=wl.camelize(n.slice(0,a)),i=n.slice(a+1).trim();return t[r]=i,t},{})}function _l(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function yn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(l){return yn(l)}),r=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.class=_l(c);break;case"style":l.style=xl(c);break;default:l.attrs[u]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=vl(n,kl);return U(e.tag,ne(ne(ne({},t),{},{class:r.class,style:ne(ne({},r.style),o)},r.attrs),s),a)}var ar=!1;try{ar=!0}catch{}function Sl(){if(!ar&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ue(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?q({},e,t):{}}function Al(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},q(t,"fa-".concat(e.size),e.size!==null),q(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),q(t,"fa-pull-".concat(e.pull),e.pull!==null),q(t,"fa-swap-opacity",e.swapOpacity),q(t,"fa-bounce",e.bounce),q(t,"fa-shake",e.shake),q(t,"fa-beat",e.beat),q(t,"fa-fade",e.fade),q(t,"fa-beat-fade",e.beatFade),q(t,"fa-flash",e.flash),q(t,"fa-spin-pulse",e.spinPulse),q(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(a){return n[a]?a:null}).filter(function(a){return a})}function na(e){if(e&&xt(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(kt.icon)return kt.icon(e);if(e===null)return null;if(xt(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var El=F({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var a=n.attrs,r=k(function(){return na(t.icon)}),i=k(function(){return Ue("classes",Al(t))}),o=k(function(){return Ue("transform",typeof t.transform=="string"?kt.transform(t.transform):t.transform)}),s=k(function(){return Ue("mask",na(t.mask))}),l=k(function(){return fl(r.value,ne(ne(ne(ne({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});We(l,function(c){if(!c)return Sl("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var u=k(function(){return l.value?yn(l.value.abstract[0],{},a):null});return function(){return u.value}}});F({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var a=n.slots,r=tr.familyPrefix,i=k(function(){return["".concat(r,"-layers")].concat(Qt(t.fixedWidth?["".concat(r,"-fw")]:[]))});return function(){return U("div",{class:i.value},a.default?a.default():[])}}});F({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var a=n.attrs,r=tr.familyPrefix,i=k(function(){return Ue("classes",[].concat(Qt(t.counter?["".concat(r,"-layers-counter")]:[]),Qt(t.position?["".concat(r,"-layers-").concat(t.position)]:[])))}),o=k(function(){return Ue("transform",typeof t.transform=="string"?kt.transform(t.transform):t.transform)}),s=k(function(){var u=dl(t.value.toString(),ne(ne({},o.value),i.value)),c=u.abstract;return t.counter&&(c[0].attributes.class=c[0].attributes.class.replace("fa-layers-text","")),c[0]}),l=k(function(){return yn(s.value,{},a)});return function(){return l.value}}});var Ol={prefix:"fab",iconName:"soundcloud",icon:[640,512,[],"f1be","M111.4 256.3l5.8 65-5.8 68.3c-.3 2.5-2.2 4.4-4.4 4.4s-4.2-1.9-4.2-4.4l-5.6-68.3 5.6-65c0-2.2 1.9-4.2 4.2-4.2 2.2 0 4.1 2 4.4 4.2zm21.4-45.6c-2.8 0-4.7 2.2-5 5l-5 105.6 5 68.3c.3 2.8 2.2 5 5 5 2.5 0 4.7-2.2 4.7-5l5.8-68.3-5.8-105.6c0-2.8-2.2-5-4.7-5zm25.5-24.1c-3.1 0-5.3 2.2-5.6 5.3l-4.4 130 4.4 67.8c.3 3.1 2.5 5.3 5.6 5.3 2.8 0 5.3-2.2 5.3-5.3l5.3-67.8-5.3-130c0-3.1-2.5-5.3-5.3-5.3zM7.2 283.2c-1.4 0-2.2 1.1-2.5 2.5L0 321.3l4.7 35c.3 1.4 1.1 2.5 2.5 2.5s2.2-1.1 2.5-2.5l5.6-35-5.6-35.6c-.3-1.4-1.1-2.5-2.5-2.5zm23.6-21.9c-1.4 0-2.5 1.1-2.5 2.5l-6.4 57.5 6.4 56.1c0 1.7 1.1 2.8 2.5 2.8s2.5-1.1 2.8-2.5l7.2-56.4-7.2-57.5c-.3-1.4-1.4-2.5-2.8-2.5zm25.3-11.4c-1.7 0-3.1 1.4-3.3 3.3L47 321.3l5.8 65.8c.3 1.7 1.7 3.1 3.3 3.1 1.7 0 3.1-1.4 3.1-3.1l6.9-65.8-6.9-68.1c0-1.9-1.4-3.3-3.1-3.3zm25.3-2.2c-1.9 0-3.6 1.4-3.6 3.6l-5.8 70 5.8 67.8c0 2.2 1.7 3.6 3.6 3.6s3.6-1.4 3.9-3.6l6.4-67.8-6.4-70c-.3-2.2-2-3.6-3.9-3.6zm241.4-110.9c-1.1-.8-2.8-1.4-4.2-1.4-2.2 0-4.2.8-5.6 1.9-1.9 1.7-3.1 4.2-3.3 6.7v.8l-3.3 176.7 1.7 32.5 1.7 31.7c.3 4.7 4.2 8.6 8.9 8.6s8.6-3.9 8.6-8.6l3.9-64.2-3.9-177.5c-.4-3-2-5.8-4.5-7.2zm-26.7 15.3c-1.4-.8-2.8-1.4-4.4-1.4s-3.1.6-4.4 1.4c-2.2 1.4-3.6 3.9-3.6 6.7l-.3 1.7-2.8 160.8s0 .3 3.1 65.6v.3c0 1.7.6 3.3 1.7 4.7 1.7 1.9 3.9 3.1 6.4 3.1 2.2 0 4.2-1.1 5.6-2.5 1.7-1.4 2.5-3.3 2.5-5.6l.3-6.7 3.1-58.6-3.3-162.8c-.3-2.8-1.7-5.3-3.9-6.7zm-111.4 22.5c-3.1 0-5.8 2.8-5.8 6.1l-4.4 140.6 4.4 67.2c.3 3.3 2.8 5.8 5.8 5.8 3.3 0 5.8-2.5 6.1-5.8l5-67.2-5-140.6c-.2-3.3-2.7-6.1-6.1-6.1zm376.7 62.8c-10.8 0-21.1 2.2-30.6 6.1-6.4-70.8-65.8-126.4-138.3-126.4-17.8 0-35 3.3-50.3 9.4-6.1 2.2-7.8 4.4-7.8 9.2v249.7c0 5 3.9 8.6 8.6 9.2h218.3c43.3 0 78.6-35 78.6-78.3.1-43.6-35.2-78.9-78.5-78.9zm-296.7-60.3c-4.2 0-7.5 3.3-7.8 7.8l-3.3 136.7 3.3 65.6c.3 4.2 3.6 7.5 7.8 7.5 4.2 0 7.5-3.3 7.5-7.5l3.9-65.6-3.9-136.7c-.3-4.5-3.3-7.8-7.5-7.8zm-53.6-7.8c-3.3 0-6.4 3.1-6.4 6.7l-3.9 145.3 3.9 66.9c.3 3.6 3.1 6.4 6.4 6.4 3.6 0 6.4-2.8 6.7-6.4l4.4-66.9-4.4-145.3c-.3-3.6-3.1-6.7-6.7-6.7zm26.7 3.4c-3.9 0-6.9 3.1-6.9 6.9L227 321.3l3.9 66.4c.3 3.9 3.1 6.9 6.9 6.9s6.9-3.1 6.9-6.9l4.2-66.4-4.2-141.7c0-3.9-3-6.9-6.9-6.9z"]},Ll={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]},Cl={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]};const Pl=De({enhance({app:e,router:t,siteData:n}){e.component("fa",El),jt.add(Ol),jt.add(Cl),jt.add(Ll)}}),dt=[Qr,fo,go,xo,Ti,Ii,Pl],Tl=[["v-8daa1a0e","/",{title:""},["/index.html","/index.md"]],["v-2285d931","/blog/2023/04/10/1-brand-new-day-remix.html",{title:"Brand New Dayリミックス"},["/blog/2023/04/10/1-brand-new-day-remix","/blog/2023/04/10/1-brand-new-day-remix.md"]],["v-3706649a","/404.html",{title:""},["/404"]],["v-66748663","/blog/2023/index.html",{title:"2023年"},["/blog/2023/index"]]];var aa=F({name:"Vuepress",setup(){const e=Yr();return()=>U(e.value)}}),Il=()=>Tl.reduce((e,[t,n,a,r])=>(e.push({name:t,path:n,component:aa,meta:a},...r.map(i=>({path:i,redirect:n}))),e),[{name:"404",path:"/:catchAll(.*)",component:aa}]),Nl=Ir,zl=()=>{const e=Lr({history:Nl(Cr("/")),routes:Il(),scrollBehavior:(t,n,a)=>a||(t.hash?{el:t.hash}:{top:0})});return e.beforeResolve(async(t,n)=>{var a;(t.path!==n.path||n===Pr)&&([ge.value]=await Promise.all([se.resolvePageData(t.name),(a=ua[t.name])==null?void 0:a.__asyncLoader()]))}),e},$l=e=>{e.component("ClientOnly",ba),e.component("Content",Gr)},Ml=(e,t,n)=>{const a=Z(t.currentRoute.value.path);We(()=>t.currentRoute.value.path,p=>a.value=p);const r=k(()=>se.resolveLayouts(n)),i=k(()=>se.resolveRouteLocale(Te.value.locales,a.value)),o=k(()=>se.resolveSiteLocaleData(Te.value,i.value)),s=k(()=>se.resolvePageFrontmatter(ge.value)),l=k(()=>se.resolvePageHeadTitle(ge.value,o.value)),u=k(()=>se.resolvePageHead(l.value,s.value,o.value)),c=k(()=>se.resolvePageLang(ge.value)),f=k(()=>se.resolvePageLayout(ge.value,r.value));return e.provide(Dr,r),e.provide(da,s),e.provide(Hr,l),e.provide(ma,u),e.provide(va,c),e.provide(pa,f),e.provide(nn,i),e.provide(ha,o),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get:()=>s.value},$head:{get:()=>u.value},$headTitle:{get:()=>l.value},$lang:{get:()=>c.value},$page:{get:()=>ge.value},$routeLocale:{get:()=>i.value},$site:{get:()=>Te.value},$siteLocale:{get:()=>o.value},$withBase:{get:()=>ya}}),{layouts:r,pageData:ge,pageFrontmatter:s,pageHead:u,pageHeadTitle:l,pageLang:c,pageLayout:f,routeLocale:i,siteData:Te,siteLocaleData:o}},Rl=()=>{const e=jr(),t=Br(),n=Z([]),a=()=>{e.value.forEach(i=>{const o=Dl(i);o&&n.value.push(o)})},r=()=>{document.documentElement.lang=t.value,n.value.forEach(i=>{i.parentNode===document.head&&document.head.removeChild(i)}),n.value.splice(0,n.value.length),e.value.forEach(i=>{const o=Fl(i);o!==null&&(document.head.appendChild(o),n.value.push(o))})};ia(Vr,r),_t(()=>{a(),r(),We(()=>e.value,()=>r())})},Dl=([e,t,n=""])=>{const a=Object.entries(t).map(([s,l])=>le(l)?`[${s}=${JSON.stringify(l)}]`:l===!0?`[${s}]`:"").join(""),r=`head > ${e}${a}`;return Array.from(document.querySelectorAll(r)).find(s=>s.innerText===n)||null},Fl=([e,t,n])=>{if(!le(e))return null;const a=document.createElement(e);return sa(t)&&Object.entries(t).forEach(([r,i])=>{le(i)?a.setAttribute(r,i):i===!0&&a.setAttribute(r,"")}),le(n)&&a.appendChild(document.createTextNode(n)),a},jl=Tr,Hl=async()=>{var n;const e=jl({name:"VuepressApp",setup(){var a;Rl();for(const r of dt)(a=r.setup)==null||a.call(r);return()=>[U(Nr),...dt.flatMap(({rootComponents:r=[]})=>r.map(i=>U(i)))]}}),t=zl();$l(e),Ml(e,t,dt);for(const a of dt)await((n=a.enhance)==null?void 0:n.call(a,{app:e,router:t,siteData:Te}));return e.use(t),{app:e,router:t}};Hl().then(({app:e,router:t})=>{t.isReady().then(()=>{e.mount("#app")})});export{Hl as createVueApp,Et as u};
