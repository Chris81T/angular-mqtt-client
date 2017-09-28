import { AngularMqttClientPage } from './app.po';

describe('angular-mqtt-client App', () => {
  let page: AngularMqttClientPage;

  beforeEach(() => {
    page = new AngularMqttClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
