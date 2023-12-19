import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { GlobalEventTypes } from '@ebay/core/models';
import { ComponentInterceptor } from '@ebay/shared/global-events';
import { CategoriesService } from '@ebay/home/services';
import { ICategory } from '@ebay/home/models';

const PARAM_NAME: string = "brandId";

@ComponentInterceptor([
  { type: GlobalEventTypes.Search, action: "search" },
  { type: GlobalEventTypes.Create, action: "create" }
], [Router, ActivatedRoute, CategoriesService])
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
  ) {}

  get brandId(): number {
    return Number(this.activatedRoute.snapshot.paramMap.get(PARAM_NAME));
  }

  search(event: CustomEvent): void {
    this.keyword = event.detail.keyword;
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
