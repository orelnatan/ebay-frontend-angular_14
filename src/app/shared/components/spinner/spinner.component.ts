import { Component } from '@angular/core';

@Component({
  selector: 'spinner',
  template: `
    <mat-spinner [diameter]="65" [strokeWidth]="5"></mat-spinner>
  `,
})
export class SpinnerComponent {}
