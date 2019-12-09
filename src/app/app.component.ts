import { Component, OnInit } from '@angular/core';

import { ConfigurationService } from './services/configuration.service';

import * as WebFontLoader from 'webfontloader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'remote-styles';
  isStylesLoaded = false;
  isFontsLoaded = false;

  constructor(private configurationService: ConfigurationService) { }

  ngOnInit(): void {

    const fontName = this.configurationService.getConfig().fontName;
    const headerColor = this.configurationService.getConfig().headerColor;
    const bodyColor = this.configurationService.getConfig().bodyColor;
    const footerColor = this.configurationService.getConfig().footerColor;
    const textColor = this.configurationService.getConfig().textColor;
    const style = this.configurationService.getConfig().style;

    const stylesheet = document.createElement('link');

    stylesheet.addEventListener('load', () => {
      document.documentElement.style.setProperty('--font-name', fontName);
      document.documentElement.style.setProperty('--header-color', headerColor);
      document.documentElement.style.setProperty('--body-color', bodyColor);
      document.documentElement.style.setProperty('--footer-color', footerColor);
      document.documentElement.style.setProperty('--text-color', textColor);
      this.isStylesLoaded = true;
    });

    stylesheet.rel = 'stylesheet';
    stylesheet.href = style + '.css';
    document.getElementsByTagName('head')[0].appendChild(stylesheet);

    WebFontLoader.load({
      active: () => {
        this.isFontsLoaded = true;
      },
      google: {
        families: [fontName]
      }
    });

  }

}
