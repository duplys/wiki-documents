"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[86969],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=p(n),u=a,m=h["".concat(l,".").concat(u)]||h[u]||c[u]||i;return n?o.createElement(m,r(r({ref:t},d),{},{components:n})):o.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:a,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const i={description:"A205 Carrier Board",title:"A205 Carrier Board",keywords:["Edge","reComputer Carrier_Board_for_Jetson_Moudule"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/reComputer_A205_Flash_System",last_update:{date:"01/05/2023",author:"w0x7ce"},no_comments:!1},r=void 0,s={unversionedId:"Edge/reComputer/Carrier_Board_for_Jetson_Moudule/reComputer_A205_Flash_System",id:"Edge/reComputer/Carrier_Board_for_Jetson_Moudule/reComputer_A205_Flash_System",title:"A205 Carrier Board",description:"A205 Carrier Board",source:"@site/docs/Edge/reComputer/Carrier_Board_for_Jetson_Moudule/reComputer_A205_Flash_System.md",sourceDirName:"Edge/reComputer/Carrier_Board_for_Jetson_Moudule",slug:"/reComputer_A205_Flash_System",permalink:"/reComputer_A205_Flash_System",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reComputer/Carrier_Board_for_Jetson_Moudule/reComputer_A205_Flash_System.md",tags:[],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672876800,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{description:"A205 Carrier Board",title:"A205 Carrier Board",keywords:["Edge","reComputer Carrier_Board_for_Jetson_Moudule"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/reComputer_A205_Flash_System",last_update:{date:"01/05/2023",author:"w0x7ce"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"A203 Carrier Board",permalink:"/reComputer_A203_Flash_System"},next:{title:"Jetson Mate",permalink:"/Jetson-Mate"}},l={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Software Preparation",id:"software-preparation",level:3},{value:"Hardware Preparation (Force Recovery Mode)",id:"hardware-preparation-force-recovery-mode",level:3},{value:"Flashing JetPack OS via NVIDIA SDK Manager",id:"flashing-jetpack-os-via-nvidia-sdk-manager",level:2},{value:"Step 1.  Install NVIDIA SDK Manager on the Linux Host PC",id:"step-1--install-nvidia-sdk-manager-on-the-linux-host-pc",level:3},{value:"Step 2.  Open NVIDIA SDK Manager and login",id:"step-2--open-nvidia-sdk-manager-and-login",level:3},{value:"Step 3.  Select the target device",id:"step-3--select-the-target-device",level:3},{value:"Step 4.  Review wanted components",id:"step-4--review-wanted-components",level:3},{value:"Step 5. Choose Proper Drivers",id:"step-5-choose-proper-drivers",level:3},{value:"Step 6. Unzip the Driver in the system folder",id:"step-6-unzip-the-driver-in-the-system-folder",level:3},{value:"Replace the Files",id:"replace-the-files",level:3},{value:"Step 7. Installing system",id:"step-7-installing-system",level:3},{value:"(Optional)Step 7. Install the SDK components",id:"optionalstep-7-install-the-sdk-components",level:3},{value:"Flashing JetPack OS via Command Line",id:"flashing-jetpack-os-via-command-line",level:2},{value:"Step 1. Download the proper NVIDIA Linux Driver Package",id:"step-1-download-the-proper-nvidia-linux-driver-package",level:3},{value:"Step 2.  Unzip Package Files and Assemble the Rootfs via Command Line",id:"step-2--unzip-package-files-and-assemble-the-rootfs-via-command-line",level:3},{value:"Step 3. Choose Proper Drivers",id:"step-3-choose-proper-drivers",level:3},{value:"Step 4. Unzip the Driver in the file",id:"step-4-unzip-the-driver-in-the-file",level:3},{value:"Step 5.  Flash the System to the Board",id:"step-5--flash-the-system-to-the-board",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Troubleshooting Installation with NVIDIA SDK Manager",id:"troubleshooting-installation-with-nvidia-sdk-manager",level:3},{value:"Troubleshooting installation using the command line",id:"troubleshooting-installation-using-the-command-line",level:3},{value:"Tech Support &amp; Product Descussion",id:"tech-support--product-descussion",level:2}],d={toc:p};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"flash-jetpack-os-to-a205-carrier-board-nvidia-jetson-nano--nvidia-jetson-xavier-nx-supported"},"Flash JetPack OS to A205 Carrier Board (NVIDIA Jetson Nano & NVIDIA Jetson Xavier NX supported)"),(0,a.kt)("p",null,"In this wiki, we will show you how to flash Jetpack OS to the A205 Carrier Board which supports both NVIDIA Jetson Nano module and NVIDIA Jetson Xavier module. We here will introduce you two ways to flash the system, and because the A205 Carrier Board is different to the official NVIDIA Jetson Carrier Board, the corresponding driver should be installed as well."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/reComputer_Carrier_Board/A205/Flash_A205.png",alt:"image"})),(0,a.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/A205-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5133.html"},(0,a.kt)("strong",null,(0,a.kt)("span",null,(0,a.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"We can use ",(0,a.kt)("strong",{parentName:"p"},"NVIDIA SDK manager and Linux terminal")," to flash the system, or we can easily do this by using the ",(0,a.kt)("strong",{parentName:"p"},"Linux Terminal"),". For people who have Linux knowledge base, we highly recommand using Linux Terminal only."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#flashing-jetpack-os-via-nvidia-sdk-manager"},"Flashing JetPack OS via NVIDIA SDK manager and Linux terminal")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#flashing-jetpack-os-via-command-line"},"Flashing JetPack OS via Linux terminal"))),(0,a.kt)("p",null,"There are still some preparation that we need first:"),(0,a.kt)("h3",{id:"software-preparation"},"Software Preparation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{href:"https://developer.nvidia.com/login",target:"_blank"},(0,a.kt)("span",null,"NVIDIA account"))),(0,a.kt)("li",{parentName:"ul"},"Linux Host Computer with Ubuntu 18.04 OS (or above)")),(0,a.kt)("p",null,"!!!note\nIn this tutorial, we will use Ubuntu 18.04 LTS based system to complete the installation."),(0,a.kt)("h3",{id:"hardware-preparation-force-recovery-mode"},"Hardware Preparation (Force Recovery Mode)"),(0,a.kt)("p",null,"Before we can move on to the installation steps, we need to make sure that the board is in the force recovery mode. There are different types of the board, please note the difference."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1.")," First, we need to disconnect power of the board."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Connect your carrier board and your Linux host PC with a ",(0,a.kt)("strong",{parentName:"p"},"USB type-C link")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/reComputer_Carrier_Board/A205/Flash_A2051.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Power up and turn on board while pressing ",(0,a.kt)("strong",{parentName:"p"},"RECOVERY button (W32)")," and then release the button."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/reComputer_Carrier_Board/A205/Flash_A2052.jpg"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 4.")," On the Linux host PC screen, we can right click the mouse to open a Terminal and enter the command ",(0,a.kt)("inlineCode",{parentName:"p"},"lsusb"),". When the returned content has the ",(0,a.kt)("inlineCode",{parentName:"p"},"NVidia Corp.")," in it, it means that your A205 Carrier Board is in force recovery mode and you can proceed to the subsequent operations."),(0,a.kt)("p",null,"The ID depends on the modules on the carrier board and the information show as below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For Jetson Nano: ",(0,a.kt)("strong",{parentName:"li"},"0955:7f21 NVidia Corp")),(0,a.kt)("li",{parentName:"ul"},"For Jetson Xavier NX: ",(0,a.kt)("strong",{parentName:"li"},"0955:7e19 NVidia Corp")),(0,a.kt)("li",{parentName:"ul"},"For Jetson TX2 NX: ",(0,a.kt)("strong",{parentName:"li"},"0955:7c18 NVidia Corp"))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5.png"})),(0,a.kt)("h2",{id:"flashing-jetpack-os-via-nvidia-sdk-manager"},"Flashing JetPack OS via NVIDIA SDK Manager"),(0,a.kt)("p",null,"Next we will go through the tutorial about installing the system via NVIDIA SDK Manager. The an NVIDIA SDK Manager all-in-one tool that bundles developer software and provides an end-to-end development environment setup solution for NVIDIA SDKs."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png"})),(0,a.kt)("h3",{id:"step-1--install-nvidia-sdk-manager-on-the-linux-host-pc"},"Step 1.  Install NVIDIA SDK Manager on the Linux Host PC"),(0,a.kt)("p",null,"We need to open the browser on the Linux Host PC and ",(0,a.kt)("a",{href:"https://developer.nvidia.com/nvidia-sdk-manager",target:"_blank"},(0,a.kt)("span",null,"download the NVIDIA SDK Manager"))," from the NVIDIA official website."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputerJ2021_J202_Flash_Jetpack1.png"})),(0,a.kt)("h3",{id:"step-2--open-nvidia-sdk-manager-and-login"},"Step 2.  Open NVIDIA SDK Manager and login"),(0,a.kt)("p",null,"On the Linux host PC screen, we can right click the mouse and open a Terminal. Then we can type the command below to start the SDK Manager:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sdkmanager")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_system_installation1.png"})),(0,a.kt)("p",null,"The first time you use NVIDIA SDK Manager, a web page will pop up prompting you to log in with your previously registered NVIDIA account."),(0,a.kt)("h3",{id:"step-3--select-the-target-device"},"Step 3.  Select the target device"),(0,a.kt)("p",null,"After logging in, you will be taken to the first screen where the first step of installing. Since we have already connected the board, there will be a window pop up to let you select the hardware device."),(0,a.kt)("p",null,"The example here is equipping with the ",(0,a.kt)("strong",{parentName:"p"},"NVIDIA Jetson Nano 4GB module"),", so we can choose the first one."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/6.jpg"})),(0,a.kt)("p",null,"There are more selections for you to choose in the first screen:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("strong",{parentName:"li"},"Jetson")," in the Product Category panel need to be selected."),(0,a.kt)("li",{parentName:"ul"},"In the Hardware Configuration panel, we recommend that you ",(0,a.kt)("strong",{parentName:"li"},"do not select Host Machine"),". This will take more time to install the NVIDIA components for your current Ubuntu host. You can choose it if you need."),(0,a.kt)("li",{parentName:"ul"},"In the Target Operating System panel, we can select different ",(0,a.kt)("strong",{parentName:"li"},"operating system")," and ",(0,a.kt)("strong",{parentName:"li"},"JetPack version"),'. But be careful the version of JetPack, different modules may support different type of JetPack. We recommand "JetPack 4.6.1" here.'),(0,a.kt)("li",{parentName:"ul"},"In the Additional SDKs, since the storage space of eMMC is only 16GB, it will be out of memory if we install DeepStream here.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png"})),(0,a.kt)("p",null,"Click Continue to proceed to the next step."),(0,a.kt)("h3",{id:"step-4--review-wanted-components"},"Step 4.  Review wanted components"),(0,a.kt)("p",null,"From ",(0,a.kt)("strong",{parentName:"p"},"Details and License"),", you can expand the host components and target components panels to review the components that will be installed on your system."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png"})),(0,a.kt)("p",null,"If you only need to install the system, you can uncheck the SDK component."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png"})),(0,a.kt)("p",null,"!!!Tip\nWhen choosing which components to install, you may want to keep an eye on the capacity used. The built-in eMMC size is only 16GB, please allocate and use this space wisely according to your actual needs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>\nAfter actual testing, there is only about 500MB of eMMC space left after installing the full set of SDK components.\n<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>\nIf you want to check how to solve the problem of insufficient capacity, please refer to [Troubleshooting](https://wiki.seeedstudio.com/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space).\n')),(0,a.kt)("p",null,"If you want SDK Manager to download all the files to a location other than the default path, go to the Download & Install Options located at the bottom of the screen, then select the path you wish to use."),(0,a.kt)("p",null,"And because the A205 carrier board requires a flash drive, please make sure to check the ",(0,a.kt)("strong",{parentName:"p"},"Download now. Install later.")," box first to download the system but not install it."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/60.png"})),(0,a.kt)("p",null,"Select Continue to proceed to the next step."),(0,a.kt)("p",null,"At this point the system will start downloading to the path of your choice, so we can take advantage of this time to get the driver ready."),(0,a.kt)("h3",{id:"step-5-choose-proper-drivers"},"Step 5. Choose Proper Drivers"),(0,a.kt)("p",null,"Now, we need to install the driver as well to make sure each component on the board is working. First we need to choose the driver files in Ubuntu host according to the carrier board and the module."),(0,a.kt)("table",{align:"center"},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",{align:"center"},"Carrier Board"),(0,a.kt)("th",{align:"center"},"Jetson Module"),(0,a.kt)("th",{align:"center"},"JetPack Version"),(0,a.kt)("th",{align:"center"},"L4T Version"),(0,a.kt)("th",{align:"center"},"Download Address")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"A205"),(0,a.kt)("td",{align:"center"},"Jetson Nano eMMC"),(0,a.kt)("td",{align:"center"},"4.6"),(0,a.kt)("td",{align:"center"},"32.6.1"),(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"https://files.seeedstudio.com/wiki/NVIDIA/A205_jp4.6_nano.zip"},"Download"))),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"A205"),(0,a.kt)("td",{align:"center"},"Jetson Xavier NX eMMC"),(0,a.kt)("td",{align:"center"},"4.6"),(0,a.kt)("td",{align:"center"},"32.6.1"),(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"https://files.seeedstudio.com/wiki/NVIDIA/A205_jp4.6_nx.zip"},"Download"))),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"A205"),(0,a.kt)("td",{align:"center"},"Jetson TX2NX eMMC"),(0,a.kt)("td",{align:"center"},"4.6"),(0,a.kt)("td",{align:"center"},"32.6.1"),(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"https://files.seeedstudio.com/wiki/NVIDIA/A205_jp4.6_tx2nx.zip"},"Download"))),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"A205"),(0,a.kt)("td",{align:"center"},"Jetson Xavier NX eMMC"),(0,a.kt)("td",{align:"center"},"5.0.2"),(0,a.kt)("td",{align:"center"},"35.1.0"),(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"https://files.seeedstudio.com/wiki/A205/205nx_jp5.0.2.zip"},"Download"))))),(0,a.kt)("p",null,"!!!Note\nThere are two JetPack 5.0.2 drivers for A205 included in the downloaded files. Both work fine, except that one of them supports ",(0,a.kt)("strong",{parentName:"p"},"IMX-219 camera")," and the other one supports ",(0,a.kt)("strong",{parentName:"p"},"IMX-477 camera"),"."),(0,a.kt)("h3",{id:"step-6-unzip-the-driver-in-the-system-folder"},"Step 6. Unzip the Driver in the system folder"),(0,a.kt)("p",null,"!!!Attention\nPlease note, make sure that the SDK Manager has completed the download of the system before proceeding with this step!"),(0,a.kt)("p",null,"In the Linux host PC, we need to replace some files in the official image with the downloaded driver package files. Since we are using SDK Manager here, the position(path) of the official image is:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"/home/<username>/nvidia/nvidia_sdk/JetPack_<version num>_Linux_<board name>_TARGETS/Linux_for_Tegra")),(0,a.kt)("h3",{id:"replace-the-files"},"Replace the Files"),(0,a.kt)("p",null,"!!!Attention\nBefore replacing the files, you can choose to make a backup of the ",(0,a.kt)("inlineCode",{parentName:"p"},".dtb")," file that will be replaced in the ",(0,a.kt)("inlineCode",{parentName:"p"},"kernel")," folder and save it temporarily in another path so that you can restore the official download at any time."),(0,a.kt)("p",null,"We can drag the file into the official one:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/A20X/12.png"})),(0,a.kt)("p",null,"Or we can execute the following command to replace the files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cp -a -f ${Drive package kernel path} ${Officially unpacked Linux_for_Tegra path}\n")),(0,a.kt)("p",null,"!!!Note\n",(0,a.kt)("inlineCode",{parentName:"p"},"${}")," is the use of environment variables.\n",(0,a.kt)("inlineCode",{parentName:"p"},"${Drive package kernel path}")," indicates the full path to the kernel image folder\n",(0,a.kt)("inlineCode",{parentName:"p"},"${Officially unpacked Linux_for_Tegra path}")," indicates the full path to the officially provided folder Linux_for_Tegra folder after the L4T zip package is extracted."),(0,a.kt)("h3",{id:"step-7-installing-system"},"Step 7. Installing system"),(0,a.kt)("p",null,"As we chose to install the system later earlier, we will need to redo ",(0,a.kt)("strong",{parentName:"p"},"steps 3 to 4")," earlier at this point, which will install the system on the A205 with the driver files already replaced."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/61.png"})),(0,a.kt)("p",null,"Before the installation begins, SDK Manager prompts you to enter your ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo")," password."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png"})),(0,a.kt)("p",null,"SDK Manager supports two options to put your Jetson target into Force Recovery Mode. We understand the operation of Jetson-202 Carrier Board into force recovery mode and have already been in force recovery mode in the previous steps. So we select ",(0,a.kt)("inlineCode",{parentName:"p"},"Manual setup: set the target to Force Recovery Mode via manual operations"),"."),(0,a.kt)("p",null,"You can also choose whether to pre-configure the OEM configuration."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Pre-Config"),": SDK Manager will flash the target with the predefined configuration, and there is no need to complete the System Configuration Wizard after flashing."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Runtime"),": No default configuration is set on the target, and you will need to manually complete the System Configuration Wizard after flashing.")),(0,a.kt)("p",null,"Here, we select the default ",(0,a.kt)("strong",{parentName:"p"},"Pre-Config"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png"})),(0,a.kt)("p",null,"After that, enter the name and password of the new Jetson system at the bottom, please keep them in mind."),(0,a.kt)("p",null,"When ready, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Flash")," to continue."),(0,a.kt)("p",null,"The display shows the progress of the download and installation of the software. Please wait patiently for the installation to complete."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png"})),(0,a.kt)("h3",{id:"optionalstep-7-install-the-sdk-components"},"(Optional)Step 7. Install the SDK components"),(0,a.kt)("p",null,"If you checked the installation of the component in the previous ",(0,a.kt)("strong",{parentName:"p"},"step 4"),", you will need to go through this step."),(0,a.kt)("p",null,"After a moment, you will be able to see a new window pop up in the NVIDIA SDK Manager, prompting you that you need to connect to your device via IP address. It means the system has been alreadly installed and the components installing will be proceeded."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png"})),(0,a.kt)("p",null,"In this case, we can ",(0,a.kt)("strong",{parentName:"p"},"pull out the jumper")," and restart the board. Then we need to connect the board to a monitor via HDMI, enter the password you entered in ",(0,a.kt)("strong",{parentName:"p"},"step 4"),", and log in to the main interface."),(0,a.kt)("p",null,"At this point you need to connect the board to the same LAN as the Linux host PC and determine the ",(0,a.kt)("strong",{parentName:"p"},"IP address")," of the Jetson by using the command ",(0,a.kt)("inlineCode",{parentName:"p"},"ifconfig"),"."),(0,a.kt)("p",null,"Go back to the Linux host PC and enter the IP address you just obtained. NVIDIA SDK Manager will try to connect to the Jetson device and proceed to complete the installation of the next SDK components."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png"})),(0,a.kt)("p",null,"When you see the following window appear, the installation has been done. But we still need to install the driver so we should remain the board in the ",(0,a.kt)("strong",{parentName:"p"},"Force Recovery Mode"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png"})),(0,a.kt)("p",null,"After the flash you can fully apply the board."),(0,a.kt)("h2",{id:"flashing-jetpack-os-via-command-line"},"Flashing JetPack OS via Command Line"),(0,a.kt)("p",null,"Thanks to the freedom to customize the BSP(NVIDIA Linux Driver Package), flashing JetPack OS via command line can be very easy for the Linux knowledge base users."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png"})),(0,a.kt)("h3",{id:"step-1-download-the-proper-nvidia-linux-driver-package"},"Step 1. Download the proper NVIDIA Linux Driver Package"),(0,a.kt)("p",null,"On the ",(0,a.kt)("strong",{parentName:"p"},"Linux host PC"),", we need to open a browser and go the ",(0,a.kt)("a",{href:"https://developer.nvidia.com/embedded/jetson-linux-archive",target:"_blank"},(0,a.kt)("span",null,"Jetson Linux Archive")),". First we should check if the version of Jetson Linux is supported."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk1.png"})),(0,a.kt)("p",null,'Once you find the proper version, click to go to the downloaded page. Find and click the "L4T Driver Package (BSP)" and "Sample Root Filesystem" to download the driver files. The names of the files are like ',(0,a.kt)("inlineCode",{parentName:"p"},"Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Jetson-210_Linux_Rxx.x.x_aarch64.tbz2"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer_flash_system/A205_Flash_Jetpack.png"})),(0,a.kt)("p",null,"As the example, we choose the NVIDIA L4T 32.7.1 version since it is included as part of JetPack4.6.1 and supports the Jetson Nano module. The names of the files:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tegra_Linux_Sample-Root-Filesystem_R32.7.2_aarch64.tbz2"),(0,a.kt)("li",{parentName:"ul"},"Jetson-210_Linux_R32.7.2_aarch64.tbz2")),(0,a.kt)("h3",{id:"step-2--unzip-package-files-and-assemble-the-rootfs-via-command-line"},"Step 2.  Unzip Package Files and Assemble the Rootfs via Command Line"),(0,a.kt)("p",null,"On the Linux host PC, we should find a folder and store the package files we download before. Then open a command line window(Terminal) at the folder and use the command line below to unzip the files and assemble the rootfs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"tar xf ${L4T_RELEASE_PACKAGE}\ncd Linux_for_Tegra/rootfs/\nsudo tar xpf ../../${SAMPLE_FS_PACKAGE}\n")),(0,a.kt)("p",null,"!!!Note\n",(0,a.kt)("inlineCode",{parentName:"p"},"${}")," is where you put the names of the files."),(0,a.kt)("p",null,"*As the example of ",(0,a.kt)("strong",{parentName:"p"},"NVIDIA L4T 32.7.1"),", the downloaded files are stored in ",(0,a.kt)("inlineCode",{parentName:"p"},"/Desktop/L4T_Drivers"),", so under the '/Desktop/L4T_Drivers' path we open the command line window(Terminal) and execute the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"tar xf Jetson-210_Linux_R32.7.1_aarch64.tbz2\ncd Linux_for_Tegra/rootfs/\nsudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2\n")),(0,a.kt)("h3",{id:"step-3-choose-proper-drivers"},"Step 3. Choose Proper Drivers"),(0,a.kt)("p",null,"After we unzip the package, we need to install the driver as well to make sure each component on the board is working. First we need to choose the driver files in Ubuntu host according to the carrier board and the module."),(0,a.kt)("table",{align:"center"},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",{align:"center"},"Carrier Board"),(0,a.kt)("th",{align:"center"},"Jetson Module"),(0,a.kt)("th",{align:"center"},"JetPack Version"),(0,a.kt)("th",{align:"center"},"L4T Version"),(0,a.kt)("th",{align:"center"},"Download Address")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"A205"),(0,a.kt)("td",{align:"center"},"Jetson Nano eMMC"),(0,a.kt)("td",{align:"center"},"4.6"),(0,a.kt)("td",{align:"center"},"32.6.1"),(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"https://files.seeedstudio.com/wiki/NVIDIA/A205_jp4.6_nano.zip"},"Download"))),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"A205"),(0,a.kt)("td",{align:"center"},"Jetson Xavier NX eMMC"),(0,a.kt)("td",{align:"center"},"4.6"),(0,a.kt)("td",{align:"center"},"32.6.1"),(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"https://files.seeedstudio.com/wiki/NVIDIA/A205_jp4.6_nx.zip"},"Download"))),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"A205"),(0,a.kt)("td",{align:"center"},"Jetson TX2NX eMMC"),(0,a.kt)("td",{align:"center"},"4.6"),(0,a.kt)("td",{align:"center"},"32.6.1"),(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"https://files.seeedstudio.com/wiki/NVIDIA/A205_jp4.6_tx2nx.zip"},"Download"))),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"A205"),(0,a.kt)("td",{align:"center"},"Jetson Xavier NX eMMC"),(0,a.kt)("td",{align:"center"},"5.0.2"),(0,a.kt)("td",{align:"center"},"35.1.0"),(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"https://files.seeedstudio.com/wiki/A205/205nx_jp5.0.2.zip"},"Download"))))),(0,a.kt)("p",null,"!!!Note\nThere are two JetPack 5.0.2 drivers for A205 included in the downloaded files. Both work fine, except that one of them supports ",(0,a.kt)("strong",{parentName:"p"},"IMX-219 camera")," and the other one supports ",(0,a.kt)("strong",{parentName:"p"},"IMX-477 camera"),"."),(0,a.kt)("h3",{id:"step-4-unzip-the-driver-in-the-file"},"Step 4. Unzip the Driver in the file"),(0,a.kt)("p",null,"We can drag the file into the official one:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/A20X/12.png"})),(0,a.kt)("p",null,"Or we can execute the following command to replace the files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cp -a -f ${Drive package kernel path} ${Officially unpacked Linux_for_Tegra path}\n")),(0,a.kt)("p",null,"!!!Note\n",(0,a.kt)("inlineCode",{parentName:"p"},"${}")," is the use of environment variables.\n",(0,a.kt)("inlineCode",{parentName:"p"},"${Drive package kernel path}")," indicates the full path to the kernel image folder\n",(0,a.kt)("inlineCode",{parentName:"p"},"${Officially unpacked Linux_for_Tegra path}")," indicates the full path to the officially provided folder Linux_for_Tegra folder after the L4T zip package is extracted."),(0,a.kt)("h3",{id:"step-5--flash-the-system-to-the-board"},"Step 5.  Flash the System to the Board"),(0,a.kt)("p",null,"In the example we use NVIDIA Jetson Nano module and we can directly flash the system into the board execute following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo ./apply_binaries.sh\nsudo ./flash.sh ${BOARD} mmcblk0p1\n")),(0,a.kt)("p",null,"!!!Note\n",(0,a.kt)("inlineCode",{parentName:"p"},"${BOARD}")," is the use of environment variables, the information of it should be the name of your module in the carrier board. You can check ",(0,a.kt)("a",{href:"https://files.seeedstudio.com/wiki/A20X/6.png",target:"_blank"},(0,a.kt)("span",null,"here"))," for the full knowledge."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png"})),(0,a.kt)("p",null,"!!!Tip\nFlashing L4T takes about 10 minutes, or more under a slow host computer."),(0,a.kt)("p",null,"After the flash you can fully apply the board."),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h3",{id:"troubleshooting-installation-with-nvidia-sdk-manager"},"Troubleshooting Installation with NVIDIA SDK Manager"),(0,a.kt)("p",null,"There are many causes of various installation errors. Below is a checklist of common installation issues, which may help you recover from a broken installation."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Review the summary table to identify which component failed."),(0,a.kt)("p",{parentName:"li"},'a. Expand the group with the "Error" status.'),(0,a.kt)("p",{parentName:"li"},"b. When you find the failed component, click the details icon to the right of Install Error to be redirected to the Terminal tab, which will display the exact error."))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/31.png"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"If the error is related to an environment issue, such as a broken apt repository or missing prerequisite, try to fix it manually, then click the Retry Failed Items button.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/32.png"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Retrying the installation is also available in two other ways:"),(0,a.kt)("p",{parentName:"li"},"a. From ",(0,a.kt)("strong",{parentName:"p"},"Flashing to eMMC with SDK Manager -- Step 3"),', use the Repair/Uninstall button to get to the Manage NVIDIA SDKs page. If needed, expand the SDK that has the "Broken" status, then click Repair for the relevant part (Host or Target).'))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/33.png"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"At ",(0,a.kt)("strong",{parentName:"p"},"Flashing to eMMC with SDK Manager -- Step 3"),", select the required SDK and run through the installation again.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Finally, try to uninstall and reinstall the relevant SDK."))),(0,a.kt)("h3",{id:"troubleshooting-installation-using-the-command-line"},"Troubleshooting installation using the command line"),(0,a.kt)("p",null,"The command line installation method is relatively simple, and is often prone to error in scenarios where force recovery mode is used."),(0,a.kt)("p",null,"If you encounter the error shown below in ",(0,a.kt)("strong",{parentName:"p"},"Flashing to eMMC with command-line -- Step 2"),", you probably did not succeed in getting the Board into force recovery mode. Please pay special attention, do not enter force recovery mode with the Carrier Board powered on, as this is not valid."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/34.jpg"})),(0,a.kt)("p",null,"If you can't get into the system in ",(0,a.kt)("strong",{parentName:"p"},"Flashing to eMMC with command-line -- Step 3")," and are stuck on the boot up display command line, you probably did not exit force recovery mode. Likewise, it is not valid for you to unplug the jumper to exit force recovery mode while the Carrier Board is powered up, this all needs to be done while you are powered down."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/35.jpg"})),(0,a.kt)("p",null,"!!!Note\nIf more storage space is needed, we can use SD card to expand the capacity, or burn the system on SD card, you can refer to our recommended solution ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Flash_System_on_SD_card/"},"Flash System on SD card")),(0,a.kt)("h2",{id:"tech-support--product-descussion"},"Tech Support & Product Descussion"),(0,a.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,a.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,a.kt)("div",{class:"button_tech_support_container"},(0,a.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}h.isMDXComponent=!0}}]);