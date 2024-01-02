"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[11219],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>h});var r=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function n(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,i=function(t,e){if(null==t)return{};var a,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var s=r.createContext({}),c=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):n(n({},e),t)),a},p=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,i=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(a),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?r.createElement(h,n(n({ref:e},p),{},{components:a})):r.createElement(h,n({ref:e},p))}));function h(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=a.length,n=new Array(o);n[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[d]="string"==typeof t?t:i,n[1]=l;for(var c=2;c<o;c++)n[c]=a[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},58675:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>n,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),i=(a(67294),a(3905));const o={description:"Micro_bit bitcar",title:"BitCar",keywords:["Micro_bit"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Bitcar",last_update:{date:"12/29/2023",author:"Seraphina"}},n=void 0,l={unversionedId:"Top_Brand/Micro_bit/expansion_board/BitCar",id:"Top_Brand/Micro_bit/expansion_board/BitCar",title:"BitCar",description:"Micro_bit bitcar",source:"@site/docs/Top_Brand/Micro_bit/expansion_board/BitCar.md",sourceDirName:"Top_Brand/Micro_bit/expansion_board",slug:"/Bitcar",permalink:"/Bitcar",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Micro_bit/expansion_board/BitCar.md",tags:[],version:"current",lastUpdatedBy:"Seraphina",lastUpdatedAt:1703808e3,formattedLastUpdatedAt:"Dec 29, 2023",frontMatter:{description:"Micro_bit bitcar",title:"BitCar",keywords:["Micro_bit"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Bitcar",last_update:{date:"12/29/2023",author:"Seraphina"}},sidebar:"ProductSidebar",previous:{title:"BitPlayer",permalink:"/BitPlayer"},next:{title:"Home Assistant",permalink:"/home_assistant_topic"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Tutorials",id:"tutorials",level:2},{value:"1. Line Following",id:"1-line-following",level:3},{value:"1.1 Implementation",id:"11-implementation",level:4},{value:"1.2 Write a Program",id:"12-write-a-program",level:4},{value:"1.3 Connect a Device",id:"13-connect-a-device",level:4},{value:"1.4 Upload a Program",id:"14-upload-a-program",level:4},{value:"1.5 Run a Program",id:"15-run-a-program",level:4},{value:"2. Obstacle Avoidance",id:"2-obstacle-avoidance",level:3},{value:"2.1 Implementation",id:"21-implementation",level:4},{value:"2.2 Write a Program",id:"22-write-a-program",level:4},{value:"2.3 Connect a Device",id:"23-connect-a-device",level:4},{value:"2.4 Upload a Program",id:"24-upload-a-program",level:4},{value:"2.5 Run a Program",id:"25-run-a-program",level:4},{value:"3. RC Car (Controlled by a micro:bit)",id:"3-rc-car-controlled-by-a-microbit",level:3},{value:"3.1 Implementation",id:"31-implementation",level:4},{value:"3.2 Write a Program",id:"32-write-a-program",level:4},{value:"3.3 Connect a Device",id:"33-connect-a-device",level:4},{value:"3.4 Upload a Program",id:"34-upload-a-program",level:4},{value:"3.5 Run a Program",id:"35-run-a-program",level:4},{value:"4. RC Car (Controlled by a micro:bit and a BitPlayer)",id:"4-rc-car-controlled-by-a-microbit-and-a-bitplayer",level:3},{value:"4.1 Implementation",id:"41-implementation",level:4},{value:"4.2 Write a Program",id:"42-write-a-program",level:4},{value:"4.3 Connect a Device",id:"43-connect-a-device",level:4},{value:"4.4 Upload a Program",id:"44-upload-a-program",level:4},{value:"4.5 Run a Program",id:"45-run-a-program",level:4},{value:"5. Python",id:"5-python",level:3},{value:"5.1 Motor Control",id:"51-motor-control",level:4},{value:"Course Information and Sample Lesson Download",id:"course-information-and-sample-lesson-download",level:2},{value:"IV Attachments",id:"iv-attachments",level:2},{value:"Attachment 1 BitCar Assembly Instruction\uff1aAttachment 1 BitCar Assembly Instruction.pdf",id:"attachment-1-bitcar-assembly-instructionattachment-1-bitcar-assembly-instructionpdf",level:4},{value:"Attachment 2 BitCar Map\uff1aAttachment 2 BitCar Map.pdf",id:"attachment-2-bitcar-mapattachment-2-bitcar-mappdf",level:4},{value:"Attachment 3 BitCar Cover &amp; Chassis\uff1aAttachment 3 BitCar Cover - Chassis.zip",id:"attachment-3-bitcar-cover--chassisattachment-3-bitcar-cover---chassiszip",level:4},{value:"Attachment 4 Source Code\uff1aAttachment 4 Source Code.zip",id:"attachment-4-source-codeattachment-4-source-codezip",level:4},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],p={toc:c},d="wrapper";function u(t){let{components:e,...a}=t;return(0,i.kt)(d,(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/microbit/bitplayer/9.png",alt:null})),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"BitCar is a micro:bit project that designs a smart, programmable robot car to encourage kids\u2019 STEAM learning. After combining programs from Microsoft MakeCode, the robot car will be able to perform line following, obstacle avoidance and even a wheelie. The car carries a speaker itself for playing melodies and sound effect, and has 4 colorful RGB LEDs on the underside of it and a detachable ultrasonic sensor in the front for avoiding obstacles on the way."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/microbit/bitplayer/10.png",alt:null})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The micro:bit, USB cable and batteries are not included in the package. You need to prepare them separately. For specific details about how to assemble the car, see Attachment 1 BitCar Assembly Instruction. For details about the cover and chassis, see Attachment 3 BitCar Cover & Chassis.")),(0,i.kt)("h2",{id:"tutorials"},"Tutorials"),(0,i.kt)("p",null,"Here are some example tutorials for you to learn how to use this kit. Let\u2019s get started!"),(0,i.kt)("h3",{id:"1-line-following"},"1. Line Following"),(0,i.kt)("h4",{id:"11-implementation"},"1.1 Implementation"),(0,i.kt)("p",null,"After the car starts up, it can drive along the track."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/microbit/bitplayer/11.png",alt:null})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"See Attachment 2 BitCar Map")),(0,i.kt)("h4",{id:"12-write-a-program"},"1.2 Write a Program"),(0,i.kt)("p",null,"Note that you need to add an extension in MakeCode because it doesn\u2019t have blocks that control the car. Follow the instruction below to add the extension."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Let\u2019s go to MakeCode first: ",(0,i.kt)("a",{parentName:"p",href:"https://makecode.microbit.org/"},"https://makecode.microbit.org/"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 1 Create a new project which takes you to the workspace. Click on the gear icon (for setting)."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/microbit/bitplayer/12.png",alt:null}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 2 Click \u201cExtensions\u201d from the drop-down list and then you will enter the extension page."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/microbit/bitplayer/13.png",alt:null}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step 3 Copy and paste this extension link onto the search box: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/TinkerGen/pxt-BitCar"},"https://github.com/TinkerGen/pxt-BitCar")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/microbit/bitplayer/14.png",alt:null})))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If a prompt says that this extension does not exist, please close the browser and try again.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Step 4 Click the extension icon and go back to the workspace.",(0,i.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/microbit/bitplayer/15.png",alt:null}))),(0,i.kt)("p",null,"After you added the extension, we can start the task."),(0,i.kt)("p",null,"Firstly, add a \u201cforever\u201d block. If the black line is detected on the left side, the car should make a short left turn so that it can still follow the track. In this case, we set the left motor speed as 3% and the right motor speed as 15%. Similarly, if the black line is detected on the right side, the car should make a short right turn. And we set the right motor speed as 3% and left motor speed as 15%."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You can adjust the motor speed as needed.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/microbit/bitplayer/16.png",alt:null})),(0,i.kt)("h4",{id:"13-connect-a-device"},"1.3 Connect a Device"),(0,i.kt)("p",null,"Slide the micro:bit into BitCar and be careful not to reverse it. Then, connect the micro:bit to your PC with a USB cable. Check if the LED indicator on the micro:bit lights up or not. If not, you need to plug in the USB cable again."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/microbit/bitplayer/17.png",alt:null})),(0,i.kt)("h4",{id:"14-upload-a-program"},"1.4 Upload a Program"),(0,i.kt)("p",null,"The previous tutorials have already shown you how to download the program that you wrote. You just need to rename your program, click the \u201cDownload\u201d button and send it to your micro:bit."),(0,i.kt)("h4",{id:"15-run-a-program"},"1.5 Run a Program"),(0,i.kt)("p",null,"Turn on the switch on the car and see if it can run normally."),(0,i.kt)("h3",{id:"2-obstacle-avoidance"},"2. Obstacle Avoidance"),(0,i.kt)("h4",{id:"21-implementation"},"2.1 Implementation"),(0,i.kt)("p",null,"After the car starts up, it can drive along the track and stop as soon as it sees an obstacle."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/microbit/bitplayer/18.png",alt:null})),(0,i.kt)("h4",{id:"22-write-a-program"},"2.2 Write a Program"),(0,i.kt)("p",null,"Still we use a same method in Tutorial 1 to add the BitCar extension.",(0,i.kt)("br",null),"\nFirstly, add a \u201cForever\u201d block. If the ultrasonic sensor detects an object to a distance smaller than 12, then set the left motor speed as 20% and right motor speed as 0%. Then set a 0.7 s timeout."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/microbit/bitplayer/19.png",alt:null})),(0,i.kt)("h4",{id:"23-connect-a-device"},"2.3 Connect a Device"),(0,i.kt)("p",null,"Slide the micro:bit into BitCar and be careful not to reverse it. Then, connect the micro:bit to your PC with a USB cable. Check if the LED indicator on the micro:bit lights up or not. If not, you need to plug in the USB cable again. Bring out the ultrasonic sensor and install it to the car."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/microbit/bitplayer/20.png",alt:null})),(0,i.kt)("p",null,"How to install the ultrasonic sensor (see the user manual in the package):"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/microbit/bitplayer/21.png",alt:null})),(0,i.kt)("h4",{id:"24-upload-a-program"},"2.4 Upload a Program"),(0,i.kt)("p",null,"You have been introduced how to download your programs in the previous tutorials. You just need to rename your program, click the \u201cDownload\u201d button and send it to your micro:bit."),(0,i.kt)("h4",{id:"25-run-a-program"},"2.5 Run a Program"),(0,i.kt)("p",null,"Turn on the switch on the car and see if it can run normally."),(0,i.kt)("h3",{id:"3-rc-car-controlled-by-a-microbit"},"3. RC Car (Controlled by a micro:bit)"),(0,i.kt)("h4",{id:"31-implementation"},"3.1 Implementation"),(0,i.kt)("p",null,"After the car starts up, the car will go forward if the button A on micro:bit is pressed down; and it will go backward if the button B is pressed down."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/microbit/bitplayer/22.png",alt:null})),(0,i.kt)("h4",{id:"32-write-a-program"},"3.2 Write a Program"),(0,i.kt)("p",null,"Still we use a same method in Tutorial 1 to add the BitCar extension."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"micro:bit Program",(0,i.kt)("br",null),"\nAdd an \u201con start\u201d block. Connect the block \u201cradio set group\u201d into it. Drag and drop the \u201cForever\u201d block. Follow this program logic: if the button A is pressed, then the radio will send the number \u201c1\u201d; if the button B is pressed, then the radio will send the number \u201c2\u201d.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"BitCar Program",(0,i.kt)("br",null),"\nAdd an \u201con start\u201d block. Connect the block \u201cradio set group\u201d into it. Follow this program logic: the radio receives a signal \u201creceivedNumber\u201d. If \u201creceivedNumber\u201d equals to 1, then the car will go forward at a 15% speed. If \u201creceivedNumber\u201d equals to 2, then the car will go backward at a 15% speed."))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/microbit/bitplayer/23.png",alt:null})),(0,i.kt)("p",null,"micro:bit Controller Program"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/microbit/bitplayer/24.png",alt:null})),(0,i.kt)("p",null,"BitCar Receiver Program"),(0,i.kt)("h4",{id:"33-connect-a-device"},"3.3 Connect a Device"),(0,i.kt)("p",null,"Slide the micro:bit into BitCar and be careful not to reverse it. Then, connect the micro:bit to your PC with a USB cable. Check if the LED indicator on the micro:bit lights up or not. If not, you need to plug in the USB cable again."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"There are 2 groups of programs, thus you\u2019ll need 2 micro:bits for this project. Use one micro:bit to connect to the power, and the other one to control the car. You also need to write and download programs separately to distinguish the two micro:bits. The micro:bits mentioned in this tutorial are not included in the package.")),(0,i.kt)("h4",{id:"34-upload-a-program"},"3.4 Upload a Program"),(0,i.kt)("p",null,"You have been introduced how to download your programs in the previous tutorials. You just need to rename your program, click the \u201cDownload\u201d button and send it to your micro:bit."),(0,i.kt)("h4",{id:"35-run-a-program"},"3.5 Run a Program"),(0,i.kt)("p",null,"Turn on the switch on the car and see if it can run normally."),(0,i.kt)("h3",{id:"4-rc-car-controlled-by-a-microbit-and-a-bitplayer"},"4. RC Car (Controlled by a micro:bit and a BitPlayer)"),(0,i.kt)("h4",{id:"41-implementation"},"4.1 Implementation"),(0,i.kt)("p",null,"If the joystick is pulled up, the car goes forward; if the joystick is pulled back, the car goes backward; if the joystick is pulled to the left, the car turns left; if the joystick is pulled to the right, the car turns right; if the button A is pressed, the car stands up; if the button B is pressed, the car stops."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/microbit/bitplayer/25.png",alt:null})),(0,i.kt)("h4",{id:"42-write-a-program"},"4.2 Write a Program"),(0,i.kt)("p",null,"Still we use a same method in Tutorial 1 to add the BitCar extension.",(0,i.kt)("br",null),"\nBitCar Extension: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/TinkerGen/pxt-BitCar"},"https://github.com/TinkerGen/pxt-BitCar"),(0,i.kt)("br",null),"\nBitPlayer Extension: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/TinkerGen/pxt-BitPlayer"},"https://github.com/TinkerGen/pxt-BitPlayer")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"BitPlayer Program",(0,i.kt)("br",null),"\nAdd an \u201con start\u201d block. Connect the block \u201cradio set group\u201d into it. Drag and drop a \u201cForever\u201d block. Start adding blocks under this program logic: if the joystick is pulled up, the radio will send the number \u201c1\u201d; if the joystick is pulled back, the radio will send the number \u201c2\u201d; if the joystick is pulled to the left, the radio will send the number \u201c3\u201d; if the joystick is pulled to the right, the radio will send the number \u201c4\u201d; if the button A is pressed, the radio will send the number \u201c5\u201d; if the button B is pressed, the radio will send the number \u201c6\u201d.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"BitCar Program",(0,i.kt)("br",null),"\nAdd an \u201con start\u201d block. Connect the block \u201cradio set group\u201d into it. If \u201creceivedNumber\u201d equals to 1, the car will go forward at a 15% speed; if \u201creceivedNumber\u201d equals to 2, the car will go backward at a 15% speed; if \u201creceivedNumber\u201d equals to 3, the right motor speed will be 20% and the left motor speed will be 0%, then the car will go forward at a 15% speed again; if the \u201creceivedNumber\u201d equals to 4, the left motor speed will be 20% and the right motor speed will be 0%, then the car will go forward at a 15% speed again; if the \u201creceivedNumber\u201d equals to 5, the car will do a stand-up act at a 100% speed; if the \u201creceivedNumber\u201d equals to 6, the car will stop."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/microbit/bitplayer/26.png",alt:null})))),(0,i.kt)("p",null,"BitPlayer Program"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/microbit/bitplayer/27.png",alt:null})),(0,i.kt)("p",null,"BitCar Program"),(0,i.kt)("h4",{id:"43-connect-a-device"},"4.3 Connect a Device"),(0,i.kt)("p",null,"Slide the micro:bit into BitCar and be careful not to reverse it. Then, connect the micro:bit to your PC with a USB cable. Check if the LED indicator on the micro:bit lights up or not. If not, you need to plug in the USB cable again."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"There are 2 groups of programs, thus you\u2019ll need 2 micro:bits for this project. One micro:bit is for BitPlayer; the other one is for BitCar. You also need to write and download programs separately to distinguish the two micro:bits. The micro:bits mentioned in this tutorial are not included in the package.")),(0,i.kt)("h4",{id:"44-upload-a-program"},"4.4 Upload a Program"),(0,i.kt)("p",null,"You have been introduced how to download your programs in the previous tutorials. You just need to rename your program, click the \u201cDownload\u201d button and send it to your micro:bit."),(0,i.kt)("h4",{id:"45-run-a-program"},"4.5 Run a Program"),(0,i.kt)("p",null,"Turn on the BitCar and BitPlayer. After they match up, observe how the program is runing."),(0,i.kt)("h3",{id:"5-python"},"5. Python"),(0,i.kt)("p",null,"In addition to the tutorials above, you can also use Python to control the BitCar. Below is the example program:"),(0,i.kt)("h4",{id:"51-motor-control"},"5.1 Motor Control"),(0,i.kt)("p",null,"First, we will import all necessary micro:bit modules."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add your Python code here. E.g."),(0,i.kt)("li",{parentName:"ol"},"from microbit import *")),(0,i.kt)("p",null,"Then we define a function called movement(left,right), the value of left and right is the speed (from -255 to 255) for each motor."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"1. def movement(left, right):\n2.     if left > 0:\n3.         pin13.write_analog(0)\n4.         pin14.write_analog(left)\n5.     elif left < 0:\n6.         pin13.write_analog(left)\n7.         pin14.write_analog(0)\n8.     if right > 0:\n9.         pin15.write_analog(0)\n10.         pin16.write_analog(right)\n11.     elif right > 0:\n12.         pin15.write_analog(right)\n13.         pin16.write_analog(0)\n")),(0,i.kt)("p",null,"Define another function called stop(), we call this function to stop the BitCar."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"1. def stop():\n2.         pin13.write_analog(0)\n3.         pin14.write_analog(0)\n4.         pin15.write_analog(0)\n5.         pin16.write_analog(0)\n")),(0,i.kt)("p",null,"With the functions we just defined above, we can control BitCar as follow:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Move forward in full speed:"),(0,i.kt)("br",null),"\nmovement(255, 255) "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Move backward in full speed:"),(0,i.kt)("br",null),"\nmovement(-255, -255)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Spin clockwise:"),(0,i.kt)("br",null),"\nmovement(255, -255)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Stop:")," ",(0,i.kt)("br",null),"\nstop()"),(0,i.kt)("h2",{id:"course-information-and-sample-lesson-download"},"Course Information and Sample Lesson Download"),(0,i.kt)("p",null,"You can see related micro:bit and BitCar courses on Make 2 Learn via this address: ",(0,i.kt)("a",{parentName:"p",href:"https://make2learn.tinkergen.com/"},"https://make2learn.tinkergen.com")),(0,i.kt)("h2",{id:"iv-attachments"},"IV Attachments"),(0,i.kt)("h4",{id:"attachment-1-bitcar-assembly-instructionattachment-1-bitcar-assembly-instructionpdf"},"Attachment 1 BitCar Assembly Instruction\uff1a",(0,i.kt)("a",{parentName:"h4",href:"https://www.yuque.com/attachments/yuque/0/2021/pdf/2586586/1611139152936-2a2f2e8f-2180-4de1-906f-9c8f887ef21b.pdf?_lake_card=%7B%22uid%22%3A%221611139151730-0%22%2C%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fpdf%2F2586586%2F1611139152936-2a2f2e8f-2180-4de1-906f-9c8f887ef21b.pdf%22%2C%22name%22%3A%22Attachment%201%20BitCar%20Assembly%20Instruction.pdf%22%2C%22size%22%3A818663%2C%22type%22%3A%22application%2Fpdf%22%2C%22ext%22%3A%22pdf%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22status%22%3A%22done%22%2C%22percent%22%3A0%2C%22id%22%3A%22UXHlE%22%2C%22card%22%3A%22file%22%7D"},"Attachment 1 BitCar Assembly Instruction.pdf")),(0,i.kt)("h4",{id:"attachment-2-bitcar-mapattachment-2-bitcar-mappdf"},"Attachment 2 BitCar Map\uff1a",(0,i.kt)("a",{parentName:"h4",href:"https://www.yuque.com/attachments/yuque/0/2021/pdf/2586586/1611139164219-df9b9f60-69cf-442a-aa5e-d19375e2db42.pdf?_lake_card=%7B%22uid%22%3A%221611139162975-0%22%2C%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fpdf%2F2586586%2F1611139164219-df9b9f60-69cf-442a-aa5e-d19375e2db42.pdf%22%2C%22name%22%3A%22Attachment%202%20BitCar%20Map.pdf%22%2C%22size%22%3A753958%2C%22type%22%3A%22application%2Fpdf%22%2C%22ext%22%3A%22pdf%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22status%22%3A%22done%22%2C%22percent%22%3A0%2C%22id%22%3A%22n0BjB%22%2C%22card%22%3A%22file%22%7D"},"Attachment 2 BitCar Map.pdf")),(0,i.kt)("h4",{id:"attachment-3-bitcar-cover--chassisattachment-3-bitcar-cover---chassiszip"},"Attachment 3 BitCar Cover & Chassis\uff1a",(0,i.kt)("a",{parentName:"h4",href:"https://www.yuque.com/attachments/yuque/0/2021/zip/2586586/1611139173171-cc697c4d-d078-44e3-aeff-c417794abd63.zip?_lake_card=%7B%22uid%22%3A%221611139172665-0%22%2C%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fzip%2F2586586%2F1611139173171-cc697c4d-d078-44e3-aeff-c417794abd63.zip%22%2C%22name%22%3A%22Attachment%203%20BitCar%20Cover%20-%20Chassis.zip%22%2C%22size%22%3A367966%2C%22type%22%3A%22application%2Fzip%22%2C%22ext%22%3A%22zip%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22status%22%3A%22done%22%2C%22percent%22%3A0%2C%22id%22%3A%22T1EXv%22%2C%22card%22%3A%22file%22%7D"},"Attachment 3 BitCar Cover - Chassis.zip")),(0,i.kt)("h4",{id:"attachment-4-source-codeattachment-4-source-codezip"},"Attachment 4 Source Code\uff1a",(0,i.kt)("a",{parentName:"h4",href:"https://www.yuque.com/attachments/yuque/0/2021/zip/2586586/1611139182836-375d7ba6-c135-4684-8b89-76247c1e617f.zip?_lake_card=%7B%22uid%22%3A%221611139180453-0%22%2C%22src%22%3A%22https%3A%2F%2Fwww.yuque.com%2Fattachments%2Fyuque%2F0%2F2021%2Fzip%2F2586586%2F1611139182836-375d7ba6-c135-4684-8b89-76247c1e617f.zip%22%2C%22name%22%3A%22Attachment%204%20Source%20Code.zip%22%2C%22size%22%3A1535318%2C%22type%22%3A%22application%2Fzip%22%2C%22ext%22%3A%22zip%22%2C%22progress%22%3A%7B%22percent%22%3A99%7D%2C%22status%22%3A%22done%22%2C%22percent%22%3A0%2C%22id%22%3A%227lUfd%22%2C%22card%22%3A%22file%22%7D"},"Attachment 4 Source Code.zip")),(0,i.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,i.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,i.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,i.kt)("div",{class:"button_tech_support_container"},(0,i.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,i.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);