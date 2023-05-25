"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[81830],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(a),c=r,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||i;return a?n.createElement(h,l(l({ref:t},d),{},{components:a})):n.createElement(h,l({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},78361:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={description:"8-Channel 12-Bit ADC for Raspberry Pi (STM32F030)",title:"8-Channel 12-Bit ADC for Raspberry Pi (STM32F030)",keywords:["Pi_HAT"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030",last_update:{date:"1/11/2023",author:"jianjing Huang"}},l=void 0,o={unversionedId:"Top_Brand/Raspberry_Pi/Pi_HAT/eight-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030",id:"Top_Brand/Raspberry_Pi/Pi_HAT/eight-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030",title:"8-Channel 12-Bit ADC for Raspberry Pi (STM32F030)",description:"8-Channel 12-Bit ADC for Raspberry Pi (STM32F030)",source:"@site/docs/Top_Brand/Raspberry_Pi/Pi_HAT/eight-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030.md",sourceDirName:"Top_Brand/Raspberry_Pi/Pi_HAT",slug:"/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030",permalink:"/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Raspberry_Pi/Pi_HAT/eight-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"8-Channel 12-Bit ADC for Raspberry Pi (STM32F030)",title:"8-Channel 12-Bit ADC for Raspberry Pi (STM32F030)",keywords:["Pi_HAT"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030",last_update:{date:"1/11/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"4-Channel 16-Bit ADC for Raspberry Pi (ADS1115)",permalink:"/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115"},next:{title:"RS-485 Shield for Raspberry Pi",permalink:"/RS-485_Shield_for_Raspberry_Pi"}},p={},s=[{value:"Feature",id:"feature",level:2},{value:"Specification",id:"specification",level:2},{value:"Typical applications",id:"typical-applications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Pin Out",id:"pin-out",level:3},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"Example",id:"example",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support &amp; Product Descussion",id:"tech-support--product-descussion",level:2}],d={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/main.jpg",alt:null})),(0,r.kt)("p",null,"ADC is a common accessory for Raspberry Pi. Nowadays many cheap MCUs has built-in ADC, so we make this 8-channel ADC based on STM32F030, which is a cost-effective, low-power ARM Cortex M0 MCU. We breakout 8 channels ADC from the MCU, and integrated 4 analog Grove connector so that you can also use analog Grove modules with it."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/8-Channel-12-Bit-ADC-for-Raspberry-Pi(STM32F030).html",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,r.kt)("h2",{id:"feature"},"Feature"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CRC calculation unit"),(0,r.kt)("li",{parentName:"ul"},"5-channel Direct memory access(DMA) controller"),(0,r.kt)("li",{parentName:"ul"},"Calendar RTC with alarm and periodic wakeup from Stop/Standby"),(0,r.kt)("li",{parentName:"ul"},"Timers",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Advanced-control timer"),(0,r.kt)("li",{parentName:"ul"},"General-purpose timers & Basic timers"),(0,r.kt)("li",{parentName:"ul"},"Independent and system watchdog timers"),(0,r.kt)("li",{parentName:"ul"},"SysTick timer"))),(0,r.kt)("li",{parentName:"ul"},"Real-time clock (RTC)"),(0,r.kt)("li",{parentName:"ul"},"Serial wire debug (SWD)"),(0,r.kt)("li",{parentName:"ul"},"Support Raspberry Pi 3B/3B+/4")),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Item"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Operating Supply Voltage"),(0,r.kt)("td",{parentName:"tr",align:null},"3.3V")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ADC Resolution"),(0,r.kt)("td",{parentName:"tr",align:null},"12 bit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Clock Frequency"),(0,r.kt)("td",{parentName:"tr",align:null},"48 MHz")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Program Memory Size"),(0,r.kt)("td",{parentName:"tr",align:null},"16kB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data RAM Size"),(0,r.kt)("td",{parentName:"tr",align:null},"4 kB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data Bus Width"),(0,r.kt)("td",{parentName:"tr",align:null},"32 bit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Operating Temperature"),(0,r.kt)("td",{parentName:"tr",align:null},"-40\uff5e85\u2103")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Communication Interfaces"),(0,r.kt)("td",{parentName:"tr",align:null},"I2C")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"I2C address"),(0,r.kt)("td",{parentName:"tr",align:null},"0x04(default)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Size"),(0,r.kt)("td",{parentName:"tr",align:null},"L: 65mm W: 55mm H: 18mm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Weight"),(0,r.kt)("td",{parentName:"tr",align:null},"25.9g")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Package size"),(0,r.kt)("td",{parentName:"tr",align:null},"L: 140mm W: 75mm H: 25mm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Gross Weight"),(0,r.kt)("td",{parentName:"tr",align:null},"45g")))),(0,r.kt)("h2",{id:"typical-applications"},"Typical applications"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Temperature measurement"),(0,r.kt)("li",{parentName:"ul"},"Consumer goods")),(0,r.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,r.kt)("h3",{id:"pin-out"},"Pin Out"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Overview")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/280-pin.jpg",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"GPIO")),(0,r.kt)("p",null,"The same pin out as the Raspberry Pi."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/280-pin-5.jpg",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SWD")),(0,r.kt)("p",null,"We use SWD port to burn the firmware to this board. In addition, you can see pin 9/pin 10/pin 11 in this section. Those three pins do not used by any Grove port, you are free to use them without worrying about pin conflicts."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/280-pin-1.jpg",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Grove Analog Port")),(0,r.kt)("p",null,"As there is no build-in ADC in the Raspberry Pi, so the STM32-based ADC board allows the analog sensor to work with your Raspberry Pi."),(0,r.kt)("p",null,"There are 4 grove analog sockets on this board such this ADC board can directly work with grove modules by using ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pac-p-925.html"},"Grove - Universal 4 Pin Buckled 5cm Cable"),"."),(0,r.kt)("p",null,"The analog sensor inputs the analog voltage into the 12-bit ADC. After the ADC converts the analog data to digital data, it inputs the digital data to the Raspberry Pi through the I2C interface."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/280-pin-4.jpg",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Female pin header ports")),(0,r.kt)("p",null,"Same as Grove analog port but this part instead of using ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pac-p-925.html"},"Grove - Universal 4 Pin Buckled 5cm Cable")," you need to use ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Breadboard-Jumper-Wire-Pack-200mm-100m-p-1032.html"},"Breadboard Jumper Wire Pack"),"."),(0,r.kt)("p",null,"8 analog junction ports, A0 ~ A7."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/280-pin-3.jpg",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Screw terminal")),(0,r.kt)("p",null,"Same as above but with different connection method. This group of pin connectors include analog pin A0 ~ A7, Vcc and GND."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/280-pin-2.jpg",alt:null})),(0,r.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,r.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("h3",{id:"hardware"},"Hardware"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Materials required")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,r.kt)("th",{parentName:"tr",align:null},"8-Channel 12-Bit ADC for Raspberry Pi (STM32F030)(STM32F030)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"enter image description here"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/thumbnail.jpg"})))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get ONE Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/8-Channel-12-Bit-ADC-for-Raspberry-Pi(STM32F030).html"},"Get ONE Now"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1"),". Insert the 8-Channel 12-Bit ADC for Raspberry Pi (STM32F030) into Raspberry Pi."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2"),". Connect the Raspberry Pi to PC through USB cable.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/connection1.jpg",alt:null})),(0,r.kt)("h3",{id:"software"},"Software"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you are using ",(0,r.kt)("strong",{parentName:"p"},"Raspberry Pi with Raspberrypi OS >= Bullseye"),", you have to use this command line ",(0,r.kt)("strong",{parentName:"p"},"only with Python3"),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1"),". Download the source file by cloning the grove.py library.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/Seeed-Studio/grove.py\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2"),". Install the grove.py library")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd grove.py\n# Python2\nsudo pip install .\n# Python3\nsudo pip3 install .\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3"),". Excute below commands to run the code.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd grove.py/grove\npython3 adc_8chan_12bit.py \n\n")),(0,r.kt)("p",null,"Following is the adc_8chan_12bit.py code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\nimport time\nfrom grove.i2c import Bus\n\nADC_DEFAULT_IIC_ADDR = 0X04\n\nADC_CHAN_NUM = 8\n\nREG_RAW_DATA_START = 0X10\nREG_VOL_START = 0X20\nREG_RTO_START = 0X30\n\nREG_SET_ADDR = 0XC0\n\n\nclass Pi_hat_adc():\n    def __init__(self,bus_num=1,addr=ADC_DEFAULT_IIC_ADDR):\n        self.bus=Bus(bus_num)\n        self.addr=addr\n\n    \n    #get all raw adc data,THe max value is 4095,cause it is 12 Bit ADC\n    def get_all_adc_raw_data(self):\n        array = []\n        for i in range(ADC_CHAN_NUM):  \n            data=self.bus.read_i2c_block_data(self.addr,REG_RAW_DATA_START+i,2)\n            val=data[1]<<8|data[0]\n            array.append(val)\n        return array\n    \n    def get_nchan_adc_raw_data(self,n):\n        data=self.bus.read_i2c_block_data(self.addr,REG_RAW_DATA_START+n,2)\n        val =data[1]<<8|data[0]\n        return val\n    #get all data with unit mv.\n    def get_all_vol_milli_data(self):\n        array = []\n        for i in range(ADC_CHAN_NUM):  \n            data=self.bus.read_i2c_block_data(self.addr,REG_VOL_START+i,2)\n            val=data[1]<<8|data[0]\n            array.append(val)\n        return array\n    \n    def get_nchan_vol_milli_data(self,n):\n        data=self.bus.read_i2c_block_data(self.addr,REG_VOL_START+n,2)\n        val =data[1]<<8|data[0]\n        return val\n\n    #get all data ratio,unit is 0.1%\n    def get_all_ratio_0_1_data(self):\n        array = []\n        for i in range(ADC_CHAN_NUM):  \n            data=self.bus.read_i2c_block_data(self.addr,REG_RTO_START+i,2)\n            val=data[1]<<8|data[0]\n            array.append(val)\n        return array\n    \n    def get_nchan_ratio_0_1_data(self,n):\n        data=self.bus.read_i2c_block_data(self.addr,REG_RTO_START+n,2)\n        val =data[1]<<8|data[0]\n        return val\n\n\n\nADC = Pi_hat_adc()\ndef main():\n    raw_data=ADC.get_all_adc_raw_data()\n    vol_data=ADC.get_all_vol_milli_data()\n    ratio_data=ADC.get_all_ratio_0_1_data()\n    print("raw data for each channel:(1-8chan)(12 bit-max=4096):")\n    print(raw_data)\n    print("voltage for each channel:(unit:mv,max=3300mv):")\n    print(vol_data)\n    print ("ratio for each channel(unit 0.1%,max=100.0%):")\n    print(ratio_data)\n\n    print(" ")\n    print("NOTICE!!!:")\n    print("The default setting of ADC PIN is floating_input.")\n    print(" ")\n\nif __name__ == \'__main__\':\n    main()\n\n\n')),(0,r.kt)("admonition",{title:"success",type:"tip"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"If everything goes well, you will be able to see the following result\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\npi@raspberrypi:~/grove.py/grove $ python3 adc_8chan_12bit.py \nraw data for each channel:(1-8chan)(12 bit-max=4096):\n[2177, 2098, 2064, 2038, 2127, 2066, 2172, 2145]\nvoltage for each channel:(unit:mv,max=3300mv):\n[1599, 1741, 1668, 1658, 1644, 1787, 1694, 1677]\nratio for each channel(unit 0.1%,max=100.0%):\n[521, 544, 514, 504, 500, 559, 524, 505]\n \nNOTICE!!!:\nThe default setting of ADC PIN is floating_input.\n \n\n\n")),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you are using ",(0,r.kt)("strong",{parentName:"p"},"Raspberry Pi with Raspberrypi OS >= Bullseye"),", you have to use this command line ",(0,r.kt)("strong",{parentName:"p"},"only with Python3"),".")),(0,r.kt)("p",null,"We will take the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove-Sound_Sensor/"},"Grove - Sound Sensor")," as an example to introduce you how to use this board."),(0,r.kt)("p",null,"Hardware connection"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1"),". Plug the 8-Channel 12-Bit ADC for Raspberry Pi (STM32F030) into Raspberry Pi."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2"),". Connect the Grove - Sound Sensor to A0 port of the ADC module."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3"),". Connect the Raspberry Pi to PC through USB cable.")),(0,r.kt)("p",null,"Hardware connection diagram"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/img/connection2.jpg",alt:null})),(0,r.kt)("p",null,"Tap the following command ++python grove_sound_sensor.py 0++ in the command line interface."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C++"},'\npi@raspberrypi:~/grove.py/grove $ python3 grove_sound_sensor.py 0\nDetecting sound...\nSound value: 433\nSound value: 342\nSound value: 443\nSound value: 300\nSound value: 632\nSound value: 258\nSound value: 591\nSound value: 267\nSound value: 871\n^CTraceback (most recent call last):\n  File "grove_sound_sensor.py", line 67, in <module>\n    main()\n  File "grove_sound_sensor.py", line 64, in main\n    time.sleep(.3)\nKeyboardInterrupt\n\n')),(0,r.kt)("p",null,"You can quit this program by simply press ",(0,r.kt)("inlineCode",{parentName:"p"},"ctrl"),"+",(0,r.kt)("inlineCode",{parentName:"p"},"c"),"."),(0,r.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/res/8-Channel%2012-Bit%20ADC%20for%20Raspberry%20Pi%20(STM32F030).zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.kt)("br",null),(0,r.kt)("admonition",{title:"Product Change Note:",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Because ST32 series chips are out of stock globally, prices have increased several times and there is no clear delivery date. We have no choice but to switch to the MM32 chip. The specific replacement models are as follows: STM32F030F4P6TR is replaced by MM32F031F6P6. After the chip is replaced, the product functions, features, usage methods and codes remain unchanged. It should be noted that the firmware version has changed, and the factory firmware has been adjusted according to different chips. If you need to re-burn the firmware, please download the firmware corresponding to the chip.")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/res/8-Channel%2012-Bit%20ADC%20for%20Raspberry%20Pi%20(STM32F030).zip"},"8-Channel 12-Bit ADC for Raspberry Pi (STM32F030) (STM32F030) Eagle Files"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/res/MM32F031F6P6_firmware.zip"},"MM32F031F6P6-Firmware"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/grove.py"},"8-Channel 12-Bit ADC for Raspberry Pi (STM32F030) (STM32F030) Software Library"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/res/STM32.pdf"},"Datasheet STM32F030"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030/res/MM32F031F6P6_Datasheet.pdf"},"MM32F031F6P6_Datasheet.pdf")))),(0,r.kt)("h2",{id:"tech-support--product-descussion"},"Tech Support & Product Descussion"),(0,r.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}u.isMDXComponent=!0}}]);