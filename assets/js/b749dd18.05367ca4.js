"use strict";(self.webpackChunkworkshop=self.webpackChunkworkshop||[]).push([[8834],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=i,u=m["".concat(l,".").concat(h)]||m[h]||p[h]||o;return n?a.createElement(u,r(r({ref:t},d),{},{components:n})):a.createElement(u,r({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:1},r="Introduction to tinyML \ud83d\udcaa + \ud83e\udde0",s={unversionedId:"tiny-ml-workshop/intro",id:"tiny-ml-workshop/intro",title:"Introduction to tinyML \ud83d\udcaa + \ud83e\udde0",description:"Welcome to tinyML Workshop, In here we will look into basic of tinyML and how to impliment an project using Edge impulse, SeeedStudio XIAO nRF52840 Sense and Blues wireless.",source:"@site/docs/tiny-ml-workshop/intro.md",sourceDirName:"tiny-ml-workshop",slug:"/tiny-ml-workshop/intro",permalink:"/docs/tiny-ml-workshop/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tiny-ml-workshop/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"TinyML Workshop \ud83e\udde0",permalink:"/docs/category/tinyml-workshop-"},next:{title:"Introduction to Arduino \u267e\ufe0f",permalink:"/docs/tiny-ml-workshop/IntroductionToArduino"}},l={},c=[{value:"What is Machine learning?",id:"what-is-machine-learning",level:3},{value:"Where can machine learning help?",id:"where-can-machine-learning-help",level:3},{value:"Limitations of machine learning",id:"limitations-of-machine-learning",level:3},{value:"What is embedded ML?",id:"what-is-embedded-ml",level:2},{value:"How it&#39;s works?",id:"how-its-works",level:3}],d={toc:c};function m(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction-to-tinyml---"},"Introduction to tinyML \ud83d\udcaa + \ud83e\udde0"),(0,i.kt)("p",null,"Welcome to tinyML Workshop, In here we will look into basic of tinyML and how to impliment an project using Edge impulse, SeeedStudio XIAO nRF52840 Sense and Blues wireless."),(0,i.kt)("h3",{id:"what-is-machine-learning"},"What is Machine learning?"),(0,i.kt)("p",null,"Machine learning (ML) is a way of writing computer programs. Specifically, it\u2019s a way of writing programs that process raw data and turn it into information that is meaningful at an application level."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2773).Z,width:"1949",height:"1041"})," (\ud83d\udcf7src:edgeimpulse)"),(0,i.kt)("p",null,"For example, one ML program might be designed to determine when an industrial machine has broken down based on readings from its various sensors, so that it can alert the operator. Another ML program might take raw audio data from a microphone and determine if a word has been spoken, so it can activate a smart home device."),(0,i.kt)("p",null,"Unlike normal computer programs, the rules of ML programs are not determined by a developer. Instead, ML uses specialized algorithms to learn rules from data, in a process known as training."),(0,i.kt)("h3",{id:"where-can-machine-learning-help"},"Where can machine learning help?"),(0,i.kt)("p",null,"Machine learning is an excellent tool for solving problems that involve ",(0,i.kt)("strong",{parentName:"p"},"pattern recognition"),", especially patterns that are complex and might be difficult for a human observer to identify. ML algorithms excel at turning messy, high-bandwidth raw data into usable signals, especially combined with conventional signal processing."),(0,i.kt)("p",null,"But ML is not always the best tool for the job. If the rules of a system are well defined and can be easily expressed with hard-coded logic, it\u2019s usually more efficient to work that way."),(0,i.kt)("h3",{id:"limitations-of-machine-learning"},"Limitations of machine learning"),(0,i.kt)("p",null,"Machine learning algorithms are powerful tools, but they can have the following drawbacks:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"They output estimates and approximations, not exact answers"),(0,i.kt)("li",{parentName:"ul"},"ML models can be computationally expensive to run"),(0,i.kt)("li",{parentName:"ul"},"Training data can be time consuming and expensive to obtain")),(0,i.kt)("p",null,"It can be tempting to try and apply ML everywhere\u2014but if you can solve a problem without ML, it is usually better to do so."),(0,i.kt)("h2",{id:"what-is-embedded-ml"},"What is embedded ML?"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5248).Z,width:"696",height:"283"})," "),(0,i.kt)("p",null,"Recent advances in microprocessor architecture and algorithm design have made it possible to run sophisticated machine learning workloads on even the smallest of microcontrollers. Embedded machine learning, also known as TinyML, is the field of machine learning when applied to embedded systems such as these."),(0,i.kt)("p",null,"There are some major advantages to deploying ML on embedded devices. The key advantages are neatly expressed in the unfortunate acronym BLERP, ",(0,i.kt)("a",{parentName:"p",href:"https://www.eetimes.com/ai-and-vision-at-the-edge/"},"coined by Jeff Bier"),". They are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Bandwidth\u2014ML")," algorithms on edge devices can extract meaningful information from data that would otherwise be inaccessible due to bandwidth constraints."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Latency\u2014On-device")," ML models can respond in real-time to inputs, enabling applications such as autonomous vehicles, which would not be viable if dependent on network latency."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Economics\u2014By processing")," data on-device, embedded ML systems avoid the costs of transmitting data over a network and processing it in the cloud."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Reliability\u2014Systems")," controlled by on-device models are inherently more reliable than those which depend on a connection to the cloud."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Privacy\u2014When data")," is processed on an embedded system and is never transmitted to the cloud, user privacy is protected and there is less chance of abuse.")),(0,i.kt)("p",null,"Src: docs.edgeimpulse.com"),(0,i.kt)("h3",{id:"how-its-works"},"How it's works?"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1755).Z,width:"1223",height:"633"})," (\ud83d\udcf7src:eonardocavagnis.medium.com)"),(0,i.kt)("p",null,"The machine learning model be created and training will be done with the help of powerful computer which can run the ML alogorthams to make the model training happen, After that model inferencing will be happening on the tinyML device of our choice. The above image give an better understanding. "),(0,i.kt)("p",null,"In the following sessions, we will learn about every steps involved in tht tinyML model creation and running, Please stay tuned!"),(0,i.kt)("h1",{id:"todo"},"ToDo"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",'Read the full documentation about "Introduction about tinyML"'),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Share an idea that you have in your mind where can use the tinyML to solve a problem.")))}m.isMDXComponent=!0},1755:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/howitsworks-dcc34abc86a20af27bfb000ac4d7bd90.webp"},5248:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tinyML01-4656c983272f4187c9dd7e440d4a023c.webp"},2773:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/what-is-edge-machine-learning-71bec4387e8511f938492424ad86c0f9.webp"}}]);