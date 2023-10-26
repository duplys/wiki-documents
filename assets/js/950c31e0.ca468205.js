"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[80019],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),k=a,h=d["".concat(l,".").concat(k)]||d[k]||u[k]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=k;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={description:"SenseCAP_T1000_tracker_and_TagoIO_Integrated",title:"Trackpac Integrated",keywords:["SenseCAP_T1000_tracker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_T1000_tracker_trackpac",last_update:{date:"10/26/2023",author:"Jessie"}},o=void 0,c={unversionedId:"Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard/Trackpac_Integrated",id:"Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard/Trackpac_Integrated",title:"Trackpac Integrated",description:"SenseCAP_T1000_tracker_and_TagoIO_Integrated",source:"@site/docs/Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard/Trackpac_Integrated.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard",slug:"/SenseCAP_T1000_tracker_trackpac",permalink:"/SenseCAP_T1000_tracker_trackpac",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_T1000_Tracker/Integrated_with_Popular_Dashboard/Trackpac_Integrated.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:1698278400,formattedLastUpdatedAt:"Oct 26, 2023",frontMatter:{description:"SenseCAP_T1000_tracker_and_TagoIO_Integrated",title:"Trackpac Integrated",keywords:["SenseCAP_T1000_tracker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP_T1000_tracker_trackpac",last_update:{date:"10/26/2023",author:"Jessie"}},sidebar:"ProductSidebar",previous:{title:"Akenza Integrated(via TTS)",permalink:"/SenseCAP_T1000_Tracker_Akenza"},next:{title:"FAQ",permalink:"/faq_for_SenseCAP_T1000"}},l={},s=[{value:"Configure the Device",id:"configure-the-device",level:2},{value:"Configure the Trackpac portal",id:"configure-the-trackpac-portal",level:2},{value:"Add Device",id:"add-device",level:3},{value:"Tracking",id:"tracking",level:2},{value:"Add Geofence(optional)",id:"add-geofenceoptional",level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://trackpac.io/"},"Trackpac")," is an innovative IoT (Internet of Things) Dashboard management system designed to streamline the supervision, control, and notification processes for a wide range of IoT devices. These devices encompass a variety of functionalities, including trackers, temperature sensors, humidity sensors, level indicators, and other sensor-based data measurement tools."),(0,a.kt)("p",null,"The content of this chapter will guide users how to connect the ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-Card-Tracker-T1000-A-p-5697.html"},"SenseCAP T1000 Tracker")," to Trackpac."),(0,a.kt)("h2",{id:"configure-the-device"},"Configure the Device"),(0,a.kt)("p",null,"Please check the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Get_Started_with_SenseCAP_T1000_tracker/"},"Quick Started")," to set up your device corrently."),(0,a.kt)("p",null,"Select the platform to ",(0,a.kt)("inlineCode",{parentName:"p"},"Other Platform"),", configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"APP EUI")," to the recommended value: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"545241434B504143\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you ever want to change it back, a ",(0,a.kt)("inlineCode",{parentName:"p"},"reset")," will restore the orignal keys.")),(0,a.kt)("p",null,"Then copy the ",(0,a.kt)("inlineCode",{parentName:"p"},"Device EUI"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"APP EUI")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"APP key"),"."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/trackpac.png",alt:"pir",width:300,height:"auto"})),(0,a.kt)("h2",{id:"configure-the-trackpac-portal"},"Configure the Trackpac portal"),(0,a.kt)("p",null,"Login to ",(0,a.kt)("a",{parentName:"p",href:"https://v2.trackpac.io"},"Trackpac portal"),"."),(0,a.kt)("h3",{id:"add-device"},"Add Device"),(0,a.kt)("p",null,"Navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"Devices"),", click the ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," icon to add a new device."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-device-trackpac.png",alt:"pir",width:800,height:"auto"})),(0,a.kt)("p",null,"Choose ",(0,a.kt)("inlineCode",{parentName:"p"},"Enter Keys Manually"),", name your device, and configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"Device EUI"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"APP EUI"),",",(0,a.kt)("inlineCode",{parentName:"p"},"APP key"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"LoRaWAN Network"),": Helium\n",(0,a.kt)("strong",{parentName:"p"},"Device Type"),": SenseCAP T1000"),(0,a.kt)("p",null,"Then click ",(0,a.kt)("inlineCode",{parentName:"p"},"Add Device"),"."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/add-trackpac.png",alt:"pir",width:800,height:"auto"})),(0,a.kt)("h2",{id:"tracking"},"Tracking"),(0,a.kt)("p",null,"Then your SenseCAP T1000 is now successfully integrated with Trackpac, you can check the data now."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/check-trackpac.png",alt:"pir",width:800,height:"auto"})),(0,a.kt)("h2",{id:"add-geofenceoptional"},"Add Geofence(optional)"),(0,a.kt)("p",null,"Before adding a geofence, you need to add contacts first."),(0,a.kt)("p",null,"Navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Contacts")," section, and click the ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," button top right."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/contact1.png",alt:"pir",width:800,height:"auto"})),(0,a.kt)("p",null,"Enter ",(0,a.kt)("inlineCode",{parentName:"p"},"Name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Select Contact Type"),": In the fields provided, enter the contact's name. Select the type of contact you're adding\u2014whether they will receive alerts via SMS, Email, or Both."),(0,a.kt)("p",null,"Input the contact's email and/or phone number in the respective fields."),(0,a.kt)("p",null,"After entering all necessary information, click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Add")," button to finalize and add the contact."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/contact2.png",alt:"pir",width:800,height:"auto"})),(0,a.kt)("p",null,"Navigate the ",(0,a.kt)("inlineCode",{parentName:"p"},"Geofences")," option."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence1.png",alt:"pir",width:800,height:"auto"})),(0,a.kt)("p",null,"Click the ",(0,a.kt)("inlineCode",{parentName:"p"},"+")," arrow."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence2.png",alt:"pir",width:800,height:"auto"})),(0,a.kt)("p",null,"Enter Geofence Name and set Radius: Use the slider or input field to set the radius of the geofence in meters."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Configure Alerts"),": Toggle on or off whether you want to receive alerts when the geofence boundary is crossed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Out of Hours: Specify if you want to receive alerts only outside of certain hours.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Start and End Time: If "Out of Hours" is selected, input the time range during which you don\'t want to receive alerts.'))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Select Contacts for Alerts"),": "),(0,a.kt)("p",null,"Choose which of your saved contacts should receive geofence alerts by entering in their names, or by clicking the box and selecting them from the list."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Set Geofence Center"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click on the Map: Use your mouse to click on the location where you want the center of the geofence to be.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use Geolocate: Alternatively, you can use the geolocate function (usually represented as a compass or location icon) to zoom into your current location and set it as the geofence center."))),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Add Geofence")," to save."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/geofence3.png",alt:"pir",width:800,height:"auto"})))}d.isMDXComponent=!0}}]);