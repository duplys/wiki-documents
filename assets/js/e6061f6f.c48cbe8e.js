"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[72462],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,h=s["".concat(l,".").concat(m)]||s[m]||d[m]||c;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<c;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10679:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const c={description:"4-inch Touch Screen",title:"4-inch Touch Screen",keywords:["SenseCAP Indicator ESP32 Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/SenseCAP_Indicator_ESP32_4_inch_Touch_Screen",last_update:{date:"3/3/2024",author:"DuKaiyin"}},i="**4\u82f1\u5bf8\u89e6\u6478\u5c4f**",o={unversionedId:"zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32S3/cn-Four-inch_Touch_Screen",id:"zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32S3/cn-Four-inch_Touch_Screen",title:"4-inch Touch Screen",description:"4-inch Touch Screen",source:"@site/docs/zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32S3/cn-Four-inch_Touch_Screen.md",sourceDirName:"zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32S3",slug:"/cn/SenseCAP_Indicator_ESP32_4_inch_Touch_Screen",permalink:"/cn/SenseCAP_Indicator_ESP32_4_inch_Touch_Screen",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32S3/cn-Four-inch_Touch_Screen.md",tags:[],version:"current",lastUpdatedBy:"DuKaiyin",lastUpdatedAt:1709424e3,formattedLastUpdatedAt:"Mar 3, 2024",frontMatter:{description:"4-inch Touch Screen",title:"4-inch Touch Screen",keywords:["SenseCAP Indicator ESP32 Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/SenseCAP_Indicator_ESP32_4_inch_Touch_Screen",last_update:{date:"3/3/2024",author:"DuKaiyin"}}},l={},p=[],u={toc:p},s="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"4\u82f1\u5bf8\u89e6\u6478\u5c4f"},(0,a.kt)("strong",{parentName:"h1"},"4\u82f1\u5bf8\u89e6\u6478\u5c4f")),(0,a.kt)("p",null,"SenseCAP Indicator \u914d\u5907\u4e86\u4e00\u57574\u82f1\u5bf8\u89e6\u6478\u5c4f\uff0c\u53ef\u4ee5\u5b9a\u5236\u6240\u9700\u7684\u7528\u6237\u754c\u9762\uff08UI\uff09\u3002\n\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u5c06\u6307\u5bfc\u60a8\u5982\u4f55\u4f7f\u7528 SenseCAP Indicator \u7684 LvGL\uff08\u8f7b\u91cf\u7ea7\u901a\u7528\u56fe\u5f62\u5e93\uff09\u56fe\u5f62\u5e93\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u50cf\u7d20\u5750\u6807\u7cfb\u7edf")),(0,a.kt)("p",null,"\u6570\u5b572D\u56fe\u50cf\u7531\u50cf\u7d20\u7684\u884c\u548c\u5217\u7ec4\u6210\u3002\u56fe\u50cf\u4e2d\u7684\u50cf\u7d20\u7531\u6307\u5b9a\u5176\u6240\u5728\u5217\u548c\u884c\u7684\u4f4d\u7f6e\u6765\u8868\u793a\u3002\u7b80\u5355\u6765\u8bf4\uff0c\u4e00\u4e2a\u50cf\u7d20\u53ef\u4ee5\u7531\u4e00\u5bf9\u6574\u6570\u6765\u6807\u8bc6\uff0c\u63d0\u4f9b\u4e86\u5217\u53f7\u548c\u884c\u53f7\u3002"),(0,a.kt)("p",null,"\u6309\u7167\u60ef\u4f8b\uff0c\u5217\u53f7\u4ece\u5de6\u4e0a\u89d2\u5230\u53f3\u8fb9\u7f16\u53f7\uff0c\u4ece\u96f6\u5f00\u59cb\uff0c\u4f46\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4e5f\u53ef\u4ee5\u4ece\u5176\u4ed6\u89d2\u5f00\u59cb\uff08\u901a\u8fc7\u8bbe\u7f6e\u65cb\u8f6c\uff09\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"16\u4f4d\u989c\u8272\u6a21\u578b"),"\n\u50cf\u7d20\u4e5f\u4ee5\u989c\u8272\u5f62\u5f0f\u8868\u793a\uff0c\u56e0\u6b64\u6700\u597d\u4e86\u89e3\u4e00\u4e9b\u989c\u8272\u6a21\u578b\u300216\u4f4d\u989c\u8272\u6a21\u578b\u5bf9\u4e8eMCU\u7684\u5de5\u4f5c\u975e\u5e38\u6709\u7528\uff0c\u6240\u4ee5\u8fd9\u662f\u4e00\u4e2a\u4e0d\u9519\u7684\u8d77\u70b9\u3002\u989c\u8272\u6a21\u578b\u5305\u62ec3\u4e2a\u989c\u8272\u7ec4\u4ef6 - \u7ea2\u8272\u3001\u7eff\u8272\u548c\u84dd\u8272\u3002\u6839\u636e\u989c\u8272\u6a21\u578b\uff0c\u8fd93\u4e2a\u989c\u8272\u7ec4\u4ef6\u5c06\u88ab\u5b58\u50a8\u572816\u4f4d\u53d8\u91cf\u4e2d\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Bit"),(0,a.kt)("th",{parentName:"tr",align:"center"},"15"),(0,a.kt)("th",{parentName:"tr",align:"center"},"14"),(0,a.kt)("th",{parentName:"tr",align:"center"},"13"),(0,a.kt)("th",{parentName:"tr",align:"center"},"12"),(0,a.kt)("th",{parentName:"tr",align:"center"},"11"),(0,a.kt)("th",{parentName:"tr",align:"center"},"10"),(0,a.kt)("th",{parentName:"tr",align:"center"},"9"),(0,a.kt)("th",{parentName:"tr",align:"center"},"8"),(0,a.kt)("th",{parentName:"tr",align:"center"},"7"),(0,a.kt)("th",{parentName:"tr",align:"center"},"6"),(0,a.kt)("th",{parentName:"tr",align:"center"},"5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"4"),(0,a.kt)("th",{parentName:"tr",align:"center"},"3"),(0,a.kt)("th",{parentName:"tr",align:"center"},"2"),(0,a.kt)("th",{parentName:"tr",align:"center"},"1"),(0,a.kt)("th",{parentName:"tr",align:"center"},"0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Data")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Red"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Red"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Red"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Red"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Red"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Green"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Green"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Green"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Green"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Green"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Green"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Blue"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Blue"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Blue"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Blue"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Blue")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"LCD\u5c4f\u5e55\u521d\u59cb\u5316")),(0,a.kt)("p",null,"\u8981\u521d\u59cb\u5316SenseCAP Indicator\u4e0a\u7684LCD\u5c4f\u5e55\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"lcd init:\nbsp_board_init()\n")),(0,a.kt)("h1",{id:"\u6280\u672f\u652f\u6301"},(0,a.kt)("strong",{parentName:"h1"},"\u6280\u672f\u652f\u6301")),(0,a.kt)("p",null,"   \u522b\u62c5\u5fc3\uff0c\u6211\u4eec\u4e3a\u60a8\u63d0\u4f9b\u4e86\u652f\u6301\uff01\u8bf7\u8bbf\u95ee\u6211\u4eec\u7684",(0,a.kt)("a",{parentName:"p",href:"https://discord.com/invite/QqMgVwHT3X"},"Seeed\u5b98\u65b9Discord\u9891\u9053"),"\u63d0\u51fa\u60a8\u7684\u95ee\u9898\uff01"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u6709\u5927\u91cf\u8ba2\u5355\u6216\u5b9a\u5236\u9700\u6c42\uff0c\u8bf7\u8054\u7cfb ",(0,a.kt)("a",{parentName:"p",href:"mailto:iot@seeed.cc"},"iot@seeed.cc")))}d.isMDXComponent=!0}}]);