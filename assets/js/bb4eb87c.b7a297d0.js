(self.webpackChunk_reskript_site=self.webpackChunk_reskript_site||[]).push([[1498],{3905:(e,r,t)=>{"use strict";t.d(r,{Zo:()=>l,kt:()=>v});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(t),v=a,u=m["".concat(s,".").concat(v)]||m[v]||d[v]||i;return t?n.createElement(u,o(o({ref:r},l),{},{components:t})):n.createElement(u,o({ref:r},l))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6811:(e,r,t)=>{"use strict";t.r(r),t.d(r,{frontMatter:()=>c,contentTitle:()=>s,metadata:()=>p,toc:()=>l,default:()=>m});var n=t(2122),a=t(9756),i=(t(7294),t(3905)),o=["components"],c={title:"\u6784\u5efaService Worker"},s=void 0,p={unversionedId:"advanced/service-worker",id:"advanced/service-worker",isDocsHomePage:!1,title:"\u6784\u5efaService Worker",description:"Service Worker\u53ef\u4ee5\u534f\u52a9\u4f60\u63d0\u4f9b\u4e30\u5bcc\u7684\u79bb\u7ebf\u4f53\u9a8c\uff0creSKRipt\u540c\u6837\u652f\u6301\u7b80\u5355\u5730\u6784\u5efaService Worker\u3002",source:"@site/docs/advanced/service-worker.md",sourceDirName:"advanced",slug:"/advanced/service-worker",permalink:"/reskript/docs/advanced/service-worker",version:"current",frontMatter:{title:"\u6784\u5efaService Worker"},sidebar:"docs",previous:{title:"\u989d\u5916\u7684\u7f16\u7801\u89c4\u8303",permalink:"/reskript/docs/advanced/lint-rules"},next:{title:"\u914d\u7f6e\u89e3\u5bc6",permalink:"/reskript/docs/advanced/config-insiders"}},l=[{value:"\u65e0\u9700\u6ce8\u518c",id:"\u65e0\u9700\u6ce8\u518c",children:[]},{value:"\u81ea\u52a8\u6ce8\u5165\u8d44\u6e90\u7f13\u5b58",id:"\u81ea\u52a8\u6ce8\u5165\u8d44\u6e90\u7f13\u5b58",children:[]}],d={toc:l};function m(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/web/fundamentals/primers/service-workers"},"Service Worker"),"\u53ef\u4ee5\u534f\u52a9\u4f60\u63d0\u4f9b\u4e30\u5bcc\u7684\u79bb\u7ebf\u4f53\u9a8c\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"reSKRipt"),"\u540c\u6837\u652f\u6301\u7b80\u5355\u5730\u6784\u5efaService Worker\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u9700\u8981\u6784\u5efa\u4e00\u4e2aService Worker\uff0c\u53ea\u9700\u653e\u7f6e\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"src/service-worker.js"),"\u6587\u4ef6\u3002"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5f53\u524d\u4ec5\u652f\u6301",(0,i.kt)("inlineCode",{parentName:"p"},".js"),"\u540e\u7f00\uff0c\u4e0d\u652f\u6301",(0,i.kt)("inlineCode",{parentName:"p"},".ts"),"\u7b49\u5176\u5b83\u683c\u5f0f\u3002"))),(0,i.kt)("h2",{id:"\u65e0\u9700\u6ce8\u518c"},"\u65e0\u9700\u6ce8\u518c"),(0,i.kt)("p",null,"\u8be5\u6587\u4ef6\u5728\u6784\u5efa\u540e\u4f1a\u751f\u6210",(0,i.kt)("inlineCode",{parentName:"p"},"dist/assets/service-worker-{target}.js"),"\uff0c\u5982",(0,i.kt)("inlineCode",{parentName:"p"},"dist/assets/service-worker-stable.js"),"\u3002\u901a\u5e38\u4f60\u4e0d\u9700\u8981\u505a\u4efb\u4f55\u989d\u5916\u7684\u5de5\u4f5c\uff0c",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"reSKRipt"),"\u4f1a\u81ea\u52a8\u5e2e\u4f60\u5728HTML\u9875\u9762\u4e2d\u751f\u6210\u4e00\u6bb5\u6ce8\u518c\u8be5Service Worker\u7684\u811a\u672c"),"\uff0c\u5927\u81f4\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<script>\nif ('serviceWorker' in navigator) {\n    window.addEventListener(\n        'load',\n        function () {\n            navigator.serviceWorker.register('/assets/service-worker-insiders.js');\n        }\n    );\n}\n<\/script>\n")),(0,i.kt)("p",null,"\u5bf9\u5e94\u7684Service Worker\u811a\u672c\u8def\u5f84\u4f1a\u81ea\u52a8\u6839\u636e\u6784\u5efa\u73af\u5883\u751f\u6210\uff0c\u4f60\u4e0d\u9700\u8981\u5173\u5fc3\u5176\u4e2d\u7684\u7ec6\u8282\u3002"),(0,i.kt)("h2",{id:"\u81ea\u52a8\u6ce8\u5165\u8d44\u6e90\u7f13\u5b58"},"\u81ea\u52a8\u6ce8\u5165\u8d44\u6e90\u7f13\u5b58"),(0,i.kt)("p",null,"\u6211\u4eec\u63a8\u8350\u4f60\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"src/service-worker.js"),"\u4e2d\u653e\u7f6e\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"// TODO: \u4fee\u6539\u7248\u672c\u5230\u6700\u65b0\uff0c\u7528npm info workbox-cdn version\u53ef\u83b7\u53d6\u6700\u65b0\u7248\u672c\nconst CDN_URL_BASE = 'https://code.bdstatic.com/npm/workbox-cdn@5.1.4/workbox';\nimportScripts(`${CDN_URL_BASE}/workbox-sw.js`);\nworkbox.setConfig({debug: false, modulePathPrefix: `${CDN_URL_BASE}/`});\n\nconst {precacheAndRoute} = workbox.precaching;\nprecacheAndRoute(self.__WB_MANIFEST);\n")),(0,i.kt)("p",null,"\u6ce8\u610f\u4e0a\u9762\u4ee3\u7801\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"precacheAndRoute(self.__WB_MANIFEST)"),"\u90e8\u5206\uff0c\u5176\u4e2d\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"self.__WB_MANIFEST"),"\u4f1a\u88ab\u66ff\u6362\u4e3a\u4e00\u7cfb\u5217\u6784\u5efa\u4ea7\u51fa\u7684\u8d44\u6e90\u8def\u5f84\uff0c\u56e0\u6b64\u4f60\u53ea\u9700\u8981\u4e0a\u9762\u7684\u4ee3\u7801\uff0c\u5c31\u53ef\u4ee5\u81ea\u52a8\u5b8c\u6210\u5404\u4e2a\u8d44\u6e90\u7684\u9884\u7f13\u5b58\uff0c\u5feb\u901f\u751f\u6210\u4e00\u4e2aService Worker\u7684\u5b9e\u73b0\u3002"))}m.isMDXComponent=!0}}]);