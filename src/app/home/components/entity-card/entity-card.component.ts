import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() description: string;

  @Output() update: EventEmitter<void> = new EventEmitter();

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  navigate(id: number): void {
    this.router.navigate([id], { relativeTo: this.activatedRoute })
  }
}
