"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[91926],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=i.createContext({}),s=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(r),c=n,h=d["".concat(p,".").concat(c)]||d[c]||u[c]||a;return r?i.createElement(h,o(o({ref:t},m),{},{components:r})):i.createElement(h,o({ref:t},m))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}c.displayName="MDXCreateElement"},29973:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=r(87462),n=(r(67294),r(3905));const a={description:"Grove - 1-Wire Thermocouple Amplifier(MAX31850K)",title:"Grove - 1-Wire Thermocouple Amplifier(MAX31850K)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-1-Wire_Thermocouple_Amplifier-MAX31850K",last_update:{date:"1/4/2023",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Temperature/Grove-1-Wire_Thermocouple_Amplifier-MAX31850K",id:"Sensor/Grove/Grove_Sensors/Temperature/Grove-1-Wire_Thermocouple_Amplifier-MAX31850K",title:"Grove - 1-Wire Thermocouple Amplifier(MAX31850K)",description:"Grove - 1-Wire Thermocouple Amplifier(MAX31850K)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Temperature/Grove-1-Wire_Thermocouple_Amplifier-MAX31850K.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Temperature",slug:"/Grove-1-Wire_Thermocouple_Amplifier-MAX31850K",permalink:"/Grove-1-Wire_Thermocouple_Amplifier-MAX31850K",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Temperature/Grove-1-Wire_Thermocouple_Amplifier-MAX31850K.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1672790400,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{description:"Grove - 1-Wire Thermocouple Amplifier(MAX31850K)",title:"Grove - 1-Wire Thermocouple Amplifier(MAX31850K)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-1-Wire_Thermocouple_Amplifier-MAX31850K",last_update:{date:"1/4/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - Temperature & Humidity Sensor(SHT4x)",permalink:"/Grove-SHT4x"},next:{title:"Grove - I2C Thermocouple Amplifier (MCP9600)",permalink:"/Grove-I2C_Thermocouple_Amplifier-MCP9600"}},p={},s=[{value:"Version",id:"version",level:2},{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Applications",id:"applications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Pin Map",id:"pin-map",level:3},{value:"Schematic",id:"schematic",level:3},{value:"Assembling Drawing",id:"assembling-drawing",level:3},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Descussion",id:"tech-support--product-descussion",level:2},{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2}],m={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/main.JPG"})),(0,n.kt)("p",null,"The Grove - 1-Wire Thermocouple Amplifier (MAX31850K) is a thermocouple-to-digital converters with 14-bit resolution and cold-junction compensation. This module is designed to be used in conjunction with a k-type thermocouple. The thermocouples have a much larger measurement range than thermistors. For example, this ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Thermocouple-Temperature-Sensor-K-Type-1M-p-3132.html"},"k-type thermocouple")," on our website has a measurement range of -50\u2103 to +600\u2103."),(0,n.kt)("p",null,"This module is based on the MAX31850K, which integrates amplifier, ADC and 64-bit ROM. Thanks to the 64-bit ROM, each device has a unique 64-bit serial code, which allows multiple units to function on the same 1-Wire bus. Therefore, it is simple to use one microcontroller (the master device) to monitor temperature from many thermocouples distributed over a large area."),(0,n.kt)("p",null,"Again, this module can't work alone, it must work with a k-type thermocouple, if you do not have one, you can consider ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Thermocouple-Temperature-Sensor-K-Type-1M-p-3132.html"},"Thermocouple Temperature Sensor K Type-1M")," in our bazaar."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-1-Wire-Thermocouple-Amplifier-%28MAX31850K%29-p-3159.html",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,n.kt)("h2",{id:"version"},"Version"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Changes"),(0,n.kt)("th",{parentName:"tr",align:null},"Released Date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grove - 1-Wire Thermocouple Amplifier (MAX31850K)"),(0,n.kt)("td",{parentName:"tr",align:null},"Initial"),(0,n.kt)("td",{parentName:"tr",align:null},"Aug 2018")))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Integrated Cold-Junction Compensation"),(0,n.kt)("li",{parentName:"ul"},"Wide Conversion Range: allow readings from -270\u2103 to +1768\u2103"),(0,n.kt)("li",{parentName:"ul"},"14-Bit, 0.25\u2103 Resolution"),(0,n.kt)("li",{parentName:"ul"},"Will not work with any other kind of thermocouple except K type"),(0,n.kt)("li",{parentName:"ul"},"Detects Thermocouple Shorts to GND or VDD"),(0,n.kt)("li",{parentName:"ul"},"Detects Open Thermocouple")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Although this module can convert from -270\u2103 to +1768\u2103, the temperature measurment range also limited by the thermocouple you use.")),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Item"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,n.kt)("td",{parentName:"tr",align:null},"3.3V/5V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Temperature Resolution"),(0,n.kt)("td",{parentName:"tr",align:null},"14 bits")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Temperature Accuracy"),(0,n.kt)("td",{parentName:"tr",align:null},"\xb1 2\u2103")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operating Temperature Range"),(0,n.kt)("td",{parentName:"tr",align:null},"-40\u2103 to +125\u2103")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Allow Readings Range"),(0,n.kt)("td",{parentName:"tr",align:null},"-270\u2103 to +1768\u2103")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Storage Temperature Range"),(0,n.kt)("td",{parentName:"tr",align:null},"-65\u2103  to +150\u2103")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Input Jack"),(0,n.kt)("td",{parentName:"tr",align:null},"DIP Female Blue-2Pin")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Output Interface"),(0,n.kt)("td",{parentName:"tr",align:null},"1-Wire bus")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Size"),(0,n.kt)("td",{parentName:"tr",align:null},"L: 40mm W: 20mm H: 18mm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Weight"),(0,n.kt)("td",{parentName:"tr",align:null},"4.8g")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Package size"),(0,n.kt)("td",{parentName:"tr",align:null},"L: 140mm W: 90mm H: 20mm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Gross Weight"),(0,n.kt)("td",{parentName:"tr",align:null},"11g")))),(0,n.kt)("h2",{id:"applications"},"Applications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Medical"),(0,n.kt)("li",{parentName:"ul"},"Appliances"),(0,n.kt)("li",{parentName:"ul"},"Industrial"),(0,n.kt)("li",{parentName:"ul"},"HVAC(Heating, Ventilation and Air Conditioning)")),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("h3",{id:"pin-map"},"Pin Map"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/pin_map.jpg"})),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/pin_map_back.jpg"})),(0,n.kt)("h3",{id:"schematic"},"Schematic"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Input Jack")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/schematic_1.jpg"})),(0,n.kt)("p",null,"Because of the small signal levels involved, we take a lot measures to filter the noise."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"1--L1,L2"),"  We use thermocouple up to 1 meter long. Such long wires can be regarded as antennas, which will receive spatial electric field interference and generate high frequency noise. So we use two  inductances to filter the high frequency noise.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"2--C1"),"  It is strongly recommended by the chip manufacturer to add a 10nF ceramic surfacemount differential capacitor, placed across the T+ and T- pins, in order to filter noise on the thermocouple lines.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"3--D1")," We use the SZNUP2105LT3G DUAL BIDIRECTIONAL VOLTAGE SUPPRESSOR to protect this module from ESD(Electro-Static discharge)."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Bi-directional level shifter circuit")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/schematic_2.jpg"})),(0,n.kt)("p",null,"This is a typical Bi-directional level shifter circuit to connect two different voltage section. The left part, ",(0,n.kt)("strong",{parentName:"p"},"DQ")," pin of the MAX31850K use 3.3V, if the Arduino use 5V, this circuit will be needed. In the schematic above, ",(0,n.kt)("strong",{parentName:"p"},"Q6")," is N-Channel MOSFET ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf"},"2N7002"),", which act as a bidirectional switch. In order to better understand this part, you can refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf"},"AN10441"),"."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"  In this section we only show you part of the schematic, for the full document please refer to the [Resources](https://wiki.seeedstudio.com/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/#resources)\n"))),(0,n.kt)("h3",{id:"assembling-drawing"},"Assembling Drawing"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/Assembling.jpg"})),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Please insert the ",(0,n.kt)("font",{style:{fontWeight:"bold",color:"#AE0000"}},"Red")," wire of thermocouple into the **T+** port of the Grove - 1-Wire Themrocouple Amplifier (MAX31850K) , and the ",(0,n.kt)("font",{style:{fontWeight:"bold",color:"#FFFFFF"}},"White")," wire into ",(0,n.kt)("strong",{parentName:"p"},"T-")," port. If you do not use the k-type thermocouple from our bazaar, the color may be different, please make sure the ",(0,n.kt)("strong",{parentName:"p"},"+ -")," with the seller.")),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg"})))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,n.kt)("h4",{id:"hardware"},"Hardware"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Materials required")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - 1-Wire Thermocouple Amplifier x 2"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/thumbnail.jpg"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-1-Wire-Thermocouple-Amplifier-%28MAX31850K%29-p-3159.html",target:"_blank"},"Get One Now"))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"k-type thermocouple x 2"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - I2C Hub"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/thermocouple.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/12C%20hub.jpg"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Thermocouple-Temperature-Sensor-K-Type-1M-p-3132.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-I2C-Hub-p-851.html",target:"_blank"},"Get One Now"))))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"1-")," We've offered two software examples, ",(0,n.kt)("strong",{parentName:"p"},"simple")," and ",(0,n.kt)("strong",{parentName:"p"},"multiple"),", the materials requirement above is for the  ",(0,n.kt)("strong",{parentName:"p"},"multiple")," example. If you want to test the ",(0,n.kt)("strong",{parentName:"p"},"simple")," example, then the Grove - I2C Hub is not necessary, and only one Grove - 1-Wire Thermocouple Amplifier will be enough."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"2-")," We use I2C Hub here not as a I2C interface, but just as a normal one-to-two transfer interface.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Insert the red wire of k-type thermocouple into ",(0,n.kt)("strong",{parentName:"p"},"T+"),", insert the light white wire of k-type thermocouple into ",(0,n.kt)("strong",{parentName:"p"},"T-"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Connect the Grove - I2C Hub to the ",(0,n.kt)("strong",{parentName:"p"},"D3")," port of the Base Shield.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Plug the Grove - 1-Wire Thermocouple Amplifier A and B into the Grove - I2C Hub.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Plug Grove - Base Shield into Seeeduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 5.")," Connect Seeeduino to PC via a USB cable."))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/img/connect.jpg"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove Cable"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - I2C Hub"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - 1-Wire Thermocouple Amplifier"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"Black"),(0,n.kt)("td",{parentName:"tr",align:null},"G"),(0,n.kt)("td",{parentName:"tr",align:null},"GND")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5V"),(0,n.kt)("td",{parentName:"tr",align:null},"Red"),(0,n.kt)("td",{parentName:"tr",align:null},"V"),(0,n.kt)("td",{parentName:"tr",align:null},"VCC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"NC"),(0,n.kt)("td",{parentName:"tr",align:null},"White"),(0,n.kt)("td",{parentName:"tr",align:null},"SDA"),(0,n.kt)("td",{parentName:"tr",align:null},"NC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"D3"),(0,n.kt)("td",{parentName:"tr",align:null},"Yellow"),(0,n.kt)("td",{parentName:"tr",align:null},"SCL"),(0,n.kt)("td",{parentName:"tr",align:null},"DQOUT")))),(0,n.kt)("h4",{id:"software"},"Software"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"    If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start\n"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_MAX31850K"},"Seeed_MAX31850K")," Library from Github.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Unzip the library folder, follow the path to find and open ",(0,n.kt)("strong",{parentName:"p"},"Multiple.ino")," ---\x3e ",(0,n.kt)("strong",{parentName:"p"},"xxxx\\Arduino\\libraries\\Seeed_MAX31850K-master\\examples\\Multiple"),". xxxx is the path you installed your Arduino."))),(0,n.kt)("p",null,"This folder ",(0,n.kt)("strong",{parentName:"p"},"\\Arduino\\libraries\\Seeed_MAX31850K-master\\examples")," contains two examples\uff1a ",(0,n.kt)("strong",{parentName:"p"},"Multiple.ino")," and ",(0,n.kt)("strong",{parentName:"p"},"Simple.ino"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Simple.ino--single mode(one host and one slave)")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Multiple.ino--multiple mode(one host and multiple slaves,base on rom addressing-one wire search algorithm)")),(0,n.kt)("p",null,"Or, you can just click the icon ",(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg",alt:null})," in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C++"},'#include <OneWire.h>\n#include <DallasTemperature.h>\n\n// Data wire is plugged into port 2 on the Arduino\n#define ONE_WIRE_BUS 3\n#define TEMP_RESOLUTION 9\n\n#define MAX_NUM_OF_DEVICE  10\n\n// Setup a oneWire instance to communicate with any OneWire devices (not just Maxim/Dallas temperature ICs)\nOneWire oneWire(ONE_WIRE_BUS);\n\n// Pass our oneWire reference to Dallas Temperature. \nDallasTemperature sensors(&oneWire);\n\n// arrays to hold device addresses\nDeviceAddress Device_add[MAX_NUM_OF_DEVICE];\nDeviceAddress insideThermometer, outsideThermometer;\n\nvoid setup(void)\n{\n  // start serial port\n  Serial.begin(115200);\n  Serial.println("Dallas Temperature IC Control Library Demo");\n\n  // Start up the library\n  sensors.begin();\n\n  // locate devices on the bus\n  Serial.print("Locating devices...");\n  Serial.print("Found ");\n  Serial.print(sensors.getDeviceCount(), DEC);\n  Serial.println(" devices.");\n\n  Serial.print("Parasite power is: "); \n  if (sensors.isParasitePowerMode()) Serial.println("ON");\n  else Serial.println("OFF");\n\n  for(int i=0;i<sensors.getDeviceCount();i++)\n  {\n    if(!sensors.getAddress(Device_add[i],i))\n    {\n      Serial.println("Find device error!!");\n    }\n    else\n    {\n      Serial.print("Device [");\n      Serial.print(i);\n      Serial.print("] addr =");\n      printAddress(Device_add[i]);\n    }\n    Serial.println(" ");\n  }\n\n}\n\n// function to print a device address\nvoid printAddress(DeviceAddress deviceAddress)\n{\n  for (uint8_t i = 0; i < 8; i++)\n  {\n    // zero pad the address if necessary\n    if (deviceAddress[i] < 16) Serial.print("0");\n    Serial.print(deviceAddress[i], HEX);\n  }\n}\n\n// function to print the temperature for a device\nvoid printTemperature(DeviceAddress deviceAddress)\n{\n  float tempC = sensors.getTempC(deviceAddress);\n  Serial.print("Temp C: ");\n  Serial.print(tempC);\n  Serial.print(" Temp F: ");\n  Serial.print(DallasTemperature::toFahrenheit(tempC));\n}\n\n// function to print a device\'s resolution\nvoid printResolution(DeviceAddress deviceAddress)\n{\n  Serial.print("Resolution: ");\n  Serial.print(sensors.getResolution(deviceAddress));\n  Serial.println();    \n}\n\n// main function to print information about a device\nvoid printData(DeviceAddress deviceAddress)\n{\n  Serial.print("Device Address: ");\n  printAddress(deviceAddress);\n  Serial.print(" ");\n  printTemperature(deviceAddress);\n  Serial.println();\n}\n\nvoid loop(void)\n{ \n  // call sensors.requestTemperatures() to issue a global temperature \n  // request to all devices on the bus\n  Serial.print("Requesting temperatures...");\n  sensors.requestTemperatures();\n  Serial.println("DONE");\n\n  for(int i=0;i<sensors.getDeviceCount();i++)\n  {\n     printData(Device_add[i]);\n  }\n\n}\n\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Upload the demo. If you do not know how to upload the code, please check ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 5.")," Open the ",(0,n.kt)("strong",{parentName:"p"},"Serial Monitor")," of Arduino IDE by click ",(0,n.kt)("strong",{parentName:"p"},"Tool-> Serial Monitor"),". Or tap the ++ctrl+shift+m++ key at the same time. Then set the baud rate ",(0,n.kt)("strong",{parentName:"p"},"115200"),"."))),(0,n.kt)("admonition",{title:"success",type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"}," If every thing goes well, you will get the result.\n"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c++"},"DONE\nDevice Address: 3B23211800ing temperatures... 77.00\nRequesting temperatures...DONE\nDevice Address: 3B2321180000005C Temp C: 25.00 Temp F: 77.00\nRequesting temperatures...Dallas Temperature IC Control Library Demo\nLocating devices...Found 2 devices.\nParasite power is: OFF\nDevice [0] addr =3B4C965D06D80C98 \nDevice [1] addr =3B2321180000005C \nRequesting temperatures...DONE\nDevice Address: 3B4C965D06D80C98 Temp C: 26.25 Temp F: 79.25\nDevice Address: 3B2321180000005C Temp C: 25.25 Temp F: 77.45\nRequesting temperatures...DONE\nDevice Address: 3B4C965D06D80C98 Temp C: 26.25 Temp F: 79.25\nDevice Address: 3B2321180000005C Temp C: 25.00 Temp F: 77.00\nRequesting temperatures...DONE\nDevice Address: 3B4C965D06D80C98 Temp C: 26.25 Temp F: 79.25\nDevice Address: 3B2321180000005C Temp C: 25.25 Temp F: 77.45\nRequesting temperatures...DONE\nDevice Address: 3B4C965D06D80C98 Temp C: 26.00 Temp F: 78.80\nDevice Address: 3B2321180000005C Temp C: 25.25 Temp F: 77.45\nRequesting temperatures...DONE\nDevice Address: 3B4C965D06D80C98 Temp C: 26.00 Temp F: 78.80\nDevice Address: 3B2321180000005C Temp C: 25.25 Temp F: 77.45\n")),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/res/Grove-1-Wire_Themocouple_Amplifier-MAX31850K.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Zip]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/res/Grove-1-Wire_Themocouple_Amplifier-MAX31850K.zip"},"Grove - 1-Wire Thermocouple Amplifier eagle files")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Zip]")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_MAX31850K/archive/master.zip"},"Seeed_MAX31850K Library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-1_Wire_Themocouple_Amplifier-MAX31850K/res/Max31850.pdf"},"Datasheet of MAX31850"))),(0,n.kt)("h2",{id:"tech-support--product-descussion"},"Tech Support & Product Descussion"),(0,n.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,n.kt)("p",null,"With the SenseCAP ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,n.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,n.kt)("div",{align:"center"},(0,n.kt)("a",{href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP",target:"_blank"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"}))))}d.isMDXComponent=!0}}]);