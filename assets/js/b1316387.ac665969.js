"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[89885],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},l="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=d(r),f=o,m=l["".concat(u,".").concat(f)]||l[f]||c[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[l]="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},12213:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const i={description:"SPI User Guide for Arduino Boards",title:"SPI User Guide for Arduino Boards",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Software-SPI",last_update:{date:"1/16/2023",author:"jianjing Huang"}},a="Arduino Software SPI User Guide",s={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/Software-SPI",id:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/Software-SPI",title:"SPI User Guide for Arduino Boards",description:"SPI User Guide for Arduino Boards",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/Software-SPI.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage",slug:"/Software-SPI",permalink:"/Software-SPI",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/Software-SPI.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673827200,formattedLastUpdatedAt:"Jan 16, 2023",frontMatter:{description:"SPI User Guide for Arduino Boards",title:"SPI User Guide for Arduino Boards",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Software-SPI",last_update:{date:"1/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"I2C User Guide for Arduino Boards",permalink:"/Arduino_Software_I2C_user_guide"},next:{title:"Pre-compiled Arduino Libraries Usage",permalink:"/Software-Static-Library"}},u={},d=[{value:"Software SPI Example",id:"software-spi-example",level:2},{value:"Tech Support &amp; Product Descussion",id:"tech-support--product-descussion",level:2}],p={toc:d};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"arduino-software-spi-user-guide"},"Arduino Software SPI User Guide"),(0,o.kt)("p",null,"Similarly to I2C and Serial communications, ",(0,o.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/reference/SPI"},(0,o.kt)("strong",{parentName:"a"},"SPI"))," can be virtualized using software to overcome the physical limitations. Here provides an example of using software SPI with Arduino."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What is SPI")),(0,o.kt)("p",null,"Serial Peripheral Interface (SPI) is a synchronous serial data protocol used by microcontrollers for communicating with one or more peripheral devices quickly over short distances. It can also be used for communication between two microcontrollers."),(0,o.kt)("h2",{id:"software-spi-example"},"Software SPI Example"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Visit the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/MajenkoLibraries/SoftSPI"},"SoftSPI")," repositories and download the entire repo to your local drive.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now, the SoftSPI library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,o.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,o.kt)("inlineCode",{parentName:"p"},"SoftSPI")," file that you've have just downloaded."))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg",alt:"InstallLibrary"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <SPI.h>\n#include <SoftSPI.h>\n\n// Create a new SPI port with:\n// Pin 2 = MOSI,\n// Pin 3 = MISO,\n// Pin 4 = SCK\nSoftSPI mySPI(2, 3, 4);\n\nvoid setup() {\n  mySPI.begin();\n  Serial.begin(9600);\n  }\n\nvoid loop() {\n  static uint8_t v = 0;\n\n  Serial.print("Sending value: ");\n  Serial.print(v, HEX);\n  uint8_t in = mySPI.transfer(v);\n  Serial.print(" Got value: ");\n  Serial.print(in, HEX);\n  Serial.println(v == in ? " PASS" : " FAIL");\n  delay(1000);\n  v++;\n}\n')),(0,o.kt)("h2",{id:"tech-support--product-descussion"},"Tech Support & Product Descussion"),(0,o.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}l.isMDXComponent=!0}}]);