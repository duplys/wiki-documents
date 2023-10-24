"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[96986],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),h=o,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},71253:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={description:"SenseCAP_Tracker_T1000-A/B_FAQ",title:"FAQ",keywords:["Tracker","FAQ"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/faq_for_SenseCAP_T1000",last_update:{date:"9/20/2023",author:"Jessie"}},i=void 0,l={unversionedId:"Sensor/SenseCAP/SenseCAP_T1000_Tracker/FAQ",id:"Sensor/SenseCAP/SenseCAP_T1000_Tracker/FAQ",title:"FAQ",description:"SenseCAP_Tracker_T1000-A/B_FAQ",source:"@site/docs/Sensor/SenseCAP/SenseCAP_T1000_Tracker/FAQ.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_T1000_Tracker",slug:"/faq_for_SenseCAP_T1000",permalink:"/faq_for_SenseCAP_T1000",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_T1000_Tracker/FAQ.md",tags:[],version:"current",lastUpdatedBy:"Jessie",lastUpdatedAt:1695168e3,formattedLastUpdatedAt:"Sep 20, 2023",frontMatter:{description:"SenseCAP_Tracker_T1000-A/B_FAQ",title:"FAQ",keywords:["Tracker","FAQ"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/faq_for_SenseCAP_T1000",last_update:{date:"9/20/2023",author:"Jessie"}},sidebar:"ProductSidebar",previous:{title:"Akenza Integrated(via TTS)",permalink:"/SenseCAP_T1000_Tracker_Akenza"},next:{title:"SenseCAP Industrial Sensors Guide",permalink:"/SenseCAP_Sensor_Intro"}},s={},c=[{value:"Location Related",id:"location-related",level:2},{value:"Why there is no GPS location data?",id:"why-there-is-no-gps-location-data",level:3},{value:"Why doesn&#39;t Wi-Fi or Bluetooth location display on the SenseCAP App map?",id:"why-doesnt-wi-fi-or-bluetooth-location-display-on-the-sensecap-app-map",level:3},{value:"Bluetooth Positioning",id:"bluetooth-positioning",level:3},{value:"Battery Related",id:"battery-related",level:2},{value:"Charge Status",id:"charge-status",level:3},{value:"How long does it take to fully charge?",id:"how-long-does-it-take-to-fully-charge",level:3},{value:"Can it continue uploading data while charging?",id:"can-it-continue-uploading-data-while-charging",level:3},{value:"Battery Life",id:"battery-life",level:3}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"location-related"},"Location Related"),(0,o.kt)("h3",{id:"why-there-is-no-gps-location-data"},"Why there is no GPS location data?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"GPS location may not be available when the tracker is indoors. GNSS positioning requires an open outdoor environment. If you're indoors, the GPS location may be time out due to the weak signal. Make sure the device is placed outdoors for GPS accuracy.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Ensure proper device installation by orienting the device with its front facing upward to prevent obstruction of the antenna's position"))),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/install.png",alt:"pir",width:700,height:"auto"})),(0,o.kt)("h3",{id:"why-doesnt-wi-fi-or-bluetooth-location-display-on-the-sensecap-app-map"},"Why doesn't Wi-Fi or Bluetooth location display on the SenseCAP App map?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Wi-Fi location requires a third-party map parsing service, which must be invoked by users for parsing. Currently, the Mate App supports GNSS positioning display only.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Bluetooth positioning relies on Bluetooth beacons and their respective locations for accurate tracking.\nblock the position of the antenna. "))),(0,o.kt)("h3",{id:"bluetooth-positioning"},"Bluetooth Positioning"),(0,o.kt)("p",null,"To use Bluetooth location, users need to install some ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/E5-Location-Beacon-p-5791.html"},"Bluetooth beacons")," beforehand, Bluetooth positioning algorithm, and a custom map."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deploy Bluetooth beacons")),(0,o.kt)("p",null,"A Bluetooth beacon is a small and wireless battery-powered radio transmitter that uses BLE as its\ntransmission protocol. This mini-radio transmission device can be \u201cdiscovered\u201d and seen by all BLE\nscanners within a certain radius. The Bluetooth beacon, however, cannot \u201csee\u201d anyone back."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/BLE1.png",alt:"pir",width:700,height:"auto"})),(0,o.kt)("p",null,"Bluetooth beacons work by transmitting packets of data that are picked up by the tracker via radio\nwaves. The tracker periodically scans around up to 8 Bluetooth beacons and sorts according\nto RSSI, uploading the UUID and RSSI of the 3 Bluetooth beacons with the best signal\nstrength via LoRa."),(0,o.kt)("p",null,"A Bluetooth beacon has a theoretical maximum radius distance of less than 100m. Most Bluetooth\nbeacons can reliably transmit up to approximately 30 meters without any physical obstructions. A\ntypical operating range is around 2 to 5 meters, depending on the transmit power. The higher the\nrange, the higher the battery consumption."),(0,o.kt)("p",null,"It is necessary to consider the density of the beacon deployment according to the indoor situation,\nsuch as whether there is shelter, which also determines the accuracy of the Bluetooth positioning.\nThere are plenty of tutorials on YouTube or Google on how to install and use beacons."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bluetooth positioning algorithm and map")),(0,o.kt)("p",null,"There are many experts have provided Bluetooth based positioning calculation methods, the most\ncommon is trilateral positioning method, refer to the article: ",(0,o.kt)("a",{parentName:"p",href:"https://www.researchgate.net/publication/338241733_A_Comparison_Analysis_of_BLE-Based_Algorithms_for_Localization_in_Industrial_Environments"},"A Comparison Analysis of BLE-Based\nAlgorithms for Localization in Industrial Environments"),". The SenseCAP tracker provides the UUID and RSSI required by the algorithm, and then calculates the final target location based on the actual deployment location of the user."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/SenseCAP/Tracker/BLE2.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("h2",{id:"battery-related"},"Battery Related"),(0,o.kt)("h3",{id:"charge-status"},"Charge Status"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Status"),(0,o.kt)("th",{parentName:"tr",align:null},"Indicator"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Charging"),(0,o.kt)("td",{parentName:"tr",align:null},"The LED will flash once every 3 seconds.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Fully charged"),(0,o.kt)("td",{parentName:"tr",align:null},"The LED will stay always on.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Charging anomaly"),(0,o.kt)("td",{parentName:"tr",align:null},"When the device is charged below 0 \xb0 C or above 45 \xb0 C, the device will enter the charge protection state and cannot be charged.",(0,o.kt)("br",null),"The LED will flash rapidly.")))),(0,o.kt)("h3",{id:"how-long-does-it-take-to-fully-charge"},"How long does it take to fully charge?"),(0,o.kt)("p",null,"It typically takes about ",(0,o.kt)("strong",{parentName:"p"},"2 hours")," to fully charge."),(0,o.kt)("h3",{id:"can-it-continue-uploading-data-while-charging"},"Can it continue uploading data while charging?"),(0,o.kt)("p",null,"Yes, it can continue uploading data while charging."),(0,o.kt)("h3",{id:"battery-life"},"Battery Life"),(0,o.kt)("p",null,"Battery life depends on factors such as uplink interval, sensor usage, LoRa transmission distance, and operating temperature. Predicted battery life is based on a typical working environment (25\xb0C) and serves as a reference. Actual battery life may vary."),(0,o.kt)("p",null,"For detailed battery life calculations, refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/products/SenseCAP/SenseCAP_Tracker/Trcaker_Battery_%20Life_Calculation_T1000_AB.xlsx"},"Battery Life Calculation Form"),"."))}u.isMDXComponent=!0}}]);