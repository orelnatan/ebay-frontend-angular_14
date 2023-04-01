import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { CategoriesService } from '@ebay/home/services';
import { ICategory } from '@ebay/shared/cards/models';

const BRAND_PARAM_NAME: string = "brand";

@Component({
  selector: 'categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent {
  categories$: Observable<ICategory[]> = this.categoriesService.fetchAll(this.brandId);

  constructor(
      public readonly categoriesService: CategoriesService,
      private readonly activatedRoute: ActivatedRoute
  ) {}

  get brandId(): number {
    return Number(this.activatedRoute.snapshot.paramMap.get(BRAND_PARAM_NAME)?.split('#')[1]!)
  }
}
