import { Component } from '@angular/core';

@Component({
  selector: 'auth-root',
  template: `
    <root-layout>
      <primary-navbar></primary-navbar>   

      <router-outlet></router-outlet>
    </root-layout>
  `,
})
export class AuthRootComponent {}
