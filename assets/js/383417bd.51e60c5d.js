(self.webpackChunk_reskript_site=self.webpackChunk_reskript_site||[]).push([[684],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>d,kt:()=>u});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=l(t),u=a,v=s["".concat(c,".").concat(u)]||s[u]||m[u]||o;return t?r.createElement(v,i(i({ref:n},d),{},{components:t})):r.createElement(v,i({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=s;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},4931:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>p,contentTitle:()=>c,metadata:()=>l,toc:()=>d,default:()=>s});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i=["components"],p={title:"\u7ba1\u7406\u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf"},c=void 0,l={unversionedId:"advanced/custom-env",id:"advanced/custom-env",isDocsHomePage:!1,title:"\u7ba1\u7406\u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf",description:"reSKRipt\u5141\u8bb8\u4f7f\u7528.env*\u6587\u4ef6\u7ba1\u7406\u81ea\u5b9a\u4e49\u7684\u73af\u5883\u53d8\u91cf\u3002",source:"@site/docs/advanced/custom-env.md",sourceDirName:"advanced",slug:"/advanced/custom-env",permalink:"/reskript/docs/advanced/custom-env",version:"current",frontMatter:{title:"\u7ba1\u7406\u81ea\u5b9a\u4e49\u73af\u5883\u53d8\u91cf"},sidebar:"docs",previous:{title:"\u521d\u59cb\u5316\u9879\u76ee",permalink:"/reskript/docs/cli/init"},next:{title:"\u989d\u5916\u7684\u7f16\u7801\u89c4\u8303",permalink:"/reskript/docs/advanced/lint-rules"}},d=[{value:"\u73af\u5883\u53d8\u91cf\u6587\u4ef6",id:"\u73af\u5883\u53d8\u91cf\u6587\u4ef6",children:[]},{value:"\u73af\u5883\u53d8\u91cf\u5c55\u5f00",id:"\u73af\u5883\u53d8\u91cf\u5c55\u5f00",children:[]}],m={toc:d};function s(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"reSKRipt"),"\u5141\u8bb8\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},".env*"),"\u6587\u4ef6\u7ba1\u7406\u81ea\u5b9a\u4e49\u7684\u73af\u5883\u53d8\u91cf\u3002"),(0,o.kt)("h2",{id:"\u73af\u5883\u53d8\u91cf\u6587\u4ef6"},"\u73af\u5883\u53d8\u91cf\u6587\u4ef6"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"reSKRipt"),"\u4f1a\u4f7f\u7528\u4ee5\u4e0b\u987a\u5e8f\u4f9d\u6b21\u52a0\u8f7d\u73af\u5883\u53d8\u91cf\u6587\u4ef6\uff0c\u5176\u4e2d",(0,o.kt)("inlineCode",{parentName:"p"},"{mode}"),"\u90e8\u5206\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"--mode"),"\u53c2\u6570\u5bf9\u5e94\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"development"),"\u6216",(0,o.kt)("inlineCode",{parentName:"p"},"production"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},".env\n.env.{mode}\n.env.local\n.env.{mode}.local\n")),(0,o.kt)("p",null,"\u5982\u679c\u5f53\u524d\u9879\u76ee\u662f\u4e00\u4e2amonorepo\uff0c\u5219\u4f1a\u989d\u5916\u518d\u8bfb\u53d6\u4ed3\u5e93\u6839\u76ee\u5f55\u4e0b\u7684\u76f8\u5173\u6587\u4ef6\uff0c\u987a\u5e8f\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/.env\n/.env.{mode}\n/.env.local\n/.env.{mode}.local\n/packages/{package}/.env\n/packages/{package}/.env.{mode}\n/packages/{package}/.env.local\n/packages/{package}/.env.{mode}.local\n")),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u4e0d\u8981\u5728",(0,o.kt)("inlineCode",{parentName:"p"},".env.*"),"\u6587\u4ef6\u4e2d\u653e\u7f6e\u4efb\u4f55\u654f\u611f\u4fe1\u606f\uff0c\u4e0d\u8981\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},".env.*.local"),"\u6587\u4ef6\u63d0\u4ea4\u5230\u8fdc\u7a0b\u4ed3\u5e93\u4e2d\u3002"))),(0,o.kt)("h2",{id:"\u73af\u5883\u53d8\u91cf\u5c55\u5f00"},"\u73af\u5883\u53d8\u91cf\u5c55\u5f00"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"reSKRipt"),"\u4f7f\u7528",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/dotenv-expand"},"dotenv-expand"),"\u5c55\u5f00\u73af\u5883\u53d8\u91cf\uff0c\u5982\u4f60\u5728",(0,o.kt)("inlineCode",{parentName:"p"},".env"),"\u4e2d\u6709\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"API_BASE_UEL=/api\nCANARY_API_BASE_URL=$API_BASE_URL/canary\n")),(0,o.kt)("p",null,"\u5219\u6700\u7ec8",(0,o.kt)("inlineCode",{parentName:"p"},"CANARY_API_BASE_URL"),"\u7684\u503c\u4f1a\u53d8\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"/api/canary"),"\u3002"))}s.isMDXComponent=!0}}]);