"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[52303],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>f});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},s=Object.keys(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=n.createContext({}),d=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(l.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,s=t.originalType,l=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=d(a),u=o,f=c["".concat(l,".").concat(u)]||c[u]||m[u]||s;return a?n.createElement(f,r(r({ref:e},p),{},{components:a})):n.createElement(f,r({ref:e},p))}));function f(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var s=a.length,r=new Array(s);r[0]=u;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[c]="string"==typeof t?t:o,r[1]=i;for(var d=2;d<s;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},97639:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=a(87462),o=(a(67294),a(3905));const s={},r="Datasets",i={unversionedId:"Topics/TinyML/ModelAssistant/tutorials/datasets",id:"Topics/TinyML/ModelAssistant/tutorials/datasets",title:"Datasets",description:"SSCMA supports a variety of datasets. You can browse and download different datasets on the Internet, or annotate and create your own datasets.",source:"@site/docs/Topics/TinyML/ModelAssistant/tutorials/datasets.md",sourceDirName:"Topics/TinyML/ModelAssistant/tutorials",slug:"/Topics/TinyML/ModelAssistant/tutorials/datasets",permalink:"/Topics/TinyML/ModelAssistant/tutorials/datasets",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Topics/TinyML/ModelAssistant/tutorials/datasets.md",tags:[],version:"current",lastUpdatedBy:"jianjingH",lastUpdatedAt:1705298380,formattedLastUpdatedAt:"Jan 15, 2024",frontMatter:{},sidebar:"ProductSidebar",previous:{title:"Config",permalink:"/Topics/TinyML/ModelAssistant/tutorials/config"},next:{title:"Model Training",permalink:"/Topics/TinyML/ModelAssistant/tutorials/training/overview"}},l={},d=[{value:"Internet Datasets",id:"internet-datasets",level:2},{value:"SSCMA",id:"sscma",level:3},{value:"Roboflow",id:"roboflow",level:3},{value:"Kaggle",id:"kaggle",level:3},{value:"Custom Datasets",id:"custom-datasets",level:2},{value:"Datasets Annotation",id:"datasets-annotation",level:2}],p={toc:d},c="wrapper";function m(t){let{components:e,...a}=t;return(0,o.kt)(c,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"datasets"},"Datasets"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA")," supports a variety of datasets. You can browse and download different datasets on the Internet, or annotate and create your own datasets."),(0,o.kt)("h2",{id:"internet-datasets"},"Internet Datasets"),(0,o.kt)("h3",{id:"sscma"},(0,o.kt)("a",{parentName:"h3",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA")," currently provides the following official datasets for training and testing of corresponding models."),(0,o.kt)("p",null,"Please make sure you are in the ",(0,o.kt)("strong",{parentName:"p"},"Root Directory of ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA"))," before running the command to download a specific datasets. The command will automatically download the datasets and save them in a folder named ",(0,o.kt)("inlineCode",{parentName:"p"},"datasets")," in the current directory, and finally unpacking them."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/sscma/datasets/meter.zip"},"Download Custom Meter Datasets"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"wget https://files.seeedstudio.com/sscma/datasets/meter.zip -P datasets && unzip datasets/meter.zip -d datasets\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/sscma/datasets/coco_mask.zip"},"Download COCO_MASK Datasets"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"wget https://files.seeedstudio.com/sscma/datasets/coco_mask.zip -P datasets && unzip datasets/coco_mask.zip -d datasets\n")))),(0,o.kt)("h3",{id:"roboflow"},"Roboflow"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://public.roboflow.com/"},"Roboflow")," is a free hosting platform for public computer vision datasets, supporting formats including CreateML JSON, COCO JSON, Pascal VOC XML, YOLO, and Tensorflow TFRecords, as well as additional reduced and enhanced versions of the corresponding datasets have been added."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"We highly recommend looking for datasets on Roboflow, and you can download hundreds of different datasets from Roboflow for free to meet your specific needs by simply signing up for an account.")),(0,o.kt)("p",null,"you can find some datasets for ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA")," on Roboflow below:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Dataset"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://universe.roboflow.com/seeed-studio-dbk14/digital-meter-water/dataset/1"},"Digital Meter Water")),(0,o.kt)("td",{parentName:"tr",align:null},"Digital Meter Water Dataset")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://universe.roboflow.com/seeed-studio-dbk14/digital-meter-seg7/dataset/1"},"Digital Meter Seg7")),(0,o.kt)("td",{parentName:"tr",align:null},"Digital Meter Seg7 Dataset")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://universe.roboflow.com/seeed-studio-ovcjn/digit-seg7/1"},"Digit Seg7 Classification")),(0,o.kt)("td",{parentName:"tr",align:null},"Digit Seg7 Classification Dataset")))),(0,o.kt)("h3",{id:"kaggle"},"Kaggle"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.kaggle.com/"},"Kaggle")," is a data modeling and data analysis competition platform. Businesses and researchers can publish data on it, and statisticians and data mining experts can compete to produce the best models. Kaggle also offers thousands of datasets, and you can visit ",(0,o.kt)("a",{parentName:"p",href:"https://www.kaggle.com/datasets"},"Kaggle datasets")," to pick the right one for your needs."),(0,o.kt)("h2",{id:"custom-datasets"},"Custom Datasets"),(0,o.kt)("p",null,"Creating a custom dataset usually involves the following steps."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Collect Data:")," Collect data related to the problem domain. This data can be in text, image, audio or video formats.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Organize Data:")," The collected data is cleaned, ",(0,o.kt)("a",{parentName:"p",href:"#dataset-annotation"},"annotated"),", and de-duplicated to ensure accuracy and consistency. This step is crucial to ensure the accuracy of the trained model.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Divide Dataset:")," The organized dataset is divided into training set, validation set and test set. Usually, a ratio of 70%, 15%, and 15% is used to divide the dataset.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Convert Data Format:")," Convert the organized data set into a format that can be read by the model, such as text format, image format, etc.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Load Dataset:")," Load the converted dataset into the model for training and testing. When loading the dataset, it is important to use the appropriate data loader and batch size.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Data Enhancement (optional, recommended to be done by ",(0,o.kt)("a",{parentName:"strong",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA"),"):")," Perform data enhancement on the dataset, such as rotate, flip, crop, etc., to increase the diversity and number of datasets."))),(0,o.kt)("h2",{id:"datasets-annotation"},"Datasets Annotation"),(0,o.kt)("p",null,"Labeling a dataset is the process of classifying or labeling samples in a dataset, which usually requires manual intervention."),(0,o.kt)("p",null,"The process of labeling a dataset is very critical and determines the quality of the trained model. Here are some common ways and tools to label datasets."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Manual Annotation:")," Annotating the dataset by hand, for each sample, ensures the accuracy of the annotation, but is slower.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Semi-automatic Annotation:")," Apply the results of manual annotation to other datasets to reduce annotation time, but the accuracy of annotation may be reduced.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Automatic Annotation:")," Automatic annotation of data using some algorithmic models, such as keyword extraction, text classification, etc. Although it can improve the efficiency of annotation, the accuracy of annotation may also be affected."))),(0,o.kt)("p",null,"Commonly used data labeling tools:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/heartexlabs/labelImg"},"LabelImg"),": A tool for image labeling, supporting various labeling formats, such as PASCAL VOC, YOLO, etc.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://labelbox.com/"},"Labelbox"),": An online labeling tool that supports image, text, video and other formats with various labeling templates and custom labeling templates.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/doccano/doccano"},"Doccano"),": An open source annotation tool for text classification and sequence annotation, supports a variety of annotation formats, such as NER, POS, etc.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/openannotation/annotator"},"Annotator"),": A lightweight online annotation tool that supports image, text, audio and other formats.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://gitlab.com/vgg/via"},"VGG Image Annotator (VIA)"),": An open source tool for image annotation, supporting a variety of annotation formats, such as PASCAL VOC, YOLO, etc.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/jsbroks/coco-annotator"},"COCO Annotator"),": A web-based image and video annotation tool for target detection, segmentation, key point annotation and other tasks."))),(0,o.kt)("p",null,"The above are some common data annotation tools, different tools are suitable for different dataset types and annotation needs, you can choose according to the actual needs."))}m.isMDXComponent=!0}}]);