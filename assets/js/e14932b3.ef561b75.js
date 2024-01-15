"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[19531],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=l(n),u=r,f=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return n?o.createElement(f,a(a({ref:t},d),{},{components:n})):o.createElement(f,a({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[c]="string"==typeof e?e:r,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const i={},a="Model Export",p={unversionedId:"Topics/TinyML/ModelAssistant/tutorials/export/overview",id:"Topics/TinyML/ModelAssistant/tutorials/export/overview",title:"Model Export",description:"SSCMA currently supports the following methods to convert and export models.",source:"@site/docs/Topics/TinyML/ModelAssistant/tutorials/export/overview.md",sourceDirName:"Topics/TinyML/ModelAssistant/tutorials/export",slug:"/Topics/TinyML/ModelAssistant/tutorials/export/overview",permalink:"/Topics/TinyML/ModelAssistant/tutorials/export/overview",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Topics/TinyML/ModelAssistant/tutorials/export/overview.md",tags:[],version:"current",lastUpdatedBy:"jianjingH",lastUpdatedAt:1705298380,formattedLastUpdatedAt:"Jan 15, 2024",frontMatter:{},sidebar:"ProductSidebar",previous:{title:"Keypoint Detection - PFLD",permalink:"/Topics/TinyML/ModelAssistant/tutorials/training/pfld"},next:{title:"PyTorch to ONNX",permalink:"/Topics/TinyML/ModelAssistant/tutorials/export/pytorch_2_onnx"}},s={},l=[{value:"Parameter Descriptions",id:"parameter-descriptions",level:2}],d={toc:l},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"model-export"},"Model Export"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA")," currently supports the following methods to convert and export models.\nYou can refer to the corresponding tutorials to complete the model export, and\nthen put the exported model into deployment."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"By default, both ONNX and TFLite models are exported. If you only need to\nexport one of them, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--targets")," parameter to specify the\nexported model type, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"--targets onnx")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--targets tflite"),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../pytorch_2_onnx"},"PyTorch to ONNX"),": Converts PyTorch model and ",(0,r.kt)("inlineCode",{parentName:"p"},".pth"),"\nweights to ONNX model ",(0,r.kt)("inlineCode",{parentName:"p"},".onnx"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"../pytorch_2_tflite"},"PyTorch to TFLite"),": Converts PyTorch model and ",(0,r.kt)("inlineCode",{parentName:"p"},".pth"),"\nweights to TFLite model ",(0,r.kt)("inlineCode",{parentName:"p"},".tflite")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Before you can start exporting models, you need to complete the\n",(0,r.kt)("a",{parentName:"p",href:"../../training/overview"},"Training")," section and obtain model weights ",(0,r.kt)("inlineCode",{parentName:"p"},".pth")," file\nbefore start exporting.")),(0,r.kt)("h2",{id:"parameter-descriptions"},"Parameter Descriptions"),(0,r.kt)("p",null,"For more parameters for model exporting, you can refer the code below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"python3 tools/export.py --help\n\n# Convert and export PyTorch model to TFLite or ONNX models\n\n# positional arguments:\n#   config                the model config file path\n#   checkpoint            the PyTorch checkpoint file path\n\n# optional arguments:\n#   -h, --help            show this help message and exit\n#   --targets TARGETS [TARGETS ...]\n#                         the target type of model(s) to export e.g. tflite onnx\n#   --precisions PRECISIONS [PRECISIONS ...]\n#                         the precisions exported model, e.g. 'int8', 'uint8', 'int16', 'float16' and 'float32'\n#   --work_dir WORK_DIR, --work-dir WORK_DIR\n#                         the directory to save logs and models\n#   --output_stem OUTPUT_STEM, --output-stem OUTPUT_STEM\n#                         the stem of output file name (with path)\n#   --device DEVICE       the device used for convert & export\n#   --input_shape INPUT_SHAPE [INPUT_SHAPE ...], --input-shape INPUT_SHAPE [INPUT_SHAPE ...]\n#                         the shape of input data, e.g. 1 3 224 224\n#   --input_type {audio,image,sensor}, --input-type {audio,image,sensor}\n#                         the type of input data\n#   --cfg_options CFG_OPTIONS [CFG_OPTIONS ...], --cfg-options CFG_OPTIONS [CFG_OPTIONS ...]\n#                         override some settings in the used config, the key-value pair in 'xxx=yyy' format will be merged into config file\n#   --simplify SIMPLIFY   the level of graph simplification, 0 means disable, max: 5\n#   --opset_version OPSET_VERSION, --opset-version OPSET_VERSION\n#                         ONNX: operator set version of exported model\n#   --dynamic_export, --dynamic-export\n#                         ONNX: export with a dynamic input shape\n#   --algorithm {l2,kl}   TFLite: conversion algorithm\n#   --backend {qnnpack,fbgemm}\n#                         TFLite: converter backend\n#   --calibration_epochs CALIBRATION_EPOCHS, --calibration-epochs CALIBRATION_EPOCHS\n#                         TFLite: max epoches for quantization calibration\n#   --mean MEAN [MEAN ...]\n#                         TFLite: mean for model input (quantization), range: [0, 1], applied to all channels, using the average if multiple values are provided\n#   --mean_and_std MEAN_AND_STD [MEAN_AND_STD ...], --mean-and-std MEAN_AND_STD [MEAN_AND_STD ...]\n#                         TFLite: mean and std for model input(s), default: [((0.0,), (1.0,))], calculated on normalized input(s), applied to all channel(s), using the average if multiple values are provided\n")))}m.isMDXComponent=!0}}]);