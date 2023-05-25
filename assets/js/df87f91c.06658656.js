"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[68166],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var a=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(i),h=r,m=p["".concat(d,".").concat(h)]||p[h]||c[h]||o;return i?a.createElement(m,n(n({ref:t},u),{},{components:i})):a.createElement(m,n({ref:t},u))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,n=new Array(o);n[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:r,n[1]=l;for(var s=2;s<o;s++)n[s]=i[s];return a.createElement.apply(null,n)}return a.createElement.apply(null,i)}h.displayName="MDXCreateElement"},35703:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=i(87462),r=(i(67294),i(3905));const o={title:"Wio Lite W600",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Lite-W600/",slug:"/Wio-Lite-W600",last_update:{date:"01/11/2022",author:"gunengyu"}},n=void 0,l={unversionedId:"Sensor/Wio_Series/Wio_Lite/Wio-Lite-W600",id:"Sensor/Wio_Series/Wio_Lite/Wio-Lite-W600",title:"Wio Lite W600",description:"Wio Lite W600 is a cost-effective Arduino compatible board with the W600 WiFi module. The Wio Lite W600 features Atmel\xae | SMART\u2122 SAM D21 ARM Cortex-M0+ based microcontroller and the W600 WiFi core is a 2.4GHz WiFi module features ARM Cortex-M3. Since the Wio Lite W600 uses SAM D21(the same chip used in Arduino Zero) as its Arduino Core, in theory, it is fully compatible with Arduino zero.",source:"@site/docs/Sensor/Wio_Series/Wio_Lite/Wio-Lite-W600.md",sourceDirName:"Sensor/Wio_Series/Wio_Lite",slug:"/Wio-Lite-W600",permalink:"/Wio-Lite-W600",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Series/Wio_Lite/Wio-Lite-W600.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"Jan 11, 2022",frontMatter:{title:"Wio Lite W600",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Lite-W600/",slug:"/Wio-Lite-W600",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Getting Started with Wio Lite AI",permalink:"/Wio-Lite-AI-Getting-Started"},next:{title:"Wio Lite MG126",permalink:"/Wio-Lite-MG126"}},d={},s=[{value:"Feature",id:"feature",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware",id:"hardware",level:2},{value:"Software",id:"software",level:2},{value:"Step 1. You need to Install an Arduino Software.",id:"step-1-you-need-to-install-an-arduino-software",level:2},{value:"Step 2. Setting your Arduino IDE.",id:"step-2-setting-your-arduino-ide",level:2},{value:"Step 3. Add the Wio Lite W600 Board to Your Arduino IDE",id:"step-3-add-the-wio-lite-w600-board-to-your-arduino-ide",level:2},{value:"Step 4. Add the W600 Library into Your Arduino IDE",id:"step-4-add-the-w600-library-into-your-arduino-ide",level:2},{value:"Step 5. Restart the Arduino IDE. Open the AP-Station example, you can open it in the Arduino IDE by the path: **File --&gt; Examples --&gt;W600_wifi--&gt;log_data.",id:"step-5-restart-the-arduino-ide-open-the-ap-station-example-you-can-open-it-in-the-arduino-ide-by-the-path-file----examples---w600_wifi--log_data",level:2},{value:"Step 6. Modify the code with your own AP and Station. In the following picture, Wio Lite W600 work as a station to join the AP marked <strong>A</strong> and the the Wio Lite W600 will creat the <strong>B AP</strong> for other devieces. You should change both AP name and password.",id:"step-6-modify-the-code-with-your-own-ap-and-station-in-the-following-picture-wio-lite-w600-work-as-a-station-to-join-the-ap-marked-a-and-the-the-wio-lite-w600-will-creat-the-b-ap-for-other-devieces-you-should-change-both-ap-name-and-password",level:2},{value:"Step 7. Select your board and port",id:"step-7-select-your-board-and-port",level:2},{value:"Step 8.Upload the code",id:"step-8upload-the-code",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Descussion",id:"tech-support--product-descussion",level:2}],u={toc:s};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/Wio-Lite-W600-wiki.jpg",alt:null})),(0,r.kt)("p",null,"Wio Lite W600 is a cost-effective Arduino compatible board with the W600 WiFi module. The Wio Lite W600 features Atmel\xae | SMART\u2122 SAM D21 ARM Cortex-M0+ based microcontroller and the W600 WiFi core is a 2.4GHz WiFi module features ARM Cortex-M3. Since the Wio Lite W600 uses SAM D21(the same chip used in Arduino Zero) as its Arduino Core, in theory, it is fully compatible with Arduino zero. "),(0,r.kt)("p",null,"It broken out the SAM D21 pins, the I/O level of this board is 3.3V. There are 6 analog pins and 14 digital pins, and also one UART, one I2C, one ICSP port is available. You can power this board with 5V USB Type C and 3.5V~4.2V Lipo battery."),(0,r.kt)("p",null,"As for the WiFi core, it's our old friend - W600 Module. We've already released the W600 Module and ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/W600-Module-p-4020.html"},"Grove -  W600"),", Wio Lite W600 is a new member of  the ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/tag/W600-WIFI.html"},"W600 family"),". W600 Module features ARM Cortex-M3 with 1MB on-chip flash and freeRTOS kernel. It is CE/FCC certificated and supports 802.11 b/g/n."),(0,r.kt)("p",null,"On top of that, we've released the ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Shield-for-Wio-Lite-p-4156.html"},"Grove Shield for Wio Lite")," at the same time. With this shield, we bring over 200 Grove sensors, actuators and displays to Wio Lite series and the Feather community.  "),(0,r.kt)("div",{align:"center"},(0,r.kt)("figure",null,(0,r.kt)("a",{href:"https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/img/Grove-Shield-for-Wio-Lite-V1.0-detail.jpg",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Shield-for-Wio-Lite/img/Grove-Shield-for-Wio-Lite-V1.0-detail.jpg",height:"450",width:"600",alt:"Seeed relay quick selection diagram"})))),(0,r.kt)("p",null,"Goodbye, complex wiring with the breadboard and annoying welding with the soldering iron. "),(0,r.kt)("p",null,"Hello, ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove"),"! "),(0,r.kt)("p",{style:{}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/Wio-Lite-W600-p-4155.html",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,r.kt)("h2",{id:"feature"},"Feature"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Arduino Zero Compatible/ Adafruit Feather Compatible"),(0,r.kt)("li",{parentName:"ul"},"2.4GHz onboard WiFi module supports 802.11 b/g/n"),(0,r.kt)("li",{parentName:"ul"},"Support 200+ Grove modules"),(0,r.kt)("li",{parentName:"ul"},"Cost-effective")),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Item"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Microcontroller"),(0,r.kt)("td",{parentName:"tr",align:null},"SAM D21")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum CPU frequency"),(0,r.kt)("td",{parentName:"tr",align:null},"48 MHz")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SRAM"),(0,r.kt)("td",{parentName:"tr",align:null},"32 KB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Flash Memory"),(0,r.kt)("td",{parentName:"tr",align:null},"256 KB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Power Input"),(0,r.kt)("td",{parentName:"tr",align:null},"USB Type C 5V Lipo Battery 3.5 V ~ 4.2 V")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Digital I/O Pins"),(0,r.kt)("td",{parentName:"tr",align:null},"14")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Analog Input Channels"),(0,r.kt)("td",{parentName:"tr",align:null},"6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DC Current per I/O Pin"),(0,r.kt)("td",{parentName:"tr",align:null},"40 mA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IO Input Voltage"),(0,r.kt)("td",{parentName:"tr",align:null},"3.3 V")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WiFi Core"),(0,r.kt)("td",{parentName:"tr",align:null},"W600")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CPU"),(0,r.kt)("td",{parentName:"tr",align:null},"32bit Embedded Cortex-M3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RAM"),(0,r.kt)("td",{parentName:"tr",align:null},"288 KB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Flash"),(0,r.kt)("td",{parentName:"tr",align:null},"1 MB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Wi\u2010Fi Mode"),(0,r.kt)("td",{parentName:"tr",align:null},"IEEE802.11b/g/n")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Frequency Range"),(0,r.kt)("td",{parentName:"tr",align:null},"2.4~2.4835 GHz")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Network Type"),(0,r.kt)("td",{parentName:"tr",align:null},"STA/AP/AP+STA/Wi\u2010Fi Direct")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Network protocol"),(0,r.kt)("td",{parentName:"tr",align:null},"TCP/UDP/ARP/ICMP/DHCP/DNS/HTTP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Verification"),(0,r.kt)("td",{parentName:"tr",align:null},"WEP/WPA\u2010PSK/WPA2\u2010PSK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Encryption"),(0,r.kt)("td",{parentName:"tr",align:null},"WEP64/WEP128/TKIP/CCMP(AES)")))),(0,r.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/hardware-overview.jpg",alt:null})," "),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("h2",{id:"hardware"},"Hardware"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Materials required")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Wio Lite W600 x1 "),(0,r.kt)("li",{parentName:"ul"},"Computer x1"),(0,r.kt)("li",{parentName:"ul"},"USB typc cable x1")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"Some USB cables can only supply power and cannot transfer data. If you don't have a usb cable or don't know if your usb cable can transmit data, you can check [seeed USB type C support USB 3.1 ](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html).\n"))),(0,r.kt)("p",null,"Connect the Wio Lite W600 to your computer using the USB cable. "),(0,r.kt)("h2",{id:"software"},"Software"),(0,r.kt)("h2",{id:"step-1-you-need-to-install-an-arduino-software"},"Step 1. You need to Install an Arduino Software."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/Main/Software"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png",alt:null}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Launch the Arduino application")),(0,r.kt)("p",null,"Double-click the Arduino application (arduino.exe) you have previously downloaded."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"If the Arduino Software loads in a different language, you can change it in the preferences dialog. See the [Arduino Software (IDE) page](https://www.arduino.cc/en/Guide/Environment#languages) for details.\n"))),(0,r.kt)("h2",{id:"step-2-setting-your-arduino-ide"},"Step 2. Setting your Arduino IDE."),(0,r.kt)("p",null,"Open your Arudino IDE, click on ",(0,r.kt)("strong",{parentName:"p"},"File > Preferences"),", and copy below url to ",(0,r.kt)("em",{parentName:"p"},"Additional Boards Manager URLs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json\n\n")),(0,r.kt)("p",null," ",(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/preference.png",alt:null})),(0,r.kt)("h2",{id:"step-3-add-the-wio-lite-w600-board-to-your-arduino-ide"},"Step 3. Add the Wio Lite W600 Board to Your Arduino IDE"),(0,r.kt)("p",null,"Please follow the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Seeed_Arduino_Boards/"},"Seeed Board Intallation Guide")," and serch the key word ",(0,r.kt)("strong",{parentName:"p"},"seeeduino_samd_zero")," to add the ",(0,r.kt)("strong",{parentName:"p"},"Wio Lite W600")," into your Arduino IDE. "),(0,r.kt)("div",{align:"center"},(0,r.kt)("figure",null,(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/IDE1.png"}),(0,r.kt)("figcaption",null," ",(0,r.kt)("i",null,"The key word is **seeeduino_samd_zero**")," "))),(0,r.kt)("h2",{id:"step-4-add-the-w600-library-into-your-arduino-ide"},"Step 4. Add the W600 Library into Your Arduino IDE"),(0,r.kt)("p",null,"Download the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_W600/archive/master.zip"},"W600 Library")," from Seeed Github. Then Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino."),(0,r.kt)("h2",{id:"step-5-restart-the-arduino-ide-open-the-ap-station-example-you-can-open-it-in-the-arduino-ide-by-the-path-file----examples---w600_wifi--log_data"},"Step 5. Restart the Arduino IDE. Open the AP-Station example, you can open it in the Arduino IDE by the path: **File --\x3e Examples --\x3eW600_wifi--\x3elog_data."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/IDE3.png",alt:null})),(0,r.kt)("h2",{id:"step-6-modify-the-code-with-your-own-ap-and-station-in-the-following-picture-wio-lite-w600-work-as-a-station-to-join-the-ap-marked-a-and-the-the-wio-lite-w600-will-creat-the-b-ap-for-other-devieces-you-should-change-both-ap-name-and-password"},"Step 6. Modify the code with your own AP and Station. In the following picture, Wio Lite W600 work as a station to join the AP marked ",(0,r.kt)("strong",{parentName:"h2"},"A")," and the the Wio Lite W600 will creat the ",(0,r.kt)("strong",{parentName:"h2"},"B AP")," for other devieces. You should change both AP name and password."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/IDE-4.jpg",alt:null})),(0,r.kt)("h2",{id:"step-7-select-your-board-and-port"},"Step 7. Select your board and port"),(0,r.kt)("p",null,"You'll need to select the entry in the ",(0,r.kt)("strong",{parentName:"p"},"Tools > Board")," menu that corresponds to your Arduino.\nSelecting a ",(0,r.kt)("strong",{parentName:"p"},"Seeeduino Zero"),"."),(0,r.kt)("div",{align:"center"},(0,r.kt)("figure",null,(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Lite-W600/img/IDE2.png"}),(0,r.kt)("figcaption",null,(0,r.kt)("i",null,"Choose the right board")))),(0,r.kt)("p",null,"Select the serial device of the Arduino board from the Tools | Serial Port menu. This is likely to be COM3 or higher (",(0,r.kt)("strong",{parentName:"p"},"COM1")," and ",(0,r.kt)("strong",{parentName:"p"},"COM2")," are usually reserved for hardware serial ports). To find out, you can disconnect your Arduino board and re-open the menu; the entry that disappears should be the Arduino board. Reconnect the board and select that serial port."),(0,r.kt)("h2",{id:"step-8upload-the-code"},"Step 8.Upload the code"),(0,r.kt)("p",null,'Now, simply click the "Upload" button in the environment. Wait a few seconds and if the upload is successful, the message "Done uploading." will appear in the status bar.'),(0,r.kt)("div",{align:"center"},(0,r.kt)("figure",null,(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png"}),(0,r.kt)("figcaption",null,(0,r.kt)("i",null,"Upload the code")))),(0,r.kt)("p",null,"A few seconds after the upload finishes, then the Wio Lite W600 will access the AP you set and you can use your phone to accees the AP created by Wio Lite W600"),(0,r.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Wio-Lite-W600/res/Wio-Lite-W600.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[ZIP]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Wio-Lite-W600/res/Wio-Lite-W600.zip"},"Wio Lite W600 Eagle file")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/W600_Module/res/WM_W60X_SDK_User%20Manual_V1.0.0.pdf"},"W600-datasheet"))),(0,r.kt)("h2",{id:"tech-support--product-descussion"},"Tech Support & Product Descussion"),(0,r.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,r.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),".\nThank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);