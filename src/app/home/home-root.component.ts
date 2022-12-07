import { Component } from '@angular/core';

@Component({
  selector: 'home-root',
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
export class HomeRootComponent {}





/*
to control the navbar visibility in runtime:

HTML:
  <app-navbar *ngIf="withNavbar"></app-navbar>

TS:
  withNavbar: boolean = true;

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {}

  hideNavbar() {
    this.withNavbar = false;

    this.changeDetectorRef.detectChanges();
  }
*/
