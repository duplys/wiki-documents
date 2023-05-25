"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[72162],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return r?a.createElement(h,o(o({ref:t},c),{},{components:r})):a.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},79277:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={description:"Grove - Finger-clip Heart Rate Sensor",title:"Grove - Finger-clip Heart Rate Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Finger-clip_Heart_Rate_Sensor",last_update:{date:"1/6/2023",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Biometric/Grove-Finger-clip_Heart_Rate_Sensor",id:"Sensor/Grove/Grove_Sensors/Biometric/Grove-Finger-clip_Heart_Rate_Sensor",title:"Grove - Finger-clip Heart Rate Sensor",description:"Grove - Finger-clip Heart Rate Sensor",source:"@site/docs/Sensor/Grove/Grove_Sensors/Biometric/Grove-Finger-clip_Heart_Rate_Sensor.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Biometric",slug:"/Grove-Finger-clip_Heart_Rate_Sensor",permalink:"/Grove-Finger-clip_Heart_Rate_Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Biometric/Grove-Finger-clip_Heart_Rate_Sensor.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1672963200,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{description:"Grove - Finger-clip Heart Rate Sensor",title:"Grove - Finger-clip Heart Rate Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Finger-clip_Heart_Rate_Sensor",last_update:{date:"1/6/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Sensor - Biomedicine(introduction)",permalink:"/Sensor_biomedicine"},next:{title:"Grove - Finger-clip Heart Rate Sensor with shell",permalink:"/Grove-Finger-clip_Heart_Rate_Sensor_with_shell"}},s={},p=[{value:"Specification",id:"specification",level:2},{value:"Interface Function",id:"interface-function",level:2},{value:"Usage",id:"usage",level:2},{value:"Hardware Installation",id:"hardware-installation",level:3},{value:"Software Part",id:"software-part",level:3},{value:"With Arduino",id:"with-arduino",level:4},{value:"With Mbed",id:"with-mbed",level:4},{value:"Upgrade firmware",id:"upgrade-firmware",level:4},{value:"Hardware Connection",id:"hardware-connection",level:5},{value:"Software",id:"software",level:5},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support &amp; Product Descussion",id:"tech-support--product-descussion",level:2}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Grove-Finger-clip_Heart_Rate_Sensor.jpg"})),(0,n.kt)("p",null,"Grove - Finger-clip Heart Rate Sensor is based on PAH8001EI-2G, a high performance and low power CMOS-process optical sensor with Green LED and DSP integrated serving as a Heart Rate Detection(HRD) sensor. This module is based on optical technology which measures the variation human blood movement in the vessel. Low power consumption and flexible power saving mode make it suitable for wearable device. Cause the heart rate sensor chip need high processing speed for the algorithm of heart rate data(), this module integrate a STM32, reserved SWD interface allow users to reprogram the STM32."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-Finger-clip-Heart-Rate-Sensor-p-2425.html",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Ultra-low power consumption, power saving mode during time of no touch movement")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Flexible sleep rate control")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Integrated the STM32F103")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"I2C interface")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Heart rate sensor area just 3.0 x 4.7mm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Reserved SWD interface")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Working temperature: -20 ~ +60\u2103"))),(0,n.kt)("h2",{id:"interface-function"},"Interface Function"),(0,n.kt)("hr",null),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Finger-clip_Heart_Rate_Sensor_TOP.jpg"})),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Finger-clip_Heart_Rate_Sensor_Bottom.jpg"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"1: Grove Interface")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"2: Reserved SWD Interface for programming to STM32")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"3: Heart Rate Sensor"))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Here, We will provide an example here to show you how to use this sensor."),(0,n.kt)("h3",{id:"hardware-installation"},"Hardware Installation"),(0,n.kt)("p",null,"Link the Sensor to I2C port of Seeeduino with Grove Cable."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Finger-clip_Heart_Rate_Sensor_Connect.jpg"})),(0,n.kt)("h3",{id:"software-part"},"Software Part"),(0,n.kt)("h4",{id:"with-arduino"},"With Arduino"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Hardware Serial")),(0,n.kt)("p",null,"Copy the following code into a new sketch of Arduino and upload the sketch, then you can get heart rate from the Serial Monitor.\nIt may take about a minute to get valid heart rate after you touch your finger with sensor."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c++"},'#include <Wire.h>\nvoid setup() {\n    Serial.begin(9600);\n    Serial.println("heart rate sensor:");\n    Wire.begin();\n}\nvoid loop() {\n    Wire.requestFrom(0xA0 >> 1, 1);    // request 1 bytes from slave device\n    while(Wire.available()) {          // slave may send less than requested\n        unsigned char c = Wire.read();   // receive heart rate value (a byte)\n        Serial.println(c, DEC);         // print heart rate value\n    }\n    delay(500);\n}\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Software Serial")),(0,n.kt)("p",null,"The standard I2C library for the Arduino is the Wire Library. While this library does not work when the I2C pins SDA/SCL are in use already for other purposes. So you can use the SoftwareI2C. You can connect the SCL to D2 and SDA to D3. Please download the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/felias-fogg/SoftI2CMaster"},"SoftI2CMaster library")," and follow ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library/"},"How to install arduino library")," to setup the library. Copy the following code into a new sketch of Arduino and upload the sketch, then you can get heart rate from the Serial Monitor.\nIt may take about a minute to get valid heart rate after you touch your finger with sensor."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c++"},'#define SDA_PORT PORTD\n#define SDA_PIN 3\n#define SCL_PORT PORTD\n#define SCL_PIN 2\n#include <SoftI2CMaster.h>\n#include <SoftWire.h>\nSoftWire Wire = SoftWire();\n\nvoid setup() {\n    Serial.begin(9600);\n    Serial.println("heart rate sensor:");\n    Wire.begin();\n}\nvoid loop() {\n    Wire.requestFrom(0xA0 >> 1, 1);    // request 1 bytes from slave device\n    while(Wire.available()) {          // slave may send less than requested\n        unsigned char c = Wire.read();   // receive heart rate value (a byte)\n        Serial.println(c, DEC);         // print heart rate value\n    }\n    delay(500);\n}\n')),(0,n.kt)("h4",{id:"with-mbed"},"With Mbed"),(0,n.kt)("p",null,"Read a byte from I2C device 0xA0 (8 bit address), it's the heart rate."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c++"},'#include "mbed.h"\n\nI2C i2c(I2C_SDA, I2C_SCL);\nconst int addr = 0xA0;\n\nint main() {\n    char heart_rate;\n    while (1) {\n        i2c.read(addr, &heart_rate, 1);\n        printf("heart rate: = %d\\r\\n", heart_rate);\n    }\n}\n')),(0,n.kt)("h4",{id:"upgrade-firmware"},"Upgrade firmware"),(0,n.kt)("p",null,"We can upgrade the firmware of the heart rate sensor through its bootloader."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The bootloader is located at 0x08000000 - 0x08002000"),(0,n.kt)("li",{parentName:"ul"},"The application is located at 0x08002000 - 0x08020000")),(0,n.kt)("h5",{id:"hardware-connection"},"Hardware Connection"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Firmware_Connection.jpg"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/CH340G-USB-to-Serial-%28TTL%29-Module%26Adapter-p-2359.html"},"USB to serial adapter")," is required"),(0,n.kt)("li",{parentName:"ul"},"UART (the Grove connector supports I2C and UART),when upgrade the firmware, the Grove interface run in UART mode.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Grove-Finger-clip_Heart_Rate_Sensor"),(0,n.kt)("th",{parentName:"tr",align:null},"USB to Serial (TTL) Module&Adapter"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"VCC"),(0,n.kt)("td",{parentName:"tr",align:null},"VCC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"GND")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SDA"),(0,n.kt)("td",{parentName:"tr",align:null},"TX")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SCL"),(0,n.kt)("td",{parentName:"tr",align:null},"RX")))),(0,n.kt)("h5",{id:"software"},"Software"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Download ",(0,n.kt)("a",{parentName:"li",href:"https://ttssh2.osdn.jp/index.html.en"},"Tera Term")," Software"),(0,n.kt)("li",{parentName:"ul"},"Set UART Baud Rate as 115200")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/BaudRate_Setting.png"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Download ",(0,n.kt)("a",{parentName:"p",href:"ttps://github.com/SeeedDocument/Grove-Finger-clip_Heart_Rate_Sensor/raw/master/res/Grove-Finger-clip_Heart_Rate_Sensor_bin.zip"},"firmware"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Select Grove - Finger-clip Heart Rate Sensor.bin"))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Select_firmware.png"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Downloading the firmware to Grove-Finger-clip_Heart_Rate_Sensor")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Firmware_download.png"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Firmware download successfully")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/img/Finish_Downloading.png"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Grove - Finger-clip Heart Rate Sensor provide heart rate measurements.However, it is not a medical device. To use the heart rate detection sensor on your wrist, finger or palm, you must:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Fasten the sensor snugly makes tight contact with your skin and maintain table (no motion) while measuring to acquire accurate\nheart rate.If the sensor does not contact the skin well or have extreme motion while measuring that the heart rate will not\nbe measured correctly.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Sensor's performance is optimized with greater blood flow. On cold days or users have poor circulation(ex: cold hands,\nfingers and cold feet) the sensor performance (heart rate accuracy) can be impacted because of lower blood flow in the\nmeasuring position."))),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/res/Grove-Finger-clip_Heart_Rate_Sensor_v1.0_sch_pcb.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resource"},"Resource"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/res/Grove-Finger-clip_Heart_Rate_Sensor_v1.0_sch_pcb.zip"},"Grove - Finger-clip Heart Rate Sensor eagle file"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Finger-clip_Heart_Rate_Sensor/res/Grove-Finger-clip_Heart_Rate_Sensor_bin.zip"},"Grove - Finger-clip Heart Rate Sensor bin file")))),(0,n.kt)("h2",{id:"tech-support--product-descussion"},"Tech Support & Product Descussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}d.isMDXComponent=!0}}]);