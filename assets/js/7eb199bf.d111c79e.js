"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[49586],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),u=i,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||n;return r?a.createElement(g,o(o({ref:t},l),{},{components:r})):a.createElement(g,o({ref:t},l))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<n;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},35799:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>k,default:()=>f,frontMatter:()=>g,metadata:()=>h,toc:()=>_});var a=r(87462),i=r(67294),n=r(3905);const o=()=>i.createElement("div",{className:"hero_container"},i.createElement("div",{className:"hero_topic"},i.createElement("p",null,'Raspberry Pi (aka "RPi") was originally designed and created by a non-profit organization with the intention to promote teaching computer science at an affordable cost. Several generations and models of Raspberry Pis have now been released that have expanded their footprints, power and applications.'),i.createElement("p",null,"At Seeed Studio, we offer the entire Raspberry Pi family of boards as well as complementary accessories and starter kits that can help you create projects centered around the product. Additionally, we have created many tutorials in Seeed\u2019s Raspberry Pi community where you can easily find references to build your own circuits or write your own applications.")),i.createElement("div",{className:"hero_img"},i.createElement("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/r/a/raspberry-pi-preview_2.png"}))),s=()=>i.createElement("div",null,i.createElement("div",{className:"feature-container"},i.createElement("div",{id:"rpifeature1",className:"feature"},"\ud83d\udcb0 Affordability"),i.createElement("div",{id:"rpifeature2",className:"feature"},"\ud83e\udde9 Versatility"),i.createElement("div",{id:"rpifeature3",className:"feature"},"\ud83d\ude80 Ease of use"),i.createElement("div",{id:"rpifeature4",className:"feature"},"\ud83d\udc1c Size"))),p=[{id:1,name:"Grove Base Hat for Raspberry Pi",description:"Add-on board that provides an array of Digital/Analog/I2C/PWM/UART ports to meet all your needs",compatibleWith:"3B+, 4B",image:"https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/main.jpg",wikiPage:"./Grove_Base_Hat_for_Raspberry_Pi",purchasePage:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html"},{id:2,name:"Grove Base Hat for Raspberry Pi Zero",description:"Add-on board that provides an array of Digital/Analog/I2C/PWM/UART ports to meet all your needs in the pHat form factor of the RPi Zero family",compatibleWith:"Zero, Zero W/WH",image:"https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi_Zero/img/main.jpg",wikiPage:"https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi_Zero/",purchasePage:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-Zero-p-3187.html"},{id:3,name:"WM1302 Raspberry Pi Hat",description:"Add-on board for connecting the WM1302 LoRaWAN module, based on LoRa Concentrator Semtech SX1302",compatibleWith:"3B+, 4B, Zero, Zero W/WH",image:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/w/m/wm1302_pihat_preview-16_1.png",wikiPage:"https://wiki.seeedstudio.com/WM1302_Pi_HAT/",purchasePage:"https://www.seeedstudio.com/WM1302-Pi-Hat-p-4897.html"},{id:4,name:"LTE Cat 1 Pi HAT",description:"Open-source cellular extension modem for Raspberry Pi, based on u-blox LARA-R2xx series",compatibleWith:"3B+, 4B, Zero, Zero W/WH",image:"https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/overview.JPG",wikiPage:"https://wiki.seeedstudio.com/LTE_Cat_1_Pi_HAT/",purchasePage:"https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-USA-AT--p-3056.html"},{id:5,name:"ReSpeaker 2-Mics Pi HAT",description:"Dual-microphone expansion board for Raspberry Pi designed for AI and voice applications.",compatibleWith:"3B+, 4B, Zero, Zero W/WH",image:"https://files.seeedstudio.com/products/107100001/01.png",wikiPage:"https://wiki.seeedstudio.com/ReSpeaker_2_Mics_Pi_HAT/",purchasePage:"https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT-p-2874.html"},{id:6,name:"ReSpeaker 4-Mics Pi HAT",description:"Quad-microphone expansion board for Raspberry Pi designed for more powerful AI and voice applications.",compatibleWith:"3B+, 4B",image:"https://files.seeedstudio.com/wiki/ReSpeaker-4-Mic-Array-for-Raspberry-Pi/img/overview.jpg",wikiPage:"https://wiki.seeedstudio.com/ReSpeaker_4_Mic_Array_for_Raspberry_Pi/",purchasePage:"https://www.seeedstudio.com/ReSpeaker-4-Mic-Array-for-Raspberry-Pi-p-2941.html"}],c=()=>i.createElement("div",null,i.createElement("div",{className:"rpi_hat_container"},p.map((e=>i.createElement("div",{className:"rpi_hat_grid"},i.createElement("div",{className:"rpi_hat_vertical"},i.createElement("span",{className:"rpi_hat_description"},i.createElement("h2",null,e.name),i.createElement("p",null,e.description)),i.createElement("span",{className:"rpi_hat_compatible"},i.createElement("h3",null,"Compatible With"),i.createElement("p",null,e.compatibleWith))),i.createElement("img",{className:"rpi_hat_pic "+(e.id%2?"reverse":""),src:e.image}),i.createElement("span",{className:"rpi_hat_purchase pagelink"},i.createElement("a",{href:e.purchasePage}," \ud83d\uddb1\ufe0f Buy Now ")),i.createElement("span",{className:"rpi_hat_wikilink pagelink"},i.createElement("a",{href:e.wikiPage}," \ud83d\udcda Getting Started "))))))),l=[{id:1,name:"Skeleton Box for Raspberry Pi Compute Module Development Kit",description:"Constructed from military grade aluminum and hardwearing acrylic, this box is stackable in all three dimensions, allowing for limitless expansion possibilities",compatibleWith:"CM4",image:"https://files.seeedstudio.com/wiki/Skeleton_Box_for_Raspberry_Pi_Compute_Module_Development_Kit/img/Pic_2100.bmp",wikiPage:"https://wiki.seeedstudio.com/Skeleton_Box_for_Raspberry_Pi_Compute_Module_Development_Kit/",purchasePage:"https://www.seeedstudio.com/Skeleton-Box-for-Raspberry-Pi-Compute-Module.html"},{id:2,name:"Skeleton Box for Raspberry Pi",description:"Provides all the basic elements you need to collect and transfer data from all your LoRa nodes. Build your IOT prototype within minutes",compatibleWith:"3B+,4B",image:"https://files.seeedstudio.com/wiki/Skeleton_box_for_Rasberry_Pi/img/Pi_skeleton_02.jpg",wikiPage:"https://wiki.seeedstudio.com/Skeleton_box_for_Rasberry_Pi/",purchasePage:"https://www.seeedstudio.com/Skeleton-box-for-Raspberry-Pi.html"},{id:3,name:"Raspberry PI B+ Clear Case",description:"An easy to assemble clear acryllic case, made using a better-performing 4-piece design over the standard 6-piece",compatibleWith:"3B+",image:"https://files.seeedstudio.com/wiki/Raspberry_PI_Bplus_Case/img/IMG_9955b.jpg",wikiPage:"https://wiki.seeedstudio.com/Raspberry_PI_Bplus_Case/",purchasePage:"https://www.seeedstudio.com/Raspberry-Pi-Model-B-2-Case.html?queryID=f4fedf9ea695b42efea237236cb2a0ab&objectID=1036&indexName=bazaar_retailer_products"}],d=()=>i.createElement("div",null,i.createElement("div",{className:"rpi_item_container"},l.map((e=>i.createElement("div",{className:"rpi_item_grid"},i.createElement("div",{className:"rpi_item_vertical"},i.createElement("span",{className:"rpi_item_description"},i.createElement("h2",null,e.name),i.createElement("p",null,e.description)),i.createElement("span",{className:"rpi_item_compatible"},i.createElement("h3",null,"Compatible With"),i.createElement("p",null,e.compatibleWith))),i.createElement("img",{className:"rpi_item_pic "+(e.id%2?"reverse":""),src:e.image}),i.createElement("span",{className:"grid_item_center pagelink"},i.createElement("a",{href:e.purchasePage}," \ud83d\uddb1\ufe0f Buy Now ")),i.createElement("span",{className:"grid_item_center pagelink"},i.createElement("a",{href:e.wikiPage}," \ud83d\udcda Getting Started "))))))),m=[{id:1,name:"Grove Base Kit for Raspberry Pi",description:"Seeed Grove starter kit contains one Grove Base Hat(for Raspberry Pi ) and 10 Grove modules",compatibleWith:"3B+,4B,Zero,Zero W/H",image:"https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/groveSystem.png",wikiPage:"https://wiki.seeedstudio.com/Grove_Base_Kit_for_Raspberry_Pi/",purchasePage:"https://www.seeedstudio.com/Grove-Base-Kit-for-Raspberry-Pi-p-2945.html"},{id:2,name:"LoRa/LoRaWAN Gateway Kit",description:"Provides all the basic elements you need to collect and transfer data from all your LoRa nodes. Build your IOT prototype within minutes",compatibleWith:"3B+,4B,Zero,Zero W/H",image:"https://files.seeedstudio.com/wiki/LoRaWAN_Gateway-868MHz_Kit_with_Raspberry_Pi_3/img/loragate_hardware.png",wikiPage:"https://wiki.seeedstudio.com/LoRa_LoRaWan_Gateway_Kit/",purchasePage:"https://www.seeedstudio.com/LoRa-LoRaWAN-Gateway-868MHz-Kit-with-Raspberry-Pi-3.html"},{id:3,name:"Grove Starter Kit for Microsoft IoT",description:"Seeed and Microsoft have worked together to alleviate some of the challenges in complex setup using Windows 10 IoT Core and Grove modules",compatibleWith:"3B+,4B,Zero,Zero W/H",image:"https://files.seeedstudio.com/wiki/Microsoft_IoT_Grove_Kit/images/cover.jpg",wikiPage:"https://wiki.seeedstudio.com/Grove_Starter_Kit_for_IoT_based_on_Raspberry_Pi/",purchasePage:"https://www.seeedstudio.com/Grove-Starter-Kit-for-IoT-based-on-Raspberry-Pi.html"}],u=()=>i.createElement("div",null,i.createElement("div",{className:"rpi_item_container"},m.map((e=>i.createElement("div",{className:"rpi_item_grid"},i.createElement("div",{className:"rpi_item_vertical"},i.createElement("span",{className:"rpi_item_description"},i.createElement("h2",null,e.name),i.createElement("p",null,e.description)),i.createElement("span",{className:"rpi_item_compatible"},i.createElement("h3",null,"Compatible With"),i.createElement("p",null,e.compatibleWith))),i.createElement("img",{className:"rpi_item_pic "+(e.id%2?"reverse":""),src:e.image}),i.createElement("span",{className:"grid_item_center pagelink"},i.createElement("a",{href:e.purchasePage}," \ud83d\uddb1\ufe0f Buy Now ")),i.createElement("span",{className:"grid_item_center pagelink"},i.createElement("a",{href:e.wikiPage}," \ud83d\udcda Getting Started "))))))),g={description:"Raspberry Pi Platform Devices",title:"Raspberry Pi Platform Devices Guide",keywords:["Raspberry pi","single board computer","sbc","rpi"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Raspberry_Pi",last_update:{date:"08/08/2023",author:"thompcd"}},k=void 0,h={unversionedId:"Top_Brand/Raspberry_Pi/Raspberry_Pi",id:"Top_Brand/Raspberry_Pi/Raspberry_Pi",title:"Raspberry Pi Platform Devices Guide",description:"Raspberry Pi Platform Devices",source:"@site/docs/Top_Brand/Raspberry_Pi/Raspberry_Pi.mdx",sourceDirName:"Top_Brand/Raspberry_Pi",slug:"/Raspberry_Pi",permalink:"/Raspberry_Pi",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Raspberry_Pi/Raspberry_Pi.mdx",tags:[],version:"current",lastUpdatedBy:"thompcd",lastUpdatedAt:1691452800,formattedLastUpdatedAt:"Aug 8, 2023",frontMatter:{description:"Raspberry Pi Platform Devices",title:"Raspberry Pi Platform Devices Guide",keywords:["Raspberry pi","single board computer","sbc","rpi"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Raspberry_Pi",last_update:{date:"08/08/2023",author:"thompcd"}},sidebar:"ProductSidebar",previous:{title:"Grove - Toy Kit",permalink:"/Grove-Toy_Kit"},next:{title:"Raspberry Pi 3 Model B",permalink:"/Raspberry_Pi_3_Model_B"}},b={},_=[{value:"Why Choose Raspberry Pi?",id:"why-choose-raspberry-pi",level:2},{value:"Compare Raspberry Pi Models",id:"compare-raspberry-pi-models",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Hats (extension boards)",id:"hats-extension-boards",level:2},{value:"Kits + Courses",id:"kits--courses",level:2},{value:"Accessories",id:"accessories",level:2},{value:"\u2728 Contributor Project",id:"-contributor-project",level:2}],y={toc:_};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(o,{mdxType:"HeroSection"}),(0,n.kt)("h2",{id:"why-choose-raspberry-pi"},"Why Choose Raspberry Pi?"),(0,n.kt)(s,{mdxType:"FamilyValueSection"}),(0,n.kt)("h2",{id:"compare-raspberry-pi-models"},"Compare Raspberry Pi Models"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"}),(0,n.kt)("th",{parentName:"tr",align:"center"},"3B+"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Zero"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Zero 2 W/WH"),(0,n.kt)("th",{parentName:"tr",align:"center"},"4B"),(0,n.kt)("th",{parentName:"tr",align:"center"},"CM4"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Pico"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Pico WH"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"RAM"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1GB"),(0,n.kt)("td",{parentName:"tr",align:"center"},"512MB"),(0,n.kt)("td",{parentName:"tr",align:"center"},"512MB"),(0,n.kt)("td",{parentName:"tr",align:"center"},"2/4/8 GB"),(0,n.kt)("td",{parentName:"tr",align:"center"},"2/4/8 GB"),(0,n.kt)("td",{parentName:"tr",align:"center"},"264 KB"),(0,n.kt)("td",{parentName:"tr",align:"center"},"264 KB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Storage"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Micro SD"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Micro SD"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Micro SD"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Micro SD"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Up to 32GB eMMC"),(0,n.kt)("td",{parentName:"tr",align:"center"},"2 MB"),(0,n.kt)("td",{parentName:"tr",align:"center"},"2 MB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Processor Type"),(0,n.kt)("td",{parentName:"tr",align:"center"},"ARMv8 x86"),(0,n.kt)("td",{parentName:"tr",align:"center"},"ARMv6"),(0,n.kt)("td",{parentName:"tr",align:"center"},"ARMv6"),(0,n.kt)("td",{parentName:"tr",align:"center"},"ARMv8 x64"),(0,n.kt)("td",{parentName:"tr",align:"center"},"ARMv8 x64"),(0,n.kt)("td",{parentName:"tr",align:"center"},"ARM M0+"),(0,n.kt)("td",{parentName:"tr",align:"center"},"ARM M0+")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Processor Speed"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Quad Core @1.4GHz"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1GHz"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Quad Core @1GHz"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Quad Core @1.5GHz"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Quad Core @1.5GHz"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Dual Core @133MHz"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Dual Core @133MHz")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Form Factor"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Standard ","[a]"),(0,n.kt)("td",{parentName:"tr",align:"center"},"pHat"),(0,n.kt)("td",{parentName:"tr",align:"center"},"pHat"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Standard ","[a]"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Ultra-compact ","[c]"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Through-Hole SOM"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Through-Hole SOM")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Ethernet"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Wifi"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"Bluetooth"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"USB Ports"),(0,n.kt)("td",{parentName:"tr",align:"center"},"x4(A)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"x1(Micro)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"x1(Micro)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"x4(A),x1(C)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,n.kt)("td",{parentName:"tr",align:"center"},"x1(Micro)"),(0,n.kt)("td",{parentName:"tr",align:"center"},"x1(Micro)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"I2C Ports"),(0,n.kt)("td",{parentName:"tr",align:"center"},"x1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"x1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"x1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"x1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"x1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"x1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"x2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"SPI Ports"),(0,n.kt)("td",{parentName:"tr",align:"center"},"x1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"x1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"x1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"x1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"x1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"x1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"x2")))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Raspberry Pi 3 Model B")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/remote_connect/"},"Remotely connect to Raspberry Pi")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Raspberry_pi_CM4_update_eeprom/"},"Update EEPROM for Compute Module 4"))),(0,n.kt)("h2",{id:"hats-extension-boards"},"Hats (extension boards)"),(0,n.kt)(c,{mdxType:"HatSection"}),(0,n.kt)("h2",{id:"kits--courses"},"Kits + Courses"),(0,n.kt)(u,{mdxType:"KitSection"}),(0,n.kt)("h2",{id:"accessories"},"Accessories"),(0,n.kt)(d,{mdxType:"AccessorySection"}),(0,n.kt)("h2",{id:"-contributor-project"},"\u2728 Contributor Project"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This project is supported by the Seeed Studio ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=30957479"},"Contributor Project"),"."),(0,n.kt)("li",{parentName:"ul"},"Thanks ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/orgs/Seeed-Studio/projects/6/views/1?pane=issue&itemId=33963820"},"Corey's efforts")," and your work will be ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Honorary-Contributors/"},"exhibited"),".")),(0,n.kt)("p",null,"Updates to this page are in ",(0,n.kt)("a",{href:"https://github.com/orgs/Seeed-Studio/projects/6?pane=issue&itemId=30495963"},"in progress"),". Stay tuned!"))}f.isMDXComponent=!0}}]);