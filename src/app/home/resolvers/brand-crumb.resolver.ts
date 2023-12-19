import { Injectable }  from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, lastValueFrom, of as observableOf } from 'rxjs';

import { BreadcrumbAbstractResolver, ICrumb } from '@ebay/shared/breadcrumbs';

import { BrandsService } from '../services';
import { IBrand } from '../models';

@Injectable()
export class BrandCrumbResolver implements BreadcrumbAbstractResolver {
  constructor(
    private readonly brandsService: BrandsService,
    private readonly titleCasePipe: TitleCasePipe
  ) {}

  resolve(routeSnapshot: ActivatedRouteSnapshot): Observable<Promise<ICrumb>> {
    return observableOf(
      lastValueFrom(this.brandsService.fetchSingle(routeSnapshot.params?.['brandId']))
      .then((brand: IBrand) => {
        return {
          name: this.titleCasePipe.transform(brand.name),
          image: brand.image
        } as ICrumb
      })
    )
  }
}