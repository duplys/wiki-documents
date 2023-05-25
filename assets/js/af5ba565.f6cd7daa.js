"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[24705],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||n;return r?i.createElement(k,o(o({ref:t},d),{},{components:r})):i.createElement(k,o({ref:t},d))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<n;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54553:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var i=r(87462),a=(r(67294),r(3905));const n={description:"Pre-compiled Arduino Libraries Usage",title:"Pre-compiled Arduino Libraries Usage",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Software-Static-Library",last_update:{date:"1/16/2023",author:"jianjing Huang"}},o=void 0,s={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/Software-Static-Library",id:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/Software-Static-Library",title:"Pre-compiled Arduino Libraries Usage",description:"Pre-compiled Arduino Libraries Usage",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/Software-Static-Library.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage",slug:"/Software-Static-Library",permalink:"/Software-Static-Library",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/Software-Static-Library.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673827200,formattedLastUpdatedAt:"Jan 16, 2023",frontMatter:{description:"Pre-compiled Arduino Libraries Usage",title:"Pre-compiled Arduino Libraries Usage",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Software-Static-Library",last_update:{date:"1/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"SPI User Guide for Arduino Boards",permalink:"/Software-SPI"},next:{title:"Arduino Common Error",permalink:"/Arduino_Common_Error"}},l={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Having Troubles?",id:"having-troubles",level:3},{value:"Resources",id:"resources",level:2},{value:"FAQ",id:"faq",level:2},{value:"Tech Support &amp; Product Descussion",id:"tech-support--product-descussion",level:2}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To improve compile time of big projects in Arduino, you can use one of the newer features introduced in Arduino IDE (>=1.8.6), ",(0,a.kt)("strong",{parentName:"p"},"static (pre-compiled) libraries")," for your Arduino Sketches."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/StaticLibraries/Banner.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Why use pre-compiled libraries?")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The pre-compiled library allows to share the functions of the library without exposing the source code.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The only limitation of pre-compiled libraries is that they are only valid for boards or MCUs that have been compiled for."))),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Let's take an Arduino library as example and convert it to pre-compiled library. Here I will use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR"},(0,a.kt)("strong",{parentName:"a"},"Seeed_Arduino_LIS3DHTR"))," as Arduino library and ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},(0,a.kt)("strong",{parentName:"a"},"Wio Terminal"))," as board option."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"STEP1. Arduino Library Configurations")),(0,a.kt)("p",null,"Navigate to the library root path and open the ",(0,a.kt)("inlineCode",{parentName:"p"},"library.properties")," file and add the following and save the file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"dot_a_linkage=true\n")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/StaticLibraries/dot.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"STEP.2 Arduino IDE Set-up")),(0,a.kt)("p",null,"Open Arduino IDE, and navigate to ",(0,a.kt)("strong",{parentName:"p"},"Settings"),'. Make sure that the "',(0,a.kt)("strong",{parentName:"p"},"Show verbose output during: compilation and upload"),'" are ticked.'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/StaticLibraries/Arduino-IDE.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"STEP.3 Obtaining Temporaty Build Location and Board Framework Flag")),(0,a.kt)("p",null,"Select ",(0,a.kt)("strong",{parentName:"p"},"Wio Terminal")," as Board. Compile any sketch that has an ",(0,a.kt)("strong",{parentName:"p"},"#include directive for your library"),". This could just be a bare minimum sketch. In my case, it's ",(0,a.kt)("inlineCode",{parentName:"p"},"#include<LIS3DHTR.h>"),"."),(0,a.kt)("p",null,"After it's compilation, check the compile log windows and find the location of temporary build folder. This should be printed out in the final command of the output. For example, in my case the command is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"/Users/ansonhe/Library/Arduino15/packages/Seeeduino/tools/arm-none-eabi-gcc/7-2017q4/bin/arm-none-eabi-size -A /var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_37343/pre-compile.ino.elf\n")),(0,a.kt)("p",null,"And so the ",(0,a.kt)("strong",{parentName:"p"},"temporary build path")," is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"/var/folders/7g/10kskmw90bg08j_g_r7flwq40000gn/T/arduino_build_37343\n")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/StaticLibraries/buildpath.png"})),(0,a.kt)("p",null,"Copy this path and will be used later. Also one more thing to be noted is that to find the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"-mcpu="))," flag to get the board framework flag compiled for the selected board. In my case, Wio Terminal is labelled as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"-mcpu=cortex-m4\n")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/StaticLibraries/mcu.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"STEP.4 Copy the ",(0,a.kt)("inlineCode",{parentName:"strong"},".a")," file to the Library Folder")),(0,a.kt)("p",null,"Navigate to the temporary build path folder, and navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"libraries")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_LIS3DHTR")," and you should see a ",(0,a.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_LIS3DHTR.a")," file."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/StaticLibraries/a.png"})),(0,a.kt)("p",null,"Copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_LIS3DHTR.a")," file from the {temporary build folder}/libraries/{library name} folder to the ",(0,a.kt)("strong",{parentName:"p"},"Arduino/libraries/{library name}/src/{Board Framework Flag}")," sub-folder of your library folder. In my case, it is placed under ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"src/cortex-m4")),"."),(0,a.kt)("p",null,"Rename the ",(0,a.kt)("inlineCode",{parentName:"p"},".a"),' file, appending "lib" to the start of the name. In my case, it becomes ',(0,a.kt)("inlineCode",{parentName:"p"},"libSeeed_Arduino_LIS3DHTR.a"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/StaticLibraries/library.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"STEP.5 Adding Pre-Compiled Flag")),(0,a.kt)("p",null,"Now, we can navigate back to the ",(0,a.kt)("inlineCode",{parentName:"p"},"library.properties")," and remove ",(0,a.kt)("inlineCode",{parentName:"p"},"dot_a_linkage=true")," and add the following flags:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"precompiled=true\nldflags=-lSeeed_Arduino_LIS3DHTR\n")),(0,a.kt)("p",null,"where the ",(0,a.kt)("inlineCode",{parentName:"p"},"ldflags")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"-l+{library name}"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},'Note that you don\'t specify the "lib" part of the filename in the flag.\n'))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/StaticLibraries/pre-compiled.png"})),(0,a.kt)("p",null,"Now, you can remove the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},".cpp"))," files from the ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," of the library folders and Arduino IDE will use the pre-compiled library!"),(0,a.kt)("h3",{id:"having-troubles"},"Having Troubles?"),(0,a.kt)("p",null,"For some reasons, some boards may require the ",(0,a.kt)("inlineCode",{parentName:"p"},".a")," file further inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," file. For example, Wio Terminal is the case. If you having the same problem, please follow through."),(0,a.kt)("p",null,"Going through the compile log information, you will see that a path that the IDE is looking:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/StaticLibraries/path.png"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'/Users/ansonhe/Documents/Arduino/libraries/Seeed_Arduino_LIS3DHTR/src/cortex-m4/fpv4-sp-d16-hard" does not exist\n')),(0,a.kt)("p",null,"So only need to put the ",(0,a.kt)("inlineCode",{parentName:"p"},"libSeeed_Arduino_LIS3DHTR.a")," file inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"fpv4-sp-d16-hard")," under ",(0,a.kt)("inlineCode",{parentName:"p"},"cortex-m4"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/StaticLibraries/finalpath.png"})),(0,a.kt)("p",null,"Now, the Arduino will pick up the pre-compiled library path!"),(0,a.kt)("p",null,"Here will also provide an example that uses static library ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_MG126"},(0,a.kt)("strong",{parentName:"a"},"here")),". Please also use this as reference."),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://medium.com/@nickteixeira/shared-dynamic-libraries-vs-static-libraries-differences-in-performance-2716f5b3c826#:~:text=Advantages%3A,is%20already%20present%20in%20memory"},"Shared (dynamic) Libraries vs. Static Libraries \u2014Differences in performance"))),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"One thing to be noted is that, this pre-compiled library feature only supports Arduino IDE >= ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"1.8.6")),", so please update to the latest version of Arduino IDE to avoid this error.")),(0,a.kt)("h2",{id:"tech-support--product-descussion"},"Tech Support & Product Descussion"),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);