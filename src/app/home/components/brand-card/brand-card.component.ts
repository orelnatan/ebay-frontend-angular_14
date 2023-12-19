import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IBrand } from '@ebay/home/models';

@Component({
  selector: 'brand-card',
  templateUrl: './brand-card.component.html',
})
export class BrandCardComponent {
  @Input() brand: IBrand;

  @Output() update: EventEmitter<IBrand> = new EventEmitter();
}
