import { Component, Input } from '@angular/core';

@Component({
  selector: 'entity-card',
  templateUrl: './entity-card.component.html',
  styleUrls: ['./entity-card.component.scss'],
})
export class EntityCardComponent {
  @Input() id: number;
  @Input() name: string;
  @Input() image: string;
  @Input() link: string;
}
