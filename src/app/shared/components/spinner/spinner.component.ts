import { Component } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'spinner',
  template: `
    <mat-spinner [diameter]="65" [strokeWidth]="5"></mat-spinner>
  `,
  standalone: true,
  imports: [
    MatProgressSpinnerModule
  ]
})
export class SpinnerComponent {}
