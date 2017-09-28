import { Injectable } from '@angular/core';

import { Paho } from 'paho-mqtt';

@Injectable()
export class MqttClientService {
  
  private mqttClient: any;

  constructor() { 
  }

  connect(url: string, port: string, clientId: string) {
    console.log(`[MqttClientService] connect to ${url}:${port} - clientId = ${clientId}`);

    this.mqttClient = new Paho.MQTT.Client(url, port, clientId);
  }

}

/**
 * Offene Punkte
 * *************
 * 
 * Angular Projekt --> Reine Service Bereitstellung - hier wird z.B. das paho-mqtt als JS lib benötigt (npm install --save paho-mqtt)
 * Verwendung von 3rd Party Libs
 * 'Interface' as Angular Service - Injectable?! (Impl austauschbar machen)
 * Umgang mit den 'spec.ts'
 * 
 */


 /*

console.log('Ready to connect via MQTT(ws)...');

// Create a client instance
var client = new Paho.MQTT.Client('broker.hivemq.com', Number(8000), "paho-mqtt-client-testor");

// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// connect the client
client.connect({onSuccess:onConnect});


// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect");
  client.subscribe("World");
  var message = new Paho.MQTT.Message("Hello");
  message.destinationName = "World";
  client.send(message);
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost:"+responseObject.errorMessage);
  }
}

// called when a message arrives
function onMessageArrived(message) {
  console.log("onMessageArrived:"+message.payloadString);
}

 */