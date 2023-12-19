import { Injectable }  from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable, lastValueFrom, of as observableOf } from 'rxjs';

import { BreadcrumbAbstractResolver, ICrumb } from '@ebay/shared/breadcrumbs';

import { FamiliesService } from '../services';
import { IFamily } from '../models';

@Injectable()
export class FamilyCrumbResolver implements BreadcrumbAbstractResolver {
  constructor(
    private readonly familiesService: FamiliesService,
    private readonly titleCasePipe: TitleCasePipe
  ) {}

  resolve(routeSnapshot: ActivatedRouteSnapshot): Observable<Promise<ICrumb>> {
    return observableOf(
      lastValueFrom(this.familiesService.fetchSingle(routeSnapshot.params?.['familyId'], routeSnapshot.params?.['categoryId']))
      .then((family: IFamily) => {
        return {
          name: this.titleCasePipe.transform(family.name),
          image: family.image
        } as ICrumb
      })
    )
  }
}