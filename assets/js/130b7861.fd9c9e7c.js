"use strict";(self.webpackChunkworkshop=self.webpackChunkworkshop||[]).push([[3290],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),h=i,m=u["".concat(d,".").concat(h)]||u[h]||p[h]||r;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=h;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:2,last_update:{date:"04/09/2023",author:"Salman Faris"}},l="Digital Scale \u2696\ufe0f",o={unversionedId:"projects/digital-scale",id:"projects/digital-scale",title:"Digital Scale \u2696\ufe0f",description:"Here we are going to make a Digital scale that can meausre distance using an ultrasonic sensor.",source:"@site/docs/projects/digital-scale.md",sourceDirName:"projects",slug:"/projects/digital-scale",permalink:"/docs/projects/digital-scale",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/projects/digital-scale.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,last_update:{date:"04/09/2023",author:"Salman Faris"}},sidebar:"tutorialSidebar",previous:{title:"Automatic Light \u2600\ufe0f\ud83d\udca1",permalink:"/docs/projects/automatic-light"},next:{title:"Digital Thermometer \ud83c\udf21\ufe0f",permalink:"/docs/projects/digital-thermometer"}},d={},s=[{value:"Required Hardware \ud83d\udee0",id:"required-hardware-",level:4},{value:"Required Software  \ud83d\udda5\ufe0f",id:"required-software--\ufe0f",level:4},{value:"Step 1: Introduction to Arduino \u267e\ufe0f",id:"step-1-introduction-to-arduino-\ufe0f",level:2},{value:"1.1 Arduino IDE",id:"11-arduino-ide",level:3},{value:"ToDo \u2705",id:"todo-",level:4},{value:"1.2 Arduino Development boards also know as Dev boards or Hardware Development Kits (HDK)",id:"12-arduino-development-boards-also-know-as-dev-boards-or-hardware-development-kits-hdk",level:3},{value:"ToDo \u2705",id:"todo--1",level:4},{value:"Step 2: Hello World - Blink Project",id:"step-2-hello-world---blink-project",level:2},{value:"2.1 Blink Sketch",id:"21-blink-sketch",level:3},{value:"2.2 Select the correct port and board",id:"22-select-the-correct-port-and-board",level:3},{value:"2.2 Upload the Sketch",id:"22-upload-the-sketch",level:4},{value:"Step 3: Digital Scale Build \ud83d\udee0\ufe0f",id:"step-3-digital-scale-build-\ufe0f",level:2},{value:"3.1: Test the Ultrasonic Sensor",id:"31-test-the-ultrasonic-sensor",level:3},{value:"3.2 Connection Diagram",id:"32-connection-diagram",level:3},{value:"Upload Ultrasonic code",id:"upload-ultrasonic-code",level:4},{value:"3.3 Test the LCD display.",id:"33-test-the-lcd-display",level:3},{value:"3.4 Connection Diagram",id:"34-connection-diagram",level:3},{value:"Upload LCD demo code",id:"upload-lcd-demo-code",level:4},{value:"3.5 Install &quot;LiquidCrystal_I2C&quot; Arduino Library.",id:"35-install-liquidcrystal_i2c-arduino-library",level:3},{value:"3.6 Upload Code.",id:"36-upload-code",level:3},{value:"Intergrate Ultrasonic Sensor + LCD Display for final project.",id:"intergrate-ultrasonic-sensor--lcd-display-for-final-project",level:2},{value:"3.7 Connection Diagram.",id:"37-connection-diagram",level:3},{value:"3.8 Full Code.",id:"38-full-code",level:3},{value:"Conclusion",id:"conclusion",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"digital-scale-\ufe0f"},"Digital Scale \u2696\ufe0f"),(0,i.kt)("p",null,"Here we are going to make a Digital scale that can meausre distance using an ultrasonic sensor."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(825).Z,width:"600",height:"338"})),(0,i.kt)("h4",{id:"required-hardware-"},"Required Hardware \ud83d\udee0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Arduino UNO x 1"),(0,i.kt)("li",{parentName:"ul"},"USB Type-B Cable x 1"),(0,i.kt)("li",{parentName:"ul"},"HC04-Ultrasonic sensor x 1  "),(0,i.kt)("li",{parentName:"ul"},"16x2 LCD Module x 1 "),(0,i.kt)("li",{parentName:"ul"},"Jumper Wires "),(0,i.kt)("li",{parentName:"ul"},"A Computer ")),(0,i.kt)("h4",{id:"required-software--\ufe0f"},"Required Software  \ud83d\udda5\ufe0f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Arduino IDE ")),(0,i.kt)("h2",{id:"step-1-introduction-to-arduino-\ufe0f"},"Step 1: Introduction to Arduino \u267e\ufe0f"),(0,i.kt)("p",null,"Ardunio is a company and they build tools that help us to build electonics projects and products in a easy way. In this project, we are going to use some of arduino tools such as ",(0,i.kt)("strong",{parentName:"p"},"Arduino IDE")," software, ",(0,i.kt)("strong",{parentName:"p"},"Arduino UNO")," development board. "),(0,i.kt)("h3",{id:"11-arduino-ide"},"1.1 Arduino IDE"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.arduino.cc/static/e534053def4bc0eb97a3b6ba9cf31853/29114/ide-2-overview.png",alt:null})," (\ud83d\udcf7src: Arduino.com)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The Arduino ",(0,i.kt)("strong",{parentName:"li"},"Integrated Development Environment")," (IDE) is a crucial part of the Arduino ecosystem."),(0,i.kt)("li",{parentName:"ul"},"It is a user-friendly software that allows users to ",(0,i.kt)("strong",{parentName:"li"},"write, compile, and upload code to their Arduino boards"),". "),(0,i.kt)("li",{parentName:"ul"},"The IDE is compatible with various operating systems, making it accessible to a wide range of users. With its intuitive interface and simplified syntax, even beginners find it easy to program their Arduino boards and experiment with different projects.")),(0,i.kt)("h4",{id:"todo-"},"ToDo \u2705"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Download Arduino IDE : ",(0,i.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/software"},"https://www.arduino.cc/en/software")),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Install Arduino IDE on your computer. ")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"12-arduino-development-boards-also-know-as-dev-boards-or-hardware-development-kits-hdk"},"1.2 Arduino Development boards also know as Dev boards or Hardware Development Kits (HDK)"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://circuitdigest.com/sites/default/files/field/image/Types-of-Arduino.jpg",alt:null}),"\n(\ud83d\udcf7src: circuitdigest.com)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Arduino devboards serve as the foundation for numerous electronic projects. These boards come in different shapes and sizes, each catering to specific needs and capabilities. "),(0,i.kt)("li",{parentName:"ul"},"Some popular Arduino boards include",(0,i.kt)("strong",{parentName:"li"}," Arduino Uno"),", ",(0,i.kt)("strong",{parentName:"li"},"Arduino Mega"),", ",(0,i.kt)("strong",{parentName:"li"},"Arduino Nano"),", and A",(0,i.kt)("strong",{parentName:"li"},"rduino Due"),", among others. "),(0,i.kt)("li",{parentName:"ul"},"Each devboard features a microcontroller and various input/output pins, allowing users to interface with sensors, actuators, and other components seamlessly.")),(0,i.kt)("p",null,"The beauty of Arduino devboards lies in their versatility.",(0,i.kt)("strong",{parentName:"p"},"They support a wide range of sensors and actuators"),", such as temperature sensors, motion detectors, LCD screens, motors, and more. Whether you want to build a home automation system, a robot, a weather station, or an interactive art installation, there is an Arduino devboard suited for your project."),(0,i.kt)("p",null,"\u2b50\ufe0f Moreover, the vast Arduino community contributes to the richness of the platform. Users worldwide share their projects, tutorials, and libraries, allowing others to learn, collaborate, and build upon existing work. This spirit of open-source collaboration has played a pivotal role in making Arduino a powerful catalyst for innovation and creativity."),(0,i.kt)("p",null,"Here in this project, we are using the Arduino UNO model. "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.arduino.cc/static/2b141eb1cfe6f465a949c203e4af1b5f/A000066-pinout.png",alt:null}),"(\ud83d\udcf7src: Arduino.com)"),(0,i.kt)("h4",{id:"todo--1"},"ToDo \u2705"),(0,i.kt)("ul",{className:"contains-task-list"},(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Explore Arduino UNO "),(0,i.kt)("li",{parentName:"ul",className:"task-list-item"},(0,i.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Understand Arduino UNO Components  ")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"step-2-hello-world---blink-project"},"Step 2: Hello World - Blink Project"),(0,i.kt)("p",null,'Whenever we are learning new project, we will first write and run "Hello World" project. In hardware, we will do a LED "Blink" as first project. '),(0,i.kt)("h3",{id:"21-blink-sketch"},"2.1 Blink Sketch"),(0,i.kt)("p",null,'In arduino, we call programs as sketch. For the first "Hello World", Copy the below code, and past to your arduino IDE. '),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void setup(){\n    pinMode(13, OUTPUT);\n}\n\nvoid loop(){\n    digitalWrite(13,HIGH);\n    delay(1000);\n    digitalWrite(13,LOW);\n    delay(1000);\n}\n")),(0,i.kt)("h3",{id:"22-select-the-correct-port-and-board"},"2.2 Select the correct port and board"),(0,i.kt)("p",null,"After pasting the code from above, select the board as uno in ",(0,i.kt)("strong",{parentName:"p"},"Tools -> Board -> Arduino AVR Boards -> Arduino Uno")," and connect the uno with computer and select the correct port. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5825).Z,width:"1324",height:"598"})),(0,i.kt)("h4",{id:"22-upload-the-sketch"},"2.2 Upload the Sketch"),(0,i.kt)("p",null,'Upload the sketch by clicking the "Upload" button. It will compile and verify your skecth and upload the program. '),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(8011).Z,width:"923",height:"846"})),(0,i.kt)("p",null,"We can see the LED is blnking. (You don't need to attach a LED like the below image, you can see the onboard LED is blinking alone)"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.makeagif.com/media/8-05-2014/I8Mlj2.gif",alt:null})),(0,i.kt)("h2",{id:"step-3-digital-scale-build-\ufe0f"},"Step 3: Digital Scale Build \ud83d\udee0\ufe0f"),(0,i.kt)("p",null,"Now, you got an idea about how arduino works. Let's built the digital scale one by one. First, we are going to test the sensor and then display the data on the LCD display. "),(0,i.kt)("h3",{id:"31-test-the-ultrasonic-sensor"},"3.1: Test the Ultrasonic Sensor"),(0,i.kt)("p",null,"In this project, to measure the distance we are using an ",(0,i.kt)("strong",{parentName:"p"},"Ultrasonic sensor"),". "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://arnin.in/wp-content/uploads/2022/04/ultrasonic-sensor-working2.gif",alt:null})),(0,i.kt)("p",null,"In Ultrasonic module, transmitter part will send a ultarasonic signal and when it's hits on a object it will reflect then the reciver side will recive it.  After that,  we will calculate the distace from the time it required to reflect the signal. "),(0,i.kt)("p",null,"After that, we will display the distance on a LCD display for protability. "),(0,i.kt)("h3",{id:"32-connection-diagram"},"3.2 Connection Diagram"),(0,i.kt)("p",null,"Connect the LDR and Arduino as mentioned below "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"HCSR04"),(0,i.kt)("th",{parentName:"tr",align:null},"Arduino Pin"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GND"),(0,i.kt)("td",{parentName:"tr",align:null},"Arduino GND")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ECHO"),(0,i.kt)("td",{parentName:"tr",align:null},"Arduino D10")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TRIG"),(0,i.kt)("td",{parentName:"tr",align:null},"Arduino D11")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"+5v/VCC"),(0,i.kt)("td",{parentName:"tr",align:null},"Arduino 5v")))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1744).Z,width:"1496",height:"1378"})),(0,i.kt)("h4",{id:"upload-ultrasonic-code"},"Upload Ultrasonic code"),(0,i.kt)("p",null,"After the connecting, copy the code and upload. Try to read the comments in the code for better understanding. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'const int trigPin = 11;\nconst int echoPin = 10;\n// defines variables\nlong duration;\nint distance;\nvoid setup() {\n  pinMode(trigPin, OUTPUT);  // Sets the trigPin as an Output\n  pinMode(echoPin, INPUT);   // Sets the echoPin as an Input\n  Serial.begin(9600);        // Starts the serial communication\n}\nvoid loop() {\n  // Clears the trigPin\n  digitalWrite(trigPin, LOW);\n  delayMicroseconds(2);\n  // Sets the trigPin on HIGH state for 10 micro seconds\n  digitalWrite(trigPin, HIGH);\n  delayMicroseconds(10);\n  digitalWrite(trigPin, LOW);\n  // Reads the echoPin, returns the sound wave travel time in microseconds\n  duration = pulseIn(echoPin, HIGH);\n  // Calculating the distance\n  distance = duration * 0.034 / 2;\n  // Prints the distance on the Serial Monitor\n  Serial.print("Distance: ");\n  Serial.println(distance);\n}\n\n')),(0,i.kt)("p",null,"After uploading, open the Serial monitor by cliking the right corner lense icon (1) on arduino IDE and see the distance printed on below (2). "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3642).Z,width:"2470",height:"1846"})),(0,i.kt)("p",null,"Congratulations \ud83d\udc4f\ud83d\udc4f , you are successfully intergrated the HCSR04 Ultrasonic sensor with the Arduino UNO and able to read tha data and display it on Arduino IDE Serial monitor. "),(0,i.kt)("h3",{id:"33-test-the-lcd-display"},"3.3 Test the LCD display."),(0,i.kt)("p",null,"We can't carry the computer always with our proect to see the distace right? so we need to display the distance on a display to make it more portable. For that, we are using 16x2 LCD display with I2C Interface. Before using it on a project we need to test the LCD individually and see it's working. "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://lastminuteengineers.b-cdn.net/wp-content/uploads/arduino/I2C-LCD-Display-Pinout.png",alt:null})),(0,i.kt)("h3",{id:"34-connection-diagram"},"3.4 Connection Diagram"),(0,i.kt)("p",null,"Connect the LDR and Arduino as mentioned below "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"HCSR04"),(0,i.kt)("th",{parentName:"tr",align:null},"Arduino Pin"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GND"),(0,i.kt)("td",{parentName:"tr",align:null},"Arduino GND")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"VCC"),(0,i.kt)("td",{parentName:"tr",align:null},"Arduino 5v")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SDA"),(0,i.kt)("td",{parentName:"tr",align:null},"Arduino SDA")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SCL"),(0,i.kt)("td",{parentName:"tr",align:null},"Arduino SCL")))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7016).Z,width:"1624",height:"1566"})),(0,i.kt)("h4",{id:"upload-lcd-demo-code"},"Upload LCD demo code"),(0,i.kt)("h3",{id:"35-install-liquidcrystal_i2c-arduino-library"},'3.5 Install "LiquidCrystal_I2C" Arduino Library.'),(0,i.kt)("p",null,'We need to install an library in the arduino IDE before compile and upload the code. Follow the below steps and install the lib.  Open Library Menue(1) , Enter the Library name ""LiquidCrystal_I2C" (2) , and Install "Frank de Brabander" library (3). '),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(5948).Z,width:"2398",height:"1632"})),(0,i.kt)("h3",{id:"36-upload-code"},"3.6 Upload Code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <Wire.h>\n#include <LiquidCrystal_I2C.h>\n\nLiquidCrystal_I2C lcd(0x27, 20, 4);  // set the LCD address to 0x27 for a 16 chars and 2 line display\n\nvoid setup() {\n  lcd.init();  // initialize the lcd\n  lcd.init();\n  lcd.backlight();\n\n  lcd.clear();  // clear the LCD\n\n  lcd.setCursor(2, 0);  //Set cursor to character 2 on line 0\n  lcd.print("Hello world!");\n\n  lcd.setCursor(2, 1);  //Move cursor to character 2 on line 1\n  lcd.print("LCD Tutorial");\n}\n\nvoid loop() {\n}\n\n')),(0,i.kt)("p",null,"After uploading, you can see the text printed on LCD, yeey \ud83e\udd73.  "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(3644).Z,width:"2098",height:"972"})),(0,i.kt)("h2",{id:""}),(0,i.kt)("h2",{id:"intergrate-ultrasonic-sensor--lcd-display-for-final-project"},"Intergrate Ultrasonic Sensor + LCD Display for final project."),(0,i.kt)("p",null,"Finally, we need to intergrate the both module and make the final project. "),(0,i.kt)("h3",{id:"37-connection-diagram"},"3.7 Connection Diagram."),(0,i.kt)("p",null,"Connect everything as per the below diagram. "),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Module"),(0,i.kt)("th",{parentName:"tr",align:null},"Arduino Pin"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Ultrasonic GND"),(0,i.kt)("td",{parentName:"tr",align:null},"Arduino GND")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Ultrasonic ECHO"),(0,i.kt)("td",{parentName:"tr",align:null},"Arduino D10")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Ultrasonic TRIG"),(0,i.kt)("td",{parentName:"tr",align:null},"Arduino D11")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Ultrasonic VCC"),(0,i.kt)("td",{parentName:"tr",align:null},"Arduino 5v")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"LCD GND"),(0,i.kt)("td",{parentName:"tr",align:null},"Arduino GND")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"LCD VCC"),(0,i.kt)("td",{parentName:"tr",align:null},"Arduino 5v")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"LCD SDA"),(0,i.kt)("td",{parentName:"tr",align:null},"Arduino SDA")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"LCD SCL"),(0,i.kt)("td",{parentName:"tr",align:null},"Arduino SCL")))),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2254).Z,width:"1808",height:"1468"})),(0,i.kt)("h3",{id:"38-full-code"},"3.8 Full Code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <Wire.h>\n#include <LiquidCrystal_I2C.h>\n\n\nconst int trigPin = 11;\nconst int echoPin = 10;\n\n// defines variables\nlong duration;\nint distance;\n\nLiquidCrystal_I2C lcd(0x27, 20, 4);  // set the LCD address to 0x27 for a 16 chars and 2 line display\n\nvoid setup() {\n  lcd.init();  // initialize the lcd\n  lcd.init();\n  lcd.backlight();\n\n  pinMode(trigPin, OUTPUT);  // Sets the trigPin as an Output\n  pinMode(echoPin, INPUT);   // Sets the echoPin as an Input\n  Serial.begin(9600);        // Starts the serial communication\n}\n\n\nvoid loop() {\n\n\n  // Clears the trigPin\n  digitalWrite(trigPin, LOW);\n  delayMicroseconds(2);\n  // Sets the trigPin on HIGH state for 10 micro seconds\n  digitalWrite(trigPin, HIGH);\n  delayMicroseconds(10);\n  digitalWrite(trigPin, LOW);\n  // Reads the echoPin, returns the sound wave travel time in microseconds\n  duration = pulseIn(echoPin, HIGH);\n  // Calculating the distance\n  distance = duration * 0.034 / 2;\n  // Prints the distance on the Serial Monitor\n  Serial.print("Distance: ");\n  Serial.println(distance);\n  lcd.clear();\n\n  // Print a message to the LCD.\n\n  lcd.setCursor(0, 0);     // Sets the location at which subsequent text written to the LCD will be displayed\n  lcd.print("Distance ");  // Prints string "Distance" on the LCD\n  lcd.setCursor(0, 1);\n  lcd.print(distance);  // Prints the distance value from the sensor\n  lcd.print(" cm");\n\n  delay(300);\n}\n\n')),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(119).Z,width:"1260",height:"1680"})),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,'Congratulations \ud83d\udc4f\ud83d\udc4f , you made "Digital Scale" project with Arduino , HCSR04 Ultrasonic Sensor and LCD Disply module.'))}u.isMDXComponent=!0},825:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/DigitalScale-7fe4ce2c669bb7d37215451c4da6517e.gif"},1744:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/DigitalScale_hcsro4-50f3e8770ff528be30d12a9c098f010c.png"},3642:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/DigitalScale_hcsro4_serial-fe639e5b914ccb9373a8091afe406aec.png"},2254:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/DigitalScale_main_diag-b028afbd6d264310badbfb811a6b4d4f.png"},7016:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/LCD_Interface-17d8768ca9daf0eead1a81356978c43a.png"},5948:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/LCD_lib-1fbf91c9122eb863ea04ae2c17a92f75.png"},119:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/digitalScaleDemo-91d5d2f6bef02ddbbb53ef170978bee3.png"},3644:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/lcd_demo-7558091e5f67577fda1003c883179f90.png"},5825:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/selectBoardUno-fd4af536ed03e4f9483e859a3d7cefd2.png"},8011:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/upload-d54fda229e8dd046f7d4b58e86b38ffb.png"}}]);