"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[56307],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=o,m=p["".concat(l,".").concat(u)]||p[u]||f[u]||a;return n?i.createElement(m,r(r({ref:t},c),{},{components:n})):i.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<a;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},35285:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>f,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(87462),o=(n(67294),n(3905));const a={},r="Config",s={unversionedId:"Topics/TinyML/ModelAssistant/tutorials/config",id:"Topics/TinyML/ModelAssistant/tutorials/config",title:"Config",description:"SSCMA uses the configuration processing system provided by OpenMMLab - MMEngine with a modular and inheritable design that provides users a unified configuration access interface for various tests and validations of different neural networks.",source:"@site/docs/Topics/TinyML/ModelAssistant/tutorials/config.md",sourceDirName:"Topics/TinyML/ModelAssistant/tutorials",slug:"/Topics/TinyML/ModelAssistant/tutorials/config",permalink:"/Topics/TinyML/ModelAssistant/tutorials/config",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Topics/TinyML/ModelAssistant/tutorials/config.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1704185899,formattedLastUpdatedAt:"Jan 2, 2024",frontMatter:{},sidebar:"ProductSidebar",previous:{title:"Installation",permalink:"/Topics/TinyML/ModelAssistant/introduction/installation"},next:{title:"Datasets",permalink:"/Topics/TinyML/ModelAssistant/tutorials/datasets"}},l={},d=[{value:"Directory Structure",id:"directory-structure",level:2},{value:"Configuration Structure",id:"configuration-structure",level:2},{value:"Important Parameters",id:"important-parameters",level:3},{value:"Model Config",id:"model-config",level:3},{value:"Dataset and Evaluator Config",id:"dataset-and-evaluator-config",level:3},{value:"Optimizer Config",id:"optimizer-config",level:3},{value:"Config File Inheritance",id:"config-file-inheritance",level:3},{value:"Parameterized Configuration",id:"parameterized-configuration",level:2},{value:"FAQs",id:"faqs",level:2}],c={toc:d},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"config"},"Config"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA")," uses the configuration processing system provided by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-mmlab/mmengine"},"OpenMMLab - MMEngine")," with a modular and inheritable design that provides users a unified configuration access interface for various tests and validations of different neural networks."),(0,o.kt)("h2",{id:"directory-structure"},"Directory Structure"),(0,o.kt)("p",null,"The configuration files used by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA")," are located in the ",(0,o.kt)("inlineCode",{parentName:"p"},"configs")," directory, which are used for training different models under different tasks. And we have created many subfolders according to different tasks, and in each subfolder, different training pipeline parameters of multiple models are stored."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"configs\n\u251c\u2500\u2500 _base_\n\u2502   \u251c\u2500\u2500 datasets\n\u2502   \u2502   \u2514\u2500\u2500 coco_detection.py\n\u2502   \u251c\u2500\u2500 default_runtime_cls.py\n\u2502   \u251c\u2500\u2500 default_runtime_det.py\n\u2502   \u251c\u2500\u2500 default_runtime_pose.py\n\u2502   \u2514\u2500\u2500 schedules\n\u2502       \u251c\u2500\u2500 schedule_1x.py\n\u2502       \u251c\u2500\u2500 schedule_20e.py\n\u2502       \u2514\u2500\u2500 schedule_2x.py\n\u251c\u2500\u2500 classification\n\u2502   \u251c\u2500\u2500 base.py\n\u2502   \u251c\u2500\u2500 mobnetv2_1.0_1bx16_300e_custom.py\n\u2502   \u2514\u2500\u2500 mobnetv3_small_1bx16_300e_custom.py\n\u251c\u2500\u2500 fomo\n\u2502   \u251c\u2500\u2500 fomo_efficientnet_b0_x8_abl_coco.py\n\u2502   \u251c\u2500\u2500 fomo_mobnetv2_0.35_x8_abl_coco.py\n\u2502   \u2514\u2500\u2500 fomo_squeezenet_0.1_x8_abl_coco.py\n\u251c\u2500\u2500 pfld\n\u2502   \u251c\u2500\u2500 pfld_dan_fpn_x8_192.py\n\u2502   \u251c\u2500\u2500 pfld_mbv2n_112.py\n\u2502   \u251c\u2500\u2500 pfld_mbv3l_192.py\n\u2502   \u2514\u2500\u2500 README.md\n\u2514\u2500\u2500 swift_yolo\n    \u251c\u2500\u2500 base_arch.py\n    \u2514\u2500\u2500 swift_yolo_tiny_1xb16_300e_coco.py\n\u2514\u2500\u2500 <Other Tasks...>\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The task folder named ",(0,o.kt)("inlineCode",{parentName:"p"},"_base_")," is an inheritance object for other tasks. For more details about configuration file inheritance, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://mmengine.readthedocs.io/en/latest/advanced_tutorials/config.html#id3"},"MMEngine - Configuration File Inheritance"),".")),(0,o.kt)("h2",{id:"configuration-structure"},"Configuration Structure"),(0,o.kt)("p",null,"Take the ",(0,o.kt)("inlineCode",{parentName:"p"},"fomo_mobnetv2_0.35_x8_abl_coco.py")," configuration file as an example, we introduce different fields in this configuration file according to the different functional modules."),(0,o.kt)("h3",{id:"important-parameters"},"Important Parameters"),(0,o.kt)("p",null,"When changing the training configuration, it is usually necessary to modify the following parameters. For example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"height")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"width")," factors are usually for image size. So we recommend defining these parameters separately in the configuration file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"height=96       # Input image height\nwidth=96        # Input image width\nbatch_size=16   # Batch size of a single GPU during validation\nworkers=4       # Worker to pre-fetch data for each single GPU during validation\nepoches=300     # Maximum training epochs: 300 epochs\nlr=0.001        # Learn rate\n")),(0,o.kt)("h3",{id:"model-config"},"Model Config"),(0,o.kt)("p",null,"In the configuration file of the FOMO model, we use model to set up detection algorithm components, include neural network components such as backbone, neck, etc. Part of model configuration as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"num_classes=2                                   # Number of class\nmodel=dict(\n    type='Fomo',                                # The name of detector\n    backbone=dict(\n        type='MobileNetV2',\n        widen_factor=0.35,\n        out_indices=(2, )),                     # The config of backbone\n    head=dict(\n        type='Fomo_Head',                       # The config of head\n        input_channels=16,                      # The input channels, this is consistent with the input channels of neck\n        num_classes=num_classes,                # Number of classes for classification\n        middle_channels=[96, 32],               # The output channels for head conv\n        act_cfg='ReLU6',                        # The config of activation function\n        loss_cls=dict(type='BCEWithLogitsLoss', # This loss combines a Sigmoid layer and the BCELoss in one single class\n                      reduction='none',\n                      pos_weight=40),\n        loss_bg=dict(type='BCEWithLogitsLoss', reduction='none'),\n        cls_weight=40)                          # Parameter for pos_weight\n)\n")),(0,o.kt)("h3",{id:"dataset-and-evaluator-config"},"Dataset and Evaluator Config"),(0,o.kt)("p",null,"Dataset and data pipeline need to be set to build the dataloader. Due to the complexity of this part, we use intermediate variables to simplify the writing of dataloader configs. More complex data argumentation methods can be found in ",(0,o.kt)("inlineCode",{parentName:"p"},"sscma/datasets/pipelines")," path."),(0,o.kt)("p",null,"We will demonstrate here the training and testing pipeline for FOMO, which uses the ",(0,o.kt)("a",{parentName:"p",href:"../datasets"},"Custom COCO_MASK Dataset"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"dataset_type='FomoDatasets'   # Dataset type, this will be used to define the dataset\ndata_root=''                  # Root path of data\ntrain_pipeline=[              # Training data loading pipeline\n    dict(type='RandomResizedCrop', height=height, width=width, scale=(0.90, 1.1),\n         p=1),                                 # RandomResizedCrop augmentation in albumentation for fomo\n    dict(type='Rotate', limit=20),             # Rotate transform with limit degree 20\n    dict(type='RandomBrightnessContrast',      # RandomBrightnessContrast augmentation in albumentation\n         brightness_limit=0.2,                 # Factor range for changing brightness\n         contrast_limit=0.2,                   # Factor range for changing contrast\n         p=0.5),                               # Probability of applying the transform\n    dict(type='HorizontalFlip', p=0.5),        # Flip the input horizontally around the y-axis\n]\ntest_pipeline=[dict(type='Resize', height=height, width=width,\n                    p=1)]                      # Resize the input to the given height and width\n\ndata=dict(samples_per_gpu=batch_size,          # Batch size of a single GPU during training\n          workers_per_gpu=workers,             # Worker to pre-fetch data for each single GPU during training\n          train_dataloader=dict(collate=True), # Flag of merging a list of samples to form a mini-batch\n          val_dataloader=dict(collate=True),\n          train=dict(type=dataset_type,\n                     data_root=data_root,\n                     ann_file='annotations/person_keypoints_train2017.json',\n                     img_prefix='train2017',   # Path of annotation file and prefix of image path\n                     pipeline=train_pipeline),\n          val=dict(type=dataset_type,\n                   data_root=data_root,\n                   test_mode=True,             # Enable test mode of the dataset to avoid filtering annotations or images\n                   ann_file='annotations/person_keypoints_val2017.json',\n                   img_prefix='val2017',\n                   pipeline=test_pipeline),\n          test=dict(type=dataset_type,\n                    data_root=data_root,\n                    test_mode=True,\n                    ann_file='annotations/person_keypoints_val2017.json',\n                    img_prefix='val2017',\n                    pipeline=test_pipeline))\n")),(0,o.kt)("p",null,"Evaluators are used to compute the metrics of the trained model on the validation and testing datasets. The config of evaluators consists of one or a list of metric configs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"evaluation=dict(interval=1, metric=['mAP'], fomo=True) # Validation metric for evaluate mAP\nfind_unused_parameters=True\n")),(0,o.kt)("h3",{id:"optimizer-config"},"Optimizer Config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"optimizer=dict(type='Adam', lr=lr, weight_decay=0.0005)         # Adam gradient descent optimizer with base learning rate and weight decay\noptimizer_config=dict(grad_clip=dict(max_norm=35, norm_type=2)) # Config used to build the optimizer hook\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For more details on the application of Hook, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://mmengine.readthedocs.io/en/latest/tutorials/hook.html"},"MMEngine - Hook"),".")),(0,o.kt)("h3",{id:"config-file-inheritance"},"Config File Inheritance"),(0,o.kt)("p",null,"The directory ",(0,o.kt)("inlineCode",{parentName:"p"},"config/_base_")," contains the default configuration file, and the configuration file are composed of the components in ",(0,o.kt)("inlineCode",{parentName:"p"},"_base_"),", which is called the primitive."),(0,o.kt)("p",null,"For easy testing, we recommend that users inherit the existing configuration files. For example, the training configuration file of a FOMO model with ",(0,o.kt)("inlineCode",{parentName:"p"},"_base_='. /_base_/default_runtime_det.py'"),", and then based on the inherited file, we modify the necessary fields in the configuration file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"_base_='../_base_/default_runtime_det.py\ncheckpoint_config=dict(interval=5) # Config to set the checkpoint hook\nlog_config=dict(                   # Config to register logger hook\n            interval=150,          # Interval to print the log\n            hooks=[\n                dict(type='TextLoggerHook', ndigits=4),       # TXT logger\n                dict(type='TensorboardLoggerHook', ndigits=4) # Tensorboard logger\n            ])                                                # The logger used to record the training process\nepochs=300\nrunner=dict(type='EpochBasedRunner',  # Type of runner to use (i.e. IterBasedRunner or EpochBasedRunner)\n            max_epochs=epochs)        # Runner that runs the workflow in total max_epochs. For IterBasedRunner use `max_iters`\ndist_params=dict(backend='nccl')      # Parameters to setup distributed training, the port can also be set\nlog_level = 'INFO'                    # The level of logging\nload_from = None                      # Load models as a pre-trained model from a given path, this will not resume training\nresume_from = None                    # Resume checkpoints from a given path, the training will be resumed from the epoch when the checkpoint's is saved\nworkflow = [('train', 1)]             # Workflow for runner. [('train', 1)] means there is only one workflow and the workflow named 'train' is executed once. The workflow trains the model by 300 epochs according to the total_epochs\nopencv_num_threads = 1                # Disable OpenCV multi-threads to save memory\nwork_dir = './work_dirs'              # Directory to save the model checkpoints and logs for the current experiments\n")),(0,o.kt)("h2",{id:"parameterized-configuration"},"Parameterized Configuration"),(0,o.kt)("p",null,"When submitting a job using ",(0,o.kt)("inlineCode",{parentName:"p"},"tools/train.py")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"tools/test.py")," from ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ModelAssistant"},"SSCMA"),", you can specify ",(0,o.kt)("inlineCode",{parentName:"p"},"--cfg-options")," to temporarily overwrite the configuration."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can specify configuration options in the order of the dict keys in the original configuration and update the dict chain of configuration keys. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"--cfg-options data_root='. /dataset/coco'")," change the data root directory of the dataset.")),(0,o.kt)("h2",{id:"faqs"},"FAQs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The configuration file of different models will be different, how do I understand it?"),(0,o.kt)("p",{parentName:"li"},"For more details, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://mmdetection.readthedocs.io/en/latest/tutorials/config.html"},"MMDet Config"),", ",(0,o.kt)("a",{parentName:"p",href:"https://mmpose.readthedocs.io/en/latest/tutorials/0_config.html"},"MMPose Config")," and ",(0,o.kt)("a",{parentName:"p",href:"https://mmclassification.readthedocs.io/en/latest/tutorials/config.html"},"MMCls Config"),"."))))}f.isMDXComponent=!0}}]);