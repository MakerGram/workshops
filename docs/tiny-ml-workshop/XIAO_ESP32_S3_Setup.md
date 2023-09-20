---
sidebar_position: 3
---

# Seeed XIAO ESPS3-Sense 🍀

Seeed Studio XIAO Series are diminutive development boards, sharing a similar hardware structure, where the size is literally thumb-sized. The code name "XIAO" here represents its half feature "Tiny", and the other half will be "Puissant".

Seeed Studio XIAO ESP32S3 Sense integrates a camera sensor, digital microphone, and SD card support. Combining embedded ML computing power and photography capability, this development board can be your great tool to get started with intelligent voice and vision AI.

### Feature
* **Powerful MCU Board**: Incorporate the ESP32S3 32-bit, dual-core, Xtensa processor chip operating up to 240 MHz, mounted multiple development ports, Arduino / MicroPython supported

* **Advanced Functionality**: Detachable OV2640 camera sensor for 1600*1200 resolution, compatible with OV5640 camera sensor, integrating additional digital microphone

* **Great Memory for more Possibilities**: Offer 8MB PSRAM and 8MB FLASH, supporting SD card slot for external 32GB FAT memory

* **Outstanding RF performance:** Support 2.4GHz Wi-Fi and BLE dual wireless communication, support 100m+ remote communication when connected with U.FL antenna

* **Thumb-sized Compact Design**: 21 x 17.5mm, adopting the classic form factor of XIAO, suitable for space-limited projects like wearable devices


### Hardware Overview
![](https://wdcdn.qpic.cn/MTY4ODg1NTkyNTI4NTEyMg_561868_B55w78PjvcK7SUlF_1679553921?w=1830&h=939)


# Introduction to Arduino ♾️

![](https://upload.wikimedia.org/wikipedia/commons/5/5b/Arduino_Logo_Registered.svg)

Arduino is an open-source electronics platform that has revolutionized the world of DIY electronics and prototyping. 

* Created in 2005 by a team of students and engineers in Italy
* Arduino was designed with the goal of making electronics accessible to everyone, regardless of their background or experience. 
* The platform consists of **both hardware and software components**, enabling enthusiasts, hobbyists, and professionals to bring their creative ideas to life.


## Arduino IDE

![](https://docs.arduino.cc/static/e534053def4bc0eb97a3b6ba9cf31853/29114/ide-2-overview.png) ( 📷src: Arduino.com)

* The Arduino **Integrated Development Environment** (IDE) is a crucial part of the Arduino ecosystem.
* It is a user-friendly software that allows users to **write, compile, and upload code to their Arduino boards**. 
* The IDE is compatible with various operating systems, making it accessible to a wide range of users. With its intuitive interface and simplified syntax, even beginners find it easy to program their Arduino boards and experiment with different projects.

- [ ] Install Arduino IDE v2.1.1 in your computer from here https://www.arduino.cc/en/software 




## Install XIAO ESP32-S3 on Arduino IDE. 

Step 1. Download and Install the stable version of Arduino IDE according to your operating system.https://www.arduino.cc/en/software  

Step 3. Add ESP32 board package to your Arduino IDE.

Navigate to File > Preferences, and fill "Additional Boards Manager URLs" with the url below:

```https://espressif.github.io/arduino-esp32/package_esp32_index.json``` 

![](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/6.png)

Navigate to Tools > Board > Boards Manager..., type the keyword esp32 in the search box, select the latest version of esp32, and install it.

![](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/9.png)

Step 4. Select your board and port.

On top of the Arduino IDE, you can select the port directly. This is likely to be COM3 or higher (COM1 and COM2 are usually reserved for hardware serial ports).

Also, search for xiao in the development board on the left. select XIAO_ESP32S3.

![](https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/10.png)

With this preparation, you can start writing programs for XIAO ESP32S3 to compile and upload.

More recourse can be found here at https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/ 


# ToDo
- [ ] Install Arduino IDE 
- [ ] Install ESP32 on Arduino IDE. 
