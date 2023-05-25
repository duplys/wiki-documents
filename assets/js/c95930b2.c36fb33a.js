"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[96487],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11158:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const o={description:"Grove - Luminance Sensor",title:"Grove - Luminance Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Luminance_Sensor",last_update:{date:"1/5/2023",author:"jianjing Huang"}},a=void 0,s={unversionedId:"Sensor/Grove/Grove_Sensors/Light/Grove-Luminance_Sensor",id:"Sensor/Grove/Grove_Sensors/Light/Grove-Luminance_Sensor",title:"Grove - Luminance Sensor",description:"Grove - Luminance Sensor",source:"@site/docs/Sensor/Grove/Grove_Sensors/Light/Grove-Luminance_Sensor.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Light",slug:"/Grove-Luminance_Sensor",permalink:"/Grove-Luminance_Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Light/Grove-Luminance_Sensor.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1672876800,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{description:"Grove - Luminance Sensor",title:"Grove - Luminance Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Luminance_Sensor",last_update:{date:"1/5/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - I2C UV Sensor (VEML6070)",permalink:"/Grove-I2C_UV_Sensor-VEML6070"},next:{title:"Grove - Infrared Receiver",permalink:"/Grove-Infrared_Receiver"}},l={},u=[{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Descussion",id:"tech-support--product-descussion",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/img/Luminance.jpg"})),(0,i.kt)("p",null,"Grove - Luminance Sensor detects the intensity of the ambient light on a surface area. It uses ",(0,i.kt)("strong",{parentName:"p"},"APDS-9002")," analog output ambient light photo sensor. This has responsivity closer to human eye."),(0,i.kt)("p",null,"This Luminance Sensor can be used in application which requires automatic light adjustment in residential or commercial lighting."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/Grove-Luminance-Sensor-p-1941.html",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png"}))),(0,i.kt)("h2",{id:"specifications"},"Specifications"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Vcc"),(0,i.kt)("td",{parentName:"tr",align:null},"2.4V ~ 5.5V")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Linear output range"),(0,i.kt)("td",{parentName:"tr",align:null},"0.0 ~ 2.3V")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Luminance measurement range"),(0,i.kt)("td",{parentName:"tr",align:null},"0 ~ 1000 Lux")))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"More details about Grove modules please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove System"))),(0,i.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg"})))))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,i.kt)("h2",{id:"demonstration"},"Demonstration"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Hookup Grove Luminance sensor with Seeduino Lotus")),(0,i.kt)("p",null,"1.Plug the Grove-Luminance sensor to the A0 port of Seeeduino Lotus with a Grove connector."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/img/Interface_Grove-Luminance.jpg"})),(0,i.kt)("p",null,"2.Copy the following code in an arduino sketch."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'float VoutArray[] =  { 0.0011498,  0.0033908,   0.011498, 0.041803,0.15199,     0.53367, 1.3689,   1.9068,  2.3};\nfloat  LuxArray[] =  { 1.0108,     3.1201,  9.8051,   27.43,   69.545,   232.67,  645.11,   730.52,  1000};\n\nvoid setup() {\n    // put your setup code here, to run once:\n    Serial.begin(9600);\n\n}\n\nvoid loop() {\n    // put your main code here, to run repeatedly:\n\n    Serial.print("Vout =");\n    Serial.print(readAPDS9002Vout(A0));\n    Serial.print(" V,Luminance =");\n    Serial.print(readLuminance(A0));\n    Serial.println("Lux");\n    delay(500);\n}\n\nfloat readAPDS9002Vout(uint8_t analogpin)\n{\n    // MeasuredVout = ADC Value * (Vcc / 1023) * (3 / Vcc)\n    // Vout samples are with reference to 3V Vcc\n    // The above expression is simplified by cancelling out Vcc\n    float MeasuredVout = analogRead(A0) * (3.0 / 1023.0);\n    //Above 2.3V , the sensor value is saturated\n\n    return MeasuredVout;\n\n}\n\nfloat readLuminance(uint8_t analogpin)\n{\n\n    // MeasuredVout = ADC Value * (Vcc / 1023) * (3 / Vcc)\n    // Vout samples are with reference to 3V Vcc\n    // The above expression is simplified by cancelling out Vcc\n    float MeasuredVout = analogRead(A0) * (3.0 / 1023.0);\n    float Luminance = FmultiMap(MeasuredVout, VoutArray, LuxArray, 9);\n\n    /**************************************************************************\n\n    The Luminance in Lux is calculated based on APDS9002 datasheet -- > Graph 1\n    ( Output voltage vs. luminance at different load resistor)\n    The load resistor is 1k in this board. Vout is referenced to 3V Vcc.\n\n    The data from the graph is extracted using WebPlotDigitizer\n    http://arohatgi.info/WebPlotDigitizer/app/\n\n    VoutArray[] and LuxArray[] are these extracted data. Using MultiMap, the data\n    is interpolated to get the Luminance in Lux.\n\n    This implementation uses floating point arithmetic and hence will consume\n    more flash, RAM and time.\n\n    The Luminance in Lux is an approximation and depends on the accuracy of\n    Graph 1 used.\n\n    ***************************************************************************/\n\n    return Luminance;\n}\n\n\n//This code uses MultiMap implementation from http://playground.arduino.cc/Main/MultiMap\n\nfloat FmultiMap(float val, float * _in, float * _out, uint8_t size)\n{\n    // take care the value is within range\n    // val = constrain(val, _in[0], _in[size-1]);\n    if (val <= _in[0]) return _out[0];\n    if (val >= _in[size-1]) return _out[size-1];\n\n    // search right interval\n    uint8_t pos = 1;  // _in[0] allready tested\n    while(val > _in[pos]) pos++;\n\n    // this will handle all exact "points" in the _in array\n    if (val == _in[pos]) return _out[pos];\n\n    // interpolate in the right segment for the rest\n    return (val - _in[pos-1]) * (_out[pos] - _out[pos-1]) / (_in[pos] - _in[pos-1]) + _out[pos-1];\n}\n')),(0,i.kt)("p",null,"3.Upload the code to seeeduino lotus."),(0,i.kt)("p",null,"4.Hold the Grove Luminance sensor under a light source or in a place where lux has to be detected."),(0,i.kt)("p",null,"5.Open the serial monitor."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/img/LuminanceOutput.png"})),(0,i.kt)("p",null,"6.The Vout and Lux are displayed in the serial monitor."),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/res/Grove-Luminance_Sensor.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/res/Grove-Luminance.zip"},"Grove-Luminance Sensor Demo code")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/res/Grove-Luminance_Sensor.zip"},"Grove-Luminance Sensor eagle file")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/res/Grove-Luminance_Sensor_v1.0.pdf"},"Grove-Luminance Sensor Schematic (PDF)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Luminance_Sensor/res/APDS-9002-.pdf"},"APDS-900 Datasheet"))),(0,i.kt)("h2",{id:"tech-support--product-descussion"},"Tech Support & Product Descussion"),(0,i.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);