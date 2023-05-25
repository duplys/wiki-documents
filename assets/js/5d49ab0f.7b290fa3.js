"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[36768],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},_=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),_=n,f=c["".concat(s,".").concat(_)]||c[_]||d[_]||a;return r?o.createElement(f,i(i({ref:t},u),{},{components:r})):o.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=_;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}_.displayName="MDXCreateElement"},55612:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={description:"Raspberry Pi Motor Driver Board v1.0",title:"Raspberry Pi Motor Driver Board v1.0",keywords:["Pi_HAT"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Raspberry_Pi_Motor_Driver_Board_v1.0",last_update:{date:"1/11/2023",author:"jianjing Huang"}},i=void 0,l={unversionedId:"Top_Brand/Raspberry_Pi/Pi_HAT/Raspberry_Pi_Motor_Driver_Board_v1.0",id:"Top_Brand/Raspberry_Pi/Pi_HAT/Raspberry_Pi_Motor_Driver_Board_v1.0",title:"Raspberry Pi Motor Driver Board v1.0",description:"Raspberry Pi Motor Driver Board v1.0",source:"@site/docs/Top_Brand/Raspberry_Pi/Pi_HAT/Raspberry_Pi_Motor_Driver_Board_v1.0.md",sourceDirName:"Top_Brand/Raspberry_Pi/Pi_HAT",slug:"/Raspberry_Pi_Motor_Driver_Board_v1.0",permalink:"/Raspberry_Pi_Motor_Driver_Board_v1.0",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Raspberry_Pi/Pi_HAT/Raspberry_Pi_Motor_Driver_Board_v1.0.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"Raspberry Pi Motor Driver Board v1.0",title:"Raspberry Pi Motor Driver Board v1.0",keywords:["Pi_HAT"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Raspberry_Pi_Motor_Driver_Board_v1.0",last_update:{date:"1/11/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Raspberry Pi Breakout Board v1.0",permalink:"/Raspberry_Pi_Breakout_Board_v1.0"},next:{title:"DS1307 RTC (Real Time Clock) for Raspberry Pi",permalink:"/Pi_RTC-DS1307"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Usage",id:"usage",level:2},{value:"Hardware Installation",id:"hardware-installation",level:3},{value:"Software Part",id:"software-part",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Descussion",id:"tech-support--product-descussion",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/img/Raspberry_Pi_Motor_Board_v1.0.jpg",alt:null})),(0,n.kt)("p",null,"Raspberry Pi Motor Driver Board v1.0 is based on the Freescale MC33932 dual H-Bridge Power IC, which can control inductive loads with currents up to 5.0A peak per single bridge. It lets you drive two DC motors with your Raspberry Pi B/B+/A+ and Pi 2 Model B, controlling the speed and direction of each one independently."),(0,n.kt)("p",null,"Raspberry Pi Motor Driver Board v1.0 support a very wide range of input voltage from 6V~28V. otherwise ,the on board DC/DC converter support a very wide range of input voltage, and can provide a 5V power supply for the Raspberry Pi with 1000mA maximum current. So, you just need one power supply to drive the motors and power up the Raspberry Pi."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Raspberry-Pi-Motor-Board-v1.0-p-2411.html"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:null}))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Output short-circuit protection (short to VPWR or GND)"),(0,n.kt)("li",{parentName:"ul"},"Over-current limiting (regulation) via internal constant-off-time PWM"),(0,n.kt)("li",{parentName:"ul"},"Temperature dependant current limit threshold reduction"),(0,n.kt)("li",{parentName:"ul"},"Raspberry Pi 3B/3B+/4 compatible")),(0,n.kt)("h2",{id:"specifications"},"Specifications"),(0,n.kt)("table",{border:"1",cellspacing:"0",width:"600"},(0,n.kt)("tr",null,(0,n.kt)("th",{scope:"col"},"Item"),(0,n.kt)("th",{scope:"col"},"Min"),(0,n.kt)("th",{scope:"col"},"Typical"),(0,n.kt)("th",{scope:"col"},"Max"),(0,n.kt)("th",{scope:"col"},"Unit")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Operating Voltage"),(0,n.kt)("td",null,"6"),(0,n.kt)("td",null,"/"),(0,n.kt)("td",null,"28"),(0,n.kt)("td",null,"VDC")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"DC/DC output:"),(0,n.kt)("td",null,"/"),(0,n.kt)("td",null,"5V/1000mA"),(0,n.kt)("td",null,"/"),(0,n.kt)("td",null)),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Output Current (For Each Channel)"),(0,n.kt)("td",null,"/"),(0,n.kt)("td",null,"2 (continuous operation)"),(0,n.kt)("td",null,"5 (peak)"),(0,n.kt)("td",null,"A")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"PWM Frequency"),(0,n.kt)("td",null,"/"),(0,n.kt)("td",null,"/"),(0,n.kt)("td",null,"11"),(0,n.kt)("td",null,"kHz")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Output Duty Range"),(0,n.kt)("td",null,"0"),(0,n.kt)("td",null,"/"),(0,n.kt)("td",null,"100"),(0,n.kt)("td",null,"\xa0%")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Logic Input Voltage"),(0,n.kt)("td",null,"-0.3"),(0,n.kt)("td",null,"/"),(0,n.kt)("td",null,"7"),(0,n.kt)("td",null,"V")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Operating Temperature"),(0,n.kt)("td",null,"-40"),(0,n.kt)("td",null,"/"),(0,n.kt)("td",null,"120"),(0,n.kt)("td",null,"\u2103")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Dimensions"),(0,n.kt)("td",{colspan:"3"},"91.20 *56.15* 32"),(0,n.kt)("td",null,"mm"))),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/img/Raspberry_Pi_Motor_Board_v1.0_p3.jpg",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"J1"),":DC Input connector."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"J2"),":Motor Driver output connector."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"EN,FT"),":Jumpers for EN control and Fault flag detection.If short circuit the EN jumper, the EN signal was mapped to the D4 pin ,you can control the H-Bridge disable output or reset the Fault flag by D4 pin. If short circuit the FT jumper, the fault flag signal was mapped to D3 pin ,you can read the fault flag from the D3 pin ether."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"IO"),":Logic Voltage level Select Jumper. You can choose the control logic voltage level from this jumper."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Power Supply"),': You have to power up the shield from the J1(DC input connector).The input voltage range can be set up to 6Vdc ~ 28Vdc.The on board DC/DC converter can convert the DC input voltage to 5Vdc output voltage to supply the logic circuit.The DC/DC converter can also power up the microcontroller board(Arduino/Seeeduino) form "5V" pin for maximun 100mA current.'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Motor Interface"),"\uff1aOut 1 and Out 2 (Out 3 and Out 4) connect Motor A(B) for DC Motor.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Do not touch the H-bridge IC or PCB board during working. Its temperature can reach up to 100 degrees in the case of full load operating.")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"This demo is using Raspberry Pi B to show that Raspberry Pi Motor Driver Board v1.0 be use to control DC motor forward and backward."),(0,n.kt)("h3",{id:"hardware-installation"},"Hardware Installation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Raspberry Pi B & Raspberry Pi Motor Driver Board v1.0"),(0,n.kt)("li",{parentName:"ul"},"Hardware connection as shown")),(0,n.kt)("p",null,"Connect to network and power."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/img/Raspberry_Pi_Motor_Board_v1.0_p6.jpg",alt:null})),(0,n.kt)("h3",{id:"software-part"},"Software Part"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Download ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/Motor_Driver.py"},"Motor_Driver.py")," and ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/PiSoftPwm.py"},"PiSoftPwn.py")," into same folder. Here is the code of Motor_Driver.py.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"#!/usr/bin/python\nimport RPi.GPIO as GPIO\nimport time\nimport signal   \n\nfrom PiSoftPwm import *\n\n#print 'Go_1...'\n#frequency = 1.0 / self.sc_1.GetValue()\n#speed = self.sc_2.GetValue()\n\nclass Motor():\n    def __init__(self):\n    # MC33932 pins\n        self.PWMA = 25  \n        self.PWMB = 22\n        self._IN1 = 23  \n        self._IN2 = 24 \n        self._IN3 = 17\n        self._IN4 = 27\n\n    # Initialize PWMA PWMB \n        GPIO.setmode(GPIO.BCM)\n        GPIO.setup(self.PWMA, GPIO.OUT)\n        GPIO.setup(self.PWMB, GPIO.OUT)\n        GPIO.output(self.PWMA, True)\n        GPIO.output(self.PWMB, True)\n\n    # Initialize PWM outputs\n        self.OUT_1  = PiSoftPwm(0.1, 100, self._IN1, GPIO.BCM)\n        self.OUT_2  = PiSoftPwm(0.1, 100, self._IN2, GPIO.BCM)\n        self.OUT_3  = PiSoftPwm(0.1, 100, self._IN3, GPIO.BCM)\n        self.OUT_4  = PiSoftPwm(0.1, 100, self._IN4, GPIO.BCM)\n\n        # Close pwm output\n        self.OUT_1.start(0)\n        self.OUT_2.start(0)\n        self.OUT_3.start(0)\n        self.OUT_4.start(0)\n\n        self.frequency = 0.01\n        self.duty = 60\n\n    def Setting(self, frequency, duty):\n        self.frequency = frequency\n        self.duty = duty\n\n    def Go_1(self):\n        self.OUT_1.changeBaseTime(self.frequency)\n        self.OUT_2.changeBaseTime(self.frequency)\n        self.OUT_1.changeNbSlicesOn(self.duty)\n        self.OUT_2.changeNbSlicesOn(0)\n\n    def Back_1(self):\n        self.OUT_1.changeBaseTime(self.frequency)\n        self.OUT_2.changeBaseTime(self.frequency)\n        self.OUT_1.changeNbSlicesOn(0)\n        self.OUT_2.changeNbSlicesOn(self.duty)\n\n    def Go_2(self):\n        self.OUT_3.changeBaseTime(self.frequency)\n        self.OUT_4.changeBaseTime(self.frequency)\n        self.OUT_3.changeNbSlicesOn(0)\n        self.OUT_4.changeNbSlicesOn(self.duty)\n\n    def Back_2(self):\n        self.OUT_3.changeBaseTime(self.frequency)\n        self.OUT_4.changeBaseTime(self.frequency)\n        self.OUT_3.changeNbSlicesOn(self.duty)\n        self.OUT_4.changeNbSlicesOn(0)\n\n    def Stop(self):\n        self.OUT_1.changeNbSlicesOn(0)\n        self.OUT_2.changeNbSlicesOn(0)\n        self.OUT_3.changeNbSlicesOn(0)\n        self.OUT_4.changeNbSlicesOn(0)\n\nif __name__==\"__main__\":\n    motor=Motor()\n    # Called on process interruption. Set all pins to \"Input\" default mode.\n    def endProcess(signalnum = None, handler = None):\n        motor.OUT_1.stop()\n        motor.OUT_2.stop()\n        motor.OUT_3.stop()\n        motor.OUT_4.stop()\n        motor.GPIO.cleanup()\n        exit(0)\n\n    # Prepare handlers for process exit\n    signal.signal(signal.SIGTERM, endProcess)\n    signal.signal(signal.SIGINT, endProcess)\n    signal.signal(signal.SIGHUP, endProcess)\n    signal.signal (signal.SIGQUIT, endProcess)\n\n    motor.Setting(0.01, 60)\n    print 'motor start...'\n    while True:\n        print 'motor A turning forward...'\n        motor.Go_1()\n        time.sleep(1)\n        print 'motor A turning backward...'\n        motor.Back_1()\n        time.sleep(1)\n        print 'motor A stop...'\n     motor.Stop()\n     time.sleep(1)\n        print 'motor B turning forward...'\n        motor.Go_2()\n        time.sleep(1)\n        print 'motor B turning backward...'\n        motor.Back_2()\n        time.sleep(1)\n        print 'motor B stop...'\n     motor.Stop()\n     time.sleep(1)\n\n")),(0,n.kt)("p",null,"2.Run this program. LED1, LED2 on Raspberry Pi Motor Driver Board v1.0 will alternately light up; LED3, LED4 will also alternately light up."),(0,n.kt)("p",null,"It means Out 1 and Out 2 (Out 3 and Out 4) connect Motor A(B) forward and back."),(0,n.kt)("p",null,"3.You can see phenomemon as follows:"),(0,n.kt)("p",null,"Serial console:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/img/Raspberry_Pi_Motor_Board_v1.0_p4.jpg",alt:null})),(0,n.kt)("p",null,"Raspberry Pi Motor Driver Board v1.0:\nGreen LED and Blue LED alternately light up."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/img/Raspberry_Pi_Motor_Board_v1.0_p5.jpg",alt:null})),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/Raspberry_Pi_Motor_Driver_Board_v1.0_sch_pcb_20150119.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/Raspberry_Pi_Motor_Driver_Board_v1.0_sch_pcb_20150119.zip"},"Eagle file Raspberry Pi Motor Driver Board v1.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/Raspberry_Pi_Motor_Driver_Board_v1.0.pdf"},"PDF Raspberry Pi Motor Driver Board v1.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/MC33932VW.pdf"},"MC33932VW Datasheet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Raspberry_Pi_Motor_Driver_Board_v1.0/res/TD1519A.pdf"},"TD1519A Datasheet"))),(0,n.kt)("h2",{id:"tech-support--product-descussion"},"Tech Support & Product Descussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);