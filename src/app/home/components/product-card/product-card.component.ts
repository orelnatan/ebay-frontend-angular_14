import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IProduct } from '@ebay/home/models';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input() product: IProduct;

  @Output() update: EventEmitter<IProduct> = new EventEmitter();
}
