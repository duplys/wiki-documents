"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[74166],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,c=u["".concat(s,".").concat(h)]||u[h]||m[h]||o;return r?i.createElement(c,a(a({ref:t},d),{},{components:r})):i.createElement(c,a({ref:t},d))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,a[1]=l;for(var p=2;p<o;p++)a[p]=r[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},95777:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=r(87462),n=(r(67294),r(3905));const o={description:"Grove - Piezo Vibration Sensor",title:"Grove - Piezo Vibration Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Piezo_Vibration_Sensor",last_update:{date:"1/7/2023",author:"shuxu hu"}},a=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Motion/Grove-Piezo_Vibration_Sensor",id:"Sensor/Grove/Grove_Sensors/Motion/Grove-Piezo_Vibration_Sensor",title:"Grove - Piezo Vibration Sensor",description:"Grove - Piezo Vibration Sensor",source:"@site/docs/Sensor/Grove/Grove_Sensors/Motion/Grove-Piezo_Vibration_Sensor.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Motion",slug:"/Grove-Piezo_Vibration_Sensor",permalink:"/Grove-Piezo_Vibration_Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Motion/Grove-Piezo_Vibration_Sensor.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673049600,formattedLastUpdatedAt:"Jan 7, 2023",frontMatter:{description:"Grove - Piezo Vibration Sensor",title:"Grove - Piezo Vibration Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Piezo_Vibration_Sensor",last_update:{date:"1/7/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Mouse Encoder",permalink:"/Grove-Mouse_Encoder"},next:{title:"Grove - Slide Potentiometer",permalink:"/Grove-Slide_Potentiometer"}},s={},p=[{value:"Version",id:"version",level:2},{value:"Features",id:"features",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Applications",id:"applications",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)",id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"Play With Raspberry Pi (with GrovePi_Plus)",id:"play-with-raspberry-pi-with-grovepi_plus",level:3},{value:"Hardware",id:"hardware-2",level:4},{value:"Software",id:"software-2",level:4},{value:"FAQs",id:"faqs",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support &amp; Product Descussion",id:"tech-support--product-descussion",level:2}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Grove-Piezo_Vibration_Sensor-1.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo_Vibration_Sensor_02.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"Grove-Piezo Vibration Sensor is suitable for measurements of flexibility, vibration, impact and touch. The module is based on PZT film sensor LDT0-028. When the sensor moves back and forth, a certain voltage will be generated by the voltage comparator inside of it. A wide dynamic range (0.001Hz~1000MHz) guarantees an excellent measuring performance. And, you can adjust its sensitivity by adjusting the on-board potentiometer with a screw."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Piezo-Vibration-Sensor-p-1411.html"},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("h2",{id:"version"},"Version"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Changes"),(0,n.kt)("th",{parentName:"tr",align:null},"Released Date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grove - Piezo Vibration Sensor V1.1"),(0,n.kt)("td",{parentName:"tr",align:null},"Initial"),(0,n.kt)("td",{parentName:"tr",align:null},"Jul 2014")))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Standard grove socket"),(0,n.kt)("li",{parentName:"ul"},"Wide dynamic range\uff1a0.1Hz~180Hz"),(0,n.kt)("li",{parentName:"ul"},"Adjustable sensitivity"),(0,n.kt)("li",{parentName:"ul"},"High receptivity for strong impact")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:"pir",width:200,height:"auto"})))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,n.kt)("h2",{id:"applications"},"Applications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Vibration Sensing in Washing Machine"),(0,n.kt)("li",{parentName:"ul"},"Low Power Wakeup Switch"),(0,n.kt)("li",{parentName:"ul"},"Low Cost Vibration Sensing"),(0,n.kt)("li",{parentName:"ul"},"Car Alarms"),(0,n.kt)("li",{parentName:"ul"},"Body Movement"),(0,n.kt)("li",{parentName:"ul"},"Security Systems")),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,n.kt)("h4",{id:"hardware"},"Hardware"),(0,n.kt)("p",null,"The Grove - Piezo Vibration Sensor outputs a logic HIGH when vibration was detected. We can use any of Arduino pins to read the data. Here is an example of Piezo Vibration Sensor controlling LED. When the vibration was detected, this sensor outputs a logic high signal (the sensitivity can be changed by adjusting the potentiometer), an LED lights up."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 1. Prepare the below stuffs:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Piezo Vibration"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},")",(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo%20vibration%20sensor_s.jpg",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Piezo-Vibration-Sensor-p-1411.html"},"Get ONE Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 2. Connect the module to the ",(0,n.kt)("strong",{parentName:"li"},"D2")," of base shield using the 4-pin grove cable, we use ",(0,n.kt)("strong",{parentName:"li"},"digital pin13 on board LED")," as output."),(0,n.kt)("li",{parentName:"ul"},"Step 3. Plug the Basic Shield into Arduino."),(0,n.kt)("li",{parentName:"ul"},"Step 4. Connect Arduino to PC by using a USB cable.")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/piezo%20vibration%20connection.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"It may output low level even though originally output high level when you increase the threshold voltage by clockwise adjusting the potentiometer.\n"))),(0,n.kt)("h4",{id:"software"},"Software"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 1. Copy and paste code below to a new Arduino sketch.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},"const int ledPin=13;\nvoid setup() {\n    Serial.begin(9600);\n    pinMode(ledPin,OUTPUT);\n}\n\nvoid loop() {\n    int sensorState = digitalRead(2);\n    Serial.println(sensorState);\n    delay(100);\n    if(sensorState == HIGH)\n    {\n        digitalWrite(ledPin,HIGH);\n    }\n    else\n    {\n        digitalWrite(ledPin,LOW);\n    }\n}\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 2. The LED will be on when vibration is detected.")),(0,n.kt)("h3",{id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi"},"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)"),(0,n.kt)("h4",{id:"hardware-1"},"Hardware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1"),". Things used in this project:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove Base Hat for RasPi"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Piezo Vibration"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo%20vibration%20sensor_s.jpg",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Piezo-Vibration-Sensor-p-1411.html"},"Get ONE Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2"),". Plug the Grove Base Hat into Raspberry."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3"),". Connect the Grove - Piezo Vibration Sensor to port 12 of the Base Hat."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4"),". Connect the Raspberry Pi to PC through USB cable.")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo_Hat.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"For step 3 you are able to connect the piezo vibration sensor to **any GPIO Port** but make sure you change the command with the corresponding port number.\n"))),(0,n.kt)("h4",{id:"software-1"},"Software"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"}," If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.\n"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1"),". Follow ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation"},"Setting Software")," to configure the development environment."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2"),". Download the source file by cloning the grove.py library. ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/Seeed-Studio/grove.py\n\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3"),". Excute below commands to run the code.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd grove.py/grove\npython3 grove_piezo_vibration_sensor.py 12\n\n")),(0,n.kt)("p",null,"Following is the grove_piezo_vibration_sensor.py code."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"\nimport time\nfrom grove.gpio import GPIO\n\n\nclass GrovePiezoVibrationSensor(GPIO):\n    def __init__(self, pin):\n        super(GrovePiezoVibrationSensor, self).__init__(pin, GPIO.IN)\n        self._on_detect = None\n\n    @property\n    def on_detect(self):\n        return self._on_detect\n\n    @on_detect.setter\n    def on_detect(self, callback):\n        if not callable(callback):\n            return\n\n        if self.on_event is None:\n            self.on_event = self._handle_event\n\n        self._on_detect = callback\n\n    def _handle_event(self, pin, value):\n        if value:\n            if callable(self._on_detect):\n                self._on_detect()\n\nGrove = GrovePiezoVibrationSensor\n\n\ndef main():\n    import sys\n\n    if len(sys.argv) < 2:\n        print('Usage: {} pin'.format(sys.argv[0]))\n        sys.exit(1)\n\n    pir = GrovePiezoVibrationSensor(int(sys.argv[1]))\n\n    def callback():\n        print('Detected.')\n\n    pir.on_detect = callback\n\n    while True:\n        time.sleep(1)\n\n\nif __name__ == '__main__':\n    main()\n\n\n")),(0,n.kt)("admonition",{type:"success"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"If everything goes well, you will be able to see the following result\n"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'\npi@raspberrypi:~/grove.py/grove $ python3 grove_piezo_vibration_sensor.py 12\nDetected.\nDetected.\nDetected.\nDetected.\nDetected.\nDetected.\nDetected.\nDetected.\n^CTraceback (most recent call last):\n  File "grove_piezo_vibration_sensor.py", line 84, in <module>\n    main()\n  File "grove_piezo_vibration_sensor.py", line 80, in main\n    time.sleep(1)\nKeyboardInterrupt\n\n\n')),(0,n.kt)("p",null,"You can quit this program by simply press ++ctrl+c++."),(0,n.kt)("h3",{id:"play-with-raspberry-pi-with-grovepi_plus"},"Play With Raspberry Pi (with GrovePi_Plus)"),(0,n.kt)("h4",{id:"hardware-2"},"Hardware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 1. Prepare the below stuffs:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,n.kt)("th",{parentName:"tr",align:null},"GrovePi_Plus"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Piezo Vibration"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/Piezo%20vibration%20sensor_s.jpg",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/GrovePi%2B-p-2241.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Piezo-Vibration-Sensor-p-1411.html"},"Get ONE Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 2. Plug the GrovePi_Plus into Raspberry."),(0,n.kt)("li",{parentName:"ul"},"Step 3. Connect Grove-Piezo Vibration to A0 port of GrovePi_Plus."),(0,n.kt)("li",{parentName:"ul"},"Step 4. Connect the Raspberry to PC through USB cable.")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/img/grove%20connection.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("h4",{id:"software-2"},"Software"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"}," If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.\n"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 1. Follow ",(0,n.kt)("a",{parentName:"li",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/"},"Setting Software")," to configure the development environment."),(0,n.kt)("li",{parentName:"ul"},"Step 2. Git clone the Github repository.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"cd ~\ngit clone https://github.com/DexterInd/GrovePi.git\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 3. Excute below commands to detect the vibration.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"cd ~/GrovePi/Software/Python\npython3 grove_piezo_vibration_sensor.py\n")),(0,n.kt)("p",null,"Here is the grove_piezo_vibration_sensor.py code."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import time\nimport grovepi\n\n# Connect the Grove Piezo Vibration Sensor to analog port A0\n# OUT,NC,VCC,GND\npiezo = 0\n\ngrovepi.pinMode(piezo,"INPUT")\n\nwhile True:\n    try:\n        # When vibration is detected, the sensor outputs a logic high signal\n        print grovepi.analogRead(piezo)\n        time.sleep(.5)\n\n    except IOError:\n        print "Error"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 4. We will see the vibration display on terminal as below.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"pi@raspberrypi:~/GrovePi/Software/Python $ python3 grove_piezo_vibration_sensor.py\n1023\n1023\n1023\n1023\n18\n17\n18\n17\n")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"We also can use grovepi.digitalRead(2) to read the vibration status with attaching the sensor to D2 port of GrovePi.\n"))),(0,n.kt)("h2",{id:"faqs"},"FAQs"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Q1: Is it digital or analog output?")),(0,n.kt)("p",null,"A1: It is digital output, Low or High."),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/res/Eagle.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki//Grove-Piezo_Vibration_Sensor/res//Grove-Piezo_Vibration_Sensor_wiki.pdf"},"Download Wiki PDF")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Eagle]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/res/Eagle.zip"},"Grove - Piezo Vibration Sensor Eagle File")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/res/Gvove-Piezo_Vibration_Sensor.pdf"},"Grove - Piezo Vibration Sensor Schematic PDF File")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/res/Gvove%20-%20Piezo%20Vibration%20Sensor%20v1.1%20PCB.pdf"},"Grove - Piezo Vibration Sensor PCB PDF File")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Piezo_Vibration_Sensor/res/Piezo_Vibration_Sensor.pdf"},"Piezo Vibration Sensor Datasheet"))),(0,n.kt)("h2",{id:"projects"},"Projects"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Grove Starter Kit For Arduino - Piezo Vibration Sensor"),": Teaches you how to use the Piezo vibration sensor in the Arduino Grove starter kit."),(0,n.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/trduunze/grove-starter-kit-for-arduino-piezo-vibration-sensor-92c531/embed",width:"350"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Seat Monitor"),": Using ARTIK cloud to monitor cabin seat state."),(0,n.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/momososo/seat-monitor-4288dc/embed",width:"350"}),(0,n.kt)("h2",{id:"tech-support--product-descussion"},"Tech Support & Product Descussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);