import{o as a,c as n,a as t,n as e,d as r,r as s,b as o,e as l,F as i,h as c,f as v,g as d}from"../../vendor.ed82d7de.js";const u={},b={class:"navbar sticky-top navbar-expand-lg navbar-light bg-light"},g={class:"container-fluid"},p=t("a",{class:"navbar-brand",href:"/"}," Keeping Track of Hate Subreddits ",-1),m=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarContent","aria-controls":"navbarContent","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),f={class:"collapse navbar-collapse",id:"navbarContent"},P={class:"navbar-nav me-auto mb-2 mb-lg-0"},h={class:"nav-item"};u.render=function(r,s){var o,l;return a(),n("nav",b,[t("div",g,[p,m,t("div",f,[t("ul",P,[t("li",h,[t("a",{class:e(["nav-link",{active:r.$urlPathname===(null==(l=null==(o=r.window)?void 0:o.location)?void 0:l.pathname)}]),href:"/mgtow"}," MGTOW ",2)])])])])])};var w=r({name:"App",components:{Nav:u}});w.render=function(e,r,c,v,d,u){const b=s("Nav");return a(),n(i,null,[o(b),t("main",null,[l(e.$slots,"default")])],64)};!async function(){const a=await d();(function(a){const{Page:n,pageProps:t}=a,e=r({render:()=>c(w,{},{default:()=>c(n,t||{})})}),s=v(e);return s.config.globalProperties.$urlPathname=a.urlPathname,s.config.globalProperties.$routeParams=a.routeParams,s})(a).mount("#app")}();
