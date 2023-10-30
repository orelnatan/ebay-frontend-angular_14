import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { GlobalEventTypes } from '@ebay/core/models';
import { ComponentInterceptor } from '@ebay/shared/global-events';
import { ProductsService } from '@ebay/home/services';
import { IProduct } from '@ebay/home/models';

const PARAM_NAME: string = "familyId";

@ComponentInterceptor([
  { type: GlobalEventTypes.Search, action: "onSearch" }
], [ProductsService, ActivatedRoute])
@Component({
  selector: 'products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent {
  products$: Observable<IProduct[]> = this.productsService.fetchAll(this.familyId);

  keyword: string;
  
  constructor(
    private readonly productsService: ProductsService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  get familyId(): number {
    return Number(this.activatedRoute.snapshot.paramMap.get(PARAM_NAME));
  }

  onSearch(event: CustomEvent): void {
    this.keyword = event.detail.keyword;
  }
}
