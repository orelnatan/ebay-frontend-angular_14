import { Component, Input } from '@angular/core';

import { IBrand } from '@ebay/home/models';

import { EntityCardComponent } from '../entity-card';

@Component({
  selector: 'brand-card',
  templateUrl: './brand-card.component.html',
  standalone: true,
  imports: [
    EntityCardComponent
  ]
})
export class BrandCardComponent {
    @Input() brand: IBrand;
}
