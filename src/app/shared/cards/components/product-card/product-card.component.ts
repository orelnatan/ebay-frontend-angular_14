import { Component, Input } from '@angular/core';

import { IProduct } from '../../models';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
    @Input() product: IProduct;
}
