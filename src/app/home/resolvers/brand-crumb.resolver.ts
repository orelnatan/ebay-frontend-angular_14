import { Injectable }  from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';

import { ICrumb } from '@ebay/shared/breadcrumbs/models';

import { BrandsService } from '../services';
import { IBrand } from '../models';

@Injectable()
export class BrandCrumbResolver implements Resolve<Observable<Promise<ICrumb>>> {
    constructor(
        private readonly brandsService: BrandsService,
        private readonly titleCasePipe: TitleCasePipe
    ) {}

    resolve(routeSnapshot: ActivatedRouteSnapshot, stateSnapshot: RouterStateSnapshot): Observable<Promise<ICrumb>> {
        return new Observable((observer: Subscriber<Promise<ICrumb>>): void => {
             observer.next(
                new Promise<ICrumb>((resolve: (value: ICrumb | PromiseLike<ICrumb>) => void): void => {
                    this.brandsService
                    .getSingleEntity(routeSnapshot.params?.['brandId'])
                    .subscribe((brand: IBrand): void => {
                        resolve({
                            name: this.titleCasePipe.transform(brand.name) 
                        } as ICrumb)
                    })
                })
            )
        })
    }
}