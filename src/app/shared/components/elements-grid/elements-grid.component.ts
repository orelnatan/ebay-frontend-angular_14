import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'elements-grid',
  templateUrl: './elements-grid.component.html',
  styleUrls: ['./elements-grid.component.scss'],
  standalone: true,
  imports: [
    CommonModule
  ]
})
export class ElementsGridComponent {
  @Input() elementSize: number;
}
