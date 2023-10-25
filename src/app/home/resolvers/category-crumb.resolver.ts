import { Injectable }  from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, lastValueFrom, of as observableOf } from 'rxjs';

import { BreadcrumbResolver, ICrumb } from '@ebay/shared/breadcrumbs';

import { CategoriesService } from '../services';
import { ICategory } from '../models';

@Injectable()
export class CategoryCrumbResolver implements BreadcrumbResolver {
    constructor(
        private readonly categoriesService: CategoriesService,
        private readonly titleCasePipe: TitleCasePipe
    ) {}

    resolve(routeSnapshot: ActivatedRouteSnapshot, stateSnapshot: RouterStateSnapshot): Observable<Promise<ICrumb>> {
        return observableOf(
            lastValueFrom(this.categoriesService.getSingleEntity(routeSnapshot.params?.['brandId'], routeSnapshot.params?.['categoryId']))
            .then((category: ICategory) => {
                return {
                    name: this.titleCasePipe.transform(category.name),
                    image: category.image,
                } as ICrumb
            })
        )
    }
}