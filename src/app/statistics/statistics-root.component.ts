import { Component } from '@angular/core';

@Component({
  selector: 'statistics-root',
  template: `
    <root-layout>
       <app-primary-navbar></app-primary-navbar>
       <app-secondary-navbar></app-secondary-navbar>
       <app-sub-navbar></app-sub-navbar>

       <app-side-navbar></app-side-navbar>

       <router-outlet></router-outlet>
    </root-layout>
  `,
})
export class StatisticsRootComponent {}