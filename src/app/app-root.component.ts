import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <root-layout>
        <router-outlet></router-outlet>
    </root-layout>
  `,
})
export class AppRootComponent {}
