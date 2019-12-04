import { Injectable } from '@angular/core';
import { Configuration } from '../models/configuration/configuration';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private configuration = new Configuration();

  constructor() { }

  // This is where you make a remote call to retrieve configuration for the application
  load(): Promise<Configuration> {

    this.configuration.style = 'blue-module';
    this.configuration.fontName = 'Monoton';

    // alternative theme
    // this.configuration.style = 'green-module';
    // this.configuration.fontName = 'Courier New';

    return of(this.configuration).pipe(delay(1000)).toPromise();
  }

  getConfig(): Configuration {
    return this.configuration;
  }

}
