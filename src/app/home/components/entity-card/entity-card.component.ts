import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'entity-card',
  templateUrl: './entity-card.component.html',
  styleUrls: ['./entity-card.component.scss'],
  standalone: true,
  imports: [
    RouterModule
  ]
})
export class EntityCardComponent {
  @Input() id: number;
  @Input() name: string;
  @Input() image: string;
  @Input() link: string;
}
