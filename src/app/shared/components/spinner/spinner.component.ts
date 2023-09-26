import { Component, Input } from '@angular/core';

@Component({
  selector: 'spinner',
  template: `
    <mat-spinner [diameter]="diameter" [strokeWidth]="strokeWidth"></mat-spinner>
  `,
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
    @Input() diameter: number;
    @Input() strokeWidth: number;
    @Input() color: string;
}
