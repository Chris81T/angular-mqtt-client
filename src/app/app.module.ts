import { MqttClientService } from './shared/services/mqtt-client.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MqttClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
