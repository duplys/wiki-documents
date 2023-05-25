"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[61185],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},21970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={description:"A205E Mini PC",title:"A205E Mini PC",keywords:["Nvidia","reComputer"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/reComputer_A205E_Flash_System",last_update:{date:"01/05/2023",author:"w0x7ce"},no_comments:!1},i=void 0,s={unversionedId:"Top_Brand/NVIDIA/Mini_PC/reComputer_A205E_Flash_System",id:"Top_Brand/NVIDIA/Mini_PC/reComputer_A205E_Flash_System",title:"A205E Mini PC",description:"A205E Mini PC",source:"@site/docs/Top_Brand/NVIDIA/Mini_PC/reComputer_A205E_Flash_System.md",sourceDirName:"Top_Brand/NVIDIA/Mini_PC",slug:"/reComputer_A205E_Flash_System",permalink:"/reComputer_A205E_Flash_System",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/NVIDIA/Mini_PC/reComputer_A205E_Flash_System.md",tags:[],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672876800,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{description:"A205E Mini PC",title:"A205E Mini PC",keywords:["Nvidia","reComputer"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/reComputer_A205E_Flash_System",last_update:{date:"01/05/2023",author:"w0x7ce"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"A203E Mini PC",permalink:"/reComputer_A203E_Flash_System"},next:{title:"T906 Mini PC",permalink:"/Mini_AI_Computer_T906"}},l={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Software Preparation",id:"software-preparation",level:3},{value:"Hardware Preparation (Force Recovery Mode)",id:"hardware-preparation-force-recovery-mode",level:3},{value:"Flashing JetPack OS via Command Line",id:"flashing-jetpack-os-via-command-line",level:2},{value:"Step 1. Download the proper NVIDIA Linux Driver Package",id:"step-1-download-the-proper-nvidia-linux-driver-package",level:3},{value:"Step 2.  Unzip Package Files and Assemble the Rootfs via Command Line",id:"step-2--unzip-package-files-and-assemble-the-rootfs-via-command-line",level:3},{value:"Step 3.  Flash the System to the Board",id:"step-3--flash-the-system-to-the-board",level:3},{value:"Tech Support &amp; Product Descussion",id:"tech-support--product-descussion",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"flash-jetpack-os-to-a205e-carrier-board-or-a205e-mini-pc-nvidia-jetson-xavier-nx-supported"},"Flash JetPack OS to A205E Carrier Board or A205E Mini PC (NVIDIA Jetson Xavier NX supported)"),(0,r.kt)("p",null,"In this wiki, we will show you how to flash Jetpack OS to the A205E Carrier Board or A205E Mini PC which supports NVIDIA Jetson Xavier module. We here will introduce you two ways to flash the system, and because the A205 Carrier Board is different to the official NVIDIA Jetson Carrier Board, the corresponding driver should be installed as well."),(0,r.kt)("div",{align:"center"},(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/A205E-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5496.html",target:"_blank"},(0,r.kt)("span",null,"A205E Carrier Board"))),(0,r.kt)("td",{align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/A205E-Mini-PC-with-128GB-SSD-p-5495.html",target:"_blank"},(0,r.kt)("span",null,"A205E Mini PC")))),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/A205E-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5496.html",target:"_blank",rel:"noopener"},(0,r.kt)("img",{width:350,src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/5/_/5_7_1.png",alt:!0}))),(0,r.kt)("td",{align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/A205E-Mini-PC-with-128GB-SSD-p-5495.html",target:"_blank",rel:"noopener"},(0,r.kt)("img",{width:380,src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/1/_/1_9_2.png",alt:!0}))))))),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"we can easily do this by using the ",(0,r.kt)("strong",{parentName:"p"},"Linux Terminal"),". For people who have Linux knowledge base, we highly recommand using Linux Terminal only."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#flashing-jetpack-os-via-command-line"},"Flashing JetPack OS via Linux terminal"))),(0,r.kt)("h3",{id:"software-preparation"},"Software Preparation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{href:"https://developer.nvidia.com/login",target:"_blank"},(0,r.kt)("span",null,"NVIDIA account"))),(0,r.kt)("li",{parentName:"ul"},"Ubuntu 18.04 OS on the Host Computer")),(0,r.kt)("p",null,"!!!note\nIn this tutorial, we will use Ubuntu 18.04 LTS based system to complete the installation."),(0,r.kt)("h3",{id:"hardware-preparation-force-recovery-mode"},"Hardware Preparation (Force Recovery Mode)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Host computer with Ubuntu 18.04 OS"),(0,r.kt)("li",{parentName:"ul"},"a USB Type-C data Cable"),(0,r.kt)("li",{parentName:"ul"},"Power adptor for A205E Carrier Board or A205E Mini PC")),(0,r.kt)("p",null,"Before we can move on to the installation steps, we need to make sure that the board is in the force recovery mode"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1.")," Please locate the USB Type-C port, the Power Button, Reset Button and Recovery Button on the side of the A205E Carrier Board or A205E Mini PC."),(0,r.kt)("div",{align:"center"},(0,r.kt)("table",null,(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{align:"center"},"A205E Carrier Board"),(0,r.kt)("td",{align:"center"},"A205E Mini PC")),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/A205E-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5496.html",target:"_blank",rel:"noopener"},(0,r.kt)("img",{width:350,src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/a/n/antenna_dc_jack_io_controller_20_pin_1_.png",alt:!0}))),(0,r.kt)("td",{align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/A205E-Mini-PC-with-128GB-SSD-p-5495.html",target:"_blank",rel:"noopener"},(0,r.kt)("img",{width:380,src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/2/_/2_8_3.png",alt:!0}))))))),(0,r.kt)("p",null,"TO put the A205E in Force Recovery Mode, please make sure A205E is powered off."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Conenct the USB Type-C cable with the Type-C programming port on ",(0,r.kt)("strong",{parentName:"p"},"A205E Carrier Board or A205E Mini PC")," and the host computer."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3.")," Connect the Power adptor for ",(0,r.kt)("strong",{parentName:"p"},"A205E Carrier Board or A205E Mini PC"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4.")," ",(0,r.kt)("strong",{parentName:"p"},"Press and Hold")," the ",(0,r.kt)("strong",{parentName:"p"},"Recovery Key")," first, and then ",(0,r.kt)("strong",{parentName:"p"},"Press and Hold")," the ",(0,r.kt)("strong",{parentName:"p"},"Power Key"),", wait for the LED to be light up, then ",(0,r.kt)("strong",{parentName:"p"},"Release")," the ",(0,r.kt)("strong",{parentName:"p"},"Power Key"),", now ",(0,r.kt)("strong",{parentName:"p"},"Wait for 2 second")," and ",(0,r.kt)("strong",{parentName:"p"},"Release")," the ",(0,r.kt)("strong",{parentName:"p"},"Recovery Key"),". "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Or")),(0,r.kt)("p",null,"If the ",(0,r.kt)("strong",{parentName:"p"},"A205E Carrier Board or A205E Mini PC")," is in the ",(0,r.kt)("strong",{parentName:"p"},"Power On")," state, ",(0,r.kt)("strong",{parentName:"p"},"Press and Hold")," the ",(0,r.kt)("strong",{parentName:"p"},"Reset Key")," and the ",(0,r.kt)("strong",{parentName:"p"},"Recovery Key"),", ",(0,r.kt)("strong",{parentName:"p"},"Release")," the ",(0,r.kt)("strong",{parentName:"p"},"Reset Key")," for ",(0,r.kt)("strong",{parentName:"p"},"2 Second"),", then ",(0,r.kt)("strong",{parentName:"p"},"Release")," the ",(0,r.kt)("strong",{parentName:"p"},"Recovery Key"),". "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 5.")," On the Linux host PC screen, we can right click the mouse to open a Terminal and enter the command ",(0,r.kt)("inlineCode",{parentName:"p"},"lsusb"),". When the returned content has the ",(0,r.kt)("inlineCode",{parentName:"p"},"NVidia Corp.")," in it, it means that your A205 Carrier Board is in force recovery mode and you can proceed to the subsequent operations."),(0,r.kt)("p",null,"The ID depends on the modules on the carrier board and the information show as below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For Jetson Xavier NX: ",(0,r.kt)("strong",{parentName:"li"},"0955:7e19 NVidia Corp"))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/A203E/NX_lsusb.png"})),(0,r.kt)("h2",{id:"flashing-jetpack-os-via-command-line"},"Flashing JetPack OS via Command Line"),(0,r.kt)("p",null,"Here is the workflow of using Command Line scrpit to flash Jetpack OS:"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png"})),(0,r.kt)("h3",{id:"step-1-download-the-proper-nvidia-linux-driver-package"},"Step 1. Download the proper NVIDIA Linux Driver Package"),(0,r.kt)("p",null,"On the ",(0,r.kt)("strong",{parentName:"p"},"Linux host PC"),", we need to open a browser and go the ",(0,r.kt)("a",{href:"https://developer.nvidia.com/embedded/jetson-linux-archive",target:"_blank"},(0,r.kt)("span",null,"Jetson Linux Archive")),". First we should check if the version of Jetson Linux is supported. In this case we are using the NVIDIA L4T 35.1.0(equivalent of Jetpack 5.0.2)"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/A203E/select_35_1.png"})),(0,r.kt)("p",null,'Once you find the proper version, click to go to the downloaded page. Find and click the "L4T Driver Package (BSP)" and "Sample Root Filesystem" to download the driver files. The names of the files are like ',(0,r.kt)("inlineCode",{parentName:"p"},"Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Jetson-210_Linux_Rxx.x.x_aarch64.tbz2"),"."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/A203E/download_files.png"})),(0,r.kt)("p",null,"As the example, we choose the NVIDIA L4T 35.1.0 version, The names of the files should be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2"),(0,r.kt)("li",{parentName:"ul"},"Jetson_Linux_R35.1.0_aarch64.tbz2")),(0,r.kt)("h3",{id:"step-2--unzip-package-files-and-assemble-the-rootfs-via-command-line"},"Step 2.  Unzip Package Files and Assemble the Rootfs via Command Line"),(0,r.kt)("p",null,"On the Linux Host PC, Please open a ",(0,r.kt)("inlineCode",{parentName:"p"},"Terminal")," and use the command line below to unzip the files and assemble the rootfs:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ tar xf ${L4T_RELEASE_PACKAGE}\n$ cd Linux_for_Tegra/rootfs/\n$ sudo tar xpf ../../${SAMPLE_FS_PACKAGE}\n$ cd ..\n$ sudo ./apply_binaries.sh\n")),(0,r.kt)("p",null,"!!!Note\n",(0,r.kt)("inlineCode",{parentName:"p"},"${XXX_XX_XXX}")," is where you put the names of the files."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For example, the downloaded files are stored in ",(0,r.kt)("inlineCode",{parentName:"li"},"~/Downloads/"),", please open the ",(0,r.kt)("inlineCode",{parentName:"li"},"Terminal")," on your Ubuntu Host Computer and enter following commands:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/Downlands/\nmkdir Jetpack_502\nmv Jetson_Linux_R35.1.0_aarch64.tbz2 Jetpack_502/\nmv Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2 Jetpack_502/\ncd Jetpack_501/\ntar xf Jetson_Linux_R35.1.0_aarch64.tbz2\ncd Linux_for_Tegra/rootfs/\nsudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R35.1.0_aarch64.tbz2\ncd ..\nsudo ./apply_binaries.sh\n")),(0,r.kt)("h3",{id:"step-3--flash-the-system-to-the-board"},"Step 3.  Flash the System to the Board"),(0,r.kt)("p",null,"In the example we use NVIDIA Jetson Xavier NX module and we can directly flash the system into the board execute following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd ~/Downlands/Jetpack_502/Linux_for_Tegra\nsudo ./flash.sh -r jetson-xavier-nx-devkit-emmc mmcblk0p1\n")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png"})),(0,r.kt)("h2",{id:"tech-support--product-descussion"},"Tech Support & Product Descussion"),(0,r.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}c.isMDXComponent=!0}}]);