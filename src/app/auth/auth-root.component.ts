import { Component } from '@angular/core';

@Component({
  selector: 'auth-root',
  template: `
    <root-layout>
      <router-outlet></router-outlet>
    </root-layout>
  `,
})
export class AuthRootComponent {}
