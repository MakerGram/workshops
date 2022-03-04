# Internet Connected Light 💡  

Welcome to internet connected light project, Here we are going to build a smart internet connect light, that can be control anywhere in the world. 

### Hardware Requirment 

* 1 x ESP32 Dev Kit 
* 1 x LED 
* 1 X Email ID 
* 1 x Laptop with internet connection
* Few Jumper canles  


## Block Diagram 

![](/IOT/Basic/ConnectedLight/src/Diagram.png)

## Pin Digram 

![](/IOT/Basic/ConnectedLight/src/pinConnection.png ) 

#### LED 

Positive (+) Leg ->  ESP32 D13 Pin

Negative (-) Leg ->  ESP32 GND Pin

## Step 1 : Install Arduino IDE

We are using arduino IDE to upload code in ESP32. Goto https://www.arduino.cc/en/software and downalod Arduino IDE. 

## Step 2: Install ESP32 on Arduino IDE

Since ESP32 is third party dev kit, we need to install on esp32 to compile code. 

*  Add Board URL 

Open Arduino **Preferences Window**

![](/IOT/Basic/ConnectedLight/src/install_guide_preferences.png) 

* Enter one of the release links above into Additional Board Manager URLs field. You can add multiple URLs, separating them with commas.

```
https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
```

![](/IOT/Basic/ConnectedLight/src/install_guide_boards_manager_url.png) 

* Open Boards Manager from Tools > Board menu and install esp32 platform (and do not forget to select your ESP32 board from Tools > Board menu after installation).

![](/IOT/Basic/ConnectedLight/src/install_guide_boards_manager_esp32.png)

* Restart Arduino IDE.


## Step 3: Install Adafruit.io Libraries

You can install the library through the Arduino Library Manager (click: Sketch -> Include Library -> Manage Libraries...)

![](/IOT/Basic/ConnectedLight/src/adafruit_io_arduino_library_manager.png
)


## Step 4: Setup Adafrui.io 

## 2. Setup Adafruit.io - Cloud 

We are using [Adafruit.io](https://io.adafruit.com) as the MQTT Broker and it's also have dashboard with lot of widgets  .So first you need to create an account if you did't have one [Adafruit.io](https://io.adafruit.com) or login with your credentials. 

![adafruit](../Voicecontrolled_light_adafruitio/img/008.png)

after login , create MQTT feed by clicking **Feeds** on the left menu bar and Click `create a New Feed` under the `Actions` bar .

![adafruit](../Voicecontrolled_light_adafruitio/img/009.png)

In the following window give a name for our new Feed , like **onoff** and click create. next we need to setup a dashboard for UI control , for that click **Dashboard** on the left menu bar and clikc `create a New Dashboard` under `bar`.

![adafruit](../Voicecontrolled_light_adafruitio/img/010.png)

give a name to our new dashboard , I just put **Switch** . 

![adafruit](../Voicecontrolled_light_adafruitio/img/011.png)

Now we can see the dashbord listed under the dashboard menu .

![adafruit](../Voicecontrolled_light_adafruitio/img/012.png)

for editing the dashboard , select the dashboard by check the check box and click `create a new block` on top right menu .and the following window select the **Toggle** .

![adafruit](../Voicecontrolled_light_adafruitio/img/013.png)

on the next step select the right Group/Feed and clikc `Next setp`.

![adafruit](../Voicecontrolled_light_adafruitio/img/014.png)

next we setup the `Block` , just leave as default and click `Create block`

![adafruit](../Voicecontrolled_light_adafruitio/img/015.png)

and We are done with the cloud part , our dashbord will look like this .

![adafruit](../Voicecontrolled_light_adafruitio/img/016.png)




## Step 5: Code


```

#include "WiFi.h"
#include "Adafruit_MQTT.h"
#include "Adafruit_MQTT_Client.h"

#define WIFI_SSID "WiFi Name"
#define WIFI_PASS "WiFi Password"

#define MQTT_SERV "io.adafruit.com"
#define MQTT_PORT 1883
#define MQTT_NAME "USERNAME"
#define MQTT_PASS "PASSWORD"

//Set up MQTT and WiFi clients
WiFiClient client;
Adafruit_MQTT_Client mqtt(&client, MQTT_SERV, MQTT_PORT, MQTT_NAME, MQTT_PASS);

//Set up the feed you're subscribing to
Adafruit_MQTT_Subscribe onoff = Adafruit_MQTT_Subscribe(&mqtt, MQTT_NAME "/f/onoff");


void setup()
{
  Serial.begin(9600);

  //Connect to WiFi
  Serial.print("\n\nConnecting Wifi... ");
  WiFi.begin(WIFI_SSID, WIFI_PASS);
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
  }

  Serial.println("OK!");

  //Subscribe to the onoff feed
  mqtt.subscribe(&onoff);

  pinMode(13, OUTPUT);
  digitalWrite(13, HIGH);
}

void loop()
{
  MQTT_connect();
  
  //Read from our subscription queue until we run out, or
  //wait up to 5 seconds for subscription to update
  Adafruit_MQTT_Subscribe * subscription;
  while ((subscription = mqtt.readSubscription(5000)))
  {
    //If we're in here, a subscription updated...
    if (subscription == &onoff)
    {
      //Print the new value to the serial monitor
      Serial.print("onoff: ");
      Serial.println((char*) onoff.lastread);
      
      //If the new value is  "ON", turn the light on.
      //Otherwise, turn it off.
      if (!strcmp((char*) onoff.lastread, "ON"))
      {
        //Active low logic
        digitalWrite(13, LOW);
      }
      else
      {
        digitalWrite(13, HIGH);
      }
    }
  }

  // ping the server to keep the mqtt connection alive
  if (!mqtt.ping())
  {
    mqtt.disconnect();
  }
}


/***************************************************
  Adafruit MQTT Library ESP8266 Example

  Must use ESP8266 Arduino from:
    https://github.com/esp8266/Arduino

  Works great with Adafruit's Huzzah ESP board & Feather
  ----> https://www.adafruit.com/product/2471
  ----> https://www.adafruit.com/products/2821

  Adafruit invests time and resources providing this open source code,
  please support Adafruit and open-source hardware by purchasing
  products from Adafruit!

  Written by Tony DiCola for Adafruit Industries.
  MIT license, all text above must be included in any redistribution
 ****************************************************/

void MQTT_connect() 
{
  int8_t ret;

  // Stop if already connected.
  if (mqtt.connected()) 
  {
    return;
  }

  Serial.print("Connecting to MQTT... ");

  uint8_t retries = 3;
  while ((ret = mqtt.connect()) != 0) // connect will return 0 for connected
  { 
       Serial.println(mqtt.connectErrorString(ret));
       Serial.println("Retrying MQTT connection in 5 seconds...");
       mqtt.disconnect();
       delay(5000);  // wait 5 seconds
       retries--;
       if (retries == 0) 
       {
         // basically die and wait for WDT to reset me
         while (1);
       }
  }
  Serial.println("MQTT Connected!");
}

```


## Step 6: Upload 

Before uploding the code we need to change some parameters , like wifi config,mqtt credentials ..

```
#define WIFI_SSID "WiFi Name"
#define WIFI_PASS "WiFi Password"

```

Replace the WiFi Name with your WiFi SSID name Password 


```
#define MQTT_NAME "Adafruit.io User Name"
#define MQTT_PASS "AIO key"

```
 In this code block re-place the MQTT_NAME with your Adafruit.io User name , and MQTT_PASS with AIO Key .

![adafruitio](../Voicecontrolled_light_adafruitio/img/018.png)


after uplaoding the code open your serial monitor (9600 buad rate) so we can see some usefull messages ,

![serialmonitor](../Voicecontrolled_light_adafruitio/img/019.png)


## Step Final. Control Light From Any Where in The World ✨

After the sketch uploading everything is fine we can now test the adafruit cloud dashboard .

![serialmonitor](../Voicecontrolled_light_adafruitio/img/020.png)

![serialmonitor](../Voicecontrolled_light_adafruitio/img/021.png)

we can simply control the LED that connected to the ESP32 by Toggle the Digital Switch . Yes , we just did some intenet connected Devices . we can now control the light anywhere in the world .



