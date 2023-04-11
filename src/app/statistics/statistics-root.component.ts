import { Component } from '@angular/core';

@Component({
  selector: 'statistics-root',
  template: `
    <root-layout>
        <router-outlet></router-outlet>
    </root-layout>
  `,
})
export class StatisticsRootComponent {}