import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Interceptor } from '@ebay/shared/global-events';

import { GlobalEventTypes } from './models';

@Interceptor([{ type: GlobalEventTypes.Logout, action: "exitApp" }])
@Component({
  selector: 'core-root',
  template: `
     <root-layout>
        <layout-header header-primary>
            <app-navbar></app-navbar>
        </layout-header>

        <router-outlet></router-outlet>
    </root-layout>
  `,
})
export class CoreRootComponent {
    constructor(
      private readonly router: Router
    ) {}

    exitApp(): void {
        this.router.navigate(['/auth']);
    }
}



