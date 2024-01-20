import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { GEventTypes } from '@ebay/core/models';
import { Data, Interceptor, intercept } from '@ebay/shared/global-events';
import { CategoriesService } from '@ebay/home/services';
import { ICategory } from '@ebay/home/models';

const PARAM_NAME: string = "brandId";

@Interceptor([
  { type: GEventTypes.Search, action: "search" },
  { type: GEventTypes.Create, action: "create" }
])
@Component({
  selector: 'categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent {
  categories$: Observable<ICategory[]> = this.categoriesService.fetchAll(this.brandId);

  keyword: string;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly categoriesService: CategoriesService,
  ) {
    intercept(this);
  }

  get brandId(): number {
    return Number(this.activatedRoute.snapshot.paramMap.get(PARAM_NAME));
  }

  search(event: Data): void {
    this.keyword = event["keyword"];
  }

  update(category: ICategory): void {
    this.router.navigate(["update/category"], { 
      relativeTo: this.activatedRoute,
      queryParams: {
        entityId: category.id,
        parentId: this.brandId
      }
    });
  }

  create(): void {
    this.router.navigate(["create/category"], {
      relativeTo: this.activatedRoute,
      queryParams: {
        parentId: this.brandId 
      }
    })
  }
}
