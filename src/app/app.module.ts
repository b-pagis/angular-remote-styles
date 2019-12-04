import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { ConfigurationService } from './services/configuration.service';
import { HttpClientModule } from '@angular/common/http';

export function loadConfig(configurationService: ConfigurationService) {
  return () => configurationService.load();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: loadConfig, deps: [ConfigurationService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
