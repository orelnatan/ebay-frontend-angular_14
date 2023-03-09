import { Component, Input } from '@angular/core';

import { ICategory } from '@ebay/home/models';

import { EntityCardComponent } from '../entity-card';

@Component({
  selector: 'category-card',
  templateUrl: './category-card.component.html',
  standalone: true,
  imports: [
    EntityCardComponent
  ]
})
export class CategoryCardComponent {
    @Input() category: ICategory;
}
