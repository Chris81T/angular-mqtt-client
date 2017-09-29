import { Injectable } from '@angular/core';

import { } from 'paho-mqtt';

import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

/**
 * For this service the javascript lib paho-mqtt and also the definetly typed definition @types/paho-mqtt must be installed using npm
 */
@Injectable()
export class MqttClientService {
  
  private mqttClient: Paho.MQTT.Client;

  private subject$$ = new Subject<Paho.MQTT.Message>();

  constructor() { 
  }

  connect(url: string, port: number, clientId: string) {
    console.log(`[MqttClientService] connect to ${url}:${port} - clientId = ${clientId}`);

    this.mqttClient = new Paho.MQTT.Client(url, port, clientId);
    this.mqttClient.onMessageArrived = (message: Paho.MQTT.Message) => {
      this.subject$$.next(message);
    };

    this.mqttClient.onConnectionLost = (error: Paho.MQTT.MQTTError) => {
      if (error.errorCode !== 0) {
        console.log('Connection lost! Poke an error!');
        this.subject$$.error(error);
      }
    };

    this.mqttClient.connect({
      onSuccess: () => {
        console.log('Client is connected :-)');
      }
    });    
  }

  disconnect() {
    console.log('[MqttClientService] disconnect');
    this.mqttClient.disconnect();
  }

  subscribe(topic: string): Subscription {    
    if (this.mqttClient.isConnected) {
      this.mqttClient.subscribe(topic);
    }

    return this.subject$$.asObservable().subscribe((message) => {
      console.log('INCOMING ', message.destinationName);
    });      
  }
}