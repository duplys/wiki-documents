"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[30123],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42853:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const i={title:"I2C",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-IO-I2C/",slug:"/Wio-Terminal-IO-I2C",last_update:{date:"01/11/2022",author:"gunengyu"}},s="Using the Grove I2C Port on Wio Terminal",a={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-I2C",id:"Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-I2C",title:"I2C",description:"This repo demonstrates how to use the Grove I2C Port on Wio Terminal, you can simply use this plug and play functionality with the Grove Ecosystem!",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-I2C.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/Input&Output",slug:"/Wio-Terminal-IO-I2C",permalink:"/Wio-Terminal-IO-I2C",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-I2C.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"Jan 11, 2022",frontMatter:{title:"I2C",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-IO-I2C/",slug:"/Wio-Terminal-IO-I2C",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Digital",permalink:"/Wio-Terminal-IO-Digital"},next:{title:"SPI",permalink:"/Wio-Terminal-IO-SPI"}},l={},u=[{value:"Port Configurations",id:"port-configurations",level:2},{value:"Example Code",id:"example-code",level:2},{value:"Tech Support &amp; Product Descussion",id:"tech-support--product-descussion",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-the-grove-i2c-port-on-wio-terminal"},"Using the Grove I2C Port on Wio Terminal"),(0,o.kt)("p",null,"This repo demonstrates how to use the Grove I2C Port on Wio Terminal, you can simply use this plug and play functionality with the Grove Ecosystem!"),(0,o.kt)("h2",{id:"port-configurations"},"Port Configurations"),(0,o.kt)("p",null,"To use the Grove I2C port on Wio Terminal, Simply connect your Grove sensor that uses I2C to the physical I2C port on Wio Terminal."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Remember to include the Sensor libraries in Arduino IDE. Refer to this ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library/"},"How to install library")," for more information."),(0,o.kt)("h2",{id:"example-code"},"Example Code"),(0,o.kt)("p",null,"In this example, a Grove LCD is used to demonstrate. This is the ",(0,o.kt)("inlineCode",{parentName:"p"},"HelloWorld")," example from the RGB LCD libabry."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <Wire.h>\n#include "rgb_lcd.h"\n\nrgb_lcd lcd;\n\nconst int colorR = 255;\nconst int colorG = 0;\nconst int colorB = 0;\n\nvoid setup()\n{\n    // set up the LCD\'s number of columns and rows:\n    lcd.begin(16, 2);\n    \n    lcd.setRGB(colorR, colorG, colorB);\n    \n    // Print a message to the LCD.\n    lcd.print("hello, world!");\n\n    delay(1000);\n}\n\nvoid loop() \n{\n    // set the cursor to column 0, line 1\n    // (note: line 1 is the second row, since counting begins with 0):\n    lcd.setCursor(0, 1);\n    // print the number of seconds since reset:\n    lcd.print(millis()/1000);\n\n    delay(100);\n}\n')),(0,o.kt)("h2",{id:"tech-support--product-descussion"},"Tech Support & Product Descussion"),(0,o.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);