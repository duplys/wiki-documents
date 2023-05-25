"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[80457],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},P=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(n),P=o,m=p["".concat(u,".").concat(P)]||p[P]||d[P]||a;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=P;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}P.displayName="MDXCreateElement"},40853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={description:"HTTP API Quickstart",title:"HTTP API Quickstart",keywords:["HTTP API"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"1/13/2023",author:"shuxu hu"}},s=void 0,i={unversionedId:"Cloud_Chain/SenseCAP_API/HTTP_API/Quick_Start",id:"Cloud_Chain/SenseCAP_API/HTTP_API/Quick_Start",title:"HTTP API Quickstart",description:"HTTP API Quickstart",source:"@site/docs/Cloud_Chain/SenseCAP_API/HTTP_API/Quick_Start.md",sourceDirName:"Cloud_Chain/SenseCAP_API/HTTP_API",slug:"/Cloud_Chain/SenseCAP_API/HTTP_API/Quick_Start",permalink:"/Cloud_Chain/SenseCAP_API/HTTP_API/Quick_Start",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Cloud_Chain/SenseCAP_API/HTTP_API/Quick_Start.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"HTTP API Quickstart",title:"HTTP API Quickstart",keywords:["HTTP API"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"SenseCAP API Pricing",permalink:"/Cloud_Chain/SenseCAP_API/API_pricing"},next:{title:"HTTP API Access Guide",permalink:"/Cloud_Chain/SenseCAP_API/HTTP_API/HTTP_API_Access_Guide"}},u={},c=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Get an Access Key",id:"get-an-access-key",level:2},{value:"Get all the Device Groups",id:"get-all-the-device-groups",level:2},{value:"Tech Support &amp; Product Descussion",id:"tech-support--product-descussion",level:2}],l={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("p",null,"  if you do not have an account, please register for the SenseCAP Portal."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sensecap.seeed.cn"},"China Station")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://sensecap.seeed.cc"},"China Station"))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"   LoRaWAN devices are used with Global Station")),(0,o.kt)("h2",{id:"get-an-access-key"},"Get an Access Key"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Login the SenseCAP Portal."),(0,o.kt)("li",{parentName:"ol"},"Navigate to \u201cSecurity/Access API keys\u201d"),(0,o.kt)("li",{parentName:"ol"},"Click \u201cCreate Access Key\u201d"),(0,o.kt)("li",{parentName:"ol"},"Click \u201cAPI ID\u201d, and get the \u201cAPI ID\u201d and \u201cAccess API keys\u201d after entering the password.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_API/1.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_API/2.png",alt:null})),(0,o.kt)("h2",{id:"get-all-the-device-groups"},"Get all the Device Groups"),(0,o.kt)("p",null,"Use curl to make an HTTP request.The following example calls the API to get all the Device Groups under the account."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"username = API ID"),(0,o.kt)("li",{parentName:"ul"},"password = Access API keys")),(0,o.kt)("p",null,'curl --user "username":"password" \\\n',(0,o.kt)("a",{parentName:"p",href:"https://sensecap.seeed.cc/openapi/list_groups"},"https://sensecap.seeed.cc/openapi/list_groups")),(0,o.kt)("p",null,"You should replace and with the one you got before. The command will output like the following"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'{\n    "code": "0",\n    "data": [\n        {\n            "group_name": "Default",\n            "group_uuid": ""\n        },\n        {\n            "group_name": "test group",\n            "group_uuid": "80523B280630E611"\n        },\n        {\n            "group_name": "demo",\n            "group_uuid": "EBAD5387C4FC8711"\n        }\n    ]\n}\n')),(0,o.kt)("h2",{id:"tech-support--product-descussion"},"Tech Support & Product Descussion"),(0,o.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);