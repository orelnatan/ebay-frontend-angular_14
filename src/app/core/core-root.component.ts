import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { EbayLocalStorageService } from './services';

@Component({
  selector: 'core-root',
  template: `
     <root-layout #logout="logout" (logout)="disconnect()">
        <layout-header header-primary>
            <app-navbar (logout)="logout.show()"></app-navbar>
        </layout-header>
 
        <router-outlet></router-outlet>
    </root-layout>
  `,
})
export class CoreRootComponent {
    constructor(
      private readonly router: Router,
      private readonly ebayLocalStorageService: EbayLocalStorageService,
    ) {}

    disconnect(): void {
      this.ebayLocalStorageService.clear();
    
      this.router.navigate(['/auth']);
    }
}



