import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { GEventTypes } from '@ebay/core/models';
import { Data, Interceptor, intercept } from '@ebay/shared/global-events';
import { ProductsService } from '@ebay/home/services';
import { IProduct } from '@ebay/home/models';

const PARAM_NAME: string = "familyId";

@Interceptor([
  { type: GEventTypes.Search, action: "search" },
  { type: GEventTypes.Create, action: "create" }
])
@Component({
  selector: 'products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent {
  products$: Observable<IProduct[]> = this.productsService.fetchAll(this.familyId);

  keyword: string;
  
  constructor(
    private readonly router: Router,
    private readonly productsService: ProductsService,
    private readonly activatedRoute: ActivatedRoute
  ) {
    intercept(this);
  }

  get familyId(): number {
    return Number(this.activatedRoute.snapshot.paramMap.get(PARAM_NAME));
  }

  search(event: Data): void {
    this.keyword = event["keyword"];
  }

  update(product: IProduct): void {
    this.router.navigate(["update/product"], { 
      relativeTo: this.activatedRoute,
      queryParams: {
        entityId: product.id,
        parentId: this.familyId
      }
    });
  }

  create(): void {
    this.router.navigate(["create/product"], {
      relativeTo: this.activatedRoute,
      queryParams: {
        parentId: this.familyId 
      }
    })
  }
}
