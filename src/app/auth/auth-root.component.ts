import { Component } from '@angular/core';

@Component({
  selector: 'auth-root',
  template: `
  <root-layout>
    <layout-header header-primary>
      <crumbs-navbar [showLatestOnMobile]="2"></crumbs-navbar>
    </layout-header>

    <router-outlet></router-outlet>
  </root-layout>
  `,
})
export class AuthRootComponent {}
