import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { CategoriesService } from '@ebay/home/services';
import { ICategory } from '@ebay/shared/cards/models';

const BRAND_ID_PARAM_NAME: string = "brandId";

@Component({
  selector: 'categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent {
  categories$: Observable<ICategory[]> = this.categoriesService.fetchAll(
    parseInt(this.activatedRoute.snapshot.paramMap.get(BRAND_ID_PARAM_NAME)!)
  );

  constructor(
      private readonly categoriesService: CategoriesService,
      private readonly activatedRoute: ActivatedRoute
  ) {}
}
