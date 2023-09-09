import { Injectable }  from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, lastValueFrom, of as observableOf } from 'rxjs';

import { BreadcrumbResolver, ICrumb } from '@ebay/shared/breadcrumbs';

import { FamiliesService } from '../services';
import { IFamily } from '../models';

@Injectable()
export class FamilyCrumbResolver implements BreadcrumbResolver {
    constructor(
        private readonly familiesService: FamiliesService,
        private readonly titleCasePipe: TitleCasePipe
    ) {}

    resolve(routeSnapshot: ActivatedRouteSnapshot, stateSnapshot: RouterStateSnapshot): Observable<Promise<ICrumb>> {
        return observableOf(
            lastValueFrom(this.familiesService.getSingleEntity(routeSnapshot.params?.['categoryId'], routeSnapshot.params?.['familyId']))
            .then((family: IFamily) => {
                return {
                    name: this.titleCasePipe.transform(family.name)
                } as ICrumb
            })
        )
    }
}