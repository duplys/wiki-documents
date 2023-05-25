"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[66126],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),p=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=p(a),c=n,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return a?r.createElement(k,l(l({ref:e},d),{},{components:a})):r.createElement(k,l({ref:e},d))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[u]="string"==typeof t?t:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},74115:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={description:"Grove - LCD RGB Backlight",title:"Grove - LCD RGB Backlight",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-LCD_RGB_Backlight",last_update:{date:"1/7/2023",author:"shuxu hu"}},l=void 0,o={unversionedId:"Sensor/Grove/Grove_Accessories/Display/Grove-LCD_RGB_Backlight",id:"Sensor/Grove/Grove_Accessories/Display/Grove-LCD_RGB_Backlight",title:"Grove - LCD RGB Backlight",description:"Grove - LCD RGB Backlight",source:"@site/docs/Sensor/Grove/Grove_Accessories/Display/Grove-LCD_RGB_Backlight.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Display",slug:"/Grove-LCD_RGB_Backlight",permalink:"/Grove-LCD_RGB_Backlight",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Display/Grove-LCD_RGB_Backlight.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673049600,formattedLastUpdatedAt:"Jan 7, 2023",frontMatter:{description:"Grove - LCD RGB Backlight",title:"Grove - LCD RGB Backlight",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-LCD_RGB_Backlight",last_update:{date:"1/7/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - 16x2 LCD",permalink:"/Grove-16x2_LCD_Series"},next:{title:'Grove - OLED Display 0.66" (SSD1306)',permalink:"/Grove-OLED-Display-0.66-SSD1306_v1.0"}},s={},p=[{value:"Version",id:"version",level:2},{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Play with Codecraft",id:"play-with-codecraft",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play With Raspberry Pi",id:"play-with-raspberry-pi",level:3},{value:"FAQ",id:"faq",level:2},{value:"Resources",id:"resources",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support &amp; Product Descussion",id:"tech-support--product-descussion",level:2}],d={toc:p};function u(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/intro.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"Done with tedious mono color backlight? This Grove enables you to set the color to whatever you like via\nthe simple and concise Grove interface. It takes I2C as communication method with your microcontroller.\nSo number of pins required for data exchange and backlight control shrinks from ~10 to 2, relieving IOs for\nother challenging tasks. Besides, Grove - LCD RGB Backlight supports user-defined characters. Want to get\na love heart or some other foreign characters? Just take advantage of this feature and design it!\nThis product is a replacement of Grove - Serial LCD. If you are looking for primitive 16x2 LCD modules, we\nhave green yellow backlight version and blue backlight version on sale also."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html"},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"This document works for Grove-LCD RGB Backlight Version 1.0, 2.0 and 4.0.\n"))),(0,n.kt)("h2",{id:"version"},"Version"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Changes"),(0,n.kt)("th",{parentName:"tr",align:null},"Released Date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grove-LCD RGB Backlight V1.0"),(0,n.kt)("td",{parentName:"tr",align:null},"Initial"),(0,n.kt)("td",{parentName:"tr",align:null},"June 2012")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grove-LCD RGB Backlight V2.0"),(0,n.kt)("td",{parentName:"tr",align:null},"Optimize PCB layout"),(0,n.kt)("td",{parentName:"tr",align:null},"Nov 2013")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grove-LCD RGB Backlight V4.0"),(0,n.kt)("td",{parentName:"tr",align:null},"Optimize PCB layout"),(0,n.kt)("td",{parentName:"tr",align:null},"Sep 2016")))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"RGB Backlight"),(0,n.kt)("li",{parentName:"ul"},"I2C communication"),(0,n.kt)("li",{parentName:"ul"},"Built-in English fonts"),(0,n.kt)("li",{parentName:"ul"},"16x2 LCD")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Item"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Input Voltage"),(0,n.kt)("td",{parentName:"tr",align:null},"5V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operating Current"),(0,n.kt)("td",{parentName:"tr",align:null},"<60mA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CGROM"),(0,n.kt)("td",{parentName:"tr",align:null},"10880 bit")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CGRAM"),(0,n.kt)("td",{parentName:"tr",align:null},"64x8 bit")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"LCD I2C Address"),(0,n.kt)("td",{parentName:"tr",align:null},"0X3E")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RGB I2C Address"),(0,n.kt)("td",{parentName:"tr",align:null},"0X62")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"There are 4 I2C addresses and we use 2 I2C addresses for LCD and RGB.\n"))),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:"pir",width:200,height:"auto"})))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,n.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Human Machine Interface"),(0,n.kt)("li",{parentName:"ul"},"Smart House"),(0,n.kt)("li",{parentName:"ul"},"Sensor Hub")),(0,n.kt)("p",null,"Here are some projects for your reference."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Edison Wi-Fi Address"),(0,n.kt)("th",{parentName:"tr",align:null},"WiFi Enabled Greenhouse"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove Lucky Dumpling"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project1.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project2.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project3.jpg",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.instructables.com/id/Show-the-Intel-Edison-WiFi-IP-Address-on-a-Grove-L/"},"Make it Now!")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.instructables.com/id/Arduino-Grove-Greenhouse/"},"Make it Now!")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.instructables.com/id/Grove-Lucky-Dumpling/"},"Make it Now!"))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Toothbrushing Instructor"),(0,n.kt)("th",{parentName:"tr",align:null},"LinkIt ONE Pager"),(0,n.kt)("th",{parentName:"tr",align:null},"LinkIt ONE IoT Demo"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project4.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project5.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/images/project6.jpg",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.instructables.com/id/Toothbrushing-Instructor/"},"Make it Now!")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.instructables.com/id/LinkIt-ONE-Pager/"},"Make it Now!")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://community.seeedstudio.com/project_detail.html?id=78"},"Make it Now!"))))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.\n"))),(0,n.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Hardware")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove-LCD RGB Backlight"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/rgb.jpg",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html"},"Get One Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," Connect Grove-LCD RGB Backlight to ",(0,n.kt)("strong",{parentName:"li"},"I2C")," port of Grove-Base Shield."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Plug Grove - Base Shield into Seeeduino."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Connect Seeeduino to PC via a USB cable.")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/seeeduino_rgb.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"If we don't have Grove Base Shield, We also can directly connect Grove-LCD RGB Backlight to Seeeduino as below.\n"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove-LCD RGB Backlight"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5V"),(0,n.kt)("td",{parentName:"tr",align:null},"Red")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"Black")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SDA"),(0,n.kt)("td",{parentName:"tr",align:null},"White")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SCL"),(0,n.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Software")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Download the  ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip"}," Grove-LCD RGB Backlight Library"),"  from Github.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Refer ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Here are 12 examples in the library as below. "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Autoscroll"),(0,n.kt)("li",{parentName:"ul"},"Blink"),(0,n.kt)("li",{parentName:"ul"},"Cursor"),(0,n.kt)("li",{parentName:"ul"},"CustomCharacter"),(0,n.kt)("li",{parentName:"ul"},"Display"),(0,n.kt)("li",{parentName:"ul"},"fade"),(0,n.kt)("li",{parentName:"ul"},"HelloWorld"),(0,n.kt)("li",{parentName:"ul"},"Scroll"),(0,n.kt)("li",{parentName:"ul"},"SerialDisplay"),(0,n.kt)("li",{parentName:"ul"},"setColor"),(0,n.kt)("li",{parentName:"ul"},"setCursor"),(0,n.kt)("li",{parentName:"ul"},"TextDirection"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Please follow below picture to select example ",(0,n.kt)("strong",{parentName:"p"},"HelloWorld")," and upload the arduino. If you do not know how to upload the code, please check ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"how to upload code"),"."))),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/example.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"Here is the code of HelloWorld.ino."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c++"},'#include <Wire.h>\n#include "rgb_lcd.h"\n\nrgb_lcd lcd;\n\nconst int colorR = 255;\nconst int colorG = 0;\nconst int colorB = 0;\n\nvoid setup() \n{\n    // set up the LCD\'s number of columns and rows:\n    lcd.begin(16, 2);\n    \n    lcd.setRGB(colorR, colorG, colorB);\n    \n    // Print a message to the LCD.\n    lcd.print("hello, world!");\n\n    delay(1000);\n}\n\nvoid loop() \n{\n    // set the cursor to column 0, line 1\n    // (note: line 1 is the second row, since counting begins with 0):\n    lcd.setCursor(0, 1);\n    // print the number of seconds since reset:\n    lcd.print(millis()/1000);\n\n    delay(100);\n}\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," We will see the hello world on LCD.")),(0,n.kt)("h3",{id:"play-with-codecraft"},"Play with Codecraft"),(0,n.kt)("h4",{id:"hardware"},"Hardware"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Using a Grove cable connect Grove - LCD  RGB Backlight to Seeeduino's I2C port. If you are using Arduino, please take advantage of a Base Shield."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Link Seeedino/Arduino to your PC via an USB cable."),(0,n.kt)("h4",{id:"software"},"Software"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Open ",(0,n.kt)("a",{parentName:"p",href:"https://ide.chmakered.com/"},"Codecraft"),", add Arduino support, and drag a main procedure to working area."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).\n"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/cc_LCD_RGB_Backlight.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"Upload the program to your Arduino/Seeeduino."),(0,n.kt)("admonition",{type:"success"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},'When the code finishes uploaded, you will see "hello, world!" and system running time displayed in the LCD.\n'))),(0,n.kt)("h3",{id:"play-with-raspberry-pi"},"Play With Raspberry Pi"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Hardware")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,n.kt)("th",{parentName:"tr",align:null},"GrovePi_Plus"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove-LCD RGB Backlight"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/rgb.jpg",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/GrovePi%2B-p-2241.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-LCD-RGB-Backlight-p-1643.html"},"Get One Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," Plug the GrovePi_Plus into Raspberry."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Connect Grove-LCD RGB Backlight to ",(0,n.kt)("strong",{parentName:"li"},"I2C")," port of GrovePi_Plus."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Connect the Raspberry to PC through USB cable.")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/img/rpi_rgb.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Software")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"}," If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.\n"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Follow ",(0,n.kt)("a",{parentName:"li",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/"},"Setting Software")," to configure the development environment."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," Git clone the Github repository.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/DexterInd/GrovePi.git\n\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Excute below commands to use the Grove-LCD RGB Backlight to display.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"cd ~/GrovePi/Software/Python/grove_rgb_lcd\npython3 grove_rgb_lcd.py\n")),(0,n.kt)("p",null,"Here is the grove_rgb_lcd.py code."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"import time,sys\n\nif sys.platform == 'uwp':\n    import winrt_smbus as smbus\n    bus = smbus.SMBus(1)\nelse:\n    import smbus\n    import RPi.GPIO as GPIO\n    rev = GPIO.RPI_REVISION\n    if rev == 2 or rev == 3:\n        bus = smbus.SMBus(1)\n    else:\n        bus = smbus.SMBus(0)\n\n# this device has two I2C addresses\nDISPLAY_RGB_ADDR = 0x62\nDISPLAY_TEXT_ADDR = 0x3e\n\n# set backlight to (R,G,B) (values from 0..255 for each)\ndef setRGB(r,g,b):\n    bus.write_byte_data(DISPLAY_RGB_ADDR,0,0)\n    bus.write_byte_data(DISPLAY_RGB_ADDR,1,0)\n    bus.write_byte_data(DISPLAY_RGB_ADDR,0x08,0xaa)\n    bus.write_byte_data(DISPLAY_RGB_ADDR,4,r)\n    bus.write_byte_data(DISPLAY_RGB_ADDR,3,g)\n    bus.write_byte_data(DISPLAY_RGB_ADDR,2,b)\n\n# send command to display (no need for external use)    \ndef textCommand(cmd):\n    bus.write_byte_data(DISPLAY_TEXT_ADDR,0x80,cmd)\n\n# set display text \\n for second line(or auto wrap)     \ndef setText(text):\n    textCommand(0x01) # clear display\n    time.sleep(.05)\n    textCommand(0x08 | 0x04) # display on, no cursor\n    textCommand(0x28) # 2 lines\n    time.sleep(.05)\n    count = 0\n    row = 0\n    for c in text:\n        if c == '\\n' or count == 16:\n            count = 0\n            row += 1\n            if row == 2:\n                break\n            textCommand(0xc0)\n            if c == '\\n':\n                continue\n        count += 1\n        bus.write_byte_data(DISPLAY_TEXT_ADDR,0x40,ord(c))\n\n#Update the display without erasing the display\ndef setText_norefresh(text):\n    textCommand(0x02) # return home\n    time.sleep(.05)\n    textCommand(0x08 | 0x04) # display on, no cursor\n    textCommand(0x28) # 2 lines\n    time.sleep(.05)\n    count = 0\n    row = 0\n    while len(text) < 32: #clears the rest of the screen\n        text += ' '\n    for c in text:\n        if c == '\\n' or count == 16:\n            count = 0\n            row += 1\n            if row == 2:\n                break\n            textCommand(0xc0)\n            if c == '\\n':\n                continue\n        count += 1\n        bus.write_byte_data(DISPLAY_TEXT_ADDR,0x40,ord(c))\n\n# example code\nif __name__==\"__main__\":\n    setText(\"Hello world\\nThis is an LCD test\")\n    setRGB(0,128,64)\n    time.sleep(2)\n    for c in range(0,255):\n        setText_norefresh(\"Going to sleep in {}...\".format(str(c)))\n        setRGB(c,255-c,0)\n        time.sleep(0.1)\n    setRGB(0,255,0)\n    setText(\"Bye bye, this should wrap onto next line\")\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," We will see the Grove-LCD RGB Backlight display as Going to sleep in 1...")),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Q1: How to use multiple Grove-LCD RGB Backlight? "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A1: Please refer to ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Arduino_Software_I2C_user_guide/"},"Arduino Software I2C user guide"),"."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Q2: How to use button to switch Grove RGB LCD to display different pages? "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A2: Here is the code. ")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c++"},'\n#include <Wire.h>\n#include "rgb_lcd.h"\n\nrgb_lcd lcd;\nconst int switchPin = 2;\nstatic int hits = 0;\nint switchState = 0;\nint prevSwitchState = 0;\n\nvoid setup() {\n    lcd.begin(16, 2);\n    pinMode(switchPin,INPUT);\n    Serial.begin(9600);\n    lcd.setCursor(0, 0);\n    lcd.print("Page 1");\n}\n\nvoid loop() {  \n  switchState = digitalRead(switchPin);\n  Serial.print("switchState:");Serial.println(switchState);\n  if (switchState != prevSwitchState) {\n    if (switchState == HIGH) {\n          hits = hits + 1;\n          delay(10);\n    }\n  }\n \n  Serial.print("hits:");Serial.println(hits);\n  if(hits==1)\n  {\n    Serial.println("Page 1");\n    lcd.clear();\n    lcd.setCursor(0, 0);\n    lcd.print("Page 1");\n  }else\n  if(hits==2)\n  {\n   Serial.println("Page 2");\n    lcd.clear();\n    lcd.setCursor(0, 0);\n    lcd.print("Page 2"); \n  }else\n\n  if(hits==3)\n  {\n   Serial.println("Page 3");\n    lcd.clear();\n    lcd.setCursor(0, 0);\n    lcd.print("Page 3"); \n  }else\n  \n  if ( hits>=4)\n  {\n     hits = 0;\n     Serial.println("couter is reset");\n     Serial.println("Page 1");\n     lcd.clear();\n     lcd.setCursor(0, 0);\n     lcd.print("Page 1");\n  }\ndelay(500);\n}\n')),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Library]")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_LCD_RGB_Backlight/archive/master.zip"},"Software Library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Document]")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/SeeedDocument/Grove_LCD_RGB_Backlight"},"Github page for this document")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Codecraft]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/res/Grove_LCD_RGB_Backlight_CDC_File.zip"},"CDC File")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/res/PCA9633.pdf"},"PCA9633")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_LCD_RGB_Backlight/res/JHD1313%20FP-RGB-1%201.4.pdf"},"JHD1313"))),(0,n.kt)("h2",{id:"projects"},"Projects"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Particle + Grove LCD RGB Backlight = Realtime Clock"),": Connect Grove LCD RGB Backlight to Particle using I2C to display time."),(0,n.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/peacemoon/particle-grove-lcd-rgb-backlight-realtime-clock-42151f/embed",width:"350"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"LCD RGB Grove module"),":"),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/yniND_abVos",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/tbdTTC3Jmgk",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}),(0,n.kt)("h2",{id:"tech-support--product-descussion"},"Tech Support & Product Descussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);