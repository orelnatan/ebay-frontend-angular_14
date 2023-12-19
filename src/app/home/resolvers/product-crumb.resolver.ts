import { Injectable }  from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, lastValueFrom, of as observableOf } from 'rxjs';

import { BreadcrumbAbstractResolver, ICrumb } from '@ebay/shared/breadcrumbs';

import { ProductsService } from '../services';
import { IProduct } from '../models';

@Injectable()
export class ProductCrumbResolver implements BreadcrumbAbstractResolver {
  constructor(
    private readonly productsService: ProductsService,
    private readonly titleCasePipe: TitleCasePipe
  ) {}

  resolve(routeSnapshot: ActivatedRouteSnapshot): Observable<Promise<ICrumb>> {
    return observableOf(
      lastValueFrom(this.productsService.fetchSingle(routeSnapshot.params?.['productId'], routeSnapshot.params?.['familyId']))
      .then((product: IProduct) => {
        return {
          name: this.titleCasePipe.transform(product.name),
          image: product.image
        } as ICrumb
      })
    )
  }
}