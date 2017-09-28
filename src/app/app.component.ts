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
    this.mqttService.connect('broker.hivemq.com', '8000', 'ngClient');
  }

}
