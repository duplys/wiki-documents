"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7789],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(67294),r=n(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>S});var a=n(87462),r=n(67294),o=n(86010),i=n(12466),l=n(16550),s=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:n,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var b=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(p(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function S(e){const t=(0,b.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},87256:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),o=n(74866),i=n(85162);const l={},s="Installation",u={unversionedId:"Topics/TinyML/ModelAssistant/introduction/installation",id:"Topics/TinyML/ModelAssistant/introduction/installation",title:"Installation",description:"SSCMA runtime environment relies on PyTorch and various third-party libraries from OpenMMLab. You can find the SSCMA code on GitHub. To get started, make sure you have PyTorch installed locally by following the instructions here, and then obtain the necessary OpenMMLab libraries.",source:"@site/docs/Topics/TinyML/ModelAssistant/introduction/installation.md",sourceDirName:"Topics/TinyML/ModelAssistant/introduction",slug:"/Topics/TinyML/ModelAssistant/introduction/installation",permalink:"/Topics/TinyML/ModelAssistant/introduction/installation",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Topics/TinyML/ModelAssistant/introduction/installation.md",tags:[],version:"current",lastUpdatedBy:"jianjingH",lastUpdatedAt:1704865961,formattedLastUpdatedAt:"Jan 10, 2024",frontMatter:{},sidebar:"ProductSidebar",previous:{title:"Quick Start",permalink:"/Topics/TinyML/ModelAssistant/introduction/quick_start"},next:{title:"Config",permalink:"/Topics/TinyML/ModelAssistant/tutorials/config"}},c={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 0 - Clone the Git Repository",id:"step-0---clone-the-git-repository",level:3},{value:"Step 1 - Create Virtual Environment",id:"step-1---create-virtual-environment",level:3},{value:"Step 2 - Install PyTorch",id:"step-2---install-pytorch",level:3},{value:"Step 3 - Install Essential Dependencies",id:"step-3---install-essential-dependencies",level:3},{value:"Step 4 - Install Extra Dependencies (Optional)",id:"step-4---install-extra-dependencies-optional",level:3},{value:"Other Method",id:"other-method",level:2},{value:"Reminders",id:"reminders",level:2},{value:"FAQs",id:"faqs",level:2}],d={toc:p},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA")," runtime environment relies on PyTorch and various third-party libraries from OpenMMLab. You can find the SSCMA code on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"GitHub"),". To get started, make sure you have PyTorch installed locally by following the instructions ",(0,r.kt)("a",{parentName:"p",href:"https://pytorch.org/get-started/locally/"},"here"),", and then obtain the necessary OpenMMLab libraries."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/open-mmlab/mmcv"},"MMCV"),": OpenMMLab Computer Vision Foundation Library."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/open-mmlab/mmclassification"},"MMClassification"),": OpenMMLab image classification toolkit and benchmarking. In addition to classification tasks, it is also used to provide a variety of backbone networks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/open-mmlab/mmdetection"},"MMDetection"),": OpenMMLab detection toolbox and benchmark."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/open-mmlab/mmpose"},"MMPose"),": OpenMMLab inspection toolbox and benchmark."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/open-mmlab/mim"},"MIM"),": MIM provides a unified interface for starting and installing the OpenMMLab project and its extensions, and managing the OpenMMLab model library.")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA")," works on Linux, Windows, and macOS. ",(0,r.kt)("strong",{parentName:"p"},"We strongly recommend you to use ",(0,r.kt)("a",{parentName:"strong",href:"https://docs.conda.io/en/latest/miniconda.html"},"Miniconda")," to manage python packages.")," Please follow the steps below to prepare the environment."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Miniconda is a free minimal installer for conda, you can download and install Miniconda3 from ",(0,r.kt)("a",{parentName:"p",href:"https://docs.conda.io/en/latest/miniconda.html"},"Miniconda Official Website"),".")),(0,r.kt)("h3",{id:"step-0---clone-the-git-repository"},"Step 0 - Clone the Git Repository"),(0,r.kt)("p",null,"First, you need to clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA Source Code")," locally. We use Git to manage and host it on GitHub, and provide two different ways to clone it below (choose either one). If you don't have Git installed, you can configure Git on your computer by referring to the ",(0,r.kt)("a",{parentName:"p",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"Git Documentation"),"."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"HTTPS",label:"HTTPS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/Seeed-Studio/ModelAssistant.git --depth 1 && \\\ncd SSCMA\n"))),(0,r.kt)(i.Z,{value:"SSH",label:"SSH",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:Seeed-Studio/ModelAssistant.git --depth 1 && \\\ncd SSCMA\n")))),(0,r.kt)("h3",{id:"step-1---create-virtual-environment"},"Step 1 - Create Virtual Environment"),(0,r.kt)("p",null,"Assuming you have conda installed, then ",(0,r.kt)("strong",{parentName:"p"},"create")," and ",(0,r.kt)("strong",{parentName:"p"},"activate")," a conda virtual environment."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"conda create --name sscma python=3.8 -y && \\\nconda activate sscma\n")),(0,r.kt)("h3",{id:"step-2---install-pytorch"},"Step 2 - Install PyTorch"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA")," relies on PyTorch. Before running the following code, please confirm again that you have ",(0,r.kt)("strong",{parentName:"p"},"activated")," the virtual environment you just created."),(0,r.kt)("p",null,"For devices with GPUs (CUDA), we recommend installing dependencies that support GPU acceleration. We have listed the configuration options you can choose from in 2 different cases, please choose manually according to your hardware environment."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CPU-Only platform:")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"conda",label:"conda",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"conda install pytorch torchvision torchaudio cpuonly -c pytorch\n"))),(0,r.kt)(i.Z,{value:"pip",label:"pip",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pip3 install torch torchvision torchaudio\n")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GPUs (CUDA) platform:")),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"conda",label:"conda",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"conda install pytorch torchvision torchaudio pytorch-cuda=11.7 cudatoolkit=11.7 -c pytorch -c nvidia\n"))),(0,r.kt)(i.Z,{value:"pip",label:"pip",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pip3 install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu117\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can find CUDA installers on ",(0,r.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/cuda-toolkit-archive"},"NVIDIA CUDA Toolkit Archive Website")," if your platform have not CUDA installed for NVIDIA GPUs, we recommend to use CUDA 11.7 or above on your host environment. For installing PyTorch on other platforms, please read more on ",(0,r.kt)("a",{parentName:"p",href:"https://pytorch.org/get-started/locally/"},"PyTorch Official Website"),".")),(0,r.kt)("h3",{id:"step-3---install-essential-dependencies"},"Step 3 - Install Essential Dependencies"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Please confirm that you have activated the virtual environment and in the main working directory of ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA")," source code"),", and then run the following code to complete the configuration of the basic dependencies."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA")," deps")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pip3 install -r requirements/base.txt && \\\nmim install -r requirements/mmlab.txt && \\\nmim install -e .\n")),(0,r.kt)("h3",{id:"step-4---install-extra-dependencies-optional"},"Step 4 - Install Extra Dependencies (Optional)"),(0,r.kt)("p",null,"If you need to perform model transformation or inference testing, you also need to install the following additional dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pip3 install -r requirements/inference.txt -r requirements/export.txt\n")),(0,r.kt)("p",null,"If you wish to make changes to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA")," and submit them to us, we recommend that you additionally run the following command to facilitate checking your code at commit time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pip3 install -r requirements/tests.txt\npre-commit install\n")),(0,r.kt)("h2",{id:"other-method"},"Other Method"),(0,r.kt)("p",null,"The configuration of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA")," environment can be done automatically using a shell script on Linux (tested on Ubuntu 20.04~22.10), if you have Conda setup."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"bash scripts/setup_linux.sh\n")),(0,r.kt)("p",null,"Or you can do the configuration manually using Conda's configuration file."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"CPU",label:"CPU",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"conda env create -n sscma -f environment.yml && \\\nconda activate sscma && \\\npip3 install -r requirements/inference.txt -r requirements/export.txt -r requirements/tests.txt && \\\nmim install -r requirements/mmlab.txt && \\\nmim install -e .\n"))),(0,r.kt)(i.Z,{value:"GPU (CUDA)",label:"GPU (CUDA)",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"conda env create -n sscma -f environment_cuda.yml && \\\nconda activate sscma && \\\npip3 install -r requirements/inference.txt -r requirements/export.txt -r requirements/tests.txt && \\\nmim install -r requirements/mmlab.txt && \\\nmim install -e .\n")))),(0,r.kt)("h2",{id:"reminders"},"Reminders"),(0,r.kt)("p",null,"After completing the installation of Miniconda and configuring ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA")," with Conda, we created a Conda virtual environment named ",(0,r.kt)("inlineCode",{parentName:"p"},"sscma")," and installed the dependencies in the virtual environment. For subsequent ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA"),"-related configuration and development, make sure you are in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA")," virtual environment, which you can activate with the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"conda activate sscma\n")),(0,r.kt)("p",null,"If you want to reconfigure or remove the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA")," virtual environment, you can run the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"conda env remove -n sscma\n")),(0,r.kt)("h2",{id:"faqs"},"FAQs"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"I have slow connection speed while installing packages from anaconda's default channels."),(0,r.kt)("p",{parentName:"li"},"Please be patient and try some third-party mirrored channels, such as ",(0,r.kt)("a",{parentName:"p",href:"https://mirror.sjtu.edu.cn/docs/anaconda"},"SJTU mirror"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mirrors.tuna.tsinghua.edu.cn/help/anaconda"},"TUNA mirror")," and etc."))))}h.isMDXComponent=!0}}]);