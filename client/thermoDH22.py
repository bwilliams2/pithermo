#!/usr/bin/env python3
from Adafruit_DHT import DHT22, read_retry
import json
import time
from datetime import datetime
import RPi.GPIO as GPIO

import paho.mqtt.client as mqtt
# Setup heater controller GPIO settings
heater_channel = 8
GPIO.setmode(GPIO.BOARD)
GPIO.setup(heater_channel, GPIO.OUT)

def get_temp_humidity():
    humidity, temp = read_retry(DHT22, 4)
    temp = (temp * 9/5) + 32
    return temp, humidity

class Heater(object):
    def __init__(self):
        self.temp_setting = 28
        self.mode = "off"
        self.temp_reading, self.humidity_reading = get_temp_humidity()
        self.client = mqtt.Client()
        self.client.username_pw_set(username="bryce",password="carcass")
        self.client.on_connect = self.on_connect
        self.client.on_message = self.on_message
        self.client.connect("192.168.1.21", 1883, 60)
        return

    def on_connect(self, client, userdata, flags, rc):
        print("connected with code " + str(rc))
        client.subscribe("garage/heater/temp/set")
        client.subscribe("garage/heater/mode/set")

    def on_message(self, client, userdata, msg):
        print(msg.topic)
        if msg.topic == "garage/heater/temp/set":
            temp = float(msg.payload.decode("utf-8"))
            self.update_temp(temp)
        elif msg.topic == "garage/heater/mode/set":
            mode = msg.payload.decode("utf-8")
            self.update_mode(mode)
    
    def update_mode(self, new_mode):
        self.mode = new_mode
    
    def update_temp(self, new_temp):
        self.temp_setting = new_temp
        print("New temperature setting is " + str(self.temp_setting))
    
    def set_state(self):
        if self.mode == "off":
            GPIO.output(heater_channel, 0)
            return
        if self.temp_setting - 2 >= self.temp_reading:
            self.client.publish("garage/heater/state", "heat")
            GPIO.output(heater_channel, 1)
        else:
            self.client.publish("garage/heater/state", "off")
            GPIO.output(heater_channel, 0)
        return

    def publish(self):
        self.temp_reading, self.humidity_reading = get_temp_humidity()
        self.client.publish("garage/DH22/temp", self.temp_reading)
        self.client.publish("garage/DH22/humidity", self.humidity_reading)
        self.client.publish("garage/heater/temp/current", self.temp_setting)
        self.client.publish("garage/heater/mode/current", self.mode)

    def run(self):
        while True:
            self.publish()
            self.client.loop()
            self.set_state()
            time.sleep(10)# sleep for 10 seconds before next call


if __name__ == "__main__":
    heat = Heater()
    heat.run()
