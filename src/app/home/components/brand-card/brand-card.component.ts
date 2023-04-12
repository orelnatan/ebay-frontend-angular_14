import { Component, Input } from '@angular/core';

import { IBrand } from '@ebay/home/models';

@Component({
  selector: 'brand-card',
  templateUrl: './brand-card.component.html',
})
export class BrandCardComponent {
    @Input() brand: IBrand;
}
