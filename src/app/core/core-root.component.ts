import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { EbayLocalStorageService } from './services';

@Component({
  selector: 'core-root',
  template: `
    <root-layout logout #logout="logout" (logout)="disconnect()">
      <primary-navbar 
          (logout)="logout.showLogoutModal()">
      </primary-navbar>

      <router-outlet></router-outlet>
    </root-layout>
  `,
})
export class CoreRootComponent {
    constructor(
      private readonly routerService: Router,
      private readonly ebayLocalStorageService: EbayLocalStorageService,
    ) {}

    disconnect(): void {
      this.ebayLocalStorageService.clear();
    
      this.routerService.navigate(['/auth']);
    }
}



