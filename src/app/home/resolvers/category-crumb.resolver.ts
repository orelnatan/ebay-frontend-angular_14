import { Injectable }  from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, lastValueFrom, of as observableOf } from 'rxjs';

import { BreadcrumbAbstractResolver, ICrumb } from '@ebay/shared/breadcrumbs';

import { CategoriesService } from '../services';
import { ICategory } from '../models';

@Injectable()
export class CategoryCrumbResolver implements BreadcrumbAbstractResolver {
  constructor(
    private readonly categoriesService: CategoriesService,
    private readonly titleCasePipe: TitleCasePipe
  ) {}

  resolve(routeSnapshot: ActivatedRouteSnapshot): Observable<Promise<ICrumb>> {
    return observableOf(
      lastValueFrom(this.categoriesService.fetchSingle(routeSnapshot.params?.['categoryId'], routeSnapshot.params?.['brandId']))
      .then((category: ICategory) => {
        return {
          name: this.titleCasePipe.transform(category.name),
          image: category.image,
        } as ICrumb
      })
    )
  }
}