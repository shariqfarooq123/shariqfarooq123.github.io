import{B as _,u as w,m as Q,C as k,D as L,E as z,G as W,j,H as D,h as F,t as G,o as m,a as H,b as S,f as M,z as R,c as h,T as U,y as V,s as $,I as J,J as K,p as q}from"./entry.a8eba8d5.js";/* empty css                      */var b;const y=typeof window<"u",X=e=>typeof e=="string",Y=()=>{};y&&((b=window==null?void 0:window.navigator)==null?void 0:b.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function C(e){return typeof e=="function"?e():w(e)}function Z(e){return e}function B(e){return z()?(W(e),!0):!1}function ee(e,t=!0){Q()?k(e):t?e():L(e)}function te(e,t,n={}){const{immediate:a=!0}=n,o=_(!1);let r=null;function p(){r&&(clearTimeout(r),r=null)}function c(){o.value=!1,p()}function l(...i){p(),o.value=!0,r=setTimeout(()=>{o.value=!1,r=null,e(...i)},C(t))}return a&&(o.value=!0,y&&l()),B(c),{isPending:o,start:l,stop:c}}function ne(e){var t;const n=C(e);return(t=n==null?void 0:n.$el)!=null?t:n}const oe=y?window:void 0;y&&window.document;const ae=y?window.navigator:void 0;y&&window.location;function se(...e){let t,n,a,o;if(X(e[0])||Array.isArray(e[0])?([n,a,o]=e,t=oe):[t,n,a,o]=e,!t)return Y;Array.isArray(n)||(n=[n]),Array.isArray(a)||(a=[a]);const r=[],p=()=>{r.forEach(s=>s()),r.length=0},c=(s,f,v)=>(s.addEventListener(f,v,o),()=>s.removeEventListener(f,v,o)),l=D(()=>ne(t),s=>{p(),s&&r.push(...n.flatMap(f=>a.map(v=>c(s,f,v))))},{immediate:!0,flush:"post"}),i=()=>{l(),p()};return B(i),i}function ue(e,t=!1){const n=_(),a=()=>n.value=Boolean(e());return a(),ee(a,t),n}function re(e={}){const{navigator:t=ae,read:n=!1,source:a,copiedDuring:o=1500,legacy:r=!1}=e,p=["copy","cut"],c=ue(()=>t&&"clipboard"in t),l=j(()=>c.value||r),i=_(""),s=_(!1),f=te(()=>s.value=!1,o);function v(){c.value?t.clipboard.readText().then(u=>{i.value=u}):i.value=N()}if(l.value&&n)for(const u of p)se(u,v);async function P(u=C(a)){l.value&&u!=null&&(c.value?await t.clipboard.writeText(u):A(u),i.value=u,s.value=!0,f.start())}function A(u){const d=document.createElement("textarea");d.value=u!=null?u:"",d.style.position="absolute",d.style.opacity="0",document.body.appendChild(d),d.select(),document.execCommand("copy"),d.remove()}function N(){var u,d,I;return(I=(d=(u=document==null?void 0:document.getSelection)==null?void 0:u.call(document))==null?void 0:d.toString())!=null?I:""}return{isSupported:l,text:i,copied:s,copy:P}}const O=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g="__vueuse_ssr_handlers__";O[g]=O[g]||{};O[g];var T;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(T||(T={}));var ie=Object.defineProperty,E=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable,x=(e,t,n)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,pe=(e,t)=>{for(var n in t||(t={}))ce.call(t,n)&&x(e,n,t[n]);if(E)for(var n of E(t))le.call(t,n)&&x(e,n,t[n]);return e};const de={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};pe({linear:Z},de);const fe=e=>(J("data-v-5fa3121e"),e=e(),K(),e),ve=fe(()=>S("span",{class:"sr-only"},"Copy to clipboard",-1)),ye={class:"icon-wrapper"},_e=F({__name:"ProseCodeCopyButton",props:{content:{type:String,default:""},show:{type:Boolean,default:!1}},setup(e){const t=e,{copy:n}=re(),{prose:a}=G(),o=_("init"),r=p=>{n(t.content).then(()=>{o.value="copied",setTimeout(()=>{o.value="init"},1e3)}).catch(c=>{console.warn("Couldn't copy to clipboard!",c)})};return(p,c)=>{const l=$;return m(),H("button",{class:V([(e.show||o.value==="copied")&&"show"]),onClick:r},[ve,S("span",ye,[M(U,{name:"fade"},{default:R(()=>{var i,s;return[o.value==="copied"?(m(),h(l,{key:0,name:(i=w(a).copyButton)==null?void 0:i.iconCopied,size:"18",class:"copied"},null,8,["name"])):(m(),h(l,{key:1,name:(s=w(a).copyButton)==null?void 0:s.iconCopy,size:"18"},null,8,["name"]))]}),_:1})])],2)}}}),Oe=q(_e,[["__scopeId","data-v-5fa3121e"]]);export{Oe as default};
