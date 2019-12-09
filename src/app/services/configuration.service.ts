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

    // style contains a name / location of the external style file that will be
    // added to the header. If you have multiple style files that uses
    // different layouts you can specify it in this parameter. If you just
    // need to have single style then this parameter can be skipped and
    // in angular.json file style element can be injected by using inject:true
    // In addition you will need to adjust AppComponent and remove the code
    // that adds styles and then remove the isStylesLoaded parameter from
    // app.component.html file in *ngIf part.
    this.configuration.style = 'remote-style';

    // remote theme configuration #1
    this.configuration.headerColor = '#A3BFD9';
    this.configuration.bodyColor = '#E3E4E7';
    this.configuration.footerColor = '#A3BFD9';
    this.configuration.textColor = '#2C0E40';
    this.configuration.fontName = 'Indie Flower';

    // remote theme configuration #2
    // this.configuration.headerColor = '#EC7263';
    // this.configuration.bodyColor = '#204E7A';
    // this.configuration.footerColor = '#455C7B';
    // this.configuration.textColor = '#FFBC67';
    // this.configuration.fontName = 'Courier New';


    return of(this.configuration).pipe(delay(1000)).toPromise();
  }

  getConfig(): Configuration {
    return this.configuration;
  }

}
