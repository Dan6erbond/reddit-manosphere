import{r as e,o as a,c as n,a as t,b as r,w as s,d as o,e as l,F as i,f as c,g as d,h as m}from"./vendor.af42fa43.js";const p={},u={class:"navbar sticky-top navbar-expand-lg navbar-light bg-light"},v={class:"container-fluid"},b=o(" Keeping Track of the Reddit Manosphere "),g=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarContent","aria-controls":"navbarContent","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),h={class:"collapse navbar-collapse",id:"navbarContent"},f={class:"navbar-nav me-auto mb-2 mb-lg-0"},_={class:"nav-item"},E=o(" MGTOW ");p.render=function(o,l){const i=e("router-link");return a(),n("nav",u,[t("div",v,[r(i,{class:"navbar-brand",to:{name:"home"}},{default:s((()=>[b])),_:1}),g,t("div",h,[t("ul",f,[t("li",_,[r(i,{class:"nav-link","active-class":"active","aria-current":"page",to:{name:"mgtow"}},{default:s((()=>[E])),_:1})])])])])])};var k=l({name:"App",components:{Nav:p}});let w;k.render=function(s,o,l,c,d,m){const p=e("Nav"),u=e("router-view");return a(),n(i,null,[r(p),t("main",null,[r(u)])],64)};const y={},L=function(e,a){if(!a||0===a.length)return e();if(void 0===w){const e=document.createElement("link").relList;w=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(a.map((e=>{if((e=`/reddit-manosphere/${e}`)in y)return;y[e]=!0;const a=e.endsWith(".css"),n=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${n}`))return;const t=document.createElement("link");return t.rel=a?"stylesheet":w,a||(t.as="script",t.crossOrigin=""),t.href=e,document.head.appendChild(t),a?new Promise(((e,a)=>{t.addEventListener("load",e),t.addEventListener("error",a)})):void 0}))).then((()=>e()))},T=[{path:"/",name:"home",component:()=>L((()=>import("./index.07d25cc8.js")),["assets/index.07d25cc8.js","assets/vendor.af42fa43.js"])},{path:"/mgtow",name:"mgtow",component:()=>L((()=>import("./index.b46b4cb7.js")),["assets/index.b46b4cb7.js","assets/vendor.af42fa43.js"])}],x=c({history:d(),routes:T}),C=m(k);C.use(x),C.mount("#app");
