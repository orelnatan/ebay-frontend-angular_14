import { Component } from '@angular/core';

@Component({
  selector: 'home-root',
  template: `
    <root-layout>
       <layout-header header-primary>
          <utils-panel></utils-panel>
       </layout-header>

       <layout-header header-secondary>
            <breadcrumbs></breadcrumbs>
       </layout-header>

       <router-outlet></router-outlet>

       <layout-sidebar side-primary>
          <side-navbar></side-navbar>
       </layout-sidebar>
    </root-layout>
  `,
})
export class HomeRootComponent {}