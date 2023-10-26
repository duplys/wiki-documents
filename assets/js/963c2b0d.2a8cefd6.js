"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[23683],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(67294),r=n(86010);const a="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return o.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var o=n(87462),r=n(67294),a=n(86010),i=n(12466),l=n(16550),s=n(91980),u=n(67392),c=n(50012);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:r}}=e;return{value:t,label:n,attributes:o,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const o=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,a=d(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:a}))),[s,u]=h({queryString:n,groupId:o}),[p,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,c.Nk)(n);return[o,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:o}),k=(()=>{const e=s??p;return m({value:e,tabValues:a})?e:null})();(0,r.useLayoutEffect)((()=>{k&&l(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,a]),tabValues:a}}var k=n(72389);const b="tabList__CuJ",w="tabItem_LNqP";function g(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),o=u[n].value;o!==l&&(p(t),s(o))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,o.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,a.Z)("tabs__item",w,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:o}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,a.Z)("tabs-container",b)},r.createElement(g,(0,o.Z)({},e,t)),r.createElement(v,(0,o.Z)({},e,t)))}function N(e){const t=(0,k.Z)();return r.createElement(y,(0,o.Z)({key:String(t)},e))}},16893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var o=n(87462),r=(n(67294),n(3905)),a=n(74866),i=n(85162);const l={description:"Getting Started with Roboflow on NVIDIA Jetson Devices",title:"Getting Started with Roboflow",tags:["Data Label","AI model train","AI model deploy"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Roboflow-Jetson-Getting-Started",last_update:{date:"10/26/2023",author:"Lakshantha"}},s="Getting Started with Roboflow Inference on NVIDIA\xae Jetson Devices",u={unversionedId:"Edge/NVIDIA_Jetson/reComputer/Software/Roboflow-Jetson-Getting-Started",id:"Edge/NVIDIA_Jetson/reComputer/Software/Roboflow-Jetson-Getting-Started",title:"Getting Started with Roboflow",description:"Getting Started with Roboflow on NVIDIA Jetson Devices",source:"@site/docs/Edge/NVIDIA_Jetson/reComputer/Software/Roboflow-Jetson-Getting-Started.md",sourceDirName:"Edge/NVIDIA_Jetson/reComputer/Software",slug:"/Roboflow-Jetson-Getting-Started",permalink:"/Roboflow-Jetson-Getting-Started",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/NVIDIA_Jetson/reComputer/Software/Roboflow-Jetson-Getting-Started.md",tags:[{label:"Data Label",permalink:"/tags/data-label"},{label:"AI model train",permalink:"/tags/ai-model-train"},{label:"AI model deploy",permalink:"/tags/ai-model-deploy"}],version:"current",lastUpdatedBy:"Lakshantha",lastUpdatedAt:1698278400,formattedLastUpdatedAt:"Oct 26, 2023",frontMatter:{description:"Getting Started with Roboflow on NVIDIA Jetson Devices",title:"Getting Started with Roboflow",tags:["Data Label","AI model train","AI model deploy"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Roboflow-Jetson-Getting-Started",last_update:{date:"10/26/2023",author:"Lakshantha"}},sidebar:"ProductSidebar",previous:{title:"Getting Started with Scailable",permalink:"/Scailable-Jetson-Getting-Started"},next:{title:"reComputer J1010 | J101",permalink:"/reComputer_J1010_J101_Flash_Jetpack"}},c={},p=[{value:"Flash JetPack to Jetson",id:"flash-jetpack-to-jetson",level:2},{value:"Obtain Open-source Roboflow model",id:"obtain-open-source-roboflow-model",level:2},{value:"Obtain Roboflow API Key",id:"obtain-roboflow-api-key",level:2},{value:"Running Roboflow Inference Server",id:"running-roboflow-inference-server",level:2},{value:"Using pip Package",id:"using-pip-package",level:3},{value:"Using Docker Hub",id:"using-docker-hub",level:3},{value:"Server Setup - Jetson",id:"server-setup---jetson",level:4},{value:"Client Setup - Jetson/ PC",id:"client-setup---jetson-pc",level:4},{value:"Using Local Docker Build",id:"using-local-docker-build",level:3},{value:"Server Setup - Jetson",id:"server-setup---jetson-1",level:4},{value:"Client Setup - Jetson/ PC",id:"client-setup---jetson-pc-1",level:4},{value:"Enable TensorRT",id:"enable-tensorrt",level:4},{value:"Learn more",id:"learn-more",level:2},{value:"Tech Support &amp; Product Discussion",id:"tech-support--product-discussion",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started-with-roboflow-inference-on-nvidia-jetson-devices"},"Getting Started with Roboflow Inference on NVIDIA\xae Jetson Devices"),(0,r.kt)("p",null,"This wiki guide explains how to easily deploy AI models using ",(0,r.kt)("a",{parentName:"p",href:"https://roboflow.com"},"Roboflow")," inference server running on NVIDIA Jetson devices. Here we will use ",(0,r.kt)("a",{parentName:"p",href:"https://universe.roboflow.com"},"Roboflow Universe")," to select an already trained model, deploy the model to the Jetson device and perform inference on a live webcam stream!"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/roboflow/inference"},"Roboflow Inference")," is the easiest way to use and deploy computer vision models, providing an HTTP Roboflow API used for running inference. Roboflow inference supports:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Object detection"),(0,r.kt)("li",{parentName:"ul"},"Image Segmentation"),(0,r.kt)("li",{parentName:"ul"},"Image Classification")),(0,r.kt)("p",null,"and foundation models like CLIP and SAM."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Roboflow-inference/8.gif\n",style:{width:1e3,height:"auto"}})),"## Prerequisites",(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Ubuntu Host PC (native or VM using VMware Workstation Player)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/reComputer-J4012-p-5586.html"},"reComputer Jetson")," or any other NVIDIA Jetson device")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This wiki has been tested and verified on a ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/reComputer-J4012-p-5586.html"},"reComputer J4012")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/reComputer-Industrial-J4012-p-5684.html"},"reComputer Industrial J4012")," powered by NVIDIA Jetson orin NX 16GB module ")),(0,r.kt)("h2",{id:"flash-jetpack-to-jetson"},"Flash JetPack to Jetson"),(0,r.kt)("p",null,"Now you need to make sure that the Jetson device is flashed with a ",(0,r.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/jetpack"},"JetPack")," system. You can either use NVIDIA SDK Manager or command-line to flash JetPack to the device."),(0,r.kt)("p",null,"For Seeed Jetson-powered devices flashing guides, please refer to the below links:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack"},"reComputer J1010 | J101")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reComputer_J2021_J202_Flash_Jetpack"},"reComputer J2021 | J202")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack"},"reComputer J1020 | A206")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack"},"reComputer J4012 | J401")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reComputer_A203_Flash_System"},"A203 Carrier Board")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reComputer_A205_Flash_System"},"A205 Carrier Board")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Jetson_Xavier_AGX_H01_Driver_Installation"},"Jetson Xavier AGX H01 Kit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack"},"Jetson AGX Orin 32GB H01 Kit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reComputer_Industrial_Getting_Started/#flash-jetpack"},"reComputer Indsutrial")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reServer_Industrial_Getting_Started/#flash-jetpack"},"reServer Industrial"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Make sure to Flash JetPack version 5.1.1 because that is the version we have verified for this wiki ")),(0,r.kt)("h2",{id:"obtain-open-source-roboflow-model"},"Obtain Open-source Roboflow model"),(0,r.kt)("p",null,"Roboflow offers 50,000+ ready-to-use AI models for everyone to get started with computer vision deployment in the fastest way. You can explore them all at ",(0,r.kt)("a",{parentName:"p",href:"https://universe.roboflow.com"},"Roboflow Universe"),". Roboflow Universe also offers 200,000+ datasets where you can use these datasets to ",(0,r.kt)("a",{parentName:"p",href:"https://docs.roboflow.com/train/train"},"train a model")," on Roboflow cloud servers or else bring your own dataset, use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.roboflow.com/annotate/use-roboflow-annotate"},"Roboflow online image annotation tool")," and start training."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 1:")," We will use a ",(0,r.kt)("a",{parentName:"p",href:"https://universe.roboflow.com/mohamed-traore-2ekkp/people-detection-general/model/7"},"people detection model")," from Roboflow Universe as reference")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2:"),' Here the model name will follow the format "model_name/version". In this case, it is ',(0,r.kt)("strong",{parentName:"p"},"people-detection-general/7"),". We will use this model name later in this wiki when we start inferencing."))),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Roboflow-inference/1.png\n",style:{width:1e3,height:"auto"}})),(0,r.kt)("h2",{id:"obtain-roboflow-api-key"},"Obtain Roboflow API Key"),(0,r.kt)("p",null,"Now we need to obtain a Roboflow API key for the Roboflow inference server to work."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 1:")," ",(0,r.kt)("a",{parentName:"p",href:"https://app.roboflow.com"},"Sign up")," for a new Roboflow account by entering your credentials ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2:")," Sign in to the account, navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"Projects > Workspaces > <your_workspace_name> > Roboflow API"),", and click ",(0,r.kt)("strong",{parentName:"p"},"Copy"),' next to "Private API Key" section'))),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Roboflow-inference/2.jpg\n",style:{width:1e3,height:"auto"}})),(0,r.kt)("p",null,"Keep this private key because we will be needing it later."),(0,r.kt)("h2",{id:"running-roboflow-inference-server"},"Running Roboflow Inference Server"),(0,r.kt)("p",null,"You can get started with Roboflow inference on NVIDIA Jetson in 3 different ways."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Using pip package")," - Using pip package will be the fastest way to get started, however you will need to install SDK components (CUDA, cuDNN, TensorRT) along with JetPack. "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Using Docker hub")," - Using Docker hub will be a little slow because it will first pull a Docker image which is around 19GB. however you do not need to install SDK components because the Docker image will already have those."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Using local Docker build")," - Using local Docker build is an extension of Docker hub method where you can change the source code for the Docker image according to your desired application (such as enable TensorRT precision with INT8).")),(0,r.kt)("p",null,"Before moving on to running Roboflow inference server, you need to obtain an AI model to inference on, and a Roboflow API key. We will first go through that."),(0,r.kt)(a.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"pip Package",label:"pip Package",mdxType:"TabItem"},(0,r.kt)("h3",{id:"using-pip-package"},"Using pip Package"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1:")," If you only flash the Jetson device with Jetson L4T, you need to install SDK components first")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update\nsudo apt install nvidia-jetpack -y\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2:")," Execute the below commands on the terminal to install Roboflow inference server pip package")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update\nsudo apt install python3-pip -y\npip install inference-gpu\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3:")," Execute the below and replace with your Roboflow Private API Key that you obtained before")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"export ROBOFLOW_API_KEY=your_key_here\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4:")," Connect a webcam to the Jetson device and execute the following Python script to run an open-source people detection model on your webcam stream")),(0,r.kt)("details",null,(0,r.kt)("summary",null," webcam.py"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import cv2\nimport inference\nimport supervision as sv\n\nannotator = sv.BoxAnnotator()\n\ninference.Stream(\n    source="webcam", \n    model=" people-detection-general/7", \n\n    output_channel_order="BGR",\n    use_main_thread=True, \n    \n    on_prediction=lambda predictions, image: (\n        print(predictions), \n        \n        cv2.imshow(\n            "Prediction", \n            annotator.annotate(\n                scene=image, \n                detections=sv.Detections.from_roboflow(predictions)\n            )\n        ),\n        cv2.waitKey(1)\n    )\n)\n'))),(0,r.kt)("p",null,"Finally, you will see the result as follows"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Roboflow-inference/7.gif\n",style:{width:1e3,height:"auto"}})),(0,r.kt)("hr",null)),(0,r.kt)(i.Z,{value:"Docker Hub",label:"Docker Hub",mdxType:"TabItem"},(0,r.kt)("h3",{id:"using-docker-hub"},"Using Docker Hub"),(0,r.kt)("p",null,"To use this method, flashing the device with Jetson L4T is enough. This uses a client-server architecture where Roboflow inference server will run on a specific network port on the Jetson and you will be able to access this inference server using any PC on the same network or even use the Jetson itself as server and client both."),(0,r.kt)("h4",{id:"server-setup---jetson"},"Server Setup - Jetson"),(0,r.kt)("p",null,"Execute the following to download and run the Roboflow inference server Docker container"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo docker run --network=host --runtime=nvidia roboflow/roboflow-inference-server-jetson-5.1.1\n")),(0,r.kt)("p",null,"If you see the following output, the inference server has started successfully"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Roboflow-inference/3.png\n",style:{width:1e3,height:"auto"}})),(0,r.kt)("h4",{id:"client-setup---jetson-pc"},"Client Setup - Jetson/ PC"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1:")," Install the necessary packages")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update\nsudo apt install python3-pip -y\ngit clone https://github.com/roboflow/roboflow-api-snippets\ncd Python/webcam\npip install -r requirements.txt\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2:")," Create a roboflow_config.json file in the same directory including your Roboflow API key, model name. You can refer to the sample roboflow_config.sample.json file included inside this GitHub repo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 3:")," On the same device on a different terminal window or on another PC on the same as the Jetson, execute the following Python script to run an open-source people detection model on your webcam stream"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"python infer-simple.py\n")),(0,r.kt)("hr",null)),(0,r.kt)(i.Z,{value:"Local Docker Build",label:"Local Docker Build",mdxType:"TabItem"},(0,r.kt)("h3",{id:"using-local-docker-build"},"Using Local Docker Build"),(0,r.kt)("h4",{id:"server-setup---jetson-1"},"Server Setup - Jetson"),(0,r.kt)("p",null,"To use this method, flashing the device with Jetson L4T is enough. This uses a client-server architecture where Roboflow inference server will run on a specific network port on the Jetson and you will be able to access this inference server using any PC on the same network or even use the Jetson itself as server and client both."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1:")," Clone the Roboflow inference server repository")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/roboflow/inference\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2:"),' Enter the "inference" directory and start compiling your own Docker image')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd inference\nsudo docker build \\\n    -f docker/dockerfiles/Dockerfile.onnx.jetson.5.1.1 \\\n    -t roboflow/roboflow-inference-server-jetson-5.1.1:seeed1 .\n")),(0,r.kt)("p",null,'Here the text after "-t" is the name of the container we are building. You can give it any name.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3:")," Execute the below command to check whether the Docker image we compiled is listed")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo docker ps\n")),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Roboflow-inference/5.png\n",style:{width:1e3,height:"auto"}})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4:")," Start a Docker container based on the Docker image that you just built ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"docker run --privileged --net=host --runtime=nvidia roboflow/roboflow-inference-server-jetson-5.1.1:seeed1\n")),(0,r.kt)("p",null,"If you see the following output, the inference server has started successfully"),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Roboflow-inference/6.png\n",style:{width:1e3,height:"auto"}})),(0,r.kt)("h4",{id:"client-setup---jetson-pc-1"},"Client Setup - Jetson/ PC"),(0,r.kt)("p",null,"Execute the following Python script to run an open-source people detection model on your webcam stream"),(0,r.kt)("details",null,(0,r.kt)("summary",null," webcam.py"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import cv2\nimport base64\nimport requests\nimport time\n\n\nupload_url = (\"http://<ip_address_of_jetson>:9001/\"\n              \"people-detection-general/7\"\n              \"?api_key=xxxxxxxx\"\n              \"&stroke=5\")\nvideo = cv2.VideoCapture(0)\n\nwhile True:\n    start = time.time()\n\n    ret, img = video.read()\n    if ret:\n        # Resize (while maintaining the aspect ratio) to improve speed and save bandwidth\n        height, width, channels = img.shape\n        scale = 416 / max(height, width)\n        img = cv2.resize(img, (round(scale * width), round(scale * height)))\n\n        # Encode image to base64 string\n        retval, buffer = cv2.imencode('.jpg', img)\n        img_str = base64.b64encode(buffer)\n\n        # Get prediction from Roboflow Infer API\n        resp = requests.post(upload_url, data=img_str, headers={\n            \"Content-Type\": \"application/x-www-form-urlencoded\"\n        }, stream=True)\n        resp = resp.json()\n\n        for bbox in resp[\"predictions\"]:\n            img = cv2.rectangle(\n                img,\n                (int(bbox['x']-(bbox['width']/2)), int(bbox['y']-(bbox['height']/2))),\n                (int(bbox['x']+(bbox['width']/2)), int(bbox['y']+(bbox['height']/2))),\n                (0, 255, 0),\n                2)\n            cv2.putText(\n                img, f\"{bbox['class']}\",\n                (int(bbox['x']-(bbox['width']/2)), int(bbox['y']-(bbox['height']/2)-5)),\n                0, 0.9,\n                (0, 255, 0), thickness=2, lineType=cv2.LINE_AA\n            )\n        cv2.imshow('image', img)\n        print((1/(time.time()-start)), \" fps\")\n\n    if cv2.waitKey(1) == ord('q'):\n        break\nvideo.release()\ncv2.destroyAllWindows()\n"))),(0,r.kt)("p",null,"Note that the elements that need to be included in the ",(0,r.kt)("inlineCode",{parentName:"p"},"upload_url")," in the script are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"IP address of roboflow inference srever"),(0,r.kt)("li",{parentName:"ul"},"The model you want to run"),(0,r.kt)("li",{parentName:"ul"},"roboflow api key")),(0,r.kt)("p",null,"The model can be selected in the roboflow universe"),(0,r.kt)("h4",{id:"enable-tensorrt"},"Enable TensorRT"),(0,r.kt)("p",null,'By default, Roboflow inference server is using CUDA runtime. However, if you want to change to TensorRT runtime to increase the inference speed, you can add the following inside the file "inference/docker/dockerfiles\n/Dockerfile.onnx.jetson.5.1.1" and build the Docker image'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ENV ONNXRUNTIME_EXECUTION_PROVIDERS=TensorrtExecutionProvider\n")),(0,r.kt)("hr",null))),(0,r.kt)("h2",{id:"learn-more"},"Learn more"),(0,r.kt)("p",null,"Roboflow offers very detailed and comprehensive documentation. So it is highly recommended to check them ",(0,r.kt)("a",{parentName:"p",href:"https://docs.roboflow.com"},"here"),"."),(0,r.kt)("h2",{id:"tech-support--product-discussion"},"Tech Support & Product Discussion"),(0,r.kt)("p",null,"Thank you for choosing our products! We are here to provide you with different support to ensure that your experience with our products is as smooth as possible. We offer several communication channels to cater to different preferences and needs."),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://forum.seeedstudio.com/",class:"button_forum"}),(0,r.kt)("a",{href:"https://www.seeedstudio.com/contacts",class:"button_email"})),(0,r.kt)("div",{class:"button_tech_support_container"},(0,r.kt)("a",{href:"https://discord.gg/eWkprNDMU7",class:"button_discord"}),(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/wiki-documents/discussions/69",class:"button_discussion"})))}m.isMDXComponent=!0}}]);