import { Component } from '@angular/core';

@Component({
  selector: 'home-root',
  template: `
    <root-layout>
        <layout-header header-primary>
            <utils-panel></utils-panel>
        </layout-header>

        <layout-header header-secondary>
            <crumbsbar></crumbsbar>
        </layout-header>

        <layout-sidebar side-primary>
            <side-navbar></side-navbar>
        </layout-sidebar>

        <router-outlet></router-outlet>
    </root-layout>
  `,
})
export class HomeRootComponent {}