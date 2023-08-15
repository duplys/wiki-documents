"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[64079],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=d(n),h=i,g=p["".concat(s,".").concat(h)]||p[h]||u[h]||l;return n?o.createElement(g,a(a({ref:t},c),{},{components:n})):o.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=h;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:i,a[1]=r;for(var d=2;d<l;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},83580:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var o=n(87462),i=(n(67294),n(3905));const l={description:"Introduction to EdgeLab.",title:"EdgeLab Introduction",keywords:["tinyml course"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/edgelab",last_update:{date:"08/09/2023",author:"Salman"}},a=void 0,r={unversionedId:"TinyML/TinyML_Workshop/Edgelab",id:"TinyML/TinyML_Workshop/Edgelab",title:"EdgeLab Introduction",description:"Introduction to EdgeLab.",source:"@site/docs/TinyML/TinyML_Workshop/Edgelab.md",sourceDirName:"TinyML/TinyML_Workshop",slug:"/edgelab",permalink:"/edgelab",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/TinyML/TinyML_Workshop/Edgelab.md",tags:[],version:"current",lastUpdatedBy:"Salman",lastUpdatedAt:1691539200,formattedLastUpdatedAt:"Aug 9, 2023",frontMatter:{description:"Introduction to EdgeLab.",title:"EdgeLab Introduction",keywords:["tinyml course"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/edgelab",last_update:{date:"08/09/2023",author:"Salman"}}},s={},d=[{value:"1. EdgeLab",id:"1-edgelab",level:2},{value:"1.1 Power-on Ready Embedded AI",id:"11-power-on-ready-embedded-ai",level:3},{value:"Step 1. Install XIAO ESP32S3 Sense expansion board",id:"step-1-install-xiao-esp32s3-sense-expansion-board",level:4},{value:"Step 2. Connecting the XIAO to your PC",id:"step-2-connecting-the-xiao-to-your-pc",level:4},{value:"Step 3. Go to the EdgeLab page and connect the XIAO",id:"step-3-go-to-the-edgelab-page-and-connect-the-xiao",level:4},{value:"1.2 Select &amp; Replace Custom Models",id:"12-select--replace-custom-models",level:3},{value:"Download Models",id:"download-models",level:4},{value:"Models Usage",id:"models-usage",level:4}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-edgelab"},"1. EdgeLab"),(0,i.kt)("h3",{id:"11-power-on-ready-embedded-ai"},"1.1 Power-on Ready Embedded AI"),(0,i.kt)("p",null,"We flash the EdgeLab program in advance for all XIAO ESP32S3 Sense participating in the Workshop, and pre-set the model for face recognition. Simply connect the XIAO ESP32S3 Sense to your PC via a data cable to instantly display face recognition."),(0,i.kt)("h4",{id:"step-1-install-xiao-esp32s3-sense-expansion-board"},"Step 1. Install XIAO ESP32S3 Sense expansion board"),(0,i.kt)("p",null,'First, we need to properly connect the XIAO ESP32S3 Sense expansion board to the XIAO. Installing the expansion board is very simple, you just need to align the connector on the expansion board with the B2B connector on the XIAO ESP32S3, press it hard and hear a "click", the installation is complete.'),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif",style:{width:500,height:"auto"}})),(0,i.kt)("h4",{id:"step-2-connecting-the-xiao-to-your-pc"},"Step 2. Connecting the XIAO to your PC"),(0,i.kt)("p",null,"Connect the XIAO to your PC using a data cable with data transfer function."),(0,i.kt)("h4",{id:"step-3-go-to-the-edgelab-page-and-connect-the-xiao"},"Step 3. Go to the EdgeLab page and connect the XIAO"),(0,i.kt)("p",null,"Click the button below to go to the EdgeLab homepage."),(0,i.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"get_one_now_item",href:"https://seeed-studio.github.io/edgelab-web-app/#/dashboard/workplace"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"4"},"Go to EdgeLab"))))),(0,i.kt)("br",null),(0,i.kt)("p",null,"Once we are on the homepage of EdgeLab, we first need to select the interface type for the connection as ",(0,i.kt)("strong",{parentName:"p"},"Serial")," and then click the ",(0,i.kt)("strong",{parentName:"p"},"Connect")," button."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/5.png",style:{width:700,height:"auto"}})),(0,i.kt)("p",null,"The browser will then pop up a window. We need to select the correct port for XIAO here. For ",(0,i.kt)("strong",{parentName:"p"},"Windows"),", this port usually starts with ",(0,i.kt)("strong",{parentName:"p"},"COM"),", and in case of ",(0,i.kt)("strong",{parentName:"p"},"MacOS"),", this port usually starts with ",(0,i.kt)("strong",{parentName:"p"},"/dev/tty"),". And it will have the words ",(0,i.kt)("strong",{parentName:"p"},"USB JTAG"),"."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/6.png",style:{width:700,height:"auto"}})),(0,i.kt)("p",null,"Clicking the ",(0,i.kt)("strong",{parentName:"p"},"Connect")," button will only result in an automatic refresh of the ",(0,i.kt)("strong",{parentName:"p"},"Refresh")," in the Configuration section below, where the XIAO firmware is being loaded and configuration information is being read."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/7.png",style:{width:500,height:"auto"}})),(0,i.kt)("p",null,"Once the ",(0,i.kt)("strong",{parentName:"p"},"Refresh")," button is back to blue, we can select the model and display the effect. The current model name for face recognition is ",(0,i.kt)("strong",{parentName:"p"},"User-Defined 1"),". After selecting it, click the ",(0,i.kt)("strong",{parentName:"p"},"Save")," button in the lower left corner."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/8.png",style:{width:500,height:"auto"}})),(0,i.kt)("p",null,"Finally, we come to the Monitor section, click once on ",(0,i.kt)("strong",{parentName:"p"},"Stop")," in the upper right corner, and then click ",(0,i.kt)("strong",{parentName:"p"},"Invoke"),", if everything runs smoothly, you can see the real-time screen effect."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/9.png",style:{width:1e3,height:"auto"}})),(0,i.kt)("h3",{id:"12-select--replace-custom-models"},"1.2 Select & Replace Custom Models"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"In addition to the face models prepared in advance, we are also supporting more models for XIAO ESP32S3, so stay tuned!")),(0,i.kt)("h4",{id:"download-models"},"Download Models"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/tinyml-topic/face_detection.tflite"},"yolov5 Face Detection")),(0,i.kt)("p",{parentName:"li"},"Preview:"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/face_detection.png",style:{width:600,height:"auto"}}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/tinyml-topic/Digital_Meter_Seg7.tflite"},"yolov5 Digital Meter Water")),(0,i.kt)("p",{parentName:"li"},"Preview:"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/digital_meter_number_detection.png",style:{width:600,height:"auto"}}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/tinyml-topic/Meter_Water.tflite"},"yolov5 Meter Water")),(0,i.kt)("p",{parentName:"li"},"Preview:"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/water_meter_number_detection.png",style:{width:600,height:"auto"}})))),(0,i.kt)("h4",{id:"models-usage"},"Models Usage"),(0,i.kt)("p",null,"If you want to use a custom model, follow the instructions below."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1. Download all necessary files")),(0,i.kt)("p",null,"Please download all the files below in order and select the model you want to use from above and download it. In general, to run a model you need to have at least ",(0,i.kt)("strong",{parentName:"p"},"four")," of the above files ready."),(0,i.kt)("div",{class:"table-center"},(0,i.kt)("table",{align:"center"},(0,i.kt)("tr",null,(0,i.kt)("td",null,"bootloader.bin"),(0,i.kt)("td",null,(0,i.kt)("a",{href:"https://files.seeedstudio.com/wiki/tinyml-topic/res/bootloader.bin",target:"_blank"},(0,i.kt)("b",null,"Download")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"partition-table.bin"),(0,i.kt)("td",null,(0,i.kt)("a",{href:"https://files.seeedstudio.com/wiki/tinyml-topic/res/partition-table.bin",target:"_blank"},(0,i.kt)("b",null,"Download")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"edgelab.bin"),(0,i.kt)("td",null,(0,i.kt)("a",{href:"https://files.seeedstudio.com/wiki/tinyml-topic/res/edgelab.bin",target:"_blank"},(0,i.kt)("b",null,"Download")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2. Flash all files to XIAO")),(0,i.kt)("p",null,"Please click the button below to come to ESPTool's Flash Tools page."),(0,i.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"get_one_now_item",href:"https://espressif.github.io/esptool-js/"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"4"},"Go to ESP Tool"))))),(0,i.kt)("br",null),(0,i.kt)("p",null,"Once you are on the web page, please click on the ",(0,i.kt)("strong",{parentName:"p"},"Connect")," button and then select the port number of your XIAO. Again, it should be clearly labeled ",(0,i.kt)("strong",{parentName:"p"},"USB JTAG"),"."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/12.png",style:{width:1e3,height:"auto"}})),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/13.png",style:{width:1e3,height:"auto"}})),(0,i.kt)("p",null,"Once the connection is correct, we can select the file to upload. Then please follow the format below, filling in the flash address and selecting the correct file in turn."),(0,i.kt)("div",{class:"table-center"},(0,i.kt)("table",{align:"center"},(0,i.kt)("tr",null,(0,i.kt)("td",null,"0x0000"),(0,i.kt)("td",null,"bootloader.bin")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"0x8000"),(0,i.kt)("td",null,"partition-table.bin")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"0x10000"),(0,i.kt)("td",null,"edgelab.bin")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"0x400000"),(0,i.kt)("td",null,"models_file_name.tflite")))),(0,i.kt)("p",null,"Take the ",(0,i.kt)("strong",{parentName:"p"},"yolov5 Digital Meter Water")," model as an example, the effect after complete filling is shown in the picture."),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/11.png",style:{width:1e3,height:"auto"}})),(0,i.kt)("p",null,"Then click Program, watch the progress bar for all the files and make sure each file is flashed successfully before you leave."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Since ESPTool doesn't have a reset program by default, after uploading all the files, we still need to manually re-plug the XIAO's cable to let it restart.")),(0,i.kt)("p",null,"Let's go back to EdgeLab, connect the XIAO according to the previous configuration method, start ",(0,i.kt)("strong",{parentName:"p"},"Invoke"),", and you'll see the water meter reading!"),(0,i.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"get_one_now_item",href:"https://seeed-studio.github.io/edgelab-web-app/#/dashboard/workplace"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"4"},"Go to EdgeLab"))))),(0,i.kt)("br",null),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/tinyml-topic/10.gif",style:{width:800,height:"auto"}})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you also want to experience this water meter that generates readings automatically, you can download the zip package by clicking ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://files.seeedstudio.com/wiki/tinyml-topic/clock-master.zip"},"here")),", unzip it and then double click to open the html file in the root directory.")))}p.isMDXComponent=!0}}]);