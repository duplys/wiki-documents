"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[41592],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>f});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=r.createContext({}),p=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(o),m=n,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return o?r.createElement(f,a(a({ref:t},l),{},{components:o})):r.createElement(f,a({ref:t},l))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:n,a[1]=s;for(var p=2;p<i;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},56444:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=o(87462),n=(o(67294),o(3905));const i={description:"IR Remote",title:"IR Remote",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/IR_Remote",last_update:{date:"2/15/2023",author:"jianjing Huang"}},a=void 0,s={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/IR_Remote",id:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/IR_Remote",title:"IR Remote",description:"IR Remote",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/IR_Remote.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects",slug:"/IR_Remote",permalink:"/IR_Remote",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/IR_Remote.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676419200,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{description:"IR Remote",title:"IR Remote",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/IR_Remote",last_update:{date:"2/15/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Xadow IO pin mapping",permalink:"/Xadow_IO_pin_mapping"},next:{title:"Joystick Control RGB Led",permalink:"/Joystick_Control_RGB_Led"}},u={},p=[{value:"Tech Support &amp; Product Descussion",id:"tech-support--product-descussion",level:2}],l={toc:p};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"IR is a very common means of communication. This demo will show you how to use IR send and receive module."),(0,n.kt)("p",null,"Large of household appliances is controled by IR Remote, such as TV, air conditioning and so on."),(0,n.kt)("p",null,"We can use IR module to control those appliances also."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Hardware Required\uff1a")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Arduino")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"IR Emitter")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"IR Receiver")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Button"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Circuit\uff1a")),(0,n.kt)("p",null,"IR Emitter connect to D3 and IR Receiver connect to A4."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/IR_Remote/img/Sidekick_36_1.png",alt:null})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Code:")),(0,n.kt)("p",null,"There are two part of code: get value of Remote and Send command."),(0,n.kt)("p",null,"Get Value of Remote\uff1a"),(0,n.kt)("p",null,"Open revTest of IRSendRev Library, open Serial Monitor. Take your Remote, press a button, then you can find a series of number had been printed."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/IR_Remote/img/Sidekick_36_2.png",alt:null})),(0,n.kt)("p",null,"This series of number is what we need, note it, we'll use if later."),(0,n.kt)("p",null,"Send Command"),(0,n.kt)("p",null,"Open Arduino IDE, click File-",">","Sketchbook-",">","infrared."),(0,n.kt)("p",null,"If you had get the value of your TV turn-on-off key, then point infrared emitter to your TV, and press the button."),(0,n.kt)("h2",{id:"tech-support--product-descussion"},"Tech Support & Product Descussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);