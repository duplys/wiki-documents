"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[73790],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(r),c=o,h=p["".concat(s,".").concat(c)]||p[c]||m[c]||i;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},10288:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const i={description:"Grove - ORP Sensor Kit (501Z)",title:"Grove - ORP Sensor Kit (501Z)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-ORP-Sensor-kit",last_update:{date:"1/6/2023",author:"shuxu hu"}},a=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Liquid/Grove-ORP-Sensor-kit",id:"Sensor/Grove/Grove_Sensors/Liquid/Grove-ORP-Sensor-kit",title:"Grove - ORP Sensor Kit (501Z)",description:"Grove - ORP Sensor Kit (501Z)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Liquid/Grove-ORP-Sensor-kit.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Liquid",slug:"/Grove-ORP-Sensor-kit",permalink:"/Grove-ORP-Sensor-kit",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Liquid/Grove-ORP-Sensor-kit.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672963200,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{description:"Grove - ORP Sensor Kit (501Z)",title:"Grove - ORP Sensor Kit (501Z)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-ORP-Sensor-kit",last_update:{date:"1/6/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Turbidity Sensor Meter for Arduino V1.0",permalink:"/Grove-Turbidity-Sensor-Meter-for-Arduino-V1.0"},next:{title:"Grove - PH Sensor",permalink:"/Grove-PH_Sensor"}},s={},d=[{value:"Feature",id:"feature",level:2},{value:"Specification",id:"specification",level:2},{value:"Platform Supported",id:"platform-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Materials Requied",id:"materials-requied",level:4},{value:"Hardware Connection",id:"hardware-connection",level:4},{value:"Software",id:"software",level:4},{value:"Software Code",id:"software-code",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Descussion",id:"tech-support--product-descussion",level:2}],u={toc:d};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/IMG/main.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-ORP-Sensor-Kit-501Z-p-4575.html"},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,o.kt)("p",null,"An Oxidation Reduction Potential (ORP) Sensor measures the activity of oxidizers and reducers in an aqueous solution, it measures the ability of a lake or river to cleanse itself or break down waste products. The Grove OPR sensor works for both 3.3V and 5V system, the Grove connector and BNC probe interface make it easy to use and very suitable for Arduino and Raspberry Pi project"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"This product is non-RoHS certified.\n"))),(0,o.kt)("h2",{id:"feature"},"Feature"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Work efficiently under 3.3V and 5V."),(0,o.kt)("li",{parentName:"ul"},"Support with both Arduino and Rasberry Pi ."),(0,o.kt)("li",{parentName:"ul"},"Compact size for easy deployment.")),(0,o.kt)("h2",{id:"specification"},"Specification"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Items"),(0,o.kt)("th",{parentName:"tr",align:null},"Values"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Electrode potential"),(0,o.kt)("td",{parentName:"tr",align:null},"245-270mv(15-30\u2103)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"RangeReference electrode internal resistance"),(0,o.kt)("td",{parentName:"tr",align:null},"\u226410k")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Resolution Electrode stability"),(0,o.kt)("td",{parentName:"tr",align:null},"\xb18mv/24")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Indicator electrode"),(0,o.kt)("td",{parentName:"tr",align:null},"Good continuity")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Work voltage"),(0,o.kt)("td",{parentName:"tr",align:null},"3.3V/5V")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Work temperature"),(0,o.kt)("td",{parentName:"tr",align:null},"5\u2103-70\u2103")))),(0,o.kt)("h2",{id:"platform-supported"},"Platform Supported"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,o.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:"pir",width:200,height:"auto"})))))),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("h4",{id:"materials-requied"},"Materials Requied"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Seeeduino Lotus"),(0,o.kt)("th",{parentName:"tr",align:null},"Grove-ORP Sensor kit"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/thumbnail.jpg",alt:"pir",width:600,height:"auto"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/IMG/thumb.png",alt:"pir",width:600,height:"auto"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html"},"Get ONE Now")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-ORP-Sensor-Kit-501Z-p-4575.html"},"Get ONE Now"))))),(0,o.kt)("h4",{id:"hardware-connection"},"Hardware Connection"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-ORD-Sensor/IMG/ORP_Connection.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("h4",{id:"software"},"Software"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"    If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.\n"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1.")," Plug Grove-ORP Sensor into Interface ",(0,o.kt)("strong",{parentName:"li"},"A2")," of Seeeduino Lotus board with a Grove Cable and connect Seeeduino Lotus to PC via a USB cable.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"Please plug the USB cable, Grove-ORP Sensor Interface into Seeeduino Lotus board Interface gently, otherwise you may damage the port.\n"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Download the ",(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/ORPSensorSample.zip"},"Demo code")," and copy the whole ",(0,o.kt)("strong",{parentName:"p"},"ORPSensorSample")," file and paste it into your Arduino IDE library file.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 3.")," Open the ",(0,o.kt)("strong",{parentName:"p"},"ORPSensorSample.ino")," file with your Arduino IDE and upload the demo. If you do not know how to upload the code, please check ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),"."))),(0,o.kt)("h4",{id:"software-code"},"Software Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-C++"},'#define VOLTAGE 5.00    //system voltage\n#define OFFSET 0        //zero drift voltage\n#define LED 13         //operating instructions\n\ndouble orpValue;\n\n#define ArrayLenth  40    //times of collection\n#define orpPin 2         //orp meter output,connect to Arduino controller ADC pin\n\nint orpArray[ArrayLenth];\nint orpArrayIndex=0;\n\ndouble avergearray(int* arr, int number){\n  int i;\n  int max,min;\n  double avg;\n  long amount=0;\n  if(number<=0){\n    printf("Error number for the array to avraging!/n");\n    return 0;\n  }\n  if(number<5){   //less than 5, calculated directly statistics\n    for(i=0;i<number;i++){\n      amount+=arr[i];\n    }\n    avg = amount/number;\n    return avg;\n  }else{\n    if(arr[0]<arr[1]){\n      min = arr[0];max=arr[1];\n    }\n    else{\n      min=arr[1];max=arr[0];\n    }\n    for(i=2;i<number;i++){\n      if(arr[i]<min){\n        amount+=min;        //arr<min\n        min=arr[i];\n      }else {\n        if(arr[i]>max){\n          amount+=max;    //arr>max\n          max=arr[i];\n        }else{\n          amount+=arr[i]; //min<=arr<=max\n        }\n      }//if\n    }//for\n    avg = (double)amount/(number-2);\n  }//if\n  return avg;\n}\n\n\nvoid setup(void) {\n  Serial.begin(9600);\n  pinMode(LED,OUTPUT);\n}\n\nvoid loop(void) {\n  static unsigned long orpTimer=millis();   //analog sampling interval\n  static unsigned long printTime=millis();\n  if(millis() >= orpTimer)\n  {\n    orpTimer=millis()+20;\n    orpArray[orpArrayIndex++]=analogRead(orpPin);    //read an analog value every 20ms\n    if (orpArrayIndex==ArrayLenth) {\n      orpArrayIndex=0;\n    }   \n    orpValue=((30*(double)VOLTAGE*1000)-(75*avergearray(orpArray, ArrayLenth)*VOLTAGE*1000/1024))/75-OFFSET;   //convert the analog value to orp according the circuit\n  }\n  if(millis() >= printTime)   //Every 800 milliseconds, print a numerical, convert the state of the LED indicator\n  {\n    printTime=millis()+800;\n    Serial.print("ORP: ");\n    Serial.print((int)orpValue);\n        Serial.println("mV");\n        digitalWrite(LED,1-digitalRead(LED));\n  }\n}\n')),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"}," - When measuring the electrode, the test part of the electrode (including platinum wire and reference junction) must be submerged at the same time.\n\n - The electrode standard solution-quinone hydroquinone saturated solution, the storage time is 48h. (Attachment: Preparation of quinone hydroquinone saturated solution: add excess quinone hydroquinone to the pH 4.00 buffer to make it saturated).\n - Method to prepare hydroquinone solution\uff1aadding 10g of quinhydrone to 1L of pH 4 or pH 7 buffer solution (ASTM D1498). The solutions are mixed on a magnetic mixing plate for a minimum of 15 minutes to create a saturated solution with undissolved crystals remaining. Quinhydrone solutions are usable for 8 hrs from the time of mixing.\n\n - If the platinum wire of the electrode is stained with grease, it can be scrubbed with absorbent cotton and acetone or alcohol. And if it is dipped by insoluble inorganic substance, 30-50% hydrochloric acid works as well. Besides, it can also be cleaned by senior toilet paper once every day\n\n - The probe **MUST NOT** be dipped in any solution for a long time.\n"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 4.")," Take off the interface of probe cable and continuously press the ",(0,o.kt)("strong",{parentName:"li"},"Black Button")," on the sensor to reset.")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/IMG/Calibration_for_ORP.png",alt:"pir",width:600,height:"auto"})),"- **Step 5.** From the chart above, we can figure out that the error is -11 mv, therefore the data of offset can be modified to -11 on **Line 2** in Demo Code.",(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 6.")," After resetting the sensor, we can put it into a pointed calibration liquid with the specification of 204mv to figure out if it could work well. ")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/IMG/Calibration_Solution.png",alt:"pir",width:600,height:"auto"})),"- **Step 7.** Finally, you are free to detect your own liquid.",(0,o.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,o.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/202002872_Grove-OPR Sensor_v1.0_SCH&PCB.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"[ZIP]")," ",(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-ORP-Sensor/ORPSensorSample.zip"},"Demo Code library"))),(0,o.kt)("h2",{id:"tech-support--product-descussion"},"Tech Support & Product Descussion"),(0,o.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,o.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,o.kt)("div",{class:"button_tech_support_container"},(0,o.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,o.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);