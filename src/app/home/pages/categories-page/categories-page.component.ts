import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ICategory } from '@ebay/home/models';
import { CategoriesService } from '@ebay/home/services';

const BRAND_ID_PARAM_NAME: string = "brandId";

@Component({
  selector: 'categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent {
    categories$: Observable<ICategory[]> = this.categoriesService.fetchByBrandId(
       parseInt(this.activatedRoute.snapshot.paramMap.get(BRAND_ID_PARAM_NAME)!)
    );

    constructor(
        private readonly categoriesService: CategoriesService,
        private readonly activatedRoute: ActivatedRoute
    ) {}

}
