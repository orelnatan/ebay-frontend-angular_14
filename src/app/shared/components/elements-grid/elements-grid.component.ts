import { Component, Input } from '@angular/core';

@Component({
  selector: 'elements-grid',
  templateUrl: './elements-grid.component.html',
  styleUrls: ['./elements-grid.component.scss'],
  standalone: true,
})
export class ElementsGridComponent {
  @Input() elementMinSizePx: number;
}
