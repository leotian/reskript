(self.webpackChunk_reskript_site=self.webpackChunk_reskript_site||[]).push([[748],{3905:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=o,k=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(k,i(i({ref:n},c),{},{components:t})):r.createElement(k,i({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6577:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>c,default:()=>m});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i=["components"],l={title:"\u989d\u5916\u7684\u7f16\u7801\u89c4\u8303"},s=void 0,p={unversionedId:"advanced/lint-rules",id:"advanced/lint-rules",isDocsHomePage:!1,title:"\u989d\u5916\u7684\u7f16\u7801\u89c4\u8303",description:"\u9664\u4e86\u6cbf\u7528@ecomfe/eslint-config\u7684\u7f16\u7801\u89c4\u8303\u5916\uff0c\u4e3a\u4e86\u8ba9React\u5e94\u7528\u66f4\u52a0\u53ef\u9760\u3001\u53ef\u8bfb\uff0creSKRipt\u989d\u5916\u5185\u7f6e\u4e86\u51e0\u4e2a\u7f16\u7801\u89c4\u8303\u3002",source:"@site/docs/advanced/lint-rules.md",sourceDirName:"advanced",slug:"/advanced/lint-rules",permalink:"/reskript/docs/advanced/lint-rules",version:"current",frontMatter:{title:"\u989d\u5916\u7684\u7f16\u7801\u89c4\u8303"},sidebar:"docs",previous:{title:"\u521d\u59cb\u5316\u9879\u76ee",permalink:"/reskript/docs/cli/init"},next:{title:"\u6784\u5efaService Worker",permalink:"/reskript/docs/advanced/service-worker"}},c=[{value:"import-order",id:"import-order",children:[]},{value:"no-excessive-hook",id:"no-excessive-hook",children:[]},{value:"hooks-deps-new-line",id:"hooks-deps-new-line",children:[]}],u={toc:c};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u9664\u4e86\u6cbf\u7528",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ecomfe/eslint-config"},"@ecomfe/eslint-config"),"\u7684\u7f16\u7801\u89c4\u8303\u5916\uff0c\u4e3a\u4e86\u8ba9React\u5e94\u7528\u66f4\u52a0\u53ef\u9760\u3001\u53ef\u8bfb\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"reSKRipt"),"\u989d\u5916\u5185\u7f6e\u4e86\u51e0\u4e2a\u7f16\u7801\u89c4\u8303\u3002"),(0,a.kt)("h2",{id:"import-order"},"import-order"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@reskript/import-order"),"\u89c4\u5219\u68c0\u67e5\u4e00\u4e2a\u6587\u4ef6\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"import"),"\u8bed\u53e5\u662f\u5426\u6309\u7167\u88ab\u5f15\u5165\u6a21\u5757\u7684\u5206\u7c7b\u3001\u4f4d\u7f6e\u7b49\u4fe1\u606f\u6392\u5e8f\uff0c\u8981\u6c42\u7684\u987a\u5e8f\u4ece\u524d\u5f80\u540e\u5982\u4e0b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Node\u534f\u8bae\uff0c\u5982",(0,a.kt)("inlineCode",{parentName:"li"},"node:fs"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"node:child_process"),"\u7b49\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5185\u7f6e\u6a21\u5757\uff0c\u5305\u62ec",(0,a.kt)("inlineCode",{parentName:"li"},"fs"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"path"),"\u7b49\uff0c",(0,a.kt)("strong",{parentName:"li"},"\u5bf9\u4e8e\u8fd9\u4e00\u7c7b\u8def\u5f84\uff0c\u63a8\u8350\u4f7f\u7528Node\u534f\u8bae\u5f15\u5165\u3002")),(0,a.kt)("li",{parentName:"ol"},"\u7b2c\u4e09\u65b9\u5305\uff0c\u5373\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"li"},"npm install"),"\u5b89\u88c5\u7684\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"node_modules"),"\u4e0b\u7684\u90e8\u5206\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u53d7\u522b\u540d\u63a7\u5236\u7684\uff0c\u7279\u6307\u4e3a",(0,a.kt)("inlineCode",{parentName:"li"},"@/"),"\u5f00\u5934\u7684\u6a21\u5757\u8def\u5f84\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u76f8\u5bf9\u8def\u5f84\uff0c\u8981\u6c42\u8ddd\u79bb\u4ece\u8fdc\u5230\u8fd1\u6392\u5217\uff0c\u5373",(0,a.kt)("inlineCode",{parentName:"li"},"../../foo"),"\u8981\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"../bar"),"\u524d\u9762\uff0c\u4e24\u90fd\u5747\u8981\u5728",(0,a.kt)("inlineCode",{parentName:"li"},"./utils"),"\u524d\u9762\u3002")),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f",(0,a.kt)("strong",{parentName:"p"},"\u9519\u8bef"),"\u7684\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import utils from '../utils';\nimport {mapBy} from 'lodash';\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import Label from '@/components/Label';\nimport {render} from 'react-dom';\n")),(0,a.kt)("h2",{id:"no-excessive-hook"},"no-excessive-hook"),(0,a.kt)("p",null,"\u8fd9\u6761\u89c4\u5219\u68c0\u6d4b\u4e00\u4e2a\u540d\u79f0\u4e0a\u50cf\u662fhook\u7684\u51fd\u6570\u5e76\u4e0d\u662f\u771f\u6b63\u7684hook\uff0c\u5373\u5b83\u6ca1\u6709\u8c03\u7528\u4efb\u4f55\u5176\u5b83\u5f62\u5f0f\u4e3ahook\u7684\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u8fd9\u6761\u89c4\u5219\u4e3b\u8981\u7528\u6765\u9632\u6b62\u5bf9hook\u7684\u6ee5\u7528\uff0c\u4ee5\u4fbf\u6b63\u786e\u533a\u5206hook\u548c\u5de5\u5177\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f",(0,a.kt)("strong",{parentName:"p"},"\u9519\u8bef"),"\u7684\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// \u6ca1\u6709\u4f7f\u7528\u4efb\u4f55hook\uff0c\u662f\u4e2a\u7eaf\u7cb9\u7684\u5de5\u5177\u51fd\u6570\nconst useJoinedValue = (value: Array<string | null | undefined>[]) => {\n    const hasValueArray = value.filter(v => v !== null);\n    return hasValueArray.join(' | ');\n};\n\n// \u867d\u7136\u548cReact\u7684Suspense\u6982\u5ff5\u7d27\u5bc6\u76f8\u5173\uff0c\u4f46\u4f9d\u7136\u4e0d\u662f\u4e00\u4e2ahook\nconst useScriptSuspense = (src: string) => {\n    const script = document.createElement('script');\n    script.src = src;\n    const executor = (resolve: () => void, reject: () => void) => {\n        script.addEventListener('load', resolve);\n        script.addEventListener('error', reject);\n    };\n    throw new Promise(executor);\n};\n")),(0,a.kt)("h2",{id:"hooks-deps-new-line"},"hooks-deps-new-line"),(0,a.kt)("p",null,"\u8fd9\u6761\u89c4\u5219\u5f3a\u5236\u8981\u6c42\u5728\u8c03\u7528\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"useMemo"),"\u8fd9\u6837\u5e26\u6709\u4f9d\u8d56\u6570\u7ec4\u7684hook\u65f6\uff0c\u4f9d\u8d56\u6570\u7ec4\u5fc5\u987b\u5355\u72ec\u4e00\u884c\u4e66\u5199\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f",(0,a.kt)("strong",{parentName:"p"},"\u9519\u8bef"),"\u7684\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// \u6ca1\u6709\u6e05\u6670\u7684\u6362\u884c\nuseEffect(() => {\n    (async () => {\n        const response = await api.listUsers();\n        setUsers(response);\n    })();\n}, []);\n\n// \u5373\u4fbf\u5168\u5199\u5728\u4e00\u884c\u4e5f\u4e0d\u884c\nconst names = useMemo(() => users.map(u => u.name), [users]);\n")),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f",(0,a.kt)("strong",{parentName:"p"},"\u6b63\u786e"),"\u7684\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"useEffect(\n    () => {\n        (async () => {\n            const response = await api.listUsers();\n            setUsers(response);\n        })();\n    },\n    []\n);\n\nconst names = useMemo(\n    () => users.map(u => u.name),\n    [users]\n);\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\uff1a\u672c\u89c4\u5219\u4e0e",(0,a.kt)("inlineCode",{parentName:"strong"},"prettier"),"\u683c\u5f0f\u5316\u7684\u7ed3\u679c\u53ef\u80fd\u4e0d\u76f8\u7b26\uff0c\u4f46\u672c\u89c4\u5219\u914d\u5408",(0,a.kt)("inlineCode",{parentName:"strong"},"indent"),"\u89c4\u5219\u540e\u52a0",(0,a.kt)("inlineCode",{parentName:"strong"},"--fix"),"\u53ef\u4ee5\u4fee\u590d\u4ee3\u7801\u89c4\u8303\uff0c\u56e0\u6b64\u5982\u679c\u9700\u8981\uff0c\u63a8\u8350\u5728",(0,a.kt)("inlineCode",{parentName:"strong"},"prettier"),"\u540e\u518d\u8dd1",(0,a.kt)("inlineCode",{parentName:"strong"},"skr lint --fix"),"\u3002")))}m.isMDXComponent=!0}}]);