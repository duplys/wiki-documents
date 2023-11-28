"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9122],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=n(87462),r=(n(67294),n(3905));const a={description:"Object Detection with reTerminal and Pi camera with OpenCV",title:"Object Detection with reTerminal and Pi camera",keywords:["Edge","reTerminal","piCamera","OpenCV","Object Detection"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal_DM_Object_detection",last_update:{date:"11/7/2023",author:"Kasun Thushara"}},o=void 0,s={unversionedId:"Edge/reTerminal/Application/OpenCV/reTerminal_DM_Object_detection",id:"Edge/reTerminal/Application/OpenCV/reTerminal_DM_Object_detection",title:"Object Detection with reTerminal and Pi camera",description:"Object Detection with reTerminal and Pi camera with OpenCV",source:"@site/docs/Edge/reTerminal/Application/OpenCV/reTerminal_DM_Object_detection.md",sourceDirName:"Edge/reTerminal/Application/OpenCV",slug:"/reTerminal_DM_Object_detection",permalink:"/reTerminal_DM_Object_detection",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reTerminal/Application/OpenCV/reTerminal_DM_Object_detection.md",tags:[],version:"current",lastUpdatedBy:"Kasun Thushara",lastUpdatedAt:1699315200,formattedLastUpdatedAt:"Nov 7, 2023",frontMatter:{description:"Object Detection with reTerminal and Pi camera with OpenCV",title:"Object Detection with reTerminal and Pi camera",keywords:["Edge","reTerminal","piCamera","OpenCV","Object Detection"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal_DM_Object_detection",last_update:{date:"11/7/2023",author:"Kasun Thushara"}},sidebar:"ProductSidebar",previous:{title:"Color Detection with reTerminal and Pi camera with OpenCV",permalink:"/reTerminal_DM_Color_detection"},next:{title:"Getting started with Google MediaPipe",permalink:"/reTerminal_ML_MediaPipe"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Getting Start",id:"getting-start",level:2},{value:"Hardware preparation",id:"hardware-preparation",level:3},{value:"Software Preparation",id:"software-preparation",level:3},{value:"TinyML",id:"tinyml",level:2},{value:"EfficientDet",id:"efficientdet",level:3},{value:"Let&#39;s run the code.",id:"lets-run-the-code",level:2},{value:"Tech support",id:"tech-support",level:2}],d={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("center",null,(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/ReTerminal/opencv/objectdetection2.gif"})),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Object detection on edge computers has become a pivotal field in computer vision, enabling devices to autonomously perceive and respond to their surroundings. ",(0,r.kt)("strong",{parentName:"p"},"EfficientDet"),", a state-of-the-art object detection model, takes center stage in this domain. Designed to be ",(0,r.kt)("strong",{parentName:"p"},"resource-efficient, it strikes a balance between accuracy and computational demands, making it particularly well-suited for deployment on edge devices with limited processing power"),". Object detection on edge computers, exemplified by EfficientDet, finds applications in scenarios ranging from smart surveillance cameras and autonomous vehicles to Internet of Things (IoT) devices. Its ability to identify and locate multiple objects in real-time makes it a key enabler for enhancing the autonomy and intelligence of edge computing systems."),(0,r.kt)("h2",{id:"getting-start"},"Getting Start"),(0,r.kt)("p",null,"Before you start this project, you may need to prepare your hardware and software in advance as described here."),(0,r.kt)("h3",{id:"hardware-preparation"},"Hardware preparation"),(0,r.kt)("div",{class:"table-center"},(0,r.kt)("table",{class:"table-nobg"},(0,r.kt)("tr",{class:"table-trnobg"},(0,r.kt)("th",{class:"table-trnobg"},"reTerminal"),(0,r.kt)("th",{class:"table-trnobg"},"PiCam")),(0,r.kt)("tr",{class:"table-trnobg"}),(0,r.kt)("tr",{class:"table-trnobg"},(0,r.kt)("td",{class:"table-trnobg"},(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/frigate/reterminal.png",style:{width:300,height:"auto"}}))),(0,r.kt)("td",{class:"table-trnobg"},(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam2.jpg",style:{width:300,height:"auto"}})))),(0,r.kt)("tr",{class:"table-trnobg"}),(0,r.kt)("tr",{class:"table-trnobg"},(0,r.kt)("td",{class:"table-trnobg"},(0,r.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html?queryID=26220f25bcce77bc420c9c03059787c0&objectID=4904&indexName=bazaar_retailer_products"},(0,r.kt)("strong",null,(0,r.kt)("span",null,(0,r.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,r.kt)("td",{class:"table-trnobg"},(0,r.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.kt)("a",{class:"get_one_now_item",href:"https://wiki.seeedstudio.com/reTerminal-piCam/"},(0,r.kt)("strong",null,(0,r.kt)("span",null,(0,r.kt)("font",{color:"FFFFFF",size:"4"},"\ud83d\udcda Learn More"))))))))),(0,r.kt)("h3",{id:"software-preparation"},"Software Preparation"),(0,r.kt)("p",null,"We recommend installing the ",(0,r.kt)("strong",{parentName:"p"},"Bullesye")," version of Raspberry Pi 64 bit OS from their official website. If you prefer to install a new Raspbian OS, please follow the steps outlined in this ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc"},(0,r.kt)("strong",{parentName:"a"},"guide")),". "),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We highly recommend checking out our previous tutorial on ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reTerminal_DM_opencv/"},(0,r.kt)("strong",{parentName:"a"},"Getting started with OpenCV")),", as this tutorial serves as a continuation in our series.")),(0,r.kt)("h2",{id:"tinyml"},"TinyML"),(0,r.kt)("p",null,"TinyML revolutionizes machine learning by enabling lightweight models to run on edge devices with minimal resources. In the context of object detection, TensorFlow Lite, a key framework in TinyML, optimizes models for efficiency, allowing them to be deployed on devices like microcontrollers and embedded systems. This integration facilitates real-time, on-device processing for tasks such as object recognition, making TinyML with ",(0,r.kt)("a",{parentName:"p",href:"https://www.tensorflow.org/lite"},(0,r.kt)("strong",{parentName:"a"},"TensorFlow Lite"))," ideal for applications in smart sensors, wearables, and IoT devices without the need for constant cloud connectivity."),(0,r.kt)("h3",{id:"efficientdet"},"EfficientDet"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1911.09070"},(0,r.kt)("strong",{parentName:"a"},"EfficientDet"))," is a highly efficient and accurate object detection model that stands out for its performance on edge devices. Developed by Google, EfficientDet optimizes the balance between model accuracy and computational efficiency, making it well-suited for deployment on resource-constrained environments such as edge devices and mobile platforms. It leverages a compound scaling method to efficiently scale up model parameters and achieve better accuracy without compromising speed. EfficientDet's architecture includes a feature network for capturing image features effectively and a compound scaling method for balancing model accuracy and computational efficiency. Its success lies in achieving impressive performance on various object detection benchmarks while maintaining a lightweight structure, making it a go-to choice for applications requiring real-time object detection on edge devices."),(0,r.kt)("h2",{id:"lets-run-the-code"},"Let's run the code."),(0,r.kt)("p",null,"Make sure that you are in correct folder. If not "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd Opencv_and_piCam/ObjectDetection\n")),(0,r.kt)("p",null,"Make sure to install the dependencies and the EfficientDet model. If you've already completed this step in our ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting-start-opencv/"},(0,r.kt)("strong",{parentName:"a"},"first tutorial")),", there's no need to worry."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sh setup.sh\n")),(0,r.kt)("p",null,"Run the code "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"python3 detect_mod.py\n")),(0,r.kt)("h2",{id:"tech-support"},"Tech support"),(0,r.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);