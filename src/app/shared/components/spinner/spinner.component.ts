import { Component, Input } from '@angular/core';

@Component({
  selector: 'spinner',
  template: `
    <mat-spinner [diameter]="diameter" [strokeWidth]="strokeWidth" [color]="color"></mat-spinner>
  `,
})
export class SpinnerComponent {
    @Input() diameter: number;
    @Input() strokeWidth: number;
    @Input() color: string;
}
