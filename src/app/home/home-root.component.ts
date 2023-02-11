import { Component } from '@angular/core';

@Component({
  selector: 'home-root',
  template: `
    <root-layout>
       <primary-navbar></primary-navbar>
       <secondary-navbar></secondary-navbar>
       <sub-navbar></sub-navbar>

       <side-navbar></side-navbar>

       <router-outlet></router-outlet>
    </root-layout>
  `,
})
export class HomeRootComponent {}