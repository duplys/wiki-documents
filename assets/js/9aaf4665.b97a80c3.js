"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[43025],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(o),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return o?n.createElement(f,s(s({ref:t},c),{},{components:o})):n.createElement(f,s({ref:t},c))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=o[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3044:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=o(87462),r=(o(67294),o(3905));const a={},s="Deployment",i={unversionedId:"Topics/TinyML/ModelAssistant/deploy/overview",id:"Topics/TinyML/ModelAssistant/deploy/overview",title:"Deployment",description:"SSCMA is an open-source project that provides a No-Code visual model deployment tool and a CPP-based SDK. It allows users to easily deploy models to different platforms without writing complex code.",source:"@site/docs/Topics/TinyML/ModelAssistant/deploy/overview.md",sourceDirName:"Topics/TinyML/ModelAssistant/deploy",slug:"/Topics/TinyML/ModelAssistant/deploy/overview",permalink:"/Topics/TinyML/ModelAssistant/deploy/overview",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Topics/TinyML/ModelAssistant/deploy/overview.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1704185899,formattedLastUpdatedAt:"Jan 2, 2024",frontMatter:{},sidebar:"ProductSidebar",previous:{title:"PyTorch to TFLite",permalink:"/Topics/TinyML/ModelAssistant/tutorials/export/pytorch_2_tflite"},next:{title:"Open Source",permalink:"/open_source_topic"}},l={},p=[{value:"SenseCraft-AI",id:"sensecraft-ai",level:2},{value:"SSCMA-Micro SDK",id:"sscma-micro-sdk",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deployment"},"Deployment"),(0,r.kt)("p",null,"SSCMA is an open-source project that provides a No-Code visual model deployment tool and a CPP-based SDK. It allows users to easily deploy models to different platforms without writing complex code."),(0,r.kt)("p",null,"The currently supported platforms include:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Device"),(0,r.kt)("th",{parentName:"tr",align:"left"},"SenseCraft-AI"),(0,r.kt)("th",{parentName:"tr",align:"left"},"SSCMA-Micro SDK"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html"},"Xiao ESP32S3")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2705")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html"},"Grove Vision AI V2")),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2705")))),(0,r.kt)("h2",{id:"sensecraft-ai"},"SenseCraft-AI"),(0,r.kt)("p",null,"SenseCraft-AI is a visual model deployment tool provided by SSCMA. With this tool, users can easily deploy models to various platforms through simple operations. The tool provides a user-friendly interface and does not require any coding."),(0,r.kt)("p",null,"The main features of ",(0,r.kt)("a",{parentName:"p",href:"https://seeed-studio.github.io/SenseCraft-Web-Toolkit/"},"SenseCraft-AI")," include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Visual interface without coding skills"),(0,r.kt)("li",{parentName:"ul"},"Quick deployment of models to different platforms"),(0,r.kt)("li",{parentName:"ul"},"Support for TFLite models")),(0,r.kt)("p",null,"Step 1. Open the SenseCraft-AI website"),(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://seeed-studio.github.io/SenseCraft-Web-Toolk"},(0,r.kt)("img",{width:"10%",src:"https://files.seeedstudio.com/sscma/docs/images/SSCMA-Hero.png"}))),(0,r.kt)("p",null,"Step 2. Connect the device to your computer"),(0,r.kt)("p",null,"Connect your device to your computer using a data cable with data transfer capability."),(0,r.kt)("p",null,"Step 3. Select and connect your device"),(0,r.kt)("p",null,"After entering the homepage of SenseCraft-AI, we need to connect the device first. Please click the connect button."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/sscma/docs/static/deploy/step3-1.png",alt:"step3-1"})),(0,r.kt)("p",null,"Then, a window will pop up in the browser. We need to select the correct Xiao port here. For Windows systems, the port usually starts with COM, while for MacOS systems, the port usually starts with /dev/tty and has the USB JTAG label. If you are unsure about the correct port, refresh this page after connecting the device and click the connect button again, and you will see the new port appearing in the dropdown list."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/sscma/docs/static/deploy/step3-2.png",alt:"step3-2"})),(0,r.kt)("p",null,"Step 4. Choose your model"),(0,r.kt)("p",null,'Once the connect button turns into a red disconnect button, we can select the model from the "Available AI Models" list. Here, I chose face recognition as a demonstration. After selection, click the send button and wait for a few seconds.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/sscma/docs/static/deploy/step4-1.png",alt:"step4-1"})),(0,r.kt)("p",null,"Step 5. Deploy your model"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/sscma/docs/static/deploy/step5-1.png",alt:"step5-1"})),(0,r.kt)("p",null,"Finally, we come to the preview section. Click the stop button once in the upper right corner, and then click the invoke button. If everything goes well, you can see real-time screen effects."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/sscma/docs/static/deploy/step5-2.png",alt:"step5-2"})),(0,r.kt)("h2",{id:"sscma-micro-sdk"},"SSCMA-Micro SDK"),(0,r.kt)("p",null,"SSCMA also provides a CPP-based SDK called SSCMA-Micro, enabling users to deploy models into their own projects. By integrating SSCMA-Micro, users can conveniently use the deployed models in their applications."),(0,r.kt)("p",null,"The features of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/SSCMA-Micro"},"SSCMA-Micro")," SDK include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CPP-based, suitable for various embedded systems and platforms"),(0,r.kt)("li",{parentName:"ul"},"Provides a simple yet powerful API for model invocation and inference"),(0,r.kt)("li",{parentName:"ul"},"Support for TFLite models")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"More examples are coming soon, stay tuned.")))}u.isMDXComponent=!0}}]);