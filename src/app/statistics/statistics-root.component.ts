import { Component } from '@angular/core';

@Component({
  selector: 'statistics-root',
  template: `
    <root-layout>
       <secondary-navbar></secondary-navbar>
       <sub-navbar></sub-navbar>

       <side-navbar></side-navbar>

       <router-outlet></router-outlet>
    </root-layout>
  `,
})
export class StatisticsRootComponent {}