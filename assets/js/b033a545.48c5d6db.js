"use strict";(self.webpackChunkworkshop=self.webpackChunkworkshop||[]).push([[1889],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:a,i[1]=r;for(var p=2;p<l;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const l={sidebar_position:4},i="Introduction to Edge Impulse \ud83d\udcaa",r={unversionedId:"tiny-ml-workshop/IntroductionToEdgeImpulse",id:"tiny-ml-workshop/IntroductionToEdgeImpulse",title:"Introduction to Edge Impulse \ud83d\udcaa",description:"Edge Impulse is the leading development platform for machine learning on edge devices, free for developers, and trusted by enterprises worldwide.",source:"@site/docs/tiny-ml-workshop/IntroductionToEdgeImpulse.md",sourceDirName:"tiny-ml-workshop",slug:"/tiny-ml-workshop/IntroductionToEdgeImpulse",permalink:"/docs/tiny-ml-workshop/IntroductionToEdgeImpulse",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tiny-ml-workshop/IntroductionToEdgeImpulse.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Seeed XIAO ESPS3-Sense \ud83c\udf40",permalink:"/docs/tiny-ml-workshop/XIAO_ESP32_S3_Setup"},next:{title:"Introduction to Blues Wirless \ud83d\udce1",permalink:"/docs/tiny-ml-workshop/IntroductionToBlues"}},s={},p=[{value:"Why we use edge impulse",id:"why-we-use-edge-impulse",level:2},{value:"\ud83d\udccd Create Edge impulse account",id:"-create-edge-impulse-account",level:2},{value:"\ud83d\udccd Install Edge impulse CLI for data ingestion.",id:"-install-edge-impulse-cli-for-data-ingestion",level:2},{value:"Installation - Windows",id:"installation---windows",level:3},{value:"Installation - Linux, Ubuntu, MacOS, and Raspbian OS",id:"installation---linux-ubuntu-macos-and-raspbian-os",level:3}],d={toc:p};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction-to-edge-impulse-"},"Introduction to Edge Impulse \ud83d\udcaa"),(0,a.kt)("p",null,"Edge Impulse is the leading development platform for machine learning on edge devices, free for developers, and trusted by enterprises worldwide."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"With Edge Impulse, software developers, engineers, and domain experts can solve real problems using machine learning on edge devices without a Ph.D. or advanced embedded engineering skills. From getting started to MLOps in production, Edge Impulse provides maximum efficiency and speed on a wide range of hardware from MCUs to CPUs.  ")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(451).Z,width:"2846",height:"1624"})),(0,a.kt)("p",null,"With EdgeImpulse we can "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Collect dataset from the device direclty "),(0,a.kt)("li",{parentName:"ul"},"Collect dataset from other source like .zip file, via api or other third party cloud ingestion "),(0,a.kt)("li",{parentName:"ul"},"Create test and train data and put them in different lables  "),(0,a.kt)("li",{parentName:"ul"},"Train our model "),(0,a.kt)("li",{parentName:"ul"},"Able to Select approriate ML algoirthms - EI provide recommended ML algorithms based on our dataset"),(0,a.kt)("li",{parentName:"ul"},"Deploy it on our harware "),(0,a.kt)("li",{parentName:"ul"},"TinyML project collabration with version controlling "),(0,a.kt)("li",{parentName:"ul"},"and much more that helps you to build tinyML applications. ")),(0,a.kt)("h2",{id:"why-we-use-edge-impulse"},"Why we use edge impulse"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6079).Z,width:"800",height:"427"})),(0,a.kt)("p",null,"We use edge impulse to collect the data, create model, and train using the ML algorithms. It's free and easy to use and it will be generate arduino library so that we can quickly start with prototyping. "),(0,a.kt)("h2",{id:"-create-edge-impulse-account"},"\ud83d\udccd Create Edge impulse account"),(0,a.kt)("p",null,"Vist the ",(0,a.kt)("a",{parentName:"p",href:"https://studio.edgeimpulse.com/signup"},"edge impulse signup website")," and create an account first, "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5038).Z,width:"1388",height:"836"})),(0,a.kt)("h2",{id:"-install-edge-impulse-cli-for-data-ingestion"},"\ud83d\udccd Install Edge impulse CLI for data ingestion."),(0,a.kt)("p",null,"This Edge Impulse CLI is used to control local devices, act as a proxy to synchronise data for devices that don't have an internet connection, and to upload and convert local files. The CLI consists of seven tools:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-daemon"},"edge-impulse-daemon")," - configures devices over serial, and acts as a proxy for devices that do not have an IP connection."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-uploader"},"edge-impulse-uploader")," - allows uploading and signing local files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-data-forwarder"},"edge-impulse-data-forwarder")," - a very easy way to collect data from any device over a serial connection, and forward the data to Edge Impulse."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-run-impulse"},"edge-impulse-run-impulse")," - show the impulse running on your device."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-blocks"},"edge-impulse-blocks")," - create organizational transformation, custom dsp, custom deployment and custom transfer learning blocks."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.edgeimpulse.com/docs/edge-impulse-cli/himax-flash-tool"},"himax-flash-tool")," - to flash the Himax WE-I Plus")),(0,a.kt)("h3",{id:"installation---windows"},"Installation - Windows"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create an ",(0,a.kt)("a",{parentName:"li",href:"https://studio.edgeimpulse.com/signup"},"Edge Impulse account"),"."),(0,a.kt)("li",{parentName:"ol"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://www.python.org/"},"Python 3")," on your host computer."),(0,a.kt)("li",{parentName:"ol"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js")," v14 or higher on your host computer.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For Windows users, install the Additional Node.js tools (called Tools for Native Modules on newer versions) when prompted."))),(0,a.kt)("li",{parentName:"ol"},"Install the CLI tools via:\n",(0,a.kt)("inlineCode",{parentName:"li"},"npm install -g edge-impulse-cli --force"))),(0,a.kt)("p",null,"You should now have the tools available in your PATH."),(0,a.kt)("h3",{id:"installation---linux-ubuntu-macos-and-raspbian-os"},"Installation - Linux, Ubuntu, MacOS, and Raspbian OS"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create an ",(0,a.kt)("a",{parentName:"li",href:"https://studio.edgeimpulse.com/signup"},"Edge Impulse account"),"."),(0,a.kt)("li",{parentName:"ol"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://www.python.org/"},"Python 3")," on your host computer."),(0,a.kt)("li",{parentName:"ol"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js")," v14 or higher on your host computer.\nAlternatively, run the following commands:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -\nsudo apt-get install -y nodejs\nnode -v\n")),(0,a.kt)("p",null,"The last command should return the node version, v14 or above.\nLet's verify the node installation directory:\n",(0,a.kt)("inlineCode",{parentName:"p"},"npm config get prefix"),"\nIf it returns /usr/local/, run the following commands to change npm's default directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mkdir ~/.npm-global\nnpm config set prefix '~/.npm-global'\necho 'export PATH=~/.npm-global/bin:$PATH' >> ~/.profile\n")),(0,a.kt)("p",null,"On MacOS you might be using zsh as default, so you will want to update the correct profile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mkdir ~/.npm-global\nnpm config set prefix '~/.npm-global'\necho 'export PATH=~/.npm-global/bin:$PATH' >> ~/.zprofile\n")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Install the CLI tools via:\n",(0,a.kt)("inlineCode",{parentName:"li"},"npm install -g edge-impulse-cli"),"\nYou should now have the tools available in your PATH.")),(0,a.kt)("p",null,"For more details, check here ",(0,a.kt)("a",{parentName:"p",href:"https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation"},"https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation"),". "),(0,a.kt)("h1",{id:"todo"},"ToDo"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Create edge impulse account. ",(0,a.kt)("a",{parentName:"li",href:"https://studio.edgeimpulse.com/signup"},"https://studio.edgeimpulse.com/signup")," "),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Install edgeimpulse cli on you computer.")))}u.isMDXComponent=!0},451:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/EI_homepage-727937c7021413632212b5105c89d835.png"},6079:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/edge-impulse-studio-226a9fa209c8e212fb483b7e17e24183.png"},5038:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/signup-cb6a1eca08bbe85d3aa77a055c1caa6c.png"}}]);