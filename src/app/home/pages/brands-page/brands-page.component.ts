import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { GEventTypes } from '@ebay/core/models';
import { Data, Interceptor, intercept } from '@ebay/shared/global-events';
import { BrandsService } from '@ebay/home/services';
import { IBrand } from '@ebay/home/models';

@Interceptor([
  { type: GEventTypes.Search, action: "search" },
  { type: GEventTypes.Create, action: "create" }
])
@Component({
  selector: 'brands-page',
  templateUrl: './brands-page.component.html',
  styleUrls: ['./brands-page.component.scss']
})
export class BrandsPageComponent {
  brands$: Observable<IBrand[]> = this.brandsService.fetchAll();

  keyword: string;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly brandsService: BrandsService,
  ) {
    intercept(this);
  }

  search(event: Data): void {
    this.keyword = event["keyword"];
  }

  update(brand: IBrand): void {
    this.router.navigate(["update/brand"], { 
      relativeTo: this.activatedRoute,
      queryParams: {
        entityId: brand.id,
      }
    });
  }

  create(): void {
    this.router.navigate(["create/brand"], {
      relativeTo: this.activatedRoute,
    });
  }
}
