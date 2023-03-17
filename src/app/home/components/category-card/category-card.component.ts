import { Component, Input } from '@angular/core';

import { ICategory } from '@ebay/home/models';

@Component({
  selector: 'category-card',
  templateUrl: './category-card.component.html',
})
export class CategoryCardComponent {
    @Input() category: ICategory;
}
