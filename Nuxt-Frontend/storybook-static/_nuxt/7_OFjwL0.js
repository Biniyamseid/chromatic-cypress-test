const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DhAJujbj.js","./CSBqTisc.js","./DlAUqK2U.js","./Dp5ZG7rL.js","./TZLzuUNJ.js","./ClhkJfVD.js","./kSjqG4HC.js","./cUfzpFyX.js","./CJm9ZGec.js","./B4rT1Usr.js","./Djjdvgwa.js","./Gkaz0fAM.js","./Bxx9GC6x.js","./BjIoD5Uw.js","./appalert.BOwuRTAQ.css","./0Pf03w35.js","./CEPo2jL_.js","./MyNuxtWelcome.BmoGwyne.css","./CPjqF2UX.js","./B-ws-2C8.js","./wMRqfDx9.js","./C-g054PT.js","./Di-_ys6Z.js","./HzZks5Dn.js","./CWEnrWvu.js","./BymqxPvO.js","./BwGkAF9Z.js","./CiIaOtne.js","./NNA4fIpj.js","./UOj2gYDH.js","./DjFkB5oO.js","./D_0K7-gR.js","./CJGBLHtc.js","./index.DKiPELbC.css","./D26IHGGC.js","./9_F1Rvr6.js","./DUyQatl_.js","./BdDRuGml.js","./RLDZ7r-h.js","./i39XpuQg.js","./fSnlMOUF.js","./preview.joDAozTz.css","./C9Izl27f.js","./D-8MO0q_.js","./c9QP_2_z.js","./DrFu-skq.js","./B9EE2a0O.js"])))=>i.map(i=>d[i]);
import"../sb-preview/runtime.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&m(i)}).observe(document,{childList:!0,subtree:!0});function c(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function m(r){if(r.ep)return;r.ep=!0;const o=c(r);fetch(r.href,o)}})();const R="modulepreload",T=function(e,s){return new URL(e,s).href},d={},t=function(s,c,m){let r=Promise.resolve();if(c&&c.length>0){const i=document.getElementsByTagName("link"),_=document.querySelector("meta[property=csp-nonce]"),O=(_==null?void 0:_.nonce)||(_==null?void 0:_.getAttribute("nonce"));r=Promise.allSettled(c.map(n=>{if(n=T(n,m),n in d)return;d[n]=!0;const u=n.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(!!m)for(let l=i.length-1;l>=0;l--){const E=i[l];if(E.href===n&&(!u||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${f}`))return;const a=document.createElement("link");if(a.rel=u?"stylesheet":R,u||(a.as="script"),a.crossOrigin="",a.href=n,O&&a.setAttribute("nonce",O),document.head.appendChild(a),u)return new Promise((l,E)=>{a.addEventListener("load",l),a.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${n}`)))})}))}function o(i){const _=new Event("vite:preloadError",{cancelable:!0});if(_.payload=i,window.dispatchEvent(_),!_.defaultPrevented)throw i}return r.then(i=>{for(const _ of i||[])_.status==="rejected"&&o(_.reason);return s().catch(o)})},{createBrowserChannel:L}=__STORYBOOK_MODULE_CHANNELS__,{addons:P}=__STORYBOOK_MODULE_PREVIEW_API__,p=L({page:"preview"});P.setChannel(p);window.__STORYBOOK_ADDONS_CHANNEL__=p;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=p);const y={"./stories/BaseFooter.stories.ts":async()=>t(()=>import("./DhAJujbj.js"),__vite__mapDeps([0,1,2,3]),import.meta.url),"./stories/BaseHeader.stories.ts":async()=>t(()=>import("./TZLzuUNJ.js"),__vite__mapDeps([4,5,6,3,7,8,9,10,11,12,13,2,14,15]),import.meta.url),"./stories/MyNuxtWelcome.stories.ts":async()=>t(()=>import("./CEPo2jL_.js"),__vite__mapDeps([16,2,3,17]),import.meta.url),"./stories/PageDescription.stories.ts":async()=>t(()=>import("./CPjqF2UX.js"),__vite__mapDeps([18,5,6,3,7,8,9,10,11,12,13,2,14,15]),import.meta.url),"./stories/TableBodyCell.stories.ts":async()=>t(()=>import("./B-ws-2C8.js"),__vite__mapDeps([19,20,2,3]),import.meta.url),"./stories/TableHeader.stories.ts":async()=>t(()=>import("./C-g054PT.js"),__vite__mapDeps([21,22,2,3]),import.meta.url),"./stories/account.stories.ts":async()=>t(()=>import("./HzZks5Dn.js"),__vite__mapDeps([23,24,25,3,8,7]),import.meta.url),"./stories/admin.stories.ts":async()=>t(()=>import("./BwGkAF9Z.js"),__vite__mapDeps([26,27,25,3,22,2,20,7,28,10,9,8]),import.meta.url),"./stories/guest.stories.ts":async()=>t(()=>import("./UOj2gYDH.js"),__vite__mapDeps([29,30,25,3,8,7]),import.meta.url),"./stories/index.stories.ts":async()=>t(()=>import("./D_0K7-gR.js"),__vite__mapDeps([31,32,25,3,12,13,2,14,15,10,7,11,8,33]),import.meta.url),"./stories/login.stories.ts":async()=>t(()=>import("./D26IHGGC.js"),__vite__mapDeps([34,15,13,3,10,7]),import.meta.url),"./stories/register.stories.ts":async()=>t(()=>import("./9_F1Rvr6.js"),__vite__mapDeps([35,36,13,3]),import.meta.url)};async function I(e){return y[e]()}const{composeConfigs:D,PreviewWeb:V,ClientApi:g}=__STORYBOOK_MODULE_PREVIEW_API__,v=async(e=[])=>{const s=await Promise.all([e.at(0)??t(()=>import("./BdDRuGml.js").then(c=>c.a),__vite__mapDeps([37,13,3]),import.meta.url),e.at(1)??t(()=>import("./RLDZ7r-h.js"),__vite__mapDeps([38,39,3]),import.meta.url),e.at(2)??t(()=>import("./fSnlMOUF.js"),__vite__mapDeps([40,37,13,3,7,11,10,28,6,8,9,41]),import.meta.url),e.at(3)??t(()=>import("./C9Izl27f.js"),__vite__mapDeps([42,43]),import.meta.url),e.at(4)??t(()=>import("./BYvy8xb3.js"),[],import.meta.url),e.at(5)??t(()=>import("./CmMhD2I3.js"),[],import.meta.url),e.at(6)??t(()=>import("./c9QP_2_z.js"),__vite__mapDeps([44,45]),import.meta.url),e.at(7)??t(()=>import("./DFmD0pui.js"),[],import.meta.url),e.at(8)??t(()=>import("./CFgKly6U.js"),[],import.meta.url),e.at(9)??t(()=>import("./B9EE2a0O.js"),__vite__mapDeps([46,45]),import.meta.url),e.at(10)??t(()=>import("./DGUiP6tS.js"),[],import.meta.url),e.at(11)??t(()=>import("./0HYH7gGZ.js"),[],import.meta.url),e.at(12)??t(()=>import("./ecOKyxp7.js"),[],import.meta.url)]);return D(s)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new V(I,v);window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;export{t as _};
