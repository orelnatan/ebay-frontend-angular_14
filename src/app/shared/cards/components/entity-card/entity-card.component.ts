import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  navigate(id: number, link: string): void {
    this.router.navigate([id, link], { relativeTo: this.activatedRoute })
  }

}
