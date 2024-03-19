"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[96699],{3905:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>g});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=i,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return r?t.createElement(g,a(a({ref:n},u),{},{components:r})):t.createElement(g,a({ref:n},u))}));function g(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},68858:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var t=r(87462),i=(r(67294),r(3905));const o={description:"Buzzer",title:"Buzzer",keywords:["SenseCAP Indicator RP2040 Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/SenseCAP_Indicator_RP2040_Buzzer",last_update:{date:"3/4/2024",author:"DuKaiyin"}},a="**\u8702\u9e23\u5668**",s={unversionedId:"zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/cn-Buzzer",id:"zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/cn-Buzzer",title:"Buzzer",description:"Buzzer",source:"@site/docs/zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/cn-Buzzer.md",sourceDirName:"zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040",slug:"/cn/SenseCAP_Indicator_RP2040_Buzzer",permalink:"/cn/SenseCAP_Indicator_RP2040_Buzzer",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/cn-Buzzer.md",tags:[],version:"current",lastUpdatedBy:"DuKaiyin",lastUpdatedAt:1709510400,formattedLastUpdatedAt:"Mar 4, 2024",frontMatter:{description:"Buzzer",title:"Buzzer",keywords:["SenseCAP Indicator RP2040 Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/SenseCAP_Indicator_RP2040_Buzzer",last_update:{date:"3/4/2024",author:"DuKaiyin"}}},l={},p=[{value:"<strong>\u57fa\u7840\u64cd\u4f5c</strong>",id:"\u57fa\u7840\u64cd\u4f5c",level:2},{value:"<strong>\u793a\u4f8b\u4ee3\u7801 1</strong>",id:"\u793a\u4f8b\u4ee3\u7801-1",level:2},{value:"<strong>\u793a\u4f8b\u4ee3\u7801 2</strong>",id:"\u793a\u4f8b\u4ee3\u7801-2",level:2}],u={toc:p},c="wrapper";function d(e){let{components:n,...r}=e;return(0,i.kt)(c,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u8702\u9e23\u5668"},(0,i.kt)("strong",{parentName:"h1"},"\u8702\u9e23\u5668")),(0,i.kt)("p",null,"SenseCAP Indicator\u5185\u7f6e\u7684\u8702\u9e23\u5668\u662f\u4e00\u79cd\u88ab\u52a8\u8702\u9e23\u5668\uff0c\u8fd9\u610f\u5473\u7740\u5b83\u9700\u8981\u4e00\u4e2a\u4ea4\u6d41\u4fe1\u53f7\uff08PWM\uff09\u6765\u89e6\u53d1\u5e76\u8f93\u51fa\u58f0\u97f3\uff0c\u60a8\u53ef\u4ee5\u751f\u6210\u5404\u79cd\u97f3\u8c03\u548c\u6548\u679c\u3002"),(0,i.kt)("h2",{id:"\u57fa\u7840\u64cd\u4f5c"},(0,i.kt)("strong",{parentName:"h2"},"\u57fa\u7840\u64cd\u4f5c")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <Arduino.h>\n\n#define Buzzer  19 //Buzzer GPIO\n\nvoid setup() {\n  digitalWrite(Buzzer, OUTPUT); //Set Buzzer as an output\n  analogWrite(Buzzer, 127);   //Generates pwm of 50% duty cycle\n}\n\nvoid loop() {\n  delay(1000);\n  digitalWrite(Buzzer, LOW); //Turn off the Buzzer\n}\n\n")),(0,i.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801-1"},(0,i.kt)("strong",{parentName:"h2"},"\u793a\u4f8b\u4ee3\u7801 1")),(0,i.kt)("p",null,'\u6b64\u793a\u4f8b\u4f7f\u7528\u8702\u9e23\u5668\u64ad\u653e\u65cb\u5f8b\u3002\u5b83\u5411\u8702\u9e23\u5668\u53d1\u9001\u9002\u5f53\u9891\u7387\u7684\u65b9\u6ce2\uff0c\u751f\u6210\u76f8\u5e94\u7684\u97f3\u8c03\u3002\n" Twinkle Twinkle Little Star..."'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <Arduino.h>\n#define Buzzer  19 //Buzzer GPIO\n\n\nint length = 15;         /* the number of notes */\nchar notes[] = \"ccggaagffeeddc \";\nint beats[] = { 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 4 };\nint tempo = 300;\n\nvoid setup() {\n    //set buzzer pin as output\n    pinMode(19, OUTPUT);\n}\n\nvoid loop() {\n    for(int i = 0; i < length; i++) {\n        if(notes[i] == ' ') {\n            delay(beats[i] * tempo);\n        } else {\n            playNote(notes[i], beats[i] * tempo);\n        }\n        delay(tempo / 2);    /* delay between notes */\n    }\n\n}\n\n//Play tone\nvoid playTone(int tone, int duration) {\n    for (long i = 0; i < duration * 1000L; i += tone * 2) {\n        digitalWrite(19, HIGH);\n        delayMicroseconds(tone);\n        digitalWrite(19, LOW);\n        delayMicroseconds(tone);\n    }\n}\n\nvoid playNote(char note, int duration) {\n    char names[] = { 'c', 'd', 'e', 'f', 'g', 'a', 'b', 'C' };\n    int tones[] = { 1915, 1700, 1519, 1432, 1275, 1136, 1014, 956 };\n\n    // play the tone corresponding to the note name\n    for (int i = 0; i < 8; i++) {\n        if (names[i] == note) {\n            playTone(tones[i], duration);\n        }\n    }\n}\n")),(0,i.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801-2"},(0,i.kt)("strong",{parentName:"h2"},"\u793a\u4f8b\u4ee3\u7801 2")),(0,i.kt)("p",null,"\u6b64\u793a\u4f8b\u5728\u4e8c\u6c27\u5316\u78b3\u6d53\u5ea6\u5927\u4e8e1000ppm\u65f6\u53d1\u51fa\u8b66\u62a5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <Arduino.h>\n#include <Wire.h>\n#include <SPI.h>\n#include <SD.h>\n#include <SensirionI2CScd4x.h>\n\n#define Buzzer  19 //Buzzer GPIO\n\nSensirionI2CScd4x scd4x;\nString SDDataString = "";\n\nvoid sensor_power_on(void) {\n  pinMode(18, OUTPUT);\n  digitalWrite(18, HIGH);\n}\n\nvoid sensor_scd4x_init(void) {\n  uint16_t error;\n  char errorMessage[256];\n\n  scd4x.begin(Wire);\n\n  // stop potentially previously started measurement\n  error = scd4x.stopPeriodicMeasurement();\n  if (error) {\n    Serial.print("Error trying to execute stopPeriodicMeasurement(): ");\n    errorToString(error, errorMessage, 256);\n    Serial.println(errorMessage);\n  }\n\n  // Start Measurement\n  error = scd4x.startPeriodicMeasurement();\n  if (error) {\n    Serial.print("Error trying to execute startPeriodicMeasurement(): ");\n    errorToString(error, errorMessage, 256);\n    Serial.println(errorMessage);\n  }\n}\n\nvoid sensor_scd4x_get(void) {\n  uint16_t error;\n  char errorMessage[256];\n\n  Serial.print("sensor scd4x: ");\n  // Read Measurement\n  uint16_t co2;\n  float temperature;\n  float humidity;\n  error = scd4x.readMeasurement(co2, temperature, humidity);\n  if (error) {\n    Serial.print("Error trying to execute readMeasurement(): ");\n    errorToString(error, errorMessage, 256);\n    Serial.println(errorMessage);\n  } else if (co2 == 0) {\n    Serial.println("Invalid sample detected, skipping.");\n  } else {\n    Serial.print("Co2:");\n    Serial.print(co2);\n    Serial.print("\\t");\n    Serial.print("Temperature:");\n    Serial.print(temperature);\n    Serial.print("\\t");\n    Serial.print("Humidity:");\n    Serial.println(humidity);\n  }\n\n\n  if( co2 > 1000 ) {\n    analogWrite(Buzzer, 10);\n  } else {\n    analogWrite(Buzzer, 0);\n  }\n}\n\n\n\nint cnt = 0;\nvoid setup() {\n  Serial.begin(115200);\n\n  sensor_power_on();\n\n  Wire.setSDA(20);\n  Wire.setSCL(21);\n  Wire.begin();\n\n  sensor_scd4x_init();\n\n  digitalWrite(Buzzer, OUTPUT);\n\n}\n\nvoid loop() {\n  delay(5000);\n  sensor_scd4x_get();\n}\n')),(0,i.kt)("h1",{id:"\u6280\u672f\u652f\u6301"},(0,i.kt)("strong",{parentName:"h1"},"\u6280\u672f\u652f\u6301")),(0,i.kt)("p",null,"   \u522b\u62c5\u5fc3\uff0c\u6211\u4eec\u4e3a\u60a8\u63d0\u4f9b\u4e86\u652f\u6301\uff01\u8bf7\u8bbf\u95ee\u6211\u4eec\u7684",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/invite/QqMgVwHT3X"},"Seeed\u5b98\u65b9Discord\u9891\u9053"),"\u63d0\u51fa\u60a8\u7684\u95ee\u9898\uff01"),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u6709\u5927\u91cf\u8ba2\u5355\u6216\u5b9a\u5236\u9700\u6c42\uff0c\u8bf7\u8054\u7cfb ",(0,i.kt)("a",{parentName:"p",href:"mailto:iot@seeed.cc"},"iot@seeed.cc")))}d.isMDXComponent=!0}}]);