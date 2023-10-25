import { Injectable }  from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, lastValueFrom, of as observableOf } from 'rxjs';

import { BreadcrumbResolver, ICrumb } from '@ebay/shared/breadcrumbs';

import { ProductsService } from '../services';
import { IProduct } from '../models';

@Injectable()
export class ProductCrumbResolver implements BreadcrumbResolver {
    constructor(
        private readonly productsService: ProductsService,
        private readonly titleCasePipe: TitleCasePipe
    ) {}

    resolve(routeSnapshot: ActivatedRouteSnapshot, stateSnapshot: RouterStateSnapshot): Observable<Promise<ICrumb>> {
        return observableOf(
            lastValueFrom(this.productsService.getSingleEntity(routeSnapshot.params?.['familyId'], routeSnapshot.params?.['productId']))
            .then((product: IProduct) => {
                return {
                    name: this.titleCasePipe.transform(product.name),
                    image: product.image
                } as ICrumb
            })
        )
    }
}