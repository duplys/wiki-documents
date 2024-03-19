"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[89665],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>u});var a=t(67294);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function d(n,e){if(null==n)return{};var t,a,i=function(n,e){if(null==n)return{};var t,a,i={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(i[t]=n[t]);return i}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(i[t]=n[t])}return i}var s=a.createContext({}),l=function(n){var e=a.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},p=function(n){var e=l(n.components);return a.createElement(s.Provider,{value:e},n.children)},c="mdxType",_={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,i=n.mdxType,r=n.originalType,s=n.parentName,p=d(n,["components","mdxType","originalType","parentName"]),c=l(t),m=i,u=c["".concat(s,".").concat(m)]||c[m]||_[m]||r;return t?a.createElement(u,o(o({ref:e},p),{},{components:t})):a.createElement(u,o({ref:e},p))}));function u(n,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var r=t.length,o=new Array(r);o[0]=m;var d={};for(var s in e)hasOwnProperty.call(e,s)&&(d[s]=e[s]);d.originalType=n,d[c]="string"==typeof n?n:i,o[1]=d;for(var l=2;l<r;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},56071:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var a=t(87462),i=(t(67294),t(3905));const r={description:"LoRa Demonstration usage",title:"LoRa Communication - SenseCAP Indicator",keywords:["SenseCAP Indicator","LoRa","ESP32S3"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/SenseCAP_Indicator_LoRa",toc_max_heading_level:4,sidebar_position:3,last_update:{date:"3/1/2024",author:"guiying zhao"}},o="SenseCAP Indicator - LoRa\u5e94\u7528\u5f00\u53d1",d={unversionedId:"zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Application/cn-LoRa",id:"zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Application/cn-LoRa",title:"LoRa Communication - SenseCAP Indicator",description:"LoRa Demonstration usage",source:"@site/docs/zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Application/cn-LoRa.md",sourceDirName:"zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Application",slug:"/cn/SenseCAP_Indicator_LoRa",permalink:"/cn/SenseCAP_Indicator_LoRa",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Application/cn-LoRa.md",tags:[],version:"current",lastUpdatedBy:"guiying zhao",lastUpdatedAt:1709251200,formattedLastUpdatedAt:"Mar 1, 2024",sidebarPosition:3,frontMatter:{description:"LoRa Demonstration usage",title:"LoRa Communication - SenseCAP Indicator",keywords:["SenseCAP Indicator","LoRa","ESP32S3"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/SenseCAP_Indicator_LoRa",toc_max_heading_level:4,sidebar_position:3,last_update:{date:"3/1/2024",author:"guiying zhao"}}},s={},l=[{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:3},{value:"\u786c\u4ef6",id:"\u786c\u4ef6",level:2},{value:"SenseCAP Indicator",id:"sensecap-indicator",level:3},{value:"XIAO",id:"xiao",level:3},{value:"\u8f6f\u4ef6",id:"\u8f6f\u4ef6",level:2},{value:"\u5165\u95e8\u6307\u5357",id:"\u5165\u95e8\u6307\u5357",level:2},{value:"\u5148\u51b3\u6761\u4ef6",id:"\u5148\u51b3\u6761\u4ef6",level:3},{value:"Step 1: \u4e0b\u8f7d\u6f14\u793a\u4ee3\u7801",id:"step-1-\u4e0b\u8f7d\u6f14\u793a\u4ee3\u7801",level:3},{value:"Step 2: \u5b9e\u73b0\u8d1f\u8f7d\u7f16\u7801\u5668\uff08XIAO;Arduino\uff09",id:"step-2-\u5b9e\u73b0\u8d1f\u8f7d\u7f16\u7801\u5668xiaoarduino",level:3},{value:"Step 2.1: \u5b9e\u73b0\u60a8\u7684\u8d1f\u8f7d\u7ed3\u6784\u548c\u7f16\u7801\u5668",id:"step-21-\u5b9e\u73b0\u60a8\u7684\u8d1f\u8f7d\u7ed3\u6784\u548c\u7f16\u7801\u5668",level:4},{value:"Step 2.2: \u5b9e\u73b0\u4f20\u611f\u5668\u6570\u636e\u7ed3\u6784\u5e76\u9002\u5e94\u8d1f\u8f7d\u7f16\u7801\u5668",id:"step-22-\u5b9e\u73b0\u4f20\u611f\u5668\u6570\u636e\u7ed3\u6784\u5e76\u9002\u5e94\u8d1f\u8f7d\u7f16\u7801\u5668",level:4},{value:"Step 2.3: \u7f16\u8bd1\u5e76\u5c06\u4ee3\u7801\u4e0a\u4f20\u5230XIAO",id:"step-23-\u7f16\u8bd1\u5e76\u5c06\u4ee3\u7801\u4e0a\u4f20\u5230xiao",level:4},{value:"Step 3: \u5b9e\u73b0\u8d1f\u8f7d\u89e3\u7801\u5668\uff08SenseCAP Indicator;ESP-IDF\uff09",id:"step-3-\u5b9e\u73b0\u8d1f\u8f7d\u89e3\u7801\u5668sensecap-indicatoresp-idf",level:3},{value:"Step 3.1: \u5b9e\u73b0\u60a8\u7684\u8d1f\u8f7d\u89e3\u7801\u5668",id:"step-31-\u5b9e\u73b0\u60a8\u7684\u8d1f\u8f7d\u89e3\u7801\u5668",level:4},{value:"Step 3.2: \u5b9e\u73b0\u4f20\u611f\u5668\u6570\u636e\u7ed3\u6784",id:"step-32-\u5b9e\u73b0\u4f20\u611f\u5668\u6570\u636e\u7ed3\u6784",level:4},{value:"Step 3.3: \u914d\u7f6eLoRa",id:"step-33-\u914d\u7f6elora",level:4},{value:"\u8bbe\u7f6eLoRa\u53c2\u6570",id:"\u8bbe\u7f6elora\u53c2\u6570",level:5},{value:"\u8bbe\u7f6eLoRa\u6536\u53d1\u5668\u63a5\u6536\u5668",id:"\u8bbe\u7f6elora\u6536\u53d1\u5668\u63a5\u6536\u5668",level:5},{value:"\u521d\u59cb\u5316LoRa\u6536\u53d1\u5668",id:"\u521d\u59cb\u5316lora\u6536\u53d1\u5668",level:5},{value:"Step 3.4: \u7f16\u8bd1\u5e76\u5c06\u4ee3\u7801\u70e7\u5f55\u5230SenseCAP Indicator",id:"step-34-\u7f16\u8bd1\u5e76\u5c06\u4ee3\u7801\u70e7\u5f55\u5230sensecap-indicator",level:4},{value:"Step 4: \u6d4b\u8bd5\u901a\u4fe1",id:"step-4-\u6d4b\u8bd5\u901a\u4fe1",level:3},{value:"\u8d44\u6e90",id:"\u8d44\u6e90",level:2},{value:"\u6280\u672f\u652f\u6301",id:"\u6280\u672f\u652f\u6301",level:2}],p=n=>function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)},c=p("Tabs"),_=p("TabItem"),m=p("Tabitem"),u={toc:l},S="wrapper";function f(n){let{components:e,...t}=n;return(0,i.kt)(S,(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sensecap-indicator---lora\u5e94\u7528\u5f00\u53d1"},"SenseCAP Indicator - LoRa\u5e94\u7528\u5f00\u53d1"),(0,i.kt)("h2",{id:"\u4ecb\u7ecd"},"\u4ecb\u7ecd"),(0,i.kt)("p",null,"LoRa\xae\u662f\u4e00\u79cd\u957f\u8ddd\u79bb\u65e0\u7ebf\u901a\u4fe1\u6280\u672f\uff0c\u7ecf\u8fc7\u4f18\u5316\u4ee5\u5728\u8fdc\u8ddd\u79bb\u4f20\u8f93\u5c0f\u91cf\u6570\u636e\u3002\u5b83\u901a\u8fc7\u4f7f\u7528\u4e00\u79cd\u79f0\u4e3aChirp Spread Spectrum (CSS)\u7684\u65b9\u6cd5\uff0c\u5728\u4e9aGHz\u9891\u8c31\u4e2d\u8c03\u5236\u65e0\u7ebf\u7535\u4fe1\u53f7\u6765\u5de5\u4f5c\u3002"),(0,i.kt)("p",null,"Seeed Studio\u7684SenseCAP Indicator\uff08\u7248\u672cD1L\u548cD1Pro\uff09\u5305\u542b\u5185\u7f6e\u7684LoRa\u6536\u53d1\u6a21\u5757\uff08Semtech SX1262 LoRa\xae\u82af\u7247\uff09\uff0c\u4f7f\u5f97\u5411\u60a8\u7684\u9879\u76ee\u6dfb\u52a0\u4f4e\u529f\u8017\u65e0\u7ebf\u8fde\u63a5\u53d8\u5f97\u8f7b\u677e\u3002\u5728\u672c\u6587\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728\u4e24\u4e2aSenseCAP Indicator\u677f\u4e4b\u95f4\u8bbe\u7f6eLoRa\u901a\u4fe1\u3002"),(0,i.kt)("h3",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,i.kt)("p",null,"\u8fd9\u4e2a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/indicator_lora_commu"},"\u6f14\u793a"),"\u5c55\u793a\u4e86\u5982\u4f55\u5728SenseCAP Indicator\u548cXIAO\u677f\u4e4b\u95f4\u5efa\u7acb\u57fa\u672c\u7684LoRa\u901a\u4fe1\uff0c\u4f7f\u7528Wio-E5\u4f5c\u4e3a\u4e2d\u95f4\u4ef6\u3002SenseCAP Indicator\u4eceXIAO\u68c0\u7d22\u4f20\u611f\u5668\u6570\u636e\uff0c\u7136\u540e\u901a\u8fc7Wio-E5\u8fdb\u884c\u4f20\u8f93\u3002\u4f20\u8f93\u7684\u6570\u636e\u5305\u968f\u540e\u88abSenseCAP Indicator\u63a5\u6536\uff0c\u89e3\u5bc6\u5e76\u8f93\u51fa\u7ed3\u679c\uff0c\u5e76\u5728\u5176\u5c4f\u5e55\u4e0a\u663e\u793a\u6570\u636e\u3002"),(0,i.kt)("p",null,"\u65e0LVGL\u4ee3\u7801\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/indicator_lora_commu/tree/29624d10643a41ae5e1e24124b81e93b5e3cd3bb"},"\u4ee3\u7801 \xb7 GitHub")),(0,i.kt)("h2",{id:"\u786c\u4ef6"},"\u786c\u4ef6"),(0,i.kt)("h3",{id:"sensecap-indicator"},"SenseCAP Indicator"),(0,i.kt)("p",null,"\u4ece\u9875\u9762",(0,i.kt)("a",{parentName:"p",href:"https://chat.openai.com/SenseCAP_Indicator_Dive_into_the_Hardware/#hardware-diagram"},"Dive_into_the_Hardware"),"\u4e0a\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230LoRa\u6536\u53d1\u5668\u901a\u8fc7SPI\u63a5\u53e3\u8fde\u63a5\u5230ESP32-S3 MCU\u3002"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:680,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png\n"})),"\u5173\u952e\u7ec4\u4ef6\u5305\u62ec\uff1a",(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Semtech SX1262\u5c04\u9891\u524d\u7aef"),(0,i.kt)("li",{parentName:"ul"},"ESP32-S3 MCU")),(0,i.kt)("p",null,"LoRa\u6536\u53d1\u5668\u5904\u7406LoRa\u4fe1\u53f7\u7684\u6240\u6709\u4f4e\u7ea7\u8c03\u5236\u548c\u89e3\u8c03\u3002\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528ESP32-S3\u7684SPI\u63a5\u53e3\u4e0e\u5176\u901a\u4fe1\u3002"),(0,i.kt)("h3",{id:"xiao"},"XIAO"),(0,i.kt)("p",null,"\u5728\u8fd9\u4e2a\u6f14\u793a\u4e2d\uff0cXIAO\u9700\u8981\u6536\u96c6\u4f20\u611f\u5668\u6570\u636e\u5e76\u901a\u8fc7Wio-E5\u5c06\u5176\u4f20\u8f93\u5230SenseCAP Indicator\u3002XIAO\u901a\u8fc7UART\u63a5\u53e3\u8fde\u63a5\u5230Wio-E5\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"XIAO"),(0,i.kt)("li",{parentName:"ul"},"Wio-E5"),(0,i.kt)("li",{parentName:"ul"},"SEN5x")),(0,i.kt)("h2",{id:"\u8f6f\u4ef6"},"\u8f6f\u4ef6"),(0,i.kt)("p",null,"\u7531\u4e8e",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/sensecap_indicator_esp32"},"SenseCAP_Indicator_ESP32")," SDK\u5df2\u7ecf\u63d0\u4f9b\u4e86LoRa\u5e93\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u5b83\uff0c\u60a8\u53ef\u4ee5\u5feb\u901f\u67e5\u770b\u9875\u9762",(0,i.kt)("a",{parentName:"p",href:"https://chat.openai.com/SenseCAP_Indicator_ESP32_LoRa"},"LoRa\xae"),"\u6765\u4e86\u89e3\u5982\u4f55\u4f7f\u7528LoRa\u5e93\u3002"),(0,i.kt)("h2",{id:"\u5165\u95e8\u6307\u5357"},"\u5165\u95e8\u6307\u5357"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u6f14\u793a\u6f14\u793a\u4e86\u5982\u4f55\u8bbe\u7f6e\u672c\u5730LoRa\xae Hub\u4ee5\u8fdb\u884c\u7269\u8054\u7f51\u8fde\u63a5\u3002"),(0,i.kt)("h3",{id:"\u5148\u51b3\u6761\u4ef6"},"\u5148\u51b3\u6761\u4ef6"),(0,i.kt)("p",null,"\u8bf7\u6309\u7167\u63d0\u4f9b\u7684",(0,i.kt)("a",{parentName:"p",href:"https://chat.openai.com/SenseCAP_Indicator_How_To_Flash_The_Default_Firmware"},"\u8bf4\u660e"),"\u8bbe\u7f6e\u5f00\u53d1\u73af\u5883\u3002"),(0,i.kt)("h3",{id:"step-1-\u4e0b\u8f7d\u6f14\u793a\u4ee3\u7801"},"Step 1: \u4e0b\u8f7d\u6f14\u793a\u4ee3\u7801"),(0,i.kt)("p",null,"\u4ece",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/indicator_lora_commu"},"\u6b64\u94fe\u63a5"),"\u514b\u9686\u6216\u4e0b\u8f7d\u6f14\u793a\u4ee3\u7801\u3002\u8fd9\u4e9b\u4ee3\u7801\u5c06\u4f5c\u4e3a\u60a8\u7684LoRa\u5e94\u7528\u7a0b\u5e8f\u7684\u8d77\u70b9\u3002"),(0,i.kt)("h3",{id:"step-2-\u5b9e\u73b0\u8d1f\u8f7d\u7f16\u7801\u5668xiaoarduino"},"Step 2: \u5b9e\u73b0\u8d1f\u8f7d\u7f16\u7801\u5668\uff08XIAO;Arduino\uff09"),(0,i.kt)("h4",{id:"step-21-\u5b9e\u73b0\u60a8\u7684\u8d1f\u8f7d\u7ed3\u6784\u548c\u7f16\u7801\u5668"},"Step 2.1: \u5b9e\u73b0\u60a8\u7684\u8d1f\u8f7d\u7ed3\u6784\u548c\u7f16\u7801\u5668"),(0,i.kt)(c,{mdxType:"Tabs"},(0,i.kt)(_,{value:"XIAO/include/Frame.h",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#ifndef _FRAME_H\n#define _FRAME_H\n#include <Arduino.h>\n#include <vector>\n\n/** payload format\n* | topic | dataLength | Data Payload | CRC |\n* | 1byte | 1byte      | n byte       | 2byte |\n* example:\n* | 0x01 | 0x0E | 14 bytes | 2byte | for SEN54\n* | 0x01 | 0x10 | 16 bytes | 2byte | for SEN55\n*/\n\n#pragma pack(1)\nenum topics {\n    TOPICS_MIN   = 0x00,\n    TOPICS_SEN5x = 0x01,\n    TOPIC_MAX,\n};\n\n#pragma pack(1)\n/* highlight-start */\ntypedef struct\n{\n    enum topics topic;         /*msg type*/\n    uint8_t dataLength;\n    std::vector<uint8_t> data; /*actual data of payload*/\n    uint16_t crc;\n} Frame_t;\n/* highlight-end */\nString packFrame(Frame_t frame);\nvoid deleteFrame(Frame_t *frame);\nuint16_t crc16_ccitt(const uint8_t *data, size_t length);\n#endif\n"))),(0,i.kt)(_,{value:"XIAO/include/Frame.cpp",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "Frame.h"\nString packFrame(Frame_t frame) {\n    uint8_t *packedData = (uint8_t *)malloc(2 + frame.dataLength + 2);\n    if (packedData == NULL) {\n        return String(); // Return an empty string if memory allocation fails\n    }\n    // Pack the frame topic\n    packedData[0] = frame.topic;\n    packedData[1] = frame.dataLength;\n    // highlight-start\n    // Pack the data payload\n    for (size_t i = 0; i < frame.dataLength; i++) {\n        packedData[2 + i] = frame.data[i];\n    }\n    // highlight-end\n    // Calculate CRC (for simplicity, we assume CRC is just the sum of all bytes)\n    frame.crc = crc16_ccitt(packedData, 2 + frame.dataLength);\n\n    // Pack the CRC\n    packedData[2 + frame.dataLength]     = (frame.crc & 0xFF00) >> 8;\n    packedData[2 + frame.dataLength + 1] = frame.crc & 0x00FF;\n    // highlight-start\n    // String packedFrame; serialize the packed data into a string\n    char packedFrameBuffer[(2 + frame.dataLength + 2) * 2];\n    for (size_t i = 0; i < 2 + frame.dataLength + 2; i++) {\n        snprintf(&packedFrameBuffer[i * 2], 3, "%02X", packedData[i]); // 3 to include null terminator\n    }\n    // highlight-end\n    free(packedData);\n\n    return String(packedFrameBuffer);\n}\n\nvoid deleteFrame(Frame_t *frame) {\n    free(frame);\n}\n\nuint16_t crc16_ccitt(const uint8_t *data, size_t length) {\n    uint16_t crc = 0xFFFF;\n\n    for (size_t i = 0; i < length; i++) {\n        crc ^= (uint8_t)data[i] << 8;\n        for (uint8_t j = 0; j < 8; j++) {\n            if (crc & 0x8000) {\n                crc = (crc << 1) ^ 0x1021;\n            } else {\n                crc <<= 1;\n            }\n        }\n    }\n\n    return crc & 0xFFFF;\n}\n')))),(0,i.kt)("h4",{id:"step-22-\u5b9e\u73b0\u4f20\u611f\u5668\u6570\u636e\u7ed3\u6784\u5e76\u9002\u5e94\u8d1f\u8f7d\u7f16\u7801\u5668"},"Step 2.2: \u5b9e\u73b0\u4f20\u611f\u5668\u6570\u636e\u7ed3\u6784\u5e76\u9002\u5e94\u8d1f\u8f7d\u7f16\u7801\u5668"),(0,i.kt)(c,{mdxType:"Tabs"},(0,i.kt)(_,{value:"XIAO/include/sensor_sen5x.h",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#ifndef PAYLOAD_SEN5X_H\n#define PAYLOAD_SEN5X_H\n#include "Frame.h"\n#include "SensorPayload.h"\n#include <SensirionI2CSen5x.h>\n\n#define DEVICE_SEN54\n\n#if defined(DEVICE_SEN54)\n#elif defined(DEVICE_SEN55)\n#else\n#error "Please define a device in the compiler options."\n#endif\n\nclass PayloadSEN5x : public SensorPayload<SensirionI2CSen5x> {\n  public:\n    PayloadSEN5x(SensirionI2CSen5x handler);\n    uint16_t init() override;\n    String toPayloadString() override;\n\n  private:\n  //highlight-start\n    uint16_t massConcentrationPm1p0;\n    uint16_t massConcentrationPm2p5;\n    uint16_t massConcentrationPm4p0;\n    uint16_t massConcentrationPm10p0;\n    int16_t ambientHumidity;\n    int16_t ambientTemperature;\n    int16_t vocIndex;\n#ifdef DEVICE_SEN55\n// int16_t noxIndex; // Sensor SEN54 does not support NOx\n#endif\n    //highlight-end\n    SensirionI2CSen5x _sen5x;\n};\n#endif // PAYLOAD_SEN5X_H\n'))),(0,i.kt)(_,{value:"XIAO/src/sensor_sen5x.cpp",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "sensor_sen5x.h"\n#include "main.h"\n\nPayloadSEN5x::PayloadSEN5x(SensirionI2CSen5x handler)\n    : SensorPayload<SensirionI2CSen5x>(handler), _sen5x(handler) {\n    // Initialize specific data members for SEN5X here (if needed)\n    _sen5x.begin(Wire);\n}\n\nuint16_t PayloadSEN5x::init() {\n    // Implement the initialization logic for SEN5X here\n    uint16_t error;\n    char errorMessage[256];\n    error = _sen5x.deviceReset();\n    if (error) {\n        Serial.print("Error trying to execute deviceReset(): ");\n        errorToString(error, errorMessage, 256);\n        Serial.println(errorMessage);\n    }\n    float tempOffset = 0.0;\n    error            = _sen5x.setTemperatureOffsetSimple(tempOffset);\n    if (error) {\n        Serial.print("Error trying to execute setTemperatureOffsetSimple(): ");\n        errorToString(error, errorMessage, 256);\n        Serial.println(errorMessage);\n    } else {\n        Serial.print("Temperature Offset set to ");\n        Serial.print(tempOffset);\n        Serial.println(" deg. Celsius (SEN54/SEN55 only)");\n    }\n\n    // Start Measurement\n    error = _sen5x.startMeasurement();\n    if (error) {\n        Serial.print("Error trying to execute startMeasurement(): ");\n        errorToString(error, errorMessage, 256);\n        Serial.println(errorMessage);\n    }\n    return 0;\n}\n\nString PayloadSEN5x::toPayloadString() {\n// Add your code to convert data to payload string here\n#ifdef DEVICE_SEN55\n    _sen5x.readMeasuredValuesAsIntegers(massConcentrationPm1p0, massConcentrationPm2p5, massConcentrationPm4p0, massConcentrationPm10p0, ambientHumidity, ambientTemperature, vocIndex, noxIndex);\n    _frame.dataLength = 16;\n#else\n    int16_t __noxIndex;\n    _sen5x.readMeasuredValuesAsIntegers(massConcentrationPm1p0, massConcentrationPm2p5, massConcentrationPm4p0, massConcentrationPm10p0, ambientHumidity, ambientTemperature, vocIndex, __noxIndex);\n    _frame.dataLength = 14;\n#endif\n\n    _frame.topic = TOPICS_SEN5x;\n\n    // empty the data vector\n    _frame.data.clear();\n    //highlight-start\n    // make the value into hex payload string\n    _frame.data.push_back((uint8_t)(massConcentrationPm1p0 >> 8));\n    _frame.data.push_back((uint8_t)(massConcentrationPm1p0 & 0xFF));\n    _frame.data.push_back((uint8_t)(massConcentrationPm2p5 >> 8));\n    _frame.data.push_back((uint8_t)(massConcentrationPm2p5 & 0xFF));\n    _frame.data.push_back((uint8_t)(massConcentrationPm4p0 >> 8));\n    _frame.data.push_back((uint8_t)(massConcentrationPm4p0 & 0xFF));\n    _frame.data.push_back((uint8_t)(massConcentrationPm10p0 >> 8));\n    _frame.data.push_back((uint8_t)(massConcentrationPm10p0 & 0xFF));\n    _frame.data.push_back((uint8_t)(ambientHumidity >> 8));\n    _frame.data.push_back((uint8_t)(ambientHumidity & 0xFF));\n    _frame.data.push_back((uint8_t)(ambientTemperature >> 8));\n    _frame.data.push_back((uint8_t)(ambientTemperature & 0xFF));\n    _frame.data.push_back((uint8_t)(vocIndex >> 8));\n    _frame.data.push_back((uint8_t)(vocIndex & 0xFF));\n#ifdef DEVICE_SEN55\n// _frame.data.push_back((uint8_t)(noxIndex >> 8));\n// _frame.data.push_back((uint8_t)(noxIndex & 0xFF));\n#endif\n    //highlight-end\n    char data[256];\n    sprintf(data, "%d,%d,%d,%d,%d,%d,%d", massConcentrationPm1p0, massConcentrationPm2p5, massConcentrationPm4p0, massConcentrationPm10p0, ambientHumidity, ambientTemperature, vocIndex);\n    Serial.println("String: " + String(data));\n\n    for (int i = 0; i < _frame.dataLength; i++) {\n        Serial.print(_frame.data[i], HEX);\n        Serial.print(" ");\n    }\n    Serial.println();\n\n    return packFrame(_frame);\n}\n')))),(0,i.kt)("p",null,"\u51fd\u6570",(0,i.kt)("inlineCode",{parentName:"p"},"toPayloadString"),"\u5c06\u6570\u636e\u5e8f\u5217\u5316\u4e3a\u5b57\u7b26\u4e32\uff0c\u5e76\u901a\u8fc7Wio-E5\u53d1\u9001\u5230SenseCAP Indicator\u3002"),(0,i.kt)("h4",{id:"step-23-\u7f16\u8bd1\u5e76\u5c06\u4ee3\u7801\u4e0a\u4f20\u5230xiao"},"Step 2.3: \u7f16\u8bd1\u5e76\u5c06\u4ee3\u7801\u4e0a\u4f20\u5230XIAO"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "sensor_sen5x.h"\n#include "wio_e5_at.h"\n#include <Arduino.h>\n#include <SensirionI2CSen5x.h>\n#include <Wire.h>\nSoftwareSerial serial_lora( D2, D3 );\nRadio radio( serial_lora, RF_FREQUENCY, LORA_SF12, LORA_BW_125, 15, 15, 14, LORA_CRC_ON, LORA_IQ_NORMAL, LORA_PUBLIC_OFF );\n\nSensirionI2CSen5x sen5x;\nPayloadSEN5x payloadSEN5x( sen5x );\n\nvoid setup() {\n    delay( 2000 );\n    wait_serial();\n    Serial.println( "Starting..." );\n\n    radio.begin();\n\n    Wire.begin();\n    payloadSEN5x.init();\n\n    Serial.println( "APP begin" );\n}\n\nvoid loop() {\n    static int count               = 0;\n    static unsigned long task_time = 0;\n    static String test_string;\n\n    if ( millis() - task_time > 10000 ) {\n        task_time   = millis();\n\n        radio.sendPayload( payloadSEN5x.toPayloadString() );\n\n        Serial.printf( "Send data %d\\r\\n", count++ );\n    }\n}\n')),(0,i.kt)("p",null,"\u5b8c\u6210\u8d1f\u8f7d\u540e\uff0c\u73b0\u5728\u6211\u4eec\u5c06\u6df1\u5165\u4e86\u89e3SenseCAP Indicator\uff0c\u4ee5\u7f16\u5199\u8d1f\u8f7d\u89e3\u7801\u5668\u3002"),(0,i.kt)("h3",{id:"step-3-\u5b9e\u73b0\u8d1f\u8f7d\u89e3\u7801\u5668sensecap-indicatoresp-idf"},"Step 3: \u5b9e\u73b0\u8d1f\u8f7d\u89e3\u7801\u5668\uff08SenseCAP Indicator;ESP-IDF\uff09"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u8d1f\u8f7d\u89e3\u7801\u5668\u662f\u5c06\u4eceLoRa\u6536\u53d1\u5668\u63a5\u6536\u5230\u7684\u4e8c\u8fdb\u5236\u8d1f\u8f7d\u8f6c\u6362\u4e3a\u4eba\u7c7b\u53ef\u8bfb\u683c\u5f0f\u7684\u51fd\u6570\u3002\u8d1f\u8f7d\u89e3\u7801\u5668\u7279\u5b9a\u4e8e\u60a8\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u5e76\u4e14\u5fc5\u987b\u7531\u60a8\u5b9e\u73b0\u3002\u6b64\u6f14\u793a\u7684\u8d1f\u8f7d\u89e3\u7801\u5668\u5df2\u5728\u6f14\u793a\u4ee3\u7801\u4e2d\u63d0\u4f9b\u3002")),(0,i.kt)("h4",{id:"step-31-\u5b9e\u73b0\u60a8\u7684\u8d1f\u8f7d\u89e3\u7801\u5668"},"Step 3.1: \u5b9e\u73b0\u60a8\u7684\u8d1f\u8f7d\u89e3\u7801\u5668"),(0,i.kt)(c,{mdxType:"Tabs"},(0,i.kt)(m,{value:"Indicator/main/Frame/frame.h",mdxType:"Tabitem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"  #ifndef __SIMPLE_FRAME_H\n  #define __SIMPLE_FRAME_H\n  #include <stdint.h>\n  #include <stdio.h>\n  #include <stdlib.h>\n\n  /** payload format\n  * | topic | dataLength | Data Payload | CRC |\n  * | 1byte | 1byte      | n byte       | 2byte |\n  * example:\n  * | 0x01 | 0x0E | 14 bytes | 2byte | for SEN54\n  * | 0x01 | 0x10 | 16 bytes | 2byte | for SEN55\n  */\n\n  #pragma pack(1)\n  enum topics {\n      TOPICS_MIN   = 0x00,\n      TOPICS_SEN5x = 0x01,\n      TOPIC_MAX,\n  };\n  typedef struct\n  {\n      enum topics topic; /*msg type or DataId*/\n      uint8_t dataLength;\n  /* highlight-start */\n      uint8_t *data;     /*actual data of payload*/\n  /* highlight-end */\n      uint16_t crc;\n  } Frame_t;\n  Frame_t *parsePayload( uint8_t *payload, uint8_t length );\n  void deleteFrame( Frame_t *frame );\n  uint16_t crc16_ccitt( const uint8_t *data, size_t length );\n  #endif\n"))),(0,i.kt)(m,{value:"Indicator/main/Frame/frame.c",mdxType:"Tabitem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'  #include "frame.h"\n  #include "esp_log.h"\n\n  Frame_t *parsePayload( uint8_t *payload, uint8_t length )\n  {\n      Frame_t *frame = (Frame_t *)malloc( sizeof( Frame_t ) );\n      if ( frame == NULL ) {\n          ESP_LOGE( "parsePayload", "Failed to allocate memory for frame" );\n          return NULL;\n      }\n\n      frame->topic = (enum topics)payload[0];\n\n      frame->dataLength = payload[1];\n      /* highlight-start */\n      frame->data = (uint8_t *)malloc( frame->dataLength );\n      if ( frame->data == NULL ) {\n          ESP_LOGE( "parsePayload", "Failed to allocate memory for frame data" );\n          free( frame ); // Clean up previously allocated memory\n          return NULL;\n      }\n      /* highlight-end */\n      memcpy( frame->data, payload + 2, frame->dataLength );\n\n      frame->crc = (uint16_t)payload[length - 2] << 8 | (uint16_t)payload[length - 1];\n\n      if ( frame->crc != crc16_ccitt( payload, length - 2 ) ) {\n          ESP_LOGE( "parsePayload", "CRC mismatch" );\n          free( frame->data );\n          free( frame );\n          return NULL;\n      }\n\n      return frame;\n  }\n\n  void deleteFrame( Frame_t *frame )\n  {\n      free( frame->data );\n      free( frame );\n  }\n\n  uint16_t crc16_ccitt( const uint8_t *data, size_t length )\n  {\n      uint16_t crc = 0xFFFF;\n\n      for ( size_t i = 0; i < length; i++ ) {\n          crc ^= (uint8_t)data[i] << 8;\n          for ( uint8_t j = 0; j < 8; j++ ) {\n              if ( crc & 0x8000 ) {\n                  crc = ( crc << 1 ) ^ 0x1021;\n              } else {\n                  crc <<= 1;\n              }\n          }\n      }\n\n      return crc & 0xFFFF;\n  }\n')))),(0,i.kt)("h4",{id:"step-32-\u5b9e\u73b0\u4f20\u611f\u5668\u6570\u636e\u7ed3\u6784"},"Step 3.2: \u5b9e\u73b0\u4f20\u611f\u5668\u6570\u636e\u7ed3\u6784"),(0,i.kt)(c,{mdxType:"Tabs"},(0,i.kt)(_,{value:"Indicator/main/Sensors/sen5x.h",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'  #ifndef PAYLOAD_SEN5X_H\n  #define PAYLOAD_SEN5X_H\n  #include "SensorPayload.h"\n\n  #define DEVICE_SEN54\n\n  #if defined( DEVICE_SEN54 )\n  #elif defined( DEVICE_SEN55 )\n  #else\n  #error "Please define a device in the compiler options."\n  #endif\n  // highlight-start\n  #pragma pack(push, 1)\n  typedef union {\n      struct\n      {\n          uint16_t massConcentrationPm1p0;\n          uint16_t massConcentrationPm2p5;\n          uint16_t massConcentrationPm4p0;\n          uint16_t massConcentrationPm10p0;\n          int16_t  ambientHumidity;\n          int16_t  ambientTemperature;\n          int16_t  vocIndex;\n  #ifdef DEVICE_SEN55\n          int16_t noxIndex;\n  #endif\n      };\n\n  #ifdef DEVICE_SEN55\n      int16_t data[8];\n  #else\n      int16_t data[7];\n  #endif\n  } SEN5xData_t;\n  #pragma pack(pop)\n  // highlight-end\n  void phraseSEN5xData( uint8_t *data_arry, SEN5xData_t *SEN5x );\n  void prinSEN5xData( const SEN5xData_t *SEN5x );\n  #endif // PAYLOAD_SEN5X_H\n'))),(0,i.kt)(_,{value:"Indicator/main/Sensors/sen5x.c",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'  #include "sen5x.h"\n  #include "esp_log.h"\n  // highlight-start\n  void phraseSEN5xData( uint8_t *data_arry, SEN5xData_t *SEN5x )\n  {\n      for ( uint8_t i = 0; i < sizeof( SEN5xData_t ); i++ ) {\n          SEN5x->data[i] = data_arry[2 * i] << 8 | data_arry[2 * i + 1];\n      }\n  }\n  // highlight-end\n  void prinSEN5xData( const SEN5xData_t *SEN5x )\n  {\n      static const char *TAG = "sen5x_";\n      ESP_LOGI( TAG, "massConcentrationPm1p0: %d", SEN5x->massConcentrationPm1p0 );\n      ESP_LOGI( TAG, "massConcentrationPm2p5: %d", SEN5x->massConcentrationPm2p5 );\n      ESP_LOGI( TAG, "massConcentrationPm4p0: %d", SEN5x->massConcentrationPm4p0 );\n      ESP_LOGI( TAG, "massConcentrationPm10p0: %d", SEN5x->massConcentrationPm10p0 );\n      ESP_LOGI( TAG, "ambientHumidity: %d", SEN5x->ambientHumidity );\n      ESP_LOGI( TAG, "ambientTemperature: %d", SEN5x->ambientTemperature );\n      ESP_LOGI( TAG, "vocIndex: %d", SEN5x->vocIndex );\n  #ifdef DEVICE_SEN55\n      ESP_LOGI( TAG, "noxIndex: %d", SEN5x->noxIndex );\n  #endif\n  }\n')))),(0,i.kt)("h4",{id:"step-33-\u914d\u7f6elora"},"Step 3.3: \u914d\u7f6eLoRa"),(0,i.kt)("h5",{id:"\u8bbe\u7f6elora\u53c2\u6570"},"\u8bbe\u7f6eLoRa\u53c2\u6570"),(0,i.kt)("p",null,"\u8bbe\u7f6e\u5fc5\u8981\u7684LoRa\u53c2\u6570\uff0c\u5982\u9891\u7387\u3001\u6269\u9891\u56e0\u5b50\u548c\u5e26\u5bbd\u3002\u8fd9\u4e9b\u8bbe\u7f6e\u5fc5\u987b\u5728\u4e24\u4e2aLoRa\u901a\u9053\u4e4b\u95f4\u5339\u914d\uff0c\u4ee5\u786e\u4fdd\u6210\u529f\u7684\u901a\u4fe1\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#define RF_FREQUENCY               868000000 // Hz\n#define LORA_BANDWIDTH             0         // [0: 125 kHz, 1: 250 kHz, 2: 500 kHz, 3: Reserved]\n#define LORA_SPREADING_FACTOR      12        // [SF7..SF12]\n#define LORA_CODINGRATE            1         // [1: 4/5, 2: 4/6, 3: 4/7, 4: 4/8]\n#define LORA_PREAMBLE_LENGTH       15        // Same for Tx and Rx\n#define LORA_SYMBOL_TIMEOUT        5         // Symbols\n#define LORA_FIX_LENGTH_PAYLOAD_ON false\n#define LORA_IQ_INVERSION_ON       false\n")),(0,i.kt)("h5",{id:"\u8bbe\u7f6elora\u6536\u53d1\u5668\u63a5\u6536\u5668"},"\u8bbe\u7f6eLoRa\u6536\u53d1\u5668\u63a5\u6536\u5668"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'void OnRxDone( uint8_t *payload, uint16_t size, int16_t rssi, int8_t snr )\n{\n    SEN5xData_t sen5x_data;\n    // highlight-start\n    Frame_t *frame = parsePayload( payload, size );\n    // highlight-end\n    if ( frame == NULL ) {\n        ESP_LOGE( TAG, "parsePayload error" );\n        return;\n    }\n    ESP_LOGI( TAG, "frame->type: %s", dataIDToString( frame->topic ) );\n\n    // highlight-start\n    switch ( frame->topic ) {\n        case TOPICS_SEN5x:\n            phraseSEN5xData( frame->data, &sen5x_data );\n            break;\n        default:\n            break;\n    }\n    // highlight-end\n    deleteFrame( frame );\n}\n')),(0,i.kt)("h5",{id:"\u521d\u59cb\u5316lora\u6536\u53d1\u5668"},"\u521d\u59cb\u5316LoRa\u6536\u53d1\u5668"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"RadioEvents.RxDone = OnRxDone;\nRadio.Init( &RadioEvents );\n\nRadio.SetChannel( RF_FREQUENCY );\n\nRadio.SetRxConfig( MODEM_LORA, LORA_BANDWIDTH, LORA_SPREADING_FACTOR,\n                    LORA_CODINGRATE, 0, LORA_PREAMBLE_LENGTH,\n                    LORA_SYMBOL_TIMEOUT, LORA_FIX_LENGTH_PAYLOAD_ON,\n                    0, true, 0, 0, LORA_IQ_INVERSION_ON, true );\nRadio.SetMaxPayloadLength( MODEM_LORA, 255 );\n\nRadio.Rx( 0 ); // Continuous Rx\n")),(0,i.kt)("h4",{id:"step-34-\u7f16\u8bd1\u5e76\u5c06\u4ee3\u7801\u70e7\u5f55\u5230sensecap-indicator"},"Step 3.4: \u7f16\u8bd1\u5e76\u5c06\u4ee3\u7801\u70e7\u5f55\u5230SenseCAP Indicator"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'/**\n * @source: https://github.com/Seeed-Solution/indicator_lora_commu/blob/29624d10643a41ae5e1e24124b81e93b5e3cd3bb/Indicator/main/main.c\n */\n#include "bsp_board.h"\n#include "esp_log.h"\n#include "frame.h"\n#include "radio.h"\n#include "sen5x.h"\n\nstatic const char *TAG = "app_main";\n\n#define VERSION "v0.0.1"\n\n#define SENSECAP "\\n\\\n   _____                      _________    ____         \\n\\\n  / ___/___  ____  ________  / ____/   |  / __ \\\\       \\n\\\n  \\\\__ \\\\/ _ \\\\/ __ \\\\/ ___/ _ \\\\/ /   / /| | / /_/ /   \\n\\\n ___/ /  __/ / / (__  )  __/ /___/ ___ |/ ____/         \\n\\\n/____/\\\\___/_/ /_/____/\\\\___/\\\\____/_/  |_/_/           \\n\\\n--------------------------------------------------------\\n\\\n Version: %s %s %s\\n\\\n--------------------------------------------------------\\n\\\n"\n\n#define RF_FREQUENCY               868000000 // Hz\n#define LORA_BANDWIDTH             0         // [0: 125 kHz, 1: 250 kHz, 2: 500 kHz, 3: Reserved]\n#define LORA_SPREADING_FACTOR      12        // [SF7..SF12]\n#define LORA_CODINGRATE            1         // [1: 4/5, 2: 4/6, 3: 4/7, 4: 4/8]\n#define LORA_PREAMBLE_LENGTH       15        // Same for Tx and Rx\n#define LORA_SYMBOL_TIMEOUT        5         // Symbols\n#define LORA_FIX_LENGTH_PAYLOAD_ON false\n#define LORA_IQ_INVERSION_ON       false\n\nstatic RadioEvents_t RadioEvents;\n\nSEN5xData_t sen5x_data;\n\nvoid OnRxDone( uint8_t *payload, uint16_t size, int16_t rssi, int8_t snr ) {\n    int i = 0;\n    ESP_LOGI( TAG, "rssi:%d dBm, snr:%d dB, len:%d, payload:", rssi, snr, size );\n    for ( i = 0; i < size; i++ ) {\n        printf( "0x%x ", payload[i] );\n    }\n    printf( "\\n" );\n\n    Frame_t *frame = parsePayload( payload, size );\n    if ( frame == NULL ) {\n        ESP_LOGE( TAG, "parsePayload error" );\n        return;\n    }\n    ESP_LOGI( TAG, "frame->type: %s", dataIDToString( frame->topic ) );\n\n    switch ( frame->topic ) {\n        case TOPICS_SEN5x:\n            phraseSEN5xData( frame->data, &sen5x_data );\n            prinSEN5xData( &sen5x_data );\n            break;\n\n        default:\n            break;\n    }\n\n    deleteFrame( frame );\n}\n\nvoid app_main( void ) {\n    ESP_LOGI( "", SENSECAP, VERSION, __DATE__, __TIME__ );\n\n    ESP_ERROR_CHECK( bsp_board_init() );\n\n    ESP_LOGI( TAG, "APP MAIN START" );\n\n    RadioEvents.RxDone = OnRxDone;\n    Radio.Init( &RadioEvents );\n\n    Radio.SetChannel( RF_FREQUENCY );\n\n    Radio.SetRxConfig( MODEM_LORA, LORA_BANDWIDTH, LORA_SPREADING_FACTOR,\n                       LORA_CODINGRATE, 0, LORA_PREAMBLE_LENGTH,\n                       LORA_SYMBOL_TIMEOUT, LORA_FIX_LENGTH_PAYLOAD_ON,\n                       0, true, 0, 0, LORA_IQ_INVERSION_ON, true );\n    Radio.SetMaxPayloadLength( MODEM_LORA, 255 );\n\n    Radio.Rx( 0 ); // Continuous Rx\n\n    while ( 1 ) {\n        vTaskDelay( pdMS_TO_TICKS( 10000 ) );\n    }\n}\n')),(0,i.kt)("h3",{id:"step-4-\u6d4b\u8bd5\u901a\u4fe1"},"Step 4: \u6d4b\u8bd5\u901a\u4fe1"),(0,i.kt)("p",null,"\u5c06\u4e24\u4e2aSenseCAP Indicator\u677f\u4e0a\u7535\u5e76\u6253\u5f00\u4e32\u884c\u76d1\u89c6\u5668\u3002\u60a8\u5e94\u8be5\u770b\u5230\u4e24\u4e2a\u677f\u4e4b\u95f4\u53d1\u9001\u548c\u63a5\u6536\u7684\u6d88\u606f\u3002\u606d\u559c\uff01\u60a8\u5df2\u6210\u529f\u4f7f\u7528SenseCAP Indicator\u5efa\u7acb\u4e86LoRa\u901a\u4fe1\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Serial Monitor of XIAO"',title:'"Serial',Monitor:!0,of:!0,'XIAO"':!0},'String: 76,80,81,81,5389,5990,980\n0 4C 0 50 0 51 0 51 15 D 17 66 3 D4\nCRC: 629\n<<<AT+TEST=TXLRPKT,"010E004C005000510051150D176603D40629"\n>>>+TEST: TX DONE\n+TEST: TXLRPKT\n\nSend payload successfully\nSend data 1\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh",metastring:'title="Serial Monitor of SenseCAP Indicator"',title:'"Serial',Monitor:!0,of:!0,SenseCAP:!0,'Indicator"':!0},"I (95490) app_main: rssi:-22 dBm, snr:5 dB, len:18, payload:\n0x1 0xe 0x0 0x4c 0x0 0x50 0x0 0x51 0x0 0x51 0x15 0xd 0x17 0x66 0x3 0xd4 0x6 0x29\nW (95541) parsePayload: topic: 1\nW (95541) parsePayload: dataLength: 14\nW (95545) parsePayload: payload[0]: 00\nW (95549) parsePayload: payload[1]: 4C\nW (95554) parsePayload: payload[2]: 00\nW (95558) parsePayload: payload[3]: 50\nW (95563) parsePayload: payload[4]: 00\nW (95567) parsePayload: payload[5]: 51\nW (95572) parsePayload: payload[6]: 00\nW (95576) parsePayload: payload[7]: 51\nW (95580) parsePayload: payload[8]: 15\nW (95585) parsePayload: payload[9]: 0D\nW (95589) parsePayload: payload[10]: 17\nW (95594) parsePayload: payload[11]: 66\nW (95598) parsePayload: payload[12]: 03\nW (95603) parsePayload: payload[13]: D4\nI (95607) app_main: frame->type: SEN5X\nI (95612) sen5x_: massConcentrationPm1p0: 76\nI (95617) sen5x_: massConcentrationPm2p5: 80\nI (95622) sen5x_: massConcentrationPm4p0: 81\nI (95627) sen5x_: massConcentrationPm10p0: 81\nI (95632) sen5x_: ambientHumidity: 5389\nI (95636) sen5x_: ambientTemperature: 5990\nI (95641) sen5x_: vocIndex: 980\n")),(0,i.kt)("h2",{id:"\u8d44\u6e90"},"\u8d44\u6e90"),(0,i.kt)("div",{class:"table-center"},(0,i.kt)("table",{align:"center"},(0,i.kt)("tr",null,(0,i.kt)("th",null," \u540d\u79f0 "),(0,i.kt)("th",null," \u529f\u80fd ")),(0,i.kt)("tr",null,(0,i.kt)("td",null," ",(0,i.kt)("a",{href:"https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/main/examples/indicator_lora/main/demo/beep.c"},(0,i.kt)("span",null," Beep Control "))," "),(0,i.kt)("td",null,' \u63a5\u53d7\u5b57\u7b26\u4e32"ON" or "OFF", \u53ef\u4ee5\u6267\u884c\u76f8\u5e94\u529f\u80fd')),(0,i.kt)("tr",null,(0,i.kt)("td",null," ",(0,i.kt)("a",{href:"https://github.com/Seeed-Solution/indicator_lora_commu"},(0,i.kt)("span",null," PingPong "))),(0,i.kt)("td",null," \u5728\u4e3b\u4ece\u8bbe\u5907\u548c\u8bbe\u5907\u4e4b\u95f4\u5efa\u7acbping-pong\u901a\u4fe1\u6a21\u5f0f")),(0,i.kt)("tr",null,(0,i.kt)("td",null," ",(0,i.kt)("a",{href:"https://github.com/Seeed-Solution/indicator_lora_commu"},(0,i.kt)("span",null," Multi-Sensor Data Upload "))),(0,i.kt)("td",null," XIAOS3\u6536\u96c6\u6570\u636e\u5e76\u5229\u7528Wio-E5 (\u5e26LoRa\u6a21\u5757\u548cAT\u547d\u4ee4)\u4e0a\u4f20\u4f20\u611f\u5668\u6570\u636e\u5230Indicator.")))),(0,i.kt)("p",null,"\u6709\u5173\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/blob/main/examples/indicator_lora/README.md"},"README"),"\u6587\u4ef6\u3002"),(0,i.kt)("h2",{id:"\u6280\u672f\u652f\u6301"},"\u6280\u672f\u652f\u6301"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u9700\u8981\u5e2e\u52a9\u89e3\u51b3SenseCAP Indicator\u7684\u95ee\u9898\u5417\uff1f\u6211\u4eec\u5728\u8fd9\u91cc\u5e2e\u52a9\u60a8\uff01")),(0,i.kt)("p",null,"\u5982\u679c\u60a8\u5728\u9075\u5faa\u672c\u6559\u7a0b\u65f6\u9047\u5230\u4efb\u4f55\u95ee\u9898\u6216\u6709\u4efb\u4f55\u7591\u95ee\uff0c\u8bf7\u968f\u65f6\u8054\u7cfb\u6211\u4eec\u7684\u6280\u672f\u652f\u6301\u3002\u6211\u4eec\u59cb\u7ec8\u5728\u6b64\u63d0\u4f9b\u5e2e\u52a9\uff01"),(0,i.kt)("p",null,"\u8bbf\u95ee\u6211\u4eec\u7684",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/invite/QqMgVwHT3X"},"Seeed\u5b98\u65b9Discord\u9891\u9053"),"\u63d0\u95ee\uff0c\u6216\u8005\u5230",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/SenseCAP_Indicator_ESP32/discussions"},"GitHub\u8ba8\u8bba\u533a"),"\u5206\u4eab\u60a8\u7684\u60f3\u6cd5\uff01"))}f.isMDXComponent=!0}}]);