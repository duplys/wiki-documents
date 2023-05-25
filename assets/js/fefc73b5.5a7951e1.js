"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[43832],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(r),c=a,h=d["".concat(s,".").concat(c)]||d[c]||u[c]||n;return r?i.createElement(h,o(o({ref:t},m),{},{components:r})):i.createElement(h,o({ref:t},m))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<n;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3163:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var i=r(87462),a=(r(67294),r(3905));const n={description:"Wio Terminal Retro Gaming Firmware",title:"Wio Terminal Retro Gaming Firmware",keywords:["Wio_terminal Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Firmware",last_update:{date:"1/31/2023",author:"jianjing Huang"}},o="Wio Terminal Retro Gaming Firmware",l={unversionedId:"Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Firmware",id:"Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Firmware",title:"Wio Terminal Retro Gaming Firmware",description:"Wio Terminal Retro Gaming Firmware",source:"@site/docs/Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Firmware.md",sourceDirName:"Sensor/Wio_Terminal/Tutorial",slug:"/Wio-Terminal-Firmware",permalink:"/Wio-Terminal-Firmware",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Firmware.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675123200,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{description:"Wio Terminal Retro Gaming Firmware",title:"Wio Terminal Retro Gaming Firmware",keywords:["Wio_terminal Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Firmware",last_update:{date:"1/31/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Introduction to Artificial Intelligence for Makers",permalink:"/Introduction_to_Artificial_Intelligence_for_Makers"},next:{title:"Codecraft connecting Azure IoT with Wio Terminal",permalink:"/Azure_IoT_CC"}},s={},p=[{value:"Download the Complete Source Code",id:"download-the-complete-source-code",level:2},{value:"Dependant Libraries",id:"dependant-libraries",level:2},{value:"Installing the Adafruit ZeroTimer Libraries",id:"installing-the-adafruit-zerotimer-libraries",level:3},{value:"Arduino Instructions",id:"arduino-instructions",level:2},{value:"Tech Support &amp; Product Descussion",id:"tech-support--product-descussion",level:2}],m={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wio-terminal-retro-gaming-firmware"},"Wio Terminal Retro Gaming Firmware"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://static-cdn.seeedstudio.site/media/wysiwyg/wtretro.gif"})),(0,a.kt)("p",null,"Here we released the initial factory firmware of the Wio Terminal, which is a simple game that you can play with Wio Terminal!"),(0,a.kt)("h2",{id:"download-the-complete-source-code"},"Download the Complete Source Code"),(0,a.kt)("p",null,"You can download the complete source code of the Wio Terminal Initial Firmware from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/jumper"},(0,a.kt)("strong",{parentName:"a"},"this repo"))," here."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Download the entire repo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Under ",(0,a.kt)("inlineCode",{parentName:"p"},"examples/jumper")," location"))),(0,a.kt)("h2",{id:"dependant-libraries"},"Dependant Libraries"),(0,a.kt)("h3",{id:"installing-the-adafruit-zerotimer-libraries"},"Installing the Adafruit ZeroTimer Libraries"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Visit the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/adafruit/Adafruit_ZeroTimer"},"Adafruit_ZeroTimer")," repositories and download the entire repo to your local drive.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now, the Adafruit ZeroTimer library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,a.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,a.kt)("inlineCode",{parentName:"p"},"Adafruit_ZeroTimer")," file that you've have just downloaded."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg",alt:"InstallLibrary"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Also depends on ",(0,a.kt)("strong",{parentName:"p"},"1. Seeed_Arduino_LCD 2. Seeed_Arduino_FS 3. Seeed_Arduino_SFUD 4. Adafruit_ZeroDMA"),", but these libraries are included in the Wio Terminal Board library. If having troubles, please update to the latest board library.")),(0,a.kt)("h2",{id:"arduino-instructions"},"Arduino Instructions"),(0,a.kt)("p",null,"There are ",(0,a.kt)("strong",{parentName:"p"},"2 ways")," of loading images of the gaming elements:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Using Flash:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"This is the default method and loads the images into the flash.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Upload the code.")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Loading images using SD Card:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Copy and paste ",(0,a.kt)("inlineCode",{parentName:"p"},"rgb332")," file(with all the images) into the SD card.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If loading images from the SD card, you need to uncomment the macro ",(0,a.kt)("inlineCode",{parentName:"p"},"LOAD_IMAGE_SD"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Upload the code."))))),(0,a.kt)("p",null,"Now, you can enjoy playing retro gaming using WIo Terminal again!"),(0,a.kt)("h2",{id:"tech-support--product-descussion"},"Tech Support & Product Descussion"),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);