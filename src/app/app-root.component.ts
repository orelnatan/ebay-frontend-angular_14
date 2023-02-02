import { Component } from '@angular/core';

import { EbayLocalStorageService } from './core/services';

@Component({
  selector: 'app-root',
  template: `
    <root-layout [forRoot]="true">  
        <router-outlet></router-outlet>
    </root-layout>
  `,
})
export class AppRootComponent {
  constructor(
    private readonly ebayLocalStorageService: EbayLocalStorageService
  ) {}
}
