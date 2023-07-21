---
sidebar_position: 6
---

# Activity Sense ✨ - Human Activity Monitor 

In today's sedentary lifestyle, individuals often struggle to maintain a balanced level of physical activity throughout their daily routines. Prolonged periods of sitting, lack of movement, and inadequate standing time can lead to various health issues, including obesity, cardiovascular problems, and musculoskeletal disorders. To address this concern and promote a healthier lifestyle, there is a pressing need for an efficient and accurate human activity monitoring system.

ActivitySense, a fascinating DIY human activity monitoring project that empowers you to build your own activity tracker using readily available components. By combining the SeeedStudio XIAO nRF52840 Sense controller, Edge Impulse machine learning platform, and Blueswirless Wifi module, you can create a personalized human activity monitor that helps you stay on top of your daily movement.

1. **SeeedStudio XIAO nRF52840 Sense Controller**: The heart of this DIY project is the SeeedStudio XIAO nRF52840 Sense controller. This compact microcontroller comes equipped with powerful features such as Bluetooth 5.0 and multi-sensor data fusion. With the XIAO nRF52840 Sense at the core, you can collect real-time data from accelerometers and gyroscopes, making activity tracking accurate and reliable.

2. **Edge Impulse Machine Learning Platform**: Take your DIY activity monitor to the next level by integrating it with the Edge Impulse machine learning platform. This fantastic tool allows you to train your device with datasets containing various activity Porpatterns. By doing so, your ActivitySense becomes adept at recognizing activities like sitting, walking, and standing, providing you with personalized insights based on your specific routines.

3. **Blueswirless Wifi Module**: To enable seamless data transfer and connectivity in your DIY project, the Blueswirless Wifi module comes to the rescue. With this module, your ActivitySense can effortlessly transmit monitored activity data to the cloud. By connecting it to your smartphone or other devices, you gain access to comprehensive activity reports and stay on top of your fitness goals.

### Key Features of  ActivitySense:

* Real-time monitoring of sitting time, walking time, and standing time, offering immediate feedback on your daily activity levels.
* Accurate activity recognition through the powerful combination of SeeedStudio XIAO nRF52840 Sense and Edge Impulse's machine learning algorithms.
* Cloud connectivity using the Blueswirless Wifi module for easy access to activity data on-the-go.
* User-friendly interface for DIY enthusiasts of all skill levels to build and configure their personalized activity tracker.

## How it's works. 

[Need to add a draw.io image here]

# Let's build one 🛠️

Follow the below guide to build the **Ativity Sense ✨ - Human Activity Monitor** Project. 

### Hardware Requirements 🔩
* Seeed XIAO nRF52840 Sense
* Type-C Cable 
* Laptop/Desktop computer
* Blues Starter Kit with WiFi Card

### Software Installations 💻
Attendees only need some very basic knowledge of Arduino development and understanding of 101-level C coding concepts. Some (free) software installations are required:

* Arduino IDE 
* Install the Edge Impulse CLI
* Create a free Blues Notehub account
* Create a free Edge Impulse Studio account
* Create a free Datacake account
* XIAO Hand Strap 


### Workshop Agenda  📖 

All of the resources needed to present the workshop are available in the venue. Please let us know if anything missing. 

* Welcome and Introductions **[5 mins]**
* Introduce the Seeed XIAO nRF52840 Hardware **[5 mins]**
* Introduce the Edge Impulse platform**[5 mins]**
* Introduce the Blues Hardware **[5 mins]**
* Hands-on: XIAO blink **[15 mins]**
* Hands-on: XIAO IMU Data Forwarding to Edge Impulse **[15 mins]**
* hands-on: Create Impulse and Deploy **[20 mins]**
* hands-on: Build and run inference program on XIAO **[10 mins]**
* Hands-on: Notecard + Notecarrier Standalone Quickstart **[20 mins]**
* Hands-on: Visualizing Generated Inferences in Datacake **[20 mins]**

## Step 1: Introductions 🔖 

1. [Introduction to TinyML 💪 + 🧠](../../docs/tiny-ml-workshop/intro.md) 
2. [Introduction to Arduino ♾️](../../docs/tiny-ml-workshop/IntroductionToArduino.md) => Install Arduino IDE 
3. [Introduction to XIAO nRF52840 Sense 🍀](../../docs/tiny-ml-workshop/IntroductionToXiao.md) => Install XIAO on Arduino , run blink project. 
4. [Introduction to EdgeImpulse 💪](../../docs/tiny-ml-workshop/IntroductionToEdgeImpulse.md) => Create Edge Impulse account. 
5. [Introduction to Blueswirless 📡](../../docs/tiny-ml-workshop/IntroductionToBlues.md) => Create Blues wirless account. 

## Step 2: Fetch Accelerometer data from XIAO 🧺

Next, we need to read the Accelerometer data from the XIAO inbuilt Accelerometer senseor. For that please follow the below guide. 

#### Step 2.1: Connect the Seeed Studio XIAO nRF52840 Sense to your computer via a USB Type-C cable.
![](https://files.seeedstudio.com/wiki/XIAO-BLE/bletpyecconnect.png)

#### Step 2.2: Upload ReadXIAOAccelerometer.ino sketch

```
// XIAO BLE Sense LSM6DS3 Data  Forwarder 

#include "LSM6DS3.h"
#include "Wire.h"

//Create a instance of class LSM6DS3
LSM6DS3 myIMU(I2C_MODE, 0x6A);  //I2C device address 0x6A

#define CONVERT_G_TO_MS2 9.80665f
#define FREQUENCY_HZ 50
#define INTERVAL_MS (1000 / (FREQUENCY_HZ + 1))

static unsigned long last_interval_ms = 0;


void setup() {
  Serial.begin(115200);
  while (!Serial)
    ;

  if (myIMU.begin() != 0) {
    Serial.println("Device error");
  } else {
    Serial.println("Device OK!");
  }
}



void loop() {
  if (millis() > last_interval_ms + INTERVAL_MS) {
    last_interval_ms = millis();
    Serial.print(myIMU.readFloatAccelX() * CONVERT_G_TO_MS2, 4);
    Serial.print('\t');
    Serial.print(myIMU.readFloatAccelY() * CONVERT_G_TO_MS2, 4);
    Serial.print('\t');
    Serial.println(myIMU.readFloatAccelZ() * CONVERT_G_TO_MS2, 4);
  }
}

```

Upload the abobe code to your XIAO Sense and open the serial monitor ot serial ploter to see the accelerometer data.

<!-- // raw data image![]() -->

## Step 3:  Connect to Edge impulse and Forward Accelerometer data  🎛️. 

As of now, we can see the accelerometer data from from the XIAO using arduino IDE serial monitor, now we need to forward the data to the edge impulse for post processing. 

### Step 3.1: Create an Edge Impulse project. 

Visit, https://studio.edgeimpulse.com/login  t. 




## Step 4: Data collection 🪣. 





## Step 5: Design Impulse, create ML model and train 🪄. 

## Step 6: Generate Arduino Library 🧬.

## Step 7: Deploy it on the XIAO nRF52850 Sense and Live infernce 🪢.

## Step 8: Intergrate with the Blues.io WiFi notecard 📡.

## Step 9: Route data from Blues.io Notehub to Datacake 🖥️ ☁️ . 

## Summary 🍀






















