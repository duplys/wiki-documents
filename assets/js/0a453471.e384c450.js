"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[20994],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,c=u["".concat(s,".").concat(h)]||u[h]||m[h]||o;return r?a.createElement(c,i(i({ref:t},d),{},{components:r})):a.createElement(c,i({ref:t},d))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},21921:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={description:"Grove - Water Sensor",title:"Grove - Water Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Water_Sensor",last_update:{date:"1/6/2023",author:"shuxu hu"}},i=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Liquid/Grove-Water_Sensor",id:"Sensor/Grove/Grove_Sensors/Liquid/Grove-Water_Sensor",title:"Grove - Water Sensor",description:"Grove - Water Sensor",source:"@site/docs/Sensor/Grove/Grove_Sensors/Liquid/Grove-Water_Sensor.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Liquid",slug:"/Grove-Water_Sensor",permalink:"/Grove-Water_Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Liquid/Grove-Water_Sensor.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672963200,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{description:"Grove - Water Sensor",title:"Grove - Water Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Water_Sensor",last_update:{date:"1/6/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - ORP Sensor Kit Pro",permalink:"/Grove-ORP-Sensor-Pro"},next:{title:"Grove - Water Level Sensor",permalink:"/Grove-Water-Level-Sensor"}},s={},p=[{value:"Version",id:"version",level:2},{value:"Features",id:"features",level:2},{value:"Applications Ideas",id:"applications-ideas",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play with Codecraft",id:"play-with-codecraft",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)",id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi",level:3},{value:"Hardware",id:"hardware-2",level:4},{value:"Software",id:"software-2",level:4},{value:"Play With Raspberry Pi(with GrovePi_Plus)",id:"play-with-raspberry-piwith-grovepi_plus",level:3},{value:"Hardware",id:"hardware-3",level:4},{value:"Software",id:"software-3",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Project",id:"project",level:2},{value:"Tech Support &amp; Product Descussion",id:"tech-support--product-descussion",level:2}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/Grove-Water_Sensor_1.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"The Water Sensor module is part of the Grove system. It indicates whether the sensor is dry, damp or completely immersed in water by measuring conductivity. The sensor traces have a weak pull-up resistor of 1 M\u03a9. The resistor will pull the sensor trace value high until a drop of water shorts the sensor trace to the grounded trace. Believe it or not this circuit will work with the digital I/O pins of your Arduino or you can use it with the analog pins to detect the amount of water induced contact between the grounded and sensor traces."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html"},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("h2",{id:"version"},"Version"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Changes"),(0,n.kt)("th",{parentName:"tr",align:null},"Released Date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grove-Water Sensor V1.1"),(0,n.kt)("td",{parentName:"tr",align:null},"Initial"),(0,n.kt)("td",{parentName:"tr",align:null},"July 2014")))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Grove compatible interface"),(0,n.kt)("li",{parentName:"ul"},"Low power consumption"),(0,n.kt)("li",{parentName:"ul"},"2.0cm x 2.0cm Grove module"),(0,n.kt)("li",{parentName:"ul"},"High sensitivity")),(0,n.kt)("h2",{id:"applications-ideas"},"Applications Ideas"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Rainfall detecting"),(0,n.kt)("li",{parentName:"ul"},"Liquid leakage"),(0,n.kt)("li",{parentName:"ul"},"Tank overflow detector")),(0,n.kt)("h2",{id:"specifications"},"Specifications"),(0,n.kt)("table",{border:"1",cellspacing:"0",width:"80%"},(0,n.kt)("tr",null,(0,n.kt)("th",{scope:"col"},"Item"),(0,n.kt)("th",{scope:"col"},"Min"),(0,n.kt)("th",{scope:"col"},"Typical"),(0,n.kt)("th",{scope:"col"},"Max"),(0,n.kt)("th",{scope:"col"},"Unit")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Working Voltage"),(0,n.kt)("td",null,"4.75"),(0,n.kt)("td",null,"5.0"),(0,n.kt)("td",null,"5.25"),(0,n.kt)("td",null,"V")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Current"),(0,n.kt)("td",{colspan:"3"},"<20"),(0,n.kt)("td",null,"mA")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Working Temperature"),(0,n.kt)("td",null,"10"),(0,n.kt)("td",null,"-"),(0,n.kt)("td",null,"30"),(0,n.kt)("td",null,"\u2103")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Working Humidity (without condensation)"),(0,n.kt)("td",null,"10"),(0,n.kt)("td",null,"-"),(0,n.kt)("td",null,"90"),(0,n.kt)("td",null,"\xa0%"))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:"pir",width:200,height:"auto"})))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"If this is the first time you work with Arduino, we firmly recommend you to see Getting Started with Arduino before the start.\n"))),(0,n.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,n.kt)("h4",{id:"hardware"},"Hardware"),(0,n.kt)("p",null,"Connect the module to the Basic board using any of the digital pin. You can gain the value of the signal pin. When there is water on the bare conducting wires, the value is LOW. Otherwise, it will be HIGH."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Water Sensor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/Grove-Water_Sensor_small.png",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html"},"Get One Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," Connect Water Sensor to port D2 of Grove-Base Shield."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Plug Grove - Base Shield into Seeeduino."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Connect Seeeduino to PC via a USB cable.")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/3.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"If we don't have Grove Base Shield, We also can directly connect Grove_Water_Sensor to Seeeduino as below.\n"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Water Sensor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5V"),(0,n.kt)("td",{parentName:"tr",align:null},"Red")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"Black")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Not Conencted"),(0,n.kt)("td",{parentName:"tr",align:null},"White")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"D2"),(0,n.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,n.kt)("h4",{id:"software"},"Software"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Copy the code into Arduino IDE and upload. If you do not know how to upload the code, please check ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"how to upload code"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},"#define WATER_SENSOR 2\n\nvoid setup()\n{\n  Serial.begin (9600);\n  pinMode(WATER_SENSOR, INPUT);\n}\nvoid loop()\n{\n  Serial.println(digitalRead(WATER_SENSOR));\n  delay(500);\n}\n\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," We will see the output display on terminal as below.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},"1\n1\n0\n0\n1\n1\n")),(0,n.kt)("h3",{id:"play-with-codecraft"},"Play with Codecraft"),(0,n.kt)("h4",{id:"hardware-1"},"Hardware"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Connect a Grove - Water Sensor to port D2 of a Base Shield."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Plug the Base Shield to your Seeeduino/Arduino."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Link Seeeduino/Arduino to your PC via an USB cable."),(0,n.kt)("h4",{id:"software-1"},"Software"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Open ",(0,n.kt)("a",{parentName:"p",href:"https://ide.chmakered.com/"},"Codecraft"),", add Arduino support, and drag a main procedure to working area."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).\n"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/cc_Water_Sensor.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"Upload the program to your Arduino/Seeeduino."),(0,n.kt)("admonition",{type:"success"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"When the code finishes uploaded, you will see there is water or not in Serial Monitor.\n"))),(0,n.kt)("h3",{id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi"},"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)"),(0,n.kt)("h4",{id:"hardware-2"},"Hardware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1"),". Things used in this project:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove Base Hat for RasPi"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Water Sensor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/Grove-Water_Sensor_small.png",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html"},"Get ONE Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2"),". Plug the Grove Base Hat into Raspberry Pi."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3"),". Connect the Grove - Water Sensor to to the A0 port of the Base Hat."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4"),". Connect the Raspberry Pi to PC through USB cable.",(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/with_rpi_basehat.jpg",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("h4",{id:"software-2"},"Software"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1"),". Follow ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation"},"Setting Software")," to configure the development environment."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2"),". Download the source file by cloning the grove.py library. ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/Seeed-Studio/grove.py\n\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Excute below command to run the code.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd grove.py/grove\npython grove_water_sensor.py 0\n")),(0,n.kt)("p",null,"Following is the grove_water_sensor.py code."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"\nimport math\nimport sys\nimport time\nfrom grove.adc import ADC\n\n\nclass GroveWaterSensor:\n\n    def __init__(self, channel):\n        self.channel = channel\n        self.adc = ADC()\n\n    @property\n    def value(self):\n        return self.adc.read(self.channel)\n\nGrove = GroveWaterSensor\n\n\ndef main():\n    if len(sys.argv) < 2:\n        print('Usage: {} adc_channel'.format(sys.argv[0]))\n        sys.exit(1)\n\n    sensor = GroveWaterSensor(int(sys.argv[1]))\n\n    print('Detecting ...') \n    while True:\n        value = sensor.value        \n        if sensor.value > 800:\n            print(\"{}, Detected Water.\".format(value))\n        else:\n            print(\"{}, Dry.\".format(value))\n\n        time.sleep(.1)\n\nif __name__ == '__main__':\n    main()\n\n\n")),(0,n.kt)("admonition",{type:"success"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"If everything goes well, you will be able to see the following result\n"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'\npi@raspberrypi:~/grove.py/grove $ python grove_water_sensor.py 0\nDetecting ...\n612, Dry.\n749, Detected Water.\n829, Dry.\n357, Dry.\n98, Dry.\n352, Dry.\n517, Dry.\n718, Detected Water.\n868, Detected Water.\n581, Dry.\n90, Dry.\n326, Dry.\n451, Dry.\n666, Dry.\n867, Detected Water.\n684, Dry.\n100, Dry.\n^CTraceback (most recent call last):\n  File "grove_water_sensor.py", line 71, in <module>\n    main()\n  File "grove_water_sensor.py", line 62, in main\n    value = sensor.value        \n  File "grove_water_sensor.py", line 48, in value\n    return self.adc.read(self.channel)\n  File "/usr/local/lib/python2.7/dist-packages/grove/adc.py", line 66, in read\n    return self.read_register(addr)\n  File "/usr/local/lib/python2.7/dist-packages/grove/adc.py", line 84, in read_register\n    return self.bus.read_word_data(self.address, n)\n  File "/home/pi/.local/lib/python2.7/site-packages/smbus2/smbus2.py", line 396, in read_word_data\n    ioctl(self.fd, I2C_SMBUS, msg)\nKeyboardInterrupt\n\n\n')),(0,n.kt)("p",null,"You can use this sensor to detect the water. Press ++ctrl+c++ to quit."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"    You may have noticed that for the analog port, the silkscreen pin number is something like **A1, A0**, however in the command we use parameter **0** and **1**, just the same as digital port. So please make sure you plug the module into the correct port, otherwise there may be pin conflicts.\n"))),(0,n.kt)("h3",{id:"play-with-raspberry-piwith-grovepi_plus"},"Play With Raspberry Pi(with GrovePi_Plus)"),(0,n.kt)("h4",{id:"hardware-3"},"Hardware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,n.kt)("th",{parentName:"tr",align:null},"GrovePi_Plus"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Water Sensor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/Grove-Water_Sensor_small.png",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/GrovePi%2B-p-2241.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html"},"Get One Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," Plug the GrovePi_Plus into Raspberry."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Connect Grove-Water Sensor to ",(0,n.kt)("strong",{parentName:"li"},"D2")," port of GrovePi_Plus."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Connect the Raspberry to PC through USB cable.")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Water_Sensor/img/7.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("h4",{id:"software-3"},"Software"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Follow ",(0,n.kt)("a",{parentName:"li",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/"},"Setting Software")," to configure the development environment."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," Navigate to the demos' directory:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd yourpath/GrovePi/Software/Python/\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," To see the code")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"nano grove_water_sensor.py\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import time\nimport grovepi\n\n# Connect the Grove Water Sensor to digital port D2\n# SIG,NC,VCC,GND\nwater_sensor = 2\n\ngrovepi.pinMode(water_sensor,"INPUT")\n\nwhile True:\n    try:\n        print grovepi.digitalRead(water_sensor)\n        time.sleep(.5)\n\n    except IOError:\n        print "Error"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Run the demo.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo python grove_water_sensor.py\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 5.")," We will see the output display on terminal as below.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"1\n1\n0\n0\n1\n")),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Water_Sensor/res/Water_sensor.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Eagle]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Water_Sensor/res/Water_sensor.zip"},"Grove Water Sensor Schematic")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Library]")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_Water_Sensor"},"Demo code for Grove Water Sensor")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Codecraft]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Water_Sensor/res/Grove_Water_Sensor_CDC_File.zip"},"CDC File"))),(0,n.kt)("h2",{id:"project"},"Project"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Smart Crops: Implementing IoT in Conventional Agriculture!"),":Our mission with nature is to preserve it, designing and implementing technologies and monitoring methods with the help of IoT via Helium."),(0,n.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed",width:"350"}),(0,n.kt)("h2",{id:"tech-support--product-descussion"},"Tech Support & Product Descussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);