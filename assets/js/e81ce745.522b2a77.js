"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7085],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(a),c=n,h=m["".concat(l,".").concat(c)]||m[c]||u[c]||o;return a?r.createElement(h,i(i({ref:t},d),{},{components:a})):r.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},72353:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={description:"Update eeprom",title:"Update EEPROM for Compute Module 4",keywords:["Raspberry_Pi","Official_Raspberry_Pi_Board"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Raspberry_pi_CM4_update_eeprom",last_update:{date:"2/15/2023",author:"jianjing Huang"}},i=void 0,p={unversionedId:"Top_Brand/Raspberry_Pi/Official_Raspberry_Pi_Module/Raspberry_pi_CM4_update_eeprom",id:"Top_Brand/Raspberry_Pi/Official_Raspberry_Pi_Module/Raspberry_pi_CM4_update_eeprom",title:"Update EEPROM for Compute Module 4",description:"Update eeprom",source:"@site/docs/Top_Brand/Raspberry_Pi/Official_Raspberry_Pi_Module/Raspberry_pi_CM4_update_eeprom.md",sourceDirName:"Top_Brand/Raspberry_Pi/Official_Raspberry_Pi_Module",slug:"/Raspberry_pi_CM4_update_eeprom",permalink:"/Raspberry_pi_CM4_update_eeprom",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Raspberry_Pi/Official_Raspberry_Pi_Module/Raspberry_pi_CM4_update_eeprom.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676419200,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{description:"Update eeprom",title:"Update EEPROM for Compute Module 4",keywords:["Raspberry_Pi","Official_Raspberry_Pi_Board"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Raspberry_pi_CM4_update_eeprom",last_update:{date:"2/15/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Remotely connect to Raspberry Pi",permalink:"/remote_connect"},next:{title:"Grove Base Hat for Raspberry Pi",permalink:"/Grove_Base_Hat_for_Raspberry_Pi"}},l={},s=[{value:"Seeed Studio Compute Module 4 Products",id:"seeed-studio-compute-module-4-products",level:2},{value:"How to update CM4 EEPROM",id:"how-to-update-cm4-eeprom",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Put CM4 eMMC Storage into USB mass storage Mode",id:"put-cm4-emmc-storage-into-usb-mass-storage-mode",level:3},{value:"Software Setup and Update EEPROM Firmware",id:"software-setup-and-update-eeprom-firmware",level:3},{value:"Change Boot Order and Update EEPROM",id:"change-boot-order-and-update-eeprom",level:3},{value:"Tech Support &amp; Product Descussion",id:"tech-support--product-descussion",level:2}],d={toc:s};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"what-is-compute-module-4"},"What is Compute Module 4"),(0,n.kt)("p",null,"The Raspberry Pi Compute Module 4 (CM4) leverages the computing power of the popular Raspberry Pi 4 Model B, with dramatic performance changes compared to its predecessor: faster CPU cores, better multimedia, more interface capabilities. And for the first time, this release offers multiple choices of RAM density and wireless connectivity options."),(0,n.kt)("p",null,"In terms of external dimensions, this version adopts a completely new mechanical standard. The overall footprint of the module on its carrier board is reduced, resulting in a smaller and more compact form factor suitable for integration into products."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/102991421_front-05_2_1.png",alt:"pir",width:650,height:"auto"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The power of Raspberry Pi 4 in a compact form factor for deeply embedded applications. Raspberry Pi Compute Module 4 incorporates a quad-core ARM Cortex-A72 processor, dual video output, and a wide selection of other interfaces. Available in 32 variants, with a range of RAM and eMMC Flash options, and with or without wireless connectivity. -- ",(0,n.kt)("a",{parentName:"p",href:"https://www.raspberrypi.com/products/compute-module-4/?variant=raspberry-pi-cm4001000"},"Raspbarry Pi CM4"),"{target=_blank}")),(0,n.kt)("h2",{id:"seeed-studio-compute-module-4-products"},"Seeed Studio Compute Module 4 Products"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"reTerminal"),(0,n.kt)("th",{parentName:"tr",align:null},"Edgebox-RPI-100"),(0,n.kt)("th",{parentName:"tr",align:null},"EdgeLogix-RPI-1000"),(0,n.kt)("th",{parentName:"tr",align:null},"reRouter"),(0,n.kt)("th",{parentName:"tr",align:null},"Dual Gigabit Ethernet NICs Carrier Board"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html",target:"_blank"},(0,n.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/r/e/reterminal-cover-1.png",alt:"pir",width:"650",height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/EdgeBox-RPI4-A-4G32G-WiFi-p-4971.html",target:"_blank"},(0,n.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991599_edgebox-rpi-200-first_3.jpg",alt:"pir",width:"650",height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/EdgeLogix-RPI-1000-CM4108032-p-5488.html",target:"_blank"},(0,n.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-102991734-102110773-edgelogix--rpi-1000-firstone_1.jpg",alt:"pir",width:"650",height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html",target:"_blank"},(0,n.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110110_preview-16.png",alt:"pir",width:"650",height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html",target:"_blank"},(0,n.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110090_preview-07-min.png",alt:"pir",width:"650",height:"auto"})))))),(0,n.kt)("h2",{id:"how-to-update-cm4-eeprom"},"How to update CM4 EEPROM"),(0,n.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Hardware Required:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Linux Based Host Computer(could be one of following):",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Raspbeery Pi 4B with Raspberry Pi OS installed"),(0,n.kt)("li",{parentName:"ul"},"PC with latest Ubuntu OS installed"))),(0,n.kt)("li",{parentName:"ul"},"USB Type-C cable")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Applicable Seeed Studio Hardware:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"reTerminal"),(0,n.kt)("th",{parentName:"tr",align:null},"reRouter"),(0,n.kt)("th",{parentName:"tr",align:null},"Dual Gigabit Ethernet NICs Carrier Board"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html",target:"_blank"},(0,n.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/r/e/reterminal-cover-1.png",alt:"pir",width:"650",height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html",target:"_blank"},(0,n.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110110_preview-16.png",alt:"pir",width:"650",height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html",target:"_blank"},(0,n.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/1/110110090_preview-07-min.png",alt:"pir",width:"650",height:"auto"})))))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This process requires to put the CM4 eMMC stroage into 'USB mass storage' mode, which currently on applicable with reRouter and reTerminal. If you have Edgebox-RPI-200 or EdgeLogix-RPI-1000 you will need to have a CM4 development board that could put CM4 eMMC storage into USB storage mode, For example ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Rapberry-Pi-CM4-Dual-GbE-Carrier-Board-p-4874.html"},"Dual Gigabit Ethernet NICs Carrier Board"),"{target=_blank}")),(0,n.kt)("h3",{id:"put-cm4-emmc-storage-into-usb-mass-storage-mode"},"Put CM4 eMMC Storage into USB mass storage Mode"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For reTerminal")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1:")," Open the case and remove the heatsink of reTerminal to get access the boot selection switch, Please follow the steps from the ",(0,n.kt)("a",{parentName:"li",href:"/reTerminal"},"reTerminal Getting Started Wiki Page")," until you have flipped the boot mode switch.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For reRouter")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1:")," Open the case of reRouter by remove the bottom 4 screws and the bottom cover as shown below:")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Mini_Router/bottom_screw.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2:")," Slide down the reRouter board from the case and take it out")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Mini_Router/slide_pcb.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3:")," Locate the 3-pin interface and short the GND and BOOT pins.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Dual Gigabit Ethernet NICs Carrier Board")," is the same PCB as the reRouter which just need to do the ",(0,n.kt)("strong",{parentName:"p"},"Step 3")," to select the boot mode.")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/102110497/latest-board/boot-pins.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("h3",{id:"software-setup-and-update-eeprom-firmware"},"Software Setup and Update EEPROM Firmware"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"On your PC or Raspberry Pi 4B (Flash Tool)")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"To update the EEPROM for raspberry pi only support with Linux based operating system, The following steps only tested on ",(0,n.kt)("strong",{parentName:"p"},"PC with Ubuntu 22.04")," and ",(0,n.kt)("strong",{parentName:"p"},"Raspbeery Pi 4B (Flash Tool) with Raspberry Pi OS (64-bit)"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1:")," Install required system software package, please open ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"Terminal"))," app and type follow command:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\nsudo apt-get update\n\nsudo apt install git pkg-config make gcc libusb-1.0-0-dev\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2:")," Clone the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"usbboot"))," tool repository")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/\n\ngit clone --depth=1 https://github.com/raspberrypi/usbboot\n\ncd usbboot\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3:")," Build the ",(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"strong"},"usbboot"))," tool")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\nmake\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4:")," Update the EEPROM")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"usbboot"))," github repo should have the latest EEPROM bootloader firmware updated, so following step should get you updated to the latest EEPROM bootloader firmware")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\ncd recovery\n\n./update-pieeprom.sh\n")),(0,n.kt)("p",null,"You should see the similar message as shown below:"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Mini_Router/eeprom_update_log.png",alt:"pir",width:1e3,height:"auto"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Optional:")," If you want use the specific release of the bootloader firmware you could visit the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/raspberrypi/rpi-eeprom/tree/master/firmware/"},"rpi-eeprom"),"{target=_blank} repo firmware folder to select and download firmware bin file to replace the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"pieeprom.original.bin"))," file, For example:"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This optinal step will replace the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"pieeprom.original.bin"))," file with the latest ",(0,n.kt)("inlineCode",{parentName:"p"},"stable")," build ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"pieeprom-2023-01-11.bin"))," at the time of writing this wiki.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\ncd ~/usbboot/recovery\n\nrm -f pieeprom.original.bin\n\ncurl -L -o pieeprom.original.bin https://github.com/raspberrypi/rpi-eeprom/blob/master/firmware/stable/pieeprom-2023-01-11.bin\n\n./update-pieeprom.sh\n")),(0,n.kt)("p",null,"You should see the similar message as shown below:"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Mini_Router/eeprom_update_log.png",alt:"pir",width:1e3,height:"auto"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 5:")," Connect the USB Type-C to the CM4 Device(",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"reTerminal"))," \\ ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"reRouter"))," \\ ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Dual Gigabit Ethernet NICs Carrier Board")),") and the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Host PC/Rasbperry Pi 4B(Flash Tool)"))," Device, which the ",(0,n.kt)("strong",{parentName:"p"},"CM4 Device")," should be put into the ",(0,n.kt)("strong",{parentName:"p"},"USB massive storage mode"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 6:")," To apply and update the EEPROM firmware"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\ncd ~/usbboot\n\n./rpiboot -d recovery\n\n")),(0,n.kt)("p",null,"You should see the similar message as shown below:"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Mini_Router/update_log.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"At this point your ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"CM4 Device"))," should have the new boot order setup and updated EEPROM firmware."),(0,n.kt)("h3",{id:"change-boot-order-and-update-eeprom"},"Change Boot Order and Update EEPROM"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You should have followed the above setup step until ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Step 3")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1:")," Edit the ",(0,n.kt)("inlineCode",{parentName:"li"},"boot.conf"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/usbboot/recovery\n\nnano boot.conf\n")),(0,n.kt)("p",null,"the file should look like as following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\n[all]\nBOOT_UART=0\nWAKE_ON_GPIO=1\nPOWER_OFF_ON_HALT=0\n\xa0\n# Try SD first (1), followed by, USB PCIe, NVMe PCIe, USB SoC XHCI then network\nBOOT_ORDER=0xf25641\n\xa0\n# Set to 0 to prevent bootloader updates from USB/Network boot\n# For remote units EEPROM hardware write protection should be used.\nENABLE_SELF_UPDATE=1\n")),(0,n.kt)("p",null,"where the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"BOOT_ORDER=0xf25641"))," line is the Boot order settings, where the current boot order setting is ",(0,n.kt)("inlineCode",{parentName:"p"},"SD CARD/eMMC > USB-MSD > NVME > BCM-USB-MSD > NETWORK > RESTART"),". If you want to change to boot order to ",(0,n.kt)("inlineCode",{parentName:"p"},"NVME > USB-MSD > BCM-USB-MSD >  SD CARD/eMMC > NETWORK > RESTART")," the boot order setting should be ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"BOOT_ORDER=0xf21564")),"."),(0,n.kt)("p",null,"Therefore the new boot order setting the ",(0,n.kt)("inlineCode",{parentName:"p"},"boot.conf")," should looks like following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\n[all]\nBOOT_UART=0\nWAKE_ON_GPIO=1\nPOWER_OFF_ON_HALT=0\n\xa0\n# Try SD first (1), followed by, USB PCIe, NVMe PCIe, USB SoC XHCI then network\nBOOT_ORDER=0xf21564\n\xa0\n# Set to 0 to prevent bootloader updates from USB/Network boot\n# For remote units EEPROM hardware write protection should be used.\nENABLE_SELF_UPDATE=1\n")),(0,n.kt)("p",null,"Save and exit the ",(0,n.kt)("inlineCode",{parentName:"p"},"nano")," editor."),(0,n.kt)("p",null,"The following is the table that defines the property of different boot modes setting for BOOT_ORDER for reference."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Mode"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0x0"),(0,n.kt)("td",{parentName:"tr",align:null},"SD CARD DETECT"),(0,n.kt)("td",{parentName:"tr",align:null},"Try SD then wait for card-detect to indicate that the card has changed - deprecated now that 0xf (RESTART) is available.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0x1"),(0,n.kt)("td",{parentName:"tr",align:null},"SD CARD/eMMC"),(0,n.kt)("td",{parentName:"tr",align:null},"SD card (or eMMC on Compute Module 4).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0x2"),(0,n.kt)("td",{parentName:"tr",align:null},"NETWORK"),(0,n.kt)("td",{parentName:"tr",align:null},"Network boot")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0x3"),(0,n.kt)("td",{parentName:"tr",align:null},"RPIBOOT"),(0,n.kt)("td",{parentName:"tr",align:null},"RPIBOOT")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0x4"),(0,n.kt)("td",{parentName:"tr",align:null},"USB-MSD"),(0,n.kt)("td",{parentName:"tr",align:null},"USB mass storage boot")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0x5"),(0,n.kt)("td",{parentName:"tr",align:null},"BCM-USB-MSD"),(0,n.kt)("td",{parentName:"tr",align:null},"USB 2.0 boot from USB Type C socket (CM4: USB type A socket on CM4IO board).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0x6"),(0,n.kt)("td",{parentName:"tr",align:null},"NVME"),(0,n.kt)("td",{parentName:"tr",align:null},"CM4 only: boot from an NVMe SSD connected to the PCIe interface.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0x7"),(0,n.kt)("td",{parentName:"tr",align:null},"HTTP"),(0,n.kt)("td",{parentName:"tr",align:null},"HTTP boot over ethernet.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0xe"),(0,n.kt)("td",{parentName:"tr",align:null},"STOP"),(0,n.kt)("td",{parentName:"tr",align:null},"Stop and display error pattern. A power cycle is required to exit this state.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0xf"),(0,n.kt)("td",{parentName:"tr",align:null},"RESTART"),(0,n.kt)("td",{parentName:"tr",align:null},"Restart from the first boot-mode in the BOOT_ORDER field i.e. loop")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Reference: ",(0,n.kt)("a",{parentName:"p",href:"https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#BOOT_ORDER"},"BOOT_ORDER Property Table"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2:")," Get the latest firmware")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\nwget -O pieeprom.original.bin https://github.com/raspberrypi/rpi-eeprom/blob/master/firmware/stable/pieeprom-2023-01-11.bin\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3:")," Update the EEPROM firmware with the new ",(0,n.kt)("inlineCode",{parentName:"li"},"boot.conf"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"\n./update-pieeprom.sh\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4:")," Connect the USB Type-C to the CM4 Device(",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"reTerminal"))," \\ ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"reRouter"))," \\ ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Dual Gigabit Ethernet NICs Carrier Board")),") and the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"Host PC/Rasbperry Pi 4B(Flash Tool)"))," Device, which the ",(0,n.kt)("strong",{parentName:"p"},"CM4 Device")," should be put into the ",(0,n.kt)("strong",{parentName:"p"},"USB massive storage mode"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 5:")," Apply the firmware to the device"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/usbboot\n\nsudo ./rpiboot -d recovery\n")),(0,n.kt)("p",null,"You should see the similar message as shown below:"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Mini_Router/update_log.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"At this point your ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"CM4 Device"))," should have the new boot order setup and updated EEPROM firmware."),(0,n.kt)("h2",{id:"tech-support--product-descussion"},"Tech Support & Product Descussion"),(0,n.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,n.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,n.kt)("div",{class:"button_tech_support_container"},(0,n.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);