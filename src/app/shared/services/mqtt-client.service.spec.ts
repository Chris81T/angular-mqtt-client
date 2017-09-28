import { TestBed, inject } from '@angular/core/testing';

import { MqttClientService } from './mqtt-client.service';

describe('MqttClientService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MqttClientService]
    });
  });

  it('should be created', inject([MqttClientService], (service: MqttClientService) => {
    expect(service).toBeTruthy();
  }));
});
