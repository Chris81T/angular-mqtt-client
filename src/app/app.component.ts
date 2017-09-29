import { MqttClientService } from './shared/services/mqtt-client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'app';

  constructor(private mqttService: MqttClientService) {
  }
  
  ngOnInit(): void {
    console.log('Connect to HiveMQ Dashboard');
    this.mqttService.connect('broker.hivemq.com', 8000, 'ngClient');

    // TODO hacky solution - how to make it better?
    setTimeout(() => {
      console.log('First subscription...');
      this.mqttService.subscribe('familia899/#');
    }, 1000);
    
    setTimeout(() => {
      console.log('First subscription...');
      this.mqttService.subscribe('uc/#');
    }, 5000);
    
    setTimeout(() => {
      console.log('About to disconnect...');
      this.mqttService.disconnect();      
    }, 10000);
  }

}
