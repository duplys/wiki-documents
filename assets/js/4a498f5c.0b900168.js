"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[29886],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>k});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(i),c=a,k=p["".concat(s,".").concat(c)]||p[c]||m[c]||r;return i?n.createElement(k,o(o({ref:t},d),{},{components:i})):n.createElement(k,o({ref:t},d))}));function k(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=i[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},53378:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=i(87462),a=(i(67294),i(3905));const r={description:"Build a HMI Display for Windows/MacOS using Wio Terminal",title:"Build a HMI Display for Windows/MacOS using Wio Terminal",keywords:["Wio_terminal USB_Client"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-HMI-Usermode-SDK",last_update:{date:"1/17/2023",author:"jianjing Huang"}},o="Build a HMI Display for Windows/MacOS using Wio Terminal",l={unversionedId:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-HMI-Usermode-SDK",id:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-HMI-Usermode-SDK",title:"Build a HMI Display for Windows/MacOS using Wio Terminal",description:"Build a HMI Display for Windows/MacOS using Wio Terminal",source:"@site/docs/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-HMI-Usermode-SDK.md",sourceDirName:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client",slug:"/Wio-Terminal-HMI-Usermode-SDK",permalink:"/Wio-Terminal-HMI-Usermode-SDK",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-HMI-Usermode-SDK.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673913600,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{description:"Build a HMI Display for Windows/MacOS using Wio Terminal",title:"Build a HMI Display for Windows/MacOS using Wio Terminal",keywords:["Wio_terminal USB_Client"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-HMI-Usermode-SDK",last_update:{date:"1/17/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"MIDI",permalink:"/Wio-Terminal-USBCLIENT-MIDI"},next:{title:"Build a DAPLink Device using Wio Terminal",permalink:"/Wio-Terminal-DAPLink"}},s={},u=[{value:"Hardware Required",id:"hardware-required",level:2},{value:"Wio Terminal Firmware",id:"wio-terminal-firmware",level:2},{value:"<code>uf2</code> Method",id:"uf2-method",level:3},{value:"Host Device Firmware",id:"host-device-firmware",level:2},{value:"MacOS/Linux OS - C++ SDK",id:"macoslinux-os---c-sdk",level:3},{value:"Multiple Screens",id:"multiple-screens",level:4},{value:"Windows - Python SDK",id:"windows---python-sdk",level:3},{value:"Multiple Screens",id:"multiple-screens-1",level:4},{value:"Simple Demo",id:"simple-demo",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support &amp; Product Descussion",id:"tech-support--product-descussion",level:2}],d={toc:u};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"build-a-hmi-display-for-windowsmacos-using-wio-terminal"},"Build a HMI Display for Windows/MacOS using Wio Terminal"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/banner.png"})),(0,a.kt)("p",null,"In this wiki, we will introduce how to use ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},(0,a.kt)("strong",{parentName:"a"},"Wio Terminal"))," as HMI display using the ",(0,a.kt)("strong",{parentName:"p"},"usermode SDK for runing on Windows/Linux/Mac OS.")," This extends the possibilities of Wio Terminal in Industrial usage!"),(0,a.kt)("p",null,"If you want to use Wio Terminal with Raspberry Pi as HMI display, please check this ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-HMI/"},"wiki"),"."),(0,a.kt)("h2",{id:"hardware-required"},"Hardware Required"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},(0,a.kt)("strong",{parentName:"a"},"Wio Terminal")))),(0,a.kt)("h2",{id:"wio-terminal-firmware"},"Wio Terminal Firmware"),(0,a.kt)("p",null,"First, you will need to upload an Arduino program to your Wio Terminal via your PC."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_Arduino_USBDISP"},(0,a.kt)("strong",{parentName:"a"},"Seeed_Arduino_USBDISP"))," library here.")),(0,a.kt)("p",null,"There are two ",(0,a.kt)("strong",{parentName:"p"},"examples"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"NullFunctional")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"USBDisplayAndMouseControl"),":"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If you want ",(0,a.kt)("strong",{parentName:"li"},"higher screen refresh rate on Wio Terminal"),", upload ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"NullFunctional"))," to Wio Terminal."),(0,a.kt)("li",{parentName:"ol"},"If you want ",(0,a.kt)("strong",{parentName:"li"},"Wio Terminal to also act as a USB Mouse"),", upload ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"USBDisplayAndMouseControl"))," to Wio Terminal.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Please ",(0,a.kt)("strong",{parentName:"p"},"make sure read the notes"),", for usermode SDK, ",(0,a.kt)("inlineCode",{parentName:"p"},"USBDISP().begin(true);")," becomes ",(0,a.kt)("inlineCode",{parentName:"p"},"USBDISP().begin(true, true);"),".")),(0,a.kt)("h3",{id:"uf2-method"},(0,a.kt)("inlineCode",{parentName:"h3"},"uf2")," Method"),(0,a.kt)("p",null,"For convenience, we also provide ",(0,a.kt)("inlineCode",{parentName:"p"},"uf2")," methods of uploading Wio Terminal's firmware. Simply download the ",(0,a.kt)("inlineCode",{parentName:"p"},"uf2")," files from below."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Download the ",(0,a.kt)("a",{parentName:"p",href:"http://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/NullFunctional-sdk.uf2"},"NullFunctional")," ",(0,a.kt)("inlineCode",{parentName:"p"},"uf2")," files.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Download the ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/USBDisplayAndMouseControl-sdk.uf2"},"USBDisplayAndMouseControl")," ",(0,a.kt)("inlineCode",{parentName:"p"},"uf2")," files."))),(0,a.kt)("p",null,"Entering the bootloader mode by sliding the power switch twice quickly. For more reference, please also see ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq"},"here"),"."),(0,a.kt)("p",null,"An external drive named ",(0,a.kt)("inlineCode",{parentName:"p"},"Arduino")," should appear in your PC. Drag the the downloaded uf2 files to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Arduino")," drive."),(0,a.kt)("h2",{id:"host-device-firmware"},"Host Device Firmware"),(0,a.kt)("p",null,"This time our host device becomes our PC, let's walk through how you can use Wio Terminal as HMI display with the usermode SDK!"),(0,a.kt)("h3",{id:"macoslinux-os---c-sdk"},"MacOS/Linux OS - C++ SDK"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download the firmware repo:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd ~\ngit clone https://github.com/Seeed-Studio/seeed-linux-usbdisp.git\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Navigate to the usermode sdk path:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd ~/seeed-linux-usbdisp/drivers/usermode-sdk/rpusbdisp-drv/src\n")),(0,a.kt)("p",null,"Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"rpusbdisp.cc")," and ",(0,a.kt)("strong",{parentName:"p"},"define macros depending on your Wio Terminals firmware (Nullfunctional or USBDisplayAndMouseControl)"),". Uncomment the one that you are using:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/macros.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Navigate back to the usermode sdk path:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd ~/seeed-linux-usbdisp/drivers/usermode-sdk\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Make and build the driver:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"make\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You may require some dependent library such as ",(0,a.kt)("inlineCode",{parentName:"p"},"lisusb"),". MacOS can use ",(0,a.kt)("a",{parentName:"p",href:"https://brew.sh/"},(0,a.kt)("inlineCode",{parentName:"a"},"brew"))," and Linux OS can use ",(0,a.kt)("inlineCode",{parentName:"p"},"apt-get")," to install.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Navigate the build directory:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd ~/seeed-linux-usbdisp/drivers/usermode-sdk/build/\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run the demo:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo ./rpusbdispdemo --demo 1\n")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/demo.gif"})),(0,a.kt)("p",null,"You should see that Wio Terminal is starting to display, the graphics are drawn. The source code for this is under: ",(0,a.kt)("inlineCode",{parentName:"p"},"seeed-linux-usbdisp/drivers/usermode-sdk/demo/src/main.cc"),"."),(0,a.kt)("h4",{id:"multiple-screens"},"Multiple Screens"),(0,a.kt)("p",null,"This C++ SDK also supports multiple screens (multiple Wio Terminals), for 2 screens usage simply run the demo 2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo ./rpusbdispdemo --demo 2\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Here provides 4 demos up to using 4 screens, you may check the source code for referencing your applications."),(0,a.kt)("h3",{id:"windows---python-sdk"},"Windows - Python SDK"),(0,a.kt)("p",null,"For Windows, you can run the usermode sdk on Python! First, make sure you have installed python and install the dependent library:"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Python is cross-platform and you can run this demo on all platforms, including Windows/Linux/MacOS"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pip3 install pyusb\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to the python-demo path:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd ~/seeed-linux-usbdisp/drivers/python-demo/\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the ",(0,a.kt)("inlineCode",{parentName:"li"},"simple-test.py")," and define the right macros with the firmware inside your Wio Terminal, and save.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/macros-2.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run the Python demo:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"python3 simple-test.py\n")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/simple-test.gif"})),(0,a.kt)("h4",{id:"multiple-screens-1"},"Multiple Screens"),(0,a.kt)("p",null,"This Python SDK also supports multiple screens (multiple Wio Terminals), you may check the ",(0,a.kt)("inlineCode",{parentName:"p"},"USBDisplay.py")," as reference."),(0,a.kt)("p",null,"This examples use 4 Wio Terminals as displays, which has a format looks like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"devices = list(usb.core.find(find_all=True, idVendor=0x2886, idProduct=0x802D))\ndev1 = devices[0] # device 0\ndev2 = devices[1] # device 1\ndev3 = devices[2] # device 2\ndev4 = devices[3] # device 3\n")),(0,a.kt)("h2",{id:"simple-demo"},"Simple Demo"),(0,a.kt)("p",null,"This example simple transfer a image from PC side to the Wio Terminal using Python."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go to the demo path:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd ~/seeed-linux-usbdisp/drivers/python-demo/\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download the ",(0,a.kt)("inlineCode",{parentName:"li"},"image.jpg")," and save it in the same location as ",(0,a.kt)("inlineCode",{parentName:"li"},"image-test.py"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Please ",(0,a.kt)("strong",{parentName:"p"},"choose the macros that match your Wio Terminal firmware"),", otherwise there will be an error."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run the demo:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"python3 image-test.py\n")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/image-demo.png"})),(0,a.kt)("h2",{id:"resource"},"Resource"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Wio-Terminal-HMI-SDK/rpusbdisp_interface_protocol.pdf"},"rpusbdisp interface protocols document"))),(0,a.kt)("h2",{id:"tech-support--product-descussion"},"Tech Support & Product Descussion"),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}p.isMDXComponent=!0}}]);