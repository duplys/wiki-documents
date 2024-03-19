"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[490],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>k});var o=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,o,r=function(e,t){if(null==e)return{};var i,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=o.createContext({}),v=function(e){var t=o.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},d=function(e){var t=v(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=v(i),c=r,k=u["".concat(l,".").concat(c)]||u[c]||p[c]||n;return i?o.createElement(k,s(s({ref:t},d),{},{components:i})):o.createElement(k,s({ref:t},d))}));function k(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,s=new Array(n);s[0]=c;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:r,s[1]=a;for(var v=2;v<n;v++)s[v]=i[v];return o.createElement.apply(null,s)}return o.createElement.apply(null,i)}c.displayName="MDXCreateElement"},4155:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>n,metadata:()=>a,toc:()=>v});var o=i(87462),r=(i(67294),i(3905));const n={description:"Getting Started with Grove Vision AI V2.",title:"Grove Vision AI Module V2",keywords:["vision ai"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/cn/grove_vision_ai_v2",last_update:{date:"3/12/2024",author:"guiyingzhao"}},s="Grove Vision AI Module V2",a={unversionedId:"zh-CN/Sensor/Grove/Grove_Sensor/AI-powered/Grove-vision-ai-v2/cn-Grove-vision-ai-v2",id:"zh-CN/Sensor/Grove/Grove_Sensor/AI-powered/Grove-vision-ai-v2/cn-Grove-vision-ai-v2",title:"Grove Vision AI Module V2",description:"Getting Started with Grove Vision AI V2.",source:"@site/docs/zh-CN/Sensor/Grove/Grove_Sensor/AI-powered/Grove-vision-ai-v2/cn-Grove-vision-ai-v2.md",sourceDirName:"zh-CN/Sensor/Grove/Grove_Sensor/AI-powered/Grove-vision-ai-v2",slug:"/cn/grove_vision_ai_v2",permalink:"/cn/grove_vision_ai_v2",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Grove/Grove_Sensor/AI-powered/Grove-vision-ai-v2/cn-Grove-vision-ai-v2.md",tags:[],version:"current",lastUpdatedBy:"guiyingzhao",lastUpdatedAt:1710201600,formattedLastUpdatedAt:"Mar 12, 2024",frontMatter:{description:"Getting Started with Grove Vision AI V2.",title:"Grove Vision AI Module V2",keywords:["vision ai"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/cn/grove_vision_ai_v2",last_update:{date:"3/12/2024",author:"guiyingzhao"}}},l={},v=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u5e94\u7528",id:"\u5e94\u7528",level:3},{value:"\u786c\u4ef6\u6982\u89c8",id:"\u786c\u4ef6\u6982\u89c8",level:2},{value:"\u8fde\u63a5\u5230CSI\u63a5\u53e3\u6444\u50cf\u5934",id:"\u8fde\u63a5\u5230csi\u63a5\u53e3\u6444\u50cf\u5934",level:4},{value:"\u542f\u52a8/\u590d\u4f4d/\u5237\u5199\u9a71\u52a8\u7a0b\u5e8f",id:"\u542f\u52a8\u590d\u4f4d\u5237\u5199\u9a71\u52a8\u7a0b\u5e8f",level:2},{value:"\u542f\u52a8",id:"\u542f\u52a8",level:3},{value:"\u590d\u4f4d",id:"\u590d\u4f4d",level:3},{value:"\u9a71\u52a8\u7a0b\u5e8f",id:"\u9a71\u52a8\u7a0b\u5e8f",level:3},{value:"\u5165\u95e8\u6307\u5357",id:"\u5165\u95e8\u6307\u5357",level:2},{value:"\u4f7f\u7528Arduino\u5165\u95e8",id:"\u4f7f\u7528arduino\u5165\u95e8",level:3},{value:"\u4f7f\u7528SenseCraft AI\u5165\u95e8",id:"\u4f7f\u7528sensecraft-ai\u5165\u95e8",level:3},{value:"\u5c06Grove Vision AI V2\u8fde\u63a5\u5230Home Assistant",id:"\u5c06grove-vision-ai-v2\u8fde\u63a5\u5230home-assistant",level:3},{value:"\u6545\u969c\u6392\u9664",id:"\u6545\u969c\u6392\u9664",level:2},{value:"Q1\uff1aGrove Vision AI\u662f\u5426\u80fd\u5728\u8f93\u51fa\u5b9e\u65f6\u5c4f\u5e55\u7684\u540c\u65f6\u770b\u5230XIAO\u7684\u7ed3\u679c\u4fe1\u606f\uff1f",id:"q1grove-vision-ai\u662f\u5426\u80fd\u5728\u8f93\u51fa\u5b9e\u65f6\u5c4f\u5e55\u7684\u540c\u65f6\u770b\u5230xiao\u7684\u7ed3\u679c\u4fe1\u606f",level:3},{value:"Q2\uff1aGrove Vision AI V2\u652f\u6301\u54ea\u4e9b\u6444\u50cf\u5934\uff1f\u5b83\u53ea\u652f\u6301OV5647-62\u5417\uff1f",id:"q2grove-vision-ai-v2\u652f\u6301\u54ea\u4e9b\u6444\u50cf\u5934\u5b83\u53ea\u652f\u6301ov5647-62\u5417",level:3},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",level:2},{value:"<strong>\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba</strong>",id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba",level:2}],d={toc:v},u="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"grove-vision-ai-module-v2"},"Grove Vision AI Module V2"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/0.jpg",style:{width:700,height:"auto"}})),(0,r.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-Vision-AI-Module-V2-p-5851.html"},(0,r.kt)("strong",null,(0,r.kt)("span",null,(0,r.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,r.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,r.kt)("p",null,"\u5b83\u662f\u4e00\u4e2a\u57fa\u4e8e\u5355\u7247\u673a\u7684\u89c6\u89c9AI\u6a21\u5757\uff0c\u7531Arm Cortex-M55\u548cEthos-U55\u9a71\u52a8\u3002\u5b83\u652f\u6301TensorFlow\u548cPyTorch\u6846\u67b6\uff0c\u5e76\u4e0eArduino IDE\u517c\u5bb9\u3002\u901a\u8fc7SenseCraft AI\u7b97\u6cd5\u5e73\u53f0\uff0c\u53ef\u4ee5\u5c06\u8bad\u7ec3\u597d\u7684ML\u6a21\u578b\u90e8\u7f72\u5230\u4f20\u611f\u5668\u4e0a\uff0c\u800c\u4e0d\u9700\u8981\u7f16\u7801\u3002\u5b83\u5177\u6709\u6807\u51c6\u7684CSI\u63a5\u53e3\u3001\u8f66\u8f7d\u6570\u5b57\u9ea6\u514b\u98ce\u548cSD\u5361\u63d2\u69fd\uff0c\u975e\u5e38\u9002\u5408\u5404\u79cd\u5d4c\u5165\u5f0fAI\u89c6\u89c9\u9879\u76ee\u3002"),(0,r.kt)("div",{class:"table-center"},(0,r.kt)("iframe",{width:"900",height:"500",src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/video.mp4",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"}," ")),"### \u7279\u70b9",(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5f3a\u5927\u7684AI\u5904\u7406\u80fd\u529b"),"\uff1a\u642d\u8f7dWiseEye2 HX6538\u5904\u7406\u5668\uff0c\u914d\u5907\u53cc\u6838Arm Cortex-M55\u548c\u96c6\u6210\u7684Arm Ethos-U55\u795e\u7ecf\u7f51\u7edc\u5355\u5143\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u591a\u6837\u5316\u7684AI\u6a21\u578b\u652f\u6301"),"\uff1a\u8f7b\u677e\u90e8\u7f72SenseCraft AI\u63d0\u4f9b\u7684\u73b0\u6210\u6216\u81ea\u5b9a\u4e49AI\u6a21\u578b\uff0c\u5305\u62ecMobilenet V1\u3001V2\u3001Efficientnet-lite\u3001Yolo v5 & v8\u7b49\u3002\u652f\u6301TensorFlow\u548cPyTorch\u6846\u67b6\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4e30\u5bcc\u7684\u5916\u8bbe\u8bbe\u5907"),"\uff1a\u5305\u62ecPDM\u9ea6\u514b\u98ce\u3001SD\u5361\u69fd\u3001Type-C\u3001Grove\u63a5\u53e3\u7b49\u5176\u4ed6\u5916\u8bbe\uff0c\u529f\u80fd\u66f4\u52a0\u4e30\u5bcc\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u9ad8\u5ea6\u517c\u5bb9\u6027"),"\uff1a\u517c\u5bb9XIAO\u7cfb\u5217\u3001Arduino\u3001Raspberry Pi\u3001ESP\u5f00\u53d1\u677f\u7b49\uff0c\u4fbf\u4e8e\u8fdb\u4e00\u6b65\u7684\u5f00\u53d1\u548c\u96c6\u6210\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5b8c\u5168\u5f00\u6e90"),"\uff1a\u6240\u6709\u4ee3\u7801\u3001\u8bbe\u8ba1\u6587\u4ef6\u548c\u539f\u7406\u56fe\u5747\u53ef\u8fdb\u884c\u4fee\u6539\u548c\u4f7f\u7528\u3002")),(0,r.kt)("h3",{id:"\u5e94\u7528"},"\u5e94\u7528"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u5de5\u4e1a\u81ea\u52a8\u5316"),"\uff1a\u652f\u6301\u8d28\u91cf\u68c0\u6d4b\u3001\u9884\u6d4b\u6027\u7ef4\u62a4\u3001\u8bed\u97f3\u63a7\u5236\u7b49\u5e94\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u667a\u6167\u57ce\u5e02"),"\uff1a\u53ef\u7528\u4e8e\u8bbe\u5907\u76d1\u63a7\u3001\u80fd\u6e90\u7ba1\u7406\u7b49\u57ce\u5e02\u5e94\u7528\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4ea4\u901a\u8fd0\u8f93"),"\uff1a\u652f\u6301\u72b6\u6001\u76d1\u6d4b\u3001\u4f4d\u7f6e\u8ddf\u8e2a\u7b49\u529f\u80fd\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u667a\u80fd\u519c\u4e1a"),"\uff1a\u9002\u7528\u4e8e\u73af\u5883\u76d1\u6d4b\u7b49\u519c\u4e1a\u4efb\u52a1\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u79fb\u52a8\u7269\u8054\u7f51\u8bbe\u5907"),"\uff1a\u9002\u7528\u4e8e\u53ef\u7a7f\u6234\u8bbe\u5907\u3001\u624b\u6301\u8bbe\u5907\u7b49\u79fb\u52a8\u7269\u8054\u7f51\u5e94\u7528\u3002")),(0,r.kt)("h2",{id:"\u786c\u4ef6\u6982\u89c8"},"\u786c\u4ef6\u6982\u89c8"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/15.jpg",style:{width:1e3,height:"auto"}})),(0,r.kt)("p",null,"\u8981\u5145\u5206\u53d1\u6325Grove Vision AI V2\u7684\u529f\u80fd\uff0c\u60a8\u53ef\u80fd\u9700\u8981\u5355\u72ec\u8d2d\u4e70CSI\u6444\u50cf\u5934\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/OV5647-69-1-FOV-Camera-module-for-Raspberry-Pi-3B-4B-p-5484.html"},(0,r.kt)("strong",{parentName:"a"},"OV5647-62 FOV\u6811\u8393\u6d3e\u76f8\u673a\u6a21\u5757")),"\u3002"),(0,r.kt)("h4",{id:"\u8fde\u63a5\u5230csi\u63a5\u53e3\u6444\u50cf\u5934"},"\u8fde\u63a5\u5230CSI\u63a5\u53e3\u6444\u50cf\u5934"),(0,r.kt)("p",null,"\u4e00\u65e6\u60a8\u51c6\u5907\u597dGrove Vision AI V2\u548c\u6444\u50cf\u5934\uff0c\u60a8\u5c31\u53ef\u4ee5\u901a\u8fc7CSI\u8fde\u63a5\u7535\u7f06\u5c06\u5b83\u4eec\u8fde\u63a5\u8d77\u6765\u3002\u8fde\u63a5\u65f6\uff0c\u8bf7\u6ce8\u610f\u6392\u9488\u7684\u65b9\u5411\uff0c\u4e0d\u8981\u63d2\u53cd\u3002"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/9.gif",style:{width:600,height:"auto"}})),(0,r.kt)("h2",{id:"\u542f\u52a8\u590d\u4f4d\u5237\u5199\u9a71\u52a8\u7a0b\u5e8f"},"\u542f\u52a8/\u590d\u4f4d/\u5237\u5199\u9a71\u52a8\u7a0b\u5e8f"),(0,r.kt)("h3",{id:"\u542f\u52a8"},"\u542f\u52a8"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u4e86\u4e00\u4e9b\u4e0d\u5bfb\u5e38\u7684\u65b9\u6cd5\u5bfc\u81f4Grove Vision AI\u5b8c\u5168\u65e0\u6cd5\u6b63\u5e38\u5de5\u4f5c\uff08\u5728\u8f6f\u4ef6\u7ea7\u522b\uff09\uff0c\u90a3\u4e48\u60a8\u53ef\u80fd\u9700\u8981\u5c06\u8bbe\u5907\u7f6e\u4e8eBootLoader\u6a21\u5f0f\u4ee5\u6062\u590d\u8bbe\u5907\u3002\u4ee5\u4e0b\u662f\u5982\u4f55\u8fdb\u5165BootLoader\u6a21\u5f0f\u7684\u65b9\u6cd5\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u65b9\u6cd51")),(0,r.kt)("p",null,"\u8bf7\u65ad\u5f00Grove Vision AI\u4e0e\u8ba1\u7b97\u673a\u4e4b\u95f4\u7684\u8fde\u63a5\u7535\u7f06\uff0c\u7136\u540e\u6309\u4f4f\u8bbe\u5907\u4e0a\u7684Boot\u6309\u94ae\u800c\u4e0d\u91ca\u653e\u3002\u6b64\u65f6\uff0c\u8bf7\u4f7f\u7528Type-C\u7c7b\u578b\u6570\u636e\u7535\u7f06\u5c06Grove Vision AI\u8fde\u63a5\u5230\u8ba1\u7b97\u673a\uff0c\u7136\u540e\u518d\u6b21\u91ca\u653e\u3002\u6b64\u65f6\u8bbe\u5907\u5c06\u8fdb\u5165BootLoader\u6a21\u5f0f\u3002"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/6.gif",style:{width:600,height:"auto"}})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u65b9\u6cd52")),(0,r.kt)("p",null,"\u5c06Grove Vision AI\u8fde\u63a5\u5230\u8ba1\u7b97\u673a\uff0c\u901a\u8fc7\u6309\u4e0bBoot\u6309\u94ae\u7136\u540e\u5feb\u901f\u6309\u4e0b\u590d\u4f4d\u6309\u94ae\u5373\u53ef\u8fdb\u5165BootLoader\u6a21\u5f0f\u3002"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/7.gif",style:{width:600,height:"auto"}})),(0,r.kt)("h3",{id:"\u590d\u4f4d"},"\u590d\u4f4d"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u9047\u5230\u8bbe\u5907\u6570\u636e\u7a81\u7136\u65e0\u6cd5\u4e0a\u4f20\u6216\u56fe\u50cf\u5361\u4f4f\u7684\u95ee\u9898\uff0c\u60a8\u53ef\u4ee5\u5c1d\u8bd5\u4f7f\u7528\u590d\u4f4d\u6309\u94ae\u91cd\u65b0\u542f\u52a8\u8bbe\u5907\u3002"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/8.gif",style:{width:600,height:"auto"}})),(0,r.kt)("h3",{id:"\u9a71\u52a8\u7a0b\u5e8f"},"\u9a71\u52a8\u7a0b\u5e8f"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u8fde\u63a5Grove Vision AI V2\u5230\u8ba1\u7b97\u673a\u540e\u53d1\u73b0\u65e0\u6cd5\u8bc6\u522b\u8bbe\u5907\uff0c\u90a3\u4e48\u60a8\u53ef\u80fd\u9700\u8981\u5728\u8ba1\u7b97\u673a\u4e0a\u5b89\u88c5CH343\u9a71\u52a8\u7a0b\u5e8f\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u4e0b\u8f7d\u548c\u5b89\u88c5CH343\u9a71\u52a8\u7a0b\u5e8f\u7684\u94fe\u63a5\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Windows\u4f9b\u5e94\u5546VCP\u9a71\u52a8\u4e00\u952e\u5b89\u88c5\u7a0b\u5e8f\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.EXE"},"CH343SER.EXE")),(0,r.kt)("li",{parentName:"ul"},"Windows\u4f9b\u5e94\u5546VCP\u9a71\u52a8\u7a0b\u5e8f\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.ZIP"},"CH343SER.ZIP")),(0,r.kt)("li",{parentName:"ul"},"Windows CDC\u9a71\u52a8\u4e00\u952e\u5b89\u88c5\u7a0b\u5e8f\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343CDC.EXE"},"CH343CDC.EXE")),(0,r.kt)("li",{parentName:"ul"},"Windows CDC\u9a71\u52a8\u7a0b\u5e8f\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH343SER.ZIP"},"CH343CDC.ZIP")),(0,r.kt)("li",{parentName:"ul"},"macOS\u4f9b\u5e94\u5546VCP\u9a71\u52a8\u7a0b\u5e8f\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/res/CH341SER_MAC.ZIP"},"CH34xSER_MAC.ZIP"))),(0,r.kt)("h2",{id:"\u5165\u95e8\u6307\u5357"},"\u5165\u95e8\u6307\u5357"),(0,r.kt)("h3",{id:"\u4f7f\u7528arduino\u5165\u95e8"},"\u4f7f\u7528Arduino\u5165\u95e8"),(0,r.kt)("div",{class:"all_container"},"   ",(0,r.kt)("div",{class:"getting_started"},"       ",(0,r.kt)("div",{class:"start_card_wrapper"},"           ",(0,r.kt)("a",{href:"/grove_vision_ai_v2_software_support/#-arduino-library-introduction-",class:"getting_started_label2"}," Arduino\uff08Seeed Studio XIAO\uff09"),"           ",(0,r.kt)("br",null),"\u5bf9\u8c61\u8bc6\u522b\u6216\u4e32\u884c\u901a\u4fe1       "),"   ")," "),(0,r.kt)("h3",{id:"\u4f7f\u7528sensecraft-ai\u5165\u95e8"},"\u4f7f\u7528SenseCraft AI\u5165\u95e8"),(0,r.kt)("div",{class:"all_container"},"   ",(0,r.kt)("div",{class:"getting_started"},"       ",(0,r.kt)("div",{class:"start_card_wrapper"},"           ",(0,r.kt)("a",{href:"/grove_vision_ai_v2_software_support/#-no-code-getting-started-with-sensecraft-ai-",class:"getting_started_label2"}," SenseCraft AI\u6a21\u578b\u52a9\u624b"),"           ",(0,r.kt)("br",null),"\u65e0\u4ee3\u7801\u4f53\u9a8cAI\u6a21\u578b\u90e8\u7f72\u548c\u89c2\u5bdf       "),"   ")," "),(0,r.kt)("h3",{id:"\u5c06grove-vision-ai-v2\u8fde\u63a5\u5230home-assistant"},"\u5c06Grove Vision AI V2\u8fde\u63a5\u5230Home Assistant"),(0,r.kt)("div",{class:"all_container"},"   ",(0,r.kt)("div",{class:"getting_started"},"       ",(0,r.kt)("div",{class:"start_card_wrapper"},"           ",(0,r.kt)("a",{href:"/connect_vision_ai_v2_to_ha",class:"getting_started_label2"}," \u8fde\u63a5\u5230Home Assistant"),"           ",(0,r.kt)("br",null),"\u5c06Grove Vision AI V2\u6574\u5408\u5230Home Assistant\u4e2d       "),"   ")," "),(0,r.kt)("h2",{id:"\u6545\u969c\u6392\u9664"},"\u6545\u969c\u6392\u9664"),(0,r.kt)("h3",{id:"q1grove-vision-ai\u662f\u5426\u80fd\u5728\u8f93\u51fa\u5b9e\u65f6\u5c4f\u5e55\u7684\u540c\u65f6\u770b\u5230xiao\u7684\u7ed3\u679c\u4fe1\u606f"},"Q1\uff1aGrove Vision AI\u662f\u5426\u80fd\u5728\u8f93\u51fa\u5b9e\u65f6\u5c4f\u5e55\u7684\u540c\u65f6\u770b\u5230XIAO\u7684\u7ed3\u679c\u4fe1\u606f\uff1f"),(0,r.kt)("p",null,"\u4e0d\u884c\u7684\u3002\u8003\u8651\u5230\u5e27\u7387\u6216\u56fe\u50cf\u63a8\u7406\u7684\u901f\u5ea6\uff0c\u6211\u4eec\u76ee\u524d\u4e0d\u652f\u6301\u540c\u65f6\u6267\u884c\u8fd9\u4e24\u4e2a\u4efb\u52a1\u3002\u5982\u679c\u8fde\u63a5\u4e86XIAO\uff0c\u5219\u53ea\u80fd\u63a5\u6536\u4e0a\u62a5\u7684\u8bc6\u522b\u4fe1\u606f\uff0c\u800c\u4e0d\u80fd\u63a5\u6536\u5b9e\u65f6\u5e27\u3002"),(0,r.kt)("h3",{id:"q2grove-vision-ai-v2\u652f\u6301\u54ea\u4e9b\u6444\u50cf\u5934\u5b83\u53ea\u652f\u6301ov5647-62\u5417"},"Q2\uff1aGrove Vision AI V2\u652f\u6301\u54ea\u4e9b\u6444\u50cf\u5934\uff1f\u5b83\u53ea\u652f\u6301OV5647-62\u5417\uff1f"),(0,r.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728",(0,r.kt)("a",{parentName:"p",href:"https://chat.openai.com/Grove-vision-ai-v2-camera-supported"},"\u6b64\u5904"),"\u67e5\u770b\u3002\u76ee\u524d\uff0c\u6211\u4eec\u5df2\u7ecf\u4e3aOV5642\u7cfb\u5217\u76f8\u673a\u7f16\u5199\u4e86\u9a71\u52a8\u7a0b\u5e8f\uff0c\u56e0\u6b64Grove Vision AI V2\u652f\u6301\u5168\u7cfb\u5217\u6811\u8393\u6d3eOV5647\u76f8\u673a\uff0c\u4f8b\u5982OV5647-62\u3001OV5647-67\u548cOV5647-160\u3002\u5176\u4ed6CSI\u6444\u50cf\u5934\u7406\u8bba\u4e0a\u4e5f\u53d7\u652f\u6301\uff0c\u4f46\u7531\u4e8e\u67d0\u4e9b\u76f8\u673a\u6ca1\u6709\u4e3a\u5b83\u4eec\u7f16\u5199\u9a71\u52a8\u7a0b\u5e8f\uff0c\u6216\u8005\u5b83\u4eec\u672c\u8eab\u6ca1\u6709\u989c\u8272\u5904\u7406\u5355\u5143\uff0c\u6240\u4ee5\u53ef\u80fd\u5b58\u5728\u989c\u8272\u4ec5\u4e3a\u7eff\u8272\u7684\u95ee\u9898\uff0c\u5168\u5f69\u8272\u7684\u4e22\u5931\u53ef\u80fd\u4f1a\u5bf9\u8bc6\u522b\u7684\u51c6\u786e\u6027\u4ea7\u751f\u5f71\u54cd\u3002"),(0,r.kt)("h2",{id:"\u8d44\u6e90"},"\u8d44\u6e90"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/HX6538_datasheet.pdf"},"\u6570\u636e\u624b\u518c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[GitHub]")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/HimaxWiseEyePlus/Seeed_Grove_Vision_AI_Module_V2"},"Seeed Grove Vision AI\u6a21\u5757V2 SDK")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/Grove_Vision_AI_Module_V2_Circuit_Diagram.pdf"},"\u7535\u8def\u56fe")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Zip]")," ","[\u5e03\u5c40\u56fe]","(",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/Grove_Vision_AI_Module"},"https://files.seeedstudio.com/wiki/grove-vision-ai-v2/Grove_Vision_AI_Module"))),(0,r.kt)("h2",{id:"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba"},(0,r.kt)("strong",{parentName:"h2"},"\u6280\u672f\u652f\u6301\u4e0e\u4ea7\u54c1\u8ba8\u8bba")),(0,r.kt)("p",null,"\u611f\u8c22\u60a8\u9009\u62e9\u6211\u4eec\u7684\u4ea7\u54c1\uff01\u6211\u4eec\u5728\u8fd9\u91cc\u63d0\u4f9b\u4e0d\u540c\u7684\u652f\u6301\uff0c\u4ee5\u786e\u4fdd\u60a8\u4f7f\u7528\u6211\u4eec\u7684\u4ea7\u54c1\u7684\u4f53\u9a8c\u5c3d\u53ef\u80fd\u987a\u7545\u3002\u6211\u4eec\u63d0\u4f9b\u591a\u79cd\u6c9f\u901a\u6e20\u9053\uff0c\u4ee5\u6ee1\u8db3\u4e0d\u540c\u7684\u504f\u597d\u548c\u9700\u6c42\u3002"),(0,r.kt)("div",{class:"table-center"},(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"}))))}p.isMDXComponent=!0}}]);