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
  style: string;
  isStylesLoaded = false;
  isFontsLoaded = false;

  constructor(private configurationService: ConfigurationService) { }

  ngOnInit(): void {
    const fontName = this.configurationService.getConfig().fontName;

    this.style = this.configurationService.getConfig().style;
    const stylesheet = document.createElement('link');

    stylesheet.addEventListener('load', () => {
      document.documentElement.style.setProperty('--font-name', fontName);
      this.isStylesLoaded = true;
    });

    stylesheet.rel = 'stylesheet';
    stylesheet.href = this.configurationService.getConfig().style + '.css';

    WebFontLoader.load({
      active: () => {
        this.isFontsLoaded = true;
      },
      google: {
        families: [fontName]
      }
    });

    document.getElementsByTagName('head')[0].appendChild(stylesheet);
  }

}
