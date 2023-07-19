---
sidebar_position: 2
---

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

```
void setup(){
    pinMode(13, OUTPUT);
}

void loop(){
    digitalWrite(13,HIGH);
    delay(1000);
    digitalWrite(13,LOW);
    delay(1000);
}
```

Above you can see a somple program to blink an LED using arduino uno with a delay of one second and in below image you can see the demo gif. 

![](https://i.makeagif.com/media/8-05-2014/I8Mlj2.gif)

### Arduino Development boards also know as Dev boards or Hardware Development Kits (HDK)

![](https://circuitdigest.com/sites/default/files/field/image/Types-of-Arduino.jpg) 

(📷src: circuitdigest.com)


* Arduino devboards serve as the foundation for numerous electronic projects. These boards come in different shapes and sizes, each catering to specific needs and capabilities. 
* Some popular Arduino boards include** Arduino Uno**, **Arduino Mega**, **Arduino Nano**, and A**rduino Due**, among others. 
* Each devboard features a microcontroller and various input/output pins, allowing users to interface with sensors, actuators, and other components seamlessly.

The beauty of Arduino devboards lies in their versatility.**They support a wide range of sensors and actuators**, such as temperature sensors, motion detectors, LCD screens, motors, and more. Whether you want to build a home automation system, a robot, a weather station, or an interactive art installation, there is an Arduino devboard suited for your project.

⭐️ Moreover, the vast Arduino community contributes to the richness of the platform. Users worldwide share their projects, tutorials, and libraries, allowing others to learn, collaborate, and build upon existing work. This spirit of open-source collaboration has played a pivotal role in making Arduino a powerful catalyst for innovation and creativity.


### Third-party Development boards in arduino IDE 

In addition to the classic Arduino boards like Arduino Uno and Arduino Mega, the Arduino ecosystem has expanded to include a wide range of c that offer unique features and capabilities. These boards complement the traditional Arduino lineup and cater to diverse project requirements.



# ToDo

 - [ ] Install Arduino IDE v2.1.1 in your computer from here https://www.arduino.cc/en/software 
 - [ ] Complile any sample sketch/program without any error. 
 
















