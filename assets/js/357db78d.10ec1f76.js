"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[83971],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(a),c=n,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return a?r.createElement(k,l(l({ref:t},d),{},{components:a})):r.createElement(k,l({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},80975:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={description:"Grove - CO2 & Temperature & Humidity Sensor (SCD30)",title:"Grove - CO2 & Temperature & Humidity Sensor (SCD30)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-CO2_Temperature_Humidity_Sensor-SCD30",last_update:{date:"12/30/2022",author:"jianjing Huang"}},l=void 0,o={unversionedId:"Sensor/Grove/Grove_Sensors/All_in_one/Grove-CO2_Temperature_Humidity_Sensor-SCD30",id:"Sensor/Grove/Grove_Sensors/All_in_one/Grove-CO2_Temperature_Humidity_Sensor-SCD30",title:"Grove - CO2 & Temperature & Humidity Sensor (SCD30)",description:"Grove - CO2 & Temperature & Humidity Sensor (SCD30)",source:"@site/docs/Sensor/Grove/Grove_Sensors/All_in_one/Grove-CO2_Temperature_Humidity_Sensor-SCD30.md",sourceDirName:"Sensor/Grove/Grove_Sensors/All_in_one",slug:"/Grove-CO2_Temperature_Humidity_Sensor-SCD30",permalink:"/Grove-CO2_Temperature_Humidity_Sensor-SCD30",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/All_in_one/Grove-CO2_Temperature_Humidity_Sensor-SCD30.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1672358400,formattedLastUpdatedAt:"Dec 30, 2022",frontMatter:{description:"Grove - CO2 & Temperature & Humidity Sensor (SCD30)",title:"Grove - CO2 & Temperature & Humidity Sensor (SCD30)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-CO2_Temperature_Humidity_Sensor-SCD30",last_update:{date:"12/30/2022",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - CO2 & Temperature & Humidity Sensor (SCD41)",permalink:"/Grove-CO2_&_Temperature_&_Humidity_Sensor-SCD41"},next:{title:"Grove - Light Gesture Color Proximity Sensor (TMG39931)",permalink:"/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931"}},s={},p=[{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2},{value:"Version",id:"version",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Feature",id:"feature",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Calibration and Placement",id:"calibration-and-placement",level:2},{value:"Placement",id:"placement",level:3},{value:"Calibration",id:"calibration",level:3},{value:"Play With Wio Terminal (ArduPy)",id:"play-with-wio-terminal-ardupy",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Descussion",id:"tech-support--product-descussion",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/main.jpg"})),(0,n.kt)("p",null,"The Grove - CO2 & Temperature & Humidity Sensor (SCD30) is a high precision carbon dioxide sensor, which is based on Sensirion SCD30. The measuring range of this sensor is 0 ppm-40'000 ppm, and the measurement accuracy can reach to \xb1(30 ppm + 3%) between 400ppm to 10'000ppm.  "),(0,n.kt)("p",null,"In addition to the Non-Dispersive Infrared(NDIR) measurement technology for CO2 detection, the SCD30 integrates Sensirion humidity and temperature sensors on the same sensor module."),(0,n.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,n.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html"},(0,n.kt)("strong",null,(0,n.kt)("span",null,(0,n.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,n.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,n.kt)("p",null,"With the SenseCAP ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,n.kt)("p",null,"SenseCAP S210x series industrial sensors provide an out-of-box experience for environmental sensing. Please refer to the S2103 Wireless CO2, Temperature, and Humidity Sensor with higher performance and robustness for air quality monitoring. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device"},"SenseCAP S210x")," for your next successful industrial project."),(0,n.kt)("table",{style:{marginLeft:"auto",marginRight:"auto"}},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",{align:"center"},(0,n.kt)("font",{size:"{4}"},(0,n.kt)("strong",null,"SenseCAP Industrial Sensor")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("div",{align:"center"},(0,n.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,n.kt)("img",{width:"20%",src:"https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png"}))))),(0,n.kt)("tr",null,(0,n.kt)("td",{align:"center"},(0,n.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,n.kt)("strong",null,"S2103 Air Temp & Humidity & CO2")))))),(0,n.kt)("h2",{id:"version"},"Version"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Changes"),(0,n.kt)("th",{parentName:"tr",align:null},"Released Date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grove - CO2 & Temperature & Humidity Sensor (SCD30) V1.0"),(0,n.kt)("td",{parentName:"tr",align:null},"Initial"),(0,n.kt)("td",{parentName:"tr",align:null},"Dec 2018")))),(0,n.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Air Purifier"),(0,n.kt)("li",{parentName:"ul"},"Environmental Monitoring"),(0,n.kt)("li",{parentName:"ul"},"Plant Environmental Monitoring")),(0,n.kt)("h2",{id:"feature"},"Feature"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"NDIR CO2 sensor technology"),(0,n.kt)("li",{parentName:"ul"},"Integrated temperature and humidity sensor"),(0,n.kt)("li",{parentName:"ul"},"Best performance-to-price ratio"),(0,n.kt)("li",{parentName:"ul"},"Dual-channel detection for superior stability"),(0,n.kt)("li",{parentName:"ul"},"Digital interface I2C"),(0,n.kt)("li",{parentName:"ul"},"Low power consumption"),(0,n.kt)("li",{parentName:"ul"},"Ultra-long sensor lifetime (15 years)")),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Supply voltage"),(0,n.kt)("td",{parentName:"tr",align:null},"3.3V / 5V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operating temperature"),(0,n.kt)("td",{parentName:"tr",align:null},"0 \u2013 50\u2103")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Storage temperature"),(0,n.kt)("td",{parentName:"tr",align:null},"- 40\xb0C \u2013 70\xb0C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Humidity operating conditions"),(0,n.kt)("td",{parentName:"tr",align:null},"0 \u2013 95 %RH")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Sensor lifetime"),(0,n.kt)("td",{parentName:"tr",align:null},"15 years")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Interface"),(0,n.kt)("td",{parentName:"tr",align:null},"I2C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I2C Address"),(0,n.kt)("td",{parentName:"tr",align:null},"0x61")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Size"),(0,n.kt)("td",{parentName:"tr",align:null},"L: 61mm W: 42mm H: 19mm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Weight"),(0,n.kt)("td",{parentName:"tr",align:null},"19.7g")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Package Size"),(0,n.kt)("td",{parentName:"tr",align:null},"L: 110mm W: 70mm H: 40mm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Gross weight"),(0,n.kt)("td",{parentName:"tr",align:null},"27g")))),(0,n.kt)("div",{align:"center"},(0,n.kt)("b",null,"Table 1."),(0,n.kt)("i",null,"General Specification")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Conditions"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CO2 measurement range"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"0 \u2013 40\u2019000 ppm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Accuracy"),(0,n.kt)("td",{parentName:"tr",align:null},"400ppm \u2013 10'000ppm"),(0,n.kt)("td",{parentName:"tr",align:null},"\xb1 (30 ppm + 3%)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Repeatability"),(0,n.kt)("td",{parentName:"tr",align:null},"400ppm \u2013 10'000ppm"),(0,n.kt)("td",{parentName:"tr",align:null},"10ppm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Response time"),(0,n.kt)("td",{parentName:"tr",align:null},"\u03c463%"),(0,n.kt)("td",{parentName:"tr",align:null},"20 s")))),(0,n.kt)("div",{align:"center"},(0,n.kt)("b",null,"Table 2."),(0,n.kt)("i",null,"CO2 Sensor Specifications")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Conditions"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Humidity measurement range"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"0 %RH \u2013 100 %RH")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Accuracy"),(0,n.kt)("td",{parentName:"tr",align:null},"0 \u2013 50\xb0C, 0 \u2013 100%RH"),(0,n.kt)("td",{parentName:"tr",align:null},"\xb12 %RH")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Repeatability"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"0.1 %RH")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Response time"),(0,n.kt)("td",{parentName:"tr",align:null},"\u03c463%"),(0,n.kt)("td",{parentName:"tr",align:null},"8 s")))),(0,n.kt)("div",{align:"center"},(0,n.kt)("b",null,"Table 3."),(0,n.kt)("i",null,"Humidity Sensor Specifications")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Conditions"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Temperature measurement range"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"-40\xb0C \u2013 120\xb0C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Accuracy"),(0,n.kt)("td",{parentName:"tr",align:null},"0 \u2013 50\xb0C"),(0,n.kt)("td",{parentName:"tr",align:null},"\xb10.5\xb0C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Repeatability"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"0.1\xb0C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Response time"),(0,n.kt)("td",{parentName:"tr",align:null},"\u03c463%"),(0,n.kt)("td",{parentName:"tr",align:null},"> 2 s")))),(0,n.kt)("div",{align:"center"},(0,n.kt)("b",null,"Table 4."),(0,n.kt)("i",null,"Temperature Sensor Specifications")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Conditions"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Average current"),(0,n.kt)("td",{parentName:"tr",align:null},"Update interval 2 s"),(0,n.kt)("td",{parentName:"tr",align:null},"19 mA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Max. current"),(0,n.kt)("td",{parentName:"tr",align:null},"During measurement"),(0,n.kt)("td",{parentName:"tr",align:null},"75 mA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Energy consumption"),(0,n.kt)("td",{parentName:"tr",align:null},"1 measurement"),(0,n.kt)("td",{parentName:"tr",align:null},"120 mJ")))),(0,n.kt)("div",{align:"center"},(0,n.kt)("b",null,"Table 5."),(0,n.kt)("i",null,"Electrical Specifications")),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("div",{align:"center"},(0,n.kt)("figure",null,(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/pinout.jpg",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/pinout.jpg"}))))),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg"})))))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,n.kt)("h4",{id:"hardware"},"Hardware"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Materials required")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove-CO2 & T&H SCD30"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/thumbnial.png"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html"},"Get ONE Now"))))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"In addition, you can consider our new ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html"},"Seeeduino Lotus M0+"),", which is equivalent to the combination of Seeeduino V4.2 and Baseshield.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"  ",(0,n.kt)("strong",{parentName:"p"},"1")," Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"},"here")," to buy"),(0,n.kt)("p",{parentName:"admonition"},"  ",(0,n.kt)("strong",{parentName:"p"},"2")," Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html"},"here")," to buy.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Hardware Connection")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Connect the Grove - CO2 & Temperature & Humidity Sensor (SCD30) to the ",(0,n.kt)("strong",{parentName:"p"},"I2C")," port of the Base Shield.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Connect Seeeduino to PC via a USB cable."))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/connect.png"})),(0,n.kt)("h4",{id:"software"},"Software"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"    If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.\n"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_SCD30"},"Seeed SCD30 Library")," Library from Github.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Restart the Arduino IDE. Open the example, you can open it in the following three ways\uff1a\na. Open it directly in the Arduino IDE via the path: ",(0,n.kt)("strong",{parentName:"p"},"File --\x3e Examples --\x3eGrove_scd30_co2_sensor--\x3eSCD30_Example"),"."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/c1.jpg"})),(0,n.kt)("p",{parentName:"li"},"  b. Open it in your computer by click the ",(0,n.kt)("strong",{parentName:"p"},"SCD30_Example.ino")," which you can find in the folder ",(0,n.kt)("strong",{parentName:"p"},"XXXX\\Arduino\\libraries\\Seeed_SCD30-master\\examples\\SCD30_Example"),", ",(0,n.kt)("strong",{parentName:"p"},"XXXX")," is the location you installed the Arduino IDE."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/c3.jpg"})),(0,n.kt)("p",{parentName:"li"},"  c. Or, you can just click the icon ",(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg",alt:null})," in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C++"},'#include "SCD30.h"\n\n#if defined(ARDUINO_ARCH_AVR)\n #pragma message("Defined architecture for ARDUINO_ARCH_AVR.")\n #define SERIAL Serial\n#elif defined(ARDUINO_ARCH_SAM)\n #pragma message("Defined architecture for ARDUINO_ARCH_SAM.")\n #define SERIAL SerialUSB\n#elif defined(ARDUINO_ARCH_SAMD)\n #pragma message("Defined architecture for ARDUINO_ARCH_SAMD.") \n #define SERIAL SerialUSB\n#elif defined(ARDUINO_ARCH_STM32F4)\n #pragma message("Defined architecture for ARDUINO_ARCH_STM32F4.")\n #define SERIAL SerialUSB\n#else\n #pragma message("Not found any architecture.")\n #define SERIAL Serial\n#endif\n\n\n\nvoid setup()\n{\n    Wire.begin();\n    SERIAL.begin(115200);\n    SERIAL.println("SCD30 Raw Data");\n    scd30.initialize();\n}\n\nvoid loop()\n{\n    float result[3] = {0};\n    \n    if(scd30.isAvailable())\n    {\n        scd30.getCarbonDioxideConcentration(result);\n        SERIAL.print("Carbon Dioxide Concentration is: ");\n        SERIAL.print(result[0]);\n        SERIAL.println(" ppm");\n        SERIAL.println(" ");\n        SERIAL.print("Temperature = ");\n        SERIAL.print(result[1]);\n        SERIAL.println(" \u2103");\n        SERIAL.println(" ");\n        SERIAL.print("Humidity = ");\n        SERIAL.print(result[2]);\n        SERIAL.println(" %");\n        SERIAL.println(" ");\n        SERIAL.println(" ");\n        SERIAL.println(" ");\n    }\n    \n    delay(2000);\n}\n\n')),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"    The library file may be updated. This code may not be applicable to the updated library file, so we recommend that you use the first two methods.\n"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Upload the demo. If you do not know how to upload the code, please check ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,n.kt)("admonition",{title:"success",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"  If everything goes well, the raw data of the Grove - CO2 & Temperature & Humidity Sensor (SCD30) should be able to read from Serial Monitor.")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/c2.jpg"})),(0,n.kt)("h2",{id:"calibration-and-placement"},"Calibration and Placement"),(0,n.kt)("p",null,"In order to get more accurate results in a practical scenario, you need to pay attention to the following two points:  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"The correct placement  "))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ol",{parentName:"li",start:2},(0,n.kt)("li",{parentName:"ol"},"Calibration")))),(0,n.kt)("h3",{id:"placement"},"Placement"),(0,n.kt)("p",null,"Please refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/CD_AN_SCD30_Design-In_Guidelines_D2.pdf"},"SCD30 Design-In Guidelines")," for the correct placement."),(0,n.kt)("h3",{id:"calibration"},"Calibration"),(0,n.kt)("p",null,"When activated for the first time a period of minimum 7 days is needed so that the algorithm can find its initial parameter set for ASC. The sensor has to be exposed to fresh air for at least 1 hour every day. Also during that period, the sensor may not be disconnected from the power supply, otherwise the procedure to find calibration parameters is aborted and has to be restarted from the beginning. The successfully calculated parameters are stored in non-volatile memory of the SCD30 having the effect that after a restart the previously found parameters for ASC are still present. For more detail about the calibration, please refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Sensirion_CO2_Sensors_SCD30_Interface_Description.pdf"},"Interface Description Sensirion SCD30 Sensor Module")),(0,n.kt)("p",null,"There are two ino sample in the SCD30 library foldor, you can run the ",(0,n.kt)("inlineCode",{parentName:"p"},"SCD30_auto_calibration.ino")," to start the calibration."),(0,n.kt)("h3",{id:"play-with-wio-terminal-ardupy"},"Play With Wio Terminal (ArduPy)"),(0,n.kt)("h4",{id:"hardware-1"},"Hardware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Wio Terminal"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove-CO2 & T&H SCD30"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/thumbnial.png"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-CO2-Temperature-Humidity-Sensor-SCD30-p-2911.html"},"Get One Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Connect Grove-CO2 & T&H SCD30 to the ",(0,n.kt)("strong",{parentName:"p"},"I2C")," Grove port of Wio Terminal.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Connect the Wio Terminal to PC through USB Type-C cable."))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/WT-SCD30.png"})),(0,n.kt)("h4",{id:"software-1"},"Software"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Follow ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/ArduPy/"},(0,n.kt)("strong",{parentName:"a"},"ArduPy Getting Started"))," to configure the ArduPy development environment on Wio Terminal.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Make sure that the ArduPy firmware is flashed into Wio Terminal. For more information, please follow ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/ArduPy/#ardupy-aip-cli-getting-started"},(0,n.kt)("strong",{parentName:"a"},"here")),"."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"aip install Seeed-Studio/seeed-ardupy-scd30\naip build\naip flash\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Copy the following code and save it as ",(0,n.kt)("inlineCode",{parentName:"li"},"ArduPy-scd30.py"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'from arduino import grove_scd30\nfrom machine import LCD\nfrom machine import Sprite\nimport time\n\nscd30 = grove_scd30()\nlcd = LCD()\nspr = Sprite(lcd) # Create a buff\n\ndef main():\n    spr.createSprite(320, 240)\n    while True:\n        spr.setTextSize(2)\n        spr.fillSprite(spr.color.BLACK)\n        spr.setTextColor(lcd.color.ORANGE)\n        spr.drawString("SCD30 Reading", 90, 10)\n        spr.drawFastHLine(40, 35, 240, lcd.color.DARKGREY)\n        spr.setTextColor(lcd.color.WHITE)\n        spr.drawString("- CO2 Level: ", 20, 50)\n        spr.drawString("- Temperature: ", 20, 80)\n        spr.drawString("- Humidity: ", 20, 110)\n\n        if(scd30.isAvailable()):\n            data = scd30.getCarbonDioxideConcentration()\n            spr.drawFloat(data[0], 2,220,50) # CO2\n            spr.drawFloat(data[1], 2, 220,80)\n            spr.drawFloat(data[2], 2, 220,110)\n            spr.pushSprite(0,0)\n        time.sleep_ms(500)\n\n        print("\\nCarbon Dioxide Concentration:", data[0])\n        print("Temperature:", data[1])\n        print("Humidity:", data[2])\n\nif __name__ == "__main__":\n    main()\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Save the ",(0,n.kt)("inlineCode",{parentName:"li"},"ArduPy-scd30.py")," in a location that you know. Run the following command and ",(0,n.kt)("strong",{parentName:"li"},"replace")," ",(0,n.kt)("inlineCode",{parentName:"li"},"<YourPythonFilePath>")," with your ",(0,n.kt)("inlineCode",{parentName:"li"},"ArduPy-scd30.py")," location.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'aip shell -n -c "runfile <YourPythonFilePath>"\n# Example:\n# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-scd30.py"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 5.")," We will see the 3 data values display on terminal as below, and displaying on the Wio Terminal LCD screen.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-scd30.py"\nPositional argument (/dev/cu.usbmodem1414301) takes precedence over --open.\nConnected to ardupy\nCarbon Dioxide Concentration: 2360.639\nTemperature: 29.18707\nHumidity: 66.88538\n\nCarbon Dioxide Concentration: 2360.639\nTemperature: 29.18707\nHumidity: 66.88538\n\nCarbon Dioxide Concentration: 2500.573\nTemperature: 29.17372\nHumidity: 66.61072\n')),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/img/Ardupy-SCD30.png"})),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Grove-CO2_Temperature_Humidity_Sensor-SCD30.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[ZIP]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Grove-CO2_Temperature_Humidity_Sensor-SCD30.zip"},"Grove - CO2 & Temperature & Humidity Sensor (SCD30) Schematic file")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/CD_AN_SCD30_Design-In_Guidelines_D2.pdf"},"SCD30 Design-In Guideline")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Sensirion_CO2_Sensors_SCD30_Datasheet.pdf"},"SCD30 Datasheet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-CO2-Temperature-Humidity-Sensor-SCD30/res/Sensirion_CO2_Sensors_SCD30_Interface_Description.pdf"},"SCD30 Interface Description"))),(0,n.kt)("h2",{id:"tech-support--product-descussion"},"Tech Support & Product Descussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);